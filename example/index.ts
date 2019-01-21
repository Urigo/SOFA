import * as express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import * as bodyParser from 'body-parser';
import * as useGraphQL from 'express-graphql';
import * as swaggerUi from 'swagger-ui-express';
import chalk from 'chalk';
import { resolve } from 'path';
import { typeDefs } from './types';
import { resolvers } from './resolvers';
import * as swaggerDocument from './swagger.json';

// Sofa

import sofa, { OpenAPI } from '../src';
import { logger } from '../src/logger';

const app = express();

app.use(bodyParser.json());

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: resolvers as any,
});

const openApi = OpenAPI({
  schema,
  info: {
    title: 'Example API',
    version: '3.0.0',
  },
});

app.use(
  '/api',
  sofa({
    schema,
    ignore: ['User.favoriteBook'],
    onRoute(info) {
      openApi.addRoute(info, {
        basePath: '/api',
      });
    },
  })
);

openApi.save(resolve(__dirname, './swagger.json'));

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/webhook', (req, res) => {
  logger.info('Received a webhook', req.body);

  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.send();
});

app.use(
  '/graphql',
  useGraphQL({
    schema,
    graphiql: true,
  })
);

const port = 4000;

app.listen(port, () => {
  const url = `http://localhost:${4000}`;

  function printUrl(path: string) {
    return chalk.gray(url + path);
  }

  console.log(`
    ${chalk.bold('GraphQL:')}        ${printUrl('/graphql')}

    ${chalk.bold('Queries:')}
      me:           ${printUrl('/api/me')}
      users:        ${printUrl('/api/users')}
      user:         ${printUrl('/api/user/1')}
      books:        ${printUrl('/api/books')}
      book:         ${printUrl('/api/book/1')}

    ${chalk.bold('Mutations:')}
      addBook:      ${printUrl('/api/add-book')} ${chalk.italic.gray(
    'POST: {title}'
  )}
  `);
});
