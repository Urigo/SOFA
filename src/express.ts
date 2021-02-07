import * as http from 'http';
import { Request, NextFunction } from 'express';
import {
  DocumentNode,
  print,
  isObjectType,
  isNonNullType,
  Kind,
} from 'graphql';

import { buildOperationNodeForField } from '@graphql-tools/utils';
import { getOperationInfo, OperationInfo } from './ast';
import { Sofa, isContextFn } from './sofa';
import { Route, RouteInfo, Method, MethodMap } from './types';
import { convertName } from './common';
import { parseVariable } from './parse';
import { StartSubscriptionEvent, SubscriptionManager } from './subscriptions';
import { logger } from './logger';

export type ErrorHandler = (
  res: http.ServerResponse,
  errors: ReadonlyArray<any>
) => void;

export function createRouter(sofa: Sofa) {
  logger.debug('[Sofa] Creating router');

  const queryType = sofa.schema.getQueryType();
  const mutationType = sofa.schema.getMutationType();
  const subscriptionManager = new SubscriptionManager(sofa);

  const queryRoutes: Route[] = [];
  if (queryType) {
    Object.keys(queryType.getFields()).forEach((fieldName) => {
      const routeInfo = createQueryRoute({ sofa, fieldName });
      queryRoutes.push(routeInfo.route);

      if (sofa.onRoute) {
        sofa.onRoute(routeInfo);
      }
    });
  }

  const mutationRoutes: Route[] = [];
  if (mutationType) {
    Object.keys(mutationType.getFields()).forEach((fieldName) => {
      const routeInfo = createMutationRoute({ sofa, fieldName });
      mutationRoutes.push(routeInfo.route);

      if (sofa.onRoute) {
        sofa.onRoute(routeInfo);
      }
    });
  }

  const startSubscriptionRoute: Route = async (routeUrl, req, res) => {
    if (req.method !== 'POST' || routeUrl !== '/webhook') {
      return;
    }
    const { subscription, variables, url }: StartSubscriptionEvent = req.body;

    try {
      const result = await subscriptionManager.start(
        {
          subscription,
          variables,
          url,
        },
        { req, res }
      );

      res.writeHead(200, 'OK', {
        'Content-Type': 'application/json',
      });
      res.end(JSON.stringify(result));
    } catch (e) {
      res.writeHead(500, 'Subscription failed', {
        'Content-Type': 'application/json',
      });
      res.end(JSON.stringify(e));
    }
  };

  const updateSubscriptionRoute: Route = async (routeUrl, req, res) => {
    const match = routeUrl.match(/^\/webhook\/([^/]+)$/);
    if (req.method !== 'POST' || match == null) {
      return;
    }
    const id: string = match[1];
    const variables: any = req.body.variables;

    try {
      const result = await subscriptionManager.update(
        {
          id,
          variables,
        },
        {
          req,
          res,
        }
      );

      res.writeHead(200, 'OK', {
        'Content-Type': 'application/json',
      });
      res.end(JSON.stringify(result));
    } catch (e) {
      res.writeHead(500, 'Subscription failed to update', {
        'Content-Type': 'application/json',
      });
      res.end(JSON.stringify(e));
    }
  };

  const deleteSubscriptionRoute: Route = async (routeUrl, req, res) => {
    const match = routeUrl.match(/^\/webhook\/([^/]+)$/);
    if (req.method !== 'DELETE' || match == null) {
      return;
    }
    const id: string = match[1];

    try {
      const result = await subscriptionManager.stop(id);

      res.writeHead(200, 'OK', {
        'Content-Type': 'application/json',
      });
      res.end(JSON.stringify(result));
    } catch (e) {
      res.writeHead(500, 'Subscription failed to stop', {
        'Content-Type': 'application/json',
      });
      res.end(JSON.stringify(e));
    }
  };

  const router = async (
    req: Request,
    res: http.ServerResponse,
    next: NextFunction
  ) => {
    const url = req.originalUrl || req.url;
    const basePath = sofa.basePath;
    const routeUrl = url.startsWith(basePath)
      ? url.slice(basePath.length)
      : url;
    try {
      await startSubscriptionRoute(routeUrl, req, res);
      await updateSubscriptionRoute(routeUrl, req, res);
      await deleteSubscriptionRoute(routeUrl, req, res);
      await Promise.all(queryRoutes.map((route) => route(routeUrl, req, res)));
      await Promise.all(
        mutationRoutes.map((route) => route(routeUrl, req, res))
      );
      // continue middleware chain if routes didn't send response
      if (res.writableEnded === false) {
        next();
      }
    } catch (error) {
      next(error);
    }
  };

  return router;
}

