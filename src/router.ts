import * as express from 'express';
import * as changeCase from 'change-case';
import {
  GraphQLSchema,
  isObjectType,
  GraphQLObjectType,
  DocumentNode,
} from 'graphql';
import { ApolloLink } from 'apollo-link';

import { buildOperation } from './operation';
import { fetch, ErrorFunction } from './fetcher';
import { getOperationInfo, getOperationType } from './ast';

export type ErrorHandler = (res: express.Response, error: any) => void;

export function createRouter({
  schema,
  models,
  link,
  handleError,
}: {
  schema: GraphQLSchema;
  models: string[];
  handleError?: ErrorHandler;
  link: ApolloLink;
}): express.Router {
  const router = express.Router();
  const queryType = schema.getQueryType()!;
  const mutationType = schema.getMutationType();
  const modelTypes = models.map(
    name => schema.getType(name) as GraphQLObjectType
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
          handleError,
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
        handleError,
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
  handleError,
}: {
  schema: GraphQLSchema;
  type: GraphQLObjectType;
  router: express.Router;
  models: string[];
  link: ApolloLink;
  handleError?: ErrorHandler;
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

    await requester({
      req,
      res,
      link,
      handleError,
      key: '_getRESTModelById',
      operation: {
        query,
        operationName: name,
        variables,
      },
    });
  });
}

async function requester({
  req,
  res,
  link,
  operation,
  handleError,
  key,
}: {
  req: express.Request;
  res: express.Response;
  link: ApolloLink;
  handleError?: ErrorHandler;
  key: string;
  operation: {
    operationName: string;
    query: DocumentNode;
    variables: Record<string, any>;
  };
}) {
  try {
    const result = await fetch({
      req,
      link,
      operation,
    });

    res.json(result.data && result.data[key]);
  } catch (e) {
    if (e instanceof Error) {
      if (handleError) {
        handleError(res, e);
      } else {
        console.log(e);
        res.sendStatus(500);
      }
    } else {
      (e as ErrorFunction)(res);
    }
  }
}

function createRouteForRootField({
  schema,
  type,
  fieldName,
  router,
  models,
  link,
  handleError,
}: {
  schema: GraphQLSchema;
  type: GraphQLObjectType;
  fieldName: string;
  router: express.Router;
  models: string[];
  link: ApolloLink;
  handleError?: ErrorHandler;
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
        [name]: pickParam(req, name),
      };
    }, {});

    await requester({
      req,
      res,
      link,
      handleError,
      key: fieldName,
      operation: {
        query,
        operationName: info.name,
        variables,
      },
    });
  });
}

function pickParam(req: express.Request, name: string) {
  if (req.query && req.query[name]) {
    return req.query[name];
  }

  if (req.body && req.body[name]) {
    return req.body[name];
  }
}
