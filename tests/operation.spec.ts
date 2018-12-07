import {
  buildASTSchema,
  GraphQLObjectType,
  print,
  parse,
  DocumentNode,
} from 'graphql';
import gql from 'graphql-tag';

import { buildOperation } from '../src/operation';

const schema = buildASTSchema(gql`
  type Pizza {
    dough: String!
    toppings: [String!]
  }

  type Book {
    id: ID!
    title: String!
  }

  type User {
    id: ID!
    name: String!
    favoritePizza: Pizza!
    favoriteBook: Book!
    favoriteFood: Food!
    shelf: [Book!]!
  }

  type Salad {
    ingredients: [String!]!
  }

  union Food = Pizza | Salad

  type Query {
    me: User
    user(id: ID!): User
    users: [User!]
    menu: [Food]
    menuByIngredients(ingredients: [String!]!): [Food]
  }

  schema {
    query: Query
  }
`);

const models = ['User', 'Book'];

function clean(doc: string | DocumentNode) {
  return print(typeof doc === 'string' ? parse(doc) : doc);
}

test('should work with Query', async () => {
  const document = buildOperation({
    schema,
    type: schema.getQueryType()!,
    fieldName: 'me',
    models,
  })!;

  expect(clean(document)).toEqual(
    clean(gql`
      query getMeQuery {
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
              ingredients
            }
          }
          shelf {
            id
          }
        }
      }
    `),
  );
});

test('should work with Query and variables', async () => {
  const document = buildOperation({
    schema,
    type: schema.getQueryType()!,
    fieldName: 'user',
    models,
  })!;

  expect(clean(document)).toEqual(
    clean(gql`
      query getUserQuery($id: ID!) {
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
              ingredients
            }
          }
          shelf {
            id
          }
        }
      }
    `),
  );
});

test('should work with Query and complicated variable', async () => {
  const document = buildOperation({
    schema,
    type: schema.getQueryType()!,
    fieldName: 'menuByIngredients',
    models,
  })!;

  expect(clean(document)).toEqual(
    clean(gql`
      query getMenuByIngredientsQuery($ingredients: [String!]!) {
        menuByIngredients(ingredients: $ingredients) {
          ... on Pizza {
            dough
            toppings
          }
          ... on Salad {
            ingredients
          }
        }
      }
    `),
  );
});

test('should work with ObjectType', async () => {
  const operation = buildOperation({
    schema,
    type: schema.getType('User') as GraphQLObjectType,
    models,
  })!;

  expect(clean(operation)).toEqual(
    clean(gql`
      query getUserType($id: ID!) {
        _getRESTModelById(typename: "User", id: $id) {
          ... on User {
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
                ingredients
              }
            }
            shelf {
              id
            }
          }
        }
      }
    `),
  );
});

test('should work with Union', async () => {
  const document = buildOperation({
    schema,
    type: schema.getQueryType()!,
    fieldName: 'menu',
    models,
  })!;

  expect(clean(document)).toEqual(
    clean(gql`
      query getMenuQuery {
        menu {
          ... on Pizza {
            dough
            toppings
          }
          ... on Salad {
            ingredients
          }
        }
      }
    `),
  );
});
