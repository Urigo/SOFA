import * as http from 'http';
import { createRouter } from './express';
import type { ContextValue } from './types';
import type { SofaConfig } from './sofa';
import { createSofa } from './sofa';

export { OpenAPI } from './open-api';

type Request = http.IncomingMessage & {
  method: string;
  url: string;
  originalUrl?: string;
  body?: any;
};

type NextFunction = (err?: any) => void;

type Middleware = (
  req: Request,
  res: http.ServerResponse,
  next: NextFunction
) => unknown;

export type ContextFn = (init: { req: any; res: any }) => ContextValue;

export function isContextFn(context: any): context is ContextFn {
  return typeof context === 'function';
}

interface SofaMiddlewareConfig extends SofaConfig {
  context?: ContextValue | ContextFn;
}

export function useSofa({
  context,
  ...config
}: SofaMiddlewareConfig): Middleware {
  const route = createSofaRouter(config);
  return async (req, res, next) => {
    try {
      let contextValue: ContextValue = { req };
      if (context) {
        if (typeof context === 'function') {
          contextValue = await context({ req, res });
        } else {
          contextValue = context;
        }
      }
      const response = await route({
        method: req.method,
        url: req.originalUrl ?? req.url,
        body: req.body,
        contextValue,
      });
      if (response == null) {
        next();
      } else {
        const headers = {
          'Content-Type': 'application/json',
        };
        if (response.statusMessage) {
          res.writeHead(response.status, response.statusMessage, headers);
        } else {
          res.writeHead(response.status, headers);
        }
        if (response.type === 'result') {
          res.end(JSON.stringify(response.body));
        }
        if (response.type === 'error') {
          res.end(JSON.stringify(response.error));
        }
      }
    } catch (error) {
      next(error);
    }
  };
}

export function createSofaRouter(config: SofaConfig) {
  const sofa = createSofa(config);
  const router = createRouter(sofa);
  return router;
}
