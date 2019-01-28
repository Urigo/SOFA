---
title: Getting Started
---

An open source library you install on your GraphQL server to create a fully RESTful and configurable API gateway.

- **Don’t choose between REST and GraphQL**
- Get most of the **benefits of GraphQL** on the backend and frontend, while using and **exposing REST**
- **Support all your existing clients** with REST while improving your backend stack with GraphQL
- Create custom, perfectly client-aligned REST endpoints for your frontend simply by naming a route and attaching a query
- In the other way around (REST to GraphQL) you won’t get the best of both world but less powerful, harder to maintain server implementation with a some of the benefits of GraphQL. It can be a good and fast start for a migration though..
- Fully **generated documentation** that is always up-to-date
- **GraphQL Subscriptions as Webhooks**

### Installation

Install Sofa using [`yarn`](https://yarnpkg.com/en):

```bash
yarn add sofa-api
```

Or [`npm`](https://www.npmjs.com/):

```bash
npm install sofa-api
```

### Usage

```typescript
import sofa from 'sofa-api';
import express from 'express';

const app = express();

app.use('/api', sofa({ schema }));

// GET  /api/messages
// POST /api/add-message
```
