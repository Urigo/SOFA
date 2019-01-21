import {
  subscribe,
  DocumentNode,
  VariableDefinitionNode,
  ExecutionResult,
} from 'graphql';
import * as uuid from 'uuid/v4';
import * as request from 'request-promise-native';
import { forAwaitEach, isAsyncIterable } from 'iterall';
import { buildOperation } from './operation';
import { Sofa } from './sofa';
import { getOperationInfo } from './ast';
import { parseVariable } from './parse';
import { logger } from './logger';

// To start subscription:
//   - an url that Sofa should trigger
//   - name of a subscription
//   - variables if needed
//   - some sort of an auth token
//   - Sofa should return a unique id of that subscription
//   - respond with OK 200

// To stop subscription
//   - an id is required
//   - respond with OK 200

// To update subscription
//   - an id is required
//   - new set of variables

export type ID = string;
export type SubscriptionFieldName = string;

export interface StartSubscriptionEvent {
  subscription: SubscriptionFieldName;
  variables: any;
  url: string;
}

export interface UpdateSubscriptionEvent {
  id: ID;
  variables: any;
}

export interface StopSubscriptionResponse {
  id: ID;
}

interface BuiltOperation {
  operationName: string;
  document: DocumentNode;
  variables: ReadonlyArray<VariableDefinitionNode>;
}

interface StoredClient {
  name: SubscriptionFieldName;
  url: string;
  iterator: AsyncIterator<any>;
}

export class SubscriptionManager {
  private operations = new Map<SubscriptionFieldName, BuiltOperation>();
  private clients = new Map<ID, StoredClient>();

  constructor(private sofa: Sofa) {
    this.buildOperations();
  }

  public async start(event: StartSubscriptionEvent) {
    const id = uuid();
    const name = event.subscription;

    if (!this.operations.has(name)) {
      throw new Error(`Subscription '${name}' is not available`);
    }

    const { document, operationName, variables } = this.operations.get(name)!;

    logger.info(
      `[Subscription] Start ${id}. Listen to ${name} and send results to ${
        event.url
      }`
    );

    const result = await this.execute({
      id,
      name,
      url: event.url,
      document,
      operationName,
      variables,
    });

    if (typeof result !== 'undefined') {
      return result;
    }

    return { id };
  }

  public async stop(id: ID): Promise<StopSubscriptionResponse> {
    logger.info(`[Subscription] Stop ${id}`);

    if (!this.clients.has(id)) {
      throw new Error(`Subscription with ID '${id}' does not exist`);
    }

    const execution = this.clients.get(id)!;

    if (execution.iterator.return) {
      execution.iterator.return();
    }

    this.clients.delete(id);

    return { id };
  }

  public async update(event: UpdateSubscriptionEvent) {
    const { variables, id } = event;

    logger.info(`[Subscription] Update ${id}`);

    if (!this.clients.has(id)) {
      throw new Error(`Subscription with ID '${id}' does not exist`);
    }

    const { name: subscription, url } = this.clients.get(id)!;

    this.stop(id);

    return this.start({
      url,
      subscription,
      variables,
    });
  }

  private async execute({
    id,
    document,
    name,
    url,
    operationName,
    variables,
  }: {
    id: ID;
    name: SubscriptionFieldName;
    url: string;
    document: DocumentNode;
    operationName: string;
    variables: Record<string, any>;
  }) {
    const variableNodes = this.operations.get(name)!.variables;
    const variableValues = variableNodes.reduce((values, variable) => {
      const value = parseVariable({
        value: variables[variable.variable.name.value],
        variable,
        schema: this.sofa.schema,
      });

      if (typeof value === 'undefined') {
        return values;
      }

      return {
        ...values,
        [name]: value,
      };
    }, {});

    const execution = await subscribe({
      schema: this.sofa.schema,
      document,
      operationName,
      variableValues,
    });

    if (isAsyncIterable(execution)) {
      // successful

      // add execution to clients
      this.clients.set(id, {
        name,
        url,
        iterator: execution as any,
      });

      // success
      forAwaitEach(execution, async result => {
        await this.sendData({
          id,
          result,
        });
      }).then(
        () => {
          // completes
          this.stop(id);
        },
        e => {
          logger.info(`Subscription #${id} closed`);
          console.log(e);
          this.stop(id);
        }
      );
    } else {
      return execution as ExecutionResult<any>;
    }
  }

  private async sendData({ id, result }: { id: ID; result: any }) {
    if (!this.clients.has(id)) {
      throw new Error(`Subscription with ID '${id}' does not exist`);
    }

    const { url } = this.clients.get(id)!;

    logger.info(`[Subscription] Trigger ${id}`);

    await request.post(url, {
      json: result,
    });
  }

  private buildOperations() {
    const subscription = this.sofa.schema.getSubscriptionType();

    if (!subscription) {
      return;
    }

    const fieldMap = subscription.getFields();

    for (const field in fieldMap) {
      const document = buildOperation({
        kind: 'subscription',
        field,
        schema: this.sofa.schema,
        models: this.sofa.models,
        ignore: this.sofa.ignore,
      });

      const { variables, name: operationName } = getOperationInfo(document)!;

      this.operations.set(field, {
        operationName,
        document,
        variables,
      });
    }
  }
}
