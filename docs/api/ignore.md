---
title: Using objects instead of IDs
---

There are some cases where sending a full object makes more sense than passing only the ID. Sofa allows you to easily define where to ignore the default behavior:

```typescript
api.use(
  '/api',
  sofa({
    schema,
    ignore: ['Message.author'],
  })
);
```

Whenever Sofa tries to resolve an author of a message, instead of exposing an ID it will pass whole data.

> Pattern is easy: `Type:field` or `Type`
