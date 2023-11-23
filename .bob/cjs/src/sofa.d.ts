import { GraphQLSchema, subscribe, execute } from 'graphql';
import type { Ignore, ContextFn, ContextValue } from './types.js';
import type { ErrorHandler } from './router.js';
import type { HTTPMethod, StatusCode } from 'fets/typings/typed-fetch';
import type { RouterOpenAPIOptions, RouterSwaggerUIOptions } from 'fets';
export interface RouteConfig {
    method?: HTTPMethod;
    path?: string;
    responseStatus?: StatusCode;
    tags?: string[];
    description?: string;
}
export interface Route {
    method: HTTPMethod;
    path: string;
    responseStatus: StatusCode;
}
export interface SofaConfig {
    basePath: string;
    schema: GraphQLSchema;
    execute?: typeof execute;
    subscribe?: typeof subscribe;
    /**
     * Treats an Object with an ID as not a model.
     * @example ["User", "Message.author"]
     */
    ignore?: Ignore;
    depthLimit?: number;
    errorHandler?: ErrorHandler;
    /**
     * Overwrites the default HTTP route.
     */
    routes?: Record<string, RouteConfig>;
    context?: ContextFn | ContextValue;
    customScalars?: Record<string, any>;
    enumTypes?: Record<string, any>;
    openAPI?: RouterOpenAPIOptions<any>;
    swaggerUI?: RouterSwaggerUIOptions;
}
export interface Sofa {
    basePath: string;
    schema: GraphQLSchema;
    models: string[];
    ignore: Ignore;
    depthLimit: number;
    routes?: Record<string, RouteConfig>;
    execute: typeof execute;
    subscribe: typeof subscribe;
    errorHandler?: ErrorHandler;
    contextFactory: ContextFn;
    customScalars: Record<string, any>;
    enumTypes: Record<string, any>;
    openAPI?: RouterOpenAPIOptions<any>;
    swaggerUI?: RouterSwaggerUIOptions;
}
export declare function createSofa(config: SofaConfig): Sofa;
export declare function isContextFn(context: any): context is ContextFn;
