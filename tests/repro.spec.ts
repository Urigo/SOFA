import { buildSchema, GraphQLError } from 'graphql';
import { useSofa } from '../src';
import { createSchema } from 'graphql-yoga';

function generateObjectType(
  name: string,
  fieldSet: Record<string, string>
): string {
  const fields: string[] = [];

  for (const fieldName in fieldSet) {
    const fieldType = fieldSet[fieldName];

    fields.push(generateField(fieldName, fieldType));
  }

  return `
    type ${name} {
      ${fields}
    }
  `;
}

function generateField(name: string, type: string) {
  return `${name}: ${type}`;
}

function generateMany(
  type: string,
  prefix: string,
  count: number
): Record<string, string> {
  const name = prefix + type;
  const fieldSet: Record<string, string> = {};

  while (count--) {
    fieldSet[`${name}_${count}`] = type;
  }

  return fieldSet;
}

export function generate({
  mutations,
  queries,
  subscriptions,
}: {
  mutations: number;
  queries: number;
  subscriptions: number;
}): string {
  const typeA = `
    type FooA {
      id: ID!
      name: String!
      createdAt: Float!
      foo: FooB
    }
  `;
  const typeB = `
    type FooB {
      id: ID!
      name: String!
      createdAt: Float!
      foo: FooC
    }
  `;
  const typeC = `
    type FooC {
      id: ID!
      name: String!
      createdAt: Float!
    }
  `;
  const type = `
    type Foo {
      id: ID!
      name: String!
      createdAt: Float!
      foo: FooA
    }
  `;

  const results: string[] = [type, typeA, typeB, typeC];

  if (queries) {
    results.push(
      generateObjectType('Query', generateMany('Foo', 'get', queries))
    );
  }

  if (mutations) {
    results.push(
      generateObjectType('Mutation', generateMany('Foo', 'create', mutations))
    );
  }

  if (subscriptions) {
    results.push(
      generateObjectType(
        'Subscription',
        generateMany('Foo', 'listen', subscriptions)
      )
    );
  }

  return results.join('\n');
}

test('memory issue', async () => {
  const schema = buildSchema(
    generate({
      queries: 1000,
      mutations: 1000,
      subscriptions: 1000,
    })
  );

  useSofa({ basePath: '/api', schema });
});

test('error extensions', async () => {
  const router = useSofa({
    basePath: '/api',
    schema: createSchema({
      typeDefs: /* GraphQL */ `
        type Query {
          me: Account
        }

        type Account {
          id: ID!
          name: String!
        }
      `,
      resolvers: {
        Query: {
          me: () => {
            throw new GraphQLError('account not found', {
              extensions: {
                code: 'ACCOUNT_NOT_FOUND',
                http: { status: 404 },
              },
            });
          },
        },
      },
    }),
  });

  for (let i = 0; i < 10; i++) {
    const res = await router.fetch('http://localhost/api/me');
    expect(res.status).toBe(404);
    const json = await res.json();
    expect(json).toEqual({
      errors: [
        {
          message: 'account not found',
          extensions: {
            code: 'ACCOUNT_NOT_FOUND',
          },
          path: ['me'],
        },
      ],
    });
  }
});
