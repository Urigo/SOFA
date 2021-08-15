import { makeExecutableSchema } from '@graphql-tools/schema';
import supertest from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import { useSofa } from '../src';

test('should work with Query and variables', async () => {
  const testUser = {
    id: 'test-id',
    name: 'Test User',
  };
  const spy = jest.fn(() => testUser);
  const sofa = useSofa({
    basePath: '/api',
    schema: makeExecutableSchema({
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

  const app = express();
  app.use(bodyParser.json());
  app.use('/api', sofa);

  const res = await supertest(app).get('/api/user/test-id').expect(200);
  expect(res.body).toEqual(testUser);
  expect((spy.mock.calls[0] as any[])[1]).toEqual({ id: 'test-id' });
});

test('should work with Mutation', async () => {
  const pizza = { dough: 'dough', toppings: ['topping'] };
  const spy = jest.fn(() => ({ __typename: 'Pizza', ...pizza }));
  const sofa = useSofa({
    basePath: '/api',
    schema: makeExecutableSchema({
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

  const app = express();
  app.use(bodyParser.json());
  app.use('/api', sofa);

  const res = await supertest(app).post('/api/add-random-food').expect(200);
  expect(res.body).toEqual(pizza);
  expect((spy.mock.calls[0] as any[])[1]).toEqual({});
});

test('should work with Mutation + Query', async () => {
  const pizza = { dough: 'dough', toppings: ['topping'] };
  const spy = jest.fn(() => ({ __typename: 'Pizza', query: {}, ...pizza }));
  const sofa = useSofa({
    basePath: '/api',
    schema: makeExecutableSchema({
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

  const app = express();
  app.use(bodyParser.json());
  app.use('/api', sofa);

  const res = await supertest(app).post('/api/add-random-food?name=test').expect(200);
  expect(res.body).toEqual(pizza);
  expect((spy.mock.calls[0] as any[])[1]).toEqual({ name: "test" });
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
    schema: makeExecutableSchema({
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

  const app = express();
  app.use(bodyParser.json());
  app.use('/api', sofa);

  const params = {
    pageInfo: {
      limit: 5,
    },
  };

  const queryRes = await supertest(app)
    .post('/api/users')
    .send(params)
    .expect(200);
  expect(queryRes.body).toEqual(users);
  expect((spy.mock.calls[0] as any[])[1]).toEqual(params);

  const mutationRes = await supertest(app)
    .get('/api/add-random-user')
    .send()
    .expect(200);
  expect(mutationRes.body).toEqual(users[0]);
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
    schema: makeExecutableSchema({
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

  const app = express();
  app.use(bodyParser.json());
  app.use('/api', sofa);

  const queryRes = await supertest(app).get(`/api/my-users/2/5`).expect(201);
  expect(queryRes.body).toEqual(users);
  expect(spy).lastCalledWith(
    /* source */ undefined,
    /* args */ { offset: 2, limit: 5 },
    /* context */ expect.anything(),
    /* info */ expect.anything()
  );
});

test('should work with scalars', async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(
    '/api',
    useSofa({
      basePath: '/api',
      schema: makeExecutableSchema({
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
    })
  );

  const res = await supertest(app).get('/api/foo').send().expect(200);
  expect(res.body).toEqual('bar');
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
    schema: makeExecutableSchema({
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

  const app = express();
  app.use(bodyParser.json());
  app.use('/api', sofa);

  const res = await supertest(app).get('/api/users?count=5').expect(200);
  expect(res.body).toEqual(users);
  expect(spy).lastCalledWith(
    /* source */ undefined,
    /* args */ { count: 5 },
    /* context */ expect.anything(),
    /* info */ expect.anything()
  );
});
