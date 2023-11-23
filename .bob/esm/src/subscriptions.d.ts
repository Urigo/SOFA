import { type ExecutionResult } from 'graphql';
import type { ContextValue } from './types.js';
import type { Sofa } from './sofa.js';
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
export declare class SubscriptionManager {
    private sofa;
    private operations;
    private clients;
    constructor(sofa: Sofa);
    start(event: StartSubscriptionEvent, contextValue: ContextValue): Promise<ExecutionResult<import("graphql/jsutils/ObjMap.js").ObjMap<unknown>, import("graphql/jsutils/ObjMap.js").ObjMap<unknown>> | {
        id: `${string}-${string}-${string}-${string}-${string}`;
    }>;
    stop(id: ID): Promise<StopSubscriptionResponse>;
    update(event: UpdateSubscriptionEvent, contextValue: ContextValue): Promise<ExecutionResult<import("graphql/jsutils/ObjMap.js").ObjMap<unknown>, import("graphql/jsutils/ObjMap.js").ObjMap<unknown>> | {
        id: `${string}-${string}-${string}-${string}-${string}`;
    }>;
    private execute;
    private sendData;
    private buildOperations;
}
