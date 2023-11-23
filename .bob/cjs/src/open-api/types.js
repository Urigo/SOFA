"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveFieldType = exports.buildSchemaObjectFromType = void 0;
const graphql_1 = require("graphql");
const utils_1 = require("./utils");
function buildSchemaObjectFromType(type, opts) {
    const required = [];
    const properties = {};
    const fields = type.getFields();
    for (const fieldName in fields) {
        const field = fields[fieldName];
        if ((0, graphql_1.isNonNullType)(field.type)) {
            required.push(field.name);
        }
        properties[fieldName] = resolveField(field, opts);
        if (field.description) {
            properties[fieldName].description = field.description;
        }
    }
    return {
        type: 'object',
        ...(required.length ? { required } : {}),
        properties,
        ...(type.description ? { description: type.description } : {}),
    };
}
exports.buildSchemaObjectFromType = buildSchemaObjectFromType;
function resolveField(field, opts) {
    return resolveFieldType(field.type, opts);
}
// array -> [type]
// type -> $ref
// scalar -> swagger primitive
function resolveFieldType(type, opts) {
    if ((0, graphql_1.isNonNullType)(type)) {
        return resolveFieldType(type.ofType, opts);
    }
    if ((0, graphql_1.isListType)(type)) {
        return {
            type: 'array',
            items: resolveFieldType(type.ofType, opts),
        };
    }
    if ((0, graphql_1.isObjectType)(type)) {
        return {
            $ref: (0, utils_1.mapToRef)(type.name),
        };
    }
    if ((0, graphql_1.isScalarType)(type)) {
        const resolved = (0, utils_1.mapToPrimitive)(type.name) ||
            opts.customScalars[type.name] ||
            type.extensions?.jsonSchema || {
            type: 'object',
        };
        return { ...resolved };
    }
    if ((0, graphql_1.isEnumType)(type)) {
        return {
            type: 'string',
            enum: type.getValues().map((value) => value.name),
        };
    }
    return {
        type: 'object',
    };
}
exports.resolveFieldType = resolveFieldType;
