"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [6707],
  {
    84987: (e, t, a) => {
      a.d(t, { J3: () => i, M7: () => l, QC: () => o });
      var s = a(81389),
        n = a(2954),
        c = a(50965);
      function i() {
        const e = (0, n.iH)((0, c.Fw)().userConfig.autoChecked);
        return (
          (0, n.YP)(
            e,
            (e) => {
              e ||
                (0, c.Fw)().setAction({
                  type: s._Q.UPDATE_AUTO_CHECKED,
                  payload: !1,
                });
            },
            { immediate: !1 },
          ),
          {
            checked: e,
            trySetAutoUpdateType: function () {
              e.value &&
                (0, c.S)().updatePreferences({ autoUpdateType: "auto" });
            },
          }
        );
      }
      function l() {
        let e = null;
        const t = new Promise((t) => {
            e = t;
          }),
          a = (0, n.YP)(
            () => (0, c.Fw)().status,
            (t) => {
              t === s.A8.INSTALLED && (e(), a());
            },
          );
        return { whenInstalled: t };
      }
      const u = { small: [540, 371], big: [640, 570] };
      function o(e) {
        const [t, a] = u[e];
        (0, c.JX)().handleCommand("setWindowSize", {
          id: window.id,
          width: t,
          height: a,
        });
      }
    },
    56707: (e, t, a) => {
      a.r(t), a.d(t, { default: () => d });
      var s = a(2954),
        n = a(84987),
        c = a(81389),
        i = a(18742),
        l = a(50965),
        u = a(79409);
      const o = (0, s.aZ)({
        components: { UpdateDesc: i.Z },
        setup() {
          const e = (0, l.Fw)().userConfig,
            t = (0, l.Fw)().version,
            { checked: a, trySetAutoUpdateType: s } = (0, n.J3)(),
            i = (0, u.Z)("version").includes("beta");
          return (
            (0, n.QC)("big"),
            {
              checked: a,
              userConfig: e,
              version: t,
              isBetaVersion: i,
              update: function () {
                s(),
                  (0, l.Fw)().setAutoInstall(),
                  setTimeout(() =>
                    (0, l.Fw)().setAction({
                      type: c._Q.DOWNLOAD,
                      payload: t.url,
                    }),
                  );
              },
            }
          );
        },
      });
      const d = (0, a(51900).Z)(
        o,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "div",
            {
              staticClass:
                "uk-height-1-1 uk-flex uk-flex-column uk-flex-between",
            },
            [
              t(
                "div",
                [
                  t("div", { staticClass: "title title-top" }, [
                    e._v(
                      "\n      " +
                        e._s(
                          e.$T("New Version Available") +
                            (e.isBetaVersion ? " (Beta)" : ""),
                        ) +
                        "\n    ",
                    ),
                  ]),
                  e._v(" "),
                  t("update-desc"),
                ],
                1,
              ),
              e._v(" "),
              t("div", { staticClass: "action-area" }, [
                t("div", { staticClass: "auto-install-checkbox" }, [
                  t("label", [
                    t("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.checked,
                          expression: "checked",
                        },
                      ],
                      staticClass: "uk-checkbox",
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(e.checked)
                          ? e._i(e.checked, null) > -1
                          : e.checked,
                      },
                      on: {
                        change: function (t) {
                          var a = e.checked,
                            s = t.target,
                            n = !!s.checked;
                          if (Array.isArray(a)) {
                            var c = e._i(a, null);
                            s.checked
                              ? c < 0 && (e.checked = a.concat([null]))
                              : c > -1 &&
                                (e.checked = a
                                  .slice(0, c)
                                  .concat(a.slice(c + 1)));
                          } else e.checked = n;
                        },
                      },
                    }),
                    e._v(
                      "\n        " +
                        e._s(e.$T("Automatically install future updates")) +
                        "\n      ",
                    ),
                  ]),
                ]),
                e._v(" "),
                t("div", { staticClass: "uk-flex uk-flex-right" }, [
                  t(
                    "button",
                    {
                      staticClass: "uk-button uk-button-primary",
                      on: { click: e.update },
                    },
                    [
                      e._v(
                        "\n        " +
                          e._s(
                            e.$T("Update Now") + ` (${e.version.updateSize}MB)`,
                          ) +
                          "\n      ",
                      ),
                    ],
                  ),
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
    },
    18742: (e, t, a) => {
      a.d(t, { Z: () => l });
      var s = a(2954),
        n = a(50965),
        c = a(5893);
      const i = (0, s.aZ)({
        setup: () => ({
          updateDescPath: (0, c.u3)(
            `${(0, n.Fw)().version.updateDescPath}/index.html`,
          ),
        }),
      });
      const l = (0, a(51900).Z)(
        i,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("div", { staticClass: "update-desc" }, [
            t("iframe", {
              staticStyle: { width: "100%", height: "100%" },
              attrs: { src: e.updateDescPath, frameborder: "0" },
            }),
          ]);
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
    },
  },
]);
