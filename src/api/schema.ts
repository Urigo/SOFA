import { makeExecutableSchema, addResolveFunctionsToSchema } from 'graphql-tools';
import { GraphQLSchema, printSchema, GraphQLResolveInfo, StringValueNode } from 'graphql';

export function extendSchema(config: {
  // schema: GraphQLSchema;
  modelMap: {
    [modelName: string]: (id: any, context: any) => any;
  };
}) {
  const typeDefs = `
    union RESTModel = ${Object.keys(config.modelMap).join(' | ')}

    extend type Query {
      _getRESTModelById(typename: String!, id: ID!): RESTModel
    }
  `;

  const resolvers = {
    RESTModel: {
      __resolveType(model: { typename: string }, context: any, info: GraphQLResolveInfo) {
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
        args: { id: any; typename: string },
        context: any,
      ) {
        const resolver = config.modelMap[args.typename];

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

  // const schemaWithREST = makeExecutableSchema({
  //   typeDefs: [printSchema(config.schema), typeDefs],
  //   resolvers: resolvers as any,
  // });

  // return schemaWithREST;

  // extend type Query {
  //   _getRESTModelById(typename: String!, id: ID!): RESTModel
  // }
  //
  // union RESTModel = EVERY | SINGLE | TYPE | SPECIFIED | IN | CONFIG.MODELS
  //
  // then the resolver created a user decides what how to fetch data for each type, based on `id` and `typename`
  //
  // const resolvers = {
  //   Query: {
  //     _getRESTModelById(_, {id, typename}, context, info) {
  //       switch (typename) {
  //         case 'Post':
  //           return { typename, data: fetchPost(id) };
  //         case 'User':
  //           return { typename, data: fetchUser(id) };
  //       }
  //     }
  //   },
  //   RESTModel: {
  //     __resolveType(model: { typename: string }) {
  //       return model.typename;
  //     }
  //   }
  // };
}
