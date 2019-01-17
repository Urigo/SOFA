import * as express from 'express';
import { DocumentNode, print, isObjectType, isNonNullType } from 'graphql';

import { buildOperation } from './operation';
import { getOperationInfo, OperationInfo } from './ast';
import { Sofa } from './sofa';
import { ContextFn, RouteInfo } from './types';
import { convertName } from './common';
import { parseVariable } from './parse';

export type ErrorHandler = (res: express.Response, error: any) => void;

export function createRouter(sofa: Sofa): express.Router {
  const router = express.Router();

  const queryType = sofa.schema.getQueryType();
  const mutationType = sofa.schema.getMutationType();

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
  const queryType = sofa.schema.getQueryType()!;
  const operation = buildOperation({
    kind: 'query',
    schema: sofa.schema,
    field: fieldName,
    models: sofa.models,
    ignore: sofa.ignore,
  });
  const info = getOperationInfo(operation)!;
  const fieldType = queryType.getFields()[fieldName].type;
  const isSingle =
    isObjectType(fieldType) ||
    (isNonNullType(fieldType) && isObjectType(fieldType.ofType));
  const path = getPath(fieldName, isSingle);

  router.get(path, useHandler({ info, fieldName, sofa, operation }));

  return {
    document: operation,
    path,
    method: 'GET',
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
  const operation = buildOperation({
    kind: 'mutation',
    schema: sofa.schema,
    field: fieldName,
    models: sofa.models,
    ignore: sofa.ignore,
  });
  const info = getOperationInfo(operation)!;
  const path = getPath(fieldName);

  router.post(path, useHandler({ info, fieldName, sofa, operation }));

  return {
    document: operation,
    path,
    method: 'POST',
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

    const result = await sofa.execute({
      schema: sofa.schema,
      source: print(operation),
      contextValue: isContextFn(sofa.context)
        ? sofa.context({ req })
        : sofa.context,
      variableValues,
      operationName: info.operation.name && info.operation.name.value,
    });

    // TODO: add error handling for result.errors
    if (result.errors) {
      throw new Error(result.errors.toString());
    }

    res.json(result.data && result.data[fieldName]);
  });
}

function isContextFn(context: any): context is ContextFn {
  return typeof context === 'function';
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
