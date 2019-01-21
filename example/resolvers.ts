import {
  UsersCollection,
  BooksCollection,
  PostsCollection,
} from './collections';

export const resolvers: any = {
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
    usersLimit(_: any, { limit }: any) {
      return UsersCollection.all().slice(0, limit);
    },
    usersSort(_: any, { sort }: any) {
      const users = UsersCollection.all();
      return sort ? users.sort((a, b) => b.id - a.id) : users;
    },
    book(_: any, { id }: any) {
      return BooksCollection.get(id);
    },
    books() {
      return BooksCollection.all();
    },
    feed() {
      return PostsCollection.all();
    },
  },
  Mutation: {
    addBook(_: any, { title }: any) {
      return BooksCollection.add(title);
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
  Post: {
    comments(post: { comments: string[] }, { filter }: { filter: string }) {
      return post.comments.filter(
        comment =>
          !filter || comment.toLowerCase().indexOf(filter.toLowerCase()) > -1
      );
    },
  },
};
