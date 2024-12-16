(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [550],
  {
    3584: (i, s, e) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/docs/essentials/mutations',
        function () {
          return e(6821);
        },
      ]);
    },
    6821: (i, s, e) => {
      'use strict';
      e.r(s), e.d(s, { default: () => p, useTOC: () => l });
      var a = e(4848),
        n = e(7849),
        t = e(3663),
        r = e(1355),
        h = e(8272),
        d = e(2097);
      function l(i) {
        return [];
      }
      function o(i, s) {
        throw Error(
          'Expected ' +
            (s ? 'component' : 'object') +
            ' `' +
            i +
            '` to be defined: you likely forgot to import, pass, or provide it.'
        );
      }
      let p = (0, n.e)(
        function (i) {
          let s = {
            code: 'code',
            h1: 'h1',
            p: 'p',
            pre: 'pre',
            span: 'span',
            ...(0, r.R)(),
            ...i.components,
          };
          return (
            h.t || o('$Tabs', !1),
            h.t.Tab || o('$Tabs.Tab', !0),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(s.h1, { children: 'Mutations' }),
                '\n',
                (0, a.jsx)(s.p, {
                  children: 'Mutations are transformed into POST requests.',
                }),
                '\n',
                (0, a.jsx)(s.p, { children: 'Given the following example:' }),
                '\n',
                (0, a.jsx)(s.pre, {
                  icon: d.hf,
                  tabIndex: '0',
                  'data-language': 'graphql',
                  'data-word-wrap': '',
                  'data-copy': '',
                  children: (0, a.jsxs)(s.code, {
                    children: [
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#D73A49',
                              '--shiki-dark': '#F97583',
                            },
                            children: 'type',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: ' Comment',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ' {',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#E36209',
                              '--shiki-dark': '#FFAB70',
                            },
                            children: '  id',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ': ',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: 'ID',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#E36209',
                              '--shiki-dark': '#FFAB70',
                            },
                            children: '  text',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ': ',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: 'String',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsx)(s.span, {
                        children: (0, a.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '}',
                        }),
                      }),
                      '\n',
                      (0, a.jsx)(s.span, { children: ' ' }),
                      '\n',
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#D73A49',
                              '--shiki-dark': '#F97583',
                            },
                            children: 'type',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: ' Mutation',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ' {',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#E36209',
                              '--shiki-dark': '#FFAB70',
                            },
                            children: '  addComment',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: '(',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#E36209',
                              '--shiki-dark': '#FFAB70',
                            },
                            children: 'text',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ': ',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: 'String',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#D73A49',
                              '--shiki-dark': '#F97583',
                            },
                            children: '!',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ') ',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: 'Comment',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsx)(s.span, {
                        children: (0, a.jsx)(s.span, {
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
                (0, a.jsxs)(s.p, {
                  children: [
                    'Sofa will create a ',
                    (0, a.jsx)(s.code, { children: 'POST /add-comment' }),
                    ' route that accepts a ',
                    (0, a.jsx)(s.code, { children: '{ text }' }),
                    ' body.',
                  ],
                }),
                '\n',
                (0, a.jsx)(s.pre, {
                  icon: d.k3,
                  tabIndex: '0',
                  'data-language': 'bash',
                  'data-word-wrap': '',
                  'data-copy': '',
                  children: (0, a.jsxs)(s.code, {
                    children: [
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#6F42C1',
                              '--shiki-dark': '#B392F0',
                            },
                            children: 'curl',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: ' --header',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#032F62',
                              '--shiki-dark': '#9ECBFF',
                            },
                            children: ' "Content-Type: application/json"',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: ' \\',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: '  --request',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#032F62',
                              '--shiki-dark': '#9ECBFF',
                            },
                            children: ' POST',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: ' \\',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: '  --data',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#032F62',
                              '--shiki-dark': '#9ECBFF',
                            },
                            children: ' \'{"text":"Sofa is awesome!"}\'',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: ' \\',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsx)(s.span, {
                        children: (0, a.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#032F62',
                            '--shiki-dark': '#9ECBFF',
                          },
                          children: '  http://localhost:3000/api/add-comment',
                        }),
                      }),
                    ],
                  }),
                }),
                '\n',
                (0, a.jsxs)(s.p, {
                  children: [
                    'For mutations to properly work with JSON bodies, you will need to have ',
                    (0, a.jsx)(s.code, { children: 'bodyParser.json()' }),
                    ' or a similar module as a middleware, else you will have to pass arguments via url paramaters.',
                  ],
                }),
                '\n',
                (0, a.jsxs)(s.p, {
                  children: [
                    'Heres an example of without ',
                    (0, a.jsx)(s.code, { children: 'body-parser' }),
                    ':',
                  ],
                }),
                '\n',
                (0, a.jsx)(s.pre, {
                  icon: d.hf,
                  tabIndex: '0',
                  'data-language': 'graphql',
                  'data-word-wrap': '',
                  'data-copy': '',
                  children: (0, a.jsxs)(s.code, {
                    children: [
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#D73A49',
                              '--shiki-dark': '#F97583',
                            },
                            children: 'type',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: ' Comment',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ' {',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#E36209',
                              '--shiki-dark': '#FFAB70',
                            },
                            children: '  id',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ': ',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: 'ID',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#E36209',
                              '--shiki-dark': '#FFAB70',
                            },
                            children: '  text',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ': ',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: 'String',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsx)(s.span, {
                        children: (0, a.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#24292E',
                            '--shiki-dark': '#E1E4E8',
                          },
                          children: '}',
                        }),
                      }),
                      '\n',
                      (0, a.jsx)(s.span, { children: ' ' }),
                      '\n',
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#D73A49',
                              '--shiki-dark': '#F97583',
                            },
                            children: 'type',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: ' Mutation',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ' {',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#E36209',
                              '--shiki-dark': '#FFAB70',
                            },
                            children: '  addComment',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: '(',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#E36209',
                              '--shiki-dark': '#FFAB70',
                            },
                            children: 'text',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ': ',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: 'String',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#D73A49',
                              '--shiki-dark': '#F97583',
                            },
                            children: '!',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ') ',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: 'Comment',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsx)(s.span, {
                        children: (0, a.jsx)(s.span, {
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
                (0, a.jsx)(s.p, {
                  children:
                    'Will mean that you will have to access it like this:',
                }),
                '\n',
                (0, a.jsx)(s.pre, {
                  icon: d.k3,
                  tabIndex: '0',
                  'data-language': 'bash',
                  'data-word-wrap': '',
                  'data-copy': '',
                  children: (0, a.jsxs)(s.code, {
                    children: [
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#6F42C1',
                              '--shiki-dark': '#B392F0',
                            },
                            children: 'curl',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: ' --header',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#032F62',
                              '--shiki-dark': '#9ECBFF',
                            },
                            children: ' "Content-Type: application/json"',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: ' \\',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: '  --request',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#032F62',
                              '--shiki-dark': '#9ECBFF',
                            },
                            children: ' POST',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#005CC5',
                              '--shiki-dark': '#79B8FF',
                            },
                            children: ' \\',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsx)(s.span, {
                        children: (0, a.jsx)(s.span, {
                          style: {
                            '--shiki-light': '#032F62',
                            '--shiki-dark': '#9ECBFF',
                          },
                          children:
                            '  http://localhost:3000/api/add-comment?text=Sofa%20is%20awesome%21',
                        }),
                      }),
                    ],
                  }),
                }),
                '\n',
                (0, a.jsxs)(s.p, {
                  children: [
                    'How to enable ',
                    (0, a.jsx)(s.code, { children: 'body-parser' }),
                    ':',
                  ],
                }),
                '\n',
                (0, a.jsxs)(h.t, {
                  items: ['npm', 'pnpm', 'yarn', 'bun'],
                  storageKey: 'selectedPackageManager',
                  children: [
                    (0, a.jsx)(h.t.Tab, {
                      children: (0, a.jsx)(s.pre, {
                        icon: d.k3,
                        tabIndex: '0',
                        'data-language': 'sh',
                        'data-word-wrap': '',
                        'data-copy': '',
                        children: (0, a.jsx)(s.code, {
                          children: (0, a.jsxs)(s.span, {
                            children: [
                              (0, a.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#6F42C1',
                                  '--shiki-dark': '#B392F0',
                                },
                                children: 'npm',
                              }),
                              (0, a.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' i',
                              }),
                              (0, a.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' body-parser',
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, a.jsx)(h.t.Tab, {
                      children: (0, a.jsx)(s.pre, {
                        icon: d.k3,
                        tabIndex: '0',
                        'data-language': 'sh',
                        'data-word-wrap': '',
                        'data-copy': '',
                        children: (0, a.jsx)(s.code, {
                          children: (0, a.jsxs)(s.span, {
                            children: [
                              (0, a.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#6F42C1',
                                  '--shiki-dark': '#B392F0',
                                },
                                children: 'pnpm',
                              }),
                              (0, a.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' add',
                              }),
                              (0, a.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' body-parser',
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, a.jsx)(h.t.Tab, {
                      children: (0, a.jsx)(s.pre, {
                        icon: d.k3,
                        tabIndex: '0',
                        'data-language': 'sh',
                        'data-word-wrap': '',
                        'data-copy': '',
                        children: (0, a.jsx)(s.code, {
                          children: (0, a.jsxs)(s.span, {
                            children: [
                              (0, a.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#6F42C1',
                                  '--shiki-dark': '#B392F0',
                                },
                                children: 'yarn',
                              }),
                              (0, a.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' add',
                              }),
                              (0, a.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' body-parser',
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, a.jsx)(h.t.Tab, {
                      children: (0, a.jsx)(s.pre, {
                        icon: d.k3,
                        tabIndex: '0',
                        'data-language': 'sh',
                        'data-word-wrap': '',
                        'data-copy': '',
                        children: (0, a.jsx)(s.code, {
                          children: (0, a.jsxs)(s.span, {
                            children: [
                              (0, a.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#6F42C1',
                                  '--shiki-dark': '#B392F0',
                                },
                                children: 'bun',
                              }),
                              (0, a.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' add',
                              }),
                              (0, a.jsx)(s.span, {
                                style: {
                                  '--shiki-light': '#032F62',
                                  '--shiki-dark': '#9ECBFF',
                                },
                                children: ' body-parser',
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                '\n',
                (0, a.jsx)(s.p, {
                  children: 'Then you can simply initialise it like this:',
                }),
                '\n',
                (0, a.jsx)(s.pre, {
                  icon: d.js,
                  tabIndex: '0',
                  'data-language': 'js',
                  'data-word-wrap': '',
                  'data-copy': '',
                  children: (0, a.jsxs)(s.code, {
                    children: [
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#D73A49',
                              '--shiki-dark': '#F97583',
                            },
                            children: 'import',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ' bodyParser ',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#D73A49',
                              '--shiki-dark': '#F97583',
                            },
                            children: 'from',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#032F62',
                              '--shiki-dark': '#9ECBFF',
                            },
                            children: ' "body-parser"',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: ';',
                          }),
                        ],
                      }),
                      '\n',
                      (0, a.jsx)(s.span, { children: ' ' }),
                      '\n',
                      (0, a.jsxs)(s.span, {
                        children: [
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: 'app.',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#6F42C1',
                              '--shiki-dark': '#B392F0',
                            },
                            children: 'use',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: '(bodyParser.',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#6F42C1',
                              '--shiki-dark': '#B392F0',
                            },
                            children: 'json',
                          }),
                          (0, a.jsx)(s.span, {
                            style: {
                              '--shiki-light': '#24292E',
                              '--shiki-dark': '#E1E4E8',
                            },
                            children: '());',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        '/docs/essentials/mutations',
        {
          filePath: 'src/pages/docs/essentials/mutations.mdx',
          timestamp: 1691070757e3,
          pageMap: t.O,
          frontMatter: {
            description:
              'Learn how to use mutations in Sofa, which transform into POST requests and require body-parser.json() middleware or URL parameters. #GraphQL',
          },
          title: 'Mutations',
        },
        'undefined' == typeof RemoteContent ? l : RemoteContent.useTOC
      );
    },
    3663: (i, s, e) => {
      'use strict';
      e.d(s, { O: () => a });
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
  (i) => {
    var s = (s) => i((i.s = s));
    i.O(0, [874, 636, 593, 792], () => s(3584)), (_N_E = i.O());
  },
]);
