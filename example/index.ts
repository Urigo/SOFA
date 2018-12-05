import * as express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import { HttpLink } from 'apollo-link-http';
import * as graphqlHTTP from 'express-graphql';
import * as fetch from 'node-fetch';
import { BooksCollection, UsersCollection } from './collections';
import { typeDefs } from './types';
import { resolvers } from './resolvers';

// Sofa

import { useSofa, createSofa } from '../src';

const app = express();

const sofa = createSofa({
  models: {
    User(id: string) {
      return UsersCollection.get(id);
    },
    Book(id: string) {
      return BooksCollection.get(id);
    },
  },
});

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, sofa.typeDefs],
  resolvers: [resolvers, sofa.resolvers as any],
});

const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  fetch,
});

app.use(
  '/api',
  useSofa({
    sofa,
    link,
    schema,
  }),
);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

const port = 4000;

app.listen(port, () => {
  const url = `http://localhost:${4000}`;

  console.log(`
    GraphQL: ${url}/graphql
  `);

  console.log(`
    Queries:
      me:           ${url}/api/me
      users:        ${url}/api/users
      user:         ${url}/api/user?id=1

    Models:
      User #1:      ${url}/api/model/user/1
      User #2:      ${url}/api/model/user/2
      Book #1:      ${url}/api/model/book/1
  `);
});
