"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [3257],
  {
    87115: (t, e, n) => {
      function r(t) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          r(t)
        );
      }
      function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(n), !0).forEach(function (e) {
                f(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function a(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return l(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          u(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function c(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = u(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i,
          a = !0,
          c = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (c = !0), (i = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      }
      function u(t, e) {
        if (t) {
          if ("string" == typeof t) return l(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? l(t, e)
                : void 0
          );
        }
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function s(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, d(r.key), r);
        }
      }
      function f(t, e, n) {
        return (
          (e = d(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function d(t) {
        var e = (function (t, e) {
          if ("object" !== r(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(t, e || "default");
            if ("object" !== r(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === r(e) ? e : String(e);
      }
      n.d(e, { Y: () => g, l: () => m });
      var p = "xap:resources/",
        v = "\n",
        y = " ",
        h = "assets/";
      var b = (function () {
        function t(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            f(this, "target", void 0),
            f(this, "textBundleAssets", []),
            f(this, "exportTextBundle", void 0),
            (this.target = e),
            (this.exportTextBundle = n);
        }
        var e, n, r;
        return (
          (e = t),
          (n = [
            {
              key: "convert",
              value: function () {
                if (!this.target)
                  throw new Error("fail to load Sheet or TargetBranch");
                return "rootTopic" in this.target
                  ? this.traverseSheet(this.target)
                  : this.traverseTopic(this.target, 1);
              },
            },
            {
              key: "traverseSheet",
              value: function (t) {
                var e = t.rootTopic;
                return this.traverseTopic(e, 1);
              },
            },
            {
              key: "traverseTopic",
              value: function (t, e, n) {
                var r,
                  o = "",
                  i = "",
                  a = "",
                  u = "",
                  l = t.numberingPattern,
                  s = t.numberingIndex,
                  f = l && "none" !== l && null !== s;
                if (
                  (f && (u = "".concat(s + 1, ".").concat(y)), 1 <= e && e <= 3)
                )
                  f && (i += u), (i += "".concat("#".repeat(e)).concat(y));
                else {
                  if (!(e > 3)) return "";
                  var d = "".concat("\t".repeat(e - 4));
                  (i += f
                    ? "".concat(d).concat(u)
                    : "".concat(d).concat("-").concat(y)),
                    (a = "".concat(d).concat(y.repeat(2)));
                }
                var b,
                  m = this.traverseTopicTitle(t),
                  g = null === (r = t.notes) || void 0 === r ? void 0 : r.text,
                  w = t.imageSource,
                  x = t.href || "",
                  S = "string" == typeof x && x.startsWith("http"),
                  O =
                    "string" == typeof (b = x) &&
                    0 === b.indexOf("xap:resources/"),
                  T = (function (t) {
                    try {
                      return "file:" === new URL(t).protocol;
                    } catch (t) {
                      return !1;
                    }
                  })(x);
                !m && (S || T || O || w) && (m = " "), m && (o += i);
                var j = t.task,
                  k = t.taskPresentation,
                  P = t.aggregatedCountOfTodos,
                  A = t.aggregatedCountOfCheckedTodos === P,
                  C = "";
                if (
                  ("todo" === (null == j ? void 0 : j.status)
                    ? (C = ("todo" === k ? "[ ]" : A ? "[x]" : "[ ]") + y)
                    : "done" === (null == j ? void 0 : j.status) &&
                      (C = ("todo" === k || A ? "[x]" : "[ ]") + y),
                  (o += C),
                  m)
                ) {
                  if (this.exportTextBundle) {
                    if (S || T) o += "[".concat(m, "](").concat(x, ")");
                    else if (O) {
                      var E = x.replace(p, "");
                      this.textBundleAssets.push(E),
                        (o += "[".concat(m, "](").concat(h).concat(E, ")"));
                    } else o += m;
                    if (w) {
                      var D = w.replace(p, "");
                      this.textBundleAssets.push(D),
                        (o += "\n"),
                        (o += "![image](".concat(h).concat(D, ")"));
                    }
                  } else o += S || T ? "[".concat(m, "](").concat(x, ")") : m;
                  var B = ((null == n ? void 0 : n.children.length) || 0) > 1,
                    I = (t.children.length || 0) > 1,
                    N = t.children.indexOf(t) === t.children.length - 1;
                  o += "".concat(
                    !g && !S && e > 3 && B && !I && !N ? v : v.repeat(2),
                  );
                }
                if (
                  (g &&
                    g.split(v).forEach(function (t) {
                      o += "".concat(a).concat(t).concat(v);
                    }),
                  t.children)
                ) {
                  var L,
                    M = c(t.children);
                  try {
                    for (M.s(); !(L = M.n()).done; ) {
                      var J = L.value;
                      o += this.traverseTopic(J, e + 1);
                    }
                  } catch (t) {
                    M.e(t);
                  } finally {
                    M.f();
                  }
                }
                if (t.detachedChildren) {
                  var Z,
                    R = c(t.detachedChildren);
                  try {
                    for (R.s(); !(Z = R.n()).done; ) {
                      var F = Z.value;
                      o += this.traverseTopic(F, e + 1);
                    }
                  } catch (t) {
                    R.e(t);
                  } finally {
                    R.f();
                  }
                }
                return o;
              },
            },
            {
              key: "traverseTopicTitle",
              value: function (t) {
                var e = t.title || "";
                return (
                  [t.fontWeight, t.fontStyle, t.textDecoration].reduce(
                    function (t, e) {
                      return (function (t, e) {
                        if (!t) return "";
                        switch (e) {
                          case "italic":
                            return "*".concat(t, "*");
                          case "bold":
                            return "**".concat(t, "**");
                          case "line-through":
                            return "~~".concat(t, "~~");
                          default:
                            return t;
                        }
                      })(t || "", e || "");
                    },
                    e,
                  ) || ""
                );
              },
            },
          ]) && s(e.prototype, n),
          r && s(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })();
      function m(t) {
        return new b(t).convert();
      }
      function g(t, e) {
        var n,
          r =
            null !== (n = null == e ? void 0 : e.infoJson) && void 0 !== n
              ? n
              : {},
          o = new b(t, !0);
        return {
          mdText: o.convert(),
          assets: a(o.textBundleAssets),
          infoJson: JSON.stringify(
            i(i({}, { version: 2, type: "net.daringfireball.markdown" }), r),
          ),
        };
      }
    },
    3257: (t, e, n) => {
      n.r(e), n.d(e, { exportMarkdown: () => y });
      var r = n(71017),
        o = n.n(r),
        i = n(94593),
        a = n(72298),
        c = n(87115),
        u = n(50965),
        l = n(96160),
        s = n(18621),
        f = n(13382),
        d = n(94787),
        p = n(42799),
        v = function (t, e, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(t) {
              try {
                u(r.next(t));
              } catch (t) {
                i(t);
              }
            }
            function c(t) {
              try {
                u(r.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              var e;
              t.done
                ? o(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, c);
            }
            u((r = r.apply(t, e || [])).next());
          });
        };
      function y({ selectedTopicList: t }) {
        return v(this, void 0, void 0, function* () {
          (0, d.Ae)("markdown");
          const e = Date.now();
          if (t)
            t.length > 1
              ? yield (function (t) {
                  return v(this, void 0, void 0, function* () {
                    const e = t.map((t) => ({
                      mdText: (0, c.l)(t),
                      suggestedName: t.title,
                    }));
                    yield (0, d.Gm)();
                    const { T: n } = (0, u.JE)(),
                      r = yield (0, f.eq)({
                        folderName: null,
                        dialogOptions: {
                          buttonLabel: n("Save"),
                          properties: ["openDirectory", "createDirectory"],
                        },
                      });
                    if (!r) return;
                    const l = (0, p.F)().title || "",
                      s = o().join(r, l);
                    i.Z.ensureDirSync(s),
                      yield Promise.all(
                        e.map((t) => {
                          const { mdText: e, suggestedName: n } = t,
                            r = o().join(s, n + ".md");
                          return (0, d.yS)(r, e);
                        }),
                      ),
                      a.shell.openPath(s);
                  });
                })(t)
              : yield h({ topic: t[0] }, e);
          else {
            const { activeSheet: t } = (0, l.nZ)();
            yield h({ sheet: t.value }, e);
          }
        });
      }
      function h({ topic: t, sheet: e }, n) {
        return v(this, void 0, void 0, function* () {
          let r = "",
            o = "";
          t
            ? ((r = (0, c.l)(t)), (o = t.title))
            : ((r = (0, c.l)(e)), (o = e.rootTopic.title)),
            yield (0, d.Gm)();
          const i = yield (0, f.ZZ)({
            title: "Export",
            filters: [{ name: "markdown", extensions: ["md"] }],
            suggestPath: { suggestedName: o },
          });
          i &&
            (yield (0, d.yS)(i, r),
            (0, s.L9)({
              eventCategory: "export",
              eventAction: "durationExportMarkdown",
              eventValue: Date.now() - n,
            }),
            (0, u.Rg)().addRateMasValue(10),
            a.shell.showItemInFolder(i)),
            (0, s.L9)({
              eventCategory: "export",
              eventAction: "exportMarkdown",
            });
        });
      }
    },
  },
]);
