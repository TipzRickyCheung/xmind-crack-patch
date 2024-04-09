(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [8577],
  {
    18552: (e, t, n) => {
      var r = n(10852)(n(55639), "DataView");
      e.exports = r;
    },
    1989: (e, t, n) => {
      var r = n(51789),
        i = n(80401),
        o = n(57667),
        s = n(21327),
        a = n(81866);
      function l(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (l.prototype.clear = r),
        (l.prototype.delete = i),
        (l.prototype.get = o),
        (l.prototype.has = s),
        (l.prototype.set = a),
        (e.exports = l);
    },
    38407: (e, t, n) => {
      var r = n(27040),
        i = n(14125),
        o = n(82117),
        s = n(67518),
        a = n(54705);
      function l(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (l.prototype.clear = r),
        (l.prototype.delete = i),
        (l.prototype.get = o),
        (l.prototype.has = s),
        (l.prototype.set = a),
        (e.exports = l);
    },
    57071: (e, t, n) => {
      var r = n(10852)(n(55639), "Map");
      e.exports = r;
    },
    83369: (e, t, n) => {
      var r = n(24785),
        i = n(11285),
        o = n(96e3),
        s = n(49916),
        a = n(95265);
      function l(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (l.prototype.clear = r),
        (l.prototype.delete = i),
        (l.prototype.get = o),
        (l.prototype.has = s),
        (l.prototype.set = a),
        (e.exports = l);
    },
    53818: (e, t, n) => {
      var r = n(10852)(n(55639), "Promise");
      e.exports = r;
    },
    58525: (e, t, n) => {
      var r = n(10852)(n(55639), "Set");
      e.exports = r;
    },
    88668: (e, t, n) => {
      var r = n(83369),
        i = n(90619),
        o = n(72385);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
      }
      (s.prototype.add = s.prototype.push = i),
        (s.prototype.has = o),
        (e.exports = s);
    },
    46384: (e, t, n) => {
      var r = n(38407),
        i = n(37465),
        o = n(63779),
        s = n(67599),
        a = n(44758),
        l = n(34309);
      function c(e) {
        var t = (this.__data__ = new r(e));
        this.size = t.size;
      }
      (c.prototype.clear = i),
        (c.prototype.delete = o),
        (c.prototype.get = s),
        (c.prototype.has = a),
        (c.prototype.set = l),
        (e.exports = c);
    },
    62705: (e, t, n) => {
      var r = n(55639).Symbol;
      e.exports = r;
    },
    11149: (e, t, n) => {
      var r = n(55639).Uint8Array;
      e.exports = r;
    },
    70577: (e, t, n) => {
      var r = n(10852)(n(55639), "WeakMap");
      e.exports = r;
    },
    34963: (e) => {
      e.exports = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length, i = 0, o = [];
          ++n < r;

        ) {
          var s = e[n];
          t(s, n, e) && (o[i++] = s);
        }
        return o;
      };
    },
    14636: (e, t, n) => {
      var r = n(22545),
        i = n(35694),
        o = n(1469),
        s = n(44144),
        a = n(65776),
        l = n(36719),
        c = Object.prototype.hasOwnProperty;
      e.exports = function (e, t) {
        var n = o(e),
          u = !n && i(e),
          d = !n && !u && s(e),
          h = !n && !u && !d && l(e),
          p = n || u || d || h,
          f = p ? r(e.length, String) : [],
          m = f.length;
        for (var g in e)
          (!t && !c.call(e, g)) ||
            (p &&
              ("length" == g ||
                (d && ("offset" == g || "parent" == g)) ||
                (h &&
                  ("buffer" == g || "byteLength" == g || "byteOffset" == g)) ||
                a(g, m))) ||
            f.push(g);
        return f;
      };
    },
    62488: (e) => {
      e.exports = function (e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
        return e;
      };
    },
    82908: (e) => {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e)) return !0;
        return !1;
      };
    },
    18470: (e, t, n) => {
      var r = n(77813);
      e.exports = function (e, t) {
        for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
        return -1;
      };
    },
    68866: (e, t, n) => {
      var r = n(62488),
        i = n(1469);
      e.exports = function (e, t, n) {
        var o = t(e);
        return i(e) ? o : r(o, n(e));
      };
    },
    44239: (e, t, n) => {
      var r = n(62705),
        i = n(89607),
        o = n(2333),
        s = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : s && s in Object(e)
            ? i(e)
            : o(e);
      };
    },
    9454: (e, t, n) => {
      var r = n(44239),
        i = n(37005);
      e.exports = function (e) {
        return i(e) && "[object Arguments]" == r(e);
      };
    },
    90939: (e, t, n) => {
      var r = n(2492),
        i = n(37005);
      e.exports = function e(t, n, o, s, a) {
        return (
          t === n ||
          (null == t || null == n || (!i(t) && !i(n))
            ? t != t && n != n
            : r(t, n, o, s, e, a))
        );
      };
    },
    2492: (e, t, n) => {
      var r = n(46384),
        i = n(67114),
        o = n(18351),
        s = n(16096),
        a = n(64160),
        l = n(1469),
        c = n(44144),
        u = n(36719),
        d = "[object Arguments]",
        h = "[object Array]",
        p = "[object Object]",
        f = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, m, g, y) {
        var b = l(e),
          _ = l(t),
          v = b ? h : a(e),
          x = _ ? h : a(t),
          w = (v = v == d ? p : v) == p,
          S = (x = x == d ? p : x) == p,
          k = v == x;
        if (k && c(e)) {
          if (!c(t)) return !1;
          (b = !0), (w = !1);
        }
        if (k && !w)
          return (
            y || (y = new r()),
            b || u(e) ? i(e, t, n, m, g, y) : o(e, t, v, n, m, g, y)
          );
        if (!(1 & n)) {
          var T = w && f.call(e, "__wrapped__"),
            R = S && f.call(t, "__wrapped__");
          if (T || R) {
            var O = T ? e.value() : e,
              C = R ? t.value() : t;
            return y || (y = new r()), g(O, C, n, m, y);
          }
        }
        return !!k && (y || (y = new r()), s(e, t, n, m, g, y));
      };
    },
    28458: (e, t, n) => {
      var r = n(23560),
        i = n(15346),
        o = n(13218),
        s = n(80346),
        a = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        c = Object.prototype,
        u = l.toString,
        d = c.hasOwnProperty,
        h = RegExp(
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
        return !(!o(e) || i(e)) && (r(e) ? h : a).test(s(e));
      };
    },
    38749: (e, t, n) => {
      var r = n(44239),
        i = n(41780),
        o = n(37005),
        s = {};
      (s["[object Float32Array]"] =
        s["[object Float64Array]"] =
        s["[object Int8Array]"] =
        s["[object Int16Array]"] =
        s["[object Int32Array]"] =
        s["[object Uint8Array]"] =
        s["[object Uint8ClampedArray]"] =
        s["[object Uint16Array]"] =
        s["[object Uint32Array]"] =
          !0),
        (s["[object Arguments]"] =
          s["[object Array]"] =
          s["[object ArrayBuffer]"] =
          s["[object Boolean]"] =
          s["[object DataView]"] =
          s["[object Date]"] =
          s["[object Error]"] =
          s["[object Function]"] =
          s["[object Map]"] =
          s["[object Number]"] =
          s["[object Object]"] =
          s["[object RegExp]"] =
          s["[object Set]"] =
          s["[object String]"] =
          s["[object WeakMap]"] =
            !1),
        (e.exports = function (e) {
          return o(e) && i(e.length) && !!s[r(e)];
        });
    },
    280: (e, t, n) => {
      var r = n(25726),
        i = n(86916),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!r(e)) return i(e);
        var t = [];
        for (var n in Object(e))
          o.call(e, n) && "constructor" != n && t.push(n);
        return t;
      };
    },
    22545: (e) => {
      e.exports = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      };
    },
    51717: (e) => {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    74757: (e) => {
      e.exports = function (e, t) {
        return e.has(t);
      };
    },
    14429: (e, t, n) => {
      var r = n(55639)["__core-js_shared__"];
      e.exports = r;
    },
    67114: (e, t, n) => {
      var r = n(88668),
        i = n(82908),
        o = n(74757);
      e.exports = function (e, t, n, s, a, l) {
        var c = 1 & n,
          u = e.length,
          d = t.length;
        if (u != d && !(c && d > u)) return !1;
        var h = l.get(e),
          p = l.get(t);
        if (h && p) return h == t && p == e;
        var f = -1,
          m = !0,
          g = 2 & n ? new r() : void 0;
        for (l.set(e, t), l.set(t, e); ++f < u; ) {
          var y = e[f],
            b = t[f];
          if (s) var _ = c ? s(b, y, f, t, e, l) : s(y, b, f, e, t, l);
          if (void 0 !== _) {
            if (_) continue;
            m = !1;
            break;
          }
          if (g) {
            if (
              !i(t, function (e, t) {
                if (!o(g, t) && (y === e || a(y, e, n, s, l))) return g.push(t);
              })
            ) {
              m = !1;
              break;
            }
          } else if (y !== b && !a(y, b, n, s, l)) {
            m = !1;
            break;
          }
        }
        return l.delete(e), l.delete(t), m;
      };
    },
    18351: (e, t, n) => {
      var r = n(62705),
        i = n(11149),
        o = n(77813),
        s = n(67114),
        a = n(68776),
        l = n(21814),
        c = r ? r.prototype : void 0,
        u = c ? c.valueOf : void 0;
      e.exports = function (e, t, n, r, c, d, h) {
        switch (n) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !d(new i(e), new i(t)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return o(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var p = a;
          case "[object Set]":
            var f = 1 & r;
            if ((p || (p = l), e.size != t.size && !f)) return !1;
            var m = h.get(e);
            if (m) return m == t;
            (r |= 2), h.set(e, t);
            var g = s(p(e), p(t), r, c, d, h);
            return h.delete(e), g;
          case "[object Symbol]":
            if (u) return u.call(e) == u.call(t);
        }
        return !1;
      };
    },
    16096: (e, t, n) => {
      var r = n(58234),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, o, s, a) {
        var l = 1 & n,
          c = r(e),
          u = c.length;
        if (u != r(t).length && !l) return !1;
        for (var d = u; d--; ) {
          var h = c[d];
          if (!(l ? h in t : i.call(t, h))) return !1;
        }
        var p = a.get(e),
          f = a.get(t);
        if (p && f) return p == t && f == e;
        var m = !0;
        a.set(e, t), a.set(t, e);
        for (var g = l; ++d < u; ) {
          var y = e[(h = c[d])],
            b = t[h];
          if (o) var _ = l ? o(b, y, h, t, e, a) : o(y, b, h, e, t, a);
          if (!(void 0 === _ ? y === b || s(y, b, n, o, a) : _)) {
            m = !1;
            break;
          }
          g || (g = "constructor" == h);
        }
        if (m && !g) {
          var v = e.constructor,
            x = t.constructor;
          v == x ||
            !("constructor" in e) ||
            !("constructor" in t) ||
            ("function" == typeof v &&
              v instanceof v &&
              "function" == typeof x &&
              x instanceof x) ||
            (m = !1);
        }
        return a.delete(e), a.delete(t), m;
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
    58234: (e, t, n) => {
      var r = n(68866),
        i = n(99551),
        o = n(3674);
      e.exports = function (e) {
        return r(e, o, i);
      };
    },
    45050: (e, t, n) => {
      var r = n(37019);
      e.exports = function (e, t) {
        var n = e.__data__;
        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      };
    },
    10852: (e, t, n) => {
      var r = n(28458),
        i = n(47801);
      e.exports = function (e, t) {
        var n = i(e, t);
        return r(n) ? n : void 0;
      };
    },
    89607: (e, t, n) => {
      var r = n(62705),
        i = Object.prototype,
        o = i.hasOwnProperty,
        s = i.toString,
        a = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = o.call(e, a),
          n = e[a];
        try {
          e[a] = void 0;
          var r = !0;
        } catch (e) {}
        var i = s.call(e);
        return r && (t ? (e[a] = n) : delete e[a]), i;
      };
    },
    99551: (e, t, n) => {
      var r = n(34963),
        i = n(70479),
        o = Object.prototype.propertyIsEnumerable,
        s = Object.getOwnPropertySymbols,
        a = s
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  r(s(e), function (t) {
                    return o.call(e, t);
                  }));
            }
          : i;
      e.exports = a;
    },
    64160: (e, t, n) => {
      var r = n(18552),
        i = n(57071),
        o = n(53818),
        s = n(58525),
        a = n(70577),
        l = n(44239),
        c = n(80346),
        u = "[object Map]",
        d = "[object Promise]",
        h = "[object Set]",
        p = "[object WeakMap]",
        f = "[object DataView]",
        m = c(r),
        g = c(i),
        y = c(o),
        b = c(s),
        _ = c(a),
        v = l;
      ((r && v(new r(new ArrayBuffer(1))) != f) ||
        (i && v(new i()) != u) ||
        (o && v(o.resolve()) != d) ||
        (s && v(new s()) != h) ||
        (a && v(new a()) != p)) &&
        (v = function (e) {
          var t = l(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? c(n) : "";
          if (r)
            switch (r) {
              case m:
                return f;
              case g:
                return u;
              case y:
                return d;
              case b:
                return h;
              case _:
                return p;
            }
          return t;
        }),
        (e.exports = v);
    },
    47801: (e) => {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    51789: (e, t, n) => {
      var r = n(94536);
      e.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    80401: (e) => {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    57667: (e, t, n) => {
      var r = n(94536),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        if (r) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return i.call(t, e) ? t[e] : void 0;
      };
    },
    21327: (e, t, n) => {
      var r = n(94536),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : i.call(t, e);
      };
    },
    81866: (e, t, n) => {
      var r = n(94536);
      e.exports = function (e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t),
          this
        );
      };
    },
    65776: (e) => {
      var t = /^(?:0|[1-9]\d*)$/;
      e.exports = function (e, n) {
        var r = typeof e;
        return (
          !!(n = null == n ? 9007199254740991 : n) &&
          ("number" == r || ("symbol" != r && t.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < n
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
    15346: (e, t, n) => {
      var r,
        i = n(14429),
        o = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + r
          : "";
      e.exports = function (e) {
        return !!o && o in e;
      };
    },
    25726: (e) => {
      var t = Object.prototype;
      e.exports = function (e) {
        var n = e && e.constructor;
        return e === (("function" == typeof n && n.prototype) || t);
      };
    },
    27040: (e) => {
      e.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    14125: (e, t, n) => {
      var r = n(18470),
        i = Array.prototype.splice;
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, !0)
        );
      };
    },
    82117: (e, t, n) => {
      var r = n(18470);
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
    },
    67518: (e, t, n) => {
      var r = n(18470);
      e.exports = function (e) {
        return r(this.__data__, e) > -1;
      };
    },
    54705: (e, t, n) => {
      var r = n(18470);
      e.exports = function (e, t) {
        var n = this.__data__,
          i = r(n, e);
        return i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this;
      };
    },
    24785: (e, t, n) => {
      var r = n(1989),
        i = n(38407),
        o = n(57071);
      e.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (o || i)(),
            string: new r(),
          });
      };
    },
    11285: (e, t, n) => {
      var r = n(45050);
      e.exports = function (e) {
        var t = r(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    96e3: (e, t, n) => {
      var r = n(45050);
      e.exports = function (e) {
        return r(this, e).get(e);
      };
    },
    49916: (e, t, n) => {
      var r = n(45050);
      e.exports = function (e) {
        return r(this, e).has(e);
      };
    },
    95265: (e, t, n) => {
      var r = n(45050);
      e.exports = function (e, t) {
        var n = r(this, e),
          i = n.size;
        return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
      };
    },
    68776: (e) => {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      };
    },
    94536: (e, t, n) => {
      var r = n(10852)(Object, "create");
      e.exports = r;
    },
    86916: (e, t, n) => {
      var r = n(5569)(Object.keys, Object);
      e.exports = r;
    },
    31167: (e, t, n) => {
      e = n.nmd(e);
      var r = n(31957),
        i = t && !t.nodeType && t,
        o = i && e && !e.nodeType && e,
        s = o && o.exports === i && r.process,
        a = (function () {
          try {
            var e = o && o.require && o.require("util").types;
            return e || (s && s.binding && s.binding("util"));
          } catch (e) {}
        })();
      e.exports = a;
    },
    2333: (e) => {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    5569: (e) => {
      e.exports = function (e, t) {
        return function (n) {
          return e(t(n));
        };
      };
    },
    55639: (e, t, n) => {
      var r = n(31957),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
      e.exports = o;
    },
    90619: (e) => {
      e.exports = function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this;
      };
    },
    72385: (e) => {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    21814: (e) => {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      };
    },
    37465: (e, t, n) => {
      var r = n(38407);
      e.exports = function () {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    63779: (e) => {
      e.exports = function (e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
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
    34309: (e, t, n) => {
      var r = n(38407),
        i = n(57071),
        o = n(83369);
      e.exports = function (e, t) {
        var n = this.__data__;
        if (n instanceof r) {
          var s = n.__data__;
          if (!i || s.length < 199)
            return s.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new o(s);
        }
        return n.set(e, t), (this.size = n.size), this;
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
    77813: (e) => {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    35694: (e, t, n) => {
      var r = n(9454),
        i = n(37005),
        o = Object.prototype,
        s = o.hasOwnProperty,
        a = o.propertyIsEnumerable,
        l = r(
          (function () {
            return arguments;
          })(),
        )
          ? r
          : function (e) {
              return i(e) && s.call(e, "callee") && !a.call(e, "callee");
            };
      e.exports = l;
    },
    1469: (e) => {
      var t = Array.isArray;
      e.exports = t;
    },
    98612: (e, t, n) => {
      var r = n(23560),
        i = n(41780);
      e.exports = function (e) {
        return null != e && i(e.length) && !r(e);
      };
    },
    44144: (e, t, n) => {
      e = n.nmd(e);
      var r = n(55639),
        i = n(95062),
        o = t && !t.nodeType && t,
        s = o && e && !e.nodeType && e,
        a = s && s.exports === o ? r.Buffer : void 0,
        l = (a ? a.isBuffer : void 0) || i;
      e.exports = l;
    },
    18446: (e, t, n) => {
      var r = n(90939);
      e.exports = function (e, t) {
        return r(e, t);
      };
    },
    23560: (e, t, n) => {
      var r = n(44239),
        i = n(13218);
      e.exports = function (e) {
        if (!i(e)) return !1;
        var t = r(e);
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
    36719: (e, t, n) => {
      var r = n(38749),
        i = n(51717),
        o = n(31167),
        s = o && o.isTypedArray,
        a = s ? i(s) : r;
      e.exports = a;
    },
    3674: (e, t, n) => {
      var r = n(14636),
        i = n(280),
        o = n(98612);
      e.exports = function (e) {
        return o(e) ? r(e) : i(e);
      };
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
    47190: (e, t, n) => {
      "use strict";
      n.r(t);
      var r = n(51505),
        i = n(2954),
        o = n(63477),
        s = n.n(o),
        a = n(54856),
        l = n(90435),
        c = n(50965),
        u = n(24034),
        d = n(95246),
        h = n(60534),
        p = n(42855),
        f = n(87494),
        m = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function s(e) {
              try {
                l(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, a);
            }
            l((r = r.apply(e, t || [])).next());
          });
        };
      const g = (0, i.aZ)({
        __name: "app",
        setup(e) {
          const t = (0, i.iH)(),
            n = s().parse(location.search.substring(1)),
            r = (0, i.iH)([]),
            { T: o } = (0, c.JE)(),
            g = (0, i.iH)(""),
            y = (0, i.iH)(),
            b = (0, i.iH)(),
            _ = (0, i.iH)(!1),
            v = (0, i.iH)(),
            x = (0, i.iH)([]),
            w = (0, i.iH)(),
            S = (0, i.Fl)(() => r.value.map((e) => e.id)),
            k = (0, i.Fl)(() =>
              [
                b.value
                  ? { type: "button", label: o("Remove"), click: "remove" }
                  : null,
                { type: "space", size: "flexible" },
                { type: "button", label: o("Cancel"), click: "close" },
                x.value.length > 0 && !S.value.includes(x.value[0])
                  ? {
                      type: "button",
                      label: o("Insert"),
                      backgroundColor: "primary",
                      click: "insertTopicLink",
                    }
                  : null,
                { type: "space", size: "flexible" },
              ].filter(Boolean),
            ),
            T = (0, i.Fl)(() =>
              r.value.map((e) => ({
                value: e.id,
                type: "sheet",
                text: e.title,
                expanded: !0,
                sheetId: e.id,
                items: [
                  W(
                    e.rootTopic,
                    (t) => ({
                      value: t.id,
                      text: L(t),
                      type: "topic",
                      items: [],
                      expanded: !0,
                      sheetId: e.id,
                    }),
                    (e, t) =>
                      Object.assign(Object.assign({}, e), {
                        items: [...e.items, t],
                      }),
                  ),
                ],
              })),
            ),
            R = (0, i.Fl)(() =>
              r.value.map((e) => ({
                value: e.id,
                type: "sheet",
                text: e.title,
                expanded: !0,
                sheetId: e.id,
                items: W(
                  e.rootTopic,
                  (t) => [
                    {
                      value: t.id,
                      text: L(t),
                      type: "topic",
                      items: [],
                      expanded: !0,
                      sheetId: e.id,
                    },
                  ],
                  (e, t) =>
                    e
                      .filter((e) => z(e.text))
                      .concat(t.filter((e) => z(e.text))),
                ).map((e) =>
                  Object.assign(Object.assign({}, e), { text: B(e.text) }),
                ),
              })),
            ),
            O = (0, i.Fl)(() => g.value && g.value.length > 0),
            C = (0, i.Fl)(() =>
              O.value
                ? R.value.every((e) => e.items.length <= 0)
                : T.value.every((e) => e.items.length <= 0),
            ),
            I = (0, i.Fl)(() => o("<Empty Text>")),
            j = (0, i.Fl)(() =>
              (0, i.FN)().proxy.$toResourceURL(
                "/static/images/navigation-panel/searchbar-search.svg",
              ),
            );
          function E(e) {
            return m(this, void 0, void 0, function* () {
              return (0, f.CX)(
                (t) =>
                  m(this, void 0, void 0, function* () {
                    return "content.json" === t.path
                      ? JSON.stringify(e.content)
                      : "metadata.json" === t.path && e.metadata
                        ? JSON.stringify(e.metadata)
                        : "{}";
                  }),
                () => m(this, void 0, void 0, function* () {}),
              );
            });
          }
          (0, i.YP)(
            () => g.value,
            () => (x.value = []),
          ),
            (0, i.bv)(() => {
              (y.value = null),
                (b.value = "true" === n.hasTopicLink),
                (v.value = n.xmindObjectId),
                l.ZP.fetch((0, a.zj)(n.editorId)).then((e) =>
                  m(this, void 0, void 0, function* () {
                    const t = JSON.parse(e),
                      n = yield E({ content: t.content, metadata: t.metadata });
                    (r.value = n.sheets),
                      (0, i.Y3)().then(() => {
                        const e = window.document.querySelector(
                          `button.uk-tree-list-item[data-value="${v.value}"]`,
                        );
                        e && e.classList.add("uk-checked");
                      });
                  }),
                ),
                F();
            }),
            (0, i.Ah)(() => {
              N();
            });
          const A = () => window.close(),
            P = (e) =>
              m(this, void 0, void 0, function* () {
                e && e.preventDefault(),
                  yield l.ZP.fetch((0, a.iM)(window.id), {
                    action: "remove",
                    topicId: "",
                  }),
                  window.close();
              }),
            D = () =>
              m(this, void 0, void 0, function* () {
                x.value.length &&
                  (yield l.ZP.fetch((0, a.iM)(window.id), {
                    action: "set",
                    twoWay: _.value,
                    topicId: x.value[0],
                  }),
                  window.close());
              }),
            L = (e) => (e.imageSource ? `[${o("Image")}] ${e.title}` : e.title),
            M = (e) => {
              "Enter" === e.code && (e.preventDefault(), D());
            },
            F = () => {
              window.addEventListener("keydown", M);
            },
            N = () => {
              window.removeEventListener("keydown", M);
            };
          function W(e, t, n) {
            let r = t(e);
            for (const i of e.children) r = n(r, W(i, t, n));
            for (const i of e.detachedChildren) r = n(r, W(i, t, n));
            for (const i of e.summaries.map((e) => e.topic))
              r = n(r, W(i, t, n));
            return e.callout && (r = n(r, W(e.callout, t, n))), r;
          }
          const z = (e) => {
              if (!e || e.length <= 0) return !1;
              return !(q()[Symbol.search](e) < 0);
            },
            B = (e) => {
              const t = q()[Symbol.search](e);
              if (t < 0) return e;
              const n = e.substring(t - 16, t + 16);
              return t - 16 > 0 ? `...${n}` : t + 16 < e.length ? `${n}...` : n;
            },
            q = () => H(g.value, !1, !0, !1),
            V = (e) => e.replace(/[-\\{}*+?|^$.[\]()#]/g, "\\$&"),
            H = (e, t, n, r) => {
              if (!e) return;
              (e = V(e)),
                t &&
                  (/\B/.test(e.charAt(0)) || (e = "\\b" + e),
                  /\B/.test(e.charAt(e.length - 1)) || (e += "\\b"));
              let i = "";
              return n || (i += "i"), r && (i += "g"), new RegExp(e, i);
            };
          return (
            (0, u.q)(k, { remove: P, close: A, insertTopicLink: D }),
            {
              __sfc: !0,
              containerEl: t,
              modalData: n,
              sheets: r,
              $T: o,
              searchKey: g,
              selectedIndex: y,
              hasTopicLink: b,
              checkedTwoWayLink: _,
              xmindObjectId: v,
              selected: x,
              searchTopicInput: w,
              sheetIds: S,
              touchBarItems: k,
              workbookData: T,
              searchResult: R,
              isSearchMode: O,
              isEmpty: C,
              emptyText: I,
              searchIconImage: j,
              deserializeDocument: E,
              close: A,
              remove: P,
              insertTopicLink: D,
              formatTopicTitle: L,
              handleTreeListKeyDown: M,
              startKeyListener: F,
              stopKeyListener: N,
              handleShowInputMenu: () => (0, d.Sr)(w.value),
              travelTopic: W,
              testTitle: z,
              shortenTitle: B,
              getRegex: q,
              escapeRegExpCharacters: V,
              createRegExp: H,
              handleSelect: (e) => {
                x.value = [e.value];
              },
              CommonNonePanel: h.Z,
              TreeListV2: p.Z,
            }
          );
        },
      });
      const y = (0, n(51900).Z)(
        g,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t("div", { staticClass: "uk-window uk-window-dialog" }, [
            t(
              "div",
              {
                staticClass: "uk-window-title-bar uk-window-title-bar-floating",
              },
              [t("window-control-button-group")],
              1,
            ),
            e._v(" "),
            t(
              "div",
              {
                staticClass:
                  "uk-window-body uk-flex uk-flex-row uk-padding uk-flex-column",
              },
              [
                t("div", { staticClass: "topiclink-search" }, [
                  t("p", { staticClass: "topiclink-search-title" }, [
                    e._v(
                      "\n        " +
                        e._s(n.$T("Select a topic to insert link.")) +
                        "\n      ",
                    ),
                  ]),
                  e._v(" "),
                  t(
                    "div",
                    {
                      staticClass:
                        "uk-position-relative uk-width-1-1 uk-margin-small",
                    },
                    [
                      t("img", {
                        staticClass: "uk-position-absolute",
                        staticStyle: {
                          top: "50%",
                          left: "4px",
                          transform: "translateY(-50%)",
                        },
                        attrs: {
                          draggable: "false",
                          src: n.searchIconImage,
                          "uk-svg": "",
                        },
                      }),
                      e._v(" "),
                      t("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: n.searchKey,
                            expression: "searchKey",
                          },
                        ],
                        ref: "searchTopicInput",
                        staticClass: "uk-input",
                        staticStyle: { "padding-left": "20px" },
                        attrs: {
                          autofocus: "",
                          type: "text",
                          placeholder: n.$T("Find"),
                        },
                        domProps: { value: n.searchKey },
                        on: {
                          contextmenu: function (e) {
                            return n.handleShowInputMenu();
                          },
                          input: function (e) {
                            e.target.composing ||
                              (n.searchKey = e.target.value);
                          },
                        },
                      }),
                    ],
                  ),
                ]),
                e._v(" "),
                n.isSearchMode && n.isEmpty
                  ? t(
                      "div",
                      {
                        staticClass:
                          "uk-flex uk-height-1-1 uk-background-default uk-panel uk-panel-scrollable",
                      },
                      [
                        t(n.CommonNonePanel, {
                          staticStyle: { height: "unset" },
                          attrs: { type: "NO_RESULT" },
                        }),
                      ],
                      1,
                    )
                  : t(
                      "div",
                      {
                        ref: "containerEl",
                        staticClass:
                          "uk-background-default uk-height-expand uk-overflow-auto uk-panel uk-panel-scrollable uk-padding-remove uk-text-nowrap",
                      },
                      [
                        t(
                          "keep-alive",
                          [
                            t(n.TreeListV2, {
                              attrs: {
                                "high-performance-mode": !n.isSearchMode,
                                container: n.containerEl,
                                "model-value": n.selected,
                                type: "radio",
                                items: n.isSearchMode
                                  ? n.searchResult
                                  : n.workbookData,
                              },
                              on: { click: n.handleSelect },
                              scopedSlots: e._u([
                                {
                                  key: "item",
                                  fn: function ({ item: t }) {
                                    return [
                                      e._v(
                                        "\n            " +
                                          e._s(t.text ? t.text : n.emptyText) +
                                          "\n          ",
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
                e._v(" "),
                t("div", { staticStyle: { "margin-top": "8px" } }, [
                  t("label", [
                    t("input", {
                      staticClass: "uk-checkbox",
                      attrs: { type: "checkbox" },
                      domProps: { checked: n.checkedTwoWayLink },
                      on: {
                        change: function (e) {
                          n.checkedTwoWayLink = !n.checkedTwoWayLink;
                        },
                      },
                    }),
                    e._v(" "),
                    t("span", [e._v(e._s(n.$T("Add Link for Both Topics")))]),
                  ]),
                ]),
              ],
            ),
            e._v(" "),
            t("div", { staticClass: "uk-window-button-bar" }, [
              t("div", { staticClass: "uk-button-group" }, [
                t(
                  "button",
                  {
                    staticClass: "uk-button uk-button-primary",
                    attrs: {
                      type: "button",
                      disabled:
                        !n.selected.length ||
                        n.sheetIds.includes(n.selected[0]),
                    },
                    on: { click: n.insertTopicLink },
                  },
                  [e._v("\n        " + e._s(n.$T("Insert")) + "\n      ")],
                ),
                e._v(" "),
                t(
                  "button",
                  {
                    staticClass: "uk-button uk-button-default",
                    attrs: { type: "button" },
                    on: { click: n.close },
                  },
                  [e._v("\n        " + e._s(n.$T("Cancel")) + "\n      ")],
                ),
              ]),
              e._v(" "),
              n.hasTopicLink
                ? t(
                    "button",
                    {
                      staticClass: "uk-button uk-button-default",
                      on: { click: n.remove },
                    },
                    [e._v("\n      " + e._s(n.$T("Remove")) + "\n    ")],
                  )
                : e._e(),
            ]),
          ]);
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      (0, r.Z)(y, { name: "dialog-topiclink" });
    },
    13382: (e, t, n) => {
      "use strict";
      n.d(t, {
        G$: () => S,
        N0: () => g,
        Pg: () => T,
        R2: () => w,
        W5: () => x,
        ZZ: () => b,
        am: () => v,
        eq: () => _,
        yr: () => k,
      });
      var r = n(71017),
        i = n.n(r),
        o = n(67657),
        s = n(7104),
        a = n(86633),
        l = n(33394),
        c = n(94593),
        u = n(90435),
        d = n(54856),
        h = n(5893),
        p = n(50965),
        f = n(92636);
      const m = (0, a.ZP)("dialog");
      async function g(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = i().join((0, s.bY)(), e.icon));
        const t = o.BrowserWindow.fromId(window.id);
        return [o.dialog.showMessageBoxSync(t, e)];
      }
      async function y(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = i().join((0, s.bY)(), e.icon));
        const t = o.BrowserWindow.fromId(window.id),
          { response: n, checkboxChecked: r } = await o.dialog.showMessageBox(
            t,
            e,
          );
        return [n, r];
      }
      async function b(e) {
        (e = Object.assign({ securityScopedBookmarks: !0 }, e || {}))
          .suggestPath &&
          !e.defaultPath &&
          ((e.defaultPath = v(e.suggestPath, e.filters)), delete e.suggestPath);
        const {
          canceled: t,
          filePath: n,
          bookmark: r,
        } = await o.dialog.showSaveDialog(o.getCurrentWindow(), e);
        return t
          ? null
          : (n && r && (await l.Z.bindBookmark({ fp: n, bookmark: r })),
            n && (0, p.km)().setLastSaveDirectory(i().dirname(n)),
            n);
      }
      async function _({ folderName: e, dialogOptions: t }) {
        let n = "";
        (t = Object.assign({ securityScopedBookmarks: !0 }, t || {}))
          .defaultPath || (t.defaultPath = v({}));
        const {
          canceled: r,
          filePaths: s,
          bookmark: a,
        } = await o.dialog.showOpenDialog(o.getCurrentWindow(), t);
        if (r) return null;
        if (
          ((n = s[0]),
          s.length > 0 && a && (await l.Z.bindBookmark({ fp: n, bookmark: a })),
          "string" == typeof e)
        ) {
          let t = e.replace(/[\\/]/g, "");
          0, (n = i().join(n, t));
        }
        return (
          c.Z.existsSync(n) || c.Z.ensureDir(n),
          n && (0, p.km)().setLastSaveDirectory(n),
          n
        );
      }
      function v(
        { doc: e = null, oldDoc: t = null, suggestedName: n = null },
        r = null,
      ) {
        let s, a;
        if (
          (!s && n && (s = (0, h.N6)(n.toString())),
          !s &&
            e &&
            e.title &&
            e.source &&
            !e.source.startsWith("new://") &&
            (s = (0, h.N6)(e.title.toString())),
          !s &&
            t &&
            t.title &&
            t.source &&
            !t.source.startsWith("new://") &&
            (s = (0, h.N6)(t.title.toString())),
          s && Array.isArray(r))
        ) {
          const e = r[0] && r[0].extensions;
          Array.isArray(e) && e.length > 0 && (s = `${s}.${e[0]}`);
        }
        if (!a && t && t.source && t.source.startsWith("file://")) {
          let e = t.source.slice(7);
          0, (a = i().dirname(e));
        }
        if (
          (!a &&
            (0, p.km)().lastSaveDirectory &&
            (a = (0, p.km)().lastSaveDirectory),
          !a)
        )
          try {
            a = o.app.getPath("documents");
          } catch (e) {
            m.info(e);
          }
        return a && s ? i().join(a, s) : a || s;
      }
      async function x(e) {
        e.$withUIKit((t) => {
          const n = `\n        <button\n        class="uk-button uk-button-text uk-text-nowrap"\n        style="word-break: keep-all;"\n        focustrigger="cannotGetFocusByMouse">\n          ${e.$T("OK")}\n        </button>\n        </div>`;
          t.toast({
            message: e.$T(
              "The map style has been updated for your current version of Xmind.",
            ),
            pos: "bottom-center",
            timeout: 5e3,
            btn: n,
            style: { width: "500px", height: "auto", padding: "10px 20px" },
            btnClick: t.toast.clearAll(),
          });
        });
      }
      async function w(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("OK"),
          n = e("Get Latest Version"),
          r = [t, n],
          [i] = await y({
            title: "Xmind",
            message: e(
              "The map style in this file might vary since it was created in a newer version of Xmind.",
            ),
            detail: e(
              "You can continue to open the file or update to the latest version for better compatibility.",
            ),
            buttons: r,
            defaultId: r.indexOf(n),
            cancelId: r.indexOf(t),
            noLink: !0,
          });
        i === r.indexOf(n) && u.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function S(e) {
        if (((e = "function" != typeof e ? (e) => e : e), f.zr))
          return await y({
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
          n = e("Get Latest Version"),
          r = [n, t],
          [i] = await y({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file was created by a newer version of Xmind. Please update Xmind and try to open it again.",
            ),
            buttons: r,
            defaultId: r.indexOf(n),
            cancelId: r.indexOf(t),
            noLink: !0,
          });
        i === r.indexOf(n) && u.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function k(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Save"),
          n = e("Save as"),
          r = e("Cancel"),
          i = [];
        i.push(t, r, n);
        let [o] = await y({
          type: "none",
          title: "Xmind",
          message: e("Saving file from Xmind"),
          detail: e(
            "Once you save the file, it cannot be opened normally in older versions like $1.",
            "Xmind 22.11",
          ),
          buttons: i,
          defaultId: i.indexOf(n),
          cancelId: i.indexOf(r),
          noLink: !0,
        });
        const s = o === i.indexOf(t),
          a = o === i.indexOf(n);
        return { toSave: s, toSaveAs: a, toCancel: !s && !a };
      }
      async function T(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Fix ＆ Open"),
          n = e("Cancel"),
          r = [t, n],
          [i] = await y({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file may contain invalid data structure or have become corrupted. Xmind can try to fix the data structure to help you open it.",
            ),
            buttons: r,
            defaultId: r.indexOf(t),
            cancelId: r.indexOf(n),
            noLink: !0,
          });
        return { toFix: i === r.indexOf(t), toCancel: i === r.indexOf(n) };
      }
    },
    33394: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => f });
      var r = n(57147),
        i = n.n(r),
        o = n(71017),
        s = n.n(o),
        a = n(73837),
        l = n(86633),
        c = n(16704),
        u = n(56222);
      const d = (0, l.ZP)("renderer:fs");
      async function h(e) {
        return (0, u.A)("OBTAIN_READ_WRITE_ACCESS", e);
      }
      async function p(e) {
        return (0, u.A)("RELEASE_READ_WRITE_ACCESS", e);
      }
      const f = {
        read: async function (e) {
          if (!s().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const t = await (async function (e) {
            return (0, u.A)("OBTAIN_READ_LOCK", e);
          })(e);
          try {
            return await (0, a.promisify)(i().readFile)(e);
          } catch (t) {
            d.error(`path(${e}) read error: ${(0, c.SC)(t)}`);
            try {
              if (!(await h(e))) throw new Error(`No access to '${e}'`);
              return await (0, a.promisify)(i().readFile)(e);
            } catch (e) {
              throw e;
            } finally {
              await p(e);
            }
          } finally {
            await (async function (e) {
              return (0, u.A)("RELEASE_READ_LOCK", e);
            })(t);
          }
        },
        write: async function (e, t) {
          if (!s().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const n = await (async function (e) {
            return (0, u.A)("OBTAIN_WRITE_LOCK", e);
          })(e);
          try {
            return await (0, a.promisify)(i().writeFile)(e, t);
          } catch (n) {
            d.error(`path(${e}) write error: ${(0, c.SC)(n)}`);
            try {
              if (!(await h(e))) throw new Error(`No access to '${e}'`);
              return await (0, a.promisify)(i().writeFile)(e, t);
            } catch (e) {
              throw e;
            } finally {
              await p(e);
            }
          } finally {
            await (async function (e) {
              return (0, u.A)("RELEASE_WRITE_LOCK", e);
            })(n);
          }
        },
        bindBookmark: async function ({ fp: e, bookmark: t } = {}) {
          return (0, u.A)("BIND_BOOKMARK", { fp: e, bookmark: t });
        },
        hasRWAccess: async function (e) {
          return (0, u.A)("HAS_READ_WRITE_ACCESS", e);
        },
        obtainRWAccessFromOS: h,
        releaseRWAccessFromOS: p,
      };
    },
    95246: (e, t, n) => {
      "use strict";
      n.d(t, {
        RS: () => d,
        lF: () => p,
        JX: () => h,
        gP: () => g,
        sF: () => u,
        GI: () => f,
        Ni: () => m,
        mi: () => w,
        QC: () => b,
        Sr: () => _,
        yB: () => x,
        SX: () => v,
        RL: () => y,
      });
      n(13382), n(81296), n(90435), n(54856), n(71017);
      var r = n(72298),
        i = n(67657),
        o = (n(92636), n(41809));
      require("posthtml");
      var s = n(97234),
        a = n(26601),
        l = n(50965);
      const c = { cache: !1 },
        u = (e) => {
          const t = (e) => parseInt(e, 16);
          if (
            "string" == typeof (e = (0, s.Z)(e).toHexString()) &&
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
          let n = null;
          const r = {};
          return function (e = "", i = "") {
            if (t.cache && r[e]) return r[e];
            n || (n = document.createElement("canvas"));
            const o = n.getContext("2d");
            o.font = i;
            const s = o.measureText(e);
            return t.cache && (r[e] = s.width), s.width;
          };
        };
      function h() {
        const e = i.screen.getAllDisplays().map((e) => e.scaleFactor);
        return Math.max.apply(null, e);
      }
      const p = (e, t = 1) => {
        const n = h(),
          r = (0, o.Hv)(e, 72 * n * t);
        return Buffer.from(r.slice(22), "base64");
      };
      function f(e) {
        let t = parseInt(e);
        return Number.isInteger(t) ? t : 100;
      }
      function m(e) {
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
      function y(e, t) {
        let n = (0, l.f7)().keybindingByCommandIdAndGroup(t);
        const r = [];
        return (
          "string" == typeof n &&
            n.split("+").forEach((e) => {
              let t = e;
              "=" === t && (t = "+"), t && r.push(t);
            }),
          r.length > 0 ? `${e} ${r.join(" ")}` : e
        );
      }
      const b = (e, t) => {
          i.getCurrentWindow().setSize(e, t);
        },
        _ = (e) => {
          const t = (e, ...t) => (0, l.JE)().T(e, ...t),
            n = i.Menu,
            o = i.MenuItem,
            s = new n();
          setTimeout(() => {
            const n = document.getSelection().toString(),
              a = r.clipboard.readText();
            s.append(
              new o({
                label: t("Cut"),
                enabled: Boolean(n),
                click: () => document.execCommand("cut"),
              }),
            ),
              s.append(
                new o({
                  label: t("Copy"),
                  enabled: Boolean(n),
                  click: () => document.execCommand("copy"),
                }),
              ),
              s.append(
                new o({
                  label: t("Paste"),
                  enabled: Boolean(a),
                  click: () => document.execCommand("paste"),
                }),
              ),
              s.append(new o({ type: "separator" })),
              s.append(
                new o({
                  label: t("Select All"),
                  enabled: Boolean(e),
                  click: () => document.execCommand("selectAll"),
                }),
              ),
              s.popup({ window: i.getCurrentWindow() });
          }, 50);
        };
      async function v() {
        await new Promise((e) =>
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              requestIdleCallback(e);
            });
          }),
        );
      }
      const x = (e, t) => a.Z.test({ width: e, height: t, sizes: [e, t] }),
        w = async (e, t, n = 1) => {
          if (x(e * n, t * n)) return n;
          const r = await a.Z.maxWidth({ usePromise: !0 }),
            i = await a.Z.maxHeight({ usePromise: !0 }),
            o = await a.Z.maxArea({ usePromise: !0 }),
            s = r.width,
            l = i.height,
            c = o.width * o.height;
          let u = n;
          if (e * n > s) {
            const t = s / e;
            u = Math.min(u, t);
          }
          if (t * n > l) {
            const e = l / t;
            u = Math.min(u, e);
          }
          if (e * n * t * n > c) {
            const n = Math.sqrt(c / (e * t));
            u = Math.min(u, n);
          }
          return u;
        };
    },
    24034: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => i });
      var r = n(2954);
      n(92636), n(54856), n(16704), n(50965), n(18446), n(90435);
      function i(e, t, n = !1) {
        (0, r.iH)({});
        let i = () => {};
        return { updateTouchBarItems: i };
      }
    },
    60534: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => l });
      var r,
        i = n(2954),
        o = n(50965),
        s = n(69931);
      !(function (e) {
        (e.NO_RESULT = "NO_RESULT"),
          (e.NO_RESULT_AS_NETWORK = "NO_RESULT_AS_NETWORK"),
          (e.NO_NOTE = "NO_NOTE"),
          (e.NO_TAG = "NO_TAG"),
          (e.NO_SELECTION = "NO_SELECTION"),
          (e.NO_FORMAT_AVAILABLE = "NO_FORMAT_AVAILABLE"),
          (e.SLIDE_NO_SELECTION = "SLIDE_NO_SELECTION"),
          (e.BULB = "BULB");
      })(r || (r = {}));
      const a = (0, i.aZ)({
        __name: "common-none-panel",
        props: {
          type: { default: "NO_RESULT" },
          sectionStyle: { default: "" },
        },
        setup(e) {
          const t = e,
            n = (e, ...t) => (0, o.JE)().T(e, ...t),
            a = (0, i.Fl)(() => ({
              [r.NO_RESULT]: {
                image: (0, s.ju)(
                  "static/images/empty-panel-icon/no-result.svg",
                ),
                text: n("No results found."),
                spacing: "-1px",
              },
              [r.NO_RESULT_AS_NETWORK]: {
                image: (0, s.ju)(
                  "static/images/empty-panel-icon/no-result.svg",
                ),
                text: n(
                  "Please check your network connection and try again later.",
                ),
                spacing: "-1px",
              },
              [r.NO_NOTE]: {
                image: (0, s.ju)("static/images/empty-panel-icon/no-note.svg"),
                text: n("No note exists."),
                spacing: "-3px",
              },
              [r.NO_TAG]: {
                image: (0, s.ju)("static/images/empty-panel-icon/no-tag.svg"),
                text: n("No marker, label or task exists."),
                spacing: "0px",
              },
              [r.NO_SELECTION]: {
                image: (0, s.ju)(
                  "static/images/empty-panel-icon/empty-selection.svg",
                ),
                text: n("Select an object to format."),
                spacing: "-2px",
              },
              [r.NO_FORMAT_AVAILABLE]: {
                image: (0, s.ju)(
                  "static/images/empty-panel-icon/no-format-available.svg",
                ),
                text: n("This object can't be formatted."),
                spacing: "5px",
              },
              [r.SLIDE_NO_SELECTION]: {
                image: (0, s.ju)(
                  "static/images/empty-panel-icon/slide-empty-selection.svg",
                ),
                text: n("Select a topic to format."),
                spacing: "-2px",
              },
              [r.BULB]: {
                image: (0, s.ju)(
                  "static/images/empty-panel-icon/zen-mode-bulb.svg",
                ),
                text: n(
                  "Please switch to original appearance to enable format options.",
                ),
                spacing: "5px",
              },
            })),
            l = (0, i.Fl)(() => a.value[t.type] || a.value[r.NO_RESULT]);
          return {
            __sfc: !0,
            NonePanelType: r,
            props: t,
            $T: n,
            noneTabs: a,
            noneTab: l,
          };
        },
      });
      const l = (0, n(51900).Z)(
        a,
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
      n.d(t, { Z: () => l });
      var r = n(2954),
        i = n(95246),
        o = n(50965),
        s = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function s(e) {
              try {
                l(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, a);
            }
            l((r = r.apply(e, t || [])).next());
          });
        };
      const a = (0, r.aZ)({
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
          const a = e,
            { T: l } = (0, o.JE)(),
            c = (0, i.RS)(),
            u = (e) =>
              c(
                e,
                '13px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, Roboto, "Helvetica Neue", Arial, sans-serif',
              ),
            d = (0, r.iH)({}),
            h = (0, r.iH)(new Set()),
            p = (0, r.iH)({ scrollTop: 0, clientHeight: 100 });
          (0, r.YP)(
            () => a.modelValue,
            (e, t) => {
              null != e && e !== t && (h.value = new Set(e));
            },
          );
          const f = (e) => {
              const t = e.target;
              p.value = {
                scrollTop: t.scrollTop,
                clientHeight: t.clientHeight,
              };
            },
            m = (e = a.container) => {
              e &&
                (p.value = {
                  scrollTop: e.scrollTop,
                  clientHeight: e.clientHeight,
                });
            };
          (0, r.YP)(
            () => a.container,
            (e) => {
              e && (e.addEventListener("scroll", f), m(e));
            },
          );
          const g = () => {
            m();
          };
          (0, r.bv)(() => {
            window.addEventListener("resize", g);
          }),
            (0, r.dl)(() => {
              m();
            }),
            (0, r.Jd)(() => {
              window.removeEventListener("resize", g),
                a.container && a.container.removeEventListener("scroll", f);
            });
          const y = (0, r.Fl)(() => l("<Empty Text>")),
            b = (0, r.Fl)(() => {
              const { items: e, indent: t } = a;
              if (!e || !e.length) return [];
              const n = "$ROOT_VALUE",
                r = [],
                i = (e, t, o = []) => {
                  const s = e.value === n,
                    a = e.unindent ? t : t + 1;
                  if (
                    (s ||
                      r.push({
                        value: e.value,
                        current: e,
                        indent: a,
                        parentValues: o.map((e) => e.value),
                      }),
                    e.items)
                  )
                    for (let t = 0; t < e.items.length; t++) {
                      const n = e.items[t],
                        r = o.concat(s ? [] : e);
                      i(n, a, r);
                    }
                };
              return (
                i({ items: e, value: n }, t || -1),
                r.forEach((e) => {
                  const t = 16 * e.indent + 16,
                    n = a.width - (t + 16),
                    r = u(e.current.text) + 10;
                  if (
                    ((e.containerWidth = n),
                    (e.textWidth = r),
                    (e.singleLineWidth = t + 16 + r),
                    a.textWrap)
                  ) {
                    const t = Math.ceil(r / n);
                    e.allocatedLine = t;
                  } else e.allocatedLine = 1;
                }),
                r
              );
            }),
            _ = (0, r.Fl)(() => {
              const { value: e } = b,
                t = (e) => w(e) && x(e),
                n = {},
                r = {},
                i = {};
              for (let t = 0; t < e.length; t++) {
                const r = e[t];
                n[r.value] = r;
              }
              for (let o = 0; o < e.length; o++) {
                const s = e[o],
                  a = s.parentValues.join(",");
                a in i
                  ? (r[s.value] = i[a])
                  : (i[a] = r[s.value] =
                      s.parentValues.every((e) => t(n[e].current)));
              }
              return r;
            }),
            v = (0, r.Fl)(() => {
              let e = b.value.filter((e) => !!_.value[e.value]);
              if (!a.highPerformanceMode) return { items: e, totalHeight: 0 };
              let t = 0,
                n = 0;
              return (
                e.forEach((e) => {
                  var r, i;
                  (e.currentTop = `${t}px`), (e.currentTopNumber = t);
                  const o = 12 + 14.4 * e.allocatedLine,
                    s = [],
                    l =
                      e.textWidth /
                      (null !==
                        (i =
                          null === (r = e.current.text) || void 0 === r
                            ? void 0
                            : r.length) && void 0 !== i
                        ? i
                        : 0),
                    c = Math.floor(e.containerWidth / l);
                  if (a.textWrap)
                    for (let t = 0; t < e.allocatedLine; t++)
                      s.push(e.current.text.slice(t * c, (t + 1) * c));
                  else
                    (n = Math.max(e.singleLineWidth, n)),
                      s.push(e.current.text);
                  (e.textLines = s),
                    1 !== s.length || s[0] || (s[0] = y.value),
                    (t += o);
                }),
                (e = e.filter(
                  (e) =>
                    !(e.currentTopNumber < p.value.scrollTop - 100) &&
                    !(
                      e.currentTopNumber >
                      p.value.scrollTop + p.value.clientHeight + 100
                    ),
                )),
                { items: e, totalHeight: t, commonWidth: n }
              );
            }),
            x = (e) =>
              e.value in d.value
                ? Boolean(d.value[e.value])
                : Boolean(e.expanded),
            w = (e) =>
              "items" in e && Array.isArray(e.items) && e.items.length > 0,
            S = (e) => h.value.has(e.value),
            k = (e) => {
              n("click", e);
            },
            T = (e) => {
              (d.value = Object.assign(Object.assign({}, d.value), {
                [e.value]: !x(e),
              })),
                n("toggleitem", e.value);
            },
            R = (e) =>
              s(this, void 0, void 0, function* () {
                const t = new Set([e.value]);
                (h.value = t), n("update:modelValue", Array.from(t)), k(e);
              }),
            O = (e, t) =>
              s(this, void 0, void 0, function* () {
                t.preventDefault(),
                  t.stopPropagation(),
                  T(e),
                  yield (0, r.Y3)(),
                  t.currentTarget.parentNode.focus();
              }),
            C = (e) => {
              if (!a.allowDirectionKey) return;
              const t = Array.from(h.value);
              let n = null;
              if (t.length) {
                const r = v.value.items.findIndex((e) => e.value === t[0]);
                n = v.value.items[r + ("up" === e ? -1 : 1)];
              } else v.value.items.find((e) => !e.current.slotType);
              if (n && !n.current.slotType) {
                R(n.current);
                const e = document.querySelector(
                  `button[data-value="${n.value}"]`,
                );
                e && e.focus();
              }
            };
          return (
            t({
              emptyText: y,
              currentItems: b,
              visibleItems: _,
              displayData: v,
              isItemExpandable: w,
              isItemExpanded: x,
              isItemChecked: S,
              onToggleClick: O,
              onClickButton: R,
              onKeydown: C,
            }),
            {
              __sfc: !0,
              $T: l,
              getTextWidthFn: c,
              getTextWidth: u,
              props: a,
              emit: n,
              itemExpansions: d,
              internalValue: h,
              scrollInfo: p,
              containerScrollEventHandler: f,
              updateScrollInfoByPropsContainer: m,
              windowResizeHandler: g,
              emptyText: y,
              currentItems: b,
              visibleItems: _,
              displayData: v,
              isItemExpanded: x,
              isItemExpandable: w,
              isItemChecked: S,
              emitClick: k,
              toggleItem: T,
              onClickButton: R,
              onToggleClick: O,
              onKeydown: C,
            }
          );
        },
      });
      const l = (0, n(51900).Z)(
        a,
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
            e._l(n.displayData.items, function (r) {
              return t(
                "li",
                {
                  key: r.value,
                  class: { "uk-checked": n.isItemChecked(r.current) },
                  staticStyle: {
                    "min-width": "100%",
                    "word-break": "break-all",
                  },
                  style: e.highPerformanceMode
                    ? {
                        position: "absolute",
                        top: r.currentTop,
                        width: e.textWrap
                          ? "100%"
                          : `${n.displayData.commonWidth}px`,
                      }
                    : { width: "100%" },
                },
                [
                  e._t(
                    r.current.slotType,
                    function () {
                      return [
                        t(
                          "button",
                          {
                            staticClass: "uk-tree-list-item",
                            class: {
                              "uk-checked": n.isItemChecked(r.current),
                              "uk-focus": n.isItemChecked(r.current),
                            },
                            style: {
                              "padding-left": 16 * r.indent + 16 + "px",
                            },
                            attrs: { type: "button", "data-value": r.value },
                            on: {
                              click: function (e) {
                                return n.onClickButton(r.current);
                              },
                            },
                          },
                          [
                            e.highPerformanceMode
                              ? e._l(r.textLines, function (n, r) {
                                  return t(
                                    "p",
                                    {
                                      key: r,
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
                                      e._s(r.current.text || n.emptyText) +
                                      "\n        ",
                                  ),
                                ],
                          ],
                          2,
                        ),
                      ];
                    },
                    {
                      data: r.current,
                      checked: n.isItemChecked(r.current),
                      index: e.index,
                      offset: 16 * r.indent + 16,
                      onClick: () => n.onClickButton(r.current),
                    },
                  ),
                  e._v(" "),
                  n.isItemExpandable(r.current)
                    ? t("a", {
                        staticClass:
                          "uk-tree-list-toggle uk-icon uk-button uk-tree-list-toggle-icon uk-button-icon",
                        style: {
                          left: 16 * r.indent + "px",
                          opacity:
                            "number" == typeof r.current.triangleOpacity
                              ? r.current.triangleOpacity
                              : 0.5,
                        },
                        attrs: {
                          href: "javascript: void 0;",
                          tabindex: "-1",
                          "uk-icon": n.isItemExpanded(r.current)
                            ? "triangle-down"
                            : "triangle-right",
                        },
                        on: {
                          click: function (e) {
                            return n.onToggleClick(r.current, e);
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
    83556: (e, t, n) => {
      "use strict";
      n.d(t, {
        ER: () => c,
        EW: () => l,
        WX: () => a,
        Zf: () => s,
        s_: () => i,
        yo: () => o,
      });
      var r = n(6550);
      function i() {
        return new r.t3();
      }
      function o() {
        return new r.eN();
      }
      function s() {
        return new r.GO();
      }
      function a() {
        return new r.XZ();
      }
      function l() {
        return new r.r3();
      }
      function c() {
        return new r.gn();
      }
    },
    6550: (e, t, n) => {
      "use strict";
      n.d(t, {
        GO: () => u,
        XZ: () => d,
        eN: () => c,
        gn: () => p,
        r3: () => h,
        t3: () => l,
      });
      var r = n(71381),
        i = n(46924),
        o = n(65893),
        s = n(57358),
        a = n(87494);
      class l {
        _patch = { metadata: { [r.KZ.DataStructureVersion]: a.iO } };
        metadataFor(e, t) {
          return (
            (this._patch.metadata = { ...this._patch.metadata, [e]: t }), this
          );
        }
        sheets(e) {
          return (
            (this._patch.sheets = (Array.isArray(e) ? e : e.sheets ?? []).map(
              (e) => (0, o.xp)(e, c).patch,
            )),
            this
          );
        }
        build() {
          return new i.sv((0, o.vA)(this._patch));
        }
        Sheet() {
          return new c();
        }
        Topic() {
          return new u();
        }
        Relationship() {
          return new d();
        }
        Boundary() {
          return new h();
        }
        Summary() {
          return new p();
        }
        Callout() {
          return new u();
        }
      }
      class c {
        _patch;
        constructor(e) {
          this._patch = {
            ...e,
            id: e?.id ?? (0, o.Vj)(),
            rootTopic: e?.rootTopic ?? new u().patch,
          };
        }
        get id() {
          return this._patch.id;
        }
        get patch() {
          return this._patch;
        }
        rootTopic(e) {
          return (this._patch.rootTopic = (0, o.xp)(e, u).patch), this;
        }
        relationships(e) {
          return (
            (this._patch.relationships = e.map((e) => (0, o.xp)(e, d).patch)),
            this
          );
        }
        attrs(e) {
          return Object.assign(this._patch, (0, s.zO)(e)), this;
        }
        extensionBy(e, t) {
          return (
            this._patch.extensions || (this._patch.extensions = {}),
            (this._patch.extensions[e] = (0, s.zO)(t)),
            this
          );
        }
        markerDescriptionFor(e, t) {
          return (
            this._patch.legendMarkers || (this._patch.legendMarkers = {}),
            Object.assign(this._patch.legendMarkers, { [e]: t }),
            this
          );
        }
        styleFor(e, t) {
          return (
            (this._patch.themeStyles = {
              ...this._patch.themeStyles,
              [e]: t ? { ...t } : null,
            }),
            this
          );
        }
        Topic() {
          return new u();
        }
        Relationship() {
          return new d();
        }
        Boundary() {
          return new h();
        }
        Summary() {
          return new p();
        }
        Callout() {
          return new u();
        }
      }
      class u {
        _patch;
        _ownerSummaryPatch;
        constructor(e) {
          e && "topic" in e
            ? ((this._patch = (0, o.yR)(e.topic)),
              (this._ownerSummaryPatch = e))
            : (this._patch = { ...e, id: e?.id ?? (0, o.Vj)() });
        }
        get id() {
          return this._patch.id;
        }
        get patch() {
          return this._patch;
        }
        extensionBy(e, t) {
          return (
            this._patch.extensions || (this._patch.extensions = {}),
            (this._patch.extensions[e] = (0, s.zO)(t)),
            this
          );
        }
        attrs(e) {
          return Object.assign(this._patch, (0, s.zO)(e)), this;
        }
        children(e) {
          return (
            (this._patch.children = (Array.isArray(e) ? e : e.topics ?? []).map(
              (e) => (0, o.xp)(e, u).patch,
            )),
            (this._patch.childrenAssociations = Array.isArray(e)
              ? { boundaries: [], summaries: [], relationships: [] }
              : {
                  boundaries: (e.boundaries ?? []).map(
                    (e) => (0, o.xp)(e, h).patch,
                  ),
                  summaries: (e.summaries ?? []).map(
                    (e) => (0, o.xp)(e, p).patch,
                  ),
                  relationships: (e.relationships ?? []).map(
                    (e) => (0, o.xp)(e, d).patch,
                  ),
                }),
            this
          );
        }
        detachedChildren(e) {
          return (
            (this._patch.detachedChildren = (
              Array.isArray(e) ? e : e.topics ?? []
            ).map((e) => (0, o.xp)(e, u).patch)),
            (this._patch.detachedChildrenAssociations = Array.isArray(e)
              ? { boundaries: [], summaries: [], relationships: [] }
              : {
                  boundaries: (e.boundaries ?? []).map(
                    (e) => (0, o.xp)(e, h).patch,
                  ),
                  summaries: (e.summaries ?? []).map(
                    (e) => (0, o.xp)(e, p).patch,
                  ),
                  relationships: (e.relationships ?? []).map(
                    (e) => (0, o.xp)(e, d).patch,
                  ),
                }),
            this
          );
        }
        callout(e) {
          return (this._patch.callout = (0, o.xp)(e, u).patch), this;
        }
        boundaries(e) {
          return (
            (this._patch.boundaries = e.map((e) => (0, o.xp)(e, h).patch)), this
          );
        }
        summaries(e) {
          return (
            (this._patch.summaries = e.map((e) => (0, o.xp)(e, p).patch)), this
          );
        }
        asSummary() {
          return new p(this._ownerSummaryPatch ?? { topic: this._patch });
        }
      }
      class d {
        _patch;
        constructor(e) {
          this._patch = { ...e, id: e?.id ?? (0, o.Vj)() };
        }
        get id() {
          return this._patch.id;
        }
        get patch() {
          return this._patch;
        }
        target(e) {
          return (this._patch.target = e), this;
        }
        source(e) {
          return (this._patch.source = e), this;
        }
        attrs(e) {
          return Object.assign(this._patch, (0, s.zO)(e)), this;
        }
      }
      class h {
        _patch;
        constructor(e) {
          this._patch = { ...e, id: e?.id ?? (0, o.Vj)() };
        }
        get id() {
          return this._patch.id;
        }
        get patch() {
          return this._patch;
        }
        rangeStart(e) {
          return (this._patch.rangeStart = e), this;
        }
        rangeEnd(e) {
          return (this._patch.rangeEnd = e), this;
        }
        rangeType(e) {
          return (this._patch.rangeType = e), this;
        }
        attrs(e) {
          return Object.assign(this._patch, (0, s.zO)(e)), this;
        }
      }
      class p {
        _patch;
        constructor(e) {
          this._patch = {
            ...e,
            id: e?.id ?? (0, o.Vj)(),
            topic: e?.topic ?? new u().patch,
          };
        }
        get id() {
          return this._patch.id;
        }
        get patch() {
          return this._patch;
        }
        topic(e) {
          return (this._patch.topic = (0, o.xp)(e, u).patch), this;
        }
        rangeStart(e) {
          return (this._patch.rangeStart = e), this;
        }
        rangeEnd(e) {
          return (this._patch.rangeEnd = e), this;
        }
        asTopic() {
          return new u(this._patch);
        }
        attrs(e) {
          return Object.assign(this._patch, (0, s.zO)(e)), this;
        }
      }
    },
    57358: (e, t, n) => {
      "use strict";
      n.d(t, {
        gm: () => O,
        Eu: () => R,
        M1: () => C,
        Mv: () => p,
        y0: () => k,
        ZT: () => g,
        WV: () => T,
        tL: () => y,
        Wx: () => f,
        x6: () => b,
        zV: () => j,
        NW: () => I,
        Mz: () => E,
        xb: () => w,
        gt: () => x,
        GR: () => S,
        E9: () => _,
        Gf: () => m,
        Bg: () => v,
        zO: () => A,
      });
      var r = n(6550),
        i = n(46924),
        o = n(65893),
        s = n(71381),
        a = n(42964),
        l = n(84304);
      function c(e, t, n) {
        const { elements: r, indexSet: i } = e,
          { idRefs: s, parentTopics: a, ownerSheets: c, topicTypes: u } = i,
          d = a[t];
        if (!d) return null;
        const { parent: h, as: p } = n,
          f = h ? (0, o.IP)(h, s) : a[t];
        if (!f || c[f] !== c[t]) return null;
        const m = (0, l.Ob)(r[f]);
        if (!m || "callout" === u[f]) return null;
        if ((0, o.dk)(e, f).includes(t)) return null;
        const g = p ?? "children",
          y = m[g]?.filter((e) => e !== t) ?? [],
          b = (0, o.wb)(n, y, s);
        if (b < 0) return null;
        const _ = u[t],
          v =
            "attached" === _
              ? "children"
              : "detached" === _
                ? "detachedChildren"
                : null;
        if (!v) return null;
        const x = (function (e, t, n) {
            const r = (0, o.yR)((0, l.Ob)(e.elements[t])),
              i = (r.children ?? []).indexOf(n);
            return i < 0
              ? []
              : (r.summaries ?? [])
                  .map((t) => {
                    const n = (0, l.hg)(e, t);
                    return n?.rangeStart === i && n.rangeEnd === i ? t : null;
                  })
                  .filter((e) => !!e);
          })(e, d, t),
          w = (function (e, t, n) {
            const r = e.indexSet.topicTypes[n];
            if (!r) return [];
            if ("detached" === r) {
              return ((0, o.yR)((0, l.Ob)(e.elements[n])).boundaries ?? [])
                .map((t) => {
                  const n = (0, l.j4)(e.elements[t]);
                  if (
                    0 === n?.rangeStart &&
                    0 === n.rangeEnd &&
                    "children" !== n.rangeType
                  )
                    return t;
                })
                .filter((e) => !!e);
            }
            if ("attached" === r) {
              const r = (0, o.yR)((0, l.Ob)(e.elements[t])),
                i = (r.children ?? []).indexOf(n);
              return i < 0
                ? []
                : (r.boundaries ?? [])
                    .map((t) => {
                      const n = (0, l.j4)(e.elements[t]);
                      return "children" === n?.rangeType &&
                        n.rangeStart === i &&
                        n.rangeEnd === i &&
                        n.rangeStart >= 0
                        ? t
                        : null;
                    })
                    .filter((e) => !!e);
            }
            return [];
          })(e, d, t),
          S = {
            oldParentId: d,
            newParentId: f,
            newIndex: b,
            oldKey: v,
            newKey: g,
            takeAwayBoundaries: w,
          };
        return "children" === v && "detachedChildren" === g
          ? { ...S, discardedSummaries: x }
          : { ...S, takeAwaySummaries: x };
      }
      function u(e, t, n) {
        const {
            oldParentId: r,
            newParentId: i,
            newIndex: c,
            oldKey: u,
            newKey: h,
            takeAwaySummaries: p,
            takeAwayBoundaries: f,
          } = n,
          m = (0, o.yR)((0, l.Ob)(e.elements[r]));
        (0, o.yN)(e, m, t, "boundaries", !0),
          (0, o.yN)(e, m, t, "summaries", !0),
          (0, o.Lj)(
            m,
            u,
            m[u]?.filter((e) => e !== t),
          ),
          (0, o.Lj)(
            m,
            "summaries",
            m.summaries?.filter((e) => !p?.includes(e)) ?? [],
          ),
          (0, o.Lj)(
            m,
            "boundaries",
            m.boundaries?.filter((e) => !f?.includes(e)) ?? [],
          );
        const g = (0, o.yR)((0, l.Ob)(e.elements[t]));
        (0, o.Lj)(
          g,
          "boundaries",
          g.boundaries?.filter((e) => !f?.includes(e)) ?? [],
        );
        const y = (0, o.yR)((0, l.Ob)(e.elements[i])),
          b = [...(y[h] ?? [])];
        b.splice(c, 0, t),
          (y[h] = b),
          "children" === h
            ? ((0, o.QR)(e, y, "boundaries", "at", c),
              (0, o.QR)(e, y, "summaries", "at", c),
              p &&
                (function (e, t, n, r) {
                  (0, o.Lj)(t, "summaries", [
                    ...(t.summaries ?? []),
                    ...(n ?? [])
                      .map((n) => {
                        const i = (0, l.hg)(e, n);
                        return i
                          ? ((i.rangeStart = r),
                            (i.rangeEnd = r),
                            (e.indexSet.parentTopics[n] = t.id),
                            (e.indexSet.parentTopics[i.id] = t.id),
                            n)
                          : null;
                      })
                      .filter((e) => !!e),
                  ]);
                })(e, y, p, c),
              f && d(e, y, f, c, "children"))
            : f && d(e, (0, o.yR)((0, l.Ob)(e.elements[t])), f, 0, "parent"),
          (e.indexSet.parentTopics[t] = i),
          (e.indexSet.topicTypes[t] =
            "children" === h ? s.oz.Attached : s.oz.Detached),
          delete e.indexSet.topicNumberingIndices[t],
          g.numberingPattern && (0, a.kE)(e, m.id),
          e.indexSet.topicTypes[t] !== s.oz.Attached &&
            (0, a.w8)(g) &&
            (0, a.a$)(g),
          e.indexSet.topicTypes[t] === s.oz.Attached &&
            g.numberingPattern &&
            (0, a.kE)(e, y.id);
      }
      function d(e, t, n, r, i) {
        (0, o.Lj)(t, "boundaries", [
          ...(t.boundaries ?? []),
          ...(n ?? [])
            .map((n) => {
              const o = (0, l.j4)(e.elements[n]);
              return o
                ? ((o.rangeType = i),
                  (o.rangeStart = r),
                  (o.rangeEnd = r),
                  (e.indexSet.parentTopics[n] = t.id),
                  n)
                : null;
            })
            .filter((e) => !!e),
        ]);
      }
      function h(e, t, n) {
        const { rangeStart: r, rangeEnd: i } = e;
        if ("number" != typeof r || "number" != typeof i) return null;
        const o = t.children?.slice(r, i + 1);
        return o?.every((e) => n.includes(e))
          ? { start: n.indexOf(o[0]), end: n.indexOf(o[o.length - 1]) }
          : null;
      }
      class p {
        _patch = {};
        _repo;
        constructor(e) {
          this._repo = e;
        }
        metadataFor(e, t) {
          return (
            (this._patch.metadata = { ...this._patch.metadata, [e]: t }), this
          );
        }
        addSheets(e, t) {
          return (
            (this._patch.additionalSheets = [
              ...(this._patch.additionalSheets ?? []),
              {
                sheets: (Array.isArray(e) ? e : e.sheets ?? []).map(
                  (e) => (0, o.xp)(e, r.eN).patch,
                ),
                options: t,
              },
            ]),
            this
          );
        }
        commit() {
          return new i.sv((0, o.Tz)(this._repo, this._patch));
        }
        Sheet() {
          return new r.eN();
        }
        Topic() {
          return new r.GO();
        }
        Relationship() {
          return new r.XZ();
        }
        Boundary() {
          return new r.r3();
        }
        Summary() {
          return new r.gn();
        }
        Callout() {
          return new r.GO();
        }
      }
      class f {
        _patch;
        _repo;
        constructor(e, t) {
          (this._patch = { id: e }), (this._repo = t);
        }
        get id() {
          return this._patch.id;
        }
        rootTopic(e) {
          return (this._patch.rootTopic = (0, o.xp)(e, r.GO).patch), this;
        }
        addRelationships(e, t) {
          return (
            (this._patch.additionalRelationships = [
              ...(this._patch.additionalRelationships ?? []),
              {
                relationships: e.map((e) => (0, o.xp)(e, r.XZ).patch),
                options: t,
              },
            ]),
            this
          );
        }
        attrs(e) {
          return Object.assign(this._patch, A(e)), this;
        }
        extensionBy(e, t) {
          return (
            this._patch.extensions || (this._patch.extensions = {}),
            (this._patch.extensions[e] = t ? A(t) : null),
            this
          );
        }
        markerDescriptionFor(e, t) {
          return (
            this._patch.legendMarkers || (this._patch.legendMarkers = {}),
            Object.assign(this._patch.legendMarkers, { [e]: t }),
            this
          );
        }
        styleFor(e, t) {
          return (
            (this._patch.themeStyles = {
              ...this._patch.themeStyles,
              [e]: t ? { ...t } : null,
            }),
            this
          );
        }
        commit() {
          return (0, o.yR)(
            new i.sv((0, o.gA)(this._repo, this._patch))
              .query({ id: this.id })
              ?.asSheet(),
          );
        }
        Topic() {
          return new r.GO();
        }
        Relationship() {
          return new r.XZ();
        }
        Boundary() {
          return new r.r3();
        }
        Summary() {
          return new r.gn();
        }
        Callout() {
          return new r.GO();
        }
      }
      class m {
        _patch;
        _repo;
        constructor(e, t) {
          (this._patch = { id: e }), (this._repo = t);
        }
        get id() {
          return this._patch.id;
        }
        extensionBy(e, t) {
          return (
            this._patch.extensions || (this._patch.extensions = {}),
            (this._patch.extensions[e] = t ? A(t) : null),
            this
          );
        }
        attrs(e) {
          return Object.assign(this._patch, A(e)), this;
        }
        addChildren(e, t) {
          return (
            (this._patch.additionalChildren = [
              ...(this._patch.additionalChildren ?? []),
              Array.isArray(e)
                ? { topics: e.map((e) => (0, o.xp)(e, r.GO).patch), options: t }
                : {
                    topics:
                      (e.topics ?? []).map((e) => (0, o.xp)(e, r.GO).patch) ??
                      [],
                    boundaries: (e.boundaries ?? []).map(
                      (e) => (0, o.xp)(e, r.r3).patch,
                    ),
                    summaries: (e.summaries ?? []).map(
                      (e) => (0, o.xp)(e, r.gn).patch,
                    ),
                    relationships: (e.relationships ?? []).map(
                      (e) => (0, o.xp)(e, r.XZ).patch,
                    ),
                    options: t,
                  },
            ]),
            this
          );
        }
        addDetachedChildren(e, t) {
          return (
            (this._patch.additionalDetachedChildren = [
              ...(this._patch.additionalDetachedChildren ?? []),
              Array.isArray(e)
                ? { topics: e.map((e) => (0, o.xp)(e, r.GO).patch), options: t }
                : {
                    topics: (e.topics ?? []).map(
                      (e) => (0, o.xp)(e, r.GO).patch,
                    ),
                    boundaries: (e.boundaries ?? []).map(
                      (e) => (0, o.xp)(e, r.r3).patch,
                    ),
                    summaries: (e.summaries ?? []).map(
                      (e) => (0, o.xp)(e, r.gn).patch,
                    ),
                    relationships: (e.relationships ?? []).map(
                      (e) => (0, o.xp)(e, r.XZ).patch,
                    ),
                    options: t,
                  },
            ]),
            this
          );
        }
        addBoundaries(e) {
          return (
            (this._patch.additionalBoundaries = [
              ...(this._patch.additionalBoundaries ?? []),
              ...e.map((e) => (0, o.xp)(e, r.r3).patch),
            ]),
            this
          );
        }
        addSummaries(e) {
          return (
            (this._patch.additionalSummaries = [
              ...(this._patch.additionalSummaries ?? []),
              ...e.map((e) => (0, o.xp)(e, r.gn).patch),
            ]),
            this
          );
        }
        callout(e) {
          return (this._patch.callout = (0, o.xp)(e, r.GO).patch), this;
        }
        commit() {
          return (0, o.yR)(
            new i.sv((0, o.ym)(this._repo, this._patch))
              .query({ id: this.id })
              ?.asTopic(),
          );
        }
      }
      class g {
        _patch;
        _repo;
        constructor(e, t) {
          (this._patch = { id: e }), (this._repo = t);
        }
        get id() {
          return this._patch.id;
        }
        attrs(e) {
          return Object.assign(this._patch, A(e)), this;
        }
        commit() {
          return (0, o.yR)(
            new i.sv((0, o.bT)(this._repo, this._patch))
              .query({ id: this.id })
              ?.asRelationship(),
          );
        }
      }
      class y {
        static make(e, t, n) {
          const r = (0, o.u5)(e, t, n);
          return r ? new y(e, t, r.newIndex) : null;
        }
        _repo;
        _id;
        _newIndex;
        constructor(e, t, n) {
          (this._repo = e), (this._id = t), (this._newIndex = n);
        }
        move() {
          const e = (0, o.s6)(this._repo, (e) => {
            (0, o.j1)(e, this._id, this._newIndex);
          });
          return (0, o.yR)(new i.sv(e).query({ id: this._id })?.asSheet());
        }
      }
      class b {
        static make(e, t) {
          return e.sheets.length > 1 ? new b(e, t) : null;
        }
        _repo;
        _id;
        constructor(e, t) {
          (this._repo = e), (this._id = t);
        }
        remove() {
          return new i.sv(
            (0, o.s6)(this._repo, (e) => {
              (0, o.Pu)(e, this._id);
            }),
          );
        }
      }
      class _ {
        static make(e, t, n) {
          const r = c(e, t, n);
          return r ? new _(e, t, r) : null;
        }
        _repo;
        _id;
        _info;
        constructor(e, t, n) {
          (this._repo = e), (this._id = t), (this._info = n);
        }
        move() {
          const e = (0, o.s6)(this._repo, (e, t, n) => {
            u(e, this._id, this._info), n((0, o.az)(e, this._id));
          });
          return (0, o.yR)(new i.sv(e).query({ id: this._id })?.asTopic());
        }
      }
      class v {
        static make(e, t) {
          const n = e.indexSet.parentTopics[t];
          return n ? new v(e, t, n) : null;
        }
        _repo;
        _id;
        _parentTopicId;
        constructor(e, t, n) {
          (this._repo = e), (this._id = t), (this._parentTopicId = n);
        }
        remove() {
          const e = (0, o.s6)(this._repo, (e, t, n) => {
            const r = (0, o.az)(e, this._id);
            (0, o.qb)(e, this._id, this._parentTopicId), n(r);
          });
          return (0, o.yR)(
            new i.sv(e).query({ id: this._parentTopicId })?.asTopic(),
          );
        }
      }
      class x {
        _patch;
        _repo;
        constructor(e, t) {
          const n = new Set(
            t.map((t) => (0, o.IP)(t, e.indexSet.idRefs)).filter((e) => !!e),
          );
          (this._patch = { ids: [...n] }), (this._repo = e);
        }
        attrs(e) {
          return Object.assign(this._patch, A(e)), this;
        }
        extensionBy(e, t) {
          return (
            this._patch.extensions || (this._patch.extensions = {}),
            (this._patch.extensions[e] = t ? A(t) : null),
            this
          );
        }
        commit() {
          return (0, o.yR)(
            new i.sv((0, o.bv)(this._repo, this._patch))
              .queryList(this._patch.ids.map((e) => ({ id: e })))
              ?.asTopics(),
          );
        }
      }
      class w {
        static make(e, t, n) {
          const r = [
              ...new Set(
                t
                  .map((t) => (0, o.IP)(t, e.indexSet.idRefs))
                  .filter((e) => !!e),
              ),
            ],
            i = (function (e, t, n) {
              const {
                  elements: r,
                  indexSet: { parentTopics: i, idRefs: s, topicTypes: a },
                } = e,
                { parent: c, as: u } = n,
                d = (0, o.IP)(c, s);
              if (!d) return null;
              const p = (0, l.Ob)(r[d]);
              if (!p) return null;
              const f = (0, o.dk)(e, p.id);
              let m = [...new Set(t)]
                .filter((e) => "attached" === a[e] || "detached" === a[e])
                .filter((e) => !f.includes(e));
              if (
                ((m = m
                  .filter(
                    (t) =>
                      !(0, o.dk)(e, t).some((e) => e !== t && m.includes(e)),
                  )
                  .sort((0, o.hT)(e))),
                !m.length)
              )
                return null;
              const g = u ?? "children",
                y = p[g]?.filter((e) => !m.includes(e)) ?? [],
                b = (0, o.wb)(n, y, s);
              if (b < 0) return null;
              const _ = {},
                v = {},
                x = {};
              for (const t of m) {
                const n = i[t];
                if (n) {
                  if (!_[n]) {
                    const t = (0, o.yR)((0, l.Ob)(r[n]));
                    t.summaries?.forEach((n) => {
                      const r = (0, l.hg)(e, n),
                        i = r ? h(r, t, m) : null;
                      i && (v[n] = i);
                    }),
                      t.boundaries?.forEach((e) => {
                        const n = (0, l.j4)(r[e]),
                          i = "children" === n?.rangeType ? h(n, t, m) : null;
                        i && (x[e] = { ...i, type: "children" });
                      }),
                      (_[n] = {});
                  }
                  const i = _[n];
                  if ("attached" === a[t])
                    i.children = [...(i.children ?? []), t];
                  else if ("detached" === a[t]) {
                    i.detachedChildren = [...(i.detachedChildren ?? []), t];
                    const e = (0, l.Ob)(r[t]);
                    e?.boundaries?.forEach((e) => {
                      const n = (0, l.j4)(r[e]);
                      "parent" === n?.rangeType &&
                        (x[e] = {
                          start: m.indexOf(t),
                          end: m.indexOf(t),
                          type: "parent",
                        });
                    });
                  }
                }
              }
              return Object.keys(_).length
                ? {
                    topics: m,
                    key: g,
                    index: b,
                    newParentId: d,
                    oldParentInfos: _,
                    takeAwaySummaryInfos: v,
                    takeAwayBoundaryInfos: x,
                  }
                : null;
            })(e, r, n);
          return i ? new w(e, i) : null;
        }
        _repo;
        _info;
        constructor(e, t) {
          (this._repo = e), (this._info = t);
        }
        move() {
          const e = (0, o.s6)(this._repo, (e, t, n) => {
            !(function (e, t) {
              const {
                  topics: n,
                  key: r,
                  index: i,
                  newParentId: c,
                  oldParentInfos: u,
                  takeAwaySummaryInfos: d,
                  takeAwayBoundaryInfos: h,
                } = t,
                p = new Set();
              Object.entries(u).forEach(
                ([t, { children: n, detachedChildren: i }]) => {
                  const s = (0, o.yR)((0, l.Ob)(e.elements[t]));
                  for (const r of n ?? []) {
                    const n = (0, o.yR)((0, l.Ob)(e.elements[r]));
                    (0, o.yN)(e, s, r, "summaries", !0),
                      (0, o.yN)(e, s, r, "boundaries", !0),
                      (0, o.Lj)(
                        s,
                        "children",
                        s.children?.filter((e) => e !== r),
                      ),
                      (0, o.Lj)(
                        s,
                        "summaries",
                        s.summaries?.filter((e) => !d?.[e]) ?? [],
                      ),
                      (0, o.Lj)(
                        s,
                        "boundaries",
                        s.boundaries?.filter((e) => !h?.[e]) ?? [],
                      ),
                      (0, a.w8)(n) && p.add(t);
                  }
                  for (const t of i ?? []) {
                    const n = (0, o.yR)((0, l.Ob)(e.elements[t]));
                    (0, o.Lj)(
                      s,
                      "detachedChildren",
                      s.detachedChildren?.filter((e) => e !== t),
                    ),
                      "children" === r &&
                        (0, o.Lj)(
                          n,
                          "boundaries",
                          n.boundaries?.filter((e) => !h?.[e]) ?? [],
                        );
                  }
                },
              );
              const f = (0, o.yR)((0, l.Ob)(e.elements[c])),
                m = [...(f[r] ?? [])];
              m.splice(i, 0, ...n), (f[r] = m);
              for (const t of n) {
                const n = (0, o.yR)((0, l.Ob)(e.elements[t]));
                (e.indexSet.parentTopics[t] = c),
                  (e.indexSet.topicTypes[t] =
                    "children" === r ? s.oz.Attached : s.oz.Detached),
                  delete e.indexSet.topicNumberingIndices[t],
                  e.indexSet.topicTypes[t] === s.oz.Detached && (0, a.a$)(n);
              }
              "detachedChildren" === r
                ? (Object.keys(d ?? {}).forEach((t) => (0, o.ST)(e, t)),
                  Object.entries(h ?? {}).forEach(
                    ([t, { start: r, end: i, type: s }]) => {
                      if ("children" === s)
                        if (r === i && n.length > r) {
                          const i = (0, o.yR)((0, l.Ob)(e.elements[n[r]]));
                          (0, o.Lj)(i, "boundaries", [
                            ...(i.boundaries ?? []),
                            t,
                          ]);
                          const s = (0, o.yR)((0, l.j4)(e.elements[t]));
                          (0, o.Lj)(s, "rangeType", "parent"),
                            (0, o.Lj)(s, "rangeStart", 0),
                            (0, o.Lj)(s, "rangeEnd", 0),
                            (e.indexSet.parentTopics[t] = i.id);
                        } else (0, o.bJ)(e, t);
                    },
                  ))
                : ((0, o.QR)(e, f, "summaries", "at", i, n.length),
                  (0, o.QR)(e, f, "boundaries", "at", i, n.length),
                  d &&
                    (0, o.Lj)(f, "summaries", [
                      ...(f.summaries ?? []),
                      ...Object.keys(d)
                        .map((t) => {
                          const n = (0, o.yR)((0, l.hg)(e, t)),
                            { start: r, end: s } = d[t];
                          return (
                            (n.rangeStart = r + i),
                            (n.rangeEnd = s + i),
                            (e.indexSet.parentTopics[t] = c),
                            (e.indexSet.parentTopics[n.id] = c),
                            t
                          );
                        })
                        .filter((e) => !!e),
                    ]),
                  h &&
                    (0, o.Lj)(f, "boundaries", [
                      ...(f.boundaries ?? []),
                      ...Object.keys(h)
                        .map((t) => {
                          const n = (0, o.yR)((0, l.j4)(e.elements[t])),
                            { start: r, end: s } = h[t];
                          return (
                            (n.rangeType = "children"),
                            (n.rangeStart = r + i),
                            (n.rangeEnd = s + i),
                            (e.indexSet.parentTopics[t] = c),
                            t
                          );
                        })
                        .filter((e) => !!e),
                    ]));
              for (const t of p) (0, a.kE)(e, t);
              p.size > 0 && (0, a.kE)(e, f.id);
            })(e, this._info),
              this._info.topics.forEach((t) => n((0, o.az)(e, t)));
          });
          return (0, o.yR)(
            new i.sv(e)
              .queryList(this._info.topics.map((e) => ({ id: e })))
              ?.asTopics(),
          );
        }
      }
      class S {
        static make(e, t) {
          const n = new Set();
          for (const r of t) {
            const t = (0, o.IP)(r, e.indexSet.idRefs);
            t && "root" !== e.indexSet.topicTypes[t] && n.add(t);
          }
          return n.size ? new S(e, [...n]) : null;
        }
        _repo;
        _ids;
        constructor(e, t) {
          (this._repo = e), (this._ids = t);
        }
        remove() {
          const e = new Set(),
            t = (0, o.s6)(this._repo, (t, n, r) => {
              for (const n of this._ids)
                if (t.elements[n]) {
                  const i = (0, o.yR)(t.indexSet.parentTopics[n]),
                    s = (0, o.az)(t, n);
                  (0, o.qb)(t, n, i), r(s), e.add(i);
                }
            });
          return (0, o.yR)(
            new i.sv(t)
              .queryList(
                [...e]
                  .map((e) => (t.elements[e] ? { id: e } : null))
                  .filter((e) => !!e),
              )
              ?.asTopics(),
          );
        }
      }
      class k {
        static make(e, t, n) {
          const r = (0, o.Ie)(e, t, n);
          return r ? new k(e, t, r) : null;
        }
        _repo;
        _id;
        _info;
        constructor(e, t, n) {
          (this._repo = e), (this._id = t), (this._info = n);
        }
        move() {
          const e = (0, o.s6)(this._repo, (e, t, n) => {
            (0, o.RQ)(e, this._id, this._info), n((0, o.az)(e, this._id));
          });
          return (0, o.yR)(
            new i.sv(e).query({ id: this._id })?.asRelationship(),
          );
        }
      }
      class T {
        static remove(e, t) {
          const n = (0, o.az)(e, t),
            r = (0, o.s6)(e, (e, r, i) => {
              (0, o.sE)(e, t), i(n);
            });
          return (0, o.yR)(new i.sv(r).query({ id: n })?.asSheet());
        }
      }
      class R {
        _patch;
        _repo;
        constructor(e, t) {
          (this._patch = { id: t }), (this._repo = e);
        }
        get id() {
          return this._patch.id;
        }
        attrs(e) {
          return Object.assign(this._patch, A(e)), this;
        }
        commit() {
          return (0, o.yR)(
            new i.sv((0, o.A_)(this._repo, this._patch))
              .query({ id: this.id })
              ?.asBoundary(),
          );
        }
      }
      class O {
        static make(e, t, n) {
          const r = (0, o.Py)(e, t, n);
          return r ? new O(e, t, r) : null;
        }
        _repo;
        _id;
        _info;
        constructor(e, t, n) {
          (this._repo = e), (this._id = t), (this._info = n);
        }
        move() {
          const e = (0, o.s6)(this._repo, (e, t, n) => {
            (0, o.VR)(e, this._id, this._info), n((0, o.az)(e, this._id));
          });
          return (0, o.yR)(new i.sv(e).query({ id: this._id })?.asBoundary());
        }
      }
      class C {
        static remove(e, t) {
          const n = (0, o.az)(e, t),
            r = (0, o.yR)(e.indexSet.parentTopics[t]),
            s = (0, o.s6)(e, (e, r, i) => {
              (0, o.bJ)(e, t), i(n);
            });
          return (0, o.yR)(new i.sv(s).query({ id: r })?.asTopic());
        }
      }
      class I {
        _summaryTopicId;
        _patch;
        _repo;
        constructor(e, t) {
          (this._summaryTopicId = t),
            (this._patch = { id: (0, o.yR)(e.indexSet.ownerSummaries[t]) }),
            (this._repo = e);
        }
        get id() {
          return this._summaryTopicId;
        }
        attrs(e) {
          return Object.assign(this._patch, A(e)), this;
        }
        commit() {
          return (0, o.yR)(
            new i.sv((0, o.cf)(this._repo, this._patch))
              .query({ id: this.id })
              ?.asSummary(),
          );
        }
      }
      class j {
        static make(e, t, n) {
          const r = (0, o.H8)(e, t, n);
          return r ? new j(e, t, r) : null;
        }
        _repo;
        _summaryTopicId;
        _info;
        constructor(e, t, n) {
          (this._repo = e), (this._summaryTopicId = t), (this._info = n);
        }
        move() {
          const e = (0, o.s6)(this._repo, (e, t, n) => {
            (0, o.O6)(e, this._summaryTopicId, this._info),
              n((0, o.az)(e, this._summaryTopicId));
          });
          return (0, o.yR)(
            new i.sv(e).query({ id: this._summaryTopicId })?.asSummary(),
          );
        }
      }
      class E {
        static remove(e, t) {
          const n = (0, o.az)(e, t),
            r = (0, o.yR)(e.indexSet.parentTopics[t]),
            s = (0, o.s6)(e, (e, r, i) => {
              (0, o.ST)(e, t), i(n);
            });
          return (0, o.yR)(new i.sv(s).query({ id: r })?.asTopic());
        }
      }
      function A(e) {
        return JSON.parse(JSON.stringify(e));
      }
    },
    42964: (e, t, n) => {
      "use strict";
      n.d(t, {
        Fh: () => b,
        OM: () => d,
        a$: () => f,
        kE: () => h,
        oW: () => y,
        r_: () => g,
        w8: () => p,
        xo: () => m,
      });
      var r = n(21843),
        i = n(71381),
        o = n(65893),
        s = n(84304);
      function a(e) {
        let t = "";
        for (; e > 0; )
          (t = String.fromCharCode(65 + ((e - 1) % 26)) + t),
            (e = Math.floor((e - 1) / 26));
        return t;
      }
      const l = {
          M: 1e3,
          CM: 900,
          D: 500,
          CD: 400,
          C: 100,
          XC: 90,
          L: 50,
          XL: 40,
          X: 10,
          IX: 9,
          V: 5,
          IV: 4,
          I: 1,
        },
        c = Object.keys(l),
        u = Object.values(l);
      const d = "org.xmind.ui.numbering";
      function h(e, t) {
        const n = {},
          o = (0, s.Ob)(e.elements[t]);
        if (!o) return;
        const a = (t, o) => {
          if (!t.numberingPattern || !r.ZW.includes(t.numberingPattern)) return;
          if (e.indexSet.topicTypes[t.id] !== i.oz.Attached) return;
          const s = `${o.id}:${t.numberingPattern}`,
            a = n[s];
          null == a ||
          (void 0 !== t.numberingFixedIndex && null !== t.numberingFixedIndex)
            ? (n[s] = t.numberingFixedIndex ?? 0)
            : (n[s] += 1),
            (e.indexSet.topicNumberingIndices[t.id] = n[s]);
        };
        for (const t of o.children ?? []) {
          const n = (0, s.Ob)(e.elements[t]);
          n && a(n, o);
        }
      }
      function p(e) {
        return !(
          !e.numberingPattern &&
          !e.numberingTiered &&
          void 0 === e.numberingFixedIndex &&
          null === e.numberingFixedIndex
        );
      }
      function f(e) {
        (0, o.Lj)(e, "numberingPattern", null),
          (0, o.Lj)(e, "numberingTiered", null),
          (0, o.Lj)(e, "numberingFixedIndex", null);
      }
      function m(e, t) {
        return "numeral-arabic" === e ? String(t + 1) + "." : null;
      }
      function g(e, t) {
        return "numeral-roman" === e
          ? (function (e) {
              if (e <= 0 || Math.floor(e) !== e)
                throw new Error("requires an unsigned integer");
              if (e >= 4e3)
                throw new Error("requires a max value of 3999 or less");
              let t = "";
              for (let n = 0; n < c.length; n++)
                for (; e >= u[n]; ) (e -= u[n]), (t += c[n]);
              return t;
            })(t + 1) + "."
          : null;
      }
      function y(e, t) {
        return "alphabet-uppercase" === e ? a(t + 1) + "." : null;
      }
      function b(e, t) {
        return "alphabet-lowercase" === e ? a(t + 1).toLowerCase() + "." : null;
      }
    },
    65893: (e, t, n) => {
      "use strict";
      n.d(t, {
        _N: () => H,
        Zb: () => z,
        Zq: () => O,
        fx: () => K,
        ik: () => D,
        xp: () => ae,
        yR: () => oe,
        Lj: () => ee,
        wb: () => ie,
        vA: () => w,
        dk: () => fe,
        Py: () => Z,
        IP: () => ne,
        az: () => he,
        Ie: () => B,
        u5: () => I,
        H8: () => G,
        f: () => de,
        fM: () => re,
        hj: () => le,
        VR: () => J,
        RQ: () => q,
        j1: () => j,
        O6: () => Y,
        A_: () => V,
        Tz: () => S,
        bT: () => W,
        s6: () => x,
        gA: () => T,
        cf: () => X,
        ym: () => A,
        bv: () => P,
        bJ: () => $,
        sE: () => E,
        Pu: () => R,
        ST: () => U,
        vJ: () => F,
        qb: () => M,
        hT: () => pe,
        QR: () => L,
        yN: () => N,
        Vj: () => se,
        Qy: () => ue,
      });
      var r = n(71381),
        i = n(42964);
      function o(e, t, n) {
        const { sheets: r, options: i } = t;
        re(
          r.map((t) => O(e, t, n)),
          e.sheets,
          e.indexSet.idRefs,
          i,
        );
      }
      function s(e, t, n, r, i) {
        if (n.length < 1) return;
        const o = de(ue(n), r);
        o.length < 1 ||
          (t.boundaries = [
            ...(t.boundaries ?? []),
            ...o.map((t) => H(e, t, i)),
          ]);
      }
      var a = n(84304);
      function l(e, t, n) {
        if (t.length < 1) return;
        const r = oe((0, a.vB)(e.elements[n.ownerSheetId]));
        r.relationships = [
          ...(r.relationships ?? []),
          ...t.map((t) => z(e, t, n)),
        ];
      }
      function c(e, t, n, r, i) {
        if (n.length < 1) return;
        const o = de(ue(n), r);
        o.length < 1 ||
          (t.summaries = [...(t.summaries ?? []), ...o.map((t) => K(e, t, i))]);
      }
      function u(e, t, n, i) {
        const {
          topics: o,
          options: a,
          boundaries: u = [],
          summaries: h = [],
          relationships: p = [],
        } = n;
        if (o.length <= 0) return;
        const f = t.children ?? [],
          m = d(a, f, e.indexSet.idRefs),
          g = o.map((t) => D(e, t, r.oz.Attached, i));
        if (((t.children = [...f.slice(0, m), ...g, ...f.slice(m)]), a)) {
          const n = "at" in a ? "at" : "before" in a ? "before" : "after",
            r = g.length;
          L(e, t, "boundaries", n, m, r), L(e, t, "summaries", n, m, r);
        }
        s(e, t, u, m, i), c(e, t, h, m, i), l(e, p, i);
      }
      function d(e, t, n) {
        const r = ie(e, t, n);
        return r < 0 ? t.length : r;
      }
      function h(e, t, n, i) {
        n.forEach((n, o) => {
          const s = (function (e, t) {
            const n = t.find((t) => t.rangeStart === e && t.rangeEnd === e);
            if (!n) return null;
            return { ...n, rangeType: "parent", rangeStart: 0, rangeEnd: 0 };
          })(o, t);
          s && D(e, { id: n, additionalBoundaries: [s] }, r.oz.Detached, i);
        });
      }
      function p(e, t, n, i) {
        const {
          topics: o,
          options: s,
          boundaries: a = [],
          relationships: c = [],
        } = n;
        if (o.length <= 0) return;
        const u = t.detachedChildren ?? [],
          p = d(s, u, e.indexSet.idRefs),
          f = o.map((t) => D(e, t, r.oz.Detached, i));
        (t.detachedChildren = [...u.slice(0, p), ...f, ...u.slice(p)]),
          h(e, a, f, i),
          l(e, c, i);
      }
      function f(e, t) {
        let n = e;
        return (
          t(
            m(
              e,
              () => n,
              (e) => {
                n = e;
              },
            ),
          ),
          n
        );
      }
      function m(e, t, n) {
        return new Proxy(e ?? t(), {
          get(r, i) {
            if (i === _) return t();
            const o = i,
              s = g(t(), o);
            return null === s || "object" != typeof s
              ? s
              : m(
                  g(e, o),
                  () => g(t(), o),
                  (r) => n(y(t(), o, r, e)),
                );
          },
          set: (r, i, o) => (n(y(t(), i, v(o), e)), !0),
          deleteProperty: (r, i) => (
            n(
              (function (e, t, n) {
                if (!e || !(t in e)) return e;
                return (e = b(e, n)), delete e[t], e;
              })(t(), i, e),
            ),
            !0
          ),
          has: (e, n) => Reflect.has(t(), n),
          ownKeys: () => Reflect.ownKeys(t()),
          getOwnPropertyDescriptor: (e, n) =>
            Reflect.getOwnPropertyDescriptor(t(), n),
        });
      }
      function g(e, t) {
        return (e ?? {})[t];
      }
      function y(e, t, n, r) {
        return n === g(e, t) || ((e = b(e, r))[t] = n), e;
      }
      function b(e, t) {
        return e === t ? (Array.isArray(e) ? [...e] : { ...e }) : e;
      }
      const _ = Symbol("realValue");
      function v(e) {
        if (null == e) return e;
        if ("object" != typeof (e = e[_] ?? e) || null === e) return e;
        const t = e;
        let n = t;
        for (const e in t) {
          const r = t[e],
            i = v(r);
          i !== r && ((n = b(n, t)), (n[e] = i));
        }
        return n;
      }
      function x(e, t) {
        const n = new Set(),
          r = (e) => n.add(e),
          i = f(e, (e) => {
            const n = new Q();
            t(e, n, r),
              n.resolve(e),
              (function (e, t) {
                for (const n of e.sheets)
                  for (const r of [
                    ...(oe((0, a.vB)(e.elements[n])).relationships ?? []),
                  ]) {
                    const {
                      id: i,
                      sourceId: o,
                      targetId: s,
                    } = oe((0, a.$D)(e.elements[r]));
                    (o && s) ||
                      (o && te(e.indexSet.outgoingRelationships, o, i),
                      s && te(e.indexSet.incomingRelationships, s, i),
                      E(e, i),
                      t(n));
                  }
              })(e, r);
          });
        return e === i
          ? e
          : f(
              i,
              (e) => (
                n.forEach(
                  (t) => (oe((0, a.vB)(e.elements[t])).revisionId = se()),
                ),
                e
              ),
            );
      }
      function w(e) {
        return x((0, a.E4)(), (t, n) => {
          k(t, e, { refResolver: n });
        });
      }
      function S(e, t) {
        return x(e, (e, n) => {
          k(e, t, { refResolver: n });
        });
      }
      function k(e, t, n) {
        const { metadata: r, sheets: i, additionalSheets: s } = t;
        if (
          (void 0 !== r &&
            (function (e, t) {
              for (const [n, r] of Object.entries(t))
                r ? (e.metadata[n] = r) : delete e.metadata[n];
            })(e, r),
          void 0 !== i &&
            (function (e, t, n) {
              for (const t of [...e.sheets]) R(e, t);
              e.sheets = t.map((t) => O(e, t, n));
            })(e, i, n),
          void 0 !== s)
        )
          for (const t of s) o(e, t, n);
      }
      function T(e, t) {
        return x(e, (e, n, r) => {
          O(e, t, { refResolver: n }), r(t.id);
        });
      }
      function R(e, t) {
        const n = e.elements[t];
        if (!n || "sheet" !== n.type) return;
        const { ref: r, rootTopicId: i, relationships: o } = n;
        o?.forEach((t) => E(e, t)),
          i && F(e, i),
          r && delete e.indexSet.idRefs[r],
          delete e.elements[t],
          (e.sheets = e.sheets.filter((e) => e !== t));
      }
      function O(e, t, n) {
        const {
            id: i,
            ref: o,
            classes: s,
            title: l,
            rootTopic: c,
            relationships: u,
            additionalRelationships: d,
            topicOverlapping: h,
            topicPositioning: p,
            floatingTopicFlexibility: f,
            cjkFontFamily: m,
            lineTapered: g,
            themeStyles: y,
            fillColor: b,
            multiLineColors: _,
            colorList: v,
            legendVisibility: x,
            legendPosition: w,
            legendMarkers: S,
            skeletonThemeId: k,
            colorThemeId: T,
            compactLayoutLevel: R,
            labelSortOrder: O,
          } = t,
          I = se();
        e.elements[i] ||
          (e.elements[i] = { id: i, type: "sheet", revisionId: I });
        const j = oe((0, a.vB)(e.elements[i]));
        if ((ee(j, "revisionId", I), void 0 !== o)) {
          const t = j.ref;
          t !== o &&
            (ee(j, "ref", o),
            t && delete e.indexSet.idRefs[t],
            o && (e.indexSet.idRefs[o] = i));
        }
        void 0 !== l && ee(j, "title", l),
          void 0 !== s && ee(j, "classes", s.length > 0 ? [...s] : null);
        const A = { ...n, ownerSheetId: i };
        if (void 0 !== c) {
          const t = j.rootTopicId;
          t && F(e, t), ee(j, "rootTopicId", D(e, c, r.oz.Root, A));
        }
        if (
          (void 0 !== u &&
            (j.relationships?.forEach((t) => E(e, t)),
            ee(
              j,
              "relationships",
              u.map((t) => z(e, t, A)),
            )),
          void 0 !== d &&
            ee(
              j,
              "relationships",
              d.reduce(
                (t, { relationships: n, options: r }) => (
                  re(
                    n.map((t) => z(e, t, A)),
                    t,
                    e.indexSet.idRefs,
                    r,
                  ),
                  t
                ),
                [...(j.relationships ?? [])],
              ),
            ),
          void 0 !== h && ee(j, "topicOverlapping", h),
          void 0 !== p && ee(j, "topicPositioning", p),
          void 0 !== f && ee(j, "floatingTopicFlexibility", f),
          void 0 !== R && ee(j, "compactLayoutLevel", R),
          void 0 !== O && ee(j, "labelSortOrder", O),
          void 0 !== m && ee(j, "cjkFontFamily", m),
          void 0 !== g &&
            ee(j, "lineTapered", "tapered" === g || "none" === g ? g : null),
          void 0 !== b && ee(j, "fillColor", b),
          void 0 !== _ && ee(j, "multiLineColors", _),
          void 0 !== v && ee(j, "colorList", v),
          void 0 !== x && ee(j, "legendVisibility", x),
          void 0 !== w && ee(j, "legendPosition", w),
          void 0 !== S &&
            ee(j, "legendMarkers", S ? { ...j.legendMarkers, ...S } : null),
          void 0 !== k && ee(j, "skeletonThemeId", k),
          void 0 !== T && ee(j, "colorThemeId", T),
          void 0 !== t.extensions)
        ) {
          const e = { ...j.extensions };
          for (const n in t.extensions) {
            const r = t.extensions[n];
            r && (r.content || r.resources)
              ? (e[n] = {
                  content: r.content ?? null,
                  resources: r.resources ?? [],
                })
              : delete e[n];
          }
          ee(j, "extensions", e);
        }
        if (void 0 !== y) {
          const e = j.themeStyles ?? {};
          for (const t in y) ee(e, t, C(y[t]));
          ee(j, "themeStyles", e);
        }
        return i;
      }
      function C(e) {
        return null == e
          ? null
          : Object.keys(e).reduce((t, n) => {
              const r = n,
                i = e[r];
              return null != i && (t[r] = i), t;
            }, {});
      }
      function I(e, t, n) {
        const r = ie(
          n,
          e.sheets.filter((e) => e !== t),
          e.indexSet.idRefs,
        );
        return r >= 0 ? { newIndex: r } : null;
      }
      function j(e, t, n) {
        const r = e.sheets.filter((e) => e !== t);
        r.splice(n, 0, t), (e.sheets = r);
      }
      function E(e, t) {
        const n = oe(e.indexSet.ownerSheets[t]),
          r = oe((0, a.vB)(e.elements[n])),
          i = (r.relationships ?? []).filter((e) => e !== t);
        i.length > 0 ? (r.relationships = i) : delete r.relationships,
          delete e.indexSet.ownerSheets[t];
        const o = oe((0, a.$D)(e.elements[t])),
          { ref: s, sourceId: l, targetId: c } = o;
        s && delete e.indexSet.idRefs[s],
          l && te(e.indexSet.outgoingRelationships, l, t),
          c && te(e.indexSet.incomingRelationships, c, t),
          delete e.elements[t];
      }
      function A(e, t) {
        return x(e, (n, r, i) => {
          const o = he(n, t.id);
          D(n, t, e.indexSet.topicTypes[t.id], {
            refResolver: r,
            ownerSheetId: o,
          }),
            i(o);
        });
      }
      function P(e, t) {
        return x(e, (e, n, r) => {
          for (const i of t.ids) {
            const o = he(e, i);
            D(e, { id: i, ...t }, e.indexSet.topicTypes[i], {
              refResolver: n,
              ownerSheetId: o,
            }),
              r(o);
          }
        });
      }
      function D(e, t, n, o) {
        const {
          id: d,
          ref: f,
          children: m,
          childrenAssociations: g,
          detachedChildren: y,
          detachedChildrenAssociations: b,
          callout: _,
          boundaries: v,
        } = t;
        e.elements[d] || (e.elements[d] = { id: d, type: "topic" });
        const x = oe((0, a.Ob)(e.elements[d])),
          { ownerSheetId: w, parentTopicId: S, ownerSummaryId: k } = o;
        if (
          (void 0 !== w && (e.indexSet.ownerSheets[d] = w),
          void 0 !== S && (e.indexSet.parentTopics[d] = S),
          void 0 !== k && (e.indexSet.ownerSummaries[d] = k),
          (e.indexSet.topicTypes[d] = n),
          void 0 !== t.classes &&
            ee(x, "classes", t.classes.length > 0 ? [...t.classes] : null),
          void 0 !== t.title && ee(x, "title", t.title),
          void 0 !== t.titleUnedited && ee(x, "titleUnedited", t.titleUnedited),
          void 0 !== t.attributedTitle &&
            ee(x, "attributedTitle", t.attributedTitle),
          void 0 !== t.notes &&
            ee(
              x,
              "notes",
              t.notes ? { html: null, text: null, ...t.notes } : null,
            ),
          void 0 !== t.labels && ee(x, "labels", t.labels),
          void 0 !== t.href && ee(x, "href", t.href),
          void 0 !== t.position && ee(x, "position", t.position),
          void 0 !== t.markers &&
            ee(x, "markers", [...new Set(t.markers ?? [])]),
          void 0 !== t.structureClass &&
            ee(x, "structureClass", t.structureClass),
          void 0 !== t.branchState && ee(x, "branchState", t.branchState),
          void 0 !== t.imageSource && ee(x, "imageSource", t.imageSource),
          void 0 !== t.imageWidth && ee(x, "imageWidth", t.imageWidth),
          void 0 !== t.imageHeight && ee(x, "imageHeight", t.imageHeight),
          void 0 !== t.imagePlacement &&
            ee(x, "imagePlacement", t.imagePlacement),
          void 0 !== t.imageLockRatio &&
            ee(x, "imageLockRatio", t.imageLockRatio),
          void 0 !== t.imageBorderLineColor &&
            ee(x, "imageBorderLineColor", t.imageBorderLineColor),
          void 0 !== t.imageBorderLineWidth &&
            ee(x, "imageBorderLineWidth", t.imageBorderLineWidth),
          void 0 !== t.imageShadowVisible &&
            ee(x, "imageShadowVisible", t.imageShadowVisible),
          void 0 !== t.imageOpacity && ee(x, "imageOpacity", t.imageOpacity),
          void 0 !== t.imageIsMathJaxImage &&
            ee(x, "imageIsMathJaxImage", t.imageIsMathJaxImage),
          void 0 !== t.customWidth && ee(x, "customWidth", t.customWidth),
          void 0 !== t.extensions)
        ) {
          const e = { ...x.extensions };
          for (const n in t.extensions) {
            const r = t.extensions[n];
            r && (r.content || r.resources)
              ? (e[n] = {
                  content: r.content ?? null,
                  resources: r.resources ?? [],
                })
              : delete e[n];
          }
          ee(x, "extensions", e);
        }
        if (
          (void 0 !== t.shapeClass && ee(x, "shapeClass", t.shapeClass),
          void 0 !== t.fillColor && ee(x, "fillColor", t.fillColor),
          void 0 !== t.textColor && ee(x, "textColor", t.textColor),
          void 0 !== t.fontFamily && ee(x, "fontFamily", t.fontFamily),
          void 0 !== t.fontSize && ee(x, "fontSize", t.fontSize),
          void 0 !== t.lineClass && ee(x, "lineClass", t.lineClass),
          void 0 !== t.lineColor && ee(x, "lineColor", t.lineColor),
          void 0 !== t.lineWidth && ee(x, "lineWidth", t.lineWidth),
          void 0 !== t.linePattern && ee(x, "linePattern", t.linePattern),
          void 0 !== t.fillPattern && ee(x, "fillPattern", t.fillPattern),
          void 0 !== t.borderLineWidth &&
            ee(x, "borderLineWidth", t.borderLineWidth),
          void 0 !== t.borderLinePattern &&
            ee(x, "borderLinePattern", t.borderLinePattern),
          void 0 !== t.arrowEndClass && ee(x, "arrowEndClass", t.arrowEndClass),
          void 0 !== t.borderLineColor &&
            ee(x, "borderLineColor", t.borderLineColor),
          void 0 !== t.fontWeight && ee(x, "fontWeight", t.fontWeight),
          void 0 !== t.fontStyle && ee(x, "fontStyle", t.fontStyle),
          void 0 !== t.textTransform && ee(x, "textTransform", t.textTransform),
          void 0 !== t.textDecoration &&
            ee(x, "textDecoration", t.textDecoration),
          void 0 !== t.textAlign && ee(x, "textAlign", t.textAlign),
          void 0 !== t.alignmentByLevel &&
            ee(x, "alignmentByLevel", t.alignmentByLevel),
          void 0 !== t.numberingPattern &&
            ee(x, "numberingPattern", t.numberingPattern),
          void 0 !== t.numberingTiered &&
            ee(x, "numberingTiered", t.numberingTiered),
          void 0 !== t.numberingFixedIndex &&
            ee(x, "numberingFixedIndex", t.numberingFixedIndex),
          n === r.oz.Attached &&
            (void 0 !== t.numberingPattern || void 0 !== t.numberingFixedIndex))
        ) {
          const t = e.indexSet.parentTopics[d];
          t && (0, i.kE)(e, t);
        }
        if (void 0 !== f) {
          const t = x.ref;
          t !== f &&
            (ee(x, "ref", f),
            t && delete e.indexSet.idRefs[t],
            f && (e.indexSet.idRefs[f] = d));
        }
        const T = { ...o, parentTopicId: d };
        if (
          (void 0 !== m &&
            (!(function (e, t, n, i) {
              !n ||
                n.length < 1 ||
                (t.children?.forEach((t) => F(e, t)),
                ee(
                  t,
                  "children",
                  n.map((t) => D(e, t, r.oz.Attached, i)),
                ));
            })(e, x, m, T),
            (0, i.kE)(e, d)),
          void 0 !== y &&
            (function (e, t, n, i) {
              !n ||
                n.length < 1 ||
                (t.detachedChildren?.forEach((t) => F(e, t)),
                ee(
                  t,
                  "detachedChildren",
                  n.map((t) => D(e, t, r.oz.Detached, i)),
                ));
            })(e, x, y, T),
          void 0 !== v)
        ) {
          x.boundaries?.forEach((t) => $(e, t, !1));
          ee(
            x,
            "boundaries",
            v.map((t) => H(e, t, { ...T, parentTopicId: d })),
          );
        }
        const R = t.summaries;
        if (void 0 !== R) {
          x.summaries?.forEach((t) => U(e, t, !1));
          ee(
            x,
            "summaries",
            R.map((t) => K(e, t, { ...T, parentTopicId: d })),
          );
        }
        if (null != _) {
          F(e, _.id);
          ee(x, "callout", D(e, _, r.oz.Callout, { ...T, parentTopicId: d }));
        }
        if (void 0 !== g) {
          const {
            boundaries: t = [],
            summaries: n = [],
            relationships: r = [],
          } = g;
          s(e, x, t, 0, T), c(e, x, n, 0, T), l(e, r, T);
        }
        if (void 0 !== b) {
          const { boundaries: t = [], relationships: n = [] } = b;
          h(e, t, x.detachedChildren ?? [], T), l(e, n, T);
        }
        for (const n of t.additionalChildren ?? []) u(e, x, n, T);
        t.additionalChildren && (0, i.kE)(e, d);
        for (const n of t.additionalDetachedChildren ?? []) p(e, x, n, T);
        if (void 0 !== t.additionalBoundaries) {
          const n = t.additionalBoundaries.map((t) =>
            H(e, t, { ...T, parentTopicId: d }),
          );
          ee(x, "boundaries", [...(x.boundaries ?? []), ...n]);
        }
        if (void 0 !== t.additionalSummaries) {
          const n = t.additionalSummaries.map((t) =>
            K(e, t, { ...T, parentTopicId: d }),
          );
          ee(x, "summaries", [...(x.summaries ?? []), ...n]);
        }
        return (
          (function (e, t) {
            const n = oe((0, a.Ob)(e.elements[t])),
              { children: r, boundaries: i } = n;
            if (!i?.length) return;
            const o =
              i
                ?.map((t) => {
                  const {
                    rangeStart: n,
                    rangeEnd: i,
                    rangeType: o,
                  } = oe((0, a.j4)(e.elements[t]));
                  return "parent" === o || ce(n, i, r?.length ?? 0)
                    ? t
                    : ($(e, t, !1), null);
                })
                .filter((e) => null !== e) ?? [];
            ee(n, "boundaries", o.length ? o : null);
          })(e, d),
          (function (e, t) {
            const n = oe((0, a.Ob)(e.elements[t])),
              { children: r, summaries: i } = n;
            if (!i?.length) return;
            const o =
              i
                .map((t) => {
                  const {
                    rangeStart: n,
                    rangeEnd: i,
                    topicId: o,
                  } = oe((0, a.hg)(e, t));
                  return ce(n, i, r?.length ?? 0) && o && e.elements[o]
                    ? t
                    : (U(e, t, !1), null);
                })
                .filter((e) => !!e) ?? [];
            ee(n, "summaries", o.length ? o : null);
          })(e, d),
          d
        );
      }
      function L(e, t, n, r, i, o = 1) {
        t[n]?.map((t) => {
          const s =
            "boundaries" === n ? (0, a.j4)(e.elements[t]) : (0, a.hg)(e, t);
          if (!s) return;
          const { rangeStart: l, rangeEnd: c } = s;
          !le(l) ||
            !le(c) ||
            l < 0 ||
            c < l ||
            (i < l || ("before" !== r && i === l)
              ? (ee(s, "rangeStart", l + o), ee(s, "rangeEnd", c + o))
              : i <= ("after" === r ? c + 1 : c) && ee(s, "rangeEnd", c + o));
        });
      }
      function M(e, t, n) {
        const o = (0, a.Ob)(e.elements[t])?.numberingPattern;
        e.indexSet.topicTypes[t] === r.oz.Summary && U(e, t), F(e, t);
        const s = oe((0, a.Ob)(e.elements[n]));
        (s.children = s.children?.filter((e) => e !== t)),
          (s.detachedChildren = s.detachedChildren?.filter((e) => e !== t)),
          s.callout === t && ee(s, "callout", null),
          o && (0, i.kE)(e, n);
      }
      function F(e, t) {
        const { elements: n, indexSet: r } = e,
          i = (0, a.Ob)(n[t]);
        if (!i) return;
        const o = r.parentTopics[t];
        if (o) {
          const n = oe((0, a.Ob)(e.elements[o]));
          N(e, n, t, "boundaries"), N(e, n, t, "summaries");
        }
        [...(r.incomingRelationships[t] ?? [])].forEach((t) => E(e, t)),
          [...(r.outgoingRelationships[t] ?? [])].forEach((t) => E(e, t)),
          i.summaries?.map((t) => U(e, t, !1)),
          i.boundaries?.map((t) => $(e, t, !1));
        const { ref: s, children: l, callout: c } = i;
        l?.forEach((t) => F(e, t)),
          c && F(e, c),
          s && delete r.idRefs[s],
          delete r.parentTopics[t],
          delete r.ownerSheets[t],
          delete r.ownerSummaries[t],
          delete r.incomingRelationships[t],
          delete r.outgoingRelationships[t],
          delete r.topicTypes[t],
          delete r.topicNumberingIndices[t],
          delete n[t];
      }
      function N(e, t, n, r, i = !1) {
        const o = (t.children ?? []).indexOf(n);
        o < 0 ||
          (t[r] = t[r]
            ?.map((t) => {
              const n =
                "boundaries" === r ? (0, a.j4)(e.elements[t]) : (0, a.hg)(e, t);
              if (!n) return;
              const { rangeStart: s, rangeEnd: l } = n;
              if (le(s) && le(l)) {
                if (o < s) (n.rangeStart = s - 1), (n.rangeEnd = l - 1);
                else if (s <= o && o <= l) {
                  if (o === s && s === l)
                    return "boundary" === n.type && "parent" === n.rangeType
                      ? t
                      : void (i || ("boundaries" === r ? $ : U)(e, t, !1));
                  n.rangeEnd = l - 1;
                }
                return t;
              }
            })
            .filter((e) => !!e));
      }
      function W(e, t) {
        return x(e, (e, n, r) => {
          const i = he(e, t.id);
          z(e, t, { refResolver: n, ownerSheetId: i }), r(i);
        });
      }
      function z(e, t, n) {
        const { id: r, ref: i, source: o, target: s } = t;
        e.elements[r] || (e.elements[r] = { id: r, type: "relationship" });
        const l = oe((0, a.$D)(e.elements[r]));
        if (
          (void 0 !== n.ownerSheetId &&
            (e.indexSet.ownerSheets[r] = n.ownerSheetId),
          void 0 !== i)
        ) {
          const t = l.ref;
          t !== i &&
            (ee(l, "ref", i),
            t && delete e.indexSet.idRefs[t],
            i && (e.indexSet.idRefs[i] = r));
        }
        void 0 !== t.classes &&
          ee(l, "classes", t.classes.length > 0 ? [...t.classes] : null),
          void 0 !== t.title && ee(l, "title", t.title),
          void 0 !== t.attributedTitle &&
            ee(l, "attributedTitle", t.attributedTitle),
          void 0 !== t.controlPoint1 && ee(l, "controlPoint1", t.controlPoint1),
          void 0 !== t.controlPoint2 && ee(l, "controlPoint2", t.controlPoint2),
          void 0 !== t.sourceRefPoint &&
            ee(l, "sourceRefPoint", t.sourceRefPoint),
          void 0 !== t.targetRefPoint &&
            ee(l, "targetRefPoint", t.targetRefPoint),
          void 0 !== t.shapeClass && ee(l, "shapeClass", t.shapeClass),
          void 0 !== t.textColor && ee(l, "textColor", t.textColor),
          void 0 !== t.fontFamily && ee(l, "fontFamily", t.fontFamily),
          void 0 !== t.fontSize && ee(l, "fontSize", t.fontSize),
          void 0 !== t.lineColor && ee(l, "lineColor", t.lineColor),
          void 0 !== t.lineWidth && ee(l, "lineWidth", t.lineWidth),
          void 0 !== t.linePattern && ee(l, "linePattern", t.linePattern),
          void 0 !== t.arrowBeginClass &&
            ee(l, "arrowBeginClass", t.arrowBeginClass),
          void 0 !== t.arrowEndClass && ee(l, "arrowEndClass", t.arrowEndClass),
          void 0 !== t.fontWeight && ee(l, "fontWeight", t.fontWeight),
          void 0 !== t.fontStyle && ee(l, "fontStyle", t.fontStyle),
          void 0 !== t.textTransform && ee(l, "textTransform", t.textTransform),
          void 0 !== t.textDecoration &&
            ee(l, "textDecoration", t.textDecoration),
          void 0 !== t.textAlign && ee(l, "textAlign", t.textAlign);
        const c = (t) =>
            e.indexSet.ownerSheets[t] === e.indexSet.ownerSheets[r],
          u = (t, n) => {
            const i =
              "targetId" === t
                ? "incomingRelationships"
                : "outgoingRelationships";
            e.indexSet[i][n] = [...(e.indexSet[i][n] ?? []), r];
          },
          d = (t, i) => {
            if ("id" in i) {
              const n = i.id;
              e.elements[n] && c(n) && (ee(l, t, n), u(t, n));
            } else
              n.refResolver.onResolved(i.ref, (e, n) => {
                c(n) && ((oe((0, a.$D)(e.elements[r]))[t] = n), u(t, n));
              });
          };
        return o && d("sourceId", o), s && d("targetId", s), r;
      }
      function B(e, t, n) {
        const { source: r, target: i } = n,
          { elements: o, indexSet: s } = e,
          a = (e) => {
            const n = e ? ne(e, s.idRefs) : void 0;
            if (n && o[n] && s.ownerSheets[n] === s.ownerSheets[t]) return n;
          },
          l = a(r),
          c = a(i);
        return l || c ? { sourceId: l, targetId: c } : null;
      }
      function q(e, t, n) {
        const r = oe((0, a.$D)(e.elements[t])),
          i = (n, i) => {
            if (!i) return;
            const o =
                "targetId" === n
                  ? "incomingRelationships"
                  : "outgoingRelationships",
              s = r[n];
            s && (e.indexSet[o][s] = e.indexSet[o][s]?.filter((e) => e !== t)),
              (r[n] = i),
              (e.indexSet[o][i] = [...(e.indexSet[o][i] ?? []), t]);
          },
          { sourceId: o, targetId: s } = n;
        i("sourceId", o), i("targetId", s);
      }
      function V(e, t) {
        return x(e, (n, r, i) => {
          const o = he(n, t.id),
            s = oe(e.indexSet.parentTopics[t.id]);
          H(n, t, { refResolver: r, ownerSheetId: o, parentTopicId: s }), i(o);
        });
      }
      function H(e, t, n) {
        const {
          id: r,
          ref: i,
          title: o,
          rangeStart: s,
          rangeEnd: l,
          rangeType: c,
        } = t;
        e.elements[r] || (e.elements[r] = { id: r, type: "boundary" });
        const u = oe((0, a.j4)(e.elements[r])),
          { ownerSheetId: d, parentTopicId: h } = n;
        if (
          ((e.indexSet.ownerSheets[r] = d),
          (e.indexSet.parentTopics[r] = h),
          void 0 !== i)
        ) {
          const t = u.ref;
          t !== i &&
            (ee(u, "ref", i),
            t && delete e.indexSet.idRefs[t],
            i && (e.indexSet.idRefs[i] = r));
        }
        return (
          void 0 !== o && ee(u, "title", o),
          void 0 !== t.attributedTitle &&
            ee(u, "attributedTitle", t.attributedTitle),
          "parent" === c
            ? (ee(u, "rangeType", "parent"),
              ee(u, "rangeStart", 0),
              ee(u, "rangeEnd", 0))
            : "parent" !== u.rangeType &&
              (ee(u, "rangeType", "children"),
              void 0 !== s && ee(u, "rangeStart", s),
              void 0 !== l && ee(u, "rangeEnd", l)),
          void 0 !== t.classes &&
            ee(u, "classes", t.classes.length > 0 ? [...t.classes] : null),
          void 0 !== t.shapeClass && ee(u, "shapeClass", t.shapeClass),
          void 0 !== t.fillColor && ee(u, "fillColor", t.fillColor),
          void 0 !== t.fillOpacity && ee(u, "fillOpacity", t.fillOpacity),
          void 0 !== t.textColor && ee(u, "textColor", t.textColor),
          void 0 !== t.fontFamily && ee(u, "fontFamily", t.fontFamily),
          void 0 !== t.fontSize && ee(u, "fontSize", t.fontSize),
          void 0 !== t.lineColor && ee(u, "lineColor", t.lineColor),
          void 0 !== t.lineWidth && ee(u, "lineWidth", t.lineWidth),
          void 0 !== t.linePattern && ee(u, "linePattern", t.linePattern),
          void 0 !== t.fillPattern && ee(u, "fillPattern", t.fillPattern),
          void 0 !== t.fontWeight && ee(u, "fontWeight", t.fontWeight),
          void 0 !== t.fontStyle && ee(u, "fontStyle", t.fontStyle),
          void 0 !== t.textTransform && ee(u, "textTransform", t.textTransform),
          void 0 !== t.textDecoration &&
            ee(u, "textDecoration", t.textDecoration),
          void 0 !== t.textAlign && ee(u, "textAlign", t.textAlign),
          r
        );
      }
      function $(e, t, n = !0) {
        const { elements: r, indexSet: i } = e,
          o = (0, a.j4)(r[t]);
        if (!o) return;
        if (n) {
          const n = e.indexSet.parentTopics[t];
          if (n) {
            const r = oe((0, a.Ob)(e.elements[n]));
            r.boundaries = r.boundaries?.filter((e) => e !== t);
          }
        }
        const s = o.ref;
        s && delete i.idRefs[s],
          [...(i.incomingRelationships[t] ?? [])].forEach((t) => E(e, t)),
          [...(i.outgoingRelationships[t] ?? [])].forEach((t) => E(e, t)),
          delete i.incomingRelationships[t],
          delete i.outgoingRelationships[t],
          delete i.parentTopics[t],
          delete i.ownerSheets[t],
          delete r[t];
      }
      function Z(e, t, n) {
        const { elements: r, indexSet: i } = e,
          { parentTopic: o, rangeType: s } = n;
        if ("parent" === s) {
          const e = o ? ne(o, i.idRefs) : null;
          return e && "topic" === r[e]?.type && "detached" === i.topicTypes[e]
            ? { rangeType: "parent", parentTopicId: e }
            : null;
        }
        let l = null;
        if (
          o &&
          ((l = o ? ne(o, i.idRefs) : null), !l || "topic" !== r[l]?.type)
        )
          return null;
        const c = l ?? oe(i.parentTopics[t]),
          u = oe((0, a.Ob)(r[c])),
          d = u.children?.length ?? 0;
        if (d <= 0) return null;
        const { rangeStart: h, rangeEnd: p } = n,
          f = oe((0, a.j4)(r[t])),
          m = le(h) && h >= 0 && h < d ? h : f.rangeStart,
          g = le(p) && p >= 0 && p < d ? p : f.rangeEnd;
        if (!le(m) || !le(g) || m > g) return null;
        const y = { rangeType: "children", rangeStart: m, rangeEnd: g };
        return l ? { ...y, parentTopicId: l } : y;
      }
      function J(e, t, n) {
        const {
            rangeStart: r,
            rangeEnd: i,
            parentTopicId: o,
            rangeType: s,
          } = n,
          l = oe((0, a.j4)(e.elements[t]));
        o && (e.indexSet.parentTopics[t] = o),
          "parent" === s
            ? (ee(l, "rangeType", "parent"),
              ee(l, "rangeStart", 0),
              ee(l, "rangeEnd", 0))
            : (ee(l, "rangeType", "children"),
              le(r) && ee(l, "rangeStart", r),
              le(i) && ee(l, "rangeEnd", i));
      }
      function X(e, t) {
        return x(e, (n, r, i) => {
          const o = he(n, t.id),
            s = oe(e.indexSet.parentTopics[t.id]);
          K(n, t, { refResolver: r, ownerSheetId: o, parentTopicId: s }), i(o);
        });
      }
      function K(e, t, n) {
        const { id: i, topic: o, rangeStart: s, rangeEnd: l } = t;
        e.elements[i] || (e.elements[i] = { id: i, type: "summary" });
        const c = oe((0, a.So)(e.elements[i])),
          { ownerSheetId: u, parentTopicId: d } = n;
        (e.indexSet.ownerSheets[i] = u),
          (e.indexSet.parentTopics[i] = d),
          null != o &&
            ee(
              c,
              "topicId",
              D(e, o, r.oz.Summary, { ...n, ownerSummaryId: i }),
            ),
          void 0 !== s && ee(c, "rangeStart", s),
          void 0 !== l && ee(c, "rangeEnd", l),
          void 0 !== t.classes &&
            ee(c, "classes", t.classes.length > 0 ? [...t.classes] : null),
          void 0 !== t.shapeClass && ee(c, "shapeClass", t.shapeClass),
          void 0 !== t.lineColor && ee(c, "lineColor", t.lineColor),
          void 0 !== t.lineWidth && ee(c, "lineWidth", t.lineWidth),
          void 0 !== t.linePattern && ee(c, "linePattern", t.linePattern);
        return oe(c.topicId);
      }
      function U(e, t, n = !0) {
        const { elements: r, indexSet: i } = e,
          o = (0, a.hg)(e, t);
        if (!o) return;
        const s = o.id;
        if (n) {
          const n = e.indexSet.parentTopics[s];
          if (n) {
            const r = oe((0, a.Ob)(e.elements[n]));
            r.summaries = r.summaries?.filter((e) => e !== t) ?? [];
          }
        }
        F(e, t), delete i.parentTopics[s], delete i.ownerSheets[s], delete r[s];
      }
      function G(e, t, n) {
        const r = oe(e.indexSet.parentTopics[t]),
          i = oe((0, a.Ob)(e.elements[r])),
          { rangeStart: o, rangeEnd: s } = n;
        if (void 0 === o && void 0 === s) return null;
        const l = i.children?.length ?? 0,
          c = oe((0, a.hg)(e, t)),
          u = le(o) ? o : c.rangeStart,
          d = le(s) ? s : c.rangeEnd;
        return void 0 === u || void 0 === d
          ? null
          : ce(u, d, l)
            ? { rangeStart: u, rangeEnd: d }
            : null;
      }
      function Y(e, t, n) {
        const { rangeStart: r, rangeEnd: i } = n,
          o = oe((0, a.hg)(e, t));
        le(r) && ee(o, "rangeStart", r), le(i) && ee(o, "rangeEnd", i);
      }
      class Q {
        _callbacksMap = new Map();
        onResolved(e, t) {
          const n = this._callbacksMap.get(e) ?? [];
          this._callbacksMap.set(e, [...n, t]);
        }
        resolve(e) {
          this._callbacksMap.forEach((t, n) => {
            const r = e.indexSet.idRefs[n];
            r && t.forEach((t) => t(e, r));
          });
        }
      }
      function ee(e, t, n) {
        Array.isArray(n) && n.length < 1
          ? delete e[t]
          : null !== n
            ? (e[t] = n)
            : delete e[t];
      }
      function te(e, t, n) {
        const r = e[t];
        if (!r) return;
        let i = -1;
        for (; (i = r.findIndex((e) => e === n)) >= 0; ) r.splice(i, 1);
        r.length <= 0 && delete e[t];
      }
      function ne(e, t) {
        return "id" in e ? e.id : t[e.ref] ?? null;
      }
      function re(e, t, n, r) {
        const i = ie(r, t, n);
        i < 0 ? t.push(...e) : t.splice(i, 0, ...e);
      }
      function ie(e, t, n) {
        if (!e) return t.length;
        if ("at" in e) {
          const n = e.at;
          return "number" != typeof n || n < 0 || n > t.length ? -1 : n;
        }
        if (e.after) {
          const r = ne(e.after, n);
          if (!r) return -1;
          const i = t.indexOf(r);
          return i < 0 ? -1 : i + 1;
        }
        if (e.before) {
          const r = ne(e.before, n);
          if (!r) return -1;
          const i = t.indexOf(r);
          return i < 0 ? -1 : i;
        }
        return t.length;
      }
      function oe(e) {
        if (null == e) throw new Error("Object is null or undefined.");
        return e;
      }
      function se() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
          const t = (16 * Math.random()) | 0;
          return ("x" === e ? t : (3 & t) | 8).toString(16);
        });
      }
      function ae(e, t) {
        if (!(e instanceof t)) throw new Error("Invalid argument type");
        return e;
      }
      function le(e) {
        return "number" == typeof e;
      }
      function ce(e, t, n) {
        const r = (e) => e >= 0 && e < n;
        return le(e) && le(t) && r(e) && r(t) && e <= t;
      }
      function ue(e) {
        return e.filter((e) => le(e.rangeStart) && le(e.rangeEnd));
      }
      function de(e, t) {
        return e.map((e) => {
          const n = e.rangeEnd + 1 - e.rangeStart,
            r = e.rangeStart + t,
            i = r + n - 1;
          return { ...e, rangeStart: r, rangeEnd: i };
        });
      }
      function he(e, t) {
        return oe(e.indexSet.ownerSheets[t]);
      }
      function pe(e) {
        const { indexSet: t, elements: n } = e,
          i = e.indexSet.parentTopics,
          o = (e, t = 1) => {
            const n = i[e];
            return n ? o(n, t++) : t;
          },
          s = (e) =>
            [r.oz.Detached, r.oz.Summary, r.oz.Callout].includes(
              t.topicTypes[e],
            ),
          l = (e) => {
            const t = i[e];
            return (
              (0, a.Ob)(t ? n[t] : null)?.children?.findIndex((t) => t === e) ??
              -1
            );
          },
          c = (e, n) => {
            if (s(e)) return 1;
            if (s(n)) return -1;
            const r = o(e),
              i = o(n);
            if (r !== i) return r - i;
            const a = t.parentTopics[e],
              u = t.parentTopics[n];
            return a ? (u ? (a === u ? l(e) - l(n) : c(a, u)) : 1) : -1;
          };
        return c;
      }
      function fe(e, t) {
        const { parentTopics: n, topicTypes: i } = e.indexSet,
          o = [];
        let s = t;
        for (; s; )
          if ((o.push(s), i[s] !== r.oz.Summary)) s = n[s];
          else {
            const t = (0, a.hg)(e, s);
            (s = n[s]),
              t &&
                "number" == typeof t.rangeStart &&
                "number" == typeof t.rangeEnd &&
                s &&
                o.push(
                  ...((0, a.Ob)(e.elements[s])?.children?.slice(
                    t.rangeStart,
                    t.rangeEnd + 1,
                  ) ?? []),
                );
          }
        return o;
      }
    },
    46924: (e, t, n) => {
      "use strict";
      n.d(t, { sv: () => S, kH: () => R });
      var r = n(83556),
        i = n(6550),
        o = n(57358),
        s = n(65893),
        a = n(71381),
        l = n(84304);
      function c(e, t) {
        const n = {
            sheets: [],
            topics: [],
            boundaries: [],
            summaries: [],
            relationships: [],
            idMap: {},
            resources: new Set(),
          },
          {
            indexSet: { idRefs: r },
          } = e,
          i = [...new Set(t.map((e) => (0, s.IP)(e, r)).filter((e) => !!e))];
        return (
          (function (e, t, { sheets: n, idMap: r, resources: i }) {
            for (const o of t) {
              const t = d(e, o, r, i);
              t && n.push(t);
            }
          })(e, i, n),
          (function (
            e,
            t,
            {
              topics: n,
              boundaries: r,
              summaries: i,
              relationships: o,
              idMap: c,
              resources: u,
            },
          ) {
            const {
                elements: d,
                indexSet: {
                  parentTopics: x,
                  topicTypes: w,
                  incomingRelationships: S,
                  outgoingRelationships: k,
                },
              } = e,
              T = t.filter((e) => "topic" === d[e]?.type).sort((0, s.hT)(e));
            if (T.length <= 0) return;
            const R = (function (
                { indexSet: { topicTypes: e, parentTopics: t } },
                n,
              ) {
                const r = {};
                for (const i of n) {
                  if ("attached" !== e[i]) continue;
                  let o = t[i] ?? null,
                    s = !0;
                  for (; null !== o; ) {
                    if (n.includes(o)) {
                      if (s) {
                        r[o] = [...(r[o] ?? []), i];
                        break;
                      }
                      r[o] = r[o] ?? [];
                    }
                    (o = t[o] ?? null), (s = !1);
                  }
                }
                return r;
              })(e, T),
              O = {},
              C = new Set(),
              I = new Set(),
              j = new Set();
            let E = 0;
            for (const t of T) {
              if (t in O) continue;
              const i = _(e.indexSet, t);
              i && j.add(i);
              const o = x[t];
              if (o) {
                if (T.includes(o)) continue;
                const n = w[t];
                if (n === a.oz.Summary) {
                  I.add(t);
                  const n = (0, s.yR)((0, l.hg)(e, t));
                  if (p(n, (0, s.yR)((0, l.Ob)(d[o])).children ?? [], T) > 0)
                    continue;
                  j.delete(n.id);
                }
                n === a.oz.Attached && C.add(o);
              }
              const c = m(e, t, O, u, R);
              c.boundaries &&
                ((c.boundaries = c.boundaries.filter(
                  (e) =>
                    "children" === e.rangeType ||
                    (r.push({
                      ...e,
                      rangeType: "children",
                      rangeStart: E,
                      rangeEnd: E,
                    }),
                    !1),
                )),
                c.boundaries &&
                  0 === c.boundaries.length &&
                  delete c.boundaries),
                n.push(c),
                (E += 1);
            }
            for (const t of C) {
              const n = (0, s.yR)((0, l.Ob)(d[t])),
                o = (n.boundaries ?? []).map((e) => (0, s.yR)((0, l.j4)(d[e]))),
                a = (n.summaries ?? []).map((t) => (0, s.yR)((0, l.hg)(e, t))),
                c = n.children ?? [];
              r.push(
                ...o
                  .filter((e) => "children" === e.rangeType && h(e, c, T))
                  .map((t) => g(e, t.id, O, f(t, c, T))),
              ),
                i.push(
                  ...a
                    .map((t) => {
                      if (!j.has(t.id)) {
                        if (h(t, c, T)) return y(e, t.id, O, u, R, f(t, c, T));
                        if (t.topicId && I.has(t.topicId)) {
                          const n = p(t, c, T);
                          if (n > 0) {
                            const r = f(t, c, T);
                            return y(e, t.id, O, u, R, r, r + n - 1);
                          }
                        }
                      }
                    })
                    .filter((e) => !!e),
                );
            }
            const A = new Set();
            Object.keys(O).forEach((e) => {
              (c[e] = O[e]),
                (S[e] ?? []).forEach((e) => A.add(e)),
                (k[e] ?? []).forEach((e) => A.add(e));
            });
            for (const t of A) {
              if (t in c) continue;
              const n = b(e, t, c);
              n && o.push(n);
            }
            n.map((e) => v(e, c));
          })(e, i, n),
          n
        );
      }
      function u(e, t) {
        e && e.startsWith("xap:") && t.add(e.slice(4));
      }
      function d(e, t, n, r) {
        const i = (0, l.vB)(e.elements[t]);
        if (!i) return null;
        const {
            type: o,
            revisionId: a,
            rootTopicId: c,
            relationships: u,
            ...d
          } = i,
          h = c ? m(e, c, n, r, {}, !0) : { id: (0, s.Vj)() },
          p = (u ?? []).map((t) => b(e, t, n)).filter((e) => !!e),
          f = {
            ...d,
            id: (0, s.Vj)(),
            rootTopic: h,
            ...(p.length > 0 ? { relationships: p } : {}),
          };
        return (n[i.id] = f.id), v(h, n), f;
      }
      function h({ rangeStart: e, rangeEnd: t }, n, r) {
        return (
          !(!(0, s.hj)(e) || !(0, s.hj)(t)) &&
          !(e < 0 || e > t || t > n.length) &&
          [...n].splice(e, t - e + 1).every((e) => r.includes(e))
        );
      }
      function p({ rangeStart: e, rangeEnd: t }, n, r) {
        if (!(0, s.hj)(e) || !(0, s.hj)(t)) return 0;
        if (e < 0 || e > t || t > n.length) return 0;
        let i = 0;
        for (let o = e; o <= t; o++) r.includes(n[o]) && i++;
        return i;
      }
      function f({ rangeStart: e }, t, n) {
        if (!(0, s.hj)(e)) return 0;
        const r = t[e],
          i = n.indexOf(r);
        return i < 0 ? e ?? 0 : i;
      }
      function m(e, t, n, r, i, o = !1) {
        const a = (0, s.yR)((0, l.Ob)(e.elements[t])),
          {
            type: c,
            detachedChildren: d = [],
            children: p = [],
            boundaries: b = [],
            summaries: _ = [],
            callout: v,
            ...x
          } = a,
          w = i[t] ?? p,
          S = w.map((t) => m(e, t, n, r, i)),
          k = o ? d.map((t) => m(e, t, n, r, i)) : [],
          T = b.map((t) => (0, s.yR)((0, l.j4)(e.elements[t]))),
          R = _.map((t) => (0, s.yR)((0, l.hg)(e, t))),
          O = [],
          C = [];
        O.push(
          ...T.filter((e) => "children" !== e.rangeType || h(e, p, w)).map(
            (t) => g(e, t.id, n, f(t, p, w)),
          ),
        ),
          C.push(
            ...R.filter((e) => h(e, p, w)).map((t) =>
              y(e, t.id, n, r, i, f(t, p, w)),
            ),
          );
        const I = v ? m(e, v, n, r, i) : null,
          j = {
            ...x,
            ...(S.length > 0 ? { children: S } : {}),
            ...(k.length > 0 ? { detachedChildren: k } : {}),
            ...(O.length > 0 ? { boundaries: O } : {}),
            ...(C.length > 0 ? { summaries: C } : {}),
            ...(I ? { callout: I } : {}),
            id: (0, s.Vj)(),
          };
        return (
          (n[t] = j.id),
          a.imageSource && u(a.imageSource, r),
          a.href && u(a.href, r),
          a.extensions &&
            Object.values(a.extensions).forEach((e) => {
              e.resources?.forEach((e) => u(e, r));
            }),
          j
        );
      }
      function g(e, t, n, r) {
        const i = (0, s.yR)((0, l.j4)(e.elements[t])),
          { type: o, rangeStart: a, rangeEnd: c, ...u } = i,
          d = { ...u, id: (0, s.Vj)() };
        if ((0, s.hj)(a) && (0, s.hj)(c)) {
          const e = void 0 !== r ? r : a,
            t = e + c - a;
          (d.rangeStart = e), (d.rangeEnd = t);
        }
        return (n[t] = d.id), d;
      }
      function y(e, t, n, r, i, o, a) {
        const c = (0, s.yR)((0, l.So)(e.elements[t])),
          { topicId: u, type: d, rangeStart: h, rangeEnd: p, ...f } = c,
          g = {
            ...f,
            id: (0, s.Vj)(),
            ...(u ? { topic: m(e, u, n, r, i) } : { id: (0, s.Vj)() }),
          };
        if ((0, s.hj)(h) && (0, s.hj)(p)) {
          const e = void 0 !== o ? o : h,
            t = void 0 !== a ? a : e + p - h;
          (g.rangeStart = e), (g.rangeEnd = t);
        }
        return (n[t] = g.id), g;
      }
      function b(e, t, n) {
        const r = (0, s.yR)((0, l.$D)(e.elements[t])),
          { type: i, sourceId: o, targetId: a, ...c } = r,
          u = o ? n[o] : null,
          d = a ? n[a] : null;
        if (!u || !d) return null;
        const h = {
          ...c,
          id: (0, s.Vj)(),
          source: { id: u },
          target: { id: d },
        };
        return (n[t] = h.id), h;
      }
      function _(e, t) {
        const { parentTopics: n, topicTypes: r, ownerSummaries: i } = e;
        if (r[t] === a.oz.Summary) return;
        let o = t;
        for (; o && r[o] !== a.oz.Summary; ) o = n[o];
        return o ? i[o] : void 0;
      }
      function v(e, t) {
        if (e.href?.startsWith("xmind:#")) {
          const n = t[e.href.slice(7)];
          n && (e.href = "xmind:#" + n);
        }
        e.children?.map((e) => v(e, t)),
          e.detachedChildren?.map((e) => v(e, t)),
          e.summaries?.map((e) => {
            e.topic && v(e.topic, t);
          }),
          e.callout && v(e.callout, t);
      }
      var x = n(28897);
      const w = {
        fontFamily: null,
        fontSize: null,
        fontWeight: null,
        fontStyle: null,
        textDecoration: null,
        textColor: null,
        textAlign: null,
        textTransform: null,
      };
      class S {
        _repo;
        constructor(e) {
          this._repo = e;
        }
        get internalRepository() {
          return this._repo;
        }
        get sheets() {
          return this._repo.sheets.map((e) =>
            (0, s.yR)(this.query({ id: e })?.asSheet()),
          );
        }
        get metadataKeys() {
          return Object.keys(this._repo.metadata);
        }
        metadataFor(e) {
          return this._repo.metadata[e] ?? "";
        }
        query(e) {
          const t = (0, s.IP)(e, this._repo.indexSet.idRefs);
          if (!t) return null;
          const n = this._repo.elements[t];
          return "summary" === n?.type ? null : n ? new T(this, e, n) : null;
        }
        queryList(e) {
          return new M(this, e);
        }
        asMutable() {
          return new o.Mv(this._repo);
        }
        Sheet() {
          return new i.eN();
        }
        Topic() {
          return new i.GO();
        }
        Relationship() {
          return new i.XZ();
        }
        Boundary() {
          return new i.r3();
        }
        Summary() {
          return new i.gn();
        }
        Callout() {
          return new i.GO();
        }
      }
      class k {
        _ownerDocument;
        selector;
        _element;
        constructor(e, t, n) {
          (this._ownerDocument = e), (this.selector = t), (this._element = n);
        }
        get internalElement() {
          return this._element;
        }
        get ownerDocument() {
          return this._ownerDocument;
        }
      }
      class T extends k {
        get type() {
          return this._element.type;
        }
        asSheet() {
          return "sheet" !== this._element.type
            ? null
            : new R(this._ownerDocument, this.selector, this._element);
        }
        asTopic() {
          return "topic" !== this._element.type
            ? null
            : new C(this._ownerDocument, this.selector, this._element);
        }
        asRelationship() {
          return "relationship" !== this._element.type
            ? null
            : new A(this._ownerDocument, this.selector, this._element);
        }
        asRelationshipEnd() {
          return "topic" !== this._element.type &&
            "boundary" !== this._element.type
            ? null
            : new P(this._ownerDocument, this.selector, this._element);
        }
        asBoundary() {
          return "boundary" !== this._element.type
            ? null
            : new D(this._ownerDocument, this.selector, this._element);
        }
        asSummary() {
          const e = (0, l.hg)(
            this._ownerDocument.internalRepository,
            this._element.id,
          );
          return e ? new L(this._ownerDocument, this.selector, e) : null;
        }
      }
      class R extends k {
        get id() {
          return this._element.id;
        }
        get revisionId() {
          return this._element.revisionId;
        }
        get rootTopic() {
          const e = (0, s.yR)(this._element.rootTopicId);
          return (0, s.yR)(this._ownerDocument.query({ id: e })?.asTopic());
        }
        get relationships() {
          return (this._element.relationships ?? []).map((e) =>
            (0, s.yR)(this._ownerDocument.query({ id: e })?.asRelationship()),
          );
        }
        get styleClassNames() {
          return Object.keys(this._element.themeStyles ?? {});
        }
        get skeletonThemeId() {
          return this._element.skeletonThemeId ?? null;
        }
        get colorThemeId() {
          return this._element.colorThemeId ?? null;
        }
        get ref() {
          return this._element.ref ?? null;
        }
        get classes() {
          return this._element.classes ?? [];
        }
        get title() {
          return this._element.title ?? null;
        }
        get topicOverlapping() {
          return this._element.topicOverlapping ?? null;
        }
        get topicPositioning() {
          return this._element.topicPositioning ?? null;
        }
        get floatingTopicFlexibility() {
          return this._element.floatingTopicFlexibility ?? null;
        }
        get labelSortOrder() {
          return this._element.labelSortOrder ?? null;
        }
        get compactLayoutLevel() {
          return this._element.compactLayoutLevel ?? null;
        }
        get cjkFontFamily() {
          return this._element.cjkFontFamily ?? null;
        }
        get lineTapered() {
          return this._element.lineTapered ?? null;
        }
        get fillColor() {
          return this._element.fillColor ?? null;
        }
        get multiLineColors() {
          return this._element.multiLineColors ?? null;
        }
        get colorList() {
          return this._element.colorList ?? null;
        }
        get legendVisibility() {
          return this._element.legendVisibility ?? null;
        }
        get legendPosition() {
          return this._element.legendPosition ?? null;
        }
        get describedMarkers() {
          return [
            ...new Set(Object.keys(this._element.legendMarkers ?? {})),
          ].sort((e, t) => e.localeCompare(t));
        }
        get extensionProviders() {
          return Object.keys(this._element.extensions ?? {});
        }
        extensionBy(e) {
          const t = this._element.extensions?.[e];
          return t ? E(t) : null;
        }
        clone() {
          return F(
            c(this._ownerDocument.internalRepository, [
              { id: this._element.id },
            ]),
          );
        }
        query(e) {
          const { elements: t, indexSet: n } =
              this._ownerDocument.internalRepository,
            r = (0, s.IP)(e, n.idRefs);
          if (!r || n.ownerSheets[r] !== this.id) return null;
          const i = t[r];
          return i ? new T(this._ownerDocument, e, i) : null;
        }
        queryList(e) {
          return new M(this._ownerDocument, e);
        }
        markerDescriptionFor(e) {
          return this._element.legendMarkers?.[e] ?? null;
        }
        styleFor(e) {
          const t = e ? this._element.themeStyles?.[e] : null;
          return t ? new O(t) : null;
        }
        asMutable() {
          return new o.Wx(this.id, this._ownerDocument.internalRepository);
        }
        asMovable(e) {
          return o.tL.make(
            this._ownerDocument.internalRepository,
            this._element.id,
            e,
          );
        }
        asRemovable() {
          return o.x6.make(
            this._ownerDocument.internalRepository,
            this._element.id,
          );
        }
        Topic() {
          return new i.GO();
        }
        Relationship() {
          return new i.XZ();
        }
        Boundary() {
          return new i.r3();
        }
        Summary() {
          return new i.gn();
        }
        Callout() {
          return new i.GO();
        }
      }
      class O {
        _style;
        constructor(e) {
          this._style = e;
        }
        asTopicStyle() {
          return E(this._style);
        }
        asSheetStyle() {
          return E(this._style);
        }
        asRelationshipStyle() {
          return E(this._style);
        }
        asBoundaryStyle() {
          return E(this._style);
        }
        asSummaryStyle() {
          return E(this._style);
        }
        asGlobalStyle() {
          return E(this._style);
        }
        asAnyStyle() {
          return E(this._style);
        }
      }
      class C extends k {
        taskStats = { taskDescendants: [], initialized: !1 };
        get id() {
          return this._element.id;
        }
        get ref() {
          return this._element.ref ?? null;
        }
        get classes() {
          return this._element.classes ?? [];
        }
        get topicType() {
          return (0, s.yR)(
            this._ownerDocument.internalRepository.indexSet.topicTypes[this.id],
          );
        }
        get title() {
          return this._element.title ?? null;
        }
        get titleUnedited() {
          return this._element.titleUnedited ?? null;
        }
        get attributedTitle() {
          return (
            this._element.attributedTitle?.map((e) => ({ ...w, ...e })) ?? []
          );
        }
        get href() {
          return this._element.href ?? null;
        }
        get labels() {
          return [...(this._element.labels ?? [])];
        }
        get markers() {
          return [...(this._element.markers ?? [])];
        }
        get notes() {
          return this._element.notes ?? null;
        }
        get position() {
          return this._element.position ?? null;
        }
        get structureClass() {
          return this._element.structureClass ?? null;
        }
        get branchState() {
          return this._element.branchState ?? null;
        }
        get extensionProviders() {
          return Object.keys(this._element.extensions ?? {});
        }
        get imageSource() {
          return this._element.imageSource ?? null;
        }
        get imageWidth() {
          return this._element.imageWidth ?? null;
        }
        get imageHeight() {
          return this._element.imageHeight ?? null;
        }
        get imagePlacement() {
          return this._element.imagePlacement ?? null;
        }
        get imageLockRatio() {
          return this._element.imageLockRatio ?? null;
        }
        get imageBorderLineColor() {
          return this._element.imageBorderLineColor ?? null;
        }
        get imageBorderLineWidth() {
          return this._element.imageBorderLineWidth ?? null;
        }
        get imageShadowVisible() {
          return this._element.imageShadowVisible ?? null;
        }
        get imageOpacity() {
          return this._element.imageOpacity ?? null;
        }
        get imageIsMathJaxImage() {
          return this._element.imageIsMathJaxImage ?? null;
        }
        get shapeClass() {
          return this._element.shapeClass ?? null;
        }
        get lineClass() {
          return this._element.lineClass ?? null;
        }
        get lineWidth() {
          return this._element.lineWidth ?? null;
        }
        get linePattern() {
          return this._element.linePattern ?? null;
        }
        get fillPattern() {
          return this._element.fillPattern ?? null;
        }
        get borderLineWidth() {
          return this._element.borderLineWidth ?? null;
        }
        get borderLinePattern() {
          return this._element.borderLinePattern ?? null;
        }
        get arrowEndClass() {
          return this._element.arrowEndClass ?? null;
        }
        get fontFamily() {
          return this._element.fontFamily ?? null;
        }
        get fontSize() {
          return this._element.fontSize ?? null;
        }
        get fillColor() {
          return this._element.fillColor ?? null;
        }
        get lineColor() {
          return this._element.lineColor ?? null;
        }
        get textColor() {
          return this._element.textColor ?? null;
        }
        get borderLineColor() {
          return this._element.borderLineColor ?? null;
        }
        get fontWeight() {
          return this._element.fontWeight ?? null;
        }
        get fontStyle() {
          return this._element.fontStyle ?? null;
        }
        get textTransform() {
          return this._element.textTransform ?? null;
        }
        get textDecoration() {
          return this._element.textDecoration ?? null;
        }
        get textAlign() {
          return this._element.textAlign ?? null;
        }
        get customWidth() {
          return this._element.customWidth ?? null;
        }
        get alignmentByLevel() {
          return this._element.alignmentByLevel ?? null;
        }
        get task() {
          const e = this._element.extensions?.["org.xmind.ui.task"]?.content;
          if (!(0, x.gK)(e) || "object" != typeof e || Array.isArray(e))
            return null;
          const { status: t } = e;
          return "todo" !== t && "done" !== t ? null : { status: t };
        }
        get taskPresentation() {
          return (
            this.initializeTaskStats(),
            this.taskDescendants.length ? "progress" : "todo"
          );
        }
        get taskDescendants() {
          return (
            this.initializeTaskStats(), [...this.taskStats.taskDescendants]
          );
        }
        get aggregatedCountOfTodos() {
          return (
            this.initializeTaskStats(),
            this.taskStats.aggregatedCountOfTodos ?? null
          );
        }
        get aggregatedCountOfCheckedTodos() {
          return (
            this.initializeTaskStats(),
            this.taskStats.aggregatedCountOfCheckedTodos ?? null
          );
        }
        get parentTopic() {
          const e =
            this._ownerDocument.internalRepository.indexSet.parentTopics[
              this.id
            ];
          return e
            ? this._ownerDocument.query({ id: e })?.asTopic() ?? null
            : null;
        }
        get ownerSheet() {
          const e = (0, s.yR)(
            this._ownerDocument.internalRepository.indexSet.ownerSheets[
              this.id
            ],
          );
          return (0, s.yR)(this._ownerDocument.query({ id: e })?.asSheet());
        }
        get ownerSummary() {
          return (
            this._ownerDocument.query({ id: this.id })?.asSummary() ?? null
          );
        }
        get children() {
          return (this._element.children ?? []).map((e) =>
            (0, s.yR)(this._ownerDocument.query({ id: e })?.asTopic()),
          );
        }
        get detachedChildren() {
          return (this._element.detachedChildren ?? []).map((e) =>
            (0, s.yR)(this._ownerDocument.query({ id: e })?.asTopic()),
          );
        }
        get boundaries() {
          return (this._element.boundaries ?? []).map((e) =>
            (0, s.yR)(this._ownerDocument.query({ id: e })?.asBoundary()),
          );
        }
        get summaries() {
          return (this._element.summaries ?? []).map((e) =>
            (0, s.yR)(this._ownerDocument.query({ id: e })?.asSummary()),
          );
        }
        get callout() {
          const e = this._element.callout;
          return e
            ? (0, s.yR)(this._ownerDocument.query({ id: e })?.asTopic())
            : null;
        }
        extensionBy(e) {
          const t = this._element.extensions?.[e];
          return t ? E(t) : null;
        }
        asRelationshipEnd() {
          return (0, s.yR)(
            this._ownerDocument.query({ id: this.id })?.asRelationshipEnd(),
          );
        }
        asMovable(e) {
          return o.E9.make(
            this._ownerDocument.internalRepository,
            this._element.id,
            e,
          );
        }
        asRemovable() {
          return o.Bg.make(
            this._ownerDocument.internalRepository,
            this._element.id,
          );
        }
        asMutable() {
          return new o.Gf(this.id, this._ownerDocument.internalRepository);
        }
        asSummary() {
          return (
            this._ownerDocument.query({ id: this.id })?.asSummary() ?? null
          );
        }
        Boundary() {
          return (0, r.EW)();
        }
        initializeTaskStats() {
          if (!this.task) return null;
          if (this.taskStats.initialized) return null;
          const e = (t) => {
            t.children?.forEach((t) => {
              const n = (0, s.yR)(
                  this._ownerDocument.internalRepository.elements[t],
                ),
                r = (0, s.yR)(this.ownerSheet.query({ id: t })?.asTopic()),
                i = r.task;
              if (!i) return e(n);
              this.taskStats.taskDescendants = [
                ...this.taskStats.taskDescendants,
                t,
                ...r.taskDescendants,
              ];
              const o = !r.taskDescendants.length,
                a = r.aggregatedCountOfTodos ?? 0;
              this.taskStats.aggregatedCountOfTodos =
                (this.taskStats.aggregatedCountOfTodos ?? 0) + (o ? 1 : a);
              const l = r.aggregatedCountOfCheckedTodos ?? 0;
              this.taskStats.aggregatedCountOfCheckedTodos =
                (this.taskStats.aggregatedCountOfCheckedTodos ?? 0) +
                (o && "done" === i.status ? 1 : l);
            });
          };
          e(this._element), (this.taskStats.initialized = !0);
        }
        get numberingPattern() {
          return this._element.numberingPattern ?? null;
        }
        get numberingTiered() {
          return this._element.numberingTiered ?? null;
        }
        get numberingFixedIndex() {
          return this._element.numberingFixedIndex ?? null;
        }
        get numberingIndex() {
          return (
            this._ownerDocument.internalRepository.indexSet
              .topicNumberingIndices[this._element.id] ?? null
          );
        }
      }
      class I {
        _ownerDocument;
        _selectors;
        _ownerSheets;
        constructor(e, t) {
          this._ownerDocument = e;
          const n = this._ownerDocument.internalRepository;
          (this._selectors = t),
            (this._ownerSheets = new Set(
              this._selectors
                .map((e) => {
                  const t = (0, s.IP)(e, n.indexSet.idRefs);
                  return t ? n.indexSet.ownerSheets[t] ?? null : null;
                })
                .filter((e) => !!e),
            ));
        }
        get ownerDocument() {
          return this._ownerDocument;
        }
        get primaryOwnerSheet() {
          return this._ownerSheets.size > 0
            ? this._ownerDocument
                .query({ id: [...this._ownerSheets][0] })
                ?.asSheet() ?? null
            : null;
        }
        get ownerSheets() {
          return [...this._ownerSheets]
            .map((e) => this._ownerDocument.query({ id: e })?.asSheet())
            .filter((e) => !!e);
        }
        get selectors() {
          return [...this._selectors];
        }
        asMutable() {
          return new o.gt(
            this._ownerDocument.internalRepository,
            this._selectors,
          );
        }
        asMovable(e) {
          return o.xb.make(
            this._ownerDocument.internalRepository,
            this._selectors,
            e,
          );
        }
        asRemovable() {
          return o.GR.make(
            this._ownerDocument.internalRepository,
            this._selectors,
          );
        }
      }
      const j = {
        get(...e) {
          const t = Reflect.get(...e) ?? null;
          return "object" == typeof t && null !== t ? E(t) : t;
        },
        set: () => !1,
        deleteProperty: () => !1,
        ownKeys: (...e) => Reflect.ownKeys(...e),
        getOwnPropertyDescriptor: (...e) =>
          Reflect.getOwnPropertyDescriptor(...e),
      };
      function E(e) {
        return new Proxy(e, j);
      }
      class A extends k {
        get id() {
          return this._element.id;
        }
        get ref() {
          return this._element.ref ?? null;
        }
        get classes() {
          return this._element.classes ?? [];
        }
        get source() {
          const e = (0, s.yR)(this._element.sourceId);
          return (0, s.yR)(
            this._ownerDocument.query({ id: e })?.asRelationshipEnd(),
          );
        }
        get target() {
          const e = (0, s.yR)(this._element.targetId);
          return (0, s.yR)(
            this._ownerDocument.query({ id: e })?.asRelationshipEnd(),
          );
        }
        get ownerSheet() {
          const e = (0, s.yR)(
            this._ownerDocument.internalRepository.indexSet.ownerSheets[
              this.id
            ],
          );
          return (0, s.yR)(this._ownerDocument.query({ id: e })?.asSheet());
        }
        get title() {
          return this._element.title ?? null;
        }
        get attributedTitle() {
          return (
            this._element.attributedTitle?.map((e) => ({ ...w, ...e })) ?? []
          );
        }
        get controlPoint1() {
          return this._element.controlPoint1 ?? null;
        }
        get controlPoint2() {
          return this._element.controlPoint2 ?? null;
        }
        get sourceRefPoint() {
          return this._element.sourceRefPoint ?? null;
        }
        get targetRefPoint() {
          return this._element.targetRefPoint ?? null;
        }
        get shapeClass() {
          return this._element.shapeClass ?? null;
        }
        get lineWidth() {
          return this._element.lineWidth ?? null;
        }
        get linePattern() {
          return this._element.linePattern ?? null;
        }
        get arrowBeginClass() {
          return this._element.arrowBeginClass ?? null;
        }
        get arrowEndClass() {
          return this._element.arrowEndClass ?? null;
        }
        get fontFamily() {
          return this._element.fontFamily ?? null;
        }
        get fontSize() {
          return this._element.fontSize ?? null;
        }
        get lineColor() {
          return this._element.lineColor ?? null;
        }
        get textColor() {
          return this._element.textColor ?? null;
        }
        get fontWeight() {
          return this._element.fontWeight ?? null;
        }
        get fontStyle() {
          return this._element.fontStyle ?? null;
        }
        get textTransform() {
          return this._element.textTransform ?? null;
        }
        get textDecoration() {
          return this._element.textDecoration ?? null;
        }
        get textAlign() {
          return this._element.textAlign ?? null;
        }
        asMovable(e) {
          return o.y0.make(
            this._ownerDocument.internalRepository,
            this._element.id,
            e,
          );
        }
        remove() {
          return o.WV.remove(
            this._ownerDocument.internalRepository,
            this._element.id,
          );
        }
        asMutable() {
          return new o.ZT(this.id, this._ownerDocument.internalRepository);
        }
      }
      class P extends k {
        get id() {
          return this._element.id;
        }
        get type() {
          return "topic";
        }
        asTopic() {
          return "topic" !== this._element.type
            ? null
            : new C(this._ownerDocument, this.selector, this._element);
        }
        asBoundary() {
          return "boundary" !== this._element.type
            ? null
            : new D(this._ownerDocument, this.selector, this._element);
        }
        get incomingRelationships() {
          return (
            this._ownerDocument.internalRepository.indexSet
              .incomingRelationships[this.id] ?? []
          ).map((e) =>
            (0, s.yR)(this._ownerDocument.query({ id: e })?.asRelationship()),
          );
        }
        get outgoingRealtionships() {
          return (
            this._ownerDocument.internalRepository.indexSet
              .outgoingRelationships[this.id] ?? []
          ).map((e) =>
            (0, s.yR)(this._ownerDocument.query({ id: e })?.asRelationship()),
          );
        }
      }
      class D extends k {
        get id() {
          return this._element.id;
        }
        get ref() {
          return this._element.ref ?? null;
        }
        get classes() {
          return this._element.classes ?? [];
        }
        get rangeType() {
          return this._element.rangeType ?? "children";
        }
        get title() {
          return this._element.title ?? null;
        }
        get attributedTitle() {
          return (
            this._element.attributedTitle?.map((e) => ({ ...w, ...e })) ?? []
          );
        }
        get rangeStart() {
          return (0, s.yR)(this._element.rangeStart);
        }
        get rangeEnd() {
          return (0, s.yR)(this._element.rangeEnd);
        }
        get parentTopic() {
          const e = (0, s.yR)(
            this._ownerDocument.internalRepository.indexSet.parentTopics[
              this.id
            ],
          );
          return (0, s.yR)(this._ownerDocument.query({ id: e })?.asTopic());
        }
        get ownerSheet() {
          const e = (0, s.yR)(
            this._ownerDocument.internalRepository.indexSet.ownerSheets[
              this.id
            ],
          );
          return (0, s.yR)(this._ownerDocument.query({ id: e })?.asSheet());
        }
        get shapeClass() {
          return this._element.shapeClass ?? null;
        }
        get lineWidth() {
          return this._element.lineWidth ?? null;
        }
        get linePattern() {
          return this._element.linePattern ?? null;
        }
        get fillPattern() {
          return this._element.fillPattern ?? null;
        }
        get fillColor() {
          return this._element.fillColor ?? null;
        }
        get fillOpacity() {
          return this._element.fillOpacity ?? null;
        }
        get lineColor() {
          return this._element.lineColor ?? null;
        }
        get fontFamily() {
          return this._element.fontFamily ?? null;
        }
        get fontSize() {
          return this._element.fontSize ?? null;
        }
        get fontWeight() {
          return this._element.fontWeight ?? null;
        }
        get fontStyle() {
          return this._element.fontStyle ?? null;
        }
        get textTransform() {
          return this._element.textTransform ?? null;
        }
        get textDecoration() {
          return this._element.textDecoration ?? null;
        }
        get textAlign() {
          return this._element.textAlign ?? null;
        }
        get textColor() {
          return this._element.textColor ?? null;
        }
        asMovable(e) {
          return o.gm.make(
            this._ownerDocument.internalRepository,
            this._element.id,
            e,
          );
        }
        remove() {
          return o.M1.remove(
            this._ownerDocument.internalRepository,
            this._element.id,
          );
        }
        asMutable() {
          return new o.Eu(this._ownerDocument.internalRepository, this.id);
        }
      }
      class L extends k {
        get id() {
          return (0, s.yR)(this._element.topicId);
        }
        get classes() {
          return this._element.classes ?? [];
        }
        get rangeStart() {
          return (0, s.yR)(this._element.rangeStart);
        }
        get rangeEnd() {
          return (0, s.yR)(this._element.rangeEnd);
        }
        get topic() {
          const e = (0, s.yR)(this._element.topicId);
          return (0, s.yR)(this._ownerDocument.query({ id: e })?.asTopic());
        }
        get parentTopic() {
          const e = (0, s.yR)(
            this._ownerDocument.internalRepository.indexSet.parentTopics[
              this._element.id
            ],
          );
          return (0, s.yR)(this._ownerDocument.query({ id: e })?.asTopic());
        }
        get ownerSheet() {
          const e = (0, s.yR)(
            this._ownerDocument.internalRepository.indexSet.ownerSheets[
              this._element.id
            ],
          );
          return (0, s.yR)(this._ownerDocument.query({ id: e })?.asSheet());
        }
        get shapeClass() {
          return this._element.shapeClass ?? null;
        }
        get lineWidth() {
          return this._element.lineWidth ?? null;
        }
        get linePattern() {
          return this._element.linePattern ?? null;
        }
        get lineColor() {
          return this._element.lineColor ?? null;
        }
        asMutable() {
          return new o.NW(this._ownerDocument.internalRepository, this.id);
        }
        asMovable(e) {
          return o.zV.make(this._ownerDocument.internalRepository, this.id, e);
        }
        asTopic() {
          const e = (0, s.yR)(this._element.topicId);
          return (0, s.yR)(this._ownerDocument.query({ id: e })?.asTopic());
        }
        remove() {
          return o.Mz.remove(this._ownerDocument.internalRepository, this.id);
        }
      }
      class M {
        _ownerDocument;
        selectors;
        constructor(e, t) {
          (this._ownerDocument = e), (this.selectors = t);
        }
        get ownerDocument() {
          return this._ownerDocument;
        }
        asTopics() {
          return new I(this._ownerDocument, this.selectors);
        }
        clone() {
          return F(c(this._ownerDocument.internalRepository, this.selectors));
        }
      }
      function F({
        sheets: e,
        topics: t,
        boundaries: n,
        summaries: r,
        relationships: o,
        idMap: s,
        resources: a,
      }) {
        return {
          sheets: e.map((e) => new i.eN(e)),
          topics: t.map((e) => new i.GO(e)),
          boundaries: n.map((e) => new i.r3(e)),
          summaries: r.map((e) => new i.gn(e)),
          relationships: o.map((e) => new i.XZ(e)),
          idMap: s,
          resources: [...a],
        };
      }
    },
    84304: (e, t, n) => {
      "use strict";
      function r(e) {
        return "sheet" === e?.type ? e : null;
      }
      function i(e) {
        return "topic" === e?.type ? e : null;
      }
      function o(e) {
        return "relationship" === e?.type ? e : null;
      }
      function s(e) {
        return "boundary" === e?.type ? e : null;
      }
      function a(e) {
        return "summary" === e?.type ? e : null;
      }
      function l(e, t) {
        const n = i(e.elements[t]);
        if ("topic" !== n?.type) return null;
        if ("summary" !== e.indexSet.topicTypes[t]) return null;
        const r = e.indexSet.ownerSummaries[t];
        return r ? a(e.elements[r]) : null;
      }
      function c() {
        return {
          metadata: {},
          sheets: [],
          elements: {},
          indexSet: {
            idRefs: {},
            parentTopics: {},
            ownerSheets: {},
            ownerSummaries: {},
            incomingRelationships: {},
            outgoingRelationships: {},
            topicTypes: {},
            topicNumberingIndices: {},
          },
        };
      }
      n.d(t, {
        $D: () => o,
        E4: () => c,
        Ob: () => i,
        So: () => a,
        hg: () => l,
        j4: () => s,
        vB: () => r,
      });
    },
    28897: (e, t, n) => {
      "use strict";
      n.d(t, {
        CW: () => m,
        JJ: () => b,
        bi: () => d,
        gK: () => I,
        hX: () => l,
      });
      var r = n(71381),
        i = n(65893),
        o = n(46924),
        s = n(87494),
        a = n(42964);
      function l(e) {
        if (!e.sheets.length)
          return { content: [], metadata: {}, resources: [] };
        const t = new Set(),
          n = (e) => {
            e.startsWith("xap:") && t.add(e.slice(4));
          },
          a = e.sheets.map((e) =>
            (function (e, t) {
              const { id: n, rootTopic: r, relationships: s } = e,
                a = { id: n };
              (a.class = f([...e.classes, "sheet"]).join(" ")),
                (a.rootTopic = c(r, t)),
                s.length &&
                  (a.relationships = s.map((e) =>
                    (function (e) {
                      const t = { id: e.id },
                        n = f([...(e.classes ?? [])]);
                      n.length && (t.class = n.join(" "));
                      (t.end1Id = e.source.id),
                        (t.end2Id = e.target.id),
                        e.title && (t.title = e.title);
                      e.attributedTitle?.length &&
                        (t.attributedTitle = e.attributedTitle.map((e) => ({
                          text: e.text,
                          ...p(e),
                        })));
                      const r = {};
                      e.controlPoint1 && (r[0] = e.controlPoint1);
                      e.controlPoint2 && (r[1] = e.controlPoint2);
                      Object.keys(r).length && (t.controlPoints = r);
                      const o = {};
                      e.sourceRefPoint && (o[0] = e.sourceRefPoint);
                      e.targetRefPoint && (o[1] = e.targetRefPoint);
                      Object.keys(o).length && (t.lineEndPoints = o);
                      const s = h(e);
                      s && (t.style = { id: (0, i.Vj)(), properties: s });
                      return t;
                    })(e),
                  ));
              e.title && (a.title = e.title);
              e.topicOverlapping && (a.topicOverlapping = e.topicOverlapping);
              e.topicPositioning && (a.topicPositioning = e.topicPositioning);
              "flexible" === e.floatingTopicFlexibility &&
                (a.floatingTopicFlexible = !0);
              e.compactLayoutLevel &&
                (a.compactLayoutModeLevel = e.compactLayoutLevel);
              e.labelSortOrder && (a.labelSortOrder = e.labelSortOrder);
              if (e.legendVisibility) {
                const t = a.legend ?? {};
                (t.visibility = e.legendVisibility), (a.legend = t);
              }
              if (e.legendPosition) {
                const t = a.legend ?? {};
                (t.position = e.legendPosition), (a.legend = t);
              }
              if (e.describedMarkers.length) {
                const t = {};
                for (const n of e.describedMarkers)
                  t[n] = e.markerDescriptionFor(n);
                const n = a.legend ?? {};
                a.legend = { ...n, markers: t };
              }
              if (e.extensionProviders?.length) {
                const n = e.extensionProviders
                  .map((n) => {
                    const r = e.extensionBy(n);
                    if (!r) return null;
                    const i = { provider: n };
                    return (
                      r.content && (i.content = r.content),
                      r.resources.length &&
                        ((i.resourceRefs = r.resources),
                        r.resources.forEach((e) => t?.(e))),
                      i
                    );
                  })
                  .filter((e) => !!e);
                n.length && (a.extensions = n);
              }
              const l = h(e);
              l && (a.style = { id: (0, i.Vj)(), properties: l });
              const u = {},
                d = (0, i.xp)(e, o.kH).internalElement.themeStyles;
              for (const e in d) {
                const t = h(d[e]);
                t && (u[e] = { id: (0, i.Vj)(), properties: t });
              }
              e.skeletonThemeId && (u.skeletonThemeId = e.skeletonThemeId);
              e.colorThemeId && (u.colorThemeId = e.colorThemeId);
              return (a.theme = u), a;
            })(e, n),
          ),
          l = (function (e) {
            const t = { [r.KZ.DataStructureVersion]: s.iO },
              n = e.metadataKeys,
              i = (e, t) => (t[e] || (t[e] = {}), t[e]);
            return (
              n.forEach((n) => {
                const r = e.metadataFor(n);
                if (!r) return;
                const o = n.split("/"),
                  s = o.pop();
                let a = t;
                if (s) {
                  for (let e = 0; e < o.length; ++e) a = i(o[e], a);
                  a[s] = r;
                }
              }),
              t
            );
          })(e);
        return { content: a, metadata: l, resources: [...t] };
      }
      function c(e, t) {
        const {
            id: n,
            classes: o,
            title: s,
            titleUnedited: l,
            attributedTitle: d,
            notes: m,
            labels: g,
            imageSource: y,
            imageWidth: b,
            imageHeight: _,
            imagePlacement: v,
            imageLockRatio: x,
            imageBorderLineColor: S,
            imageBorderLineWidth: k,
            imageShadowVisible: T,
            imageOpacity: R,
            imageIsMathJaxImage: O,
            href: C,
            position: j,
            children: E,
            detachedChildren: A,
            summaries: P,
            boundaries: D,
            callout: L,
            markers: M,
            branchState: F,
            structureClass: N,
            customWidth: W,
            numberingPattern: z,
            numberingTiered: B,
            numberingFixedIndex: q,
          } = e,
          V = { id: n },
          H = f([
            ...(o ?? []),
            ...(e.topicType === r.oz.Root ? ["topic"] : []),
          ]);
        if (
          (H.length && (V.class = H.join(" ")),
          s && (V.title = s),
          null !== l && (V.titleUnedited = l),
          d?.length &&
            (V.attributedTitle = d.map((e) => ({ text: e.text, ...p(e) }))),
          m &&
            (V.notes = {
              ...(null !== m.text ? { plain: { content: m.text } } : {}),
              ...(null !== m.html ? { realHTML: { content: m.html } } : {}),
            }),
          g.length && (V.labels = g),
          y)
        ) {
          t?.(y);
          const e = { src: y };
          b && (e.width = b),
            _ && (e.height = _),
            v && (e.align = v),
            x && (e.lockRatio = x),
            S && (e.borderColor = S),
            k && (e.borderWidth = k),
            T && (e.shadowVisible = T),
            R && (e.opacity = R),
            O && (e.isMathJaxImage = O),
            (V.image = e);
        }
        if (
          (W && (V.customWidth = W),
          C && (t?.(C), (V.href = C)),
          M.length && (V.markers = M.map((e) => ({ markerId: e }))),
          j && (V.position = j),
          F && (V.branch = F),
          N && (V.structureClass = N),
          e.extensionProviders?.length)
        ) {
          const n = e.extensionProviders
            .map((n) => {
              const r = e.extensionBy(n);
              if (!r) return null;
              const i = { provider: n };
              return (
                r.content && (i.content = r.content),
                r.resources.length &&
                  ((i.resourceRefs = r.resources),
                  r.resources.forEach((e) => t?.(e))),
                i
              );
            })
            .filter((e) => !!e);
          n.length && (V.extensions = n);
        }
        if (I(z) || I(B) || I(q)) {
          const e = a.OM,
            t = {};
          I(z) && (t.pattern = z),
            I(B) && (t.tiered = B),
            I(q) && (t.fixedIndex = q);
          const n = (V.extensions ?? []).find((t) => t.provider === e);
          if (n) n.content = t;
          else {
            const n = { provider: e, content: t };
            V.extensions = [...(V.extensions ?? []), n];
          }
        } else
          V.extensions &&
            V.extensions.length &&
            ((V.extensions = V.extensions.filter((e) => e.provider !== a.OM)),
            V.extensions.length || delete V.extensions);
        if (
          (E.length && (V.children = { attached: E.map((e) => c(e, t)) }),
          A.length)
        ) {
          const e = "children" in V ? w(V.children) : {};
          V.children = { ...e, detached: A.map((e) => c(e, t)) };
        }
        if (
          (D.length &&
            (V.boundaries = D.map((e) =>
              (function (e) {
                const t = { id: e.id },
                  n = f([...(e.classes ?? [])]);
                n.length && (t.class = n.join(" "));
                (t.range =
                  "parent" === e.rangeType
                    ? "master"
                    : `(${e.rangeStart},${e.rangeEnd})`),
                  e.title && (t.title = e.title);
                e.attributedTitle?.length &&
                  (t.attributedTitle = e.attributedTitle.map((e) => ({
                    text: e.text,
                    ...p(e),
                  })));
                const r = h(e);
                r && (t.style = { id: (0, i.Vj)(), properties: r });
                return t;
              })(e),
            )),
          P.length)
        ) {
          V.summaries = P.map((e) =>
            (function (e) {
              const t = e.id,
                n = e.ownerDocument.internalRepository,
                r = { id: (0, i.yR)(n.indexSet.ownerSummaries[t]) },
                o = f([...(e.classes ?? [])]);
              o.length && (r.class = o.join(" "));
              (r.range = `(${e.rangeStart},${e.rangeEnd})`), (r.topicId = t);
              const s = h(e);
              s && (r.style = { id: (0, i.Vj)(), properties: s });
              return r;
            })(e),
          );
          const e = "children" in V ? w(V.children) : {};
          V.children = { ...e, summary: P.map((e) => c(e.asTopic(), t)) };
        }
        if (L) {
          const e = "children" in V ? w(V.children) : {};
          V.children = { ...e, callout: [u(L, t)] };
        }
        const $ = h(e);
        return $ && (V.style = { id: (0, i.Vj)(), properties: $ }), V;
      }
      function u(e, t) {
        const n = c(e, t),
          r = h(e);
        if (r && e.shapeClass) {
          let t = e.shapeClass;
          "org.xmind.topicShape.ellipse" === e.shapeClass
            ? (t = "org.xmind.calloutTopicShape.balloon.ellipse")
            : "org.xmind.topicShape.roundedRect" === e.shapeClass
              ? (t = "org.xmind.calloutTopicShape.balloon.roundedRect")
              : "org.xmind.topicShape.rect" === e.shapeClass &&
                (t = "org.xmind.calloutTopicShape.balloon.rectangle"),
            delete r["shape-class"],
            (r["callout-shape-class"] = t),
            (n.style = { id: (0, i.Vj)(), properties: r });
        }
        return n;
      }
      function d(e) {
        const t = {};
        Object.keys(e.fileEntries).forEach((n) => {
          const r = e.fileEntries[n],
            i = {};
          r.keyDerivationSize && (i.size = r.keyDerivationSize),
            r.keyDerivationIterationCount &&
              (i["iteration-count"] = r.keyDerivationIterationCount),
            r.keyDerivationAlgorithm &&
              (i["algorithm-name"] = r.keyDerivationAlgorithm),
            r.cipherAlgorithm && (i["key-derivation-name"] = r.cipherAlgorithm),
            r.keyDerivationSalt && (i.salt = r.keyDerivationSalt),
            r.keyDerivationIV && (i.iv = r.keyDerivationIV);
          const o = {};
          Object.keys(i).length > 0 && (o["encryption-data"] = i), (t[n] = o);
        });
        const n = { "file-entries": t };
        return e.passwordHint && (n["password-hint"] = e.passwordHint), n;
      }
      function h(e) {
        const t = {};
        return (
          Object.assign(t, p(e)),
          e.fillColor && (t["svg:fill"] = e.fillColor),
          e.fillOpacity && (t["svg:opacity"] = e.fillOpacity),
          e.fillPattern && (t["fill-pattern"] = e.fillPattern),
          e.lineWidth && (t["line-width"] = e.lineWidth),
          e.lineColor && (t["line-color"] = e.lineColor),
          e.linePattern && (t["line-pattern"] = e.linePattern),
          e.borderLineColor && (t["border-line-color"] = e.borderLineColor),
          e.borderLineWidth && (t["border-line-width"] = e.borderLineWidth),
          e.borderLinePattern &&
            (t["border-line-pattern"] = e.borderLinePattern),
          e.shapeClass && (t["shape-class"] = e.shapeClass),
          e.lineClass && (t["line-class"] = e.lineClass),
          e.arrowBeginClass && (t["arrow-begin-class"] = e.arrowBeginClass),
          e.arrowEndClass && (t["arrow-end-class"] = e.arrowEndClass),
          e.cjkFontFamily && (t["cjk-font-family"] = e.cjkFontFamily),
          e.multiLineColors && (t["multi-line-colors"] = e.multiLineColors),
          e.colorList && (t["color-list"] = e.colorList),
          e.lineTapered && (t["line-tapered"] = e.lineTapered),
          e.alignmentByLevel && (t["alignment-by-level"] = e.alignmentByLevel),
          e.globalLineWidthDisabled &&
            (t["global_line-width"] = e.globalLineWidthDisabled),
          e.globalFontFamilyDisabled &&
            (t["global_fo:font-family"] = e.globalFontFamilyDisabled),
          0 === Object.keys(t).length ? null : t
        );
      }
      function p(e) {
        const t = {};
        return (
          e.fontFamily && (t["fo:font-family"] = e.fontFamily),
          e.fontSize && (t["fo:font-size"] = e.fontSize),
          e.fontWeight && (t["fo:font-weight"] = e.fontWeight),
          e.fontStyle && (t["fo:font-style"] = e.fontStyle),
          e.textColor && (t["fo:color"] = e.textColor),
          e.textTransform && (t["fo:text-transform"] = e.textTransform),
          e.textDecoration && (t["fo:text-decoration"] = e.textDecoration),
          e.textAlign && (t["fo:text-align"] = e.textAlign),
          Object.keys(t).length ? t : null
        );
      }
      function f(e) {
        return Array.from(new Set(e.map((e) => e.trim()).filter((e) => !!e)));
      }
      function m(e, t) {
        const n = {};
        n.metadata = (function (e) {
          const t = {},
            n = (e, r) => {
              if ("object" != typeof e || null === e || Array.isArray(e))
                "string" == typeof e && r && (t[r] = e);
              else {
                const t = e;
                Object.keys(t).forEach((e) => n(t[e], r ? r + "/" + e : e));
              }
            };
          return n(e), t;
        })(t);
        const r = [],
          s = (e) => {
            if (r.includes(e))
              throw new Error(
                "Duplicated ID found during deserialization process.",
              );
            r.push(e);
          };
        return (
          (n.sheets = S(e).map((e) =>
            (function (e, t) {
              const n = k(e);
              t?.(n.id);
              const r = { id: n.id };
              I(n.class) && (r.classes = x(T(n.class), "sheet"));
              I(n.title) && (r.title = T(n.title));
              I(n.topicOverlapping) &&
                (r.topicOverlapping = T(n.topicOverlapping));
              I(n.topicPositioning) &&
                (r.topicPositioning = T(n.topicPositioning));
              I(n.floatingTopicFlexible) &&
                (r.floatingTopicFlexibility = "flexible");
              I(n.compactLayoutModeLevel) &&
                (r.compactLayoutLevel = T(n.compactLayoutModeLevel));
              I(n.labelSortOrder) && (r.labelSortOrder = T(n.labelSortOrder));
              if (I(n.style)) {
                const e = _(n.style);
                for (const t in e) {
                  const n = t;
                  r[n] = (0, i.yR)(e[n]);
                }
              }
              I(n.rootTopic) && (r.rootTopic = y(n.rootTopic, t));
              I(n.relationships) &&
                (r.relationships = S(n.relationships).map(
                  (e) =>
                    (function (e, t) {
                      const n = k(e);
                      t?.(n.id);
                      const r = { id: n.id };
                      I(n.class) && (r.classes = x(T(n.class), "relationship"));
                      I(n.title) && (r.title = T(n.title));
                      I(n.attributedTitle) &&
                        (r.attributedTitle = S(n.attributedTitle).map((e) => {
                          const t = w(e);
                          return { text: T(t.text), ...v(t) };
                        }));
                      if (I(n.controlPoints)) {
                        const e = (e) =>
                            "angle" in e &&
                            "number" == typeof e.angle &&
                            "amount" in e &&
                            "number" == typeof e.amount,
                          t = w(n.controlPoints);
                        if (I(t[0])) {
                          const n = w(t[0]);
                          r.controlPoint1 = e(n) ? n : C(n);
                        }
                        if (I(t[1])) {
                          const n = w(t[1]);
                          r.controlPoint2 = e(n) ? n : C(n);
                        }
                      }
                      if (I(n.lineEndPoints)) {
                        const e = w(n.lineEndPoints);
                        I(e[0]) && (r.sourceRefPoint = C(e[0])),
                          I(e[1]) && (r.targetRefPoint = C(e[1]));
                      }
                      if (I(n.style)) {
                        const e = _(n.style);
                        for (const t in e) {
                          const n = t;
                          r[n] = (0, i.yR)(e[n]);
                        }
                      }
                      I(n.end1Id) && (r.source = { id: T(n.end1Id) });
                      I(n.end2Id) && (r.target = { id: T(n.end2Id) });
                      return r;
                    })(e),
                  t,
                ));
              if (I(n.extensions)) {
                const e = S(n.extensions);
                r.extensions = {};
                for (const t of e) {
                  const e = w(t),
                    n = e.provider ? T(e.provider) : null;
                  if (n) {
                    const t = e.content ? g(e.content) : null,
                      i = e.resourceRefs
                        ? S(e.resourceRefs)
                            .map((e) => e)
                            .filter((e) => !!e)
                        : [];
                    (t || i.length) &&
                      (r.extensions[n] = { content: t, resources: i });
                  }
                }
              }
              if (I(n.theme)) {
                const e = w(n.theme);
                r.themeStyles = {};
                for (const t in e) {
                  const n = _(e[t]);
                  n && (r.themeStyles[t] = n);
                }
                I(e.skeletonThemeId) &&
                  (r.skeletonThemeId = T(e.skeletonThemeId)),
                  I(e.colorThemeId) && (r.colorThemeId = T(e.colorThemeId));
              }
              if (I(n.legend)) {
                const e = w(n.legend);
                if (
                  (I(e.visibility) && (r.legendVisibility = T(e.visibility)),
                  I(e.position))
                ) {
                  const t = w(e.position);
                  I(t.x) && I(t.y) && (r.legendPosition = C(e.position));
                }
                if (I(e.markers)) {
                  const t = w(e.markers ?? {});
                  r.legendMarkers = {};
                  for (const e of Object.keys(t)) r.legendMarkers[e] = t[e];
                }
              }
              return r;
            })(e, s),
          )),
          new o.sv((0, i.vA)(n))
        );
      }
      function g(e) {
        if ("number" == typeof e) return e;
        if ("boolean" == typeof e) return e;
        if ("string" == typeof e) return e;
        if (Array.isArray(e))
          return e.map((e) => g(e)).filter((e) => null !== e);
        if ("object" == typeof e && e) {
          const t = {},
            n = e;
          return (
            Object.keys(n).forEach((e) => {
              const r = g(n[e]);
              I(r) && (t[e] = r);
            }),
            t
          );
        }
        return null;
      }
      function y(e, t) {
        const n = k(e);
        t?.(n.id);
        const r = { id: n.id };
        if (
          (I(n.class) && (r.classes = x(T(n.class), "topic")),
          I(n.title) && (r.title = T(n.title)),
          I(n.titleUnedited) && (r.titleUnedited = O(n.titleUnedited)),
          I(n.attributedTitle) &&
            (r.attributedTitle = S(n.attributedTitle).map((e) => {
              const t = w(e);
              return { text: T(t.text), ...v(t) };
            })),
          I(n.notes))
        ) {
          const e = w(n.notes),
            t = { text: null, html: null };
          I(e.plain) &&
            I(w(e.plain).content) &&
            (t.text = T(w(e.plain).content)),
            I(e.realHTML) &&
              I(w(e.realHTML).content) &&
              (t.html = T(w(e.realHTML).content)),
            (r.notes = t);
        }
        if (
          (I(n.labels) && (r.labels = S(n.labels).map((e) => T(e))), I(n.image))
        ) {
          const e = w(n.image);
          I(e.src) && (r.imageSource = T(e.src)),
            I(e.width) && (r.imageWidth = R(e.width)),
            I(e.height) && (r.imageHeight = R(e.height)),
            I(e.align) && (r.imagePlacement = T(e.align)),
            I(e.lockRatio) && (r.imageLockRatio = O(e.lockRatio)),
            I(e.borderColor) && (r.imageBorderLineColor = T(e.borderColor)),
            I(e.borderWidth) && (r.imageBorderLineWidth = R(e.borderWidth)),
            I(e.shadowVisible) && (r.imageShadowVisible = O(e.shadowVisible)),
            I(e.opacity) && (r.imageOpacity = R(e.opacity)),
            I(e.isMathJaxImage) &&
              (r.imageIsMathJaxImage = O(e.isMathJaxImage));
        }
        if ((I(n.href) && (r.href = T(n.href)), I(n.position))) {
          const e = w(n.position);
          I(e.x) && I(e.y) && (r.position = C(n.position));
        }
        if (
          (I(n.branch) && (r.branchState = T(n.branch)),
          I(n.structureClass) && (r.structureClass = T(n.structureClass)),
          I(n.markers))
        ) {
          const e = [];
          for (const t of S(n.markers)) {
            const n = w(t);
            I(n.markerId) && e.push(T(n.markerId));
          }
          e.length && (r.markers = e);
        }
        if (I(n.style)) {
          const e = _(n.style);
          for (const t in e) {
            const n = t;
            r[n] = (0, i.yR)(e[n]);
          }
        }
        if (
          (I(n.customWidth) && (r.customWidth = R(n.customWidth)),
          I(n.extensions))
        ) {
          const e = S(n.extensions);
          r.extensions = {};
          for (const t of e) {
            const e = w(t),
              n = I(e.provider) ? T(e.provider) : null;
            if (n) {
              const t = I(e.content) ? g(e.content) : null,
                i = I(e.resourceRefs)
                  ? S(e.resourceRefs)
                      .map((e) => e)
                      .filter((e) => !!e)
                  : [];
              (t || i.length) &&
                (r.extensions[n] = { content: t, resources: i });
            }
          }
        }
        if (r.extensions?.[a.OM]) {
          const e =
            "object" != typeof (o = r.extensions[a.OM].content) ||
            null === o ||
            Array.isArray(o)
              ? {}
              : o;
          I(e.pattern) && (r.numberingPattern = T(e.pattern)),
            I(e.tiered) && (r.numberingTiered = O(e.tiered)),
            I(e.fixedIndex) && (r.numberingFixedIndex = R(e.fixedIndex)),
            delete r.extensions[a.OM],
            0 === Object.keys(r.extensions).length && delete r.extensions;
        }
        var o;
        if (I(n.children)) {
          const e = w(n.children);
          I(e.attached) && (r.children = S(e.attached).map((e) => y(e, t))),
            I(e.detached) &&
              (r.detachedChildren = S(e.detached).map((e) => y(e, t))),
            I(e.callout) && (r.callout = y(S(e.callout)[0], t));
        }
        return (
          I(n.boundaries) &&
            (r.boundaries = S(n.boundaries).map((e) =>
              (function (e, t) {
                const n = k(e);
                t?.(n.id);
                const r = { id: n.id };
                I(n.class) && (r.classes = x(T(n.class), "boundary"));
                I(n.title) && (r.title = T(n.title));
                I(n.attributedTitle) &&
                  (r.attributedTitle = S(n.attributedTitle).map((e) => {
                    const t = w(e);
                    return { text: T(t.text), ...v(t) };
                  }));
                if (I(n.style)) {
                  const e = _(n.style);
                  for (const t in e) {
                    const n = t;
                    r[n] = (0, i.yR)(e[n]);
                  }
                }
                if (I(n.range)) {
                  const e = T(n.range);
                  if ("master" === e) r.rangeType = "parent";
                  else {
                    r.rangeType = "children";
                    const t = e.substring(1, e.length - 1).split(",");
                    (r.rangeStart = parseInt(t[0])),
                      (r.rangeEnd = parseInt(t[1]));
                  }
                }
                return r;
              })(e, t),
            )),
          I(n.summaries) &&
            (r.summaries = S(n.summaries).map((e) =>
              (function (e, t, n) {
                const r = k(e);
                n?.(r.id);
                const o = { id: r.id };
                I(r.class) && (o.classes = x(T(r.class), "summary"));
                if (I(r.style)) {
                  const e = _(r.style);
                  for (const t in e) {
                    const n = t;
                    o[n] = (0, i.yR)(e[n]);
                  }
                }
                const s = T(r.topicId),
                  a = w(t),
                  l = y(
                    S(w(a.children).summary).find((e) => w(e).id === s),
                    n,
                  );
                if (((o.topic = l), I(r.range))) {
                  const e = T(r.range),
                    t = e.substring(1, e.length - 1).split(",");
                  (o.rangeStart = parseInt(t[0])),
                    (o.rangeEnd = parseInt(t[1]));
                }
                return o;
              })(e, n, t),
            )),
          r
        );
      }
      function b(e) {
        const t = w(e),
          n = {};
        if (I(t["file-entries"])) {
          const e = w(t["file-entries"]);
          Object.keys(e).forEach((t) => {
            const r = w(e[t]),
              i = {};
            if (I(r["encryption-data"])) {
              const e = w(r["encryption-data"]);
              I(e["algorithm-name"]) &&
                (i.keyDerivationAlgorithm = T(e["algorithm-name"])),
                I(e["key-derivation-name"]) &&
                  (i.cipherAlgorithm = T(e["key-derivation-name"])),
                I(e.salt) && (i.keyDerivationSalt = T(e.salt)),
                I(e.iv) && (i.keyDerivationIV = T(e.iv)),
                I(e.size) && (i.keyDerivationSize = R(e.size)),
                I(e["iteration-count"]) &&
                  (i.keyDerivationIterationCount = R(e["iteration-count"]));
            }
            n[t] =
              Object.keys(i).length > 0
                ? { path: t, encrypted: !0, ...i }
                : { path: t, encrypted: !1 };
          });
        }
        const r = { fileEntries: n };
        return (
          I(t["password-hint"]) && (r.passwordHint = T(t["password-hint"])), r
        );
      }
      function _(e) {
        if (null == e || "object" != typeof e) return null;
        const t = w(e);
        if (!t.properties) return null;
        const n = w(t.properties),
          r = {};
        if (
          (Object.assign(r, v(n)),
          I(n["svg:fill"]) && (r.fillColor = T(n["svg:fill"])),
          I(n["svg:opacity"]) && (r.fillOpacity = T(n["svg:opacity"])),
          I(n["fill-pattern"]) && (r.fillPattern = T(n["fill-pattern"])),
          I(n["line-width"]) &&
            (r.lineWidth =
              "number" == typeof n["line-width"]
                ? n["line-width"].toString()
                : T(n["line-width"])),
          I(n["line-color"]) && (r.lineColor = T(n["line-color"])),
          I(n["line-pattern"]) && (r.linePattern = T(n["line-pattern"])),
          I(n["border-line-color"]) &&
            (r.borderLineColor = T(n["border-line-color"])),
          I(n["border-line-width"]) &&
            (r.borderLineWidth =
              "number" == typeof n["border-line-width"]
                ? n["border-line-width"].toString()
                : T(n["border-line-width"])),
          I(n["border-line-pattern"]) &&
            (r.borderLinePattern = T(n["border-line-pattern"])),
          I(n["shape-class"]) && (r.shapeClass = T(n["shape-class"])),
          I(n["line-class"]) && (r.lineClass = T(n["line-class"])),
          I(n["arrow-begin-class"]) &&
            (r.arrowBeginClass = T(n["arrow-begin-class"])),
          I(n["arrow-end-class"]) &&
            (r.arrowEndClass = T(n["arrow-end-class"])),
          I(n["callout-shape-class"]))
        ) {
          const e = T(n["callout-shape-class"]);
          let t = e;
          "org.xmind.calloutTopicShape.balloon.ellipse" === e
            ? (t = "org.xmind.topicShape.ellipse")
            : "org.xmind.calloutTopicShape.balloon.roundedRect" === e
              ? (t = "org.xmind.topicShape.roundedRect")
              : "org.xmind.calloutTopicShape.balloon.rectangle" === e &&
                (t = "org.xmind.topicShape.rect"),
            (r.shapeClass = t);
        }
        return (
          I(n["cjk-font-family"]) &&
            (r.cjkFontFamily = T(n["cjk-font-family"])),
          I(n["multi-line-colors"]) &&
            (r.multiLineColors = T(n["multi-line-colors"])),
          I(n["color-list"]) && (r.colorList = T(n["color-list"])),
          I(n["line-tapered"]) && (r.lineTapered = T(n["line-tapered"])),
          I(n["alignment-by-level"]) &&
            (r.alignmentByLevel = T(n["alignment-by-level"])),
          I(n["global_line-width"]) &&
            (r.globalLineWidthDisabled = O(n["global_line-width"])),
          I(n["global_fo:font-family"]) &&
            (r.globalFontFamilyDisabled = O(n["global_fo:font-family"])),
          r
        );
      }
      function v(e) {
        const t = w(e),
          n = {};
        return (
          I(t["fo:font-family"]) && (n.fontFamily = T(t["fo:font-family"])),
          I(t["fo:font-size"]) &&
            (n.fontSize =
              "number" == typeof t["fo:font-size"]
                ? t["fo:font-size"].toString()
                : T(t["fo:font-size"])),
          I(t["fo:font-weight"]) && (n.fontWeight = `${t["fo:font-weight"]}`),
          I(t["fo:font-style"]) && (n.fontStyle = T(t["fo:font-style"])),
          I(t["fo:color"]) && (n.textColor = T(t["fo:color"])),
          I(t["fo:text-transform"]) &&
            (n.textTransform = T(t["fo:text-transform"])),
          I(t["fo:text-decoration"]) &&
            (n.textDecoration = T(t["fo:text-decoration"])),
          I(t["fo:text-align"]) && (n.textAlign = T(t["fo:text-align"])),
          n
        );
      }
      function x(e, t) {
        return e.split(" ").filter((e) => !!e && e !== t);
      }
      function w(e) {
        if ("object" == typeof e && null !== e && !Array.isArray(e)) return e;
        throw new Error(`Not a JSON object: ${JSON.stringify(e)}`);
      }
      function S(e) {
        if (Array.isArray(e)) return e;
        throw new Error(`Not a JSON array: ${JSON.stringify(e)}`);
      }
      function k(e) {
        const t = w(e);
        if ("id" in t && "string" == typeof t.id) return t;
        throw new Error(`No "id" in object: ${JSON.stringify(e)}`);
      }
      function T(e) {
        if ("string" == typeof e) return e;
        throw new Error(`Not a JSON string: ${JSON.stringify(e)}`);
      }
      function R(e) {
        if ("number" == typeof e) return e;
        throw new Error(`Not a number: ${JSON.stringify(e)}`);
      }
      function O(e) {
        if ("boolean" == typeof e) return e;
        throw new Error(`Not a boolean: ${JSON.stringify(e)}`);
      }
      function C(e) {
        const t = w(e);
        if ("x" in t && "y" in t) return { x: R(t.x), y: R(t.y) };
        throw new Error(`Not a point object: ${JSON.stringify(e)}`);
      }
      function I(e) {
        return null != e;
      }
    },
    21843: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ip: () => s,
        Q_: () => o,
        Qd: () => l,
        ZW: () => i,
        oG: () => a,
      });
      var r = n(42964);
      const i = [
        "numeral-arabic",
        "numeral-roman",
        "alphabet-uppercase",
        "alphabet-lowercase",
      ];
      function o(e) {
        return (t, n) => {
          for (const r of e) {
            const e = r(t, n);
            if (null != e) return e;
          }
          return null;
        };
      }
      function s() {
        return o([r.xo, r.r_, r.oW, r.Fh]);
      }
      function a(e, t) {
        return (t ?? "") + e;
      }
      function l(e, t) {
        if (!e.numberingPattern || null === e.numberingIndex) return null;
        let n = t(e.numberingPattern, e.numberingIndex);
        if (n && e.numberingTiered) {
          n = a(n, e.parentTopic ? l(e.parentTopic, t) : null);
        }
        return n;
      }
    },
    71381: (e, t, n) => {
      "use strict";
      n.d(t, { KZ: () => r, cM: () => o, oz: () => i });
      const r = Object.freeze({
        CreatorName: "creator/name",
        CreatorVersion: "creator/version",
        DataStructureVersion: "dataStructureVersion",
        LayoutEngineVersion: "layoutEngineVersion",
        ActiveSheetId: "activeSheetId",
      });
      var i = ((e) => (
        (e.Root = "root"),
        (e.Attached = "attached"),
        (e.Detached = "detached"),
        (e.Summary = "summary"),
        (e.Callout = "callout"),
        e
      ))(i || {});
      function o(e, t) {
        return (
          (e = [
            ...new Set(e.map((e) => e.trim()).filter((e) => e.length > 0)),
          ]),
          "manual" === t ? [...e] : [...e].sort()
        );
      }
    },
    87494: (e, t, n) => {
      "use strict";
      n.d(t, {
        B0: () => c,
        B1: () => d,
        CX: () => h,
        KR: () => l,
        VZ: () => p,
        Yr: () => f,
        _V: () => u,
        bw: () => s,
        iO: () => o,
      });
      var r = n(71381),
        i = n(28897);
      const o = "2",
        s = Object.freeze({
          ContentJSON: "content.json",
          MetadataJSON: "metadata.json",
          ManifestJSON: "manifest.json",
          ThumbnailPNG: "Thumbnails/thumbnail.png",
          ContentXML: "content.xml",
        }),
        a =
          '<?xml version="1.0" encoding="UTF-8" standalone="no"?><xmap-content xmlns="urn:xmind:xmap:xmlns:content:2.0" xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" modified-by="bruce" timestamp="1503058545540" version="2.0"><sheet id="7abtd0ssc7n4pi1nu6i7b6lsdh" modified-by="bruce" theme="0kdeemiijde6nuk97e4t0vpp54" timestamp="1503058545540"><topic id="1vr0lcte2og4t2sopiogvdmifc" modified-by="bruce" structure-class="org.xmind.ui.logic.right" timestamp="1503058545417"><title>Warning\n警告\nAttention\nWarnung\n경고</title><children><topics type="attached"><topic id="71h1aip2t1o8vvm0a41nausaar" modified-by="bruce" timestamp="1503058545423"><title svg:width="500">This file can not be opened normally, please do not modify and save, otherwise the contents will be permanently lost！</title><children><topics type="attached"><topic id="428akmkh9a0tog6c91qj995qdl" modified-by="bruce" timestamp="1503058545427"><title>You can try using XMind 8 Update 3 or later version to open</title></topic></topics></children></topic><topic id="2kb87f8m38b3hnfhp450c7q35e" modified-by="bruce" timestamp="1503058545434"><title svg:width="500">该文件无法正常打开，请勿修改并保存，否则文件内容将会永久性丢失！</title><children><topics type="attached"><topic id="3m9hoo4a09n53ofl6fohdun99f" modified-by="bruce" timestamp="1503058545438"><title>你可以尝试使用 XMind 8 Update 3 或更新版本打开</title></topic></topics></children></topic><topic id="7r3r4617hvh931ot9obi595r8f" modified-by="bruce" timestamp="1503058545444"><title svg:width="500">該文件無法正常打開，請勿修改並保存，否則文件內容將會永久性丟失！</title><children><topics type="attached"><topic id="691pgka6gmgpgkacaa0h3f1hjb" modified-by="bruce" timestamp="1503058545448"><title>你可以嘗試使用 XMind 8 Update 3 或更新版本打開</title></topic></topics></children></topic><topic id="0f2e3rpkfahg4spg4nda946r0b" modified-by="bruce" timestamp="1503058545453"><title svg:width="500">この文書は正常に開かないので、修正して保存しないようにしてください。そうでないと、書類の内容が永久に失われます。！</title><children><topics type="attached"><topic id="4vuubta53ksc1falk46mevge0t" modified-by="bruce" timestamp="1503058545457"><title>XMind 8 Update 3 や更新版を使って開くこともできます</title></topic></topics></children></topic><topic id="70n9i4u3lb89sq9l1m1bs255j5" modified-by="bruce" timestamp="1503058545463"><title svg:width="500">Datei kann nicht richtig geöffnet werden. Bitte ändern Sie diese Datei nicht und speichern Sie sie, sonst wird die Datei endgültig gelöscht werden.</title><children><topics type="attached"><topic id="1qpc5ee298p2sqeqbinpca46b7" modified-by="bruce" timestamp="1503058545466"><title svg:width="500">Bitte versuchen Sie, diese Datei mit XMind 8 Update 3 oder später zu öffnen.</title></topic></topics></children></topic><topic id="4dmes10uc19pq7enu8sc4bmvif" modified-by="bruce" timestamp="1503058545473"><title svg:width="500">Ce fichier ne peut pas ouvert normalement, veuillez le rédiger et sauvegarder, sinon le fichier sera perdu en permanence. </title><children><topics type="attached"><topic id="5f0rivgubii2launodiln7sdkt" modified-by="bruce" timestamp="1503058545476"><title svg:width="500">Vous pouvez essayer d\'ouvrir avec XMind 8 Update 3 ou avec une version plus récente.</title></topic></topics></children></topic><topic id="10pn1os1sgfsnqa8akabom5pej" modified-by="bruce" timestamp="1503058545481"><title svg:width="500">파일을 정상적으로 열 수 없으며, 수정 및 저장하지 마십시오. 그렇지 않으면 파일의 내용이 영구적으로 손실됩니다!</title><children><topics type="attached"><topic id="0l2nr0fq3em22rctapkj46ue58" modified-by="bruce" timestamp="1503058545484"><title svg:width="500">XMind 8 Update 3 또는 이후 버전을 사용하여</title></topic></topics></children></topic></topics></children><extensions><extension provider="org.xmind.ui.map.unbalanced"><content><right-number>-1</right-number></content></extension></extensions></topic><title>Sheet 1</title></sheet></xmap-content>';
      async function l(e, t, n, r = {}) {
        const { additionalResources: o = [], passwordHint: l } = r,
          { content: c, metadata: u, resources: d } = (0, i.hX)(e),
          h = {},
          p = async (e, t) => {
            const n = { path: e, encryptable: !0 };
            await t(n), (h[e] = { ...n, encrypted: !!n.cipherAlgorithm });
          };
        await p(s.ContentJSON, (e) => t(e, JSON.stringify(c))),
          await p(s.MetadataJSON, (e) => t(e, JSON.stringify(u)));
        for (const e of d) await p(e, n);
        for (const e of o) await p(e, n);
        const f = (0, i.bi)({
          fileEntries: h,
          ...(l ? { passwordHint: l } : {}),
        });
        await t({ path: s.ManifestJSON, encryptable: !1 }, JSON.stringify(f)),
          await t({ path: s.ContentXML, encryptable: !1 }, a);
      }
      function c(e, t) {
        const {
          creatorName: n,
          creatorVersion: i,
          debugDataStructureVersion: s,
          ...a
        } = t;
        let l = e
          .asMutable()
          .metadataFor(r.KZ.CreatorName, n)
          .metadataFor(r.KZ.CreatorVersion, i)
          .metadataFor(r.KZ.DataStructureVersion, s ?? o);
        for (const [e, t] of Object.entries(a)) l = l.metadataFor(e, t);
        return l.commit();
      }
      var u = ((e) => (
        (e.OverridingLowerVersionDataStructure = "override-lower-version"), e
      ))(u || {});
      function d(e) {
        const t = e.metadataFor(r.KZ.DataStructureVersion);
        if (t === o) return null;
        if (!t) return "override-lower-version";
        const n = parseInt(t);
        return !n || isNaN(n) || n < parseInt(o)
          ? "override-lower-version"
          : null;
      }
      async function h(e, t, n = {}) {
        const { skipsDataStructureCheck: a = !1 } = n,
          l = await e({ path: s.ManifestJSON, encrypted: !1 }),
          c = (0, i.JJ)(JSON.parse(l)),
          u = (e) => c.fileEntries[e] ?? { path: e, encrypted: !0 },
          d = u(s.ContentJSON),
          h = u(s.MetadataJSON);
        try {
          const n = JSON.parse(await e(h)),
            l = (function (e) {
              if (null === e || "object" != typeof e || Array.isArray(e))
                return "";
              const t = e[r.KZ.DataStructureVersion];
              if ("string" != typeof t) return "";
              return t;
            })(n);
          if (
            !a &&
            (function (e) {
              if (!e) return !1;
              const t = parseInt(e);
              if (!t || isNaN(t)) return !1;
              const n = parseInt(o);
              return t > n;
            })(l)
          )
            throw new p(l);
          const f = JSON.parse(await e(d)),
            m = (0, i.CW)(f, n);
          for (const e in c.fileEntries)
            e !== s.ContentJSON &&
              e !== s.MetadataJSON &&
              e !== s.ManifestJSON &&
              e !== s.ContentXML &&
              (await t(u(e)));
          return m;
        } catch (e) {
          if (d.encrypted) throw new f(c.passwordHint ?? "");
          throw e;
        }
      }
      class p extends Error {
        dataStructureVersion;
        constructor(e) {
          super("Unsupported data structure version: " + e),
            (this.dataStructureVersion = e);
        }
      }
      class f extends Error {
        passwordHint;
        constructor(e) {
          super("Wrong password or corrupted file"), (this.passwordHint = e);
        }
      }
    },
    97234: (e, t, n) => {
      "use strict";
      function r(e) {
        return (
          (r =
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
          r(e)
        );
      }
      n.d(t, { Z: () => s });
      var i = /^\s+/,
        o = /\s+$/;
      function s(e, t) {
        if (((t = t || {}), (e = e || "") instanceof s)) return e;
        if (!(this instanceof s)) return new s(e, t);
        var n = (function (e) {
          var t = { r: 0, g: 0, b: 0 },
            n = 1,
            s = null,
            a = null,
            l = null,
            c = !1,
            u = !1;
          "string" == typeof e &&
            (e = (function (e) {
              e = e.replace(i, "").replace(o, "").toLowerCase();
              var t,
                n = !1;
              if (S[e]) (e = S[e]), (n = !0);
              else if ("transparent" == e)
                return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              if ((t = M.rgb.exec(e))) return { r: t[1], g: t[2], b: t[3] };
              if ((t = M.rgba.exec(e)))
                return { r: t[1], g: t[2], b: t[3], a: t[4] };
              if ((t = M.hsl.exec(e))) return { h: t[1], s: t[2], l: t[3] };
              if ((t = M.hsla.exec(e)))
                return { h: t[1], s: t[2], l: t[3], a: t[4] };
              if ((t = M.hsv.exec(e))) return { h: t[1], s: t[2], v: t[3] };
              if ((t = M.hsva.exec(e)))
                return { h: t[1], s: t[2], v: t[3], a: t[4] };
              if ((t = M.hex8.exec(e)))
                return {
                  r: C(t[1]),
                  g: C(t[2]),
                  b: C(t[3]),
                  a: A(t[4]),
                  format: n ? "name" : "hex8",
                };
              if ((t = M.hex6.exec(e)))
                return {
                  r: C(t[1]),
                  g: C(t[2]),
                  b: C(t[3]),
                  format: n ? "name" : "hex",
                };
              if ((t = M.hex4.exec(e)))
                return {
                  r: C(t[1] + "" + t[1]),
                  g: C(t[2] + "" + t[2]),
                  b: C(t[3] + "" + t[3]),
                  a: A(t[4] + "" + t[4]),
                  format: n ? "name" : "hex8",
                };
              if ((t = M.hex3.exec(e)))
                return {
                  r: C(t[1] + "" + t[1]),
                  g: C(t[2] + "" + t[2]),
                  b: C(t[3] + "" + t[3]),
                  format: n ? "name" : "hex",
                };
              return !1;
            })(e));
          "object" == r(e) &&
            (F(e.r) && F(e.g) && F(e.b)
              ? ((d = e.r),
                (h = e.g),
                (p = e.b),
                (t = {
                  r: 255 * R(d, 255),
                  g: 255 * R(h, 255),
                  b: 255 * R(p, 255),
                }),
                (c = !0),
                (u = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"))
              : F(e.h) && F(e.s) && F(e.v)
                ? ((s = j(e.s)),
                  (a = j(e.v)),
                  (t = (function (e, t, n) {
                    (e = 6 * R(e, 360)), (t = R(t, 100)), (n = R(n, 100));
                    var r = Math.floor(e),
                      i = e - r,
                      o = n * (1 - t),
                      s = n * (1 - i * t),
                      a = n * (1 - (1 - i) * t),
                      l = r % 6,
                      c = [n, s, o, o, a, n][l],
                      u = [a, n, n, s, o, o][l],
                      d = [o, o, a, n, n, s][l];
                    return { r: 255 * c, g: 255 * u, b: 255 * d };
                  })(e.h, s, a)),
                  (c = !0),
                  (u = "hsv"))
                : F(e.h) &&
                  F(e.s) &&
                  F(e.l) &&
                  ((s = j(e.s)),
                  (l = j(e.l)),
                  (t = (function (e, t, n) {
                    var r, i, o;
                    function s(e, t, n) {
                      return (
                        n < 0 && (n += 1),
                        n > 1 && (n -= 1),
                        n < 1 / 6
                          ? e + 6 * (t - e) * n
                          : n < 0.5
                            ? t
                            : n < 2 / 3
                              ? e + (t - e) * (2 / 3 - n) * 6
                              : e
                      );
                    }
                    if (
                      ((e = R(e, 360)),
                      (t = R(t, 100)),
                      (n = R(n, 100)),
                      0 === t)
                    )
                      r = i = o = n;
                    else {
                      var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
                        l = 2 * n - a;
                      (r = s(l, a, e + 1 / 3)),
                        (i = s(l, a, e)),
                        (o = s(l, a, e - 1 / 3));
                    }
                    return { r: 255 * r, g: 255 * i, b: 255 * o };
                  })(e.h, s, l)),
                  (c = !0),
                  (u = "hsl")),
            e.hasOwnProperty("a") && (n = e.a));
          var d, h, p;
          return (
            (n = T(n)),
            {
              ok: c,
              format: e.format || u,
              r: Math.min(255, Math.max(t.r, 0)),
              g: Math.min(255, Math.max(t.g, 0)),
              b: Math.min(255, Math.max(t.b, 0)),
              a: n,
            }
          );
        })(e);
        (this._originalInput = e),
          (this._r = n.r),
          (this._g = n.g),
          (this._b = n.b),
          (this._a = n.a),
          (this._roundA = Math.round(100 * this._a) / 100),
          (this._format = t.format || n.format),
          (this._gradientType = t.gradientType),
          this._r < 1 && (this._r = Math.round(this._r)),
          this._g < 1 && (this._g = Math.round(this._g)),
          this._b < 1 && (this._b = Math.round(this._b)),
          (this._ok = n.ok);
      }
      function a(e, t, n) {
        (e = R(e, 255)), (t = R(t, 255)), (n = R(n, 255));
        var r,
          i,
          o = Math.max(e, t, n),
          s = Math.min(e, t, n),
          a = (o + s) / 2;
        if (o == s) r = i = 0;
        else {
          var l = o - s;
          switch (((i = a > 0.5 ? l / (2 - o - s) : l / (o + s)), o)) {
            case e:
              r = (t - n) / l + (t < n ? 6 : 0);
              break;
            case t:
              r = (n - e) / l + 2;
              break;
            case n:
              r = (e - t) / l + 4;
          }
          r /= 6;
        }
        return { h: r, s: i, l: a };
      }
      function l(e, t, n) {
        (e = R(e, 255)), (t = R(t, 255)), (n = R(n, 255));
        var r,
          i,
          o = Math.max(e, t, n),
          s = Math.min(e, t, n),
          a = o,
          l = o - s;
        if (((i = 0 === o ? 0 : l / o), o == s)) r = 0;
        else {
          switch (o) {
            case e:
              r = (t - n) / l + (t < n ? 6 : 0);
              break;
            case t:
              r = (n - e) / l + 2;
              break;
            case n:
              r = (e - t) / l + 4;
          }
          r /= 6;
        }
        return { h: r, s: i, v: a };
      }
      function c(e, t, n, r) {
        var i = [
          I(Math.round(e).toString(16)),
          I(Math.round(t).toString(16)),
          I(Math.round(n).toString(16)),
        ];
        return r &&
          i[0].charAt(0) == i[0].charAt(1) &&
          i[1].charAt(0) == i[1].charAt(1) &&
          i[2].charAt(0) == i[2].charAt(1)
          ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
          : i.join("");
      }
      function u(e, t, n, r) {
        return [
          I(E(r)),
          I(Math.round(e).toString(16)),
          I(Math.round(t).toString(16)),
          I(Math.round(n).toString(16)),
        ].join("");
      }
      function d(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = s(e).toHsl();
        return (n.s -= t / 100), (n.s = O(n.s)), s(n);
      }
      function h(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = s(e).toHsl();
        return (n.s += t / 100), (n.s = O(n.s)), s(n);
      }
      function p(e) {
        return s(e).desaturate(100);
      }
      function f(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = s(e).toHsl();
        return (n.l += t / 100), (n.l = O(n.l)), s(n);
      }
      function m(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = s(e).toRgb();
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round((-t / 100) * 255)),
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round((-t / 100) * 255)),
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round((-t / 100) * 255)),
          )),
          s(n)
        );
      }
      function g(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = s(e).toHsl();
        return (n.l -= t / 100), (n.l = O(n.l)), s(n);
      }
      function y(e, t) {
        var n = s(e).toHsl(),
          r = (n.h + t) % 360;
        return (n.h = r < 0 ? 360 + r : r), s(n);
      }
      function b(e) {
        var t = s(e).toHsl();
        return (t.h = (t.h + 180) % 360), s(t);
      }
      function _(e, t) {
        if (isNaN(t) || t <= 0)
          throw new Error("Argument to polyad must be a positive number");
        for (var n = s(e).toHsl(), r = [s(e)], i = 360 / t, o = 1; o < t; o++)
          r.push(s({ h: (n.h + o * i) % 360, s: n.s, l: n.l }));
        return r;
      }
      function v(e) {
        var t = s(e).toHsl(),
          n = t.h;
        return [
          s(e),
          s({ h: (n + 72) % 360, s: t.s, l: t.l }),
          s({ h: (n + 216) % 360, s: t.s, l: t.l }),
        ];
      }
      function x(e, t, n) {
        (t = t || 6), (n = n || 30);
        var r = s(e).toHsl(),
          i = 360 / n,
          o = [s(e)];
        for (r.h = (r.h - ((i * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + i) % 360), o.push(s(r));
        return o;
      }
      function w(e, t) {
        t = t || 6;
        for (
          var n = s(e).toHsv(), r = n.h, i = n.s, o = n.v, a = [], l = 1 / t;
          t--;

        )
          a.push(s({ h: r, s: i, v: o })), (o = (o + l) % 1);
        return a;
      }
      (s.prototype = {
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
            n,
            r = this.toRgb();
          return (
            (e = r.r / 255),
            (t = r.g / 255),
            (n = r.b / 255),
            0.2126 *
              (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) +
              0.7152 *
                (t <= 0.03928
                  ? t / 12.92
                  : Math.pow((t + 0.055) / 1.055, 2.4)) +
              0.0722 *
                (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4))
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
            n = Math.round(100 * e.s),
            r = Math.round(100 * e.v);
          return 1 == this._a
            ? "hsv(" + t + ", " + n + "%, " + r + "%)"
            : "hsva(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")";
        },
        toHsl: function () {
          var e = a(this._r, this._g, this._b);
          return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
        },
        toHslString: function () {
          var e = a(this._r, this._g, this._b),
            t = Math.round(360 * e.h),
            n = Math.round(100 * e.s),
            r = Math.round(100 * e.l);
          return 1 == this._a
            ? "hsl(" + t + ", " + n + "%, " + r + "%)"
            : "hsla(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")";
        },
        toHex: function (e) {
          return c(this._r, this._g, this._b, e);
        },
        toHexString: function (e) {
          return "#" + this.toHex(e);
        },
        toHex8: function (e) {
          return (function (e, t, n, r, i) {
            var o = [
              I(Math.round(e).toString(16)),
              I(Math.round(t).toString(16)),
              I(Math.round(n).toString(16)),
              I(E(r)),
            ];
            if (
              i &&
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
            r: Math.round(100 * R(this._r, 255)) + "%",
            g: Math.round(100 * R(this._g, 255)) + "%",
            b: Math.round(100 * R(this._b, 255)) + "%",
            a: this._a,
          };
        },
        toPercentageRgbString: function () {
          return 1 == this._a
            ? "rgb(" +
                Math.round(100 * R(this._r, 255)) +
                "%, " +
                Math.round(100 * R(this._g, 255)) +
                "%, " +
                Math.round(100 * R(this._b, 255)) +
                "%)"
            : "rgba(" +
                Math.round(100 * R(this._r, 255)) +
                "%, " +
                Math.round(100 * R(this._g, 255)) +
                "%, " +
                Math.round(100 * R(this._b, 255)) +
                "%, " +
                this._roundA +
                ")";
        },
        toName: function () {
          return 0 === this._a
            ? "transparent"
            : !(this._a < 1) && (k[c(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (e) {
          var t = "#" + u(this._r, this._g, this._b, this._a),
            n = t,
            r = this._gradientType ? "GradientType = 1, " : "";
          if (e) {
            var i = s(e);
            n = "#" + u(i._r, i._g, i._b, i._a);
          }
          return (
            "progid:DXImageTransform.Microsoft.gradient(" +
            r +
            "startColorstr=" +
            t +
            ",endColorstr=" +
            n +
            ")"
          );
        },
        toString: function (e) {
          var t = !!e;
          e = e || this._format;
          var n = !1,
            r = this._a < 1 && this._a >= 0;
          return t ||
            !r ||
            ("hex" !== e &&
              "hex6" !== e &&
              "hex3" !== e &&
              "hex4" !== e &&
              "hex8" !== e &&
              "name" !== e)
            ? ("rgb" === e && (n = this.toRgbString()),
              "prgb" === e && (n = this.toPercentageRgbString()),
              ("hex" !== e && "hex6" !== e) || (n = this.toHexString()),
              "hex3" === e && (n = this.toHexString(!0)),
              "hex4" === e && (n = this.toHex8String(!0)),
              "hex8" === e && (n = this.toHex8String()),
              "name" === e && (n = this.toName()),
              "hsl" === e && (n = this.toHslString()),
              "hsv" === e && (n = this.toHsvString()),
              n || this.toHexString())
            : "name" === e && 0 === this._a
              ? this.toName()
              : this.toRgbString();
        },
        clone: function () {
          return s(this.toString());
        },
        _applyModification: function (e, t) {
          var n = e.apply(null, [this].concat([].slice.call(t)));
          return (
            (this._r = n._r),
            (this._g = n._g),
            (this._b = n._b),
            this.setAlpha(n._a),
            this
          );
        },
        lighten: function () {
          return this._applyModification(f, arguments);
        },
        brighten: function () {
          return this._applyModification(m, arguments);
        },
        darken: function () {
          return this._applyModification(g, arguments);
        },
        desaturate: function () {
          return this._applyModification(d, arguments);
        },
        saturate: function () {
          return this._applyModification(h, arguments);
        },
        greyscale: function () {
          return this._applyModification(p, arguments);
        },
        spin: function () {
          return this._applyModification(y, arguments);
        },
        _applyCombination: function (e, t) {
          return e.apply(null, [this].concat([].slice.call(t)));
        },
        analogous: function () {
          return this._applyCombination(x, arguments);
        },
        complement: function () {
          return this._applyCombination(b, arguments);
        },
        monochromatic: function () {
          return this._applyCombination(w, arguments);
        },
        splitcomplement: function () {
          return this._applyCombination(v, arguments);
        },
        triad: function () {
          return this._applyCombination(_, [3]);
        },
        tetrad: function () {
          return this._applyCombination(_, [4]);
        },
      }),
        (s.fromRatio = function (e, t) {
          if ("object" == r(e)) {
            var n = {};
            for (var i in e)
              e.hasOwnProperty(i) && (n[i] = "a" === i ? e[i] : j(e[i]));
            e = n;
          }
          return s(e, t);
        }),
        (s.equals = function (e, t) {
          return !(!e || !t) && s(e).toRgbString() == s(t).toRgbString();
        }),
        (s.random = function () {
          return s.fromRatio({
            r: Math.random(),
            g: Math.random(),
            b: Math.random(),
          });
        }),
        (s.mix = function (e, t, n) {
          n = 0 === n ? 0 : n || 50;
          var r = s(e).toRgb(),
            i = s(t).toRgb(),
            o = n / 100;
          return s({
            r: (i.r - r.r) * o + r.r,
            g: (i.g - r.g) * o + r.g,
            b: (i.b - r.b) * o + r.b,
            a: (i.a - r.a) * o + r.a,
          });
        }),
        (s.readability = function (e, t) {
          var n = s(e),
            r = s(t);
          return (
            (Math.max(n.getLuminance(), r.getLuminance()) + 0.05) /
            (Math.min(n.getLuminance(), r.getLuminance()) + 0.05)
          );
        }),
        (s.isReadable = function (e, t, n) {
          var r,
            i,
            o = s.readability(e, t);
          switch (
            ((i = !1),
            (r = (function (e) {
              var t, n;
              (t = (
                (e = e || { level: "AA", size: "small" }).level || "AA"
              ).toUpperCase()),
                (n = (e.size || "small").toLowerCase()),
                "AA" !== t && "AAA" !== t && (t = "AA");
              "small" !== n && "large" !== n && (n = "small");
              return { level: t, size: n };
            })(n)).level + r.size)
          ) {
            case "AAsmall":
            case "AAAlarge":
              i = o >= 4.5;
              break;
            case "AAlarge":
              i = o >= 3;
              break;
            case "AAAsmall":
              i = o >= 7;
          }
          return i;
        }),
        (s.mostReadable = function (e, t, n) {
          var r,
            i,
            o,
            a,
            l = null,
            c = 0;
          (i = (n = n || {}).includeFallbackColors),
            (o = n.level),
            (a = n.size);
          for (var u = 0; u < t.length; u++)
            (r = s.readability(e, t[u])) > c && ((c = r), (l = s(t[u])));
          return s.isReadable(e, l, { level: o, size: a }) || !i
            ? l
            : ((n.includeFallbackColors = !1),
              s.mostReadable(e, ["#fff", "#000"], n));
        });
      var S = (s.names = {
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
        k = (s.hexNames = (function (e) {
          var t = {};
          for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
          return t;
        })(S));
      function T(e) {
        return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
      }
      function R(e, t) {
        (function (e) {
          return (
            "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
          );
        })(e) && (e = "100%");
        var n = (function (e) {
          return "string" == typeof e && -1 != e.indexOf("%");
        })(e);
        return (
          (e = Math.min(t, Math.max(0, parseFloat(e)))),
          n && (e = parseInt(e * t, 10) / 100),
          Math.abs(e - t) < 1e-6 ? 1 : (e % t) / parseFloat(t)
        );
      }
      function O(e) {
        return Math.min(1, Math.max(0, e));
      }
      function C(e) {
        return parseInt(e, 16);
      }
      function I(e) {
        return 1 == e.length ? "0" + e : "" + e;
      }
      function j(e) {
        return e <= 1 && (e = 100 * e + "%"), e;
      }
      function E(e) {
        return Math.round(255 * parseFloat(e)).toString(16);
      }
      function A(e) {
        return C(e) / 255;
      }
      var P,
        D,
        L,
        M =
          ((D =
            "[\\s|\\(]+(" +
            (P = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") +
            ")[,|\\s]+(" +
            P +
            ")[,|\\s]+(" +
            P +
            ")\\s*\\)?"),
          (L =
            "[\\s|\\(]+(" +
            P +
            ")[,|\\s]+(" +
            P +
            ")[,|\\s]+(" +
            P +
            ")[,|\\s]+(" +
            P +
            ")\\s*\\)?"),
          {
            CSS_UNIT: new RegExp(P),
            rgb: new RegExp("rgb" + D),
            rgba: new RegExp("rgba" + L),
            hsl: new RegExp("hsl" + D),
            hsla: new RegExp("hsla" + L),
            hsv: new RegExp("hsv" + D),
            hsva: new RegExp("hsva" + L),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          });
      function F(e) {
        return !!M.CSS_UNIT.exec(e);
      }
    },
  },
  (e) => {
    e.O(0, [2768, 1505], () => {
      return (t = 47190), e((e.s = t));
      var t;
    });
    var t = e.O();
    module.exports = t;
  },
]);
