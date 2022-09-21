import {
  GraphQLSchema,
  isObjectType,
  isInputObjectType,
  isIntrospectionType,
} from 'graphql';
import { dump as YAMLstringify } from 'js-yaml';
import { writeFileSync } from 'fs';

import { buildSchemaObjectFromType } from './types';
import { buildPathFromOperation } from './operations';
import { RouteInfo } from '../types';
import { OpenAPI } from './interfaces';

export function OpenAPI({
  schema,
  info,
  servers,
  components,
  security,
  tags,
  customScalars = {},
}: {
  schema: GraphQLSchema;
  info: Record<string, any>;
  servers?: Record<string, any>[];
  components?: Record<string, any>;
  security?: Record<string, any>[];
  tags?: Record<string, any>[];
  /**
   * Override mapping of custom scalars to OpenAPI
   * @example
   * ```js
   * {
   *   Date: { type: "string",  format: "date" }
   * }
   * ```
   */
  customScalars?: Record<string, any>;
}) {
  const types = schema.getTypeMap();
  const swagger: any = {
    openapi: '3.0.0',
    info,
    servers,
    tags: [],
    paths: {},
    components: {
      schemas: {},
    },
  };

  for (const typeName in types) {
    const type = types[typeName];

    if (
      (isObjectType(type) || isInputObjectType(type)) &&
      !isIntrospectionType(type)
    ) {
      swagger.components!.schemas![typeName] = buildSchemaObjectFromType(type, {
        customScalars,
      });
    }
  }

  if (components) {
    swagger.components = { ...components, ...swagger.components };
  }

  if (security) {
    swagger.security = security;
  }

  if (tags) {
    swagger.tags = tags;
  }

  return {
    addRoute(
      info: RouteInfo,
      config?: {
        basePath?: string;
      }
    ) {
      const basePath = config?.basePath || '';
      const path =
        basePath +
        info.path.replace(
          /\:[a-z0-9]+\w/i,
          (param) => `{${param.replace(':', '')}}`
        );

      if (!swagger.paths[path]) {
        swagger.paths[path] = {};
      }

      swagger.paths[path][info.method.toLowerCase()] = buildPathFromOperation({
        url: path,
        operation: info.document,
        schema,
        useRequestBody: ['POST', 'PUT', 'PATCH'].includes(info.method),
        tags: info.tags || [],
        description: info.description || '',
        customScalars,
      });
    },
    get() {
      return swagger;
    },
    save(filepath: string) {
      const isJSON = /\.json$/i;
      const isYAML = /.ya?ml$/i;

      if (isJSON.test(filepath)) {
        writeOutput(filepath, JSON.stringify(swagger, null, 2));
      } else if (isYAML.test(filepath)) {
        writeOutput(filepath, YAMLstringify(swagger));
      } else {
        throw new Error('We only support JSON and YAML files');
      }
    },
  };
}

function writeOutput(filepath: string, contents: string) {
  writeFileSync(filepath, contents, {
    encoding: 'utf-8',
  });
}
