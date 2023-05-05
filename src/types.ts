import { HTTPMethod } from 'fets/typings/typed-fetch';
import { DocumentNode } from 'graphql';

export type ContextValue = Record<string, any>;

export type Ignore = string[];

export interface RouteInfo {
  document: DocumentNode;
  path: string;
  method: HTTPMethod;
  tags?: string[];
  description?: string;
}

export type ContextFn = (serverContext: DefaultSofaServerContext) => Promise<ContextValue> | ContextValue;

export type DefaultSofaServerContext = {
  request: Request;
}