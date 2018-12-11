import {
  getOperationAST,
  DocumentNode,
  GraphQLObjectType,
  GraphQLSchema,
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

export function getOperationType(
  type: GraphQLObjectType,
  schema: GraphQLSchema
) {
  const query = schema.getQueryType();
  const mutation = schema.getMutationType();
  const subscription = schema.getSubscriptionType();

  if (query && query.name === type.name) {
    return 'query';
  }

  if (mutation && mutation.name === type.name) {
    return 'mutation';
  }

  if (subscription && subscription.name === type.name) {
    return 'subscription';
  }
}
