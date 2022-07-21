import { createRouter } from './router';
import type { SofaConfig } from './sofa';
import { createSofa } from './sofa';
import { createServerAdapter } from '@whatwg-node/server';

export { OpenAPI } from './open-api';

export function useSofa(config: SofaConfig) {
  const sofaRouter = createSofaRouter(config);
  return createServerAdapter(sofaRouter);
}

export function createSofaRouter(config: SofaConfig) {
  const sofa = createSofa(config);
  const router = createRouter(sofa);
  return router;
}
