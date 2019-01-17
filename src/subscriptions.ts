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

export class SubscriptionManager {
  private operations = new Map<
    SubscriptionFieldName,
    {
      operationName: string;
      document: DocumentNode;
      variables: ReadonlyArray<VariableDefinitionNode>;
    }
  >();
  private clients = new Map<
    ID,
    {
      name: SubscriptionFieldName;
      url: string;
      iterator: AsyncIterator<any>;
    }
  >();

  constructor(private sofa: Sofa) {
    this.buildOperations();
  }

  public async start(event: StartSubscriptionEvent) {
    const id = uuid();
    // TODO: make sure we catch undefined operation
    const { document, operationName, variables } = this.operations.get(
      event.subscription
    )!;

    console.log(
      `[Subscription] Start ${id}. Listen to ${
        event.subscription
      } and send results to ${event.url}`
    );

    const result = await this.execute({
      id,
      name: event.subscription,
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
    console.log(`[Subscription] Stop ${id}`);
    // TODO: make sure we catch undefined client
    const execution = this.clients.get(id)!;

    if (execution.iterator.return) {
      execution.iterator.return();
    }

    this.clients.delete(id);

    return { id };
  }

  public async update(event: UpdateSubscriptionEvent) {
    console.log(`[Subscription] Update ${event.id}`);
    // TODO: make sure we catch undefined client
    const { name: subscription, url } = this.clients.get(event.id)!;

    this.stop(event.id);

    return this.start({
      url,
      subscription,
      variables: event.variables,
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
    variables: any;
  }) {
    const execution = await subscribe({
      schema: this.sofa.schema,
      document,
      operationName,
      variableValues: variables,
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
          console.log(`Subscription #${id} closed`);
          console.log(e);
          this.stop(id);
        }
      );
    } else {
      return execution as ExecutionResult<any>;
    }
  }

  private async sendData({ id, result }: { id: ID; result: any }) {
    // TODO: make sure we catch undefined client
    const { url } = this.clients.get(id)!;

    console.log(`[Subscription] Trigger ${id}`);

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
