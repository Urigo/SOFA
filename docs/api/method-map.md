---
title: Customize endpoint's HTTP Method
---

Sofa allows you to cutomize the http method. For example, in case you need `POST` instead of `GET` method in one of your query, you do the following:

```typescript
api.use(
  '/api',
  sofa({
    schema,
    methodMap: {
      'Query.feed': 'POST',
    },
  })
);
```

When Sofa tries to define a route for `feed` of `Query`, instead of exposing it under `GET` (default for Query type) it will use `POST` method.

> Pattern is easy: `Type.field` where `Type` is your query or mutation type.
