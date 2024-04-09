(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [6457, 716],
  {
    29932: (e) => {
      e.exports = function (e, t) {
        for (var i = -1, n = null == e ? 0 : e.length, a = Array(n); ++i < n; )
          a[i] = t(e[i], i, e);
        return a;
      };
    },
    89465: (e, t, i) => {
      var n = i(38777);
      e.exports = function (e, t, i) {
        "__proto__" == t && n
          ? n(e, t, {
              configurable: !0,
              enumerable: !0,
              value: i,
              writable: !0,
            })
          : (e[t] = i);
      };
    },
    89881: (e, t, i) => {
      var n = i(47816),
        a = i(99291)(n);
      e.exports = a;
    },
    28483: (e, t, i) => {
      var n = i(25063)();
      e.exports = n;
    },
    47816: (e, t, i) => {
      var n = i(28483),
        a = i(3674);
      e.exports = function (e, t) {
        return e && n(e, t, a);
      };
    },
    97786: (e, t, i) => {
      var n = i(71811),
        a = i(40327);
      e.exports = function (e, t) {
        for (var i = 0, o = (t = n(t, e)).length; null != e && i < o; )
          e = e[a(t[i++])];
        return i && i == o ? e : void 0;
      };
    },
    13: (e) => {
      e.exports = function (e, t) {
        return null != e && t in Object(e);
      };
    },
    2958: (e, t, i) => {
      var n = i(46384),
        a = i(90939);
      e.exports = function (e, t, i, o) {
        var r = i.length,
          l = r,
          s = !o;
        if (null == e) return !l;
        for (e = Object(e); r--; ) {
          var d = i[r];
          if (s && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1;
        }
        for (; ++r < l; ) {
          var u = (d = i[r])[0],
            c = e[u],
            g = d[1];
          if (s && d[2]) {
            if (void 0 === c && !(u in e)) return !1;
          } else {
            var m = new n();
            if (o) var h = o(c, g, u, e, t, m);
            if (!(void 0 === h ? a(g, c, 3, o, m) : h)) return !1;
          }
        }
        return !0;
      };
    },
    67206: (e, t, i) => {
      var n = i(91573),
        a = i(16432),
        o = i(6557),
        r = i(1469),
        l = i(39601);
      e.exports = function (e) {
        return "function" == typeof e
          ? e
          : null == e
            ? o
            : "object" == typeof e
              ? r(e)
                ? a(e[0], e[1])
                : n(e)
              : l(e);
      };
    },
    69199: (e, t, i) => {
      var n = i(89881),
        a = i(98612);
      e.exports = function (e, t) {
        var i = -1,
          o = a(e) ? Array(e.length) : [];
        return (
          n(e, function (e, n, a) {
            o[++i] = t(e, n, a);
          }),
          o
        );
      };
    },
    91573: (e, t, i) => {
      var n = i(2958),
        a = i(1499),
        o = i(42634);
      e.exports = function (e) {
        var t = a(e);
        return 1 == t.length && t[0][2]
          ? o(t[0][0], t[0][1])
          : function (i) {
              return i === e || n(i, e, t);
            };
      };
    },
    16432: (e, t, i) => {
      var n = i(90939),
        a = i(27361),
        o = i(79095),
        r = i(15403),
        l = i(89162),
        s = i(42634),
        d = i(40327);
      e.exports = function (e, t) {
        return r(e) && l(t)
          ? s(d(e), t)
          : function (i) {
              var r = a(i, e);
              return void 0 === r && r === t ? o(i, e) : n(t, r, 3);
            };
      };
    },
    82689: (e, t, i) => {
      var n = i(29932),
        a = i(97786),
        o = i(67206),
        r = i(69199),
        l = i(71131),
        s = i(51717),
        d = i(85022),
        u = i(6557),
        c = i(1469);
      e.exports = function (e, t, i) {
        t = t.length
          ? n(t, function (e) {
              return c(e)
                ? function (t) {
                    return a(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [u];
        var g = -1;
        t = n(t, s(o));
        var m = r(e, function (e, i, a) {
          return {
            criteria: n(t, function (t) {
              return t(e);
            }),
            index: ++g,
            value: e,
          };
        });
        return l(m, function (e, t) {
          return d(e, t, i);
        });
      };
    },
    40371: (e) => {
      e.exports = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      };
    },
    79152: (e, t, i) => {
      var n = i(97786);
      e.exports = function (e) {
        return function (t) {
          return n(t, e);
        };
      };
    },
    71131: (e) => {
      e.exports = function (e, t) {
        var i = e.length;
        for (e.sort(t); i--; ) e[i] = e[i].value;
        return e;
      };
    },
    80531: (e, t, i) => {
      var n = i(62705),
        a = i(29932),
        o = i(1469),
        r = i(33448),
        l = n ? n.prototype : void 0,
        s = l ? l.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (o(t)) return a(t, e) + "";
        if (r(t)) return s ? s.call(t) : "";
        var i = t + "";
        return "0" == i && 1 / t == -Infinity ? "-0" : i;
      };
    },
    71811: (e, t, i) => {
      var n = i(1469),
        a = i(15403),
        o = i(55514),
        r = i(79833);
      e.exports = function (e, t) {
        return n(e) ? e : a(e, t) ? [e] : o(r(e));
      };
    },
    26393: (e, t, i) => {
      var n = i(33448);
      e.exports = function (e, t) {
        if (e !== t) {
          var i = void 0 !== e,
            a = null === e,
            o = e == e,
            r = n(e),
            l = void 0 !== t,
            s = null === t,
            d = t == t,
            u = n(t);
          if (
            (!s && !u && !r && e > t) ||
            (r && l && d && !s && !u) ||
            (a && l && d) ||
            (!i && d) ||
            !o
          )
            return 1;
          if (
            (!a && !r && !u && e < t) ||
            (u && i && o && !a && !r) ||
            (s && i && o) ||
            (!l && o) ||
            !d
          )
            return -1;
        }
        return 0;
      };
    },
    85022: (e, t, i) => {
      var n = i(26393);
      e.exports = function (e, t, i) {
        for (
          var a = -1,
            o = e.criteria,
            r = t.criteria,
            l = o.length,
            s = i.length;
          ++a < l;

        ) {
          var d = n(o[a], r[a]);
          if (d) return a >= s ? d : d * ("desc" == i[a] ? -1 : 1);
        }
        return e.index - t.index;
      };
    },
    99291: (e, t, i) => {
      var n = i(98612);
      e.exports = function (e, t) {
        return function (i, a) {
          if (null == i) return i;
          if (!n(i)) return e(i, a);
          for (
            var o = i.length, r = t ? o : -1, l = Object(i);
            (t ? r-- : ++r < o) && !1 !== a(l[r], r, l);

          );
          return i;
        };
      };
    },
    25063: (e) => {
      e.exports = function (e) {
        return function (t, i, n) {
          for (var a = -1, o = Object(t), r = n(t), l = r.length; l--; ) {
            var s = r[e ? l : ++a];
            if (!1 === i(o[s], s, o)) break;
          }
          return t;
        };
      };
    },
    38777: (e, t, i) => {
      var n = i(10852),
        a = (function () {
          try {
            var e = n(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        })();
      e.exports = a;
    },
    1499: (e, t, i) => {
      var n = i(89162),
        a = i(3674);
      e.exports = function (e) {
        for (var t = a(e), i = t.length; i--; ) {
          var o = t[i],
            r = e[o];
          t[i] = [o, r, n(r)];
        }
        return t;
      };
    },
    222: (e, t, i) => {
      var n = i(71811),
        a = i(35694),
        o = i(1469),
        r = i(65776),
        l = i(41780),
        s = i(40327);
      e.exports = function (e, t, i) {
        for (var d = -1, u = (t = n(t, e)).length, c = !1; ++d < u; ) {
          var g = s(t[d]);
          if (!(c = null != e && i(e, g))) break;
          e = e[g];
        }
        return c || ++d != u
          ? c
          : !!(u = null == e ? 0 : e.length) &&
              l(u) &&
              r(g, u) &&
              (o(e) || a(e));
      };
    },
    15403: (e, t, i) => {
      var n = i(1469),
        a = i(33448),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        r = /^\w*$/;
      e.exports = function (e, t) {
        if (n(e)) return !1;
        var i = typeof e;
        return (
          !(
            "number" != i &&
            "symbol" != i &&
            "boolean" != i &&
            null != e &&
            !a(e)
          ) ||
          r.test(e) ||
          !o.test(e) ||
          (null != t && e in Object(t))
        );
      };
    },
    89162: (e, t, i) => {
      var n = i(13218);
      e.exports = function (e) {
        return e == e && !n(e);
      };
    },
    42634: (e) => {
      e.exports = function (e, t) {
        return function (i) {
          return null != i && i[e] === t && (void 0 !== t || e in Object(i));
        };
      };
    },
    24523: (e, t, i) => {
      var n = i(88306);
      e.exports = function (e) {
        var t = n(e, function (e) {
            return 500 === i.size && i.clear(), e;
          }),
          i = t.cache;
        return t;
      };
    },
    55514: (e, t, i) => {
      var n = i(24523),
        a =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        r = n(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(a, function (e, i, n, a) {
              t.push(n ? a.replace(o, "$1") : i || e);
            }),
            t
          );
        });
      e.exports = r;
    },
    40327: (e, t, i) => {
      var n = i(33448);
      e.exports = function (e) {
        if ("string" == typeof e || n(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Infinity ? "-0" : t;
      };
    },
    27361: (e, t, i) => {
      var n = i(97786);
      e.exports = function (e, t, i) {
        var a = null == e ? void 0 : n(e, t);
        return void 0 === a ? i : a;
      };
    },
    79095: (e, t, i) => {
      var n = i(13),
        a = i(222);
      e.exports = function (e, t) {
        return null != e && a(e, t, n);
      };
    },
    6557: (e) => {
      e.exports = function (e) {
        return e;
      };
    },
    66604: (e, t, i) => {
      var n = i(89465),
        a = i(47816),
        o = i(67206);
      e.exports = function (e, t) {
        var i = {};
        return (
          (t = o(t, 3)),
          a(e, function (e, a, o) {
            n(i, a, t(e, a, o));
          }),
          i
        );
      };
    },
    88306: (e, t, i) => {
      var n = i(83369);
      function a(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var i = function () {
          var n = arguments,
            a = t ? t.apply(this, n) : n[0],
            o = i.cache;
          if (o.has(a)) return o.get(a);
          var r = e.apply(this, n);
          return (i.cache = o.set(a, r) || o), r;
        };
        return (i.cache = new (a.Cache || n)()), i;
      }
      (a.Cache = n), (e.exports = a);
    },
    75472: (e, t, i) => {
      var n = i(82689),
        a = i(1469);
      e.exports = function (e, t, i, o) {
        return null == e
          ? []
          : (a(t) || (t = null == t ? [] : [t]),
            a((i = o ? void 0 : i)) || (i = null == i ? [] : [i]),
            n(e, t, i));
      };
    },
    39601: (e, t, i) => {
      var n = i(40371),
        a = i(79152),
        o = i(15403),
        r = i(40327);
      e.exports = function (e) {
        return o(e) ? n(r(e)) : a(e);
      };
    },
    79833: (e, t, i) => {
      var n = i(80531);
      e.exports = function (e) {
        return null == e ? "" : n(e);
      };
    },
    56318: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => s });
      var n = i(2954),
        a = i(18621),
        o = i(93090),
        r = i(69931),
        l = i(50965);
      const s = () => {
        const e = (0, n.Fl)(() => (0, l.fl)().favoriteColorThemeIds),
          t = (0, n.Fl)(() => ({
            normal: (0, r.Al)(
              "static/assets/images/color-theme-panel/favorite-normal.svg",
            ),
            active: (0, r.Al)(
              "static/assets/images/color-theme-panel/favorite-active.svg",
            ),
          }));
        return {
          favoriteIcons: t,
          getFavoriteIcon: (i) =>
            e.value.includes(i) ? t.value.active : t.value.normal,
          handleFavorite: (t) => {
            e.value.includes(t)
              ? (0, l.fl)().removeFavoriteColorTheme(t)
              : ((0, a.L9)({
                  eventAction: "favoriteColor",
                  eventName: (0, o.XO)(t) ? `${t} (colored)` : t,
                }),
                (0, l.fl)().addFavoriteColorTheme(t));
          },
        };
      };
    },
    70716: (e, t, i) => {
      "use strict";
      var n;
      i.d(t, { v: () => n, w: () => a }),
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
        })(n || (n = {}));
      const a = {
        [n.MAPUNBALANCED]: "map-unbalance",
        [n.MAPCLOCKWISE]: "map-clockwise",
        [n.LOGICRIGHT]: "logic-right",
        [n.LOGICLEFT]: "logic-left",
        [n.BRACERIGHT]: "brace-right",
        [n.BRACELEFT]: "brace-left",
        [n.TREERIGHT]: "tree-right",
        [n.TREELEFT]: "tree-left",
        [n.ORGCHARTDOWN]: "org-down",
        [n.ORGCHARTUP]: "org-up",
        [n.FISHBONELEFTHEADED]: "fishbone-left",
        [n.FISHBONERIGHTHEADED]: "fishbone-right",
        [n.TIMELINEHORIZONTAL]: "timeline-horizontal",
        [n.TIMELINEVERTICAL]: "timeline-vertical",
        [n.TIMELINETHROUGHVERTICAL]: "timeline-through-vertical",
        [n.TIMELINESIDEDHORIZONTAL]: "timeline-sided-horizontal",
        [n.SPREADSHEET]: "matrix-row",
        [n.COLUMNSPREADSHEET]: "matrix-column",
        [n.TOPTITLETREETABLE]: "tree-table-column",
        [n.TREETABLE]: "tree-table-row",
      };
    },
    26457: (e, t, i) => {
      "use strict";
      i.r(t),
        i.d(t, {
          exportBranchAsPNG: () => T,
          exportBranchAsSVG: () => P,
          exportImage: () => k,
        });
      var n = i(54856),
        a = i(16704),
        o = i(96160),
        r = i(71596),
        l = i(90435),
        s = i(18621),
        d = i(71017),
        u = i.n(d),
        c = i(72298),
        g = i(41809),
        m = i(50965),
        h = i(5893),
        p = i(42799),
        v = i(94787),
        b = i(94593),
        f = i(86633),
        x = i(13382),
        y = i(95246),
        I = i(92636),
        S = function (e, t, i, n) {
          return new (i || (i = Promise))(function (a, o) {
            function r(e) {
              try {
                s(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, l);
            }
            s((n = n.apply(e, t || [])).next());
          });
        };
      const w = (0, f.ZP)("export:png"),
        T = () =>
          S(void 0, void 0, void 0, function* () {
            yield (0, v.Ae)("png");
            const { activeSheetId: e, selection: t, document: i } = (0, o.nZ)(),
              { status: n } = (0, m.Yh)(),
              a = t.value.modelIds;
            if (0 === a.length) return;
            const r = (0, v.nv)(a),
              l = n === I.wi.VALID,
              s = new v.Y8(),
              d = yield Promise.all(
                r.map((t) =>
                  S(void 0, void 0, void 0, function* () {
                    const n = i.value.query({ id: t }).asTopic().title;
                    return {
                      fileName: s.makeSafeName(n),
                      fileData: yield O(
                        e.value,
                        { isBrandingInside: !l, transparent: !1 },
                        t,
                      ),
                    };
                  }),
                ),
              );
            if ((yield (0, v.Gm)(), 1 === d.length)) {
              const { fileData: e, fileName: t } = d[0];
              L(e, t);
            } else d.length > 1 && E(d);
          }),
        O = (
          e,
          {
            isBrandingInside: t = !1,
            transparent: i = !1,
            scale: n = 1,
            aspectRatio: a = 0,
            insidePaddingBottom: r = 0,
          },
          l,
        ) =>
          S(void 0, void 0, void 0, function* () {
            const { getSheetViewer: s } = (0, o.nZ)(),
              d = s(e),
              u = yield (0, v.J2)(
                () =>
                  d.exportSVGElement({
                    padding: {
                      top: 50,
                      left: 50,
                      right: 50,
                      bottom: t ? r + 50 : 50,
                    },
                    opaqueBackground: !i,
                    aspectRatio: a,
                    scopeTopicId: l,
                  }),
                w,
              );
            if (!u) return;
            const c = {
              data: u,
              scale: n,
              width: Number(u.getAttribute("width")) * n,
              height: Number(u.getAttribute("height")) * n,
            };
            return yield Z(c);
          }),
        L = (e, t) =>
          S(void 0, void 0, void 0, function* () {
            const i = yield (0, x.ZZ)({
              title: "Export",
              properties: ["createDirectory"],
              suggestPath: { suggestedName: t },
              filters: [{ name: "PNG", extensions: ["png"] }],
            });
            i &&
              (yield b.Z.writeFile(i, Buffer.from(e.slice(22), "base64")),
              (0, m.Rg)().addRateMasValue(10),
              c.shell.openPath(i));
          }),
        E = (e) =>
          S(void 0, void 0, void 0, function* () {
            const { T: t } = (0, m.JE)(),
              i = yield (0, x.eq)({
                folderName: null,
                dialogOptions: {
                  buttonLabel: t("Save"),
                  properties: ["openDirectory", "createDirectory"],
                },
              });
            if (!i) return;
            const n = (0, p.F)().title || "",
              a = u().join(i, n);
            b.Z.ensureDirSync(a),
              yield Promise.all(
                e.map((e) => {
                  const { fileData: t, fileName: i } = e,
                    n = u().join(a, i + ".png");
                  return (0, v.yS)(n, Buffer.from(t.slice(22), "base64"));
                }),
              ),
              c.shell.openPath(a);
          }),
        Z = (e) =>
          S(void 0, void 0, void 0, function* () {
            const t = (0, y.gP)(),
              i = 25.4 / t.x,
              n = 25.4 / t.y,
              o = e.width,
              r = e.height,
              l = {
                orientation: o > r ? "landscape" : "portrait",
                pageSize: {
                  x: Math.max(Math.round(Math.min(o, r) * i) + 1, 21),
                  y: Math.round(Math.max(o, r) * n) + 1,
                },
              },
              s = l.pageSize,
              d = l.orientation,
              u = "portrait" === d ? s.x : s.y,
              c = "portrait" === d ? s.y : s.x,
              m = {
                x: Math.round((u * t.x) / 25.4),
                y: Math.round((c * t.y) / 25.4),
              },
              h = "print_" + (0, a.hb)(),
              p = e.data;
            p.setAttribute("width", m.x.toString()),
              p.setAttribute("height", m.y.toString()),
              p.setAttribute("id", h),
              (p.style.display = ""),
              p.classList.add("print-el"),
              p.setAttribute("width", e.width.toString()),
              p.setAttribute("height", e.height.toString());
            const b = new XMLSerializer().serializeToString(p),
              f = new Blob([b], { type: "image/svg+xml" }),
              x = yield new Promise((e) => {
                const t = new FileReader();
                (t.onload = () => {
                  e(t.result);
                }),
                  t.readAsDataURL(f);
              }),
              I = (0, y.JX)();
            let S = yield (0, v.qM)(x, I, "string");
            return I > 1 && (S = (0, g.Hv)(S, 72 * I)), S;
          });
      var B = i(67657),
        W = function (e, t, i, n) {
          return new (i || (i = Promise))(function (a, o) {
            function r(e) {
              try {
                s(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, l);
            }
            s((n = n.apply(e, t || [])).next());
          });
        };
      const P = () =>
          W(void 0, void 0, void 0, function* () {
            const { T: e } = (0, m.JE)(),
              { selection: t, document: i, activeSheet: n } = (0, o.nZ)(),
              { title: a, id: r } = n.value,
              l = t.value.modelIds;
            if (0 === l.length) return;
            const s = (0, v.nv)(l),
              d = new v.Y8(),
              g = yield Promise.all(
                s.map((e) =>
                  W(void 0, void 0, void 0, function* () {
                    var t;
                    const n = yield C(r, !1, e),
                      o = i.value.query({ id: e }).asTopic().title;
                    return {
                      fileName:
                        null !== (t = d.makeSafeName(o)) && void 0 !== t
                          ? t
                          : a,
                      fileData: n,
                    };
                  }),
                ),
              );
            if (1 === g.length) {
              const e = g[0],
                { fileData: t, fileName: i } = e,
                n = yield (0, x.ZZ)({
                  title: "Export",
                  suggestPath: { suggestedName: i },
                  properties: ["createDirectory"],
                  filters: [{ name: "SVG", extensions: ["svg"] }],
                });
              if (!n) return;
              yield (0, v.yS)(n, t),
                (0, m.Rg)().addRateMasValue(10),
                c.shell.showItemInFolder(n);
            } else if (g.length > 1) {
              const t = yield (0, x.eq)({
                folderName: a,
                dialogOptions: {
                  buttonLabel: e("Save"),
                  properties: ["openDirectory", "createDirectory"],
                },
              });
              if (!t) return;
              b.Z.existsSync(t) || b.Z.ensureDir(t),
                Promise.all(
                  g.map(({ fileData: e, fileName: i }) => {
                    const n = u().join(t, i + ".svg");
                    return (0, v.yS)(n, e);
                  }),
                ).then(() => c.shell.openPath(t));
            }
          }),
        C = (e, t, i) =>
          W(void 0, void 0, void 0, function* () {
            const { sheets: n, getSheetViewer: a } = (0, o.nZ)(),
              r = a(n.value.find((t) => t.id === e).id),
              l = Date.now();
            (0, s.L9)({
              eventCategory: "export",
              eventAction: "durationExportSvg",
              eventValue: Date.now() - l,
            });
            return (yield r.exportSVGImage({
              padding: { left: 50, right: 50, top: 50, bottom: 50 },
              opaqueBackground: !t,
              scopeTopicId: i,
            })).svg;
          });
      var D = i(70716),
        F = function (e, t, i, n) {
          return new (i || (i = Promise))(function (a, o) {
            function r(e) {
              try {
                s(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, l);
            }
            s((n = n.apply(e, t || [])).next());
          });
        };
      const A = ({
          sheetId: e,
          opaqueBackground: t,
          disableEmbedFonts: i,
          aspectRatio: n,
        }) =>
          F(void 0, void 0, void 0, function* () {
            const a = [],
              { getSheetViewer: r, sheets: l } = (0, o.nZ)(),
              s = l.value.find((t) => t.id === e),
              d = r(e),
              { exportSVGElementForLevelTwo: u, exportSVGElementWithSize: c } =
                d;
            yield u({
              padding: { left: 80, top: 80, right: 80, bottom: 80 },
              opaqueBackground: t,
              aspectRatio: n,
              disableEmbedFonts: i,
            }).then(({ svg: t, size: i }) => {
              const n = new XMLSerializer().serializeToString(t);
              a.push({
                sheetId: e,
                topicId: s.rootTopic.id,
                data: n,
                width: i.width,
                height: i.height,
              });
            });
            const g = [...s.rootTopic.children, ...s.rootTopic.detachedChildren]
              .filter(({ id: e }) => M(e))
              .map((o) =>
                c({
                  padding: { left: 80, top: 80, right: 80, bottom: 80 },
                  scopeTopicId: o.id,
                  opaqueBackground: t,
                  aspectRatio: n,
                  disableEmbedFonts: i,
                }).then(({ svg: t, size: i }) => {
                  const n = new XMLSerializer().serializeToString(t);
                  a.push({
                    sheetId: e,
                    topicId: o.id,
                    data: n,
                    width: i.width,
                    height: i.height,
                  });
                }),
              );
            return yield Promise.all(g), a;
          }),
        N = (e, t, i, n, a) =>
          F(void 0, void 0, void 0, function* () {
            const { document: r, sheets: l } = (0, o.nZ)(),
              s = new v.Y8(),
              d = (yield Promise.all(
                e.map((e) =>
                  A({ sheetId: e, opaqueBackground: i, aspectRatio: n }),
                ),
              ))
                .flat()
                .map((e) => {
                  const { topicId: t, sheetId: i } = e,
                    n = l.value.find(({ id: e }) => e === i).title,
                    a = r.value.query({ id: t }).asTopic(),
                    o = s.makeSafeName(`${n}_${a.title || ""}`);
                  return Object.assign(Object.assign({}, e), { basename: o });
                });
            if ("svg" === t)
              return d.map(({ basename: e, data: t }) => ({
                data: t,
                filename: e + ".svg",
              }));
            if ("png" === t) {
              const e = d.map(({ data: e, width: t, height: i, basename: n }) =>
                R({ data: e, width: t, height: i, scale: a }).then((e) => ({
                  data: Buffer.from(e.slice(22), "base64"),
                  filename: n + ".png",
                })),
              );
              return yield Promise.all(e);
            }
          }),
        R = (e) =>
          F(void 0, void 0, void 0, function* () {
            const { data: t, width: i, height: n, scale: a } = e,
              o = null != a ? a : 1,
              r = new DOMParser().parseFromString(
                t,
                "image/svg+xml",
              ).firstChild;
            return yield Z({ width: i * o, height: n * o, scale: o, data: r });
          }),
        j = (e, t) =>
          F(void 0, void 0, void 0, function* () {
            const i = e.map(({ data: e, filename: i }) => {
              const n = u().join(t, i);
              (0, v.yS)(n, e);
            });
            yield Promise.all(i);
          }),
        M = (e) => {
          const { document: t } = (0, o.nZ)(),
            i = t.value.query({ id: e }).asTopic(),
            n = i.children.length > 0,
            a = "folded" === i.branchState;
          return n && !a;
        };
      var H = function (e, t, i, n) {
        return new (i || (i = Promise))(function (a, o) {
          function r(e) {
            try {
              s(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              s(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(r, l);
          }
          s((n = n.apply(e, t || [])).next());
        });
      };
      const k = (e = "png", t = {}) =>
          H(void 0, void 0, void 0, function* () {
            yield (0, r.Z)().init();
            const t = yield $(e);
            if (t) {
              if (t.isSmartSplit)
                return (
                  (i = t),
                  F(void 0, void 0, void 0, function* () {
                    const {
                        sheetSelection: e,
                        type: t,
                        transparent: n,
                        aspectRatio: a,
                        scale: o,
                      } = i,
                      { T: l } = (0, m.JE)(),
                      { title: s } = (0, p.F)(),
                      { buildImageEffect: d } = (0, r.Z)(),
                      c = yield (0, x.eq)({
                        folderName: null,
                        dialogOptions: {
                          buttonLabel: l("Save"),
                          properties: ["openDirectory", "createDirectory"],
                          securityScopedBookmarks: !0,
                        },
                      });
                    if (!c) return;
                    const g = u().join(c, s);
                    b.Z.existsSync(g) || b.Z.ensureDir(g), yield (0, v.Ae)(t);
                    const h = yield N(e, t, !n, a, o),
                      f = yield Promise.all(
                        h.map(({ data: e, filename: t }) =>
                          F(void 0, void 0, void 0, function* () {
                            if ("png" === i.type) {
                              const i = "data:image/png;base64,",
                                n = `${i}${e.toString("base64")}`,
                                a = yield d(n);
                              return {
                                data: Buffer.from(a.slice(i.length), "base64"),
                                filename: t,
                              };
                            }
                            return { data: e, filename: t };
                          }),
                        ),
                      );
                    yield j(f, g), yield (0, v.Gm)(), B.shell.openPath(g);
                  })
                );
              var i, n;
              if ("png" === t.type)
                if ("current-map" === t.contentScope) {
                  const e = Date.now();
                  yield ((e) =>
                    S(void 0, void 0, void 0, function* () {
                      var t;
                      const {
                          isBrandingInside: i,
                          insidePaddingBottom: n,
                          transparent: a,
                          scale: l,
                          aspectRatio: s,
                        } = e,
                        { activeSheet: d, activeSheetId: u } = (0, o.nZ)(),
                        { buildImageEffect: c } = (0, r.Z)();
                      yield (0, v.Ae)("png");
                      const g = yield O(u.value, {
                          isBrandingInside: i,
                          insidePaddingBottom: n,
                          transparent: a,
                          scale: l,
                          aspectRatio: s,
                        }),
                        m = yield c(g),
                        p = d.value.title,
                        b = d.value.rootTopic.title,
                        f = (0, h.N6)(
                          null !== (t = null != b ? b : p) && void 0 !== t
                            ? t
                            : "",
                        );
                      yield (0, v.Gm)(), yield L(m, f);
                    }))(t),
                    (0, s.L9)({
                      eventCategory: "export",
                      eventAction: "durationExportPng",
                      eventValue: Date.now() - e,
                    });
                } else
                  yield ((e) =>
                    S(void 0, void 0, void 0, function* () {
                      const {
                          isBrandingInside: t,
                          insidePaddingBottom: i,
                          transparent: n,
                          scale: a,
                          aspectRatio: l,
                        } = e,
                        { sheets: s } = (0, o.nZ)(),
                        { buildImageEffect: d } = (0, r.Z)(),
                        u = s.value.filter((t) =>
                          e.sheetSelection.includes(t.id),
                        );
                      yield (0, v.Ae)("png");
                      const c = new v.Y8(),
                        g = yield Promise.all(
                          u.map((e) =>
                            S(void 0, void 0, void 0, function* () {
                              const o = yield O(e.id, {
                                  isBrandingInside: t,
                                  insidePaddingBottom: i,
                                  transparent: n,
                                  scale: a,
                                  aspectRatio: l,
                                }),
                                r = yield d(o),
                                s = e.title;
                              return {
                                fileData: r,
                                fileName: c.makeSafeName(s),
                              };
                            }),
                          ),
                        );
                      yield (0, v.Gm)(), yield E(g);
                    }))(t);
              else
                "svg" === t.type &&
                  ("current-map" === t.contentScope
                    ? yield ((n = t.transparent),
                      W(void 0, void 0, void 0, function* () {
                        var e;
                        const { activeSheetId: t, activeSheet: i } = (0,
                        o.nZ)();
                        yield (0, v.Ae)("svg");
                        const a = yield C(t.value, n),
                          r = i.value.title,
                          l = i.value.rootTopic.title,
                          s = (0, h.N6)(
                            null !== (e = null != l ? l : r) && void 0 !== e
                              ? e
                              : "",
                          );
                        yield (0, v.Gm)();
                        const d = yield (0, x.ZZ)({
                          title: "Export",
                          suggestPath: { suggestedName: s },
                          properties: ["createDirectory"],
                          filters: [{ name: "SVG", extensions: ["svg"] }],
                        });
                        d &&
                          (yield (0, v.yS)(d, a),
                          (0, m.Rg)().addRateMasValue(10),
                          c.shell.showItemInFolder(d));
                      }))
                    : yield ((e) =>
                        W(void 0, void 0, void 0, function* () {
                          yield (0, v.Ae)("svg"), yield (0, v.C7)();
                          const { sheetSelection: t, transparent: i } = e,
                            n = (0, m.JE)().T,
                            { sheets: a } = (0, o.nZ)(),
                            { title: r } = (0, p.F)(),
                            l = (0, x.am)({});
                          yield (0, v.Gm)();
                          const { canceled: s, filePaths: d } =
                            yield B.dialog.showOpenDialog(
                              (0, B.getCurrentWindow)(),
                              {
                                buttonLabel: n("Save"),
                                properties: [
                                  "openDirectory",
                                  "createDirectory",
                                ],
                                defaultPath: l,
                                securityScopedBookmarks: !0,
                              },
                            );
                          if (s || !d || !d.length) return;
                          const g = u().join(d[0], r);
                          b.Z.existsSync(g) || b.Z.ensureDir(g);
                          const h = a.value.filter((e) => t.includes(e.id)),
                            f = new v.Y8();
                          Promise.all(
                            h.map((e) =>
                              W(void 0, void 0, void 0, function* () {
                                const t = yield C(e.id, i),
                                  n = e.title,
                                  a = f.makeSafeName(n),
                                  o = u().join(g, a + ".svg");
                                return (0, v.yS)(o, t);
                              }),
                            ),
                          ).then(() => {
                            c.shell.openPath(g);
                          });
                        }))(t),
                  (0, s.L9)({
                    eventCategory: "export",
                    eventAction: "exportSvg",
                  }));
            }
          }),
        $ = (e = "png", t = {}) =>
          H(void 0, void 0, void 0, function* () {
            var t;
            const {
                sheets: i,
                activeSheetFigure: r,
                activeSheetId: s,
                getSheetViewer: d,
              } = (0, o.nZ)(),
              u = (0, a.hb)(),
              c = l.ZP.route(
                (0, n.vN)(u),
                ({
                  sheetId: e,
                  opaqueBackground: t,
                  isBrandingInside: i,
                  aspectRatio: n,
                  insidePaddingBottom: a,
                }) =>
                  H(void 0, void 0, void 0, function* () {
                    const o = d(e),
                      r = yield o.exportSVGElement({
                        opaqueBackground: t,
                        disableEmbedFonts: !0,
                        padding: {
                          top: 50,
                          left: 50,
                          right: 50,
                          bottom: i ? a + 50 : 50,
                        },
                        aspectRatio: n,
                      });
                    return {
                      data: r.outerHTML,
                      width: r.getAttribute("width"),
                      height: r.getAttribute("height"),
                    };
                  }),
              ),
              g = l.ZP.route((0, n.Yo)(u, "export"), A),
              m = null === (t = r.value) || void 0 === t ? void 0 : t.bounds,
              h = i.value.map((e) => e.id),
              p = h.filter((e) =>
                ((e) => {
                  const { sheets: t } = (0, o.nZ)(),
                    i = t.value.find((t) => t.id === e).rootTopic,
                    n = i.structureClass;
                  return (
                    ![
                      D.v.SPREADSHEET,
                      D.v.COLUMNSPREADSHEET,
                      D.v.TREETABLE,
                      D.v.TOPTITLETREETABLE,
                    ].includes(n) &&
                    [...i.children, ...i.detachedChildren].some((e) => M(e.id))
                  );
                })(e),
              ),
              v = i.value.map((e) => e.title),
              { result: b } = yield l.ZP.fetch(n.Fx, {
                name: "dialog-export-to-image",
                parentId: window.id,
                wait: !0,
                query: {
                  type: e,
                  bound: [
                    (null == m ? void 0 : m.width) || 0,
                    (null == m ? void 0 : m.height) || 0,
                  ],
                  editorId: window.editorId,
                  currentSheetId: s.value,
                  routeId: u,
                  sheetIds: h,
                  sheetTitles: v,
                  splitAbleSheetIds: p,
                },
              });
            return c && c(), g && g(), b;
          });
    },
    87546: (e, t, i) => {
      "use strict";
      i.d(t, { M: () => g });
      var n = i(2954),
        a = i(50965),
        o = i(69931),
        r = i(94593),
        l = i(29776),
        s = i(96160),
        d = i(56318),
        u = i(95955),
        c = function (e, t, i, n) {
          return new (i || (i = Promise))(function (a, o) {
            function r(e) {
              try {
                s(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, l);
            }
            s((n = n.apply(e, t || [])).next());
          });
        };
      const g = () => {
        const { T: e } = (0, a.JE)(),
          t = (0, s.nZ)(),
          { favoriteIcons: i } = (0, d.Z)(),
          {
            addSmartColorTheme: g,
            removeSmartColorTheme: m,
            removeFavoriteColorTheme: h,
            changeLastUsedColorThemeId: p,
          } = (0, a.fl)(),
          {
            colorThemeById: v,
            getSmartColorThemeGroups: b,
            getClassicColorThemeGroups: f,
            getColorThemePreviewDataUrl: x,
          } = t.themeModule,
          y = (0, n.iH)(!1);
        s.h0.initThemePreviewModule().then(() => {
          y.value = !0;
        });
        const I = (0, n.Fl)(() => (0, a.S)().language),
          S = (0, n.Fl)(() => {
            const { activeSheet: e, allTopicsWithin: i } = t;
            return e.value ? Array.from(i([e.value.rootTopic])).length : 0;
          }),
          w = (0, n.Fl)(() => b(j(I.value))),
          T = (0, n.Fl)(() => f(j(I.value))),
          O = (e) => {
            const t = L.value.find((t) => t.idList.includes(e));
            if (!t) return !1;
            return "pro" === t.license;
          },
          L = (0, n.Fl)(() => [w.value, T.value, E.value].flat()),
          E = (0, n.Fl)(() =>
            (0, a.fl)().smartColorThemes.map((e) => ({
              license: "free",
              idList: e.idList,
              colorList: e.colorList,
              themeName: e.name,
              uiName: e.name,
              customThemeGroupId: e.id,
            })),
          ),
          Z = (0, n.Fl)(() => {
            y.value;
            const e = B.value.map((e) => {
                const i = E.value.find(({ idList: t }) => t && t.includes(e)),
                  n = i && i.customThemeGroupId,
                  r = n ? R(n, e) : x(e, t.currentSkeletonId.value);
                let l = "";
                return (
                  !true &&
                    O(e) &&
                    (l = (0, o.ju)(
                      "static/assets/images/pro/pro-small-with-border.svg",
                    )),
                  { id: e, icon: l, previewURL: r }
                );
              }),
              i = L.value.reduce((e, t) => e.concat(t.idList), []),
              n = e.filter((e) => i.includes(e.id));
            return n.length > 0 ? [{ items: n }] : [];
          }),
          B = (0, n.Fl)(() => (0, a.fl)().favoriteColorThemeIds),
          W = (0, n.Fl)(() => !!Z.value.length),
          P = (0, n.Fl)(() => !!E.value.length),
          C = (0, n.iH)("smart"),
          D = (0, n.Fl)(() => t.currentColorThemeId.value || ""),
          F = (0, n.Fl)(() => {
            y.value;
            const e = [w.value, T.value, E.value]
              .flat()
              .find(({ idList: e }) => e.includes(D.value));
            if (!e) return null;
            const { themeName: i, uiName: n, colorList: a, idList: o } = e;
            let r = !1,
              l = "";
            return (
              "customThemeGroupId" in e &&
                ((r = !0), (l = e.customThemeGroupId)),
              {
                label: i,
                uiName: n,
                colorLists: a,
                items: o.map((e) => ({
                  id: e,
                  previewURL: r ? R(l, e) : x(e, t.currentSkeletonId.value),
                })),
                customThemeGroupId: l,
              }
            );
          }),
          A = (0, n.Fl)(() => {
            const t = [
                { id: "smart", label: e("Colorful") },
                { id: "classic", label: e("Classic") },
              ],
              i = [
                {
                  id: "favorite",
                  tooltip: e("Favorite"),
                  url: "static/assets/images/color-theme-panel/favorite.svg",
                },
              ],
              n = [{ id: "custom", label: e("My Color") }];
            return [...(W.value ? i : []), ...(P.value ? n : []), ...t];
          }),
          N = (0, n.Fl)(() =>
            w.value
              .find((e) => "Rainbow" === e.themeName)
              .idList.map((e) => v(e).theme.map.multiLineColors.split(" ")),
          ),
          R = (e, i) => {
            const n = (0, l.B6)(e, i);
            return (0, l.jS)(n, t.currentSkeletonId.value || l.s9) || "";
          };
        function j(e) {
          switch (e) {
            case "zh-CN":
              return u.i.ZH_CN;
            case "en-US":
            default:
              return u.i.EN_US;
            case "zh-HK":
              return u.i.ZH_HK;
            case "zh-TW":
              return u.i.ZH_TW;
            case "ja-JP":
              return u.i.JA_JP;
            case "de-DE":
              return u.i.DE_DE;
            case "fr-FR":
              return u.i.FR_FR;
            case "es":
              return u.i.ES_ES;
            case "id":
              return u.i.ID_ID;
            case "it-IT":
              return u.i.IT_IT;
            case "ko":
              return u.i.KR_KR;
            case "pt-PT":
              return u.i.PT_PT;
            case "ru-RU":
              return u.i.RU_RU;
            case "th":
              return u.i.TH_TH;
          }
        }
        return {
          tabs: A,
          topicCount: S,
          currentTabId: C,
          currentThemeId: D,
          currentThemePreview: F,
          favoriteThemeList: Z,
          smartColorThemeList: w,
          customColorThemeList: E,
          classicColorThemeList: T,
          rainbowColorLists: N,
          duplicateCustomSCT: (e) => {
            const { themeName: t, colorList: i } = (0, l.CC)(e);
            (0, l.PV)(
              { themeName: t, colorList: i },
              ({ themeName: e, colorList: t, customSCTId: i, idList: n }) => {
                g({ id: i, name: e, colorList: t, idList: n });
              },
            );
          },
          changeColorTheme: (e) => {
            p(e);
            const t = ((e) => {
                const t = E.value.find(({ idList: t }) => t && t.includes(e)),
                  i = t && t.customThemeGroupId;
                let n = null;
                return (n = t ? (0, l.B6)(i, e) : v(e)), n;
              })(e),
              i = {
                name: "mutate:changeColorTheme",
                inputValue: e,
                payload: { colorThemeById: () => t },
              };
            (0, s.nZ)().executeMutationAction(i);
          },
          getFavoriteIcon: (e) =>
            B.value.includes(e) ? i.value.active : i.value.normal,
          deleteCustomSCT: (e, t) =>
            (0, l.LN)(e, () => {
              m(e), t.forEach((e) => h(e));
            }),
          renameCustomSCT: (e, t) => {
            const { colorList: i, idList: n, colorThemeList: a } = (0, l.CC)(e);
            let o;
            try {
              o = JSON.stringify({
                themeName: t,
                colorList: i,
                idList: n,
                colorThemeList: a,
              });
            } catch (e) {
              return;
            }
            (0, l.uv)(
              e,
              (e) =>
                c(void 0, void 0, void 0, function* () {
                  return yield r.Z.writeFile(e, o);
                }),
              () => {
                m(e), g({ id: e, name: t, colorList: i, idList: n });
              },
            );
          },
          isProThemeById: O,
        };
      };
    },
    13548: (e, t, i) => {
      "use strict";
      i.d(t, { Y: () => I, u: () => S });
      var n = i(71017),
        a = i.n(n),
        o = i(2954),
        r = i(66604),
        l = i.n(r),
        s = i(91324),
        d = i(16704),
        u = i(92636),
        c = i(54856),
        g = i(50965),
        m = i(90435),
        h = i(94593),
        p = i(7104),
        v = i(69931),
        b = i(93090),
        f = i(70716),
        x = i(96160),
        y = function (e, t, i, n) {
          return new (i || (i = Promise))(function (a, o) {
            function r(e) {
              try {
                s(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, l);
            }
            s((n = n.apply(e, t || [])).next());
          });
        };
      function I() {
        u.nd ? m.ZP.fetch(c.QN) : (0, g.JX)().handleCommand("customizeTheme");
      }
      const S = () => {
          const {
              activeSheet: e,
              activeSheetFigure: t,
              changeDoc: i,
              exportThemeStyles: n,
            } = (0, x.nZ)(),
            { handleCommand: r } = (0, g.JX)(),
            u = (0, o.iH)(),
            I = (0, o.Fl)(() => {
              var t;
              return null === (t = e.value) || void 0 === t
                ? void 0
                : t.skeletonThemeId;
            }),
            S = (0, o.Fl)(() => (0, g.EJ)().customThemes),
            T = {
              cache: {},
              fetch: function (e) {
                return y(this, void 0, void 0, function* () {
                  if (void 0 === this.cache[e]) {
                    let t = {};
                    if (e.startsWith("CUSTOM-")) {
                      const i = (0, b.jp)(e);
                      t = i.content ? i : { content: i };
                    } else
                      t = JSON.parse(
                        yield (0, v.zD)(`static/styles/themes/${e}.json`),
                      );
                    this.cache[e] = t;
                  }
                  return this.cache[e];
                });
              },
              get: function (e) {
                return this.cache[e];
              },
            },
            O = () => {
              if (!e.value) return {};
              const t = l()(n(), (e) => ({
                properties: x.HG.serializeStylePropertiesToJSON(e),
              }));
              return t.sheet && ((t.map = t.sheet), delete t.sheet), t;
            },
            L = (0, o.Fl)(() =>
              S.value
                .map((e) => {
                  const t = E(e.id);
                  return Object.assign(e, { previewURL: t });
                })
                .sort((e, t) => t.createdAt - e.createdAt),
            ),
            E = (e) => {
              const t = f.w[u.value] || "map-unbalance",
                i = S.value.find(({ id: t }) => t === e),
                n = i && i.createdAt;
              return h.Z.existsSync(
                a().join((0, p.tY)(), e, "previews", `${t}.svg`),
              )
                ? (0, v.pP)(`theme/${e}/previews/${t}.svg`) + `?t=${n}`
                : w(I.value);
            },
            Z = (e, t) =>
              y(void 0, void 0, void 0, function* () {
                r("themeEditor", {
                  id: e,
                  editorId: window.editorId,
                  parentId: window.id,
                  centralTopicStructureClass: u.value,
                  openType: t,
                });
              }),
            B = (0, s.Ds)(
              () =>
                y(void 0, void 0, void 0, function* () {
                  const e = "CUSTOM-" + (0, d.hb)();
                  Z(e, "create-theme");
                }),
              200,
            );
          let W = null,
            P = null;
          return (
            (0, o.bv)(() => {
              var n, a, o, r;
              (u.value =
                null !==
                  (r =
                    null ===
                      (o =
                        null === (n = t.value) || void 0 === n
                          ? void 0
                          : n.topicFigureByTopicId[
                              null === (a = t.value) || void 0 === a
                                ? void 0
                                : a.modelAttributes.centralTopicId
                            ]) || void 0 === o
                      ? void 0
                      : o.modelAttributes.structureClass) && void 0 !== r
                  ? r
                  : f.v.MAPCLOCKWISE),
                (W = m.ZP.route((0, c.Tg)(window.editorId), () => ({
                  content: O(),
                  id: "CUSTOM-" + (0, d.hb)(),
                }))),
                (P = m.ZP.route((0, c._L)(window.editorId), (t) => {
                  if (!t) return;
                  const n = Object.keys(t).reduce((e, i) => {
                    var n;
                    const a = x.HG.deserializeStyleElementFromJSON(
                      t[i].properties,
                    );
                    return (e =
                      null !== (n = e.styleFor(i, a)) && void 0 !== n ? n : e);
                  }, e.value.asMutable());
                  i(n.commit().ownerDocument);
                }));
            }),
            (0, o.Jd)(() => {
              W && W(), P && P();
            }),
            {
              customThemes: S,
              computedThemes: L,
              handleAddNewCustomTheme: B,
              findTheme: (e) =>
                y(void 0, void 0, void 0, function* () {
                  e.startsWith("CUSTOM-") &&
                    (delete T.cache[e], yield T.fetch(e));
                  const t = L.value.find(({ id: t }) => t === e);
                  return Object.assign(Object.assign({}, t), yield T.fetch(e));
                }),
              openThemeEditor: Z,
            }
          );
        },
        w = (e, t) => {
          const i = (0, b.Li)(t);
          let n = x.h0.getColorThemePreviewById(e || b.s9, i);
          return (
            n || (n = x.h0.getColorThemePreviewById(b.s9, i)),
            n ? `data:image/svg+xml,${encodeURIComponent(n)}` : ""
          );
        };
    },
    34275: (e, t, i) => {
      "use strict";
      i.d(t, {
        Y_: () => U.Y,
        lo: () => He,
        WY: () => Lt,
        aN: () => me,
        QM: () => ie,
        gd: () => de,
        Hh: () => K,
        vF: () => Ke,
        V3: () => _e,
        Bm: () => Ve,
        Hf: () => lt,
        Mt: () => G.M,
        P: () => Et,
        _3: () => Tt,
        DF: () => xe,
        _X: () => ft,
        sM: () => bt,
        NT: () => St,
        Y1: () => wt,
        c0: () => It,
        vG: () => yt,
        py: () => xt,
        Sc: () => we,
        wB: () => Ye,
        gC: () => rt,
        ol: () => st,
        vr: () => ut,
        kD: () => dt,
        wz: () => ct,
        _0: () => gt,
        j4: () => mt,
        s2: () => qe,
        di: () => Ge,
        aP: () => ke,
        Vi: () => q,
        YD: () => Pe,
        iz: () => I,
        $0: () => L,
        sf: () => M,
        Lr: () => nt,
        JX: () => it,
        zA: () => at,
        an: () => tt,
        CS: () => et,
        E6: () => Qe,
        PM: () => Xe,
        NW: () => ot,
        bK: () => ge,
        RK: () => te,
        Dm: () => se,
        nn: () => J,
        MW: () => Je,
        $O: () => he,
        ez: () => ae,
        dV: () => ue,
        Rd: () => Bt,
        RE: () => Wt,
        Wb: () => Ct,
        kA: () => Pt,
        WB: () => Zt,
        oD: () => z,
        oM: () => v,
        ES: () => Ze,
        y9: () => We,
        Rl: () => y,
        bG: () => O,
        VU: () => ht,
        K9: () => pt,
        RY: () => Re,
        pq: () => Me,
        rx: () => je,
        xo: () => Ot,
        xc: () => Ue,
        LH: () => ze,
        o: () => vt,
        fs: () => X,
        Z_: () => $e,
      });
      var n = i(2954),
        a = i(96160),
        o = i(18446),
        r = i.n(o);
      const l = (e, t) => () => {
        const {
            styles: i,
            actionStates: o,
            executeStyleAction: l,
          } = (0, a.nZ)(),
          s = (0, n.Fl)(() => {
            var t, n;
            return null ===
              (n = null === (t = i.value) || void 0 === t ? void 0 : t[e]) ||
              void 0 === n
              ? void 0
              : n.value;
          }),
          d = (0, n.Fl)(() => {
            var n, a;
            const o =
              (null ===
                (a = null === (n = i.value) || void 0 === n ? void 0 : n[e]) ||
              void 0 === a
                ? void 0
                : a.options) || [];
            return t ? t(o) : o;
          }),
          u = (0, n.XI)([]);
        (0, n.YP)(
          () => d.value,
          (e, t) => {
            r()(e, t) || (u.value = e);
          },
          { immediate: !0 },
        );
        const c = (0, n.Fl)(() => {
            var t;
            return !!(null === (t = o.value[`mutateProperty:${e}`]) ||
            void 0 === t
              ? void 0
              : t.disabled);
          }),
          g = (0, n.Fl)(() => {
            var t, n;
            return (
              (null ===
                (n = null === (t = i.value) || void 0 === t ? void 0 : t[e]) ||
              void 0 === n
                ? void 0
                : n.values.length) > 1
            );
          }),
          m = (e) => e.charAt(0).toUpperCase() + e.slice(1);
        return {
          [`${e}`]: s,
          [`${e}Options`]: u,
          [`is${m(e)}Disabled`]: c,
          [`is${m(e)}Multiple`]: g,
          [`change${m(e)}`]: (t) => {
            l({ name: `mutateProperty:${e}`, inputValue: t });
          },
        };
      };
      var s = i(69931),
        d = i(16704);
      const u = (e) =>
          e
            .filter(({ value: e }) => !!c[String(e)])
            .map(({ value: e }) => {
              const t = c[String(e)];
              return Object.assign(
                { value: e, label: (null == t ? void 0 : t.label) || e },
                (null == t ? void 0 : t.img) && {
                  img: (0, s.ju)(
                    `static/assets/images/fill/normal/${t.img}.svg`,
                  ),
                  activeImg: (0, s.ju)(
                    `static/assets/images/fill/small/${t.img}.svg`,
                  ),
                },
              );
            })
            .sort((e, t) => c[e.value].sortIndex - c[t.value].sortIndex) || [],
        c = {
          solid: { label: (0, d.WZ)("Solid"), img: "solid", sortIndex: 1 },
          "solid-hand-drawn": {
            label: (0, d.WZ)("Solid (Hand-Drawn)"),
            img: "solid-hand-drawn",
            sortIndex: 2,
          },
          hachure: {
            label: (0, d.WZ)("Diagonal (Hand-Drawn)"),
            img: "diagonal-hand-drawn",
            sortIndex: 3,
          },
          "hachure-thin": {
            label: (0, d.WZ)("Diagonal Thin (Hand-Drawn)"),
            img: "diagonal-thin-hand-drawn",
            sortIndex: 4,
          },
          crossing: {
            label: (0, d.WZ)("Horizontal (Hand-Drawn)"),
            img: "horizontal-hand-drawn",
            sortIndex: 5,
          },
          "crossing-thin": {
            label: (0, d.WZ)("Horizontal Thin (Hand-Drawn)"),
            img: "horizontal-thin-hand-drawn",
            sortIndex: 6,
          },
        },
        g = {
          100: { label: "Thin", sortIndex: 1 },
          200: { label: "ExtraLight", sortIndex: 2 },
          300: { label: "Light", sortIndex: 3 },
          400: { label: "Regular", sortIndex: 4 },
          500: { label: "Medium", sortIndex: 5 },
          600: { label: "Demibold", sortIndex: 6 },
          700: { label: "Bold", sortIndex: 7 },
          800: { label: "ExtraBold", sortIndex: 8 },
          900: { label: "Black", sortIndex: 9 },
        };
      var m = function (e, t) {
        var i = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (i[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
            t.indexOf(n[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
              (i[n[a]] = e[n[a]]);
        }
        return i;
      };
      const h = (e) =>
          e
            .filter(({ value: e }) => !!p[String(e)])
            .map(({ value: e }) => {
              const t = p[e];
              return Object.assign(
                { value: e, label: (null == t ? void 0 : t.label) || e },
                (null == t ? void 0 : t.img) && {
                  img: (0, s.ju)(
                    `static/assets/images/shapes/arrow-shape/normal/${t.img}.svg`,
                  ),
                  activeImg: (0, s.ju)(
                    `static/assets/images/shapes/arrow-shape/small/${t.img}.svg`,
                  ),
                },
              );
            })
            .sort((e, t) => p[e.value].sortIndex - p[t.value].sortIndex) || [],
        p = {
          "org.xmind.arrowShape.none": {
            label: (0, d.WZ)("None"),
            img: "arrow-none",
            sortIndex: 1,
          },
          "org.xmind.arrowShape.spearhead": {
            label: (0, d.WZ)("Spearhead"),
            img: "arrow-end-spearhead",
            sortIndex: 4,
          },
          "org.xmind.arrowShape.dot": {
            label: (0, d.WZ)("Dot"),
            img: "arrow-end-dot",
            sortIndex: 2,
          },
          "org.xmind.arrowShape.triangle": {
            label: (0, d.WZ)("Triangle"),
            img: "arrow-end-triangle",
            sortIndex: 3,
          },
          "org.xmind.arrowShape.square": {
            label: (0, d.WZ)("Square"),
            img: "arrow-end-square",
            sortIndex: 5,
          },
          "org.xmind.arrowShape.diamond": {
            label: (0, d.WZ)("Diamond"),
            img: "arrow-end-diamond",
            sortIndex: 6,
          },
          "org.xmind.arrowShape.herringbone": {
            label: (0, d.WZ)("Herringbone"),
            img: "arrow-end-herringbone",
            sortIndex: 7,
          },
          "org.xmind.arrowShape.doublearrow": {
            label: (0, d.WZ)("Double Arrow"),
            img: "arrow-end-doublearrow",
            sortIndex: 8,
          },
          "org.xmind.arrowShape.antiTriangle": {
            label: (0, d.WZ)("Anti-Triangle"),
            img: "arrow-end-antiTriangle",
            sortIndex: 9,
          },
          "org.xmind.arrowShape.attached": {
            label: (0, d.WZ)("Attached"),
            img: "arrow-end-attached",
            sortIndex: 10,
          },
          "org.xmind.arrowShape.hook": {
            label: (0, d.WZ)("Hook"),
            img: "arrow-end-hook",
            sortIndex: 11,
          },
        },
        v = () => {
          const e = l("topicLineArrowEndClass", h)(),
            { isTopicLineArrowEndClassDisabled: t } = e,
            i = m(e, ["isTopicLineArrowEndClassDisabled"]),
            a = (0, n.Fl)(
              () =>
                t.value ||
                "none" === l("topicLinePattern")().topicLinePattern.value,
            );
          return Object.assign(Object.assign({}, i), {
            isTopicLineArrowEndClassDisabled: a,
          });
        },
        b = (e) => (t) =>
          t
            .filter(({ value: e }) => !!f[String(e)])
            .map(({ value: t }) => {
              const i = f[t];
              return Object.assign(
                { value: t },
                (null == i ? void 0 : i.img)
                  ? {
                      img: (0, s.ju)(`${x[e].normal}/${i.img}.svg`),
                      activeImg: (0, s.ju)(`${x[e].active}/${i.img}.svg`),
                    }
                  : { label: t },
              );
            })
            .sort((t, i) => {
              const n = "topic" === e ? "sortByTopic" : "sortByRelationship";
              return f[t.value][n] - f[i.value][n];
            }) || [],
        f = {
          solid: { img: "solid", sortByTopic: 1, sortByRelationship: 1 },
          dash: { img: "dash", sortByTopic: 2, sortByRelationship: 2 },
          "handdrawn-solid": {
            img: "hand-drawn-solid",
            sortByTopic: 3,
            sortByRelationship: 6,
          },
          "handdrawn-dash": {
            img: "hand-drawn-dash",
            sortByTopic: 4,
            sortByRelationship: 7,
          },
          dot: { img: "dot", sortByRelationship: 3 },
          "dash-dot": { img: "dash-dot", sortByRelationship: 4 },
          "dash-dot-dot": { img: "dash-dot-dot", sortByRelationship: 5 },
        },
        x = {
          topic: {
            normal: "static/assets/images/line-pattern/branch/normal",
            active: "static/assets/images/line-pattern/branch/normal",
          },
          relationship: {
            normal: "static/assets/images/shapes/line-pattern/normal",
            active: "static/assets/images/shapes/line-pattern/small",
          },
        },
        y = () =>
          Object.assign(
            Object.assign({}, l("topicLinePattern", b("topic"))()),
            {
              changeTopicLinePattern: (e) => {
                const { executeAction: t } = (0, a.nZ)(),
                  { topicLineWidth: i } = l("topicLineWidth")();
                t({
                  name: "mutatePropertyBatch",
                  payload: [
                    { name: "mutateProperty:topicLinePattern", inputValue: e },
                    {
                      name: "mutateProperty:topicLineWidth",
                      inputValue:
                        "none" === e ? 0 : 0 === i.value ? 2 : i.value,
                    },
                  ],
                });
              },
            },
          ),
        I = () =>
          Object.assign(
            Object.assign({}, l("summaryLinePattern", b("topic"))()),
            {
              changeSummaryLinePattern: (e) => {
                const { executeAction: t } = (0, a.nZ)(),
                  { summaryLineWidth: i } = l("summaryLineWidth")();
                t({
                  name: "mutatePropertyBatch",
                  payload: [
                    {
                      name: "mutateProperty:summaryLinePattern",
                      inputValue: e,
                    },
                    {
                      name: "mutateProperty:summaryLineWidth",
                      inputValue:
                        "none" === e ? 0 : 0 === i.value ? 2 : i.value,
                    },
                  ],
                });
              },
            },
          );
      var S = function (e, t) {
        var i = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (i[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
            t.indexOf(n[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
              (i[n[a]] = e[n[a]]);
        }
        return i;
      };
      const w = (e) =>
          e
            .filter(({ value: e }) => !!T[Number(e)])
            .map(({ value: e }) => {
              const t = T[e];
              return {
                value: String(e),
                label: (null == t ? void 0 : t.label) || String(e),
              };
            })
            .sort((e, t) => T[e.value].sortIndex - T[t.value].sortIndex) || [],
        T = {
          1: { label: (0, d.WZ)("Extra Thin"), sortIndex: 1 },
          2: { label: (0, d.WZ)("Thin"), sortIndex: 2 },
          3: { label: (0, d.WZ)("Medium"), sortIndex: 3 },
          5: { label: (0, d.WZ)("Bold(line-width)"), sortIndex: 4 },
          8: { label: (0, d.WZ)("Extra Bold"), sortIndex: 5 },
        },
        O = () => {
          const e = l("topicLineWidth", w)(),
            { isTopicLineWidthDisabled: t } = e,
            i = S(e, ["isTopicLineWidthDisabled"]),
            a = (0, n.Fl)(
              () =>
                t.value ||
                "none" === l("topicLinePattern")().topicLinePattern.value,
            );
          return Object.assign(Object.assign({}, i), {
            isTopicLineWidthDisabled: a,
          });
        },
        L = () => {
          const e = l("summaryLineWidth", w)(),
            { isSummaryLineWidthDisabled: t } = e,
            i = S(e, ["isSummaryLineWidthDisabled"]),
            a = (0, n.Fl)(
              () => t.value || "none" === I().summaryLinePattern.value,
            );
          return Object.assign(Object.assign({}, i), {
            isSummaryLineWidthDisabled: a,
          });
        },
        E = {
          "org.xmind.ui.logic.right": {
            label: (0, d.WZ)("Left to Right"),
            sortIndex: 1,
          },
          "org.xmind.ui.logic.left": {
            label: (0, d.WZ)("Right to Left"),
            sortIndex: 1,
          },
          "org.xmind.ui.org-chart.down": {
            label: (0, d.WZ)("Up to Down"),
            sortIndex: 1,
          },
          "org.xmind.ui.org-chart.up": {
            label: (0, d.WZ)("Down to Up"),
            sortIndex: 2,
          },
          "org.xmind.ui.fishbone.leftHeaded": {
            label: (0, d.WZ)("Left to Right"),
            sortIndex: 1,
          },
          "org.xmind.ui.fishbone.rightHeaded": {
            label: (0, d.WZ)("Right to Left"),
            sortIndex: 1,
          },
          "org.xmind.ui.treetable.toptitle": {
            label: (0, d.WZ)("Title on Top"),
            sortIndex: 1,
          },
          "org.xmind.ui.treetable": {
            label: (0, d.WZ)("Title on Left"),
            sortIndex: 2,
          },
          "org.xmind.ui.map.unbalanced": {
            label: (0, d.WZ)("Unbalanced"),
            sortIndex: 1,
          },
          "org.xmind.ui.map.clockwise": {
            label: (0, d.WZ)("Clockwise"),
            sortIndex: 2,
          },
          "org.xmind.ui.brace.right": {
            label: (0, d.WZ)("Left to Right"),
            sortIndex: 1,
          },
          "org.xmind.ui.brace.left": {
            label: (0, d.WZ)("Right to Left"),
            sortIndex: 2,
          },
          "org.xmind.ui.tree.right": {
            label: (0, d.WZ)("Left to Right"),
            sortIndex: 1,
          },
          "org.xmind.ui.tree.left": {
            label: (0, d.WZ)("Right to Left"),
            sortIndex: 2,
          },
          "org.xmind.ui.timeline.vertical": {
            label: (0, d.WZ)("Balanced"),
            sortIndex: 3,
          },
          "org.xmind.ui.spreadsheet": { label: (0, d.WZ)("Row"), sortIndex: 1 },
          "org.xmind.ui.spreadsheet.column": {
            label: (0, d.WZ)("Column"),
            sortIndex: 2,
          },
          "org.xmind.ui.timeline.horizontal": {
            label: (0, d.WZ)("Horizontal"),
            sortIndex: 1,
          },
          "org.xmind.ui.timeline.through.vertical": {
            label: (0, d.WZ)("Vertical"),
            sortIndex: 2,
          },
          "org.xmind.ui.timeline.sided.horizontal": {
            label: (0, d.WZ)("Horizontal (Off-Axis)"),
            sortIndex: 3,
          },
        },
        Z = {
          merged: { label: (0, d.WZ)("Fewer Borders") },
          unmerged: { label: (0, d.WZ)("More Borders") },
        },
        B = {
          "org.xmind.arrowShape.none": {
            label: (0, d.WZ)("None"),
            img: "arrow-none",
            sortIndex: 1,
          },
          "org.xmind.arrowShape.spearhead": {
            label: (0, d.WZ)("Spearhead"),
            img: "arrow-begin-spearhead",
            sortIndex: 4,
          },
          "org.xmind.arrowShape.dot": {
            label: (0, d.WZ)("Dot"),
            img: "arrow-begin-dot",
            sortIndex: 2,
          },
          "org.xmind.arrowShape.triangle": {
            label: (0, d.WZ)("Triangle"),
            img: "arrow-begin-triangle",
            sortIndex: 3,
          },
          "org.xmind.arrowShape.square": {
            label: (0, d.WZ)("Square"),
            img: "arrow-begin-square",
            sortIndex: 5,
          },
          "org.xmind.arrowShape.diamond": {
            label: (0, d.WZ)("Diamond"),
            img: "arrow-begin-diamond",
            sortIndex: 6,
          },
          "org.xmind.arrowShape.herringbone": {
            label: (0, d.WZ)("Herringbone"),
            img: "arrow-begin-herringbone",
            sortIndex: 7,
          },
          "org.xmind.arrowShape.doublearrow": {
            label: (0, d.WZ)("Double Arrow"),
            img: "arrow-begin-doublearrow",
            sortIndex: 8,
          },
          "org.xmind.arrowShape.antiTriangle": {
            label: (0, d.WZ)("Anti-Triangle"),
            img: "arrow-begin-antiTriangle",
            sortIndex: 9,
          },
          "org.xmind.arrowShape.attached": {
            label: (0, d.WZ)("Attached"),
            img: "arrow-begin-attached",
            sortIndex: 10,
          },
          "org.xmind.arrowShape.hook": {
            label: (0, d.WZ)("Hook"),
            img: "arrow-begin-hook",
            sortIndex: 11,
          },
        };
      var W = function (e, t) {
        var i = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (i[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
            t.indexOf(n[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
              (i[n[a]] = e[n[a]]);
        }
        return i;
      };
      const P = (e) => (t) =>
          t
            .filter(({ value: e }) => !!R[String(e)])
            .map(({ value: t }) => {
              let i = R[t];
              return (
                "callout" === e && (i = N[t]),
                Object.assign(
                  { value: t, label: (null == i ? void 0 : i.label) || t },
                  (null == i ? void 0 : i.img) && {
                    img: (0, s.ju)(`${j[e]}/normal/${i.img}.svg`),
                    activeImg: (0, s.ju)(`${j[e]}/small/${i.img}.svg`),
                  },
                )
              );
            })
            .sort((e, t) => R[e.value].sortIndex - R[t.value].sortIndex) || [],
        C = {
          "org.xmind.internal.topicShape.matrix-cell": {
            label: (0, d.WZ)("Rectangle"),
            img: "shape-rectangle",
            sortIndex: 2,
          },
          "org.xmind.internal.topicShape.treeTableCell": {
            label: (0, d.WZ)("Rectangle"),
            img: "shape-rectangle",
            sortIndex: 2,
          },
          "org.xmind.topicShape.rect": {
            label: (0, d.WZ)("Rectangle"),
            img: "shape-rectangle",
            sortIndex: 2,
          },
          "org.xmind.topicShape.roundedRect": {
            label: (0, d.WZ)("Rounded Rect"),
            img: "shape-rounded-rect",
            sortIndex: 1,
          },
          "org.xmind.topicShape.underline": {
            label: (0, d.WZ)("Underline"),
            img: "shape-underline",
            sortIndex: 5,
          },
          "org.xmind.topicShape.circle": {
            label: (0, d.WZ)("Circle"),
            img: "shape-circle",
            sortIndex: 7,
          },
          "org.xmind.topicShape.waterdrop": {
            label: (0, d.WZ)("Drop"),
            img: "shape-drop",
            sortIndex: 18,
          },
          "org.xmind.topicShape.ellipse": {
            label: (0, d.WZ)("Ellipse"),
            img: "shape-ellipse",
            sortIndex: 3,
          },
          "org.xmind.topicShape.ellipserect": {
            label: (0, d.WZ)("Ellipse-Rect"),
            img: "shape-ellipse-rect",
            sortIndex: 4,
          },
          "org.xmind.topicShape.diamond": {
            label: (0, d.WZ)("Diamond"),
            img: "shape-diamond",
            sortIndex: 5,
          },
          "org.xmind.topicShape.parallelogram": {
            label: (0, d.WZ)("Parallelogram"),
            img: "shape-parallelogram",
            sortIndex: 8,
          },
          "org.xmind.topicShape.hexagon": {
            label: (0, d.WZ)("Horizontal Hexagon"),
            img: "shape-hexagon",
            sortIndex: 9,
          },
          "org.xmind.topicShape.roundedhexagon": {
            label: (0, d.WZ)("Vertical Hexagon"),
            img: "shape-rounded-hexagon",
            sortIndex: 10,
          },
          "org.xmind.topicShape.ellipticrectangle": {
            label: (0, d.WZ)("Rounded Hexagon"),
            img: "shape-elliptic-rect",
            sortIndex: 11,
          },
          "org.xmind.topicShape.singlebreakangle": {
            label: (0, d.WZ)("Single-Breakangle"),
            img: "shape-single-breakangle",
            sortIndex: 12,
          },
          "org.xmind.topicShape.doubleunderline": {
            label: (0, d.WZ)("Double-Underline"),
            img: "shape-double-underline",
            sortIndex: 13,
          },
          "org.xmind.topicShape.stack": {
            label: (0, d.WZ)("Stack"),
            img: "shape-stack",
            sortIndex: 14,
          },
          "org.xmind.topicShape.singleBookQuote": {
            label: (0, d.WZ)("Angle Brackets"),
            img: "shape-punctuation-angle-brackets",
            sortIndex: 25,
          },
          "org.xmind.topicShape.curlyBracket": {
            label: (0, d.WZ)("Brace"),
            img: "shape-punctuation-brace",
            sortIndex: 26,
          },
          "org.xmind.topicShape.doubleQuote": {
            label: (0, d.WZ)("Double Quotes"),
            img: "shape-punctuation-double-quotes",
            sortIndex: 27,
          },
          "org.xmind.topicShape.doubleBookQuote": {
            label: (0, d.WZ)("French Quotes"),
            img: "shape-punctuation-french-quotes",
            sortIndex: 28,
          },
          "org.xmind.topicShape.roundBracket": {
            label: (0, d.WZ)("Parentheses"),
            img: "shape-punctuation-parentheses",
            sortIndex: 29,
          },
          "org.xmind.topicShape.squareBracket": {
            label: (0, d.WZ)("Square Brackets"),
            img: "shape-punctuation-square-brackets",
            sortIndex: 30,
          },
          "org.xmind.topicShape.squareQuote": {
            label: (0, d.WZ)("Square Quotes"),
            img: "shape-punctuation-square-quotes",
            sortIndex: 31,
          },
          "org.xmind.topicShape.bookmark": {
            label: (0, d.WZ)("Bookmark"),
            img: "shape-bookmark",
            sortIndex: 15,
          },
          "org.xmind.topicShape.star": {
            label: (0, d.WZ)("Star"),
            img: "shape-star",
            sortIndex: 24,
          },
          "org.xmind.topicShape.shield": {
            label: (0, d.WZ)("Shield"),
            img: "shape-shield",
            sortIndex: 23,
          },
          "org.xmind.topicShape.simpleCloud": {
            label: (0, d.WZ)("Cloud"),
            img: "shape-cloud",
            sortIndex: 16,
          },
          "org.xmind.topicShape.cutdiamond": {
            label: (0, d.WZ)("Diamond"),
            img: "shape-cut-diamond",
            sortIndex: 17,
          },
          "org.xmind.topicShape.label": {
            label: (0, d.WZ)("Label"),
            img: "shape-label",
            sortIndex: 20,
          },
          "org.xmind.topicShape.heart": {
            label: (0, d.WZ)("Heart"),
            img: "shape-heart",
            sortIndex: 19,
          },
          "org.xmind.topicShape.fatLeftArrow": {
            label: (0, d.WZ)("Left Arrow"),
            img: "shape-left-arrow",
            sortIndex: 21,
          },
          "org.xmind.topicShape.fatRightArrow": {
            label: (0, d.WZ)("Right Arrow"),
            img: "shape-right-arrow",
            sortIndex: 22,
          },
        },
        D = {
          "org.xmind.boundaryShape.rect": {
            label: (0, d.WZ)("Rectangle"),
            img: "shape-rectangle",
            sortIndex: 1,
          },
          "org.xmind.boundaryShape.roundedRect": {
            label: (0, d.WZ)("Rounded Rect"),
            img: "shape-rounded-rect",
            sortIndex: 2,
          },
          "org.xmind.boundaryShape.polygon": {
            label: (0, d.WZ)("Polygon"),
            img: "shape-polygon",
            sortIndex: 3,
          },
          "org.xmind.boundaryShape.scallops": {
            label: (0, d.WZ)("Scallops"),
            img: "shape-scallops",
            sortIndex: 4,
          },
          "org.xmind.boundaryShape.waves": {
            label: (0, d.WZ)("Waves"),
            img: "shape-waves",
            sortIndex: 5,
          },
          "org.xmind.boundaryShape.tension": {
            label: (0, d.WZ)("Tension"),
            img: "shape-tension",
            sortIndex: 6,
          },
          "org.xmind.boundaryShape.roundedPolygon": {
            label: (0, d.WZ)("Rounded Polygon"),
            img: "shape-rounded-polygon",
            sortIndex: 7,
          },
          "org.xmind.boundaryShape.focus": {
            label: (0, d.WZ)("Focus"),
            img: "shape-focus",
            sortIndex: 8,
          },
          "org.xmind.boundaryShape.cross": {
            label: (0, d.WZ)("Cross"),
            img: "shape-cross",
            sortIndex: 9,
          },
        },
        F = {
          "org.xmind.relationshipShape.curved": {
            label: (0, d.WZ)("Curved"),
            img: "relationship-curved",
            sortIndex: 1,
          },
          "org.xmind.relationshipShape.straight": {
            label: (0, d.WZ)("Straight"),
            img: "relationship-straight",
            sortIndex: 2,
          },
          "org.xmind.relationshipShape.angled": {
            label: (0, d.WZ)("Angled"),
            img: "relationship-angled",
            sortIndex: 3,
          },
          "org.xmind.relationshipShape.zigzag": {
            label: (0, d.WZ)("Zigzag"),
            img: "relationship-zigzag",
            sortIndex: 4,
          },
        },
        A = {
          "org.xmind.summaryShape.angle": {
            label: (0, d.WZ)("Straight"),
            img: "summary-angle",
            sortIndex: 1,
          },
          "org.xmind.summaryShape.square": {
            label: (0, d.WZ)("Elbow"),
            img: "summary-square",
            sortIndex: 2,
          },
          "org.xmind.summaryShape.round": {
            label: (0, d.WZ)("Curve"),
            img: "summary-round",
            sortIndex: 3,
          },
          "org.xmind.summaryShape.curly": {
            label: (0, d.WZ)("Bight"),
            img: "summary-curly",
            sortIndex: 4,
          },
          "org.xmind.summaryShape.straight": {
            label: (0, d.WZ)("Right Angle"),
            img: "summary-straight",
            sortIndex: 5,
          },
        },
        N = {
          "org.xmind.topicShape.ellipse": {
            label: (0, d.WZ)("Ellipse"),
            img: "callout-ellipse",
            sortIndex: 3,
          },
          "org.xmind.topicShape.roundedRect": {
            label: (0, d.WZ)("Rounded Rect"),
            img: "callout-rounded-rectangle",
            sortIndex: 1,
          },
          "org.xmind.topicShape.rect": {
            label: (0, d.WZ)("Rectangle"),
            img: "callout-rectangle",
            sortIndex: 2,
          },
        },
        R = Object.assign(
          Object.assign(Object.assign(Object.assign({}, C), D), F),
          A,
        ),
        j = {
          topic: "static/assets/images/shapes/shape",
          relationship: "static/assets/images/shapes/relationship-shape",
          boundary: "static/assets/images/shapes/boundary-shape",
          summary: "static/assets/images/shapes/summary-connection",
          callout: "static/assets/images/shapes/callout-shape",
        },
        M = () => {
          const e = l("summaryShapeClass", P("summary"))(),
            { isSummaryShapeClassDisabled: t } = e,
            i = W(e, ["isSummaryShapeClassDisabled"]),
            a = (0, n.Fl)(
              () => t.value || "none" === I().summaryLinePattern.value,
            );
          return Object.assign(Object.assign({}, i), {
            isSummaryShapeClassDisabled: a,
          });
        },
        H = {
          left: {
            icon: "alignment-left",
            title: (0, d.WZ)("Align text to the left."),
            sortIndex: 1,
          },
          center: {
            icon: "alignment-center",
            title: (0, d.WZ)("Center text."),
            sortIndex: 2,
          },
          right: {
            icon: "alignment-right",
            title: (0, d.WZ)("Align text to the right."),
            sortIndex: 3,
          },
        },
        k = {
          manual: {
            label: (0, d.WZ)("None"),
            icon: "manual-style",
            sortIndex: 1,
          },
          uppercase: {
            label: (0, d.WZ)("UPPERCASE"),
            icon: "uppercase",
            sortIndex: 2,
          },
          lowercase: {
            label: (0, d.WZ)("lowercase"),
            icon: "lowercase",
            sortIndex: 3,
          },
          capitalize: {
            label: (0, d.WZ)("Capitalize"),
            icon: "capitalize",
            sortIndex: 4,
          },
        },
        $ = {
          $DEFAULT$: { label: (0, d.WZ)("Default"), sortIndex: 4 },
          importantTopic: { label: (0, d.WZ)("Very Important"), sortIndex: 1 },
          minorTopic: { label: (0, d.WZ)("Important"), sortIndex: 2 },
          expiredTopic: { label: (0, d.WZ)("Cross Out"), sortIndex: 3 },
        };
      var G = i(87546),
        U = i(13548);
      const z = () => ({
        topicLevel: (0, n.Fl)(() => {
          const { activeSheetFigure: e, selection: t } = (0, a.nZ)();
          if (!e.value) return null;
          const i = t.value.modelIds
            .map((t) => {
              var i, n;
              return null ===
                (n =
                  null === (i = e.value.topicFigureByTopicId[t]) || void 0 === i
                    ? void 0
                    : i.modelAttributes.levelClass) || void 0 === n
                ? void 0
                : n.slice(5);
            })
            .filter(Boolean);
          if (0 === i.length) return null;
          const n = Array.from(new Set(i));
          return n.length > 1 ? "multiple" : Number(n[0]);
        }),
      });
      var V = function (e, t, i, n) {
        return new (i || (i = Promise))(function (a, o) {
          function r(e) {
            try {
              s(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              s(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(r, l);
          }
          s((n = n.apply(e, t || [])).next());
        });
      };
      const q = (e) => {
          const { selectionStylePreview: t } = (0, a.nZ)(),
            i = (0, n.iH)(""),
            o = (0, n.iH)({}),
            r = () =>
              V(void 0, void 0, void 0, function* () {
                var e;
                const i = yield null === (e = t.value) || void 0 === e
                  ? void 0
                  : e.candidatePreviewGetter();
                i &&
                  (o.value = {
                    importantTopic: _(i.importantTopic),
                    minorTopic: _(i.minorTopic),
                    expiredTopic: _(i.expiredTopic),
                    $DEFAULT$: _(i.mainTopic || i.subTopic || i.floatingTopic),
                  });
              }),
            l = () =>
              V(void 0, void 0, void 0, function* () {
                var n;
                const a = yield null === (n = t.value) || void 0 === n
                  ? void 0
                  : n.effectivePreviewGetter(e);
                a && (i.value = _(a));
              });
          return (
            (0, n.YP)(
              () => t.value,
              () => {
                l(), r();
              },
              { immediate: !1 },
            ),
            setTimeout(() => {
              l(), r();
            }, 300),
            { effectivePreview: i, candidatePreview: o }
          );
        },
        _ = (e) => {
          if (!e) return;
          const t = new XMLSerializer().serializeToString(e);
          return a.ZQ.getSVGUri(t);
        };
      var Y = function (e, t) {
        var i = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (i[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
            t.indexOf(n[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
              (i[n[a]] = e[n[a]]);
        }
        return i;
      };
      const J = () => {
          const e = l("topicFillColorString")(),
            { isTopicFillColorStringDisabled: t } = e,
            i = Y(e, ["isTopicFillColorStringDisabled"]),
            a = (0, n.Fl)(
              () => t.value || "none" === Je().topicFillPattern.value,
            );
          return Object.assign(Object.assign({}, i), {
            isTopicFillColorStringDisabled: a,
          });
        },
        K = () => {
          const e = l("boundaryFillColorString")(),
            { isBoundaryFillColorStringDisabled: t } = e,
            i = Y(e, ["isBoundaryFillColorStringDisabled"]),
            a = (0, n.Fl)(
              () => t.value || "none" === Ke().boundaryFillPattern.value,
            );
          return Object.assign(Object.assign({}, i), {
            isBoundaryFillColorStringDisabled: a,
          });
        },
        X = () => {
          const e = (0, n.Fl)(() => {
            const { activeSheet: e, selection: t } = (0, a.nZ)();
            return t.value.modelIds.every((t) => {
              var i;
              const n =
                null === (i = e.value.query({ id: t })) || void 0 === i
                  ? void 0
                  : i.asTopic();
              return !(null == n ? void 0 : n.customWidth);
            });
          });
          return Object.assign(Object.assign({}, l("topicWidth")()), {
            isTopicWidthResetDisabled: e,
            resetTopicWidth: () => {
              const {
                activeSheet: e,
                selection: t,
                changeDoc: i,
              } = (0, a.nZ)();
              i(
                t.value.modelIds.reduce((e, t) => {
                  var i;
                  const n =
                    null === (i = e.query({ id: t })) || void 0 === i
                      ? void 0
                      : i.asTopic();
                  return (null == n ? void 0 : n.customWidth)
                    ? n.asMutable().attrs({ customWidth: null }).commit()
                        .ownerSheet
                    : e;
                }, e.value).ownerDocument,
              );
            },
          });
        },
        Q = (e) => (t) =>
          t
            .filter(({ value: e }) => !!ee[String(e)])
            .map(({ value: e }) => {
              const t = ee[e];
              return Object.assign(
                { value: e, label: (null == t ? void 0 : t.label) || e },
                (null == t ? void 0 : t.img) && {
                  img: (0, s.ju)(
                    `static/assets/images/line-pattern/border/normal/${t.img}.svg`,
                  ),
                  activeImg: (0, s.ju)(
                    `static/assets/images/line-pattern/border/small/${t.img}.svg`,
                  ),
                },
              );
            })
            .sort((t, i) => {
              const n = "topic" === e ? "sortByTopic" : "sortByBoundary";
              return ee[t.value][n] - ee[i.value][n];
            }) || [],
        ee = {
          solid: {
            label: (0, d.WZ)("Solid"),
            img: "solid",
            sortByTopic: 1,
            sortByBoundary: 1,
          },
          dash: {
            label: (0, d.WZ)("Dash"),
            img: "dash",
            sortByTopic: 2,
            sortByBoundary: 2,
          },
          "handdrawn-solid": {
            label: (0, d.WZ)("Hand-Drawn Solid"),
            img: "hand-drawn-solid",
            sortByTopic: 3,
            sortByBoundary: 6,
          },
          "handdrawn-dash": {
            label: (0, d.WZ)("Hand-Drawn Dash"),
            img: "hand-drawn-dash",
            sortByTopic: 4,
            sortByBoundary: 7,
          },
          dot: { label: (0, d.WZ)("Dot"), img: "dot", sortByBoundary: 3 },
          "dash-dot": {
            label: (0, d.WZ)("Dash-Dot"),
            img: "dash-dot",
            sortByBoundary: 4,
          },
          "dash-dot-dot": {
            label: (0, d.WZ)("Dash-Dot-Dot"),
            img: "dash-dot-dot",
            sortByBoundary: 5,
          },
        },
        te = () =>
          Object.assign(
            Object.assign({}, l("topicBorderLinePattern", Q("topic"))()),
            {
              changeTopicBorderLinePattern: (e) => {
                const { executeAction: t } = (0, a.nZ)(),
                  { topicBorderLineWidth: i } = l("topicBorderLineWidth")();
                t({
                  name: "mutatePropertyBatch",
                  payload: [
                    {
                      name: "mutateProperty:topicBorderLinePattern",
                      inputValue: e,
                    },
                    {
                      name: "mutateProperty:topicBorderLineWidth",
                      inputValue:
                        "none" === e ? 0 : 0 === i.value ? 2 : i.value,
                    },
                  ],
                });
              },
            },
          ),
        ie = () =>
          Object.assign(
            Object.assign({}, l("boundaryBorderLinePattern", Q("boundary"))()),
            {
              changeBoundaryBorderLinePattern: (e) => {
                const { executeAction: t } = (0, a.nZ)(),
                  { boundaryBorderLineWidth: i } = l(
                    "boundaryBorderLineWidth",
                  )();
                t({
                  name: "mutatePropertyBatch",
                  payload: [
                    {
                      name: "mutateProperty:boundaryBorderLinePattern",
                      inputValue: e,
                    },
                    {
                      name: "mutateProperty:boundaryBorderLineWidth",
                      inputValue:
                        "none" === e ? 0 : 0 === i.value ? 2 : i.value,
                    },
                  ],
                });
              },
            },
          );
      var ne = i(50965);
      const ae = () => {
        const e = (e, ...t) => (0, ne.JE)().T(e, ...t);
        return {
          topicImageBorderLinePattern: (0, n.Fl)(() =>
            0 ===
            l("topicImageBorderLineWidth")().topicImageBorderLineWidth.value
              ? "none"
              : "solid",
          ),
          topicImageBorderLinePatternOptions: (0, n.Fl)(() => [
            {
              label: e("Solid"),
              value: "solid",
              img: (0, s.ju)(
                "static/assets/images/line-pattern/border/normal/solid.svg",
              ),
              activeImg: (0, s.ju)(
                "static/assets/images/line-pattern/border/small/solid.svg",
              ),
            },
          ]),
          changeTopicImageBorderLinePattern: (e) => {
            l("topicImageBorderLineWidth")().changeTopicImageBorderLineWidth(
              "none" === e ? 0 : 2,
            );
          },
        };
      };
      var oe = function (e, t) {
        var i = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (i[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
            t.indexOf(n[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
              (i[n[a]] = e[n[a]]);
        }
        return i;
      };
      const re = (e) =>
          e
            .filter(({ value: e }) => !!le[Number(e)])
            .map(({ value: e }) => {
              const t = le[e];
              return {
                value: String(e),
                label: (null == t ? void 0 : t.label) || String(e),
              };
            })
            .sort((e, t) => le[e.value].sortIndex - le[t.value].sortIndex) ||
          [],
        le = {
          1: { label: (0, d.WZ)("Extra Thin"), sortIndex: 1 },
          2: { label: (0, d.WZ)("Thin"), sortIndex: 2 },
          3: { label: (0, d.WZ)("Medium"), sortIndex: 3 },
          5: { label: (0, d.WZ)("Bold(line-width)"), sortIndex: 4 },
          8: { label: (0, d.WZ)("Extra Bold"), sortIndex: 5 },
        },
        se = () => {
          const e = l("topicBorderLineWidth", re)(),
            { isTopicBorderLineWidthDisabled: t } = e,
            i = oe(e, ["isTopicBorderLineWidthDisabled"]),
            a = (0, n.Fl)(
              () =>
                t.value ||
                "none" ===
                  l("topicBorderLinePattern")().topicBorderLinePattern.value,
            );
          return Object.assign(Object.assign({}, i), {
            isTopicBorderLineWidthDisabled: a,
          });
        },
        de = () => {
          const e = l("boundaryBorderLineWidth", re)(),
            { isBoundaryBorderLineWidthDisabled: t } = e,
            i = oe(e, ["isBoundaryBorderLineWidthDisabled"]),
            a = (0, n.Fl)(
              () =>
                t.value ||
                "none" ===
                  l("boundaryBorderLinePattern")().boundaryBorderLinePattern
                    .value,
            );
          return Object.assign(Object.assign({}, i), {
            isBoundaryBorderLineWidthDisabled: a,
          });
        },
        ue = () => {
          const e = l("topicImageBorderLineWidth", re)(),
            { isTopicImageBorderLineWidthDisabled: t } = e,
            i = oe(e, ["isTopicImageBorderLineWidthDisabled"]),
            a = (0, n.Fl)(
              () =>
                t.value || "none" === ae().topicImageBorderLinePattern.value,
            );
          return Object.assign(Object.assign({}, i), {
            isTopicImageBorderLineWidthDisabled: a,
          });
        };
      var ce = function (e, t) {
        var i = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (i[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
            t.indexOf(n[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
              (i[n[a]] = e[n[a]]);
        }
        return i;
      };
      const ge = () => {
          const e = l("topicBorderLineColorString")(),
            { isTopicBorderLineColorStringDisabled: t } = e,
            i = ce(e, ["isTopicBorderLineColorStringDisabled"]),
            a = (0, n.Fl)(
              () =>
                t.value ||
                "none" ===
                  l("topicBorderLinePattern")().topicBorderLinePattern.value,
            );
          return Object.assign(Object.assign({}, i), {
            isTopicBorderLineColorStringDisabled: a,
          });
        },
        me = () => {
          const e = l("boundaryBorderLineColorString")(),
            { isBoundaryBorderLineColorStringDisabled: t } = e,
            i = ce(e, ["isBoundaryBorderLineColorStringDisabled"]),
            a = (0, n.Fl)(
              () =>
                t.value ||
                "none" ===
                  l("boundaryBorderLinePattern")().boundaryBorderLinePattern
                    .value,
            );
          return Object.assign(Object.assign({}, i), {
            isBoundaryBorderLineColorStringDisabled: a,
          });
        },
        he = () => {
          const e = l("topicImageBorderLineColorString")(),
            { isTopicImageBorderLineColorStringDisabled: t } = e,
            i = ce(e, ["isTopicImageBorderLineColorStringDisabled"]),
            a = (0, n.Fl)(
              () =>
                t.value || "none" === ae().topicImageBorderLinePattern.value,
            );
          return Object.assign(Object.assign({}, i), {
            isTopicImageBorderLineColorStringDisabled: a,
          });
        };
      var pe = i(75472),
        ve = i.n(pe),
        be = i(14315),
        fe = function (e, t, i, n) {
          return new (i || (i = Promise))(function (a, o) {
            function r(e) {
              try {
                s(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, l);
            }
            s((n = n.apply(e, t || [])).next());
          });
        };
      const xe = ({ isCjk: e = !1, styleKey: t }) => {
        const { getLoadedFonts: i } = (0, be.r)(),
          {
            styles: o,
            actionStates: r,
            selection: l,
            executeStyleAction: s,
          } = (0, a.nZ)(),
          d = (0, n.iH)([]),
          u = (0, n.iH)({}),
          c = (0, n.Fl)(() => {
            var e, i;
            return null ===
              (i = null === (e = o.value) || void 0 === e ? void 0 : e[t]) ||
              void 0 === i
              ? void 0
              : i.value;
          }),
          g = (0, n.Fl)(() =>
            e ? d.value.filter((e) => e.isCJKFont) : d.value,
          ),
          m = (0, n.Fl)(() => {
            var e;
            return !!(null === (e = r.value[`mutateProperty:${t}`]) ||
            void 0 === e
              ? void 0
              : e.disabled);
          }),
          h = (0, n.Fl)(() => {
            var e, i;
            return (
              (null ===
                (i = null === (e = o.value) || void 0 === e ? void 0 : e[t]) ||
              void 0 === i
                ? void 0
                : i.values.length) > 1
            );
          }),
          p = (0, n.Fl)(() => {
            var e, t;
            const i =
              u.value[
                null === (e = l.value) || void 0 === e ? void 0 : e.modelIds[0]
              ];
            return 1 ===
              (null === (t = l.value) || void 0 === t
                ? void 0
                : t.modelIds.length) && i
              ? d.value.find((e) => e.value === i)
              : d.value.find((e) => e.value === c.value);
          }),
          v = (0, n.Fl)(() => (0, ne.km)().recentFontFamilies),
          b = (0, n.Fl)(() => {
            const e = p.value && p.value.value;
            return v.value
              .map((t) => d.value.find((i) => i.value === t && i.value !== e))
              .filter(Boolean)
              .slice(0, 6);
          }),
          f = (0, n.Fl)(() => [...b.value, p.value].filter(Boolean));
        return (
          (0, n.bv)(() =>
            fe(void 0, void 0, void 0, function* () {
              d.value = yield fe(void 0, void 0, void 0, function* () {
                const { systemFonts: e, vanaFonts: t } = yield i(),
                  n = [
                    ...Object.values(t),
                    ...Object.values(e).filter((e) => !t[e.value]),
                  ];
                return ve()(
                  n,
                  ["isSystemLocaleFont", "value"],
                  ["desc", "asc"],
                );
              });
            }),
          ),
          {
            fontFamily: c,
            fontFamilyOptions: g,
            fontFamilyRecommendOptions: f,
            isFontFamilyDisabled: m,
            isFontFamilyMultiple: h,
            changeFontFamily: (e) => {
              var i;
              (
                (null === (i = l.value) || void 0 === i
                  ? void 0
                  : i.modelIds) || []
              ).forEach((t) => {
                u.value[t] = e;
              }),
                ((e) => {
                  const t = (0, ne.km)().recentFontFamilies.slice();
                  t.includes(e) && t.splice(t.indexOf(e), 1),
                    t.unshift(e),
                    t.length > 10 && t.splice(10),
                    (0, ne.km)().setRecentFontFamilies(t);
                })(e);
              s({ name: `mutateProperty:${t}`, inputValue: e });
            },
          }
        );
      };
      var ye = function (e, t) {
        var i = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (i[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
            t.indexOf(n[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
              (i[n[a]] = e[n[a]]);
        }
        return i;
      };
      const Ie = (e) =>
          e
            .filter(({ value: e }) => !!Se[String(e)])
            .map(({ value: e }) => {
              const t = Se[e];
              return Object.assign(
                { value: e, label: (null == t ? void 0 : t.label) || e },
                (null == t ? void 0 : t.img) && {
                  img: (0, s.ju)(
                    `static/assets/images/structures/normal/${t.img}.svg`,
                  ),
                  activeImg: (0, s.ju)(
                    `static/assets/images/structures/small/${t.img}.svg`,
                  ),
                },
              );
            })
            .sort((e, t) => Se[e.value].sortIndex - Se[t.value].sortIndex) ||
          [],
        Se = {
          "org.xmind.ui.map.clockwise": {
            label: (0, d.WZ)("Mind Map"),
            img: "balanced-map-clockwise",
            sortIndex: 1,
          },
          "org.xmind.ui.map.unbalanced": {
            label: (0, d.WZ)("Mind Map"),
            img: "map",
            sortIndex: 1,
          },
          "org.xmind.ui.logic.left": {
            label: (0, d.WZ)("Logic Chart"),
            img: "logic-left",
            sortIndex: 2,
          },
          "org.xmind.ui.logic.right": {
            label: (0, d.WZ)("Logic Chart"),
            img: "logic-right",
            sortIndex: 2,
          },
          "org.xmind.ui.brace.right": {
            label: (0, d.WZ)("Brace Map"),
            img: "brace-right",
            sortIndex: 3,
          },
          "org.xmind.ui.brace.left": {
            label: (0, d.WZ)("Brace Map"),
            img: "brace-left",
            sortIndex: 3,
          },
          "org.xmind.ui.org-chart.down": {
            label: (0, d.WZ)("Org Chart"),
            img: "org-down",
            sortIndex: 4,
          },
          "org.xmind.ui.org-chart.up": {
            label: (0, d.WZ)("Org Chart"),
            img: "org-up",
            sortIndex: 4,
          },
          "org.xmind.ui.tree.right": {
            label: (0, d.WZ)("Tree Chart"),
            img: "tree-right",
            sortIndex: 5,
          },
          "org.xmind.ui.timeline.vertical": {
            label: (0, d.WZ)("Tree Chart"),
            img: "tree-balanced",
            sortIndex: 5,
          },
          "org.xmind.ui.tree.left": {
            label: (0, d.WZ)("Tree Chart"),
            img: "tree-left",
            sortIndex: 5,
          },
          "org.xmind.ui.timeline.horizontal": {
            label: (0, d.WZ)("Timeline"),
            img: "timeline-h",
            sortIndex: 6,
          },
          "org.xmind.ui.timeline.sided.horizontal": {
            label: (0, d.WZ)("Timeline"),
            img: "timeline-h-off-axis",
            sortIndex: 6,
          },
          "org.xmind.ui.timeline.through.vertical": {
            label: (0, d.WZ)("Timeline"),
            img: "timeline-v",
            sortIndex: 6,
          },
          "org.xmind.ui.fishbone.leftHeaded": {
            label: (0, d.WZ)("Fishbone"),
            img: "fishbone-r",
            sortIndex: 7,
          },
          "org.xmind.ui.fishbone.rightHeaded": {
            label: (0, d.WZ)("Fishbone"),
            img: "fishbone-l",
            sortIndex: 7,
          },
          "org.xmind.ui.treetable.toptitle": {
            label: (0, d.WZ)("Tree Table"),
            img: "tree-table-column",
            sortIndex: 8,
          },
          "org.xmind.ui.treetable": {
            label: (0, d.WZ)("Tree Table"),
            img: "tree-table-row",
            sortIndex: 8,
          },
          "org.xmind.ui.spreadsheet": {
            label: (0, d.WZ)("Matrix"),
            img: "matrix-row",
            sortIndex: 9,
          },
          "org.xmind.ui.spreadsheet.column": {
            label: (0, d.WZ)("Matrix"),
            img: "matrix-column",
            sortIndex: 9,
          },
        },
        we = () => {
          const e = ye(l("majorStructureClass", Ie)(), []),
            t = (0, n.Fl)(() => {
              var e;
              const { actionStates: t } = (0, a.nZ)();
              return !!(null === (e = t.value["mutate:resetTopicStructure"]) ||
              void 0 === e
                ? void 0
                : e.disabled);
            });
          return Object.assign(Object.assign({}, e), {
            isResetTopicStructureDisabled: t,
            resetTopicStructure: () => {
              const { executeMutationAction: e } = (0, a.nZ)();
              e({ name: "mutate:resetTopicStructure" });
            },
          });
        };
      var Te = function (e, t) {
        var i = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (i[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
            t.indexOf(n[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
              (i[n[a]] = e[n[a]]);
        }
        return i;
      };
      const Oe = (e) => (t) =>
          t
            .filter(({ value: e }) => !!Le[String(e)])
            .map(({ value: t }) => {
              const i = Le[t];
              return Object.assign(
                { value: t, label: (null == i ? void 0 : i.label) || t },
                (null == i ? void 0 : i.img) && {
                  img: (0, s.ju)(`${Ee[e].imgPrefix}/${i.img}.svg`),
                  activeImg: (0, s.ju)(`${Ee[e].activeImgPrefix}/${i.img}.svg`),
                },
              );
            })
            .sort((e, t) => Le[e.value].sortIndex - Le[t.value].sortIndex) ||
          [],
        Le = {
          "org.xmind.branchConnection.elbow": {
            label: (0, d.WZ)("Elbow"),
            img: "line-elbow",
            sortIndex: 2,
          },
          "org.xmind.branchConnection.roundedElbow": {
            label: (0, d.WZ)("Rounded Elbow"),
            img: "line-rounded-elbow",
            sortIndex: 1,
          },
          "org.xmind.branchConnection.straight": {
            label: (0, d.WZ)("Straight"),
            img: "line-straight",
            sortIndex: 3,
          },
          "org.xmind.branchConnection.curve": {
            label: (0, d.WZ)("Curve"),
            img: "line-curve",
            sortIndex: 4,
          },
          "org.xmind.branchConnection.fold": {
            label: (0, d.WZ)("Fold"),
            img: "line-fold",
            sortIndex: 6,
          },
          "org.xmind.branchConnection.roundedfold": {
            label: (0, d.WZ)("Rounded Fold"),
            img: "line-rounded-fold",
            sortIndex: 7,
          },
          "org.xmind.branchConnection.bight": {
            label: (0, d.WZ)("Bight"),
            img: "line-bight",
            sortIndex: 5,
          },
        },
        Ee = {
          topic: {
            imgPrefix: "static/assets/images/shapes/branch-connection/normal",
            activeImgPrefix:
              "static/assets/images/shapes/branch-connection/small",
          },
          tree: {
            imgPrefix:
              "static/assets/images/shapes/branch-connection/tree-chart/small",
            activeImgPrefix:
              "static/assets/images/shapes/branch-connection/tree-chart/normal",
          },
        },
        Ze = () => {
          const e = l("topicLineClass")(),
            { topicLineClassOptions: t } = e,
            i = Te(e, ["topicLineClassOptions"]),
            a = (0, n.Fl)(() => {
              const { majorStructureClass: e } = we();
              return [
                "org.xmind.ui.tree.left",
                "org.xmind.ui.tree.right",
              ].includes(String(e.value))
                ? Oe("tree")(t.value)
                : Oe("topic")(t.value);
            });
          return Object.assign(Object.assign({}, i), {
            topicLineClassOptions: a,
            structureClassDirection: {
              "org.xmind.ui.logic.right": "right",
              "org.xmind.ui.logic.left": "left",
              "org.xmind.ui.tree.right": "right",
              "org.xmind.ui.tree.left": "left",
              "org.xmind.ui.org-chart.down": "down",
              "org.xmind.ui.org-chart.up": "up",
            },
          });
        };
      var Be = function (e, t) {
        var i = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (i[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
            t.indexOf(n[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
              (i[n[a]] = e[n[a]]);
        }
        return i;
      };
      const We = () => {
          const e = l("topicLineColorString")(),
            { isTopicLineColorStringDisabled: t } = e,
            i = Be(e, ["isTopicLineColorStringDisabled"]),
            a = (0, n.Fl)(
              () =>
                t.value ||
                "none" === l("topicLinePattern")().topicLinePattern.value,
            );
          return Object.assign(Object.assign({}, i), {
            isTopicLineColorStringDisabled: a,
          });
        },
        Pe = () => {
          const e = l("summaryLineColorString")(),
            { isSummaryLineColorStringDisabled: t } = e,
            i = Be(e, ["isSummaryLineColorStringDisabled"]),
            a = (0, n.Fl)(
              () => t.value || "none" === I().summaryLinePattern.value,
            );
          return Object.assign(Object.assign({}, i), {
            isSummaryLineColorStringDisabled: a,
          });
        };
      var Ce = i(54856),
        De = i(90435),
        Fe = function (e, t, i, n) {
          return new (i || (i = Promise))(function (a, o) {
            function r(e) {
              try {
                s(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, l);
            }
            s((n = n.apply(e, t || [])).next());
          });
        };
      const Ae = {
          "numeral-arabic": { label: (0, d.WZ)("1.2.3."), sortIndex: 1 },
          "alphabet-uppercase": { label: (0, d.WZ)("A.B.C."), sortIndex: 2 },
          "alphabet-lowercase": { label: (0, d.WZ)("a.b.c."), sortIndex: 3 },
          "numeral-roman": { label: (0, d.WZ)("I.II.III."), sortIndex: 4 },
        },
        Ne = (e) =>
          e
            .filter(({ value: e }) => !!Ae[String(e)])
            .map(({ value: e }) => ({ value: e, label: Ae[e].label }))
            .sort((e, t) => Ae[e.value].sortIndex - Ae[t.value].sortIndex),
        Re = () =>
          Object.assign(Object.assign({}, l("topicNumberingPattern", Ne)()), {
            changeTopicNumberingPattern: (e) =>
              Fe(void 0, void 0, void 0, function* () {
                if ("none" !== e) {
                  if (!(yield De.ZP.fetch(Ce.Gy, "action.changeNumbering")))
                    return;
                }
                const { executeAction: t } = (0, a.nZ)();
                let i = [
                  {
                    name: "mutateProperty:topicNumberingPattern",
                    inputValue: e,
                  },
                ];
                "none" === e &&
                  (i = i.concat([
                    {
                      name: "mutateProperty:topicNumberingTieredEnabled",
                      inputValue: !1,
                    },
                    {
                      name: "mutateProperty:topicNumberingStartsHereEnabled",
                      inputValue: !1,
                    },
                  ])),
                  t({ name: "mutatePropertyBatch", payload: i });
              }),
          }),
        je = () =>
          Object.assign(Object.assign({}, l("topicNumberingTieredEnabled")()), {
            changeTopicNumberingTieredEnabled: (e) =>
              Fe(void 0, void 0, void 0, function* () {
                if (!(yield De.ZP.fetch(Ce.Gy, "action.changeNumbering")))
                  return;
                const { executeStyleAction: t } = (0, a.nZ)();
                t({
                  name: "mutateProperty:topicNumberingTieredEnabled",
                  inputValue: e,
                });
              }),
          }),
        Me = () =>
          Object.assign(
            Object.assign({}, l("topicNumberingStartsHereEnabled")()),
            {
              changeTopicNumberingStartsHereEnabled: (e) =>
                Fe(void 0, void 0, void 0, function* () {
                  if (!(yield De.ZP.fetch(Ce.Gy, "action.changeNumbering")))
                    return;
                  const { executeStyleAction: t } = (0, a.nZ)();
                  t({
                    name: "mutateProperty:topicNumberingStartsHereEnabled",
                    inputValue: e,
                  });
                }),
            },
          ),
        He = () => ({
          applyingNumberingAttributesToSiblings: () =>
            Fe(void 0, void 0, void 0, function* () {
              if (
                !(yield De.ZP.fetch(
                  Ce.Gy,
                  "editor.applyingNumberingAttributesToSiblings",
                ))
              )
                return;
              const { executeMutationAction: e } = (0, a.nZ)();
              e({ name: "mutate:applyingNumberingAttributesToSiblings" });
            }),
        }),
        ke = () => ({
          isResetImageSizeDisabled: (0, n.Fl)(() => {
            var e;
            const { actionStates: t } = (0, a.nZ)();
            return !!(null === (e = t.value["mutate:resetStyle"]) ||
            void 0 === e
              ? void 0
              : e.disabled);
          }),
          resetImageSize: () => {
            const { executeAction: e } = (0, a.nZ)();
            e({ name: "mutate:resetTopicImageSize" });
          },
        }),
        $e = () => ({
          isUpdateStyleDisabled: (0, n.Fl)(() => {
            var e;
            const { actionStates: t } = (0, a.nZ)();
            return !!(null === (e = t.value["mutate:updateStyle"]) ||
            void 0 === e
              ? void 0
              : e.disabled);
          }),
          isUpdateStyleToSameLevelDisabled: (0, n.Fl)(() => {
            var e;
            const { actionStates: t } = (0, a.nZ)();
            return !!(null === (e = t.value["mutate:updateStyleToSameLevel"]) ||
            void 0 === e
              ? void 0
              : e.disabled);
          }),
          updateStyle: () => {
            const { executeAction: e } = (0, a.nZ)();
            e({ name: "mutate:updateStyle" });
          },
          updateStyleToSameLevel: () => {
            const { executeAction: e } = (0, a.nZ)();
            e({ name: "mutate:updateStyleToSameLevel" });
          },
        }),
        Ge = () => ({
          isResetStyleDisabled: (0, n.Fl)(() => {
            var e;
            const { actionStates: t } = (0, a.nZ)();
            return !!(null === (e = t.value["mutate:resetStyle"]) ||
            void 0 === e
              ? void 0
              : e.disabled);
          }),
          resetStyle: () => {
            const { executeAction: e } = (0, a.nZ)();
            e({ name: "mutate:resetStyle" });
          },
        }),
        Ue = l(
          "topicQuickStyle",
          (e) =>
            e
              .filter(({ value: e }) => !!$[String(e)])
              .map(({ value: e }) => {
                const t = e,
                  i = $[t];
                return { value: t, label: (null == i ? void 0 : i.label) || t };
              })
              .sort((e, t) => $[e.value].sortIndex - $[t.value].sortIndex) ||
            [],
        ),
        ze = l("topicShapeClass", P("topic")),
        Ve = l("topicShapeClass", P("callout")),
        qe = l("relationshipShapeClass", P("relationship")),
        _e = l("boundaryShapeClass", P("boundary")),
        Ye = l("mapBackgroundColorString"),
        Je = l("topicFillPattern", u),
        Ke = l("boundaryFillPattern", u),
        Xe = l(
          "textFontStyle",
          (e) =>
            e
              .filter(({ value: e }) => {
                const [t, i] = String(e).split("|");
                return !!g[i];
              })
              .map(({ value: e }) => {
                const [t, i, n] = String(e).split("|"),
                  a = "true" === n,
                  o = g[i];
                return {
                  value: e,
                  label: a ? `${o.label} Italic` : o.label,
                  style: `font-weight: ${i}; font-style: ${a ? "italic" : "normal"}`,
                };
              })
              .sort((e, t) => {
                const i = String(e.value).split("|")[1],
                  n = String(t.value).split("|")[1],
                  a = g[i],
                  o = g[n];
                return a.sortIndex - o.sortIndex;
              }) || [],
        ),
        Qe = l("textFontSize"),
        et = l("textFontItalic"),
        tt = l("textFontBold"),
        it = l("textColorString"),
        nt = l(
          "textAlign",
          (e) =>
            e
              .filter(({ value: e }) => !!H[String(e)])
              .map(({ value: e }) => {
                const t = H[e];
                return Object.assign({ value: e }, t);
              })
              .sort((e, t) => H[e.value].sortIndex - H[t.value].sortIndex) ||
            [],
        ),
        at = l("textDecorationLineThrough"),
        ot = l(
          "textTransform",
          (e) =>
            e
              .filter(({ value: e }) => !!k[String(e)])
              .map(({ value: e }) => {
                const t = k[e];
                return Object.assign({ value: e }, t || { label: e });
              })
              .sort((e, t) => k[e.value].sortIndex - k[t.value].sortIndex) ||
            [],
        ),
        rt = l(
          "minorStructureClass",
          (e) =>
            e
              .filter(({ value: e }) => !!E[String(e)])
              .map(({ value: e }) => {
                const t = E[e];
                return { value: e, label: (null == t ? void 0 : t.label) || e };
              })
              .sort((e, t) => E[e.value].sortIndex - E[t.value].sortIndex) ||
            [],
        ),
        lt = l(
          "cellMergingForMatrix",
          (e) =>
            e
              .filter(({ value: e }) => !!Z[String(e)])
              .map(({ value: e }) => {
                const t = Z[e];
                return { value: e, label: (null == t ? void 0 : t.label) || e };
              }) || [],
        ),
        st = l("numberOfColumnsForGridStructure"),
        dt = l("relationshipLineArrowEndClass", h),
        ut = l(
          "relationshipBeginArrowClass",
          (e) =>
            e
              .filter(({ value: e }) => !!B[String(e)])
              .map(({ value: e }) => {
                const t = B[e];
                return Object.assign(
                  { value: e, label: (null == t ? void 0 : t.label) || e },
                  (null == t ? void 0 : t.img) && {
                    img: (0, s.ju)(
                      `static/assets/images/shapes/arrow-shape/normal/${t.img}.svg`,
                    ),
                    activeImg: (0, s.ju)(
                      `static/assets/images/shapes/arrow-shape/small/${t.img}.svg`,
                    ),
                  },
                );
              })
              .sort((e, t) => B[e.value].sortIndex - B[t.value].sortIndex) ||
            [],
        ),
        ct = l("relationshipLineColorString"),
        gt = l("relationshipLinePattern", b("relationship")),
        mt = l("relationshipLineWidth", w),
        ht = l("topicMultiBranchColorSet", (e) =>
          e.map((t, i) =>
            Object.assign(Object.assign({}, t), {
              trialRequest:
                i >= e.length - 6 ? "action.switchColorBranch" : null,
            }),
          ),
        ),
        pt = l("topicMultiBranchColoringEnabled"),
        vt = l("topicTaperedLineEnabled"),
        bt = l("globalLineWidth", w),
        ft = l("globalLineColorString"),
        xt = l("mainBranchTaperedLineEnabled"),
        yt = l("mainBranchMultiLineColoringEnabled"),
        It = l("mainBranchMultiLineColorSet", (e) =>
          e.map((t, i) =>
            Object.assign(Object.assign({}, t), {
              trialRequest:
                i >= e.length - 6 ? "action.switchColorBranch" : null,
            }),
          ),
        ),
        St = l("justifyTopicAlignmentEnabled"),
        wt = l("mainBranchFreePositioningEnabled"),
        Tt = l("floatingTopicFreePositioningEnabled"),
        Ot = l("topicOverlappingEnabled"),
        Lt = l("autoBalancedMapEnabled"),
        Et = l("compactLayoutEnabled"),
        Zt = l("topicImageWidth"),
        Bt = l("topicImageHeight"),
        Wt = l("topicImageLockRatio"),
        Pt = l("topicImageShadowVisible"),
        Ct = l("topicImageOpacity");
    },
    71596: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => B });
      var n,
        a = i(2954),
        o = i(40219),
        r = i(41809),
        l = i(50965),
        s = i(16704),
        d = i(69931),
        u = i(95246),
        c = i(96160),
        g = i(34275),
        m = function (e, t, i, n) {
          return new (i || (i = Promise))(function (a, o) {
            function r(e) {
              try {
                s(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              try {
                s(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, l);
            }
            s((n = n.apply(e, t || [])).next());
          });
        };
      !(function (e) {
        (e.NONE = "NONE"),
          (e.SMALL = "SMALL"),
          (e.MEDIUM = "MEDIUM"),
          (e.LARGE = "LARGE");
      })(n || (n = {}));
      const h = 462,
        p = 64,
        v = [64, 32, 16, 8, 4, 2],
        b = (e) => {
          var t;
          if ("" === e) return 0;
          const [i, n, a] =
              null !== (t = e.match(/^\s*([\d.]+)\s*:\s*([\d.]+)\s*$/)) &&
              void 0 !== t
                ? t
                : [],
            o = parseFloat(n),
            r = parseFloat(a);
          return isNaN(o) ||
            isNaN(r) ||
            ((e, t, i = 1e-7) => e === t || Math.abs(t - e) <= i)(r, 0)
            ? 0
            : o / r;
        },
        f = (e) =>
          new Promise((t, i) => {
            const n = new Image();
            (n.src = e),
              (n.onload = () => {
                t(n);
              }),
              (n.onerror = (e) => i(e));
          }),
        x = (e, t) => ({
          baseP: e,
          top: t[0] || 0,
          right: t[1] || 0,
          bottom: t[2] || 0,
          left: t[3] || 0,
          style: {
            paddingTop: `${t[0] || 0}px`,
            paddingRight: `${t[1] || 0}px`,
            paddingBottom: `${t[2] || 0}px`,
            paddingLeft: `${t[3] || 0}px`,
          },
        }),
        y = (e) => ({ radius: e, style: { borderRadius: `${e}px` } }),
        I = ([e, t, i, n]) => ({
          width: e,
          height: t,
          left: i,
          top: n,
          style: {
            position: "absolute",
            width: `${e}px`,
            height: `${t}px`,
            left: `${i}px`,
            top: `${n}px`,
          },
        }),
        S = ([e, t, i, n, a]) => ({
          width: e,
          left: t,
          top: i,
          color: n,
          font: a,
          style: {
            position: "absolute",
            left: `${t}px`,
            top: `${i}px`,
            color: n,
            font: a,
          },
        }),
        w = (e) => Math.floor(100 * e) / 100,
        T = (e, t, i, n, a, o) => {
          e.beginPath(),
            e.moveTo(t + o, i),
            e.arcTo(t + n, i, t + n, i + a, o),
            e.arcTo(t + n, i + a, t, i + a, o),
            e.arcTo(t, i + a, t, i, o),
            e.arcTo(t, i, t + n, i, o),
            e.closePath();
        },
        O = (e) => (0, u.sF)(e) > 127.5,
        L = (e) => (e ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)"),
        E = (e) =>
          e
            ? (0, d.ju)("static/images/map-shot/watermark-light.svg")
            : (0, d.ju)("static/images/map-shot/watermark-dark.svg"),
        Z = () => {
          const e = (0, a.iH)(""),
            t = (0, a.iH)(!0),
            i = (0, a.Fl)(() => (0, l.ae)().isBrandingVisible),
            d = (0, a.Fl)(() => (0, l.ae)().isDateVisible),
            Z = (0, a.Fl)(() => (0, l.ae)().layout),
            B = (0, a.Fl)(() => (0, l.ae)().layoutBackground),
            W = (0, a.Fl)(() => (0, l.ae)().padding),
            P = (0, a.Fl)(() => (0, l.ae)().radius),
            C = (0, a.Fl)(() => (0, l.ae)().shadow),
            D = (0, a.Fl)(() => (0, l.ae)().background),
            F = (0, a.Fl)(() => (0, l.ae)().mapBackground),
            A = (0, a.Fl)(() => (0, l.ae)().isTransparent),
            N = (0, a.Fl)(() => (0, l.ae)().watermarkRatio),
            R = (0, a.Fl)(() => W.value === n.NONE),
            j = (0, a.Fl)(() => "1" === Z.value),
            M = (0, a.Fl)(() => "1" === Z.value && !A.value),
            H = (0, a.Fl)(() => ["1", "5", "6"].includes(Z.value)),
            k = (0, a.Fl)(() => ["1", "5", "6"].includes(Z.value)),
            $ = (0, a.Fl)(() => [
              { value: b(""), label: (0, s.WZ)("Auto") },
              { value: b("1:1"), label: "1:1" },
              { value: b("4:3"), label: "4:3" },
              { value: b("16:9"), label: "16:9" },
              { value: b("3:4"), label: "3:4" },
              { value: b("9:16"), label: "9:16" },
            ]),
            G = (0, a.Fl)(() => [
              { value: n.NONE, label: (0, s.WZ)("None") },
              { value: n.SMALL, label: (0, s.WZ)("Small") },
              { value: n.MEDIUM, label: (0, s.WZ)("Medium") },
              { value: n.LARGE, label: (0, s.WZ)("Large") },
            ]),
            U = (0, a.Fl)(() =>
              "1" === Z.value
                ? G.value.filter((e) => e.value === n.NONE)
                : G.value.filter((e) => e.value !== n.NONE),
            ),
            z = (0, a.Fl)(() => {
              const { DEFAULT_LAYOUT_BACKGROUND: e } = (0, l.ae)();
              return [
                {
                  key: "1",
                  value: {
                    layout: "1",
                    padding: n.NONE,
                    shadow: n.NONE,
                    radius: n.NONE,
                    background: "none",
                    isTransparent: !1,
                  },
                },
                {
                  key: "2",
                  value: {
                    layout: "2",
                    padding: n.MEDIUM,
                    shadow: n.MEDIUM,
                    radius: n.SMALL,
                    background: B.value[0] || e[0],
                    isTransparent: !1,
                  },
                },
                {
                  key: "3",
                  value: {
                    layout: "3",
                    padding: n.MEDIUM,
                    shadow: n.MEDIUM,
                    radius: n.NONE,
                    background: B.value[1] || e[1],
                    isTransparent: !1,
                  },
                },
                {
                  key: "4",
                  value: {
                    layout: "4",
                    padding: n.MEDIUM,
                    shadow: n.MEDIUM,
                    radius: n.MEDIUM,
                    background: B.value[2] || e[2],
                    isTransparent: !1,
                  },
                },
                {
                  key: "5",
                  value: {
                    layout: "5",
                    padding: n.MEDIUM,
                    shadow: n.NONE,
                    radius: n.NONE,
                    background: B.value[3] || e[3],
                    isTransparent: !1,
                  },
                },
                {
                  key: "6",
                  value: {
                    layout: "6",
                    padding: n.MEDIUM,
                    shadow: n.NONE,
                    radius: n.NONE,
                    background: B.value[4] || e[4],
                    isTransparent: !1,
                  },
                },
              ];
            }),
            V = (0, a.Fl)(() => {
              const e = new Date();
              return `${e.getFullYear()} / ${e.getMonth() + 1} / ${e.getDate()}`;
            }),
            q = (0, a.Fl)(() => O(D.value)),
            _ = (0, a.Fl)(() => O(F.value)),
            Y = (0, a.Fl)(() => L(q.value)),
            J = (0, a.Fl)(() => L(_.value)),
            K = (0, a.Fl)(() => E(q.value)),
            X = (0, a.Fl)(() => E(_.value)),
            Q = (e) =>
              ["1", "2"].includes(Z.value)
                ? x(e, [e, e, e, e])
                : "3" === Z.value
                  ? x(e, [3 * e, e, 3 * e, e])
                  : "4" === Z.value
                    ? x(e, [e, e, 3 * e, e])
                    : "5" === Z.value
                      ? x(e, [0, 0, 4 * e, 0])
                      : "6" === Z.value
                        ? x(e, [e, 0, 3 * e, 0])
                        : void 0,
            ee = (e) => {
              if (!e.width || !e.height) return 0;
              const t = (e.width + e.height) / 2,
                i = Math.min(Math.max(Math.floor(t / 50), 1), 60),
                n = Math.min(Math.max(2 * i, 2), 120),
                a = n * (0, l.ae)().watermarkScaleRatio < p;
              return e.height > h || a ? Math.max(n, a ? 16 : p) : n;
            },
            te = (e) => {
              if (!e.width || !e.height || R.value) return x(0, [0, 0, 0, 0]);
              const t = (e.width + e.height) / 2,
                i = Math.min(Math.max(Math.floor(t / 50), 1), 60);
              if (W.value === n.SMALL) return Q(i);
              if (W.value === n.MEDIUM) {
                const e = Math.min(Math.max(2 * i, 2), 120);
                return Q(e);
              }
              if (W.value === n.LARGE) {
                const e = Math.min(Math.max(4 * i, 4), 240);
                return Q(e);
              }
            },
            ie = (e) => {
              if (!e.width || !e.height || P.value === n.NONE) return y(0);
              const t = Math.min(e.width, e.height),
                i = Math.min(Math.max(Math.floor(t / 35), 1), 120);
              if (P.value === n.SMALL) return y(i);
              if (P.value === n.MEDIUM) {
                const e = Math.min(Math.max(2 * i, 2), 240);
                return y(e);
              }
              if (P.value === n.LARGE) {
                const e = Math.min(Math.max(4 * i, 4), 480);
                return y(e);
              }
            },
            ne = (e) =>
              [
                e / 1.5 / 1.5 / 1.5 / 1.5,
                e / 1.5 / 1.5 / 1.5,
                e / 1.5 / 1.5,
                e / 1.5,
                e,
              ].map(w),
            ae = (e) => {
              if (!e.width || !e.height || R.value || C.value === n.NONE)
                return {
                  shadowOffsetX: [],
                  shadowOffsetY: [],
                  shadowBlur: [],
                  shadowColor: [],
                  style: { boxShadow: "" },
                };
              const t = te(e),
                i = 0.8 * Math.min(t.top, t.right, t.bottom, t.left),
                a = i / 16,
                r = i / 8,
                l = i / 4,
                s = i / 2,
                d = [a, r, l, s, i],
                u = [0.8 * a, 0.8 * r, 0.8 * l, 0.8 * s, 0.8 * i].map(w);
              let c = [];
              C.value === n.SMALL && (c = ne(0.05)),
                C.value === n.MEDIUM && (c = ne(0.1)),
                C.value === n.LARGE && (c = ne(0.2));
              const g = (({ h: e, s: t, l: i }, n) =>
                n.map((n) => `hsl(${e}deg ${t}% ${i / 4}% / ${n})`))(
                o.s.hexStringToHSLObject(D.value),
                c,
              );
              return {
                shadowOffsetX: [0, 0, 0, 0, 0],
                shadowOffsetY: (m = [d, u, g])[0],
                shadowBlur: m[1],
                shadowColor: m[2],
                style: {
                  boxShadow: Array.from({ length: 5 }, (e, t) => t)
                    .map((e) => `0px ${m[0][e]}px ${m[1][e]}px ${m[2][e]}`)
                    .join(", "),
                },
              };
              var m;
            },
            oe = (t) => {
              if (!i.value) return I([0, 0, 0, 0]);
              const n = te(t),
                a = ee(t),
                o =
                  n.bottom * (0, l.ae)().watermarkScaleRatio < p ||
                  (n.bottom < p && t.height > h),
                r = Math.min((R.value || o ? a : n.bottom) / 4, 128),
                s =
                  (r / N.value) * (d.value ? 2 : 1) > t.width
                    ? v.filter(
                        (e) => (e / N.value) * (d.value ? 2 : 1) + 16 < t.width,
                      )[0]
                    : r,
                u = s / N.value,
                c = R.value
                  ? t.height - a + (a - s) / 2
                  : o
                    ? n.top + t.height - (a + s) / 2
                    : n.top + t.height + (n.bottom - s) / 2;
              return (
                (e.value = o ? X.value : K.value),
                d.value
                  ? I([
                      u,
                      s,
                      R.value
                        ? 1.5 * s
                        : ["5", "6"].includes(Z.value)
                          ? o
                            ? n.baseP + 1.5 * s
                            : n.baseP
                          : o
                            ? n.left + 1.5 * s
                            : n.left,
                      c,
                    ])
                  : I([
                      u,
                      s,
                      R.value
                        ? (t.width - u) / 2
                        : (n.left + n.right + t.width - u) / 2,
                      c,
                    ])
              );
            },
            re = (t) => {
              if (!d.value) return S([0, 0, 0, "", ""]);
              const n = te(t),
                a = ee(t),
                o =
                  n.bottom * (0, l.ae)().watermarkScaleRatio < p ||
                  (n.bottom < p && t.height > h),
                r = Math.min((R.value || o ? a : n.bottom) / 4, 128),
                s =
                  (r / N.value) * (i.value ? 2 : 1) > t.width
                    ? v.filter(
                        (e) => (e / N.value) * (i.value ? 2 : 1) + 16 < t.width,
                      )[0]
                    : r,
                u = `500 ${0.83 * s}px Nevermind`,
                c = ((e, t) => {
                  const i = document.createElement("canvas").getContext("2d");
                  i.font = t;
                  const n = i.measureText(e);
                  return {
                    width: n.width,
                    height:
                      n.actualBoundingBoxAscent + n.actualBoundingBoxDescent,
                  };
                })(V.value, u),
                g = R.value
                  ? t.height - a + (a - c.height) / 2
                  : o
                    ? n.top + t.height - (a + c.height) / 2
                    : n.top + t.height + (n.bottom - c.height) / 2,
                m = o ? J.value : Y.value;
              return (
                (e.value = o ? X.value : K.value),
                i.value
                  ? S([
                      c.width,
                      R.value
                        ? t.width - c.width - 1.5 * s
                        : ["5", "6"].includes(Z.value)
                          ? o
                            ? n.left + t.width - c.width - n.baseP - 1.5 * s
                            : n.left + t.width - c.width - n.baseP
                          : o
                            ? n.left + t.width - c.width - 1.5 * s
                            : n.left + t.width - c.width,
                      g,
                      m,
                      u,
                    ])
                  : S([
                      c.width,
                      R.value
                        ? (t.width - c.height) / 2
                        : (n.left + n.right + t.width - c.height) / 2,
                      g,
                      m,
                      u,
                    ])
              );
            };
          return {
            normalOptions: G,
            layoutOptions: z,
            aspectRatioOptions: $,
            paddingOptions: U,
            isPaddingDisabeld: j,
            isBackgroundDisabeld: M,
            isRadiusDisabeld: H,
            isShadowDisabeld: k,
            isSplitByMainBranchDisabled: t,
            dateStr: V,
            brandingURL: e,
            init: () =>
              m(void 0, void 0, void 0, function* () {
                const { updateImageFrame: e, changeWatermarkRatio: t } = (0,
                l.ae)();
                e({
                  layout: "1",
                  padding: "NONE",
                  radius: "NONE",
                  shadow: "NONE",
                  isTransparent: !1,
                  isSplitByMainBranch: !1,
                  aspectRatio: 0,
                }),
                  (() => {
                    var e, t;
                    const { styles: i } = (0, c.nZ)(),
                      { updateImageFrame: n } = (0, l.ae)(),
                      { mapBackgroundColorString: a } = (0, g.wB)(),
                      o = a.value,
                      r = (
                        (null ===
                          (t =
                            null === (e = i.value) || void 0 === e
                              ? void 0
                              : e.mapCandidateColors) || void 0 === t
                          ? void 0
                          : t.value) || []
                      ).filter((e) => e !== o);
                    n(
                      Object.assign(
                        Object.assign(
                          {},
                          r.length > 0 && {
                            background: r[0],
                            layoutBackground: r,
                          },
                        ),
                        { mapBackground: o },
                      ),
                    );
                  })();
                const i = yield f(K.value);
                t(i.height / i.width);
              }),
            getPreviewSize: (e) => {
              let t = e.width,
                i = e.height;
              if (0 === t || 0 === i) return { width: t, height: i };
              const n = t / i;
              return (
                n > 1 && ((t = 300), (i = t / n)),
                i > 300 && ((i = 300), (t = i * n)),
                { width: t, height: i }
              );
            },
            getPadding: te,
            getRadius: ie,
            getShadow: ae,
            getBranding: oe,
            getDate: re,
            getInsidePaddingBottom: ee,
            buildImageEffect: (t) =>
              m(void 0, void 0, void 0, function* () {
                const a = yield f(t);
                let o = { width: a.width, height: a.height };
                const l = te(o),
                  s = ie(o),
                  c = ae(o),
                  g = l.bottom < p && o.height > h,
                  v = (0, u.JX)(),
                  b = document.createElement("canvas");
                (b.width = a.width + l.left + l.right),
                  (b.height = a.height + l.top + l.bottom);
                const x = (0, u.yB)(b.width * v, b.height * v);
                x ||
                  ((b.width = a.width / v + l.left + l.right),
                  (b.height = a.height / v + l.top + l.bottom),
                  (o = { width: a.width / v, height: a.height / v }));
                const y = b.getContext("2d");
                (y.fillStyle = "none" === D.value ? "transparent" : D.value),
                  y.fillRect(0, 0, b.width, b.height);
                const I = () =>
                  m(void 0, void 0, void 0, function* () {
                    const t = oe(o),
                      n = re(o),
                      a = yield f(e.value);
                    i.value &&
                      ((y.imageSmoothingEnabled = !1),
                      y.drawImage(a, t.left, t.top, t.width, t.height)),
                      d.value &&
                        ((y.fillStyle = n.color),
                        (y.font = n.font),
                        y.fillText(V.value, n.left, n.top));
                  });
                (!i.value && !d.value) ||
                  W.value === n.NONE ||
                  g ||
                  (yield I()),
                  C.value !== n.NONE &&
                    ((y.fillStyle = A.value ? "transparent" : F.value),
                    Array.from({ length: 5 }, (e, t) => t).map((e) => {
                      (y.shadowOffsetX = c.shadowOffsetX[e]),
                        (y.shadowOffsetY = c.shadowOffsetY[e]),
                        (y.shadowBlur = c.shadowBlur[e]),
                        (y.shadowColor = c.shadowColor[e]),
                        T(y, l.left, l.top, o.width, o.height, s.radius),
                        y.fill();
                    })),
                  P.value !== n.NONE &&
                    (T(y, l.left, l.top, o.width, o.height, s.radius),
                    y.clip()),
                  (y.imageSmoothingEnabled = !1),
                  y.drawImage(a, l.left, l.top, o.width, o.height),
                  (!i.value && !d.value) ||
                    (W.value !== n.NONE && !g) ||
                    (yield I());
                let S = b.toDataURL("image/png");
                return v > 1 && x && (S = (0, r.Hv)(S, 72 * v)), S;
              }),
          };
        },
        B = (() => {
          const e = Symbol("default-image-effect"),
            t = new Map();
          return (i = e) => {
            if (t.has(i)) return t.get(i);
            const n = Z();
            return t.set(i, n), n;
          };
        })();
    },
  },
]);
