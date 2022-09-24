import { Response } from '@whatwg-node/fetch';
import { GraphQLError } from 'graphql';
import { createSchema } from 'graphql-yoga';
import { useSofa } from '../src';

test('should work with Query and variables', async () => {
  const testUser = {
    id: 'test-id',
    name: 'Test User',
  };
  const spy = jest.fn(() => testUser);
  const sofa = useSofa({
    basePath: '/api',
    schema: createSchema({
      typeDefs: /* GraphQL */ `
        type User {
          id: ID
          name: String
        }
        type Query {
          user(id: ID!): User
        }
      `,
      resolvers: {
        Query: {
          user: spy,
        },
      },
    }),
  });

  const res = await sofa.fetch('http://localhost:4000/api/user/test-id');
  expect(res.status).toBe(200);
  const resBody = await res.json();
  expect(resBody).toEqual(testUser);
  expect((spy.mock.calls[0] as any[])[1]).toEqual({ id: 'test-id' });
});

test('should work with Mutation', async () => {
  const pizza = { dough: 'dough', toppings: ['topping'] };
  const spy = jest.fn(() => ({ __typename: 'Pizza', ...pizza }));
  const sofa = useSofa({
    basePath: '/api',
    schema: createSchema({
      typeDefs: /* GraphQL */ `
        type Pizza {
          dough: String!
          toppings: [String!]
        }
        type Salad {
          ingredients: [String!]!
        }
        union Food = Pizza | Salad
        type Query {
          pizza: Pizza
        }
        type Mutation {
          addRandomFood: Food
        }
      `,
      resolvers: {
        Mutation: {
          addRandomFood: spy,
        },
      },
    }),
  });

  const res = await sofa.fetch('http://localhost:4000/api/add-random-food', {
    method: 'POST',
  });
  expect(res.status).toBe(200);
  const resBody = await res.json();
  expect(resBody).toEqual(pizza);
  expect((spy.mock.calls[0] as any[])[1]).toEqual({});
});

test('should work with Mutation + Query', async () => {
  const pizza = { dough: 'dough', toppings: ['topping'] };
  const spy = jest.fn(() => ({ __typename: 'Pizza', query: {}, ...pizza }));
  const sofa = useSofa({
    basePath: '/api',
    schema: createSchema({
      typeDefs: /* GraphQL */ `
        type Pizza {
          dough: String!
          toppings: [String!]
          query: Query
        }
        type Salad {
          ingredients: [String!]!
          query: Query
        }
        union Food = Pizza | Salad
        type Query {
          pizza: Pizza
          getPizzaById(id: String!): Pizza
        }
        type Mutation {
          addRandomFood(name: String!): Food
        }
      `,
      resolvers: {
        Mutation: {
          addRandomFood: spy,
        },
      },
    }),
  });

  const res = await sofa.fetch(
    'http://localhost:4000/api/add-random-food?name=test',
    {
      method: 'POST',
    }
  );
  const resBody = await res.json();
  expect(resBody).toEqual(pizza);
  expect((spy.mock.calls[0] as any[])[1]).toEqual({ name: 'test' });
});

test('should overwrite a default http method on demand', async () => {
  const users = [
    {
      id: 'user:foo',
      name: 'Foo',
    },
  ];

  const spy = jest.fn(() => users);
  const spyMutation = jest.fn(() => users[0]);

  const sofa = useSofa({
    basePath: '/api',
    schema: createSchema({
      typeDefs: /* GraphQL */ `
        input PageInfoInput {
          offset: Int
          limit: Int!
        }

        type User {
          id: ID
          name: String
        }

        type Query {
          users(pageInfo: PageInfoInput!): [User]
        }

        type Mutation {
          addRandomUser: User
        }
      `,
      resolvers: {
        Query: {
          users: spy,
        },
        Mutation: {
          addRandomUser: spyMutation,
        },
      },
    }),
    routes: {
      'Query.users': { method: 'POST' },
      'Mutation.addRandomUser': { method: 'GET' },
    },
  });

  const params = {
    pageInfo: {
      limit: 5,
    },
  };

  const queryRes = await sofa.fetch('http://localhost:4000/api/users', {
    method: 'POST',
    body: JSON.stringify(params),
  });
  expect(queryRes.status).toBe(200);
  const queryResBody = await queryRes.json();
  expect(queryResBody).toEqual(users);
  expect((spy.mock.calls[0] as any[])[1]).toEqual(params);

  const mutationRes = await sofa.fetch(
    'http://localhost:4000/api/add-random-user',
    {
      method: 'GET',
    }
  );
  expect(mutationRes.status).toBe(200);
  const mutationResBody = await mutationRes.json();
  expect(mutationResBody).toEqual(users[0]);
});

