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

  interface Salad {
    ingredients: [String!]!
  }

  type CeaserSalad implements Salad {
    ingredients: [String!]!
    additionalParmesan: Boolean!
  }

  type Coleslaw implements Salad {
    ingredients: [String!]!
    asian: Boolean!
  }

  union Food = Pizza | Salad

  type Post {
    comments(filter: String!): [String!]!
  }

  type Query {
    me: User
    user(id: ID!): User
    users: [User!]
    menu: [Food]
    menuByIngredients(ingredients: [String!]!): [Food]
    feed: [Post]
  }

  type Mutation {
    addSalad(ingredients: [String!]!): Salad
    addRandomFood: Food
  }

  type Subscription {
    onFood: Food
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`);

export const models = ['User', 'Book'];
