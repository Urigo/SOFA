import {
  buildSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
} from 'graphql';

import { buildSchemaObjectFromType } from '../../src/open-api/types';

test('handle ObjectType', async () => {
  const schema = buildSchema(/* GraphQL */ `
    """
    Address Object
    """
    type Address {
      """
      Street Name
      """
      street: String
      city: String
    }

    type Profile {
      email: String!
      address: [Address]
    }

    enum UserRole {
      ADMIN
      NORMAL
    }

    type User {
      role: UserRole!
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
    required: ['role', 'name', 'age'],
    properties: {
      role: {
        enum: ['ADMIN', 'NORMAL'],
        type: 'string',
      },
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
    properties: {
      street: {
        type: 'string',
        description: 'Street Name',
      },
      city: {
        type: 'string',
      },
    },
    description: 'Address Object',
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
