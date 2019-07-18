import * as express from 'express';
import { DocumentNode, print, isObjectType, isNonNullType } from 'graphql';

import { buildOperation } from './operation';
import { getOperationInfo, OperationInfo } from './ast';
import { Sofa, isContextFn } from './sofa';
import { RouteInfo, Method, MethodMap } from './types';
import { convertName } from './common';
import { parseVariable } from './parse';
import { StartSubscriptionEvent, SubscriptionManager } from './subscriptions';
import { logger } from './logger';

export type ErrorHandler = (
  res: express.Response,
  errors: ReadonlyArray<any>
) => void;

export type ExpressMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

export function createRouter(sofa: Sofa): express.Router {
  logger.debug('[Sofa] Creating router');

  const router = express.Router();

  const queryType = sofa.schema.getQueryType();
  const mutationType = sofa.schema.getMutationType();
  const subscriptionManager = new SubscriptionManager(sofa);

  if (queryType) {
    Object.keys(queryType.getFields()).forEach(fieldName => {
      const route = createQueryRoute({ sofa, router, fieldName });

      if (sofa.onRoute) {
        sofa.onRoute(route);
      }
    });
  }

  if (mutationType) {
    Object.keys(mutationType.getFields()).forEach(fieldName => {
      const route = createMutationRoute({ sofa, router, fieldName });

      if (sofa.onRoute) {
        sofa.onRoute(route);
      }
    });
  }

  router.post(
    '/webhook',
    useAsync(async (req, res) => {
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

        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.json(result);
      } catch (e) {
        console.log(e);
        res.statusCode = 500;
        res.statusMessage = 'Subscription failed';
        res.json(e);
      }
    })
  );

  router.post(
    '/webhook/:id',
    useAsync(async (req, res) => {
      const id: string = req.params.id;
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

        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.json(result);
      } catch (e) {
        console.log(e);
        res.statusCode = 500;
        res.statusMessage = 'Subscription failed to update';
        res.json(e);
      }
    })
  );

  router.delete(
    '/webhook/:id',
    useAsync(async (req, res) => {
      const id: string = req.params.id;

      try {
        const result = await subscriptionManager.stop(id);

        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.json(result);
      } catch (e) {
        console.log(e);
        res.statusCode = 500;
        res.statusMessage = 'Subscription failed to stop';
        res.json(e);
      }
    })
  );

  return router;
}

function createQueryRoute({
  sofa,
  router,
  fieldName,
}: {
  sofa: Sofa;
  router: express.Router;
  fieldName: string;
}): RouteInfo {
  logger.debug(`[Router] Creating ${fieldName} query`);

  const queryType = sofa.schema.getQueryType()!;
  const operation = buildOperation({
    kind: 'query',
    schema: sofa.schema,
    field: fieldName,
    models: sofa.models,
    ignore: sofa.ignore,
  });
  const info = getOperationInfo(operation)!;
  const field = queryType.getFields()[fieldName];
  const fieldType = field.type;
  const isSingle =
    isObjectType(fieldType) ||
    (isNonNullType(fieldType) && isObjectType(fieldType.ofType));
  const hasIdArgument = field.args.some(arg => arg.name === 'id');
  const path = getPath(fieldName, isSingle && hasIdArgument);

  const method = produceMethod({
    typeName: queryType.name,
    fieldName,
    methodMap: sofa.method,
    defaultValue: 'GET',
  });

  router[method.toLocaleLowerCase() as ExpressMethod](
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
  router: express.Router;
  fieldName: string;
}): RouteInfo {
  logger.debug(`[Router] Creating ${fieldName} mutation`);

  const mutationType = sofa.schema.getMutationType()!;
  const operation = buildOperation({
    kind: 'mutation',
    schema: sofa.schema,
    field: fieldName,
    models: sofa.models,
    ignore: sofa.ignore,
  });
  const info = getOperationInfo(operation)!;
  const path = getPath(fieldName);

  const method = produceMethod({
    typeName: mutationType.name,
    fieldName,
    methodMap: sofa.method,
    defaultValue: 'POST',
  });

  router[method.toLowerCase() as ExpressMethod](
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

  return useAsync(async (req: express.Request, res: express.Response) => {
    const variableValues = info.variables.reduce((variables, variable) => {
      const name = variable.variable.name.value;
      const value = parseVariable({
        value: pickParam(req, name),
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
        res.status(500);
        res.json(errors[0]);
      };
      const errorHandler: ErrorHandler =
        sofa.errorHandler || defaultErrorHandler;
      errorHandler(res, result.errors);
      return;
    }

    res.json(result.data && result.data[fieldName]);
  });
}

function getPath(fieldName: string, hasId = false) {
  return `/${convertName(fieldName)}${hasId ? '/:id' : ''}`;
}

function pickParam(req: express.Request, name: string) {
  if (req.params && req.params[name]) {
    return req.params[name];
  }

  if (req.query && req.query[name]) {
    return req.query[name];
  }

  if (req.body && req.body[name]) {
    return req.body[name];
  }
}

function useAsync<T = any>(
  handler: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => Promise<T>
) {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    Promise.resolve(handler(req, res, next)).catch(e => {
      console.log(e);
      next(e);
    });
  };
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
