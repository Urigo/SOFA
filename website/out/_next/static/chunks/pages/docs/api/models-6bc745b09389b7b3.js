(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [470],
  {
    4868: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/docs/api/models',
        function () {
          return t(8670);
        },
      ]);
    },
    8670: (e, s, t) => {
      'use strict';
      t.r(s), t.d(s, { default: () => h, useTOC: () => d });
      var i = t(4848),
        n = t(7849),
        a = t(3663),
        r = t(1355),
        o = t(2097);
      function d(e) {
        return [];
      }
      let h = (0, n.e)(
        function (e) {
          let s = {
            code: 'code',
            h1: 'h1',
            p: 'p',
            pre: 'pre',
            span: 'span',
            ...(0, r.R)(),
            ...e.components,
          };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(s.h1, { children: 'Nested data and Models' }),
              '\n',
              (0, i.jsx)(s.p, {
                children:
                  'Sofa treats some types differently than others, those are called Models.',
              }),
              '\n',
              (0, i.jsx)(s.p, {
                children:
                  'The idea behind Models is to not expose full objects in every response, especially if it’s a nested, not first-level data.',
              }),
              '\n',
              (0, i.jsx)(s.p, {
                children:
                  'For example, when fetching a list of chats you don’t want to include all messages in the response, you want them to be just IDs (or links). Those messages would have to have their own endpoint. We call this type of data, a Model. In REST you probably call them Resources.',
              }),
              '\n',
              (0, i.jsx)(s.p, {
                children:
                  'In order to treat particular types as Models you need to provide two queries, one that exposes a list (with no non-optional arguments) and the other to fetch a single entity (id field as an argument). The model itself has to have an id field. Those are the only requirements.',
              }),
              '\n',
              (0, i.jsx)(s.pre, {
                icon: o.hf,
                tabIndex: '0',
                'data-language': 'graphql',
                'data-word-wrap': '',
                'data-copy': '',
                children: (0, i.jsxs)(s.code, {
                  children: [
                    (0, i.jsx)(s.span, {
                      children: (0, i.jsx)(s.span, {
                        style: {
                          '--shiki-light': '#6A737D',
                          '--shiki-dark': '#6A737D',
                        },
                        children: '# Message is treated as a Model',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(s.span, {
                      children: [
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#D73A49',
                            '--shiki-dark': '#F97583',
                          },
                          children: 'type',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: ' Query',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ' {',
                        }),
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(s.span, {
                      children: [
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#E36209',
                            '--shiki-dark': '#FFAB70',
                          },
                          children: '  messages',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ': [',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: 'Message',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ']',
                        }),
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(s.span, {
                      children: [
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#E36209',
                            '--shiki-dark': '#FFAB70',
                          },
                          children: '  message',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '(',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#E36209',
                            '--shiki-dark': '#FFAB70',
                          },
                          children: 'id',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ': ',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: 'ID',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '): ',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: 'Message',
                        }),
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(s.span, {
                      children: (0, i.jsx)(s.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '}',
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(s.span, { children: ' ' }),
                    '\n',
                    (0, i.jsxs)(s.span, {
                      children: [
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#D73A49',
                            '--shiki-dark': '#F97583',
                          },
                          children: 'type',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: ' Message',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ' {',
                        }),
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(s.span, {
                      children: [
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#E36209',
                            '--shiki-dark': '#FFAB70',
                          },
                          children: '  id',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ': ',
                        }),
                        (0, i.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: 'ID',
                        }),
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(s.span, {
                      children: (0, i.jsx)(s.span, {
                        style: {
                          '--shiki-light': '#6A737D',
                          '--shiki-dark': '#6A737D',
                        },
                        children: '  # other fields ...',
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(s.span, {
                      children: (0, i.jsx)(s.span, {
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
            ],
          });
        },
        '/docs/api/models',
        {
          filePath: 'src/pages/docs/api/models.mdx',
          timestamp: 1678967172e3,
          pageMap: a.O,
          frontMatter: {
            description:
              'Learn how Sofa handles nested data and Models in GraphQL. Use Models to avoid exposing full objects in every response and fetch single entities by ID. #GraphQL #Sofa',
          },
          title: 'Nested data and Models',
        },
        'undefined' == typeof RemoteContent ? d : RemoteContent.useTOC
      );
    },
    1355: (e, s, t) => {
      'use strict';
      t.d(s, { R: () => d });
      var i = t(8453),
        n = t(9965),
        a = t.n(n),
        r = t(6540);
      let o = {
          img: (e) =>
            (0, r.createElement)('object' == typeof e.src ? a() : 'img', e),
        },
        d = (e) => ({ ...o, ...(0, i.R)(e) });
    },
    7849: (e, s, t) => {
      'use strict';
      t.d(s, { e: () => h });
      var i = t(4848),
        n = t(3032),
        a = t(356);
      let r = (0, t(6540).createContext)({}),
        o = r.Provider;
      r.displayName = 'SSG';
      var d = t(1355);
      function h(e, s, t, i) {
        let a = globalThis[n.VZ];
        return (
          (a.route = s),
          (a.pageMap = t.pageMap),
          (a.context[s] = { Content: e, pageOpts: t, useTOC: i }),
          l
        );
      }
      function l({ __nextra_pageMap: e = [], __nextra_dynamic_opts: s, ...t }) {
        let r = globalThis[n.VZ],
          { Layout: d, themeConfig: h } = r,
          { route: l, locale: c } = (0, a.r)(),
          u = r.context[l];
        if (!u)
          throw Error(
            `No content found for the "${l}" route. Please report it as a bug.`
          );
        let { pageOpts: f, useTOC: g, Content: m } = u;
        if (l.startsWith('/[')) f.pageMap = e;
        else
          for (let { route: s, children: t } of e) {
            let e = s.split('/').slice(c ? 2 : 1);
            (function e(s, [t, ...i]) {
              for (let n of s)
                if ('children' in n && t === n.name)
                  return i.length ? e(n.children, i) : n;
            })(f.pageMap, e).children = t;
          }
        if (s) {
          let { title: e, frontMatter: t } = s;
          f = { ...f, title: e, frontMatter: t };
        }
        return (0, i.jsx)(d, {
          themeConfig: h,
          pageOpts: f,
          pageProps: t,
          children: (0, i.jsx)(o, {
            value: t,
            children: (0, i.jsx)(p, {
              useTOC: g,
              children: (0, i.jsx)(m, { ...t }),
            }),
          }),
        });
      }
      function p({ children: e, useTOC: s }) {
        let { wrapper: t } = (0, d.R)();
        return (0, i.jsx)(c, { useTOC: s, wrapper: t, children: e });
      }
      function c({ children: e, useTOC: s, wrapper: t, ...n }) {
        let a = s(n);
        return t ? (0, i.jsx)(t, { toc: a, children: e }) : e;
      }
    },
    3663: (e, s, t) => {
      'use strict';
      t.d(s, { O: () => i });
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
    var s = (s) => e((e.s = s));
    e.O(0, [636, 593, 792], () => s(4868)), (_N_E = e.O());
  },
]);
