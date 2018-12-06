import { ApolloLink } from 'apollo-link';
import { GraphQLSchema } from 'graphql';
import * as express from 'express';

import { createRouter } from './router';
import { extendSchema } from './schema';

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
}: {
  sofa: {
    typeDefs: string;
    resolvers: any;
    models: ModelMap;
  };
  schema: GraphQLSchema;
  link: ApolloLink;
}): express.Router {
  return createRouter({
    schema,
    models: Object.keys(sofa.models),
    link
  });
}
