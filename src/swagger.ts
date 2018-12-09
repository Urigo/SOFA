import { GraphQLNamedType, isObjectType, isNonNullType } from 'graphql';

// swagger: "2.0"
// info:
//   description: "This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters."
//   version: "1.0.0"
//   title: "Swagger Petstore"
//   termsOfService: "http://swagger.io/terms/"
//   contact:
//     email: "apiteam@swagger.io"
//   license:
//     name: "Apache 2.0"
//     url: "http://www.apache.org/licenses/LICENSE-2.0.html"
// host: "petstore.swagger.io"
// basePath: "/v2"
// schemes:
// - "https"
// - "http"
// paths:

interface ArrayProperty extends CommonProperty {
  type: 'array';
  xml: {
    name: string;
    wrapped?: boolean;
  };
  items: Property;
}

interface EnumProperty extends CommonProperty {
  enum: string[];
}

interface NumberProperty extends CommonProperty {
  format: string;
}

interface PrimitiveProperty extends CommonProperty {}

interface CommonProperty {
  type: string;
  example?: string;
  description?: string;
}

interface RefProperty {
  $ref: string;
}

type Property =
  | RefProperty
  | ArrayProperty
  | PrimitiveProperty
  | EnumProperty
  | NumberProperty;

interface SwaggerDefinition {
  type: 'object';
  required: string[];
  properties: {
    [name: string]: Property;
  };
}

function definitionFromType(
  type: GraphQLNamedType
): SwaggerDefinition | undefined {
  if (isObjectType(type)) {
    const fields = type.getFields();
    const required: string[] = [];
    const properties: { [name: string]: Property } = {};

    Object.keys(fields).forEach(fieldName => {
      const field = fields[fieldName];

      if (!isNonNullType(field.type)) {
        required.push(field.name);
      }
    });
  }

  return;
}

// Pet:
//   type: "object"
//   required:
//   - "name"
//   - "photoUrls"
//   properties:
//     id:
//       type: "integer"
//       format: "int64"
//     category:
//       $ref: "#/definitions/Category"
//     name:
//       type: "string"
//       example: "doggie"
//     photoUrls:
//       type: "array"
//       xml:
//         name: "photoUrl"
//         wrapped: true
//       items:
//         type: "string"
//     tags:
//       type: "array"
//       xml:
//         name: "tag"
//         wrapped: true
//       items:
//         $ref: "#/definitions/Tag"
//     status:
//       type: "string"
//       description: "pet status in the store"
//       enum:
//       - "available"
//       - "pending"
//       - "sold"
//   xml:
//     name: "Pet"

function resolveType() {}

interface SwaggerPath {
  summary: string;
  description: string;
  operationId: string;
  consumes: string[];
  produces: string[];
  parameters;
}

// tags:
// - "pet"
// summary: "Add a new pet to the store"
// description: ""
// operationId: "addPet"
// consumes:
// - "application/json"
// - "application/xml"
// produces:
// - "application/xml"
// - "application/json"
// parameters:
// - in: "body"
//   name: "body"
//   description: "Pet object that needs to be added to the store"
//   required: true
//   schema:
//     $ref: "#/definitions/Pet"
// responses:
//   405:
//     description: "Invalid input"
// security:
// - petstore_auth:
//   - "write:pets"
//   - "read:pets"
