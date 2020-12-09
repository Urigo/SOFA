import * as http from 'http';
import { Request } from 'express';
import { GraphQLArgs, ExecutionResult, DocumentNode } from 'graphql';

export type ContextValue = Record<string, any>;
export type ContextFn = (init: { req: any; res: any }) => ContextValue;
export type Context = ContextValue | ContextFn;

export type Ignore = string[];

export type ExecuteFn = (args: GraphQLArgs) => Promise<ExecutionResult<any>>;

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type Route = (
  routeUrl: string,
  req: Request,
  res: http.ServerResponse
) => Promise<void>;

export interface RouteInfo {
  document: DocumentNode;
  path: string;
  method: Method;
  route: Route;
}

export type OnRoute = (info: RouteInfo) => void;

export type MethodMap = Record<string, Method>;
