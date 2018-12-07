import { getOperationAST, DocumentNode } from 'graphql';

export function getOperationInfo(
  doc: DocumentNode,
):
  | {
      variables: string[];
      name: string;
    }
  | undefined {
  const op = getOperationAST(doc, null);

  if (!op) {
    return;
  }

  return {
    name: op.name!.value,
    variables: op.variableDefinitions
      ? op.variableDefinitions.map(variable => variable.variable.name.value)
      : [],
  };
}
