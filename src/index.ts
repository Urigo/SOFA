import { createRouter } from './router';
import type { SofaConfig } from './sofa';
import { createSofa } from './sofa';

export { OpenAPI } from './open-api';

export function useSofa(config: SofaConfig) {
  return createRouter(
    createSofa(config)
  );
}
