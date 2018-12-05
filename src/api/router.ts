import * as express from 'express';
import * as changeCase from 'change-case';
import { GraphQLSchema, isObjectType, GraphQLObjectType, parse } from 'graphql';
import { buildOperation } from './operation';
import { fetch } from './fetcher';
import { ApolloLink } from 'apollo-link';

export function createRouter(config: {
  schema: GraphQLSchema;
  models: string[];
  link: ApolloLink;
}) {
  const router = express.Router();
  const queryType = config.schema.getQueryType()!;
  const modelTypes = config.models.map(
    name => config.schema.getType(name) as GraphQLObjectType,
  );

  // for query
  const fields = queryType.getFields();
  
  Object.keys(fields).forEach(field => {
    createRoute({
      schema: config.schema,
      type: queryType,
      field,
      models: config.models,
      link: config.link,
      router,
    });
  });

  // for models
  modelTypes.forEach(modelType => {
    createRoute({
      schema: config.schema,
      type: modelType,
      models: config.models,
      link: config.link,
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
    return createRouteForRootField({
      schema: config.schema,
      type: config.type,
      field: config.field,
      router: config.router,
      models: config.models,
      link: config.link,
    });
  }

  if (isObjectType(config.type)) {
    return createRouteForModel({
      schema: config.schema,
      type: config.type,
      router: config.router,
      models: config.models,
      link: config.link,
    });
  }
}

function createRouteForModel(config: {
  schema: GraphQLSchema;
  type: GraphQLObjectType;
  router: express.Router;
  models: string[];
  link: ApolloLink;
}) {
  const typename = config.type.name;

  config.router.get(
    `/model/${changeCase.camel(typename)}/:id`,
    async (req: express.Request, res: express.Response) => {
      const id = req.params.id;

      const op = buildOperation({
        schema: config.schema,
        type: config.type,
        models: config.models,
      });
      const variables = {
        id,
      };

      try {
        const result = await fetch(config.link, {
          operationName: op.operationName,
          query: parse(op.operation),
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

function createRouteForRootField(config: {
  schema: GraphQLSchema;
  type: GraphQLObjectType;
  field: string;
  router: express.Router;
  models: string[];
  link: ApolloLink;
}) {
  config.router.get(
    `/${changeCase.camel(config.field)}`,
    async (req: express.Request, res: express.Response) => {
      const op = buildOperation({
        schema: config.schema,
        type: config.type,
        field: config.field,
        models: config.models,
      });

      const variables = Object.keys(op.variables).reduce((variables, name) => {
        return {
          ...variables,
          [name]: req.query[name],
        };
      }, {});

      const result = await fetch(config.link, {
        operationName: op.operationName,
        query: parse(op.operation),
        variables,
      });

      res.send(JSON.stringify(result.data && result.data[config.field]));
    },
  );
}
