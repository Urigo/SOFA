import type { Sofa } from './sofa.js';
import { Response, type Router } from 'fets';
export type ErrorHandler = (errors: ReadonlyArray<any>) => Response;
declare module 'graphql' {
    interface GraphQLHTTPErrorExtensions {
        spec?: boolean;
        status?: number;
        headers?: Record<string, string>;
    }
    interface GraphQLErrorExtensions {
        http?: GraphQLHTTPErrorExtensions;
    }
}
export declare function createRouter(sofa: Sofa): Router<any, {}, {
    [TKey: string]: never;
}>;
