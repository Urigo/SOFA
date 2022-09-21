import { buildSchema, Kind, OperationTypeNode } from 'graphql';

import { buildPathFromOperation } from '../../src/open-api/operations';
import { buildOperationNodeForField } from '@graphql-tools/utils';

const schema = buildSchema(/* GraphQL */ `
  type Post {
    comments(filter: String!): [String!]!
    author: Author
    postId: Int
  }

  type Author {
    authorId: Int
  }

  type Query {
    """
    Feed of posts
    """
    feed: [Post]
  }

  type Mutation {
    addPost(comments: [String!]!): Post
  }
`);

test('handle query', async () => {
  const operation = buildOperationNodeForField({
    schema,
    kind: 'query' as OperationTypeNode,
    field: 'feed',
    models: [],
    ignore: [],
  });

  const result = buildPathFromOperation({
    url: '/api/feed',
    operation: {
      kind: Kind.DOCUMENT,
      definitions: [operation],
    },
    schema,
    useRequestBody: false,
    customScalars: {},
  });

  expect(result.operationId).toEqual('feed_query');
  expect(result.parameters.length).toEqual(1);
  expect(result.parameters[0]).toEqual({
    in: 'query',
    name: 'feed_comments_filter',
    required: true,
    schema: {
      type: 'string',
    },
  });

  expect(result.responses[200].description).toMatch('Feed of posts');

  const response = result.responses[200].content['application/json'].schema;
  expect(response).toEqual({
    type: 'array',
    items: { $ref: '#/components/schemas/Post' },
  });
});

test('handle mutation', async () => {
  const operation = buildOperationNodeForField({
    schema,
    kind: 'mutation' as OperationTypeNode,
    field: 'addPost',
    models: [],
    ignore: [],
  });

  const result = buildPathFromOperation({
    url: '/api/add-post',
    operation: {
      kind: Kind.DOCUMENT,
      definitions: [operation],
    },
    schema,
    useRequestBody: true,
    customScalars: {},
  });

  // id
  expect(result.operationId).toEqual('addPost_mutation');

  // params
  expect(result.parameters).not.toBeDefined();

  // request body
  const def = result.requestBody!.content['application/json'].schema;

  expect(result.requestBody).toBeDefined();
  expect(def.type).toEqual('object');
  expect(def.required).toEqual(['comments', 'addPost_comments_filter']);
  expect(def.properties!.comments).toEqual({
    type: 'array',
    items: {
      type: 'string',
    },
  });
});
