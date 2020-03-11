import {
  GraphQLSchema,
  isObjectType,
  isInputObjectType,
  isIntrospectionType,
} from 'graphql';
import { stringify as YAMLstringify } from 'yamljs';
import { writeFileSync } from 'fs';

import { buildSchemaObjectFromType } from './types';
import { buildPathFromOperation } from './operations';
import { RouteInfo } from '../types';
import { OpenAPI } from './interfaces';

export function OpenAPI({
  schema,
  info,
  components,
  security,
}: {
  schema: GraphQLSchema;
  info: Record<string, any>;
  components?: Record<string, any>;
  security?: Record<string, any>[];
}) {
  const types = schema.getTypeMap();
  const swagger: any = {
    openapi: '3.0.0',
    info,
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
      swagger.components!.schemas![typeName] = buildSchemaObjectFromType(type);
    }
  }

  if (components) {
    swagger.components = { ...components, ...swagger.components };
  }

  if (security) {
    swagger.security = security;
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
          param => `{${param.replace(':', '')}}`
        );

      if (!swagger.paths[path]) {
        swagger.paths[path] = {};
      }

      swagger.paths[path][info.method.toLowerCase()] = buildPathFromOperation({
        url: path,
        operation: info.document,
        schema,
        useRequestBody: ['POST', 'PUT', 'PATCH'].includes(info.method),
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
        writeOutput(filepath, YAMLstringify(swagger, Infinity));
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
