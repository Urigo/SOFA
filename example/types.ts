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
    comments(filter: String!): [String!]
  }

  type Query {
    me: User
    user(id: ID!): User
    users: [User!]
    usersLimit(limit: Int!): [User!]
    usersSort(sort: Boolean!): [User!]
    book(id: ID!): Book
    books: [Book!]
    never: String
    feed: [Post]
  }

  type Mutation {
    addBook(title: String!): Book
  }

  type Subscription {
    onBook: Book
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;
