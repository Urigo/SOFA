"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveVariableDescription = exports.isInPath = exports.resolveResponse = exports.resolveParamSchema = exports.resolveRequestBody = exports.buildPathFromOperation = void 0;
const graphql_1 = require("graphql");
const ast_1 = require("../ast");
const utils_1 = require("./utils");
const types_1 = require("./types");
const title_case_1 = require("title-case");
function buildPathFromOperation({ url, schema, operation, useRequestBody, tags, description, customScalars, }) {
    const info = (0, ast_1.getOperationInfo)(operation);
    const enumTypes = resolveEnumTypes(schema);
    const summary = resolveDescription(schema, info.operation);
    const variables = info.operation.variableDefinitions;
    const pathParams = variables?.filter((variable) => isInPath(url, variable.variable.name.value));
    const bodyParams = variables?.filter((variable) => !isInPath(url, variable.variable.name.value));
    return {
        tags,
        description,
        summary,
        operationId: info.name,
        ...(useRequestBody
            ? {
                parameters: resolveParameters(url, pathParams, schema, info.operation, { customScalars, enumTypes }),
                requestBody: {
                    content: {
                        'application/json': {
                            schema: resolveRequestBody(bodyParams, schema, info.operation, { customScalars, enumTypes }),
                        },
                    },
                },
            }
            : {
                parameters: resolveParameters(url, variables, schema, info.operation, { customScalars, enumTypes }),
            }),
        responses: {
            200: {
                description: summary,
                content: {
                    'application/json': {
                        schema: resolveResponse({
                            schema,
                            operation: info.operation,
                            opts: { customScalars, enumTypes },
                        }),
                    },
                },
            },
        },
    };
}
exports.buildPathFromOperation = buildPathFromOperation;
function resolveEnumTypes(schema) {
    const enumTypes = Object.values(schema.getTypeMap())
        .filter(graphql_1.isEnumType);
    return Object.fromEntries(enumTypes.map((type) => [
        type.name,
        {
            type: 'string',
            enum: type.getValues().map((value) => value.name),
        },
    ]));
}
function resolveParameters(url, variables, schema, operation, opts) {
    if (!variables) {
        return [];
    }
    return variables.map((variable) => {
        return {
            in: isInPath(url, variable.variable.name.value) ? 'path' : 'query',
            name: variable.variable.name.value,
            required: variable.type.kind === graphql_1.Kind.NON_NULL_TYPE,
            schema: resolveParamSchema(variable.type, opts),
            description: resolveVariableDescription(schema, operation, variable),
        };
    });
}
function resolveRequestBody(variables, schema, operation, opts) {
    if (!variables) {
        return {};
    }
    const properties = {};
    const required = [];
    variables.forEach((variable) => {
        if (variable.type.kind === graphql_1.Kind.NON_NULL_TYPE) {
            required.push(variable.variable.name.value);
        }
        properties[variable.variable.name.value] = {
            ...resolveParamSchema(variable.type, opts),
            description: resolveVariableDescription(schema, operation, variable),
        };
    });
    return {
        type: 'object',
        properties,
        ...(required.length ? { required } : {}),
    };
}
exports.resolveRequestBody = resolveRequestBody;
// array -> [type]
// type -> $ref
// scalar -> swagger primitive
function resolveParamSchema(type, opts) {
    if (type.kind === graphql_1.Kind.NON_NULL_TYPE) {
        return resolveParamSchema(type.type, opts);
    }
    if (type.kind === graphql_1.Kind.LIST_TYPE) {
        return {
            type: 'array',
            items: resolveParamSchema(type.type, opts),
        };
    }
    const primitive = (0, utils_1.mapToPrimitive)(type.name.value);
    return (primitive ||
        opts.customScalars[type.name.value] ||
        opts.enumTypes[type.name.value] || { $ref: (0, utils_1.mapToRef)(type.name.value) });
}
exports.resolveParamSchema = resolveParamSchema;
function resolveResponse({ schema, operation, opts, }) {
    const operationType = operation.operation;
    const rootField = operation.selectionSet.selections[0];
    if (rootField.kind === graphql_1.Kind.FIELD) {
        if (operationType === 'query') {
            const queryType = schema.getQueryType();
            const field = queryType.getFields()[rootField.name.value];
            return (0, types_1.resolveFieldType)(field.type, opts);
        }
        if (operationType === 'mutation') {
            const mutationType = schema.getMutationType();
            const field = mutationType.getFields()[rootField.name.value];
            return (0, types_1.resolveFieldType)(field.type, opts);
        }
    }
}
exports.resolveResponse = resolveResponse;
function isInPath(url, param) {
    return url.includes(`:${param}`) || url.includes(`{${param}}`);
}
exports.isInPath = isInPath;
function getOperationFieldNode(schema, operation) {
    const selection = operation.selectionSet.selections[0];
    const fieldName = selection.name.value;
    const typeDefinition = schema.getType((0, title_case_1.titleCase)(operation.operation));
    if (!typeDefinition) {
        return undefined;
    }
    const definitionNode = typeDefinition.astNode || (0, graphql_1.parse)((0, graphql_1.printType)(typeDefinition)).definitions[0];
    if (!isObjectTypeDefinitionNode(definitionNode)) {
        return undefined;
    }
    return definitionNode.fields.find((field) => field.name.value === fieldName);
}
function resolveDescription(schema, operation) {
    const fieldNode = getOperationFieldNode(schema, operation);
    return fieldNode?.description?.value || '';
}
function resolveVariableDescription(schema, operation, variable) {
    const fieldNode = getOperationFieldNode(schema, operation);
    const argument = fieldNode?.arguments?.find((arg) => arg.name.value === variable.variable.name.value);
    return argument?.description?.value;
}
exports.resolveVariableDescription = resolveVariableDescription;
function isObjectTypeDefinitionNode(node) {
    return node.kind === graphql_1.Kind.OBJECT_TYPE_DEFINITION;
}
