import { createSchema } from 'graphql-yoga';
import { useSofa } from '../src';

describe('Content', () => {
  it('has Request in the context', async () => {
    const schema = createSchema({
      typeDefs: `
                type Query {
                    hello: String!
                }
            `,
      resolvers: {
        Query: {
          hello: (_, __, { request }) => {
            const userAgent = request.headers.get('user-agent');
            return `Hello World! Your user agent is: ${userAgent}`;
          },
        },
      },
    });
    const sofa = useSofa({ schema, basePath: '/' });
    const res = await sofa.fetch('/hello', {
      headers: {
        'user-agent': 'jest',
      },
    });
    const data = await res.json();
    expect(data).toEqual('Hello World! Your user agent is: jest');
  });
});
