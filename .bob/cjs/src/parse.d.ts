import { type VariableDefinitionNode, type GraphQLSchema } from 'graphql';
export declare function parseVariable({ value, variable, schema, }: {
    value: any;
    variable: VariableDefinitionNode;
    schema: GraphQLSchema;
}): any;
