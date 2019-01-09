import {
  GraphQLSchema,
  GraphQLObjectType,
  isObjectType,
  getNamedType,
  isUnionType,
  DocumentNode,
  OperationDefinitionNode,
  VariableDefinitionNode,
  isNonNullType,
  SelectionNode,
  InlineFragmentNode,
  GraphQLNamedType,
  SelectionSetNode,
  isScalarType,
  TypeNode,
  isListType,
  ArgumentNode,
  GraphQLField,
  GraphQLArgument,
  GraphQLInputType,
  GraphQLList,
  ListTypeNode,
  GraphQLNonNull,
  NonNullTypeNode,
} from 'graphql';
import * as changeCase from 'change-case';
import { getOperationType } from './ast';

let operationVariables: VariableDefinitionNode[] = [];

function addOperationVariable(variable: VariableDefinitionNode) {
  operationVariables.push(variable);
}

function resetOperationVariables() {
  operationVariables = [];
}

function buildOperationName(name: string) {
  return changeCase.camel(name);
}

export type Skip = string[];
export type Force = string[];

export function buildOperation({
  schema,
  type,
  fieldName,
  models,
  skip,
  force,
}: {
  schema: GraphQLSchema;
  type: GraphQLObjectType;
  fieldName?: string;
  models: string[];
  skip?: Skip;
  force?: Force;
}) {
  resetOperationVariables();

  let document: DocumentNode;

  // if it has a field, it means it's a query or mutation
  if (fieldName) {
    document = buildRootFieldQuery({
      schema,
      type,
      fieldName,
      models,
      force,
      skip,
    });
  } else {
    document = buildModelQuery({
      type,
      models,
      skip,
      force,
    });
  }

  // attach variables
  (document.definitions[0] as any).variableDefinitions = [
    ...operationVariables,
  ];

  resetOperationVariables();

  return document;
}

function buildModelQuery({
  type,
  models,
  skip,
  force,
}: {
  type: GraphQLObjectType;
  models: string[];
  skip?: Skip;
  force?: Force;
}) {
  const operationName = `${buildOperationName(type.name)}Type`;

  // will be added later
  addOperationVariable({
    kind: 'VariableDefinition',
    variable: {
      kind: 'Variable',
      name: {
        kind: 'Name',
        value: 'id',
      },
    },
    type: {
      kind: 'NonNullType',
      type: {
        kind: 'NamedType',
        name: {
          kind: 'Name',
          value: 'ID',
        },
      },
    },
  });

  const operationNode: OperationDefinitionNode = {
    kind: 'OperationDefinition',
    operation: 'query',
    name: {
      kind: 'Name',
      value: operationName,
    },
    variableDefinitions: [],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [
        {
          kind: 'Field',
          name: {
            kind: 'Name',
            value: '_getRESTModelById',
          },
          arguments: [
            {
              kind: 'Argument',
              name: {
                kind: 'Name',
                value: 'typename',
              },
              value: {
                kind: 'StringValue',
                block: false,
                value: type.name,
              },
            },
            {
              kind: 'Argument',
              name: {
                kind: 'Name',
                value: 'id',
              },
              value: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'id',
                },
              },
            },
          ],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'InlineFragment',
                typeCondition: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: type.name,
                  },
                },
                selectionSet: resolveSelectionSet({
                  firstCall: true,
                  parent: type,
                  type,
                  models,
                  path: [],
                  skip,
                  force,
                })!,
              },
            ],
          },
        },
      ],
    },
  };
  const document: DocumentNode = {
    kind: 'Document',
    definitions: [operationNode],
  };

  return document;
}

function buildRootFieldQuery({
  schema,
  type,
  fieldName,
  models,
  skip,
  force,
}: {
  schema: GraphQLSchema;
  type: GraphQLObjectType;
  fieldName: string;
  models: string[];
  skip?: Skip;
  force?: Force;
}) {
  const operation = getOperationType(type, schema);

  if (!operation) {
    throw new Error(`Type '${type.name}' is not a query or mutation`);
  }

  if (operation === 'subscription') {
    throw new Error('Subscriptions are not supported');
  }

  const operationName = buildOperationName(`${fieldName}_${operation}`);
  const field = type.getFields()[fieldName];

  if (field.args) {
    field.args.forEach(arg => {
      addOperationVariable(resolveVariable(arg));
    });
  }

  const operationNode: OperationDefinitionNode = {
    kind: 'OperationDefinition',
    operation,
    name: {
      kind: 'Name',
      value: operationName,
    },
    variableDefinitions: [],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [
        resolveField({
          type,
          field,
          models,
          firstCall: true,
          path: [],
          skip,
          force,
        }),
      ],
    },
  };
  const document: DocumentNode = {
    kind: 'Document',
    definitions: [operationNode],
  };

  return document;
}

