import { createRouter } from './router';
import type { SofaConfig } from './sofa';
import { createSofa } from './sofa';
import { createServerAdapter } from '@whatwg-node/server';

export { OpenAPI } from './open-api';

export function useSofa(config: SofaConfig) {
  return createServerAdapter(
    createRouter(
      createSofa(config)
    )
  );
}
