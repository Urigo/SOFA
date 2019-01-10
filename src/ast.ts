import {
  getOperationAST,
  DocumentNode,
  OperationDefinitionNode,
} from 'graphql';

export type OperationInfo =
  | {
      operation: OperationDefinitionNode;
      variables: string[];
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
    variables: op.variableDefinitions
      ? op.variableDefinitions.map(variable => variable.variable.name.value)
      : [],
  };
}
