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

For mutations to properly work with JSON bodies, you will need to have `bodyParser.json()` or a similar module as a middleware, else you will have to pass arguments via url paramaters.

Heres an example of without `body-parser`:

```graphql
type Comment {
  id: ID
  text: String
}

type Mutation {
  addComment(text: String!) Comment
}
```

Will mean that you will have to access it like this:

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  http://localhost:3000/api/add-comment?text=Sofa%20is%20awesome%21
```


How to enable `body-parser`:

```
yarn add body-parser
## OR
npm i body-parser
```

Then you can simply initialise it like this:
```js
import bodyParser from "body-parser";

app.use(bodyParser.json());
```




