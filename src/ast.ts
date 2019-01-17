import {
  getOperationAST,
  DocumentNode,
  OperationDefinitionNode,
  VariableDefinitionNode,
} from 'graphql';

export type OperationInfo =
  | {
      operation: OperationDefinitionNode;
      variables: ReadonlyArray<VariableDefinitionNode>;
      name: string;
    }
  | undefined;

export function getOperationInfo(doc: DocumentNode): OperationInfo {
  const op = getOperationAST(doc, null);

  if (!op) {
    return;
  }

  return {
    operation: op,
    name: op.name!.value,
    variables: op.variableDefinitions || [],
  };
}
