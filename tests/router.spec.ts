import { ApolloLink } from 'apollo-link';
import { schema, models } from './schema';
import { createRouter } from '../src/router';

const router = createRouter({
  schema,
  models,
  link: new ApolloLink(),
  rename: {
    Mutation: {
      addSalad: '/salad',
    },
    Book: '/book',
  },
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
    r => r.route && r.route.path === '/model/user/:id'
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

test('should handle custom paths', async () => {
  const salad = router.stack.find(r => r.route && r.route.path === '/salad');
  const book = router.stack.find(r => r.route && r.route.path === '/book/:id');

  expect(salad).toBeDefined();
  expect(book).toBeDefined();

  interface Root {
    path: string;
    methods: {
      get: boolean;
      post: boolean;
    };
  }

  const saladRoute: Root = salad.route;
  const bookRoute: Root = book.route;

  // salad
  expect(Object.keys(saladRoute.methods).length).toEqual(1);
  expect(saladRoute.methods.post).toEqual(true);
  // book
  expect(Object.keys(bookRoute.methods).length).toEqual(1);
  expect(bookRoute.methods.get).toEqual(true);
});
