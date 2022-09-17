---
title: OpenAPI (Swagger)
---

Thanks to GraphQL's Type System Sofa is able to generate OpenAPI (Swagger) definitions out of it. Possibilities are endless here. You get all the information you need in order to write your own definitions or create a plugin that follows any specification.

```ts
import { OpenAPI, useSofa } from 'sofa-api';
import { writeFileSync } from 'fs';

const openApi = OpenAPI({
  schema,
  info: {
    title: 'Example API',
    version: '3.0.0',
  },
});

app.use(
  '/api',
  useSofa({
    schema,
    basePath: '/api',
    onRoute(info) {
      openApi.addRoute(info, {
        basePath: '/api',
      });
    },
  })
);

// writes every recorder route
writeFileSync('./swagger.json', JSON.stringify(openApi.get(), null, 2));
```
