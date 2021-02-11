import {
  GraphQLSchema,
  graphql,
  isObjectType,
  GraphQLObjectType,
  getNamedType,
  GraphQLNamedType,
  isListType,
  isNonNullType,
  GraphQLOutputType,
} from 'graphql';

import { Ignore, ExecuteFn, OnRoute, MethodMap } from './types';
import { convertName } from './common';
import { logger } from './logger';
import { ErrorHandler } from './express';

// user passes:
// - schema
// - error handler
// - execute function
// - context

export interface SofaConfig {
  basePath: string;
  schema: GraphQLSchema;
  execute?: ExecuteFn;
  /**
   * Treats an Object with an ID as not a model.
   * @example ["User", "Message.author"]
   */
  ignore?: Ignore;
  onRoute?: OnRoute;
  depthLimit?: number;
  errorHandler?: ErrorHandler;
  /**
   * Overwrites the default HTTP method.
   * @example {"Query.field": "GET", "Mutation.field": "POST"}
   */
  method?: MethodMap;
}

export interface Sofa {
  basePath: string;
  schema: GraphQLSchema;
  models: string[];
  ignore: Ignore;
  depthLimit: number;
  method?: MethodMap;
  execute: ExecuteFn;
  onRoute?: OnRoute;
  errorHandler?: ErrorHandler;
}

export function createSofa(config: SofaConfig): Sofa {
  logger.debug('[Sofa] Created');

  const models = extractsModels(config.schema);
  const ignore = config.ignore || [];
  const depthLimit = config.depthLimit || 1;

  logger.debug(`[Sofa] models: ${models.join(', ')}`);
  logger.debug(`[Sofa] ignore: ${ignore.join(', ')}`);

  return {
    execute: graphql,
    models,
    ignore,
    depthLimit,
    ...config,
  };
}

// Objects and Unions are the only things that are used to define return types
// and both might contain an ID
// We don't treat Unions as models because
// they might represent an Object that is not a model
// We check it later, when an operation is being built
function extractsModels(schema: GraphQLSchema): string[] {
  const modelMap: {
    [name: string]: {
      list?: boolean;
      single?: boolean;
    };
  } = {};
  const query = schema.getQueryType()!;
  const fields = query.getFields();

  // if Query[type] (no args) and Query[type](just id as an argument)

  // loop through every field
  for (const fieldName in fields) {
    const field = fields[fieldName];
    const namedType = getNamedType(field.type);

    if (hasID(namedType)) {
      if (!modelMap[namedType.name]) {
        modelMap[namedType.name] = {};
      }

      if (isArrayOf(field.type, namedType)) {
        // check if type is a list
        // check if name of a field matches a name of a named type (in plural)
        // check if has no non-optional arguments
        // add to registry with `list: true`
        const sameName = isNameEqual(field.name, namedType.name + 's');
        const allOptionalArguments = !field.args.some((arg) =>
          isNonNullType(arg.type)
        );

        modelMap[namedType.name].list = sameName && allOptionalArguments;
      } else if (
        isObjectType(field.type) ||
        (isNonNullType(field.type) && isObjectType(field.type.ofType))
      ) {
        // check if type is a graphql object type
        // check if name of a field matches with name of an object type
        // check if has only one argument named `id`
        // add to registry with `single: true`
        const sameName = isNameEqual(field.name, namedType.name);
        const hasIdArgument =
          field.args.length === 1 && field.args[0].name === 'id';

        modelMap[namedType.name].single = sameName && hasIdArgument;
      }
    }
  }

  return Object.keys(modelMap).filter(
    (name) => modelMap[name].list && modelMap[name].single
  );
}

// it's dumb but let's leave it for now
function isArrayOf(
  type: GraphQLOutputType,
  expected: GraphQLObjectType
): boolean {
  if (isOptionalList(type)) {
    return true;
  }

  if (isNonNullType(type) && isOptionalList(type.ofType)) {
    return true;
  }

  function isOptionalList(list: GraphQLOutputType) {
    if (isListType(list)) {
      if (list.ofType.name === expected.name) {
        return true;
      }

      if (
        isNonNullType(list.ofType) &&
        list.ofType.ofType.name === expected.name
      ) {
        return true;
      }
    }
  }

  return false;
}

function hasID(type: GraphQLNamedType): type is GraphQLObjectType {
  return isObjectType(type) && !!type.getFields().id;
}

function isNameEqual(a: string, b: string): boolean {
  return convertName(a) === convertName(b);
}
