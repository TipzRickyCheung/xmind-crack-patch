"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [1626],
  {
    71626: (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var a = i(2954),
        s = i(50965),
        n = i(76893),
        l = i(69931),
        o = i(18621);
      const u = (0, a.aZ)({
        __name: "tutorial-dialog",
        setup(t) {
          const e = (0, s.JE)().T,
            i = (0, a.iH)(!1),
            u = (0, a.Fl)(() => (0, n.E)().isBeginnerDialogVisible),
            r = `${(0, l.ju)("static/assets/images/tutorial/get-started.png")} 1x, ${(0, l.ju)("static/assets/images/tutorial/get-started@2x.png")} 2x`,
            c = () => {
              (0, s.km)().setTutorialShowSign(!0),
                (0, n.E)().changeBeginnerDialogVisible(!1);
            };
          return (
            (0, a.bv)(() => {
              setTimeout(() => {
                i.value = !0;
              }, 500);
            }),
            {
              __sfc: !0,
              $T: e,
              innnerVisible: i,
              isBeginnerDialogVisible: u,
              HDImageURL: r,
              close: c,
              handleClose: () => {
                c(),
                  (0, o.L9)({
                    eventCategory: "Tutorial",
                    eventAction: "skipGuide",
                  });
              },
              handleConfirm: () => {
                (0, s.km)().updateAutoBeginnerModeVisible(!0), c();
              },
            }
          );
        },
      });
      const r = (0, i(51900).Z)(
        u,
        function () {
          var t = this,
            e = t._self._c,
            i = t._self._setupProxy;
          return i.isBeginnerDialogVisible && i.innnerVisible
            ? e(
                "div",
                {
                  staticClass: "uk-position-cover uk-position-fixed",
                  staticStyle: { zindex: "999" },
                },
                [
                  e(
                    "div",
                    {
                      staticClass:
                        "uk-background-default uk-padding-large uk-panel uk-panel-scrollable uk-position-center uk-text-center",
                      staticStyle: {
                        width: "540px",
                        height: "352px",
                        zindex: "999",
                        "box-shadow":
                          "rgba(152, 156, 162, 0.28) 0px 0px 10px 0px",
                      },
                    },
                    [
                      e("h1", { staticClass: "uk-margin-small-bottom" }, [
                        t._v("\n      " + t._s(i.$T("Get Started")) + "\n    "),
                      ]),
                      t._v(" "),
                      e("img", {
                        staticClass:
                          "uk-background-cover uk-margin-small-bottom",
                        staticStyle: { height: "150px" },
                        attrs: {
                          draggable: "false",
                          src: t.$toResourceURL(
                            "static/assets/images/tutorial/get-started.png",
                          ),
                          srcset: i.HDImageURL,
                        },
                      }),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass: "uk-padding uk-padding-remove-vertical",
                        },
                        [
                          t._v(
                            "\n      " +
                              t._s(
                                i.$T(
                                  'Welcome to Xmind. Now, let\'s create your first mind map with your keyboard and the 3-step tutorial below. If you want to start later, you can always find the tutorial in "Help" menu.',
                                ),
                              ) +
                              "\n    ",
                          ),
                        ],
                      ),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass:
                            "uk-flex uk-flex-middle uk-flex-center uk-margin-large-top",
                        },
                        [
                          e(
                            "button",
                            {
                              staticClass:
                                "uk-button uk-button-primary uk-margin-right",
                              on: { click: i.handleConfirm },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(i.$T("Continue")) +
                                  "\n      ",
                              ),
                            ],
                          ),
                          t._v(" "),
                          e(
                            "button",
                            {
                              staticClass: "uk-button uk-button-text",
                              on: { click: i.handleClose },
                            },
                            [
                              t._v(
                                "\n        " + t._s(i.$T("Skip")) + "\n      ",
                              ),
                            ],
                          ),
                        ],
                      ),
                    ],
                  ),
                ],
              )
            : t._e();
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
