"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [397],
  {
    90397: (t, e, s) => {
      s.r(e), s.d(e, { default: () => u });
      var a = s(2954),
        i = s(76893),
        o = s(22345),
        r = s(50965),
        n = s(18621);
      const l = (0, a.aZ)({
        __name: "beginnermode",
        setup(t) {
          const e = (0, a.FN)().proxy,
            s = (0, a.iH)(!0),
            l = (0, a.iH)(!1),
            u = (0, a.iH)(!1),
            d = (0, a.iH)(!1),
            c = (0, a.iH)(!1),
            g = (0, a.Fl)(
              () =>
                `${e.$toResourceURL("static/assets/images/tutorial/get-started.png")} 1x, ${e.$toResourceURL("static/assets/images/tutorial/get-started@2x.png")} 2x`,
            ),
            k = (0, a.Fl)(
              () =>
                `${e.$toResourceURL("static/assets/images/tutorial/get-started-finish.png")} 1x, ${e.$toResourceURL("static/assets/images/tutorial/get-started-finish@2x.png")} 2x`,
            ),
            v = (0, a.Fl)(() => (0, o.X)().actionMode),
            m = (0, a.Fl)(() => (0, o.X)().step),
            p = (0, a.Fl)(() => (0, o.X)().tutoriallist),
            h = (0, a.Fl)(() => 3 === m.value),
            _ = (0, a.iH)(),
            b = () => {
              c.value = 0 === _.value.scrollTop;
            },
            x = (t, e) => {
              const s = e.scrollTop,
                a = e.scrollHeight - s;
              function i(o) {
                const r = (function (t, e, s, a) {
                  return (t /= a / 2) < 1
                    ? (s / 2) * t * t + e
                    : (-s / 2) * ((t -= 1) * (t - 2) - 1) + e;
                })((o += 30), s, a, t);
                (e.scrollTop = r),
                  o < t &&
                    setTimeout(function () {
                      i(o);
                    }, 30);
              }
              window.requestAnimationFrame(() => {
                i(0);
              });
            },
            w = (t = 500) => {
              e.$nextTick(() => {
                x(t, _.value);
              });
            },
            f = () => {
              window.removeEventListener("keydown", f, !0),
                setTimeout(() => {
                  (s.value = !1), w(1600);
                }, 2e3);
            };
          return (
            (0, a.bv)(() => {
              _.value.addEventListener("scroll", b),
                setTimeout(() => {
                  u.value = !0;
                }, 500),
                setTimeout(() => {
                  (l.value = !0), w(1300), (d.value = !0);
                }, 1200);
            }),
            (0, a.Jd)(() => {
              _.value.removeEventListener("scroll", b),
                window.removeEventListener("keydown", f),
                (0, o.X)().changeStep(0);
            }),
            (0, a.YP)(
              () => h.value,
              (t) => {
                t && window.addEventListener("keydown", f, !0);
              },
            ),
            (0, a.YP)(
              () => v.value,
              (t) => t && w(),
            ),
            {
              __sfc: !0,
              vm: e,
              waitEdit: s,
              startShow: l,
              showDialogContent: u,
              showTitleShadow: d,
              scollToTop: c,
              startHDImage: g,
              startFinishHDImage: k,
              actionMode: v,
              step: m,
              tutoriallist: p,
              enterEditMode: h,
              beginnerContent: _,
              handleScrollShadow: b,
              scrollToBottom: x,
              scrollTo: w,
              keyDownListener: f,
              exit: () => {
                (0, r.km)().updateAutoBeginnerModeVisible(!1),
                  (0, i.E)().changeBeginnerModeVisible(!1),
                  (0, n.L9)({
                    eventCategory: "Tutorial",
                    eventAction: "skipGuide",
                  });
              },
            }
          );
        },
      });
      const u = (0, s(51900).Z)(
        l,
        function () {
          var t = this,
            e = t._self._c,
            s = t._self._setupProxy;
          return e(
            "div",
            {
              ref: "beginner",
              staticClass:
                "uk-background-default uk-height-1-1 uk-overflow-hidden uk-position-bottom-right uk-border-rounded",
              staticStyle: {
                right: "30px",
                bottom: "30px",
                "z-index": "1000",
                "box-shadow": "0 0 10px 0 rgba(152, 156, 162, 0.28)",
                width: "380px",
                height: "383px",
                outline: "none",
              },
              on: {
                keyup: function (e) {
                  return !e.type.indexOf("key") &&
                    t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])
                    ? null
                    : (e.stopPropagation(), s.exit.apply(null, arguments));
                },
              },
            },
            [
              s.showDialogContent
                ? e("div", { staticClass: "uk-padding-small uk-text-right" }, [
                    e("button", {
                      staticClass:
                        "uk-button uk-button-icon uk-button-tile uk-icon uk-padding-remove-vertical uk-padding-small",
                      attrs: { "uk-icon": "close" },
                      on: { click: s.exit },
                    }),
                  ])
                : t._e(),
              t._v(" "),
              e("hr", { staticClass: "uk-margin-remove" }),
              t._v(" "),
              e(
                "div",
                {
                  ref: "beginnerContent",
                  staticClass: "uk-height-1-1 uk-overflow-auto uk-padding",
                  staticStyle: { height: "343px" },
                },
                [
                  s.showDialogContent
                    ? e("div", { staticClass: "uk-flex uk-flex-column" }, [
                        e("img", {
                          staticClass:
                            "uk-background-cover uk-margin-small-bottom",
                          attrs: {
                            draggable: "false",
                            src: t.$toResourceURL(
                              "static/assets/images/tutorial/get-started.png",
                            ),
                            srcset: s.startHDImage,
                          },
                        }),
                        t._v(" "),
                        e(
                          "h1",
                          {
                            staticClass:
                              "uk-heading-primary uk-text-left uk-margin-small-bottom",
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.$T("Get Started")) +
                                "\n      ",
                            ),
                          ],
                        ),
                        t._v(" "),
                        e("div", { staticClass: "uk-margin-large-bottom" }, [
                          t._v(
                            "\n        " +
                              t._s(
                                t.$T(
                                  'Welcome to Xmind. Now, let\'s create your first mind map with your keyboard and the 3-step tutorial below. If you want to start later, you can always find the tutorial in "Help" menu.',
                                ),
                              ) +
                              "\n      ",
                          ),
                        ]),
                      ])
                    : t._e(),
                  t._v(" "),
                  s.step >= 0 && s.startShow
                    ? e(
                        "div",
                        {
                          staticClass:
                            "uk-flex uk-flex-between uk-padding-small uk-border-rounded uk-panel uk-background-muted",
                        },
                        [
                          e("div", { staticClass: "uk-margin-right" }, [
                            t._v(
                              "\n        " +
                                t._s(
                                  t.$T(
                                    "First, let's select the Central Topic with a click, and then press",
                                  ),
                                ) +
                                "\n        ",
                            ),
                            e("strong", [t._v(t._s(s.tutoriallist[0].key))]),
                            t._v(".\n      "),
                          ]),
                          t._v(" "),
                          e("img", {
                            staticClass: "uk-preserve uk-background-cover",
                            staticStyle: { width: "137px", height: "78px" },
                            attrs: {
                              draggable: "false",
                              "data-src": t.$toResourceURL(
                                "static/assets/images/tutorial/step-01.svg",
                              ),
                              "uk-img": "",
                            },
                          }),
                        ],
                      )
                    : t._e(),
                  t._v(" "),
                  s.step > 0 || (!s.actionMode && s.step >= 0)
                    ? e(
                        "div",
                        { staticClass: "uk-flex uk-flex-right uk-margin-top" },
                        [
                          e(
                            "div",
                            {
                              staticClass:
                                "uk-flex-inline uk-flex-middle uk-padding-small uk-border-rounded uk-background-muted",
                            },
                            [
                              e("img", {
                                staticClass:
                                  "uk-preserve uk-background-cover uk-margin-small-right",
                                staticStyle: { width: "22px", height: "22px" },
                                attrs: {
                                  draggable: "false",
                                  "data-src": t.$toResourceURL(
                                    "static/assets/images/tutorial/thumb-marker.svg",
                                  ),
                                  "uk-svg": "",
                                },
                              }),
                              t._v(" "),
                              e("div", [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$T(
                                        "Cool. You've just added a child topic.",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ]),
                            ],
                          ),
                        ],
                      )
                    : t._e(),
                  t._v(" "),
                  s.step >= 1
                    ? e(
                        "div",
                        {
                          staticClass:
                            "uk-flex uk-flex-between uk-padding-small uk-margin-top uk-border-rounded uk-background-muted",
                        },
                        [
                          e("div", { staticClass: "uk-margin-right" }, [
                            t._v(
                              "\n        " +
                                t._s(t.$T("Now, press")) +
                                "\n        ",
                            ),
                            e("strong", [t._v(t._s(s.tutoriallist[1].key))]),
                            t._v(".\n      "),
                          ]),
                          t._v(" "),
                          e("img", {
                            staticClass: "uk-preserve uk-background-cover",
                            staticStyle: { width: "137px", height: "78px" },
                            attrs: {
                              draggable: "false",
                              "data-src": t.$toResourceURL(
                                "static/assets/images/tutorial/step-02.svg",
                              ),
                              "uk-img": "",
                            },
                          }),
                        ],
                      )
                    : t._e(),
                  t._v(" "),
                  s.step > 1 || (!s.actionMode && s.step >= 1)
                    ? e(
                        "div",
                        { staticClass: "uk-flex uk-flex-right uk-margin-top" },
                        [
                          e(
                            "div",
                            {
                              staticClass:
                                "uk-flex-inline uk-flex-middle uk-padding-small uk-border-rounded uk-background-muted",
                            },
                            [
                              e("img", {
                                staticClass:
                                  "uk-preserve uk-background-cover uk-margin-small-right",
                                staticStyle: { width: "22px", height: "22px" },
                                attrs: {
                                  draggable: "false",
                                  "data-src": t.$toResourceURL(
                                    "static/assets/images/tutorial/smile-marker.svg",
                                  ),
                                  "uk-svg": "",
                                },
                              }),
                              t._v(" "),
                              e("div", [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$T(
                                        "Bravo. You've added a sibling topic.",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ]),
                            ],
                          ),
                        ],
                      )
                    : t._e(),
                  t._v(" "),
                  s.step >= 2
                    ? e(
                        "div",
                        {
                          staticClass:
                            "uk-flex uk-flex-between uk-padding-small uk-margin-top uk-border-rounded uk-background-muted",
                        },
                        [
                          e("div", { staticClass: "uk-margin-right" }, [
                            t._v(
                              "\n        " +
                                t._s(t.$T("You're almost there, press")) +
                                "\n        ",
                            ),
                            e("strong", [
                              t._v(
                                "\n          " +
                                  t._s(s.tutoriallist[2].key) +
                                  "\n        ",
                              ),
                            ]),
                            t._v(
                              "\n        " +
                                t._s(
                                  t.$T("and jot down what's in your mind."),
                                ) +
                                "\n      ",
                            ),
                          ]),
                          t._v(" "),
                          e("img", {
                            staticClass: "uk-preserve uk-background-cover",
                            staticStyle: { width: "137px", height: "78px" },
                            attrs: {
                              draggable: "false",
                              "data-src": t.$toResourceURL(
                                "static/assets/images/tutorial/step-03.svg",
                              ),
                              "uk-img": "",
                            },
                          }),
                        ],
                      )
                    : t._e(),
                  t._v(" "),
                  s.step > 2 && !s.waitEdit
                    ? e("div", { staticClass: "uk-margin-top" }, [
                        e("img", {
                          staticClass:
                            "uk-background-cover uk-margin-auto uk-display-block",
                          staticStyle: { width: "150px", height: "97px" },
                          attrs: {
                            draggable: "false",
                            src: t.$toResourceURL(
                              "static/assets/images/tutorial/get-started-finish.png",
                            ),
                            srcset: s.startFinishHDImage,
                          },
                        }),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass:
                              "uk-margin-top uk-margin-large-bottom uk-text-center",
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(
                                  t.$T(
                                    "Hooray, you did it! Now, you can create mind maps freely.",
                                  ),
                                ) +
                                "\n      ",
                            ),
                          ],
                        ),
                      ])
                    : t._e(),
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
