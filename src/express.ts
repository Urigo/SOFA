import * as express from 'express';
import { DocumentNode, print, isObjectType, isNonNullType } from 'graphql';

import { buildOperation } from './operation';
import { getOperationInfo } from './ast';
import { Sofa } from './sofa';
import { ContextFn } from './types';
import { convertName } from './common';

export type ErrorHandler = (res: express.Response, error: any) => void;
export interface RouteInfo {
  document: DocumentNode;
  path: string;
  method: string;
}
export type OnRoute = (info: RouteInfo) => void;

export function createRouter(sofa: Sofa): express.Router {
  const router = express.Router();

  const queryType = sofa.schema.getQueryType()!;

  Object.keys(queryType.getFields()).forEach(fieldName => {
    createQueryRoute({ sofa, router, fieldName });
  });

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
}) {
  const queryType = sofa.schema.getQueryType()!;
  const query = buildOperation({
    kind: 'query',
    schema: sofa.schema,
    field: fieldName,
    models: sofa.models,
    ignore: sofa.ignore,
  });
  const info = getOperationInfo(query)!;
  const fieldType = queryType.getFields()[fieldName].type;
  const isSingle =
    isObjectType(fieldType) ||
    (isNonNullType(fieldType) && isObjectType(fieldType.ofType));
  const path = getPath(fieldName, isSingle);

  console.log(path);

  router.get(path, async (req: express.Request, res: express.Response) => {
    const variableValues = info.variables.reduce((variables, name) => {
      return {
        ...variables,
        [name]: pickParam(req, name),
      };
    }, {});

    try {
      const result = await sofa.execute({
        schema: sofa.schema,
        source: print(query),
        contextValue: isContextFn(sofa.context)
          ? sofa.context({ req })
          : sofa.context,
        variableValues,
        operationName: info.operation.name && info.operation.name.value,
      });

      // TODO: add error handling for result.errors

      res.json(result.data && result.data[fieldName]);
    } catch (e) {
      // TODO: add error handling
      res.sendStatus(500);
    }
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
