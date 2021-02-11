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
import { Sofa } from './sofa';
import { RouteInfo, Method, MethodMap, ContextValue } from './types';
import { convertName } from './common';
import { parseVariable } from './parse';
import { StartSubscriptionEvent, SubscriptionManager } from './subscriptions';
import { logger } from './logger';

export type ErrorHandler = (errors: ReadonlyArray<any>) => RouterError;

type Params = { [key: string]: string };

type TrouterMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

type RouterRequest = {
  method: string;
  url: string;
  body: any;
  contextValue: ContextValue;
};
type RouterResult = {
  type: 'result';
  status: number;
  statusMessage?: string;
  body: any;
};
type RouterError = {
  type: 'error';
  status: number;
  statusMessage?: string;
  error: any;
};
type RouterResponse = RouterResult | RouterError;
type Router = (request: RouterRequest) => Promise<null | RouterResponse>;

type RouteRequest = {
  url: string;
  body: any;
  params: Params;
  contextValue: ContextValue;
};
type RouteMiddleware = (request: RouteRequest) => Promise<RouterResponse>;

export function createRouter(sofa: Sofa): Router {
  logger.debug('[Sofa] Creating router');

  const router = new Trouter<RouteMiddleware>();

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

  router.post('/webhook', async ({ body, contextValue }) => {
    const { subscription, variables, url }: StartSubscriptionEvent = body;
    try {
      const result = await subscriptionManager.start(
        {
          subscription,
          variables,
          url,
        },
        contextValue
      );
      return {
        type: 'result',
        status: 200,
        statusMessage: 'OK',
        body: result,
      };
    } catch (error) {
      return {
        type: 'error',
        status: 500,
        statusMessage: 'Subscription failed',
        error,
      };
    }
  });

  router.post('/webhook/:id', async ({ body, params, contextValue }) => {
    const id: string = params.id;
    const variables: any = body.variables;
    try {
      const result = await subscriptionManager.update(
        {
          id,
          variables,
        },
        contextValue
      );
      return {
        type: 'result',
        status: 200,
        statusMessage: 'OK',
        body: result,
      };
    } catch (error) {
      return {
        type: 'error',
        status: 500,
        statusMessage: 'Subscription failed to update',
        error,
      };
    }
  });

  router.delete('/webhook/:id', async ({ params }) => {
    const id: string = params.id;
    try {
      const result = await subscriptionManager.stop(id);
      return {
        type: 'result',
        status: 200,
        statusMessage: 'OK',
        body: result,
      };
    } catch (error) {
      return {
        type: 'error',
        status: 500,
        statusMessage: 'Subscription failed to stop',
        error,
      };
    }
  });

  return async ({ method, url, body, contextValue }) => {
    if (!url.startsWith(sofa.basePath)) {
      return null;
    }
    // trim base path and search
    const [slicedUrl] = url.slice(sofa.basePath.length).split('?');
    const trouterMethod = method.toUpperCase() as Trouter.HTTPMethod;
    const obj = router.find(trouterMethod, slicedUrl);
    for (const handler of obj.handlers) {
      return await handler({
        url,
        body,
        params: obj.params,
        contextValue,
      });
    }
    return null;
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
}): RouteMiddleware {
  const { sofa, operation, fieldName } = config;
  const info = config.info!;

  return async ({ url, body, params, contextValue }) => {
    const variableValues = info.variables.reduce((variables, variable) => {
      const name = variable.variable.name.value;
      const value = parseVariable({
        value: pickParam({ url, body, params, name }),
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

    const result = await sofa.execute({
      schema: sofa.schema,
      source: print(operation),
      contextValue,
      variableValues,
      operationName: info.operation.name && info.operation.name.value,
    });

    if (result.errors) {
      const defaultErrorHandler: ErrorHandler = (errors) => {
        return {
          type: 'error',
          status: 500,
          error: errors[0],
        };
      };
      const errorHandler: ErrorHandler =
        sofa.errorHandler || defaultErrorHandler;
      return errorHandler(result.errors);
    }

    return {
      type: 'result',
      status: 200,
      body: result.data && result.data[fieldName],
    };
  };
}

function getPath(fieldName: string, hasId = false) {
  return `/${convertName(fieldName)}${hasId ? '/:id' : ''}`;
}

function pickParam({
  name,
  url,
  params,
  body,
}: {
  name: string;
  url: string;
  params: Params;
  body: any;
}) {
  if (params && params.hasOwnProperty(name)) {
    return params[name];
  }
  const searchParams = new URLSearchParams(url.split('?')[1]);
  if (searchParams.has(name)) {
    return searchParams.get(name);
  }
  if (body && body.hasOwnProperty(name)) {
    return body[name];
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
