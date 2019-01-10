import { schema, models } from './schema';
import { createRouter } from '../src/express';
import { createSofa } from '../src';

const sofa = createSofa({
  schema,
});

sofa.models = models;

const router = createRouter(sofa);

test('should work with Query and variables', async () => {
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
