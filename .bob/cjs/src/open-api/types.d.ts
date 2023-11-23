import { GraphQLObjectType, GraphQLInputObjectType, GraphQLType } from 'graphql';
export declare function buildSchemaObjectFromType(type: GraphQLObjectType | GraphQLInputObjectType, opts: {
    customScalars: Record<string, any>;
}): any;
export declare function resolveFieldType(type: GraphQLType, opts: {
    customScalars: Record<string, any>;
}): any;
