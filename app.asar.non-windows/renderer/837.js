/*! For license information please see 837.js.LICENSE.txt */
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [837, 716],
  {
    90255: (e) => {
      window,
        (e.exports = (function (e) {
          var t = {};
          function n(i) {
            if (t[i]) return t[i].exports;
            var o = (t[i] = { i, l: !1, exports: {} });
            return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, i) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: i });
            }),
            (n.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "u", { value: !0 });
            }),
            (n.t = function (e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.u) return e;
              var i = Object.create(null);
              if (
                (n.r(i),
                Object.defineProperty(i, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    i,
                    o,
                    function (t) {
                      return e[t];
                    }.bind(null, o),
                  );
              return i;
            }),
            (n.n = function (e) {
              var t =
                e && e.u
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = "dist/"),
            n((n.s = 1))
          );
        })([
          function (e) {
            e.exports = JSON.parse('{"a":"1.7.1"}');
          },
          function (e, t, n) {
            "use strict";
            function i(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t &&
                  (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, i);
              }
              return n;
            }
            function o(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? i(Object(n), !0).forEach(function (t) {
                      r(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : i(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        );
                      });
              }
              return e;
            }
            function r(e, t, n) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n),
                e
              );
            }
            function a(e, t, n, i, r = {}) {
              t instanceof HTMLCollection || t instanceof NodeList
                ? (t = Array.from(t))
                : Array.isArray(t) || (t = [t]),
                Array.isArray(n) || (n = [n]);
              for (const a of t)
                for (const t of n) a[e](t, i, o({ capture: !1 }, r));
              return Array.prototype.slice.call(arguments, 1);
            }
            n.r(t);
            const l = a.bind(null, "addEventListener"),
              d = a.bind(null, "removeEventListener"),
              c = (e, t = "px") => ("number" == typeof e ? e + t : e);
            function s(e, t, n) {
              const i = e && e.style;
              if (i)
                if ("object" == typeof t)
                  for (const [e, n] of Object.entries(t)) i[e] = c(n);
                else n && "string" == typeof t && (i[t] = c(n));
            }
            function u(e, t, n) {
              switch (n || "touch") {
                case "center": {
                  const n = t.left + t.width / 2,
                    i = t.top + t.height / 2;
                  return (
                    n >= e.left && n <= e.right && i >= e.top && i <= e.bottom
                  );
                }
                case "cover":
                  return (
                    t.left >= e.left &&
                    t.top >= e.top &&
                    t.right <= e.right &&
                    t.bottom <= e.bottom
                  );
                case "touch":
                  return (
                    e.right >= t.left &&
                    e.left <= t.right &&
                    e.bottom >= t.top &&
                    e.top <= t.bottom
                  );
                default:
                  throw new Error("Unkown intersection mode: ".concat(n));
              }
            }
            function p(e, t = document) {
              Array.isArray(e) || (e = [e]);
              const n = [];
              for (let i = 0, o = e.length; i < o; i++) {
                const o = e[i];
                "string" == typeof o
                  ? n.push(...t.querySelectorAll(o))
                  : o instanceof t.defaultView.HTMLElement && n.push(o);
              }
              return n;
            }
            function g(e) {
              let t = e.path || (e.composedPath && e.composedPath());
              if (t && t.length > 0) return t;
              let n = e.target;
              for (t = [n]; (n = n.parentElement); ) t.push(n);
              return t.push(document, window), t;
            }
            function h(e, t) {
              const n = e.indexOf(t);
              ~n && e.splice(n, 1);
            }
            function v(e) {
              const t = (e.touches && e.touches[0]) || e;
              return { tap: t, x: t.clientX, y: t.clientY, target: t.target };
            }
            var f = n(0);
            const { abs: m, max: b, min: I, round: y, ceil: T } = Math,
              x = (e) => e.preventDefault(),
              k =
                void 0 === window.DOMRect ? window.ClientRect : window.DOMRect;
            function w(e = {}) {
              const t = {
                options: Object.assign(
                  {
                    class: "selection-area",
                    frame: document,
                    mode: "touch",
                    tapMode: "native",
                    startThreshold: 10,
                    singleClick: !0,
                    disableTouch: !1,
                    selectables: [],
                    scrollSpeedDivider: 10,
                    manualScrollSpeed: 750,
                    startareas: ["html"],
                    boundaries: ["html"],
                    selectionAreaContainer: "body",
                  },
                  e,
                ),
                v: [],
                h: [],
                _: [],
                g: { added: [], removed: [] },
                j: { beforestart: [], start: [], move: [], stop: [] },
                O: null,
                S: null,
                T: null,
                A: !0,
                L: { x: null, y: null },
                M() {
                  const { frame: e } = t.options;
                  (t.O = e.createElement("div")),
                    (t.T = e.createElement("div")),
                    t.T.appendChild(t.O),
                    t.O.classList.add(t.options.class),
                    s(t.O, {
                      willChange: "top, left, bottom, right, width, height",
                      top: 0,
                      left: 0,
                      position: "fixed",
                    }),
                    s(t.T, {
                      overflow: "hidden",
                      position: "fixed",
                      transform: "translate3d(0, 0, 0)",
                      pointerEvents: "none",
                      zIndex: "1",
                    }),
                    t.enable();
                },
                k(e) {
                  const { frame: n } = t.options,
                    i = "on" === e ? l : d;
                  i(n, "mousedown", t.C),
                    t.options.disableTouch ||
                      i(n, "touchstart", t.C, { passive: !1 });
                },
                C(e, n = !1) {
                  const { x: i, y: o, target: r } = v(e),
                    { startareas: a, boundaries: d, frame: c } = t.options,
                    s = r.getBoundingClientRect(),
                    h = p(a, c);
                  (t.D = p(d, c)),
                    (t.F = t.D.find((e) => u(e.getBoundingClientRect(), s)));
                  const f = g(e);
                  t.F &&
                    h.find((e) => f.includes(e)) &&
                    t.D.find((e) => f.includes(e)) &&
                    (n || !1 !== t.H("beforestart", e)) &&
                    ((t.R = i),
                    (t.q = o),
                    (t.N = 0),
                    (t.U = 0),
                    (t.W = !0),
                    t.clearSelection(!1),
                    l(c, "selectstart", x),
                    l(c, ["touchmove", "mousemove"], t.I, { passive: !1 }),
                    l(c, ["mouseup", "touchcancel", "touchend"], t.J),
                    e.preventDefault());
                },
                P(e) {
                  const { tapMode: n } = t.options,
                    i = v(e);
                  let o = null;
                  if ("native" === n) o = i.target;
                  else {
                    if ("touch" !== n)
                      throw new Error("Unknown tapMode option: ".concat(n));
                    {
                      t.resolveSelectables();
                      const { x: e, y: n } = i;
                      o = t.h.find((t) => {
                        const {
                          right: i,
                          left: o,
                          top: r,
                          bottom: a,
                        } = t.getBoundingClientRect();
                        return e < i && e > o && n < a && n > r;
                      });
                    }
                  }
                  if (!o) return !1;
                  for (t.resolveSelectables(); !t.h.includes(o); ) {
                    if (!o.parentElement) return;
                    o = o.parentElement;
                  }
                  t.H("start", e);
                  const r = t.v;
                  if (e.shiftKey && r.length) {
                    const n = r[r.length - 1],
                      [i, a] =
                        4 & n.compareDocumentPosition(o) ? [o, n] : [n, o],
                      l = [
                        ...t.h.filter(
                          (e) =>
                            4 & e.compareDocumentPosition(i) &&
                            2 & e.compareDocumentPosition(a),
                        ),
                        o,
                      ];
                    t.select(l), t.H("move", e), t.H("stop", e);
                  } else
                    t.v.includes(o) ? t.removeFromSelection(o) : t.select(o),
                      t.H("move", e),
                      t.H("stop", e);
                },
                I(e) {
                  const { x: n, y: i } = v(e),
                    { startThreshold: o, frame: r } = t.options,
                    { R: a, q: c } = t,
                    u = typeof o;
                  if (
                    ("number" === u && m(n + i - (a + c)) >= o) ||
                    ("object" === u && m(n - a) >= o.x) ||
                    m(i - c) >= o.y
                  ) {
                    d(r, ["mousemove", "touchmove"], t.I, { passive: !1 }),
                      l(r, ["mousemove", "touchmove"], t.B, { passive: !1 }),
                      s(t.O, "display", "block"),
                      p(t.options.selectionAreaContainer, r)[0].appendChild(
                        t.T,
                      ),
                      t.resolveSelectables(),
                      (t.W = !1);
                    const n = (t.G = t.F.getBoundingClientRect());
                    y(t.F.scrollHeight) !== y(n.height) ||
                    y(t.F.scrollWidth) !== y(n.width)
                      ? ((t.A = !0),
                        l(window, "wheel", t.K, { passive: !1 }),
                        (t.h = t.h.filter((e) => t.F.contains(e))),
                        s(t.T, {
                          top: n.top,
                          left: n.left,
                          width: n.width,
                          height: n.height,
                        }),
                        s(t.O, { marginTop: -n.top, marginLeft: -n.left }))
                      : ((t.A = !1),
                        s(t.T, {
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }),
                        s(t.O, { marginTop: 0, marginLeft: 0 })),
                      t.B(e),
                      t.H("start", e);
                  }
                  e.preventDefault();
                },
                B(e) {
                  const { x: n, y: i } = v(e),
                    { scrollSpeedDivider: o } = t.options,
                    r = t.F;
                  let a = t.L;
                  (t.N = n),
                    (t.U = i),
                    !t.A || (null === a.y && null === a.x)
                      ? (t.V(), t.X(), t.H("move", e), t.Y())
                      : requestAnimationFrame(function n() {
                          a = t.L;
                          const i = null !== a.y,
                            l = null !== a.x;
                          if (!i && !l) return;
                          const { scrollTop: d, scrollLeft: c } = r;
                          i &&
                            ((r.scrollTop += T(a.y / o)),
                            (t.q -= r.scrollTop - d)),
                            l &&
                              ((r.scrollLeft += T(a.x / o)),
                              (t.R -= r.scrollLeft - c)),
                            t.V(),
                            t.X(),
                            t.H("move", e),
                            t.Y(),
                            requestAnimationFrame(n);
                        }),
                    e.preventDefault();
                },
                K(e) {
                  const { manualScrollSpeed: n } = t.options,
                    i = e.deltaY ? (e.deltaY > 0 ? 1 : -1) : 0,
                    o = e.deltaX ? (e.deltaX > 0 ? 1 : -1) : 0;
                  (t.L.y += i * n),
                    (t.L.x += o * n),
                    t.B(e),
                    e.preventDefault();
                },
                V() {
                  const {
                      scrollTop: e,
                      scrollHeight: n,
                      clientHeight: i,
                      scrollLeft: o,
                      scrollWidth: r,
                      clientWidth: a,
                    } = t.F,
                    l = t.G,
                    d = t.L;
                  let c = t.N,
                    s = t.U;
                  c < l.left
                    ? ((d.x = o ? -m(l.left - c) : null), (c = l.left))
                    : c > l.left + l.width
                      ? ((d.x = r - o - a ? m(l.left + l.width - c) : null),
                        (c = l.left + l.width))
                      : (d.x = null),
                    s < l.top
                      ? ((d.y = e ? -m(l.top - s) : null), (s = l.top))
                      : s > l.top + l.height
                        ? ((d.y = n - e - i ? m(l.top + l.height - s) : null),
                          (s = l.top + l.height))
                        : (d.y = null);
                  const u = I(t.R, c),
                    p = I(t.q, s),
                    g = b(t.R, c),
                    h = b(t.q, s);
                  t.S = new k(u, p, g - u, h - p);
                },
                Y() {
                  const { x: e, y: n, width: i, height: o } = t.S,
                    r = t.O.style;
                  (r.transform = "translate3d(" + e + "px," + n + "px, 0)"),
                    (r.width = i + "px"),
                    (r.height = o + "px");
                },
                J(e, n) {
                  const { frame: i, singleClick: o } = t.options;
                  d(i, ["mousemove", "touchmove"], t.I),
                    d(i, ["touchmove", "mousemove"], t.B),
                    d(i, ["mouseup", "touchcancel", "touchend"], t.J),
                    e && t.W && o
                      ? t.P(e)
                      : t.W || n || (t.X(), t.H("stop", e)),
                    (t.L = { x: null, y: null }),
                    d(window, "wheel", t.K),
                    t.T.remove(),
                    d(i, "selectstart", x),
                    s(t.O, "display", "none");
                },
                X() {
                  const { _: e, h: n, options: i, S: o } = t,
                    { mode: r } = i,
                    a = [],
                    l = [],
                    d = [];
                  for (let t = 0; t < n.length; t++) {
                    const i = n[t];
                    u(o, i.getBoundingClientRect(), r) &&
                      (e.includes(i) || l.push(i), a.push(i));
                  }
                  for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    a.includes(n) || d.push(n);
                  }
                  (t._ = a), (t.g = { added: l, removed: d });
                },
                H(e, n) {
                  let i = !0;
                  for (const o of t.j[e])
                    i =
                      o.call(t, {
                        inst: t,
                        area: t.O,
                        selected: t._.concat(t.v),
                        changed: t.g,
                        oe: n,
                      }) && i;
                  return i;
                },
                trigger(e, n = !0) {
                  t.C(e, n);
                },
                on: (e, n) => (t.j[e].push(n), t),
                off(e, n) {
                  const i = t.j[e];
                  if (i) {
                    const e = i.indexOf(n);
                    ~e && i.splice(e, 1);
                  }
                  return t;
                },
                resolveSelectables() {
                  t.h = p(t.options.selectables, t.options.frame);
                },
                keepSelection() {
                  const { _: e, v: n } = t;
                  for (let t = 0; t < e.length; t++) {
                    const i = e[t];
                    n.includes(i) || n.push(i);
                  }
                },
                clearSelection(e = !0) {
                  e && (t.v = []),
                    (t._ = []),
                    (t.g.added = []),
                    (t.g.removed = []);
                },
                removeFromSelection(e) {
                  t.g.removed.push(e), h(t.v, e), h(t._, e);
                },
                getSelection: () => t.v,
                cancel(e = !1) {
                  t.J(null, !e);
                },
                option(e, n) {
                  const { options: i } = t;
                  return void 0 === n ? i[e] : (i[e] = n);
                },
                disable() {
                  t.k("off");
                },
                destroy() {
                  t.disable(), t.T.remove();
                },
                enable() {
                  t.k("on");
                },
                select(e) {
                  const { _: n, v: i, options: o } = t,
                    r = p(e, o.frame).filter(
                      (e) => !n.includes(e) && !i.includes(e),
                    );
                  return t._.push(...r), t.g.added.push(...r), r;
                },
              };
              return t.M(), t;
            }
            (w.utils = {
              on: l,
              off: d,
              css: s,
              intersects: u,
              selectAll: p,
              eventPath: g,
              removeElement: h,
            }),
              (w.create = (e) => w(e)),
              (w.version = f.a),
              (t.default = w);
          },
        ]).default);
    },
    75234: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          cancelAnimationFrame: () => r,
          requestAnimationFrame: () => o,
        });
      var i = ["webkit", "moz", "ms", "o"],
        o = (function () {
          for (
            var e = 0, t = i.length;
            e < t && !window.requestAnimationFrame;
            ++e
          )
            window.requestAnimationFrame =
              window[i[e] + "RequestAnimationFrame"];
          if (!window.requestAnimationFrame) {
            var n = 0;
            window.requestAnimationFrame = function (e) {
              var t = new Date().getTime(),
                i = Math.max(0, 16 - t - n),
                o = window.setTimeout(function () {
                  return e(t + i);
                }, i);
              return (n = t + i), o;
            };
          }
          return window.requestAnimationFrame.bind(window);
        })(),
        r = (function () {
          for (
            var e = 0, t = i.length;
            e < t && !window.cancelAnimationFrame;
            ++e
          )
            window.cancelAnimationFrame =
              window[i[e] + "CancelAnimationFrame"] ||
              window[i[e] + "CancelRequestAnimationFrame"];
          return (
            window.cancelAnimationFrame ||
              (window.cancelAnimationFrame = function (e) {
                window.clearTimeout(e);
              }),
            window.cancelAnimationFrame.bind(window)
          );
        })();
    },
    44622: (e, t, n) => {
      e.exports = "function" == typeof Array.from ? Array.from : n(64486);
    },
    64486: (e) => {
      var t, n, i, o;
      e.exports =
        ((t = function (e) {
          return "function" == typeof e;
        }),
        (n = Math.pow(2, 53) - 1),
        (i = function (e) {
          var t = (function (e) {
            var t = Number(e);
            return isNaN(t)
              ? 0
              : 0 !== t && isFinite(t)
                ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t))
                : t;
          })(e);
          return Math.min(Math.max(t, 0), n);
        }),
        (o = function (e) {
          var t = e.next();
          return !Boolean(t.done) && t;
        }),
        function (e) {
          "use strict";
          var n,
            r,
            a,
            l = this,
            d = arguments.length > 1 ? arguments[1] : void 0;
          if (void 0 !== d) {
            if (!t(d))
              throw new TypeError(
                "Array.from: when provided, the second argument must be a function",
              );
            arguments.length > 2 && (n = arguments[2]);
          }
          var c = (function (e, n) {
            if (null != e && null != n) {
              var i = e[n];
              if (null == i) return;
              if (!t(i)) throw new TypeError(i + " is not a function");
              return i;
            }
          })(
            e,
            (function (e) {
              if (null != e) {
                if (
                  ["string", "number", "boolean", "symbol"].indexOf(typeof e) >
                  -1
                )
                  return Symbol.iterator;
                if (
                  "undefined" != typeof Symbol &&
                  "iterator" in Symbol &&
                  Symbol.iterator in e
                )
                  return Symbol.iterator;
                if ("@@iterator" in e) return "@@iterator";
              }
            })(e),
          );
          if (void 0 !== c) {
            r = t(l) ? Object(new l()) : [];
            var s,
              u,
              p = c.call(e);
            if (null == p)
              throw new TypeError(
                "Array.from requires an array-like or iterable object",
              );
            for (a = 0; ; ) {
              if (!(s = o(p))) return (r.length = a), r;
              (u = s.value), (r[a] = d ? d.call(n, u, a) : u), a++;
            }
          } else {
            var g = Object(e);
            if (null == e)
              throw new TypeError(
                "Array.from requires an array-like object - not null or undefined",
              );
            var h,
              v = i(g.length);
            for (r = t(l) ? Object(new l(v)) : new Array(v), a = 0; a < v; )
              (h = g[a]), (r[a] = d ? d.call(n, h, a) : h), a++;
            r.length = v;
          }
          return r;
        });
    },
    6367: (e, t, n) => {
      "use strict";
      var i = n(15893);
      e.exports = function (e, t) {
        t = t || {};
        var n = i.boolean(t.allowUpdate, !0);
        return function (t) {
          if (
            ((t = t || window.event),
            (e.target = t.target || t.srcElement || t.originalTarget),
            (e.element = this),
            (e.type = t.type),
            n(t))
          ) {
            if (t.targetTouches)
              (e.x = t.targetTouches[0].clientX),
                (e.y = t.targetTouches[0].clientY),
                (e.pageX = t.targetTouches[0].pageX),
                (e.pageY = t.targetTouches[0].pageY),
                (e.screenX = t.targetTouches[0].screenX),
                (e.screenY = t.targetTouches[0].screenY);
            else {
              if (null === t.pageX && null !== t.clientX) {
                var i = (t.target && t.target.ownerDocument) || document,
                  o = i.documentElement,
                  r = i.body;
                (e.pageX =
                  t.clientX +
                  ((o && o.scrollLeft) || (r && r.scrollLeft) || 0) -
                  ((o && o.clientLeft) || (r && r.clientLeft) || 0)),
                  (e.pageY =
                    t.clientY +
                    ((o && o.scrollTop) || (r && r.scrollTop) || 0) -
                    ((o && o.clientTop) || (r && r.clientTop) || 0));
              } else (e.pageX = t.pageX), (e.pageY = t.pageY);
              (e.x = t.clientX),
                (e.y = t.clientY),
                (e.screenX = t.screenX),
                (e.screenY = t.screenY);
            }
            (e.clientX = e.x), (e.clientY = e.y);
          }
        };
      };
    },
    62154: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s });
      var i = n(23645),
        o = n.n(i),
        r = n(61667),
        a = n.n(r),
        l = n(16884),
        d = o()(function (e) {
          return e[1];
        }),
        c = a()(l.Z);
      d.push([
        e.id,
        ".selection-area {\n  background: var(--uk-outliner-selection-area-background, rgba(0, 0, 255, 0.1));\n  border-radius: 0.1em;\n  border: 0.05em solid var(--uk-outliner-selection-area-border, rgba(0, 0, 255, 0.2));\n}\n.grabbing {\n  cursor: move !important;\n  /* fallback: no `url()` support or images disabled */\n  cursor: -webkit-grabbing !important;\n  /* Chrome 1-21, Safari 4+ */\n  cursor: -moz-grabbing !important;\n  /* Firefox 1.5-26 */\n  cursor: grabbing !important;\n  /* W3C standards syntax, should come least */\n}\nhtml[color-scheme='light'] {\n  --uk--outliner-topic-title-color: #000000e6;\n  --uk-outliner-editing-background: #fafafb;\n  --uk-outliner-selected-background: #e1ebff;\n  --uk-outliner-default-background: #fff;\n  --uk-outliner-icon-color: #000;\n  --uk-outliner-topic-dragging-opacity: 0.5;\n  --uk-outliner-topic-dot-hover: #f6f6f7;\n  --uk-outliner-topic-label-background: rgba(255, 255, 255, 0.7);\n  --uk-outliner-topic-label-border-color: rgba(0, 0, 0, 0.1);\n  --uk-outliner-topic-label-border-color-hover: rgba(0, 0, 0, 0.5);\n  --uk-outliner-topic-label-text-color: black;\n  --uk-outliner-topic-link-background: rgba(0, 0, 0, 0.04);\n  --uk-outliner-topic-link-background-hover: rgba(0, 0, 0, 0.08);\n  --uk-outliner-topic-link-color: rgba(0, 0, 0, 0.7);\n  --uk-outliner-topic-link-color-hover: #0515ff;\n  --uk-outliner-topic-note-toolbar-background: #fff;\n  --uk-outliner-topic-note-toolbar-button-color-hover: rgba(0, 0, 0, 0.05);\n  --uk-outliner-topic-note-container-color: rgba(0, 0, 0, 0.5);\n  --uk-outliner-topic-folded-color: #000000b3;\n  --uk-outliner-topic-folded-background: rgba(0, 0, 0, 0.05);\n  --uk-outliner-selection-area-background: rgba(0, 0, 255, 0.1);\n  --uk-outliner-selection-area-border: rgba(0, 0, 255, 0.2);\n}\n@media only screen {\n  html[color-scheme='dark'] {\n    --uk--outliner-topic-title-color: rgba(255, 255, 255, 0.9);\n    --uk-outliner-editing-background: #27292a;\n    --uk-outliner-selected-background: rgba(54, 54, 54, 0.9);\n    --uk-outliner-default-background: #1e2021;\n    --uk-outliner-icon-color: #ffffff;\n    --uk-outliner-topic-dragging-opacity: 1/9;\n    --uk-outliner-topic-dot-hover: #323537;\n    --uk-outliner-topic-label-background: rgba(255, 255, 255, 0.05);\n    --uk-outliner-topic-label-border-color: rgba(255, 255, 255, 0.15);\n    --uk-outliner-topic-label-border-color-hover: rgba(255, 255, 255, 0.5);\n    --uk-outliner-topic-label-text-color: rgba(255, 255, 255, 0.7);\n    --uk-outliner-topic-link-background: rgba(255, 255, 255, 0.04);\n    --uk-outliner-topic-link-background-hover: rgba(255, 255, 255, 0.04);\n    --uk-outliner-topic-link-color: rgba(255, 255, 255, 0.6);\n    --uk-outliner-topic-link-color-hover: #69cbfb;\n    --uk-outliner-topic-note-toolbar-background: #343434;\n    --uk-outliner-topic-note-toolbar-button-color-hover: #444444;\n    --uk-outliner-topic-note-container-color: rgba(255, 255, 255, 0.5);\n    --uk-outliner-topic-folded-color: rgba(255, 255, 255, 0.7);\n    --uk-outliner-topic-folded-background: rgba(255, 255, 255, 0.16);\n    --uk-outliner-selection-area-background: rgba(148, 200, 249, 0.2);\n    --uk-outliner-selection-area-border: rgba(196, 225, 252, 0.2);\n  }\n  html[color-scheme='dark'] .outliner-topic {\n    background-image: url(" +
          c +
          ");\n  }\n  html[color-scheme='dark'] .outliner-topic-note .ql-editor {\n    color: rgba(255, 255, 255, 0.4);\n    caret-color: #ffffff !important;\n  }\n  html[color-scheme='dark'] .outliner-topic-note .ql-editor.ql-blank::before {\n    color: rgba(255, 255, 255, 0.2);\n  }\n  html[color-scheme='dark'] .outliner-topic-note-container > trix-editor::before {\n    color: rgba(255, 255, 255, 0.3);\n  }\n  html[color-scheme='dark'] .outliner-topic-equation.is-image-valid,\n  html[color-scheme='dark'] .outliner-topic-equation-editor-preview-container.is-image-valid {\n    filter: invert(1);\n  }\n}\n/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked='true'],\n.ql-editor ul[data-checked='false'] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked='true'] > li *,\n.ql-editor ul[data-checked='false'] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked='true'] > li::before,\n.ql-editor ul[data-checked='false'] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked='true'] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked='false'] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0, 0, 0, 0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n",
        "",
      ]);
      const s = d;
    },
    55601: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var i = n(23645),
        o = n.n(i)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".outliner-central-topic[data-v-9c6aca94] {\n  margin: 100px auto 24px auto;\n  max-width: 650px;\n  padding-left: 22px;\n}\n.outliner-central-topic .outliner-topic-title[data-v-9c6aca94] {\n  display: inline-block;\n  min-height: 30px;\n  line-height: 48px;\n  font-size: 40px;\n  font-weight: bold;\n  outline: none;\n  white-space: pre-wrap;\n  cursor: text;\n  color: var(--uk--outliner-topic-title-color, #000000e6);\n}\n@media only screen {\n.outliner-central-topic[data-v-9c6aca94]::before {\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 0;\n    left: 0;\n    top: 0;\n    z-index: -1;\n    background-color: var(--uk-outliner-editing-background, #fafafb);\n}\n.outliner-central-topic:focus-within .outliner-topic-title[data-v-9c6aca94],\n  .outliner-central-topic:focus-within .outliner-topic-inserts[data-v-9c6aca94],\n  .outliner-central-topic:focus-within .outliner-topic-note[data-v-9c6aca94],\n  .outliner-central-topic:focus-within .outliner-topic-marker-container[data-v-9c6aca94],\n  .outliner-topic-task-container .outliner-central-topic[data-v-9c6aca94]:focus-within {\n    background-color: var(--uk-outliner-editing-background, #fafafb);\n}\n.outliner-central-topic[data-v-9c6aca94]:focus-within::before {\n    width: 100%;\n    box-shadow: -1740px 0px 0px var(--uk-outliner-editing-background, #fafafb), -1280px 0px 0px var(--uk-outliner-editing-background, #fafafb), -640px 0px 0px var(--uk-outliner-editing-background, #fafafb), 640px 0px 0px var(--uk-outliner-editing-background, #fafafb), 1280px 0px 0px var(--uk-outliner-editing-background, #fafafb), 1740px 0px 0px var(--uk-outliner-editing-background, #fafafb);\n}\n}\n@media print {\n.outliner-central-topic[data-v-9c6aca94] {\n    margin-top: 0;\n}\n}\n",
        "",
      ]);
      const r = o;
    },
    85790: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var i = n(23645),
        o = n.n(i)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".outliner-container[data-v-10f3055e] {\n  margin: 0 auto;\n  padding-bottom: 100px;\n  min-height: calc(100vh - 20px);\n  width: 650px;\n  list-style: none;\n  outline: none;\n  transform-origin: calc(50% - 390px) top;\n}\n.outliner-detached-topics-separator[data-v-10f3055e] {\n  margin-top: 10px;\n  opacity: 0.3;\n  border-color: #000;\n}\n.outliner-topic-placeholder[data-v-10f3055e] {\n  max-width: 650px;\n  margin: 0 auto;\n}\n@media print {\n.outliner-container[data-v-10f3055e] {\n    width: 650px;\n    padding-bottom: 0;\n    transform: scale(1) !important;\n}\n}\n",
        "",
      ]);
      const r = o;
    },
    31841: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var i = n(23645),
        o = n.n(i)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".outliner-spinner[data-v-23cd6977] {\n  border-radius: 50%;\n  transform: translateZ(0);\n  width: 24px;\n  height: 24px;\n  box-shadow: inset 0 0 0 2px #949699;\n}\n.outliner-spinner[data-v-23cd6977]:before,\n.outliner-spinner[data-v-23cd6977]:after {\n  position: absolute;\n  content: '';\n  width: 13px;\n  height: 26px;\n  background: #fff;\n}\n.outliner-spinner[data-v-23cd6977]:before {\n  top: -1px;\n  left: -1px;\n  border-radius: 26px 0 0 26px;\n  transform-origin: 13px 13px;\n  animation: spinner-23cd6977 1s infinite ease 0.25s;\n}\n.outliner-spinner[data-v-23cd6977]:after {\n  border-radius: 50%;\n  border-radius: 0 26px 26px 0;\n  top: -1px;\n  left: 13px;\n  transform-origin: 0px 13px;\n  animation: spinner-23cd6977 1s infinite ease;\n}\nhtml[color-scheme='dark'] .outliner-spinner[data-v-23cd6977] {\n  box-shadow: inset 0 0 0 2px #a2a4a6;\n}\nhtml[color-scheme='dark'] .outliner-spinner[data-v-23cd6977]:before,\nhtml[color-scheme='dark'] .outliner-spinner[data-v-23cd6977]:after {\n  background: #1d1f20;\n}\n@keyframes spinner-23cd6977 {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n",
        "",
      ]);
      const r = o;
    },
    24425: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var i = n(23645),
        o = n.n(i)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".outliner-tooltip[data-v-cfd364ee] {\n  background: var(--uk-popover-background, rgba(255, 255, 255, 0.7));\n  color: var(--uk-global-color, #27292a);\n  border-radius: 5px;\n  backdrop-filter: blur(30px);\n  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.35));\n  padding: 8px 16px;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  font-weight: normal;\n  width: max-content;\n}\n.outliner-tooltip[data-v-cfd364ee]::before {\n  content: ' ';\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-color: var(--uk-popover-arrow-mask-border, rgba(232, 232, 232, 0));\n  border-width: 5px;\n  top: 100%;\n  left: calc(50%);\n  margin-left: -5px;\n  border-top-color: var(--uk-popover-background, rgba(255, 255, 255, 0.7));\n}\n",
        "",
      ]);
      const r = o;
    },
    38618: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s });
      var i = n(23645),
        o = n.n(i),
        r = n(61667),
        a = n.n(r),
        l = n(25581),
        d = o()(function (e) {
          return e[1];
        }),
        c = a()(l.Z);
      d.push([
        e.id,
        ".outliner-topic-audio-note[data-v-1fa1ed7a] {\n  display: inline-flex;\n  padding: 0 12px;\n  margin-bottom: 4px;\n  height: 24px;\n  line-height: 24px;\n  font-size: 14px;\n  border-radius: 12px;\n  color: var(--uk-outliner-topic-link-color, rgba(0, 0, 0, 0.7));\n  background: var(--uk-outliner-topic-link-background, rgba(0, 0, 0, 0.04));\n  cursor: pointer;\n}\n.outliner-topic-audio-note[data-v-1fa1ed7a]:hover {\n  color: var(--uk-outliner-topic-link-color-hover, #0515ff);\n  background: var(--uk-outliner-topic-link-background-hover, rgba(0, 0, 0, 0.08));\n}\n.outliner-topic-audio-note[data-v-1fa1ed7a]:hover::before {\n  background-color: var(--uk-outliner-topic-link-color-hover, #0515ff);\n}\n.outliner-topic-audio-note[data-v-1fa1ed7a]::before {\n  content: ' ';\n  width: 16px;\n  height: 24px;\n  margin-right: 4px;\n  box-sizing: border-box;\n  background-color: var(--uk-outliner-topic-link-color, rgba(0, 0, 0, 0.7));\n  -webkit-mask-repeat: no-repeat;\n  mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-position: center;\n  -webkit-mask-image: url(" +
          c +
          ");\n  mask-image: url(" +
          c +
          ");\n}\n",
        "",
      ]);
      const s = d;
    },
    47375: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var i = n(23645),
        o = n.n(i)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".outliner-topic-equation-editor-title[data-v-4a4272a6] {\n  opacity: 0.2;\n  font-size: 14px;\n  line-height: 14px;\n}\n.uk-textarea[data-v-4a4272a6] {\n  height: 134px;\n  background-color: transparent;\n  font-family: SF Mono, Monaco, Consolas, Menlo, monospace;\n}\n.uk-textarea[data-v-4a4272a6]:focus {\n  background-color: transparent;\n}\n.outliner-topic-equation-editor-preview-container[data-v-4a4272a6] {\n  box-sizing: border-box;\n  margin-top: 10px;\n  height: 76px;\n  padding: 6px;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.equation-help[data-v-4a4272a6] {\n  opacity: 0.3;\n}\n.equation-help[data-v-4a4272a6]:hover {\n  opacity: 0.6;\n}\n",
        "",
      ]);
      const r = o;
    },
    60757: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s });
      var i = n(23645),
        o = n.n(i),
        r = n(61667),
        a = n.n(r),
        l = n(23052),
        d = o()(function (e) {
          return e[1];
        }),
        c = a()(l.Z);
      d.push([
        e.id,
        ".outliner-topic-equation-container[data-v-8295fd3a] {\n  clear: both;\n  position: relative;\n  box-sizing: content-box;\n  margin-bottom: 5px;\n  border-width: 1.5px;\n  border-style: solid;\n  border-color: transparent;\n  max-width: 650px;\n  padding: 3.5px;\n  line-height: 0;\n}\n.outliner-topic-equation-container.is-dragging[data-v-8295fd3a] {\n  opacity: 0.6;\n}\n.outliner-topic-equation-container.is-selected[data-v-8295fd3a] {\n  border-color: #057bff;\n}\n.outliner-topic-equation-container.is-selected .is-image-valid + .outliner-topic-equation-handler[data-v-8295fd3a] {\n  display: block;\n}\n.outliner-topic-equation-container .outliner-topic-equation-handler[data-v-8295fd3a] {\n  display: none;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  z-index: 10;\n  right: -9px;\n  bottom: -9px;\n  cursor: pointer;\n  background-image: url(" +
          c +
          ");\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n@media print {\n.outliner-topic-equation[data-v-8295fd3a] {\n    filter: invert(0);\n}\n}\n",
        "",
      ]);
      const s = d;
    },
    75542: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s });
      var i = n(23645),
        o = n.n(i),
        r = n(61667),
        a = n.n(r),
        l = n(23052),
        d = o()(function (e) {
          return e[1];
        }),
        c = a()(l.Z);
      d.push([
        e.id,
        ".outliner-topic-image[data-v-70581c3c] {\n  clear: both;\n  position: relative;\n  box-sizing: content-box;\n  margin-bottom: 4px;\n  border-width: 1.5px;\n  border-style: solid;\n  border-color: transparent;\n  max-width: 650px;\n  min-width: 64px;\n  padding: 3.5px;\n}\n.outliner-topic-image.is-dragging[data-v-70581c3c] {\n  opacity: 0.6;\n}\n.outliner-topic-image.is-selected[data-v-70581c3c] {\n  border-color: #057bff;\n}\n.outliner-topic-image.is-selected.is-image-valid .outliner-topic-image-handler[data-v-70581c3c] {\n  display: block;\n}\n.outliner-topic-image .outliner-topic-image-handler[data-v-70581c3c] {\n  display: none;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  z-index: 10;\n  right: -9px;\n  bottom: -9px;\n  cursor: pointer;\n  background-image: url(" +
          c +
          ");\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n",
        "",
      ]);
      const s = d;
    },
    58349: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var i = n(23645),
        o = n.n(i)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".outliner-topic-label-editor-content[data-v-5088c23d] {\n  position: relative;\n  width: 100%;\n  height: 148px;\n  padding: 15px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  box-sizing: border-box;\n}\n.outliner-topic-label-editor-title[data-v-5088c23d] {\n  margin: 0;\n  margin-bottom: 12px;\n}\n.outliner-topic-label-editor-textarea[data-v-5088c23d] {\n  width: 100%;\n  min-height: 90px;\n  font-size: 13px;\n  font-family: inherit;\n  background: inherit;\n  color: inherit;\n  outline: none;\n  border: none;\n  resize: none;\n}\n.uk-lang-it-IT .auto-sort-label[data-v-5088c23d] {\n  font-size: 11px;\n}\n",
        "",
      ]);
      const r = o;
    },
    25113: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var i = n(23645),
        o = n.n(i)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".outliner-topic-label-container[data-v-7ddad63c] {\n  margin-bottom: 4px;\n  margin-right: 2px;\n}\n.outliner-topic-label[data-v-7ddad63c] {\n  display: inline-block;\n  min-width: 26px;\n  max-width: 124px;\n  padding: 2px 8px;\n  margin-right: 8px;\n  font-size: 12px;\n  line-height: 16px;\n  border: solid 1px var(--uk-outliner-topic-label-border-color, rgba(0, 0, 0, 0.1));\n  background-color: var(--uk-outliner-topic-label-background, rgba(255, 255, 255, 0.7));\n  color: var(--uk-outliner-topic-label-text-color, black);\n  border-radius: 11px;\n  text-align: center;\n}\n.outliner-topic-label[data-v-7ddad63c]:hover {\n  border-color: var(--uk-outliner-topic-label-border-color-hover, rgba(0, 0, 0, 0.5));\n}\n",
        "",
      ]);
      const r = o;
    },
    8264: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => f });
      var i = n(23645),
        o = n.n(i),
        r = n(61667),
        a = n.n(r),
        l = n(39904),
        d = n(8056),
        c = n(99845),
        s = n(57298),
        u = o()(function (e) {
          return e[1];
        }),
        p = a()(l.Z),
        g = a()(d.Z),
        h = a()(c.Z),
        v = a()(s.Z);
      u.push([
        e.id,
        ".outliner-topic-link-container[data-v-d413e324] {\n  margin-bottom: 4px;\n}\n.outliner-topic-link[data-v-d413e324] {\n  display: inline-flex;\n  padding: 0 12px;\n  height: 24px;\n  line-height: 24px;\n  font-size: 14px;\n  border-radius: 12px;\n  color: var(--uk-outliner-topic-link-color, rgba(0, 0, 0, 0.7));\n  background: var(--uk-outliner-topic-link-background, rgba(0, 0, 0, 0.04));\n  cursor: pointer;\n}\n.outliner-topic-link[data-v-d413e324]:hover {\n  color: var(--uk-outliner-topic-link-color-hover, #0515ff);\n  background: var(--uk-outliner-topic-link-background-hover, rgba(0, 0, 0, 0.08));\n  text-decoration: underline;\n}\n.outliner-topic-link[data-v-d413e324]:hover::before {\n  background-color: var(--uk-outliner-topic-link-color-hover, #0515ff);\n}\n.outliner-topic-link[data-v-d413e324]::before {\n  content: ' ';\n  width: 16px;\n  height: 24px;\n  margin-right: 4px;\n  box-sizing: border-box;\n  background-color: var(--uk-outliner-topic-link-color, rgba(0, 0, 0, 0.7));\n  -webkit-mask-repeat: no-repeat;\n  mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-position: center;\n}\n.outliner-topic-link.is-webpage[data-v-d413e324] {\n  text-decoration: underline;\n}\n.outliner-topic-link.is-webpage[data-v-d413e324]::before {\n  -webkit-mask-image: url(" +
          p +
          ");\n  mask-image: url(" +
          p +
          ");\n}\n.outliner-topic-link.is-topic[data-v-d413e324]::before {\n  -webkit-mask-image: url(" +
          g +
          ");\n  mask-image: url(" +
          g +
          ");\n}\n.outliner-topic-link.is-local-file[data-v-d413e324]::before {\n  -webkit-mask-image: url(" +
          h +
          ");\n  mask-image: url(" +
          h +
          ");\n}\n.outliner-topic-link.is-local-folder[data-v-d413e324]::before {\n  -webkit-mask-image: url(" +
          v +
          ");\n  mask-image: url(" +
          v +
          ");\n}\n.outliner-topic-link-text[data-v-d413e324] {\n  max-width: 250px;\n}\n",
        "",
      ]);
      const f = u;
    },
    80203: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var i = n(23645),
        o = n.n(i)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".outliner-topic-marker-container[data-v-51d6aece] {\n  background: var(--uk-outliner-default-background, #fff);\n}\n.outliner-topic-marker[data-v-51d6aece] {\n  margin-right: 2px;\n  border-radius: 2px;\n  border: 1px solid transparent;\n}\n.outliner-topic-marker[data-v-51d6aece]:hover {\n  border-color: #2ebdff;\n}\n.outliner-topic-marker-item[data-v-51d6aece] {\n  display: inline-block;\n  vertical-align: top;\n}\n",
        "",
      ]);
      const r = o;
    },
    9007: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => y });
      var i = n(23645),
        o = n.n(i),
        r = n(61667),
        a = n.n(r),
        l = n(64821),
        d = n(29547),
        c = n(63846),
        s = n(71287),
        u = n(43427),
        p = n(18234),
        g = o()(function (e) {
          return e[1];
        }),
        h = a()(l.Z),
        v = a()(d.Z),
        f = a()(c.Z),
        m = a()(s.Z),
        b = a()(u.Z),
        I = a()(p.Z);
      g.push([
        e.id,
        ".outliner-topic-note[data-v-7cf28ec0] {\n  margin-left: 24px;\n  padding-bottom: 4px;\n  clear: both;\n  background: var(--uk-outliner-default-background, #fff);\n}\n.outliner-topic-note-container[data-v-7cf28ec0] {\n  line-height: 1.4;\n  font-size: 16px;\n  color: var(--uk-outliner-topic-note-container-color, rgba(0, 0, 0, 0.5));\n  cursor: text;\n  outline: none;\n}\n.outliner-topic-note-container trix-editor em[data-v-7cf28ec0],\n.outliner-topic-note-container trix-editor strong[data-v-7cf28ec0],\n.outliner-topic-note-container trix-editor u[data-v-7cf28ec0] {\n  color: var(--uk-outliner-topic-note-container-color, rgba(0, 0, 0, 0.5));\n}\n.outliner-topic-note-toolbar[data-v-7cf28ec0] {\n  display: flex;\n  position: absolute;\n  z-index: 999;\n  padding: 0px 13px;\n  background-color: var(--uk-outliner-topic-note-toolbar-background, #fff);\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  top: -27px;\n}\n.outliner-topic-note-toolbar button[data-v-7cf28ec0] {\n  background-color: inherit;\n  color: inherit;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  position: relative;\n  width: 16px;\n  height: 16px;\n  box-sizing: content-box;\n  margin-right: 2px;\n  padding: 4px;\n  border-radius: 2px;\n}\n.outliner-topic-note-toolbar button[data-v-7cf28ec0]::before {\n  content: ' ';\n  width: 16px;\n  height: 16px;\n  margin: 4px;\n  -webkit-mask-repeat: no-repeat;\n  mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-position: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: var(--uk-outliner-icon-color, #000);\n}\n.outliner-topic-note-toolbar button[data-v-7cf28ec0]:last-of-type {\n  margin-right: 0;\n}\n.outliner-topic-note-toolbar button[data-v-7cf28ec0]:hover {\n  background-color: var(--uk-outliner-topic-note-toolbar-button-color-hover, rgba(0, 0, 0, 0.05));\n}\n.outliner-topic-note-link-input-container[data-v-7cf28ec0] {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: -27px;\n  z-index: 999;\n  background-color: var(--uk-outliner-topic-note-toolbar-background, #fff);\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08), 0px 1px 4px rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n}\n.outliner-topic-note-link-input-container .outliner-topic-note-link-input[data-v-7cf28ec0] {\n  box-shadow: none;\n}\n.outliner-topic-note-link-input-container .outliner-topic-note-link-input[data-v-7cf28ec0]:hover {\n  box-shadow: none !important;\n}\n.outliner-topic-note-link-input-container .outliner-topic-note-link-confirm-btn[data-v-7cf28ec0] {\n  border-radius: 0 4px 4px 0;\n}\n.outliner-topic-note-link-input-container .outliner-topic-note-link-confirm-btn[data-v-7cf28ec0]::before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 25%;\n  right: 22px;\n  border-left: 1px solid var(--uk-divider-vertical-color, rgba(0, 0, 0, 0.15));\n  height: 50%;\n}\n.outliner-topic-note-link-input-container .outliner-topic-note-link-confirm-btn[data-v-7cf28ec0]:hover::before {\n  display: none;\n}\n.ol-b[data-v-7cf28ec0]::before {\n  -webkit-mask-image: url(" +
          h +
          ");\n  mask-image: url(" +
          h +
          ");\n}\n.ol-i[data-v-7cf28ec0]::before {\n  -webkit-mask-image: url(" +
          v +
          ");\n  mask-image: url(" +
          v +
          ");\n}\n.ol-u[data-v-7cf28ec0]::before {\n  -webkit-mask-image: url(" +
          f +
          ");\n  mask-image: url(" +
          f +
          ");\n}\n.ol-ul[data-v-7cf28ec0]::before {\n  -webkit-mask-image: url(" +
          m +
          ");\n  mask-image: url(" +
          m +
          ");\n}\n.ol-ol[data-v-7cf28ec0]::before {\n  -webkit-mask-image: url(" +
          b +
          ");\n  mask-image: url(" +
          b +
          ");\n}\n.ol-link[data-v-7cf28ec0]::before {\n  -webkit-mask-image: url(" +
          I +
          ");\n  mask-image: url(" +
          I +
          ");\n}\n",
        "",
      ]);
      const y = g;
    },
    44162: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var i = n(23645),
        o = n.n(i)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".outliner-topic-numbering[data-v-7cabaa9c] {\n  margin: 0 2px;\n  font-size: 16px;\n  background: var(--uk-outliner-default-background, #fff);\n}\n",
        "",
      ]);
      const r = o;
    },
    88438: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var i = n(23645),
        o = n.n(i)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".topic-placeholder[data-v-e6807d80] {\n  display: none;\n  position: absolute;\n  right: 0;\n  height: 2px;\n  margin-left: 10px;\n  padding: 0;\n  width: 100%;\n  background: #ea4e4e;\n}\n.topic-placeholder.topic-dragging[data-v-e6807d80] {\n  display: block;\n}\n.topic-placeholder[data-v-e6807d80]::before {\n  content: ' ';\n  position: absolute;\n  left: -2px;\n  top: -2px;\n  display: block;\n  height: 6px;\n  width: 6px;\n  background: #ea4e4e;\n}\n",
        "",
      ]);
      const r = o;
    },
    48557: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var i = n(23645),
        o = n.n(i)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".outliner-topic-task-container[data-v-27880cf9] {\n  background: var(--uk-outliner-default-background, #fff);\n}\n.outliner-topic-task[data-v-27880cf9] {\n  margin-right: 2px;\n  border-radius: 2px;\n  border: 1px solid transparent;\n}\n.outliner-topic-task[data-v-27880cf9]:hover {\n  border-color: #2ebdff;\n}\n.outliner-topic-task-img[data-v-27880cf9] {\n  display: inline-block;\n  position: relative;\n  vertical-align: top;\n}\n",
        "",
      ]);
      const r = o;
    },
    60220: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var i = n(23645),
        o = n.n(i)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".outliner-topic-title[data-v-0969cd26] {\n  display: inline-block;\n  min-height: 30px;\n  line-height: 1.4;\n  padding: 4px 22px 4px 0;\n  box-sizing: border-box;\n  font-size: 16px;\n  word-break: break-word;\n  white-space: pre-wrap;\n  color: var(--uk--outliner-topic-title-color, #000000e6);\n  background: var(--uk-outliner-default-background, #fff);\n  outline: none;\n  cursor: text;\n}\n.outliner-topic-title.is-empty[data-v-0969cd26]::after {\n  content: attr(placeholder);\n  display: inline-block;\n  color: #949699;\n}\n.has-child.is-folded .outliner-topic-title[data-v-0969cd26]::after {\n  content: attr(data-child-count);\n  display: inline-block;\n  margin-left: 10px;\n  margin-top: 0.5px;\n  padding: 0 4.5px;\n  min-width: 18px;\n  height: 18px;\n  line-height: 18px;\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  background: var(--uk-outliner-topic-folded-background, rgba(0, 0, 0, 0.05));\n  border-radius: 9px;\n  box-sizing: border-box;\n  color: var(--uk-outliner-topic-folded-color, #000000b3);\n}\n",
        "",
      ]);
      const r = o;
    },
    99071: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => p });
      var i = n(23645),
        o = n.n(i),
        r = n(61667),
        a = n.n(r),
        l = n(23543),
        d = n(59384),
        c = o()(function (e) {
          return e[1];
        }),
        s = a()(l.Z),
        u = a()(d.Z);
      c.push([
        e.id,
        ".outliner-topic-container[data-v-6dd927a1] {\n  position: relative;\n  margin-left: -20px;\n  margin-bottom: 4px;\n  padding-left: 20px;\n  page-break-inside: avoid;\n}\n.outliner-topic-container.topic-dragging[data-v-6dd927a1] {\n  opacity: var(--uk-outliner-topic-dragging-opacity, 0.5);\n}\n.outliner-topic-container.topic-dragging .outliner-topic-inner[data-v-6dd927a1] {\n  background: var(--uk-outliner-default-background, #fff);\n}\n.outliner-topic[data-v-6dd927a1] {\n  max-width: 650px;\n  box-sizing: border-box;\n  margin: 0 auto;\n  clear: both;\n  background-image: url(" +
          s +
          ");\n  background-size: 22px;\n}\n.outliner-topic-outter[data-v-6dd927a1] {\n  border-radius: 3px;\n}\n.outliner-topic-dot[data-v-6dd927a1] {\n  width: 18px;\n  height: 18px;\n  box-sizing: content-box;\n  margin: 6px 4px 0 2px;\n  border-radius: 2px;\n  background: var(--uk-outliner-default-background, #fff);\n  cursor: move;\n}\n.outliner-topic-dot[data-v-6dd927a1]:hover {\n  background: var(--uk-outliner-editing-background, #fafafb);\n}\n.outliner-topic-dot[data-v-6dd927a1]::before {\n  content: '';\n  position: absolute;\n  height: 5px;\n  width: 2px;\n  top: -5px;\n  left: 8px;\n  background: var(--uk-outliner-default-background, #fff);\n  box-shadow: 0px 23px var(--uk-outliner-default-background, #fff);\n}\n.outliner-topic-dot[data-v-6dd927a1]::after {\n  content: '';\n  border: 2px solid var(--uk-outliner-icon-color, #000);\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  border-radius: 0;\n  transform: translate(-50%, -50%);\n}\n.has-child .outliner-topic-dot[data-v-6dd927a1] {\n  cursor: pointer;\n}\n.has-child .outliner-topic-dot[data-v-6dd927a1]::after {\n  -webkit-mask-image: url(" +
          u +
          ");\n  mask-image: url(" +
          u +
          ");\n  -webkit-mask-size: 10px;\n  mask-size: 10px;\n  -webkit-mask-repeat: no-repeat;\n  mask-repeat: no-repeat;\n  -webkit-mask-position: 0 0.5px;\n  mask-position: 0 0.5px;\n  background: var(--uk-outliner-icon-color, #000);\n  width: 10px;\n  height: 10px;\n  border: none;\n}\n.has-child.is-folded .outliner-topic-dot[data-v-6dd927a1]::after {\n  transform: translate(-50%, -50%) rotate(-90deg);\n}\n.main-topic .outliner-topic-title[data-v-6dd927a1],\n.main-topic .outliner-topic-numbering[data-v-6dd927a1] {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 22px;\n}\n.outliner-reached-limited-container[data-v-6dd927a1] {\n  margin-left: 22px;\n  background: var(--uk-outliner-default-background, #fff);\n}\n.outliner-reached-limited-btn[data-v-6dd927a1] {\n  display: inline-flex;\n  margin: 2px 0px;\n  padding: 5px 12px;\n  line-height: 13px;\n  font-size: 13px;\n  border-radius: 12px;\n  background: #ff2d2d;\n  cursor: pointer;\n}\n.outliner-topic-inserts[data-v-6dd927a1] {\n  margin-left: 22px;\n  background: var(--uk-outliner-default-background, #fff);\n}\n@media only screen {\n.outliner-topic[data-v-6dd927a1]::before {\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 0;\n    left: 0;\n    top: 0;\n    z-index: -1;\n    background-color: var(--uk-outliner-editing-background, #fafafb);\n}\n.outliner-topic:focus-within .outliner-topic-inner[data-v-6dd927a1],\n  .outliner-topic:focus-within .outliner-topic-dot[data-v-6dd927a1],\n  .outliner-topic:focus-within .outliner-topic-dot[data-v-6dd927a1]::before,\n  .outliner-topic:focus-within .outliner-topic-title[data-v-6dd927a1],\n  .outliner-topic:focus-within .outliner-reached-limited-container[data-v-6dd927a1],\n  .outliner-topic:focus-within .outliner-topic-inserts[data-v-6dd927a1],\n  .outliner-topic:focus-within .outliner-topic-note[data-v-6dd927a1],\n  .outliner-topic:focus-within .outliner-topic-marker-container[data-v-6dd927a1],\n  .outliner-topic:focus-within .outliner-topic-task-container[data-v-6dd927a1],\n  .outliner-topic:focus-within .outliner-topic-numbering[data-v-6dd927a1],\n  .outliner-topic[data-v-6dd927a1]:focus-within {\n    background-color: var(--uk-outliner-editing-background, #fafafb);\n}\n.outliner-topic:focus-within .outliner-topic-dot[data-v-6dd927a1]::before {\n    box-shadow: 0px 23px var(--uk-outliner-editing-background, #fafafb);\n}\n.outliner-topic:focus-within .outliner-topic-dot[data-v-6dd927a1]:hover {\n    background: var(--uk-outliner-topic-dot-hover, #f6f6f7);\n}\n.outliner-topic[data-v-6dd927a1]:focus-within::before {\n    width: 100%;\n    box-shadow: -1740px 0px 0px var(--uk-outliner-editing-background, #fafafb), -1280px 0px 0px var(--uk-outliner-editing-background, #fafafb), -640px 0px 0px var(--uk-outliner-editing-background, #fafafb), 640px 0px 0px var(--uk-outliner-editing-background, #fafafb), 1280px 0px 0px var(--uk-outliner-editing-background, #fafafb), 1740px 0px 0px var(--uk-outliner-editing-background, #fafafb);\n}\n.outliner-topic-container.topic-selected:not(.topic-dragging) .outliner-topic-outter[data-v-6dd927a1] {\n    background: var(--uk-outliner-selected-background, #e1ebff);\n}\n.outliner-topic-container.topic-selected:not(.topic-dragging) .outliner-reached-limited-container[data-v-6dd927a1],\n  .outliner-topic-container.topic-selected:not(.topic-dragging) .outliner-topic-inserts[data-v-6dd927a1],\n  .outliner-topic-container.topic-selected:not(.topic-dragging) .outliner-topic-note[data-v-6dd927a1],\n  .outliner-topic-container.topic-selected:not(.topic-dragging) .outliner-topic-marker-container[data-v-6dd927a1],\n  .outliner-topic-container.topic-selected:not(.topic-dragging) .outliner-topic-task-container[data-v-6dd927a1],\n  .outliner-topic-container.topic-selected:not(.topic-dragging) .outliner-topic-numbering[data-v-6dd927a1] {\n    background: transparent;\n}\n.outliner-topic-container.topic-selected:not(.topic-dragging) .outliner-topic-dot[data-v-6dd927a1] {\n    border-color: var(--uk-outliner-selected-background, #e1ebff);\n}\n.outliner-topic-container.topic-selected:not(.topic-dragging) .outliner-topic-title[data-v-6dd927a1],\n  .outliner-topic-container.topic-selected:not(.topic-dragging) .outliner-topic-dot[data-v-6dd927a1],\n  .outliner-topic-container.topic-selected:not(.topic-dragging) .outliner-topic-dot[data-v-6dd927a1]::before {\n    background-color: transparent;\n    box-shadow: none;\n}\n.outliner-topic-container.topic-selected:not(.topic-dragging) .outliner-topic-dot[data-v-6dd927a1]:hover {\n    background: rgba(0, 0, 0, 0.05);\n}\n}\n",
        "",
      ]);
      const p = c;
    },
    61667: (e) => {
      "use strict";
      e.exports = function (e, t) {
        return (
          t || (t = {}),
          "string" != typeof (e = e && e.__esModule ? e.default : e)
            ? e
            : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
              t.hash && (e += t.hash),
              /["'() \t\n]/.test(e) || t.needQuotes
                ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
                : e)
        );
      };
    },
    32667: (e, t, n) => {
      var i = n(9950),
        o = n(25419);
      n(17381);
      function r(e) {
        return null == e;
      }
      function a(e) {
        ((e = (function (e) {
          var t = {};
          for (var n in e) t[n] = e[n];
          return t;
        })(e || {})).whiteList = e.whiteList || i.whiteList),
          (e.onAttr = e.onAttr || i.onAttr),
          (e.onIgnoreAttr = e.onIgnoreAttr || i.onIgnoreAttr),
          (e.safeAttrValue = e.safeAttrValue || i.safeAttrValue),
          (this.options = e);
      }
      (a.prototype.process = function (e) {
        if (!(e = (e = e || "").toString())) return "";
        var t = this.options,
          n = t.whiteList,
          i = t.onAttr,
          a = t.onIgnoreAttr,
          l = t.safeAttrValue;
        return o(e, function (e, t, o, d, c) {
          var s = n[o],
            u = !1;
          if (
            (!0 === s
              ? (u = s)
              : "function" == typeof s
                ? (u = s(d))
                : s instanceof RegExp && (u = s.test(d)),
            !0 !== u && (u = !1),
            (d = l(o, d)))
          ) {
            var p,
              g = { position: t, sourcePosition: e, source: c, isWhite: u };
            return u
              ? r((p = i(o, d, g)))
                ? o + ":" + d
                : p
              : r((p = a(o, d, g)))
                ? void 0
                : p;
          }
        });
      }),
        (e.exports = a);
    },
    9950: (e, t) => {
      function n() {
        var e = {
          "align-content": !1,
          "align-items": !1,
          "align-self": !1,
          "alignment-adjust": !1,
          "alignment-baseline": !1,
          all: !1,
          "anchor-point": !1,
          animation: !1,
          "animation-delay": !1,
          "animation-direction": !1,
          "animation-duration": !1,
          "animation-fill-mode": !1,
          "animation-iteration-count": !1,
          "animation-name": !1,
          "animation-play-state": !1,
          "animation-timing-function": !1,
          azimuth: !1,
          "backface-visibility": !1,
          background: !0,
          "background-attachment": !0,
          "background-clip": !0,
          "background-color": !0,
          "background-image": !0,
          "background-origin": !0,
          "background-position": !0,
          "background-repeat": !0,
          "background-size": !0,
          "baseline-shift": !1,
          binding: !1,
          bleed: !1,
          "bookmark-label": !1,
          "bookmark-level": !1,
          "bookmark-state": !1,
          border: !0,
          "border-bottom": !0,
          "border-bottom-color": !0,
          "border-bottom-left-radius": !0,
          "border-bottom-right-radius": !0,
          "border-bottom-style": !0,
          "border-bottom-width": !0,
          "border-collapse": !0,
          "border-color": !0,
          "border-image": !0,
          "border-image-outset": !0,
          "border-image-repeat": !0,
          "border-image-slice": !0,
          "border-image-source": !0,
          "border-image-width": !0,
          "border-left": !0,
          "border-left-color": !0,
          "border-left-style": !0,
          "border-left-width": !0,
          "border-radius": !0,
          "border-right": !0,
          "border-right-color": !0,
          "border-right-style": !0,
          "border-right-width": !0,
          "border-spacing": !0,
          "border-style": !0,
          "border-top": !0,
          "border-top-color": !0,
          "border-top-left-radius": !0,
          "border-top-right-radius": !0,
          "border-top-style": !0,
          "border-top-width": !0,
          "border-width": !0,
          bottom: !1,
          "box-decoration-break": !0,
          "box-shadow": !0,
          "box-sizing": !0,
          "box-snap": !0,
          "box-suppress": !0,
          "break-after": !0,
          "break-before": !0,
          "break-inside": !0,
          "caption-side": !1,
          chains: !1,
          clear: !0,
          clip: !1,
          "clip-path": !1,
          "clip-rule": !1,
          color: !0,
          "color-interpolation-filters": !0,
          "column-count": !1,
          "column-fill": !1,
          "column-gap": !1,
          "column-rule": !1,
          "column-rule-color": !1,
          "column-rule-style": !1,
          "column-rule-width": !1,
          "column-span": !1,
          "column-width": !1,
          columns: !1,
          contain: !1,
          content: !1,
          "counter-increment": !1,
          "counter-reset": !1,
          "counter-set": !1,
          crop: !1,
          cue: !1,
          "cue-after": !1,
          "cue-before": !1,
          cursor: !1,
          direction: !1,
          display: !0,
          "display-inside": !0,
          "display-list": !0,
          "display-outside": !0,
          "dominant-baseline": !1,
          elevation: !1,
          "empty-cells": !1,
          filter: !1,
          flex: !1,
          "flex-basis": !1,
          "flex-direction": !1,
          "flex-flow": !1,
          "flex-grow": !1,
          "flex-shrink": !1,
          "flex-wrap": !1,
          float: !1,
          "float-offset": !1,
          "flood-color": !1,
          "flood-opacity": !1,
          "flow-from": !1,
          "flow-into": !1,
          font: !0,
          "font-family": !0,
          "font-feature-settings": !0,
          "font-kerning": !0,
          "font-language-override": !0,
          "font-size": !0,
          "font-size-adjust": !0,
          "font-stretch": !0,
          "font-style": !0,
          "font-synthesis": !0,
          "font-variant": !0,
          "font-variant-alternates": !0,
          "font-variant-caps": !0,
          "font-variant-east-asian": !0,
          "font-variant-ligatures": !0,
          "font-variant-numeric": !0,
          "font-variant-position": !0,
          "font-weight": !0,
          grid: !1,
          "grid-area": !1,
          "grid-auto-columns": !1,
          "grid-auto-flow": !1,
          "grid-auto-rows": !1,
          "grid-column": !1,
          "grid-column-end": !1,
          "grid-column-start": !1,
          "grid-row": !1,
          "grid-row-end": !1,
          "grid-row-start": !1,
          "grid-template": !1,
          "grid-template-areas": !1,
          "grid-template-columns": !1,
          "grid-template-rows": !1,
          "hanging-punctuation": !1,
          height: !0,
          hyphens: !1,
          icon: !1,
          "image-orientation": !1,
          "image-resolution": !1,
          "ime-mode": !1,
          "initial-letters": !1,
          "inline-box-align": !1,
          "justify-content": !1,
          "justify-items": !1,
          "justify-self": !1,
          left: !1,
          "letter-spacing": !0,
          "lighting-color": !0,
          "line-box-contain": !1,
          "line-break": !1,
          "line-grid": !1,
          "line-height": !1,
          "line-snap": !1,
          "line-stacking": !1,
          "line-stacking-ruby": !1,
          "line-stacking-shift": !1,
          "line-stacking-strategy": !1,
          "list-style": !0,
          "list-style-image": !0,
          "list-style-position": !0,
          "list-style-type": !0,
          margin: !0,
          "margin-bottom": !0,
          "margin-left": !0,
          "margin-right": !0,
          "margin-top": !0,
          "marker-offset": !1,
          "marker-side": !1,
          marks: !1,
          mask: !1,
          "mask-box": !1,
          "mask-box-outset": !1,
          "mask-box-repeat": !1,
          "mask-box-slice": !1,
          "mask-box-source": !1,
          "mask-box-width": !1,
          "mask-clip": !1,
          "mask-image": !1,
          "mask-origin": !1,
          "mask-position": !1,
          "mask-repeat": !1,
          "mask-size": !1,
          "mask-source-type": !1,
          "mask-type": !1,
          "max-height": !0,
          "max-lines": !1,
          "max-width": !0,
          "min-height": !0,
          "min-width": !0,
          "move-to": !1,
          "nav-down": !1,
          "nav-index": !1,
          "nav-left": !1,
          "nav-right": !1,
          "nav-up": !1,
          "object-fit": !1,
          "object-position": !1,
          opacity: !1,
          order: !1,
          orphans: !1,
          outline: !1,
          "outline-color": !1,
          "outline-offset": !1,
          "outline-style": !1,
          "outline-width": !1,
          overflow: !1,
          "overflow-wrap": !1,
          "overflow-x": !1,
          "overflow-y": !1,
          padding: !0,
          "padding-bottom": !0,
          "padding-left": !0,
          "padding-right": !0,
          "padding-top": !0,
          page: !1,
          "page-break-after": !1,
          "page-break-before": !1,
          "page-break-inside": !1,
          "page-policy": !1,
          pause: !1,
          "pause-after": !1,
          "pause-before": !1,
          perspective: !1,
          "perspective-origin": !1,
          pitch: !1,
          "pitch-range": !1,
          "play-during": !1,
          position: !1,
          "presentation-level": !1,
          quotes: !1,
          "region-fragment": !1,
          resize: !1,
          rest: !1,
          "rest-after": !1,
          "rest-before": !1,
          richness: !1,
          right: !1,
          rotation: !1,
          "rotation-point": !1,
          "ruby-align": !1,
          "ruby-merge": !1,
          "ruby-position": !1,
          "shape-image-threshold": !1,
          "shape-outside": !1,
          "shape-margin": !1,
          size: !1,
          speak: !1,
          "speak-as": !1,
          "speak-header": !1,
          "speak-numeral": !1,
          "speak-punctuation": !1,
          "speech-rate": !1,
          stress: !1,
          "string-set": !1,
          "tab-size": !1,
          "table-layout": !1,
          "text-align": !0,
          "text-align-last": !0,
          "text-combine-upright": !0,
          "text-decoration": !0,
          "text-decoration-color": !0,
          "text-decoration-line": !0,
          "text-decoration-skip": !0,
          "text-decoration-style": !0,
          "text-emphasis": !0,
          "text-emphasis-color": !0,
          "text-emphasis-position": !0,
          "text-emphasis-style": !0,
          "text-height": !0,
          "text-indent": !0,
          "text-justify": !0,
          "text-orientation": !0,
          "text-overflow": !0,
          "text-shadow": !0,
          "text-space-collapse": !0,
          "text-transform": !0,
          "text-underline-position": !0,
          "text-wrap": !0,
          top: !1,
          transform: !1,
          "transform-origin": !1,
          "transform-style": !1,
          transition: !1,
          "transition-delay": !1,
          "transition-duration": !1,
          "transition-property": !1,
          "transition-timing-function": !1,
          "unicode-bidi": !1,
          "vertical-align": !1,
          visibility: !1,
          "voice-balance": !1,
          "voice-duration": !1,
          "voice-family": !1,
          "voice-pitch": !1,
          "voice-range": !1,
          "voice-rate": !1,
          "voice-stress": !1,
          "voice-volume": !1,
          volume: !1,
          "white-space": !1,
          widows: !1,
          width: !0,
          "will-change": !1,
          "word-break": !0,
          "word-spacing": !0,
          "word-wrap": !0,
          "wrap-flow": !1,
          "wrap-through": !1,
          "writing-mode": !1,
          "z-index": !1,
        };
        return e;
      }
      var i = /javascript\s*\:/gim;
      (t.whiteList = n()),
        (t.getDefaultWhiteList = n),
        (t.onAttr = function (e, t, n) {}),
        (t.onIgnoreAttr = function (e, t, n) {}),
        (t.safeAttrValue = function (e, t) {
          return i.test(t) ? "" : t;
        });
    },
    29970: (e, t, n) => {
      var i = n(9950),
        o = n(32667);
      for (var r in (((t = e.exports =
        function (e, t) {
          return new o(t).process(e);
        }).FilterCSS = o),
      i))
        t[r] = i[r];
      "undefined" != typeof window && (window.filterCSS = e.exports);
    },
    25419: (e, t, n) => {
      var i = n(17381);
      e.exports = function (e, t) {
        ";" !== (e = i.trimRight(e))[e.length - 1] && (e += ";");
        var n = e.length,
          o = !1,
          r = 0,
          a = 0,
          l = "";
        function d() {
          if (!o) {
            var n = i.trim(e.slice(r, a)),
              d = n.indexOf(":");
            if (-1 !== d) {
              var c = i.trim(n.slice(0, d)),
                s = i.trim(n.slice(d + 1));
              if (c) {
                var u = t(r, l.length, c, s, n);
                u && (l += u + "; ");
              }
            }
          }
          r = a + 1;
        }
        for (; a < n; a++) {
          var c = e[a];
          if ("/" === c && "*" === e[a + 1]) {
            var s = e.indexOf("*/", a + 2);
            if (-1 === s) break;
            (r = (a = s + 1) + 1), (o = !1);
          } else
            "(" === c
              ? (o = !0)
              : ")" === c
                ? (o = !1)
                : ";" === c
                  ? o || d()
                  : "\n" === c && d();
        }
        return i.trim(l);
      };
    },
    17381: (e) => {
      e.exports = {
        indexOf: function (e, t) {
          var n, i;
          if (Array.prototype.indexOf) return e.indexOf(t);
          for (n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
          return -1;
        },
        forEach: function (e, t, n) {
          var i, o;
          if (Array.prototype.forEach) return e.forEach(t, n);
          for (i = 0, o = e.length; i < o; i++) t.call(n, e[i], i, e);
        },
        trim: function (e) {
          return String.prototype.trim
            ? e.trim()
            : e.replace(/(^\s*)|(\s*$)/g, "");
        },
        trimRight: function (e) {
          return String.prototype.trimRight
            ? e.trimRight()
            : e.replace(/(\s*$)/g, "");
        },
      };
    },
    2201: (e, t, n) => {
      "use strict";
      var i,
        o = n(15893),
        r = n(75234),
        a = n(21209),
        l = n(22415),
        d =
          (i = n(64825)) && "object" == typeof i && "default" in i
            ? i.default
            : i;
      function c(e, t) {
        void 0 === t && (t = {});
        var n = this,
          i = 4,
          c = !1;
        (this.margin = t.margin || -1),
          (this.scrollWhenOutside = t.scrollWhenOutside || !1);
        var u = {},
          p = l.createPointCB(u),
          g = d(),
          h = !1;
        window.addEventListener("mousemove", p, !1),
          window.addEventListener("touchmove", p, !1),
          isNaN(t.maxSpeed) || (i = t.maxSpeed),
          (this.autoScroll = o.boolean(t.autoScroll)),
          (this.syncMove = o.boolean(t.syncMove, !1)),
          (this.destroy = function (t) {
            window.removeEventListener("mousemove", p, !1),
              window.removeEventListener("touchmove", p, !1),
              window.removeEventListener("mousedown", T, !1),
              window.removeEventListener("touchstart", T, !1),
              window.removeEventListener("mouseup", x, !1),
              window.removeEventListener("touchend", x, !1),
              window.removeEventListener("pointerup", x, !1),
              window.removeEventListener("mouseleave", w, !1),
              window.removeEventListener("mousemove", C, !1),
              window.removeEventListener("touchmove", C, !1),
              window.removeEventListener("scroll", y, !0),
              (e = []),
              t && k();
          }),
          (this.add = function () {
            for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            return a.addElements.apply(void 0, [e].concat(t)), this;
          }),
          (this.remove = function () {
            for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
            return a.removeElements.apply(void 0, [e].concat(t));
          });
        var v,
          f,
          m = null;
        "[object Array]" !== Object.prototype.toString.call(e) && (e = [e]),
          (f = e),
          (e = []),
          f.forEach(function (e) {
            e === window ? (m = window) : n.add(e);
          }),
          Object.defineProperties(this, {
            down: {
              get: function () {
                return h;
              },
            },
            maxSpeed: {
              get: function () {
                return i;
              },
            },
            point: {
              get: function () {
                return u;
              },
            },
            scrolling: {
              get: function () {
                return c;
              },
            },
          });
        var b,
          I = null;
        function y(t) {
          for (var n = 0; n < e.length; n++)
            if (e[n] === t.target) {
              c = !0;
              break;
            }
          c &&
            r.requestAnimationFrame(function () {
              return (c = !1);
            });
        }
        function T() {
          h = !0;
        }
        function x() {
          (h = !1), k();
        }
        function k() {
          r.cancelAnimationFrame(b), r.cancelAnimationFrame(v);
        }
        function w() {
          h = !1;
        }
        function S() {
          for (var t = null, n = 0; n < e.length; n++) s(u, e[n]) && (t = e[n]);
          return t;
        }
        function C(t) {
          if (n.autoScroll() && !t.dispatched) {
            var i = t.target,
              o = document.body;
            I && !s(u, I) && (n.scrollWhenOutside || (I = null)),
              i && i.parentNode === o
                ? (i = S())
                : (i = (function (t) {
                    if (!t) return null;
                    if (I === t) return t;
                    if (a.hasElement(e, t)) return t;
                    for (; (t = t.parentNode); )
                      if (a.hasElement(e, t)) return t;
                    return null;
                  })(i)) || (i = S()),
              i && i !== I && (I = i),
              m &&
                (r.cancelAnimationFrame(v), (v = r.requestAnimationFrame(E))),
              I &&
                (r.cancelAnimationFrame(b), (b = r.requestAnimationFrame(L)));
          }
        }
        function E() {
          M(m), r.cancelAnimationFrame(v), (v = r.requestAnimationFrame(E));
        }
        function L() {
          I &&
            (M(I), r.cancelAnimationFrame(b), (b = r.requestAnimationFrame(L)));
        }
        function M(e) {
          var t,
            i,
            o = l.getClientRect(e);
          (t =
            u.x < o.left + n.margin
              ? Math.floor(
                  Math.max(-1, (u.x - o.left) / n.margin - 1) * n.maxSpeed,
                )
              : u.x > o.right - n.margin
                ? Math.ceil(
                    Math.min(1, (u.x - o.right) / n.margin + 1) * n.maxSpeed,
                  )
                : 0),
            (i =
              u.y < o.top + n.margin
                ? Math.floor(
                    Math.max(-1, (u.y - o.top) / n.margin - 1) * n.maxSpeed,
                  )
                : u.y > o.bottom - n.margin
                  ? Math.ceil(
                      Math.min(1, (u.y - o.bottom) / n.margin + 1) * n.maxSpeed,
                    )
                  : 0),
            n.syncMove() &&
              g.dispatch(e, {
                pageX: u.pageX + t,
                pageY: u.pageY + i,
                clientX: u.x + t,
                clientY: u.y + i,
              }),
            setTimeout(function () {
              i &&
                (function (e, t) {
                  e === window
                    ? window.scrollTo(e.pageXOffset, e.pageYOffset + t)
                    : (e.scrollTop += t);
                })(e, i),
                t &&
                  (function (e, t) {
                    e === window
                      ? window.scrollTo(e.pageXOffset + t, e.pageYOffset)
                      : (e.scrollLeft += t);
                  })(e, t);
            });
        }
        window.addEventListener("mousedown", T, !1),
          window.addEventListener("touchstart", T, !1),
          window.addEventListener("mouseup", x, !1),
          window.addEventListener("touchend", x, !1),
          window.addEventListener("pointerup", x, !1),
          window.addEventListener("mousemove", C, !1),
          window.addEventListener("touchmove", C, !1),
          window.addEventListener("mouseleave", w, !1),
          window.addEventListener("scroll", y, !0);
      }
      function s(e, t, n) {
        return n
          ? e.y > n.top && e.y < n.bottom && e.x > n.left && e.x < n.right
          : l.pointInside(e, t);
      }
      e.exports = function (e, t) {
        return new c(e, t);
      };
    },
    64825: (e) => {
      "use strict";
      var t,
        n = void 0;
      "function" != typeof Object.create
        ? ((t = function () {}),
          (n = function (e, n) {
            if (e !== Object(e) && null !== e)
              throw TypeError("Argument must be an object, or null");
            t.prototype = e || {};
            var i = new t();
            return (
              (t.prototype = null),
              void 0 !== n && Object.defineProperties(i, n),
              null === e && (i.__proto__ = null),
              i
            );
          }))
        : (n = Object.create);
      var i = n,
        o = [
          "altKey",
          "button",
          "buttons",
          "clientX",
          "clientY",
          "ctrlKey",
          "metaKey",
          "movementX",
          "movementY",
          "offsetX",
          "offsetY",
          "pageX",
          "pageY",
          "region",
          "relatedTarget",
          "screenX",
          "screenY",
          "shiftKey",
          "which",
          "x",
          "y",
        ];
      function r(e, t) {
        t = t || {};
        for (var n = i(e), r = 0; r < o.length; r++)
          void 0 !== t[o[r]] && (n[o[r]] = t[o[r]]);
        return n;
      }
      function a(e, t) {
        console.log("data ", t),
          (e.data = t || {}),
          (e.dispatched = "mousemove");
      }
      e.exports = function (e) {
        var t = {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          ctrlKey: !1,
          shiftKey: !1,
          altKey: !1,
          metaKey: !1,
          button: 0,
          buttons: 1,
          relatedTarget: null,
          region: null,
        };
        function n(e) {
          for (var n = 0; n < o.length; n++) t[o[n]] = e[o[n]];
        }
        return (
          void 0 !== e && e.addEventListener("mousemove", n),
          {
            destroy: function () {
              e && e.removeEventListener("mousemove", n, !1), (t = null);
            },
            dispatch: MouseEvent
              ? function (e, n, i) {
                  var o = new MouseEvent("mousemove", r(t, n));
                  return a(o, i), e.dispatchEvent(o);
                }
              : "function" == typeof document.createEvent
                ? function (e, n, i) {
                    var o = r(t, n),
                      l = document.createEvent("MouseEvents");
                    return (
                      l.initMouseEvent(
                        "mousemove",
                        !0,
                        !0,
                        window,
                        0,
                        o.screenX,
                        o.screenY,
                        o.clientX,
                        o.clientY,
                        o.ctrlKey,
                        o.altKey,
                        o.shiftKey,
                        o.metaKey,
                        o.button,
                        o.relatedTarget,
                      ),
                      a(l, i),
                      e.dispatchEvent(l)
                    );
                  }
                : "function" == typeof document.createEventObject
                  ? function (e, n, i) {
                      var o = document.createEventObject(),
                        l = r(t, n);
                      for (var d in l) o[d] = l[d];
                      return a(o, i), e.dispatchEvent(o);
                    }
                  : void 0,
          }
        );
      };
    },
    22415: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        o =
          (i = n(6367)) && "object" == typeof i && "default" in i
            ? i.default
            : i;
      function r(e) {
        if (e === window)
          return (function () {
            var e = {
              top: { value: 0, enumerable: !0 },
              left: { value: 0, enumerable: !0 },
              right: { value: window.innerWidth, enumerable: !0 },
              bottom: { value: window.innerHeight, enumerable: !0 },
              width: { value: window.innerWidth, enumerable: !0 },
              height: { value: window.innerHeight, enumerable: !0 },
              x: { value: 0, enumerable: !0 },
              y: { value: 0, enumerable: !0 },
            };
            if (Object.create) return Object.create({}, e);
            var t = {};
            return Object.defineProperties(t, e), t;
          })();
        try {
          var t = e.getBoundingClientRect();
          return void 0 === t.x && ((t.x = t.left), (t.y = t.top)), t;
        } catch (t) {
          throw new TypeError("Can't call getBoundingClientRect on " + e);
        }
      }
      (t.createPointCB = o),
        (t.getClientRect = r),
        (t.pointInside = function (e, t) {
          var n = r(t);
          return e.y > n.top && e.y < n.bottom && e.x > n.left && e.x < n.right;
        });
    },
    21209: (e, t, n) => {
      "use strict";
      function i(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = i(n(44622)),
        r = i(n(10448)),
        a = i(n(63847)),
        l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol
                  ? "symbol"
                  : typeof e;
              },
        d = function (e) {
          return (
            null != e &&
            "object" === (void 0 === e ? "undefined" : l(e)) &&
            1 === e.nodeType &&
            "object" === l(e.style) &&
            "object" === l(e.ownerDocument)
          );
        };
      function c(e) {
        if ("string" == typeof e)
          try {
            return document.querySelector(e);
          } catch (e) {
            throw e;
          }
        else if (a(e)) return e;
      }
      function s(e, t) {
        if (((t = g(t, !0)), !d(t))) return -1;
        for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
        return -1;
      }
      function u(e, t) {
        return -1 !== s(e, t);
      }
      function p(e) {
        if (!e) return [];
        try {
          return "string" == typeof e
            ? o(document.querySelectorAll(e))
            : r(e)
              ? e.map(g)
              : void 0 === e.length
                ? [g(e)]
                : o(e, g);
        } catch (e) {
          throw new Error(e);
        }
      }
      function g(e, t) {
        if ("string" == typeof e)
          try {
            return document.querySelector(e);
          } catch (e) {
            throw e;
          }
        if (!d(e) && !t) throw new TypeError(e + " is not a DOM element.");
        return e;
      }
      (t.indexOfElement = s),
        (t.hasElement = u),
        (t.domListOf = p),
        (t.concatElementLists = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return e.reduce(function (e, t) {
            return t.length ? e : e.concat(p(t));
          }, []);
        }),
        (t.addElements = function (e) {
          for (var t = [], n = arguments.length - 1; n-- > 0; )
            t[n] = arguments[n + 1];
          return (function (e, t) {
            for (var n = 0; n < t.length; n++) u(e, t[n]) || e.push(t[n]);
            return t;
          })(e, (t = t.map(g)));
        }),
        (t.removeElements = function (e) {
          for (var t = [], n = arguments.length - 1; n-- > 0; )
            t[n] = arguments[n + 1];
          return t.map(g).reduce(function (t, n) {
            var i = s(e, n);
            return -1 !== i ? t.concat(e.splice(i, 1)) : t;
          }, []);
        }),
        (t.resolveElement = g),
        (t.select = c),
        (t.selectAll = function (e) {
          return "string" == typeof e
            ? Array.prototype.slice.apply(document.querySelectorAll(e))
            : r(e)
              ? e.map(c)
              : "length" in e
                ? o(e).map(c)
                : void 0;
        });
    },
    37529: (e) => {
      var t = -1,
        n = 1,
        i = 0;
      function o(e, c, s, u) {
        if (e === c) return e ? [[i, e]] : [];
        if (null != s) {
          var p = (function (e, t, n) {
            var i = "number" == typeof n ? { index: n, length: 0 } : n.oldRange,
              o = "number" == typeof n ? null : n.newRange,
              r = e.length,
              a = t.length;
            if (0 === i.length && (null === o || 0 === o.length)) {
              var l = i.index,
                d = e.slice(0, l),
                c = e.slice(l),
                s = o ? o.index : null,
                u = l + a - r;
              if ((null === s || s === u) && !(u < 0 || u > a)) {
                var p = t.slice(0, u);
                if ((f = t.slice(u)) === c) {
                  var h = Math.min(l, u);
                  if ((b = d.slice(0, h)) === (y = p.slice(0, h)))
                    return g(b, d.slice(h), p.slice(h), c);
                }
              }
              if (null === s || s === l) {
                var v = l,
                  f = ((p = t.slice(0, v)), t.slice(v));
                if (p === d) {
                  var m = Math.min(r - v, a - v);
                  if (
                    (I = c.slice(c.length - m)) === (T = f.slice(f.length - m))
                  )
                    return g(
                      d,
                      c.slice(0, c.length - m),
                      f.slice(0, f.length - m),
                      I,
                    );
                }
              }
            }
            if (i.length > 0 && o && 0 === o.length) {
              var b = e.slice(0, i.index),
                I = e.slice(i.index + i.length);
              if (!(a < (h = b.length) + (m = I.length))) {
                var y = t.slice(0, h),
                  T = t.slice(a - m);
                if (b === y && I === T)
                  return g(b, e.slice(h, r - m), t.slice(h, a - m), I);
              }
            }
            return null;
          })(e, c, s);
          if (p) return p;
        }
        var h = a(e, c),
          v = e.substring(0, h);
        h = l((e = e.substring(h)), (c = c.substring(h)));
        var f = e.substring(e.length - h),
          m = (function (e, d) {
            var c;
            if (!e) return [[n, d]];
            if (!d) return [[t, e]];
            var s = e.length > d.length ? e : d,
              u = e.length > d.length ? d : e,
              p = s.indexOf(u);
            if (-1 !== p)
              return (
                (c = [
                  [n, s.substring(0, p)],
                  [i, u],
                  [n, s.substring(p + u.length)],
                ]),
                e.length > d.length && (c[0][0] = c[2][0] = t),
                c
              );
            if (1 === u.length)
              return [
                [t, e],
                [n, d],
              ];
            var g = (function (e, t) {
              var n = e.length > t.length ? e : t,
                i = e.length > t.length ? t : e;
              if (n.length < 4 || 2 * i.length < n.length) return null;
              function o(e, t, n) {
                for (
                  var i,
                    o,
                    r,
                    d,
                    c = e.substring(n, n + Math.floor(e.length / 4)),
                    s = -1,
                    u = "";
                  -1 !== (s = t.indexOf(c, s + 1));

                ) {
                  var p = a(e.substring(n), t.substring(s)),
                    g = l(e.substring(0, n), t.substring(0, s));
                  u.length < g + p &&
                    ((u = t.substring(s - g, s) + t.substring(s, s + p)),
                    (i = e.substring(0, n - g)),
                    (o = e.substring(n + p)),
                    (r = t.substring(0, s - g)),
                    (d = t.substring(s + p)));
                }
                return 2 * u.length >= e.length ? [i, o, r, d, u] : null;
              }
              var r,
                d,
                c,
                s,
                u,
                p = o(n, i, Math.ceil(n.length / 4)),
                g = o(n, i, Math.ceil(n.length / 2));
              if (!p && !g) return null;
              r = g ? (p && p[4].length > g[4].length ? p : g) : p;
              e.length > t.length
                ? ((d = r[0]), (c = r[1]), (s = r[2]), (u = r[3]))
                : ((s = r[0]), (u = r[1]), (d = r[2]), (c = r[3]));
              var h = r[4];
              return [d, c, s, u, h];
            })(e, d);
            if (g) {
              var h = g[0],
                v = g[1],
                f = g[2],
                m = g[3],
                b = g[4],
                I = o(h, f),
                y = o(v, m);
              return I.concat([[i, b]], y);
            }
            return (function (e, i) {
              for (
                var o = e.length,
                  a = i.length,
                  l = Math.ceil((o + a) / 2),
                  d = l,
                  c = 2 * l,
                  s = new Array(c),
                  u = new Array(c),
                  p = 0;
                p < c;
                p++
              )
                (s[p] = -1), (u[p] = -1);
              (s[d + 1] = 0), (u[d + 1] = 0);
              for (
                var g = o - a,
                  h = g % 2 != 0,
                  v = 0,
                  f = 0,
                  m = 0,
                  b = 0,
                  I = 0;
                I < l;
                I++
              ) {
                for (var y = -I + v; y <= I - f; y += 2) {
                  for (
                    var T = d + y,
                      x =
                        (E =
                          y === -I || (y !== I && s[T - 1] < s[T + 1])
                            ? s[T + 1]
                            : s[T - 1] + 1) - y;
                    E < o && x < a && e.charAt(E) === i.charAt(x);

                  )
                    E++, x++;
                  if (((s[T] = E), E > o)) f += 2;
                  else if (x > a) v += 2;
                  else if (h) {
                    if ((S = d + g - y) >= 0 && S < c && -1 !== u[S])
                      if (E >= (w = o - u[S])) return r(e, i, E, x);
                  }
                }
                for (var k = -I + m; k <= I - b; k += 2) {
                  for (
                    var w,
                      S = d + k,
                      C =
                        (w =
                          k === -I || (k !== I && u[S - 1] < u[S + 1])
                            ? u[S + 1]
                            : u[S - 1] + 1) - k;
                    w < o &&
                    C < a &&
                    e.charAt(o - w - 1) === i.charAt(a - C - 1);

                  )
                    w++, C++;
                  if (((u[S] = w), w > o)) b += 2;
                  else if (C > a) m += 2;
                  else if (!h) {
                    if ((T = d + g - k) >= 0 && T < c && -1 !== s[T]) {
                      var E;
                      x = d + (E = s[T]) - T;
                      if (E >= (w = o - w)) return r(e, i, E, x);
                    }
                  }
                }
              }
              return [
                [t, e],
                [n, i],
              ];
            })(e, d);
          })(
            (e = e.substring(0, e.length - h)),
            (c = c.substring(0, c.length - h)),
          );
        return v && m.unshift([i, v]), f && m.push([i, f]), d(m, u), m;
      }
      function r(e, t, n, i) {
        var r = e.substring(0, n),
          a = t.substring(0, i),
          l = e.substring(n),
          d = t.substring(i),
          c = o(r, a),
          s = o(l, d);
        return c.concat(s);
      }
      function a(e, t) {
        if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0;
        for (var n = 0, i = Math.min(e.length, t.length), o = i, r = 0; n < o; )
          e.substring(r, o) == t.substring(r, o) ? (r = n = o) : (i = o),
            (o = Math.floor((i - n) / 2 + n));
        return c(e.charCodeAt(o - 1)) && o--, o;
      }
      function l(e, t) {
        if (!e || !t || e.slice(-1) !== t.slice(-1)) return 0;
        for (var n = 0, i = Math.min(e.length, t.length), o = i, r = 0; n < o; )
          e.substring(e.length - o, e.length - r) ==
          t.substring(t.length - o, t.length - r)
            ? (r = n = o)
            : (i = o),
            (o = Math.floor((i - n) / 2 + n));
        return s(e.charCodeAt(e.length - o)) && o--, o;
      }
      function d(e, o) {
        e.push([i, ""]);
        for (var r, c = 0, s = 0, g = 0, h = "", v = ""; c < e.length; )
          if (c < e.length - 1 && !e[c][1]) e.splice(c, 1);
          else
            switch (e[c][0]) {
              case n:
                g++, (v += e[c][1]), c++;
                break;
              case t:
                s++, (h += e[c][1]), c++;
                break;
              case i:
                var f = c - g - s - 1;
                if (o) {
                  if (f >= 0 && p(e[f][1])) {
                    var m = e[f][1].slice(-1);
                    if (
                      ((e[f][1] = e[f][1].slice(0, -1)),
                      (h = m + h),
                      (v = m + v),
                      !e[f][1])
                    ) {
                      e.splice(f, 1), c--;
                      var b = f - 1;
                      e[b] && e[b][0] === n && (g++, (v = e[b][1] + v), b--),
                        e[b] && e[b][0] === t && (s++, (h = e[b][1] + h), b--),
                        (f = b);
                    }
                  }
                  if (u(e[c][1])) {
                    m = e[c][1].charAt(0);
                    (e[c][1] = e[c][1].slice(1)), (h += m), (v += m);
                  }
                }
                if (c < e.length - 1 && !e[c][1]) {
                  e.splice(c, 1);
                  break;
                }
                if (h.length > 0 || v.length > 0) {
                  h.length > 0 &&
                    v.length > 0 &&
                    (0 !== (r = a(v, h)) &&
                      (f >= 0
                        ? (e[f][1] += v.substring(0, r))
                        : (e.splice(0, 0, [i, v.substring(0, r)]), c++),
                      (v = v.substring(r)),
                      (h = h.substring(r))),
                    0 !== (r = l(v, h)) &&
                      ((e[c][1] = v.substring(v.length - r) + e[c][1]),
                      (v = v.substring(0, v.length - r)),
                      (h = h.substring(0, h.length - r))));
                  var I = g + s;
                  0 === h.length && 0 === v.length
                    ? (e.splice(c - I, I), (c -= I))
                    : 0 === h.length
                      ? (e.splice(c - I, I, [n, v]), (c = c - I + 1))
                      : 0 === v.length
                        ? (e.splice(c - I, I, [t, h]), (c = c - I + 1))
                        : (e.splice(c - I, I, [t, h], [n, v]), (c = c - I + 2));
                }
                0 !== c && e[c - 1][0] === i
                  ? ((e[c - 1][1] += e[c][1]), e.splice(c, 1))
                  : c++,
                  (g = 0),
                  (s = 0),
                  (h = ""),
                  (v = "");
            }
        "" === e[e.length - 1][1] && e.pop();
        var y = !1;
        for (c = 1; c < e.length - 1; )
          e[c - 1][0] === i &&
            e[c + 1][0] === i &&
            (e[c][1].substring(e[c][1].length - e[c - 1][1].length) ===
            e[c - 1][1]
              ? ((e[c][1] =
                  e[c - 1][1] +
                  e[c][1].substring(0, e[c][1].length - e[c - 1][1].length)),
                (e[c + 1][1] = e[c - 1][1] + e[c + 1][1]),
                e.splice(c - 1, 1),
                (y = !0))
              : e[c][1].substring(0, e[c + 1][1].length) == e[c + 1][1] &&
                ((e[c - 1][1] += e[c + 1][1]),
                (e[c][1] = e[c][1].substring(e[c + 1][1].length) + e[c + 1][1]),
                e.splice(c + 1, 1),
                (y = !0))),
            c++;
        y && d(e, o);
      }
      function c(e) {
        return e >= 55296 && e <= 56319;
      }
      function s(e) {
        return e >= 56320 && e <= 57343;
      }
      function u(e) {
        return s(e.charCodeAt(0));
      }
      function p(e) {
        return c(e.charCodeAt(e.length - 1));
      }
      function g(e, o, r, a) {
        return p(e) || u(a)
          ? null
          : (function (e) {
              for (var t = [], n = 0; n < e.length; n++)
                e[n][1].length > 0 && t.push(e[n]);
              return t;
            })([
              [i, e],
              [t, o],
              [n, r],
              [i, a],
            ]);
      }
      function h(e, t, n) {
        return o(e, t, n, !0);
      }
      (h.INSERT = n), (h.DELETE = t), (h.EQUAL = i), (e.exports = h);
    },
    10448: (e) => {
      var t = Array.isArray,
        n = Object.prototype.toString;
      e.exports =
        t ||
        function (e) {
          return !!e && "[object Array]" == n.call(e);
        };
    },
    63847: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => o });
      var i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol
                ? "symbol"
                : typeof e;
            };
      function o(e) {
        return (
          null != e &&
          "object" === (void 0 === e ? "undefined" : i(e)) &&
          1 === e.nodeType &&
          "object" === i(e.style) &&
          "object" === i(e.ownerDocument)
        );
      }
    },
    52353: (e) => {
      e.exports = function (e) {
        return void 0 === e;
      };
    },
    70716: (e, t, n) => {
      "use strict";
      var i;
      n.d(t, { v: () => i, w: () => o }),
        (function (e) {
          (e.LOGICRIGHT = "org.xmind.ui.logic.right"),
            (e.LOGICLEFT = "org.xmind.ui.logic.left"),
            (e.TREERIGHT = "org.xmind.ui.tree.right"),
            (e.TREELEFT = "org.xmind.ui.tree.left"),
            (e.TREESIDED = "org.xmind.ui.timeline.vertical"),
            (e.ORGCHARTDOWN = "org.xmind.ui.org-chart.down"),
            (e.ORGCHARTUP = "org.xmind.ui.org-chart.up"),
            (e.MAPCLOCKWISE = "org.xmind.ui.map.clockwise"),
            (e.MAPANTICLOCKWISE = "org.xmind.ui.map.anticlockwise"),
            (e.MAP = "org.xmind.ui.map"),
            (e.MAPUNBALANCED = "org.xmind.ui.map.unbalanced"),
            (e.MAPFLOATING = "org.xmind.ui.map.floating"),
            (e.MAPFLOATINGCLOCKWISE = "org.xmind.ui.map.floating.clockwise"),
            (e.MAPFLOATINGANTICLOCKWISE =
              "org.xmind.ui.map.floating.anticlockwise"),
            (e.TIMELINETHROUGHVERTICAL =
              "org.xmind.ui.timeline.through.vertical"),
            (e.TIMELINESIDEDHORIZONTAL =
              "org.xmind.ui.timeline.sided.horizontal"),
            (e.TIMELINEHORIZONTAL = "org.xmind.ui.timeline.horizontal"),
            (e.FISHBONELEFTHEADED = "org.xmind.ui.fishbone.leftHeaded"),
            (e.LEFTHEADTOPBONE =
              "org.xmind.ui.fishbone.structure.lefthead.topbone"),
            (e.LEFTHEADBOTTOMBONE =
              "org.xmind.ui.fishbone.structure.lefthead.bottombone"),
            (e.FISHBONERIGHTHEADED = "org.xmind.ui.fishbone.rightHeaded"),
            (e.RIGHTHEADTOPBONE =
              "org.xmind.ui.fishbone.structure.righthead.topbone"),
            (e.RIGHTHEADBOTTOMBONE =
              "org.xmind.ui.fishbone.structure.righthead.bottombone"),
            (e.SPREADSHEET = "org.xmind.ui.spreadsheet"),
            (e.COLUMNSPREADSHEET = "org.xmind.ui.spreadsheet.column"),
            (e.TREETABLE = "org.xmind.ui.treetable"),
            (e.TOPTITLETREETABLE = "org.xmind.ui.treetable.toptitle"),
            (e.SPREADSHEETROW = "org.xmind.ui.structure.spreadsheet.row"),
            (e.SPREADSHEETCOLUMN = "org.xmind.ui.structure.column.spreadsheet"),
            (e.FISHBONELEFTHEADTOP = "org.xmind.ui.fishbone.leftHeaded.top"),
            (e.FISHBONELEFTHEADBOTTOM =
              "org.xmind.ui.fishbone.leftHeaded.bottom"),
            (e.FISHBONERIGHTHEADTOP = "org.xmind.ui.fishbone.rightHeaded.top"),
            (e.FISHBONERIGHTHEADBOTTOM =
              "org.xmind.ui.fishbone.rightHeaded.bottom"),
            (e.TIMELINEHORIZONTALUP = "org.xmind.ui.timeline.horizontal.up"),
            (e.TIMELINEHORIZONTALDOWN =
              "org.xmind.ui.timeline.horizontal.down"),
            (e.LOGICCHARTRIGHT = "org.xmind.ui.logic-chart.right"),
            (e.LOGICCHARTLEFT = "org.xmind.ui.logic-chart.left"),
            (e.BRACERIGHT = "org.xmind.ui.brace.right"),
            (e.BRACELEFT = "org.xmind.ui.brace.left"),
            (e.TIMELINEVERTICAL = "org.xmind.ui.timeline.vertical");
        })(i || (i = {}));
      const o = {
        [i.MAPUNBALANCED]: "map-unbalance",
        [i.MAPCLOCKWISE]: "map-clockwise",
        [i.LOGICRIGHT]: "logic-right",
        [i.LOGICLEFT]: "logic-left",
        [i.BRACERIGHT]: "brace-right",
        [i.BRACELEFT]: "brace-left",
        [i.TREERIGHT]: "tree-right",
        [i.TREELEFT]: "tree-left",
        [i.ORGCHARTDOWN]: "org-down",
        [i.ORGCHARTUP]: "org-up",
        [i.FISHBONELEFTHEADED]: "fishbone-left",
        [i.FISHBONERIGHTHEADED]: "fishbone-right",
        [i.TIMELINEHORIZONTAL]: "timeline-horizontal",
        [i.TIMELINEVERTICAL]: "timeline-vertical",
        [i.TIMELINETHROUGHVERTICAL]: "timeline-through-vertical",
        [i.TIMELINESIDEDHORIZONTAL]: "timeline-sided-horizontal",
        [i.SPREADSHEET]: "matrix-row",
        [i.COLUMNSPREADSHEET]: "matrix-column",
        [i.TOPTITLETREETABLE]: "tree-table-column",
        [i.TREETABLE]: "tree-table-row",
      };
    },
    92344: (e, t, n) => {
      "use strict";
      n.d(t, {
        yh: () => d,
        dM: () => v,
        I6: () => h,
        zF: () => g,
        Y$: () => r.Y,
      });
      var i = n(94025),
        o = n(24813),
        r = n(38853);
      class a {
        constructor() {
          this.eventCallbacks = new Map();
        }
        on(e, t) {
          var n;
          const i =
            null !== (n = this.eventCallbacks.get(e)) && void 0 !== n ? n : [];
          this.eventCallbacks.set(e, [...i, t]);
        }
        off(e, t) {
          var n;
          let i =
            null !== (n = this.eventCallbacks.get(e)) && void 0 !== n ? n : [];
          (i = i.filter((e) => e !== t)), this.eventCallbacks.set(e, i);
        }
        emit(e) {
          const t = this.eventCallbacks.get(e.eventName);
          if (t) for (const n of t) n(e);
        }
        unload() {
          this.eventCallbacks = new Map();
        }
      }
      var l = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      class d extends a {
        constructor(e) {
          var t;
          super(),
            (this._presenters = []),
            (this._isStarted = !1),
            (this._disableSettingsUpdate = !1),
            (this._traveledTopicSet = new Set()),
            (this._needSubscriptionHint = !1),
            (this.slideControl = (e) =>
              l(this, void 0, void 0, function* () {
                const { action: t, value: n } = e;
                switch (t) {
                  case "goto":
                    return yield this.slideshow.present(n);
                  case "next":
                    return yield this.slideshow.forward();
                  case "prev":
                    return yield this.slideshow.backward();
                  case "fastBackward":
                    return yield this.slideshow.fastBackward();
                  case "fastForward":
                    return yield this.slideshow.fastForward();
                  case "updateSlide":
                    return yield this.slideshow.forceUpdateSlideContent();
                }
              })),
            (this.changeSlideSetting = (e) => {
              const { action: t, option: n } = e;
              switch (t) {
                case "theme":
                  return this.changeTheme(n);
                case "aspect":
                  return this.changeSlideAspect(n);
                case "animation":
                  return this.switchAnimationOption(n);
                case "watermark":
                  return this.switchWatermarkOption(n);
              }
            }),
            (this.unloaded = !1),
            (this.settings = (0, r.Y)()),
            (this._startTopicId =
              null !== (t = e.startTopicId) && void 0 !== t ? t : null),
            (this._suggestedSlideSize = e.suggestedSlideSize),
            (this._disableSettingsUpdate = e.disableSettingsUpdate),
            (this._needSubscriptionHint = !!e.needSubscriptionHint),
            this.initSlideshow(e);
        }
        get presenters() {
          return this._presenters;
        }
        get slideshow() {
          return this._slideshow;
        }
        get isShowingEnding() {
          return this._slideshow.isShowingEndingScreen;
        }
        get currentSlide() {
          return this.slideshow.currentSlide;
        }
        initSlideshow(e) {
          var t, n, r, a;
          const l = e.contentProviderData
              ? (0, o.xm)(e.contentProviderData)
              : (0, o.n2)(),
            d =
              null !== (t = e.defaultAspect) && void 0 !== t
                ? t
                : this.settings.slideAspect.value,
            c =
              "Auto" === d
                ? null !==
                    (r =
                      null === (n = e.suggestedSlideSize) || void 0 === n
                        ? void 0
                        : n.value) && void 0 !== r
                  ? r
                  : "16:9"
                : d;
          (this._slideshow = new i.ur({
            contentProvider: l,
            slideTheme:
              null !== (a = e.defaultSlideTheme) && void 0 !== a
                ? a
                : this.settings.slideTheme.value,
            slideSize: c,
            disablesWatermark: !this.settings.watermarkEnabled.value,
            preferredLanguage: this.settings.preferredLanguage.value,
          })),
            (this._slideshow.disablesAnimations =
              !this.settings.animationEnabled.value),
            this._slideshow.on("finish", () => this.finish()),
            this._slideshow.on("stateDidChange", () => {
              this.presenters.forEach((e) => e.stateChangedHandler());
            }),
            this._slideshow.on("transitionStart", ({ request: e }) => {
              const t = this._slideshow.computeNextStoppedSlide(e);
              t &&
                (this._traveledTopicSet.add(t),
                this._needSubscriptionHint &&
                  this._traveledTopicSet.size > 5 &&
                  this.emit({ eventName: "needSubscription" })),
                this.emit({
                  eventName: "slideChangeStart",
                  payload: { request: e, targetSlide: t },
                });
            }),
            this._slideshow.on("transitionEnd", () =>
              this.emit({ eventName: "slideChangeEnd" }),
            ),
            this._slideshow.on("modalOpened", () =>
              this.emit({ eventName: "presenterModal", payload: { show: !0 } }),
            ),
            this._slideshow.on("modalClosed", () =>
              this.emit({ eventName: "presenterModal", payload: { show: !1 } }),
            ),
            this._slideshow.on("reveal", ({ request: e }) =>
              this.emit({
                eventName: "presenterLinkClick",
                payload: { title: e.title, href: e.href, topicId: e.topicId },
              }),
            ),
            this._slideshow.on("playWebVideo", ({ request: e }) => {
              this.emit({
                eventName: "playWebVideo",
                payload: { videoSource: e.videoSource },
              });
            });
        }
        addPresenter(e) {
          this._presenters.includes(e) ||
            (this._presenters.push(e), this.slideshow.addPresenter(e.view));
        }
        removePresenter(e) {
          (this._presenters = this._presenters.filter((t) => t !== e)),
            this.slideshow.removePresenter(e.view);
        }
        switchAnimationOption(e) {
          var t;
          (this.slideshow.disablesAnimations = !e),
            !this._disableSettingsUpdate &&
              (null === (t = this.settings) ||
                void 0 === t ||
                t.updateAnimationSetting(e));
        }
        switchWatermarkOption(e) {
          var t;
          this.slideshow.disablesWatermark !== !e &&
            (this.slideshow.changeWatermarkDisabled(!e),
            !this._disableSettingsUpdate &&
              (null === (t = this.settings) ||
                void 0 === t ||
                t.updateWatermarkSetting(e)));
        }
        changeTheme(e) {
          var t;
          this.slideshow.slideAppearanceId !== e &&
            (this.slideshow.changeSlideTheme(e),
            !this._disableSettingsUpdate &&
              (null === (t = this.settings) ||
                void 0 === t ||
                t.updateSlideThemeSetting(e)));
        }
        changeSlideAspect(e) {
          var t, n, o;
          const r =
            "Auto" === e
              ? null !==
                  (n =
                    null === (t = this._suggestedSlideSize) || void 0 === t
                      ? void 0
                      : t.value) && void 0 !== n
                ? n
                : "16:9"
              : e;
          this.slideshow.changeSlideSize(i.IE[r]),
            !this._disableSettingsUpdate &&
              (null === (o = this.settings) ||
                void 0 === o ||
                o.updateSlideAspectSetting(e));
        }
        start(e) {
          return l(this, void 0, void 0, function* () {
            this._isStarted ||
              (e.forEach((e) => this.addPresenter(e)),
              this.slideshow.present(this._startTopicId),
              (this._isStarted = !0));
          });
        }
        finish() {
          this.emit({ eventName: "slidePlayFinished" });
        }
        unload() {
          this.emit({ eventName: "beforeUnload" }),
            super.unload(),
            (this.unloaded = !0);
        }
      }
      var c = n(90435),
        s = n(16704),
        u = n(54856),
        p = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      function g() {
        const e = (0, s.hb)(),
          t = c.ZP.route(u.OV.CONNECT_MAIN(e), (e) =>
            p(this, void 0, void 0, function* () {
              switch (e.type) {
                case "retrieveContent":
                  return JSON.stringify(yield (0, o.d4)());
                case "dismiss":
                  return t();
                case "openHyperlink":
                  return null;
              }
            }),
          );
        return e;
      }
      function h(e) {
        return p(this, void 0, void 0, function* () {
          const t = yield c.ZP.fetch(u.OV.CONNECT_MAIN(e), {
            type: "retrieveContent",
          });
          return JSON.parse(t);
        });
      }
      function v(e) {
        c.ZP.fetch(u.OV.CONNECT_MAIN(e), { type: "dismiss" });
      }
    },
    38853: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => c });
      var i = n(2954),
        o = n(50965),
        r = n(96160),
        a = n(24813);
      function l(e) {
        var t, n;
        return null !==
          (n =
            null === (t = (0, a.pP)(e)) || void 0 === t
              ? void 0
              : t["slide-appearance"]) && void 0 !== n
          ? n
          : "default";
      }
      function d(e) {
        var t, n;
        return null !==
          (n =
            null === (t = (0, a.pP)(e)) || void 0 === t
              ? void 0
              : t["slide-aspect-ratio"]) && void 0 !== n
          ? n
          : "Auto";
      }
      const c = (function () {
        const { activeSheet: e } = (0, r.nZ)(),
          t = (0, i.Fl)(() => {
            var t;
            return null === (t = e.value) || void 0 === t
              ? void 0
              : t.rootTopic.id;
          }),
          n = (0, i.Fl)(() => !(0, o.rs)().disableAnimation),
          c = (0, i.Fl)(
            () => !true || (0, o.rs)().watermarkEnabled,
          ),
          s = (0, i.iH)(d(t.value)),
          u = (0, i.iH)(l(t.value)),
          p = (0, i.Fl)(() =>
            "zh-CN" === (0, o.S)().language ||
            "zh-CN" === (0, o.S)().defaultLanguage
              ? "zh"
              : "en",
          ),
          g = (e) => {
            (0, o.rs)().updateSettings({ disableAnimation: !e });
          },
          h = (e) => {
            (0, o.rs)().updateSettings({ watermarkEnabled: e });
          },
          v = (e) => {
            e !== l(t.value) &&
              ((0, a.nh)(t.value, { "slide-appearance": e }), (u.value = e));
          },
          f = (e) => {
            e !== d(t.value) &&
              ((0, a.nh)(t.value, { "slide-aspect-ratio": e }), (s.value = e));
          };
        return (
          (0, i.YP)(
            () => t.value,
            (e) => {
              (s.value = d(e)), (u.value = l(e));
            },
          ),
          () => ({
            animationEnabled: n,
            watermarkEnabled: c,
            slideTheme: (0, i.Fl)(() => u.value),
            slideAspect: (0, i.Fl)(() => s.value),
            preferredLanguage: p,
            updateAnimationSetting: g,
            updateWatermarkSetting: h,
            updateSlideThemeSetting: v,
            updateSlideAspectSetting: f,
          })
        );
      })();
    },
    21718: (e, t, n) => {
      "use strict";
      n.d(t, { o: () => d, v: () => l });
      var i = n(94025),
        o = n(92344),
        r = n(24813);
      function a(e, t) {
        var n;
        const {
            slideTheme: a,
            watermarkEnabled: l,
            preferredLanguage: d,
          } = (0, o.Y$)(),
          c = new i.ur({
            contentProvider: (0, r.n2)(e),
            slideTheme: a.value,
            slideSize: i.IE["16:9"],
            disablesWatermark:
              null !== (n = null == t ? void 0 : t.disablesWatermark) &&
              void 0 !== n
                ? n
                : !l.value,
            preferredLanguage: d.value,
          });
        return (c.disablesAnimations = !0), new i.I2(c);
      }
      function l(e, t) {
        return a(e, t).exportPptxSlides();
      }
      function d(e, t) {
        return a(e, t).exportHtmlPages();
      }
    },
    94025: (e, t, n) => {
      "use strict";
      n.d(t, {
        CU: () => l,
        YN: () => d,
        ur: () => i.Slideshow,
        I2: () => i.SlideshowExporter,
        rc: () => h,
        qV: () => g,
        WS: () => p,
        bh: () => s,
        sz: () => c,
        _y: () => u,
        _p: () => i.previewSlidesScopedBy,
        IE: () => i.slideSizes,
        hf: () => v,
        tT: () => a,
      });
      var i = n(32118),
        o = n(24813);
      const r = {
        summarySlideVisibility: "summary-slide-visibility",
        topicSlideVisibility: "topic-slide-visibility",
        topicImagePlacement: "topic-slide-image-placement",
        listSlideVisibility: "list-slide-visibility",
        listSlideDelivery: "list-slide-delivery",
        listSlideLayout: "list-slide-layout",
      };
      function a() {
        const e = (e, t, n) => (0, o.nh)(e, { [r[t]]: n });
        return {
          getSlideOption: (e, t) => {
            var n;
            return null === (n = (0, o.pP)(e)) || void 0 === n
              ? void 0
              : n[r[t]];
          },
          setSlideOption: e,
          deleteSlideOption: (t, n) => e(t, n),
        };
      }
      const l = "org.xmind.ui.ice-cream-pancake",
        d = ["Auto", "16:9", "4:3", "9:16", "3:4"];
      function c(e) {
        return new i.Slideshow(e);
      }
      function s(e = {}) {
        const {
            initialSlide: t,
            perspectiveMode: n,
            viewStyle: o,
            contentStyle: r,
          } = e,
          a = new i.PresentationView({ initialSlide: t });
        return (
          n
            ? ((a.allowsActivatingPresenterPerspectiveMode = !0),
              (a.mode = "presenterPerspective"))
            : ((a.allowsActivatingPresenterPerspectiveMode = !1),
              (a.mode = "presentation")),
          o && Object.keys(o).forEach((e) => (a.el.style[e] = o[e])),
          r && Object.keys(r).forEach((e) => (a.contentEl.style[e] = r[e])),
          a
        );
      }
      function u(e, t, n) {
        return {
          topicSkipped: (0, i.isSlideSkippedScopedBy)(e, t, "topic", {
            ignoresUserValue: n,
          }),
          listSkipped: (0, i.isSlideSkippedScopedBy)(e, t, "list", {
            ignoresUserValue: n,
          }),
          summarySkipped: (0, i.isSlideSkippedScopedBy)(e, t, "summary", {
            ignoresUserValue: n,
          }),
        };
      }
      function p(e, t) {
        const n = (0, i.computeSlideContent)(
          t,
          e.contentProvider,
          e.defaultListSlideDelivery,
        );
        return n && n.topic.image
          ? (0, i.computeTopicSlideImagePlacement)(
              e.slideSize,
              n,
              n.topic.image,
              { ignoresUserValue: !0 },
            )
          : null;
      }
      function g(e, t) {
        return (0, i.computeSlideLayout)(
          "list",
          e.slideSize,
          e.getSlideContent(t),
        );
      }
      function h(e, t) {
        return (0, i.getEligibleSlideLayouts)("list", e.getSlideContent(t));
      }
      function v(e, t) {
        const n = e.getSlideContent(t.topicId).computedListSlideDelivery;
        let i = [];
        if (
          ("list" === t.type &&
            "all-at-once" === n &&
            (i = [...i, ...(t.subtopics || [])]),
          t.boxes)
        ) {
          const e = (n) => {
            for (const o of n) {
              if (
                (o.id.startsWith("topic:title:") ||
                  o.id.startsWith("topic:image:")) &&
                o.opacity
              ) {
                const e = o.id.split(":")[2];
                t.subtopics.includes(e) && i.push(o.id.split(":")[2]);
              }
              "children" in o && e(o.children);
            }
          };
          e(t.boxes);
        }
        const o = t.topicId,
          r = [...new Set(i)].filter((e) => e !== o);
        return { topicId: o, subTopicIds: r };
      }
    },
    24813: (e, t, n) => {
      "use strict";
      n.d(t, {
        xm: () => h,
        pP: () => v,
        n2: () => p,
        d4: () => g,
        nh: () => f,
      });
      var i = n(2954),
        o = n(94025),
        r = n(70716),
        a = n(96160);
      const {
          TopicQuickStyleClassName: l,
          PrimaryClassName: d,
          TopicPrimaryClassName: c,
        } = a.viewerKit,
        s = Object.freeze({
          default: {
            [d.Map]: {
              fillColor: "#101010",
              multiLineColors: ["#F6F6F6"].join(" "),
            },
            [d.Relationship]: { lineColor: "#F6F6F6", textColor: "#FFFFFF" },
            [d.Boundary]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [d.Summary]: {},
            [c.CentralTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [c.MainTopic]: { fillColor: "#E3E3E3", textColor: "#000000" },
            [c.Subtopic]: { fillColor: "#B9B9B9", textColor: "#000000" },
            [c.FloatingTopic]: { fillColor: "#BABABA", textColor: "#000000" },
            [c.CalloutTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [c.SummaryTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [l.VeryImportant]: { fillColor: "#A43838" },
            [l.Important]: { fillColor: "#CFA362", textColor: "#000000" },
            [l.CrossOut]: {},
          },
          light: {
            [d.Map]: {
              fillColor: "#F4F4F4",
              multiLineColors: ["#282828"].join(" "),
            },
            [d.Relationship]: { lineColor: "#282828", textColor: "#000000" },
            [d.Boundary]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [d.Summary]: {},
            [c.CentralTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [c.MainTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [c.Subtopic]: { fillColor: "#4F4F4F", textColor: "#FFFFFF" },
            [c.FloatingTopic]: { fillColor: "#4F4F4F", textColor: "#FFFFFF" },
            [c.CalloutTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [c.SummaryTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [l.VeryImportant]: { fillColor: "#A43838" },
            [l.Important]: { fillColor: "#CFA362", textColor: "#000000" },
            [l.CrossOut]: {},
          },
          Innocence: {
            [d.Map]: {
              fillColor: "#ECF4E9",
              multiLineColors: [
                "#FF9A9A",
                "#F9E168",
                "#FFC368",
                "#ACDB87",
                "#749AC7",
                "#FF9A9A",
              ].join(" "),
            },
            [d.Relationship]: { lineColor: "#F06767", textColor: "#F7FFF4" },
            [d.Boundary]: { fillColor: "#F06767", textColor: "#F7FFF4" },
            [d.Summary]: {},
            [c.CentralTopic]: { fillColor: "#F06767" },
            [c.MainTopic]: { textColor: "#000000" },
            [c.Subtopic]: { textColor: "#000000" },
            [c.FloatingTopic]: { fillColor: "#797979", textColor: "#F7FFF4" },
            [c.CalloutTopic]: { fillColor: "#F06767", textColor: "#F7FFF4" },
            [c.SummaryTopic]: { fillColor: "#F06767", textColor: "#000000" },
            [l.VeryImportant]: { fillColor: "#1000C6" },
            [l.Important]: { fillColor: "#22D896", textColor: "#000000" },
            [l.CrossOut]: {},
          },
          "Hubble-Bubble": {
            [d.Map]: { fillColor: "#1D663A", multiLineColors: "#A2B864" },
            [d.Relationship]: { lineColor: "#A2B864", textColor: "#FEFFD0" },
            [d.Boundary]: { fillColor: "#A2B864", textColor: "#FFFFFF" },
            [d.Summary]: {},
            [c.CentralTopic]: { fillColor: "#39B169", textColor: "#FEFFD0" },
            [c.MainTopic]: { fillColor: "#39B169", textColor: "#FEFFD0" },
            [c.Subtopic]: { fillColor: "#2E9356", textColor: "#FEFFD0" },
            [c.FloatingTopic]: { fillColor: "#A2B864", textColor: "#1D663A" },
            [c.CalloutTopic]: { fillColor: "#FEFFD0", textColor: "#000000" },
            [c.SummaryTopic]: { fillColor: "#A2B864", textColor: "#1D663A" },
            [l.VeryImportant]: { fillColor: "#FA813D", textColor: "#000000" },
            [l.Important]: { fillColor: "#ECDE5D", textColor: "#000000" },
            [l.CrossOut]: {},
          },
          "midnight-rose": {
            [d.Map]: { fillColor: "#010518", multiLineColors: "#9EAEFF" },
            [d.Relationship]: { lineColor: "#2C47D8", textColor: "#FFFFFF" },
            [d.Boundary]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [d.Summary]: {},
            [c.CentralTopic]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [c.MainTopic]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [c.Subtopic]: { fillColor: "#3E4C95", textColor: "#FFFFFF" },
            [c.FloatingTopic]: { fillColor: "#DEE3FF", textColor: "#404E9C" },
            [c.CalloutTopic]: { fillColor: "#FEFFD0", textColor: "#404E9C" },
            [c.SummaryTopic]: { fillColor: "#9EAEFF", textColor: "#404E9C" },
            [l.VeryImportant]: { fillColor: "#A716CB", textColor: "#000000" },
            [l.Important]: { fillColor: "#D45757", textColor: "#000000" },
            [l.CrossOut]: {},
          },
          "shape-for-you": {
            [d.Map]: {
              fillColor: "#F5D8DD",
              multiLineColors: [
                "#EDB998",
                "#BEADA6",
                "#E994B1",
                "#ACBCD6",
                "#B1ABD6",
                "#B0CD99",
                "#97D6C3",
                "#BDB783",
              ].join(" "),
            },
            [d.Relationship]: { lineColor: "#E59294", textColor: "#000000" },
            [d.Boundary]: { fillColor: "#E59294", textColor: "#FFFFFF" },
            [d.Summary]: {},
            [c.CentralTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [c.MainTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [c.Subtopic]: { fillColor: "#E59294", textColor: "#000000" },
            [c.FloatingTopic]: { fillColor: "#4B4B4B", textColor: "#FFFFFF" },
            [c.CalloutTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [c.SummaryTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [l.VeryImportant]: { fillColor: "#50209E", textColor: "#000000" },
            [l.Important]: { fillColor: "#D45757", textColor: "#62A8CF" },
            [l.CrossOut]: {},
          },
          "hand-drawn": {
            [d.Map]: { fillColor: "#DCE2D4", multiLineColors: "#2F4DB5" },
            [d.Relationship]: { lineColor: "#2F4DB5", textColor: "#2F4DB5" },
            [d.Boundary]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [d.Summary]: {},
            [c.CentralTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [c.MainTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [c.Subtopic]: { fillColor: "#5E6AA2", textColor: "#FFFFFF" },
            [c.FloatingTopic]: { fillColor: "#5A5E74", textColor: "#EDF4E5" },
            [c.CalloutTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [c.SummaryTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [l.VeryImportant]: { fillColor: "#9433AC", textColor: "#FFFFFF" },
            [l.Important]: { fillColor: "#D05252", textColor: "#FFFFFF" },
            [l.CrossOut]: {},
          },
        });
      var u = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      function p(e) {
        const { sheets: t, activeSheetId: n, getSheetViewer: o } = (0, a.nZ)(),
          r = (0, i.Fl)(() =>
            t.value.find((t) => t.id === (null != e ? e : n.value)),
          ),
          l = (0, i.Fl)(() => o(r.value.id));
        return {
          getStartingTopicId: () => {
            var e, t, n;
            return null !==
              (n =
                null ===
                  (t =
                    null === (e = r.value) || void 0 === e
                      ? void 0
                      : e.rootTopic) || void 0 === t
                  ? void 0
                  : t.id) && void 0 !== n
              ? n
              : null;
          },
          getTopicAttributes: (e) => {
            var t, n, i, o, a, d, c, s, u, p, g;
            const h =
                null ===
                  (n =
                    null === (t = r.value) || void 0 === t
                      ? void 0
                      : t.query({ id: e })) || void 0 === n
                  ? void 0
                  : n.asTopic(),
              f =
                null ===
                  (o =
                    null === (i = l.value) || void 0 === i
                      ? void 0
                      : i.getSheetFigure()) || void 0 === o
                  ? void 0
                  : o.topicFigureByTopicId[e],
              x = v(e);
            return (
              h && {
                id: null == h ? void 0 : h.id,
                title:
                  null !== (a = null == h ? void 0 : h.title) && void 0 !== a
                    ? a
                    : "",
                labels:
                  null !== (d = null == h ? void 0 : h.labels) && void 0 !== d
                    ? d
                    : [],
                note: (null == h ? void 0 : h.notes) && {
                  plainText:
                    null === (c = h.notes) || void 0 === c ? void 0 : c.text,
                  html:
                    null === (s = h.notes) || void 0 === s ? void 0 : s.html,
                },
                image: b(f),
                summaries:
                  null === (u = null == h ? void 0 : h.summaries) ||
                  void 0 === u
                    ? void 0
                    : u.map((e) => ({
                        topicId: e.id,
                        startIndex: e.rangeStart,
                        endIndex: e.rangeEnd,
                      })),
                markers: m(
                  null !== (p = null == h ? void 0 : h.markers) && void 0 !== p
                    ? p
                    : [],
                ),
                video: I(f),
                calloutTopicId:
                  null === (g = null == h ? void 0 : h.callout) || void 0 === g
                    ? void 0
                    : g.id,
                hyperlink: y(h),
                topicSlide: null == x ? void 0 : x["topic-slide-visibility"],
                topicSlideImagePlacement:
                  null == x ? void 0 : x["topic-slide-image-placement"],
                listSlides: null == x ? void 0 : x["list-slide-visibility"],
                listSlideLayout: null == x ? void 0 : x["list-slide-layout"],
                listSlideDelivery:
                  null == x ? void 0 : x["list-slide-delivery"],
                summarySlide:
                  null == x ? void 0 : x["summary-slide-visibility"],
                preferredDefaultListSlideLayout: T(f),
              }
            );
          },
          getSubtopics: (e) => {
            var t, n, i, o;
            const a =
              null ===
                (n =
                  null === (t = r.value) || void 0 === t
                    ? void 0
                    : t.query({ id: e })) || void 0 === n
                ? void 0
                : n.asTopic();
            return null !==
              (o =
                null === (i = null == a ? void 0 : a.children) || void 0 === i
                  ? void 0
                  : i.map((e) => e.id)) && void 0 !== o
              ? o
              : [];
          },
          getParentTopicId: (e) => {
            var t, n, i, o;
            const a =
              null ===
                (n =
                  null === (t = r.value) || void 0 === t
                    ? void 0
                    : t.query({ id: e })) || void 0 === n
                ? void 0
                : n.asTopic();
            return null !==
              (o =
                null === (i = null == a ? void 0 : a.parentTopic) ||
                void 0 === i
                  ? void 0
                  : i.id) && void 0 !== o
              ? o
              : null;
          },
          getFloatingTopics: () => {
            var e, t, n;
            return null !==
              (n =
                null ===
                  (t =
                    null === (e = r.value) || void 0 === e
                      ? void 0
                      : e.rootTopic) || void 0 === t
                  ? void 0
                  : t.detachedChildren.map((e) => e.id)) && void 0 !== n
              ? n
              : [];
          },
          getEndingScreenContent: (e) =>
            u(this, void 0, void 0, function* () {
              var t, n, i, o, a, d, c, u;
              const p =
                  null !==
                    (a =
                      null !== (t = null == e ? void 0 : e.appearance) &&
                      void 0 !== t
                        ? t
                        : null ===
                              (o = v(
                                null ===
                                  (i =
                                    null === (n = r.value) || void 0 === n
                                      ? void 0
                                      : n.rootTopic) || void 0 === i
                                  ? void 0
                                  : i.id,
                              )) || void 0 === o
                          ? void 0
                          : o["slide-appearance"]) && void 0 !== a
                    ? a
                    : "default",
                { svg: g, size: h } =
                  yield l.value.exportSVGElementWithSizeUsingSheetAppearance(
                    r.value,
                    null !== (d = s[p]) && void 0 !== d ? d : s.default,
                    {
                      padding: { left: 20, right: 20, top: 20, bottom: 20 },
                      disableEmbedFonts: !0,
                    },
                  );
              return {
                svgString: new XMLSerializer().serializeToString(g),
                width:
                  null !== (c = h.width) && void 0 !== c
                    ? c
                    : parseInt(g.getAttribute("width")),
                height:
                  null !== (u = h.height) && void 0 !== u
                    ? u
                    : parseInt(g.getAttribute("height")),
              };
            }),
        };
      }
      function g() {
        return u(this, void 0, void 0, function* () {
          const e = p(),
            t = e.getStartingTopicId(),
            n = e.getFloatingTopics(),
            i = [t, ...n],
            o = (t) => {
              const n = t.map((t) => e.getSubtopics(t)).flat();
              i.push(...n), n.length <= 0 || o(n);
            };
          o(i);
          const r = {},
            a = {},
            l = {};
          i.forEach((t) => {
            (r[t] = e.getTopicAttributes(t)),
              (a[t] = e.getParentTopicId(t)),
              (l[t] = e.getSubtopics(t));
          });
          const d = yield e.getEndingScreenContent(void 0);
          return {
            startingTopicId: t,
            floatingTopicIds: n,
            topicRecords: r,
            parentRecords: a,
            subTopicsRecords: l,
            endingScreenContent: d,
          };
        });
      }
      function h(e) {
        const {
          startingTopicId: t,
          floatingTopicIds: n,
          topicRecords: i,
          subTopicsRecords: o,
          parentRecords: r,
          endingScreenContent: a,
        } = e;
        return {
          getStartingTopicId: () => t,
          getTopicAttributes: (e) => {
            var t;
            return null !== (t = i[e]) && void 0 !== t ? t : null;
          },
          getSubtopics: (e) => {
            var t;
            return null !== (t = o[e]) && void 0 !== t ? t : [];
          },
          getParentTopicId: (e) => {
            var t;
            return null !== (t = r[e]) && void 0 !== t ? t : null;
          },
          getFloatingTopics: () => n,
          getEndingScreenContent: () =>
            u(this, void 0, void 0, function* () {
              return a;
            }),
        };
      }
      function v(e) {
        var t, n, i;
        const { document: r } = (0, a.nZ)(),
          l =
            null ===
              (n =
                null === (t = r.value) || void 0 === t
                  ? void 0
                  : t.query({ id: e })) || void 0 === n
              ? void 0
              : n.asTopic(),
          d = null == l ? void 0 : l.extensionBy(o.CU);
        return null !== (i = null == d ? void 0 : d.content) && void 0 !== i
          ? i
          : null;
      }
      function f(e, t) {
        var n, i, r, l, d;
        const { document: c, changeDoc: s } = (0, a.nZ)(),
          u =
            null ===
              (i =
                null === (n = c.value) || void 0 === n
                  ? void 0
                  : n.query({ id: e })) || void 0 === i
              ? void 0
              : i.asTopic(),
          p =
            null !==
              (l =
                null === (r = null == u ? void 0 : u.extensionBy(o.CU)) ||
                void 0 === r
                  ? void 0
                  : r.content) && void 0 !== l
              ? l
              : {},
          g = { content: Object.assign(Object.assign({}, p), t) },
          h =
            null === (d = null == u ? void 0 : u.asMutable()) || void 0 === d
              ? void 0
              : d.extensionBy(o.CU, g).commit().ownerDocument;
        h && s(h);
      }
      function m(e) {
        const { markerModule: t } = (0, a.nZ)();
        return e
          .map((e) => ({
            markerId: e,
            imageSource: t.getMarkerInfoById(e).imageSrc,
          }))
          .filter((e) => !!e.imageSource);
      }
      function b(e) {
        var t, n, i, o, r;
        if (!e) return null;
        const {
            imageView: l,
            measuredImageView: d,
            imageNaturalSize: c,
          } = e.nodeContent,
          s = null == e ? void 0 : e.modelAttributes,
          u =
            null === (t = null == s ? void 0 : s.equation) || void 0 === t
              ? void 0
              : t.text;
        if (u)
          return (function (e) {
            var t, n;
            const i = (
              null !== (t = (0, a.nZ)().makeMathJaxSVG(e)) && void 0 !== t
                ? t
                : ""
            ).replace(/currentColor/g, "");
            if (!i) return null;
            const o =
              null ===
                (n = new DOMParser().parseFromString(i, "image/svg+xml")) ||
              void 0 === n
                ? void 0
                : n.documentElement;
            return o
              ? {
                  source: i,
                  size: {
                    width: parseInt(o.getAttribute("width")),
                    height: parseInt(o.getAttribute("height")),
                  },
                }
              : null;
          })(u);
        {
          const e =
              null !==
                (i =
                  null !== (n = null == c ? void 0 : c.width) && void 0 !== n
                    ? n
                    : null == d
                      ? void 0
                      : d.width) && void 0 !== i
                ? i
                : null == s
                  ? void 0
                  : s.imageWidth,
            t =
              null !==
                (r =
                  null !== (o = null == c ? void 0 : c.height) && void 0 !== o
                    ? o
                    : null == d
                      ? void 0
                      : d.height) && void 0 !== r
                ? r
                : null == s
                  ? void 0
                  : s.imageHeight,
            a = null == l ? void 0 : l.src;
          return e && t && a
            ? { source: a, size: { width: e, height: t } }
            : null;
        }
      }
      function I(e) {
        var t, n;
        const i =
          null ===
            (n =
              null === (t = null == e ? void 0 : e.modelAttributes) ||
              void 0 === t
                ? void 0
                : t.webVideo) || void 0 === n
            ? void 0
            : n.embedUrl;
        return i ? { videoSource: i } : null;
      }
      function y(e) {
        const t = null == e ? void 0 : e.href;
        if (!t) return null;
        const n =
          t &&
          (function (e) {
            return e.toLowerCase().startsWith("xap:resources")
              ? "attachment"
              : e.toLowerCase().startsWith("file:")
                ? "local"
                : e.toLowerCase().startsWith("xmind:")
                  ? null
                  : "webpage";
          })(t);
        return t && n ? { href: t, type: n } : null;
      }
      function T(e) {
        var t, n;
        const i =
          null !==
            (n =
              null === (t = null == e ? void 0 : e.modelAttributes) ||
              void 0 === t
                ? void 0
                : t.structureClass) && void 0 !== n
            ? n
            : null;
        return [r.v.FISHBONELEFTHEADED, r.v.FISHBONERIGHTHEADED].includes(i)
          ? "fishbone"
          : [
                r.v.TIMELINEHORIZONTAL,
                r.v.TIMELINESIDEDHORIZONTAL,
                r.v.TIMELINETHROUGHVERTICAL,
              ].includes(i)
            ? "timeline"
            : null;
      }
    },
    96595: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          exportAllSheetsAsPDF: () => _,
          exportBranchAsPDF: () => Z,
          exportCurrentSheetAsPDF: () => q,
          exportPDF: () => P,
          exportPdfDialog: () => D,
        });
      var i = n(71017),
        o = n.n(i),
        r = n(67657),
        a = n(94787),
        l = n(95804),
        d = n(94593),
        c = n(90435),
        s = n(72298),
        u = n(50965),
        p = n(16704),
        g = n(54856),
        h = n(13382),
        v = n(18621),
        f = n(95246),
        m = n(5893),
        b = n(92636),
        I = n(96160),
        y = n(42799),
        T = n(21718),
        x = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      function k(e, t, n) {
        return x(this, void 0, void 0, function* () {
          const { cleanUp: i, addToRemoveEl: o } = (() => {
              let e = [];
              return {
                cleanUp() {
                  e.forEach((e) => e.remove()), (e = []);
                },
                addToRemoveEl: (t) => (e.push(t), t),
              };
            })(),
            r = document.createElement("div");
          (r.style.position = "relative"),
            (r.style.left = "0"),
            (r.style.top = "0"),
            (r.style.width = `${t}px`),
            (r.style.height = e.length * n + "px"),
            r.classList.add("print-el"),
            o(r);
          const a = t / 1600;
          for (let i = 0; i < e.length; i++) {
            const o = document.createElement("div");
            o.classList.add("print-el"),
              (o.style.width = `${t}px`),
              (o.style.height = `${n}px`),
              (o.style.overflow = "hidden"),
              (o.style.position = "absolute"),
              (o.style.left = "0"),
              (o.style.top = i * n + "px"),
              (o.style.pageBreakBefore = "always");
            const l = e[i];
            (l.style.transformOrigin = "left top"),
              (l.style.transform = `scale(${a}, ${a})`),
              o.append(l),
              r.append(o);
          }
          document.body.append(r);
          const l = document.createElement("style");
          return (
            (l.id = "print_css"),
            (l.innerHTML =
              "\n    .print-el {\n      display: none;\n      overflow: hidden;\n      visibility: hidden;\n    }\n    @media print {\n      .print-el {\n        display: block;\n        overflow: hidden!important;\n        visibility: visible;\n        position: relative;\n      }\n      *{\n        webkit-transition: none !important;\n        transition: none !important;\n      }\n      body {\n        overflow: visible!important;\n        background-color:#fff;\n      }\n      #app {\n        display: none!important;\n      }\n      .uk-icon-panel {\n        display: none !important;\n      }\n      #popover-container-for-editor {\n        display: none !important;\n      }\n    }\n  "),
            document.head.append(l),
            o(l),
            i
          );
        });
      }
      var w = n(73501),
        S = n(2954),
        C = n(837),
        E = n(27710);
      const L = (0, S.Fl)(() => ({
          isEditable: !1,
          currEditingTopicId: "",
          currEditingMarkerId: "",
          currEditingLabel: "",
          currEditingNotesTopicId: "",
          currEditingNotesHref: "",
          currEditingNotesEditor: null,
          selectionIds: [],
          invalidImageIds: [],
          selectonType: C._p.TEXT,
          startTopicId: "",
          topicItems: [],
          isSelecting: !1,
          isMouseDown: !1,
          draggingTopicIds: [],
          draggingType: C._p.TOPIC,
          draggingStartPageY: 0,
          draggingPos: {
            toParentTopicId: "",
            toTargetIndex: 0,
            rect: { left: 0, top: 0 },
            toTopicType: "attached",
            toTopicId: "",
          },
          popoverEditorState: { visible: "", payload: {} },
          audioBarMode: "",
          audioFilePath: "",
          audioAutoPlay: !1,
          audioRecording: !1,
          inputMethodInputting: !1,
          ghostImgElementId: "",
          isNoteLinkInputVisible: !1,
          topicsLoopNum: 50,
          attachedTopicsLoopStartIndex: 0,
          attachedTopicsLoopEndIndex: 50,
          outlinerScale: 1,
          isBranchOnlyMode: !1,
          scopeTopicId: "",
          maxTopicsLoopNum: 100,
        })),
        M = S.ZP.extend({
          components: { OutlinerMode: E.Z },
          props: { namespace: String, outlinerSheetModel: Object },
          provide: () => ({
            handleOutlinerOperation: () => {},
            outlinerState: L,
            updateOutlinerState: () => {},
            outlinerActions: C.xI,
            openOutlinerCtxMenu: () => {},
          }),
        });
      const O = (0, n(51900).Z)(
        M,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "div",
            { class: [`outliner-${e.namespace}`] },
            [
              t("outliner-mode", {
                attrs: {
                  "outliner-sheet-model": e.outlinerSheetModel,
                  "static-mode": !0,
                },
              }),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      var A = n(91324),
        F = n(21029),
        N = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      function P(e) {
        return N(this, void 0, void 0, function* () {
          const t = yield D(null, e);
          if (!t) return;
          const {
            exportCategory: n,
            hasWatermark: i,
            transparent: l,
            exportTo: c,
          } = t;
          (0, a.Ae)("pdf"),
            "mindmap" === n
              ? 0 === c
                ? yield q(i, l)
                : 1 === c && (yield _(i, l))
              : "pitch" === n
                ? yield (function (e, t) {
                    var n, i, o;
                    return N(this, void 0, void 0, function* () {
                      const { activeSheet: l, sheets: d } = (0, I.nZ)(),
                        c = e ? [...d.value] : [l.value],
                        s = {},
                        u = {},
                        p = new a.Y8();
                      for (const e of c) {
                        const a = (0, T.o)(e.id, { disablesWatermark: t }),
                          l = 1480,
                          d = 833,
                          c = yield k(a, l, d),
                          g = (0, f.gP)();
                        s[e.id] = yield (0,
                        r.getCurrentWebContents)().printToPDF({
                          pageSize: { width: l / g.x, height: d / g.y },
                          margins: { top: 0, bottom: 0, left: 0, right: 0 },
                          printBackground: !0,
                          landscape: !1,
                        });
                        const h = p.makeSafeName(
                          (0, m.N6)(
                            null !==
                              (i =
                                null ===
                                  (n = null == e ? void 0 : e.rootTopic) ||
                                void 0 === n
                                  ? void 0
                                  : n.title) && void 0 !== i
                              ? i
                              : "",
                          ) ||
                            (0, m.N6)(
                              null !== (o = null == e ? void 0 : e.title) &&
                                void 0 !== o
                                ? o
                                : "",
                            ),
                        );
                        (u[e.id] = h), c();
                      }
                      yield (0, a.Gm)(),
                        1 === Object.keys(s).length
                          ? yield B(Object.values(s)[0], Object.values(u)[0])
                          : Object.keys(s).length > 1 &&
                            (yield H(s, u, (0, y.F)().title));
                    });
                  })(1 === c, !i)
                : "outliner" === n &&
                  (0 === c
                    ? yield (function ({ hasWatermark: e }) {
                        var t, n;
                        return N(this, void 0, void 0, function* () {
                          const i = (e, ...t) => (0, u.JE)().T(e, ...t),
                            { outlinerSheetModel: o } = (0, C.dI)(),
                            { activeSheet: l, activeSheetId: d } = (0, I.nZ)(),
                            c = () => {
                              (0, F.$)().isOutlinerMode ||
                                (0, C.dI)().unregisterOutliner();
                            },
                            g = document.createElement("div");
                          g.style.display = "none";
                          const v = new O({
                            propsData: {
                              outlinerSheetModel: o.value,
                              namespace: d.value,
                            },
                          });
                          v.$mount(),
                            g.appendChild(v.$el),
                            document.body.appendChild(g),
                            yield (0, a.Gm)();
                          const f = yield (0, h.ZZ)({
                              title: i("Save"),
                              suggestPath: {
                                suggestedName:
                                  (0, m.N6)(
                                    null !== (t = l.value.rootTopic.title) &&
                                      void 0 !== t
                                      ? t
                                      : "",
                                  ) ||
                                  (0, m.N6)(
                                    null !== (n = l.value.title) && void 0 !== n
                                      ? n
                                      : "",
                                  ),
                              },
                              filters: [{ name: "PDF", extensions: ["pdf"] }],
                            }),
                            b = yield (0, w.J)(
                              Object.assign(Object.assign({}, j), {
                                hasWatermark: e,
                              }),
                              d.value,
                            );
                          if ((yield (0, p._v)(500), f)) {
                            const e = {
                                pageSize: {
                                  width: j.pageSize.x / 25.4,
                                  height: j.pageSize.y / 25.4,
                                },
                                marginsType: 0,
                                printBackground: !0,
                                landscape: "landscape" == j.orientation,
                              },
                              t = yield (0,
                              r.getCurrentWebContents)().printToPDF(e);
                            yield (0, a.yS)(f, t),
                              b(),
                              c(),
                              (0, u.Rg)().addRateMasValue(10),
                              s.shell.openPath(f);
                          } else b(), c();
                          g.remove();
                        });
                      })({ hasWatermark: i })
                    : 1 === c &&
                      (yield (function ({ hasWatermark: e }) {
                        return N(this, void 0, void 0, function* () {
                          const t = (e, ...t) => (0, u.JE)().T(e, ...t),
                            { outlinerModel: n } = (0, C.dI)(),
                            { sheets: i } = (0, I.nZ)(),
                            l = i.value.map((e) => e.id),
                            c = document.createElement("div");
                          (c.style.display = "none"),
                            n.value.forEach((e, t) => {
                              const n = new O({
                                propsData: {
                                  outlinerSheetModel: e,
                                  namespace: l[t],
                                },
                              });
                              n.$mount(), c.appendChild(n.$el);
                            }),
                            document.body.appendChild(c),
                            yield (0, a.Gm)();
                          const { canceled: g, filePaths: h } =
                            yield r.dialog.showOpenDialog(
                              (0, r.getCurrentWindow)(),
                              {
                                title: t("Save"),
                                buttonLabel: t("Save"),
                                properties: [
                                  "openDirectory",
                                  "createDirectory",
                                ],
                                securityScopedBookmarks: !0,
                              },
                            );
                          if (g || !h || !h.length) return;
                          const v = h[0],
                            f = (0, m.o_)(v, (0, y.F)().title);
                          yield d.Z.ensureDir(f);
                          const b = new a.Y8();
                          for (let t = 0; t < l.length; t++) {
                            const n = l[t],
                              a = yield (0, w.J)(
                                Object.assign(Object.assign({}, j), {
                                  hasWatermark: e,
                                }),
                                n,
                              );
                            yield (0, p._v)(500);
                            const c = {
                                pageSize: {
                                  width: j.pageSize.x / 25.4,
                                  height: j.pageSize.y / 25.4,
                                },
                                marginsType: 0,
                                printBackground: !0,
                                landscape: "landscape" == j.orientation,
                              },
                              s = yield (0,
                              r.getCurrentWebContents)().printToPDF(c);
                            a();
                            const u = i.value[t].title,
                              g = b.makeSafeName(u),
                              h = o().resolve(f, g + ".pdf");
                            yield d.Z.writeFile(h, s);
                          }
                          (0, F.$)().isOutlinerMode ||
                            (0, C.dI)().unregisterOutliner(),
                            s.shell.openPath(f),
                            c.remove();
                        });
                      })({ hasWatermark: i }))),
            (0, v.L9)({ eventCategory: "export", eventAction: "exportPdf" });
        });
      }
      function D(e, t) {
        return N(this, void 0, void 0, function* () {
          let e = {
            contentScope: 0,
            exportTo: 0,
            transparent: !1,
            exportCategory: "mindmap",
          };
          if (!t.targetBranch) {
            const t = yield c.ZP.fetch(g.Fx, {
              name: "dialog-export-to-pdf",
              parentId: window.id,
              wait: !0,
              query: { bound: [0, 0], editorId: window.editorId },
            });
            if (!t) return;
            e = t.result;
          }
          return e;
        });
      }
      const q = (e, t) =>
          N(void 0, void 0, void 0, function* () {
            var n, i;
            const {
                getSheetViewer: o,
                activeSheetId: d,
                activeSheet: c,
              } = (0, I.nZ)(),
              s = (0, m.N6)(
                null !== (n = c.value.title) && void 0 !== n ? n : "",
              ),
              u = (0, m.N6)(
                null !== (i = c.value.rootTopic.title) && void 0 !== i ? i : "",
              ),
              p = u || s,
              g = o(d.value),
              h = yield g.exportSVGElement({
                disableEmbedFonts: !0,
                padding: { top: 50, left: 50, right: 50, bottom: e ? 120 : 50 },
                opaqueBackground: !t,
                hasWatermark: e,
              }),
              v = Number(h.getAttribute("width")),
              b = Number(h.getAttribute("height")),
              y = { [d.value]: { data: h, width: v, height: b } },
              T = (0, f.gP)(),
              x = 25.4 / T.x,
              k = 25.4 / T.y,
              w = Math.min(v, b) * x,
              S = Math.max(v, b) * k,
              C = {
                content: "currentMap",
                orientation: v > b ? "landscape" : "portrait",
                pageSetup: { background: !t },
                margins: { top: 0, bottom: 0, left: 0, right: 0 },
                pageSize: { x: Math.max(w, 21), y: Math.max(S, (21 * S) / w) },
                scale: "fitMap",
                hasWatermark: e,
              },
              E = yield (0, l.k6)(C, y),
              L = b / T.y,
              M = v / T.x,
              O = {
                pageRanges: "1",
                pageSize: {
                  width: "landscape" === C.orientation ? L : M,
                  height: "landscape" === C.orientation ? M : L,
                },
                printBackground: !0,
                landscape: "landscape" === C.orientation,
              };
            yield (0, A.SX)();
            const F = (0, r.getCurrentWebContents)(),
              N = yield F.printToPDF(O);
            E && E.clean(), yield (0, a.Gm)(), yield B(N, p);
          }),
        _ = (e, t) =>
          N(void 0, void 0, void 0, function* () {
            const { getSheetViewer: n, sheets: i } = (0, I.nZ)(),
              o = {},
              d = {},
              c = (0, f.gP)(),
              s = 25.4 / c.x,
              u = 25.4 / c.y,
              p = {},
              g = new a.Y8();
            for (const r of i.value) {
              const i = n(r.id).exportSVGElement,
                a = r.id,
                l = r.title,
                c = g.makeSafeName(l);
              d[a] = c;
              const h = yield i({
                  disableEmbedFonts: !0,
                  padding: {
                    top: 50,
                    left: 50,
                    right: 50,
                    bottom: e ? 120 : 50,
                  },
                  opaqueBackground: !t,
                  hasWatermark: e,
                }),
                v = Number(h.getAttribute("width")),
                f = Number(h.getAttribute("height")),
                m = Math.min(v, f) * s,
                b = Math.max(v, f) * u;
              (o[a] = {
                x: Math.max(m, 21),
                y: Math.max(b, (21 / b) * m),
                orientation: v > f ? "landscape" : "portrait",
              }),
                (p[r.id] = { data: h, width: v, height: f });
            }
            const h = {
                content: "workbook",
                pageSetup: { background: !t },
                margins: { top: 0, bottom: 0, left: 0, right: 0 },
                pageSizes: o,
                pageSize: { x: 210, y: 297 },
                scale: "fitMap",
                hasWatermark: e,
              },
              v = yield (0, l.k6)(h, p),
              m = {},
              b = v.effectSide.forSheets,
              T = Object.keys(b),
              x = {};
            T.forEach((e) => {
              const t = b[e];
              x[e] = t.length > 0 && t[0];
            });
            for (const e of T) {
              const t = x[e];
              Object.values(x)
                .filter((e) => e && e !== t)
                .forEach((e) => {
                  v.hideSvg(e);
                }),
                v.showSvg(t);
              const n = {
                  widthInch: p[e].width / c.x,
                  heightInch: p[e].height / c.y,
                },
                i = o[e].orientation,
                a = {
                  pageSize: {
                    pageRanges: "1",
                    width: "portrait" === i ? n.widthInch : n.heightInch,
                    height: "portrait" === i ? n.heightInch : n.widthInch,
                  },
                  printBackground: !0,
                  landscape: "landscape" === i,
                };
              yield (0, A.SX)();
              const l = (0, r.getCurrentWebContents)(),
                d = yield l.printToPDF(a);
              d && (m[e] = d);
            }
            v && v.clean();
            const { title: k } = (0, y.F)();
            yield (0, a.Gm)(), yield H(m, d, k);
          }),
        Z = () =>
          N(void 0, void 0, void 0, function* () {
            const {
              activeSheetId: e,
              selection: t,
              document: n,
              getSheetViewer: i,
              currentZoomScale: o,
            } = (0, I.nZ)();
            yield (0, a.Ae)("pdf");
            const { status: d } = (0, u.Yh)(),
              c = t.value.modelIds;
            if (0 === c.length) return;
            const s = (0, a.nv)(c),
              p = !(d === b.wi.VALID),
              g = (0, f.gP)(),
              h = 25.4 / g.x,
              v = 25.4 / g.y,
              m = {},
              T = {},
              x = {},
              k = new a.Y8();
            yield Promise.all(
              s.map((t) => {
                const r = i(e.value).exportSVGElement,
                  a = n.value.query({ id: t }).asTopic().title,
                  l = k.makeSafeName(a);
                return (
                  (x[t] = l),
                  r({
                    scopeTopicId: t,
                    disableEmbedFonts: !0,
                    padding: {
                      top: 50,
                      left: 50,
                      right: 50,
                      bottom: p ? 120 : 50,
                    },
                    opaqueBackground: !0,
                  }).then((e) => {
                    const n = Number(e.getAttribute("width")),
                      i = Number(e.getAttribute("height")),
                      r = Math.min(n, i) * h,
                      a = Math.max(n, i) * v;
                    (T[t] = {
                      x: Math.max(r, 21),
                      y: Math.max(a, (21 / a) * r),
                      orientation: n > i ? "landscape" : "portrait",
                    }),
                      (m[t] = { data: e, width: n, height: i, scale: o.value });
                  })
                );
              }),
            );
            const w = {
                content: "workbook",
                pageSetup: { background: !0 },
                margins: { top: 0, bottom: 0, left: 0, right: 0 },
                pageSizes: T,
                pageSize: { x: 210, y: 297 },
                scale: "fitMap",
                hasWatermark: p,
              },
              S = yield (0, l.g5)(w, m),
              C = {},
              E = S.effectSide.forSheets,
              L = {};
            s.forEach((e) => {
              const t = E[e];
              L[e] = t.length > 0 && t[0];
            });
            for (const e of s) {
              const t = L[e];
              Object.values(L)
                .filter((e) => e && e !== t)
                .forEach((e) => {
                  S.hideSvg(e);
                }),
                S.showSvg(t);
              const n = {
                  widthInch: m[e].width / g.x,
                  heightInch: m[e].height / g.y,
                },
                i = w.pageSizes[e].orientation || w.orientation,
                o = {
                  pageRanges: "1",
                  pageSize: {
                    width: "landscape" === i ? n.heightInch : n.widthInch,
                    height: "landscape" === i ? n.widthInch : n.heightInch,
                  },
                  printBackground: !0,
                  landscape: "landscape" === i,
                },
                a = (0, r.getCurrentWebContents)(),
                l = yield a.printToPDF(o);
              l && (C[e] = l);
            }
            if (
              (S && S.clean(), yield (0, a.Gm)(), 1 === Object.keys(m).length)
            )
              yield B(Object.values(C)[0], Object.values(x)[0]);
            else if (Object.keys(m).length > 1) {
              const { title: e } = (0, y.F)();
              yield H(C, x, e);
            }
          });
      const B = (e, t) =>
          N(void 0, void 0, void 0, function* () {
            const { T: n } = (0, u.JE)(),
              i = yield (0, h.ZZ)({
                title: n("Save"),
                suggestPath: { suggestedName: t },
                filters: [{ name: "PDF", extensions: ["pdf"] }],
              });
            i && (yield (0, a.yS)(i, e), s.shell.openPath(i));
          }),
        H = (e, t, n) =>
          N(void 0, void 0, void 0, function* () {
            const { T: i } = (0, u.JE)(),
              { canceled: l, filePaths: c } = yield r.dialog.showOpenDialog(
                (0, r.getCurrentWindow)(),
                {
                  title: i("Save"),
                  buttonLabel: i("Save"),
                  properties: ["openDirectory", "createDirectory"],
                  securityScopedBookmarks: !0,
                },
              );
            if (l || !c || !c.length) return;
            const p = c[0],
              g = (0, m.o_)(p, n);
            yield d.Z.ensureDir(g);
            for (const n of Object.keys(e)) {
              const i = t[n],
                r = o().resolve(g, i + ".pdf");
              yield (0, a.yS)(r, e[n]);
            }
            s.shell.openPath(g);
          }),
        j = {
          content: "currentMap",
          copies: 1,
          margins: { top: "20mm", bottom: "6mm", left: "14mm", right: "14mm" },
          orientation: "landscape",
          pageSetup: { background: !0 },
          pageSize: { x: 297, y: 210 },
          saveAsPdf: !0,
          scale: "fitMap",
          sides: "one-sided",
          useSelectedPrinter: !1,
        };
    },
    837: (e, t, n) => {
      "use strict";
      n.d(t, {
        yE: () => Ii,
        ye: () => yi,
        P1: () => h,
        _p: () => mi,
        YH: () => Jn,
        OD: () => ve,
        a7: () => fe,
        _l: () => hi,
        EQ: () => Te,
        $j: () => ii,
        yS: () => xe,
        e3: () => he,
        xS: () => Wn,
        ww: () => ge,
        $R: () => ne,
        b0: () => be,
        _v: () => di,
        Y8: () => re,
        rH: () => ae,
        d5: () => le,
        OE: () => ci,
        Gj: () => oe,
        y9: () => T,
        Ww: () => ti,
        fW: () => pi,
        xI: () => i,
        N8: () => Ie,
        wM: () => ce,
        kI: () => ye,
        $F: () => de,
        KQ: () => vi,
        u9: () => v,
        Dq: () => fi,
        N_: () => ie,
        dI: () => Ti,
        Qp: () => zn,
      });
      var i = {};
      n.r(i),
        n.d(i, {
          getEquationImageInfo: () => ze,
          getEquationXapUrl: () => We,
          getLinkTitle: () => Be,
          getMarkerResources: () => Ge,
          getMostlyUsedLabels: () => Re,
          openLink: () => _e,
          selectionNavigateDown: () => je,
          selectionNavigateUp: () => He,
          setLabelSortOrder: () => Ve,
          sortLabels: () => Ue,
        });
      var o = n(2954),
        r = n(52353),
        a = n.n(r),
        l = n(18446),
        d = n.n(l),
        c = n(50965),
        s = n(16704),
        u = n(92636),
        p = n(96160),
        g = n(76893);
      const h = 20,
        v = {
          "1. ": "numeral-arabic",
          "A. ": "alphabet-uppercase",
          "a. ": "alphabet-lowercase",
          "I. ": "numeral-roman",
        };
      function f(
        e,
        { rootTopicId: t, isParseAll: n } = { rootTopicId: "", isParseAll: !1 },
      ) {
        var i, o;
        let r = e.rootTopic;
        t &&
          (r =
            (null === (i = e.query({ id: t })) || void 0 === i
              ? void 0
              : i.asTopic()) || e.rootTopic);
        const a = {
          central: b(r, 0),
          attached: [],
          detached: [],
          labelSortOrder:
            null !== (o = e.labelSortOrder) && void 0 !== o ? o : "auto",
        };
        return (
          r.children.forEach((e) => m(a.attached, e, 1, n)),
          t || r.detachedChildren.forEach((e) => m(a.detached, e, 1, n)),
          a
        );
      }
      function m(e, t, n, i = !1) {
        if (n > h) return;
        const o = b(t, n);
        e.push(o),
          (i || (!o.folded && !o.hidden)) &&
            t.children.forEach((t) => m(e, t, n + 1, i));
      }
      function b(e, t) {
        var n, i;
        return {
          topicType: e.topicType,
          topicId: e.id,
          parentTopicId:
            null === (n = e.parentTopic) || void 0 === n ? void 0 : n.id,
          children: e.children.map((e) => e.id),
          detachedChildren: e.detachedChildren.map((e) => e.id),
          depth: t,
          title: e.title || "",
          attributedTitle: e.attributedTitle || [],
          labels: Array.from(e.labels.filter(Boolean)),
          notes: (null === (i = e.notes) || void 0 === i ? void 0 : i.text)
            ? e.notes
            : null,
          descendantLength: y(e),
          folded: "folded" === e.branchState,
          hidden: I(e, t),
          markers: e.markers
            .map((e) =>
              (function (e) {
                const { markerModule: t } = (0, p.nZ)(),
                  n = t.getMarkerInfoById(e);
                return n ? { id: e, url: n.imageSrc } : null;
              })(e),
            )
            .filter(Boolean),
          webpage: p.HG.webpageFromTopic(e),
          localFileLink: p.HG.localFileLinkFromTopic(e),
          topicLink: p.HG.topicLinkFromTopic(e),
          attachment: p.HG.attachmentFromTopic(e),
          equation: p.HG.equationFromTopic(e),
          image: p.HG.imageFromTopic(e),
          audioNotes: p.HG.audioNotesFromTopic(e),
          task: e.task && {
            status: e.task.status,
            presentation: e.taskPresentation,
            aggregatedCountOfTodos: e.aggregatedCountOfTodos,
            aggregatedCountOfCheckedTodos: e.aggregatedCountOfCheckedTodos,
          },
          numbering: e.numberingPattern && {
            numberingPattern: e.numberingPattern,
            numberingTiered: e.numberingTiered,
            numberingFixedIndex: e.numberingFixedIndex,
            numberingText: p.HG.getNumberingTextOfTopic(e),
          },
        };
      }
      function I(e, t) {
        return (
          !(t <= 1) &&
          !!e.parentTopic &&
          ("folded" === e.parentTopic.branchState || I(e.parentTopic, t - 1))
        );
      }
      function y(e) {
        if (!e) return 0;
        const t = e.children.map(y).reduce((e, t) => e + t, 0);
        return e.children.length + t;
      }
      function T(e, t) {
        switch (t.type) {
          case "add":
            return (function (e, t) {
              var n, i, o, r, a, l, d, c, s, u, g;
              const h =
                null === (n = e.query({ id: t.parentTopicId })) || void 0 === n
                  ? void 0
                  : n.asTopic();
              if (!h) return e;
              let v = e
                .Topic()
                .attrs({
                  title: t.title,
                  attributedTitle: t.attributedTitle || [],
                  branchState: t.branchState,
                  labels: t.labels,
                  markers: t.markers,
                  notes: t.notes,
                  href:
                    t.topicLink || t.localFileLink || t.webpage || t.attachment,
                  imagePlacement:
                    null === (i = t.image) || void 0 === i
                      ? void 0
                      : i.placement,
                  imageSource:
                    null === (o = t.image) || void 0 === o ? void 0 : o.src,
                  imageIsMathJaxImage: !!t.equation,
                });
              const f = t.equation;
              f &&
                ((v = v.extensionBy(p.o9.Equation, {
                  content: {
                    content: f,
                    imageSource:
                      null === (r = t.image) || void 0 === r ? void 0 : r.src,
                  },
                })),
                t.image &&
                  (v = v.attrs({
                    imageSource:
                      null === (a = t.image) || void 0 === a ? void 0 : a.src,
                    imageIsMathJaxImage: !0,
                    imageWidth:
                      null === (l = t.image) || void 0 === l ? void 0 : l.width,
                  })));
              t.audioNotes &&
                (v = v
                  .attrs({ title: t.title })
                  .extensionBy(p.o9.AudioNotes, {
                    content: null,
                    resources: [t.audioNotes],
                  }));
              t.task &&
                (v = v.extensionBy(p.o9.Task, { content: { status: t.task } }));
              t.numbering &&
                (v = v.attrs({
                  numberingPattern: t.numbering.numberingPattern || null,
                  numberingTiered: t.numbering.numberingTiered || null,
                  numberingFixedIndex:
                    null !== (d = t.numbering.numberingFixedIndex) &&
                    void 0 !== d
                      ? d
                      : null,
                }));
              "function" == typeof t.callback &&
                t.callback({ newTopicId: v.id });
              if ("detached" === t.topicType)
                return null ===
                  (s =
                    null ===
                      (c = h
                        .asMutable()
                        .addDetachedChildren([v], { at: t.targetIndex })) ||
                    void 0 === c
                      ? void 0
                      : c.commit()) || void 0 === s
                  ? void 0
                  : s.ownerDocument;
              return null ===
                (g =
                  null ===
                    (u = h
                      .asMutable()
                      .addChildren([v], { at: t.targetIndex })) || void 0 === u
                    ? void 0
                    : u.commit()) || void 0 === g
                ? void 0
                : g.ownerDocument;
            })(e, t);
          case "update":
            return (function (e, t) {
              var n, i, o, r, l, d, c, s, u, g, h, v, f, m, b, I, y;
              const T =
                null !==
                  (o =
                    null !==
                      (i =
                        null !== (n = t.topicLink) && void 0 !== n
                          ? n
                          : t.localFileLink) && void 0 !== i
                      ? i
                      : t.webpage) && void 0 !== o
                  ? o
                  : t.attachment;
              let x =
                null ===
                  (l =
                    null === (r = e.query({ id: t.topicId })) || void 0 === r
                      ? void 0
                      : r.asTopic()) || void 0 === l
                  ? void 0
                  : l
                      .asMutable()
                      .attrs(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              Object.assign(
                                Object.assign(
                                  Object.assign(
                                    Object.assign(
                                      Object.assign(
                                        Object.assign(
                                          Object.assign(
                                            Object.assign(
                                              Object.assign(
                                                Object.assign(
                                                  {},
                                                  !a()(t.title) && {
                                                    title: t.title,
                                                  },
                                                ),
                                                !a()(t.attributedTitle) && {
                                                  attributedTitle:
                                                    t.attributedTitle,
                                                },
                                              ),
                                              !a()(t.branchState) && {
                                                branchState: t.branchState,
                                              },
                                            ),
                                            !a()(t.labels) && {
                                              labels: t.labels,
                                            },
                                          ),
                                          !a()(t.markers) && {
                                            markers: t.markers,
                                          },
                                        ),
                                        !a()(t.notes) && { notes: t.notes },
                                      ),
                                      !a()(T) && { href: T },
                                    ),
                                    !a()(
                                      null === (d = t.image) || void 0 === d
                                        ? void 0
                                        : d.placement,
                                    ) && {
                                      imagePlacement:
                                        null === (c = t.image) || void 0 === c
                                          ? void 0
                                          : c.placement,
                                    },
                                  ),
                                  !a()(
                                    null === (s = t.image) || void 0 === s
                                      ? void 0
                                      : s.src,
                                  ) && {
                                    imageSource:
                                      null === (u = t.image) || void 0 === u
                                        ? void 0
                                        : u.src,
                                  },
                                ),
                                !a()(
                                  null === (g = t.image) || void 0 === g
                                    ? void 0
                                    : g.width,
                                ) && {
                                  imageWidth:
                                    null === (h = t.image) || void 0 === h
                                      ? void 0
                                      : h.width,
                                },
                              ),
                              !a()(
                                null === (v = t.image) || void 0 === v
                                  ? void 0
                                  : v.height,
                              ) && {
                                imageHeight:
                                  null === (f = t.image) || void 0 === f
                                    ? void 0
                                    : f.height,
                              },
                            ),
                            !a()(t.equation) && {
                              imageIsMathJaxImage: !!t.equation,
                            },
                          ),
                          !a()(t.numbering) && {
                            numberingPattern:
                              t.numbering.numberingPattern || null,
                            numberingTiered:
                              t.numbering.numberingTiered || null,
                            numberingFixedIndex:
                              null !== (m = t.numbering.numberingFixedIndex) &&
                              void 0 !== m
                                ? m
                                : null,
                          },
                        ),
                      );
              if (!x) return e;
              const k = t.equation;
              k &&
                ((x = x.extensionBy(p.o9.Equation, {
                  content: {
                    content: k,
                    imageSource:
                      null === (b = t.image) || void 0 === b ? void 0 : b.src,
                  },
                })),
                t.image &&
                  (x = x.attrs({
                    imageSource:
                      null === (I = t.image) || void 0 === I ? void 0 : I.src,
                    imageIsMathJaxImage: !0,
                    imageWidth:
                      null === (y = t.image) || void 0 === y ? void 0 : y.width,
                  })));
              t.audioNotes &&
                (x = x
                  .attrs({ title: t.title })
                  .extensionBy(p.o9.AudioNotes, {
                    content: null,
                    resources: [t.audioNotes],
                  }));
              t.task &&
                (x = x.extensionBy(p.o9.Task, { content: { status: t.task } }));
              "function" == typeof t.callback && t.callback({ topicId: x.id });
              return x.commit().ownerDocument;
            })(e, t);
          case "delete":
            return (function (e, t) {
              var n, i;
              const o =
                  null === (n = e.query({ id: t.topicId })) || void 0 === n
                    ? void 0
                    : n.asTopic(),
                r = null == o ? void 0 : o.ownerSheet,
                a =
                  null ===
                    (i = null == o ? void 0 : o.asRemovable().remove()) ||
                  void 0 === i
                    ? void 0
                    : i.ownerSheet,
                l = p.HG.findSelectableTopicAfterDeletion(
                  null == o ? void 0 : o.id,
                  a,
                  r,
                );
              "function" == typeof t.callback && t.callback({ nextTopicId: l });
              return null == a ? void 0 : a.ownerDocument;
            })(e, t);
          case "move":
            return (function (e, t) {
              var n, i, o;
              "function" == typeof t.callback &&
                t.callback({ topicId: t.topicId });
              return (
                (null ===
                  (o =
                    null ===
                      (i =
                        null === (n = e.query({ id: t.topicId })) ||
                        void 0 === n
                          ? void 0
                          : n.asTopic()) || void 0 === i
                      ? void 0
                      : i.asMovable({
                          parent: { id: t.toParentTopicId },
                          at: t.toTargetIndex,
                          as:
                            "detached" === t.topicType
                              ? "detachedChildren"
                              : "children",
                        })) || void 0 === o
                  ? void 0
                  : o.move().ownerDocument) || e
              );
            })(e, t);
          case "deleteAttrs":
            return (function (e, t) {
              var n, i;
              const o =
                t.topicLink || t.localFileLink || t.webpage || t.attachment;
              let r =
                null ===
                  (i =
                    null === (n = e.query({ id: t.topicId })) || void 0 === n
                      ? void 0
                      : n.asTopic()) || void 0 === i
                  ? void 0
                  : i
                      .asMutable()
                      .attrs({
                        branchState: x(t.branchState),
                        labels: x(t.labels),
                        markers: x(t.markers),
                        notes: x(t.notes),
                        href: x(o),
                        imagePlacement: x(t.image),
                        imageSource: x(t.image),
                        imageIsMathJaxImage: x(t.equation),
                        numberingPattern: x(t.numbering),
                        numberingTiered: x(t.numbering),
                        numberingFixedIndex: x(t.numbering),
                      });
              o &&
                (r = null == r ? void 0 : r.extensionBy(p.o9.WebVideo, null));
              t.equation &&
                (r = null == r ? void 0 : r.extensionBy(p.o9.Equation, null));
              t.audioNotes &&
                (r = null == r ? void 0 : r.extensionBy(p.o9.AudioNotes, null));
              t.task &&
                (r = null == r ? void 0 : r.extensionBy(p.o9.Task, null));
              "function" == typeof t.callback && t.callback({ topicId: r.id });
              return r.commit().ownerDocument;
            })(e, t);
        }
      }
      function x(e) {
        return e ? null : void 0;
      }
      var k = n(72298),
        w = n(71017),
        S = n.n(w),
        C = n(58659),
        E = n(79792),
        L = n(77242),
        M = n(36442),
        O = n(85786),
        A = n(7104);
      const F = [
          { spellCheck: !0 },
          {
            label: (0, s.WZ)("Learn Spelling"),
            handler() {
              const e = be();
              e.length <= 0 || M.A.add(e);
            },
          },
          { divider: !0 },
          {
            label: (0, s.WZ)("Copy"),
            shortcut: "CmdOrCtrl+C",
            commandId: "copy",
          },
          {
            label: (0, s.WZ)("Cut"),
            shortcut: "CmdOrCtrl+X",
            commandId: "cut",
          },
          {
            label: (0, s.WZ)("Paste"),
            shortcut: "CmdOrCtrl+V",
            commandId: "paste",
          },
          {
            label: (0, s.WZ)("Delete"),
            shortcut: "Backspace",
            commandId: "delete",
          },
          { divider: !0 },
          {
            label: (0, s.WZ)("Select All"),
            shortcut: "CmdOrCtrl+A",
            commandId: "selectAll",
          },
        ],
        N = [
          {
            commandId: "editor.removeMarker",
            label: (0, s.WZ)("Marker"),
            hideOnDisabled: !0,
          },
          {
            commandId: "editor.removeLabel",
            label: (0, s.WZ)("Label"),
            hideOnDisabled: !0,
          },
          {
            commandId: "editor.removeLink",
            label: (0, s.WZ)("Link"),
            hideOnDisabled: !0,
          },
          {
            commandId: "editor.removeTask",
            label: (0, s.WZ)("Task"),
            hideOnDisabled: !0,
          },
        ],
        P = [
          {
            commandId: "editor.clearText",
            label: (0, s.WZ)("Clear Text"),
            hideOnDisabled: !0,
          },
          {
            commandId: "editor.removeMarkerForTopicContextMenu",
            label: (0, s.WZ)("Remove Marker"),
            hideOnDisabled: !0,
          },
          {
            commandId: "editor.removeLabelForTopicContextMenu",
            label: (0, s.WZ)("Remove Label"),
            hideOnDisabled: !0,
          },
          {
            commandId: "editor.removeLinkForTopicContextMenu",
            label: (0, s.WZ)("Remove Link"),
            hideOnDisabled: !0,
          },
          {
            commandId: "editor.removeTaskForTopicContextMenu",
            label: (0, s.WZ)("Remove Task"),
            hideOnDisabled: !0,
          },
          {
            submenu: N,
            commandId: "editor.removeTopicContent",
            label: (0, s.WZ)("Remove"),
            hideOnDisabled: !0,
          },
        ],
        D = [
          ...[
            {
              label: (0, s.WZ)("Insert"),
              submenu: [
                {
                  label: (0, s.WZ)("Note"),
                  commandId: "editor.showNotesEditor",
                },
                {
                  label: (0, s.WZ)("Label"),
                  commandId: "editor.showLabelEditor",
                },
                { label: (0, s.WZ)("Task"), commandId: "editor.addTask" },
                {
                  label: (0, s.WZ)("Link(noun)"),
                  submenu: [
                    {
                      label: (0, s.WZ)("Webpage"),
                      commandId: "editor.showHyperlinkEditor",
                    },
                    {
                      label: (0, s.WZ)("Topic"),
                      commandId: "editor.showTopiclinkEditor",
                    },
                    {
                      label: (0, s.WZ)("Local File"),
                      commandId: "editor.addFileLink",
                    },
                    {
                      label: (0, s.WZ)("Local Folder"),
                      commandId: "editor.addFolderLink",
                    },
                  ].filter((e) => Boolean(e)),
                },
                { divider: !0 },
                {
                  label: (0, s.WZ)("Attachment"),
                  commandId: "editor.addAttachmentOnNewTopic",
                },
                {
                  label: (0, s.WZ)("Audio Note"),
                  commandId: "editor.addAudioOnNewTopic",
                },
                { divider: !0 },
                {
                  label: (0, s.WZ)("Marker"),
                  commandId: "workbench.toggleMarkerPanel",
                },
                {
                  label: (0, s.WZ)("Sticker"),
                  commandId: "workbench.toggleStickerPanel",
                },
                {
                  label: (0, s.WZ)("Illustration"),
                  commandId: "workbench.toggleIllustrationPanel",
                },
                {
                  label: (0, s.WZ)("Local Image"),
                  commandId: "editor.addLocalImage",
                },
                {
                  label: (0, s.WZ)("Equation"),
                  commandId: "editor.showEquationEditor",
                },
              ],
            },
          ],
          { divider: !0 },
          {
            label: (0, s.WZ)("Copy"),
            shortcut: "CmdOrCtrl+C",
            commandId: "copy",
          },
          {
            label: (0, s.WZ)("Cut"),
            shortcut: "CmdOrCtrl+X",
            commandId: "cut",
          },
          {
            label: (0, s.WZ)("Paste"),
            shortcut: "CmdOrCtrl+V",
            commandId: "paste",
          },
          {
            label: (0, s.WZ)("Duplicate"),
            shortcut: "CmdOrCtrl+D",
            commandId: "duplicate",
          },
          { divider: !0 },
          {
            label: (0, s.WZ)("Indent"),
            shortcut: "Tab",
            commandId: "outliner.indent",
          },
          {
            label: (0, s.WZ)("Outdent"),
            shortcut: "Shift+Tab",
            commandId: "outliner.outdent",
          },
          { divider: !0 },
          {
            label: (0, s.WZ)("Delete"),
            shortcut: "Backspace",
            commandId: "delete",
          },
          ...P,
          { divider: !0 },
          {
            label: (0, s.WZ)("Mark as Completed"),
            commandId: "editor.checkTask",
            hideOnDisabled: !0,
          },
          {
            label: (0, s.WZ)("Mark as Uncompleted"),
            commandId: "editor.uncheckTask",
            hideOnDisabled: !0,
          },
          {
            label: (0, s.WZ)("Mark as Canceled"),
            commandId: "editor.cancelTask",
            hideOnDisabled: !0,
          },
          { divider: !0 },
          {
            getLabel: ({ selectionIds: e, topicItems: t }) =>
              e
                .map((e) => t.find((t) => t.topicId === e).folded)
                .reduce((e, t) => e || t, !1)
                ? (0, s.WZ)("Unfold Subtopic")
                : (0, s.WZ)("Fold Subtopic"),
            shortcut: "CmdOrCtrl+/",
            commandId: "editor.toggleBranch",
          },
        ],
        q = [
          ...D,
          { divider: !0 },
          {
            getLabel: ({ isBranchOnlyMode: e }) =>
              e
                ? (0, s.WZ)("Show Full Content")
                : (0, s.WZ)("Show Branch Only"),
            getCommandId: ({ isBranchOnlyMode: e }) =>
              e ? "editor.exitBranchOnly" : "editor.showBranchOnly",
          },
          { divider: !0 },
          {
            label: (0, s.WZ)("New Sheet From Topic"),
            commandId: "editor.newSheetFromTopic",
          },
        ],
        _ = [
          { label: (0, s.WZ)("Delete"), commandId: "outliner.deleteTask" },
          {
            label: (0, s.WZ)("Mark as Canceled"),
            commandId: "editor.cancelTask",
          },
        ],
        Z = [
          { label: (0, s.WZ)("Edit"), commandId: "outliner.editMarker" },
          { divider: !0 },
          {
            label: (0, s.WZ)("Copy"),
            shortcut: "CmdOrCtrl+C",
            commandId: "copy",
          },
          {
            label: (0, s.WZ)("Cut"),
            shortcut: "CmdOrCtrl+X",
            commandId: "cut",
          },
          {
            label: (0, s.WZ)("Paste"),
            shortcut: "CmdOrCtrl+V",
            commandId: "paste",
          },
          {
            label: (0, s.WZ)("Delete"),
            shortcut: "Backspace",
            commandId: "outliner.deleteMarker",
          },
        ],
        B = [
          {
            label: (0, s.WZ)("Delete"),
            shortcut: "Backspace",
            commandId: "outliner.deleteLabel",
          },
        ],
        H = [
          { label: (0, s.WZ)("Edit"), commandId: "editor.showHyperlinkEditor" },
          { divider: !0 },
          { label: (0, s.WZ)("Delete"), commandId: "outliner.removeHyperlink" },
        ],
        j = [
          { label: (0, s.WZ)("Edit"), commandId: "editor.showTopiclinkEditor" },
          { divider: !0 },
          { label: (0, s.WZ)("Delete"), commandId: "outliner.removeHyperlink" },
        ],
        R = [
          { label: (0, s.WZ)("Edit"), commandId: "editor.addFileLink" },
          { divider: !0 },
          { label: (0, s.WZ)("Delete"), commandId: "outliner.removeHyperlink" },
        ],
        z = [
          { label: (0, s.WZ)("Edit"), commandId: "editor.addFolderLink" },
          { divider: !0 },
          { label: (0, s.WZ)("Delete"), commandId: "outliner.removeHyperlink" },
        ],
        W = [
          { label: (0, s.WZ)("Delete"), commandId: "outliner.removeHyperlink" },
          { divider: !0 },
          {
            label: (0, s.WZ)("Save As"),
            commandId: "outliner.saveAsAttachment",
          },
        ],
        G = [
          {
            label: (0, s.WZ)("Preview"),
            shortcut: "Space",
            commandId: "outliner.previewImage",
          },
          { divider: !0 },
          {
            label: (0, s.WZ)("Copy"),
            shortcut: "CmdOrCtrl+C",
            commandId: "copy",
          },
          {
            label: (0, s.WZ)("Cut"),
            shortcut: "CmdOrCtrl+X",
            commandId: "cut",
          },
          {
            label: (0, s.WZ)("Paste"),
            shortcut: "CmdOrCtrl+V",
            commandId: "paste",
          },
          {
            label: (0, s.WZ)("Delete"),
            shortcut: "Backspace",
            commandId: "delete",
          },
          { divider: !0 },
          { label: (0, s.WZ)("Save as"), commandId: "outliner.saveAsImage" },
          { divider: !0 },
          {
            label: (0, s.WZ)("Reset Size"),
            commandId: "outliner.resizeTopicImage",
          },
        ],
        V = [
          {
            label: (0, s.WZ)("Copy"),
            shortcut: "CmdOrCtrl+C",
            commandId: "copy",
          },
          {
            label: (0, s.WZ)("Cut"),
            shortcut: "CmdOrCtrl+X",
            commandId: "cut",
          },
          {
            label: (0, s.WZ)("Paste"),
            shortcut: "CmdOrCtrl+V",
            commandId: "paste",
          },
          {
            label: (0, s.WZ)("Delete"),
            shortcut: "Backspace",
            commandId: "outliner.removeTopicEquation",
          },
          { divider: !0 },
          { label: (0, s.WZ)("Save as"), commandId: "outliner.saveAsEquation" },
          { divider: !0 },
          {
            label: (0, s.WZ)("Reset Size"),
            commandId: "outliner.resizeTopicEquation",
          },
        ],
        U = [
          {
            label: (0, s.WZ)("Copy"),
            shortcut: "CmdOrCtrl+C",
            handler() {
              document.execCommand("copy");
            },
          },
          {
            label: (0, s.WZ)("Cut"),
            shortcut: "CmdOrCtrl+X",
            handler() {
              document.execCommand("cut");
            },
          },
          {
            label: (0, s.WZ)("Paste"),
            shortcut: "CmdOrCtrl+V",
            handler() {
              document.execCommand("paste");
            },
          },
          {
            label: (0, s.WZ)("Delete"),
            shortcut: "Backspace",
            handler() {
              document.execCommand("delete");
            },
          },
          { divider: !0 },
          {
            label: (0, s.WZ)("Select All"),
            shortcut: "CmdOrCtrl+A",
            handler() {
              document.execCommand("selectAll");
            },
          },
        ],
        X = {
          TEXT: F,
          TOPIC: q,
          MULTI_TOPIC: D,
          TASK: _,
          MARKER: Z,
          LABEL: B,
          WEBPAGE: H,
          TOPICLINK: j,
          LOCALFILELINK: R,
          FOLDERLINK: z,
          ATTACHMENT: W,
          IMAGE: G,
          EQUATION: V,
          NOTES: [{ spellCheck: !0 }, ...U],
          NOTES_LINK: [
            {
              label: (0, s.WZ)("Open Link"),
              handler({ currEditingNotesHref: e }) {
                (0, O.DL)(e, (e, ...t) => (0, c.JE)().T(e, ...t));
              },
            },
            {
              label: (0, s.WZ)("Copy Link"),
              handler({ currEditingNotesHref: e }) {
                k.clipboard.writeText(e);
              },
            },
            {
              label: (0, s.WZ)("Edit Link"),
              handler() {
                (0, c.JX)().handleCommand("outliner.showNoteLinkInput");
              },
            },
            {
              label: (0, s.WZ)("Remove Link"),
              handler({ currEditingNotesEditor: e }) {
                e && e.removeLink();
              },
            },
            { divider: !0 },
            ...U,
          ],
          AUDIO_NOTES: [
            {
              label: (0, s.WZ)("Delete"),
              commandId: "outliner.removeAudioNotes",
            },
            { divider: !0 },
            {
              label: (0, s.WZ)("Save as"),
              commandId: "outliner.saveAsAudioNote",
            },
          ],
        };
      function Y(e) {
        return u.TK.includes(e.commandId);
      }
      function J(e) {
        return Boolean(
          e.submenu && e.submenu.filter((e) => !e.divider).every(Y),
        );
      }
      function K(e) {
        if (!0 !== e.hideOnDisabled) return !0;
        const t = (0, c.JX)().commandById(e.commandId);
        return !!t && t.enabled;
      }
      const Q = (e) => {
        const t = (e, ...t) => (0, c.JE)().T(e, ...t),
          n = (e) => {
            (0, c.JX)().handleCommand(e);
          },
          i = (e) => {
            var t;
            const n =
              null === (t = (0, E.A)()) || void 0 === t
                ? void 0
                : t.commandById(e);
            return !!n && !!n.enabled;
          };
        function o(r) {
          var a;
          const l = [];
          for (let d = 0; d < r.length; d++) {
            const s = r[d];
            if (s.divider) {
              "separator" !==
                (null === (a = l[l.length - 1]) || void 0 === a
                  ? void 0
                  : a.type) && l.push({ type: "separator" });
              continue;
            }
            if (s.spellCheck) {
              const e = be().trim();
              if (e.length <= 0) continue;
              const n = M.A.getCorrectionsForMisspelling(e);
              if (n.length > 0)
                for (const e of n)
                  l.push({
                    label: e,
                    click: () => {
                      document.execCommand("insertText", !1, e);
                    },
                  });
              else l.push({ label: t("No Guesses Found"), enabled: !1 });
              l.push({ type: "separator" });
              continue;
            }
            let u = s.label;
            s.getLabel && (u = s.getLabel(e.value));
            let p = () => s.handler(e.value);
            if (
              (s.commandId && (p = () => n(s.commandId)),
              "function" == typeof s.getCommandId)
            ) {
              const t = s.getCommandId(e.value);
              (s.commandId = t), (p = () => n(t));
            }
            const g = !true && (Y(s) || J(s));
            l.push(
              Object.assign(
                {
                  label: t("$$", u),
                  click: p,
                  enabled: !s.commandId || i(s.commandId),
                },
                s.shortcut ? { accelerator: (0, C.ic)(s.shortcut) } : {},
                g
                  ? {
                      icon: S().join(
                        (0, A.bY)(),
                        "static/assets/images/pro/menu-pro-small@2x.png",
                      ),
                    }
                  : {},
                s.submenu ? { submenu: o(s.submenu.filter(K)) } : {},
              ),
            );
          }
          return l;
        }
        return {
          openOutlinerCtxMenu: (e) => {
            "TEXT" === e
              ? M.A.setSuggestedBuildSpellContextMenuFn(() => {
                  (0, L.k)(o(X.TEXT.filter(K)));
                })
              : setTimeout(() => {
                  (0, L.k)(o(X[e].filter(K)));
                }, 200);
          },
        };
      };
      var $ = n(37529),
        ee = n.n($),
        te = n(10689);
      const ne = (e) => e.innerText.replace(/&nbsp;/g, " "),
        ie = (e, t, n) => {
          if (n && n.length > 1) {
            const t = document.createDocumentFragment();
            let i;
            for (let e = 0; e < n.length; e++) {
              const o = n[e];
              (i = document.createElement("span")),
                (i.innerText = o.text),
                i.classList.add("outliner-topic-title"),
                t.appendChild(i);
            }
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(t);
          } else e.innerText = t;
        },
        oe = (e, t = document) =>
          e
            ? t.querySelector(`#topic-${(0, te.N)(e)} .outliner-topic-title`)
            : null,
        re = (e, t = document) =>
          e ? t.querySelector(`#topic-${(0, te.N)(e)}`) : null,
        ae = (e) => e.closest(".outliner-topic-container"),
        le = (e) => {
          const t = ae(e);
          return t ? t.dataset.topicId : "";
        },
        de = (e, t = 0) => {
          se(e, t, t);
        },
        ce = (e, t, n, i) => {
          let o = 0;
          const r = ee()(n, t, i);
          for (; r.length > 0 && r[0][0] === ee().EQUAL; )
            o += r.shift()[1].length;
          r.length > 0 && r[0][0] === ee().DELETE && (o += r[0][1].length);
          const a = o;
          for (const [e, t] of r.filter(([e]) => e !== ee().EQUAL))
            e === ee().INSERT
              ? (o += t.length)
              : e === ee().DELETE && (o -= t.length);
          (o = o < 0 ? 0 : o), a !== o && de(e, o);
        },
        se = (e, t = 0, n = 0) => {
          try {
            if (e.childNodes.length <= 0) return void e.focus();
            const i = document.createRange(),
              o = window.getSelection(),
              r = { node: -1, offset: 0, padding: t },
              a = { node: -1, offset: 0, padding: n };
            let l = null,
              d = null;
            for (let t = 0; t < e.childNodes.length; t++) {
              const n = e.childNodes[t];
              if ((r.node++, (l = e.childNodes[r.node]), n.nodeValue)) {
                if (!(r.padding > 0)) break;
                if (n.nodeValue.length >= r.padding) {
                  (r.offset = r.padding), (r.padding = 0);
                  break;
                }
                r.padding -= n.nodeValue.length;
              } else if (
                ("BR" === n.nodeName && r.padding--, "SPAN" === n.nodeName)
              ) {
                if (
                  ((l = e.childNodes[r.node].childNodes[0]), !(r.padding > 0))
                )
                  break;
                if (!(n.innerText.length + r.offset < r.padding)) {
                  (r.offset = r.padding - r.offset), (r.padding = 0);
                  break;
                }
                r.offset += n.innerText.length;
              }
            }
            for (let t = 0; t < e.childNodes.length; t++) {
              const n = e.childNodes[t];
              if ((a.node++, (d = e.childNodes[a.node]), n.nodeValue)) {
                if (!(a.padding > 0)) break;
                if (n.nodeValue.length >= a.padding) {
                  (a.offset = a.padding), (a.padding = 0);
                  break;
                }
                a.padding -= n.nodeValue.length;
              } else if (
                ("BR" === n.nodeName && a.padding--, "SPAN" === n.nodeName)
              ) {
                if (
                  ((d = e.childNodes[a.node].childNodes[0]), !(a.padding > 0))
                )
                  break;
                if (!(n.innerText.length + a.offset < a.padding)) {
                  (a.offset = a.padding - a.offset), (a.padding = 0);
                  break;
                }
                a.offset += n.innerText.length;
              }
            }
            if (!l || !d) return;
            i.setStart(l, r.offset),
              i.setEnd(d, a.offset),
              o.removeAllRanges(),
              o.addRange(i);
          } catch (t) {
            e.focus();
          }
        },
        ue = (e) =>
          Array.from(e)
            .map((e) =>
              "#text" === e.nodeName || "BR" === e.nodeName
                ? e
                : ue(e.childNodes),
            )
            .flat(),
        pe = (e) => {
          const t = e.ownerDocument || e.document,
            n = t.defaultView || t.parentWindow;
          let i;
          if (void 0 !== n.getSelection) {
            if (((i = n.getSelection()), i.rangeCount > 0)) {
              const t = n.getSelection().getRangeAt(0);
              let { startOffset: i, endOffset: o } = t;
              const { startContainer: r, endContainer: a } = t,
                l = ue(e.childNodes),
                d = e === r ? i : Array.prototype.indexOf.call(l, r),
                c = e === a ? o : Array.prototype.indexOf.call(l, a);
              return (
                d > 0 &&
                  (i += Array.prototype.slice
                    .call(l, 0, d)
                    .map((e) => {
                      switch (e.nodeName) {
                        case "#text":
                          return e.nodeValue.length;
                        case "BR":
                          return 1;
                      }
                    })
                    .reduce((e, t) => e + t, 0)),
                c > 0 &&
                  (o += Array.prototype.slice
                    .call(l, 0, c)
                    .map((e) => {
                      switch (e.nodeName) {
                        case "#text":
                          return e.nodeValue.length;
                        case "BR":
                          return 1;
                      }
                    })
                    .reduce((e, t) => e + t, 0)),
                [i, o]
              );
            }
          } else if ((i = t.selection) && "Control" != i.type) {
            const n = i.createRange(),
              o = t.body.createTextRange();
            return (
              o.moveToElementText(e),
              o.setEndPoint("EndToEnd", n),
              [o.startOffset, o.endOffset]
            );
          }
        },
        ge = (e) => {
          const t = pe(e) || [0, 0];
          return t[1] - t[0];
        },
        he = (e) => (pe(e) || [0, 0])[1],
        ve = (e) => {
          const t = document.body.querySelector("#dummy-text-element");
          t && t.parentElement.removeChild(t);
          const n = e.cloneNode(!1);
          (n.id = "dummy-text-element"), document.body.appendChild(n);
          const i = document.createElement("span");
          n.appendChild(i);
          const o = document.createElement("span");
          n.appendChild(o);
          const r = window.getComputedStyle(e, null);
          (n.style.display = "block"),
            (n.style.overflowY = "auto"),
            (n.style.position = "fixed"),
            (n.style.bottom = "100px"),
            (n.style.left = "5000px"),
            (n.style.zIndex = "100"),
            (n.style.width = r.width),
            (n.style.height = r.height),
            (n.style.fontFamily = r.fontFamily),
            (n.style.fontSize = r.fontSize);
          const a = ne(e),
            l = he(e);
          i.innerText = "a";
          const d = Array.from(i.getClientRects())[0].height;
          (i.innerHTML = a
            .slice(0, l)
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(new RegExp(String.fromCharCode(10), "g"), "<br/>")),
            (o.innerHTML = a
              .slice(l)
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(new RegExp(String.fromCharCode(10), "g"), "<br/>"));
          const c = Array.from(i.getClientRects()),
            s = Array.from(o.getClientRects()),
            u = (e, t, n = 0.001) => Math.abs(e - t) < n;
          u(
            s.map(({ height: e }) => e).reduce((e, t) => e + t),
            d,
          );
          return {
            isOnFirstLine:
              0 === a.length ||
              0 === l ||
              (u(
                c.map(({ height: e }) => e).reduce((e, t) => e + t),
                d,
              ) &&
                c[0].top === s[0].top),
            isOnLastLine:
              0 === a.length ||
              u(
                s.map(({ height: e }) => e).reduce((e, t) => e + t),
                d,
              ),
          };
        },
        fe = () => {
          window.getSelection
            ? window.getSelection().empty
              ? window.getSelection().empty()
              : window.getSelection().removeAllRanges &&
                window.getSelection().removeAllRanges()
            : document.selection && document.selection.empty();
        },
        me = (e, t, n, i) => e.substring(0, t) + i + e.substring(n),
        be = () => {
          if (window.getSelection) {
            return window.getSelection().toString();
          }
          return document.selection ? document.selection.toString() : "";
        },
        Ie = (e) => {
          const t = new Image();
          return new Promise((n, i) => {
            (t.onload = function () {
              const { height: e, width: i } = t;
              n({ height: e, width: i });
            }),
              (t.onerror = (e) => i(e)),
              (t.src = e);
          });
        },
        ye = (e, t = -1, n = !1) => {
          if (
            ((e) => {
              const t = e.getBoundingClientRect();
              return (
                t.top >= 0 &&
                t.left >= 0 &&
                t.bottom <=
                  (window.innerHeight ||
                    document.documentElement.clientHeight) &&
                t.right <=
                  (window.innerWidth || document.documentElement.clientWidth)
              );
            })(e) &&
            !n
          )
            return;
          const i = document.querySelector("#outliner");
          if (!i) return;
          const o = i.scrollHeight,
            r = window.innerHeight;
          if (o <= r) return;
          const a = t >= 0 ? t : 0.6 * r,
            l = ((e, t = document.documentElement) => {
              const n = e.getBoundingClientRect(),
                i = t.scrollTop || window.pageYOffset,
                o = t.scrollLeft || window.pageXOffset,
                r = t.offsetTop || 0,
                a = t.offsetLeft || 0,
                l = n.top + i - r,
                d = n.left + o - a,
                c = l + n.height,
                s = d + n.width;
              return {
                top: Math.round(l),
                left: Math.round(d),
                right: Math.round(s),
                bottom: Math.round(c),
                height: n.height,
                width: n.width,
              };
            })(e, i || document.documentElement),
            d = l.top,
            c = l.height,
            s = o - (d + c);
          let u = d - a;
          u + c + s >= o && (u = o - (c + s));
          try {
            i.scrollTo(0, u);
          } catch (e) {
            i.scrollTo({ top: u, left: 0, behavior: "smooth" });
          }
        },
        Te = (e, t = 1) => {
          const n = e.cloneNode(!0);
          n.classList.remove("topic-selected"),
            (n.style.maxWidth = "650px"),
            (n.style.width = "100%"),
            (n.style.position = "fixed"),
            (n.style.left = "5000px"),
            (n.style.padding = "5px 0"),
            (n.style.borderRadius = "5px"),
            (n.style.cursor = "-webkit-grabbing"),
            (n.id = "dummy-" + Math.random().toString(32).substr(2)),
            n.querySelector(".outliner-topic-dot") &&
              n.classList.remove("has-child");
          const i = n.querySelector(".outliner-topic-title");
          i &&
            t > 1 &&
            (n.classList.add("is-folded"),
            (i.dataset.dataChildCount = t.toString()));
          const o = document.createElement("div");
          return o.appendChild(n), document.body.appendChild(o), o;
        },
        xe = (e) => {
          const t = oe(e);
          t && (ye(t), t.focus(), de(t, ne(t).length));
        };
      var ke = n(67657),
        we = n(57310),
        Se = n.n(we),
        Ce = n(57147),
        Ee = n(5893),
        Le = n(13382),
        Me = n(94593),
        Oe = n(90435),
        Ae = n(54856);
      const Fe = (e) => k.shell.openPath(e),
        Ne = (e) => k.shell.showItemInFolder(e);
      var Pe = n(42799),
        De = n(94787),
        qe = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      function _e(e) {
        var t;
        return qe(this, void 0, void 0, function* () {
          const { handleOutlinerOperation: n } = Ti(),
            i = (e, ...t) => (0, c.JE)().T(e, ...t);
          if (e.webpage) {
            if (u.nd) return void Oe.ZP.fetch(Ae.QN);
            !(function (e, t = (e) => e) {
              const n = Se().parse(e).protocol;
              k.shell.openExternal(n ? e : `http://${e}`).catch(() => {
                (0, Le.N0)({
                  title: "Xmind",
                  message: t("Unable to open link."),
                  detail: t(
                    "This link is invalid and cannot be opened through browser.",
                  ),
                  buttons: [t("OK")],
                });
              });
            })(e.webpage, i);
          }
          if (e.topicLink) {
            const { document: o } = (0, p.nZ)(),
              r = Se().parse(e.topicLink).hash.substring(1);
            if (
              !(null === (t = o.value.query({ id: r })) || void 0 === t
                ? void 0
                : t.asTopic())
            ) {
              const [t] = yield (0, Le.N0)({
                title: i("Invalid Topic Link"),
                message: i(
                  "The target topic may have been deleted. Do you want to delete this topic link as well?",
                ),
                buttons: [i("Delete It"), i("No")],
                defaultId: 0,
                cancelId: 1,
              });
              return void (
                0 === t &&
                n({ type: "deleteAttrs", topicId: e.topicId, topicLink: !0 })
              );
            }
            (0, c.JX)().handleCommand("editor.selectTopicById", { topicId: r });
          }
          if (e.localFileLink) {
            let t, n;
            0;
            try {
              t = (0, Ee.iZ)(e.localFileLink);
            } catch (n) {
              t = e.localFileLink.slice(5);
            }
            const { source: o } = (0, Pe.F)();
            if (S().isAbsolute(t)) n = t;
            else {
              if (!o.startsWith("file:")) return;
              {
                const e = (0, Ee.iZ)(o),
                  i = S().dirname(e);
                n = S().join(i, t);
              }
            }
            try {
              Me.Z.accessSync(n, Ce.constants.F_OK), yield Fe(n);
            } catch (e) {
              yield (0, Le.N0)({
                title: "Xmind",
                message: i("Failed to open this file link."),
                detail: i(
                  "Probably the location or name of this file/folder is changed.",
                ),
                buttons: [i("OK")],
                defaultId: 0,
              });
            }
          }
          if (e.attachment) {
            const { getResourceUrlByXapUrl: t } = (0, p.nZ)(),
              {
                lastSaveDirectory: n,
                doNotShowAttachmentMessageAgain: o,
                setDoNotShowAttachmentMessageAgain: r,
              } = (0, c._I)(),
              a = yield t(e.attachment),
              l = (0, Ee.iZ)(a);
            let d = "";
            try {
              d = n || ke.app.getPath("downloads");
            } catch (e) {
              d = "downloads";
            }
            const s = S().extname(l);
            let u = e.title;
            if ((u && !u.endsWith(s) && (u += s), o)) Ze(l, d, u);
            else {
              const { response: e, checkboxChecked: t } =
                yield ke.dialog.showMessageBox({
                  title: "Xmind",
                  message: i("Trying to Open Attachment"),
                  detail: i(
                    "Xmind will save this attachment to $1 and open with default application in your system.",
                    d,
                  ),
                  checkboxLabel: i("Don't show this message again."),
                  buttons: [i("Save and Open"), i("Cancel")],
                  defaultId: 0,
                  cancelId: 1,
                });
              0 === e && (t && r(), Ze(l, d, u));
            }
          }
        });
      }
      function Ze(e, t, n) {
        return qe(this, void 0, void 0, function* () {
          const i = (e, ...t) => (0, c.JE)().T(e, ...t),
            { setLastDirectory: o } = (0, c._I)();
          try {
            Me.Z.accessSync(t, Ce.constants.F_OK | Ce.constants.W_OK);
            const i = (0, Ee.AK)(t, n);
            if (!i) return;
            const o = S().join(t, i);
            yield Me.Z.copyFile(e, o);
            try {
              ".xmind" === S().extname(o) &&
                Me.Z.accessSync(o, Ce.constants.F_OK | Ce.constants.W_OK),
                yield Fe(o);
            } catch (e) {
              Ne(o);
            }
          } catch (r) {
            const [a] = yield (0, Le.N0)({
              title: "Xmind",
              message: i("Failed to Save File"),
              detail: i(
                "Xmind doesn't have permission to save file to $1, please choose another folder to save.",
                t,
              ),
              buttons: [i("Choose Folder"), i("Cancel")],
              defaultId: 0,
              cancelId: 1,
            });
            if (0 === a) {
              const t = yield (0, Le.ZZ)({
                title: "Save",
                suggestPath: { suggestedName: n },
              });
              if (t) {
                const i = S().dirname(t);
                o({ lastSaveDirectory: i }), yield Ze(e, i, n);
              }
            }
          }
        });
      }
      function Be(e) {
        var t;
        return qe(this, void 0, void 0, function* () {
          const n = (e, ...t) => (0, c.JE)().T(e, ...t);
          let i = "";
          if (e.webpage)
            try {
              const t = yield Oe.ZP.fetch(Ae.lf.FETCH_URL_METADATA, e.webpage),
                n = Object.assign({ title: "" }, t);
              i = (function (e) {
                let t = e;
                if (!t) return "";
                for (; t.indexOf("&#x") >= 0; ) {
                  const [e, n] = t.match(/&#x([\d\w]+);/m);
                  t = t.replace(e, String.fromCharCode(parseInt(n, 16)));
                }
                return t;
              })(n["og:title"] || n.title || e.webpage);
            } catch (t) {
              console.error(t), (i = e.webpage);
            }
          if (e.topicLink) {
            const { document: o, sheets: r } = (0, p.nZ)(),
              a = Se().parse(e.topicLink).hash.substring(1),
              l =
                null === (t = o.value.query({ id: a })) || void 0 === t
                  ? void 0
                  : t.asTopic();
            if (l) {
              i = `${r.value.find((e) => e.id === l.ownerSheet.id).title}  → ${l.title}`;
            } else i = n("Invalid Topic Link");
          }
          if (
            (e.localFileLink &&
              (i = decodeURIComponent(
                S().basename(Se().parse(e.localFileLink).path),
              )),
            e.attachment)
          ) {
            i = `${S().extname(Se().parse(e.attachment).path).substring(1).toUpperCase()} ${n("File")}`;
          }
          return i;
        });
      }
      function He({ topicId: e }) {
        const { outlinerState: t } = Ti();
        if (!e) return;
        const n = t.value.topicItems.filter((e) => !e.hidden),
          i = n.findIndex((t) => t.topicId === e);
        if (-1 === i || 0 === i) return;
        const o = n[i - 1],
          r = oe(o.topicId);
        r && de(r, 0);
      }
      function je({ topicId: e }) {
        const { outlinerState: t } = Ti();
        if (!e) return;
        const n = t.value.topicItems.filter((e) => !e.hidden),
          i = n.findIndex((t) => t.topicId === e);
        if (-1 === i || i === n.length - 1) return;
        const o = n[i + 1],
          r = oe(o.topicId);
        r && de(r, 0);
      }
      const Re = () => {
          const { activeSheet: e } = (0, p.nZ)();
          return p.HG.allLabelsFromSheet(e.value);
        },
        ze = ({ equation: e }) =>
          qe(void 0, void 0, void 0, function* () {
            const t = yield (0, p.nZ)().generateMathJaxSVG(e),
              n = yield (0, p.nZ)().isMathJaxValid(e);
            return { imageSource: p.ZQ.getSVGUri(t), isMathJaxValid: n };
          }),
        We = ({ equation: e }) =>
          qe(void 0, void 0, void 0, function* () {
            const { createXapUrlByArrayBuffer: t } = (0, p.nZ)(),
              { imageSource: n } = yield ze({ equation: e }),
              i = yield (0, De.qM)(n, 1, "blob"),
              o = yield i.arrayBuffer();
            return yield t(o, ".png");
          }),
        Ge = ({ markerId: e }) => {
          const { markerModule: t } = (0, p.nZ)(),
            { getMarkerGroupById: n, getMarkerInfoById: i } = t,
            o = t.getMarkerInfoById(e);
          if (o) {
            const e = n(o.groupId);
            return e
              ? e.markerIds
                  .map((e) => {
                    const { imageSrc: t, id: n, hidden: o } = i(e);
                    if (o) return;
                    t.split("\\").join("/");
                    return { id: n, url: t };
                  })
                  .filter(Boolean)
              : [];
          }
          return [];
        },
        Ve = (e) => {
          const { activeSheet: t, changeDoc: n } = (0, p.nZ)();
          n(
            t.value
              .asMutable()
              .attrs({ labelSortOrder: "auto" === e ? "auto" : "manual" })
              .commit().ownerDocument,
          );
        },
        Ue = (e, t) => p.HG.sortTopicLabels(e, t);
      var Xe = n(10182),
        Ye = n(96595),
        Je = n(10102),
        Ke = n(21029),
        Qe = n(69537),
        $e = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      function et() {
        return $e(this, void 0, void 0, function* () {
          const { outlinerState: e } = Ti(),
            { currEditingTopicId: t, selectionIds: n, topicItems: i } = e.value;
          if (n.length > 1) return;
          const o = n[0] || t;
          if (!o) return;
          const r = i.find((e) => e.topicId === o);
          if (!r) return;
          const a = Vn(o),
            l = oe(o);
          if (!l) return;
          const d = e.value.topicItems.find(
              (e) => e.topicId === r.parentTopicId,
            ),
            c = o === i[0].topicId,
            s = Yn(r),
            u = he(l),
            p =
              !c &&
              !(
                s !== (null == d ? void 0 : d.children.length) - 1 ||
                1 === r.depth ||
                r.image ||
                r.notes ||
                r.labels.length > 0 ||
                r.markers.length > 0
              );
          switch (!0) {
            case 1 === n.length:
              ti(
                Object.assign(
                  Object.assign(
                    {
                      type: "add",
                      topicType: r.topicType,
                      parentTopicId:
                        r.descendantLength > 0 ? o : r.parentTopicId,
                      targetIndex: r.descendantLength > 0 ? 0 : s + 1,
                      title: "",
                      callback: Jn,
                    },
                    r.task && { task: "todo" },
                  ),
                  r.numbering &&
                    "attached" === r.topicType && {
                      numbering: {
                        numberingPattern: r.numbering.numberingPattern,
                      },
                    },
                ),
              );
              break;
            case u < a.length ||
              (!c && 0 === a.length && s < d.children.length - 1): {
              const e = a.slice(0, u),
                t = a.slice(u);
              let n = [],
                i = [];
              r.attributedTitle.length > 1 &&
                ([n, i] = vi(r.attributedTitle, u)),
                yield ti({
                  type: "update",
                  topicId: o,
                  title: e,
                  attributedTitle: n,
                }),
                yield ii([o], {
                  labels: !0,
                  notes: !0,
                  webpage: !0,
                  localFileLink: !0,
                  topicLink: !0,
                  attachment: !0,
                  equation: !0,
                  image: !0,
                  audioNotes: !0,
                }),
                yield ti(
                  Object.assign(
                    Object.assign(
                      {
                        type: "add",
                        topicType: r.topicType,
                        parentTopicId: c ? o : r.parentTopicId,
                        targetIndex: c ? 0 : s + 1,
                        title: t,
                        attributedTitle: i,
                        labels: r.labels,
                        notes: r.notes,
                        webpage: r.webpage,
                        localFileLink: r.localFileLink,
                        topicLink: r.topicLink,
                        attachment: r.attachment,
                        equation: r.equation,
                        image: r.image,
                        audioNotes: r.audioNotes,
                        callback: Jn,
                      },
                      r.task && { task: "todo" },
                    ),
                    r.numbering &&
                      "attached" === r.topicType && {
                        numbering: {
                          numberingPattern: r.numbering.numberingPattern,
                        },
                      },
                  ),
                );
              break;
            }
            case a.length > 0 || (0 === a.length && !p):
              ti(
                Object.assign(
                  Object.assign(
                    {
                      type: "add",
                      topicType: r.topicType,
                      parentTopicId:
                        c || (r.descendantLength > 0 && !r.folded)
                          ? o
                          : r.parentTopicId,
                      targetIndex:
                        c || (r.descendantLength > 0 && !r.folded) ? 0 : s + 1,
                      title: "",
                      callback: Jn,
                    },
                    r.task && { task: "todo" },
                  ),
                  r.numbering &&
                    "attached" === r.topicType && {
                      numbering: {
                        numberingPattern: r.numbering.numberingPattern,
                      },
                    },
                ),
              );
              break;
            case 0 === a.length && p:
              ri();
          }
        });
      }
      function tt() {
        const { document: e, changeDoc: t } = (0, p.nZ)(),
          { outlinerState: n } = Ti(),
          { selectionIds: i, topicItems: o } = n.value,
          r = Wn(),
          a = i.length > 0 ? i : r ? [r.topicId] : [],
          l = a.reduce((e, t) => {
            const n = o.find((e) => e.topicId === t);
            return n ? e.concat(n.children) : e;
          }, []);
        let d = e.value;
        a
          .filter((e) => !l.includes(e))
          .map((e) =>
            $e(this, void 0, void 0, function* () {
              var t, n, i, r, a;
              const l = o.find((t) => t.topicId === e),
                c =
                  null === (t = d.query({ id: l.parentTopicId })) ||
                  void 0 === t
                    ? void 0
                    : t.asTopic(),
                s = d.queryList([{ id: e }]).clone(),
                u =
                  ("detached" === l.topicType
                    ? c.detachedChildren
                    : c.children
                  ).findIndex((t) => t.id === e) + 1;
              d =
                "detached" === l.topicType
                  ? null ===
                      (i =
                        null ===
                          (n = c
                            .asMutable()
                            .addDetachedChildren(s, { at: u })) || void 0 === n
                          ? void 0
                          : n.commit()) || void 0 === i
                    ? void 0
                    : i.ownerDocument
                  : null ===
                        (a =
                          null ===
                            (r = c.asMutable().addChildren(s, { at: u })) ||
                          void 0 === r
                            ? void 0
                            : r.commit()) || void 0 === a
                    ? void 0
                    : a.ownerDocument;
            }),
          ),
          t(d);
      }
      function nt({ topicId: e }) {
        var t;
        return $e(this, void 0, void 0, function* () {
          const {
              document: n,
              sheets: i,
              activeSheet: r,
              executeEditorAction: a,
            } = (0, p.nZ)(),
            {
              outlinerSheetModel: l,
              outlinerState: d,
              maxTopicsLoopNum: c,
              updateOutlinerState: h,
            } = Ti();
          let v =
            null === (t = n.value.query({ id: e })) || void 0 === t
              ? void 0
              : t.asTopic();
          if (!v) return;
          const f = i.value.find((e) => e.id === v.ownerSheet.id);
          if (!f) return;
          const m = () => {
            const {
                attachedTopicsLoopStartIndex: t,
                attachedTopicsLoopEndIndex: n,
                detachedTopicsLoopStartIndex: i,
                detachedTopicsLoopEndIndex: r,
                topicsLoopNum: a,
                topicItems: s,
              } = d.value,
              u = s.findIndex((t) => t.topicId === e);
            if (-1 === u) return;
            const p = l.value.attached.length;
            if (
              (u >= t && u <= n + 1) ||
              (n >= p && u >= p + i && u <= p + r)
            ) {
              const t = oe(e);
              if (!t) return;
              const n = ae(t);
              if (!n) return;
              h({ selectionIds: [e] }), ye(n);
            } else {
              let e = 0,
                t = 0;
              u > c.value &&
                (u > p
                  ? ((e = Math.max(p - c.value, 0)),
                    (t = Math.max(u - p - (u % a) - a, 0)))
                  : (e = Math.max(u - (u % a) - a, 0))),
                h({
                  attachedTopicsLoopStartIndex: e,
                  attachedTopicsLoopEndIndex: e + c.value,
                  detachedTopicsLoopStartIndex: t,
                  detachedTopicsLoopEndIndex: t + c.value,
                }),
                (0, o.Y3)(() => {
                  m();
                });
            }
          };
          yield (() =>
            $e(this, void 0, void 0, function* () {
              var e;
              const { topicItems: t } = d.value,
                n = [],
                i = t.reduce(
                  (e, t) =>
                    Object.assign(Object.assign({}, e), { [t.topicId]: !0 }),
                  {},
                );
              for (; v.parentTopic && !i[v.id]; )
                "folded" ===
                  (null === (e = v.parentTopic) || void 0 === e
                    ? void 0
                    : e.branchState) && n.push(v.parentTopic.id),
                  (v = v.parentTopic);
              yield Promise.all(
                n.map((e) => {
                  ti({ type: "update", topicId: e, branchState: null });
                }),
              );
            }))(),
            f.id === r.value.id
              ? m()
              : ((0, g.E)().updateSheetRendering({
                  sheetRendering: !0,
                  sheetRenderingStartAt: new Date().getTime(),
                }),
                yield (0, s._v)(100),
                a({ name: "mutateEditor:switchSheet", inputValue: f.id }),
                setTimeout(() => {
                  m();
                }, u.oY));
        });
      }
      function it() {
        const { outlinerState: e } = Ti(),
          { selectionIds: t } = e.value,
          n = Wn(),
          i = t.length > 0 ? t : n ? [n.topicId] : [];
        0 !== i.length &&
          ii(i, {
            labels: !0,
            markers: !0,
            notes: !0,
            webpage: !0,
            localFileLink: !0,
            topicLink: !0,
            attachment: !0,
            equation: !0,
            image: !0,
            audioNotes: !0,
            task: !0,
            numbering: !0,
          });
      }
      function ot() {
        return $e(this, void 0, void 0, function* () {
          const { outlinerState: e } = Ti(),
            { selectionIds: t } = e.value,
            n = Wn(),
            i = t.length > 0 ? t : n ? [n.topicId] : [];
          0 !== i.length &&
            (yield Promise.all(
              i.map((e) => {
                ti({ type: "update", topicId: e, title: "" });
              }),
            ));
        });
      }
      var rt = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      function at() {
        return rt(this, void 0, void 0, function* () {
          const { outlinerState: e } = Ti(),
            { selectionIds: t, topicItems: n } = e.value,
            i = Wn(),
            o = (t.length > 0 ? t : i ? [i.topicId] : []).reduce((e, t) => {
              const i = n.find((e) => e.topicId === t);
              return (null == i ? void 0 : i.descendantLength) > 0
                ? e.concat(i)
                : e;
            }, []);
          yield Promise.all(
            o.map((e) =>
              ti({
                type: "update",
                topicId: e.topicId,
                branchState:
                  e.descendantLength > 0 && e.folded ? null : "folded",
              }),
            ),
          );
        });
      }
      function lt(e) {
        const { activeSheet: t } = (0, p.nZ)(),
          n = e.reduce((e, n) => {
            var i;
            const o =
              null === (i = t.value.query({ id: n })) || void 0 === i
                ? void 0
                : i.asTopic();
            return o && o.children.length > 0
              ? e.concat(o, lt(o.children.map((e) => e.id)))
              : e;
          }, []);
        return Array.from(new Set(n));
      }
      function dt() {
        return rt(this, void 0, void 0, function* () {
          const { outlinerState: e } = Ti(),
            { selectionIds: t, topicItems: n } = e.value,
            i = Wn(),
            o = lt(t.length > 0 ? t : i ? [i.topicId] : [n[0].topicId]),
            r = o.some(
              (e) => e.children.length > 0 && "folded" !== e.branchState,
            )
              ? "folded"
              : null;
          yield Promise.all(
            o
              .filter((e) => e.branchState !== r)
              .map((e) =>
                ti({ type: "update", topicId: e.id, branchState: r }),
              ),
          );
        });
      }
      function ct() {
        const { isInBranchOnly: e } = (0, p.nZ)();
        e.value
          ? (0, c.JX)().handleCommand("editor.exitBranchOnly")
          : (0, c.JX)().handleCommand("editor.showBranchOnly");
      }
      function st() {
        const { activeSheetId: e, changeViewerState: t } = (0, p.nZ)(),
          { outlinerState: n, outlinerSheetModel: i } = Ti(),
          { currEditingTopicId: o, selectionIds: r } = n.value;
        if (r.length > 1) return;
        const a = i.value.detached.map((e) => e.topicId);
        t(
          e.value,
          Object.assign(
            {
              selection: { kind: "topics", topics: r },
              scopeTopicId: 1 === r.length ? r[0] : o,
            },
            a.length > 0 && { hiddenFloatingTopics: a },
          ),
        );
      }
      function ut() {
        const { activeSheetId: e, changeViewerState: t } = (0, p.nZ)();
        t(e.value, { scopeTopicId: null, hiddenFloatingTopics: null });
      }
      function pt(e) {
        const { outlinerState: t } = Ti(),
          { selectionIds: n, topicItems: i } = t.value,
          o = Wn(),
          r = n.length > 0 ? n : o ? [o.topicId] : [];
        if (0 === r.length) return;
        const a = r.map((e) => i.find((t) => t.topicId === e));
        for (const { topic: t, depthLevel: n } of gt({
          topicItems: i,
          targetTopics: a,
          maxLevel: e,
        })) {
          const i = n === e ? "folded" : null;
          ti({ type: "update", topicId: t.topicId, branchState: i });
        }
      }
      function* gt({
        topicItems: e,
        targetTopics: t,
        maxLevel: n,
        prevDepthLevel: i,
      }) {
        for (const o of t) {
          const t = null != i ? i + 1 : 0;
          if ((yield { topic: o, depthLevel: t }, t > n)) return;
          const r = e.filter((e) => o.children.includes(e.topicId));
          for (const i of gt({
            topicItems: e,
            targetTopics: r,
            maxLevel: n,
            prevDepthLevel: t,
          }))
            yield i;
        }
      }
      function ht(e) {
        const { activeSheet: t, changeDoc: n } = (0, p.nZ)(),
          { outlinerState: i } = Ti(),
          { selectionIds: o } = i.value,
          r = Wn(),
          a = o.length > 0 ? o : r ? [r.topicId] : [];
        if (0 === a.length) return;
        n(e(a, t.value).ownerDocument);
      }
      function vt() {
        ht(p.HG.addTopicsTask);
      }
      function ft() {
        ht(p.HG.removeTopicsTask);
      }
      function mt() {
        ht(p.HG.checkTopicsTask);
      }
      function bt() {
        ht(p.HG.uncheckTopicsTask);
      }
      function It() {
        ht(p.HG.changeTopicsQuickStyleToCrossOutWithCancelingTopicsTask);
      }
      function yt(e, t) {
        const { activeSheet: n, changeDoc: i } = (0, p.nZ)(),
          { outlinerState: o } = Ti(),
          { selectionIds: r } = o.value,
          a = Wn(),
          l = r.length > 0 ? r : a ? [a.topicId] : [];
        if (0 === l.length) return;
        i(e(l, n.value, t).ownerDocument);
      }
      var Tt = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      function xt() {
        return Tt(this, void 0, void 0, function* () {
          const { outlinerState: e, updateOutlinerState: t } = Ti(),
            { currEditingTopicId: n, selectionIds: i, topicItems: o } = e.value;
          if (n === o[0].topicId) return;
          const r = ei();
          i.length > 0
            ? (yield li(i), t({ selectionIds: [] }))
            : yield ti({ type: "delete", topicId: n });
          Un(o[r - 1].topicId);
        });
      }
      function kt() {
        return wt({ isDelKey: !0 });
      }
      function wt({ isDelKey: e = !1 } = {}) {
        return Tt(this, void 0, void 0, function* () {
          const {
              outlinerState: t,
              outlinerSheetModel: n,
              updateOutlinerState: i,
            } = Ti(),
            {
              selectionIds: o,
              topicItems: r,
              selectonType: a,
              topicsLoopNum: l,
              inputMethodInputting: d,
            } = t.value;
          if (!d)
            switch (a) {
              case mi.TEXT: {
                const t = Wn();
                if (!t) return;
                const n = oe(t.topicId);
                if (!n) return;
                const i = Vn(t.topicId);
                if (0 !== he(n) || e)
                  e
                    ? document.execCommand("forwardDelete")
                    : document.execCommand("delete");
                else {
                  if (t.numbering) return void yt(p.HG.clearTopicsNumbering);
                  if (t.markers.length > 0)
                    return void ti({
                      type: "update",
                      topicId: t.topicId,
                      markers: t.markers.slice(0, -1).map((e) => e.id),
                    });
                  if (t.task) return void ft();
                  const e = r.findIndex((e) => e.topicId === t.topicId);
                  if (0 === e) return;
                  const o = r[e - 1];
                  if (
                    o.depth !== t.depth ||
                    (o.depth === t.depth && o.descendantLength > 0)
                  ) {
                    if (i || t.descendantLength > 0) return;
                    if (o.folded) {
                      const e = lt([o.topicId]).filter(
                        (e) => "folded" === e.branchState,
                      );
                      return (
                        ti({ type: "delete", topicId: t.topicId }),
                        void (yield Promise.all(
                          e.map((e) =>
                            ti({
                              type: "update",
                              topicId: e.id,
                              branchState: null,
                            }),
                          ),
                        ))
                      );
                    }
                  }
                  const a = o.title,
                    l = o.markers,
                    d = hi(
                      { title: a, attributedTitle: o.attributedTitle },
                      { title: i, attributedTitle: t.attributedTitle },
                    );
                  if (t.descendantLength > 0)
                    return (
                      yield ti({ type: "delete", topicId: o.topicId }),
                      ti({
                        type: "update",
                        topicId: t.topicId,
                        title: a + i,
                        attributedTitle: d,
                        markers: l.map((e) => e.id),
                      }),
                      void setTimeout(() => {
                        de(n, a.length || i.length);
                      })
                    );
                  const c = oe(o.topicId);
                  ie(c, a + i, d),
                    de(c, a.length || i.length),
                    ti({ type: "delete", topicId: t.topicId }),
                    ti({
                      type: "update",
                      topicId: o.topicId,
                      title: a + i,
                      attributedTitle: d,
                    });
                }
                break;
              }
              case mi.TOPIC: {
                const e = r[ei() - 1];
                if (!e) return;
                e.topicId === n.value.central.topicId &&
                  i({
                    attachedTopicsLoopStartIndex: 0,
                    attachedTopicsLoopEndIndex: l,
                  }),
                  yield li(o),
                  i({ selectionIds: [] }),
                  Un(e.topicId);
                break;
              }
              case mi.IMAGE:
                ni({ image: !0 });
                break;
              case mi.EQUATION:
                ni({ equation: !0, image: !0 });
            }
        });
      }
      var St = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      function Ct() {
        return St(this, void 0, void 0, function* () {
          const { outlinerState: e } = Ti(),
            { selectionIds: t, topicItems: n } = e.value,
            i = Wn(),
            o = t.length > 0 ? t : i ? [i.topicId] : [],
            r = o.reduce((e, t) => {
              const i = n.find((e) => e.topicId === t);
              return i ? e.concat(i.children) : e;
            }, []),
            a = o
              .filter((e) => !r.includes(e))
              .map((e) => n.find((t) => t.topicId === e))
              .sort(
                (e, t) =>
                  n.findIndex((t) => t.topicId === e.topicId) -
                  n.findIndex((e) => e.topicId === t.topicId),
              ),
            l = [];
          for (let e = 0; e < a.length; e++) {
            const t = a[e];
            let i = "",
              o = 0;
            if (
              "detached" === t.topicType &&
              n[0].detachedChildren[0] === t.topicId
            ) {
              const e = n.filter(
                  (e) => "attached" === e.topicType && 1 === e.depth,
                ),
                t = e[e.length - 1];
              (i = t.topicId), (o = t.children.length);
            } else {
              const n = Kn(t);
              if (!n) continue;
              if (e >= 1 && t.depth === a[e - 1].depth) {
                const t = l.find((t) => t.topicId === a[e - 1].topicId);
                if (!t) continue;
                (i = t.toParentTopicId), (o = t.toTargetIndex + 1);
              } else (i = n.topicId), (o = n.children.length);
            }
            l.push({
              type: "move",
              topicId: t.topicId,
              toParentTopicId: i,
              toTargetIndex: o,
            });
          }
          yield Promise.all(l.map((e) => ti(e)));
        });
      }
      function Et() {
        const { outlinerState: e, updateOutlinerState: t } = Ti(),
          {
            currEditingTopicId: n,
            selectionIds: i,
            startTopicId: o,
            topicItems: r,
          } = e.value;
        if (0 === i.length) return void t({ selectionIds: [n] });
        const a = i[0],
          l = i[i.length - 1],
          d = r.find((e) => e.topicId === a),
          c = r.find((e) => e.topicId === l),
          s = Kn(d),
          u = Kn(c);
        let p = "";
        if (
          (a === o && u && (p = u.topicId), l === o && s && (p = s.topicId), !p)
        )
          return;
        let g = r.findIndex(({ topicId: e }) => e === o),
          h = r.findIndex((e) => e.topicId === p);
        h < g && ([g, h] = [h, g]);
        t({ selectionIds: r.slice(g, h + 1).map((e) => e.topicId) });
      }
      function Lt() {
        const { outlinerState: e, updateOutlinerState: t } = Ti(),
          {
            currEditingTopicId: n,
            selectionIds: i,
            startTopicId: o,
            topicItems: r,
          } = e.value;
        if (0 === i.length) return void t({ selectionIds: [n] });
        const a = i[0],
          l = i[i.length - 1],
          d = r.find((e) => e.topicId === a),
          c = r.find((e) => e.topicId === l),
          s = Qn(d),
          u = Qn(c);
        let p = "";
        if (
          (a === o && u && (p = u.topicId), l === o && s && (p = s.topicId), !p)
        )
          return;
        let g = r.findIndex(({ topicId: e }) => e === o),
          h = r.findIndex((e) => e.topicId === p);
        h < g && ([g, h] = [h, g]);
        t({ selectionIds: r.slice(g, h + 1).map((e) => e.topicId) });
      }
      function Mt() {
        const { outlinerState: e } = Ti(),
          { currEditingTopicId: t, selectionIds: n, topicItems: i } = e.value,
          o = (t ? [t] : n).map((e) => i.find((t) => t.topicId === e));
        for (let e = 0; e < o.length; e++) {
          const t = o[e],
            n = Kn(t);
          if (!n) break;
          const i = Yn(n);
          ti({
            type: "move",
            topicType: t.topicType,
            topicId: t.topicId,
            toParentTopicId: t.parentTopicId,
            toTargetIndex: i,
          });
        }
      }
      function Ot() {
        const { outlinerState: e } = Ti(),
          { currEditingTopicId: t, selectionIds: n, topicItems: i } = e.value,
          o = (t ? [t] : n).map((e) => i.find((t) => t.topicId === e));
        for (let e = o.length - 1; e >= 0; e--) {
          const t = o[e],
            n = Qn(t);
          if (!n) break;
          const i = Yn(n);
          ti({
            type: "move",
            topicType: t.topicType,
            topicId: t.topicId,
            toParentTopicId: t.parentTopicId,
            toTargetIndex: i,
          });
        }
      }
      function At() {
        const { outlinerState: e } = Ti(),
          { currEditingTopicId: t } = e.value;
        if (!t) return;
        const n = oe(t);
        n && de(n, 0);
      }
      function Ft() {
        const { outlinerState: e } = Ti(),
          { currEditingTopicId: t } = e.value;
        if (!t) return;
        const n = oe(t);
        n && de(n, ne(n).length);
      }
      function Nt() {
        const e = Kn(Wn());
        if (!e) return;
        const t = oe(e.topicId);
        de(t, ne(t).length);
      }
      function Pt() {
        const e = Qn(Wn());
        if (!e) return;
        const t = oe(e.topicId);
        de(t, ne(t).length);
      }
      function Dt() {
        const { outlinerState: e, updateOutlinerState: t } = Ti(),
          { currEditingTopicId: n, selectionIds: i, topicItems: o } = e.value;
        if (i.length !== o.length - 1)
          if (n) {
            const e = oe(n);
            if (!e) return;
            if (ge(e) === ne(e).length) return fe(), void r();
            se(e, 0, ne(e).length);
          } else r();
        function r() {
          t({ selectionIds: o.slice(1).map((e) => e.topicId) });
        }
      }
      var qt = n(76057);
      function _t({ value: e }) {
        const { markerModule: t } = (0, p.nZ)(),
          n = Wn();
        if (!n) return;
        let i = n.markers.map((e) => e.id);
        const o = i.find((n) => t.isSiblingMarkers(n, e));
        (i = o ? i.map((t) => (t === o ? e : t)) : i.concat(e)),
          ti({ type: "update", topicId: n.topicId, markers: i });
      }
      function Zt() {
        const { outlinerState: e, updateOutlinerState: t } = Ti(),
          { currEditingMarkerId: n } = e.value,
          i = Wn();
        if (!i) return;
        const o = oe(i.topicId);
        if (!o) return;
        const r = ae(o)
          .querySelector(".outliner-topic-marker-container")
          .getBoundingClientRect();
        t({
          popoverEditorState: {
            visible: "marker",
            payload: {
              topicId: i.topicId,
              editorRect: r,
              markers: i.markers,
              markerId: n,
            },
          },
        });
      }
      function Bt() {
        const { outlinerState: e } = Ti(),
          { selectionIds: t } = e.value,
          n = Wn(),
          i = t.length > 0 ? t : n ? [n.topicId] : [];
        0 !== i.length && ii(i, { markers: !0 });
      }
      var Ht = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      function jt({ value: e }) {
        return Ht(this, void 0, void 0, function* () {
          const { getResourceUrlByXapUrl: t } = (0, p.nZ)(),
            { outlinerState: n } = Ti(),
            { selectionIds: i, topicItems: o } = n.value,
            r = Wn(),
            a = i.length > 0 ? i : r ? [r.topicId] : [],
            l = a.map((e) => o.find((t) => t.topicId === e));
          if (0 === l.length) return;
          yield Promise.all(
            l
              .filter((e) => !!e.equation)
              .map(({ topicId: e }) => {
                ti({ type: "deleteAttrs", topicId: e, equation: !0 });
              }),
          );
          const d = yield t(e),
            { width: c, height: s } = yield Ie(d);
          yield Promise.all(
            a.map((t) => {
              ti({
                type: "update",
                topicId: t,
                image: { src: e, width: c, height: s },
              });
            }),
          );
        });
      }
      function Rt() {
        return Ht(this, void 0, void 0, function* () {
          const { createXapUrl: e, getResourceUrlByXapUrl: t } = (0, p.nZ)(),
            n = Wn();
          if (!n) return;
          const { filePaths: i, canceled: o } = yield ke.dialog.showOpenDialog(
            (0, ke.getCurrentWindow)(),
            {
              buttonLabel: ((e, ...t) => (0, c.JE)().T(e, ...t))("Insert"),
              filters: [
                {
                  name: "All",
                  extensions: [
                    "png",
                    "apng",
                    "jpg",
                    "jpeg",
                    "jpe",
                    "jif",
                    "jfif",
                    "jfi",
                    "tif",
                    "webp",
                    "gif",
                    "svg",
                    "xbm",
                    "xbm",
                    "dib",
                    "ico",
                    "avif",
                    "bmp",
                  ],
                },
                { name: "PNG", extensions: ["png", "apng"] },
                {
                  name: "JPG",
                  extensions: ["jpg", "jpeg", "jpe", "jif", "jfif", "jfi"],
                },
                { name: "WebP", extensions: ["webp"] },
                { name: "GIF", extensions: ["gif"] },
                { name: "SVG", extensions: ["svg"] },
                { name: "XBM", extensions: ["xbm"] },
                { name: "BMP", extensions: ["xbm", "dib", "bmp"] },
                { name: "ICO", extensions: ["ico"] },
                { name: "AVIF", extensions: ["avif"] },
              ],
            },
          );
          if (o || !i || !i.length) return;
          const r = i[0];
          if (Me.Z.existsSync(r)) {
            const i = yield e(r),
              o = yield t(i);
            let { width: a, height: l } = yield Ie(o);
            const d = l / a;
            a < Ii.MIN
              ? ((a = Ii.MIN), (l = a * d))
              : a > Ii.MAX && ((a = Ii.MAX), (l = a * d)),
              n.equation && ni({ equation: !0 }),
              ti({
                type: "update",
                topicId: n.topicId,
                image: { src: i, width: a, height: l },
              });
          }
        });
      }
      function zt() {
        return Ht(this, void 0, void 0, function* () {
          const { stage: e } = (0, Pe.F)(),
            t = Wn();
          if (!t) return;
          const n = t.image.src.split("/").slice(-1).pop(),
            i = yield e.take(t.image.src.replace("xap:", ""));
          ai(n).then(function (e) {
            Me.Z.writeFileSync(e, i);
          });
        });
      }
      function Wt() {
        return Ht(this, void 0, void 0, function* () {
          const { getResourceUrlByXapUrl: e } = (0, p.nZ)(),
            t = Wn();
          if (!t) return;
          const n = yield e(t.image.src),
            i = yield Ie(n);
          let o = i.width,
            r = i.height;
          const a = r / o;
          o < Ii.MIN
            ? ((o = Ii.MIN), (r = o * a))
            : o > Ii.MAX && ((o = Ii.MAX), (r = o * a)),
            ti({
              type: "update",
              topicId: t.topicId,
              image: { width: o, height: r },
            });
        });
      }
      function Gt() {
        ni({ equation: !0, image: !0 });
      }
      var Vt = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      function Ut() {
        return Vt(this, void 0, void 0, function* () {
          const { updateOutlinerState: e } = Ti(),
            t = Wn();
          t && e({ currEditingNotesTopicId: t.topicId });
        });
      }
      function Xt() {
        ni({ notes: !0 });
      }
      function Yt() {
        const { outlinerState: e, updateOutlinerState: t } = Ti();
        e.value.currEditingNotesTopicId && t({ isNoteLinkInputVisible: !0 });
      }
      function Jt() {
        const {
            outlinerState: e,
            updateOutlinerState: t,
            outlinerSheetModel: n,
          } = Ti(),
          { selectionIds: i } = e.value,
          o = Wn();
        if (!o) return;
        const r = oe(o.topicId);
        if (!r) return;
        const a = ae(r),
          l = (
            a.querySelector(".outliner-topic-label-container") ||
            a.querySelector(".outliner-topic-dot") ||
            a.querySelector(".outliner-topic-left")
          ).getBoundingClientRect();
        t({
          popoverEditorState: {
            visible: "label",
            payload: {
              targetIds: i.length > 0 ? i : [o.topicId],
              editorRect: l,
              labels: o.labels,
              labelSortOrder: n.value.labelSortOrder,
            },
          },
        });
      }
      function Kt() {
        const { outlinerState: e } = Ti(),
          { selectionIds: t } = e.value,
          n = Wn(),
          i = t.length > 0 ? t : n ? [n.topicId] : [];
        0 !== i.length && ii(i, { labels: !0 });
      }
      function Qt() {
        const { outlinerState: e, updateOutlinerState: t } = Ti(),
          { currEditingLabel: n } = e.value,
          i = Wn();
        i &&
          (ti({
            type: "update",
            topicId: i.topicId,
            labels: i.labels.filter((e) => e !== n),
          }),
          t({ selectonType: mi.TOPIC }));
      }
      var $t = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      function en() {
        const { updateOutlinerState: e } = Ti();
        e({ audioBarMode: "audio_record", audioAutoPlay: !1 });
      }
      function tn() {
        ni({ audioNotes: !0 });
      }
      function nn() {
        return $t(this, void 0, void 0, function* () {
          const { stage: e } = (0, Pe.F)(),
            t = Wn();
          if (!t) return;
          const n = t.audioNotes.split("/").slice(-1).pop(),
            i = yield e.take(t.audioNotes.replace("xap:", ""));
          ai(n).then(function (e) {
            Me.Z.writeFileSync(e, i);
          });
        });
      }
      var on = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      function rn() {
        const { updateOutlinerState: e } = Ti(),
          t = Wn();
        if (!t) return;
        const n = oe(t.topicId);
        if (!n) return;
        const i = ae(n),
          o = (
            i.querySelector(".outliner-topic-equation") ||
            i.querySelector(".outliner-topic-dot") ||
            i.querySelector(".outliner-topic-left")
          ).getBoundingClientRect();
        e({
          popoverEditorState: {
            visible: "equation",
            payload: {
              topicId: t.topicId,
              editorRect: o,
              equation: t.equation,
            },
          },
        });
      }
      function an() {
        return on(this, void 0, void 0, function* () {
          const { stage: e } = (0, Pe.F)(),
            t = Wn();
          if (!t) return;
          const n = ((i = "Equation"), (0, c.JE)().T(i) + ".png");
          var i;
          const o = yield e.take(t.image.src.replace("xap:", ""));
          ai(n).then(function (e) {
            Me.Z.writeFileSync(e, o);
          });
        });
      }
      function ln() {
        const { document: e, changeDoc: t } = (0, p.nZ)(),
          n = Wn();
        if (!n) return;
        t(p.HG.resetTopicImageSizeFor(e.value, n.topicId));
      }
      function dn() {
        ni({ equation: !0, image: !0 });
      }
      var cn,
        sn = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      function un() {
        return sn(this, void 0, void 0, function* () {
          const { outlinerState: e } = Ti(),
            {
              activeSheet: t,
              activeSheetFigure: n,
              setCPData: i,
              activeSheetViewer: o,
              activeSheetViewerState: r,
            } = (0, p.nZ)(),
            { stage: a } = (0, Pe.F)(),
            {
              selectonType: l,
              selectionIds: d,
              currEditingMarkerId: c,
            } = e.value,
            s = Wn(),
            u = d.length > 0 ? d : s ? [s.topicId] : [];
          if (0 === u.length) return;
          let g = null;
          switch (l) {
            case mi.TOPIC:
            case mi.MARKER:
              g = { kind: "topics", topics: u };
              break;
            case mi.IMAGE:
            case mi.EQUATION:
              g = { kind: "images", topics: u };
          }
          const h = mi.MARKER === l,
            { data: v } =
              h && c
                ? yield p.HG.buildCopiedMarkerData(
                    { selection: g, sheet: t.value },
                    c,
                  )
                : yield p.HG.buildCPDataForSelection(
                    {
                      selection: g,
                      sheet: t.value,
                      sheetFigure: n.value,
                      textInputManager: o.value.textInputManager,
                      editSession: r.value.editSession,
                    },
                    a,
                  );
          v && i(v);
        });
      }
      function pn() {
        const { outlinerState: e, updateOutlinerState: t } = Ti(),
          { selectonType: n } = e.value;
        n !== mi.TEXT
          ? (un(), [mi.MARKER].includes(n) && t({ selectonType: mi.TOPIC }))
          : document.execCommand("copy");
      }
      function gn() {
        return sn(this, void 0, void 0, function* () {
          const { outlinerState: e, updateOutlinerState: t } = Ti(),
            { selectonType: n, selectionIds: i } = e.value;
          if (n !== mi.TEXT)
            switch ((un(), n)) {
              case mi.TOPIC:
                yield li(i), t({ selectionIds: [] });
                break;
              case mi.MARKER:
                oi(), t({ selectonType: mi.TOPIC });
                break;
              case mi.IMAGE:
                ni({ image: !0 });
                break;
              case mi.EQUATION:
                ni({ equation: !0, image: !0 });
            }
          else document.execCommand("cut");
        });
      }
      function hn(e, t) {
        return sn(this, void 0, void 0, function* () {
          const { createXapUrlByArrayBuffer: n } = (0, p.nZ)();
          return (yield n(e, t)).slice(4);
        });
      }
      function vn() {
        return sn(this, void 0, void 0, function* () {
          const { outlinerState: e, updateOutlinerState: t } = Ti(),
            {
              document: n,
              changeDoc: i,
              activeSheet: o,
              getCPData: r,
              markerModule: a,
            } = (0, p.nZ)(),
            { stage: l } = (0, Pe.F)(),
            { selectionIds: d, selectonType: c } = e.value,
            s = Wn(),
            u = d.length > 0 ? d : s ? [s.topicId] : [];
          if (0 === u.length) return;
          const g = yield r();
          let h = !1;
          const { sheet: v, selection: f } =
            (yield p.HG.pasteCPDataForSelection(
              {
                selection: { kind: "topics", topics: u },
                sheet: o.value,
                isSiblingMarkers: a.isSiblingMarkers,
              },
              g,
              hn,
              l,
              Object.assign(
                {},
                0 === d.length && {
                  pasteText: (e) => {
                    (h = !0),
                      (function (e, t) {
                        sn(this, void 0, void 0, function* () {
                          const { outlinerState: n } = Ti(),
                            { topicItems: i } = n.value,
                            o = e.map((e) => e.text).join("");
                          if (t.length > 0) {
                            const e = i[ei()],
                              { parentTopicId: n } = e,
                              r = Yn(e);
                            yield li(t),
                              ti({
                                type: "add",
                                parentTopicId: n,
                                targetIndex: r,
                                title: o,
                                attributedTitle: [],
                              });
                          } else {
                            const e = Wn();
                            if (!e) return;
                            const t = oe(e.topicId);
                            if (!t) return;
                            const [n, i] = pe(t) || [0, 0],
                              r = e.title;
                            let a = r;
                            (a =
                              n === i
                                ? r.slice(0, n) + o + r.slice(n)
                                : me(r, n, i, o)),
                              ti({
                                type: "update",
                                topicId: e.topicId,
                                title: a,
                                attributedTitle: [],
                              });
                          }
                        });
                      })(e, d);
                  },
                },
              ),
            )) || {};
          if (!h)
            if (v) {
              if (
                (i(v.ownerDocument),
                [mi.MARKER].includes(c) && t({ selectonType: mi.TOPIC }),
                c !== mi.TOPIC)
              ) {
                const e = "topics" == f.kind ? f.topics : [];
                if (0 === e.length) return;
                if (1 === e.length && 1 === u.length && e[0] === u[0]) return;
                setTimeout(() =>
                  sn(this, void 0, void 0, function* () {
                    if (!s) return;
                    lt([s.topicId])
                      .filter((e) => "folded" === e.branchState)
                      .map((e) =>
                        sn(this, void 0, void 0, function* () {
                          yield ti({
                            type: "update",
                            topicId: e.id,
                            branchState: null,
                          });
                        }),
                      );
                  }),
                ),
                  setTimeout(() => {
                    var t;
                    const i = e[e.length - 1],
                      o =
                        null === (t = n.value.query({ id: i })) || void 0 === t
                          ? void 0
                          : t.asTopic();
                    if (!o) return;
                    Un($n(o).id, { toLastPos: !0 });
                  });
              }
            } else;
        });
      }
      !(function (e) {
        (e.None = "none"), (e.LineThrough = "line-through");
      })(cn || (cn = {}));
      var fn = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      const mn = () => {
          const { activeSheetId: e, sheets: t } = (0, p.nZ)(),
            n = t.value.map((e) => e.id);
          if (!n || n.length < 2) return;
          return n.indexOf(e.value);
        },
        bn = (e) => {
          const { executeEditorAction: t, sheets: n } = (0, p.nZ)(),
            i = n.value[e];
          if (!i) return;
          t({ name: "mutateEditor:switchSheet", inputValue: i.id });
        };
      function In() {
        return fn(this, void 0, void 0, function* () {
          const {
              changeDoc: e,
              activeSheet: t,
              executeEditorAction: n,
            } = (0, p.nZ)(),
            i = Wn();
          if (!i) return;
          const o = p.HG.newSheetFromTopic(t.value, i.topicId, (e, ...t) =>
            (0, c.JE)().T(e, ...t),
          );
          if (null === o) return;
          const { newSheet: r, newDocument: a } = o;
          e(a),
            (0, g.E)().updateSheetRendering({
              sheetRendering: !0,
              sheetRenderingStartAt: new Date().getTime(),
            }),
            yield (0, s._v)(100),
            n({ name: "mutateEditor:switchSheet", inputValue: r.id });
        });
      }
      function yn() {
        const { executeEditorAction: e } = (0, p.nZ)();
        e({ name: "mutateEditor:newSheet" });
      }
      function Tn() {
        const { sheets: e } = (0, p.nZ)(),
          t = mn();
        if (t > -1) {
          let n = t - 1;
          (n = n < 0 ? n + e.value.length : n), bn(n);
        }
      }
      function xn() {
        const { sheets: e } = (0, p.nZ)(),
          t = mn();
        if (t > -1) {
          const n = (t + 1) % e.value.length;
          bn(n);
        }
      }
      var kn = n(81296),
        wn = n.n(kn),
        Sn = n(33394),
        Cn = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      function En() {
        return Cn(this, void 0, void 0, function* () {
          const e = (e, ...t) => (0, c.JE)().T(e, ...t),
            { createXapUrlByArrayBuffer: t } = (0, p.nZ)(),
            n = Wn();
          if (!n) return;
          const { filePaths: i, canceled: o } = yield ke.dialog.showOpenDialog(
            (0, ke.getCurrentWindow)(),
            { buttonLabel: e("Insert") },
          );
          if (o || !i || !i.length) return;
          const r = i[0];
          if (wn().existsSync(r)) {
            if (wn().statSync(r).isDirectory())
              return void (0, Le.N0)({
                type: "warning",
                title: "Xmind",
                detail: e("Folder is not supported."),
                message: e("Insert Attachment Failed"),
                buttons: [e("OK")],
                defaultId: 0,
                cancelId: 0,
                noLink: !0,
              });
            const i = yield wn().readFile(r),
              o = S().basename(r),
              a = yield t(i, o);
            ti({
              type: "add",
              topicType: n.topicType,
              parentTopicId: n.topicId,
              targetIndex: 0,
              title: o,
              attachment: a,
              callback: Jn,
            });
          }
        });
      }
      function Ln(e) {
        return Cn(this, void 0, void 0, function* () {
          const { outlinerState: t } = Ti(),
            { selectionIds: n } = t.value,
            i = Wn(),
            o = n.length > 0 ? n : i ? [i.topicId] : [];
          if (0 === o.length) return;
          const {
            filePaths: r,
            bookmarks: a,
            canceled: l,
          } = yield ke.dialog.showOpenDialog((0, ke.getCurrentWindow)(), {
            properties: "folder" === e ? ["openDirectory"] : ["openFile"],
            buttonLabel: ((e, ...t) => (0, c.JE)().T(e, ...t))("Insert"),
            securityScopedBookmarks: !0,
          });
          if (l || !r || !r.length) return;
          const d = r[0];
          if (!wn().existsSync(d)) return;
          if (a && a.length === r.length)
            for (let e = 0; e < r.length; e++) {
              const t = r[e],
                n = a[e];
              t && n && (yield Sn.Z.bindBookmark({ fp: t, bookmark: n }));
            }
          const s = (0, Ee.u3)(d);
          yield Promise.all(
            o.map((t) => {
              ti(
                Object.assign(
                  Object.assign(
                    { type: "update", topicId: t },
                    "file" === e && { localFileLink: s },
                  ),
                  "folder" === e && { attachment: s },
                ),
              );
            }),
          );
        });
      }
      function Mn() {
        return Cn(this, void 0, void 0, function* () {
          const {
              document: e,
              activeSheetId: t,
              activeSheetFigure: n,
              changeDoc: i,
              createXapUrlByArrayBuffer: o,
            } = (0, p.nZ)(),
            r = (0, Ke.$)(),
            { outlinerState: a } = Ti(),
            { selectionIds: l } = a.value,
            d = Wn(),
            c = l.length > 0 ? l : d ? [d.topicId] : [];
          if (0 === c.length) return;
          const { result: s } = yield Oe.ZP.fetch(Ae.Fx, {
            name: "dialog-hyperlink",
            parentId: window.id,
            wait: !0,
            query: {
              topicHref: c.length > 1 ? "" : d.webpage || "",
              userAutoFillOpt: r.hyperLinkAutoFillOpt || "",
            },
          });
          if (s)
            switch (s.action) {
              case "set": {
                r.changeHyperLinkAutoFillOpt(s.autoFillOpt);
                const a =
                    ("all" === s.autoFillOpt || "title" === s.autoFillOpt) &&
                    s.webTitle,
                  l =
                    ("all" === s.autoFillOpt ||
                      "thumbnail" === s.autoFillOpt) &&
                    s.isVideoUrl &&
                    s.thumbnail;
                let d = null;
                l && (d = yield o(s.thumbnail, ".png"));
                let u = e.value;
                yield Promise.all(
                  c.map((e) => {
                    u = p.HG.changeWebLinkFor(
                      u.sheets.find((e) => e.id === t.value),
                      n.value,
                      e,
                      {
                        href: s.webUrl,
                        title: a ? s.webTitle : null,
                        videoThumbnail: d,
                        videoEmbedUrl: s.embedUrl,
                      },
                    );
                  }),
                ),
                  i(u);
                break;
              }
              case "remove":
                ni({ webpage: !0, topicLink: !0 });
            }
        });
      }
      function On() {
        return Cn(this, void 0, void 0, function* () {
          const { document: e } = (0, p.nZ)(),
            t = Wn();
          if (!t || (0, g.E)().isTopicLinkDialogShowing) return;
          (0, g.E)().changeIsTopicLinkDialogShowing(!0);
          const n = "xmind:#",
            i = !!t.topicLink;
          let o = null;
          i && (o = t.topicLink.slice(7));
          let r = Oe.ZP.route((0, Ae.zj)(window.editorId), () =>
            Cn(this, void 0, void 0, function* () {
              return JSON.stringify(yield p.HG.serializeDocument(e.value));
            }),
          );
          const { result: a } = yield Oe.ZP.fetch(Ae.Fx, {
            name: "dialog-topiclink",
            parentId: window.id,
            wait: !0,
            query: {
              hasTopicLink: i,
              xmindObjectId: o,
              editorId: window.editorId,
            },
          });
          if (
            (r && (r(), (r = null)),
            (0, g.E)().changeIsTopicLinkDialogShowing(!1),
            a)
          )
            switch (a.action) {
              case "set":
                ti({
                  type: "update",
                  topicId: t.topicId,
                  topicLink: `${n}${a.topicId}`,
                }),
                  a.twoWay &&
                    ti({
                      type: "update",
                      topicId: a.topicId,
                      topicLink: `${n}${t.topicId}`,
                    });
                break;
              case "remove":
                ni({ topicLink: !0 });
            }
        });
      }
      function An() {
        const { updateOutlinerState: e } = Ti();
        ni({ localFileLink: !0, webpage: !0, attachment: !0, topicLink: !0 }),
          e({ selectonType: mi.TOPIC });
      }
      function Fn() {
        const { outlinerState: e } = Ti(),
          { selectionIds: t } = e.value,
          n = Wn(),
          i = t.length > 0 ? t : n ? [n.topicId] : [];
        0 !== i.length &&
          ii(i, {
            localFileLink: !0,
            webpage: !0,
            attachment: !0,
            topicLink: !0,
          });
      }
      function Nn() {
        return Cn(this, void 0, void 0, function* () {
          const { stage: e } = (0, Pe.F)(),
            t = Wn();
          if (!t) return;
          let n = t.title;
          const i = S().extname(t.attachment);
          n && !n.endsWith(i) && (n += i);
          const o = yield e.take(t.attachment.replace("xap:", ""));
          ai(n).then(function (e) {
            wn().writeFileSync(e, o);
          });
        });
      }
      function Pn() {
        const { executeAction: e } = (0, p.nZ)();
        e({ name: "redo" });
      }
      function Dn() {
        const { executeAction: e } = (0, p.nZ)();
        e({ name: "undo" });
      }
      var qn = n(78198);
      function _n() {
        const { outlinerState: e } = Ti(),
          { activeSheetId: t } = (0, p.nZ)(),
          { updateOutlinerSheetStatus: n } = (0, g.E)(),
          { outlinerScale: i } = e.value,
          o = 100 * i;
        if (o >= 300) return;
        const r = (0, qn.sC)(o);
        n({ id: t.value, zoomScale: r });
      }
      function Zn() {
        const { outlinerState: e } = Ti(),
          { activeSheetId: t } = (0, p.nZ)(),
          { updateOutlinerSheetStatus: n } = (0, g.E)(),
          { outlinerScale: i } = e.value,
          o = 100 * i;
        if (o <= 80) return;
        const r = (0, qn.lY)(o);
        n({ id: t.value, zoomScale: r });
      }
      function Bn() {
        const { activeSheetId: e } = (0, p.nZ)(),
          { updateOutlinerSheetStatus: t } = (0, g.E)();
        t({ id: e.value, zoomScale: 100 });
      }
      var Hn = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      function jn() {
        var e;
        return Hn(this, void 0, void 0, function* () {
          const t = (0, c.km)(),
            { getResourceUrlByXapUrl: n } = (0, p.nZ)(),
            { outlinerState: i } = Ti(),
            { currEditingTopicId: o, invalidImageIds: r } = i.value;
          if (!o) return;
          const a = i.value.topicItems.find((e) => e.topicId === o);
          if (!a || !a.image.src || r.includes(a.topicId)) return;
          const l = yield n(a.image.src);
          if (
            (null === (e = t.imageViewerContext) || void 0 === e
              ? void 0
              : e.imageUrl) === l
          )
            return;
          const d = yield Ie(l);
          (0, c.JX)().handleCommand("imageViewer", {
            imageUrl: l,
            imageSize: d,
            title: a.title || "",
            winId: (0, ke.getCurrentWindow)().id,
          });
        });
      }
      var Rn = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      function zn() {
        const { outlinerState: e } = Ti(),
          t = (0, Xe.y)(),
          n = `editor/${window.editorId}/outliner`;
        function i(t) {
          return "function" == typeof t
            ? () =>
                (0, Ke.$)().isOutlinerMode &&
                !e.value.inputMethodInputting &&
                t()
            : () => (0, Ke.$)().isOutlinerMode && !e.value.inputMethodInputting;
        }
        function o() {
          return (
            "" !== e.value.currEditingTopicId ||
            0 !== e.value.selectionIds.length
          );
        }
        function r() {
          return 1 === e.value.selectionIds.length;
        }
        function a() {
          return e.value.selectonType === mi.TEXT;
        }
        function l() {
          return e.value.selectonType === mi.NOTES;
        }
        function d() {
          return e.value.selectonType !== mi.NOTES;
        }
        function c() {
          const {
            selectonType: t,
            invalidImageIds: n,
            currEditingTopicId: i,
          } = e.value;
          return [mi.IMAGE, mi.EQUATION].includes(t) && n.includes(i);
        }
        function s() {
          const e = Wn();
          return !!e && !e.audioNotes;
        }
        function u() {
          const { selectionIds: t, topicItems: n } = e.value;
          return (
            t.filter((e) => {
              const t = n.find((t) => t.topicId === e);
              return !!t && !!t.task;
            }).length > 0
          );
        }
        function g() {
          const { selectionIds: t, topicItems: n } = e.value;
          return (
            t.filter((e) => {
              const t = n.find((t) => t.topicId === e);
              return !!t && t.markers.length > 0;
            }).length > 0
          );
        }
        function h() {
          const { selectionIds: t, topicItems: n } = e.value;
          return (
            t.filter((e) => {
              const t = n.find((t) => t.topicId === e);
              return !!t && t.labels.length > 0;
            }).length > 0
          );
        }
        function v() {
          const { selectionIds: t, topicItems: n } = e.value;
          return (
            t.filter((e) => {
              const t = n.find((t) => t.topicId === e);
              return (
                !!t &&
                (t.webpage || t.localFileLink || t.topicLink || t.attachment)
              );
            }).length > 0
          );
        }
        return {
          registerCommands: () => {
            t.registerCommands([
              {
                id: "outliner.addTopic",
                provider: n,
                enabledFn: i(() => a() || r()),
                handler: et,
              },
              {
                id: "outliner.deleteTopic",
                provider: n,
                enabledFn: i(),
                handler: xt,
              },
              {
                id: "outliner.deleteWithDel",
                provider: n,
                enabledFn: i(d),
                handler: kt,
              },
              { id: "delete", provider: n, enabledFn: i(d), handler: wt },
              {
                id: "outliner.previewImage",
                provider: n,
                enabledFn: i(() => e.value.selectonType === mi.IMAGE && !c()),
                handler: jn,
              },
              {
                id: "outliner.indent",
                provider: n,
                enabledFn: i(() => {
                  const { topicItems: t } = e.value;
                  if (l()) return !1;
                  const n = t[ei()];
                  return !!n && Boolean(Kn(n));
                }),
                handler: Ct,
              },
              {
                id: "outliner.outdent",
                provider: n,
                enabledFn: i(() => {
                  if (l()) return !1;
                  const { topicItems: t } = e.value,
                    n = t[ei()];
                  return !(!n || n.depth <= 1);
                }),
                handler: ri,
              },
              {
                id: "outliner.multiSelectionNavigateUp",
                provider: n,
                enabledFn: i(d),
                handler: Et,
              },
              {
                id: "outliner.multiSelectionNavigateDown",
                provider: n,
                enabledFn: i(d),
                handler: Lt,
              },
              {
                id: "outliner.exchangeSiblingTopicUp",
                provider: n,
                enabledFn: i(o),
                handler: Mt,
              },
              {
                id: "outliner.exchangeSiblingTopicDown",
                provider: n,
                enabledFn: i(o),
                handler: Ot,
              },
              {
                id: "outliner.moveCaretCharacterToBeginning",
                provider: n,
                enabledFn: i(),
                handler: At,
              },
              {
                id: "outliner.moveCaretCharacterToEnd",
                provider: n,
                enabledFn: i(),
                handler: Ft,
              },
              {
                id: "outliner.moveCaretCharacterToAboveSiblingTopic",
                provider: n,
                enabledFn: i(),
                handler: Nt,
              },
              {
                id: "outliner.moveCaretCharacterToBelowSiblingTopic",
                provider: n,
                enabledFn: i(),
                handler: Pt,
              },
              {
                id: "editor.enterLineBreak",
                provider: n,
                enabledFn: i(),
                handler: () => {
                  document.execCommand("insertText", !1, "\n");
                },
              },
              { id: "selectAll", provider: n, enabledFn: i(d), handler: Dt },
              {
                id: "editor.addMarker",
                provider: n,
                enabledFn: i(),
                handler: _t,
              },
              {
                id: "editor.changeImage",
                provider: n,
                enabledFn: i(o),
                handler: jt,
              },
              {
                id: "editor.showNotesEditor",
                provider: n,
                enabledFn: i(() => a() || r()),
                handler: Ut,
              },
              {
                id: "outliner.showNoteLinkInput",
                provider: n,
                enabledFn: i(l),
                handler: Yt,
              },
              {
                id: "editor.showLabelEditor",
                provider: n,
                enabledFn: i(o),
                handler: Jt,
              },
              {
                id: "editor.showHyperlinkEditor",
                provider: n,
                enabledFn: i(() => {
                  const e = Wn();
                  return (
                    !!e &&
                    !e.audioNotes &&
                    (!e.webpage || !e.webpage.startsWith("xap:"))
                  );
                }),
                handler: Mn,
              },
              {
                id: "editor.showTopiclinkEditor",
                provider: n,
                enabledFn: i(() => !(e.value.selectionIds.length > 1) && s()),
                handler: On,
              },
              {
                id: "editor.addFileLink",
                provider: n,
                enabledFn: i(s),
                handler: () =>
                  Rn(this, void 0, void 0, function* () {
                    return yield Ln("file");
                  }),
              },
              {
                id: "editor.addFolderLink",
                provider: n,
                enabledFn: i(s),
                handler: () =>
                  Rn(this, void 0, void 0, function* () {
                    return yield Ln("folder");
                  }),
              },
              {
                id: "editor.addAttachmentOnNewTopic",
                provider: n,
                enabledFn: i(() => a() || r()),
                handler: En,
              },
              {
                id: "editor.addAudioOnNewTopic",
                provider: n,
                enabledFn: i(() => a() || r()),
                handler: en,
              },
              {
                id: "editor.addLocalImage",
                provider: n,
                enabledFn: i(() => a() || r()),
                handler: Rt,
              },
              {
                id: "editor.showEquationEditor",
                provider: n,
                enabledFn: i(
                  () => a() || r() || e.value.selectonType === mi.EQUATION,
                ),
                handler: rn,
              },
              {
                id: "copy",
                provider: n,
                enabledFn: i(() => d() && !c()),
                handler: pn,
              },
              {
                id: "cut",
                provider: n,
                enabledFn: i(() => d() && !c()),
                handler: gn,
              },
              {
                id: "paste",
                provider: n,
                enabledFn: i(() => d() && !c()),
                handler: vn,
              },
              { id: "duplicate", provider: n, enabledFn: i(d), handler: tt },
              {
                id: "editor.toggleBranch",
                provider: n,
                enabledFn: i(() => {
                  if (a()) {
                    const e = Wn();
                    return !!e && 0 !== e.depth && e.descendantLength > 0;
                  }
                  return (
                    e.value.selectionIds.length > 0 &&
                    e.value.selectionIds.some((t) => {
                      const n = e.value.topicItems.find((e) => e.topicId === t);
                      return n && n.descendantLength > 0;
                    })
                  );
                }),
                handler: at,
              },
              {
                id: "editor.toggleAllBranch",
                provider: n,
                enabledFn: i(() => {
                  if (a()) {
                    const e = Wn();
                    return !!e && 0 !== e.depth && e.descendantLength > 0;
                  }
                  return (
                    !(e.value.selectionIds.length > 0) ||
                    e.value.selectionIds.some((t) => {
                      const n = e.value.topicItems.find((e) => e.topicId === t);
                      return n && n.descendantLength > 0;
                    })
                  );
                }),
                handler: dt,
              },
              {
                id: "editor.newSheetFromTopic",
                provider: n,
                enabledFn: i(() => a() || r()),
                handler: In,
              },
              {
                id: "outliner.saveAsImage",
                provider: n,
                enabledFn: i(() => !c()),
                handler: zt,
              },
              {
                id: "outliner.resizeTopicImage",
                provider: n,
                enabledFn: i(() => !c()),
                handler: Wt,
              },
              {
                id: "outliner.editMarker",
                provider: n,
                enabledFn: i(),
                handler: Zt,
              },
              {
                id: "outliner.removeHyperlink",
                provider: n,
                enabledFn: i(),
                handler: An,
              },
              {
                id: "editor.removeLink",
                provider: n,
                enabledFn: i(() => v() && (u() || g() || h())),
                handler: Fn,
              },
              {
                id: "editor.removeLinkForTopicContextMenu",
                provider: n,
                enabledFn: i(() => !u() && !g() && !h() && v()),
                handler: Fn,
              },
              {
                id: "outliner.saveAsAttachment",
                provider: n,
                enabledFn: i(),
                handler: Nn,
              },
              {
                id: "outliner.saveAsEquation",
                provider: n,
                enabledFn: i(() => !c()),
                handler: an,
              },
              {
                id: "outliner.resizeTopicEquation",
                provider: n,
                enabledFn: i(() => !c()),
                handler: ln,
              },
              {
                id: "outliner.removeAudioNotes",
                provider: n,
                enabledFn: i(),
                handler: tn,
              },
              {
                id: "outliner.saveAsAudioNote",
                provider: n,
                enabledFn: i(),
                handler: nn,
              },
              {
                id: "workbench.exportPdf",
                provider: n,
                enabledFn: i(),
                handler: Ye.exportPDF,
              },
              { id: "print", provider: n, enabledFn: i(), handler: Je.S0 },
              {
                id: "editor.toggleBranchOnly",
                provider: n,
                enabledFn: i(() => {
                  const t = Wn();
                  return !(
                    !e.value.isBranchOnlyMode &&
                    (!t || 0 === t.depth || e.value.selectionIds.length > 1)
                  );
                }),
                handler: ct,
              },
              {
                id: "editor.showBranchOnly",
                provider: n,
                enabledFn: i(),
                handler: st,
              },
              {
                id: "editor.exitBranchOnly",
                provider: n,
                enabledFn: i(),
                handler: ut,
              },
              { id: "redo", provider: n, enabledFn: i(d), handler: Pn },
              { id: "undo", provider: n, enabledFn: i(d), handler: Dn },
              { id: "editor.zoomIn", provider: n, enabledFn: i(), handler: _n },
              {
                id: "editor.zoomOut",
                provider: n,
                enabledFn: i(),
                handler: Zn,
              },
              {
                id: "editor.resetZoom",
                provider: n,
                enabledFn: i(),
                handler: Bn,
              },
              {
                id: "outliner.removeTopicEquation",
                provider: n,
                enabledFn: i(),
                handler: dn,
              },
              {
                id: "editor.clearText",
                provider: n,
                enabledFn: i(() => {
                  const { selectionIds: t, topicItems: n } = e.value;
                  return t.some((e) => {
                    const t = n.find((t) => t.topicId === e);
                    return !!(null == t ? void 0 : t.title);
                  });
                }),
                handler: ot,
              },
              {
                id: "editor.removeTopicContent",
                provider: n,
                enabledFn: i(
                  () => [u(), g(), h(), v()].filter(Boolean).length > 1,
                ),
                handler: () => {},
              },
              {
                id: "editor.removeMarker",
                provider: n,
                enabledFn: i(() => g() && (u() || h() || v())),
                handler: Bt,
              },
              {
                id: "editor.removeMarkerForTopicContextMenu",
                provider: n,
                enabledFn: i(() => !u() && g() && !h() && !v()),
                handler: Bt,
              },
              {
                id: "editor.removeLabel",
                provider: n,
                enabledFn: i(() => h() && (u() || g() || v())),
                handler: Kt,
              },
              {
                id: "editor.removeLabelForTopicContextMenu",
                provider: n,
                enabledFn: i(() => !u() && !g() && h() && !v()),
                handler: Kt,
              },
              {
                id: "editor.removeNote",
                provider: n,
                enabledFn: i(),
                handler: Xt,
              },
              {
                id: "editor.removeStickerOrImageOrEquation",
                provider: n,
                enabledFn: i(),
                handler: Gt,
              },
              {
                id: "editor.addSheet",
                provider: n,
                enabledFn: i(),
                handler: yn,
              },
              {
                id: "editor.previousSheet",
                provider: n,
                enabledFn: i(),
                handler: Tn,
              },
              {
                id: "editor.nextSheet",
                provider: n,
                enabledFn: i(),
                handler: xn,
              },
              {
                id: "editor.keepTextOnly",
                enabledFn: i(),
                provider: n,
                handler: it,
              },
              ...[
                { id: "editor.addMarkerOne", payload: { priority: 1 } },
                { id: "editor.addMarkerTwo", payload: { priority: 2 } },
                { id: "editor.addMarkerThree", payload: { priority: 3 } },
                { id: "editor.addMarkerFour", payload: { priority: 4 } },
                { id: "editor.addMarkerFive", payload: { priority: 5 } },
                { id: "editor.addMarkerSix", payload: { priority: 6 } },
                { id: "editor.addMarkerSeven", payload: { priority: 7 } },
              ].map((e) => ({
                id: e.id,
                provider: n,
                enabledFn: i(),
                handler: () => {
                  !(function (e) {
                    const { markerGroups: t, addMarker: n } = (0, qt.HV)(),
                      i = t.value.find((e) => "priorityMarkers" === e.id),
                      o = ((null == i ? void 0 : i.markers) || [])[e - 1];
                    i && o && n(o, i);
                  })(e.payload.priority);
                },
              })),
              ...[
                { id: "editor.toggleBranchLevelOne", payload: { level: 1 } },
                { id: "editor.toggleBranchLevelTwo", payload: { level: 2 } },
                { id: "editor.toggleBranchLevelThree", payload: { level: 3 } },
                { id: "editor.toggleBranchLevelFour", payload: { level: 4 } },
                { id: "editor.toggleBranchLevelFive", payload: { level: 5 } },
                { id: "editor.toggleBranchLevelSix", payload: { level: 6 } },
                { id: "editor.toggleBranchLevelSeven", payload: { level: 7 } },
                { id: "editor.toggleBranchLevelEight", payload: { level: 8 } },
                { id: "editor.toggleBranchLevelNine", payload: { level: 9 } },
              ].map((t) => ({
                id: t.id,
                provider: n,
                enabledFn: i(() => !l() && !e.value.popoverEditorState.visible),
                handler: () => {
                  pt(t.payload.level);
                },
              })),
              {
                id: "editor.selectTopicById",
                provider: n,
                enabledFn: i(),
                handler: nt,
              },
              {
                id: "workbench.toggleMarkerPanel",
                provider: n,
                enabledFn: i(o),
                handler: () => si(Qe.QN.IMAGE, Qe.ll.MARKER),
              },
              {
                id: "workbench.toggleStickerPanel",
                provider: n,
                enabledFn: i(o),
                handler: () => si(Qe.QN.IMAGE, Qe.ll.STICKER),
              },
              {
                id: "workbench.toggleIllustrationPanel",
                provider: n,
                enabledFn: i(o),
                handler: () => si(Qe.QN.IMAGE, Qe.ll.ILLUSTRATION),
              },
              {
                id: "outliner.deleteMarker",
                provider: n,
                enabledFn: i(),
                handler: oi,
              },
              {
                id: "outliner.deleteLabel",
                provider: n,
                enabledFn: i(),
                handler: Qt,
              },
              {
                id: "editor.addTask",
                provider: n,
                enabledFn: i(o),
                handler: vt,
              },
              {
                id: "editor.removeTask",
                provider: n,
                enabledFn: i(() => u() && (g() || h() || v())),
                handler: ft,
              },
              {
                id: "editor.removeTaskForTopicContextMenu",
                provider: n,
                enabledFn: i(() => u() && !g() && !h() && !v()),
                handler: ft,
              },
              {
                id: "editor.checkTask",
                provider: n,
                enabledFn: i(() => {
                  const { activeSheet: e } = (0, p.nZ)(),
                    t = Gn();
                  return p.HG.filterTopicsTaskCheckable(t, e.value).length > 0;
                }),
                handler: mt,
              },
              {
                id: "editor.uncheckTask",
                provider: n,
                enabledFn: i(() => {
                  const { activeSheet: e } = (0, p.nZ)(),
                    t = Gn();
                  return (
                    p.HG.filterTopicsTaskUncheckable(t, e.value).length > 0
                  );
                }),
                handler: bt,
              },
              {
                id: "editor.cancelTask",
                provider: n,
                enabledFn: i(() => {
                  const { activeSheet: e } = (0, p.nZ)(),
                    t = Gn();
                  return p.HG.filterTopicsCancelable(t, e.value).length > 0;
                }),
                handler: It,
              },
              {
                id: "outliner.deleteTask",
                provider: n,
                enabledFn: i(u),
                handler: ft,
              },
            ]);
          },
          unregisterCommands: () => {
            t.unregisterCommands(
              [
                "outliner.addTopic",
                "outliner.deleteTopic",
                "outliner.deleteWithDel",
                "delete",
                "outliner.indent",
                "outliner.outdent",
                "outliner.multiSelectionNavigateUp",
                "outliner.multiSelectionNavigateDown",
                "outliner.exchangeSiblingTopicUp",
                "outliner.exchangeSiblingTopicDown",
                "outliner.moveCaretCharacterToBeginning",
                "outliner.moveCaretCharacterToEnd",
                "outliner.moveCaretCharacterToAboveSiblingTopic",
                "outliner.moveCaretCharacterToBelowSiblingTopic",
                "editor.enterLineBreak",
                "selectAll",
                "editor.addMarker",
                "editor.changeImage",
                "editor.showNotesEditor",
                "outliner.showNoteLinkInput",
                "editor.showLabelEditor",
                "editor.showHyperlinkEditor",
                "editor.showTopiclinkEditor",
                "editor.addFileLink",
                "editor.addFolderLink",
                "editor.addAttachmentOnNewTopic",
                "editor.addAudioOnNewTopic",
                "editor.addLocalImage",
                "editor.showEquationEditor",
                "copy",
                "cut",
                "paste",
                "duplicate",
                "editor.toggleBranch",
                "editor.toggleAllBranch",
                "editor.newSheetFromTopic",
                "outliner.saveAsImage",
                "outliner.resizeTopicImage",
                "outliner.removeHyperlink",
                "outliner.editMarker",
                "editor.removeLink",
                "editor.removeLinkForTopicContextMenu",
                "outliner.saveAsAttachment",
                "outliner.saveAsEquation",
                "outliner.resizeTopicEquation",
                "outliner.removeAudioNotes",
                "outliner.saveAsAudioNote",
                "workbench.exportPdf",
                "print",
                "editor.toggleBranchOnly",
                "editor.showBranchOnly",
                "editor.exitBranchOnly",
                "redo",
                "undo",
                "editor.zoomIn",
                "editor.zoomOut",
                "editor.resetZoom",
                "outliner.removeTopicEquation",
                "editor.removeTopicContent",
                "editor.removeMarker",
                "editor.removeMarkerForTopicContextMenu",
                "editor.removeLabel",
                "editor.removeLabelForTopicContextMenu",
                "editor.removeNote",
                "editor.removeStickerOrImageOrEquation",
                "editor.addSheet",
                "editor.previousSheet",
                "editor.nextSheet",
                "editor.keepTextOnly",
                "editor.addMarkerOne",
                "editor.addMarkerTwo",
                "editor.addMarkerThree",
                "editor.addMarkerFour",
                "editor.addMarkerFive",
                "editor.addMarkerSix",
                "editor.addMarkerSeven",
                "editor.toggleBranchLevelOne",
                "editor.toggleBranchLevelTwo",
                "editor.toggleBranchLevelThree",
                "editor.toggleBranchLevelFour",
                "editor.toggleBranchLevelFive",
                "editor.toggleBranchLevelSix",
                "editor.toggleBranchLevelSeven",
                "editor.toggleBranchLevelEight",
                "editor.toggleBranchLevelNine",
                "editor.selectTopicById",
                "workbench.toggleMarkerPanel",
                "workbench.toggleStickerPanel",
                "workbench.toggleIllustrationPanel",
                "outliner.deleteMarker",
                "outliner.deleteLabel",
                "editor.addTask",
                "editor.removeTask",
                "editor.removeTaskForTopicContextMenu",
                "editor.checkTask",
                "editor.uncheckTask",
                "editor.cancelTask",
                "outliner.deleteTask",
              ].map((e) => ({ id: e, provider: n })),
            );
          },
        };
      }
      function Wn() {
        const { outlinerState: e } = Ti(),
          { currEditingTopicId: t, selectionIds: n, topicItems: i } = e.value,
          o = 1 === n.length ? n[0] : t;
        return o ? i.find((e) => e.topicId === o) : null;
      }
      function Gn() {
        const { outlinerState: e } = Ti(),
          { selectionIds: t } = e.value,
          n = Wn();
        return t.length > 0 ? t : n ? [n.topicId] : [];
      }
      function Vn(e) {
        const t = oe(e);
        if (t) return ne(t);
      }
      function Un(e, t) {
        const {
            outlinerSheetModel: n,
            outlinerState: i,
            updateOutlinerState: r,
            maxTopicsLoopNum: a,
          } = Ti(),
          {
            attachedTopicsLoopStartIndex: l,
            attachedTopicsLoopEndIndex: d,
            detachedTopicsLoopStartIndex: c,
            detachedTopicsLoopEndIndex: s,
            topicsLoopNum: u,
            topicItems: p,
          } = i.value,
          g = p.findIndex((t) => t.topicId === e);
        if (-1 === g) return;
        const h = n.value.attached.length;
        if ((g >= l && g <= d + 1) || (d >= h && g >= h + c && g <= h + s)) {
          const n = oe(e);
          if (!n) return;
          const i = ae(n);
          if (!i) return;
          ye(i),
            setTimeout(() => {
              (null == t ? void 0 : t.toLastPos)
                ? de(n, ne(n).length)
                : n.focus();
            });
        } else {
          let t = 0,
            n = 0;
          g > a.value &&
            (g > h
              ? ((t = Math.max(h - a.value, 0)),
                (n = Math.max(g - h - (g % u) - u, 0)))
              : (t = Math.max(g - (g % u) - u, 0))),
            r({
              attachedTopicsLoopStartIndex: t,
              attachedTopicsLoopEndIndex: t + a.value,
              detachedTopicsLoopStartIndex: n,
              detachedTopicsLoopEndIndex: n + a.value,
            }),
            (0, o.Y3)(() => {
              Un(e);
            });
        }
      }
      function Xn(e, t) {
        return "detached" === e.topicType ? t.detachedChildren : t.children;
      }
      function Yn(e) {
        if (!e.parentTopicId) return 0;
        const { outlinerState: t } = Ti(),
          n = t.value.topicItems.find((t) => t.topicId === e.parentTopicId);
        if (!n) return -1;
        return Xn(e, n).findIndex((t) => t === e.topicId);
      }
      function Jn({ newTopicId: e }) {
        return Rn(this, void 0, void 0, function* () {
          const {
              updateOutlinerState: t,
              outlinerState: n,
              outlinerSheetModel: i,
            } = Ti(),
            {
              selectionIds: o,
              attachedTopicsLoopEndIndex: r,
              detachedTopicsLoopEndIndex: a,
              topicsLoopNum: l,
            } = n.value;
          0 !== o.length && t({ selectionIds: [] }),
            0 === n.value.detachedTopicsLoopStartIndex &&
              r <= i.value.attached.length - 1 &&
              t({ attachedTopicsLoopEndIndex: r + l }),
            r >= i.value.attached.length - 1 &&
              a <= i.value.detached.length - 1 &&
              t({ detachedTopicsLoopEndIndex: a + l }),
            t({ currFocusTopicId: e });
        });
      }
      function Kn(e) {
        const { outlinerState: t } = Ti(),
          { topicItems: n } = t.value;
        for (
          let t = n.findIndex((t) => t.topicId === e.topicId) - 1;
          t >= 0;
          --t
        ) {
          const i = n[t];
          if (i.depth < e.depth) return null;
          if (i.depth === e.depth) return i;
        }
        return null;
      }
      function Qn(e) {
        const { outlinerState: t } = Ti(),
          { topicItems: n } = t.value;
        if (!e.parentTopicId) return null;
        const i = Yn(e),
          o = n.find((t) => t.topicId === e.parentTopicId);
        if (!o) return null;
        const r = Xn(e, o);
        return i === r.length - 1
          ? null
          : n.find((e) => e.topicId === r[i + 1]);
      }
      function $n(e) {
        var t;
        const { document: n } = (0, p.nZ)();
        if (e.children.length > 0) {
          const i =
            null ===
              (t = n.value.query({
                id: e.children[e.children.length - 1].id,
              })) || void 0 === t
              ? void 0
              : t.asTopic();
          return i ? $n(i) : e;
        }
        return e;
      }
      function ei() {
        const { outlinerState: e } = Ti(),
          { currEditingTopicId: t, selectionIds: n, topicItems: i } = e.value;
        return n.length > 0
          ? n
              .map((e) => i.findIndex((t) => t.topicId === e))
              .reduce((e, t) => Math.min(e, t), i.length - 1)
          : i.findIndex((e) => e.topicId === t);
      }
      function ti(e) {
        const { document: t, changeDoc: n } = (0, p.nZ)();
        n(T(t.value, e));
      }
      function ni(e) {
        const t = Wn();
        t && ti(Object.assign({ type: "deleteAttrs", topicId: t.topicId }, e));
      }
      function ii(e, t) {
        return Rn(this, void 0, void 0, function* () {
          yield Promise.all(
            e.map((e) =>
              ti(Object.assign({ type: "deleteAttrs", topicId: e }, t)),
            ),
          );
        });
      }
      function oi() {
        const { outlinerState: e, updateOutlinerState: t } = Ti(),
          { currEditingMarkerId: n } = e.value,
          i = Wn();
        i &&
          (ti({
            type: "update",
            topicId: i.topicId,
            markers: i.markers.filter((e) => e.id !== n).map((e) => e.id),
          }),
          t({ selectonType: mi.TOPIC }));
      }
      function ri() {
        return Rn(this, void 0, void 0, function* () {
          const { outlinerState: e } = Ti(),
            { selectionIds: t, topicItems: n } = e.value,
            i = Wn(),
            o = t.length > 0 ? t : i ? [i.topicId] : [],
            r = o.reduce((e, t) => {
              const i = n.find((e) => e.topicId === t);
              return i ? e.concat(i.children) : e;
            }, []),
            a = o
              .filter((e) => !r.includes(e))
              .map((e) => n.find((t) => t.topicId === e))
              .filter((e) => !(!e || e.depth <= 1))
              .sort(
                (e, t) =>
                  n.findIndex((t) => t.topicId === e.topicId) -
                  n.findIndex((e) => e.topicId === t.topicId),
              ),
            l = [];
          for (let t = 0; t < a.length; t++) {
            const n = a[t],
              i = e.value.topicItems.find((e) => e.topicId === n.parentTopicId),
              o = e.value.topicItems.find((e) => e.topicId === i.parentTopicId);
            let r =
              ("detached" === i.topicType
                ? o.detachedChildren
                : o.children
              ).findIndex((e) => e === i.topicId) + 1;
            if (t >= 1 && n.depth === a[t - 1].depth) {
              const e = l.find((e) => e.topicId === a[t - 1].topicId);
              if (!e) continue;
              r = e.toTargetIndex + 1;
            }
            l.push({
              type: "move",
              topicId: n.topicId,
              topicType: i.topicType,
              toParentTopicId: o.topicId,
              toTargetIndex: r,
            });
          }
          yield Promise.all(l.map((e) => ti(e)));
        });
      }
      function ai(e) {
        return Rn(this, void 0, void 0, function* () {
          let t = "";
          try {
            t = (0, c._I)().lastSaveDirectory || ke.app.getPath("downloads");
          } catch (e) {
            t = "downloads";
          }
          const n = yield (0, Le.ZZ)({
            title: "Save",
            suggestPath: { suggestedName: e, defaultPath: t },
          });
          return new Promise(function (e) {
            if (n) {
              const t = S().dirname(n);
              Oe.ZP.fetch(Ae.Pp, {
                mutations: [
                  {
                    id: "attachment",
                    type: "setLastDirectory",
                    payload: [{ lastSaveDirectory: t }],
                  },
                ],
              }),
                e(n);
            }
          });
        });
      }
      const li = (e) =>
          Rn(void 0, void 0, void 0, function* () {
            if (0 === e.length) return;
            const t = di(e);
            yield Promise.all(
              e
                .filter((e) => !t.includes(e))
                .map((e) => ti({ type: "delete", topicId: e })),
            );
          }),
        di = (e) => {
          const { outlinerState: t } = Ti(),
            { topicItems: n } = t.value;
          return e.reduce((e, t) => {
            const i = n.find((e) => e.topicId === t);
            return i ? e.concat(i.children) : e;
          }, []);
        },
        ci = (e) => {
          const { outlinerState: t } = Ti(),
            { topicItems: n } = t.value;
          return e.reduce((e, t) => {
            const i = n.find((e) => e.topicId === t);
            return i
              ? i.children.length > 0
                ? e.concat(i.topicId, ci(i.children))
                : e.concat(i.topicId)
              : e;
          }, []);
        },
        si = (e, t, n = { popover: "" }) => {
          const i = (0, Ke.$)(),
            o = i.isRightbarVisible;
          if ((e || t || i.updateRightBarPanel({ visible: !o }), e && t)) {
            const r = i.rightBarPanel,
              a = !(
                o &&
                r === e &&
                i.rightPanelTab[r] === t &&
                i.rightPanelTabConfig.popover === n.popover
              );
            i.updateRightBarPanel({
              visible: a,
              panel: e,
              tab: t,
              tabConfig: n,
            });
          }
        };
      var ui = function (e, t) {
        var n = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            t.indexOf(i) < 0 &&
            (n[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (i = Object.getOwnPropertySymbols(e); o < i.length; o++)
            t.indexOf(i[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, i[o]) &&
              (n[i[o]] = e[i[o]]);
        }
        return n;
      };
      const pi = (e) =>
          0 ===
          e.filter((e) => {
            var { text: t } = e,
              n = ui(e, ["text"]);
            return Object.values(n).some(Boolean);
          }).length,
        gi = (e) => ({
          text: e,
          fontFamily: null,
          fontSize: null,
          fontWeight: null,
          fontStyle: null,
          textTransform: null,
          textDecoration: null,
          textAlign: null,
          textColor: null,
        }),
        hi = (e, t) => {
          let n = e.attributedTitle.concat(t.attributedTitle);
          return (
            e.attributedTitle.length > 1 &&
              t.attributedTitle.length <= 1 &&
              (n = e.attributedTitle.concat(t.title ? gi(t.title) : [])),
            e.attributedTitle.length <= 1 &&
              t.attributedTitle.length > 1 &&
              (n = (e.title ? [gi(e.title)] : []).concat(t.attributedTitle)),
            n
          );
        },
        vi = (e, t) => {
          let n = 0,
            [i, o] = e.reduce(
              (e, i) => (
                (e =
                  t > n + i.text.length
                    ? [e[0].concat(i), e[1]]
                    : t <= n
                      ? [e[0], e[1].concat(i)]
                      : [
                          e[0].concat(
                            Object.assign(Object.assign({}, i), {
                              text: i.text.slice(0, t - n),
                            }),
                          ),
                          e[1].concat(
                            Object.assign(Object.assign({}, i), {
                              text: i.text.slice(t - n),
                            }),
                          ),
                        ]),
                (n += i.text.length),
                e
              ),
              [[], []],
            );
          return pi(i) && (i = []), pi(o) && (o = []), [i, o];
        },
        fi = ({ attributedTitle: e, oldTitle: t, newTitle: n, pos: i }) => {
          const o = ee()(t, n, i),
            r = o[0][0] === ee().EQUAL && o.find((e) => e[0] === ee().EQUAL),
            a = o.find((e) => e[0] === ee().DELETE),
            l = o.find((e) => e[0] === ee().INSERT),
            d = (r && r[1].length) || 0;
          let c = [...e],
            s = 0;
          return (
            a &&
              a.length > 0 &&
              ((c = e.reduce((e, t) => {
                const n = s <= d && d < s + t.text.length,
                  i = s > d && s + t.text.length < d + a[1].length,
                  o =
                    s < d + a[1].length && d + a[1].length <= s + t.text.length;
                if (n) {
                  const n =
                    t.text.slice(0, d - s) + t.text.slice(d - s + a[1].length);
                  e = e.concat(
                    Object.assign(Object.assign({}, t), { text: n }),
                  );
                }
                if (
                  (i &&
                    (e = e.concat(
                      Object.assign(Object.assign({}, t), { text: "" }),
                    )),
                  !n && o)
                ) {
                  const n = t.text.slice(d - s + a[1].length);
                  e = e.concat(
                    Object.assign(Object.assign({}, t), { text: n }),
                  );
                }
                return (
                  n || o || i || (e = e.concat(t)), (s += t.text.length), e
                );
              }, [])),
              (c = c.filter((e) => !!e.text)),
              pi(c) && (c = [])),
            (s = 0),
            l &&
              l.length > 0 &&
              (c = c.reduce(
                (e, t) => (
                  (e =
                    (s < d || 0 === s) && d <= s + t.text.length
                      ? e.concat(
                          Object.assign(Object.assign({}, t), {
                            text:
                              t.text.slice(0, d - s) +
                              l[1] +
                              t.text.slice(d - s),
                          }),
                        )
                      : e.concat(t)),
                  (s += t.text.length),
                  e
                ),
                [],
              )),
            c
          );
        };
      var mi,
        bi = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      !(function (e) {
        (e.TEXT = "TEXT"),
          (e.TOPIC = "TOPIC"),
          (e.LABEL = "LABEL"),
          (e.TASK = "TASK"),
          (e.MARKER = "MARKER"),
          (e.WEBPAGE = "WEBPAGE"),
          (e.LOCALFILELINK = "LOCALFILELINK"),
          (e.FOLDERLINK = "FOLDERLINK"),
          (e.TOPICLINK = "TOPICLINK"),
          (e.ATTACHMENT = "ATTACHMENT"),
          (e.EQUATION = "EQUATION"),
          (e.IMAGE = "IMAGE"),
          (e.NOTES = "NOTES"),
          (e.AUDIO_NOTES = "AUDIO_NOTES"),
          (e.NONE = "NONE");
      })(mi || (mi = {}));
      const Ii = { MAX: 200, MIN: 64 },
        yi = { MAX: 650, MIN: 64 };
      const Ti = (() => {
        const e = Symbol("default-outliner"),
          t = new Map();
        return (n = e) => {
          if (t.has(n)) return t.get(n);
          const i = Object.assign(
            (function () {
              const {
                  document: e,
                  activeSheetId: t,
                  changeDoc: n,
                } = (0, p.nZ)(),
                i = (0, o.iH)(!0),
                r = (0, o.iH)(""),
                l = (0, o.iH)(""),
                h = (0, o.iH)(""),
                v = (0, o.iH)(""),
                m = (0, o.iH)(""),
                b = (0, o.iH)(""),
                I = (0, o.iH)(null),
                y = (0, o.iH)([]),
                x = (0, o.iH)([]),
                k = (0, o.iH)(mi.TEXT),
                w = (0, o.iH)(""),
                S = (0, o.iH)(!1),
                C = (0, o.iH)(!1),
                E = (0, o.iH)([]),
                L = (0, o.iH)(mi.TOPIC),
                M = (0, o.iH)(0),
                O = (0, o.iH)({
                  toParentTopicId: "",
                  toTargetIndex: 0,
                  rect: { left: 0, top: 0 },
                  toTopicType: "attached",
                  toTopicId: "",
                }),
                A = (0, o.iH)({ visible: "", payload: {} }),
                F = (0, o.iH)(""),
                N = (0, o.iH)(""),
                P = (0, o.iH)(!1),
                D = (0, o.iH)(!1),
                q = (0, o.iH)(!1),
                _ = (0, o.iH)(""),
                Z = (0, o.iH)(!1),
                B = (0, o.iH)(null),
                H = (0, o.iH)(50),
                j = (0, o.iH)(0),
                R = (0, o.iH)(50),
                z = (0, o.iH)(0),
                W = (0, o.iH)(50),
                G = (0, o.iH)({}),
                V = (0, o.Fl)(
                  () => (0, p.nZ)().activeSheetViewerState.value.scopeTopicId,
                ),
                U = (0, o.Fl)(() =>
                  e.value.sheets.map((e) =>
                    f(e, { rootTopicId: V.value, isParseAll: !1 }),
                  ),
                ),
                X = (0, o.Fl)(() =>
                  f(
                    e.value.sheets.find((e) => e.id === t.value),
                    { rootTopicId: V.value, isParseAll: !1 },
                  ),
                ),
                Y = (0, o.Fl)(() =>
                  f(
                    e.value.sheets.find((e) => e.id === t.value),
                    { rootTopicId: V.value, isParseAll: !0 },
                  ),
                ),
                J = (0, o.Fl)(() => [
                  X.value.central,
                  ...X.value.attached,
                  ...X.value.detached,
                ]),
                K = (0, o.Fl)(() => [
                  Y.value.central,
                  ...Y.value.attached,
                  ...Y.value.detached,
                ]),
                $ = (0, o.Fl)(() => {
                  const { activeSheetId: e } = (0, p.nZ)();
                  return (0, g.E)().getOutlinerZoomScaleForSheet(e.value) / 100;
                }),
                ee = (0, o.Fl)(() => (0, p.nZ)().isInBranchOnly.value),
                te = (0, o.Fl)(() => Math.max(2 * H.value, 100)),
                ne = (0, o.Fl)(() => ({
                  isEditable: i.value,
                  currEditingTopicId: r.value,
                  currFocusTopicId: l.value,
                  currEditingMarkerId: h.value,
                  currEditingLabel: v.value,
                  currEditingNotesTopicId: m.value,
                  currEditingNotesHref: b.value,
                  currEditingNotesEditor: I.value,
                  startTopicId: w.value,
                  selectionIds: y.value,
                  invalidImageIds: x.value,
                  selectonType: k.value,
                  topicItems: J.value,
                  allTopicItems: K.value,
                  outlinerScale: $.value,
                  isSelecting: S.value,
                  isMouseDown: C.value,
                  draggingTopicIds: E.value,
                  draggingType: L.value,
                  draggingStartPageY: M.value,
                  draggingPos: O.value,
                  popoverEditorState: A.value,
                  audioBarMode: F.value,
                  audioFilePath: N.value,
                  audioAutoPlay: P.value,
                  audioRecording: D.value,
                  inputMethodInputting: q.value,
                  isBranchOnlyMode: ee.value,
                  ghostImgElementId: _.value,
                  isNoteLinkInputVisible: Z.value,
                  topicsLoopNum: H.value,
                  attachedTopicsLoopStartIndex: j.value,
                  attachedTopicsLoopEndIndex: R.value,
                  detachedTopicsLoopStartIndex: z.value,
                  detachedTopicsLoopEndIndex: W.value,
                  sheetStatus: G.value,
                  tooltip: B.value,
                })),
                { openOutlinerCtxMenu: ie } = Q(ne);
              return (
                (0, o.YP)(
                  () => y.value,
                  (e) => {
                    (i.value = 0 === e.length),
                      e.length > 0 && fe(),
                      1 !== e.length ||
                        [
                          mi.MARKER,
                          mi.LABEL,
                          mi.WEBPAGE,
                          mi.TOPICLINK,
                          mi.ATTACHMENT,
                          mi.LOCALFILELINK,
                          mi.FOLDERLINK,
                          mi.AUDIO_NOTES,
                        ].includes(k.value) ||
                        (k.value = mi.TOPIC),
                      e.length > 1 && (k.value = mi.TOPIC);
                  },
                  { immediate: !1 },
                ),
                (0, o.YP)(
                  () => k.value,
                  (e) => {
                    e !== mi.MARKER && (h.value = ""),
                      e !== mi.LABEL && (v.value = ""),
                      e !== mi.NOTES && ((b.value = ""), (I.value = null));
                  },
                  { immediate: !1 },
                ),
                (0, o.YP)(
                  () => ee.value,
                  (e) => {
                    (j.value = 0),
                      (R.value = H.value),
                      (z.value = 0),
                      (W.value = H.value),
                      e && (y.value = []);
                  },
                  { immediate: !1 },
                ),
                (0, o.YP)(
                  () => V.value,
                  (e, t) => {
                    null !== e &&
                      setTimeout(() => {
                        xe(e);
                      }),
                      null === e &&
                        null !== t &&
                        setTimeout(() => {
                          (0, c.JX)().handleCommand("editor.selectTopicById", {
                            topicId: t,
                          });
                        });
                  },
                  { immediate: !1 },
                ),
                (0, o.YP)(
                  () => t.value,
                  (e) =>
                    bi(this, void 0, void 0, function* () {
                      const { executeAction: t } = (0, p.nZ)();
                      t({ name: "mutate:interruptingEditSession" });
                      const {
                        updateSheetRendering: n,
                        sheetRenderingStartAt: i,
                        sheetRendering: o,
                      } = (0, g.E)();
                      if (o && i) {
                        const e = new Date().getTime() - i;
                        e < u.oY && (yield (0, s._v)(u.oY - e)),
                          n({
                            sheetRendering: !1,
                            sheetRenderingStartAt: null,
                          });
                      }
                      const r = window.document.querySelector("#outliner");
                      r &&
                        (G.value[e]
                          ? ((j.value =
                              G.value[e].attachedTopicsLoopStartIndex),
                            (R.value = G.value[e].attachedTopicsLoopEndIndex),
                            setTimeout(() => {
                              r.scrollTo(0, G.value[e].top);
                            }))
                          : ((j.value = 0),
                            (R.value = H.value),
                            (z.value = 0),
                            (W.value = H.value),
                            r.scrollTo(0, 0),
                            setTimeout(() => {
                              xe(X.value.central.topicId);
                            })));
                    }),
                  { immediate: !0 },
                ),
                {
                  outlinerModel: U,
                  outlinerSheetModel: X,
                  handleOutlinerOperation: (t) => {
                    const i = T(e.value, t);
                    n(i);
                  },
                  outlinerState: ne,
                  updateOutlinerState: (e) => {
                    a()(e.currEditingTopicId) ||
                      d()(r.value, e.currEditingTopicId) ||
                      (r.value = e.currEditingTopicId),
                      a()(e.currFocusTopicId) ||
                        d()(l.value, e.currFocusTopicId) ||
                        (l.value = e.currFocusTopicId),
                      a()(e.currEditingMarkerId) ||
                        d()(h.value, e.currEditingMarkerId) ||
                        (h.value = e.currEditingMarkerId),
                      a()(e.currEditingLabel) ||
                        d()(v.value, e.currEditingLabel) ||
                        (v.value = e.currEditingLabel),
                      a()(e.currEditingNotesTopicId) ||
                        d()(m.value, e.currEditingNotesTopicId) ||
                        (m.value = e.currEditingNotesTopicId),
                      a()(e.currEditingNotesHref) ||
                        d()(b.value, e.currEditingNotesHref) ||
                        (b.value = e.currEditingNotesHref),
                      a()(e.currEditingNotesEditor) ||
                        (I.value = e.currEditingNotesEditor),
                      a()(e.startTopicId) ||
                        d()(w.value, e.startTopicId) ||
                        (w.value = e.startTopicId),
                      a()(e.selectionIds) ||
                        d()(y.value, e.selectionIds) ||
                        (y.value = e.selectionIds),
                      a()(e.invalidImageIds) ||
                        d()(x.value, e.invalidImageIds) ||
                        (x.value = e.invalidImageIds),
                      a()(e.selectonType) ||
                        d()(k.value, e.selectonType) ||
                        (k.value = e.selectonType),
                      a()(e.isSelecting) ||
                        d()(S.value, e.isSelecting) ||
                        (S.value = e.isSelecting),
                      a()(e.isMouseDown) ||
                        d()(C.value, e.isMouseDown) ||
                        (C.value = e.isMouseDown),
                      a()(e.draggingTopicIds) ||
                        d()(E.value, e.draggingTopicIds) ||
                        (E.value = e.draggingTopicIds),
                      a()(e.draggingType) ||
                        d()(L.value, e.draggingType) ||
                        (L.value = e.draggingType),
                      a()(e.draggingStartPageY) ||
                        d()(M.value, e.draggingStartPageY) ||
                        (M.value = e.draggingStartPageY),
                      a()(e.draggingPos) ||
                        d()(O.value, e.draggingPos) ||
                        (O.value = e.draggingPos),
                      a()(e.popoverEditorState) ||
                        d()(A.value, e.popoverEditorState) ||
                        (A.value = e.popoverEditorState),
                      a()(e.audioBarMode) ||
                        d()(F.value, e.audioBarMode) ||
                        (F.value = e.audioBarMode),
                      a()(e.audioFilePath) ||
                        d()(N.value, e.audioFilePath) ||
                        (N.value = e.audioFilePath),
                      a()(e.audioAutoPlay) ||
                        d()(P.value, e.audioAutoPlay) ||
                        (P.value = e.audioAutoPlay),
                      a()(e.audioRecording) ||
                        d()(D.value, e.audioRecording) ||
                        (D.value = e.audioRecording),
                      a()(e.inputMethodInputting) ||
                        d()(q.value, e.inputMethodInputting) ||
                        (q.value = e.inputMethodInputting),
                      a()("undefined" !== e.ghostImgElementId) ||
                        d()(_.value, e.ghostImgElementId) ||
                        (_.value = e.ghostImgElementId),
                      a()(e.isNoteLinkInputVisible) ||
                        d()(Z.value, e.isNoteLinkInputVisible) ||
                        (Z.value = e.isNoteLinkInputVisible),
                      a()(e.topicsLoopNum) ||
                        d()(H.value, e.topicsLoopNum) ||
                        (H.value = e.topicsLoopNum),
                      a()(e.tooltip) ||
                        d()(B.value, e.tooltip) ||
                        (B.value = e.tooltip),
                      a()(e.attachedTopicsLoopStartIndex) ||
                        d()(j.value, e.attachedTopicsLoopStartIndex) ||
                        (j.value = e.attachedTopicsLoopStartIndex),
                      a()(e.attachedTopicsLoopEndIndex) ||
                        d()(R.value, e.attachedTopicsLoopEndIndex) ||
                        (R.value = e.attachedTopicsLoopEndIndex),
                      a()(e.detachedTopicsLoopStartIndex) ||
                        d()(z.value, e.detachedTopicsLoopStartIndex) ||
                        (z.value = e.detachedTopicsLoopStartIndex),
                      a()(e.detachedTopicsLoopEndIndex) ||
                        d()(W.value, e.detachedTopicsLoopEndIndex) ||
                        (W.value = e.detachedTopicsLoopEndIndex),
                      a()(e.sheetStatus) ||
                        d()(G.value, e.sheetStatus) ||
                        (G.value = e.sheetStatus);
                  },
                  openOutlinerCtxMenu: ie,
                  maxTopicsLoopNum: te,
                }
              );
            })(),
            {
              unregisterOutliner: () => {
                t.clear();
              },
            },
          );
          return t.set(n, i), i;
        };
      })();
    },
    53573: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => o });
      var i = n(2954);
      const o = () => ({
        handleOutlinerOperation: (0, i.f3)("handleOutlinerOperation"),
        outlinerState: (0, i.f3)("outlinerState"),
        updateOutlinerState: (0, i.f3)("updateOutlinerState"),
        outlinerActions: (0, i.f3)("outlinerActions"),
        openOutlinerCtxMenu: (0, i.f3)("openOutlinerCtxMenu"),
      });
    },
    10689: (e, t, n) => {
      "use strict";
      function i(e) {
        return e.replace(/[^-]/g, (e) => "_" + e.charCodeAt(0).toString(16));
      }
      n.d(t, { N: () => i });
    },
    15893: (e, t) => {
      "use strict";
      function n(e, t) {
        return void 0 === e ? (void 0 === t ? e : t) : e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.boolean = function (e, t) {
          return "function" == typeof (e = n(e, t))
            ? function () {
                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                  n[i] = arguments[i];
                return !!e.apply(this, n);
              }
            : e
              ? function () {
                  return !0;
                }
              : function () {
                  return !1;
                };
        }),
        (t.integer = function (e, t) {
          return "function" == typeof (e = n(e, t))
            ? function () {
                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                  n[i] = arguments[i];
                var o = parseInt(e.apply(this, n), 10);
                return o != o ? 0 : o;
              }
            : (e = parseInt(e, 10)) != e
              ? function () {
                  return 0;
                }
              : function () {
                  return e;
                };
        }),
        (t.string = function (e, t) {
          return "function" == typeof (e = n(e, t))
            ? function () {
                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                  n[i] = arguments[i];
                return "" + e.apply(this, n);
              }
            : ((e = "" + e),
              function () {
                return e;
              });
        });
    },
    25581: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48IS0tR2VuZXJhdG9yOiBTa2V0Y2ggNTYgKDgxNTg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbS0tPjx0aXRsZT5hdWRpb25vdGU8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIGlkPSJhdWRpb25vdGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4wMDAwMDAsIDEuMDAwMDAwKSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuMiI+PHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMi4zODIiIHk9IjAuNiIgd2lkdGg9IjUuMDM3IiBoZWlnaHQ9IjguNjAxIiByeD0iMi41MTg1Ii8+PHBhdGggZD0iTTkuODAxLDUuMzQ2IEw5LjgwMSw2LjM4NTUgQzkuODAxLDkuMjU1OTk5OTkgNy42MDY5NzE0MiwxMS41ODMgNC45MDA1LDExLjU4MyBDMi4xOTQwMjg1OCwxMS41ODMgMCw5LjI1NTk5OTk5IDAsNi4zODU1IEwwLDUuMzQ2IiBpZD0iUGF0aCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTQuOTAwNSwxMi4wMjg1IEw0Ljk1LDEzLjIiIGlkPSJQYXRoLTQ5IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9nPjwvc3ZnPg==";
    },
    16884: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48IS0tR2VuZXJhdG9yOiBTa2V0Y2ggNTUgKDc4MDc2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbS0tPjx0aXRsZT5kYXNoPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBpZD0iZGFzaCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4xIj48ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguNTAwMDAwLCAxLjUwMDAwMCkiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMC4xIDAgMC4xIDMgMC45IDMgMC45IDAiLz48cG9seWdvbiBpZD0iUGF0aCIgcG9pbnRzPSIwLjEgNiAwLjEgOSAwLjkgOSAwLjkgNiIvPjxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjAuMSAxMiAwLjEgMTUgMC45IDE1IDAuOSAxMiIvPjwvZz48L2c+PC9zdmc+";
    },
    23543: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGU+ZGFzaDwvdGl0bGU+PGcgaWQ9ImRhc2giIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMiI+PGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjUwMDAwMCwgMS41MDAwMDApIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjAuMSAwIDAuMSAzIDAuOSAzIDAuOSAwIi8+PHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMC4xIDYgMC4xIDkgMC45IDkgMC45IDYiLz48cG9seWdvbiBpZD0iUGF0aCIgcG9pbnRzPSIwLjEgMTIgMC4xIDE1IDAuOSAxNSAwLjkgMTIiLz48L2c+PC9nPjwvc3ZnPg==";
    },
    23052: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i = n.p + "images/drag_ctrl.svg";
    },
    59384: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGU+Zm9sZF90cmlhbmdsZV9pY29uX3doaXRlPC90aXRsZT48ZyBpZD0iZm9sZF90cmlhbmdsZV9pY29uX3doaXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNC41NzYsMy40MzIgTDExLjYxNiw4LjcxMiBDMTEuNzc1MDU4LDguODMxMjkzNTEgMTEuODA3MjkzNSw5LjA1Njk0MTk5IDExLjY4OCw5LjIxNiBDMTEuNjY3NTMyNSw5LjI0MzI5MDA0IDExLjY0MzI5LDkuMjY3NTMyNDcgMTEuNjE2LDkuMjg4IEw0LjU3NiwxNC41NjggQzQuNDE2OTQxOTksMTQuNjg3MjkzNSA0LjE5MTI5MzUxLDE0LjY1NTA1OCA0LjA3MiwxNC40OTYgQzQuMDI1MjY0MDMsMTQuNDMzNjg1NCA0LDE0LjM1Nzg5MzMgNCwxNC4yOCBMNCwzLjcyIEM0LDMuNTIxMTc3NDkgNC4xNjExNzc0OSwzLjM2IDQuMzYsMy4zNiBDNC40Mzc4OTMyOCwzLjM2IDQuNTEzNjg1MzgsMy4zODUyNjQwMyA0LjU3NiwzLjQzMiBaIiBpZD0iUGF0aC03IiBmaWxsPSIjRjZGNkY2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgOS4wMDAwMDApIHJvdGF0ZSgtMjcwLjAwMDAwMCkgdHJhbnNsYXRlKC04LjAwMDAwMCwgLTkuMDAwMDAwKSAiLz48L2c+PC9zdmc+";
    },
    99845: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48IS0tR2VuZXJhdG9yOiBTa2V0Y2ggNTYgKDgxNTg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbS0tPjx0aXRsZT5maWxlbGluazwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgaWQ9ImZpbGVsaW5rIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjUwMDAwMCwgMi4wMDAwMDApIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS4yIj48cG9seWxpbmUgaWQ9IlBhdGgtMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuNTAwMDAwLCAyLjI1MDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMi41MDAwMDAsIC0yLjI1MDAwMCkgIiBwb2ludHM9IjAuNSAwIDAuNSA0LjUgNC41IDQuNSIvPjxwYXRoIGQ9Ik05LjUsMCBMNCwwIEwwLDQgTDAsMTEgQzYuNzYzNTM3NTFlLTE3LDExLjU1MjI4NDcgMC40NDc3MTUyNSwxMiAxLDEyIEw4LjUsMTIgTDkuNSwxMiBDMTAuMDUyMjg0NywxMiAxMC41LDExLjU1MjI4NDcgMTAuNSwxMSBMMTAuNSwzIEwxMC41LDEgQzEwLjUsMC40NDc3MTUyNSAxMC4wNTIyODQ3LC0xLjAxNDUzMDYzZS0xNiA5LjUsMCBaIiBpZD0iUGF0aC0xMyIvPjwvZz48L2c+PC9zdmc+";
    },
    57298: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i = n.p + "images/link-local-folder.svg";
    },
    8056: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i = n.p + "images/link-topic.svg";
    },
    39904: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i = n.p + "images/link-webpage.svg";
    },
    64821: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i = n.p + "images/bold.svg";
    },
    29547: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i = n.p + "images/italic.svg";
    },
    18234: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i = n.p + "images/link.svg";
    },
    71287: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48IS0tR2VuZXJhdG9yOiBTa2V0Y2ggNTYgKDgxNTg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbS0tPjx0aXRsZT5saXN0PC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBpZD0ibGlzdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgaWQ9ImJ1bGxldCI+PHJlY3QgaWQ9IlJlY3RhbmdsZS04MyIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMC45IiB4PSI1LjAzMTI1IiB5PSIzLjUiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxLjI1IiByeD0iMC4yNSIvPjxyZWN0IGlkPSJSZWN0YW5nbGUtODMtQ29weS0yIiBmaWxsPSIjMDAwMDAwIiBvcGFjaXR5PSIwLjkiIHg9IjUuMDMxMjUiIHk9IjcuNzUiIHdpZHRoPSI5IiBoZWlnaHQ9IjEuMjUiIHJ4PSIwLjI1Ii8+PHJlY3QgaWQ9IlJlY3RhbmdsZS04My1Db3B5LTMiIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjAuOSIgeD0iNS4wMzEyNSIgeT0iMTIiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxLjI1IiByeD0iMC4yNSIvPjxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiMxOTE5MTkiIGN4PSIyLjUiIGN5PSI0IiByPSIxIi8+PGNpcmNsZSBpZD0iT3ZhbC1Db3B5IiBmaWxsPSIjMTkxOTE5IiBjeD0iMi41IiBjeT0iOC41IiByPSIxIi8+PGNpcmNsZSBpZD0iT3ZhbC1Db3B5LTIiIGZpbGw9IiMxOTE5MTkiIGN4PSIyLjUiIGN5PSIxMi41IiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=";
    },
    43427: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i = n.p + "images/number.svg";
    },
    63846: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i = n.p + "images/underline.svg";
    },
    96393: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => a });
      var i = n(2954),
        o = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      const r = (0, i.aZ)({
        name: "VisibilitySensor",
        props: { options: Object, onVisibleChange: Function },
        setup(e, t) {
          const n = (0, i.iH)(null);
          let r = null;
          return (
            (0, i.bv)(() =>
              o(this, void 0, void 0, function* () {
                yield new Promise((e) => setTimeout(e, 0)),
                  n.value &&
                    ((r = new IntersectionObserver(
                      ([e]) => {
                        t.emit("onVisibleChange", e.isIntersecting);
                      },
                      Object.assign({ root: n.value.parentElement }, e.options),
                    )),
                    r.observe(n.value));
              }),
            ),
            (0, i.Jd)(() => {
              r && r.disconnect();
            }),
            { entryContainer: n }
          );
        },
      });
      const a = (0, n(51900).Z)(
        r,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("div", { ref: "entryContainer" }, [e._t("default")], 2);
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
    },
    27710: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => Se });
      var i = n(2954),
        o = n(90255),
        r = n.n(o),
        a = n(71017),
        l = n.n(a),
        d = n(50965),
        c = n(94593),
        s = n(96393),
        u = n(91324),
        p = n(96160),
        g = n(837),
        h = n(76893),
        v = n(10689),
        f = n(53573);
      const m = (0, i.aZ)({
        __name: "topic-marker",
        props: {
          topicId: null,
          markers: { default: () => [] },
          size: { default: 18 },
        },
        setup(e) {
          const t = e,
            {
              outlinerState: n,
              updateOutlinerState: o,
              openOutlinerCtxMenu: r,
            } = (0, f.p)(),
            a = (0, i.iH)(null),
            l = () => {
              o({
                currEditingTopicId: t.topicId,
                selectionIds: [t.topicId],
                selectonType: g._p.MARKER,
              });
            },
            d = () => {
              var e;
              n.value.selectonType !== g._p.TOPIC &&
                o({ selectonType: g._p.TOPIC }),
                null === (e = a.value) ||
                  void 0 === e ||
                  e.removeEventListener("mouseout", d);
            };
          return {
            __sfc: !0,
            props: t,
            isMac: false,
            outlinerState: n,
            updateOutlinerState: o,
            openOutlinerCtxMenu: r,
            topicMarkerContainer: a,
            getTopicMarkerItemStyle: (e) => ({
              width: `${t.size}px`,
              height: `${t.size}px`,
              backgroundSize: `${t.size}px`,
              backgroundImage: `url('${e}')`,
            }),
            handleFocus: l,
            handleMarkerClick: (e, n) => {
              const i = e.target.getBoundingClientRect();
              l(),
                o({
                  popoverEditorState: {
                    visible: "marker",
                    payload: {
                      topicId: t.topicId,
                      editorRect: i,
                      markers: t.markers,
                      markerId: n,
                    },
                  },
                });
            },
            handleMouseout: d,
            handleContextMenu: (e, t) => {
              l(), o({ currEditingMarkerId: t }), r("MARKER");
            },
          };
        },
      });
      n(14433);
      var b = n(51900);
      const I = (0, b.Z)(
        m,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              ref: "topicMarkerContainer",
              staticClass:
                "outliner-topic-marker-container uk-flex uk-flex-middle",
            },
            e._l(e.markers, function ({ id: e, url: i }) {
              return t(
                "div",
                { key: e, staticClass: "outliner-topic-marker uk-float-left" },
                [
                  t("span", {
                    staticClass: "outliner-topic-marker-item",
                    style: n.getTopicMarkerItemStyle(i),
                    on: {
                      click: function (t) {
                        return (
                          t.stopPropagation(),
                          t.preventDefault(),
                          n.handleMarkerClick(t, e)
                        );
                      },
                      mousedown: function (e) {
                        return (
                          e.stopPropagation(), (() => !1).apply(null, arguments)
                        );
                      },
                      contextmenu: function (t) {
                        return (
                          t.preventDefault(),
                          t.stopPropagation(),
                          n.handleContextMenu(t, e)
                        );
                      },
                    },
                  }),
                ],
              );
            }),
            0,
          );
        },
        [],
        !1,
        null,
        "51d6aece",
        null,
      ).exports;
      const y = (0, i.aZ)({
        __name: "topic-label",
        props: {
          topicId: null,
          labels: { default: () => [] },
          labelSortOrder: { default: "auto" },
        },
        setup(e) {
          const t = e,
            {
              outlinerState: n,
              updateOutlinerState: o,
              openOutlinerCtxMenu: r,
            } = (0, f.p)(),
            a = (0, i.iH)(null),
            l = () => {
              o({
                currEditingTopicId: t.topicId,
                selectionIds: [t.topicId],
                selectonType: g._p.LABEL,
              });
            },
            d = (0, i.Fl)(() => {
              const e = g.xI.sortLabels(t.labels, t.labelSortOrder);
              return e && 0 !== e.length ? e : t.labels;
            }),
            c = () => {
              var e;
              n.value.selectonType !== g._p.TOPIC &&
                o({ selectonType: g._p.TOPIC }),
                null === (e = a.value) ||
                  void 0 === e ||
                  e.removeEventListener("mouseout", c);
            };
          return {
            __sfc: !0,
            props: t,
            isMac: false,
            outlinerState: n,
            updateOutlinerState: o,
            openOutlinerCtxMenu: r,
            topicLabelRef: a,
            handleFocus: l,
            sortedLabels: d,
            handleClick: () => {
              if (!a.value) return;
              const e = a.value.getBoundingClientRect();
              l(),
                o({
                  popoverEditorState: {
                    visible: "label",
                    payload: {
                      targetIds: [t.topicId],
                      editorRect: e,
                      labels: t.labels,
                      labelSortOrder: t.labelSortOrder,
                    },
                  },
                });
            },
            handleMouseout: c,
            handleContextMenu: (e, t) => {
              l(), o({ currEditingLabel: t }), r("LABEL");
            },
          };
        },
      });
      n(76466);
      const T = (0, b.Z)(
        y,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return e.labels.length > 0
            ? t(
                "div",
                {
                  ref: "topicLabelRef",
                  staticClass: "outliner-topic-label-container",
                },
                e._l(n.sortedLabels, function (i, o) {
                  return t(
                    "span",
                    {
                      key: o,
                      staticClass: "outliner-topic-label uk-text-truncate",
                      on: {
                        click: function (e) {
                          return (
                            e.preventDefault(),
                            e.stopPropagation(),
                            n.handleClick.apply(null, arguments)
                          );
                        },
                        mousedown: function (e) {
                          return (
                            e.preventDefault(),
                            e.stopPropagation(),
                            (() => !1).apply(null, arguments)
                          );
                        },
                        contextmenu: function (e) {
                          return (
                            e.preventDefault(),
                            e.stopPropagation(),
                            n.handleContextMenu(e, i)
                          );
                        },
                      },
                    },
                    [e._v("\n    " + e._s(i) + "\n  ")],
                  );
                }),
                0,
              )
            : e._e();
        },
        [],
        !1,
        null,
        "7ddad63c",
        null,
      ).exports;
      var x = n(5893),
        k = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      const w = (0, i.aZ)({
        __name: "topic-link",
        props: {
          topicId: null,
          webpage: null,
          localFileLink: null,
          topicLink: null,
          attachment: null,
          title: null,
        },
        setup(e) {
          const t = e,
            {
              outlinerState: n,
              outlinerActions: o,
              updateOutlinerState: r,
              openOutlinerCtxMenu: a,
            } = (0, f.p)(),
            l = (0, i.iH)(""),
            d = (0, i.iH)(null),
            s = (0, i.Fl)(() => {
              if (!t.localFileLink) return !1;
              let e = t.localFileLink;
              try {
                e = (0, x.iZ)(e);
              } catch (t) {
                e = e.slice(5);
              }
              try {
                return c.Z.isDirectorySync(e);
              } catch (e) {
                return !1;
              }
            }),
            u = () => {
              r({
                currEditingTopicId: t.topicId,
                selectionIds: [t.topicId],
                selectonType: s.value
                  ? g._p.FOLDERLINK
                  : t.localFileLink
                    ? g._p.LOCALFILELINK
                    : t.attachment
                      ? g._p.ATTACHMENT
                      : t.topicLink
                        ? g._p.TOPICLINK
                        : g._p.WEBPAGE,
              });
            },
            p = () => {
              var e;
              n.value.selectonType !== g._p.TOPIC &&
                r({ selectonType: g._p.TOPIC }),
                null === (e = d.value) ||
                  void 0 === e ||
                  e.removeEventListener("mouseout", p);
            };
          return (
            (0, i.YP)(
              () => [t.webpage, t.topicLink, t.localFileLink, t.attachment],
              () =>
                k(this, void 0, void 0, function* () {
                  l.value = yield o.getLinkTitle(t);
                }),
              { immediate: !0 },
            ),
            {
              __sfc: !0,
              props: t,
              isMac: false,
              outlinerState: n,
              outlinerActions: o,
              updateOutlinerState: r,
              openOutlinerCtxMenu: a,
              linkTitle: l,
              topicLinkContainer: d,
              isFolderLink: s,
              handleFocus: u,
              handleLinkClick: () => {
                u(), o.openLink(t);
              },
              handleMouseout: p,
              handleContextMenu: () => (
                u(),
                s.value
                  ? a("FOLDERLINK")
                  : t.localFileLink
                    ? a("LOCALFILELINK")
                    : t.topicLink
                      ? a("TOPICLINK")
                      : t.attachment
                        ? a("ATTACHMENT")
                        : void a("WEBPAGE")
              ),
            }
          );
        },
      });
      n(85093);
      const S = (0, b.Z)(
        w,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              ref: "topicLinkContainer",
              staticClass: "outliner-topic-link-container uk-float-left",
            },
            [
              t(
                "div",
                {
                  staticClass: "outliner-topic-link",
                  class: {
                    "is-webpage": !!e.webpage,
                    "is-topic": !!e.topicLink,
                    "is-local-file": !!e.localFileLink,
                    "is-local-folder": !!e.attachment,
                  },
                  on: {
                    click: n.handleLinkClick,
                    contextmenu: function (e) {
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        n.handleContextMenu.apply(null, arguments)
                      );
                    },
                  },
                },
                [
                  t(
                    "span",
                    {
                      staticClass: "outliner-topic-link-text uk-text-truncate",
                    },
                    [e._v(e._s(n.linkTitle))],
                  ),
                ],
              ),
            ],
          );
        },
        [],
        !1,
        null,
        "d413e324",
        null,
      ).exports;
      var C = n(69931),
        E = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      const L = (0, i.aZ)({
        __name: "topic-image",
        props: {
          topicId: null,
          image: null,
          isSelected: { type: Boolean, default: !1 },
        },
        setup(e) {
          const t = e,
            { getResourceUrlByXapUrl: n } = (0, p.nZ)(),
            {
              handleOutlinerOperation: o,
              outlinerState: r,
              updateOutlinerState: a,
              openOutlinerCtxMenu: l,
            } = (0, f.p)(),
            c = (0, i.iH)(null),
            s = (0, i.iH)(!1),
            u = (0, i.iH)(!1),
            h = (0, i.iH)({ width: 0, height: 0 }),
            v = (0, i.iH)({ width: 0, height: 0, ratio: 1 }),
            m = (0, i.iH)(!0);
          let b = null;
          const I = (0, i.Fl)(() => (0, d.S)().appearance),
            y = (0, i.Fl)(() =>
              "dark" === I.value
                ? (0, C.ju)(
                    "/static/snowbird/resource/addons/image_error_for_dark.svg",
                  )
                : (0, C.ju)(
                    "/static/snowbird/resource/addons/image_error_for_light.svg",
                  ),
            ),
            T = (0, i.Fl)(() => {
              let e = s.value ? v.value.width : t.image.width || h.value.width,
                n = s.value ? v.value.height : t.image.height || h.value.height;
              return (
                e < g.ye.MIN
                  ? ((e = g.ye.MIN), (n = e * v.value.ratio))
                  : e > g.ye.MAX && ((e = g.ye.MAX), (n = e * v.value.ratio)),
                { width: e + "px", height: n + "px" }
              );
            }),
            x = () =>
              E(this, void 0, void 0, function* () {
                try {
                  const e = yield n(t.image.src);
                  if (t.image.height && t.image.width)
                    v.value.ratio = t.image.height / t.image.width;
                  else {
                    let { height: t, width: n } = yield (0, g.N8)(e);
                    (v.value.ratio = t / n),
                      n < g.yE.MIN
                        ? ((n = g.yE.MIN), (t = n * v.value.ratio))
                        : n > g.yE.MAX &&
                          ((n = g.yE.MAX), (t = n * v.value.ratio)),
                      (h.value = { width: n, height: t });
                  }
                  k(e),
                    (m.value = !0),
                    r.value.invalidImageIds.includes(t.topicId) &&
                      a({
                        invalidImageIds: r.value.invalidImageIds.filter(
                          (e) => e !== t.topicId,
                        ),
                      });
                } catch (e) {
                  (m.value = !1),
                    r.value.invalidImageIds.includes(t.topicId) ||
                      a({
                        invalidImageIds: r.value.invalidImageIds.concat(
                          t.topicId,
                        ),
                      }),
                    k(y.value);
                }
              }),
            k = (e) => {
              if (c.value)
                if (c.value.querySelector("img")) {
                  if (b.src === e) return;
                  (b.src = e), (b.style.width = "100%");
                } else
                  (b = new Image()),
                    b.addEventListener("load", () =>
                      E(this, void 0, void 0, function* () {
                        var e;
                        null === (e = c.value) || void 0 === e || e.prepend(b);
                      }),
                    ),
                    (b.src = e),
                    (b.style.width = "100%");
            },
            w = (e) => {
              if (!s.value) return;
              if (!c.value) return;
              e.preventDefault(), e.stopPropagation();
              const t = c.value.getBoundingClientRect(),
                { left: n, top: i } = t;
              let { clientX: o, clientY: a } = e,
                l = (o - n) / r.value.outlinerScale,
                d = (a - i) / r.value.outlinerScale;
              l > d ? (d = l * v.value.ratio) : (l = d * (1 / v.value.ratio)),
                l <= g.ye.MIN * r.value.outlinerScale
                  ? ((l = g.ye.MIN), (d = l * v.value.ratio))
                  : l >= g.ye.MAX * r.value.outlinerScale &&
                    ((l = g.ye.MAX), (d = l * v.value.ratio)),
                (v.value.width = l),
                (v.value.height = d);
            },
            S = (e) => {
              s.value &&
                (e.preventDefault(),
                e.stopPropagation(),
                (s.value = !1),
                o({
                  type: "update",
                  topicId: t.topicId,
                  image: Object.assign(Object.assign({}, t.image), v.value),
                }),
                window.removeEventListener("mousemove", w, !1),
                window.removeEventListener("mouseup", S, !1));
            },
            L = () => {
              a({
                currEditingTopicId: t.topicId,
                selectionIds: [],
                selectonType: g._p.IMAGE,
              });
            };
          return (
            (0, i.bv)(() => {
              x();
            }),
            (0, i.YP)(
              () => t.image,
              () => {
                x();
              },
              { immediate: !1 },
            ),
            (0, i.YP)(
              () => I.value,
              () => {
                m.value || k(y.value);
              },
              { immediate: !1 },
            ),
            {
              __sfc: !0,
              props: t,
              getResourceUrlByXapUrl: n,
              handleOutlinerOperation: o,
              outlinerState: r,
              updateOutlinerState: a,
              openOutlinerCtxMenu: l,
              topicImageContainer: c,
              isResizing: s,
              isDragging: u,
              imageSize: h,
              resizingSize: v,
              isImageValid: m,
              imageEl: b,
              appearance: I,
              errImageSrc: y,
              imgStyle: T,
              refreshImage: x,
              loadImage: k,
              resizeStart: () => {
                b &&
                  ((s.value = !0),
                  (v.value.width = b.width),
                  (v.value.height = b.height),
                  window.addEventListener("mousemove", w, !1),
                  window.addEventListener("mouseup", S, !1));
              },
              resize: w,
              resizeEnd: S,
              handleFoucs: L,
              handleContextMenu: () => {
                L(), l("IMAGE");
              },
              handleDragStart: (e) => {
                m.value
                  ? (b && e.dataTransfer.setDragImage(b, 0, 0),
                    (u.value = !0),
                    a({
                      draggingStartPageY: e.pageY,
                      draggingType: g._p.IMAGE,
                      draggingTopicIds: [t.topicId],
                      isMouseDown: !0,
                    }),
                    e.dataTransfer.clearData(),
                    e.dataTransfer.setData(
                      "outlinerSvg",
                      JSON.stringify(t.image),
                    ))
                  : e.preventDefault();
              },
              handleDragEnd: () => {
                u.value = !1;
              },
              handleDblClick: () => {
                (0, d.JX)().handleCommand("outliner.previewImage");
              },
            }
          );
        },
      });
      n(94783);
      const M = (0, b.Z)(
        L,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              ref: "topicImageContainer",
              staticClass: "outliner-topic-image",
              class: {
                "is-selected": e.isSelected,
                "is-image-valid": n.isImageValid,
                "is-dragging ": n.isDragging,
              },
              style: n.imgStyle,
              on: {
                mousedown: function (e) {
                  return e.stopPropagation(), (() => !1).apply(null, arguments);
                },
                dragstart: function (e) {
                  return (
                    e.stopPropagation(),
                    n.handleDragStart.apply(null, arguments)
                  );
                },
                dragend: function (e) {
                  return (
                    e.stopPropagation(), n.handleDragEnd.apply(null, arguments)
                  );
                },
                click: function (e) {
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    n.handleFoucs.apply(null, arguments)
                  );
                },
                dblclick: function (e) {
                  return (
                    e.stopPropagation(), n.handleDblClick.apply(null, arguments)
                  );
                },
                contextmenu: function (e) {
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    n.handleContextMenu.apply(null, arguments)
                  );
                },
              },
            },
            [
              t("div", {
                staticClass: "outliner-topic-image-handler",
                on: {
                  mousedown: function (e) {
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      n.resizeStart.apply(null, arguments)
                    );
                  },
                },
              }),
            ],
          );
        },
        [],
        !1,
        null,
        "70581c3c",
        null,
      ).exports;
      var O = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      const A = (0, i.aZ)({
        __name: "topic-equation",
        props: {
          topicId: null,
          equation: null,
          image: null,
          isSelected: { type: Boolean, default: !1 },
        },
        setup(e) {
          const t = e,
            { getResourceUrlByXapUrl: n } = (0, p.nZ)(),
            {
              outlinerState: o,
              updateOutlinerState: r,
              handleOutlinerOperation: a,
              outlinerActions: l,
              openOutlinerCtxMenu: c,
            } = (0, f.p)(),
            s = (0, i.iH)(null),
            u = (0, i.iH)(!1),
            h = (0, i.iH)(!1),
            v = (0, i.iH)({ width: 0, height: 0 }),
            m = (0, i.iH)({ width: 0, height: 0, ratio: 1 }),
            b = (0, i.iH)(!0);
          let I = null;
          const y = (0, i.Fl)(() => (0, d.S)().appearance),
            T = (0, i.Fl)(() =>
              "dark" === y.value
                ? (0, C.ju)(
                    "/static/snowbird/resource/addons/image_error_for_dark.svg",
                  )
                : (0, C.ju)(
                    "/static/snowbird/resource/addons/image_error_for_light.svg",
                  ),
            ),
            x = (0, i.Fl)(() => {
              let e = u.value ? m.value.width : t.image.width || v.value.width,
                n = u.value ? m.value.height : t.image.height || v.value.height;
              return (
                e > g.ye.MAX && ((e = g.ye.MAX), (n = e * m.value.ratio)),
                { width: e + "px", height: n + "px" }
              );
            }),
            k = () =>
              O(this, void 0, void 0, function* () {
                try {
                  if ("xap:undefined" !== t.image.src)
                    if (t.image.width || v.value.width)
                      m.value.ratio = t.image.height / t.image.width;
                    else {
                      const e = yield n(t.image.src),
                        { width: i, height: o } = yield (0, g.N8)(e);
                      (m.value.ratio = o / i),
                        (v.value = { width: i, height: o });
                    }
                  const { imageSource: e, isMathJaxValid: i } =
                    yield l.getEquationImageInfo({ equation: t.equation });
                  if (((b.value = i), "xap:undefined" === t.image.src)) {
                    const { width: t, height: n } = yield (0, g.N8)(e);
                    (m.value.ratio = n / t),
                      (v.value = { width: t, height: n });
                  }
                  w(e),
                    i &&
                      o.value.invalidImageIds.includes(t.topicId) &&
                      r({
                        invalidImageIds: o.value.invalidImageIds.filter(
                          (e) => e !== t.topicId,
                        ),
                      }),
                    i ||
                      o.value.invalidImageIds.includes(t.topicId) ||
                      r({
                        invalidImageIds: o.value.invalidImageIds.concat(
                          t.topicId,
                        ),
                      });
                } catch (e) {
                  (b.value = !1),
                    o.value.invalidImageIds.includes(t.topicId) ||
                      r({
                        invalidImageIds: o.value.invalidImageIds.concat(
                          t.topicId,
                        ),
                      }),
                    w(T.value);
                }
              }),
            w = (e) => {
              if (s.value)
                if (s.value.querySelector("img")) {
                  if (I.src === e) return;
                  (I.src = e), (I.style.width = "100%");
                } else
                  (I = new Image()),
                    I.addEventListener("load", () =>
                      O(this, void 0, void 0, function* () {
                        var e;
                        null === (e = s.value) || void 0 === e || e.prepend(I);
                      }),
                    ),
                    (I.src = e),
                    (I.style.width = "100%");
            },
            S = (e) => {
              if (!u.value) return;
              if (!s.value) return;
              e.preventDefault(), e.stopPropagation();
              const t = s.value.getBoundingClientRect(),
                { left: n, top: i } = t;
              let { clientX: r, clientY: a } = e,
                l = (r - n) / o.value.outlinerScale,
                d = (a - i) / o.value.outlinerScale;
              l > d ? (d = l * m.value.ratio) : (l = d * (1 / m.value.ratio)),
                l >= g.ye.MAX * o.value.outlinerScale &&
                  ((l = g.ye.MAX), (d = l * m.value.ratio)),
                (m.value.width = l),
                (m.value.height = d);
            },
            E = (e) => {
              u.value &&
                (e.preventDefault(),
                e.stopPropagation(),
                (u.value = !1),
                a({
                  type: "update",
                  topicId: t.topicId,
                  equation: t.equation,
                  image: { width: m.value.width, height: m.value.height },
                }),
                window.removeEventListener("mousemove", S),
                window.removeEventListener("mouseup", E));
            },
            L = () => {
              r({
                currEditingTopicId: t.topicId,
                selectionIds: [],
                selectonType: g._p.EQUATION,
              });
            };
          return (
            (0, i.bv)(() => {
              k();
            }),
            (0, i.YP)(
              () => [t.equation, t.image],
              () => {
                k();
              },
              { immediate: !1 },
            ),
            (0, i.YP)(
              () => y.value,
              () => {
                b.value || w(T.value);
              },
              { immediate: !1 },
            ),
            {
              __sfc: !0,
              props: t,
              getResourceUrlByXapUrl: n,
              outlinerState: o,
              updateOutlinerState: r,
              handleOutlinerOperation: a,
              outlinerActions: l,
              openOutlinerCtxMenu: c,
              topicEquationContainer: s,
              isResizing: u,
              isDragging: h,
              equationSize: v,
              resizingSize: m,
              isImageValid: b,
              imageEl: I,
              appearance: y,
              errImageSrc: T,
              imgStyle: x,
              refreshEquation: k,
              loadEquation: w,
              resizeStart: () => {
                I &&
                  ((u.value = !0),
                  (m.value.ratio = I.height / I.width),
                  (m.value.width = I.width),
                  (m.value.height = I.height),
                  window.addEventListener("mousemove", S, !1),
                  window.addEventListener("mouseup", E, !1));
              },
              resize: S,
              resizeEnd: E,
              handleFoucs: L,
              handleDblClick: () => {
                (0, d.JX)().handleCommand("editor.showEquationEditor");
              },
              handleContextMenu: () => {
                L(), c("EQUATION");
              },
              handleDragStart: (e) => {
                b.value
                  ? (I && e.dataTransfer.setDragImage(I, 0, 0),
                    (h.value = !0),
                    r({
                      draggingStartPageY: e.pageY,
                      draggingType: g._p.EQUATION,
                      draggingTopicIds: [t.topicId],
                      isMouseDown: !0,
                    }),
                    e.dataTransfer.clearData(),
                    e.dataTransfer.setData(
                      "outlinerSvg",
                      JSON.stringify({ equation: t.equation, image: t.image }),
                    ))
                  : e.preventDefault();
              },
              handleDragEnd: () => {
                h.value = !1;
              },
            }
          );
        },
      });
      n(51819);
      const F = (0, b.Z)(
        A,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              staticClass: "outliner-topic-equation-container",
              class: {
                "is-selected": e.isSelected,
                "is-dragging ": n.isDragging,
              },
            },
            [
              t("div", {
                ref: "topicEquationContainer",
                staticClass: "outliner-topic-equation",
                class: { "is-image-valid": n.isImageValid },
                style: n.imgStyle,
                on: {
                  mousedown: function (e) {
                    return (
                      e.stopPropagation(), (() => !1).apply(null, arguments)
                    );
                  },
                  dragstart: function (e) {
                    return (
                      e.stopPropagation(),
                      n.handleDragStart.apply(null, arguments)
                    );
                  },
                  dragend: function (e) {
                    return (
                      e.stopPropagation(),
                      n.handleDragEnd.apply(null, arguments)
                    );
                  },
                  dblclick: function (e) {
                    return (
                      e.stopPropagation(),
                      n.handleDblClick.apply(null, arguments)
                    );
                  },
                  click: function (e) {
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      n.handleFoucs.apply(null, arguments)
                    );
                  },
                  contextmenu: function (e) {
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      n.handleContextMenu.apply(null, arguments)
                    );
                  },
                },
              }),
              e._v(" "),
              t("div", {
                staticClass: "outliner-topic-equation-handler",
                on: {
                  mousedown: function (e) {
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      n.resizeStart.apply(null, arguments)
                    );
                  },
                },
              }),
            ],
          );
        },
        [],
        !1,
        null,
        "8295fd3a",
        null,
      ).exports;
      var N = n(68924),
        P = n.n(N),
        D = n(17462),
        q = n(92636),
        _ = n(54856),
        Z = n(90435),
        B = n(85786),
        H = n(37475),
        j = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      const R = (0, i.aZ)({
        __name: "topic-note",
        props: { topicId: null, notes: null },
        setup(e) {
          const t = e,
            n = "xmind-autolink",
            o = (e, ...t) => (0, d.JE)().T(e, ...t),
            {
              outlinerState: r,
              updateOutlinerState: a,
              handleOutlinerOperation: l,
              openOutlinerCtxMenu: c,
            } = (0, f.p)(),
            s = (0, i.iH)(null),
            p = (0, i.iH)(null),
            h = (0, i.iH)(null),
            v = (0, i.iH)(!1),
            m = (0, i.iH)(!1),
            b = (0, i.iH)(!1),
            I = (0, i.iH)(!!t.notes),
            y = (0, i.iH)(!1),
            T = (0, i.iH)(null),
            x = (0, i.iH)(""),
            k = (0, i.Fl)(
              () => r.value.currEditingNotesTopicId === t.topicId || I.value,
            ),
            w = () => {
              p.value &&
                ((h.value = new D.Editor({ container: p.value })),
                (h.value.placeholder = o("Enter your note in here.")),
                a({ currEditingNotesEditor: h.value }));
            },
            S = () => {
              if ((h.value || w(), b.value)) return;
              if (!t.notes) return void h.value.cleanContent();
              const e = {
                plain: { content: t.notes.text },
                realHTML: {
                  content: t.notes.html
                    ? P()(t.notes.html, {
                        onIgnoreTag: (e, t) => {
                          if (e === n) return t;
                        },
                        safeAttrValue: (e, t, n, i) =>
                          "a" === e && "href" === t
                            ? n
                            : (0, N.safeAttrValue)(e, t, n, i),
                      })
                    : t.notes.html,
                },
              };
              (0, i.Y3)().then(() => {
                h.value.setNoteData(e);
              });
            },
            C = () => {
              if (!h.value) return;
              if (!h.value.canUndo()) return;
              const e = h.value.getNoteData();
              l({
                type: "update",
                topicId: t.topicId,
                notes: e
                  ? { text: e.plain.content, html: e.realHTML.content }
                  : null,
              });
            },
            E = (0, u.Ds)(C, 500),
            L = () =>
              j(this, void 0, void 0, function* () {
                (m.value = !1),
                  h.value.autoFitLinkSelectedRange(),
                  h.value.setSelectionStyle(D.Type.TextStyles.frozen, null, {
                    isCanUndo: !1,
                  }),
                  yield new Promise((e) => setTimeout(e, 500)),
                  (y.value = !0);
                const e = h.value.getSingleWholeLink();
                (x.value = e || ""),
                  T.value &&
                    setTimeout(() => {
                      T.value.focus();
                    });
              }),
            M = () => {
              h.value.removeSelectionStyle(D.Type.TextStyles.frozen, {
                isCanUndo: !1,
              }),
                (v.value = !1),
                setTimeout(() => {
                  (y.value = !1), a({ isNoteLinkInputVisible: !1 });
                }, 300);
            },
            O = () => {
              h.value.setLink(x.value), (x.value = "");
            },
            A = (e) => {
              if (!q.nd) return (0, B.DL)(e.detail.href, o);
              Z.ZP.fetch(_.QN);
            };
          return (
            (0, i.bv)(() => {
              t.notes && S(), p.value.addEventListener("link-activated", A);
            }),
            (0, i.Jd)(() => {
              p.value.removeEventListener("link-activated", A);
            }),
            (0, i.YP)(
              () => t.notes,
              (e) => {
                (I.value = !!e), e && S();
              },
              { immediate: !1 },
            ),
            (0, i.YP)(
              () => r.value.currEditingNotesTopicId,
              (e) => {
                e === t.topicId &&
                  (S(),
                  setTimeout(() => {
                    (0, g.kI)(s.value), h.value.focus();
                  }, 100));
              },
              { immediate: !1 },
            ),
            (0, i.YP)(
              () => r.value.isNoteLinkInputVisible,
              (e) => {
                r.value.currEditingNotesTopicId === t.topicId && e && L();
              },
              { immediate: !1 },
            ),
            {
              __sfc: !0,
              XMIND_AUTO_LINK_TAG: n,
              props: t,
              $T: o,
              outlinerState: r,
              updateOutlinerState: a,
              handleOutlinerOperation: l,
              openOutlinerCtxMenu: c,
              topicNoteElement: s,
              topicNoteContainer: p,
              notesEditor: h,
              hasSelection: v,
              isNoteToolbarVisible: m,
              isNoteFocused: b,
              isNoteVisible: I,
              isLinkInputVisible: y,
              linkInput: T,
              link: x,
              isTopicNoteVisible: k,
              initNotesEditor: w,
              refreshNoteData: S,
              saveNote: C,
              handleChange: E,
              handleFocusChange: () => {
                const e = s.value && s.value.contains(document.activeElement);
                if (((m.value = e), e))
                  a({
                    currEditingTopicId: t.topicId,
                    selectionIds: [],
                    selectonType: g._p.NOTES,
                    currEditingNotesEditor: h.value,
                  });
                else {
                  if (!h.value) return;
                  h.value.getNoteData() || (I.value = !1),
                    a({ currEditingNotesTopicId: "", isMouseDown: !1 });
                }
              },
              handleSelectionChange: () => {
                if (!h.value) return;
                const e = h.value.getSelectedRange();
                v.value = e[0] !== e[1];
              },
              toggleSelectionStyle: (e) => {
                h.value && h.value.toggleSelectionStyle(e);
              },
              showNoteLinkInput: L,
              closeNoteLinkInput: M,
              setLink: O,
              handleNoteLinkInputKeyDown: (e) => {
                r.value.inputMethodInputting ||
                  (["Tab", "Enter"].includes(e.key) && e.preventDefault(),
                  "Enter" === e.key && O(),
                  "Escape" === e.key && M());
              },
              handleCompositionstart: () => {
                a({ inputMethodInputting: !0 });
              },
              handleCompositionend: () => {
                a({ inputMethodInputting: !1 });
              },
              handleContextMenu: (e) => {
                const n = e.target,
                  i = D.Editor.getHref(n);
                a({ currEditingNotesTopicId: t.topicId }),
                  i
                    ? ((0, H.FW)(n),
                      a({ currEditingNotesHref: i }),
                      c("NOTES_LINK"))
                    : (a({ currEditingNotesHref: "" }), c("NOTES"));
              },
              onLinkActivated: A,
              NotesEditor: D.Editor,
            }
          );
        },
      });
      n(51688);
      const z = (0, b.Z)(
        R,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: n.isTopicNoteVisible,
                  expression: "isTopicNoteVisible",
                },
              ],
              ref: "topicNoteElement",
              staticClass: "outliner-topic-note uk-position-relative",
              on: {
                mousedown: function (e) {
                  return e.stopPropagation(), (() => !1).apply(null, arguments);
                },
                focus: n.handleFocusChange,
                blur: n.handleFocusChange,
              },
            },
            [
              t(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        n.hasSelection &&
                        n.isNoteToolbarVisible &&
                        !n.isLinkInputVisible,
                      expression:
                        "hasSelection && isNoteToolbarVisible && !isLinkInputVisible",
                    },
                  ],
                  staticClass: "outliner-topic-note-toolbar",
                },
                [
                  t("button", {
                    staticClass: "ol-b ql-bold",
                    on: {
                      click: function (e) {
                        return n.toggleSelectionStyle(
                          n.NotesEditor.TextStyles.bold,
                        );
                      },
                    },
                  }),
                  e._v(" "),
                  t("button", {
                    staticClass: "ol-i ql-italic",
                    on: {
                      click: function (e) {
                        return n.toggleSelectionStyle(
                          n.NotesEditor.TextStyles.italic,
                        );
                      },
                    },
                  }),
                  e._v(" "),
                  t("button", {
                    staticClass: "ol-u ql-underline",
                    on: {
                      click: function (e) {
                        return n.toggleSelectionStyle(
                          n.NotesEditor.TextStyles.underline,
                        );
                      },
                    },
                  }),
                  e._v(" "),
                  t("button", {
                    staticClass: "ol-ul ql-list",
                    attrs: { value: "bullet" },
                    on: {
                      click: function (e) {
                        return n.toggleSelectionStyle(
                          n.NotesEditor.TextStyles.bullet,
                        );
                      },
                    },
                  }),
                  e._v(" "),
                  t("button", {
                    staticClass: "ol-ol ql-list",
                    attrs: { value: "ordered" },
                    on: {
                      click: function (e) {
                        return n.toggleSelectionStyle(
                          n.NotesEditor.TextStyles.number,
                        );
                      },
                    },
                  }),
                  e._v(" "),
                  t("button", {
                    staticClass: "ol-link",
                    on: { click: n.showNoteLinkInput },
                  }),
                ],
              ),
              e._v(" "),
              t(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: n.isLinkInputVisible,
                      expression: "isLinkInputVisible",
                    },
                  ],
                  staticClass: "outliner-topic-note-link-input-container",
                },
                [
                  t("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: n.link,
                        expression: "link",
                      },
                    ],
                    ref: "linkInput",
                    staticClass: "uk-input outliner-topic-note-link-input",
                    attrs: { placeholder: n.$T("Enter Link URL") },
                    domProps: { value: n.link },
                    on: {
                      blur: n.closeNoteLinkInput,
                      compositionstart: n.handleCompositionstart,
                      compositionend: n.handleCompositionend,
                      keydown: n.handleNoteLinkInputKeyDown,
                      input: function (e) {
                        e.target.composing || (n.link = e.target.value);
                      },
                    },
                  }),
                  e._v(" "),
                  t("button", {
                    staticClass:
                      "uk-button uk-button-tile uk-button-small uk-button-icon uk-icon uk-padding-xsmall outliner-topic-note-link-confirm-btn",
                    attrs: { "uk-icon": "icon: check" },
                    on: { click: n.setLink },
                  }),
                ],
              ),
              e._v(" "),
              t("div", {
                directives: [
                  {
                    name: "focus-contexts",
                    rawName: "v-focus-contexts:group",
                    value: ["focus.outlinerNotes"],
                    expression: "['focus.outlinerNotes']",
                    arg: "group",
                  },
                ],
                ref: "topicNoteContainer",
                staticClass: "outliner-topic-note-container",
                attrs: { tabindex: "-1" },
                on: {
                  focus: function (e) {
                    n.isNoteFocused = !0;
                  },
                  blur: function (e) {
                    n.isNoteFocused = !1;
                  },
                  change: n.handleChange,
                  selectionchange: n.handleSelectionChange,
                  contextmenu: function (e) {
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      n.handleContextMenu.apply(null, arguments)
                    );
                  },
                },
              }),
            ],
          );
        },
        [],
        !1,
        null,
        "7cf28ec0",
        null,
      ).exports;
      const W = (0, i.aZ)({
        __name: "topic-task",
        props: { topicId: null, task: null, size: { default: 18 } },
        setup(e) {
          const t = e,
            {
              outlinerState: n,
              updateOutlinerState: o,
              openOutlinerCtxMenu: r,
            } = (0, f.p)(),
            a = (0, i.iH)(null),
            l = (0, i.Fl)(() => "dark" === (0, d.S)().appearance),
            c = (0, i.Fl)(() =>
              "todo" === t.task.presentation
                ? "done" === t.task.status
                  ? p.viewerKit.TaskImageAppearance.TaskTodoChecked
                  : p.viewerKit.TaskImageAppearance.TaskTodo
                : p.viewerKit.TaskImageAppearance.TaskProgress,
            ),
            s = (0, i.Fl)(() => {
              const { taskModule: e } = (0, p.nZ)();
              return e.loadTaskImage(c.value, {
                frontColor: l.value ? "rgba(255, 255, 255, 0.9)" : "#000000e6",
                backColor: l.value ? "#1e2021" : "#fff",
                aggregatedCountOfTodos: t.task.aggregatedCountOfTodos,
                aggregatedCountOfCheckedTodos:
                  t.task.aggregatedCountOfCheckedTodos,
              })((e) => e);
            }),
            u = (0, i.Fl)(() => ({
              width: `${t.size}px`,
              height: `${t.size}px`,
              backgroundSize: `${t.size}px`,
              backgroundImage: `url('${s.value}')`,
            })),
            h = () => {
              o({
                currEditingTopicId: t.topicId,
                selectionIds: [t.topicId],
                selectonType: g._p.TASK,
              });
            },
            v = () => {
              var e;
              n.value.selectonType !== g._p.TOPIC &&
                o({ selectonType: g._p.TOPIC }),
                null === (e = a.value) ||
                  void 0 === e ||
                  e.removeEventListener("mouseout", v);
            };
          return {
            __sfc: !0,
            props: t,
            isMac: false,
            outlinerState: n,
            updateOutlinerState: o,
            openOutlinerCtxMenu: r,
            topicTaskContainer: a,
            onTaskImgHovered: () => {
              if ("progress" === t.task.presentation && a.value) {
                const e = Math.round(
                    (t.task.aggregatedCountOfCheckedTodos /
                      t.task.aggregatedCountOfTodos) *
                      100,
                  ),
                  n = `${t.task.aggregatedCountOfCheckedTodos}/${t.task.aggregatedCountOfTodos} (${e}%)`,
                  i = a.value.getBoundingClientRect();
                o({
                  tooltip: {
                    location: { x: i.left, y: i.top - 50 },
                    content: n,
                  },
                });
              }
            },
            onTaskImgExitHovered: () => {
              o({ tooltip: null });
            },
            isDark: l,
            taskImageAppearance: c,
            taskImageUrl: s,
            taskImageStyle: u,
            handleFocus: h,
            handleTaskClick: () => {
              o({ tooltip: null }),
                h(),
                setTimeout(() => {
                  "todo" === t.task.presentation &&
                    ("done" === t.task.status &&
                      (0, d.JX)().handleCommand("editor.uncheckTask"),
                    "todo" === t.task.status &&
                      (0, d.JX)().handleCommand("editor.checkTask")),
                    "progress" === t.task.presentation &&
                      (t.task.aggregatedCountOfTodos ===
                        t.task.aggregatedCountOfCheckedTodos &&
                        (0, d.JX)().handleCommand("editor.uncheckTask"),
                      t.task.aggregatedCountOfTodos !==
                        t.task.aggregatedCountOfCheckedTodos &&
                        (0, d.JX)().handleCommand("editor.checkTask"));
                }, 200);
            },
            handleMouseout: v,
            handleContextMenu: (e) => {
              o({ tooltip: null }), h(), r("TASK");
            },
          };
        },
      });
      n(93382);
      const G = (0, b.Z)(
        W,
        function () {
          var e = this._self._c,
            t = this._self._setupProxy;
          return e(
            "div",
            {
              ref: "topicTaskContainer",
              staticClass:
                "outliner-topic-task-container uk-flex uk-flex-middle",
            },
            [
              e("div", { staticClass: "outliner-topic-task uk-float-left" }, [
                e("div", {
                  staticClass: "outliner-topic-task-img",
                  style: t.taskImageStyle,
                  on: {
                    click: function (e) {
                      return (
                        e.stopPropagation(),
                        e.preventDefault(),
                        t.handleTaskClick.apply(null, arguments)
                      );
                    },
                    mousedown: function (e) {
                      return (
                        e.stopPropagation(), (() => !1).apply(null, arguments)
                      );
                    },
                    contextmenu: function (e) {
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        t.handleContextMenu.apply(null, arguments)
                      );
                    },
                    mouseenter: t.onTaskImgHovered,
                    mouseleave: t.onTaskImgExitHovered,
                  },
                }),
              ]),
            ],
          );
        },
        [],
        !1,
        null,
        "27880cf9",
        null,
      ).exports;
      const V = (0, i.aZ)({
        __name: "topic-title",
        props: {
          topicType: null,
          topicId: null,
          title: null,
          attributedTitle: null,
          descendantLength: null,
          isEditable: { type: Boolean, default: !1 },
          numbering: null,
        },
        setup(e) {
          const t = e,
            n = (0, d.JE)().T,
            {
              handleOutlinerOperation: o,
              outlinerState: r,
              updateOutlinerState: a,
              outlinerActions: l,
            } = (0, f.p)(),
            c = (0, i.iH)(null),
            s = (0, i.iH)(!1),
            u = (0, i.iH)(""),
            p = () => {
              if (r.value.inputMethodInputting) return;
              const e = (0, g.$R)(c.value);
              if (
                ("root" === t.topicType && v(e), t.attributedTitle.length > 1)
              ) {
                const n = (0, g.e3)(c.value),
                  i = (0, g.Dq)({
                    attributedTitle: t.attributedTitle,
                    oldTitle: t.title,
                    newTitle: e,
                    pos: n,
                  });
                o({
                  type: "update",
                  topicId: t.topicId,
                  title: e,
                  attributedTitle: i,
                });
              } else o({ type: "update", topicId: t.topicId, title: e });
            },
            h = (e, n) => {
              o({
                type: "update",
                topicId: t.topicId,
                title: e.slice(3),
                numbering: { numberingPattern: n, numberingFixedIndex: 0 },
              });
            },
            v = (e) => {
              s.value = 0 === e.length;
            },
            m = (e, n, i) => {
              c.value &&
                ((0, g.N_)(c.value, e, i),
                "root" === t.topicType && v(e),
                (0, g.wM)(c.value, e, n));
            };
          return (
            (0, i.bv)(() => {
              c.value &&
                ((0, g.N_)(c.value, t.title, t.attributedTitle),
                "root" === t.topicType &&
                  setTimeout(() => {
                    c.value &&
                      (v(t.title),
                      (u.value = n("Everything begins from your mind.")));
                  }),
                r.value.currFocusTopicId === t.topicId && c.value.focus());
            }),
            (0, i.YP)(
              () => t.title,
              (e) => {
                const n = (0, g.$R)(c.value),
                  i = g.u9[e.slice(0, 3)];
                !t.numbering && "attached" === t.topicType && i && h(e, i),
                  "\n" === e &&
                    o({ type: "update", topicId: t.topicId, title: "" }),
                  n !== e && m(e, n, t.attributedTitle);
              },
              { immediate: !1 },
            ),
            (0, i.YP)(
              () => t.attributedTitle,
              (e) => {
                e.length > 0 &&
                  (0, g.fW)(e) &&
                  o({
                    type: "update",
                    topicId: t.topicId,
                    attributedTitle: [],
                  });
              },
              { immediate: !1 },
            ),
            {
              __sfc: !0,
              props: t,
              $T: n,
              handleOutlinerOperation: o,
              outlinerState: r,
              updateOutlinerState: a,
              outlinerActions: l,
              textRef: c,
              isTextEmpty: s,
              textPlaceholder: u,
              handleCompositionstart: () => {
                a({ inputMethodInputting: !0 });
              },
              handleCompositionend: () => {
                a({ inputMethodInputting: !1 }),
                  (0, i.Y3)(() => {
                    p();
                  });
              },
              handleInput: p,
              handleKeydown: (e) => {
                if (r.value.inputMethodInputting) return;
                if ("Enter" === e.key) return e.preventDefault();
                if ((e.ctrlKey || e.metaKey) && ["b", "i", "u"].includes(e.key))
                  return e.preventDefault();
                const { isOnFirstLine: n, isOnLastLine: i } = (0, g.OD)(
                  c.value,
                );
                switch (e.key) {
                  case "ArrowUp":
                    if (!n) return;
                    e.preventDefault(),
                      l.selectionNavigateUp({ topicId: t.topicId });
                    break;
                  case "ArrowDown":
                    if (!i) return;
                    e.preventDefault(),
                      l.selectionNavigateDown({ topicId: t.topicId });
                }
              },
              handleFocus: () => {
                a({
                  currEditingTopicId: t.topicId,
                  startTopicId: t.topicId,
                  selectonType: g._p.TEXT,
                });
              },
              handleMouseDown: (e) => {
                0 === e.button && a({ isMouseDown: !0 });
              },
              changeTextToNumbering: h,
              refreshTextEmptyStatus: v,
              refreshTitle: m,
            }
          );
        },
      });
      n(7419);
      const U = (0, b.Z)(
          V,
          function () {
            var e = this,
              t = e._self._c,
              n = e._self._setupProxy;
            return t("span", {
              ref: "textRef",
              staticClass: "outliner-topic-title uk-flex-1",
              class: { "is-empty": n.isTextEmpty },
              attrs: {
                contenteditable: e.isEditable,
                "data-child-count": e.descendantLength,
                placeholder: n.textPlaceholder,
              },
              on: {
                compositionstart: n.handleCompositionstart,
                compositionend: n.handleCompositionend,
                input: n.handleInput,
                keydown: n.handleKeydown,
                focus: n.handleFocus,
                mousedown: n.handleMouseDown,
              },
            });
          },
          [],
          !1,
          null,
          "0969cd26",
          null,
        ).exports,
        X = (0, i.aZ)({
          __name: "central-topic",
          props: {
            topicType: null,
            topicId: null,
            children: null,
            depth: null,
            title: null,
            attributedTitle: null,
            labelSortOrder: { default: "auto" },
            labels: { default: () => [] },
            markers: { default: () => [] },
            descendantLength: null,
            folded: { type: Boolean },
            hidden: { type: Boolean },
            parentTopicId: null,
            notes: { default: null },
            webpage: { default: null },
            localFileLink: null,
            topicLink: { default: null },
            attachment: { default: null },
            equation: { default: null },
            image: { default: null },
            audioNotes: { default: null },
            task: null,
            isEditable: { type: Boolean, default: !1 },
            isImageSelected: { type: Boolean, default: !1 },
            isEquationSelected: { type: Boolean, default: !1 },
          },
          setup(e) {
            const t = e,
              { updateOutlinerState: n, openOutlinerCtxMenu: o } = (0, f.p)(),
              r = (0, i.iH)(null),
              a = (0, i.iH)(t.task),
              l = (0, i.iH)(t.markers),
              d = (0, i.iH)(t.labels),
              c = (0, i.iH)(t.image),
              s = (0, i.Fl)(
                () =>
                  t.webpage || t.localFileLink || t.topicLink || t.attachment,
              ),
              p = (0, i.Fl)(() => ({
                topicId: t.topicId,
                webpage: t.webpage,
                localFileLink: t.localFileLink,
                topicLink: t.topicLink,
                attachment: t.attachment,
                title: t.title,
              })),
              h = (0, u.P2)((e) => {
                if (
                  e.dataTransfer.items.length > 0 &&
                  "file" === e.dataTransfer.items[0].kind
                ) {
                  const t = e.dataTransfer.items[0].type.startsWith("image/");
                  n({
                    isMouseDown: !0,
                    draggingType: t ? g._p.IMAGE : g._p.ATTACHMENT,
                  });
                }
              }, 30),
              m = (0, u.P2)(() => {
                n({
                  draggingPos: {
                    toParentTopicId: "",
                    toTargetIndex: 0,
                    rect: { top: r.value.clientHeight + 124, left: 0 },
                    toTopicType: "root",
                    toTopicId: t.topicId,
                  },
                });
              }, 30);
            return (
              (0, i.YP)(
                () => t.task,
                (e, t) => {
                  JSON.stringify(e) !== JSON.stringify(t) && (a.value = e);
                },
                { immediate: !1 },
              ),
              (0, i.YP)(
                () => t.markers,
                (e, t) => {
                  JSON.stringify(e) !== JSON.stringify(t) && (l.value = e);
                },
                { immediate: !1 },
              ),
              (0, i.YP)(
                () => t.labels,
                (e, t) => {
                  JSON.stringify(e) !== JSON.stringify(t) && (d.value = e);
                },
                { immediate: !1 },
              ),
              (0, i.YP)(
                () => t.image,
                (e, t) => {
                  JSON.stringify(e) !== JSON.stringify(t) && (c.value = e);
                },
                { immediate: !1 },
              ),
              {
                __sfc: !0,
                props: t,
                updateOutlinerState: n,
                openOutlinerCtxMenu: o,
                centralTopicContainer: r,
                topicTasks: a,
                topicMarkers: l,
                topicLabels: d,
                topicImageData: c,
                hasLink: s,
                linkData: p,
                handleDragEnter: h,
                handleDragOver: m,
                handleContextMenu: () => {
                  o("TEXT");
                },
                escapeIdentifier: v.N,
                TopicMarker: I,
                TopicLabel: T,
                TopicLink: S,
                TopicImage: M,
                TopicEquation: F,
                TopicNote: z,
                TopicTask: G,
                TopicTitle: U,
              }
            );
          },
        });
      n(15274);
      const Y = (0, b.Z)(
        X,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              ref: "centralTopicContainer",
              staticClass:
                "outliner-central-topic outliner-topic-container uk-position-relative uk-width-1-1",
              attrs: {
                id: `topic-${n.escapeIdentifier(e.topicId)}`,
                "data-topic-id": e.topicId,
              },
              on: {
                dragenter: function (e) {
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    n.handleDragEnter.apply(null, arguments)
                  );
                },
                dragover: function (e) {
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    n.handleDragOver.apply(null, arguments)
                  );
                },
                contextmenu: n.handleContextMenu,
              },
            },
            [
              t(
                "div",
                { staticClass: "uk-flex" },
                [
                  t("div", { staticClass: "outliner-topic-left" }),
                  e._v(" "),
                  n.topicTasks
                    ? t(n.TopicTask, {
                        attrs: {
                          "topic-id": e.topicId,
                          task: n.topicTasks,
                          size: 30,
                        },
                      })
                    : e._e(),
                  e._v(" "),
                  n.topicMarkers.length
                    ? t(n.TopicMarker, {
                        attrs: {
                          "topic-id": e.topicId,
                          markers: n.topicMarkers,
                          size: 30,
                        },
                      })
                    : e._e(),
                  e._v(" "),
                  t(
                    n.TopicTitle,
                    e._b(
                      {},
                      "topic-title",
                      {
                        topicType: e.topicType,
                        topicId: e.topicId,
                        title: e.title,
                        attributedTitle: e.attributedTitle,
                        descendantLength: e.descendantLength,
                        isEditable: e.isEditable,
                      },
                      !1,
                    ),
                  ),
                ],
                1,
              ),
              e._v(" "),
              t(
                "div",
                { staticClass: "outliner-topic-inserts" },
                [
                  n.topicLabels.length
                    ? t(n.TopicLabel, {
                        attrs: {
                          "topic-id": e.topicId,
                          labels: n.topicLabels,
                          "label-sort-order": e.labelSortOrder,
                        },
                      })
                    : e._e(),
                  e._v(" "),
                  n.hasLink
                    ? t(n.TopicLink, e._b({}, "topic-link", n.linkData, !1))
                    : e._e(),
                  e._v(" "),
                  n.topicImageData && !e.equation
                    ? t(n.TopicImage, {
                        attrs: {
                          "topic-id": e.topicId,
                          image: n.topicImageData,
                          "is-selected": e.isImageSelected,
                        },
                      })
                    : e._e(),
                  e._v(" "),
                  e.equation && n.topicImageData
                    ? t(n.TopicEquation, {
                        attrs: {
                          "topic-id": e.topicId,
                          equation: e.equation,
                          image: n.topicImageData,
                          "is-selected": e.isEquationSelected,
                        },
                      })
                    : e._e(),
                  e._v(" "),
                  t(n.TopicNote, {
                    attrs: { "topic-id": e.topicId, notes: e.notes },
                  }),
                ],
                1,
              ),
            ],
          );
        },
        [],
        !1,
        null,
        "9c6aca94",
        null,
      ).exports;
      var J = n(16704);
      const K = (0, i.aZ)({
        __name: "topic-audio-note",
        props: { topicId: null, audioNotes: null },
        setup(e) {
          const t = e,
            {
              outlinerState: n,
              updateOutlinerState: o,
              openOutlinerCtxMenu: r,
            } = (0, f.p)(),
            a = (0, i.iH)(null),
            l = () => {
              o({
                currEditingTopicId: t.topicId,
                selectionIds: [t.topicId],
                selectonType: g._p.AUDIO_NOTES,
              });
            },
            d = () => {
              var e;
              n.value.selectonType !== g._p.TOPIC &&
                o({ selectonType: g._p.TOPIC }),
                null === (e = a.value) ||
                  void 0 === e ||
                  e.removeEventListener("mouseout", d);
            };
          return {
            __sfc: !0,
            props: t,
            isMac: false,
            outlinerState: n,
            updateOutlinerState: o,
            openOutlinerCtxMenu: r,
            topicAudioNoteContainer: a,
            handleFocus: l,
            handleClick: () => {
              l();
              const e = n.value.audioBarMode;
              o({
                audioBarMode:
                  "open_new_audio_play" === e
                    ? "audio_play"
                    : "open_new_audio_play",
                audioAutoPlay: !0,
                audioFilePath: t.audioNotes,
              });
            },
            handleMouseout: d,
            handleContextMenu: () => {
              l(), r("AUDIO_NOTES");
            },
          };
        },
      });
      n(13920);
      const Q = (0, b.Z)(
        K,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              ref: "topicAudioNoteContainer",
              staticClass: "outliner-topic-audio-note",
              on: {
                click: function (e) {
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    n.handleClick.apply(null, arguments)
                  );
                },
                contextmenu: function (e) {
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    n.handleContextMenu.apply(null, arguments)
                  );
                },
              },
            },
            [e._v("\n  " + e._s(e.$T("Audio Note")) + "\n")],
          );
        },
        [],
        !1,
        null,
        "1fa1ed7a",
        null,
      ).exports;
      const $ = (0, i.aZ)({
        __name: "topic-numbering",
        props: { topicId: null, numberingText: null },
        setup: (e) => ({ __sfc: !0 }),
      });
      n(60281);
      const ee = (0, b.Z)(
        $,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "div",
            { staticClass: "outliner-topic-numbering uk-flex uk-flex-middle" },
            [
              t("div", { staticClass: "uk-float-left" }, [
                e._v("\n    " + e._s(e.numberingText) + "\n  "),
              ]),
            ],
          );
        },
        [],
        !1,
        null,
        "7cabaa9c",
        null,
      ).exports;
      var te = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      const ne = (0, i.aZ)({
          __name: "topic",
          props: {
            topicType: null,
            topicId: null,
            children: null,
            depth: null,
            title: null,
            attributedTitle: null,
            labelSortOrder: { default: "auto" },
            labels: { default: () => [] },
            markers: { default: () => [] },
            descendantLength: null,
            folded: { type: Boolean },
            hidden: { type: Boolean },
            parentTopicId: null,
            notes: { default: null },
            webpage: { default: null },
            localFileLink: null,
            topicLink: { default: null },
            attachment: { default: null },
            equation: { default: null },
            image: { default: null },
            audioNotes: { default: null },
            task: null,
            numbering: null,
            isEditable: { type: Boolean, default: !1 },
            isSelected: { type: Boolean, default: !1 },
            isImageSelected: { type: Boolean, default: !1 },
            isEquationSelected: { type: Boolean, default: !1 },
            isDragging: { type: Boolean, default: !1 },
          },
          setup(e) {
            const t = e,
              {
                handleOutlinerOperation: n,
                outlinerState: o,
                updateOutlinerState: r,
                openOutlinerCtxMenu: a,
              } = (0, f.p)(),
              l = (0, i.iH)(t.task),
              c = (0, i.iH)(t.numbering),
              s = (0, i.iH)(t.markers),
              p = (0, i.iH)(t.labels),
              h = (0, i.iH)(t.image),
              m = (0, i.iH)(t.attributedTitle),
              b = (0, i.Fl)(
                () =>
                  t.webpage || t.localFileLink || t.topicLink || t.attachment,
              ),
              y = (0, i.Fl)(() => ({
                topicId: t.topicId,
                webpage: t.webpage,
                localFileLink: t.localFileLink,
                topicLink: t.topicLink,
                attachment: t.attachment,
                title: t.title,
              })),
              x = (0, i.Fl)(() => ({ paddingLeft: 22 * (t.depth - 1) + "px" })),
              k = (0, i.Fl)(() => t.depth === g.P1 && t.descendantLength > 0),
              w = (0, u.P2)((e) => {
                if (
                  e.dataTransfer.items.length > 0 &&
                  "file" === e.dataTransfer.items[0].kind
                ) {
                  const t = e.dataTransfer.items[0].type.startsWith("image/");
                  r({
                    isMouseDown: !0,
                    draggingType: t ? g._p.IMAGE : g._p.ATTACHMENT,
                  });
                }
              }, 30),
              C = (0, u.P2)((e) => {
                e.dataTransfer.dropEffect = "move";
                const t = (0, g.rH)(e.target);
                if (!t) return;
                let n = t.dataset.topicId;
                const {
                  draggingTopicIds: i,
                  draggingType: a,
                  draggingStartPageY: l,
                  topicItems: d,
                  outlinerScale: c,
                } = o.value;
                if (i.includes(n) && a === g._p.TOPIC) return;
                const s = d.filter((e) =>
                    ["attached", "detached"].includes(e.topicType),
                  ),
                  u = s.find((e) => e.topicId === n),
                  p = d.find((e) => e.topicId === u.parentTopicId),
                  h =
                    "detached" === u.topicType && 0 === p.depth
                      ? p.detachedChildren
                      : p.children,
                  { left: v, top: f } = t.getBoundingClientRect();
                let m = Math.round((e.pageX - v) / (22 * c)) - 1;
                const b =
                  u.topicId === s[0].topicId &&
                  e.pageY < f + t.offsetHeight / 2;
                m < 0 && (m = 0),
                  m < p.depth && (m = p.depth),
                  m > u.depth && (m = u.depth),
                  [g._p.IMAGE, g._p.EQUATION, g._p.ATTACHMENT].includes(a) &&
                    (m = u.depth),
                  b && (m = 0);
                let I = u.parentTopicId,
                  y = 0,
                  T = t.offsetTop + t.offsetHeight;
                const x = 22 * m;
                if (
                  (b && ((T = t.offsetTop), (n = d[0].topicId)),
                  m === u.depth && (I = n),
                  m === u.depth - 1)
                ) {
                  y = h.findIndex((e) => e === u.topicId);
                  const t = e.pageY - l > 0 ? "down" : "up";
                  "up" !== t || b || (y += 1);
                  const n = d.find((e) => e.topicId === i[0]);
                  "down" === t && n && m !== n.depth - 1 && (y += 1);
                }
                r({
                  draggingPos: {
                    toParentTopicId: I,
                    toTargetIndex: y,
                    rect: { top: T, left: x },
                    toTopicType: u.topicType,
                    toTopicId: n,
                  },
                });
              }, 30),
              E = () => {
                r({
                  isMouseDown: !1,
                  draggingTopicIds: [],
                  draggingType: g._p.NONE,
                  draggingPos: {
                    toParentTopicId: "",
                    toTargetIndex: 0,
                    rect: { left: 0, top: 0 },
                    toTopicType: "attached",
                    toTopicId: "",
                  },
                });
              };
            return (
              (0, i.YP)(
                () => t.task,
                (e, t) => {
                  JSON.stringify(e) !== JSON.stringify(t) && (l.value = e);
                },
                { immediate: !1 },
              ),
              (0, i.YP)(
                () => t.numbering,
                (e, t) => {
                  JSON.stringify(e) !== JSON.stringify(t) && (c.value = e);
                },
                { immediate: !1 },
              ),
              (0, i.YP)(
                () => t.markers,
                (e, t) => {
                  JSON.stringify(e) !== JSON.stringify(t) && (s.value = e);
                },
                { immediate: !1 },
              ),
              (0, i.YP)(
                () => t.labels,
                (e, t) => {
                  JSON.stringify(e) !== JSON.stringify(t) && (p.value = e);
                },
                { immediate: !1 },
              ),
              (0, i.YP)(
                () => t.image,
                (e, t) => {
                  JSON.stringify(e) !== JSON.stringify(t) && (h.value = e);
                },
                { immediate: !1 },
              ),
              (0, i.YP)(
                () => t.attributedTitle,
                (e, t) => {
                  JSON.stringify(e) !== JSON.stringify(t) && (m.value = e);
                },
                { immediate: !1 },
              ),
              {
                __sfc: !0,
                props: t,
                handleOutlinerOperation: n,
                outlinerState: o,
                updateOutlinerState: r,
                openOutlinerCtxMenu: a,
                topicTasks: l,
                topicNumberings: c,
                topicMarkers: s,
                topicLabels: p,
                topicImageData: h,
                topicAttributedTitle: m,
                hasLink: b,
                linkData: y,
                outlinerTopicStyle: x,
                isReachedLimit: k,
                handleReachedLimitClick: () => {
                  r({ currEditingTopicId: t.topicId }),
                    (0, d.JX)().handleCommand("editor.showBranchOnly");
                },
                handleDragStart: (e) => {
                  const n = e.target;
                  if (!n.classList.contains("outliner-topic-dot")) return;
                  const { selectionIds: i } = o.value,
                    a = i.includes(t.topicId) ? i : [t.topicId],
                    l = (0, g.OE)(a);
                  r({
                    draggingStartPageY: e.pageY,
                    draggingType: g._p.TOPIC,
                    draggingTopicIds: l,
                    isMouseDown: !0,
                    selectionIds: [],
                  });
                  const d = (0, g.rH)(n),
                    c = (0, g.EQ)(d, o.value.draggingTopicIds.length);
                  c.classList.add("dragging"),
                    r({
                      ghostImgElementId: c.querySelector(
                        ".outliner-topic-container",
                      ).id,
                    }),
                    e.dataTransfer.setDragImage(c, -5, -5),
                    (e.dataTransfer.effectAllowed = "move"),
                    document
                      .querySelector(".uk-window")
                      .classList.add("grabbing");
                },
                handleDragEnter: w,
                handleDragOver: C,
                resetDraggingState: E,
                handleDragEnd: () =>
                  te(this, void 0, void 0, function* () {
                    yield (0, J._v)(100),
                      document
                        .querySelector(".uk-window")
                        .classList.remove("grabbing"),
                      r({ isMouseDown: !1 });
                    const {
                      draggingType: e,
                      draggingTopicIds: t,
                      draggingPos: i,
                      topicItems: a,
                      ghostImgElementId: l,
                    } = o.value;
                    if (e === g._p.TOPIC) {
                      const {
                          toParentTopicId: e,
                          toTargetIndex: o,
                          toTopicType: d,
                        } = i,
                        c = (0, g._v)(t),
                        s = t.filter((e) => !c.includes(e));
                      e &&
                        (yield Promise.all(
                          s.map((t, i) => {
                            const r = a.find((t) => t.topicId === e);
                            n({
                              type: "move",
                              topicType:
                                "detached" === d && 0 === r.depth
                                  ? "detached"
                                  : "attached",
                              topicId: t,
                              toParentTopicId: e,
                              toTargetIndex: o + i,
                            });
                          }),
                        )),
                        E();
                      const u = document.body.querySelector("#" + l);
                      u &&
                        (document.body.removeChild(u.parentElement),
                        u.remove()),
                        r({ ghostImgElementId: "" });
                    }
                  }),
                handleFoldedChange: () => {
                  n({
                    type: "update",
                    topicId: t.topicId,
                    branchState: t.folded ? null : "folded",
                  });
                },
                handleContextMenu: () => {
                  const { selectionIds: e } = o.value,
                    n = (0, g.Gj)(t.topicId),
                    i = (0, g.ww)(n);
                  return (
                    r({ currEditingTopicId: t.topicId, isMouseDown: !1 }),
                    0 === i &&
                      (e.includes(t.topicId) ||
                        ((0, g.a7)(), r({ selectionIds: [t.topicId] }))),
                    i > 0
                      ? a("TEXT")
                      : e.length > 1
                        ? a("MULTI_TOPIC")
                        : a("TOPIC")
                  );
                },
                escapeIdentifier: v.N,
                TopicLabel: T,
                TopicMarker: I,
                TopicLink: S,
                TopicAudioNote: Q,
                TopicImage: M,
                TopicEquation: F,
                TopicNote: z,
                TopicTask: G,
                TopicNumbering: ee,
                TopicTitle: U,
              }
            );
          },
        }),
        ie = ne;
      n(29059);
      const oe = (0, b.Z)(
        ie,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              staticClass: "outliner-topic-container",
              class: {
                "main-topic": 1 === e.depth,
                "has-child": e.descendantLength > 0,
                "is-folded": e.folded,
                "topic-selected": e.isSelected,
                "topic-dragging": e.isDragging,
              },
              attrs: {
                id: `topic-${n.escapeIdentifier(e.topicId)}`,
                "data-topic-id": e.topicId,
              },
              on: {
                dragstart: function (e) {
                  return (
                    e.stopPropagation(),
                    n.handleDragStart.apply(null, arguments)
                  );
                },
                dragenter: function (e) {
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    n.handleDragEnter.apply(null, arguments)
                  );
                },
                dragover: function (e) {
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    n.handleDragOver.apply(null, arguments)
                  );
                },
                dragend: function (e) {
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    n.handleDragEnd.apply(null, arguments)
                  );
                },
                contextmenu: n.handleContextMenu,
              },
            },
            [
              t(
                "div",
                {
                  staticClass:
                    "outliner-topic uk-position-relative uk-width-1-1",
                  style: n.outlinerTopicStyle,
                },
                [
                  t(
                    "div",
                    { staticClass: "outliner-topic-outter" },
                    [
                      t(
                        "div",
                        {
                          staticClass:
                            "outliner-topic-inner uk-flex uk-position-relative uk-width-1-1 uk-float-left",
                        },
                        [
                          t("div", {
                            staticClass:
                              "outliner-topic-dot uk-position-relative uk-float-left",
                            attrs: { draggable: "true" },
                            on: { click: n.handleFoldedChange },
                          }),
                          e._v(" "),
                          n.topicTasks
                            ? t(n.TopicTask, {
                                attrs: {
                                  "topic-id": e.topicId,
                                  task: n.topicTasks,
                                },
                              })
                            : e._e(),
                          e._v(" "),
                          n.topicMarkers.length
                            ? t(n.TopicMarker, {
                                attrs: {
                                  "topic-id": e.topicId,
                                  markers: n.topicMarkers,
                                },
                              })
                            : e._e(),
                          e._v(" "),
                          n.topicNumberings
                            ? t(n.TopicNumbering, {
                                attrs: {
                                  "topic-id": e.topicId,
                                  "numbering-text":
                                    n.topicNumberings.numberingText,
                                },
                              })
                            : e._e(),
                          e._v(" "),
                          t(
                            n.TopicTitle,
                            e._b(
                              {},
                              "topic-title",
                              {
                                topicType: e.topicType,
                                topicId: e.topicId,
                                title: e.title,
                                attributedTitle: n.topicAttributedTitle,
                                descendantLength: e.descendantLength,
                                isEditable: e.isEditable,
                                numberings: n.topicNumberings,
                              },
                              !1,
                            ),
                          ),
                        ],
                        1,
                      ),
                      e._v(" "),
                      t(
                        "div",
                        { staticClass: "outliner-reached-limited-container" },
                        [
                          n.isReachedLimit
                            ? t(
                                "span",
                                {
                                  staticClass:
                                    "outliner-reached-limited-btn uk-flex-inline",
                                  on: { click: n.handleReachedLimitClick },
                                },
                                [
                                  e._v(
                                    "+ " +
                                      e._s(
                                        e.$T(
                                          "Show $1 topics",
                                          String(e.descendantLength),
                                        ),
                                      ),
                                  ),
                                ],
                              )
                            : e._e(),
                        ],
                      ),
                      e._v(" "),
                      t(
                        "div",
                        {
                          staticClass:
                            "outliner-topic-inserts uk-flex uk-flex-wrap uk-width-1-1",
                        },
                        [
                          n.topicLabels.length
                            ? t(n.TopicLabel, {
                                attrs: {
                                  "topic-id": e.topicId,
                                  labels: n.topicLabels,
                                  "label-sort-order": e.labelSortOrder,
                                },
                              })
                            : e._e(),
                          e._v(" "),
                          n.hasLink
                            ? t(
                                n.TopicLink,
                                e._b({}, "topic-link", n.linkData, !1),
                              )
                            : e._e(),
                          e._v(" "),
                          e.audioNotes
                            ? t(n.TopicAudioNote, {
                                attrs: {
                                  "topic-id": e.topicId,
                                  "audio-notes": e.audioNotes,
                                },
                              })
                            : e._e(),
                          e._v(" "),
                          t("div", { staticClass: "uk-width-1-1" }),
                          e._v(" "),
                          n.topicImageData && !e.equation
                            ? t(n.TopicImage, {
                                attrs: {
                                  "topic-id": e.topicId,
                                  image: n.topicImageData,
                                  "is-selected": e.isImageSelected,
                                },
                              })
                            : e._e(),
                          e._v(" "),
                          e.equation && n.topicImageData
                            ? t(n.TopicEquation, {
                                attrs: {
                                  "topic-id": e.topicId,
                                  equation: e.equation,
                                  image: n.topicImageData,
                                  "is-selected": e.isEquationSelected,
                                },
                              })
                            : e._e(),
                        ],
                        1,
                      ),
                      e._v(" "),
                      t(n.TopicNote, {
                        attrs: { "topic-id": e.topicId, notes: e.notes },
                      }),
                      e._v(" "),
                      t("div", { staticClass: "uk-clearfix" }),
                    ],
                    1,
                  ),
                ],
              ),
            ],
          );
        },
        [],
        !1,
        null,
        "6dd927a1",
        null,
      ).exports;
      const re = (0, i.aZ)({
        __name: "topic-editor-popover",
        props: { editorRect: null, popoverWidth: null, popoverHeight: null },
        emits: ["popover-close"],
        setup(e, { emit: t }) {
          const n = e,
            o = (0, i.FN)().proxy,
            r = (0, i.iH)(null),
            a = (0, i.Fl)(() => ({
              top: `${n.editorRect.top}px`,
              left: `${n.editorRect.left}px`,
              width: `${n.editorRect.width}px`,
              height: `${n.editorRect.height}px`,
            }));
          return (
            (0, i.bv)(() => {
              setTimeout(() => {
                o.$withUIKit((e) => {
                  e.pop(r.value).show();
                });
              }, 50),
                (0, i.Y3)(() => {
                  o.$withUIKit((e) => {
                    e.util.on(r.value, "hidden", () => {
                      t("popover-close");
                    });
                  });
                });
            }),
            {
              __sfc: !0,
              props: n,
              emit: t,
              vm: o,
              popoverEl: r,
              topicEditorPopoverStyle: a,
            }
          );
        },
      });
      const ae = (0, b.Z)(
        re,
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            {
              directives: [
                {
                  name: "focus-contexts",
                  rawName: "v-focus-contexts:group",
                  value: ["focus.popover"],
                  expression: "['focus.popover']",
                  arg: "group",
                },
              ],
              staticClass: "uk-position-cover",
            },
            [
              t("div", {
                staticClass: "uk-position-fixed",
                style: e._self._setupProxy.topicEditorPopoverStyle,
              }),
              e._v(" "),
              t(
                "div",
                {
                  ref: "popoverEl",
                  style: {
                    width: `${e.popoverWidth}px`,
                    height: `${e.popoverHeight}px`,
                  },
                  attrs: { "uk-popover": "" },
                },
                [e._t("default")],
                2,
              ),
            ],
          );
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      var le = n(18446),
        de = n.n(le),
        ce = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            d((i = i.apply(e, t || [])).next());
          });
        };
      const se = (0, i.aZ)({
        __name: "topic-label-editor",
        setup(e) {
          const t = {
              inserted: function (e) {
                setTimeout(() => {
                  e.focus();
                }, 100);
              },
            },
            {
              handleOutlinerOperation: n,
              outlinerState: o,
              updateOutlinerState: r,
              outlinerActions: a,
            } = (0, f.p)(),
            l = (0, i.iH)([]),
            d = (0, i.iH)(null),
            c = (0, i.iH)(""),
            s = (0, i.iH)(
              "manual" !== o.value.popoverEditorState.payload.labelSortOrder,
            ),
            u = () =>
              ce(this, void 0, void 0, function* () {
                const { targetIds: e } = o.value.popoverEditorState.payload,
                  t = c.value
                    .split(/[,，]+/g)
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0)
                    .filter((e, t, n) => n.indexOf(e) === t);
                t
                  ? (de()(t, o.value.popoverEditorState.payload.labels) ||
                      (yield Promise.all(
                        e.map((e) => {
                          n({ type: "update", topicId: e, labels: t });
                        }),
                      )),
                    s.value !==
                      ("manual" !==
                        o.value.popoverEditorState.payload.labelSortOrder) &&
                      a.setLabelSortOrder(s.value ? "auto" : "manual"))
                  : yield Promise.all(
                      e.map((e) => {
                        n({ type: "deleteAttrs", topicId: e, labels: !0 });
                      }),
                    ),
                  r({ popoverEditorState: { visible: "", payload: {} } });
              });
          return (
            (0, i.bv)(() => {
              const { labels: e } = o.value.popoverEditorState.payload;
              (c.value = e.join(",")), (l.value = a.getMostlyUsedLabels());
            }),
            {
              __sfc: !0,
              vFocus: t,
              handleOutlinerOperation: n,
              outlinerState: o,
              updateOutlinerState: r,
              outlinerActions: a,
              mostlyUsedLabels: l,
              labelTextarea: d,
              labelsContent: c,
              isAutoSort: s,
              handleCompositionstart: () => {
                r({ inputMethodInputting: !0 });
              },
              handleCompositionend: () => {
                r({ inputMethodInputting: !1 });
              },
              handleKeydown: (e) => {
                if ("Enter" === e.code) {
                  if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    o.value.inputMethodInputting)
                  )
                    return;
                  u();
                }
                "Tab" === e.code && (e.preventDefault(), e.stopPropagation());
              },
              addLabel: (e) => {
                c.value = [c.value, e].filter(Boolean).join(",");
              },
              saveAndClose: u,
              changeAutoSort: (e) => {
                s.value = e;
              },
              TopicEditorPopover: ae,
            }
          );
        },
      });
      n(75375);
      const ue = (0, b.Z)(
        se,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            n.TopicEditorPopover,
            {
              attrs: {
                "popover-width": 280,
                "popover-height": n.mostlyUsedLabels.length > 0 ? 223 : 148,
                "editor-rect":
                  n.outlinerState.popoverEditorState.payload.editorRect,
              },
              on: { "popover-close": n.saveAndClose },
            },
            [
              t(
                "div",
                {
                  staticClass:
                    "uk-flex uk-flex-column uk-flex-middle uk-height-1-1",
                },
                [
                  t(
                    "div",
                    {
                      staticClass: "outliner-topic-label-editor-content",
                      on: {
                        mousedown: function (e) {
                          return (
                            e.stopPropagation(),
                            (() => !1).apply(null, arguments)
                          );
                        },
                      },
                    },
                    [
                      t(
                        "div",
                        {
                          staticClass:
                            "uk-flex uk-flex-between uk-flex-middle uk-width-1-1 uk-margin-small-bottom",
                        },
                        [
                          t(
                            "h4",
                            {
                              staticClass:
                                "outliner-topic-label-editor-title uk-text-disabled uk-text-bold",
                            },
                            [
                              e._v(
                                "\n          " +
                                  e._s(e.$T("Label")) +
                                  "\n        ",
                              ),
                            ],
                          ),
                          e._v(" "),
                          t(
                            "div",
                            { staticClass: "uk-flex uk-flex-middle" },
                            [
                              t(
                                "label",
                                {
                                  staticClass: "auto-sort-label",
                                  staticStyle: { "line-height": "16px" },
                                },
                                [
                                  e._v(
                                    "\n            " +
                                      e._s(e.$T("Auto Sort")) +
                                      "\n          ",
                                  ),
                                ],
                              ),
                              e._v(" "),
                              t("uk-switch", {
                                staticClass: "uk-margin-small-left",
                                attrs: {
                                  name: "sort-label",
                                  value: n.isAutoSort,
                                },
                                on: { change: n.changeAutoSort },
                              }),
                            ],
                            1,
                          ),
                        ],
                      ),
                      e._v(" "),
                      t("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: n.labelsContent,
                            expression: "labelsContent",
                          },
                          { name: "focus", rawName: "v-focus" },
                        ],
                        ref: "labelTextarea",
                        staticClass: "outliner-topic-label-editor-textarea",
                        attrs: {
                          placeholder: e.$T(
                            "Enter labels, separated by commas",
                          ),
                        },
                        domProps: { value: n.labelsContent },
                        on: {
                          compositionstart: n.handleCompositionstart,
                          compositionend: n.handleCompositionend,
                          keydown: n.handleKeydown,
                          input: function (e) {
                            e.target.composing ||
                              (n.labelsContent = e.target.value);
                          },
                        },
                      }),
                    ],
                  ),
                  e._v(" "),
                  n.mostlyUsedLabels.length > 0
                    ? [
                        t(
                          "div",
                          {
                            staticClass:
                              "uk-width-1-1 uk-padding uk-padding-remove-vertical",
                          },
                          [
                            t("hr", {
                              staticClass: "uk-separator uk-width-1-1",
                            }),
                          ],
                        ),
                        e._v(" "),
                        t(
                          "div",
                          {
                            staticClass:
                              "uk-height-expand uk-width-1-1 uk-mostly-used-labels uk-padding",
                            staticStyle: { "padding-top": "12px" },
                          },
                          [
                            t(
                              "div",
                              {
                                staticClass: "uk-mostly-used-labels-container",
                              },
                              e._l(n.mostlyUsedLabels, function (i) {
                                return t(
                                  "div",
                                  {
                                    key: i,
                                    staticClass: "uk-mostly-used-labels-item",
                                    on: {
                                      click: function (e) {
                                        return n.addLabel(i);
                                      },
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n            " +
                                        e._s(i) +
                                        "\n          ",
                                    ),
                                  ],
                                );
                              }),
                              0,
                            ),
                          ],
                        ),
                      ]
                    : e._e(),
                ],
                2,
              ),
            ],
          );
        },
        [],
        !1,
        null,
        "5088c23d",
        null,
      ).exports;
      var pe = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      const ge = (0, i.aZ)({
        __name: "topic-equation-editor",
        setup(e) {
          const t = (e, ...t) => (0, d.JE)().T(e, ...t),
            {
              handleOutlinerOperation: n,
              outlinerState: o,
              updateOutlinerState: r,
              outlinerActions: a,
            } = (0, f.p)(),
            { getResourceUrlByXapUrl: l } = (0, p.nZ)(),
            c = (0, i.iH)(""),
            s = (0, i.iH)(null),
            h = (0, i.iH)(!0);
          let v = null;
          const m = (0, u.Ds)(
              (e) =>
                pe(this, void 0, void 0, function* () {
                  if (s.value && "string" == typeof e) {
                    for (; s.value.hasChildNodes(); )
                      s.value.removeChild(s.value.lastChild);
                    if (e) {
                      const { imageSource: t, isMathJaxValid: n } =
                        yield a.getEquationImageInfo({ equation: e.trim() });
                      (h.value = n), b(t);
                    } else {
                      const e = document.createElement("span");
                      e.classList.add("uk-text-bold"),
                        (e.style.opacity = "0.3"),
                        (e.style.fontSize = "13px"),
                        (e.innerText = t("Equation Preview")),
                        s.value.append(e);
                    }
                  }
                }),
              0,
            ),
            b = (e) => {
              if (s.value)
                if (s.value.querySelector("img")) {
                  if (v.src === e) return;
                  v.src = e;
                } else
                  (v = new Image()),
                    v.addEventListener("load", () =>
                      pe(this, void 0, void 0, function* () {
                        s.value.prepend(v);
                      }),
                    ),
                    (v.src = e);
            };
          return (
            (0, i.bv)(() => {
              (c.value = o.value.popoverEditorState.payload.equation),
                m(c.value);
            }),
            {
              __sfc: !0,
              $T: t,
              handleOutlinerOperation: n,
              outlinerState: o,
              updateOutlinerState: r,
              outlinerActions: a,
              getResourceUrlByXapUrl: l,
              equation: c,
              equationPreviewContainer: s,
              isImageValid: h,
              imageEl: v,
              goEquationHelp: () => {
                Z.ZP.fetch(_.lf.GO_EQUATION_HELP, {});
              },
              handleInput: (e) => {
                const t = e.target.value;
                (c.value = t), m(t);
              },
              handleKeydown: (e) => {
                "Tab" === e.code && (e.preventDefault(), e.stopPropagation());
              },
              saveAndClose: () =>
                pe(this, void 0, void 0, function* () {
                  const { topicId: e } = o.value.popoverEditorState.payload;
                  if (c.value) {
                    if (
                      c.value !== o.value.popoverEditorState.payload.equation
                    ) {
                      const t = yield a.getEquationXapUrl({
                          equation: c.value,
                        }),
                        i = yield l(t),
                        { width: o, height: r } = yield (0, g.N8)(i);
                      n({
                        type: "update",
                        topicId: e,
                        equation: c.value,
                        image: { src: t, width: o, height: r },
                      });
                    }
                  } else
                    n({
                      type: "deleteAttrs",
                      topicId: e,
                      equation: !0,
                      image: !0,
                    });
                  r({ popoverEditorState: { visible: "", payload: {} } });
                }),
              handleUpdatePreview: m,
              loadEquation: b,
              TopicEditorPopover: ae,
            }
          );
        },
      });
      n(92475);
      const he = (0, b.Z)(
        ge,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            n.TopicEditorPopover,
            {
              attrs: {
                "popover-width": 394,
                "popover-height": 280,
                "editor-rect":
                  n.outlinerState.popoverEditorState.payload.editorRect,
              },
              on: { "popover-close": n.saveAndClose },
            },
            [
              t(
                "div",
                {
                  staticClass:
                    "uk-padding uk-flex uk-flex-column uk-flex-middle uk-height-1-1",
                },
                [
                  t(
                    "div",
                    {
                      staticClass:
                        "uk-flex uk-flex-between uk-width-1-1 uk-flex-middle",
                      staticStyle: { "margin-bottom": "12px" },
                    },
                    [
                      t(
                        "span",
                        {
                          staticClass:
                            "outliner-topic-equation-editor-title uk-text-bold uk-margin-remove-bottom",
                        },
                        [
                          e._v(
                            "\n        " + e._s(n.$T("Equation")) + "\n      ",
                          ),
                        ],
                      ),
                      e._v(" "),
                      t("span", {
                        staticClass: "equation-help",
                        staticStyle: { outline: "none" },
                        attrs: {
                          tabindex: "-1",
                          "uk-icon": "icon: question; ratio: 1.1",
                        },
                        on: { click: n.goEquationHelp },
                      }),
                    ],
                  ),
                  e._v(" "),
                  t(
                    "div",
                    {
                      staticClass: "uk-height-expand uk-width-1-1",
                      on: {
                        mousedown: function (e) {
                          e.stopPropagation();
                        },
                        click: function (e) {
                          e.preventDefault(), e.stopPropagation();
                        },
                      },
                    },
                    [
                      t("textarea", {
                        staticClass:
                          "uk-textarea uk-width-1-1 uk-height-1-1 uk-box-shadow-none uk-padding-remove",
                        attrs: {
                          autofocus: "",
                          spellcheck: "false",
                          placeholder: n.$T("Type or paste LaTeX"),
                        },
                        domProps: { value: n.equation },
                        on: { input: n.handleInput, keydown: n.handleKeydown },
                      }),
                      e._v(" "),
                      t("div", {
                        ref: "equationPreviewContainer",
                        staticClass:
                          "outliner-topic-equation-editor-preview-container uk-flex uk-flex-center uk-flex-middle",
                        class: { "is-image-valid": n.isImageValid },
                      }),
                    ],
                  ),
                ],
              ),
            ],
          );
        },
        [],
        !1,
        null,
        "4a4272a6",
        null,
      ).exports;
      const ve = (0, i.aZ)({
        __name: "topic-marker-editor",
        setup(e) {
          const {
              handleOutlinerOperation: t,
              outlinerState: n,
              updateOutlinerState: o,
              outlinerActions: r,
            } = (0, f.p)(),
            a = (0, i.Fl)(() =>
              r.getMarkerResources({
                markerId: n.value.popoverEditorState.payload.markerId,
              }),
            ),
            l = (0, i.Fl)(() => {
              const e = a.value.length;
              return e < 8
                ? { width: 24 * (e + 1) + 31, height: 40 }
                : { width: 186, height: 24 * Math.ceil(e / 7) + 54 };
            }),
            d = (0, i.Fl)(() =>
              a.value.length > 7
                ? "uk-flex-column uk-flex-center uk-separator"
                : "uk-flex-row uk-flex-middle uk-separator-vertical",
            ),
            c = (0, i.Fl)(() =>
              a.value.length > 7
                ? "uk-padding-small uk-padding-remove-horizontal uk-padding-remove-top"
                : "uk-padding-small uk-padding-remove-vertical uk-padding-remove-left",
            ),
            s = (0, i.Fl)(() =>
              a.value.length > 7
                ? "uk-padding-xsmall uk-padding-remove-horizontal uk-padding-remove-bottom uk-flex uk-flex-column uk-flex-center"
                : "uk-padding-xsmall uk-padding-remove-vertical uk-padding-remove-right",
            ),
            u = () => {
              o({
                selectonType: g._p.TOPIC,
                popoverEditorState: { visible: "", payload: {} },
              });
            };
          return {
            __sfc: !0,
            handleOutlinerOperation: t,
            outlinerState: n,
            updateOutlinerState: o,
            outlinerActions: r,
            markerResources: a,
            computedPopoverBounds: l,
            containerCls: d,
            markersCls: c,
            deleteBtnCls: s,
            handleKeydown: (e) => {
              "Tab" === e.code && (e.preventDefault(), e.stopPropagation());
            },
            changeMarker: (e) => {
              const {
                topicId: i,
                markers: o,
                markerId: r,
              } = n.value.popoverEditorState.payload;
              t({
                type: "update",
                topicId: i,
                markers: o.map((t) => (t.id === r ? e : t.id)),
              }),
                u();
            },
            removeMarker: () => {
              const {
                  topicId: e,
                  markers: i,
                  markerId: o,
                } = n.value.popoverEditorState.payload,
                r = i.slice();
              t({
                type: "update",
                topicId: e,
                markers: r.map((e) => e.id).filter((e) => e !== o),
              }),
                u();
            },
            closeMarkerEditor: u,
            TopicEditorPopover: ae,
          };
        },
      });
      const fe = (0, b.Z)(
        ve,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            n.TopicEditorPopover,
            {
              attrs: {
                "popover-width": n.computedPopoverBounds.width,
                "popover-height": n.computedPopoverBounds.height,
                "editor-rect":
                  n.outlinerState.popoverEditorState.payload.editorRect,
              },
              on: { "popover-close": n.closeMarkerEditor },
            },
            [
              t(
                "div",
                {
                  staticClass:
                    "uk-flex uk-flex-wrap uk-padding-small uk-child-separator",
                  class: n.containerCls,
                  on: { keydown: n.handleKeydown },
                },
                [
                  t(
                    "div",
                    {
                      staticClass:
                        "uk-flex uk-flex-row uk-flex-middle uk-flex-wrap",
                      class: n.markersCls,
                    },
                    e._l(n.markerResources, function ({ id: e, url: i }) {
                      return t(
                        "button",
                        {
                          key: e,
                          staticClass:
                            "uk-padding-xsmall uk-button uk-button-tile uk-button-icon uk-button-small",
                          on: {
                            mousedown: function (e) {
                              e.preventDefault(), e.stopPropagation();
                            },
                            click: function (t) {
                              return t.stopPropagation(), n.changeMarker(e);
                            },
                          },
                        },
                        [
                          t("img", {
                            staticClass:
                              "uk-background-center-center uk-background-norepeat",
                            staticStyle: { height: "16px", width: "16px" },
                            attrs: { draggable: "false", "uk-img": "", src: i },
                          }),
                        ],
                      );
                    }),
                    0,
                  ),
                  e._v(" "),
                  t("div", { class: n.deleteBtnCls }, [
                    t("button", {
                      staticClass:
                        "uk-background-center-center uk-background-norepeat uk-button uk-button-tile uk-button-icon uk-icon uk-button-small uk-padding-xsmall",
                      attrs: { "uk-icon": "icon: trash" },
                      on: {
                        mousedown: function (e) {
                          e.preventDefault(), e.stopPropagation();
                        },
                        click: function (e) {
                          return (
                            e.stopPropagation(),
                            n.removeMarker.apply(null, arguments)
                          );
                        },
                      },
                    }),
                  ]),
                ],
              ),
            ],
          );
        },
        [],
        !1,
        null,
        "fda9a804",
        null,
      ).exports;
      const me = (0, i.aZ)({
        __name: "topic-placeholder",
        props: { isVisible: { type: Boolean } },
        setup: (e) => ({ __sfc: !0 }),
      });
      n(64571);
      const be = (0, b.Z)(
        me,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("i", {
            staticClass: "topic-placeholder",
            class: { "topic-dragging": e.isVisible },
          });
        },
        [],
        !1,
        null,
        "e6807d80",
        null,
      ).exports;
      const Ie = (0, i.aZ)({
        __name: "tooltip",
        props: {
          content: { default: "" },
          location: { default: { x: 0, y: 0 } },
          showDelay: { default: 1e3 },
        },
        setup(e) {
          const t = e,
            n = (0, i.iH)(null),
            o = (0, i.iH)(!1),
            r = (e) => {
              o.value = e;
            },
            a = (0, i.iH)(null),
            l = (e) => {
              a.value = e;
            };
          let d = null;
          const c = (0, i.Fl)(() => {
            var e, t;
            return {
              left:
                ((null === (e = null == a ? void 0 : a.value) || void 0 === e
                  ? void 0
                  : e.left) || 0) + "px",
              top:
                ((null === (t = null == a ? void 0 : a.value) || void 0 === t
                  ? void 0
                  : t.top) || 0) + "px",
              visibility: o.value ? "visible" : "hidden",
            };
          });
          return (
            (0, i.bv)(() => {
              var e, i, o, a;
              r(!1),
                d && (clearTimeout(d), (d = null)),
                l({
                  left:
                    t.location.x -
                    ((null ===
                      (i =
                        null === (e = n.value) || void 0 === e
                          ? void 0
                          : e.getBoundingClientRect()) || void 0 === i
                      ? void 0
                      : i.width) || 0) /
                      2 +
                    9,
                  top:
                    t.location.y -
                    ((null ===
                      (a =
                        null === (o = n.value) || void 0 === o
                          ? void 0
                          : o.getBoundingClientRect()) || void 0 === a
                      ? void 0
                      : a.height) || 0) -
                    9,
                }),
                (d = setTimeout(() => {
                  r(!0);
                }, t.showDelay));
            }),
            (0, i.Ah)(() => {
              d && (clearTimeout(d), (d = null));
            }),
            {
              __sfc: !0,
              TOOLTIP_LEFT_OFFSET: 9,
              TOOLTIP_TOP_OFFSET: -9,
              props: t,
              tooltipRef: n,
              tooltipVisible: o,
              changeTooltipVisible: r,
              tooltipLocation: a,
              changeTooltipLocation: l,
              tooltipTimeout: d,
              tooltipStyle: c,
            }
          );
        },
      });
      n(86461);
      const ye = (0, b.Z)(
        Ie,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              ref: "tooltipRef",
              staticClass: "outliner-tooltip",
              style: n.tooltipStyle,
            },
            [e._v("\n  " + e._s(n.props.content) + "\n")],
          );
        },
        [],
        !1,
        null,
        "cfd364ee",
        null,
      ).exports;
      const Te = (0, i.aZ)({
        __name: "spinner",
        setup: (e) => ({ __sfc: !0 }),
      });
      n(85042);
      const xe = (0, b.Z)(
        Te,
        function () {
          var e = this._self._c;
          this._self._setupProxy;
          return e("div", { staticClass: "outliner-spinner" });
        },
        [],
        !1,
        null,
        "23cd6977",
        null,
      ).exports;
      n(51e3);
      var ke = function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, l);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      const we = (0, i.aZ)({
        __name: "index",
        props: {
          outlinerSheetModel: null,
          maxTopicsLoopNum: { default: 100 },
          staticMode: { type: Boolean, default: !1 },
        },
        setup(e) {
          const t = e,
            o = n(2201),
            {
              handleOutlinerOperation: a,
              outlinerState: v,
              updateOutlinerState: m,
            } = (0, f.p)(),
            { createXapUrlByArrayBuffer: b, activeSheetId: I } = (0, p.nZ)();
          let y = null,
            T = null,
            x = null;
          const k = (0, i.iH)(null),
            w = (0, i.iH)(null),
            S = (0, i.iH)(null),
            C = (0, i.Fl)(() => 0 === v.value.attachedTopicsLoopStartIndex),
            E = (0, i.Fl)(() => {
              const {
                attachedTopicsLoopStartIndex: e,
                attachedTopicsLoopEndIndex: n,
              } = v.value;
              return t.staticMode
                ? t.outlinerSheetModel.attached
                : 0 !== v.value.detachedTopicsLoopStartIndex
                  ? []
                  : t.outlinerSheetModel.attached.slice(e, n + 1);
            }),
            L = (0, i.Fl)(() => {
              const {
                attachedTopicsLoopEndIndex: e,
                detachedTopicsLoopStartIndex: n,
                detachedTopicsLoopEndIndex: i,
              } = v.value;
              return t.staticMode
                ? t.outlinerSheetModel.detached
                : e < t.outlinerSheetModel.attached.length - 1
                  ? []
                  : t.outlinerSheetModel.detached.slice(n, i + 1);
            }),
            M = (0, i.Fl)(
              () =>
                !t.staticMode &&
                0 === v.value.detachedTopicsLoopStartIndex &&
                0 !== v.value.attachedTopicsLoopStartIndex,
            ),
            O = (0, i.Fl)(
              () =>
                !t.staticMode &&
                0 === v.value.detachedTopicsLoopStartIndex &&
                v.value.attachedTopicsLoopEndIndex <
                  t.outlinerSheetModel.attached.length - 1,
            ),
            A = (0, i.Fl)(
              () =>
                !t.staticMode &&
                v.value.attachedTopicsLoopEndIndex >=
                  t.outlinerSheetModel.attached.length - 1 &&
                0 !== v.value.detachedTopicsLoopStartIndex,
            ),
            F = (0, i.Fl)(
              () =>
                !t.staticMode &&
                v.value.attachedTopicsLoopEndIndex >=
                  t.outlinerSheetModel.attached.length - 1 &&
                v.value.detachedTopicsLoopEndIndex <
                  t.outlinerSheetModel.detached.length - 1,
            ),
            N = (0, i.Fl)(() => {
              switch (v.value.popoverEditorState.visible) {
                case "label":
                  return ue;
                case "marker":
                  return fe;
                case "equation":
                  return he;
              }
            }),
            P = (0, i.Fl)(() => v.value.popoverEditorState.visible),
            D = (0, i.Fl)(() => {
              const {
                isMouseDown: e,
                draggingTopicIds: t,
                draggingType: n,
                draggingPos: i,
              } = v.value;
              return (
                e &&
                !!i.toTopicId &&
                (t.length > 0 ||
                  [g._p.IMAGE, g._p.EQUATION, g._p.ATTACHMENT].includes(n))
              );
            }),
            q = (0, i.Fl)(() => ({
              left: `${v.value.draggingPos.rect.left}px`,
              top: `${v.value.draggingPos.rect.top}px`,
            })),
            _ = (0, i.Fl)(() => v.value.tooltip),
            Z = () => {
              m({
                isMouseDown: !1,
                draggingTopicIds: [],
                draggingType: g._p.NONE,
                draggingPos: {
                  toParentTopicId: "",
                  toTargetIndex: 0,
                  rect: { left: 0, top: 0 },
                  toTopicType: "attached",
                  toTopicId: "",
                },
              });
            },
            B = () => {
              0;
            },
            H = () => {
              var e, n;
              const { topicsLoopNum: i, attachedTopicsLoopStartIndex: o } =
                v.value;
              return Math.floor(
                ((null ===
                  (e = (0, g.Gj)(
                    t.outlinerSheetModel.attached[o + i].topicId,
                  )) || void 0 === e
                  ? void 0
                  : e.getBoundingClientRect().top) || 0) -
                  ((null ===
                    (n = (0, g.Gj)(t.outlinerSheetModel.attached[o].topicId)) ||
                  void 0 === n
                    ? void 0
                    : n.getBoundingClientRect().top) || 0),
              );
            },
            j = () => {
              var e, n;
              const { topicsLoopNum: i, detachedTopicsLoopStartIndex: o } =
                v.value;
              return Math.floor(
                ((null ===
                  (e = (0, g.Gj)(
                    t.outlinerSheetModel.detached[o + i].topicId,
                  )) || void 0 === e
                  ? void 0
                  : e.getBoundingClientRect().top) || 0) -
                  ((null ===
                    (n = (0, g.Gj)(t.outlinerSheetModel.detached[o].topicId)) ||
                  void 0 === n
                    ? void 0
                    : n.getBoundingClientRect().top) || 0),
              );
            },
            R = (0, u.Ds)(() => {
              if (!k.value) return;
              const { activeSheetId: e } = (0, p.nZ)(),
                {
                  sheetStatus: t,
                  attachedTopicsLoopStartIndex: n,
                  attachedTopicsLoopEndIndex: i,
                } = v.value;
              m({
                sheetStatus: Object.assign(Object.assign({}, t), {
                  [e.value]: {
                    attachedTopicsLoopStartIndex: n,
                    attachedTopicsLoopEndIndex: i,
                    top: k.value.scrollTop,
                  },
                }),
              });
            }, 1e3);
          return (
            (0, i.bv)(() =>
              ke(this, void 0, void 0, function* () {
                if (!k.value) return;
                (x = B()),
                  (y = r()
                    .create({
                      selectables: [".outliner-topic-inner"],
                      boundaries: ["#outliner"],
                      selectionAreaContainer:
                        ".outline-selection-area-container",
                      startThreshold: 50,
                    })
                    .on("beforestart", ({ oe: e }) => {
                      const t = e.target;
                      return (
                        0 === e.button &&
                        !(
                          !e.metaKey &&
                          (t.classList.contains("outliner-topic-title") ||
                            t.classList.contains("outliner-topic-dot"))
                        )
                      );
                    })
                    .on("start", ({ oe: e }) => {
                      e.ctrlKey ||
                        e.metaKey ||
                        (m({ isEditable: !0 }), y.clearSelection()),
                        m({ isSelecting: !0 });
                    })
                    .on("move", ({ selected: e }) => {
                      const t = e.reduce((e, t) => {
                        const n = (0, g.d5)(t);
                        return n ? [...e, n] : e;
                      }, []);
                      m({ selectionIds: t });
                    })
                    .on("stop", ({ selected: e }) => {
                      const t = e.reduce((e, t) => {
                        const n = (0, g.d5)(t);
                        return n ? [...e, n] : e;
                      }, []);
                      m({ isSelecting: !1, selectionIds: t });
                    }));
                const e = document.querySelector(".main-topic"),
                  t = Math.max(
                    Math.ceil(
                      ((k.value.clientHeight || 750) /
                        ((null == e ? void 0 : e.clientHeight) || 30)) *
                        2,
                    ),
                    50,
                  );
                m({ topicsLoopNum: t, attachedTopicsLoopEndIndex: t }),
                  k.value.addEventListener("scroll", R);
              }),
            ),
            (0, i.Jd)(() => {
              y && y.destroy(),
                x && x(),
                k.value && k.value.removeEventListener("scroll", R);
            }),
            (0, i.YP)(
              () => D.value,
              (e) => {
                t.staticMode ||
                  (e
                    ? (T = o([k.value], {
                        margin: 100,
                        maxSpeed: 5,
                        scrollWhenOutside: !0,
                        autoScroll: () => !0,
                      }))
                    : T && T.destroy(!0));
              },
              { immediate: !1 },
            ),
            (0, i.YP)(
              () => [E.value, L.value],
              ([e, n]) => {
                if (0 === e.length && 0 === n.length) {
                  const { topicsLoopNum: e } = v.value;
                  m({
                    attachedTopicsLoopStartIndex: 0,
                    attachedTopicsLoopEndIndex: e,
                    detachedTopicsLoopStartIndex: 0,
                    detachedTopicsLoopEndIndex: e,
                  }),
                    k.value.scrollTo(0, 0),
                    setTimeout(() => {
                      (0, g.yS)(t.outlinerSheetModel.central.topicId);
                    });
                }
              },
              { immediate: !1 },
            ),
            {
              __sfc: !0,
              AutoScroll: o,
              props: t,
              $T: (e, ...t) => (0, d.JE)().T(e, ...t),
              handleOutlinerOperation: a,
              outlinerState: v,
              updateOutlinerState: m,
              createXapUrlByArrayBuffer: b,
              activeSheetId: I,
              selectionLibInstance: y,
              autoScrollInstance: T,
              unbindIME: x,
              outlinerEl: k,
              outlinerContainer: w,
              attachedTopicContainer: S,
              isCentralTopicVisible: C,
              attachedTopics: E,
              detachedTopics: L,
              isAttachedTopicsTopSpinnerVisible: M,
              isAttachedTopicsBottomSpinnerVisible: O,
              isDetachedTopicsTopSpinnerVisible: A,
              isDetachedTopicsBottomSpinnerVisible: F,
              currPopoverEditor: N,
              isCurrPopoverEditorVisible: P,
              isTopicPlaceholderVisible: D,
              topicPlaceholderStyle: q,
              tooltipData: _,
              handleEmptyTopicAdd: () => {
                a({
                  type: "add",
                  parentTopicId: t.outlinerSheetModel.central.topicId,
                  targetIndex: 0,
                  title: "",
                  callback: ({ newTopicId: e }) =>
                    ke(this, void 0, void 0, function* () {
                      m({ currFocusTopicId: e });
                    }),
                });
              },
              handleDragLeave: (e) => {
                v.value.draggingType === g._p.TOPIC ||
                  e.clientX ||
                  e.clientY ||
                  Z();
              },
              resetDraggingState: Z,
              handleDrop: (e) =>
                ke(this, void 0, void 0, function* () {
                  e.preventDefault(),
                    e.stopPropagation(),
                    m({ isMouseDown: !1 });
                  const {
                      draggingTopicIds: t,
                      draggingPos: { toTopicId: n, toTopicType: i },
                    } = v.value,
                    o = t[0],
                    r = e.dataTransfer.getData("outlinerSvg");
                  switch (v.value.draggingType) {
                    case g._p.IMAGE:
                      if (r) {
                        const e = JSON.parse(r);
                        yield (0, g.Ww)({
                          type: "deleteAttrs",
                          topicId: o,
                          image: !0,
                        }),
                          yield (0, g.Ww)({
                            type: "update",
                            topicId: n,
                            image: e,
                          });
                      } else if (e.dataTransfer.files.length > 0) {
                        const t = e.dataTransfer.files[0],
                          i = yield c.Z.readFile(t.path),
                          o = l().extname(t.name),
                          r = yield b(i, o);
                        yield (0, g.Ww)({
                          type: "update",
                          topicId: n,
                          image: { src: r },
                        });
                      }
                      Z();
                      break;
                    case g._p.EQUATION: {
                      const { equation: e, image: t } = JSON.parse(r);
                      yield (0, g.Ww)({
                        type: "deleteAttrs",
                        topicId: o,
                        equation: !0,
                        image: !0,
                      }),
                        yield (0, g.Ww)({
                          type: "update",
                          topicId: n,
                          equation: e,
                          image: t,
                        }),
                        Z();
                      break;
                    }
                    case g._p.ATTACHMENT:
                      if (e.dataTransfer.files.length > 0) {
                        const t = e.dataTransfer.files[0],
                          o = yield c.Z.readFile(t.path),
                          r = l().basename(t.name),
                          a = yield b(o, r);
                        yield (0, g.Ww)({
                          type: "add",
                          topicType: i,
                          parentTopicId: n,
                          targetIndex: 0,
                          title: r,
                          attachment: a,
                          callback: g.YH,
                        });
                      }
                      Z();
                  }
                }),
              handleMouseWheel: (e) => {
                if (!e.ctrlKey) return;
                const { updateOutlinerSheetStatus: t } = (0, h.E)();
                let n = Math.floor(100 * v.value.outlinerScale - e.deltaY);
                n > 300 && (n = 300),
                  n < 80 && (n = 80),
                  t({ id: I.value, zoomScale: n });
              },
              handleMouseUp: (e) => {
                m({ isMouseDown: !1 });
                const t = e.target;
                (t.classList.contains("outliner-topics") ||
                  t.classList.contains("outliner-container-wrapper")) &&
                  ((0, g.a7)(),
                  m({
                    currEditingTopicId: "",
                    startTopicId: "",
                    selectionIds: [],
                    selectonType: g._p.NONE,
                  }),
                  w.value.focus());
              },
              handleClick: (e) => {
                if (0 !== e.button) return;
                const t = e.target;
                if (
                  v.value.selectionIds.length > 0 &&
                  !t.classList.contains("outliner-topic-dot") &&
                  !t.classList.contains("outliner-topic-link-text") &&
                  !v.value.isSelecting &&
                  !e.metaKey &&
                  !e.ctrlKey &&
                  !e.shiftKey
                )
                  return (
                    e.stopPropagation(),
                    (0, g.a7)(),
                    void m({
                      selectionIds: [],
                      startTopicId: "",
                      currEditingTopicId: "",
                    })
                  );
                if (!e.shiftKey) return;
                const n = (0, g.rH)(t);
                if (!n) return;
                const i = n.dataset.topicId,
                  o = v.value.currEditingTopicId || v.value.startTopicId;
                if (!i || !o || o === i) return;
                let r = E.value.findIndex(({ topicId: e }) => e === o),
                  a = E.value.findIndex(({ topicId: e }) => e === i);
                a < r && ([r, a] = [a, r]);
                const l = E.value.slice(r, a + 1).map((e) => e.topicId);
                (0, g.a7)(), m({ selectionIds: l });
              },
              bindIME: B,
              getAttachedTopicsLoopChangeHeight: H,
              handleAttachedTopicsAtTopChange: (e) => {
                const {
                  topicsLoopNum: n,
                  attachedTopicsLoopStartIndex: o,
                  attachedTopicsLoopEndIndex: r,
                } = v.value;
                if (e) {
                  if (!M.value) return;
                  if (!k.value) return;
                  const e = k.value.scrollTop,
                    a = Math.max(o - n, 0);
                  m({ attachedTopicsLoopStartIndex: a }),
                    (0, i.Y3)(() => {
                      var n;
                      const i = H(),
                        o =
                          (null ===
                            (n = (0, g.Y8)(
                              t.outlinerSheetModel.central.topicId,
                            )) || void 0 === n
                            ? void 0
                            : n.clientHeight) || 0;
                      k.value.scrollTo({ top: e + i + o });
                    }),
                    r - a > t.maxTopicsLoopNum &&
                      m({ attachedTopicsLoopEndIndex: r - n });
                }
              },
              handleAttachedTopicsAtBottomChange: (e) => {
                var n;
                const {
                  topicsLoopNum: o,
                  attachedTopicsLoopStartIndex: r,
                  attachedTopicsLoopEndIndex: a,
                } = v.value;
                if (e) {
                  if (!O.value) return;
                  const e = a + o;
                  if (
                    (m({ attachedTopicsLoopEndIndex: e }),
                    e - r > t.maxTopicsLoopNum)
                  ) {
                    if (!k.value) return;
                    const e =
                        (null ===
                          (n = (0, g.Y8)(
                            t.outlinerSheetModel.central.topicId,
                          )) || void 0 === n
                          ? void 0
                          : n.clientHeight) || 0,
                      a = k.value.scrollTop - e,
                      l = H();
                    m({ attachedTopicsLoopStartIndex: r + o }),
                      (0, i.Y3)(() => {
                        k.value.scrollTo({ top: a - l });
                      });
                  }
                }
              },
              getDetachedTopicsLoopChangeHeight: j,
              handleDetachedTopicsAtTopChange: (e) => {
                const {
                  topicsLoopNum: n,
                  detachedTopicsLoopStartIndex: o,
                  detachedTopicsLoopEndIndex: r,
                } = v.value;
                if (e) {
                  if (!A.value) return;
                  if (!k.value || !S.value) return;
                  const e = k.value.scrollTop,
                    a = Math.max(o - n, 0);
                  m(
                    Object.assign(
                      { detachedTopicsLoopStartIndex: a },
                      r - a > t.maxTopicsLoopNum && {
                        detachedTopicsLoopEndIndex: r - n,
                      },
                    ),
                  ),
                    (0, i.Y3)(() => {
                      const t = j(),
                        n = S.value.clientHeight;
                      k.value.scrollTo({ top: e + t + n });
                    });
                }
              },
              handleDetachedTopicsAtBottomChange: (e) => {
                const {
                  topicsLoopNum: n,
                  detachedTopicsLoopStartIndex: o,
                  detachedTopicsLoopEndIndex: r,
                } = v.value;
                if (e) {
                  if (!F.value) return;
                  const e = r + n;
                  if (
                    (m({ detachedTopicsLoopEndIndex: e }),
                    e - o > t.maxTopicsLoopNum)
                  ) {
                    if (!k.value || !S.value) return;
                    const e = k.value.scrollTop,
                      t = j(),
                      r = S.value.clientHeight;
                    m({ detachedTopicsLoopStartIndex: o + n }),
                      (0, i.Y3)(() => {
                        k.value.scrollTo({ top: e - t - r });
                      });
                  }
                }
              },
              handleScroll: R,
              VisibilitySensor: s.Z,
              OutlinerSelectionType: g._p,
              CentralTopic: Y,
              Topic: oe,
              TopicPlaceholder: be,
              Tooltip: ye,
              Spinner: xe,
            }
          );
        },
      });
      n(96431);
      const Se = (0, b.Z)(
        we,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              ref: "outlinerEl",
              staticClass: "uk-overflow-auto uk-background-default",
              attrs: { id: "outliner" },
            },
            [
              t("div", { staticClass: "outline-selection-area-container" }, [
                t(
                  "div",
                  {
                    staticClass: "outliner-container-wrapper",
                    on: {
                      dragleave: n.handleDragLeave,
                      drop: n.handleDrop,
                      mouseup: n.handleMouseUp,
                      mousewheel: n.handleMouseWheel,
                    },
                  },
                  [
                    t(
                      "div",
                      {
                        ref: "outlinerContainer",
                        staticClass:
                          "outliner-container uk-position-relative uk-text-select-none uk-flex uk-flex-column",
                        style: {
                          transform: `scale(${n.outlinerState.outlinerScale})`,
                        },
                        attrs: { tabindex: "-1" },
                      },
                      [
                        n.isCentralTopicVisible
                          ? t(
                              n.CentralTopic,
                              e._b(
                                {
                                  attrs: {
                                    "label-sort-order":
                                      e.outlinerSheetModel.labelSortOrder,
                                    "is-editable": n.outlinerState.isEditable,
                                    "is-image-selected":
                                      n.outlinerState.currEditingTopicId ===
                                        e.outlinerSheetModel.central.topicId &&
                                      n.outlinerState.selectonType ===
                                        n.OutlinerSelectionType.IMAGE,
                                    "is-equation-selected":
                                      n.outlinerState.currEditingTopicId ===
                                        e.outlinerSheetModel.central.topicId &&
                                      n.outlinerState.selectonType ===
                                        n.OutlinerSelectionType.EQUATION,
                                  },
                                  nativeOn: {
                                    mousedown: function (e) {
                                      return (
                                        e.stopPropagation(),
                                        n.handleClick.apply(null, arguments)
                                      );
                                    },
                                  },
                                },
                                "central-topic",
                                e.outlinerSheetModel.central,
                                !1,
                              ),
                            )
                          : e._e(),
                        e._v(" "),
                        n.attachedTopics.length > 0 ||
                        e.outlinerSheetModel.detached.length > 0
                          ? t(
                              "div",
                              {
                                staticClass:
                                  "outliner-topics uk-flex-1 uk-clearfix",
                                on: { mousedown: n.handleClick },
                              },
                              [
                                t(
                                  "div",
                                  {
                                    ref: "attachedTopicContainer",
                                    staticClass: "outliner-attached-topics",
                                  },
                                  [
                                    t(n.Spinner, {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            n.isAttachedTopicsTopSpinnerVisible,
                                          expression:
                                            "isAttachedTopicsTopSpinnerVisible",
                                        },
                                      ],
                                      staticStyle: { margin: "16px 24px" },
                                    }),
                                    e._v(" "),
                                    t(n.VisibilitySensor, {
                                      attrs: { options: { root: null } },
                                      on: {
                                        onVisibleChange:
                                          n.handleAttachedTopicsAtTopChange,
                                      },
                                    }),
                                    e._v(" "),
                                    e._l(n.attachedTopics, function (i) {
                                      return t(
                                        n.Topic,
                                        e._b(
                                          {
                                            key: i.topicId,
                                            attrs: {
                                              "label-sort-order":
                                                e.outlinerSheetModel
                                                  .labelSortOrder,
                                              "is-editable":
                                                n.outlinerState.isEditable,
                                              "is-selected":
                                                n.outlinerState.selectionIds.includes(
                                                  i.topicId,
                                                ),
                                              "is-image-selected":
                                                n.outlinerState
                                                  .currEditingTopicId ===
                                                  i.topicId &&
                                                n.outlinerState.selectonType ===
                                                  n.OutlinerSelectionType.IMAGE,
                                              "is-equation-selected":
                                                n.outlinerState
                                                  .currEditingTopicId ===
                                                  i.topicId &&
                                                n.outlinerState.selectonType ===
                                                  n.OutlinerSelectionType
                                                    .EQUATION,
                                              "is-dragging":
                                                n.outlinerState.draggingTopicIds.includes(
                                                  i.topicId,
                                                ) &&
                                                n.outlinerState.draggingType ===
                                                  n.OutlinerSelectionType.TOPIC,
                                            },
                                          },
                                          "topic",
                                          i,
                                          !1,
                                        ),
                                      );
                                    }),
                                    e._v(" "),
                                    t(n.VisibilitySensor, {
                                      attrs: { options: { root: null } },
                                      on: {
                                        onVisibleChange:
                                          n.handleAttachedTopicsAtBottomChange,
                                      },
                                    }),
                                    e._v(" "),
                                    t(n.Spinner, {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            n.isAttachedTopicsBottomSpinnerVisible,
                                          expression:
                                            "isAttachedTopicsBottomSpinnerVisible",
                                        },
                                      ],
                                      staticStyle: { margin: "16px 24px" },
                                    }),
                                  ],
                                  2,
                                ),
                                e._v(" "),
                                t(
                                  "div",
                                  { staticClass: "outliner-detached-topics" },
                                  [
                                    e.outlinerSheetModel.detached.length > 0
                                      ? t("hr", {
                                          staticClass:
                                            "outliner-detached-topics-separator",
                                        })
                                      : e._e(),
                                    e._v(" "),
                                    t(n.Spinner, {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            n.isDetachedTopicsTopSpinnerVisible,
                                          expression:
                                            "isDetachedTopicsTopSpinnerVisible",
                                        },
                                      ],
                                      staticStyle: { margin: "16px 24px" },
                                    }),
                                    e._v(" "),
                                    t(n.VisibilitySensor, {
                                      attrs: { options: { root: null } },
                                      on: {
                                        onVisibleChange:
                                          n.handleDetachedTopicsAtTopChange,
                                      },
                                    }),
                                    e._v(" "),
                                    e._l(n.detachedTopics, function (i) {
                                      return t(
                                        n.Topic,
                                        e._b(
                                          {
                                            key: i.topicId,
                                            attrs: {
                                              "label-sort-order":
                                                e.outlinerSheetModel
                                                  .labelSortOrder,
                                              "is-editable":
                                                n.outlinerState.isEditable,
                                              "is-selected":
                                                n.outlinerState.selectionIds.includes(
                                                  i.topicId,
                                                ),
                                              "is-image-selected":
                                                n.outlinerState
                                                  .currEditingTopicId ===
                                                  i.topicId &&
                                                n.outlinerState.selectonType ===
                                                  n.OutlinerSelectionType.IMAGE,
                                              "is-equation-selected":
                                                n.outlinerState
                                                  .currEditingTopicId ===
                                                  i.topicId &&
                                                n.outlinerState.selectonType ===
                                                  n.OutlinerSelectionType
                                                    .EQUATION,
                                              "is-dragging":
                                                n.outlinerState.draggingTopicIds.includes(
                                                  i.topicId,
                                                ) &&
                                                n.outlinerState.draggingType ===
                                                  n.OutlinerSelectionType.TOPIC,
                                            },
                                          },
                                          "topic",
                                          i,
                                          !1,
                                        ),
                                      );
                                    }),
                                    e._v(" "),
                                    t(n.VisibilitySensor, {
                                      attrs: { options: { root: null } },
                                      on: {
                                        onVisibleChange:
                                          n.handleDetachedTopicsAtBottomChange,
                                      },
                                    }),
                                    e._v(" "),
                                    t(n.Spinner, {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            n.isDetachedTopicsBottomSpinnerVisible,
                                          expression:
                                            "isDetachedTopicsBottomSpinnerVisible",
                                        },
                                      ],
                                      staticStyle: { margin: "16px 24px" },
                                    }),
                                  ],
                                  2,
                                ),
                              ],
                            )
                          : t(
                              "div",
                              {
                                staticClass:
                                  "outliner-topic-placeholder uk-height-large uk-text-meta uk-width-1-1",
                                on: { click: n.handleEmptyTopicAdd },
                              },
                              [
                                e._v(
                                  "\n          " +
                                    e._s(n.$T("Type your mind here...")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                        e._v(" "),
                        t(n.TopicPlaceholder, {
                          style: n.topicPlaceholderStyle,
                          attrs: { "is-visible": n.isTopicPlaceholderVisible },
                        }),
                      ],
                      1,
                    ),
                    e._v(" "),
                    n.isCurrPopoverEditorVisible
                      ? t(n.currPopoverEditor, { tag: "component" })
                      : e._e(),
                    e._v(" "),
                    n.tooltipData
                      ? t(n.Tooltip, {
                          attrs: {
                            content: n.tooltipData?.content,
                            location: n.tooltipData?.location,
                          },
                        })
                      : e._e(),
                  ],
                  1,
                ),
              ]),
            ],
          );
        },
        [],
        !1,
        null,
        "10f3055e",
        null,
      ).exports;
    },
    51e3: (e, t, n) => {
      var i = n(62154);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("3c7501c2", i, !0, {});
    },
    15274: (e, t, n) => {
      var i = n(55601);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("314aae86", i, !0, {});
    },
    96431: (e, t, n) => {
      var i = n(85790);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("5c208fee", i, !0, {});
    },
    85042: (e, t, n) => {
      var i = n(31841);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("3225105a", i, !0, {});
    },
    86461: (e, t, n) => {
      var i = n(24425);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("263b6588", i, !0, {});
    },
    13920: (e, t, n) => {
      var i = n(38618);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("fe022650", i, !0, {});
    },
    92475: (e, t, n) => {
      var i = n(47375);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("5c76ccea", i, !0, {});
    },
    51819: (e, t, n) => {
      var i = n(60757);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("2d84316c", i, !0, {});
    },
    94783: (e, t, n) => {
      var i = n(75542);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("368d77bc", i, !0, {});
    },
    75375: (e, t, n) => {
      var i = n(58349);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("612a3136", i, !0, {});
    },
    76466: (e, t, n) => {
      var i = n(25113);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("fedc2674", i, !0, {});
    },
    85093: (e, t, n) => {
      var i = n(8264);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("6b52d128", i, !0, {});
    },
    14433: (e, t, n) => {
      var i = n(80203);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("aaa74984", i, !0, {});
    },
    51688: (e, t, n) => {
      var i = n(9007);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("1c415a7c", i, !0, {});
    },
    60281: (e, t, n) => {
      var i = n(44162);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("73d01076", i, !0, {});
    },
    64571: (e, t, n) => {
      var i = n(88438);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("75a2047c", i, !0, {});
    },
    93382: (e, t, n) => {
      var i = n(48557);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("443fc6f5", i, !0, {});
    },
    7419: (e, t, n) => {
      var i = n(60220);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("8fe105ae", i, !0, {});
    },
    29059: (e, t, n) => {
      var i = n(99071);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("e5129f28", i, !0, {});
    },
    82302: (e, t, n) => {
      var i = n(29970).FilterCSS,
        o = n(29970).getDefaultWhiteList,
        r = n(75938);
      function a() {
        return {
          a: ["target", "href", "title"],
          abbr: ["title"],
          address: [],
          area: ["shape", "coords", "href", "alt"],
          article: [],
          aside: [],
          audio: [
            "autoplay",
            "controls",
            "crossorigin",
            "loop",
            "muted",
            "preload",
            "src",
          ],
          b: [],
          bdi: ["dir"],
          bdo: ["dir"],
          big: [],
          blockquote: ["cite"],
          br: [],
          caption: [],
          center: [],
          cite: [],
          code: [],
          col: ["align", "valign", "span", "width"],
          colgroup: ["align", "valign", "span", "width"],
          dd: [],
          del: ["datetime"],
          details: ["open"],
          div: [],
          dl: [],
          dt: [],
          em: [],
          figcaption: [],
          figure: [],
          font: ["color", "size", "face"],
          footer: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          header: [],
          hr: [],
          i: [],
          img: ["src", "alt", "title", "width", "height"],
          ins: ["datetime"],
          li: [],
          mark: [],
          nav: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          section: [],
          small: [],
          span: [],
          sub: [],
          summary: [],
          sup: [],
          strong: [],
          strike: [],
          table: ["width", "border", "align", "valign"],
          tbody: ["align", "valign"],
          td: ["width", "rowspan", "colspan", "align", "valign"],
          tfoot: ["align", "valign"],
          th: ["width", "rowspan", "colspan", "align", "valign"],
          thead: ["align", "valign"],
          tr: ["rowspan", "align", "valign"],
          tt: [],
          u: [],
          ul: [],
          video: [
            "autoplay",
            "controls",
            "crossorigin",
            "loop",
            "muted",
            "playsinline",
            "poster",
            "preload",
            "src",
            "height",
            "width",
          ],
        };
      }
      var l = new i();
      function d(e) {
        return e.replace(c, "&lt;").replace(s, "&gt;");
      }
      var c = /</g,
        s = />/g,
        u = /"/g,
        p = /&quot;/g,
        g = /&#([a-zA-Z0-9]*);?/gim,
        h = /&colon;?/gim,
        v = /&newline;?/gim,
        f =
          /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,
        m = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
        b = /u\s*r\s*l\s*\(.*/gi;
      function I(e) {
        return e.replace(u, "&quot;");
      }
      function y(e) {
        return e.replace(p, '"');
      }
      function T(e) {
        return e.replace(g, function (e, t) {
          return "x" === t[0] || "X" === t[0]
            ? String.fromCharCode(parseInt(t.substr(1), 16))
            : String.fromCharCode(parseInt(t, 10));
        });
      }
      function x(e) {
        return e.replace(h, ":").replace(v, " ");
      }
      function k(e) {
        for (var t = "", n = 0, i = e.length; n < i; n++)
          t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
        return r.trim(t);
      }
      function w(e) {
        return (e = k((e = x((e = T((e = y(e))))))));
      }
      function S(e) {
        return (e = d((e = I(e))));
      }
      (t.whiteList = {
        a: ["target", "href", "title"],
        abbr: ["title"],
        address: [],
        area: ["shape", "coords", "href", "alt"],
        article: [],
        aside: [],
        audio: [
          "autoplay",
          "controls",
          "crossorigin",
          "loop",
          "muted",
          "preload",
          "src",
        ],
        b: [],
        bdi: ["dir"],
        bdo: ["dir"],
        big: [],
        blockquote: ["cite"],
        br: [],
        caption: [],
        center: [],
        cite: [],
        code: [],
        col: ["align", "valign", "span", "width"],
        colgroup: ["align", "valign", "span", "width"],
        dd: [],
        del: ["datetime"],
        details: ["open"],
        div: [],
        dl: [],
        dt: [],
        em: [],
        figcaption: [],
        figure: [],
        font: ["color", "size", "face"],
        footer: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        header: [],
        hr: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        ins: ["datetime"],
        li: [],
        mark: [],
        nav: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        section: [],
        small: [],
        span: [],
        sub: [],
        summary: [],
        sup: [],
        strong: [],
        strike: [],
        table: ["width", "border", "align", "valign"],
        tbody: ["align", "valign"],
        td: ["width", "rowspan", "colspan", "align", "valign"],
        tfoot: ["align", "valign"],
        th: ["width", "rowspan", "colspan", "align", "valign"],
        thead: ["align", "valign"],
        tr: ["rowspan", "align", "valign"],
        tt: [],
        u: [],
        ul: [],
        video: [
          "autoplay",
          "controls",
          "crossorigin",
          "loop",
          "muted",
          "playsinline",
          "poster",
          "preload",
          "src",
          "height",
          "width",
        ],
      }),
        (t.getDefaultWhiteList = a),
        (t.onTag = function (e, t, n) {}),
        (t.onIgnoreTag = function (e, t, n) {}),
        (t.onTagAttr = function (e, t, n) {}),
        (t.onIgnoreTagAttr = function (e, t, n) {}),
        (t.safeAttrValue = function (e, t, n, i) {
          if (((n = w(n)), "href" === t || "src" === t)) {
            if ("#" === (n = r.trim(n))) return "#";
            if (
              "http://" !== n.substr(0, 7) &&
              "https://" !== n.substr(0, 8) &&
              "mailto:" !== n.substr(0, 7) &&
              "tel:" !== n.substr(0, 4) &&
              "data:image/" !== n.substr(0, 11) &&
              "ftp://" !== n.substr(0, 6) &&
              "./" !== n.substr(0, 2) &&
              "../" !== n.substr(0, 3) &&
              "#" !== n[0] &&
              "/" !== n[0]
            )
              return "";
          } else if ("background" === t) {
            if (((f.lastIndex = 0), f.test(n))) return "";
          } else if ("style" === t) {
            if (((m.lastIndex = 0), m.test(n))) return "";
            if (
              ((b.lastIndex = 0), b.test(n) && ((f.lastIndex = 0), f.test(n)))
            )
              return "";
            !1 !== i && (n = (i = i || l).process(n));
          }
          return (n = S(n));
        }),
        (t.escapeHtml = d),
        (t.escapeQuote = I),
        (t.unescapeQuote = y),
        (t.escapeHtmlEntities = T),
        (t.escapeDangerHtml5Entities = x),
        (t.clearNonPrintableCharacter = k),
        (t.friendlyAttrValue = w),
        (t.escapeAttrValue = S),
        (t.onIgnoreTagStripAll = function () {
          return "";
        }),
        (t.StripTagBody = function (e, t) {
          "function" != typeof t && (t = function () {});
          var n = !Array.isArray(e),
            i = [],
            o = !1;
          return {
            onIgnoreTag: function (a, l, d) {
              if (
                (function (t) {
                  return !!n || -1 !== r.indexOf(e, t);
                })(a)
              ) {
                if (d.isClosing) {
                  var c = "[/removed]",
                    s = d.position + 10;
                  return i.push([!1 !== o ? o : d.position, s]), (o = !1), c;
                }
                return o || (o = d.position), "[removed]";
              }
              return t(a, l, d);
            },
            remove: function (e) {
              var t = "",
                n = 0;
              return (
                r.forEach(i, function (i) {
                  (t += e.slice(n, i[0])), (n = i[1]);
                }),
                (t += e.slice(n))
              );
            },
          };
        }),
        (t.stripCommentTag = function (e) {
          for (var t = "", n = 0; n < e.length; ) {
            var i = e.indexOf("\x3c!--", n);
            if (-1 === i) {
              t += e.slice(n);
              break;
            }
            t += e.slice(n, i);
            var o = e.indexOf("--\x3e", i);
            if (-1 === o) break;
            n = o + 3;
          }
          return t;
        }),
        (t.stripBlankChar = function (e) {
          var t = e.split("");
          return (t = t.filter(function (e) {
            var t = e.charCodeAt(0);
            return 127 !== t && (!(t <= 31) || 10 === t || 13 === t);
          })).join("");
        }),
        (t.cssFilter = l),
        (t.getDefaultCSSWhiteList = o);
    },
    68924: (e, t, n) => {
      var i = n(82302),
        o = n(73268),
        r = n(82973);
      function a(e, t) {
        return new r(t).process(e);
      }
      ((t = e.exports = a).filterXSS = a),
        (t.FilterXSS = r),
        (function () {
          for (var e in i) t[e] = i[e];
          for (var n in o) t[n] = o[n];
        })(),
        "undefined" != typeof window && (window.filterXSS = e.exports),
        "undefined" != typeof self &&
          "undefined" != typeof DedicatedWorkerGlobalScope &&
          self instanceof DedicatedWorkerGlobalScope &&
          (self.filterXSS = e.exports);
    },
    73268: (e, t, n) => {
      var i = n(75938);
      function o(e) {
        var t,
          n = i.spaceIndex(e);
        return (
          (t = -1 === n ? e.slice(1, -1) : e.slice(1, n + 1)),
          "/" === (t = i.trim(t).toLowerCase()).slice(0, 1) && (t = t.slice(1)),
          "/" === t.slice(-1) && (t = t.slice(0, -1)),
          t
        );
      }
      function r(e) {
        return "</" === e.slice(0, 2);
      }
      var a = /[^a-zA-Z0-9\\_:.-]/gim;
      function l(e, t) {
        for (; t < e.length; t++) {
          var n = e[t];
          if (" " !== n) return "=" === n ? t : -1;
        }
      }
      function d(e, t) {
        for (; t < e.length; t++) {
          var n = e[t];
          if (" " !== n) return "'" === n || '"' === n ? t : -1;
        }
      }
      function c(e, t) {
        for (; t > 0; t--) {
          var n = e[t];
          if (" " !== n) return "=" === n ? t : -1;
        }
      }
      function s(e) {
        return (function (e) {
          return (
            ('"' === e[0] && '"' === e[e.length - 1]) ||
            ("'" === e[0] && "'" === e[e.length - 1])
          );
        })(e)
          ? e.substr(1, e.length - 2)
          : e;
      }
      (t.parseTag = function (e, t, n) {
        "use strict";
        var i = "",
          a = 0,
          l = !1,
          d = !1,
          c = 0,
          s = e.length,
          u = "",
          p = "";
        e: for (c = 0; c < s; c++) {
          var g = e.charAt(c);
          if (!1 === l) {
            if ("<" === g) {
              l = c;
              continue;
            }
          } else if (!1 === d) {
            if ("<" === g) {
              (i += n(e.slice(a, c))), (l = c), (a = c);
              continue;
            }
            if (">" === g || c === s - 1) {
              (i += n(e.slice(a, l))),
                (u = o((p = e.slice(l, c + 1)))),
                (i += t(l, i.length, u, p, r(p))),
                (a = c + 1),
                (l = !1);
              continue;
            }
            if ('"' === g || "'" === g)
              for (
                var h = 1, v = e.charAt(c - h);
                "" === v.trim() || "=" === v;

              ) {
                if ("=" === v) {
                  d = g;
                  continue e;
                }
                v = e.charAt(c - ++h);
              }
          } else if (g === d) {
            d = !1;
            continue;
          }
        }
        return a < s && (i += n(e.substr(a))), i;
      }),
        (t.parseAttr = function (e, t) {
          "use strict";
          var n = 0,
            o = 0,
            r = [],
            u = !1,
            p = e.length;
          function g(e, n) {
            if (
              !((e = (e = i.trim(e)).replace(a, "").toLowerCase()).length < 1)
            ) {
              var o = t(e, n || "");
              o && r.push(o);
            }
          }
          for (var h = 0; h < p; h++) {
            var v,
              f = e.charAt(h);
            if (!1 !== u || "=" !== f)
              if (!1 === u || h !== o)
                if (/\s|\n|\t/.test(f)) {
                  if (((e = e.replace(/\s|\n|\t/g, " ")), !1 === u)) {
                    if (-1 === (v = l(e, h))) {
                      g(i.trim(e.slice(n, h))), (u = !1), (n = h + 1);
                      continue;
                    }
                    h = v - 1;
                    continue;
                  }
                  if (-1 === (v = c(e, h - 1))) {
                    g(u, s(i.trim(e.slice(n, h)))), (u = !1), (n = h + 1);
                    continue;
                  }
                } else;
              else {
                if (-1 === (v = e.indexOf(f, h + 1))) break;
                g(u, i.trim(e.slice(o + 1, v))), (u = !1), (n = (h = v) + 1);
              }
            else
              (u = e.slice(n, h)),
                (n = h + 1),
                (o =
                  '"' === e.charAt(n) || "'" === e.charAt(n) ? n : d(e, h + 1));
          }
          return (
            n < e.length &&
              (!1 === u ? g(e.slice(n)) : g(u, s(i.trim(e.slice(n))))),
            i.trim(r.join(" "))
          );
        });
    },
    75938: (e) => {
      e.exports = {
        indexOf: function (e, t) {
          var n, i;
          if (Array.prototype.indexOf) return e.indexOf(t);
          for (n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
          return -1;
        },
        forEach: function (e, t, n) {
          var i, o;
          if (Array.prototype.forEach) return e.forEach(t, n);
          for (i = 0, o = e.length; i < o; i++) t.call(n, e[i], i, e);
        },
        trim: function (e) {
          return String.prototype.trim
            ? e.trim()
            : e.replace(/(^\s*)|(\s*$)/g, "");
        },
        spaceIndex: function (e) {
          var t = /\s|\n|\t/.exec(e);
          return t ? t.index : -1;
        },
      };
    },
    82973: (e, t, n) => {
      var i = n(29970).FilterCSS,
        o = n(82302),
        r = n(73268),
        a = r.parseTag,
        l = r.parseAttr,
        d = n(75938);
      function c(e) {
        return null == e;
      }
      function s(e) {
        (e = (function (e) {
          var t = {};
          for (var n in e) t[n] = e[n];
          return t;
        })(e || {})).stripIgnoreTag &&
          (e.onIgnoreTag &&
            console.error(
              'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time',
            ),
          (e.onIgnoreTag = o.onIgnoreTagStripAll)),
          e.whiteList || e.allowList
            ? (e.whiteList = (function (e) {
                var t = {};
                for (var n in e)
                  Array.isArray(e[n])
                    ? (t[n.toLowerCase()] = e[n].map(function (e) {
                        return e.toLowerCase();
                      }))
                    : (t[n.toLowerCase()] = e[n]);
                return t;
              })(e.whiteList || e.allowList))
            : (e.whiteList = o.whiteList),
          (e.onTag = e.onTag || o.onTag),
          (e.onTagAttr = e.onTagAttr || o.onTagAttr),
          (e.onIgnoreTag = e.onIgnoreTag || o.onIgnoreTag),
          (e.onIgnoreTagAttr = e.onIgnoreTagAttr || o.onIgnoreTagAttr),
          (e.safeAttrValue = e.safeAttrValue || o.safeAttrValue),
          (e.escapeHtml = e.escapeHtml || o.escapeHtml),
          (this.options = e),
          !1 === e.css
            ? (this.cssFilter = !1)
            : ((e.css = e.css || {}), (this.cssFilter = new i(e.css)));
      }
      (s.prototype.process = function (e) {
        if (!(e = (e = e || "").toString())) return "";
        var t = this.options,
          n = t.whiteList,
          i = t.onTag,
          r = t.onIgnoreTag,
          s = t.onTagAttr,
          u = t.onIgnoreTagAttr,
          p = t.safeAttrValue,
          g = t.escapeHtml,
          h = this.cssFilter;
        t.stripBlankChar && (e = o.stripBlankChar(e)),
          t.allowCommentTag || (e = o.stripCommentTag(e));
        var v = !1;
        t.stripIgnoreTagBody &&
          ((v = o.StripTagBody(t.stripIgnoreTagBody, r)), (r = v.onIgnoreTag));
        var f = a(
          e,
          function (e, t, o, a, v) {
            var f = {
                sourcePosition: e,
                position: t,
                isClosing: v,
                isWhite: Object.prototype.hasOwnProperty.call(n, o),
              },
              m = i(o, a, f);
            if (!c(m)) return m;
            if (f.isWhite) {
              if (f.isClosing) return "</" + o + ">";
              var b = (function (e) {
                  var t = d.spaceIndex(e);
                  if (-1 === t)
                    return { html: "", closing: "/" === e[e.length - 2] };
                  var n =
                    "/" === (e = d.trim(e.slice(t + 1, -1)))[e.length - 1];
                  return (
                    n && (e = d.trim(e.slice(0, -1))), { html: e, closing: n }
                  );
                })(a),
                I = n[o],
                y = l(b.html, function (e, t) {
                  var n = -1 !== d.indexOf(I, e),
                    i = s(o, e, t, n);
                  return c(i)
                    ? n
                      ? (t = p(o, e, t, h))
                        ? e + '="' + t + '"'
                        : e
                      : c((i = u(o, e, t, n)))
                        ? void 0
                        : i
                    : i;
                });
              return (
                (a = "<" + o),
                y && (a += " " + y),
                b.closing && (a += " /"),
                (a += ">")
              );
            }
            return c((m = r(o, a, f))) ? g(a) : m;
          },
          g,
        );
        return v && (f = v.remove(f)), f;
      }),
        (e.exports = s);
    },
  },
]);
