(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [6933],
  {
    27071: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { default: () => i });
      var o = n(23645),
        r = n.n(o)()(function (t) {
          return t[1];
        });
      r.push([
        t.id,
        ".uk-textarea[data-v-923cbfb8] {\n  height: 134px;\n  background-color: transparent;\n  border: none;\n}\n.uk-textarea[data-v-923cbfb8]:focus {\n  background-color: transparent;\n}\n.preview-container[data-v-923cbfb8] {\n  box-sizing: border-box;\n  margin-top: 10px;\n  height: 76px;\n  width: 362px;\n  padding: 6px;\n  min-width: 100%;\n}\n.equation-help[data-v-923cbfb8] {\n  opacity: 0.3;\n}\n.equation-help[data-v-923cbfb8]:hover {\n  opacity: 0.6;\n}\n",
        "",
      ]);
      const i = r;
    },
    10454: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { default: () => i });
      var o = n(23645),
        r = n.n(o)()(function (t) {
          return t[1];
        });
      r.push([
        t.id,
        ".topic-popover-overlay {\n  display: block;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1010;\n  background-color: transparent;\n  border: none;\n}\n",
        "",
      ]);
      const i = r;
    },
    96874: (t) => {
      t.exports = function (t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      };
    },
    29932: (t) => {
      t.exports = function (t, e) {
        for (var n = -1, o = null == t ? 0 : t.length, r = Array(o); ++n < o; )
          r[n] = e(t[n], n, t);
        return r;
      };
    },
    34865: (t, e, n) => {
      var o = n(89465),
        r = n(77813),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, n) {
        var a = t[e];
        (i.call(t, e) && r(a, n) && (void 0 !== n || e in t)) || o(t, e, n);
      };
    },
    89465: (t, e, n) => {
      var o = n(38777);
      t.exports = function (t, e, n) {
        "__proto__" == e && o
          ? o(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (t[e] = n);
      };
    },
    21078: (t, e, n) => {
      var o = n(62488),
        r = n(37285);
      t.exports = function t(e, n, i, a, u) {
        var l = -1,
          c = e.length;
        for (i || (i = r), u || (u = []); ++l < c; ) {
          var p = e[l];
          n > 0 && i(p)
            ? n > 1
              ? t(p, n - 1, i, a, u)
              : o(u, p)
            : a || (u[u.length] = p);
        }
        return u;
      };
    },
    97786: (t, e, n) => {
      var o = n(71811),
        r = n(40327);
      t.exports = function (t, e) {
        for (var n = 0, i = (e = o(e, t)).length; null != t && n < i; )
          t = t[r(e[n++])];
        return n && n == i ? t : void 0;
      };
    },
    13: (t) => {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    25970: (t, e, n) => {
      var o = n(63012),
        r = n(79095);
      t.exports = function (t, e) {
        return o(t, e, function (e, n) {
          return r(t, n);
        });
      };
    },
    63012: (t, e, n) => {
      var o = n(97786),
        r = n(10611),
        i = n(71811);
      t.exports = function (t, e, n) {
        for (var a = -1, u = e.length, l = {}; ++a < u; ) {
          var c = e[a],
            p = o(t, c);
          n(p, c) && r(l, i(c, t), p);
        }
        return l;
      };
    },
    10611: (t, e, n) => {
      var o = n(34865),
        r = n(71811),
        i = n(65776),
        a = n(13218),
        u = n(40327);
      t.exports = function (t, e, n, l) {
        if (!a(t)) return t;
        for (
          var c = -1, p = (e = r(e, t)).length, s = p - 1, v = t;
          null != v && ++c < p;

        ) {
          var d = u(e[c]),
            f = n;
          if ("__proto__" === d || "constructor" === d || "prototype" === d)
            return t;
          if (c != s) {
            var h = v[d];
            void 0 === (f = l ? l(h, d, v) : void 0) &&
              (f = a(h) ? h : i(e[c + 1]) ? [] : {});
          }
          o(v, d, f), (v = v[d]);
        }
        return t;
      };
    },
    56560: (t, e, n) => {
      var o = n(75703),
        r = n(38777),
        i = n(6557),
        a = r
          ? function (t, e) {
              return r(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: o(e),
                writable: !0,
              });
            }
          : i;
      t.exports = a;
    },
    80531: (t, e, n) => {
      var o = n(62705),
        r = n(29932),
        i = n(1469),
        a = n(33448),
        u = o ? o.prototype : void 0,
        l = u ? u.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return r(e, t) + "";
        if (a(e)) return l ? l.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -Infinity ? "-0" : n;
      };
    },
    71811: (t, e, n) => {
      var o = n(1469),
        r = n(15403),
        i = n(55514),
        a = n(79833);
      t.exports = function (t, e) {
        return o(t) ? t : r(t, e) ? [t] : i(a(t));
      };
    },
    38777: (t, e, n) => {
      var o = n(10852),
        r = (function () {
          try {
            var t = o(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        })();
      t.exports = r;
    },
    99021: (t, e, n) => {
      var o = n(85564),
        r = n(45357),
        i = n(30061);
      t.exports = function (t) {
        return i(r(t, void 0, o), t + "");
      };
    },
    222: (t, e, n) => {
      var o = n(71811),
        r = n(35694),
        i = n(1469),
        a = n(65776),
        u = n(41780),
        l = n(40327);
      t.exports = function (t, e, n) {
        for (var c = -1, p = (e = o(e, t)).length, s = !1; ++c < p; ) {
          var v = l(e[c]);
          if (!(s = null != t && n(t, v))) break;
          t = t[v];
        }
        return s || ++c != p
          ? s
          : !!(p = null == t ? 0 : t.length) &&
              u(p) &&
              a(v, p) &&
              (i(t) || r(t));
      };
    },
    37285: (t, e, n) => {
      var o = n(62705),
        r = n(35694),
        i = n(1469),
        a = o ? o.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return i(t) || r(t) || !!(a && t && t[a]);
      };
    },
    15403: (t, e, n) => {
      var o = n(1469),
        r = n(33448),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
      t.exports = function (t, e) {
        if (o(t)) return !1;
        var n = typeof t;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != t &&
            !r(t)
          ) ||
          a.test(t) ||
          !i.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    24523: (t, e, n) => {
      var o = n(88306);
      t.exports = function (t) {
        var e = o(t, function (t) {
            return 500 === n.size && n.clear(), t;
          }),
          n = e.cache;
        return e;
      };
    },
    45357: (t, e, n) => {
      var o = n(96874),
        r = Math.max;
      t.exports = function (t, e, n) {
        return (
          (e = r(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var i = arguments, a = -1, u = r(i.length - e, 0), l = Array(u);
              ++a < u;

            )
              l[a] = i[e + a];
            a = -1;
            for (var c = Array(e + 1); ++a < e; ) c[a] = i[a];
            return (c[e] = n(l)), o(t, this, c);
          }
        );
      };
    },
    30061: (t, e, n) => {
      var o = n(56560),
        r = n(21275)(o);
      t.exports = r;
    },
    21275: (t) => {
      var e = Date.now;
      t.exports = function (t) {
        var n = 0,
          o = 0;
        return function () {
          var r = e(),
            i = 16 - (r - o);
          if (((o = r), i > 0)) {
            if (++n >= 800) return arguments[0];
          } else n = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    55514: (t, e, n) => {
      var o = n(24523),
        r =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        a = o(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(""),
            t.replace(r, function (t, n, o, r) {
              e.push(o ? r.replace(i, "$1") : n || t);
            }),
            e
          );
        });
      t.exports = a;
    },
    40327: (t, e, n) => {
      var o = n(33448);
      t.exports = function (t) {
        if ("string" == typeof t || o(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -Infinity ? "-0" : e;
      };
    },
    75703: (t) => {
      t.exports = function (t) {
        return function () {
          return t;
        };
      };
    },
    85564: (t, e, n) => {
      var o = n(21078);
      t.exports = function (t) {
        return (null == t ? 0 : t.length) ? o(t, 1) : [];
      };
    },
    79095: (t, e, n) => {
      var o = n(13),
        r = n(222);
      t.exports = function (t, e) {
        return null != t && r(t, e, o);
      };
    },
    6557: (t) => {
      t.exports = function (t) {
        return t;
      };
    },
    88306: (t, e, n) => {
      var o = n(83369);
      function r(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw new TypeError("Expected a function");
        var n = function () {
          var o = arguments,
            r = e ? e.apply(this, o) : o[0],
            i = n.cache;
          if (i.has(r)) return i.get(r);
          var a = t.apply(this, o);
          return (n.cache = i.set(r, a) || i), a;
        };
        return (n.cache = new (r.Cache || o)()), n;
      }
      (r.Cache = o), (t.exports = r);
    },
    78718: (t, e, n) => {
      var o = n(25970),
        r = n(99021)(function (t, e) {
          return null == t ? {} : o(t, e);
        });
      t.exports = r;
    },
    79833: (t, e, n) => {
      var o = n(80531);
      t.exports = function (t) {
        return null == t ? "" : o(t);
      };
    },
    76933: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { default: () => x });
      var o = n(2954),
        r = n(50965),
        i = n(21029),
        a = n(96160),
        u = n(18621),
        l = n(90435),
        c = n(54856),
        p = n(94787),
        s = n(37475),
        v = function (t, e, n, o) {
          return new (n || (n = Promise))(function (r, i) {
            function a(t) {
              try {
                l(o.next(t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              try {
                l(o.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var e;
              t.done
                ? r(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, u);
            }
            l((o = o.apply(t, e || [])).next());
          });
        };
      var d = n(53419),
        f = n(91324),
        h = function (t, e, n, o) {
          return new (n || (n = Promise))(function (r, i) {
            function a(t) {
              try {
                l(o.next(t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              try {
                l(o.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var e;
              t.done
                ? r(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, u);
            }
            l((o = o.apply(t, e || [])).next());
          });
        };
      const g = (0, o.aZ)({
        __name: "equation-editor",
        setup(t) {
          const {
              topicRect: e,
              equationValue: n,
              saveEquation: g,
              openEquationHelp: x,
              generateEquaitonPreview: y,
            } = (() => {
              var t;
              const {
                  createXapUrlByArrayBuffer: e,
                  generateMathJaxSVG: n,
                  executeAction: r,
                  domRectForSelection: i,
                  properties: d,
                  selection: f,
                } = (0, a.nZ)(),
                h =
                  null === (t = f.value) || void 0 === t ? void 0 : t.modelIds,
                g = (0, o.Fl)(() => {
                  var t, e;
                  return null ===
                    (e =
                      null === (t = d.value) || void 0 === t
                        ? void 0
                        : t.equation.value) || void 0 === e
                    ? void 0
                    : e.text;
                });
              return {
                topicRect: (0, o.Fl)(() => {
                  const { height: t, width: e, x: n, y: o } = i.value || {};
                  return { height: t, width: e, left: n, top: o };
                }),
                equationValue: g,
                saveEquation: (t) =>
                  v(void 0, void 0, void 0, function* () {
                    if ("string" != typeof t) return;
                    if (0 === t.length)
                      return void r({
                        name: "mutateTarget:equation",
                        payload: { topicIds: h, equation: null },
                      });
                    if (t === g.value) return;
                    const o = yield n(t),
                      i = a.ZQ.getSVGUri(o),
                      u = yield (0, p.qM)(i, 1, "blob"),
                      l = yield u.arrayBuffer(),
                      c = yield e(l, ".png"),
                      v = URL.createObjectURL(u),
                      { width: d } = yield (0, s.N8)(v);
                    URL.revokeObjectURL(v);
                    const f = {
                      text: t,
                      fallbackImageResourcePath:
                        null == c ? void 0 : c.slice(4),
                      width: d,
                    };
                    r({
                      name: "mutateTarget:equation",
                      payload: { topicIds: h, equation: f },
                    });
                  }),
                openEquationHelp: () => {
                  (0, u.L9)({
                    eventCategory: "Equation",
                    eventAction: "clickEquationHelp",
                  }),
                    l.ZP.fetch(c.lf.GO_EQUATION_HELP, {});
                },
                generateEquaitonPreview: (t) =>
                  v(void 0, void 0, void 0, function* () {
                    if (!t) return;
                    const e = yield n(t);
                    return new DOMParser().parseFromString(e, "image/svg+xml")
                      .firstChild;
                  }),
              };
            })(),
            { T: w } = (0, r.JE)(),
            { setPopoverEditorVisible: b } = (0, i.$)(),
            m = (0, o.iH)(""),
            k = (0, o.iH)(),
            _ = (0, o.Fl)(() =>
              (0, i.$)().zenMode
                ? (0, i.$)().zenModeNightMode
                : "dark" === (0, r.S)().appearance,
            ),
            q = (0, f.Ds)(
              (t) =>
                h(this, void 0, void 0, function* () {
                  if (k.value && "string" == typeof t) {
                    for (; k.value.hasChildNodes(); )
                      k.value.removeChild(k.value.lastChild);
                    if ((t = t.trim())) {
                      const e = window.getComputedStyle(k.value),
                        n = parseFloat(e.height) - 12,
                        o = parseFloat(e.width) - 12,
                        r = yield y(t);
                      let i = 0,
                        a = 0;
                      if (r) {
                        k.value.append(r);
                        const t = window.getComputedStyle(r);
                        (i = parseFloat(t.height)),
                          (a = parseFloat(t.width)),
                          k.value.removeChild(r);
                      }
                      const u = Math.min(n / i, o / a, 1);
                      (r.style.height = i * u + "px"),
                        (r.style.width = a * u + "px"),
                        k.value.append(r);
                    } else {
                      const t = document.createElement("span");
                      t.classList.add("uk-text-bold"),
                        (t.style.opacity = "0.3"),
                        (t.style.fontSize = "13px"),
                        (t.innerText = w("Equation Preview")),
                        k.value.append(t);
                    }
                  }
                }),
              0,
            );
          return (
            (0, o.bv)(() => {
              var t;
              (m.value = null !== (t = n.value) && void 0 !== t ? t : ""),
                q(m.value),
                (0, u.L9)({
                  eventCategory: "Equation",
                  eventAction: "" === m.value ? "newEquation" : "editEquation",
                });
            }),
            (0, o.Jd)(() =>
              h(this, void 0, void 0, function* () {
                var t;
                yield g(m.value);
                "" === (null !== (t = n.value) && void 0 !== t ? t : "") &&
                  (0, u.L9)({
                    eventCategory: "Equation",
                    eventAction: "saveEmptyEquation",
                  });
              }),
            ),
            (0, o.YP)(
              () => (0, r.S)().language,
              () => q(m.value),
            ),
            (0, o.YP)(
              () => m.value,
              () => q(m.value),
            ),
            {
              __sfc: !0,
              topicRect: e,
              equationValue: n,
              saveEquation: g,
              openEquationHelp: x,
              generateEquaitonPreview: y,
              $T: w,
              setPopoverEditorVisible: b,
              equation: m,
              previewContainer: k,
              EQUATION_PREVIEW_PADDING: 6,
              isDarkMode: _,
              handleUpdatePreview: q,
              handleKeydown: (t) => {
                "Tab" === t.code && (t.preventDefault(), t.stopPropagation());
              },
              close: () =>
                h(this, void 0, void 0, function* () {
                  "equation" === (0, i.$)().popoverEditorVisible && b("");
                }),
              TopicPopoverContainer: d.Z,
            }
          );
        },
      });
      n(85760);
      const x = (0, n(51900).Z)(
        g,
        function () {
          var t = this,
            e = t._self._c,
            n = t._self._setupProxy;
          return e(
            n.TopicPopoverContainer,
            {
              attrs: {
                "popover-width": 394,
                "popover-height": 280,
                "topic-height": n.topicRect.height,
                "topic-width": n.topicRect.width,
                "topic-left": n.topicRect.left,
                "topic-top": n.topicRect.top,
              },
              on: { "popover-close": n.close },
            },
            [
              e(
                "div",
                {
                  staticClass:
                    "uk-padding uk-flex uk-flex-column uk-flex-middle uk-height-1-1",
                },
                [
                  e(
                    "div",
                    {
                      staticClass:
                        "uk-flex uk-flex-between uk-width-1-1 uk-flex-middle",
                      staticStyle: { "margin-bottom": "12px" },
                    },
                    [
                      e(
                        "span",
                        {
                          staticClass: "uk-text-bold uk-margin-remove-bottom",
                          staticStyle: {
                            "font-size": "14px",
                            "line-height": "14px",
                          },
                        },
                        [
                          t._v(
                            "\n        " + t._s(n.$T("Equation")) + "\n      ",
                          ),
                        ],
                      ),
                      t._v(" "),
                      e("span", {
                        staticClass:
                          "equation-help uk-flex-no-shrink uk-flex-no-grow",
                        staticStyle: { outline: "none" },
                        attrs: {
                          tabindex: "-1",
                          "uk-icon": "icon: question; ratio: 1.1",
                        },
                        on: { click: n.openEquationHelp },
                      }),
                    ],
                  ),
                  t._v(" "),
                  e("div", { staticClass: "uk-height-expand uk-width-1-1" }, [
                    e("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: n.equation,
                          expression: "equation",
                        },
                      ],
                      staticClass:
                        "uk-box-shadow-none uk-textarea uk-width-1-1 uk-height-1-1 uk-padding-remove",
                      attrs: {
                        autofocus: "",
                        spellcheck: "false",
                        placeholder: n.$T("Type or paste LaTeX"),
                      },
                      domProps: { value: n.equation },
                      on: {
                        keydown: n.handleKeydown,
                        input: function (t) {
                          t.target.composing || (n.equation = t.target.value);
                        },
                      },
                    }),
                    t._v(" "),
                    e("div", {
                      ref: "previewContainer",
                      staticClass:
                        "preview-container uk-flex uk-flex-center uk-flex-middle",
                      style: {
                        "background-color": n.isDarkMode
                          ? "rgba(255,255,255, .1)"
                          : "rgba(0,0,0, .02)",
                        fill: n.isDarkMode ? "white" : "black",
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
        "923cbfb8",
        null,
      ).exports;
    },
    53419: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => c });
      var o = n(2954),
        r = n(78718),
        i = n.n(r),
        a = n(96160),
        u = function (t, e, n, o) {
          return new (n || (n = Promise))(function (r, i) {
            function a(t) {
              try {
                l(o.next(t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              try {
                l(o.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var e;
              t.done
                ? r(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, u);
            }
            l((o = o.apply(t, e || [])).next());
          });
        };
      const l = (0, o.aZ)({
        __name: "topic-popover-container",
        props: {
          topicHeight: null,
          topicWidth: null,
          topicLeft: null,
          topicTop: null,
          popoverWidth: null,
          popoverHeight: null,
          viewPortPadding: null,
          autoShowOnMounted: null,
        },
        emits: ["popover-close"],
        setup(t, { emit: e }) {
          const n = t,
            r = (0, o.FN)(),
            l = (0, o.iH)(null),
            c = (0, o.Fl)(() => {
              const { viewPortPadding: t } = n;
              return void 0 === t ? 16 : t;
            }),
            p = (0, o.Fl)(() => {
              const { autoShowOnMounted: t } = n;
              return void 0 === t || t;
            }),
            s = (0, o.Fl)(() => ({
              top: n.topicTop + "px",
              left: n.topicLeft + "px",
              width: n.topicWidth + "px",
              height: n.topicHeight + "px",
            })),
            v = (t) => {
              const e = t.getBoundingClientRect();
              return Object.assign(
                {},
                i()(e, "top", "left", "right", "bottom", "width", "height"),
                { offsetTop: t.offsetTop, offsetLeft: t.offsetLeft },
              );
            },
            d = () => {
              const t = document.querySelector("#editor-container");
              return t ? v(t) : null;
            },
            f = () => {
              const t = d();
              if (!t) return !1;
              const {
                  popoverHeight: e,
                  popoverWidth: o,
                  topicTop: r,
                  topicLeft: i,
                  topicWidth: u,
                  topicHeight: l,
                } = n,
                p = i + d().left,
                s = r + d().top,
                v = t.offsetTop > s,
                f = t.offsetTop + t.height < l + s + e,
                h = p - (t.left + t.offsetLeft) < o / 2 - u / 2,
                g = t.left + t.offsetLeft + t.width < p + u / 2 + o / 2,
                x = l + e > t.height,
                y = u > t.width;
              let w = t.offsetLeft,
                b = t.offsetTop;
              v && (b = s - c.value),
                f && (b = s + l + n.popoverHeight - t.height + c.value),
                x && (b = Math.max(l - t.height, 0) + s + n.popoverHeight);
              const m = Math.max((n.popoverWidth - u) / 2, 0);
              if (
                (h && (w = p - t.left - c.value - m),
                g && (w = p - t.left + u - t.width + m + c.value),
                y && (w = p + m),
                v || f || h || g || x || y)
              ) {
                const { moveViewport: t } = (0, a.nZ)();
                return t(w, b), !0;
              }
              return !0;
            },
            h = () =>
              u(this, void 0, void 0, function* () {
                if (!(yield f())) return g(!1);
                g(!0);
              }),
            g = (t) => {
              setTimeout(() => {
                r.proxy.$withUIKit((e) => {
                  const n = e.pop(l.value);
                  n && (t ? n.show() : n.hide());
                });
              }, 50);
            };
          return (
            (0, o.bv)(() => {
              p.value && h(),
                (0, o.Y3)(() => {
                  r.proxy.$withUIKit((t) => {
                    t.util.on(l.value, "hidden", () => {
                      e("popover-close");
                    });
                  });
                });
            }),
            {
              __sfc: !0,
              props: n,
              emits: e,
              vm: r,
              popoverEl: l,
              viewPortPadding: c,
              isAutoShowOnMounted: p,
              topicRectStyle: s,
              getElementRect: v,
              getWindowBounds: d,
              moveViewport: f,
              showPopover: h,
              _togglePopover: g,
            }
          );
        },
      });
      n(19455);
      const c = (0, n(51900).Z)(
        l,
        function () {
          var t = this,
            e = t._self._c;
          return e(
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
            },
            [
              e("div", {
                staticClass: "uk-position-absolute",
                style: t._self._setupProxy.topicRectStyle,
              }),
              t._v(" "),
              e(
                "div",
                {
                  ref: "popoverEl",
                  style: {
                    width: t.popoverWidth + "px",
                    height: t.popoverHeight + "px" ?? "auto",
                  },
                  attrs: {
                    "uk-popover": "",
                    "data-cls-overlay": "topic-popover-overlay",
                  },
                },
                [t._t("default")],
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
    },
    85760: (t, e, n) => {
      var o = n(27071);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[t.id, o, ""]]),
        o.locals && (t.exports = o.locals);
      (0, n(45346).Z)("53276064", o, !0, {});
    },
    19455: (t, e, n) => {
      var o = n(10454);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[t.id, o, ""]]),
        o.locals && (t.exports = o.locals);
      (0, n(45346).Z)("b6d891a8", o, !0, {});
    },
  },
]);
