"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionManager = void 0;
const graphql_1 = require("graphql");
const fetch_1 = require("@whatwg-node/fetch");
const utils_1 = require("@graphql-tools/utils");
const ast_js_1 = require("./ast.js");
const parse_js_1 = require("./parse.js");
const logger_js_1 = require("./logger.js");
function isAsyncIterable(obj) {
    return typeof obj[Symbol.asyncIterator] === 'function';
}
class SubscriptionManager {
    constructor(sofa) {
        this.sofa = sofa;
        this.operations = new Map();
        this.clients = new Map();
        this.buildOperations();
    }
    async start(event, contextValue) {
        const id = fetch_1.crypto.randomUUID();
        const name = event.subscription;
        if (!this.operations.has(name)) {
            throw new Error(`Subscription '${name}' is not available`);
        }
        logger_js_1.logger.info(`[Subscription] Start ${id}`, event);
        const result = await this.execute({
            id,
            name,
            url: event.url,
            variables: event.variables,
            contextValue,
        });
        if (typeof result !== 'undefined') {
            return result;
        }
        return { id };
    }
    async stop(id) {
        logger_js_1.logger.info(`[Subscription] Stop ${id}`);
        if (!this.clients.has(id)) {
            throw new Error(`Subscription with ID '${id}' does not exist`);
        }
        const execution = this.clients.get(id);
        if (execution.iterator.return) {
            execution.iterator.return();
        }
        this.clients.delete(id);
        return { id };
    }
    async update(event, contextValue) {
        const { variables, id } = event;
        logger_js_1.logger.info(`[Subscription] Update ${id}`, event);
        if (!this.clients.has(id)) {
            throw new Error(`Subscription with ID '${id}' does not exist`);
        }
        const { name: subscription, url } = this.clients.get(id);
        this.stop(id);
        return this.start({
            url,
            subscription,
            variables,
        }, contextValue);
    }
    async execute({ id, name, url, variables, contextValue, }) {
        const { document, operationName, variables: variableNodes } = this.operations.get(name);
        const variableValues = variableNodes.reduce((values, variable) => {
            const value = (0, parse_js_1.parseVariable)({
                value: variables[variable.variable.name.value],
                variable,
                schema: this.sofa.schema,
            });
            if (typeof value === 'undefined') {
                return values;
            }
            return {
                ...values,
                [variable.variable.name.value]: value,
            };
        }, {});
        const execution = await this.sofa.subscribe({
            schema: this.sofa.schema,
            document,
            operationName,
            variableValues,
            contextValue,
        });
        if (isAsyncIterable(execution)) {
            // successful
            // add execution to clients
            this.clients.set(id, {
                name,
                url,
                iterator: execution,
            });
            // success
            (async () => {
                for await (const result of execution) {
                    await this.sendData({
                        id,
                        result,
                    });
                }
            })().then(() => {
                // completes
                this.clients.delete(id);
            }, (e) => {
                logger_js_1.logger.info(`Subscription #${id} closed`);
                logger_js_1.logger.error(e);
                this.clients.delete(id);
            });
        }
        else {
            return execution;
        }
    }
    async sendData({ id, result }) {
        if (!this.clients.has(id)) {
            throw new Error(`Subscription with ID '${id}' does not exist`);
        }
        const { url } = this.clients.get(id);
        logger_js_1.logger.info(`[Subscription] Trigger ${id}`);
        const response = await (0, fetch_1.fetch)(url, {
            method: 'POST',
            body: JSON.stringify(result),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        await response.text();
    }
    buildOperations() {
        const subscription = this.sofa.schema.getSubscriptionType();
        if (!subscription) {
            return;
        }
        const fieldMap = subscription.getFields();
        for (const field in fieldMap) {
            const operationNode = (0, utils_1.buildOperationNodeForField)({
                kind: 'subscription',
                field,
                schema: this.sofa.schema,
                models: this.sofa.models,
                ignore: this.sofa.ignore,
                circularReferenceDepth: this.sofa.depthLimit,
            });
            const document = {
                kind: graphql_1.Kind.DOCUMENT,
                definitions: [operationNode],
            };
            const { variables, name: operationName } = (0, ast_js_1.getOperationInfo)(document);
            this.operations.set(field, {
                operationName,
                document,
                variables,
            });
        }
    }
}
exports.SubscriptionManager = SubscriptionManager;
