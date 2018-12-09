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
export interface RouteInfo {
  document: DocumentNode;
  path: string;
  method: string;
}
export type OnRoute = (info: RouteInfo) => void;

export function createRouter({
  schema,
  models,
  link,
  handleError,
  rename,
  onRoute,
}: {
  schema: GraphQLSchema;
  models: string[];
  handleError?: ErrorHandler;
  link: ApolloLink;
  rename?: {
    [type: string]:
      | {
          [field: string]: string;
        }
      | string;
  };
  onRoute?: OnRoute;
}): express.Router {
  const router = express.Router();
  const queryType = schema.getQueryType()!;
  const mutationType = schema.getMutationType();
  const modelTypes = models.map(
    name => schema.getType(name) as GraphQLObjectType
  );

  function pickCustomPath(typeName: string, fieldName?: string) {
    const result = rename && rename[typeName];

    if (!fieldName && typeof result === 'string') {
      return result;
    }

    if (fieldName && result && typeof result !== 'string') {
      return result[fieldName];
    }
  }

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
          customPath: pickCustomPath(type.name, fieldName),
          onRoute,
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
        customPath: pickCustomPath(type.name),
        onRoute,
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
  customPath,
  onRoute,
}: {
  schema: GraphQLSchema;
  type: GraphQLObjectType;
  router: express.Router;
  models: string[];
  link: ApolloLink;
  handleError?: ErrorHandler;
  customPath?: string;
  onRoute?: OnRoute;
}) {
  const typename = type.name;
  const path = customPath
    ? `${customPath}/:id`
    : `/model/${changeCase.param(typename)}/:id`;

  const query = buildOperation({
    schema,
    type,
    models,
  });
  const { name } = getOperationInfo(query)!;

  router.get(path, async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
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

  if (onRoute) {
    onRoute({
      document: query,
      path,
      method: 'GET',
    });
  }
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
  customPath,
  onRoute,
}: {
  schema: GraphQLSchema;
  type: GraphQLObjectType;
  fieldName: string;
  customPath?: string;
  router: express.Router;
  models: string[];
  link: ApolloLink;
  handleError?: ErrorHandler;
  onRoute?: OnRoute;
}) {
  const path = customPath || `/${changeCase.param(fieldName)}`;
  const operation = getOperationType(type, schema);
  const methodMap = {
    query: 'GET',
    mutation: 'POST',
    subscription: undefined,
  };

  if (!operation) {
    throw new Error(`Type '${type}' is not a query, mutation or subscription`);
  }

  const method = methodMap[operation];

  if (!method) {
    throw new Error('Subscription is not supported yet');
  }

  const fn = method === 'GET' ? router.get : router.post;
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

  if (onRoute) {
    onRoute({
      document: query,
      path,
      method,
    });
  }
}

function pickParam(req: express.Request, name: string) {
  if (req.query && req.query[name]) {
    return req.query[name];
  }

  if (req.body && req.body[name]) {
    return req.body[name];
  }
}
