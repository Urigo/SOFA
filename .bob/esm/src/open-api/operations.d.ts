import { DocumentNode, GraphQLSchema, OperationDefinitionNode, TypeNode, VariableDefinitionNode } from 'graphql';
import { OpenAPIV3 } from 'openapi-types';
export declare function buildPathFromOperation({ url, schema, operation, useRequestBody, tags, description, customScalars, }: {
    url: string;
    schema: GraphQLSchema;
    operation: DocumentNode;
    useRequestBody: boolean;
    tags?: string[];
    description?: string;
    customScalars: Record<string, any>;
}): OpenAPIV3.OperationObject;
export declare function resolveRequestBody(variables: ReadonlyArray<VariableDefinitionNode> | undefined, schema: GraphQLSchema, operation: OperationDefinitionNode, opts: {
    customScalars: Record<string, any>;
    enumTypes: Record<string, any>;
}): {};
export declare function resolveParamSchema(type: TypeNode, opts: {
    customScalars: Record<string, any>;
    enumTypes: Record<string, any>;
}): any;
export declare function resolveResponse({ schema, operation, opts, }: {
    schema: GraphQLSchema;
    operation: OperationDefinitionNode;
    opts: {
        customScalars: Record<string, any>;
        enumTypes: Record<string, any>;
    };
}): any;
export declare function isInPath(url: string, param: string): boolean;
export declare function resolveVariableDescription(schema: GraphQLSchema, operation: OperationDefinitionNode, variable: VariableDefinitionNode): string | undefined;