function resolveSelectionSet({
  parent,
  type,
  models,
  firstCall,
  path,
  skip,
  force,
}: {
  parent: GraphQLNamedType;
  type: GraphQLNamedType;
  models: string[];
  path: string[];
  firstCall?: boolean;
  skip?: Skip;
  force?: Force;
}): SelectionSetNode | undefined {
  if (isUnionType(type)) {
    const types = type.getTypes();

    return {
      kind: 'SelectionSet',
      selections: types.map<InlineFragmentNode>(t => {
        const fields = t.getFields();

        return {
          kind: 'InlineFragment',
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: t.name,
            },
          },
          selectionSet: {
            kind: 'SelectionSet',
            selections: Object.keys(fields).map(fieldName => {
              return resolveField({
                type: t,
                field: fields[fieldName],
                models,
                path: [...path, fieldName],
                skip,
                force,
              });
            }),
          },
        };
      }),
    };
  }

  if (isObjectType(type)) {
    // type is not parent, it's current object
    const skipModel =
      skip && skip.includes(`${parent.name}.${path[path.length - 1]}`);
    const forceModel =
      force && force.includes(`${parent.name}.${path[path.length - 1]}`);
    const isModel = models.includes(type.name);

    if (!firstCall && (forceModel || (isModel && !skipModel))) {
      return {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'id',
            },
          },
        ],
      };
    }

    const fields = type.getFields();

    return {
      kind: 'SelectionSet',
      selections: Object.keys(fields).map(fieldName => {
        return resolveField({
          type: type,
          field: fields[fieldName],
          models,
          path: [...path, fieldName],
          skip,
          force,
        });
      }),
    };
  }
}

function resolveVariable(
  arg: GraphQLArgument,
  name?: string
): VariableDefinitionNode {
  function resolveVariableType(type: GraphQLList<any>): ListTypeNode;
  function resolveVariableType(type: GraphQLNonNull<any>): NonNullTypeNode;
  function resolveVariableType(type: GraphQLInputType): TypeNode;
  function resolveVariableType(type: GraphQLInputType): TypeNode {
    if (isListType(type)) {
      return {
        kind: 'ListType',
        type: resolveVariableType(type.ofType),
      };
    }

    if (isNonNullType(type)) {
      return {
        kind: 'NonNullType',
        type: resolveVariableType(type.ofType),
      };
    }

    return {
      kind: 'NamedType',
      name: {
        kind: 'Name',
        value: type.name,
      },
    };
  }

  return {
    kind: 'VariableDefinition',
    variable: {
      kind: 'Variable',
      name: {
        kind: 'Name',
        value: name || arg.name,
      },
    },
    type: resolveVariableType(arg.type),
  };
}

function getArgumentName(name: string, path: string[]): string {
  return changeCase.camel([...path, name].join('_'));
}

function resolveField({
  type,
  field,
  models,
  firstCall,
  path,
  skip,
  force,
}: {
  type: GraphQLObjectType;
  field: GraphQLField<any, any>;
  models: string[];
  path: string[];
  firstCall?: boolean;
  skip?: Skip;
  force?: Force;
}): SelectionNode {
  const namedType = getNamedType(field.type);
  let args: ArgumentNode[] = [];

  if (field.args && field.args.length) {
    args = field.args.map<ArgumentNode>(arg => {
      if (!firstCall) {
        addOperationVariable(
          resolveVariable(arg, getArgumentName(arg.name, path))
        );
      }

      return {
        kind: 'Argument',
        name: {
          kind: 'Name',
          value: arg.name,
        },
        value: {
          kind: 'Variable',
          name: {
            kind: 'Name',
            value: getArgumentName(arg.name, path),
          },
        },
      };
    });
  }

  if (!isScalarType(namedType)) {
    return {
      kind: 'Field',
      name: {
        kind: 'Name',
        value: field.name,
      },
      selectionSet: resolveSelectionSet({
        parent: type,
        type: namedType,
        models,
        firstCall,
        path: [...path, field.name],
        skip,
        force,
      }),
      arguments: args,
    };
  }

  return {
    kind: 'Field',
    name: {
      kind: 'Name',
      value: field.name,
    },
    arguments: args,
  };
}
