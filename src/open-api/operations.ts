import {
  DocumentNode,
  GraphQLSchema,
  VariableDefinitionNode,
  TypeNode,
  OperationDefinitionNode,
  ObjectTypeDefinitionNode,
  FieldNode,
  parse,
  printType,
  Kind, 
  isEnumType,
} from 'graphql';

import { getOperationInfo } from '../ast';
import { mapToPrimitive, mapToRef } from './utils';
import { resolveFieldType } from './types';
import { titleCase } from 'title-case';
import { OpenAPIV3 } from 'openapi-types';
import { assertEnumType } from "graphql/type/definition";

export function buildPathFromOperation({
  url,
  schema,
  operation,
  useRequestBody,
  tags,
  description,
  customScalars,
}: {
  url: string;
  schema: GraphQLSchema;
  operation: DocumentNode;
  useRequestBody: boolean;
  tags?: string[];
  description?: string;
  customScalars: Record<string, any>;
}): OpenAPIV3.OperationObject {
  const info = getOperationInfo(operation)!;
  const enumTypes = resolveEnumTypes(schema)

  const summary = resolveSummary(schema, info.operation);

  return {
    tags,
    description,
    summary,
    operationId: info.name,
    ...(useRequestBody
      ? {
          requestBody: {
            content: {
              'application/json': {
                schema: resolveRequestBody(info.operation.variableDefinitions, {
                  customScalars, enumTypes
                }),
              },
            },
          },
        }
      : {
          parameters: resolveParameters(
            url,
            info.operation.variableDefinitions,
            { customScalars, enumTypes }
          ),
        }),
    responses: {
      200: {
        description: summary,
        content: {
          'application/json': {
            schema: resolveResponse({
              schema,
              operation: info.operation,
              opts: { customScalars, enumTypes },
            }),
          },
        },
      },
    },
  };
}

function resolveEnumTypes(schema: GraphQLSchema): Record<string, any> {
  const enumTypes = Object.values(schema.getTypeMap()).filter(isEnumType).map(assertEnumType)
  return Object.fromEntries(
      enumTypes.map(
          type => ([type.name,
                {
                  type: 'string',
                  enum: type.getValues().map(value => value.name),
                },
              ]
          )
      ))
}

function resolveParameters(
  url: string,
  variables: ReadonlyArray<VariableDefinitionNode> | undefined,
  opts: { customScalars: Record<string, any>, enumTypes: Record<string, any>}
) {
  if (!variables) {
    return [];
  }

  return variables.map((variable: any) => {
    return {
      in: isInPath(url, variable.variable.name.value) ? 'path' : 'query',
      name: variable.variable.name.value,
      required: variable.type.kind === Kind.NON_NULL_TYPE,
      schema: resolveParamSchema(variable.type, opts),
    };
  });
}

function resolveRequestBody(
  variables: ReadonlyArray<VariableDefinitionNode> | undefined,
  opts: { customScalars: Record<string, any>, enumTypes: Record<string, any>}
) {
  if (!variables) {
    return {};
  }

  const properties: Record<string, any> = {};
  const required: string[] = [];

  variables.forEach((variable) => {
    if (variable.type.kind === Kind.NON_NULL_TYPE) {
      required.push(variable.variable.name.value);
    }

    properties[variable.variable.name.value] = resolveParamSchema(
      variable.type,
      opts
    );
  });

  return {
    type: 'object',
    properties,
    ...(required.length ? { required } : {}),
  };
}

// array -> [type]
// type -> $ref
// scalar -> swagger primitive
function resolveParamSchema(
  type: TypeNode,
  opts: { customScalars: Record<string, any>, enumTypes: Record<string, any>}
): any {
  if (type.kind === Kind.NON_NULL_TYPE) {
    return resolveParamSchema(type.type, opts);
  }

  if (type.kind === Kind.LIST_TYPE) {
    return {
      type: 'array',
      items: resolveParamSchema(type.type, opts),
    };
  }

  const primitive = mapToPrimitive(type.name.value);

  return (
    primitive ||
    opts.customScalars[type.name.value] ||
    opts.enumTypes[type.name.value] ||
    {$ref: mapToRef(type.name.value)}
  );
}

function resolveResponse({
  schema,
  operation,
  opts,
}: {
  schema: GraphQLSchema;
  operation: OperationDefinitionNode;
  opts: { customScalars: Record<string, any>, enumTypes: Record<string, any>};
}) {
  const operationType = operation.operation;
  const rootField = operation.selectionSet.selections[0];

  if (rootField.kind === Kind.FIELD) {
    if (operationType === 'query') {
      const queryType = schema.getQueryType()!;
      const field = queryType.getFields()[rootField.name.value];

      return resolveFieldType(field.type, opts);
    }

    if (operationType === 'mutation') {
      const mutationType = schema.getMutationType()!;
      const field = mutationType.getFields()[rootField.name.value];

      return resolveFieldType(field.type, opts);
    }
  }
}

function isInPath(url: string, param: string): boolean {
  return url.indexOf(`{${param}}`) !== -1;
}

function resolveSummary(
  schema: GraphQLSchema,
  operation: OperationDefinitionNode
) {
  const selection = operation.selectionSet.selections[0] as FieldNode;
  const fieldName = selection.name.value;
  const typeDefinition = schema.getType(titleCase(operation.operation));

  if (!typeDefinition) {
    return '';
  }

  const definitionNode =
    typeDefinition.astNode || parse(printType(typeDefinition)).definitions[0];

  if (!isObjectTypeDefinitionNode(definitionNode)) {
    return '';
  }

  const fieldNode = definitionNode.fields!.find(
    (field) => field.name.value === fieldName
  );
  const descriptionDefinition = fieldNode && fieldNode.description;
  return descriptionDefinition && descriptionDefinition.value
    ? descriptionDefinition.value
    : '';
}

function isObjectTypeDefinitionNode(
  node: any
): node is ObjectTypeDefinitionNode {
  return node.kind === Kind.OBJECT_TYPE_DEFINITION;
}
