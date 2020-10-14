import * as express from 'express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import * as bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import * as swaggerUi from 'swagger-ui-express';
import * as chalk from 'chalk';
import { resolve } from 'path';
import { typeDefs } from './types';
import { resolvers } from './resolvers';
import * as swaggerDocument from './swagger.json';

// Sofa

import { useSofa, OpenAPI } from '../src';

const app = express();

app.use(bodyParser.json());

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const openApi = OpenAPI({
  schema,
  info: {
    title: 'Example API',
    version: '3.0.0',
  },
});

app.use(
  useSofa({
    schema,
    ignore: ['User.favoriteBook'],
    onRoute(info) {
      openApi.addRoute(info, {
        basePath: '',
      });
    },
  })
);

openApi.save(resolve(__dirname, './swagger.json'));
openApi.save(resolve(__dirname, './swagger.yml'));

app.post('/collect-book', (req, res) => {
  console.log('Received a webhook', req.body);

  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.end();
});

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

  function printUrl(path: string) {
    return chalk.gray(url + path);
  }

  console.log(`
    ${chalk.bold('GraphQL:')}        ${printUrl('/graphql')}

    ${chalk.bold('Queries:')}
      me:           ${printUrl('/me')}
      users:        ${printUrl('/users')}
      user:         ${printUrl('/user/1')}
      books:        ${printUrl('/books')}
      book:         ${printUrl('/book/1')}

    ${chalk.bold('Mutations:')}
      addBook:      ${printUrl('/add-book')} ${chalk.italic.gray(
    'POST: {title}'
  )}
  `);
});

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
