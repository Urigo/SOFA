import { isObjectType, isNonNullType, Kind, isIntrospectionType, isInputObjectType, } from 'graphql';
import { buildOperationNodeForField, createGraphQLError } from '@graphql-tools/utils';
import { getOperationInfo } from './ast.js';
import { convertName } from './common';
import { parseVariable } from './parse.js';
import { SubscriptionManager } from './subscriptions.js';
import { logger } from './logger.js';
import { Response, createRouter as createRouterInstance, } from 'fets';
import { isInPath, resolveParamSchema, resolveRequestBody, resolveResponse, resolveVariableDescription } from './open-api/operations.js';
import { buildSchemaObjectFromType } from './open-api/types.js';
const defaultErrorHandler = (errors) => {
    let status;
    const headers = {
        'Content-Type': 'application/json; charset=utf-8',
    };
    for (const error of errors) {
        if (typeof error === 'object' &&
            error != null &&
            error.extensions?.http) {
            if (error.extensions.http.status &&
                (!status || error.extensions.http.status > status)) {
                status = error.extensions.http.status;
            }
            if (error.extensions.http.headers) {
                Object.assign(headers, error.extensions.http.headers);
            }
            delete error.extensions.http;
        }
    }
    if (!status) {
        status = 500;
    }
    return Response.json({ errors }, {
        status,
        headers,
    });
};
function useRequestBody(method) {
    return method === 'POST' || method === 'PUT' || method === 'PATCH';
}
export function createRouter(sofa) {
    logger.debug('[Sofa] Creating router');
    sofa.openAPI ||= {};
    sofa.openAPI.info ||= {};
    sofa.openAPI.info.title ||= 'SOFA API';
    sofa.openAPI.info.description ||= 'Generated by SOFA';
    sofa.openAPI.info.version ||= '0.0.0';
    sofa.openAPI.components ||= {};
    sofa.openAPI.components.schemas ||= {};
    const types = sofa.schema.getTypeMap();
    for (const typeName in types) {
        const type = types[typeName];
        if ((isObjectType(type) || isInputObjectType(type)) &&
            !isIntrospectionType(type)) {
            sofa.openAPI.components.schemas[typeName] = buildSchemaObjectFromType(type, {
                customScalars: sofa.customScalars,
            });
        }
    }
    const router = createRouterInstance({
        base: sofa.basePath,
        openAPI: sofa.openAPI,
        swaggerUI: sofa.swaggerUI,
        landingPage: false,
    });
    const queryType = sofa.schema.getQueryType();
    const mutationType = sofa.schema.getMutationType();
    const subscriptionManager = new SubscriptionManager(sofa);
    if (queryType) {
        Object.keys(queryType.getFields()).forEach((fieldName) => {
            createQueryRoute({ sofa, router, fieldName });
        });
    }
    if (mutationType) {
        Object.keys(mutationType.getFields()).forEach((fieldName) => {
            createMutationRoute({ sofa, router, fieldName });
        });
    }
    router.route({
        path: '/webhook',
        method: 'POST',
        async handler(request, serverContext) {
            const { subscription, variables, url } = await request.json();
            try {
                const sofaContext = Object.assign(serverContext, {
                    request,
                });
                const result = await subscriptionManager.start({
                    subscription,
                    variables,
                    url,
                }, sofaContext);
                return Response.json(result);
            }
            catch (error) {
                return Response.json(error, {
                    status: 500,
                    statusText: 'Subscription failed',
                });
            }
        }
    });
    router.route({
        path: '/webhook/:id',
        method: 'POST',
        async handler(request, serverContext) {
            const id = request.params?.id;
            const body = await request.json();
            const variables = body.variables;
            try {
                const sofaContext = Object.assign(serverContext, {
                    request,
                });
                const contextValue = await sofa.contextFactory(sofaContext);
                const result = await subscriptionManager.update({
                    id,
                    variables,
                }, contextValue);
                return Response.json(result);
            }
            catch (error) {
                return Response.json(error, {
                    status: 500,
                    statusText: 'Subscription failed to update',
                });
            }
        }
    });
    router.route({
        path: '/webhook/:id',
        method: 'DELETE',
        async handler(request) {
            const id = request.params?.id;
            try {
                const result = await subscriptionManager.stop(id);
                return Response.json(result);
            }
            catch (error) {
                return Response.json(error, {
                    status: 500,
                    statusText: 'Subscription failed to stop',
                });
            }
        }
    });
    return router;
}
function createQueryRoute({ sofa, router, fieldName, }) {
    logger.debug(`[Router] Creating ${fieldName} query`);
    const queryType = sofa.schema.getQueryType();
    const operationNode = buildOperationNodeForField({
        kind: 'query',
        schema: sofa.schema,
        field: fieldName,
        models: sofa.models,
        ignore: sofa.ignore,
        circularReferenceDepth: sofa.depthLimit,
    });
    const operation = {
        kind: Kind.DOCUMENT,
        definitions: [operationNode],
    };
    const info = getOperationInfo(operation);
    const field = queryType.getFields()[fieldName];
    const fieldType = field.type;
    const isSingle = isObjectType(fieldType) ||
        (isNonNullType(fieldType) && isObjectType(fieldType.ofType));
    const hasIdArgument = field.args.some((arg) => arg.name === 'id');
    const graphqlPath = `${queryType.name}.${fieldName}`;
    const routeConfig = sofa.routes?.[graphqlPath];
    const route = {
        method: routeConfig?.method ?? 'GET',
        path: routeConfig?.path ?? getPath(fieldName, isSingle && hasIdArgument),
        responseStatus: routeConfig?.responseStatus ?? 200,
    };
    router.route({
        path: route.path,
        method: route.method,
        schemas: getRouteSchemas({
            method: route.method,
            path: route.path,
            info,
            sofa,
            responseStatus: route.responseStatus,
        }),
        handler: useHandler({ info, route, fieldName, sofa, operation }),
    });
    logger.debug(`[Router] ${fieldName} query available at ${route.method} ${route.path}`);
    return {
        document: operation,
        path: route.path,
        method: route.method.toUpperCase(),
        tags: routeConfig?.tags ?? [],
        description: routeConfig?.description ?? field.description ?? '',
    };
}
function getRouteSchemas({ method, path, info, sofa, responseStatus, }) {
    const params = {
        properties: {},
        required: [],
    };
    const query = {
        properties: {},
        required: [],
    };
    for (const variable of info.variables) {
        const varSchema = resolveParamSchema(variable.type, {
            customScalars: sofa.customScalars,
            enumTypes: sofa.enumTypes,
        });
        varSchema.description = resolveVariableDescription(sofa.schema, info.operation, variable);
        const varName = variable.variable.name.value;
        const varObj = isInPath(path, varName) ? params : query;
        varObj.properties[varName] = varSchema;
        if (variable.type.kind === Kind.NON_NULL_TYPE) {
            varObj.required.push(varName);
        }
    }
    return {
        request: {
            json: useRequestBody(method) ? resolveRequestBody(info.variables, sofa.schema, info.operation, {
                customScalars: sofa.customScalars,
                enumTypes: sofa.enumTypes,
            }) : undefined,
            params,
            query,
        },
        responses: {
            [responseStatus]: resolveResponse({
                schema: sofa.schema,
                operation: info.operation,
                opts: {
                    customScalars: sofa.customScalars,
                    enumTypes: sofa.enumTypes,
                }
            })
        }
    };
}
function createMutationRoute({ sofa, router, fieldName, }) {
    logger.debug(`[Router] Creating ${fieldName} mutation`);
    const mutationType = sofa.schema.getMutationType();
    const field = mutationType.getFields()[fieldName];
    const operationNode = buildOperationNodeForField({
        kind: 'mutation',
        schema: sofa.schema,
        field: fieldName,
        models: sofa.models,
        ignore: sofa.ignore,
        circularReferenceDepth: sofa.depthLimit,
    });
    const operation = {
        kind: Kind.DOCUMENT,
        definitions: [operationNode],
    };
    const info = getOperationInfo(operation);
    const graphqlPath = `${mutationType.name}.${fieldName}`;
    const routeConfig = sofa.routes?.[graphqlPath];
    const method = routeConfig?.method ?? 'POST';
    const path = routeConfig?.path ?? getPath(fieldName);
    const responseStatus = routeConfig?.responseStatus ?? 200;
    const route = {
        method,
        path,
        responseStatus,
    };
    router.route({
        method,
        path,
        schemas: getRouteSchemas({
            method,
            path,
            info,
            responseStatus,
            sofa,
        }),
        handler: useHandler({ info, route, fieldName, sofa, operation }),
    });
    logger.debug(`[Router] ${fieldName} mutation available at ${method} ${path}`);
    return {
        document: operation,
        path,
        method,
        tags: routeConfig?.tags || [],
        description: routeConfig?.description ?? field.description ?? '',
    };
}
function useHandler(config) {
    const { sofa, operation, fieldName } = config;
    const info = config.info;
    const errorHandler = sofa.errorHandler || defaultErrorHandler;
    return async (request, serverContext) => {
        try {
            let body = {};
            if (request.body != null) {
                const strBody = await request.text();
                if (strBody) {
                    try {
                        body = JSON.parse(strBody);
                    }
                    catch (error) {
                        throw createGraphQLError('POST body sent invalid JSON.', {
                            extensions: {
                                http: {
                                    status: 400,
                                }
                            }
                        });
                    }
                }
            }
            let variableValues = {};
            try {
                variableValues = info.variables.reduce((variables, variable) => {
                    const name = variable.variable.name.value;
                    const value = parseVariable({
                        value: pickParam({
                            url: request.url,
                            body,
                            params: request.params || {},
                            name,
                        }),
                        variable,
                        schema: sofa.schema,
                    });
                    if (typeof value === 'undefined') {
                        return variables;
                    }
                    return {
                        ...variables,
                        [name]: value,
                    };
                }, {});
            }
            catch (error) {
                throw createGraphQLError(error.message || error.toString?.() || error, {
                    extensions: {
                        http: {
                            status: 400,
                        }
                    }
                });
            }
            const sofaContext = Object.assign(serverContext, {
                request,
            });
            const contextValue = await sofa.contextFactory(sofaContext);
            const result = await sofa.execute({
                schema: sofa.schema,
                document: operation,
                contextValue,
                variableValues,
                operationName: info.operation.name && info.operation.name.value,
            });
            if (result.errors) {
                return errorHandler(result.errors);
            }
            return Response.json(result.data?.[fieldName], {
                status: config.route.responseStatus,
            });
        }
        catch (error) {
            return errorHandler([error]);
        }
    };
}
function getPath(fieldName, hasId = false) {
    return `/${convertName(fieldName)}${hasId ? '/:id' : ''}`;
}
function pickParam({ name, url, params, body, }) {
    if (name in params) {
        return params[name];
    }
    const searchParams = new URLSearchParams(url.split('?')[1]);
    if (searchParams.has(name)) {
        const values = searchParams.getAll(name);
        return values.length === 1 ? values[0] : values;
    }
    if (body && body.hasOwnProperty(name)) {
        return body[name];
    }
}