function createQueryRoute({
  sofa,
  fieldName,
}: {
  sofa: Sofa;
  fieldName: string;
}): RouteInfo {
  logger.debug(`[Router] Creating ${fieldName} query`);

  const queryType = sofa.schema.getQueryType()!;
  const operationNode = buildOperationNodeForField({
    kind: 'query',
    schema: sofa.schema,
    field: fieldName,
    models: sofa.models,
    ignore: sofa.ignore,
    circularReferenceDepth: sofa.depthLimit,
  });
  const operation: DocumentNode = {
    kind: Kind.DOCUMENT,
    definitions: [operationNode],
  };
  const info = getOperationInfo(operation)!;
  const field = queryType.getFields()[fieldName];
  const fieldType = field.type;
  const isSingle =
    isObjectType(fieldType) ||
    (isNonNullType(fieldType) && isObjectType(fieldType.ofType));
  const hasIdArgument = field.args.some((arg) => arg.name === 'id');

  const hasId = isSingle && hasIdArgument;

  const path = getPath(fieldName, hasId);
  const pathFieldName = convertName(fieldName);

  const method = produceMethod({
    typeName: queryType.name,
    fieldName,
    methodMap: sofa.method,
    defaultValue: 'GET',
  });

  const route: Route = async (routeUrl, req, res) => {
    if (req.method !== method.toUpperCase()) {
      return;
    }
    const config = {
      additionalVariables: {} as { [key: string]: string },
      info,
      fieldName,
      sofa,
      operation,
    };
    if (hasId === false && routeUrl === path) {
      handler(config, req, res);
    }
    const chunks = routeUrl.split('/').slice(1);
    if (hasId === true && chunks.length === 2 && chunks[0] === pathFieldName) {
      config.additionalVariables['id'] = chunks[1];
      handler(config, req, res);
    }
  };

  logger.debug(`[Router] ${fieldName} query available at ${method} ${path}`);

  return {
    document: operation,
    path,
    method: method.toUpperCase() as Method,
    route,
  };
}

function createMutationRoute({
  sofa,
  fieldName,
}: {
  sofa: Sofa;
  fieldName: string;
}): RouteInfo {
  logger.debug(`[Router] Creating ${fieldName} mutation`);

  const mutationType = sofa.schema.getMutationType()!;
  const operationNode = buildOperationNodeForField({
    kind: 'mutation',
    schema: sofa.schema,
    field: fieldName,
    models: sofa.models,
    ignore: sofa.ignore,
    circularReferenceDepth: sofa.depthLimit,
  });
  const operation: DocumentNode = {
    kind: Kind.DOCUMENT,
    definitions: [operationNode],
  };
  const info = getOperationInfo(operation)!;
  const path = getPath(fieldName);

  const method = produceMethod({
    typeName: mutationType.name,
    fieldName,
    methodMap: sofa.method,
    defaultValue: 'POST',
  });

  const route: Route = async (routeUrl, req, res) => {
    if (req.method !== method.toUpperCase() || routeUrl !== path) {
      return;
    }
    const config = {
      additionalVariables: {},
      info,
      fieldName,
      sofa,
      operation,
    };
    handler(config, req, res);
  };

  logger.debug(`[Router] ${fieldName} mutation available at ${method} ${path}`);

  return {
    document: operation,
    path,
    method: method.toUpperCase() as Method,
    route,
  };
}

async function handler(
  config: {
    additionalVariables: { [key: string]: string };
    sofa: Sofa;
    info: OperationInfo;
    operation: DocumentNode;
    fieldName: string;
  },
  req: Request,
  res: http.ServerResponse
) {
  const { additionalVariables, sofa, operation, fieldName } = config;
  const info = config.info!;
  const variableValues = info.variables.reduce((variables, variable) => {
    const name = variable.variable.name.value;
    const value = parseVariable({
      value: pickParam(req, additionalVariables, name),
      variable,
      schema: sofa.schema,
    });

    if (typeof value === 'undefined') {
      return variables;
    }

    return {
      ...variables,
      [name]: value,
    };
  }, {});

  const contextValue = isContextFn(sofa.context)
    ? await sofa.context({ req, res })
    : sofa.context;

  const result = await sofa.execute({
    schema: sofa.schema,
    source: print(operation),
    contextValue,
    variableValues,
    operationName: info.operation.name && info.operation.name.value,
  });

  if (result.errors) {
    const defaultErrorHandler: ErrorHandler = (res, errors) => {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(errors[0]));
    };
    const errorHandler: ErrorHandler = sofa.errorHandler || defaultErrorHandler;
    errorHandler(res, result.errors);
    return;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(result.data && result.data[fieldName]));
}

function getPath(fieldName: string, hasId = false) {
  return `/${convertName(fieldName)}${hasId ? '/:id' : ''}`;
}

function pickParam(
  req: Request,
  additionalVariables: { [key: string]: string },
  name: string
) {
  if (additionalVariables.hasOwnProperty(name)) {
    return additionalVariables[name];
  }
  if (req.query && req.query.hasOwnProperty(name)) {
    return req.query[name];
  }
  if (req.body && req.body.hasOwnProperty(name)) {
    return req.body[name];
  }
}

function produceMethod({
  typeName,
  fieldName,
  methodMap,
  defaultValue,
}: {
  typeName: string;
  fieldName: string;
  methodMap?: MethodMap;
  defaultValue: Method;
}): Method {
  const path = `${typeName}.${fieldName}`;

  if (methodMap && methodMap[path]) {
    return methodMap[path];
  }

  return defaultValue;
}
