(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [8681],
  {
    83237: (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, { default: () => i });
      var n = r(23645),
        a = r.n(n)()(function (t) {
          return t[1];
        });
      a.push([
        t.id,
        "table tr[data-v-96ccaa78] {\n  height: 30px;\n}\n.uk-text-muted[data-v-96ccaa78] {\n  font-size: 12px;\n  line-height: 1.3;\n}\n.preview[data-v-96ccaa78] {\n  border-radius: 6px;\n  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);\n}\n.preview.is-dark[data-v-96ccaa78] {\n  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);\n}\n.uk-window-button-bar[data-v-96ccaa78] {\n  min-height: 50px;\n  padding-top: 0;\n}\n",
        "",
      ]);
      const i = a;
    },
    23645: (t) => {
      "use strict";
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var r = t(e);
              return e[2] ? "@media ".concat(e[2], " {").concat(r, "}") : r;
            }).join("");
          }),
          (e.i = function (t, r, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            var a = {};
            if (n)
              for (var i = 0; i < this.length; i++) {
                var o = this[i][0];
                null != o && (a[o] = !0);
              }
            for (var s = 0; s < t.length; s++) {
              var c = [].concat(t[s]);
              (n && a[c[0]]) ||
                (r &&
                  (c[2]
                    ? (c[2] = "".concat(r, " and ").concat(c[2]))
                    : (c[2] = r)),
                e.push(c));
            }
          }),
          e
        );
      };
    },
    40334: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => c });
      var n = r(92636),
        a = r(54856),
        i = r(16704),
        o = r(50965),
        s = r(90435);
      const c = {
        computed: {},
        watch: {
          touchBarItems(t) {
            this.updateTouchBarItems(t);
          },
        },
        methods: {
          updateTouchBarItems(t) {
            const e = (t) => {
              const e = t.click;
              let r = this._touchBarRoutes[e];
              return (
                r ||
                  ((r = {
                    method: e,
                    endpoint: (0, a.A6)(window.id, (0, i.rs)(e)),
                  }),
                  (this._touchBarRoutes[e] = r)),
                r.unroute || (r.unroute = s.ZP.route(r.endpoint, this[e])),
                Object.assign({}, t, { click: r.endpoint })
              );
            };
            (t = (t || this.touchBarItems || []).map(
              (t) => (
                "button" !== t.type ||
                "string" != typeof t.click ||
                n.sq.includes(t.click) ||
                t.click.startsWith("command:")
                  ? "buttons" === t.type &&
                    (t = {
                      ...t,
                      buttons: t.buttons.map((t) =>
                        "string" != typeof t.click ||
                        n.sq.includes(t.click) ||
                        t.click.startsWith("command:")
                          ? t
                          : e(t),
                      ),
                    })
                  : (t = e(t)),
                t
              ),
            )),
              (0, o.JS)("window")?.().updateTouchBarItems(t);
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
            ({ unroute: t }) => t && t(),
          ),
            (this._touchBarRoutes = {});
        },
      };
    },
    37391: (t, e, r) => {
      "use strict";
      r.r(e);
      var n = r(63477),
        a = r.n(n),
        i = r(51505),
        o = r(40334),
        s = r(72917),
        c = r(31945),
        u = r(54856),
        l = r(90435),
        d = r(18621),
        h = r(95246),
        f = r(50965);
      const p = a().parse(window.location.search.slice(1)),
        g = {
          mindmap: { exportContentScope: 0, exportBackground: !0 },
          outliner: { exportContentScope: 0, exportBackground: !0 },
          pitch: { exportContentScope: 0, exportBackground: !0 },
        },
        m = {
          mixins: [o.Z],
          data() {
            return {
              exportContentScope: 0,
              hasWatermark: !1,
              exportToType: 0,
              exportScale: 1,
              exportBackground: !0,
              iconWarning: this.$toResourceURL(
                "static/images/dialog-export-to-image/warning.svg",
              ),
              iconLock: this.$toResourceURL(
                "static/images/dialog-export-to-image/lock.svg",
              ),
              proIcon: this.$toResourceURL(
                "static/assets/images/pro/menu-pro@2x.png",
              ),
              exportAvailableScales: ["100%", "200%", "300%"],
              currentExportCategory: "mindmap",
            };
          },
          computed: {
            preferredLanguage: () => (0, f.S)().preferredLanguage,
            exportContentScopeTypes() {
              return [
                { title: this.$T("Current Sheet"), trialRequest: null },
                {
                  title: this.$T("Current File"),
                  trialRequest: "action.export2ScopeFilePdf",
                },
              ];
            },
            isActivationStatusValid: () => true,
            exportCategories() {
              return {
                mindmap: this.$T("Mind Map"),
                outliner: this.$T("Outliner"),
                pitch: this.$T("Pitch"),
              };
            },
            isDarkAppearance: () => "dark" === (0, f.S)().appearance,
            watermarkEnabled: () => (0, f.S)().watermarkEnabled,
            previewImg() {
              return this.$toResourceURL(
                `static/assets/images/dialog-export-to-pdf/${this.currentExportCategory}_${this.isDarkAppearance ? "dark" : "default"}.svg`,
              );
            },
            bigMindMap() {
              return Math.max(p.bound[0], p.bound[1]) * this.exportScale > 3e4;
            },
            touchBarItems() {
              return [
                { type: "space", size: "flexible" },
                { type: "button", label: this.$T("Cancel"), click: "close" },
                {
                  type: "button",
                  label: this.$T("Export"),
                  backgroundColor: "primary",
                  click: "doExport",
                },
                { type: "space", size: "flexible" },
              ].filter(Boolean);
            },
          },
          watch: {
            async exportScale(t) {
              t > 1 &&
                !(await this.handlerForLimitedFeature()) &&
                (this.exportScale = 1);
            },
            exportContentScope(t) {
              this.exportToType = t;
            },
            currentExportCategory(t) {
              (this.exportContentScope = g[t].exportContentScope),
                (this.exportBackground = g[t].exportBackground);
            },
            preferredLanguage(t) {
              this.adaptWindow(t);
            },
            isActivationStatusValid(t) {
              t ||
                ((this.exportContentScope = 0),
                Object.keys(g).forEach((t) => {
                  g[t].exportContentScope = 0;
                }),
                (this.hasWatermark = !0));
            },
          },
          methods: {
            adaptWindow(t) {
              const [e, r] = [540, 375];
              "pt-PT" === t ? (0, h.QC)(e + 100, r) : (0, h.QC)(e, r);
            },
            doExport() {
              const t = {
                contentScope: this.exportContentScope,
                exportTo: this.exportToType,
                transparent: !this.exportBackground,
                exportCategory: this.currentExportCategory,
                hasWatermark: this.hasWatermark,
              };
              (0, f.S)().updatePreferences({
                watermarkEnabled: this.hasWatermark,
              }),
                this.isActivationStatusValid &&
                  (0, d.L9)({
                    eventAction: "watermarkStatus",
                    eventName: this.hasWatermark
                      ? "PDFwithWatermark"
                      : "PDFwithoutWatermark",
                  }),
                this.$safeRun(() => {
                  l.ZP.fetch((0, u.iM)(window.id), t).then(() =>
                    window.close(),
                  );
                });
            },
            cancel() {
              window.close();
            },
            handlerForLimitedFeature: async () =>
              l.ZP.fetch(u.Gy, "action.export2ScalePdf"),
            switchCategory(t) {
              this.currentExportCategory = t;
            },
            onChangeBackground() {
              (this.exportBackground = !this.exportBackground),
                (g[this.currentExportCategory].exportBackground =
                  this.exportBackground);
            },
            async onScopeChanged(t, e) {
              (e.trialRequest && !(await l.ZP.fetch(u.Gy, e.trialRequest))) ||
                ((this.exportContentScope = t),
                (g[this.currentExportCategory].exportContentScope = t));
            },
          },
          components: {
            WatermarkCheckbox: s.Z,
            WatermarkTemplate: {
              render(t) {
                return t(
                  "div",
                  { class: "uk-text-muted" },
                  this.$T(
                    '"Presented with xmind" is locked before upgrading to Xmind Pro.',
                  ),
                );
              },
            },
          },
          mounted() {
            const t = (0, f.OD)((0, c.aJ)(p.editorId))?.().isOutlinerMode;
            t && (this.currentExportCategory = "outliner"),
              (this.hasWatermark =
                !this.isActivationStatusValid || this.watermarkEnabled);
          },
        };
      r(39405);
      const b = (0, r(51900).Z)(
          m,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass:
                  "uk-window uk-window-dialog uk-window-dialog-default",
                attrs: { id: "app" },
              },
              [
                e(
                  "div",
                  {
                    staticClass:
                      "uk-window-title-bar uk-window-title-bar-floating",
                  },
                  [e("window-control-button-group")],
                  1,
                ),
                t._v(" "),
                e("div", { staticClass: "uk-window-body uk-flex" }, [
                  e(
                    "div",
                    {
                      staticClass: "uk-flex uk-flex-middle uk-flex-center",
                      staticStyle: { width: "190px", "padding-top": "49px" },
                    },
                    [
                      e("img", {
                        staticClass: "preview",
                        class: { isDark: t.isDarkAppearance },
                        attrs: {
                          draggable: "false",
                          "uk-img": "",
                          "data-src": t.previewImg,
                          alt: "",
                        },
                      }),
                    ],
                  ),
                  t._v(" "),
                  e(
                    "div",
                    {
                      staticClass:
                        "uk-panel uk-margin-top uk-padding-large uk-padding-remove-left uk-flex uk-flex-column uk-height-expand",
                    },
                    [
                      e("h1", { staticClass: "uk-text-bold" }, [
                        t._v(
                          "\n        " +
                            t._s(t.$T("Export to PDF")) +
                            "\n      ",
                        ),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "uk-flex uk-margin-bottom" }, [
                        e(
                          "ul",
                          {
                            staticClass:
                              "uk-tab uk-tab-capsule uk-flex uk-flex-nowrap uk-padding-remove uk-margin-remove uk-flex-middle uk-flex-no-shrink",
                          },
                          t._l(Object.keys(t.exportCategories), function (r) {
                            return e(
                              "li",
                              {
                                key: r,
                                class: {
                                  "uk-active": r === t.currentExportCategory,
                                },
                                on: {
                                  click: function (e) {
                                    return t.switchCategory(r);
                                  },
                                },
                              },
                              [
                                e(
                                  "a",
                                  { attrs: { draggable: "false", href: "#" } },
                                  [t._v(t._s(t.exportCategories[r]))],
                                ),
                              ],
                            );
                          }),
                          0,
                        ),
                      ]),
                      t._v(" "),
                      e("table", [
                        e(
                          "tr",
                          { staticClass: "uk-margin-top uk-margin-small" },
                          [
                            e(
                              "td",
                              { staticStyle: { "text-align": "right" } },
                              [
                                e(
                                  "label",
                                  {
                                    staticClass: "uk-form-label uk-text-nowrap",
                                  },
                                  [t._v(t._s(t.$T("Export:")))],
                                ),
                              ],
                            ),
                            t._v(" "),
                            e("td", { staticStyle: { width: "100%" } }, [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "uk-form-controls uk-margin-small-left",
                                },
                                [
                                  e(
                                    "button",
                                    {
                                      staticClass:
                                        "uk-button uk-button-popover-toggle uk-select-icon uk-text-left uk-width-small",
                                      staticStyle: { width: "176px" },
                                      attrs: { name: "content" },
                                    },
                                    [
                                      t._v(
                                        "\n                " +
                                          t._s(
                                            t.exportContentScopeTypes[
                                              t.exportContentScope
                                            ].title,
                                          ) +
                                          "\n              ",
                                      ),
                                    ],
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      attrs: {
                                        "uk-contextual-popover":
                                          "offsetLeft:20",
                                        "data-sel-close": "[uk-menu] button",
                                      },
                                    },
                                    [
                                      e(
                                        "ul",
                                        {
                                          staticClass:
                                            "uk-height-1-1 uk-overflow-auto",
                                          attrs: { "uk-menu": "" },
                                        },
                                        t._l(
                                          t.exportContentScopeTypes,
                                          function (r, n) {
                                            return e("li", { key: n }, [
                                              e(
                                                "button",
                                                {
                                                  class: {
                                                    "uk-checked":
                                                      t.exportContentScope ===
                                                      n,
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      return t.onScopeChanged(
                                                        n,
                                                        r,
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  e(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "uk-flex uk-flex-middle",
                                                    },
                                                    [
                                                      e("span", [
                                                        t._v(
                                                          " " + t._s(r.title),
                                                        ),
                                                      ]),
                                                      t._v(" "),
                                                      r.trialRequest &&
                                                      !t.isActivationStatusValid
                                                        ? e("img", {
                                                            staticStyle: {
                                                              "margin-left":
                                                                "8px",
                                                              height: "14px",
                                                            },
                                                            attrs: {
                                                              src: t.proIcon,
                                                            },
                                                          })
                                                        : t._e(),
                                                    ],
                                                  ),
                                                ],
                                              ),
                                            ]);
                                          },
                                        ),
                                        0,
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ]),
                          ],
                        ),
                        t._v(" "),
                        e("tr", [
                          e("td", { staticStyle: { "text-align": "right" } }, [
                            e(
                              "label",
                              { staticClass: "uk-form-label uk-text-nowrap" },
                              [t._v(t._s(t.$T("Options:")))],
                            ),
                          ]),
                          t._v(" "),
                          e(
                            "td",
                            { staticStyle: { width: "100%" } },
                            [
                              "mindmap" === t.currentExportCategory
                                ? [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "uk-form-controls uk-margin-small-left",
                                      },
                                      [
                                        e("div", [
                                          e("label", [
                                            e("input", {
                                              staticClass:
                                                "uk-checkbox uk-marsgin-xsmall-right",
                                              attrs: {
                                                type: "checkbox",
                                                name: "transparent",
                                              },
                                              domProps: {
                                                checked: t.exportBackground,
                                              },
                                              on: {
                                                input: t.onChangeBackground,
                                              },
                                            }),
                                            t._v(
                                              "\n                    " +
                                                t._s(t.$T("Background Color")) +
                                                "\n                  ",
                                            ),
                                          ]),
                                        ]),
                                      ],
                                    ),
                                  ]
                                : [
                                    e("watermark-checkbox", {
                                      staticClass: "uk-margin-small-left",
                                      attrs: { value: t.hasWatermark },
                                      on: {
                                        toggle: (e) => (t.hasWatermark = e),
                                      },
                                    }),
                                  ],
                            ],
                            2,
                          ),
                        ]),
                        t._v(" "),
                        "mindmap" === t.currentExportCategory
                          ? e("tr", [
                              e("td"),
                              t._v(" "),
                              e(
                                "td",
                                [
                                  e("watermark-checkbox", {
                                    staticClass: "uk-margin-small-left",
                                    staticStyle: {
                                      transform: "translateY(-5px)",
                                    },
                                    attrs: { value: t.hasWatermark },
                                    on: { toggle: (e) => (t.hasWatermark = e) },
                                  }),
                                ],
                                1,
                              ),
                            ])
                          : t._e(),
                      ]),
                      t._v(" "),
                      t.isActivationStatusValid
                        ? t._e()
                        : e("div", [e("WatermarkTemplate")], 1),
                      t._v(" "),
                      "pitch" !== t.currentExportCategory
                        ? [
                            e("hr", { staticClass: "uk-margin-xsmall-bottom" }),
                            t._v(" "),
                            e(
                              "div",
                              { staticClass: "uk-flex-column uk-text-muted" },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$T(
                                        "To change PDF layout settings, choose File > Print > Save as PDF.",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ],
                            ),
                          ]
                        : t._e(),
                    ],
                    2,
                  ),
                ]),
                t._v(" "),
                e("div", { staticClass: "uk-window-button-bar" }, [
                  e("div", { staticClass: "uk-button-group" }, [
                    e(
                      "button",
                      {
                        staticClass: "uk-button uk-button-primary",
                        attrs: { type: "submit", autofocus: "", tabindex: "1" },
                        on: { click: t.doExport },
                      },
                      [t._v("\n        " + t._s(t.$T("Export")) + "\n      ")],
                    ),
                    t._v(" "),
                    e(
                      "button",
                      {
                        staticClass: "uk-button uk-button-default",
                        attrs: { type: "button" },
                        on: { click: t.cancel },
                      },
                      [t._v("\n        " + t._s(t.$T("Cancel")) + "\n      ")],
                    ),
                  ]),
                ]),
              ],
            );
          },
          [],
          !1,
          null,
          "96ccaa78",
          null,
        ).exports,
        x = a().parse(location.search.slice(1));
      (0, i.Z)(b, { name: "dialog-export-to-pdf", editorId: x.editorId });
    },
    13382: (t, e, r) => {
      "use strict";
      r.d(e, {
        G$: () => _,
        N0: () => m,
        Pg: () => S,
        R2: () => w,
        W5: () => y,
        ZZ: () => x,
        am: () => k,
        eq: () => v,
        yr: () => C,
      });
      var n = r(71017),
        a = r.n(n),
        i = r(67657),
        o = r(7104),
        s = r(86633),
        c = r(33394),
        u = r(94593),
        l = r(90435),
        d = r(54856),
        h = r(5893),
        f = r(50965),
        p = r(92636);
      const g = (0, s.ZP)("dialog");
      async function m(t) {
        (t = Object.assign({}, t || {})).icon &&
          "string" == typeof t.icon &&
          (t.icon = a().join((0, o.bY)(), t.icon));
        const e = i.BrowserWindow.fromId(window.id);
        return [i.dialog.showMessageBoxSync(e, t)];
      }
      async function b(t) {
        (t = Object.assign({}, t || {})).icon &&
          "string" == typeof t.icon &&
          (t.icon = a().join((0, o.bY)(), t.icon));
        const e = i.BrowserWindow.fromId(window.id),
          { response: r, checkboxChecked: n } = await i.dialog.showMessageBox(
            e,
            t,
          );
        return [r, n];
      }
      async function x(t) {
        (t = Object.assign({ securityScopedBookmarks: !0 }, t || {}))
          .suggestPath &&
          !t.defaultPath &&
          ((t.defaultPath = k(t.suggestPath, t.filters)), delete t.suggestPath);
        const {
          canceled: e,
          filePath: r,
          bookmark: n,
        } = await i.dialog.showSaveDialog(i.getCurrentWindow(), t);
        return e
          ? null
          : (r && n && (await c.Z.bindBookmark({ fp: r, bookmark: n })),
            r && (0, f.km)().setLastSaveDirectory(a().dirname(r)),
            r);
      }
      async function v({ folderName: t, dialogOptions: e }) {
        let r = "";
        (e = Object.assign({ securityScopedBookmarks: !0 }, e || {}))
          .defaultPath || (e.defaultPath = k({}));
        const {
          canceled: n,
          filePaths: o,
          bookmark: s,
        } = await i.dialog.showOpenDialog(i.getCurrentWindow(), e);
        if (n) return null;
        if (
          ((r = o[0]),
          o.length > 0 && s && (await c.Z.bindBookmark({ fp: r, bookmark: s })),
          "string" == typeof t)
        ) {
          let e = t.replace(/[\\/]/g, "");
          0, (r = a().join(r, e));
        }
        return (
          u.Z.existsSync(r) || u.Z.ensureDir(r),
          r && (0, f.km)().setLastSaveDirectory(r),
          r
        );
      }
      function k(
        { doc: t = null, oldDoc: e = null, suggestedName: r = null },
        n = null,
      ) {
        let o, s;
        if (
          (!o && r && (o = (0, h.N6)(r.toString())),
          !o &&
            t &&
            t.title &&
            t.source &&
            !t.source.startsWith("new://") &&
            (o = (0, h.N6)(t.title.toString())),
          !o &&
            e &&
            e.title &&
            e.source &&
            !e.source.startsWith("new://") &&
            (o = (0, h.N6)(e.title.toString())),
          o && Array.isArray(n))
        ) {
          const t = n[0] && n[0].extensions;
          Array.isArray(t) && t.length > 0 && (o = `${o}.${t[0]}`);
        }
        if (!s && e && e.source && e.source.startsWith("file://")) {
          let t = e.source.slice(7);
          0, (s = a().dirname(t));
        }
        if (
          (!s &&
            (0, f.km)().lastSaveDirectory &&
            (s = (0, f.km)().lastSaveDirectory),
          !s)
        )
          try {
            s = i.app.getPath("documents");
          } catch (t) {
            g.info(t);
          }
        return s && o ? a().join(s, o) : s || o;
      }
      async function y(t) {
        t.$withUIKit((e) => {
          const r = `\n        <button\n        class="uk-button uk-button-text uk-text-nowrap"\n        style="word-break: keep-all;"\n        focustrigger="cannotGetFocusByMouse">\n          ${t.$T("OK")}\n        </button>\n        </div>`;
          e.toast({
            message: t.$T(
              "The map style has been updated for your current version of Xmind.",
            ),
            pos: "bottom-center",
            timeout: 5e3,
            btn: r,
            style: { width: "500px", height: "auto", padding: "10px 20px" },
            btnClick: e.toast.clearAll(),
          });
        });
      }
      async function w(t) {
        const e = (t = "function" != typeof t ? (t) => t : t)("OK"),
          r = t("Get Latest Version"),
          n = [e, r],
          [a] = await b({
            title: "Xmind",
            message: t(
              "The map style in this file might vary since it was created in a newer version of Xmind.",
            ),
            detail: t(
              "You can continue to open the file or update to the latest version for better compatibility.",
            ),
            buttons: n,
            defaultId: n.indexOf(r),
            cancelId: n.indexOf(e),
            noLink: !0,
          });
        a === n.indexOf(r) && l.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function _(t) {
        if (((t = "function" != typeof t ? (t) => t : t), p.zr))
          return await b({
            title: "Xmind",
            message: t("Failed to Open File"),
            detail: t(
              "The file was created with a newer version of Xmind. Please contact your corporate administrator for the latest update.",
            ),
            buttons: [t("Done")],
            defaultId: 0,
            noLink: !0,
          });
        const e = t("Cancel"),
          r = t("Get Latest Version"),
          n = [r, e],
          [a] = await b({
            title: "Xmind",
            message: t("Failed to Open File"),
            detail: t(
              "The file was created by a newer version of Xmind. Please update Xmind and try to open it again.",
            ),
            buttons: n,
            defaultId: n.indexOf(r),
            cancelId: n.indexOf(e),
            noLink: !0,
          });
        a === n.indexOf(r) && l.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function C(t) {
        const e = (t = "function" != typeof t ? (t) => t : t)("Save"),
          r = t("Save as"),
          n = t("Cancel"),
          a = [];
        a.push(e, n, r);
        let [i] = await b({
          type: "none",
          title: "Xmind",
          message: t("Saving file from Xmind"),
          detail: t(
            "Once you save the file, it cannot be opened normally in older versions like $1.",
            "Xmind 22.11",
          ),
          buttons: a,
          defaultId: a.indexOf(r),
          cancelId: a.indexOf(n),
          noLink: !0,
        });
        const o = i === a.indexOf(e),
          s = i === a.indexOf(r);
        return { toSave: o, toSaveAs: s, toCancel: !o && !s };
      }
      async function S(t) {
        const e = (t = "function" != typeof t ? (t) => t : t)("Fix ＆ Open"),
          r = t("Cancel"),
          n = [e, r],
          [a] = await b({
            title: "Xmind",
            message: t("Failed to Open File"),
            detail: t(
              "The file may contain invalid data structure or have become corrupted. Xmind can try to fix the data structure to help you open it.",
            ),
            buttons: n,
            defaultId: n.indexOf(e),
            cancelId: n.indexOf(r),
            noLink: !0,
          });
        return { toFix: a === n.indexOf(e), toCancel: a === n.indexOf(r) };
      }
    },
    33394: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => p });
      var n = r(57147),
        a = r.n(n),
        i = r(71017),
        o = r.n(i),
        s = r(73837),
        c = r(86633),
        u = r(16704),
        l = r(56222);
      const d = (0, c.ZP)("renderer:fs");
      async function h(t) {
        return (0, l.A)("OBTAIN_READ_WRITE_ACCESS", t);
      }
      async function f(t) {
        return (0, l.A)("RELEASE_READ_WRITE_ACCESS", t);
      }
      const p = {
        read: async function (t) {
          if (!o().isAbsolute(t)) throw new Error("Must be an absolute path.");
          const e = await (async function (t) {
            return (0, l.A)("OBTAIN_READ_LOCK", t);
          })(t);
          try {
            return await (0, s.promisify)(a().readFile)(t);
          } catch (e) {
            d.error(`path(${t}) read error: ${(0, u.SC)(e)}`);
            try {
              if (!(await h(t))) throw new Error(`No access to '${t}'`);
              return await (0, s.promisify)(a().readFile)(t);
            } catch (t) {
              throw t;
            } finally {
              await f(t);
            }
          } finally {
            await (async function (t) {
              return (0, l.A)("RELEASE_READ_LOCK", t);
            })(e);
          }
        },
        write: async function (t, e) {
          if (!o().isAbsolute(t)) throw new Error("Must be an absolute path.");
          const r = await (async function (t) {
            return (0, l.A)("OBTAIN_WRITE_LOCK", t);
          })(t);
          try {
            return await (0, s.promisify)(a().writeFile)(t, e);
          } catch (r) {
            d.error(`path(${t}) write error: ${(0, u.SC)(r)}`);
            try {
              if (!(await h(t))) throw new Error(`No access to '${t}'`);
              return await (0, s.promisify)(a().writeFile)(t, e);
            } catch (t) {
              throw t;
            } finally {
              await f(t);
            }
          } finally {
            await (async function (t) {
              return (0, l.A)("RELEASE_WRITE_LOCK", t);
            })(r);
          }
        },
        bindBookmark: async function ({ fp: t, bookmark: e } = {}) {
          return (0, l.A)("BIND_BOOKMARK", { fp: t, bookmark: e });
        },
        hasRWAccess: async function (t) {
          return (0, l.A)("HAS_READ_WRITE_ACCESS", t);
        },
        obtainRWAccessFromOS: h,
        releaseRWAccessFromOS: f,
      };
    },
    95246: (t, e, r) => {
      "use strict";
      r.d(e, {
        RS: () => d,
        lF: () => f,
        JX: () => h,
        gP: () => m,
        sF: () => l,
        GI: () => p,
        Ni: () => g,
        mi: () => w,
        QC: () => x,
        Sr: () => v,
        yB: () => y,
        SX: () => k,
        RL: () => b,
      });
      r(13382), r(81296), r(90435), r(54856), r(71017);
      var n = r(72298),
        a = r(67657),
        i = (r(92636), r(41809));
      require("posthtml");
      var o = r(97234),
        s = r(26601),
        c = r(50965);
      const u = { cache: !1 },
        l = (t) => {
          const e = (t) => parseInt(t, 16);
          if (
            "string" == typeof (t = (0, o.Z)(t).toHexString()) &&
            /^#[A-Z0-9]{6}$/.test(t.toUpperCase())
          ) {
            return (
              0.2126 * e(t.slice(1, 3)) +
              0.7152 * e(t.slice(3, 5)) +
              0.0722 * e(t.slice(5))
            );
          }
          return 0;
        },
        d = (t = {}) => {
          const e = Object.assign({}, u, t);
          let r = null;
          const n = {};
          return function (t = "", a = "") {
            if (e.cache && n[t]) return n[t];
            r || (r = document.createElement("canvas"));
            const i = r.getContext("2d");
            i.font = a;
            const o = i.measureText(t);
            return e.cache && (n[t] = o.width), o.width;
          };
        };
      function h() {
        const t = a.screen.getAllDisplays().map((t) => t.scaleFactor);
        return Math.max.apply(null, t);
      }
      const f = (t, e = 1) => {
        const r = h(),
          n = (0, i.Hv)(t, 72 * r * e);
        return Buffer.from(n.slice(22), "base64");
      };
      function p(t) {
        let e = parseInt(t);
        return Number.isInteger(e) ? e : 100;
      }
      function g(t) {
        return `${parseInt(t)}%`;
      }
      const m = (function () {
        let t = null;
        return function () {
          if (!t)
            if (window.screen.deviceXDPI && window.screen.deviceYDPI)
              t = { x: window.screen.deviceXDPI, y: window.screen.deviceYDPI };
            else {
              const e = document.createElement("div");
              (e.style.cssText =
                "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden"),
                document.body.appendChild(e),
                (t = {
                  x: parseInt(e.offsetWidth),
                  y: parseInt(e.offsetHeight),
                }),
                e.parentNode.removeChild(e);
            }
          return t;
        };
      })();
      function b(t, e) {
        let r = (0, c.f7)().keybindingByCommandIdAndGroup(e);
        const n = [];
        return (
          "string" == typeof r &&
            r.split("+").forEach((t) => {
              let e = t;
              "=" === e && (e = "+"), e && n.push(e);
            }),
          n.length > 0 ? `${t} ${n.join(" ")}` : t
        );
      }
      const x = (t, e) => {
          a.getCurrentWindow().setSize(t, e);
        },
        v = (t) => {
          const e = (t, ...e) => (0, c.JE)().T(t, ...e),
            r = a.Menu,
            i = a.MenuItem,
            o = new r();
          setTimeout(() => {
            const r = document.getSelection().toString(),
              s = n.clipboard.readText();
            o.append(
              new i({
                label: e("Cut"),
                enabled: Boolean(r),
                click: () => document.execCommand("cut"),
              }),
            ),
              o.append(
                new i({
                  label: e("Copy"),
                  enabled: Boolean(r),
                  click: () => document.execCommand("copy"),
                }),
              ),
              o.append(
                new i({
                  label: e("Paste"),
                  enabled: Boolean(s),
                  click: () => document.execCommand("paste"),
                }),
              ),
              o.append(new i({ type: "separator" })),
              o.append(
                new i({
                  label: e("Select All"),
                  enabled: Boolean(t),
                  click: () => document.execCommand("selectAll"),
                }),
              ),
              o.popup({ window: a.getCurrentWindow() });
          }, 50);
        };
      async function k() {
        await new Promise((t) =>
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              requestIdleCallback(t);
            });
          }),
        );
      }
      const y = (t, e) => s.Z.test({ width: t, height: e, sizes: [t, e] }),
        w = async (t, e, r = 1) => {
          if (y(t * r, e * r)) return r;
          const n = await s.Z.maxWidth({ usePromise: !0 }),
            a = await s.Z.maxHeight({ usePromise: !0 }),
            i = await s.Z.maxArea({ usePromise: !0 }),
            o = n.width,
            c = a.height,
            u = i.width * i.height;
          let l = r;
          if (t * r > o) {
            const e = o / t;
            l = Math.min(l, e);
          }
          if (e * r > c) {
            const t = c / e;
            l = Math.min(l, t);
          }
          if (t * r * e * r > u) {
            const r = Math.sqrt(u / (t * e));
            l = Math.min(l, r);
          }
          return l;
        };
    },
    72917: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => o });
      var n = r(2954),
        a = r(50965);
      const i = (0, n.aZ)({
        props: {
          value: { type: Boolean, default: !1 },
          textStyle: { type: String, default: "" },
        },
        setup(t, e) {
          const r = (0, n.Fl)(() => true);
          return {
            handleWatermarkClick: (t) => {
              return false;
            },
            handleWatermarkChange: (t) => {
              e.emit("toggle", t.target.checked);
            },
          };
        },
      });
      const o = (0, r(51900).Z)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          t._self._setupProxy;
          return e("div", { staticClass: "uk-form-controls" }, [
            e("label", { on: { click: t.handleWatermarkClick } }, [
              e("input", {
                staticClass: "uk-checkbox",
                attrs: { type: "checkbox" },
                domProps: { checked: t.value },
                on: { change: t.handleWatermarkChange },
              }),
              t._v(" "),
              e("span", { style: t.textStyle }, [
                t._v(t._s(t.$T('Show "Presented with xmind"'))),
              ]),
            ]),
          ]);
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
    },
    39405: (t, e, r) => {
      var n = r(83237);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals);
      (0, r(45346).Z)("50c68ef4", n, !0, {});
    },
    45346: (t, e, r) => {
      "use strict";
      function n(t, e) {
        for (var r = [], n = {}, a = 0; a < e.length; a++) {
          var i = e[a],
            o = i[0],
            s = { id: t + ":" + a, css: i[1], media: i[2], sourceMap: i[3] };
          n[o] ? n[o].parts.push(s) : r.push((n[o] = { id: o, parts: [s] }));
        }
        return r;
      }
      r.d(e, { Z: () => p });
      var a = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !a)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
        );
      var i = {},
        o = a && (document.head || document.getElementsByTagName("head")[0]),
        s = null,
        c = 0,
        u = !1,
        l = function () {},
        d = null,
        h = "data-vue-ssr-id",
        f =
          "undefined" != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function p(t, e, r, a) {
        (u = r), (d = a || {});
        var o = n(t, e);
        return (
          g(o),
          function (e) {
            for (var r = [], a = 0; a < o.length; a++) {
              var s = o[a];
              (c = i[s.id]).refs--, r.push(c);
            }
            e ? g((o = n(t, e))) : (o = []);
            for (a = 0; a < r.length; a++) {
              var c;
              if (0 === (c = r[a]).refs) {
                for (var u = 0; u < c.parts.length; u++) c.parts[u]();
                delete i[c.id];
              }
            }
          }
        );
      }
      function g(t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e],
            n = i[r.id];
          if (n) {
            n.refs++;
            for (var a = 0; a < n.parts.length; a++) n.parts[a](r.parts[a]);
            for (; a < r.parts.length; a++) n.parts.push(b(r.parts[a]));
            n.parts.length > r.parts.length &&
              (n.parts.length = r.parts.length);
          } else {
            var o = [];
            for (a = 0; a < r.parts.length; a++) o.push(b(r.parts[a]));
            i[r.id] = { id: r.id, refs: 1, parts: o };
          }
        }
      }
      function m() {
        var t = document.createElement("style");
        return (t.type = "text/css"), o.appendChild(t), t;
      }
      function b(t) {
        var e,
          r,
          n = document.querySelector("style[" + h + '~="' + t.id + '"]');
        if (n) {
          if (u) return l;
          n.parentNode.removeChild(n);
        }
        if (f) {
          var a = c++;
          (n = s || (s = m())),
            (e = k.bind(null, n, a, !1)),
            (r = k.bind(null, n, a, !0));
        } else
          (n = m()),
            (e = y.bind(null, n)),
            (r = function () {
              n.parentNode.removeChild(n);
            });
        return (
          e(t),
          function (n) {
            if (n) {
              if (
                n.css === t.css &&
                n.media === t.media &&
                n.sourceMap === t.sourceMap
              )
                return;
              e((t = n));
            } else r();
          }
        );
      }
      var x,
        v =
          ((x = []),
          function (t, e) {
            return (x[t] = e), x.filter(Boolean).join("\n");
          });
      function k(t, e, r, n) {
        var a = r ? "" : n.css;
        if (t.styleSheet) t.styleSheet.cssText = v(e, a);
        else {
          var i = document.createTextNode(a),
            o = t.childNodes;
          o[e] && t.removeChild(o[e]),
            o.length ? t.insertBefore(i, o[e]) : t.appendChild(i);
        }
      }
      function y(t, e) {
        var r = e.css,
          n = e.media,
          a = e.sourceMap;
        if (
          (n && t.setAttribute("media", n),
          d.ssrId && t.setAttribute(h, e.id),
          a &&
            ((r += "\n/*# sourceURL=" + a.sources[0] + " */"),
            (r +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
              " */")),
          t.styleSheet)
        )
          t.styleSheet.cssText = r;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(r));
        }
      }
    },
    6113: (t) => {
      "use strict";
      t.exports = require("crypto");
    },
    72298: (t) => {
      "use strict";
      t.exports = require("electron");
    },
    82361: (t) => {
      "use strict";
      t.exports = require("events");
    },
    57147: (t) => {
      "use strict";
      t.exports = require("fs");
    },
    22037: (t) => {
      "use strict";
      t.exports = require("os");
    },
    71017: (t) => {
      "use strict";
      t.exports = require("path");
    },
    63477: (t) => {
      "use strict";
      t.exports = require("querystring");
    },
    57310: (t) => {
      "use strict";
      t.exports = require("url");
    },
    73837: (t) => {
      "use strict";
      t.exports = require("util");
    },
    97234: (t, e, r) => {
      "use strict";
      function n(t) {
        return (
          (n =
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
          n(t)
        );
      }
      r.d(e, { Z: () => o });
      var a = /^\s+/,
        i = /\s+$/;
      function o(t, e) {
        if (((e = e || {}), (t = t || "") instanceof o)) return t;
        if (!(this instanceof o)) return new o(t, e);
        var r = (function (t) {
          var e = { r: 0, g: 0, b: 0 },
            r = 1,
            o = null,
            s = null,
            c = null,
            u = !1,
            l = !1;
          "string" == typeof t &&
            (t = (function (t) {
              t = t.replace(a, "").replace(i, "").toLowerCase();
              var e,
                r = !1;
              if (_[t]) (t = _[t]), (r = !0);
              else if ("transparent" == t)
                return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              if ((e = W.rgb.exec(t))) return { r: e[1], g: e[2], b: e[3] };
              if ((e = W.rgba.exec(t)))
                return { r: e[1], g: e[2], b: e[3], a: e[4] };
              if ((e = W.hsl.exec(t))) return { h: e[1], s: e[2], l: e[3] };
              if ((e = W.hsla.exec(t)))
                return { h: e[1], s: e[2], l: e[3], a: e[4] };
              if ((e = W.hsv.exec(t))) return { h: e[1], s: e[2], v: e[3] };
              if ((e = W.hsva.exec(t)))
                return { h: e[1], s: e[2], v: e[3], a: e[4] };
              if ((e = W.hex8.exec(t)))
                return {
                  r: R(e[1]),
                  g: R(e[2]),
                  b: R(e[3]),
                  a: I(e[4]),
                  format: r ? "name" : "hex8",
                };
              if ((e = W.hex6.exec(t)))
                return {
                  r: R(e[1]),
                  g: R(e[2]),
                  b: R(e[3]),
                  format: r ? "name" : "hex",
                };
              if ((e = W.hex4.exec(t)))
                return {
                  r: R(e[1] + "" + e[1]),
                  g: R(e[2] + "" + e[2]),
                  b: R(e[3] + "" + e[3]),
                  a: I(e[4] + "" + e[4]),
                  format: r ? "name" : "hex8",
                };
              if ((e = W.hex3.exec(t)))
                return {
                  r: R(e[1] + "" + e[1]),
                  g: R(e[2] + "" + e[2]),
                  b: R(e[3] + "" + e[3]),
                  format: r ? "name" : "hex",
                };
              return !1;
            })(t));
          "object" == n(t) &&
            ($(t.r) && $(t.g) && $(t.b)
              ? ((d = t.r),
                (h = t.g),
                (f = t.b),
                (e = {
                  r: 255 * A(d, 255),
                  g: 255 * A(h, 255),
                  b: 255 * A(f, 255),
                }),
                (u = !0),
                (l = "%" === String(t.r).substr(-1) ? "prgb" : "rgb"))
              : $(t.h) && $(t.s) && $(t.v)
                ? ((o = T(t.s)),
                  (s = T(t.v)),
                  (e = (function (t, e, r) {
                    (t = 6 * A(t, 360)), (e = A(e, 100)), (r = A(r, 100));
                    var n = Math.floor(t),
                      a = t - n,
                      i = r * (1 - e),
                      o = r * (1 - a * e),
                      s = r * (1 - (1 - a) * e),
                      c = n % 6,
                      u = [r, o, i, i, s, r][c],
                      l = [s, r, r, o, i, i][c],
                      d = [i, i, s, r, r, o][c];
                    return { r: 255 * u, g: 255 * l, b: 255 * d };
                  })(t.h, o, s)),
                  (u = !0),
                  (l = "hsv"))
                : $(t.h) &&
                  $(t.s) &&
                  $(t.l) &&
                  ((o = T(t.s)),
                  (c = T(t.l)),
                  (e = (function (t, e, r) {
                    var n, a, i;
                    function o(t, e, r) {
                      return (
                        r < 0 && (r += 1),
                        r > 1 && (r -= 1),
                        r < 1 / 6
                          ? t + 6 * (e - t) * r
                          : r < 0.5
                            ? e
                            : r < 2 / 3
                              ? t + (e - t) * (2 / 3 - r) * 6
                              : t
                      );
                    }
                    if (
                      ((t = A(t, 360)),
                      (e = A(e, 100)),
                      (r = A(r, 100)),
                      0 === e)
                    )
                      n = a = i = r;
                    else {
                      var s = r < 0.5 ? r * (1 + e) : r + e - r * e,
                        c = 2 * r - s;
                      (n = o(c, s, t + 1 / 3)),
                        (a = o(c, s, t)),
                        (i = o(c, s, t - 1 / 3));
                    }
                    return { r: 255 * n, g: 255 * a, b: 255 * i };
                  })(t.h, o, c)),
                  (u = !0),
                  (l = "hsl")),
            t.hasOwnProperty("a") && (r = t.a));
          var d, h, f;
          return (
            (r = S(r)),
            {
              ok: u,
              format: t.format || l,
              r: Math.min(255, Math.max(e.r, 0)),
              g: Math.min(255, Math.max(e.g, 0)),
              b: Math.min(255, Math.max(e.b, 0)),
              a: r,
            }
          );
        })(t);
        (this._originalInput = t),
          (this._r = r.r),
          (this._g = r.g),
          (this._b = r.b),
          (this._a = r.a),
          (this._roundA = Math.round(100 * this._a) / 100),
          (this._format = e.format || r.format),
          (this._gradientType = e.gradientType),
          this._r < 1 && (this._r = Math.round(this._r)),
          this._g < 1 && (this._g = Math.round(this._g)),
          this._b < 1 && (this._b = Math.round(this._b)),
          (this._ok = r.ok);
      }
      function s(t, e, r) {
        (t = A(t, 255)), (e = A(e, 255)), (r = A(r, 255));
        var n,
          a,
          i = Math.max(t, e, r),
          o = Math.min(t, e, r),
          s = (i + o) / 2;
        if (i == o) n = a = 0;
        else {
          var c = i - o;
          switch (((a = s > 0.5 ? c / (2 - i - o) : c / (i + o)), i)) {
            case t:
              n = (e - r) / c + (e < r ? 6 : 0);
              break;
            case e:
              n = (r - t) / c + 2;
              break;
            case r:
              n = (t - e) / c + 4;
          }
          n /= 6;
        }
        return { h: n, s: a, l: s };
      }
      function c(t, e, r) {
        (t = A(t, 255)), (e = A(e, 255)), (r = A(r, 255));
        var n,
          a,
          i = Math.max(t, e, r),
          o = Math.min(t, e, r),
          s = i,
          c = i - o;
        if (((a = 0 === i ? 0 : c / i), i == o)) n = 0;
        else {
          switch (i) {
            case t:
              n = (e - r) / c + (e < r ? 6 : 0);
              break;
            case e:
              n = (r - t) / c + 2;
              break;
            case r:
              n = (t - e) / c + 4;
          }
          n /= 6;
        }
        return { h: n, s: a, v: s };
      }
      function u(t, e, r, n) {
        var a = [
          E(Math.round(t).toString(16)),
          E(Math.round(e).toString(16)),
          E(Math.round(r).toString(16)),
        ];
        return n &&
          a[0].charAt(0) == a[0].charAt(1) &&
          a[1].charAt(0) == a[1].charAt(1) &&
          a[2].charAt(0) == a[2].charAt(1)
          ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0)
          : a.join("");
      }
      function l(t, e, r, n) {
        return [
          E(O(n)),
          E(Math.round(t).toString(16)),
          E(Math.round(e).toString(16)),
          E(Math.round(r).toString(16)),
        ].join("");
      }
      function d(t, e) {
        e = 0 === e ? 0 : e || 10;
        var r = o(t).toHsl();
        return (r.s -= e / 100), (r.s = M(r.s)), o(r);
      }
      function h(t, e) {
        e = 0 === e ? 0 : e || 10;
        var r = o(t).toHsl();
        return (r.s += e / 100), (r.s = M(r.s)), o(r);
      }
      function f(t) {
        return o(t).desaturate(100);
      }
      function p(t, e) {
        e = 0 === e ? 0 : e || 10;
        var r = o(t).toHsl();
        return (r.l += e / 100), (r.l = M(r.l)), o(r);
      }
      function g(t, e) {
        e = 0 === e ? 0 : e || 10;
        var r = o(t).toRgb();
        return (
          (r.r = Math.max(
            0,
            Math.min(255, r.r - Math.round((-e / 100) * 255)),
          )),
          (r.g = Math.max(
            0,
            Math.min(255, r.g - Math.round((-e / 100) * 255)),
          )),
          (r.b = Math.max(
            0,
            Math.min(255, r.b - Math.round((-e / 100) * 255)),
          )),
          o(r)
        );
      }
      function m(t, e) {
        e = 0 === e ? 0 : e || 10;
        var r = o(t).toHsl();
        return (r.l -= e / 100), (r.l = M(r.l)), o(r);
      }
      function b(t, e) {
        var r = o(t).toHsl(),
          n = (r.h + e) % 360;
        return (r.h = n < 0 ? 360 + n : n), o(r);
      }
      function x(t) {
        var e = o(t).toHsl();
        return (e.h = (e.h + 180) % 360), o(e);
      }
      function v(t, e) {
        if (isNaN(e) || e <= 0)
          throw new Error("Argument to polyad must be a positive number");
        for (var r = o(t).toHsl(), n = [o(t)], a = 360 / e, i = 1; i < e; i++)
          n.push(o({ h: (r.h + i * a) % 360, s: r.s, l: r.l }));
        return n;
      }
      function k(t) {
        var e = o(t).toHsl(),
          r = e.h;
        return [
          o(t),
          o({ h: (r + 72) % 360, s: e.s, l: e.l }),
          o({ h: (r + 216) % 360, s: e.s, l: e.l }),
        ];
      }
      function y(t, e, r) {
        (e = e || 6), (r = r || 30);
        var n = o(t).toHsl(),
          a = 360 / r,
          i = [o(t)];
        for (n.h = (n.h - ((a * e) >> 1) + 720) % 360; --e; )
          (n.h = (n.h + a) % 360), i.push(o(n));
        return i;
      }
      function w(t, e) {
        e = e || 6;
        for (
          var r = o(t).toHsv(), n = r.h, a = r.s, i = r.v, s = [], c = 1 / e;
          e--;

        )
          s.push(o({ h: n, s: a, v: i })), (i = (i + c) % 1);
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
          var t = this.toRgb();
          return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
        },
        getLuminance: function () {
          var t,
            e,
            r,
            n = this.toRgb();
          return (
            (t = n.r / 255),
            (e = n.g / 255),
            (r = n.b / 255),
            0.2126 *
              (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) +
              0.7152 *
                (e <= 0.03928
                  ? e / 12.92
                  : Math.pow((e + 0.055) / 1.055, 2.4)) +
              0.0722 *
                (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4))
          );
        },
        setAlpha: function (t) {
          return (
            (this._a = S(t)),
            (this._roundA = Math.round(100 * this._a) / 100),
            this
          );
        },
        toHsv: function () {
          var t = c(this._r, this._g, this._b);
          return { h: 360 * t.h, s: t.s, v: t.v, a: this._a };
        },
        toHsvString: function () {
          var t = c(this._r, this._g, this._b),
            e = Math.round(360 * t.h),
            r = Math.round(100 * t.s),
            n = Math.round(100 * t.v);
          return 1 == this._a
            ? "hsv(" + e + ", " + r + "%, " + n + "%)"
            : "hsva(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        },
        toHsl: function () {
          var t = s(this._r, this._g, this._b);
          return { h: 360 * t.h, s: t.s, l: t.l, a: this._a };
        },
        toHslString: function () {
          var t = s(this._r, this._g, this._b),
            e = Math.round(360 * t.h),
            r = Math.round(100 * t.s),
            n = Math.round(100 * t.l);
          return 1 == this._a
            ? "hsl(" + e + ", " + r + "%, " + n + "%)"
            : "hsla(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        },
        toHex: function (t) {
          return u(this._r, this._g, this._b, t);
        },
        toHexString: function (t) {
          return "#" + this.toHex(t);
        },
        toHex8: function (t) {
          return (function (t, e, r, n, a) {
            var i = [
              E(Math.round(t).toString(16)),
              E(Math.round(e).toString(16)),
              E(Math.round(r).toString(16)),
              E(O(n)),
            ];
            if (
              a &&
              i[0].charAt(0) == i[0].charAt(1) &&
              i[1].charAt(0) == i[1].charAt(1) &&
              i[2].charAt(0) == i[2].charAt(1) &&
              i[3].charAt(0) == i[3].charAt(1)
            )
              return (
                i[0].charAt(0) +
                i[1].charAt(0) +
                i[2].charAt(0) +
                i[3].charAt(0)
              );
            return i.join("");
          })(this._r, this._g, this._b, this._a, t);
        },
        toHex8String: function (t) {
          return "#" + this.toHex8(t);
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
            r: Math.round(100 * A(this._r, 255)) + "%",
            g: Math.round(100 * A(this._g, 255)) + "%",
            b: Math.round(100 * A(this._b, 255)) + "%",
            a: this._a,
          };
        },
        toPercentageRgbString: function () {
          return 1 == this._a
            ? "rgb(" +
                Math.round(100 * A(this._r, 255)) +
                "%, " +
                Math.round(100 * A(this._g, 255)) +
                "%, " +
                Math.round(100 * A(this._b, 255)) +
                "%)"
            : "rgba(" +
                Math.round(100 * A(this._r, 255)) +
                "%, " +
                Math.round(100 * A(this._g, 255)) +
                "%, " +
                Math.round(100 * A(this._b, 255)) +
                "%, " +
                this._roundA +
                ")";
        },
        toName: function () {
          return 0 === this._a
            ? "transparent"
            : !(this._a < 1) && (C[u(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (t) {
          var e = "#" + l(this._r, this._g, this._b, this._a),
            r = e,
            n = this._gradientType ? "GradientType = 1, " : "";
          if (t) {
            var a = o(t);
            r = "#" + l(a._r, a._g, a._b, a._a);
          }
          return (
            "progid:DXImageTransform.Microsoft.gradient(" +
            n +
            "startColorstr=" +
            e +
            ",endColorstr=" +
            r +
            ")"
          );
        },
        toString: function (t) {
          var e = !!t;
          t = t || this._format;
          var r = !1,
            n = this._a < 1 && this._a >= 0;
          return e ||
            !n ||
            ("hex" !== t &&
              "hex6" !== t &&
              "hex3" !== t &&
              "hex4" !== t &&
              "hex8" !== t &&
              "name" !== t)
            ? ("rgb" === t && (r = this.toRgbString()),
              "prgb" === t && (r = this.toPercentageRgbString()),
              ("hex" !== t && "hex6" !== t) || (r = this.toHexString()),
              "hex3" === t && (r = this.toHexString(!0)),
              "hex4" === t && (r = this.toHex8String(!0)),
              "hex8" === t && (r = this.toHex8String()),
              "name" === t && (r = this.toName()),
              "hsl" === t && (r = this.toHslString()),
              "hsv" === t && (r = this.toHsvString()),
              r || this.toHexString())
            : "name" === t && 0 === this._a
              ? this.toName()
              : this.toRgbString();
        },
        clone: function () {
          return o(this.toString());
        },
        _applyModification: function (t, e) {
          var r = t.apply(null, [this].concat([].slice.call(e)));
          return (
            (this._r = r._r),
            (this._g = r._g),
            (this._b = r._b),
            this.setAlpha(r._a),
            this
          );
        },
        lighten: function () {
          return this._applyModification(p, arguments);
        },
        brighten: function () {
          return this._applyModification(g, arguments);
        },
        darken: function () {
          return this._applyModification(m, arguments);
        },
        desaturate: function () {
          return this._applyModification(d, arguments);
        },
        saturate: function () {
          return this._applyModification(h, arguments);
        },
        greyscale: function () {
          return this._applyModification(f, arguments);
        },
        spin: function () {
          return this._applyModification(b, arguments);
        },
        _applyCombination: function (t, e) {
          return t.apply(null, [this].concat([].slice.call(e)));
        },
        analogous: function () {
          return this._applyCombination(y, arguments);
        },
        complement: function () {
          return this._applyCombination(x, arguments);
        },
        monochromatic: function () {
          return this._applyCombination(w, arguments);
        },
        splitcomplement: function () {
          return this._applyCombination(k, arguments);
        },
        triad: function () {
          return this._applyCombination(v, [3]);
        },
        tetrad: function () {
          return this._applyCombination(v, [4]);
        },
      }),
        (o.fromRatio = function (t, e) {
          if ("object" == n(t)) {
            var r = {};
            for (var a in t)
              t.hasOwnProperty(a) && (r[a] = "a" === a ? t[a] : T(t[a]));
            t = r;
          }
          return o(t, e);
        }),
        (o.equals = function (t, e) {
          return !(!t || !e) && o(t).toRgbString() == o(e).toRgbString();
        }),
        (o.random = function () {
          return o.fromRatio({
            r: Math.random(),
            g: Math.random(),
            b: Math.random(),
          });
        }),
        (o.mix = function (t, e, r) {
          r = 0 === r ? 0 : r || 50;
          var n = o(t).toRgb(),
            a = o(e).toRgb(),
            i = r / 100;
          return o({
            r: (a.r - n.r) * i + n.r,
            g: (a.g - n.g) * i + n.g,
            b: (a.b - n.b) * i + n.b,
            a: (a.a - n.a) * i + n.a,
          });
        }),
        (o.readability = function (t, e) {
          var r = o(t),
            n = o(e);
          return (
            (Math.max(r.getLuminance(), n.getLuminance()) + 0.05) /
            (Math.min(r.getLuminance(), n.getLuminance()) + 0.05)
          );
        }),
        (o.isReadable = function (t, e, r) {
          var n,
            a,
            i = o.readability(t, e);
          switch (
            ((a = !1),
            (n = (function (t) {
              var e, r;
              (e = (
                (t = t || { level: "AA", size: "small" }).level || "AA"
              ).toUpperCase()),
                (r = (t.size || "small").toLowerCase()),
                "AA" !== e && "AAA" !== e && (e = "AA");
              "small" !== r && "large" !== r && (r = "small");
              return { level: e, size: r };
            })(r)).level + n.size)
          ) {
            case "AAsmall":
            case "AAAlarge":
              a = i >= 4.5;
              break;
            case "AAlarge":
              a = i >= 3;
              break;
            case "AAAsmall":
              a = i >= 7;
          }
          return a;
        }),
        (o.mostReadable = function (t, e, r) {
          var n,
            a,
            i,
            s,
            c = null,
            u = 0;
          (a = (r = r || {}).includeFallbackColors),
            (i = r.level),
            (s = r.size);
          for (var l = 0; l < e.length; l++)
            (n = o.readability(t, e[l])) > u && ((u = n), (c = o(e[l])));
          return o.isReadable(t, c, { level: i, size: s }) || !a
            ? c
            : ((r.includeFallbackColors = !1),
              o.mostReadable(t, ["#fff", "#000"], r));
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
        C = (o.hexNames = (function (t) {
          var e = {};
          for (var r in t) t.hasOwnProperty(r) && (e[t[r]] = r);
          return e;
        })(_));
      function S(t) {
        return (t = parseFloat(t)), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
      }
      function A(t, e) {
        (function (t) {
          return (
            "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
          );
        })(t) && (t = "100%");
        var r = (function (t) {
          return "string" == typeof t && -1 != t.indexOf("%");
        })(t);
        return (
          (t = Math.min(e, Math.max(0, parseFloat(t)))),
          r && (t = parseInt(t * e, 10) / 100),
          Math.abs(t - e) < 1e-6 ? 1 : (t % e) / parseFloat(e)
        );
      }
      function M(t) {
        return Math.min(1, Math.max(0, t));
      }
      function R(t) {
        return parseInt(t, 16);
      }
      function E(t) {
        return 1 == t.length ? "0" + t : "" + t;
      }
      function T(t) {
        return t <= 1 && (t = 100 * t + "%"), t;
      }
      function O(t) {
        return Math.round(255 * parseFloat(t)).toString(16);
      }
      function I(t) {
        return R(t) / 255;
      }
      var B,
        F,
        P,
        W =
          ((F =
            "[\\s|\\(]+(" +
            (B = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") +
            ")[,|\\s]+(" +
            B +
            ")[,|\\s]+(" +
            B +
            ")\\s*\\)?"),
          (P =
            "[\\s|\\(]+(" +
            B +
            ")[,|\\s]+(" +
            B +
            ")[,|\\s]+(" +
            B +
            ")[,|\\s]+(" +
            B +
            ")\\s*\\)?"),
          {
            CSS_UNIT: new RegExp(B),
            rgb: new RegExp("rgb" + F),
            rgba: new RegExp("rgba" + P),
            hsl: new RegExp("hsl" + F),
            hsla: new RegExp("hsla" + P),
            hsv: new RegExp("hsv" + F),
            hsva: new RegExp("hsva" + P),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          });
      function $(t) {
        return !!W.CSS_UNIT.exec(t);
      }
    },
  },
  (t) => {
    t.O(0, [2768, 1505], () => {
      return (e = 37391), t((t.s = e));
      var e;
    });
    var e = t.O();
    module.exports = e;
  },
]);
