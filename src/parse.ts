import {
  VariableDefinitionNode,
  GraphQLSchema,
  TypeNode,
  isScalarType,
  isEqualType,
  GraphQLBoolean,
  isInputObjectType,
} from 'graphql';
import { isNil } from './common';

export function parseVariable({
  value,
  variable,
  schema,
}: {
  value: any;
  variable: VariableDefinitionNode;
  schema: GraphQLSchema;
}) {
  if (isNil(value)) {
    return;
  }

  return resolveVariable({
    value,
    type: variable.type,
    schema,
  });
}

function resolveVariable({
  value,
  type,
  schema,
}: {
  value: any;
  type: TypeNode;
  schema: GraphQLSchema;
}): any | any[] {
  if (type.kind === 'NamedType') {
    const namedType = schema.getType(type.name.value);

    if (isScalarType(namedType)) {
      // GraphQLBoolean.serialize expects a boolean or a number only
      if (isEqualType(GraphQLBoolean, namedType)) {
        // we don't support TRUE
        value = value === 'true';
      }

      return namedType.serialize(value);
    }

    if (isInputObjectType(namedType)) {
      return value && typeof value === 'object' ? value : JSON.parse(value);
    }

    return value;
  }

  if (type.kind === 'ListType') {
    return (value as any[]).map(val =>
      resolveVariable({
        value: val,
        type: type.type,
        schema,
      })
    );
  }

  if (type.kind === 'NonNullType') {
    return resolveVariable({
      value: value,
      type: type.type,
      schema,
    });
  }
}
