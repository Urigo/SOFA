import { Router } from 'express';

import { createRouter } from './express';
import { SofaConfig, createSofa } from './sofa';

export { OpenAPI } from './open-api';

function useSofa(config: SofaConfig): Router {
  return createRouter(createSofa(config));
}

export { useSofa, createSofa };
export default useSofa;
