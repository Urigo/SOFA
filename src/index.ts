import { ApolloLink } from 'apollo-link';
import { GraphQLSchema } from 'graphql';
import * as express from 'express';

import { createRouter, ErrorHandler, OnRoute } from './router';
import { extendSchema } from './schema';
import { Skip, Force } from './operation';

export { ErrorFunction } from './fetcher';
export { OpenAPI } from './open-api';

interface ModelMap {
  [modelName: string]: (id: any, context: any) => any;
}

export function createSofa({
  models,
}: {
  models: ModelMap;
}): {
  typeDefs: string;
  resolvers: any;
  models: ModelMap;
} {
  // instead of exporting resolvers and typeDefs we could extend the schema object
  const extendedSchema = extendSchema({
    modelMap: models,
  });

  return {
    typeDefs: extendedSchema.typeDefs,
    resolvers: extendedSchema.resolvers,
    models,
  };
}

export function useSofa({
  sofa,
  link,
  schema,
  handleError,
  routes,
  onRoute,
  skip,
  force,
}: {
  sofa: {
    typeDefs: string;
    resolvers: any;
    models: ModelMap;
  };
  schema: GraphQLSchema;
  link: ApolloLink;
  handleError?: ErrorHandler;
  routes?: {
    [type: string]:
      | {
          [field: string]: string;
        }
      | string;
  };
  skip?: Skip;
  force?: Force;
  onRoute?: OnRoute;
}): express.Router {
  return createRouter({
    schema,
    models: Object.keys(sofa.models),
    skip,
    force,
    link,
    handleError,
    rename: routes,
    onRoute,
  });
}
