import { buildSchema } from 'graphql';
import { useSofa } from '../src';

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

  useSofa({ schema });
});
