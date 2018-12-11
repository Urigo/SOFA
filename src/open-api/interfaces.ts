type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export namespace OpenAPI {
  export interface Contact {
    /**
     * The identifying name of the contact person/organization.
     */
    name?: string;
    /**
     * The URL pointing to the contact information. MUST be in the format of a URL.
     */
    url?: string;
    /**
     * The email address of the contact person/organization. MUST be in the format of an email address.
     */
    email?: string;
  }

  export interface License {
    /**
     * The license name used for the API.
     */
    name: string;
    /**
     * A URL to the license used for the API. MUST be in the format of a URL.
     */
    url?: string;
  }

  export interface Info {
    /**
     * The title of the application.
     */
    title: string;
    /**
     * A short description of the application. CommonMark syntax MAY be used for rich text representation.
     */
    description?: string;
    /**
     * A URL to the Terms of Service for the API. MUST be in the format of a URL.
     */
    termsOfService?: string;
    /**
     * The contact information for the exposed API.
     */
    contact?: Contact;
    /**
     * The license information for the exposed API.
     */
    license?: License;
    /**
     * The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version).
     */
    version: string;
  }

  export interface Reference {
    /**
     * The reference string.
     */
    $ref: string;
  }

  export interface Parameter {
    /**
     * The name of the parameter. Parameter names are case sensitive.
     * - If in is "path", the name field MUST correspond to the associated path segment from the path field in the Paths Object. See Path Templating for further information.
     * - If in is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored.
     * - For all other cases, the name corresponds to the parameter name used by the in property
     */
    name: string;
    /**
     * The location of the parameter. Possible values are "query", "header", "path" or "cookie".
     */
    in: 'query' | 'header' | 'path' | 'cookie';
    /**
     * A brief description of the parameter. This could contain examples of use. CommonMark syntax MAY be used for rich text representation.
     */
    description?: string;
    /**
     * Determines whether this parameter is mandatory. If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false.
     */
    required: boolean;
    /**
     * Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;
    /**
     * Sets the ability to pass empty-valued parameters. This is valid only for query parameters and allows sending a parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.
     */
    allowEmptyValue?: boolean;
    schema?: Reference | Schema;
  }

  export interface RequestBody {
    /**
     * A brief description of the request body. This could contain examples of use. CommonMark syntax MAY be used for rich text representation.
     */
    description?: string;
    /**
     * The content of the request body. The key is a media type or media type range and the value describes it. For requests that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*
     */
    content: Array<string>;
    /**
     * Determines if the request body is required in the request. Defaults to false.
     */
    required?: boolean;
  }

  export type Header = Omit<Parameter, 'name' | 'in'>;

  export interface Link {
    /**
     * A relative or absolute reference to an OAS operation. This field is mutually exclusive of the operationId field, and MUST point to an Operation Object. Relative operationRef values MAY be used to locate an existing Operation Object in the OpenAPI definition.
     */
    operationRef?: string;
    /**
     * The name of an existing, resolvable OAS operation, as defined with a unique operationId. This field is mutually exclusive of the operationRef field.
     */
    operationId?: string;
    /**
     * A map representing parameters to pass to an operation as specified with operationId or identified via operationRef. The key is the parameter name to be used, whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. The parameter name can be qualified using the parameter location [{in}.]{name} for operations that use the same parameter name in different locations (e.g. path.id).
     */
    parameters?: Record<string, any>;
    /**
     * A literal value or {expression} to use as a request body when calling the target operation.
     */
    requestBody?: any;
    /**
     * A description of the link. CommonMark syntax MAY be used for rich text representation.
     */
    description?: string;
  }

  interface Response {
    /**
     * A short description of the response. CommonMark syntax MAY be used for rich text representation.
     */
    description: string;
    headers?: {
      [header: string]: Header | Reference;
    };
    links?: {
      [link: string]: Link | Reference;
    };
  }

  interface Responses {
    default: Response | Reference;
    [httpStatusCode: number]: Response | Reference;
  }

  export interface Operation {
    /**
     * A list of tags for API documentation control.
     * Tags can be used for logical grouping of operations by resources or any other qualifier.
     */
    tags?: string[];
    /**
     * A short summary of what the operation does.
     */
    summary?: string;
    /**
     * A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation.
     */
    description?: string;
    /**
     * Additional external documentation for this operation.
     */
    externalDocs?: {
      /**
       * The URL for the target documentation. Value MUST be in the format of a URL.
       */
      url: string;
      /**
       * A short description of the target documentation. CommonMark syntax MAY be used for rich text representation.
       */
      description?: string;
    };

    /**
     * Unique string used to identify the operation.
     * The id MUST be unique among all operations described in the API.
     * The operationId value is case-sensitive.
     * Tools and libraries MAY use the operationId to uniquely identify an operation,
     * therefore, it is RECOMMENDED to follow common programming naming conventions.
     */
    operationId?: string;
    /**
     * A list of parameters that are applicable for this operation.
     * If a parameter is already defined at the Path Item, the new definition will override it but can never remove it.
     * The list MUST NOT include duplicated parameters.
     * A unique parameter is defined by a combination of a name and location.
     * The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.
     */
    parameters?: Array<Parameter | Reference>;
    /**
     * The request body applicable for this operation. The requestBody is only supported in HTTP methods where the HTTP 1.1 specification RFC7231 has explicitly defined semantics for request bodies. In other cases where the HTTP spec is vague, requestBody SHALL be ignored by consumers.
     */
    requestBody?: RequestBody | Reference;
    /**
     * The list of possible responses as they are returned from executing this operation.
     */
    responses?: Responses;
    /**
     * Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is false.
     */
    deprecated?: boolean;
  }

  export interface PathItem {
    /**
     * Allows for an external definition of this path item.
     * The referenced structure MUST be in the format of a Path Item Object.
     * If there are conflicts between the referenced definition and this Path Item's definition, the behavior is undefined.
     */
    $ref?: string;
    /**
     * An optional, string summary, intended to apply to all operations in this path.
     */
    summary?: string;
    /**
     * An optional, string description, intended to apply to all operations in this path.
     * CommonMark syntax MAY be used for rich text representation.
     */
    description?: string;
    /**
     * A definition of a GET operation on this path.
     */
    get?: Operation;
    /**
     * A definition of a PUT operation on this path.
     */
    put?: Operation;
    /**
     * A definition of a POST operation on this path.
     */
    post?: Operation;
    /**
     * A definition of a DELETE operation on this path.
     */
    delete?: Operation;
    /**
     * A definition of a OPTIONS operation on this path.
     */
    options?: Operation;
    /**
     * A definition of a HEAD operation on this path.
     */
    head?: Operation;
    /**
     * A definition of a PATCH operation on this path.
     */
    patch?: Operation;
    /**
     * A definition of a TRACE operation on this path.
     */
    trace?: Operation;
    /**
     * A list of parameters that are applicable for all the operations described under this path. These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.
     */
    parameters?: Array<Parameter | Reference>;
  }

  export interface XML {
    /**
     * 	Replaces the name of the element/attribute used for the described schema property. When defined within items, it will affect the name of the individual XML elements within the list. When defined alongside type being array (outside the items), it will affect the wrapping element and only if wrapped is true. If wrapped is false, it will be ignored.
     */
    name?: string;
    /**
     * The URI of the namespace definition. Value MUST be in the form of an absolute URI.
     */
    namespace?: string;
    /**
     * The prefix to be used for the name.
     */
    prefix?: string;
    /**
     * Declares whether the property definition translates to an attribute instead of an element. Default value is false.
     */
    attribute?: boolean;
    /**
     * MAY be used only for an array definition. Signifies whether the array is wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false. The definition takes effect only when defined alongside type being array (outside the items).
     */
    wrapped?: boolean;
  }

  export interface Schema {
    /**
     * Allows sending a null value for the defined schema. Default value is false.
     */
    nullable?: boolean;
    /**
     * Relevant only for Schema "properties" definitions. Declares the property as "read only". This means that it MAY be sent as part of a response but SHOULD NOT be sent as part of the request. If the property is marked as readOnly being true and is in the required list, the required will take effect on the response only. A property MUST NOT be marked as both readOnly and writeOnly being true. Default value is false.
     */
    readOnly?: boolean;
    /**
     * Relevant only for Schema "properties" definitions. Declares the property as "write only". Therefore, it MAY be sent as part of a request but SHOULD NOT be sent as part of the response. If the property is marked as writeOnly being true and is in the required list, the required will take effect on the request only. A property MUST NOT be marked as both readOnly and writeOnly being true. Default value is false.
     */
    writeOnly?: boolean;
    /**
     * This MAY be used only on properties schemas. It has no effect on root schemas. Adds additional metadata to describe the XML representation of this property.
     */
    xml?: XML;
    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;
  }

  export interface Components {
    /**
     * An object to hold reusable Schema Objects.
     */
    schemas?: Record<string, Schema | Reference>;
  }

  export interface OpenAPI {
    /**
     * This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses.
     * The openapi field SHOULD be used by tooling specifications and clients to interpret the OpenAPI document.
     * This is not related to the API info.version string.
     */
    openapi: string;
    /**
     * Provides metadata about the API. The metadata MAY be used by tooling as required.
     */
    info: Info;
    /**
     * The available paths and operations for the API.
     */
    paths: {
      [path: string]: PathItem;
    };
    /**
     * An element to hold various schemas for the specification.
     */
    components?: Components;
  }
}
