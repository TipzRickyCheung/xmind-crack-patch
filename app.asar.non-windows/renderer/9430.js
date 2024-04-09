(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [9430],
  {
    82554: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => i });
      var n = o(23645),
        r = o.n(n)()(function (t) {
          return t[1];
        });
      r.push([
        t.id,
        ".label-editor-textarea {\n  border: none !important;\n  box-shadow: none !important;\n  background-color: transparent !important;\n}\n.uk-lang-it-IT .auto-sort-label {\n  font-size: 11px;\n}\n",
        "",
      ]);
      const i = r;
    },
    10454: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => i });
      var n = o(23645),
        r = o.n(n)()(function (t) {
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
      t.exports = function (t, e, o) {
        switch (o.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, o[0]);
          case 2:
            return t.call(e, o[0], o[1]);
          case 3:
            return t.call(e, o[0], o[1], o[2]);
        }
        return t.apply(e, o);
      };
    },
    29932: (t) => {
      t.exports = function (t, e) {
        for (var o = -1, n = null == t ? 0 : t.length, r = Array(n); ++o < n; )
          r[o] = e(t[o], o, t);
        return r;
      };
    },
    34865: (t, e, o) => {
      var n = o(89465),
        r = o(77813),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, o) {
        var l = t[e];
        (i.call(t, e) && r(l, o) && (void 0 !== o || e in t)) || n(t, e, o);
      };
    },
    89465: (t, e, o) => {
      var n = o(38777);
      t.exports = function (t, e, o) {
        "__proto__" == e && n
          ? n(t, e, {
              configurable: !0,
              enumerable: !0,
              value: o,
              writable: !0,
            })
          : (t[e] = o);
      };
    },
    21078: (t, e, o) => {
      var n = o(62488),
        r = o(37285);
      t.exports = function t(e, o, i, l, a) {
        var u = -1,
          s = e.length;
        for (i || (i = r), a || (a = []); ++u < s; ) {
          var c = e[u];
          o > 0 && i(c)
            ? o > 1
              ? t(c, o - 1, i, l, a)
              : n(a, c)
            : l || (a[a.length] = c);
        }
        return a;
      };
    },
    97786: (t, e, o) => {
      var n = o(71811),
        r = o(40327);
      t.exports = function (t, e) {
        for (var o = 0, i = (e = n(e, t)).length; null != t && o < i; )
          t = t[r(e[o++])];
        return o && o == i ? t : void 0;
      };
    },
    13: (t) => {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    25970: (t, e, o) => {
      var n = o(63012),
        r = o(79095);
      t.exports = function (t, e) {
        return n(t, e, function (e, o) {
          return r(t, o);
        });
      };
    },
    63012: (t, e, o) => {
      var n = o(97786),
        r = o(10611),
        i = o(71811);
      t.exports = function (t, e, o) {
        for (var l = -1, a = e.length, u = {}; ++l < a; ) {
          var s = e[l],
            c = n(t, s);
          o(c, s) && r(u, i(s, t), c);
        }
        return u;
      };
    },
    10611: (t, e, o) => {
      var n = o(34865),
        r = o(71811),
        i = o(65776),
        l = o(13218),
        a = o(40327);
      t.exports = function (t, e, o, u) {
        if (!l(t)) return t;
        for (
          var s = -1, c = (e = r(e, t)).length, p = c - 1, d = t;
          null != d && ++s < c;

        ) {
          var v = a(e[s]),
            f = o;
          if ("__proto__" === v || "constructor" === v || "prototype" === v)
            return t;
          if (s != p) {
            var h = d[v];
            void 0 === (f = u ? u(h, v, d) : void 0) &&
              (f = l(h) ? h : i(e[s + 1]) ? [] : {});
          }
          n(d, v, f), (d = d[v]);
        }
        return t;
      };
    },
    56560: (t, e, o) => {
      var n = o(75703),
        r = o(38777),
        i = o(6557),
        l = r
          ? function (t, e) {
              return r(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: n(e),
                writable: !0,
              });
            }
          : i;
      t.exports = l;
    },
    80531: (t, e, o) => {
      var n = o(62705),
        r = o(29932),
        i = o(1469),
        l = o(33448),
        a = n ? n.prototype : void 0,
        u = a ? a.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return r(e, t) + "";
        if (l(e)) return u ? u.call(e) : "";
        var o = e + "";
        return "0" == o && 1 / e == -Infinity ? "-0" : o;
      };
    },
    71811: (t, e, o) => {
      var n = o(1469),
        r = o(15403),
        i = o(55514),
        l = o(79833);
      t.exports = function (t, e) {
        return n(t) ? t : r(t, e) ? [t] : i(l(t));
      };
    },
    38777: (t, e, o) => {
      var n = o(10852),
        r = (function () {
          try {
            var t = n(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        })();
      t.exports = r;
    },
    99021: (t, e, o) => {
      var n = o(85564),
        r = o(45357),
        i = o(30061);
      t.exports = function (t) {
        return i(r(t, void 0, n), t + "");
      };
    },
    222: (t, e, o) => {
      var n = o(71811),
        r = o(35694),
        i = o(1469),
        l = o(65776),
        a = o(41780),
        u = o(40327);
      t.exports = function (t, e, o) {
        for (var s = -1, c = (e = n(e, t)).length, p = !1; ++s < c; ) {
          var d = u(e[s]);
          if (!(p = null != t && o(t, d))) break;
          t = t[d];
        }
        return p || ++s != c
          ? p
          : !!(c = null == t ? 0 : t.length) &&
              a(c) &&
              l(d, c) &&
              (i(t) || r(t));
      };
    },
    37285: (t, e, o) => {
      var n = o(62705),
        r = o(35694),
        i = o(1469),
        l = n ? n.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return i(t) || r(t) || !!(l && t && t[l]);
      };
    },
    15403: (t, e, o) => {
      var n = o(1469),
        r = o(33448),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        l = /^\w*$/;
      t.exports = function (t, e) {
        if (n(t)) return !1;
        var o = typeof t;
        return (
          !(
            "number" != o &&
            "symbol" != o &&
            "boolean" != o &&
            null != t &&
            !r(t)
          ) ||
          l.test(t) ||
          !i.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    24523: (t, e, o) => {
      var n = o(88306);
      t.exports = function (t) {
        var e = n(t, function (t) {
            return 500 === o.size && o.clear(), t;
          }),
          o = e.cache;
        return e;
      };
    },
    45357: (t, e, o) => {
      var n = o(96874),
        r = Math.max;
      t.exports = function (t, e, o) {
        return (
          (e = r(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var i = arguments, l = -1, a = r(i.length - e, 0), u = Array(a);
              ++l < a;

            )
              u[l] = i[e + l];
            l = -1;
            for (var s = Array(e + 1); ++l < e; ) s[l] = i[l];
            return (s[e] = o(u)), n(t, this, s);
          }
        );
      };
    },
    30061: (t, e, o) => {
      var n = o(56560),
        r = o(21275)(n);
      t.exports = r;
    },
    21275: (t) => {
      var e = Date.now;
      t.exports = function (t) {
        var o = 0,
          n = 0;
        return function () {
          var r = e(),
            i = 16 - (r - n);
          if (((n = r), i > 0)) {
            if (++o >= 800) return arguments[0];
          } else o = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    55514: (t, e, o) => {
      var n = o(24523),
        r =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        l = n(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(""),
            t.replace(r, function (t, o, n, r) {
              e.push(n ? r.replace(i, "$1") : o || t);
            }),
            e
          );
        });
      t.exports = l;
    },
    40327: (t, e, o) => {
      var n = o(33448);
      t.exports = function (t) {
        if ("string" == typeof t || n(t)) return t;
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
    85564: (t, e, o) => {
      var n = o(21078);
      t.exports = function (t) {
        return (null == t ? 0 : t.length) ? n(t, 1) : [];
      };
    },
    79095: (t, e, o) => {
      var n = o(13),
        r = o(222);
      t.exports = function (t, e) {
        return null != t && r(t, e, n);
      };
    },
    6557: (t) => {
      t.exports = function (t) {
        return t;
      };
    },
    88306: (t, e, o) => {
      var n = o(83369);
      function r(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw new TypeError("Expected a function");
        var o = function () {
          var n = arguments,
            r = e ? e.apply(this, n) : n[0],
            i = o.cache;
          if (i.has(r)) return i.get(r);
          var l = t.apply(this, n);
          return (o.cache = i.set(r, l) || i), l;
        };
        return (o.cache = new (r.Cache || n)()), o;
      }
      (r.Cache = n), (t.exports = r);
    },
    78718: (t, e, o) => {
      var n = o(25970),
        r = o(99021)(function (t, e) {
          return null == t ? {} : n(t, e);
        });
      t.exports = r;
    },
    79833: (t, e, o) => {
      var n = o(80531);
      t.exports = function (t) {
        return null == t ? "" : n(t);
      };
    },
    9430: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => c });
      var n = o(2954),
        r = o(96160);
      var i = o(21029),
        l = o(53419),
        a = o(18446),
        u = o.n(a);
      const s = (0, n.aZ)({
        __name: "label-editor",
        props: { topicId: null, topicRect: null },
        emits: ["popover-close"],
        setup(t, { emit: e }) {
          const o = t,
            {
              labels: a,
              content: s,
              shouldAutoSortLabels: c,
              topicRect: p,
              mostlyUsedLabels: d,
              updateTopicLabel: v,
              addLabelIntoContent: f,
            } = (() => {
              var t;
              const {
                  syncedProperties: e,
                  activeSheet: o,
                  domRectForSelection: i,
                  executeAction: l,
                  selection: a,
                } = (0, r.nZ)(),
                u = (0, n.Fl)(() => {
                  const {
                    height: t,
                    width: e,
                    x: o,
                    y: n,
                  } = i.value || { height: 0, width: 0, x: 0, y: 0 };
                  return { height: t, width: e, left: o || 0, top: n || 0 };
                }),
                s = (0, n.Fl)(() => {
                  var t;
                  return null === (t = a.value) || void 0 === t
                    ? void 0
                    : t.modelIds;
                }),
                c = (0, n.Fl)(() => {
                  var t, o;
                  return null ===
                    (o =
                      null === (t = e.value) || void 0 === t
                        ? void 0
                        : t.topicLabel) || void 0 === o
                    ? void 0
                    : o.value.labels;
                }),
                p = (0, n.iH)(
                  null === (t = c.value) || void 0 === t
                    ? void 0
                    : t.toString(),
                ),
                d = (0, n.Fl)(() => {
                  var t, o;
                  return (
                    "manual" !==
                    (null ===
                      (o =
                        null === (t = e.value) || void 0 === t
                          ? void 0
                          : t.topicLabel) || void 0 === o
                      ? void 0
                      : o.value.labelSortOrder)
                  );
                }),
                v = (0, n.Fl)(() => r.HG.allLabelsFromSheet(o.value).sort());
              return {
                labels: c,
                content: p,
                shouldAutoSortLabels: d,
                topicRect: u,
                mostlyUsedLabels: v,
                updateTopicLabel: (t, e) => {
                  l({
                    name: "mutateTarget:topicLabel",
                    payload: {
                      topicIds: s.value,
                      labels: t,
                      shouldAutoSortLabels: e,
                    },
                  });
                },
                addLabelIntoContent: (t) => {
                  if (!t) return;
                  const e = p.value.split(/,|，/).filter((t) => !!t);
                  e.push(t), (p.value = e.join(","));
                },
              };
            })(),
            h = (0, n.iH)(c.value),
            { setPopoverEditorVisible: g } = (0, i.$)(),
            m = (0, n.Fl)(() => {
              var t;
              return null !== (t = o.topicRect) && void 0 !== t ? t : p.value;
            }),
            x = {
              inserted: function (t) {
                setTimeout(() => {
                  t.focus();
                }, 100);
              },
            },
            b = (0, n.iH)(null),
            y = (0, n.iH)(!1),
            w = () => {
              const t = s.value
                .replace(/，/g, ",")
                .split(",")
                .map((t) => t.trim())
                .filter((t) => t.length > 0)
                .filter((t, e, o) => o.indexOf(t) === e);
              (u()(t, a.value) && h.value === c.value) || v(t, h.value),
                "label" === (0, i.$)().popoverEditorVisible && g(""),
                e("popover-close", { topicId: o.topicId, labels: t });
            },
            k = (0, n.Fl)(() => d.value.length);
          return {
            __sfc: !0,
            props: o,
            emit: e,
            labels: a,
            content: s,
            shouldAutoSortLabels: c,
            topicRect: p,
            mostlyUsedLabels: d,
            updateTopicLabel: v,
            addLabelIntoContent: f,
            isChecked: h,
            onAutoSortChange: (t) => (h.value = t),
            setPopoverEditorVisible: g,
            computedTopicRect: m,
            vFocus: x,
            labelTextarea: b,
            isInputMethodInputting: y,
            handleCompositionstart: () => {
              y.value = !0;
            },
            handleCompositionend: () => {
              y.value = !1;
            },
            saveAndClose: w,
            handleKeydown: (t) => {
              if ("Enter" === t.code) {
                if ((t.preventDefault(), t.stopPropagation(), y.value)) return;
                w();
              }
              "Tab" === t.code && (t.preventDefault(), t.stopPropagation());
            },
            handleClickLabel: (t) => {
              f(t),
                setTimeout(() => {
                  const t = b.value.value.length;
                  b.value.focus(), b.value.setSelectionRange(t, t);
                });
            },
            mostlyUsedLabelsVisible: k,
            TopicPopoverContainer: l.Z,
          };
        },
      });
      o(72379);
      const c = (0, o(51900).Z)(
        s,
        function () {
          var t = this,
            e = t._self._c,
            o = t._self._setupProxy;
          return e(
            o.TopicPopoverContainer,
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: 0 !== o.computedTopicRect.width,
                  expression: "computedTopicRect.width !== 0",
                },
              ],
              attrs: {
                "topic-left": o.computedTopicRect.left,
                "topic-height": o.computedTopicRect.height,
                "topic-top": o.computedTopicRect.top,
                "topic-width": o.computedTopicRect.width,
                "popover-width": 280,
                "popover-height": o.mostlyUsedLabelsVisible ? 223 : 148,
              },
              on: { "popover-close": o.saveAndClose },
            },
            [
              e(
                "div",
                {
                  staticClass:
                    "uk-flex uk-flex-column uk-flex-middle uk-height-1-1",
                },
                [
                  e(
                    "div",
                    {
                      staticClass:
                        "uk-padding uk-flex uk-flex-column uk-flex-middle uk-width-1-1",
                      staticStyle: { height: "148px" },
                    },
                    [
                      e(
                        "div",
                        {
                          staticClass:
                            "uk-flex uk-flex-between uk-flex-middle uk-width-1-1 uk-margin-small-bottom",
                        },
                        [
                          e(
                            "span",
                            {
                              staticClass: "uk-text-bold",
                              staticStyle: {
                                "font-size": "15px",
                                "line-height": "22px",
                              },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$T("Label")) +
                                  "\n        ",
                              ),
                            ],
                          ),
                          t._v(" "),
                          e(
                            "div",
                            { staticClass: "uk-flex uk-flex-middle" },
                            [
                              e(
                                "span",
                                {
                                  staticClass: "auto-sort-label",
                                  staticStyle: { "line-height": "16px" },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.$T("Auto Sort")) +
                                      "\n          ",
                                  ),
                                ],
                              ),
                              t._v(" "),
                              e("uk-switch", {
                                staticClass: "uk-margin-small-left",
                                attrs: { value: o.isChecked },
                                on: { change: o.onAutoSortChange },
                              }),
                            ],
                            1,
                          ),
                        ],
                      ),
                      t._v(" "),
                      e(
                        "div",
                        { staticClass: "uk-height-expand uk-width-1-1" },
                        [
                          e("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: o.content,
                                expression: "content",
                              },
                              { name: "focus", rawName: "v-focus" },
                            ],
                            ref: "labelTextarea",
                            staticClass:
                              "uk-textarea uk-width-1-1 uk-height-1-1 uk-padding-remove uk-margin-remove label-editor-textarea",
                            attrs: {
                              placeholder: o.labels?.length
                                ? ""
                                : t.$T("Enter labels, separated by commas"),
                            },
                            domProps: { value: o.content },
                            on: {
                              compositionstart: o.handleCompositionstart,
                              compositionend: o.handleCompositionend,
                              keydown: o.handleKeydown,
                              input: function (t) {
                                t.target.composing ||
                                  (o.content = t.target.value);
                              },
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                  t._v(" "),
                  o.mostlyUsedLabelsVisible
                    ? [
                        e(
                          "div",
                          {
                            staticClass:
                              "uk-width-1-1 uk-padding uk-padding-remove-vertical",
                          },
                          [
                            e("hr", {
                              staticClass: "uk-separator uk-width-1-1",
                            }),
                          ],
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass:
                              "uk-height-expand uk-width-1-1 uk-mostly-used-labels uk-padding",
                            staticStyle: { "padding-top": "12px" },
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass: "uk-mostly-used-labels-container",
                              },
                              t._l(o.mostlyUsedLabels, function (n) {
                                return e(
                                  "div",
                                  {
                                    key: n,
                                    staticClass: "uk-mostly-used-labels-item",
                                    on: {
                                      click: function (t) {
                                        return o.handleClickLabel(n);
                                      },
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n            " +
                                        t._s(n) +
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
                    : t._e(),
                ],
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
    53419: (t, e, o) => {
      "use strict";
      o.d(e, { Z: () => s });
      var n = o(2954),
        r = o(78718),
        i = o.n(r),
        l = o(96160),
        a = function (t, e, o, n) {
          return new (o || (o = Promise))(function (r, i) {
            function l(t) {
              try {
                u(n.next(t));
              } catch (t) {
                i(t);
              }
            }
            function a(t) {
              try {
                u(n.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              var e;
              t.done
                ? r(t.value)
                : ((e = t.value),
                  e instanceof o
                    ? e
                    : new o(function (t) {
                        t(e);
                      })).then(l, a);
            }
            u((n = n.apply(t, e || [])).next());
          });
        };
      const u = (0, n.aZ)({
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
          const o = t,
            r = (0, n.FN)(),
            u = (0, n.iH)(null),
            s = (0, n.Fl)(() => {
              const { viewPortPadding: t } = o;
              return void 0 === t ? 16 : t;
            }),
            c = (0, n.Fl)(() => {
              const { autoShowOnMounted: t } = o;
              return void 0 === t || t;
            }),
            p = (0, n.Fl)(() => ({
              top: o.topicTop + "px",
              left: o.topicLeft + "px",
              width: o.topicWidth + "px",
              height: o.topicHeight + "px",
            })),
            d = (t) => {
              const e = t.getBoundingClientRect();
              return Object.assign(
                {},
                i()(e, "top", "left", "right", "bottom", "width", "height"),
                { offsetTop: t.offsetTop, offsetLeft: t.offsetLeft },
              );
            },
            v = () => {
              const t = document.querySelector("#editor-container");
              return t ? d(t) : null;
            },
            f = () => {
              const t = v();
              if (!t) return !1;
              const {
                  popoverHeight: e,
                  popoverWidth: n,
                  topicTop: r,
                  topicLeft: i,
                  topicWidth: a,
                  topicHeight: u,
                } = o,
                c = i + v().left,
                p = r + v().top,
                d = t.offsetTop > p,
                f = t.offsetTop + t.height < u + p + e,
                h = c - (t.left + t.offsetLeft) < n / 2 - a / 2,
                g = t.left + t.offsetLeft + t.width < c + a / 2 + n / 2,
                m = u + e > t.height,
                x = a > t.width;
              let b = t.offsetLeft,
                y = t.offsetTop;
              d && (y = p - s.value),
                f && (y = p + u + o.popoverHeight - t.height + s.value),
                m && (y = Math.max(u - t.height, 0) + p + o.popoverHeight);
              const w = Math.max((o.popoverWidth - a) / 2, 0);
              if (
                (h && (b = c - t.left - s.value - w),
                g && (b = c - t.left + a - t.width + w + s.value),
                x && (b = c + w),
                d || f || h || g || m || x)
              ) {
                const { moveViewport: t } = (0, l.nZ)();
                return t(b, y), !0;
              }
              return !0;
            },
            h = () =>
              a(this, void 0, void 0, function* () {
                if (!(yield f())) return g(!1);
                g(!0);
              }),
            g = (t) => {
              setTimeout(() => {
                r.proxy.$withUIKit((e) => {
                  const o = e.pop(u.value);
                  o && (t ? o.show() : o.hide());
                });
              }, 50);
            };
          return (
            (0, n.bv)(() => {
              c.value && h(),
                (0, n.Y3)(() => {
                  r.proxy.$withUIKit((t) => {
                    t.util.on(u.value, "hidden", () => {
                      e("popover-close");
                    });
                  });
                });
            }),
            {
              __sfc: !0,
              props: o,
              emits: e,
              vm: r,
              popoverEl: u,
              viewPortPadding: s,
              isAutoShowOnMounted: c,
              topicRectStyle: p,
              getElementRect: d,
              getWindowBounds: v,
              moveViewport: f,
              showPopover: h,
              _togglePopover: g,
            }
          );
        },
      });
      o(19455);
      const s = (0, o(51900).Z)(
        u,
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
    72379: (t, e, o) => {
      var n = o(82554);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals);
      (0, o(45346).Z)("42ddba32", n, !0, {});
    },
    19455: (t, e, o) => {
      var n = o(10454);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals);
      (0, o(45346).Z)("b6d891a8", n, !0, {});
    },
  },
]);
