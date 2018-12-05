import {
  GraphQLSchema,
  GraphQLObjectType,
  isObjectType,
  GraphQLNamedType,
  isScalarType,
  getNamedType,
  GraphQLArgument,
} from 'graphql';
import * as changeCase from 'change-case';

export function buildOperation(config: {
  schema: GraphQLSchema;
  type: GraphQLObjectType;
  field?: string;
  models: string[];
}) {
  // if it has a field, it means it's a query or mutation
  if (config.field) {
    return buildRootFieldQuery({
      schema: config.schema,
      field: config.field,
      models: config.models,
    });
  }

  return buildModelQuery({
    schema: config.schema,
    type: config.type,
    models: config.models,
  });
}

function buildModelQuery(config: {
  schema: GraphQLSchema;
  type: GraphQLObjectType;
  models: string[];
}): {
  operationName: string;
  operation: string;
  variables: {
    id: string;
  };
} {
  const operationName = `get${changeCase.pascal(config.type.name)}Type`;

  const body = resolveModel({
    type: config.type,
    models: config.models,
  });

  return {
    operationName,
    operation: `
      query ${operationName}($id: ID!) {
        _getRESTModelById(typename: "${config.type.name}", id: $id) {
          ${body}
        }
      }
    `,
    variables: {
      id: 'ID!',
    },
  };
}

function buildRootFieldQuery(config: {
  schema: GraphQLSchema;
  field: string;
  models: string[];
}): {
  operationName: string;
  operation: string;
  variables: {
    [name: string]: string;
  };
} {
  const operationName = `get${changeCase.pascal(config.field)}Query`;
  const field = config.schema.getQueryType()!.getFields()[config.field];
  const type = getNamedType(field.type);

  const body = resolveField({
    name: config.field,
    fieldType: type,
    args: field.args,
    parent: config.schema.getQueryType()!,
    models: config.models,
  });

  const args =
    field.args && field.args.length
      ? `(${field.args
          .map(arg => {
            const val = [`\$${arg.name}: ${arg.type.toString()}`];

            if (arg.defaultValue) {
              val.push(` = ${arg.defaultValue}`);
            }

            return val.join('');
          })
          .join(', ')})`
      : '';

  return {
    operationName,
    operation: `
      query ${operationName} ${args} {
        ${body}
      }
    `,
    variables: field.args.length
      ? field.args.reduce((variables, arg) => {
          return {
            ...variables,
            [arg.name]: arg.type.toString(),
          };
        }, {})
      : {},
  };
}

function resolveModel(config: {
  type: GraphQLObjectType;
  models: string[];
}): string {
  const fields = config.type.getFields();

  const body = Object.keys(fields)
    .map(name => {
      return resolveField({
        name,
        fieldType: getNamedType(fields[name].type),
        models: config.models,
      });
    })
    .join('\n');

  return `
    ... on ${config.type.name} {
      ${body}
    }
  `;
}

function resolveField(config: {
  name: string;
  fieldType: GraphQLNamedType;
  parent?: GraphQLObjectType;
  args?: GraphQLArgument[];
  models: string[];
}): string {
  const args =
    config.args && config.args.length
      ? `(${config.args
          .map(arg => {
            return `${arg.name}: \$${arg.name}`;
          })
          .join(', ')})`
      : '';

  if (isObjectType(config.fieldType)) {
    if (!config.parent && config.models.includes(config.fieldType.name)) {
      return `${config.name} {
        id
      }`;
    }

    const fields = config.fieldType.getFields();
    const inner = Object.keys(fields)
      .map(name =>
        resolveField({
          name,
          fieldType: getNamedType(fields[name].type),
          models: config.models,
        }),
      )
      .join('\n');

    return `${config.name} ${args} {
      ${inner}
    }`;
  }

  if (isScalarType(config.fieldType)) {
    return `
      ${config.name} ${args}
    `;
  }

  return '';
}
