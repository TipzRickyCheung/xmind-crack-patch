(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [2312],
  {
    51506: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { default: () => i });
      var o = n(23645),
        r = n.n(o)()(function (t) {
          return t[1];
        });
      r.push([
        t.id,
        ".container-mask[data-v-7a16d07f] {\n  position: absolute;\n  width: 100%;\n  height: 232px;\n  background: transparent;\n}\n.link-box[data-v-7a16d07f] {\n  height: 26px;\n}\n#editorContainer[data-v-7a16d07f] a {\n  text-decoration: underline;\n}\n#editorContainer[data-v-7a16d07f] pre {\n  white-space: pre-wrap;\n}\n.dark-theme[data-v-7a16d07f] {\n  --notes-editor-frozen-background-color: #5c6064;\n}\n.dark-theme[data-v-7a16d07f] .notes-editor-frozen {\n  color: #fafafb;\n  text-shadow: none;\n}\n.dark-theme[data-v-7a16d07f] ::selection {\n  background-color: rgba(92, 190, 255, 0.5);\n}\n.default-theme[data-v-7a16d07f] {\n  --notes-editor-frozen-background-color: #dadadb;\n}\n.default-theme[data-v-7a16d07f] .notes-editor-frozen {\n  color: #27292a;\n  text-shadow: none;\n}\n.link-input-box[data-v-7a16d07f] {\n  width: 342px;\n}\n.link-input-box[data-v-7a16d07f]:focus {\n  box-shadow: none;\n  border: 1px solid #0f66de;\n}\n",
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
    32667: (t, e, n) => {
      var o = n(9950),
        r = n(25419);
      n(17381);
      function i(t) {
        return null == t;
      }
      function a(t) {
        ((t = (function (t) {
          var e = {};
          for (var n in t) e[n] = t[n];
          return e;
        })(t || {})).whiteList = t.whiteList || o.whiteList),
          (t.onAttr = t.onAttr || o.onAttr),
          (t.onIgnoreAttr = t.onIgnoreAttr || o.onIgnoreAttr),
          (t.safeAttrValue = t.safeAttrValue || o.safeAttrValue),
          (this.options = t);
      }
      (a.prototype.process = function (t) {
        if (!(t = (t = t || "").toString())) return "";
        var e = this.options,
          n = e.whiteList,
          o = e.onAttr,
          a = e.onIgnoreAttr,
          s = e.safeAttrValue;
        return r(t, function (t, e, r, l, u) {
          var c = n[r],
            d = !1;
          if (
            (!0 === c
              ? (d = c)
              : "function" == typeof c
                ? (d = c(l))
                : c instanceof RegExp && (d = c.test(l)),
            !0 !== d && (d = !1),
            (l = s(r, l)))
          ) {
            var p,
              f = { position: e, sourcePosition: t, source: u, isWhite: d };
            return d
              ? i((p = o(r, l, f)))
                ? r + ":" + l
                : p
              : i((p = a(r, l, f)))
                ? void 0
                : p;
          }
        });
      }),
        (t.exports = a);
    },
    9950: (t, e) => {
      function n() {
        var t = {
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
        return t;
      }
      var o = /javascript\s*\:/gim;
      (e.whiteList = n()),
        (e.getDefaultWhiteList = n),
        (e.onAttr = function (t, e, n) {}),
        (e.onIgnoreAttr = function (t, e, n) {}),
        (e.safeAttrValue = function (t, e) {
          return o.test(e) ? "" : e;
        });
    },
    29970: (t, e, n) => {
      var o = n(9950),
        r = n(32667);
      for (var i in (((e = t.exports =
        function (t, e) {
          return new r(e).process(t);
        }).FilterCSS = r),
      o))
        e[i] = o[i];
      "undefined" != typeof window && (window.filterCSS = t.exports);
    },
    25419: (t, e, n) => {
      var o = n(17381);
      t.exports = function (t, e) {
        ";" !== (t = o.trimRight(t))[t.length - 1] && (t += ";");
        var n = t.length,
          r = !1,
          i = 0,
          a = 0,
          s = "";
        function l() {
          if (!r) {
            var n = o.trim(t.slice(i, a)),
              l = n.indexOf(":");
            if (-1 !== l) {
              var u = o.trim(n.slice(0, l)),
                c = o.trim(n.slice(l + 1));
              if (u) {
                var d = e(i, s.length, u, c, n);
                d && (s += d + "; ");
              }
            }
          }
          i = a + 1;
        }
        for (; a < n; a++) {
          var u = t[a];
          if ("/" === u && "*" === t[a + 1]) {
            var c = t.indexOf("*/", a + 2);
            if (-1 === c) break;
            (i = (a = c + 1) + 1), (r = !1);
          } else
            "(" === u
              ? (r = !0)
              : ")" === u
                ? (r = !1)
                : ";" === u
                  ? r || l()
                  : "\n" === u && l();
        }
        return o.trim(s);
      };
    },
    17381: (t) => {
      t.exports = {
        indexOf: function (t, e) {
          var n, o;
          if (Array.prototype.indexOf) return t.indexOf(e);
          for (n = 0, o = t.length; n < o; n++) if (t[n] === e) return n;
          return -1;
        },
        forEach: function (t, e, n) {
          var o, r;
          if (Array.prototype.forEach) return t.forEach(e, n);
          for (o = 0, r = t.length; o < r; o++) e.call(n, t[o], o, t);
        },
        trim: function (t) {
          return String.prototype.trim
            ? t.trim()
            : t.replace(/(^\s*)|(\s*$)/g, "");
        },
        trimRight: function (t) {
          return String.prototype.trimRight
            ? t.trimRight()
            : t.replace(/(\s*$)/g, "");
        },
      };
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
      t.exports = function t(e, n, i, a, s) {
        var l = -1,
          u = e.length;
        for (i || (i = r), s || (s = []); ++l < u; ) {
          var c = e[l];
          n > 0 && i(c)
            ? n > 1
              ? t(c, n - 1, i, a, s)
              : o(s, c)
            : a || (s[s.length] = c);
        }
        return s;
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
        for (var a = -1, s = e.length, l = {}; ++a < s; ) {
          var u = e[a],
            c = o(t, u);
          n(c, u) && r(l, i(u, t), c);
        }
        return l;
      };
    },
    10611: (t, e, n) => {
      var o = n(34865),
        r = n(71811),
        i = n(65776),
        a = n(13218),
        s = n(40327);
      t.exports = function (t, e, n, l) {
        if (!a(t)) return t;
        for (
          var u = -1, c = (e = r(e, t)).length, d = c - 1, p = t;
          null != p && ++u < c;

        ) {
          var f = s(e[u]),
            v = n;
          if ("__proto__" === f || "constructor" === f || "prototype" === f)
            return t;
          if (u != d) {
            var g = p[f];
            void 0 === (v = l ? l(g, f, p) : void 0) &&
              (v = a(g) ? g : i(e[u + 1]) ? [] : {});
          }
          o(p, f, v), (p = p[f]);
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
        s = o ? o.prototype : void 0,
        l = s ? s.toString : void 0;
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
        s = n(41780),
        l = n(40327);
      t.exports = function (t, e, n) {
        for (var u = -1, c = (e = o(e, t)).length, d = !1; ++u < c; ) {
          var p = l(e[u]);
          if (!(d = null != t && n(t, p))) break;
          t = t[p];
        }
        return d || ++u != c
          ? d
          : !!(c = null == t ? 0 : t.length) &&
              s(c) &&
              a(p, c) &&
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
              var i = arguments, a = -1, s = r(i.length - e, 0), l = Array(s);
              ++a < s;

            )
              l[a] = i[e + a];
            a = -1;
            for (var u = Array(e + 1); ++a < e; ) u[a] = i[a];
            return (u[e] = n(l)), o(t, this, u);
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
    72312: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { default: () => m });
      var o = n(2954),
        r = n(17462),
        i = n(96160),
        a = n(10182),
        s = n(50965),
        l = n(92636),
        u = n(54856),
        c = n(90435),
        d = n(85786),
        p = n(68924),
        f = n.n(p);
      var v = n(21029),
        g = n(53419);
      const h = (0, o.aZ)({
        __name: "note-editor",
        setup(t) {
          const e = {
              inserted: function (t) {
                setTimeout(() => t.focus());
              },
            },
            n = r.Type.TextStyles,
            h = (0, o.iH)(null),
            m = (0, o.iH)(!1),
            {
              link: b,
              topicRect: x,
              notesEditor: k,
              editorContainer: w,
              isLinkInputVisible: y,
              isContainerFocused: C,
              setLink: L,
              saveNote: T,
              showLinkInput: A,
              closeLinkInput: I,
              updateSelectionStyle: S,
            } = (() => {
              const { T: t } = (0, s.JE)(),
                { registerCommands: e, unregisterCommands: n } = (0, a.y)(),
                {
                  executeAction: v,
                  domRectForSelection: g,
                  syncedProperties: h,
                  selection: m,
                } = (0, i.nZ)(),
                b = (0, o.Fl)(() => {
                  var t;
                  return null === (t = m.value) || void 0 === t
                    ? void 0
                    : t.modelIds;
                }),
                x = (0, o.iH)(""),
                k = (0, o.iH)(),
                w = (0, o.iH)(!1),
                y = (0, o.iH)(!1),
                C = (0, o.iH)(),
                L = (0, o.Fl)(() => {
                  const {
                    height: t,
                    width: e,
                    x: n,
                    y: o,
                  } = g.value || { height: 0, width: 0, x: 0, y: 0 };
                  return { height: t, width: e, left: n || 0, top: o || 0 };
                }),
                T = (t) =>
                  t
                    ? f()(t, {
                        onIgnoreTag: (t, e) => {
                          if ("xmind-autolink" === t) return e;
                        },
                        safeAttrValue: (t, e, n, o) =>
                          "a" === t && "href" === e
                            ? n
                            : (0, p.safeAttrValue)(t, e, n, o),
                      })
                    : t;
              (0, o.bv)(() => {
                k.value &&
                  ((C.value = new r.Editor({ container: k.value })),
                  setTimeout(() => {
                    C.value.focus();
                  }, 100),
                  (0, o.YP)(
                    () => {
                      var t, e;
                      return null ===
                        (e =
                          null === (t = h.value) || void 0 === t
                            ? void 0
                            : t.notes) || void 0 === e
                        ? void 0
                        : e.value;
                    },
                    (t) => {
                      if (!t) return;
                      const e = {
                        plain: { content: T(null == t ? void 0 : t.text) },
                        realHTML: { content: T(null == t ? void 0 : t.html) },
                      };
                      C.value.setNoteData(e),
                        setTimeout(() => {
                          C.value.focus();
                        }, 100);
                    },
                    { immediate: !0 },
                  ),
                  k.value.addEventListener("focus", I),
                  k.value.addEventListener("blur", S),
                  k.value.addEventListener("link-activated", _),
                  e([
                    {
                      id: "notes.removeLink",
                      provider: `editor/${window.editorId}/notes`,
                      enabledFn: () => !0,
                      handler: () => {
                        C.value && C.value.removeLink();
                      },
                    },
                    {
                      id: "notes.editLink",
                      provider: `editor/${window.editorId}/notes`,
                      enabledFn: () => !0,
                      handler: () => {
                        C.value && A();
                      },
                    },
                  ]));
              }),
                (0, o.Jd)(() => {
                  k.value &&
                    (k.value.removeEventListener("focus", I),
                    k.value.removeEventListener("blur", S),
                    k.value.removeEventListener("link-activated", _),
                    n([
                      {
                        id: "notes.removeLink",
                        provider: `editor/${window.editorId}/notes`,
                      },
                      {
                        id: "notes.editLink",
                        provider: `editor/${window.editorId}/notes`,
                      },
                    ]));
                });
              const A = () => {
                  (w.value = !0),
                    C.value.autoFitLinkSelectedRange(),
                    C.value.setSelectionStyle(r.Type.TextStyles.frozen, null, {
                      isCanUndo: !1,
                    });
                  const t = C.value.getSingleWholeLink();
                  x.value = t || "";
                },
                I = () => (y.value = !0),
                S = () => (y.value = !1),
                _ = (e) => {
                  if (!l.nd) return (0, d.DL)(e.detail.href, t);
                  c.ZP.fetch(u.QN);
                };
              return {
                link: x,
                topicRect: L,
                notesEditor: C,
                editorContainer: k,
                isLinkInputVisible: w,
                isContainerFocused: y,
                setLink: () => {
                  C.value.setLink(x.value), (x.value = "");
                },
                saveNote: () => {
                  var t, e;
                  if (!C.value.canUndo()) return;
                  const n = C.value.getNoteData();
                  if (!n)
                    return void v({
                      name: "mutateTarget:notes",
                      payload: { topicIds: b.value, notes: null },
                    });
                  const o = {
                    text:
                      null === (t = n.plain) || void 0 === t
                        ? void 0
                        : t.content,
                    html:
                      null === (e = n.realHTML) || void 0 === e
                        ? void 0
                        : e.content,
                  };
                  v({
                    name: "mutateTarget:notes",
                    payload: { topicIds: b.value, notes: o },
                  });
                },
                showLinkInput: A,
                closeLinkInput: () => {
                  (w.value = !1),
                    C.value.removeSelectionStyle(r.Type.TextStyles.frozen, {
                      isCanUndo: !1,
                    }),
                    C.value.focus();
                },
                updateSelectionStyle: (t) => {
                  C.value && C.value.toggleSelectionStyle(t);
                },
              };
            })(),
            { T: _ } = (0, s.JE)(),
            { setPopoverEditorVisible: E } = (0, v.$)(),
            F = (0, o.Fl)(() => [
              {
                title: _("bold"),
                icon: "icon: bold",
                disabled: y.value,
                handler: () => S(n.bold),
              },
              {
                title: _("italic"),
                icon: "icon: italic",
                disabled: y.value,
                handler: () => S(n.italic),
              },
              {
                title: _("underline"),
                icon: "icon: underline",
                disabled: y.value,
                handler: () => S(n.underline),
              },
              {
                title: _("unordered list"),
                icon: "icon: unordered-list",
                disabled: y.value,
                handler: () => S(n.bullet),
              },
              {
                title: _("ordered list"),
                icon: "icon: ordered-list",
                disabled: y.value,
                handler: () => S(n.number),
              },
              {
                title: _("link"),
                icon: "icon: link",
                disabled: !1,
                handler: H,
              },
            ]),
            P = (0, o.Fl)(() => `${(0, s.S)().theme}-theme`),
            H = () => {
              y.value ? I() : A();
            };
          return (
            (0, o.bv)(() => {
              const t = w.value.querySelector("trix-editor");
              (t.style.overflowY = "scroll"),
                void 0 !== t &&
                  t.addEventListener("keydown", (t) => {
                    9 == t.keyCode && t.preventDefault();
                  });
            }),
            {
              __sfc: !0,
              vFocus: e,
              textStyles: n,
              linkInputBox: h,
              isComposition: m,
              link: b,
              topicRect: x,
              notesEditor: k,
              editorContainer: w,
              isLinkInputVisible: y,
              isContainerFocused: C,
              setLink: L,
              saveNote: T,
              showLinkInput: A,
              closeLinkInput: I,
              updateSelectionStyle: S,
              $T: _,
              setPopoverEditorVisible: E,
              noteControlBtnGroup: F,
              editorContainerClass: P,
              onMousedown: (t) => {
                k.value &&
                  (t.target !== h.value
                    ? (k.value.container.contains(t.target) &&
                        t.target !== k.value.container) ||
                      (t.preventDefault(), t.stopPropagation())
                    : h.value.focus());
              },
              toggleLinkInputVisible: H,
              onLinkInputKeyDown: (t) => {
                m.value ||
                  (["Tab", "Enter"].includes(t.key) && t.preventDefault(),
                  "Enter" === t.key && L());
              },
              onContainerMaskClick: () => k.value.focus(),
              saveAndClose: () => {
                T(), "notes" === (0, v.$)().popoverEditorVisible && E("");
              },
              TopicPopoverContainer: g.Z,
            }
          );
        },
      });
      n(29564);
      const m = (0, n(51900).Z)(
        h,
        function () {
          var t = this,
            e = t._self._c,
            n = t._self._setupProxy;
          return e(
            n.TopicPopoverContainer,
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: 0 !== n.topicRect.width,
                  expression: "topicRect.width !== 0",
                },
              ],
              attrs: {
                "popover-height": 280,
                "popover-width": 400,
                "topic-height": n.topicRect.height,
                "topic-width": n.topicRect.width,
                "topic-left": n.topicRect.left,
                "topic-top": n.topicRect.top,
              },
              on: { "popover-close": n.saveAndClose },
            },
            [
              e(
                "div",
                {
                  staticClass:
                    "uk-padding uk-padding-remove-top uk-padding-remove-horizontal",
                  on: { mousedown: n.onMousedown },
                },
                [
                  e("div", { staticClass: "uk-flex uk-flex-column" }, [
                    e(
                      "div",
                      {
                        staticClass:
                          "uk-flex uk-flex-row uk-flex-center uk-padding-xsmall",
                      },
                      t._l(n.noteControlBtnGroup, function (t) {
                        return e("button", {
                          staticClass:
                            "uk-button uk-button-tile uk-button-small uk-button-icon uk-icon uk-padding-xsmall",
                          attrs: {
                            title: t.title,
                            "uk-icon": t.icon,
                            disabled: t.disabled,
                          },
                          on: {
                            click: function (e) {
                              return (
                                e.preventDefault(),
                                t.handler.apply(null, arguments)
                              );
                            },
                          },
                        });
                      }),
                      0,
                    ),
                  ]),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "uk-overflow-hidden" },
                    [
                      e(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class":
                              "uk-animation-slide-top uk-animation-fast ",
                            "leave-active-class":
                              "uk-animation-slide-top uk-animation-fast uk-animation-reverse",
                          },
                        },
                        [
                          n.isLinkInputVisible
                            ? e(
                                "div",
                                {
                                  staticClass:
                                    "uk-flex uk-padding uk-padding-remove-top uk-padding-remove-bottom uk-flex-middle link-box",
                                },
                                [
                                  e("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: n.link,
                                        expression: "link",
                                      },
                                      { name: "focus", rawName: "v-focus" },
                                    ],
                                    ref: "linkInputBox",
                                    staticClass: "uk-input link-input-box",
                                    attrs: {
                                      placeholder: n.$T("Enter Link URL"),
                                    },
                                    domProps: { value: n.link },
                                    on: {
                                      blur: n.closeLinkInput,
                                      compositionstart: function (t) {
                                        n.isComposition = !0;
                                      },
                                      compositionend: function (t) {
                                        n.isComposition = !1;
                                      },
                                      keydown: n.onLinkInputKeyDown,
                                      input: function (t) {
                                        t.target.composing ||
                                          (n.link = t.target.value);
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  e("button", {
                                    staticClass:
                                      "uk-button uk-button-tile uk-button-small uk-button-icon uk-icon uk-padding-xsmall",
                                    staticStyle: { "margin-left": "4px" },
                                    attrs: { "uk-icon": "icon: check" },
                                    on: { click: n.setLink },
                                  }),
                                ],
                              )
                            : t._e(),
                        ],
                      ),
                      t._v(" "),
                      e("div", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !n.isContainerFocused,
                            expression: "!isContainerFocused",
                          },
                        ],
                        staticClass: "container-mask",
                        on: { click: n.onContainerMaskClick },
                      }),
                      t._v(" "),
                      e("div", {
                        directives: [
                          {
                            name: "focus-contexts",
                            rawName: "v-focus-contexts:no-effect",
                            arg: "no-effect",
                          },
                        ],
                        ref: "editorContainer",
                        staticClass:
                          "uk-width-1-1 uk-padding uk-padding-remove-vertical uk-overflow-hidden",
                        class: n.editorContainerClass,
                        staticStyle: { cursor: "text", "padding-right": "5px" },
                        style: {
                          height: n.isLinkInputVisible ? "206px" : "232px",
                        },
                        attrs: { id: "editorContainer" },
                      }),
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
        "7a16d07f",
        null,
      ).exports;
    },
    53419: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => u });
      var o = n(2954),
        r = n(78718),
        i = n.n(r),
        a = n(96160),
        s = function (t, e, n, o) {
          return new (n || (n = Promise))(function (r, i) {
            function a(t) {
              try {
                l(o.next(t));
              } catch (t) {
                i(t);
              }
            }
            function s(t) {
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
                      })).then(a, s);
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
            u = (0, o.Fl)(() => {
              const { viewPortPadding: t } = n;
              return void 0 === t ? 16 : t;
            }),
            c = (0, o.Fl)(() => {
              const { autoShowOnMounted: t } = n;
              return void 0 === t || t;
            }),
            d = (0, o.Fl)(() => ({
              top: n.topicTop + "px",
              left: n.topicLeft + "px",
              width: n.topicWidth + "px",
              height: n.topicHeight + "px",
            })),
            p = (t) => {
              const e = t.getBoundingClientRect();
              return Object.assign(
                {},
                i()(e, "top", "left", "right", "bottom", "width", "height"),
                { offsetTop: t.offsetTop, offsetLeft: t.offsetLeft },
              );
            },
            f = () => {
              const t = document.querySelector("#editor-container");
              return t ? p(t) : null;
            },
            v = () => {
              const t = f();
              if (!t) return !1;
              const {
                  popoverHeight: e,
                  popoverWidth: o,
                  topicTop: r,
                  topicLeft: i,
                  topicWidth: s,
                  topicHeight: l,
                } = n,
                c = i + f().left,
                d = r + f().top,
                p = t.offsetTop > d,
                v = t.offsetTop + t.height < l + d + e,
                g = c - (t.left + t.offsetLeft) < o / 2 - s / 2,
                h = t.left + t.offsetLeft + t.width < c + s / 2 + o / 2,
                m = l + e > t.height,
                b = s > t.width;
              let x = t.offsetLeft,
                k = t.offsetTop;
              p && (k = d - u.value),
                v && (k = d + l + n.popoverHeight - t.height + u.value),
                m && (k = Math.max(l - t.height, 0) + d + n.popoverHeight);
              const w = Math.max((n.popoverWidth - s) / 2, 0);
              if (
                (g && (x = c - t.left - u.value - w),
                h && (x = c - t.left + s - t.width + w + u.value),
                b && (x = c + w),
                p || v || g || h || m || b)
              ) {
                const { moveViewport: t } = (0, a.nZ)();
                return t(x, k), !0;
              }
              return !0;
            },
            g = () =>
              s(this, void 0, void 0, function* () {
                if (!(yield v())) return h(!1);
                h(!0);
              }),
            h = (t) => {
              setTimeout(() => {
                r.proxy.$withUIKit((e) => {
                  const n = e.pop(l.value);
                  n && (t ? n.show() : n.hide());
                });
              }, 50);
            };
          return (
            (0, o.bv)(() => {
              c.value && g(),
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
              viewPortPadding: u,
              isAutoShowOnMounted: c,
              topicRectStyle: d,
              getElementRect: p,
              getWindowBounds: f,
              moveViewport: v,
              showPopover: g,
              _togglePopover: h,
            }
          );
        },
      });
      n(19455);
      const u = (0, n(51900).Z)(
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
    29564: (t, e, n) => {
      var o = n(51506);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[t.id, o, ""]]),
        o.locals && (t.exports = o.locals);
      (0, n(45346).Z)("143e83eb", o, !0, {});
    },
    19455: (t, e, n) => {
      var o = n(10454);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[t.id, o, ""]]),
        o.locals && (t.exports = o.locals);
      (0, n(45346).Z)("b6d891a8", o, !0, {});
    },
    82302: (t, e, n) => {
      var o = n(29970).FilterCSS,
        r = n(29970).getDefaultWhiteList,
        i = n(75938);
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
      var s = new o();
      function l(t) {
        return t.replace(u, "&lt;").replace(c, "&gt;");
      }
      var u = /</g,
        c = />/g,
        d = /"/g,
        p = /&quot;/g,
        f = /&#([a-zA-Z0-9]*);?/gim,
        v = /&colon;?/gim,
        g = /&newline;?/gim,
        h =
          /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,
        m = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
        b = /u\s*r\s*l\s*\(.*/gi;
      function x(t) {
        return t.replace(d, "&quot;");
      }
      function k(t) {
        return t.replace(p, '"');
      }
      function w(t) {
        return t.replace(f, function (t, e) {
          return "x" === e[0] || "X" === e[0]
            ? String.fromCharCode(parseInt(e.substr(1), 16))
            : String.fromCharCode(parseInt(e, 10));
        });
      }
      function y(t) {
        return t.replace(v, ":").replace(g, " ");
      }
      function C(t) {
        for (var e = "", n = 0, o = t.length; n < o; n++)
          e += t.charCodeAt(n) < 32 ? " " : t.charAt(n);
        return i.trim(e);
      }
      function L(t) {
        return (t = C((t = y((t = w((t = k(t))))))));
      }
      function T(t) {
        return (t = l((t = x(t))));
      }
      (e.whiteList = {
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
        (e.getDefaultWhiteList = a),
        (e.onTag = function (t, e, n) {}),
        (e.onIgnoreTag = function (t, e, n) {}),
        (e.onTagAttr = function (t, e, n) {}),
        (e.onIgnoreTagAttr = function (t, e, n) {}),
        (e.safeAttrValue = function (t, e, n, o) {
          if (((n = L(n)), "href" === e || "src" === e)) {
            if ("#" === (n = i.trim(n))) return "#";
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
          } else if ("background" === e) {
            if (((h.lastIndex = 0), h.test(n))) return "";
          } else if ("style" === e) {
            if (((m.lastIndex = 0), m.test(n))) return "";
            if (
              ((b.lastIndex = 0), b.test(n) && ((h.lastIndex = 0), h.test(n)))
            )
              return "";
            !1 !== o && (n = (o = o || s).process(n));
          }
          return (n = T(n));
        }),
        (e.escapeHtml = l),
        (e.escapeQuote = x),
        (e.unescapeQuote = k),
        (e.escapeHtmlEntities = w),
        (e.escapeDangerHtml5Entities = y),
        (e.clearNonPrintableCharacter = C),
        (e.friendlyAttrValue = L),
        (e.escapeAttrValue = T),
        (e.onIgnoreTagStripAll = function () {
          return "";
        }),
        (e.StripTagBody = function (t, e) {
          "function" != typeof e && (e = function () {});
          var n = !Array.isArray(t),
            o = [],
            r = !1;
          return {
            onIgnoreTag: function (a, s, l) {
              if (
                (function (e) {
                  return !!n || -1 !== i.indexOf(t, e);
                })(a)
              ) {
                if (l.isClosing) {
                  var u = "[/removed]",
                    c = l.position + 10;
                  return o.push([!1 !== r ? r : l.position, c]), (r = !1), u;
                }
                return r || (r = l.position), "[removed]";
              }
              return e(a, s, l);
            },
            remove: function (t) {
              var e = "",
                n = 0;
              return (
                i.forEach(o, function (o) {
                  (e += t.slice(n, o[0])), (n = o[1]);
                }),
                (e += t.slice(n))
              );
            },
          };
        }),
        (e.stripCommentTag = function (t) {
          for (var e = "", n = 0; n < t.length; ) {
            var o = t.indexOf("\x3c!--", n);
            if (-1 === o) {
              e += t.slice(n);
              break;
            }
            e += t.slice(n, o);
            var r = t.indexOf("--\x3e", o);
            if (-1 === r) break;
            n = r + 3;
          }
          return e;
        }),
        (e.stripBlankChar = function (t) {
          var e = t.split("");
          return (e = e.filter(function (t) {
            var e = t.charCodeAt(0);
            return 127 !== e && (!(e <= 31) || 10 === e || 13 === e);
          })).join("");
        }),
        (e.cssFilter = s),
        (e.getDefaultCSSWhiteList = r);
    },
    68924: (t, e, n) => {
      var o = n(82302),
        r = n(73268),
        i = n(82973);
      function a(t, e) {
        return new i(e).process(t);
      }
      ((e = t.exports = a).filterXSS = a),
        (e.FilterXSS = i),
        (function () {
          for (var t in o) e[t] = o[t];
          for (var n in r) e[n] = r[n];
        })(),
        "undefined" != typeof window && (window.filterXSS = t.exports),
        "undefined" != typeof self &&
          "undefined" != typeof DedicatedWorkerGlobalScope &&
          self instanceof DedicatedWorkerGlobalScope &&
          (self.filterXSS = t.exports);
    },
    73268: (t, e, n) => {
      var o = n(75938);
      function r(t) {
        var e,
          n = o.spaceIndex(t);
        return (
          (e = -1 === n ? t.slice(1, -1) : t.slice(1, n + 1)),
          "/" === (e = o.trim(e).toLowerCase()).slice(0, 1) && (e = e.slice(1)),
          "/" === e.slice(-1) && (e = e.slice(0, -1)),
          e
        );
      }
      function i(t) {
        return "</" === t.slice(0, 2);
      }
      var a = /[^a-zA-Z0-9\\_:.-]/gim;
      function s(t, e) {
        for (; e < t.length; e++) {
          var n = t[e];
          if (" " !== n) return "=" === n ? e : -1;
        }
      }
      function l(t, e) {
        for (; e < t.length; e++) {
          var n = t[e];
          if (" " !== n) return "'" === n || '"' === n ? e : -1;
        }
      }
      function u(t, e) {
        for (; e > 0; e--) {
          var n = t[e];
          if (" " !== n) return "=" === n ? e : -1;
        }
      }
      function c(t) {
        return (function (t) {
          return (
            ('"' === t[0] && '"' === t[t.length - 1]) ||
            ("'" === t[0] && "'" === t[t.length - 1])
          );
        })(t)
          ? t.substr(1, t.length - 2)
          : t;
      }
      (e.parseTag = function (t, e, n) {
        "use strict";
        var o = "",
          a = 0,
          s = !1,
          l = !1,
          u = 0,
          c = t.length,
          d = "",
          p = "";
        t: for (u = 0; u < c; u++) {
          var f = t.charAt(u);
          if (!1 === s) {
            if ("<" === f) {
              s = u;
              continue;
            }
          } else if (!1 === l) {
            if ("<" === f) {
              (o += n(t.slice(a, u))), (s = u), (a = u);
              continue;
            }
            if (">" === f || u === c - 1) {
              (o += n(t.slice(a, s))),
                (d = r((p = t.slice(s, u + 1)))),
                (o += e(s, o.length, d, p, i(p))),
                (a = u + 1),
                (s = !1);
              continue;
            }
            if ('"' === f || "'" === f)
              for (
                var v = 1, g = t.charAt(u - v);
                "" === g.trim() || "=" === g;

              ) {
                if ("=" === g) {
                  l = f;
                  continue t;
                }
                g = t.charAt(u - ++v);
              }
          } else if (f === l) {
            l = !1;
            continue;
          }
        }
        return a < c && (o += n(t.substr(a))), o;
      }),
        (e.parseAttr = function (t, e) {
          "use strict";
          var n = 0,
            r = 0,
            i = [],
            d = !1,
            p = t.length;
          function f(t, n) {
            if (
              !((t = (t = o.trim(t)).replace(a, "").toLowerCase()).length < 1)
            ) {
              var r = e(t, n || "");
              r && i.push(r);
            }
          }
          for (var v = 0; v < p; v++) {
            var g,
              h = t.charAt(v);
            if (!1 !== d || "=" !== h)
              if (!1 === d || v !== r)
                if (/\s|\n|\t/.test(h)) {
                  if (((t = t.replace(/\s|\n|\t/g, " ")), !1 === d)) {
                    if (-1 === (g = s(t, v))) {
                      f(o.trim(t.slice(n, v))), (d = !1), (n = v + 1);
                      continue;
                    }
                    v = g - 1;
                    continue;
                  }
                  if (-1 === (g = u(t, v - 1))) {
                    f(d, c(o.trim(t.slice(n, v)))), (d = !1), (n = v + 1);
                    continue;
                  }
                } else;
              else {
                if (-1 === (g = t.indexOf(h, v + 1))) break;
                f(d, o.trim(t.slice(r + 1, g))), (d = !1), (n = (v = g) + 1);
              }
            else
              (d = t.slice(n, v)),
                (n = v + 1),
                (r =
                  '"' === t.charAt(n) || "'" === t.charAt(n) ? n : l(t, v + 1));
          }
          return (
            n < t.length &&
              (!1 === d ? f(t.slice(n)) : f(d, c(o.trim(t.slice(n))))),
            o.trim(i.join(" "))
          );
        });
    },
    75938: (t) => {
      t.exports = {
        indexOf: function (t, e) {
          var n, o;
          if (Array.prototype.indexOf) return t.indexOf(e);
          for (n = 0, o = t.length; n < o; n++) if (t[n] === e) return n;
          return -1;
        },
        forEach: function (t, e, n) {
          var o, r;
          if (Array.prototype.forEach) return t.forEach(e, n);
          for (o = 0, r = t.length; o < r; o++) e.call(n, t[o], o, t);
        },
        trim: function (t) {
          return String.prototype.trim
            ? t.trim()
            : t.replace(/(^\s*)|(\s*$)/g, "");
        },
        spaceIndex: function (t) {
          var e = /\s|\n|\t/.exec(t);
          return e ? e.index : -1;
        },
      };
    },
    82973: (t, e, n) => {
      var o = n(29970).FilterCSS,
        r = n(82302),
        i = n(73268),
        a = i.parseTag,
        s = i.parseAttr,
        l = n(75938);
      function u(t) {
        return null == t;
      }
      function c(t) {
        (t = (function (t) {
          var e = {};
          for (var n in t) e[n] = t[n];
          return e;
        })(t || {})).stripIgnoreTag &&
          (t.onIgnoreTag &&
            console.error(
              'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time',
            ),
          (t.onIgnoreTag = r.onIgnoreTagStripAll)),
          t.whiteList || t.allowList
            ? (t.whiteList = (function (t) {
                var e = {};
                for (var n in t)
                  Array.isArray(t[n])
                    ? (e[n.toLowerCase()] = t[n].map(function (t) {
                        return t.toLowerCase();
                      }))
                    : (e[n.toLowerCase()] = t[n]);
                return e;
              })(t.whiteList || t.allowList))
            : (t.whiteList = r.whiteList),
          (t.onTag = t.onTag || r.onTag),
          (t.onTagAttr = t.onTagAttr || r.onTagAttr),
          (t.onIgnoreTag = t.onIgnoreTag || r.onIgnoreTag),
          (t.onIgnoreTagAttr = t.onIgnoreTagAttr || r.onIgnoreTagAttr),
          (t.safeAttrValue = t.safeAttrValue || r.safeAttrValue),
          (t.escapeHtml = t.escapeHtml || r.escapeHtml),
          (this.options = t),
          !1 === t.css
            ? (this.cssFilter = !1)
            : ((t.css = t.css || {}), (this.cssFilter = new o(t.css)));
      }
      (c.prototype.process = function (t) {
        if (!(t = (t = t || "").toString())) return "";
        var e = this.options,
          n = e.whiteList,
          o = e.onTag,
          i = e.onIgnoreTag,
          c = e.onTagAttr,
          d = e.onIgnoreTagAttr,
          p = e.safeAttrValue,
          f = e.escapeHtml,
          v = this.cssFilter;
        e.stripBlankChar && (t = r.stripBlankChar(t)),
          e.allowCommentTag || (t = r.stripCommentTag(t));
        var g = !1;
        e.stripIgnoreTagBody &&
          ((g = r.StripTagBody(e.stripIgnoreTagBody, i)), (i = g.onIgnoreTag));
        var h = a(
          t,
          function (t, e, r, a, g) {
            var h = {
                sourcePosition: t,
                position: e,
                isClosing: g,
                isWhite: Object.prototype.hasOwnProperty.call(n, r),
              },
              m = o(r, a, h);
            if (!u(m)) return m;
            if (h.isWhite) {
              if (h.isClosing) return "</" + r + ">";
              var b = (function (t) {
                  var e = l.spaceIndex(t);
                  if (-1 === e)
                    return { html: "", closing: "/" === t[t.length - 2] };
                  var n =
                    "/" === (t = l.trim(t.slice(e + 1, -1)))[t.length - 1];
                  return (
                    n && (t = l.trim(t.slice(0, -1))), { html: t, closing: n }
                  );
                })(a),
                x = n[r],
                k = s(b.html, function (t, e) {
                  var n = -1 !== l.indexOf(x, t),
                    o = c(r, t, e, n);
                  return u(o)
                    ? n
                      ? (e = p(r, t, e, v))
                        ? t + '="' + e + '"'
                        : t
                      : u((o = d(r, t, e, n)))
                        ? void 0
                        : o
                    : o;
                });
              return (
                (a = "<" + r),
                k && (a += " " + k),
                b.closing && (a += " /"),
                (a += ">")
              );
            }
            return u((m = i(r, a, h))) ? f(a) : m;
          },
          f,
        );
        return g && (h = g.remove(h)), h;
      }),
        (t.exports = c);
    },
  },
]);
