import { isObjectType, isInputObjectType, isIntrospectionType, } from 'graphql';
import { buildSchemaObjectFromType } from './types';
import { buildPathFromOperation } from './operations';
import { normalizePathParamForOpenAPI } from './utils';
export function OpenAPI({ schema, info, servers, components, security, tags, customScalars = {}, }) {
    const types = schema.getTypeMap();
    const swagger = {
        openapi: '3.0.0',
        info,
        servers,
        tags: [],
        paths: {},
        components: {
            schemas: {},
        },
    };
    for (const typeName in types) {
        const type = types[typeName];
        if ((isObjectType(type) || isInputObjectType(type)) &&
            !isIntrospectionType(type)) {
            swagger.components.schemas[typeName] = buildSchemaObjectFromType(type, {
                customScalars,
            });
        }
    }
    if (components) {
        swagger.components = { ...components, ...swagger.components };
    }
    if (security) {
        swagger.security = security;
    }
    if (tags) {
        swagger.tags = tags;
    }
    return {
        addRoute(info, config) {
            const basePath = config?.basePath || '';
            const path = basePath +
                normalizePathParamForOpenAPI(info.path);
            if (!swagger.paths[path]) {
                swagger.paths[path] = {};
            }
            const pathsObj = swagger.paths[path];
            pathsObj[info.method.toLowerCase()] = buildPathFromOperation({
                url: path,
                operation: info.document,
                schema,
                useRequestBody: ['POST', 'PUT', 'PATCH'].includes(info.method),
                tags: info.tags || [],
                description: info.description || '',
                customScalars,
            });
        },
        get() {
            return swagger;
        },
    };
}
