"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [1393],
  {
    11393: (t, e, n) => {
      n.r(e), n.d(e, { exportOPML: () => x });
      var r = n(72298);
      function o(t) {
        return (
          (o =
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
          o(t)
        );
      }
      function i(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return a(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return a(t, e);
            })(t)) ||
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
          c = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (u = !0), (i = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function a(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function c(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, l(r.key), r);
        }
      }
      function u(t, e, n) {
        return (
          (e = l(e)) in t
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
      function l(t) {
        var e = (function (t, e) {
          if ("object" !== o(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== o(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === o(e) ? e : String(e);
      }
      function f() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.indent,
          r = void 0 === n ? 0 : n,
          o = e.lineBreak,
          i = void 0 === o ? "\n" : o;
        return "".concat("\t".repeat(r)).concat(t).concat(i);
      }
      function s() {
        return (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
        )
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&apos;");
      }
      var d = (function () {
        function t(e, n) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            u(this, "sheet", void 0),
            u(this, "textWatermark", ""),
            (this.sheet = e),
            n && (this.textWatermark = n);
        }
        var e, n, r;
        return (
          (e = t),
          (n = [
            {
              key: "convert",
              value: function () {
                if (!this.sheet) throw new Error("fail to load Sheet");
                return this.traverseSheet(this.sheet);
              },
            },
            {
              key: "traverseSheet",
              value: function (t) {
                var e = t.rootTopic,
                  n = "";
                return (
                  (n += f('<?xml version="1.0" encoding="UTF-8"?>')),
                  (n += f('<opml version="1.0">')),
                  (n += f("<head>", { indent: 1 })),
                  (n += f(
                    "<dateCreated>".concat(new Date(), "</dateCreated>"),
                    { indent: 2 },
                  )),
                  (n += f(
                    "<dateModified>".concat(new Date(), "</dateModified>"),
                    { indent: 2 },
                  )),
                  (n += f("</head>", { indent: 1 })),
                  (n += f("<body>", { indent: 1 })),
                  (n += this.traverseTopic(e, 1)),
                  this.textWatermark &&
                    (n += f(
                      '<outline text="'.concat(
                        this.textWatermark,
                        '"></outline>',
                      ),
                      { indent: 2 },
                    )),
                  (n += f("</body>", { indent: 1 })),
                  (n += f("</opml>"))
                );
              },
            },
            {
              key: "traverseTopic",
              value: function (t, e) {
                var n,
                  r = "",
                  o = [],
                  a = t.title || "";
                o.push('text="'.concat(s(a), '"'));
                var c =
                  (null === (n = t.notes) || void 0 === n ? void 0 : n.text) ||
                  "";
                c &&
                  o.push('_note="'.concat(s(c).replace(/\n/gi, "&#10;"), '"'));
                var u = t.href;
                "string" == typeof u &&
                  u.startsWith("http") &&
                  o.push('type="link" _url="'.concat(s(u), '"'));
                var l = e - 1 + 2,
                  d = [].concat(t.children).concat(t.detachedChildren);
                if (d.length) {
                  r += f("<outline ".concat(o.join(" "), ">"), { indent: l });
                  var v,
                    p = i(d);
                  try {
                    for (p.s(); !(v = p.n()).done; ) {
                      var h = v.value;
                      r += this.traverseTopic(h, e + 1);
                    }
                  } catch (t) {
                    p.e(t);
                  } finally {
                    p.f();
                  }
                  r += f("</outline>", { indent: l });
                } else
                  r += f("<outline ".concat(o.join(" "), "></outline>"), {
                    indent: l,
                  });
                return r;
              },
            },
          ]) && c(e.prototype, n),
          r && c(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })();
      var v = n(50965),
        p = n(96160),
        h = n(18621),
        y = n(13382),
        m = n(94787),
        b = n(86633),
        g = function (t, e, n, r) {
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
      const w = (0, b.ZP)("exportHandler:");
      function x() {
        return g(this, void 0, void 0, function* () {
          (0, m.Ae)("opml");
          const t = Date.now();
          let e = "";
          true || (e = "Xmind - Evaluation Version");
          const { activeSheet: n } = (0, p.nZ)(),
            o = (function (t, e) {
              return new d(t, e).convert();
            })(n.value, e),
            i = n.value.rootTopic.title;
          yield (0, m.Gm)();
          const a = yield (0, y.ZZ)({
            title: "Export",
            filters: [{ name: "OPML", extensions: ["opml"] }],
            suggestPath: { suggestedName: i },
          });
          if (a && o) {
            try {
              yield (0, m.yS)(a, o),
                (0, v.Rg)().addRateMasValue(10),
                r.shell.showItemInFolder(a);
            } catch (t) {
              w.debug("[Export to OPML]: ", t);
            }
            (0, h.L9)({
              eventCategory: "export",
              eventAction: "durationExportOPML",
              eventValue: Date.now() - t,
            });
          }
          (0, h.L9)({ eventCategory: "export", eventAction: "exportOPML" });
        });
      }
    },
  },
]);
