import * as express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import { HttpLink } from 'apollo-link-http';
import * as graphqlHTTP from 'express-graphql';
import * as fetch from 'node-fetch';
import { BooksCollection, UsersCollection } from './collections';
import {typeDefs} from './types';
import {resolvers} from './resolvers';

// Sofa

import { useSofa, createSofa } from './api';

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
  typeDefs: [
    typeDefs,
    sofa.typeDefs,
  ],
  resolvers: [
    resolvers,
    sofa.resolvers as any,
  ],
});



const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  fetch,
});

app.use('/api', useSofa({
  sofa,
  link,
  schema
}));



app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(4000, () => {
  console.log('Ready');
});
