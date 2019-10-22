import { print, parse, DocumentNode, buildSchema } from 'graphql';
import gql from 'graphql-tag';

import { schema, models } from './schema';
import { buildOperation } from '../src/operation';

function clean(doc: string | DocumentNode) {
  return print(typeof doc === 'string' ? parse(doc) : doc);
}

test('should work with Query', async () => {
  const document = buildOperation({
    schema,
    kind: 'query',
    field: 'me',
    models,
    ignore: [],
  })!;

  expect(clean(document)).toEqual(
    clean(gql`
      query meQuery {
        me {
          id
          name
          favoritePizza {
            dough
            toppings
          }
          favoriteBook {
            id
          }
          favoriteFood {
            ... on Pizza {
              dough
              toppings
            }
            ... on Salad {
              ... on CeaserSalad {
                ingredients
                additionalParmesan
              }
              ... on Coleslaw {
                ingredients
                asian
              }
            }
          }
          shelf {
            id
          }
        }
      }
    `)
  );
});

test('should work with Query and variables', async () => {
  const document = buildOperation({
    schema,
    kind: 'query',
    field: 'user',
    models,
    ignore: [],
  })!;

  expect(clean(document)).toEqual(
    clean(gql`
      query userQuery($id: ID!) {
        user(id: $id) {
          id
          name
          favoritePizza {
            dough
            toppings
          }
          favoriteBook {
            id
          }
          favoriteFood {
            ... on Pizza {
              dough
              toppings
            }
            ... on Salad {
              ... on CeaserSalad {
                ingredients
                additionalParmesan
              }
              ... on Coleslaw {
                ingredients
                asian
              }
            }
          }
          shelf {
            id
          }
        }
      }
    `)
  );
});

test('should work with Query and complicated variable', async () => {
  const document = buildOperation({
    schema,
    kind: 'query',
    field: 'menuByIngredients',
    models,
    ignore: [],
  })!;

  expect(clean(document)).toEqual(
    clean(gql`
      query menuByIngredientsQuery($ingredients: [String!]!) {
        menuByIngredients(ingredients: $ingredients) {
          ... on Pizza {
            dough
            toppings
          }
          ... on Salad {
            ... on CeaserSalad {
              ingredients
              additionalParmesan
            }
            ... on Coleslaw {
              ingredients
              asian
            }
          }
        }
      }
    `)
  );
});

test('should work with Union', async () => {
  const document = buildOperation({
    schema,
    kind: 'query',
    field: 'menu',
    models,
    ignore: [],
  })!;

  expect(clean(document)).toEqual(
    clean(gql`
      query menuQuery {
        menu {
          ... on Pizza {
            dough
            toppings
          }
          ... on Salad {
            ... on CeaserSalad {
              ingredients
              additionalParmesan
            }
            ... on Coleslaw {
              ingredients
              asian
            }
          }
        }
      }
    `)
  );
});

test('should work with mutation', async () => {
  const document = buildOperation({
    schema,
    kind: 'mutation',
    field: 'addSalad',
    models,
    ignore: [],
  })!;

  expect(clean(document)).toEqual(
    clean(gql`
      mutation addSaladMutation($ingredients: [String!]!) {
        addSalad(ingredients: $ingredients) {
          ... on CeaserSalad {
            ingredients
            additionalParmesan
          }
          ... on Coleslaw {
            ingredients
            asian
          }
        }
      }
    `)
  );
});

test('should work with mutation and unions', async () => {
  const document = buildOperation({
    schema,
    kind: 'mutation',
    field: 'addRandomFood',
    models,
    ignore: [],
  })!;

  expect(clean(document)).toEqual(
    clean(gql`
      mutation addRandomFoodMutation {
        addRandomFood {
          ... on Pizza {
            dough
            toppings
          }
          ... on Salad {
            ... on CeaserSalad {
              ingredients
              additionalParmesan
            }
            ... on Coleslaw {
              ingredients
              asian
            }
          }
        }
      }
    `)
  );
});

test('should work with Query and nested variables', async () => {
  const document = buildOperation({
    schema,
    kind: 'query',
    field: 'feed',
    models,
    ignore: [],
  })!;

  expect(clean(document)).toEqual(
    clean(gql`
      query feedQuery($feedCommentsFilter: String!) {
        feed {
          comments(filter: $feedCommentsFilter)
        }
      }
    `)
  );
});

test('should be able to ignore using models when requested', async () => {
  const document = buildOperation({
    schema,
    kind: 'query',
    field: 'user',
    models,
    ignore: ['User.favoriteBook', 'User.shelf'],
  })!;

  expect(clean(document)).toEqual(
    clean(gql`
      query userQuery($id: ID!) {
        user(id: $id) {
          id
          name
          favoritePizza {
            dough
            toppings
          }
          favoriteBook {
            id
            title
          }
          favoriteFood {
            ... on Pizza {
              dough
              toppings
            }
            ... on Salad {
              ... on CeaserSalad {
                ingredients
                additionalParmesan
              }
              ... on Coleslaw {
                ingredients
                asian
              }
            }
          }
          shelf {
            id
            title
          }
        }
      }
    `)
  );
});

test('should work with Subscription', async () => {
  const document = buildOperation({
    schema,
    kind: 'subscription',
    field: 'onFood',
    models,
    ignore: [],
  })!;

  expect(clean(document)).toEqual(
    clean(/* GraphQL */ `
      subscription onFoodSubscription {
        onFood {
          ... on Pizza {
            dough
            toppings
          }
          ... on Salad {
            ... on CeaserSalad {
              ingredients
              additionalParmesan
            }
            ... on Coleslaw {
              ingredients
              asian
            }
          }
        }
      }
    `)
  );
});

test('should work with circular ref (default depth limit === 1)', async () => {
  const document = buildOperation({
    schema: buildSchema(/* GraphQL */ `
      type A {
        b: B
      }

      type B {
        c: C
      }

      type C {
        end: String
        a: A
      }

      type Query {
        a: A
      }
    `),
    kind: 'query',
    field: 'a',
    models,
    ignore: [],
  })!;

  expect(clean(document)).toEqual(
    clean(/* GraphQL */ `
      query aQuery {
        a {
          b {
            c {
              end
            }
          }
        }
      }
    `)
  );
});

test('should work with circular ref (custom depth limit)', async () => {
  const document = buildOperation({
    schema: buildSchema(/* GraphQL */ `
      type A {
        b: B
      }

      type B {
        c: C
      }

      type C {
        end: String
        a: A
      }

      type Query {
        a: A
      }
    `),
    kind: 'query',
    field: 'a',
    models,
    ignore: [],
    depthLimit: 2,
  })!;

  expect(clean(document)).toEqual(
    clean(/* GraphQL */ `
      query aQuery {
        a {
          b {
            c {
              end
              a {
                b {
                  c {
                    end
                  }
                }
              }
            }
          }
        }
      }
    `)
  );
});

test('arguments', async () => {
  const document = buildOperation({
    schema: buildSchema(/* GraphQL */ `
      input PageInfoInput {
        offset: Int!
        limit: Int!
      }

      type User {
        id: ID
        name: String
      }

      type Query {
        users(pageInfo: PageInfoInput!): [User]
      }
    `),
    kind: 'query',
    field: 'users',
    models,
    ignore: [],
  })!;

  expect(clean(document)).toEqual(
    clean(/* GraphQL */ `
      query usersQuery($pageInfo: PageInfoInput!) {
        users(pageInfo: $pageInfo) {
          id
          name
        }
      }
    `)
  );
});
