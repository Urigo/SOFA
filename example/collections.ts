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
};
