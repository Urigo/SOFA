import {
  buildASTSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
} from 'graphql';
import gql from 'graphql-tag';

import { buildSchemaObjectFromType } from '../../src/open-api/types';

test('handle ObjectType', async () => {
  const schema = buildASTSchema(gql`
    type Address {
      street: String
      city: String
    }

    type Profile {
      email: String!
      address: [Address]
    }

    type User {
      name: String!
      age: Int!
      profile: Profile
    }

    input UserInput {
      name: String!
      age: Int!
      profile: Profile
    }
  `);

  const userType = schema.getType('User') as GraphQLObjectType;
  const profileType = schema.getType('Profile') as GraphQLObjectType;
  const addressType = schema.getType('Address') as GraphQLObjectType;
  const userInputType = schema.getType('UserInput') as GraphQLInputObjectType;

  const user = buildSchemaObjectFromType(userType);
  const profile = buildSchemaObjectFromType(profileType);
  const address = buildSchemaObjectFromType(addressType);
  const userInput = buildSchemaObjectFromType(userInputType);

  expect(user).toEqual({
    type: 'object',
    required: ['name', 'age'],
    properties: {
      name: {
        type: 'string',
      },
      age: {
        type: 'integer',
        format: 'int32',
      },
      profile: {
        $ref: '#/components/schemas/Profile',
      },
    },
  });

  expect(profile).toEqual({
    type: 'object',
    required: ['email'],
    properties: {
      email: {
        type: 'string',
      },
      address: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/Address',
        },
      },
    },
  });

  expect(address).toEqual({
    type: 'object',
    required: [],
    properties: {
      street: {
        type: 'string',
      },
      city: {
        type: 'string',
      },
    },
  });

  expect(userInput).toEqual({
    type: 'object',
    required: ['name', 'age'],
    properties: {
      name: {
        type: 'string',
      },
      age: {
        type: 'integer',
        format: 'int32',
      },
      profile: {
        $ref: '#/components/schemas/Profile',
      },
    },
  });
});
