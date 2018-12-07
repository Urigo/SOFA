import { buildASTSchema } from 'graphql';
import gql from 'graphql-tag';

export const schema = buildASTSchema(gql`
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

  type Mutation {
    addSalad(ingredients: [String!]!): Salad
    addRandomFood: Food
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);

export const models = ['User', 'Book'];
