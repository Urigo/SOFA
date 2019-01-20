import {
  DocumentNode,
  GraphQLSchema,
  // visit,
  // visitWithTypeInfo,
  // TypeInfo,
  VariableDefinitionNode,
  TypeNode,
  OperationDefinitionNode,
  StringValueNode,
} from 'graphql';

import { getOperationInfo } from '../ast';
// import { resolveFieldType } from './types';
import { mapToPrimitive, mapToRef } from './utils';
import { resolveFieldType } from './types';

export function buildPathFromOperation({
  schema,
  operation,
}: {
  schema: GraphQLSchema;
  operation: DocumentNode;
}) {
  const info = getOperationInfo(operation)!;
  const isQuery = info.operation.operation === 'query';

  return {
    operationId: info.name,
    parameters: isQuery
      ? resolveParameters(info.operation.variableDefinitions)
      : [],
    requestBody: !isQuery
      ? {
          content: {
            'application/json': {
              schema: resolveRequestBody(info.operation.variableDefinitions),
            },
          },
        }
      : undefined,
    responses: {
      200: {
        content: {
          'application/json': {
            schema: resolveResponse({
              schema,
              operation: info.operation,
            }),
          },
        },
      },
    },
  };
}

function resolveParameters(
  variables: ReadonlyArray<VariableDefinitionNode> | undefined
) {
  if (!variables) {
    return [];
  }

  return variables.map((variable: any) => {
    console.log('variable.type: ', variable.type);
    console.log('variable.variable: ', variable.variable);
    console.log('----------------------');

    return {
      in:
        variable.variable.name.value === 'id' &&
        variable.type.type.name.value === 'ID'
          ? 'path'
          : 'query',
      name: variable.variable.name.value,
      required: variable.type.kind === 'NonNullType',
      schema: resolveParamSchema(variable.type),
    };
  });
}

function resolveRequestBody(
  variables: ReadonlyArray<VariableDefinitionNode> | undefined
) {
  if (!variables) {
    return {};
  }

  const properties: Record<string, any> = {};
  const required: string[] = [];

  variables.forEach(variable => {
    if (variable.type.kind === 'NonNullType') {
      required.push(variable.variable.name.value);
    }

    properties[variable.variable.name.value] = resolveParamSchema(
      variable.type
    );
  });

  return {
    type: 'object',
    required,
    properties,
  };
}

// array -> [type]
// type -> $ref
// scalar -> swagger primitive
function resolveParamSchema(type: TypeNode): any {
  if (type.kind === 'NonNullType') {
    return resolveParamSchema(type.type);
  }

  if (type.kind === 'ListType') {
    return {
      type: 'array',
      items: resolveParamSchema(type.type),
    };
  }

  const primitive = mapToPrimitive(type.name.value);

  return (
    primitive || {
      $ref: mapToRef(type.name.value),
    }
  );
}

function resolveResponse({
  schema,
  operation,
}: {
  schema: GraphQLSchema;
  operation: OperationDefinitionNode;
}) {
  const operationType = operation.operation;
  const rootField = operation.selectionSet.selections[0];

  if (rootField.kind === 'Field') {
    if (rootField.name.value === '_getRESTModelById') {
      const typenameArg = rootField.arguments!.find(
        arg => arg.name.value === 'typename'
      )!;
      const typename = (typenameArg.value as StringValueNode).value;

      return resolveFieldType(schema.getType(typename)!);
    }

    if (operationType === 'query') {
      const queryType = schema.getQueryType()!;
      const field = queryType.getFields()[rootField.name.value];

      return resolveFieldType(field.type);
    }

    if (operationType === 'mutation') {
      const mutationType = schema.getMutationType()!;
      const field = mutationType.getFields()[rootField.name.value];

      return resolveFieldType(field.type);
    }
  }

  // const typeInfo = new TypeInfo(schema);
  // const response = {
  //   type: 'object',

  // };

  // visit(
  //   operation,
  //   visitWithTypeInfo(typeInfo, {
  //     Field(node, _key, _parent, _path, ancestors) {
  //       // we can skip the first field since it's a query / mutation or _getModelByID
  //       // it's something specific only to this library
  //       if (ancestors.length === 2) {
  //         return;
  //       }

  //       const fieldDef = typeInfo.getFieldDef();

  //       console.log(ancestors);

  //       console.log('field', node.name.value, resolveFieldType(fieldDef.type));
  //     },
  //   })
  // );
}
