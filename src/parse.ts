import {
  VariableDefinitionNode,
  GraphQLSchema,
  TypeNode,
  isScalarType,
  isEqualType,
  GraphQLBoolean,
} from 'graphql';

export function parseVariable({
  value,
  variable,
  schema,
}: {
  value: any;
  variable: VariableDefinitionNode;
  schema: GraphQLSchema;
}) {
  if (!value) {
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
    const scalar = schema.getType(type.name.value);

    if (isScalarType(scalar)) {
      // GraphQLBoolean.serialize expects a boolean or a number only
      if (isEqualType(GraphQLBoolean, scalar)) {
        // we don't support TRUE
        value = value === 'true';
      }

      return scalar.serialize(value);
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
