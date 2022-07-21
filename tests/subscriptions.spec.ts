jest.mock('@whatwg-node/fetch', () => {
  const original = jest.requireActual('@whatwg-node/fetch'); // Step 2.
  return {
    ...original,
    fetch: jest.fn().mockResolvedValue({
      text: () => ({}),
    }),
  };
});

import { fetch } from '@whatwg-node/fetch';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { PubSub } from 'graphql-subscriptions';
import { useSofa } from '../src';

const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const testBook1 = {
  id: 'book-id-1',
  title: 'Test Book 1',
  author: 'Test Author 1',
};
const testBook2 = {
  id: 'book-id-2',
  title: 'Test Book 2',
  author: 'Test Author 2',
};
const BOOK_ADDED = 'BOOK_ADDED';
const typeDefs = /* GraphQL */ `
  type Book {
    id: ID!
    title: String!
    author: String!
  }
  type Subscription {
    onBook: Book!,
    onBookBy(author: String!): Book!
  }
  type Query {
    books: [Book!]
  }
`;

test('should start subscriptions', async () => {
  (fetch as jest.Mock).mockClear();
  const pubsub = new PubSub();
  const sofa = useSofa({
    basePath: '/api',
    schema: makeExecutableSchema({
      typeDefs,
      resolvers: {
        Subscription: {
          onBook: {
            subscribe: () => pubsub.asyncIterator([BOOK_ADDED]),
          },
        },
      },
    }),
  });

  const res = await sofa.fetch('http://localhost:4000/api/webhook', {
    method: 'POST',
    body: JSON.stringify({
      subscription: 'onBook',
      url: '/book',
    }),
  });

  expect(res.status).toBe(200);
  const resBody = await res.json();
  expect(resBody).toEqual({ id: expect.any(String) });
  pubsub.publish(BOOK_ADDED, { onBook: testBook1 });
  await delay(1000);
  expect(fetch).toBeCalledTimes(1);
  expect(fetch).toBeCalledWith('/book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: { onBook: { id: 'book-id-1', title: 'Test Book 1', author: 'Test Author 1' } },
    }),
  });
  pubsub.publish(BOOK_ADDED, { onBook: testBook2 });
  await delay(1000);
  expect(fetch).toBeCalledTimes(2);
  expect(fetch).toBeCalledWith('/book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        onBook: { id: 'book-id-2', title: 'Test Book 2', author: 'Test Author 2' } 
      }
    }),
  });
});

test('should stop subscriptions', async () => {
  (fetch as jest.Mock).mockClear();
  const pubsub = new PubSub();
  const sofa = useSofa({
    basePath: '/api',
    schema: makeExecutableSchema({
      typeDefs,
      resolvers: {
        Subscription: {
          onBook: {
            subscribe: () => pubsub.asyncIterator([BOOK_ADDED]),
          },
        },
      },
    }),
  });

  const res = await sofa.fetch('http://localhost:4000/api/webhook', {
    method: 'POST',
    body: JSON.stringify({
      subscription: 'onBook',
      url: '/book',
    }),
  });
  expect(res.status).toBe(200);
  const resBody = await res.json();
  pubsub.publish(BOOK_ADDED, { onBook: testBook1 });
  await delay(1000);
  expect(fetch).toBeCalledTimes(1);
  const deleteRes = await sofa.fetch(
    `http://localhost:4000/api/webhook/${resBody.id}`,
    {
      method: 'DELETE',
    }
  );
  expect(deleteRes.status).toBe(200);
  pubsub.publish(BOOK_ADDED, { onBook: testBook2 });
  await delay(1000);
  expect(fetch).toBeCalledTimes(1);
});

test('should start subscriptions with parameters', async () => {
  (fetch as jest.Mock).mockClear();
  const pubsub = new PubSub();
  const sofa = useSofa({
    basePath: '/api',
    schema: makeExecutableSchema({
      typeDefs,
      resolvers: {
        Subscription: {
          onBookBy: {
            subscribe: withFilter(() => pubsub.asyncIterator(BOOK_ADDED), ( { onBookBy: { author: publishedBy } }, { author: targetAuthor }) => {
              return publishedBy === targetAuthor;
            }),
          },
        },
      },
    }),
  });

  const app = express();
  app.use(bodyParser.json());
  app.use('/api', sofa);

  const res = await supertest(app)
    .post('/api/webhook')
    .send({ subscription: 'onBookBy', url: '/bookBy', variables: { author: 'Test Author 1' } })
    .expect(200);
  expect(res.body).toEqual({ id: expect.any(String) });
  pubsub.publish(BOOK_ADDED, { onBookBy: testBook1 });
  await delay(1000);
  expect(fetch).toBeCalledTimes(1);
  expect(fetch).toBeCalledWith('/bookBy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: { onBookBy: { id: 'book-id-1', title: 'Test Book 1', author: 'Test Author 1' } },
    }),
  });
  pubsub.publish(BOOK_ADDED, { onBookBy: testBook2 });
  await delay(1000);
  expect(fetch).toBeCalledTimes(1);
});
