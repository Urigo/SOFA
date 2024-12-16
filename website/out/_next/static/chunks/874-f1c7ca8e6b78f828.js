'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [874],
  {
    8272: (e, t, r) => {
      r.d(t, { t: () => V });
      var n = r(4848),
        a = r(4966),
        l = r(6638),
        s = r(6540),
        o = r(1993),
        u = r(6413),
        i = r(5621),
        c = r(5898),
        d = r(4623),
        f = r(7077),
        p = r(8050);
      function b(e) {
        let t,
          { onFocus: r } = e,
          [n, a] = (0, s.useState)(!0),
          l =
            ((t = (0, s.useRef)(!1)),
            (0, i.s)(
              () => (
                (t.current = !0),
                () => {
                  t.current = !1;
                }
              ),
              []
            ),
            t);
        return n
          ? s.createElement(p.j, {
              as: 'button',
              type: 'button',
              features: p.u.Focusable,
              onFocus: (e) => {
                e.preventDefault();
                let t,
                  n = 50;
                t = requestAnimationFrame(function e() {
                  if (n-- <= 0) {
                    t && cancelAnimationFrame(t);
                    return;
                  }
                  if (r()) {
                    if ((cancelAnimationFrame(t), !l.current)) return;
                    a(!1);
                    return;
                  }
                  t = requestAnimationFrame(e);
                });
              },
            })
          : null;
      }
      var x = r(7288),
        g = r(9347),
        v = r(6746),
        m = r(8665),
        h = r(9972);
      let _ = s.createContext(null);
      function P(e) {
        let { children: t } = e,
          r = s.useRef({
            groups: new Map(),
            get(e, t) {
              var r;
              let n = this.groups.get(e);
              n || ((n = new Map()), this.groups.set(e, n));
              let a = null != (r = n.get(t)) ? r : 0;
              return (
                n.set(t, a + 1),
                [
                  Array.from(n.keys()).indexOf(t),
                  function () {
                    let e = n.get(t);
                    e > 1 ? n.set(t, e - 1) : n.delete(t);
                  },
                ]
              );
            },
          });
        return s.createElement(_.Provider, { value: r }, t);
      }
      function w(e) {
        let t = s.useContext(_);
        if (!t)
          throw Error('You must wrap your component in a <StableCollection>');
        let r = s.useId(),
          [n, a] = t.current.get(e, r);
        return s.useEffect(() => a, []), n;
      }
      var y = r(4676),
        I = ((e) => (
          (e[(e.Forwards = 0)] = 'Forwards'),
          (e[(e.Backwards = 1)] = 'Backwards'),
          e
        ))(I || {}),
        T = ((e) => (
          (e[(e.Less = -1)] = 'Less'),
          (e[(e.Equal = 0)] = 'Equal'),
          (e[(e.Greater = 1)] = 'Greater'),
          e
        ))(T || {}),
        D = ((e) => (
          (e[(e.SetSelectedIndex = 0)] = 'SetSelectedIndex'),
          (e[(e.RegisterTab = 1)] = 'RegisterTab'),
          (e[(e.UnregisterTab = 2)] = 'UnregisterTab'),
          (e[(e.RegisterPanel = 3)] = 'RegisterPanel'),
          (e[(e.UnregisterPanel = 4)] = 'UnregisterPanel'),
          e
        ))(D || {});
      let E = {
          0(e, t) {
            var r;
            let n = (0, x.wl)(e.tabs, (e) => e.current),
              a = (0, x.wl)(e.panels, (e) => e.current),
              l = n.filter((e) => {
                var t;
                return !(null != (t = e.current) && t.hasAttribute('disabled'));
              }),
              s = { ...e, tabs: n, panels: a };
            if (t.index < 0 || t.index > n.length - 1) {
              let r = (0, g.Y)(Math.sign(t.index - e.selectedIndex), {
                [-1]: () => 1,
                0: () =>
                  (0, g.Y)(Math.sign(t.index), {
                    [-1]: () => 0,
                    0: () => 0,
                    1: () => 1,
                  }),
                1: () => 0,
              });
              if (0 === l.length) return s;
              let a = (0, g.Y)(r, {
                0: () => n.indexOf(l[0]),
                1: () => n.indexOf(l[l.length - 1]),
              });
              return { ...s, selectedIndex: -1 === a ? e.selectedIndex : a };
            }
            let o = n.slice(0, t.index),
              u = [...n.slice(t.index), ...o].find((e) => l.includes(e));
            if (!u) return s;
            let i = null != (r = n.indexOf(u)) ? r : e.selectedIndex;
            return (
              -1 === i && (i = e.selectedIndex), { ...s, selectedIndex: i }
            );
          },
          1(e, t) {
            if (e.tabs.includes(t.tab)) return e;
            let r = e.tabs[e.selectedIndex],
              n = (0, x.wl)([...e.tabs, t.tab], (e) => e.current),
              a = e.selectedIndex;
            return (
              e.info.current.isControlled ||
                (-1 === (a = n.indexOf(r)) && (a = e.selectedIndex)),
              { ...e, tabs: n, selectedIndex: a }
            );
          },
          2: (e, t) => ({ ...e, tabs: e.tabs.filter((e) => e !== t.tab) }),
          3: (e, t) =>
            e.panels.includes(t.panel)
              ? e
              : {
                  ...e,
                  panels: (0, x.wl)([...e.panels, t.panel], (e) => e.current),
                },
          4: (e, t) => ({
            ...e,
            panels: e.panels.filter((e) => e !== t.panel),
          }),
        },
        C = (0, s.createContext)(null);
      function k(e) {
        let t = (0, s.useContext)(C);
        if (null === t) {
          let t = Error(
            '<'.concat(e, ' /> is missing a parent <Tab.Group /> component.')
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, k), t);
        }
        return t;
      }
      C.displayName = 'TabsDataContext';
      let S = (0, s.createContext)(null);
      function F(e) {
        let t = (0, s.useContext)(S);
        if (null === t) {
          let t = Error(
            '<'.concat(e, ' /> is missing a parent <Tab.Group /> component.')
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, F), t);
        }
        return t;
      }
      function M(e, t) {
        return (0, g.Y)(t.type, E, e, t);
      }
      S.displayName = 'TabsActionsContext';
      let A = h.Ac.RenderStrategy | h.Ac.Static,
        j = (0, h.FX)(function (e, t) {
          var r, n;
          let c = (0, s.useId)(),
            {
              id: p = 'headlessui-tabs-tab-'.concat(c),
              disabled: b = !1,
              autoFocus: _ = !1,
              ...P
            } = e,
            {
              orientation: I,
              activation: T,
              selectedIndex: D,
              tabs: E,
              panels: C,
            } = k('Tab'),
            S = F('Tab'),
            M = k('Tab'),
            [A, j] = (0, s.useState)(null),
            N = (0, s.useRef)(null),
            R = (0, f.P)(N, t, j);
          (0, i.s)(() => S.registerTab(N), [S, N]);
          let B = w('tabs'),
            U = E.indexOf(N);
          -1 === U && (U = B);
          let O = U === D,
            Y = (0, u._)((e) => {
              var t;
              let r = e();
              if (r === x.Me.Success && 'auto' === T) {
                let e = null == (t = (0, m.T)(N)) ? void 0 : t.activeElement,
                  r = M.tabs.findIndex((t) => t.current === e);
                -1 !== r && S.change(r);
              }
              return r;
            }),
            L = (0, u._)((e) => {
              let t = E.map((e) => e.current).filter(Boolean);
              if (e.key === y.D.Space || e.key === y.D.Enter) {
                e.preventDefault(), e.stopPropagation(), S.change(U);
                return;
              }
              switch (e.key) {
                case y.D.Home:
                case y.D.PageUp:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    Y(() => (0, x.CU)(t, x.BD.First))
                  );
                case y.D.End:
                case y.D.PageDown:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    Y(() => (0, x.CU)(t, x.BD.Last))
                  );
              }
              if (
                Y(() =>
                  (0, g.Y)(I, {
                    vertical: () =>
                      e.key === y.D.ArrowUp
                        ? (0, x.CU)(t, x.BD.Previous | x.BD.WrapAround)
                        : e.key === y.D.ArrowDown
                          ? (0, x.CU)(t, x.BD.Next | x.BD.WrapAround)
                          : x.Me.Error,
                    horizontal: () =>
                      e.key === y.D.ArrowLeft
                        ? (0, x.CU)(t, x.BD.Previous | x.BD.WrapAround)
                        : e.key === y.D.ArrowRight
                          ? (0, x.CU)(t, x.BD.Next | x.BD.WrapAround)
                          : x.Me.Error,
                  })
                ) === x.Me.Success
              )
                return e.preventDefault();
            }),
            G = (0, s.useRef)(!1),
            V = (0, u._)(() => {
              var e;
              G.current ||
                ((G.current = !0),
                null == (e = N.current) || e.focus({ preventScroll: !0 }),
                S.change(U),
                (0, v._)(() => {
                  G.current = !1;
                }));
            }),
            W = (0, u._)((e) => {
              e.preventDefault();
            }),
            { isFocusVisible: X, focusProps: q } = (0, a.o)({ autoFocus: _ }),
            { isHovered: Z, hoverProps: z } = (0, l.M)({ isDisabled: b }),
            { pressed: H, pressProps: K } = (0, o.Z)({ disabled: b }),
            $ = (0, s.useMemo)(
              () => ({
                selected: O,
                hover: Z,
                active: H,
                focus: X,
                autofocus: _,
                disabled: b,
              }),
              [O, Z, X, H, _, b]
            ),
            J = (0, h.v6)(
              {
                ref: R,
                onKeyDown: L,
                onMouseDown: W,
                onClick: V,
                id: p,
                role: 'tab',
                type: (0, d.c)(e, A),
                'aria-controls':
                  null == (n = null == (r = C[U]) ? void 0 : r.current)
                    ? void 0
                    : n.id,
                'aria-selected': O,
                tabIndex: O ? 0 : -1,
                disabled: b || void 0,
                autoFocus: _,
              },
              q,
              z,
              K
            );
          return (0, h.Ci)()({
            ourProps: J,
            theirProps: P,
            slot: $,
            defaultTag: 'button',
            name: 'Tabs.Tab',
          });
        }),
        N = (0, h.FX)(function (e, t) {
          let {
              defaultIndex: r = 0,
              vertical: n = !1,
              manual: a = !1,
              onChange: l,
              selectedIndex: o = null,
              ...d
            } = e,
            p = n ? 'vertical' : 'horizontal',
            g = a ? 'manual' : 'auto',
            v = null !== o,
            m = (0, c.Y)({ isControlled: v }),
            _ = (0, f.P)(t),
            [w, y] = (0, s.useReducer)(M, {
              info: m,
              selectedIndex: null != o ? o : r,
              tabs: [],
              panels: [],
            }),
            I = (0, s.useMemo)(
              () => ({ selectedIndex: w.selectedIndex }),
              [w.selectedIndex]
            ),
            T = (0, c.Y)(l || (() => {})),
            D = (0, c.Y)(w.tabs),
            E = (0, s.useMemo)(
              () => ({ orientation: p, activation: g, ...w }),
              [p, g, w]
            ),
            k = (0, u._)(
              (e) => (y({ type: 1, tab: e }), () => y({ type: 2, tab: e }))
            ),
            F = (0, u._)(
              (e) => (y({ type: 3, panel: e }), () => y({ type: 4, panel: e }))
            ),
            A = (0, u._)((e) => {
              j.current !== e && T.current(e), v || y({ type: 0, index: e });
            }),
            j = (0, c.Y)(v ? e.selectedIndex : w.selectedIndex),
            N = (0, s.useMemo)(
              () => ({ registerTab: k, registerPanel: F, change: A }),
              []
            );
          (0, i.s)(() => {
            y({ type: 0, index: null != o ? o : r });
          }, [o]),
            (0, i.s)(() => {
              if (void 0 === j.current || w.tabs.length <= 0) return;
              let e = (0, x.wl)(w.tabs, (e) => e.current);
              e.some((e, t) => w.tabs[t] !== e) &&
                A(e.indexOf(w.tabs[j.current]));
            });
          let R = (0, h.Ci)();
          return s.createElement(
            P,
            null,
            s.createElement(
              S.Provider,
              { value: N },
              s.createElement(
                C.Provider,
                { value: E },
                E.tabs.length <= 0 &&
                  s.createElement(b, {
                    onFocus: () => {
                      var e, t;
                      for (let r of D.current)
                        if (
                          (null == (e = r.current) ? void 0 : e.tabIndex) === 0
                        )
                          return null == (t = r.current) || t.focus(), !0;
                      return !1;
                    },
                  }),
                R({
                  ourProps: { ref: _ },
                  theirProps: d,
                  slot: I,
                  defaultTag: 'div',
                  name: 'Tabs',
                })
              )
            )
          );
        }),
        R = (0, h.FX)(function (e, t) {
          let { orientation: r, selectedIndex: n } = k('Tab.List'),
            a = (0, f.P)(t),
            l = (0, s.useMemo)(() => ({ selectedIndex: n }), [n]);
          return (0, h.Ci)()({
            ourProps: { ref: a, role: 'tablist', 'aria-orientation': r },
            theirProps: e,
            slot: l,
            defaultTag: 'div',
            name: 'Tabs.List',
          });
        }),
        B = (0, h.FX)(function (e, t) {
          let { selectedIndex: r } = k('Tab.Panels'),
            n = (0, f.P)(t),
            a = (0, s.useMemo)(() => ({ selectedIndex: r }), [r]);
          return (0, h.Ci)()({
            ourProps: { ref: n },
            theirProps: e,
            slot: a,
            defaultTag: 'div',
            name: 'Tabs.Panels',
          });
        }),
        U = (0, h.FX)(function (e, t) {
          var r, n, l, o;
          let u = (0, s.useId)(),
            {
              id: c = 'headlessui-tabs-panel-'.concat(u),
              tabIndex: d = 0,
              ...b
            } = e,
            { selectedIndex: x, tabs: g, panels: v } = k('Tab.Panel'),
            m = F('Tab.Panel'),
            _ = (0, s.useRef)(null),
            P = (0, f.P)(_, t);
          (0, i.s)(() => m.registerPanel(_), [m, _]);
          let y = w('panels'),
            I = v.indexOf(_);
          -1 === I && (I = y);
          let T = I === x,
            { isFocusVisible: D, focusProps: E } = (0, a.o)(),
            C = (0, s.useMemo)(() => ({ selected: T, focus: D }), [T, D]),
            S = (0, h.v6)(
              {
                ref: P,
                id: c,
                role: 'tabpanel',
                'aria-labelledby':
                  null == (n = null == (r = g[I]) ? void 0 : r.current)
                    ? void 0
                    : n.id,
                tabIndex: T ? d : -1,
              },
              E
            ),
            M = (0, h.Ci)();
          return T ||
            (null != (l = b.unmount) && !l) ||
            (null != (o = b.static) && o)
            ? M({
                ourProps: S,
                theirProps: b,
                slot: C,
                defaultTag: 'div',
                features: A,
                visible: T,
                name: 'Tabs.Panel',
              })
            : s.createElement(p.j, { 'aria-hidden': 'true', ...S });
        }),
        O = Object.assign(j, { Group: N, List: R, Panels: B, Panel: U });
      var Y = r(4164);
      function L(e) {
        return !!e && 'object' == typeof e && 'label' in e;
      }
      let G = ({
          items: e,
          children: t,
          storageKey: r,
          defaultIndex: a = 0,
          selectedIndex: l,
          onChange: o,
          className: u,
          tabClassName: i,
        }) => {
          let [c, d] = (0, s.useState)(a);
          (0, s.useEffect)(() => {
            void 0 !== l && d(l);
          }, [l]),
            (0, s.useEffect)(() => {
              if (!r) return;
              function e(e) {
                e.key === r && d(Number(e.newValue));
              }
              let t = Number(localStorage.getItem(r));
              return (
                d(Number.isNaN(t) ? 0 : t),
                window.addEventListener('storage', e),
                () => {
                  window.removeEventListener('storage', e);
                }
              );
            }, []);
          let f = (0, s.useCallback)((e) => {
            if (r) {
              let t = String(e);
              localStorage.setItem(r, t),
                window.dispatchEvent(
                  new StorageEvent('storage', { key: r, newValue: t })
                );
              return;
            }
            d(e), o?.(e);
          }, []);
          return (0, n.jsxs)(N, {
            selectedIndex: c,
            defaultIndex: a,
            onChange: f,
            tabIndex: -1,
            children: [
              (0, n.jsx)(R, {
                className: (e) =>
                  (0, Y.A)(
                    'nextra-scrollbar _overflow-x-auto _overscroll-x-contain _overflow-y-hidden',
                    '_mt-4 _flex _w-full _gap-2 _border-b _border-gray-200 _pb-px dark:_border-neutral-800',
                    'nextra-focus',
                    'function' == typeof u ? u(e) : u
                  ),
                children: e.map((e, t) =>
                  (0, n.jsx)(
                    O,
                    {
                      disabled: L(e) && e.disabled,
                      className: (e) => {
                        let {
                          selected: t,
                          disabled: r,
                          hover: n,
                          focus: a,
                        } = e;
                        return (0, Y.A)(
                          a && 'nextra-focusable _ring-inset',
                          t && '_outline-none',
                          '_whitespace-nowrap',
                          '_rounded-t _p-2 _font-medium _leading-5 _transition-colors',
                          '_-mb-0.5 _select-none _border-b-2',
                          t
                            ? '_border-current'
                            : n
                              ? '_border-gray-200 dark:_border-neutral-800'
                              : '_border-transparent',
                          t
                            ? '_text-primary-600'
                            : r
                              ? '_text-gray-400 dark:_text-neutral-600 _pointer-events-none'
                              : n
                                ? '_text-black dark:_text-white'
                                : '_text-gray-600 dark:_text-gray-200',
                          'function' == typeof i ? i(e) : i
                        );
                      },
                      children: L(e) ? e.label : e,
                    },
                    t
                  )
                ),
              }),
              (0, n.jsx)(B, { children: t }),
            ],
          });
        },
        V = Object.assign((e) => (0, n.jsx)(G, { ...e }), {
          Tab: ({ children: e, unmount: t = !1, className: r, ...a }) =>
            (0, n.jsx)(U, {
              ...a,
              unmount: t,
              className: (e) =>
                (0, Y.A)(
                  '_rounded _mt-6',
                  e.focus && 'nextra-focusable',
                  'function' == typeof r ? r(e) : r
                ),
              children: e,
            }),
        });
    },
    1355: (e, t, r) => {
      r.d(t, { R: () => u });
      var n = r(8453),
        a = r(9965),
        l = r.n(a),
        s = r(6540);
      let o = {
          img: (e) =>
            (0, s.createElement)('object' == typeof e.src ? l() : 'img', e),
        },
        u = (e) => ({ ...o, ...(0, n.R)(e) });
    },
    7849: (e, t, r) => {
      r.d(t, { e: () => i });
      var n = r(4848),
        a = r(3032),
        l = r(356);
      let s = (0, r(6540).createContext)({}),
        o = s.Provider;
      s.displayName = 'SSG';
      var u = r(1355);
      function i(e, t, r, n) {
        let l = globalThis[a.VZ];
        return (
          (l.route = t),
          (l.pageMap = r.pageMap),
          (l.context[t] = { Content: e, pageOpts: r, useTOC: n }),
          c
        );
      }
      function c({ __nextra_pageMap: e = [], __nextra_dynamic_opts: t, ...r }) {
        let s = globalThis[a.VZ],
          { Layout: u, themeConfig: i } = s,
          { route: c, locale: f } = (0, l.r)(),
          p = s.context[c];
        if (!p)
          throw Error(
            `No content found for the "${c}" route. Please report it as a bug.`
          );
        let { pageOpts: b, useTOC: x, Content: g } = p;
        if (c.startsWith('/[')) b.pageMap = e;
        else
          for (let { route: t, children: r } of e) {
            let e = t.split('/').slice(f ? 2 : 1);
            (function e(t, [r, ...n]) {
              for (let a of t)
                if ('children' in a && r === a.name)
                  return n.length ? e(a.children, n) : a;
            })(b.pageMap, e).children = r;
          }
        if (t) {
          let { title: e, frontMatter: r } = t;
          b = { ...b, title: e, frontMatter: r };
        }
        return (0, n.jsx)(u, {
          themeConfig: i,
          pageOpts: b,
          pageProps: r,
          children: (0, n.jsx)(o, {
            value: r,
            children: (0, n.jsx)(d, {
              useTOC: x,
              children: (0, n.jsx)(g, { ...r }),
            }),
          }),
        });
      }
      function d({ children: e, useTOC: t }) {
        let { wrapper: r } = (0, u.R)();
        return (0, n.jsx)(f, { useTOC: t, wrapper: r, children: e });
      }
      function f({ children: e, useTOC: t, wrapper: r, ...a }) {
        let l = t(a);
        return r ? (0, n.jsx)(r, { toc: l, children: e }) : e;
      }
    },
  },
]);
