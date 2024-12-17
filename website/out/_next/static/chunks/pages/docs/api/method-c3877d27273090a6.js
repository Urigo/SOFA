(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [336],
  {
    9136: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/docs/api/method',
        function () {
          return r(9219);
        },
      ]);
    },
    9219: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { default: () => h, useTOC: () => l });
      var i = r(4848),
        s = r(7849),
        o = r(3663),
        n = r(1355),
        a = r(8941),
        d = r(2097);
      function l(e) {
        return [];
      }
      let h = (0, s.e)(
        function (e) {
          let t = {
            code: 'code',
            h1: 'h1',
            p: 'p',
            pre: 'pre',
            span: 'span',
            ...(0, n.R)(),
            ...e.components,
          };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(t.h1, {
                children: 'Customize Endpoint’s HTTP Method',
              }),
              '\n',
              (0, i.jsxs)(t.p, {
                children: [
                  'Sofa allows you to customize the http method. For example, in case you need ',
                  (0, i.jsx)(t.code, { children: 'POST' }),
                  ' instead of ',
                  (0, i.jsx)(t.code, { children: 'GET' }),
                  ' method in one of your query, you do the following:',
                ],
              }),
              '\n',
              (0, i.jsx)(t.pre, {
                icon: d.js,
                tabIndex: '0',
                'data-language': 'js',
                'data-word-wrap': '',
                'data-copy': '',
                children: (0, i.jsxs)(t.code, {
                  children: [
                    (0, i.jsxs)(t.span, {
                      children: [
                        (0, i.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: 'api.',
                        }),
                        (0, i.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#6F42C1',
                            '--shiki-dark': '#B392F0',
                          },
                          children: 'use',
                        }),
                        (0, i.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '(',
                        }),
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(t.span, {
                      children: [
                        (0, i.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#032F62',
                            '--shiki-dark': '#9ECBFF',
                          },
                          children: "  '/api'",
                        }),
                        (0, i.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ',',
                        }),
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(t.span, {
                      children: [
                        (0, i.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#6F42C1',
                            '--shiki-dark': '#B392F0',
                          },
                          children: '  useSofa',
                        }),
                        (0, i.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '({',
                        }),
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(t.span, {
                      children: (0, i.jsx)(t.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '    schema,',
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(t.span, {
                      children: (0, i.jsx)(t.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '    routes: {',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(t.span, {
                      children: [
                        (0, i.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#032F62',
                            '--shiki-dark': '#9ECBFF',
                          },
                          children: "      'Query.feed'",
                        }),
                        (0, i.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ': { method: ',
                        }),
                        (0, i.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#032F62',
                            '--shiki-dark': '#9ECBFF',
                          },
                          children: "'POST'",
                        }),
                        (0, i.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ' }',
                        }),
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(t.span, {
                      children: (0, i.jsx)(t.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '    }',
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(t.span, {
                      children: (0, i.jsx)(t.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '  })',
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(t.span, {
                      children: (0, i.jsx)(t.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: ')',
                      }),
                    }),
                  ],
                }),
              }),
              '\n',
              (0, i.jsxs)(t.p, {
                children: [
                  'When Sofa tries to define a route for ',
                  (0, i.jsx)(t.code, { children: 'feed' }),
                  ' of ',
                  (0, i.jsx)(t.code, { children: 'Query' }),
                  ', instead of exposing it under ',
                  (0, i.jsx)(t.code, { children: 'GET' }),
                  ' (default for Query type) it will use ',
                  (0, i.jsx)(t.code, { children: 'POST' }),
                  ' method.',
                ],
              }),
              '\n',
              (0, i.jsx)(a.P, {
                type: 'info',
                children: (0, i.jsxs)(t.p, {
                  children: [
                    'Pattern is easy: ',
                    (0, i.jsx)(t.code, { children: 'Type.field' }),
                    ' where ',
                    (0, i.jsx)(t.code, { children: 'Type' }),
                    ' is your query or mutation type.',
                  ],
                }),
              }),
            ],
          });
        },
        '/docs/api/method',
        {
          filePath: 'src/pages/docs/api/method.mdx',
          timestamp: 1700759003e3,
          pageMap: o.O,
          frontMatter: {
            description:
              "Customize your GraphQL endpoint's HTTP method with Sofa. Learn how to easily switch between GET and POST using the routes parameter for specific queries or mutations. #GraphQL #Sofa",
          },
          title: "Customize Endpoint's HTTP Method",
        },
        'undefined' == typeof RemoteContent ? l : RemoteContent.useTOC
      );
    },
    8941: (e, t, r) => {
      'use strict';
      r.d(t, { P: () => d });
      var i = r(4848),
        s = r(4164),
        o = r(2097);
      let n = {
          default: '\uD83D\uDCA1',
          error: '\uD83D\uDEAB',
          info: (0, i.jsx)(o.KS, { className: '_mt-1' }),
          warning: '⚠️',
        },
        a = {
          default: (0, s.A)(
            '_border-orange-100 _bg-orange-50 _text-orange-800 dark:_border-orange-400/30 dark:_bg-orange-400/20 dark:_text-orange-300'
          ),
          error: (0, s.A)(
            '_border-red-200 _bg-red-100 _text-red-900 dark:_border-red-200/30 dark:_bg-red-900/30 dark:_text-red-200'
          ),
          info: (0, s.A)(
            '_border-blue-200 _bg-blue-100 _text-blue-900 dark:_border-blue-200/30 dark:_bg-blue-900/30 dark:_text-blue-200'
          ),
          warning: (0, s.A)(
            '_border-yellow-100 _bg-yellow-50 _text-yellow-900 dark:_border-yellow-200/30 dark:_bg-yellow-700/30 dark:_text-yellow-200'
          ),
        };
      function d({ children: e, type: t = 'default', emoji: r = n[t] }) {
        return (0, i.jsxs)('div', {
          className: (0, s.A)(
            'nextra-callout _overflow-x-auto _mt-6 _flex _rounded-lg _border _py-2 ltr:_pr-4 rtl:_pl-4',
            'contrast-more:_border-current contrast-more:dark:_border-current',
            a[t]
          ),
          children: [
            (0, i.jsx)('div', {
              className:
                '_select-none _text-xl ltr:_pl-3 ltr:_pr-2 rtl:_pr-3 rtl:_pl-2',
              style: {
                fontFamily:
                  '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              },
              children: r,
            }),
            (0, i.jsx)('div', {
              className: '_w-full _min-w-0 _leading-7',
              children: e,
            }),
          ],
        });
      }
    },
    1355: (e, t, r) => {
      'use strict';
      r.d(t, { R: () => d });
      var i = r(8453),
        s = r(9965),
        o = r.n(s),
        n = r(6540);
      let a = {
          img: (e) =>
            (0, n.createElement)('object' == typeof e.src ? o() : 'img', e),
        },
        d = (e) => ({ ...a, ...(0, i.R)(e) });
    },
    7849: (e, t, r) => {
      'use strict';
      r.d(t, { e: () => l });
      var i = r(4848),
        s = r(3032),
        o = r(356);
      let n = (0, r(6540).createContext)({}),
        a = n.Provider;
      n.displayName = 'SSG';
      var d = r(1355);
      function l(e, t, r, i) {
        let o = globalThis[s.VZ];
        return (
          (o.route = t),
          (o.pageMap = r.pageMap),
          (o.context[t] = { Content: e, pageOpts: r, useTOC: i }),
          h
        );
      }
      function h({ __nextra_pageMap: e = [], __nextra_dynamic_opts: t, ...r }) {
        let n = globalThis[s.VZ],
          { Layout: d, themeConfig: l } = n,
          { route: h, locale: p } = (0, o.r)(),
          u = n.context[h];
        if (!u)
          throw Error(
            `No content found for the "${h}" route. Please report it as a bug.`
          );
        let { pageOpts: f, useTOC: m, Content: g } = u;
        if (h.startsWith('/[')) f.pageMap = e;
        else
          for (let { route: t, children: r } of e) {
            let e = t.split('/').slice(p ? 2 : 1);
            (function e(t, [r, ...i]) {
              for (let s of t)
                if ('children' in s && r === s.name)
                  return i.length ? e(s.children, i) : s;
            })(f.pageMap, e).children = r;
          }
        if (t) {
          let { title: e, frontMatter: r } = t;
          f = { ...f, title: e, frontMatter: r };
        }
        return (0, i.jsx)(d, {
          themeConfig: l,
          pageOpts: f,
          pageProps: r,
          children: (0, i.jsx)(a, {
            value: r,
            children: (0, i.jsx)(c, {
              useTOC: m,
              children: (0, i.jsx)(g, { ...r }),
            }),
          }),
        });
      }
      function c({ children: e, useTOC: t }) {
        let { wrapper: r } = (0, d.R)();
        return (0, i.jsx)(p, { useTOC: t, wrapper: r, children: e });
      }
      function p({ children: e, useTOC: t, wrapper: r, ...s }) {
        let o = t(s);
        return r ? (0, i.jsx)(r, { toc: o, children: e }) : e;
      }
    },
    3663: (e, t, r) => {
      'use strict';
      r.d(t, { O: () => i });
      let i = [
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
    e.O(0, [636, 593, 792], () => t(9136)), (_N_E = e.O());
  },
]);