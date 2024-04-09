(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [3462],
  {
    10454: (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, { default: () => i });
      var o = r(23645),
        n = r.n(o)()(function (t) {
          return t[1];
        });
      n.push([
        t.id,
        ".topic-popover-overlay {\n  display: block;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1010;\n  background-color: transparent;\n  border: none;\n}\n",
        "",
      ]);
      const i = n;
    },
    96874: (t) => {
      t.exports = function (t, e, r) {
        switch (r.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, r[0]);
          case 2:
            return t.call(e, r[0], r[1]);
          case 3:
            return t.call(e, r[0], r[1], r[2]);
        }
        return t.apply(e, r);
      };
    },
    29932: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, o = null == t ? 0 : t.length, n = Array(o); ++r < o; )
          n[r] = e(t[r], r, t);
        return n;
      };
    },
    34865: (t, e, r) => {
      var o = r(89465),
        n = r(77813),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, r) {
        var u = t[e];
        (i.call(t, e) && n(u, r) && (void 0 !== r || e in t)) || o(t, e, r);
      };
    },
    89465: (t, e, r) => {
      var o = r(38777);
      t.exports = function (t, e, r) {
        "__proto__" == e && o
          ? o(t, e, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (t[e] = r);
      };
    },
    21078: (t, e, r) => {
      var o = r(62488),
        n = r(37285);
      t.exports = function t(e, r, i, u, a) {
        var l = -1,
          c = e.length;
        for (i || (i = n), a || (a = []); ++l < c; ) {
          var p = e[l];
          r > 0 && i(p)
            ? r > 1
              ? t(p, r - 1, i, u, a)
              : o(a, p)
            : u || (a[a.length] = p);
        }
        return a;
      };
    },
    97786: (t, e, r) => {
      var o = r(71811),
        n = r(40327);
      t.exports = function (t, e) {
        for (var r = 0, i = (e = o(e, t)).length; null != t && r < i; )
          t = t[n(e[r++])];
        return r && r == i ? t : void 0;
      };
    },
    13: (t) => {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    25970: (t, e, r) => {
      var o = r(63012),
        n = r(79095);
      t.exports = function (t, e) {
        return o(t, e, function (e, r) {
          return n(t, r);
        });
      };
    },
    63012: (t, e, r) => {
      var o = r(97786),
        n = r(10611),
        i = r(71811);
      t.exports = function (t, e, r) {
        for (var u = -1, a = e.length, l = {}; ++u < a; ) {
          var c = e[u],
            p = o(t, c);
          r(p, c) && n(l, i(c, t), p);
        }
        return l;
      };
    },
    10611: (t, e, r) => {
      var o = r(34865),
        n = r(71811),
        i = r(65776),
        u = r(13218),
        a = r(40327);
      t.exports = function (t, e, r, l) {
        if (!u(t)) return t;
        for (
          var c = -1, p = (e = n(e, t)).length, s = p - 1, d = t;
          null != d && ++c < p;

        ) {
          var f = a(e[c]),
            v = r;
          if ("__proto__" === f || "constructor" === f || "prototype" === f)
            return t;
          if (c != s) {
            var h = d[f];
            void 0 === (v = l ? l(h, f, d) : void 0) &&
              (v = u(h) ? h : i(e[c + 1]) ? [] : {});
          }
          o(d, f, v), (d = d[f]);
        }
        return t;
      };
    },
    56560: (t, e, r) => {
      var o = r(75703),
        n = r(38777),
        i = r(6557),
        u = n
          ? function (t, e) {
              return n(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: o(e),
                writable: !0,
              });
            }
          : i;
      t.exports = u;
    },
    80531: (t, e, r) => {
      var o = r(62705),
        n = r(29932),
        i = r(1469),
        u = r(33448),
        a = o ? o.prototype : void 0,
        l = a ? a.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return n(e, t) + "";
        if (u(e)) return l ? l.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -Infinity ? "-0" : r;
      };
    },
    71811: (t, e, r) => {
      var o = r(1469),
        n = r(15403),
        i = r(55514),
        u = r(79833);
      t.exports = function (t, e) {
        return o(t) ? t : n(t, e) ? [t] : i(u(t));
      };
    },
    38777: (t, e, r) => {
      var o = r(10852),
        n = (function () {
          try {
            var t = o(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        })();
      t.exports = n;
    },
    99021: (t, e, r) => {
      var o = r(85564),
        n = r(45357),
        i = r(30061);
      t.exports = function (t) {
        return i(n(t, void 0, o), t + "");
      };
    },
    222: (t, e, r) => {
      var o = r(71811),
        n = r(35694),
        i = r(1469),
        u = r(65776),
        a = r(41780),
        l = r(40327);
      t.exports = function (t, e, r) {
        for (var c = -1, p = (e = o(e, t)).length, s = !1; ++c < p; ) {
          var d = l(e[c]);
          if (!(s = null != t && r(t, d))) break;
          t = t[d];
        }
        return s || ++c != p
          ? s
          : !!(p = null == t ? 0 : t.length) &&
              a(p) &&
              u(d, p) &&
              (i(t) || n(t));
      };
    },
    37285: (t, e, r) => {
      var o = r(62705),
        n = r(35694),
        i = r(1469),
        u = o ? o.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return i(t) || n(t) || !!(u && t && t[u]);
      };
    },
    15403: (t, e, r) => {
      var o = r(1469),
        n = r(33448),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        u = /^\w*$/;
      t.exports = function (t, e) {
        if (o(t)) return !1;
        var r = typeof t;
        return (
          !(
            "number" != r &&
            "symbol" != r &&
            "boolean" != r &&
            null != t &&
            !n(t)
          ) ||
          u.test(t) ||
          !i.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    24523: (t, e, r) => {
      var o = r(88306);
      t.exports = function (t) {
        var e = o(t, function (t) {
            return 500 === r.size && r.clear(), t;
          }),
          r = e.cache;
        return e;
      };
    },
    45357: (t, e, r) => {
      var o = r(96874),
        n = Math.max;
      t.exports = function (t, e, r) {
        return (
          (e = n(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var i = arguments, u = -1, a = n(i.length - e, 0), l = Array(a);
              ++u < a;

            )
              l[u] = i[e + u];
            u = -1;
            for (var c = Array(e + 1); ++u < e; ) c[u] = i[u];
            return (c[e] = r(l)), o(t, this, c);
          }
        );
      };
    },
    30061: (t, e, r) => {
      var o = r(56560),
        n = r(21275)(o);
      t.exports = n;
    },
    21275: (t) => {
      var e = Date.now;
      t.exports = function (t) {
        var r = 0,
          o = 0;
        return function () {
          var n = e(),
            i = 16 - (n - o);
          if (((o = n), i > 0)) {
            if (++r >= 800) return arguments[0];
          } else r = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    55514: (t, e, r) => {
      var o = r(24523),
        n =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        u = o(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(""),
            t.replace(n, function (t, r, o, n) {
              e.push(o ? n.replace(i, "$1") : r || t);
            }),
            e
          );
        });
      t.exports = u;
    },
    40327: (t, e, r) => {
      var o = r(33448);
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
    85564: (t, e, r) => {
      var o = r(21078);
      t.exports = function (t) {
        return (null == t ? 0 : t.length) ? o(t, 1) : [];
      };
    },
    79095: (t, e, r) => {
      var o = r(13),
        n = r(222);
      t.exports = function (t, e) {
        return null != t && n(t, e, o);
      };
    },
    6557: (t) => {
      t.exports = function (t) {
        return t;
      };
    },
    88306: (t, e, r) => {
      var o = r(83369);
      function n(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw new TypeError("Expected a function");
        var r = function () {
          var o = arguments,
            n = e ? e.apply(this, o) : o[0],
            i = r.cache;
          if (i.has(n)) return i.get(n);
          var u = t.apply(this, o);
          return (r.cache = i.set(n, u) || i), u;
        };
        return (r.cache = new (n.Cache || o)()), r;
      }
      (n.Cache = o), (t.exports = n);
    },
    78718: (t, e, r) => {
      var o = r(25970),
        n = r(99021)(function (t, e) {
          return null == t ? {} : o(t, e);
        });
      t.exports = n;
    },
    79833: (t, e, r) => {
      var o = r(80531);
      t.exports = function (t) {
        return null == t ? "" : o(t);
      };
    },
    3462: (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, { default: () => c });
      var o = r(2954),
        n = r(96160),
        i = r(76893),
        u = r(21029);
      var a = r(53419);
      const l = (0, o.aZ)({
        __name: "marker-editor",
        setup(t) {
          const {
              topicRect: e,
              computedBounds: r,
              markerResources: l,
              close: c,
              changeMarker: p,
              deleteMarker: s,
            } = (() => {
              const {
                  domRectForSelection: t,
                  markerModule: e,
                  executeMutationAction: r,
                } = (0, n.nZ)(),
                { getMarkerGroupById: a, getMarkerInfoById: l } = e,
                { updateSelectedMarkerId: c } = (0, i.E)(),
                { setPopoverEditorVisible: p } = (0, u.$)(),
                s = (0, o.Fl)(() => {
                  const t = e.getMarkerInfoById((0, i.E)().selectedMarkerId);
                  if (t) {
                    const e = t.groupId,
                      r = a(e);
                    return r
                      ? r.markerIds
                          .map((t) => {
                            const { imageSrc: e, id: r, hidden: o } = l(t);
                            if (!o)
                              return (
                                e.split("\\").join("/"), { id: r, path: e }
                              );
                          })
                          .filter((t) => !!t)
                      : [];
                  }
                }),
                d = (0, o.Fl)(() => {
                  const t = s.value.length;
                  return t < 8
                    ? { width: 24 * (t + 1) + 31, height: 40 }
                    : { width: 186, height: 24 * Math.ceil(t / 7) + 54 };
                }),
                f = () => {
                  c(""), p("");
                };
              return {
                close: f,
                changeMarker: (t) => {
                  t != (0, i.E)().selectedMarkerId &&
                    r({ name: "mutate:addMarker", inputValue: t }),
                    f();
                },
                deleteMarker: () => {
                  const t = {
                    name: "mutate:removeMarker",
                    inputValue: (0, i.E)().selectedMarkerId,
                  };
                  r(t), f();
                },
                computedBounds: d,
                markerResources: s,
                topicRect: t,
              };
            })(),
            d = (0, o.Fl)(() =>
              l.value.length > 7
                ? "uk-flex-column uk-flex-center uk-separator"
                : "uk-flex-row uk-flex-middle uk-separator-vertical",
            ),
            f = (0, o.Fl)(() =>
              l.value.length > 7
                ? "uk-padding-small uk-padding-remove-horizontal uk-padding-remove-top"
                : "uk-padding-small uk-padding-remove-vertical uk-padding-remove-left",
            ),
            v = (0, o.Fl)(() =>
              l.value.length > 7
                ? "uk-padding-xsmall uk-padding-remove-horizontal uk-padding-remove-bottom uk-flex uk-flex-column uk-flex-center"
                : "uk-padding-xsmall uk-padding-remove-vertical uk-padding-remove-right",
            );
          return {
            __sfc: !0,
            topicRect: e,
            computedBounds: r,
            markerResources: l,
            close: c,
            changeMarker: p,
            deleteMarker: s,
            containerStyle: d,
            markersPadding: f,
            deleteButtonPadding: v,
            handleKeydown: (t) => {
              "Tab" === t.code && (t.preventDefault(), t.stopPropagation());
            },
            TopicPopoverContainer: a.Z,
          };
        },
      });
      const c = (0, r(51900).Z)(
        l,
        function () {
          var t = this,
            e = t._self._c,
            r = t._self._setupProxy;
          return e(
            r.TopicPopoverContainer,
            {
              attrs: {
                "popover-width": r.computedBounds.width,
                "popover-height": r.computedBounds.height,
                "topic-width": r.topicRect.width,
                "topic-height": r.topicRect.height,
                "topic-left": r.topicRect.x,
                "topic-top": r.topicRect.y,
              },
              on: { "popover-close": r.close },
            },
            [
              e(
                "div",
                {
                  staticClass:
                    "uk-flex uk-flex-wrap uk-padding-small uk-child-separator",
                  class: r.containerStyle,
                  on: { keydown: r.handleKeydown },
                },
                [
                  e(
                    "div",
                    {
                      staticClass:
                        "uk-flex uk-flex-row uk-flex-middle uk-flex-wrap",
                      class: r.markersPadding,
                    },
                    t._l(r.markerResources, function ({ id: t, path: o }) {
                      return e(
                        "button",
                        {
                          key: t,
                          staticClass:
                            "uk-padding-xsmall uk-button uk-button-tile uk-button-icon uk-button-small",
                          on: {
                            mousedown: function (t) {
                              t.preventDefault();
                            },
                            click: function (e) {
                              return r.changeMarker(t);
                            },
                          },
                        },
                        [
                          e("img", {
                            staticClass:
                              "uk-background-center-center uk-background-norepeat",
                            staticStyle: { height: "16px", width: "16px" },
                            attrs: { draggable: "false", "uk-img": "", src: o },
                          }),
                        ],
                      );
                    }),
                    0,
                  ),
                  t._v(" "),
                  e("div", { class: r.deleteButtonPadding }, [
                    e("button", {
                      staticClass:
                        "uk-background-center-center uk-background-norepeat uk-button uk-button-tile uk-button-icon uk-icon uk-button-small uk-padding-xsmall",
                      attrs: { "uk-icon": "icon: trash" },
                      on: { click: r.deleteMarker },
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
        null,
        null,
      ).exports;
    },
    53419: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => c });
      var o = r(2954),
        n = r(78718),
        i = r.n(n),
        u = r(96160),
        a = function (t, e, r, o) {
          return new (r || (r = Promise))(function (n, i) {
            function u(t) {
              try {
                l(o.next(t));
              } catch (t) {
                i(t);
              }
            }
            function a(t) {
              try {
                l(o.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var e;
              t.done
                ? n(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(u, a);
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
          const r = t,
            n = (0, o.FN)(),
            l = (0, o.iH)(null),
            c = (0, o.Fl)(() => {
              const { viewPortPadding: t } = r;
              return void 0 === t ? 16 : t;
            }),
            p = (0, o.Fl)(() => {
              const { autoShowOnMounted: t } = r;
              return void 0 === t || t;
            }),
            s = (0, o.Fl)(() => ({
              top: r.topicTop + "px",
              left: r.topicLeft + "px",
              width: r.topicWidth + "px",
              height: r.topicHeight + "px",
            })),
            d = (t) => {
              const e = t.getBoundingClientRect();
              return Object.assign(
                {},
                i()(e, "top", "left", "right", "bottom", "width", "height"),
                { offsetTop: t.offsetTop, offsetLeft: t.offsetLeft },
              );
            },
            f = () => {
              const t = document.querySelector("#editor-container");
              return t ? d(t) : null;
            },
            v = () => {
              const t = f();
              if (!t) return !1;
              const {
                  popoverHeight: e,
                  popoverWidth: o,
                  topicTop: n,
                  topicLeft: i,
                  topicWidth: a,
                  topicHeight: l,
                } = r,
                p = i + f().left,
                s = n + f().top,
                d = t.offsetTop > s,
                v = t.offsetTop + t.height < l + s + e,
                h = p - (t.left + t.offsetLeft) < o / 2 - a / 2,
                g = t.left + t.offsetLeft + t.width < p + a / 2 + o / 2,
                k = l + e > t.height,
                x = a > t.width;
              let m = t.offsetLeft,
                y = t.offsetTop;
              d && (y = s - c.value),
                v && (y = s + l + r.popoverHeight - t.height + c.value),
                k && (y = Math.max(l - t.height, 0) + s + r.popoverHeight);
              const w = Math.max((r.popoverWidth - a) / 2, 0);
              if (
                (h && (m = p - t.left - c.value - w),
                g && (m = p - t.left + a - t.width + w + c.value),
                x && (m = p + w),
                d || v || h || g || k || x)
              ) {
                const { moveViewport: t } = (0, u.nZ)();
                return t(m, y), !0;
              }
              return !0;
            },
            h = () =>
              a(this, void 0, void 0, function* () {
                if (!(yield v())) return g(!1);
                g(!0);
              }),
            g = (t) => {
              setTimeout(() => {
                n.proxy.$withUIKit((e) => {
                  const r = e.pop(l.value);
                  r && (t ? r.show() : r.hide());
                });
              }, 50);
            };
          return (
            (0, o.bv)(() => {
              p.value && h(),
                (0, o.Y3)(() => {
                  n.proxy.$withUIKit((t) => {
                    t.util.on(l.value, "hidden", () => {
                      e("popover-close");
                    });
                  });
                });
            }),
            {
              __sfc: !0,
              props: r,
              emits: e,
              vm: n,
              popoverEl: l,
              viewPortPadding: c,
              isAutoShowOnMounted: p,
              topicRectStyle: s,
              getElementRect: d,
              getWindowBounds: f,
              moveViewport: v,
              showPopover: h,
              _togglePopover: g,
            }
          );
        },
      });
      r(19455);
      const c = (0, r(51900).Z)(
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
    19455: (t, e, r) => {
      var o = r(10454);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[t.id, o, ""]]),
        o.locals && (t.exports = o.locals);
      (0, r(45346).Z)("b6d891a8", o, !0, {});
    },
  },
]);
