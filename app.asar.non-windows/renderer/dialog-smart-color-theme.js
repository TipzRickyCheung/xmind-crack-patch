(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [5053],
  {
    55895: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => o });
      var i = n(23645),
        a = n.n(i)()(function (e) {
          return e[1];
        });
      a.push([
        e.id,
        ".window-padding[data-v-5d3e3d21] {\n  padding: 11px 24px 0px 24px;\n}\n.footer-wrap[data-v-5d3e3d21] {\n  height: 73px;\n}\n.custom-theme-preview-panel[data-v-5d3e3d21] {\n  background: var(--uk-form-fieldset-background, rgba(0, 0, 0, 0.03));\n  height: 251px;\n  border-radius: 8px;\n}\n.loading-icon[data-v-5d3e3d21] {\n  margin-right: 12px;\n}\n.loading-icon[data-v-5d3e3d21]::before {\n  animation: 1.5s linear infinite spinner-5d3e3d21;\n  animation-play-state: inherit;\n  border: 1.5px solid rgba(0, 0, 0, 0.3);\n  border-bottom-color: #ffffff;\n  border-radius: 8px;\n  content: '';\n  height: 10px;\n  width: 10px;\n  position: absolute;\n  transform: translate3d(-50%, -50%, 0);\n  will-change: transform;\n}\n@keyframes spinner-5d3e3d21 {\n0% {\n    transform: translate3d(-50%, -50%, 0) rotate(0deg);\n}\n100% {\n    transform: translate3d(-50%, -50%, 0) rotate(360deg);\n}\n}\n.preview-wrap[data-v-5d3e3d21] {\n  display: inherit;\n  position: absolute;\n  align-items: center;\n}\n.preview-img-item[data-v-5d3e3d21] {\n  min-width: calc((100% - 56px) / 2);\n  max-width: calc((100% - 56px) / 2);\n  height: 131.61px;\n  border-radius: 7.31px;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08), 0px 1px 4px rgba(0, 0, 0, 0.03);\n  background-repeat: round;\n  flex: 1;\n}\n.preview-img-item[data-v-5d3e3d21]:nth-of-type(odd) {\n  margin: 16px 8px 0px 20px;\n}\n.preview-img-item[data-v-5d3e3d21]:nth-of-type(even) {\n  margin: 16px 20px 0px 8px;\n}\n",
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
              var n = e(t);
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
            }).join("");
          }),
          (t.i = function (e, n, i) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var a = {};
            if (i)
              for (var o = 0; o < this.length; o++) {
                var r = this[o][0];
                null != r && (a[r] = !0);
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
    15478: (e, t, n) => {
      "use strict";
      n.r(t);
      var i = n(51505),
        a = n(2954),
        o = n(50965),
        r = n(69931),
        s = n(29776),
        l = n(94593),
        c = n(16704),
        u = n(63477),
        d = n.n(u),
        f = n(90435),
        m = n(54856),
        p = n(13382),
        h = n(52688),
        v = function (e, t, n, i) {
          return new (n || (n = Promise))(function (a, o) {
            function r(e) {
              try {
                l(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                l(i.throw(e));
              } catch (e) {
                o(e);
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
                      })).then(r, s);
            }
            l((i = i.apply(e, t || [])).next());
          });
        };
      const g = d().parse(window.location.search.slice(1)),
        w = (0, a.aZ)({
          components: { colorbox: () => n.e(7739).then(n.bind(n, 7739)) },
          setup() {
            (0, s.gA)();
            const e = (0, o.JE)().T,
              t = (0, r.ju)(
                "static/images/dialog-smart-color-theme/smart-color-theme-preview-icon.svg",
              ),
              n = (0, a.iH)(new Map()),
              i = (0, a.iH)(t),
              u = (0, a.iH)(1),
              d = (0, a.iH)(0),
              w = (0, a.iH)([]),
              y = (0, a.iH)(!1),
              x = (0, a.iH)(h.q.new),
              C = (0, a.iH)([]),
              b = (0, a.iH)({}),
              k = (0, a.iH)("#CAD7FD"),
              { themeId: S } = g;
            (0, a.wF)(() => {
              if (
                ((0, o.fl)().changeSmartColorThemeEditingStatus({
                  isSmartColorThemeEditing: !0,
                }),
                f.ZP.fetch(m.Pp, {
                  mutations: [
                    {
                      id: "theme",
                      type: "changeSmartColorThemeEditingStatus",
                      payload: [{ isSmartColorThemeEditing: !0 }],
                    },
                  ],
                }),
                S)
              ) {
                (x.value = h.q.edit), (y.value = !0);
                const e = (0, s.CC)(S);
                b.value = e;
                const {
                  themeName: t,
                  colorList: i,
                  colorThemeList: a,
                  idList: o,
                } = e;
                (C.value = a),
                  (w.value = o
                    .map((e) => a.find((t) => t.id === e))
                    .map((e) => (0, s.jS)(e))),
                  (_.value = t);
                const r = new Map();
                i.forEach((e, t) => r.set(t, e)),
                  (n.value = r),
                  (y.value = !1),
                  (u.value = 7);
              }
            }),
              (0, a.Jd)(() => {
                D && (D(), (D = null)),
                  f.ZP.fetch(m.Pp, {
                    mutations: [
                      {
                        id: "theme",
                        type: "changeSmartColorThemeEditingStatus",
                        payload: [{ isSmartColorThemeEditing: !1 }],
                      },
                    ],
                  });
              });
            const O = (0, a.Fl)(() =>
                (0, o.fl)()
                  .smartColorThemes.map((e) => e.name)
                  .filter(
                    (t) => t === e("Custom") || t.startsWith(e("Custom") + " "),
                  ),
              ),
              T = (0, a.Fl)(() => {
                const t = O.value.map((t) => t.replace(e("Custom"), "").trim());
                let n = 0;
                return (
                  t.length > 0 &&
                    t.forEach((e) => {
                      const t = e && e.match(/\d+$/g);
                      t && t.length > 0 && (n = Math.max(Number(t[0]), n));
                    }),
                  n
                );
              }),
              _ = (0, a.iH)(
                e("Custom") +
                  (0 !== O.value.length
                    ? ` ${T.value + 1}`
                    : 0 === T.value
                      ? ""
                      : ` ${T.value + 1}`),
              ),
              E = (0, a.Fl)(() => u.value > 6 && _.value.trim()),
              A = (0, a.Fl)(() => 0 === w.value.length),
              I = (0, a.Fl)(() => (0, o.Yh)().isStatusValid),
              L = (0, a.Fl)(() =>
                A.value
                  ? "justify-content: center; overflow-y: hidden;"
                  : w.value.length > 2
                    ? "display: inline-block; padding-bottom: 16px; overflow-y: scroll;"
                    : "overflow-y: hidden;",
              ),
              P = (0, a.Fl)(() => {
                switch (x.value) {
                  case h.q.new:
                    return e("Create New Color Theme");
                  case h.q.edit:
                    return e("Edit Color Theme");
                }
              }),
              N = (0, a.Fl)(() => {
                switch (x.value) {
                  case h.q.new:
                    return e(
                      "Choose 6 colors to generate your own color theme.",
                    );
                  case h.q.edit:
                    return e("Change colors to modify the color theme.");
                }
              }),
              F = (e) => I.value && u.value === e,
              Z = (e) => !I.value && 1 === e,
              B = (0, a.Fl)(
                () => (e) => (n.value.has(e) ? n.value.get(e) : null),
              ),
              M = () => {
                w.value.length > 0 && (w.value.length = 0),
                  (y.value = !0),
                  $(),
                  (y.value = !1);
              },
              R = (e) =>
                v(this, void 0, void 0, function* () {
                  (b.value.themeName = _.value),
                    yield l.Z.writeFile(e, JSON.stringify(b.value));
                });
            let D = f.ZP.route(m.Bh, () => {
              (0, p.N0)({
                type: "info",
                title: "Warning",
                message: e(
                  "You are trying to edit another color theme, please save the current color theme first.",
                ),
                buttons: [e("OK")],
                defaultId: 0,
              });
            });
            const $ = () => {
              const e = {
                themeName: _.value,
                colorList: Array.from(n.value.values()),
              };
              (b.value = (0, s.Ho)([e])[0]),
                (w.value = b.value.idList
                  .map((e) => b.value.colorThemeList.find((t) => t.id === e))
                  .map((e) => (0, s.jS)(e)));
            };
            return {
              THEME_COLOR_NUM: 6,
              nameInput: _,
              previewIcon: i,
              selectableIndex: u,
              previewImages: w,
              saveEnabled: E,
              getMainTitle: P,
              getSubTitle: N,
              isActivated: I,
              loadingPreviews: y,
              noPreviewImgs: A,
              handleColorChange: (e, t) => {
                n.value.set(t - 1, e.color),
                  (k.value = e.color),
                  6 === n.value.size && M();
              },
              handleNameChange: (e) => {
                var t;
                _.value =
                  null === (t = null == e ? void 0 : e.target) || void 0 === t
                    ? void 0
                    : t.value;
              },
              handleClick: () => {
                I.value
                  ? d.value === u.value && (u.value = n.value.size + 1)
                  : (0, o.JX)().handleCommand("activate");
              },
              handleColorClick: (e) => {
                (d.value = e),
                  n.value.get(e - 1) || n.value.set(e - 1, k.value),
                  6 === n.value.size && M();
              },
              onSaveClick: () =>
                v(this, void 0, void 0, function* () {
                  if (!E.value) return;
                  let e = null;
                  if (S) {
                    const t = (0, s.CC)(S),
                      { colorThemeList: n } = t;
                    yield (0, s.LN)(S, () => {
                      (0, o.fl)().removeSmartColorTheme(S);
                      const { favoriteColorThemeIds: e } = (0, o.fl)();
                      n.forEach(({ id: t }) => {
                        e.includes(t) &&
                          (0, o.fl)().removeFavoriteColorTheme(t);
                      });
                    }),
                      (e = S);
                  } else e = "SMARTCOLOR-" + (0, c.hb)();
                  yield (0, s.uv)(e, R, () => {
                    (0, o.fl)().addSmartColorTheme({
                      id: e,
                      name: _.value.trim(),
                      colorList: [...n.value.values()],
                      idList: b.value.idList,
                    });
                  }),
                    yield f.ZP.fetch((0, m.iM)(window.id), { success: !0 }),
                    f.ZP.fetch(m.g_, { name: "dialog-smart-color-theme" });
                }),
              onCancelClick: () => {
                f.ZP.fetch(m.g_, { name: "dialog-smart-color-theme" });
              },
              getColorById: B,
              isColorInputEnable: (e) => !!I.value && e <= u.value,
              colorBoxMode: (e) =>
                F(e) ? h.A.add : Z(e) ? h.A.lock : h.A.plain,
              previewPanelStyle: L,
              previousColor: k,
            };
          },
        });
      n(12063);
      const y = (0, n(51900).Z)(
        w,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "div",
            {
              staticClass: "uk-window uk-window-dialog uk-window-default",
              attrs: { id: "smart-color-dialog" },
            },
            [
              t(
                "div",
                {
                  staticClass:
                    "uk-window-title-bar uk-window-title-bar-transparent",
                },
                [t("window-control-button-group")],
                1,
              ),
              e._v(" "),
              t(
                "div",
                {
                  staticClass:
                    "uk-window-body uk-scrollbar-hidden uk-flex uk-flex-column window-padding",
                },
                [
                  t(
                    "div",
                    {
                      staticStyle: {
                        "font-weight": "700",
                        "font-size": "20px",
                        "line-height": "25px",
                      },
                    },
                    [e._v("\n      " + e._s(e.getMainTitle) + "\n    ")],
                  ),
                  e._v(" "),
                  t("div", { staticClass: "uk-margin-small-top" }, [
                    e._v("\n      " + e._s(e.getSubTitle) + "\n    "),
                  ]),
                  e._v(" "),
                  t(
                    "div",
                    {
                      staticClass:
                        "uk-flex uk-flex-middle uk-flex-between uk-width-1-1",
                      staticStyle: { margin: "16px 0" },
                    },
                    [
                      t(
                        "div",
                        {
                          staticClass: "uk-child-width-1-2",
                          staticStyle: {
                            "margin-right": "32px",
                            display: "inline-flex",
                          },
                          on: { click: e.handleClick },
                        },
                        e._l(e.THEME_COLOR_NUM, function (n) {
                          return t("colorbox", {
                            key: `colorbox-${n}`,
                            attrs: {
                              color: e.getColorById(n - 1),
                              "color-box-mode": e.colorBoxMode(n),
                              "color-input-enable": e.isColorInputEnable(n),
                            },
                            on: {
                              click: function (t) {
                                return e.handleColorClick(n);
                              },
                              colorChange: function (t) {
                                return e.handleColorChange(t, n);
                              },
                            },
                          });
                        }),
                        1,
                      ),
                      e._v(" "),
                      t("input", {
                        staticClass: "uk-input uk-width-1-1 uk-height-1-1",
                        staticStyle: { "padding-left": "8px" },
                        attrs: {
                          placeholder: e.nameInput,
                          disabled: !e.isActivated,
                        },
                        domProps: { value: e.nameInput },
                        on: { input: e.handleNameChange },
                      }),
                    ],
                  ),
                  e._v(" "),
                  t(
                    "div",
                    {
                      staticClass:
                        "uk-card uk-flex uk-flex-middle custom-theme-preview-panel",
                      class: [
                        e.noPreviewImgs ? "uk-flex-center" : "uk-flex-between",
                      ],
                      style: e.previewPanelStyle,
                    },
                    [
                      e.loadingPreviews
                        ? t("div", { staticClass: "preview-wrap" }, [
                            t("div", { staticClass: "loading-icon" }),
                            e._v(" "),
                            t(
                              "span",
                              {
                                staticClass: "uk-text-muted",
                                staticStyle: { "font-wight": "500" },
                              },
                              [e._v(e._s(e.$T("Generating Color Themes...")))],
                            ),
                          ])
                        : t(
                            "div",
                            { staticStyle: { display: "contents" } },
                            [
                              e.noPreviewImgs
                                ? t("div", { staticClass: "preview-wrap" }, [
                                    t("img", {
                                      staticStyle: { "margin-right": "5.5px" },
                                      attrs: {
                                        "data-src": e.previewIcon,
                                        "uk-svg": "",
                                      },
                                    }),
                                    e._v(" "),
                                    t(
                                      "span",
                                      {
                                        staticClass: "uk-text-muted",
                                        staticStyle: { "font-wight": "500" },
                                      },
                                      [e._v(e._s(e.$T("Color Theme Preview")))],
                                    ),
                                  ])
                                : e._l(e.previewImages, function (e) {
                                    return t("img", {
                                      staticClass: "preview-img-item",
                                      staticStyle: { "object-fit": "cover" },
                                      attrs: { src: e },
                                    });
                                  }),
                            ],
                            2,
                          ),
                    ],
                  ),
                  e._v(" "),
                  t(
                    "div",
                    {
                      staticClass:
                        "uk-flex uk-flex-row uk-flex-auto uk-flex-middle uk-flex-right",
                    },
                    [
                      t(
                        "button",
                        {
                          staticClass:
                            "uk-button uk-button-default uk-margin-small-right",
                          attrs: { type: "button" },
                          on: { click: e.onCancelClick },
                        },
                        [
                          e._v(
                            "\n        " + e._s(e.$T("Cancel")) + "\n      ",
                          ),
                        ],
                      ),
                      e._v(" "),
                      t(
                        "button",
                        {
                          staticClass: "uk-button uk-button-primary",
                          attrs: { type: "button", disabled: !e.saveEnabled },
                          on: { click: e.onSaveClick },
                        },
                        [e._v("\n        " + e._s(e.$T("Save")) + "\n      ")],
                      ),
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
        "5d3e3d21",
        null,
      ).exports;
      (0, i.Z)(y, { name: "dialog-smart-color-theme" });
    },
    13382: (e, t, n) => {
      "use strict";
      n.d(t, {
        G$: () => k,
        N0: () => v,
        Pg: () => O,
        R2: () => b,
        W5: () => C,
        ZZ: () => w,
        am: () => x,
        eq: () => y,
        yr: () => S,
      });
      var i = n(71017),
        a = n.n(i),
        o = n(67657),
        r = n(7104),
        s = n(86633),
        l = n(33394),
        c = n(94593),
        u = n(90435),
        d = n(54856),
        f = n(5893),
        m = n(50965),
        p = n(92636);
      const h = (0, s.ZP)("dialog");
      async function v(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = a().join((0, r.bY)(), e.icon));
        const t = o.BrowserWindow.fromId(window.id);
        return [o.dialog.showMessageBoxSync(t, e)];
      }
      async function g(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = a().join((0, r.bY)(), e.icon));
        const t = o.BrowserWindow.fromId(window.id),
          { response: n, checkboxChecked: i } = await o.dialog.showMessageBox(
            t,
            e,
          );
        return [n, i];
      }
      async function w(e) {
        (e = Object.assign({ securityScopedBookmarks: !0 }, e || {}))
          .suggestPath &&
          !e.defaultPath &&
          ((e.defaultPath = x(e.suggestPath, e.filters)), delete e.suggestPath);
        const {
          canceled: t,
          filePath: n,
          bookmark: i,
        } = await o.dialog.showSaveDialog(o.getCurrentWindow(), e);
        return t
          ? null
          : (n && i && (await l.Z.bindBookmark({ fp: n, bookmark: i })),
            n && (0, m.km)().setLastSaveDirectory(a().dirname(n)),
            n);
      }
      async function y({ folderName: e, dialogOptions: t }) {
        let n = "";
        (t = Object.assign({ securityScopedBookmarks: !0 }, t || {}))
          .defaultPath || (t.defaultPath = x({}));
        const {
          canceled: i,
          filePaths: r,
          bookmark: s,
        } = await o.dialog.showOpenDialog(o.getCurrentWindow(), t);
        if (i) return null;
        if (
          ((n = r[0]),
          r.length > 0 && s && (await l.Z.bindBookmark({ fp: n, bookmark: s })),
          "string" == typeof e)
        ) {
          let t = e.replace(/[\\/]/g, "");
          0, (n = a().join(n, t));
        }
        return (
          c.Z.existsSync(n) || c.Z.ensureDir(n),
          n && (0, m.km)().setLastSaveDirectory(n),
          n
        );
      }
      function x(
        { doc: e = null, oldDoc: t = null, suggestedName: n = null },
        i = null,
      ) {
        let r, s;
        if (
          (!r && n && (r = (0, f.N6)(n.toString())),
          !r &&
            e &&
            e.title &&
            e.source &&
            !e.source.startsWith("new://") &&
            (r = (0, f.N6)(e.title.toString())),
          !r &&
            t &&
            t.title &&
            t.source &&
            !t.source.startsWith("new://") &&
            (r = (0, f.N6)(t.title.toString())),
          r && Array.isArray(i))
        ) {
          const e = i[0] && i[0].extensions;
          Array.isArray(e) && e.length > 0 && (r = `${r}.${e[0]}`);
        }
        if (!s && t && t.source && t.source.startsWith("file://")) {
          let e = t.source.slice(7);
          0, (s = a().dirname(e));
        }
        if (
          (!s &&
            (0, m.km)().lastSaveDirectory &&
            (s = (0, m.km)().lastSaveDirectory),
          !s)
        )
          try {
            s = o.app.getPath("documents");
          } catch (e) {
            h.info(e);
          }
        return s && r ? a().join(s, r) : s || r;
      }
      async function C(e) {
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
      async function b(e) {
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
        a === i.indexOf(n) && u.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function k(e) {
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
        a === i.indexOf(n) && u.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function S(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Save"),
          n = e("Save as"),
          i = e("Cancel"),
          a = [];
        a.push(t, i, n);
        let [o] = await g({
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
        const r = o === a.indexOf(t),
          s = o === a.indexOf(n);
        return { toSave: r, toSaveAs: s, toCancel: !r && !s };
      }
      async function O(e) {
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
        o = n(71017),
        r = n.n(o),
        s = n(73837),
        l = n(86633),
        c = n(16704),
        u = n(56222);
      const d = (0, l.ZP)("renderer:fs");
      async function f(e) {
        return (0, u.A)("OBTAIN_READ_WRITE_ACCESS", e);
      }
      async function m(e) {
        return (0, u.A)("RELEASE_READ_WRITE_ACCESS", e);
      }
      const p = {
        read: async function (e) {
          if (!r().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const t = await (async function (e) {
            return (0, u.A)("OBTAIN_READ_LOCK", e);
          })(e);
          try {
            return await (0, s.promisify)(a().readFile)(e);
          } catch (t) {
            d.error(`path(${e}) read error: ${(0, c.SC)(t)}`);
            try {
              if (!(await f(e))) throw new Error(`No access to '${e}'`);
              return await (0, s.promisify)(a().readFile)(e);
            } catch (e) {
              throw e;
            } finally {
              await m(e);
            }
          } finally {
            await (async function (e) {
              return (0, u.A)("RELEASE_READ_LOCK", e);
            })(t);
          }
        },
        write: async function (e, t) {
          if (!r().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const n = await (async function (e) {
            return (0, u.A)("OBTAIN_WRITE_LOCK", e);
          })(e);
          try {
            return await (0, s.promisify)(a().writeFile)(e, t);
          } catch (n) {
            d.error(`path(${e}) write error: ${(0, c.SC)(n)}`);
            try {
              if (!(await f(e))) throw new Error(`No access to '${e}'`);
              return await (0, s.promisify)(a().writeFile)(e, t);
            } catch (e) {
              throw e;
            } finally {
              await m(e);
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
        obtainRWAccessFromOS: f,
        releaseRWAccessFromOS: m,
      };
    },
    52688: (e, t, n) => {
      "use strict";
      var i, a;
      n.d(t, { A: () => i, q: () => a }),
        (function (e) {
          (e.plain = "plain"), (e.add = "add"), (e.lock = "lock");
        })(i || (i = {})),
        (function (e) {
          (e.new = "new"), (e.edit = "edit");
        })(a || (a = {}));
    },
    29776: (e, t, n) => {
      "use strict";
      n.d(t, {
        B6: () => w,
        CC: () => g,
        Ho: () => d,
        LN: () => p,
        PV: () => v,
        gA: () => x,
        jS: () => y,
        s9: () => m,
        uv: () => h,
      });
      var i = n(7104),
        a = n(94593),
        o = n(71017),
        r = n.n(o),
        s = n(16704),
        l = n(40219),
        c = function (e, t, n, i) {
          return new (n || (n = Promise))(function (a, o) {
            function r(e) {
              try {
                l(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                l(i.throw(e));
              } catch (e) {
                o(e);
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
                      })).then(r, s);
            }
            l((i = i.apply(e, t || [])).next());
          });
        };
      const {
          DEFAULT_SKELETON_THEME_ID: u,
          generateCustomSmartColorThemeInfo: d,
          deserializeColorTheme: f,
        } = l.s,
        m = u,
        p = (e, t) =>
          c(void 0, void 0, void 0, function* () {
            const n = r().join((0, i.Im)(), `${e}.json`);
            a.Z.existsSync(n) && (yield a.Z.remove(n)), t && (yield t());
          }),
        h = (e, t, n) =>
          c(void 0, void 0, void 0, function* () {
            const o = (0, i.Im)();
            yield a.Z.ensureDir(o);
            const s = r().join(o, `${e}.json`);
            yield t(s), n && (yield n());
          }),
        v = ({ colorList: e, themeName: t }, n) =>
          c(void 0, void 0, void 0, function* () {
            const o = "SMARTCOLOR-" + (0, s.hb)(),
              l = d([{ colorList: e, themeName: t }])[0],
              c = (0, i.Im)();
            yield a.Z.ensureDir(c);
            const u = r().join(c, `${o}.json`);
            try {
              const e = JSON.stringify(l);
              yield a.Z.writeFile(u, e),
                n && (yield n(Object.assign({ customSCTId: o }, l)));
            } catch (e) {
              return;
            }
          }),
        g = (e) => {
          const t = (0, i.Im)(),
            n = r().join(t, `${e}.json`);
          return JSON.parse(a.Z.readFileSync(n).toString());
        },
        w = (e, t) => {
          const n = g(e);
          if (!n) return null;
          const i = n.colorThemeList.find((e) => e.id === t);
          return "deserialized" in i ? i : f(i);
        },
        y = (e, t = m) => {
          const n =
            l.t.getColorThemePreviewById(t, e) ||
            l.t.getColorThemePreviewById(m, e);
          return n ? `data:image/svg+xml,${encodeURIComponent(n)}` : "";
        },
        x = () => l.t.initThemePreviewModule();
    },
    12063: (e, t, n) => {
      var i = n(55895);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, n(45346).Z)("62a8ee69", i, !0, {});
    },
    45346: (e, t, n) => {
      "use strict";
      function i(e, t) {
        for (var n = [], i = {}, a = 0; a < t.length; a++) {
          var o = t[a],
            r = o[0],
            s = { id: e + ":" + a, css: o[1], media: o[2], sourceMap: o[3] };
          i[r] ? i[r].parts.push(s) : n.push((i[r] = { id: r, parts: [s] }));
        }
        return n;
      }
      n.d(t, { Z: () => p });
      var a = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !a)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
        );
      var o = {},
        r = a && (document.head || document.getElementsByTagName("head")[0]),
        s = null,
        l = 0,
        c = !1,
        u = function () {},
        d = null,
        f = "data-vue-ssr-id",
        m =
          "undefined" != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function p(e, t, n, a) {
        (c = n), (d = a || {});
        var r = i(e, t);
        return (
          h(r),
          function (t) {
            for (var n = [], a = 0; a < r.length; a++) {
              var s = r[a];
              (l = o[s.id]).refs--, n.push(l);
            }
            t ? h((r = i(e, t))) : (r = []);
            for (a = 0; a < n.length; a++) {
              var l;
              if (0 === (l = n[a]).refs) {
                for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                delete o[l.id];
              }
            }
          }
        );
      }
      function h(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
            i = o[n.id];
          if (i) {
            i.refs++;
            for (var a = 0; a < i.parts.length; a++) i.parts[a](n.parts[a]);
            for (; a < n.parts.length; a++) i.parts.push(g(n.parts[a]));
            i.parts.length > n.parts.length &&
              (i.parts.length = n.parts.length);
          } else {
            var r = [];
            for (a = 0; a < n.parts.length; a++) r.push(g(n.parts[a]));
            o[n.id] = { id: n.id, refs: 1, parts: r };
          }
        }
      }
      function v() {
        var e = document.createElement("style");
        return (e.type = "text/css"), r.appendChild(e), e;
      }
      function g(e) {
        var t,
          n,
          i = document.querySelector("style[" + f + '~="' + e.id + '"]');
        if (i) {
          if (c) return u;
          i.parentNode.removeChild(i);
        }
        if (m) {
          var a = l++;
          (i = s || (s = v())),
            (t = x.bind(null, i, a, !1)),
            (n = x.bind(null, i, a, !0));
        } else
          (i = v()),
            (t = C.bind(null, i)),
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
      var w,
        y =
          ((w = []),
          function (e, t) {
            return (w[e] = t), w.filter(Boolean).join("\n");
          });
      function x(e, t, n, i) {
        var a = n ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = y(t, a);
        else {
          var o = document.createTextNode(a),
            r = e.childNodes;
          r[t] && e.removeChild(r[t]),
            r.length ? e.insertBefore(o, r[t]) : e.appendChild(o);
        }
      }
      function C(e, t) {
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
  },
  (e) => {
    e.O(0, [2768, 219, 1505], () => {
      return (t = 15478), e((e.s = t));
      var t;
    });
    var t = e.O();
    module.exports = t;
  },
]);
