(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [4470],
  {
    16326: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => i });
      var r = a(23645),
        n = a.n(r)()(function (e) {
          return e[1];
        });
      n.push([
        e.id,
        ".tab-bar-item[data-v-6223eb10] {\n  cursor: default;\n  height: 28px;\n  line-height: 28px;\n}\n.tab-bar-item-title[data-v-6223eb10] {\n  font-weight: normal;\n}\n.tab-bar-item-close-btn[data-v-6223eb10] {\n  position: absolute;\n  right: 4px;\n  top: 6px;\n}\n.add-new-editor-view-btn[data-v-6223eb10] {\n  width: 28px;\n  height: 28px;\n}\n",
        "",
      ]);
      const i = n;
    },
    23645: (e) => {
      "use strict";
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var a = e(t);
              return t[2] ? "@media ".concat(t[2], " {").concat(a, "}") : a;
            }).join("");
          }),
          (t.i = function (e, a, r) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var n = {};
            if (r)
              for (var i = 0; i < this.length; i++) {
                var o = this[i][0];
                null != o && (n[o] = !0);
              }
            for (var l = 0; l < e.length; l++) {
              var s = [].concat(e[l]);
              (r && n[s[0]]) ||
                (a &&
                  (s[2]
                    ? (s[2] = "".concat(a, " and ").concat(s[2]))
                    : (s[2] = a)),
                t.push(s));
            }
          }),
          t
        );
      };
    },
    77242: (e, t, a) => {
      "use strict";
      a.d(t, { I: () => o, k: () => i });
      var r = a(67657);
      const { Menu: n } = r,
        i = (e, t = {}) => {
          if (!e || !e.length) return;
          const a = n.buildFromTemplate(e);
          return a.popup(Object.assign({ window: r.getCurrentWindow() }, t)), a;
        },
        o = () => {
          const e = n.getApplicationMenu();
          return (e && e.items) || [];
        };
    },
    74470: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => f });
      var r = a(2954),
        n = a(54856),
        i = a(90435),
        o = a(95246),
        l = a(77242),
        s = a(50965),
        d = a(91324),
        u = function (e, t, a, r) {
          return new (a || (a = Promise))(function (n, i) {
            function o(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function l(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof a
                    ? t
                    : new a(function (e) {
                        e(t);
                      })).then(o, l);
            }
            s((r = r.apply(e, t || [])).next());
          });
        };
      const c = (0, r.aZ)({
        __name: "index",
        props: {
          frameId: null,
          activeEditorId: null,
          scrollLeft: null,
          editorViewInfos: null,
        },
        emits: ["scroll"],
        setup(e, { emit: t }) {
          const a = e,
            c = {
              inserted: (e) => {
                setTimeout(() => {
                  var t;
                  if (!w.value) return;
                  if (!(e.dataset.id === window.editorId)) return;
                  if (!(window.editorId === a.activeEditorId)) return;
                  const { scrollLeft: r, offsetWidth: n } = w.value;
                  e.offsetLeft - r < n ||
                    null === (t = w.value) ||
                    void 0 === t ||
                    t.scroll({ left: e.offsetLeft + e.offsetWidth - n });
                }, 200);
              },
            },
            f = (0, r.iH)(null),
            v = (0, r.iH)(!1),
            p = (0, r.iH)(null),
            b = (0, r.iH)(!1),
            g = (0, r.iH)(!0),
            h = (0, r.iH)(!1),
            m = (0, r.iH)(null),
            k = (0, r.iH)(null),
            w = (0, r.iH)(null);
          let x = null;
          const L = (0, r.Fl)(() => (v.value && f.value) || a.editorViewInfos),
            y = (e, ...t) => (0, s.JE)().T(e, ...t),
            E = (0, d.P2)(() => {
              (0, r.Y3)(() => {
                w.value &&
                  (C(),
                  (g.value = 0 === w.value.scrollLeft),
                  (h.value =
                    w.value.scrollLeft + w.value.offsetWidth >=
                    w.value.scrollWidth));
              });
            }, 100),
            C = (0, d.Ds)(() => {
              var e;
              t(
                "scroll",
                null === (e = w.value) || void 0 === e ? void 0 : e.scrollLeft,
              );
            }, 200),
            T = (e) => {
              if (!e) return;
              const t = m.value,
                a = w.value,
                r = t.find((t) => t.dataset.id === e);
              r.offsetLeft < a.scrollLeft
                ? (a.scrollLeft = r.offsetLeft)
                : r.offsetLeft + r.offsetWidth > a.scrollLeft + a.offsetWidth &&
                  (a.scrollLeft = a.scrollLeft + r.offsetWidth);
            },
            I = (0, d.P2)(() => {
              const e = w.value;
              if (!e) return !1;
              b.value = e.scrollWidth > e.offsetWidth;
            }, 100);
          return (
            (0, r.ic)(() => {
              (0, r.Y3)(I);
            }),
            (0, r.bv)(() => {
              (x = new ResizeObserver(I)),
                x.observe(k.value),
                (0, r.Y3)(I),
                (0, r.YP)(
                  () => a.scrollLeft,
                  (e) => {
                    window.isEditorFrame ||
                      (w.value &&
                        b.value &&
                        e !== w.value.scrollLeft &&
                        w.value.scroll({ left: e, behavior: "instant" }));
                  },
                );
            }),
            (0, r.wF)(() => {
              x && x.disconnect();
            }),
            {
              __sfc: !0,
              vScroll: c,
              props: a,
              emits: t,
              editorViewsForDragging: f,
              isDropArea: v,
              draggingEditorView: p,
              isOverflow: b,
              swapLeftDisable: g,
              swapRightDisable: h,
              tabLiElements: m,
              tabbar: k,
              tabUlElement: w,
              observer: x,
              displayEditorViews: L,
              $T: y,
              showEditorView: (e) => {
                i.ZP.fetch(n.ZW, { frameId: a.frameId, editorId: e });
              },
              addNewEditorView: () => {
                i.ZP.fetch(n.NF, { frameId: a.frameId });
              },
              closeEditorView: (e) => {
                i.ZP.fetch(n.s2, { editors: [e] });
              },
              toggleTabBarMenu: (e) => {
                const t = [
                  {
                    label: y("Close Tab"),
                    click: () => {
                      i.ZP.fetch(n.s2, { editors: [e] });
                    },
                  },
                  {
                    label: y("Close Other Tab"),
                    click: () =>
                      u(this, void 0, void 0, function* () {
                        const t = a.editorViewInfos
                          .filter((t) => t.id !== e)
                          .map((e) => e.id);
                        yield i.ZP.fetch(n.s2, { editors: t });
                      }),
                  },
                  {
                    label: y("Move Tab to New Window"),
                    click() {
                      i.ZP.fetch(n.rM, { editorId: e });
                    },
                  },
                ];
                (0, l.k)(t);
              },
              onDragStart: (e, t) => {
                (e.dataTransfer.effectAllowed = "all"),
                  e.dataTransfer.setData(
                    "text/x-editor-info",
                    JSON.stringify({ frameId: a.frameId, editorId: t.id }),
                  ),
                  (p.value = t);
              },
              onDragEnd: () => {
                p.value = null;
              },
              onDragEnter: (e) => {
                -1 !== e.dataTransfer.types.indexOf("text/x-editor-info") &&
                  (e.preventDefault(), (e.dataTransfer.dropEffect = "move"));
              },
              onDragOver: (e) => {
                if (-1 === e.dataTransfer.types.indexOf("text/x-editor-info"))
                  return;
                e.preventDefault(),
                  (e.dataTransfer.dropEffect = "move"),
                  (v.value = !0);
                const t = m.value
                  .slice()
                  .sort(
                    (e, t) => Number(e.dataset.index) - Number(t.dataset.index),
                  );
                let r;
                for (r = 0; r < t.length; r++) {
                  let a = -1 / 0;
                  if (t[r - 1]) {
                    const e = t[r - 1].getBoundingClientRect();
                    a = (e.right + e.left) / 2;
                  }
                  let n = 1 / 0;
                  if (t[r]) {
                    const e = t[r].getBoundingClientRect();
                    n = (e.right + e.left) / 2;
                  }
                  if (e.clientX > a && e.clientX < n) break;
                }
                const n = a.editorViewInfos.filter(
                  ({ id: e }) => e !== p.value.id,
                );
                n.splice(r, 0, p.value), (f.value = n);
              },
              onDrop: (e) => {
                let t = e.dataTransfer.getData("text/x-editor-info");
                try {
                  t = JSON.parse(t);
                } catch (e) {
                  t = null;
                }
                if (t && (e.preventDefault(), (v.value = !1), p.value)) {
                  const e = f.value.slice().map((e) => e.id);
                  i.ZP.fetch(n.AM, { frameId: a.frameId, newEditorIds: e });
                }
              },
              onDragLeave: (e) => {
                if (-1 !== e.dataTransfer.types.indexOf("text/x-editor-info")) {
                  const t = document.elementFromPoint(e.clientX, e.clientY);
                  k.value.contains(t) || (v.value = !1);
                }
              },
              onTabScroll: E,
              debounceEmitScroll: C,
              swapLeft: () => {
                const e = m.value
                  .slice()
                  .sort(
                    (e, t) => Number(t.dataset.index) - Number(e.dataset.index),
                  );
                for (const t of e)
                  if (t.offsetLeft < w.value.scrollLeft)
                    return void T(t.dataset.id);
              },
              swapRight: () => {
                const e = m.value
                    .slice()
                    .sort(
                      (e, t) =>
                        Number(e.dataset.index) - Number(t.dataset.index),
                    ),
                  t = w.value.scrollLeft + w.value.offsetWidth;
                for (const a of e)
                  if (a.offsetLeft + a.offsetWidth >= t)
                    return void T(a.dataset.id);
              },
              showItemInScrollView: T,
              calcIsOverflow: I,
              wrappedTooltipWithKeybinding: o.RL,
            }
          );
        },
      });
      a(21959);
      const f = (0, a(51900).Z)(
        c,
        function () {
          var e = this,
            t = e._self._c,
            a = e._self._setupProxy;
          return t(
            "div",
            {
              ref: "tabbar",
              staticClass:
                "uk-workbench-tab-bar uk-flex uk-flex-middle uk-child-separator uk-separator-vertical uk-position-relative",
              on: {
                dragenter: a.onDragEnter,
                dragover: a.onDragOver,
                drop: a.onDrop,
                dragleave: a.onDragLeave,
              },
            },
            [
              t(
                "ul",
                {
                  ref: "tabUlElement",
                  staticClass:
                    "uk-background-default uk-child-separator uk-separator-vertical uk-tab-contained uk-overflow-auto uk-scrollbar-hidden uk-flex-nowrap uk-flex-between uk-text-center uk-width-expand",
                  attrs: { "uk-tab": "" },
                  on: { scroll: a.onTabScroll },
                },
                [
                  e._l(a.displayEditorViews, function (r, n) {
                    return [
                      t(
                        "li",
                        {
                          directives: [{ name: "scroll", rawName: "v-scroll" }],
                          key: r.id,
                          ref: "tabLiElements",
                          refInFor: !0,
                          class: { "uk-active": r.id === e.activeEditorId },
                          staticStyle: { flex: "1 0 auto" },
                          attrs: {
                            draggable: "true",
                            "data-index": n,
                            "data-id": r.id,
                          },
                          on: {
                            click: function (e) {
                              return a.showEditorView(r.id);
                            },
                            contextmenu: function (e) {
                              return a.toggleTabBarMenu(r.id);
                            },
                            dragstart: function (e) {
                              return a.onDragStart(e, r);
                            },
                            dragend: a.onDragEnd,
                          },
                        },
                        [
                          t(
                            "a",
                            {
                              staticClass:
                                "uk-padding-remove uk-margin-remove uk-visible-toggle uk-position-relative tab-bar-item",
                              attrs: { draggable: "false" },
                            },
                            [
                              t(
                                "span",
                                {
                                  staticClass:
                                    "uk-padding-medium uk-padding-remove-vertical tab-bar-item-title",
                                  attrs: {
                                    title: r.title || a.$T("Untitled"),
                                    "data-is-title-container": "",
                                  },
                                },
                                [
                                  e._v(
                                    "\n            " +
                                      e._s(r.title || a.$T("Untitled")) +
                                      "\n          ",
                                  ),
                                ],
                              ),
                              e._v(" "),
                              t("div", {
                                staticClass:
                                  "uk-margin-remove uk-padding-remove uk-invisible-hover tab-bar-item-close-btn",
                                attrs: { "uk-icon": "close" },
                                on: {
                                  click: function (e) {
                                    return (
                                      e.stopPropagation(),
                                      a.closeEditorView(r.id)
                                    );
                                  },
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                    ];
                  }),
                ],
                2,
              ),
              e._v(" "),
              a.isOverflow
                ? t(
                    "div",
                    {
                      staticClass:
                        "uk-flex uk-flex-row uk-flex-middle uk-background-default",
                    },
                    [
                      t(
                        "div",
                        { staticClass: "uk-padding-remove uk-margin-remove" },
                        [
                          t("button", {
                            staticClass:
                              "uk-button uk-button-tile uk-button-icon uk-padding-xsmall uk-padding-remove-vertical",
                            class: [{ "uk-disabled": a.swapLeftDisable }],
                            attrs: {
                              disabled: a.swapLeftDisable,
                              "uk-icon": "previous",
                            },
                            on: { click: a.swapLeft },
                          }),
                        ],
                      ),
                      e._v(" "),
                      t(
                        "div",
                        { staticClass: "uk-padding-remove uk-margin-remove" },
                        [
                          t("button", {
                            staticClass:
                              "uk-button uk-button-tile uk-button-icon uk-padding-xsmall uk-padding-remove-vertical",
                            class: [{ "uk-disabled": a.swapRightDisable }],
                            attrs: {
                              disabled: a.swapRightDisable,
                              "uk-icon": "next",
                            },
                            on: { click: a.swapRight },
                          }),
                        ],
                      ),
                    ],
                  )
                : e._e(),
              e._v(" "),
              t("div", { staticClass: "uk-padding-remove uk-margin-remove" }, [
                t("button", {
                  staticClass:
                    "uk-button uk-button-tile uk-button-icon uk-border-none add-new-editor-view-btn",
                  attrs: {
                    "uk-icon": "add",
                    title: a.wrappedTooltipWithKeybinding(
                      a.$T("Add a new tab."),
                      "frame.addNewTab",
                    ),
                  },
                  on: { click: a.addNewEditorView },
                }),
              ]),
            ],
          );
        },
        [],
        !1,
        null,
        "6223eb10",
        null,
      ).exports;
    },
    21959: (e, t, a) => {
      var r = a(16326);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.id, r, ""]]),
        r.locals && (e.exports = r.locals);
      (0, a(45346).Z)("64663c4c", r, !0, {});
    },
    45346: (e, t, a) => {
      "use strict";
      function r(e, t) {
        for (var a = [], r = {}, n = 0; n < t.length; n++) {
          var i = t[n],
            o = i[0],
            l = { id: e + ":" + n, css: i[1], media: i[2], sourceMap: i[3] };
          r[o] ? r[o].parts.push(l) : a.push((r[o] = { id: o, parts: [l] }));
        }
        return a;
      }
      a.d(t, { Z: () => p });
      var n = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !n)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
        );
      var i = {},
        o = n && (document.head || document.getElementsByTagName("head")[0]),
        l = null,
        s = 0,
        d = !1,
        u = function () {},
        c = null,
        f = "data-vue-ssr-id",
        v =
          "undefined" != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function p(e, t, a, n) {
        (d = a), (c = n || {});
        var o = r(e, t);
        return (
          b(o),
          function (t) {
            for (var a = [], n = 0; n < o.length; n++) {
              var l = o[n];
              (s = i[l.id]).refs--, a.push(s);
            }
            t ? b((o = r(e, t))) : (o = []);
            for (n = 0; n < a.length; n++) {
              var s;
              if (0 === (s = a[n]).refs) {
                for (var d = 0; d < s.parts.length; d++) s.parts[d]();
                delete i[s.id];
              }
            }
          }
        );
      }
      function b(e) {
        for (var t = 0; t < e.length; t++) {
          var a = e[t],
            r = i[a.id];
          if (r) {
            r.refs++;
            for (var n = 0; n < r.parts.length; n++) r.parts[n](a.parts[n]);
            for (; n < a.parts.length; n++) r.parts.push(h(a.parts[n]));
            r.parts.length > a.parts.length &&
              (r.parts.length = a.parts.length);
          } else {
            var o = [];
            for (n = 0; n < a.parts.length; n++) o.push(h(a.parts[n]));
            i[a.id] = { id: a.id, refs: 1, parts: o };
          }
        }
      }
      function g() {
        var e = document.createElement("style");
        return (e.type = "text/css"), o.appendChild(e), e;
      }
      function h(e) {
        var t,
          a,
          r = document.querySelector("style[" + f + '~="' + e.id + '"]');
        if (r) {
          if (d) return u;
          r.parentNode.removeChild(r);
        }
        if (v) {
          var n = s++;
          (r = l || (l = g())),
            (t = w.bind(null, r, n, !1)),
            (a = w.bind(null, r, n, !0));
        } else
          (r = g()),
            (t = x.bind(null, r)),
            (a = function () {
              r.parentNode.removeChild(r);
            });
        return (
          t(e),
          function (r) {
            if (r) {
              if (
                r.css === e.css &&
                r.media === e.media &&
                r.sourceMap === e.sourceMap
              )
                return;
              t((e = r));
            } else a();
          }
        );
      }
      var m,
        k =
          ((m = []),
          function (e, t) {
            return (m[e] = t), m.filter(Boolean).join("\n");
          });
      function w(e, t, a, r) {
        var n = a ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = k(t, n);
        else {
          var i = document.createTextNode(n),
            o = e.childNodes;
          o[t] && e.removeChild(o[t]),
            o.length ? e.insertBefore(i, o[t]) : e.appendChild(i);
        }
      }
      function x(e, t) {
        var a = t.css,
          r = t.media,
          n = t.sourceMap;
        if (
          (r && e.setAttribute("media", r),
          c.ssrId && e.setAttribute(f, t.id),
          n &&
            ((a += "\n/*# sourceURL=" + n.sources[0] + " */"),
            (a +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
              " */")),
          e.styleSheet)
        )
          e.styleSheet.cssText = a;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(a));
        }
      }
    },
  },
]);
