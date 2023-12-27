export declare const resolvers: {
    Query: {
        me(): {
            id: number;
            name: string;
            favoritePizza: {
                id: number;
                dough: string;
                toppings: string[];
            };
            favoriteBook: {
                id: number;
                title: string;
                type: string;
            };
            favoriteFood: {
                id: number;
                dough: string;
                toppings: string[];
            };
            shelf: {
                id: number;
                title: string;
                type: string;
            }[];
        } | {
            id: number;
            name: string;
            favoritePizza: {
                id: number;
                dough: string;
                toppings: string[];
            };
            favoriteBook: {
                id: number;
                title: string;
                type: string;
            };
            favoriteFood: {
                ingredients: string[];
            };
            shelf: {
                id: number;
                title: string;
                type: string;
            }[];
        } | undefined;
        user(_: any, { id }: any): {
            id: number;
            name: string;
            favoritePizza: {
                id: number;
                dough: string;
                toppings: string[];
            };
            favoriteBook: {
                id: number;
                title: string;
                type: string;
            };
            favoriteFood: {
                id: number;
                dough: string;
                toppings: string[];
            };
            shelf: {
                id: number;
                title: string;
                type: string;
            }[];
        } | {
            id: number;
            name: string;
            favoritePizza: {
                id: number;
                dough: string;
                toppings: string[];
            };
            favoriteBook: {
                id: number;
                title: string;
                type: string;
            };
            favoriteFood: {
                ingredients: string[];
            };
            shelf: {
                id: number;
                title: string;
                type: string;
            }[];
        } | undefined;
        users(): ({
            id: number;
            name: string;
            favoritePizza: {
                id: number;
                dough: string;
                toppings: string[];
            };
            favoriteBook: {
                id: number;
                title: string;
                type: string;
            };
            favoriteFood: {
                id: number;
                dough: string;
                toppings: string[];
            };
            shelf: {
                id: number;
                title: string;
                type: string;
            }[];
        } | {
            id: number;
            name: string;
            favoritePizza: {
                id: number;
                dough: string;
                toppings: string[];
            };
            favoriteBook: {
                id: number;
                title: string;
                type: string;
            };
            favoriteFood: {
                ingredients: string[];
            };
            shelf: {
                id: number;
                title: string;
                type: string;
            }[];
        })[];
        usersLimit(_: any, { limit }: any): ({
            id: number;
            name: string;
            favoritePizza: {
                id: number;
                dough: string;
                toppings: string[];
            };
            favoriteBook: {
                id: number;
                title: string;
                type: string;
            };
            favoriteFood: {
                id: number;
                dough: string;
                toppings: string[];
            };
            shelf: {
                id: number;
                title: string;
                type: string;
            }[];
        } | {
            id: number;
            name: string;
            favoritePizza: {
                id: number;
                dough: string;
                toppings: string[];
            };
            favoriteBook: {
                id: number;
                title: string;
                type: string;
            };
            favoriteFood: {
                ingredients: string[];
            };
            shelf: {
                id: number;
                title: string;
                type: string;
            }[];
        })[];
        usersSort(_: any, { sort }: any): ({
            id: number;
            name: string;
            favoritePizza: {
                id: number;
                dough: string;
                toppings: string[];
            };
            favoriteBook: {
                id: number;
                title: string;
                type: string;
            };
            favoriteFood: {
                id: number;
                dough: string;
                toppings: string[];
            };
            shelf: {
                id: number;
                title: string;
                type: string;
            }[];
        } | {
            id: number;
            name: string;
            favoritePizza: {
                id: number;
                dough: string;
                toppings: string[];
            };
            favoriteBook: {
                id: number;
                title: string;
                type: string;
            };
            favoriteFood: {
                ingredients: string[];
            };
            shelf: {
                id: number;
                title: string;
                type: string;
            }[];
        })[];
        book(_: any, { id }: any): {
            id: number;
            title: string;
            type: string;
        } | undefined;
        books(): {
            id: number;
            title: string;
            type: string;
        }[];
        feed(): {
            comments: string[];
        }[];
        never(): never;
    };
    Mutation: {
        addBook(_: any, { title }: any): {
            id: number;
            title: string;
            type: string;
        };
    };
    Subscription: {
        onBook: {
            subscribe: () => import("graphql-yoga").Repeater<any, any, unknown>;
        };
    };
    Food: {
        __resolveType(obj: any): "Salad" | "Pizza" | null;
    };
    Post: {
        comments(post: {
            comments: string[];
        }, { filter }: {
            filter: string;
        }): string[];
    };
};
