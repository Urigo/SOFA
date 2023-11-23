import { isEnumType, Kind, parse, printType, } from 'graphql';
import { getOperationInfo } from '../ast';
import { mapToPrimitive, mapToRef } from './utils';
import { resolveFieldType } from './types';
import { titleCase } from 'title-case';
export function buildPathFromOperation({ url, schema, operation, useRequestBody, tags, description, customScalars, }) {
    const info = getOperationInfo(operation);
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
function resolveEnumTypes(schema) {
    const enumTypes = Object.values(schema.getTypeMap())
        .filter(isEnumType);
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
            required: variable.type.kind === Kind.NON_NULL_TYPE,
            schema: resolveParamSchema(variable.type, opts),
            description: resolveVariableDescription(schema, operation, variable),
        };
    });
}
export function resolveRequestBody(variables, schema, operation, opts) {
    if (!variables) {
        return {};
    }
    const properties = {};
    const required = [];
    variables.forEach((variable) => {
        if (variable.type.kind === Kind.NON_NULL_TYPE) {
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
// array -> [type]
// type -> $ref
// scalar -> swagger primitive
export function resolveParamSchema(type, opts) {
    if (type.kind === Kind.NON_NULL_TYPE) {
        return resolveParamSchema(type.type, opts);
    }
    if (type.kind === Kind.LIST_TYPE) {
        return {
            type: 'array',
            items: resolveParamSchema(type.type, opts),
        };
    }
    const primitive = mapToPrimitive(type.name.value);
    return (primitive ||
        opts.customScalars[type.name.value] ||
        opts.enumTypes[type.name.value] || { $ref: mapToRef(type.name.value) });
}
export function resolveResponse({ schema, operation, opts, }) {
    const operationType = operation.operation;
    const rootField = operation.selectionSet.selections[0];
    if (rootField.kind === Kind.FIELD) {
        if (operationType === 'query') {
            const queryType = schema.getQueryType();
            const field = queryType.getFields()[rootField.name.value];
            return resolveFieldType(field.type, opts);
        }
        if (operationType === 'mutation') {
            const mutationType = schema.getMutationType();
            const field = mutationType.getFields()[rootField.name.value];
            return resolveFieldType(field.type, opts);
        }
    }
}
export function isInPath(url, param) {
    return url.includes(`:${param}`) || url.includes(`{${param}}`);
}
function getOperationFieldNode(schema, operation) {
    const selection = operation.selectionSet.selections[0];
    const fieldName = selection.name.value;
    const typeDefinition = schema.getType(titleCase(operation.operation));
    if (!typeDefinition) {
        return undefined;
    }
    const definitionNode = typeDefinition.astNode || parse(printType(typeDefinition)).definitions[0];
    if (!isObjectTypeDefinitionNode(definitionNode)) {
        return undefined;
    }
    return definitionNode.fields.find((field) => field.name.value === fieldName);
}
function resolveDescription(schema, operation) {
    const fieldNode = getOperationFieldNode(schema, operation);
    return fieldNode?.description?.value || '';
}
export function resolveVariableDescription(schema, operation, variable) {
    const fieldNode = getOperationFieldNode(schema, operation);
    const argument = fieldNode?.arguments?.find((arg) => arg.name.value === variable.variable.name.value);
    return argument?.description?.value;
}
function isObjectTypeDefinitionNode(node) {
    return node.kind === Kind.OBJECT_TYPE_DEFINITION;
}
