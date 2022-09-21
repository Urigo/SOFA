import { createPubSub } from 'graphql-yoga';

const pubsub = createPubSub();

import {
  UsersCollection,
  BooksCollection,
  PostsCollection,
} from './collections';

const BOOK_ADDED = 'BOOK_ADDED';

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
    never() {
      throw new Error('Some Message');
    },
  },
  Mutation: {
    addBook(_: any, { title }: any) {
      const book = BooksCollection.add(title);

      pubsub.publish(BOOK_ADDED, { onBook: book });

      return book;
    },
  },
  Subscription: {
    onBook: {
      subscribe: () => pubsub.subscribe(BOOK_ADDED),
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
        (comment) =>
          !filter || comment.toLowerCase().indexOf(filter.toLowerCase()) > -1
      );
    },
  },
};
