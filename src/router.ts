import {
  DocumentNode,
  isObjectType,
  isNonNullType,
  Kind,
  OperationTypeNode,
} from 'graphql';
import { Request as IttyRequest, RouteHandler, Router } from 'itty-router';
import { buildOperationNodeForField } from '@graphql-tools/utils';
import { getOperationInfo, OperationInfo } from './ast';
import type { Sofa, Route } from './sofa';
import type { RouteInfo, Method, DefaultSofaServerContext } from './types';
import { convertName } from './common';
import { parseVariable } from './parse';
import { StartSubscriptionEvent, SubscriptionManager } from './subscriptions';
import { logger } from './logger';
import { Response } from '@whatwg-node/fetch';
import { DefaultServerAdapterContext } from '@whatwg-node/server';

export type ErrorHandler = (errors: ReadonlyArray<any>) => Response;

declare module 'graphql' {
  interface GraphQLHTTPErrorExtensions {
    status?: number
    headers?: Record<string, string>
  }
  interface GraphQLErrorExtensions {
    http?: GraphQLHTTPErrorExtensions
  }
}

type SofaRequest = IttyRequest & Request;

export function createRouter(sofa: Sofa) {
  logger.debug('[Sofa] Creating router');

  const router = Router<SofaRequest>({
    base: sofa.basePath,
  });

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

  router.post(
    '/webhook',
    async (
      request: SofaRequest,
      serverContext: DefaultServerAdapterContext
    ) => {
      const { subscription, variables, url }: StartSubscriptionEvent =
        await request.json();
      try {
        const result = await subscriptionManager.start(
          {
            subscription,
            variables,
            url,
          },
          {
            ...serverContext,
            request,
          }
        );
        return new Response(JSON.stringify(result), {
          status: 200,
          statusText: 'OK',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        return new Response(JSON.stringify(error), {
          status: 500,
          statusText: 'Subscription failed',
        });
      }
    }
  );

  router.post(
    '/webhook/:id',
    async (
      request: SofaRequest,
      serverContext: DefaultServerAdapterContext
    ) => {
      const id = request.params?.id!;
      const body = await request.json();
      const variables: any = body.variables;
      try {
        const sofaServerContext = {
          ...serverContext,
          request,
        };
        const contextValue = await sofa.contextFactory(sofaServerContext);
        const result = await subscriptionManager.update(
          {
            id,
            variables,
          },
          contextValue
        );
        return new Response(JSON.stringify(result), {
          status: 200,
          statusText: 'OK',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        return new Response(JSON.stringify(error), {
          status: 500,
          statusText: 'Subscription failed to update',
        });
      }
    }
  );

  router.delete('/webhook/:id', async (request) => {
    const id = request.params?.id!;
    try {
      const result = await subscriptionManager.stop(id);
      return new Response(JSON.stringify(result), {
        status: 200,
        statusText: 'OK',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      return new Response(JSON.stringify(error), {
        status: 500,
        statusText: 'Subscription failed to stop',
      });
    }
  });

  return router;
}

function createQueryRoute({
  sofa,
  router,
  fieldName,
}: {
  sofa: Sofa;
  router: Router<SofaRequest>;
  fieldName: string;
}): RouteInfo {
  logger.debug(`[Router] Creating ${fieldName} query`);

  const queryType = sofa.schema.getQueryType()!;
  const operationNode = buildOperationNodeForField({
    kind: 'query' as OperationTypeNode,
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

  const graphqlPath = `${queryType.name}.${fieldName}`;
  const routeConfig = sofa.routes?.[graphqlPath];
  const route = {
    method: routeConfig?.method ?? 'GET',
    path: routeConfig?.path ?? getPath(fieldName, isSingle && hasIdArgument),
    responseStatus: routeConfig?.responseStatus ?? 200,
  };

  router[route.method](
    route.path,
    useHandler({ info, route, fieldName, sofa, operation })
  );

  logger.debug(
    `[Router] ${fieldName} query available at ${route.method} ${route.path}`
  );

  return {
    document: operation,
    path: route.path,
    method: route.method.toUpperCase() as Method,
    tags: routeConfig?.tags ?? [],
    description: routeConfig?.description ?? field.description ?? '',
  };
}

function createMutationRoute({
  sofa,
  router,
  fieldName,
}: {
  sofa: Sofa;
  router: Router<SofaRequest>;
  fieldName: string;
}): RouteInfo {
  logger.debug(`[Router] Creating ${fieldName} mutation`);

  const mutationType = sofa.schema.getMutationType()!;
  const field = mutationType.getFields()[fieldName];
  const operationNode = buildOperationNodeForField({
    kind: 'mutation' as OperationTypeNode,
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

  const graphqlPath = `${mutationType.name}.${fieldName}`;
  const routeConfig = sofa.routes?.[graphqlPath];
  const route = {
    method: routeConfig?.method ?? 'POST',
    path: routeConfig?.path ?? getPath(fieldName),
    responseStatus: routeConfig?.responseStatus ?? 200,
  };
  const { method, path } = route;

  router[method](path, useHandler({ info, route, fieldName, sofa, operation }));

  logger.debug(`[Router] ${fieldName} mutation available at ${method} ${path}`);

  return {
    document: operation,
    path,
    method,
    tags: routeConfig?.tags || [],
    description: routeConfig?.description ?? field.description ?? '',
  };
}

function useHandler(config: {
  sofa: Sofa;
  info: OperationInfo;
  route: Route;
  operation: DocumentNode;
  fieldName: string;
}): RouteHandler<Request> {
  const { sofa, operation, fieldName } = config;
  const info = config.info!;

  return async (
    request: SofaRequest,
    serverContext: DefaultServerAdapterContext
  ) => {
    let body = {};
    if (request.body != null) {
      const strBody = await request.text();
      if (strBody) {
        body = JSON.parse(strBody);
      }
    }
    const variableValues = info.variables.reduce((variables, variable) => {
      const name = variable.variable.name.value;
      const value = parseVariable({
        value: pickParam({
          url: request.url,
          body,
          params: request.params || {},
          name,
        }),
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

    const sofaServerContext: DefaultSofaServerContext = {
      ...serverContext,
      request,
    };
    const contextValue = await sofa.contextFactory(sofaServerContext);
    const result = await sofa.execute({
      schema: sofa.schema,
      document: operation,
      contextValue,
      variableValues,
      operationName: info.operation.name && info.operation.name.value,
    });

    if (result.errors) {
      const defaultErrorHandler: ErrorHandler = (errors) => {
        let status: number | undefined
        const headers: Record<string, string> = {
          'Content-Type': 'application/json; charset=utf-8',
        }

        for (const error of errors) {
          if (typeof error === 'object' && error != null && error.extensions?.http) {
            if (
              error.extensions.http.status &&
              (!status || error.extensions.http.status > status)
            ) {
              status = error.extensions.http.status
            }
            if (error.extensions.http.headers) {
              Object.assign(headers, error.extensions.http.headers)
            }
          }
        }

        if (!status) {
          status = 500
        }
        
        if (errors.length === 1) {
          return new Response(JSON.stringify(errors[0]), {
            status,
            headers,
          })
        }

        return new Response(JSON.stringify({ errors }), {
          status,
          headers,
        })
      };
      const errorHandler: ErrorHandler =
        sofa.errorHandler || defaultErrorHandler;
      return errorHandler(result.errors);
    }

    return new Response(JSON.stringify(result.data?.[fieldName]), {
      status: config.route.responseStatus,
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
  params: any;
  body: any;
}) {
  if (name in params) {
    return params[name];
  }
  const searchParams = new URLSearchParams(url.split('?')[1]);
  if (searchParams.has(name)) {
    const values = searchParams.getAll(name);
    return values.length === 1 ? values[0] : values;
  }
  if (body && body.hasOwnProperty(name)) {
    return body[name];
  }
}
