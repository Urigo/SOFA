"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isContextFn = exports.createSofa = void 0;
const graphql_1 = require("graphql");
const common_js_1 = require("./common.js");
const logger_js_1 = require("./logger.js");
function createSofa(config) {
    logger_js_1.logger.debug('[Sofa] Created');
    const models = extractsModels(config.schema);
    const ignore = config.ignore || [];
    const depthLimit = config.depthLimit || 1;
    logger_js_1.logger.debug(`[Sofa] models: ${models.join(', ')}`);
    logger_js_1.logger.debug(`[Sofa] ignore: ${ignore.join(', ')}`);
    return {
        execute: graphql_1.execute,
        subscribe: graphql_1.subscribe,
        models,
        ignore,
        depthLimit,
        contextFactory(serverContext) {
            if (config.context != null) {
                if (isContextFn(config.context)) {
                    return config.context(serverContext);
                }
                else {
                    return config.context;
                }
            }
            return serverContext;
        },
        customScalars: config.customScalars || {},
        enumTypes: config.enumTypes || {},
        ...config,
    };
}
exports.createSofa = createSofa;
function isContextFn(context) {
    return typeof context === 'function';
}
exports.isContextFn = isContextFn;
// Objects and Unions are the only things that are used to define return types
// and both might contain an ID
// We don't treat Unions as models because
// they might represent an Object that is not a model
// We check it later, when an operation is being built
function extractsModels(schema) {
    const modelMap = {};
    const query = schema.getQueryType();
    const fields = query.getFields();
    // if Query[type] (no args) and Query[type](just id as an argument)
    // loop through every field
    for (const fieldName in fields) {
        const field = fields[fieldName];
        const namedType = (0, graphql_1.getNamedType)(field.type);
        if (hasID(namedType)) {
            if (!modelMap[namedType.name]) {
                modelMap[namedType.name] = {};
            }
            if (isArrayOf(field.type, namedType)) {
                // check if type is a list
                // check if name of a field matches a name of a named type (in plural)
                // check if has no non-optional arguments
                // add to registry with `list: true`
                const sameName = isNameEqual(field.name, namedType.name + 's');
                const allOptionalArguments = !field.args.some((arg) => (0, graphql_1.isNonNullType)(arg.type));
                modelMap[namedType.name].list ||= sameName && allOptionalArguments;
            }
            else if ((0, graphql_1.isObjectType)(field.type) ||
                ((0, graphql_1.isNonNullType)(field.type) && (0, graphql_1.isObjectType)(field.type.ofType))) {
                // check if type is a graphql object type
                // check if name of a field matches with name of an object type
                // check if has only one argument named `id`
                // add to registry with `single: true`
                const sameName = isNameEqual(field.name, namedType.name);
                const hasIdArgument = field.args.length === 1 && field.args[0].name === 'id';
                modelMap[namedType.name].single ||= sameName && hasIdArgument;
            }
        }
    }
    return Object.keys(modelMap).filter((name) => modelMap[name].list && modelMap[name].single);
}
// it's dumb but let's leave it for now
function isArrayOf(type, expected) {
    const typeNameInSdl = type.toString();
    return (typeNameInSdl.includes('[') && typeNameInSdl.includes(expected.toString()));
}
function hasID(type) {
    return (0, graphql_1.isObjectType)(type) && !!type.getFields().id;
}
function isNameEqual(a, b) {
    return (0, common_js_1.convertName)(a) === (0, common_js_1.convertName)(b);
}