test('should overwrite a default path and responseStatus on demand', async () => {
  const users = [
    {
      id: 'user:foo',
      name: 'Foo',
    },
  ];
  const spy = jest.fn(() => users);
  const sofa = useSofa({
    basePath: '/api',
    schema: createSchema({
      typeDefs: /* GraphQL */ `
        type User {
          id: ID
          name: String
        }
        type Query {
          users(offset: Int, limit: Int!): [User]
        }
      `,
      resolvers: {
        Query: {
          users: spy,
        },
      },
    }),
    routes: {
      'Query.users': { path: '/my-users/:offset/:limit', responseStatus: 201 },
    },
  });

  const queryRes = await sofa.fetch('http://localhost:4000/api/my-users/2/5');
  expect(queryRes.status).toBe(201);
  const queryResBody = await queryRes.json();
  expect(queryResBody).toEqual(users);
  expect(spy).lastCalledWith(
    /* source */ undefined,
    /* args */ { offset: 2, limit: 5 },
    /* context */ expect.anything(),
    /* info */ expect.anything()
  );
});

test('should work with scalars', async () => {
  const sofa = useSofa({
    basePath: '/api',
    schema: createSchema({
      typeDefs: /* GraphQL */ `
        type Query {
          foo: String
        }
      `,
      resolvers: {
        Query: {
          foo() {
            return 'bar';
          },
        },
      },
    }),
  });

  const res = await sofa.fetch('http://localhost:4000/api/foo');
  expect(res.status).toBe(200);
  const resBody = await res.json();
  expect(resBody).toEqual('bar');
});

test('should support search params in url', async () => {
  const users = [
    {
      id: 'user:foo',
      name: 'Foo',
    },
  ];
  const spy = jest.fn(() => users);

  const sofa = useSofa({
    basePath: '/api',
    schema: createSchema({
      typeDefs: /* GraphQL */ `
        type User {
          id: ID
          name: String
        }
        type Query {
          users(count: Int!): [User]
        }
      `,
      resolvers: {
        Query: {
          users: spy,
        },
      },
    }),
  });

  const res = await sofa.fetch('http://localhost:4000/api/users?count=5');
  expect(res.status).toBe(200);
  const resBody = await res.json();
  expect(resBody).toEqual(users);
  expect(spy).lastCalledWith(
    /* source */ undefined,
    /* args */ { count: 5 },
    /* context */ expect.anything(),
    /* info */ expect.anything()
  );
});

test('should return a first error as json', async () => {
  const sofa = useSofa({
    basePath: '/api',
    schema: createSchema({
      typeDefs: /* GraphQL */ `
        type Query {
          foo: String!
          bar: String!
        }
      `,
      resolvers: {
        Query: {
          foo: () => {
            throw new GraphQLError('permission denied', {
              extensions: { code: 'PERMISSION_DENIED' },
            });
          },
        },
      },
    }),
  });

  const res = await sofa.fetch('http://localhost:4000/api/foo');
  expect(res.status).toBe(500);
  const resBody = await res.json();
  expect(resBody).toEqual({
    message: 'permission denied',
    path: ['foo'],
    extensions: { code: 'PERMISSION_DENIED' },
  });
});

test('should override error response with errorHandler', async () => {
  const sofa = useSofa({
    basePath: '/api',
    schema: createSchema({
      typeDefs: /* GraphQL */ `
        type Query {
          foo: String!
          bar: String!
        }
      `,
      resolvers: {
        Query: {
          foo: () => {
            throw new GraphQLError('permission denied', {
              extensions: { code: 'PERMISSION_DENIED' },
            });
          },
        },
      },
    }),
    errorHandler(errs) {
      const body = JSON.stringify({ message: errs[0].message });
      let status = 500;
      if (
        errs[0] instanceof GraphQLError &&
        errs[0].extensions.code === 'PERMISSION_DENIED'
      ) {
        status = 403;
      }
      return new Response(body, { status });
    },
  });

  const res = await sofa.fetch('http://localhost:4000/api/foo');
  expect(res.status).toBe(403);
  const resBody = await res.json();
  expect(resBody).toEqual({ message: 'permission denied' });
});
