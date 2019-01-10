import {
  getOperationAST,
  DocumentNode,
  OperationDefinitionNode,
} from 'graphql';

export function getOperationInfo(
  doc: DocumentNode
):
  | {
      operation: OperationDefinitionNode;
      variables: string[];
      name: string;
    }
  | undefined {
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
