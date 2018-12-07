import * as express from 'express';
import * as changeCase from 'change-case';
import { GraphQLSchema, isObjectType, GraphQLObjectType } from 'graphql';
import { ApolloLink } from 'apollo-link';

import { buildOperation } from './operation';
import { fetch } from './fetcher';
import { getOperationInfo, getOperationType } from './ast';

export function createRouter({
  schema,
  models,
  link,
}: {
  schema: GraphQLSchema;
  models: string[];
  link: ApolloLink;
}): express.Router {
  const router = express.Router();
  const queryType = schema.getQueryType()!;
  const mutationType = schema.getMutationType();
  const modelTypes = models.map(
    name => schema.getType(name) as GraphQLObjectType,
  );

  [queryType, mutationType].forEach(type => {
    if (type) {
      Object.keys(type.getFields()).forEach(fieldName => {
        createRouteForRootField({
          schema,
          type,
          fieldName,
          models,
          link,
          router,
        });
      });
    }
  });

  // for models
  modelTypes.forEach(type => {
    if (isObjectType(type)) {
      createRouteForModel({
        schema,
        type,
        models,
        link,
        router,
      });
    }
  });

  return router;
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
  const path = `/model/${changeCase.param(typename)}/:id`;

  router.get(path, async (req: express.Request, res: express.Response) => {
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
  });
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
  const path = `/${changeCase.param(fieldName)}`;
  const operation = getOperationType(type, schema);
  const methodMap = {
    query: 'get',
    mutation: 'post',
    subscription: undefined,
  };

  if (!operation) {
    throw new Error(`Type '${type}' is not a query, mutation or subscription`);
  }

  const method = methodMap[operation];

  if (!method) {
    throw new Error('Subscription is not supported yet');
  }

  const fn = method === 'get' ? router.get : router.post;
  const query = buildOperation({
    schema,
    type,
    fieldName,
    models,
  });
  const info = getOperationInfo(query)!;

  fn.call(router, path, async (req: express.Request, res: express.Response) => {
    const variables = info.variables.reduce((variables, name) => {
      return {
        ...variables,
        [name]: req.query[name] || req.body[name],
      };
    }, {});

    const result = await fetch(link, {
      operationName: info.name,
      query,
      variables,
    });

    res.send(JSON.stringify(result.data && result.data[fieldName]));
  });
}
