(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [7544],
  {
    99880: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => o });
      var n = r(23645),
        a = r.n(n)()(function (e) {
          return e[1];
        });
      a.push([
        e.id,
        ".share-service-card[data-v-3e51da34] {\n  box-shadow: none;\n  backdrop-filter: blur(30px);\n  filter: var(--uk-popover-box-shadow, drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.2)));\n}\n",
        "",
      ]);
      const o = a;
    },
    23645: (e) => {
      "use strict";
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var r = e(t);
              return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r;
            }).join("");
          }),
          (t.i = function (e, r, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var a = {};
            if (n)
              for (var o = 0; o < this.length; o++) {
                var i = this[o][0];
                null != i && (a[i] = !0);
              }
            for (var s = 0; s < e.length; s++) {
              var l = [].concat(e[s]);
              (n && a[l[0]]) ||
                (r &&
                  (l[2]
                    ? (l[2] = "".concat(r, " and ").concat(l[2]))
                    : (l[2] = r)),
                t.push(l));
            }
          }),
          t
        );
      };
    },
    18552: (e, t, r) => {
      var n = r(10852)(r(55639), "DataView");
      e.exports = n;
    },
    1989: (e, t, r) => {
      var n = r(51789),
        a = r(80401),
        o = r(57667),
        i = r(21327),
        s = r(81866);
      function l(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (l.prototype.clear = n),
        (l.prototype.delete = a),
        (l.prototype.get = o),
        (l.prototype.has = i),
        (l.prototype.set = s),
        (e.exports = l);
    },
    38407: (e, t, r) => {
      var n = r(27040),
        a = r(14125),
        o = r(82117),
        i = r(67518),
        s = r(54705);
      function l(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (l.prototype.clear = n),
        (l.prototype.delete = a),
        (l.prototype.get = o),
        (l.prototype.has = i),
        (l.prototype.set = s),
        (e.exports = l);
    },
    57071: (e, t, r) => {
      var n = r(10852)(r(55639), "Map");
      e.exports = n;
    },
    83369: (e, t, r) => {
      var n = r(24785),
        a = r(11285),
        o = r(96e3),
        i = r(49916),
        s = r(95265);
      function l(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (l.prototype.clear = n),
        (l.prototype.delete = a),
        (l.prototype.get = o),
        (l.prototype.has = i),
        (l.prototype.set = s),
        (e.exports = l);
    },
    53818: (e, t, r) => {
      var n = r(10852)(r(55639), "Promise");
      e.exports = n;
    },
    58525: (e, t, r) => {
      var n = r(10852)(r(55639), "Set");
      e.exports = n;
    },
    46384: (e, t, r) => {
      var n = r(38407),
        a = r(37465),
        o = r(63779),
        i = r(67599),
        s = r(44758),
        l = r(34309);
      function c(e) {
        var t = (this.__data__ = new n(e));
        this.size = t.size;
      }
      (c.prototype.clear = a),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = s),
        (c.prototype.set = l),
        (e.exports = c);
    },
    62705: (e, t, r) => {
      var n = r(55639).Symbol;
      e.exports = n;
    },
    11149: (e, t, r) => {
      var n = r(55639).Uint8Array;
      e.exports = n;
    },
    70577: (e, t, r) => {
      var n = r(10852)(r(55639), "WeakMap");
      e.exports = n;
    },
    96874: (e) => {
      e.exports = function (e, t, r) {
        switch (r.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, r[0]);
          case 2:
            return e.call(t, r[0], r[1]);
          case 3:
            return e.call(t, r[0], r[1], r[2]);
        }
        return e.apply(t, r);
      };
    },
    43202: (e) => {
      e.exports = function (e, t) {
        for (
          var r = -1, n = null == e ? 0 : e.length;
          ++r < n && !1 !== t(e[r], r, e);

        );
        return e;
      };
    },
    34963: (e) => {
      e.exports = function (e, t) {
        for (
          var r = -1, n = null == e ? 0 : e.length, a = 0, o = [];
          ++r < n;

        ) {
          var i = e[r];
          t(i, r, e) && (o[a++] = i);
        }
        return o;
      };
    },
    14636: (e, t, r) => {
      var n = r(22545),
        a = r(35694),
        o = r(1469),
        i = r(44144),
        s = r(65776),
        l = r(36719),
        c = Object.prototype.hasOwnProperty;
      e.exports = function (e, t) {
        var r = o(e),
          u = !r && a(e),
          d = !r && !u && i(e),
          p = !r && !u && !d && l(e),
          h = r || u || d || p,
          m = h ? n(e.length, String) : [],
          f = m.length;
        for (var g in e)
          (!t && !c.call(e, g)) ||
            (h &&
              ("length" == g ||
                (d && ("offset" == g || "parent" == g)) ||
                (p &&
                  ("buffer" == g || "byteLength" == g || "byteOffset" == g)) ||
                s(g, f))) ||
            m.push(g);
        return m;
      };
    },
    29932: (e) => {
      e.exports = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, a = Array(n); ++r < n; )
          a[r] = t(e[r], r, e);
        return a;
      };
    },
    62488: (e) => {
      e.exports = function (e, t) {
        for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
        return e;
      };
    },
    34865: (e, t, r) => {
      var n = r(89465),
        a = r(77813),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, r) {
        var i = e[t];
        (o.call(e, t) && a(i, r) && (void 0 !== r || t in e)) || n(e, t, r);
      };
    },
    18470: (e, t, r) => {
      var n = r(77813);
      e.exports = function (e, t) {
        for (var r = e.length; r--; ) if (n(e[r][0], t)) return r;
        return -1;
      };
    },
    44037: (e, t, r) => {
      var n = r(98363),
        a = r(3674);
      e.exports = function (e, t) {
        return e && n(t, a(t), e);
      };
    },
    63886: (e, t, r) => {
      var n = r(98363),
        a = r(81704);
      e.exports = function (e, t) {
        return e && n(t, a(t), e);
      };
    },
    89465: (e, t, r) => {
      var n = r(38777);
      e.exports = function (e, t, r) {
        "__proto__" == t && n
          ? n(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (e[t] = r);
      };
    },
    85990: (e, t, r) => {
      var n = r(46384),
        a = r(43202),
        o = r(34865),
        i = r(44037),
        s = r(63886),
        l = r(64626),
        c = r(278),
        u = r(18805),
        d = r(1911),
        p = r(58234),
        h = r(46904),
        m = r(64160),
        f = r(43824),
        g = r(29148),
        b = r(38517),
        v = r(1469),
        y = r(44144),
        x = r(56688),
        k = r(13218),
        S = r(72928),
        _ = r(3674),
        I = r(81704),
        T = "[object Arguments]",
        w = "[object Function]",
        Z = "[object Object]",
        W = {};
      (W[T] =
        W["[object Array]"] =
        W["[object ArrayBuffer]"] =
        W["[object DataView]"] =
        W["[object Boolean]"] =
        W["[object Date]"] =
        W["[object Float32Array]"] =
        W["[object Float64Array]"] =
        W["[object Int8Array]"] =
        W["[object Int16Array]"] =
        W["[object Int32Array]"] =
        W["[object Map]"] =
        W["[object Number]"] =
        W[Z] =
        W["[object RegExp]"] =
        W["[object Set]"] =
        W["[object String]"] =
        W["[object Symbol]"] =
        W["[object Uint8Array]"] =
        W["[object Uint8ClampedArray]"] =
        W["[object Uint16Array]"] =
        W["[object Uint32Array]"] =
          !0),
        (W["[object Error]"] = W[w] = W["[object WeakMap]"] = !1),
        (e.exports = function e(t, r, O, A, C, E) {
          var M,
            j = 1 & r,
            N = 2 & r,
            F = 4 & r;
          if ((O && (M = C ? O(t, A, C, E) : O(t)), void 0 !== M)) return M;
          if (!k(t)) return t;
          var P = v(t);
          if (P) {
            if (((M = f(t)), !j)) return c(t, M);
          } else {
            var L = m(t),
              B = L == w || "[object GeneratorFunction]" == L;
            if (y(t)) return l(t, j);
            if (L == Z || L == T || (B && !C)) {
              if (((M = N || B ? {} : b(t)), !j))
                return N ? d(t, s(M, t)) : u(t, i(M, t));
            } else {
              if (!W[L]) return C ? t : {};
              M = g(t, L, j);
            }
          }
          E || (E = new n());
          var R = E.get(t);
          if (R) return R;
          E.set(t, M),
            S(t)
              ? t.forEach(function (n) {
                  M.add(e(n, r, O, n, t, E));
                })
              : x(t) &&
                t.forEach(function (n, a) {
                  M.set(a, e(n, r, O, a, t, E));
                });
          var $ = P ? void 0 : (F ? (N ? h : p) : N ? I : _)(t);
          return (
            a($ || t, function (n, a) {
              $ && (n = t[(a = n)]), o(M, a, e(n, r, O, a, t, E));
            }),
            M
          );
        });
    },
    3118: (e, t, r) => {
      var n = r(13218),
        a = Object.create,
        o = (function () {
          function e() {}
          return function (t) {
            if (!n(t)) return {};
            if (a) return a(t);
            e.prototype = t;
            var r = new e();
            return (e.prototype = void 0), r;
          };
        })();
      e.exports = o;
    },
    21078: (e, t, r) => {
      var n = r(62488),
        a = r(37285);
      e.exports = function e(t, r, o, i, s) {
        var l = -1,
          c = t.length;
        for (o || (o = a), s || (s = []); ++l < c; ) {
          var u = t[l];
          r > 0 && o(u)
            ? r > 1
              ? e(u, r - 1, o, i, s)
              : n(s, u)
            : i || (s[s.length] = u);
        }
        return s;
      };
    },
    97786: (e, t, r) => {
      var n = r(71811),
        a = r(40327);
      e.exports = function (e, t) {
        for (var r = 0, o = (t = n(t, e)).length; null != e && r < o; )
          e = e[a(t[r++])];
        return r && r == o ? e : void 0;
      };
    },
    68866: (e, t, r) => {
      var n = r(62488),
        a = r(1469);
      e.exports = function (e, t, r) {
        var o = t(e);
        return a(e) ? o : n(o, r(e));
      };
    },
    44239: (e, t, r) => {
      var n = r(62705),
        a = r(89607),
        o = r(2333),
        i = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : i && i in Object(e)
            ? a(e)
            : o(e);
      };
    },
    9454: (e, t, r) => {
      var n = r(44239),
        a = r(37005);
      e.exports = function (e) {
        return a(e) && "[object Arguments]" == n(e);
      };
    },
    25588: (e, t, r) => {
      var n = r(64160),
        a = r(37005);
      e.exports = function (e) {
        return a(e) && "[object Map]" == n(e);
      };
    },
    28458: (e, t, r) => {
      var n = r(23560),
        a = r(15346),
        o = r(13218),
        i = r(80346),
        s = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        c = Object.prototype,
        u = l.toString,
        d = c.hasOwnProperty,
        p = RegExp(
          "^" +
            u
              .call(d)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      e.exports = function (e) {
        return !(!o(e) || a(e)) && (n(e) ? p : s).test(i(e));
      };
    },
    29221: (e, t, r) => {
      var n = r(64160),
        a = r(37005);
      e.exports = function (e) {
        return a(e) && "[object Set]" == n(e);
      };
    },
    38749: (e, t, r) => {
      var n = r(44239),
        a = r(41780),
        o = r(37005),
        i = {};
      (i["[object Float32Array]"] =
        i["[object Float64Array]"] =
        i["[object Int8Array]"] =
        i["[object Int16Array]"] =
        i["[object Int32Array]"] =
        i["[object Uint8Array]"] =
        i["[object Uint8ClampedArray]"] =
        i["[object Uint16Array]"] =
        i["[object Uint32Array]"] =
          !0),
        (i["[object Arguments]"] =
          i["[object Array]"] =
          i["[object ArrayBuffer]"] =
          i["[object Boolean]"] =
          i["[object DataView]"] =
          i["[object Date]"] =
          i["[object Error]"] =
          i["[object Function]"] =
          i["[object Map]"] =
          i["[object Number]"] =
          i["[object Object]"] =
          i["[object RegExp]"] =
          i["[object Set]"] =
          i["[object String]"] =
          i["[object WeakMap]"] =
            !1),
        (e.exports = function (e) {
          return o(e) && a(e.length) && !!i[n(e)];
        });
    },
    280: (e, t, r) => {
      var n = r(25726),
        a = r(86916),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!n(e)) return a(e);
        var t = [];
        for (var r in Object(e))
          o.call(e, r) && "constructor" != r && t.push(r);
        return t;
      };
    },
    10313: (e, t, r) => {
      var n = r(13218),
        a = r(25726),
        o = r(33498),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!n(e)) return o(e);
        var t = a(e),
          r = [];
        for (var s in e)
          ("constructor" != s || (!t && i.call(e, s))) && r.push(s);
        return r;
      };
    },
    56560: (e, t, r) => {
      var n = r(75703),
        a = r(38777),
        o = r(6557),
        i = a
          ? function (e, t) {
              return a(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: n(t),
                writable: !0,
              });
            }
          : o;
      e.exports = i;
    },
    14259: (e) => {
      e.exports = function (e, t, r) {
        var n = -1,
          a = e.length;
        t < 0 && (t = -t > a ? 0 : a + t),
          (r = r > a ? a : r) < 0 && (r += a),
          (a = t > r ? 0 : (r - t) >>> 0),
          (t >>>= 0);
        for (var o = Array(a); ++n < a; ) o[n] = e[n + t];
        return o;
      };
    },
    22545: (e) => {
      e.exports = function (e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
      };
    },
    80531: (e, t, r) => {
      var n = r(62705),
        a = r(29932),
        o = r(1469),
        i = r(33448),
        s = n ? n.prototype : void 0,
        l = s ? s.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (o(t)) return a(t, e) + "";
        if (i(t)) return l ? l.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -Infinity ? "-0" : r;
      };
    },
    27561: (e, t, r) => {
      var n = r(67990),
        a = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, n(e) + 1).replace(a, "") : e;
      };
    },
    51717: (e) => {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    57406: (e, t, r) => {
      var n = r(71811),
        a = r(10928),
        o = r(40292),
        i = r(40327);
      e.exports = function (e, t) {
        return (t = n(t, e)), null == (e = o(e, t)) || delete e[i(a(t))];
      };
    },
    71811: (e, t, r) => {
      var n = r(1469),
        a = r(15403),
        o = r(55514),
        i = r(79833);
      e.exports = function (e, t) {
        return n(e) ? e : a(e, t) ? [e] : o(i(e));
      };
    },
    74318: (e, t, r) => {
      var n = r(11149);
      e.exports = function (e) {
        var t = new e.constructor(e.byteLength);
        return new n(t).set(new n(e)), t;
      };
    },
    64626: (e, t, r) => {
      e = r.nmd(e);
      var n = r(55639),
        a = t && !t.nodeType && t,
        o = a && e && !e.nodeType && e,
        i = o && o.exports === a ? n.Buffer : void 0,
        s = i ? i.allocUnsafe : void 0;
      e.exports = function (e, t) {
        if (t) return e.slice();
        var r = e.length,
          n = s ? s(r) : new e.constructor(r);
        return e.copy(n), n;
      };
    },
    57157: (e, t, r) => {
      var n = r(74318);
      e.exports = function (e, t) {
        var r = t ? n(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      };
    },
    93147: (e) => {
      var t = /\w*$/;
      e.exports = function (e) {
        var r = new e.constructor(e.source, t.exec(e));
        return (r.lastIndex = e.lastIndex), r;
      };
    },
    40419: (e, t, r) => {
      var n = r(62705),
        a = n ? n.prototype : void 0,
        o = a ? a.valueOf : void 0;
      e.exports = function (e) {
        return o ? Object(o.call(e)) : {};
      };
    },
    77133: (e, t, r) => {
      var n = r(74318);
      e.exports = function (e, t) {
        var r = t ? n(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      };
    },
    278: (e) => {
      e.exports = function (e, t) {
        var r = -1,
          n = e.length;
        for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
        return t;
      };
    },
    98363: (e, t, r) => {
      var n = r(34865),
        a = r(89465);
      e.exports = function (e, t, r, o) {
        var i = !r;
        r || (r = {});
        for (var s = -1, l = t.length; ++s < l; ) {
          var c = t[s],
            u = o ? o(r[c], e[c], c, r, e) : void 0;
          void 0 === u && (u = e[c]), i ? a(r, c, u) : n(r, c, u);
        }
        return r;
      };
    },
    18805: (e, t, r) => {
      var n = r(98363),
        a = r(99551);
      e.exports = function (e, t) {
        return n(e, a(e), t);
      };
    },
    1911: (e, t, r) => {
      var n = r(98363),
        a = r(51442);
      e.exports = function (e, t) {
        return n(e, a(e), t);
      };
    },
    14429: (e, t, r) => {
      var n = r(55639)["__core-js_shared__"];
      e.exports = n;
    },
    60696: (e, t, r) => {
      var n = r(68630);
      e.exports = function (e) {
        return n(e) ? void 0 : e;
      };
    },
    38777: (e, t, r) => {
      var n = r(10852),
        a = (function () {
          try {
            var e = n(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        })();
      e.exports = a;
    },
    99021: (e, t, r) => {
      var n = r(85564),
        a = r(45357),
        o = r(30061);
      e.exports = function (e) {
        return o(a(e, void 0, n), e + "");
      };
    },
    31957: (e) => {
      var t =
        "object" == typeof global &&
        global &&
        global.Object === Object &&
        global;
      e.exports = t;
    },
    58234: (e, t, r) => {
      var n = r(68866),
        a = r(99551),
        o = r(3674);
      e.exports = function (e) {
        return n(e, o, a);
      };
    },
    46904: (e, t, r) => {
      var n = r(68866),
        a = r(51442),
        o = r(81704);
      e.exports = function (e) {
        return n(e, o, a);
      };
    },
    45050: (e, t, r) => {
      var n = r(37019);
      e.exports = function (e, t) {
        var r = e.__data__;
        return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
      };
    },
    10852: (e, t, r) => {
      var n = r(28458),
        a = r(47801);
      e.exports = function (e, t) {
        var r = a(e, t);
        return n(r) ? r : void 0;
      };
    },
    85924: (e, t, r) => {
      var n = r(5569)(Object.getPrototypeOf, Object);
      e.exports = n;
    },
    89607: (e, t, r) => {
      var n = r(62705),
        a = Object.prototype,
        o = a.hasOwnProperty,
        i = a.toString,
        s = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        var t = o.call(e, s),
          r = e[s];
        try {
          e[s] = void 0;
          var n = !0;
        } catch (e) {}
        var a = i.call(e);
        return n && (t ? (e[s] = r) : delete e[s]), a;
      };
    },
    99551: (e, t, r) => {
      var n = r(34963),
        a = r(70479),
        o = Object.prototype.propertyIsEnumerable,
        i = Object.getOwnPropertySymbols,
        s = i
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  n(i(e), function (t) {
                    return o.call(e, t);
                  }));
            }
          : a;
      e.exports = s;
    },
    51442: (e, t, r) => {
      var n = r(62488),
        a = r(85924),
        o = r(99551),
        i = r(70479),
        s = Object.getOwnPropertySymbols
          ? function (e) {
              for (var t = []; e; ) n(t, o(e)), (e = a(e));
              return t;
            }
          : i;
      e.exports = s;
    },
    64160: (e, t, r) => {
      var n = r(18552),
        a = r(57071),
        o = r(53818),
        i = r(58525),
        s = r(70577),
        l = r(44239),
        c = r(80346),
        u = "[object Map]",
        d = "[object Promise]",
        p = "[object Set]",
        h = "[object WeakMap]",
        m = "[object DataView]",
        f = c(n),
        g = c(a),
        b = c(o),
        v = c(i),
        y = c(s),
        x = l;
      ((n && x(new n(new ArrayBuffer(1))) != m) ||
        (a && x(new a()) != u) ||
        (o && x(o.resolve()) != d) ||
        (i && x(new i()) != p) ||
        (s && x(new s()) != h)) &&
        (x = function (e) {
          var t = l(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? c(r) : "";
          if (n)
            switch (n) {
              case f:
                return m;
              case g:
                return u;
              case b:
                return d;
              case v:
                return p;
              case y:
                return h;
            }
          return t;
        }),
        (e.exports = x);
    },
    47801: (e) => {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    51789: (e, t, r) => {
      var n = r(94536);
      e.exports = function () {
        (this.__data__ = n ? n(null) : {}), (this.size = 0);
      };
    },
    80401: (e) => {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    57667: (e, t, r) => {
      var n = r(94536),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        if (n) {
          var r = t[e];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return a.call(t, e) ? t[e] : void 0;
      };
    },
    21327: (e, t, r) => {
      var n = r(94536),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        return n ? void 0 !== t[e] : a.call(t, e);
      };
    },
    81866: (e, t, r) => {
      var n = r(94536);
      e.exports = function (e, t) {
        var r = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t),
          this
        );
      };
    },
    43824: (e) => {
      var t = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var r = e.length,
          n = new e.constructor(r);
        return (
          r &&
            "string" == typeof e[0] &&
            t.call(e, "index") &&
            ((n.index = e.index), (n.input = e.input)),
          n
        );
      };
    },
    29148: (e, t, r) => {
      var n = r(74318),
        a = r(57157),
        o = r(93147),
        i = r(40419),
        s = r(77133);
      e.exports = function (e, t, r) {
        var l = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return n(e);
          case "[object Boolean]":
          case "[object Date]":
            return new l(+e);
          case "[object DataView]":
            return a(e, r);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return s(e, r);
          case "[object Map]":
          case "[object Set]":
            return new l();
          case "[object Number]":
          case "[object String]":
            return new l(e);
          case "[object RegExp]":
            return o(e);
          case "[object Symbol]":
            return i(e);
        }
      };
    },
    38517: (e, t, r) => {
      var n = r(3118),
        a = r(85924),
        o = r(25726);
      e.exports = function (e) {
        return "function" != typeof e.constructor || o(e) ? {} : n(a(e));
      };
    },
    37285: (e, t, r) => {
      var n = r(62705),
        a = r(35694),
        o = r(1469),
        i = n ? n.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return o(e) || a(e) || !!(i && e && e[i]);
      };
    },
    65776: (e) => {
      var t = /^(?:0|[1-9]\d*)$/;
      e.exports = function (e, r) {
        var n = typeof e;
        return (
          !!(r = null == r ? 9007199254740991 : r) &&
          ("number" == n || ("symbol" != n && t.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < r
        );
      };
    },
    15403: (e, t, r) => {
      var n = r(1469),
        a = r(33448),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/;
      e.exports = function (e, t) {
        if (n(e)) return !1;
        var r = typeof e;
        return (
          !(
            "number" != r &&
            "symbol" != r &&
            "boolean" != r &&
            null != e &&
            !a(e)
          ) ||
          i.test(e) ||
          !o.test(e) ||
          (null != t && e in Object(t))
        );
      };
    },
    37019: (e) => {
      e.exports = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
    },
    15346: (e, t, r) => {
      var n,
        a = r(14429),
        o = (n = /[^.]+$/.exec((a && a.keys && a.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + n
          : "";
      e.exports = function (e) {
        return !!o && o in e;
      };
    },
    25726: (e) => {
      var t = Object.prototype;
      e.exports = function (e) {
        var r = e && e.constructor;
        return e === (("function" == typeof r && r.prototype) || t);
      };
    },
    27040: (e) => {
      e.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    14125: (e, t, r) => {
      var n = r(18470),
        a = Array.prototype.splice;
      e.exports = function (e) {
        var t = this.__data__,
          r = n(t, e);
        return (
          !(r < 0) &&
          (r == t.length - 1 ? t.pop() : a.call(t, r, 1), --this.size, !0)
        );
      };
    },
    82117: (e, t, r) => {
      var n = r(18470);
      e.exports = function (e) {
        var t = this.__data__,
          r = n(t, e);
        return r < 0 ? void 0 : t[r][1];
      };
    },
    67518: (e, t, r) => {
      var n = r(18470);
      e.exports = function (e) {
        return n(this.__data__, e) > -1;
      };
    },
    54705: (e, t, r) => {
      var n = r(18470);
      e.exports = function (e, t) {
        var r = this.__data__,
          a = n(r, e);
        return a < 0 ? (++this.size, r.push([e, t])) : (r[a][1] = t), this;
      };
    },
    24785: (e, t, r) => {
      var n = r(1989),
        a = r(38407),
        o = r(57071);
      e.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new n(),
            map: new (o || a)(),
            string: new n(),
          });
      };
    },
    11285: (e, t, r) => {
      var n = r(45050);
      e.exports = function (e) {
        var t = n(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    96e3: (e, t, r) => {
      var n = r(45050);
      e.exports = function (e) {
        return n(this, e).get(e);
      };
    },
    49916: (e, t, r) => {
      var n = r(45050);
      e.exports = function (e) {
        return n(this, e).has(e);
      };
    },
    95265: (e, t, r) => {
      var n = r(45050);
      e.exports = function (e, t) {
        var r = n(this, e),
          a = r.size;
        return r.set(e, t), (this.size += r.size == a ? 0 : 1), this;
      };
    },
    24523: (e, t, r) => {
      var n = r(88306);
      e.exports = function (e) {
        var t = n(e, function (e) {
            return 500 === r.size && r.clear(), e;
          }),
          r = t.cache;
        return t;
      };
    },
    94536: (e, t, r) => {
      var n = r(10852)(Object, "create");
      e.exports = n;
    },
    86916: (e, t, r) => {
      var n = r(5569)(Object.keys, Object);
      e.exports = n;
    },
    33498: (e) => {
      e.exports = function (e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
      };
    },
    31167: (e, t, r) => {
      e = r.nmd(e);
      var n = r(31957),
        a = t && !t.nodeType && t,
        o = a && e && !e.nodeType && e,
        i = o && o.exports === a && n.process,
        s = (function () {
          try {
            var e = o && o.require && o.require("util").types;
            return e || (i && i.binding && i.binding("util"));
          } catch (e) {}
        })();
      e.exports = s;
    },
    2333: (e) => {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    5569: (e) => {
      e.exports = function (e, t) {
        return function (r) {
          return e(t(r));
        };
      };
    },
    45357: (e, t, r) => {
      var n = r(96874),
        a = Math.max;
      e.exports = function (e, t, r) {
        return (
          (t = a(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var o = arguments, i = -1, s = a(o.length - t, 0), l = Array(s);
              ++i < s;

            )
              l[i] = o[t + i];
            i = -1;
            for (var c = Array(t + 1); ++i < t; ) c[i] = o[i];
            return (c[t] = r(l)), n(e, this, c);
          }
        );
      };
    },
    40292: (e, t, r) => {
      var n = r(97786),
        a = r(14259);
      e.exports = function (e, t) {
        return t.length < 2 ? e : n(e, a(t, 0, -1));
      };
    },
    55639: (e, t, r) => {
      var n = r(31957),
        a = "object" == typeof self && self && self.Object === Object && self,
        o = n || a || Function("return this")();
      e.exports = o;
    },
    30061: (e, t, r) => {
      var n = r(56560),
        a = r(21275)(n);
      e.exports = a;
    },
    21275: (e) => {
      var t = Date.now;
      e.exports = function (e) {
        var r = 0,
          n = 0;
        return function () {
          var a = t(),
            o = 16 - (a - n);
          if (((n = a), o > 0)) {
            if (++r >= 800) return arguments[0];
          } else r = 0;
          return e.apply(void 0, arguments);
        };
      };
    },
    37465: (e, t, r) => {
      var n = r(38407);
      e.exports = function () {
        (this.__data__ = new n()), (this.size = 0);
      };
    },
    63779: (e) => {
      e.exports = function (e) {
        var t = this.__data__,
          r = t.delete(e);
        return (this.size = t.size), r;
      };
    },
    67599: (e) => {
      e.exports = function (e) {
        return this.__data__.get(e);
      };
    },
    44758: (e) => {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    34309: (e, t, r) => {
      var n = r(38407),
        a = r(57071),
        o = r(83369);
      e.exports = function (e, t) {
        var r = this.__data__;
        if (r instanceof n) {
          var i = r.__data__;
          if (!a || i.length < 199)
            return i.push([e, t]), (this.size = ++r.size), this;
          r = this.__data__ = new o(i);
        }
        return r.set(e, t), (this.size = r.size), this;
      };
    },
    55514: (e, t, r) => {
      var n = r(24523),
        a =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        i = n(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(a, function (e, r, n, a) {
              t.push(n ? a.replace(o, "$1") : r || e);
            }),
            t
          );
        });
      e.exports = i;
    },
    40327: (e, t, r) => {
      var n = r(33448);
      e.exports = function (e) {
        if ("string" == typeof e || n(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Infinity ? "-0" : t;
      };
    },
    80346: (e) => {
      var t = Function.prototype.toString;
      e.exports = function (e) {
        if (null != e) {
          try {
            return t.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      };
    },
    67990: (e) => {
      var t = /\s/;
      e.exports = function (e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)); );
        return r;
      };
    },
    75703: (e) => {
      e.exports = function (e) {
        return function () {
          return e;
        };
      };
    },
    23279: (e, t, r) => {
      var n = r(13218),
        a = r(7771),
        o = r(14841),
        i = Math.max,
        s = Math.min;
      e.exports = function (e, t, r) {
        var l,
          c,
          u,
          d,
          p,
          h,
          m = 0,
          f = !1,
          g = !1,
          b = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function v(t) {
          var r = l,
            n = c;
          return (l = c = void 0), (m = t), (d = e.apply(n, r));
        }
        function y(e) {
          var r = e - h;
          return void 0 === h || r >= t || r < 0 || (g && e - m >= u);
        }
        function x() {
          var e = a();
          if (y(e)) return k(e);
          p = setTimeout(
            x,
            (function (e) {
              var r = t - (e - h);
              return g ? s(r, u - (e - m)) : r;
            })(e),
          );
        }
        function k(e) {
          return (p = void 0), b && l ? v(e) : ((l = c = void 0), d);
        }
        function S() {
          var e = a(),
            r = y(e);
          if (((l = arguments), (c = this), (h = e), r)) {
            if (void 0 === p)
              return (function (e) {
                return (m = e), (p = setTimeout(x, t)), f ? v(e) : d;
              })(h);
            if (g) return clearTimeout(p), (p = setTimeout(x, t)), v(h);
          }
          return void 0 === p && (p = setTimeout(x, t)), d;
        }
        return (
          (t = o(t) || 0),
          n(r) &&
            ((f = !!r.leading),
            (u = (g = "maxWait" in r) ? i(o(r.maxWait) || 0, t) : u),
            (b = "trailing" in r ? !!r.trailing : b)),
          (S.cancel = function () {
            void 0 !== p && clearTimeout(p), (m = 0), (l = h = c = p = void 0);
          }),
          (S.flush = function () {
            return void 0 === p ? d : k(a());
          }),
          S
        );
      };
    },
    77813: (e) => {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    85564: (e, t, r) => {
      var n = r(21078);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? n(e, 1) : [];
      };
    },
    6557: (e) => {
      e.exports = function (e) {
        return e;
      };
    },
    35694: (e, t, r) => {
      var n = r(9454),
        a = r(37005),
        o = Object.prototype,
        i = o.hasOwnProperty,
        s = o.propertyIsEnumerable,
        l = n(
          (function () {
            return arguments;
          })(),
        )
          ? n
          : function (e) {
              return a(e) && i.call(e, "callee") && !s.call(e, "callee");
            };
      e.exports = l;
    },
    1469: (e) => {
      var t = Array.isArray;
      e.exports = t;
    },
    98612: (e, t, r) => {
      var n = r(23560),
        a = r(41780);
      e.exports = function (e) {
        return null != e && a(e.length) && !n(e);
      };
    },
    44144: (e, t, r) => {
      e = r.nmd(e);
      var n = r(55639),
        a = r(95062),
        o = t && !t.nodeType && t,
        i = o && e && !e.nodeType && e,
        s = i && i.exports === o ? n.Buffer : void 0,
        l = (s ? s.isBuffer : void 0) || a;
      e.exports = l;
    },
    23560: (e, t, r) => {
      var n = r(44239),
        a = r(13218);
      e.exports = function (e) {
        if (!a(e)) return !1;
        var t = n(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    41780: (e) => {
      e.exports = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    56688: (e, t, r) => {
      var n = r(25588),
        a = r(51717),
        o = r(31167),
        i = o && o.isMap,
        s = i ? a(i) : n;
      e.exports = s;
    },
    13218: (e) => {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    37005: (e) => {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    68630: (e, t, r) => {
      var n = r(44239),
        a = r(85924),
        o = r(37005),
        i = Function.prototype,
        s = Object.prototype,
        l = i.toString,
        c = s.hasOwnProperty,
        u = l.call(Object);
      e.exports = function (e) {
        if (!o(e) || "[object Object]" != n(e)) return !1;
        var t = a(e);
        if (null === t) return !0;
        var r = c.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r instanceof r && l.call(r) == u;
      };
    },
    72928: (e, t, r) => {
      var n = r(29221),
        a = r(51717),
        o = r(31167),
        i = o && o.isSet,
        s = i ? a(i) : n;
      e.exports = s;
    },
    33448: (e, t, r) => {
      var n = r(44239),
        a = r(37005);
      e.exports = function (e) {
        return "symbol" == typeof e || (a(e) && "[object Symbol]" == n(e));
      };
    },
    36719: (e, t, r) => {
      var n = r(38749),
        a = r(51717),
        o = r(31167),
        i = o && o.isTypedArray,
        s = i ? a(i) : n;
      e.exports = s;
    },
    3674: (e, t, r) => {
      var n = r(14636),
        a = r(280),
        o = r(98612);
      e.exports = function (e) {
        return o(e) ? n(e) : a(e);
      };
    },
    81704: (e, t, r) => {
      var n = r(14636),
        a = r(10313),
        o = r(98612);
      e.exports = function (e) {
        return o(e) ? n(e, !0) : a(e);
      };
    },
    10928: (e) => {
      e.exports = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
    },
    88306: (e, t, r) => {
      var n = r(83369);
      function a(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var r = function () {
          var n = arguments,
            a = t ? t.apply(this, n) : n[0],
            o = r.cache;
          if (o.has(a)) return o.get(a);
          var i = e.apply(this, n);
          return (r.cache = o.set(a, i) || o), i;
        };
        return (r.cache = new (a.Cache || n)()), r;
      }
      (a.Cache = n), (e.exports = a);
    },
    7771: (e, t, r) => {
      var n = r(55639);
      e.exports = function () {
        return n.Date.now();
      };
    },
    57557: (e, t, r) => {
      var n = r(29932),
        a = r(85990),
        o = r(57406),
        i = r(71811),
        s = r(98363),
        l = r(60696),
        c = r(99021),
        u = r(46904),
        d = c(function (e, t) {
          var r = {};
          if (null == e) return r;
          var c = !1;
          (t = n(t, function (t) {
            return (t = i(t, e)), c || (c = t.length > 1), t;
          })),
            s(e, u(e), r),
            c && (r = a(r, 7, l));
          for (var d = t.length; d--; ) o(r, t[d]);
          return r;
        });
      e.exports = d;
    },
    70479: (e) => {
      e.exports = function () {
        return [];
      };
    },
    95062: (e) => {
      e.exports = function () {
        return !1;
      };
    },
    14841: (e, t, r) => {
      var n = r(27561),
        a = r(13218),
        o = r(33448),
        i = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        c = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (o(e)) return NaN;
        if (a(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = a(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = s.test(e);
        return r || l.test(e) ? c(e.slice(2), r ? 2 : 8) : i.test(e) ? NaN : +e;
      };
    },
    79833: (e, t, r) => {
      var n = r(80531);
      e.exports = function (e) {
        return null == e ? "" : n(e);
      };
    },
    40334: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => l });
      var n = r(92636),
        a = r(54856),
        o = r(16704),
        i = r(50965),
        s = r(90435);
      const l = {
        computed: {},
        watch: {
          touchBarItems(e) {
            this.updateTouchBarItems(e);
          },
        },
        methods: {
          updateTouchBarItems(e) {
            const t = (e) => {
              const t = e.click;
              let r = this._touchBarRoutes[t];
              return (
                r ||
                  ((r = {
                    method: t,
                    endpoint: (0, a.A6)(window.id, (0, o.rs)(t)),
                  }),
                  (this._touchBarRoutes[t] = r)),
                r.unroute || (r.unroute = s.ZP.route(r.endpoint, this[t])),
                Object.assign({}, e, { click: r.endpoint })
              );
            };
            (e = (e || this.touchBarItems || []).map(
              (e) => (
                "button" !== e.type ||
                "string" != typeof e.click ||
                n.sq.includes(e.click) ||
                e.click.startsWith("command:")
                  ? "buttons" === e.type &&
                    (e = {
                      ...e,
                      buttons: e.buttons.map((e) =>
                        "string" != typeof e.click ||
                        n.sq.includes(e.click) ||
                        e.click.startsWith("command:")
                          ? e
                          : t(e),
                      ),
                    })
                  : (e = t(e)),
                e
              ),
            )),
              (0, i.JS)("window")?.().updateTouchBarItems(e);
          },
        },
        beforeCreate() {
          this._touchBarRoutes = {};
        },
        mounted() {
          this.updateTouchBarItems();
        },
        beforeDestroy() {
          Object.values(this._touchBarRoutes).forEach(
            ({ unroute: e }) => e && e(),
          ),
            (this._touchBarRoutes = {});
        },
      };
    },
    17089: (e, t, r) => {
      "use strict";
      r.r(t);
      var n = r(51505),
        a = r(2954),
        o = r(63477),
        i = r.n(o),
        s = r(92636),
        l = r(40334),
        c = r(50965),
        u = r(54856),
        d = r(90435);
      const p = [
          { value: "en-US", text: "English" },
          { value: "zh-CN", text: "简体中文" },
          { value: "de-DE", text: "Deutsch" },
          { value: "fr-FR", text: "Français" },
          { value: "zh-TW", text: "繁體中文" },
          { value: "ja-JP", text: "日本語" },
          { value: "es", text: "Español" },
          { value: "id", text: "Bahasa Indonesia" },
          { value: "it-IT", text: "Italiano" },
          { value: "ko", text: "한국어" },
          { value: "pt-PT", text: "Português" },
          { value: "ru-RU", text: "Русский" },
          { value: "th", text: "ภาษาไทย" },
        ],
        h = [
          { value: "50%", text: "50%" },
          { value: "80%", text: "80%" },
          { value: "100%", text: "100%" },
          { value: "120%", text: "120%" },
          { value: "150%", text: "150%" },
          { value: "200%", text: "200%" },
          { value: "300%", text: "300%" },
        ];
      var m = r(16704);
      const f = [
        { value: "default", text: (0, m.$T)("Default") },
        {
          value: "last",
          text: (0, m.$T)("The last skeleton & color theme used"),
        },
      ];
      var g = r(81389);
      const b = [
          {
            value: g.Mn.AUTO,
            text: (0, m.$T)("Download and install updates automatically"),
          },
          {
            value: g.Mn.MANUAL,
            text: (0, m.$T)(
              "Download updates automatically but remind me to install",
            ),
          },
          { value: g.Mn.NOT, text: (0, m.$T)("Disable automatic updates") },
        ],
        v = [
          { value: "auto", text: (0, m.$T)("System Default") },
          { value: "default", text: (0, m.$T)("Light") },
          { value: "dark", text: (0, m.$T)("Dark") },
        ];
      const y = (0, a.aZ)({
        name: "FieldSelector",
        props: {
          title: { type: String, default: "" },
          label: String,
          items: { type: Array, default: () => [] },
          value: String,
          listStyle: { type: String, default: "" },
        },
        setup: (e, t) => ({
          selectedItem: (0, a.Fl)(
            () => e.items.find(({ value: t }) => t === e.value) || {},
          ),
          handleSelectItem: (e) => {
            t.emit("select", e);
          },
        }),
      });
      var x = r(51900);
      const k = (0, x.Z)(
          y,
          function () {
            var e = this,
              t = e._self._c;
            e._self._setupProxy;
            return t("div", { staticClass: "uk-margin" }, [
              t("label", { staticClass: "uk-form-label" }, [
                e._v(e._s(e.label)),
              ]),
              e._v(" "),
              t("div", { staticClass: "uk-form-controls" }, [
                t(
                  "button",
                  {
                    staticClass:
                      "uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left",
                    staticStyle: { "max-width": "315px" },
                    attrs: { title: e.title },
                  },
                  [e._v("\n      " + e._s(e.selectedItem.text) + "\n    ")],
                ),
                e._v(" "),
                t(
                  "div",
                  {
                    attrs: {
                      "uk-contextual-popover": "",
                      "data-sel-close": "[uk-menu] > li",
                    },
                  },
                  [
                    e._t("list-header"),
                    e._v(" "),
                    0 !== e.items.length
                      ? t(
                          "ul",
                          {
                            staticClass: "uk-height-1-1 uk-overflow-auto",
                            class: e.listStyle,
                            attrs: { "uk-menu": "" },
                          },
                          e._l(e.items, function (r) {
                            return t(
                              "li",
                              { key: r.value, attrs: { value: r.value } },
                              [
                                t(
                                  "button",
                                  {
                                    class: {
                                      "uk-checked": e.value === r.value,
                                    },
                                    on: {
                                      click: function (t) {
                                        return e.handleSelectItem(r.value);
                                      },
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n            " +
                                        e._s(r.text) +
                                        "\n          ",
                                    ),
                                  ],
                                ),
                              ],
                            );
                          }),
                          0,
                        )
                      : e._e(),
                  ],
                  2,
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        ).exports,
        S = (0, a.aZ)({
          name: "Appearance",
          components: { FieldSelector: k },
          setup(e, t) {
            const r = (e, ...t) => (0, c.JE)().T(e, ...t),
              n = (0, a.Fl)(() => (0, c.S)().systemAppearance),
              o = (0, a.Fl)(() => {
                const e = v.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    text: r("$$", e.text),
                  }),
                );
                return n.value ? e : e.slice(1);
              }),
              i = (0, a.Fl)(() => (0, c.S)().preferredAppearance),
              s = (0, a.Fl)(() => (0, c.S)().appearance),
              l = (0, a.iH)(""),
              u = (0, a.Fl)(() => (n.value ? i.value || "auto" : s.value));
            (0, a.bv)(() => {
              l.value = u.value;
            });
            return {
              appearanceOptions: o,
              selectedAppearanceValue: l,
              handleAppearanceChange: (e) => {
                (l.value = e),
                  "auto" === e
                    ? t.emit("select", { preferredAppearance: "" })
                    : t.emit("select", { preferredAppearance: e });
              },
            };
          },
        });
      const _ = (0, x.Z)(
        S,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("field-selector", {
            attrs: {
              label: e.$T("Appearance:"),
              items: e.appearanceOptions,
              value: e.selectedAppearanceValue,
            },
            on: { select: e.handleAppearanceChange },
          });
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      const I = (0, a.aZ)({
        name: "Language",
        components: { FieldSelector: k },
        setup(e, t) {
          const r = (0, a.iH)(""),
            n = (0, a.Fl)(() => (0, c.S)().language);
          (0, a.bv)(() => {
            r.value = n.value;
          });
          return {
            languageOptions: p,
            selectedLanguageValue: r,
            handleLanguageChange: (e) => {
              (r.value = e), t.emit("select", { preferredLanguage: e });
            },
          };
        },
      });
      const T = (0, x.Z)(
        I,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("field-selector", {
            attrs: {
              label: e.$T("Display Language:"),
              items: e.languageOptions,
              value: e.selectedLanguageValue,
            },
            on: { select: e.handleLanguageChange },
          });
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      const w = (0, a.aZ)({
        name: "ZoomLevel",
        components: { FieldSelector: k },
        setup(e, t) {
          const r = (e, ...t) => (0, c.JE)().T(e, ...t),
            n = (0, a.iH)(""),
            o = (0, a.Fl)(() => (0, c.S)().initialZoomLevel),
            i = (0, a.Fl)(() =>
              h.map((e) =>
                Object.assign(Object.assign({}, e), { text: r("$$", e.text) }),
              ),
            );
          (0, a.bv)(() => {
            n.value = o.value;
          });
          return {
            computedMapZoomOptions: i,
            selectedMapZoomValue: n,
            handleZoomLevelChange: (e) => {
              (n.value = e), t.emit("select", { preferredInitialZoomLevel: e });
            },
          };
        },
      });
      const Z = (0, x.Z)(
        w,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("field-selector", {
            attrs: {
              label: e.$T("Default Zoom Level:"),
              items: e.computedMapZoomOptions,
              value: e.selectedMapZoomValue,
            },
            on: { select: e.handleZoomLevelChange },
          });
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      var W = r(18621);
      const O = (0, a.aZ)({
        name: "DefaultTheme",
        components: { FieldSelector: k },
        setup(e, t) {
          const r = (e, ...t) => (0, c.JE)().T(e, ...t),
            n = (0, a.iH)(""),
            o = (0, a.Fl)(() => (0, c.S)().defaultTheme),
            i = (0, a.Fl)(() =>
              f.map((e) =>
                Object.assign(Object.assign({}, e), { text: r("$$", e.text) }),
              ),
            );
          (0, a.bv)(() => {
            n.value = o.value;
          }),
            (0, a.YP)(
              () => n.value,
              (e) => {
                "last" === e &&
                  (0, W.L9)({ eventAction: "changeDefaultTheme" });
              },
            );
          return {
            computedDefaultThemeOptions: i,
            selectedDefaultTheme: n,
            handleDefaultThemeChange: (e) => {
              (n.value = e), t.emit("select", { defaultTheme: e });
            },
          };
        },
      });
      const A = (0, x.Z)(
        O,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("field-selector", {
            attrs: {
              label: e.$T("Default Theme:"),
              items: e.computedDefaultThemeOptions,
              value: e.selectedDefaultTheme,
            },
            on: { select: e.handleDefaultThemeChange },
          });
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      var C = r(14315),
        E = function (e, t, r, n) {
          return new (r || (r = Promise))(function (a, o) {
            function i(e) {
              try {
                l(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(i, s);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      const M = (0, a.aZ)({
        __name: "cjk-font",
        emits: ["select"],
        setup(e, { emit: t }) {
          const r = (e, ...t) => (0, c.JE)().T(e, ...t),
            { getLoadedFonts: n } = (0, C.r)(),
            o = (0, a.iH)(""),
            i = (0, a.iH)([]),
            s = (0, a.Fl)(() => (0, c.S)().cjkFontFamily);
          (0, a.bv)(() =>
            E(this, void 0, void 0, function* () {
              const { systemFonts: e } = yield n(),
                t = { value: "", text: r("Default") };
              (i.value = [].concat([
                t,
                ...Object.values(e).filter((e) => e.isCJKFont),
              ])),
                (o.value = s.value);
            }),
          );
          return {
            __sfc: !0,
            emit: t,
            $T: r,
            getLoadedFonts: n,
            selectedCJKFontFamilyValue: o,
            cjkFontFamilyOptions: i,
            currentCJKFontFamilyValue: s,
            handleCJKFontFamilyChange: (e) => {
              (o.value = e), t("select", { preferredCJKFontFamily: e });
            },
            FieldSelector: k,
          };
        },
      });
      const j = (0, x.Z)(
        M,
        function () {
          var e = this,
            t = e._self._c,
            r = e._self._setupProxy;
          return t(
            r.FieldSelector,
            {
              attrs: {
                label: r.$T("Default CJK Font:"),
                title: r.$T(
                  "Global setting for all opened Xmind files. After setting Chinese, Japanese and Korean fonts, mixed layout with western typeface displays better.",
                ),
                items: r.cjkFontFamilyOptions,
                value: r.selectedCJKFontFamilyValue,
                "list-style": "uk-height-max-medium",
              },
              on: { select: r.handleCJKFontFamilyChange },
            },
            [
              0 === r.cjkFontFamilyOptions.length
                ? t(
                    "div",
                    {
                      staticClass:
                        "uk-background-default uk-flex uk-flex-column uk-flex-center uk-flex-middle",
                      attrs: { slot: "list-header" },
                      slot: "list-header",
                    },
                    [
                      t("div", {
                        staticClass:
                          "uk-display-block uk-text-muted uk-padding",
                        attrs: { "uk-spinner": "ratio: 0.6;" },
                      }),
                    ],
                  )
                : e._e(),
            ],
          );
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      const N = (0, a.aZ)({
        name: "AutoUpdater",
        components: { FieldSelector: k },
        setup(e, t) {
          const r = (e, ...t) => (0, c.JE)().T(e, ...t),
            n = (0, a.iH)(""),
            o = (0, a.Fl)(() => (0, c.S)().getAutoUpdateType),
            i = (0, a.Fl)(() =>
              b.map((e) =>
                Object.assign(Object.assign({}, e), { text: r("$$", e.text) }),
              ),
            );
          (0, a.bv)(() => {
            n.value = o.value;
          });
          return {
            computedAtuoUpdaterOptions: i,
            selectedAutoUpdateValue: n,
            handleAutoUpdateChange: (e) => {
              (n.value = e),
                t.emit("select", { autoUpdateType: e }),
                "not" === e &&
                  (0, c.Fw)().setAction({ type: g._Q.STOP_DOWNLOAD });
            },
          };
        },
      });
      const F = (0, x.Z)(
        N,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("field-selector", {
            attrs: {
              label: e.$T("Automatic Updates:"),
              items: e.computedAtuoUpdaterOptions,
              value: e.selectedAutoUpdateValue,
            },
            on: { select: e.handleAutoUpdateChange },
          });
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      const P = (0, a.aZ)({
        name: "FieldCheckbox",
        props: { name: String, label: String, value: Boolean, desc: String },
        setup() {},
      });
      const L = (0, x.Z)(
          P,
          function () {
            var e = this,
              t = e._self._c;
            e._self._setupProxy;
            return t(
              "div",
              { staticClass: "uk-margin uk-margin-small-bottom" },
              [
                t("label", { staticClass: "uk-form-label" }, [
                  e._v(e._s(e.label)),
                ]),
                e._v(" "),
                t(
                  "div",
                  { staticClass: "uk-form-controls uk-margin-xsmall-top" },
                  [
                    t(
                      "label",
                      { staticClass: "uk-flex uk-flex-row uk-flex-top" },
                      [
                        t("input", {
                          staticClass: "uk-checkbox uk-flex-no-shrink",
                          staticStyle: { "margin-top": "3px" },
                          attrs: {
                            type: "checkbox",
                            disabled: null === e.value,
                            name: "name",
                          },
                          domProps: { checked: e.value },
                          on: {
                            click: function (t) {
                              return e.$emit("check", t);
                            },
                          },
                        }),
                        e._v(" "),
                        t("div", { staticClass: "uk-margin-xsmall-left" }, [
                          e._v(e._s(e.desc)),
                        ]),
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
          null,
          null,
        ).exports,
        B = (0, a.aZ)({
          name: "QuickEntry",
          components: { FieldCheckbox: L },
          setup(e, t) {
            const r = (0, a.iH)(null),
              n = (0, a.Fl)(() => (0, c.S)().autoLaunchQuickEntry);
            (0, a.bv)(() => {
              r.value = n.value;
            });
            return {
              quickEntryAutoLaunchValue: r,
              handleQuickEntryChange: (e) => {
                s.nd
                  ? (e.preventDefault(), d.ZP.fetch(u.QN))
                  : t.emit("check", { autoLaunchQuickEntry: e.target.checked });
              },
            };
          },
        });
      const R = (0, x.Z)(
        B,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("field-checkbox", {
            attrs: {
              name: "quickEntryAutoLaunch",
              label: e.$T("Quick Entry:"),
              value: e.quickEntryAutoLaunchValue,
              desc: e.$T("Start at system login"),
            },
            on: { check: e.handleQuickEntryChange },
          });
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      const $ = (0, a.aZ)({
        name: "SpellCheck",
        components: { FieldCheckbox: L },
        setup(e, t) {
          const r = (0, a.iH)(null),
            n = (0, a.Fl)(() => (0, c.S)().spellCheck);
          (0, a.bv)(() => {
            r.value = n.value;
          });
          return {
            spellCheckValue: r,
            handleSpellCheckChange: (e) => {
              t.emit("check", { spellCheck: e.target.checked });
            },
          };
        },
      });
      const D = (0, x.Z)(
        $,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("field-checkbox", {
            attrs: {
              name: "spellCheck",
              label: e.$T("Spell Check:"),
              value: e.spellCheckValue,
              desc: e.$T("Check spelling while typing"),
            },
            on: { check: e.handleSpellCheckChange },
          });
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      const U = (0, a.aZ)({
        name: "ShareAnalytics",
        components: { FieldCheckbox: L },
        setup(e, t) {
          const r = (0, a.iH)(null),
            n = (0, a.Fl)(() => !s.nd && (0, c.S)().sendUsageData);
          (0, a.bv)(() => {
            r.value = n.value;
          });
          return {
            sendUsageDataValue: r,
            handleSendUsageDataChange: (e) => {
              s.nd
                ? (e.preventDefault(), d.ZP.fetch(u.QN))
                : t.emit("check", { sendUsageData: e.target.checked });
            },
          };
        },
      });
      const G = (0, x.Z)(
        U,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("field-checkbox", {
            attrs: {
              name: "spellCheck",
              label: e.$T("Share Analytics:"),
              value: e.sendUsageDataValue,
              desc: e.$T(
                "Automatically send usage statistics (NO PRIVATE DATA)",
              ),
            },
            on: { check: e.handleSendUsageDataChange },
          });
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      const H = (0, a.aZ)({
        name: "ShareService",
        setup(e, t) {
          const r = (0, a.FN)().proxy,
            n = (e, ...t) => (0, c.JE)().T(e, ...t),
            o = (0, a.Fl)(() => (0, c.qr)().serviceRegion),
            i = (0, a.Fl)(() => (0, c.qr)().blockedShareItems),
            l = (0, a.Fl)(() =>
              [
                {
                  id: "xmind share",
                  title: n("Xmind Share"),
                  description: n(
                    "Upload the map to Xmind.app and generate a link.",
                  ),
                  iconURL: r.$toResourceURL(
                    "static/images/share-public-link.svg",
                  ),
                },
                {
                  id: "blog",
                  title: n("Blog"),
                  description: n("Generate an embed code for your blog."),
                  iconURL: r.$toResourceURL("static/images/share-blog.svg"),
                },
                {
                  id: "email",
                  title: n("Email"),
                  description: n("Share the map via Email."),
                  iconURL: r.$toResourceURL("static/images/share-email.svg"),
                  canHidden: "cn" !== o.value,
                  hidden: !1,
                },
                {
                  id: "evernote",
                  title: "Evernote",
                  description: n("Save the map to Evernote notebooks."),
                  iconURL: r.$toResourceURL("static/images/share-evernote.svg"),
                  canHidden: "cn" !== o.value,
                  hidden: !1,
                },
                {
                  id: "facebook",
                  title: "Facebook",
                  description: n(
                    "Generate a link and share via your Facebook.",
                  ),
                  iconURL: r.$toResourceURL("static/images/share-facebook.svg"),
                  canHidden: !0,
                  hidden: !1,
                },
                {
                  id: "twitter",
                  title: "X",
                  description: n("Generate a link and share via your X."),
                  iconURL: r.$toResourceURL("static/images/share-twitter.svg"),
                  canHidden: !0,
                  hidden: !1,
                },
                {
                  id: "pinterest",
                  title: "Pinterest",
                  description: n(
                    "Generate a link and share via your Pinterest.",
                  ),
                  iconURL: r.$toResourceURL(
                    "static/images/share-pinterest.svg",
                  ),
                  canHidden: !0,
                  hidden: !1,
                },
              ].filter((e) => !i.value.includes(e.id)),
            ),
            p = (0, a.Fl)(() =>
              (0, c.Ak)().oauthToken ? (0, c.Ak)().username : "",
            ),
            h = (0, a.Fl)(() => !!(0, c.vF)().accessToken),
            m = (0, a.iH)([]),
            f = (0, a.Fl)(() => (0, c.S)().preferredHiddenShareItems);
          (0, a.bv)(() => {
            if ("cn" !== o.value) for (const e of f.value) m.value.push(e);
          });
          return {
            shareServiceItems: l,
            hiddenShareItems: m,
            evernoteAuthName: p,
            biggerplateAuthorized: h,
            signInEvernote: () => {
              d.ZP.fetch(u.Fx, { name: "evernote" });
            },
            signOutEvernote: () => {
              (0, c.Ak)().clearEvernote();
            },
            signInBiggerplate: () => {
              d.ZP.fetch(u.Fx, { name: "biggerplate" });
            },
            signOutBiggerplate: () => {
              (0, c.vF)().clearBiggerplate();
            },
            toggleHiddenShare: (e) => {
              m.value.includes(e)
                ? (m.value = m.value.filter((t) => t !== e))
                : m.value.push(e),
                "cn" !== o.value &&
                  t.emit("toggle", { preferredHiddenShareItems: m.value });
            },
            withMasDemoCheck: (e) => {
              s.nd ? d.ZP.fetch(u.QN) : e();
            },
          };
        },
      });
      r(24322);
      const V = (0, x.Z)(
          H,
          function () {
            var e = this,
              t = e._self._c;
            e._self._setupProxy;
            return t("div", [
              t("h1", { staticClass: "uk-legend uk-margin-top" }, [
                e._v("\n    " + e._s(e.$T("Share")) + "\n  "),
              ]),
              e._v(" "),
              t(
                "fieldset",
                { staticClass: "uk-margin-small-top uk-fieldset" },
                [
                  t(
                    "div",
                    { staticClass: "uk-panel uk-flex" },
                    [
                      e._l(e.shareServiceItems, function (r, n) {
                        return [
                          t("a", {
                            key: r.id,
                            staticClass: "uk-background-contain",
                            class: [0 === n ? "" : "uk-margin-left"],
                            staticStyle: { width: "24px", height: "24px" },
                            style: {
                              opacity: e.hiddenShareItems.includes(r.id)
                                ? 0.2
                                : 1,
                            },
                            attrs: {
                              draggable: "false",
                              "data-src": r.iconURL,
                              "uk-img": "",
                            },
                          }),
                          e._v(" "),
                          t(
                            "div",
                            {
                              key: r.id + "_drop",
                              staticClass:
                                "uk-card uk-card-default uk-card-body share-service-card",
                              attrs: {
                                "uk-drop":
                                  "pos: top-left; animation: uk-animation-slide-bottom-small; offset: 10;",
                              },
                            },
                            [
                              t("h4", [e._v(e._s(r.title))]),
                              e._v(" "),
                              t("p", [e._v(e._s(r.description))]),
                              e._v(" "),
                              "evernote" === r.id && e.evernoteAuthName
                                ? [
                                    t("p", [e._v(e._s(e.evernoteAuthName))]),
                                    e._v(" "),
                                    t("p", [
                                      t(
                                        "button",
                                        {
                                          staticClass:
                                            "uk-button uk-button-link",
                                          attrs: { type: "button" },
                                          on: { click: e.signOutEvernote },
                                        },
                                        [
                                          e._v(
                                            "\n                " +
                                              e._s(e.$T("Sign Out")) +
                                              "\n              ",
                                          ),
                                        ],
                                      ),
                                    ]),
                                  ]
                                : "evernote" === r.id
                                  ? [
                                      t("p", [
                                        t(
                                          "button",
                                          {
                                            staticClass:
                                              "uk-button uk-button-link",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function (t) {
                                                return e.withMasDemoCheck(
                                                  e.signInEvernote,
                                                );
                                              },
                                            },
                                          },
                                          [
                                            e._v(
                                              "\n                " +
                                                e._s(
                                                  e.$T("Connect to Evernote"),
                                                ) +
                                                "\n              ",
                                            ),
                                          ],
                                        ),
                                      ]),
                                    ]
                                  : e._e(),
                              e._v(" "),
                              "biggerplate" === r.id && e.biggerplateAuthorized
                                ? [
                                    t("p", [
                                      t(
                                        "button",
                                        {
                                          staticClass:
                                            "uk-button uk-button-link",
                                          attrs: { type: "button" },
                                          on: { click: e.signOutBiggerplate },
                                        },
                                        [
                                          e._v(
                                            "\n                " +
                                              e._s(e.$T("Sign Out")) +
                                              "\n              ",
                                          ),
                                        ],
                                      ),
                                    ]),
                                  ]
                                : "biggerplate" === r.id
                                  ? [
                                      t("p", [
                                        t(
                                          "button",
                                          {
                                            staticClass:
                                              "uk-button uk-button-link",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function (t) {
                                                return e.withMasDemoCheck(
                                                  e.signInBiggerplate,
                                                );
                                              },
                                            },
                                          },
                                          [
                                            e._v(
                                              "\n                " +
                                                e._s(
                                                  e.$T(
                                                    "Connect to Biggerplate",
                                                  ),
                                                ) +
                                                "\n              ",
                                            ),
                                          ],
                                        ),
                                      ]),
                                    ]
                                  : e._e(),
                              e._v(" "),
                              r.canHidden
                                ? [
                                    t("p", [
                                      t(
                                        "button",
                                        {
                                          staticClass:
                                            "uk-button uk-button-link",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function (t) {
                                              return e.toggleHiddenShare(r.id);
                                            },
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n                " +
                                              e._s(
                                                e.hiddenShareItems.includes(
                                                  r.id,
                                                )
                                                  ? e.$T(
                                                      "Show in The Share Menu",
                                                    )
                                                  : e.$T(
                                                      "Hide in The Share Menu",
                                                    ),
                                              ) +
                                              "\n              ",
                                          ),
                                        ],
                                      ),
                                    ]),
                                  ]
                                : e._e(),
                            ],
                            2,
                          ),
                        ];
                      }),
                    ],
                    2,
                  ),
                ],
              ),
            ]);
          },
          [],
          !1,
          null,
          "3e51da34",
          null,
        ).exports,
        K = (0, a.aZ)({
          name: "Preferences",
          components: {
            Appearance: _,
            Language: T,
            ZoomLevel: Z,
            DefaultTheme: A,
            CjkFont: j,
            AutoUpdater: F,
            QuickEntry: R,
            SpellCheck: D,
            ShareAnalytics: G,
            ShareService: V,
            ShortcutsPanel: () => Promise.resolve().then(r.bind(r, 54796)),
          },
          mixins: [l.Z],
          setup() {
            const e = (e, ...t) => (0, c.JE)().T(e, ...t),
              t = i().parse(window.location.search.slice(1)),
              r = (0, a.iH)(null),
              n = (0, a.iH)("general"),
              o = (0, a.Fl)(() => ["general", "shortcuts"].indexOf(n.value)),
              l = (0, a.Fl)(() => [
                { id: "general", name: e("General") },
                { id: "shortcuts", name: e("Shortcuts") },
              ]),
              p = (0, a.iH)({});
            (0, a.bv)(() => {
              t.tab && (n.value = t.tab);
            });
            const h = (0, a.Fl)(() => [
              { type: "space", size: "flexible" },
              { type: "button", label: e("Cancel"), click: "close" },
              {
                type: "button",
                label: e("Apply"),
                backgroundColor: "primary",
                click: "applyChanges",
              },
              { type: "space", size: "flexible" },
            ]);
            return {
              isMac: !1,
              isLicenseMode: !1,
              shortcuts: r,
              canAutoUpdater: s.c0,
              touchBarItems: h,
              activeTab: n,
              activeTabIndex: o,
              tabs: l,
              handlePreferencesChange: (e) => {
                p.value = Object.assign(Object.assign({}, p.value), e);
              },
              applyChanges: () => {
                r.value && r.value.applyChanges(),
                  d.ZP.fetch(u.Pp, {
                    mutations: [
                      {
                        id: "preferences",
                        type: "updatePreferences",
                        payload: [p.value],
                      },
                    ],
                  }).then(() => {
                    window.close();
                  });
              },
              cancel: () => {
                window.close();
              },
              restoreShortcuts: () => {
                r.value && r.value.resetToDefault();
              },
            };
          },
        });
      const z = (0, x.Z)(
        K,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "div",
            { staticClass: "uk-window uk-window-dialog", attrs: { id: "app" } },
            [
              t(
                "div",
                { staticClass: "uk-window-title-bar" },
                [
                  t("div", { staticClass: "uk-window-title" }, [
                    e._v("\n      " + e._s(e.$T("Preferences")) + "\n    "),
                  ]),
                  e._v(" "),
                  t("window-control-button-group"),
                ],
                1,
              ),
              e._v(" "),
              t(
                "div",
                {
                  ref: "content",
                  staticClass: "uk-window-body uk-flex uk-flex-column",
                  staticStyle: { overflow: "hidden" },
                },
                [
                  t(
                    "ul",
                    {
                      staticClass:
                        "uk-tab uk-tab-large uk-flex-center uk-tab-capsule uk-margin-remove",
                      staticStyle: {
                        "padding-top": "16px",
                        "padding-bottom": "4px",
                      },
                      attrs: {
                        "uk-tab": "connect: #main_content_switcher",
                        "data-active": e.activeTabIndex,
                      },
                    },
                    e._l(e.tabs, function (r) {
                      return t("li", { key: r.id }, [
                        t(
                          "a",
                          {
                            attrs: { draggable: "false", href: "#" },
                            on: {
                              click: function (t) {
                                e.activeTab = r.id;
                              },
                            },
                          },
                          [e._v("\n          " + e._s(r.name) + "\n        ")],
                        ),
                      ]);
                    }),
                    0,
                  ),
                  e._v(" "),
                  t(
                    "ul",
                    {
                      staticClass:
                        "uk-switcher uk-height-expand uk-flex uk-flex-column",
                      class: {
                        "uk-overflow-auto": "shortcuts" !== e.activeTab,
                      },
                      attrs: { id: "main_content_switcher" },
                    },
                    [
                      t(
                        "li",
                        {
                          staticClass:
                            "uk-panel uk-padding-large uk-height-expand uk-padding-remove-bottom",
                        },
                        [
                          t(
                            "form",
                            { staticStyle: { height: "calc(100% - 10px)" } },
                            [
                              t(
                                "div",
                                {
                                  staticClass: "uk-fieldset",
                                  class: { "uk-height-1-1": e.isLicenseMode },
                                },
                                [
                                  t(
                                    "div",
                                    { staticClass: "uk-panel uk-form-aligned" },
                                    [
                                      t("appearance", {
                                        on: {
                                          select: e.handlePreferencesChange,
                                        },
                                      }),
                                      e._v(" "),
                                      t("language", {
                                        on: {
                                          select: e.handlePreferencesChange,
                                        },
                                      }),
                                      e._v(" "),
                                      t("zoom-level", {
                                        on: {
                                          select: e.handlePreferencesChange,
                                        },
                                      }),
                                      e._v(" "),
                                      t("default-theme", {
                                        on: {
                                          select: e.handlePreferencesChange,
                                        },
                                      }),
                                      e._v(" "),
                                      t("cjk-font", {
                                        on: {
                                          select: e.handlePreferencesChange,
                                        },
                                      }),
                                      e._v(" "),
                                      e.canAutoUpdater
                                        ? t("auto-updater", {
                                            on: {
                                              select: e.handlePreferencesChange,
                                            },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      e.isMac
                                        ? t("quick-entry", {
                                            on: {
                                              check: e.handlePreferencesChange,
                                            },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      t("spell-check", {
                                        on: {
                                          check: e.handlePreferencesChange,
                                        },
                                      }),
                                      e._v(" "),
                                      e.isLicenseMode
                                        ? e._e()
                                        : t("share-analytics", {
                                            on: {
                                              check: e.handlePreferencesChange,
                                            },
                                          }),
                                    ],
                                    1,
                                  ),
                                ],
                              ),
                              e._v(" "),
                              e.isLicenseMode
                                ? e._e()
                                : t("share-service", {
                                    on: { toggle: e.handlePreferencesChange },
                                  }),
                              e._v(" "),
                              e.isLicenseMode
                                ? e._e()
                                : t("div", { staticStyle: { height: "8px" } }),
                            ],
                            1,
                          ),
                        ],
                      ),
                      e._v(" "),
                      t(
                        "li",
                        {
                          staticClass:
                            "uk-panel uk-padding-large uk-flex uk-flex-column uk-height-expand uk-position-relative",
                        },
                        [t("shortcuts-panel", { ref: "shortcuts" })],
                        1,
                      ),
                    ],
                  ),
                ],
              ),
              e._v(" "),
              t(
                "div",
                { staticClass: "uk-window-button-bar uk-workbench-bottom" },
                [
                  t("div", { staticClass: "uk-button-group" }, [
                    t(
                      "button",
                      {
                        staticClass: "uk-button uk-button-primary",
                        attrs: { type: "submit", autofocus: "" },
                        on: { click: e.applyChanges },
                      },
                      [e._v("\n        " + e._s(e.$T("Apply")) + "\n      ")],
                    ),
                    e._v(" "),
                    t(
                      "button",
                      {
                        staticClass: "uk-button uk-button-default",
                        attrs: { type: "button" },
                        on: { click: e.cancel },
                      },
                      [e._v("\n        " + e._s(e.$T("Cancel")) + "\n      ")],
                    ),
                  ]),
                  e._v(" "),
                  "shortcuts" == e.activeTab
                    ? t("div", { staticClass: "uk-button-group" }, [
                        t(
                          "button",
                          {
                            staticClass: "uk-button uk-button-link",
                            attrs: { type: "button" },
                            on: { click: e.restoreShortcuts },
                          },
                          [
                            e._v(
                              "\n        " +
                                e._s(e.$T("Restore Default Shortcuts")) +
                                "\n      ",
                            ),
                          ],
                        ),
                      ])
                    : e._e(),
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
      (0, n.Z)(z, { name: "preferences" });
    },
    13382: (e, t, r) => {
      "use strict";
      r.d(t, {
        G$: () => _,
        N0: () => g,
        Pg: () => T,
        R2: () => S,
        W5: () => k,
        ZZ: () => v,
        am: () => x,
        eq: () => y,
        yr: () => I,
      });
      var n = r(71017),
        a = r.n(n),
        o = r(67657),
        i = r(7104),
        s = r(86633),
        l = r(33394),
        c = r(94593),
        u = r(90435),
        d = r(54856),
        p = r(5893),
        h = r(50965),
        m = r(92636);
      const f = (0, s.ZP)("dialog");
      async function g(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = a().join((0, i.bY)(), e.icon));
        const t = o.BrowserWindow.fromId(window.id);
        return [o.dialog.showMessageBoxSync(t, e)];
      }
      async function b(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = a().join((0, i.bY)(), e.icon));
        const t = o.BrowserWindow.fromId(window.id),
          { response: r, checkboxChecked: n } = await o.dialog.showMessageBox(
            t,
            e,
          );
        return [r, n];
      }
      async function v(e) {
        (e = Object.assign({ securityScopedBookmarks: !0 }, e || {}))
          .suggestPath &&
          !e.defaultPath &&
          ((e.defaultPath = x(e.suggestPath, e.filters)), delete e.suggestPath);
        const {
          canceled: t,
          filePath: r,
          bookmark: n,
        } = await o.dialog.showSaveDialog(o.getCurrentWindow(), e);
        return t
          ? null
          : (r && n && (await l.Z.bindBookmark({ fp: r, bookmark: n })),
            r && (0, h.km)().setLastSaveDirectory(a().dirname(r)),
            r);
      }
      async function y({ folderName: e, dialogOptions: t }) {
        let r = "";
        (t = Object.assign({ securityScopedBookmarks: !0 }, t || {}))
          .defaultPath || (t.defaultPath = x({}));
        const {
          canceled: n,
          filePaths: i,
          bookmark: s,
        } = await o.dialog.showOpenDialog(o.getCurrentWindow(), t);
        if (n) return null;
        if (
          ((r = i[0]),
          i.length > 0 && s && (await l.Z.bindBookmark({ fp: r, bookmark: s })),
          "string" == typeof e)
        ) {
          let t = e.replace(/[\\/]/g, "");
          0, (r = a().join(r, t));
        }
        return (
          c.Z.existsSync(r) || c.Z.ensureDir(r),
          r && (0, h.km)().setLastSaveDirectory(r),
          r
        );
      }
      function x(
        { doc: e = null, oldDoc: t = null, suggestedName: r = null },
        n = null,
      ) {
        let i, s;
        if (
          (!i && r && (i = (0, p.N6)(r.toString())),
          !i &&
            e &&
            e.title &&
            e.source &&
            !e.source.startsWith("new://") &&
            (i = (0, p.N6)(e.title.toString())),
          !i &&
            t &&
            t.title &&
            t.source &&
            !t.source.startsWith("new://") &&
            (i = (0, p.N6)(t.title.toString())),
          i && Array.isArray(n))
        ) {
          const e = n[0] && n[0].extensions;
          Array.isArray(e) && e.length > 0 && (i = `${i}.${e[0]}`);
        }
        if (!s && t && t.source && t.source.startsWith("file://")) {
          let e = t.source.slice(7);
          0, (s = a().dirname(e));
        }
        if (
          (!s &&
            (0, h.km)().lastSaveDirectory &&
            (s = (0, h.km)().lastSaveDirectory),
          !s)
        )
          try {
            s = o.app.getPath("documents");
          } catch (e) {
            f.info(e);
          }
        return s && i ? a().join(s, i) : s || i;
      }
      async function k(e) {
        e.$withUIKit((t) => {
          const r = `\n        <button\n        class="uk-button uk-button-text uk-text-nowrap"\n        style="word-break: keep-all;"\n        focustrigger="cannotGetFocusByMouse">\n          ${e.$T("OK")}\n        </button>\n        </div>`;
          t.toast({
            message: e.$T(
              "The map style has been updated for your current version of Xmind.",
            ),
            pos: "bottom-center",
            timeout: 5e3,
            btn: r,
            style: { width: "500px", height: "auto", padding: "10px 20px" },
            btnClick: t.toast.clearAll(),
          });
        });
      }
      async function S(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("OK"),
          r = e("Get Latest Version"),
          n = [t, r],
          [a] = await b({
            title: "Xmind",
            message: e(
              "The map style in this file might vary since it was created in a newer version of Xmind.",
            ),
            detail: e(
              "You can continue to open the file or update to the latest version for better compatibility.",
            ),
            buttons: n,
            defaultId: n.indexOf(r),
            cancelId: n.indexOf(t),
            noLink: !0,
          });
        a === n.indexOf(r) && u.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function _(e) {
        if (((e = "function" != typeof e ? (e) => e : e), m.zr))
          return await b({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file was created with a newer version of Xmind. Please contact your corporate administrator for the latest update.",
            ),
            buttons: [e("Done")],
            defaultId: 0,
            noLink: !0,
          });
        const t = e("Cancel"),
          r = e("Get Latest Version"),
          n = [r, t],
          [a] = await b({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file was created by a newer version of Xmind. Please update Xmind and try to open it again.",
            ),
            buttons: n,
            defaultId: n.indexOf(r),
            cancelId: n.indexOf(t),
            noLink: !0,
          });
        a === n.indexOf(r) && u.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function I(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Save"),
          r = e("Save as"),
          n = e("Cancel"),
          a = [];
        a.push(t, n, r);
        let [o] = await b({
          type: "none",
          title: "Xmind",
          message: e("Saving file from Xmind"),
          detail: e(
            "Once you save the file, it cannot be opened normally in older versions like $1.",
            "Xmind 22.11",
          ),
          buttons: a,
          defaultId: a.indexOf(r),
          cancelId: a.indexOf(n),
          noLink: !0,
        });
        const i = o === a.indexOf(t),
          s = o === a.indexOf(r);
        return { toSave: i, toSaveAs: s, toCancel: !i && !s };
      }
      async function T(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Fix ＆ Open"),
          r = e("Cancel"),
          n = [t, r],
          [a] = await b({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file may contain invalid data structure or have become corrupted. Xmind can try to fix the data structure to help you open it.",
            ),
            buttons: n,
            defaultId: n.indexOf(t),
            cancelId: n.indexOf(r),
            noLink: !0,
          });
        return { toFix: a === n.indexOf(t), toCancel: a === n.indexOf(r) };
      }
    },
    33394: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => m });
      var n = r(57147),
        a = r.n(n),
        o = r(71017),
        i = r.n(o),
        s = r(73837),
        l = r(86633),
        c = r(16704),
        u = r(56222);
      const d = (0, l.ZP)("renderer:fs");
      async function p(e) {
        return (0, u.A)("OBTAIN_READ_WRITE_ACCESS", e);
      }
      async function h(e) {
        return (0, u.A)("RELEASE_READ_WRITE_ACCESS", e);
      }
      const m = {
        read: async function (e) {
          if (!i().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const t = await (async function (e) {
            return (0, u.A)("OBTAIN_READ_LOCK", e);
          })(e);
          try {
            return await (0, s.promisify)(a().readFile)(e);
          } catch (t) {
            d.error(`path(${e}) read error: ${(0, c.SC)(t)}`);
            try {
              if (!(await p(e))) throw new Error(`No access to '${e}'`);
              return await (0, s.promisify)(a().readFile)(e);
            } catch (e) {
              throw e;
            } finally {
              await h(e);
            }
          } finally {
            await (async function (e) {
              return (0, u.A)("RELEASE_READ_LOCK", e);
            })(t);
          }
        },
        write: async function (e, t) {
          if (!i().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const r = await (async function (e) {
            return (0, u.A)("OBTAIN_WRITE_LOCK", e);
          })(e);
          try {
            return await (0, s.promisify)(a().writeFile)(e, t);
          } catch (r) {
            d.error(`path(${e}) write error: ${(0, c.SC)(r)}`);
            try {
              if (!(await p(e))) throw new Error(`No access to '${e}'`);
              return await (0, s.promisify)(a().writeFile)(e, t);
            } catch (e) {
              throw e;
            } finally {
              await h(e);
            }
          } finally {
            await (async function (e) {
              return (0, u.A)("RELEASE_WRITE_LOCK", e);
            })(r);
          }
        },
        bindBookmark: async function ({ fp: e, bookmark: t } = {}) {
          return (0, u.A)("BIND_BOOKMARK", { fp: e, bookmark: t });
        },
        hasRWAccess: async function (e) {
          return (0, u.A)("HAS_READ_WRITE_ACCESS", e);
        },
        obtainRWAccessFromOS: p,
        releaseRWAccessFromOS: h,
      };
    },
    95246: (e, t, r) => {
      "use strict";
      r.d(t, {
        RS: () => d,
        lF: () => h,
        JX: () => p,
        gP: () => g,
        sF: () => u,
        GI: () => m,
        Ni: () => f,
        mi: () => S,
        QC: () => v,
        Sr: () => y,
        yB: () => k,
        SX: () => x,
        RL: () => b,
      });
      r(13382), r(81296), r(90435), r(54856), r(71017);
      var n = r(72298),
        a = r(67657),
        o = (r(92636), r(41809));
      require("posthtml");
      var i = r(97234),
        s = r(26601),
        l = r(50965);
      const c = { cache: !1 },
        u = (e) => {
          const t = (e) => parseInt(e, 16);
          if (
            "string" == typeof (e = (0, i.Z)(e).toHexString()) &&
            /^#[A-Z0-9]{6}$/.test(e.toUpperCase())
          ) {
            return (
              0.2126 * t(e.slice(1, 3)) +
              0.7152 * t(e.slice(3, 5)) +
              0.0722 * t(e.slice(5))
            );
          }
          return 0;
        },
        d = (e = {}) => {
          const t = Object.assign({}, c, e);
          let r = null;
          const n = {};
          return function (e = "", a = "") {
            if (t.cache && n[e]) return n[e];
            r || (r = document.createElement("canvas"));
            const o = r.getContext("2d");
            o.font = a;
            const i = o.measureText(e);
            return t.cache && (n[e] = i.width), i.width;
          };
        };
      function p() {
        const e = a.screen.getAllDisplays().map((e) => e.scaleFactor);
        return Math.max.apply(null, e);
      }
      const h = (e, t = 1) => {
        const r = p(),
          n = (0, o.Hv)(e, 72 * r * t);
        return Buffer.from(n.slice(22), "base64");
      };
      function m(e) {
        let t = parseInt(e);
        return Number.isInteger(t) ? t : 100;
      }
      function f(e) {
        return `${parseInt(e)}%`;
      }
      const g = (function () {
        let e = null;
        return function () {
          if (!e)
            if (window.screen.deviceXDPI && window.screen.deviceYDPI)
              e = { x: window.screen.deviceXDPI, y: window.screen.deviceYDPI };
            else {
              const t = document.createElement("div");
              (t.style.cssText =
                "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden"),
                document.body.appendChild(t),
                (e = {
                  x: parseInt(t.offsetWidth),
                  y: parseInt(t.offsetHeight),
                }),
                t.parentNode.removeChild(t);
            }
          return e;
        };
      })();
      function b(e, t) {
        let r = (0, l.f7)().keybindingByCommandIdAndGroup(t);
        const n = [];
        return (
          "string" == typeof r &&
            r.split("+").forEach((e) => {
              let t = e;
              "=" === t && (t = "+"), t && n.push(t);
            }),
          n.length > 0 ? `${e} ${n.join(" ")}` : e
        );
      }
      const v = (e, t) => {
          a.getCurrentWindow().setSize(e, t);
        },
        y = (e) => {
          const t = (e, ...t) => (0, l.JE)().T(e, ...t),
            r = a.Menu,
            o = a.MenuItem,
            i = new r();
          setTimeout(() => {
            const r = document.getSelection().toString(),
              s = n.clipboard.readText();
            i.append(
              new o({
                label: t("Cut"),
                enabled: Boolean(r),
                click: () => document.execCommand("cut"),
              }),
            ),
              i.append(
                new o({
                  label: t("Copy"),
                  enabled: Boolean(r),
                  click: () => document.execCommand("copy"),
                }),
              ),
              i.append(
                new o({
                  label: t("Paste"),
                  enabled: Boolean(s),
                  click: () => document.execCommand("paste"),
                }),
              ),
              i.append(new o({ type: "separator" })),
              i.append(
                new o({
                  label: t("Select All"),
                  enabled: Boolean(e),
                  click: () => document.execCommand("selectAll"),
                }),
              ),
              i.popup({ window: a.getCurrentWindow() });
          }, 50);
        };
      async function x() {
        await new Promise((e) =>
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              requestIdleCallback(e);
            });
          }),
        );
      }
      const k = (e, t) => s.Z.test({ width: e, height: t, sizes: [e, t] }),
        S = async (e, t, r = 1) => {
          if (k(e * r, t * r)) return r;
          const n = await s.Z.maxWidth({ usePromise: !0 }),
            a = await s.Z.maxHeight({ usePromise: !0 }),
            o = await s.Z.maxArea({ usePromise: !0 }),
            i = n.width,
            l = a.height,
            c = o.width * o.height;
          let u = r;
          if (e * r > i) {
            const t = i / e;
            u = Math.min(u, t);
          }
          if (t * r > l) {
            const e = l / t;
            u = Math.min(u, e);
          }
          if (e * r * t * r > c) {
            const r = Math.sqrt(c / (e * t));
            u = Math.min(u, r);
          }
          return u;
        };
    },
    1169: (e, t, r) => {
      "use strict";
      r.d(t, { ed: () => a, qr: () => o, ys: () => i });
      var n = r(16704);
      const a = [
          {
            commandId: "new",
            label: (0, n.WZ)("New Blank Map"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "newFromTemplate",
            label: (0, n.WZ)("New"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "newFromLibrary",
            label: (0, n.WZ)("New From Library"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "open",
            label: (0, n.WZ)("Open"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "save",
            label: (0, n.WZ)("Save"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "saveAs",
            label: (0, n.WZ)("Save As"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "print",
            label: (0, n.WZ)("Print"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "closeSimpleWindow",
            label: (0, n.WZ)("Close Window/Tab"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          null,
          null,
          {
            commandId: "mergeAllWindows",
            label: (0, n.WZ)("Merge All Windows"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addSheet",
            label: (0, n.WZ)("New Sheet"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.newSheetFromTopic",
            label: (0, n.WZ)("New Sheet From Topic"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.previousSheet",
            label: (0, n.WZ)("Previous Sheet"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.nextSheet",
            label: (0, n.WZ)("Next Sheet"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "frame.addNewTab",
            label: (0, n.WZ)("New Tab"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "frame.previousTab",
            label: (0, n.WZ)("Previous Tab"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "frame.nextTab",
            label: (0, n.WZ)("Next Tab"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "undo",
            label: (0, n.WZ)("Undo"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "redo",
            label: (0, n.WZ)("Redo"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "cut",
            label: (0, n.WZ)("Cut"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "copy",
            label: (0, n.WZ)("Copy"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "paste",
            label: (0, n.WZ)("Paste"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "duplicate",
            label: (0, n.WZ)("Duplicate"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.copyStyle",
            label: (0, n.WZ)("Copy Style"),
            category: (0, n.WZ)("General"),
          },
          {
            commandId: "editor.pasteStyle",
            label: (0, n.WZ)("Paste Style"),
            category: (0, n.WZ)("General"),
          },
          {
            commandId: "editor.resetStyle",
            label: (0, n.WZ)("Reset Style"),
            category: (0, n.WZ)("General"),
          },
          {
            commandId: "delete",
            label: (0, n.WZ)("Delete"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "deleteSingleTopic",
            label: (0, n.WZ)("Delete Single Topic"),
            category: (0, n.WZ)("General"),
          },
          {
            commandId: "selectAll",
            label: (0, n.WZ)("Select All"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleFindAndReplace",
            label: (0, n.WZ)("Find & Replace"),
            category: (0, n.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addSubTopic",
            label: (0, n.WZ)("Subtopic"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            fixed: !0,
          },
          {
            commandId: "editor.addTopic",
            label: (0, n.WZ)("Topic After"),
            category: (0, n.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addTopicBefore",
            label: (0, n.WZ)("Topic Before"),
            category: (0, n.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addParentTopic",
            label: (0, n.WZ)("Parent Topic"),
            category: (0, n.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addCallout",
            label: (0, n.WZ)("Callout"),
            category: (0, n.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addRelationship",
            label: (0, n.WZ)("Relationship"),
            category: (0, n.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addBoundary",
            label: (0, n.WZ)("Boundary"),
            category: (0, n.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addSummary",
            label: (0, n.WZ)("Summary"),
            category: (0, n.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.showNotesEditor",
            label: (0, n.WZ)("Note"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showLabelEditor",
            label: (0, n.WZ)("Label"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showHyperlinkEditor",
            getLabel: (e) => e("Link(noun)") + " - " + e("Webpage"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showTopiclinkEditor",
            getLabel: (e) => e("Link(noun)") + " - " + e("Topic Link"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addFileLink",
            getLabel: (e) => e("Link(noun)") + " - " + e("Local File"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addFolderLink",
            getLabel: (e) => e("Link(noun)") + " - " + e("Local Folder"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addAttachmentOnNewTopic",
            label: (0, n.WZ)("Attachment"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addAudioOnNewTopic",
            label: (0, n.WZ)("Audio Note"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleMarkerPanel",
            label: (0, n.WZ)("Marker"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleStickerPanel",
            label: (0, n.WZ)("Sticker"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleIllustrationPanel",
            label: (0, n.WZ)("Illustration"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addLocalImage",
            label: (0, n.WZ)("Local Image"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showEquationEditor",
            label: (0, n.WZ)("Equation"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.markPriorityByNumber",
            label: (0, n.WZ)("Mark Priority (1~7)"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeMarker",
            label: (0, n.WZ)("Remove Marker"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeStickerOrImageOrEquation",
            label: (0, n.WZ)("Remove Sticker/Image/Equation"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeLabel",
            label: (0, n.WZ)("Remove Label"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeLink",
            label: (0, n.WZ)("Remove Link"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeNote",
            label: (0, n.WZ)("Remove Note"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.keepTextOnly",
            label: (0, n.WZ)("Keep Text Only"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addTask",
            label: (0, n.WZ)("Add Task"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeTask",
            label: (0, n.WZ)("Remove Task"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.checkTask",
            label: (0, n.WZ)("Mark as Completed"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.uncheckTask",
            label: (0, n.WZ)("Mark as Uncompleted"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.cancelTask",
            label: (0, n.WZ)("Mark as Canceled"),
            category: (0, n.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showEditBox",
            label: (0, n.WZ)("Edit Topic Text"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.enterLineBreak",
            label: (0, n.WZ)("Enter Line Break"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.moveToBeginningOfText",
            label: (0, n.WZ)("Move to Beginning of Text"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.moveToEndOfText",
            label: (0, n.WZ)("Move to End of Text"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.boldText",
            label: (0, n.WZ)("Bold"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.italicText",
            label: (0, n.WZ)("Italic"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.strikethroughText",
            label: (0, n.WZ)("Strikethrough"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.uppercaseText",
            label: (0, n.WZ)("Uppercase"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.lowercaseText",
            label: (0, n.WZ)("Lowercase"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.capitalizeText",
            label: (0, n.WZ)("Capitalize"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.alignTextLeft",
            label: (0, n.WZ)("Align Text Left"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.centerText",
            label: (0, n.WZ)("Center Text"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.alignTextRight",
            label: (0, n.WZ)("Align Text Right"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.increaseFontSize",
            label: (0, n.WZ)("Increase Font Size"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.decreaseFontSize",
            label: (0, n.WZ)("Decrease Font Size"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.setStyleAsVeryImportant",
            label: (0, n.WZ)('Set Style as "Very Important"'),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.setStyleAsImportant",
            label: (0, n.WZ)('Set Style as "Important"'),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.setStyleAsCrossOut",
            label: (0, n.WZ)('Set Style as "Cross Out"'),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.setStyleAsDefault",
            label: (0, n.WZ)('Set Style as "Default"'),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.updateStyleToSameLevelTopics",
            label: (0, n.WZ)("Update Style to Same-Level Topics"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.updateStyleToSameTypeTopics",
            label: (0, n.WZ)("Update Style to Same-Type Topics"),
            category: (0, n.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.changeNumberingPatternToNone",
            label: (0, n.WZ)("Set Numbering as None"),
            category: (0, n.WZ)("Numbering"),
          },
          {
            commandId: "editor.changeNumberingPatternToNumeralArabic",
            label: (0, n.WZ)('Set Numbering as "1.2.3."'),
            category: (0, n.WZ)("Numbering"),
          },
          {
            commandId: "editor.changeNumberingPatternToAlphabetUppercase",
            label: (0, n.WZ)('Set Numbering as "A.B.C."'),
            category: (0, n.WZ)("Numbering"),
          },
          {
            commandId: "editor.changeNumberingPatternToAlphabetLowercase",
            label: (0, n.WZ)('Set Numbering as "a.b.c."'),
            category: (0, n.WZ)("Numbering"),
          },
          {
            commandId: "editor.changeNumberingPatternToNumeralRoman",
            label: (0, n.WZ)('Set Numbering as "I.II.III."'),
            category: (0, n.WZ)("Numbering"),
          },
          {
            commandId: "editor.toggleNumberingTieredEnabled",
            label: (0, n.WZ)("Set Numbering Tiered Numbers"),
            category: (0, n.WZ)("Numbering"),
          },
          {
            commandId: "editor.toggleNumberingStartsHereEnabled",
            label: (0, n.WZ)("Set Numbering Start From Begin"),
            category: (0, n.WZ)("Numbering"),
          },
          {
            commandId: "editor.focusAndSelectCenter",
            label: (0, n.WZ)("Go to Central Topic"),
            category: (0, n.WZ)("Select/Move Topics"),
          },
          {
            commandId: "editor.moveSelection",
            label: (0, n.WZ)("Move Selection"),
            category: (0, n.WZ)("Select/Move Topics"),
          },
          {
            commandId: "editor.selectMultipleTopics",
            label: (0, n.WZ)("Select Multiple Topics"),
            category: (0, n.WZ)("Select/Move Topics"),
          },
          {
            commandId: "editor.exchangeSiblingTopicUp",
            label: (0, n.WZ)("Move Topic Up"),
            category: (0, n.WZ)("Select/Move Topics"),
          },
          {
            commandId: "editor.exchangeSiblingTopicDown",
            label: (0, n.WZ)("Move Topic Down"),
            category: (0, n.WZ)("Select/Move Topics"),
          },
          {
            commandId: "editor.moveTopicToTop",
            label: (0, n.WZ)("Move Topic to Top"),
            category: (0, n.WZ)("Select/Move Topics"),
          },
          {
            commandId: "editor.moveTopicToBottom",
            label: (0, n.WZ)("Move Topic to Bottom"),
            category: (0, n.WZ)("Select/Move Topics"),
          },
          {
            commandId: "outliner.addTopic",
            label: (0, n.WZ)("Create Topic"),
            category: (0, n.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.deleteTopic",
            label: (0, n.WZ)("Quick-Delete Topic"),
            category: (0, n.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.indent",
            label: (0, n.WZ)("Indent"),
            category: (0, n.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.outdent",
            label: (0, n.WZ)("Outdent"),
            category: (0, n.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.multiSelectionNavigateUp",
            label: (0, n.WZ)("Multi-Select Topics Above"),
            category: (0, n.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.multiSelectionNavigateDown",
            label: (0, n.WZ)("Multi-Select Topics Below"),
            category: (0, n.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.exchangeSiblingTopicUp",
            label: (0, n.WZ)("Move Topic Up"),
            category: (0, n.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.exchangeSiblingTopicDown",
            label: (0, n.WZ)("Move Topic Down"),
            category: (0, n.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "editor.enterLineBreak",
            label: (0, n.WZ)("Enter Line Break"),
            category: (0, n.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.moveCaretCharacterToBeginning",
            label: (0, n.WZ)("Move to Beginning of Current Topic"),
            category: (0, n.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.moveCaretCharacterToEnd",
            label: (0, n.WZ)("Move to End of Current Topic"),
            category: (0, n.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.moveCaretCharacterToAboveSiblingTopic",
            label: (0, n.WZ)("Move to Previous Topic of Same Level"),
            category: (0, n.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.moveCaretCharacterToBelowSiblingTopic",
            label: (0, n.WZ)("Move to Next Topic of Same Level"),
            category: (0, n.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "workbench.switchToMapOrOutliner",
            label: (0, n.WZ)("Switch to Map/Outliner"),
            category: (0, n.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleBranch",
            label: (0, n.WZ)("Fold/Unfold Subtopics"),
            category: (0, n.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleBranchByNumber",
            label: (0, n.WZ)("Fold/Unfold Subtopics (Level 1~9)"),
            category: (0, n.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleAllBranch",
            label: (0, n.WZ)("Fold/Unfold Sub-Branches"),
            category: (0, n.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleBranchOnly",
            label: (0, n.WZ)("Show Branch Only"),
            category: (0, n.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          null,
          {
            commandId: "editor.zoomIn",
            label: (0, n.WZ)("Zoom In"),
            category: (0, n.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.zoomOut",
            label: (0, n.WZ)("Zoom Out"),
            category: (0, n.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.resetZoom",
            label: (0, n.WZ)("Actual Size"),
            category: (0, n.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.fitMap",
            label: (0, n.WZ)("Fit Map"),
            category: (0, n.WZ)("Adjust Map & View"),
          },
          {
            commandId: "frame.toggleTabbar",
            label: (0, n.WZ)("Show Tab Bar"),
            category: (0, n.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleTopicNavigationPanel",
            label: (0, n.WZ)("Show Navigation Panel - Topic"),
            category: (0, n.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleNoteNavigationPanel",
            label: (0, n.WZ)("Show Navigation Panel - Note"),
            category: (0, n.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleLabelAndMarkerNavigationPanel",
            label: (0, n.WZ)("Show Navigation Panel - Marker & Label"),
            category: (0, n.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleTopicPanel",
            label: (0, n.WZ)("Show Format Panel - Style"),
            category: (0, n.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleSlidePanel",
            label: (0, n.WZ)("Show Format Panel - Pitch"),
            category: (0, n.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleMapPanel",
            label: (0, n.WZ)("Show Format Panel - Map"),
            category: (0, n.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleSkeletonPanel",
            label: (0, n.WZ)("Show Format Panel - Skeleton"),
            category: (0, n.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleColorThemePanel",
            label: (0, n.WZ)("Show Format Panel - Color Theme"),
            category: (0, n.WZ)("Adjust Map & View"),
          },
          {
            commandId: "editor.toggleTopicCountLabel",
            label: (0, n.WZ)("Show Topic Count"),
            category: (0, n.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleSheetBar",
            label: (0, n.WZ)("Show Sheet Bar"),
            category: (0, n.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportPng1",
            label: (0, n.WZ)("Export to PNG"),
            category: (0, n.WZ)("Export"),
          },
          {
            commandId: "workbench.exportSvg1",
            label: (0, n.WZ)("Export to SVG"),
            category: (0, n.WZ)("Export"),
          },
          {
            commandId: "workbench.exportPdf",
            label: (0, n.WZ)("Export to PDF"),
            category: (0, n.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportMd",
            label: (0, n.WZ)("Export to Markdown"),
            category: (0, n.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportWord",
            label: (0, n.WZ)("Export to Word"),
            category: (0, n.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportExcel",
            label: (0, n.WZ)("Export to Excel"),
            category: (0, n.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportOPML",
            label: (0, n.WZ)("Export to OPML"),
            category: (0, n.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportTextBundle",
            label: (0, n.WZ)("Export to TextBundle"),
            category: (0, n.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "mapShot",
            label: (0, n.WZ)("Map Shot"),
            category: (0, n.WZ)("Tools & Others"),
          },
          {
            commandId: "mergeXMindFiles",
            label: (0, n.WZ)("Merge Xmind Files"),
            category: (0, n.WZ)("Tools & Others"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "customizeTheme",
            label: (0, n.WZ)("Create/Customize Theme"),
            category: (0, n.WZ)("Tools & Others"),
          },
          {
            commandId: "createTheme",
            label: (0, n.WZ)("Create Theme"),
            category: (0, n.WZ)("Tools & Others"),
          },
          {
            commandId: "workbench.toggleZenMode",
            label: (0, n.WZ)("ZEN Mode"),
            category: (0, n.WZ)("Tools & Others"),
          },
          {
            commandId: "editor.enterPitchMode",
            label: (0, n.WZ)("Pitch Mode"),
            category: (0, n.WZ)("Tools & Others"),
          },
          {
            commandId: "editor.enterPitchModeWindowed",
            label: (0, n.WZ)("Pitch Mode - In Window"),
            category: (0, n.WZ)("Tools & Others"),
          },
          {
            commandId: "editor.enterPitchPresenterViewMode",
            label: (0, n.WZ)("Pitch Mode - Presenter View"),
            category: (0, n.WZ)("Tools & Others"),
          },
          {
            commandId: "keyAssist",
            label: (0, n.WZ)("Key Assist"),
            category: (0, n.WZ)("Tools & Others"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.setpassword",
            label: (0, n.WZ)("Set Password"),
            category: (0, n.WZ)("Tools & Others"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "preferences",
            label: (0, n.WZ)("Preferences"),
            category: (0, n.WZ)("Tools & Others"),
            isSupportedInOutliner: !0,
          },
        ].filter(Boolean),
        o = [
          {
            commandId: "pitch.nextStep",
            label: (0, n.WZ)("Next Step"),
            category: (0, n.WZ)("Navigation"),
            accelerator: ["Space", "||", "→", "||", "↓"],
          },
          {
            commandId: "pitch.previousStep",
            label: (0, n.WZ)("Previous Step"),
            category: (0, n.WZ)("Navigation"),
            accelerator: ["←", "||", "↑"],
          },
          {
            commandId: "pitch.skipCurrentBranch",
            label: (0, n.WZ)("Skip Current Branch"),
            category: (0, n.WZ)("Navigation"),
            accelerator: ["Shift", "+", "→"],
          },
          {
            commandId: "pitch.backParentTopic",
            label: (0, n.WZ)("Back to Parent Topic"),
            category: (0, n.WZ)("Navigation"),
            accelerator: ["Shift", "+", "←"],
          },
          {
            commandId: "pitch.exit",
            label: (0, n.WZ)("Exit Pitch Mode"),
            category: (0, n.WZ)("Other"),
            accelerator: ["Esc", "||", "Q"],
          },
          {
            commandId: "pitch.toggleAnimation",
            label: (0, n.WZ)("Enable/disable Animation"),
            category: (0, n.WZ)("Other"),
            accelerator: ["A"],
          },
          {
            commandId: "pitch.showShortcuts",
            label: (0, n.WZ)("Show Keyboard Shortcuts"),
            category: (0, n.WZ)("Other"),
            accelerator: ["?"],
          },
        ],
        i = [
          "open",
          "saveAs",
          "save",
          "print",
          "closeSimpleWindow",
          "closeAllWindows",
          "frame.addNewTab",
          "frame.previousTab",
          "frame.nextTab",
          "undo",
          "redo",
          "cut",
          "copy",
          "paste",
          "duplicate",
          "delete",
          "selectAll",
          "switchBetweenXMindWindows",
          "workbench.toggleFindAndReplace",
          "editor.showEditBox",
          "editor.boldText",
          "editor.italicText",
          "editor.enterLineBreak",
          "editor.moveToBeginningOfText",
          "editor.moveToEndOfText",
          "editor.addSubTopic",
          "editor.addTopic",
          "editor.markPriorityByNumber",
          "editor.moveSelection",
          "editor.selectMultipleTopics",
          "toggleFullScreen",
          "editor.toggleBranchByNumber",
        ];
    },
    60534: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => l });
      var n,
        a = r(2954),
        o = r(50965),
        i = r(69931);
      !(function (e) {
        (e.NO_RESULT = "NO_RESULT"),
          (e.NO_RESULT_AS_NETWORK = "NO_RESULT_AS_NETWORK"),
          (e.NO_NOTE = "NO_NOTE"),
          (e.NO_TAG = "NO_TAG"),
          (e.NO_SELECTION = "NO_SELECTION"),
          (e.NO_FORMAT_AVAILABLE = "NO_FORMAT_AVAILABLE"),
          (e.SLIDE_NO_SELECTION = "SLIDE_NO_SELECTION"),
          (e.BULB = "BULB");
      })(n || (n = {}));
      const s = (0, a.aZ)({
        __name: "common-none-panel",
        props: {
          type: { default: "NO_RESULT" },
          sectionStyle: { default: "" },
        },
        setup(e) {
          const t = e,
            r = (e, ...t) => (0, o.JE)().T(e, ...t),
            s = (0, a.Fl)(() => ({
              [n.NO_RESULT]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/no-result.svg",
                ),
                text: r("No results found."),
                spacing: "-1px",
              },
              [n.NO_RESULT_AS_NETWORK]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/no-result.svg",
                ),
                text: r(
                  "Please check your network connection and try again later.",
                ),
                spacing: "-1px",
              },
              [n.NO_NOTE]: {
                image: (0, i.ju)("static/images/empty-panel-icon/no-note.svg"),
                text: r("No note exists."),
                spacing: "-3px",
              },
              [n.NO_TAG]: {
                image: (0, i.ju)("static/images/empty-panel-icon/no-tag.svg"),
                text: r("No marker, label or task exists."),
                spacing: "0px",
              },
              [n.NO_SELECTION]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/empty-selection.svg",
                ),
                text: r("Select an object to format."),
                spacing: "-2px",
              },
              [n.NO_FORMAT_AVAILABLE]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/no-format-available.svg",
                ),
                text: r("This object can't be formatted."),
                spacing: "5px",
              },
              [n.SLIDE_NO_SELECTION]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/slide-empty-selection.svg",
                ),
                text: r("Select a topic to format."),
                spacing: "-2px",
              },
              [n.BULB]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/zen-mode-bulb.svg",
                ),
                text: r(
                  "Please switch to original appearance to enable format options.",
                ),
                spacing: "5px",
              },
            })),
            l = (0, a.Fl)(() => s.value[t.type] || s.value[n.NO_RESULT]);
          return {
            __sfc: !0,
            NonePanelType: n,
            props: t,
            $T: r,
            noneTabs: s,
            noneTab: l,
          };
        },
      });
      const l = (0, r(51900).Z)(
        s,
        function () {
          var e = this,
            t = e._self._c,
            r = e._self._setupProxy;
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
                        src: r.noneTab.image,
                        "uk-svg": "",
                      },
                    }),
                  ]),
                  e._v(" "),
                  r.noneTab.text
                    ? t(
                        "div",
                        {
                          staticClass: "uk-common-none-panel-text",
                          style: { marginTop: r.noneTab.spacing },
                        },
                        [e._v("\n      " + e._s(r.noneTab.text) + "\n    ")],
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
    54796: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => v });
      r(77282);
      var n = r(2954),
        a = r(23279),
        o = r.n(a),
        i = r(57557),
        s = r.n(i),
        l = (r(92636), r(16704)),
        c = r(54856),
        u = r(13382),
        d = r(90435),
        p = r(95246),
        h = r(1169),
        m = r(60534),
        f = r(50965);
      const g = {
          Meta: "Meta",
          Shift: "Shift",
          Ctrl: "Ctrl",
          Alt: "Alt",
          Option: "Alt",
        },
        b = {
          name: "ShortcutsPanel",
          components: { CommonNonePanel: m.Z },
          data: () => ({
            isMac: false,
            modifierIcon: g,
            commandIdBeClear: "",
            commandIdBeFocus: "",
            acceleratorEdited: {},
            selectedGroup: "",
            searchedShortcutGroups: {},
            inputedShortcutName: "",
          }),
          methods: {
            isShowPlaceholder(e, t) {
              const r = this.acceleratorEdited[t];
              return (
                !(r && r.valid ? r.accelerator : e) &&
                this.commandIdBeFocus === t
              );
            },
            displaySymbols(e, t) {
              const r = this.acceleratorEdited[t],
                n = r && r.valid ? r.accelerator : e;
              if (!n)
                return this.commandIdBeFocus === t
                  ? this.$T("Enter a Shortcut")
                  : this.$T("None");
              let a = n.split("+").map((e) => this.modifierIcon[e] || e),
                o = { Control: !1, undefined: !1 };
              return a
                .filter((e) => void 0 === o[e])
                .join(" ")
                .replace("=", "+");
            },
            focusKeyBinding(e, t) {
              e.target.focus();
              const r = this.acceleratorEdited[t.commandId],
                n = r && r.valid ? r.accelerator : t.accelerator;
              (this.commandIdBeClear = n ? t.commandId : ""),
                (this.commandIdBeFocus = t.commandId),
                (0, f.f7)().setEnabled(!1);
            },
            clearKeyBinding(e, t) {
              (this.commandIdBeFocus = ""),
                (this.commandIdBeClear = ""),
                this.setAccelerator(t, ""),
                this.setValid(t, !0);
            },
            exitListenKeyBinding(e) {
              (this.commandIdBeFocus = ""),
                (this.commandIdBeClear = ""),
                (0, f.f7)().setEnabled(!0);
            },
            listenKeyBinding(e, t) {
              e.stopPropagation(), e.preventDefault();
              let {
                code: r,
                keyCode: n,
                altKey: a,
                shiftKey: o,
                ctrlKey: i,
                metaKey: s,
              } = e;
              if (
                ((this.keyDownResult = {
                  code: r,
                  keyCode: n,
                  altKey: a,
                  shiftKey: o,
                  ctrlKey: i,
                  metaKey: s,
                }),
                27 === n)
              )
                return void this.exitListenKeyBinding(e, t);
              const l = (0, f.f7)().codeToKey(r),
                c = (0, f.f7)().isValidShortcut(l, {
                  hasAlt: a,
                  hasShift: o,
                  hasCtrl: i,
                  hasMeta: s,
                });
              if (
                (["ALT", "CONTROL", "SHIFT"].includes(l && l.toUpperCase()) &&
                  (r = ""),
                c)
              ) {
                const e = (0, f.f7)().generateKeybindingByKey(l, {
                  hasAlt: a,
                  hasShift: o,
                  hasCtrl: i,
                  hasMeta: s,
                });
                this.setAccelerator(t, e), this.setValid(t, !0);
              }
            },
            rectifyKeyBinding(e, t) {
              e.stopPropagation(), e.preventDefault();
              const {
                keyCode: r,
                altKey: n,
                shiftKey: a,
                ctrlKey: o,
                metaKey: i,
              } = this.keyDownResult;
              if (27 === r) return void this.exitListenKeyBinding(e, t);
              const s = t.commandId,
                l = t.groupName || "default";
              if (!this.acceleratorEdited[s]) return;
              if (!this.acceleratorEdited[s].valid)
                return void this.setValid(t, !1);
              const c = this.acceleratorEdited[s].accelerator;
              let u = (0, f.f7)().forbitConflictCommandIds,
                d = [];
              const p = Object.keys(this.acceleratorEdited);
              u.forEach((e) => {
                if (p.includes(e))
                  e !== s && d.push(this.acceleratorEdited[e].accelerator);
                else {
                  const t = (0, f.f7)().keybindingByCommandIdAndGroup(
                      e,
                      "default",
                    ),
                    r = (0, f.f7)().keybindingByCommandIdAndGroup(
                      e,
                      "outliner",
                    );
                  d.push(t), d.push(r);
                }
              }),
                p.forEach((e) => {
                  const t = this.acceleratorEdited[e];
                  e === s ||
                    (t.groupName !== l && !u.includes(s)) ||
                    d.push(t.accelerator);
                }),
                (d = d.filter((e) => !!e));
              let h = (0, f.f7)().commandIdByKeybinding({
                keybinding: c,
                groupName: l,
              });
              !h &&
                u.includes(s) &&
                "outliner" !== l &&
                (h = (0, f.f7)().commandIdByKeybinding({
                  keybinding: c,
                  groupName: "outliner",
                })),
                (d.includes(c) || (h && !p.includes(h))) &&
                  (this.showConflictDialog(), this.setValid(t, !1));
            },
            showConflictDialog() {
              (0, u.N0)({
                title: "Xmind",
                message: this.$T("Shortcut Used by Another Action"),
                detail: this.$T(
                  "Another action is using the same keyboard shortcut. Please assign a different shortcut to this action.",
                ),
                buttons: [this.$T("OK")],
              });
            },
            setAccelerator(e, t) {
              if (this.acceleratorEdited[e.commandId])
                n.ZP.set(this.acceleratorEdited[e.commandId], "accelerator", t);
              else {
                const r =
                  (0, f.f7)().keybindingByCommandIdAndGroup(
                    e.commandId,
                    e.groupName,
                  ) || "";
                n.ZP.set(this.acceleratorEdited, e.commandId, {
                  dirty: !0,
                  accelerator: t,
                  oldAccelerator: r,
                  groupName: e.groupName || "default",
                });
              }
            },
            setValid(e, t) {
              this.acceleratorEdited[e.commandId] &&
                (t ||
                  n.ZP.set(
                    this.acceleratorEdited[e.commandId],
                    "accelerator",
                    "",
                  ),
                n.ZP.set(this.acceleratorEdited[e.commandId], "valid", !0));
            },
            async applyChanges() {
              const e = [],
                t = [];
              Object.keys(this.acceleratorEdited).forEach((r) => {
                const n = this.acceleratorEdited[r];
                (n.commandId = r),
                  n.oldAccelerator && e.push(n),
                  n.accelerator && t.push(n);
              }),
                e.forEach(async (e) => {
                  const { oldAccelerator: t, commandId: r, groupName: n } = e,
                    a = (0, f.f7)().keybindingsByCommandIdAndGroup(r, n);
                  a.length > 1 && a[0] === t
                    ? a.forEach(async (e) => {
                        await (0, f.f7)().unbinding({
                          keybinding: e,
                          groupName: n,
                        });
                      })
                    : await (0, f.f7)().unbinding({
                        keybinding: t,
                        groupName: n,
                      });
                }),
                t.forEach(async (e) => {
                  const { accelerator: t, commandId: r, groupName: n } = e;
                  (0, f.f7)().binding({
                    commandId: r,
                    keybinding: t,
                    groupName: n,
                  });
                });
            },
            async resetToDefault() {
              await (0, d.he)(c.Pp, {
                mutations: [{ id: "keybindings", type: "reset" }],
              }),
                (this.acceleratorEdited = {}),
                await (0, l._v)(100),
                this.searchShortcutsByGroup();
            },
            onSelectedGroupChange(e) {
              (this.selectedGroup = e), this.searchShortcutsByGroup();
            },
            searchShortcutsByGroup() {
              const e =
                  this.selectedGroup === this.allGroupOption
                    ? this.shortcutGroups
                    : {
                        [this.selectedGroup]:
                          this.shortcutGroups[this.selectedGroup],
                      },
                t = this.inputedShortcutName.replace(
                  /[-\\{}*+?|^$.[\]()#]/g,
                  "\\$&",
                ),
                r = new RegExp(t, "i"),
                n = {};
              for (const t in e) {
                const a = e[t],
                  o = {};
                for (const e in a) r.test(a[e].label) && (o[e] = a[e]);
                Object.keys(o).length && (n[t] = o);
              }
              this.searchedShortcutGroups = { ...n };
            },
            handleShowInputMenu() {
              return (0, p.Sr)(this.$refs.searchInput.value);
            },
          },
          computed: {
            allGroupOption() {
              return this.$T("All");
            },
            shortcutGroups() {
              let e = { [this.allGroupOption]: {} };
              return (
                h.ed.map((t) => {
                  !t ||
                    t.fixed ||
                    h.ys.indexOf(t.commandId) > -1 ||
                    (e[t.category] || (e[t.category] = {}),
                    (e[t.category][t.commandId] = {
                      commandId: t.commandId,
                      groupName: t.groupName,
                      label: t.getLabel
                        ? t.getLabel(this.$T)
                        : this.$T("$$", t.label),
                      accelerator: (0, f.f7)().keybindingByCommandIdAndGroup(
                        t.commandId,
                        t.groupName,
                      ),
                    }));
                }),
                e
              );
            },
            searchIconImage() {
              return this.$toResourceURL(
                "/static/images/navigation-panel/searchbar-search.svg",
              );
            },
          },
          watch: {
            inputedShortcutName: o()(function () {
              this.searchShortcutsByGroup();
            }, 200),
          },
          mounted() {
            (this.selectedGroup = this.allGroupOption),
              (this.searchedShortcutGroups = {
                ...s()(this.shortcutGroups, this.allGroupOption),
              }),
              this.$nextTick(() => {
                this.$refs.searchInput.focus();
              });
          },
          beforeDestroy() {
            (0, f.f7)().setEnabled(!0);
          },
        };
      const v = (0, r(51900).Z)(
        b,
        function () {
          var e = this,
            t = e._self._c;
          return t("div", { staticClass: "uk-height-expand" }, [
            t("div", { staticClass: "uk-flex uk-flex-row uk-margin" }, [
              t("div", { staticClass: "uk-width-1-3" }, [
                t(
                  "button",
                  {
                    staticClass:
                      "uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left",
                  },
                  [
                    e._v(
                      "\n        " +
                        e._s(e.$T("$$", e.selectedGroup)) +
                        "\n      ",
                    ),
                  ],
                ),
                e._v(" "),
                t(
                  "div",
                  {
                    ref: "popover",
                    staticClass: "uk-popover-contextual",
                    staticStyle: { width: "280px" },
                    attrs: {
                      "uk-contextual-popover": "",
                      "data-sel-close": "[uk-menu] > li > button",
                    },
                  },
                  [
                    t(
                      "ul",
                      {
                        staticClass: "uk-overflow-auto uk-height-1-1",
                        attrs: { "uk-menu": "" },
                      },
                      e._l(e.shortcutGroups, function (r, n) {
                        return t("li", { key: n }, [
                          t(
                            "button",
                            {
                              class: { "uk-checked": e.selectedGroup === n },
                              attrs: { autofocus: e.selectedGroup === n },
                              on: {
                                click: function (t) {
                                  return e.onSelectedGroupChange(n);
                                },
                              },
                            },
                            [t("span", [e._v(e._s(e.$T("$$", n)))])],
                          ),
                        ]);
                      }),
                      0,
                    ),
                  ],
                ),
              ]),
              e._v(" "),
              t(
                "div",
                {
                  staticClass:
                    "uk-position-relative uk-width-2-3 uk-margin-small-left",
                },
                [
                  t("img", {
                    staticClass: "uk-position-absolute",
                    staticStyle: { top: "4px", left: "4px" },
                    attrs: {
                      src: e.searchIconImage,
                      "uk-svg": "",
                      draggable: "false",
                    },
                  }),
                  e._v(" "),
                  t("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.inputedShortcutName,
                        expression: "inputedShortcutName",
                      },
                    ],
                    ref: "searchInput",
                    staticClass: "uk-input uk-search-input",
                    staticStyle: { "padding-left": "20px" },
                    attrs: {
                      placeholder: e.$T("Search shortcuts"),
                      autofocus: "true",
                      "uk-icon": "icon: search; ratio: 3",
                    },
                    domProps: { value: e.inputedShortcutName },
                    on: {
                      contextmenu: function (t) {
                        return e.handleShowInputMenu();
                      },
                      input: function (t) {
                        t.target.composing ||
                          (e.inputedShortcutName = t.target.value);
                      },
                    },
                  }),
                ],
              ),
            ]),
            e._v(" "),
            t(
              "form",
              {
                staticClass: "uk-panel uk-fieldset",
                staticStyle: {
                  height: "calc(100% - 24px)",
                  overflow: "auto",
                  padding: "10px",
                },
              },
              [
                e._l(e.searchedShortcutGroups, function (r, n, a) {
                  return t(
                    "div",
                    { key: n, staticClass: "uk-form-aligned uk-margin" },
                    [
                      t("h2", [
                        e._v("\n        " + e._s(e.$T("$$", n)) + "\n      "),
                      ]),
                      e._v(" "),
                      e._l(r, function (r, n) {
                        return t(
                          "div",
                          { key: n, staticClass: "uk-margin-small" },
                          [
                            t(
                              "label",
                              {
                                staticClass: "uk-form-label",
                                staticStyle: { width: "284px" },
                              },
                              [e._v(e._s(r.label) + e._s(e.$T(":")))],
                            ),
                            e._v(" "),
                            t("div", { staticClass: "uk-form-controls" }, [
                              t(
                                "div",
                                {
                                  staticClass:
                                    "uk-inline uk-width-small uk-text-center",
                                  staticStyle: { width: "200px" },
                                },
                                [
                                  t("button", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.commandIdBeClear === n,
                                        expression:
                                          "commandIdBeClear === commandId",
                                      },
                                    ],
                                    staticClass:
                                      "uk-button uk-position-right uk-flex uk-flex-middle uk-padding-xsmall",
                                    staticStyle: { opacity: "0.2" },
                                    attrs: {
                                      tabindex: "0",
                                      type: "button",
                                      "uk-icon": "clear",
                                    },
                                    on: {
                                      mousedown: function (t) {
                                        return e.clearKeyBinding(t, r);
                                      },
                                    },
                                  }),
                                  e._v(" "),
                                  t(
                                    "span",
                                    {
                                      staticClass:
                                        "uk-input uk-flex uk-flex-middle uk-flex-center",
                                      class: {
                                        "uk-form-placeholder-color":
                                          e.isShowPlaceholder(r.accelerator, n),
                                      },
                                      attrs: { tabindex: "-1" },
                                      on: {
                                        click: function (t) {
                                          return e.focusKeyBinding(t, r);
                                        },
                                        keydown: function (t) {
                                          return e.listenKeyBinding(t, r);
                                        },
                                        keyup: function (t) {
                                          return e.rectifyKeyBinding(t, r);
                                        },
                                        blur: function (t) {
                                          return e.exitListenKeyBinding(t, r);
                                        },
                                      },
                                    },
                                    [
                                      e._v(
                                        e._s(
                                          e.displaySymbols(r.accelerator, n),
                                        ),
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ]),
                          ],
                        );
                      }),
                      e._v(" "),
                      a + 1 < Object.keys(e.searchedShortcutGroups).length
                        ? t("hr")
                        : e._e(),
                    ],
                    2,
                  );
                }),
                e._v(" "),
                Object.keys(e.searchedShortcutGroups).length
                  ? e._e()
                  : t(
                      "div",
                      { staticClass: "uk-flex uk-height-1-1 uk-text-muted" },
                      [
                        t("common-none-panel", {
                          staticStyle: { height: "unset" },
                          attrs: { type: "NO_RESULT" },
                        }),
                      ],
                      1,
                    ),
              ],
              2,
            ),
          ]);
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
    },
    24322: (e, t, r) => {
      var n = r(99880);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, r(45346).Z)("6914875f", n, !0, {});
    },
    45346: (e, t, r) => {
      "use strict";
      function n(e, t) {
        for (var r = [], n = {}, a = 0; a < t.length; a++) {
          var o = t[a],
            i = o[0],
            s = { id: e + ":" + a, css: o[1], media: o[2], sourceMap: o[3] };
          n[i] ? n[i].parts.push(s) : r.push((n[i] = { id: i, parts: [s] }));
        }
        return r;
      }
      r.d(t, { Z: () => m });
      var a = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !a)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
        );
      var o = {},
        i = a && (document.head || document.getElementsByTagName("head")[0]),
        s = null,
        l = 0,
        c = !1,
        u = function () {},
        d = null,
        p = "data-vue-ssr-id",
        h =
          "undefined" != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function m(e, t, r, a) {
        (c = r), (d = a || {});
        var i = n(e, t);
        return (
          f(i),
          function (t) {
            for (var r = [], a = 0; a < i.length; a++) {
              var s = i[a];
              (l = o[s.id]).refs--, r.push(l);
            }
            t ? f((i = n(e, t))) : (i = []);
            for (a = 0; a < r.length; a++) {
              var l;
              if (0 === (l = r[a]).refs) {
                for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                delete o[l.id];
              }
            }
          }
        );
      }
      function f(e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t],
            n = o[r.id];
          if (n) {
            n.refs++;
            for (var a = 0; a < n.parts.length; a++) n.parts[a](r.parts[a]);
            for (; a < r.parts.length; a++) n.parts.push(b(r.parts[a]));
            n.parts.length > r.parts.length &&
              (n.parts.length = r.parts.length);
          } else {
            var i = [];
            for (a = 0; a < r.parts.length; a++) i.push(b(r.parts[a]));
            o[r.id] = { id: r.id, refs: 1, parts: i };
          }
        }
      }
      function g() {
        var e = document.createElement("style");
        return (e.type = "text/css"), i.appendChild(e), e;
      }
      function b(e) {
        var t,
          r,
          n = document.querySelector("style[" + p + '~="' + e.id + '"]');
        if (n) {
          if (c) return u;
          n.parentNode.removeChild(n);
        }
        if (h) {
          var a = l++;
          (n = s || (s = g())),
            (t = x.bind(null, n, a, !1)),
            (r = x.bind(null, n, a, !0));
        } else
          (n = g()),
            (t = k.bind(null, n)),
            (r = function () {
              n.parentNode.removeChild(n);
            });
        return (
          t(e),
          function (n) {
            if (n) {
              if (
                n.css === e.css &&
                n.media === e.media &&
                n.sourceMap === e.sourceMap
              )
                return;
              t((e = n));
            } else r();
          }
        );
      }
      var v,
        y =
          ((v = []),
          function (e, t) {
            return (v[e] = t), v.filter(Boolean).join("\n");
          });
      function x(e, t, r, n) {
        var a = r ? "" : n.css;
        if (e.styleSheet) e.styleSheet.cssText = y(t, a);
        else {
          var o = document.createTextNode(a),
            i = e.childNodes;
          i[t] && e.removeChild(i[t]),
            i.length ? e.insertBefore(o, i[t]) : e.appendChild(o);
        }
      }
      function k(e, t) {
        var r = t.css,
          n = t.media,
          a = t.sourceMap;
        if (
          (n && e.setAttribute("media", n),
          d.ssrId && e.setAttribute(p, t.id),
          a &&
            ((r += "\n/*# sourceURL=" + a.sources[0] + " */"),
            (r +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
              " */")),
          e.styleSheet)
        )
          e.styleSheet.cssText = r;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(r));
        }
      }
    },
    6113: (e) => {
      "use strict";
      e.exports = require("crypto");
    },
    72298: (e) => {
      "use strict";
      e.exports = require("electron");
    },
    82361: (e) => {
      "use strict";
      e.exports = require("events");
    },
    57147: (e) => {
      "use strict";
      e.exports = require("fs");
    },
    22037: (e) => {
      "use strict";
      e.exports = require("os");
    },
    71017: (e) => {
      "use strict";
      e.exports = require("path");
    },
    77282: (e) => {
      "use strict";
      e.exports = require("process");
    },
    63477: (e) => {
      "use strict";
      e.exports = require("querystring");
    },
    57310: (e) => {
      "use strict";
      e.exports = require("url");
    },
    73837: (e) => {
      "use strict";
      e.exports = require("util");
    },
    97234: (e, t, r) => {
      "use strict";
      function n(e) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          n(e)
        );
      }
      r.d(t, { Z: () => i });
      var a = /^\s+/,
        o = /\s+$/;
      function i(e, t) {
        if (((t = t || {}), (e = e || "") instanceof i)) return e;
        if (!(this instanceof i)) return new i(e, t);
        var r = (function (e) {
          var t = { r: 0, g: 0, b: 0 },
            r = 1,
            i = null,
            s = null,
            l = null,
            c = !1,
            u = !1;
          "string" == typeof e &&
            (e = (function (e) {
              e = e.replace(a, "").replace(o, "").toLowerCase();
              var t,
                r = !1;
              if (_[e]) (e = _[e]), (r = !0);
              else if ("transparent" == e)
                return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              if ((t = F.rgb.exec(e))) return { r: t[1], g: t[2], b: t[3] };
              if ((t = F.rgba.exec(e)))
                return { r: t[1], g: t[2], b: t[3], a: t[4] };
              if ((t = F.hsl.exec(e))) return { h: t[1], s: t[2], l: t[3] };
              if ((t = F.hsla.exec(e)))
                return { h: t[1], s: t[2], l: t[3], a: t[4] };
              if ((t = F.hsv.exec(e))) return { h: t[1], s: t[2], v: t[3] };
              if ((t = F.hsva.exec(e)))
                return { h: t[1], s: t[2], v: t[3], a: t[4] };
              if ((t = F.hex8.exec(e)))
                return {
                  r: W(t[1]),
                  g: W(t[2]),
                  b: W(t[3]),
                  a: E(t[4]),
                  format: r ? "name" : "hex8",
                };
              if ((t = F.hex6.exec(e)))
                return {
                  r: W(t[1]),
                  g: W(t[2]),
                  b: W(t[3]),
                  format: r ? "name" : "hex",
                };
              if ((t = F.hex4.exec(e)))
                return {
                  r: W(t[1] + "" + t[1]),
                  g: W(t[2] + "" + t[2]),
                  b: W(t[3] + "" + t[3]),
                  a: E(t[4] + "" + t[4]),
                  format: r ? "name" : "hex8",
                };
              if ((t = F.hex3.exec(e)))
                return {
                  r: W(t[1] + "" + t[1]),
                  g: W(t[2] + "" + t[2]),
                  b: W(t[3] + "" + t[3]),
                  format: r ? "name" : "hex",
                };
              return !1;
            })(e));
          "object" == n(e) &&
            (P(e.r) && P(e.g) && P(e.b)
              ? ((d = e.r),
                (p = e.g),
                (h = e.b),
                (t = {
                  r: 255 * w(d, 255),
                  g: 255 * w(p, 255),
                  b: 255 * w(h, 255),
                }),
                (c = !0),
                (u = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"))
              : P(e.h) && P(e.s) && P(e.v)
                ? ((i = A(e.s)),
                  (s = A(e.v)),
                  (t = (function (e, t, r) {
                    (e = 6 * w(e, 360)), (t = w(t, 100)), (r = w(r, 100));
                    var n = Math.floor(e),
                      a = e - n,
                      o = r * (1 - t),
                      i = r * (1 - a * t),
                      s = r * (1 - (1 - a) * t),
                      l = n % 6,
                      c = [r, i, o, o, s, r][l],
                      u = [s, r, r, i, o, o][l],
                      d = [o, o, s, r, r, i][l];
                    return { r: 255 * c, g: 255 * u, b: 255 * d };
                  })(e.h, i, s)),
                  (c = !0),
                  (u = "hsv"))
                : P(e.h) &&
                  P(e.s) &&
                  P(e.l) &&
                  ((i = A(e.s)),
                  (l = A(e.l)),
                  (t = (function (e, t, r) {
                    var n, a, o;
                    function i(e, t, r) {
                      return (
                        r < 0 && (r += 1),
                        r > 1 && (r -= 1),
                        r < 1 / 6
                          ? e + 6 * (t - e) * r
                          : r < 0.5
                            ? t
                            : r < 2 / 3
                              ? e + (t - e) * (2 / 3 - r) * 6
                              : e
                      );
                    }
                    if (
                      ((e = w(e, 360)),
                      (t = w(t, 100)),
                      (r = w(r, 100)),
                      0 === t)
                    )
                      n = a = o = r;
                    else {
                      var s = r < 0.5 ? r * (1 + t) : r + t - r * t,
                        l = 2 * r - s;
                      (n = i(l, s, e + 1 / 3)),
                        (a = i(l, s, e)),
                        (o = i(l, s, e - 1 / 3));
                    }
                    return { r: 255 * n, g: 255 * a, b: 255 * o };
                  })(e.h, i, l)),
                  (c = !0),
                  (u = "hsl")),
            e.hasOwnProperty("a") && (r = e.a));
          var d, p, h;
          return (
            (r = T(r)),
            {
              ok: c,
              format: e.format || u,
              r: Math.min(255, Math.max(t.r, 0)),
              g: Math.min(255, Math.max(t.g, 0)),
              b: Math.min(255, Math.max(t.b, 0)),
              a: r,
            }
          );
        })(e);
        (this._originalInput = e),
          (this._r = r.r),
          (this._g = r.g),
          (this._b = r.b),
          (this._a = r.a),
          (this._roundA = Math.round(100 * this._a) / 100),
          (this._format = t.format || r.format),
          (this._gradientType = t.gradientType),
          this._r < 1 && (this._r = Math.round(this._r)),
          this._g < 1 && (this._g = Math.round(this._g)),
          this._b < 1 && (this._b = Math.round(this._b)),
          (this._ok = r.ok);
      }
      function s(e, t, r) {
        (e = w(e, 255)), (t = w(t, 255)), (r = w(r, 255));
        var n,
          a,
          o = Math.max(e, t, r),
          i = Math.min(e, t, r),
          s = (o + i) / 2;
        if (o == i) n = a = 0;
        else {
          var l = o - i;
          switch (((a = s > 0.5 ? l / (2 - o - i) : l / (o + i)), o)) {
            case e:
              n = (t - r) / l + (t < r ? 6 : 0);
              break;
            case t:
              n = (r - e) / l + 2;
              break;
            case r:
              n = (e - t) / l + 4;
          }
          n /= 6;
        }
        return { h: n, s: a, l: s };
      }
      function l(e, t, r) {
        (e = w(e, 255)), (t = w(t, 255)), (r = w(r, 255));
        var n,
          a,
          o = Math.max(e, t, r),
          i = Math.min(e, t, r),
          s = o,
          l = o - i;
        if (((a = 0 === o ? 0 : l / o), o == i)) n = 0;
        else {
          switch (o) {
            case e:
              n = (t - r) / l + (t < r ? 6 : 0);
              break;
            case t:
              n = (r - e) / l + 2;
              break;
            case r:
              n = (e - t) / l + 4;
          }
          n /= 6;
        }
        return { h: n, s: a, v: s };
      }
      function c(e, t, r, n) {
        var a = [
          O(Math.round(e).toString(16)),
          O(Math.round(t).toString(16)),
          O(Math.round(r).toString(16)),
        ];
        return n &&
          a[0].charAt(0) == a[0].charAt(1) &&
          a[1].charAt(0) == a[1].charAt(1) &&
          a[2].charAt(0) == a[2].charAt(1)
          ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0)
          : a.join("");
      }
      function u(e, t, r, n) {
        return [
          O(C(n)),
          O(Math.round(e).toString(16)),
          O(Math.round(t).toString(16)),
          O(Math.round(r).toString(16)),
        ].join("");
      }
      function d(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = i(e).toHsl();
        return (r.s -= t / 100), (r.s = Z(r.s)), i(r);
      }
      function p(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = i(e).toHsl();
        return (r.s += t / 100), (r.s = Z(r.s)), i(r);
      }
      function h(e) {
        return i(e).desaturate(100);
      }
      function m(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = i(e).toHsl();
        return (r.l += t / 100), (r.l = Z(r.l)), i(r);
      }
      function f(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = i(e).toRgb();
        return (
          (r.r = Math.max(
            0,
            Math.min(255, r.r - Math.round((-t / 100) * 255)),
          )),
          (r.g = Math.max(
            0,
            Math.min(255, r.g - Math.round((-t / 100) * 255)),
          )),
          (r.b = Math.max(
            0,
            Math.min(255, r.b - Math.round((-t / 100) * 255)),
          )),
          i(r)
        );
      }
      function g(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = i(e).toHsl();
        return (r.l -= t / 100), (r.l = Z(r.l)), i(r);
      }
      function b(e, t) {
        var r = i(e).toHsl(),
          n = (r.h + t) % 360;
        return (r.h = n < 0 ? 360 + n : n), i(r);
      }
      function v(e) {
        var t = i(e).toHsl();
        return (t.h = (t.h + 180) % 360), i(t);
      }
      function y(e, t) {
        if (isNaN(t) || t <= 0)
          throw new Error("Argument to polyad must be a positive number");
        for (var r = i(e).toHsl(), n = [i(e)], a = 360 / t, o = 1; o < t; o++)
          n.push(i({ h: (r.h + o * a) % 360, s: r.s, l: r.l }));
        return n;
      }
      function x(e) {
        var t = i(e).toHsl(),
          r = t.h;
        return [
          i(e),
          i({ h: (r + 72) % 360, s: t.s, l: t.l }),
          i({ h: (r + 216) % 360, s: t.s, l: t.l }),
        ];
      }
      function k(e, t, r) {
        (t = t || 6), (r = r || 30);
        var n = i(e).toHsl(),
          a = 360 / r,
          o = [i(e)];
        for (n.h = (n.h - ((a * t) >> 1) + 720) % 360; --t; )
          (n.h = (n.h + a) % 360), o.push(i(n));
        return o;
      }
      function S(e, t) {
        t = t || 6;
        for (
          var r = i(e).toHsv(), n = r.h, a = r.s, o = r.v, s = [], l = 1 / t;
          t--;

        )
          s.push(i({ h: n, s: a, v: o })), (o = (o + l) % 1);
        return s;
      }
      (i.prototype = {
        isDark: function () {
          return this.getBrightness() < 128;
        },
        isLight: function () {
          return !this.isDark();
        },
        isValid: function () {
          return this._ok;
        },
        getOriginalInput: function () {
          return this._originalInput;
        },
        getFormat: function () {
          return this._format;
        },
        getAlpha: function () {
          return this._a;
        },
        getBrightness: function () {
          var e = this.toRgb();
          return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
        },
        getLuminance: function () {
          var e,
            t,
            r,
            n = this.toRgb();
          return (
            (e = n.r / 255),
            (t = n.g / 255),
            (r = n.b / 255),
            0.2126 *
              (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) +
              0.7152 *
                (t <= 0.03928
                  ? t / 12.92
                  : Math.pow((t + 0.055) / 1.055, 2.4)) +
              0.0722 *
                (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4))
          );
        },
        setAlpha: function (e) {
          return (
            (this._a = T(e)),
            (this._roundA = Math.round(100 * this._a) / 100),
            this
          );
        },
        toHsv: function () {
          var e = l(this._r, this._g, this._b);
          return { h: 360 * e.h, s: e.s, v: e.v, a: this._a };
        },
        toHsvString: function () {
          var e = l(this._r, this._g, this._b),
            t = Math.round(360 * e.h),
            r = Math.round(100 * e.s),
            n = Math.round(100 * e.v);
          return 1 == this._a
            ? "hsv(" + t + ", " + r + "%, " + n + "%)"
            : "hsva(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        },
        toHsl: function () {
          var e = s(this._r, this._g, this._b);
          return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
        },
        toHslString: function () {
          var e = s(this._r, this._g, this._b),
            t = Math.round(360 * e.h),
            r = Math.round(100 * e.s),
            n = Math.round(100 * e.l);
          return 1 == this._a
            ? "hsl(" + t + ", " + r + "%, " + n + "%)"
            : "hsla(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        },
        toHex: function (e) {
          return c(this._r, this._g, this._b, e);
        },
        toHexString: function (e) {
          return "#" + this.toHex(e);
        },
        toHex8: function (e) {
          return (function (e, t, r, n, a) {
            var o = [
              O(Math.round(e).toString(16)),
              O(Math.round(t).toString(16)),
              O(Math.round(r).toString(16)),
              O(C(n)),
            ];
            if (
              a &&
              o[0].charAt(0) == o[0].charAt(1) &&
              o[1].charAt(0) == o[1].charAt(1) &&
              o[2].charAt(0) == o[2].charAt(1) &&
              o[3].charAt(0) == o[3].charAt(1)
            )
              return (
                o[0].charAt(0) +
                o[1].charAt(0) +
                o[2].charAt(0) +
                o[3].charAt(0)
              );
            return o.join("");
          })(this._r, this._g, this._b, this._a, e);
        },
        toHex8String: function (e) {
          return "#" + this.toHex8(e);
        },
        toRgb: function () {
          return {
            r: Math.round(this._r),
            g: Math.round(this._g),
            b: Math.round(this._b),
            a: this._a,
          };
        },
        toRgbString: function () {
          return 1 == this._a
            ? "rgb(" +
                Math.round(this._r) +
                ", " +
                Math.round(this._g) +
                ", " +
                Math.round(this._b) +
                ")"
            : "rgba(" +
                Math.round(this._r) +
                ", " +
                Math.round(this._g) +
                ", " +
                Math.round(this._b) +
                ", " +
                this._roundA +
                ")";
        },
        toPercentageRgb: function () {
          return {
            r: Math.round(100 * w(this._r, 255)) + "%",
            g: Math.round(100 * w(this._g, 255)) + "%",
            b: Math.round(100 * w(this._b, 255)) + "%",
            a: this._a,
          };
        },
        toPercentageRgbString: function () {
          return 1 == this._a
            ? "rgb(" +
                Math.round(100 * w(this._r, 255)) +
                "%, " +
                Math.round(100 * w(this._g, 255)) +
                "%, " +
                Math.round(100 * w(this._b, 255)) +
                "%)"
            : "rgba(" +
                Math.round(100 * w(this._r, 255)) +
                "%, " +
                Math.round(100 * w(this._g, 255)) +
                "%, " +
                Math.round(100 * w(this._b, 255)) +
                "%, " +
                this._roundA +
                ")";
        },
        toName: function () {
          return 0 === this._a
            ? "transparent"
            : !(this._a < 1) && (I[c(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (e) {
          var t = "#" + u(this._r, this._g, this._b, this._a),
            r = t,
            n = this._gradientType ? "GradientType = 1, " : "";
          if (e) {
            var a = i(e);
            r = "#" + u(a._r, a._g, a._b, a._a);
          }
          return (
            "progid:DXImageTransform.Microsoft.gradient(" +
            n +
            "startColorstr=" +
            t +
            ",endColorstr=" +
            r +
            ")"
          );
        },
        toString: function (e) {
          var t = !!e;
          e = e || this._format;
          var r = !1,
            n = this._a < 1 && this._a >= 0;
          return t ||
            !n ||
            ("hex" !== e &&
              "hex6" !== e &&
              "hex3" !== e &&
              "hex4" !== e &&
              "hex8" !== e &&
              "name" !== e)
            ? ("rgb" === e && (r = this.toRgbString()),
              "prgb" === e && (r = this.toPercentageRgbString()),
              ("hex" !== e && "hex6" !== e) || (r = this.toHexString()),
              "hex3" === e && (r = this.toHexString(!0)),
              "hex4" === e && (r = this.toHex8String(!0)),
              "hex8" === e && (r = this.toHex8String()),
              "name" === e && (r = this.toName()),
              "hsl" === e && (r = this.toHslString()),
              "hsv" === e && (r = this.toHsvString()),
              r || this.toHexString())
            : "name" === e && 0 === this._a
              ? this.toName()
              : this.toRgbString();
        },
        clone: function () {
          return i(this.toString());
        },
        _applyModification: function (e, t) {
          var r = e.apply(null, [this].concat([].slice.call(t)));
          return (
            (this._r = r._r),
            (this._g = r._g),
            (this._b = r._b),
            this.setAlpha(r._a),
            this
          );
        },
        lighten: function () {
          return this._applyModification(m, arguments);
        },
        brighten: function () {
          return this._applyModification(f, arguments);
        },
        darken: function () {
          return this._applyModification(g, arguments);
        },
        desaturate: function () {
          return this._applyModification(d, arguments);
        },
        saturate: function () {
          return this._applyModification(p, arguments);
        },
        greyscale: function () {
          return this._applyModification(h, arguments);
        },
        spin: function () {
          return this._applyModification(b, arguments);
        },
        _applyCombination: function (e, t) {
          return e.apply(null, [this].concat([].slice.call(t)));
        },
        analogous: function () {
          return this._applyCombination(k, arguments);
        },
        complement: function () {
          return this._applyCombination(v, arguments);
        },
        monochromatic: function () {
          return this._applyCombination(S, arguments);
        },
        splitcomplement: function () {
          return this._applyCombination(x, arguments);
        },
        triad: function () {
          return this._applyCombination(y, [3]);
        },
        tetrad: function () {
          return this._applyCombination(y, [4]);
        },
      }),
        (i.fromRatio = function (e, t) {
          if ("object" == n(e)) {
            var r = {};
            for (var a in e)
              e.hasOwnProperty(a) && (r[a] = "a" === a ? e[a] : A(e[a]));
            e = r;
          }
          return i(e, t);
        }),
        (i.equals = function (e, t) {
          return !(!e || !t) && i(e).toRgbString() == i(t).toRgbString();
        }),
        (i.random = function () {
          return i.fromRatio({
            r: Math.random(),
            g: Math.random(),
            b: Math.random(),
          });
        }),
        (i.mix = function (e, t, r) {
          r = 0 === r ? 0 : r || 50;
          var n = i(e).toRgb(),
            a = i(t).toRgb(),
            o = r / 100;
          return i({
            r: (a.r - n.r) * o + n.r,
            g: (a.g - n.g) * o + n.g,
            b: (a.b - n.b) * o + n.b,
            a: (a.a - n.a) * o + n.a,
          });
        }),
        (i.readability = function (e, t) {
          var r = i(e),
            n = i(t);
          return (
            (Math.max(r.getLuminance(), n.getLuminance()) + 0.05) /
            (Math.min(r.getLuminance(), n.getLuminance()) + 0.05)
          );
        }),
        (i.isReadable = function (e, t, r) {
          var n,
            a,
            o = i.readability(e, t);
          switch (
            ((a = !1),
            (n = (function (e) {
              var t, r;
              (t = (
                (e = e || { level: "AA", size: "small" }).level || "AA"
              ).toUpperCase()),
                (r = (e.size || "small").toLowerCase()),
                "AA" !== t && "AAA" !== t && (t = "AA");
              "small" !== r && "large" !== r && (r = "small");
              return { level: t, size: r };
            })(r)).level + n.size)
          ) {
            case "AAsmall":
            case "AAAlarge":
              a = o >= 4.5;
              break;
            case "AAlarge":
              a = o >= 3;
              break;
            case "AAAsmall":
              a = o >= 7;
          }
          return a;
        }),
        (i.mostReadable = function (e, t, r) {
          var n,
            a,
            o,
            s,
            l = null,
            c = 0;
          (a = (r = r || {}).includeFallbackColors),
            (o = r.level),
            (s = r.size);
          for (var u = 0; u < t.length; u++)
            (n = i.readability(e, t[u])) > c && ((c = n), (l = i(t[u])));
          return i.isReadable(e, l, { level: o, size: s }) || !a
            ? l
            : ((r.includeFallbackColors = !1),
              i.mostReadable(e, ["#fff", "#000"], r));
        });
      var _ = (i.names = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "0ff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000",
          blanchedalmond: "ffebcd",
          blue: "00f",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          burntsienna: "ea7e5d",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "0ff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkgrey: "a9a9a9",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkslategrey: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dimgrey: "696969",
          dodgerblue: "1e90ff",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "f0f",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          grey: "808080",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgray: "d3d3d3",
          lightgreen: "90ee90",
          lightgrey: "d3d3d3",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslategray: "789",
          lightslategrey: "789",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "0f0",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "f0f",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370db",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "db7093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "f00",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          slategrey: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          wheat: "f5deb3",
          white: "fff",
          whitesmoke: "f5f5f5",
          yellow: "ff0",
          yellowgreen: "9acd32",
        }),
        I = (i.hexNames = (function (e) {
          var t = {};
          for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
          return t;
        })(_));
      function T(e) {
        return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
      }
      function w(e, t) {
        (function (e) {
          return (
            "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
          );
        })(e) && (e = "100%");
        var r = (function (e) {
          return "string" == typeof e && -1 != e.indexOf("%");
        })(e);
        return (
          (e = Math.min(t, Math.max(0, parseFloat(e)))),
          r && (e = parseInt(e * t, 10) / 100),
          Math.abs(e - t) < 1e-6 ? 1 : (e % t) / parseFloat(t)
        );
      }
      function Z(e) {
        return Math.min(1, Math.max(0, e));
      }
      function W(e) {
        return parseInt(e, 16);
      }
      function O(e) {
        return 1 == e.length ? "0" + e : "" + e;
      }
      function A(e) {
        return e <= 1 && (e = 100 * e + "%"), e;
      }
      function C(e) {
        return Math.round(255 * parseFloat(e)).toString(16);
      }
      function E(e) {
        return W(e) / 255;
      }
      var M,
        j,
        N,
        F =
          ((j =
            "[\\s|\\(]+(" +
            (M = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") +
            ")[,|\\s]+(" +
            M +
            ")[,|\\s]+(" +
            M +
            ")\\s*\\)?"),
          (N =
            "[\\s|\\(]+(" +
            M +
            ")[,|\\s]+(" +
            M +
            ")[,|\\s]+(" +
            M +
            ")[,|\\s]+(" +
            M +
            ")\\s*\\)?"),
          {
            CSS_UNIT: new RegExp(M),
            rgb: new RegExp("rgb" + j),
            rgba: new RegExp("rgba" + N),
            hsl: new RegExp("hsl" + j),
            hsla: new RegExp("hsla" + N),
            hsv: new RegExp("hsv" + j),
            hsva: new RegExp("hsva" + N),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          });
      function P(e) {
        return !!F.CSS_UNIT.exec(e);
      }
    },
  },
  (e) => {
    e.O(0, [2768, 1505], () => {
      return (t = 17089), e((e.s = t));
      var t;
    });
    var t = e.O();
    module.exports = t;
  },
]);
