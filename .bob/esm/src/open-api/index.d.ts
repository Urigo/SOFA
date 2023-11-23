import { GraphQLSchema } from 'graphql';
import { RouteInfo } from '../types';
import { OpenAPIV3 } from 'openapi-types';
export declare function OpenAPI({ schema, info, servers, components, security, tags, customScalars, }: {
    schema: GraphQLSchema;
    info: OpenAPIV3.InfoObject;
    servers?: OpenAPIV3.ServerObject[];
    components?: Record<string, any>;
    security?: OpenAPIV3.SecurityRequirementObject[];
    tags?: OpenAPIV3.TagObject[];
    /**
     * Override mapping of custom scalars to OpenAPI
     * @example
     * ```js
     * {
     *   Date: { type: "string",  format: "date" }
     * }
     * ```
     */
    customScalars?: Record<string, any>;
}): {
    addRoute(info: RouteInfo, config?: {
        basePath?: string;
    }): void;
    get(): OpenAPIV3.Document<{}>;
};
