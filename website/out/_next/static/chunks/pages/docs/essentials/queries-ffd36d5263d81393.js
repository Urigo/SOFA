(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [590],
  {
    9612: (e, t, i) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/docs/essentials/queries',
        function () {
          return i(9373);
        },
      ]);
    },
    9373: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { default: () => h, useTOC: () => d });
      var s = i(4848),
        r = i(7849),
        n = i(3663),
        a = i(1355),
        o = i(2097);
      function d(e) {
        return [];
      }
      let h = (0, r.e)(
        function (e) {
          let t = {
            code: 'code',
            h1: 'h1',
            p: 'p',
            pre: 'pre',
            span: 'span',
            ...(0, a.R)(),
            ...e.components,
          };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(t.h1, { children: 'Queries' }),
              '\n',
              (0, s.jsx)(t.p, {
                children: 'Queries are transformed into GET requests.',
              }),
              '\n',
              (0, s.jsx)(t.p, { children: 'Given the following example:' }),
              '\n',
              (0, s.jsx)(t.pre, {
                icon: o.hf,
                tabIndex: '0',
                'data-language': 'graphql',
                'data-word-wrap': '',
                'data-copy': '',
                children: (0, s.jsxs)(t.code, {
                  children: [
                    (0, s.jsxs)(t.span, {
                      children: [
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#D73A49',
                            '--shiki-dark': '#F97583',
                          },
                          children: 'type',
                        }),
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: ' Comment',
                        }),
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ' {',
                        }),
                      ],
                    }),
                    '\n',
                    (0, s.jsxs)(t.span, {
                      children: [
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#E36209',
                            '--shiki-dark': '#FFAB70',
                          },
                          children: '  id',
                        }),
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ': ',
                        }),
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: 'ID',
                        }),
                      ],
                    }),
                    '\n',
                    (0, s.jsxs)(t.span, {
                      children: [
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#E36209',
                            '--shiki-dark': '#FFAB70',
                          },
                          children: '  text',
                        }),
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ': ',
                        }),
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: 'String',
                        }),
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(t.span, {
                      children: (0, s.jsx)(t.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '}',
                      }),
                    }),
                    '\n',
                    (0, s.jsx)(t.span, { children: ' ' }),
                    '\n',
                    (0, s.jsxs)(t.span, {
                      children: [
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#D73A49',
                            '--shiki-dark': '#F97583',
                          },
                          children: 'type',
                        }),
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: ' Query',
                        }),
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ' {',
                        }),
                      ],
                    }),
                    '\n',
                    (0, s.jsxs)(t.span, {
                      children: [
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#E36209',
                            '--shiki-dark': '#FFAB70',
                          },
                          children: '  comments',
                        }),
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ': [',
                        }),
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: 'Comment',
                        }),
                        (0, s.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ']',
                        }),
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(t.span, {
                      children: (0, s.jsx)(t.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '}',
                      }),
                    }),
                  ],
                }),
              }),
              '\n',
              (0, s.jsxs)(t.p, {
                children: [
                  'Sofa will create a ',
                  (0, s.jsx)(t.code, { children: 'GET /comments' }),
                  ' route.',
                ],
              }),
              '\n',
              (0, s.jsx)(t.pre, {
                icon: o.k3,
                tabIndex: '0',
                'data-language': 'bash',
                'data-word-wrap': '',
                'data-copy': '',
                children: (0, s.jsx)(t.code, {
                  children: (0, s.jsxs)(t.span, {
                    children: [
                      (0, s.jsx)(t.span, {
                        style: {
                          '--shiki-light': '#6F42C1',
                          '--shiki-dark': '#B392F0',
                        },
                        children: 'curl',
                      }),
                      (0, s.jsx)(t.span, {
                        style: {
                          '--shiki-light': '#032F62',
                          '--shiki-dark': '#9ECBFF',
                        },
                        children: ' http://localhost:3000/api/comments',
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        '/docs/essentials/queries',
        {
          filePath: 'src/pages/docs/essentials/queries.mdx',
          timestamp: 1678967172e3,
          pageMap: n.O,
          frontMatter: {
            description:
              'Learn how Sofa handles GraphQL queries, transforming them into GET requests. Example code provided to demonstrate query implementation with Sofa. #GraphQL',
          },
          title: 'Queries',
        },
        'undefined' == typeof RemoteContent ? d : RemoteContent.useTOC
      );
    },
    1355: (e, t, i) => {
      'use strict';
      i.d(t, { R: () => d });
      var s = i(8453),
        r = i(9965),
        n = i.n(r),
        a = i(6540);
      let o = {
          img: (e) =>
            (0, a.createElement)('object' == typeof e.src ? n() : 'img', e),
        },
        d = (e) => ({ ...o, ...(0, s.R)(e) });
    },
    7849: (e, t, i) => {
      'use strict';
      i.d(t, { e: () => h });
      var s = i(4848),
        r = i(3032),
        n = i(356);
      let a = (0, i(6540).createContext)({}),
        o = a.Provider;
      a.displayName = 'SSG';
      var d = i(1355);
      function h(e, t, i, s) {
        let n = globalThis[r.VZ];
        return (
          (n.route = t),
          (n.pageMap = i.pageMap),
          (n.context[t] = { Content: e, pageOpts: i, useTOC: s }),
          l
        );
      }
      function l({ __nextra_pageMap: e = [], __nextra_dynamic_opts: t, ...i }) {
        let a = globalThis[r.VZ],
          { Layout: d, themeConfig: h } = a,
          { route: l, locale: c } = (0, n.r)(),
          u = a.context[l];
        if (!u)
          throw Error(
            `No content found for the "${l}" route. Please report it as a bug.`
          );
        let { pageOpts: f, useTOC: m, Content: g } = u;
        if (l.startsWith('/[')) f.pageMap = e;
        else
          for (let { route: t, children: i } of e) {
            let e = t.split('/').slice(c ? 2 : 1);
            (function e(t, [i, ...s]) {
              for (let r of t)
                if ('children' in r && i === r.name)
                  return s.length ? e(r.children, s) : r;
            })(f.pageMap, e).children = i;
          }
        if (t) {
          let { title: e, frontMatter: i } = t;
          f = { ...f, title: e, frontMatter: i };
        }
        return (0, s.jsx)(d, {
          themeConfig: h,
          pageOpts: f,
          pageProps: i,
          children: (0, s.jsx)(o, {
            value: i,
            children: (0, s.jsx)(p, {
              useTOC: m,
              children: (0, s.jsx)(g, { ...i }),
            }),
          }),
        });
      }
      function p({ children: e, useTOC: t }) {
        let { wrapper: i } = (0, d.R)();
        return (0, s.jsx)(c, { useTOC: t, wrapper: i, children: e });
      }
      function c({ children: e, useTOC: t, wrapper: i, ...r }) {
        let n = t(r);
        return i ? (0, s.jsx)(i, { toc: n, children: e }) : e;
      }
    },
    3663: (e, t, i) => {
      'use strict';
      i.d(t, { O: () => s });
      let s = [
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
    var t = (t) => e((e.s = t));
    e.O(0, [636, 593, 792], () => t(9612)), (_N_E = e.O());
  },
]);
