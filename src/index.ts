import * as http from 'http';
import { createRouter } from './express';
import { SofaConfig, createSofa, isContextFn } from './sofa';

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

function useSofa(config: SofaConfig): Middleware {
  const sofa = createSofa(config);
  const route = createRouter(sofa);
  return async (req, res, next) => {
    try {
      const contextValue = isContextFn(sofa.context)
        ? await sofa.context({ req, res })
        : sofa.context;
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

export { useSofa, createSofa };
export default useSofa;
