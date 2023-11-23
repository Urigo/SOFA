"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseVariable = void 0;
const graphql_1 = require("graphql");
const common_js_1 = require("./common.js");
function parseVariable({ value, variable, schema, }) {
    if ((0, common_js_1.isNil)(value)) {
        return;
    }
    return resolveVariable({
        value,
        type: variable.type,
        schema,
    });
}
exports.parseVariable = parseVariable;
function resolveVariable({ value, type, schema, }) {
    if (type.kind === graphql_1.Kind.NAMED_TYPE) {
        const namedType = schema.getType(type.name.value);
        if ((0, graphql_1.isScalarType)(namedType)) {
            // GraphQLBoolean.serialize expects a boolean or a number only
            if ((0, graphql_1.isEqualType)(graphql_1.GraphQLBoolean, namedType)) {
                value = (value === 'true' || value === true);
            }
            return namedType.serialize(value);
        }
        if ((0, graphql_1.isInputObjectType)(namedType)) {
            return value && typeof value === 'object' ? value : JSON.parse(value);
        }
        return value;
    }
    if (type.kind === graphql_1.Kind.LIST_TYPE) {
        return (Array.isArray(value) ? value : [value]).map((val) => resolveVariable({
            value: val,
            type: type.type,
            schema,
        }));
    }
    if (type.kind === graphql_1.Kind.NON_NULL_TYPE) {
        return resolveVariable({
            value: value,
            type: type.type,
            schema,
        });
    }
}
