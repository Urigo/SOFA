import { makeExecutableSchema } from '@graphql-tools/schema';
import * as supertest from 'supertest';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { useSofa } from '../src';

test('should work with Query and variables', async (done) => {
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

  supertest(app)
    .get('/api/user/test-id')
    .expect(200, (err, res) => {
      if (err) {
        done.fail(err);
      } else {
        expect(res.body).toEqual(testUser);
        expect((spy.mock.calls[0] as any[])[1]).toEqual({ id: 'test-id' });
        done();
      }
    });
});

test('should work with Mutation', async (done) => {
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

  supertest(app)
    .post('/api/add-random-food')
    .expect(200, (err, res) => {
      if (err) {
        done.fail(err);
      } else {
        expect(res.body).toEqual(pizza);
        expect((spy.mock.calls[0] as any[])[1]).toEqual({});
        done();
      }
    });
});

test('should overwrite a default http method on demand', (done) => {
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
    method: {
      'Query.users': 'POST',
      'Mutation.addRandomUser': 'GET',
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

  supertest(app)
    .post('/api/users')
    .send(params)
    .expect(200, (err, res) => {
      if (err) {
        done.fail(err);
      } else {
        expect(res.body).toEqual(users);
        expect((spy.mock.calls[0] as any[])[1]).toEqual(params);

        supertest(app)
          .get('/api/add-random-user')
          .send()
          .expect(200, (err, res) => {
            if (err) {
              done.fail(err);
            } else {
              expect(res.body).toEqual(users[0]);
              done();
            }
          });
      }
    });
});

test('should work with scalars', (done) => {
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

  supertest(app)
    .get('/api/foo')
    .send()
    .expect(200, (err, res) => {
      if (err) {
        done.fail(err);
      } else {
        expect(res.body).toEqual('bar');
        done();
      }
    });
});
