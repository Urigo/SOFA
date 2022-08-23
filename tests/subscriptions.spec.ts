jest.mock('cross-undici-fetch', () => ({
  fetch: jest.fn().mockResolvedValue(({
    text: () => ({})
  })),
}));

import { fetch } from 'cross-undici-fetch';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { PubSub, withFilter } from 'graphql-subscriptions';
import supertest from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
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

  const app = express();
  app.use(bodyParser.json());
  app.use('/api', sofa);

  const res = await supertest(app)
    .post('/api/webhook')
    .send({ subscription: 'onBook', url: '/book' })
    .expect(200);
  expect(res.body).toEqual({ id: expect.any(String) });
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

  const app = express();
  app.use(bodyParser.json());
  app.use('/api', sofa);

  const res = await supertest(app)
    .post('/api/webhook')
    .send({ subscription: 'onBook', url: '/book' })
    .expect(200);
  pubsub.publish(BOOK_ADDED, { onBook: testBook1 });
  await delay(1000);
  expect(fetch).toBeCalledTimes(1);
  await supertest(app).delete(`/api/webhook/${res.body.id}`).expect(200);
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
            subscribe: withFilter(() => pubsub.asyncIterator(BOOK_ADDED), (payload, variables) => {
              return payload.onBookBy.author === variables.author;
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
