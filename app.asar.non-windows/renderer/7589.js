(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [7589, 716],
  {
    46754: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => o });
      var a = n(23645),
        i = n.n(a)()(function (e) {
          return e[1];
        });
      i.push([
        e.id,
        ".uk-text-line-clamp[data-v-06781412] {\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n",
        "",
      ]);
      const o = i;
    },
    63693: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => o });
      var a = n(23645),
        i = n.n(a)()(function (e) {
          return e[1];
        });
      i.push([
        e.id,
        ".lm-select-icon[data-v-e9e14f3a] {\n  visibility: hidden;\n}\n.lm-view-item[data-v-e9e14f3a]:focus {\n  background-color: transparent;\n}\n.lm-view-item:hover .lm-select-icon[data-v-e9e14f3a] {\n  visibility: visible;\n}\n",
        "",
      ]);
      const o = i;
    },
    47443: (e, t, n) => {
      var a = n(42118);
      e.exports = function (e, t) {
        return !!(null == e ? 0 : e.length) && a(e, t, 0) > -1;
      };
    },
    1196: (e) => {
      e.exports = function (e, t, n) {
        for (var a = -1, i = null == e ? 0 : e.length; ++a < i; )
          if (n(t, e[a])) return !0;
        return !1;
      };
    },
    29932: (e) => {
      e.exports = function (e, t) {
        for (var n = -1, a = null == e ? 0 : e.length, i = Array(a); ++n < a; )
          i[n] = t(e[n], n, e);
        return i;
      };
    },
    41848: (e) => {
      e.exports = function (e, t, n, a) {
        for (var i = e.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
          if (t(e[o], o, e)) return o;
        return -1;
      };
    },
    97786: (e, t, n) => {
      var a = n(71811),
        i = n(40327);
      e.exports = function (e, t) {
        for (var n = 0, o = (t = a(t, e)).length; null != e && n < o; )
          e = e[i(t[n++])];
        return n && n == o ? e : void 0;
      };
    },
    13: (e) => {
      e.exports = function (e, t) {
        return null != e && t in Object(e);
      };
    },
    42118: (e, t, n) => {
      var a = n(41848),
        i = n(62722),
        o = n(39375);
      e.exports = function (e, t, n) {
        return t == t ? o(e, t, n) : a(e, i, n);
      };
    },
    2958: (e, t, n) => {
      var a = n(46384),
        i = n(90939);
      e.exports = function (e, t, n, o) {
        var l = n.length,
          s = l,
          r = !o;
        if (null == e) return !s;
        for (e = Object(e); l--; ) {
          var c = n[l];
          if (r && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
        }
        for (; ++l < s; ) {
          var u = (c = n[l])[0],
            d = e[u],
            p = c[1];
          if (r && c[2]) {
            if (void 0 === d && !(u in e)) return !1;
          } else {
            var h = new a();
            if (o) var m = o(d, p, u, e, t, h);
            if (!(void 0 === m ? i(p, d, 3, o, h) : m)) return !1;
          }
        }
        return !0;
      };
    },
    62722: (e) => {
      e.exports = function (e) {
        return e != e;
      };
    },
    67206: (e, t, n) => {
      var a = n(91573),
        i = n(16432),
        o = n(6557),
        l = n(1469),
        s = n(39601);
      e.exports = function (e) {
        return "function" == typeof e
          ? e
          : null == e
            ? o
            : "object" == typeof e
              ? l(e)
                ? i(e[0], e[1])
                : a(e)
              : s(e);
      };
    },
    91573: (e, t, n) => {
      var a = n(2958),
        i = n(1499),
        o = n(42634);
      e.exports = function (e) {
        var t = i(e);
        return 1 == t.length && t[0][2]
          ? o(t[0][0], t[0][1])
          : function (n) {
              return n === e || a(n, e, t);
            };
      };
    },
    16432: (e, t, n) => {
      var a = n(90939),
        i = n(27361),
        o = n(79095),
        l = n(15403),
        s = n(89162),
        r = n(42634),
        c = n(40327);
      e.exports = function (e, t) {
        return l(e) && s(t)
          ? r(c(e), t)
          : function (n) {
              var l = i(n, e);
              return void 0 === l && l === t ? o(n, e) : a(t, l, 3);
            };
      };
    },
    40371: (e) => {
      e.exports = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      };
    },
    79152: (e, t, n) => {
      var a = n(97786);
      e.exports = function (e) {
        return function (t) {
          return a(t, e);
        };
      };
    },
    80531: (e, t, n) => {
      var a = n(62705),
        i = n(29932),
        o = n(1469),
        l = n(33448),
        s = a ? a.prototype : void 0,
        r = s ? s.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (o(t)) return i(t, e) + "";
        if (l(t)) return r ? r.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -Infinity ? "-0" : n;
      };
    },
    45652: (e, t, n) => {
      var a = n(88668),
        i = n(47443),
        o = n(1196),
        l = n(74757),
        s = n(23593),
        r = n(21814);
      e.exports = function (e, t, n) {
        var c = -1,
          u = i,
          d = e.length,
          p = !0,
          h = [],
          m = h;
        if (n) (p = !1), (u = o);
        else if (d >= 200) {
          var v = t ? null : s(e);
          if (v) return r(v);
          (p = !1), (u = l), (m = new a());
        } else m = t ? [] : h;
        e: for (; ++c < d; ) {
          var f = e[c],
            g = t ? t(f) : f;
          if (((f = n || 0 !== f ? f : 0), p && g == g)) {
            for (var k = m.length; k--; ) if (m[k] === g) continue e;
            t && m.push(g), h.push(f);
          } else u(m, g, n) || (m !== h && m.push(g), h.push(f));
        }
        return h;
      };
    },
    71811: (e, t, n) => {
      var a = n(1469),
        i = n(15403),
        o = n(55514),
        l = n(79833);
      e.exports = function (e, t) {
        return a(e) ? e : i(e, t) ? [e] : o(l(e));
      };
    },
    23593: (e, t, n) => {
      var a = n(58525),
        i = n(50308),
        o = n(21814),
        l =
          a && 1 / o(new a([, -0]))[1] == 1 / 0
            ? function (e) {
                return new a(e);
              }
            : i;
      e.exports = l;
    },
    1499: (e, t, n) => {
      var a = n(89162),
        i = n(3674);
      e.exports = function (e) {
        for (var t = i(e), n = t.length; n--; ) {
          var o = t[n],
            l = e[o];
          t[n] = [o, l, a(l)];
        }
        return t;
      };
    },
    222: (e, t, n) => {
      var a = n(71811),
        i = n(35694),
        o = n(1469),
        l = n(65776),
        s = n(41780),
        r = n(40327);
      e.exports = function (e, t, n) {
        for (var c = -1, u = (t = a(t, e)).length, d = !1; ++c < u; ) {
          var p = r(t[c]);
          if (!(d = null != e && n(e, p))) break;
          e = e[p];
        }
        return d || ++c != u
          ? d
          : !!(u = null == e ? 0 : e.length) &&
              s(u) &&
              l(p, u) &&
              (o(e) || i(e));
      };
    },
    15403: (e, t, n) => {
      var a = n(1469),
        i = n(33448),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        l = /^\w*$/;
      e.exports = function (e, t) {
        if (a(e)) return !1;
        var n = typeof e;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != e &&
            !i(e)
          ) ||
          l.test(e) ||
          !o.test(e) ||
          (null != t && e in Object(t))
        );
      };
    },
    89162: (e, t, n) => {
      var a = n(13218);
      e.exports = function (e) {
        return e == e && !a(e);
      };
    },
    42634: (e) => {
      e.exports = function (e, t) {
        return function (n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n));
        };
      };
    },
    24523: (e, t, n) => {
      var a = n(88306);
      e.exports = function (e) {
        var t = a(e, function (e) {
            return 500 === n.size && n.clear(), e;
          }),
          n = t.cache;
        return t;
      };
    },
    39375: (e) => {
      e.exports = function (e, t, n) {
        for (var a = n - 1, i = e.length; ++a < i; ) if (e[a] === t) return a;
        return -1;
      };
    },
    55514: (e, t, n) => {
      var a = n(24523),
        i =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        l = a(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(i, function (e, n, a, i) {
              t.push(a ? i.replace(o, "$1") : n || e);
            }),
            t
          );
        });
      e.exports = l;
    },
    40327: (e, t, n) => {
      var a = n(33448);
      e.exports = function (e) {
        if ("string" == typeof e || a(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Infinity ? "-0" : t;
      };
    },
    27361: (e, t, n) => {
      var a = n(97786);
      e.exports = function (e, t, n) {
        var i = null == e ? void 0 : a(e, t);
        return void 0 === i ? n : i;
      };
    },
    79095: (e, t, n) => {
      var a = n(13),
        i = n(222);
      e.exports = function (e, t) {
        return null != e && i(e, t, a);
      };
    },
    6557: (e) => {
      e.exports = function (e) {
        return e;
      };
    },
    88306: (e, t, n) => {
      var a = n(83369);
      function i(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var n = function () {
          var a = arguments,
            i = t ? t.apply(this, a) : a[0],
            o = n.cache;
          if (o.has(i)) return o.get(i);
          var l = e.apply(this, a);
          return (n.cache = o.set(i, l) || o), l;
        };
        return (n.cache = new (i.Cache || a)()), n;
      }
      (i.Cache = a), (e.exports = i);
    },
    50308: (e) => {
      e.exports = function () {};
    },
    39601: (e, t, n) => {
      var a = n(40371),
        i = n(79152),
        o = n(15403),
        l = n(40327);
      e.exports = function (e) {
        return o(e) ? a(l(e)) : i(e);
      };
    },
    79833: (e, t, n) => {
      var a = n(80531);
      e.exports = function (e) {
        return null == e ? "" : a(e);
      };
    },
    45578: (e, t, n) => {
      var a = n(67206),
        i = n(45652);
      e.exports = function (e, t) {
        return e && e.length ? i(e, a(t, 2)) : [];
      };
    },
    70716: (e, t, n) => {
      "use strict";
      var a;
      n.d(t, { v: () => a, w: () => i }),
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
        })(a || (a = {}));
      const i = {
        [a.MAPUNBALANCED]: "map-unbalance",
        [a.MAPCLOCKWISE]: "map-clockwise",
        [a.LOGICRIGHT]: "logic-right",
        [a.LOGICLEFT]: "logic-left",
        [a.BRACERIGHT]: "brace-right",
        [a.BRACELEFT]: "brace-left",
        [a.TREERIGHT]: "tree-right",
        [a.TREELEFT]: "tree-left",
        [a.ORGCHARTDOWN]: "org-down",
        [a.ORGCHARTUP]: "org-up",
        [a.FISHBONELEFTHEADED]: "fishbone-left",
        [a.FISHBONERIGHTHEADED]: "fishbone-right",
        [a.TIMELINEHORIZONTAL]: "timeline-horizontal",
        [a.TIMELINEVERTICAL]: "timeline-vertical",
        [a.TIMELINETHROUGHVERTICAL]: "timeline-through-vertical",
        [a.TIMELINESIDEDHORIZONTAL]: "timeline-sided-horizontal",
        [a.SPREADSHEET]: "matrix-row",
        [a.COLUMNSPREADSHEET]: "matrix-column",
        [a.TOPTITLETREETABLE]: "tree-table-column",
        [a.TREETABLE]: "tree-table-row",
      };
    },
    60534: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      var a,
        i = n(2954),
        o = n(50965),
        l = n(69931);
      !(function (e) {
        (e.NO_RESULT = "NO_RESULT"),
          (e.NO_RESULT_AS_NETWORK = "NO_RESULT_AS_NETWORK"),
          (e.NO_NOTE = "NO_NOTE"),
          (e.NO_TAG = "NO_TAG"),
          (e.NO_SELECTION = "NO_SELECTION"),
          (e.NO_FORMAT_AVAILABLE = "NO_FORMAT_AVAILABLE"),
          (e.SLIDE_NO_SELECTION = "SLIDE_NO_SELECTION"),
          (e.BULB = "BULB");
      })(a || (a = {}));
      const s = (0, i.aZ)({
        __name: "common-none-panel",
        props: {
          type: { default: "NO_RESULT" },
          sectionStyle: { default: "" },
        },
        setup(e) {
          const t = e,
            n = (e, ...t) => (0, o.JE)().T(e, ...t),
            s = (0, i.Fl)(() => ({
              [a.NO_RESULT]: {
                image: (0, l.ju)(
                  "static/images/empty-panel-icon/no-result.svg",
                ),
                text: n("No results found."),
                spacing: "-1px",
              },
              [a.NO_RESULT_AS_NETWORK]: {
                image: (0, l.ju)(
                  "static/images/empty-panel-icon/no-result.svg",
                ),
                text: n(
                  "Please check your network connection and try again later.",
                ),
                spacing: "-1px",
              },
              [a.NO_NOTE]: {
                image: (0, l.ju)("static/images/empty-panel-icon/no-note.svg"),
                text: n("No note exists."),
                spacing: "-3px",
              },
              [a.NO_TAG]: {
                image: (0, l.ju)("static/images/empty-panel-icon/no-tag.svg"),
                text: n("No marker, label or task exists."),
                spacing: "0px",
              },
              [a.NO_SELECTION]: {
                image: (0, l.ju)(
                  "static/images/empty-panel-icon/empty-selection.svg",
                ),
                text: n("Select an object to format."),
                spacing: "-2px",
              },
              [a.NO_FORMAT_AVAILABLE]: {
                image: (0, l.ju)(
                  "static/images/empty-panel-icon/no-format-available.svg",
                ),
                text: n("This object can't be formatted."),
                spacing: "5px",
              },
              [a.SLIDE_NO_SELECTION]: {
                image: (0, l.ju)(
                  "static/images/empty-panel-icon/slide-empty-selection.svg",
                ),
                text: n("Select a topic to format."),
                spacing: "-2px",
              },
              [a.BULB]: {
                image: (0, l.ju)(
                  "static/images/empty-panel-icon/zen-mode-bulb.svg",
                ),
                text: n(
                  "Please switch to original appearance to enable format options.",
                ),
                spacing: "5px",
              },
            })),
            r = (0, i.Fl)(() => s.value[t.type] || s.value[a.NO_RESULT]);
          return {
            __sfc: !0,
            NonePanelType: a,
            props: t,
            $T: n,
            noneTabs: s,
            noneTab: r,
          };
        },
      });
      const r = (0, n(51900).Z)(
        s,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              staticClass:
                "uk-panel uk-height-expand uk-flex uk-flex-column uk-flex-center uk-width-1-1 uk-common-none-panel",
            },
            [
              t(
                "div",
                { staticClass: "uk-panel", style: e.sectionStyle },
                [
                  t("div", { staticClass: "uk-common-none-panel-icon" }, [
                    t("img", {
                      staticStyle: { height: "60px", width: "60px" },
                      attrs: {
                        draggable: "false",
                        src: n.noneTab.image,
                        "uk-svg": "",
                      },
                    }),
                  ]),
                  e._v(" "),
                  n.noneTab.text
                    ? t(
                        "div",
                        {
                          staticClass: "uk-common-none-panel-text",
                          style: { marginTop: n.noneTab.spacing },
                        },
                        [e._v("\n      " + e._s(n.noneTab.text) + "\n    ")],
                      )
                    : e._e(),
                  e._v(" "),
                  e._t("none-text"),
                ],
                2,
              ),
            ],
          );
        },
        [],
        !1,
        null,
        "fb93b7d2",
        null,
      ).exports;
    },
    42855: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      var a = n(2954),
        i = n(95246),
        o = n(50965),
        l = function (e, t, n, a) {
          return new (n || (n = Promise))(function (i, o) {
            function l(e) {
              try {
                r(a.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                r(a.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function r(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(l, s);
            }
            r((a = a.apply(e, t || [])).next());
          });
        };
      const s = (0, a.aZ)({
        __name: "index",
        props: {
          items: { default: () => [] },
          type: { default: "checkbox" },
          modelValue: { default: () => [] },
          indent: { default: 0 },
          prefix: { default: "" },
          index: null,
          striped: { type: Boolean, default: !1 },
          container: null,
          highPerformanceMode: { type: Boolean, default: !1 },
          width: { default: 240 },
          textWrap: { type: Boolean, default: !1 },
          allowDirectionKey: { type: Boolean, default: !1 },
        },
        emits: ["click", "update:modelValue", "toggleitem"],
        setup(e, { expose: t, emit: n }) {
          const s = e,
            { T: r } = (0, o.JE)(),
            c = (0, i.RS)(),
            u = (e) =>
              c(
                e,
                '13px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, Roboto, "Helvetica Neue", Arial, sans-serif',
              ),
            d = (0, a.iH)({}),
            p = (0, a.iH)(new Set()),
            h = (0, a.iH)({ scrollTop: 0, clientHeight: 100 });
          (0, a.YP)(
            () => s.modelValue,
            (e, t) => {
              null != e && e !== t && (p.value = new Set(e));
            },
          );
          const m = (e) => {
              const t = e.target;
              h.value = {
                scrollTop: t.scrollTop,
                clientHeight: t.clientHeight,
              };
            },
            v = (e = s.container) => {
              e &&
                (h.value = {
                  scrollTop: e.scrollTop,
                  clientHeight: e.clientHeight,
                });
            };
          (0, a.YP)(
            () => s.container,
            (e) => {
              e && (e.addEventListener("scroll", m), v(e));
            },
          );
          const f = () => {
            v();
          };
          (0, a.bv)(() => {
            window.addEventListener("resize", f);
          }),
            (0, a.dl)(() => {
              v();
            }),
            (0, a.Jd)(() => {
              window.removeEventListener("resize", f),
                s.container && s.container.removeEventListener("scroll", m);
            });
          const g = (0, a.Fl)(() => r("<Empty Text>")),
            k = (0, a.Fl)(() => {
              const { items: e, indent: t } = s;
              if (!e || !e.length) return [];
              const n = "$ROOT_VALUE",
                a = [],
                i = (e, t, o = []) => {
                  const l = e.value === n,
                    s = e.unindent ? t : t + 1;
                  if (
                    (l ||
                      a.push({
                        value: e.value,
                        current: e,
                        indent: s,
                        parentValues: o.map((e) => e.value),
                      }),
                    e.items)
                  )
                    for (let t = 0; t < e.items.length; t++) {
                      const n = e.items[t],
                        a = o.concat(l ? [] : e);
                      i(n, s, a);
                    }
                };
              return (
                i({ items: e, value: n }, t || -1),
                a.forEach((e) => {
                  const t = 16 * e.indent + 16,
                    n = s.width - (t + 16),
                    a = u(e.current.text) + 10;
                  if (
                    ((e.containerWidth = n),
                    (e.textWidth = a),
                    (e.singleLineWidth = t + 16 + a),
                    s.textWrap)
                  ) {
                    const t = Math.ceil(a / n);
                    e.allocatedLine = t;
                  } else e.allocatedLine = 1;
                }),
                a
              );
            }),
            x = (0, a.Fl)(() => {
              const { value: e } = k,
                t = (e) => b(e) && T(e),
                n = {},
                a = {},
                i = {};
              for (let t = 0; t < e.length; t++) {
                const a = e[t];
                n[a.value] = a;
              }
              for (let o = 0; o < e.length; o++) {
                const l = e[o],
                  s = l.parentValues.join(",");
                s in i
                  ? (a[l.value] = i[s])
                  : (i[s] = a[l.value] =
                      l.parentValues.every((e) => t(n[e].current)));
              }
              return a;
            }),
            y = (0, a.Fl)(() => {
              let e = k.value.filter((e) => !!x.value[e.value]);
              if (!s.highPerformanceMode) return { items: e, totalHeight: 0 };
              let t = 0,
                n = 0;
              return (
                e.forEach((e) => {
                  var a, i;
                  (e.currentTop = `${t}px`), (e.currentTopNumber = t);
                  const o = 12 + 14.4 * e.allocatedLine,
                    l = [],
                    r =
                      e.textWidth /
                      (null !==
                        (i =
                          null === (a = e.current.text) || void 0 === a
                            ? void 0
                            : a.length) && void 0 !== i
                        ? i
                        : 0),
                    c = Math.floor(e.containerWidth / r);
                  if (s.textWrap)
                    for (let t = 0; t < e.allocatedLine; t++)
                      l.push(e.current.text.slice(t * c, (t + 1) * c));
                  else
                    (n = Math.max(e.singleLineWidth, n)),
                      l.push(e.current.text);
                  (e.textLines = l),
                    1 !== l.length || l[0] || (l[0] = g.value),
                    (t += o);
                }),
                (e = e.filter(
                  (e) =>
                    !(e.currentTopNumber < h.value.scrollTop - 100) &&
                    !(
                      e.currentTopNumber >
                      h.value.scrollTop + h.value.clientHeight + 100
                    ),
                )),
                { items: e, totalHeight: t, commonWidth: n }
              );
            }),
            T = (e) =>
              e.value in d.value
                ? Boolean(d.value[e.value])
                : Boolean(e.expanded),
            b = (e) =>
              "items" in e && Array.isArray(e.items) && e.items.length > 0,
            I = (e) => p.value.has(e.value),
            C = (e) => {
              n("click", e);
            },
            E = (e) => {
              (d.value = Object.assign(Object.assign({}, d.value), {
                [e.value]: !T(e),
              })),
                n("toggleitem", e.value);
            },
            O = (e) =>
              l(this, void 0, void 0, function* () {
                const t = new Set([e.value]);
                (p.value = t), n("update:modelValue", Array.from(t)), C(e);
              }),
            w = (e, t) =>
              l(this, void 0, void 0, function* () {
                t.preventDefault(),
                  t.stopPropagation(),
                  E(e),
                  yield (0, a.Y3)(),
                  t.currentTarget.parentNode.focus();
              }),
            R = (e) => {
              if (!s.allowDirectionKey) return;
              const t = Array.from(p.value);
              let n = null;
              if (t.length) {
                const a = y.value.items.findIndex((e) => e.value === t[0]);
                n = y.value.items[a + ("up" === e ? -1 : 1)];
              } else y.value.items.find((e) => !e.current.slotType);
              if (n && !n.current.slotType) {
                O(n.current);
                const e = document.querySelector(
                  `button[data-value="${n.value}"]`,
                );
                e && e.focus();
              }
            };
          return (
            t({
              emptyText: g,
              currentItems: k,
              visibleItems: x,
              displayData: y,
              isItemExpandable: b,
              isItemExpanded: T,
              isItemChecked: I,
              onToggleClick: w,
              onClickButton: O,
              onKeydown: R,
            }),
            {
              __sfc: !0,
              $T: r,
              getTextWidthFn: c,
              getTextWidth: u,
              props: s,
              emit: n,
              itemExpansions: d,
              internalValue: p,
              scrollInfo: h,
              containerScrollEventHandler: m,
              updateScrollInfoByPropsContainer: v,
              windowResizeHandler: f,
              emptyText: g,
              currentItems: k,
              visibleItems: x,
              displayData: y,
              isItemExpanded: T,
              isItemExpandable: b,
              isItemChecked: I,
              emitClick: C,
              toggleItem: E,
              onClickButton: O,
              onToggleClick: w,
              onKeydown: R,
            }
          );
        },
      });
      const r = (0, n(51900).Z)(
        s,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "ul",
            {
              staticClass: "uk-tree-list",
              class: {
                "uk-list-striped": e.striped,
                "uk-tree-list-solid-background": e.striped,
              },
              staticStyle: { position: "relative" },
              style: {
                height: e.highPerformanceMode
                  ? `${n.displayData.totalHeight}px`
                  : "auto",
                "flex-shrink": 0,
              },
              on: {
                keydown: [
                  function (t) {
                    return !t.type.indexOf("key") &&
                      e._k(t.keyCode, "up", 38, t.key, ["Up", "ArrowUp"])
                      ? null
                      : n.onKeydown("up");
                  },
                  function (t) {
                    return !t.type.indexOf("key") &&
                      e._k(t.keyCode, "down", 40, t.key, ["Down", "ArrowDown"])
                      ? null
                      : n.onKeydown("down");
                  },
                ],
              },
            },
            e._l(n.displayData.items, function (a) {
              return t(
                "li",
                {
                  key: a.value,
                  class: { "uk-checked": n.isItemChecked(a.current) },
                  staticStyle: {
                    "min-width": "100%",
                    "word-break": "break-all",
                  },
                  style: e.highPerformanceMode
                    ? {
                        position: "absolute",
                        top: a.currentTop,
                        width: e.textWrap
                          ? "100%"
                          : `${n.displayData.commonWidth}px`,
                      }
                    : { width: "100%" },
                },
                [
                  e._t(
                    a.current.slotType,
                    function () {
                      return [
                        t(
                          "button",
                          {
                            staticClass: "uk-tree-list-item",
                            class: {
                              "uk-checked": n.isItemChecked(a.current),
                              "uk-focus": n.isItemChecked(a.current),
                            },
                            style: {
                              "padding-left": 16 * a.indent + 16 + "px",
                            },
                            attrs: { type: "button", "data-value": a.value },
                            on: {
                              click: function (e) {
                                return n.onClickButton(a.current);
                              },
                            },
                          },
                          [
                            e.highPerformanceMode
                              ? e._l(a.textLines, function (n, a) {
                                  return t(
                                    "p",
                                    {
                                      key: a,
                                      staticClass:
                                        "uk-text-nowrap uk-margin-remove",
                                    },
                                    [
                                      e._v(
                                        "\n            " +
                                          e._s(n) +
                                          "\n          ",
                                      ),
                                    ],
                                  );
                                })
                              : [
                                  e._v(
                                    "\n          " +
                                      e._s(a.current.text || n.emptyText) +
                                      "\n        ",
                                  ),
                                ],
                          ],
                          2,
                        ),
                      ];
                    },
                    {
                      data: a.current,
                      checked: n.isItemChecked(a.current),
                      index: e.index,
                      offset: 16 * a.indent + 16,
                      onClick: () => n.onClickButton(a.current),
                    },
                  ),
                  e._v(" "),
                  n.isItemExpandable(a.current)
                    ? t("a", {
                        staticClass:
                          "uk-tree-list-toggle uk-icon uk-button uk-tree-list-toggle-icon uk-button-icon",
                        style: {
                          left: 16 * a.indent + "px",
                          opacity:
                            "number" == typeof a.current.triangleOpacity
                              ? a.current.triangleOpacity
                              : 0.5,
                        },
                        attrs: {
                          href: "javascript: void 0;",
                          tabindex: "-1",
                          "uk-icon": n.isItemExpanded(a.current)
                            ? "triangle-down"
                            : "triangle-right",
                        },
                        on: {
                          click: function (e) {
                            return n.onToggleClick(a.current, e);
                          },
                        },
                      })
                    : e._e(),
                ],
                2,
              );
            }),
            0,
          );
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
    },
    7589: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => B });
      var a = n(2954),
        i = n(50965),
        o = n(21029),
        l = n(69537),
        s = n(96160),
        r = n(70716),
        c = n(93980),
        u = function (e, t, n, a) {
          return new (n || (n = Promise))(function (i, o) {
            function l(e) {
              try {
                r(a.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                r(a.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function r(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(l, s);
            }
            r((a = a.apply(e, t || [])).next());
          });
        };
      const d = (
        e = {
          menuOptions: {
            isReplaceMode: !1,
            isCurrentMapMode: !0,
            filters: {
              topic: !0,
              label: !0,
              note: !0,
              link: !0,
              boundary: !0,
              relationship: !0,
            },
          },
        },
      ) => {
        const { T: t } = (0, i.JE)(),
          { handleCommand: n } = (0, i.JX)(),
          {
            activeSheet: l,
            sheets: d,
            executeEditorAction: x,
            executeMutationAction: y,
            markerModule: T,
          } = (0, s.nZ)(),
          b = (0, a.Fl)(() => (0, o.$)().isOutlinerMode),
          I = (0, a.iH)(""),
          C = (0, a.iH)(""),
          E = (0, a.iH)(e.menuOptions),
          O = (0, a.iH)("find"),
          w = (0, a.iH)([]),
          R = (0, a.Fl)(() => w.value[0]),
          S = (0, a.Fl)(() => {
            const e = I.value;
            if (e.length <= 0) return null;
            const t = !E.value.isCurrentMapMode,
              n = t ? d.value.map((e) => e.rootTopic) : [l.value.rootTopic],
              a = t
                ? d.value
                    .map((e) => e.relationships)
                    .reduce((e, t) => e.concat(t))
                : l.value.relationships,
              { filters: i } = E.value,
              { wholeWords: o, matchCase: s } = i;
            return {
              keyword: e,
              rootTopics: n,
              relationships: a,
              rgx: v(e, o, s, !0),
            };
          }),
          _ = (0, a.Fl)(() => {
            if (!S.value) return [];
            const { filters: e } = E.value,
              { rootTopics: t, relationships: n, rgx: a } = S.value;
            let i = [];
            const o = {};
            return (
              t.forEach((t) => {
                var c, u, p, h, v, g;
                let x = [];
                const y = (e, t, n, a, i, o) => {
                  x.push({
                    isSearchResult: !0,
                    value: t,
                    text: n,
                    title: a,
                    type: e,
                    topicId: i,
                    slotType: "searchItem",
                    sheetId: o,
                  });
                };
                for (const n of k([t], b.value)) {
                  if (
                    (e.topic &&
                      (null !== (c = n.title) && void 0 !== c ? c : "").match(
                        a,
                      ) &&
                      y("topic", n.id, n.title, n.title, n.id, n.ownerSheet.id),
                    e.label)
                  ) {
                    let e = [];
                    const t = d.value.find((e) => n.ownerSheet.id === e.id);
                    if (t) {
                      const a =
                        null === (u = t.query({ id: n.id })) || void 0 === u
                          ? void 0
                          : u.asTopic();
                      a && (e = s.HG.getLabels(a));
                    }
                    o[n.id] = { labels: e, sheet: t };
                  }
                  if (
                    e.note &&
                    (null === (p = n.notes) || void 0 === p
                      ? void 0
                      : p.text) &&
                    n.notes.text.match(a)
                  ) {
                    const e = `note-${n.id}-${n.notes.text}`;
                    y("note", e, n.notes.text, n.title, n.id, n.ownerSheet.id);
                  }
                  if (e.link && n.href && f(n.href) && n.href.match(a)) {
                    const e = `link-${n.id}-${n.href}`;
                    y("link", e, n.href, n.title, n.id, n.ownerSheet.id);
                  }
                  if (
                    e.boundary &&
                    (null === (h = n.boundaries) || void 0 === h
                      ? void 0
                      : h.length) > 0
                  )
                    for (const e of n.boundaries)
                      (null === (v = e.title) || void 0 === v
                        ? void 0
                        : v.match(a)) &&
                        y(
                          "boundary",
                          e.id,
                          e.title,
                          n.title,
                          n.id,
                          n.ownerSheet.id,
                        );
                }
                if (e.relationship && n)
                  for (const e of n)
                    (null === (g = e.title) || void 0 === g
                      ? void 0
                      : g.match(a)) &&
                      t.ownerSheet.id === e.ownerSheet.id &&
                      y(
                        "relationship",
                        e.id,
                        e.title,
                        e.title,
                        null,
                        e.ownerSheet.id,
                      );
                e.label &&
                  Object.keys(o).forEach((e) => {
                    var n, i, s, c, u;
                    let d = o[e].labels;
                    const p = o[e].sheet;
                    if (!p) return;
                    if (t.ownerSheet.id !== p.id) return;
                    const h =
                      null === (n = p.query({ id: e })) || void 0 === n
                        ? void 0
                        : n.asTopic();
                    if (!h) return;
                    const m =
                        null ===
                          (s =
                            null === (i = h.parentTopic) || void 0 === i
                              ? void 0
                              : i.parentTopic) || void 0 === s
                          ? void 0
                          : s.id,
                      v = m
                        ? null === (c = l.value.query({ id: m })) ||
                          void 0 === c
                          ? void 0
                          : c.asTopic()
                        : null;
                    if (
                      !h.extensionProviders.includes(r.v.SPREADSHEET) &&
                      v &&
                      v.extensionProviders.includes(r.v.SPREADSHEET)
                    ) {
                      const e =
                        (null === (u = o[v.id]) || void 0 === u
                          ? void 0
                          : u.labels) || [];
                      d = d.filter((t) => !e.includes(t));
                    }
                    d.sort().forEach((t) => {
                      if (t && t.match(a)) {
                        y(
                          "label",
                          `label-${e}-${t}`,
                          t,
                          h.title,
                          e,
                          h.ownerSheet.id,
                        );
                      }
                    });
                  }),
                  (x = m(a, x)),
                  E.value.isCurrentMapMode
                    ? (i = x)
                    : x.length &&
                      i.push(
                        ((e, t) => {
                          const n = e.map((e) =>
                            Object.assign(Object.assign({}, e), {
                              unindent: !0,
                            }),
                          );
                          return {
                            isSearchResult: !0,
                            value: t.id,
                            text: t.title,
                            type: "topic",
                            topicId: t.rootTopic.id,
                            slotType: "sheetTitle",
                            sheetId: t.id,
                            expanded: !0,
                            items: n,
                          };
                        })(x, t.ownerSheet),
                      );
              }),
              i
            );
          }),
          L = (0, a.Fl)(() => {
            const { isCurrentMapMode: e } = E.value;
            if (!d.value.length) return [];
            return (e ? [l.value] : d.value).map((e) => {
              const { rootTopic: n, title: a } = e;
              return {
                value: n.id,
                text: `[${a}]${p(n, t)}`,
                expanded: !0,
                items: h(
                  n,
                  (e) => ({
                    value: e.id,
                    text: p(e, t),
                    expanded: !0,
                    items: [],
                    sheetId: e.ownerSheet.id,
                    slotType: "topicItem",
                    type: "topic",
                  }),
                  (e, t) =>
                    Object.assign(Object.assign({}, e), {
                      items: [...e.items, t],
                    }),
                  b.value,
                ).items,
                sheetId: e.id,
                type: "topic",
              };
            });
          }),
          N = (0, a.Fl)(() => {
            const { isCurrentMapMode: e } = E.value;
            if (!d.value.length) return [];
            return (e ? [l.value] : d.value)
              .map((e) => {
                const { rootTopic: t } = e;
                return h(
                  t,
                  (e) => {
                    var t, n;
                    return [
                      {
                        expanded: !0,
                        value: e.id,
                        text:
                          null !==
                            (n =
                              null === (t = e.notes) || void 0 === t
                                ? void 0
                                : t.text) && void 0 !== n
                            ? n
                            : "",
                        title: e.title,
                        slotType: "noteItem",
                        sheetId: e.ownerSheet.id,
                        type: "note",
                      },
                    ];
                  },
                  (e, t) => e.concat(t),
                  b.value,
                );
              })
              .reduce((e, t) => e.concat(t))
              .filter((e) => e.text.length > 0);
          }),
          A = (0, a.Fl)(() => {
            const e = ((e, t) => {
                const n = new Map();
                return e.filter((e) => !n.has(e[t]) && n.set(e[t], 1));
              })(
                h(
                  l.value.rootTopic,
                  (e) =>
                    e.markers.map((t) => {
                      var n;
                      const a = T.getMarkerInfoById(t);
                      return {
                        type: "marker",
                        value: t,
                        text:
                          (null === (n = l.value.markerDescriptionFor(t)) ||
                          void 0 === n
                            ? void 0
                            : n.name) || a.name,
                        icon: a.imageSrc,
                        unindent: !0,
                        slotType: "item",
                        sheetId: e.ownerSheet.id,
                      };
                    }),
                  (e, t) => e.concat(t),
                  b.value,
                ),
                "value",
              ),
              n = [];
            e.length &&
              n.push({
                type: "marker",
                isTitle: !0,
                text: t("Marker"),
                value: "$tag-view-marker",
                expanded: !0,
                items: e,
                slotType: "item",
                sheetId: l.value.id,
              });
            const a = s.HG.allLabelsFromSheet(l.value)
              .sort()
              .map((e) => ({
                type: "label",
                value: e,
                text: e,
                unindent: !0,
                slotType: "item",
                sheetId: l.value.id,
              }));
            a.length > 0 &&
              n.push({
                type: "label",
                isTitle: !0,
                text: t("Label"),
                value: "$tag-view-label",
                expanded: !0,
                items: a,
                slotType: "item",
                sheetId: l.value.id,
              });
            const i = new Map();
            return (
              h(
                l.value.rootTopic,
                (e) => {
                  if (e.task) {
                    const n = Object.assign({}, e.task);
                    (n.status = e.task.status),
                      null !== e.aggregatedCountOfTodos &&
                        (n.status =
                          e.aggregatedCountOfCheckedTodos ===
                          e.aggregatedCountOfTodos
                            ? "done"
                            : "todo");
                    const a =
                      "status:" +
                      ("done" === n.status ? "checked" : "unchecked");
                    i.has(e.id) ||
                      i.set(a, {
                        type: "task",
                        value: JSON.stringify(n),
                        text:
                          "done" === n.status
                            ? t("Completed")
                            : t("Uncompleted"),
                        icon: "",
                        unindent: !0,
                        slotType: "item",
                        sheetId: e.ownerSheet.id,
                      });
                  }
                },
                () => {},
                b.value,
              ),
              i.size > 0 &&
                (n.push({
                  type: "task",
                  isTitle: !0,
                  text: t("Task"),
                  value: "$tag-view-task",
                  expanded: !0,
                  items: Array.from(i.values()),
                  slotType: "item",
                  sheetId: l.value.id,
                }),
                i.clear()),
              n
            );
          }),
          M = (e) => {
            y({ name: "mutate:replaceText", payload: e });
          },
          P = (e) => {
            if (!S.value) return;
            const { rgx: t } = S.value,
              n = C.value,
              a = e
                .filter((e) => "topic" === e.type)
                .map((e) => ({
                  id: e.topicId,
                  type: "topic",
                  sheetId: e.sheetId,
                })),
              i = e
                .filter((e) => "note" === e.type)
                .map((e) => ({
                  id: e.topicId,
                  type: "note",
                  sheetId: e.sheetId,
                })),
              o = e
                .filter((e) => "label" === e.type)
                .map((e) => ({
                  id: `${e.topicId}-${e.value}`,
                  type: "label",
                  sheetId: e.sheetId,
                  topicId: e.topicId,
                  value: e.value,
                })),
              l = e
                .filter((e) => "link" === e.type)
                .map((e) => ({
                  id: e.topicId,
                  type: "link",
                  sheetId: e.sheetId,
                })),
              s = e
                .filter((e) => "boundary" === e.type)
                .map((e) => ({
                  id: e.value,
                  type: "boundary",
                  sheetId: e.sheetId,
                })),
              r = e
                .filter((e) => "relationship" === e.type)
                .map((e) => ({
                  id: e.value,
                  type: "relationship",
                  sheetId: e.sheetId,
                }));
            M({
              topics: a,
              notes: i,
              labels: o,
              links: l,
              boundaries: s,
              relationships: r,
              rgx: t,
              text: n,
            });
          };
        return (
          (0, a.YP)(
            () => _.value,
            (e) => {
              w.value = w.value.filter((t) =>
                e.find((e) => {
                  let n = !0;
                  return (
                    "topicId" in t &&
                      "topicId" in e &&
                      (n = t.topicId === e.topicId),
                    n && t.type === e.type && t.value === e.value
                  );
                }),
              );
            },
            { immediate: !0 },
          ),
          {
            mode: O,
            searchContent: I,
            replaceContent: C,
            options: E,
            searchResult: _,
            workbookData: L,
            workbookNotesData: N,
            workbookTagsData: A,
            selectedItems: w,
            selectedItem: R,
            selectItem: (e) => (w.value = [e]),
            openSearchResultItem: (e) => {
              const t = g(e),
                a = e.type,
                i = t ? e.topicId : e.value;
              switch (a) {
                case "topic":
                  b.value
                    ? n("editor.selectTopicById", { topicId: i })
                    : y({
                        name: "mutate:selectTopics",
                        payload: { topics: [i], centerOn: !0 },
                      });
                  break;
                case "note":
                  b.value
                    ? n("editor.selectTopicById", { topicId: i })
                    : y({
                        name: "mutate:selectTopics",
                        payload: { topics: [i], centerOn: !0 },
                      }),
                    setTimeout(() => {
                      (0, o.$)().setPopoverEditorVisible("notes");
                    }, 100);
                  break;
                case "label":
                  "item" === e.slotType
                    ? x({
                        name: "mutateEditor:setHighlightLabels",
                        payload: w.value
                          .filter((e) => "label" === e.type)
                          .map((e) => e.value),
                      })
                    : (b.value
                        ? n("editor.selectTopicById", { topicId: i })
                        : y({
                            name: "mutate:selectTopics",
                            payload: { topics: [i], centerOn: !0 },
                          }),
                      setTimeout(() => {
                        (0, o.$)().setPopoverEditorVisible("label");
                      }, 100));
                  break;
                case "link":
                  b.value
                    ? n("editor.selectTopicById", { topicId: i })
                    : y({
                        name: "mutate:selectTopics",
                        payload: { topics: [i], centerOn: !0 },
                      }),
                    setTimeout(() => {
                      (0, c.H)();
                    }, 100);
                  break;
                case "boundary":
                  x({
                    name: "mutateEditor:unfoldTopicAncestors",
                    payload: { topicId: i },
                  }),
                    y({
                      name: "mutate:selectBoundaries",
                      payload: { boundaries: [e.value] },
                    });
                  break;
                case "relationship":
                  x({
                    name: "mutateEditor:unfoldTopicAncestors",
                    payload: { topicId: i },
                  }),
                    y({
                      name: "mutate:selectRelationships",
                      payload: { relationships: [e.value] },
                    });
                  break;
                case "marker":
                  x({
                    name: "mutateEditor:setHighlightMarkers",
                    payload: w.value
                      .filter((e) => "marker" === e.type)
                      .map((e) => e.value),
                  });
                  break;
                case "task":
                  x({
                    name: "mutateEditor:setHighlightTasks",
                    payload: w.value
                      .filter((e) => "task" === e.type)
                      .map((e) => JSON.parse(e.value)),
                  });
              }
              if (!b.value) {
                const { activeSheetViewer: e } = (0, s.nZ)();
                e.value.focus();
              }
            },
            replaceText: M,
            onReplace: () => {
              if (!R.value || !S.value) return;
              const e = R.value,
                t = g(e),
                n = t ? e.type : "topic",
                a = t
                  ? ["boundary", "relationship"].includes(n)
                    ? e.value
                    : e.topicId
                  : e.value,
                i = R.value.sheetId,
                { rgx: o } = S.value,
                l = C.value;
              M({
                rgx: o,
                text: l,
                topics:
                  "topic" === n ? [{ id: a, type: "topic", sheetId: i }] : [],
                notes:
                  "note" === n ? [{ id: a, type: "note", sheetId: i }] : [],
                labels:
                  "label" === n
                    ? [
                        {
                          id: `${a}-${e.value}`,
                          type: "label",
                          sheetId: i,
                          topicId: a,
                          value: e.value,
                        },
                      ]
                    : [],
                links:
                  "link" === n ? [{ id: a, type: "link", sheetId: i }] : [],
                boundaries:
                  "boundary" === n
                    ? [{ id: a, type: "boundary", sheetId: i }]
                    : [],
                relationships:
                  "relationship" === n
                    ? [{ id: a, type: "relationship", sheetId: i }]
                    : [],
              });
            },
            onReplaceAll: (e = _.value) =>
              u(void 0, void 0, void 0, function* () {
                const { isCurrentMapMode: t } = E.value;
                t
                  ? P(e)
                  : e.reduce(
                      (e, t) =>
                        u(void 0, void 0, void 0, function* () {
                          return (
                            yield e,
                            new Promise((e) => {
                              setTimeout(() => {
                                e(P(t.items || []));
                              });
                            })
                          );
                        }),
                      Promise.resolve(),
                    );
              }),
          }
        );
      };
      function p(e, t) {
        return e.imageSource ? `[${t("Image")}] ${e.title || ""}` : e.title;
      }
      function h(e, t, n, a) {
        let i = t(e);
        for (const o of e.children) i = n(i, h(o, t, n, a));
        for (const o of e.detachedChildren) i = n(i, h(o, t, n, a));
        if (!a) {
          for (const o of e.summaries.map((e) => e.topic))
            i = n(i, h(o, t, n, a));
          e.callout && (i = n(i, h(e.callout, t, n, a)));
        }
        return i;
      }
      const m = (e, t) =>
          t.map((t) => {
            const n = t.text,
              a = [],
              i = n.split(e),
              o = n.match(e);
            let l = !1;
            const s = i.length + o.length;
            for (let e = 0; e < s; e++)
              l
                ? a.push({ text: o.shift(), isHighlight: !0 })
                : a.push({ text: i.shift(), isHighlight: !1 }),
                (l = !l);
            return (t.highlight = a.filter((e) => !!e.text)), t;
          }),
        v = (e, t, n, a) => {
          if (!e) return;
          (e = ((e) => e.replace(/[-\\{}*+?|^$.[\]()#]/g, "\\$&"))(e)),
            t &&
              (/\B/.test(e.charAt(0)) || (e = "\\b" + e),
              /\B/.test(e.charAt(e.length - 1)) || (e += "\\b"));
          let i = "";
          return n || (i += "i"), a && (i += "g"), new RegExp(e, i);
        },
        f = (e) => e.startsWith("http"),
        g = (e) => !!e.isSearchResult;
      function* k(e, t) {
        var n, a;
        for (const i of e) {
          yield i;
          for (const e of k(i.children, t)) yield e;
          for (const e of k(
            null !== (n = i.detachedChildren) && void 0 !== n ? n : [],
            t,
          ))
            yield e;
          if (!t) {
            for (const e of k(
              (null !== (a = i.summaries) && void 0 !== a ? a : []).map(
                (e) => e.topic,
              ),
              t,
            ))
              yield e;
            i.callout && (yield i.callout);
          }
        }
      }
      var x = n(60534),
        y = n(42855),
        T = n(67657),
        b = n(95246);
      const I = (0, a.aZ)({
        __name: "toolbar",
        props: {
          searchContent: { default: "" },
          replaceContent: { default: "" },
          showFiltersOptions: { type: Boolean, default: !0 },
          showReplaceOptions: { type: Boolean, default: !0 },
          menuOptions: null,
          searchText: null,
          replaceText: null,
          disabledSearch: { type: Boolean, default: !1 },
          disabledReplace: { type: Boolean, default: !0 },
          disabledReplaceAll: { type: Boolean, default: !0 },
          disabledItems: { default: () => [] },
        },
        emits: [
          "update:searchContent",
          "update:replaceContent",
          "update:menuOptions",
          "replace",
          "replaceAll",
        ],
        setup(e, { emit: t }) {
          const n = e,
            { T: o } = (0, i.JE)(),
            { Menu: l } = T,
            s = (0, a.iH)(),
            r = (0, a.FN)(),
            c = (0, a.Fl)(() =>
              r.proxy.$toResourceURL("static/images/pitchmode/setting.svg"),
            ),
            u = (0, a.Fl)(() =>
              r.proxy.$toResourceURL(
                "/static/images/navigation-panel/searchbar-search.svg",
              ),
            ),
            d = (0, a.Fl)(() =>
              r.proxy.$toResourceURL(
                "/static/images/navigation-panel/searchbar-replace.svg",
              ),
            ),
            p = (e) => !n.disabledItems.includes(e),
            h = (e, a) => {
              let i = Object.assign({}, n.menuOptions);
              ["isReplaceMode", "isCurrentMapMode"].includes(e)
                ? (i[e] = a)
                : ((i = Object.assign({}, n.menuOptions)),
                  (i.filters = Object.assign({}, n.menuOptions.filters)),
                  (i.filters[e] = a)),
                t("update:menuOptions", i);
            },
            m = (e, t) => {
              const { filters: a } = n.menuOptions;
              return {
                label: t,
                id: e,
                click: (t) => {
                  h(e, !a[e]), (t.checked = !a[e]);
                },
                type: "checkbox",
                enabled: p(e),
                checked: a[e],
              };
            };
          return (
            (0, a.bv)(() => {
              s.value.focus();
            }),
            {
              __sfc: !0,
              $T: o,
              Menu: l,
              props: n,
              emit: t,
              searchInput: s,
              vm: r,
              gearImage: c,
              searchIconImage: u,
              replaceIconImage: d,
              onUpdateSearchContent: (e) =>
                t("update:searchContent", e.target.value),
              onUpdateReplaceContent: (e) =>
                t("update:replaceContent", e.target.value),
              onReplace: () => t("replace", n.replaceContent),
              onReplaceAll: () => {
                t("replaceAll", n.replaceContent);
              },
              handleShowInputMenu: () => (0, b.Sr)(n.searchContent),
              getMenuOptionEnabled: p,
              updateMenuOptions: h,
              getCheckboxMenuOption: m,
              onToggleConfig: () => {
                const { isReplaceMode: e, isCurrentMapMode: t } = n.menuOptions;
                let a = [
                  { type: "separator" },
                  {
                    label: o("Current Map"),
                    id: "currentMap",
                    click: (e) => {
                      h("isCurrentMapMode", !0), (e.checked = !0);
                    },
                    type: "radio",
                    enabled: p("currentMap"),
                    checked: t,
                  },
                  {
                    label: o("Current File"),
                    id: "wholeWorkbook",
                    click: (e) => {
                      h("isCurrentMapMode", !1), (e.checked = !0);
                    },
                    type: "radio",
                    enabled: p("wholeWorkbook"),
                    checked: !t,
                  },
                  { type: "separator" },
                  m("wholeWords", o("Whole Words")),
                  m("matchCase", o("Match Case")),
                ];
                n.showReplaceOptions &&
                  (a = [
                    {
                      label: o("Find"),
                      id: "find",
                      click: (e) => {
                        h("isReplaceMode", !1), (e.checked = !0);
                      },
                      type: "radio",
                      enabled: p("find"),
                      checked: !e,
                    },
                    {
                      label: o("Find & Replace").replace(/(&)/g, "$1$1"),
                      id: "replace",
                      click: (e) => {
                        h("isReplaceMode", !0), (e.checked = !0);
                      },
                      type: "radio",
                      enabled: p("replace"),
                      checked: e,
                    },
                  ].concat(a)),
                  n.showFiltersOptions &&
                    (a = a.concat([
                      { type: "separator" },
                      m("topic", o("Topic")),
                      m("note", o("Note")),
                      m("relationship", o("Relationship")),
                      m("boundary", o("Boundary")),
                      m("label", o("Label")),
                      m("link", o("Link(noun)")),
                    ])),
                  l
                    .buildFromTemplate(a)
                    .popup({ window: T.getCurrentWindow() });
              },
            }
          );
        },
      });
      var C = n(51900);
      const E = (0, C.Z)(
          I,
          function () {
            var e = this,
              t = e._self._c,
              n = e._self._setupProxy;
            return t(
              "div",
              {
                staticClass: "uk-flex uk-flex-middle uk-padding",
                style: { paddingRight: "6px" },
              },
              [
                t("div", { staticClass: "uk-width-1-1" }, [
                  t("div", { staticClass: "uk-position-relative" }, [
                    t("img", {
                      directives: [
                        {
                          name: "focus-contexts",
                          rawName: "v-focus-contexts:no",
                          arg: "no",
                        },
                      ],
                      staticClass: "uk-position-absolute",
                      staticStyle: { top: "3px", left: "4px" },
                      attrs: { src: n.searchIconImage, "uk-svg": "" },
                    }),
                    e._v(" "),
                    t("input", {
                      directives: [
                        {
                          name: "focus-contexts",
                          rawName: "v-focus-contexts",
                          value: ["focus.input"],
                          expression: "['focus.input']",
                        },
                      ],
                      ref: "searchInput",
                      staticClass: "uk-input uk-search-input",
                      staticStyle: { "padding-left": "20px" },
                      attrs: {
                        disabled: e.disabledSearch,
                        placeholder: e.searchText || n.$T("Find"),
                      },
                      domProps: { value: e.searchContent },
                      on: {
                        input: n.onUpdateSearchContent,
                        contextmenu: function (e) {
                          return n.handleShowInputMenu();
                        },
                      },
                    }),
                  ]),
                  e._v(" "),
                  t(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.menuOptions.isReplaceMode,
                          expression: "menuOptions.isReplaceMode",
                        },
                      ],
                      staticClass: "uk-position-relative",
                    },
                    [
                      t("img", {
                        directives: [
                          {
                            name: "focus-contexts",
                            rawName: "v-focus-contexts:no",
                            arg: "no",
                          },
                        ],
                        staticClass: "uk-position-absolute",
                        staticStyle: { top: "13px", left: "4px" },
                        attrs: {
                          src: n.replaceIconImage,
                          "uk-svg": "",
                          draggable: "false",
                        },
                      }),
                      e._v(" "),
                      t("input", {
                        directives: [
                          {
                            name: "focus-contexts",
                            rawName: "v-focus-contexts",
                            value: ["focus.input"],
                            expression: "['focus.input']",
                          },
                        ],
                        staticClass:
                          "uk-input uk-margin-small-top uk-search-input",
                        staticStyle: { "padding-left": "20px" },
                        attrs: {
                          placeholder: e.replaceText || n.$T("Replace"),
                        },
                        domProps: { value: e.replaceContent },
                        on: { input: n.onUpdateReplaceContent },
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
                          value: e.menuOptions.isReplaceMode,
                          expression: "menuOptions.isReplaceMode",
                        },
                      ],
                      staticClass:
                        "uk-margin-small-top uk-flex uk-flex-row uk-flex-right",
                    },
                    [
                      t(
                        "button",
                        {
                          directives: [
                            {
                              name: "focus-contexts",
                              rawName: "v-focus-contexts:no",
                              arg: "no",
                            },
                          ],
                          staticClass:
                            "uk-button uk-button-floating uk-margin-small-right",
                          attrs: { disabled: e.disabledReplace },
                          on: { click: n.onReplace },
                        },
                        [
                          e._v(
                            "\n        " + e._s(n.$T("Replace")) + "\n      ",
                          ),
                        ],
                      ),
                      e._v(" "),
                      t(
                        "button",
                        {
                          directives: [
                            {
                              name: "focus-contexts",
                              rawName: "v-focus-contexts:no",
                              arg: "no",
                            },
                          ],
                          staticClass: "uk-button uk-button-floating",
                          attrs: { disabled: e.disabledReplaceAll },
                          on: { click: n.onReplaceAll },
                        },
                        [
                          e._v(
                            "\n        " +
                              e._s(n.$T("Replace All")) +
                              "\n      ",
                          ),
                        ],
                      ),
                    ],
                  ),
                ]),
                e._v(" "),
                t("div", { style: { marginLeft: "6px" } }, [
                  t(
                    "div",
                    {
                      staticClass:
                        "uk-button uk-button-tile uk-button-icon customize-icon",
                      staticStyle: { width: "22px" },
                      on: { click: n.onToggleConfig },
                    },
                    [
                      t("img", {
                        directives: [
                          {
                            name: "focus-contexts",
                            rawName: "v-focus-contexts:no",
                            arg: "no",
                          },
                        ],
                        attrs: {
                          src: n.gearImage,
                          "uk-svg": "",
                          draggable: "false",
                        },
                      }),
                    ],
                  ),
                ]),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        ).exports,
        O = (0, a.aZ)({
          __name: "topic-panel",
          props: {
            panelWidth: { default: 268 },
            sheetRendering: { type: Boolean },
          },
          setup(e) {
            const {
                searchContent: t,
                replaceContent: n,
                options: i,
                searchResult: l,
                workbookData: s,
                selectedItem: r,
                selectItem: c,
                openSearchResultItem: u,
                onReplace: p,
                onReplaceAll: h,
              } = d(),
              m = (0, a.iH)(),
              v = (0, a.Fl)(() => t.value.length > 0),
              f = (0, a.Fl)(() => (0, o.$)().isOutlinerMode),
              g = (0, a.Fl)(
                () => !t.value || !r.value || !("isSearchResult" in r.value),
              ),
              k = (0, a.Fl)(() => {
                const { isCurrentMapMode: e } = i.value;
                if (!t.value) return !0;
                if (e) {
                  if (!l.value || !l.value.length) return !0;
                } else if (
                  l.value.every((e) => {
                    var t;
                    return (
                      0 ===
                      (null === (t = e.items) || void 0 === t
                        ? void 0
                        : t.length)
                    );
                  })
                )
                  return !0;
                return !1;
              });
            return (
              (0, a.YP)(
                () => f.value,
                (e) => {
                  (i.value.filters.relationship = !e),
                    (i.value.filters.boundary = !e);
                },
                { immediate: !1 },
              ),
              {
                __sfc: !0,
                searchContent: t,
                replaceContent: n,
                options: i,
                searchResult: l,
                workbookData: s,
                selectedItem: r,
                selectItem: c,
                openSearchResultItem: u,
                onReplace: p,
                onReplaceAll: h,
                containerEl: m,
                isSearchMode: v,
                isOutlinerMode: f,
                computedDisabledReplace: g,
                computedDisabledReplaceALL: k,
                handleSelect: (e) => {
                  c(e), u(e);
                },
                CommonNonePanel: x.Z,
                TreeListV2: y.Z,
                Toolbar: E,
              }
            );
          },
        });
      const w = (0, C.Z)(
        O,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              staticClass:
                "uk-flex uk-flex-column uk-height-expand uk-panel uk-flex-column",
              staticStyle: { "padding-right": "1px" },
            },
            [
              t(n.Toolbar, {
                attrs: {
                  "search-content": n.searchContent,
                  "replace-content": n.replaceContent,
                  "menu-options": n.options,
                  "disabled-search": e.sheetRendering,
                  "disabled-replace": n.computedDisabledReplace,
                  "disabled-replace-all": n.computedDisabledReplaceALL,
                  "disabled-items": n.isOutlinerMode
                    ? ["relationship", "boundary"]
                    : [],
                },
                on: {
                  "update:searchContent": (e) => (n.searchContent = e),
                  "update:replaceContent": (e) => (n.replaceContent = e),
                  "update:menuOptions": (e) => (n.options = e),
                  replace: function (e) {
                    return n.onReplace();
                  },
                  replaceAll: function (e) {
                    return n.onReplaceAll();
                  },
                },
              }),
              e._v(" "),
              t("hr", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: n.searchContent && "" !== n.searchContent,
                    expression: "searchContent && searchContent !== ''",
                  },
                ],
                staticClass: "uk-separator",
              }),
              e._v(" "),
              n.isSearchMode && 0 === n.searchResult.length
                ? t(n.CommonNonePanel, {
                    attrs: {
                      type: "NO_RESULT",
                      "section-style": "margin-top: -30px;",
                    },
                  })
                : t(
                    "div",
                    {
                      ref: "containerEl",
                      staticClass:
                        "uk-height-expand uk-panel uk-overflow-auto uk-flex uk-flex-column",
                      class: { "uk-disabled": !1 },
                      staticStyle: { width: "100%" },
                      style: { zIndex: 0, opacity: 1 },
                    },
                    [
                      t(
                        "keep-alive",
                        [
                          t(n.TreeListV2, {
                            attrs: {
                              items: n.isSearchMode
                                ? n.searchResult
                                : n.workbookData,
                              "high-performance-mode": !n.isSearchMode,
                              container: n.containerEl,
                              "model-value": n.selectedItem
                                ? [n.selectedItem.value]
                                : [],
                              width: e.panelWidth,
                              striped: n.isSearchMode,
                              "allow-direction-key": "",
                              type: "radio",
                            },
                            on: { click: n.handleSelect },
                            scopedSlots: e._u([
                              {
                                key: "sheetTitle",
                                fn: function ({ data: n, offset: a }) {
                                  return [
                                    t("hr", { staticClass: "uk-separator" }),
                                    e._v(" "),
                                    t(
                                      "button",
                                      {
                                        staticClass:
                                          "uk-tree-list-item uk-tree-list-solid-background",
                                        style: { "padding-left": a + "px" },
                                      },
                                      [
                                        e._v(
                                          "\n            " +
                                            e._s(n.text) +
                                            "\n          ",
                                        ),
                                      ],
                                    ),
                                    e._v(" "),
                                    t("hr", { staticClass: "uk-separator" }),
                                  ];
                                },
                              },
                              {
                                key: "searchItem",
                                fn: function ({
                                  data: n,
                                  onClick: a,
                                  checked: i,
                                }) {
                                  return [
                                    t(
                                      "button",
                                      {
                                        staticClass:
                                          "uk-tree-list-item uk-width-1-1 uk-position-relative",
                                        class: {
                                          "uk-checked": i,
                                          "uk-focus": i,
                                        },
                                        staticStyle: { "padding-left": "16px" },
                                        style: {
                                          "padding-left":
                                            16 +
                                            ("topic" !== n.type ? 18 : 0) +
                                            "px",
                                        },
                                        on: { click: a },
                                      },
                                      [
                                        "topic" !== n.type
                                          ? t("img", {
                                              staticClass:
                                                "uk-icon uk-position-absolute",
                                              class: { "uk-checked": i },
                                              staticStyle: {
                                                top: "7px",
                                                left: "16px",
                                                opacity: "0.7",
                                              },
                                              attrs: {
                                                "uk-svg": "",
                                                "data-src": e.$toResourceURL(
                                                  `static/images/search-panel-icon/${n.type}.svg`,
                                                ),
                                                draggable: "false",
                                              },
                                            })
                                          : e._e(),
                                        e._v(" "),
                                        n.highlight
                                          ? t(
                                              "p",
                                              {
                                                staticClass: "uk-margin-remove",
                                                staticStyle: {
                                                  "line-height": "1.4em",
                                                },
                                              },
                                              e._l(
                                                n.highlight,
                                                function (
                                                  { text: n, isHighlight: a },
                                                  i,
                                                ) {
                                                  return t(
                                                    "span",
                                                    {
                                                      key: i,
                                                      class: {
                                                        "uk-tree-list-highlight":
                                                          a,
                                                      },
                                                    },
                                                    [e._v(e._s(n))],
                                                  );
                                                },
                                              ),
                                              0,
                                            )
                                          : t(
                                              "p",
                                              {
                                                staticClass: "uk-margin-remove",
                                              },
                                              [e._v(e._s(n.text))],
                                            ),
                                      ],
                                    ),
                                  ];
                                },
                              },
                            ]),
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "d8bcf9e8",
        null,
      ).exports;
      const R = (0, a.aZ)({
        __name: "note-panel",
        props: {
          panelWidth: { default: 268 },
          highlightParam: { default: null },
          sheetRendering: { type: Boolean },
        },
        setup(e) {
          const t = e,
            { T: n } = (0, i.JE)(),
            {
              searchContent: o,
              searchResult: l,
              replaceContent: s,
              workbookNotesData: r,
              options: c,
              selectedItem: u,
              selectItem: p,
              onReplace: h,
              onReplaceAll: m,
              openSearchResultItem: v,
            } = d({ menuOptions: { filters: { note: !0 } } });
          (0, a.YP)(
            () => t.highlightParam,
            (e) => {
              (0, a.Y3)(() => {
                p({
                  value: e.topicId,
                  text: void 0,
                  sheetId: void 0,
                  type: void 0,
                });
              });
            },
            { immediate: !0 },
          );
          const f = (0, a.Fl)(() => n("<Empty Text>")),
            g = (0, a.Fl)(() => {
              const { isCurrentMapMode: e } = c.value,
                t = [];
              return (
                e
                  ? t.push(...l.value)
                  : l.value.forEach((e) => {
                      t.push(...e.items);
                    }),
                t
                  .filter((e) => "note" === e.type)
                  .map((e) =>
                    Object.assign(Object.assign({}, e), {
                      type: "note",
                      slotType: "noteItem",
                    }),
                  )
              );
            }),
            k = (0, a.Fl)(() => o.value.length > 0),
            T = (0, a.Fl)(
              () => !o.value || !u.value || !("isSearchResult" in u.value),
            ),
            b = (0, a.Fl)(() => {
              const { isCurrentMapMode: e } = c.value;
              if (!o.value) return !0;
              if (e) {
                if (!l.value || !l.value.length) return !0;
              } else if (
                l.value.every((e) => {
                  var t;
                  return (
                    0 ===
                    (null === (t = e.items) || void 0 === t ? void 0 : t.length)
                  );
                })
              )
                return !0;
              return !1;
            });
          return {
            __sfc: !0,
            $T: n,
            props: t,
            searchContent: o,
            searchResult: l,
            replaceContent: s,
            workbookNotesData: r,
            options: c,
            selectedItem: u,
            selectItem: p,
            onReplace: h,
            onReplaceAll: m,
            openSearchResultItem: v,
            emptyText: f,
            noteSearchResult: g,
            isSearchMode: k,
            handleSelect: (e) => {
              p(e), v(e);
            },
            computedDisabledReplace: T,
            computedDisabledReplaceALL: b,
            CommonNonePanel: x.Z,
            TreeListV2: y.Z,
            Toolbar: E,
          };
        },
      });
      n(64391);
      const S = (0, C.Z)(
        R,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            { staticClass: "uk-height-expand uk-panel uk-flex uk-flex-column" },
            [
              t(n.Toolbar, {
                attrs: {
                  "search-content": n.searchContent,
                  "replace-content": n.replaceContent,
                  "menu-options": n.options,
                  "disabled-search": e.sheetRendering,
                  "disabled-replace": n.computedDisabledReplace,
                  "disabled-replace-all": n.computedDisabledReplaceALL,
                  "search-text": n.$T("Search notes"),
                  "show-filters-options": !1,
                },
                on: {
                  "update:searchContent": (e) => (n.searchContent = e),
                  "update:replaceContent": (e) => (n.replaceContent = e),
                  "update:menuOptions": (e) => (n.options = e),
                  replace: function (e) {
                    return n.onReplace();
                  },
                  replaceAll: function (e) {
                    return n.onReplaceAll();
                  },
                },
              }),
              e._v(" "),
              n.options.isCurrentMapMode ||
              (n.isSearchMode
                ? 0 === n.noteSearchResult.length
                : 0 === n.workbookNotesData.length)
                ? t("hr", { staticClass: "uk-separator" })
                : e._e(),
              e._v(" "),
              (
                n.isSearchMode
                  ? 0 === n.noteSearchResult.length
                  : 0 === n.workbookNotesData.length
              )
                ? t(n.CommonNonePanel, {
                    attrs: {
                      type: n.isSearchMode ? "NO_RESULT" : "NO_NOTE",
                      "section-style": "margin-top: -30px;",
                    },
                  })
                : t(
                    "div",
                    {
                      staticClass:
                        "uk-height-expand uk-panel uk-overflow-auto uk-flex uk-flex-column",
                      class: { "uk-disabled": e.sheetRendering },
                      staticStyle: { width: "100%" },
                      style: { zIndex: 0, opacity: e.sheetRendering ? 0.3 : 1 },
                    },
                    [
                      t(n.TreeListV2, {
                        attrs: {
                          items: n.isSearchMode
                            ? n.noteSearchResult
                            : n.workbookNotesData,
                          "model-value": n.selectedItem
                            ? [n.selectedItem.value]
                            : [],
                        },
                        on: {
                          "!click": function (e) {
                            return n.handleSelect.apply(null, arguments);
                          },
                        },
                        scopedSlots: e._u([
                          {
                            key: "sheetTitle",
                            fn: function ({ data: n, offset: a }) {
                              return [
                                t("hr", { staticClass: "uk-separator" }),
                                e._v(" "),
                                t(
                                  "button",
                                  {
                                    staticClass:
                                      "uk-tree-list-item uk-tree-list-solid-background",
                                    style: { "padding-left": a + "px" },
                                  },
                                  [
                                    e._v(
                                      "\n          " +
                                        e._s(n.text) +
                                        "\n        ",
                                    ),
                                  ],
                                ),
                                e._v(" "),
                                t("hr", { staticClass: "uk-separator" }),
                              ];
                            },
                          },
                          {
                            key: "noteItem",
                            fn: function ({ data: a, checked: i, onClick: o }) {
                              return [
                                t(
                                  "button",
                                  {
                                    staticClass: "uk-tree-list-item",
                                    class: { "uk-checked": i, "uk-focus": i },
                                    staticStyle: {
                                      padding: "16px",
                                      "overflow-wrap": "break-word",
                                    },
                                    attrs: { name: a.value },
                                    on: { click: o },
                                  },
                                  [
                                    t(
                                      "div",
                                      {
                                        staticClass: "uk-text-truncate",
                                        staticStyle: {
                                          "white-space": "nowrap",
                                          "font-weight": "500",
                                        },
                                      },
                                      [
                                        e._v(
                                          "\n            " +
                                            e._s(a.title || n.emptyText) +
                                            "\n          ",
                                        ),
                                      ],
                                    ),
                                    e._v(" "),
                                    t(
                                      "div",
                                      {
                                        staticClass: "uk-text-line-clamp",
                                        staticStyle: {
                                          "margin-top": "4px",
                                          "line-height": "1.4em",
                                        },
                                      },
                                      [
                                        n.isSearchMode && a.highlight
                                          ? t(
                                              "p",
                                              {
                                                staticClass: "uk-margin-remove",
                                              },
                                              e._l(
                                                a.highlight,
                                                function (
                                                  { text: n, isHighlight: a },
                                                  i,
                                                ) {
                                                  return t(
                                                    "span",
                                                    {
                                                      key: i,
                                                      class: {
                                                        "uk-tree-list-highlight":
                                                          a,
                                                      },
                                                    },
                                                    [e._v(e._s(n))],
                                                  );
                                                },
                                              ),
                                              0,
                                            )
                                          : t(
                                              "p",
                                              {
                                                staticClass: "uk-margin-remove",
                                              },
                                              [
                                                e._v(
                                                  "\n              " +
                                                    e._s(
                                                      a.text || n.emptyText,
                                                    ) +
                                                    "\n            ",
                                                ),
                                              ],
                                            ),
                                      ],
                                    ),
                                  ],
                                ),
                                e._v(" "),
                                t("hr", {
                                  staticClass: "uk-separator",
                                  staticStyle: { padding: "0 16px" },
                                }),
                              ];
                            },
                          },
                        ]),
                      }),
                    ],
                    1,
                  ),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "06781412",
        null,
      ).exports;
      var _ = n(45578),
        L = n.n(_),
        N = n(90435),
        A = n(54856),
        M = n(87878),
        P = function (e, t, n, a) {
          return new (n || (n = Promise))(function (i, o) {
            function l(e) {
              try {
                r(a.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                r(a.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function r(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(l, s);
            }
            r((a = a.apply(e, t || [])).next());
          });
        };
      const H = (0, a.aZ)({
        __name: "tag-panel",
        props: {
          panelWidth: { default: 268 },
          highlightParam: { default: null },
          sheetRendering: { type: Boolean },
        },
        setup(e) {
          const t = e,
            {
              workbookTagsData: n,
              selectedItem: i,
              selectedItems: o,
              openSearchResultItem: l,
              selectItem: s,
            } = d({ menuOptions: { filters: { note: !0 } } });
          (0, a.YP)(
            () => t.highlightParam,
            (e) => {
              (0, a.Y3)(() => {
                const t = {
                  value: void 0,
                  text: void 0,
                  sheetId: void 0,
                  type: void 0,
                };
                e.selectedLabel
                  ? ((t.value = e.selectedLabel), (t.type = "label"))
                  : e.markerId
                    ? ((t.value = e.markerId), (t.type = "marker"))
                    : e.taskInfo &&
                      ((t.value = JSON.stringify(e.taskInfo)),
                      (t.type = "task")),
                  s(t);
              });
            },
            { immediate: !0 },
          );
          const r = (e) => o.value.find((t) => t.value === e.value),
            c = (e) => {
              const t = n.value.find((t) => t.type === e);
              return (
                !!t &&
                o.value.filter((t) => t.type === e).length === t.items.length
              );
            };
          return {
            __sfc: !0,
            props: t,
            workbookTagsData: n,
            selectedItem: i,
            selectedItems: o,
            openSearchResultItem: l,
            selectItem: s,
            handleSelect: (e) =>
              P(this, void 0, void 0, function* () {
                if (yield N.ZP.fetch(A.Gy, "action.topicFilter")) {
                  if ("task" === e.type)
                    try {
                      const t = JSON.parse(e.value);
                      (0, M.kI)(
                        "done" === t.status
                          ? "highlightCheckedTask"
                          : "highlightUncheckedTask",
                      );
                    } catch (e) {}
                  e.isTitle
                    ? c(e.type)
                      ? (o.value = o.value.filter((t) => t.type !== e.type))
                      : (o.value = L()([...o.value, ...e.items], "value"))
                    : r(e)
                      ? (o.value = o.value.filter((t) => t.value !== e.value))
                      : (o.value = L()([...o.value, e], "value")),
                    l(e);
                }
              }),
            isItemChecked: r,
            isTitleChecked: c,
            CommonNonePanel: x.Z,
            TreeListV2: y.Z,
          };
        },
      });
      n(37509);
      const D = (0, C.Z)(
          H,
          function () {
            var e = this,
              t = e._self._c,
              n = e._self._setupProxy;
            return t(
              "div",
              {
                staticClass: "uk-height-expand uk-panel uk-flex uk-flex-column",
              },
              [
                0 === n.workbookTagsData.length
                  ? t(n.CommonNonePanel, {
                      attrs: {
                        type: "NO_TAG",
                        "section-style": "margin-top: -30px;",
                      },
                    })
                  : t(
                      "div",
                      {
                        staticClass:
                          "uk-height-expand uk-panel uk-overflow-auto uk-flex uk-flex-column",
                        class: { "uk-disabled": e.sheetRendering },
                        staticStyle: { width: "100%" },
                        style: {
                          zIndex: 0,
                          opacity: e.sheetRendering ? 0.3 : 1,
                        },
                      },
                      [
                        t(n.TreeListV2, {
                          attrs: {
                            items: n.workbookTagsData,
                            "model-value": n.selectedItem
                              ? [n.selectedItem.value]
                              : [],
                          },
                          scopedSlots: e._u([
                            {
                              key: "item",
                              fn: function ({ data: a, offset: i }) {
                                return [
                                  t(
                                    "button",
                                    {
                                      staticClass:
                                        "uk-tree-list-item lm-view-item",
                                      style: { "padding-left": i + "px" },
                                      attrs: {
                                        "lm-checked": !0,
                                        name: a.value,
                                      },
                                      on: { click: () => n.handleSelect(a) },
                                    },
                                    [
                                      "marker" !== a.type || a.isTitle
                                        ? e._e()
                                        : t("img", {
                                            staticStyle: {
                                              width: "16px",
                                              height: "16px",
                                              "vertical-align": "middle",
                                            },
                                            attrs: {
                                              draggable: "false",
                                              "uk-img": "",
                                              src: a.icon,
                                            },
                                          }),
                                      e._v(" "),
                                      t(
                                        "span",
                                        { staticClass: "uk-text-middle" },
                                        [e._v(" " + e._s(a.text) + " ")],
                                      ),
                                      e._v(" "),
                                      t(
                                        "div",
                                        {
                                          staticClass:
                                            "lm-select-icon uk-float-right",
                                          style: (
                                            a.isTitle
                                              ? n.isTitleChecked(a.type)
                                              : n.isItemChecked(a)
                                          )
                                            ? "visibility: visible !important;"
                                            : "",
                                        },
                                        [
                                          t("div", {
                                            directives: [
                                              {
                                                name: "focus-contexts",
                                                rawName: "v-focus-contexts:no",
                                                arg: "no",
                                              },
                                            ],
                                            staticClass:
                                              "uk-filter uk-display-inline-block",
                                            class: {
                                              "uk-checked": a.isTitle
                                                ? n.isTitleChecked(a.type)
                                                : n.isItemChecked(a),
                                            },
                                            attrs: {
                                              src: (
                                                a.isTitle
                                                  ? n.isTitleChecked(a.type)
                                                  : n.isItemChecked(a)
                                              )
                                                ? e.$toResourceURL(
                                                    "/static/images/navigation-panel/sun-fill.svg",
                                                  )
                                                : e.$toResourceURL(
                                                    "/static/images/navigation-panel/sun.svg",
                                                  ),
                                              "uk-svg": "",
                                            },
                                          }),
                                        ],
                                      ),
                                    ],
                                  ),
                                ];
                              },
                            },
                          ]),
                        }),
                      ],
                      1,
                    ),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          "e9e14f3a",
          null,
        ).exports,
        F = (0, a.aZ)({
          props: { panelWidth: Number },
          components: { TopicPanel: w, NotePanel: S, TagPanel: D },
          setup() {
            const e = (e, ...t) => (0, i.JE)().T(e, ...t),
              { updateSearchPanel: t, updateSearchPanelHighlightItem: n } = (0,
              o.$)(),
              r = (0, a.Fl)(() => (0, o.$)().searchPanelTab),
              c = (0, a.Fl)(() => (0, o.$)().searchPanelHighlightParam),
              u = (0, a.Fl)(() => (0, o.$)().isOutlinerMode),
              d = (0, a.Fl)(() =>
                l.JK.map((t) =>
                  Object.assign(Object.assign({}, t), {
                    tooltip: e("$$", t.tooltip),
                  }),
                ),
              ),
              p = (0, a.Fl)(() => {
                switch (r.value) {
                  case l.It.TOPIC:
                    return "topic-panel";
                  case l.It.NOTE:
                    return "note-panel";
                  case l.It.TAG:
                    return "tag-panel";
                }
              }),
              h = (e) => {
                t({ tab: e });
              },
              m = () => {
                n({});
                const { executeEditorAction: e } = (0, s.nZ)();
                e({ name: "mutateEditor:setHighlightLabels", payload: [] }),
                  e({ name: "mutateEditor:setHighlightMarkers", payload: [] }),
                  e({ name: "mutateEditor:setHighlightTasks", payload: [] });
              };
            (0, a.YP)(
              () => (0, o.$)().searchPanelTab,
              (e, t) => {
                t === l.It.TAG && e !== l.It.TAG && m();
              },
            );
            return (
              (0, a.YP)(
                () => (0, o.$)().isOutlinerMode,
                (e) => {
                  e && h(l.It.TOPIC);
                },
              ),
              {
                isOutlinerMode: u,
                searchPanelTabs: d,
                searchPanelTab: r,
                searchPanelHighlightParam: c,
                searchPanelTabComponent: p,
                switchSearchPanelTab: h,
                handleSearchPanelClose: () => {
                  t({ visible: !1 }), m();
                },
              }
            );
          },
        });
      const B = (0, C.Z)(
        F,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "div",
            {
              directives: [
                {
                  name: "focus-contexts",
                  rawName: "v-focus-contexts:group",
                  value: ["focus.searchPanel"],
                  expression: "['focus.searchPanel']",
                  arg: "group",
                },
              ],
              staticClass:
                "uk-flex uk-flex-column uk-height-1-1 uk-panel uk-position-left uk-format-panel",
              style: `width: ${e.panelWidth}px`,
            },
            [
              t(
                "div",
                {
                  staticClass: "uk-flex uk-flex-between uk-flex-middle",
                  staticStyle: { height: "28px" },
                },
                [
                  t("div", [
                    e.isOutlinerMode
                      ? e._e()
                      : t(
                          "ul",
                          {
                            staticClass:
                              "uk-tab uk-tab-capsule uk-margin-remove-bottom navigation-panel-ul",
                            staticStyle: { "padding-left": "4px" },
                          },
                          e._l(e.searchPanelTabs, function (n, a) {
                            return t(
                              "li",
                              {
                                key: n.key,
                                staticClass: "divider-vertical",
                                class: {
                                  "uk-active": n.key === e.searchPanelTab,
                                  "divider-vertical-active":
                                    n.key === e.searchPanelTab,
                                  "divider-vertical-clear": 0 === a,
                                },
                                on: {
                                  click: function (t) {
                                    return e.switchSearchPanelTab(n.key);
                                  },
                                },
                              },
                              [
                                t(
                                  "a",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: n.key !== e.searchPanelTab,
                                        expression:
                                          "item.key !== searchPanelTab",
                                      },
                                    ],
                                    staticStyle: {
                                      width: "28px",
                                      color: "unset",
                                    },
                                    attrs: {
                                      href: "#",
                                      title: n.tooltip,
                                      draggable: "false",
                                    },
                                  },
                                  [
                                    t("img", {
                                      staticStyle: { "margin-top": "-3px" },
                                      attrs: { src: n.image, "uk-svg": "" },
                                    }),
                                  ],
                                ),
                                e._v(" "),
                                t(
                                  "a",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: n.key === e.searchPanelTab,
                                        expression:
                                          "item.key === searchPanelTab",
                                      },
                                    ],
                                    staticStyle: {
                                      width: "28px",
                                      color: "#fff",
                                      "background-color": "#0f66de",
                                    },
                                    attrs: {
                                      href: "#",
                                      title: n.tooltip,
                                      draggable: "false",
                                    },
                                  },
                                  [
                                    t("img", {
                                      staticStyle: { "margin-top": "-3px" },
                                      attrs: { src: n.image, "uk-svg": "" },
                                    }),
                                  ],
                                ),
                              ],
                            );
                          }),
                          0,
                        ),
                  ]),
                  e._v(" "),
                  t("button", {
                    directives: [
                      {
                        name: "focus-contexts",
                        rawName: "v-focus-contexts:no",
                        arg: "no",
                      },
                    ],
                    staticClass:
                      "uk-button uk-button-tile uk-button-icon uk-icon uk-margin-small-right",
                    staticStyle: {
                      width: "20px",
                      height: "20px",
                      "min-height": "20px",
                    },
                    attrs: { "uk-icon": "close" },
                    on: { click: e.handleSearchPanelClose },
                  }),
                ],
              ),
              e._v(" "),
              t("hr", { staticClass: "uk-margin-remove" }),
              e._v(" "),
              t(
                "keep-alive",
                [
                  t(e.searchPanelTabComponent, {
                    tag: "component",
                    attrs: {
                      "panel-width": 264,
                      "highlight-param": e.searchPanelHighlightParam,
                    },
                  }),
                ],
                1,
              ),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "f78b4d64",
        null,
      ).exports;
    },
    64391: (e, t, n) => {
      var a = n(46754);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals);
      (0, n(45346).Z)("2bd5954c", a, !0, {});
    },
    37509: (e, t, n) => {
      var a = n(63693);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals);
      (0, n(45346).Z)("075c2aeb", a, !0, {});
    },
  },
]);
