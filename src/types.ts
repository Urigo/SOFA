import { DocumentNode } from 'graphql';

export type ContextValue = Record<string, any>;

export type Ignore = string[];

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface RouteInfo {
  document: DocumentNode;
  path: string;
  method: Method;
  tags?: string[];
  description?: string;
}
export type OnRoute = (info: RouteInfo) => void;

export type ContextFn = (serverContext: DefaultSofaServerContext) => Promise<ContextValue> | ContextValue;

export type DefaultSofaServerContext = {
  request: Request;
}