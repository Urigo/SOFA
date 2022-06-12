import { GraphQLArgs, ExecutionResult, DocumentNode } from 'graphql';

export type ContextValue = Record<string, any>;

export type Ignore = string[];

export type ExecuteFn = (args: GraphQLArgs) => Promise<ExecutionResult<any>>;

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface RouteInfo {
  document: DocumentNode;
  path: string;
  method: Method;
  tags?: string[];
  description?: string;
}
export type OnRoute = (info: RouteInfo) => void;
