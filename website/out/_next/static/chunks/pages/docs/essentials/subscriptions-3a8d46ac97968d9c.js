(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [232],
  {
    1872: (e, i, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/docs/essentials/subscriptions',
        function () {
          return s(8083);
        },
      ]);
    },
    8083: (e, i, s) => {
      'use strict';
      s.r(i), s.d(i, { default: () => h, useTOC: () => d });
      var t = s(4848),
        n = s(7849),
        r = s(3663),
        a = s(1355),
        o = s(2097);
      function d(e) {
        return [
          {
            value: 'Starting a subscription',
            id: 'starting-a-subscription',
            depth: 2,
          },
          {
            value: 'Stoping a subscription',
            id: 'stoping-a-subscription',
            depth: 2,
          },
          {
            value: 'Updating a subscription',
            id: 'updating-a-subscription',
            depth: 2,
          },
          { value: 'Example', id: 'example', depth: 2 },
        ];
      }
      let h = (0, n.e)(
        function (e) {
          let { toc: i = d(e) } = e,
            s = {
              code: 'code',
              h1: 'h1',
              h2: 'h2',
              li: 'li',
              p: 'p',
              pre: 'pre',
              span: 'span',
              ul: 'ul',
              ...(0, a.R)(),
              ...e.components,
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(s.h1, { children: 'Subscription' }),
              '\n',
              (0, t.jsx)(s.p, {
                children:
                  'Sofa enables you to run GraphQL Subscriptions through WebHooks. It has a special API to start, update, and stop a subscription.',
              }),
              '\n',
              (0, t.jsxs)(s.ul, {
                children: [
                  '\n',
                  (0, t.jsxs)(s.li, {
                    children: [
                      (0, t.jsx)(s.code, { children: 'POST /webhook' }),
                      ' - starts a subscription',
                    ],
                  }),
                  '\n',
                  (0, t.jsxs)(s.li, {
                    children: [
                      (0, t.jsx)(s.code, { children: 'DELETE /webhook/:id' }),
                      ' - stops it',
                    ],
                  }),
                  '\n',
                  (0, t.jsxs)(s.li, {
                    children: [
                      (0, t.jsx)(s.code, { children: 'POST /webhook/:id' }),
                      '- updates it',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, t.jsx)(s.h2, { id: i[0].id, children: i[0].value }),
              '\n',
              (0, t.jsx)(s.p, {
                children:
                  'To start a new subscription you need to include following data in request’s body:',
              }),
              '\n',
              (0, t.jsxs)(s.ul, {
                children: [
                  '\n',
                  (0, t.jsxs)(s.li, {
                    children: [
                      (0, t.jsx)(s.code, { children: 'subscription' }),
                      ' - subscription’s name, matches the name in GraphQL Schema',
                    ],
                  }),
                  '\n',
                  (0, t.jsxs)(s.li, {
                    children: [
                      (0, t.jsx)(s.code, { children: 'variables' }),
                      ' - variables passed to run a subscription (optional)',
                    ],
                  }),
                  '\n',
                  (0, t.jsxs)(s.li, {
                    children: [
                      (0, t.jsx)(s.code, { children: 'url' }),
                      ' - an url of your webhook receiving endpoint',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, t.jsxs)(s.p, {
                children: [
                  'After sending it to ',
                  (0, t.jsx)(s.code, { children: 'POST /webhook' }),
                  ' you’re going to get in return a unique ID that is your started subscription’s identifier.',
                ],
              }),
              '\n',
              (0, t.jsx)(s.pre, {
                tabIndex: '0',
                'data-language': 'json',
                'data-word-wrap': '',
                'data-copy': '',
                children: (0, t.jsxs)(s.code, {
                  children: [
                    (0, t.jsx)(s.span, {
                      children: (0, t.jsx)(s.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '{',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(s.span, {
                      children: [
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: '  "id"',
                        }),
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ': ',
                        }),
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#032F62',
                            '--shiki-dark': '#9ECBFF',
                          },
                          children: '"SUBSCRIPTION-UNIQUE-ID"',
                        }),
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.span, {
                      children: (0, t.jsx)(s.span, {
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
              (0, t.jsx)(s.h2, { id: i[1].id, children: i[1].value }),
              '\n',
              (0, t.jsxs)(s.p, {
                children: [
                  'In order to stop a subscription, you need to pass its id and hit ',
                  (0, t.jsx)(s.code, { children: 'DELETE /webhook/:id' }),
                  '.',
                ],
              }),
              '\n',
              (0, t.jsx)(s.h2, { id: i[2].id, children: i[2].value }),
              '\n',
              (0, t.jsx)(s.p, {
                children:
                  'Updating a subscription looks very similar to how you start one. Your request’s body should contain:',
              }),
              '\n',
              (0, t.jsxs)(s.ul, {
                children: [
                  '\n',
                  (0, t.jsxs)(s.li, {
                    children: [
                      (0, t.jsx)(s.code, { children: 'variables' }),
                      ' - variables passed to run a subscription (optional)',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, t.jsxs)(s.p, {
                children: [
                  'After sending it to ',
                  (0, t.jsx)(s.code, { children: 'POST /webhook/:id' }),
                  ' you’re going to get in return a new ID:',
                ],
              }),
              '\n',
              (0, t.jsx)(s.pre, {
                tabIndex: '0',
                'data-language': 'json',
                'data-word-wrap': '',
                'data-copy': '',
                children: (0, t.jsxs)(s.code, {
                  children: [
                    (0, t.jsx)(s.span, {
                      children: (0, t.jsx)(s.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '{',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(s.span, {
                      children: [
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: '  "id"',
                        }),
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ': ',
                        }),
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#032F62',
                            '--shiki-dark': '#9ECBFF',
                          },
                          children: '"SUBSCRIPTION-UNIQUE-ID"',
                        }),
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.span, {
                      children: (0, t.jsx)(s.span, {
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
              (0, t.jsx)(s.h2, { id: i[3].id, children: i[3].value }),
              '\n',
              (0, t.jsx)(s.p, { children: 'Given the following schema:' }),
              '\n',
              (0, t.jsx)(s.pre, {
                icon: o.hf,
                tabIndex: '0',
                'data-language': 'graphql',
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
                          children: 'type',
                        }),
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: ' Subscription',
                        }),
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ' {',
                        }),
                      ],
                    }),
                    '\n',
                    (0, t.jsxs)(s.span, {
                      children: [
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#E36209',
                            '--shiki-dark': '#FFAB70',
                          },
                          children: '  onBook',
                        }),
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ': ',
                        }),
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: 'Book',
                        }),
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.span, {
                      children: (0, t.jsx)(s.span, {
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
              (0, t.jsxs)(s.p, {
                children: [
                  'Let’s start a subscription by sending that to ',
                  (0, t.jsx)(s.code, { children: 'POST /webhook' }),
                  ':',
                ],
              }),
              '\n',
              (0, t.jsx)(s.pre, {
                tabIndex: '0',
                'data-language': 'json',
                'data-word-wrap': '',
                'data-copy': '',
                children: (0, t.jsxs)(s.code, {
                  children: [
                    (0, t.jsx)(s.span, {
                      children: (0, t.jsx)(s.span, {
                        style: {
                          '--shiki-light': '#24292E',
                          '--shiki-dark': '#E1E4E8',
                        },
                        children: '{',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(s.span, {
                      children: [
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: '  "subscription"',
                        }),
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ': ',
                        }),
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#032F62',
                            '--shiki-dark': '#9ECBFF',
                          },
                          children: '"onBook"',
                        }),
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ',',
                        }),
                      ],
                    }),
                    '\n',
                    (0, t.jsxs)(s.span, {
                      children: [
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: '  "variables"',
                        }),
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ': {},',
                        }),
                      ],
                    }),
                    '\n',
                    (0, t.jsxs)(s.span, {
                      children: [
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#005CC5',
                            '--shiki-dark': '#79B8FF',
                          },
                          children: '  "url"',
                        }),
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: ': ',
                        }),
                        (0, t.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#032F62',
                            '--shiki-dark': '#9ECBFF',
                          },
                          children: '"https://app.com/new-book"',
                        }),
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(s.span, {
                      children: (0, t.jsx)(s.span, {
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
              (0, t.jsxs)(s.p, {
                children: [
                  'In return we get an ',
                  (0, t.jsx)(s.code, { children: 'id' }),
                  ' that we later on use to stop or update subscription:',
                ],
              }),
              '\n',
              (0, t.jsx)(s.pre, {
                tabIndex: '0',
                'data-language': 'plaintext',
                'data-word-wrap': '',
                'data-copy': '',
                children: (0, t.jsx)(s.code, {
                  children: (0, t.jsx)(s.span, {
                    children: (0, t.jsx)(s.span, {
                      children: 'DELETE /webhook/:id',
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        '/docs/essentials/subscriptions',
        {
          filePath: 'src/pages/docs/essentials/subscriptions.mdx',
          timestamp: 1678967172e3,
          pageMap: r.O,
          frontMatter: {
            description:
              'Learn how to use Sofa to run GraphQL Subscriptions through Webhooks by starting, updating, and stopping a subscription with POST, DELETE, and PUT requests. #GraphQL',
          },
          title: 'Subscription',
        },
        'undefined' == typeof RemoteContent ? d : RemoteContent.useTOC
      );
    },
    1355: (e, i, s) => {
      'use strict';
      s.d(i, { R: () => d });
      var t = s(8453),
        n = s(9965),
        r = s.n(n),
        a = s(6540);
      let o = {
          img: (e) =>
            (0, a.createElement)('object' == typeof e.src ? r() : 'img', e),
        },
        d = (e) => ({ ...o, ...(0, t.R)(e) });
    },
    7849: (e, i, s) => {
      'use strict';
      s.d(i, { e: () => h });
      var t = s(4848),
        n = s(3032),
        r = s(356);
      let a = (0, s(6540).createContext)({}),
        o = a.Provider;
      a.displayName = 'SSG';
      var d = s(1355);
      function h(e, i, s, t) {
        let r = globalThis[n.VZ];
        return (
          (r.route = i),
          (r.pageMap = s.pageMap),
          (r.context[i] = { Content: e, pageOpts: s, useTOC: t }),
          l
        );
      }
      function l({ __nextra_pageMap: e = [], __nextra_dynamic_opts: i, ...s }) {
        let a = globalThis[n.VZ],
          { Layout: d, themeConfig: h } = a,
          { route: l, locale: p } = (0, r.r)(),
          u = a.context[l];
        if (!u)
          throw Error(
            `No content found for the "${l}" route. Please report it as a bug.`
          );
        let { pageOpts: x, useTOC: g, Content: j } = u;
        if (l.startsWith('/[')) x.pageMap = e;
        else
          for (let { route: i, children: s } of e) {
            let e = i.split('/').slice(p ? 2 : 1);
            (function e(i, [s, ...t]) {
              for (let n of i)
                if ('children' in n && s === n.name)
                  return t.length ? e(n.children, t) : n;
            })(x.pageMap, e).children = s;
          }
        if (i) {
          let { title: e, frontMatter: s } = i;
          x = { ...x, title: e, frontMatter: s };
        }
        return (0, t.jsx)(d, {
          themeConfig: h,
          pageOpts: x,
          pageProps: s,
          children: (0, t.jsx)(o, {
            value: s,
            children: (0, t.jsx)(c, {
              useTOC: g,
              children: (0, t.jsx)(j, { ...s }),
            }),
          }),
        });
      }
      function c({ children: e, useTOC: i }) {
        let { wrapper: s } = (0, d.R)();
        return (0, t.jsx)(p, { useTOC: i, wrapper: s, children: e });
      }
      function p({ children: e, useTOC: i, wrapper: s, ...n }) {
        let r = i(n);
        return s ? (0, t.jsx)(s, { toc: r, children: e }) : e;
      }
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
    e.O(0, [636, 593, 792], () => i(1872)), (_N_E = e.O());
  },
]);
