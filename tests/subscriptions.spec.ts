jest.mock('axios', () => ({
  default: {
    post: jest.fn(),
  },
}));

import axios from 'axios';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { PubSub } from 'graphql-subscriptions';
import * as supertest from 'supertest';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { useSofa } from '../src';

const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const testBook1 = {
  id: 'book-id-1',
  title: 'Test Book 1',
};
const testBook2 = {
  id: 'book-id-2',
  title: 'Test Book 2',
};
const BOOK_ADDED = 'BOOK_ADDED';
const typeDefs = /* GraphQL */ `
  type Book {
    id: ID!
    title: String!
  }
  type Subscription {
    onBook: Book!
  }
  type Query {
    books: [Book!]
  }
`;

test('should start subscriptions', async () => {
  (axios.post as jest.Mock).mockClear();
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
  expect(axios.post).toBeCalledTimes(1);
  expect(axios.post).toBeCalledWith('/book', {
    data: { onBook: { id: 'book-id-1', title: 'Test Book 1' } },
  });
  pubsub.publish(BOOK_ADDED, { onBook: testBook2 });
  await delay(1000);
  expect(axios.post).toBeCalledTimes(2);
  expect(axios.post).toBeCalledWith('/book', {
    data: { onBook: { id: 'book-id-2', title: 'Test Book 2' } },
  });
});

test('should stop subscriptions', async () => {
  (axios.post as jest.Mock).mockClear();
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
  expect(axios.post).toBeCalledTimes(1);
  await supertest(app).delete(`/api/webhook/${res.body.id}`).expect(200);
  pubsub.publish(BOOK_ADDED, { onBook: testBook2 });
  await delay(1000);
  expect(axios.post).toBeCalledTimes(1);
});
