import meta from "../../../src/pages/_meta.ts";
import docs_meta from "../../../src/pages/docs/_meta.ts";
import docs_api_meta from "../../../src/pages/docs/api/_meta.ts";
import docs_essentials_meta from "../../../src/pages/docs/essentials/_meta.ts";
import docs_recipes_meta from "../../../src/pages/docs/recipes/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "docs",
  route: "/docs",
  children: [{
    data: docs_meta
  }, {
    name: "api",
    route: "/docs/api",
    children: [{
      data: docs_api_meta
    }, {
      name: "context",
      route: "/docs/api/context",
      frontMatter: {
        "description": "Learn how to provide a context to a GraphQL Schema using Sofa. Use a factory function or pass data directly to create your context object. #GraphQL #Sofa",
        "sidebarTitle": "Context"
      }
    }, {
      name: "error-handler",
      route: "/docs/api/error-handler",
      frontMatter: {
        "description": "Improve error handling in GraphQL with Sofa. Learn how to add a custom errorHandler function to log and format errors for a better user experience. #GraphQL #Sofa",
        "sidebarTitle": "Error Handler"
      }
    }, {
      name: "execute",
      route: "/docs/api/execute",
      frontMatter: {
        "description": "Take control of your GraphQL execution with Sofa. Learn how to pass your own logic using the execute function for custom operations, even with remote GraphQL servers. #GraphQL #Sofa",
        "sidebarTitle": "Execute"
      }
    }, {
      name: "ignore",
      route: "/docs/api/ignore",
      frontMatter: {
        "description": "Simplify GraphQL object handling with Sofa. Learn how to ignore the default ID behavior and send entire objects using the ignore parameter. #GraphQL #Sofa",
        "sidebarTitle": "Ignore"
      }
    }, {
      name: "method",
      route: "/docs/api/method",
      frontMatter: {
        "description": "Customize your GraphQL endpoint's HTTP method with Sofa. Learn how to easily switch between GET and POST using the routes parameter for specific queries or mutations. #GraphQL #Sofa",
        "sidebarTitle": "Method"
      }
    }, {
      name: "models",
      route: "/docs/api/models",
      frontMatter: {
        "description": "Learn how Sofa handles nested data and Models in GraphQL. Use Models to avoid exposing full objects in every response and fetch single entities by ID. #GraphQL #Sofa",
        "sidebarTitle": "Models"
      }
    }]
  }, {
    name: "essentials",
    route: "/docs/essentials",
    children: [{
      data: docs_essentials_meta
    }, {
      name: "mutations",
      route: "/docs/essentials/mutations",
      frontMatter: {
        "description": "Learn how to use mutations in Sofa, which transform into POST requests and require body-parser.json() middleware or URL parameters. #GraphQL",
        "sidebarTitle": "Mutations"
      }
    }, {
      name: "queries",
      route: "/docs/essentials/queries",
      frontMatter: {
        "description": "Learn how Sofa handles GraphQL queries, transforming them into GET requests. Example code provided to demonstrate query implementation with Sofa. #GraphQL",
        "sidebarTitle": "Queries"
      }
    }, {
      name: "subscriptions",
      route: "/docs/essentials/subscriptions",
      frontMatter: {
        "description": "Learn how to use Sofa to run GraphQL Subscriptions through Webhooks by starting, updating, and stopping a subscription with POST, DELETE, and PUT requests. #GraphQL",
        "sidebarTitle": "Subscriptions"
      }
    }]
  }, {
    name: "index",
    route: "/docs",
    frontMatter: {
      "title": "GraphQL vs REST",
      "description": "Sofa API: A GraphQL library to create fully RESTful and configurable API gateway. Get benefits of GraphQL and REST, support existing clients and generate documentation. Try now! #GraphQL #Sofa"
    }
  }, {
    name: "recipes",
    route: "/docs/recipes",
    children: [{
      data: docs_recipes_meta
    }, {
      name: "open-api",
      route: "/docs/recipes/open-api",
      frontMatter: {
        "description": "Generate OpenAPI (Swagger) definitions from your GraphQL API using Sofa. Endless possibilities. Use OpenAPI and useSofa from sofa-api to create the Swagger definitions out of your schema. Add the routes to OpenAPI and save the file to './swagger.json'. #GraphQL",
        "sidebarTitle": "Open API"
      }
    }]
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Home"
  }
}];