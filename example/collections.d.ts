export declare const UsersCollection: {
    get(id: string | number): {
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
    all(): ({
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
};
export declare const BooksCollection: {
    get(id: string | number): {
        id: number;
        title: string;
        type: string;
    } | undefined;
    all(): {
        id: number;
        title: string;
        type: string;
    }[];
    add(title: string): {
        id: number;
        title: string;
        type: string;
    };
};
export declare const PostsCollection: {
    all(): {
        comments: string[];
    }[];
};
