---
title: Custom execute phase
---

By default, Sofa uses `graphql` function from `graphql-js` package to resolve an operation but it's very straightforward to pass your own logic. Thanks to that you can even use a remote GraphQL Server (with `Fetch` or through Apollo Links).

```typescript
api.use(
  '/api',
  sofa({
    schema,
    async execute(args) {
      return yourOwnLogicHere(args);
    },
  })
);
```
