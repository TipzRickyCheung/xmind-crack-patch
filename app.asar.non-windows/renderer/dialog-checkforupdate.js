(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [9166],
  {
    7543: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { default: () => s });
      var a = n(23645),
        i = n.n(a)()(function (t) {
          return t[1];
        });
      i.push([
        t.id,
        "/* ToDo: replace it */\n/* local style */\n.checking-bar[data-v-ed17bf82] {\n  margin: 10px 0;\n  width: 100%;\n  max-width: 500px;\n  height: 8px;\n  border-radius: 4px;\n}\n@keyframes indeterminate-ed17bf82 {\n0% {\n    transform: translateX(-100px);\n}\n100% {\n    transform: translateX(500px);\n}\n}\n.progress-custom-parent[data-v-ed17bf82] {\n  overflow: hidden;\n  position: relative;\n}\n.ui-mprogress[data-v-ed17bf82] {\n  pointer-events: none;\n}\n.indeter-bar[data-v-ed17bf82] {\n  position: absolute;\n  z-index: 1032;\n  top: 0;\n  left: 0;\n  width: 100px;\n  height: 8px;\n  border-radius: 4px;\n  background: #039be5;\n  animation: indeterminate-ed17bf82 1800ms infinite ease-in;\n}\n.bar-bg[data-v-ed17bf82] {\n  position: absolute;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  border: solid 1px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n",
        "",
      ]);
      const s = i;
    },
    40334: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => u });
      var a = n(92636),
        i = n(54856),
        s = n(16704),
        o = n(50965),
        r = n(90435);
      const u = {
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
              let n = this._touchBarRoutes[e];
              return (
                n ||
                  ((n = {
                    method: e,
                    endpoint: (0, i.A6)(window.id, (0, s.rs)(e)),
                  }),
                  (this._touchBarRoutes[e] = n)),
                n.unroute || (n.unroute = r.ZP.route(n.endpoint, this[e])),
                Object.assign({}, t, { click: n.endpoint })
              );
            };
            (t = (t || this.touchBarItems || []).map(
              (t) => (
                "button" !== t.type ||
                "string" != typeof t.click ||
                a.sq.includes(t.click) ||
                t.click.startsWith("command:")
                  ? "buttons" === t.type &&
                    (t = {
                      ...t,
                      buttons: t.buttons.map((t) =>
                        "string" != typeof t.click ||
                        a.sq.includes(t.click) ||
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
    50541: (t, e, n) => {
      "use strict";
      n.r(e);
      var a = n(51505),
        i = n(20629),
        s = n(69931),
        o = n(85786),
        r = n(50965);
      const u = {
        mixins: [n(40334).Z],
        data: function () {
          return {
            platform: "darwin" === (0, o.Xf)() ? "mac" : "win",
            stateText: "",
            primaryButtonText: "",
            defaultButtonText: "",
            secondaryTitle: "",
            updateSize: "",
            downloadAnimationDone: !1,
            iconURL: (0, s.ju)("static/assets/images/check-for-update-bg.svg"),
            buildNumber: "",
          };
        },
        mounted() {
          this.$safeRun(() =>
            this.$loadResource("package.json").then(
              (t) => (this.buildNumber = JSON.parse(t).buildNumber || ""),
            ),
          ),
            this.changeTextByState(this.status);
        },
        computed: {
          touchBarItems() {
            return [
              { type: "space", size: "flexible" },
              "has-new-version" === this.status
                ? {
                    type: "button",
                    label: this.defaultButtonText,
                    click: "skip",
                  }
                : null,
              "update-downloaded" === this.status && this.downloadAnimationDone
                ? {
                    type: "button",
                    label: this.defaultButtonText,
                    backgroundColor: "primary",
                    click: "closeDialog",
                  }
                : null,
              this.showCheckForUpdateButton() &&
              "checking-for-update" !== this.status &&
              "checking-for-update-preparing" !== status
                ? {
                    type: "button",
                    label: this.primaryButtonText,
                    backgroundColor: "primary",
                    click: "checkForUpdate",
                  }
                : null,
              "has-new-version" === this.status
                ? {
                    type: "button",
                    label: this.primaryButtonText,
                    backgroundColor: "primary",
                    click: "download",
                  }
                : null,
              "update-downloaded" === this.status && this.downloadAnimationDone
                ? {
                    type: "button",
                    label: this.primaryButtonText,
                    backgroundColor: "primary",
                    click: "quitAndInstall",
                  }
                : null,
              { type: "space", size: "flexible" },
            ].filter(Boolean);
          },
          ...(0, i.rn)("checkForUpdate", ["status", "info"]),
          updateStatus() {
            return {
              CHECKING: {
                TITLE: this.$T("Checking for Update"),
                DESCRIPTION: this.$T("Current version:") + " ",
                PRIMARY_BUTTON: this.$T("Check for Update"),
                DEFAULT_BUTTON: "",
              },
              UPDATE_AVAILABLE: {
                TITLE: this.$T("New Version Available"),
                DESCRIPTION: this.$T("Latest Version:") + " ",
                PRIMARY_BUTTON: this.$T("Update Now"),
                DEFAULT_BUTTON: this.$T("Later"),
              },
              DOWNLOADING: {
                TITLE: this.$T("Downloading Update"),
                DESCRIPTION: this.$T("Latest Version:") + " ",
                PRIMARY_BUTTON: "",
                DEFAULT_BUTTON: "",
              },
              DOWNLOADED: {
                TITLE: this.$T("Your Update is Ready to Install"),
                DESCRIPTION: this.$T("Latest Version:") + " ",
                PRIMARY_BUTTON: this.$T("Relaunch to Install"),
                DEFAULT_BUTTON: this.$T("Later"),
              },
              UPDATE_NOT_AVAILABLE: {
                TITLE: this.$T("Your Xmind is Up to Date"),
                DESCRIPTION: this.$T("Last checked:") + " ",
                PRIMARY_BUTTON: this.$T("Check for Update"),
                DEFAULT_BUTTON: "",
              },
              UPDATE_ERROR: {
                TITLE: this.$T("Update is Interrupted"),
                DESCRIPTION: this.$T(
                  "Some problems occur due to unstable network or server.",
                ),
                PRIMARY_BUTTON: this.$T("Check for Update"),
                DEFAULT_BUTTON: "",
              },
            };
          },
          releaseNotes() {
            let t =
              this.info[`releaseNotes-${(0, r.S)().language}`] ||
              this.info.releaseNotes ||
              "";
            return t && (t = t.split("\n").slice(0, 3).join("\n")), t;
          },
        },
        watch: {
          status(t) {
            this.changeTextByState(t);
          },
          updateStatus() {
            this.changeTextByState(this.status);
          },
          buildNumber() {
            this.changeTextByState(this.status);
          },
        },
        methods: {
          changeTextByState(t) {
            let e = null;
            const {
              CHECKING: n,
              UPDATE_AVAILABLE: a,
              DOWNLOADING: i,
              DOWNLOADED: s,
              UPDATE_NOT_AVAILABLE: o,
              UPDATE_ERROR: r,
            } = this.updateStatus;
            if (
              "checking-for-update" === t ||
              "checking-for-update-preparing" === t
            ) {
              const {
                TITLE: t,
                DESCRIPTION: e,
                PRIMARY_BUTTON: a,
                DEFAULT_BUTTON: i,
              } = n;
              (this.stateText = t),
                (this.secondaryTitle = e + this.buildNumber),
                (this.primaryButtonText = a),
                (this.defaultButtonText = i);
            } else if ("has-new-version" === t) {
              const {
                TITLE: t,
                DESCRIPTION: e,
                PRIMARY_BUTTON: n,
                DEFAULT_BUTTON: i,
              } = a;
              (this.updateSize = `${this.$T("Update Size:")} ${this.info.updateSize || ""}  MB`),
                (this.stateText = t),
                (this.secondaryTitle = e + (this.info.version || "")),
                (this.primaryButtonText = n),
                (this.defaultButtonText = i);
            } else if ("update-downloading" === t) {
              setTimeout(() => {
                const t = this.$refs.progress;
                t &&
                  (e = setInterval(() => {
                    (t.value += Math.random()),
                      t.value >= 95 && clearInterval(e);
                  }, 300));
              }, 300);
              const {
                TITLE: t,
                DESCRIPTION: n,
                PRIMARY_BUTTON: a,
                DEFAULT_BUTTON: s,
              } = i;
              (this.stateText = t),
                (this.secondaryTitle = n + (this.info.version || "")),
                (this.primaryButtonText = a),
                (this.defaultButtonText = s);
            } else if ("update-downloaded" === t) {
              clearInterval(e);
              const t = 3e3,
                n = this.$refs.progress;
              if (n) {
                let e = (100 - n.value) / (t / 200);
                const a = setInterval(() => {
                  if (((n.value += e), n.value >= 100)) {
                    clearInterval(a);
                    const {
                      TITLE: t,
                      DESCRIPTION: e,
                      PRIMARY_BUTTON: n,
                      DEFAULT_BUTTON: i,
                    } = s;
                    (this.downloadAnimationDone = !0),
                      (this.stateText = t),
                      (this.secondaryTitle = e + (this.info.version || "")),
                      (this.primaryButtonText = n),
                      (this.defaultButtonText = i);
                  }
                }, 200);
              }
            } else if ("update-not-available" === t) {
              const {
                TITLE: t,
                DESCRIPTION: e,
                PRIMARY_BUTTON: n,
                DEFAULT_BUTTON: a,
              } = o;
              (this.stateText = t),
                (this.secondaryTitle = e + new Date().toLocaleString()),
                (this.primaryButtonText = n),
                (this.defaultButtonText = a);
            } else if ("update-error" === t) {
              const {
                TITLE: t,
                DESCRIPTION: e,
                PRIMARY_BUTTON: n,
                DEFAULT_BUTTON: a,
              } = r;
              (this.stateText = t),
                (this.secondaryTitle = e),
                (this.primaryButtonText = n),
                (this.defaultButtonText = a);
            }
          },
          showCheckForUpdateButton() {
            return [
              "checking-for-update",
              "checking-for-update-preparing",
              "update-not-available",
              "update-error",
            ].includes(this.status);
          },
          checkForUpdate() {
            this.$store.commit("checkForUpdate/updateAction", {
              action: "checkForUpdate",
            });
          },
          checkAllReleaseNotes() {
            const t =
                "zh-CN" === (0, r.S)().language
                  ? "https://www.xmind.cn"
                  : "https://www.xmind.app",
              e = this.$store.getters["l10n/T"];
            (0, o.DL)(`${t}/xmind/zen-release-notes/`, e);
          },
          closeDialog() {
            "checking-for-update" === this.status ||
            "checking-for-update-preparing" === this.status
              ? this.cancelCheck()
              : (this.$store.commit("checkForUpdate/updateAction", {
                  action: "pending",
                }),
                window.close());
          },
          skip() {
            this.$store.commit("checkForUpdate/updateAction", {
              action: "skip",
            }),
              window.close();
          },
          download() {
            if ("linux" === (0, o.Xf)()) {
              const t =
                  "zh-CN" === (0, r.S)().language
                    ? "https://www.xmind.cn"
                    : "https://www.xmind.app",
                e = this.$store.getters["l10n/T"];
              (0, o.DL)(`${t}/xmind/zen-update-linux/`, e);
            }
            this.$store.commit("checkForUpdate/updateAction", {
              action: "download",
            }),
              this.$store.commit("checkForUpdate/updateStatus", {
                status: "update-downloading",
              });
          },
          cancelCheck() {
            this.$store.commit("checkForUpdate/updateStatus", {
              status: "stop-checking",
            }),
              window.close();
          },
          quitAndInstall() {
            this.$store.commit("checkForUpdate/updateAction", {
              action: "install",
            }),
              window.close();
          },
        },
      };
      n(7563);
      const c = (0, n(51900).Z)(
        u,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass: "uk-window uk-window-dialog uk-window-default",
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
              e("div", { staticClass: "uk-window-body uk-flex uk-flex-row" }, [
                e(
                  "div",
                  {
                    staticClass:
                      "uk-panel uk-flex uk-flex-column uk-flex-middle inline",
                  },
                  [
                    e("div", {
                      staticClass: "uk-preserve uk-height-1-1",
                      attrs: {
                        draggable: "false",
                        "data-src": t.iconURL,
                        "uk-svg": "",
                      },
                    }),
                  ],
                ),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass:
                      "uk-width-expand uk-flex uk-flex-column uk-margin-large-left uk-margin-xlarge-top uk-margin-large-right uk-margin-large-bottom uk-margin-top",
                  },
                  [
                    e("h1", { staticClass: "uk-margin-remove-bottom" }, [
                      t._v("\n        " + t._s(t.stateText) + "\n      "),
                    ]),
                    t._v(" "),
                    e("span", { staticClass: "uk-margin-small" }, [
                      t._v(t._s(t.secondaryTitle)),
                    ]),
                    t._v(" "),
                    e(
                      "div",
                      { staticClass: "uk-height-expand uk-margin-xlarge-top" },
                      [
                        "checking-for-update" === t.status ||
                        "checking-for-update-preparing" === t.status
                          ? e(
                              "div",
                              {
                                staticClass:
                                  "checking-bar progress-custom-parent uk-margin-xlarge-top",
                              },
                              [t._m(0)],
                            )
                          : t._e(),
                        t._v(" "),
                        "update-downloading" === t.status ||
                        (!t.downloadAnimationDone &&
                          "update-downloaded" === t.status)
                          ? e("progress", {
                              ref: "progress",
                              staticClass: "uk-progress",
                              staticStyle: {
                                border: "solid 1px rgba(0, 0, 0, 0.2)",
                                borderradius: "2px",
                              },
                              attrs: { value: "0", max: "100" },
                            })
                          : t._e(),
                        t._v(" "),
                        "update-downloading" === t.status
                          ? e("p", [
                              t._v(
                                "\n          " +
                                  t._s(t.updateSize) +
                                  "\n        ",
                              ),
                            ])
                          : t._e(),
                        t._v(" "),
                        "has-new-version" === t.status ||
                        ("update-downloaded" === t.status &&
                          t.downloadAnimationDone)
                          ? e(
                              "pre",
                              {
                                staticClass: "uk-overflow-hidden",
                                staticStyle: {
                                  "font-family":
                                    "-apple-system, BlinkMacSystemFont, 'SegoeUI',",
                                  "font-size": "13px",
                                  "font-weight": "normal",
                                  "line-height": "1.5",
                                  "white-space": "pre-wrap",
                                },
                              },
                              [t._v(t._s(t.releaseNotes) + "\n        ")],
                            )
                          : t._e(),
                        t._v(" "),
                        t.defaultButtonText
                          ? e(
                              "a",
                              {
                                staticClass: "uk-margin-top",
                                attrs: {
                                  draggable: "false",
                                  href: "javascript:void(0);",
                                },
                                on: { click: t.checkAllReleaseNotes },
                              },
                              [t._v(t._s(t.$T("More...")) + "\n        ")],
                            )
                          : t._e(),
                      ],
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "uk-flex uk-flex-bottom uk-flex-right uk-margin-xlarge-top",
                      },
                      [
                        e("div", { staticClass: "uk-button-group" }, [
                          "has-new-version" === t.status
                            ? e(
                                "button",
                                {
                                  staticClass: "uk-button uk-button-default",
                                  on: {
                                    click: function (e) {
                                      return t.skip();
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.defaultButtonText) +
                                      "\n          ",
                                  ),
                                ],
                              )
                            : t._e(),
                          t._v(" "),
                          "update-downloaded" === t.status &&
                          t.downloadAnimationDone
                            ? e(
                                "button",
                                {
                                  staticClass: "uk-button uk-button-default",
                                  on: {
                                    click: function (e) {
                                      return t.closeDialog();
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.defaultButtonText) +
                                      "\n          ",
                                  ),
                                ],
                              )
                            : t._e(),
                          t._v(" "),
                          t.showCheckForUpdateButton()
                            ? e(
                                "button",
                                {
                                  staticClass: "uk-button uk-button-primary",
                                  attrs: {
                                    disabled:
                                      "checking-for-update" === t.status ||
                                      "checking-for-update-preparing" ===
                                        t.status,
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.checkForUpdate();
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.primaryButtonText) +
                                      "\n          ",
                                  ),
                                ],
                              )
                            : t._e(),
                          t._v(" "),
                          "has-new-version" === t.status
                            ? e(
                                "button",
                                {
                                  staticClass: "uk-button uk-button-primary",
                                  on: {
                                    click: function (e) {
                                      return t.download();
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.primaryButtonText) +
                                      "\n          ",
                                  ),
                                ],
                              )
                            : t._e(),
                          t._v(" "),
                          "update-downloaded" === t.status &&
                          t.downloadAnimationDone
                            ? e(
                                "button",
                                {
                                  staticClass: "uk-button uk-button-primary",
                                  on: {
                                    click: function (e) {
                                      return t.quitAndInstall();
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.primaryButtonText) +
                                      "\n          ",
                                  ),
                                ],
                              )
                            : t._e(),
                        ]),
                      ],
                    ),
                  ],
                ),
              ]),
            ],
          );
        },
        [
          function () {
            var t = this._self._c;
            return t("div", { staticClass: "ui-progress" }, [
              t("div", { staticClass: "indeter-bar" }),
              this._v(" "),
              t("div", { staticClass: "bar-bg uk-background-default" }),
            ]);
          },
        ],
        !1,
        null,
        "ed17bf82",
        null,
      ).exports;
      (0, a.Z)(c);
    },
    13382: (t, e, n) => {
      "use strict";
      n.d(e, {
        G$: () => v,
        N0: () => m,
        Pg: () => A,
        R2: () => y,
        W5: () => x,
        ZZ: () => g,
        am: () => b,
        eq: () => w,
        yr: () => _,
      });
      var a = n(71017),
        i = n.n(a),
        s = n(67657),
        o = n(7104),
        r = n(86633),
        u = n(33394),
        c = n(94593),
        l = n(90435),
        d = n(54856),
        h = n(5893),
        p = n(50965),
        f = n(92636);
      const T = (0, r.ZP)("dialog");
      async function m(t) {
        (t = Object.assign({}, t || {})).icon &&
          "string" == typeof t.icon &&
          (t.icon = i().join((0, o.bY)(), t.icon));
        const e = s.BrowserWindow.fromId(window.id);
        return [s.dialog.showMessageBoxSync(e, t)];
      }
      async function k(t) {
        (t = Object.assign({}, t || {})).icon &&
          "string" == typeof t.icon &&
          (t.icon = i().join((0, o.bY)(), t.icon));
        const e = s.BrowserWindow.fromId(window.id),
          { response: n, checkboxChecked: a } = await s.dialog.showMessageBox(
            e,
            t,
          );
        return [n, a];
      }
      async function g(t) {
        (t = Object.assign({ securityScopedBookmarks: !0 }, t || {}))
          .suggestPath &&
          !t.defaultPath &&
          ((t.defaultPath = b(t.suggestPath, t.filters)), delete t.suggestPath);
        const {
          canceled: e,
          filePath: n,
          bookmark: a,
        } = await s.dialog.showSaveDialog(s.getCurrentWindow(), t);
        return e
          ? null
          : (n && a && (await u.Z.bindBookmark({ fp: n, bookmark: a })),
            n && (0, p.km)().setLastSaveDirectory(i().dirname(n)),
            n);
      }
      async function w({ folderName: t, dialogOptions: e }) {
        let n = "";
        (e = Object.assign({ securityScopedBookmarks: !0 }, e || {}))
          .defaultPath || (e.defaultPath = b({}));
        const {
          canceled: a,
          filePaths: o,
          bookmark: r,
        } = await s.dialog.showOpenDialog(s.getCurrentWindow(), e);
        if (a) return null;
        if (
          ((n = o[0]),
          o.length > 0 && r && (await u.Z.bindBookmark({ fp: n, bookmark: r })),
          "string" == typeof t)
        ) {
          let e = t.replace(/[\\/]/g, "");
          0, (n = i().join(n, e));
        }
        return (
          c.Z.existsSync(n) || c.Z.ensureDir(n),
          n && (0, p.km)().setLastSaveDirectory(n),
          n
        );
      }
      function b(
        { doc: t = null, oldDoc: e = null, suggestedName: n = null },
        a = null,
      ) {
        let o, r;
        if (
          (!o && n && (o = (0, h.N6)(n.toString())),
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
          o && Array.isArray(a))
        ) {
          const t = a[0] && a[0].extensions;
          Array.isArray(t) && t.length > 0 && (o = `${o}.${t[0]}`);
        }
        if (!r && e && e.source && e.source.startsWith("file://")) {
          let t = e.source.slice(7);
          0, (r = i().dirname(t));
        }
        if (
          (!r &&
            (0, p.km)().lastSaveDirectory &&
            (r = (0, p.km)().lastSaveDirectory),
          !r)
        )
          try {
            r = s.app.getPath("documents");
          } catch (t) {
            T.info(t);
          }
        return r && o ? i().join(r, o) : r || o;
      }
      async function x(t) {
        t.$withUIKit((e) => {
          const n = `\n        <button\n        class="uk-button uk-button-text uk-text-nowrap"\n        style="word-break: keep-all;"\n        focustrigger="cannotGetFocusByMouse">\n          ${t.$T("OK")}\n        </button>\n        </div>`;
          e.toast({
            message: t.$T(
              "The map style has been updated for your current version of Xmind.",
            ),
            pos: "bottom-center",
            timeout: 5e3,
            btn: n,
            style: { width: "500px", height: "auto", padding: "10px 20px" },
            btnClick: e.toast.clearAll(),
          });
        });
      }
      async function y(t) {
        const e = (t = "function" != typeof t ? (t) => t : t)("OK"),
          n = t("Get Latest Version"),
          a = [e, n],
          [i] = await k({
            title: "Xmind",
            message: t(
              "The map style in this file might vary since it was created in a newer version of Xmind.",
            ),
            detail: t(
              "You can continue to open the file or update to the latest version for better compatibility.",
            ),
            buttons: a,
            defaultId: a.indexOf(n),
            cancelId: a.indexOf(e),
            noLink: !0,
          });
        i === a.indexOf(n) && l.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function v(t) {
        if (((t = "function" != typeof t ? (t) => t : t), f.zr))
          return await k({
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
          n = t("Get Latest Version"),
          a = [n, e],
          [i] = await k({
            title: "Xmind",
            message: t("Failed to Open File"),
            detail: t(
              "The file was created by a newer version of Xmind. Please update Xmind and try to open it again.",
            ),
            buttons: a,
            defaultId: a.indexOf(n),
            cancelId: a.indexOf(e),
            noLink: !0,
          });
        i === a.indexOf(n) && l.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function _(t) {
        const e = (t = "function" != typeof t ? (t) => t : t)("Save"),
          n = t("Save as"),
          a = t("Cancel"),
          i = [];
        i.push(e, a, n);
        let [s] = await k({
          type: "none",
          title: "Xmind",
          message: t("Saving file from Xmind"),
          detail: t(
            "Once you save the file, it cannot be opened normally in older versions like $1.",
            "Xmind 22.11",
          ),
          buttons: i,
          defaultId: i.indexOf(n),
          cancelId: i.indexOf(a),
          noLink: !0,
        });
        const o = s === i.indexOf(e),
          r = s === i.indexOf(n);
        return { toSave: o, toSaveAs: r, toCancel: !o && !r };
      }
      async function A(t) {
        const e = (t = "function" != typeof t ? (t) => t : t)("Fix ＆ Open"),
          n = t("Cancel"),
          a = [e, n],
          [i] = await k({
            title: "Xmind",
            message: t("Failed to Open File"),
            detail: t(
              "The file may contain invalid data structure or have become corrupted. Xmind can try to fix the data structure to help you open it.",
            ),
            buttons: a,
            defaultId: a.indexOf(e),
            cancelId: a.indexOf(n),
            noLink: !0,
          });
        return { toFix: i === a.indexOf(e), toCancel: i === a.indexOf(n) };
      }
    },
    33394: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => f });
      var a = n(57147),
        i = n.n(a),
        s = n(71017),
        o = n.n(s),
        r = n(73837),
        u = n(86633),
        c = n(16704),
        l = n(56222);
      const d = (0, u.ZP)("renderer:fs");
      async function h(t) {
        return (0, l.A)("OBTAIN_READ_WRITE_ACCESS", t);
      }
      async function p(t) {
        return (0, l.A)("RELEASE_READ_WRITE_ACCESS", t);
      }
      const f = {
        read: async function (t) {
          if (!o().isAbsolute(t)) throw new Error("Must be an absolute path.");
          const e = await (async function (t) {
            return (0, l.A)("OBTAIN_READ_LOCK", t);
          })(t);
          try {
            return await (0, r.promisify)(i().readFile)(t);
          } catch (e) {
            d.error(`path(${t}) read error: ${(0, c.SC)(e)}`);
            try {
              if (!(await h(t))) throw new Error(`No access to '${t}'`);
              return await (0, r.promisify)(i().readFile)(t);
            } catch (t) {
              throw t;
            } finally {
              await p(t);
            }
          } finally {
            await (async function (t) {
              return (0, l.A)("RELEASE_READ_LOCK", t);
            })(e);
          }
        },
        write: async function (t, e) {
          if (!o().isAbsolute(t)) throw new Error("Must be an absolute path.");
          const n = await (async function (t) {
            return (0, l.A)("OBTAIN_WRITE_LOCK", t);
          })(t);
          try {
            return await (0, r.promisify)(i().writeFile)(t, e);
          } catch (n) {
            d.error(`path(${t}) write error: ${(0, c.SC)(n)}`);
            try {
              if (!(await h(t))) throw new Error(`No access to '${t}'`);
              return await (0, r.promisify)(i().writeFile)(t, e);
            } catch (t) {
              throw t;
            } finally {
              await p(t);
            }
          } finally {
            await (async function (t) {
              return (0, l.A)("RELEASE_WRITE_LOCK", t);
            })(n);
          }
        },
        bindBookmark: async function ({ fp: t, bookmark: e } = {}) {
          return (0, l.A)("BIND_BOOKMARK", { fp: t, bookmark: e });
        },
        hasRWAccess: async function (t) {
          return (0, l.A)("HAS_READ_WRITE_ACCESS", t);
        },
        obtainRWAccessFromOS: h,
        releaseRWAccessFromOS: p,
      };
    },
    85786: (t, e, n) => {
      "use strict";
      n.d(e, { DL: () => d, Xf: () => c, Yv: () => l, vQ: () => h });
      var a = n(22037),
        i = n.n(a),
        s = n(57310),
        o = n.n(s),
        r = n(72298),
        u = n(13382);
      function c() {
        return "linux";
      }
      function l() {
        return {
          platform: i().platform(),
          arch: i().arch(),
          release: i().release(),
        };
      }
      function d(t, e) {
        const n = o().parse(t).protocol,
          a = e || ((t) => t);
        r.shell.openExternal(n ? t : `http://${t}`).catch(() => {
          (0, u.N0)({
            title: "Xmind",
            message: a("Unable to open link."),
            detail: a(
              "This link is invalid and cannot be opened through browser.",
            ),
            buttons: [a("OK")],
          });
        });
      }
      function h(t) {
        r.clipboard.writeText(t);
      }
    },
    7563: (t, e, n) => {
      var a = n(7543);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals);
      (0, n(45346).Z)("cceacb54", a, !0, {});
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
  },
  (t) => {
    t.O(0, [5727, 1505], () => {
      return (e = 50541), t((t.s = e));
      var e;
    });
    var e = t.O();
    module.exports = e;
  },
]);
