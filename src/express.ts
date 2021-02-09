import * as http from 'http';
import {
  DocumentNode,
  print,
  isObjectType,
  isNonNullType,
  Kind,
} from 'graphql';
import * as Trouter from 'trouter';
import { buildOperationNodeForField } from '@graphql-tools/utils';
import { getOperationInfo, OperationInfo } from './ast';
import { Sofa, isContextFn } from './sofa';
import { RouteInfo, Method, MethodMap } from './types';
import { convertName } from './common';
import { parseVariable } from './parse';
import { StartSubscriptionEvent, SubscriptionManager } from './subscriptions';
import { logger } from './logger';

export type ErrorHandler = (
  res: http.ServerResponse,
  errors: ReadonlyArray<any>
) => void;

type Request = http.IncomingMessage & {
  method: Trouter.HTTPMethod;
  url: string;
  originalUrl?: string;
  body?: any;
  query?: any;
};

type Params = { [key: string]: string };

type TrouterMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

type TrouterMiddleware = (
  req: Request,
  res: http.ServerResponse,
  params: Params
) => unknown;

type NextFunction = (err?: any) => void;

export type Middleware = (
  req: Request,
  res: http.ServerResponse,
  next: NextFunction
) => unknown;

export function createRouter(sofa: Sofa): Middleware {
  logger.debug('[Sofa] Creating router');

  const router = new Trouter<TrouterMiddleware>();

  const queryType = sofa.schema.getQueryType();
  const mutationType = sofa.schema.getMutationType();
  const subscriptionManager = new SubscriptionManager(sofa);

  if (queryType) {
    Object.keys(queryType.getFields()).forEach((fieldName) => {
      const route = createQueryRoute({ sofa, router, fieldName });

      if (sofa.onRoute) {
        sofa.onRoute(route);
      }
    });
  }

  if (mutationType) {
    Object.keys(mutationType.getFields()).forEach((fieldName) => {
      const route = createMutationRoute({ sofa, router, fieldName });

      if (sofa.onRoute) {
        sofa.onRoute(route);
      }
    });
  }

  router.post('/webhook', async (req, res) => {
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
  });

  router.post('/webhook/:id', async (req, res, params) => {
    const id: string = params.id;
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
  });

  router.delete('/webhook/:id', async (_, res, params) => {
    const id: string = params.id;

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
  });

  return async (req, res, next) => {
    const url = req.originalUrl ?? req.url;
    if (!url.startsWith(sofa.basePath)) {
      next();
      return;
    }
    const slicedUrl = url.slice(sofa.basePath.length);
    const obj = router.find(req.method, slicedUrl);
    try {
      for (const handler of obj.handlers) {
        await handler(req, res, obj.params);
      }
      if (!res.headersSent) {
        next();
      }
    } catch (error) {
      next(error);
    }
  };
}

function createQueryRoute({
  sofa,
  router,
  fieldName,
}: {
  sofa: Sofa;
  router: Trouter;
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
  const path = getPath(fieldName, isSingle && hasIdArgument);

  const method = produceMethod({
    typeName: queryType.name,
    fieldName,
    methodMap: sofa.method,
    defaultValue: 'GET',
  });

  router[method.toLocaleLowerCase() as TrouterMethod](
    path,
    useHandler({ info, fieldName, sofa, operation })
  );

  logger.debug(`[Router] ${fieldName} query available at ${method} ${path}`);

  return {
    document: operation,
    path,
    method: method.toUpperCase() as Method,
  };
}

function createMutationRoute({
  sofa,
  router,
  fieldName,
}: {
  sofa: Sofa;
  router: Trouter;
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

  router[method.toLowerCase() as TrouterMethod](
    path,
    useHandler({ info, fieldName, sofa, operation })
  );

  logger.debug(`[Router] ${fieldName} mutation available at ${method} ${path}`);

  return {
    document: operation,
    path,
    method: method.toUpperCase() as Method,
  };
}

function useHandler(config: {
  sofa: Sofa;
  info: OperationInfo;
  operation: DocumentNode;
  fieldName: string;
}) {
  const { sofa, operation, fieldName } = config;
  const info = config.info!;

  return async (req: Request, res: http.ServerResponse, params: Params) => {
    const variableValues = info.variables.reduce((variables, variable) => {
      const name = variable.variable.name.value;
      const value = parseVariable({
        value: pickParam(req, params, name),
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
      const errorHandler: ErrorHandler =
        sofa.errorHandler || defaultErrorHandler;
      errorHandler(res, result.errors);
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result.data && result.data[fieldName]));
  };
}

function getPath(fieldName: string, hasId = false) {
  return `/${convertName(fieldName)}${hasId ? '/:id' : ''}`;
}

function pickParam(req: Request, params: Params, name: string) {
  if (params && params.hasOwnProperty(name)) {
    return params[name];
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
