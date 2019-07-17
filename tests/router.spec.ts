import { makeExecutableSchema } from 'graphql-tools';
import * as supertest from 'supertest';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { schema, models } from './schema';
import { createRouter } from '../src/express';
import { createSofa } from '../src';

test('should work with Query and variables', async () => {
  const sofa = createSofa({
    schema,
  });

  sofa.models = models;

  const router = createRouter(sofa);
  const found = router.stack.find(r => r.route && r.route.path === '/user/:id');

  expect(found).toBeDefined();

  const route: {
    path: string;
    methods: {
      get: boolean;
      post: boolean;
    };
  } = found.route;

  expect(Object.keys(route.methods).length).toEqual(1);
  expect(route.methods.get).toEqual(true);
});

test('should work with Mutation', async () => {
  const sofa = createSofa({
    schema,
  });

  sofa.models = models;

  const router = createRouter(sofa);
  const found = router.stack.find(
    r => r.route && r.route.path === '/add-random-food'
  );

  expect(found).toBeDefined();

  const route: {
    path: string;
    methods: {
      get: boolean;
      post: boolean;
    };
  } = found.route;

  expect(Object.keys(route.methods).length).toEqual(1);
  expect(route.methods.post).toEqual(true);
});

test('should overwrite a default http method on demand', done => {
  const users = [
    {
      id: 'user:foo',
      name: 'Foo',
    },
  ];
  const spy = jest.fn(() => users);
  const spyMutation = jest.fn(() => users[0]);
  const sofa = createSofa({
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
          usersInfo(pageInfo: PageInfoInput!): [User]
        }

        type Mutation {
          addRandomUser: User
        }
      `,
      resolvers: {
        Query: {
          usersInfo: () => users,
        },
        Mutation: {
          addRandomUser: spyMutation,
        },
      },
    }),
    methodMap: {
      'Query.users': 'POST',
      'Mutation.addRandomUser': 'GET',
    },
  });

  const router = createRouter(sofa);
  const app = express();

  app.use(bodyParser.json());
  app.use('/api', router);

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
        expect(spy.mock.calls[0][1]).toEqual(params);

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
