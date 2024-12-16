(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [800],
  {
    1552: (e, i, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/docs/api/error-handler',
        function () {
          return s(9467);
        },
      ]);
    },
    9467: (e, i, s) => {
      'use strict';
      s.r(i), s.d(i, { default: () => h, useTOC: () => o });
      var r = s(4848),
        t = s(7849),
        n = s(3663),
        a = s(1355);
      function o(e) {
        return [];
      }
      let h = (0, t.e)(
        function (e) {
          let i = {
            code: 'code',
            h1: 'h1',
            p: 'p',
            pre: 'pre',
            span: 'span',
            ...(0, a.R)(),
            ...e.components,
          };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(i.h1, { children: 'Error Handling' }),
              '\n',
              (0, r.jsxs)(i.p, {
                children: [
                  'By default, Sofa returns a response that includes JSON representation of thrown error object from GraphQL with HTTP status code 500. But, you can enhance error handler by adding your ',
                  (0, r.jsx)(i.code, { children: 'errorHandler' }),
                  ' function.',
                ],
              }),
              '\n',
              (0, r.jsx)(i.pre, {
                tabIndex: '0',
                'data-language': 'typescript',
                'data-word-wrap': '',
                'data-copy': '',
                children: (0, r.jsxs)(i.code, {
                  children: [
                    (0, r.jsxs)(i.span, {
                      children: [
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: 'api.',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#6F42C1',
                            '--shiki-dark': '#B392F0',
                          },
                          children: 'use',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '(',
                        }),
                      ],
                    }),
                    '\n',
                    (0, r.jsxs)(i.span, {
                      children: [
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#032F62',
                            '--shiki-dark': '#9ECBFF',
                          },
                          children: "  '/api'",
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ',',
                        }),
                      ],
                    }),
                    '\n',
                    (0, r.jsxs)(i.span, {
                      children: [
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#6F42C1',
                            '--shiki-dark': '#B392F0',
                          },
                          children: '  useSofa',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '({',
                        }),
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(i.span, {
                      children: (0, r.jsx)(i.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '    schema,',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(i.span, {
                      children: [
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#6F42C1',
                            '--shiki-dark': '#B392F0',
                          },
                          children: '    errorHandler',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '(',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#E36209',
                            '--shiki-dark': '#FFAB70',
                          },
                          children: 'errs',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ') {',
                        }),
                      ],
                    }),
                    '\n',
                    (0, r.jsxs)(i.span, {
                      children: [
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#6F42C1',
                            '--shiki-dark': '#B392F0',
                          },
                          children: '      logErrors',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '(errors);',
                        }),
                      ],
                    }),
                    '\n',
                    (0, r.jsxs)(i.span, {
                      children: [
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#D73A49',
                            '--shiki-dark': '#F97583',
                          },
                          children: '      return',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#D73A49',
                            '--shiki-dark': '#F97583',
                          },
                          children: ' new',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#6F42C1',
                            '--shiki-dark': '#B392F0',
                          },
                          children: ' Response',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '(',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#6F42C1',
                            '--shiki-dark': '#B392F0',
                          },
                          children: 'formatError',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '(errs[',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: '0',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ']), {',
                        }),
                      ],
                    }),
                    '\n',
                    (0, r.jsxs)(i.span, {
                      children: [
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '        status: ',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: '500',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ',',
                        }),
                      ],
                    }),
                    '\n',
                    (0, r.jsxs)(i.span, {
                      children: [
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '        headers: { ',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#032F62',
                            '--shiki-dark': '#9ECBFF',
                          },
                          children: "'Content-Type'",
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ': ',
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#032F62',
                            '--shiki-dark': '#9ECBFF',
                          },
                          children: "'application/json'",
                        }),
                        (0, r.jsx)(i.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ' },',
                        }),
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(i.span, {
                      children: (0, r.jsx)(i.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '      });',
                      }),
                    }),
                    '\n',
                    (0, r.jsx)(i.span, {
                      children: (0, r.jsx)(i.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '    },',
                      }),
                    }),
                    '\n',
                    (0, r.jsx)(i.span, {
                      children: (0, r.jsx)(i.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '  })',
                      }),
                    }),
                    '\n',
                    (0, r.jsx)(i.span, {
                      children: (0, r.jsx)(i.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: ');',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        '/docs/api/error-handler',
        {
          filePath: 'src/pages/docs/api/error-handler.mdx',
          timestamp: 1678967172e3,
          pageMap: n.O,
          frontMatter: {
            description:
              'Improve error handling in GraphQL with Sofa. Learn how to add a custom errorHandler function to log and format errors for a better user experience. #GraphQL #Sofa',
          },
          title: 'Error Handling',
        },
        'undefined' == typeof RemoteContent ? o : RemoteContent.useTOC
      );
    },
    1355: (e, i, s) => {
      'use strict';
      s.d(i, { R: () => h });
      var r = s(8453),
        t = s(9965),
        n = s.n(t),
        a = s(6540);
      let o = {
          img: (e) =>
            (0, a.createElement)('object' == typeof e.src ? n() : 'img', e),
        },
        h = (e) => ({ ...o, ...(0, r.R)(e) });
    },
    7849: (e, i, s) => {
      'use strict';
      s.d(i, { e: () => d });
      var r = s(4848),
        t = s(3032),
        n = s(356);
      let a = (0, s(6540).createContext)({}),
        o = a.Provider;
      a.displayName = 'SSG';
      var h = s(1355);
      function d(e, i, s, r) {
        let n = globalThis[t.VZ];
        return (
          (n.route = i),
          (n.pageMap = s.pageMap),
          (n.context[i] = { Content: e, pageOpts: s, useTOC: r }),
          l
        );
      }
      function l({ __nextra_pageMap: e = [], __nextra_dynamic_opts: i, ...s }) {
        let a = globalThis[t.VZ],
          { Layout: h, themeConfig: d } = a,
          { route: l, locale: c } = (0, n.r)(),
          u = a.context[l];
        if (!u)
          throw Error(
            `No content found for the "${l}" route. Please report it as a bug.`
          );
        let { pageOpts: E, useTOC: k, Content: f } = u;
        if (l.startsWith('/[')) E.pageMap = e;
        else
          for (let { route: i, children: s } of e) {
            let e = i.split('/').slice(c ? 2 : 1);
            (function e(i, [s, ...r]) {
              for (let t of i)
                if ('children' in t && s === t.name)
                  return r.length ? e(t.children, r) : t;
            })(E.pageMap, e).children = s;
          }
        if (i) {
          let { title: e, frontMatter: s } = i;
          E = { ...E, title: e, frontMatter: s };
        }
        return (0, r.jsx)(h, {
          themeConfig: d,
          pageOpts: E,
          pageProps: s,
          children: (0, r.jsx)(o, {
            value: s,
            children: (0, r.jsx)(p, {
              useTOC: k,
              children: (0, r.jsx)(f, { ...s }),
            }),
          }),
        });
      }
      function p({ children: e, useTOC: i }) {
        let { wrapper: s } = (0, h.R)();
        return (0, r.jsx)(c, { useTOC: i, wrapper: s, children: e });
      }
      function c({ children: e, useTOC: i, wrapper: s, ...t }) {
        let n = i(t);
        return s ? (0, r.jsx)(s, { toc: n, children: e }) : e;
      }
    },
    3663: (e, i, s) => {
      'use strict';
      s.d(i, { O: () => r });
      let r = [
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
    e.O(0, [636, 593, 792], () => i(1552)), (_N_E = e.O());
  },
]);
