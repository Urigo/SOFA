"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAPI = void 0;
const graphql_1 = require("graphql");
const types_1 = require("./types");
const operations_1 = require("./operations");
const utils_1 = require("./utils");
function OpenAPI({ schema, info, servers, components, security, tags, customScalars = {}, }) {
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
        if (((0, graphql_1.isObjectType)(type) || (0, graphql_1.isInputObjectType)(type)) &&
            !(0, graphql_1.isIntrospectionType)(type)) {
            swagger.components.schemas[typeName] = (0, types_1.buildSchemaObjectFromType)(type, {
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
                (0, utils_1.normalizePathParamForOpenAPI)(info.path);
            if (!swagger.paths[path]) {
                swagger.paths[path] = {};
            }
            const pathsObj = swagger.paths[path];
            pathsObj[info.method.toLowerCase()] = (0, operations_1.buildPathFromOperation)({
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
exports.OpenAPI = OpenAPI;
