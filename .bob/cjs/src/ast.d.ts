import { type DocumentNode, type OperationDefinitionNode, type VariableDefinitionNode } from 'graphql';
export type OperationInfo = {
    operation: OperationDefinitionNode;
    variables: ReadonlyArray<VariableDefinitionNode>;
    name: string;
} | undefined;
export declare function getOperationInfo(doc: DocumentNode): OperationInfo;
