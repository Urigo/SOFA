import { execute, ApolloLink, GraphQLRequest, FetchResult } from 'apollo-link';

export function fetch(link: ApolloLink, operation: GraphQLRequest) {
  return new Promise<FetchResult>((resolve, reject) => {
    let result: any = null;
    
    return execute(link, operation).subscribe({
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
