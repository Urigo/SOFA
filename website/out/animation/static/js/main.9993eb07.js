/*! For license information please see main.9993eb07.js.LICENSE.txt */
(function () {
  var __webpack_modules__ = {
      625: function (module, exports, __webpack_require__) {
        var factory;
        'undefined' !== typeof navigator &&
          ((factory = function () {
            'use strict';
            var svgNS = 'http://www.w3.org/2000/svg',
              locationHref = '',
              _useWebWorker = !1,
              initialDefaultFrame = -999999,
              setWebWorker = function (t) {
                _useWebWorker = !!t;
              },
              getWebWorker = function () {
                return _useWebWorker;
              },
              setLocationHref = function (t) {
                locationHref = t;
              },
              getLocationHref = function () {
                return locationHref;
              };
            function createTag(t) {
              return document.createElement(t);
            }
            function extendPrototype(t, e) {
              var i,
                r,
                a = t.length;
              for (i = 0; i < a; i += 1)
                for (var n in (r = t[i].prototype))
                  Object.prototype.hasOwnProperty.call(r, n) &&
                    (e.prototype[n] = r[n]);
            }
            function getDescriptor(t, e) {
              return Object.getOwnPropertyDescriptor(t, e);
            }
            function createProxyFunction(t) {
              function e() {}
              return (e.prototype = t), e;
            }
            var audioControllerFactory = (function () {
                function t(t) {
                  (this.audios = []),
                    (this.audioFactory = t),
                    (this._volume = 1),
                    (this._isMuted = !1);
                }
                return (
                  (t.prototype = {
                    addAudio: function (t) {
                      this.audios.push(t);
                    },
                    pause: function () {
                      var t,
                        e = this.audios.length;
                      for (t = 0; t < e; t += 1) this.audios[t].pause();
                    },
                    resume: function () {
                      var t,
                        e = this.audios.length;
                      for (t = 0; t < e; t += 1) this.audios[t].resume();
                    },
                    setRate: function (t) {
                      var e,
                        i = this.audios.length;
                      for (e = 0; e < i; e += 1) this.audios[e].setRate(t);
                    },
                    createAudio: function (t) {
                      return this.audioFactory
                        ? this.audioFactory(t)
                        : window.Howl
                          ? new window.Howl({ src: [t] })
                          : {
                              isPlaying: !1,
                              play: function () {
                                this.isPlaying = !0;
                              },
                              seek: function () {
                                this.isPlaying = !1;
                              },
                              playing: function () {},
                              rate: function () {},
                              setVolume: function () {},
                            };
                    },
                    setAudioFactory: function (t) {
                      this.audioFactory = t;
                    },
                    setVolume: function (t) {
                      (this._volume = t), this._updateVolume();
                    },
                    mute: function () {
                      (this._isMuted = !0), this._updateVolume();
                    },
                    unmute: function () {
                      (this._isMuted = !1), this._updateVolume();
                    },
                    getVolume: function () {
                      return this._volume;
                    },
                    _updateVolume: function () {
                      var t,
                        e = this.audios.length;
                      for (t = 0; t < e; t += 1)
                        this.audios[t].volume(
                          this._volume * (this._isMuted ? 0 : 1)
                        );
                    },
                  }),
                  function () {
                    return new t();
                  }
                );
              })(),
              createTypedArray = (function () {
                function t(t, e) {
                  var i,
                    r = 0,
                    a = [];
                  switch (t) {
                    case 'int16':
                    case 'uint8c':
                      i = 1;
                      break;
                    default:
                      i = 1.1;
                  }
                  for (r = 0; r < e; r += 1) a.push(i);
                  return a;
                }
                return 'function' === typeof Uint8ClampedArray &&
                  'function' === typeof Float32Array
                  ? function (e, i) {
                      return 'float32' === e
                        ? new Float32Array(i)
                        : 'int16' === e
                          ? new Int16Array(i)
                          : 'uint8c' === e
                            ? new Uint8ClampedArray(i)
                            : t(e, i);
                    }
                  : t;
              })();
            function createSizedArray(t) {
              return Array.apply(null, { length: t });
            }
            function _typeof$6(t) {
              return (
                (_typeof$6 =
                  'function' === typeof Symbol &&
                  'symbol' === typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          'function' === typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                      }),
                _typeof$6(t)
              );
            }
            var subframeEnabled = !0,
              expressionsPlugin = null,
              idPrefix$1 = '',
              isSafari = /^((?!chrome|android).)*safari/i.test(
                navigator.userAgent
              ),
              _shouldRoundValues = !1,
              bmPow = Math.pow,
              bmSqrt = Math.sqrt,
              bmFloor = Math.floor,
              bmMax = Math.max,
              bmMin = Math.min,
              BMMath = {};
            function ProjectInterface$1() {
              return {};
            }
            !(function () {
              var t,
                e = [
                  'abs',
                  'acos',
                  'acosh',
                  'asin',
                  'asinh',
                  'atan',
                  'atanh',
                  'atan2',
                  'ceil',
                  'cbrt',
                  'expm1',
                  'clz32',
                  'cos',
                  'cosh',
                  'exp',
                  'floor',
                  'fround',
                  'hypot',
                  'imul',
                  'log',
                  'log1p',
                  'log2',
                  'log10',
                  'max',
                  'min',
                  'pow',
                  'random',
                  'round',
                  'sign',
                  'sin',
                  'sinh',
                  'sqrt',
                  'tan',
                  'tanh',
                  'trunc',
                  'E',
                  'LN10',
                  'LN2',
                  'LOG10E',
                  'LOG2E',
                  'PI',
                  'SQRT1_2',
                  'SQRT2',
                ],
                i = e.length;
              for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]];
            })(),
              (BMMath.random = Math.random),
              (BMMath.abs = function (t) {
                if ('object' === _typeof$6(t) && t.length) {
                  var e,
                    i = createSizedArray(t.length),
                    r = t.length;
                  for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
                  return i;
                }
                return Math.abs(t);
              });
            var defaultCurveSegments = 150,
              degToRads = Math.PI / 180,
              roundCorner = 0.5519;
            function roundValues(t) {
              _shouldRoundValues = !!t;
            }
            function bmRnd(t) {
              return _shouldRoundValues ? Math.round(t) : t;
            }
            function styleDiv(t) {
              (t.style.position = 'absolute'),
                (t.style.top = 0),
                (t.style.left = 0),
                (t.style.display = 'block'),
                (t.style.transformOrigin = '0 0'),
                (t.style.webkitTransformOrigin = '0 0'),
                (t.style.backfaceVisibility = 'visible'),
                (t.style.webkitBackfaceVisibility = 'visible'),
                (t.style.transformStyle = 'preserve-3d'),
                (t.style.webkitTransformStyle = 'preserve-3d'),
                (t.style.mozTransformStyle = 'preserve-3d');
            }
            function BMEnterFrameEvent(t, e, i, r) {
              (this.type = t),
                (this.currentTime = e),
                (this.totalTime = i),
                (this.direction = r < 0 ? -1 : 1);
            }
            function BMCompleteEvent(t, e) {
              (this.type = t), (this.direction = e < 0 ? -1 : 1);
            }
            function BMCompleteLoopEvent(t, e, i, r) {
              (this.type = t),
                (this.currentLoop = i),
                (this.totalLoops = e),
                (this.direction = r < 0 ? -1 : 1);
            }
            function BMSegmentStartEvent(t, e, i) {
              (this.type = t), (this.firstFrame = e), (this.totalFrames = i);
            }
            function BMDestroyEvent(t, e) {
              (this.type = t), (this.target = e);
            }
            function BMRenderFrameErrorEvent(t, e) {
              (this.type = 'renderFrameError'),
                (this.nativeError = t),
                (this.currentTime = e);
            }
            function BMConfigErrorEvent(t) {
              (this.type = 'configError'), (this.nativeError = t);
            }
            function BMAnimationConfigErrorEvent(t, e) {
              (this.type = t), (this.nativeError = e);
            }
            var createElementID = (function () {
              var t = 0;
              return function () {
                return idPrefix$1 + '__lottie_element_' + (t += 1);
              };
            })();
            function HSVtoRGB(t, e, i) {
              var r, a, n, s, o, l, p, h;
              switch (
                ((l = i * (1 - e)),
                (p = i * (1 - (o = 6 * t - (s = Math.floor(6 * t))) * e)),
                (h = i * (1 - (1 - o) * e)),
                s % 6)
              ) {
                case 0:
                  (r = i), (a = h), (n = l);
                  break;
                case 1:
                  (r = p), (a = i), (n = l);
                  break;
                case 2:
                  (r = l), (a = i), (n = h);
                  break;
                case 3:
                  (r = l), (a = p), (n = i);
                  break;
                case 4:
                  (r = h), (a = l), (n = i);
                  break;
                case 5:
                  (r = i), (a = l), (n = p);
              }
              return [r, a, n];
            }
            function RGBtoHSV(t, e, i) {
              var r,
                a = Math.max(t, e, i),
                n = Math.min(t, e, i),
                s = a - n,
                o = 0 === a ? 0 : s / a,
                l = a / 255;
              switch (a) {
                case n:
                  r = 0;
                  break;
                case t:
                  (r = e - i + s * (e < i ? 6 : 0)), (r /= 6 * s);
                  break;
                case e:
                  (r = i - t + 2 * s), (r /= 6 * s);
                  break;
                case i:
                  (r = t - e + 4 * s), (r /= 6 * s);
              }
              return [r, o, l];
            }
            function addSaturationToRGB(t, e) {
              var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
              return (
                (i[1] += e),
                i[1] > 1 ? (i[1] = 1) : i[1] <= 0 && (i[1] = 0),
                HSVtoRGB(i[0], i[1], i[2])
              );
            }
            function addBrightnessToRGB(t, e) {
              var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
              return (
                (i[2] += e),
                i[2] > 1 ? (i[2] = 1) : i[2] < 0 && (i[2] = 0),
                HSVtoRGB(i[0], i[1], i[2])
              );
            }
            function addHueToRGB(t, e) {
              var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
              return (
                (i[0] += e / 360),
                i[0] > 1 ? (i[0] -= 1) : i[0] < 0 && (i[0] += 1),
                HSVtoRGB(i[0], i[1], i[2])
              );
            }
            var rgbToHex = (function () {
                var t,
                  e,
                  i = [];
                for (t = 0; t < 256; t += 1)
                  (e = t.toString(16)), (i[t] = 1 === e.length ? '0' + e : e);
                return function (t, e, r) {
                  return (
                    t < 0 && (t = 0),
                    e < 0 && (e = 0),
                    r < 0 && (r = 0),
                    '#' + i[t] + i[e] + i[r]
                  );
                };
              })(),
              setSubframeEnabled = function (t) {
                subframeEnabled = !!t;
              },
              getSubframeEnabled = function () {
                return subframeEnabled;
              },
              setExpressionsPlugin = function (t) {
                expressionsPlugin = t;
              },
              getExpressionsPlugin = function () {
                return expressionsPlugin;
              },
              setDefaultCurveSegments = function (t) {
                defaultCurveSegments = t;
              },
              getDefaultCurveSegments = function () {
                return defaultCurveSegments;
              },
              setIdPrefix = function (t) {
                idPrefix$1 = t;
              },
              getIdPrefix = function () {
                return idPrefix$1;
              };
            function createNS(t) {
              return document.createElementNS(svgNS, t);
            }
            function _typeof$5(t) {
              return (
                (_typeof$5 =
                  'function' === typeof Symbol &&
                  'symbol' === typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          'function' === typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                      }),
                _typeof$5(t)
              );
            }
            var dataManager = (function () {
                var t,
                  e,
                  i = 1,
                  r = [],
                  a = {
                    onmessage: function () {},
                    postMessage: function (e) {
                      t({ data: e });
                    },
                  },
                  n = {
                    postMessage: function (t) {
                      a.onmessage({ data: t });
                    },
                  };
                function s() {
                  e ||
                    ((e = (function (e) {
                      if (window.Worker && window.Blob && getWebWorker()) {
                        var i = new Blob(
                            [
                              'var _workerSelf = self; self.onmessage = ',
                              e.toString(),
                            ],
                            { type: 'text/javascript' }
                          ),
                          r = URL.createObjectURL(i);
                        return new Worker(r);
                      }
                      return (t = e), a;
                    })(function (t) {
                      if (
                        (n.dataManager ||
                          (n.dataManager = (function () {
                            function t(a, n) {
                              var s,
                                o,
                                l,
                                p,
                                c,
                                u,
                                f = a.length;
                              for (o = 0; o < f; o += 1)
                                if ('ks' in (s = a[o]) && !s.completed) {
                                  if (
                                    ((s.completed = !0),
                                    s.tt && (a[o - 1].td = s.tt),
                                    s.hasMask)
                                  ) {
                                    var m = s.masksProperties;
                                    for (p = m.length, l = 0; l < p; l += 1)
                                      if (m[l].pt.k.i) r(m[l].pt.k);
                                      else
                                        for (
                                          u = m[l].pt.k.length, c = 0;
                                          c < u;
                                          c += 1
                                        )
                                          m[l].pt.k[c].s &&
                                            r(m[l].pt.k[c].s[0]),
                                            m[l].pt.k[c].e &&
                                              r(m[l].pt.k[c].e[0]);
                                  }
                                  0 === s.ty
                                    ? ((s.layers = e(s.refId, n)),
                                      t(s.layers, n))
                                    : 4 === s.ty
                                      ? i(s.shapes)
                                      : 5 === s.ty && h(s);
                                }
                            }
                            function e(t, e) {
                              var i = (function (t, e) {
                                for (var i = 0, r = e.length; i < r; ) {
                                  if (e[i].id === t) return e[i];
                                  i += 1;
                                }
                                return null;
                              })(t, e);
                              return i
                                ? i.layers.__used
                                  ? JSON.parse(JSON.stringify(i.layers))
                                  : ((i.layers.__used = !0), i.layers)
                                : null;
                            }
                            function i(t) {
                              var e, a, n;
                              for (e = t.length - 1; e >= 0; e -= 1)
                                if ('sh' === t[e].ty)
                                  if (t[e].ks.k.i) r(t[e].ks.k);
                                  else
                                    for (
                                      n = t[e].ks.k.length, a = 0;
                                      a < n;
                                      a += 1
                                    )
                                      t[e].ks.k[a].s && r(t[e].ks.k[a].s[0]),
                                        t[e].ks.k[a].e && r(t[e].ks.k[a].e[0]);
                                else 'gr' === t[e].ty && i(t[e].it);
                            }
                            function r(t) {
                              var e,
                                i = t.i.length;
                              for (e = 0; e < i; e += 1)
                                (t.i[e][0] += t.v[e][0]),
                                  (t.i[e][1] += t.v[e][1]),
                                  (t.o[e][0] += t.v[e][0]),
                                  (t.o[e][1] += t.v[e][1]);
                            }
                            function a(t, e) {
                              var i = e ? e.split('.') : [100, 100, 100];
                              return (
                                t[0] > i[0] ||
                                (!(i[0] > t[0]) &&
                                  (t[1] > i[1] ||
                                    (!(i[1] > t[1]) &&
                                      (t[2] > i[2] ||
                                        (!(i[2] > t[2]) && null)))))
                              );
                            }
                            var n = (function () {
                                var t = [4, 4, 14];
                                function e(t) {
                                  var e = t.t.d;
                                  t.t.d = { k: [{ s: e, t: 0 }] };
                                }
                                function i(t) {
                                  var i,
                                    r = t.length;
                                  for (i = 0; i < r; i += 1)
                                    5 === t[i].ty && e(t[i]);
                                }
                                return function (e) {
                                  if (a(t, e.v) && (i(e.layers), e.assets)) {
                                    var r,
                                      n = e.assets.length;
                                    for (r = 0; r < n; r += 1)
                                      e.assets[r].layers &&
                                        i(e.assets[r].layers);
                                  }
                                };
                              })(),
                              s = (function () {
                                var t = [4, 7, 99];
                                return function (e) {
                                  if (e.chars && !a(t, e.v)) {
                                    var r,
                                      n = e.chars.length;
                                    for (r = 0; r < n; r += 1) {
                                      var s = e.chars[r];
                                      s.data &&
                                        s.data.shapes &&
                                        (i(s.data.shapes),
                                        (s.data.ip = 0),
                                        (s.data.op = 99999),
                                        (s.data.st = 0),
                                        (s.data.sr = 1),
                                        (s.data.ks = {
                                          p: { k: [0, 0], a: 0 },
                                          s: { k: [100, 100], a: 0 },
                                          a: { k: [0, 0], a: 0 },
                                          r: { k: 0, a: 0 },
                                          o: { k: 100, a: 0 },
                                        }),
                                        e.chars[r].t ||
                                          (s.data.shapes.push({ ty: 'no' }),
                                          s.data.shapes[0].it.push({
                                            p: { k: [0, 0], a: 0 },
                                            s: { k: [100, 100], a: 0 },
                                            a: { k: [0, 0], a: 0 },
                                            r: { k: 0, a: 0 },
                                            o: { k: 100, a: 0 },
                                            sk: { k: 0, a: 0 },
                                            sa: { k: 0, a: 0 },
                                            ty: 'tr',
                                          })));
                                    }
                                  }
                                };
                              })(),
                              o = (function () {
                                var t = [5, 7, 15];
                                function e(t) {
                                  var e = t.t.p;
                                  'number' === typeof e.a &&
                                    (e.a = { a: 0, k: e.a }),
                                    'number' === typeof e.p &&
                                      (e.p = { a: 0, k: e.p }),
                                    'number' === typeof e.r &&
                                      (e.r = { a: 0, k: e.r });
                                }
                                function i(t) {
                                  var i,
                                    r = t.length;
                                  for (i = 0; i < r; i += 1)
                                    5 === t[i].ty && e(t[i]);
                                }
                                return function (e) {
                                  if (a(t, e.v) && (i(e.layers), e.assets)) {
                                    var r,
                                      n = e.assets.length;
                                    for (r = 0; r < n; r += 1)
                                      e.assets[r].layers &&
                                        i(e.assets[r].layers);
                                  }
                                };
                              })(),
                              l = (function () {
                                var t = [4, 1, 9];
                                function e(t) {
                                  var i,
                                    r,
                                    a,
                                    n = t.length;
                                  for (i = 0; i < n; i += 1)
                                    if ('gr' === t[i].ty) e(t[i].it);
                                    else if (
                                      'fl' === t[i].ty ||
                                      'st' === t[i].ty
                                    )
                                      if (t[i].c.k && t[i].c.k[0].i)
                                        for (
                                          a = t[i].c.k.length, r = 0;
                                          r < a;
                                          r += 1
                                        )
                                          t[i].c.k[r].s &&
                                            ((t[i].c.k[r].s[0] /= 255),
                                            (t[i].c.k[r].s[1] /= 255),
                                            (t[i].c.k[r].s[2] /= 255),
                                            (t[i].c.k[r].s[3] /= 255)),
                                            t[i].c.k[r].e &&
                                              ((t[i].c.k[r].e[0] /= 255),
                                              (t[i].c.k[r].e[1] /= 255),
                                              (t[i].c.k[r].e[2] /= 255),
                                              (t[i].c.k[r].e[3] /= 255));
                                      else
                                        (t[i].c.k[0] /= 255),
                                          (t[i].c.k[1] /= 255),
                                          (t[i].c.k[2] /= 255),
                                          (t[i].c.k[3] /= 255);
                                }
                                function i(t) {
                                  var i,
                                    r = t.length;
                                  for (i = 0; i < r; i += 1)
                                    4 === t[i].ty && e(t[i].shapes);
                                }
                                return function (e) {
                                  if (a(t, e.v) && (i(e.layers), e.assets)) {
                                    var r,
                                      n = e.assets.length;
                                    for (r = 0; r < n; r += 1)
                                      e.assets[r].layers &&
                                        i(e.assets[r].layers);
                                  }
                                };
                              })(),
                              p = (function () {
                                var t = [4, 4, 18];
                                function e(t) {
                                  var i, r, a;
                                  for (i = t.length - 1; i >= 0; i -= 1)
                                    if ('sh' === t[i].ty)
                                      if (t[i].ks.k.i)
                                        t[i].ks.k.c = t[i].closed;
                                      else
                                        for (
                                          a = t[i].ks.k.length, r = 0;
                                          r < a;
                                          r += 1
                                        )
                                          t[i].ks.k[r].s &&
                                            (t[i].ks.k[r].s[0].c = t[i].closed),
                                            t[i].ks.k[r].e &&
                                              (t[i].ks.k[r].e[0].c =
                                                t[i].closed);
                                    else 'gr' === t[i].ty && e(t[i].it);
                                }
                                function i(t) {
                                  var i,
                                    r,
                                    a,
                                    n,
                                    s,
                                    o,
                                    l = t.length;
                                  for (r = 0; r < l; r += 1) {
                                    if ((i = t[r]).hasMask) {
                                      var p = i.masksProperties;
                                      for (n = p.length, a = 0; a < n; a += 1)
                                        if (p[a].pt.k.i) p[a].pt.k.c = p[a].cl;
                                        else
                                          for (
                                            o = p[a].pt.k.length, s = 0;
                                            s < o;
                                            s += 1
                                          )
                                            p[a].pt.k[s].s &&
                                              (p[a].pt.k[s].s[0].c = p[a].cl),
                                              p[a].pt.k[s].e &&
                                                (p[a].pt.k[s].e[0].c = p[a].cl);
                                    }
                                    4 === i.ty && e(i.shapes);
                                  }
                                }
                                return function (e) {
                                  if (a(t, e.v) && (i(e.layers), e.assets)) {
                                    var r,
                                      n = e.assets.length;
                                    for (r = 0; r < n; r += 1)
                                      e.assets[r].layers &&
                                        i(e.assets[r].layers);
                                  }
                                };
                              })();
                            function h(t) {
                              0 === t.t.a.length && t.t.p;
                            }
                            var c = {
                              completeData: function (i) {
                                i.__complete ||
                                  (l(i),
                                  n(i),
                                  s(i),
                                  o(i),
                                  p(i),
                                  t(i.layers, i.assets),
                                  (function (i, r) {
                                    if (i) {
                                      var a = 0,
                                        n = i.length;
                                      for (a = 0; a < n; a += 1)
                                        1 === i[a].t &&
                                          ((i[a].data.layers = e(
                                            i[a].data.refId,
                                            r
                                          )),
                                          t(i[a].data.layers, r));
                                    }
                                  })(i.chars, i.assets),
                                  (i.__complete = !0));
                              },
                            };
                            return (
                              (c.checkColors = l),
                              (c.checkChars = s),
                              (c.checkPathProperties = o),
                              (c.checkShapes = p),
                              (c.completeLayers = t),
                              c
                            );
                          })()),
                        n.assetLoader ||
                          (n.assetLoader = (function () {
                            function t(t) {
                              var e = t.getResponseHeader('content-type');
                              return (e &&
                                'json' === t.responseType &&
                                -1 !== e.indexOf('json')) ||
                                (t.response &&
                                  'object' === _typeof$5(t.response))
                                ? t.response
                                : t.response && 'string' === typeof t.response
                                  ? JSON.parse(t.response)
                                  : t.responseText
                                    ? JSON.parse(t.responseText)
                                    : null;
                            }
                            return {
                              load: function (e, i, r, a) {
                                var n,
                                  s = new XMLHttpRequest();
                                try {
                                  s.responseType = 'json';
                                } catch (o) {}
                                s.onreadystatechange = function () {
                                  if (4 === s.readyState)
                                    if (200 === s.status) (n = t(s)), r(n);
                                    else
                                      try {
                                        (n = t(s)), r(n);
                                      } catch (o) {
                                        a && a(o);
                                      }
                                };
                                try {
                                  s.open('GET', e, !0);
                                } catch (l) {
                                  s.open('GET', i + '/' + e, !0);
                                }
                                s.send();
                              },
                            };
                          })()),
                        'loadAnimation' === t.data.type)
                      )
                        n.assetLoader.load(
                          t.data.path,
                          t.data.fullPath,
                          function (e) {
                            n.dataManager.completeData(e),
                              n.postMessage({
                                id: t.data.id,
                                payload: e,
                                status: 'success',
                              });
                          },
                          function () {
                            n.postMessage({ id: t.data.id, status: 'error' });
                          }
                        );
                      else if ('complete' === t.data.type) {
                        var e = t.data.animation;
                        n.dataManager.completeData(e),
                          n.postMessage({
                            id: t.data.id,
                            payload: e,
                            status: 'success',
                          });
                      } else
                        'loadData' === t.data.type &&
                          n.assetLoader.load(
                            t.data.path,
                            t.data.fullPath,
                            function (e) {
                              n.postMessage({
                                id: t.data.id,
                                payload: e,
                                status: 'success',
                              });
                            },
                            function () {
                              n.postMessage({ id: t.data.id, status: 'error' });
                            }
                          );
                    })),
                    (e.onmessage = function (t) {
                      var e = t.data,
                        i = e.id,
                        a = r[i];
                      (r[i] = null),
                        'success' === e.status
                          ? a.onComplete(e.payload)
                          : a.onError && a.onError();
                    }));
                }
                function o(t, e) {
                  var a = 'processId_' + (i += 1);
                  return (r[a] = { onComplete: t, onError: e }), a;
                }
                return {
                  loadAnimation: function (t, i, r) {
                    s();
                    var a = o(i, r);
                    e.postMessage({
                      type: 'loadAnimation',
                      path: t,
                      fullPath:
                        window.location.origin + window.location.pathname,
                      id: a,
                    });
                  },
                  loadData: function (t, i, r) {
                    s();
                    var a = o(i, r);
                    e.postMessage({
                      type: 'loadData',
                      path: t,
                      fullPath:
                        window.location.origin + window.location.pathname,
                      id: a,
                    });
                  },
                  completeAnimation: function (t, i, r) {
                    s();
                    var a = o(i, r);
                    e.postMessage({ type: 'complete', animation: t, id: a });
                  },
                };
              })(),
              ImagePreloader = (function () {
                var t = (function () {
                  var t = createTag('canvas');
                  (t.width = 1), (t.height = 1);
                  var e = t.getContext('2d');
                  return (
                    (e.fillStyle = 'rgba(0,0,0,0)'), e.fillRect(0, 0, 1, 1), t
                  );
                })();
                function e() {
                  (this.loadedAssets += 1),
                    this.loadedAssets === this.totalImages &&
                      this.loadedFootagesCount === this.totalFootages &&
                      this.imagesLoadedCb &&
                      this.imagesLoadedCb(null);
                }
                function i() {
                  (this.loadedFootagesCount += 1),
                    this.loadedAssets === this.totalImages &&
                      this.loadedFootagesCount === this.totalFootages &&
                      this.imagesLoadedCb &&
                      this.imagesLoadedCb(null);
                }
                function r(t, e, i) {
                  var r = '';
                  if (t.e) r = t.p;
                  else if (e) {
                    var a = t.p;
                    -1 !== a.indexOf('images/') && (a = a.split('/')[1]),
                      (r = e + a);
                  } else (r = i), (r += t.u ? t.u : ''), (r += t.p);
                  return r;
                }
                function a(t) {
                  var e = 0,
                    i = setInterval(
                      function () {
                        (t.getBBox().width || e > 500) &&
                          (this._imageLoaded(), clearInterval(i)),
                          (e += 1);
                      }.bind(this),
                      50
                    );
                }
                function n(t) {
                  var e = { assetData: t },
                    i = r(t, this.assetsPath, this.path);
                  return (
                    dataManager.loadData(
                      i,
                      function (t) {
                        (e.img = t), this._footageLoaded();
                      }.bind(this),
                      function () {
                        (e.img = {}), this._footageLoaded();
                      }.bind(this)
                    ),
                    e
                  );
                }
                function s() {
                  (this._imageLoaded = e.bind(this)),
                    (this._footageLoaded = i.bind(this)),
                    (this.testImageLoaded = a.bind(this)),
                    (this.createFootageData = n.bind(this)),
                    (this.assetsPath = ''),
                    (this.path = ''),
                    (this.totalImages = 0),
                    (this.totalFootages = 0),
                    (this.loadedAssets = 0),
                    (this.loadedFootagesCount = 0),
                    (this.imagesLoadedCb = null),
                    (this.images = []);
                }
                return (
                  (s.prototype = {
                    loadAssets: function (t, e) {
                      var i;
                      this.imagesLoadedCb = e;
                      var r = t.length;
                      for (i = 0; i < r; i += 1)
                        t[i].layers ||
                          (t[i].t && 'seq' !== t[i].t
                            ? 3 === t[i].t &&
                              ((this.totalFootages += 1),
                              this.images.push(this.createFootageData(t[i])))
                            : ((this.totalImages += 1),
                              this.images.push(this._createImageData(t[i]))));
                    },
                    setAssetsPath: function (t) {
                      this.assetsPath = t || '';
                    },
                    setPath: function (t) {
                      this.path = t || '';
                    },
                    loadedImages: function () {
                      return this.totalImages === this.loadedAssets;
                    },
                    loadedFootages: function () {
                      return this.totalFootages === this.loadedFootagesCount;
                    },
                    destroy: function () {
                      (this.imagesLoadedCb = null), (this.images.length = 0);
                    },
                    getAsset: function (t) {
                      for (var e = 0, i = this.images.length; e < i; ) {
                        if (this.images[e].assetData === t)
                          return this.images[e].img;
                        e += 1;
                      }
                      return null;
                    },
                    createImgData: function (e) {
                      var i = r(e, this.assetsPath, this.path),
                        a = createTag('img');
                      (a.crossOrigin = 'anonymous'),
                        a.addEventListener('load', this._imageLoaded, !1),
                        a.addEventListener(
                          'error',
                          function () {
                            (n.img = t), this._imageLoaded();
                          }.bind(this),
                          !1
                        ),
                        (a.src = i);
                      var n = { img: a, assetData: e };
                      return n;
                    },
                    createImageData: function (e) {
                      var i = r(e, this.assetsPath, this.path),
                        a = createNS('image');
                      isSafari
                        ? this.testImageLoaded(a)
                        : a.addEventListener('load', this._imageLoaded, !1),
                        a.addEventListener(
                          'error',
                          function () {
                            (n.img = t), this._imageLoaded();
                          }.bind(this),
                          !1
                        ),
                        a.setAttributeNS(
                          'http://www.w3.org/1999/xlink',
                          'href',
                          i
                        ),
                        this._elementHelper.append
                          ? this._elementHelper.append(a)
                          : this._elementHelper.appendChild(a);
                      var n = { img: a, assetData: e };
                      return n;
                    },
                    imageLoaded: e,
                    footageLoaded: i,
                    setCacheType: function (t, e) {
                      'svg' === t
                        ? ((this._elementHelper = e),
                          (this._createImageData =
                            this.createImageData.bind(this)))
                        : (this._createImageData =
                            this.createImgData.bind(this));
                    },
                  }),
                  s
                );
              })();
            function BaseEvent() {}
            BaseEvent.prototype = {
              triggerEvent: function (t, e) {
                if (this._cbs[t])
                  for (var i = this._cbs[t], r = 0; r < i.length; r += 1)
                    i[r](e);
              },
              addEventListener: function (t, e) {
                return (
                  this._cbs[t] || (this._cbs[t] = []),
                  this._cbs[t].push(e),
                  function () {
                    this.removeEventListener(t, e);
                  }.bind(this)
                );
              },
              removeEventListener: function (t, e) {
                if (e) {
                  if (this._cbs[t]) {
                    for (var i = 0, r = this._cbs[t].length; i < r; )
                      this._cbs[t][i] === e &&
                        (this._cbs[t].splice(i, 1), (i -= 1), (r -= 1)),
                        (i += 1);
                    this._cbs[t].length || (this._cbs[t] = null);
                  }
                } else this._cbs[t] = null;
              },
            };
            var markerParser = (function () {
                function t(t) {
                  for (
                    var e, i = t.split('\r\n'), r = {}, a = 0, n = 0;
                    n < i.length;
                    n += 1
                  )
                    2 === (e = i[n].split(':')).length &&
                      ((r[e[0]] = e[1].trim()), (a += 1));
                  if (0 === a) throw new Error();
                  return r;
                }
                return function (e) {
                  for (var i = [], r = 0; r < e.length; r += 1) {
                    var a = e[r],
                      n = { time: a.tm, duration: a.dr };
                    try {
                      n.payload = JSON.parse(e[r].cm);
                    } catch (s) {
                      try {
                        n.payload = t(e[r].cm);
                      } catch (o) {
                        n.payload = { name: e[r].cm };
                      }
                    }
                    i.push(n);
                  }
                  return i;
                };
              })(),
              ProjectInterface = (function () {
                function t(t) {
                  this.compositions.push(t);
                }
                return function () {
                  function e(t) {
                    for (var e = 0, i = this.compositions.length; e < i; ) {
                      if (
                        this.compositions[e].data &&
                        this.compositions[e].data.nm === t
                      )
                        return (
                          this.compositions[e].prepareFrame &&
                            this.compositions[e].data.xt &&
                            this.compositions[e].prepareFrame(
                              this.currentFrame
                            ),
                          this.compositions[e].compInterface
                        );
                      e += 1;
                    }
                    return null;
                  }
                  return (
                    (e.compositions = []),
                    (e.currentFrame = 0),
                    (e.registerComposition = t),
                    e
                  );
                };
              })(),
              renderers = {},
              registerRenderer = function (t, e) {
                renderers[t] = e;
              };
            function getRenderer(t) {
              return renderers[t];
            }
            function _typeof$4(t) {
              return (
                (_typeof$4 =
                  'function' === typeof Symbol &&
                  'symbol' === typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          'function' === typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                      }),
                _typeof$4(t)
              );
            }
            var AnimationItem = function () {
              (this._cbs = []),
                (this.name = ''),
                (this.path = ''),
                (this.isLoaded = !1),
                (this.currentFrame = 0),
                (this.currentRawFrame = 0),
                (this.firstFrame = 0),
                (this.totalFrames = 0),
                (this.frameRate = 0),
                (this.frameMult = 0),
                (this.playSpeed = 1),
                (this.playDirection = 1),
                (this.playCount = 0),
                (this.animationData = {}),
                (this.assets = []),
                (this.isPaused = !0),
                (this.autoplay = !1),
                (this.loop = !0),
                (this.renderer = null),
                (this.animationID = createElementID()),
                (this.assetsPath = ''),
                (this.timeCompleted = 0),
                (this.segmentPos = 0),
                (this.isSubframeEnabled = getSubframeEnabled()),
                (this.segments = []),
                (this._idle = !0),
                (this._completedLoop = !1),
                (this.projectInterface = ProjectInterface()),
                (this.imagePreloader = new ImagePreloader()),
                (this.audioController = audioControllerFactory()),
                (this.markers = []),
                (this.configAnimation = this.configAnimation.bind(this)),
                (this.onSetupError = this.onSetupError.bind(this)),
                (this.onSegmentComplete = this.onSegmentComplete.bind(this)),
                (this.drawnFrameEvent = new BMEnterFrameEvent(
                  'drawnFrame',
                  0,
                  0,
                  0
                ));
            };
            extendPrototype([BaseEvent], AnimationItem),
              (AnimationItem.prototype.setParams = function (t) {
                (t.wrapper || t.container) &&
                  (this.wrapper = t.wrapper || t.container);
                var e = 'svg';
                t.animType ? (e = t.animType) : t.renderer && (e = t.renderer);
                var i = getRenderer(e);
                (this.renderer = new i(this, t.rendererSettings)),
                  this.imagePreloader.setCacheType(
                    e,
                    this.renderer.globalData.defs
                  ),
                  this.renderer.setProjectInterface(this.projectInterface),
                  (this.animType = e),
                  '' === t.loop ||
                  null === t.loop ||
                  void 0 === t.loop ||
                  !0 === t.loop
                    ? (this.loop = !0)
                    : !1 === t.loop
                      ? (this.loop = !1)
                      : (this.loop = parseInt(t.loop, 10)),
                  (this.autoplay = !('autoplay' in t) || t.autoplay),
                  (this.name = t.name ? t.name : ''),
                  (this.autoloadSegments =
                    !Object.prototype.hasOwnProperty.call(
                      t,
                      'autoloadSegments'
                    ) || t.autoloadSegments),
                  (this.assetsPath = t.assetsPath),
                  (this.initialSegment = t.initialSegment),
                  t.audioFactory &&
                    this.audioController.setAudioFactory(t.audioFactory),
                  t.animationData
                    ? this.setupAnimation(t.animationData)
                    : t.path &&
                      (-1 !== t.path.lastIndexOf('\\')
                        ? (this.path = t.path.substr(
                            0,
                            t.path.lastIndexOf('\\') + 1
                          ))
                        : (this.path = t.path.substr(
                            0,
                            t.path.lastIndexOf('/') + 1
                          )),
                      (this.fileName = t.path.substr(
                        t.path.lastIndexOf('/') + 1
                      )),
                      (this.fileName = this.fileName.substr(
                        0,
                        this.fileName.lastIndexOf('.json')
                      )),
                      dataManager.loadAnimation(
                        t.path,
                        this.configAnimation,
                        this.onSetupError
                      ));
              }),
              (AnimationItem.prototype.onSetupError = function () {
                this.trigger('data_failed');
              }),
              (AnimationItem.prototype.setupAnimation = function (t) {
                dataManager.completeAnimation(t, this.configAnimation);
              }),
              (AnimationItem.prototype.setData = function (t, e) {
                e && 'object' !== _typeof$4(e) && (e = JSON.parse(e));
                var i = { wrapper: t, animationData: e },
                  r = t.attributes;
                (i.path = r.getNamedItem('data-animation-path')
                  ? r.getNamedItem('data-animation-path').value
                  : r.getNamedItem('data-bm-path')
                    ? r.getNamedItem('data-bm-path').value
                    : r.getNamedItem('bm-path')
                      ? r.getNamedItem('bm-path').value
                      : ''),
                  (i.animType = r.getNamedItem('data-anim-type')
                    ? r.getNamedItem('data-anim-type').value
                    : r.getNamedItem('data-bm-type')
                      ? r.getNamedItem('data-bm-type').value
                      : r.getNamedItem('bm-type')
                        ? r.getNamedItem('bm-type').value
                        : r.getNamedItem('data-bm-renderer')
                          ? r.getNamedItem('data-bm-renderer').value
                          : r.getNamedItem('bm-renderer')
                            ? r.getNamedItem('bm-renderer').value
                            : 'canvas');
                var a = r.getNamedItem('data-anim-loop')
                  ? r.getNamedItem('data-anim-loop').value
                  : r.getNamedItem('data-bm-loop')
                    ? r.getNamedItem('data-bm-loop').value
                    : r.getNamedItem('bm-loop')
                      ? r.getNamedItem('bm-loop').value
                      : '';
                'false' === a
                  ? (i.loop = !1)
                  : 'true' === a
                    ? (i.loop = !0)
                    : '' !== a && (i.loop = parseInt(a, 10));
                var n = r.getNamedItem('data-anim-autoplay')
                  ? r.getNamedItem('data-anim-autoplay').value
                  : r.getNamedItem('data-bm-autoplay')
                    ? r.getNamedItem('data-bm-autoplay').value
                    : !r.getNamedItem('bm-autoplay') ||
                      r.getNamedItem('bm-autoplay').value;
                (i.autoplay = 'false' !== n),
                  (i.name = r.getNamedItem('data-name')
                    ? r.getNamedItem('data-name').value
                    : r.getNamedItem('data-bm-name')
                      ? r.getNamedItem('data-bm-name').value
                      : r.getNamedItem('bm-name')
                        ? r.getNamedItem('bm-name').value
                        : ''),
                  'false' ===
                    (r.getNamedItem('data-anim-prerender')
                      ? r.getNamedItem('data-anim-prerender').value
                      : r.getNamedItem('data-bm-prerender')
                        ? r.getNamedItem('data-bm-prerender').value
                        : r.getNamedItem('bm-prerender')
                          ? r.getNamedItem('bm-prerender').value
                          : '') && (i.prerender = !1),
                  this.setParams(i);
              }),
              (AnimationItem.prototype.includeLayers = function (t) {
                t.op > this.animationData.op &&
                  ((this.animationData.op = t.op),
                  (this.totalFrames = Math.floor(
                    t.op - this.animationData.ip
                  )));
                var e,
                  i,
                  r = this.animationData.layers,
                  a = r.length,
                  n = t.layers,
                  s = n.length;
                for (i = 0; i < s; i += 1)
                  for (e = 0; e < a; ) {
                    if (r[e].id === n[i].id) {
                      r[e] = n[i];
                      break;
                    }
                    e += 1;
                  }
                if (
                  ((t.chars || t.fonts) &&
                    (this.renderer.globalData.fontManager.addChars(t.chars),
                    this.renderer.globalData.fontManager.addFonts(
                      t.fonts,
                      this.renderer.globalData.defs
                    )),
                  t.assets)
                )
                  for (a = t.assets.length, e = 0; e < a; e += 1)
                    this.animationData.assets.push(t.assets[e]);
                (this.animationData.__complete = !1),
                  dataManager.completeAnimation(
                    this.animationData,
                    this.onSegmentComplete
                  );
              }),
              (AnimationItem.prototype.onSegmentComplete = function (t) {
                this.animationData = t;
                var e = getExpressionsPlugin();
                e && e.initExpressions(this), this.loadNextSegment();
              }),
              (AnimationItem.prototype.loadNextSegment = function () {
                var t = this.animationData.segments;
                if (!t || 0 === t.length || !this.autoloadSegments)
                  return (
                    this.trigger('data_ready'),
                    void (this.timeCompleted = this.totalFrames)
                  );
                var e = t.shift();
                this.timeCompleted = e.time * this.frameRate;
                var i =
                  this.path + this.fileName + '_' + this.segmentPos + '.json';
                (this.segmentPos += 1),
                  dataManager.loadData(
                    i,
                    this.includeLayers.bind(this),
                    function () {
                      this.trigger('data_failed');
                    }.bind(this)
                  );
              }),
              (AnimationItem.prototype.loadSegments = function () {
                this.animationData.segments ||
                  (this.timeCompleted = this.totalFrames),
                  this.loadNextSegment();
              }),
              (AnimationItem.prototype.imagesLoaded = function () {
                this.trigger('loaded_images'), this.checkLoaded();
              }),
              (AnimationItem.prototype.preloadImages = function () {
                this.imagePreloader.setAssetsPath(this.assetsPath),
                  this.imagePreloader.setPath(this.path),
                  this.imagePreloader.loadAssets(
                    this.animationData.assets,
                    this.imagesLoaded.bind(this)
                  );
              }),
              (AnimationItem.prototype.configAnimation = function (t) {
                if (this.renderer)
                  try {
                    (this.animationData = t),
                      this.initialSegment
                        ? ((this.totalFrames = Math.floor(
                            this.initialSegment[1] - this.initialSegment[0]
                          )),
                          (this.firstFrame = Math.round(
                            this.initialSegment[0]
                          )))
                        : ((this.totalFrames = Math.floor(
                            this.animationData.op - this.animationData.ip
                          )),
                          (this.firstFrame = Math.round(
                            this.animationData.ip
                          ))),
                      this.renderer.configAnimation(t),
                      t.assets || (t.assets = []),
                      (this.assets = this.animationData.assets),
                      (this.frameRate = this.animationData.fr),
                      (this.frameMult = this.animationData.fr / 1e3),
                      this.renderer.searchExtraCompositions(t.assets),
                      (this.markers = markerParser(t.markers || [])),
                      this.trigger('config_ready'),
                      this.preloadImages(),
                      this.loadSegments(),
                      this.updaFrameModifier(),
                      this.waitForFontsLoaded(),
                      this.isPaused && this.audioController.pause();
                  } catch (e) {
                    this.triggerConfigError(e);
                  }
              }),
              (AnimationItem.prototype.waitForFontsLoaded = function () {
                this.renderer &&
                  (this.renderer.globalData.fontManager.isLoaded
                    ? this.checkLoaded()
                    : setTimeout(this.waitForFontsLoaded.bind(this), 20));
              }),
              (AnimationItem.prototype.checkLoaded = function () {
                if (
                  !this.isLoaded &&
                  this.renderer.globalData.fontManager.isLoaded &&
                  (this.imagePreloader.loadedImages() ||
                    'canvas' !== this.renderer.rendererType) &&
                  this.imagePreloader.loadedFootages()
                ) {
                  this.isLoaded = !0;
                  var t = getExpressionsPlugin();
                  t && t.initExpressions(this),
                    this.renderer.initItems(),
                    setTimeout(
                      function () {
                        this.trigger('DOMLoaded');
                      }.bind(this),
                      0
                    ),
                    this.gotoFrame(),
                    this.autoplay && this.play();
                }
              }),
              (AnimationItem.prototype.resize = function () {
                this.renderer.updateContainerSize();
              }),
              (AnimationItem.prototype.setSubframe = function (t) {
                this.isSubframeEnabled = !!t;
              }),
              (AnimationItem.prototype.gotoFrame = function () {
                (this.currentFrame = this.isSubframeEnabled
                  ? this.currentRawFrame
                  : ~~this.currentRawFrame),
                  this.timeCompleted !== this.totalFrames &&
                    this.currentFrame > this.timeCompleted &&
                    (this.currentFrame = this.timeCompleted),
                  this.trigger('enterFrame'),
                  this.renderFrame(),
                  this.trigger('drawnFrame');
              }),
              (AnimationItem.prototype.renderFrame = function () {
                if (!1 !== this.isLoaded && this.renderer)
                  try {
                    this.renderer.renderFrame(
                      this.currentFrame + this.firstFrame
                    );
                  } catch (t) {
                    this.triggerRenderFrameError(t);
                  }
              }),
              (AnimationItem.prototype.play = function (t) {
                (t && this.name !== t) ||
                  (!0 === this.isPaused &&
                    ((this.isPaused = !1),
                    this.trigger('_pause'),
                    this.audioController.resume(),
                    this._idle &&
                      ((this._idle = !1), this.trigger('_active'))));
              }),
              (AnimationItem.prototype.pause = function (t) {
                (t && this.name !== t) ||
                  (!1 === this.isPaused &&
                    ((this.isPaused = !0),
                    this.trigger('_play'),
                    (this._idle = !0),
                    this.trigger('_idle'),
                    this.audioController.pause()));
              }),
              (AnimationItem.prototype.togglePause = function (t) {
                (t && this.name !== t) ||
                  (!0 === this.isPaused ? this.play() : this.pause());
              }),
              (AnimationItem.prototype.stop = function (t) {
                (t && this.name !== t) ||
                  (this.pause(),
                  (this.playCount = 0),
                  (this._completedLoop = !1),
                  this.setCurrentRawFrameValue(0));
              }),
              (AnimationItem.prototype.getMarkerData = function (t) {
                for (var e, i = 0; i < this.markers.length; i += 1)
                  if ((e = this.markers[i]).payload && e.payload.name === t)
                    return e;
                return null;
              }),
              (AnimationItem.prototype.goToAndStop = function (t, e, i) {
                if (!i || this.name === i) {
                  var r = Number(t);
                  if (isNaN(r)) {
                    var a = this.getMarkerData(t);
                    a && this.goToAndStop(a.time, !0);
                  } else
                    e
                      ? this.setCurrentRawFrameValue(t)
                      : this.setCurrentRawFrameValue(t * this.frameModifier);
                  this.pause();
                }
              }),
              (AnimationItem.prototype.goToAndPlay = function (t, e, i) {
                if (!i || this.name === i) {
                  var r = Number(t);
                  if (isNaN(r)) {
                    var a = this.getMarkerData(t);
                    a &&
                      (a.duration
                        ? this.playSegments([a.time, a.time + a.duration], !0)
                        : this.goToAndStop(a.time, !0));
                  } else this.goToAndStop(r, e, i);
                  this.play();
                }
              }),
              (AnimationItem.prototype.advanceTime = function (t) {
                if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                  var e = this.currentRawFrame + t * this.frameModifier,
                    i = !1;
                  e >= this.totalFrames - 1 && this.frameModifier > 0
                    ? this.loop && this.playCount !== this.loop
                      ? e >= this.totalFrames
                        ? ((this.playCount += 1),
                          this.checkSegments(e % this.totalFrames) ||
                            (this.setCurrentRawFrameValue(e % this.totalFrames),
                            (this._completedLoop = !0),
                            this.trigger('loopComplete')))
                        : this.setCurrentRawFrameValue(e)
                      : this.checkSegments(
                          e > this.totalFrames ? e % this.totalFrames : 0
                        ) || ((i = !0), (e = this.totalFrames - 1))
                    : e < 0
                      ? this.checkSegments(e % this.totalFrames) ||
                        (!this.loop ||
                        (this.playCount-- <= 0 && !0 !== this.loop)
                          ? ((i = !0), (e = 0))
                          : (this.setCurrentRawFrameValue(
                              this.totalFrames + (e % this.totalFrames)
                            ),
                            this._completedLoop
                              ? this.trigger('loopComplete')
                              : (this._completedLoop = !0)))
                      : this.setCurrentRawFrameValue(e),
                    i &&
                      (this.setCurrentRawFrameValue(e),
                      this.pause(),
                      this.trigger('complete'));
                }
              }),
              (AnimationItem.prototype.adjustSegment = function (t, e) {
                (this.playCount = 0),
                  t[1] < t[0]
                    ? (this.frameModifier > 0 &&
                        (this.playSpeed < 0
                          ? this.setSpeed(-this.playSpeed)
                          : this.setDirection(-1)),
                      (this.totalFrames = t[0] - t[1]),
                      (this.timeCompleted = this.totalFrames),
                      (this.firstFrame = t[1]),
                      this.setCurrentRawFrameValue(
                        this.totalFrames - 0.001 - e
                      ))
                    : t[1] > t[0] &&
                      (this.frameModifier < 0 &&
                        (this.playSpeed < 0
                          ? this.setSpeed(-this.playSpeed)
                          : this.setDirection(1)),
                      (this.totalFrames = t[1] - t[0]),
                      (this.timeCompleted = this.totalFrames),
                      (this.firstFrame = t[0]),
                      this.setCurrentRawFrameValue(0.001 + e)),
                  this.trigger('segmentStart');
              }),
              (AnimationItem.prototype.setSegment = function (t, e) {
                var i = -1;
                this.isPaused &&
                  (this.currentRawFrame + this.firstFrame < t
                    ? (i = t)
                    : this.currentRawFrame + this.firstFrame > e &&
                      (i = e - t)),
                  (this.firstFrame = t),
                  (this.totalFrames = e - t),
                  (this.timeCompleted = this.totalFrames),
                  -1 !== i && this.goToAndStop(i, !0);
              }),
              (AnimationItem.prototype.playSegments = function (t, e) {
                if (
                  (e && (this.segments.length = 0),
                  'object' === _typeof$4(t[0]))
                ) {
                  var i,
                    r = t.length;
                  for (i = 0; i < r; i += 1) this.segments.push(t[i]);
                } else this.segments.push(t);
                this.segments.length &&
                  e &&
                  this.adjustSegment(this.segments.shift(), 0),
                  this.isPaused && this.play();
              }),
              (AnimationItem.prototype.resetSegments = function (t) {
                (this.segments.length = 0),
                  this.segments.push([
                    this.animationData.ip,
                    this.animationData.op,
                  ]),
                  t && this.checkSegments(0);
              }),
              (AnimationItem.prototype.checkSegments = function (t) {
                return (
                  !!this.segments.length &&
                  (this.adjustSegment(this.segments.shift(), t), !0)
                );
              }),
              (AnimationItem.prototype.destroy = function (t) {
                (t && this.name !== t) ||
                  !this.renderer ||
                  (this.renderer.destroy(),
                  this.imagePreloader.destroy(),
                  this.trigger('destroy'),
                  (this._cbs = null),
                  (this.onEnterFrame = null),
                  (this.onLoopComplete = null),
                  (this.onComplete = null),
                  (this.onSegmentStart = null),
                  (this.onDestroy = null),
                  (this.renderer = null),
                  (this.renderer = null),
                  (this.imagePreloader = null),
                  (this.projectInterface = null));
              }),
              (AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
                (this.currentRawFrame = t), this.gotoFrame();
              }),
              (AnimationItem.prototype.setSpeed = function (t) {
                (this.playSpeed = t), this.updaFrameModifier();
              }),
              (AnimationItem.prototype.setDirection = function (t) {
                (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
              }),
              (AnimationItem.prototype.setVolume = function (t, e) {
                (e && this.name !== e) || this.audioController.setVolume(t);
              }),
              (AnimationItem.prototype.getVolume = function () {
                return this.audioController.getVolume();
              }),
              (AnimationItem.prototype.mute = function (t) {
                (t && this.name !== t) || this.audioController.mute();
              }),
              (AnimationItem.prototype.unmute = function (t) {
                (t && this.name !== t) || this.audioController.unmute();
              }),
              (AnimationItem.prototype.updaFrameModifier = function () {
                (this.frameModifier =
                  this.frameMult * this.playSpeed * this.playDirection),
                  this.audioController.setRate(
                    this.playSpeed * this.playDirection
                  );
              }),
              (AnimationItem.prototype.getPath = function () {
                return this.path;
              }),
              (AnimationItem.prototype.getAssetsPath = function (t) {
                var e = '';
                if (t.e) e = t.p;
                else if (this.assetsPath) {
                  var i = t.p;
                  -1 !== i.indexOf('images/') && (i = i.split('/')[1]),
                    (e = this.assetsPath + i);
                } else (e = this.path), (e += t.u ? t.u : ''), (e += t.p);
                return e;
              }),
              (AnimationItem.prototype.getAssetData = function (t) {
                for (var e = 0, i = this.assets.length; e < i; ) {
                  if (t === this.assets[e].id) return this.assets[e];
                  e += 1;
                }
                return null;
              }),
              (AnimationItem.prototype.hide = function () {
                this.renderer.hide();
              }),
              (AnimationItem.prototype.show = function () {
                this.renderer.show();
              }),
              (AnimationItem.prototype.getDuration = function (t) {
                return t ? this.totalFrames : this.totalFrames / this.frameRate;
              }),
              (AnimationItem.prototype.updateDocumentData = function (t, e, i) {
                try {
                  this.renderer.getElementByPath(t).updateDocumentData(e, i);
                } catch (r) {}
              }),
              (AnimationItem.prototype.trigger = function (t) {
                if (this._cbs && this._cbs[t])
                  switch (t) {
                    case 'enterFrame':
                      this.triggerEvent(
                        t,
                        new BMEnterFrameEvent(
                          t,
                          this.currentFrame,
                          this.totalFrames,
                          this.frameModifier
                        )
                      );
                      break;
                    case 'drawnFrame':
                      (this.drawnFrameEvent.currentTime = this.currentFrame),
                        (this.drawnFrameEvent.totalTime = this.totalFrames),
                        (this.drawnFrameEvent.direction = this.frameModifier),
                        this.triggerEvent(t, this.drawnFrameEvent);
                      break;
                    case 'loopComplete':
                      this.triggerEvent(
                        t,
                        new BMCompleteLoopEvent(
                          t,
                          this.loop,
                          this.playCount,
                          this.frameMult
                        )
                      );
                      break;
                    case 'complete':
                      this.triggerEvent(
                        t,
                        new BMCompleteEvent(t, this.frameMult)
                      );
                      break;
                    case 'segmentStart':
                      this.triggerEvent(
                        t,
                        new BMSegmentStartEvent(
                          t,
                          this.firstFrame,
                          this.totalFrames
                        )
                      );
                      break;
                    case 'destroy':
                      this.triggerEvent(t, new BMDestroyEvent(t, this));
                      break;
                    default:
                      this.triggerEvent(t);
                  }
                'enterFrame' === t &&
                  this.onEnterFrame &&
                  this.onEnterFrame.call(
                    this,
                    new BMEnterFrameEvent(
                      t,
                      this.currentFrame,
                      this.totalFrames,
                      this.frameMult
                    )
                  ),
                  'loopComplete' === t &&
                    this.onLoopComplete &&
                    this.onLoopComplete.call(
                      this,
                      new BMCompleteLoopEvent(
                        t,
                        this.loop,
                        this.playCount,
                        this.frameMult
                      )
                    ),
                  'complete' === t &&
                    this.onComplete &&
                    this.onComplete.call(
                      this,
                      new BMCompleteEvent(t, this.frameMult)
                    ),
                  'segmentStart' === t &&
                    this.onSegmentStart &&
                    this.onSegmentStart.call(
                      this,
                      new BMSegmentStartEvent(
                        t,
                        this.firstFrame,
                        this.totalFrames
                      )
                    ),
                  'destroy' === t &&
                    this.onDestroy &&
                    this.onDestroy.call(this, new BMDestroyEvent(t, this));
              }),
              (AnimationItem.prototype.triggerRenderFrameError = function (t) {
                var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                this.triggerEvent('error', e),
                  this.onError && this.onError.call(this, e);
              }),
              (AnimationItem.prototype.triggerConfigError = function (t) {
                var e = new BMConfigErrorEvent(t, this.currentFrame);
                this.triggerEvent('error', e),
                  this.onError && this.onError.call(this, e);
              });
            var animationManager = (function () {
                var t = {},
                  e = [],
                  i = 0,
                  r = 0,
                  a = 0,
                  n = !0,
                  s = !1;
                function o(t) {
                  for (var i = 0, a = t.target; i < r; )
                    e[i].animation === a &&
                      (e.splice(i, 1), (i -= 1), (r -= 1), a.isPaused || h()),
                      (i += 1);
                }
                function l(t, i) {
                  if (!t) return null;
                  for (var a = 0; a < r; ) {
                    if (e[a].elem === t && null !== e[a].elem)
                      return e[a].animation;
                    a += 1;
                  }
                  var n = new AnimationItem();
                  return c(n, t), n.setData(t, i), n;
                }
                function p() {
                  (a += 1), m();
                }
                function h() {
                  a -= 1;
                }
                function c(t, i) {
                  t.addEventListener('destroy', o),
                    t.addEventListener('_active', p),
                    t.addEventListener('_idle', h),
                    e.push({ elem: i, animation: t }),
                    (r += 1);
                }
                function u(t) {
                  var o,
                    l = t - i;
                  for (o = 0; o < r; o += 1) e[o].animation.advanceTime(l);
                  (i = t), a && !s ? window.requestAnimationFrame(u) : (n = !0);
                }
                function f(t) {
                  (i = t), window.requestAnimationFrame(u);
                }
                function m() {
                  !s && a && n && (window.requestAnimationFrame(f), (n = !1));
                }
                return (
                  (t.registerAnimation = l),
                  (t.loadAnimation = function (t) {
                    var e = new AnimationItem();
                    return c(e, null), e.setParams(t), e;
                  }),
                  (t.setSpeed = function (t, i) {
                    var a;
                    for (a = 0; a < r; a += 1) e[a].animation.setSpeed(t, i);
                  }),
                  (t.setDirection = function (t, i) {
                    var a;
                    for (a = 0; a < r; a += 1)
                      e[a].animation.setDirection(t, i);
                  }),
                  (t.play = function (t) {
                    var i;
                    for (i = 0; i < r; i += 1) e[i].animation.play(t);
                  }),
                  (t.pause = function (t) {
                    var i;
                    for (i = 0; i < r; i += 1) e[i].animation.pause(t);
                  }),
                  (t.stop = function (t) {
                    var i;
                    for (i = 0; i < r; i += 1) e[i].animation.stop(t);
                  }),
                  (t.togglePause = function (t) {
                    var i;
                    for (i = 0; i < r; i += 1) e[i].animation.togglePause(t);
                  }),
                  (t.searchAnimations = function (t, e, i) {
                    var r,
                      a = [].concat(
                        [].slice.call(
                          document.getElementsByClassName('lottie')
                        ),
                        [].slice.call(
                          document.getElementsByClassName('bodymovin')
                        )
                      ),
                      n = a.length;
                    for (r = 0; r < n; r += 1)
                      i && a[r].setAttribute('data-bm-type', i), l(a[r], t);
                    if (e && 0 === n) {
                      i || (i = 'svg');
                      var s = document.getElementsByTagName('body')[0];
                      s.innerText = '';
                      var o = createTag('div');
                      (o.style.width = '100%'),
                        (o.style.height = '100%'),
                        o.setAttribute('data-bm-type', i),
                        s.appendChild(o),
                        l(o, t);
                    }
                  }),
                  (t.resize = function () {
                    var t;
                    for (t = 0; t < r; t += 1) e[t].animation.resize();
                  }),
                  (t.goToAndStop = function (t, i, a) {
                    var n;
                    for (n = 0; n < r; n += 1)
                      e[n].animation.goToAndStop(t, i, a);
                  }),
                  (t.destroy = function (t) {
                    var i;
                    for (i = r - 1; i >= 0; i -= 1) e[i].animation.destroy(t);
                  }),
                  (t.freeze = function () {
                    s = !0;
                  }),
                  (t.unfreeze = function () {
                    (s = !1), m();
                  }),
                  (t.setVolume = function (t, i) {
                    var a;
                    for (a = 0; a < r; a += 1) e[a].animation.setVolume(t, i);
                  }),
                  (t.mute = function (t) {
                    var i;
                    for (i = 0; i < r; i += 1) e[i].animation.mute(t);
                  }),
                  (t.unmute = function (t) {
                    var i;
                    for (i = 0; i < r; i += 1) e[i].animation.unmute(t);
                  }),
                  (t.getRegisteredAnimations = function () {
                    var t,
                      i = e.length,
                      r = [];
                    for (t = 0; t < i; t += 1) r.push(e[t].animation);
                    return r;
                  }),
                  t
                );
              })(),
              BezierFactory = (function () {
                var t = {
                    getBezierEasing: function (t, i, r, a, n) {
                      var s =
                        n ||
                        ('bez_' + t + '_' + i + '_' + r + '_' + a).replace(
                          /\./g,
                          'p'
                        );
                      if (e[s]) return e[s];
                      var o = new p([t, i, r, a]);
                      return (e[s] = o), o;
                    },
                  },
                  e = {},
                  i = 0.1,
                  r = 'function' === typeof Float32Array;
                function a(t, e) {
                  return 1 - 3 * e + 3 * t;
                }
                function n(t, e) {
                  return 3 * e - 6 * t;
                }
                function s(t) {
                  return 3 * t;
                }
                function o(t, e, i) {
                  return ((a(e, i) * t + n(e, i)) * t + s(e)) * t;
                }
                function l(t, e, i) {
                  return 3 * a(e, i) * t * t + 2 * n(e, i) * t + s(e);
                }
                function p(t) {
                  (this._p = t),
                    (this._mSampleValues = r
                      ? new Float32Array(11)
                      : new Array(11)),
                    (this._precomputed = !1),
                    (this.get = this.get.bind(this));
                }
                return (
                  (p.prototype = {
                    get: function (t) {
                      var e = this._p[0],
                        i = this._p[1],
                        r = this._p[2],
                        a = this._p[3];
                      return (
                        this._precomputed || this._precompute(),
                        e === i && r === a
                          ? t
                          : 0 === t
                            ? 0
                            : 1 === t
                              ? 1
                              : o(this._getTForX(t), i, a)
                      );
                    },
                    _precompute: function () {
                      var t = this._p[0],
                        e = this._p[1],
                        i = this._p[2],
                        r = this._p[3];
                      (this._precomputed = !0),
                        (t === e && i === r) || this._calcSampleValues();
                    },
                    _calcSampleValues: function () {
                      for (
                        var t = this._p[0], e = this._p[2], r = 0;
                        r < 11;
                        ++r
                      )
                        this._mSampleValues[r] = o(r * i, t, e);
                    },
                    _getTForX: function (t) {
                      for (
                        var e = this._p[0],
                          r = this._p[2],
                          a = this._mSampleValues,
                          n = 0,
                          s = 1;
                        10 !== s && a[s] <= t;
                        ++s
                      )
                        n += i;
                      var p = n + ((t - a[--s]) / (a[s + 1] - a[s])) * i,
                        h = l(p, e, r);
                      return h >= 0.001
                        ? (function (t, e, i, r) {
                            for (var a = 0; a < 4; ++a) {
                              var n = l(e, i, r);
                              if (0 === n) return e;
                              e -= (o(e, i, r) - t) / n;
                            }
                            return e;
                          })(t, p, e, r)
                        : 0 === h
                          ? p
                          : (function (t, e, i, r, a) {
                              var n,
                                s,
                                l = 0;
                              do {
                                (n = o((s = e + (i - e) / 2), r, a) - t) > 0
                                  ? (i = s)
                                  : (e = s);
                              } while (Math.abs(n) > 1e-7 && ++l < 10);
                              return s;
                            })(t, n, n + i, e, r);
                    },
                  }),
                  t
                );
              })(),
              pooling = {
                double: function (t) {
                  return t.concat(createSizedArray(t.length));
                },
              },
              poolFactory = function (t, e, i) {
                var r = 0,
                  a = t,
                  n = createSizedArray(a);
                return {
                  newElement: function () {
                    return r ? n[(r -= 1)] : e();
                  },
                  release: function (t) {
                    r === a && ((n = pooling.double(n)), (a *= 2)),
                      i && i(t),
                      (n[r] = t),
                      (r += 1);
                  },
                };
              },
              bezierLengthPool = poolFactory(8, function () {
                return {
                  addedLength: 0,
                  percents: createTypedArray(
                    'float32',
                    getDefaultCurveSegments()
                  ),
                  lengths: createTypedArray(
                    'float32',
                    getDefaultCurveSegments()
                  ),
                };
              }),
              segmentsLengthPool = poolFactory(
                8,
                function () {
                  return { lengths: [], totalLength: 0 };
                },
                function (t) {
                  var e,
                    i = t.lengths.length;
                  for (e = 0; e < i; e += 1)
                    bezierLengthPool.release(t.lengths[e]);
                  t.lengths.length = 0;
                }
              );
            function bezFunction() {
              var t = Math;
              function e(t, e, i, r, a, n) {
                var s = t * r + e * a + i * n - a * r - n * t - i * e;
                return s > -0.001 && s < 0.001;
              }
              var i = function (t, e, i, r) {
                var a,
                  n,
                  s,
                  o,
                  l,
                  p,
                  h = getDefaultCurveSegments(),
                  c = 0,
                  u = [],
                  f = [],
                  m = bezierLengthPool.newElement();
                for (s = i.length, a = 0; a < h; a += 1) {
                  for (l = a / (h - 1), p = 0, n = 0; n < s; n += 1)
                    (o =
                      bmPow(1 - l, 3) * t[n] +
                      3 * bmPow(1 - l, 2) * l * i[n] +
                      3 * (1 - l) * bmPow(l, 2) * r[n] +
                      bmPow(l, 3) * e[n]),
                      (u[n] = o),
                      null !== f[n] && (p += bmPow(u[n] - f[n], 2)),
                      (f[n] = u[n]);
                  p && (c += p = bmSqrt(p)),
                    (m.percents[a] = l),
                    (m.lengths[a] = c);
                }
                return (m.addedLength = c), m;
              };
              function r(t) {
                (this.segmentLength = 0), (this.points = new Array(t));
              }
              function a(t, e) {
                (this.partialLength = t), (this.point = e);
              }
              var n = (function () {
                var t = {};
                return function (i, n, s, o) {
                  var l = (
                    i[0] +
                    '_' +
                    i[1] +
                    '_' +
                    n[0] +
                    '_' +
                    n[1] +
                    '_' +
                    s[0] +
                    '_' +
                    s[1] +
                    '_' +
                    o[0] +
                    '_' +
                    o[1]
                  ).replace(/\./g, 'p');
                  if (!t[l]) {
                    var p,
                      h,
                      c,
                      u,
                      f,
                      m,
                      d,
                      x = getDefaultCurveSegments(),
                      y = 0,
                      k = null;
                    2 === i.length &&
                      (i[0] !== n[0] || i[1] !== n[1]) &&
                      e(i[0], i[1], n[0], n[1], i[0] + s[0], i[1] + s[1]) &&
                      e(i[0], i[1], n[0], n[1], n[0] + o[0], n[1] + o[1]) &&
                      (x = 2);
                    var g = new r(x);
                    for (c = s.length, p = 0; p < x; p += 1) {
                      for (
                        d = createSizedArray(c), f = p / (x - 1), m = 0, h = 0;
                        h < c;
                        h += 1
                      )
                        (u =
                          bmPow(1 - f, 3) * i[h] +
                          3 * bmPow(1 - f, 2) * f * (i[h] + s[h]) +
                          3 * (1 - f) * bmPow(f, 2) * (n[h] + o[h]) +
                          bmPow(f, 3) * n[h]),
                          (d[h] = u),
                          null !== k && (m += bmPow(d[h] - k[h], 2));
                      (y += m = bmSqrt(m)),
                        (g.points[p] = new a(m, d)),
                        (k = d);
                    }
                    (g.segmentLength = y), (t[l] = g);
                  }
                  return t[l];
                };
              })();
              function s(t, e) {
                var i = e.percents,
                  r = e.lengths,
                  a = i.length,
                  n = bmFloor((a - 1) * t),
                  s = t * e.addedLength,
                  o = 0;
                if (n === a - 1 || 0 === n || s === r[n]) return i[n];
                for (var l = r[n] > s ? -1 : 1, p = !0; p; )
                  if (
                    (r[n] <= s && r[n + 1] > s
                      ? ((o = (s - r[n]) / (r[n + 1] - r[n])), (p = !1))
                      : (n += l),
                    n < 0 || n >= a - 1)
                  ) {
                    if (n === a - 1) return i[n];
                    p = !1;
                  }
                return i[n] + (i[n + 1] - i[n]) * o;
              }
              var o = createTypedArray('float32', 8);
              return {
                getSegmentsLength: function (t) {
                  var e,
                    r = segmentsLengthPool.newElement(),
                    a = t.c,
                    n = t.v,
                    s = t.o,
                    o = t.i,
                    l = t._length,
                    p = r.lengths,
                    h = 0;
                  for (e = 0; e < l - 1; e += 1)
                    (p[e] = i(n[e], n[e + 1], s[e], o[e + 1])),
                      (h += p[e].addedLength);
                  return (
                    a &&
                      l &&
                      ((p[e] = i(n[e], n[0], s[e], o[0])),
                      (h += p[e].addedLength)),
                    (r.totalLength = h),
                    r
                  );
                },
                getNewSegment: function (e, i, r, a, n, l, p) {
                  n < 0 ? (n = 0) : n > 1 && (n = 1);
                  var h,
                    c = s(n, p),
                    u = s((l = l > 1 ? 1 : l), p),
                    f = e.length,
                    m = 1 - c,
                    d = 1 - u,
                    x = m * m * m,
                    y = c * m * m * 3,
                    k = c * c * m * 3,
                    g = c * c * c,
                    v = m * m * d,
                    _ = c * m * d + m * c * d + m * m * u,
                    E = c * c * d + m * c * u + c * m * u,
                    b = c * c * u,
                    S = m * d * d,
                    A = c * d * d + m * u * d + m * d * u,
                    D = c * u * d + m * u * u + c * d * u,
                    P = c * u * u,
                    G = d * d * d,
                    B = u * d * d + d * u * d + d * d * u,
                    V = u * u * d + d * u * u + u * d * u,
                    F = u * u * u;
                  for (h = 0; h < f; h += 1)
                    (o[4 * h] =
                      t.round(
                        1e3 * (x * e[h] + y * r[h] + k * a[h] + g * i[h])
                      ) / 1e3),
                      (o[4 * h + 1] =
                        t.round(
                          1e3 * (v * e[h] + _ * r[h] + E * a[h] + b * i[h])
                        ) / 1e3),
                      (o[4 * h + 2] =
                        t.round(
                          1e3 * (S * e[h] + A * r[h] + D * a[h] + P * i[h])
                        ) / 1e3),
                      (o[4 * h + 3] =
                        t.round(
                          1e3 * (G * e[h] + B * r[h] + V * a[h] + F * i[h])
                        ) / 1e3);
                  return o;
                },
                getPointInSegment: function (e, i, r, a, n, o) {
                  var l = s(n, o),
                    p = 1 - l;
                  return [
                    t.round(
                      1e3 *
                        (p * p * p * e[0] +
                          (l * p * p + p * l * p + p * p * l) * r[0] +
                          (l * l * p + p * l * l + l * p * l) * a[0] +
                          l * l * l * i[0])
                    ) / 1e3,
                    t.round(
                      1e3 *
                        (p * p * p * e[1] +
                          (l * p * p + p * l * p + p * p * l) * r[1] +
                          (l * l * p + p * l * l + l * p * l) * a[1] +
                          l * l * l * i[1])
                    ) / 1e3,
                  ];
                },
                buildBezierData: n,
                pointOnLine2D: e,
                pointOnLine3D: function (i, r, a, n, s, o, l, p, h) {
                  if (0 === a && 0 === o && 0 === h) return e(i, r, n, s, l, p);
                  var c,
                    u = t.sqrt(
                      t.pow(n - i, 2) + t.pow(s - r, 2) + t.pow(o - a, 2)
                    ),
                    f = t.sqrt(
                      t.pow(l - i, 2) + t.pow(p - r, 2) + t.pow(h - a, 2)
                    ),
                    m = t.sqrt(
                      t.pow(l - n, 2) + t.pow(p - s, 2) + t.pow(h - o, 2)
                    );
                  return (
                    (c =
                      u > f
                        ? u > m
                          ? u - f - m
                          : m - f - u
                        : m > f
                          ? m - f - u
                          : f - u - m) > -1e-4 && c < 1e-4
                  );
                },
              };
            }
            var bez = bezFunction(),
              PropertyFactory = (function () {
                var t = initialDefaultFrame,
                  e = Math.abs;
                function i(t, e) {
                  var i,
                    a = this.offsetTime;
                  'multidimensional' === this.propType &&
                    (i = createTypedArray('float32', this.pv.length));
                  for (
                    var n,
                      s,
                      o,
                      l,
                      p,
                      h,
                      c,
                      u,
                      f,
                      m = e.lastIndex,
                      d = m,
                      x = this.keyframes.length - 1,
                      y = !0;
                    y;

                  ) {
                    if (
                      ((n = this.keyframes[d]),
                      (s = this.keyframes[d + 1]),
                      d === x - 1 && t >= s.t - a)
                    ) {
                      n.h && (n = s), (m = 0);
                      break;
                    }
                    if (s.t - a > t) {
                      m = d;
                      break;
                    }
                    d < x - 1 ? (d += 1) : ((m = 0), (y = !1));
                  }
                  o = this.keyframesMetadata[d] || {};
                  var k,
                    g = s.t - a,
                    v = n.t - a;
                  if (n.to) {
                    o.bezierData ||
                      (o.bezierData = bez.buildBezierData(
                        n.s,
                        s.s || n.e,
                        n.to,
                        n.ti
                      ));
                    var _ = o.bezierData;
                    if (t >= g || t < v) {
                      var E = t >= g ? _.points.length - 1 : 0;
                      for (p = _.points[E].point.length, l = 0; l < p; l += 1)
                        i[l] = _.points[E].point[l];
                    } else {
                      o.__fnct
                        ? (f = o.__fnct)
                        : ((f = BezierFactory.getBezierEasing(
                            n.o.x,
                            n.o.y,
                            n.i.x,
                            n.i.y,
                            n.n
                          ).get),
                          (o.__fnct = f)),
                        (h = f((t - v) / (g - v)));
                      var b,
                        S = _.segmentLength * h,
                        A =
                          e.lastFrame < t && e._lastKeyframeIndex === d
                            ? e._lastAddedLength
                            : 0;
                      for (
                        u =
                          e.lastFrame < t && e._lastKeyframeIndex === d
                            ? e._lastPoint
                            : 0,
                          y = !0,
                          c = _.points.length;
                        y;

                      ) {
                        if (
                          ((A += _.points[u].partialLength),
                          0 === S || 0 === h || u === _.points.length - 1)
                        ) {
                          for (
                            p = _.points[u].point.length, l = 0;
                            l < p;
                            l += 1
                          )
                            i[l] = _.points[u].point[l];
                          break;
                        }
                        if (S >= A && S < A + _.points[u + 1].partialLength) {
                          for (
                            b = (S - A) / _.points[u + 1].partialLength,
                              p = _.points[u].point.length,
                              l = 0;
                            l < p;
                            l += 1
                          )
                            i[l] =
                              _.points[u].point[l] +
                              (_.points[u + 1].point[l] -
                                _.points[u].point[l]) *
                                b;
                          break;
                        }
                        u < c - 1 ? (u += 1) : (y = !1);
                      }
                      (e._lastPoint = u),
                        (e._lastAddedLength = A - _.points[u].partialLength),
                        (e._lastKeyframeIndex = d);
                    }
                  } else {
                    var D, P, G, B, V;
                    if (
                      ((x = n.s.length), (k = s.s || n.e), this.sh && 1 !== n.h)
                    )
                      t >= g
                        ? ((i[0] = k[0]), (i[1] = k[1]), (i[2] = k[2]))
                        : t <= v
                          ? ((i[0] = n.s[0]), (i[1] = n.s[1]), (i[2] = n.s[2]))
                          : (function (t, e) {
                              var i = e[0],
                                r = e[1],
                                a = e[2],
                                n = e[3],
                                s = Math.atan2(
                                  2 * r * n - 2 * i * a,
                                  1 - 2 * r * r - 2 * a * a
                                ),
                                o = Math.asin(2 * i * r + 2 * a * n),
                                l = Math.atan2(
                                  2 * i * n - 2 * r * a,
                                  1 - 2 * i * i - 2 * a * a
                                );
                              (t[0] = s / degToRads),
                                (t[1] = o / degToRads),
                                (t[2] = l / degToRads);
                            })(
                              i,
                              (function (t, e, i) {
                                var r,
                                  a,
                                  n,
                                  s,
                                  o,
                                  l = [],
                                  p = t[0],
                                  h = t[1],
                                  c = t[2],
                                  u = t[3],
                                  f = e[0],
                                  m = e[1],
                                  d = e[2],
                                  x = e[3];
                                return (
                                  (a = p * f + h * m + c * d + u * x) < 0 &&
                                    ((a = -a),
                                    (f = -f),
                                    (m = -m),
                                    (d = -d),
                                    (x = -x)),
                                  1 - a > 1e-6
                                    ? ((r = Math.acos(a)),
                                      (n = Math.sin(r)),
                                      (s = Math.sin((1 - i) * r) / n),
                                      (o = Math.sin(i * r) / n))
                                    : ((s = 1 - i), (o = i)),
                                  (l[0] = s * p + o * f),
                                  (l[1] = s * h + o * m),
                                  (l[2] = s * c + o * d),
                                  (l[3] = s * u + o * x),
                                  l
                                );
                              })(r(n.s), r(k), (t - v) / (g - v))
                            );
                    else
                      for (d = 0; d < x; d += 1)
                        1 !== n.h &&
                          (t >= g
                            ? (h = 1)
                            : t < v
                              ? (h = 0)
                              : (n.o.x.constructor === Array
                                  ? (o.__fnct || (o.__fnct = []),
                                    o.__fnct[d]
                                      ? (f = o.__fnct[d])
                                      : ((D =
                                          void 0 === n.o.x[d]
                                            ? n.o.x[0]
                                            : n.o.x[d]),
                                        (P =
                                          void 0 === n.o.y[d]
                                            ? n.o.y[0]
                                            : n.o.y[d]),
                                        (G =
                                          void 0 === n.i.x[d]
                                            ? n.i.x[0]
                                            : n.i.x[d]),
                                        (B =
                                          void 0 === n.i.y[d]
                                            ? n.i.y[0]
                                            : n.i.y[d]),
                                        (f = BezierFactory.getBezierEasing(
                                          D,
                                          P,
                                          G,
                                          B
                                        ).get),
                                        (o.__fnct[d] = f)))
                                  : o.__fnct
                                    ? (f = o.__fnct)
                                    : ((D = n.o.x),
                                      (P = n.o.y),
                                      (G = n.i.x),
                                      (B = n.i.y),
                                      (f = BezierFactory.getBezierEasing(
                                        D,
                                        P,
                                        G,
                                        B
                                      ).get),
                                      (n.keyframeMetadata = f)),
                                (h = f((t - v) / (g - v))))),
                          (k = s.s || n.e),
                          (V =
                            1 === n.h ? n.s[d] : n.s[d] + (k[d] - n.s[d]) * h),
                          'multidimensional' === this.propType
                            ? (i[d] = V)
                            : (i = V);
                  }
                  return (e.lastIndex = m), i;
                }
                function r(t) {
                  var e = t[0] * degToRads,
                    i = t[1] * degToRads,
                    r = t[2] * degToRads,
                    a = Math.cos(e / 2),
                    n = Math.cos(i / 2),
                    s = Math.cos(r / 2),
                    o = Math.sin(e / 2),
                    l = Math.sin(i / 2),
                    p = Math.sin(r / 2);
                  return [
                    o * l * s + a * n * p,
                    o * n * s + a * l * p,
                    a * l * s - o * n * p,
                    a * n * s - o * l * p,
                  ];
                }
                function a() {
                  var e = this.comp.renderedFrame - this.offsetTime,
                    i = this.keyframes[0].t - this.offsetTime,
                    r =
                      this.keyframes[this.keyframes.length - 1].t -
                      this.offsetTime;
                  if (
                    !(
                      e === this._caching.lastFrame ||
                      (this._caching.lastFrame !== t &&
                        ((this._caching.lastFrame >= r && e >= r) ||
                          (this._caching.lastFrame < i && e < i)))
                    )
                  ) {
                    this._caching.lastFrame >= e &&
                      ((this._caching._lastKeyframeIndex = -1),
                      (this._caching.lastIndex = 0));
                    var a = this.interpolateValue(e, this._caching);
                    this.pv = a;
                  }
                  return (this._caching.lastFrame = e), this.pv;
                }
                function n(t) {
                  var i;
                  if ('unidimensional' === this.propType)
                    (i = t * this.mult),
                      e(this.v - i) > 1e-5 && ((this.v = i), (this._mdf = !0));
                  else
                    for (var r = 0, a = this.v.length; r < a; )
                      (i = t[r] * this.mult),
                        e(this.v[r] - i) > 1e-5 &&
                          ((this.v[r] = i), (this._mdf = !0)),
                        (r += 1);
                }
                function s() {
                  if (
                    this.elem.globalData.frameId !== this.frameId &&
                    this.effectsSequence.length
                  )
                    if (this.lock) this.setVValue(this.pv);
                    else {
                      var t;
                      (this.lock = !0), (this._mdf = this._isFirstFrame);
                      var e = this.effectsSequence.length,
                        i = this.kf ? this.pv : this.data.k;
                      for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                      this.setVValue(i),
                        (this._isFirstFrame = !1),
                        (this.lock = !1),
                        (this.frameId = this.elem.globalData.frameId);
                    }
                }
                function o(t) {
                  this.effectsSequence.push(t),
                    this.container.addDynamicProperty(this);
                }
                function l(t, e, i, r) {
                  (this.propType = 'unidimensional'),
                    (this.mult = i || 1),
                    (this.data = e),
                    (this.v = i ? e.k * i : e.k),
                    (this.pv = e.k),
                    (this._mdf = !1),
                    (this.elem = t),
                    (this.container = r),
                    (this.comp = t.comp),
                    (this.k = !1),
                    (this.kf = !1),
                    (this.vel = 0),
                    (this.effectsSequence = []),
                    (this._isFirstFrame = !0),
                    (this.getValue = s),
                    (this.setVValue = n),
                    (this.addEffect = o);
                }
                function p(t, e, i, r) {
                  var a;
                  (this.propType = 'multidimensional'),
                    (this.mult = i || 1),
                    (this.data = e),
                    (this._mdf = !1),
                    (this.elem = t),
                    (this.container = r),
                    (this.comp = t.comp),
                    (this.k = !1),
                    (this.kf = !1),
                    (this.frameId = -1);
                  var l = e.k.length;
                  for (
                    this.v = createTypedArray('float32', l),
                      this.pv = createTypedArray('float32', l),
                      this.vel = createTypedArray('float32', l),
                      a = 0;
                    a < l;
                    a += 1
                  )
                    (this.v[a] = e.k[a] * this.mult), (this.pv[a] = e.k[a]);
                  (this._isFirstFrame = !0),
                    (this.effectsSequence = []),
                    (this.getValue = s),
                    (this.setVValue = n),
                    (this.addEffect = o);
                }
                function h(e, r, l, p) {
                  (this.propType = 'unidimensional'),
                    (this.keyframes = r.k),
                    (this.keyframesMetadata = []),
                    (this.offsetTime = e.data.st),
                    (this.frameId = -1),
                    (this._caching = {
                      lastFrame: t,
                      lastIndex: 0,
                      value: 0,
                      _lastKeyframeIndex: -1,
                    }),
                    (this.k = !0),
                    (this.kf = !0),
                    (this.data = r),
                    (this.mult = l || 1),
                    (this.elem = e),
                    (this.container = p),
                    (this.comp = e.comp),
                    (this.v = t),
                    (this.pv = t),
                    (this._isFirstFrame = !0),
                    (this.getValue = s),
                    (this.setVValue = n),
                    (this.interpolateValue = i),
                    (this.effectsSequence = [a.bind(this)]),
                    (this.addEffect = o);
                }
                function c(e, r, l, p) {
                  var h;
                  this.propType = 'multidimensional';
                  var c,
                    u,
                    f,
                    m,
                    d = r.k.length;
                  for (h = 0; h < d - 1; h += 1)
                    r.k[h].to &&
                      r.k[h].s &&
                      r.k[h + 1] &&
                      r.k[h + 1].s &&
                      ((c = r.k[h].s),
                      (u = r.k[h + 1].s),
                      (f = r.k[h].to),
                      (m = r.k[h].ti),
                      ((2 === c.length &&
                        (c[0] !== u[0] || c[1] !== u[1]) &&
                        bez.pointOnLine2D(
                          c[0],
                          c[1],
                          u[0],
                          u[1],
                          c[0] + f[0],
                          c[1] + f[1]
                        ) &&
                        bez.pointOnLine2D(
                          c[0],
                          c[1],
                          u[0],
                          u[1],
                          u[0] + m[0],
                          u[1] + m[1]
                        )) ||
                        (3 === c.length &&
                          (c[0] !== u[0] || c[1] !== u[1] || c[2] !== u[2]) &&
                          bez.pointOnLine3D(
                            c[0],
                            c[1],
                            c[2],
                            u[0],
                            u[1],
                            u[2],
                            c[0] + f[0],
                            c[1] + f[1],
                            c[2] + f[2]
                          ) &&
                          bez.pointOnLine3D(
                            c[0],
                            c[1],
                            c[2],
                            u[0],
                            u[1],
                            u[2],
                            u[0] + m[0],
                            u[1] + m[1],
                            u[2] + m[2]
                          ))) &&
                        ((r.k[h].to = null), (r.k[h].ti = null)),
                      c[0] === u[0] &&
                        c[1] === u[1] &&
                        0 === f[0] &&
                        0 === f[1] &&
                        0 === m[0] &&
                        0 === m[1] &&
                        (2 === c.length ||
                          (c[2] === u[2] && 0 === f[2] && 0 === m[2])) &&
                        ((r.k[h].to = null), (r.k[h].ti = null)));
                  (this.effectsSequence = [a.bind(this)]),
                    (this.data = r),
                    (this.keyframes = r.k),
                    (this.keyframesMetadata = []),
                    (this.offsetTime = e.data.st),
                    (this.k = !0),
                    (this.kf = !0),
                    (this._isFirstFrame = !0),
                    (this.mult = l || 1),
                    (this.elem = e),
                    (this.container = p),
                    (this.comp = e.comp),
                    (this.getValue = s),
                    (this.setVValue = n),
                    (this.interpolateValue = i),
                    (this.frameId = -1);
                  var x = r.k[0].s.length;
                  for (
                    this.v = createTypedArray('float32', x),
                      this.pv = createTypedArray('float32', x),
                      h = 0;
                    h < x;
                    h += 1
                  )
                    (this.v[h] = t), (this.pv[h] = t);
                  (this._caching = {
                    lastFrame: t,
                    lastIndex: 0,
                    value: createTypedArray('float32', x),
                  }),
                    (this.addEffect = o);
                }
                return {
                  getProp: function (t, e, i, r, a) {
                    var n;
                    if (e.k.length)
                      if ('number' === typeof e.k[0]) n = new p(t, e, r, a);
                      else
                        switch (i) {
                          case 0:
                            n = new h(t, e, r, a);
                            break;
                          case 1:
                            n = new c(t, e, r, a);
                        }
                    else n = new l(t, e, r, a);
                    return (
                      n.effectsSequence.length && a.addDynamicProperty(n), n
                    );
                  },
                };
              })();
            function DynamicPropertyContainer() {}
            DynamicPropertyContainer.prototype = {
              addDynamicProperty: function (t) {
                -1 === this.dynamicProperties.indexOf(t) &&
                  (this.dynamicProperties.push(t),
                  this.container.addDynamicProperty(this),
                  (this._isAnimated = !0));
              },
              iterateDynamicProperties: function () {
                var t;
                this._mdf = !1;
                var e = this.dynamicProperties.length;
                for (t = 0; t < e; t += 1)
                  this.dynamicProperties[t].getValue(),
                    this.dynamicProperties[t]._mdf && (this._mdf = !0);
              },
              initDynamicPropertyContainer: function (t) {
                (this.container = t),
                  (this.dynamicProperties = []),
                  (this._mdf = !1),
                  (this._isAnimated = !1);
              },
            };
            var pointPool = poolFactory(8, function () {
              return createTypedArray('float32', 2);
            });
            function ShapePath() {
              (this.c = !1),
                (this._length = 0),
                (this._maxLength = 8),
                (this.v = createSizedArray(this._maxLength)),
                (this.o = createSizedArray(this._maxLength)),
                (this.i = createSizedArray(this._maxLength));
            }
            (ShapePath.prototype.setPathData = function (t, e) {
              (this.c = t), this.setLength(e);
              for (var i = 0; i < e; )
                (this.v[i] = pointPool.newElement()),
                  (this.o[i] = pointPool.newElement()),
                  (this.i[i] = pointPool.newElement()),
                  (i += 1);
            }),
              (ShapePath.prototype.setLength = function (t) {
                for (; this._maxLength < t; ) this.doubleArrayLength();
                this._length = t;
              }),
              (ShapePath.prototype.doubleArrayLength = function () {
                (this.v = this.v.concat(createSizedArray(this._maxLength))),
                  (this.i = this.i.concat(createSizedArray(this._maxLength))),
                  (this.o = this.o.concat(createSizedArray(this._maxLength))),
                  (this._maxLength *= 2);
              }),
              (ShapePath.prototype.setXYAt = function (t, e, i, r, a) {
                var n;
                switch (
                  ((this._length = Math.max(this._length, r + 1)),
                  this._length >= this._maxLength && this.doubleArrayLength(),
                  i)
                ) {
                  case 'v':
                    n = this.v;
                    break;
                  case 'i':
                    n = this.i;
                    break;
                  case 'o':
                    n = this.o;
                    break;
                  default:
                    n = [];
                }
                (!n[r] || (n[r] && !a)) && (n[r] = pointPool.newElement()),
                  (n[r][0] = t),
                  (n[r][1] = e);
              }),
              (ShapePath.prototype.setTripleAt = function (
                t,
                e,
                i,
                r,
                a,
                n,
                s,
                o
              ) {
                this.setXYAt(t, e, 'v', s, o),
                  this.setXYAt(i, r, 'o', s, o),
                  this.setXYAt(a, n, 'i', s, o);
              }),
              (ShapePath.prototype.reverse = function () {
                var t = new ShapePath();
                t.setPathData(this.c, this._length);
                var e = this.v,
                  i = this.o,
                  r = this.i,
                  a = 0;
                this.c &&
                  (t.setTripleAt(
                    e[0][0],
                    e[0][1],
                    r[0][0],
                    r[0][1],
                    i[0][0],
                    i[0][1],
                    0,
                    !1
                  ),
                  (a = 1));
                var n,
                  s = this._length - 1,
                  o = this._length;
                for (n = a; n < o; n += 1)
                  t.setTripleAt(
                    e[s][0],
                    e[s][1],
                    r[s][0],
                    r[s][1],
                    i[s][0],
                    i[s][1],
                    n,
                    !1
                  ),
                    (s -= 1);
                return t;
              });
            var shapePool = (function () {
              var t = poolFactory(
                4,
                function () {
                  return new ShapePath();
                },
                function (t) {
                  var e,
                    i = t._length;
                  for (e = 0; e < i; e += 1)
                    pointPool.release(t.v[e]),
                      pointPool.release(t.i[e]),
                      pointPool.release(t.o[e]),
                      (t.v[e] = null),
                      (t.i[e] = null),
                      (t.o[e] = null);
                  (t._length = 0), (t.c = !1);
                }
              );
              return (
                (t.clone = function (e) {
                  var i,
                    r = t.newElement(),
                    a = void 0 === e._length ? e.v.length : e._length;
                  for (r.setLength(a), r.c = e.c, i = 0; i < a; i += 1)
                    r.setTripleAt(
                      e.v[i][0],
                      e.v[i][1],
                      e.o[i][0],
                      e.o[i][1],
                      e.i[i][0],
                      e.i[i][1],
                      i
                    );
                  return r;
                }),
                t
              );
            })();
            function ShapeCollection() {
              (this._length = 0),
                (this._maxLength = 4),
                (this.shapes = createSizedArray(this._maxLength));
            }
            (ShapeCollection.prototype.addShape = function (t) {
              this._length === this._maxLength &&
                ((this.shapes = this.shapes.concat(
                  createSizedArray(this._maxLength)
                )),
                (this._maxLength *= 2)),
                (this.shapes[this._length] = t),
                (this._length += 1);
            }),
              (ShapeCollection.prototype.releaseShapes = function () {
                var t;
                for (t = 0; t < this._length; t += 1)
                  shapePool.release(this.shapes[t]);
                this._length = 0;
              });
            var shapeCollectionPool = (function () {
                var t = {
                    newShapeCollection: function () {
                      return e ? r[(e -= 1)] : new ShapeCollection();
                    },
                    release: function (t) {
                      var a,
                        n = t._length;
                      for (a = 0; a < n; a += 1) shapePool.release(t.shapes[a]);
                      (t._length = 0),
                        e === i && ((r = pooling.double(r)), (i *= 2)),
                        (r[e] = t),
                        (e += 1);
                    },
                  },
                  e = 0,
                  i = 4,
                  r = createSizedArray(i);
                return t;
              })(),
              ShapePropertyFactory = (function () {
                var t = -999999;
                function e(t, e, i) {
                  var r,
                    a,
                    n,
                    s,
                    o,
                    l,
                    p,
                    h,
                    c,
                    u = i.lastIndex,
                    f = this.keyframes;
                  if (t < f[0].t - this.offsetTime)
                    (r = f[0].s[0]), (n = !0), (u = 0);
                  else if (t >= f[f.length - 1].t - this.offsetTime)
                    (r = f[f.length - 1].s
                      ? f[f.length - 1].s[0]
                      : f[f.length - 2].e[0]),
                      (n = !0);
                  else {
                    for (
                      var m, d, x, y = u, k = f.length - 1, g = !0;
                      g &&
                      ((m = f[y]), !((d = f[y + 1]).t - this.offsetTime > t));

                    )
                      y < k - 1 ? (y += 1) : (g = !1);
                    if (
                      ((x = this.keyframesMetadata[y] || {}),
                      (u = y),
                      !(n = 1 === m.h))
                    ) {
                      if (t >= d.t - this.offsetTime) h = 1;
                      else if (t < m.t - this.offsetTime) h = 0;
                      else {
                        var v;
                        x.__fnct
                          ? (v = x.__fnct)
                          : ((v = BezierFactory.getBezierEasing(
                              m.o.x,
                              m.o.y,
                              m.i.x,
                              m.i.y
                            ).get),
                            (x.__fnct = v)),
                          (h = v(
                            (t - (m.t - this.offsetTime)) /
                              (d.t - this.offsetTime - (m.t - this.offsetTime))
                          ));
                      }
                      a = d.s ? d.s[0] : m.e[0];
                    }
                    r = m.s[0];
                  }
                  for (
                    l = e._length, p = r.i[0].length, i.lastIndex = u, s = 0;
                    s < l;
                    s += 1
                  )
                    for (o = 0; o < p; o += 1)
                      (c = n
                        ? r.i[s][o]
                        : r.i[s][o] + (a.i[s][o] - r.i[s][o]) * h),
                        (e.i[s][o] = c),
                        (c = n
                          ? r.o[s][o]
                          : r.o[s][o] + (a.o[s][o] - r.o[s][o]) * h),
                        (e.o[s][o] = c),
                        (c = n
                          ? r.v[s][o]
                          : r.v[s][o] + (a.v[s][o] - r.v[s][o]) * h),
                        (e.v[s][o] = c);
                }
                function i() {
                  var e = this.comp.renderedFrame - this.offsetTime,
                    i = this.keyframes[0].t - this.offsetTime,
                    r =
                      this.keyframes[this.keyframes.length - 1].t -
                      this.offsetTime,
                    a = this._caching.lastFrame;
                  return (
                    (a !== t && ((a < i && e < i) || (a > r && e > r))) ||
                      ((this._caching.lastIndex =
                        a < e ? this._caching.lastIndex : 0),
                      this.interpolateShape(e, this.pv, this._caching)),
                    (this._caching.lastFrame = e),
                    this.pv
                  );
                }
                function r() {
                  this.paths = this.localShapeCollection;
                }
                function a(t) {
                  (function (t, e) {
                    if (t._length !== e._length || t.c !== e.c) return !1;
                    var i,
                      r = t._length;
                    for (i = 0; i < r; i += 1)
                      if (
                        t.v[i][0] !== e.v[i][0] ||
                        t.v[i][1] !== e.v[i][1] ||
                        t.o[i][0] !== e.o[i][0] ||
                        t.o[i][1] !== e.o[i][1] ||
                        t.i[i][0] !== e.i[i][0] ||
                        t.i[i][1] !== e.i[i][1]
                      )
                        return !1;
                    return !0;
                  })(this.v, t) ||
                    ((this.v = shapePool.clone(t)),
                    this.localShapeCollection.releaseShapes(),
                    this.localShapeCollection.addShape(this.v),
                    (this._mdf = !0),
                    (this.paths = this.localShapeCollection));
                }
                function n() {
                  if (this.elem.globalData.frameId !== this.frameId)
                    if (this.effectsSequence.length)
                      if (this.lock) this.setVValue(this.pv);
                      else {
                        var t, e;
                        (this.lock = !0),
                          (this._mdf = !1),
                          (t = this.kf
                            ? this.pv
                            : this.data.ks
                              ? this.data.ks.k
                              : this.data.pt.k);
                        var i = this.effectsSequence.length;
                        for (e = 0; e < i; e += 1)
                          t = this.effectsSequence[e](t);
                        this.setVValue(t),
                          (this.lock = !1),
                          (this.frameId = this.elem.globalData.frameId);
                      }
                    else this._mdf = !1;
                }
                function s(t, e, i) {
                  (this.propType = 'shape'),
                    (this.comp = t.comp),
                    (this.container = t),
                    (this.elem = t),
                    (this.data = e),
                    (this.k = !1),
                    (this.kf = !1),
                    (this._mdf = !1);
                  var a = 3 === i ? e.pt.k : e.ks.k;
                  (this.v = shapePool.clone(a)),
                    (this.pv = shapePool.clone(this.v)),
                    (this.localShapeCollection =
                      shapeCollectionPool.newShapeCollection()),
                    (this.paths = this.localShapeCollection),
                    this.paths.addShape(this.v),
                    (this.reset = r),
                    (this.effectsSequence = []);
                }
                function o(t) {
                  this.effectsSequence.push(t),
                    this.container.addDynamicProperty(this);
                }
                function l(e, a, n) {
                  (this.propType = 'shape'),
                    (this.comp = e.comp),
                    (this.elem = e),
                    (this.container = e),
                    (this.offsetTime = e.data.st),
                    (this.keyframes = 3 === n ? a.pt.k : a.ks.k),
                    (this.keyframesMetadata = []),
                    (this.k = !0),
                    (this.kf = !0);
                  var s = this.keyframes[0].s[0].i.length;
                  (this.v = shapePool.newElement()),
                    this.v.setPathData(this.keyframes[0].s[0].c, s),
                    (this.pv = shapePool.clone(this.v)),
                    (this.localShapeCollection =
                      shapeCollectionPool.newShapeCollection()),
                    (this.paths = this.localShapeCollection),
                    this.paths.addShape(this.v),
                    (this.lastFrame = t),
                    (this.reset = r),
                    (this._caching = { lastFrame: t, lastIndex: 0 }),
                    (this.effectsSequence = [i.bind(this)]);
                }
                (s.prototype.interpolateShape = e),
                  (s.prototype.getValue = n),
                  (s.prototype.setVValue = a),
                  (s.prototype.addEffect = o),
                  (l.prototype.getValue = n),
                  (l.prototype.interpolateShape = e),
                  (l.prototype.setVValue = a),
                  (l.prototype.addEffect = o);
                var p = (function () {
                    var t = roundCorner;
                    function e(t, e) {
                      (this.v = shapePool.newElement()),
                        this.v.setPathData(!0, 4),
                        (this.localShapeCollection =
                          shapeCollectionPool.newShapeCollection()),
                        (this.paths = this.localShapeCollection),
                        this.localShapeCollection.addShape(this.v),
                        (this.d = e.d),
                        (this.elem = t),
                        (this.comp = t.comp),
                        (this.frameId = -1),
                        this.initDynamicPropertyContainer(t),
                        (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                        (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                        this.dynamicProperties.length
                          ? (this.k = !0)
                          : ((this.k = !1), this.convertEllToPath());
                    }
                    return (
                      (e.prototype = {
                        reset: r,
                        getValue: function () {
                          this.elem.globalData.frameId !== this.frameId &&
                            ((this.frameId = this.elem.globalData.frameId),
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertEllToPath());
                        },
                        convertEllToPath: function () {
                          var e = this.p.v[0],
                            i = this.p.v[1],
                            r = this.s.v[0] / 2,
                            a = this.s.v[1] / 2,
                            n = 3 !== this.d,
                            s = this.v;
                          (s.v[0][0] = e),
                            (s.v[0][1] = i - a),
                            (s.v[1][0] = n ? e + r : e - r),
                            (s.v[1][1] = i),
                            (s.v[2][0] = e),
                            (s.v[2][1] = i + a),
                            (s.v[3][0] = n ? e - r : e + r),
                            (s.v[3][1] = i),
                            (s.i[0][0] = n ? e - r * t : e + r * t),
                            (s.i[0][1] = i - a),
                            (s.i[1][0] = n ? e + r : e - r),
                            (s.i[1][1] = i - a * t),
                            (s.i[2][0] = n ? e + r * t : e - r * t),
                            (s.i[2][1] = i + a),
                            (s.i[3][0] = n ? e - r : e + r),
                            (s.i[3][1] = i + a * t),
                            (s.o[0][0] = n ? e + r * t : e - r * t),
                            (s.o[0][1] = i - a),
                            (s.o[1][0] = n ? e + r : e - r),
                            (s.o[1][1] = i + a * t),
                            (s.o[2][0] = n ? e - r * t : e + r * t),
                            (s.o[2][1] = i + a),
                            (s.o[3][0] = n ? e - r : e + r),
                            (s.o[3][1] = i - a * t);
                        },
                      }),
                      extendPrototype([DynamicPropertyContainer], e),
                      e
                    );
                  })(),
                  h = (function () {
                    function t(t, e) {
                      (this.v = shapePool.newElement()),
                        this.v.setPathData(!0, 0),
                        (this.elem = t),
                        (this.comp = t.comp),
                        (this.data = e),
                        (this.frameId = -1),
                        (this.d = e.d),
                        this.initDynamicPropertyContainer(t),
                        1 === e.sy
                          ? ((this.ir = PropertyFactory.getProp(
                              t,
                              e.ir,
                              0,
                              0,
                              this
                            )),
                            (this.is = PropertyFactory.getProp(
                              t,
                              e.is,
                              0,
                              0.01,
                              this
                            )),
                            (this.convertToPath = this.convertStarToPath))
                          : (this.convertToPath = this.convertPolygonToPath),
                        (this.pt = PropertyFactory.getProp(
                          t,
                          e.pt,
                          0,
                          0,
                          this
                        )),
                        (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                        (this.r = PropertyFactory.getProp(
                          t,
                          e.r,
                          0,
                          degToRads,
                          this
                        )),
                        (this.or = PropertyFactory.getProp(
                          t,
                          e.or,
                          0,
                          0,
                          this
                        )),
                        (this.os = PropertyFactory.getProp(
                          t,
                          e.os,
                          0,
                          0.01,
                          this
                        )),
                        (this.localShapeCollection =
                          shapeCollectionPool.newShapeCollection()),
                        this.localShapeCollection.addShape(this.v),
                        (this.paths = this.localShapeCollection),
                        this.dynamicProperties.length
                          ? (this.k = !0)
                          : ((this.k = !1), this.convertToPath());
                    }
                    return (
                      (t.prototype = {
                        reset: r,
                        getValue: function () {
                          this.elem.globalData.frameId !== this.frameId &&
                            ((this.frameId = this.elem.globalData.frameId),
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertToPath());
                        },
                        convertStarToPath: function () {
                          var t,
                            e,
                            i,
                            r,
                            a = 2 * Math.floor(this.pt.v),
                            n = (2 * Math.PI) / a,
                            s = !0,
                            o = this.or.v,
                            l = this.ir.v,
                            p = this.os.v,
                            h = this.is.v,
                            c = (2 * Math.PI * o) / (2 * a),
                            u = (2 * Math.PI * l) / (2 * a),
                            f = -Math.PI / 2;
                          f += this.r.v;
                          var m = 3 === this.data.d ? -1 : 1;
                          for (this.v._length = 0, t = 0; t < a; t += 1) {
                            (i = s ? p : h), (r = s ? c : u);
                            var d = (e = s ? o : l) * Math.cos(f),
                              x = e * Math.sin(f),
                              y =
                                0 === d && 0 === x
                                  ? 0
                                  : x / Math.sqrt(d * d + x * x),
                              k =
                                0 === d && 0 === x
                                  ? 0
                                  : -d / Math.sqrt(d * d + x * x);
                            (d += +this.p.v[0]),
                              (x += +this.p.v[1]),
                              this.v.setTripleAt(
                                d,
                                x,
                                d - y * r * i * m,
                                x - k * r * i * m,
                                d + y * r * i * m,
                                x + k * r * i * m,
                                t,
                                !0
                              ),
                              (s = !s),
                              (f += n * m);
                          }
                        },
                        convertPolygonToPath: function () {
                          var t,
                            e = Math.floor(this.pt.v),
                            i = (2 * Math.PI) / e,
                            r = this.or.v,
                            a = this.os.v,
                            n = (2 * Math.PI * r) / (4 * e),
                            s = 0.5 * -Math.PI,
                            o = 3 === this.data.d ? -1 : 1;
                          for (
                            s += this.r.v, this.v._length = 0, t = 0;
                            t < e;
                            t += 1
                          ) {
                            var l = r * Math.cos(s),
                              p = r * Math.sin(s),
                              h =
                                0 === l && 0 === p
                                  ? 0
                                  : p / Math.sqrt(l * l + p * p),
                              c =
                                0 === l && 0 === p
                                  ? 0
                                  : -l / Math.sqrt(l * l + p * p);
                            (l += +this.p.v[0]),
                              (p += +this.p.v[1]),
                              this.v.setTripleAt(
                                l,
                                p,
                                l - h * n * a * o,
                                p - c * n * a * o,
                                l + h * n * a * o,
                                p + c * n * a * o,
                                t,
                                !0
                              ),
                              (s += i * o);
                          }
                          (this.paths.length = 0), (this.paths[0] = this.v);
                        },
                      }),
                      extendPrototype([DynamicPropertyContainer], t),
                      t
                    );
                  })(),
                  c = (function () {
                    function t(t, e) {
                      (this.v = shapePool.newElement()),
                        (this.v.c = !0),
                        (this.localShapeCollection =
                          shapeCollectionPool.newShapeCollection()),
                        this.localShapeCollection.addShape(this.v),
                        (this.paths = this.localShapeCollection),
                        (this.elem = t),
                        (this.comp = t.comp),
                        (this.frameId = -1),
                        (this.d = e.d),
                        this.initDynamicPropertyContainer(t),
                        (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                        (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                        (this.r = PropertyFactory.getProp(t, e.r, 0, 0, this)),
                        this.dynamicProperties.length
                          ? (this.k = !0)
                          : ((this.k = !1), this.convertRectToPath());
                    }
                    return (
                      (t.prototype = {
                        convertRectToPath: function () {
                          var t = this.p.v[0],
                            e = this.p.v[1],
                            i = this.s.v[0] / 2,
                            r = this.s.v[1] / 2,
                            a = bmMin(i, r, this.r.v),
                            n = a * (1 - roundCorner);
                          (this.v._length = 0),
                            2 === this.d || 1 === this.d
                              ? (this.v.setTripleAt(
                                  t + i,
                                  e - r + a,
                                  t + i,
                                  e - r + a,
                                  t + i,
                                  e - r + n,
                                  0,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t + i,
                                  e + r - a,
                                  t + i,
                                  e + r - n,
                                  t + i,
                                  e + r - a,
                                  1,
                                  !0
                                ),
                                0 !== a
                                  ? (this.v.setTripleAt(
                                      t + i - a,
                                      e + r,
                                      t + i - a,
                                      e + r,
                                      t + i - n,
                                      e + r,
                                      2,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i + a,
                                      e + r,
                                      t - i + n,
                                      e + r,
                                      t - i + a,
                                      e + r,
                                      3,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i,
                                      e + r - a,
                                      t - i,
                                      e + r - a,
                                      t - i,
                                      e + r - n,
                                      4,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i,
                                      e - r + a,
                                      t - i,
                                      e - r + n,
                                      t - i,
                                      e - r + a,
                                      5,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i + a,
                                      e - r,
                                      t - i + a,
                                      e - r,
                                      t - i + n,
                                      e - r,
                                      6,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t + i - a,
                                      e - r,
                                      t + i - n,
                                      e - r,
                                      t + i - a,
                                      e - r,
                                      7,
                                      !0
                                    ))
                                  : (this.v.setTripleAt(
                                      t - i,
                                      e + r,
                                      t - i + n,
                                      e + r,
                                      t - i,
                                      e + r,
                                      2
                                    ),
                                    this.v.setTripleAt(
                                      t - i,
                                      e - r,
                                      t - i,
                                      e - r + n,
                                      t - i,
                                      e - r,
                                      3
                                    )))
                              : (this.v.setTripleAt(
                                  t + i,
                                  e - r + a,
                                  t + i,
                                  e - r + n,
                                  t + i,
                                  e - r + a,
                                  0,
                                  !0
                                ),
                                0 !== a
                                  ? (this.v.setTripleAt(
                                      t + i - a,
                                      e - r,
                                      t + i - a,
                                      e - r,
                                      t + i - n,
                                      e - r,
                                      1,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i + a,
                                      e - r,
                                      t - i + n,
                                      e - r,
                                      t - i + a,
                                      e - r,
                                      2,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i,
                                      e - r + a,
                                      t - i,
                                      e - r + a,
                                      t - i,
                                      e - r + n,
                                      3,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i,
                                      e + r - a,
                                      t - i,
                                      e + r - n,
                                      t - i,
                                      e + r - a,
                                      4,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i + a,
                                      e + r,
                                      t - i + a,
                                      e + r,
                                      t - i + n,
                                      e + r,
                                      5,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t + i - a,
                                      e + r,
                                      t + i - n,
                                      e + r,
                                      t + i - a,
                                      e + r,
                                      6,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t + i,
                                      e + r - a,
                                      t + i,
                                      e + r - a,
                                      t + i,
                                      e + r - n,
                                      7,
                                      !0
                                    ))
                                  : (this.v.setTripleAt(
                                      t - i,
                                      e - r,
                                      t - i + n,
                                      e - r,
                                      t - i,
                                      e - r,
                                      1,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i,
                                      e + r,
                                      t - i,
                                      e + r - n,
                                      t - i,
                                      e + r,
                                      2,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t + i,
                                      e + r,
                                      t + i - n,
                                      e + r,
                                      t + i,
                                      e + r,
                                      3,
                                      !0
                                    )));
                        },
                        getValue: function () {
                          this.elem.globalData.frameId !== this.frameId &&
                            ((this.frameId = this.elem.globalData.frameId),
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertRectToPath());
                        },
                        reset: r,
                      }),
                      extendPrototype([DynamicPropertyContainer], t),
                      t
                    );
                  })(),
                  u = {
                    getShapeProp: function (t, e, i) {
                      var r;
                      return (
                        3 === i || 4 === i
                          ? (r = (3 === i ? e.pt : e.ks).k.length
                              ? new l(t, e, i)
                              : new s(t, e, i))
                          : 5 === i
                            ? (r = new c(t, e))
                            : 6 === i
                              ? (r = new p(t, e))
                              : 7 === i && (r = new h(t, e)),
                        r.k && t.addDynamicProperty(r),
                        r
                      );
                    },
                    getConstructorFunction: function () {
                      return s;
                    },
                    getKeyframedConstructorFunction: function () {
                      return l;
                    },
                  };
                return u;
              })(),
              Matrix = (function () {
                var t = Math.cos,
                  e = Math.sin,
                  i = Math.tan,
                  r = Math.round;
                function a() {
                  return (
                    (this.props[0] = 1),
                    (this.props[1] = 0),
                    (this.props[2] = 0),
                    (this.props[3] = 0),
                    (this.props[4] = 0),
                    (this.props[5] = 1),
                    (this.props[6] = 0),
                    (this.props[7] = 0),
                    (this.props[8] = 0),
                    (this.props[9] = 0),
                    (this.props[10] = 1),
                    (this.props[11] = 0),
                    (this.props[12] = 0),
                    (this.props[13] = 0),
                    (this.props[14] = 0),
                    (this.props[15] = 1),
                    this
                  );
                }
                function n(i) {
                  if (0 === i) return this;
                  var r = t(i),
                    a = e(i);
                  return this._t(
                    r,
                    -a,
                    0,
                    0,
                    a,
                    r,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                  );
                }
                function s(i) {
                  if (0 === i) return this;
                  var r = t(i),
                    a = e(i);
                  return this._t(
                    1,
                    0,
                    0,
                    0,
                    0,
                    r,
                    -a,
                    0,
                    0,
                    a,
                    r,
                    0,
                    0,
                    0,
                    0,
                    1
                  );
                }
                function o(i) {
                  if (0 === i) return this;
                  var r = t(i),
                    a = e(i);
                  return this._t(
                    r,
                    0,
                    a,
                    0,
                    0,
                    1,
                    0,
                    0,
                    -a,
                    0,
                    r,
                    0,
                    0,
                    0,
                    0,
                    1
                  );
                }
                function l(i) {
                  if (0 === i) return this;
                  var r = t(i),
                    a = e(i);
                  return this._t(
                    r,
                    -a,
                    0,
                    0,
                    a,
                    r,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                  );
                }
                function p(t, e) {
                  return this._t(1, e, t, 1, 0, 0);
                }
                function h(t, e) {
                  return this.shear(i(t), i(e));
                }
                function c(r, a) {
                  var n = t(a),
                    s = e(a);
                  return this._t(
                    n,
                    s,
                    0,
                    0,
                    -s,
                    n,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                  )
                    ._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    ._t(n, -s, 0, 0, s, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function u(t, e, i) {
                  return (
                    i || 0 === i || (i = 1),
                    1 === t && 1 === e && 1 === i
                      ? this
                      : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                  );
                }
                function f(t, e, i, r, a, n, s, o, l, p, h, c, u, f, m, d) {
                  return (
                    (this.props[0] = t),
                    (this.props[1] = e),
                    (this.props[2] = i),
                    (this.props[3] = r),
                    (this.props[4] = a),
                    (this.props[5] = n),
                    (this.props[6] = s),
                    (this.props[7] = o),
                    (this.props[8] = l),
                    (this.props[9] = p),
                    (this.props[10] = h),
                    (this.props[11] = c),
                    (this.props[12] = u),
                    (this.props[13] = f),
                    (this.props[14] = m),
                    (this.props[15] = d),
                    this
                  );
                }
                function m(t, e, i) {
                  return (
                    (i = i || 0),
                    0 !== t || 0 !== e || 0 !== i
                      ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1)
                      : this
                  );
                }
                function d(t, e, i, r, a, n, s, o, l, p, h, c, u, f, m, d) {
                  var x = this.props;
                  if (
                    1 === t &&
                    0 === e &&
                    0 === i &&
                    0 === r &&
                    0 === a &&
                    1 === n &&
                    0 === s &&
                    0 === o &&
                    0 === l &&
                    0 === p &&
                    1 === h &&
                    0 === c
                  )
                    return (
                      (x[12] = x[12] * t + x[15] * u),
                      (x[13] = x[13] * n + x[15] * f),
                      (x[14] = x[14] * h + x[15] * m),
                      (x[15] *= d),
                      (this._identityCalculated = !1),
                      this
                    );
                  var y = x[0],
                    k = x[1],
                    g = x[2],
                    v = x[3],
                    _ = x[4],
                    E = x[5],
                    b = x[6],
                    S = x[7],
                    A = x[8],
                    D = x[9],
                    P = x[10],
                    G = x[11],
                    B = x[12],
                    V = x[13],
                    F = x[14],
                    T = x[15];
                  return (
                    (x[0] = y * t + k * a + g * l + v * u),
                    (x[1] = y * e + k * n + g * p + v * f),
                    (x[2] = y * i + k * s + g * h + v * m),
                    (x[3] = y * r + k * o + g * c + v * d),
                    (x[4] = _ * t + E * a + b * l + S * u),
                    (x[5] = _ * e + E * n + b * p + S * f),
                    (x[6] = _ * i + E * s + b * h + S * m),
                    (x[7] = _ * r + E * o + b * c + S * d),
                    (x[8] = A * t + D * a + P * l + G * u),
                    (x[9] = A * e + D * n + P * p + G * f),
                    (x[10] = A * i + D * s + P * h + G * m),
                    (x[11] = A * r + D * o + P * c + G * d),
                    (x[12] = B * t + V * a + F * l + T * u),
                    (x[13] = B * e + V * n + F * p + T * f),
                    (x[14] = B * i + V * s + F * h + T * m),
                    (x[15] = B * r + V * o + F * c + T * d),
                    (this._identityCalculated = !1),
                    this
                  );
                }
                function x() {
                  return (
                    this._identityCalculated ||
                      ((this._identity = !(
                        1 !== this.props[0] ||
                        0 !== this.props[1] ||
                        0 !== this.props[2] ||
                        0 !== this.props[3] ||
                        0 !== this.props[4] ||
                        1 !== this.props[5] ||
                        0 !== this.props[6] ||
                        0 !== this.props[7] ||
                        0 !== this.props[8] ||
                        0 !== this.props[9] ||
                        1 !== this.props[10] ||
                        0 !== this.props[11] ||
                        0 !== this.props[12] ||
                        0 !== this.props[13] ||
                        0 !== this.props[14] ||
                        1 !== this.props[15]
                      )),
                      (this._identityCalculated = !0)),
                    this._identity
                  );
                }
                function y(t) {
                  for (var e = 0; e < 16; ) {
                    if (t.props[e] !== this.props[e]) return !1;
                    e += 1;
                  }
                  return !0;
                }
                function k(t) {
                  var e;
                  for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                  return t;
                }
                function g(t) {
                  var e;
                  for (e = 0; e < 16; e += 1) this.props[e] = t[e];
                }
                function v(t, e, i) {
                  return {
                    x:
                      t * this.props[0] +
                      e * this.props[4] +
                      i * this.props[8] +
                      this.props[12],
                    y:
                      t * this.props[1] +
                      e * this.props[5] +
                      i * this.props[9] +
                      this.props[13],
                    z:
                      t * this.props[2] +
                      e * this.props[6] +
                      i * this.props[10] +
                      this.props[14],
                  };
                }
                function _(t, e, i) {
                  return (
                    t * this.props[0] +
                    e * this.props[4] +
                    i * this.props[8] +
                    this.props[12]
                  );
                }
                function E(t, e, i) {
                  return (
                    t * this.props[1] +
                    e * this.props[5] +
                    i * this.props[9] +
                    this.props[13]
                  );
                }
                function b(t, e, i) {
                  return (
                    t * this.props[2] +
                    e * this.props[6] +
                    i * this.props[10] +
                    this.props[14]
                  );
                }
                function S() {
                  var t =
                      this.props[0] * this.props[5] -
                      this.props[1] * this.props[4],
                    e = this.props[5] / t,
                    i = -this.props[1] / t,
                    r = -this.props[4] / t,
                    a = this.props[0] / t,
                    n =
                      (this.props[4] * this.props[13] -
                        this.props[5] * this.props[12]) /
                      t,
                    s =
                      -(
                        this.props[0] * this.props[13] -
                        this.props[1] * this.props[12]
                      ) / t,
                    o = new Matrix();
                  return (
                    (o.props[0] = e),
                    (o.props[1] = i),
                    (o.props[4] = r),
                    (o.props[5] = a),
                    (o.props[12] = n),
                    (o.props[13] = s),
                    o
                  );
                }
                function A(t) {
                  return this.getInverseMatrix().applyToPointArray(
                    t[0],
                    t[1],
                    t[2] || 0
                  );
                }
                function D(t) {
                  var e,
                    i = t.length,
                    r = [];
                  for (e = 0; e < i; e += 1) r[e] = A(t[e]);
                  return r;
                }
                function P(t, e, i) {
                  var r = createTypedArray('float32', 6);
                  if (this.isIdentity())
                    (r[0] = t[0]),
                      (r[1] = t[1]),
                      (r[2] = e[0]),
                      (r[3] = e[1]),
                      (r[4] = i[0]),
                      (r[5] = i[1]);
                  else {
                    var a = this.props[0],
                      n = this.props[1],
                      s = this.props[4],
                      o = this.props[5],
                      l = this.props[12],
                      p = this.props[13];
                    (r[0] = t[0] * a + t[1] * s + l),
                      (r[1] = t[0] * n + t[1] * o + p),
                      (r[2] = e[0] * a + e[1] * s + l),
                      (r[3] = e[0] * n + e[1] * o + p),
                      (r[4] = i[0] * a + i[1] * s + l),
                      (r[5] = i[0] * n + i[1] * o + p);
                  }
                  return r;
                }
                function G(t, e, i) {
                  return this.isIdentity()
                    ? [t, e, i]
                    : [
                        t * this.props[0] +
                          e * this.props[4] +
                          i * this.props[8] +
                          this.props[12],
                        t * this.props[1] +
                          e * this.props[5] +
                          i * this.props[9] +
                          this.props[13],
                        t * this.props[2] +
                          e * this.props[6] +
                          i * this.props[10] +
                          this.props[14],
                      ];
                }
                function B(t, e) {
                  if (this.isIdentity()) return t + ',' + e;
                  var i = this.props;
                  return (
                    Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 +
                    ',' +
                    Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                  );
                }
                function V() {
                  for (var t = 0, e = this.props, i = 'matrix3d('; t < 16; )
                    (i += r(1e4 * e[t]) / 1e4),
                      (i += 15 === t ? ')' : ','),
                      (t += 1);
                  return i;
                }
                function F(t) {
                  return (t < 1e-6 && t > 0) || (t > -1e-6 && t < 0)
                    ? r(1e4 * t) / 1e4
                    : t;
                }
                function T() {
                  var t = this.props;
                  return (
                    'matrix(' +
                    F(t[0]) +
                    ',' +
                    F(t[1]) +
                    ',' +
                    F(t[4]) +
                    ',' +
                    F(t[5]) +
                    ',' +
                    F(t[12]) +
                    ',' +
                    F(t[13]) +
                    ')'
                  );
                }
                return function () {
                  (this.reset = a),
                    (this.rotate = n),
                    (this.rotateX = s),
                    (this.rotateY = o),
                    (this.rotateZ = l),
                    (this.skew = h),
                    (this.skewFromAxis = c),
                    (this.shear = p),
                    (this.scale = u),
                    (this.setTransform = f),
                    (this.translate = m),
                    (this.transform = d),
                    (this.applyToPoint = v),
                    (this.applyToX = _),
                    (this.applyToY = E),
                    (this.applyToZ = b),
                    (this.applyToPointArray = G),
                    (this.applyToTriplePoints = P),
                    (this.applyToPointStringified = B),
                    (this.toCSS = V),
                    (this.to2dCSS = T),
                    (this.clone = k),
                    (this.cloneFromProps = g),
                    (this.equals = y),
                    (this.inversePoints = D),
                    (this.inversePoint = A),
                    (this.getInverseMatrix = S),
                    (this._t = this.transform),
                    (this.isIdentity = x),
                    (this._identity = !0),
                    (this._identityCalculated = !1),
                    (this.props = createTypedArray('float32', 16)),
                    this.reset();
                };
              })();
            function _typeof$3(t) {
              return (
                (_typeof$3 =
                  'function' === typeof Symbol &&
                  'symbol' === typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          'function' === typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                      }),
                _typeof$3(t)
              );
            }
            var lottie = {},
              standalone = '__[STANDALONE]__',
              animationData = '__[ANIMATIONDATA]__',
              renderer = '';
            function setLocation(t) {
              setLocationHref(t);
            }
            function searchAnimations() {
              !0 === standalone
                ? animationManager.searchAnimations(
                    animationData,
                    standalone,
                    renderer
                  )
                : animationManager.searchAnimations();
            }
            function setSubframeRendering(t) {
              setSubframeEnabled(t);
            }
            function setPrefix(t) {
              setIdPrefix(t);
            }
            function loadAnimation(t) {
              return (
                !0 === standalone &&
                  (t.animationData = JSON.parse(animationData)),
                animationManager.loadAnimation(t)
              );
            }
            function setQuality(t) {
              if ('string' === typeof t)
                switch (t) {
                  case 'high':
                    setDefaultCurveSegments(200);
                    break;
                  default:
                  case 'medium':
                    setDefaultCurveSegments(50);
                    break;
                  case 'low':
                    setDefaultCurveSegments(10);
                }
              else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
              getDefaultCurveSegments() >= 50
                ? roundValues(!1)
                : roundValues(!0);
            }
            function inBrowser() {
              return 'undefined' !== typeof navigator;
            }
            function installPlugin(t, e) {
              'expressions' === t && setExpressionsPlugin(e);
            }
            function getFactory(t) {
              switch (t) {
                case 'propertyFactory':
                  return PropertyFactory;
                case 'shapePropertyFactory':
                  return ShapePropertyFactory;
                case 'matrix':
                  return Matrix;
                default:
                  return null;
              }
            }
            function checkReady() {
              'complete' === document.readyState &&
                (clearInterval(readyStateCheckInterval), searchAnimations());
            }
            function getQueryVariable(t) {
              for (
                var e = queryString.split('&'), i = 0;
                i < e.length;
                i += 1
              ) {
                var r = e[i].split('=');
                if (decodeURIComponent(r[0]) == t)
                  return decodeURIComponent(r[1]);
              }
              return null;
            }
            (lottie.play = animationManager.play),
              (lottie.pause = animationManager.pause),
              (lottie.setLocationHref = setLocation),
              (lottie.togglePause = animationManager.togglePause),
              (lottie.setSpeed = animationManager.setSpeed),
              (lottie.setDirection = animationManager.setDirection),
              (lottie.stop = animationManager.stop),
              (lottie.searchAnimations = searchAnimations),
              (lottie.registerAnimation = animationManager.registerAnimation),
              (lottie.loadAnimation = loadAnimation),
              (lottie.setSubframeRendering = setSubframeRendering),
              (lottie.resize = animationManager.resize),
              (lottie.goToAndStop = animationManager.goToAndStop),
              (lottie.destroy = animationManager.destroy),
              (lottie.setQuality = setQuality),
              (lottie.inBrowser = inBrowser),
              (lottie.installPlugin = installPlugin),
              (lottie.freeze = animationManager.freeze),
              (lottie.unfreeze = animationManager.unfreeze),
              (lottie.setVolume = animationManager.setVolume),
              (lottie.mute = animationManager.mute),
              (lottie.unmute = animationManager.unmute),
              (lottie.getRegisteredAnimations =
                animationManager.getRegisteredAnimations),
              (lottie.useWebWorker = setWebWorker),
              (lottie.setIDPrefix = setPrefix),
              (lottie.__getFactory = getFactory),
              (lottie.version = '5.9.6');
            var queryString = '';
            if (standalone) {
              var scripts = document.getElementsByTagName('script'),
                index = scripts.length - 1,
                myScript = scripts[index] || { src: '' };
              (queryString = myScript.src
                ? myScript.src.replace(/^[^\?]+\??/, '')
                : ''),
                (renderer = getQueryVariable('renderer'));
            }
            var readyStateCheckInterval = setInterval(checkReady, 100);
            try {
              'object' !== _typeof$3(exports) && __webpack_require__.amdO;
            } catch (err) {}
            var ShapeModifiers = (function () {
              var t = {},
                e = {};
              return (
                (t.registerModifier = function (t, i) {
                  e[t] || (e[t] = i);
                }),
                (t.getModifier = function (t, i, r) {
                  return new e[t](i, r);
                }),
                t
              );
            })();
            function ShapeModifier() {}
            function TrimModifier() {}
            function PuckerAndBloatModifier() {}
            (ShapeModifier.prototype.initModifierProperties = function () {}),
              (ShapeModifier.prototype.addShapeToModifier = function () {}),
              (ShapeModifier.prototype.addShape = function (t) {
                if (!this.closed) {
                  t.sh.container.addDynamicProperty(t.sh);
                  var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection:
                      shapeCollectionPool.newShapeCollection(),
                  };
                  this.shapes.push(e),
                    this.addShapeToModifier(e),
                    this._isAnimated && t.setAsAnimated();
                }
              }),
              (ShapeModifier.prototype.init = function (t, e) {
                (this.shapes = []),
                  (this.elem = t),
                  this.initDynamicPropertyContainer(t),
                  this.initModifierProperties(t, e),
                  (this.frameId = initialDefaultFrame),
                  (this.closed = !1),
                  (this.k = !1),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : this.getValue(!0);
              }),
              (ShapeModifier.prototype.processKeys = function () {
                this.elem.globalData.frameId !== this.frameId &&
                  ((this.frameId = this.elem.globalData.frameId),
                  this.iterateDynamicProperties());
              }),
              extendPrototype([DynamicPropertyContainer], ShapeModifier),
              extendPrototype([ShapeModifier], TrimModifier),
              (TrimModifier.prototype.initModifierProperties = function (t, e) {
                (this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
                  (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
                  (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
                  (this.sValue = 0),
                  (this.eValue = 0),
                  (this.getValue = this.processKeys),
                  (this.m = e.m),
                  (this._isAnimated =
                    !!this.s.effectsSequence.length ||
                    !!this.e.effectsSequence.length ||
                    !!this.o.effectsSequence.length);
              }),
              (TrimModifier.prototype.addShapeToModifier = function (t) {
                t.pathsData = [];
              }),
              (TrimModifier.prototype.calculateShapeEdges = function (
                t,
                e,
                i,
                r,
                a
              ) {
                var n = [];
                e <= 1
                  ? n.push({ s: t, e: e })
                  : t >= 1
                    ? n.push({ s: t - 1, e: e - 1 })
                    : (n.push({ s: t, e: 1 }), n.push({ s: 0, e: e - 1 }));
                var s,
                  o,
                  l = [],
                  p = n.length;
                for (s = 0; s < p; s += 1) {
                  var h, c;
                  (o = n[s]).e * a < r ||
                    o.s * a > r + i ||
                    ((h = o.s * a <= r ? 0 : (o.s * a - r) / i),
                    (c = o.e * a >= r + i ? 1 : (o.e * a - r) / i),
                    l.push([h, c]));
                }
                return l.length || l.push([0, 0]), l;
              }),
              (TrimModifier.prototype.releasePathsData = function (t) {
                var e,
                  i = t.length;
                for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
                return (t.length = 0), t;
              }),
              (TrimModifier.prototype.processShapes = function (t) {
                var e, i, r, a;
                if (this._mdf || t) {
                  var n = (this.o.v % 360) / 360;
                  if (
                    (n < 0 && (n += 1),
                    (e =
                      this.s.v > 1
                        ? 1 + n
                        : this.s.v < 0
                          ? 0 + n
                          : this.s.v + n) >
                      (i =
                        this.e.v > 1
                          ? 1 + n
                          : this.e.v < 0
                            ? 0 + n
                            : this.e.v + n))
                  ) {
                    var s = e;
                    (e = i), (i = s);
                  }
                  (e = 1e-4 * Math.round(1e4 * e)),
                    (i = 1e-4 * Math.round(1e4 * i)),
                    (this.sValue = e),
                    (this.eValue = i);
                } else (e = this.sValue), (i = this.eValue);
                var o,
                  l,
                  p,
                  h,
                  c,
                  u = this.shapes.length,
                  f = 0;
                if (i === e)
                  for (a = 0; a < u; a += 1)
                    this.shapes[a].localShapeCollection.releaseShapes(),
                      (this.shapes[a].shape._mdf = !0),
                      (this.shapes[a].shape.paths =
                        this.shapes[a].localShapeCollection),
                      this._mdf && (this.shapes[a].pathsData.length = 0);
                else if ((1 === i && 0 === e) || (0 === i && 1 === e)) {
                  if (this._mdf)
                    for (a = 0; a < u; a += 1)
                      (this.shapes[a].pathsData.length = 0),
                        (this.shapes[a].shape._mdf = !0);
                } else {
                  var m,
                    d,
                    x = [];
                  for (a = 0; a < u; a += 1)
                    if (
                      (m = this.shapes[a]).shape._mdf ||
                      this._mdf ||
                      t ||
                      2 === this.m
                    ) {
                      if (
                        ((l = (r = m.shape.paths)._length),
                        (c = 0),
                        !m.shape._mdf && m.pathsData.length)
                      )
                        c = m.totalShapeLength;
                      else {
                        for (
                          p = this.releasePathsData(m.pathsData), o = 0;
                          o < l;
                          o += 1
                        )
                          (h = bez.getSegmentsLength(r.shapes[o])),
                            p.push(h),
                            (c += h.totalLength);
                        (m.totalShapeLength = c), (m.pathsData = p);
                      }
                      (f += c), (m.shape._mdf = !0);
                    } else m.shape.paths = m.localShapeCollection;
                  var y,
                    k = e,
                    g = i,
                    v = 0;
                  for (a = u - 1; a >= 0; a -= 1)
                    if ((m = this.shapes[a]).shape._mdf) {
                      for (
                        (d = m.localShapeCollection).releaseShapes(),
                          2 === this.m && u > 1
                            ? ((y = this.calculateShapeEdges(
                                e,
                                i,
                                m.totalShapeLength,
                                v,
                                f
                              )),
                              (v += m.totalShapeLength))
                            : (y = [[k, g]]),
                          l = y.length,
                          o = 0;
                        o < l;
                        o += 1
                      ) {
                        (k = y[o][0]),
                          (g = y[o][1]),
                          (x.length = 0),
                          g <= 1
                            ? x.push({
                                s: m.totalShapeLength * k,
                                e: m.totalShapeLength * g,
                              })
                            : k >= 1
                              ? x.push({
                                  s: m.totalShapeLength * (k - 1),
                                  e: m.totalShapeLength * (g - 1),
                                })
                              : (x.push({
                                  s: m.totalShapeLength * k,
                                  e: m.totalShapeLength,
                                }),
                                x.push({
                                  s: 0,
                                  e: m.totalShapeLength * (g - 1),
                                }));
                        var _ = this.addShapes(m, x[0]);
                        if (x[0].s !== x[0].e) {
                          if (x.length > 1)
                            if (
                              m.shape.paths.shapes[m.shape.paths._length - 1].c
                            ) {
                              var E = _.pop();
                              this.addPaths(_, d),
                                (_ = this.addShapes(m, x[1], E));
                            } else
                              this.addPaths(_, d),
                                (_ = this.addShapes(m, x[1]));
                          this.addPaths(_, d);
                        }
                      }
                      m.shape.paths = d;
                    }
                }
              }),
              (TrimModifier.prototype.addPaths = function (t, e) {
                var i,
                  r = t.length;
                for (i = 0; i < r; i += 1) e.addShape(t[i]);
              }),
              (TrimModifier.prototype.addSegment = function (
                t,
                e,
                i,
                r,
                a,
                n,
                s
              ) {
                a.setXYAt(e[0], e[1], 'o', n),
                  a.setXYAt(i[0], i[1], 'i', n + 1),
                  s && a.setXYAt(t[0], t[1], 'v', n),
                  a.setXYAt(r[0], r[1], 'v', n + 1);
              }),
              (TrimModifier.prototype.addSegmentFromArray = function (
                t,
                e,
                i,
                r
              ) {
                e.setXYAt(t[1], t[5], 'o', i),
                  e.setXYAt(t[2], t[6], 'i', i + 1),
                  r && e.setXYAt(t[0], t[4], 'v', i),
                  e.setXYAt(t[3], t[7], 'v', i + 1);
              }),
              (TrimModifier.prototype.addShapes = function (t, e, i) {
                var r,
                  a,
                  n,
                  s,
                  o,
                  l,
                  p,
                  h,
                  c = t.pathsData,
                  u = t.shape.paths.shapes,
                  f = t.shape.paths._length,
                  m = 0,
                  d = [],
                  x = !0;
                for (
                  i
                    ? ((o = i._length), (h = i._length))
                    : ((i = shapePool.newElement()), (o = 0), (h = 0)),
                    d.push(i),
                    r = 0;
                  r < f;
                  r += 1
                ) {
                  for (
                    l = c[r].lengths,
                      i.c = u[r].c,
                      n = u[r].c ? l.length : l.length + 1,
                      a = 1;
                    a < n;
                    a += 1
                  )
                    if (m + (s = l[a - 1]).addedLength < e.s)
                      (m += s.addedLength), (i.c = !1);
                    else {
                      if (m > e.e) {
                        i.c = !1;
                        break;
                      }
                      e.s <= m && e.e >= m + s.addedLength
                        ? (this.addSegment(
                            u[r].v[a - 1],
                            u[r].o[a - 1],
                            u[r].i[a],
                            u[r].v[a],
                            i,
                            o,
                            x
                          ),
                          (x = !1))
                        : ((p = bez.getNewSegment(
                            u[r].v[a - 1],
                            u[r].v[a],
                            u[r].o[a - 1],
                            u[r].i[a],
                            (e.s - m) / s.addedLength,
                            (e.e - m) / s.addedLength,
                            l[a - 1]
                          )),
                          this.addSegmentFromArray(p, i, o, x),
                          (x = !1),
                          (i.c = !1)),
                        (m += s.addedLength),
                        (o += 1);
                    }
                  if (u[r].c && l.length) {
                    if (((s = l[a - 1]), m <= e.e)) {
                      var y = l[a - 1].addedLength;
                      e.s <= m && e.e >= m + y
                        ? (this.addSegment(
                            u[r].v[a - 1],
                            u[r].o[a - 1],
                            u[r].i[0],
                            u[r].v[0],
                            i,
                            o,
                            x
                          ),
                          (x = !1))
                        : ((p = bez.getNewSegment(
                            u[r].v[a - 1],
                            u[r].v[0],
                            u[r].o[a - 1],
                            u[r].i[0],
                            (e.s - m) / y,
                            (e.e - m) / y,
                            l[a - 1]
                          )),
                          this.addSegmentFromArray(p, i, o, x),
                          (x = !1),
                          (i.c = !1));
                    } else i.c = !1;
                    (m += s.addedLength), (o += 1);
                  }
                  if (
                    (i._length &&
                      (i.setXYAt(i.v[h][0], i.v[h][1], 'i', h),
                      i.setXYAt(
                        i.v[i._length - 1][0],
                        i.v[i._length - 1][1],
                        'o',
                        i._length - 1
                      )),
                    m > e.e)
                  )
                    break;
                  r < f - 1 &&
                    ((i = shapePool.newElement()),
                    (x = !0),
                    d.push(i),
                    (o = 0));
                }
                return d;
              }),
              extendPrototype([ShapeModifier], PuckerAndBloatModifier),
              (PuckerAndBloatModifier.prototype.initModifierProperties =
                function (t, e) {
                  (this.getValue = this.processKeys),
                    (this.amount = PropertyFactory.getProp(
                      t,
                      e.a,
                      0,
                      null,
                      this
                    )),
                    (this._isAnimated = !!this.amount.effectsSequence.length);
                }),
              (PuckerAndBloatModifier.prototype.processPath = function (t, e) {
                var i = e / 100,
                  r = [0, 0],
                  a = t._length,
                  n = 0;
                for (n = 0; n < a; n += 1)
                  (r[0] += t.v[n][0]), (r[1] += t.v[n][1]);
                (r[0] /= a), (r[1] /= a);
                var s,
                  o,
                  l,
                  p,
                  h,
                  c,
                  u = shapePool.newElement();
                for (u.c = t.c, n = 0; n < a; n += 1)
                  (s = t.v[n][0] + (r[0] - t.v[n][0]) * i),
                    (o = t.v[n][1] + (r[1] - t.v[n][1]) * i),
                    (l = t.o[n][0] + (r[0] - t.o[n][0]) * -i),
                    (p = t.o[n][1] + (r[1] - t.o[n][1]) * -i),
                    (h = t.i[n][0] + (r[0] - t.i[n][0]) * -i),
                    (c = t.i[n][1] + (r[1] - t.i[n][1]) * -i),
                    u.setTripleAt(s, o, l, p, h, c, n);
                return u;
              }),
              (PuckerAndBloatModifier.prototype.processShapes = function (t) {
                var e,
                  i,
                  r,
                  a,
                  n,
                  s,
                  o = this.shapes.length,
                  l = this.amount.v;
                if (0 !== l)
                  for (i = 0; i < o; i += 1) {
                    if (
                      ((s = (n = this.shapes[i]).localShapeCollection),
                      n.shape._mdf || this._mdf || t)
                    )
                      for (
                        s.releaseShapes(),
                          n.shape._mdf = !0,
                          e = n.shape.paths.shapes,
                          a = n.shape.paths._length,
                          r = 0;
                        r < a;
                        r += 1
                      )
                        s.addShape(this.processPath(e[r], l));
                    n.shape.paths = n.localShapeCollection;
                  }
                this.dynamicProperties.length || (this._mdf = !1);
              });
            var TransformPropertyFactory = (function () {
              var t = [0, 0];
              function e(t, e, i) {
                if (
                  ((this.elem = t),
                  (this.frameId = -1),
                  (this.propType = 'transform'),
                  (this.data = e),
                  (this.v = new Matrix()),
                  (this.pre = new Matrix()),
                  (this.appliedTransformations = 0),
                  this.initDynamicPropertyContainer(i || t),
                  e.p && e.p.s
                    ? ((this.px = PropertyFactory.getProp(
                        t,
                        e.p.x,
                        0,
                        0,
                        this
                      )),
                      (this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this)),
                      e.p.z &&
                        (this.pz = PropertyFactory.getProp(
                          t,
                          e.p.z,
                          0,
                          0,
                          this
                        )))
                    : (this.p = PropertyFactory.getProp(
                        t,
                        e.p || { k: [0, 0, 0] },
                        1,
                        0,
                        this
                      )),
                  e.rx)
                ) {
                  if (
                    ((this.rx = PropertyFactory.getProp(
                      t,
                      e.rx,
                      0,
                      degToRads,
                      this
                    )),
                    (this.ry = PropertyFactory.getProp(
                      t,
                      e.ry,
                      0,
                      degToRads,
                      this
                    )),
                    (this.rz = PropertyFactory.getProp(
                      t,
                      e.rz,
                      0,
                      degToRads,
                      this
                    )),
                    e.or.k[0].ti)
                  ) {
                    var r,
                      a = e.or.k.length;
                    for (r = 0; r < a; r += 1)
                      (e.or.k[r].to = null), (e.or.k[r].ti = null);
                  }
                  (this.or = PropertyFactory.getProp(
                    t,
                    e.or,
                    1,
                    degToRads,
                    this
                  )),
                    (this.or.sh = !0);
                } else
                  this.r = PropertyFactory.getProp(
                    t,
                    e.r || { k: 0 },
                    0,
                    degToRads,
                    this
                  );
                e.sk &&
                  ((this.sk = PropertyFactory.getProp(
                    t,
                    e.sk,
                    0,
                    degToRads,
                    this
                  )),
                  (this.sa = PropertyFactory.getProp(
                    t,
                    e.sa,
                    0,
                    degToRads,
                    this
                  ))),
                  (this.a = PropertyFactory.getProp(
                    t,
                    e.a || { k: [0, 0, 0] },
                    1,
                    0,
                    this
                  )),
                  (this.s = PropertyFactory.getProp(
                    t,
                    e.s || { k: [100, 100, 100] },
                    1,
                    0.01,
                    this
                  )),
                  e.o
                    ? (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t))
                    : (this.o = { _mdf: !1, v: 1 }),
                  (this._isDirty = !0),
                  this.dynamicProperties.length || this.getValue(!0);
              }
              return (
                (e.prototype = {
                  applyToMatrix: function (t) {
                    var e = this._mdf;
                    this.iterateDynamicProperties(),
                      (this._mdf = this._mdf || e),
                      this.a &&
                        t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                      this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                      this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                      this.r
                        ? t.rotate(-this.r.v)
                        : t
                            .rotateZ(-this.rz.v)
                            .rotateY(this.ry.v)
                            .rotateX(this.rx.v)
                            .rotateZ(-this.or.v[2])
                            .rotateY(this.or.v[1])
                            .rotateX(this.or.v[0]),
                      this.data.p.s
                        ? this.data.p.z
                          ? t.translate(this.px.v, this.py.v, -this.pz.v)
                          : t.translate(this.px.v, this.py.v, 0)
                        : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                  },
                  getValue: function (e) {
                    if (this.elem.globalData.frameId !== this.frameId) {
                      if (
                        (this._isDirty &&
                          (this.precalculateMatrix(), (this._isDirty = !1)),
                        this.iterateDynamicProperties(),
                        this._mdf || e)
                      ) {
                        var i;
                        if (
                          (this.v.cloneFromProps(this.pre.props),
                          this.appliedTransformations < 1 &&
                            this.v.translate(
                              -this.a.v[0],
                              -this.a.v[1],
                              this.a.v[2]
                            ),
                          this.appliedTransformations < 2 &&
                            this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                          this.sk &&
                            this.appliedTransformations < 3 &&
                            this.v.skewFromAxis(-this.sk.v, this.sa.v),
                          this.r && this.appliedTransformations < 4
                            ? this.v.rotate(-this.r.v)
                            : !this.r &&
                              this.appliedTransformations < 4 &&
                              this.v
                                .rotateZ(-this.rz.v)
                                .rotateY(this.ry.v)
                                .rotateX(this.rx.v)
                                .rotateZ(-this.or.v[2])
                                .rotateY(this.or.v[1])
                                .rotateX(this.or.v[0]),
                          this.autoOriented)
                        ) {
                          var r, a;
                          if (
                            ((i = this.elem.globalData.frameRate),
                            this.p && this.p.keyframes && this.p.getValueAtTime)
                          )
                            this.p._caching.lastFrame + this.p.offsetTime <=
                            this.p.keyframes[0].t
                              ? ((r = this.p.getValueAtTime(
                                  (this.p.keyframes[0].t + 0.01) / i,
                                  0
                                )),
                                (a = this.p.getValueAtTime(
                                  this.p.keyframes[0].t / i,
                                  0
                                )))
                              : this.p._caching.lastFrame + this.p.offsetTime >=
                                  this.p.keyframes[this.p.keyframes.length - 1]
                                    .t
                                ? ((r = this.p.getValueAtTime(
                                    this.p.keyframes[
                                      this.p.keyframes.length - 1
                                    ].t / i,
                                    0
                                  )),
                                  (a = this.p.getValueAtTime(
                                    (this.p.keyframes[
                                      this.p.keyframes.length - 1
                                    ].t -
                                      0.05) /
                                      i,
                                    0
                                  )))
                                : ((r = this.p.pv),
                                  (a = this.p.getValueAtTime(
                                    (this.p._caching.lastFrame +
                                      this.p.offsetTime -
                                      0.01) /
                                      i,
                                    this.p.offsetTime
                                  )));
                          else if (
                            this.px &&
                            this.px.keyframes &&
                            this.py.keyframes &&
                            this.px.getValueAtTime &&
                            this.py.getValueAtTime
                          ) {
                            (r = []), (a = []);
                            var n = this.px,
                              s = this.py;
                            n._caching.lastFrame + n.offsetTime <=
                            n.keyframes[0].t
                              ? ((r[0] = n.getValueAtTime(
                                  (n.keyframes[0].t + 0.01) / i,
                                  0
                                )),
                                (r[1] = s.getValueAtTime(
                                  (s.keyframes[0].t + 0.01) / i,
                                  0
                                )),
                                (a[0] = n.getValueAtTime(
                                  n.keyframes[0].t / i,
                                  0
                                )),
                                (a[1] = s.getValueAtTime(
                                  s.keyframes[0].t / i,
                                  0
                                )))
                              : n._caching.lastFrame + n.offsetTime >=
                                  n.keyframes[n.keyframes.length - 1].t
                                ? ((r[0] = n.getValueAtTime(
                                    n.keyframes[n.keyframes.length - 1].t / i,
                                    0
                                  )),
                                  (r[1] = s.getValueAtTime(
                                    s.keyframes[s.keyframes.length - 1].t / i,
                                    0
                                  )),
                                  (a[0] = n.getValueAtTime(
                                    (n.keyframes[n.keyframes.length - 1].t -
                                      0.01) /
                                      i,
                                    0
                                  )),
                                  (a[1] = s.getValueAtTime(
                                    (s.keyframes[s.keyframes.length - 1].t -
                                      0.01) /
                                      i,
                                    0
                                  )))
                                : ((r = [n.pv, s.pv]),
                                  (a[0] = n.getValueAtTime(
                                    (n._caching.lastFrame +
                                      n.offsetTime -
                                      0.01) /
                                      i,
                                    n.offsetTime
                                  )),
                                  (a[1] = s.getValueAtTime(
                                    (s._caching.lastFrame +
                                      s.offsetTime -
                                      0.01) /
                                      i,
                                    s.offsetTime
                                  )));
                          } else r = a = t;
                          this.v.rotate(-Math.atan2(r[1] - a[1], r[0] - a[0]));
                        }
                        this.data.p && this.data.p.s
                          ? this.data.p.z
                            ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                            : this.v.translate(this.px.v, this.py.v, 0)
                          : this.v.translate(
                              this.p.v[0],
                              this.p.v[1],
                              -this.p.v[2]
                            );
                      }
                      this.frameId = this.elem.globalData.frameId;
                    }
                  },
                  precalculateMatrix: function () {
                    if (
                      !this.a.k &&
                      (this.pre.translate(
                        -this.a.v[0],
                        -this.a.v[1],
                        this.a.v[2]
                      ),
                      (this.appliedTransformations = 1),
                      !this.s.effectsSequence.length)
                    ) {
                      if (
                        (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        (this.appliedTransformations = 2),
                        this.sk)
                      ) {
                        if (
                          this.sk.effectsSequence.length ||
                          this.sa.effectsSequence.length
                        )
                          return;
                        this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                          (this.appliedTransformations = 3);
                      }
                      this.r
                        ? this.r.effectsSequence.length ||
                          (this.pre.rotate(-this.r.v),
                          (this.appliedTransformations = 4))
                        : this.rz.effectsSequence.length ||
                          this.ry.effectsSequence.length ||
                          this.rx.effectsSequence.length ||
                          this.or.effectsSequence.length ||
                          (this.pre
                            .rotateZ(-this.rz.v)
                            .rotateY(this.ry.v)
                            .rotateX(this.rx.v)
                            .rotateZ(-this.or.v[2])
                            .rotateY(this.or.v[1])
                            .rotateX(this.or.v[0]),
                          (this.appliedTransformations = 4));
                    }
                  },
                  autoOrient: function () {},
                }),
                extendPrototype([DynamicPropertyContainer], e),
                (e.prototype.addDynamicProperty = function (t) {
                  this._addDynamicProperty(t),
                    this.elem.addDynamicProperty(t),
                    (this._isDirty = !0);
                }),
                (e.prototype._addDynamicProperty =
                  DynamicPropertyContainer.prototype.addDynamicProperty),
                {
                  getTransformProperty: function (t, i, r) {
                    return new e(t, i, r);
                  },
                }
              );
            })();
            function RepeaterModifier() {}
            function RoundCornersModifier() {}
            function getFontProperties(t) {
              for (
                var e = t.fStyle ? t.fStyle.split(' ') : [],
                  i = 'normal',
                  r = 'normal',
                  a = e.length,
                  n = 0;
                n < a;
                n += 1
              )
                switch (e[n].toLowerCase()) {
                  case 'italic':
                    r = 'italic';
                    break;
                  case 'bold':
                    i = '700';
                    break;
                  case 'black':
                    i = '900';
                    break;
                  case 'medium':
                    i = '500';
                    break;
                  case 'regular':
                  case 'normal':
                    i = '400';
                    break;
                  case 'light':
                  case 'thin':
                    i = '200';
                }
              return { style: r, weight: t.fWeight || i };
            }
            extendPrototype([ShapeModifier], RepeaterModifier),
              (RepeaterModifier.prototype.initModifierProperties = function (
                t,
                e
              ) {
                (this.getValue = this.processKeys),
                  (this.c = PropertyFactory.getProp(t, e.c, 0, null, this)),
                  (this.o = PropertyFactory.getProp(t, e.o, 0, null, this)),
                  (this.tr = TransformPropertyFactory.getTransformProperty(
                    t,
                    e.tr,
                    this
                  )),
                  (this.so = PropertyFactory.getProp(
                    t,
                    e.tr.so,
                    0,
                    0.01,
                    this
                  )),
                  (this.eo = PropertyFactory.getProp(
                    t,
                    e.tr.eo,
                    0,
                    0.01,
                    this
                  )),
                  (this.data = e),
                  this.dynamicProperties.length || this.getValue(!0),
                  (this._isAnimated = !!this.dynamicProperties.length),
                  (this.pMatrix = new Matrix()),
                  (this.rMatrix = new Matrix()),
                  (this.sMatrix = new Matrix()),
                  (this.tMatrix = new Matrix()),
                  (this.matrix = new Matrix());
              }),
              (RepeaterModifier.prototype.applyTransforms = function (
                t,
                e,
                i,
                r,
                a,
                n
              ) {
                var s = n ? -1 : 1,
                  o = r.s.v[0] + (1 - r.s.v[0]) * (1 - a),
                  l = r.s.v[1] + (1 - r.s.v[1]) * (1 - a);
                t.translate(r.p.v[0] * s * a, r.p.v[1] * s * a, r.p.v[2]),
                  e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
                  e.rotate(-r.r.v * s * a),
                  e.translate(r.a.v[0], r.a.v[1], r.a.v[2]),
                  i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
                  i.scale(n ? 1 / o : o, n ? 1 / l : l),
                  i.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
              }),
              (RepeaterModifier.prototype.init = function (t, e, i, r) {
                for (
                  this.elem = t,
                    this.arr = e,
                    this.pos = i,
                    this.elemsData = r,
                    this._currentCopies = 0,
                    this._elements = [],
                    this._groups = [],
                    this.frameId = -1,
                    this.initDynamicPropertyContainer(t),
                    this.initModifierProperties(t, e[i]);
                  i > 0;

                )
                  (i -= 1), this._elements.unshift(e[i]);
                this.dynamicProperties.length
                  ? (this.k = !0)
                  : this.getValue(!0);
              }),
              (RepeaterModifier.prototype.resetElements = function (t) {
                var e,
                  i = t.length;
                for (e = 0; e < i; e += 1)
                  (t[e]._processed = !1),
                    'gr' === t[e].ty && this.resetElements(t[e].it);
              }),
              (RepeaterModifier.prototype.cloneElements = function (t) {
                var e = JSON.parse(JSON.stringify(t));
                return this.resetElements(e), e;
              }),
              (RepeaterModifier.prototype.changeGroupRender = function (t, e) {
                var i,
                  r = t.length;
                for (i = 0; i < r; i += 1)
                  (t[i]._render = e),
                    'gr' === t[i].ty && this.changeGroupRender(t[i].it, e);
              }),
              (RepeaterModifier.prototype.processShapes = function (t) {
                var e,
                  i,
                  r,
                  a,
                  n,
                  s = !1;
                if (this._mdf || t) {
                  var o,
                    l = Math.ceil(this.c.v);
                  if (this._groups.length < l) {
                    for (; this._groups.length < l; ) {
                      var p = {
                        it: this.cloneElements(this._elements),
                        ty: 'gr',
                      };
                      p.it.push({
                        a: { a: 0, ix: 1, k: [0, 0] },
                        nm: 'Transform',
                        o: { a: 0, ix: 7, k: 100 },
                        p: { a: 0, ix: 2, k: [0, 0] },
                        r: {
                          a: 1,
                          ix: 6,
                          k: [
                            { s: 0, e: 0, t: 0 },
                            { s: 0, e: 0, t: 1 },
                          ],
                        },
                        s: { a: 0, ix: 3, k: [100, 100] },
                        sa: { a: 0, ix: 5, k: 0 },
                        sk: { a: 0, ix: 4, k: 0 },
                        ty: 'tr',
                      }),
                        this.arr.splice(0, 0, p),
                        this._groups.splice(0, 0, p),
                        (this._currentCopies += 1);
                    }
                    this.elem.reloadShapes(), (s = !0);
                  }
                  for (n = 0, r = 0; r <= this._groups.length - 1; r += 1) {
                    if (
                      ((o = n < l),
                      (this._groups[r]._render = o),
                      this.changeGroupRender(this._groups[r].it, o),
                      !o)
                    ) {
                      var h = this.elemsData[r].it,
                        c = h[h.length - 1];
                      0 !== c.transform.op.v
                        ? ((c.transform.op._mdf = !0), (c.transform.op.v = 0))
                        : (c.transform.op._mdf = !1);
                    }
                    n += 1;
                  }
                  this._currentCopies = l;
                  var u = this.o.v,
                    f = u % 1,
                    m = u > 0 ? Math.floor(u) : Math.ceil(u),
                    d = this.pMatrix.props,
                    x = this.rMatrix.props,
                    y = this.sMatrix.props;
                  this.pMatrix.reset(),
                    this.rMatrix.reset(),
                    this.sMatrix.reset(),
                    this.tMatrix.reset(),
                    this.matrix.reset();
                  var k,
                    g,
                    v = 0;
                  if (u > 0) {
                    for (; v < m; )
                      this.applyTransforms(
                        this.pMatrix,
                        this.rMatrix,
                        this.sMatrix,
                        this.tr,
                        1,
                        !1
                      ),
                        (v += 1);
                    f &&
                      (this.applyTransforms(
                        this.pMatrix,
                        this.rMatrix,
                        this.sMatrix,
                        this.tr,
                        f,
                        !1
                      ),
                      (v += f));
                  } else if (u < 0) {
                    for (; v > m; )
                      this.applyTransforms(
                        this.pMatrix,
                        this.rMatrix,
                        this.sMatrix,
                        this.tr,
                        1,
                        !0
                      ),
                        (v -= 1);
                    f &&
                      (this.applyTransforms(
                        this.pMatrix,
                        this.rMatrix,
                        this.sMatrix,
                        this.tr,
                        -f,
                        !0
                      ),
                      (v -= f));
                  }
                  for (
                    r = 1 === this.data.m ? 0 : this._currentCopies - 1,
                      a = 1 === this.data.m ? 1 : -1,
                      n = this._currentCopies;
                    n;

                  ) {
                    if (
                      ((g = (i = (e = this.elemsData[r].it)[e.length - 1]
                        .transform.mProps.v.props).length),
                      (e[e.length - 1].transform.mProps._mdf = !0),
                      (e[e.length - 1].transform.op._mdf = !0),
                      (e[e.length - 1].transform.op.v =
                        1 === this._currentCopies
                          ? this.so.v
                          : this.so.v +
                            (this.eo.v - this.so.v) *
                              (r / (this._currentCopies - 1))),
                      0 !== v)
                    ) {
                      for (
                        ((0 !== r && 1 === a) ||
                          (r !== this._currentCopies - 1 && -1 === a)) &&
                          this.applyTransforms(
                            this.pMatrix,
                            this.rMatrix,
                            this.sMatrix,
                            this.tr,
                            1,
                            !1
                          ),
                          this.matrix.transform(
                            x[0],
                            x[1],
                            x[2],
                            x[3],
                            x[4],
                            x[5],
                            x[6],
                            x[7],
                            x[8],
                            x[9],
                            x[10],
                            x[11],
                            x[12],
                            x[13],
                            x[14],
                            x[15]
                          ),
                          this.matrix.transform(
                            y[0],
                            y[1],
                            y[2],
                            y[3],
                            y[4],
                            y[5],
                            y[6],
                            y[7],
                            y[8],
                            y[9],
                            y[10],
                            y[11],
                            y[12],
                            y[13],
                            y[14],
                            y[15]
                          ),
                          this.matrix.transform(
                            d[0],
                            d[1],
                            d[2],
                            d[3],
                            d[4],
                            d[5],
                            d[6],
                            d[7],
                            d[8],
                            d[9],
                            d[10],
                            d[11],
                            d[12],
                            d[13],
                            d[14],
                            d[15]
                          ),
                          k = 0;
                        k < g;
                        k += 1
                      )
                        i[k] = this.matrix.props[k];
                      this.matrix.reset();
                    } else
                      for (this.matrix.reset(), k = 0; k < g; k += 1)
                        i[k] = this.matrix.props[k];
                    (v += 1), (n -= 1), (r += a);
                  }
                } else
                  for (n = this._currentCopies, r = 0, a = 1; n; )
                    (i = (e = this.elemsData[r].it)[e.length - 1].transform
                      .mProps.v.props),
                      (e[e.length - 1].transform.mProps._mdf = !1),
                      (e[e.length - 1].transform.op._mdf = !1),
                      (n -= 1),
                      (r += a);
                return s;
              }),
              (RepeaterModifier.prototype.addShape = function () {}),
              extendPrototype([ShapeModifier], RoundCornersModifier),
              (RoundCornersModifier.prototype.initModifierProperties =
                function (t, e) {
                  (this.getValue = this.processKeys),
                    (this.rd = PropertyFactory.getProp(t, e.r, 0, null, this)),
                    (this._isAnimated = !!this.rd.effectsSequence.length);
                }),
              (RoundCornersModifier.prototype.processPath = function (t, e) {
                var i,
                  r = shapePool.newElement();
                r.c = t.c;
                var a,
                  n,
                  s,
                  o,
                  l,
                  p,
                  h,
                  c,
                  u,
                  f,
                  m,
                  d,
                  x = t._length,
                  y = 0;
                for (i = 0; i < x; i += 1)
                  (a = t.v[i]),
                    (s = t.o[i]),
                    (n = t.i[i]),
                    a[0] === s[0] &&
                    a[1] === s[1] &&
                    a[0] === n[0] &&
                    a[1] === n[1]
                      ? (0 !== i && i !== x - 1) || t.c
                        ? ((o = 0 === i ? t.v[x - 1] : t.v[i - 1]),
                          (p = (l = Math.sqrt(
                            Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)
                          ))
                            ? Math.min(l / 2, e) / l
                            : 0),
                          (h = m = a[0] + (o[0] - a[0]) * p),
                          (c = d = a[1] - (a[1] - o[1]) * p),
                          (u = h - (h - a[0]) * roundCorner),
                          (f = c - (c - a[1]) * roundCorner),
                          r.setTripleAt(h, c, u, f, m, d, y),
                          (y += 1),
                          (o = i === x - 1 ? t.v[0] : t.v[i + 1]),
                          (p = (l = Math.sqrt(
                            Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)
                          ))
                            ? Math.min(l / 2, e) / l
                            : 0),
                          (h = u = a[0] + (o[0] - a[0]) * p),
                          (c = f = a[1] + (o[1] - a[1]) * p),
                          (m = h - (h - a[0]) * roundCorner),
                          (d = c - (c - a[1]) * roundCorner),
                          r.setTripleAt(h, c, u, f, m, d, y),
                          (y += 1))
                        : (r.setTripleAt(a[0], a[1], s[0], s[1], n[0], n[1], y),
                          (y += 1))
                      : (r.setTripleAt(
                          t.v[i][0],
                          t.v[i][1],
                          t.o[i][0],
                          t.o[i][1],
                          t.i[i][0],
                          t.i[i][1],
                          y
                        ),
                        (y += 1));
                return r;
              }),
              (RoundCornersModifier.prototype.processShapes = function (t) {
                var e,
                  i,
                  r,
                  a,
                  n,
                  s,
                  o = this.shapes.length,
                  l = this.rd.v;
                if (0 !== l)
                  for (i = 0; i < o; i += 1) {
                    if (
                      ((s = (n = this.shapes[i]).localShapeCollection),
                      n.shape._mdf || this._mdf || t)
                    )
                      for (
                        s.releaseShapes(),
                          n.shape._mdf = !0,
                          e = n.shape.paths.shapes,
                          a = n.shape.paths._length,
                          r = 0;
                        r < a;
                        r += 1
                      )
                        s.addShape(this.processPath(e[r], l));
                    n.shape.paths = n.localShapeCollection;
                  }
                this.dynamicProperties.length || (this._mdf = !1);
              });
            var FontManager = (function () {
              var t = { w: 0, size: 0, shapes: [], data: { shapes: [] } },
                e = [];
              e = e.concat([
                2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367,
                2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377,
                2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390,
                2391, 2402, 2403,
              ]);
              var i = [
                  'd83cdffb',
                  'd83cdffc',
                  'd83cdffd',
                  'd83cdffe',
                  'd83cdfff',
                ],
                r = [65039, 8205];
              function a(t, e) {
                var i = createTag('span');
                i.setAttribute('aria-hidden', !0), (i.style.fontFamily = e);
                var r = createTag('span');
                (r.innerText = 'giItT1WQy@!-/#'),
                  (i.style.position = 'absolute'),
                  (i.style.left = '-10000px'),
                  (i.style.top = '-10000px'),
                  (i.style.fontSize = '300px'),
                  (i.style.fontVariant = 'normal'),
                  (i.style.fontStyle = 'normal'),
                  (i.style.fontWeight = 'normal'),
                  (i.style.letterSpacing = '0'),
                  i.appendChild(r),
                  document.body.appendChild(i);
                var a = r.offsetWidth;
                return (
                  (r.style.fontFamily =
                    (function (t) {
                      var e,
                        i = t.split(','),
                        r = i.length,
                        a = [];
                      for (e = 0; e < r; e += 1)
                        'sans-serif' !== i[e] &&
                          'monospace' !== i[e] &&
                          a.push(i[e]);
                      return a.join(',');
                    })(t) +
                    ', ' +
                    e),
                  { node: r, w: a, parent: i }
                );
              }
              function n(t, e) {
                var i,
                  r = document.body && e ? 'svg' : 'canvas',
                  a = getFontProperties(t);
                if ('svg' === r) {
                  var n = createNS('text');
                  (n.style.fontSize = '100px'),
                    n.setAttribute('font-family', t.fFamily),
                    n.setAttribute('font-style', a.style),
                    n.setAttribute('font-weight', a.weight),
                    (n.textContent = '1'),
                    t.fClass
                      ? ((n.style.fontFamily = 'inherit'),
                        n.setAttribute('class', t.fClass))
                      : (n.style.fontFamily = t.fFamily),
                    e.appendChild(n),
                    (i = n);
                } else {
                  var s = new OffscreenCanvas(500, 500).getContext('2d');
                  (s.font = a.style + ' ' + a.weight + ' 100px ' + t.fFamily),
                    (i = s);
                }
                return {
                  measureText: function (t) {
                    return 'svg' === r
                      ? ((i.textContent = t), i.getComputedTextLength())
                      : i.measureText(t).width;
                  },
                };
              }
              var s = function () {
                (this.fonts = []),
                  (this.chars = null),
                  (this.typekitLoaded = 0),
                  (this.isLoaded = !1),
                  (this._warned = !1),
                  (this.initTime = Date.now()),
                  (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
                  (this.checkLoadedFontsBinded =
                    this.checkLoadedFonts.bind(this));
              };
              (s.isModifier = function (t, e) {
                var r = t.toString(16) + e.toString(16);
                return -1 !== i.indexOf(r);
              }),
                (s.isZeroWidthJoiner = function (t, e) {
                  return e ? t === r[0] && e === r[1] : t === r[1];
                }),
                (s.isCombinedCharacter = function (t) {
                  return -1 !== e.indexOf(t);
                });
              var o = {
                addChars: function (t) {
                  if (t) {
                    var e;
                    this.chars || (this.chars = []);
                    var i,
                      r,
                      a = t.length,
                      n = this.chars.length;
                    for (e = 0; e < a; e += 1) {
                      for (i = 0, r = !1; i < n; )
                        this.chars[i].style === t[e].style &&
                          this.chars[i].fFamily === t[e].fFamily &&
                          this.chars[i].ch === t[e].ch &&
                          (r = !0),
                          (i += 1);
                      r || (this.chars.push(t[e]), (n += 1));
                    }
                  }
                },
                addFonts: function (t, e) {
                  if (t) {
                    if (this.chars)
                      return (this.isLoaded = !0), void (this.fonts = t.list);
                    if (!document.body)
                      return (
                        (this.isLoaded = !0),
                        t.list.forEach(function (t) {
                          (t.helper = n(t)), (t.cache = {});
                        }),
                        void (this.fonts = t.list)
                      );
                    var i,
                      r = t.list,
                      s = r.length,
                      o = s;
                    for (i = 0; i < s; i += 1) {
                      var l,
                        p,
                        h = !0;
                      if (
                        ((r[i].loaded = !1),
                        (r[i].monoCase = a(r[i].fFamily, 'monospace')),
                        (r[i].sansCase = a(r[i].fFamily, 'sans-serif')),
                        r[i].fPath)
                      ) {
                        if ('p' === r[i].fOrigin || 3 === r[i].origin) {
                          if (
                            ((l = document.querySelectorAll(
                              'style[f-forigin="p"][f-family="' +
                                r[i].fFamily +
                                '"], style[f-origin="3"][f-family="' +
                                r[i].fFamily +
                                '"]'
                            )).length > 0 && (h = !1),
                            h)
                          ) {
                            var c = createTag('style');
                            c.setAttribute('f-forigin', r[i].fOrigin),
                              c.setAttribute('f-origin', r[i].origin),
                              c.setAttribute('f-family', r[i].fFamily),
                              (c.type = 'text/css'),
                              (c.innerText =
                                '@font-face {font-family: ' +
                                r[i].fFamily +
                                "; font-style: normal; src: url('" +
                                r[i].fPath +
                                "');}"),
                              e.appendChild(c);
                          }
                        } else if ('g' === r[i].fOrigin || 1 === r[i].origin) {
                          for (
                            l = document.querySelectorAll(
                              'link[f-forigin="g"], link[f-origin="1"]'
                            ),
                              p = 0;
                            p < l.length;
                            p += 1
                          )
                            -1 !== l[p].href.indexOf(r[i].fPath) && (h = !1);
                          if (h) {
                            var u = createTag('link');
                            u.setAttribute('f-forigin', r[i].fOrigin),
                              u.setAttribute('f-origin', r[i].origin),
                              (u.type = 'text/css'),
                              (u.rel = 'stylesheet'),
                              (u.href = r[i].fPath),
                              document.body.appendChild(u);
                          }
                        } else if ('t' === r[i].fOrigin || 2 === r[i].origin) {
                          for (
                            l = document.querySelectorAll(
                              'script[f-forigin="t"], script[f-origin="2"]'
                            ),
                              p = 0;
                            p < l.length;
                            p += 1
                          )
                            r[i].fPath === l[p].src && (h = !1);
                          if (h) {
                            var f = createTag('link');
                            f.setAttribute('f-forigin', r[i].fOrigin),
                              f.setAttribute('f-origin', r[i].origin),
                              f.setAttribute('rel', 'stylesheet'),
                              f.setAttribute('href', r[i].fPath),
                              e.appendChild(f);
                          }
                        }
                      } else (r[i].loaded = !0), (o -= 1);
                      (r[i].helper = n(r[i], e)),
                        (r[i].cache = {}),
                        this.fonts.push(r[i]);
                    }
                    0 === o
                      ? (this.isLoaded = !0)
                      : setTimeout(this.checkLoadedFonts.bind(this), 100);
                  } else this.isLoaded = !0;
                },
                getCharData: function (e, i, r) {
                  for (var a = 0, n = this.chars.length; a < n; ) {
                    if (
                      this.chars[a].ch === e &&
                      this.chars[a].style === i &&
                      this.chars[a].fFamily === r
                    )
                      return this.chars[a];
                    a += 1;
                  }
                  return (
                    (('string' === typeof e && 13 !== e.charCodeAt(0)) || !e) &&
                      console &&
                      console.warn &&
                      !this._warned &&
                      ((this._warned = !0),
                      console.warn(
                        'Missing character from exported characters list: ',
                        e,
                        i,
                        r
                      )),
                    t
                  );
                },
                getFontByName: function (t) {
                  for (var e = 0, i = this.fonts.length; e < i; ) {
                    if (this.fonts[e].fName === t) return this.fonts[e];
                    e += 1;
                  }
                  return this.fonts[0];
                },
                measureText: function (t, e, i) {
                  var r = this.getFontByName(e),
                    a = t.charCodeAt(0);
                  if (!r.cache[a + 1]) {
                    var n = r.helper;
                    if (' ' === t) {
                      var s = n.measureText('|' + t + '|'),
                        o = n.measureText('||');
                      r.cache[a + 1] = (s - o) / 100;
                    } else r.cache[a + 1] = n.measureText(t) / 100;
                  }
                  return r.cache[a + 1] * i;
                },
                checkLoadedFonts: function () {
                  var t,
                    e,
                    i,
                    r = this.fonts.length,
                    a = r;
                  for (t = 0; t < r; t += 1)
                    this.fonts[t].loaded
                      ? (a -= 1)
                      : 'n' === this.fonts[t].fOrigin ||
                          0 === this.fonts[t].origin
                        ? (this.fonts[t].loaded = !0)
                        : ((e = this.fonts[t].monoCase.node),
                          (i = this.fonts[t].monoCase.w),
                          e.offsetWidth !== i
                            ? ((a -= 1), (this.fonts[t].loaded = !0))
                            : ((e = this.fonts[t].sansCase.node),
                              (i = this.fonts[t].sansCase.w),
                              e.offsetWidth !== i &&
                                ((a -= 1), (this.fonts[t].loaded = !0))),
                          this.fonts[t].loaded &&
                            (this.fonts[
                              t
                            ].sansCase.parent.parentNode.removeChild(
                              this.fonts[t].sansCase.parent
                            ),
                            this.fonts[
                              t
                            ].monoCase.parent.parentNode.removeChild(
                              this.fonts[t].monoCase.parent
                            )));
                  0 !== a && Date.now() - this.initTime < 5e3
                    ? setTimeout(this.checkLoadedFontsBinded, 20)
                    : setTimeout(this.setIsLoadedBinded, 10);
                },
                setIsLoaded: function () {
                  this.isLoaded = !0;
                },
              };
              return (s.prototype = o), s;
            })();
            function RenderableElement() {}
            RenderableElement.prototype = {
              initRenderable: function () {
                (this.isInRange = !1),
                  (this.hidden = !1),
                  (this.isTransparent = !1),
                  (this.renderableComponents = []);
              },
              addRenderableComponent: function (t) {
                -1 === this.renderableComponents.indexOf(t) &&
                  this.renderableComponents.push(t);
              },
              removeRenderableComponent: function (t) {
                -1 !== this.renderableComponents.indexOf(t) &&
                  this.renderableComponents.splice(
                    this.renderableComponents.indexOf(t),
                    1
                  );
              },
              prepareRenderableFrame: function (t) {
                this.checkLayerLimits(t);
              },
              checkTransparency: function () {
                this.finalTransform.mProp.o.v <= 0
                  ? !this.isTransparent &&
                    this.globalData.renderConfig.hideOnTransparent &&
                    ((this.isTransparent = !0), this.hide())
                  : this.isTransparent &&
                    ((this.isTransparent = !1), this.show());
              },
              checkLayerLimits: function (t) {
                this.data.ip - this.data.st <= t &&
                this.data.op - this.data.st > t
                  ? !0 !== this.isInRange &&
                    ((this.globalData._mdf = !0),
                    (this._mdf = !0),
                    (this.isInRange = !0),
                    this.show())
                  : !1 !== this.isInRange &&
                    ((this.globalData._mdf = !0),
                    (this.isInRange = !1),
                    this.hide());
              },
              renderRenderable: function () {
                var t,
                  e = this.renderableComponents.length;
                for (t = 0; t < e; t += 1)
                  this.renderableComponents[t].renderFrame(this._isFirstFrame);
              },
              sourceRectAtTime: function () {
                return { top: 0, left: 0, width: 100, height: 100 };
              },
              getLayerSize: function () {
                return 5 === this.data.ty
                  ? {
                      w: this.data.textData.width,
                      h: this.data.textData.height,
                    }
                  : { w: this.data.width, h: this.data.height };
              },
            };
            var MaskManagerInterface = (function () {
                function t(t, e) {
                  (this._mask = t), (this._data = e);
                }
                return (
                  Object.defineProperty(t.prototype, 'maskPath', {
                    get: function () {
                      return (
                        this._mask.prop.k && this._mask.prop.getValue(),
                        this._mask.prop
                      );
                    },
                  }),
                  Object.defineProperty(t.prototype, 'maskOpacity', {
                    get: function () {
                      return (
                        this._mask.op.k && this._mask.op.getValue(),
                        100 * this._mask.op.v
                      );
                    },
                  }),
                  function (e) {
                    var i,
                      r = createSizedArray(e.viewData.length),
                      a = e.viewData.length;
                    for (i = 0; i < a; i += 1)
                      r[i] = new t(e.viewData[i], e.masksProperties[i]);
                    return function (t) {
                      for (i = 0; i < a; ) {
                        if (e.masksProperties[i].nm === t) return r[i];
                        i += 1;
                      }
                      return null;
                    };
                  }
                );
              })(),
              ExpressionPropertyInterface = (function () {
                var t = { pv: 0, v: 0, mult: 1 },
                  e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
                function i(t, e, i) {
                  Object.defineProperty(t, 'velocity', {
                    get: function () {
                      return e.getVelocityAtTime(e.comp.currentFrame);
                    },
                  }),
                    (t.numKeys = e.keyframes ? e.keyframes.length : 0),
                    (t.key = function (r) {
                      if (!t.numKeys) return 0;
                      var a = '';
                      a =
                        's' in e.keyframes[r - 1]
                          ? e.keyframes[r - 1].s
                          : 'e' in e.keyframes[r - 2]
                            ? e.keyframes[r - 2].e
                            : e.keyframes[r - 2].s;
                      var n =
                        'unidimensional' === i
                          ? new Number(a)
                          : Object.assign({}, a);
                      return (
                        (n.time =
                          e.keyframes[r - 1].t /
                          e.elem.comp.globalData.frameRate),
                        (n.value = 'unidimensional' === i ? a[0] : a),
                        n
                      );
                    }),
                    (t.valueAtTime = e.getValueAtTime),
                    (t.speedAtTime = e.getSpeedAtTime),
                    (t.velocityAtTime = e.getVelocityAtTime),
                    (t.propertyGroup = e.propertyGroup);
                }
                function r() {
                  return t;
                }
                return function (a) {
                  return a
                    ? 'unidimensional' === a.propType
                      ? (function (e) {
                          (e && 'pv' in e) || (e = t);
                          var r = 1 / e.mult,
                            a = e.pv * r,
                            n = new Number(a);
                          return (
                            (n.value = a),
                            i(n, e, 'unidimensional'),
                            function () {
                              return (
                                e.k && e.getValue(),
                                (a = e.v * r),
                                n.value !== a &&
                                  (((n = new Number(a)).value = a),
                                  i(n, e, 'unidimensional')),
                                n
                              );
                            }
                          );
                        })(a)
                      : (function (t) {
                          (t && 'pv' in t) || (t = e);
                          var r = 1 / t.mult,
                            a = (t.data && t.data.l) || t.pv.length,
                            n = createTypedArray('float32', a),
                            s = createTypedArray('float32', a);
                          return (
                            (n.value = s),
                            i(n, t, 'multidimensional'),
                            function () {
                              t.k && t.getValue();
                              for (var e = 0; e < a; e += 1)
                                (s[e] = t.v[e] * r), (n[e] = s[e]);
                              return n;
                            }
                          );
                        })(a)
                    : r;
                };
              })(),
              TransformExpressionInterface = function (t) {
                function e(t) {
                  switch (t) {
                    case 'scale':
                    case 'Scale':
                    case 'ADBE Scale':
                    case 6:
                      return e.scale;
                    case 'rotation':
                    case 'Rotation':
                    case 'ADBE Rotation':
                    case 'ADBE Rotate Z':
                    case 10:
                      return e.rotation;
                    case 'ADBE Rotate X':
                      return e.xRotation;
                    case 'ADBE Rotate Y':
                      return e.yRotation;
                    case 'position':
                    case 'Position':
                    case 'ADBE Position':
                    case 2:
                      return e.position;
                    case 'ADBE Position_0':
                      return e.xPosition;
                    case 'ADBE Position_1':
                      return e.yPosition;
                    case 'ADBE Position_2':
                      return e.zPosition;
                    case 'anchorPoint':
                    case 'AnchorPoint':
                    case 'Anchor Point':
                    case 'ADBE AnchorPoint':
                    case 1:
                      return e.anchorPoint;
                    case 'opacity':
                    case 'Opacity':
                    case 11:
                      return e.opacity;
                    default:
                      return null;
                  }
                }
                var i, r, a, n;
                return (
                  Object.defineProperty(e, 'rotation', {
                    get: ExpressionPropertyInterface(t.r || t.rz),
                  }),
                  Object.defineProperty(e, 'zRotation', {
                    get: ExpressionPropertyInterface(t.rz || t.r),
                  }),
                  Object.defineProperty(e, 'xRotation', {
                    get: ExpressionPropertyInterface(t.rx),
                  }),
                  Object.defineProperty(e, 'yRotation', {
                    get: ExpressionPropertyInterface(t.ry),
                  }),
                  Object.defineProperty(e, 'scale', {
                    get: ExpressionPropertyInterface(t.s),
                  }),
                  t.p
                    ? (n = ExpressionPropertyInterface(t.p))
                    : ((i = ExpressionPropertyInterface(t.px)),
                      (r = ExpressionPropertyInterface(t.py)),
                      t.pz && (a = ExpressionPropertyInterface(t.pz))),
                  Object.defineProperty(e, 'position', {
                    get: function () {
                      return t.p ? n() : [i(), r(), a ? a() : 0];
                    },
                  }),
                  Object.defineProperty(e, 'xPosition', {
                    get: ExpressionPropertyInterface(t.px),
                  }),
                  Object.defineProperty(e, 'yPosition', {
                    get: ExpressionPropertyInterface(t.py),
                  }),
                  Object.defineProperty(e, 'zPosition', {
                    get: ExpressionPropertyInterface(t.pz),
                  }),
                  Object.defineProperty(e, 'anchorPoint', {
                    get: ExpressionPropertyInterface(t.a),
                  }),
                  Object.defineProperty(e, 'opacity', {
                    get: ExpressionPropertyInterface(t.o),
                  }),
                  Object.defineProperty(e, 'skew', {
                    get: ExpressionPropertyInterface(t.sk),
                  }),
                  Object.defineProperty(e, 'skewAxis', {
                    get: ExpressionPropertyInterface(t.sa),
                  }),
                  Object.defineProperty(e, 'orientation', {
                    get: ExpressionPropertyInterface(t.or),
                  }),
                  e
                );
              },
              LayerExpressionInterface = (function () {
                function t(t) {
                  var e = new Matrix();
                  return (
                    void 0 !== t
                      ? this._elem.finalTransform.mProp
                          .getValueAtTime(t)
                          .clone(e)
                      : this._elem.finalTransform.mProp.applyToMatrix(e),
                    e
                  );
                }
                function e(t, e) {
                  var i = this.getMatrix(e);
                  return (
                    (i.props[12] = 0),
                    (i.props[13] = 0),
                    (i.props[14] = 0),
                    this.applyPoint(i, t)
                  );
                }
                function i(t, e) {
                  var i = this.getMatrix(e);
                  return this.applyPoint(i, t);
                }
                function r(t, e) {
                  var i = this.getMatrix(e);
                  return (
                    (i.props[12] = 0),
                    (i.props[13] = 0),
                    (i.props[14] = 0),
                    this.invertPoint(i, t)
                  );
                }
                function a(t, e) {
                  var i = this.getMatrix(e);
                  return this.invertPoint(i, t);
                }
                function n(t, e) {
                  if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var i,
                      r = this._elem.hierarchy.length;
                    for (i = 0; i < r; i += 1)
                      this._elem.hierarchy[
                        i
                      ].finalTransform.mProp.applyToMatrix(t);
                  }
                  return t.applyToPointArray(e[0], e[1], e[2] || 0);
                }
                function s(t, e) {
                  if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var i,
                      r = this._elem.hierarchy.length;
                    for (i = 0; i < r; i += 1)
                      this._elem.hierarchy[
                        i
                      ].finalTransform.mProp.applyToMatrix(t);
                  }
                  return t.inversePoint(e);
                }
                function o(t) {
                  var e = new Matrix();
                  if (
                    (e.reset(),
                    this._elem.finalTransform.mProp.applyToMatrix(e),
                    this._elem.hierarchy && this._elem.hierarchy.length)
                  ) {
                    var i,
                      r = this._elem.hierarchy.length;
                    for (i = 0; i < r; i += 1)
                      this._elem.hierarchy[
                        i
                      ].finalTransform.mProp.applyToMatrix(e);
                    return e.inversePoint(t);
                  }
                  return e.inversePoint(t);
                }
                function l() {
                  return [1, 1, 1, 1];
                }
                return function (p) {
                  var h;
                  function c(t) {
                    switch (t) {
                      case 'ADBE Root Vectors Group':
                      case 'Contents':
                      case 2:
                        return c.shapeInterface;
                      case 1:
                      case 6:
                      case 'Transform':
                      case 'transform':
                      case 'ADBE Transform Group':
                        return h;
                      case 4:
                      case 'ADBE Effect Parade':
                      case 'effects':
                      case 'Effects':
                        return c.effect;
                      case 'ADBE Text Properties':
                        return c.textInterface;
                      default:
                        return null;
                    }
                  }
                  (c.getMatrix = t),
                    (c.invertPoint = s),
                    (c.applyPoint = n),
                    (c.toWorld = i),
                    (c.toWorldVec = e),
                    (c.fromWorld = a),
                    (c.fromWorldVec = r),
                    (c.toComp = i),
                    (c.fromComp = o),
                    (c.sampleImage = l),
                    (c.sourceRectAtTime = p.sourceRectAtTime.bind(p)),
                    (c._elem = p);
                  var u = getDescriptor(
                    (h = TransformExpressionInterface(p.finalTransform.mProp)),
                    'anchorPoint'
                  );
                  return (
                    Object.defineProperties(c, {
                      hasParent: {
                        get: function () {
                          return p.hierarchy.length;
                        },
                      },
                      parent: {
                        get: function () {
                          return p.hierarchy[0].layerInterface;
                        },
                      },
                      rotation: getDescriptor(h, 'rotation'),
                      scale: getDescriptor(h, 'scale'),
                      position: getDescriptor(h, 'position'),
                      opacity: getDescriptor(h, 'opacity'),
                      anchorPoint: u,
                      anchor_point: u,
                      transform: {
                        get: function () {
                          return h;
                        },
                      },
                      active: {
                        get: function () {
                          return p.isInRange;
                        },
                      },
                    }),
                    (c.startTime = p.data.st),
                    (c.index = p.data.ind),
                    (c.source = p.data.refId),
                    (c.height = 0 === p.data.ty ? p.data.h : 100),
                    (c.width = 0 === p.data.ty ? p.data.w : 100),
                    (c.inPoint = p.data.ip / p.comp.globalData.frameRate),
                    (c.outPoint = p.data.op / p.comp.globalData.frameRate),
                    (c._name = p.data.nm),
                    (c.registerMaskInterface = function (t) {
                      c.mask = new MaskManagerInterface(t, p);
                    }),
                    (c.registerEffectsInterface = function (t) {
                      c.effect = t;
                    }),
                    c
                  );
                };
              })(),
              propertyGroupFactory = function (t, e) {
                return function (i) {
                  return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1);
                };
              },
              PropertyInterface = function (t, e) {
                var i = { _name: t };
                return function (t) {
                  return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1);
                };
              },
              EffectsExpressionInterface = (function () {
                function t(i, r, a, n) {
                  function s(t) {
                    for (var e = i.ef, r = 0, a = e.length; r < a; ) {
                      if (t === e[r].nm || t === e[r].mn || t === e[r].ix)
                        return 5 === e[r].ty ? p[r] : p[r]();
                      r += 1;
                    }
                    throw new Error();
                  }
                  var o,
                    l = propertyGroupFactory(s, a),
                    p = [],
                    h = i.ef.length;
                  for (o = 0; o < h; o += 1)
                    5 === i.ef[o].ty
                      ? p.push(
                          t(
                            i.ef[o],
                            r.effectElements[o],
                            r.effectElements[o].propertyGroup,
                            n
                          )
                        )
                      : p.push(e(r.effectElements[o], i.ef[o].ty, n, l));
                  return (
                    'ADBE Color Control' === i.mn &&
                      Object.defineProperty(s, 'color', {
                        get: function () {
                          return p[0]();
                        },
                      }),
                    Object.defineProperties(s, {
                      numProperties: {
                        get: function () {
                          return i.np;
                        },
                      },
                      _name: { value: i.nm },
                      propertyGroup: { value: l },
                    }),
                    (s.enabled = 0 !== i.en),
                    (s.active = s.enabled),
                    s
                  );
                }
                function e(t, e, i, r) {
                  var a = ExpressionPropertyInterface(t.p);
                  return (
                    t.p.setGroupProperty &&
                      t.p.setGroupProperty(PropertyInterface('', r)),
                    function () {
                      return 10 === e ? i.comp.compInterface(t.p.v) : a();
                    }
                  );
                }
                return {
                  createEffectsInterface: function (e, i) {
                    if (e.effectsManager) {
                      var r,
                        a = [],
                        n = e.data.ef,
                        s = e.effectsManager.effectElements.length;
                      for (r = 0; r < s; r += 1)
                        a.push(
                          t(n[r], e.effectsManager.effectElements[r], i, e)
                        );
                      var o = e.data.ef || [],
                        l = function (t) {
                          for (r = 0, s = o.length; r < s; ) {
                            if (t === o[r].nm || t === o[r].mn || t === o[r].ix)
                              return a[r];
                            r += 1;
                          }
                          return null;
                        };
                      return (
                        Object.defineProperty(l, 'numProperties', {
                          get: function () {
                            return o.length;
                          },
                        }),
                        l
                      );
                    }
                    return null;
                  },
                };
              })(),
              CompExpressionInterface = function (t) {
                function e(e) {
                  for (var i = 0, r = t.layers.length; i < r; ) {
                    if (t.layers[i].nm === e || t.layers[i].ind === e)
                      return t.elements[i].layerInterface;
                    i += 1;
                  }
                  return null;
                }
                return (
                  Object.defineProperty(e, '_name', { value: t.data.nm }),
                  (e.layer = e),
                  (e.pixelAspect = 1),
                  (e.height = t.data.h || t.globalData.compSize.h),
                  (e.width = t.data.w || t.globalData.compSize.w),
                  (e.pixelAspect = 1),
                  (e.frameDuration = 1 / t.globalData.frameRate),
                  (e.displayStartTime = 0),
                  (e.numLayers = t.layers.length),
                  e
                );
              },
              ShapePathInterface = function (t, e, i) {
                var r = e.sh;
                function a(t) {
                  return 'Shape' === t ||
                    'shape' === t ||
                    'Path' === t ||
                    'path' === t ||
                    'ADBE Vector Shape' === t ||
                    2 === t
                    ? a.path
                    : null;
                }
                var n = propertyGroupFactory(a, i);
                return (
                  r.setGroupProperty(PropertyInterface('Path', n)),
                  Object.defineProperties(a, {
                    path: {
                      get: function () {
                        return r.k && r.getValue(), r;
                      },
                    },
                    shape: {
                      get: function () {
                        return r.k && r.getValue(), r;
                      },
                    },
                    _name: { value: t.nm },
                    ix: { value: t.ix },
                    propertyIndex: { value: t.ix },
                    mn: { value: t.mn },
                    propertyGroup: { value: i },
                  }),
                  a
                );
              },
              ShapeExpressionInterface = (function () {
                function t(t, s, u) {
                  var f,
                    m = [],
                    d = t ? t.length : 0;
                  for (f = 0; f < d; f += 1)
                    'gr' === t[f].ty
                      ? m.push(e(t[f], s[f], u))
                      : 'fl' === t[f].ty
                        ? m.push(i(t[f], s[f], u))
                        : 'st' === t[f].ty
                          ? m.push(a(t[f], s[f], u))
                          : 'tm' === t[f].ty
                            ? m.push(n(t[f], s[f], u))
                            : 'tr' === t[f].ty ||
                              ('el' === t[f].ty
                                ? m.push(o(t[f], s[f], u))
                                : 'sr' === t[f].ty
                                  ? m.push(l(t[f], s[f], u))
                                  : 'sh' === t[f].ty
                                    ? m.push(ShapePathInterface(t[f], s[f], u))
                                    : 'rc' === t[f].ty
                                      ? m.push(p(t[f], s[f], u))
                                      : 'rd' === t[f].ty
                                        ? m.push(h(t[f], s[f], u))
                                        : 'rp' === t[f].ty
                                          ? m.push(c(t[f], s[f], u))
                                          : 'gf' === t[f].ty
                                            ? m.push(r(t[f], s[f], u))
                                            : m.push(
                                                (t[f],
                                                s[f],
                                                function () {
                                                  return null;
                                                })
                                              ));
                  return m;
                }
                function e(e, i, r) {
                  var a = function (t) {
                    switch (t) {
                      case 'ADBE Vectors Group':
                      case 'Contents':
                      case 2:
                        return a.content;
                      default:
                        return a.transform;
                    }
                  };
                  a.propertyGroup = propertyGroupFactory(a, r);
                  var n = (function (e, i, r) {
                      var a,
                        n = function (t) {
                          for (var e = 0, i = a.length; e < i; ) {
                            if (
                              a[e]._name === t ||
                              a[e].mn === t ||
                              a[e].propertyIndex === t ||
                              a[e].ix === t ||
                              a[e].ind === t
                            )
                              return a[e];
                            e += 1;
                          }
                          return 'number' === typeof t ? a[t - 1] : null;
                        };
                      (n.propertyGroup = propertyGroupFactory(n, r)),
                        (a = t(e.it, i.it, n.propertyGroup)),
                        (n.numProperties = a.length);
                      var o = s(
                        e.it[e.it.length - 1],
                        i.it[i.it.length - 1],
                        n.propertyGroup
                      );
                      return (
                        (n.transform = o),
                        (n.propertyIndex = e.cix),
                        (n._name = e.nm),
                        n
                      );
                    })(e, i, a.propertyGroup),
                    o = s(
                      e.it[e.it.length - 1],
                      i.it[i.it.length - 1],
                      a.propertyGroup
                    );
                  return (
                    (a.content = n),
                    (a.transform = o),
                    Object.defineProperty(a, '_name', {
                      get: function () {
                        return e.nm;
                      },
                    }),
                    (a.numProperties = e.np),
                    (a.propertyIndex = e.ix),
                    (a.nm = e.nm),
                    (a.mn = e.mn),
                    a
                  );
                }
                function i(t, e, i) {
                  function r(t) {
                    return 'Color' === t || 'color' === t
                      ? r.color
                      : 'Opacity' === t || 'opacity' === t
                        ? r.opacity
                        : null;
                  }
                  return (
                    Object.defineProperties(r, {
                      color: { get: ExpressionPropertyInterface(e.c) },
                      opacity: { get: ExpressionPropertyInterface(e.o) },
                      _name: { value: t.nm },
                      mn: { value: t.mn },
                    }),
                    e.c.setGroupProperty(PropertyInterface('Color', i)),
                    e.o.setGroupProperty(PropertyInterface('Opacity', i)),
                    r
                  );
                }
                function r(t, e, i) {
                  function r(t) {
                    return 'Start Point' === t || 'start point' === t
                      ? r.startPoint
                      : 'End Point' === t || 'end point' === t
                        ? r.endPoint
                        : 'Opacity' === t || 'opacity' === t
                          ? r.opacity
                          : null;
                  }
                  return (
                    Object.defineProperties(r, {
                      startPoint: { get: ExpressionPropertyInterface(e.s) },
                      endPoint: { get: ExpressionPropertyInterface(e.e) },
                      opacity: { get: ExpressionPropertyInterface(e.o) },
                      type: {
                        get: function () {
                          return 'a';
                        },
                      },
                      _name: { value: t.nm },
                      mn: { value: t.mn },
                    }),
                    e.s.setGroupProperty(PropertyInterface('Start Point', i)),
                    e.e.setGroupProperty(PropertyInterface('End Point', i)),
                    e.o.setGroupProperty(PropertyInterface('Opacity', i)),
                    r
                  );
                }
                function a(t, e, i) {
                  var r,
                    a = propertyGroupFactory(p, i),
                    n = propertyGroupFactory(l, a);
                  function s(i) {
                    Object.defineProperty(l, t.d[i].nm, {
                      get: ExpressionPropertyInterface(e.d.dataProps[i].p),
                    });
                  }
                  var o = t.d ? t.d.length : 0,
                    l = {};
                  for (r = 0; r < o; r += 1)
                    s(r), e.d.dataProps[r].p.setGroupProperty(n);
                  function p(t) {
                    return 'Color' === t || 'color' === t
                      ? p.color
                      : 'Opacity' === t || 'opacity' === t
                        ? p.opacity
                        : 'Stroke Width' === t || 'stroke width' === t
                          ? p.strokeWidth
                          : null;
                  }
                  return (
                    Object.defineProperties(p, {
                      color: { get: ExpressionPropertyInterface(e.c) },
                      opacity: { get: ExpressionPropertyInterface(e.o) },
                      strokeWidth: { get: ExpressionPropertyInterface(e.w) },
                      dash: {
                        get: function () {
                          return l;
                        },
                      },
                      _name: { value: t.nm },
                      mn: { value: t.mn },
                    }),
                    e.c.setGroupProperty(PropertyInterface('Color', a)),
                    e.o.setGroupProperty(PropertyInterface('Opacity', a)),
                    e.w.setGroupProperty(PropertyInterface('Stroke Width', a)),
                    p
                  );
                }
                function n(t, e, i) {
                  function r(e) {
                    return e === t.e.ix || 'End' === e || 'end' === e
                      ? r.end
                      : e === t.s.ix
                        ? r.start
                        : e === t.o.ix
                          ? r.offset
                          : null;
                  }
                  var a = propertyGroupFactory(r, i);
                  return (
                    (r.propertyIndex = t.ix),
                    e.s.setGroupProperty(PropertyInterface('Start', a)),
                    e.e.setGroupProperty(PropertyInterface('End', a)),
                    e.o.setGroupProperty(PropertyInterface('Offset', a)),
                    (r.propertyIndex = t.ix),
                    (r.propertyGroup = i),
                    Object.defineProperties(r, {
                      start: { get: ExpressionPropertyInterface(e.s) },
                      end: { get: ExpressionPropertyInterface(e.e) },
                      offset: { get: ExpressionPropertyInterface(e.o) },
                      _name: { value: t.nm },
                    }),
                    (r.mn = t.mn),
                    r
                  );
                }
                function s(t, e, i) {
                  function r(e) {
                    return t.a.ix === e || 'Anchor Point' === e
                      ? r.anchorPoint
                      : t.o.ix === e || 'Opacity' === e
                        ? r.opacity
                        : t.p.ix === e || 'Position' === e
                          ? r.position
                          : t.r.ix === e ||
                              'Rotation' === e ||
                              'ADBE Vector Rotation' === e
                            ? r.rotation
                            : t.s.ix === e || 'Scale' === e
                              ? r.scale
                              : (t.sk && t.sk.ix === e) || 'Skew' === e
                                ? r.skew
                                : (t.sa && t.sa.ix === e) || 'Skew Axis' === e
                                  ? r.skewAxis
                                  : null;
                  }
                  var a = propertyGroupFactory(r, i);
                  return (
                    e.transform.mProps.o.setGroupProperty(
                      PropertyInterface('Opacity', a)
                    ),
                    e.transform.mProps.p.setGroupProperty(
                      PropertyInterface('Position', a)
                    ),
                    e.transform.mProps.a.setGroupProperty(
                      PropertyInterface('Anchor Point', a)
                    ),
                    e.transform.mProps.s.setGroupProperty(
                      PropertyInterface('Scale', a)
                    ),
                    e.transform.mProps.r.setGroupProperty(
                      PropertyInterface('Rotation', a)
                    ),
                    e.transform.mProps.sk &&
                      (e.transform.mProps.sk.setGroupProperty(
                        PropertyInterface('Skew', a)
                      ),
                      e.transform.mProps.sa.setGroupProperty(
                        PropertyInterface('Skew Angle', a)
                      )),
                    e.transform.op.setGroupProperty(
                      PropertyInterface('Opacity', a)
                    ),
                    Object.defineProperties(r, {
                      opacity: {
                        get: ExpressionPropertyInterface(e.transform.mProps.o),
                      },
                      position: {
                        get: ExpressionPropertyInterface(e.transform.mProps.p),
                      },
                      anchorPoint: {
                        get: ExpressionPropertyInterface(e.transform.mProps.a),
                      },
                      scale: {
                        get: ExpressionPropertyInterface(e.transform.mProps.s),
                      },
                      rotation: {
                        get: ExpressionPropertyInterface(e.transform.mProps.r),
                      },
                      skew: {
                        get: ExpressionPropertyInterface(e.transform.mProps.sk),
                      },
                      skewAxis: {
                        get: ExpressionPropertyInterface(e.transform.mProps.sa),
                      },
                      _name: { value: t.nm },
                    }),
                    (r.ty = 'tr'),
                    (r.mn = t.mn),
                    (r.propertyGroup = i),
                    r
                  );
                }
                function o(t, e, i) {
                  function r(e) {
                    return t.p.ix === e
                      ? r.position
                      : t.s.ix === e
                        ? r.size
                        : null;
                  }
                  var a = propertyGroupFactory(r, i);
                  r.propertyIndex = t.ix;
                  var n = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
                  return (
                    n.s.setGroupProperty(PropertyInterface('Size', a)),
                    n.p.setGroupProperty(PropertyInterface('Position', a)),
                    Object.defineProperties(r, {
                      size: { get: ExpressionPropertyInterface(n.s) },
                      position: { get: ExpressionPropertyInterface(n.p) },
                      _name: { value: t.nm },
                    }),
                    (r.mn = t.mn),
                    r
                  );
                }
                function l(t, e, i) {
                  function r(e) {
                    return t.p.ix === e
                      ? r.position
                      : t.r.ix === e
                        ? r.rotation
                        : t.pt.ix === e
                          ? r.points
                          : t.or.ix === e ||
                              'ADBE Vector Star Outer Radius' === e
                            ? r.outerRadius
                            : t.os.ix === e
                              ? r.outerRoundness
                              : !t.ir ||
                                  (t.ir.ix !== e &&
                                    'ADBE Vector Star Inner Radius' !== e)
                                ? t.is && t.is.ix === e
                                  ? r.innerRoundness
                                  : null
                                : r.innerRadius;
                  }
                  var a = propertyGroupFactory(r, i),
                    n = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
                  return (
                    (r.propertyIndex = t.ix),
                    n.or.setGroupProperty(PropertyInterface('Outer Radius', a)),
                    n.os.setGroupProperty(
                      PropertyInterface('Outer Roundness', a)
                    ),
                    n.pt.setGroupProperty(PropertyInterface('Points', a)),
                    n.p.setGroupProperty(PropertyInterface('Position', a)),
                    n.r.setGroupProperty(PropertyInterface('Rotation', a)),
                    t.ir &&
                      (n.ir.setGroupProperty(
                        PropertyInterface('Inner Radius', a)
                      ),
                      n.is.setGroupProperty(
                        PropertyInterface('Inner Roundness', a)
                      )),
                    Object.defineProperties(r, {
                      position: { get: ExpressionPropertyInterface(n.p) },
                      rotation: { get: ExpressionPropertyInterface(n.r) },
                      points: { get: ExpressionPropertyInterface(n.pt) },
                      outerRadius: { get: ExpressionPropertyInterface(n.or) },
                      outerRoundness: {
                        get: ExpressionPropertyInterface(n.os),
                      },
                      innerRadius: { get: ExpressionPropertyInterface(n.ir) },
                      innerRoundness: {
                        get: ExpressionPropertyInterface(n.is),
                      },
                      _name: { value: t.nm },
                    }),
                    (r.mn = t.mn),
                    r
                  );
                }
                function p(t, e, i) {
                  function r(e) {
                    return t.p.ix === e
                      ? r.position
                      : t.r.ix === e
                        ? r.roundness
                        : t.s.ix === e ||
                            'Size' === e ||
                            'ADBE Vector Rect Size' === e
                          ? r.size
                          : null;
                  }
                  var a = propertyGroupFactory(r, i),
                    n = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
                  return (
                    (r.propertyIndex = t.ix),
                    n.p.setGroupProperty(PropertyInterface('Position', a)),
                    n.s.setGroupProperty(PropertyInterface('Size', a)),
                    n.r.setGroupProperty(PropertyInterface('Rotation', a)),
                    Object.defineProperties(r, {
                      position: { get: ExpressionPropertyInterface(n.p) },
                      roundness: { get: ExpressionPropertyInterface(n.r) },
                      size: { get: ExpressionPropertyInterface(n.s) },
                      _name: { value: t.nm },
                    }),
                    (r.mn = t.mn),
                    r
                  );
                }
                function h(t, e, i) {
                  function r(e) {
                    return t.r.ix === e || 'Round Corners 1' === e
                      ? r.radius
                      : null;
                  }
                  var a = propertyGroupFactory(r, i),
                    n = e;
                  return (
                    (r.propertyIndex = t.ix),
                    n.rd.setGroupProperty(PropertyInterface('Radius', a)),
                    Object.defineProperties(r, {
                      radius: { get: ExpressionPropertyInterface(n.rd) },
                      _name: { value: t.nm },
                    }),
                    (r.mn = t.mn),
                    r
                  );
                }
                function c(t, e, i) {
                  function r(e) {
                    return t.c.ix === e || 'Copies' === e
                      ? r.copies
                      : t.o.ix === e || 'Offset' === e
                        ? r.offset
                        : null;
                  }
                  var a = propertyGroupFactory(r, i),
                    n = e;
                  return (
                    (r.propertyIndex = t.ix),
                    n.c.setGroupProperty(PropertyInterface('Copies', a)),
                    n.o.setGroupProperty(PropertyInterface('Offset', a)),
                    Object.defineProperties(r, {
                      copies: { get: ExpressionPropertyInterface(n.c) },
                      offset: { get: ExpressionPropertyInterface(n.o) },
                      _name: { value: t.nm },
                    }),
                    (r.mn = t.mn),
                    r
                  );
                }
                return function (e, i, r) {
                  var a;
                  function n(t) {
                    if ('number' === typeof t)
                      return 0 === (t = void 0 === t ? 1 : t) ? r : a[t - 1];
                    for (var e = 0, i = a.length; e < i; ) {
                      if (a[e]._name === t) return a[e];
                      e += 1;
                    }
                    return null;
                  }
                  return (
                    (n.propertyGroup = propertyGroupFactory(n, function () {
                      return r;
                    })),
                    (a = t(e, i, n.propertyGroup)),
                    (n.numProperties = a.length),
                    (n._name = 'Contents'),
                    n
                  );
                };
              })(),
              TextExpressionInterface = function (t) {
                var e, i;
                function r(t) {
                  return 'ADBE Text Document' === t ? r.sourceText : null;
                }
                return (
                  Object.defineProperty(r, 'sourceText', {
                    get: function () {
                      t.textProperty.getValue();
                      var r = t.textProperty.currentData.t;
                      return (
                        r !== e &&
                          ((t.textProperty.currentData.t = e),
                          ((i = new String(r)).value = r || new String(r))),
                        i
                      );
                    },
                  }),
                  r
                );
              },
              getBlendMode = (function () {
                var t = {
                  0: 'source-over',
                  1: 'multiply',
                  2: 'screen',
                  3: 'overlay',
                  4: 'darken',
                  5: 'lighten',
                  6: 'color-dodge',
                  7: 'color-burn',
                  8: 'hard-light',
                  9: 'soft-light',
                  10: 'difference',
                  11: 'exclusion',
                  12: 'hue',
                  13: 'saturation',
                  14: 'color',
                  15: 'luminosity',
                };
                return function (e) {
                  return t[e] || '';
                };
              })();
            function SliderEffect(t, e, i) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
            }
            function AngleEffect(t, e, i) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
            }
            function ColorEffect(t, e, i) {
              this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
            }
            function PointEffect(t, e, i) {
              this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
            }
            function LayerIndexEffect(t, e, i) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
            }
            function MaskIndexEffect(t, e, i) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
            }
            function CheckboxEffect(t, e, i) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
            }
            function NoValueEffect() {
              this.p = {};
            }
            function EffectsManager(t, e) {
              var i,
                r = t.ef || [];
              this.effectElements = [];
              var a,
                n = r.length;
              for (i = 0; i < n; i += 1)
                (a = new GroupEffect(r[i], e)), this.effectElements.push(a);
            }
            function GroupEffect(t, e) {
              this.init(t, e);
            }
            function BaseElement() {}
            function FrameElement() {}
            function _typeof$2(t) {
              return (
                (_typeof$2 =
                  'function' === typeof Symbol &&
                  'symbol' === typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          'function' === typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                      }),
                _typeof$2(t)
              );
            }
            extendPrototype([DynamicPropertyContainer], GroupEffect),
              (GroupEffect.prototype.getValue =
                GroupEffect.prototype.iterateDynamicProperties),
              (GroupEffect.prototype.init = function (t, e) {
                var i;
                (this.data = t),
                  (this.effectElements = []),
                  this.initDynamicPropertyContainer(e);
                var r,
                  a = this.data.ef.length,
                  n = this.data.ef;
                for (i = 0; i < a; i += 1) {
                  switch (((r = null), n[i].ty)) {
                    case 0:
                      r = new SliderEffect(n[i], e, this);
                      break;
                    case 1:
                      r = new AngleEffect(n[i], e, this);
                      break;
                    case 2:
                      r = new ColorEffect(n[i], e, this);
                      break;
                    case 3:
                      r = new PointEffect(n[i], e, this);
                      break;
                    case 4:
                    case 7:
                      r = new CheckboxEffect(n[i], e, this);
                      break;
                    case 10:
                      r = new LayerIndexEffect(n[i], e, this);
                      break;
                    case 11:
                      r = new MaskIndexEffect(n[i], e, this);
                      break;
                    case 5:
                      r = new EffectsManager(n[i], e, this);
                      break;
                    default:
                      r = new NoValueEffect(n[i], e, this);
                  }
                  r && this.effectElements.push(r);
                }
              }),
              (BaseElement.prototype = {
                checkMasks: function () {
                  if (!this.data.hasMask) return !1;
                  for (
                    var t = 0, e = this.data.masksProperties.length;
                    t < e;

                  ) {
                    if (
                      'n' !== this.data.masksProperties[t].mode &&
                      !1 !== this.data.masksProperties[t].cl
                    )
                      return !0;
                    t += 1;
                  }
                  return !1;
                },
                initExpressions: function () {
                  (this.layerInterface = LayerExpressionInterface(this)),
                    this.data.hasMask &&
                      this.maskManager &&
                      this.layerInterface.registerMaskInterface(
                        this.maskManager
                      );
                  var t = EffectsExpressionInterface.createEffectsInterface(
                    this,
                    this.layerInterface
                  );
                  this.layerInterface.registerEffectsInterface(t),
                    0 === this.data.ty || this.data.xt
                      ? (this.compInterface = CompExpressionInterface(this))
                      : 4 === this.data.ty
                        ? ((this.layerInterface.shapeInterface =
                            ShapeExpressionInterface(
                              this.shapesData,
                              this.itemsData,
                              this.layerInterface
                            )),
                          (this.layerInterface.content =
                            this.layerInterface.shapeInterface))
                        : 5 === this.data.ty &&
                          ((this.layerInterface.textInterface =
                            TextExpressionInterface(this)),
                          (this.layerInterface.text =
                            this.layerInterface.textInterface));
                },
                setBlendMode: function () {
                  var t = getBlendMode(this.data.bm);
                  (this.baseElement || this.layerElement).style[
                    'mix-blend-mode'
                  ] = t;
                },
                initBaseData: function (t, e, i) {
                  (this.globalData = e),
                    (this.comp = i),
                    (this.data = t),
                    (this.layerId = createElementID()),
                    this.data.sr || (this.data.sr = 1),
                    (this.effectsManager = new EffectsManager(
                      this.data,
                      this,
                      this.dynamicProperties
                    ));
                },
                getType: function () {
                  return this.type;
                },
                sourceRectAtTime: function () {},
              }),
              (FrameElement.prototype = {
                initFrame: function () {
                  (this._isFirstFrame = !1),
                    (this.dynamicProperties = []),
                    (this._mdf = !1);
                },
                prepareProperties: function (t, e) {
                  var i,
                    r = this.dynamicProperties.length;
                  for (i = 0; i < r; i += 1)
                    (e ||
                      (this._isParent &&
                        'transform' === this.dynamicProperties[i].propType)) &&
                      (this.dynamicProperties[i].getValue(),
                      this.dynamicProperties[i]._mdf &&
                        ((this.globalData._mdf = !0), (this._mdf = !0)));
                },
                addDynamicProperty: function (t) {
                  -1 === this.dynamicProperties.indexOf(t) &&
                    this.dynamicProperties.push(t);
                },
              });
            var FootageInterface = (function () {
              var t = function (t) {
                function e(t) {
                  return 'Outline' === t ? e.outlineInterface() : null;
                }
                return (
                  (e._name = 'Outline'),
                  (e.outlineInterface = (function (t) {
                    var e = '',
                      i = t.getFootageData();
                    function r(t) {
                      if (i[t])
                        return (
                          (e = t), 'object' === _typeof$2((i = i[t])) ? r : i
                        );
                      var a = t.indexOf(e);
                      if (-1 !== a) {
                        var n = parseInt(t.substr(a + e.length), 10);
                        return 'object' === _typeof$2((i = i[n])) ? r : i;
                      }
                      return '';
                    }
                    return function () {
                      return (e = ''), (i = t.getFootageData()), r;
                    };
                  })(t)),
                  e
                );
              };
              return function (e) {
                function i(t) {
                  return 'Data' === t ? i.dataInterface : null;
                }
                return (i._name = 'Data'), (i.dataInterface = t(e)), i;
              };
            })();
            function FootageElement(t, e, i) {
              this.initFrame(),
                this.initRenderable(),
                (this.assetData = e.getAssetData(t.refId)),
                (this.footageData = e.imageLoader.getAsset(this.assetData)),
                this.initBaseData(t, e, i);
            }
            function AudioElement(t, e, i) {
              this.initFrame(),
                this.initRenderable(),
                (this.assetData = e.getAssetData(t.refId)),
                this.initBaseData(t, e, i),
                (this._isPlaying = !1),
                (this._canPlay = !1);
              var r = this.globalData.getAssetsPath(this.assetData);
              (this.audio = this.globalData.audioController.createAudio(r)),
                (this._currentTime = 0),
                this.globalData.audioController.addAudio(this),
                (this._volumeMultiplier = 1),
                (this._volume = 1),
                (this._previousVolume = null),
                (this.tm = t.tm
                  ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
                  : { _placeholder: !0 }),
                (this.lv = PropertyFactory.getProp(
                  this,
                  t.au && t.au.lv ? t.au.lv : { k: [100] },
                  1,
                  0.01,
                  this
                ));
            }
            function BaseRenderer() {}
            function TransformElement() {}
            function MaskElement(t, e, i) {
              (this.data = t),
                (this.element = e),
                (this.globalData = i),
                (this.storedData = []),
                (this.masksProperties = this.data.masksProperties || []),
                (this.maskElement = null);
              var r,
                a,
                n = this.globalData.defs,
                s = this.masksProperties ? this.masksProperties.length : 0;
              (this.viewData = createSizedArray(s)), (this.solidPath = '');
              var o,
                l,
                p,
                h,
                c,
                u,
                f = this.masksProperties,
                m = 0,
                d = [],
                x = createElementID(),
                y = 'clipPath',
                k = 'clip-path';
              for (r = 0; r < s; r += 1)
                if (
                  ((('a' !== f[r].mode && 'n' !== f[r].mode) ||
                    f[r].inv ||
                    100 !== f[r].o.k ||
                    f[r].o.x) &&
                    ((y = 'mask'), (k = 'mask')),
                  ('s' !== f[r].mode && 'i' !== f[r].mode) || 0 !== m
                    ? (p = null)
                    : ((p = createNS('rect')).setAttribute('fill', '#ffffff'),
                      p.setAttribute('width', this.element.comp.data.w || 0),
                      p.setAttribute('height', this.element.comp.data.h || 0),
                      d.push(p)),
                  (a = createNS('path')),
                  'n' === f[r].mode)
                )
                  (this.viewData[r] = {
                    op: PropertyFactory.getProp(
                      this.element,
                      f[r].o,
                      0,
                      0.01,
                      this.element
                    ),
                    prop: ShapePropertyFactory.getShapeProp(
                      this.element,
                      f[r],
                      3
                    ),
                    elem: a,
                    lastPath: '',
                  }),
                    n.appendChild(a);
                else {
                  var g;
                  if (
                    ((m += 1),
                    a.setAttribute(
                      'fill',
                      's' === f[r].mode ? '#000000' : '#ffffff'
                    ),
                    a.setAttribute('clip-rule', 'nonzero'),
                    0 !== f[r].x.k
                      ? ((y = 'mask'),
                        (k = 'mask'),
                        (u = PropertyFactory.getProp(
                          this.element,
                          f[r].x,
                          0,
                          null,
                          this.element
                        )),
                        (g = createElementID()),
                        (h = createNS('filter')).setAttribute('id', g),
                        (c = createNS('feMorphology')).setAttribute(
                          'operator',
                          'erode'
                        ),
                        c.setAttribute('in', 'SourceGraphic'),
                        c.setAttribute('radius', '0'),
                        h.appendChild(c),
                        n.appendChild(h),
                        a.setAttribute(
                          'stroke',
                          's' === f[r].mode ? '#000000' : '#ffffff'
                        ))
                      : ((c = null), (u = null)),
                    (this.storedData[r] = {
                      elem: a,
                      x: u,
                      expan: c,
                      lastPath: '',
                      lastOperator: '',
                      filterId: g,
                      lastRadius: 0,
                    }),
                    'i' === f[r].mode)
                  ) {
                    l = d.length;
                    var v = createNS('g');
                    for (o = 0; o < l; o += 1) v.appendChild(d[o]);
                    var _ = createNS('mask');
                    _.setAttribute('mask-type', 'alpha'),
                      _.setAttribute('id', x + '_' + m),
                      _.appendChild(a),
                      n.appendChild(_),
                      v.setAttribute(
                        'mask',
                        'url(' + getLocationHref() + '#' + x + '_' + m + ')'
                      ),
                      (d.length = 0),
                      d.push(v);
                  } else d.push(a);
                  f[r].inv &&
                    !this.solidPath &&
                    (this.solidPath = this.createLayerSolidPath()),
                    (this.viewData[r] = {
                      elem: a,
                      lastPath: '',
                      op: PropertyFactory.getProp(
                        this.element,
                        f[r].o,
                        0,
                        0.01,
                        this.element
                      ),
                      prop: ShapePropertyFactory.getShapeProp(
                        this.element,
                        f[r],
                        3
                      ),
                      invRect: p,
                    }),
                    this.viewData[r].prop.k ||
                      this.drawPath(
                        f[r],
                        this.viewData[r].prop.v,
                        this.viewData[r]
                      );
                }
              for (
                this.maskElement = createNS(y), s = d.length, r = 0;
                r < s;
                r += 1
              )
                this.maskElement.appendChild(d[r]);
              m > 0 &&
                (this.maskElement.setAttribute('id', x),
                this.element.maskedElement.setAttribute(
                  k,
                  'url(' + getLocationHref() + '#' + x + ')'
                ),
                n.appendChild(this.maskElement)),
                this.viewData.length &&
                  this.element.addRenderableComponent(this);
            }
            (FootageElement.prototype.prepareFrame = function () {}),
              extendPrototype(
                [RenderableElement, BaseElement, FrameElement],
                FootageElement
              ),
              (FootageElement.prototype.getBaseElement = function () {
                return null;
              }),
              (FootageElement.prototype.renderFrame = function () {}),
              (FootageElement.prototype.destroy = function () {}),
              (FootageElement.prototype.initExpressions = function () {
                this.layerInterface = FootageInterface(this);
              }),
              (FootageElement.prototype.getFootageData = function () {
                return this.footageData;
              }),
              (AudioElement.prototype.prepareFrame = function (t) {
                if (
                  (this.prepareRenderableFrame(t, !0),
                  this.prepareProperties(t, !0),
                  this.tm._placeholder)
                )
                  this._currentTime = t / this.data.sr;
                else {
                  var e = this.tm.v;
                  this._currentTime = e;
                }
                this._volume = this.lv.v[0];
                var i = this._volume * this._volumeMultiplier;
                this._previousVolume !== i &&
                  ((this._previousVolume = i), this.audio.volume(i));
              }),
              extendPrototype(
                [RenderableElement, BaseElement, FrameElement],
                AudioElement
              ),
              (AudioElement.prototype.renderFrame = function () {
                this.isInRange &&
                  this._canPlay &&
                  (this._isPlaying
                    ? (!this.audio.playing() ||
                        Math.abs(
                          this._currentTime / this.globalData.frameRate -
                            this.audio.seek()
                        ) > 0.1) &&
                      this.audio.seek(
                        this._currentTime / this.globalData.frameRate
                      )
                    : (this.audio.play(),
                      this.audio.seek(
                        this._currentTime / this.globalData.frameRate
                      ),
                      (this._isPlaying = !0)));
              }),
              (AudioElement.prototype.show = function () {}),
              (AudioElement.prototype.hide = function () {
                this.audio.pause(), (this._isPlaying = !1);
              }),
              (AudioElement.prototype.pause = function () {
                this.audio.pause(),
                  (this._isPlaying = !1),
                  (this._canPlay = !1);
              }),
              (AudioElement.prototype.resume = function () {
                this._canPlay = !0;
              }),
              (AudioElement.prototype.setRate = function (t) {
                this.audio.rate(t);
              }),
              (AudioElement.prototype.volume = function (t) {
                (this._volumeMultiplier = t),
                  (this._previousVolume = t * this._volume),
                  this.audio.volume(this._previousVolume);
              }),
              (AudioElement.prototype.getBaseElement = function () {
                return null;
              }),
              (AudioElement.prototype.destroy = function () {}),
              (AudioElement.prototype.sourceRectAtTime = function () {}),
              (AudioElement.prototype.initExpressions = function () {}),
              (BaseRenderer.prototype.checkLayers = function (t) {
                var e,
                  i,
                  r = this.layers.length;
                for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1)
                  this.elements[e] ||
                    ((i = this.layers[e]).ip - i.st <= t - this.layers[e].st &&
                      i.op - i.st > t - this.layers[e].st &&
                      this.buildItem(e)),
                    (this.completeLayers =
                      !!this.elements[e] && this.completeLayers);
                this.checkPendingElements();
              }),
              (BaseRenderer.prototype.createItem = function (t) {
                switch (t.ty) {
                  case 2:
                    return this.createImage(t);
                  case 0:
                    return this.createComp(t);
                  case 1:
                    return this.createSolid(t);
                  case 3:
                  default:
                    return this.createNull(t);
                  case 4:
                    return this.createShape(t);
                  case 5:
                    return this.createText(t);
                  case 6:
                    return this.createAudio(t);
                  case 13:
                    return this.createCamera(t);
                  case 15:
                    return this.createFootage(t);
                }
              }),
              (BaseRenderer.prototype.createCamera = function () {
                throw new Error(
                  "You're using a 3d camera. Try the html renderer."
                );
              }),
              (BaseRenderer.prototype.createAudio = function (t) {
                return new AudioElement(t, this.globalData, this);
              }),
              (BaseRenderer.prototype.createFootage = function (t) {
                return new FootageElement(t, this.globalData, this);
              }),
              (BaseRenderer.prototype.buildAllItems = function () {
                var t,
                  e = this.layers.length;
                for (t = 0; t < e; t += 1) this.buildItem(t);
                this.checkPendingElements();
              }),
              (BaseRenderer.prototype.includeLayers = function (t) {
                var e;
                this.completeLayers = !1;
                var i,
                  r = t.length,
                  a = this.layers.length;
                for (e = 0; e < r; e += 1)
                  for (i = 0; i < a; ) {
                    if (this.layers[i].id === t[e].id) {
                      this.layers[i] = t[e];
                      break;
                    }
                    i += 1;
                  }
              }),
              (BaseRenderer.prototype.setProjectInterface = function (t) {
                this.globalData.projectInterface = t;
              }),
              (BaseRenderer.prototype.initItems = function () {
                this.globalData.progressiveLoad || this.buildAllItems();
              }),
              (BaseRenderer.prototype.buildElementParenting = function (
                t,
                e,
                i
              ) {
                for (
                  var r = this.elements, a = this.layers, n = 0, s = a.length;
                  n < s;

                )
                  a[n].ind == e &&
                    (r[n] && !0 !== r[n]
                      ? (i.push(r[n]),
                        r[n].setAsParent(),
                        void 0 !== a[n].parent
                          ? this.buildElementParenting(t, a[n].parent, i)
                          : t.setHierarchy(i))
                      : (this.buildItem(n), this.addPendingElement(t))),
                    (n += 1);
              }),
              (BaseRenderer.prototype.addPendingElement = function (t) {
                this.pendingElements.push(t);
              }),
              (BaseRenderer.prototype.searchExtraCompositions = function (t) {
                var e,
                  i = t.length;
                for (e = 0; e < i; e += 1)
                  if (t[e].xt) {
                    var r = this.createComp(t[e]);
                    r.initExpressions(),
                      this.globalData.projectInterface.registerComposition(r);
                  }
              }),
              (BaseRenderer.prototype.getElementByPath = function (t) {
                var e,
                  i = t.shift();
                if ('number' === typeof i) e = this.elements[i];
                else {
                  var r,
                    a = this.elements.length;
                  for (r = 0; r < a; r += 1)
                    if (this.elements[r].data.nm === i) {
                      e = this.elements[r];
                      break;
                    }
                }
                return 0 === t.length ? e : e.getElementByPath(t);
              }),
              (BaseRenderer.prototype.setupGlobalData = function (t, e) {
                (this.globalData.fontManager = new FontManager()),
                  this.globalData.fontManager.addChars(t.chars),
                  this.globalData.fontManager.addFonts(t.fonts, e),
                  (this.globalData.getAssetData =
                    this.animationItem.getAssetData.bind(this.animationItem)),
                  (this.globalData.getAssetsPath =
                    this.animationItem.getAssetsPath.bind(this.animationItem)),
                  (this.globalData.imageLoader =
                    this.animationItem.imagePreloader),
                  (this.globalData.audioController =
                    this.animationItem.audioController),
                  (this.globalData.frameId = 0),
                  (this.globalData.frameRate = t.fr),
                  (this.globalData.nm = t.nm),
                  (this.globalData.compSize = { w: t.w, h: t.h });
              }),
              (TransformElement.prototype = {
                initTransform: function () {
                  (this.finalTransform = {
                    mProp: this.data.ks
                      ? TransformPropertyFactory.getTransformProperty(
                          this,
                          this.data.ks,
                          this
                        )
                      : { o: 0 },
                    _matMdf: !1,
                    _opMdf: !1,
                    mat: new Matrix(),
                  }),
                    this.data.ao &&
                      (this.finalTransform.mProp.autoOriented = !0),
                    this.data.ty;
                },
                renderTransform: function () {
                  if (
                    ((this.finalTransform._opMdf =
                      this.finalTransform.mProp.o._mdf || this._isFirstFrame),
                    (this.finalTransform._matMdf =
                      this.finalTransform.mProp._mdf || this._isFirstFrame),
                    this.hierarchy)
                  ) {
                    var t,
                      e = this.finalTransform.mat,
                      i = 0,
                      r = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                      for (; i < r; ) {
                        if (this.hierarchy[i].finalTransform.mProp._mdf) {
                          this.finalTransform._matMdf = !0;
                          break;
                        }
                        i += 1;
                      }
                    if (this.finalTransform._matMdf)
                      for (
                        t = this.finalTransform.mProp.v.props,
                          e.cloneFromProps(t),
                          i = 0;
                        i < r;
                        i += 1
                      )
                        (t = this.hierarchy[i].finalTransform.mProp.v.props),
                          e.transform(
                            t[0],
                            t[1],
                            t[2],
                            t[3],
                            t[4],
                            t[5],
                            t[6],
                            t[7],
                            t[8],
                            t[9],
                            t[10],
                            t[11],
                            t[12],
                            t[13],
                            t[14],
                            t[15]
                          );
                  }
                },
                globalToLocal: function (t) {
                  var e = [];
                  e.push(this.finalTransform);
                  for (var i, r = !0, a = this.comp; r; )
                    a.finalTransform
                      ? (a.data.hasMask && e.splice(0, 0, a.finalTransform),
                        (a = a.comp))
                      : (r = !1);
                  var n,
                    s = e.length;
                  for (i = 0; i < s; i += 1)
                    (n = e[i].mat.applyToPointArray(0, 0, 0)),
                      (t = [t[0] - n[0], t[1] - n[1], 0]);
                  return t;
                },
                mHelper: new Matrix(),
              }),
              (MaskElement.prototype.getMaskProperty = function (t) {
                return this.viewData[t].prop;
              }),
              (MaskElement.prototype.renderFrame = function (t) {
                var e,
                  i = this.element.finalTransform.mat,
                  r = this.masksProperties.length;
                for (e = 0; e < r; e += 1)
                  if (
                    ((this.viewData[e].prop._mdf || t) &&
                      this.drawPath(
                        this.masksProperties[e],
                        this.viewData[e].prop.v,
                        this.viewData[e]
                      ),
                    (this.viewData[e].op._mdf || t) &&
                      this.viewData[e].elem.setAttribute(
                        'fill-opacity',
                        this.viewData[e].op.v
                      ),
                    'n' !== this.masksProperties[e].mode &&
                      (this.viewData[e].invRect &&
                        (this.element.finalTransform.mProp._mdf || t) &&
                        this.viewData[e].invRect.setAttribute(
                          'transform',
                          i.getInverseMatrix().to2dCSS()
                        ),
                      this.storedData[e].x && (this.storedData[e].x._mdf || t)))
                  ) {
                    var a = this.storedData[e].expan;
                    this.storedData[e].x.v < 0
                      ? ('erode' !== this.storedData[e].lastOperator &&
                          ((this.storedData[e].lastOperator = 'erode'),
                          this.storedData[e].elem.setAttribute(
                            'filter',
                            'url(' +
                              getLocationHref() +
                              '#' +
                              this.storedData[e].filterId +
                              ')'
                          )),
                        a.setAttribute('radius', -this.storedData[e].x.v))
                      : ('dilate' !== this.storedData[e].lastOperator &&
                          ((this.storedData[e].lastOperator = 'dilate'),
                          this.storedData[e].elem.setAttribute('filter', null)),
                        this.storedData[e].elem.setAttribute(
                          'stroke-width',
                          2 * this.storedData[e].x.v
                        ));
                  }
              }),
              (MaskElement.prototype.getMaskelement = function () {
                return this.maskElement;
              }),
              (MaskElement.prototype.createLayerSolidPath = function () {
                var t = 'M0,0 ';
                return (
                  (t += ' h' + this.globalData.compSize.w),
                  (t += ' v' + this.globalData.compSize.h),
                  (t += ' h-' + this.globalData.compSize.w),
                  (t += ' v-' + this.globalData.compSize.h + ' ')
                );
              }),
              (MaskElement.prototype.drawPath = function (t, e, i) {
                var r,
                  a,
                  n = ' M' + e.v[0][0] + ',' + e.v[0][1];
                for (a = e._length, r = 1; r < a; r += 1)
                  n +=
                    ' C' +
                    e.o[r - 1][0] +
                    ',' +
                    e.o[r - 1][1] +
                    ' ' +
                    e.i[r][0] +
                    ',' +
                    e.i[r][1] +
                    ' ' +
                    e.v[r][0] +
                    ',' +
                    e.v[r][1];
                if (
                  (e.c &&
                    a > 1 &&
                    (n +=
                      ' C' +
                      e.o[r - 1][0] +
                      ',' +
                      e.o[r - 1][1] +
                      ' ' +
                      e.i[0][0] +
                      ',' +
                      e.i[0][1] +
                      ' ' +
                      e.v[0][0] +
                      ',' +
                      e.v[0][1]),
                  i.lastPath !== n)
                ) {
                  var s = '';
                  i.elem &&
                    (e.c && (s = t.inv ? this.solidPath + n : n),
                    i.elem.setAttribute('d', s)),
                    (i.lastPath = n);
                }
              }),
              (MaskElement.prototype.destroy = function () {
                (this.element = null),
                  (this.globalData = null),
                  (this.maskElement = null),
                  (this.data = null),
                  (this.masksProperties = null);
              });
            var filtersFactory = (function () {
                var t = {
                  createFilter: function (t, e) {
                    var i = createNS('filter');
                    return (
                      i.setAttribute('id', t),
                      !0 !== e &&
                        (i.setAttribute('filterUnits', 'objectBoundingBox'),
                        i.setAttribute('x', '0%'),
                        i.setAttribute('y', '0%'),
                        i.setAttribute('width', '100%'),
                        i.setAttribute('height', '100%')),
                      i
                    );
                  },
                  createAlphaToLuminanceFilter: function () {
                    var t = createNS('feColorMatrix');
                    return (
                      t.setAttribute('type', 'matrix'),
                      t.setAttribute('color-interpolation-filters', 'sRGB'),
                      t.setAttribute(
                        'values',
                        '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1'
                      ),
                      t
                    );
                  },
                };
                return t;
              })(),
              featureSupport = (function () {
                var t = { maskType: !0 };
                return (
                  (/MSIE 10/i.test(navigator.userAgent) ||
                    /MSIE 9/i.test(navigator.userAgent) ||
                    /rv:11.0/i.test(navigator.userAgent) ||
                    /Edge\/\d./i.test(navigator.userAgent)) &&
                    (t.maskType = !1),
                  t
                );
              })(),
              registeredEffects = {},
              idPrefix = 'filter_result_';
            function SVGEffects(t) {
              var e,
                i,
                r = 'SourceGraphic',
                a = t.data.ef ? t.data.ef.length : 0,
                n = createElementID(),
                s = filtersFactory.createFilter(n, !0),
                o = 0;
              for (this.filters = [], e = 0; e < a; e += 1) {
                i = null;
                var l = t.data.ef[e].ty;
                registeredEffects[l] &&
                  ((i = new (0, registeredEffects[l].effect)(
                    s,
                    t.effectsManager.effectElements[e],
                    t,
                    idPrefix + o,
                    r
                  )),
                  (r = idPrefix + o),
                  registeredEffects[l].countsAsEffect && (o += 1)),
                  i && this.filters.push(i);
              }
              o &&
                (t.globalData.defs.appendChild(s),
                t.layerElement.setAttribute(
                  'filter',
                  'url(' + getLocationHref() + '#' + n + ')'
                )),
                this.filters.length && t.addRenderableComponent(this);
            }
            function registerEffect(t, e, i) {
              registeredEffects[t] = { effect: e, countsAsEffect: i };
            }
            function SVGBaseElement() {}
            function HierarchyElement() {}
            function RenderableDOMElement() {}
            function IImageElement(t, e, i) {
              (this.assetData = e.getAssetData(t.refId)),
                this.initElement(t, e, i),
                (this.sourceRect = {
                  top: 0,
                  left: 0,
                  width: this.assetData.w,
                  height: this.assetData.h,
                });
            }
            function ProcessedElement(t, e) {
              (this.elem = t), (this.pos = e);
            }
            function IShapeElement() {}
            (SVGEffects.prototype.renderFrame = function (t) {
              var e,
                i = this.filters.length;
              for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
            }),
              (SVGBaseElement.prototype = {
                initRendererElement: function () {
                  this.layerElement = createNS('g');
                },
                createContainerElements: function () {
                  (this.matteElement = createNS('g')),
                    (this.transformedElement = this.layerElement),
                    (this.maskedElement = this.layerElement),
                    (this._sizeChanged = !1);
                  var t,
                    e,
                    i,
                    r = null;
                  if (this.data.td) {
                    if (3 == this.data.td || 1 == this.data.td) {
                      var a = createNS('mask');
                      a.setAttribute('id', this.layerId),
                        a.setAttribute(
                          'mask-type',
                          3 == this.data.td ? 'luminance' : 'alpha'
                        ),
                        a.appendChild(this.layerElement),
                        (r = a),
                        this.globalData.defs.appendChild(a),
                        featureSupport.maskType ||
                          1 != this.data.td ||
                          (a.setAttribute('mask-type', 'luminance'),
                          (t = createElementID()),
                          (e = filtersFactory.createFilter(t)),
                          this.globalData.defs.appendChild(e),
                          e.appendChild(
                            filtersFactory.createAlphaToLuminanceFilter()
                          ),
                          (i = createNS('g')).appendChild(this.layerElement),
                          (r = i),
                          a.appendChild(i),
                          i.setAttribute(
                            'filter',
                            'url(' + getLocationHref() + '#' + t + ')'
                          ));
                    } else if (2 == this.data.td) {
                      var n = createNS('mask');
                      n.setAttribute('id', this.layerId),
                        n.setAttribute('mask-type', 'alpha');
                      var s = createNS('g');
                      n.appendChild(s),
                        (t = createElementID()),
                        (e = filtersFactory.createFilter(t));
                      var o = createNS('feComponentTransfer');
                      o.setAttribute('in', 'SourceGraphic'), e.appendChild(o);
                      var l = createNS('feFuncA');
                      l.setAttribute('type', 'table'),
                        l.setAttribute('tableValues', '1.0 0.0'),
                        o.appendChild(l),
                        this.globalData.defs.appendChild(e);
                      var p = createNS('rect');
                      p.setAttribute('width', this.comp.data.w),
                        p.setAttribute('height', this.comp.data.h),
                        p.setAttribute('x', '0'),
                        p.setAttribute('y', '0'),
                        p.setAttribute('fill', '#ffffff'),
                        p.setAttribute('opacity', '0'),
                        s.setAttribute(
                          'filter',
                          'url(' + getLocationHref() + '#' + t + ')'
                        ),
                        s.appendChild(p),
                        s.appendChild(this.layerElement),
                        (r = s),
                        featureSupport.maskType ||
                          (n.setAttribute('mask-type', 'luminance'),
                          e.appendChild(
                            filtersFactory.createAlphaToLuminanceFilter()
                          ),
                          (i = createNS('g')),
                          s.appendChild(p),
                          i.appendChild(this.layerElement),
                          (r = i),
                          s.appendChild(i)),
                        this.globalData.defs.appendChild(n);
                    }
                  } else
                    this.data.tt
                      ? (this.matteElement.appendChild(this.layerElement),
                        (r = this.matteElement),
                        (this.baseElement = this.matteElement))
                      : (this.baseElement = this.layerElement);
                  if (
                    (this.data.ln &&
                      this.layerElement.setAttribute('id', this.data.ln),
                    this.data.cl &&
                      this.layerElement.setAttribute('class', this.data.cl),
                    0 === this.data.ty && !this.data.hd)
                  ) {
                    var h = createNS('clipPath'),
                      c = createNS('path');
                    c.setAttribute(
                      'd',
                      'M0,0 L' +
                        this.data.w +
                        ',0 L' +
                        this.data.w +
                        ',' +
                        this.data.h +
                        ' L0,' +
                        this.data.h +
                        'z'
                    );
                    var u = createElementID();
                    if (
                      (h.setAttribute('id', u),
                      h.appendChild(c),
                      this.globalData.defs.appendChild(h),
                      this.checkMasks())
                    ) {
                      var f = createNS('g');
                      f.setAttribute(
                        'clip-path',
                        'url(' + getLocationHref() + '#' + u + ')'
                      ),
                        f.appendChild(this.layerElement),
                        (this.transformedElement = f),
                        r
                          ? r.appendChild(this.transformedElement)
                          : (this.baseElement = this.transformedElement);
                    } else
                      this.layerElement.setAttribute(
                        'clip-path',
                        'url(' + getLocationHref() + '#' + u + ')'
                      );
                  }
                  0 !== this.data.bm && this.setBlendMode();
                },
                renderElement: function () {
                  this.finalTransform._matMdf &&
                    this.transformedElement.setAttribute(
                      'transform',
                      this.finalTransform.mat.to2dCSS()
                    ),
                    this.finalTransform._opMdf &&
                      this.transformedElement.setAttribute(
                        'opacity',
                        this.finalTransform.mProp.o.v
                      );
                },
                destroyBaseElement: function () {
                  (this.layerElement = null),
                    (this.matteElement = null),
                    this.maskManager.destroy();
                },
                getBaseElement: function () {
                  return this.data.hd ? null : this.baseElement;
                },
                createRenderableComponents: function () {
                  (this.maskManager = new MaskElement(
                    this.data,
                    this,
                    this.globalData
                  )),
                    (this.renderableEffectsManager = new SVGEffects(this));
                },
                setMatte: function (t) {
                  this.matteElement &&
                    this.matteElement.setAttribute(
                      'mask',
                      'url(' + getLocationHref() + '#' + t + ')'
                    );
                },
              }),
              (HierarchyElement.prototype = {
                initHierarchy: function () {
                  (this.hierarchy = []),
                    (this._isParent = !1),
                    this.checkParenting();
                },
                setHierarchy: function (t) {
                  this.hierarchy = t;
                },
                setAsParent: function () {
                  this._isParent = !0;
                },
                checkParenting: function () {
                  void 0 !== this.data.parent &&
                    this.comp.buildElementParenting(this, this.data.parent, []);
                },
              }),
              extendPrototype(
                [
                  RenderableElement,
                  createProxyFunction({
                    initElement: function (t, e, i) {
                      this.initFrame(),
                        this.initBaseData(t, e, i),
                        this.initTransform(t, e, i),
                        this.initHierarchy(),
                        this.initRenderable(),
                        this.initRendererElement(),
                        this.createContainerElements(),
                        this.createRenderableComponents(),
                        this.createContent(),
                        this.hide();
                    },
                    hide: function () {
                      this.hidden ||
                        (this.isInRange && !this.isTransparent) ||
                        (((
                          this.baseElement || this.layerElement
                        ).style.display = 'none'),
                        (this.hidden = !0));
                    },
                    show: function () {
                      this.isInRange &&
                        !this.isTransparent &&
                        (this.data.hd ||
                          ((
                            this.baseElement || this.layerElement
                          ).style.display = 'block'),
                        (this.hidden = !1),
                        (this._isFirstFrame = !0));
                    },
                    renderFrame: function () {
                      this.data.hd ||
                        this.hidden ||
                        (this.renderTransform(),
                        this.renderRenderable(),
                        this.renderElement(),
                        this.renderInnerContent(),
                        this._isFirstFrame && (this._isFirstFrame = !1));
                    },
                    renderInnerContent: function () {},
                    prepareFrame: function (t) {
                      (this._mdf = !1),
                        this.prepareRenderableFrame(t),
                        this.prepareProperties(t, this.isInRange),
                        this.checkTransparency();
                    },
                    destroy: function () {
                      (this.innerElem = null), this.destroyBaseElement();
                    },
                  }),
                ],
                RenderableDOMElement
              ),
              extendPrototype(
                [
                  BaseElement,
                  TransformElement,
                  SVGBaseElement,
                  HierarchyElement,
                  FrameElement,
                  RenderableDOMElement,
                ],
                IImageElement
              ),
              (IImageElement.prototype.createContent = function () {
                var t = this.globalData.getAssetsPath(this.assetData);
                (this.innerElem = createNS('image')),
                  this.innerElem.setAttribute('width', this.assetData.w + 'px'),
                  this.innerElem.setAttribute(
                    'height',
                    this.assetData.h + 'px'
                  ),
                  this.innerElem.setAttribute(
                    'preserveAspectRatio',
                    this.assetData.pr ||
                      this.globalData.renderConfig.imagePreserveAspectRatio
                  ),
                  this.innerElem.setAttributeNS(
                    'http://www.w3.org/1999/xlink',
                    'href',
                    t
                  ),
                  this.layerElement.appendChild(this.innerElem);
              }),
              (IImageElement.prototype.sourceRectAtTime = function () {
                return this.sourceRect;
              }),
              (IShapeElement.prototype = {
                addShapeToModifiers: function (t) {
                  var e,
                    i = this.shapeModifiers.length;
                  for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t);
                },
                isShapeInAnimatedModifiers: function (t) {
                  for (var e = this.shapeModifiers.length; 0 < e; )
                    if (this.shapeModifiers[0].isAnimatedWithShape(t))
                      return !0;
                  return !1;
                },
                renderModifiers: function () {
                  if (this.shapeModifiers.length) {
                    var t,
                      e = this.shapes.length;
                    for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                    for (
                      t = (e = this.shapeModifiers.length) - 1;
                      t >= 0 &&
                      !this.shapeModifiers[t].processShapes(this._isFirstFrame);
                      t -= 1
                    );
                  }
                },
                searchProcessedElement: function (t) {
                  for (
                    var e = this.processedElements, i = 0, r = e.length;
                    i < r;

                  ) {
                    if (e[i].elem === t) return e[i].pos;
                    i += 1;
                  }
                  return 0;
                },
                addProcessedElement: function (t, e) {
                  for (var i = this.processedElements, r = i.length; r; )
                    if (i[(r -= 1)].elem === t) return void (i[r].pos = e);
                  i.push(new ProcessedElement(t, e));
                },
                prepareFrame: function (t) {
                  this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange);
                },
              });
            var lineCapEnum = { 1: 'butt', 2: 'round', 3: 'square' },
              lineJoinEnum = { 1: 'miter', 2: 'round', 3: 'bevel' };
            function SVGShapeData(t, e, i) {
              (this.caches = []),
                (this.styles = []),
                (this.transformers = t),
                (this.lStr = ''),
                (this.sh = i),
                (this.lvl = e),
                (this._isAnimated = !!i.k);
              for (var r = 0, a = t.length; r < a; ) {
                if (t[r].mProps.dynamicProperties.length) {
                  this._isAnimated = !0;
                  break;
                }
                r += 1;
              }
            }
            function SVGStyleData(t, e) {
              (this.data = t),
                (this.type = t.ty),
                (this.d = ''),
                (this.lvl = e),
                (this._mdf = !1),
                (this.closed = !0 === t.hd),
                (this.pElem = createNS('path')),
                (this.msElem = null);
            }
            function DashProperty(t, e, i, r) {
              var a;
              (this.elem = t),
                (this.frameId = -1),
                (this.dataProps = createSizedArray(e.length)),
                (this.renderer = i),
                (this.k = !1),
                (this.dashStr = ''),
                (this.dashArray = createTypedArray(
                  'float32',
                  e.length ? e.length - 1 : 0
                )),
                (this.dashoffset = createTypedArray('float32', 1)),
                this.initDynamicPropertyContainer(r);
              var n,
                s = e.length || 0;
              for (a = 0; a < s; a += 1)
                (n = PropertyFactory.getProp(t, e[a].v, 0, 0, this)),
                  (this.k = n.k || this.k),
                  (this.dataProps[a] = { n: e[a].n, p: n });
              this.k || this.getValue(!0), (this._isAnimated = this.k);
            }
            function SVGStrokeStyleData(t, e, i) {
              this.initDynamicPropertyContainer(t),
                (this.getValue = this.iterateDynamicProperties),
                (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
                (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
                (this.d = new DashProperty(t, e.d || {}, 'svg', this)),
                (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
                (this.style = i),
                (this._isAnimated = !!this._isAnimated);
            }
            function SVGFillStyleData(t, e, i) {
              this.initDynamicPropertyContainer(t),
                (this.getValue = this.iterateDynamicProperties),
                (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
                (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
                (this.style = i);
            }
            function SVGNoStyleData(t, e, i) {
              this.initDynamicPropertyContainer(t),
                (this.getValue = this.iterateDynamicProperties),
                (this.style = i);
            }
            function GradientProperty(t, e, i) {
              (this.data = e), (this.c = createTypedArray('uint8c', 4 * e.p));
              var r = e.k.k[0].s
                ? e.k.k[0].s.length - 4 * e.p
                : e.k.k.length - 4 * e.p;
              (this.o = createTypedArray('float32', r)),
                (this._cmdf = !1),
                (this._omdf = !1),
                (this._collapsable = this.checkCollapsable()),
                (this._hasOpacity = r),
                this.initDynamicPropertyContainer(i),
                (this.prop = PropertyFactory.getProp(t, e.k, 1, null, this)),
                (this.k = this.prop.k),
                this.getValue(!0);
            }
            function SVGGradientFillStyleData(t, e, i) {
              this.initDynamicPropertyContainer(t),
                (this.getValue = this.iterateDynamicProperties),
                this.initGradientData(t, e, i);
            }
            function SVGGradientStrokeStyleData(t, e, i) {
              this.initDynamicPropertyContainer(t),
                (this.getValue = this.iterateDynamicProperties),
                (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
                (this.d = new DashProperty(t, e.d || {}, 'svg', this)),
                this.initGradientData(t, e, i),
                (this._isAnimated = !!this._isAnimated);
            }
            function ShapeGroupData() {
              (this.it = []),
                (this.prevViewData = []),
                (this.gr = createNS('g'));
            }
            function SVGTransformData(t, e, i) {
              (this.transform = { mProps: t, op: e, container: i }),
                (this.elements = []),
                (this._isAnimated =
                  this.transform.mProps.dynamicProperties.length ||
                  this.transform.op.effectsSequence.length);
            }
            (SVGShapeData.prototype.setAsAnimated = function () {
              this._isAnimated = !0;
            }),
              (SVGStyleData.prototype.reset = function () {
                (this.d = ''), (this._mdf = !1);
              }),
              (DashProperty.prototype.getValue = function (t) {
                if (
                  (this.elem.globalData.frameId !== this.frameId || t) &&
                  ((this.frameId = this.elem.globalData.frameId),
                  this.iterateDynamicProperties(),
                  (this._mdf = this._mdf || t),
                  this._mdf)
                ) {
                  var e = 0,
                    i = this.dataProps.length;
                  for (
                    'svg' === this.renderer && (this.dashStr = ''), e = 0;
                    e < i;
                    e += 1
                  )
                    'o' !== this.dataProps[e].n
                      ? 'svg' === this.renderer
                        ? (this.dashStr += ' ' + this.dataProps[e].p.v)
                        : (this.dashArray[e] = this.dataProps[e].p.v)
                      : (this.dashoffset[0] = this.dataProps[e].p.v);
                }
              }),
              extendPrototype([DynamicPropertyContainer], DashProperty),
              extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
              extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
              extendPrototype([DynamicPropertyContainer], SVGNoStyleData),
              (GradientProperty.prototype.comparePoints = function (t, e) {
                for (var i = 0, r = this.o.length / 2; i < r; ) {
                  if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > 0.01) return !1;
                  i += 1;
                }
                return !0;
              }),
              (GradientProperty.prototype.checkCollapsable = function () {
                if (this.o.length / 2 !== this.c.length / 4) return !1;
                if (this.data.k.k[0].s)
                  for (var t = 0, e = this.data.k.k.length; t < e; ) {
                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                      return !1;
                    t += 1;
                  }
                else if (!this.comparePoints(this.data.k.k, this.data.p))
                  return !1;
                return !0;
              }),
              (GradientProperty.prototype.getValue = function (t) {
                if (
                  (this.prop.getValue(),
                  (this._mdf = !1),
                  (this._cmdf = !1),
                  (this._omdf = !1),
                  this.prop._mdf || t)
                ) {
                  var e,
                    i,
                    r,
                    a = 4 * this.data.p;
                  for (e = 0; e < a; e += 1)
                    (i = e % 4 === 0 ? 100 : 255),
                      (r = Math.round(this.prop.v[e] * i)),
                      this.c[e] !== r && ((this.c[e] = r), (this._cmdf = !t));
                  if (this.o.length)
                    for (
                      a = this.prop.v.length, e = 4 * this.data.p;
                      e < a;
                      e += 1
                    )
                      (i = e % 2 === 0 ? 100 : 1),
                        (r =
                          e % 2 === 0
                            ? Math.round(100 * this.prop.v[e])
                            : this.prop.v[e]),
                        this.o[e - 4 * this.data.p] !== r &&
                          ((this.o[e - 4 * this.data.p] = r),
                          (this._omdf = !t));
                  this._mdf = !t;
                }
              }),
              extendPrototype([DynamicPropertyContainer], GradientProperty),
              (SVGGradientFillStyleData.prototype.initGradientData = function (
                t,
                e,
                i
              ) {
                (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
                  (this.s = PropertyFactory.getProp(t, e.s, 1, null, this)),
                  (this.e = PropertyFactory.getProp(t, e.e, 1, null, this)),
                  (this.h = PropertyFactory.getProp(
                    t,
                    e.h || { k: 0 },
                    0,
                    0.01,
                    this
                  )),
                  (this.a = PropertyFactory.getProp(
                    t,
                    e.a || { k: 0 },
                    0,
                    degToRads,
                    this
                  )),
                  (this.g = new GradientProperty(t, e.g, this)),
                  (this.style = i),
                  (this.stops = []),
                  this.setGradientData(i.pElem, e),
                  this.setGradientOpacity(e, i),
                  (this._isAnimated = !!this._isAnimated);
              }),
              (SVGGradientFillStyleData.prototype.setGradientData = function (
                t,
                e
              ) {
                var i = createElementID(),
                  r = createNS(1 === e.t ? 'linearGradient' : 'radialGradient');
                r.setAttribute('id', i),
                  r.setAttribute('spreadMethod', 'pad'),
                  r.setAttribute('gradientUnits', 'userSpaceOnUse');
                var a,
                  n,
                  s,
                  o = [];
                for (s = 4 * e.g.p, n = 0; n < s; n += 4)
                  (a = createNS('stop')), r.appendChild(a), o.push(a);
                t.setAttribute(
                  'gf' === e.ty ? 'fill' : 'stroke',
                  'url(' + getLocationHref() + '#' + i + ')'
                ),
                  (this.gf = r),
                  (this.cst = o);
              }),
              (SVGGradientFillStyleData.prototype.setGradientOpacity =
                function (t, e) {
                  if (this.g._hasOpacity && !this.g._collapsable) {
                    var i,
                      r,
                      a,
                      n = createNS('mask'),
                      s = createNS('path');
                    n.appendChild(s);
                    var o = createElementID(),
                      l = createElementID();
                    n.setAttribute('id', l);
                    var p = createNS(
                      1 === t.t ? 'linearGradient' : 'radialGradient'
                    );
                    p.setAttribute('id', o),
                      p.setAttribute('spreadMethod', 'pad'),
                      p.setAttribute('gradientUnits', 'userSpaceOnUse'),
                      (a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length);
                    var h = this.stops;
                    for (r = 4 * t.g.p; r < a; r += 2)
                      (i = createNS('stop')).setAttribute(
                        'stop-color',
                        'rgb(255,255,255)'
                      ),
                        p.appendChild(i),
                        h.push(i);
                    s.setAttribute(
                      'gf' === t.ty ? 'fill' : 'stroke',
                      'url(' + getLocationHref() + '#' + o + ')'
                    ),
                      'gs' === t.ty &&
                        (s.setAttribute(
                          'stroke-linecap',
                          lineCapEnum[t.lc || 2]
                        ),
                        s.setAttribute(
                          'stroke-linejoin',
                          lineJoinEnum[t.lj || 2]
                        ),
                        1 === t.lj &&
                          s.setAttribute('stroke-miterlimit', t.ml)),
                      (this.of = p),
                      (this.ms = n),
                      (this.ost = h),
                      (this.maskId = l),
                      (e.msElem = s);
                  }
                }),
              extendPrototype(
                [DynamicPropertyContainer],
                SVGGradientFillStyleData
              ),
              extendPrototype(
                [SVGGradientFillStyleData, DynamicPropertyContainer],
                SVGGradientStrokeStyleData
              );
            var buildShapeString = function (t, e, i, r) {
                if (0 === e) return '';
                var a,
                  n = t.o,
                  s = t.i,
                  o = t.v,
                  l = ' M' + r.applyToPointStringified(o[0][0], o[0][1]);
                for (a = 1; a < e; a += 1)
                  l +=
                    ' C' +
                    r.applyToPointStringified(n[a - 1][0], n[a - 1][1]) +
                    ' ' +
                    r.applyToPointStringified(s[a][0], s[a][1]) +
                    ' ' +
                    r.applyToPointStringified(o[a][0], o[a][1]);
                return (
                  i &&
                    e &&
                    ((l +=
                      ' C' +
                      r.applyToPointStringified(n[a - 1][0], n[a - 1][1]) +
                      ' ' +
                      r.applyToPointStringified(s[0][0], s[0][1]) +
                      ' ' +
                      r.applyToPointStringified(o[0][0], o[0][1])),
                    (l += 'z')),
                  l
                );
              },
              SVGElementsRenderer = (function () {
                var t = new Matrix(),
                  e = new Matrix();
                function i(t, e, i) {
                  (i || e.transform.op._mdf) &&
                    e.transform.container.setAttribute(
                      'opacity',
                      e.transform.op.v
                    ),
                    (i || e.transform.mProps._mdf) &&
                      e.transform.container.setAttribute(
                        'transform',
                        e.transform.mProps.v.to2dCSS()
                      );
                }
                function r() {}
                function a(i, r, a) {
                  var n,
                    s,
                    o,
                    l,
                    p,
                    h,
                    c,
                    u,
                    f,
                    m,
                    d,
                    x = r.styles.length,
                    y = r.lvl;
                  for (h = 0; h < x; h += 1) {
                    if (((l = r.sh._mdf || a), r.styles[h].lvl < y)) {
                      for (
                        u = e.reset(),
                          m = y - r.styles[h].lvl,
                          d = r.transformers.length - 1;
                        !l && m > 0;

                      )
                        (l = r.transformers[d].mProps._mdf || l),
                          (m -= 1),
                          (d -= 1);
                      if (l)
                        for (
                          m = y - r.styles[h].lvl,
                            d = r.transformers.length - 1;
                          m > 0;

                        )
                          (f = r.transformers[d].mProps.v.props),
                            u.transform(
                              f[0],
                              f[1],
                              f[2],
                              f[3],
                              f[4],
                              f[5],
                              f[6],
                              f[7],
                              f[8],
                              f[9],
                              f[10],
                              f[11],
                              f[12],
                              f[13],
                              f[14],
                              f[15]
                            ),
                            (m -= 1),
                            (d -= 1);
                    } else u = t;
                    if (((s = (c = r.sh.paths)._length), l)) {
                      for (o = '', n = 0; n < s; n += 1)
                        (p = c.shapes[n]) &&
                          p._length &&
                          (o += buildShapeString(p, p._length, p.c, u));
                      r.caches[h] = o;
                    } else o = r.caches[h];
                    (r.styles[h].d += !0 === i.hd ? '' : o),
                      (r.styles[h]._mdf = l || r.styles[h]._mdf);
                  }
                }
                function n(t, e, i) {
                  var r = e.style;
                  (e.c._mdf || i) &&
                    r.pElem.setAttribute(
                      'fill',
                      'rgb(' +
                        bmFloor(e.c.v[0]) +
                        ',' +
                        bmFloor(e.c.v[1]) +
                        ',' +
                        bmFloor(e.c.v[2]) +
                        ')'
                    ),
                    (e.o._mdf || i) &&
                      r.pElem.setAttribute('fill-opacity', e.o.v);
                }
                function s(t, e, i) {
                  o(t, e, i), l(0, e, i);
                }
                function o(t, e, i) {
                  var r,
                    a,
                    n,
                    s,
                    o,
                    l = e.gf,
                    p = e.g._hasOpacity,
                    h = e.s.v,
                    c = e.e.v;
                  if (e.o._mdf || i) {
                    var u = 'gf' === t.ty ? 'fill-opacity' : 'stroke-opacity';
                    e.style.pElem.setAttribute(u, e.o.v);
                  }
                  if (e.s._mdf || i) {
                    var f = 1 === t.t ? 'x1' : 'cx',
                      m = 'x1' === f ? 'y1' : 'cy';
                    l.setAttribute(f, h[0]),
                      l.setAttribute(m, h[1]),
                      p &&
                        !e.g._collapsable &&
                        (e.of.setAttribute(f, h[0]),
                        e.of.setAttribute(m, h[1]));
                  }
                  if (e.g._cmdf || i) {
                    r = e.cst;
                    var d = e.g.c;
                    for (n = r.length, a = 0; a < n; a += 1)
                      (s = r[a]).setAttribute('offset', d[4 * a] + '%'),
                        s.setAttribute(
                          'stop-color',
                          'rgb(' +
                            d[4 * a + 1] +
                            ',' +
                            d[4 * a + 2] +
                            ',' +
                            d[4 * a + 3] +
                            ')'
                        );
                  }
                  if (p && (e.g._omdf || i)) {
                    var x = e.g.o;
                    for (
                      n = (r = e.g._collapsable ? e.cst : e.ost).length, a = 0;
                      a < n;
                      a += 1
                    )
                      (s = r[a]),
                        e.g._collapsable ||
                          s.setAttribute('offset', x[2 * a] + '%'),
                        s.setAttribute('stop-opacity', x[2 * a + 1]);
                  }
                  if (1 === t.t)
                    (e.e._mdf || i) &&
                      (l.setAttribute('x2', c[0]),
                      l.setAttribute('y2', c[1]),
                      p &&
                        !e.g._collapsable &&
                        (e.of.setAttribute('x2', c[0]),
                        e.of.setAttribute('y2', c[1])));
                  else if (
                    ((e.s._mdf || e.e._mdf || i) &&
                      ((o = Math.sqrt(
                        Math.pow(h[0] - c[0], 2) + Math.pow(h[1] - c[1], 2)
                      )),
                      l.setAttribute('r', o),
                      p && !e.g._collapsable && e.of.setAttribute('r', o)),
                    e.e._mdf || e.h._mdf || e.a._mdf || i)
                  ) {
                    o ||
                      (o = Math.sqrt(
                        Math.pow(h[0] - c[0], 2) + Math.pow(h[1] - c[1], 2)
                      ));
                    var y = Math.atan2(c[1] - h[1], c[0] - h[0]),
                      k = e.h.v;
                    k >= 1 ? (k = 0.99) : k <= -1 && (k = -0.99);
                    var g = o * k,
                      v = Math.cos(y + e.a.v) * g + h[0],
                      _ = Math.sin(y + e.a.v) * g + h[1];
                    l.setAttribute('fx', v),
                      l.setAttribute('fy', _),
                      p &&
                        !e.g._collapsable &&
                        (e.of.setAttribute('fx', v),
                        e.of.setAttribute('fy', _));
                  }
                }
                function l(t, e, i) {
                  var r = e.style,
                    a = e.d;
                  a &&
                    (a._mdf || i) &&
                    a.dashStr &&
                    (r.pElem.setAttribute('stroke-dasharray', a.dashStr),
                    r.pElem.setAttribute('stroke-dashoffset', a.dashoffset[0])),
                    e.c &&
                      (e.c._mdf || i) &&
                      r.pElem.setAttribute(
                        'stroke',
                        'rgb(' +
                          bmFloor(e.c.v[0]) +
                          ',' +
                          bmFloor(e.c.v[1]) +
                          ',' +
                          bmFloor(e.c.v[2]) +
                          ')'
                      ),
                    (e.o._mdf || i) &&
                      r.pElem.setAttribute('stroke-opacity', e.o.v),
                    (e.w._mdf || i) &&
                      (r.pElem.setAttribute('stroke-width', e.w.v),
                      r.msElem && r.msElem.setAttribute('stroke-width', e.w.v));
                }
                return {
                  createRenderFunction: function (t) {
                    switch (t.ty) {
                      case 'fl':
                        return n;
                      case 'gf':
                        return o;
                      case 'gs':
                        return s;
                      case 'st':
                        return l;
                      case 'sh':
                      case 'el':
                      case 'rc':
                      case 'sr':
                        return a;
                      case 'tr':
                        return i;
                      case 'no':
                        return r;
                      default:
                        return null;
                    }
                  },
                };
              })();
            function SVGShapeElement(t, e, i) {
              (this.shapes = []),
                (this.shapesData = t.shapes),
                (this.stylesList = []),
                (this.shapeModifiers = []),
                (this.itemsData = []),
                (this.processedElements = []),
                (this.animatedContents = []),
                this.initElement(t, e, i),
                (this.prevViewData = []);
            }
            function LetterProps(t, e, i, r, a, n) {
              (this.o = t),
                (this.sw = e),
                (this.sc = i),
                (this.fc = r),
                (this.m = a),
                (this.p = n),
                (this._mdf = {
                  o: !0,
                  sw: !!e,
                  sc: !!i,
                  fc: !!r,
                  m: !0,
                  p: !0,
                });
            }
            function TextProperty(t, e) {
              (this._frameId = initialDefaultFrame),
                (this.pv = ''),
                (this.v = ''),
                (this.kf = !1),
                (this._isFirstFrame = !0),
                (this._mdf = !1),
                (this.data = e),
                (this.elem = t),
                (this.comp = this.elem.comp),
                (this.keysIndex = 0),
                (this.canResize = !1),
                (this.minimumFontSize = 1),
                (this.effectsSequence = []),
                (this.currentData = {
                  ascent: 0,
                  boxWidth: this.defaultBoxWidth,
                  f: '',
                  fStyle: '',
                  fWeight: '',
                  fc: '',
                  j: '',
                  justifyOffset: '',
                  l: [],
                  lh: 0,
                  lineWidths: [],
                  ls: '',
                  of: '',
                  s: '',
                  sc: '',
                  sw: 0,
                  t: 0,
                  tr: 0,
                  sz: 0,
                  ps: null,
                  fillColorAnim: !1,
                  strokeColorAnim: !1,
                  strokeWidthAnim: !1,
                  yOffset: 0,
                  finalSize: 0,
                  finalText: [],
                  finalLineHeight: 0,
                  __complete: !1,
                }),
                this.copyData(this.currentData, this.data.d.k[0].s),
                this.searchProperty() ||
                  this.completeTextData(this.currentData);
            }
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                IShapeElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
              ],
              SVGShapeElement
            ),
              (SVGShapeElement.prototype.initSecondaryElement = function () {}),
              (SVGShapeElement.prototype.identityMatrix = new Matrix()),
              (SVGShapeElement.prototype.buildExpressionInterface =
                function () {}),
              (SVGShapeElement.prototype.createContent = function () {
                this.searchShapes(
                  this.shapesData,
                  this.itemsData,
                  this.prevViewData,
                  this.layerElement,
                  0,
                  [],
                  !0
                ),
                  this.filterUniqueShapes();
              }),
              (SVGShapeElement.prototype.filterUniqueShapes = function () {
                var t,
                  e,
                  i,
                  r,
                  a = this.shapes.length,
                  n = this.stylesList.length,
                  s = [],
                  o = !1;
                for (i = 0; i < n; i += 1) {
                  for (
                    r = this.stylesList[i], o = !1, s.length = 0, t = 0;
                    t < a;
                    t += 1
                  )
                    -1 !== (e = this.shapes[t]).styles.indexOf(r) &&
                      (s.push(e), (o = e._isAnimated || o));
                  s.length > 1 && o && this.setShapesAsAnimated(s);
                }
              }),
              (SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
                var e,
                  i = t.length;
                for (e = 0; e < i; e += 1) t[e].setAsAnimated();
              }),
              (SVGShapeElement.prototype.createStyleElement = function (t, e) {
                var i,
                  r = new SVGStyleData(t, e),
                  a = r.pElem;
                return (
                  'st' === t.ty
                    ? (i = new SVGStrokeStyleData(this, t, r))
                    : 'fl' === t.ty
                      ? (i = new SVGFillStyleData(this, t, r))
                      : 'gf' === t.ty || 'gs' === t.ty
                        ? ((i = new (
                            'gf' === t.ty
                              ? SVGGradientFillStyleData
                              : SVGGradientStrokeStyleData
                          )(this, t, r)),
                          this.globalData.defs.appendChild(i.gf),
                          i.maskId &&
                            (this.globalData.defs.appendChild(i.ms),
                            this.globalData.defs.appendChild(i.of),
                            a.setAttribute(
                              'mask',
                              'url(' + getLocationHref() + '#' + i.maskId + ')'
                            )))
                        : 'no' === t.ty && (i = new SVGNoStyleData(this, t, r)),
                  ('st' !== t.ty && 'gs' !== t.ty) ||
                    (a.setAttribute('stroke-linecap', lineCapEnum[t.lc || 2]),
                    a.setAttribute('stroke-linejoin', lineJoinEnum[t.lj || 2]),
                    a.setAttribute('fill-opacity', '0'),
                    1 === t.lj && a.setAttribute('stroke-miterlimit', t.ml)),
                  2 === t.r && a.setAttribute('fill-rule', 'evenodd'),
                  t.ln && a.setAttribute('id', t.ln),
                  t.cl && a.setAttribute('class', t.cl),
                  t.bm && (a.style['mix-blend-mode'] = getBlendMode(t.bm)),
                  this.stylesList.push(r),
                  this.addToAnimatedContents(t, i),
                  i
                );
              }),
              (SVGShapeElement.prototype.createGroupElement = function (t) {
                var e = new ShapeGroupData();
                return (
                  t.ln && e.gr.setAttribute('id', t.ln),
                  t.cl && e.gr.setAttribute('class', t.cl),
                  t.bm && (e.gr.style['mix-blend-mode'] = getBlendMode(t.bm)),
                  e
                );
              }),
              (SVGShapeElement.prototype.createTransformElement = function (
                t,
                e
              ) {
                var i = TransformPropertyFactory.getTransformProperty(
                    this,
                    t,
                    this
                  ),
                  r = new SVGTransformData(i, i.o, e);
                return this.addToAnimatedContents(t, r), r;
              }),
              (SVGShapeElement.prototype.createShapeElement = function (
                t,
                e,
                i
              ) {
                var r = 4;
                'rc' === t.ty
                  ? (r = 5)
                  : 'el' === t.ty
                    ? (r = 6)
                    : 'sr' === t.ty && (r = 7);
                var a = new SVGShapeData(
                  e,
                  i,
                  ShapePropertyFactory.getShapeProp(this, t, r, this)
                );
                return (
                  this.shapes.push(a),
                  this.addShapeToModifiers(a),
                  this.addToAnimatedContents(t, a),
                  a
                );
              }),
              (SVGShapeElement.prototype.addToAnimatedContents = function (
                t,
                e
              ) {
                for (var i = 0, r = this.animatedContents.length; i < r; ) {
                  if (this.animatedContents[i].element === e) return;
                  i += 1;
                }
                this.animatedContents.push({
                  fn: SVGElementsRenderer.createRenderFunction(t),
                  element: e,
                  data: t,
                });
              }),
              (SVGShapeElement.prototype.setElementStyles = function (t) {
                var e,
                  i = t.styles,
                  r = this.stylesList.length;
                for (e = 0; e < r; e += 1)
                  this.stylesList[e].closed || i.push(this.stylesList[e]);
              }),
              (SVGShapeElement.prototype.reloadShapes = function () {
                var t;
                this._isFirstFrame = !0;
                var e = this.itemsData.length;
                for (t = 0; t < e; t += 1)
                  this.prevViewData[t] = this.itemsData[t];
                for (
                  this.searchShapes(
                    this.shapesData,
                    this.itemsData,
                    this.prevViewData,
                    this.layerElement,
                    0,
                    [],
                    !0
                  ),
                    this.filterUniqueShapes(),
                    e = this.dynamicProperties.length,
                    t = 0;
                  t < e;
                  t += 1
                )
                  this.dynamicProperties[t].getValue();
                this.renderModifiers();
              }),
              (SVGShapeElement.prototype.searchShapes = function (
                t,
                e,
                i,
                r,
                a,
                n,
                s
              ) {
                var o,
                  l,
                  p,
                  h,
                  c,
                  u,
                  f = [].concat(n),
                  m = t.length - 1,
                  d = [],
                  x = [];
                for (o = m; o >= 0; o -= 1) {
                  if (
                    ((u = this.searchProcessedElement(t[o]))
                      ? (e[o] = i[u - 1])
                      : (t[o]._render = s),
                    'fl' === t[o].ty ||
                      'st' === t[o].ty ||
                      'gf' === t[o].ty ||
                      'gs' === t[o].ty ||
                      'no' === t[o].ty)
                  )
                    u
                      ? (e[o].style.closed = !1)
                      : (e[o] = this.createStyleElement(t[o], a)),
                      t[o]._render &&
                        e[o].style.pElem.parentNode !== r &&
                        r.appendChild(e[o].style.pElem),
                      d.push(e[o].style);
                  else if ('gr' === t[o].ty) {
                    if (u)
                      for (p = e[o].it.length, l = 0; l < p; l += 1)
                        e[o].prevViewData[l] = e[o].it[l];
                    else e[o] = this.createGroupElement(t[o]);
                    this.searchShapes(
                      t[o].it,
                      e[o].it,
                      e[o].prevViewData,
                      e[o].gr,
                      a + 1,
                      f,
                      s
                    ),
                      t[o]._render &&
                        e[o].gr.parentNode !== r &&
                        r.appendChild(e[o].gr);
                  } else
                    'tr' === t[o].ty
                      ? (u || (e[o] = this.createTransformElement(t[o], r)),
                        (h = e[o].transform),
                        f.push(h))
                      : 'sh' === t[o].ty ||
                          'rc' === t[o].ty ||
                          'el' === t[o].ty ||
                          'sr' === t[o].ty
                        ? (u || (e[o] = this.createShapeElement(t[o], f, a)),
                          this.setElementStyles(e[o]))
                        : 'tm' === t[o].ty ||
                            'rd' === t[o].ty ||
                            'ms' === t[o].ty ||
                            'pb' === t[o].ty
                          ? (u
                              ? ((c = e[o]).closed = !1)
                              : ((c = ShapeModifiers.getModifier(t[o].ty)).init(
                                  this,
                                  t[o]
                                ),
                                (e[o] = c),
                                this.shapeModifiers.push(c)),
                            x.push(c))
                          : 'rp' === t[o].ty &&
                            (u
                              ? ((c = e[o]).closed = !0)
                              : ((c = ShapeModifiers.getModifier(t[o].ty)),
                                (e[o] = c),
                                c.init(this, t, o, e),
                                this.shapeModifiers.push(c),
                                (s = !1)),
                            x.push(c));
                  this.addProcessedElement(t[o], o + 1);
                }
                for (m = d.length, o = 0; o < m; o += 1) d[o].closed = !0;
                for (m = x.length, o = 0; o < m; o += 1) x[o].closed = !0;
              }),
              (SVGShapeElement.prototype.renderInnerContent = function () {
                var t;
                this.renderModifiers();
                var e = this.stylesList.length;
                for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                for (this.renderShape(), t = 0; t < e; t += 1)
                  (this.stylesList[t]._mdf || this._isFirstFrame) &&
                    (this.stylesList[t].msElem &&
                      (this.stylesList[t].msElem.setAttribute(
                        'd',
                        this.stylesList[t].d
                      ),
                      (this.stylesList[t].d = 'M0 0' + this.stylesList[t].d)),
                    this.stylesList[t].pElem.setAttribute(
                      'd',
                      this.stylesList[t].d || 'M0 0'
                    ));
              }),
              (SVGShapeElement.prototype.renderShape = function () {
                var t,
                  e,
                  i = this.animatedContents.length;
                for (t = 0; t < i; t += 1)
                  (e = this.animatedContents[t]),
                    (this._isFirstFrame || e.element._isAnimated) &&
                      !0 !== e.data &&
                      e.fn(e.data, e.element, this._isFirstFrame);
              }),
              (SVGShapeElement.prototype.destroy = function () {
                this.destroyBaseElement(),
                  (this.shapesData = null),
                  (this.itemsData = null);
              }),
              (LetterProps.prototype.update = function (t, e, i, r, a, n) {
                (this._mdf.o = !1),
                  (this._mdf.sw = !1),
                  (this._mdf.sc = !1),
                  (this._mdf.fc = !1),
                  (this._mdf.m = !1),
                  (this._mdf.p = !1);
                var s = !1;
                return (
                  this.o !== t && ((this.o = t), (this._mdf.o = !0), (s = !0)),
                  this.sw !== e &&
                    ((this.sw = e), (this._mdf.sw = !0), (s = !0)),
                  this.sc !== i &&
                    ((this.sc = i), (this._mdf.sc = !0), (s = !0)),
                  this.fc !== r &&
                    ((this.fc = r), (this._mdf.fc = !0), (s = !0)),
                  this.m !== a && ((this.m = a), (this._mdf.m = !0), (s = !0)),
                  !n.length ||
                    (this.p[0] === n[0] &&
                      this.p[1] === n[1] &&
                      this.p[4] === n[4] &&
                      this.p[5] === n[5] &&
                      this.p[12] === n[12] &&
                      this.p[13] === n[13]) ||
                    ((this.p = n), (this._mdf.p = !0), (s = !0)),
                  s
                );
              }),
              (TextProperty.prototype.defaultBoxWidth = [0, 0]),
              (TextProperty.prototype.copyData = function (t, e) {
                for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }),
              (TextProperty.prototype.setCurrentData = function (t) {
                t.__complete || this.completeTextData(t),
                  (this.currentData = t),
                  (this.currentData.boxWidth =
                    this.currentData.boxWidth || this.defaultBoxWidth),
                  (this._mdf = !0);
              }),
              (TextProperty.prototype.searchProperty = function () {
                return this.searchKeyframes();
              }),
              (TextProperty.prototype.searchKeyframes = function () {
                return (
                  (this.kf = this.data.d.k.length > 1),
                  this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
                  this.kf
                );
              }),
              (TextProperty.prototype.addEffect = function (t) {
                this.effectsSequence.push(t),
                  this.elem.addDynamicProperty(this);
              }),
              (TextProperty.prototype.getValue = function (t) {
                if (
                  (this.elem.globalData.frameId !== this.frameId &&
                    this.effectsSequence.length) ||
                  t
                ) {
                  this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                  var e = this.currentData,
                    i = this.keysIndex;
                  if (this.lock) this.setCurrentData(this.currentData);
                  else {
                    var r;
                    (this.lock = !0), (this._mdf = !1);
                    var a = this.effectsSequence.length,
                      n = t || this.data.d.k[this.keysIndex].s;
                    for (r = 0; r < a; r += 1)
                      n =
                        i !== this.keysIndex
                          ? this.effectsSequence[r](n, n.t)
                          : this.effectsSequence[r](this.currentData, n.t);
                    e !== n && this.setCurrentData(n),
                      (this.v = this.currentData),
                      (this.pv = this.v),
                      (this.lock = !1),
                      (this.frameId = this.elem.globalData.frameId);
                  }
                }
              }),
              (TextProperty.prototype.getKeyframeValue = function () {
                for (
                  var t = this.data.d.k,
                    e = this.elem.comp.renderedFrame,
                    i = 0,
                    r = t.length;
                  i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);

                )
                  i += 1;
                return (
                  this.keysIndex !== i && (this.keysIndex = i),
                  this.data.d.k[this.keysIndex].s
                );
              }),
              (TextProperty.prototype.buildFinalText = function (t) {
                for (var e, i, r = [], a = 0, n = t.length, s = !1; a < n; )
                  (e = t.charCodeAt(a)),
                    FontManager.isCombinedCharacter(e)
                      ? (r[r.length - 1] += t.charAt(a))
                      : e >= 55296 && e <= 56319
                        ? (i = t.charCodeAt(a + 1)) >= 56320 && i <= 57343
                          ? (s || FontManager.isModifier(e, i)
                              ? ((r[r.length - 1] += t.substr(a, 2)), (s = !1))
                              : r.push(t.substr(a, 2)),
                            (a += 1))
                          : r.push(t.charAt(a))
                        : e > 56319
                          ? ((i = t.charCodeAt(a + 1)),
                            FontManager.isZeroWidthJoiner(e, i)
                              ? ((s = !0),
                                (r[r.length - 1] += t.substr(a, 2)),
                                (a += 1))
                              : r.push(t.charAt(a)))
                          : FontManager.isZeroWidthJoiner(e)
                            ? ((r[r.length - 1] += t.charAt(a)), (s = !0))
                            : r.push(t.charAt(a)),
                    (a += 1);
                return r;
              }),
              (TextProperty.prototype.completeTextData = function (t) {
                t.__complete = !0;
                var e,
                  i,
                  r,
                  a,
                  n,
                  s,
                  o,
                  l = this.elem.globalData.fontManager,
                  p = this.data,
                  h = [],
                  c = 0,
                  u = p.m.g,
                  f = 0,
                  m = 0,
                  d = 0,
                  x = [],
                  y = 0,
                  k = 0,
                  g = l.getFontByName(t.f),
                  v = 0,
                  _ = getFontProperties(g);
                (t.fWeight = _.weight),
                  (t.fStyle = _.style),
                  (t.finalSize = t.s),
                  (t.finalText = this.buildFinalText(t.t)),
                  (i = t.finalText.length),
                  (t.finalLineHeight = t.lh);
                var E,
                  b = (t.tr / 1e3) * t.finalSize;
                if (t.sz)
                  for (var S, A, D = !0, P = t.sz[0], G = t.sz[1]; D; ) {
                    (S = 0),
                      (y = 0),
                      (i = (A = this.buildFinalText(t.t)).length),
                      (b = (t.tr / 1e3) * t.finalSize);
                    var B = -1;
                    for (e = 0; e < i; e += 1)
                      (E = A[e].charCodeAt(0)),
                        (r = !1),
                        ' ' === A[e]
                          ? (B = e)
                          : (13 !== E && 3 !== E) ||
                            ((y = 0),
                            (r = !0),
                            (S += t.finalLineHeight || 1.2 * t.finalSize)),
                        l.chars
                          ? ((o = l.getCharData(A[e], g.fStyle, g.fFamily)),
                            (v = r ? 0 : (o.w * t.finalSize) / 100))
                          : (v = l.measureText(A[e], t.f, t.finalSize)),
                        y + v > P && ' ' !== A[e]
                          ? (-1 === B ? (i += 1) : (e = B),
                            (S += t.finalLineHeight || 1.2 * t.finalSize),
                            A.splice(e, B === e ? 1 : 0, '\r'),
                            (B = -1),
                            (y = 0))
                          : ((y += v), (y += b));
                    (S += (g.ascent * t.finalSize) / 100),
                      this.canResize &&
                      t.finalSize > this.minimumFontSize &&
                      G < S
                        ? ((t.finalSize -= 1),
                          (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                        : ((t.finalText = A),
                          (i = t.finalText.length),
                          (D = !1));
                  }
                (y = -b), (v = 0);
                var V,
                  F = 0;
                for (e = 0; e < i; e += 1)
                  if (
                    ((r = !1),
                    13 === (E = (V = t.finalText[e]).charCodeAt(0)) || 3 === E
                      ? ((F = 0),
                        x.push(y),
                        (k = y > k ? y : k),
                        (y = -2 * b),
                        (a = ''),
                        (r = !0),
                        (d += 1))
                      : (a = V),
                    l.chars
                      ? ((o = l.getCharData(
                          V,
                          g.fStyle,
                          l.getFontByName(t.f).fFamily
                        )),
                        (v = r ? 0 : (o.w * t.finalSize) / 100))
                      : (v = l.measureText(a, t.f, t.finalSize)),
                    ' ' === V ? (F += v + b) : ((y += v + b + F), (F = 0)),
                    h.push({
                      l: v,
                      an: v,
                      add: f,
                      n: r,
                      anIndexes: [],
                      val: a,
                      line: d,
                      animatorJustifyOffset: 0,
                    }),
                    2 == u)
                  ) {
                    if (((f += v), '' === a || ' ' === a || e === i - 1)) {
                      for (('' !== a && ' ' !== a) || (f -= v); m <= e; )
                        (h[m].an = f),
                          (h[m].ind = c),
                          (h[m].extra = v),
                          (m += 1);
                      (c += 1), (f = 0);
                    }
                  } else if (3 == u) {
                    if (((f += v), '' === a || e === i - 1)) {
                      for ('' === a && (f -= v); m <= e; )
                        (h[m].an = f),
                          (h[m].ind = c),
                          (h[m].extra = v),
                          (m += 1);
                      (f = 0), (c += 1);
                    }
                  } else (h[c].ind = c), (h[c].extra = 0), (c += 1);
                if (((t.l = h), (k = y > k ? y : k), x.push(y), t.sz))
                  (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
                else
                  switch (((t.boxWidth = k), t.j)) {
                    case 1:
                      t.justifyOffset = -t.boxWidth;
                      break;
                    case 2:
                      t.justifyOffset = -t.boxWidth / 2;
                      break;
                    default:
                      t.justifyOffset = 0;
                  }
                t.lineWidths = x;
                var T,
                  w,
                  C,
                  M,
                  I = p.a;
                s = I.length;
                var R = [];
                for (n = 0; n < s; n += 1) {
                  for (
                    (T = I[n]).a.sc && (t.strokeColorAnim = !0),
                      T.a.sw && (t.strokeWidthAnim = !0),
                      (T.a.fc || T.a.fh || T.a.fs || T.a.fb) &&
                        (t.fillColorAnim = !0),
                      M = 0,
                      C = T.s.b,
                      e = 0;
                    e < i;
                    e += 1
                  )
                    ((w = h[e]).anIndexes[n] = M),
                      ((1 == C && '' !== w.val) ||
                        (2 == C && '' !== w.val && ' ' !== w.val) ||
                        (3 == C && (w.n || ' ' == w.val || e == i - 1)) ||
                        (4 == C && (w.n || e == i - 1))) &&
                        (1 === T.s.rn && R.push(M), (M += 1));
                  p.a[n].s.totalChars = M;
                  var L,
                    z = -1;
                  if (1 === T.s.rn)
                    for (e = 0; e < i; e += 1)
                      z != (w = h[e]).anIndexes[n] &&
                        ((z = w.anIndexes[n]),
                        (L = R.splice(
                          Math.floor(Math.random() * R.length),
                          1
                        )[0])),
                        (w.anIndexes[n] = L);
                }
                (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
                  (t.ls = t.ls || 0),
                  (t.ascent = (g.ascent * t.finalSize) / 100);
              }),
              (TextProperty.prototype.updateDocumentData = function (t, e) {
                e = void 0 === e ? this.keysIndex : e;
                var i = this.copyData({}, this.data.d.k[e].s);
                (i = this.copyData(i, t)),
                  (this.data.d.k[e].s = i),
                  this.recalculate(e),
                  this.elem.addDynamicProperty(this);
              }),
              (TextProperty.prototype.recalculate = function (t) {
                var e = this.data.d.k[t].s;
                (e.__complete = !1),
                  (this.keysIndex = 0),
                  (this._isFirstFrame = !0),
                  this.getValue(e);
              }),
              (TextProperty.prototype.canResizeFont = function (t) {
                (this.canResize = t),
                  this.recalculate(this.keysIndex),
                  this.elem.addDynamicProperty(this);
              }),
              (TextProperty.prototype.setMinimumFontSize = function (t) {
                (this.minimumFontSize = Math.floor(t) || 1),
                  this.recalculate(this.keysIndex),
                  this.elem.addDynamicProperty(this);
              });
            var TextSelectorProp = (function () {
              var t = Math.max,
                e = Math.min,
                i = Math.floor;
              function r(t, e) {
                (this._currentTextLength = -1),
                  (this.k = !1),
                  (this.data = e),
                  (this.elem = t),
                  (this.comp = t.comp),
                  (this.finalS = 0),
                  (this.finalE = 0),
                  this.initDynamicPropertyContainer(t),
                  (this.s = PropertyFactory.getProp(
                    t,
                    e.s || { k: 0 },
                    0,
                    0,
                    this
                  )),
                  (this.e =
                    'e' in e
                      ? PropertyFactory.getProp(t, e.e, 0, 0, this)
                      : { v: 100 }),
                  (this.o = PropertyFactory.getProp(
                    t,
                    e.o || { k: 0 },
                    0,
                    0,
                    this
                  )),
                  (this.xe = PropertyFactory.getProp(
                    t,
                    e.xe || { k: 0 },
                    0,
                    0,
                    this
                  )),
                  (this.ne = PropertyFactory.getProp(
                    t,
                    e.ne || { k: 0 },
                    0,
                    0,
                    this
                  )),
                  (this.sm = PropertyFactory.getProp(
                    t,
                    e.sm || { k: 100 },
                    0,
                    0,
                    this
                  )),
                  (this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this)),
                  this.dynamicProperties.length || this.getValue();
              }
              return (
                (r.prototype = {
                  getMult: function (r) {
                    this._currentTextLength !==
                      this.elem.textProperty.currentData.l.length &&
                      this.getValue();
                    var a = 0,
                      n = 0,
                      s = 1,
                      o = 1;
                    this.ne.v > 0
                      ? (a = this.ne.v / 100)
                      : (n = -this.ne.v / 100),
                      this.xe.v > 0
                        ? (s = 1 - this.xe.v / 100)
                        : (o = 1 + this.xe.v / 100);
                    var l = BezierFactory.getBezierEasing(a, n, s, o).get,
                      p = 0,
                      h = this.finalS,
                      c = this.finalE,
                      u = this.data.sh;
                    if (2 === u)
                      p = l(
                        (p =
                          c === h
                            ? r >= c
                              ? 1
                              : 0
                            : t(0, e(0.5 / (c - h) + (r - h) / (c - h), 1)))
                      );
                    else if (3 === u)
                      p = l(
                        (p =
                          c === h
                            ? r >= c
                              ? 0
                              : 1
                            : 1 - t(0, e(0.5 / (c - h) + (r - h) / (c - h), 1)))
                      );
                    else if (4 === u)
                      c === h
                        ? (p = 0)
                        : (p = t(0, e(0.5 / (c - h) + (r - h) / (c - h), 1))) <
                            0.5
                          ? (p *= 2)
                          : (p = 1 - 2 * (p - 0.5)),
                        (p = l(p));
                    else if (5 === u) {
                      if (c === h) p = 0;
                      else {
                        var f = c - h,
                          m = -f / 2 + (r = e(t(0, r + 0.5 - h), c - h)),
                          d = f / 2;
                        p = Math.sqrt(1 - (m * m) / (d * d));
                      }
                      p = l(p);
                    } else
                      6 === u
                        ? (c === h
                            ? (p = 0)
                            : ((r = e(t(0, r + 0.5 - h), c - h)),
                              (p =
                                (1 +
                                  Math.cos(
                                    Math.PI + (2 * Math.PI * r) / (c - h)
                                  )) /
                                2)),
                          (p = l(p)))
                        : (r >= i(h) &&
                            (p = t(
                              0,
                              e(r - h < 0 ? e(c, 1) - (h - r) : c - r, 1)
                            )),
                          (p = l(p)));
                    if (100 !== this.sm.v) {
                      var x = 0.01 * this.sm.v;
                      0 === x && (x = 1e-8);
                      var y = 0.5 - 0.5 * x;
                      p < y ? (p = 0) : (p = (p - y) / x) > 1 && (p = 1);
                    }
                    return p * this.a.v;
                  },
                  getValue: function (t) {
                    this.iterateDynamicProperties(),
                      (this._mdf = t || this._mdf),
                      (this._currentTextLength =
                        this.elem.textProperty.currentData.l.length || 0),
                      t &&
                        2 === this.data.r &&
                        (this.e.v = this._currentTextLength);
                    var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                      i = this.o.v / e,
                      r = this.s.v / e + i,
                      a = this.e.v / e + i;
                    if (r > a) {
                      var n = r;
                      (r = a), (a = n);
                    }
                    (this.finalS = r), (this.finalE = a);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], r),
                {
                  getTextSelectorProp: function (t, e, i) {
                    return new r(t, e, i);
                  },
                }
              );
            })();
            function TextAnimatorDataProperty(t, e, i) {
              var r = { propType: !1 },
                a = PropertyFactory.getProp,
                n = e.a;
              (this.a = {
                r: n.r ? a(t, n.r, 0, degToRads, i) : r,
                rx: n.rx ? a(t, n.rx, 0, degToRads, i) : r,
                ry: n.ry ? a(t, n.ry, 0, degToRads, i) : r,
                sk: n.sk ? a(t, n.sk, 0, degToRads, i) : r,
                sa: n.sa ? a(t, n.sa, 0, degToRads, i) : r,
                s: n.s ? a(t, n.s, 1, 0.01, i) : r,
                a: n.a ? a(t, n.a, 1, 0, i) : r,
                o: n.o ? a(t, n.o, 0, 0.01, i) : r,
                p: n.p ? a(t, n.p, 1, 0, i) : r,
                sw: n.sw ? a(t, n.sw, 0, 0, i) : r,
                sc: n.sc ? a(t, n.sc, 1, 0, i) : r,
                fc: n.fc ? a(t, n.fc, 1, 0, i) : r,
                fh: n.fh ? a(t, n.fh, 0, 0, i) : r,
                fs: n.fs ? a(t, n.fs, 0, 0.01, i) : r,
                fb: n.fb ? a(t, n.fb, 0, 0.01, i) : r,
                t: n.t ? a(t, n.t, 0, 0, i) : r,
              }),
                (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i)),
                (this.s.t = e.s.t);
            }
            function TextAnimatorProperty(t, e, i) {
              (this._isFirstFrame = !0),
                (this._hasMaskedPath = !1),
                (this._frameId = -1),
                (this._textData = t),
                (this._renderType = e),
                (this._elem = i),
                (this._animatorsData = createSizedArray(
                  this._textData.a.length
                )),
                (this._pathData = {}),
                (this._moreOptions = { alignment: {} }),
                (this.renderedLetters = []),
                (this.lettersChangedFlag = !1),
                this.initDynamicPropertyContainer(i);
            }
            function ITextElement() {}
            (TextAnimatorProperty.prototype.searchProperties = function () {
              var t,
                e,
                i = this._textData.a.length,
                r = PropertyFactory.getProp;
              for (t = 0; t < i; t += 1)
                (e = this._textData.a[t]),
                  (this._animatorsData[t] = new TextAnimatorDataProperty(
                    this._elem,
                    e,
                    this
                  ));
              this._textData.p && 'm' in this._textData.p
                ? ((this._pathData = {
                    a: r(this._elem, this._textData.p.a, 0, 0, this),
                    f: r(this._elem, this._textData.p.f, 0, 0, this),
                    l: r(this._elem, this._textData.p.l, 0, 0, this),
                    r: r(this._elem, this._textData.p.r, 0, 0, this),
                    p: r(this._elem, this._textData.p.p, 0, 0, this),
                    m: this._elem.maskManager.getMaskProperty(
                      this._textData.p.m
                    ),
                  }),
                  (this._hasMaskedPath = !0))
                : (this._hasMaskedPath = !1),
                (this._moreOptions.alignment = r(
                  this._elem,
                  this._textData.m.a,
                  1,
                  0,
                  this
                ));
            }),
              (TextAnimatorProperty.prototype.getMeasures = function (t, e) {
                if (
                  ((this.lettersChangedFlag = e),
                  this._mdf ||
                    this._isFirstFrame ||
                    e ||
                    (this._hasMaskedPath && this._pathData.m._mdf))
                ) {
                  this._isFirstFrame = !1;
                  var i,
                    r,
                    a,
                    n,
                    s,
                    o,
                    l,
                    p,
                    h,
                    c,
                    u,
                    f,
                    m,
                    d,
                    x,
                    y,
                    k,
                    g,
                    v,
                    _ = this._moreOptions.alignment.v,
                    E = this._animatorsData,
                    b = this._textData,
                    S = this.mHelper,
                    A = this._renderType,
                    D = this.renderedLetters.length,
                    P = t.l;
                  if (this._hasMaskedPath) {
                    if (
                      ((v = this._pathData.m),
                      !this._pathData.n || this._pathData._mdf)
                    ) {
                      var G,
                        B = v.v;
                      for (
                        this._pathData.r.v && (B = B.reverse()),
                          s = { tLength: 0, segments: [] },
                          n = B._length - 1,
                          y = 0,
                          a = 0;
                        a < n;
                        a += 1
                      )
                        (G = bez.buildBezierData(
                          B.v[a],
                          B.v[a + 1],
                          [B.o[a][0] - B.v[a][0], B.o[a][1] - B.v[a][1]],
                          [
                            B.i[a + 1][0] - B.v[a + 1][0],
                            B.i[a + 1][1] - B.v[a + 1][1],
                          ]
                        )),
                          (s.tLength += G.segmentLength),
                          s.segments.push(G),
                          (y += G.segmentLength);
                      (a = n),
                        v.v.c &&
                          ((G = bez.buildBezierData(
                            B.v[a],
                            B.v[0],
                            [B.o[a][0] - B.v[a][0], B.o[a][1] - B.v[a][1]],
                            [B.i[0][0] - B.v[0][0], B.i[0][1] - B.v[0][1]]
                          )),
                          (s.tLength += G.segmentLength),
                          s.segments.push(G),
                          (y += G.segmentLength)),
                        (this._pathData.pi = s);
                    }
                    if (
                      ((s = this._pathData.pi),
                      (o = this._pathData.f.v),
                      (u = 0),
                      (c = 1),
                      (p = 0),
                      (h = !0),
                      (d = s.segments),
                      o < 0 && v.v.c)
                    )
                      for (
                        s.tLength < Math.abs(o) &&
                          (o = -Math.abs(o) % s.tLength),
                          c = (m = d[(u = d.length - 1)].points).length - 1;
                        o < 0;

                      )
                        (o += m[c].partialLength),
                          (c -= 1) < 0 &&
                            (c = (m = d[(u -= 1)].points).length - 1);
                    (f = (m = d[u].points)[c - 1]),
                      (x = (l = m[c]).partialLength);
                  }
                  (n = P.length), (i = 0), (r = 0);
                  var V,
                    F,
                    T,
                    w,
                    C,
                    M = 1.2 * t.finalSize * 0.714,
                    I = !0;
                  T = E.length;
                  var R,
                    L,
                    z,
                    N,
                    O,
                    H,
                    j,
                    W,
                    q,
                    $,
                    U,
                    Y,
                    Q = -1,
                    X = o,
                    K = u,
                    J = c,
                    Z = -1,
                    tt = '',
                    et = this.defaultPropsArray;
                  if (2 === t.j || 1 === t.j) {
                    var it = 0,
                      rt = 0,
                      at = 2 === t.j ? -0.5 : -1,
                      nt = 0,
                      st = !0;
                    for (a = 0; a < n; a += 1)
                      if (P[a].n) {
                        for (it && (it += rt); nt < a; )
                          (P[nt].animatorJustifyOffset = it), (nt += 1);
                        (it = 0), (st = !0);
                      } else {
                        for (F = 0; F < T; F += 1)
                          (V = E[F].a).t.propType &&
                            (st && 2 === t.j && (rt += V.t.v * at),
                            (C = E[F].s.getMult(
                              P[a].anIndexes[F],
                              b.a[F].s.totalChars
                            )).length
                              ? (it += V.t.v * C[0] * at)
                              : (it += V.t.v * C * at));
                        st = !1;
                      }
                    for (it && (it += rt); nt < a; )
                      (P[nt].animatorJustifyOffset = it), (nt += 1);
                  }
                  for (a = 0; a < n; a += 1) {
                    if ((S.reset(), (N = 1), P[a].n))
                      (i = 0),
                        (r += t.yOffset),
                        (r += I ? 1 : 0),
                        (o = X),
                        (I = !1),
                        this._hasMaskedPath &&
                          ((c = J),
                          (f = (m = d[(u = K)].points)[c - 1]),
                          (x = (l = m[c]).partialLength),
                          (p = 0)),
                        (tt = ''),
                        (U = ''),
                        (q = ''),
                        (Y = ''),
                        (et = this.defaultPropsArray);
                    else {
                      if (this._hasMaskedPath) {
                        if (Z !== P[a].line) {
                          switch (t.j) {
                            case 1:
                              o += y - t.lineWidths[P[a].line];
                              break;
                            case 2:
                              o += (y - t.lineWidths[P[a].line]) / 2;
                          }
                          Z = P[a].line;
                        }
                        Q !== P[a].ind &&
                          (P[Q] && (o += P[Q].extra),
                          (o += P[a].an / 2),
                          (Q = P[a].ind)),
                          (o += _[0] * P[a].an * 0.005);
                        var ot = 0;
                        for (F = 0; F < T; F += 1)
                          (V = E[F].a).p.propType &&
                            ((C = E[F].s.getMult(
                              P[a].anIndexes[F],
                              b.a[F].s.totalChars
                            )).length
                              ? (ot += V.p.v[0] * C[0])
                              : (ot += V.p.v[0] * C)),
                            V.a.propType &&
                              ((C = E[F].s.getMult(
                                P[a].anIndexes[F],
                                b.a[F].s.totalChars
                              )).length
                                ? (ot += V.a.v[0] * C[0])
                                : (ot += V.a.v[0] * C));
                        for (
                          h = !0,
                            this._pathData.a.v &&
                              ((o =
                                0.5 * P[0].an +
                                ((y -
                                  this._pathData.f.v -
                                  0.5 * P[0].an -
                                  0.5 * P[P.length - 1].an) *
                                  Q) /
                                  (n - 1)),
                              (o += this._pathData.f.v));
                          h;

                        )
                          p + x >= o + ot || !m
                            ? ((k = (o + ot - p) / l.partialLength),
                              (L = f.point[0] + (l.point[0] - f.point[0]) * k),
                              (z = f.point[1] + (l.point[1] - f.point[1]) * k),
                              S.translate(
                                -_[0] * P[a].an * 0.005,
                                -_[1] * M * 0.01
                              ),
                              (h = !1))
                            : m &&
                              ((p += l.partialLength),
                              (c += 1) >= m.length &&
                                ((c = 0),
                                d[(u += 1)]
                                  ? (m = d[u].points)
                                  : v.v.c
                                    ? ((c = 0), (m = d[(u = 0)].points))
                                    : ((p -= l.partialLength), (m = null))),
                              m && ((f = l), (x = (l = m[c]).partialLength)));
                        (R = P[a].an / 2 - P[a].add), S.translate(-R, 0, 0);
                      } else
                        (R = P[a].an / 2 - P[a].add),
                          S.translate(-R, 0, 0),
                          S.translate(
                            -_[0] * P[a].an * 0.005,
                            -_[1] * M * 0.01,
                            0
                          );
                      for (F = 0; F < T; F += 1)
                        (V = E[F].a).t.propType &&
                          ((C = E[F].s.getMult(
                            P[a].anIndexes[F],
                            b.a[F].s.totalChars
                          )),
                          (0 === i && 0 === t.j) ||
                            (this._hasMaskedPath
                              ? C.length
                                ? (o += V.t.v * C[0])
                                : (o += V.t.v * C)
                              : C.length
                                ? (i += V.t.v * C[0])
                                : (i += V.t.v * C)));
                      for (
                        t.strokeWidthAnim && (H = t.sw || 0),
                          t.strokeColorAnim &&
                            (O = t.sc
                              ? [t.sc[0], t.sc[1], t.sc[2]]
                              : [0, 0, 0]),
                          t.fillColorAnim &&
                            t.fc &&
                            (j = [t.fc[0], t.fc[1], t.fc[2]]),
                          F = 0;
                        F < T;
                        F += 1
                      )
                        (V = E[F].a).a.propType &&
                          ((C = E[F].s.getMult(
                            P[a].anIndexes[F],
                            b.a[F].s.totalChars
                          )).length
                            ? S.translate(
                                -V.a.v[0] * C[0],
                                -V.a.v[1] * C[1],
                                V.a.v[2] * C[2]
                              )
                            : S.translate(
                                -V.a.v[0] * C,
                                -V.a.v[1] * C,
                                V.a.v[2] * C
                              ));
                      for (F = 0; F < T; F += 1)
                        (V = E[F].a).s.propType &&
                          ((C = E[F].s.getMult(
                            P[a].anIndexes[F],
                            b.a[F].s.totalChars
                          )).length
                            ? S.scale(
                                1 + (V.s.v[0] - 1) * C[0],
                                1 + (V.s.v[1] - 1) * C[1],
                                1
                              )
                            : S.scale(
                                1 + (V.s.v[0] - 1) * C,
                                1 + (V.s.v[1] - 1) * C,
                                1
                              ));
                      for (F = 0; F < T; F += 1) {
                        if (
                          ((V = E[F].a),
                          (C = E[F].s.getMult(
                            P[a].anIndexes[F],
                            b.a[F].s.totalChars
                          )),
                          V.sk.propType &&
                            (C.length
                              ? S.skewFromAxis(-V.sk.v * C[0], V.sa.v * C[1])
                              : S.skewFromAxis(-V.sk.v * C, V.sa.v * C)),
                          V.r.propType &&
                            (C.length
                              ? S.rotateZ(-V.r.v * C[2])
                              : S.rotateZ(-V.r.v * C)),
                          V.ry.propType &&
                            (C.length
                              ? S.rotateY(V.ry.v * C[1])
                              : S.rotateY(V.ry.v * C)),
                          V.rx.propType &&
                            (C.length
                              ? S.rotateX(V.rx.v * C[0])
                              : S.rotateX(V.rx.v * C)),
                          V.o.propType &&
                            (C.length
                              ? (N += (V.o.v * C[0] - N) * C[0])
                              : (N += (V.o.v * C - N) * C)),
                          t.strokeWidthAnim &&
                            V.sw.propType &&
                            (C.length
                              ? (H += V.sw.v * C[0])
                              : (H += V.sw.v * C)),
                          t.strokeColorAnim && V.sc.propType)
                        )
                          for (W = 0; W < 3; W += 1)
                            C.length
                              ? (O[W] += (V.sc.v[W] - O[W]) * C[0])
                              : (O[W] += (V.sc.v[W] - O[W]) * C);
                        if (t.fillColorAnim && t.fc) {
                          if (V.fc.propType)
                            for (W = 0; W < 3; W += 1)
                              C.length
                                ? (j[W] += (V.fc.v[W] - j[W]) * C[0])
                                : (j[W] += (V.fc.v[W] - j[W]) * C);
                          V.fh.propType &&
                            (j = C.length
                              ? addHueToRGB(j, V.fh.v * C[0])
                              : addHueToRGB(j, V.fh.v * C)),
                            V.fs.propType &&
                              (j = C.length
                                ? addSaturationToRGB(j, V.fs.v * C[0])
                                : addSaturationToRGB(j, V.fs.v * C)),
                            V.fb.propType &&
                              (j = C.length
                                ? addBrightnessToRGB(j, V.fb.v * C[0])
                                : addBrightnessToRGB(j, V.fb.v * C));
                        }
                      }
                      for (F = 0; F < T; F += 1)
                        (V = E[F].a).p.propType &&
                          ((C = E[F].s.getMult(
                            P[a].anIndexes[F],
                            b.a[F].s.totalChars
                          )),
                          this._hasMaskedPath
                            ? C.length
                              ? S.translate(
                                  0,
                                  V.p.v[1] * C[0],
                                  -V.p.v[2] * C[1]
                                )
                              : S.translate(0, V.p.v[1] * C, -V.p.v[2] * C)
                            : C.length
                              ? S.translate(
                                  V.p.v[0] * C[0],
                                  V.p.v[1] * C[1],
                                  -V.p.v[2] * C[2]
                                )
                              : S.translate(
                                  V.p.v[0] * C,
                                  V.p.v[1] * C,
                                  -V.p.v[2] * C
                                ));
                      if (
                        (t.strokeWidthAnim && (q = H < 0 ? 0 : H),
                        t.strokeColorAnim &&
                          ($ =
                            'rgb(' +
                            Math.round(255 * O[0]) +
                            ',' +
                            Math.round(255 * O[1]) +
                            ',' +
                            Math.round(255 * O[2]) +
                            ')'),
                        t.fillColorAnim &&
                          t.fc &&
                          (U =
                            'rgb(' +
                            Math.round(255 * j[0]) +
                            ',' +
                            Math.round(255 * j[1]) +
                            ',' +
                            Math.round(255 * j[2]) +
                            ')'),
                        this._hasMaskedPath)
                      ) {
                        if (
                          (S.translate(0, -t.ls),
                          S.translate(0, _[1] * M * 0.01 + r, 0),
                          this._pathData.p.v)
                        ) {
                          g =
                            (l.point[1] - f.point[1]) /
                            (l.point[0] - f.point[0]);
                          var lt = (180 * Math.atan(g)) / Math.PI;
                          l.point[0] < f.point[0] && (lt += 180),
                            S.rotate((-lt * Math.PI) / 180);
                        }
                        S.translate(L, z, 0),
                          (o -= _[0] * P[a].an * 0.005),
                          P[a + 1] &&
                            Q !== P[a + 1].ind &&
                            ((o += P[a].an / 2),
                            (o += 0.001 * t.tr * t.finalSize));
                      } else {
                        switch (
                          (S.translate(i, r, 0),
                          t.ps && S.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                          t.j)
                        ) {
                          case 1:
                            S.translate(
                              P[a].animatorJustifyOffset +
                                t.justifyOffset +
                                (t.boxWidth - t.lineWidths[P[a].line]),
                              0,
                              0
                            );
                            break;
                          case 2:
                            S.translate(
                              P[a].animatorJustifyOffset +
                                t.justifyOffset +
                                (t.boxWidth - t.lineWidths[P[a].line]) / 2,
                              0,
                              0
                            );
                        }
                        S.translate(0, -t.ls),
                          S.translate(R, 0, 0),
                          S.translate(
                            _[0] * P[a].an * 0.005,
                            _[1] * M * 0.01,
                            0
                          ),
                          (i += P[a].l + 0.001 * t.tr * t.finalSize);
                      }
                      'html' === A
                        ? (tt = S.toCSS())
                        : 'svg' === A
                          ? (tt = S.to2dCSS())
                          : (et = [
                              S.props[0],
                              S.props[1],
                              S.props[2],
                              S.props[3],
                              S.props[4],
                              S.props[5],
                              S.props[6],
                              S.props[7],
                              S.props[8],
                              S.props[9],
                              S.props[10],
                              S.props[11],
                              S.props[12],
                              S.props[13],
                              S.props[14],
                              S.props[15],
                            ]),
                        (Y = N);
                    }
                    D <= a
                      ? ((w = new LetterProps(Y, q, $, U, tt, et)),
                        this.renderedLetters.push(w),
                        (D += 1),
                        (this.lettersChangedFlag = !0))
                      : ((w = this.renderedLetters[a]),
                        (this.lettersChangedFlag =
                          w.update(Y, q, $, U, tt, et) ||
                          this.lettersChangedFlag));
                  }
                }
              }),
              (TextAnimatorProperty.prototype.getValue = function () {
                this._elem.globalData.frameId !== this._frameId &&
                  ((this._frameId = this._elem.globalData.frameId),
                  this.iterateDynamicProperties());
              }),
              (TextAnimatorProperty.prototype.mHelper = new Matrix()),
              (TextAnimatorProperty.prototype.defaultPropsArray = []),
              extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
              (ITextElement.prototype.initElement = function (t, e, i) {
                (this.lettersChangedFlag = !0),
                  this.initFrame(),
                  this.initBaseData(t, e, i),
                  (this.textProperty = new TextProperty(
                    this,
                    t.t,
                    this.dynamicProperties
                  )),
                  (this.textAnimator = new TextAnimatorProperty(
                    t.t,
                    this.renderType,
                    this
                  )),
                  this.initTransform(t, e, i),
                  this.initHierarchy(),
                  this.initRenderable(),
                  this.initRendererElement(),
                  this.createContainerElements(),
                  this.createRenderableComponents(),
                  this.createContent(),
                  this.hide(),
                  this.textAnimator.searchProperties(this.dynamicProperties);
              }),
              (ITextElement.prototype.prepareFrame = function (t) {
                (this._mdf = !1),
                  this.prepareRenderableFrame(t),
                  this.prepareProperties(t, this.isInRange),
                  (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
                    (this.buildNewText(),
                    (this.textProperty._isFirstFrame = !1),
                    (this.textProperty._mdf = !1));
              }),
              (ITextElement.prototype.createPathShape = function (t, e) {
                var i,
                  r,
                  a = e.length,
                  n = '';
                for (i = 0; i < a; i += 1)
                  'sh' === e[i].ty &&
                    ((r = e[i].ks.k),
                    (n += buildShapeString(r, r.i.length, !0, t)));
                return n;
              }),
              (ITextElement.prototype.updateDocumentData = function (t, e) {
                this.textProperty.updateDocumentData(t, e);
              }),
              (ITextElement.prototype.canResizeFont = function (t) {
                this.textProperty.canResizeFont(t);
              }),
              (ITextElement.prototype.setMinimumFontSize = function (t) {
                this.textProperty.setMinimumFontSize(t);
              }),
              (ITextElement.prototype.applyTextPropertiesToMatrix = function (
                t,
                e,
                i,
                r,
                a
              ) {
                switch (
                  (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                  e.translate(0, -t.ls, 0),
                  t.j)
                ) {
                  case 1:
                    e.translate(
                      t.justifyOffset + (t.boxWidth - t.lineWidths[i]),
                      0,
                      0
                    );
                    break;
                  case 2:
                    e.translate(
                      t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2,
                      0,
                      0
                    );
                }
                e.translate(r, a, 0);
              }),
              (ITextElement.prototype.buildColor = function (t) {
                return (
                  'rgb(' +
                  Math.round(255 * t[0]) +
                  ',' +
                  Math.round(255 * t[1]) +
                  ',' +
                  Math.round(255 * t[2]) +
                  ')'
                );
              }),
              (ITextElement.prototype.emptyProp = new LetterProps()),
              (ITextElement.prototype.destroy = function () {});
            var emptyShapeData = { shapes: [] };
            function SVGTextLottieElement(t, e, i) {
              (this.textSpans = []),
                (this.renderType = 'svg'),
                this.initElement(t, e, i);
            }
            function ISolidElement(t, e, i) {
              this.initElement(t, e, i);
            }
            function NullElement(t, e, i) {
              this.initFrame(),
                this.initBaseData(t, e, i),
                this.initFrame(),
                this.initTransform(t, e, i),
                this.initHierarchy();
            }
            function SVGRendererBase() {}
            function ICompElement() {}
            function SVGCompElement(t, e, i) {
              (this.layers = t.layers),
                (this.supports3d = !0),
                (this.completeLayers = !1),
                (this.pendingElements = []),
                (this.elements = this.layers
                  ? createSizedArray(this.layers.length)
                  : []),
                this.initElement(t, e, i),
                (this.tm = t.tm
                  ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
                  : { _placeholder: !0 });
            }
            function SVGRenderer(t, e) {
              (this.animationItem = t),
                (this.layers = null),
                (this.renderedFrame = -1),
                (this.svgElement = createNS('svg'));
              var i = '';
              if (e && e.title) {
                var r = createNS('title'),
                  a = createElementID();
                r.setAttribute('id', a),
                  (r.textContent = e.title),
                  this.svgElement.appendChild(r),
                  (i += a);
              }
              if (e && e.description) {
                var n = createNS('desc'),
                  s = createElementID();
                n.setAttribute('id', s),
                  (n.textContent = e.description),
                  this.svgElement.appendChild(n),
                  (i += ' ' + s);
              }
              i && this.svgElement.setAttribute('aria-labelledby', i);
              var o = createNS('defs');
              this.svgElement.appendChild(o);
              var l = createNS('g');
              this.svgElement.appendChild(l),
                (this.layerElement = l),
                (this.renderConfig = {
                  preserveAspectRatio:
                    (e && e.preserveAspectRatio) || 'xMidYMid meet',
                  imagePreserveAspectRatio:
                    (e && e.imagePreserveAspectRatio) || 'xMidYMid slice',
                  contentVisibility: (e && e.contentVisibility) || 'visible',
                  progressiveLoad: (e && e.progressiveLoad) || !1,
                  hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                  viewBoxOnly: (e && e.viewBoxOnly) || !1,
                  viewBoxSize: (e && e.viewBoxSize) || !1,
                  className: (e && e.className) || '',
                  id: (e && e.id) || '',
                  focusable: e && e.focusable,
                  filterSize: {
                    width: (e && e.filterSize && e.filterSize.width) || '100%',
                    height:
                      (e && e.filterSize && e.filterSize.height) || '100%',
                    x: (e && e.filterSize && e.filterSize.x) || '0%',
                    y: (e && e.filterSize && e.filterSize.y) || '0%',
                  },
                  width: e && e.width,
                  height: e && e.height,
                }),
                (this.globalData = {
                  _mdf: !1,
                  frameNum: -1,
                  defs: o,
                  renderConfig: this.renderConfig,
                }),
                (this.elements = []),
                (this.pendingElements = []),
                (this.destroyed = !1),
                (this.rendererType = 'svg');
            }
            function CVContextData() {
              var t;
              for (
                this.saved = [],
                  this.cArrPos = 0,
                  this.cTr = new Matrix(),
                  this.cO = 1,
                  this.savedOp = createTypedArray('float32', 15),
                  t = 0;
                t < 15;
                t += 1
              )
                this.saved[t] = createTypedArray('float32', 16);
              this._length = 15;
            }
            function ShapeTransformManager() {
              (this.sequences = {}),
                (this.sequenceList = []),
                (this.transform_key_count = 0);
            }
            function CVEffects() {}
            function CVMaskElement(t, e) {
              var i;
              (this.data = t),
                (this.element = e),
                (this.masksProperties = this.data.masksProperties || []),
                (this.viewData = createSizedArray(this.masksProperties.length));
              var r = this.masksProperties.length,
                a = !1;
              for (i = 0; i < r; i += 1)
                'n' !== this.masksProperties[i].mode && (a = !0),
                  (this.viewData[i] = ShapePropertyFactory.getShapeProp(
                    this.element,
                    this.masksProperties[i],
                    3
                  ));
              (this.hasMasks = a),
                a && this.element.addRenderableComponent(this);
            }
            function CVBaseElement() {}
            function CVShapeData(t, e, i, r) {
              (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
              var a,
                n = 4;
              'rc' === e.ty
                ? (n = 5)
                : 'el' === e.ty
                  ? (n = 6)
                  : 'sr' === e.ty && (n = 7),
                (this.sh = ShapePropertyFactory.getShapeProp(t, e, n, t));
              var s,
                o = i.length;
              for (a = 0; a < o; a += 1)
                i[a].closed ||
                  ((s = {
                    transforms: r.addTransformSequence(i[a].transforms),
                    trNodes: [],
                  }),
                  this.styledShapes.push(s),
                  i[a].elements.push(s));
            }
            function CVShapeElement(t, e, i) {
              (this.shapes = []),
                (this.shapesData = t.shapes),
                (this.stylesList = []),
                (this.itemsData = []),
                (this.prevViewData = []),
                (this.shapeModifiers = []),
                (this.processedElements = []),
                (this.transformsManager = new ShapeTransformManager()),
                this.initElement(t, e, i);
            }
            function CVTextElement(t, e, i) {
              (this.textSpans = []),
                (this.yOffset = 0),
                (this.fillColorAnim = !1),
                (this.strokeColorAnim = !1),
                (this.strokeWidthAnim = !1),
                (this.stroke = !1),
                (this.fill = !1),
                (this.justifyOffset = 0),
                (this.currentRender = null),
                (this.renderType = 'canvas'),
                (this.values = {
                  fill: 'rgba(0,0,0,0)',
                  stroke: 'rgba(0,0,0,0)',
                  sWidth: 0,
                  fValue: '',
                }),
                this.initElement(t, e, i);
            }
            function CVImageElement(t, e, i) {
              (this.assetData = e.getAssetData(t.refId)),
                (this.img = e.imageLoader.getAsset(this.assetData)),
                this.initElement(t, e, i);
            }
            function CVSolidElement(t, e, i) {
              this.initElement(t, e, i);
            }
            function CanvasRendererBase(t, e) {
              (this.animationItem = t),
                (this.renderConfig = {
                  clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                  context: (e && e.context) || null,
                  progressiveLoad: (e && e.progressiveLoad) || !1,
                  preserveAspectRatio:
                    (e && e.preserveAspectRatio) || 'xMidYMid meet',
                  imagePreserveAspectRatio:
                    (e && e.imagePreserveAspectRatio) || 'xMidYMid slice',
                  contentVisibility: (e && e.contentVisibility) || 'visible',
                  className: (e && e.className) || '',
                  id: (e && e.id) || '',
                }),
                (this.renderConfig.dpr = (e && e.dpr) || 1),
                this.animationItem.wrapper &&
                  (this.renderConfig.dpr =
                    (e && e.dpr) || window.devicePixelRatio || 1),
                (this.renderedFrame = -1),
                (this.globalData = {
                  frameNum: -1,
                  _mdf: !1,
                  renderConfig: this.renderConfig,
                  currentGlobalAlpha: -1,
                }),
                (this.contextData = new CVContextData()),
                (this.elements = []),
                (this.pendingElements = []),
                (this.transformMat = new Matrix()),
                (this.completeLayers = !1),
                (this.rendererType = 'canvas');
            }
            function CVCompElement(t, e, i) {
              (this.completeLayers = !1),
                (this.layers = t.layers),
                (this.pendingElements = []),
                (this.elements = createSizedArray(this.layers.length)),
                this.initElement(t, e, i),
                (this.tm = t.tm
                  ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
                  : { _placeholder: !0 });
            }
            function CanvasRenderer(t, e) {
              (this.animationItem = t),
                (this.renderConfig = {
                  clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                  context: (e && e.context) || null,
                  progressiveLoad: (e && e.progressiveLoad) || !1,
                  preserveAspectRatio:
                    (e && e.preserveAspectRatio) || 'xMidYMid meet',
                  imagePreserveAspectRatio:
                    (e && e.imagePreserveAspectRatio) || 'xMidYMid slice',
                  contentVisibility: (e && e.contentVisibility) || 'visible',
                  className: (e && e.className) || '',
                  id: (e && e.id) || '',
                }),
                (this.renderConfig.dpr = (e && e.dpr) || 1),
                this.animationItem.wrapper &&
                  (this.renderConfig.dpr =
                    (e && e.dpr) || window.devicePixelRatio || 1),
                (this.renderedFrame = -1),
                (this.globalData = {
                  frameNum: -1,
                  _mdf: !1,
                  renderConfig: this.renderConfig,
                  currentGlobalAlpha: -1,
                }),
                (this.contextData = new CVContextData()),
                (this.elements = []),
                (this.pendingElements = []),
                (this.transformMat = new Matrix()),
                (this.completeLayers = !1),
                (this.rendererType = 'canvas');
            }
            function HBaseElement() {}
            function HSolidElement(t, e, i) {
              this.initElement(t, e, i);
            }
            function HShapeElement(t, e, i) {
              (this.shapes = []),
                (this.shapesData = t.shapes),
                (this.stylesList = []),
                (this.shapeModifiers = []),
                (this.itemsData = []),
                (this.processedElements = []),
                (this.animatedContents = []),
                (this.shapesContainer = createNS('g')),
                this.initElement(t, e, i),
                (this.prevViewData = []),
                (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
            }
            function HTextElement(t, e, i) {
              (this.textSpans = []),
                (this.textPaths = []),
                (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
                (this.renderType = 'svg'),
                (this.isMasked = !1),
                this.initElement(t, e, i);
            }
            function HCameraElement(t, e, i) {
              this.initFrame(),
                this.initBaseData(t, e, i),
                this.initHierarchy();
              var r = PropertyFactory.getProp;
              if (
                ((this.pe = r(this, t.pe, 0, 0, this)),
                t.ks.p.s
                  ? ((this.px = r(this, t.ks.p.x, 1, 0, this)),
                    (this.py = r(this, t.ks.p.y, 1, 0, this)),
                    (this.pz = r(this, t.ks.p.z, 1, 0, this)))
                  : (this.p = r(this, t.ks.p, 1, 0, this)),
                t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)),
                t.ks.or.k.length && t.ks.or.k[0].to)
              ) {
                var a,
                  n = t.ks.or.k.length;
                for (a = 0; a < n; a += 1)
                  (t.ks.or.k[a].to = null), (t.ks.or.k[a].ti = null);
              }
              (this.or = r(this, t.ks.or, 1, degToRads, this)),
                (this.or.sh = !0),
                (this.rx = r(this, t.ks.rx, 0, degToRads, this)),
                (this.ry = r(this, t.ks.ry, 0, degToRads, this)),
                (this.rz = r(this, t.ks.rz, 0, degToRads, this)),
                (this.mat = new Matrix()),
                (this._prevMat = new Matrix()),
                (this._isFirstFrame = !0),
                (this.finalTransform = { mProp: this });
            }
            function HImageElement(t, e, i) {
              (this.assetData = e.getAssetData(t.refId)),
                this.initElement(t, e, i);
            }
            function HybridRendererBase(t, e) {
              (this.animationItem = t),
                (this.layers = null),
                (this.renderedFrame = -1),
                (this.renderConfig = {
                  className: (e && e.className) || '',
                  imagePreserveAspectRatio:
                    (e && e.imagePreserveAspectRatio) || 'xMidYMid slice',
                  hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                  filterSize: {
                    width: (e && e.filterSize && e.filterSize.width) || '400%',
                    height:
                      (e && e.filterSize && e.filterSize.height) || '400%',
                    x: (e && e.filterSize && e.filterSize.x) || '-100%',
                    y: (e && e.filterSize && e.filterSize.y) || '-100%',
                  },
                }),
                (this.globalData = {
                  _mdf: !1,
                  frameNum: -1,
                  renderConfig: this.renderConfig,
                }),
                (this.pendingElements = []),
                (this.elements = []),
                (this.threeDElements = []),
                (this.destroyed = !1),
                (this.camera = null),
                (this.supports3d = !0),
                (this.rendererType = 'html');
            }
            function HCompElement(t, e, i) {
              (this.layers = t.layers),
                (this.supports3d = !t.hasMask),
                (this.completeLayers = !1),
                (this.pendingElements = []),
                (this.elements = this.layers
                  ? createSizedArray(this.layers.length)
                  : []),
                this.initElement(t, e, i),
                (this.tm = t.tm
                  ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
                  : { _placeholder: !0 });
            }
            function HybridRenderer(t, e) {
              (this.animationItem = t),
                (this.layers = null),
                (this.renderedFrame = -1),
                (this.renderConfig = {
                  className: (e && e.className) || '',
                  imagePreserveAspectRatio:
                    (e && e.imagePreserveAspectRatio) || 'xMidYMid slice',
                  hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                  filterSize: {
                    width: (e && e.filterSize && e.filterSize.width) || '400%',
                    height:
                      (e && e.filterSize && e.filterSize.height) || '400%',
                    x: (e && e.filterSize && e.filterSize.x) || '-100%',
                    y: (e && e.filterSize && e.filterSize.y) || '-100%',
                  },
                }),
                (this.globalData = {
                  _mdf: !1,
                  frameNum: -1,
                  renderConfig: this.renderConfig,
                }),
                (this.pendingElements = []),
                (this.elements = []),
                (this.threeDElements = []),
                (this.destroyed = !1),
                (this.camera = null),
                (this.supports3d = !0),
                (this.rendererType = 'html');
            }
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
                ITextElement,
              ],
              SVGTextLottieElement
            ),
              (SVGTextLottieElement.prototype.createContent = function () {
                this.data.singleShape &&
                  !this.globalData.fontManager.chars &&
                  (this.textContainer = createNS('text'));
              }),
              (SVGTextLottieElement.prototype.buildTextContents = function (t) {
                for (var e = 0, i = t.length, r = [], a = ''; e < i; )
                  t[e] === String.fromCharCode(13) ||
                  t[e] === String.fromCharCode(3)
                    ? (r.push(a), (a = ''))
                    : (a += t[e]),
                    (e += 1);
                return r.push(a), r;
              }),
              (SVGTextLottieElement.prototype.buildShapeData = function (t, e) {
                if (t.shapes && t.shapes.length) {
                  var i = t.shapes[0];
                  if (i.it) {
                    var r = i.it[i.it.length - 1];
                    r.s && ((r.s.k[0] = e), (r.s.k[1] = e));
                  }
                }
                return t;
              }),
              (SVGTextLottieElement.prototype.buildNewText = function () {
                var t, e;
                this.addDynamicProperty(this);
                var i = this.textProperty.currentData;
                (this.renderedLetters = createSizedArray(i ? i.l.length : 0)),
                  i.fc
                    ? this.layerElement.setAttribute(
                        'fill',
                        this.buildColor(i.fc)
                      )
                    : this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)'),
                  i.sc &&
                    (this.layerElement.setAttribute(
                      'stroke',
                      this.buildColor(i.sc)
                    ),
                    this.layerElement.setAttribute('stroke-width', i.sw)),
                  this.layerElement.setAttribute('font-size', i.finalSize);
                var r = this.globalData.fontManager.getFontByName(i.f);
                if (r.fClass) this.layerElement.setAttribute('class', r.fClass);
                else {
                  this.layerElement.setAttribute('font-family', r.fFamily);
                  var a = i.fWeight,
                    n = i.fStyle;
                  this.layerElement.setAttribute('font-style', n),
                    this.layerElement.setAttribute('font-weight', a);
                }
                this.layerElement.setAttribute('aria-label', i.t);
                var s,
                  o = i.l || [],
                  l = !!this.globalData.fontManager.chars;
                e = o.length;
                var p = this.mHelper,
                  h = this.data.singleShape,
                  c = 0,
                  u = 0,
                  f = !0,
                  m = 0.001 * i.tr * i.finalSize;
                if (!h || l || i.sz) {
                  var d,
                    x = this.textSpans.length;
                  for (t = 0; t < e; t += 1) {
                    if (
                      (this.textSpans[t] ||
                        (this.textSpans[t] = {
                          span: null,
                          childSpan: null,
                          glyph: null,
                        }),
                      !l || !h || 0 === t)
                    ) {
                      if (
                        ((s =
                          x > t
                            ? this.textSpans[t].span
                            : createNS(l ? 'g' : 'text')),
                        x <= t)
                      ) {
                        if (
                          (s.setAttribute('stroke-linecap', 'butt'),
                          s.setAttribute('stroke-linejoin', 'round'),
                          s.setAttribute('stroke-miterlimit', '4'),
                          (this.textSpans[t].span = s),
                          l)
                        ) {
                          var y = createNS('g');
                          s.appendChild(y), (this.textSpans[t].childSpan = y);
                        }
                        (this.textSpans[t].span = s),
                          this.layerElement.appendChild(s);
                      }
                      s.style.display = 'inherit';
                    }
                    if (
                      (p.reset(),
                      h &&
                        (o[t].n &&
                          ((c = -m),
                          (u += i.yOffset),
                          (u += f ? 1 : 0),
                          (f = !1)),
                        this.applyTextPropertiesToMatrix(i, p, o[t].line, c, u),
                        (c += o[t].l || 0),
                        (c += m)),
                      l)
                    ) {
                      var k;
                      if (
                        1 ===
                        (d = this.globalData.fontManager.getCharData(
                          i.finalText[t],
                          r.fStyle,
                          this.globalData.fontManager.getFontByName(i.f).fFamily
                        )).t
                      )
                        k = new SVGCompElement(d.data, this.globalData, this);
                      else {
                        var g = emptyShapeData;
                        d.data &&
                          d.data.shapes &&
                          (g = this.buildShapeData(d.data, i.finalSize)),
                          (k = new SVGShapeElement(g, this.globalData, this));
                      }
                      if (this.textSpans[t].glyph) {
                        var v = this.textSpans[t].glyph;
                        this.textSpans[t].childSpan.removeChild(v.layerElement),
                          v.destroy();
                      }
                      (this.textSpans[t].glyph = k),
                        (k._debug = !0),
                        k.prepareFrame(0),
                        k.renderFrame(),
                        this.textSpans[t].childSpan.appendChild(k.layerElement),
                        1 === d.t &&
                          this.textSpans[t].childSpan.setAttribute(
                            'transform',
                            'scale(' +
                              i.finalSize / 100 +
                              ',' +
                              i.finalSize / 100 +
                              ')'
                          );
                    } else
                      h &&
                        s.setAttribute(
                          'transform',
                          'translate(' + p.props[12] + ',' + p.props[13] + ')'
                        ),
                        (s.textContent = o[t].val),
                        s.setAttributeNS(
                          'http://www.w3.org/XML/1998/namespace',
                          'xml:space',
                          'preserve'
                        );
                  }
                  h && s && s.setAttribute('d', '');
                } else {
                  var _ = this.textContainer,
                    E = 'start';
                  switch (i.j) {
                    case 1:
                      E = 'end';
                      break;
                    case 2:
                      E = 'middle';
                      break;
                    default:
                      E = 'start';
                  }
                  _.setAttribute('text-anchor', E),
                    _.setAttribute('letter-spacing', m);
                  var b = this.buildTextContents(i.finalText);
                  for (
                    e = b.length, u = i.ps ? i.ps[1] + i.ascent : 0, t = 0;
                    t < e;
                    t += 1
                  )
                    ((s =
                      this.textSpans[t].span || createNS('tspan')).textContent =
                      b[t]),
                      s.setAttribute('x', 0),
                      s.setAttribute('y', u),
                      (s.style.display = 'inherit'),
                      _.appendChild(s),
                      this.textSpans[t] ||
                        (this.textSpans[t] = { span: null, glyph: null }),
                      (this.textSpans[t].span = s),
                      (u += i.finalLineHeight);
                  this.layerElement.appendChild(_);
                }
                for (; t < this.textSpans.length; )
                  (this.textSpans[t].span.style.display = 'none'), (t += 1);
                this._sizeChanged = !0;
              }),
              (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
                if (
                  (this.prepareFrame(this.comp.renderedFrame - this.data.st),
                  this.renderInnerContent(),
                  this._sizeChanged)
                ) {
                  this._sizeChanged = !1;
                  var t = this.layerElement.getBBox();
                  this.bbox = {
                    top: t.y,
                    left: t.x,
                    width: t.width,
                    height: t.height,
                  };
                }
                return this.bbox;
              }),
              (SVGTextLottieElement.prototype.getValue = function () {
                var t,
                  e,
                  i = this.textSpans.length;
                for (
                  this.renderedFrame = this.comp.renderedFrame, t = 0;
                  t < i;
                  t += 1
                )
                  (e = this.textSpans[t].glyph) &&
                    (e.prepareFrame(this.comp.renderedFrame - this.data.st),
                    e._mdf && (this._mdf = !0));
              }),
              (SVGTextLottieElement.prototype.renderInnerContent = function () {
                if (
                  (!this.data.singleShape || this._mdf) &&
                  (this.textAnimator.getMeasures(
                    this.textProperty.currentData,
                    this.lettersChangedFlag
                  ),
                  this.lettersChangedFlag ||
                    this.textAnimator.lettersChangedFlag)
                ) {
                  var t, e;
                  this._sizeChanged = !0;
                  var i,
                    r,
                    a,
                    n = this.textAnimator.renderedLetters,
                    s = this.textProperty.currentData.l;
                  for (e = s.length, t = 0; t < e; t += 1)
                    s[t].n ||
                      ((i = n[t]),
                      (r = this.textSpans[t].span),
                      (a = this.textSpans[t].glyph) && a.renderFrame(),
                      i._mdf.m && r.setAttribute('transform', i.m),
                      i._mdf.o && r.setAttribute('opacity', i.o),
                      i._mdf.sw && r.setAttribute('stroke-width', i.sw),
                      i._mdf.sc && r.setAttribute('stroke', i.sc),
                      i._mdf.fc && r.setAttribute('fill', i.fc));
                }
              }),
              extendPrototype([IImageElement], ISolidElement),
              (ISolidElement.prototype.createContent = function () {
                var t = createNS('rect');
                t.setAttribute('width', this.data.sw),
                  t.setAttribute('height', this.data.sh),
                  t.setAttribute('fill', this.data.sc),
                  this.layerElement.appendChild(t);
              }),
              (NullElement.prototype.prepareFrame = function (t) {
                this.prepareProperties(t, !0);
              }),
              (NullElement.prototype.renderFrame = function () {}),
              (NullElement.prototype.getBaseElement = function () {
                return null;
              }),
              (NullElement.prototype.destroy = function () {}),
              (NullElement.prototype.sourceRectAtTime = function () {}),
              (NullElement.prototype.hide = function () {}),
              extendPrototype(
                [BaseElement, TransformElement, HierarchyElement, FrameElement],
                NullElement
              ),
              extendPrototype([BaseRenderer], SVGRendererBase),
              (SVGRendererBase.prototype.createNull = function (t) {
                return new NullElement(t, this.globalData, this);
              }),
              (SVGRendererBase.prototype.createShape = function (t) {
                return new SVGShapeElement(t, this.globalData, this);
              }),
              (SVGRendererBase.prototype.createText = function (t) {
                return new SVGTextLottieElement(t, this.globalData, this);
              }),
              (SVGRendererBase.prototype.createImage = function (t) {
                return new IImageElement(t, this.globalData, this);
              }),
              (SVGRendererBase.prototype.createSolid = function (t) {
                return new ISolidElement(t, this.globalData, this);
              }),
              (SVGRendererBase.prototype.configAnimation = function (t) {
                this.svgElement.setAttribute(
                  'xmlns',
                  'http://www.w3.org/2000/svg'
                ),
                  this.renderConfig.viewBoxSize
                    ? this.svgElement.setAttribute(
                        'viewBox',
                        this.renderConfig.viewBoxSize
                      )
                    : this.svgElement.setAttribute(
                        'viewBox',
                        '0 0 ' + t.w + ' ' + t.h
                      ),
                  this.renderConfig.viewBoxOnly ||
                    (this.svgElement.setAttribute('width', t.w),
                    this.svgElement.setAttribute('height', t.h),
                    (this.svgElement.style.width = '100%'),
                    (this.svgElement.style.height = '100%'),
                    (this.svgElement.style.transform = 'translate3d(0,0,0)'),
                    (this.svgElement.style.contentVisibility =
                      this.renderConfig.contentVisibility)),
                  this.renderConfig.width &&
                    this.svgElement.setAttribute(
                      'width',
                      this.renderConfig.width
                    ),
                  this.renderConfig.height &&
                    this.svgElement.setAttribute(
                      'height',
                      this.renderConfig.height
                    ),
                  this.renderConfig.className &&
                    this.svgElement.setAttribute(
                      'class',
                      this.renderConfig.className
                    ),
                  this.renderConfig.id &&
                    this.svgElement.setAttribute('id', this.renderConfig.id),
                  void 0 !== this.renderConfig.focusable &&
                    this.svgElement.setAttribute(
                      'focusable',
                      this.renderConfig.focusable
                    ),
                  this.svgElement.setAttribute(
                    'preserveAspectRatio',
                    this.renderConfig.preserveAspectRatio
                  ),
                  this.animationItem.wrapper.appendChild(this.svgElement);
                var e = this.globalData.defs;
                this.setupGlobalData(t, e),
                  (this.globalData.progressiveLoad =
                    this.renderConfig.progressiveLoad),
                  (this.data = t);
                var i = createNS('clipPath'),
                  r = createNS('rect');
                r.setAttribute('width', t.w),
                  r.setAttribute('height', t.h),
                  r.setAttribute('x', 0),
                  r.setAttribute('y', 0);
                var a = createElementID();
                i.setAttribute('id', a),
                  i.appendChild(r),
                  this.layerElement.setAttribute(
                    'clip-path',
                    'url(' + getLocationHref() + '#' + a + ')'
                  ),
                  e.appendChild(i),
                  (this.layers = t.layers),
                  (this.elements = createSizedArray(t.layers.length));
              }),
              (SVGRendererBase.prototype.destroy = function () {
                var t;
                this.animationItem.wrapper &&
                  (this.animationItem.wrapper.innerText = ''),
                  (this.layerElement = null),
                  (this.globalData.defs = null);
                var e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t += 1)
                  this.elements[t] && this.elements[t].destroy();
                (this.elements.length = 0),
                  (this.destroyed = !0),
                  (this.animationItem = null);
              }),
              (SVGRendererBase.prototype.updateContainerSize = function () {}),
              (SVGRendererBase.prototype.buildItem = function (t) {
                var e = this.elements;
                if (!e[t] && 99 !== this.layers[t].ty) {
                  e[t] = !0;
                  var i = this.createItem(this.layers[t]);
                  (e[t] = i),
                    getExpressionsPlugin() &&
                      (0 === this.layers[t].ty &&
                        this.globalData.projectInterface.registerComposition(i),
                      i.initExpressions()),
                    this.appendElementInPos(i, t),
                    this.layers[t].tt &&
                      (this.elements[t - 1] && !0 !== this.elements[t - 1]
                        ? i.setMatte(e[t - 1].layerId)
                        : (this.buildItem(t - 1), this.addPendingElement(i)));
                }
              }),
              (SVGRendererBase.prototype.checkPendingElements = function () {
                for (; this.pendingElements.length; ) {
                  var t = this.pendingElements.pop();
                  if ((t.checkParenting(), t.data.tt))
                    for (var e = 0, i = this.elements.length; e < i; ) {
                      if (this.elements[e] === t) {
                        t.setMatte(this.elements[e - 1].layerId);
                        break;
                      }
                      e += 1;
                    }
                }
              }),
              (SVGRendererBase.prototype.renderFrame = function (t) {
                if (this.renderedFrame !== t && !this.destroyed) {
                  var e;
                  null === t
                    ? (t = this.renderedFrame)
                    : (this.renderedFrame = t),
                    (this.globalData.frameNum = t),
                    (this.globalData.frameId += 1),
                    (this.globalData.projectInterface.currentFrame = t),
                    (this.globalData._mdf = !1);
                  var i = this.layers.length;
                  for (
                    this.completeLayers || this.checkLayers(t), e = i - 1;
                    e >= 0;
                    e -= 1
                  )
                    (this.completeLayers || this.elements[e]) &&
                      this.elements[e].prepareFrame(t - this.layers[e].st);
                  if (this.globalData._mdf)
                    for (e = 0; e < i; e += 1)
                      (this.completeLayers || this.elements[e]) &&
                        this.elements[e].renderFrame();
                }
              }),
              (SVGRendererBase.prototype.appendElementInPos = function (t, e) {
                var i = t.getBaseElement();
                if (i) {
                  for (var r, a = 0; a < e; )
                    this.elements[a] &&
                      !0 !== this.elements[a] &&
                      this.elements[a].getBaseElement() &&
                      (r = this.elements[a].getBaseElement()),
                      (a += 1);
                  r
                    ? this.layerElement.insertBefore(i, r)
                    : this.layerElement.appendChild(i);
                }
              }),
              (SVGRendererBase.prototype.hide = function () {
                this.layerElement.style.display = 'none';
              }),
              (SVGRendererBase.prototype.show = function () {
                this.layerElement.style.display = 'block';
              }),
              extendPrototype(
                [
                  BaseElement,
                  TransformElement,
                  HierarchyElement,
                  FrameElement,
                  RenderableDOMElement,
                ],
                ICompElement
              ),
              (ICompElement.prototype.initElement = function (t, e, i) {
                this.initFrame(),
                  this.initBaseData(t, e, i),
                  this.initTransform(t, e, i),
                  this.initRenderable(),
                  this.initHierarchy(),
                  this.initRendererElement(),
                  this.createContainerElements(),
                  this.createRenderableComponents(),
                  (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
                  this.hide();
              }),
              (ICompElement.prototype.prepareFrame = function (t) {
                if (
                  ((this._mdf = !1),
                  this.prepareRenderableFrame(t),
                  this.prepareProperties(t, this.isInRange),
                  this.isInRange || this.data.xt)
                ) {
                  if (this.tm._placeholder)
                    this.renderedFrame = t / this.data.sr;
                  else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1),
                      (this.renderedFrame = e);
                  }
                  var i,
                    r = this.elements.length;
                  for (
                    this.completeLayers || this.checkLayers(this.renderedFrame),
                      i = r - 1;
                    i >= 0;
                    i -= 1
                  )
                    (this.completeLayers || this.elements[i]) &&
                      (this.elements[i].prepareFrame(
                        this.renderedFrame - this.layers[i].st
                      ),
                      this.elements[i]._mdf && (this._mdf = !0));
                }
              }),
              (ICompElement.prototype.renderInnerContent = function () {
                var t,
                  e = this.layers.length;
                for (t = 0; t < e; t += 1)
                  (this.completeLayers || this.elements[t]) &&
                    this.elements[t].renderFrame();
              }),
              (ICompElement.prototype.setElements = function (t) {
                this.elements = t;
              }),
              (ICompElement.prototype.getElements = function () {
                return this.elements;
              }),
              (ICompElement.prototype.destroyElements = function () {
                var t,
                  e = this.layers.length;
                for (t = 0; t < e; t += 1)
                  this.elements[t] && this.elements[t].destroy();
              }),
              (ICompElement.prototype.destroy = function () {
                this.destroyElements(), this.destroyBaseElement();
              }),
              extendPrototype(
                [SVGRendererBase, ICompElement, SVGBaseElement],
                SVGCompElement
              ),
              (SVGCompElement.prototype.createComp = function (t) {
                return new SVGCompElement(t, this.globalData, this);
              }),
              extendPrototype([SVGRendererBase], SVGRenderer),
              (SVGRenderer.prototype.createComp = function (t) {
                return new SVGCompElement(t, this.globalData, this);
              }),
              (CVContextData.prototype.duplicate = function () {
                var t = 2 * this._length,
                  e = this.savedOp;
                (this.savedOp = createTypedArray('float32', t)),
                  this.savedOp.set(e);
                var i = 0;
                for (i = this._length; i < t; i += 1)
                  this.saved[i] = createTypedArray('float32', 16);
                this._length = t;
              }),
              (CVContextData.prototype.reset = function () {
                (this.cArrPos = 0), this.cTr.reset(), (this.cO = 1);
              }),
              (ShapeTransformManager.prototype = {
                addTransformSequence: function (t) {
                  var e,
                    i = t.length,
                    r = '_';
                  for (e = 0; e < i; e += 1) r += t[e].transform.key + '_';
                  var a = this.sequences[r];
                  return (
                    a ||
                      ((a = {
                        transforms: [].concat(t),
                        finalTransform: new Matrix(),
                        _mdf: !1,
                      }),
                      (this.sequences[r] = a),
                      this.sequenceList.push(a)),
                    a
                  );
                },
                processSequence: function (t, e) {
                  for (
                    var i, r = 0, a = t.transforms.length, n = e;
                    r < a && !e;

                  ) {
                    if (t.transforms[r].transform.mProps._mdf) {
                      n = !0;
                      break;
                    }
                    r += 1;
                  }
                  if (n)
                    for (t.finalTransform.reset(), r = a - 1; r >= 0; r -= 1)
                      (i = t.transforms[r].transform.mProps.v.props),
                        t.finalTransform.transform(
                          i[0],
                          i[1],
                          i[2],
                          i[3],
                          i[4],
                          i[5],
                          i[6],
                          i[7],
                          i[8],
                          i[9],
                          i[10],
                          i[11],
                          i[12],
                          i[13],
                          i[14],
                          i[15]
                        );
                  t._mdf = n;
                },
                processSequences: function (t) {
                  var e,
                    i = this.sequenceList.length;
                  for (e = 0; e < i; e += 1)
                    this.processSequence(this.sequenceList[e], t);
                },
                getNewKey: function () {
                  return (
                    (this.transform_key_count += 1),
                    '_' + this.transform_key_count
                  );
                },
              }),
              (CVEffects.prototype.renderFrame = function () {}),
              (CVMaskElement.prototype.renderFrame = function () {
                if (this.hasMasks) {
                  var t,
                    e,
                    i,
                    r,
                    a = this.element.finalTransform.mat,
                    n = this.element.canvasContext,
                    s = this.masksProperties.length;
                  for (n.beginPath(), t = 0; t < s; t += 1)
                    if ('n' !== this.masksProperties[t].mode) {
                      var o;
                      this.masksProperties[t].inv &&
                        (n.moveTo(0, 0),
                        n.lineTo(this.element.globalData.compSize.w, 0),
                        n.lineTo(
                          this.element.globalData.compSize.w,
                          this.element.globalData.compSize.h
                        ),
                        n.lineTo(0, this.element.globalData.compSize.h),
                        n.lineTo(0, 0)),
                        (r = this.viewData[t].v),
                        (e = a.applyToPointArray(r.v[0][0], r.v[0][1], 0)),
                        n.moveTo(e[0], e[1]);
                      var l = r._length;
                      for (o = 1; o < l; o += 1)
                        (i = a.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o])),
                          n.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                      (i = a.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0])),
                        n.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                    }
                  this.element.globalData.renderer.save(!0), n.clip();
                }
              }),
              (CVMaskElement.prototype.getMaskProperty =
                MaskElement.prototype.getMaskProperty),
              (CVMaskElement.prototype.destroy = function () {
                this.element = null;
              }),
              (CVBaseElement.prototype = {
                createElements: function () {},
                initRendererElement: function () {},
                createContainerElements: function () {
                  (this.canvasContext = this.globalData.canvasContext),
                    (this.renderableEffectsManager = new CVEffects(this));
                },
                createContent: function () {},
                setBlendMode: function () {
                  var t = this.globalData;
                  if (t.blendMode !== this.data.bm) {
                    t.blendMode = this.data.bm;
                    var e = getBlendMode(this.data.bm);
                    t.canvasContext.globalCompositeOperation = e;
                  }
                },
                createRenderableComponents: function () {
                  this.maskManager = new CVMaskElement(this.data, this);
                },
                hideElement: function () {
                  this.hidden ||
                    (this.isInRange && !this.isTransparent) ||
                    (this.hidden = !0);
                },
                showElement: function () {
                  this.isInRange &&
                    !this.isTransparent &&
                    ((this.hidden = !1),
                    (this._isFirstFrame = !0),
                    (this.maskManager._isFirstFrame = !0));
                },
                renderFrame: function () {
                  if (!this.hidden && !this.data.hd) {
                    this.renderTransform(),
                      this.renderRenderable(),
                      this.setBlendMode();
                    var t = 0 === this.data.ty;
                    this.globalData.renderer.save(t),
                      this.globalData.renderer.ctxTransform(
                        this.finalTransform.mat.props
                      ),
                      this.globalData.renderer.ctxOpacity(
                        this.finalTransform.mProp.o.v
                      ),
                      this.renderInnerContent(),
                      this.globalData.renderer.restore(t),
                      this.maskManager.hasMasks &&
                        this.globalData.renderer.restore(!0),
                      this._isFirstFrame && (this._isFirstFrame = !1);
                  }
                },
                destroy: function () {
                  (this.canvasContext = null),
                    (this.data = null),
                    (this.globalData = null),
                    this.maskManager.destroy();
                },
                mHelper: new Matrix(),
              }),
              (CVBaseElement.prototype.hide =
                CVBaseElement.prototype.hideElement),
              (CVBaseElement.prototype.show =
                CVBaseElement.prototype.showElement),
              (CVShapeData.prototype.setAsAnimated =
                SVGShapeData.prototype.setAsAnimated),
              extendPrototype(
                [
                  BaseElement,
                  TransformElement,
                  CVBaseElement,
                  IShapeElement,
                  HierarchyElement,
                  FrameElement,
                  RenderableElement,
                ],
                CVShapeElement
              ),
              (CVShapeElement.prototype.initElement =
                RenderableDOMElement.prototype.initElement),
              (CVShapeElement.prototype.transformHelper = {
                opacity: 1,
                _opMdf: !1,
              }),
              (CVShapeElement.prototype.dashResetter = []),
              (CVShapeElement.prototype.createContent = function () {
                this.searchShapes(
                  this.shapesData,
                  this.itemsData,
                  this.prevViewData,
                  !0,
                  []
                );
              }),
              (CVShapeElement.prototype.createStyleElement = function (t, e) {
                var i = {
                    data: t,
                    type: t.ty,
                    preTransforms:
                      this.transformsManager.addTransformSequence(e),
                    transforms: [],
                    elements: [],
                    closed: !0 === t.hd,
                  },
                  r = {};
                if (
                  ('fl' === t.ty || 'st' === t.ty
                    ? ((r.c = PropertyFactory.getProp(this, t.c, 1, 255, this)),
                      r.c.k ||
                        (i.co =
                          'rgb(' +
                          bmFloor(r.c.v[0]) +
                          ',' +
                          bmFloor(r.c.v[1]) +
                          ',' +
                          bmFloor(r.c.v[2]) +
                          ')'))
                    : ('gf' !== t.ty && 'gs' !== t.ty) ||
                      ((r.s = PropertyFactory.getProp(
                        this,
                        t.s,
                        1,
                        null,
                        this
                      )),
                      (r.e = PropertyFactory.getProp(this, t.e, 1, null, this)),
                      (r.h = PropertyFactory.getProp(
                        this,
                        t.h || { k: 0 },
                        0,
                        0.01,
                        this
                      )),
                      (r.a = PropertyFactory.getProp(
                        this,
                        t.a || { k: 0 },
                        0,
                        degToRads,
                        this
                      )),
                      (r.g = new GradientProperty(this, t.g, this))),
                  (r.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this)),
                  'st' === t.ty || 'gs' === t.ty)
                ) {
                  if (
                    ((i.lc = lineCapEnum[t.lc || 2]),
                    (i.lj = lineJoinEnum[t.lj || 2]),
                    1 == t.lj && (i.ml = t.ml),
                    (r.w = PropertyFactory.getProp(this, t.w, 0, null, this)),
                    r.w.k || (i.wi = r.w.v),
                    t.d)
                  ) {
                    var a = new DashProperty(this, t.d, 'canvas', this);
                    (r.d = a),
                      r.d.k ||
                        ((i.da = r.d.dashArray), (i.do = r.d.dashoffset[0]));
                  }
                } else i.r = 2 === t.r ? 'evenodd' : 'nonzero';
                return this.stylesList.push(i), (r.style = i), r;
              }),
              (CVShapeElement.prototype.createGroupElement = function () {
                return { it: [], prevViewData: [] };
              }),
              (CVShapeElement.prototype.createTransformElement = function (t) {
                return {
                  transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(
                      this,
                      t,
                      this
                    ),
                  },
                };
              }),
              (CVShapeElement.prototype.createShapeElement = function (t) {
                var e = new CVShapeData(
                  this,
                  t,
                  this.stylesList,
                  this.transformsManager
                );
                return this.shapes.push(e), this.addShapeToModifiers(e), e;
              }),
              (CVShapeElement.prototype.reloadShapes = function () {
                var t;
                this._isFirstFrame = !0;
                var e = this.itemsData.length;
                for (t = 0; t < e; t += 1)
                  this.prevViewData[t] = this.itemsData[t];
                for (
                  this.searchShapes(
                    this.shapesData,
                    this.itemsData,
                    this.prevViewData,
                    !0,
                    []
                  ),
                    e = this.dynamicProperties.length,
                    t = 0;
                  t < e;
                  t += 1
                )
                  this.dynamicProperties[t].getValue();
                this.renderModifiers(),
                  this.transformsManager.processSequences(this._isFirstFrame);
              }),
              (CVShapeElement.prototype.addTransformToStyleList = function (t) {
                var e,
                  i = this.stylesList.length;
                for (e = 0; e < i; e += 1)
                  this.stylesList[e].closed ||
                    this.stylesList[e].transforms.push(t);
              }),
              (CVShapeElement.prototype.removeTransformFromStyleList =
                function () {
                  var t,
                    e = this.stylesList.length;
                  for (t = 0; t < e; t += 1)
                    this.stylesList[t].closed ||
                      this.stylesList[t].transforms.pop();
                }),
              (CVShapeElement.prototype.closeStyles = function (t) {
                var e,
                  i = t.length;
                for (e = 0; e < i; e += 1) t[e].closed = !0;
              }),
              (CVShapeElement.prototype.searchShapes = function (
                t,
                e,
                i,
                r,
                a
              ) {
                var n,
                  s,
                  o,
                  l,
                  p,
                  h,
                  c = t.length - 1,
                  u = [],
                  f = [],
                  m = [].concat(a);
                for (n = c; n >= 0; n -= 1) {
                  if (
                    ((l = this.searchProcessedElement(t[n]))
                      ? (e[n] = i[l - 1])
                      : (t[n]._shouldRender = r),
                    'fl' === t[n].ty ||
                      'st' === t[n].ty ||
                      'gf' === t[n].ty ||
                      'gs' === t[n].ty)
                  )
                    l
                      ? (e[n].style.closed = !1)
                      : (e[n] = this.createStyleElement(t[n], m)),
                      u.push(e[n].style);
                  else if ('gr' === t[n].ty) {
                    if (l)
                      for (o = e[n].it.length, s = 0; s < o; s += 1)
                        e[n].prevViewData[s] = e[n].it[s];
                    else e[n] = this.createGroupElement(t[n]);
                    this.searchShapes(
                      t[n].it,
                      e[n].it,
                      e[n].prevViewData,
                      r,
                      m
                    );
                  } else
                    'tr' === t[n].ty
                      ? (l ||
                          ((h = this.createTransformElement(t[n])), (e[n] = h)),
                        m.push(e[n]),
                        this.addTransformToStyleList(e[n]))
                      : 'sh' === t[n].ty ||
                          'rc' === t[n].ty ||
                          'el' === t[n].ty ||
                          'sr' === t[n].ty
                        ? l || (e[n] = this.createShapeElement(t[n]))
                        : 'tm' === t[n].ty ||
                            'rd' === t[n].ty ||
                            'pb' === t[n].ty
                          ? (l
                              ? ((p = e[n]).closed = !1)
                              : ((p = ShapeModifiers.getModifier(t[n].ty)).init(
                                  this,
                                  t[n]
                                ),
                                (e[n] = p),
                                this.shapeModifiers.push(p)),
                            f.push(p))
                          : 'rp' === t[n].ty &&
                            (l
                              ? ((p = e[n]).closed = !0)
                              : ((p = ShapeModifiers.getModifier(t[n].ty)),
                                (e[n] = p),
                                p.init(this, t, n, e),
                                this.shapeModifiers.push(p),
                                (r = !1)),
                            f.push(p));
                  this.addProcessedElement(t[n], n + 1);
                }
                for (
                  this.removeTransformFromStyleList(),
                    this.closeStyles(u),
                    c = f.length,
                    n = 0;
                  n < c;
                  n += 1
                )
                  f[n].closed = !0;
              }),
              (CVShapeElement.prototype.renderInnerContent = function () {
                (this.transformHelper.opacity = 1),
                  (this.transformHelper._opMdf = !1),
                  this.renderModifiers(),
                  this.transformsManager.processSequences(this._isFirstFrame),
                  this.renderShape(
                    this.transformHelper,
                    this.shapesData,
                    this.itemsData,
                    !0
                  );
              }),
              (CVShapeElement.prototype.renderShapeTransform = function (t, e) {
                (t._opMdf || e.op._mdf || this._isFirstFrame) &&
                  ((e.opacity = t.opacity),
                  (e.opacity *= e.op.v),
                  (e._opMdf = !0));
              }),
              (CVShapeElement.prototype.drawLayer = function () {
                var t,
                  e,
                  i,
                  r,
                  a,
                  n,
                  s,
                  o,
                  l,
                  p = this.stylesList.length,
                  h = this.globalData.renderer,
                  c = this.globalData.canvasContext;
                for (t = 0; t < p; t += 1)
                  if (
                    (('st' !== (o = (l = this.stylesList[t]).type) &&
                      'gs' !== o) ||
                      0 !== l.wi) &&
                    l.data._shouldRender &&
                    0 !== l.coOp &&
                    0 !== this.globalData.currentGlobalAlpha
                  ) {
                    for (
                      h.save(),
                        n = l.elements,
                        'st' === o || 'gs' === o
                          ? ((c.strokeStyle = 'st' === o ? l.co : l.grd),
                            (c.lineWidth = l.wi),
                            (c.lineCap = l.lc),
                            (c.lineJoin = l.lj),
                            (c.miterLimit = l.ml || 0))
                          : (c.fillStyle = 'fl' === o ? l.co : l.grd),
                        h.ctxOpacity(l.coOp),
                        'st' !== o && 'gs' !== o && c.beginPath(),
                        h.ctxTransform(l.preTransforms.finalTransform.props),
                        i = n.length,
                        e = 0;
                      e < i;
                      e += 1
                    ) {
                      for (
                        ('st' !== o && 'gs' !== o) ||
                          (c.beginPath(),
                          l.da &&
                            (c.setLineDash(l.da), (c.lineDashOffset = l.do))),
                          a = (s = n[e].trNodes).length,
                          r = 0;
                        r < a;
                        r += 1
                      )
                        'm' === s[r].t
                          ? c.moveTo(s[r].p[0], s[r].p[1])
                          : 'c' === s[r].t
                            ? c.bezierCurveTo(
                                s[r].pts[0],
                                s[r].pts[1],
                                s[r].pts[2],
                                s[r].pts[3],
                                s[r].pts[4],
                                s[r].pts[5]
                              )
                            : c.closePath();
                      ('st' !== o && 'gs' !== o) ||
                        (c.stroke(), l.da && c.setLineDash(this.dashResetter));
                    }
                    'st' !== o && 'gs' !== o && c.fill(l.r), h.restore();
                  }
              }),
              (CVShapeElement.prototype.renderShape = function (t, e, i, r) {
                var a, n;
                for (n = t, a = e.length - 1; a >= 0; a -= 1)
                  'tr' === e[a].ty
                    ? ((n = i[a].transform), this.renderShapeTransform(t, n))
                    : 'sh' === e[a].ty ||
                        'el' === e[a].ty ||
                        'rc' === e[a].ty ||
                        'sr' === e[a].ty
                      ? this.renderPath(e[a], i[a])
                      : 'fl' === e[a].ty
                        ? this.renderFill(e[a], i[a], n)
                        : 'st' === e[a].ty
                          ? this.renderStroke(e[a], i[a], n)
                          : 'gf' === e[a].ty || 'gs' === e[a].ty
                            ? this.renderGradientFill(e[a], i[a], n)
                            : 'gr' === e[a].ty
                              ? this.renderShape(n, e[a].it, i[a].it)
                              : e[a].ty;
                r && this.drawLayer();
              }),
              (CVShapeElement.prototype.renderStyledShape = function (t, e) {
                if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                  var i,
                    r,
                    a,
                    n = t.trNodes,
                    s = e.paths,
                    o = s._length;
                  n.length = 0;
                  var l = t.transforms.finalTransform;
                  for (a = 0; a < o; a += 1) {
                    var p = s.shapes[a];
                    if (p && p.v) {
                      for (r = p._length, i = 1; i < r; i += 1)
                        1 === i &&
                          n.push({
                            t: 'm',
                            p: l.applyToPointArray(p.v[0][0], p.v[0][1], 0),
                          }),
                          n.push({
                            t: 'c',
                            pts: l.applyToTriplePoints(
                              p.o[i - 1],
                              p.i[i],
                              p.v[i]
                            ),
                          });
                      1 === r &&
                        n.push({
                          t: 'm',
                          p: l.applyToPointArray(p.v[0][0], p.v[0][1], 0),
                        }),
                        p.c &&
                          r &&
                          (n.push({
                            t: 'c',
                            pts: l.applyToTriplePoints(
                              p.o[i - 1],
                              p.i[0],
                              p.v[0]
                            ),
                          }),
                          n.push({ t: 'z' }));
                    }
                  }
                  t.trNodes = n;
                }
              }),
              (CVShapeElement.prototype.renderPath = function (t, e) {
                if (!0 !== t.hd && t._shouldRender) {
                  var i,
                    r = e.styledShapes.length;
                  for (i = 0; i < r; i += 1)
                    this.renderStyledShape(e.styledShapes[i], e.sh);
                }
              }),
              (CVShapeElement.prototype.renderFill = function (t, e, i) {
                var r = e.style;
                (e.c._mdf || this._isFirstFrame) &&
                  (r.co =
                    'rgb(' +
                    bmFloor(e.c.v[0]) +
                    ',' +
                    bmFloor(e.c.v[1]) +
                    ',' +
                    bmFloor(e.c.v[2]) +
                    ')'),
                  (e.o._mdf || i._opMdf || this._isFirstFrame) &&
                    (r.coOp = e.o.v * i.opacity);
              }),
              (CVShapeElement.prototype.renderGradientFill = function (
                t,
                e,
                i
              ) {
                var r,
                  a = e.style;
                if (
                  !a.grd ||
                  e.g._mdf ||
                  e.s._mdf ||
                  e.e._mdf ||
                  (1 !== t.t && (e.h._mdf || e.a._mdf))
                ) {
                  var n,
                    s = this.globalData.canvasContext,
                    o = e.s.v,
                    l = e.e.v;
                  if (1 === t.t)
                    r = s.createLinearGradient(o[0], o[1], l[0], l[1]);
                  else {
                    var p = Math.sqrt(
                        Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)
                      ),
                      h = Math.atan2(l[1] - o[1], l[0] - o[0]),
                      c = e.h.v;
                    c >= 1 ? (c = 0.99) : c <= -1 && (c = -0.99);
                    var u = p * c,
                      f = Math.cos(h + e.a.v) * u + o[0],
                      m = Math.sin(h + e.a.v) * u + o[1];
                    r = s.createRadialGradient(f, m, 0, o[0], o[1], p);
                  }
                  var d = t.g.p,
                    x = e.g.c,
                    y = 1;
                  for (n = 0; n < d; n += 1)
                    e.g._hasOpacity &&
                      e.g._collapsable &&
                      (y = e.g.o[2 * n + 1]),
                      r.addColorStop(
                        x[4 * n] / 100,
                        'rgba(' +
                          x[4 * n + 1] +
                          ',' +
                          x[4 * n + 2] +
                          ',' +
                          x[4 * n + 3] +
                          ',' +
                          y +
                          ')'
                      );
                  a.grd = r;
                }
                a.coOp = e.o.v * i.opacity;
              }),
              (CVShapeElement.prototype.renderStroke = function (t, e, i) {
                var r = e.style,
                  a = e.d;
                a &&
                  (a._mdf || this._isFirstFrame) &&
                  ((r.da = a.dashArray), (r.do = a.dashoffset[0])),
                  (e.c._mdf || this._isFirstFrame) &&
                    (r.co =
                      'rgb(' +
                      bmFloor(e.c.v[0]) +
                      ',' +
                      bmFloor(e.c.v[1]) +
                      ',' +
                      bmFloor(e.c.v[2]) +
                      ')'),
                  (e.o._mdf || i._opMdf || this._isFirstFrame) &&
                    (r.coOp = e.o.v * i.opacity),
                  (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v);
              }),
              (CVShapeElement.prototype.destroy = function () {
                (this.shapesData = null),
                  (this.globalData = null),
                  (this.canvasContext = null),
                  (this.stylesList.length = 0),
                  (this.itemsData.length = 0);
              }),
              extendPrototype(
                [
                  BaseElement,
                  TransformElement,
                  CVBaseElement,
                  HierarchyElement,
                  FrameElement,
                  RenderableElement,
                  ITextElement,
                ],
                CVTextElement
              ),
              (CVTextElement.prototype.tHelper =
                createTag('canvas').getContext('2d')),
              (CVTextElement.prototype.buildNewText = function () {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = !1;
                t.fc
                  ? ((e = !0), (this.values.fill = this.buildColor(t.fc)))
                  : (this.values.fill = 'rgba(0,0,0,0)'),
                  (this.fill = e);
                var i = !1;
                t.sc &&
                  ((i = !0),
                  (this.values.stroke = this.buildColor(t.sc)),
                  (this.values.sWidth = t.sw));
                var r,
                  a,
                  n,
                  s,
                  o,
                  l,
                  p,
                  h,
                  c,
                  u,
                  f,
                  m,
                  d = this.globalData.fontManager.getFontByName(t.f),
                  x = t.l,
                  y = this.mHelper;
                (this.stroke = i),
                  (this.values.fValue =
                    t.finalSize +
                    'px ' +
                    this.globalData.fontManager.getFontByName(t.f).fFamily),
                  (a = t.finalText.length);
                var k = this.data.singleShape,
                  g = 0.001 * t.tr * t.finalSize,
                  v = 0,
                  _ = 0,
                  E = !0,
                  b = 0;
                for (r = 0; r < a; r += 1) {
                  (s =
                    ((n = this.globalData.fontManager.getCharData(
                      t.finalText[r],
                      d.fStyle,
                      this.globalData.fontManager.getFontByName(t.f).fFamily
                    )) &&
                      n.data) ||
                    {}),
                    y.reset(),
                    k &&
                      x[r].n &&
                      ((v = -g), (_ += t.yOffset), (_ += E ? 1 : 0), (E = !1)),
                    (c = (p = s.shapes ? s.shapes[0].it : []).length),
                    y.scale(t.finalSize / 100, t.finalSize / 100),
                    k &&
                      this.applyTextPropertiesToMatrix(t, y, x[r].line, v, _),
                    (f = createSizedArray(c - 1));
                  var S = 0;
                  for (h = 0; h < c; h += 1)
                    if ('sh' === p[h].ty) {
                      for (
                        l = p[h].ks.k.i.length, u = p[h].ks.k, m = [], o = 1;
                        o < l;
                        o += 1
                      )
                        1 === o &&
                          m.push(
                            y.applyToX(u.v[0][0], u.v[0][1], 0),
                            y.applyToY(u.v[0][0], u.v[0][1], 0)
                          ),
                          m.push(
                            y.applyToX(u.o[o - 1][0], u.o[o - 1][1], 0),
                            y.applyToY(u.o[o - 1][0], u.o[o - 1][1], 0),
                            y.applyToX(u.i[o][0], u.i[o][1], 0),
                            y.applyToY(u.i[o][0], u.i[o][1], 0),
                            y.applyToX(u.v[o][0], u.v[o][1], 0),
                            y.applyToY(u.v[o][0], u.v[o][1], 0)
                          );
                      m.push(
                        y.applyToX(u.o[o - 1][0], u.o[o - 1][1], 0),
                        y.applyToY(u.o[o - 1][0], u.o[o - 1][1], 0),
                        y.applyToX(u.i[0][0], u.i[0][1], 0),
                        y.applyToY(u.i[0][0], u.i[0][1], 0),
                        y.applyToX(u.v[0][0], u.v[0][1], 0),
                        y.applyToY(u.v[0][0], u.v[0][1], 0)
                      ),
                        (f[S] = m),
                        (S += 1);
                    }
                  k && ((v += x[r].l), (v += g)),
                    this.textSpans[b]
                      ? (this.textSpans[b].elem = f)
                      : (this.textSpans[b] = { elem: f }),
                    (b += 1);
                }
              }),
              (CVTextElement.prototype.renderInnerContent = function () {
                var t,
                  e,
                  i,
                  r,
                  a,
                  n,
                  s = this.canvasContext;
                (s.font = this.values.fValue),
                  (s.lineCap = 'butt'),
                  (s.lineJoin = 'miter'),
                  (s.miterLimit = 4),
                  this.data.singleShape ||
                    this.textAnimator.getMeasures(
                      this.textProperty.currentData,
                      this.lettersChangedFlag
                    );
                var o,
                  l = this.textAnimator.renderedLetters,
                  p = this.textProperty.currentData.l;
                e = p.length;
                var h,
                  c,
                  u = null,
                  f = null,
                  m = null;
                for (t = 0; t < e; t += 1)
                  if (!p[t].n) {
                    if (
                      ((o = l[t]) &&
                        (this.globalData.renderer.save(),
                        this.globalData.renderer.ctxTransform(o.p),
                        this.globalData.renderer.ctxOpacity(o.o)),
                      this.fill)
                    ) {
                      for (
                        o && o.fc
                          ? u !== o.fc && ((u = o.fc), (s.fillStyle = o.fc))
                          : u !== this.values.fill &&
                            ((u = this.values.fill),
                            (s.fillStyle = this.values.fill)),
                          r = (h = this.textSpans[t].elem).length,
                          this.globalData.canvasContext.beginPath(),
                          i = 0;
                        i < r;
                        i += 1
                      )
                        for (
                          n = (c = h[i]).length,
                            this.globalData.canvasContext.moveTo(c[0], c[1]),
                            a = 2;
                          a < n;
                          a += 6
                        )
                          this.globalData.canvasContext.bezierCurveTo(
                            c[a],
                            c[a + 1],
                            c[a + 2],
                            c[a + 3],
                            c[a + 4],
                            c[a + 5]
                          );
                      this.globalData.canvasContext.closePath(),
                        this.globalData.canvasContext.fill();
                    }
                    if (this.stroke) {
                      for (
                        o && o.sw
                          ? m !== o.sw && ((m = o.sw), (s.lineWidth = o.sw))
                          : m !== this.values.sWidth &&
                            ((m = this.values.sWidth),
                            (s.lineWidth = this.values.sWidth)),
                          o && o.sc
                            ? f !== o.sc && ((f = o.sc), (s.strokeStyle = o.sc))
                            : f !== this.values.stroke &&
                              ((f = this.values.stroke),
                              (s.strokeStyle = this.values.stroke)),
                          r = (h = this.textSpans[t].elem).length,
                          this.globalData.canvasContext.beginPath(),
                          i = 0;
                        i < r;
                        i += 1
                      )
                        for (
                          n = (c = h[i]).length,
                            this.globalData.canvasContext.moveTo(c[0], c[1]),
                            a = 2;
                          a < n;
                          a += 6
                        )
                          this.globalData.canvasContext.bezierCurveTo(
                            c[a],
                            c[a + 1],
                            c[a + 2],
                            c[a + 3],
                            c[a + 4],
                            c[a + 5]
                          );
                      this.globalData.canvasContext.closePath(),
                        this.globalData.canvasContext.stroke();
                    }
                    o && this.globalData.renderer.restore();
                  }
              }),
              extendPrototype(
                [
                  BaseElement,
                  TransformElement,
                  CVBaseElement,
                  HierarchyElement,
                  FrameElement,
                  RenderableElement,
                ],
                CVImageElement
              ),
              (CVImageElement.prototype.initElement =
                SVGShapeElement.prototype.initElement),
              (CVImageElement.prototype.prepareFrame =
                IImageElement.prototype.prepareFrame),
              (CVImageElement.prototype.createContent = function () {
                if (
                  this.img.width &&
                  (this.assetData.w !== this.img.width ||
                    this.assetData.h !== this.img.height)
                ) {
                  var t = createTag('canvas');
                  (t.width = this.assetData.w), (t.height = this.assetData.h);
                  var e,
                    i,
                    r = t.getContext('2d'),
                    a = this.img.width,
                    n = this.img.height,
                    s = a / n,
                    o = this.assetData.w / this.assetData.h,
                    l =
                      this.assetData.pr ||
                      this.globalData.renderConfig.imagePreserveAspectRatio;
                  (s > o && 'xMidYMid slice' === l) ||
                  (s < o && 'xMidYMid slice' !== l)
                    ? (e = (i = n) * o)
                    : (i = (e = a) / o),
                    r.drawImage(
                      this.img,
                      (a - e) / 2,
                      (n - i) / 2,
                      e,
                      i,
                      0,
                      0,
                      this.assetData.w,
                      this.assetData.h
                    ),
                    (this.img = t);
                }
              }),
              (CVImageElement.prototype.renderInnerContent = function () {
                this.canvasContext.drawImage(this.img, 0, 0);
              }),
              (CVImageElement.prototype.destroy = function () {
                this.img = null;
              }),
              extendPrototype(
                [
                  BaseElement,
                  TransformElement,
                  CVBaseElement,
                  HierarchyElement,
                  FrameElement,
                  RenderableElement,
                ],
                CVSolidElement
              ),
              (CVSolidElement.prototype.initElement =
                SVGShapeElement.prototype.initElement),
              (CVSolidElement.prototype.prepareFrame =
                IImageElement.prototype.prepareFrame),
              (CVSolidElement.prototype.renderInnerContent = function () {
                var t = this.canvasContext;
                (t.fillStyle = this.data.sc),
                  t.fillRect(0, 0, this.data.sw, this.data.sh);
              }),
              extendPrototype([BaseRenderer], CanvasRendererBase),
              (CanvasRendererBase.prototype.createShape = function (t) {
                return new CVShapeElement(t, this.globalData, this);
              }),
              (CanvasRendererBase.prototype.createText = function (t) {
                return new CVTextElement(t, this.globalData, this);
              }),
              (CanvasRendererBase.prototype.createImage = function (t) {
                return new CVImageElement(t, this.globalData, this);
              }),
              (CanvasRendererBase.prototype.createSolid = function (t) {
                return new CVSolidElement(t, this.globalData, this);
              }),
              (CanvasRendererBase.prototype.createNull =
                SVGRenderer.prototype.createNull),
              (CanvasRendererBase.prototype.ctxTransform = function (t) {
                if (
                  1 !== t[0] ||
                  0 !== t[1] ||
                  0 !== t[4] ||
                  1 !== t[5] ||
                  0 !== t[12] ||
                  0 !== t[13]
                )
                  if (this.renderConfig.clearCanvas) {
                    this.transformMat.cloneFromProps(t);
                    var e = this.contextData.cTr.props;
                    this.transformMat.transform(
                      e[0],
                      e[1],
                      e[2],
                      e[3],
                      e[4],
                      e[5],
                      e[6],
                      e[7],
                      e[8],
                      e[9],
                      e[10],
                      e[11],
                      e[12],
                      e[13],
                      e[14],
                      e[15]
                    ),
                      this.contextData.cTr.cloneFromProps(
                        this.transformMat.props
                      );
                    var i = this.contextData.cTr.props;
                    this.canvasContext.setTransform(
                      i[0],
                      i[1],
                      i[4],
                      i[5],
                      i[12],
                      i[13]
                    );
                  } else
                    this.canvasContext.transform(
                      t[0],
                      t[1],
                      t[4],
                      t[5],
                      t[12],
                      t[13]
                    );
              }),
              (CanvasRendererBase.prototype.ctxOpacity = function (t) {
                if (!this.renderConfig.clearCanvas)
                  return (
                    (this.canvasContext.globalAlpha *= t < 0 ? 0 : t),
                    void (this.globalData.currentGlobalAlpha =
                      this.contextData.cO)
                  );
                (this.contextData.cO *= t < 0 ? 0 : t),
                  this.globalData.currentGlobalAlpha !== this.contextData.cO &&
                    ((this.canvasContext.globalAlpha = this.contextData.cO),
                    (this.globalData.currentGlobalAlpha = this.contextData.cO));
              }),
              (CanvasRendererBase.prototype.reset = function () {
                this.renderConfig.clearCanvas
                  ? this.contextData.reset()
                  : this.canvasContext.restore();
              }),
              (CanvasRendererBase.prototype.save = function (t) {
                if (this.renderConfig.clearCanvas) {
                  t && this.canvasContext.save();
                  var e,
                    i = this.contextData.cTr.props;
                  this.contextData._length <= this.contextData.cArrPos &&
                    this.contextData.duplicate();
                  var r = this.contextData.saved[this.contextData.cArrPos];
                  for (e = 0; e < 16; e += 1) r[e] = i[e];
                  (this.contextData.savedOp[this.contextData.cArrPos] =
                    this.contextData.cO),
                    (this.contextData.cArrPos += 1);
                } else this.canvasContext.save();
              }),
              (CanvasRendererBase.prototype.restore = function (t) {
                if (this.renderConfig.clearCanvas) {
                  t &&
                    (this.canvasContext.restore(),
                    (this.globalData.blendMode = 'source-over')),
                    (this.contextData.cArrPos -= 1);
                  var e,
                    i = this.contextData.saved[this.contextData.cArrPos],
                    r = this.contextData.cTr.props;
                  for (e = 0; e < 16; e += 1) r[e] = i[e];
                  this.canvasContext.setTransform(
                    i[0],
                    i[1],
                    i[4],
                    i[5],
                    i[12],
                    i[13]
                  ),
                    (i = this.contextData.savedOp[this.contextData.cArrPos]),
                    (this.contextData.cO = i),
                    this.globalData.currentGlobalAlpha !== i &&
                      ((this.canvasContext.globalAlpha = i),
                      (this.globalData.currentGlobalAlpha = i));
                } else this.canvasContext.restore();
              }),
              (CanvasRendererBase.prototype.configAnimation = function (t) {
                if (this.animationItem.wrapper) {
                  this.animationItem.container = createTag('canvas');
                  var e = this.animationItem.container.style;
                  (e.width = '100%'), (e.height = '100%');
                  var i = '0px 0px 0px';
                  (e.transformOrigin = i),
                    (e.mozTransformOrigin = i),
                    (e.webkitTransformOrigin = i),
                    (e['-webkit-transform'] = i),
                    (e.contentVisibility = this.renderConfig.contentVisibility),
                    this.animationItem.wrapper.appendChild(
                      this.animationItem.container
                    ),
                    (this.canvasContext =
                      this.animationItem.container.getContext('2d')),
                    this.renderConfig.className &&
                      this.animationItem.container.setAttribute(
                        'class',
                        this.renderConfig.className
                      ),
                    this.renderConfig.id &&
                      this.animationItem.container.setAttribute(
                        'id',
                        this.renderConfig.id
                      );
                } else this.canvasContext = this.renderConfig.context;
                (this.data = t),
                  (this.layers = t.layers),
                  (this.transformCanvas = {
                    w: t.w,
                    h: t.h,
                    sx: 0,
                    sy: 0,
                    tx: 0,
                    ty: 0,
                  }),
                  this.setupGlobalData(t, document.body),
                  (this.globalData.canvasContext = this.canvasContext),
                  (this.globalData.renderer = this),
                  (this.globalData.isDashed = !1),
                  (this.globalData.progressiveLoad =
                    this.renderConfig.progressiveLoad),
                  (this.globalData.transformCanvas = this.transformCanvas),
                  (this.elements = createSizedArray(t.layers.length)),
                  this.updateContainerSize();
              }),
              (CanvasRendererBase.prototype.updateContainerSize = function () {
                var t, e, i, r;
                if (
                  (this.reset(),
                  this.animationItem.wrapper && this.animationItem.container
                    ? ((t = this.animationItem.wrapper.offsetWidth),
                      (e = this.animationItem.wrapper.offsetHeight),
                      this.animationItem.container.setAttribute(
                        'width',
                        t * this.renderConfig.dpr
                      ),
                      this.animationItem.container.setAttribute(
                        'height',
                        e * this.renderConfig.dpr
                      ))
                    : ((t =
                        this.canvasContext.canvas.width *
                        this.renderConfig.dpr),
                      (e =
                        this.canvasContext.canvas.height *
                        this.renderConfig.dpr)),
                  -1 !==
                    this.renderConfig.preserveAspectRatio.indexOf('meet') ||
                    -1 !==
                      this.renderConfig.preserveAspectRatio.indexOf('slice'))
                ) {
                  var a = this.renderConfig.preserveAspectRatio.split(' '),
                    n = a[1] || 'meet',
                    s = a[0] || 'xMidYMid',
                    o = s.substr(0, 4),
                    l = s.substr(4);
                  (i = t / e),
                    ((r = this.transformCanvas.w / this.transformCanvas.h) >
                      i &&
                      'meet' === n) ||
                    (r < i && 'slice' === n)
                      ? ((this.transformCanvas.sx =
                          t / (this.transformCanvas.w / this.renderConfig.dpr)),
                        (this.transformCanvas.sy =
                          t / (this.transformCanvas.w / this.renderConfig.dpr)))
                      : ((this.transformCanvas.sx =
                          e / (this.transformCanvas.h / this.renderConfig.dpr)),
                        (this.transformCanvas.sy =
                          e /
                          (this.transformCanvas.h / this.renderConfig.dpr))),
                    (this.transformCanvas.tx =
                      'xMid' === o &&
                      ((r < i && 'meet' === n) || (r > i && 'slice' === n))
                        ? ((t -
                            this.transformCanvas.w *
                              (e / this.transformCanvas.h)) /
                            2) *
                          this.renderConfig.dpr
                        : 'xMax' === o &&
                            ((r < i && 'meet' === n) ||
                              (r > i && 'slice' === n))
                          ? (t -
                              this.transformCanvas.w *
                                (e / this.transformCanvas.h)) *
                            this.renderConfig.dpr
                          : 0),
                    (this.transformCanvas.ty =
                      'YMid' === l &&
                      ((r > i && 'meet' === n) || (r < i && 'slice' === n))
                        ? ((e -
                            this.transformCanvas.h *
                              (t / this.transformCanvas.w)) /
                            2) *
                          this.renderConfig.dpr
                        : 'YMax' === l &&
                            ((r > i && 'meet' === n) ||
                              (r < i && 'slice' === n))
                          ? (e -
                              this.transformCanvas.h *
                                (t / this.transformCanvas.w)) *
                            this.renderConfig.dpr
                          : 0);
                } else
                  'none' === this.renderConfig.preserveAspectRatio
                    ? ((this.transformCanvas.sx =
                        t / (this.transformCanvas.w / this.renderConfig.dpr)),
                      (this.transformCanvas.sy =
                        e / (this.transformCanvas.h / this.renderConfig.dpr)),
                      (this.transformCanvas.tx = 0),
                      (this.transformCanvas.ty = 0))
                    : ((this.transformCanvas.sx = this.renderConfig.dpr),
                      (this.transformCanvas.sy = this.renderConfig.dpr),
                      (this.transformCanvas.tx = 0),
                      (this.transformCanvas.ty = 0));
                (this.transformCanvas.props = [
                  this.transformCanvas.sx,
                  0,
                  0,
                  0,
                  0,
                  this.transformCanvas.sy,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  this.transformCanvas.tx,
                  this.transformCanvas.ty,
                  0,
                  1,
                ]),
                  this.ctxTransform(this.transformCanvas.props),
                  this.canvasContext.beginPath(),
                  this.canvasContext.rect(
                    0,
                    0,
                    this.transformCanvas.w,
                    this.transformCanvas.h
                  ),
                  this.canvasContext.closePath(),
                  this.canvasContext.clip(),
                  this.renderFrame(this.renderedFrame, !0);
              }),
              (CanvasRendererBase.prototype.destroy = function () {
                var t;
                for (
                  this.renderConfig.clearCanvas &&
                    this.animationItem.wrapper &&
                    (this.animationItem.wrapper.innerText = ''),
                    t = (this.layers ? this.layers.length : 0) - 1;
                  t >= 0;
                  t -= 1
                )
                  this.elements[t] && this.elements[t].destroy();
                (this.elements.length = 0),
                  (this.globalData.canvasContext = null),
                  (this.animationItem.container = null),
                  (this.destroyed = !0);
              }),
              (CanvasRendererBase.prototype.renderFrame = function (t, e) {
                if (
                  (this.renderedFrame !== t ||
                    !0 !== this.renderConfig.clearCanvas ||
                    e) &&
                  !this.destroyed &&
                  -1 !== t
                ) {
                  var i;
                  (this.renderedFrame = t),
                    (this.globalData.frameNum =
                      t - this.animationItem._isFirstFrame),
                    (this.globalData.frameId += 1),
                    (this.globalData._mdf =
                      !this.renderConfig.clearCanvas || e),
                    (this.globalData.projectInterface.currentFrame = t);
                  var r = this.layers.length;
                  for (
                    this.completeLayers || this.checkLayers(t), i = 0;
                    i < r;
                    i += 1
                  )
                    (this.completeLayers || this.elements[i]) &&
                      this.elements[i].prepareFrame(t - this.layers[i].st);
                  if (this.globalData._mdf) {
                    for (
                      !0 === this.renderConfig.clearCanvas
                        ? this.canvasContext.clearRect(
                            0,
                            0,
                            this.transformCanvas.w,
                            this.transformCanvas.h
                          )
                        : this.save(),
                        i = r - 1;
                      i >= 0;
                      i -= 1
                    )
                      (this.completeLayers || this.elements[i]) &&
                        this.elements[i].renderFrame();
                    !0 !== this.renderConfig.clearCanvas && this.restore();
                  }
                }
              }),
              (CanvasRendererBase.prototype.buildItem = function (t) {
                var e = this.elements;
                if (!e[t] && 99 !== this.layers[t].ty) {
                  var i = this.createItem(
                    this.layers[t],
                    this,
                    this.globalData
                  );
                  (e[t] = i), i.initExpressions();
                }
              }),
              (CanvasRendererBase.prototype.checkPendingElements = function () {
                for (; this.pendingElements.length; )
                  this.pendingElements.pop().checkParenting();
              }),
              (CanvasRendererBase.prototype.hide = function () {
                this.animationItem.container.style.display = 'none';
              }),
              (CanvasRendererBase.prototype.show = function () {
                this.animationItem.container.style.display = 'block';
              }),
              extendPrototype(
                [CanvasRendererBase, ICompElement, CVBaseElement],
                CVCompElement
              ),
              (CVCompElement.prototype.renderInnerContent = function () {
                var t,
                  e = this.canvasContext;
                for (
                  e.beginPath(),
                    e.moveTo(0, 0),
                    e.lineTo(this.data.w, 0),
                    e.lineTo(this.data.w, this.data.h),
                    e.lineTo(0, this.data.h),
                    e.lineTo(0, 0),
                    e.clip(),
                    t = this.layers.length - 1;
                  t >= 0;
                  t -= 1
                )
                  (this.completeLayers || this.elements[t]) &&
                    this.elements[t].renderFrame();
              }),
              (CVCompElement.prototype.destroy = function () {
                var t;
                for (t = this.layers.length - 1; t >= 0; t -= 1)
                  this.elements[t] && this.elements[t].destroy();
                (this.layers = null), (this.elements = null);
              }),
              (CVCompElement.prototype.createComp = function (t) {
                return new CVCompElement(t, this.globalData, this);
              }),
              extendPrototype([CanvasRendererBase], CanvasRenderer),
              (CanvasRenderer.prototype.createComp = function (t) {
                return new CVCompElement(t, this.globalData, this);
              }),
              (HBaseElement.prototype = {
                checkBlendMode: function () {},
                initRendererElement: function () {
                  (this.baseElement = createTag(this.data.tg || 'div')),
                    this.data.hasMask
                      ? ((this.svgElement = createNS('svg')),
                        (this.layerElement = createNS('g')),
                        (this.maskedElement = this.layerElement),
                        this.svgElement.appendChild(this.layerElement),
                        this.baseElement.appendChild(this.svgElement))
                      : (this.layerElement = this.baseElement),
                    styleDiv(this.baseElement);
                },
                createContainerElements: function () {
                  (this.renderableEffectsManager = new CVEffects(this)),
                    (this.transformedElement = this.baseElement),
                    (this.maskedElement = this.layerElement),
                    this.data.ln &&
                      this.layerElement.setAttribute('id', this.data.ln),
                    this.data.cl &&
                      this.layerElement.setAttribute('class', this.data.cl),
                    0 !== this.data.bm && this.setBlendMode();
                },
                renderElement: function () {
                  var t = this.transformedElement
                    ? this.transformedElement.style
                    : {};
                  if (this.finalTransform._matMdf) {
                    var e = this.finalTransform.mat.toCSS();
                    (t.transform = e), (t.webkitTransform = e);
                  }
                  this.finalTransform._opMdf &&
                    (t.opacity = this.finalTransform.mProp.o.v);
                },
                renderFrame: function () {
                  this.data.hd ||
                    this.hidden ||
                    (this.renderTransform(),
                    this.renderRenderable(),
                    this.renderElement(),
                    this.renderInnerContent(),
                    this._isFirstFrame && (this._isFirstFrame = !1));
                },
                destroy: function () {
                  (this.layerElement = null),
                    (this.transformedElement = null),
                    this.matteElement && (this.matteElement = null),
                    this.maskManager &&
                      (this.maskManager.destroy(), (this.maskManager = null));
                },
                createRenderableComponents: function () {
                  this.maskManager = new MaskElement(
                    this.data,
                    this,
                    this.globalData
                  );
                },
                addEffects: function () {},
                setMatte: function () {},
              }),
              (HBaseElement.prototype.getBaseElement =
                SVGBaseElement.prototype.getBaseElement),
              (HBaseElement.prototype.destroyBaseElement =
                HBaseElement.prototype.destroy),
              (HBaseElement.prototype.buildElementParenting =
                BaseRenderer.prototype.buildElementParenting),
              extendPrototype(
                [
                  BaseElement,
                  TransformElement,
                  HBaseElement,
                  HierarchyElement,
                  FrameElement,
                  RenderableDOMElement,
                ],
                HSolidElement
              ),
              (HSolidElement.prototype.createContent = function () {
                var t;
                this.data.hasMask
                  ? ((t = createNS('rect')).setAttribute('width', this.data.sw),
                    t.setAttribute('height', this.data.sh),
                    t.setAttribute('fill', this.data.sc),
                    this.svgElement.setAttribute('width', this.data.sw),
                    this.svgElement.setAttribute('height', this.data.sh))
                  : (((t = createTag('div')).style.width = this.data.sw + 'px'),
                    (t.style.height = this.data.sh + 'px'),
                    (t.style.backgroundColor = this.data.sc)),
                  this.layerElement.appendChild(t);
              }),
              extendPrototype(
                [
                  BaseElement,
                  TransformElement,
                  HSolidElement,
                  SVGShapeElement,
                  HBaseElement,
                  HierarchyElement,
                  FrameElement,
                  RenderableElement,
                ],
                HShapeElement
              ),
              (HShapeElement.prototype._renderShapeFrame =
                HShapeElement.prototype.renderInnerContent),
              (HShapeElement.prototype.createContent = function () {
                var t;
                if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
                  this.layerElement.appendChild(this.shapesContainer),
                    (t = this.svgElement);
                else {
                  t = createNS('svg');
                  var e = this.comp.data
                    ? this.comp.data
                    : this.globalData.compSize;
                  t.setAttribute('width', e.w),
                    t.setAttribute('height', e.h),
                    t.appendChild(this.shapesContainer),
                    this.layerElement.appendChild(t);
                }
                this.searchShapes(
                  this.shapesData,
                  this.itemsData,
                  this.prevViewData,
                  this.shapesContainer,
                  0,
                  [],
                  !0
                ),
                  this.filterUniqueShapes(),
                  (this.shapeCont = t);
              }),
              (HShapeElement.prototype.getTransformedPoint = function (t, e) {
                var i,
                  r = t.length;
                for (i = 0; i < r; i += 1)
                  e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
                return e;
              }),
              (HShapeElement.prototype.calculateShapeBoundingBox = function (
                t,
                e
              ) {
                var i,
                  r,
                  a,
                  n,
                  s,
                  o = t.sh.v,
                  l = t.transformers,
                  p = o._length;
                if (!(p <= 1)) {
                  for (i = 0; i < p - 1; i += 1)
                    (r = this.getTransformedPoint(l, o.v[i])),
                      (a = this.getTransformedPoint(l, o.o[i])),
                      (n = this.getTransformedPoint(l, o.i[i + 1])),
                      (s = this.getTransformedPoint(l, o.v[i + 1])),
                      this.checkBounds(r, a, n, s, e);
                  o.c &&
                    ((r = this.getTransformedPoint(l, o.v[i])),
                    (a = this.getTransformedPoint(l, o.o[i])),
                    (n = this.getTransformedPoint(l, o.i[0])),
                    (s = this.getTransformedPoint(l, o.v[0])),
                    this.checkBounds(r, a, n, s, e));
                }
              }),
              (HShapeElement.prototype.checkBounds = function (t, e, i, r, a) {
                this.getBoundsOfCurve(t, e, i, r);
                var n = this.shapeBoundingBox;
                (a.x = bmMin(n.left, a.x)),
                  (a.xMax = bmMax(n.right, a.xMax)),
                  (a.y = bmMin(n.top, a.y)),
                  (a.yMax = bmMax(n.bottom, a.yMax));
              }),
              (HShapeElement.prototype.shapeBoundingBox = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }),
              (HShapeElement.prototype.tempBoundingBox = {
                x: 0,
                xMax: 0,
                y: 0,
                yMax: 0,
                width: 0,
                height: 0,
              }),
              (HShapeElement.prototype.getBoundsOfCurve = function (
                t,
                e,
                i,
                r
              ) {
                for (
                  var a,
                    n,
                    s,
                    o,
                    l,
                    p,
                    h,
                    c = [
                      [t[0], r[0]],
                      [t[1], r[1]],
                    ],
                    u = 0;
                  u < 2;
                  ++u
                )
                  (n = 6 * t[u] - 12 * e[u] + 6 * i[u]),
                    (a = -3 * t[u] + 9 * e[u] - 9 * i[u] + 3 * r[u]),
                    (s = 3 * e[u] - 3 * t[u]),
                    (n |= 0),
                    (s |= 0),
                    (0 === (a |= 0) && 0 === n) ||
                      (0 === a
                        ? (o = -s / n) > 0 &&
                          o < 1 &&
                          c[u].push(this.calculateF(o, t, e, i, r, u))
                        : (l = n * n - 4 * s * a) >= 0 &&
                          ((p = (-n + bmSqrt(l)) / (2 * a)) > 0 &&
                            p < 1 &&
                            c[u].push(this.calculateF(p, t, e, i, r, u)),
                          (h = (-n - bmSqrt(l)) / (2 * a)) > 0 &&
                            h < 1 &&
                            c[u].push(this.calculateF(h, t, e, i, r, u))));
                (this.shapeBoundingBox.left = bmMin.apply(null, c[0])),
                  (this.shapeBoundingBox.top = bmMin.apply(null, c[1])),
                  (this.shapeBoundingBox.right = bmMax.apply(null, c[0])),
                  (this.shapeBoundingBox.bottom = bmMax.apply(null, c[1]));
              }),
              (HShapeElement.prototype.calculateF = function (
                t,
                e,
                i,
                r,
                a,
                n
              ) {
                return (
                  bmPow(1 - t, 3) * e[n] +
                  3 * bmPow(1 - t, 2) * t * i[n] +
                  3 * (1 - t) * bmPow(t, 2) * r[n] +
                  bmPow(t, 3) * a[n]
                );
              }),
              (HShapeElement.prototype.calculateBoundingBox = function (t, e) {
                var i,
                  r = t.length;
                for (i = 0; i < r; i += 1)
                  t[i] && t[i].sh
                    ? this.calculateShapeBoundingBox(t[i], e)
                    : t[i] && t[i].it
                      ? this.calculateBoundingBox(t[i].it, e)
                      : t[i] &&
                        t[i].style &&
                        t[i].w &&
                        this.expandStrokeBoundingBox(t[i].w, e);
              }),
              (HShapeElement.prototype.expandStrokeBoundingBox = function (
                t,
                e
              ) {
                var i = 0;
                if (t.keyframes) {
                  for (var r = 0; r < t.keyframes.length; r += 1) {
                    var a = t.keyframes[r].s;
                    a > i && (i = a);
                  }
                  i *= t.mult;
                } else i = t.v * t.mult;
                (e.x -= i), (e.xMax += i), (e.y -= i), (e.yMax += i);
              }),
              (HShapeElement.prototype.currentBoxContains = function (t) {
                return (
                  this.currentBBox.x <= t.x &&
                  this.currentBBox.y <= t.y &&
                  this.currentBBox.width + this.currentBBox.x >=
                    t.x + t.width &&
                  this.currentBBox.height + this.currentBBox.y >= t.y + t.height
                );
              }),
              (HShapeElement.prototype.renderInnerContent = function () {
                if (
                  (this._renderShapeFrame(),
                  !this.hidden && (this._isFirstFrame || this._mdf))
                ) {
                  var t = this.tempBoundingBox,
                    e = 999999;
                  if (
                    ((t.x = e),
                    (t.xMax = -e),
                    (t.y = e),
                    (t.yMax = -e),
                    this.calculateBoundingBox(this.itemsData, t),
                    (t.width = t.xMax < t.x ? 0 : t.xMax - t.x),
                    (t.height = t.yMax < t.y ? 0 : t.yMax - t.y),
                    this.currentBoxContains(t))
                  )
                    return;
                  var i = !1;
                  if (
                    (this.currentBBox.w !== t.width &&
                      ((this.currentBBox.w = t.width),
                      this.shapeCont.setAttribute('width', t.width),
                      (i = !0)),
                    this.currentBBox.h !== t.height &&
                      ((this.currentBBox.h = t.height),
                      this.shapeCont.setAttribute('height', t.height),
                      (i = !0)),
                    i ||
                      this.currentBBox.x !== t.x ||
                      this.currentBBox.y !== t.y)
                  ) {
                    (this.currentBBox.w = t.width),
                      (this.currentBBox.h = t.height),
                      (this.currentBBox.x = t.x),
                      (this.currentBBox.y = t.y),
                      this.shapeCont.setAttribute(
                        'viewBox',
                        this.currentBBox.x +
                          ' ' +
                          this.currentBBox.y +
                          ' ' +
                          this.currentBBox.w +
                          ' ' +
                          this.currentBBox.h
                      );
                    var r = this.shapeCont.style,
                      a =
                        'translate(' +
                        this.currentBBox.x +
                        'px,' +
                        this.currentBBox.y +
                        'px)';
                    (r.transform = a), (r.webkitTransform = a);
                  }
                }
              }),
              extendPrototype(
                [
                  BaseElement,
                  TransformElement,
                  HBaseElement,
                  HierarchyElement,
                  FrameElement,
                  RenderableDOMElement,
                  ITextElement,
                ],
                HTextElement
              ),
              (HTextElement.prototype.createContent = function () {
                if (((this.isMasked = this.checkMasks()), this.isMasked)) {
                  (this.renderType = 'svg'),
                    (this.compW = this.comp.data.w),
                    (this.compH = this.comp.data.h),
                    this.svgElement.setAttribute('width', this.compW),
                    this.svgElement.setAttribute('height', this.compH);
                  var t = createNS('g');
                  this.maskedElement.appendChild(t), (this.innerElem = t);
                } else
                  (this.renderType = 'html'),
                    (this.innerElem = this.layerElement);
                this.checkParenting();
              }),
              (HTextElement.prototype.buildNewText = function () {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = this.innerElem.style,
                  i = t.fc ? this.buildColor(t.fc) : 'rgba(0,0,0,0)';
                (e.fill = i),
                  (e.color = i),
                  t.sc &&
                    ((e.stroke = this.buildColor(t.sc)),
                    (e.strokeWidth = t.sw + 'px'));
                var r,
                  a,
                  n = this.globalData.fontManager.getFontByName(t.f);
                if (!this.globalData.fontManager.chars)
                  if (
                    ((e.fontSize = t.finalSize + 'px'),
                    (e.lineHeight = t.finalSize + 'px'),
                    n.fClass)
                  )
                    this.innerElem.className = n.fClass;
                  else {
                    e.fontFamily = n.fFamily;
                    var s = t.fWeight,
                      o = t.fStyle;
                    (e.fontStyle = o), (e.fontWeight = s);
                  }
                var l,
                  p,
                  h,
                  c = t.l;
                a = c.length;
                var u,
                  f = this.mHelper,
                  m = '',
                  d = 0;
                for (r = 0; r < a; r += 1) {
                  if (
                    (this.globalData.fontManager.chars
                      ? (this.textPaths[d]
                          ? (l = this.textPaths[d])
                          : ((l = createNS('path')).setAttribute(
                              'stroke-linecap',
                              lineCapEnum[1]
                            ),
                            l.setAttribute('stroke-linejoin', lineJoinEnum[2]),
                            l.setAttribute('stroke-miterlimit', '4')),
                        this.isMasked ||
                          (this.textSpans[d]
                            ? (h = (p = this.textSpans[d]).children[0])
                            : (((p = createTag('div')).style.lineHeight = 0),
                              (h = createNS('svg')).appendChild(l),
                              styleDiv(p))))
                      : this.isMasked
                        ? (l = this.textPaths[d]
                            ? this.textPaths[d]
                            : createNS('text'))
                        : this.textSpans[d]
                          ? ((p = this.textSpans[d]), (l = this.textPaths[d]))
                          : (styleDiv((p = createTag('span'))),
                            styleDiv((l = createTag('span'))),
                            p.appendChild(l)),
                    this.globalData.fontManager.chars)
                  ) {
                    var x,
                      y = this.globalData.fontManager.getCharData(
                        t.finalText[r],
                        n.fStyle,
                        this.globalData.fontManager.getFontByName(t.f).fFamily
                      );
                    if (
                      ((x = y ? y.data : null),
                      f.reset(),
                      x &&
                        x.shapes &&
                        x.shapes.length &&
                        ((u = x.shapes[0].it),
                        f.scale(t.finalSize / 100, t.finalSize / 100),
                        (m = this.createPathShape(f, u)),
                        l.setAttribute('d', m)),
                      this.isMasked)
                    )
                      this.innerElem.appendChild(l);
                    else {
                      if ((this.innerElem.appendChild(p), x && x.shapes)) {
                        document.body.appendChild(h);
                        var k = h.getBBox();
                        h.setAttribute('width', k.width + 2),
                          h.setAttribute('height', k.height + 2),
                          h.setAttribute(
                            'viewBox',
                            k.x -
                              1 +
                              ' ' +
                              (k.y - 1) +
                              ' ' +
                              (k.width + 2) +
                              ' ' +
                              (k.height + 2)
                          );
                        var g = h.style,
                          v =
                            'translate(' +
                            (k.x - 1) +
                            'px,' +
                            (k.y - 1) +
                            'px)';
                        (g.transform = v),
                          (g.webkitTransform = v),
                          (c[r].yOffset = k.y - 1);
                      } else
                        h.setAttribute('width', 1), h.setAttribute('height', 1);
                      p.appendChild(h);
                    }
                  } else if (
                    ((l.textContent = c[r].val),
                    l.setAttributeNS(
                      'http://www.w3.org/XML/1998/namespace',
                      'xml:space',
                      'preserve'
                    ),
                    this.isMasked)
                  )
                    this.innerElem.appendChild(l);
                  else {
                    this.innerElem.appendChild(p);
                    var _ = l.style,
                      E = 'translate3d(0,' + -t.finalSize / 1.2 + 'px,0)';
                    (_.transform = E), (_.webkitTransform = E);
                  }
                  this.isMasked
                    ? (this.textSpans[d] = l)
                    : (this.textSpans[d] = p),
                    (this.textSpans[d].style.display = 'block'),
                    (this.textPaths[d] = l),
                    (d += 1);
                }
                for (; d < this.textSpans.length; )
                  (this.textSpans[d].style.display = 'none'), (d += 1);
              }),
              (HTextElement.prototype.renderInnerContent = function () {
                var t;
                if (this.data.singleShape) {
                  if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                  if (this.isMasked && this.finalTransform._matMdf) {
                    this.svgElement.setAttribute(
                      'viewBox',
                      -this.finalTransform.mProp.p.v[0] +
                        ' ' +
                        -this.finalTransform.mProp.p.v[1] +
                        ' ' +
                        this.compW +
                        ' ' +
                        this.compH
                    ),
                      (t = this.svgElement.style);
                    var e =
                      'translate(' +
                      -this.finalTransform.mProp.p.v[0] +
                      'px,' +
                      -this.finalTransform.mProp.p.v[1] +
                      'px)';
                    (t.transform = e), (t.webkitTransform = e);
                  }
                }
                if (
                  (this.textAnimator.getMeasures(
                    this.textProperty.currentData,
                    this.lettersChangedFlag
                  ),
                  this.lettersChangedFlag ||
                    this.textAnimator.lettersChangedFlag)
                ) {
                  var i,
                    r,
                    a,
                    n,
                    s,
                    o = 0,
                    l = this.textAnimator.renderedLetters,
                    p = this.textProperty.currentData.l;
                  for (r = p.length, i = 0; i < r; i += 1)
                    p[i].n
                      ? (o += 1)
                      : ((n = this.textSpans[i]),
                        (s = this.textPaths[i]),
                        (a = l[o]),
                        (o += 1),
                        a._mdf.m &&
                          (this.isMasked
                            ? n.setAttribute('transform', a.m)
                            : ((n.style.webkitTransform = a.m),
                              (n.style.transform = a.m))),
                        (n.style.opacity = a.o),
                        a.sw &&
                          a._mdf.sw &&
                          s.setAttribute('stroke-width', a.sw),
                        a.sc && a._mdf.sc && s.setAttribute('stroke', a.sc),
                        a.fc &&
                          a._mdf.fc &&
                          (s.setAttribute('fill', a.fc),
                          (s.style.color = a.fc)));
                  if (
                    this.innerElem.getBBox &&
                    !this.hidden &&
                    (this._isFirstFrame || this._mdf)
                  ) {
                    var h = this.innerElem.getBBox();
                    if (
                      (this.currentBBox.w !== h.width &&
                        ((this.currentBBox.w = h.width),
                        this.svgElement.setAttribute('width', h.width)),
                      this.currentBBox.h !== h.height &&
                        ((this.currentBBox.h = h.height),
                        this.svgElement.setAttribute('height', h.height)),
                      this.currentBBox.w !== h.width + 2 ||
                        this.currentBBox.h !== h.height + 2 ||
                        this.currentBBox.x !== h.x - 1 ||
                        this.currentBBox.y !== h.y - 1)
                    ) {
                      (this.currentBBox.w = h.width + 2),
                        (this.currentBBox.h = h.height + 2),
                        (this.currentBBox.x = h.x - 1),
                        (this.currentBBox.y = h.y - 1),
                        this.svgElement.setAttribute(
                          'viewBox',
                          this.currentBBox.x +
                            ' ' +
                            this.currentBBox.y +
                            ' ' +
                            this.currentBBox.w +
                            ' ' +
                            this.currentBBox.h
                        ),
                        (t = this.svgElement.style);
                      var c =
                        'translate(' +
                        this.currentBBox.x +
                        'px,' +
                        this.currentBBox.y +
                        'px)';
                      (t.transform = c), (t.webkitTransform = c);
                    }
                  }
                }
              }),
              extendPrototype(
                [BaseElement, FrameElement, HierarchyElement],
                HCameraElement
              ),
              (HCameraElement.prototype.setup = function () {
                var t,
                  e,
                  i,
                  r,
                  a = this.comp.threeDElements.length;
                for (t = 0; t < a; t += 1)
                  if ('3d' === (e = this.comp.threeDElements[t]).type) {
                    (i = e.perspectiveElem.style), (r = e.container.style);
                    var n = this.pe.v + 'px',
                      s = '0px 0px 0px',
                      o = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
                    (i.perspective = n),
                      (i.webkitPerspective = n),
                      (r.transformOrigin = s),
                      (r.mozTransformOrigin = s),
                      (r.webkitTransformOrigin = s),
                      (i.transform = o),
                      (i.webkitTransform = o);
                  }
              }),
              (HCameraElement.prototype.createElements = function () {}),
              (HCameraElement.prototype.hide = function () {}),
              (HCameraElement.prototype.renderFrame = function () {
                var t,
                  e,
                  i = this._isFirstFrame;
                if (this.hierarchy)
                  for (e = this.hierarchy.length, t = 0; t < e; t += 1)
                    i = this.hierarchy[t].finalTransform.mProp._mdf || i;
                if (
                  i ||
                  this.pe._mdf ||
                  (this.p && this.p._mdf) ||
                  (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
                  this.rx._mdf ||
                  this.ry._mdf ||
                  this.rz._mdf ||
                  this.or._mdf ||
                  (this.a && this.a._mdf)
                ) {
                  if ((this.mat.reset(), this.hierarchy))
                    for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                      var r = this.hierarchy[t].finalTransform.mProp;
                      this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]),
                        this.mat
                          .rotateX(-r.or.v[0])
                          .rotateY(-r.or.v[1])
                          .rotateZ(r.or.v[2]),
                        this.mat
                          .rotateX(-r.rx.v)
                          .rotateY(-r.ry.v)
                          .rotateZ(r.rz.v),
                        this.mat.scale(
                          1 / r.s.v[0],
                          1 / r.s.v[1],
                          1 / r.s.v[2]
                        ),
                        this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
                    }
                  if (
                    (this.p
                      ? this.mat.translate(
                          -this.p.v[0],
                          -this.p.v[1],
                          this.p.v[2]
                        )
                      : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                    this.a)
                  ) {
                    var a;
                    a = this.p
                      ? [
                          this.p.v[0] - this.a.v[0],
                          this.p.v[1] - this.a.v[1],
                          this.p.v[2] - this.a.v[2],
                        ]
                      : [
                          this.px.v - this.a.v[0],
                          this.py.v - this.a.v[1],
                          this.pz.v - this.a.v[2],
                        ];
                    var n = Math.sqrt(
                        Math.pow(a[0], 2) +
                          Math.pow(a[1], 2) +
                          Math.pow(a[2], 2)
                      ),
                      s = [a[0] / n, a[1] / n, a[2] / n],
                      o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                      l = Math.atan2(s[1], o),
                      p = Math.atan2(s[0], -s[2]);
                    this.mat.rotateY(p).rotateX(-l);
                  }
                  this.mat
                    .rotateX(-this.rx.v)
                    .rotateY(-this.ry.v)
                    .rotateZ(this.rz.v),
                    this.mat
                      .rotateX(-this.or.v[0])
                      .rotateY(-this.or.v[1])
                      .rotateZ(this.or.v[2]),
                    this.mat.translate(
                      this.globalData.compSize.w / 2,
                      this.globalData.compSize.h / 2,
                      0
                    ),
                    this.mat.translate(0, 0, this.pe.v);
                  var h = !this._prevMat.equals(this.mat);
                  if ((h || this.pe._mdf) && this.comp.threeDElements) {
                    var c, u, f;
                    for (
                      e = this.comp.threeDElements.length, t = 0;
                      t < e;
                      t += 1
                    )
                      if ('3d' === (c = this.comp.threeDElements[t]).type) {
                        if (h) {
                          var m = this.mat.toCSS();
                          ((f = c.container.style).transform = m),
                            (f.webkitTransform = m);
                        }
                        this.pe._mdf &&
                          (((u = c.perspectiveElem.style).perspective =
                            this.pe.v + 'px'),
                          (u.webkitPerspective = this.pe.v + 'px'));
                      }
                    this.mat.clone(this._prevMat);
                  }
                }
                this._isFirstFrame = !1;
              }),
              (HCameraElement.prototype.prepareFrame = function (t) {
                this.prepareProperties(t, !0);
              }),
              (HCameraElement.prototype.destroy = function () {}),
              (HCameraElement.prototype.getBaseElement = function () {
                return null;
              }),
              extendPrototype(
                [
                  BaseElement,
                  TransformElement,
                  HBaseElement,
                  HSolidElement,
                  HierarchyElement,
                  FrameElement,
                  RenderableElement,
                ],
                HImageElement
              ),
              (HImageElement.prototype.createContent = function () {
                var t = this.globalData.getAssetsPath(this.assetData),
                  e = new Image();
                this.data.hasMask
                  ? ((this.imageElem = createNS('image')),
                    this.imageElem.setAttribute(
                      'width',
                      this.assetData.w + 'px'
                    ),
                    this.imageElem.setAttribute(
                      'height',
                      this.assetData.h + 'px'
                    ),
                    this.imageElem.setAttributeNS(
                      'http://www.w3.org/1999/xlink',
                      'href',
                      t
                    ),
                    this.layerElement.appendChild(this.imageElem),
                    this.baseElement.setAttribute('width', this.assetData.w),
                    this.baseElement.setAttribute('height', this.assetData.h))
                  : this.layerElement.appendChild(e),
                  (e.crossOrigin = 'anonymous'),
                  (e.src = t),
                  this.data.ln &&
                    this.baseElement.setAttribute('id', this.data.ln);
              }),
              extendPrototype([BaseRenderer], HybridRendererBase),
              (HybridRendererBase.prototype.buildItem =
                SVGRenderer.prototype.buildItem),
              (HybridRendererBase.prototype.checkPendingElements = function () {
                for (; this.pendingElements.length; )
                  this.pendingElements.pop().checkParenting();
              }),
              (HybridRendererBase.prototype.appendElementInPos = function (
                t,
                e
              ) {
                var i = t.getBaseElement();
                if (i) {
                  var r = this.layers[e];
                  if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
                  else if (this.threeDElements) this.addTo3dContainer(i, e);
                  else {
                    for (var a, n, s = 0; s < e; )
                      this.elements[s] &&
                        !0 !== this.elements[s] &&
                        this.elements[s].getBaseElement &&
                        ((n = this.elements[s]),
                        (a =
                          (this.layers[s].ddd
                            ? this.getThreeDContainerByPos(s)
                            : n.getBaseElement()) || a)),
                        (s += 1);
                    a
                      ? (r.ddd && this.supports3d) ||
                        this.layerElement.insertBefore(i, a)
                      : (r.ddd && this.supports3d) ||
                        this.layerElement.appendChild(i);
                  }
                }
              }),
              (HybridRendererBase.prototype.createShape = function (t) {
                return this.supports3d
                  ? new HShapeElement(t, this.globalData, this)
                  : new SVGShapeElement(t, this.globalData, this);
              }),
              (HybridRendererBase.prototype.createText = function (t) {
                return this.supports3d
                  ? new HTextElement(t, this.globalData, this)
                  : new SVGTextLottieElement(t, this.globalData, this);
              }),
              (HybridRendererBase.prototype.createCamera = function (t) {
                return (
                  (this.camera = new HCameraElement(t, this.globalData, this)),
                  this.camera
                );
              }),
              (HybridRendererBase.prototype.createImage = function (t) {
                return this.supports3d
                  ? new HImageElement(t, this.globalData, this)
                  : new IImageElement(t, this.globalData, this);
              }),
              (HybridRendererBase.prototype.createSolid = function (t) {
                return this.supports3d
                  ? new HSolidElement(t, this.globalData, this)
                  : new ISolidElement(t, this.globalData, this);
              }),
              (HybridRendererBase.prototype.createNull =
                SVGRenderer.prototype.createNull),
              (HybridRendererBase.prototype.getThreeDContainerByPos = function (
                t
              ) {
                for (var e = 0, i = this.threeDElements.length; e < i; ) {
                  if (
                    this.threeDElements[e].startPos <= t &&
                    this.threeDElements[e].endPos >= t
                  )
                    return this.threeDElements[e].perspectiveElem;
                  e += 1;
                }
                return null;
              }),
              (HybridRendererBase.prototype.createThreeDContainer = function (
                t,
                e
              ) {
                var i,
                  r,
                  a = createTag('div');
                styleDiv(a);
                var n = createTag('div');
                if ((styleDiv(n), '3d' === e)) {
                  ((i = a.style).width = this.globalData.compSize.w + 'px'),
                    (i.height = this.globalData.compSize.h + 'px');
                  var s = '50% 50%';
                  (i.webkitTransformOrigin = s),
                    (i.mozTransformOrigin = s),
                    (i.transformOrigin = s);
                  var o = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
                  ((r = n.style).transform = o), (r.webkitTransform = o);
                }
                a.appendChild(n);
                var l = {
                  container: n,
                  perspectiveElem: a,
                  startPos: t,
                  endPos: t,
                  type: e,
                };
                return this.threeDElements.push(l), l;
              }),
              (HybridRendererBase.prototype.build3dContainers = function () {
                var t,
                  e,
                  i = this.layers.length,
                  r = '';
                for (t = 0; t < i; t += 1)
                  this.layers[t].ddd && 3 !== this.layers[t].ty
                    ? ('3d' !== r &&
                        ((r = '3d'), (e = this.createThreeDContainer(t, '3d'))),
                      (e.endPos = Math.max(e.endPos, t)))
                    : ('2d' !== r &&
                        ((r = '2d'), (e = this.createThreeDContainer(t, '2d'))),
                      (e.endPos = Math.max(e.endPos, t)));
                for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1)
                  this.resizerElem.appendChild(
                    this.threeDElements[t].perspectiveElem
                  );
              }),
              (HybridRendererBase.prototype.addTo3dContainer = function (t, e) {
                for (var i = 0, r = this.threeDElements.length; i < r; ) {
                  if (e <= this.threeDElements[i].endPos) {
                    for (var a, n = this.threeDElements[i].startPos; n < e; )
                      this.elements[n] &&
                        this.elements[n].getBaseElement &&
                        (a = this.elements[n].getBaseElement()),
                        (n += 1);
                    a
                      ? this.threeDElements[i].container.insertBefore(t, a)
                      : this.threeDElements[i].container.appendChild(t);
                    break;
                  }
                  i += 1;
                }
              }),
              (HybridRendererBase.prototype.configAnimation = function (t) {
                var e = createTag('div'),
                  i = this.animationItem.wrapper,
                  r = e.style;
                (r.width = t.w + 'px'),
                  (r.height = t.h + 'px'),
                  (this.resizerElem = e),
                  styleDiv(e),
                  (r.transformStyle = 'flat'),
                  (r.mozTransformStyle = 'flat'),
                  (r.webkitTransformStyle = 'flat'),
                  this.renderConfig.className &&
                    e.setAttribute('class', this.renderConfig.className),
                  i.appendChild(e),
                  (r.overflow = 'hidden');
                var a = createNS('svg');
                a.setAttribute('width', '1'),
                  a.setAttribute('height', '1'),
                  styleDiv(a),
                  this.resizerElem.appendChild(a);
                var n = createNS('defs');
                a.appendChild(n),
                  (this.data = t),
                  this.setupGlobalData(t, a),
                  (this.globalData.defs = n),
                  (this.layers = t.layers),
                  (this.layerElement = this.resizerElem),
                  this.build3dContainers(),
                  this.updateContainerSize();
              }),
              (HybridRendererBase.prototype.destroy = function () {
                var t;
                this.animationItem.wrapper &&
                  (this.animationItem.wrapper.innerText = ''),
                  (this.animationItem.container = null),
                  (this.globalData.defs = null);
                var e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t += 1) this.elements[t].destroy();
                (this.elements.length = 0),
                  (this.destroyed = !0),
                  (this.animationItem = null);
              }),
              (HybridRendererBase.prototype.updateContainerSize = function () {
                var t,
                  e,
                  i,
                  r,
                  a = this.animationItem.wrapper.offsetWidth,
                  n = this.animationItem.wrapper.offsetHeight,
                  s = a / n;
                this.globalData.compSize.w / this.globalData.compSize.h > s
                  ? ((t = a / this.globalData.compSize.w),
                    (e = a / this.globalData.compSize.w),
                    (i = 0),
                    (r =
                      (n -
                        this.globalData.compSize.h *
                          (a / this.globalData.compSize.w)) /
                      2))
                  : ((t = n / this.globalData.compSize.h),
                    (e = n / this.globalData.compSize.h),
                    (i =
                      (a -
                        this.globalData.compSize.w *
                          (n / this.globalData.compSize.h)) /
                      2),
                    (r = 0));
                var o = this.resizerElem.style;
                (o.webkitTransform =
                  'matrix3d(' +
                  t +
                  ',0,0,0,0,' +
                  e +
                  ',0,0,0,0,1,0,' +
                  i +
                  ',' +
                  r +
                  ',0,1)'),
                  (o.transform = o.webkitTransform);
              }),
              (HybridRendererBase.prototype.renderFrame =
                SVGRenderer.prototype.renderFrame),
              (HybridRendererBase.prototype.hide = function () {
                this.resizerElem.style.display = 'none';
              }),
              (HybridRendererBase.prototype.show = function () {
                this.resizerElem.style.display = 'block';
              }),
              (HybridRendererBase.prototype.initItems = function () {
                if ((this.buildAllItems(), this.camera)) this.camera.setup();
                else {
                  var t,
                    e = this.globalData.compSize.w,
                    i = this.globalData.compSize.h,
                    r = this.threeDElements.length;
                  for (t = 0; t < r; t += 1) {
                    var a = this.threeDElements[t].perspectiveElem.style;
                    (a.webkitPerspective =
                      Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + 'px'),
                      (a.perspective = a.webkitPerspective);
                  }
                }
              }),
              (HybridRendererBase.prototype.searchExtraCompositions = function (
                t
              ) {
                var e,
                  i = t.length,
                  r = createTag('div');
                for (e = 0; e < i; e += 1)
                  if (t[e].xt) {
                    var a = this.createComp(
                      t[e],
                      r,
                      this.globalData.comp,
                      null
                    );
                    a.initExpressions(),
                      this.globalData.projectInterface.registerComposition(a);
                  }
              }),
              extendPrototype(
                [HybridRendererBase, ICompElement, HBaseElement],
                HCompElement
              ),
              (HCompElement.prototype._createBaseContainerElements =
                HCompElement.prototype.createContainerElements),
              (HCompElement.prototype.createContainerElements = function () {
                this._createBaseContainerElements(),
                  this.data.hasMask
                    ? (this.svgElement.setAttribute('width', this.data.w),
                      this.svgElement.setAttribute('height', this.data.h),
                      (this.transformedElement = this.baseElement))
                    : (this.transformedElement = this.layerElement);
              }),
              (HCompElement.prototype.addTo3dContainer = function (t, e) {
                for (var i, r = 0; r < e; )
                  this.elements[r] &&
                    this.elements[r].getBaseElement &&
                    (i = this.elements[r].getBaseElement()),
                    (r += 1);
                i
                  ? this.layerElement.insertBefore(t, i)
                  : this.layerElement.appendChild(t);
              }),
              (HCompElement.prototype.createComp = function (t) {
                return this.supports3d
                  ? new HCompElement(t, this.globalData, this)
                  : new SVGCompElement(t, this.globalData, this);
              }),
              extendPrototype([HybridRendererBase], HybridRenderer),
              (HybridRenderer.prototype.createComp = function (t) {
                return this.supports3d
                  ? new HCompElement(t, this.globalData, this)
                  : new SVGCompElement(t, this.globalData, this);
              });
            var Expressions = (function () {
              var t = {
                initExpressions: function (t) {
                  var e = 0,
                    i = [];
                  (t.renderer.compInterface = CompExpressionInterface(
                    t.renderer
                  )),
                    t.renderer.globalData.projectInterface.registerComposition(
                      t.renderer
                    ),
                    (t.renderer.globalData.pushExpression = function () {
                      e += 1;
                    }),
                    (t.renderer.globalData.popExpression = function () {
                      0 === (e -= 1) &&
                        (function () {
                          var t,
                            e = i.length;
                          for (t = 0; t < e; t += 1) i[t].release();
                          i.length = 0;
                        })();
                    }),
                    (t.renderer.globalData.registerExpressionProperty =
                      function (t) {
                        -1 === i.indexOf(t) && i.push(t);
                      });
                },
              };
              return t;
            })();
            function _typeof$1(t) {
              return (
                (_typeof$1 =
                  'function' === typeof Symbol &&
                  'symbol' === typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          'function' === typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                      }),
                _typeof$1(t)
              );
            }
            function seedRandom(t, e) {
              var i = this,
                r = 256,
                a = e.pow(r, 6),
                n = e.pow(2, 52),
                s = 2 * n,
                o = 255;
              function l(t) {
                var e,
                  i = t.length,
                  a = this,
                  n = 0,
                  s = (a.i = a.j = 0),
                  l = (a.S = []);
                for (i || (t = [i++]); n < r; ) l[n] = n++;
                for (n = 0; n < r; n++)
                  (l[n] = l[(s = o & (s + t[n % i] + (e = l[n])))]), (l[s] = e);
                a.g = function (t) {
                  for (var e, i = 0, n = a.i, s = a.j, l = a.S; t--; )
                    (e = l[(n = o & (n + 1))]),
                      (i =
                        i * r +
                        l[o & ((l[n] = l[(s = o & (s + e))]) + (l[s] = e))]);
                  return (a.i = n), (a.j = s), i;
                };
              }
              function p(t, e) {
                return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
              }
              function h(t, e) {
                var i,
                  r = [],
                  a = _typeof$1(t);
                if (e && 'object' == a)
                  for (i in t)
                    try {
                      r.push(h(t[i], e - 1));
                    } catch (n) {}
                return r.length ? r : 'string' == a ? t : t + '\0';
              }
              function c(t, e) {
                for (var i, r = t + '', a = 0; a < r.length; )
                  e[o & a] = o & ((i ^= 19 * e[o & a]) + r.charCodeAt(a++));
                return u(e);
              }
              function u(t) {
                return String.fromCharCode.apply(0, t);
              }
              (e.seedrandom = function (o, f, m) {
                var d = [],
                  x = c(
                    h(
                      (f = !0 === f ? { entropy: !0 } : f || {}).entropy
                        ? [o, u(t)]
                        : null === o
                          ? (function () {
                              try {
                                var e = new Uint8Array(r);
                                return (
                                  (i.crypto || i.msCrypto).getRandomValues(e),
                                  u(e)
                                );
                              } catch (s) {
                                var a = i.navigator,
                                  n = a && a.plugins;
                                return [+new Date(), i, n, i.screen, u(t)];
                              }
                            })()
                          : o,
                      3
                    ),
                    d
                  ),
                  y = new l(d),
                  k = function () {
                    for (var t = y.g(6), e = a, i = 0; t < n; )
                      (t = (t + i) * r), (e *= r), (i = y.g(1));
                    for (; t >= s; ) (t /= 2), (e /= 2), (i >>>= 1);
                    return (t + i) / e;
                  };
                return (
                  (k.int32 = function () {
                    return 0 | y.g(4);
                  }),
                  (k.quick = function () {
                    return y.g(4) / 4294967296;
                  }),
                  (k.double = k),
                  c(u(y.S), t),
                  (
                    f.pass ||
                    m ||
                    function (t, i, r, a) {
                      return (
                        a &&
                          (a.S && p(a, y),
                          (t.state = function () {
                            return p(y, {});
                          })),
                        r ? ((e.random = t), i) : t
                      );
                    }
                  )(k, x, 'global' in f ? f.global : this == e, f.state)
                );
              }),
                c(e.random(), t);
            }
            function initialize$2(t) {
              seedRandom([], t);
            }
            var propTypes = { SHAPE: 'shape' };
            function _typeof(t) {
              return (
                (_typeof =
                  'function' === typeof Symbol &&
                  'symbol' === typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          'function' === typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                      }),
                _typeof(t)
              );
            }
            var ExpressionManager = (function () {
                var ob = {},
                  Math = BMMath,
                  window = null,
                  document = null,
                  XMLHttpRequest = null,
                  fetch = null,
                  frames = null;
                function $bm_isInstanceOfArray(t) {
                  return (
                    t.constructor === Array || t.constructor === Float32Array
                  );
                }
                function isNumerable(t, e) {
                  return (
                    'number' === t ||
                    'boolean' === t ||
                    'string' === t ||
                    e instanceof Number
                  );
                }
                function $bm_neg(t) {
                  var e = _typeof(t);
                  if ('number' === e || 'boolean' === e || t instanceof Number)
                    return -t;
                  if ($bm_isInstanceOfArray(t)) {
                    var i,
                      r = t.length,
                      a = [];
                    for (i = 0; i < r; i += 1) a[i] = -t[i];
                    return a;
                  }
                  return t.propType ? t.v : -t;
                }
                initialize$2(BMMath);
                var easeInBez = BezierFactory.getBezierEasing(
                    0.333,
                    0,
                    0.833,
                    0.833,
                    'easeIn'
                  ).get,
                  easeOutBez = BezierFactory.getBezierEasing(
                    0.167,
                    0.167,
                    0.667,
                    1,
                    'easeOut'
                  ).get,
                  easeInOutBez = BezierFactory.getBezierEasing(
                    0.33,
                    0,
                    0.667,
                    1,
                    'easeInOut'
                  ).get;
                function sum(t, e) {
                  var i = _typeof(t),
                    r = _typeof(e);
                  if ('string' === i || 'string' === r) return t + e;
                  if (isNumerable(i, t) && isNumerable(r, e)) return t + e;
                  if ($bm_isInstanceOfArray(t) && isNumerable(r, e))
                    return ((t = t.slice(0))[0] += e), t;
                  if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                    return ((e = e.slice(0))[0] = t + e[0]), e;
                  if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for (
                      var a = 0, n = t.length, s = e.length, o = [];
                      a < n || a < s;

                    )
                      ('number' === typeof t[a] || t[a] instanceof Number) &&
                      ('number' === typeof e[a] || e[a] instanceof Number)
                        ? (o[a] = t[a] + e[a])
                        : (o[a] = void 0 === e[a] ? t[a] : t[a] || e[a]),
                        (a += 1);
                    return o;
                  }
                  return 0;
                }
                var add = sum;
                function sub(t, e) {
                  var i = _typeof(t),
                    r = _typeof(e);
                  if (isNumerable(i, t) && isNumerable(r, e))
                    return (
                      'string' === i && (t = parseInt(t, 10)),
                      'string' === r && (e = parseInt(e, 10)),
                      t - e
                    );
                  if ($bm_isInstanceOfArray(t) && isNumerable(r, e))
                    return ((t = t.slice(0))[0] -= e), t;
                  if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                    return ((e = e.slice(0))[0] = t - e[0]), e;
                  if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for (
                      var a = 0, n = t.length, s = e.length, o = [];
                      a < n || a < s;

                    )
                      ('number' === typeof t[a] || t[a] instanceof Number) &&
                      ('number' === typeof e[a] || e[a] instanceof Number)
                        ? (o[a] = t[a] - e[a])
                        : (o[a] = void 0 === e[a] ? t[a] : t[a] || e[a]),
                        (a += 1);
                    return o;
                  }
                  return 0;
                }
                function mul(t, e) {
                  var i,
                    r,
                    a,
                    n = _typeof(t),
                    s = _typeof(e);
                  if (isNumerable(n, t) && isNumerable(s, e)) return t * e;
                  if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                    for (
                      a = t.length, i = createTypedArray('float32', a), r = 0;
                      r < a;
                      r += 1
                    )
                      i[r] = t[r] * e;
                    return i;
                  }
                  if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) {
                    for (
                      a = e.length, i = createTypedArray('float32', a), r = 0;
                      r < a;
                      r += 1
                    )
                      i[r] = t * e[r];
                    return i;
                  }
                  return 0;
                }
                function div(t, e) {
                  var i,
                    r,
                    a,
                    n = _typeof(t),
                    s = _typeof(e);
                  if (isNumerable(n, t) && isNumerable(s, e)) return t / e;
                  if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                    for (
                      a = t.length, i = createTypedArray('float32', a), r = 0;
                      r < a;
                      r += 1
                    )
                      i[r] = t[r] / e;
                    return i;
                  }
                  if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) {
                    for (
                      a = e.length, i = createTypedArray('float32', a), r = 0;
                      r < a;
                      r += 1
                    )
                      i[r] = t / e[r];
                    return i;
                  }
                  return 0;
                }
                function mod(t, e) {
                  return (
                    'string' === typeof t && (t = parseInt(t, 10)),
                    'string' === typeof e && (e = parseInt(e, 10)),
                    t % e
                  );
                }
                var $bm_sum = sum,
                  $bm_sub = sub,
                  $bm_mul = mul,
                  $bm_div = div,
                  $bm_mod = mod;
                function clamp(t, e, i) {
                  if (e > i) {
                    var r = i;
                    (i = e), (e = r);
                  }
                  return Math.min(Math.max(t, e), i);
                }
                function radiansToDegrees(t) {
                  return t / degToRads;
                }
                var radians_to_degrees = radiansToDegrees;
                function degreesToRadians(t) {
                  return t * degToRads;
                }
                var degrees_to_radians = radiansToDegrees,
                  helperLengthArray = [0, 0, 0, 0, 0, 0];
                function length(t, e) {
                  if ('number' === typeof t || t instanceof Number)
                    return (e = e || 0), Math.abs(t - e);
                  var i;
                  e || (e = helperLengthArray);
                  var r = Math.min(t.length, e.length),
                    a = 0;
                  for (i = 0; i < r; i += 1) a += Math.pow(e[i] - t[i], 2);
                  return Math.sqrt(a);
                }
                function normalize(t) {
                  return div(t, length(t));
                }
                function rgbToHsl(t) {
                  var e,
                    i,
                    r = t[0],
                    a = t[1],
                    n = t[2],
                    s = Math.max(r, a, n),
                    o = Math.min(r, a, n),
                    l = (s + o) / 2;
                  if (s === o) (e = 0), (i = 0);
                  else {
                    var p = s - o;
                    switch (
                      ((i = l > 0.5 ? p / (2 - s - o) : p / (s + o)), s)
                    ) {
                      case r:
                        e = (a - n) / p + (a < n ? 6 : 0);
                        break;
                      case a:
                        e = (n - r) / p + 2;
                        break;
                      case n:
                        e = (r - a) / p + 4;
                    }
                    e /= 6;
                  }
                  return [e, i, l, t[3]];
                }
                function hue2rgb(t, e, i) {
                  return (
                    i < 0 && (i += 1),
                    i > 1 && (i -= 1),
                    i < 1 / 6
                      ? t + 6 * (e - t) * i
                      : i < 0.5
                        ? e
                        : i < 2 / 3
                          ? t + (e - t) * (2 / 3 - i) * 6
                          : t
                  );
                }
                function hslToRgb(t) {
                  var e,
                    i,
                    r,
                    a = t[0],
                    n = t[1],
                    s = t[2];
                  if (0 === n) (e = s), (r = s), (i = s);
                  else {
                    var o = s < 0.5 ? s * (1 + n) : s + n - s * n,
                      l = 2 * s - o;
                    (e = hue2rgb(l, o, a + 1 / 3)),
                      (i = hue2rgb(l, o, a)),
                      (r = hue2rgb(l, o, a - 1 / 3));
                  }
                  return [e, i, r, t[3]];
                }
                function linear(t, e, i, r, a) {
                  if (
                    ((void 0 !== r && void 0 !== a) ||
                      ((r = e), (a = i), (e = 0), (i = 1)),
                    i < e)
                  ) {
                    var n = i;
                    (i = e), (e = n);
                  }
                  if (t <= e) return r;
                  if (t >= i) return a;
                  var s,
                    o = i === e ? 0 : (t - e) / (i - e);
                  if (!r.length) return r + (a - r) * o;
                  var l = r.length,
                    p = createTypedArray('float32', l);
                  for (s = 0; s < l; s += 1) p[s] = r[s] + (a[s] - r[s]) * o;
                  return p;
                }
                function random(t, e) {
                  if (
                    (void 0 === e &&
                      (void 0 === t
                        ? ((t = 0), (e = 1))
                        : ((e = t), (t = void 0))),
                    e.length)
                  ) {
                    var i,
                      r = e.length;
                    t || (t = createTypedArray('float32', r));
                    var a = createTypedArray('float32', r),
                      n = BMMath.random();
                    for (i = 0; i < r; i += 1) a[i] = t[i] + n * (e[i] - t[i]);
                    return a;
                  }
                  return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
                }
                function createPath(t, e, i, r) {
                  var a,
                    n = t.length,
                    s = shapePool.newElement();
                  s.setPathData(!!r, n);
                  var o,
                    l,
                    p = [0, 0];
                  for (a = 0; a < n; a += 1)
                    (o = e && e[a] ? e[a] : p),
                      (l = i && i[a] ? i[a] : p),
                      s.setTripleAt(
                        t[a][0],
                        t[a][1],
                        l[0] + t[a][0],
                        l[1] + t[a][1],
                        o[0] + t[a][0],
                        o[1] + t[a][1],
                        a,
                        !0
                      );
                  return s;
                }
                function initiateExpression(elem, data, property) {
                  var val = data.x,
                    needsVelocity = /velocity(?![\w\d])/.test(val),
                    _needsRandom = -1 !== val.indexOf('random'),
                    elemType = elem.data.ty,
                    transform,
                    $bm_transform,
                    content,
                    effect,
                    thisProperty = property;
                  (thisProperty.valueAtTime = thisProperty.getValueAtTime),
                    Object.defineProperty(thisProperty, 'value', {
                      get: function () {
                        return thisProperty.v;
                      },
                    }),
                    (elem.comp.frameDuration =
                      1 / elem.comp.globalData.frameRate),
                    (elem.comp.displayStartTime = 0);
                  var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                    outPoint = elem.data.op / elem.comp.globalData.frameRate,
                    width = elem.data.sw ? elem.data.sw : 0,
                    height = elem.data.sh ? elem.data.sh : 0,
                    name = elem.data.nm,
                    loopIn,
                    loop_in,
                    loopOut,
                    loop_out,
                    smooth,
                    toWorld,
                    fromWorld,
                    fromComp,
                    toComp,
                    fromCompToSurface,
                    position,
                    rotation,
                    anchorPoint,
                    scale,
                    thisLayer,
                    thisComp,
                    mask,
                    valueAtTime,
                    velocityAtTime,
                    scoped_bm_rt,
                    expression_function = eval(
                      '[function _expression_function(){' +
                        val +
                        ';scoped_bm_rt=$bm_rt}]'
                    )[0],
                    numKeys = property.kf ? data.k.length : 0,
                    active = !this.data || !0 !== this.data.hd,
                    wiggle = function (t, e) {
                      var i,
                        r,
                        a = this.pv.length ? this.pv.length : 1,
                        n = createTypedArray('float32', a),
                        s = Math.floor(5 * time);
                      for (i = 0, r = 0; i < s; ) {
                        for (r = 0; r < a; r += 1)
                          n[r] += -e + 2 * e * BMMath.random();
                        i += 1;
                      }
                      var o = 5 * time,
                        l = o - Math.floor(o),
                        p = createTypedArray('float32', a);
                      if (a > 1) {
                        for (r = 0; r < a; r += 1)
                          p[r] =
                            this.pv[r] +
                            n[r] +
                            (-e + 2 * e * BMMath.random()) * l;
                        return p;
                      }
                      return (
                        this.pv + n[0] + (-e + 2 * e * BMMath.random()) * l
                      );
                    }.bind(this);
                  function loopInDuration(t, e) {
                    return loopIn(t, e, !0);
                  }
                  function loopOutDuration(t, e) {
                    return loopOut(t, e, !0);
                  }
                  thisProperty.loopIn &&
                    ((loopIn = thisProperty.loopIn.bind(thisProperty)),
                    (loop_in = loopIn)),
                    thisProperty.loopOut &&
                      ((loopOut = thisProperty.loopOut.bind(thisProperty)),
                      (loop_out = loopOut)),
                    thisProperty.smooth &&
                      (smooth = thisProperty.smooth.bind(thisProperty)),
                    this.getValueAtTime &&
                      (valueAtTime = this.getValueAtTime.bind(this)),
                    this.getVelocityAtTime &&
                      (velocityAtTime = this.getVelocityAtTime.bind(this));
                  var comp = elem.comp.globalData.projectInterface.bind(
                      elem.comp.globalData.projectInterface
                    ),
                    time,
                    velocity,
                    value,
                    text,
                    textIndex,
                    textTotal,
                    selectorValue;
                  function lookAt(t, e) {
                    var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                      r =
                        Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) /
                        degToRads;
                    return [-Math.atan2(i[1], i[2]) / degToRads, r, 0];
                  }
                  function easeOut(t, e, i, r, a) {
                    return applyEase(easeOutBez, t, e, i, r, a);
                  }
                  function easeIn(t, e, i, r, a) {
                    return applyEase(easeInBez, t, e, i, r, a);
                  }
                  function ease(t, e, i, r, a) {
                    return applyEase(easeInOutBez, t, e, i, r, a);
                  }
                  function applyEase(t, e, i, r, a, n) {
                    void 0 === a ? ((a = i), (n = r)) : (e = (e - i) / (r - i)),
                      e > 1 ? (e = 1) : e < 0 && (e = 0);
                    var s = t(e);
                    if ($bm_isInstanceOfArray(a)) {
                      var o,
                        l = a.length,
                        p = createTypedArray('float32', l);
                      for (o = 0; o < l; o += 1)
                        p[o] = (n[o] - a[o]) * s + a[o];
                      return p;
                    }
                    return (n - a) * s + a;
                  }
                  function nearestKey(t) {
                    var e,
                      i,
                      r,
                      a = data.k.length;
                    if (data.k.length && 'number' !== typeof data.k[0])
                      if (
                        ((i = -1),
                        (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                      )
                        (i = 1), (r = data.k[0].t);
                      else {
                        for (e = 0; e < a - 1; e += 1) {
                          if (t === data.k[e].t) {
                            (i = e + 1), (r = data.k[e].t);
                            break;
                          }
                          if (t > data.k[e].t && t < data.k[e + 1].t) {
                            t - data.k[e].t > data.k[e + 1].t - t
                              ? ((i = e + 2), (r = data.k[e + 1].t))
                              : ((i = e + 1), (r = data.k[e].t));
                            break;
                          }
                        }
                        -1 === i && ((i = e + 1), (r = data.k[e].t));
                      }
                    else (i = 0), (r = 0);
                    var n = {};
                    return (
                      (n.index = i),
                      (n.time = r / elem.comp.globalData.frameRate),
                      n
                    );
                  }
                  function key(t) {
                    var e, i, r;
                    if (!data.k.length || 'number' === typeof data.k[0])
                      throw new Error(
                        'The property has no keyframe at index ' + t
                      );
                    (t -= 1),
                      (e = {
                        time: data.k[t].t / elem.comp.globalData.frameRate,
                        value: [],
                      });
                    var a = Object.prototype.hasOwnProperty.call(data.k[t], 's')
                      ? data.k[t].s
                      : data.k[t - 1].e;
                    for (r = a.length, i = 0; i < r; i += 1)
                      (e[i] = a[i]), (e.value[i] = a[i]);
                    return e;
                  }
                  function framesToTime(t, e) {
                    return e || (e = elem.comp.globalData.frameRate), t / e;
                  }
                  function timeToFrames(t, e) {
                    return (
                      t || 0 === t || (t = time),
                      e || (e = elem.comp.globalData.frameRate),
                      t * e
                    );
                  }
                  function seedRandom(t) {
                    BMMath.seedrandom(randSeed + t);
                  }
                  function sourceRectAtTime() {
                    return elem.sourceRectAtTime();
                  }
                  function substring(t, e) {
                    return 'string' === typeof value
                      ? void 0 === e
                        ? value.substring(t)
                        : value.substring(t, e)
                      : '';
                  }
                  function substr(t, e) {
                    return 'string' === typeof value
                      ? void 0 === e
                        ? value.substr(t)
                        : value.substr(t, e)
                      : '';
                  }
                  function posterizeTime(t) {
                    (time = 0 === t ? 0 : Math.floor(time * t) / t),
                      (value = valueAtTime(time));
                  }
                  var index = elem.data.ind,
                    hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                    parent,
                    randSeed = Math.floor(1e6 * Math.random()),
                    globalData = elem.globalData;
                  function executeExpression(t) {
                    return (
                      (value = t),
                      this.frameExpressionId === elem.globalData.frameId &&
                      'textSelector' !== this.propType
                        ? value
                        : ('textSelector' === this.propType &&
                            ((textIndex = this.textIndex),
                            (textTotal = this.textTotal),
                            (selectorValue = this.selectorValue)),
                          thisLayer ||
                            ((text = elem.layerInterface.text),
                            (thisLayer = elem.layerInterface),
                            (thisComp = elem.comp.compInterface),
                            (toWorld = thisLayer.toWorld.bind(thisLayer)),
                            (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                            (fromComp = thisLayer.fromComp.bind(thisLayer)),
                            (toComp = thisLayer.toComp.bind(thisLayer)),
                            (mask = thisLayer.mask
                              ? thisLayer.mask.bind(thisLayer)
                              : null),
                            (fromCompToSurface = fromComp)),
                          transform ||
                            ((transform = elem.layerInterface(
                              'ADBE Transform Group'
                            )),
                            ($bm_transform = transform),
                            transform && (anchorPoint = transform.anchorPoint)),
                          4 !== elemType ||
                            content ||
                            (content = thisLayer('ADBE Root Vectors Group')),
                          effect || (effect = thisLayer(4)),
                          (hasParent = !(
                            !elem.hierarchy || !elem.hierarchy.length
                          )) &&
                            !parent &&
                            (parent = elem.hierarchy[0].layerInterface),
                          (time =
                            this.comp.renderedFrame /
                            this.comp.globalData.frameRate),
                          _needsRandom && seedRandom(randSeed + time),
                          needsVelocity && (velocity = velocityAtTime(time)),
                          expression_function(),
                          (this.frameExpressionId = elem.globalData.frameId),
                          (scoped_bm_rt =
                            scoped_bm_rt.propType === propTypes.SHAPE
                              ? scoped_bm_rt.v
                              : scoped_bm_rt))
                    );
                  }
                  return (
                    (executeExpression.__preventDeadCodeRemoval = [
                      $bm_transform,
                      anchorPoint,
                      time,
                      velocity,
                      inPoint,
                      outPoint,
                      width,
                      height,
                      name,
                      loop_in,
                      loop_out,
                      smooth,
                      toComp,
                      fromCompToSurface,
                      toWorld,
                      fromWorld,
                      mask,
                      position,
                      rotation,
                      scale,
                      thisComp,
                      numKeys,
                      active,
                      wiggle,
                      loopInDuration,
                      loopOutDuration,
                      comp,
                      lookAt,
                      easeOut,
                      easeIn,
                      ease,
                      nearestKey,
                      key,
                      text,
                      textIndex,
                      textTotal,
                      selectorValue,
                      framesToTime,
                      timeToFrames,
                      sourceRectAtTime,
                      substring,
                      substr,
                      posterizeTime,
                      index,
                      globalData,
                    ]),
                    executeExpression
                  );
                }
                return (
                  (ob.initiateExpression = initiateExpression),
                  (ob.__preventDeadCodeRemoval = [
                    window,
                    document,
                    XMLHttpRequest,
                    fetch,
                    frames,
                    $bm_neg,
                    add,
                    $bm_sum,
                    $bm_sub,
                    $bm_mul,
                    $bm_div,
                    $bm_mod,
                    clamp,
                    radians_to_degrees,
                    degreesToRadians,
                    degrees_to_radians,
                    normalize,
                    rgbToHsl,
                    hslToRgb,
                    linear,
                    random,
                    createPath,
                  ]),
                  ob
                );
              })(),
              expressionHelpers = {
                searchExpressions: function (t, e, i) {
                  e.x &&
                    ((i.k = !0),
                    (i.x = !0),
                    (i.initiateExpression =
                      ExpressionManager.initiateExpression),
                    i.effectsSequence.push(
                      i.initiateExpression(t, e, i).bind(i)
                    ));
                },
                getSpeedAtTime: function (t) {
                  var e = this.getValueAtTime(t),
                    i = this.getValueAtTime(t + -0.01),
                    r = 0;
                  if (e.length) {
                    var a;
                    for (a = 0; a < e.length; a += 1)
                      r += Math.pow(i[a] - e[a], 2);
                    r = 100 * Math.sqrt(r);
                  } else r = 0;
                  return r;
                },
                getVelocityAtTime: function (t) {
                  if (void 0 !== this.vel) return this.vel;
                  var e,
                    i,
                    r = -0.001,
                    a = this.getValueAtTime(t),
                    n = this.getValueAtTime(t + r);
                  if (a.length)
                    for (
                      e = createTypedArray('float32', a.length), i = 0;
                      i < a.length;
                      i += 1
                    )
                      e[i] = (n[i] - a[i]) / r;
                  else e = (n - a) / r;
                  return e;
                },
                getValueAtTime: function (t) {
                  return (
                    (t *= this.elem.globalData.frameRate),
                    (t -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
                      ((this._cachingAtTime.lastIndex =
                        this._cachingAtTime.lastFrame < t
                          ? this._cachingAtTime.lastIndex
                          : 0),
                      (this._cachingAtTime.value = this.interpolateValue(
                        t,
                        this._cachingAtTime
                      )),
                      (this._cachingAtTime.lastFrame = t)),
                    this._cachingAtTime.value
                  );
                },
                getStaticValueAtTime: function () {
                  return this.pv;
                },
                setGroupProperty: function (t) {
                  this.propertyGroup = t;
                },
              };
            function addPropertyDecorator() {
              function t(t, e, i) {
                if (!this.k || !this.keyframes) return this.pv;
                t = t ? t.toLowerCase() : '';
                var r,
                  a,
                  n,
                  s,
                  o,
                  l = this.comp.renderedFrame,
                  p = this.keyframes,
                  h = p[p.length - 1].t;
                if (l <= h) return this.pv;
                if (
                  (i
                    ? (a =
                        h -
                        (r = e
                          ? Math.abs(
                              h - this.elem.comp.globalData.frameRate * e
                            )
                          : Math.max(0, h - this.elem.data.ip)))
                    : ((!e || e > p.length - 1) && (e = p.length - 1),
                      (r = h - (a = p[p.length - 1 - e].t))),
                  'pingpong' === t)
                ) {
                  if (Math.floor((l - a) / r) % 2 !== 0)
                    return this.getValueAtTime(
                      (r - ((l - a) % r) + a) / this.comp.globalData.frameRate,
                      0
                    );
                } else {
                  if ('offset' === t) {
                    var c = this.getValueAtTime(
                        a / this.comp.globalData.frameRate,
                        0
                      ),
                      u = this.getValueAtTime(
                        h / this.comp.globalData.frameRate,
                        0
                      ),
                      f = this.getValueAtTime(
                        (((l - a) % r) + a) / this.comp.globalData.frameRate,
                        0
                      ),
                      m = Math.floor((l - a) / r);
                    if (this.pv.length) {
                      for (
                        s = (o = new Array(c.length)).length, n = 0;
                        n < s;
                        n += 1
                      )
                        o[n] = (u[n] - c[n]) * m + f[n];
                      return o;
                    }
                    return (u - c) * m + f;
                  }
                  if ('continue' === t) {
                    var d = this.getValueAtTime(
                        h / this.comp.globalData.frameRate,
                        0
                      ),
                      x = this.getValueAtTime(
                        (h - 0.001) / this.comp.globalData.frameRate,
                        0
                      );
                    if (this.pv.length) {
                      for (
                        s = (o = new Array(d.length)).length, n = 0;
                        n < s;
                        n += 1
                      )
                        o[n] =
                          d[n] +
                          ((d[n] - x[n]) *
                            ((l - h) / this.comp.globalData.frameRate)) /
                            5e-4;
                      return o;
                    }
                    return d + ((l - h) / 0.001) * (d - x);
                  }
                }
                return this.getValueAtTime(
                  (((l - a) % r) + a) / this.comp.globalData.frameRate,
                  0
                );
              }
              function e(t, e, i) {
                if (!this.k) return this.pv;
                t = t ? t.toLowerCase() : '';
                var r,
                  a,
                  n,
                  s,
                  o,
                  l = this.comp.renderedFrame,
                  p = this.keyframes,
                  h = p[0].t;
                if (l >= h) return this.pv;
                if (
                  (i
                    ? (a =
                        h +
                        (r = e
                          ? Math.abs(this.elem.comp.globalData.frameRate * e)
                          : Math.max(0, this.elem.data.op - h)))
                    : ((!e || e > p.length - 1) && (e = p.length - 1),
                      (r = (a = p[e].t) - h)),
                  'pingpong' === t)
                ) {
                  if (Math.floor((h - l) / r) % 2 === 0)
                    return this.getValueAtTime(
                      (((h - l) % r) + h) / this.comp.globalData.frameRate,
                      0
                    );
                } else {
                  if ('offset' === t) {
                    var c = this.getValueAtTime(
                        h / this.comp.globalData.frameRate,
                        0
                      ),
                      u = this.getValueAtTime(
                        a / this.comp.globalData.frameRate,
                        0
                      ),
                      f = this.getValueAtTime(
                        (r - ((h - l) % r) + h) /
                          this.comp.globalData.frameRate,
                        0
                      ),
                      m = Math.floor((h - l) / r) + 1;
                    if (this.pv.length) {
                      for (
                        s = (o = new Array(c.length)).length, n = 0;
                        n < s;
                        n += 1
                      )
                        o[n] = f[n] - (u[n] - c[n]) * m;
                      return o;
                    }
                    return f - (u - c) * m;
                  }
                  if ('continue' === t) {
                    var d = this.getValueAtTime(
                        h / this.comp.globalData.frameRate,
                        0
                      ),
                      x = this.getValueAtTime(
                        (h + 0.001) / this.comp.globalData.frameRate,
                        0
                      );
                    if (this.pv.length) {
                      for (
                        s = (o = new Array(d.length)).length, n = 0;
                        n < s;
                        n += 1
                      )
                        o[n] = d[n] + ((d[n] - x[n]) * (h - l)) / 0.001;
                      return o;
                    }
                    return d + ((d - x) * (h - l)) / 0.001;
                  }
                }
                return this.getValueAtTime(
                  (r - (((h - l) % r) + h)) / this.comp.globalData.frameRate,
                  0
                );
              }
              function i(t, e) {
                if (!this.k) return this.pv;
                if (((t = 0.5 * (t || 0.4)), (e = Math.floor(e || 5)) <= 1))
                  return this.pv;
                var i,
                  r,
                  a = this.comp.renderedFrame / this.comp.globalData.frameRate,
                  n = a - t,
                  s = e > 1 ? (a + t - n) / (e - 1) : 1,
                  o = 0,
                  l = 0;
                for (
                  i = this.pv.length
                    ? createTypedArray('float32', this.pv.length)
                    : 0;
                  o < e;

                ) {
                  if (((r = this.getValueAtTime(n + o * s)), this.pv.length))
                    for (l = 0; l < this.pv.length; l += 1) i[l] += r[l];
                  else i += r;
                  o += 1;
                }
                if (this.pv.length)
                  for (l = 0; l < this.pv.length; l += 1) i[l] /= e;
                else i /= e;
                return i;
              }
              function r(t) {
                this._transformCachingAtTime ||
                  (this._transformCachingAtTime = { v: new Matrix() });
                var e = this._transformCachingAtTime.v;
                if (
                  (e.cloneFromProps(this.pre.props),
                  this.appliedTransformations < 1)
                ) {
                  var i = this.a.getValueAtTime(t);
                  e.translate(
                    -i[0] * this.a.mult,
                    -i[1] * this.a.mult,
                    i[2] * this.a.mult
                  );
                }
                if (this.appliedTransformations < 2) {
                  var r = this.s.getValueAtTime(t);
                  e.scale(
                    r[0] * this.s.mult,
                    r[1] * this.s.mult,
                    r[2] * this.s.mult
                  );
                }
                if (this.sk && this.appliedTransformations < 3) {
                  var a = this.sk.getValueAtTime(t),
                    n = this.sa.getValueAtTime(t);
                  e.skewFromAxis(-a * this.sk.mult, n * this.sa.mult);
                }
                if (this.r && this.appliedTransformations < 4) {
                  var s = this.r.getValueAtTime(t);
                  e.rotate(-s * this.r.mult);
                } else if (!this.r && this.appliedTransformations < 4) {
                  var o = this.rz.getValueAtTime(t),
                    l = this.ry.getValueAtTime(t),
                    p = this.rx.getValueAtTime(t),
                    h = this.or.getValueAtTime(t);
                  e.rotateZ(-o * this.rz.mult)
                    .rotateY(l * this.ry.mult)
                    .rotateX(p * this.rx.mult)
                    .rotateZ(-h[2] * this.or.mult)
                    .rotateY(h[1] * this.or.mult)
                    .rotateX(h[0] * this.or.mult);
                }
                if (this.data.p && this.data.p.s) {
                  var c = this.px.getValueAtTime(t),
                    u = this.py.getValueAtTime(t);
                  if (this.data.p.z) {
                    var f = this.pz.getValueAtTime(t);
                    e.translate(
                      c * this.px.mult,
                      u * this.py.mult,
                      -f * this.pz.mult
                    );
                  } else e.translate(c * this.px.mult, u * this.py.mult, 0);
                } else {
                  var m = this.p.getValueAtTime(t);
                  e.translate(
                    m[0] * this.p.mult,
                    m[1] * this.p.mult,
                    -m[2] * this.p.mult
                  );
                }
                return e;
              }
              function a() {
                return this.v.clone(new Matrix());
              }
              var n = TransformPropertyFactory.getTransformProperty;
              TransformPropertyFactory.getTransformProperty = function (
                t,
                e,
                i
              ) {
                var s = n(t, e, i);
                return (
                  s.dynamicProperties.length
                    ? (s.getValueAtTime = r.bind(s))
                    : (s.getValueAtTime = a.bind(s)),
                  (s.setGroupProperty = expressionHelpers.setGroupProperty),
                  s
                );
              };
              var s = PropertyFactory.getProp;
              PropertyFactory.getProp = function (r, a, n, o, l) {
                var p = s(r, a, n, o, l);
                p.kf
                  ? (p.getValueAtTime =
                      expressionHelpers.getValueAtTime.bind(p))
                  : (p.getValueAtTime =
                      expressionHelpers.getStaticValueAtTime.bind(p)),
                  (p.setGroupProperty = expressionHelpers.setGroupProperty),
                  (p.loopOut = t),
                  (p.loopIn = e),
                  (p.smooth = i),
                  (p.getVelocityAtTime =
                    expressionHelpers.getVelocityAtTime.bind(p)),
                  (p.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(p)),
                  (p.numKeys = 1 === a.a ? a.k.length : 0),
                  (p.propertyIndex = a.ix);
                var h = 0;
                return (
                  0 !== n &&
                    (h = createTypedArray(
                      'float32',
                      1 === a.a ? a.k[0].s.length : a.k.length
                    )),
                  (p._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: h,
                  }),
                  expressionHelpers.searchExpressions(r, a, p),
                  p.k && l.addDynamicProperty(p),
                  p
                );
              };
              var o = ShapePropertyFactory.getConstructorFunction(),
                l = ShapePropertyFactory.getKeyframedConstructorFunction();
              function p() {}
              (p.prototype = {
                vertices: function (t, e) {
                  this.k && this.getValue();
                  var i,
                    r = this.v;
                  void 0 !== e && (r = this.getValueAtTime(e, 0));
                  var a = r._length,
                    n = r[t],
                    s = r.v,
                    o = createSizedArray(a);
                  for (i = 0; i < a; i += 1)
                    o[i] =
                      'i' === t || 'o' === t
                        ? [n[i][0] - s[i][0], n[i][1] - s[i][1]]
                        : [n[i][0], n[i][1]];
                  return o;
                },
                points: function (t) {
                  return this.vertices('v', t);
                },
                inTangents: function (t) {
                  return this.vertices('i', t);
                },
                outTangents: function (t) {
                  return this.vertices('o', t);
                },
                isClosed: function () {
                  return this.v.c;
                },
                pointOnPath: function (t, e) {
                  var i = this.v;
                  void 0 !== e && (i = this.getValueAtTime(e, 0)),
                    this._segmentsLength ||
                      (this._segmentsLength = bez.getSegmentsLength(i));
                  for (
                    var r,
                      a = this._segmentsLength,
                      n = a.lengths,
                      s = a.totalLength * t,
                      o = 0,
                      l = n.length,
                      p = 0;
                    o < l;

                  ) {
                    if (p + n[o].addedLength > s) {
                      var h = o,
                        c = i.c && o === l - 1 ? 0 : o + 1,
                        u = (s - p) / n[o].addedLength;
                      r = bez.getPointInSegment(
                        i.v[h],
                        i.v[c],
                        i.o[h],
                        i.i[c],
                        u,
                        n[o]
                      );
                      break;
                    }
                    (p += n[o].addedLength), (o += 1);
                  }
                  return (
                    r ||
                      (r = i.c
                        ? [i.v[0][0], i.v[0][1]]
                        : [i.v[i._length - 1][0], i.v[i._length - 1][1]]),
                    r
                  );
                },
                vectorOnPath: function (t, e, i) {
                  1 == t ? (t = this.v.c) : 0 == t && (t = 0.999);
                  var r = this.pointOnPath(t, e),
                    a = this.pointOnPath(t + 0.001, e),
                    n = a[0] - r[0],
                    s = a[1] - r[1],
                    o = Math.sqrt(Math.pow(n, 2) + Math.pow(s, 2));
                  return 0 === o
                    ? [0, 0]
                    : 'tangent' === i
                      ? [n / o, s / o]
                      : [-s / o, n / o];
                },
                tangentOnPath: function (t, e) {
                  return this.vectorOnPath(t, e, 'tangent');
                },
                normalOnPath: function (t, e) {
                  return this.vectorOnPath(t, e, 'normal');
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime,
              }),
                extendPrototype([p], o),
                extendPrototype([p], l),
                (l.prototype.getValueAtTime = function (t) {
                  return (
                    this._cachingAtTime ||
                      (this._cachingAtTime = {
                        shapeValue: shapePool.clone(this.pv),
                        lastIndex: 0,
                        lastTime: initialDefaultFrame,
                      }),
                    (t *= this.elem.globalData.frameRate),
                    (t -= this.offsetTime) !== this._cachingAtTime.lastTime &&
                      ((this._cachingAtTime.lastIndex =
                        this._cachingAtTime.lastTime < t
                          ? this._caching.lastIndex
                          : 0),
                      (this._cachingAtTime.lastTime = t),
                      this.interpolateShape(
                        t,
                        this._cachingAtTime.shapeValue,
                        this._cachingAtTime
                      )),
                    this._cachingAtTime.shapeValue
                  );
                }),
                (l.prototype.initiateExpression =
                  ExpressionManager.initiateExpression);
              var h = ShapePropertyFactory.getShapeProp;
              ShapePropertyFactory.getShapeProp = function (t, e, i, r, a) {
                var n = h(t, e, i, r, a);
                return (
                  (n.propertyIndex = e.ix),
                  (n.lock = !1),
                  3 === i
                    ? expressionHelpers.searchExpressions(t, e.pt, n)
                    : 4 === i &&
                      expressionHelpers.searchExpressions(t, e.ks, n),
                  n.k && t.addDynamicProperty(n),
                  n
                );
              };
            }
            function initialize$1() {
              addPropertyDecorator();
            }
            function addDecorator() {
              (TextProperty.prototype.getExpressionValue = function (t, e) {
                var i = this.calculateExpression(e);
                if (t.t !== i) {
                  var r = {};
                  return (
                    this.copyData(r, t),
                    (r.t = i.toString()),
                    (r.__complete = !1),
                    r
                  );
                }
                return t;
              }),
                (TextProperty.prototype.searchProperty = function () {
                  var t = this.searchKeyframes(),
                    e = this.searchExpressions();
                  return (this.kf = t || e), this.kf;
                }),
                (TextProperty.prototype.searchExpressions = function () {
                  return this.data.d.x
                    ? ((this.calculateExpression =
                        ExpressionManager.initiateExpression.bind(this)(
                          this.elem,
                          this.data.d,
                          this
                        )),
                      this.addEffect(this.getExpressionValue.bind(this)),
                      !0)
                    : null;
                });
            }
            function initialize() {
              addDecorator();
            }
            function SVGComposableEffect() {}
            function SVGTintFilter(t, e, i, r, a) {
              this.filterManager = e;
              var n = createNS('feColorMatrix');
              n.setAttribute('type', 'matrix'),
                n.setAttribute('color-interpolation-filters', 'linearRGB'),
                n.setAttribute(
                  'values',
                  '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'
                ),
                n.setAttribute('result', r + '_tint_1'),
                t.appendChild(n),
                (n = createNS('feColorMatrix')).setAttribute('type', 'matrix'),
                n.setAttribute('color-interpolation-filters', 'sRGB'),
                n.setAttribute(
                  'values',
                  '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'
                ),
                n.setAttribute('result', r + '_tint_2'),
                t.appendChild(n),
                (this.matrixFilter = n);
              var s = this.createMergeNode(r, [
                a,
                r + '_tint_1',
                r + '_tint_2',
              ]);
              t.appendChild(s);
            }
            function SVGFillFilter(t, e, i, r) {
              this.filterManager = e;
              var a = createNS('feColorMatrix');
              a.setAttribute('type', 'matrix'),
                a.setAttribute('color-interpolation-filters', 'sRGB'),
                a.setAttribute(
                  'values',
                  '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'
                ),
                a.setAttribute('result', r),
                t.appendChild(a),
                (this.matrixFilter = a);
            }
            function SVGStrokeEffect(t, e, i) {
              (this.initialized = !1),
                (this.filterManager = e),
                (this.elem = i),
                (this.paths = []);
            }
            function SVGTritoneFilter(t, e, i, r) {
              this.filterManager = e;
              var a = createNS('feColorMatrix');
              a.setAttribute('type', 'matrix'),
                a.setAttribute('color-interpolation-filters', 'linearRGB'),
                a.setAttribute(
                  'values',
                  '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'
                ),
                t.appendChild(a);
              var n = createNS('feComponentTransfer');
              n.setAttribute('color-interpolation-filters', 'sRGB'),
                n.setAttribute('result', r),
                (this.matrixFilter = n);
              var s = createNS('feFuncR');
              s.setAttribute('type', 'table'),
                n.appendChild(s),
                (this.feFuncR = s);
              var o = createNS('feFuncG');
              o.setAttribute('type', 'table'),
                n.appendChild(o),
                (this.feFuncG = o);
              var l = createNS('feFuncB');
              l.setAttribute('type', 'table'),
                n.appendChild(l),
                (this.feFuncB = l),
                t.appendChild(n);
            }
            function SVGProLevelsFilter(t, e, i, r) {
              this.filterManager = e;
              var a = this.filterManager.effectElements,
                n = createNS('feComponentTransfer');
              (a[10].p.k ||
                0 !== a[10].p.v ||
                a[11].p.k ||
                1 !== a[11].p.v ||
                a[12].p.k ||
                1 !== a[12].p.v ||
                a[13].p.k ||
                0 !== a[13].p.v ||
                a[14].p.k ||
                1 !== a[14].p.v) &&
                (this.feFuncR = this.createFeFunc('feFuncR', n)),
                (a[17].p.k ||
                  0 !== a[17].p.v ||
                  a[18].p.k ||
                  1 !== a[18].p.v ||
                  a[19].p.k ||
                  1 !== a[19].p.v ||
                  a[20].p.k ||
                  0 !== a[20].p.v ||
                  a[21].p.k ||
                  1 !== a[21].p.v) &&
                  (this.feFuncG = this.createFeFunc('feFuncG', n)),
                (a[24].p.k ||
                  0 !== a[24].p.v ||
                  a[25].p.k ||
                  1 !== a[25].p.v ||
                  a[26].p.k ||
                  1 !== a[26].p.v ||
                  a[27].p.k ||
                  0 !== a[27].p.v ||
                  a[28].p.k ||
                  1 !== a[28].p.v) &&
                  (this.feFuncB = this.createFeFunc('feFuncB', n)),
                (a[31].p.k ||
                  0 !== a[31].p.v ||
                  a[32].p.k ||
                  1 !== a[32].p.v ||
                  a[33].p.k ||
                  1 !== a[33].p.v ||
                  a[34].p.k ||
                  0 !== a[34].p.v ||
                  a[35].p.k ||
                  1 !== a[35].p.v) &&
                  (this.feFuncA = this.createFeFunc('feFuncA', n)),
                (this.feFuncR ||
                  this.feFuncG ||
                  this.feFuncB ||
                  this.feFuncA) &&
                  (n.setAttribute('color-interpolation-filters', 'sRGB'),
                  t.appendChild(n)),
                (a[3].p.k ||
                  0 !== a[3].p.v ||
                  a[4].p.k ||
                  1 !== a[4].p.v ||
                  a[5].p.k ||
                  1 !== a[5].p.v ||
                  a[6].p.k ||
                  0 !== a[6].p.v ||
                  a[7].p.k ||
                  1 !== a[7].p.v) &&
                  ((n = createNS('feComponentTransfer')).setAttribute(
                    'color-interpolation-filters',
                    'sRGB'
                  ),
                  n.setAttribute('result', r),
                  t.appendChild(n),
                  (this.feFuncRComposed = this.createFeFunc('feFuncR', n)),
                  (this.feFuncGComposed = this.createFeFunc('feFuncG', n)),
                  (this.feFuncBComposed = this.createFeFunc('feFuncB', n)));
            }
            function SVGDropShadowEffect(t, e, i, r, a) {
              var n = e.container.globalData.renderConfig.filterSize,
                s = e.data.fs || n;
              t.setAttribute('x', s.x || n.x),
                t.setAttribute('y', s.y || n.y),
                t.setAttribute('width', s.width || n.width),
                t.setAttribute('height', s.height || n.height),
                (this.filterManager = e);
              var o = createNS('feGaussianBlur');
              o.setAttribute('in', 'SourceAlpha'),
                o.setAttribute('result', r + '_drop_shadow_1'),
                o.setAttribute('stdDeviation', '0'),
                (this.feGaussianBlur = o),
                t.appendChild(o);
              var l = createNS('feOffset');
              l.setAttribute('dx', '25'),
                l.setAttribute('dy', '0'),
                l.setAttribute('in', r + '_drop_shadow_1'),
                l.setAttribute('result', r + '_drop_shadow_2'),
                (this.feOffset = l),
                t.appendChild(l);
              var p = createNS('feFlood');
              p.setAttribute('flood-color', '#00ff00'),
                p.setAttribute('flood-opacity', '1'),
                p.setAttribute('result', r + '_drop_shadow_3'),
                (this.feFlood = p),
                t.appendChild(p);
              var h = createNS('feComposite');
              h.setAttribute('in', r + '_drop_shadow_3'),
                h.setAttribute('in2', r + '_drop_shadow_2'),
                h.setAttribute('operator', 'in'),
                h.setAttribute('result', r + '_drop_shadow_4'),
                t.appendChild(h);
              var c = this.createMergeNode(r, [r + '_drop_shadow_4', a]);
              t.appendChild(c);
            }
            (SVGComposableEffect.prototype = {
              createMergeNode: function (t, e) {
                var i,
                  r,
                  a = createNS('feMerge');
                for (a.setAttribute('result', t), r = 0; r < e.length; r += 1)
                  (i = createNS('feMergeNode')).setAttribute('in', e[r]),
                    a.appendChild(i),
                    a.appendChild(i);
                return a;
              },
            }),
              extendPrototype([SVGComposableEffect], SVGTintFilter),
              (SVGTintFilter.prototype.renderFrame = function (t) {
                if (t || this.filterManager._mdf) {
                  var e = this.filterManager.effectElements[0].p.v,
                    i = this.filterManager.effectElements[1].p.v,
                    r = this.filterManager.effectElements[2].p.v / 100;
                  this.matrixFilter.setAttribute(
                    'values',
                    i[0] -
                      e[0] +
                      ' 0 0 0 ' +
                      e[0] +
                      ' ' +
                      (i[1] - e[1]) +
                      ' 0 0 0 ' +
                      e[1] +
                      ' ' +
                      (i[2] - e[2]) +
                      ' 0 0 0 ' +
                      e[2] +
                      ' 0 0 0 ' +
                      r +
                      ' 0'
                  );
                }
              }),
              (SVGFillFilter.prototype.renderFrame = function (t) {
                if (t || this.filterManager._mdf) {
                  var e = this.filterManager.effectElements[2].p.v,
                    i = this.filterManager.effectElements[6].p.v;
                  this.matrixFilter.setAttribute(
                    'values',
                    '0 0 0 0 ' +
                      e[0] +
                      ' 0 0 0 0 ' +
                      e[1] +
                      ' 0 0 0 0 ' +
                      e[2] +
                      ' 0 0 0 ' +
                      i +
                      ' 0'
                  );
                }
              }),
              (SVGStrokeEffect.prototype.initialize = function () {
                var t,
                  e,
                  i,
                  r,
                  a =
                    this.elem.layerElement.children ||
                    this.elem.layerElement.childNodes;
                for (
                  1 === this.filterManager.effectElements[1].p.v
                    ? ((r = this.elem.maskManager.masksProperties.length),
                      (i = 0))
                    : (r =
                        1 + (i = this.filterManager.effectElements[0].p.v - 1)),
                    (e = createNS('g')).setAttribute('fill', 'none'),
                    e.setAttribute('stroke-linecap', 'round'),
                    e.setAttribute('stroke-dashoffset', 1);
                  i < r;
                  i += 1
                )
                  (t = createNS('path')),
                    e.appendChild(t),
                    this.paths.push({ p: t, m: i });
                if (3 === this.filterManager.effectElements[10].p.v) {
                  var n = createNS('mask'),
                    s = createElementID();
                  n.setAttribute('id', s),
                    n.setAttribute('mask-type', 'alpha'),
                    n.appendChild(e),
                    this.elem.globalData.defs.appendChild(n);
                  var o = createNS('g');
                  for (
                    o.setAttribute(
                      'mask',
                      'url(' + getLocationHref() + '#' + s + ')'
                    );
                    a[0];

                  )
                    o.appendChild(a[0]);
                  this.elem.layerElement.appendChild(o),
                    (this.masker = n),
                    e.setAttribute('stroke', '#fff');
                } else if (
                  1 === this.filterManager.effectElements[10].p.v ||
                  2 === this.filterManager.effectElements[10].p.v
                ) {
                  if (2 === this.filterManager.effectElements[10].p.v)
                    for (
                      a =
                        this.elem.layerElement.children ||
                        this.elem.layerElement.childNodes;
                      a.length;

                    )
                      this.elem.layerElement.removeChild(a[0]);
                  this.elem.layerElement.appendChild(e),
                    this.elem.layerElement.removeAttribute('mask'),
                    e.setAttribute('stroke', '#fff');
                }
                (this.initialized = !0), (this.pathMasker = e);
              }),
              (SVGStrokeEffect.prototype.renderFrame = function (t) {
                var e;
                this.initialized || this.initialize();
                var i,
                  r,
                  a = this.paths.length;
                for (e = 0; e < a; e += 1)
                  if (
                    -1 !== this.paths[e].m &&
                    ((i = this.elem.maskManager.viewData[this.paths[e].m]),
                    (r = this.paths[e].p),
                    (t || this.filterManager._mdf || i.prop._mdf) &&
                      r.setAttribute('d', i.lastPath),
                    t ||
                      this.filterManager.effectElements[9].p._mdf ||
                      this.filterManager.effectElements[4].p._mdf ||
                      this.filterManager.effectElements[7].p._mdf ||
                      this.filterManager.effectElements[8].p._mdf ||
                      i.prop._mdf)
                  ) {
                    var n;
                    if (
                      0 !== this.filterManager.effectElements[7].p.v ||
                      100 !== this.filterManager.effectElements[8].p.v
                    ) {
                      var s =
                          0.01 *
                          Math.min(
                            this.filterManager.effectElements[7].p.v,
                            this.filterManager.effectElements[8].p.v
                          ),
                        o =
                          0.01 *
                          Math.max(
                            this.filterManager.effectElements[7].p.v,
                            this.filterManager.effectElements[8].p.v
                          ),
                        l = r.getTotalLength();
                      n = '0 0 0 ' + l * s + ' ';
                      var p,
                        h = l * (o - s),
                        c =
                          1 +
                          2 *
                            this.filterManager.effectElements[4].p.v *
                            this.filterManager.effectElements[9].p.v *
                            0.01,
                        u = Math.floor(h / c);
                      for (p = 0; p < u; p += 1)
                        n +=
                          '1 ' +
                          2 *
                            this.filterManager.effectElements[4].p.v *
                            this.filterManager.effectElements[9].p.v *
                            0.01 +
                          ' ';
                      n += '0 ' + 10 * l + ' 0 0';
                    } else
                      n =
                        '1 ' +
                        2 *
                          this.filterManager.effectElements[4].p.v *
                          this.filterManager.effectElements[9].p.v *
                          0.01;
                    r.setAttribute('stroke-dasharray', n);
                  }
                if (
                  ((t || this.filterManager.effectElements[4].p._mdf) &&
                    this.pathMasker.setAttribute(
                      'stroke-width',
                      2 * this.filterManager.effectElements[4].p.v
                    ),
                  (t || this.filterManager.effectElements[6].p._mdf) &&
                    this.pathMasker.setAttribute(
                      'opacity',
                      this.filterManager.effectElements[6].p.v
                    ),
                  (1 === this.filterManager.effectElements[10].p.v ||
                    2 === this.filterManager.effectElements[10].p.v) &&
                    (t || this.filterManager.effectElements[3].p._mdf))
                ) {
                  var f = this.filterManager.effectElements[3].p.v;
                  this.pathMasker.setAttribute(
                    'stroke',
                    'rgb(' +
                      bmFloor(255 * f[0]) +
                      ',' +
                      bmFloor(255 * f[1]) +
                      ',' +
                      bmFloor(255 * f[2]) +
                      ')'
                  );
                }
              }),
              (SVGTritoneFilter.prototype.renderFrame = function (t) {
                if (t || this.filterManager._mdf) {
                  var e = this.filterManager.effectElements[0].p.v,
                    i = this.filterManager.effectElements[1].p.v,
                    r = this.filterManager.effectElements[2].p.v,
                    a = r[0] + ' ' + i[0] + ' ' + e[0],
                    n = r[1] + ' ' + i[1] + ' ' + e[1],
                    s = r[2] + ' ' + i[2] + ' ' + e[2];
                  this.feFuncR.setAttribute('tableValues', a),
                    this.feFuncG.setAttribute('tableValues', n),
                    this.feFuncB.setAttribute('tableValues', s);
                }
              }),
              (SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
                var i = createNS(t);
                return i.setAttribute('type', 'table'), e.appendChild(i), i;
              }),
              (SVGProLevelsFilter.prototype.getTableValue = function (
                t,
                e,
                i,
                r,
                a
              ) {
                for (
                  var n,
                    s,
                    o = 0,
                    l = Math.min(t, e),
                    p = Math.max(t, e),
                    h = Array.call(null, { length: 256 }),
                    c = 0,
                    u = a - r,
                    f = e - t;
                  o <= 256;

                )
                  (s =
                    (n = o / 256) <= l
                      ? f < 0
                        ? a
                        : r
                      : n >= p
                        ? f < 0
                          ? r
                          : a
                        : r + u * Math.pow((n - t) / f, 1 / i)),
                    (h[c] = s),
                    (c += 1),
                    (o += 256 / 255);
                return h.join(' ');
              }),
              (SVGProLevelsFilter.prototype.renderFrame = function (t) {
                if (t || this.filterManager._mdf) {
                  var e,
                    i = this.filterManager.effectElements;
                  this.feFuncRComposed &&
                    (t ||
                      i[3].p._mdf ||
                      i[4].p._mdf ||
                      i[5].p._mdf ||
                      i[6].p._mdf ||
                      i[7].p._mdf) &&
                    ((e = this.getTableValue(
                      i[3].p.v,
                      i[4].p.v,
                      i[5].p.v,
                      i[6].p.v,
                      i[7].p.v
                    )),
                    this.feFuncRComposed.setAttribute('tableValues', e),
                    this.feFuncGComposed.setAttribute('tableValues', e),
                    this.feFuncBComposed.setAttribute('tableValues', e)),
                    this.feFuncR &&
                      (t ||
                        i[10].p._mdf ||
                        i[11].p._mdf ||
                        i[12].p._mdf ||
                        i[13].p._mdf ||
                        i[14].p._mdf) &&
                      ((e = this.getTableValue(
                        i[10].p.v,
                        i[11].p.v,
                        i[12].p.v,
                        i[13].p.v,
                        i[14].p.v
                      )),
                      this.feFuncR.setAttribute('tableValues', e)),
                    this.feFuncG &&
                      (t ||
                        i[17].p._mdf ||
                        i[18].p._mdf ||
                        i[19].p._mdf ||
                        i[20].p._mdf ||
                        i[21].p._mdf) &&
                      ((e = this.getTableValue(
                        i[17].p.v,
                        i[18].p.v,
                        i[19].p.v,
                        i[20].p.v,
                        i[21].p.v
                      )),
                      this.feFuncG.setAttribute('tableValues', e)),
                    this.feFuncB &&
                      (t ||
                        i[24].p._mdf ||
                        i[25].p._mdf ||
                        i[26].p._mdf ||
                        i[27].p._mdf ||
                        i[28].p._mdf) &&
                      ((e = this.getTableValue(
                        i[24].p.v,
                        i[25].p.v,
                        i[26].p.v,
                        i[27].p.v,
                        i[28].p.v
                      )),
                      this.feFuncB.setAttribute('tableValues', e)),
                    this.feFuncA &&
                      (t ||
                        i[31].p._mdf ||
                        i[32].p._mdf ||
                        i[33].p._mdf ||
                        i[34].p._mdf ||
                        i[35].p._mdf) &&
                      ((e = this.getTableValue(
                        i[31].p.v,
                        i[32].p.v,
                        i[33].p.v,
                        i[34].p.v,
                        i[35].p.v
                      )),
                      this.feFuncA.setAttribute('tableValues', e));
                }
              }),
              extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
              (SVGDropShadowEffect.prototype.renderFrame = function (t) {
                if (t || this.filterManager._mdf) {
                  if (
                    ((t || this.filterManager.effectElements[4].p._mdf) &&
                      this.feGaussianBlur.setAttribute(
                        'stdDeviation',
                        this.filterManager.effectElements[4].p.v / 4
                      ),
                    t || this.filterManager.effectElements[0].p._mdf)
                  ) {
                    var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute(
                      'flood-color',
                      rgbToHex(
                        Math.round(255 * e[0]),
                        Math.round(255 * e[1]),
                        Math.round(255 * e[2])
                      )
                    );
                  }
                  if (
                    ((t || this.filterManager.effectElements[1].p._mdf) &&
                      this.feFlood.setAttribute(
                        'flood-opacity',
                        this.filterManager.effectElements[1].p.v / 255
                      ),
                    t ||
                      this.filterManager.effectElements[2].p._mdf ||
                      this.filterManager.effectElements[3].p._mdf)
                  ) {
                    var i = this.filterManager.effectElements[3].p.v,
                      r =
                        (this.filterManager.effectElements[2].p.v - 90) *
                        degToRads,
                      a = i * Math.cos(r),
                      n = i * Math.sin(r);
                    this.feOffset.setAttribute('dx', a),
                      this.feOffset.setAttribute('dy', n);
                  }
                }
              });
            var _svgMatteSymbols = [];
            function SVGMatte3Effect(t, e, i) {
              (this.initialized = !1),
                (this.filterManager = e),
                (this.filterElem = t),
                (this.elem = i),
                (i.matteElement = createNS('g')),
                i.matteElement.appendChild(i.layerElement),
                i.matteElement.appendChild(i.transformedElement),
                (i.baseElement = i.matteElement);
            }
            function SVGGaussianBlurEffect(t, e, i, r) {
              t.setAttribute('x', '-100%'),
                t.setAttribute('y', '-100%'),
                t.setAttribute('width', '300%'),
                t.setAttribute('height', '300%'),
                (this.filterManager = e);
              var a = createNS('feGaussianBlur');
              a.setAttribute('result', r),
                t.appendChild(a),
                (this.feGaussianBlur = a);
            }
            return (
              (SVGMatte3Effect.prototype.findSymbol = function (t) {
                for (var e = 0, i = _svgMatteSymbols.length; e < i; ) {
                  if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                  e += 1;
                }
                return null;
              }),
              (SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
                var i = t.layerElement.parentNode;
                if (i) {
                  for (
                    var r, a = i.children, n = 0, s = a.length;
                    n < s && a[n] !== t.layerElement;

                  )
                    n += 1;
                  n <= s - 2 && (r = a[n + 1]);
                  var o = createNS('use');
                  o.setAttribute('href', '#' + e),
                    r ? i.insertBefore(o, r) : i.appendChild(o);
                }
              }),
              (SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
                if (!this.findSymbol(e)) {
                  var i = createElementID(),
                    r = createNS('mask');
                  r.setAttribute('id', e.layerId),
                    r.setAttribute('mask-type', 'alpha'),
                    _svgMatteSymbols.push(e);
                  var a = t.globalData.defs;
                  a.appendChild(r);
                  var n = createNS('symbol');
                  n.setAttribute('id', i),
                    this.replaceInParent(e, i),
                    n.appendChild(e.layerElement),
                    a.appendChild(n);
                  var s = createNS('use');
                  s.setAttribute('href', '#' + i),
                    r.appendChild(s),
                    (e.data.hd = !1),
                    e.show();
                }
                t.setMatte(e.layerId);
              }),
              (SVGMatte3Effect.prototype.initialize = function () {
                for (
                  var t = this.filterManager.effectElements[0].p.v,
                    e = this.elem.comp.elements,
                    i = 0,
                    r = e.length;
                  i < r;

                )
                  e[i] &&
                    e[i].data.ind === t &&
                    this.setElementAsMask(this.elem, e[i]),
                    (i += 1);
                this.initialized = !0;
              }),
              (SVGMatte3Effect.prototype.renderFrame = function () {
                this.initialized || this.initialize();
              }),
              (SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
                if (t || this.filterManager._mdf) {
                  var e = 0.3 * this.filterManager.effectElements[0].p.v,
                    i = this.filterManager.effectElements[1].p.v,
                    r = 3 == i ? 0 : e,
                    a = 2 == i ? 0 : e;
                  this.feGaussianBlur.setAttribute('stdDeviation', r + ' ' + a);
                  var n =
                    1 == this.filterManager.effectElements[2].p.v
                      ? 'wrap'
                      : 'duplicate';
                  this.feGaussianBlur.setAttribute('edgeMode', n);
                }
              }),
              registerRenderer('canvas', CanvasRenderer),
              registerRenderer('html', HybridRenderer),
              registerRenderer('svg', SVGRenderer),
              ShapeModifiers.registerModifier('tm', TrimModifier),
              ShapeModifiers.registerModifier('pb', PuckerAndBloatModifier),
              ShapeModifiers.registerModifier('rp', RepeaterModifier),
              ShapeModifiers.registerModifier('rd', RoundCornersModifier),
              setExpressionsPlugin(Expressions),
              initialize$1(),
              initialize(),
              registerEffect(20, SVGTintFilter, !0),
              registerEffect(21, SVGFillFilter, !0),
              registerEffect(22, SVGStrokeEffect, !1),
              registerEffect(23, SVGTritoneFilter, !0),
              registerEffect(24, SVGProLevelsFilter, !0),
              registerEffect(25, SVGDropShadowEffect, !0),
              registerEffect(28, SVGMatte3Effect, !1),
              registerEffect(29, SVGGaussianBlurEffect, !0),
              lottie
            );
          }),
          (module.exports = factory()));
      },
      463: function (t, e, i) {
        'use strict';
        var r = i(791),
          a = i(296);
        function n(t) {
          for (
            var e =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
              i = 1;
            i < arguments.length;
            i++
          )
            e += '&args[]=' + encodeURIComponent(arguments[i]);
          return (
            'Minified React error #' +
            t +
            '; visit ' +
            e +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var s = new Set(),
          o = {};
        function l(t, e) {
          p(t, e), p(t + 'Capture', e);
        }
        function p(t, e) {
          for (o[t] = e, t = 0; t < e.length; t++) s.add(e[t]);
        }
        var h = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          c = Object.prototype.hasOwnProperty,
          u =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = {},
          m = {};
        function d(t, e, i, r, a, n, s) {
          (this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = i),
            (this.propertyName = t),
            (this.type = e),
            (this.sanitizeURL = n),
            (this.removeEmptyString = s);
        }
        var x = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (t) {
            x[t] = new d(t, 0, !1, t, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (t) {
            var e = t[0];
            x[e] = new d(e, 1, !1, t[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (t) {
              x[t] = new d(t, 2, !1, t.toLowerCase(), null, !1, !1);
            }
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (t) {
            x[t] = new d(t, 2, !1, t, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (t) {
              x[t] = new d(t, 3, !1, t.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
            x[t] = new d(t, 3, !0, t, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (t) {
            x[t] = new d(t, 4, !1, t, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (t) {
            x[t] = new d(t, 6, !1, t, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (t) {
            x[t] = new d(t, 5, !1, t.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function k(t) {
          return t[1].toUpperCase();
        }
        function g(t, e, i, r) {
          var a = x.hasOwnProperty(e) ? x[e] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < e.length) ||
              ('o' !== e[0] && 'O' !== e[0]) ||
              ('n' !== e[1] && 'N' !== e[1])) &&
            ((function (t, e, i, r) {
              if (
                null === e ||
                'undefined' === typeof e ||
                (function (t, e, i, r) {
                  if (null !== i && 0 === i.type) return !1;
                  switch (typeof e) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== i
                          ? !i.acceptsBooleans
                          : 'data-' !== (t = t.toLowerCase().slice(0, 5)) &&
                            'aria-' !== t)
                      );
                    default:
                      return !1;
                  }
                })(t, e, i, r)
              )
                return !0;
              if (r) return !1;
              if (null !== i)
                switch (i.type) {
                  case 3:
                    return !e;
                  case 4:
                    return !1 === e;
                  case 5:
                    return isNaN(e);
                  case 6:
                    return isNaN(e) || 1 > e;
                }
              return !1;
            })(e, i, a, r) && (i = null),
            r || null === a
              ? (function (t) {
                  return (
                    !!c.call(m, t) ||
                    (!c.call(f, t) &&
                      (u.test(t) ? (m[t] = !0) : ((f[t] = !0), !1)))
                  );
                })(e) &&
                (null === i ? t.removeAttribute(e) : t.setAttribute(e, '' + i))
              : a.mustUseProperty
                ? (t[a.propertyName] = null === i ? 3 !== a.type && '' : i)
                : ((e = a.attributeName),
                  (r = a.attributeNamespace),
                  null === i
                    ? t.removeAttribute(e)
                    : ((i =
                        3 === (a = a.type) || (4 === a && !0 === i)
                          ? ''
                          : '' + i),
                      r ? t.setAttributeNS(r, e, i) : t.setAttribute(e, i))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (t) {
            var e = t.replace(y, k);
            x[e] = new d(e, 1, !1, t, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (t) {
              var e = t.replace(y, k);
              x[e] = new d(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
            var e = t.replace(y, k);
            x[e] = new d(
              e,
              1,
              !1,
              t,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (t) {
            x[t] = new d(t, 1, !1, t.toLowerCase(), null, !1, !1);
          }),
          (x.xlinkHref = new d(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (t) {
            x[t] = new d(t, 1, !1, t.toLowerCase(), null, !0, !0);
          });
        var v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          _ = Symbol.for('react.element'),
          E = Symbol.for('react.portal'),
          b = Symbol.for('react.fragment'),
          S = Symbol.for('react.strict_mode'),
          A = Symbol.for('react.profiler'),
          D = Symbol.for('react.provider'),
          P = Symbol.for('react.context'),
          G = Symbol.for('react.forward_ref'),
          B = Symbol.for('react.suspense'),
          V = Symbol.for('react.suspense_list'),
          F = Symbol.for('react.memo'),
          T = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var w = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var C = Symbol.iterator;
        function M(t) {
          return null === t || 'object' !== typeof t
            ? null
            : 'function' === typeof (t = (C && t[C]) || t['@@iterator'])
              ? t
              : null;
        }
        var I,
          R = Object.assign;
        function L(t) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (i) {
              var e = i.stack.trim().match(/\n( *(at )?)/);
              I = (e && e[1]) || '';
            }
          return '\n' + I + t;
        }
        var z = !1;
        function N(t, e) {
          if (!t || z) return '';
          z = !0;
          var i = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (e)
              if (
                ((e = function () {
                  throw Error();
                }),
                Object.defineProperty(e.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(e, []);
                } catch (p) {
                  var r = p;
                }
                Reflect.construct(t, [], e);
              } else {
                try {
                  e.call();
                } catch (p) {
                  r = p;
                }
                t.call(e.prototype);
              }
            else {
              try {
                throw Error();
              } catch (p) {
                r = p;
              }
              t();
            }
          } catch (p) {
            if (p && r && 'string' === typeof p.stack) {
              for (
                var a = p.stack.split('\n'),
                  n = r.stack.split('\n'),
                  s = a.length - 1,
                  o = n.length - 1;
                1 <= s && 0 <= o && a[s] !== n[o];

              )
                o--;
              for (; 1 <= s && 0 <= o; s--, o--)
                if (a[s] !== n[o]) {
                  if (1 !== s || 1 !== o)
                    do {
                      if ((s--, 0 > --o || a[s] !== n[o])) {
                        var l = '\n' + a[s].replace(' at new ', ' at ');
                        return (
                          t.displayName &&
                            l.includes('<anonymous>') &&
                            (l = l.replace('<anonymous>', t.displayName)),
                          l
                        );
                      }
                    } while (1 <= s && 0 <= o);
                  break;
                }
            }
          } finally {
            (z = !1), (Error.prepareStackTrace = i);
          }
          return (t = t ? t.displayName || t.name : '') ? L(t) : '';
        }
        function O(t) {
          switch (t.tag) {
            case 5:
              return L(t.type);
            case 16:
              return L('Lazy');
            case 13:
              return L('Suspense');
            case 19:
              return L('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (t = N(t.type, !1));
            case 11:
              return (t = N(t.type.render, !1));
            case 1:
              return (t = N(t.type, !0));
            default:
              return '';
          }
        }
        function H(t) {
          if (null == t) return null;
          if ('function' === typeof t) return t.displayName || t.name || null;
          if ('string' === typeof t) return t;
          switch (t) {
            case b:
              return 'Fragment';
            case E:
              return 'Portal';
            case A:
              return 'Profiler';
            case S:
              return 'StrictMode';
            case B:
              return 'Suspense';
            case V:
              return 'SuspenseList';
          }
          if ('object' === typeof t)
            switch (t.$$typeof) {
              case P:
                return (t.displayName || 'Context') + '.Consumer';
              case D:
                return (t._context.displayName || 'Context') + '.Provider';
              case G:
                var e = t.render;
                return (
                  (t = t.displayName) ||
                    (t =
                      '' !== (t = e.displayName || e.name || '')
                        ? 'ForwardRef(' + t + ')'
                        : 'ForwardRef'),
                  t
                );
              case F:
                return null !== (e = t.displayName || null)
                  ? e
                  : H(t.type) || 'Memo';
              case T:
                (e = t._payload), (t = t._init);
                try {
                  return H(t(e));
                } catch (i) {}
            }
          return null;
        }
        function j(t) {
          var e = t.type;
          switch (t.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (e.displayName || 'Context') + '.Consumer';
            case 10:
              return (e._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (t = (t = e.render).displayName || t.name || ''),
                e.displayName ||
                  ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return e;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return H(e);
            case 8:
              return e === S ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof e)
                return e.displayName || e.name || null;
              if ('string' === typeof e) return e;
          }
          return null;
        }
        function W(t) {
          switch (typeof t) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return t;
            default:
              return '';
          }
        }
        function q(t) {
          var e = t.type;
          return (
            (t = t.nodeName) &&
            'input' === t.toLowerCase() &&
            ('checkbox' === e || 'radio' === e)
          );
        }
        function $(t) {
          t._valueTracker ||
            (t._valueTracker = (function (t) {
              var e = q(t) ? 'checked' : 'value',
                i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
                r = '' + t[e];
              if (
                !t.hasOwnProperty(e) &&
                'undefined' !== typeof i &&
                'function' === typeof i.get &&
                'function' === typeof i.set
              ) {
                var a = i.get,
                  n = i.set;
                return (
                  Object.defineProperty(t, e, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (t) {
                      (r = '' + t), n.call(this, t);
                    },
                  }),
                  Object.defineProperty(t, e, { enumerable: i.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (t) {
                      r = '' + t;
                    },
                    stopTracking: function () {
                      (t._valueTracker = null), delete t[e];
                    },
                  }
                );
              }
            })(t));
        }
        function U(t) {
          if (!t) return !1;
          var e = t._valueTracker;
          if (!e) return !0;
          var i = e.getValue(),
            r = '';
          return (
            t && (r = q(t) ? (t.checked ? 'true' : 'false') : t.value),
            (t = r) !== i && (e.setValue(t), !0)
          );
        }
        function Y(t) {
          if (
            'undefined' ===
            typeof (t =
              t || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return t.activeElement || t.body;
          } catch (e) {
            return t.body;
          }
        }
        function Q(t, e) {
          var i = e.checked;
          return R({}, e, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != i ? i : t._wrapperState.initialChecked,
          });
        }
        function X(t, e) {
          var i = null == e.defaultValue ? '' : e.defaultValue,
            r = null != e.checked ? e.checked : e.defaultChecked;
          (i = W(null != e.value ? e.value : i)),
            (t._wrapperState = {
              initialChecked: r,
              initialValue: i,
              controlled:
                'checkbox' === e.type || 'radio' === e.type
                  ? null != e.checked
                  : null != e.value,
            });
        }
        function K(t, e) {
          null != (e = e.checked) && g(t, 'checked', e, !1);
        }
        function J(t, e) {
          K(t, e);
          var i = W(e.value),
            r = e.type;
          if (null != i)
            'number' === r
              ? ((0 === i && '' === t.value) || t.value != i) &&
                (t.value = '' + i)
              : t.value !== '' + i && (t.value = '' + i);
          else if ('submit' === r || 'reset' === r)
            return void t.removeAttribute('value');
          e.hasOwnProperty('value')
            ? tt(t, e.type, i)
            : e.hasOwnProperty('defaultValue') &&
              tt(t, e.type, W(e.defaultValue)),
            null == e.checked &&
              null != e.defaultChecked &&
              (t.defaultChecked = !!e.defaultChecked);
        }
        function Z(t, e, i) {
          if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
            var r = e.type;
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== e.value && null !== e.value)
              )
            )
              return;
            (e = '' + t._wrapperState.initialValue),
              i || e === t.value || (t.value = e),
              (t.defaultValue = e);
          }
          '' !== (i = t.name) && (t.name = ''),
            (t.defaultChecked = !!t._wrapperState.initialChecked),
            '' !== i && (t.name = i);
        }
        function tt(t, e, i) {
          ('number' === e && Y(t.ownerDocument) === t) ||
            (null == i
              ? (t.defaultValue = '' + t._wrapperState.initialValue)
              : t.defaultValue !== '' + i && (t.defaultValue = '' + i));
        }
        var et = Array.isArray;
        function it(t, e, i, r) {
          if (((t = t.options), e)) {
            e = {};
            for (var a = 0; a < i.length; a++) e['$' + i[a]] = !0;
            for (i = 0; i < t.length; i++)
              (a = e.hasOwnProperty('$' + t[i].value)),
                t[i].selected !== a && (t[i].selected = a),
                a && r && (t[i].defaultSelected = !0);
          } else {
            for (i = '' + W(i), e = null, a = 0; a < t.length; a++) {
              if (t[a].value === i)
                return (
                  (t[a].selected = !0), void (r && (t[a].defaultSelected = !0))
                );
              null !== e || t[a].disabled || (e = t[a]);
            }
            null !== e && (e.selected = !0);
          }
        }
        function rt(t, e) {
          if (null != e.dangerouslySetInnerHTML) throw Error(n(91));
          return R({}, e, {
            value: void 0,
            defaultValue: void 0,
            children: '' + t._wrapperState.initialValue,
          });
        }
        function at(t, e) {
          var i = e.value;
          if (null == i) {
            if (((i = e.children), (e = e.defaultValue), null != i)) {
              if (null != e) throw Error(n(92));
              if (et(i)) {
                if (1 < i.length) throw Error(n(93));
                i = i[0];
              }
              e = i;
            }
            null == e && (e = ''), (i = e);
          }
          t._wrapperState = { initialValue: W(i) };
        }
        function nt(t, e) {
          var i = W(e.value),
            r = W(e.defaultValue);
          null != i &&
            ((i = '' + i) !== t.value && (t.value = i),
            null == e.defaultValue &&
              t.defaultValue !== i &&
              (t.defaultValue = i)),
            null != r && (t.defaultValue = '' + r);
        }
        function st(t) {
          var e = t.textContent;
          e === t._wrapperState.initialValue &&
            '' !== e &&
            null !== e &&
            (t.value = e);
        }
        function ot(t) {
          switch (t) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function lt(t, e) {
          return null == t || 'http://www.w3.org/1999/xhtml' === t
            ? ot(e)
            : 'http://www.w3.org/2000/svg' === t && 'foreignObject' === e
              ? 'http://www.w3.org/1999/xhtml'
              : t;
        }
        var pt,
          ht,
          ct =
            ((ht = function (t, e) {
              if (
                'http://www.w3.org/2000/svg' !== t.namespaceURI ||
                'innerHTML' in t
              )
                t.innerHTML = e;
              else {
                for (
                  (pt = pt || document.createElement('div')).innerHTML =
                    '<svg>' + e.valueOf().toString() + '</svg>',
                    e = pt.firstChild;
                  t.firstChild;

                )
                  t.removeChild(t.firstChild);
                for (; e.firstChild; ) t.appendChild(e.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (t, e, i, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ht(t, e);
                  });
                }
              : ht);
        function ut(t, e) {
          if (e) {
            var i = t.firstChild;
            if (i && i === t.lastChild && 3 === i.nodeType)
              return void (i.nodeValue = e);
          }
          t.textContent = e;
        }
        var ft = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          mt = ['Webkit', 'ms', 'Moz', 'O'];
        function dt(t, e, i) {
          return null == e || 'boolean' === typeof e || '' === e
            ? ''
            : i ||
                'number' !== typeof e ||
                0 === e ||
                (ft.hasOwnProperty(t) && ft[t])
              ? ('' + e).trim()
              : e + 'px';
        }
        function xt(t, e) {
          for (var i in ((t = t.style), e))
            if (e.hasOwnProperty(i)) {
              var r = 0 === i.indexOf('--'),
                a = dt(i, e[i], r);
              'float' === i && (i = 'cssFloat'),
                r ? t.setProperty(i, a) : (t[i] = a);
            }
        }
        Object.keys(ft).forEach(function (t) {
          mt.forEach(function (e) {
            (e = e + t.charAt(0).toUpperCase() + t.substring(1)),
              (ft[e] = ft[t]);
          });
        });
        var yt = R(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function kt(t, e) {
          if (e) {
            if (
              yt[t] &&
              (null != e.children || null != e.dangerouslySetInnerHTML)
            )
              throw Error(n(137, t));
            if (null != e.dangerouslySetInnerHTML) {
              if (null != e.children) throw Error(n(60));
              if (
                'object' !== typeof e.dangerouslySetInnerHTML ||
                !('__html' in e.dangerouslySetInnerHTML)
              )
                throw Error(n(61));
            }
            if (null != e.style && 'object' !== typeof e.style)
              throw Error(n(62));
          }
        }
        function gt(t, e) {
          if (-1 === t.indexOf('-')) return 'string' === typeof e.is;
          switch (t) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var vt = null;
        function _t(t) {
          return (
            (t = t.target || t.srcElement || window).correspondingUseElement &&
              (t = t.correspondingUseElement),
            3 === t.nodeType ? t.parentNode : t
          );
        }
        var Et = null,
          bt = null,
          St = null;
        function At(t) {
          if ((t = ka(t))) {
            if ('function' !== typeof Et) throw Error(n(280));
            var e = t.stateNode;
            e && ((e = va(e)), Et(t.stateNode, t.type, e));
          }
        }
        function Dt(t) {
          bt ? (St ? St.push(t) : (St = [t])) : (bt = t);
        }
        function Pt() {
          if (bt) {
            var t = bt,
              e = St;
            if (((St = bt = null), At(t), e))
              for (t = 0; t < e.length; t++) At(e[t]);
          }
        }
        function Gt(t, e) {
          return t(e);
        }
        function Bt() {}
        var Vt = !1;
        function Ft(t, e, i) {
          if (Vt) return t(e, i);
          Vt = !0;
          try {
            return Gt(t, e, i);
          } finally {
            (Vt = !1), (null !== bt || null !== St) && (Bt(), Pt());
          }
        }
        function Tt(t, e) {
          var i = t.stateNode;
          if (null === i) return null;
          var r = va(i);
          if (null === r) return null;
          i = r[e];
          t: switch (e) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (t = t.type) ||
                  'input' === t ||
                  'select' === t ||
                  'textarea' === t
                )),
                (t = !r);
              break t;
            default:
              t = !1;
          }
          if (t) return null;
          if (i && 'function' !== typeof i) throw Error(n(231, e, typeof i));
          return i;
        }
        var wt = !1;
        if (h)
          try {
            var Ct = {};
            Object.defineProperty(Ct, 'passive', {
              get: function () {
                wt = !0;
              },
            }),
              window.addEventListener('test', Ct, Ct),
              window.removeEventListener('test', Ct, Ct);
          } catch (ht) {
            wt = !1;
          }
        function Mt(t, e, i, r, a, n, s, o, l) {
          var p = Array.prototype.slice.call(arguments, 3);
          try {
            e.apply(i, p);
          } catch (h) {
            this.onError(h);
          }
        }
        var It = !1,
          Rt = null,
          Lt = !1,
          zt = null,
          Nt = {
            onError: function (t) {
              (It = !0), (Rt = t);
            },
          };
        function Ot(t, e, i, r, a, n, s, o, l) {
          (It = !1), (Rt = null), Mt.apply(Nt, arguments);
        }
        function Ht(t) {
          var e = t,
            i = t;
          if (t.alternate) for (; e.return; ) e = e.return;
          else {
            t = e;
            do {
              0 !== (4098 & (e = t).flags) && (i = e.return), (t = e.return);
            } while (t);
          }
          return 3 === e.tag ? i : null;
        }
        function jt(t) {
          if (13 === t.tag) {
            var e = t.memoizedState;
            if (
              (null === e &&
                null !== (t = t.alternate) &&
                (e = t.memoizedState),
              null !== e)
            )
              return e.dehydrated;
          }
          return null;
        }
        function Wt(t) {
          if (Ht(t) !== t) throw Error(n(188));
        }
        function qt(t) {
          return null !==
            (t = (function (t) {
              var e = t.alternate;
              if (!e) {
                if (null === (e = Ht(t))) throw Error(n(188));
                return e !== t ? null : t;
              }
              for (var i = t, r = e; ; ) {
                var a = i.return;
                if (null === a) break;
                var s = a.alternate;
                if (null === s) {
                  if (null !== (r = a.return)) {
                    i = r;
                    continue;
                  }
                  break;
                }
                if (a.child === s.child) {
                  for (s = a.child; s; ) {
                    if (s === i) return Wt(a), t;
                    if (s === r) return Wt(a), e;
                    s = s.sibling;
                  }
                  throw Error(n(188));
                }
                if (i.return !== r.return) (i = a), (r = s);
                else {
                  for (var o = !1, l = a.child; l; ) {
                    if (l === i) {
                      (o = !0), (i = a), (r = s);
                      break;
                    }
                    if (l === r) {
                      (o = !0), (r = a), (i = s);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!o) {
                    for (l = s.child; l; ) {
                      if (l === i) {
                        (o = !0), (i = s), (r = a);
                        break;
                      }
                      if (l === r) {
                        (o = !0), (r = s), (i = a);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!o) throw Error(n(189));
                  }
                }
                if (i.alternate !== r) throw Error(n(190));
              }
              if (3 !== i.tag) throw Error(n(188));
              return i.stateNode.current === i ? t : e;
            })(t))
            ? $t(t)
            : null;
        }
        function $t(t) {
          if (5 === t.tag || 6 === t.tag) return t;
          for (t = t.child; null !== t; ) {
            var e = $t(t);
            if (null !== e) return e;
            t = t.sibling;
          }
          return null;
        }
        var Ut = a.unstable_scheduleCallback,
          Yt = a.unstable_cancelCallback,
          Qt = a.unstable_shouldYield,
          Xt = a.unstable_requestPaint,
          Kt = a.unstable_now,
          Jt = a.unstable_getCurrentPriorityLevel,
          Zt = a.unstable_ImmediatePriority,
          te = a.unstable_UserBlockingPriority,
          ee = a.unstable_NormalPriority,
          ie = a.unstable_LowPriority,
          re = a.unstable_IdlePriority,
          ae = null,
          ne = null;
        var se = Math.clz32
            ? Math.clz32
            : function (t) {
                return 0 === (t >>>= 0) ? 32 : (31 - ((oe(t) / le) | 0)) | 0;
              },
          oe = Math.log,
          le = Math.LN2;
        var pe = 64,
          he = 4194304;
        function ce(t) {
          switch (t & -t) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & t;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & t;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return t;
          }
        }
        function ue(t, e) {
          var i = t.pendingLanes;
          if (0 === i) return 0;
          var r = 0,
            a = t.suspendedLanes,
            n = t.pingedLanes,
            s = 268435455 & i;
          if (0 !== s) {
            var o = s & ~a;
            0 !== o ? (r = ce(o)) : 0 !== (n &= s) && (r = ce(n));
          } else 0 !== (s = i & ~a) ? (r = ce(s)) : 0 !== n && (r = ce(n));
          if (0 === r) return 0;
          if (
            0 !== e &&
            e !== r &&
            0 === (e & a) &&
            ((a = r & -r) >= (n = e & -e) || (16 === a && 0 !== (4194240 & n)))
          )
            return e;
          if ((0 !== (4 & r) && (r |= 16 & i), 0 !== (e = t.entangledLanes)))
            for (t = t.entanglements, e &= r; 0 < e; )
              (a = 1 << (i = 31 - se(e))), (r |= t[i]), (e &= ~a);
          return r;
        }
        function fe(t, e) {
          switch (t) {
            case 1:
            case 2:
            case 4:
              return e + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return e + 5e3;
            default:
              return -1;
          }
        }
        function me(t) {
          return 0 !== (t = -1073741825 & t.pendingLanes)
            ? t
            : 1073741824 & t
              ? 1073741824
              : 0;
        }
        function de() {
          var t = pe;
          return 0 === (4194240 & (pe <<= 1)) && (pe = 64), t;
        }
        function xe(t) {
          for (var e = [], i = 0; 31 > i; i++) e.push(t);
          return e;
        }
        function ye(t, e, i) {
          (t.pendingLanes |= e),
            536870912 !== e && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
            ((t = t.eventTimes)[(e = 31 - se(e))] = i);
        }
        function ke(t, e) {
          var i = (t.entangledLanes |= e);
          for (t = t.entanglements; i; ) {
            var r = 31 - se(i),
              a = 1 << r;
            (a & e) | (t[r] & e) && (t[r] |= e), (i &= ~a);
          }
        }
        var ge = 0;
        function ve(t) {
          return 1 < (t &= -t)
            ? 4 < t
              ? 0 !== (268435455 & t)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var _e,
          Ee,
          be,
          Se,
          Ae,
          De = !1,
          Pe = [],
          Ge = null,
          Be = null,
          Ve = null,
          Fe = new Map(),
          Te = new Map(),
          we = [],
          Ce =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function Me(t, e) {
          switch (t) {
            case 'focusin':
            case 'focusout':
              Ge = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Be = null;
              break;
            case 'mouseover':
            case 'mouseout':
              Ve = null;
              break;
            case 'pointerover':
            case 'pointerout':
              Fe.delete(e.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              Te.delete(e.pointerId);
          }
        }
        function Ie(t, e, i, r, a, n) {
          return null === t || t.nativeEvent !== n
            ? ((t = {
                blockedOn: e,
                domEventName: i,
                eventSystemFlags: r,
                nativeEvent: n,
                targetContainers: [a],
              }),
              null !== e && null !== (e = ka(e)) && Ee(e),
              t)
            : ((t.eventSystemFlags |= r),
              (e = t.targetContainers),
              null !== a && -1 === e.indexOf(a) && e.push(a),
              t);
        }
        function Re(t) {
          var e = ya(t.target);
          if (null !== e) {
            var i = Ht(e);
            if (null !== i)
              if (13 === (e = i.tag)) {
                if (null !== (e = jt(i)))
                  return (
                    (t.blockedOn = e),
                    void Ae(t.priority, function () {
                      be(i);
                    })
                  );
              } else if (
                3 === e &&
                i.stateNode.current.memoizedState.isDehydrated
              )
                return void (t.blockedOn =
                  3 === i.tag ? i.stateNode.containerInfo : null);
          }
          t.blockedOn = null;
        }
        function Le(t) {
          if (null !== t.blockedOn) return !1;
          for (var e = t.targetContainers; 0 < e.length; ) {
            var i = Qe(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
            if (null !== i)
              return null !== (e = ka(i)) && Ee(e), (t.blockedOn = i), !1;
            var r = new (i = t.nativeEvent).constructor(i.type, i);
            (vt = r), i.target.dispatchEvent(r), (vt = null), e.shift();
          }
          return !0;
        }
        function ze(t, e, i) {
          Le(t) && i.delete(e);
        }
        function Ne() {
          (De = !1),
            null !== Ge && Le(Ge) && (Ge = null),
            null !== Be && Le(Be) && (Be = null),
            null !== Ve && Le(Ve) && (Ve = null),
            Fe.forEach(ze),
            Te.forEach(ze);
        }
        function Oe(t, e) {
          t.blockedOn === e &&
            ((t.blockedOn = null),
            De ||
              ((De = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ne)));
        }
        function He(t) {
          function e(e) {
            return Oe(e, t);
          }
          if (0 < Pe.length) {
            Oe(Pe[0], t);
            for (var i = 1; i < Pe.length; i++) {
              var r = Pe[i];
              r.blockedOn === t && (r.blockedOn = null);
            }
          }
          for (
            null !== Ge && Oe(Ge, t),
              null !== Be && Oe(Be, t),
              null !== Ve && Oe(Ve, t),
              Fe.forEach(e),
              Te.forEach(e),
              i = 0;
            i < we.length;
            i++
          )
            (r = we[i]).blockedOn === t && (r.blockedOn = null);
          for (; 0 < we.length && null === (i = we[0]).blockedOn; )
            Re(i), null === i.blockedOn && we.shift();
        }
        var je = v.ReactCurrentBatchConfig,
          We = !0;
        function qe(t, e, i, r) {
          var a = ge,
            n = je.transition;
          je.transition = null;
          try {
            (ge = 1), Ue(t, e, i, r);
          } finally {
            (ge = a), (je.transition = n);
          }
        }
        function $e(t, e, i, r) {
          var a = ge,
            n = je.transition;
          je.transition = null;
          try {
            (ge = 4), Ue(t, e, i, r);
          } finally {
            (ge = a), (je.transition = n);
          }
        }
        function Ue(t, e, i, r) {
          if (We) {
            var a = Qe(t, e, i, r);
            if (null === a) jr(t, e, r, Ye, i), Me(t, r);
            else if (
              (function (t, e, i, r, a) {
                switch (e) {
                  case 'focusin':
                    return (Ge = Ie(Ge, t, e, i, r, a)), !0;
                  case 'dragenter':
                    return (Be = Ie(Be, t, e, i, r, a)), !0;
                  case 'mouseover':
                    return (Ve = Ie(Ve, t, e, i, r, a)), !0;
                  case 'pointerover':
                    var n = a.pointerId;
                    return Fe.set(n, Ie(Fe.get(n) || null, t, e, i, r, a)), !0;
                  case 'gotpointercapture':
                    return (
                      (n = a.pointerId),
                      Te.set(n, Ie(Te.get(n) || null, t, e, i, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, t, e, i, r)
            )
              r.stopPropagation();
            else if ((Me(t, r), 4 & e && -1 < Ce.indexOf(t))) {
              for (; null !== a; ) {
                var n = ka(a);
                if (
                  (null !== n && _e(n),
                  null === (n = Qe(t, e, i, r)) && jr(t, e, r, Ye, i),
                  n === a)
                )
                  break;
                a = n;
              }
              null !== a && r.stopPropagation();
            } else jr(t, e, r, null, i);
          }
        }
        var Ye = null;
        function Qe(t, e, i, r) {
          if (((Ye = null), null !== (t = ya((t = _t(r))))))
            if (null === (e = Ht(t))) t = null;
            else if (13 === (i = e.tag)) {
              if (null !== (t = jt(e))) return t;
              t = null;
            } else if (3 === i) {
              if (e.stateNode.current.memoizedState.isDehydrated)
                return 3 === e.tag ? e.stateNode.containerInfo : null;
              t = null;
            } else e !== t && (t = null);
          return (Ye = t), null;
        }
        function Xe(t) {
          switch (t) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Jt()) {
                case Zt:
                  return 1;
                case te:
                  return 4;
                case ee:
                case ie:
                  return 16;
                case re:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Ke = null,
          Je = null,
          Ze = null;
        function ti() {
          if (Ze) return Ze;
          var t,
            e,
            i = Je,
            r = i.length,
            a = 'value' in Ke ? Ke.value : Ke.textContent,
            n = a.length;
          for (t = 0; t < r && i[t] === a[t]; t++);
          var s = r - t;
          for (e = 1; e <= s && i[r - e] === a[n - e]; e++);
          return (Ze = a.slice(t, 1 < e ? 1 - e : void 0));
        }
        function ei(t) {
          var e = t.keyCode;
          return (
            'charCode' in t
              ? 0 === (t = t.charCode) && 13 === e && (t = 13)
              : (t = e),
            10 === t && (t = 13),
            32 <= t || 13 === t ? t : 0
          );
        }
        function ii() {
          return !0;
        }
        function ri() {
          return !1;
        }
        function ai(t) {
          function e(e, i, r, a, n) {
            for (var s in ((this._reactName = e),
            (this._targetInst = r),
            (this.type = i),
            (this.nativeEvent = a),
            (this.target = n),
            (this.currentTarget = null),
            t))
              t.hasOwnProperty(s) && ((e = t[s]), (this[s] = e ? e(a) : a[s]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? ii
                : ri),
              (this.isPropagationStopped = ri),
              this
            );
          }
          return (
            R(e.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t &&
                  (t.preventDefault
                    ? t.preventDefault()
                    : 'unknown' !== typeof t.returnValue &&
                      (t.returnValue = !1),
                  (this.isDefaultPrevented = ii));
              },
              stopPropagation: function () {
                var t = this.nativeEvent;
                t &&
                  (t.stopPropagation
                    ? t.stopPropagation()
                    : 'unknown' !== typeof t.cancelBubble &&
                      (t.cancelBubble = !0),
                  (this.isPropagationStopped = ii));
              },
              persist: function () {},
              isPersistent: ii,
            }),
            e
          );
        }
        var ni,
          si,
          oi,
          li = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (t) {
              return t.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          pi = ai(li),
          hi = R({}, li, { view: 0, detail: 0 }),
          ci = ai(hi),
          ui = R({}, hi, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Si,
            button: 0,
            buttons: 0,
            relatedTarget: function (t) {
              return void 0 === t.relatedTarget
                ? t.fromElement === t.srcElement
                  ? t.toElement
                  : t.fromElement
                : t.relatedTarget;
            },
            movementX: function (t) {
              return 'movementX' in t
                ? t.movementX
                : (t !== oi &&
                    (oi && 'mousemove' === t.type
                      ? ((ni = t.screenX - oi.screenX),
                        (si = t.screenY - oi.screenY))
                      : (si = ni = 0),
                    (oi = t)),
                  ni);
            },
            movementY: function (t) {
              return 'movementY' in t ? t.movementY : si;
            },
          }),
          fi = ai(ui),
          mi = ai(R({}, ui, { dataTransfer: 0 })),
          di = ai(R({}, hi, { relatedTarget: 0 })),
          xi = ai(
            R({}, li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yi = R({}, li, {
            clipboardData: function (t) {
              return 'clipboardData' in t
                ? t.clipboardData
                : window.clipboardData;
            },
          }),
          ki = ai(yi),
          gi = ai(R({}, li, { data: 0 })),
          vi = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          _i = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          Ei = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
        function bi(t) {
          var e = this.nativeEvent;
          return e.getModifierState
            ? e.getModifierState(t)
            : !!(t = Ei[t]) && !!e[t];
        }
        function Si() {
          return bi;
        }
        var Ai = R({}, hi, {
            key: function (t) {
              if (t.key) {
                var e = vi[t.key] || t.key;
                if ('Unidentified' !== e) return e;
              }
              return 'keypress' === t.type
                ? 13 === (t = ei(t))
                  ? 'Enter'
                  : String.fromCharCode(t)
                : 'keydown' === t.type || 'keyup' === t.type
                  ? _i[t.keyCode] || 'Unidentified'
                  : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Si,
            charCode: function (t) {
              return 'keypress' === t.type ? ei(t) : 0;
            },
            keyCode: function (t) {
              return 'keydown' === t.type || 'keyup' === t.type ? t.keyCode : 0;
            },
            which: function (t) {
              return 'keypress' === t.type
                ? ei(t)
                : 'keydown' === t.type || 'keyup' === t.type
                  ? t.keyCode
                  : 0;
            },
          }),
          Di = ai(Ai),
          Pi = ai(
            R({}, ui, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Gi = ai(
            R({}, hi, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Si,
            })
          ),
          Bi = ai(
            R({}, li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Vi = R({}, ui, {
            deltaX: function (t) {
              return 'deltaX' in t
                ? t.deltaX
                : 'wheelDeltaX' in t
                  ? -t.wheelDeltaX
                  : 0;
            },
            deltaY: function (t) {
              return 'deltaY' in t
                ? t.deltaY
                : 'wheelDeltaY' in t
                  ? -t.wheelDeltaY
                  : 'wheelDelta' in t
                    ? -t.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Fi = ai(Vi),
          Ti = [9, 13, 27, 32],
          wi = h && 'CompositionEvent' in window,
          Ci = null;
        h && 'documentMode' in document && (Ci = document.documentMode);
        var Mi = h && 'TextEvent' in window && !Ci,
          Ii = h && (!wi || (Ci && 8 < Ci && 11 >= Ci)),
          Ri = String.fromCharCode(32),
          Li = !1;
        function zi(t, e) {
          switch (t) {
            case 'keyup':
              return -1 !== Ti.indexOf(e.keyCode);
            case 'keydown':
              return 229 !== e.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Ni(t) {
          return 'object' === typeof (t = t.detail) && 'data' in t
            ? t.data
            : null;
        }
        var Oi = !1;
        var Hi = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function ji(t) {
          var e = t && t.nodeName && t.nodeName.toLowerCase();
          return 'input' === e ? !!Hi[t.type] : 'textarea' === e;
        }
        function Wi(t, e, i, r) {
          Dt(r),
            0 < (e = qr(e, 'onChange')).length &&
              ((i = new pi('onChange', 'change', null, i, r)),
              t.push({ event: i, listeners: e }));
        }
        var qi = null,
          $i = null;
        function Ui(t) {
          Rr(t, 0);
        }
        function Yi(t) {
          if (U(ga(t))) return t;
        }
        function Qi(t, e) {
          if ('change' === t) return e;
        }
        var Xi = !1;
        if (h) {
          var Ki;
          if (h) {
            var Ji = 'oninput' in document;
            if (!Ji) {
              var Zi = document.createElement('div');
              Zi.setAttribute('oninput', 'return;'),
                (Ji = 'function' === typeof Zi.oninput);
            }
            Ki = Ji;
          } else Ki = !1;
          Xi = Ki && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qi && (qi.detachEvent('onpropertychange', er), ($i = qi = null));
        }
        function er(t) {
          if ('value' === t.propertyName && Yi($i)) {
            var e = [];
            Wi(e, $i, t, _t(t)), Ft(Ui, e);
          }
        }
        function ir(t, e, i) {
          'focusin' === t
            ? (tr(), ($i = i), (qi = e).attachEvent('onpropertychange', er))
            : 'focusout' === t && tr();
        }
        function rr(t) {
          if ('selectionchange' === t || 'keyup' === t || 'keydown' === t)
            return Yi($i);
        }
        function ar(t, e) {
          if ('click' === t) return Yi(e);
        }
        function nr(t, e) {
          if ('input' === t || 'change' === t) return Yi(e);
        }
        var sr =
          'function' === typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t === 1 / e)) ||
                  (t !== t && e !== e)
                );
              };
        function or(t, e) {
          if (sr(t, e)) return !0;
          if (
            'object' !== typeof t ||
            null === t ||
            'object' !== typeof e ||
            null === e
          )
            return !1;
          var i = Object.keys(t),
            r = Object.keys(e);
          if (i.length !== r.length) return !1;
          for (r = 0; r < i.length; r++) {
            var a = i[r];
            if (!c.call(e, a) || !sr(t[a], e[a])) return !1;
          }
          return !0;
        }
        function lr(t) {
          for (; t && t.firstChild; ) t = t.firstChild;
          return t;
        }
        function pr(t, e) {
          var i,
            r = lr(t);
          for (t = 0; r; ) {
            if (3 === r.nodeType) {
              if (((i = t + r.textContent.length), t <= e && i >= e))
                return { node: r, offset: e - t };
              t = i;
            }
            t: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break t;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = lr(r);
          }
        }
        function hr(t, e) {
          return (
            !(!t || !e) &&
            (t === e ||
              ((!t || 3 !== t.nodeType) &&
                (e && 3 === e.nodeType
                  ? hr(t, e.parentNode)
                  : 'contains' in t
                    ? t.contains(e)
                    : !!t.compareDocumentPosition &&
                      !!(16 & t.compareDocumentPosition(e)))))
          );
        }
        function cr() {
          for (var t = window, e = Y(); e instanceof t.HTMLIFrameElement; ) {
            try {
              var i = 'string' === typeof e.contentWindow.location.href;
            } catch (r) {
              i = !1;
            }
            if (!i) break;
            e = Y((t = e.contentWindow).document);
          }
          return e;
        }
        function ur(t) {
          var e = t && t.nodeName && t.nodeName.toLowerCase();
          return (
            e &&
            (('input' === e &&
              ('text' === t.type ||
                'search' === t.type ||
                'tel' === t.type ||
                'url' === t.type ||
                'password' === t.type)) ||
              'textarea' === e ||
              'true' === t.contentEditable)
          );
        }
        function fr(t) {
          var e = cr(),
            i = t.focusedElem,
            r = t.selectionRange;
          if (
            e !== i &&
            i &&
            i.ownerDocument &&
            hr(i.ownerDocument.documentElement, i)
          ) {
            if (null !== r && ur(i))
              if (
                ((e = r.start),
                void 0 === (t = r.end) && (t = e),
                'selectionStart' in i)
              )
                (i.selectionStart = e),
                  (i.selectionEnd = Math.min(t, i.value.length));
              else if (
                (t =
                  ((e = i.ownerDocument || document) && e.defaultView) ||
                  window).getSelection
              ) {
                t = t.getSelection();
                var a = i.textContent.length,
                  n = Math.min(r.start, a);
                (r = void 0 === r.end ? n : Math.min(r.end, a)),
                  !t.extend && n > r && ((a = r), (r = n), (n = a)),
                  (a = pr(i, n));
                var s = pr(i, r);
                a &&
                  s &&
                  (1 !== t.rangeCount ||
                    t.anchorNode !== a.node ||
                    t.anchorOffset !== a.offset ||
                    t.focusNode !== s.node ||
                    t.focusOffset !== s.offset) &&
                  ((e = e.createRange()).setStart(a.node, a.offset),
                  t.removeAllRanges(),
                  n > r
                    ? (t.addRange(e), t.extend(s.node, s.offset))
                    : (e.setEnd(s.node, s.offset), t.addRange(e)));
              }
            for (e = [], t = i; (t = t.parentNode); )
              1 === t.nodeType &&
                e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
            for (
              'function' === typeof i.focus && i.focus(), i = 0;
              i < e.length;
              i++
            )
              ((t = e[i]).element.scrollLeft = t.left),
                (t.element.scrollTop = t.top);
          }
        }
        var mr = h && 'documentMode' in document && 11 >= document.documentMode,
          dr = null,
          xr = null,
          yr = null,
          kr = !1;
        function gr(t, e, i) {
          var r =
            i.window === i
              ? i.document
              : 9 === i.nodeType
                ? i
                : i.ownerDocument;
          kr ||
            null == dr ||
            dr !== Y(r) ||
            ('selectionStart' in (r = dr) && ur(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && or(yr, r)) ||
              ((yr = r),
              0 < (r = qr(xr, 'onSelect')).length &&
                ((e = new pi('onSelect', 'select', null, e, i)),
                t.push({ event: e, listeners: r }),
                (e.target = dr))));
        }
        function vr(t, e) {
          var i = {};
          return (
            (i[t.toLowerCase()] = e.toLowerCase()),
            (i['Webkit' + t] = 'webkit' + e),
            (i['Moz' + t] = 'moz' + e),
            i
          );
        }
        var _r = {
            animationend: vr('Animation', 'AnimationEnd'),
            animationiteration: vr('Animation', 'AnimationIteration'),
            animationstart: vr('Animation', 'AnimationStart'),
            transitionend: vr('Transition', 'TransitionEnd'),
          },
          Er = {},
          br = {};
        function Sr(t) {
          if (Er[t]) return Er[t];
          if (!_r[t]) return t;
          var e,
            i = _r[t];
          for (e in i)
            if (i.hasOwnProperty(e) && e in br) return (Er[t] = i[e]);
          return t;
        }
        h &&
          ((br = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete _r.animationend.animation,
            delete _r.animationiteration.animation,
            delete _r.animationstart.animation),
          'TransitionEvent' in window || delete _r.transitionend.transition);
        var Ar = Sr('animationend'),
          Dr = Sr('animationiteration'),
          Pr = Sr('animationstart'),
          Gr = Sr('transitionend'),
          Br = new Map(),
          Vr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            );
        function Fr(t, e) {
          Br.set(t, e), l(e, [t]);
        }
        for (var Tr = 0; Tr < Vr.length; Tr++) {
          var wr = Vr[Tr];
          Fr(wr.toLowerCase(), 'on' + (wr[0].toUpperCase() + wr.slice(1)));
        }
        Fr(Ar, 'onAnimationEnd'),
          Fr(Dr, 'onAnimationIteration'),
          Fr(Pr, 'onAnimationStart'),
          Fr('dblclick', 'onDoubleClick'),
          Fr('focusin', 'onFocus'),
          Fr('focusout', 'onBlur'),
          Fr(Gr, 'onTransitionEnd'),
          p('onMouseEnter', ['mouseout', 'mouseover']),
          p('onMouseLeave', ['mouseout', 'mouseover']),
          p('onPointerEnter', ['pointerout', 'pointerover']),
          p('onPointerLeave', ['pointerout', 'pointerover']),
          l(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' '
            )
          ),
          l(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          ),
          l('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          l(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          l(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          l(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          );
        var Cr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Mr = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Cr)
          );
        function Ir(t, e, i) {
          var r = t.type || 'unknown-event';
          (t.currentTarget = i),
            (function (t, e, i, r, a, s, o, l, p) {
              if ((Ot.apply(this, arguments), It)) {
                if (!It) throw Error(n(198));
                var h = Rt;
                (It = !1), (Rt = null), Lt || ((Lt = !0), (zt = h));
              }
            })(r, e, void 0, t),
            (t.currentTarget = null);
        }
        function Rr(t, e) {
          e = 0 !== (4 & e);
          for (var i = 0; i < t.length; i++) {
            var r = t[i],
              a = r.event;
            r = r.listeners;
            t: {
              var n = void 0;
              if (e)
                for (var s = r.length - 1; 0 <= s; s--) {
                  var o = r[s],
                    l = o.instance,
                    p = o.currentTarget;
                  if (((o = o.listener), l !== n && a.isPropagationStopped()))
                    break t;
                  Ir(a, o, p), (n = l);
                }
              else
                for (s = 0; s < r.length; s++) {
                  if (
                    ((l = (o = r[s]).instance),
                    (p = o.currentTarget),
                    (o = o.listener),
                    l !== n && a.isPropagationStopped())
                  )
                    break t;
                  Ir(a, o, p), (n = l);
                }
            }
          }
          if (Lt) throw ((t = zt), (Lt = !1), (zt = null), t);
        }
        function Lr(t, e) {
          var i = e[ma];
          void 0 === i && (i = e[ma] = new Set());
          var r = t + '__bubble';
          i.has(r) || (Hr(e, t, 2, !1), i.add(r));
        }
        function zr(t, e, i) {
          var r = 0;
          e && (r |= 4), Hr(i, t, r, e);
        }
        var Nr = '_reactListening' + Math.random().toString(36).slice(2);
        function Or(t) {
          if (!t[Nr]) {
            (t[Nr] = !0),
              s.forEach(function (e) {
                'selectionchange' !== e &&
                  (Mr.has(e) || zr(e, !1, t), zr(e, !0, t));
              });
            var e = 9 === t.nodeType ? t : t.ownerDocument;
            null === e || e[Nr] || ((e[Nr] = !0), zr('selectionchange', !1, e));
          }
        }
        function Hr(t, e, i, r) {
          switch (Xe(e)) {
            case 1:
              var a = qe;
              break;
            case 4:
              a = $e;
              break;
            default:
              a = Ue;
          }
          (i = a.bind(null, e, i, t)),
            (a = void 0),
            !wt ||
              ('touchstart' !== e && 'touchmove' !== e && 'wheel' !== e) ||
              (a = !0),
            r
              ? void 0 !== a
                ? t.addEventListener(e, i, { capture: !0, passive: a })
                : t.addEventListener(e, i, !0)
              : void 0 !== a
                ? t.addEventListener(e, i, { passive: a })
                : t.addEventListener(e, i, !1);
        }
        function jr(t, e, i, r, a) {
          var n = r;
          if (0 === (1 & e) && 0 === (2 & e) && null !== r)
            t: for (;;) {
              if (null === r) return;
              var s = r.tag;
              if (3 === s || 4 === s) {
                var o = r.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === s)
                  for (s = r.return; null !== s; ) {
                    var l = s.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = s.stateNode.containerInfo) === a ||
                        (8 === l.nodeType && l.parentNode === a))
                    )
                      return;
                    s = s.return;
                  }
                for (; null !== o; ) {
                  if (null === (s = ya(o))) return;
                  if (5 === (l = s.tag) || 6 === l) {
                    r = n = s;
                    continue t;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          Ft(function () {
            var r = n,
              a = _t(i),
              s = [];
            t: {
              var o = Br.get(t);
              if (void 0 !== o) {
                var l = pi,
                  p = t;
                switch (t) {
                  case 'keypress':
                    if (0 === ei(i)) break t;
                  case 'keydown':
                  case 'keyup':
                    l = Di;
                    break;
                  case 'focusin':
                    (p = 'focus'), (l = di);
                    break;
                  case 'focusout':
                    (p = 'blur'), (l = di);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    l = di;
                    break;
                  case 'click':
                    if (2 === i.button) break t;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    l = fi;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    l = mi;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    l = Gi;
                    break;
                  case Ar:
                  case Dr:
                  case Pr:
                    l = xi;
                    break;
                  case Gr:
                    l = Bi;
                    break;
                  case 'scroll':
                    l = ci;
                    break;
                  case 'wheel':
                    l = Fi;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    l = ki;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    l = Pi;
                }
                var h = 0 !== (4 & e),
                  c = !h && 'scroll' === t,
                  u = h ? (null !== o ? o + 'Capture' : null) : o;
                h = [];
                for (var f, m = r; null !== m; ) {
                  var d = (f = m).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== d &&
                      ((f = d),
                      null !== u &&
                        null != (d = Tt(m, u)) &&
                        h.push(Wr(m, d, f))),
                    c)
                  )
                    break;
                  m = m.return;
                }
                0 < h.length &&
                  ((o = new l(o, p, null, i, a)),
                  s.push({ event: o, listeners: h }));
              }
            }
            if (0 === (7 & e)) {
              if (
                ((l = 'mouseout' === t || 'pointerout' === t),
                (!(o = 'mouseover' === t || 'pointerover' === t) ||
                  i === vt ||
                  !(p = i.relatedTarget || i.fromElement) ||
                  (!ya(p) && !p[fa])) &&
                  (l || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                        ? o.defaultView || o.parentWindow
                        : window),
                  l
                    ? ((l = r),
                      null !==
                        (p = (p = i.relatedTarget || i.toElement)
                          ? ya(p)
                          : null) &&
                        (p !== (c = Ht(p)) || (5 !== p.tag && 6 !== p.tag)) &&
                        (p = null))
                    : ((l = null), (p = r)),
                  l !== p))
              ) {
                if (
                  ((h = fi),
                  (d = 'onMouseLeave'),
                  (u = 'onMouseEnter'),
                  (m = 'mouse'),
                  ('pointerout' !== t && 'pointerover' !== t) ||
                    ((h = Pi),
                    (d = 'onPointerLeave'),
                    (u = 'onPointerEnter'),
                    (m = 'pointer')),
                  (c = null == l ? o : ga(l)),
                  (f = null == p ? o : ga(p)),
                  ((o = new h(d, m + 'leave', l, i, a)).target = c),
                  (o.relatedTarget = f),
                  (d = null),
                  ya(a) === r &&
                    (((h = new h(u, m + 'enter', p, i, a)).target = f),
                    (h.relatedTarget = c),
                    (d = h)),
                  (c = d),
                  l && p)
                )
                  t: {
                    for (u = p, m = 0, f = h = l; f; f = $r(f)) m++;
                    for (f = 0, d = u; d; d = $r(d)) f++;
                    for (; 0 < m - f; ) (h = $r(h)), m--;
                    for (; 0 < f - m; ) (u = $r(u)), f--;
                    for (; m--; ) {
                      if (h === u || (null !== u && h === u.alternate)) break t;
                      (h = $r(h)), (u = $r(u));
                    }
                    h = null;
                  }
                else h = null;
                null !== l && Ur(s, o, l, h, !1),
                  null !== p && null !== c && Ur(s, c, p, h, !0);
              }
              if (
                'select' ===
                  (l =
                    (o = r ? ga(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ('input' === l && 'file' === o.type)
              )
                var x = Qi;
              else if (ji(o))
                if (Xi) x = nr;
                else {
                  x = rr;
                  var y = ir;
                }
              else
                (l = o.nodeName) &&
                  'input' === l.toLowerCase() &&
                  ('checkbox' === o.type || 'radio' === o.type) &&
                  (x = ar);
              switch (
                (x && (x = x(t, r))
                  ? Wi(s, x, i, a)
                  : (y && y(t, o, r),
                    'focusout' === t &&
                      (y = o._wrapperState) &&
                      y.controlled &&
                      'number' === o.type &&
                      tt(o, 'number', o.value)),
                (y = r ? ga(r) : window),
                t)
              ) {
                case 'focusin':
                  (ji(y) || 'true' === y.contentEditable) &&
                    ((dr = y), (xr = r), (yr = null));
                  break;
                case 'focusout':
                  yr = xr = dr = null;
                  break;
                case 'mousedown':
                  kr = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (kr = !1), gr(s, i, a);
                  break;
                case 'selectionchange':
                  if (mr) break;
                case 'keydown':
                case 'keyup':
                  gr(s, i, a);
              }
              var k;
              if (wi)
                t: {
                  switch (t) {
                    case 'compositionstart':
                      var g = 'onCompositionStart';
                      break t;
                    case 'compositionend':
                      g = 'onCompositionEnd';
                      break t;
                    case 'compositionupdate':
                      g = 'onCompositionUpdate';
                      break t;
                  }
                  g = void 0;
                }
              else
                Oi
                  ? zi(t, i) && (g = 'onCompositionEnd')
                  : 'keydown' === t &&
                    229 === i.keyCode &&
                    (g = 'onCompositionStart');
              g &&
                (Ii &&
                  'ko' !== i.locale &&
                  (Oi || 'onCompositionStart' !== g
                    ? 'onCompositionEnd' === g && Oi && (k = ti())
                    : ((Je = 'value' in (Ke = a) ? Ke.value : Ke.textContent),
                      (Oi = !0))),
                0 < (y = qr(r, g)).length &&
                  ((g = new gi(g, t, null, i, a)),
                  s.push({ event: g, listeners: y }),
                  k ? (g.data = k) : null !== (k = Ni(i)) && (g.data = k))),
                (k = Mi
                  ? (function (t, e) {
                      switch (t) {
                        case 'compositionend':
                          return Ni(e);
                        case 'keypress':
                          return 32 !== e.which ? null : ((Li = !0), Ri);
                        case 'textInput':
                          return (t = e.data) === Ri && Li ? null : t;
                        default:
                          return null;
                      }
                    })(t, i)
                  : (function (t, e) {
                      if (Oi)
                        return 'compositionend' === t || (!wi && zi(t, e))
                          ? ((t = ti()), (Ze = Je = Ke = null), (Oi = !1), t)
                          : null;
                      switch (t) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (
                            !(e.ctrlKey || e.altKey || e.metaKey) ||
                            (e.ctrlKey && e.altKey)
                          ) {
                            if (e.char && 1 < e.char.length) return e.char;
                            if (e.which) return String.fromCharCode(e.which);
                          }
                          return null;
                        case 'compositionend':
                          return Ii && 'ko' !== e.locale ? null : e.data;
                      }
                    })(t, i)) &&
                  0 < (r = qr(r, 'onBeforeInput')).length &&
                  ((a = new gi('onBeforeInput', 'beforeinput', null, i, a)),
                  s.push({ event: a, listeners: r }),
                  (a.data = k));
            }
            Rr(s, e);
          });
        }
        function Wr(t, e, i) {
          return { instance: t, listener: e, currentTarget: i };
        }
        function qr(t, e) {
          for (var i = e + 'Capture', r = []; null !== t; ) {
            var a = t,
              n = a.stateNode;
            5 === a.tag &&
              null !== n &&
              ((a = n),
              null != (n = Tt(t, i)) && r.unshift(Wr(t, n, a)),
              null != (n = Tt(t, e)) && r.push(Wr(t, n, a))),
              (t = t.return);
          }
          return r;
        }
        function $r(t) {
          if (null === t) return null;
          do {
            t = t.return;
          } while (t && 5 !== t.tag);
          return t || null;
        }
        function Ur(t, e, i, r, a) {
          for (var n = e._reactName, s = []; null !== i && i !== r; ) {
            var o = i,
              l = o.alternate,
              p = o.stateNode;
            if (null !== l && l === r) break;
            5 === o.tag &&
              null !== p &&
              ((o = p),
              a
                ? null != (l = Tt(i, n)) && s.unshift(Wr(i, l, o))
                : a || (null != (l = Tt(i, n)) && s.push(Wr(i, l, o)))),
              (i = i.return);
          }
          0 !== s.length && t.push({ event: e, listeners: s });
        }
        var Yr = /\r\n?/g,
          Qr = /\u0000|\uFFFD/g;
        function Xr(t) {
          return ('string' === typeof t ? t : '' + t)
            .replace(Yr, '\n')
            .replace(Qr, '');
        }
        function Kr(t, e, i) {
          if (((e = Xr(e)), Xr(t) !== e && i)) throw Error(n(425));
        }
        function Jr() {}
        var Zr = null,
          ta = null;
        function ea(t, e) {
          return (
            'textarea' === t ||
            'noscript' === t ||
            'string' === typeof e.children ||
            'number' === typeof e.children ||
            ('object' === typeof e.dangerouslySetInnerHTML &&
              null !== e.dangerouslySetInnerHTML &&
              null != e.dangerouslySetInnerHTML.__html)
          );
        }
        var ia = 'function' === typeof setTimeout ? setTimeout : void 0,
          ra = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          aa = 'function' === typeof Promise ? Promise : void 0,
          na =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof aa
                ? function (t) {
                    return aa.resolve(null).then(t).catch(sa);
                  }
                : ia;
        function sa(t) {
          setTimeout(function () {
            throw t;
          });
        }
        function oa(t, e) {
          var i = e,
            r = 0;
          do {
            var a = i.nextSibling;
            if ((t.removeChild(i), a && 8 === a.nodeType))
              if ('/$' === (i = a.data)) {
                if (0 === r) return t.removeChild(a), void He(e);
                r--;
              } else ('$' !== i && '$?' !== i && '$!' !== i) || r++;
            i = a;
          } while (i);
          He(e);
        }
        function la(t) {
          for (; null != t; t = t.nextSibling) {
            var e = t.nodeType;
            if (1 === e || 3 === e) break;
            if (8 === e) {
              if ('$' === (e = t.data) || '$!' === e || '$?' === e) break;
              if ('/$' === e) return null;
            }
          }
          return t;
        }
        function pa(t) {
          t = t.previousSibling;
          for (var e = 0; t; ) {
            if (8 === t.nodeType) {
              var i = t.data;
              if ('$' === i || '$!' === i || '$?' === i) {
                if (0 === e) return t;
                e--;
              } else '/$' === i && e++;
            }
            t = t.previousSibling;
          }
          return null;
        }
        var ha = Math.random().toString(36).slice(2),
          ca = '__reactFiber$' + ha,
          ua = '__reactProps$' + ha,
          fa = '__reactContainer$' + ha,
          ma = '__reactEvents$' + ha,
          da = '__reactListeners$' + ha,
          xa = '__reactHandles$' + ha;
        function ya(t) {
          var e = t[ca];
          if (e) return e;
          for (var i = t.parentNode; i; ) {
            if ((e = i[fa] || i[ca])) {
              if (
                ((i = e.alternate),
                null !== e.child || (null !== i && null !== i.child))
              )
                for (t = pa(t); null !== t; ) {
                  if ((i = t[ca])) return i;
                  t = pa(t);
                }
              return e;
            }
            i = (t = i).parentNode;
          }
          return null;
        }
        function ka(t) {
          return !(t = t[ca] || t[fa]) ||
            (5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag)
            ? null
            : t;
        }
        function ga(t) {
          if (5 === t.tag || 6 === t.tag) return t.stateNode;
          throw Error(n(33));
        }
        function va(t) {
          return t[ua] || null;
        }
        var _a = [],
          Ea = -1;
        function ba(t) {
          return { current: t };
        }
        function Sa(t) {
          0 > Ea || ((t.current = _a[Ea]), (_a[Ea] = null), Ea--);
        }
        function Aa(t, e) {
          Ea++, (_a[Ea] = t.current), (t.current = e);
        }
        var Da = {},
          Pa = ba(Da),
          Ga = ba(!1),
          Ba = Da;
        function Va(t, e) {
          var i = t.type.contextTypes;
          if (!i) return Da;
          var r = t.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            n = {};
          for (a in i) n[a] = e[a];
          return (
            r &&
              (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                e),
              (t.__reactInternalMemoizedMaskedChildContext = n)),
            n
          );
        }
        function Fa(t) {
          return null !== (t = t.childContextTypes) && void 0 !== t;
        }
        function Ta() {
          Sa(Ga), Sa(Pa);
        }
        function wa(t, e, i) {
          if (Pa.current !== Da) throw Error(n(168));
          Aa(Pa, e), Aa(Ga, i);
        }
        function Ca(t, e, i) {
          var r = t.stateNode;
          if (
            ((e = e.childContextTypes), 'function' !== typeof r.getChildContext)
          )
            return i;
          for (var a in (r = r.getChildContext()))
            if (!(a in e)) throw Error(n(108, j(t) || 'Unknown', a));
          return R({}, i, r);
        }
        function Ma(t) {
          return (
            (t =
              ((t = t.stateNode) &&
                t.__reactInternalMemoizedMergedChildContext) ||
              Da),
            (Ba = Pa.current),
            Aa(Pa, t),
            Aa(Ga, Ga.current),
            !0
          );
        }
        function Ia(t, e, i) {
          var r = t.stateNode;
          if (!r) throw Error(n(169));
          i
            ? ((t = Ca(t, e, Ba)),
              (r.__reactInternalMemoizedMergedChildContext = t),
              Sa(Ga),
              Sa(Pa),
              Aa(Pa, t))
            : Sa(Ga),
            Aa(Ga, i);
        }
        var Ra = null,
          La = !1,
          za = !1;
        function Na(t) {
          null === Ra ? (Ra = [t]) : Ra.push(t);
        }
        function Oa() {
          if (!za && null !== Ra) {
            za = !0;
            var t = 0,
              e = ge;
            try {
              var i = Ra;
              for (ge = 1; t < i.length; t++) {
                var r = i[t];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ra = null), (La = !1);
            } catch (a) {
              throw (null !== Ra && (Ra = Ra.slice(t + 1)), Ut(Zt, Oa), a);
            } finally {
              (ge = e), (za = !1);
            }
          }
          return null;
        }
        var Ha = [],
          ja = 0,
          Wa = null,
          qa = 0,
          $a = [],
          Ua = 0,
          Ya = null,
          Qa = 1,
          Xa = '';
        function Ka(t, e) {
          (Ha[ja++] = qa), (Ha[ja++] = Wa), (Wa = t), (qa = e);
        }
        function Ja(t, e, i) {
          ($a[Ua++] = Qa), ($a[Ua++] = Xa), ($a[Ua++] = Ya), (Ya = t);
          var r = Qa;
          t = Xa;
          var a = 32 - se(r) - 1;
          (r &= ~(1 << a)), (i += 1);
          var n = 32 - se(e) + a;
          if (30 < n) {
            var s = a - (a % 5);
            (n = (r & ((1 << s) - 1)).toString(32)),
              (r >>= s),
              (a -= s),
              (Qa = (1 << (32 - se(e) + a)) | (i << a) | r),
              (Xa = n + t);
          } else (Qa = (1 << n) | (i << a) | r), (Xa = t);
        }
        function Za(t) {
          null !== t.return && (Ka(t, 1), Ja(t, 1, 0));
        }
        function tn(t) {
          for (; t === Wa; )
            (Wa = Ha[--ja]), (Ha[ja] = null), (qa = Ha[--ja]), (Ha[ja] = null);
          for (; t === Ya; )
            (Ya = $a[--Ua]),
              ($a[Ua] = null),
              (Xa = $a[--Ua]),
              ($a[Ua] = null),
              (Qa = $a[--Ua]),
              ($a[Ua] = null);
        }
        var en = null,
          rn = null,
          an = !1,
          nn = null;
        function sn(t, e) {
          var i = Fp(5, null, null, 0);
          (i.elementType = 'DELETED'),
            (i.stateNode = e),
            (i.return = t),
            null === (e = t.deletions)
              ? ((t.deletions = [i]), (t.flags |= 16))
              : e.push(i);
        }
        function on(t, e) {
          switch (t.tag) {
            case 5:
              var i = t.type;
              return (
                null !==
                  (e =
                    1 !== e.nodeType ||
                    i.toLowerCase() !== e.nodeName.toLowerCase()
                      ? null
                      : e) &&
                ((t.stateNode = e), (en = t), (rn = la(e.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (e = '' === t.pendingProps || 3 !== e.nodeType ? null : e) &&
                ((t.stateNode = e), (en = t), (rn = null), !0)
              );
            case 13:
              return (
                null !== (e = 8 !== e.nodeType ? null : e) &&
                ((i = null !== Ya ? { id: Qa, overflow: Xa } : null),
                (t.memoizedState = {
                  dehydrated: e,
                  treeContext: i,
                  retryLane: 1073741824,
                }),
                ((i = Fp(18, null, null, 0)).stateNode = e),
                (i.return = t),
                (t.child = i),
                (en = t),
                (rn = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ln(t) {
          return 0 !== (1 & t.mode) && 0 === (128 & t.flags);
        }
        function pn(t) {
          if (an) {
            var e = rn;
            if (e) {
              var i = e;
              if (!on(t, e)) {
                if (ln(t)) throw Error(n(418));
                e = la(i.nextSibling);
                var r = en;
                e && on(t, e)
                  ? sn(r, i)
                  : ((t.flags = (-4097 & t.flags) | 2), (an = !1), (en = t));
              }
            } else {
              if (ln(t)) throw Error(n(418));
              (t.flags = (-4097 & t.flags) | 2), (an = !1), (en = t);
            }
          }
        }
        function hn(t) {
          for (
            t = t.return;
            null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;

          )
            t = t.return;
          en = t;
        }
        function cn(t) {
          if (t !== en) return !1;
          if (!an) return hn(t), (an = !0), !1;
          var e;
          if (
            ((e = 3 !== t.tag) &&
              !(e = 5 !== t.tag) &&
              (e =
                'head' !== (e = t.type) &&
                'body' !== e &&
                !ea(t.type, t.memoizedProps)),
            e && (e = rn))
          ) {
            if (ln(t)) throw (un(), Error(n(418)));
            for (; e; ) sn(t, e), (e = la(e.nextSibling));
          }
          if ((hn(t), 13 === t.tag)) {
            if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null))
              throw Error(n(317));
            t: {
              for (t = t.nextSibling, e = 0; t; ) {
                if (8 === t.nodeType) {
                  var i = t.data;
                  if ('/$' === i) {
                    if (0 === e) {
                      rn = la(t.nextSibling);
                      break t;
                    }
                    e--;
                  } else ('$' !== i && '$!' !== i && '$?' !== i) || e++;
                }
                t = t.nextSibling;
              }
              rn = null;
            }
          } else rn = en ? la(t.stateNode.nextSibling) : null;
          return !0;
        }
        function un() {
          for (var t = rn; t; ) t = la(t.nextSibling);
        }
        function fn() {
          (rn = en = null), (an = !1);
        }
        function mn(t) {
          null === nn ? (nn = [t]) : nn.push(t);
        }
        var dn = v.ReactCurrentBatchConfig;
        function xn(t, e) {
          if (t && t.defaultProps) {
            for (var i in ((e = R({}, e)), (t = t.defaultProps)))
              void 0 === e[i] && (e[i] = t[i]);
            return e;
          }
          return e;
        }
        var yn = ba(null),
          kn = null,
          gn = null,
          vn = null;
        function _n() {
          vn = gn = kn = null;
        }
        function En(t) {
          var e = yn.current;
          Sa(yn), (t._currentValue = e);
        }
        function bn(t, e, i) {
          for (; null !== t; ) {
            var r = t.alternate;
            if (
              ((t.childLanes & e) !== e
                ? ((t.childLanes |= e), null !== r && (r.childLanes |= e))
                : null !== r && (r.childLanes & e) !== e && (r.childLanes |= e),
              t === i)
            )
              break;
            t = t.return;
          }
        }
        function Sn(t, e) {
          (kn = t),
            (vn = gn = null),
            null !== (t = t.dependencies) &&
              null !== t.firstContext &&
              (0 !== (t.lanes & e) && (vo = !0), (t.firstContext = null));
        }
        function An(t) {
          var e = t._currentValue;
          if (vn !== t)
            if (
              ((t = { context: t, memoizedValue: e, next: null }), null === gn)
            ) {
              if (null === kn) throw Error(n(308));
              (gn = t), (kn.dependencies = { lanes: 0, firstContext: t });
            } else gn = gn.next = t;
          return e;
        }
        var Dn = null;
        function Pn(t) {
          null === Dn ? (Dn = [t]) : Dn.push(t);
        }
        function Gn(t, e, i, r) {
          var a = e.interleaved;
          return (
            null === a
              ? ((i.next = i), Pn(e))
              : ((i.next = a.next), (a.next = i)),
            (e.interleaved = i),
            Bn(t, r)
          );
        }
        function Bn(t, e) {
          t.lanes |= e;
          var i = t.alternate;
          for (null !== i && (i.lanes |= e), i = t, t = t.return; null !== t; )
            (t.childLanes |= e),
              null !== (i = t.alternate) && (i.childLanes |= e),
              (i = t),
              (t = t.return);
          return 3 === i.tag ? i.stateNode : null;
        }
        var Vn = !1;
        function Fn(t) {
          t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Tn(t, e) {
          (t = t.updateQueue),
            e.updateQueue === t &&
              (e.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                effects: t.effects,
              });
        }
        function wn(t, e) {
          return {
            eventTime: t,
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Cn(t, e, i) {
          var r = t.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Gl))) {
            var a = r.pending;
            return (
              null === a ? (e.next = e) : ((e.next = a.next), (a.next = e)),
              (r.pending = e),
              Bn(t, i)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((e.next = e), Pn(r))
              : ((e.next = a.next), (a.next = e)),
            (r.interleaved = e),
            Bn(t, i)
          );
        }
        function Mn(t, e, i) {
          if (
            null !== (e = e.updateQueue) &&
            ((e = e.shared), 0 !== (4194240 & i))
          ) {
            var r = e.lanes;
            (i |= r &= t.pendingLanes), (e.lanes = i), ke(t, i);
          }
        }
        function In(t, e) {
          var i = t.updateQueue,
            r = t.alternate;
          if (null !== r && i === (r = r.updateQueue)) {
            var a = null,
              n = null;
            if (null !== (i = i.firstBaseUpdate)) {
              do {
                var s = {
                  eventTime: i.eventTime,
                  lane: i.lane,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                };
                null === n ? (a = n = s) : (n = n.next = s), (i = i.next);
              } while (null !== i);
              null === n ? (a = n = e) : (n = n.next = e);
            } else a = n = e;
            return (
              (i = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: n,
                shared: r.shared,
                effects: r.effects,
              }),
              void (t.updateQueue = i)
            );
          }
          null === (t = i.lastBaseUpdate)
            ? (i.firstBaseUpdate = e)
            : (t.next = e),
            (i.lastBaseUpdate = e);
        }
        function Rn(t, e, i, r) {
          var a = t.updateQueue;
          Vn = !1;
          var n = a.firstBaseUpdate,
            s = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var l = o,
              p = l.next;
            (l.next = null), null === s ? (n = p) : (s.next = p), (s = l);
            var h = t.alternate;
            null !== h &&
              (o = (h = h.updateQueue).lastBaseUpdate) !== s &&
              (null === o ? (h.firstBaseUpdate = p) : (o.next = p),
              (h.lastBaseUpdate = l));
          }
          if (null !== n) {
            var c = a.baseState;
            for (s = 0, h = p = l = null, o = n; ; ) {
              var u = o.lane,
                f = o.eventTime;
              if ((r & u) === u) {
                null !== h &&
                  (h = h.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                t: {
                  var m = t,
                    d = o;
                  switch (((u = e), (f = i), d.tag)) {
                    case 1:
                      if ('function' === typeof (m = d.payload)) {
                        c = m.call(f, c, u);
                        break t;
                      }
                      c = m;
                      break t;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (u =
                            'function' === typeof (m = d.payload)
                              ? m.call(f, c, u)
                              : m) ||
                        void 0 === u
                      )
                        break t;
                      c = R({}, c, u);
                      break t;
                    case 2:
                      Vn = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((t.flags |= 64),
                  null === (u = a.effects) ? (a.effects = [o]) : u.push(o));
              } else
                (f = {
                  eventTime: f,
                  lane: u,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === h ? ((p = h = f), (l = c)) : (h = h.next = f),
                  (s |= u);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (u = o).next),
                  (u.next = null),
                  (a.lastBaseUpdate = u),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === h && (l = c),
              (a.baseState = l),
              (a.firstBaseUpdate = p),
              (a.lastBaseUpdate = h),
              null !== (e = a.shared.interleaved))
            ) {
              a = e;
              do {
                (s |= a.lane), (a = a.next);
              } while (a !== e);
            } else null === n && (a.shared.lanes = 0);
            (Il |= s), (t.lanes = s), (t.memoizedState = c);
          }
        }
        function Ln(t, e, i) {
          if (((t = e.effects), (e.effects = null), null !== t))
            for (e = 0; e < t.length; e++) {
              var r = t[e],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = i), 'function' !== typeof a))
                  throw Error(n(191, a));
                a.call(r);
              }
            }
        }
        var zn = new r.Component().refs;
        function Nn(t, e, i, r) {
          (i =
            null === (i = i(r, (e = t.memoizedState))) || void 0 === i
              ? e
              : R({}, e, i)),
            (t.memoizedState = i),
            0 === t.lanes && (t.updateQueue.baseState = i);
        }
        var On = {
          isMounted: function (t) {
            return !!(t = t._reactInternals) && Ht(t) === t;
          },
          enqueueSetState: function (t, e, i) {
            t = t._reactInternals;
            var r = tp(),
              a = ep(t),
              n = wn(r, a);
            (n.payload = e),
              void 0 !== i && null !== i && (n.callback = i),
              null !== (e = Cn(t, n, a)) && (ip(e, t, a, r), Mn(e, t, a));
          },
          enqueueReplaceState: function (t, e, i) {
            t = t._reactInternals;
            var r = tp(),
              a = ep(t),
              n = wn(r, a);
            (n.tag = 1),
              (n.payload = e),
              void 0 !== i && null !== i && (n.callback = i),
              null !== (e = Cn(t, n, a)) && (ip(e, t, a, r), Mn(e, t, a));
          },
          enqueueForceUpdate: function (t, e) {
            t = t._reactInternals;
            var i = tp(),
              r = ep(t),
              a = wn(i, r);
            (a.tag = 2),
              void 0 !== e && null !== e && (a.callback = e),
              null !== (e = Cn(t, a, r)) && (ip(e, t, r, i), Mn(e, t, r));
          },
        };
        function Hn(t, e, i, r, a, n, s) {
          return 'function' === typeof (t = t.stateNode).shouldComponentUpdate
            ? t.shouldComponentUpdate(r, n, s)
            : !e.prototype ||
                !e.prototype.isPureReactComponent ||
                !or(i, r) ||
                !or(a, n);
        }
        function jn(t, e, i) {
          var r = !1,
            a = Da,
            n = e.contextType;
          return (
            'object' === typeof n && null !== n
              ? (n = An(n))
              : ((a = Fa(e) ? Ba : Pa.current),
                (n = (r = null !== (r = e.contextTypes) && void 0 !== r)
                  ? Va(t, a)
                  : Da)),
            (e = new e(i, n)),
            (t.memoizedState =
              null !== e.state && void 0 !== e.state ? e.state : null),
            (e.updater = On),
            (t.stateNode = e),
            (e._reactInternals = t),
            r &&
              (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (t.__reactInternalMemoizedMaskedChildContext = n)),
            e
          );
        }
        function Wn(t, e, i, r) {
          (t = e.state),
            'function' === typeof e.componentWillReceiveProps &&
              e.componentWillReceiveProps(i, r),
            'function' === typeof e.UNSAFE_componentWillReceiveProps &&
              e.UNSAFE_componentWillReceiveProps(i, r),
            e.state !== t && On.enqueueReplaceState(e, e.state, null);
        }
        function qn(t, e, i, r) {
          var a = t.stateNode;
          (a.props = i), (a.state = t.memoizedState), (a.refs = zn), Fn(t);
          var n = e.contextType;
          'object' === typeof n && null !== n
            ? (a.context = An(n))
            : ((n = Fa(e) ? Ba : Pa.current), (a.context = Va(t, n))),
            (a.state = t.memoizedState),
            'function' === typeof (n = e.getDerivedStateFromProps) &&
              (Nn(t, e, n, i), (a.state = t.memoizedState)),
            'function' === typeof e.getDerivedStateFromProps ||
              'function' === typeof a.getSnapshotBeforeUpdate ||
              ('function' !== typeof a.UNSAFE_componentWillMount &&
                'function' !== typeof a.componentWillMount) ||
              ((e = a.state),
              'function' === typeof a.componentWillMount &&
                a.componentWillMount(),
              'function' === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              e !== a.state && On.enqueueReplaceState(a, a.state, null),
              Rn(t, i, a, r),
              (a.state = t.memoizedState)),
            'function' === typeof a.componentDidMount && (t.flags |= 4194308);
        }
        function $n(t, e, i) {
          if (
            null !== (t = i.ref) &&
            'function' !== typeof t &&
            'object' !== typeof t
          ) {
            if (i._owner) {
              if ((i = i._owner)) {
                if (1 !== i.tag) throw Error(n(309));
                var r = i.stateNode;
              }
              if (!r) throw Error(n(147, t));
              var a = r,
                s = '' + t;
              return null !== e &&
                null !== e.ref &&
                'function' === typeof e.ref &&
                e.ref._stringRef === s
                ? e.ref
                : ((e = function (t) {
                    var e = a.refs;
                    e === zn && (e = a.refs = {}),
                      null === t ? delete e[s] : (e[s] = t);
                  }),
                  (e._stringRef = s),
                  e);
            }
            if ('string' !== typeof t) throw Error(n(284));
            if (!i._owner) throw Error(n(290, t));
          }
          return t;
        }
        function Un(t, e) {
          throw (
            ((t = Object.prototype.toString.call(e)),
            Error(
              n(
                31,
                '[object Object]' === t
                  ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                  : t
              )
            ))
          );
        }
        function Yn(t) {
          return (0, t._init)(t._payload);
        }
        function Qn(t) {
          function e(e, i) {
            if (t) {
              var r = e.deletions;
              null === r ? ((e.deletions = [i]), (e.flags |= 16)) : r.push(i);
            }
          }
          function i(i, r) {
            if (!t) return null;
            for (; null !== r; ) e(i, r), (r = r.sibling);
            return null;
          }
          function r(t, e) {
            for (t = new Map(); null !== e; )
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling);
            return t;
          }
          function a(t, e) {
            return ((t = wp(t, e)).index = 0), (t.sibling = null), t;
          }
          function s(e, i, r) {
            return (
              (e.index = r),
              t
                ? null !== (r = e.alternate)
                  ? (r = r.index) < i
                    ? ((e.flags |= 2), i)
                    : r
                  : ((e.flags |= 2), i)
                : ((e.flags |= 1048576), i)
            );
          }
          function o(e) {
            return t && null === e.alternate && (e.flags |= 2), e;
          }
          function l(t, e, i, r) {
            return null === e || 6 !== e.tag
              ? (((e = Rp(i, t.mode, r)).return = t), e)
              : (((e = a(e, i)).return = t), e);
          }
          function p(t, e, i, r) {
            var n = i.type;
            return n === b
              ? c(t, e, i.props.children, r, i.key)
              : null !== e &&
                  (e.elementType === n ||
                    ('object' === typeof n &&
                      null !== n &&
                      n.$$typeof === T &&
                      Yn(n) === e.type))
                ? (((r = a(e, i.props)).ref = $n(t, e, i)), (r.return = t), r)
                : (((r = Cp(i.type, i.key, i.props, null, t.mode, r)).ref = $n(
                    t,
                    e,
                    i
                  )),
                  (r.return = t),
                  r);
          }
          function h(t, e, i, r) {
            return null === e ||
              4 !== e.tag ||
              e.stateNode.containerInfo !== i.containerInfo ||
              e.stateNode.implementation !== i.implementation
              ? (((e = Lp(i, t.mode, r)).return = t), e)
              : (((e = a(e, i.children || [])).return = t), e);
          }
          function c(t, e, i, r, n) {
            return null === e || 7 !== e.tag
              ? (((e = Mp(i, t.mode, r, n)).return = t), e)
              : (((e = a(e, i)).return = t), e);
          }
          function u(t, e, i) {
            if (('string' === typeof e && '' !== e) || 'number' === typeof e)
              return ((e = Rp('' + e, t.mode, i)).return = t), e;
            if ('object' === typeof e && null !== e) {
              switch (e.$$typeof) {
                case _:
                  return (
                    ((i = Cp(e.type, e.key, e.props, null, t.mode, i)).ref = $n(
                      t,
                      null,
                      e
                    )),
                    (i.return = t),
                    i
                  );
                case E:
                  return ((e = Lp(e, t.mode, i)).return = t), e;
                case T:
                  return u(t, (0, e._init)(e._payload), i);
              }
              if (et(e) || M(e))
                return ((e = Mp(e, t.mode, i, null)).return = t), e;
              Un(t, e);
            }
            return null;
          }
          function f(t, e, i, r) {
            var a = null !== e ? e.key : null;
            if (('string' === typeof i && '' !== i) || 'number' === typeof i)
              return null !== a ? null : l(t, e, '' + i, r);
            if ('object' === typeof i && null !== i) {
              switch (i.$$typeof) {
                case _:
                  return i.key === a ? p(t, e, i, r) : null;
                case E:
                  return i.key === a ? h(t, e, i, r) : null;
                case T:
                  return f(t, e, (a = i._init)(i._payload), r);
              }
              if (et(i) || M(i)) return null !== a ? null : c(t, e, i, r, null);
              Un(t, i);
            }
            return null;
          }
          function m(t, e, i, r, a) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return l(e, (t = t.get(i) || null), '' + r, a);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case _:
                  return p(
                    e,
                    (t = t.get(null === r.key ? i : r.key) || null),
                    r,
                    a
                  );
                case E:
                  return h(
                    e,
                    (t = t.get(null === r.key ? i : r.key) || null),
                    r,
                    a
                  );
                case T:
                  return m(t, e, i, (0, r._init)(r._payload), a);
              }
              if (et(r) || M(r))
                return c(e, (t = t.get(i) || null), r, a, null);
              Un(e, r);
            }
            return null;
          }
          function d(a, n, o, l) {
            for (
              var p = null, h = null, c = n, d = (n = 0), x = null;
              null !== c && d < o.length;
              d++
            ) {
              c.index > d ? ((x = c), (c = null)) : (x = c.sibling);
              var y = f(a, c, o[d], l);
              if (null === y) {
                null === c && (c = x);
                break;
              }
              t && c && null === y.alternate && e(a, c),
                (n = s(y, n, d)),
                null === h ? (p = y) : (h.sibling = y),
                (h = y),
                (c = x);
            }
            if (d === o.length) return i(a, c), an && Ka(a, d), p;
            if (null === c) {
              for (; d < o.length; d++)
                null !== (c = u(a, o[d], l)) &&
                  ((n = s(c, n, d)),
                  null === h ? (p = c) : (h.sibling = c),
                  (h = c));
              return an && Ka(a, d), p;
            }
            for (c = r(a, c); d < o.length; d++)
              null !== (x = m(c, a, d, o[d], l)) &&
                (t &&
                  null !== x.alternate &&
                  c.delete(null === x.key ? d : x.key),
                (n = s(x, n, d)),
                null === h ? (p = x) : (h.sibling = x),
                (h = x));
            return (
              t &&
                c.forEach(function (t) {
                  return e(a, t);
                }),
              an && Ka(a, d),
              p
            );
          }
          function x(a, o, l, p) {
            var h = M(l);
            if ('function' !== typeof h) throw Error(n(150));
            if (null == (l = h.call(l))) throw Error(n(151));
            for (
              var c = (h = null), d = o, x = (o = 0), y = null, k = l.next();
              null !== d && !k.done;
              x++, k = l.next()
            ) {
              d.index > x ? ((y = d), (d = null)) : (y = d.sibling);
              var g = f(a, d, k.value, p);
              if (null === g) {
                null === d && (d = y);
                break;
              }
              t && d && null === g.alternate && e(a, d),
                (o = s(g, o, x)),
                null === c ? (h = g) : (c.sibling = g),
                (c = g),
                (d = y);
            }
            if (k.done) return i(a, d), an && Ka(a, x), h;
            if (null === d) {
              for (; !k.done; x++, k = l.next())
                null !== (k = u(a, k.value, p)) &&
                  ((o = s(k, o, x)),
                  null === c ? (h = k) : (c.sibling = k),
                  (c = k));
              return an && Ka(a, x), h;
            }
            for (d = r(a, d); !k.done; x++, k = l.next())
              null !== (k = m(d, a, x, k.value, p)) &&
                (t &&
                  null !== k.alternate &&
                  d.delete(null === k.key ? x : k.key),
                (o = s(k, o, x)),
                null === c ? (h = k) : (c.sibling = k),
                (c = k));
            return (
              t &&
                d.forEach(function (t) {
                  return e(a, t);
                }),
              an && Ka(a, x),
              h
            );
          }
          return function t(r, n, s, l) {
            if (
              ('object' === typeof s &&
                null !== s &&
                s.type === b &&
                null === s.key &&
                (s = s.props.children),
              'object' === typeof s && null !== s)
            ) {
              switch (s.$$typeof) {
                case _:
                  t: {
                    for (var p = s.key, h = n; null !== h; ) {
                      if (h.key === p) {
                        if ((p = s.type) === b) {
                          if (7 === h.tag) {
                            i(r, h.sibling),
                              ((n = a(h, s.props.children)).return = r),
                              (r = n);
                            break t;
                          }
                        } else if (
                          h.elementType === p ||
                          ('object' === typeof p &&
                            null !== p &&
                            p.$$typeof === T &&
                            Yn(p) === h.type)
                        ) {
                          i(r, h.sibling),
                            ((n = a(h, s.props)).ref = $n(r, h, s)),
                            (n.return = r),
                            (r = n);
                          break t;
                        }
                        i(r, h);
                        break;
                      }
                      e(r, h), (h = h.sibling);
                    }
                    s.type === b
                      ? (((n = Mp(s.props.children, r.mode, l, s.key)).return =
                          r),
                        (r = n))
                      : (((l = Cp(
                          s.type,
                          s.key,
                          s.props,
                          null,
                          r.mode,
                          l
                        )).ref = $n(r, n, s)),
                        (l.return = r),
                        (r = l));
                  }
                  return o(r);
                case E:
                  t: {
                    for (h = s.key; null !== n; ) {
                      if (n.key === h) {
                        if (
                          4 === n.tag &&
                          n.stateNode.containerInfo === s.containerInfo &&
                          n.stateNode.implementation === s.implementation
                        ) {
                          i(r, n.sibling),
                            ((n = a(n, s.children || [])).return = r),
                            (r = n);
                          break t;
                        }
                        i(r, n);
                        break;
                      }
                      e(r, n), (n = n.sibling);
                    }
                    ((n = Lp(s, r.mode, l)).return = r), (r = n);
                  }
                  return o(r);
                case T:
                  return t(r, n, (h = s._init)(s._payload), l);
              }
              if (et(s)) return d(r, n, s, l);
              if (M(s)) return x(r, n, s, l);
              Un(r, s);
            }
            return ('string' === typeof s && '' !== s) || 'number' === typeof s
              ? ((s = '' + s),
                null !== n && 6 === n.tag
                  ? (i(r, n.sibling), ((n = a(n, s)).return = r), (r = n))
                  : (i(r, n), ((n = Rp(s, r.mode, l)).return = r), (r = n)),
                o(r))
              : i(r, n);
          };
        }
        var Xn = Qn(!0),
          Kn = Qn(!1),
          Jn = {},
          Zn = ba(Jn),
          ts = ba(Jn),
          es = ba(Jn);
        function is(t) {
          if (t === Jn) throw Error(n(174));
          return t;
        }
        function rs(t, e) {
          switch ((Aa(es, e), Aa(ts, t), Aa(Zn, Jn), (t = e.nodeType))) {
            case 9:
            case 11:
              e = (e = e.documentElement) ? e.namespaceURI : lt(null, '');
              break;
            default:
              e = lt(
                (e = (t = 8 === t ? e.parentNode : e).namespaceURI || null),
                (t = t.tagName)
              );
          }
          Sa(Zn), Aa(Zn, e);
        }
        function as() {
          Sa(Zn), Sa(ts), Sa(es);
        }
        function ns(t) {
          is(es.current);
          var e = is(Zn.current),
            i = lt(e, t.type);
          e !== i && (Aa(ts, t), Aa(Zn, i));
        }
        function ss(t) {
          ts.current === t && (Sa(Zn), Sa(ts));
        }
        var os = ba(0);
        function ls(t) {
          for (var e = t; null !== e; ) {
            if (13 === e.tag) {
              var i = e.memoizedState;
              if (
                null !== i &&
                (null === (i = i.dehydrated) ||
                  '$?' === i.data ||
                  '$!' === i.data)
              )
                return e;
            } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
              if (0 !== (128 & e.flags)) return e;
            } else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) return null;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
          return null;
        }
        var ps = [];
        function hs() {
          for (var t = 0; t < ps.length; t++)
            ps[t]._workInProgressVersionPrimary = null;
          ps.length = 0;
        }
        var cs = v.ReactCurrentDispatcher,
          us = v.ReactCurrentBatchConfig,
          fs = 0,
          ms = null,
          ds = null,
          xs = null,
          ys = !1,
          ks = !1,
          gs = 0,
          vs = 0;
        function _s() {
          throw Error(n(321));
        }
        function Es(t, e) {
          if (null === e) return !1;
          for (var i = 0; i < e.length && i < t.length; i++)
            if (!sr(t[i], e[i])) return !1;
          return !0;
        }
        function bs(t, e, i, r, a, s) {
          if (
            ((fs = s),
            (ms = e),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.lanes = 0),
            (cs.current = null === t || null === t.memoizedState ? so : oo),
            (t = i(r, a)),
            ks)
          ) {
            s = 0;
            do {
              if (((ks = !1), (gs = 0), 25 <= s)) throw Error(n(301));
              (s += 1),
                (xs = ds = null),
                (e.updateQueue = null),
                (cs.current = lo),
                (t = i(r, a));
            } while (ks);
          }
          if (
            ((cs.current = no),
            (e = null !== ds && null !== ds.next),
            (fs = 0),
            (xs = ds = ms = null),
            (ys = !1),
            e)
          )
            throw Error(n(300));
          return t;
        }
        function Ss() {
          var t = 0 !== gs;
          return (gs = 0), t;
        }
        function As() {
          var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === xs ? (ms.memoizedState = xs = t) : (xs = xs.next = t), xs
          );
        }
        function Ds() {
          if (null === ds) {
            var t = ms.alternate;
            t = null !== t ? t.memoizedState : null;
          } else t = ds.next;
          var e = null === xs ? ms.memoizedState : xs.next;
          if (null !== e) (xs = e), (ds = t);
          else {
            if (null === t) throw Error(n(310));
            (t = {
              memoizedState: (ds = t).memoizedState,
              baseState: ds.baseState,
              baseQueue: ds.baseQueue,
              queue: ds.queue,
              next: null,
            }),
              null === xs ? (ms.memoizedState = xs = t) : (xs = xs.next = t);
          }
          return xs;
        }
        function Ps(t, e) {
          return 'function' === typeof e ? e(t) : e;
        }
        function Gs(t) {
          var e = Ds(),
            i = e.queue;
          if (null === i) throw Error(n(311));
          i.lastRenderedReducer = t;
          var r = ds,
            a = r.baseQueue,
            s = i.pending;
          if (null !== s) {
            if (null !== a) {
              var o = a.next;
              (a.next = s.next), (s.next = o);
            }
            (r.baseQueue = a = s), (i.pending = null);
          }
          if (null !== a) {
            (s = a.next), (r = r.baseState);
            var l = (o = null),
              p = null,
              h = s;
            do {
              var c = h.lane;
              if ((fs & c) === c)
                null !== p &&
                  (p = p.next =
                    {
                      lane: 0,
                      action: h.action,
                      hasEagerState: h.hasEagerState,
                      eagerState: h.eagerState,
                      next: null,
                    }),
                  (r = h.hasEagerState ? h.eagerState : t(r, h.action));
              else {
                var u = {
                  lane: c,
                  action: h.action,
                  hasEagerState: h.hasEagerState,
                  eagerState: h.eagerState,
                  next: null,
                };
                null === p ? ((l = p = u), (o = r)) : (p = p.next = u),
                  (ms.lanes |= c),
                  (Il |= c);
              }
              h = h.next;
            } while (null !== h && h !== s);
            null === p ? (o = r) : (p.next = l),
              sr(r, e.memoizedState) || (vo = !0),
              (e.memoizedState = r),
              (e.baseState = o),
              (e.baseQueue = p),
              (i.lastRenderedState = r);
          }
          if (null !== (t = i.interleaved)) {
            a = t;
            do {
              (s = a.lane), (ms.lanes |= s), (Il |= s), (a = a.next);
            } while (a !== t);
          } else null === a && (i.lanes = 0);
          return [e.memoizedState, i.dispatch];
        }
        function Bs(t) {
          var e = Ds(),
            i = e.queue;
          if (null === i) throw Error(n(311));
          i.lastRenderedReducer = t;
          var r = i.dispatch,
            a = i.pending,
            s = e.memoizedState;
          if (null !== a) {
            i.pending = null;
            var o = (a = a.next);
            do {
              (s = t(s, o.action)), (o = o.next);
            } while (o !== a);
            sr(s, e.memoizedState) || (vo = !0),
              (e.memoizedState = s),
              null === e.baseQueue && (e.baseState = s),
              (i.lastRenderedState = s);
          }
          return [s, r];
        }
        function Vs() {}
        function Fs(t, e) {
          var i = ms,
            r = Ds(),
            a = e(),
            s = !sr(r.memoizedState, a);
          if (
            (s && ((r.memoizedState = a), (vo = !0)),
            (r = r.queue),
            js(Cs.bind(null, i, r, t), [t]),
            r.getSnapshot !== e ||
              s ||
              (null !== xs && 1 & xs.memoizedState.tag))
          ) {
            if (
              ((i.flags |= 2048),
              Ls(9, ws.bind(null, i, r, a, e), void 0, null),
              null === Bl)
            )
              throw Error(n(349));
            0 !== (30 & fs) || Ts(i, e, a);
          }
          return a;
        }
        function Ts(t, e, i) {
          (t.flags |= 16384),
            (t = { getSnapshot: e, value: i }),
            null === (e = ms.updateQueue)
              ? ((e = { lastEffect: null, stores: null }),
                (ms.updateQueue = e),
                (e.stores = [t]))
              : null === (i = e.stores)
                ? (e.stores = [t])
                : i.push(t);
        }
        function ws(t, e, i, r) {
          (e.value = i), (e.getSnapshot = r), Ms(e) && Is(t);
        }
        function Cs(t, e, i) {
          return i(function () {
            Ms(e) && Is(t);
          });
        }
        function Ms(t) {
          var e = t.getSnapshot;
          t = t.value;
          try {
            var i = e();
            return !sr(t, i);
          } catch (r) {
            return !0;
          }
        }
        function Is(t) {
          var e = Bn(t, 1);
          null !== e && ip(e, t, 1, -1);
        }
        function Rs(t) {
          var e = As();
          return (
            'function' === typeof t && (t = t()),
            (e.memoizedState = e.baseState = t),
            (t = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ps,
              lastRenderedState: t,
            }),
            (e.queue = t),
            (t = t.dispatch = eo.bind(null, ms, t)),
            [e.memoizedState, t]
          );
        }
        function Ls(t, e, i, r) {
          return (
            (t = { tag: t, create: e, destroy: i, deps: r, next: null }),
            null === (e = ms.updateQueue)
              ? ((e = { lastEffect: null, stores: null }),
                (ms.updateQueue = e),
                (e.lastEffect = t.next = t))
              : null === (i = e.lastEffect)
                ? (e.lastEffect = t.next = t)
                : ((r = i.next),
                  (i.next = t),
                  (t.next = r),
                  (e.lastEffect = t)),
            t
          );
        }
        function zs() {
          return Ds().memoizedState;
        }
        function Ns(t, e, i, r) {
          var a = As();
          (ms.flags |= t),
            (a.memoizedState = Ls(1 | e, i, void 0, void 0 === r ? null : r));
        }
        function Os(t, e, i, r) {
          var a = Ds();
          r = void 0 === r ? null : r;
          var n = void 0;
          if (null !== ds) {
            var s = ds.memoizedState;
            if (((n = s.destroy), null !== r && Es(r, s.deps)))
              return void (a.memoizedState = Ls(e, i, n, r));
          }
          (ms.flags |= t), (a.memoizedState = Ls(1 | e, i, n, r));
        }
        function Hs(t, e) {
          return Ns(8390656, 8, t, e);
        }
        function js(t, e) {
          return Os(2048, 8, t, e);
        }
        function Ws(t, e) {
          return Os(4, 2, t, e);
        }
        function qs(t, e) {
          return Os(4, 4, t, e);
        }
        function $s(t, e) {
          return 'function' === typeof e
            ? ((t = t()),
              e(t),
              function () {
                e(null);
              })
            : null !== e && void 0 !== e
              ? ((t = t()),
                (e.current = t),
                function () {
                  e.current = null;
                })
              : void 0;
        }
        function Us(t, e, i) {
          return (
            (i = null !== i && void 0 !== i ? i.concat([t]) : null),
            Os(4, 4, $s.bind(null, e, t), i)
          );
        }
        function Ys() {}
        function Qs(t, e) {
          var i = Ds();
          e = void 0 === e ? null : e;
          var r = i.memoizedState;
          return null !== r && null !== e && Es(e, r[1])
            ? r[0]
            : ((i.memoizedState = [t, e]), t);
        }
        function Xs(t, e) {
          var i = Ds();
          e = void 0 === e ? null : e;
          var r = i.memoizedState;
          return null !== r && null !== e && Es(e, r[1])
            ? r[0]
            : ((t = t()), (i.memoizedState = [t, e]), t);
        }
        function Ks(t, e, i) {
          return 0 === (21 & fs)
            ? (t.baseState && ((t.baseState = !1), (vo = !0)),
              (t.memoizedState = i))
            : (sr(i, e) ||
                ((i = de()), (ms.lanes |= i), (Il |= i), (t.baseState = !0)),
              e);
        }
        function Js(t, e) {
          var i = ge;
          (ge = 0 !== i && 4 > i ? i : 4), t(!0);
          var r = us.transition;
          us.transition = {};
          try {
            t(!1), e();
          } finally {
            (ge = i), (us.transition = r);
          }
        }
        function Zs() {
          return Ds().memoizedState;
        }
        function to(t, e, i) {
          var r = ep(t);
          if (
            ((i = {
              lane: r,
              action: i,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            io(t))
          )
            ro(e, i);
          else if (null !== (i = Gn(t, e, i, r))) {
            ip(i, t, r, tp()), ao(i, e, r);
          }
        }
        function eo(t, e, i) {
          var r = ep(t),
            a = {
              lane: r,
              action: i,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (io(t)) ro(e, a);
          else {
            var n = t.alternate;
            if (
              0 === t.lanes &&
              (null === n || 0 === n.lanes) &&
              null !== (n = e.lastRenderedReducer)
            )
              try {
                var s = e.lastRenderedState,
                  o = n(s, i);
                if (((a.hasEagerState = !0), (a.eagerState = o), sr(o, s))) {
                  var l = e.interleaved;
                  return (
                    null === l
                      ? ((a.next = a), Pn(e))
                      : ((a.next = l.next), (l.next = a)),
                    void (e.interleaved = a)
                  );
                }
              } catch (p) {}
            null !== (i = Gn(t, e, a, r)) &&
              (ip(i, t, r, (a = tp())), ao(i, e, r));
          }
        }
        function io(t) {
          var e = t.alternate;
          return t === ms || (null !== e && e === ms);
        }
        function ro(t, e) {
          ks = ys = !0;
          var i = t.pending;
          null === i ? (e.next = e) : ((e.next = i.next), (i.next = e)),
            (t.pending = e);
        }
        function ao(t, e, i) {
          if (0 !== (4194240 & i)) {
            var r = e.lanes;
            (i |= r &= t.pendingLanes), (e.lanes = i), ke(t, i);
          }
        }
        var no = {
            readContext: An,
            useCallback: _s,
            useContext: _s,
            useEffect: _s,
            useImperativeHandle: _s,
            useInsertionEffect: _s,
            useLayoutEffect: _s,
            useMemo: _s,
            useReducer: _s,
            useRef: _s,
            useState: _s,
            useDebugValue: _s,
            useDeferredValue: _s,
            useTransition: _s,
            useMutableSource: _s,
            useSyncExternalStore: _s,
            useId: _s,
            unstable_isNewReconciler: !1,
          },
          so = {
            readContext: An,
            useCallback: function (t, e) {
              return (As().memoizedState = [t, void 0 === e ? null : e]), t;
            },
            useContext: An,
            useEffect: Hs,
            useImperativeHandle: function (t, e, i) {
              return (
                (i = null !== i && void 0 !== i ? i.concat([t]) : null),
                Ns(4194308, 4, $s.bind(null, e, t), i)
              );
            },
            useLayoutEffect: function (t, e) {
              return Ns(4194308, 4, t, e);
            },
            useInsertionEffect: function (t, e) {
              return Ns(4, 2, t, e);
            },
            useMemo: function (t, e) {
              var i = As();
              return (
                (e = void 0 === e ? null : e),
                (t = t()),
                (i.memoizedState = [t, e]),
                t
              );
            },
            useReducer: function (t, e, i) {
              var r = As();
              return (
                (e = void 0 !== i ? i(e) : e),
                (r.memoizedState = r.baseState = e),
                (t = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: t,
                  lastRenderedState: e,
                }),
                (r.queue = t),
                (t = t.dispatch = to.bind(null, ms, t)),
                [r.memoizedState, t]
              );
            },
            useRef: function (t) {
              return (t = { current: t }), (As().memoizedState = t);
            },
            useState: Rs,
            useDebugValue: Ys,
            useDeferredValue: function (t) {
              return (As().memoizedState = t);
            },
            useTransition: function () {
              var t = Rs(!1),
                e = t[0];
              return (
                (t = Js.bind(null, t[1])), (As().memoizedState = t), [e, t]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (t, e, i) {
              var r = ms,
                a = As();
              if (an) {
                if (void 0 === i) throw Error(n(407));
                i = i();
              } else {
                if (((i = e()), null === Bl)) throw Error(n(349));
                0 !== (30 & fs) || Ts(r, e, i);
              }
              a.memoizedState = i;
              var s = { value: i, getSnapshot: e };
              return (
                (a.queue = s),
                Hs(Cs.bind(null, r, s, t), [t]),
                (r.flags |= 2048),
                Ls(9, ws.bind(null, r, s, i, e), void 0, null),
                i
              );
            },
            useId: function () {
              var t = As(),
                e = Bl.identifierPrefix;
              if (an) {
                var i = Xa;
                (e =
                  ':' +
                  e +
                  'R' +
                  (i = (Qa & ~(1 << (32 - se(Qa) - 1))).toString(32) + i)),
                  0 < (i = gs++) && (e += 'H' + i.toString(32)),
                  (e += ':');
              } else e = ':' + e + 'r' + (i = vs++).toString(32) + ':';
              return (t.memoizedState = e);
            },
            unstable_isNewReconciler: !1,
          },
          oo = {
            readContext: An,
            useCallback: Qs,
            useContext: An,
            useEffect: js,
            useImperativeHandle: Us,
            useInsertionEffect: Ws,
            useLayoutEffect: qs,
            useMemo: Xs,
            useReducer: Gs,
            useRef: zs,
            useState: function () {
              return Gs(Ps);
            },
            useDebugValue: Ys,
            useDeferredValue: function (t) {
              return Ks(Ds(), ds.memoizedState, t);
            },
            useTransition: function () {
              return [Gs(Ps)[0], Ds().memoizedState];
            },
            useMutableSource: Vs,
            useSyncExternalStore: Fs,
            useId: Zs,
            unstable_isNewReconciler: !1,
          },
          lo = {
            readContext: An,
            useCallback: Qs,
            useContext: An,
            useEffect: js,
            useImperativeHandle: Us,
            useInsertionEffect: Ws,
            useLayoutEffect: qs,
            useMemo: Xs,
            useReducer: Bs,
            useRef: zs,
            useState: function () {
              return Bs(Ps);
            },
            useDebugValue: Ys,
            useDeferredValue: function (t) {
              var e = Ds();
              return null === ds
                ? (e.memoizedState = t)
                : Ks(e, ds.memoizedState, t);
            },
            useTransition: function () {
              return [Bs(Ps)[0], Ds().memoizedState];
            },
            useMutableSource: Vs,
            useSyncExternalStore: Fs,
            useId: Zs,
            unstable_isNewReconciler: !1,
          };
        function po(t, e) {
          try {
            var i = '',
              r = e;
            do {
              (i += O(r)), (r = r.return);
            } while (r);
            var a = i;
          } catch (n) {
            a = '\nError generating stack: ' + n.message + '\n' + n.stack;
          }
          return { value: t, source: e, stack: a, digest: null };
        }
        function ho(t, e, i) {
          return {
            value: t,
            source: null,
            stack: null != i ? i : null,
            digest: null != e ? e : null,
          };
        }
        function co(t, e) {
          try {
            console.error(e.value);
          } catch (i) {
            setTimeout(function () {
              throw i;
            });
          }
        }
        var uo = 'function' === typeof WeakMap ? WeakMap : Map;
        function fo(t, e, i) {
          ((i = wn(-1, i)).tag = 3), (i.payload = { element: null });
          var r = e.value;
          return (
            (i.callback = function () {
              Wl || ((Wl = !0), (ql = r)), co(0, e);
            }),
            i
          );
        }
        function mo(t, e, i) {
          (i = wn(-1, i)).tag = 3;
          var r = t.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var a = e.value;
            (i.payload = function () {
              return r(a);
            }),
              (i.callback = function () {
                co(0, e);
              });
          }
          var n = t.stateNode;
          return (
            null !== n &&
              'function' === typeof n.componentDidCatch &&
              (i.callback = function () {
                co(0, e),
                  'function' !== typeof r &&
                    (null === $l ? ($l = new Set([this])) : $l.add(this));
                var t = e.stack;
                this.componentDidCatch(e.value, {
                  componentStack: null !== t ? t : '',
                });
              }),
            i
          );
        }
        function xo(t, e, i) {
          var r = t.pingCache;
          if (null === r) {
            r = t.pingCache = new uo();
            var a = new Set();
            r.set(e, a);
          } else void 0 === (a = r.get(e)) && ((a = new Set()), r.set(e, a));
          a.has(i) || (a.add(i), (t = Ap.bind(null, t, e, i)), e.then(t, t));
        }
        function yo(t) {
          do {
            var e;
            if (
              ((e = 13 === t.tag) &&
                (e = null === (e = t.memoizedState) || null !== e.dehydrated),
              e)
            )
              return t;
            t = t.return;
          } while (null !== t);
          return null;
        }
        function ko(t, e, i, r, a) {
          return 0 === (1 & t.mode)
            ? (t === e
                ? (t.flags |= 65536)
                : ((t.flags |= 128),
                  (i.flags |= 131072),
                  (i.flags &= -52805),
                  1 === i.tag &&
                    (null === i.alternate
                      ? (i.tag = 17)
                      : (((e = wn(-1, 1)).tag = 2), Cn(i, e, 1))),
                  (i.lanes |= 1)),
              t)
            : ((t.flags |= 65536), (t.lanes = a), t);
        }
        var go = v.ReactCurrentOwner,
          vo = !1;
        function _o(t, e, i, r) {
          e.child = null === t ? Kn(e, null, i, r) : Xn(e, t.child, i, r);
        }
        function Eo(t, e, i, r, a) {
          i = i.render;
          var n = e.ref;
          return (
            Sn(e, a),
            (r = bs(t, e, i, r, n, a)),
            (i = Ss()),
            null === t || vo
              ? (an && i && Za(e), (e.flags |= 1), _o(t, e, r, a), e.child)
              : ((e.updateQueue = t.updateQueue),
                (e.flags &= -2053),
                (t.lanes &= ~a),
                Wo(t, e, a))
          );
        }
        function bo(t, e, i, r, a) {
          if (null === t) {
            var n = i.type;
            return 'function' !== typeof n ||
              Tp(n) ||
              void 0 !== n.defaultProps ||
              null !== i.compare ||
              void 0 !== i.defaultProps
              ? (((t = Cp(i.type, null, r, e, e.mode, a)).ref = e.ref),
                (t.return = e),
                (e.child = t))
              : ((e.tag = 15), (e.type = n), So(t, e, n, r, a));
          }
          if (((n = t.child), 0 === (t.lanes & a))) {
            var s = n.memoizedProps;
            if (
              (i = null !== (i = i.compare) ? i : or)(s, r) &&
              t.ref === e.ref
            )
              return Wo(t, e, a);
          }
          return (
            (e.flags |= 1),
            ((t = wp(n, r)).ref = e.ref),
            (t.return = e),
            (e.child = t)
          );
        }
        function So(t, e, i, r, a) {
          if (null !== t) {
            var n = t.memoizedProps;
            if (or(n, r) && t.ref === e.ref) {
              if (((vo = !1), (e.pendingProps = r = n), 0 === (t.lanes & a)))
                return (e.lanes = t.lanes), Wo(t, e, a);
              0 !== (131072 & t.flags) && (vo = !0);
            }
          }
          return Po(t, e, i, r, a);
        }
        function Ao(t, e, i) {
          var r = e.pendingProps,
            a = r.children,
            n = null !== t ? t.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 === (1 & e.mode))
              (e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Aa(wl, Tl),
                (Tl |= i);
            else {
              if (0 === (1073741824 & i))
                return (
                  (t = null !== n ? n.baseLanes | i : i),
                  (e.lanes = e.childLanes = 1073741824),
                  (e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null,
                  }),
                  (e.updateQueue = null),
                  Aa(wl, Tl),
                  (Tl |= t),
                  null
                );
              (e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== n ? n.baseLanes : i),
                Aa(wl, Tl),
                (Tl |= r);
            }
          else
            null !== n
              ? ((r = n.baseLanes | i), (e.memoizedState = null))
              : (r = i),
              Aa(wl, Tl),
              (Tl |= r);
          return _o(t, e, a, i), e.child;
        }
        function Do(t, e) {
          var i = e.ref;
          ((null === t && null !== i) || (null !== t && t.ref !== i)) &&
            ((e.flags |= 512), (e.flags |= 2097152));
        }
        function Po(t, e, i, r, a) {
          var n = Fa(i) ? Ba : Pa.current;
          return (
            (n = Va(e, n)),
            Sn(e, a),
            (i = bs(t, e, i, r, n, a)),
            (r = Ss()),
            null === t || vo
              ? (an && r && Za(e), (e.flags |= 1), _o(t, e, i, a), e.child)
              : ((e.updateQueue = t.updateQueue),
                (e.flags &= -2053),
                (t.lanes &= ~a),
                Wo(t, e, a))
          );
        }
        function Go(t, e, i, r, a) {
          if (Fa(i)) {
            var n = !0;
            Ma(e);
          } else n = !1;
          if ((Sn(e, a), null === e.stateNode))
            jo(t, e), jn(e, i, r), qn(e, i, r, a), (r = !0);
          else if (null === t) {
            var s = e.stateNode,
              o = e.memoizedProps;
            s.props = o;
            var l = s.context,
              p = i.contextType;
            'object' === typeof p && null !== p
              ? (p = An(p))
              : (p = Va(e, (p = Fa(i) ? Ba : Pa.current)));
            var h = i.getDerivedStateFromProps,
              c =
                'function' === typeof h ||
                'function' === typeof s.getSnapshotBeforeUpdate;
            c ||
              ('function' !== typeof s.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof s.componentWillReceiveProps) ||
              ((o !== r || l !== p) && Wn(e, s, r, p)),
              (Vn = !1);
            var u = e.memoizedState;
            (s.state = u),
              Rn(e, r, s, a),
              (l = e.memoizedState),
              o !== r || u !== l || Ga.current || Vn
                ? ('function' === typeof h &&
                    (Nn(e, i, h, r), (l = e.memoizedState)),
                  (o = Vn || Hn(e, i, o, r, u, l, p))
                    ? (c ||
                        ('function' !== typeof s.UNSAFE_componentWillMount &&
                          'function' !== typeof s.componentWillMount) ||
                        ('function' === typeof s.componentWillMount &&
                          s.componentWillMount(),
                        'function' === typeof s.UNSAFE_componentWillMount &&
                          s.UNSAFE_componentWillMount()),
                      'function' === typeof s.componentDidMount &&
                        (e.flags |= 4194308))
                    : ('function' === typeof s.componentDidMount &&
                        (e.flags |= 4194308),
                      (e.memoizedProps = r),
                      (e.memoizedState = l)),
                  (s.props = r),
                  (s.state = l),
                  (s.context = p),
                  (r = o))
                : ('function' === typeof s.componentDidMount &&
                    (e.flags |= 4194308),
                  (r = !1));
          } else {
            (s = e.stateNode),
              Tn(t, e),
              (o = e.memoizedProps),
              (p = e.type === e.elementType ? o : xn(e.type, o)),
              (s.props = p),
              (c = e.pendingProps),
              (u = s.context),
              'object' === typeof (l = i.contextType) && null !== l
                ? (l = An(l))
                : (l = Va(e, (l = Fa(i) ? Ba : Pa.current)));
            var f = i.getDerivedStateFromProps;
            (h =
              'function' === typeof f ||
              'function' === typeof s.getSnapshotBeforeUpdate) ||
              ('function' !== typeof s.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof s.componentWillReceiveProps) ||
              ((o !== c || u !== l) && Wn(e, s, r, l)),
              (Vn = !1),
              (u = e.memoizedState),
              (s.state = u),
              Rn(e, r, s, a);
            var m = e.memoizedState;
            o !== c || u !== m || Ga.current || Vn
              ? ('function' === typeof f &&
                  (Nn(e, i, f, r), (m = e.memoizedState)),
                (p = Vn || Hn(e, i, p, r, u, m, l) || !1)
                  ? (h ||
                      ('function' !== typeof s.UNSAFE_componentWillUpdate &&
                        'function' !== typeof s.componentWillUpdate) ||
                      ('function' === typeof s.componentWillUpdate &&
                        s.componentWillUpdate(r, m, l),
                      'function' === typeof s.UNSAFE_componentWillUpdate &&
                        s.UNSAFE_componentWillUpdate(r, m, l)),
                    'function' === typeof s.componentDidUpdate &&
                      (e.flags |= 4),
                    'function' === typeof s.getSnapshotBeforeUpdate &&
                      (e.flags |= 1024))
                  : ('function' !== typeof s.componentDidUpdate ||
                      (o === t.memoizedProps && u === t.memoizedState) ||
                      (e.flags |= 4),
                    'function' !== typeof s.getSnapshotBeforeUpdate ||
                      (o === t.memoizedProps && u === t.memoizedState) ||
                      (e.flags |= 1024),
                    (e.memoizedProps = r),
                    (e.memoizedState = m)),
                (s.props = r),
                (s.state = m),
                (s.context = l),
                (r = p))
              : ('function' !== typeof s.componentDidUpdate ||
                  (o === t.memoizedProps && u === t.memoizedState) ||
                  (e.flags |= 4),
                'function' !== typeof s.getSnapshotBeforeUpdate ||
                  (o === t.memoizedProps && u === t.memoizedState) ||
                  (e.flags |= 1024),
                (r = !1));
          }
          return Bo(t, e, i, r, n, a);
        }
        function Bo(t, e, i, r, a, n) {
          Do(t, e);
          var s = 0 !== (128 & e.flags);
          if (!r && !s) return a && Ia(e, i, !1), Wo(t, e, n);
          (r = e.stateNode), (go.current = e);
          var o =
            s && 'function' !== typeof i.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (e.flags |= 1),
            null !== t && s
              ? ((e.child = Xn(e, t.child, null, n)),
                (e.child = Xn(e, null, o, n)))
              : _o(t, e, o, n),
            (e.memoizedState = r.state),
            a && Ia(e, i, !0),
            e.child
          );
        }
        function Vo(t) {
          var e = t.stateNode;
          e.pendingContext
            ? wa(0, e.pendingContext, e.pendingContext !== e.context)
            : e.context && wa(0, e.context, !1),
            rs(t, e.containerInfo);
        }
        function Fo(t, e, i, r, a) {
          return fn(), mn(a), (e.flags |= 256), _o(t, e, i, r), e.child;
        }
        var To,
          wo,
          Co,
          Mo = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Io(t) {
          return { baseLanes: t, cachePool: null, transitions: null };
        }
        function Ro(t, e, i) {
          var r,
            a = e.pendingProps,
            s = os.current,
            o = !1,
            l = 0 !== (128 & e.flags);
          if (
            ((r = l) ||
              (r = (null === t || null !== t.memoizedState) && 0 !== (2 & s)),
            r
              ? ((o = !0), (e.flags &= -129))
              : (null !== t && null === t.memoizedState) || (s |= 1),
            Aa(os, 1 & s),
            null === t)
          )
            return (
              pn(e),
              null !== (t = e.memoizedState) && null !== (t = t.dehydrated)
                ? (0 === (1 & e.mode)
                    ? (e.lanes = 1)
                    : '$!' === t.data
                      ? (e.lanes = 8)
                      : (e.lanes = 1073741824),
                  null)
                : ((l = a.children),
                  (t = a.fallback),
                  o
                    ? ((a = e.mode),
                      (o = e.child),
                      (l = { mode: 'hidden', children: l }),
                      0 === (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = l))
                        : (o = Ip(l, a, 0, null)),
                      (t = Mp(t, a, i, null)),
                      (o.return = e),
                      (t.return = e),
                      (o.sibling = t),
                      (e.child = o),
                      (e.child.memoizedState = Io(i)),
                      (e.memoizedState = Mo),
                      t)
                    : Lo(e, l))
            );
          if (null !== (s = t.memoizedState) && null !== (r = s.dehydrated))
            return (function (t, e, i, r, a, s, o) {
              if (i)
                return 256 & e.flags
                  ? ((e.flags &= -257), zo(t, e, o, (r = ho(Error(n(422))))))
                  : null !== e.memoizedState
                    ? ((e.child = t.child), (e.flags |= 128), null)
                    : ((s = r.fallback),
                      (a = e.mode),
                      (r = Ip(
                        { mode: 'visible', children: r.children },
                        a,
                        0,
                        null
                      )),
                      ((s = Mp(s, a, o, null)).flags |= 2),
                      (r.return = e),
                      (s.return = e),
                      (r.sibling = s),
                      (e.child = r),
                      0 !== (1 & e.mode) && Xn(e, t.child, null, o),
                      (e.child.memoizedState = Io(o)),
                      (e.memoizedState = Mo),
                      s);
              if (0 === (1 & e.mode)) return zo(t, e, o, null);
              if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), zo(t, e, o, (r = ho((s = Error(n(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (o & t.childLanes)), vo || l)) {
                if (null !== (r = Bl)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== s.retryLane &&
                    ((s.retryLane = a), Bn(t, a), ip(r, t, a, -1));
                }
                return dp(), zo(t, e, o, (r = ho(Error(n(421)))));
              }
              return '$?' === a.data
                ? ((e.flags |= 128),
                  (e.child = t.child),
                  (e = Pp.bind(null, t)),
                  (a._reactRetry = e),
                  null)
                : ((t = s.treeContext),
                  (rn = la(a.nextSibling)),
                  (en = e),
                  (an = !0),
                  (nn = null),
                  null !== t &&
                    (($a[Ua++] = Qa),
                    ($a[Ua++] = Xa),
                    ($a[Ua++] = Ya),
                    (Qa = t.id),
                    (Xa = t.overflow),
                    (Ya = e)),
                  ((e = Lo(e, r.children)).flags |= 4096),
                  e);
            })(t, e, l, a, r, s, i);
          if (o) {
            (o = a.fallback), (l = e.mode), (r = (s = t.child).sibling);
            var p = { mode: 'hidden', children: a.children };
            return (
              0 === (1 & l) && e.child !== s
                ? (((a = e.child).childLanes = 0),
                  (a.pendingProps = p),
                  (e.deletions = null))
                : ((a = wp(s, p)).subtreeFlags = 14680064 & s.subtreeFlags),
              null !== r
                ? (o = wp(r, o))
                : ((o = Mp(o, l, i, null)).flags |= 2),
              (o.return = e),
              (a.return = e),
              (a.sibling = o),
              (e.child = a),
              (a = o),
              (o = e.child),
              (l =
                null === (l = t.child.memoizedState)
                  ? Io(i)
                  : {
                      baseLanes: l.baseLanes | i,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (o.memoizedState = l),
              (o.childLanes = t.childLanes & ~i),
              (e.memoizedState = Mo),
              a
            );
          }
          return (
            (t = (o = t.child).sibling),
            (a = wp(o, { mode: 'visible', children: a.children })),
            0 === (1 & e.mode) && (a.lanes = i),
            (a.return = e),
            (a.sibling = null),
            null !== t &&
              (null === (i = e.deletions)
                ? ((e.deletions = [t]), (e.flags |= 16))
                : i.push(t)),
            (e.child = a),
            (e.memoizedState = null),
            a
          );
        }
        function Lo(t, e) {
          return (
            ((e = Ip(
              { mode: 'visible', children: e },
              t.mode,
              0,
              null
            )).return = t),
            (t.child = e)
          );
        }
        function zo(t, e, i, r) {
          return (
            null !== r && mn(r),
            Xn(e, t.child, null, i),
            ((t = Lo(e, e.pendingProps.children)).flags |= 2),
            (e.memoizedState = null),
            t
          );
        }
        function No(t, e, i) {
          t.lanes |= e;
          var r = t.alternate;
          null !== r && (r.lanes |= e), bn(t.return, e, i);
        }
        function Oo(t, e, i, r, a) {
          var n = t.memoizedState;
          null === n
            ? (t.memoizedState = {
                isBackwards: e,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: i,
                tailMode: a,
              })
            : ((n.isBackwards = e),
              (n.rendering = null),
              (n.renderingStartTime = 0),
              (n.last = r),
              (n.tail = i),
              (n.tailMode = a));
        }
        function Ho(t, e, i) {
          var r = e.pendingProps,
            a = r.revealOrder,
            n = r.tail;
          if ((_o(t, e, r.children, i), 0 !== (2 & (r = os.current))))
            (r = (1 & r) | 2), (e.flags |= 128);
          else {
            if (null !== t && 0 !== (128 & t.flags))
              t: for (t = e.child; null !== t; ) {
                if (13 === t.tag) null !== t.memoizedState && No(t, i, e);
                else if (19 === t.tag) No(t, i, e);
                else if (null !== t.child) {
                  (t.child.return = t), (t = t.child);
                  continue;
                }
                if (t === e) break t;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === e) break t;
                  t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
              }
            r &= 1;
          }
          if ((Aa(os, r), 0 === (1 & e.mode))) e.memoizedState = null;
          else
            switch (a) {
              case 'forwards':
                for (i = e.child, a = null; null !== i; )
                  null !== (t = i.alternate) && null === ls(t) && (a = i),
                    (i = i.sibling);
                null === (i = a)
                  ? ((a = e.child), (e.child = null))
                  : ((a = i.sibling), (i.sibling = null)),
                  Oo(e, !1, a, i, n);
                break;
              case 'backwards':
                for (i = null, a = e.child, e.child = null; null !== a; ) {
                  if (null !== (t = a.alternate) && null === ls(t)) {
                    e.child = a;
                    break;
                  }
                  (t = a.sibling), (a.sibling = i), (i = a), (a = t);
                }
                Oo(e, !0, i, null, n);
                break;
              case 'together':
                Oo(e, !1, null, null, void 0);
                break;
              default:
                e.memoizedState = null;
            }
          return e.child;
        }
        function jo(t, e) {
          0 === (1 & e.mode) &&
            null !== t &&
            ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
        }
        function Wo(t, e, i) {
          if (
            (null !== t && (e.dependencies = t.dependencies),
            (Il |= e.lanes),
            0 === (i & e.childLanes))
          )
            return null;
          if (null !== t && e.child !== t.child) throw Error(n(153));
          if (null !== e.child) {
            for (
              i = wp((t = e.child), t.pendingProps), e.child = i, i.return = e;
              null !== t.sibling;

            )
              (t = t.sibling),
                ((i = i.sibling = wp(t, t.pendingProps)).return = e);
            i.sibling = null;
          }
          return e.child;
        }
        function qo(t, e) {
          if (!an)
            switch (t.tailMode) {
              case 'hidden':
                e = t.tail;
                for (var i = null; null !== e; )
                  null !== e.alternate && (i = e), (e = e.sibling);
                null === i ? (t.tail = null) : (i.sibling = null);
                break;
              case 'collapsed':
                i = t.tail;
                for (var r = null; null !== i; )
                  null !== i.alternate && (r = i), (i = i.sibling);
                null === r
                  ? e || null === t.tail
                    ? (t.tail = null)
                    : (t.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function $o(t) {
          var e = null !== t.alternate && t.alternate.child === t.child,
            i = 0,
            r = 0;
          if (e)
            for (var a = t.child; null !== a; )
              (i |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = t),
                (a = a.sibling);
          else
            for (a = t.child; null !== a; )
              (i |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = t),
                (a = a.sibling);
          return (t.subtreeFlags |= r), (t.childLanes = i), e;
        }
        function Uo(t, e, i) {
          var r = e.pendingProps;
          switch ((tn(e), e.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $o(e), null;
            case 1:
            case 17:
              return Fa(e.type) && Ta(), $o(e), null;
            case 3:
              return (
                (r = e.stateNode),
                as(),
                Sa(Ga),
                Sa(Pa),
                hs(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== t && null !== t.child) ||
                  (cn(e)
                    ? (e.flags |= 4)
                    : null === t ||
                      (t.memoizedState.isDehydrated && 0 === (256 & e.flags)) ||
                      ((e.flags |= 1024),
                      null !== nn && (sp(nn), (nn = null)))),
                $o(e),
                null
              );
            case 5:
              ss(e);
              var a = is(es.current);
              if (((i = e.type), null !== t && null != e.stateNode))
                wo(t, e, i, r),
                  t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
              else {
                if (!r) {
                  if (null === e.stateNode) throw Error(n(166));
                  return $o(e), null;
                }
                if (((t = is(Zn.current)), cn(e))) {
                  (r = e.stateNode), (i = e.type);
                  var s = e.memoizedProps;
                  switch (
                    ((r[ca] = e), (r[ua] = s), (t = 0 !== (1 & e.mode)), i)
                  ) {
                    case 'dialog':
                      Lr('cancel', r), Lr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Lr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (a = 0; a < Cr.length; a++) Lr(Cr[a], r);
                      break;
                    case 'source':
                      Lr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Lr('error', r), Lr('load', r);
                      break;
                    case 'details':
                      Lr('toggle', r);
                      break;
                    case 'input':
                      X(r, s), Lr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!s.multiple }),
                        Lr('invalid', r);
                      break;
                    case 'textarea':
                      at(r, s), Lr('invalid', r);
                  }
                  for (var l in (kt(i, s), (a = null), s))
                    if (s.hasOwnProperty(l)) {
                      var p = s[l];
                      'children' === l
                        ? 'string' === typeof p
                          ? r.textContent !== p &&
                            (!0 !== s.suppressHydrationWarning &&
                              Kr(r.textContent, p, t),
                            (a = ['children', p]))
                          : 'number' === typeof p &&
                            r.textContent !== '' + p &&
                            (!0 !== s.suppressHydrationWarning &&
                              Kr(r.textContent, p, t),
                            (a = ['children', '' + p]))
                        : o.hasOwnProperty(l) &&
                          null != p &&
                          'onScroll' === l &&
                          Lr('scroll', r);
                    }
                  switch (i) {
                    case 'input':
                      $(r), Z(r, s, !0);
                      break;
                    case 'textarea':
                      $(r), st(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof s.onClick && (r.onclick = Jr);
                  }
                  (r = a), (e.updateQueue = r), null !== r && (e.flags |= 4);
                } else {
                  (l = 9 === a.nodeType ? a : a.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === t && (t = ot(i)),
                    'http://www.w3.org/1999/xhtml' === t
                      ? 'script' === i
                        ? (((t = l.createElement('div')).innerHTML =
                            '<script><\/script>'),
                          (t = t.removeChild(t.firstChild)))
                        : 'string' === typeof r.is
                          ? (t = l.createElement(i, { is: r.is }))
                          : ((t = l.createElement(i)),
                            'select' === i &&
                              ((l = t),
                              r.multiple
                                ? (l.multiple = !0)
                                : r.size && (l.size = r.size)))
                      : (t = l.createElementNS(t, i)),
                    (t[ca] = e),
                    (t[ua] = r),
                    To(t, e),
                    (e.stateNode = t);
                  t: {
                    switch (((l = gt(i, r)), i)) {
                      case 'dialog':
                        Lr('cancel', t), Lr('close', t), (a = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Lr('load', t), (a = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (a = 0; a < Cr.length; a++) Lr(Cr[a], t);
                        a = r;
                        break;
                      case 'source':
                        Lr('error', t), (a = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Lr('error', t), Lr('load', t), (a = r);
                        break;
                      case 'details':
                        Lr('toggle', t), (a = r);
                        break;
                      case 'input':
                        X(t, r), (a = Q(t, r)), Lr('invalid', t);
                        break;
                      case 'option':
                      default:
                        a = r;
                        break;
                      case 'select':
                        (t._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = R({}, r, { value: void 0 })),
                          Lr('invalid', t);
                        break;
                      case 'textarea':
                        at(t, r), (a = rt(t, r)), Lr('invalid', t);
                    }
                    for (s in (kt(i, a), (p = a)))
                      if (p.hasOwnProperty(s)) {
                        var h = p[s];
                        'style' === s
                          ? xt(t, h)
                          : 'dangerouslySetInnerHTML' === s
                            ? null != (h = h ? h.__html : void 0) && ct(t, h)
                            : 'children' === s
                              ? 'string' === typeof h
                                ? ('textarea' !== i || '' !== h) && ut(t, h)
                                : 'number' === typeof h && ut(t, '' + h)
                              : 'suppressContentEditableWarning' !== s &&
                                'suppressHydrationWarning' !== s &&
                                'autoFocus' !== s &&
                                (o.hasOwnProperty(s)
                                  ? null != h &&
                                    'onScroll' === s &&
                                    Lr('scroll', t)
                                  : null != h && g(t, s, h, l));
                      }
                    switch (i) {
                      case 'input':
                        $(t), Z(t, r, !1);
                        break;
                      case 'textarea':
                        $(t), st(t);
                        break;
                      case 'option':
                        null != r.value &&
                          t.setAttribute('value', '' + W(r.value));
                        break;
                      case 'select':
                        (t.multiple = !!r.multiple),
                          null != (s = r.value)
                            ? it(t, !!r.multiple, s, !1)
                            : null != r.defaultValue &&
                              it(t, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' === typeof a.onClick && (t.onclick = Jr);
                    }
                    switch (i) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break t;
                      case 'img':
                        r = !0;
                        break t;
                      default:
                        r = !1;
                    }
                  }
                  r && (e.flags |= 4);
                }
                null !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
              }
              return $o(e), null;
            case 6:
              if (t && null != e.stateNode) Co(0, e, t.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === e.stateNode)
                  throw Error(n(166));
                if (((i = is(es.current)), is(Zn.current), cn(e))) {
                  if (
                    ((r = e.stateNode),
                    (i = e.memoizedProps),
                    (r[ca] = e),
                    (s = r.nodeValue !== i) && null !== (t = en))
                  )
                    switch (t.tag) {
                      case 3:
                        Kr(r.nodeValue, i, 0 !== (1 & t.mode));
                        break;
                      case 5:
                        !0 !== t.memoizedProps.suppressHydrationWarning &&
                          Kr(r.nodeValue, i, 0 !== (1 & t.mode));
                    }
                  s && (e.flags |= 4);
                } else
                  ((r = (9 === i.nodeType ? i : i.ownerDocument).createTextNode(
                    r
                  ))[ca] = e),
                    (e.stateNode = r);
              }
              return $o(e), null;
            case 13:
              if (
                (Sa(os),
                (r = e.memoizedState),
                null === t ||
                  (null !== t.memoizedState &&
                    null !== t.memoizedState.dehydrated))
              ) {
                if (
                  an &&
                  null !== rn &&
                  0 !== (1 & e.mode) &&
                  0 === (128 & e.flags)
                )
                  un(), fn(), (e.flags |= 98560), (s = !1);
                else if (((s = cn(e)), null !== r && null !== r.dehydrated)) {
                  if (null === t) {
                    if (!s) throw Error(n(318));
                    if (
                      !(s =
                        null !== (s = e.memoizedState) ? s.dehydrated : null)
                    )
                      throw Error(n(317));
                    s[ca] = e;
                  } else
                    fn(),
                      0 === (128 & e.flags) && (e.memoizedState = null),
                      (e.flags |= 4);
                  $o(e), (s = !1);
                } else null !== nn && (sp(nn), (nn = null)), (s = !0);
                if (!s) return 65536 & e.flags ? e : null;
              }
              return 0 !== (128 & e.flags)
                ? ((e.lanes = i), e)
                : ((r = null !== r) !==
                    (null !== t && null !== t.memoizedState) &&
                    r &&
                    ((e.child.flags |= 8192),
                    0 !== (1 & e.mode) &&
                      (null === t || 0 !== (1 & os.current)
                        ? 0 === Cl && (Cl = 3)
                        : dp())),
                  null !== e.updateQueue && (e.flags |= 4),
                  $o(e),
                  null);
            case 4:
              return (
                as(), null === t && Or(e.stateNode.containerInfo), $o(e), null
              );
            case 10:
              return En(e.type._context), $o(e), null;
            case 19:
              if ((Sa(os), null === (s = e.memoizedState))) return $o(e), null;
              if (((r = 0 !== (128 & e.flags)), null === (l = s.rendering)))
                if (r) qo(s, !1);
                else {
                  if (0 !== Cl || (null !== t && 0 !== (128 & t.flags)))
                    for (t = e.child; null !== t; ) {
                      if (null !== (l = ls(t))) {
                        for (
                          e.flags |= 128,
                            qo(s, !1),
                            null !== (r = l.updateQueue) &&
                              ((e.updateQueue = r), (e.flags |= 4)),
                            e.subtreeFlags = 0,
                            r = i,
                            i = e.child;
                          null !== i;

                        )
                          (t = r),
                            ((s = i).flags &= 14680066),
                            null === (l = s.alternate)
                              ? ((s.childLanes = 0),
                                (s.lanes = t),
                                (s.child = null),
                                (s.subtreeFlags = 0),
                                (s.memoizedProps = null),
                                (s.memoizedState = null),
                                (s.updateQueue = null),
                                (s.dependencies = null),
                                (s.stateNode = null))
                              : ((s.childLanes = l.childLanes),
                                (s.lanes = l.lanes),
                                (s.child = l.child),
                                (s.subtreeFlags = 0),
                                (s.deletions = null),
                                (s.memoizedProps = l.memoizedProps),
                                (s.memoizedState = l.memoizedState),
                                (s.updateQueue = l.updateQueue),
                                (s.type = l.type),
                                (t = l.dependencies),
                                (s.dependencies =
                                  null === t
                                    ? null
                                    : {
                                        lanes: t.lanes,
                                        firstContext: t.firstContext,
                                      })),
                            (i = i.sibling);
                        return Aa(os, (1 & os.current) | 2), e.child;
                      }
                      t = t.sibling;
                    }
                  null !== s.tail &&
                    Kt() > Hl &&
                    ((e.flags |= 128),
                    (r = !0),
                    qo(s, !1),
                    (e.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (t = ls(l))) {
                    if (
                      ((e.flags |= 128),
                      (r = !0),
                      null !== (i = t.updateQueue) &&
                        ((e.updateQueue = i), (e.flags |= 4)),
                      qo(s, !0),
                      null === s.tail &&
                        'hidden' === s.tailMode &&
                        !l.alternate &&
                        !an)
                    )
                      return $o(e), null;
                  } else
                    2 * Kt() - s.renderingStartTime > Hl &&
                      1073741824 !== i &&
                      ((e.flags |= 128),
                      (r = !0),
                      qo(s, !1),
                      (e.lanes = 4194304));
                s.isBackwards
                  ? ((l.sibling = e.child), (e.child = l))
                  : (null !== (i = s.last) ? (i.sibling = l) : (e.child = l),
                    (s.last = l));
              }
              return null !== s.tail
                ? ((e = s.tail),
                  (s.rendering = e),
                  (s.tail = e.sibling),
                  (s.renderingStartTime = Kt()),
                  (e.sibling = null),
                  (i = os.current),
                  Aa(os, r ? (1 & i) | 2 : 1 & i),
                  e)
                : ($o(e), null);
            case 22:
            case 23:
              return (
                cp(),
                (r = null !== e.memoizedState),
                null !== t &&
                  (null !== t.memoizedState) !== r &&
                  (e.flags |= 8192),
                r && 0 !== (1 & e.mode)
                  ? 0 !== (1073741824 & Tl) &&
                    ($o(e), 6 & e.subtreeFlags && (e.flags |= 8192))
                  : $o(e),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(n(156, e.tag));
        }
        function Yo(t, e) {
          switch ((tn(e), e.tag)) {
            case 1:
              return (
                Fa(e.type) && Ta(),
                65536 & (t = e.flags)
                  ? ((e.flags = (-65537 & t) | 128), e)
                  : null
              );
            case 3:
              return (
                as(),
                Sa(Ga),
                Sa(Pa),
                hs(),
                0 !== (65536 & (t = e.flags)) && 0 === (128 & t)
                  ? ((e.flags = (-65537 & t) | 128), e)
                  : null
              );
            case 5:
              return ss(e), null;
            case 13:
              if (
                (Sa(os),
                null !== (t = e.memoizedState) && null !== t.dehydrated)
              ) {
                if (null === e.alternate) throw Error(n(340));
                fn();
              }
              return 65536 & (t = e.flags)
                ? ((e.flags = (-65537 & t) | 128), e)
                : null;
            case 19:
              return Sa(os), null;
            case 4:
              return as(), null;
            case 10:
              return En(e.type._context), null;
            case 22:
            case 23:
              return cp(), null;
            default:
              return null;
          }
        }
        (To = function (t, e) {
          for (var i = e.child; null !== i; ) {
            if (5 === i.tag || 6 === i.tag) t.appendChild(i.stateNode);
            else if (4 !== i.tag && null !== i.child) {
              (i.child.return = i), (i = i.child);
              continue;
            }
            if (i === e) break;
            for (; null === i.sibling; ) {
              if (null === i.return || i.return === e) return;
              i = i.return;
            }
            (i.sibling.return = i.return), (i = i.sibling);
          }
        }),
          (wo = function (t, e, i, r) {
            var a = t.memoizedProps;
            if (a !== r) {
              (t = e.stateNode), is(Zn.current);
              var n,
                s = null;
              switch (i) {
                case 'input':
                  (a = Q(t, a)), (r = Q(t, r)), (s = []);
                  break;
                case 'select':
                  (a = R({}, a, { value: void 0 })),
                    (r = R({}, r, { value: void 0 })),
                    (s = []);
                  break;
                case 'textarea':
                  (a = rt(t, a)), (r = rt(t, r)), (s = []);
                  break;
                default:
                  'function' !== typeof a.onClick &&
                    'function' === typeof r.onClick &&
                    (t.onclick = Jr);
              }
              for (h in (kt(i, r), (i = null), a))
                if (!r.hasOwnProperty(h) && a.hasOwnProperty(h) && null != a[h])
                  if ('style' === h) {
                    var l = a[h];
                    for (n in l)
                      l.hasOwnProperty(n) && (i || (i = {}), (i[n] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== h &&
                      'children' !== h &&
                      'suppressContentEditableWarning' !== h &&
                      'suppressHydrationWarning' !== h &&
                      'autoFocus' !== h &&
                      (o.hasOwnProperty(h)
                        ? s || (s = [])
                        : (s = s || []).push(h, null));
              for (h in r) {
                var p = r[h];
                if (
                  ((l = null != a ? a[h] : void 0),
                  r.hasOwnProperty(h) && p !== l && (null != p || null != l))
                )
                  if ('style' === h)
                    if (l) {
                      for (n in l)
                        !l.hasOwnProperty(n) ||
                          (p && p.hasOwnProperty(n)) ||
                          (i || (i = {}), (i[n] = ''));
                      for (n in p)
                        p.hasOwnProperty(n) &&
                          l[n] !== p[n] &&
                          (i || (i = {}), (i[n] = p[n]));
                    } else i || (s || (s = []), s.push(h, i)), (i = p);
                  else
                    'dangerouslySetInnerHTML' === h
                      ? ((p = p ? p.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != p && l !== p && (s = s || []).push(h, p))
                      : 'children' === h
                        ? ('string' !== typeof p && 'number' !== typeof p) ||
                          (s = s || []).push(h, '' + p)
                        : 'suppressContentEditableWarning' !== h &&
                          'suppressHydrationWarning' !== h &&
                          (o.hasOwnProperty(h)
                            ? (null != p && 'onScroll' === h && Lr('scroll', t),
                              s || l === p || (s = []))
                            : (s = s || []).push(h, p));
              }
              i && (s = s || []).push('style', i);
              var h = s;
              (e.updateQueue = h) && (e.flags |= 4);
            }
          }),
          (Co = function (t, e, i, r) {
            i !== r && (e.flags |= 4);
          });
        var Qo = !1,
          Xo = !1,
          Ko = 'function' === typeof WeakSet ? WeakSet : Set,
          Jo = null;
        function Zo(t, e) {
          var i = t.ref;
          if (null !== i)
            if ('function' === typeof i)
              try {
                i(null);
              } catch (r) {
                Sp(t, e, r);
              }
            else i.current = null;
        }
        function tl(t, e, i) {
          try {
            i();
          } catch (r) {
            Sp(t, e, r);
          }
        }
        var el = !1;
        function il(t, e, i) {
          var r = e.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & t) === t) {
                var n = a.destroy;
                (a.destroy = void 0), void 0 !== n && tl(e, i, n);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rl(t, e) {
          if (
            null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)
          ) {
            var i = (e = e.next);
            do {
              if ((i.tag & t) === t) {
                var r = i.create;
                i.destroy = r();
              }
              i = i.next;
            } while (i !== e);
          }
        }
        function al(t) {
          var e = t.ref;
          if (null !== e) {
            var i = t.stateNode;
            t.tag, (t = i), 'function' === typeof e ? e(t) : (e.current = t);
          }
        }
        function nl(t) {
          var e = t.alternate;
          null !== e && ((t.alternate = null), nl(e)),
            (t.child = null),
            (t.deletions = null),
            (t.sibling = null),
            5 === t.tag &&
              null !== (e = t.stateNode) &&
              (delete e[ca],
              delete e[ua],
              delete e[ma],
              delete e[da],
              delete e[xa]),
            (t.stateNode = null),
            (t.return = null),
            (t.dependencies = null),
            (t.memoizedProps = null),
            (t.memoizedState = null),
            (t.pendingProps = null),
            (t.stateNode = null),
            (t.updateQueue = null);
        }
        function sl(t) {
          return 5 === t.tag || 3 === t.tag || 4 === t.tag;
        }
        function ol(t) {
          t: for (;;) {
            for (; null === t.sibling; ) {
              if (null === t.return || sl(t.return)) return null;
              t = t.return;
            }
            for (
              t.sibling.return = t.return, t = t.sibling;
              5 !== t.tag && 6 !== t.tag && 18 !== t.tag;

            ) {
              if (2 & t.flags) continue t;
              if (null === t.child || 4 === t.tag) continue t;
              (t.child.return = t), (t = t.child);
            }
            if (!(2 & t.flags)) return t.stateNode;
          }
        }
        function ll(t, e, i) {
          var r = t.tag;
          if (5 === r || 6 === r)
            (t = t.stateNode),
              e
                ? 8 === i.nodeType
                  ? i.parentNode.insertBefore(t, e)
                  : i.insertBefore(t, e)
                : (8 === i.nodeType
                    ? (e = i.parentNode).insertBefore(t, i)
                    : (e = i).appendChild(t),
                  (null !== (i = i._reactRootContainer) && void 0 !== i) ||
                    null !== e.onclick ||
                    (e.onclick = Jr));
          else if (4 !== r && null !== (t = t.child))
            for (ll(t, e, i), t = t.sibling; null !== t; )
              ll(t, e, i), (t = t.sibling);
        }
        function pl(t, e, i) {
          var r = t.tag;
          if (5 === r || 6 === r)
            (t = t.stateNode), e ? i.insertBefore(t, e) : i.appendChild(t);
          else if (4 !== r && null !== (t = t.child))
            for (pl(t, e, i), t = t.sibling; null !== t; )
              pl(t, e, i), (t = t.sibling);
        }
        var hl = null,
          cl = !1;
        function ul(t, e, i) {
          for (i = i.child; null !== i; ) fl(t, e, i), (i = i.sibling);
        }
        function fl(t, e, i) {
          if (ne && 'function' === typeof ne.onCommitFiberUnmount)
            try {
              ne.onCommitFiberUnmount(ae, i);
            } catch (o) {}
          switch (i.tag) {
            case 5:
              Xo || Zo(i, e);
            case 6:
              var r = hl,
                a = cl;
              (hl = null),
                ul(t, e, i),
                (cl = a),
                null !== (hl = r) &&
                  (cl
                    ? ((t = hl),
                      (i = i.stateNode),
                      8 === t.nodeType
                        ? t.parentNode.removeChild(i)
                        : t.removeChild(i))
                    : hl.removeChild(i.stateNode));
              break;
            case 18:
              null !== hl &&
                (cl
                  ? ((t = hl),
                    (i = i.stateNode),
                    8 === t.nodeType
                      ? oa(t.parentNode, i)
                      : 1 === t.nodeType && oa(t, i),
                    He(t))
                  : oa(hl, i.stateNode));
              break;
            case 4:
              (r = hl),
                (a = cl),
                (hl = i.stateNode.containerInfo),
                (cl = !0),
                ul(t, e, i),
                (hl = r),
                (cl = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xo &&
                null !== (r = i.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var n = a,
                    s = n.destroy;
                  (n = n.tag),
                    void 0 !== s &&
                      (0 !== (2 & n) || 0 !== (4 & n)) &&
                      tl(i, e, s),
                    (a = a.next);
                } while (a !== r);
              }
              ul(t, e, i);
              break;
            case 1:
              if (
                !Xo &&
                (Zo(i, e),
                'function' === typeof (r = i.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = i.memoizedProps),
                    (r.state = i.memoizedState),
                    r.componentWillUnmount();
                } catch (o) {
                  Sp(i, e, o);
                }
              ul(t, e, i);
              break;
            case 21:
              ul(t, e, i);
              break;
            case 22:
              1 & i.mode
                ? ((Xo = (r = Xo) || null !== i.memoizedState),
                  ul(t, e, i),
                  (Xo = r))
                : ul(t, e, i);
              break;
            default:
              ul(t, e, i);
          }
        }
        function ml(t) {
          var e = t.updateQueue;
          if (null !== e) {
            t.updateQueue = null;
            var i = t.stateNode;
            null === i && (i = t.stateNode = new Ko()),
              e.forEach(function (e) {
                var r = Gp.bind(null, t, e);
                i.has(e) || (i.add(e), e.then(r, r));
              });
          }
        }
        function dl(t, e) {
          var i = e.deletions;
          if (null !== i)
            for (var r = 0; r < i.length; r++) {
              var a = i[r];
              try {
                var s = t,
                  o = e,
                  l = o;
                t: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (hl = l.stateNode), (cl = !1);
                      break t;
                    case 3:
                    case 4:
                      (hl = l.stateNode.containerInfo), (cl = !0);
                      break t;
                  }
                  l = l.return;
                }
                if (null === hl) throw Error(n(160));
                fl(s, o, a), (hl = null), (cl = !1);
                var p = a.alternate;
                null !== p && (p.return = null), (a.return = null);
              } catch (h) {
                Sp(a, e, h);
              }
            }
          if (12854 & e.subtreeFlags)
            for (e = e.child; null !== e; ) xl(e, t), (e = e.sibling);
        }
        function xl(t, e) {
          var i = t.alternate,
            r = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((dl(e, t), yl(t), 4 & r)) {
                try {
                  il(3, t, t.return), rl(3, t);
                } catch (x) {
                  Sp(t, t.return, x);
                }
                try {
                  il(5, t, t.return);
                } catch (x) {
                  Sp(t, t.return, x);
                }
              }
              break;
            case 1:
              dl(e, t), yl(t), 512 & r && null !== i && Zo(i, i.return);
              break;
            case 5:
              if (
                (dl(e, t),
                yl(t),
                512 & r && null !== i && Zo(i, i.return),
                32 & t.flags)
              ) {
                var a = t.stateNode;
                try {
                  ut(a, '');
                } catch (x) {
                  Sp(t, t.return, x);
                }
              }
              if (4 & r && null != (a = t.stateNode)) {
                var s = t.memoizedProps,
                  o = null !== i ? i.memoizedProps : s,
                  l = t.type,
                  p = t.updateQueue;
                if (((t.updateQueue = null), null !== p))
                  try {
                    'input' === l &&
                      'radio' === s.type &&
                      null != s.name &&
                      K(a, s),
                      gt(l, o);
                    var h = gt(l, s);
                    for (o = 0; o < p.length; o += 2) {
                      var c = p[o],
                        u = p[o + 1];
                      'style' === c
                        ? xt(a, u)
                        : 'dangerouslySetInnerHTML' === c
                          ? ct(a, u)
                          : 'children' === c
                            ? ut(a, u)
                            : g(a, c, u, h);
                    }
                    switch (l) {
                      case 'input':
                        J(a, s);
                        break;
                      case 'textarea':
                        nt(a, s);
                        break;
                      case 'select':
                        var f = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!s.multiple;
                        var m = s.value;
                        null != m
                          ? it(a, !!s.multiple, m, !1)
                          : f !== !!s.multiple &&
                            (null != s.defaultValue
                              ? it(a, !!s.multiple, s.defaultValue, !0)
                              : it(a, !!s.multiple, s.multiple ? [] : '', !1));
                    }
                    a[ua] = s;
                  } catch (x) {
                    Sp(t, t.return, x);
                  }
              }
              break;
            case 6:
              if ((dl(e, t), yl(t), 4 & r)) {
                if (null === t.stateNode) throw Error(n(162));
                (a = t.stateNode), (s = t.memoizedProps);
                try {
                  a.nodeValue = s;
                } catch (x) {
                  Sp(t, t.return, x);
                }
              }
              break;
            case 3:
              if (
                (dl(e, t),
                yl(t),
                4 & r && null !== i && i.memoizedState.isDehydrated)
              )
                try {
                  He(e.containerInfo);
                } catch (x) {
                  Sp(t, t.return, x);
                }
              break;
            case 4:
            default:
              dl(e, t), yl(t);
              break;
            case 13:
              dl(e, t),
                yl(t),
                8192 & (a = t.child).flags &&
                  ((s = null !== a.memoizedState),
                  (a.stateNode.isHidden = s),
                  !s ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Ol = Kt())),
                4 & r && ml(t);
              break;
            case 22:
              if (
                ((c = null !== i && null !== i.memoizedState),
                1 & t.mode
                  ? ((Xo = (h = Xo) || c), dl(e, t), (Xo = h))
                  : dl(e, t),
                yl(t),
                8192 & r)
              ) {
                if (
                  ((h = null !== t.memoizedState),
                  (t.stateNode.isHidden = h) && !c && 0 !== (1 & t.mode))
                )
                  for (Jo = t, c = t.child; null !== c; ) {
                    for (u = Jo = c; null !== Jo; ) {
                      switch (((m = (f = Jo).child), f.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          il(4, f, f.return);
                          break;
                        case 1:
                          Zo(f, f.return);
                          var d = f.stateNode;
                          if ('function' === typeof d.componentWillUnmount) {
                            (r = f), (i = f.return);
                            try {
                              (e = r),
                                (d.props = e.memoizedProps),
                                (d.state = e.memoizedState),
                                d.componentWillUnmount();
                            } catch (x) {
                              Sp(r, i, x);
                            }
                          }
                          break;
                        case 5:
                          Zo(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            _l(u);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = f), (Jo = m)) : _l(u);
                    }
                    c = c.sibling;
                  }
                t: for (c = null, u = t; ; ) {
                  if (5 === u.tag) {
                    if (null === c) {
                      c = u;
                      try {
                        (a = u.stateNode),
                          h
                            ? 'function' === typeof (s = a.style).setProperty
                              ? s.setProperty('display', 'none', 'important')
                              : (s.display = 'none')
                            : ((l = u.stateNode),
                              (o =
                                void 0 !== (p = u.memoizedProps.style) &&
                                null !== p &&
                                p.hasOwnProperty('display')
                                  ? p.display
                                  : null),
                              (l.style.display = dt('display', o)));
                      } catch (x) {
                        Sp(t, t.return, x);
                      }
                    }
                  } else if (6 === u.tag) {
                    if (null === c)
                      try {
                        u.stateNode.nodeValue = h ? '' : u.memoizedProps;
                      } catch (x) {
                        Sp(t, t.return, x);
                      }
                  } else if (
                    ((22 !== u.tag && 23 !== u.tag) ||
                      null === u.memoizedState ||
                      u === t) &&
                    null !== u.child
                  ) {
                    (u.child.return = u), (u = u.child);
                    continue;
                  }
                  if (u === t) break t;
                  for (; null === u.sibling; ) {
                    if (null === u.return || u.return === t) break t;
                    c === u && (c = null), (u = u.return);
                  }
                  c === u && (c = null),
                    (u.sibling.return = u.return),
                    (u = u.sibling);
                }
              }
              break;
            case 19:
              dl(e, t), yl(t), 4 & r && ml(t);
            case 21:
          }
        }
        function yl(t) {
          var e = t.flags;
          if (2 & e) {
            try {
              t: {
                for (var i = t.return; null !== i; ) {
                  if (sl(i)) {
                    var r = i;
                    break t;
                  }
                  i = i.return;
                }
                throw Error(n(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (ut(a, ''), (r.flags &= -33)),
                    pl(t, ol(t), a);
                  break;
                case 3:
                case 4:
                  var s = r.stateNode.containerInfo;
                  ll(t, ol(t), s);
                  break;
                default:
                  throw Error(n(161));
              }
            } catch (o) {
              Sp(t, t.return, o);
            }
            t.flags &= -3;
          }
          4096 & e && (t.flags &= -4097);
        }
        function kl(t, e, i) {
          (Jo = t), gl(t, e, i);
        }
        function gl(t, e, i) {
          for (var r = 0 !== (1 & t.mode); null !== Jo; ) {
            var a = Jo,
              n = a.child;
            if (22 === a.tag && r) {
              var s = null !== a.memoizedState || Qo;
              if (!s) {
                var o = a.alternate,
                  l = (null !== o && null !== o.memoizedState) || Xo;
                o = Qo;
                var p = Xo;
                if (((Qo = s), (Xo = l) && !p))
                  for (Jo = a; null !== Jo; )
                    (l = (s = Jo).child),
                      22 === s.tag && null !== s.memoizedState
                        ? El(a)
                        : null !== l
                          ? ((l.return = s), (Jo = l))
                          : El(a);
                for (; null !== n; ) (Jo = n), gl(n, e, i), (n = n.sibling);
                (Jo = a), (Qo = o), (Xo = p);
              }
              vl(t);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== n
                ? ((n.return = a), (Jo = n))
                : vl(t);
          }
        }
        function vl(t) {
          for (; null !== Jo; ) {
            var e = Jo;
            if (0 !== (8772 & e.flags)) {
              var i = e.alternate;
              try {
                if (0 !== (8772 & e.flags))
                  switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xo || rl(5, e);
                      break;
                    case 1:
                      var r = e.stateNode;
                      if (4 & e.flags && !Xo)
                        if (null === i) r.componentDidMount();
                        else {
                          var a =
                            e.elementType === e.type
                              ? i.memoizedProps
                              : xn(e.type, i.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            i.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var s = e.updateQueue;
                      null !== s && Ln(e, s, r);
                      break;
                    case 3:
                      var o = e.updateQueue;
                      if (null !== o) {
                        if (((i = null), null !== e.child))
                          switch (e.child.tag) {
                            case 5:
                            case 1:
                              i = e.child.stateNode;
                          }
                        Ln(e, o, i);
                      }
                      break;
                    case 5:
                      var l = e.stateNode;
                      if (null === i && 4 & e.flags) {
                        i = l;
                        var p = e.memoizedProps;
                        switch (e.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            p.autoFocus && i.focus();
                            break;
                          case 'img':
                            p.src && (i.src = p.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === e.memoizedState) {
                        var h = e.alternate;
                        if (null !== h) {
                          var c = h.memoizedState;
                          if (null !== c) {
                            var u = c.dehydrated;
                            null !== u && He(u);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(n(163));
                  }
                Xo || (512 & e.flags && al(e));
              } catch (f) {
                Sp(e, e.return, f);
              }
            }
            if (e === t) {
              Jo = null;
              break;
            }
            if (null !== (i = e.sibling)) {
              (i.return = e.return), (Jo = i);
              break;
            }
            Jo = e.return;
          }
        }
        function _l(t) {
          for (; null !== Jo; ) {
            var e = Jo;
            if (e === t) {
              Jo = null;
              break;
            }
            var i = e.sibling;
            if (null !== i) {
              (i.return = e.return), (Jo = i);
              break;
            }
            Jo = e.return;
          }
        }
        function El(t) {
          for (; null !== Jo; ) {
            var e = Jo;
            try {
              switch (e.tag) {
                case 0:
                case 11:
                case 15:
                  var i = e.return;
                  try {
                    rl(4, e);
                  } catch (l) {
                    Sp(e, i, l);
                  }
                  break;
                case 1:
                  var r = e.stateNode;
                  if ('function' === typeof r.componentDidMount) {
                    var a = e.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Sp(e, a, l);
                    }
                  }
                  var n = e.return;
                  try {
                    al(e);
                  } catch (l) {
                    Sp(e, n, l);
                  }
                  break;
                case 5:
                  var s = e.return;
                  try {
                    al(e);
                  } catch (l) {
                    Sp(e, s, l);
                  }
              }
            } catch (l) {
              Sp(e, e.return, l);
            }
            if (e === t) {
              Jo = null;
              break;
            }
            var o = e.sibling;
            if (null !== o) {
              (o.return = e.return), (Jo = o);
              break;
            }
            Jo = e.return;
          }
        }
        var bl,
          Sl = Math.ceil,
          Al = v.ReactCurrentDispatcher,
          Dl = v.ReactCurrentOwner,
          Pl = v.ReactCurrentBatchConfig,
          Gl = 0,
          Bl = null,
          Vl = null,
          Fl = 0,
          Tl = 0,
          wl = ba(0),
          Cl = 0,
          Ml = null,
          Il = 0,
          Rl = 0,
          Ll = 0,
          zl = null,
          Nl = null,
          Ol = 0,
          Hl = 1 / 0,
          jl = null,
          Wl = !1,
          ql = null,
          $l = null,
          Ul = !1,
          Yl = null,
          Ql = 0,
          Xl = 0,
          Kl = null,
          Jl = -1,
          Zl = 0;
        function tp() {
          return 0 !== (6 & Gl) ? Kt() : -1 !== Jl ? Jl : (Jl = Kt());
        }
        function ep(t) {
          return 0 === (1 & t.mode)
            ? 1
            : 0 !== (2 & Gl) && 0 !== Fl
              ? Fl & -Fl
              : null !== dn.transition
                ? (0 === Zl && (Zl = de()), Zl)
                : 0 !== (t = ge)
                  ? t
                  : (t = void 0 === (t = window.event) ? 16 : Xe(t.type));
        }
        function ip(t, e, i, r) {
          if (50 < Xl) throw ((Xl = 0), (Kl = null), Error(n(185)));
          ye(t, i, r),
            (0 !== (2 & Gl) && t === Bl) ||
              (t === Bl && (0 === (2 & Gl) && (Rl |= i), 4 === Cl && op(t, Fl)),
              rp(t, r),
              1 === i &&
                0 === Gl &&
                0 === (1 & e.mode) &&
                ((Hl = Kt() + 500), La && Oa()));
        }
        function rp(t, e) {
          var i = t.callbackNode;
          !(function (t, e) {
            for (
              var i = t.suspendedLanes,
                r = t.pingedLanes,
                a = t.expirationTimes,
                n = t.pendingLanes;
              0 < n;

            ) {
              var s = 31 - se(n),
                o = 1 << s,
                l = a[s];
              -1 === l
                ? (0 !== (o & i) && 0 === (o & r)) || (a[s] = fe(o, e))
                : l <= e && (t.expiredLanes |= o),
                (n &= ~o);
            }
          })(t, e);
          var r = ue(t, t === Bl ? Fl : 0);
          if (0 === r)
            null !== i && Yt(i),
              (t.callbackNode = null),
              (t.callbackPriority = 0);
          else if (((e = r & -r), t.callbackPriority !== e)) {
            if ((null != i && Yt(i), 1 === e))
              0 === t.tag
                ? (function (t) {
                    (La = !0), Na(t);
                  })(lp.bind(null, t))
                : Na(lp.bind(null, t)),
                na(function () {
                  0 === (6 & Gl) && Oa();
                }),
                (i = null);
            else {
              switch (ve(r)) {
                case 1:
                  i = Zt;
                  break;
                case 4:
                  i = te;
                  break;
                case 16:
                default:
                  i = ee;
                  break;
                case 536870912:
                  i = re;
              }
              i = Bp(i, ap.bind(null, t));
            }
            (t.callbackPriority = e), (t.callbackNode = i);
          }
        }
        function ap(t, e) {
          if (((Jl = -1), (Zl = 0), 0 !== (6 & Gl))) throw Error(n(327));
          var i = t.callbackNode;
          if (Ep() && t.callbackNode !== i) return null;
          var r = ue(t, t === Bl ? Fl : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & t.expiredLanes) || e) e = xp(t, r);
          else {
            e = r;
            var a = Gl;
            Gl |= 2;
            var s = mp();
            for (
              (Bl === t && Fl === e) ||
              ((jl = null), (Hl = Kt() + 500), up(t, e));
              ;

            )
              try {
                kp();
                break;
              } catch (l) {
                fp(t, l);
              }
            _n(),
              (Al.current = s),
              (Gl = a),
              null !== Vl ? (e = 0) : ((Bl = null), (Fl = 0), (e = Cl));
          }
          if (0 !== e) {
            if (
              (2 === e && 0 !== (a = me(t)) && ((r = a), (e = np(t, a))),
              1 === e)
            )
              throw ((i = Ml), up(t, 0), op(t, r), rp(t, Kt()), i);
            if (6 === e) op(t, r);
            else {
              if (
                ((a = t.current.alternate),
                0 === (30 & r) &&
                  !(function (t) {
                    for (var e = t; ; ) {
                      if (16384 & e.flags) {
                        var i = e.updateQueue;
                        if (null !== i && null !== (i = i.stores))
                          for (var r = 0; r < i.length; r++) {
                            var a = i[r],
                              n = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!sr(n(), a)) return !1;
                            } catch (o) {
                              return !1;
                            }
                          }
                      }
                      if (((i = e.child), 16384 & e.subtreeFlags && null !== i))
                        (i.return = e), (e = i);
                      else {
                        if (e === t) break;
                        for (; null === e.sibling; ) {
                          if (null === e.return || e.return === t) return !0;
                          e = e.return;
                        }
                        (e.sibling.return = e.return), (e = e.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (e = xp(t, r)) &&
                    0 !== (s = me(t)) &&
                    ((r = s), (e = np(t, s))),
                  1 === e))
              )
                throw ((i = Ml), up(t, 0), op(t, r), rp(t, Kt()), i);
              switch (((t.finishedWork = a), (t.finishedLanes = r), e)) {
                case 0:
                case 1:
                  throw Error(n(345));
                case 2:
                case 5:
                  _p(t, Nl, jl);
                  break;
                case 3:
                  if (
                    (op(t, r),
                    (130023424 & r) === r && 10 < (e = Ol + 500 - Kt()))
                  ) {
                    if (0 !== ue(t, 0)) break;
                    if (((a = t.suspendedLanes) & r) !== r) {
                      tp(), (t.pingedLanes |= t.suspendedLanes & a);
                      break;
                    }
                    t.timeoutHandle = ia(_p.bind(null, t, Nl, jl), e);
                    break;
                  }
                  _p(t, Nl, jl);
                  break;
                case 4:
                  if ((op(t, r), (4194240 & r) === r)) break;
                  for (e = t.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - se(r);
                    (s = 1 << o), (o = e[o]) > a && (a = o), (r &= ~s);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Kt() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * Sl(r / 1960)) - r))
                  ) {
                    t.timeoutHandle = ia(_p.bind(null, t, Nl, jl), r);
                    break;
                  }
                  _p(t, Nl, jl);
                  break;
                default:
                  throw Error(n(329));
              }
            }
          }
          return rp(t, Kt()), t.callbackNode === i ? ap.bind(null, t) : null;
        }
        function np(t, e) {
          var i = zl;
          return (
            t.current.memoizedState.isDehydrated && (up(t, e).flags |= 256),
            2 !== (t = xp(t, e)) && ((e = Nl), (Nl = i), null !== e && sp(e)),
            t
          );
        }
        function sp(t) {
          null === Nl ? (Nl = t) : Nl.push.apply(Nl, t);
        }
        function op(t, e) {
          for (
            e &= ~Ll,
              e &= ~Rl,
              t.suspendedLanes |= e,
              t.pingedLanes &= ~e,
              t = t.expirationTimes;
            0 < e;

          ) {
            var i = 31 - se(e),
              r = 1 << i;
            (t[i] = -1), (e &= ~r);
          }
        }
        function lp(t) {
          if (0 !== (6 & Gl)) throw Error(n(327));
          Ep();
          var e = ue(t, 0);
          if (0 === (1 & e)) return rp(t, Kt()), null;
          var i = xp(t, e);
          if (0 !== t.tag && 2 === i) {
            var r = me(t);
            0 !== r && ((e = r), (i = np(t, r)));
          }
          if (1 === i) throw ((i = Ml), up(t, 0), op(t, e), rp(t, Kt()), i);
          if (6 === i) throw Error(n(345));
          return (
            (t.finishedWork = t.current.alternate),
            (t.finishedLanes = e),
            _p(t, Nl, jl),
            rp(t, Kt()),
            null
          );
        }
        function pp(t, e) {
          var i = Gl;
          Gl |= 1;
          try {
            return t(e);
          } finally {
            0 === (Gl = i) && ((Hl = Kt() + 500), La && Oa());
          }
        }
        function hp(t) {
          null !== Yl && 0 === Yl.tag && 0 === (6 & Gl) && Ep();
          var e = Gl;
          Gl |= 1;
          var i = Pl.transition,
            r = ge;
          try {
            if (((Pl.transition = null), (ge = 1), t)) return t();
          } finally {
            (ge = r), (Pl.transition = i), 0 === (6 & (Gl = e)) && Oa();
          }
        }
        function cp() {
          (Tl = wl.current), Sa(wl);
        }
        function up(t, e) {
          (t.finishedWork = null), (t.finishedLanes = 0);
          var i = t.timeoutHandle;
          if ((-1 !== i && ((t.timeoutHandle = -1), ra(i)), null !== Vl))
            for (i = Vl.return; null !== i; ) {
              var r = i;
              switch ((tn(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ta();
                  break;
                case 3:
                  as(), Sa(Ga), Sa(Pa), hs();
                  break;
                case 5:
                  ss(r);
                  break;
                case 4:
                  as();
                  break;
                case 13:
                case 19:
                  Sa(os);
                  break;
                case 10:
                  En(r.type._context);
                  break;
                case 22:
                case 23:
                  cp();
              }
              i = i.return;
            }
          if (
            ((Bl = t),
            (Vl = t = wp(t.current, null)),
            (Fl = Tl = e),
            (Cl = 0),
            (Ml = null),
            (Ll = Rl = Il = 0),
            (Nl = zl = null),
            null !== Dn)
          ) {
            for (e = 0; e < Dn.length; e++)
              if (null !== (r = (i = Dn[e]).interleaved)) {
                i.interleaved = null;
                var a = r.next,
                  n = i.pending;
                if (null !== n) {
                  var s = n.next;
                  (n.next = a), (r.next = s);
                }
                i.pending = r;
              }
            Dn = null;
          }
          return t;
        }
        function fp(t, e) {
          for (;;) {
            var i = Vl;
            try {
              if ((_n(), (cs.current = no), ys)) {
                for (var r = ms.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                ys = !1;
              }
              if (
                ((fs = 0),
                (xs = ds = ms = null),
                (ks = !1),
                (gs = 0),
                (Dl.current = null),
                null === i || null === i.return)
              ) {
                (Cl = 1), (Ml = e), (Vl = null);
                break;
              }
              t: {
                var s = t,
                  o = i.return,
                  l = i,
                  p = e;
                if (
                  ((e = Fl),
                  (l.flags |= 32768),
                  null !== p &&
                    'object' === typeof p &&
                    'function' === typeof p.then)
                ) {
                  var h = p,
                    c = l,
                    u = c.tag;
                  if (0 === (1 & c.mode) && (0 === u || 11 === u || 15 === u)) {
                    var f = c.alternate;
                    f
                      ? ((c.updateQueue = f.updateQueue),
                        (c.memoizedState = f.memoizedState),
                        (c.lanes = f.lanes))
                      : ((c.updateQueue = null), (c.memoizedState = null));
                  }
                  var m = yo(o);
                  if (null !== m) {
                    (m.flags &= -257),
                      ko(m, o, l, 0, e),
                      1 & m.mode && xo(s, h, e),
                      (p = h);
                    var d = (e = m).updateQueue;
                    if (null === d) {
                      var x = new Set();
                      x.add(p), (e.updateQueue = x);
                    } else d.add(p);
                    break t;
                  }
                  if (0 === (1 & e)) {
                    xo(s, h, e), dp();
                    break t;
                  }
                  p = Error(n(426));
                } else if (an && 1 & l.mode) {
                  var y = yo(o);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      ko(y, o, l, 0, e),
                      mn(po(p, l));
                    break t;
                  }
                }
                (s = p = po(p, l)),
                  4 !== Cl && (Cl = 2),
                  null === zl ? (zl = [s]) : zl.push(s),
                  (s = o);
                do {
                  switch (s.tag) {
                    case 3:
                      (s.flags |= 65536),
                        (e &= -e),
                        (s.lanes |= e),
                        In(s, fo(0, p, e));
                      break t;
                    case 1:
                      l = p;
                      var k = s.type,
                        g = s.stateNode;
                      if (
                        0 === (128 & s.flags) &&
                        ('function' === typeof k.getDerivedStateFromError ||
                          (null !== g &&
                            'function' === typeof g.componentDidCatch &&
                            (null === $l || !$l.has(g))))
                      ) {
                        (s.flags |= 65536),
                          (e &= -e),
                          (s.lanes |= e),
                          In(s, mo(s, l, e));
                        break t;
                      }
                  }
                  s = s.return;
                } while (null !== s);
              }
              vp(i);
            } catch (v) {
              (e = v), Vl === i && null !== i && (Vl = i = i.return);
              continue;
            }
            break;
          }
        }
        function mp() {
          var t = Al.current;
          return (Al.current = no), null === t ? no : t;
        }
        function dp() {
          (0 !== Cl && 3 !== Cl && 2 !== Cl) || (Cl = 4),
            null === Bl ||
              (0 === (268435455 & Il) && 0 === (268435455 & Rl)) ||
              op(Bl, Fl);
        }
        function xp(t, e) {
          var i = Gl;
          Gl |= 2;
          var r = mp();
          for ((Bl === t && Fl === e) || ((jl = null), up(t, e)); ; )
            try {
              yp();
              break;
            } catch (a) {
              fp(t, a);
            }
          if ((_n(), (Gl = i), (Al.current = r), null !== Vl))
            throw Error(n(261));
          return (Bl = null), (Fl = 0), Cl;
        }
        function yp() {
          for (; null !== Vl; ) gp(Vl);
        }
        function kp() {
          for (; null !== Vl && !Qt(); ) gp(Vl);
        }
        function gp(t) {
          var e = bl(t.alternate, t, Tl);
          (t.memoizedProps = t.pendingProps),
            null === e ? vp(t) : (Vl = e),
            (Dl.current = null);
        }
        function vp(t) {
          var e = t;
          do {
            var i = e.alternate;
            if (((t = e.return), 0 === (32768 & e.flags))) {
              if (null !== (i = Uo(i, e, Tl))) return void (Vl = i);
            } else {
              if (null !== (i = Yo(i, e)))
                return (i.flags &= 32767), void (Vl = i);
              if (null === t) return (Cl = 6), void (Vl = null);
              (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
            }
            if (null !== (e = e.sibling)) return void (Vl = e);
            Vl = e = t;
          } while (null !== e);
          0 === Cl && (Cl = 5);
        }
        function _p(t, e, i) {
          var r = ge,
            a = Pl.transition;
          try {
            (Pl.transition = null),
              (ge = 1),
              (function (t, e, i, r) {
                do {
                  Ep();
                } while (null !== Yl);
                if (0 !== (6 & Gl)) throw Error(n(327));
                i = t.finishedWork;
                var a = t.finishedLanes;
                if (null === i) return null;
                if (
                  ((t.finishedWork = null),
                  (t.finishedLanes = 0),
                  i === t.current)
                )
                  throw Error(n(177));
                (t.callbackNode = null), (t.callbackPriority = 0);
                var s = i.lanes | i.childLanes;
                if (
                  ((function (t, e) {
                    var i = t.pendingLanes & ~e;
                    (t.pendingLanes = e),
                      (t.suspendedLanes = 0),
                      (t.pingedLanes = 0),
                      (t.expiredLanes &= e),
                      (t.mutableReadLanes &= e),
                      (t.entangledLanes &= e),
                      (e = t.entanglements);
                    var r = t.eventTimes;
                    for (t = t.expirationTimes; 0 < i; ) {
                      var a = 31 - se(i),
                        n = 1 << a;
                      (e[a] = 0), (r[a] = -1), (t[a] = -1), (i &= ~n);
                    }
                  })(t, s),
                  t === Bl && ((Vl = Bl = null), (Fl = 0)),
                  (0 === (2064 & i.subtreeFlags) && 0 === (2064 & i.flags)) ||
                    Ul ||
                    ((Ul = !0),
                    Bp(ee, function () {
                      return Ep(), null;
                    })),
                  (s = 0 !== (15990 & i.flags)),
                  0 !== (15990 & i.subtreeFlags) || s)
                ) {
                  (s = Pl.transition), (Pl.transition = null);
                  var o = ge;
                  ge = 1;
                  var l = Gl;
                  (Gl |= 4),
                    (Dl.current = null),
                    (function (t, e) {
                      if (((Zr = We), ur((t = cr())))) {
                        if ('selectionStart' in t)
                          var i = {
                            start: t.selectionStart,
                            end: t.selectionEnd,
                          };
                        else
                          t: {
                            var r =
                              (i =
                                ((i = t.ownerDocument) && i.defaultView) ||
                                window).getSelection && i.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              i = r.anchorNode;
                              var a = r.anchorOffset,
                                s = r.focusNode;
                              r = r.focusOffset;
                              try {
                                i.nodeType, s.nodeType;
                              } catch (_) {
                                i = null;
                                break t;
                              }
                              var o = 0,
                                l = -1,
                                p = -1,
                                h = 0,
                                c = 0,
                                u = t,
                                f = null;
                              e: for (;;) {
                                for (
                                  var m;
                                  u !== i ||
                                    (0 !== a && 3 !== u.nodeType) ||
                                    (l = o + a),
                                    u !== s ||
                                      (0 !== r && 3 !== u.nodeType) ||
                                      (p = o + r),
                                    3 === u.nodeType &&
                                      (o += u.nodeValue.length),
                                    null !== (m = u.firstChild);

                                )
                                  (f = u), (u = m);
                                for (;;) {
                                  if (u === t) break e;
                                  if (
                                    (f === i && ++h === a && (l = o),
                                    f === s && ++c === r && (p = o),
                                    null !== (m = u.nextSibling))
                                  )
                                    break;
                                  f = (u = f).parentNode;
                                }
                                u = m;
                              }
                              i =
                                -1 === l || -1 === p
                                  ? null
                                  : { start: l, end: p };
                            } else i = null;
                          }
                        i = i || { start: 0, end: 0 };
                      } else i = null;
                      for (
                        ta = { focusedElem: t, selectionRange: i },
                          We = !1,
                          Jo = e;
                        null !== Jo;

                      )
                        if (
                          ((t = (e = Jo).child),
                          0 !== (1028 & e.subtreeFlags) && null !== t)
                        )
                          (t.return = e), (Jo = t);
                        else
                          for (; null !== Jo; ) {
                            e = Jo;
                            try {
                              var d = e.alternate;
                              if (0 !== (1024 & e.flags))
                                switch (e.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== d) {
                                      var x = d.memoizedProps,
                                        y = d.memoizedState,
                                        k = e.stateNode,
                                        g = k.getSnapshotBeforeUpdate(
                                          e.elementType === e.type
                                            ? x
                                            : xn(e.type, x),
                                          y
                                        );
                                      k.__reactInternalSnapshotBeforeUpdate = g;
                                    }
                                    break;
                                  case 3:
                                    var v = e.stateNode.containerInfo;
                                    1 === v.nodeType
                                      ? (v.textContent = '')
                                      : 9 === v.nodeType &&
                                        v.documentElement &&
                                        v.removeChild(v.documentElement);
                                    break;
                                  default:
                                    throw Error(n(163));
                                }
                            } catch (_) {
                              Sp(e, e.return, _);
                            }
                            if (null !== (t = e.sibling)) {
                              (t.return = e.return), (Jo = t);
                              break;
                            }
                            Jo = e.return;
                          }
                      (d = el), (el = !1);
                    })(t, i),
                    xl(i, t),
                    fr(ta),
                    (We = !!Zr),
                    (ta = Zr = null),
                    (t.current = i),
                    kl(i, t, a),
                    Xt(),
                    (Gl = l),
                    (ge = o),
                    (Pl.transition = s);
                } else t.current = i;
                if (
                  (Ul && ((Ul = !1), (Yl = t), (Ql = a)),
                  0 === (s = t.pendingLanes) && ($l = null),
                  (function (t) {
                    if (ne && 'function' === typeof ne.onCommitFiberRoot)
                      try {
                        ne.onCommitFiberRoot(
                          ae,
                          t,
                          void 0,
                          128 === (128 & t.current.flags)
                        );
                      } catch (e) {}
                  })(i.stateNode),
                  rp(t, Kt()),
                  null !== e)
                )
                  for (r = t.onRecoverableError, i = 0; i < e.length; i++)
                    r((a = e[i]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if (Wl) throw ((Wl = !1), (t = ql), (ql = null), t);
                0 !== (1 & Ql) && 0 !== t.tag && Ep(),
                  0 !== (1 & (s = t.pendingLanes))
                    ? t === Kl
                      ? Xl++
                      : ((Xl = 0), (Kl = t))
                    : (Xl = 0),
                  Oa();
              })(t, e, i, r);
          } finally {
            (Pl.transition = a), (ge = r);
          }
          return null;
        }
        function Ep() {
          if (null !== Yl) {
            var t = ve(Ql),
              e = Pl.transition,
              i = ge;
            try {
              if (((Pl.transition = null), (ge = 16 > t ? 16 : t), null === Yl))
                var r = !1;
              else {
                if (((t = Yl), (Yl = null), (Ql = 0), 0 !== (6 & Gl)))
                  throw Error(n(331));
                var a = Gl;
                for (Gl |= 4, Jo = t.current; null !== Jo; ) {
                  var s = Jo,
                    o = s.child;
                  if (0 !== (16 & Jo.flags)) {
                    var l = s.deletions;
                    if (null !== l) {
                      for (var p = 0; p < l.length; p++) {
                        var h = l[p];
                        for (Jo = h; null !== Jo; ) {
                          var c = Jo;
                          switch (c.tag) {
                            case 0:
                            case 11:
                            case 15:
                              il(8, c, s);
                          }
                          var u = c.child;
                          if (null !== u) (u.return = c), (Jo = u);
                          else
                            for (; null !== Jo; ) {
                              var f = (c = Jo).sibling,
                                m = c.return;
                              if ((nl(c), c === h)) {
                                Jo = null;
                                break;
                              }
                              if (null !== f) {
                                (f.return = m), (Jo = f);
                                break;
                              }
                              Jo = m;
                            }
                        }
                      }
                      var d = s.alternate;
                      if (null !== d) {
                        var x = d.child;
                        if (null !== x) {
                          d.child = null;
                          do {
                            var y = x.sibling;
                            (x.sibling = null), (x = y);
                          } while (null !== x);
                        }
                      }
                      Jo = s;
                    }
                  }
                  if (0 !== (2064 & s.subtreeFlags) && null !== o)
                    (o.return = s), (Jo = o);
                  else
                    t: for (; null !== Jo; ) {
                      if (0 !== (2048 & (s = Jo).flags))
                        switch (s.tag) {
                          case 0:
                          case 11:
                          case 15:
                            il(9, s, s.return);
                        }
                      var k = s.sibling;
                      if (null !== k) {
                        (k.return = s.return), (Jo = k);
                        break t;
                      }
                      Jo = s.return;
                    }
                }
                var g = t.current;
                for (Jo = g; null !== Jo; ) {
                  var v = (o = Jo).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== v)
                    (v.return = o), (Jo = v);
                  else
                    t: for (o = g; null !== Jo; ) {
                      if (0 !== (2048 & (l = Jo).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(9, l);
                          }
                        } catch (E) {
                          Sp(l, l.return, E);
                        }
                      if (l === o) {
                        Jo = null;
                        break t;
                      }
                      var _ = l.sibling;
                      if (null !== _) {
                        (_.return = l.return), (Jo = _);
                        break t;
                      }
                      Jo = l.return;
                    }
                }
                if (
                  ((Gl = a),
                  Oa(),
                  ne && 'function' === typeof ne.onPostCommitFiberRoot)
                )
                  try {
                    ne.onPostCommitFiberRoot(ae, t);
                  } catch (E) {}
                r = !0;
              }
              return r;
            } finally {
              (ge = i), (Pl.transition = e);
            }
          }
          return !1;
        }
        function bp(t, e, i) {
          (t = Cn(t, (e = fo(0, (e = po(i, e)), 1)), 1)),
            (e = tp()),
            null !== t && (ye(t, 1, e), rp(t, e));
        }
        function Sp(t, e, i) {
          if (3 === t.tag) bp(t, t, i);
          else
            for (; null !== e; ) {
              if (3 === e.tag) {
                bp(e, t, i);
                break;
              }
              if (1 === e.tag) {
                var r = e.stateNode;
                if (
                  'function' === typeof e.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch &&
                    (null === $l || !$l.has(r)))
                ) {
                  (e = Cn(e, (t = mo(e, (t = po(i, t)), 1)), 1)),
                    (t = tp()),
                    null !== e && (ye(e, 1, t), rp(e, t));
                  break;
                }
              }
              e = e.return;
            }
        }
        function Ap(t, e, i) {
          var r = t.pingCache;
          null !== r && r.delete(e),
            (e = tp()),
            (t.pingedLanes |= t.suspendedLanes & i),
            Bl === t &&
              (Fl & i) === i &&
              (4 === Cl ||
              (3 === Cl && (130023424 & Fl) === Fl && 500 > Kt() - Ol)
                ? up(t, 0)
                : (Ll |= i)),
            rp(t, e);
        }
        function Dp(t, e) {
          0 === e &&
            (0 === (1 & t.mode)
              ? (e = 1)
              : ((e = he), 0 === (130023424 & (he <<= 1)) && (he = 4194304)));
          var i = tp();
          null !== (t = Bn(t, e)) && (ye(t, e, i), rp(t, i));
        }
        function Pp(t) {
          var e = t.memoizedState,
            i = 0;
          null !== e && (i = e.retryLane), Dp(t, i);
        }
        function Gp(t, e) {
          var i = 0;
          switch (t.tag) {
            case 13:
              var r = t.stateNode,
                a = t.memoizedState;
              null !== a && (i = a.retryLane);
              break;
            case 19:
              r = t.stateNode;
              break;
            default:
              throw Error(n(314));
          }
          null !== r && r.delete(e), Dp(t, i);
        }
        function Bp(t, e) {
          return Ut(t, e);
        }
        function Vp(t, e, i, r) {
          (this.tag = t),
            (this.key = i),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = e),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Fp(t, e, i, r) {
          return new Vp(t, e, i, r);
        }
        function Tp(t) {
          return !(!(t = t.prototype) || !t.isReactComponent);
        }
        function wp(t, e) {
          var i = t.alternate;
          return (
            null === i
              ? (((i = Fp(t.tag, e, t.key, t.mode)).elementType =
                  t.elementType),
                (i.type = t.type),
                (i.stateNode = t.stateNode),
                (i.alternate = t),
                (t.alternate = i))
              : ((i.pendingProps = e),
                (i.type = t.type),
                (i.flags = 0),
                (i.subtreeFlags = 0),
                (i.deletions = null)),
            (i.flags = 14680064 & t.flags),
            (i.childLanes = t.childLanes),
            (i.lanes = t.lanes),
            (i.child = t.child),
            (i.memoizedProps = t.memoizedProps),
            (i.memoizedState = t.memoizedState),
            (i.updateQueue = t.updateQueue),
            (e = t.dependencies),
            (i.dependencies =
              null === e
                ? null
                : { lanes: e.lanes, firstContext: e.firstContext }),
            (i.sibling = t.sibling),
            (i.index = t.index),
            (i.ref = t.ref),
            i
          );
        }
        function Cp(t, e, i, r, a, s) {
          var o = 2;
          if (((r = t), 'function' === typeof t)) Tp(t) && (o = 1);
          else if ('string' === typeof t) o = 5;
          else
            t: switch (t) {
              case b:
                return Mp(i.children, a, s, e);
              case S:
                (o = 8), (a |= 8);
                break;
              case A:
                return (
                  ((t = Fp(12, i, e, 2 | a)).elementType = A), (t.lanes = s), t
                );
              case B:
                return (
                  ((t = Fp(13, i, e, a)).elementType = B), (t.lanes = s), t
                );
              case V:
                return (
                  ((t = Fp(19, i, e, a)).elementType = V), (t.lanes = s), t
                );
              case w:
                return Ip(i, a, s, e);
              default:
                if ('object' === typeof t && null !== t)
                  switch (t.$$typeof) {
                    case D:
                      o = 10;
                      break t;
                    case P:
                      o = 9;
                      break t;
                    case G:
                      o = 11;
                      break t;
                    case F:
                      o = 14;
                      break t;
                    case T:
                      (o = 16), (r = null);
                      break t;
                  }
                throw Error(n(130, null == t ? t : typeof t, ''));
            }
          return (
            ((e = Fp(o, i, e, a)).elementType = t),
            (e.type = r),
            (e.lanes = s),
            e
          );
        }
        function Mp(t, e, i, r) {
          return ((t = Fp(7, t, r, e)).lanes = i), t;
        }
        function Ip(t, e, i, r) {
          return (
            ((t = Fp(22, t, r, e)).elementType = w),
            (t.lanes = i),
            (t.stateNode = { isHidden: !1 }),
            t
          );
        }
        function Rp(t, e, i) {
          return ((t = Fp(6, t, null, e)).lanes = i), t;
        }
        function Lp(t, e, i) {
          return (
            ((e = Fp(
              4,
              null !== t.children ? t.children : [],
              t.key,
              e
            )).lanes = i),
            (e.stateNode = {
              containerInfo: t.containerInfo,
              pendingChildren: null,
              implementation: t.implementation,
            }),
            e
          );
        }
        function zp(t, e, i, r, a) {
          (this.tag = e),
            (this.containerInfo = t),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = xe(0)),
            (this.expirationTimes = xe(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = xe(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Np(t, e, i, r, a, n, s, o, l) {
          return (
            (t = new zp(t, e, i, o, l)),
            1 === e ? ((e = 1), !0 === n && (e |= 8)) : (e = 0),
            (n = Fp(3, null, null, e)),
            (t.current = n),
            (n.stateNode = t),
            (n.memoizedState = {
              element: r,
              isDehydrated: i,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Fn(n),
            t
          );
        }
        function Op(t, e, i) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: E,
            key: null == r ? null : '' + r,
            children: t,
            containerInfo: e,
            implementation: i,
          };
        }
        function Hp(t) {
          if (!t) return Da;
          t: {
            if (Ht((t = t._reactInternals)) !== t || 1 !== t.tag)
              throw Error(n(170));
            var e = t;
            do {
              switch (e.tag) {
                case 3:
                  e = e.stateNode.context;
                  break t;
                case 1:
                  if (Fa(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              e = e.return;
            } while (null !== e);
            throw Error(n(171));
          }
          if (1 === t.tag) {
            var i = t.type;
            if (Fa(i)) return Ca(t, i, e);
          }
          return e;
        }
        function jp(t, e, i, r, a, n, s, o, l) {
          return (
            ((t = Np(i, r, !0, t, 0, n, 0, o, l)).context = Hp(null)),
            (i = t.current),
            ((n = wn((r = tp()), (a = ep(i)))).callback =
              void 0 !== e && null !== e ? e : null),
            Cn(i, n, a),
            (t.current.lanes = a),
            ye(t, a, r),
            rp(t, r),
            t
          );
        }
        function Wp(t, e, i, r) {
          var a = e.current,
            n = tp(),
            s = ep(a);
          return (
            (i = Hp(i)),
            null === e.context ? (e.context = i) : (e.pendingContext = i),
            ((e = wn(n, s)).payload = { element: t }),
            null !== (r = void 0 === r ? null : r) && (e.callback = r),
            null !== (t = Cn(a, e, s)) && (ip(t, a, s, n), Mn(t, a, s)),
            s
          );
        }
        function qp(t) {
          return (t = t.current).child
            ? (t.child.tag, t.child.stateNode)
            : null;
        }
        function $p(t, e) {
          if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
            var i = t.retryLane;
            t.retryLane = 0 !== i && i < e ? i : e;
          }
        }
        function Up(t, e) {
          $p(t, e), (t = t.alternate) && $p(t, e);
        }
        bl = function (t, e, i) {
          if (null !== t)
            if (t.memoizedProps !== e.pendingProps || Ga.current) vo = !0;
            else {
              if (0 === (t.lanes & i) && 0 === (128 & e.flags))
                return (
                  (vo = !1),
                  (function (t, e, i) {
                    switch (e.tag) {
                      case 3:
                        Vo(e), fn();
                        break;
                      case 5:
                        ns(e);
                        break;
                      case 1:
                        Fa(e.type) && Ma(e);
                        break;
                      case 4:
                        rs(e, e.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = e.type._context,
                          a = e.memoizedProps.value;
                        Aa(yn, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = e.memoizedState))
                          return null !== r.dehydrated
                            ? (Aa(os, 1 & os.current), (e.flags |= 128), null)
                            : 0 !== (i & e.child.childLanes)
                              ? Ro(t, e, i)
                              : (Aa(os, 1 & os.current),
                                null !== (t = Wo(t, e, i)) ? t.sibling : null);
                        Aa(os, 1 & os.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (i & e.childLanes)),
                          0 !== (128 & t.flags))
                        ) {
                          if (r) return Ho(t, e, i);
                          e.flags |= 128;
                        }
                        if (
                          (null !== (a = e.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Aa(os, os.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (e.lanes = 0), Ao(t, e, i);
                    }
                    return Wo(t, e, i);
                  })(t, e, i)
                );
              vo = 0 !== (131072 & t.flags);
            }
          else (vo = !1), an && 0 !== (1048576 & e.flags) && Ja(e, qa, e.index);
          switch (((e.lanes = 0), e.tag)) {
            case 2:
              var r = e.type;
              jo(t, e), (t = e.pendingProps);
              var a = Va(e, Pa.current);
              Sn(e, i), (a = bs(null, e, r, t, a, i));
              var s = Ss();
              return (
                (e.flags |= 1),
                'object' === typeof a &&
                null !== a &&
                'function' === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((e.tag = 1),
                    (e.memoizedState = null),
                    (e.updateQueue = null),
                    Fa(r) ? ((s = !0), Ma(e)) : (s = !1),
                    (e.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Fn(e),
                    (a.updater = On),
                    (e.stateNode = a),
                    (a._reactInternals = e),
                    qn(e, r, t, i),
                    (e = Bo(null, e, r, !0, s, i)))
                  : ((e.tag = 0),
                    an && s && Za(e),
                    _o(null, e, a, i),
                    (e = e.child)),
                e
              );
            case 16:
              r = e.elementType;
              t: {
                switch (
                  (jo(t, e),
                  (t = e.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (e.type = r),
                  (a = e.tag =
                    (function (t) {
                      if ('function' === typeof t) return Tp(t) ? 1 : 0;
                      if (void 0 !== t && null !== t) {
                        if ((t = t.$$typeof) === G) return 11;
                        if (t === F) return 14;
                      }
                      return 2;
                    })(r)),
                  (t = xn(r, t)),
                  a)
                ) {
                  case 0:
                    e = Po(null, e, r, t, i);
                    break t;
                  case 1:
                    e = Go(null, e, r, t, i);
                    break t;
                  case 11:
                    e = Eo(null, e, r, t, i);
                    break t;
                  case 14:
                    e = bo(null, e, r, xn(r.type, t), i);
                    break t;
                }
                throw Error(n(306, r, ''));
              }
              return e;
            case 0:
              return (
                (r = e.type),
                (a = e.pendingProps),
                Po(t, e, r, (a = e.elementType === r ? a : xn(r, a)), i)
              );
            case 1:
              return (
                (r = e.type),
                (a = e.pendingProps),
                Go(t, e, r, (a = e.elementType === r ? a : xn(r, a)), i)
              );
            case 3:
              t: {
                if ((Vo(e), null === t)) throw Error(n(387));
                (r = e.pendingProps),
                  (a = (s = e.memoizedState).element),
                  Tn(t, e),
                  Rn(e, r, null, i);
                var o = e.memoizedState;
                if (((r = o.element), s.isDehydrated)) {
                  if (
                    ((s = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (e.updateQueue.baseState = s),
                    (e.memoizedState = s),
                    256 & e.flags)
                  ) {
                    e = Fo(t, e, r, i, (a = po(Error(n(423)), e)));
                    break t;
                  }
                  if (r !== a) {
                    e = Fo(t, e, r, i, (a = po(Error(n(424)), e)));
                    break t;
                  }
                  for (
                    rn = la(e.stateNode.containerInfo.firstChild),
                      en = e,
                      an = !0,
                      nn = null,
                      i = Kn(e, null, r, i),
                      e.child = i;
                    i;

                  )
                    (i.flags = (-3 & i.flags) | 4096), (i = i.sibling);
                } else {
                  if ((fn(), r === a)) {
                    e = Wo(t, e, i);
                    break t;
                  }
                  _o(t, e, r, i);
                }
                e = e.child;
              }
              return e;
            case 5:
              return (
                ns(e),
                null === t && pn(e),
                (r = e.type),
                (a = e.pendingProps),
                (s = null !== t ? t.memoizedProps : null),
                (o = a.children),
                ea(r, a)
                  ? (o = null)
                  : null !== s && ea(r, s) && (e.flags |= 32),
                Do(t, e),
                _o(t, e, o, i),
                e.child
              );
            case 6:
              return null === t && pn(e), null;
            case 13:
              return Ro(t, e, i);
            case 4:
              return (
                rs(e, e.stateNode.containerInfo),
                (r = e.pendingProps),
                null === t ? (e.child = Xn(e, null, r, i)) : _o(t, e, r, i),
                e.child
              );
            case 11:
              return (
                (r = e.type),
                (a = e.pendingProps),
                Eo(t, e, r, (a = e.elementType === r ? a : xn(r, a)), i)
              );
            case 7:
              return _o(t, e, e.pendingProps, i), e.child;
            case 8:
            case 12:
              return _o(t, e, e.pendingProps.children, i), e.child;
            case 10:
              t: {
                if (
                  ((r = e.type._context),
                  (a = e.pendingProps),
                  (s = e.memoizedProps),
                  (o = a.value),
                  Aa(yn, r._currentValue),
                  (r._currentValue = o),
                  null !== s)
                )
                  if (sr(s.value, o)) {
                    if (s.children === a.children && !Ga.current) {
                      e = Wo(t, e, i);
                      break t;
                    }
                  } else
                    for (
                      null !== (s = e.child) && (s.return = e);
                      null !== s;

                    ) {
                      var l = s.dependencies;
                      if (null !== l) {
                        o = s.child;
                        for (var p = l.firstContext; null !== p; ) {
                          if (p.context === r) {
                            if (1 === s.tag) {
                              (p = wn(-1, i & -i)).tag = 2;
                              var h = s.updateQueue;
                              if (null !== h) {
                                var c = (h = h.shared).pending;
                                null === c
                                  ? (p.next = p)
                                  : ((p.next = c.next), (c.next = p)),
                                  (h.pending = p);
                              }
                            }
                            (s.lanes |= i),
                              null !== (p = s.alternate) && (p.lanes |= i),
                              bn(s.return, i, e),
                              (l.lanes |= i);
                            break;
                          }
                          p = p.next;
                        }
                      } else if (10 === s.tag)
                        o = s.type === e.type ? null : s.child;
                      else if (18 === s.tag) {
                        if (null === (o = s.return)) throw Error(n(341));
                        (o.lanes |= i),
                          null !== (l = o.alternate) && (l.lanes |= i),
                          bn(o, i, e),
                          (o = s.sibling);
                      } else o = s.child;
                      if (null !== o) o.return = s;
                      else
                        for (o = s; null !== o; ) {
                          if (o === e) {
                            o = null;
                            break;
                          }
                          if (null !== (s = o.sibling)) {
                            (s.return = o.return), (o = s);
                            break;
                          }
                          o = o.return;
                        }
                      s = o;
                    }
                _o(t, e, a.children, i), (e = e.child);
              }
              return e;
            case 9:
              return (
                (a = e.type),
                (r = e.pendingProps.children),
                Sn(e, i),
                (r = r((a = An(a)))),
                (e.flags |= 1),
                _o(t, e, r, i),
                e.child
              );
            case 14:
              return (
                (a = xn((r = e.type), e.pendingProps)),
                bo(t, e, r, (a = xn(r.type, a)), i)
              );
            case 15:
              return So(t, e, e.type, e.pendingProps, i);
            case 17:
              return (
                (r = e.type),
                (a = e.pendingProps),
                (a = e.elementType === r ? a : xn(r, a)),
                jo(t, e),
                (e.tag = 1),
                Fa(r) ? ((t = !0), Ma(e)) : (t = !1),
                Sn(e, i),
                jn(e, r, a),
                qn(e, r, a, i),
                Bo(null, e, r, !0, t, i)
              );
            case 19:
              return Ho(t, e, i);
            case 22:
              return Ao(t, e, i);
          }
          throw Error(n(156, e.tag));
        };
        var Yp =
          'function' === typeof reportError
            ? reportError
            : function (t) {
                console.error(t);
              };
        function Qp(t) {
          this._internalRoot = t;
        }
        function Xp(t) {
          this._internalRoot = t;
        }
        function Kp(t) {
          return !(
            !t ||
            (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
          );
        }
        function Jp(t) {
          return !(
            !t ||
            (1 !== t.nodeType &&
              9 !== t.nodeType &&
              11 !== t.nodeType &&
              (8 !== t.nodeType ||
                ' react-mount-point-unstable ' !== t.nodeValue))
          );
        }
        function Zp() {}
        function th(t, e, i, r, a) {
          var n = i._reactRootContainer;
          if (n) {
            var s = n;
            if ('function' === typeof a) {
              var o = a;
              a = function () {
                var t = qp(s);
                o.call(t);
              };
            }
            Wp(e, s, t, a);
          } else
            s = (function (t, e, i, r, a) {
              if (a) {
                if ('function' === typeof r) {
                  var n = r;
                  r = function () {
                    var t = qp(s);
                    n.call(t);
                  };
                }
                var s = jp(e, r, t, 0, null, !1, 0, '', Zp);
                return (
                  (t._reactRootContainer = s),
                  (t[fa] = s.current),
                  Or(8 === t.nodeType ? t.parentNode : t),
                  hp(),
                  s
                );
              }
              for (; (a = t.lastChild); ) t.removeChild(a);
              if ('function' === typeof r) {
                var o = r;
                r = function () {
                  var t = qp(l);
                  o.call(t);
                };
              }
              var l = Np(t, 0, !1, null, 0, !1, 0, '', Zp);
              return (
                (t._reactRootContainer = l),
                (t[fa] = l.current),
                Or(8 === t.nodeType ? t.parentNode : t),
                hp(function () {
                  Wp(e, l, i, r);
                }),
                l
              );
            })(i, e, t, a, r);
          return qp(s);
        }
        (Xp.prototype.render = Qp.prototype.render =
          function (t) {
            var e = this._internalRoot;
            if (null === e) throw Error(n(409));
            Wp(t, e, null, null);
          }),
          (Xp.prototype.unmount = Qp.prototype.unmount =
            function () {
              var t = this._internalRoot;
              if (null !== t) {
                this._internalRoot = null;
                var e = t.containerInfo;
                hp(function () {
                  Wp(null, t, null, null);
                }),
                  (e[fa] = null);
              }
            }),
          (Xp.prototype.unstable_scheduleHydration = function (t) {
            if (t) {
              var e = Se();
              t = { blockedOn: null, target: t, priority: e };
              for (
                var i = 0;
                i < we.length && 0 !== e && e < we[i].priority;
                i++
              );
              we.splice(i, 0, t), 0 === i && Re(t);
            }
          }),
          (_e = function (t) {
            switch (t.tag) {
              case 3:
                var e = t.stateNode;
                if (e.current.memoizedState.isDehydrated) {
                  var i = ce(e.pendingLanes);
                  0 !== i &&
                    (ke(e, 1 | i),
                    rp(e, Kt()),
                    0 === (6 & Gl) && ((Hl = Kt() + 500), Oa()));
                }
                break;
              case 13:
                hp(function () {
                  var e = Bn(t, 1);
                  if (null !== e) {
                    var i = tp();
                    ip(e, t, 1, i);
                  }
                }),
                  Up(t, 1);
            }
          }),
          (Ee = function (t) {
            if (13 === t.tag) {
              var e = Bn(t, 134217728);
              if (null !== e) ip(e, t, 134217728, tp());
              Up(t, 134217728);
            }
          }),
          (be = function (t) {
            if (13 === t.tag) {
              var e = ep(t),
                i = Bn(t, e);
              if (null !== i) ip(i, t, e, tp());
              Up(t, e);
            }
          }),
          (Se = function () {
            return ge;
          }),
          (Ae = function (t, e) {
            var i = ge;
            try {
              return (ge = t), e();
            } finally {
              ge = i;
            }
          }),
          (Et = function (t, e, i) {
            switch (e) {
              case 'input':
                if ((J(t, i), (e = i.name), 'radio' === i.type && null != e)) {
                  for (i = t; i.parentNode; ) i = i.parentNode;
                  for (
                    i = i.querySelectorAll(
                      'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
                    ),
                      e = 0;
                    e < i.length;
                    e++
                  ) {
                    var r = i[e];
                    if (r !== t && r.form === t.form) {
                      var a = va(r);
                      if (!a) throw Error(n(90));
                      U(r), J(r, a);
                    }
                  }
                }
                break;
              case 'textarea':
                nt(t, i);
                break;
              case 'select':
                null != (e = i.value) && it(t, !!i.multiple, e, !1);
            }
          }),
          (Gt = pp),
          (Bt = hp);
        var eh = {
            usingClientEntryPoint: !1,
            Events: [ka, ga, va, Dt, Pt, pp],
          },
          ih = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          rh = {
            bundleType: ih.bundleType,
            version: ih.version,
            rendererPackageName: ih.rendererPackageName,
            rendererConfig: ih.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: v.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (t) {
              return null === (t = qt(t)) ? null : t.stateNode;
            },
            findFiberByHostInstance:
              ih.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ah = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ah.isDisabled && ah.supportsFiber)
            try {
              (ae = ah.inject(rh)), (ne = ah);
            } catch (ht) {}
        }
        (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eh),
          (e.createPortal = function (t, e) {
            var i =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Kp(e)) throw Error(n(200));
            return Op(t, e, null, i);
          }),
          (e.createRoot = function (t, e) {
            if (!Kp(t)) throw Error(n(299));
            var i = !1,
              r = '',
              a = Yp;
            return (
              null !== e &&
                void 0 !== e &&
                (!0 === e.unstable_strictMode && (i = !0),
                void 0 !== e.identifierPrefix && (r = e.identifierPrefix),
                void 0 !== e.onRecoverableError && (a = e.onRecoverableError)),
              (e = Np(t, 1, !1, null, 0, i, 0, r, a)),
              (t[fa] = e.current),
              Or(8 === t.nodeType ? t.parentNode : t),
              new Qp(e)
            );
          }),
          (e.findDOMNode = function (t) {
            if (null == t) return null;
            if (1 === t.nodeType) return t;
            var e = t._reactInternals;
            if (void 0 === e) {
              if ('function' === typeof t.render) throw Error(n(188));
              throw ((t = Object.keys(t).join(',')), Error(n(268, t)));
            }
            return (t = null === (t = qt(e)) ? null : t.stateNode);
          }),
          (e.flushSync = function (t) {
            return hp(t);
          }),
          (e.hydrate = function (t, e, i) {
            if (!Jp(e)) throw Error(n(200));
            return th(null, t, e, !0, i);
          }),
          (e.hydrateRoot = function (t, e, i) {
            if (!Kp(t)) throw Error(n(405));
            var r = (null != i && i.hydratedSources) || null,
              a = !1,
              s = '',
              o = Yp;
            if (
              (null !== i &&
                void 0 !== i &&
                (!0 === i.unstable_strictMode && (a = !0),
                void 0 !== i.identifierPrefix && (s = i.identifierPrefix),
                void 0 !== i.onRecoverableError && (o = i.onRecoverableError)),
              (e = jp(e, null, t, 1, null != i ? i : null, a, 0, s, o)),
              (t[fa] = e.current),
              Or(t),
              r)
            )
              for (t = 0; t < r.length; t++)
                (a = (a = (i = r[t])._getVersion)(i._source)),
                  null == e.mutableSourceEagerHydrationData
                    ? (e.mutableSourceEagerHydrationData = [i, a])
                    : e.mutableSourceEagerHydrationData.push(i, a);
            return new Xp(e);
          }),
          (e.render = function (t, e, i) {
            if (!Jp(e)) throw Error(n(200));
            return th(null, t, e, !1, i);
          }),
          (e.unmountComponentAtNode = function (t) {
            if (!Jp(t)) throw Error(n(40));
            return (
              !!t._reactRootContainer &&
              (hp(function () {
                th(null, null, t, !1, function () {
                  (t._reactRootContainer = null), (t[fa] = null);
                });
              }),
              !0)
            );
          }),
          (e.unstable_batchedUpdates = pp),
          (e.unstable_renderSubtreeIntoContainer = function (t, e, i, r) {
            if (!Jp(i)) throw Error(n(200));
            if (null == t || void 0 === t._reactInternals) throw Error(n(38));
            return th(t, e, i, !1, r);
          }),
          (e.version = '18.2.0-next-9e3b772b8-20220608');
      },
      164: function (t, e, i) {
        'use strict';
        !(function t() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
            } catch (e) {
              console.error(e);
            }
        })(),
          (t.exports = i(463));
      },
      374: function (t, e, i) {
        'use strict';
        var r = i(791),
          a = Symbol.for('react.element'),
          n = Symbol.for('react.fragment'),
          s = Object.prototype.hasOwnProperty,
          o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function p(t, e, i) {
          var r,
            n = {},
            p = null,
            h = null;
          for (r in (void 0 !== i && (p = '' + i),
          void 0 !== e.key && (p = '' + e.key),
          void 0 !== e.ref && (h = e.ref),
          e))
            s.call(e, r) && !l.hasOwnProperty(r) && (n[r] = e[r]);
          if (t && t.defaultProps)
            for (r in (e = t.defaultProps)) void 0 === n[r] && (n[r] = e[r]);
          return {
            $$typeof: a,
            type: t,
            key: p,
            ref: h,
            props: n,
            _owner: o.current,
          };
        }
        e.jsx = p;
      },
      117: function (t, e) {
        'use strict';
        var i = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          a = Symbol.for('react.fragment'),
          n = Symbol.for('react.strict_mode'),
          s = Symbol.for('react.profiler'),
          o = Symbol.for('react.provider'),
          l = Symbol.for('react.context'),
          p = Symbol.for('react.forward_ref'),
          h = Symbol.for('react.suspense'),
          c = Symbol.for('react.memo'),
          u = Symbol.for('react.lazy'),
          f = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          d = Object.assign,
          x = {};
        function y(t, e, i) {
          (this.props = t),
            (this.context = e),
            (this.refs = x),
            (this.updater = i || m);
        }
        function k() {}
        function g(t, e, i) {
          (this.props = t),
            (this.context = e),
            (this.refs = x),
            (this.updater = i || m);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (t, e) {
            if ('object' !== typeof t && 'function' !== typeof t && null != t)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            this.updater.enqueueSetState(this, t, e, 'setState');
          }),
          (y.prototype.forceUpdate = function (t) {
            this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
          }),
          (k.prototype = y.prototype);
        var v = (g.prototype = new k());
        (v.constructor = g), d(v, y.prototype), (v.isPureReactComponent = !0);
        var _ = Array.isArray,
          E = Object.prototype.hasOwnProperty,
          b = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function A(t, e, r) {
          var a,
            n = {},
            s = null,
            o = null;
          if (null != e)
            for (a in (void 0 !== e.ref && (o = e.ref),
            void 0 !== e.key && (s = '' + e.key),
            e))
              E.call(e, a) && !S.hasOwnProperty(a) && (n[a] = e[a]);
          var l = arguments.length - 2;
          if (1 === l) n.children = r;
          else if (1 < l) {
            for (var p = Array(l), h = 0; h < l; h++) p[h] = arguments[h + 2];
            n.children = p;
          }
          if (t && t.defaultProps)
            for (a in (l = t.defaultProps)) void 0 === n[a] && (n[a] = l[a]);
          return {
            $$typeof: i,
            type: t,
            key: s,
            ref: o,
            props: n,
            _owner: b.current,
          };
        }
        function D(t) {
          return 'object' === typeof t && null !== t && t.$$typeof === i;
        }
        var P = /\/+/g;
        function G(t, e) {
          return 'object' === typeof t && null !== t && null != t.key
            ? (function (t) {
                var e = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  t.replace(/[=:]/g, function (t) {
                    return e[t];
                  })
                );
              })('' + t.key)
            : e.toString(36);
        }
        function B(t, e, a, n, s) {
          var o = typeof t;
          ('undefined' !== o && 'boolean' !== o) || (t = null);
          var l = !1;
          if (null === t) l = !0;
          else
            switch (o) {
              case 'string':
              case 'number':
                l = !0;
                break;
              case 'object':
                switch (t.$$typeof) {
                  case i:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (s = s((l = t))),
              (t = '' === n ? '.' + G(l, 0) : n),
              _(s)
                ? ((a = ''),
                  null != t && (a = t.replace(P, '$&/') + '/'),
                  B(s, e, a, '', function (t) {
                    return t;
                  }))
                : null != s &&
                  (D(s) &&
                    (s = (function (t, e) {
                      return {
                        $$typeof: i,
                        type: t.type,
                        key: e,
                        ref: t.ref,
                        props: t.props,
                        _owner: t._owner,
                      };
                    })(
                      s,
                      a +
                        (!s.key || (l && l.key === s.key)
                          ? ''
                          : ('' + s.key).replace(P, '$&/') + '/') +
                        t
                    )),
                  e.push(s)),
              1
            );
          if (((l = 0), (n = '' === n ? '.' : n + ':'), _(t)))
            for (var p = 0; p < t.length; p++) {
              var h = n + G((o = t[p]), p);
              l += B(o, e, a, h, s);
            }
          else if (
            ((h = (function (t) {
              return null === t || 'object' !== typeof t
                ? null
                : 'function' === typeof (t = (f && t[f]) || t['@@iterator'])
                  ? t
                  : null;
            })(t)),
            'function' === typeof h)
          )
            for (t = h.call(t), p = 0; !(o = t.next()).done; )
              l += B((o = o.value), e, a, (h = n + G(o, p++)), s);
          else if ('object' === o)
            throw (
              ((e = String(t)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === e
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : e) +
                  '). If you meant to render a collection of children, use an array instead.'
              ))
            );
          return l;
        }
        function V(t, e, i) {
          if (null == t) return t;
          var r = [],
            a = 0;
          return (
            B(t, r, '', '', function (t) {
              return e.call(i, t, a++);
            }),
            r
          );
        }
        function F(t) {
          if (-1 === t._status) {
            var e = t._result;
            (e = e()).then(
              function (e) {
                (0 !== t._status && -1 !== t._status) ||
                  ((t._status = 1), (t._result = e));
              },
              function (e) {
                (0 !== t._status && -1 !== t._status) ||
                  ((t._status = 2), (t._result = e));
              }
            ),
              -1 === t._status && ((t._status = 0), (t._result = e));
          }
          if (1 === t._status) return t._result.default;
          throw t._result;
        }
        var T = { current: null },
          w = { transition: null },
          C = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: w,
            ReactCurrentOwner: b,
          };
        (e.Children = {
          map: V,
          forEach: function (t, e, i) {
            V(
              t,
              function () {
                e.apply(this, arguments);
              },
              i
            );
          },
          count: function (t) {
            var e = 0;
            return (
              V(t, function () {
                e++;
              }),
              e
            );
          },
          toArray: function (t) {
            return (
              V(t, function (t) {
                return t;
              }) || []
            );
          },
          only: function (t) {
            if (!D(t))
              throw Error(
                'React.Children.only expected to receive a single React element child.'
              );
            return t;
          },
        }),
          (e.Component = y),
          (e.Fragment = a),
          (e.Profiler = s),
          (e.PureComponent = g),
          (e.StrictMode = n),
          (e.Suspense = h),
          (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C),
          (e.cloneElement = function (t, e, r) {
            if (null === t || void 0 === t)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  t +
                  '.'
              );
            var a = d({}, t.props),
              n = t.key,
              s = t.ref,
              o = t._owner;
            if (null != e) {
              if (
                (void 0 !== e.ref && ((s = e.ref), (o = b.current)),
                void 0 !== e.key && (n = '' + e.key),
                t.type && t.type.defaultProps)
              )
                var l = t.type.defaultProps;
              for (p in e)
                E.call(e, p) &&
                  !S.hasOwnProperty(p) &&
                  (a[p] = void 0 === e[p] && void 0 !== l ? l[p] : e[p]);
            }
            var p = arguments.length - 2;
            if (1 === p) a.children = r;
            else if (1 < p) {
              l = Array(p);
              for (var h = 0; h < p; h++) l[h] = arguments[h + 2];
              a.children = l;
            }
            return {
              $$typeof: i,
              type: t.type,
              key: n,
              ref: s,
              props: a,
              _owner: o,
            };
          }),
          (e.createContext = function (t) {
            return (
              ((t = {
                $$typeof: l,
                _currentValue: t,
                _currentValue2: t,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: t }),
              (t.Consumer = t)
            );
          }),
          (e.createElement = A),
          (e.createFactory = function (t) {
            var e = A.bind(null, t);
            return (e.type = t), e;
          }),
          (e.createRef = function () {
            return { current: null };
          }),
          (e.forwardRef = function (t) {
            return { $$typeof: p, render: t };
          }),
          (e.isValidElement = D),
          (e.lazy = function (t) {
            return {
              $$typeof: u,
              _payload: { _status: -1, _result: t },
              _init: F,
            };
          }),
          (e.memo = function (t, e) {
            return { $$typeof: c, type: t, compare: void 0 === e ? null : e };
          }),
          (e.startTransition = function (t) {
            var e = w.transition;
            w.transition = {};
            try {
              t();
            } finally {
              w.transition = e;
            }
          }),
          (e.unstable_act = function () {
            throw Error(
              'act(...) is not supported in production builds of React.'
            );
          }),
          (e.useCallback = function (t, e) {
            return T.current.useCallback(t, e);
          }),
          (e.useContext = function (t) {
            return T.current.useContext(t);
          }),
          (e.useDebugValue = function () {}),
          (e.useDeferredValue = function (t) {
            return T.current.useDeferredValue(t);
          }),
          (e.useEffect = function (t, e) {
            return T.current.useEffect(t, e);
          }),
          (e.useId = function () {
            return T.current.useId();
          }),
          (e.useImperativeHandle = function (t, e, i) {
            return T.current.useImperativeHandle(t, e, i);
          }),
          (e.useInsertionEffect = function (t, e) {
            return T.current.useInsertionEffect(t, e);
          }),
          (e.useLayoutEffect = function (t, e) {
            return T.current.useLayoutEffect(t, e);
          }),
          (e.useMemo = function (t, e) {
            return T.current.useMemo(t, e);
          }),
          (e.useReducer = function (t, e, i) {
            return T.current.useReducer(t, e, i);
          }),
          (e.useRef = function (t) {
            return T.current.useRef(t);
          }),
          (e.useState = function (t) {
            return T.current.useState(t);
          }),
          (e.useSyncExternalStore = function (t, e, i) {
            return T.current.useSyncExternalStore(t, e, i);
          }),
          (e.useTransition = function () {
            return T.current.useTransition();
          }),
          (e.version = '18.2.0');
      },
      791: function (t, e, i) {
        'use strict';
        t.exports = i(117);
      },
      184: function (t, e, i) {
        'use strict';
        t.exports = i(374);
      },
      813: function (t, e) {
        'use strict';
        function i(t, e) {
          var i = t.length;
          t.push(e);
          t: for (; 0 < i; ) {
            var r = (i - 1) >>> 1,
              a = t[r];
            if (!(0 < n(a, e))) break t;
            (t[r] = e), (t[i] = a), (i = r);
          }
        }
        function r(t) {
          return 0 === t.length ? null : t[0];
        }
        function a(t) {
          if (0 === t.length) return null;
          var e = t[0],
            i = t.pop();
          if (i !== e) {
            t[0] = i;
            t: for (var r = 0, a = t.length, s = a >>> 1; r < s; ) {
              var o = 2 * (r + 1) - 1,
                l = t[o],
                p = o + 1,
                h = t[p];
              if (0 > n(l, i))
                p < a && 0 > n(h, l)
                  ? ((t[r] = h), (t[p] = i), (r = p))
                  : ((t[r] = l), (t[o] = i), (r = o));
              else {
                if (!(p < a && 0 > n(h, i))) break t;
                (t[r] = h), (t[p] = i), (r = p);
              }
            }
          }
          return e;
        }
        function n(t, e) {
          var i = t.sortIndex - e.sortIndex;
          return 0 !== i ? i : t.id - e.id;
        }
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var s = performance;
          e.unstable_now = function () {
            return s.now();
          };
        } else {
          var o = Date,
            l = o.now();
          e.unstable_now = function () {
            return o.now() - l;
          };
        }
        var p = [],
          h = [],
          c = 1,
          u = null,
          f = 3,
          m = !1,
          d = !1,
          x = !1,
          y = 'function' === typeof setTimeout ? setTimeout : null,
          k = 'function' === typeof clearTimeout ? clearTimeout : null,
          g = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function v(t) {
          for (var e = r(h); null !== e; ) {
            if (null === e.callback) a(h);
            else {
              if (!(e.startTime <= t)) break;
              a(h), (e.sortIndex = e.expirationTime), i(p, e);
            }
            e = r(h);
          }
        }
        function _(t) {
          if (((x = !1), v(t), !d))
            if (null !== r(p)) (d = !0), w(E);
            else {
              var e = r(h);
              null !== e && C(_, e.startTime - t);
            }
        }
        function E(t, i) {
          (d = !1), x && ((x = !1), k(D), (D = -1)), (m = !0);
          var n = f;
          try {
            for (
              v(i), u = r(p);
              null !== u && (!(u.expirationTime > i) || (t && !B()));

            ) {
              var s = u.callback;
              if ('function' === typeof s) {
                (u.callback = null), (f = u.priorityLevel);
                var o = s(u.expirationTime <= i);
                (i = e.unstable_now()),
                  'function' === typeof o
                    ? (u.callback = o)
                    : u === r(p) && a(p),
                  v(i);
              } else a(p);
              u = r(p);
            }
            if (null !== u) var l = !0;
            else {
              var c = r(h);
              null !== c && C(_, c.startTime - i), (l = !1);
            }
            return l;
          } finally {
            (u = null), (f = n), (m = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var b,
          S = !1,
          A = null,
          D = -1,
          P = 5,
          G = -1;
        function B() {
          return !(e.unstable_now() - G < P);
        }
        function V() {
          if (null !== A) {
            var t = e.unstable_now();
            G = t;
            var i = !0;
            try {
              i = A(!0, t);
            } finally {
              i ? b() : ((S = !1), (A = null));
            }
          } else S = !1;
        }
        if ('function' === typeof g)
          b = function () {
            g(V);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var F = new MessageChannel(),
            T = F.port2;
          (F.port1.onmessage = V),
            (b = function () {
              T.postMessage(null);
            });
        } else
          b = function () {
            y(V, 0);
          };
        function w(t) {
          (A = t), S || ((S = !0), b());
        }
        function C(t, i) {
          D = y(function () {
            t(e.unstable_now());
          }, i);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (t) {
            t.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            d || m || ((d = !0), w(E));
          }),
          (e.unstable_forceFrameRate = function (t) {
            0 > t || 125 < t
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (P = 0 < t ? Math.floor(1e3 / t) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return r(p);
          }),
          (e.unstable_next = function (t) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var e = 3;
                break;
              default:
                e = f;
            }
            var i = f;
            f = e;
            try {
              return t();
            } finally {
              f = i;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (t, e) {
            switch (t) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                t = 3;
            }
            var i = f;
            f = t;
            try {
              return e();
            } finally {
              f = i;
            }
          }),
          (e.unstable_scheduleCallback = function (t, a, n) {
            var s = e.unstable_now();
            switch (
              ('object' === typeof n && null !== n
                ? (n = 'number' === typeof (n = n.delay) && 0 < n ? s + n : s)
                : (n = s),
              t)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (t = {
                id: c++,
                callback: a,
                priorityLevel: t,
                startTime: n,
                expirationTime: (o = n + o),
                sortIndex: -1,
              }),
              n > s
                ? ((t.sortIndex = n),
                  i(h, t),
                  null === r(p) &&
                    t === r(h) &&
                    (x ? (k(D), (D = -1)) : (x = !0), C(_, n - s)))
                : ((t.sortIndex = o), i(p, t), d || m || ((d = !0), w(E))),
              t
            );
          }),
          (e.unstable_shouldYield = B),
          (e.unstable_wrapCallback = function (t) {
            var e = f;
            return function () {
              var i = f;
              f = e;
              try {
                return t.apply(this, arguments);
              } finally {
                f = i;
              }
            };
          });
      },
      296: function (t, e, i) {
        'use strict';
        t.exports = i(813);
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(t) {
    var e = __webpack_module_cache__[t];
    if (void 0 !== e) return e.exports;
    var i = (__webpack_module_cache__[t] = { exports: {} });
    return (
      __webpack_modules__[t].call(i.exports, i, i.exports, __webpack_require__),
      i.exports
    );
  }
  (__webpack_require__.amdO = {}),
    (__webpack_require__.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return __webpack_require__.d(e, { a: e }), e;
    }),
    (__webpack_require__.d = function (t, e) {
      for (var i in e)
        __webpack_require__.o(e, i) &&
          !__webpack_require__.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (__webpack_require__.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    });
  var __webpack_exports__ = {};
  !(function () {
    'use strict';
    var t = __webpack_require__(791),
      e = __webpack_require__(164);
    function i(t, e) {
      for (var i = 0; i < e.length; i++) {
        var r = e[i];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function r(t, e) {
      return (
        (r =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          }),
        r(t, e)
      );
    }
    function a(t) {
      return (
        (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        a(t)
      );
    }
    function n(t) {
      return (
        (n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              }),
        n(t)
      );
    }
    function s(t, e) {
      if (e && ('object' === n(e) || 'function' === typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          'Derived constructors may only return object or undefined'
        );
      return (function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      })(t);
    }
    function o(t) {
      var e = (function () {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var i,
          r = a(t);
        if (e) {
          var n = a(this).constructor;
          i = Reflect.construct(r, arguments, n);
        } else i = r.apply(this, arguments);
        return s(this, i);
      };
    }
    var l = __webpack_require__(625),
      p = __webpack_require__.n(l),
      h = JSON.parse(
      ),
      c = __webpack_require__(184),
      u = (function (e) {
        !(function (t, e) {
          if ('function' !== typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            e && r(t, e);
        })(u, e);
        var a,
          n,
          s,
          l = o(u);
        function u(t) {
          var e;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, u),
            ((e = l.call(this, t)).state = { animation: null, clicked: !1 }),
            e
          );
        }
        return (
          (a = u),
          (n = [
            {
              key: 'componentDidMount',
              value: function () {
                var t = p().loadAnimation({
                  container: document.querySelector('#animation'),
                  renderer: 'svg',
                  loop: !1,
                  autoplay: !1,
                  animationData: h,
                  rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
                });
                this.setState({ animation: t });
              },
            },
            {
              key: 'playToClick',
              value: function () {
                this.state.animation.setDirection(1),
                  this.state.animation.playSegments([0, 25]);
              },
            },
            {
              key: 'playToStart',
              value: function () {
                this.state.clicked
                  ? (this.setState({ clicked: !1 }),
                    this.state.animation.setDirection(1),
                    this.state.animation.playSegments([85, 120]))
                  : (this.state.animation.setDirection(-1),
                    this.state.animation.playSegments([25, 0]));
              },
            },
            {
              key: 'playFromClick',
              value: function () {
                this.state.clicked ||
                  (this.state.animation.setDirection(1),
                  this.state.animation.playSegments([25, 85]),
                  this.setState({ clicked: !0 }));
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  i = this.state.clicked
                    ? 'animation-button graphql'
                    : 'animation-button';
                return (0, c.jsx)(t.Fragment, {
                  children: (0, c.jsx)('div', {
                    id: 'animation',
                    children: (0, c.jsx)('div', {
                      className: 'animation-button-container',
                      children: (0, c.jsx)('a', {
                        href: '/docs',
                        id: 'button',
                        target: '_parent',
                        className: i,
                        onMouseEnter: function () {
                          e.playToClick();
                        },
                        onMouseLeave: function () {
                          e.playToStart();
                        },
                        onClick: function (t) {
                          e.state.clicked ||
                            (t.preventDefault(), e.playFromClick());
                        },
                        children: this.state.clicked
                          ? 'See how it works!'
                          : 'Switch to REST',
                      }),
                    }),
                  }),
                });
              },
            },
          ]) && i(a.prototype, n),
          s && i(a, s),
          Object.defineProperty(a, 'prototype', { writable: !1 }),
          u
        );
      })(t.Component);
    e.render((0, c.jsx)(u, {}), document.getElementById('root'));
  })();
})();
//# sourceMappingURL=main.9993eb07.js.map