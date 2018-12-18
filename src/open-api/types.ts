import {
  GraphQLObjectType,
  GraphQLField,
  isNonNullType,
  GraphQLOutputType,
  isListType,
  isObjectType,
  isScalarType,
  GraphQLNamedType,
} from 'graphql';
import { mapToPrimitive, mapToRef } from './utils';

export function buildSchemaObjectFromType(type: GraphQLObjectType): any {
  const required: string[] = [];
  const properties: Record<string, any> = {};

  const fields = type.getFields();

  for (const fieldName in fields) {
    const field = fields[fieldName];

    if (isNonNullType(field.type)) {
      required.push(field.name);
    }

    properties[fieldName] = resolveField(field);
  }

  return {
    type: 'object',
    required,
    properties,
  };
}

function resolveField(field: GraphQLField<any, any>) {
  return resolveFieldType(field.type);
}

// array -> [type]
// type -> $ref
// scalar -> swagger primitive
export function resolveFieldType(
  type: GraphQLOutputType | GraphQLNamedType
): any {
  if (isNonNullType(type)) {
    return resolveFieldType(type.ofType);
  }

  if (isListType(type)) {
    return {
      type: 'array',
      items: resolveFieldType(type.ofType),
    };
  }

  if (isObjectType(type)) {
    return {
      $ref: mapToRef(type.name),
    };
  }

  if (isScalarType(type)) {
    return (
      mapToPrimitive(type.name) || {
        type: 'object',
      }
    );
  }

  return {
    type: 'object',
  };
}
