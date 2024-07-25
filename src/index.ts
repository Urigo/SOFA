import { createRouter } from './router.js';
import type { SofaConfig } from './sofa.js';
import { createSofa } from './sofa.js';

export { OpenAPI } from './open-api';

export function useSofa(config: SofaConfig) {
  return createRouter(
    createSofa(config)
  );
}
