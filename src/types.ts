import { GraphQLArgs, ExecutionResult } from 'graphql';

export type ContextValue = Record<string, any>;
export type ContextFn = (init: { req: any }) => ContextValue;
export type Context = ContextValue | ContextFn;

export type Ignore = string[];

export type ExecuteFn = (args: GraphQLArgs) => Promise<ExecutionResult<any>>;
