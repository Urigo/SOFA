import * as express from 'express';
import * as changeCase from 'change-case';
import { GraphQLSchema, isObjectType, GraphQLObjectType } from 'graphql';
import { ApolloLink } from 'apollo-link';

import { buildOperation } from './operation';
import { fetch } from './fetcher';
import { getOperationInfo } from './ast';

export function createRouter({
  schema,
  models,
  link,
}: {
  schema: GraphQLSchema;
  models: string[];
  link: ApolloLink;
}) {
  const router = express.Router();
  const queryType = schema.getQueryType()!;
  const modelTypes = models.map(
    name => schema.getType(name) as GraphQLObjectType,
  );

  // for query
  const fields = queryType.getFields();

  Object.keys(fields).forEach(field => {
    createRoute({
      schema,
      type: queryType,
      field,
      models,
      link,
      router,
    });
  });

  // for models
  modelTypes.forEach(modelType => {
    createRoute({
      schema,
      type: modelType,
      models,
      link,
      router,
    });
  });

  return router;
}

function createRoute(config: {
  schema: GraphQLSchema;
  type: GraphQLObjectType;
  field?: string;
  router: express.Router;
  models: string[];
  link: ApolloLink;
}): void {
  if (config.field) {
    return createRouteForRootField(config as any);
  }

  if (isObjectType(config.type)) {
    return createRouteForModel(config);
  }
}

function createRouteForModel({
  schema,
  type,
  router,
  models,
  link,
}: {
  schema: GraphQLSchema;
  type: GraphQLObjectType;
  router: express.Router;
  models: string[];
  link: ApolloLink;
}) {
  const typename = type.name;

  router.get(
    `/model/${changeCase.camel(typename)}/:id`,
    async (req: express.Request, res: express.Response) => {
      const id = req.params.id;

      const query = buildOperation({
        schema,
        type,
        models,
      });
      const { name } = getOperationInfo(query)!;

      const variables = {
        id,
      };

      try {
        const result = await fetch(link, {
          operationName: name,
          query,
          variables,
        });

        res.send(JSON.stringify(result.data && result.data._getRESTModelById));
      } catch (e) {
        console.log(e);

        res.sendStatus(500);
      }
    },
  );
}

function createRouteForRootField({
  schema,
  type,
  fieldName,
  router,
  models,
  link,
}: {
  schema: GraphQLSchema;
  type: GraphQLObjectType;
  fieldName: string;
  router: express.Router;
  models: string[];
  link: ApolloLink;
}) {
  router.get(
    `/${changeCase.camel(fieldName)}`,
    async (req: express.Request, res: express.Response) => {
      const query = buildOperation({
        schema,
        type,
        fieldName,
        models,
      });
      const operation = getOperationInfo(query)!;

      const variables = operation.variables.reduce((variables, name) => {
        return {
          ...variables,
          [name]: req.query[name],
        };
      }, {});

      const result = await fetch(link, {
        operationName: operation.name,
        query,
        variables,
      });

      res.send(JSON.stringify(result.data && result.data[fieldName]));
    },
  );
}
