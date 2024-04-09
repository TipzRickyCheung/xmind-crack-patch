"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [9778],
  {
    59778: (t, i, o) => {
      o.r(i), o.d(i, { default: () => d });
      var e = o(2954),
        l = o(76893),
        n = o(96160),
        u = o(1593),
        a = o(18621);
      var s = o(51270);
      const c = (0, e.aZ)({
        __name: "editor-topic-count",
        setup(t) {
          const {
            display: i,
            isTopicCountButtonDisabled: o,
            topicCountDetails: c,
            detailsCSSHeight: d,
            handleTopicCountBtnClick: p,
          } = (() => {
            const { T: t } = (0, u.C)(),
              i = (0, e.Fl)(() => {
                const { activeSheet: t, allTopicsWithin: i } = (0, n.nZ)();
                return t.value ? Array.from(i([t.value.rootTopic])).length : 0;
              }),
              o = (0, e.Fl)(() => {
                var t, i, o, e;
                return null !==
                  (e =
                    null ===
                      (o =
                        null ===
                          (i =
                            null === (t = (0, n.nZ)().properties) ||
                            void 0 === t
                              ? void 0
                              : t.value) || void 0 === i
                          ? void 0
                          : i.countOfTopics) || void 0 === o
                      ? void 0
                      : o.value) && void 0 !== e
                  ? e
                  : 0;
              }),
              s = (0, e.Fl)(() => {
                var t, i, o, e;
                return null !==
                  (e =
                    null ===
                      (o =
                        null ===
                          (i =
                            null === (t = (0, n.nZ)().properties) ||
                            void 0 === t
                              ? void 0
                              : t.value) || void 0 === i
                          ? void 0
                          : i.countOfWords) || void 0 === o
                      ? void 0
                      : o.value) && void 0 !== e
                  ? e
                  : 0;
              }),
              c = (0, e.Fl)(() => {
                var t, i, o, e;
                return null !==
                  (e =
                    null ===
                      (o =
                        null ===
                          (i =
                            null === (t = (0, n.nZ)().properties) ||
                            void 0 === t
                              ? void 0
                              : t.value) || void 0 === i
                          ? void 0
                          : i.countOfCharacters) || void 0 === o
                      ? void 0
                      : o.value) && void 0 !== e
                  ? e
                  : 0;
              }),
              d = (0, e.Fl)(() => {
                var t, i, o;
                return "topic" ===
                  (null ===
                    (i =
                      null === (t = (0, n.nZ)().selection) || void 0 === t
                        ? void 0
                        : t.value) || void 0 === i
                    ? void 0
                    : i.type)
                  ? null === (o = (0, n.nZ)().selection) || void 0 === o
                    ? void 0
                    : o.value.modelIds.length
                  : 0;
              }),
              p = (0, e.Fl)(() => [
                { title: t("Topics"), count: o.value },
                { title: t("Words"), count: s.value },
                { title: t("Characters"), count: c.value },
              ]),
              r = (0, e.Fl)(() => (0, l.E)().sheetRendering);
            return {
              display: (0, e.Fl)(
                () =>
                  `${t("Topics")}: ${d.value > 0 ? `${d.value} /` : ""} ${i.value}`,
              ),
              topicCountDetails: p,
              isTopicCountButtonDisabled: r,
              detailsCSSHeight: () => 24 * p.value.length + "px",
              handleTopicCountBtnClick: () => {
                (0, a.L9)({
                  eventCategory: "Sheetbar",
                  eventAction: "topicCount",
                });
              },
            };
          })();
          return {
            __sfc: !0,
            display: i,
            isTopicCountButtonDisabled: o,
            topicCountDetails: c,
            detailsCSSHeight: d,
            handleTopicCountBtnClick: p,
            TopicCount: s.Z,
          };
        },
      });
      const d = (0, o(51900).Z)(
        c,
        function () {
          var t = this,
            i = t._self._c,
            o = t._self._setupProxy;
          return i(
            o.TopicCount,
            t._b(
              {},
              "topic-count",
              {
                display: o.display,
                isTopicCountButtonDisabled: o.isTopicCountButtonDisabled,
                topicCountDetails: o.topicCountDetails,
                detailsCSSHeight: o.detailsCSSHeight,
                handleTopicCountBtnClick: o.handleTopicCountBtnClick,
              },
              !1,
            ),
          );
        },
        [],
        !1,
        null,
        "8acca748",
        null,
      ).exports;
    },
    51270: (t, i, o) => {
      o.d(i, { Z: () => a });
      var e = o(2954),
        l = o(95246),
        n = o(76893);
      const u = (0, e.aZ)({
        __name: "topic-count",
        props: {
          display: null,
          isTopicCountButtonDisabled: { type: Boolean, default: !1 },
          topicCountDetails: null,
          detailsCSSHeight: null,
          handleTopicCountBtnClick: null,
        },
        setup(t) {
          const i = (0, e.FN)().proxy,
            o = (0, e.iH)();
          return (
            (0, e.Jd)(() => {
              i.$withUIKit((t) => {
                t.pop(o.value).close();
              });
            }),
            (0, e.YP)(
              () => (0, n.E)().isTopicCountLabelVisible,
              () => {
                i.$withUIKit((t) => {
                  const i = t.pop(o.value);
                  i.isActive() ? i.close() : i.show();
                });
              },
            ),
            { __sfc: !0, vm: i, popover: o, wrappedTooltipWithKeybinding: l.RL }
          );
        },
      });
      const a = (0, o(51900).Z)(
        u,
        function () {
          var t = this,
            i = t._self._c,
            o = t._self._setupProxy;
          return i("div", [
            i(
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
                  title: o.wrappedTooltipWithKeybinding(
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
            i(
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
                i("div", { attrs: { autofocus: "", tabindex: "-1" } }),
                t._v(" "),
                i(
                  "div",
                  {
                    staticClass: "uk-padding-small",
                    style: { height: t.detailsCSSHeight() },
                  },
                  [
                    i(
                      "ul",
                      {
                        staticClass:
                          "uk-padding-small uk-padding-remove-vertical",
                      },
                      t._l(
                        t.topicCountDetails,
                        function ({ count: o, title: e }) {
                          return i(
                            "li",
                            {
                              key: e,
                              staticClass: "uk-flex uk-flex-row uk-flex-middle",
                              staticStyle: {
                                height: "24px",
                                "line-height": "24px",
                              },
                            },
                            [
                              i(
                                "span",
                                {
                                  staticClass: "uk-width-expand uk-text-muted",
                                  staticStyle: {
                                    "font-size": "13px",
                                    "font-weight": "500",
                                  },
                                },
                                [t._v(t._s(e))],
                              ),
                              t._v(" "),
                              i("span", [t._v(t._s(o))]),
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
