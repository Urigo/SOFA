import gql from 'graphql-tag';

export const typeDefs = gql`
  type Pizza {
    dough: String!
    toppings: [String!]
  }

  type Salad {
    ingredients: [String!]!
  }

  union Food = Pizza | Salad

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

  type Post {
    comments(filter: String!): [String!]!
  }

  type Query {
    me: User
    user(id: ID!): User
    users: [User!]
    never: String
    feed: [Post]
  }

  schema {
    query: Query
  }
`;
