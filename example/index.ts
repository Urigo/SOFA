import * as express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import * as bodyParser from 'body-parser';
import { typeDefs } from './types';
import { resolvers } from './resolvers';

// Sofa

import { useSofa } from '../src';

const app = express();

app.use(bodyParser.json());

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(
  '/api',
  useSofa({
    schema,
    ignore: ['User.favoriteBook'],
  })
);

const port = 4000;

app.listen(port, () => {
  const url = `http://localhost:${4000}`;

  console.log(`
    Queries:
      me:           ${url}/api/me
      users:        ${url}/api/users
      user:         ${url}/api/user/1
  `);
});
