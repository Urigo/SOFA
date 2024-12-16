(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [797],
  {
    7905: (e, i, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/docs',
        function () {
          return s(1639);
        },
      ]);
    },
    1639: (e, i, s) => {
      'use strict';
      s.r(i), s.d(i, { default: () => p, useTOC: () => h });
      var t = s(4848),
        a = s(7849),
        n = s(3663),
        r = s(1355),
        o = s(8272),
        d = s(2097);
      function h(e) {
        return [
          { value: 'Installation', id: 'installation', depth: 2 },
          { value: 'Usage', id: 'usage', depth: 2 },
        ];
      }
      function l(e, i) {
        throw Error(
          'Expected ' +
            (i ? 'component' : 'object') +
            ' `' +
            e +
            '` to be defined: you likely forgot to import, pass, or provide it.'
        );
      }
      let p = (0, a.e)(
        function (e) {
          let { toc: i = h(e) } = e,
            s = {
              code: 'code',
              h1: 'h1',
              h2: 'h2',
              li: 'li',
              p: 'p',
              pre: 'pre',
              span: 'span',
              strong: 'strong',
              ul: 'ul',
              ...(0, r.R)(),
              ...e.components,
            };
          return (
            o.t || l('$Tabs', !1),
            o.t.Tab || l('$Tabs.Tab', !0),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(s.h1, { children: 'Getting Started' }),
                '\n',
                (0, t.jsx)(s.p, {
                  children:
                    'An open source library you install on your GraphQL server to create a fully RESTful and configurable API gateway.',
                }),
                '\n',
                (0, t.jsxs)(s.ul, {
                  children: [
                    '\n',
                    (0, t.jsx)(s.li, {
                      children: (0, t.jsx)(s.strong, {
                        children: 'Don’t choose between REST and GraphQL',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(s.li, {
                      children: [
                        'Get most of the ',
                        (0, t.jsx)(s.strong, {
                          children: 'benefits of GraphQL',
                        }),
                        ' on the backend and frontend, while using and ',
                        (0, t.jsx)(s.strong, { children: 'exposing REST' }),
                      ],
                    }),
                    '\n',
                    (0, t.jsxs)(s.li, {
                      children: [
                        (0, t.jsx)(s.strong, {
                          children: 'Support all your existing clients',
                        }),
                        ' with REST while improving your backend stack with GraphQL',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.li, {
                      children:
                        'Create custom, perfectly client-aligned REST endpoints for your frontend simply by naming a route and attaching a query',
                    }),
                    '\n',
                    (0, t.jsx)(s.li, {
                      children:
                        'In the other way around (REST to GraphQL) you won’t get the best of both worlds. Instead just less powerful, harder-to-maintain server implementations with a some of the benefits of GraphQL. It can be a good and fast start for a migration though.',
                    }),
                    '\n',
                    (0, t.jsxs)(s.li, {
                      children: [
                        'Fully ',
                        (0, t.jsx)(s.strong, {
                          children: 'generated documentation',
                        }),
                        ' that is always up-to-date',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.li, {
                      children: (0, t.jsx)(s.strong, {
                        children: 'GraphQL Subscriptions as Webhooks',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsx)(s.h2, { id: i[0].id, children: i[0].value }),
                '\n',
                (0, t.jsx)(s.p, { children: 'Install Sofa:' }),
                '\n',
                (0, t.jsxs)(o.t, {
                  items: ['npm', 'pnpm', 'yarn', 'bun'],
                  storageKey: 'selectedPackageManager',
                  children: [
                    (0, t.jsx)(o.t.Tab, {
                      children: (0, t.jsx)(s.pre, {
                        icon: d.k3,
                        tabIndex: '0',
                        'data-language': 'sh',
                        'data-word-wrap': '',
                        'data-copy': '',
                        children: (0, t.jsx)(s.code, {
                          children: (0, t.jsxs)(s.span, {
                            children: [
                              (0, t.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#6F42C1',
                                  '--shiki-dark': '#B392F0',
                                },
                                children: 'npm',
                              }),
                              (0, t.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' i',
                              }),
                              (0, t.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' sofa-api',
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, t.jsx)(o.t.Tab, {
                      children: (0, t.jsx)(s.pre, {
                        icon: d.k3,
                        tabIndex: '0',
                        'data-language': 'sh',
                        'data-word-wrap': '',
                        'data-copy': '',
                        children: (0, t.jsx)(s.code, {
                          children: (0, t.jsxs)(s.span, {
                            children: [
                              (0, t.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#6F42C1',
                                  '--shiki-dark': '#B392F0',
                                },
                                children: 'pnpm',
                              }),
                              (0, t.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' add',
                              }),
                              (0, t.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' sofa-api',
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, t.jsx)(o.t.Tab, {
                      children: (0, t.jsx)(s.pre, {
                        icon: d.k3,
                        tabIndex: '0',
                        'data-language': 'sh',
                        'data-word-wrap': '',
                        'data-copy': '',
                        children: (0, t.jsx)(s.code, {
                          children: (0, t.jsxs)(s.span, {
                            children: [
                              (0, t.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#6F42C1',
                                  '--shiki-dark': '#B392F0',
                                },
                                children: 'yarn',
                              }),
                              (0, t.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' add',
                              }),
                              (0, t.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' sofa-api',
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, t.jsx)(o.t.Tab, {
                      children: (0, t.jsx)(s.pre, {
                        icon: d.k3,
                        tabIndex: '0',
                        'data-language': 'sh',
                        'data-word-wrap': '',
                        'data-copy': '',
                        children: (0, t.jsx)(s.code, {
                          children: (0, t.jsxs)(s.span, {
                            children: [
                              (0, t.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#6F42C1',
                                  '--shiki-dark': '#B392F0',
                                },
                                children: 'bun',
                              }),
                              (0, t.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' add',
                              }),
                              (0, t.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' sofa-api',
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                '\n',
                (0, t.jsx)(s.h2, { id: i[1].id, children: i[1].value }),
                '\n',
                (0, t.jsx)(s.pre, {
                  icon: d.js,
                  tabIndex: '0',
                  'data-language': 'js',
                  'data-word-wrap': '',
                  'data-copy': '',
                  children: (0, t.jsxs)(s.code, {
                    children: [
                      (0, t.jsxs)(s.span, {
                        children: [
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#D73A49',
                              '--shiki-dark': '#F97583',
                            },
                            children: 'import',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ' { useSofa } ',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#D73A49',
                              '--shiki-dark': '#F97583',
                            },
                            children: 'from',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#032F62',
                              '--shiki-dark': '#9ECBFF',
                            },
                            children: " 'sofa-api'",
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ';',
                          }),
                        ],
                      }),
                      '\n',
                      (0, t.jsxs)(s.span, {
                        children: [
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#D73A49',
                              '--shiki-dark': '#F97583',
                            },
                            children: 'import',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ' express ',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#D73A49',
                              '--shiki-dark': '#F97583',
                            },
                            children: 'from',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#032F62',
                              '--shiki-dark': '#9ECBFF',
                            },
                            children: " 'express'",
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ';',
                          }),
                        ],
                      }),
                      '\n',
                      (0, t.jsx)(s.span, { children: ' ' }),
                      '\n',
                      (0, t.jsxs)(s.span, {
                        children: [
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#D73A49',
                              '--shiki-dark': '#F97583',
                            },
                            children: 'const',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: ' app',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#D73A49',
                              '--shiki-dark': '#F97583',
                            },
                            children: ' =',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#6F42C1',
                              '--shiki-dark': '#B392F0',
                            },
                            children: ' express',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: '();',
                          }),
                        ],
                      }),
                      '\n',
                      (0, t.jsx)(s.span, { children: ' ' }),
                      '\n',
                      (0, t.jsxs)(s.span, {
                        children: [
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: 'app.',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#6F42C1',
                              '--shiki-dark': '#B392F0',
                            },
                            children: 'use',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: '(',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#032F62',
                              '--shiki-dark': '#9ECBFF',
                            },
                            children: "'/api'",
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ', ',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#6F42C1',
                              '--shiki-dark': '#B392F0',
                            },
                            children: 'useSofa',
                          }),
                          (0, t.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: '({ schema }));',
                          }),
                        ],
                      }),
                      '\n',
                      (0, t.jsx)(s.span, { children: ' ' }),
                      '\n',
                      (0, t.jsx)(s.span, {
                        children: (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#6A737D',
                            '--shiki-dark': '#6A737D',
                          },
                          children: '// GET  /api/messages',
                        }),
                      }),
                      '\n',
                      (0, t.jsx)(s.span, {
                        children: (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#6A737D',
                            '--shiki-dark': '#6A737D',
                          },
                          children: '// POST /api/add-message',
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        '/docs',
        {
          filePath: 'src/pages/docs/index.mdx',
          timestamp: 1700759003e3,
          pageMap: n.O,
          frontMatter: {
            title: 'GraphQL vs REST',
            description:
              'Sofa API: A GraphQL library to create fully RESTful and configurable API gateway. Get benefits of GraphQL and REST, support existing clients and generate documentation. Try now! #GraphQL #Sofa',
          },
          title: 'GraphQL vs REST',
        },
        'undefined' == typeof RemoteContent ? h : RemoteContent.useTOC
      );
    },
    3663: (e, i, s) => {
      'use strict';
      s.d(i, { O: () => t });
      let t = [
        {
          data: {
            index: {
              title: 'Home',
              type: 'page',
              display: 'hidden',
              theme: { layout: 'raw' },
            },
            docs: { title: 'Documentation', type: 'page' },
          },
        },
        {
          name: 'docs',
          route: '/docs',
          children: [
            {
              data: {
                index: 'Introduction',
                essentials: 'Essentials',
                recipes: 'Recipes',
                api: 'API',
              },
            },
            {
              name: 'api',
              route: '/docs/api',
              children: [
                {
                  data: {
                    models: 'Nested Data and Models',
                    context: 'Using Context',
                    ignore: 'Using Objects Instead of IDs',
                    execute: 'Custom Execute Phase',
                    'error-handler': 'Error Handling',
                    method: "Customize Endpoint's HTTP Method",
                  },
                },
                {
                  name: 'context',
                  route: '/docs/api/context',
                  frontMatter: {
                    description:
                      'Learn how to provide a context to a GraphQL Schema using Sofa. Use a factory function or pass data directly to create your context object. #GraphQL #Sofa',
                    sidebarTitle: 'Context',
                  },
                },
                {
                  name: 'error-handler',
                  route: '/docs/api/error-handler',
                  frontMatter: {
                    description:
                      'Improve error handling in GraphQL with Sofa. Learn how to add a custom errorHandler function to log and format errors for a better user experience. #GraphQL #Sofa',
                    sidebarTitle: 'Error Handler',
                  },
                },
                {
                  name: 'execute',
                  route: '/docs/api/execute',
                  frontMatter: {
                    description:
                      'Take control of your GraphQL execution with Sofa. Learn how to pass your own logic using the execute function for custom operations, even with remote GraphQL servers. #GraphQL #Sofa',
                    sidebarTitle: 'Execute',
                  },
                },
                {
                  name: 'ignore',
                  route: '/docs/api/ignore',
                  frontMatter: {
                    description:
                      'Simplify GraphQL object handling with Sofa. Learn how to ignore the default ID behavior and send entire objects using the ignore parameter. #GraphQL #Sofa',
                    sidebarTitle: 'Ignore',
                  },
                },
                {
                  name: 'method',
                  route: '/docs/api/method',
                  frontMatter: {
                    description:
                      "Customize your GraphQL endpoint's HTTP method with Sofa. Learn how to easily switch between GET and POST using the routes parameter for specific queries or mutations. #GraphQL #Sofa",
                    sidebarTitle: 'Method',
                  },
                },
                {
                  name: 'models',
                  route: '/docs/api/models',
                  frontMatter: {
                    description:
                      'Learn how Sofa handles nested data and Models in GraphQL. Use Models to avoid exposing full objects in every response and fetch single entities by ID. #GraphQL #Sofa',
                    sidebarTitle: 'Models',
                  },
                },
              ],
            },
            {
              name: 'essentials',
              route: '/docs/essentials',
              children: [
                {
                  data: {
                    queries: 'Queries',
                    mutations: 'Mutations',
                    subscriptions: 'Subscriptions',
                  },
                },
                {
                  name: 'mutations',
                  route: '/docs/essentials/mutations',
                  frontMatter: {
                    description:
                      'Learn how to use mutations in Sofa, which transform into POST requests and require body-parser.json() middleware or URL parameters. #GraphQL',
                    sidebarTitle: 'Mutations',
                  },
                },
                {
                  name: 'queries',
                  route: '/docs/essentials/queries',
                  frontMatter: {
                    description:
                      'Learn how Sofa handles GraphQL queries, transforming them into GET requests. Example code provided to demonstrate query implementation with Sofa. #GraphQL',
                    sidebarTitle: 'Queries',
                  },
                },
                {
                  name: 'subscriptions',
                  route: '/docs/essentials/subscriptions',
                  frontMatter: {
                    description:
                      'Learn how to use Sofa to run GraphQL Subscriptions through Webhooks by starting, updating, and stopping a subscription with POST, DELETE, and PUT requests. #GraphQL',
                    sidebarTitle: 'Subscriptions',
                  },
                },
              ],
            },
            {
              name: 'index',
              route: '/docs',
              frontMatter: {
                title: 'GraphQL vs REST',
                description:
                  'Sofa API: A GraphQL library to create fully RESTful and configurable API gateway. Get benefits of GraphQL and REST, support existing clients and generate documentation. Try now! #GraphQL #Sofa',
              },
            },
            {
              name: 'recipes',
              route: '/docs/recipes',
              children: [
                { data: { 'open-api': 'OpenAPI (Swagger)' } },
                {
                  name: 'open-api',
                  route: '/docs/recipes/open-api',
                  frontMatter: {
                    description:
                      "Generate OpenAPI (Swagger) definitions from your GraphQL API using Sofa. Endless possibilities. Use OpenAPI and useSofa from sofa-api to create the Swagger definitions out of your schema. Add the routes to OpenAPI and save the file to './swagger.json'. #GraphQL",
                    sidebarTitle: 'Open API',
                  },
                },
              ],
            },
          ],
        },
        { name: 'index', route: '/', frontMatter: { title: 'Home' } },
      ];
    },
  },
  (e) => {
    var i = (i) => e((e.s = i));
    e.O(0, [874, 636, 593, 792], () => i(7905)), (_N_E = e.O());
  },
]);
