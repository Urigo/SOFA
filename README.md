# Sofa

[![npm version](https://badge.fury.io/js/sofa-api.svg)](https://npmjs.com/package/sofa-api)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![renovate-app badge](https://img.shields.io/badge/renovate-app-blue.svg)](https://renovateapp.com/)

The best way to create REST APIs (is GraphQL)

## Installation

    yarn add sofa-api
    # or
    npm install sofa-api

## Example

```ts
import sofa from 'sofa-api';
import express from 'express';

const app = express();

app.use(
  '/api',
  sofa({
    schema,
  })
);
```

## License

[MIT](https://github.com/Urigo/sofa/blob/master/LICENSE) © Uri Goldshtein
