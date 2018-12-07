import { execute, ApolloLink, GraphQLRequest, FetchResult } from 'apollo-link';
import { Request, Response } from 'express';

export type ErorHandler = (res: Response) => void;

function attachRequest(req: Request) {
  return new ApolloLink((operation, forward) => {
    operation.setContext({
      req,
    });

    if (!forward) {
      throw new Error('You need to provide a terminating Link');
    }

    return forward(operation);
  });
}

export function fetch({
  req,
  link,
  operation,
}: {
  req: Request;
  link: ApolloLink;
  operation: GraphQLRequest;
}) {
  return new Promise<FetchResult>((resolve, reject) => {
    let result: any = null;

    return execute(attachRequest(req).concat(link), operation).subscribe({
      next(val) {
        result = val;
      },
      error: reject,
      complete() {
        resolve(result);
      },
    });
  });
}
