---
title: Mutations
---

Mutations are transformed into POST requests.

Given the following example:

```graphql
type Comment {
  id: ID
  text: String
}

type Mutation {
  addComment(text: String!) Comment
}
```

Sofa will create a `POST /add-comment` route that accepts a `{ text }` body.

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"text":"Sofa is awesome!"}' \
  http://localhost:3000/api/add-comment
```
