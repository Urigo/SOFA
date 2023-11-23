import { createRouter } from './router';
import { createSofa } from './sofa';
export { OpenAPI } from './open-api';
export function useSofa(config) {
    return createRouter(createSofa(config));
}
