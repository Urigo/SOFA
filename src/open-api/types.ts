import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLField,
  GraphQLInputField,
  isNonNullType,
  isListType,
  isObjectType,
  isScalarType,
  isEnumType,
  GraphQLType,
} from 'graphql';
import { mapToPrimitive, mapToRef } from './utils';

export function buildSchemaObjectFromType(
  type: GraphQLObjectType | GraphQLInputObjectType
): any {
  const required: string[] = [];
  const properties: Record<string, any> = {};

  const fields = type.getFields();

  for (const fieldName in fields) {
    const field = fields[fieldName];

    if (isNonNullType(field.type)) {
      required.push(field.name);
    }

    properties[fieldName] = resolveField(field);
    if (field.description) {
      properties[fieldName].description = field.description;
    }
  }

  return {
    type: 'object',
    ...(required.length ? { required } : {}),
    properties,
    ...(type.description ? { description: type.description } : {}),
  };
}

function resolveField(field: GraphQLField<any, any> | GraphQLInputField) {
  return resolveFieldType(field.type);
}

// array -> [type]
// type -> $ref
// scalar -> swagger primitive
export function resolveFieldType(
  type: GraphQLType
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

  if (isEnumType(type)) {
    return {
      type: 'string',
      enum: type.astNode?.values?.map((value) => value.name.value),
    };
  }

  return {
    type: 'object',
  };
}
