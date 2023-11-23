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
  isUnionType,
} from 'graphql';
import { mapToPrimitive, mapToRef } from './utils';

export function buildSchemaObjectFromType(
  type: GraphQLObjectType | GraphQLInputObjectType,
  opts: { customScalars: Record<string, any> }
): any {
  const required: string[] = [];
  const properties: Record<string, any> = {};

  const fields = type.getFields();

  for (const fieldName in fields) {
    const field = fields[fieldName];

    if (isNonNullType(field.type)) {
      required.push(field.name);
    }

    properties[fieldName] = resolveField(field, opts);
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

function resolveField(
  field: GraphQLField<any, any> | GraphQLInputField,
  opts: { customScalars: Record<string, any> }
) {
  return resolveFieldType(field.type, opts);
}

// array -> [type]
// type -> $ref
// scalar -> swagger primitive
export function resolveFieldType(
  type: GraphQLType,
  opts: { customScalars: Record<string, any> }
): any {
  if (isNonNullType(type)) {
    return resolveFieldType(type.ofType, opts);
  }

  if (isListType(type)) {
    return {
      type: 'array',
      items: resolveFieldType(type.ofType, opts),
    };
  }

  if (isObjectType(type)) {
    return {
      $ref: mapToRef(type.name),
    };
  }

  if (isScalarType(type)) {
    const resolved = mapToPrimitive(type.name) ||
      opts.customScalars[type.name] ||
      type.extensions?.jsonSchema || {
        type: 'object',
      };
    return { ...resolved };
  }

  if (isEnumType(type)) {
    return {
      type: 'string',
      enum: type.getValues().map((value) => value.name),
    };
  }

  if (isUnionType(type)) {
    return {
      oneOf: type.getTypes().map((type) => resolveFieldType(type, opts)),
    };
  }

  return {
    type: 'object',
  };
}
