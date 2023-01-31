export function mapToPrimitive(type: string) {
  const formatMap: Record<string, any> = {
    Int: {
      type: 'integer',
      format: 'int32',
    },
    Float: {
      type: 'number',
      format: 'float',
    },
    String: {
      type: 'string',
    },
    Boolean: {
      type: 'boolean',
    },
    ID: {
      type: 'string',
    },
  };

  if (formatMap[type]) {
    return formatMap[type];
  }
}

export function mapToRef(type: string) {
  return `#/components/schemas/${type}`;
}

export function normalizePathParamForOpenAPI(path: string) {
  const pathParts = path.split('/');
  const normalizedPathParts = pathParts.map((part) => {
    if (part.startsWith(':')) {
      return `{${part.slice(1)}}`;
    }

    return part;
  });
  return normalizedPathParts.join('/');
}