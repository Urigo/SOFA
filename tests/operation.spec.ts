import { GraphQLObjectType, print, parse, DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { schema, models } from './schema';
import { buildOperation } from '../src/operation';

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
              ingredients
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
    type: schema.getQueryType()!,
    fieldName: 'user',
    models,
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
              ingredients
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
    type: schema.getQueryType()!,
    fieldName: 'menuByIngredients',
    models,
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
            ingredients
          }
        }
      }
    `)
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
      query userType($id: ID!) {
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
    `)
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
      query menuQuery {
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
    `)
  );
});

test('should work with mutation', async () => {
  const document = buildOperation({
    schema,
    type: schema.getMutationType()!,
    fieldName: 'addSalad',
    models,
  })!;

  expect(clean(document)).toEqual(
    clean(gql`
      mutation addSaladMutation($ingredients: [String!]!) {
        addSalad(ingredients: $ingredients) {
          ingredients
        }
      }
    `)
  );
});

test('should work with mutation and unions', async () => {
  const document = buildOperation({
    schema,
    type: schema.getMutationType()!,
    fieldName: 'addRandomFood',
    models,
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
            ingredients
          }
        }
      }
    `)
  );
});
