import { GraphQLArgs, ExecutionResult, DocumentNode } from 'graphql';

export type ContextValue = Record<string, any>;
export type ContextFn = (init: { req: any; res: any }) => ContextValue;
export type Context = ContextValue | ContextFn;

export type Ignore = string[];

export type ExecuteFn = (args: GraphQLArgs) => Promise<ExecutionResult<any>>;

export interface RouteInfo {
  document: DocumentNode;
  path: string;
  method: 'GET' | 'POST';
}
export type OnRoute = (info: RouteInfo) => void;
