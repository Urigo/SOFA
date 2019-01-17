const pizzas = [
  { id: 1, dough: 'pan', toppings: ['cheese'] },
  { id: 2, dough: 'classic', toppings: ['ham'] },
];
const books = [{ id: 1, title: 'Book A' }, { id: 2, title: 'Book B' }];
const users = [
  {
    id: 1,
    name: 'User A',
    favoritePizza: pizzas[0],
    favoriteBook: books[0],
    favoriteFood: pizzas[1],
    shelf: books,
  },
  {
    id: 2,
    name: 'User B',
    favoritePizza: pizzas[1],
    favoriteBook: books[1],
    favoriteFood: {
      ingredients: [
        'green shit',
        'chicken',
        'green shit',
        'yellow shit',
        'red shit',
      ],
    },
    shelf: books,
  },
];

const posts = [
  {
    comments: ['Foo', 'Bar', 'Baz', 'Foo Bar', 'Foo Baz', 'Bar Baz'],
  },
];

export const UsersCollection = {
  get(id: string | number) {
    const uid = typeof id === 'string' ? parseInt(id, 10) : id;

    return users.find(u => u.id === uid);
  },
  all() {
    return users;
  },
};

export const BooksCollection = {
  get(id: string | number) {
    const bid = typeof id === 'string' ? parseInt(id, 10) : id;

    return books.find(u => u.id === bid);
  },
  all() {
    return books;
  },
  add(title: string) {
    const book = {
      id: parseInt(
        Math.random()
          .toString(10)
          .substr(2),
        10
      ),
      title,
    };

    books.push(book);

    return book;
  },
};

export const PostsCollection = {
  all() {
    return posts;
  },
};
