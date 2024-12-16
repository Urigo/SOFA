(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    314: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return r(8948);
        },
      ]);
    },
    8948: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { default: () => d, useTOC: () => u });
      var o = r(7849),
        a = r(3663),
        n = r(4848),
        i = r(4651),
        s = r(4953);
      let l = r.n(s)()(
        () =>
          Promise.all([r.e(342), r.e(990)])
            .then(r.bind(r, 3990))
            .then((e) => e.Hero),
        { loadableGenerated: { webpack: () => [3990] }, ssr: !1 }
      );
      function u(e) {
        return [];
      }
      let d = (0, o.e)(
        function () {
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(l, {}),
              (0, n.jsx)(i.f9, {
                items: [
                  {
                    title: 'Fully RESTful API',
                    description:
                      'Sofa takes your GraphQL Schema, looks for available queries, mutations and subscriptions and turns all of that into REST API.',
                  },
                  {
                    title: 'Easy To Use',
                    description:
                      'Setup Sofa within a single line of code and start using REST API right away.',
                  },
                  {
                    title: "Let's Work Together",
                    description:
                      'We want to hear from you, our community of fellow engineers, come to be collaborators.',
                  },
                ],
              }),
            ],
          });
        },
        '/',
        {
          filePath: 'src/pages/index.mdx',
          timestamp: 1663913025e3,
          pageMap: a.O,
          frontMatter: { title: 'Home' },
          title: 'Home',
        },
        'undefined' == typeof RemoteContent ? u : RemoteContent.useTOC
      );
    },
    5946: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return s;
          },
          noSSR: function () {
            return i;
          },
        });
      let o = r(7677);
      r(4848), r(6540);
      let a = o._(r(5645));
      function n(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function i(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      function s(e, t) {
        let r = a.default,
          o = {
            loading: (e) => {
              let { error: t, isLoading: r, pastDelay: o } = e;
              return null;
            },
          };
        e instanceof Promise
          ? (o.loader = () => e)
          : 'function' == typeof e
            ? (o.loader = e)
            : 'object' == typeof e && (o = { ...o, ...e });
        let s = (o = { ...o, ...t }).loader;
        return (o.loadableGenerated &&
          ((o = { ...o, ...o.loadableGenerated }), delete o.loadableGenerated),
        'boolean' != typeof o.ssr || o.ssr)
          ? r({
              ...o,
              loader: () =>
                null != s ? s().then(n) : Promise.resolve(n(() => null)),
            })
          : (delete o.webpack, delete o.modules, i(r, o));
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4319: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'LoadableContext', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let o = r(7677)._(r(6540)).default.createContext(null);
    },
    5645: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return p;
          },
        });
      let o = r(7677)._(r(6540)),
        a = r(4319),
        n = [],
        i = [],
        s = !1;
      function l(e) {
        let t = e(),
          r = { loading: !0, loaded: null, error: null };
        return (
          (r.promise = t
            .then((e) => ((r.loading = !1), (r.loaded = e), e))
            .catch((e) => {
              throw ((r.loading = !1), (r.error = e), e);
            })),
          r
        );
      }
      class u {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: e, _opts: t } = this;
          e.loading &&
            ('number' == typeof t.delay &&
              (0 === t.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, t.delay))),
            'number' == typeof t.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, t.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch((e) => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(e) {
          (this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...e,
          }),
            this._callbacks.forEach((e) => e());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(e) {
          return (
            this._callbacks.add(e),
            () => {
              this._callbacks.delete(e);
            }
          );
        }
        constructor(e, t) {
          (this._loadFn = e),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      }
      function d(e) {
        return (function (e, t) {
          let r = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t
            ),
            n = null;
          function l() {
            if (!n) {
              let t = new u(e, r);
              n = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return n.promise();
          }
          if (!s) {
            let e = r.webpack ? r.webpack() : r.modules;
            e &&
              i.push((t) => {
                for (let r of e) if (t.includes(r)) return l();
              });
          }
          function d(e, t) {
            !(function () {
              l();
              let e = o.default.useContext(a.LoadableContext);
              e &&
                Array.isArray(r.modules) &&
                r.modules.forEach((t) => {
                  e(t);
                });
            })();
            let i = o.default.useSyncExternalStore(
              n.subscribe,
              n.getCurrentValue,
              n.getCurrentValue
            );
            return (
              o.default.useImperativeHandle(t, () => ({ retry: n.retry }), []),
              o.default.useMemo(() => {
                var t;
                return i.loading || i.error
                  ? o.default.createElement(r.loading, {
                      isLoading: i.loading,
                      pastDelay: i.pastDelay,
                      timedOut: i.timedOut,
                      error: i.error,
                      retry: n.retry,
                    })
                  : i.loaded
                    ? o.default.createElement(
                        (t = i.loaded) && t.default ? t.default : t,
                        e
                      )
                    : null;
              }, [e, i])
            );
          }
          return (
            (d.preload = () => l()),
            (d.displayName = 'LoadableComponent'),
            o.default.forwardRef(d)
          );
        })(l, e);
      }
      function c(e, t) {
        let r = [];
        for (; e.length; ) {
          let o = e.pop();
          r.push(o(t));
        }
        return Promise.all(r).then(() => {
          if (e.length) return c(e, t);
        });
      }
      (d.preloadAll = () =>
        new Promise((e, t) => {
          c(n).then(e, t);
        })),
        (d.preloadReady = (e) => (
          void 0 === e && (e = []),
          new Promise((t) => {
            let r = () => ((s = !0), t());
            c(i, e).then(r, r);
          })
        )),
        (window.__NEXT_PRELOADREADY = d.preloadReady);
      let p = d;
    },
    4953: (e, t, r) => {
      e.exports = r(5946);
    },
    1355: (e, t, r) => {
      'use strict';
      r.d(t, { R: () => l });
      var o = r(8453),
        a = r(9965),
        n = r.n(a),
        i = r(6540);
      let s = {
          img: (e) =>
            (0, i.createElement)('object' == typeof e.src ? n() : 'img', e),
        },
        l = (e) => ({ ...s, ...(0, o.R)(e) });
    },
    7849: (e, t, r) => {
      'use strict';
      r.d(t, { e: () => u });
      var o = r(4848),
        a = r(3032),
        n = r(356);
      let i = (0, r(6540).createContext)({}),
        s = i.Provider;
      i.displayName = 'SSG';
      var l = r(1355);
      function u(e, t, r, o) {
        let n = globalThis[a.VZ];
        return (
          (n.route = t),
          (n.pageMap = r.pageMap),
          (n.context[t] = { Content: e, pageOpts: r, useTOC: o }),
          d
        );
      }
      function d({ __nextra_pageMap: e = [], __nextra_dynamic_opts: t, ...r }) {
        let i = globalThis[a.VZ],
          { Layout: l, themeConfig: u } = i,
          { route: d, locale: p } = (0, n.r)(),
          f = i.context[d];
        if (!f)
          throw Error(
            `No content found for the "${d}" route. Please report it as a bug.`
          );
        let { pageOpts: h, useTOC: m, Content: b } = f;
        if (d.startsWith('/[')) h.pageMap = e;
        else
          for (let { route: t, children: r } of e) {
            let e = t.split('/').slice(p ? 2 : 1);
            (function e(t, [r, ...o]) {
              for (let a of t)
                if ('children' in a && r === a.name)
                  return o.length ? e(a.children, o) : a;
            })(h.pageMap, e).children = r;
          }
        if (t) {
          let { title: e, frontMatter: r } = t;
          h = { ...h, title: e, frontMatter: r };
        }
        return (0, o.jsx)(l, {
          themeConfig: u,
          pageOpts: h,
          pageProps: r,
          children: (0, o.jsx)(s, {
            value: r,
            children: (0, o.jsx)(c, {
              useTOC: m,
              children: (0, o.jsx)(b, { ...r }),
            }),
          }),
        });
      }
      function c({ children: e, useTOC: t }) {
        let { wrapper: r } = (0, l.R)();
        return (0, o.jsx)(p, { useTOC: t, wrapper: r, children: e });
      }
      function p({ children: e, useTOC: t, wrapper: r, ...a }) {
        let n = t(a);
        return r ? (0, o.jsx)(r, { toc: n, children: e }) : e;
      }
    },
    3663: (e, t, r) => {
      'use strict';
      r.d(t, { O: () => o });
      let o = [
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
    e.O(0, [636, 593, 792], () => t(314)), (_N_E = e.O());
  },
]);
