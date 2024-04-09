"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [3469],
  {
    84987: (t, e, a) => {
      a.d(e, { J3: () => o, M7: () => i, QC: () => r });
      var n = a(81389),
        s = a(2954),
        u = a(50965);
      function o() {
        const t = (0, s.iH)((0, u.Fw)().userConfig.autoChecked);
        return (
          (0, s.YP)(
            t,
            (t) => {
              t ||
                (0, u.Fw)().setAction({
                  type: n._Q.UPDATE_AUTO_CHECKED,
                  payload: !1,
                });
            },
            { immediate: !1 },
          ),
          {
            checked: t,
            trySetAutoUpdateType: function () {
              t.value &&
                (0, u.S)().updatePreferences({ autoUpdateType: "auto" });
            },
          }
        );
      }
      function i() {
        let t = null;
        const e = new Promise((e) => {
            t = e;
          }),
          a = (0, s.YP)(
            () => (0, u.Fw)().status,
            (e) => {
              e === n.A8.INSTALLED && (t(), a());
            },
          );
        return { whenInstalled: e };
      }
      const l = { small: [540, 371], big: [640, 570] };
      function r(t) {
        const [e, a] = l[t];
        (0, u.JX)().handleCommand("setWindowSize", {
          id: window.id,
          width: e,
          height: a,
        });
      }
    },
    23469: (t, e, a) => {
      a.r(e), a.d(e, { default: () => d });
      var n = a(2954),
        s = a(69931),
        u = a(90435),
        o = a(84987),
        i = a(81389),
        l = a(50965),
        r = a(54856);
      const c = (0, n.aZ)({
        setup: () => (
          (0, o.QC)("small"),
          {
            imageURL: (0, s.ju)("static/assets/images/auto-updater/error.png"),
            HDimageURL: `${(0, s.ju)("static/assets/images/auto-updater/error.png")} 1x, ${(0, s.ju)("static/assets/images/auto-updater/error@2x.png")} 2x`,
            retry: function () {
              (0, l.Fw)().setAction({ type: i._Q.RETRY });
            },
            download: function () {
              u.ZP.fetch(r.lf.GO_DOWNLOAD);
            },
          }
        ),
      });
      const d = (0, a(51900).Z)(
        c,
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
              e("div", [
                e("img", {
                  attrs: {
                    draggable: "false",
                    src: t.imageURL,
                    srcset: t.HDimageURL,
                  },
                }),
                t._v(" "),
                e("div", { staticClass: "title title-middle" }, [
                  t._v(
                    "\n      " + t._s(t.$T("Update is Interrupted")) + "\n    ",
                  ),
                ]),
                t._v(" "),
                e("div", { staticClass: "desc-content" }, [
                  t._v(
                    "\n      " +
                      t._s(
                        t.$T(
                          "Some problems occur due to unstable network or server.",
                        ),
                      ) +
                      "\n    ",
                  ),
                ]),
              ]),
              t._v(" "),
              e(
                "div",
                {
                  staticClass:
                    "action-area uk-flex uk-flex-right uk-button-group",
                },
                [
                  e(
                    "button",
                    {
                      staticClass: "uk-button uk-button-default",
                      on: { click: t.download },
                    },
                    [
                      t._v(
                        "\n      " + t._s(t.$T("Download Manually")) + "\n    ",
                      ),
                    ],
                  ),
                  t._v(" "),
                  e(
                    "button",
                    {
                      staticClass: "uk-button uk-button-primary",
                      on: { click: t.retry },
                    },
                    [t._v("\n      " + t._s(t.$T("Retry")) + "\n    ")],
                  ),
                ],
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
  },
]);
