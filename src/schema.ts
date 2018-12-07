import { GraphQLResolveInfo, StringValueNode } from 'graphql';

export function extendSchema({
  modelMap
}: {
  modelMap: {
    [modelName: string]: (id: string, context: any) => any;
  };
}) {
  const typeDefs = `
    union RESTModel = ${Object.keys(modelMap).join(' | ')}

    extend type Query {
      _getRESTModelById(typename: String!, id: ID!): RESTModel
    }
  `;

  const resolvers = {
    RESTModel: {
      __resolveType(_: any, _context: any, info: GraphQLResolveInfo) {
        // we can find the typename thanks to info object and typename argument
        const firstField = info.operation.selectionSet.selections[0];
        if (firstField.kind !== 'Field') {
          throw new Error('RESTModel can be used only with _getRESTModelById!')
        } else {
          const typename = firstField.arguments!.find(arg => arg.name.value === 'typename')!;
          return (typename.value as StringValueNode).value;
        }
      },
    },
    Query: {
      _getRESTModelById(
        _: any,
        args: { id: string; typename: string },
        context: any,
      ) {
        const resolver = modelMap[args.typename];

        if (!resolver) {
          throw new Error(`Missing resolver for ${args.typename} model`);
        }

        return resolver(args.id, context);
      },
    },
  };

  return {
    typeDefs,
    resolvers
  };
}
