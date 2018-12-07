Create:

```ts
const sofa = createSofa({
  models: {
    User(id: string) {
      return UsersCollection.get(id);
    },
    Book(id: string) {
      return BooksCollection.get(id);
    },
  },
});
```

Extend the schema:

```ts
const schema = makeExecutableSchema({
  typeDefs: [typeDefs, sofa.typeDefs],
  resolvers: [resolvers, sofa.resolvers as any],
});
```

Create GraphQL endpoint:

```ts
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
```

Use the router:

```ts
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  fetch,
});

app.use(
  '/api',
  useSofa({
    sofa,
    link,
    schema,
  })
);
```
