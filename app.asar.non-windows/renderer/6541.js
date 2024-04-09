"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [6541],
  {
    84987: (t, e, n) => {
      n.d(e, { J3: () => l, M7: () => c, QC: () => u });
      var a = n(81389),
        i = n(2954),
        s = n(50965);
      function l() {
        const t = (0, i.iH)((0, s.Fw)().userConfig.autoChecked);
        return (
          (0, i.YP)(
            t,
            (t) => {
              t ||
                (0, s.Fw)().setAction({
                  type: a._Q.UPDATE_AUTO_CHECKED,
                  payload: !1,
                });
            },
            { immediate: !1 },
          ),
          {
            checked: t,
            trySetAutoUpdateType: function () {
              t.value &&
                (0, s.S)().updatePreferences({ autoUpdateType: "auto" });
            },
          }
        );
      }
      function c() {
        let t = null;
        const e = new Promise((e) => {
            t = e;
          }),
          n = (0, i.YP)(
            () => (0, s.Fw)().status,
            (e) => {
              e === a.A8.INSTALLED && (t(), n());
            },
          );
        return { whenInstalled: e };
      }
      const o = { small: [540, 371], big: [640, 570] };
      function u(t) {
        const [e, n] = o[t];
        (0, s.JX)().handleCommand("setWindowSize", {
          id: window.id,
          width: e,
          height: n,
        });
      }
    },
    66541: (t, e, n) => {
      n.r(e), n.d(e, { default: () => r });
      var a = n(2954),
        i = n(84987),
        s = n(81389),
        l = n(18742),
        c = n(18621),
        o = n(50965),
        u = function (t, e, n, a) {
          return new (n || (n = Promise))(function (i, s) {
            function l(t) {
              try {
                o(a.next(t));
              } catch (t) {
                s(t);
              }
            }
            function c(t) {
              try {
                o(a.throw(t));
              } catch (t) {
                s(t);
              }
            }
            function o(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(l, c);
            }
            o((a = a.apply(t, e || [])).next());
          });
        };
      const d = (0, a.aZ)({
        components: { UpdateDesc: l.Z },
        setup() {
          (0, i.QC)("big");
          const t = (0, o.Fw)().openedByUser;
          let e = (0, a.iH)(!1),
            n = (0, a.iH)(!1),
            l = (0, a.iH)(!1);
          const { checked: d, trySetAutoUpdateType: r } = (0, i.J3)(),
            { whenInstalled: h } = (0, i.M7)();
          function v() {
            t || r();
          }
          function p(t) {
            setTimeout(() =>
              u(this, void 0, void 0, function* () {
                yield t(), window.close();
              }),
            );
          }
          return {
            skip: function () {
              const t = (0, o.Fw)().version.url || "";
              p(() => {
                (0, o.Fw)().setAction({ type: s._Q.SKIP_VERSION, payload: t }),
                  (0, c.L9)({
                    eventAction: "updateReminder",
                    eventName: "skipUpdate",
                  });
              });
            },
            checked: d,
            openedByUser: t,
            installNext: function () {
              v(),
                p(
                  () => (
                    (n.value = !0),
                    (e.value = !0),
                    (0, o.Fw)().setAction({ type: s._Q.INSTALL_NEXT_TIME }),
                    (0, c.L9)({
                      eventAction: "updateReminder",
                      eventName: "installNextLaunch",
                    }),
                    h
                  ),
                );
            },
            installNow: function () {
              v(),
                p(
                  () => (
                    (l.value = !0),
                    (e.value = !0),
                    (0, o.Fw)().setAction({ type: s._Q.INSTALL_NOW }),
                    (0, c.L9)({
                      eventAction: "updateReminder",
                      eventName: "installNow",
                    }),
                    h
                  ),
                );
            },
            isWaitingForInstall: e,
            installRelaunchClicked: n,
            installNowClicked: l,
          };
        },
      });
      const r = (0, n(51900).Z)(
        d,
        function () {
          var t = this,
            e = t._self._c;
          t._self._setupProxy;
          return e(
            "div",
            {
              staticClass:
                "uk-height-1-1 uk-flex uk-flex-column uk-flex-between",
            },
            [
              e(
                "div",
                [
                  e("div", { staticClass: "title title-top" }, [
                    t._v(
                      "\n      " +
                        t._s(t.$T("Your Update is Ready to Install")) +
                        "\n    ",
                    ),
                  ]),
                  t._v(" "),
                  e("update-desc"),
                ],
                1,
              ),
              t._v(" "),
              t.openedByUser
                ? e("div", { staticClass: "action-area" }, [
                    e("div", { staticClass: "uk-flex uk-flex-right" }, [
                      e(
                        "button",
                        {
                          staticClass: "uk-button uk-button-primary",
                          attrs: { disabled: t.installNowClicked },
                          on: { click: t.installNow },
                        },
                        [
                          e("span", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  t.installNowClicked && t.isWaitingForInstall,
                                expression:
                                  "installNowClicked && isWaitingForInstall",
                              },
                            ],
                            attrs: { "uk-spinner": "ratio: 0.6" },
                          }),
                          t._v(
                            "\n        " +
                              t._s(t.$T("Relaunch to Install")) +
                              "\n      ",
                          ),
                        ],
                      ),
                    ]),
                  ])
                : e("div", { staticClass: "action-area" }, [
                    e("div", { staticClass: "auto-install-checkbox" }, [
                      e("label", [
                        e("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.checked,
                              expression: "checked",
                            },
                          ],
                          staticClass: "uk-checkbox",
                          attrs: { type: "checkbox" },
                          domProps: {
                            checked: Array.isArray(t.checked)
                              ? t._i(t.checked, null) > -1
                              : t.checked,
                          },
                          on: {
                            change: function (e) {
                              var n = t.checked,
                                a = e.target,
                                i = !!a.checked;
                              if (Array.isArray(n)) {
                                var s = t._i(n, null);
                                a.checked
                                  ? s < 0 && (t.checked = n.concat([null]))
                                  : s > -1 &&
                                    (t.checked = n
                                      .slice(0, s)
                                      .concat(n.slice(s + 1)));
                              } else t.checked = i;
                            },
                          },
                        }),
                        t._v(
                          "\n        " +
                            t._s(t.$T("Automatically install future updates")) +
                            "\n      ",
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "uk-flex uk-flex-between" }, [
                      e("div", [
                        e(
                          "button",
                          {
                            staticClass: "uk-button uk-button-default",
                            attrs: { disabled: t.installRelaunchClicked },
                            on: { click: t.installNext },
                          },
                          [
                            e("span", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    t.installRelaunchClicked &&
                                    t.isWaitingForInstall,
                                  expression:
                                    "installRelaunchClicked && isWaitingForInstall",
                                },
                              ],
                              attrs: { "uk-spinner": "ratio: 0.6" },
                            }),
                            t._v(
                              "\n          " +
                                t._s(t.$T("Install on Next Launch")) +
                                "\n        ",
                            ),
                          ],
                        ),
                      ]),
                      t._v(" "),
                      e("div", [
                        e(
                          "button",
                          {
                            staticClass: "uk-button uk-button-primary",
                            attrs: { disabled: t.installNowClicked },
                            on: { click: t.installNow },
                          },
                          [
                            e("span", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    t.installNowClicked &&
                                    t.isWaitingForInstall,
                                  expression:
                                    "installNowClicked && isWaitingForInstall",
                                },
                              ],
                              attrs: { "uk-spinner": "ratio: 0.6" },
                            }),
                            t._v(
                              "\n          " +
                                t._s(t.$T("Install Now")) +
                                "\n        ",
                            ),
                          ],
                        ),
                      ]),
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
    18742: (t, e, n) => {
      n.d(e, { Z: () => c });
      var a = n(2954),
        i = n(50965),
        s = n(5893);
      const l = (0, a.aZ)({
        setup: () => ({
          updateDescPath: (0, s.u3)(
            `${(0, i.Fw)().version.updateDescPath}/index.html`,
          ),
        }),
      });
      const c = (0, n(51900).Z)(
        l,
        function () {
          var t = this,
            e = t._self._c;
          t._self._setupProxy;
          return e("div", { staticClass: "update-desc" }, [
            e("iframe", {
              staticStyle: { width: "100%", height: "100%" },
              attrs: { src: t.updateDescPath, frameborder: "0" },
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
