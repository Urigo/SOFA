import { buildASTSchema, GraphQLObjectType, print, parse } from 'graphql';
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
    shelf: [Book!]!
  }

  type Query {
    me: User
    user(id: ID!): User
    users: [User!]
  }

  schema {
    query: Query
  }
`);

const models = ['User', 'Book'];

function clean(doc: string) {
  return print(parse(doc));
}

test('should work with Query', async () => {
  const output = buildOperation({
    schema,
    type: schema.getQueryType()!,
    field: 'me',
    models,
  })!;

  expect(clean(output.operation)).toEqual(
    print(gql`
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
          shelf {
            id
          }
        }
      }
    `),
  );

  expect(output.variables).toEqual({});
});

test('should work with Query and variables', async () => {
  const output = buildOperation({
    schema,
    type: schema.getQueryType()!,
    field: 'user',
    models,
  })!;

  expect(clean(output.operation)).toEqual(
    print(gql`
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
          shelf {
            id
          }
        }
      }
    `),
  );

  expect(output.variables).toEqual({
    id: 'ID!',
  });
});

test('should work with ObjectType', async () => {
  const output = buildOperation({
    schema,
    type: schema.getType('User') as GraphQLObjectType,
    models,
  })!;

  expect(clean(output.operation)).toEqual(
    print(gql`
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
            shelf {
              id
            }
          }
        }
      }
    `),
  );

  expect(output.variables).toEqual({
    id: 'ID!',
  });
});
