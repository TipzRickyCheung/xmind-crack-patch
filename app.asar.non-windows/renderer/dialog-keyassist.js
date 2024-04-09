(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [6454],
  {
    64399: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var a = o(23645),
        n = o.n(a)()(function (e) {
          return e[1];
        });
      n.push([
        e.id,
        ".customize-icon[data-v-bb495c7c] {\n  height: 24px;\n  width: 24px;\n  position: absolute;\n  right: 14px;\n  top: 18px;\n}\n.empty-block[data-v-bb495c7c] {\n  line-height: 27px;\n}\n.symbol-block[data-v-bb495c7c] {\n  min-width: 19px;\n  justify-content: center;\n}\n.uk-fieldset > div:not(:first-child) > .shortcut-group[data-v-bb495c7c] {\n  padding-top: 16px;\n}\n",
        "",
      ]);
      const r = n;
    },
    26271: (e, t, o) => {
      "use strict";
      o.r(t);
      var a = o(51505),
        n = o(77412),
        r = o(23279),
        i = o.n(r),
        l = o(57557),
        c = o.n(l),
        s = o(63477),
        d = o.n(s),
        u = o(92636),
        m = o(58659),
        p = o(54856),
        g = o(90435),
        b = o(85786),
        y = o(1169),
        h = o(60534),
        I = o(50965);
      const W = [
          { commandId: "editor.moveSelection", accelerator: "Arrow" },
          { commandId: "switchBetweenXMindWindows", accelerator: "Command+`" },
          { commandId: "closeAllWindows", accelerator: "Command+Q" },
          { commandId: "editor.editTopicText", accelerator: "Space" },
          { commandId: "editor.enterLineBreak", accelerator: "Shift+Enter" },
          {
            commandId: "editor.moveToBeginningOfText",
            accelerator: "CmdOrCtrl+Left",
          },
          {
            commandId: "editor.moveToEndOfText",
            accelerator: "CmdOrCtrl+Right",
          },
          {
            commandId: "editor.selectMultipleTopics",
            accelerator: "Shift+Arrow",
          },
          { commandId: "editor.moveTopicUp", accelerator: "Alt+Up" },
          { commandId: "editor.moveTopicDown", accelerator: "Alt+Down" },
          {
            commandId: "editor.markPriorityByNumber",
            accelerator: "CmdOrCtrl+1~7",
          },
          {
            commandId: "editor.toggleBranchByNumber",
            accelerator: "Alt+CmdOrCtrl+1~9",
          },
        ].filter(Boolean),
        S = d().parse(window.location.search.slice(1)),
        Z = {
          components: { CommonNonePanel: h.Z },
          data() {
            return {
              isMac: "darwin" === (0, b.Xf)(),
              activeTab: "",
              inputedShortcutName: "",
              selectedGroup: "",
              searchedShortcutGroups: {},
              EDITOR_MODE_SNOWBRUSH: u.hO,
              EDITOR_MODE_OUTLINER: u.Pq,
              PITCH_MODE_KEY: "pitch",
              customizeImageURL: this.$toResourceURL(
                "static/assets/images/icon-keyassist-gear.svg",
              ),
            };
          },
          computed: {
            ...(0, n.rn)(I.f7, { groups: (e) => e.groups }),
            appearance: () => (0, I.S)().appearance,
            allGroupOption() {
              return this.$T("All");
            },
            searchIconImage() {
              return this.$toResourceURL(
                "/static/images/navigation-panel/searchbar-search.svg",
              );
            },
            keyData() {
              let e = { [this.allGroupOption]: {} };
              return this.activeTab === this.PITCH_MODE_KEY
                ? (y.qr.forEach((t) => {
                    (e[t.category] = e[t.category] || {}),
                      (e[t.category][t.commandId] = {
                        ...t,
                        label: this.$T("$$", t.label),
                        accelerator: t.accelerator.filter((e) => "+" !== e),
                      });
                  }),
                  e)
                : (y.ed
                    .filter(
                      (e) =>
                        !!e &&
                        (this.activeTab === u.Pq
                          ? e.groupName === u.Pq || e.isSupportedInOutliner
                          : !e.groupName),
                    )
                    .map((t) => {
                      e[t.category] || (e[t.category] = {});
                      let o = (0, I.f7)().keybindingByCommandIdAndGroup(
                        t.commandId,
                        t.groupName,
                      );
                      const a = W.find(({ commandId: e }) => e === t.commandId);
                      a && (o = (0, m.xr)((0, m.sn)(a.accelerator))),
                        (e[t.category][t.commandId] = {
                          ...t,
                          label: t.getLabel
                            ? t.getLabel(this.$T)
                            : this.$T("$$", t.label),
                          accelerator: o ? o.split("+") : [],
                        });
                    }),
                  e);
            },
            activeTabIndex() {
              return [u.hO, u.Pq].indexOf(this.activeTab);
            },
          },
          mounted() {
            (this.activeTab = S.editorMode || u.hO),
              (this.selectedGroup = this.allGroupOption),
              (this.searchedShortcutGroups = {
                ...c()(this.keyData, this.allGroupOption),
              }),
              this.$nextTick(() => {
                this.$refs.searchInput.focus();
              });
          },
          watch: {
            inputedShortcutName: i()(function () {
              this.searchShortcutsByGroup();
            }, 200),
            activeTab() {
              this.searchShortcutsByGroup();
            },
            groups: {
              handler() {
                this.searchShortcutsByGroup();
              },
              deep: !0,
            },
          },
          methods: {
            close() {
              "function" == typeof window.close && window.close();
            },
            openCustomizeShortcut() {
              this.$safeRun(async () => {
                await g.ZP.fetch(p.Fx, {
                  name: "preferences",
                  query: { tab: "shortcuts" },
                });
              });
            },
            displaySymbol(e) {
              let t = e;
              return (
                this.isMac && (t = u.Vl[e] || e),
                "string" == typeof t && (t = t.replace("=", "+")),
                t
              );
            },
            onActiveTabChange(e) {
              (this.activeTab = e),
                this.onSelectedGroupChange(this.allGroupOption),
                this.$refs.shortcutContainerRef.scrollTo({ top: 0, left: 0 });
            },
            onSelectedGroupChange(e) {
              (this.selectedGroup = e), this.searchShortcutsByGroup();
            },
            searchShortcutsByGroup() {
              const e =
                  this.selectedGroup === this.allGroupOption
                    ? this.keyData
                    : {
                        [this.selectedGroup]: this.keyData[this.selectedGroup],
                      },
                t = this.inputedShortcutName.replace(
                  /[-\\{}*+?|^$.[\]()#]/g,
                  "\\$&",
                ),
                o = new RegExp(t, "i"),
                a = {};
              for (const t in e) {
                const n = e[t],
                  r = {};
                for (const e in n) o.test(n[e].label) && (r[e] = n[e]);
                Object.keys(r).length && (a[t] = r);
              }
              this.searchedShortcutGroups = { ...a };
            },
          },
        };
      o(45692);
      const T = (0, o(51900).Z)(
        Z,
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            { staticClass: "uk-window uk-window-dialog", attrs: { id: "app" } },
            [
              t(
                "div",
                { staticClass: "uk-window-title-bar" },
                [
                  t("div", { staticClass: "uk-window-title" }, [
                    e._v("\n      " + e._s(e.$T("Key Assist")) + "\n    "),
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
                  staticClass:
                    "uk-window-body uk-flex uk-flex-column uk-position-relative",
                },
                [
                  t(
                    "ul",
                    {
                      staticClass:
                        "uk-tab uk-tab-large uk-flex-center uk-tab-capsule uk-margin-remove",
                      staticStyle: { "padding-top": "16px" },
                    },
                    [
                      t(
                        "li",
                        {
                          class: {
                            "uk-active":
                              e.activeTab === e.EDITOR_MODE_SNOWBRUSH,
                          },
                        },
                        [
                          t(
                            "a",
                            {
                              attrs: { draggable: "false", href: "#" },
                              on: {
                                click: function (t) {
                                  return e.onActiveTabChange(
                                    e.EDITOR_MODE_SNOWBRUSH,
                                  );
                                },
                              },
                            },
                            [
                              e._v(
                                "\n          " +
                                  e._s(e.$T("Mind Map")) +
                                  "\n        ",
                              ),
                            ],
                          ),
                        ],
                      ),
                      e._v(" "),
                      t(
                        "li",
                        {
                          class: {
                            "uk-active": e.activeTab === e.EDITOR_MODE_OUTLINER,
                          },
                        },
                        [
                          t(
                            "a",
                            {
                              attrs: { draggable: "false", href: "#" },
                              on: {
                                click: function (t) {
                                  return e.onActiveTabChange(
                                    e.EDITOR_MODE_OUTLINER,
                                  );
                                },
                              },
                            },
                            [
                              e._v(
                                "\n          " +
                                  e._s(e.$T("Outliner")) +
                                  "\n        ",
                              ),
                            ],
                          ),
                        ],
                      ),
                      e._v(" "),
                      t(
                        "li",
                        {
                          class: {
                            "uk-active": e.activeTab === e.PITCH_MODE_KEY,
                          },
                        },
                        [
                          t(
                            "a",
                            {
                              attrs: { draggable: "false", href: "#" },
                              on: {
                                click: function (t) {
                                  return e.onActiveTabChange(e.PITCH_MODE_KEY);
                                },
                              },
                            },
                            [
                              e._v(
                                "\n          " +
                                  e._s(e.$T("Pitch")) +
                                  "\n        ",
                              ),
                            ],
                          ),
                        ],
                      ),
                    ],
                  ),
                  e._v(" "),
                  t(
                    "button",
                    {
                      staticClass:
                        "uk-button uk-button-tile uk-button-icon customize-icon",
                      on: { click: e.openCustomizeShortcut },
                    },
                    [
                      t("div", {
                        staticStyle: { "vertical-align": "1px" },
                        attrs: {
                          "data-src": e.customizeImageURL,
                          "uk-svg": "",
                        },
                      }),
                    ],
                  ),
                  e._v(" "),
                  t(
                    "div",
                    {
                      staticClass:
                        "uk-flex uk-flex-row uk-padding uk-padding-remove-bottom",
                    },
                    [
                      t("div", { staticClass: "uk-width-1-3" }, [
                        t(
                          "button",
                          {
                            staticClass:
                              "uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left",
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$T("$$", e.selectedGroup)) +
                                "\n        ",
                            ),
                          ],
                        ),
                        e._v(" "),
                        t(
                          "div",
                          {
                            ref: "popover",
                            staticClass: "uk-popover-contextual",
                            staticStyle: { width: "220px" },
                            attrs: {
                              "uk-contextual-popover": "",
                              "data-sel-close": "[uk-menu] > li > button",
                            },
                          },
                          [
                            t(
                              "ul",
                              {
                                staticClass: "uk-height-1-1",
                                attrs: { "uk-menu": "" },
                              },
                              e._l(e.keyData, function (o, a) {
                                return t(
                                  "li",
                                  {
                                    key: a,
                                    staticStyle: { "white-space": "nowrap" },
                                  },
                                  [
                                    t(
                                      "button",
                                      {
                                        class: {
                                          "uk-checked": e.selectedGroup === a,
                                        },
                                        attrs: {
                                          autofocus: e.selectedGroup === a,
                                        },
                                        on: {
                                          click: function (t) {
                                            return e.onSelectedGroupChange(a);
                                          },
                                        },
                                      },
                                      [t("span", [e._v(e._s(e.$T("$$", a)))])],
                                    ),
                                  ],
                                );
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
                            staticStyle: { top: "5px", left: "4px" },
                            attrs: {
                              draggable: "false",
                              src: e.searchIconImage,
                              "uk-svg": "",
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
                            staticClass: "uk-flex uk-input uk-search-input",
                            staticStyle: { "padding-left": "20px" },
                            attrs: {
                              autofocus: "true",
                              "uk-icon": "icon: search; ratio: 3",
                              placeholder: e.$T("Search shortcuts"),
                            },
                            domProps: { value: e.inputedShortcutName },
                            on: {
                              input: function (t) {
                                t.target.composing ||
                                  (e.inputedShortcutName = t.target.value);
                              },
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                  e._v(" "),
                  t(
                    "ul",
                    {
                      ref: "shortcutContainerRef",
                      staticClass:
                        "uk-switcher uk-height-expand uk-flex uk-flex-column uk-margin",
                    },
                    [
                      t(
                        "li",
                        {
                          staticClass:
                            "uk-panel uk-padding uk-height-expand uk-active uk-padding-remove-top uk-padding-remove-bottom",
                          staticStyle: { "margin-bottom": "36px" },
                        },
                        [
                          t("div", { staticClass: "uk-height-1-1" }, [
                            t(
                              "div",
                              {
                                staticClass: "uk-fieldset uk-overflow-auto",
                                staticStyle: { height: "100%" },
                              },
                              [
                                e._l(
                                  e.searchedShortcutGroups,
                                  function (o, a, n) {
                                    return t("div", { key: a }, [
                                      t(
                                        "div",
                                        { staticClass: "shortcut-group" },
                                        [
                                          t("h1", [
                                            e._v(
                                              "\n                  " +
                                                e._s(e.$T("$$", a)) +
                                                "\n                ",
                                            ),
                                          ]),
                                          e._v(" "),
                                          e._l(o, function (o) {
                                            return t(
                                              "div",
                                              {
                                                key: o.commandId,
                                                staticClass:
                                                  "uk-flex uk-flex-between uk-flex-middle uk-margin-small",
                                                class: {
                                                  "empty-block":
                                                    !o.accelerator.length,
                                                },
                                              },
                                              [
                                                t(
                                                  "div",
                                                  {
                                                    staticClass: "uk-text-left",
                                                  },
                                                  [
                                                    e._v(
                                                      "\n                    " +
                                                        e._s(o.label) +
                                                        "\n                  ",
                                                    ),
                                                  ],
                                                ),
                                                e._v(" "),
                                                o.accelerator.length
                                                  ? t(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "uk-flex uk-flex-middle",
                                                      },
                                                      e._l(
                                                        o.accelerator,
                                                        function (a, n) {
                                                          return t(
                                                            "div",
                                                            {
                                                              key: n,
                                                              staticClass:
                                                                "uk-flex uk-flex-middle",
                                                            },
                                                            [
                                                              e.isMac ||
                                                              !n ||
                                                              o.accelerator
                                                                .slice(
                                                                  n - 1,
                                                                  n + 1,
                                                                )
                                                                .includes("||")
                                                                ? e._e()
                                                                : t(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "uk-flex uk-margin-xsmall-left uk-margin-xsmall-right",
                                                                    },
                                                                    [
                                                                      e._v(
                                                                        "\n                        +\n                      ",
                                                                      ),
                                                                    ],
                                                                  ),
                                                              e._v(" "),
                                                              [
                                                                "||" === a
                                                                  ? t(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "uk-text-muted",
                                                                        style: {
                                                                          width: 0,
                                                                          marginLeft:
                                                                            "-5px",
                                                                        },
                                                                      },
                                                                      [
                                                                        e._v(
                                                                          "\n                          ,\n                        ",
                                                                        ),
                                                                      ],
                                                                    )
                                                                  : t(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "uk-flex uk-border-rounded uk-flex uk-padding-xsmall symbol-block",
                                                                        class: {
                                                                          "uk-margin-small-right":
                                                                            n <
                                                                            o
                                                                              .accelerator
                                                                              .length -
                                                                              1,
                                                                        },
                                                                        style: {
                                                                          "background-color":
                                                                            "dark" ===
                                                                            e.appearance
                                                                              ? "rgba(255, 255, 255, 0.1)"
                                                                              : "rgba(0, 0, 0, 0.05)",
                                                                        },
                                                                      },
                                                                      [
                                                                        e._v(
                                                                          "\n                          " +
                                                                            e._s(
                                                                              e.displaySymbol(
                                                                                a,
                                                                              ),
                                                                            ) +
                                                                            "\n                        ",
                                                                        ),
                                                                      ],
                                                                    ),
                                                              ],
                                                            ],
                                                            2,
                                                          );
                                                        },
                                                      ),
                                                      0,
                                                    )
                                                  : e._e(),
                                              ],
                                            );
                                          }),
                                        ],
                                        2,
                                      ),
                                      e._v(" "),
                                      n + 1 <
                                      Object.keys(e.searchedShortcutGroups)
                                        .length
                                        ? t("hr", {
                                            staticClass:
                                              "uk-margin-remove-top uk-margin-remove-bottom",
                                          })
                                        : e._e(),
                                    ]);
                                  },
                                ),
                                e._v(" "),
                                Object.keys(e.searchedShortcutGroups).length
                                  ? e._e()
                                  : t(
                                      "div",
                                      { staticClass: "uk-flex uk-height-1-1" },
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
                          ]),
                        ],
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
        "bb495c7c",
        null,
      ).exports;
      (0, a.Z)(T, { name: "dialog-keyassist" });
    },
    13382: (e, t, o) => {
      "use strict";
      o.d(t, {
        G$: () => f,
        N0: () => y,
        Pg: () => O,
        R2: () => T,
        W5: () => Z,
        ZZ: () => I,
        am: () => S,
        eq: () => W,
        yr: () => k,
      });
      var a = o(71017),
        n = o.n(a),
        r = o(67657),
        i = o(7104),
        l = o(86633),
        c = o(33394),
        s = o(94593),
        d = o(90435),
        u = o(54856),
        m = o(5893),
        p = o(50965),
        g = o(92636);
      const b = (0, l.ZP)("dialog");
      async function y(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = n().join((0, i.bY)(), e.icon));
        const t = r.BrowserWindow.fromId(window.id);
        return [r.dialog.showMessageBoxSync(t, e)];
      }
      async function h(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = n().join((0, i.bY)(), e.icon));
        const t = r.BrowserWindow.fromId(window.id),
          { response: o, checkboxChecked: a } = await r.dialog.showMessageBox(
            t,
            e,
          );
        return [o, a];
      }
      async function I(e) {
        (e = Object.assign({ securityScopedBookmarks: !0 }, e || {}))
          .suggestPath &&
          !e.defaultPath &&
          ((e.defaultPath = S(e.suggestPath, e.filters)), delete e.suggestPath);
        const {
          canceled: t,
          filePath: o,
          bookmark: a,
        } = await r.dialog.showSaveDialog(r.getCurrentWindow(), e);
        return t
          ? null
          : (o && a && (await c.Z.bindBookmark({ fp: o, bookmark: a })),
            o && (0, p.km)().setLastSaveDirectory(n().dirname(o)),
            o);
      }
      async function W({ folderName: e, dialogOptions: t }) {
        let o = "";
        (t = Object.assign({ securityScopedBookmarks: !0 }, t || {}))
          .defaultPath || (t.defaultPath = S({}));
        const {
          canceled: a,
          filePaths: i,
          bookmark: l,
        } = await r.dialog.showOpenDialog(r.getCurrentWindow(), t);
        if (a) return null;
        if (
          ((o = i[0]),
          i.length > 0 && l && (await c.Z.bindBookmark({ fp: o, bookmark: l })),
          "string" == typeof e)
        ) {
          let t = e.replace(/[\\/]/g, "");
          0, (o = n().join(o, t));
        }
        return (
          s.Z.existsSync(o) || s.Z.ensureDir(o),
          o && (0, p.km)().setLastSaveDirectory(o),
          o
        );
      }
      function S(
        { doc: e = null, oldDoc: t = null, suggestedName: o = null },
        a = null,
      ) {
        let i, l;
        if (
          (!i && o && (i = (0, m.N6)(o.toString())),
          !i &&
            e &&
            e.title &&
            e.source &&
            !e.source.startsWith("new://") &&
            (i = (0, m.N6)(e.title.toString())),
          !i &&
            t &&
            t.title &&
            t.source &&
            !t.source.startsWith("new://") &&
            (i = (0, m.N6)(t.title.toString())),
          i && Array.isArray(a))
        ) {
          const e = a[0] && a[0].extensions;
          Array.isArray(e) && e.length > 0 && (i = `${i}.${e[0]}`);
        }
        if (!l && t && t.source && t.source.startsWith("file://")) {
          let e = t.source.slice(7);
          0, (l = n().dirname(e));
        }
        if (
          (!l &&
            (0, p.km)().lastSaveDirectory &&
            (l = (0, p.km)().lastSaveDirectory),
          !l)
        )
          try {
            l = r.app.getPath("documents");
          } catch (e) {
            b.info(e);
          }
        return l && i ? n().join(l, i) : l || i;
      }
      async function Z(e) {
        e.$withUIKit((t) => {
          const o = `\n        <button\n        class="uk-button uk-button-text uk-text-nowrap"\n        style="word-break: keep-all;"\n        focustrigger="cannotGetFocusByMouse">\n          ${e.$T("OK")}\n        </button>\n        </div>`;
          t.toast({
            message: e.$T(
              "The map style has been updated for your current version of Xmind.",
            ),
            pos: "bottom-center",
            timeout: 5e3,
            btn: o,
            style: { width: "500px", height: "auto", padding: "10px 20px" },
            btnClick: t.toast.clearAll(),
          });
        });
      }
      async function T(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("OK"),
          o = e("Get Latest Version"),
          a = [t, o],
          [n] = await h({
            title: "Xmind",
            message: e(
              "The map style in this file might vary since it was created in a newer version of Xmind.",
            ),
            detail: e(
              "You can continue to open the file or update to the latest version for better compatibility.",
            ),
            buttons: a,
            defaultId: a.indexOf(o),
            cancelId: a.indexOf(t),
            noLink: !0,
          });
        n === a.indexOf(o) && d.ZP.fetch(u.lf.GO_DOWNLOAD);
      }
      async function f(e) {
        if (((e = "function" != typeof e ? (e) => e : e), g.zr))
          return await h({
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
          o = e("Get Latest Version"),
          a = [o, t],
          [n] = await h({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file was created by a newer version of Xmind. Please update Xmind and try to open it again.",
            ),
            buttons: a,
            defaultId: a.indexOf(o),
            cancelId: a.indexOf(t),
            noLink: !0,
          });
        n === a.indexOf(o) && d.ZP.fetch(u.lf.GO_DOWNLOAD);
      }
      async function k(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Save"),
          o = e("Save as"),
          a = e("Cancel"),
          n = [];
        n.push(t, a, o);
        let [r] = await h({
          type: "none",
          title: "Xmind",
          message: e("Saving file from Xmind"),
          detail: e(
            "Once you save the file, it cannot be opened normally in older versions like $1.",
            "Xmind 22.11",
          ),
          buttons: n,
          defaultId: n.indexOf(o),
          cancelId: n.indexOf(a),
          noLink: !0,
        });
        const i = r === n.indexOf(t),
          l = r === n.indexOf(o);
        return { toSave: i, toSaveAs: l, toCancel: !i && !l };
      }
      async function O(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Fix ＆ Open"),
          o = e("Cancel"),
          a = [t, o],
          [n] = await h({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file may contain invalid data structure or have become corrupted. Xmind can try to fix the data structure to help you open it.",
            ),
            buttons: a,
            defaultId: a.indexOf(t),
            cancelId: a.indexOf(o),
            noLink: !0,
          });
        return { toFix: n === a.indexOf(t), toCancel: n === a.indexOf(o) };
      }
    },
    33394: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => g });
      var a = o(57147),
        n = o.n(a),
        r = o(71017),
        i = o.n(r),
        l = o(73837),
        c = o(86633),
        s = o(16704),
        d = o(56222);
      const u = (0, c.ZP)("renderer:fs");
      async function m(e) {
        return (0, d.A)("OBTAIN_READ_WRITE_ACCESS", e);
      }
      async function p(e) {
        return (0, d.A)("RELEASE_READ_WRITE_ACCESS", e);
      }
      const g = {
        read: async function (e) {
          if (!i().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const t = await (async function (e) {
            return (0, d.A)("OBTAIN_READ_LOCK", e);
          })(e);
          try {
            return await (0, l.promisify)(n().readFile)(e);
          } catch (t) {
            u.error(`path(${e}) read error: ${(0, s.SC)(t)}`);
            try {
              if (!(await m(e))) throw new Error(`No access to '${e}'`);
              return await (0, l.promisify)(n().readFile)(e);
            } catch (e) {
              throw e;
            } finally {
              await p(e);
            }
          } finally {
            await (async function (e) {
              return (0, d.A)("RELEASE_READ_LOCK", e);
            })(t);
          }
        },
        write: async function (e, t) {
          if (!i().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const o = await (async function (e) {
            return (0, d.A)("OBTAIN_WRITE_LOCK", e);
          })(e);
          try {
            return await (0, l.promisify)(n().writeFile)(e, t);
          } catch (o) {
            u.error(`path(${e}) write error: ${(0, s.SC)(o)}`);
            try {
              if (!(await m(e))) throw new Error(`No access to '${e}'`);
              return await (0, l.promisify)(n().writeFile)(e, t);
            } catch (e) {
              throw e;
            } finally {
              await p(e);
            }
          } finally {
            await (async function (e) {
              return (0, d.A)("RELEASE_WRITE_LOCK", e);
            })(o);
          }
        },
        bindBookmark: async function ({ fp: e, bookmark: t } = {}) {
          return (0, d.A)("BIND_BOOKMARK", { fp: e, bookmark: t });
        },
        hasRWAccess: async function (e) {
          return (0, d.A)("HAS_READ_WRITE_ACCESS", e);
        },
        obtainRWAccessFromOS: m,
        releaseRWAccessFromOS: p,
      };
    },
    85786: (e, t, o) => {
      "use strict";
      o.d(t, { DL: () => u, Xf: () => s, Yv: () => d, vQ: () => m });
      var a = o(22037),
        n = o.n(a),
        r = o(57310),
        i = o.n(r),
        l = o(72298),
        c = o(13382);
      function s() {
        return "linux";
      }
      function d() {
        return {
          platform: n().platform(),
          arch: n().arch(),
          release: n().release(),
        };
      }
      function u(e, t) {
        const o = i().parse(e).protocol,
          a = t || ((e) => e);
        l.shell.openExternal(o ? e : `http://${e}`).catch(() => {
          (0, c.N0)({
            title: "Xmind",
            message: a("Unable to open link."),
            detail: a(
              "This link is invalid and cannot be opened through browser.",
            ),
            buttons: [a("OK")],
          });
        });
      }
      function m(e) {
        l.clipboard.writeText(e);
      }
    },
    1169: (e, t, o) => {
      "use strict";
      o.d(t, { ed: () => n, qr: () => r, ys: () => i });
      var a = o(16704);
      const n = [
          {
            commandId: "new",
            label: (0, a.WZ)("New Blank Map"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "newFromTemplate",
            label: (0, a.WZ)("New"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "newFromLibrary",
            label: (0, a.WZ)("New From Library"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "open",
            label: (0, a.WZ)("Open"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "save",
            label: (0, a.WZ)("Save"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "saveAs",
            label: (0, a.WZ)("Save As"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "print",
            label: (0, a.WZ)("Print"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "closeSimpleWindow",
            label: (0, a.WZ)("Close Window/Tab"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          null,
          null,
          {
            commandId: "mergeAllWindows",
            label: (0, a.WZ)("Merge All Windows"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addSheet",
            label: (0, a.WZ)("New Sheet"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.newSheetFromTopic",
            label: (0, a.WZ)("New Sheet From Topic"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.previousSheet",
            label: (0, a.WZ)("Previous Sheet"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.nextSheet",
            label: (0, a.WZ)("Next Sheet"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "frame.addNewTab",
            label: (0, a.WZ)("New Tab"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "frame.previousTab",
            label: (0, a.WZ)("Previous Tab"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "frame.nextTab",
            label: (0, a.WZ)("Next Tab"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "undo",
            label: (0, a.WZ)("Undo"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "redo",
            label: (0, a.WZ)("Redo"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "cut",
            label: (0, a.WZ)("Cut"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "copy",
            label: (0, a.WZ)("Copy"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "paste",
            label: (0, a.WZ)("Paste"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "duplicate",
            label: (0, a.WZ)("Duplicate"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.copyStyle",
            label: (0, a.WZ)("Copy Style"),
            category: (0, a.WZ)("General"),
          },
          {
            commandId: "editor.pasteStyle",
            label: (0, a.WZ)("Paste Style"),
            category: (0, a.WZ)("General"),
          },
          {
            commandId: "editor.resetStyle",
            label: (0, a.WZ)("Reset Style"),
            category: (0, a.WZ)("General"),
          },
          {
            commandId: "delete",
            label: (0, a.WZ)("Delete"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "deleteSingleTopic",
            label: (0, a.WZ)("Delete Single Topic"),
            category: (0, a.WZ)("General"),
          },
          {
            commandId: "selectAll",
            label: (0, a.WZ)("Select All"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleFindAndReplace",
            label: (0, a.WZ)("Find & Replace"),
            category: (0, a.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addSubTopic",
            label: (0, a.WZ)("Subtopic"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            fixed: !0,
          },
          {
            commandId: "editor.addTopic",
            label: (0, a.WZ)("Topic After"),
            category: (0, a.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addTopicBefore",
            label: (0, a.WZ)("Topic Before"),
            category: (0, a.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addParentTopic",
            label: (0, a.WZ)("Parent Topic"),
            category: (0, a.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addCallout",
            label: (0, a.WZ)("Callout"),
            category: (0, a.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addRelationship",
            label: (0, a.WZ)("Relationship"),
            category: (0, a.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addBoundary",
            label: (0, a.WZ)("Boundary"),
            category: (0, a.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addSummary",
            label: (0, a.WZ)("Summary"),
            category: (0, a.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.showNotesEditor",
            label: (0, a.WZ)("Note"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showLabelEditor",
            label: (0, a.WZ)("Label"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showHyperlinkEditor",
            getLabel: (e) => e("Link(noun)") + " - " + e("Webpage"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showTopiclinkEditor",
            getLabel: (e) => e("Link(noun)") + " - " + e("Topic Link"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addFileLink",
            getLabel: (e) => e("Link(noun)") + " - " + e("Local File"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addFolderLink",
            getLabel: (e) => e("Link(noun)") + " - " + e("Local Folder"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addAttachmentOnNewTopic",
            label: (0, a.WZ)("Attachment"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addAudioOnNewTopic",
            label: (0, a.WZ)("Audio Note"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleMarkerPanel",
            label: (0, a.WZ)("Marker"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleStickerPanel",
            label: (0, a.WZ)("Sticker"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleIllustrationPanel",
            label: (0, a.WZ)("Illustration"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addLocalImage",
            label: (0, a.WZ)("Local Image"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showEquationEditor",
            label: (0, a.WZ)("Equation"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.markPriorityByNumber",
            label: (0, a.WZ)("Mark Priority (1~7)"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeMarker",
            label: (0, a.WZ)("Remove Marker"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeStickerOrImageOrEquation",
            label: (0, a.WZ)("Remove Sticker/Image/Equation"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeLabel",
            label: (0, a.WZ)("Remove Label"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeLink",
            label: (0, a.WZ)("Remove Link"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeNote",
            label: (0, a.WZ)("Remove Note"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.keepTextOnly",
            label: (0, a.WZ)("Keep Text Only"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addTask",
            label: (0, a.WZ)("Add Task"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeTask",
            label: (0, a.WZ)("Remove Task"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.checkTask",
            label: (0, a.WZ)("Mark as Completed"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.uncheckTask",
            label: (0, a.WZ)("Mark as Uncompleted"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.cancelTask",
            label: (0, a.WZ)("Mark as Canceled"),
            category: (0, a.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showEditBox",
            label: (0, a.WZ)("Edit Topic Text"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.enterLineBreak",
            label: (0, a.WZ)("Enter Line Break"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.moveToBeginningOfText",
            label: (0, a.WZ)("Move to Beginning of Text"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.moveToEndOfText",
            label: (0, a.WZ)("Move to End of Text"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.boldText",
            label: (0, a.WZ)("Bold"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.italicText",
            label: (0, a.WZ)("Italic"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.strikethroughText",
            label: (0, a.WZ)("Strikethrough"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.uppercaseText",
            label: (0, a.WZ)("Uppercase"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.lowercaseText",
            label: (0, a.WZ)("Lowercase"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.capitalizeText",
            label: (0, a.WZ)("Capitalize"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.alignTextLeft",
            label: (0, a.WZ)("Align Text Left"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.centerText",
            label: (0, a.WZ)("Center Text"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.alignTextRight",
            label: (0, a.WZ)("Align Text Right"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.increaseFontSize",
            label: (0, a.WZ)("Increase Font Size"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.decreaseFontSize",
            label: (0, a.WZ)("Decrease Font Size"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.setStyleAsVeryImportant",
            label: (0, a.WZ)('Set Style as "Very Important"'),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.setStyleAsImportant",
            label: (0, a.WZ)('Set Style as "Important"'),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.setStyleAsCrossOut",
            label: (0, a.WZ)('Set Style as "Cross Out"'),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.setStyleAsDefault",
            label: (0, a.WZ)('Set Style as "Default"'),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.updateStyleToSameLevelTopics",
            label: (0, a.WZ)("Update Style to Same-Level Topics"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.updateStyleToSameTypeTopics",
            label: (0, a.WZ)("Update Style to Same-Type Topics"),
            category: (0, a.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.changeNumberingPatternToNone",
            label: (0, a.WZ)("Set Numbering as None"),
            category: (0, a.WZ)("Numbering"),
          },
          {
            commandId: "editor.changeNumberingPatternToNumeralArabic",
            label: (0, a.WZ)('Set Numbering as "1.2.3."'),
            category: (0, a.WZ)("Numbering"),
          },
          {
            commandId: "editor.changeNumberingPatternToAlphabetUppercase",
            label: (0, a.WZ)('Set Numbering as "A.B.C."'),
            category: (0, a.WZ)("Numbering"),
          },
          {
            commandId: "editor.changeNumberingPatternToAlphabetLowercase",
            label: (0, a.WZ)('Set Numbering as "a.b.c."'),
            category: (0, a.WZ)("Numbering"),
          },
          {
            commandId: "editor.changeNumberingPatternToNumeralRoman",
            label: (0, a.WZ)('Set Numbering as "I.II.III."'),
            category: (0, a.WZ)("Numbering"),
          },
          {
            commandId: "editor.toggleNumberingTieredEnabled",
            label: (0, a.WZ)("Set Numbering Tiered Numbers"),
            category: (0, a.WZ)("Numbering"),
          },
          {
            commandId: "editor.toggleNumberingStartsHereEnabled",
            label: (0, a.WZ)("Set Numbering Start From Begin"),
            category: (0, a.WZ)("Numbering"),
          },
          {
            commandId: "editor.focusAndSelectCenter",
            label: (0, a.WZ)("Go to Central Topic"),
            category: (0, a.WZ)("Select/Move Topics"),
          },
          {
            commandId: "editor.moveSelection",
            label: (0, a.WZ)("Move Selection"),
            category: (0, a.WZ)("Select/Move Topics"),
          },
          {
            commandId: "editor.selectMultipleTopics",
            label: (0, a.WZ)("Select Multiple Topics"),
            category: (0, a.WZ)("Select/Move Topics"),
          },
          {
            commandId: "editor.exchangeSiblingTopicUp",
            label: (0, a.WZ)("Move Topic Up"),
            category: (0, a.WZ)("Select/Move Topics"),
          },
          {
            commandId: "editor.exchangeSiblingTopicDown",
            label: (0, a.WZ)("Move Topic Down"),
            category: (0, a.WZ)("Select/Move Topics"),
          },
          {
            commandId: "editor.moveTopicToTop",
            label: (0, a.WZ)("Move Topic to Top"),
            category: (0, a.WZ)("Select/Move Topics"),
          },
          {
            commandId: "editor.moveTopicToBottom",
            label: (0, a.WZ)("Move Topic to Bottom"),
            category: (0, a.WZ)("Select/Move Topics"),
          },
          {
            commandId: "outliner.addTopic",
            label: (0, a.WZ)("Create Topic"),
            category: (0, a.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.deleteTopic",
            label: (0, a.WZ)("Quick-Delete Topic"),
            category: (0, a.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.indent",
            label: (0, a.WZ)("Indent"),
            category: (0, a.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.outdent",
            label: (0, a.WZ)("Outdent"),
            category: (0, a.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.multiSelectionNavigateUp",
            label: (0, a.WZ)("Multi-Select Topics Above"),
            category: (0, a.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.multiSelectionNavigateDown",
            label: (0, a.WZ)("Multi-Select Topics Below"),
            category: (0, a.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.exchangeSiblingTopicUp",
            label: (0, a.WZ)("Move Topic Up"),
            category: (0, a.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.exchangeSiblingTopicDown",
            label: (0, a.WZ)("Move Topic Down"),
            category: (0, a.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "editor.enterLineBreak",
            label: (0, a.WZ)("Enter Line Break"),
            category: (0, a.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.moveCaretCharacterToBeginning",
            label: (0, a.WZ)("Move to Beginning of Current Topic"),
            category: (0, a.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.moveCaretCharacterToEnd",
            label: (0, a.WZ)("Move to End of Current Topic"),
            category: (0, a.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.moveCaretCharacterToAboveSiblingTopic",
            label: (0, a.WZ)("Move to Previous Topic of Same Level"),
            category: (0, a.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.moveCaretCharacterToBelowSiblingTopic",
            label: (0, a.WZ)("Move to Next Topic of Same Level"),
            category: (0, a.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "workbench.switchToMapOrOutliner",
            label: (0, a.WZ)("Switch to Map/Outliner"),
            category: (0, a.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleBranch",
            label: (0, a.WZ)("Fold/Unfold Subtopics"),
            category: (0, a.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleBranchByNumber",
            label: (0, a.WZ)("Fold/Unfold Subtopics (Level 1~9)"),
            category: (0, a.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleAllBranch",
            label: (0, a.WZ)("Fold/Unfold Sub-Branches"),
            category: (0, a.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleBranchOnly",
            label: (0, a.WZ)("Show Branch Only"),
            category: (0, a.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          null,
          {
            commandId: "editor.zoomIn",
            label: (0, a.WZ)("Zoom In"),
            category: (0, a.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.zoomOut",
            label: (0, a.WZ)("Zoom Out"),
            category: (0, a.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.resetZoom",
            label: (0, a.WZ)("Actual Size"),
            category: (0, a.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.fitMap",
            label: (0, a.WZ)("Fit Map"),
            category: (0, a.WZ)("Adjust Map & View"),
          },
          {
            commandId: "frame.toggleTabbar",
            label: (0, a.WZ)("Show Tab Bar"),
            category: (0, a.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleTopicNavigationPanel",
            label: (0, a.WZ)("Show Navigation Panel - Topic"),
            category: (0, a.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleNoteNavigationPanel",
            label: (0, a.WZ)("Show Navigation Panel - Note"),
            category: (0, a.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleLabelAndMarkerNavigationPanel",
            label: (0, a.WZ)("Show Navigation Panel - Marker & Label"),
            category: (0, a.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleTopicPanel",
            label: (0, a.WZ)("Show Format Panel - Style"),
            category: (0, a.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleSlidePanel",
            label: (0, a.WZ)("Show Format Panel - Pitch"),
            category: (0, a.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleMapPanel",
            label: (0, a.WZ)("Show Format Panel - Map"),
            category: (0, a.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleSkeletonPanel",
            label: (0, a.WZ)("Show Format Panel - Skeleton"),
            category: (0, a.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleColorThemePanel",
            label: (0, a.WZ)("Show Format Panel - Color Theme"),
            category: (0, a.WZ)("Adjust Map & View"),
          },
          {
            commandId: "editor.toggleTopicCountLabel",
            label: (0, a.WZ)("Show Topic Count"),
            category: (0, a.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleSheetBar",
            label: (0, a.WZ)("Show Sheet Bar"),
            category: (0, a.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportPng1",
            label: (0, a.WZ)("Export to PNG"),
            category: (0, a.WZ)("Export"),
          },
          {
            commandId: "workbench.exportSvg1",
            label: (0, a.WZ)("Export to SVG"),
            category: (0, a.WZ)("Export"),
          },
          {
            commandId: "workbench.exportPdf",
            label: (0, a.WZ)("Export to PDF"),
            category: (0, a.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportMd",
            label: (0, a.WZ)("Export to Markdown"),
            category: (0, a.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportWord",
            label: (0, a.WZ)("Export to Word"),
            category: (0, a.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportExcel",
            label: (0, a.WZ)("Export to Excel"),
            category: (0, a.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportOPML",
            label: (0, a.WZ)("Export to OPML"),
            category: (0, a.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportTextBundle",
            label: (0, a.WZ)("Export to TextBundle"),
            category: (0, a.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "mapShot",
            label: (0, a.WZ)("Map Shot"),
            category: (0, a.WZ)("Tools & Others"),
          },
          {
            commandId: "mergeXMindFiles",
            label: (0, a.WZ)("Merge Xmind Files"),
            category: (0, a.WZ)("Tools & Others"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "customizeTheme",
            label: (0, a.WZ)("Create/Customize Theme"),
            category: (0, a.WZ)("Tools & Others"),
          },
          {
            commandId: "createTheme",
            label: (0, a.WZ)("Create Theme"),
            category: (0, a.WZ)("Tools & Others"),
          },
          {
            commandId: "workbench.toggleZenMode",
            label: (0, a.WZ)("ZEN Mode"),
            category: (0, a.WZ)("Tools & Others"),
          },
          {
            commandId: "editor.enterPitchMode",
            label: (0, a.WZ)("Pitch Mode"),
            category: (0, a.WZ)("Tools & Others"),
          },
          {
            commandId: "editor.enterPitchModeWindowed",
            label: (0, a.WZ)("Pitch Mode - In Window"),
            category: (0, a.WZ)("Tools & Others"),
          },
          {
            commandId: "editor.enterPitchPresenterViewMode",
            label: (0, a.WZ)("Pitch Mode - Presenter View"),
            category: (0, a.WZ)("Tools & Others"),
          },
          {
            commandId: "keyAssist",
            label: (0, a.WZ)("Key Assist"),
            category: (0, a.WZ)("Tools & Others"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.setpassword",
            label: (0, a.WZ)("Set Password"),
            category: (0, a.WZ)("Tools & Others"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "preferences",
            label: (0, a.WZ)("Preferences"),
            category: (0, a.WZ)("Tools & Others"),
            isSupportedInOutliner: !0,
          },
        ].filter(Boolean),
        r = [
          {
            commandId: "pitch.nextStep",
            label: (0, a.WZ)("Next Step"),
            category: (0, a.WZ)("Navigation"),
            accelerator: ["Space", "||", "→", "||", "↓"],
          },
          {
            commandId: "pitch.previousStep",
            label: (0, a.WZ)("Previous Step"),
            category: (0, a.WZ)("Navigation"),
            accelerator: ["←", "||", "↑"],
          },
          {
            commandId: "pitch.skipCurrentBranch",
            label: (0, a.WZ)("Skip Current Branch"),
            category: (0, a.WZ)("Navigation"),
            accelerator: ["Shift", "+", "→"],
          },
          {
            commandId: "pitch.backParentTopic",
            label: (0, a.WZ)("Back to Parent Topic"),
            category: (0, a.WZ)("Navigation"),
            accelerator: ["Shift", "+", "←"],
          },
          {
            commandId: "pitch.exit",
            label: (0, a.WZ)("Exit Pitch Mode"),
            category: (0, a.WZ)("Other"),
            accelerator: ["Esc", "||", "Q"],
          },
          {
            commandId: "pitch.toggleAnimation",
            label: (0, a.WZ)("Enable/disable Animation"),
            category: (0, a.WZ)("Other"),
            accelerator: ["A"],
          },
          {
            commandId: "pitch.showShortcuts",
            label: (0, a.WZ)("Show Keyboard Shortcuts"),
            category: (0, a.WZ)("Other"),
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
    60534: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => c });
      var a,
        n = o(2954),
        r = o(50965),
        i = o(69931);
      !(function (e) {
        (e.NO_RESULT = "NO_RESULT"),
          (e.NO_RESULT_AS_NETWORK = "NO_RESULT_AS_NETWORK"),
          (e.NO_NOTE = "NO_NOTE"),
          (e.NO_TAG = "NO_TAG"),
          (e.NO_SELECTION = "NO_SELECTION"),
          (e.NO_FORMAT_AVAILABLE = "NO_FORMAT_AVAILABLE"),
          (e.SLIDE_NO_SELECTION = "SLIDE_NO_SELECTION"),
          (e.BULB = "BULB");
      })(a || (a = {}));
      const l = (0, n.aZ)({
        __name: "common-none-panel",
        props: {
          type: { default: "NO_RESULT" },
          sectionStyle: { default: "" },
        },
        setup(e) {
          const t = e,
            o = (e, ...t) => (0, r.JE)().T(e, ...t),
            l = (0, n.Fl)(() => ({
              [a.NO_RESULT]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/no-result.svg",
                ),
                text: o("No results found."),
                spacing: "-1px",
              },
              [a.NO_RESULT_AS_NETWORK]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/no-result.svg",
                ),
                text: o(
                  "Please check your network connection and try again later.",
                ),
                spacing: "-1px",
              },
              [a.NO_NOTE]: {
                image: (0, i.ju)("static/images/empty-panel-icon/no-note.svg"),
                text: o("No note exists."),
                spacing: "-3px",
              },
              [a.NO_TAG]: {
                image: (0, i.ju)("static/images/empty-panel-icon/no-tag.svg"),
                text: o("No marker, label or task exists."),
                spacing: "0px",
              },
              [a.NO_SELECTION]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/empty-selection.svg",
                ),
                text: o("Select an object to format."),
                spacing: "-2px",
              },
              [a.NO_FORMAT_AVAILABLE]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/no-format-available.svg",
                ),
                text: o("This object can't be formatted."),
                spacing: "5px",
              },
              [a.SLIDE_NO_SELECTION]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/slide-empty-selection.svg",
                ),
                text: o("Select a topic to format."),
                spacing: "-2px",
              },
              [a.BULB]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/zen-mode-bulb.svg",
                ),
                text: o(
                  "Please switch to original appearance to enable format options.",
                ),
                spacing: "5px",
              },
            })),
            c = (0, n.Fl)(() => l.value[t.type] || l.value[a.NO_RESULT]);
          return {
            __sfc: !0,
            NonePanelType: a,
            props: t,
            $T: o,
            noneTabs: l,
            noneTab: c,
          };
        },
      });
      const c = (0, o(51900).Z)(
        l,
        function () {
          var e = this,
            t = e._self._c,
            o = e._self._setupProxy;
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
                        src: o.noneTab.image,
                        "uk-svg": "",
                      },
                    }),
                  ]),
                  e._v(" "),
                  o.noneTab.text
                    ? t(
                        "div",
                        {
                          staticClass: "uk-common-none-panel-text",
                          style: { marginTop: o.noneTab.spacing },
                        },
                        [e._v("\n      " + e._s(o.noneTab.text) + "\n    ")],
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
    45692: (e, t, o) => {
      var a = o(64399);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals);
      (0, o(45346).Z)("f60ae978", a, !0, {});
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
    e.O(0, [6263, 1505], () => {
      return (t = 26271), e((e.s = t));
      var t;
    });
    var t = e.O();
    module.exports = t;
  },
]);
