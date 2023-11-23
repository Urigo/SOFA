"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePathParamForOpenAPI = exports.mapToRef = exports.mapToPrimitive = void 0;
function mapToPrimitive(type) {
    const formatMap = {
        Int: {
            type: 'integer',
            format: 'int32',
        },
        Float: {
            type: 'number',
            format: 'float',
        },
        String: {
            type: 'string',
        },
        Boolean: {
            type: 'boolean',
        },
        ID: {
            type: 'string',
        },
    };
    if (formatMap[type]) {
        return formatMap[type];
    }
}
exports.mapToPrimitive = mapToPrimitive;
function mapToRef(type) {
    return `#/components/schemas/${type}`;
}
exports.mapToRef = mapToRef;
function normalizePathParamForOpenAPI(path) {
    const pathParts = path.split('/');
    const normalizedPathParts = pathParts.map((part) => {
        if (part.startsWith(':')) {
            return `{${part.slice(1)}}`;
        }
        return part;
    });
    return normalizedPathParts.join('/');
}
exports.normalizePathParamForOpenAPI = normalizePathParamForOpenAPI;
