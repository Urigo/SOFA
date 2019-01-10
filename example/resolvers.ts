import { UsersCollection, BooksCollection } from './collections';

export const resolvers = {
  Query: {
    me() {
      return UsersCollection.get(1);
    },
    user(_: any, { id }: any) {
      return UsersCollection.get(id);
    },
    users() {
      return UsersCollection.all();
    },
    book(_: any, { id }: any) {
      return BooksCollection.get(id);
    },
    books() {
      return BooksCollection.all();
    },
  },
  Food: {
    __resolveType(obj: any) {
      if (obj.ingredients) {
        return 'Salad';
      }

      if (obj.toppings) {
        return 'Pizza';
      }

      return null;
    },
  },
};
