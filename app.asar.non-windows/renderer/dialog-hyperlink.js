(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [5656],
  {
    12083: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var i = n(23645),
        a = n.n(i)()(function (e) {
          return e[1];
        });
      a.push([
        e.id,
        ".dialog-hyperlink-tips {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  font-weight: 600;\n  font-size: 14px;\n}\n",
        "",
      ]);
      const r = a;
    },
    23645: (e) => {
      "use strict";
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = e(t);
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
            }).join("");
          }),
          (t.i = function (e, n, i) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var a = {};
            if (i)
              for (var r = 0; r < this.length; r++) {
                var o = this[r][0];
                null != o && (a[o] = !0);
              }
            for (var s = 0; s < e.length; s++) {
              var l = [].concat(e[s]);
              (i && a[l[0]]) ||
                (n &&
                  (l[2]
                    ? (l[2] = "".concat(n, " and ").concat(l[2]))
                    : (l[2] = n)),
                t.push(l));
            }
          }),
          t
        );
      };
    },
    62705: (e, t, n) => {
      var i = n(55639).Symbol;
      e.exports = i;
    },
    44239: (e, t, n) => {
      var i = n(62705),
        a = n(89607),
        r = n(2333),
        o = i ? i.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : o && o in Object(e)
            ? a(e)
            : r(e);
      };
    },
    27561: (e, t, n) => {
      var i = n(67990),
        a = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, i(e) + 1).replace(a, "") : e;
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
    89607: (e, t, n) => {
      var i = n(62705),
        a = Object.prototype,
        r = a.hasOwnProperty,
        o = a.toString,
        s = i ? i.toStringTag : void 0;
      e.exports = function (e) {
        var t = r.call(e, s),
          n = e[s];
        try {
          e[s] = void 0;
          var i = !0;
        } catch (e) {}
        var a = o.call(e);
        return i && (t ? (e[s] = n) : delete e[s]), a;
      };
    },
    2333: (e) => {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    55639: (e, t, n) => {
      var i = n(31957),
        a = "object" == typeof self && self && self.Object === Object && self,
        r = i || a || Function("return this")();
      e.exports = r;
    },
    67990: (e) => {
      var t = /\s/;
      e.exports = function (e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)); );
        return n;
      };
    },
    23279: (e, t, n) => {
      var i = n(13218),
        a = n(7771),
        r = n(14841),
        o = Math.max,
        s = Math.min;
      e.exports = function (e, t, n) {
        var l,
          u,
          c,
          d,
          f,
          h,
          p = 0,
          m = !1,
          b = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function v(t) {
          var n = l,
            i = u;
          return (l = u = void 0), (p = t), (d = e.apply(i, n));
        }
        function y(e) {
          var n = e - h;
          return void 0 === h || n >= t || n < 0 || (b && e - p >= c);
        }
        function w() {
          var e = a();
          if (y(e)) return x(e);
          f = setTimeout(
            w,
            (function (e) {
              var n = t - (e - h);
              return b ? s(n, c - (e - p)) : n;
            })(e),
          );
        }
        function x(e) {
          return (f = void 0), g && l ? v(e) : ((l = u = void 0), d);
        }
        function k() {
          var e = a(),
            n = y(e);
          if (((l = arguments), (u = this), (h = e), n)) {
            if (void 0 === f)
              return (function (e) {
                return (p = e), (f = setTimeout(w, t)), m ? v(e) : d;
              })(h);
            if (b) return clearTimeout(f), (f = setTimeout(w, t)), v(h);
          }
          return void 0 === f && (f = setTimeout(w, t)), d;
        }
        return (
          (t = r(t) || 0),
          i(n) &&
            ((m = !!n.leading),
            (c = (b = "maxWait" in n) ? o(r(n.maxWait) || 0, t) : c),
            (g = "trailing" in n ? !!n.trailing : g)),
          (k.cancel = function () {
            void 0 !== f && clearTimeout(f), (p = 0), (l = h = u = f = void 0);
          }),
          (k.flush = function () {
            return void 0 === f ? d : x(a());
          }),
          k
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
    33448: (e, t, n) => {
      var i = n(44239),
        a = n(37005);
      e.exports = function (e) {
        return "symbol" == typeof e || (a(e) && "[object Symbol]" == i(e));
      };
    },
    7771: (e, t, n) => {
      var i = n(55639);
      e.exports = function () {
        return i.Date.now();
      };
    },
    14841: (e, t, n) => {
      var i = n(27561),
        a = n(13218),
        r = n(33448),
        o = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        u = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (r(e)) return NaN;
        if (a(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = a(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = i(e);
        var n = s.test(e);
        return n || l.test(e) ? u(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e;
      };
    },
    35917: (e, t, n) => {
      "use strict";
      n.r(t);
      var i = n(51505),
        a = n(2954),
        r = n(67657),
        o = n(18621),
        s = n(95246),
        l = n(63477),
        u = n.n(l),
        c = n(90435),
        d = n(54856);
      var f = n(23279),
        h = n.n(f),
        p = n(69931),
        m = n(11248),
        b = n.n(m);
      const g =
        '{"v":"5.8.1","fr":60,"ip":0,"op":71,"w":16,"h":16,"nm":"合成 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"形状图层 1","sr":1,"ks":{"o":{"a":0,"k":30,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[8,8,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[2,2,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[480,480],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":75,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.295],"y":[1]},"o":{"x":[0.705],"y":[0]},"t":13,"s":[0]},{"t":70,"s":[99.9]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.295],"y":[1]},"o":{"x":[0.705],"y":[0]},"t":0,"s":[0.1]},{"t":70,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":600,"st":0,"bm":0}],"markers":[]}';
      const v =
        '{"v":"5.8.1","fr":60,"ip":0,"op":71,"w":16,"h":16,"nm":"合成 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"dark","sr":1,"ks":{"o":{"a":0,"k":30,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[8,8,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[2,2,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[480,480],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":75,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.295],"y":[1]},"o":{"x":[0.705],"y":[0]},"t":13,"s":[0]},{"t":70,"s":[99.9]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.295],"y":[1]},"o":{"x":[0.705],"y":[0]},"t":0,"s":[0.1]},{"t":70,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":600,"st":0,"bm":0}],"markers":[]}';
      var y = n(6225),
        w = n(50965),
        x = function (e, t, n, i) {
          return new (n || (n = Promise))(function (a, r) {
            function o(e) {
              try {
                l(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function s(e) {
              try {
                l(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, s);
            }
            l((i = i.apply(e, t || [])).next());
          });
        };
      const k = u().parse(window.location.search.slice(1)),
        _ = (0, a.aZ)({
          components: { DropDown: y.Z },
          setup() {
            const { topicHref: e, userAutoFillOpt: t } = k,
              n = (e, ...t) => (0, w.JE)().T(e, ...t),
              i = (0, a.Fl)(() => (0, w.S)().appearance),
              l = (0, a.Fl)(() =>
                "dark" === i.value
                  ? "rgba(255, 255, 255, 0.15)"
                  : "rgba(0, 0, 0, 0.03)",
              ),
              u = (0, a.iH)(""),
              f = (0, a.iH)(e || ""),
              m = (0, a.iH)(""),
              y = (0, a.iH)(!1),
              _ = (0, a.iH)(),
              A = (0, a.iH)(),
              S = (0, a.iH)(),
              M = (0, a.iH)("init"),
              C = (0, a.iH)("init");
            let T,
              O,
              I = !1,
              F = "";
            const R = (0, a.Fl)(() => Boolean(f.value)),
              E = (0, a.Fl)(() => Boolean(u.value)),
              N = (0, a.Fl)(() => Boolean(m.value)),
              D = (0, a.Fl)(() => Boolean(e)),
              B = (0, a.iH)("none"),
              L = (0, a.Fl)(() => {
                const e = [{ value: "none", label: n("None") }],
                  t = [{ value: "title", label: n("Webpage Title") }],
                  i = [{ value: "thumbnail", label: n("Video Thumbnail") }],
                  a = [{ value: "all", label: n("All Information") }];
                return u.value && m.value
                  ? e.concat(t, i, a)
                  : u.value
                    ? e.concat(t)
                    : e;
              }),
              $ = (e) =>
                x(this, void 0, void 0, function* () {
                  if (
                    (O && O({ result: "abort" }),
                    (M.value = "init"),
                    (C.value = "init"),
                    (m.value = ""),
                    (u.value = ""),
                    (T = null),
                    !e)
                  )
                    return;
                  (M.value = "loading"), (C.value = "loading");
                  const t = new Promise((t) => {
                      O = t;
                      const n = U(e);
                      c.ZP.fetch(d.lf.URL_DETAILS, { url: n }).then((e) => {
                        (O = null), t({ result: "success", webDetails: e });
                      });
                    }),
                    { result: n, webDetails: i } = yield t;
                  if ("success" === n) {
                    if (!i)
                      return (M.value = "failed"), void (C.value = "failed");
                    if (
                      (i.isVideoUrl && (I = i.isVideoUrl),
                      i.embedUrl && (F = i.embedUrl),
                      i.title
                        ? ((u.value = i.title), (M.value = "success"))
                        : (M.value = "failed"),
                      i.thumbnail &&
                        ((T = yield ((a = i.thumbnail),
                        new Promise((e, t) => {
                          const n = r.net.request(a),
                            i = [];
                          n.on("response", (n) => {
                            n.on("end", () => {
                              e(Buffer.concat(i));
                            }),
                              n.on("data", (e) => {
                                i.push(e);
                              }),
                              n.on("error", () => {
                                t();
                              });
                          }),
                            n.on("error", () => {
                              t();
                            }),
                            n.end();
                        }))),
                        T))
                    )
                      return (
                        (m.value =
                          "data:image/png;base64," + T.toString("base64")),
                        void (C.value = "success")
                      );
                    var a;
                    C.value = "failed";
                  }
                });
            (0, a.YP)(() => f.value, h()($, 500), { immediate: !0 }),
              (0, a.YP)(
                () => [u.value, m.value],
                ([e, n]) => {
                  if (t) {
                    if (L.value.find(({ value: e }) => e === t))
                      return void (B.value = t);
                  }
                  B.value = e && n ? "thumbnail" : "none";
                },
              ),
              (0, a.bv)(() => {
                !(function (e) {
                  const t = JSON.parse(g);
                  b().loadAnimation({
                    container: e,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    animationData: t,
                  });
                })(A.value),
                  (function (e) {
                    const t = JSON.parse(v);
                    b().loadAnimation({
                      container: e,
                      renderer: "svg",
                      loop: !0,
                      autoplay: !0,
                      animationData: t,
                    });
                  })(S.value);
              });
            const P = () => {
                window.close();
              },
              U = (e) => (e.match(/([a-zA-Z0-9]+:\/\/)/) ? e : "http://" + e),
              W = (0, a.Fl)(() =>
                "init" === M.value
                  ? n("Link Information Preview")
                  : "loading" === M.value
                    ? n("Loading link information...")
                    : "failed" === M.value
                      ? n("No information found.")
                      : void 0,
              ),
              H = (0, a.Fl)(() =>
                "init" === M.value
                  ? (0, p.ju)("static/assets/images/dialog-hyperlink/init.svg")
                  : "failed" === M.value
                    ? (0, p.ju)(
                        "static/assets/images/dialog-hyperlink/failed.svg",
                      )
                    : "loading" === M.value
                      ? ""
                      : void 0,
              );
            let j;
            return (
              (j = (0, a.YP)(
                () => m.value,
                (e) => {
                  if (e) {
                    window.resizeTo(460, 512);
                    (0, r.getCurrentWindow)().center(),
                      (y.value = !0),
                      j && j();
                  }
                },
              )),
              {
                webUrl: f,
                webTitle: u,
                webThumbnailDataUrl: m,
                webTitleStatus: M,
                webThumbnailStatus: C,
                hasWebUrl: R,
                hasWebTitle: E,
                hasResizeWindow: y,
                hasWebThumbnailDataUrl: N,
                hasLinkInTopic: D,
                autoFillOpts: L,
                curAutoFillOpt: B,
                tips: W,
                icon: H,
                background: l,
                appearance: i,
                linkInput: _,
                loadingAnimation: A,
                loadingAnimationDark: S,
                close: P,
                insertURL: () =>
                  x(this, void 0, void 0, function* () {
                    yield c.ZP.fetch((0, d.iM)(window.id), {
                      action: "set",
                      webUrl: U(f.value),
                      webTitle: u.value,
                      thumbnail: T,
                      embedUrl: F,
                      autoFillOpt: B.value,
                      isVideoUrl: I,
                    }),
                      (0, o.L9)({ eventAction: "Link", eventName: "Webpage" }),
                      P();
                  }),
                removeURL: () =>
                  x(this, void 0, void 0, function* () {
                    yield c.ZP.fetch((0, d.iM)(window.id), {
                      action: "remove",
                    }),
                      P();
                  }),
                handleAutoFillChange: (e) => {
                  e && (B.value = e);
                },
                handleShowInputMenu: () => (0, s.Sr)(_.value.value),
                updateWebTitleAndThumbnail: $,
              }
            );
          },
        });
      n(80327);
      const A = (0, n(51900).Z)(
        _,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "div",
            {
              staticClass: "uk-window uk-window-dialog",
              attrs: { id: "dialog-hyperlink-container" },
            },
            [
              t(
                "div",
                {
                  staticClass:
                    "uk-window-title-bar uk-window-title-bar-floating",
                },
                [t("window-control-button-group")],
                1,
              ),
              e._v(" "),
              t(
                "div",
                {
                  staticClass:
                    "uk-window-body uk-padding-large uk-padding-remove-bottom uk-flex",
                  staticStyle: {
                    "padding-top": "32px",
                    "flex-direction": "column",
                  },
                },
                [
                  t(
                    "p",
                    {
                      staticClass: "uk-margin-bottom",
                      staticStyle: {
                        "font-size": "20px",
                        "font-weight": "700",
                      },
                    },
                    [
                      e._v(
                        "\n      " + e._s(e.$T("Insert Web Link")) + "\n    ",
                      ),
                    ],
                  ),
                  e._v(" "),
                  t("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.webUrl,
                        expression: "webUrl",
                      },
                    ],
                    ref: "linkInput",
                    staticClass: "uk-input uk-margin-small-bottom",
                    staticStyle: { "padding-left": "8px" },
                    attrs: {
                      autofocus: "",
                      type: "text",
                      spellcheck: "false",
                      placeholder: e.$T("Enter or paste a URL"),
                    },
                    domProps: { value: e.webUrl },
                    on: {
                      keydown: function (t) {
                        return !t.type.indexOf("key") &&
                          e._k(t.keyCode, "enter", 13, t.key, "Enter")
                          ? null
                          : e.updateWebTitleAndThumbnail(t.target.value);
                      },
                      contextmenu: function (t) {
                        return e.handleShowInputMenu();
                      },
                      input: function (t) {
                        t.target.composing || (e.webUrl = t.target.value);
                      },
                    },
                  }),
                  e._v(" "),
                  t(
                    "div",
                    {
                      staticClass:
                        "uk-flex uk-flex-middle uk-flex-center uk-margin-small-bottom uk-overflow-hidden",
                      staticStyle: {
                        "border-radius": "8px",
                        flex: "1",
                        "flex-direction": "column",
                        "justify-content": "flex-start",
                      },
                      style: { backgroundColor: e.background },
                    },
                    [
                      t(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.hasWebTitle,
                              expression: "hasWebTitle",
                            },
                          ],
                          staticClass: "uk-flex uk-flex-middle",
                          staticStyle: { margin: "16px" },
                          style: {
                            height: e.hasResizeWindow ? "42px" : "100%",
                            "margin-bottom": e.hasResizeWindow
                              ? "12px"
                              : "16px",
                          },
                        },
                        [
                          t("span", { staticClass: "dialog-hyperlink-tips" }, [
                            e._v(
                              "\n          " + e._s(e.webTitle) + "\n        ",
                            ),
                          ]),
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
                              value: !e.hasWebTitle,
                              expression: "!hasWebTitle",
                            },
                          ],
                          staticClass: "uk-flex uk-flex-middle",
                          staticStyle: {
                            flex: "1",
                            margin: "16px 16px 12px 16px",
                          },
                        },
                        [
                          t("img", {
                            attrs: { "uk-svg": "", "data-src": e.icon },
                          }),
                          e._v(" "),
                          t("span", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  "loading" === e.webThumbnailStatus &&
                                  "default" === e.appearance,
                                expression:
                                  "\n            webThumbnailStatus === 'loading' && appearance === 'default'\n          ",
                              },
                            ],
                            ref: "loadingAnimation",
                            staticStyle: { display: "inline-block" },
                          }),
                          e._v(" "),
                          t("span", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  "loading" === e.webThumbnailStatus &&
                                  "dark" === e.appearance,
                                expression:
                                  "webThumbnailStatus === 'loading' && appearance === 'dark'",
                              },
                            ],
                            ref: "loadingAnimationDark",
                            staticStyle: { display: "inline-block" },
                          }),
                          e._v(" "),
                          t(
                            "span",
                            {
                              staticStyle: {
                                "font-weight": "500",
                                opacity: "0.3",
                                "padding-left": "4px",
                              },
                            },
                            [
                              e._v(
                                "\n          " + e._s(e.tips) + "\n        ",
                              ),
                            ],
                          ),
                        ],
                      ),
                      e._v(" "),
                      e.hasWebThumbnailDataUrl
                        ? t("div", {
                            staticClass: "uk-width-1-1 uk-background-contain",
                            staticStyle: {
                              padding: "16px",
                              "padding-top": "0",
                              height: "210px",
                            },
                            style: {
                              "background-image": e.hasWebThumbnailDataUrl
                                ? `url(${e.webThumbnailDataUrl})`
                                : null,
                            },
                          })
                        : e.hasResizeWindow &&
                            "loading" !== e.webTitleStatus &&
                            e.hasWebTitle
                          ? t(
                              "div",
                              {
                                staticClass: "uk-text-center",
                                staticStyle: {
                                  width: "90%",
                                  height: "210px",
                                  "line-height": "210px",
                                  "border-top": "1px solid rgba(0, 0, 0, 0.08)",
                                },
                              },
                              [
                                t("span", {
                                  attrs: {
                                    "uk-svg": "",
                                    src: e.$toResourceURL(
                                      "static/assets/images/dialog-hyperlink/thumbnail.svg",
                                    ),
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "span",
                                  {
                                    staticStyle: {
                                      "font-weight": "500",
                                      opacity: "0.3",
                                    },
                                  },
                                  [
                                    e._v(
                                      e._s(e.$T("No video thumbnail.")) +
                                        "\n        ",
                                    ),
                                  ],
                                ),
                              ],
                            )
                          : e._e(),
                    ],
                  ),
                  e._v(" "),
                  t(
                    "div",
                    { staticClass: "uk-flex uk-flex-middle" },
                    [
                      t(
                        "span",
                        {
                          staticClass: "uk-margin-small-right",
                          staticStyle: {
                            "font-weight": "500",
                            "font-size": "13px",
                          },
                        },
                        [
                          e._v(
                            "\n        " +
                              e._s(e.$T("Auto fill:")) +
                              "\n      ",
                          ),
                        ],
                      ),
                      e._v(" "),
                      t("drop-down", {
                        staticStyle: {
                          display: "inline-block",
                          width: "144px",
                        },
                        attrs: {
                          "popover-container-id": "#dialog-hyperlink-container",
                          value: e.curAutoFillOpt,
                          items: e.autoFillOpts,
                          disabled: !(
                            e.hasWebTitle || e.hasWebThumbnailDataUrl
                          ),
                        },
                        on: { input: e.handleAutoFillChange },
                      }),
                    ],
                    1,
                  ),
                ],
              ),
              e._v(" "),
              t("div", { staticClass: "uk-window-button-bar" }, [
                t("div", { staticClass: "uk-button-group" }, [
                  t(
                    "button",
                    {
                      staticClass: "uk-button uk-button-default",
                      attrs: { type: "button", tabindex: "-1" },
                      on: { click: e.close },
                    },
                    [e._v("\n        " + e._s(e.$T("Cancel")) + "\n      ")],
                  ),
                  e._v(" "),
                  t(
                    "button",
                    {
                      staticClass: "uk-button uk-button-primary",
                      attrs: {
                        type: "button",
                        tabindex: "-1",
                        disabled: !e.hasWebUrl,
                      },
                      on: { click: e.insertURL },
                    },
                    [e._v("\n        " + e._s(e.$T("Insert")) + "\n      ")],
                  ),
                ]),
                e._v(" "),
                t("div", { staticClass: "uk-button-group" }, [
                  e.hasLinkInTopic
                    ? t(
                        "button",
                        {
                          staticClass: "uk-button uk-button-default",
                          attrs: { type: "button", tabindex: "-1" },
                          on: { click: e.removeURL },
                        },
                        [
                          e._v(
                            "\n        " + e._s(e.$T("Remove")) + "\n      ",
                          ),
                        ],
                      )
                    : e._e(),
                ]),
              ]),
            ],
          );
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      (0, i.Z)(A, { name: "dialog-hyperlink" });
    },
    13382: (e, t, n) => {
      "use strict";
      n.d(t, {
        G$: () => _,
        N0: () => b,
        Pg: () => S,
        R2: () => k,
        W5: () => x,
        ZZ: () => v,
        am: () => w,
        eq: () => y,
        yr: () => A,
      });
      var i = n(71017),
        a = n.n(i),
        r = n(67657),
        o = n(7104),
        s = n(86633),
        l = n(33394),
        u = n(94593),
        c = n(90435),
        d = n(54856),
        f = n(5893),
        h = n(50965),
        p = n(92636);
      const m = (0, s.ZP)("dialog");
      async function b(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = a().join((0, o.bY)(), e.icon));
        const t = r.BrowserWindow.fromId(window.id);
        return [r.dialog.showMessageBoxSync(t, e)];
      }
      async function g(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = a().join((0, o.bY)(), e.icon));
        const t = r.BrowserWindow.fromId(window.id),
          { response: n, checkboxChecked: i } = await r.dialog.showMessageBox(
            t,
            e,
          );
        return [n, i];
      }
      async function v(e) {
        (e = Object.assign({ securityScopedBookmarks: !0 }, e || {}))
          .suggestPath &&
          !e.defaultPath &&
          ((e.defaultPath = w(e.suggestPath, e.filters)), delete e.suggestPath);
        const {
          canceled: t,
          filePath: n,
          bookmark: i,
        } = await r.dialog.showSaveDialog(r.getCurrentWindow(), e);
        return t
          ? null
          : (n && i && (await l.Z.bindBookmark({ fp: n, bookmark: i })),
            n && (0, h.km)().setLastSaveDirectory(a().dirname(n)),
            n);
      }
      async function y({ folderName: e, dialogOptions: t }) {
        let n = "";
        (t = Object.assign({ securityScopedBookmarks: !0 }, t || {}))
          .defaultPath || (t.defaultPath = w({}));
        const {
          canceled: i,
          filePaths: o,
          bookmark: s,
        } = await r.dialog.showOpenDialog(r.getCurrentWindow(), t);
        if (i) return null;
        if (
          ((n = o[0]),
          o.length > 0 && s && (await l.Z.bindBookmark({ fp: n, bookmark: s })),
          "string" == typeof e)
        ) {
          let t = e.replace(/[\\/]/g, "");
          0, (n = a().join(n, t));
        }
        return (
          u.Z.existsSync(n) || u.Z.ensureDir(n),
          n && (0, h.km)().setLastSaveDirectory(n),
          n
        );
      }
      function w(
        { doc: e = null, oldDoc: t = null, suggestedName: n = null },
        i = null,
      ) {
        let o, s;
        if (
          (!o && n && (o = (0, f.N6)(n.toString())),
          !o &&
            e &&
            e.title &&
            e.source &&
            !e.source.startsWith("new://") &&
            (o = (0, f.N6)(e.title.toString())),
          !o &&
            t &&
            t.title &&
            t.source &&
            !t.source.startsWith("new://") &&
            (o = (0, f.N6)(t.title.toString())),
          o && Array.isArray(i))
        ) {
          const e = i[0] && i[0].extensions;
          Array.isArray(e) && e.length > 0 && (o = `${o}.${e[0]}`);
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
            s = r.app.getPath("documents");
          } catch (e) {
            m.info(e);
          }
        return s && o ? a().join(s, o) : s || o;
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
      async function k(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("OK"),
          n = e("Get Latest Version"),
          i = [t, n],
          [a] = await g({
            title: "Xmind",
            message: e(
              "The map style in this file might vary since it was created in a newer version of Xmind.",
            ),
            detail: e(
              "You can continue to open the file or update to the latest version for better compatibility.",
            ),
            buttons: i,
            defaultId: i.indexOf(n),
            cancelId: i.indexOf(t),
            noLink: !0,
          });
        a === i.indexOf(n) && c.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function _(e) {
        if (((e = "function" != typeof e ? (e) => e : e), p.zr))
          return await g({
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
          i = [n, t],
          [a] = await g({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file was created by a newer version of Xmind. Please update Xmind and try to open it again.",
            ),
            buttons: i,
            defaultId: i.indexOf(n),
            cancelId: i.indexOf(t),
            noLink: !0,
          });
        a === i.indexOf(n) && c.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function A(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Save"),
          n = e("Save as"),
          i = e("Cancel"),
          a = [];
        a.push(t, i, n);
        let [r] = await g({
          type: "none",
          title: "Xmind",
          message: e("Saving file from Xmind"),
          detail: e(
            "Once you save the file, it cannot be opened normally in older versions like $1.",
            "Xmind 22.11",
          ),
          buttons: a,
          defaultId: a.indexOf(n),
          cancelId: a.indexOf(i),
          noLink: !0,
        });
        const o = r === a.indexOf(t),
          s = r === a.indexOf(n);
        return { toSave: o, toSaveAs: s, toCancel: !o && !s };
      }
      async function S(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Fix ＆ Open"),
          n = e("Cancel"),
          i = [t, n],
          [a] = await g({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file may contain invalid data structure or have become corrupted. Xmind can try to fix the data structure to help you open it.",
            ),
            buttons: i,
            defaultId: i.indexOf(t),
            cancelId: i.indexOf(n),
            noLink: !0,
          });
        return { toFix: a === i.indexOf(t), toCancel: a === i.indexOf(n) };
      }
    },
    33394: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => p });
      var i = n(57147),
        a = n.n(i),
        r = n(71017),
        o = n.n(r),
        s = n(73837),
        l = n(86633),
        u = n(16704),
        c = n(56222);
      const d = (0, l.ZP)("renderer:fs");
      async function f(e) {
        return (0, c.A)("OBTAIN_READ_WRITE_ACCESS", e);
      }
      async function h(e) {
        return (0, c.A)("RELEASE_READ_WRITE_ACCESS", e);
      }
      const p = {
        read: async function (e) {
          if (!o().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const t = await (async function (e) {
            return (0, c.A)("OBTAIN_READ_LOCK", e);
          })(e);
          try {
            return await (0, s.promisify)(a().readFile)(e);
          } catch (t) {
            d.error(`path(${e}) read error: ${(0, u.SC)(t)}`);
            try {
              if (!(await f(e))) throw new Error(`No access to '${e}'`);
              return await (0, s.promisify)(a().readFile)(e);
            } catch (e) {
              throw e;
            } finally {
              await h(e);
            }
          } finally {
            await (async function (e) {
              return (0, c.A)("RELEASE_READ_LOCK", e);
            })(t);
          }
        },
        write: async function (e, t) {
          if (!o().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const n = await (async function (e) {
            return (0, c.A)("OBTAIN_WRITE_LOCK", e);
          })(e);
          try {
            return await (0, s.promisify)(a().writeFile)(e, t);
          } catch (n) {
            d.error(`path(${e}) write error: ${(0, u.SC)(n)}`);
            try {
              if (!(await f(e))) throw new Error(`No access to '${e}'`);
              return await (0, s.promisify)(a().writeFile)(e, t);
            } catch (e) {
              throw e;
            } finally {
              await h(e);
            }
          } finally {
            await (async function (e) {
              return (0, c.A)("RELEASE_WRITE_LOCK", e);
            })(n);
          }
        },
        bindBookmark: async function ({ fp: e, bookmark: t } = {}) {
          return (0, c.A)("BIND_BOOKMARK", { fp: e, bookmark: t });
        },
        hasRWAccess: async function (e) {
          return (0, c.A)("HAS_READ_WRITE_ACCESS", e);
        },
        obtainRWAccessFromOS: f,
        releaseRWAccessFromOS: h,
      };
    },
    95246: (e, t, n) => {
      "use strict";
      n.d(t, {
        RS: () => d,
        lF: () => h,
        JX: () => f,
        gP: () => b,
        sF: () => c,
        GI: () => p,
        Ni: () => m,
        mi: () => k,
        QC: () => v,
        Sr: () => y,
        yB: () => x,
        SX: () => w,
        RL: () => g,
      });
      n(13382), n(81296), n(90435), n(54856), n(71017);
      var i = n(72298),
        a = n(67657),
        r = (n(92636), n(41809));
      require("posthtml");
      var o = n(97234),
        s = n(26601),
        l = n(50965);
      const u = { cache: !1 },
        c = (e) => {
          const t = (e) => parseInt(e, 16);
          if (
            "string" == typeof (e = (0, o.Z)(e).toHexString()) &&
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
          const t = Object.assign({}, u, e);
          let n = null;
          const i = {};
          return function (e = "", a = "") {
            if (t.cache && i[e]) return i[e];
            n || (n = document.createElement("canvas"));
            const r = n.getContext("2d");
            r.font = a;
            const o = r.measureText(e);
            return t.cache && (i[e] = o.width), o.width;
          };
        };
      function f() {
        const e = a.screen.getAllDisplays().map((e) => e.scaleFactor);
        return Math.max.apply(null, e);
      }
      const h = (e, t = 1) => {
        const n = f(),
          i = (0, r.Hv)(e, 72 * n * t);
        return Buffer.from(i.slice(22), "base64");
      };
      function p(e) {
        let t = parseInt(e);
        return Number.isInteger(t) ? t : 100;
      }
      function m(e) {
        return `${parseInt(e)}%`;
      }
      const b = (function () {
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
      function g(e, t) {
        let n = (0, l.f7)().keybindingByCommandIdAndGroup(t);
        const i = [];
        return (
          "string" == typeof n &&
            n.split("+").forEach((e) => {
              let t = e;
              "=" === t && (t = "+"), t && i.push(t);
            }),
          i.length > 0 ? `${e} ${i.join(" ")}` : e
        );
      }
      const v = (e, t) => {
          a.getCurrentWindow().setSize(e, t);
        },
        y = (e) => {
          const t = (e, ...t) => (0, l.JE)().T(e, ...t),
            n = a.Menu,
            r = a.MenuItem,
            o = new n();
          setTimeout(() => {
            const n = document.getSelection().toString(),
              s = i.clipboard.readText();
            o.append(
              new r({
                label: t("Cut"),
                enabled: Boolean(n),
                click: () => document.execCommand("cut"),
              }),
            ),
              o.append(
                new r({
                  label: t("Copy"),
                  enabled: Boolean(n),
                  click: () => document.execCommand("copy"),
                }),
              ),
              o.append(
                new r({
                  label: t("Paste"),
                  enabled: Boolean(s),
                  click: () => document.execCommand("paste"),
                }),
              ),
              o.append(new r({ type: "separator" })),
              o.append(
                new r({
                  label: t("Select All"),
                  enabled: Boolean(e),
                  click: () => document.execCommand("selectAll"),
                }),
              ),
              o.popup({ window: a.getCurrentWindow() });
          }, 50);
        };
      async function w() {
        await new Promise((e) =>
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              requestIdleCallback(e);
            });
          }),
        );
      }
      const x = (e, t) => s.Z.test({ width: e, height: t, sizes: [e, t] }),
        k = async (e, t, n = 1) => {
          if (x(e * n, t * n)) return n;
          const i = await s.Z.maxWidth({ usePromise: !0 }),
            a = await s.Z.maxHeight({ usePromise: !0 }),
            r = await s.Z.maxArea({ usePromise: !0 }),
            o = i.width,
            l = a.height,
            u = r.width * r.height;
          let c = n;
          if (e * n > o) {
            const t = o / e;
            c = Math.min(c, t);
          }
          if (t * n > l) {
            const e = l / t;
            c = Math.min(c, e);
          }
          if (e * n * t * n > u) {
            const n = Math.sqrt(u / (e * t));
            c = Math.min(c, n);
          }
          return c;
        };
    },
    6225: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => s });
      var i = n(2954),
        a = n(7836),
        r = n(16704);
      const o = (0, i.aZ)({
        __name: "drop-down",
        props: {
          value: null,
          items: null,
          title: { default: "" },
          disabled: { type: Boolean, default: !1 },
          popoverContainerId: { default: "body" },
          customIcon: null,
          customBtnStyle: null,
          customBtnClass: null,
          customIconStyle: null,
          popoverStyle: null,
        },
        emits: ["input"],
        setup(e, { emit: t }) {
          const n = e,
            o = (0, i.iH)(`popover-${(0, r.hb)()}`),
            s = (0, i.Fl)(() => n.items.find(({ value: e }) => e === n.value)),
            l = (0, i.Fl)(() => n.disabled || !n.items.length);
          return {
            __sfc: !0,
            props: n,
            emit: t,
            popoverId: o,
            selectedItem: s,
            isDisabled: l,
            handleItemSelect: (e) => {
              t("input", e);
            },
            Vue2Teleport: a.Z,
          };
        },
      });
      const s = (0, n(51900).Z)(
        o,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            [
              t(
                "button",
                {
                  staticClass:
                    "uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left uk-overflow-hidden",
                  class: `${e.customIcon ? "is-icon-disbale" : ""} ${e.customBtnClass}`,
                  style: e.customBtnStyle,
                  attrs: {
                    id: n.popoverId,
                    title: e.title,
                    disabled: n.isDisabled,
                  },
                },
                [
                  n.selectedItem
                    ? [
                        n.selectedItem.label
                          ? t("span", [e._v(e._s(n.selectedItem.label))])
                          : e._e(),
                      ]
                    : e._e(),
                  e._v(" "),
                  e.customIcon
                    ? [
                        t("img", {
                          style: e.customIconStyle,
                          attrs: { src: e.customIcon },
                        }),
                      ]
                    : e._e(),
                ],
                2,
              ),
              e._v(" "),
              t(n.Vue2Teleport, { attrs: { to: e.popoverContainerId } }, [
                t(
                  "div",
                  {
                    staticClass: "uk-popover-contextual",
                    style: e.popoverStyle,
                    attrs: {
                      "uk-contextual-popover": "",
                      "data-target": `#${n.popoverId}`,
                      "data-toggle": `#${n.popoverId}`,
                      "data-sel-close": "[uk-menu] > li > button",
                    },
                  },
                  [
                    t(
                      "ul",
                      {
                        staticClass: "uk-overflow-auto",
                        attrs: { "uk-menu": "" },
                      },
                      e._l(e.items, function (i) {
                        return t("li", { key: i.value }, [
                          t(
                            "button",
                            {
                              class: {
                                "uk-checked":
                                  (n.selectedItem && n.selectedItem.value) ===
                                  i.value,
                              },
                              on: {
                                click: function (e) {
                                  return n.handleItemSelect(i.value);
                                },
                              },
                            },
                            [
                              i.label
                                ? t("span", [e._v(e._s(i.label))])
                                : e._e(),
                            ],
                          ),
                        ]);
                      }),
                      0,
                    ),
                  ],
                ),
              ]),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "7f2a00f4",
        null,
      ).exports;
    },
    80327: (e, t, n) => {
      var i = n(12083);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("c571df62", i, !0, {});
    },
    45346: (e, t, n) => {
      "use strict";
      function i(e, t) {
        for (var n = [], i = {}, a = 0; a < t.length; a++) {
          var r = t[a],
            o = r[0],
            s = { id: e + ":" + a, css: r[1], media: r[2], sourceMap: r[3] };
          i[o] ? i[o].parts.push(s) : n.push((i[o] = { id: o, parts: [s] }));
        }
        return n;
      }
      n.d(t, { Z: () => p });
      var a = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !a)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
        );
      var r = {},
        o = a && (document.head || document.getElementsByTagName("head")[0]),
        s = null,
        l = 0,
        u = !1,
        c = function () {},
        d = null,
        f = "data-vue-ssr-id",
        h =
          "undefined" != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function p(e, t, n, a) {
        (u = n), (d = a || {});
        var o = i(e, t);
        return (
          m(o),
          function (t) {
            for (var n = [], a = 0; a < o.length; a++) {
              var s = o[a];
              (l = r[s.id]).refs--, n.push(l);
            }
            t ? m((o = i(e, t))) : (o = []);
            for (a = 0; a < n.length; a++) {
              var l;
              if (0 === (l = n[a]).refs) {
                for (var u = 0; u < l.parts.length; u++) l.parts[u]();
                delete r[l.id];
              }
            }
          }
        );
      }
      function m(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
            i = r[n.id];
          if (i) {
            i.refs++;
            for (var a = 0; a < i.parts.length; a++) i.parts[a](n.parts[a]);
            for (; a < n.parts.length; a++) i.parts.push(g(n.parts[a]));
            i.parts.length > n.parts.length &&
              (i.parts.length = n.parts.length);
          } else {
            var o = [];
            for (a = 0; a < n.parts.length; a++) o.push(g(n.parts[a]));
            r[n.id] = { id: n.id, refs: 1, parts: o };
          }
        }
      }
      function b() {
        var e = document.createElement("style");
        return (e.type = "text/css"), o.appendChild(e), e;
      }
      function g(e) {
        var t,
          n,
          i = document.querySelector("style[" + f + '~="' + e.id + '"]');
        if (i) {
          if (u) return c;
          i.parentNode.removeChild(i);
        }
        if (h) {
          var a = l++;
          (i = s || (s = b())),
            (t = w.bind(null, i, a, !1)),
            (n = w.bind(null, i, a, !0));
        } else
          (i = b()),
            (t = x.bind(null, i)),
            (n = function () {
              i.parentNode.removeChild(i);
            });
        return (
          t(e),
          function (i) {
            if (i) {
              if (
                i.css === e.css &&
                i.media === e.media &&
                i.sourceMap === e.sourceMap
              )
                return;
              t((e = i));
            } else n();
          }
        );
      }
      var v,
        y =
          ((v = []),
          function (e, t) {
            return (v[e] = t), v.filter(Boolean).join("\n");
          });
      function w(e, t, n, i) {
        var a = n ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = y(t, a);
        else {
          var r = document.createTextNode(a),
            o = e.childNodes;
          o[t] && e.removeChild(o[t]),
            o.length ? e.insertBefore(r, o[t]) : e.appendChild(r);
        }
      }
      function x(e, t) {
        var n = t.css,
          i = t.media,
          a = t.sourceMap;
        if (
          (i && e.setAttribute("media", i),
          d.ssrId && e.setAttribute(f, t.id),
          a &&
            ((n += "\n/*# sourceURL=" + a.sources[0] + " */"),
            (n +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
              " */")),
          e.styleSheet)
        )
          e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
    },
    7836: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => p });
      var i = {
        name: "teleport",
        props: {
          to: { type: String, required: !0 },
          where: { type: String, default: "after" },
          disabled: Boolean,
        },
        data: function () {
          return { nodes: [], waiting: !1, observer: null, parent: null };
        },
        watch: {
          to: "maybeMove",
          where: "maybeMove",
          disabled: function (e) {
            e
              ? (this.disable(), this.teardownObserver())
              : (this.bootObserver(), this.move());
          },
        },
        mounted: function () {
          (this.nodes = Array.from(this.$el.childNodes)),
            this.disabled || this.bootObserver(),
            this.maybeMove();
        },
        beforeDestroy: function () {
          this.disable(), this.teardownObserver();
        },
        computed: {
          classes: function () {
            return this.disabled ? ["teleporter"] : ["teleporter", "hidden"];
          },
        },
        methods: {
          maybeMove: function () {
            this.disabled || this.move();
          },
          move: function () {
            if (
              ((this.waiting = !1),
              (this.parent = document.querySelector(this.to)),
              !this.parent)
            )
              return this.disable(), void (this.waiting = !0);
            "before" === this.where
              ? this.parent.prepend(this.getFragment())
              : this.parent.appendChild(this.getFragment());
          },
          disable: function () {
            this.$el.appendChild(this.getFragment()), (this.parent = null);
          },
          getFragment: function () {
            var e = document.createDocumentFragment();
            return (
              this.nodes.forEach(function (t) {
                return e.appendChild(t);
              }),
              e
            );
          },
          onMutations: function (e) {
            for (var t = this, n = !1, i = 0; i < e.length; i++) {
              var a = e[i],
                r = Array.from(a.addedNodes).filter(function (e) {
                  return !t.nodes.includes(e);
                });
              Array.from(a.removedNodes).includes(this.parent)
                ? (this.disable(), (this.waiting = !this.disabled))
                : this.waiting && r.length > 0 && (n = !0);
            }
            n && this.move();
          },
          bootObserver: function () {
            var e = this;
            this.observer ||
              ((this.observer = new MutationObserver(function (t) {
                return e.onMutations(t);
              })),
              this.observer.observe(document.body, {
                childList: !0,
                subtree: !0,
                attributes: !1,
                characterData: !1,
              }));
          },
          teardownObserver: function () {
            this.observer &&
              (this.observer.disconnect(), (this.observer = null));
          },
        },
      };
      function a(e, t, n, i, a, r, o, s, l, u) {
        "boolean" != typeof o && ((l = s), (s = o), (o = !1));
        var c,
          d = "function" == typeof n ? n.options : n;
        if (
          (e &&
            e.render &&
            ((d.render = e.render),
            (d.staticRenderFns = e.staticRenderFns),
            (d._compiled = !0),
            a && (d.functional = !0)),
          i && (d._scopeId = i),
          r
            ? ((c = function (e) {
                (e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  t && t.call(this, l(e)),
                  e &&
                    e._registeredComponents &&
                    e._registeredComponents.add(r);
              }),
              (d._ssrRegister = c))
            : t &&
              (c = o
                ? function (e) {
                    t.call(this, u(e, this.$root.$options.shadowRoot));
                  }
                : function (e) {
                    t.call(this, s(e));
                  }),
          c)
        )
          if (d.functional) {
            var f = d.render;
            d.render = function (e, t) {
              return c.call(t), f(e, t);
            };
          } else {
            var h = d.beforeCreate;
            d.beforeCreate = h ? [].concat(h, c) : [c];
          }
        return n;
      }
      var r,
        o =
          "undefined" != typeof navigator &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
      function s(e) {
        return function (e, t) {
          return (function (e, t) {
            var n = o ? t.media || "default" : e,
              i = l[n] || (l[n] = { ids: new Set(), styles: [] });
            if (!i.ids.has(e)) {
              i.ids.add(e);
              var a = t.source;
              if (
                (t.map &&
                  ((a += "\n/*# sourceURL=" + t.map.sources[0] + " */"),
                  (a +=
                    "\n/*# sourceMappingURL=data:application/json;base64," +
                    btoa(unescape(encodeURIComponent(JSON.stringify(t.map)))) +
                    " */")),
                i.element ||
                  ((i.element = document.createElement("style")),
                  (i.element.type = "text/css"),
                  t.media && i.element.setAttribute("media", t.media),
                  void 0 === r &&
                    (r =
                      document.head ||
                      document.getElementsByTagName("head")[0]),
                  r.appendChild(i.element)),
                "styleSheet" in i.element)
              )
                i.styles.push(a),
                  (i.element.styleSheet.cssText = i.styles
                    .filter(Boolean)
                    .join("\n"));
              else {
                var s = i.ids.size - 1,
                  u = document.createTextNode(a),
                  c = i.element.childNodes;
                c[s] && i.element.removeChild(c[s]),
                  c.length
                    ? i.element.insertBefore(u, c[s])
                    : i.element.appendChild(u);
              }
            }
          })(e, t);
        };
      }
      var l = {};
      var u = i,
        c = function () {
          var e = this,
            t = e.$createElement;
          return (e._self._c || t)(
            "div",
            { class: e.classes },
            [e._t("default")],
            2,
          );
        };
      c._withStripped = !0;
      var d = a(
        { render: c, staticRenderFns: [] },
        function (e) {
          e &&
            e("data-v-d4e6e290_0", {
              source:
                ".hidden[data-v-d4e6e290] {\n  visibility: hidden;\n  display: none;\n}\n\n/*# sourceMappingURL=Teleport.vue.map */",
              map: {
                version: 3,
                sources: [
                  "/Users/shodan/Projects/vue2-teleport/src/Teleport.vue",
                  "Teleport.vue",
                ],
                names: [],
                mappings: "AAuJA;EACA,kBAAA;EACA,aAAA;ACtJA;;AAEA,uCAAuC",
                file: "Teleport.vue",
                sourcesContent: [
                  "<template>\n  <div :class=\"classes\">\n    <slot/>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'teleport',\n  props: {\n    to: {\n      type: String,\n      required: true,\n    },\n    where: {\n      type: String,\n      default: 'after',\n    },\n    disabled: Boolean,\n  },\n  data() {\n    return {\n      nodes: [],\n      waiting: false,\n      observer: null,\n      parent: null,\n    };\n  },\n  watch: {\n    to: 'maybeMove',\n    where: 'maybeMove',\n    disabled(value) {\n      if (value) {\n        this.disable();\n        this.teardownObserver();\n      } else {\n        this.bootObserver();\n        this.move();\n      }\n    },\n  },\n  mounted() {\n    // Store a reference to the nodes\n    this.nodes = Array.from(this.$el.childNodes);\n\n    if (!this.disabled) {\n      this.bootObserver();\n    }\n\n    // Move slot content to target\n    this.maybeMove();\n  },\n  beforeDestroy() {\n    // Move back\n    this.disable();\n\n    // Stop observing\n    this.teardownObserver();\n  },\n  computed: {\n    classes() {\n      if (this.disabled) {\n        return ['teleporter'];\n      }\n\n      return ['teleporter', 'hidden'];\n    },\n  },\n  methods: {\n    maybeMove() {\n      if (!this.disabled) {\n        this.move();\n      }\n    },\n    move() {\n      this.waiting = false;\n\n      this.parent = document.querySelector(this.to);\n\n      if (!this.parent) {\n        this.disable();\n\n        this.waiting = true;\n\n        return;\n      }\n\n      if (this.where === 'before') {\n        this.parent.prepend(this.getFragment());\n      } else {\n        this.parent.appendChild(this.getFragment());\n      }\n    },\n    disable() {\n      this.$el.appendChild(this.getFragment());\n      this.parent = null;\n    },\n    // Using a fragment is faster because it'll trigger only a single reflow\n    // See https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment\n    getFragment() {\n      const fragment = document.createDocumentFragment();\n\n      this.nodes.forEach(node => fragment.appendChild(node));\n\n      return fragment;\n    },\n    onMutations(mutations) {\n      // Makes sure the move operation is only done once\n      let shouldMove = false;\n\n      for (let i = 0; i < mutations.length; i++) {\n        const mutation = mutations[i];\n        const filteredAddedNodes = Array.from(mutation.addedNodes).filter(node => !this.nodes.includes(node));\n\n        if (Array.from(mutation.removedNodes).includes(this.parent)) {\n          this.disable();\n          this.waiting = !this.disabled;\n        } else if (this.waiting && filteredAddedNodes.length > 0) {\n          shouldMove = true;\n        }\n      }\n\n      if (shouldMove) {\n        this.move();\n      }\n    },\n    bootObserver() {\n      if (this.observer) {\n        return;\n      }\n\n      this.observer = new MutationObserver(mutations => this.onMutations(mutations));\n\n      this.observer.observe(document.body, {\n        childList: true,\n        subtree: true,\n        attributes: false,\n        characterData: false,\n      });\n    },\n    teardownObserver() {\n      if (this.observer) {\n        this.observer.disconnect();\n        this.observer = null;\n      }\n    },\n  },\n};\n</script>\n\n<style scoped lang=\"scss\">\n.hidden {\n  visibility: hidden;\n  display: none;\n}\n</style>\n",
                  ".hidden {\n  visibility: hidden;\n  display: none;\n}\n\n/*# sourceMappingURL=Teleport.vue.map */",
                ],
              },
              media: void 0,
            });
        },
        u,
        "data-v-d4e6e290",
        false,
        undefined,
        !1,
        s,
        void 0,
        void 0,
      );
      var f = {
          install: function e(t) {
            e.installed || ((e.installed = !0), t.component("Teleport", d));
          },
        },
        h = null;
      "undefined" != typeof window
        ? (h = window.Vue)
        : "undefined" != typeof global && (h = global.Vue),
        h && h.use(f);
      const p = d;
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
    97234: (e, t, n) => {
      "use strict";
      function i(e) {
        return (
          (i =
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
          i(e)
        );
      }
      n.d(t, { Z: () => o });
      var a = /^\s+/,
        r = /\s+$/;
      function o(e, t) {
        if (((t = t || {}), (e = e || "") instanceof o)) return e;
        if (!(this instanceof o)) return new o(e, t);
        var n = (function (e) {
          var t = { r: 0, g: 0, b: 0 },
            n = 1,
            o = null,
            s = null,
            l = null,
            u = !1,
            c = !1;
          "string" == typeof e &&
            (e = (function (e) {
              e = e.replace(a, "").replace(r, "").toLowerCase();
              var t,
                n = !1;
              if (_[e]) (e = _[e]), (n = !0);
              else if ("transparent" == e)
                return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              if ((t = B.rgb.exec(e))) return { r: t[1], g: t[2], b: t[3] };
              if ((t = B.rgba.exec(e)))
                return { r: t[1], g: t[2], b: t[3], a: t[4] };
              if ((t = B.hsl.exec(e))) return { h: t[1], s: t[2], l: t[3] };
              if ((t = B.hsla.exec(e)))
                return { h: t[1], s: t[2], l: t[3], a: t[4] };
              if ((t = B.hsv.exec(e))) return { h: t[1], s: t[2], v: t[3] };
              if ((t = B.hsva.exec(e)))
                return { h: t[1], s: t[2], v: t[3], a: t[4] };
              if ((t = B.hex8.exec(e)))
                return {
                  r: T(t[1]),
                  g: T(t[2]),
                  b: T(t[3]),
                  a: R(t[4]),
                  format: n ? "name" : "hex8",
                };
              if ((t = B.hex6.exec(e)))
                return {
                  r: T(t[1]),
                  g: T(t[2]),
                  b: T(t[3]),
                  format: n ? "name" : "hex",
                };
              if ((t = B.hex4.exec(e)))
                return {
                  r: T(t[1] + "" + t[1]),
                  g: T(t[2] + "" + t[2]),
                  b: T(t[3] + "" + t[3]),
                  a: R(t[4] + "" + t[4]),
                  format: n ? "name" : "hex8",
                };
              if ((t = B.hex3.exec(e)))
                return {
                  r: T(t[1] + "" + t[1]),
                  g: T(t[2] + "" + t[2]),
                  b: T(t[3] + "" + t[3]),
                  format: n ? "name" : "hex",
                };
              return !1;
            })(e));
          "object" == i(e) &&
            (L(e.r) && L(e.g) && L(e.b)
              ? ((d = e.r),
                (f = e.g),
                (h = e.b),
                (t = {
                  r: 255 * M(d, 255),
                  g: 255 * M(f, 255),
                  b: 255 * M(h, 255),
                }),
                (u = !0),
                (c = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"))
              : L(e.h) && L(e.s) && L(e.v)
                ? ((o = I(e.s)),
                  (s = I(e.v)),
                  (t = (function (e, t, n) {
                    (e = 6 * M(e, 360)), (t = M(t, 100)), (n = M(n, 100));
                    var i = Math.floor(e),
                      a = e - i,
                      r = n * (1 - t),
                      o = n * (1 - a * t),
                      s = n * (1 - (1 - a) * t),
                      l = i % 6,
                      u = [n, o, r, r, s, n][l],
                      c = [s, n, n, o, r, r][l],
                      d = [r, r, s, n, n, o][l];
                    return { r: 255 * u, g: 255 * c, b: 255 * d };
                  })(e.h, o, s)),
                  (u = !0),
                  (c = "hsv"))
                : L(e.h) &&
                  L(e.s) &&
                  L(e.l) &&
                  ((o = I(e.s)),
                  (l = I(e.l)),
                  (t = (function (e, t, n) {
                    var i, a, r;
                    function o(e, t, n) {
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
                      ((e = M(e, 360)),
                      (t = M(t, 100)),
                      (n = M(n, 100)),
                      0 === t)
                    )
                      i = a = r = n;
                    else {
                      var s = n < 0.5 ? n * (1 + t) : n + t - n * t,
                        l = 2 * n - s;
                      (i = o(l, s, e + 1 / 3)),
                        (a = o(l, s, e)),
                        (r = o(l, s, e - 1 / 3));
                    }
                    return { r: 255 * i, g: 255 * a, b: 255 * r };
                  })(e.h, o, l)),
                  (u = !0),
                  (c = "hsl")),
            e.hasOwnProperty("a") && (n = e.a));
          var d, f, h;
          return (
            (n = S(n)),
            {
              ok: u,
              format: e.format || c,
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
      function s(e, t, n) {
        (e = M(e, 255)), (t = M(t, 255)), (n = M(n, 255));
        var i,
          a,
          r = Math.max(e, t, n),
          o = Math.min(e, t, n),
          s = (r + o) / 2;
        if (r == o) i = a = 0;
        else {
          var l = r - o;
          switch (((a = s > 0.5 ? l / (2 - r - o) : l / (r + o)), r)) {
            case e:
              i = (t - n) / l + (t < n ? 6 : 0);
              break;
            case t:
              i = (n - e) / l + 2;
              break;
            case n:
              i = (e - t) / l + 4;
          }
          i /= 6;
        }
        return { h: i, s: a, l: s };
      }
      function l(e, t, n) {
        (e = M(e, 255)), (t = M(t, 255)), (n = M(n, 255));
        var i,
          a,
          r = Math.max(e, t, n),
          o = Math.min(e, t, n),
          s = r,
          l = r - o;
        if (((a = 0 === r ? 0 : l / r), r == o)) i = 0;
        else {
          switch (r) {
            case e:
              i = (t - n) / l + (t < n ? 6 : 0);
              break;
            case t:
              i = (n - e) / l + 2;
              break;
            case n:
              i = (e - t) / l + 4;
          }
          i /= 6;
        }
        return { h: i, s: a, v: s };
      }
      function u(e, t, n, i) {
        var a = [
          O(Math.round(e).toString(16)),
          O(Math.round(t).toString(16)),
          O(Math.round(n).toString(16)),
        ];
        return i &&
          a[0].charAt(0) == a[0].charAt(1) &&
          a[1].charAt(0) == a[1].charAt(1) &&
          a[2].charAt(0) == a[2].charAt(1)
          ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0)
          : a.join("");
      }
      function c(e, t, n, i) {
        return [
          O(F(i)),
          O(Math.round(e).toString(16)),
          O(Math.round(t).toString(16)),
          O(Math.round(n).toString(16)),
        ].join("");
      }
      function d(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = o(e).toHsl();
        return (n.s -= t / 100), (n.s = C(n.s)), o(n);
      }
      function f(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = o(e).toHsl();
        return (n.s += t / 100), (n.s = C(n.s)), o(n);
      }
      function h(e) {
        return o(e).desaturate(100);
      }
      function p(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = o(e).toHsl();
        return (n.l += t / 100), (n.l = C(n.l)), o(n);
      }
      function m(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = o(e).toRgb();
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
          o(n)
        );
      }
      function b(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = o(e).toHsl();
        return (n.l -= t / 100), (n.l = C(n.l)), o(n);
      }
      function g(e, t) {
        var n = o(e).toHsl(),
          i = (n.h + t) % 360;
        return (n.h = i < 0 ? 360 + i : i), o(n);
      }
      function v(e) {
        var t = o(e).toHsl();
        return (t.h = (t.h + 180) % 360), o(t);
      }
      function y(e, t) {
        if (isNaN(t) || t <= 0)
          throw new Error("Argument to polyad must be a positive number");
        for (var n = o(e).toHsl(), i = [o(e)], a = 360 / t, r = 1; r < t; r++)
          i.push(o({ h: (n.h + r * a) % 360, s: n.s, l: n.l }));
        return i;
      }
      function w(e) {
        var t = o(e).toHsl(),
          n = t.h;
        return [
          o(e),
          o({ h: (n + 72) % 360, s: t.s, l: t.l }),
          o({ h: (n + 216) % 360, s: t.s, l: t.l }),
        ];
      }
      function x(e, t, n) {
        (t = t || 6), (n = n || 30);
        var i = o(e).toHsl(),
          a = 360 / n,
          r = [o(e)];
        for (i.h = (i.h - ((a * t) >> 1) + 720) % 360; --t; )
          (i.h = (i.h + a) % 360), r.push(o(i));
        return r;
      }
      function k(e, t) {
        t = t || 6;
        for (
          var n = o(e).toHsv(), i = n.h, a = n.s, r = n.v, s = [], l = 1 / t;
          t--;

        )
          s.push(o({ h: i, s: a, v: r })), (r = (r + l) % 1);
        return s;
      }
      (o.prototype = {
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
            i = this.toRgb();
          return (
            (e = i.r / 255),
            (t = i.g / 255),
            (n = i.b / 255),
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
            (this._a = S(e)),
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
            i = Math.round(100 * e.v);
          return 1 == this._a
            ? "hsv(" + t + ", " + n + "%, " + i + "%)"
            : "hsva(" + t + ", " + n + "%, " + i + "%, " + this._roundA + ")";
        },
        toHsl: function () {
          var e = s(this._r, this._g, this._b);
          return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
        },
        toHslString: function () {
          var e = s(this._r, this._g, this._b),
            t = Math.round(360 * e.h),
            n = Math.round(100 * e.s),
            i = Math.round(100 * e.l);
          return 1 == this._a
            ? "hsl(" + t + ", " + n + "%, " + i + "%)"
            : "hsla(" + t + ", " + n + "%, " + i + "%, " + this._roundA + ")";
        },
        toHex: function (e) {
          return u(this._r, this._g, this._b, e);
        },
        toHexString: function (e) {
          return "#" + this.toHex(e);
        },
        toHex8: function (e) {
          return (function (e, t, n, i, a) {
            var r = [
              O(Math.round(e).toString(16)),
              O(Math.round(t).toString(16)),
              O(Math.round(n).toString(16)),
              O(F(i)),
            ];
            if (
              a &&
              r[0].charAt(0) == r[0].charAt(1) &&
              r[1].charAt(0) == r[1].charAt(1) &&
              r[2].charAt(0) == r[2].charAt(1) &&
              r[3].charAt(0) == r[3].charAt(1)
            )
              return (
                r[0].charAt(0) +
                r[1].charAt(0) +
                r[2].charAt(0) +
                r[3].charAt(0)
              );
            return r.join("");
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
            r: Math.round(100 * M(this._r, 255)) + "%",
            g: Math.round(100 * M(this._g, 255)) + "%",
            b: Math.round(100 * M(this._b, 255)) + "%",
            a: this._a,
          };
        },
        toPercentageRgbString: function () {
          return 1 == this._a
            ? "rgb(" +
                Math.round(100 * M(this._r, 255)) +
                "%, " +
                Math.round(100 * M(this._g, 255)) +
                "%, " +
                Math.round(100 * M(this._b, 255)) +
                "%)"
            : "rgba(" +
                Math.round(100 * M(this._r, 255)) +
                "%, " +
                Math.round(100 * M(this._g, 255)) +
                "%, " +
                Math.round(100 * M(this._b, 255)) +
                "%, " +
                this._roundA +
                ")";
        },
        toName: function () {
          return 0 === this._a
            ? "transparent"
            : !(this._a < 1) && (A[u(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (e) {
          var t = "#" + c(this._r, this._g, this._b, this._a),
            n = t,
            i = this._gradientType ? "GradientType = 1, " : "";
          if (e) {
            var a = o(e);
            n = "#" + c(a._r, a._g, a._b, a._a);
          }
          return (
            "progid:DXImageTransform.Microsoft.gradient(" +
            i +
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
            i = this._a < 1 && this._a >= 0;
          return t ||
            !i ||
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
          return o(this.toString());
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
          return this._applyModification(p, arguments);
        },
        brighten: function () {
          return this._applyModification(m, arguments);
        },
        darken: function () {
          return this._applyModification(b, arguments);
        },
        desaturate: function () {
          return this._applyModification(d, arguments);
        },
        saturate: function () {
          return this._applyModification(f, arguments);
        },
        greyscale: function () {
          return this._applyModification(h, arguments);
        },
        spin: function () {
          return this._applyModification(g, arguments);
        },
        _applyCombination: function (e, t) {
          return e.apply(null, [this].concat([].slice.call(t)));
        },
        analogous: function () {
          return this._applyCombination(x, arguments);
        },
        complement: function () {
          return this._applyCombination(v, arguments);
        },
        monochromatic: function () {
          return this._applyCombination(k, arguments);
        },
        splitcomplement: function () {
          return this._applyCombination(w, arguments);
        },
        triad: function () {
          return this._applyCombination(y, [3]);
        },
        tetrad: function () {
          return this._applyCombination(y, [4]);
        },
      }),
        (o.fromRatio = function (e, t) {
          if ("object" == i(e)) {
            var n = {};
            for (var a in e)
              e.hasOwnProperty(a) && (n[a] = "a" === a ? e[a] : I(e[a]));
            e = n;
          }
          return o(e, t);
        }),
        (o.equals = function (e, t) {
          return !(!e || !t) && o(e).toRgbString() == o(t).toRgbString();
        }),
        (o.random = function () {
          return o.fromRatio({
            r: Math.random(),
            g: Math.random(),
            b: Math.random(),
          });
        }),
        (o.mix = function (e, t, n) {
          n = 0 === n ? 0 : n || 50;
          var i = o(e).toRgb(),
            a = o(t).toRgb(),
            r = n / 100;
          return o({
            r: (a.r - i.r) * r + i.r,
            g: (a.g - i.g) * r + i.g,
            b: (a.b - i.b) * r + i.b,
            a: (a.a - i.a) * r + i.a,
          });
        }),
        (o.readability = function (e, t) {
          var n = o(e),
            i = o(t);
          return (
            (Math.max(n.getLuminance(), i.getLuminance()) + 0.05) /
            (Math.min(n.getLuminance(), i.getLuminance()) + 0.05)
          );
        }),
        (o.isReadable = function (e, t, n) {
          var i,
            a,
            r = o.readability(e, t);
          switch (
            ((a = !1),
            (i = (function (e) {
              var t, n;
              (t = (
                (e = e || { level: "AA", size: "small" }).level || "AA"
              ).toUpperCase()),
                (n = (e.size || "small").toLowerCase()),
                "AA" !== t && "AAA" !== t && (t = "AA");
              "small" !== n && "large" !== n && (n = "small");
              return { level: t, size: n };
            })(n)).level + i.size)
          ) {
            case "AAsmall":
            case "AAAlarge":
              a = r >= 4.5;
              break;
            case "AAlarge":
              a = r >= 3;
              break;
            case "AAAsmall":
              a = r >= 7;
          }
          return a;
        }),
        (o.mostReadable = function (e, t, n) {
          var i,
            a,
            r,
            s,
            l = null,
            u = 0;
          (a = (n = n || {}).includeFallbackColors),
            (r = n.level),
            (s = n.size);
          for (var c = 0; c < t.length; c++)
            (i = o.readability(e, t[c])) > u && ((u = i), (l = o(t[c])));
          return o.isReadable(e, l, { level: r, size: s }) || !a
            ? l
            : ((n.includeFallbackColors = !1),
              o.mostReadable(e, ["#fff", "#000"], n));
        });
      var _ = (o.names = {
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
        A = (o.hexNames = (function (e) {
          var t = {};
          for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
          return t;
        })(_));
      function S(e) {
        return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
      }
      function M(e, t) {
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
      function C(e) {
        return Math.min(1, Math.max(0, e));
      }
      function T(e) {
        return parseInt(e, 16);
      }
      function O(e) {
        return 1 == e.length ? "0" + e : "" + e;
      }
      function I(e) {
        return e <= 1 && (e = 100 * e + "%"), e;
      }
      function F(e) {
        return Math.round(255 * parseFloat(e)).toString(16);
      }
      function R(e) {
        return T(e) / 255;
      }
      var E,
        N,
        D,
        B =
          ((N =
            "[\\s|\\(]+(" +
            (E = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") +
            ")[,|\\s]+(" +
            E +
            ")[,|\\s]+(" +
            E +
            ")\\s*\\)?"),
          (D =
            "[\\s|\\(]+(" +
            E +
            ")[,|\\s]+(" +
            E +
            ")[,|\\s]+(" +
            E +
            ")[,|\\s]+(" +
            E +
            ")\\s*\\)?"),
          {
            CSS_UNIT: new RegExp(E),
            rgb: new RegExp("rgb" + N),
            rgba: new RegExp("rgba" + D),
            hsl: new RegExp("hsl" + N),
            hsla: new RegExp("hsla" + D),
            hsv: new RegExp("hsv" + N),
            hsva: new RegExp("hsva" + D),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          });
      function L(e) {
        return !!B.CSS_UNIT.exec(e);
      }
    },
  },
  (e) => {
    e.O(0, [2768, 1248, 1505], () => {
      return (t = 35917), e((e.s = t));
      var t;
    });
    var t = e.O();
    module.exports = t;
  },
]);
