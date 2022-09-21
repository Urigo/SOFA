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
      birthday: Date!
    }

    input UserInput {
      name: String!
      age: Int!
      profile: Profile
    }

    scalar Date
  `);

  const userType = schema.getType('User') as GraphQLObjectType;
  const profileType = schema.getType('Profile') as GraphQLObjectType;
  const addressType = schema.getType('Address') as GraphQLObjectType;
  const userInputType = schema.getType('UserInput') as GraphQLInputObjectType;

  const customScalars = { Date: { type: 'string', format: 'date' } };
  const user = buildSchemaObjectFromType(userType, { customScalars });
  const profile = buildSchemaObjectFromType(profileType, { customScalars });
  const address = buildSchemaObjectFromType(addressType, { customScalars });
  const userInput = buildSchemaObjectFromType(userInputType, { customScalars });

  expect(user).toEqual({
    type: 'object',
    required: ['role', 'name', 'age', 'birthday'],
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
      birthday: {
        type: 'string',
        format: 'date',
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
