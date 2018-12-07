import * as express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import { getOperationAST, FieldNode } from 'graphql';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import * as graphqlHTTP from 'express-graphql';
import * as fetch from 'node-fetch';
import { BooksCollection, UsersCollection } from './collections';
import { typeDefs } from './types';
import { resolvers } from './resolvers';

// Sofa

import { useSofa, createSofa, ErorHandler } from '../src';

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

const fetchLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  fetch,
});

const cantExecuteNeverQuery: ErorHandler = res => {
  res.status(500).send('Query.never is disallowed');
};

const errorLink = new ApolloLink((req, forward) => {
  const op = getOperationAST(req.query, null);
  const field = op!.selectionSet.selections[0] as FieldNode;

  if (field.name.value === 'never') {
    throw cantExecuteNeverQuery;
  }

  return forward!(req);
});

const link = errorLink.concat(fetchLink);

app.use(
  '/api',
  useSofa({
    sofa,
    link,
    schema,
  })
);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
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
      never:        ${url}/api/never          <- will fail

    Models:
      User #1:      ${url}/api/model/user/1
      User #2:      ${url}/api/model/user/2
      Book #1:      ${url}/api/model/book/1
  `);
});
