(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [401],
  {
    7828: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/docs/api/ignore',
        function () {
          return r(2614);
        },
      ]);
    },
    2614: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { default: () => l, useTOC: () => d });
      var a = r(4848),
        i = r(7849),
        s = r(3663),
        n = r(1355),
        o = r(8941);
      function d(e) {
        return [];
      }
      let l = (0, i.e)(
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
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(t.h1, { children: 'Using objects instead of IDs' }),
              '\n',
              (0, a.jsx)(t.p, {
                children:
                  'There are some cases where sending a full object makes more sense than passing only the ID. Sofa allows you to easily define where to ignore the default behavior:',
              }),
              '\n',
              (0, a.jsx)(t.pre, {
                tabIndex: '0',
                'data-language': 'typescript',
                'data-word-wrap': '',
                'data-copy': '',
                children: (0, a.jsxs)(t.code, {
                  children: [
                    (0, a.jsxs)(t.span, {
                      children: [
                        (0, a.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: 'api.',
                        }),
                        (0, a.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#6F42C1',
                            '--shiki-dark': '#B392F0',
                          },
                          children: 'use',
                        }),
                        (0, a.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '(',
                        }),
                      ],
                    }),
                    '\n',
                    (0, a.jsxs)(t.span, {
                      children: [
                        (0, a.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#032F62',
                            '--shiki-dark': '#9ECBFF',
                          },
                          children: "  '/api'",
                        }),
                        (0, a.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ',',
                        }),
                      ],
                    }),
                    '\n',
                    (0, a.jsxs)(t.span, {
                      children: [
                        (0, a.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#6F42C1',
                            '--shiki-dark': '#B392F0',
                          },
                          children: '  useSofa',
                        }),
                        (0, a.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '({',
                        }),
                      ],
                    }),
                    '\n',
                    (0, a.jsx)(t.span, {
                      children: (0, a.jsx)(t.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '    schema,',
                      }),
                    }),
                    '\n',
                    (0, a.jsxs)(t.span, {
                      children: [
                        (0, a.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '    ignore: [',
                        }),
                        (0, a.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#032F62',
                            '--shiki-dark': '#9ECBFF',
                          },
                          children: "'Message.author'",
                        }),
                        (0, a.jsx)(t.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '],',
                        }),
                      ],
                    }),
                    '\n',
                    (0, a.jsx)(t.span, {
                      children: (0, a.jsx)(t.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '  })',
                      }),
                    }),
                    '\n',
                    (0, a.jsx)(t.span, {
                      children: (0, a.jsx)(t.span, {
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
              '\n',
              (0, a.jsx)(t.p, {
                children:
                  'Whenever Sofa tries to resolve an author of a message, instead of exposing an ID it will pass whole data.',
              }),
              '\n',
              (0, a.jsx)(o.P, {
                type: 'info',
                children: (0, a.jsxs)(t.p, {
                  children: [
                    'Pattern is easy: ',
                    (0, a.jsx)(t.code, { children: 'Type.field' }),
                    ' or ',
                    (0, a.jsx)(t.code, { children: 'Type' }),
                  ],
                }),
              }),
            ],
          });
        },
        '/docs/api/ignore',
        {
          filePath: 'src/pages/docs/api/ignore.mdx',
          timestamp: 1678967172e3,
          pageMap: s.O,
          frontMatter: {
            description:
              'Simplify GraphQL object handling with Sofa. Learn how to ignore the default ID behavior and send entire objects using the ignore parameter. #GraphQL #Sofa',
          },
          title: 'Using objects instead of IDs',
        },
        'undefined' == typeof RemoteContent ? d : RemoteContent.useTOC
      );
    },
    8941: (e, t, r) => {
      'use strict';
      r.d(t, { P: () => d });
      var a = r(4848),
        i = r(4164),
        s = r(2097);
      let n = {
          default: '\uD83D\uDCA1',
          error: '\uD83D\uDEAB',
          info: (0, a.jsx)(s.KS, { className: '_mt-1' }),
          warning: '⚠️',
        },
        o = {
          default: (0, i.A)(
            '_border-orange-100 _bg-orange-50 _text-orange-800 dark:_border-orange-400/30 dark:_bg-orange-400/20 dark:_text-orange-300'
          ),
          error: (0, i.A)(
            '_border-red-200 _bg-red-100 _text-red-900 dark:_border-red-200/30 dark:_bg-red-900/30 dark:_text-red-200'
          ),
          info: (0, i.A)(
            '_border-blue-200 _bg-blue-100 _text-blue-900 dark:_border-blue-200/30 dark:_bg-blue-900/30 dark:_text-blue-200'
          ),
          warning: (0, i.A)(
            '_border-yellow-100 _bg-yellow-50 _text-yellow-900 dark:_border-yellow-200/30 dark:_bg-yellow-700/30 dark:_text-yellow-200'
          ),
        };
      function d({ children: e, type: t = 'default', emoji: r = n[t] }) {
        return (0, a.jsxs)('div', {
          className: (0, i.A)(
            'nextra-callout _overflow-x-auto _mt-6 _flex _rounded-lg _border _py-2 ltr:_pr-4 rtl:_pl-4',
            'contrast-more:_border-current contrast-more:dark:_border-current',
            o[t]
          ),
          children: [
            (0, a.jsx)('div', {
              className:
                '_select-none _text-xl ltr:_pl-3 ltr:_pr-2 rtl:_pr-3 rtl:_pl-2',
              style: {
                fontFamily:
                  '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              },
              children: r,
            }),
            (0, a.jsx)('div', {
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
      var a = r(8453),
        i = r(9965),
        s = r.n(i),
        n = r(6540);
      let o = {
          img: (e) =>
            (0, n.createElement)('object' == typeof e.src ? s() : 'img', e),
        },
        d = (e) => ({ ...o, ...(0, a.R)(e) });
    },
    7849: (e, t, r) => {
      'use strict';
      r.d(t, { e: () => l });
      var a = r(4848),
        i = r(3032),
        s = r(356);
      let n = (0, r(6540).createContext)({}),
        o = n.Provider;
      n.displayName = 'SSG';
      var d = r(1355);
      function l(e, t, r, a) {
        let s = globalThis[i.VZ];
        return (
          (s.route = t),
          (s.pageMap = r.pageMap),
          (s.context[t] = { Content: e, pageOpts: r, useTOC: a }),
          h
        );
      }
      function h({ __nextra_pageMap: e = [], __nextra_dynamic_opts: t, ...r }) {
        let n = globalThis[i.VZ],
          { Layout: d, themeConfig: l } = n,
          { route: h, locale: c } = (0, s.r)(),
          u = n.context[h];
        if (!u)
          throw Error(
            `No content found for the "${h}" route. Please report it as a bug.`
          );
        let { pageOpts: f, useTOC: g, Content: m } = u;
        if (h.startsWith('/[')) f.pageMap = e;
        else
          for (let { route: t, children: r } of e) {
            let e = t.split('/').slice(c ? 2 : 1);
            (function e(t, [r, ...a]) {
              for (let i of t)
                if ('children' in i && r === i.name)
                  return a.length ? e(i.children, a) : i;
            })(f.pageMap, e).children = r;
          }
        if (t) {
          let { title: e, frontMatter: r } = t;
          f = { ...f, title: e, frontMatter: r };
        }
        return (0, a.jsx)(d, {
          themeConfig: l,
          pageOpts: f,
          pageProps: r,
          children: (0, a.jsx)(o, {
            value: r,
            children: (0, a.jsx)(p, {
              useTOC: g,
              children: (0, a.jsx)(m, { ...r }),
            }),
          }),
        });
      }
      function p({ children: e, useTOC: t }) {
        let { wrapper: r } = (0, d.R)();
        return (0, a.jsx)(c, { useTOC: t, wrapper: r, children: e });
      }
      function c({ children: e, useTOC: t, wrapper: r, ...i }) {
        let s = t(i);
        return r ? (0, a.jsx)(r, { toc: s, children: e }) : e;
      }
    },
    3663: (e, t, r) => {
      'use strict';
      r.d(t, { O: () => a });
      let a = [
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
    e.O(0, [636, 593, 792], () => t(7828)), (_N_E = e.O());
  },
]);
