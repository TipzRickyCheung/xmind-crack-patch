"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [9319],
  {
    59319: (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(2954),
        n = i(1593),
        l = i(18621),
        s = i(91324),
        u = i(76893),
        a = i(837);
      const c = /[\u00ff-\uffff]|[^\s\u00ff-\uffff]+/g;
      var p = i(51270);
      const d = (0, o.aZ)({
        __name: "outliner-topic-count",
        setup(t) {
          const {
            display: e,
            isTopicCountButtonDisabled: i,
            topicCountDetails: d,
            detailsCSSHeight: r,
            handleTopicCountBtnClick: v,
          } = (() => {
            const { T: t } = (0, n.C)(),
              e = (0, o.iH)(0),
              i = (0, o.iH)(0),
              p = (0, o.iH)(0),
              d = (0, o.iH)(0),
              r = (0, o.Fl)(
                () =>
                  (0, a.dI)().outlinerState.value.selectionIds.length ||
                  (0, a.dI)().outlinerState.value.allTopicItems.length,
              ),
              v = (0, o.Fl)(() => [
                { title: t("Topics"), count: r.value },
                { title: t("Words"), count: i.value || e.value },
                { title: t("Characters"), count: d.value || p.value },
              ]),
              C = (0, o.Fl)(() => (0, u.E)().sheetRendering),
              h = (0, o.Fl)(
                () =>
                  `${t("Words")}: ${i.value > 0 ? `${i.value} /` : ""} ${e.value}`,
              ),
              g = (t) => {
                if (!t) return 0;
                const e = t.match(c);
                return e ? e.length : 0;
              },
              f = (t) => (t ? t.length : 0),
              _ = () => {
                i.value = g(window.getSelection().toString());
              },
              m = (t) => {
                let e = 0,
                  i = 0;
                return (
                  t.forEach((t) => {
                    (e += g(t.title)),
                      (i += f(t.title)),
                      t.notes &&
                        ((e += g(t.notes.text)), (i += f(t.notes.text)));
                  }),
                  { wordCount: e, stringCount: i }
                );
              },
              T = (0, s.Ds)(() => {
                const { outlinerState: t } = (0, a.dI)(),
                  { selectionIds: e, allTopicItems: o } = t.value,
                  n = e.map((t) => o.find((e) => e.topicId === t)),
                  { wordCount: l, stringCount: s } = m(n);
                (i.value = l), (d.value = s);
              }, 100);
            let k = null,
              b = null;
            return (
              (0, o.bv)(() => {
                setTimeout(() => {
                  document.addEventListener("selectionchange", _, !1),
                    (k = (0, o.YP)(
                      () => (0, a.dI)().outlinerState.value.selectionIds,
                      () => {
                        T();
                      },
                    )),
                    (b = (0, o.YP)(
                      () => (0, a.dI)().outlinerState.value.allTopicItems,
                      (t) => {
                        const { wordCount: i, stringCount: o } = m(t);
                        (e.value = i), (p.value = o);
                      },
                      { immediate: !0 },
                    ));
                });
              }),
              (0, o.Jd)(() => {
                document.removeEventListener("selectionchange", _, !1),
                  k && k(),
                  b && b();
              }),
              {
                display: h,
                topicCountDetails: v,
                isTopicCountButtonDisabled: C,
                detailsCSSHeight: () => 24 * v.value.length + "px",
                handleTopicCountBtnClick: () => {
                  (0, l.L9)({
                    eventCategory: "Sheetbar",
                    eventAction: "topicCount",
                  });
                },
              }
            );
          })();
          return {
            __sfc: !0,
            display: e,
            isTopicCountButtonDisabled: i,
            topicCountDetails: d,
            detailsCSSHeight: r,
            handleTopicCountBtnClick: v,
            TopicCount: p.Z,
          };
        },
      });
      const r = (0, i(51900).Z)(
        d,
        function () {
          var t = this,
            e = t._self._c,
            i = t._self._setupProxy;
          return e(
            i.TopicCount,
            t._b(
              {},
              "topic-count",
              {
                display: i.display,
                isTopicCountButtonDisabled: i.isTopicCountButtonDisabled,
                topicCountDetails: i.topicCountDetails,
                detailsCSSHeight: i.detailsCSSHeight,
                handleTopicCountBtnClick: i.handleTopicCountBtnClick,
              },
              !1,
            ),
          );
        },
        [],
        !1,
        null,
        "2089b3d0",
        null,
      ).exports;
    },
    51270: (t, e, i) => {
      i.d(e, { Z: () => u });
      var o = i(2954),
        n = i(95246),
        l = i(76893);
      const s = (0, o.aZ)({
        __name: "topic-count",
        props: {
          display: null,
          isTopicCountButtonDisabled: { type: Boolean, default: !1 },
          topicCountDetails: null,
          detailsCSSHeight: null,
          handleTopicCountBtnClick: null,
        },
        setup(t) {
          const e = (0, o.FN)().proxy,
            i = (0, o.iH)();
          return (
            (0, o.Jd)(() => {
              e.$withUIKit((t) => {
                t.pop(i.value).close();
              });
            }),
            (0, o.YP)(
              () => (0, l.E)().isTopicCountLabelVisible,
              () => {
                e.$withUIKit((t) => {
                  const e = t.pop(i.value);
                  e.isActive() ? e.close() : e.show();
                });
              },
            ),
            { __sfc: !0, vm: e, popover: i, wrappedTooltipWithKeybinding: n.RL }
          );
        },
      });
      const u = (0, i(51900).Z)(
        s,
        function () {
          var t = this,
            e = t._self._c,
            i = t._self._setupProxy;
          return e("div", [
            e(
              "button",
              {
                directives: [
                  {
                    name: "focus-contexts",
                    rawName: "v-focus-contexts:no",
                    arg: "no",
                  },
                ],
                staticClass:
                  "uk-button uk-button-tile uk-padding-small uk-padding-remove-vertical uk-height-1-1",
                attrs: {
                  title: i.wrappedTooltipWithKeybinding(
                    t.$T("Show or hide Topic Count."),
                    "editor.toggleTopicCountLabel",
                  ),
                  disabled: t.isTopicCountButtonDisabled,
                },
                on: { click: t.handleTopicCountBtnClick },
              },
              [t._v("\n    " + t._s(t.display) + "\n  ")],
            ),
            t._v(" "),
            e(
              "div",
              {
                directives: [
                  {
                    name: "focus-contexts",
                    rawName: "v-focus-contexts:group",
                    value: ["focus.popover"],
                    expression: "['focus.popover']",
                    arg: "group",
                  },
                ],
                ref: "popover",
                staticStyle: { "min-width": "170px" },
                attrs: { "uk-popover": "", "data-pos": "top-center" },
              },
              [
                e("div", { attrs: { autofocus: "", tabindex: "-1" } }),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "uk-padding-small",
                    style: { height: t.detailsCSSHeight() },
                  },
                  [
                    e(
                      "ul",
                      {
                        staticClass:
                          "uk-padding-small uk-padding-remove-vertical",
                      },
                      t._l(
                        t.topicCountDetails,
                        function ({ count: i, title: o }) {
                          return e(
                            "li",
                            {
                              key: o,
                              staticClass: "uk-flex uk-flex-row uk-flex-middle",
                              staticStyle: {
                                height: "24px",
                                "line-height": "24px",
                              },
                            },
                            [
                              e(
                                "span",
                                {
                                  staticClass: "uk-width-expand uk-text-muted",
                                  staticStyle: {
                                    "font-size": "13px",
                                    "font-weight": "500",
                                  },
                                },
                                [t._v(t._s(o))],
                              ),
                              t._v(" "),
                              e("span", [t._v(t._s(i))]),
                            ],
                          );
                        },
                      ),
                      0,
                    ),
                  ],
                ),
              ],
            ),
          ]);
        },
        [],
        !1,
        null,
        "37bced46",
        null,
      ).exports;
    },
  },
]);
