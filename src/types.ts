import gql from 'graphql-tag';

export const typeDefs = gql`
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
`;
