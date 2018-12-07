import { ApolloLink } from 'apollo-link';
import { schema, models } from './schema';
import { createRouter } from '../src/router';

const router = createRouter({
  schema,
  models,
  link: new ApolloLink(),
});

test('should work with Query and variables', async () => {
  const found = router.stack.find(r => r.route && r.route.path === '/user');

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

test('should work with Model', async () => {
  const found = router.stack.find(
    r => r.route && r.route.path === '/model/user/:id',
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
  expect(route.methods.get).toEqual(true);
});

test('should work with Mutation', async () => {
  const found = router.stack.find(
    r => r.route && r.route.path === '/add-random-food',
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
