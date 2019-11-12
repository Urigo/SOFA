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
  OperationTypeNode,
  isInterfaceType,
  Kind,
} from 'graphql';
import * as changeCase from 'change-case';

import { Ignore } from './types';
import { logger } from './logger';

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
  kind,
  field,
  models,
  ignore,
  depthLimit,
}: {
  schema: GraphQLSchema;
  kind: OperationTypeNode;
  field: string;
  models: string[];
  ignore: Ignore;
  depthLimit?: number;
}) {
  resetOperationVariables();

  logger.debug(`[Sofa] Building ${field} ${kind}`);

  const document = buildDocumentNode({
    schema,
    fieldName: field,
    kind,
    models,
    ignore,
    depthLimit: depthLimit || 1,
  });

  // attach variables
  (document.definitions[0] as any).variableDefinitions = [
    ...operationVariables,
  ];

  resetOperationVariables();

  return document;
}

function buildDocumentNode({
  schema,
  fieldName,
  kind,
  models,
  ignore,
  depthLimit,
}: {
  schema: GraphQLSchema;
  fieldName: string;
  kind: OperationTypeNode;
  models: string[];
  ignore: Ignore;
  depthLimit: number;
}) {
  const typeMap: Record<OperationTypeNode, GraphQLObjectType> = {
    query: schema.getQueryType()!,
    mutation: schema.getMutationType()!,
    subscription: schema.getSubscriptionType()!,
  };
  const type = typeMap[kind];
  const field = type.getFields()[fieldName];
  const operationName = buildOperationName(`${fieldName}_${kind}`);

  if (field.args) {
    field.args.forEach(arg => {
      addOperationVariable(resolveVariable(arg));
    });
  }

  const operationNode: OperationDefinitionNode = {
    kind: Kind.OPERATION_DEFINITION,
    operation: kind,
    name: {
      kind: 'Name',
      value: operationName,
    },
    variableDefinitions: [],
    selectionSet: {
      kind: Kind.SELECTION_SET,
      selections: [
        resolveField({
          type,
          field,
          models,
          firstCall: true,
          path: [],
          ancestors: [],
          ignore,
          depthLimit,
          schema,
        }),
      ],
    },
  };
  const document: DocumentNode = {
    kind: Kind.DOCUMENT,
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
  ancestors,
  ignore,
  depthLimit,
  schema,
}: {
  parent: GraphQLNamedType;
  type: GraphQLNamedType;
  models: string[];
  path: string[];
  ancestors: GraphQLNamedType[];
  firstCall?: boolean;
  ignore: Ignore;
  depthLimit: number;
  schema: GraphQLSchema;
}): SelectionSetNode | undefined {
  if (isUnionType(type)) {
    const types = type.getTypes();

    return {
      kind: Kind.SELECTION_SET,
      selections: types
        .filter(
          t =>
            !hasCircularRef([...ancestors, t], {
              depth: depthLimit,
            })
        )
        .map<InlineFragmentNode>(t => {
          return {
            kind: Kind.INLINE_FRAGMENT,
            typeCondition: {
              kind: Kind.NAMED_TYPE,
              name: {
                kind: Kind.NAME,
                value: t.name,
              },
            },
            selectionSet: resolveSelectionSet({
              parent: type,
              type: t,
              models,
              path,
              ancestors,
              ignore,
              depthLimit,
              schema,
            }) as SelectionSetNode,
          };
        }),
    };
  }

  if (isInterfaceType(type)) {
    const types = Object.values(schema.getTypeMap()).filter(
      t => isObjectType(t) && t.getInterfaces().includes(type)
    ) as GraphQLObjectType[];

    return {
      kind: Kind.SELECTION_SET,
      selections: types
        .filter(
          t =>
            !hasCircularRef([...ancestors, t], {
              depth: depthLimit,
            })
        )
        .map<InlineFragmentNode>(t => {
          return {
            kind: Kind.INLINE_FRAGMENT,
            typeCondition: {
              kind: Kind.NAMED_TYPE,
              name: {
                kind: Kind.NAME,
                value: t.name,
              },
            },
            selectionSet: resolveSelectionSet({
              parent: type,
              type: t,
              models,
              path,
              ancestors,
              ignore,
              depthLimit,
              schema,
            }) as SelectionSetNode,
          };
        }),
    };
  }

  if (isObjectType(type)) {
    const isIgnored =
      ignore.includes(type.name) ||
      ignore.includes(`${parent.name}.${path[path.length - 1]}`);
    const isModel = models.includes(type.name);

    if (!firstCall && isModel && !isIgnored) {
      return {
        kind: Kind.SELECTION_SET,
        selections: [
          {
            kind: Kind.FIELD,
            name: {
              kind: Kind.NAME,
              value: 'id',
            },
          },
        ],
      };
    }

    const fields = type.getFields();

    return {
      kind: Kind.SELECTION_SET,
      selections: Object.keys(fields)
        .filter(fieldName => {
          return !hasCircularRef(
            [...ancestors, getNamedType(fields[fieldName].type)],
            {
              depth: depthLimit,
            }
          );
        })
        .map(fieldName => {
          return resolveField({
            type: type,
            field: fields[fieldName],
            models,
            path: [...path, fieldName],
            ancestors,
            ignore,
            depthLimit,
            schema,
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
        kind: Kind.LIST_TYPE,
        type: resolveVariableType(type.ofType),
      };
    }

    if (isNonNullType(type)) {
      return {
        kind: Kind.NON_NULL_TYPE,
        type: resolveVariableType(type.ofType),
      };
    }

    return {
      kind: Kind.NAMED_TYPE,
      name: {
        kind: Kind.NAME,
        value: type.name,
      },
    };
  }

  return {
    kind: Kind.VARIABLE_DEFINITION,
    variable: {
      kind: Kind.VARIABLE,
      name: {
        kind: Kind.NAME,
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
  ancestors,
  ignore,
  depthLimit,
  schema,
}: {
  type: GraphQLObjectType;
  field: GraphQLField<any, any>;
  models: string[];
  path: string[];
  ancestors: GraphQLNamedType[];
  firstCall?: boolean;
  ignore: Ignore;
  depthLimit: number;
  schema: GraphQLSchema;
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
        kind: Kind.ARGUMENT,
        name: {
          kind: Kind.NAME,
          value: arg.name,
        },
        value: {
          kind: Kind.VARIABLE,
          name: {
            kind: Kind.NAME,
            value: getArgumentName(arg.name, path),
          },
        },
      };
    });
  }

  if (!isScalarType(namedType)) {
    return {
      kind: Kind.FIELD,
      name: {
        kind: Kind.NAME,
        value: field.name,
      },
      selectionSet: resolveSelectionSet({
        parent: type,
        type: namedType,
        models,
        firstCall,
        path: [...path, field.name],
        ancestors: [...ancestors, type],
        ignore,
        depthLimit,
        schema,
      }),
      arguments: args,
    };
  }

  return {
    kind: Kind.FIELD,
    name: {
      kind: Kind.NAME,
      value: field.name,
    },
    arguments: args,
  };
}

function hasCircularRef(
  types: GraphQLNamedType[],
  config: {
    depth: number;
  } = {
    depth: 1,
  }
): boolean {
  const type = types[types.length - 1];

  if (isScalarType(type)) {
    return false;
  }

  const size = types.filter(t => t.name === type.name).length;
  return size > config.depth;
}
