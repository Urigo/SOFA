import { createServer } from 'http';
import { createRouter, Response } from '@whatwg-node/router';
import { createYoga, createSchema } from 'graphql-yoga';
import chalk from 'chalk';
import { typeDefs } from './types';
import { resolvers } from './resolvers';

// Sofa

import { useSofa, OpenAPI } from '../src';
import { writeFileSync } from 'fs';
import { join } from 'path';

const schema = createSchema({
  typeDefs,
  resolvers,
});

const openApi = OpenAPI({
  schema,
  servers: [
    {
      url: '/', // Specify Server's URL.
      description: 'Development server',
    },
  ],
  info: {
    title: 'Example API',
    version: '3.0.0',
  },
});

const app = createRouter();

app.all(
  '*',
  useSofa({
    basePath: '',
    schema,
    ignore: ['User.favoriteBook'],
    onRoute(info) {
      openApi.addRoute(info, {
        basePath: '',
      });
    },
  })
);

app.post('/collect-book', async (req: Request) => {
  const body = await req.json();
  console.log('Received a webhook', body);

  return new Response(null, {
    status: 200,
    statusText: 'OK',
  });
});

const yoga = createYoga({
  schema,
});
app.all('/graphql', yoga);

const port = 4000;

const server = createServer(app);

app.get(
  '/',
  async () =>
    new Response(
      `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="SwaggerUI"
    />
    <title>SwaggerUI</title>
    <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css" />
  </head>
  <body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js" crossorigin></script>
  <script>
    window.onload = () => {
      window.ui = SwaggerUIBundle({
        spec: ${JSON.stringify(openApi.get())},
        dom_id: '#swagger-ui',
      });
    };
  </script>
  </body>
  </html>
`,
      {
        headers: {
          'Content-Type': 'text/html',
        },
      }
    )
);

server.listen(port, () => {
  const url = `http://localhost:${4000}`;

  function printUrl(path: string) {
    return chalk.gray(url + path);
  }

  console.log(`
    ${chalk.bold('Swagger UI:')}     ${printUrl('/')}
    ${chalk.bold('GraphiQL:')}        ${printUrl('/graphql')}

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

// Save swagger file to the disk
writeFileSync(join(__dirname, './swagger.json'), JSON.stringify(openApi.get(), null, 2));