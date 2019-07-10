---
title: Using context
---

Here's how you provide a context to a GraphQL Schema.

### Using a function

Sofa allows to build a context object through a factory function. You get an access to a request object through the `req` field.

```typescript
api.use(
  '/api',
  useSofa({
    schema,
    async context({ req }) {
      return {
        req,
        ...yourContext,
      };
    },
  })
);
```

### Using an object

You can also pass any data, directly, without using a function.

```typescript
api.use(
  '/api',
  useSofa({
    schema,
    context: yourContext,
  })
);
```
