(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [5536],
  {
    74138: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => l });
      var a = n(23645),
        i = n.n(a)()(function (e) {
          return e[1];
        });
      i.push([
        e.id,
        ".new-win-title-bar[data-v-28bad24c] {\n  transition: all 0.1s ease-in-out;\n}\n.new-win-title-bar-default[data-v-28bad24c] {\n  background: transparent !important;\n  border-color: transparent !important;\n}\n.new-title-bar[data-v-28bad24c] {\n  padding: 0 16px;\n}\n.title-bar-icon[data-v-28bad24c] {\n  width: 64px;\n  height: 16px;\n}\n.new-left-panel[data-v-28bad24c] {\n  width: 220px;\n}\n.new-right-panel[data-v-28bad24c] {\n  margin-top: 30px;\n}\n",
        "",
      ]);
      const l = i;
    },
    59316: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => l });
      var a = n(23645),
        i = n.n(a)()(function (e) {
          return e[1];
        });
      i.push([
        e.id,
        ".preview-container[data-v-2df0b3a0] {\n  padding-top: 20px;\n}\n.preview-group[data-v-2df0b3a0] {\n  margin-top: 32px;\n}\n.preview-group[data-v-2df0b3a0]:first-of-type {\n  margin-top: 0px;\n}\n",
        "",
      ]);
      const l = i;
    },
    30673: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => l });
      var a = n(23645),
        i = n.n(a)()(function (e) {
          return e[1];
        });
      i.push([
        e.id,
        ".preview-map-list[data-v-dc210c40] {\n  list-style: none;\n  display: grid;\n  transition: all 0.2s;\n  padding-top: 4px !important;\n}\n.preview-map-list li[data-v-dc210c40] {\n  transition: opacity 0.2s;\n}\n.preview-map-list.preview-map-list-visible li[data-v-dc210c40] {\n  opacity: 1 !important;\n}\n.expand-icon-rotate[data-v-dc210c40] {\n  transform: rotate(-90deg);\n}\n.uk-border-rounded[data-v-dc210c40] {\n  border-radius: 10px;\n}\n.uk-win32 .uk-border-rounded[data-v-dc210c40] {\n  border-radius: 4px;\n}\n",
        "",
      ]);
      const l = i;
    },
    32874: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => l });
      var a = n(23645),
        i = n.n(a)()(function (e) {
          return e[1];
        });
      i.push([
        e.id,
        ".preview-container[data-v-2bc6eb81] {\n  padding-top: 20px;\n}\n.preview-container .theme-category-name[data-v-2bc6eb81] {\n  margin-top: 32px;\n  margin-bottom: 20px;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n}\n.preview-container .theme-category-name[data-v-2bc6eb81]:first-of-type {\n  margin-top: 0;\n}\n.preview-map-list[data-v-2bc6eb81] {\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-column-gap: 24px;\n  grid-row-gap: 28px;\n}\n.uk-border-rounded[data-v-2bc6eb81] {\n  border-radius: 10px;\n}\n.uk-win32 .uk-border-rounded[data-v-2bc6eb81] {\n  border-radius: 4px;\n}\n",
        "",
      ]);
      const l = i;
    },
    60812: (e, t, n) => {
      "use strict";
      n.r(t);
      var a = n(51505),
        i = n(2954),
        l = n(67657),
        s = n(63477),
        r = n.n(s),
        o = n(92636),
        c = n(54856),
        u = n(90435),
        d = n(18621),
        p = n(69931),
        v = n(79409),
        m = n(50965),
        f = n(23279),
        h = n.n(f),
        w = n(71017),
        b = n.n(w),
        g = n(94593),
        y = n(33394),
        k = n(13382),
        x = n(7104),
        _ = n(69297),
        C = n(5893),
        I = n(96393),
        T = function (e, t, n, a) {
          return new (n || (n = Promise))(function (i, l) {
            function s(e) {
              try {
                o(a.next(e));
              } catch (e) {
                l(e);
              }
            }
            function r(e) {
              try {
                o(a.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, r);
            }
            o((a = a.apply(e, t || [])).next());
          });
        };
      const S = (0, i.aZ)({
        name: "PreviewMap",
        props: {
          isShowLabel: Boolean,
          previews: { type: Array, default: () => [] },
          selectFirst: { type: Boolean, default: !0 },
          title: { type: String, default: "" },
        },
        setup(e, t) {
          const n = (0, i.iH)(null),
            a = (e) => {
              (n.value = e), t.emit("select", e);
            };
          return (
            (0, i.bv)(() =>
              T(this, void 0, void 0, function* () {
                e.selectFirst && a(e.previews[0] && e.previews[0].items[0]);
              }),
            ),
            {
              getFileNameDisplay: C.Uy,
              selectedItem: n,
              handleSelectItem: a,
              handleSubmit: () => {
                t.emit("submit", n.value);
              },
            }
          );
        },
      });
      n(93938);
      var F = n(51900);
      const R = (0, F.Z)(
        S,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "div",
            {
              staticClass: "uk-overflow-overlay",
              staticStyle: { height: "calc(100vh - 30px)" },
            },
            [
              e._t("header"),
              e._v(" "),
              t("div", { staticStyle: { padding: "10px 46px 48px" } }, [
                e.title
                  ? t(
                      "h1",
                      {
                        staticClass: "uk-margin-remove",
                        staticStyle: { "font-size": "34px" },
                      },
                      [e._v("\n      " + e._s(e.title) + "\n    ")],
                    )
                  : e._e(),
                e._v(" "),
                t(
                  "form",
                  {
                    staticClass: "uk-panel preview-container",
                    on: {
                      submit: function (t) {
                        return (
                          t.preventDefault(),
                          e.handleSubmit.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [
                    t(
                      "div",
                      {
                        attrs: {
                          "uk-list-select": "",
                          "uk-traverse": "",
                          "data-traverse-mode": "nearest-item",
                          "data-item": ".uk-card.uk-card-selectable",
                          "data-form": "true",
                        },
                      },
                      [
                        e._l(e.previews, function (n) {
                          return [
                            e.isShowLabel
                              ? t(
                                  "h3",
                                  {
                                    key: n.label,
                                    staticClass: "theme-category-name",
                                  },
                                  [
                                    e._v(
                                      "\n            " +
                                        e._s(n.label) +
                                        "\n          ",
                                    ),
                                  ],
                                )
                              : e._e(),
                            e._v(" "),
                            t(
                              "ul",
                              {
                                staticClass:
                                  "uk-margin-remove uk-padding-remove preview-map-list",
                              },
                              [
                                e._t("list-header"),
                                e._v(" "),
                                e._l(n.items, function (n) {
                                  return t("li", { key: n.id }, [
                                    t(
                                      "div",
                                      {
                                        staticClass:
                                          "uk-flex uk-flex-column uk-flex-middle",
                                      },
                                      [
                                        t("img", {
                                          staticClass:
                                            "uk-card uk-card-default uk-card-selectable uk-background-cover uk-border-rounded uk-width-1-1",
                                          class: {
                                            "uk-active":
                                              n.id ===
                                              (e.selectedItem &&
                                                e.selectedItem.id),
                                          },
                                          staticStyle: { height: "121px" },
                                          attrs: {
                                            tabindex: "0",
                                            draggable: "false",
                                            src: n.previewURL,
                                          },
                                          on: {
                                            listselectitem: function (t) {
                                              return e.handleSelectItem(n);
                                            },
                                            contextmenu: function (t) {
                                              return e.$emit("contextmenu", n);
                                            },
                                          },
                                        }),
                                        e._v(" "),
                                        t(
                                          "div",
                                          {
                                            staticClass:
                                              "uk-text-center uk-card-selectable-text uk-text-truncate",
                                            staticStyle: {
                                              "margin-top": "12px",
                                            },
                                            attrs: {
                                              title: e.getFileNameDisplay(
                                                n.name,
                                              ),
                                            },
                                          },
                                          [
                                            e._v(
                                              "\n                  " +
                                                e._s(
                                                  e.getFileNameDisplay(n.name),
                                                ) +
                                                "\n                ",
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ]);
                                }),
                                e._v(" "),
                                e._t("list-footer"),
                              ],
                              2,
                            ),
                          ];
                        }),
                      ],
                      2,
                    ),
                  ],
                ),
              ]),
            ],
            2,
          );
        },
        [],
        !1,
        null,
        "2bc6eb81",
        null,
      ).exports;
      var P = n(77242),
        A = function (e, t, n, a) {
          return new (n || (n = Promise))(function (i, l) {
            function s(e) {
              try {
                o(a.next(e));
              } catch (e) {
                l(e);
              }
            }
            function r(e) {
              try {
                o(a.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, r);
            }
            o((a = a.apply(e, t || [])).next());
          });
        };
      const L = (0, i.aZ)({
        name: "NewRecent",
        components: { PreviewMaps: R, VisibilitySensor: I.Z },
        setup(e, t) {
          const n = (0, i.FN)().proxy,
            a = (e, ...t) => (0, m.JE)().T(e, ...t),
            s = (0, i.iH)(!0),
            r = (0, i.iH)(null),
            o = (0, i.Fl)(() => (0, m.km)().recentlyOpenedItems.slice(0, 20)),
            v = (0, i.Fl)(() => {
              const e = [],
                t = n.$toResourceURL("static/assets/images/new/thumbnail.svg");
              for (let { source: n, previewUrl: a } of o.value) {
                if (!(0, C.ab)(n)) continue;
                const i = b().join((0, x.D8)(), a || "");
                e.push({
                  name: (0, C.ab)(n).slice(0, -6),
                  id: n,
                  previewURL:
                    a && a.endsWith("png") && g.Z.existsSync(i) ? p.pP(a) : t,
                });
              }
              return [{ label: a("Recent File"), items: e }];
            }),
            f = h()(() => {
              u.ZP.fetch(c.NF, { source: "new://workbook" }).then(() => {
                window.close();
              }),
                (0, _.fv)(),
                (0, d.L9)({
                  eventAction: "newLaunch",
                  eventName: "createFile",
                });
            }, 10);
          return {
            selectedFile: r,
            rencentItemsPreviews: v,
            createFromSelectedFile: () =>
              A(this, void 0, void 0, function* () {
                if (!r.value) return;
                const e = r.value.id,
                  t = (0, C.iZ)(e);
                if (!(yield y.Z.obtainRWAccessFromOS(t)))
                  return (
                    yield (0, k.N0)({
                      type: "warning",
                      message: a("Failed to Open"),
                      detail: a(
                        "Xmind does not have permission to open this file.",
                      ),
                      buttons: [a("OK")],
                    }),
                    void (0, m.km)().removeRecentlyOpenedItem(e)
                  );
                yield (0, m.JX)().handleCommand("openRecentFileItem", [e]),
                  g.Z.existsSync(t) && window.close(),
                  (0, d.L9)({
                    eventAction: "newLaunch",
                    eventName: "openRecent",
                  });
              }),
            openRecentFileCtxMenu: ({ id: e }) => {
              const t = () =>
                  A(this, void 0, void 0, function* () {
                    const t = o.value.find((t) => t.source === e);
                    if (
                      ((0, m.km)().removeRecentlyOpenedItem(e),
                      t && t.previewUrl && t.previewUrl.endsWith("png"))
                    ) {
                      const e = b().join((0, x.D8)(), t.previewUrl);
                      g.Z.existsSync(e) && (yield g.Z.remove(e));
                    }
                  }),
                n = [
                  { label: a("Remove"), click: t },
                  {
                    label: a("Remove All"),
                    click: () => (0, m.JX)().handleCommand("cleanRecent"),
                  },
                  { type: "separator" },
                  {
                    label: a("Open File Location"),
                    click: () =>
                      A(this, void 0, void 0, function* () {
                        const n = (0, C.iZ)(e);
                        g.Z.existsSync(n)
                          ? l.shell.showItemInFolder(n)
                          : (l.dialog.showMessageBox({
                              type: "error",
                              title: "Xmind",
                              message: a("Open Recent"),
                              detail: a(
                                "This file does not exist. It may have been deleted or moved to another location.",
                              ),
                              buttons: [a("OK")],
                              cancelId: 0,
                            }),
                            yield t());
                      }),
                  },
                ];
              (0, P.k)(n);
            },
            handleNewMap: f,
            atTop: s,
            handleAtTopChange: (e) => {
              (s.value = e),
                t.emit("onAtTopChange", { tab: "recent", atTop: e });
            },
          };
        },
      });
      const O = (0, F.Z)(
        L,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "preview-maps",
            {
              class: { "uk-scrollbar-hidden": e.atTop },
              attrs: {
                title: e.$T("Recents"),
                previews: e.rencentItemsPreviews,
                "select-first": !1,
              },
              on: {
                select: function (t) {
                  e.selectedFile = t;
                },
                submit: e.createFromSelectedFile,
                contextmenu: e.openRecentFileCtxMenu,
              },
            },
            [
              t("visibility-sensor", {
                attrs: { slot: "header" },
                on: { onVisibleChange: e.handleAtTopChange },
                slot: "header",
              }),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      var Z = n(87878),
        D = n(6225),
        M = function (e, t, n, a) {
          return new (n || (n = Promise))(function (i, l) {
            function s(e) {
              try {
                o(a.next(e));
              } catch (e) {
                l(e);
              }
            }
            function r(e) {
              try {
                o(a.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, r);
            }
            o((a = a.apply(e, t || [])).next());
          });
        };
      const N = (0, i.aZ)({
        __name: "preview-maps-item",
        props: { item: null, selectedItemId: null },
        emits: ["error", "success", "select"],
        setup(e, { emit: t }) {
          const n = e,
            a = (0, i.iH)(null),
            l = (0, i.Fl)(() => (0, p.Al)("static/assets/images/pro/lock.svg")),
            s = (0, i.Fl)(
              () => !(0, m.Yh)().isStatusValid && "pro" === n.item.license,
            );
          return (
            (0, i.bv)(() => {
              if (!a.value) return;
              const { id: e } = n.item;
              (a.value.onload = () =>
                M(this, void 0, void 0, function* () {
                  t("success", e);
                })),
                (a.value.onerror = () => {
                  t("error", e);
                });
            }),
            {
              __sfc: !0,
              props: n,
              previewImg: a,
              proIcon: l,
              isShowProIcon: s,
              emits: t,
              handleSelectItem: (e) => {
                t("select", e);
              },
              getFileNameDisplay: C.Uy,
            }
          );
        },
      });
      const E = (0, F.Z)(
          N,
          function () {
            var e = this,
              t = e._self._c,
              n = e._self._setupProxy;
            return t(
              "div",
              { staticClass: "uk-flex uk-flex-column uk-flex-middle" },
              [
                t(
                  "div",
                  {
                    staticClass:
                      "uk-flex uk-flex-center uk-card uk-card-default uk-card-selectable uk-background-cover uk-border-rounded uk-width-1-1 uk-position-relative",
                    class: { "uk-active": e.item.id === e.selectedItemId },
                    staticStyle: {
                      padding: "8px",
                      height: "120px",
                      width: "200px",
                    },
                    style: {
                      "background-color": e.item.thumbnailFillColor ?? "#fff",
                    },
                    on: {
                      listselectitem: function (t) {
                        return n.handleSelectItem(e.item.id);
                      },
                    },
                  },
                  [
                    n.isShowProIcon
                      ? t("img", {
                          staticClass: "uk-position-absolute",
                          staticStyle: {
                            top: "8px",
                            left: "8px",
                            "z-index": "1",
                          },
                          attrs: { src: n.proIcon },
                        })
                      : e._e(),
                    e._v(" "),
                    t("img", {
                      ref: "previewImg",
                      staticStyle: { height: "104px" },
                      attrs: {
                        src: e.item.thumbnail,
                        tabindex: "0",
                        draggable: "false",
                      },
                    }),
                  ],
                ),
                e._v(" "),
                t(
                  "div",
                  {
                    staticClass:
                      "uk-text-center uk-card-selectable-text uk-text-truncate",
                    staticStyle: { "margin-top": "10px" },
                    attrs: { title: n.getFileNameDisplay(e.item.name) },
                  },
                  [
                    e._v(
                      "\n    " +
                        e._s(n.getFileNameDisplay(e.item.name)) +
                        "\n  ",
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
        ).exports,
        B = (0, i.aZ)({
          __name: "preview-group",
          props: {
            items: null,
            label: null,
            selectedItemId: null,
            maxDisplayBeforeCollapse: { default: 3 },
            gridTemplateColumns: { default: 3 },
            gridColumnGap: { default: 24 },
            gridRowGap: { default: 20 },
            gridRowHeight: { default: 150 },
            isCollapsible: { type: Boolean, default: !0 },
          },
          emits: ["select"],
          setup(e, { emit: t }) {
            const n = e,
              a = (0, i.iH)([]),
              l = (0, i.Fl)(() => {
                const {
                  gridColumnGap: e,
                  gridRowGap: t,
                  gridTemplateColumns: a,
                } = n;
                return {
                  gridRowGap: t + "px",
                  gridColumnGap: e + "px",
                  gridTemplateColumns: `repeat(${a}, 1fr)`,
                  height: d.value + "px",
                };
              }),
              s = (0, i.Fl)(() => {
                const {
                    gridRowGap: e,
                    gridRowHeight: t,
                    gridTemplateColumns: i,
                  } = n,
                  l = i,
                  s = a.value.length,
                  r =
                    Math.floor(Math.min(n.maxDisplayBeforeCollapse, s) / l) +
                    (Math.min(n.maxDisplayBeforeCollapse, s) % l ? 1 : 0);
                return t * r + e * (r - 1);
              }),
              r = (0, i.iH)(null),
              o = (0, i.iH)(!1),
              c = (0, i.Fl)(() => !n.isCollapsible || o.value),
              u = (0, i.Fl)(
                () =>
                  n.isCollapsible &&
                  a.value.length > n.maxDisplayBeforeCollapse,
              ),
              d = (0, i.Fl)(() => {
                if (c.value) {
                  const {
                      gridTemplateColumns: e,
                      gridRowHeight: t,
                      gridRowGap: i,
                    } = n,
                    l = Math.ceil(a.value.length / e);
                  return t * l + i * (l - 1);
                }
                return s.value;
              });
            return (
              (0, i.YP)(
                () => n.items,
                (e) => {
                  const t = e.map((e) => e.id);
                  a.value = a.value.filter((e) => t.includes(e));
                },
              ),
              {
                __sfc: !0,
                emits: t,
                handleSelectItem: (e) => {
                  t("select", e);
                },
                loadSuccessItemIdLists: a,
                props: n,
                previewGridStyle: l,
                previewContainerOriginHeight: s,
                previewMapContainer: r,
                isClickToExpand: o,
                isExpanded: c,
                isShowExpandIcon: u,
                previewContainerHeight: d,
                handleTitleBarClick: () => {
                  n.isCollapsible && (o.value = !o.value);
                },
                handlePreivewLoadError: (e) => {
                  a.value = a.value.filter((t) => t !== e);
                },
                handlePreivewLoadSuccess: (e) => {
                  a.value.includes(e) || a.value.push(e);
                },
                PreviewMapsItem: E,
              }
            );
          },
        });
      n(25474);
      const $ = (0, F.Z)(
        B,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return e.items.length
            ? t("div", [
                t(
                  "div",
                  {
                    staticClass:
                      "uk-flex uk-flex-between uk-flex-middle uk-preview-section-header",
                    class: { "is-expand": n.isShowExpandIcon },
                    on: { click: n.handleTitleBarClick },
                  },
                  [
                    e.label
                      ? t(
                          "div",
                          {
                            key: e.label,
                            staticClass: "uk-preview-section-header-title",
                          },
                          [e._v("\n      " + e._s(e.label) + "\n    ")],
                        )
                      : e._e(),
                    e._v(" "),
                    n.isShowExpandIcon
                      ? t("div", {
                          staticClass: "uk-icon",
                          class: { "expand-icon-rotate": !n.isExpanded },
                          staticStyle: {
                            transition: "0.2s",
                            opacity: "0.5",
                            scale: "1.5",
                          },
                          attrs: { "uk-icon": "chevron-down" },
                        })
                      : e._e(),
                  ],
                ),
                e._v(" "),
                t(
                  "ul",
                  {
                    ref: "previewMapContainer",
                    staticClass:
                      "uk-margin-remove uk-padding-remove uk-overflow-hidden preview-map-list",
                    class: { "preview-map-list-visible": n.isExpanded },
                    style: n.previewGridStyle,
                  },
                  [
                    e._t("list-header"),
                    e._v(" "),
                    e._l(e.items, function (a, i) {
                      return t(
                        "li",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: n.loadSuccessItemIdLists.includes(a.id),
                              expression:
                                "loadSuccessItemIdLists.includes(item.id)",
                            },
                          ],
                          key: a.id,
                          style: {
                            height: e.gridRowHeight + "px",
                            opacity:
                              i > e.maxDisplayBeforeCollapse - 1 ? "0" : "1",
                          },
                        },
                        [
                          t(n.PreviewMapsItem, {
                            attrs: {
                              item: a,
                              "selected-item-id": e.selectedItemId,
                            },
                            on: {
                              success: n.handlePreivewLoadSuccess,
                              error: n.handlePreivewLoadError,
                              select: n.handleSelectItem,
                            },
                          }),
                        ],
                        1,
                      );
                    }),
                    e._v(" "),
                    e._t("list-footer"),
                  ],
                  2,
                ),
              ])
            : e._e();
        },
        [],
        !1,
        null,
        "dc210c40",
        null,
      ).exports;
      var H = function (e, t, n, a) {
        return new (n || (n = Promise))(function (i, l) {
          function s(e) {
            try {
              o(a.next(e));
            } catch (e) {
              l(e);
            }
          }
          function r(e) {
            try {
              o(a.throw(e));
            } catch (e) {
              l(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, r);
          }
          o((a = a.apply(e, t || [])).next());
        });
      };
      const j = (0, i.aZ)({
        __name: "new-preview-maps",
        props: {
          previews: null,
          selectedItemId: null,
          isShowLabel: { type: Boolean },
          selectFirst: { type: Boolean },
          title: null,
          maxDisplayBeforeCollapse: null,
        },
        emits: ["select", "submit"],
        setup(e, { emit: t }) {
          const n = e,
            a = (e) => {
              t("select", e);
            };
          return (
            (0, i.bv)(() =>
              H(this, void 0, void 0, function* () {
                n.selectFirst &&
                  a(n.previews[0].items && n.previews[0].items[0].id);
              }),
            ),
            {
              __sfc: !0,
              emits: t,
              props: n,
              handleSelectItem: a,
              handleSubmit: () => {
                t("submit");
              },
              PreviewGroup: $,
            }
          );
        },
      });
      n(33898);
      const W = (0, F.Z)(
        j,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              staticClass: "uk-overflow-overlay",
              staticStyle: { height: "calc(100vh - 30px)" },
            },
            [
              e._t("header"),
              e._v(" "),
              t("div", { staticStyle: { padding: "10px 36px 48px" } }, [
                t(
                  "div",
                  { staticClass: "uk-flex uk-flex-between uk-flex-middle" },
                  [
                    e.title
                      ? t(
                          "h1",
                          {
                            staticClass: "uk-margin-remove",
                            staticStyle: { "font-size": "34px" },
                          },
                          [e._v("\n        " + e._s(e.title) + "\n      ")],
                        )
                      : e._e(),
                    e._v(" "),
                    e._t("title-icon"),
                  ],
                  2,
                ),
                e._v(" "),
                t(
                  "form",
                  {
                    staticClass: "uk-panel preview-container",
                    on: {
                      submit: function (e) {
                        return (
                          e.preventDefault(),
                          n.handleSubmit.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [
                    t(
                      "div",
                      {
                        attrs: {
                          "uk-list-select": "",
                          "uk-traverse": "",
                          "data-traverse-mode": "nearest-item",
                          "data-item": ".uk-card.uk-card-selectable",
                          "data-form": "true",
                        },
                      },
                      [
                        e._t("preview-header"),
                        e._v(" "),
                        e._l(e.previews, function (a, i) {
                          return [
                            t(n.PreviewGroup, {
                              key: i,
                              staticClass: "preview-group",
                              attrs: {
                                "selected-item-id": e.selectedItemId,
                                label: a.name,
                                "max-display-before-collapse": 3,
                                items: a.items,
                                "is-collapsible": e.previews?.length > 1,
                              },
                              on: { select: (t) => e.$emit("select", t) },
                            }),
                          ];
                        }),
                      ],
                      2,
                    ),
                  ],
                ),
              ]),
            ],
            2,
          );
        },
        [],
        !1,
        null,
        "2df0b3a0",
        null,
      ).exports;
      var U = n(25685),
        G = n(95955),
        V = n(81296),
        Y = n.n(V),
        X = n(86633),
        K = function (e, t, n, a) {
          return new (n || (n = Promise))(function (i, l) {
            function s(e) {
              try {
                o(a.next(e));
              } catch (e) {
                l(e);
              }
            }
            function r(e) {
              try {
                o(a.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, r);
            }
            o((a = a.apply(e, t || [])).next());
          });
        };
      const q = (0, X.ZP)("template"),
        J = () => {
          const {
              getLocalI18nContent: e,
              getLocalTemplatesContent: t,
              getTemplatesGroups: n,
            } = U,
            a = (0, i.iH)(t()),
            l = (0, i.iH)(e()),
            s = (0, i.Fl)(() => (0, m.S)().language),
            r = (0, i.Fl)(() =>
              d.value.map((e) => {
                const { items: t } = e;
                return Object.assign(Object.assign({}, e), {
                  items: t
                    .map((e) => {
                      const { thumbnail: t } = e;
                      return Object.assign(Object.assign({}, e), {
                        thumbnail: y(t) ? t : "",
                      });
                    })
                    .filter(({ thumbnail: e }) => !!e),
                });
              }),
            ),
            d = (0, i.Fl)(
              () => (
                f.value,
                n(a.value, l.value, S(s.value)).map((e) => {
                  const { items: t } = e;
                  return Object.assign(Object.assign({}, e), {
                    items: t
                      .map((e) =>
                        Object.assign(Object.assign({}, e), {
                          thumbnail: g(e),
                        }),
                      )
                      .filter(({ thumbnail: e }) => !!e),
                  });
                })
              ),
            ),
            v = (0, i.Fl)(() => {
              var e;
              return null !==
                (e = (0, m.km)().recentlyUsedTemplates[s.value]) && void 0 !== e
                ? e
                : [];
            }),
            f = (0, i.iH)(0),
            h = (0, i.iH)(0),
            w = (0, i.Fl)(() =>
              r.value
                .map((e) => e.items.filter((e) => v.value.includes(e.id)))
                .flat()
                .filter((e) => k.value || "local" === e.host)
                .sort((e, t) => v.value.indexOf(e.id) - v.value.indexOf(t.id)),
            ),
            g = (e) => {
              const { host: t, thumbnail: n, hash: a } = e;
              if ("local" === t)
                return (0, p.Al)(`static/snowbird/resource/${n}`);
              let i = "";
              const l = T(a);
              return Y().existsSync(l) && (i = (0, C.u3)(l)), i || (i = n), i;
            },
            y = (e) => {
              const t = new URL(e),
                { protocol: n, hostname: a } = t;
              return ("http:" === n && "localhost" === a) || "file:" === n;
            };
          (0, i.YP)(h, () =>
            K(void 0, void 0, void 0, function* () {
              const e = d.value
                .map((e) => ({ items: e.items.filter((e) => !y(e.thumbnail)) }))
                .flat()
                .filter((e) => 0 !== e.items.length);
              for (const { items: t } of e)
                yield Promise.allSettled(
                  t.map(({ hash: e, thumbnail: t }) => {
                    const n = T(e);
                    return u.ZP.fetch(c.lf.FILE_DOWNLOAD, {
                      downloadUrl: t,
                      dstFilePath: n,
                      force: !0,
                    }).catch((e) => {
                      q.error("Cache resource fail:", t, e);
                    });
                  }),
                ),
                  (f.value += 1);
            }),
          );
          const k = (0, i.Fl)(() => {
              (0, m.Yh)().status,
                o.wi.VALID,
                (0, m.Yh)().hasRawPerMachineLicenseDataValidated;
              return !0;
            }),
            _ = (e, t) =>
              K(void 0, void 0, void 0, function* () {
                try {
                  yield Y().ensureDir(b().dirname(e)),
                    yield Y().writeFile(e, t);
                } catch (e) {
                  q.error(e);
                }
              });
          function I(e, t) {
            return K(this, void 0, void 0, function* () {
              try {
                return Y().existsSync(e)
                  ? yield Y().readFile(e, { encoding: null != t ? t : "utf-8" })
                  : null;
              } catch (e) {
                return q.error(e), null;
              }
            });
          }
          function T(e) {
            return b().join((0, x.tM)(), `thumbnail/${s.value}/${e}.png`);
          }
          function S(e) {
            switch (e) {
              case "zh-CN":
                return G.i.ZH_CN;
              case "en-US":
              default:
                return G.i.EN_US;
              case "zh-HK":
                return G.i.ZH_HK;
              case "zh-TW":
                return G.i.ZH_TW;
              case "ja-JP":
                return G.i.JA_JP;
              case "de-DE":
                return G.i.DE_DE;
              case "fr-FR":
                return G.i.FR_FR;
              case "es":
                return G.i.ES_ES;
              case "id":
                return G.i.ID_ID;
              case "it-IT":
                return G.i.IT_IT;
              case "ko":
                return G.i.KR_KR;
              case "pt-PT":
                return G.i.PT_PT;
              case "ru-RU":
                return G.i.RU_RU;
              case "th":
                return G.i.TH_TH;
            }
          }
          return {
            templatesGroupsWithLocalThumbnail: r,
            recentlyTemplates: w,
            isRemoteTemplateAvailable: k,
            convertToSnowbirdLang: S,
            refreshRemoteTemplatesAndI18Content: () =>
              K(void 0, void 0, void 0, function* () {
                if (!k.value) return;
                const e = b().join(
                    (0, x.tM)(),
                    `content/${s.value}/template.json`,
                  ),
                  t = b().join((0, x.tM)(), "i18nContent.json");
                let n, i;
                if (Y().existsSync(e)) {
                  const t = yield I(e);
                  try {
                    n = JSON.parse(t);
                  } catch (e) {
                    q.error(e);
                  }
                }
                if (Y().existsSync(t)) {
                  const e = yield I(t);
                  try {
                    i = JSON.parse(e);
                  } catch (e) {
                    q.error(e);
                  }
                }
                n && i && ((a.value = n), (l.value = i));
                try {
                  const n = yield u.ZP.fetch(c.lf.FETCH_TEMPLATE_META, {
                      name: "templates",
                      snowbirdLang: S(s.value),
                    }),
                    i = yield u.ZP.fetch(c.lf.FETCH_TEMPLATE_META, {
                      name: "i18n",
                      snowbirdLang: S(s.value),
                    });
                  (a.value = n),
                    (l.value = i),
                    _(e, JSON.stringify(n)),
                    _(t, JSON.stringify(i));
                } catch (e) {
                  q.error(e);
                }
                h.value += 1;
              }),
            getThumbnailCachePathByHash: T,
            getTemplatesCachePathByHash: function (e) {
              return b().join((0, x.tM)(), `files/${s.value}/${e}.xmind`);
            },
          };
        },
        z = (() => {
          const e = Symbol("default-template"),
            t = new Map();
          return (n = e) => {
            if (t.has(n)) return t.get(n);
            const a = J();
            return t.set(n, a), a;
          };
        })();
      var Q = n(91324);
      const ee = (0, i.aZ)({
        __name: "templates",
        emits: ["onAtTopChange"],
        setup(e, { emit: t }) {
          const n = (0, i.FN)().proxy,
            a = (0, m.JE)().T;
          (0, i.YP)(
            () => (0, m.S)().language,
            () => {
              z().refreshRemoteTemplatesAndI18Content();
            },
            { immediate: !0 },
          );
          const l = (0, i.iH)(!0),
            s = (0, i.iH)(null),
            r = (0, i.iH)(""),
            o = (0, i.iH)(""),
            p = (0, i.Fl)(() =>
              "recently" === s.value
                ? r.value
                : "templates" === s.value
                  ? o.value
                  : "",
            ),
            v = (0, i.Fl)(() => (0, m.Yh)().isStatusValid),
            f = (0, i.Fl)(() => z().templatesGroupsWithLocalThumbnail.value),
            h = (0, i.Fl)(() =>
              z().templatesGroupsWithLocalThumbnail.value.filter(
                (e) => "all" === y.value || e.id === y.value,
              ),
            ),
            w = (0, i.Fl)(() => z().recentlyTemplates.value),
            b = (0, i.Fl)(() => 0 !== w.value.length),
            g = (0, i.Fl)(() =>
              [{ label: a("All"), value: "all" }].concat(
                f.value.map((e) => ({ label: e.name, value: e.id })),
              ),
            ),
            y = (0, i.iH)("all");
          return {
            __sfc: !0,
            emits: t,
            vm: n,
            $T: a,
            atTop: l,
            selectType: s,
            selectedRecentlyItemId: r,
            selectedTemplatesItemId: o,
            currentSelectedItemId: p,
            isActivated: v,
            allTemplates: f,
            currentTemplates: h,
            recentlyTemplates: w,
            hasRecentlyTemplates: b,
            templateCategory: g,
            createFromSelectedTemplate: () => {
              if (!p.value) return;
              const e = f.value.find((e) =>
                  e.items.some((e) => e.id === p.value),
                ),
                t = null == e ? void 0 : e.items.find((e) => e.id === p.value);
              if (!t) return;
              let a = "";
              if (t) {
                const {
                  hash: e,
                  host: n,
                  path: i,
                  name: l,
                  id: s,
                  groupId: r,
                  license: o,
                } = t;
                if (!v.value && "pro" === o)
                  return void u.ZP.fetch(c.Fx, { name: "dialog-activate" });
                const d = {
                  title: l,
                  template: "noDefault",
                  groupId: r,
                  host: n,
                  hash: e,
                  path: i,
                  id: s,
                };
                (a = (0, Q.gH)("new://workbook?", d)), (0, Z.Pr)(r, s, o);
              }
              n
                .$safeRun(() =>
                  Promise.all([u.ZP.fetch(c.NF, { source: a })]).then(() => {
                    (0, _.fv)(), window.close();
                  }),
                )
                .catch(() => {
                  window.close();
                }),
                (0, d.L9)({
                  eventAction: "newLaunch",
                  eventName: "openTemplate",
                });
            },
            handleAtTopChange: (e) => {
              (l.value = e), t("onAtTopChange", { tab: "template", atTop: e });
            },
            currentCategory: y,
            handleChangeCategory: (e) => {
              y.value = e;
            },
            handleSelectRecentlyItem: (e) => {
              (r.value = e), (o.value = ""), (s.value = "recently");
            },
            handleSelectTemplatesItem: (e) => {
              (o.value = e), (r.value = ""), (s.value = "templates");
            },
            VisibilitySensor: I.Z,
            DropDown: D.Z,
            PreviewGroup: $,
            NewPreviewMaps: W,
          };
        },
      });
      const te = (0, F.Z)(
        ee,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            n.NewPreviewMaps,
            {
              class: { "uk-scrollbar-hidden": n.atTop },
              attrs: {
                title: n.$T("Choose a Template"),
                previews: n.currentTemplates,
                "is-show-label": !0,
                "max-display-before-collapse": 3,
                "selected-item-id": n.selectedTemplatesItemId,
              },
              on: {
                select: n.handleSelectTemplatesItem,
                submit: n.createFromSelectedTemplate,
              },
              scopedSlots: e._u(
                [
                  n.hasRecentlyTemplates
                    ? {
                        key: "preview-header",
                        fn: function () {
                          return [
                            t(n.PreviewGroup, {
                              attrs: {
                                label: n.$T("Recently Used"),
                                items: n.recentlyTemplates,
                                "max-display-before-collapse": 6,
                                "selected-item-id": n.selectedRecentlyItemId,
                              },
                              on: { select: n.handleSelectRecentlyItem },
                            }),
                          ];
                        },
                        proxy: !0,
                      }
                    : null,
                  {
                    key: "title-icon",
                    fn: function () {
                      return [
                        t(n.DropDown, {
                          attrs: {
                            "custom-btn-class": "uk-background-default",
                            "custom-btn-style":
                              "box-shadow: none; font-weight: 600; font-size: 14px; color: #0F66DE;",
                            "custom-icon": e.$toResourceURL(
                              "static/assets/images/new/select.svg",
                            ),
                            "custom-icon-style": "width: 16px; height: 16px;",
                            items: n.templateCategory,
                            value: n.currentCategory,
                            "popover-style": "white-space:nowrap;",
                            "btn-class": "uk-button uk-button-tile",
                          },
                          on: { input: n.handleChangeCategory },
                        }),
                      ];
                    },
                    proxy: !0,
                  },
                ],
                null,
                !0,
              ),
            },
            [
              e._v(" "),
              e._v(" "),
              t(n.VisibilitySensor, {
                attrs: { slot: "header" },
                on: { onVisibleChange: n.handleAtTopChange },
                slot: "header",
              }),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      var ne = n(16704),
        ae = function (e, t, n, a) {
          return new (n || (n = Promise))(function (i, l) {
            function s(e) {
              try {
                o(a.next(e));
              } catch (e) {
                l(e);
              }
            }
            function r(e) {
              try {
                o(a.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, r);
            }
            o((a = a.apply(e, t || [])).next());
          });
        };
      const ie = (0, X.ZP)("new-library"),
        le = (0, i.aZ)({
          name: "NewLibrary",
          components: { PreviewMaps: R, VisibilitySensor: I.Z },
          props: { isCompActive: Boolean },
          setup(e, t) {
            const n = (0, i.iH)(!0),
              a = (0, i.iH)(null),
              l = (0, i.iH)(!1),
              s = (0, i.Fl)(() => (0, m.qr)().serviceRegion),
              r = (0, i.Fl)(() => (0, m.jR)().libraryItems),
              o = (0, i.Fl)(() => [{ label: "Gallery", items: r.value }]),
              p = () =>
                ae(this, void 0, void 0, function* () {
                  try {
                    const e = (yield u.ZP.fetch(c.lf.LIBRARY_ITEMS)).map(
                      (e, t) => {
                        const n = e.thumbnailUrl.replace(/^https/, "cache");
                        return (
                          t < 6 &&
                            u.ZP.fetch(c.lf.FILE_DOWNLOAD, {
                              downloadUrl: n,
                              filename: (0, ne.VR)(n),
                            }).catch(() => {}),
                          {
                            name: "string" == typeof e.topic && e.topic.trim(),
                            previewURL: n,
                            id: e.id,
                          }
                        );
                      },
                    );
                    (0, m.jR)().updateLibraryItems(e);
                  } catch (e) {
                    ie.error("Failed to get library items:", (0, ne.SC)(e));
                  }
                });
            (0, i.YP)(s, () => p()),
              (0, i.YP)(
                () => e.isCompActive,
                (e) => {
                  e && p();
                },
              );
            return {
              selectedLibraryItem: a,
              isDownloading: l,
              serviceRegion: s,
              libraryItems: r,
              libraryItemsPreviews: o,
              createFromLibrary: () => {
                const e = a.value && a.value.id;
                e &&
                  (l.value ||
                    ((l.value = !0),
                    u.ZP.fetch(c.lf.LIBRARY_DOWNLOAD, { id: e })
                      .then((e) => {
                        (0, _.fv)(),
                          (l.value = !1),
                          u.ZP.fetch(c.NF, { source: e }).then(() => {
                            window.close();
                          });
                      })
                      .catch((t) => {
                        (l.value = !1),
                          ie.error(
                            "Failed to download workbook from library:",
                            e,
                            (0, ne.SC)(t),
                          );
                      }),
                    (0, d.L9)({
                      eventAction: "newLaunch",
                      eventName: "openLibrary",
                    })));
              },
              openMoreMaps: () => {
                u.ZP.fetch(c.lf.GO_LIBRARY_MORE_MAPS),
                  (0, d.L9)({
                    eventCategory: "NewPanel",
                    eventAction: "jumpToMore",
                  });
              },
              atTop: n,
              handleAtTopChange: (e) => {
                (n.value = e),
                  t.emit("onAtTopChange", { tab: "library", atTop: e });
              },
            };
          },
        });
      const se = (0, F.Z)(
        le,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "preview-maps",
            {
              class: { "uk-scrollbar-hidden": e.atTop },
              attrs: {
                title: e.$T("Library"),
                previews: e.libraryItemsPreviews,
              },
              on: {
                select: function (t) {
                  e.selectedLibraryItem = t;
                },
                submit: e.createFromLibrary,
              },
            },
            [
              t("visibility-sensor", {
                attrs: { slot: "header" },
                on: { onVisibleChange: e.handleAtTopChange },
                slot: "header",
              }),
              e._v(" "),
              t("li", { attrs: { slot: "list-footer" }, slot: "list-footer" }, [
                t(
                  "div",
                  { staticClass: "uk-flex uk-flex-column uk-flex-middle" },
                  [
                    t(
                      "div",
                      {
                        staticClass:
                          "uk-flex uk-flex-middle uk-flex-center uk-card uk-card-default uk-card-selectable uk-background-cover uk-border-rounded",
                        staticStyle: { width: "195px", height: "121px" },
                        attrs: { tabindex: "0" },
                        on: {
                          click: function (t) {
                            return (
                              t.preventDefault(),
                              e.openMoreMaps.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [
                        t("img", {
                          attrs: {
                            draggable: "false",
                            src: e.$toResourceURL(
                              "static/assets/images/new/more.svg",
                            ),
                          },
                        }),
                      ],
                    ),
                    e._v(" "),
                    t(
                      "span",
                      {
                        staticClass: "uk-text-center uk-card-selectable-text",
                        staticStyle: { "margin-top": "12px" },
                      },
                      [
                        e._v(
                          "\n        " + e._s(e.$T("More Maps")) + "\n      ",
                        ),
                      ],
                    ),
                  ],
                ),
              ]),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      var re = function (e, t, n, a) {
        return new (n || (n = Promise))(function (i, l) {
          function s(e) {
            try {
              o(a.next(e));
            } catch (e) {
              l(e);
            }
          }
          function r(e) {
            try {
              o(a.throw(e));
            } catch (e) {
              l(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, r);
          }
          o((a = a.apply(e, t || [])).next());
        });
      };
      const oe = (0, i.aZ)({
        name: "NewWindow",
        components: { NewRecent: O, NewTemplate: te, NewLibrary: se },
        setup() {
          const e = (0, i.FN)().proxy,
            t = r().parse(window.location.search.slice(1)),
            n = (0, i.iH)(null),
            a = (0, i.iH)("template"),
            s = (0, v.Z)("version").includes("beta") ? "beta-" : "",
            f = (0, i.Fl)(() =>
              b.value
                ? (0, p.ju)(
                    `static/assets/images/new/${s}titlebar-logo-dark.svg`,
                  )
                : (0, p.ju)(
                    `static/assets/images/new/${s}titlebar-logo-light.svg`,
                  ),
            ),
            h = (0, i.iH)({
              recent: !1,
              template: !1,
              library: !1,
              upgrade: !1,
            }),
            w = (0, i.Fl)(() => {
              var e;
              return (
                0 !==
                (null === (e = (0, m.km)().recentlyOpenedItems) || void 0 === e
                  ? void 0
                  : e.length)
              );
            }),
            b = (0, i.Fl)(() => "dark" === (0, m.S)().appearance),
            g = (0, i.Fl)(() => {
              const e = {
                background: b.value ? "#222425" : "#f5f5f5",
                position: "absolute",
                top: 0,
                right: 0,
                left: "220px",
              };
              return (
                h.value[a.value] ||
                  b.value ||
                  (e.background = "#fff !important"),
                Object.assign(Object.assign({}, e), { height: "32px" })
              );
            }),
            y = (0, i.Fl)(() => {
              (0, m.Yh)().status,
                o.wi.VALID,
                (0, m.Yh)().hasRawPerMachineLicenseDataValidated;
              return !0;
            }),
            k = (0, i.Fl)(() =>
              [
                {
                  id: "template",
                  name: e.$T("New"),
                  isAvailable: !0,
                  click: () => {
                    a.value = "template";
                  },
                  icon: e.$toResourceURL(
                    "static/assets/images/new/template.svg",
                  ),
                },
                {
                  id: "recent",
                  name: e.$T("Recents"),
                  isAvailable: w.value,
                  click: () => {
                    a.value = "recent";
                  },
                  icon: e.$toResourceURL("static/assets/images/new/recent.svg"),
                },
                {
                  id: "library",
                  name: e.$T("Library"),
                  isAvailable: y.value,
                  click: (e) => {
                    if (o.nd)
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        void u.ZP.fetch(c.QN)
                      );
                    a.value = "library";
                  },
                  icon: e.$toResourceURL(
                    "static/assets/images/new/library.svg",
                  ),
                },
              ].filter((e) => e.isAvailable),
            ),
            x = (0, i.Fl)(() => k.value.find((e) => e.id === a.value).name),
            _ = (0, i.Fl)(() => k.value.findIndex((e) => e.id === a.value));
          (0, i.YP)(_, (t) => {
            setTimeout(() => {
              e.$withUIKit((e) => {
                e.tab(n.value).show(t);
              });
            });
          });
          const C = (e) => {
            l.BrowserWindow.fromId(window.id).focus(), (a.value = e);
          };
          let I = null;
          (0, i.bv)(() => {
            if (((I = u.ZP.route(c.iB, C)), t.tab)) a.value = t.tab;
            else {
              const e = (0, m.qr)().launchRecordOfNew,
                { lastLaunchTime: t, lastViewTab: n } = e,
                i = ((e, t) => {
                  if (!e || !t) return !1;
                  const n = new Date(e),
                    a = new Date(t);
                  return (
                    n.getFullYear() === a.getFullYear() &&
                    n.getMonth() === a.getMonth() &&
                    n.getDate() === a.getDate()
                  );
                })(t, Date.now()),
                l = k.value.some((e) => e.id === n);
              a.value = i && l ? n : k.value[0].id;
            }
            (0, m.qr)().setLaunchRecordOfNew({ lastLaunchTime: Date.now() });
          }),
            (0, i.Jd)(() => {
              I && I();
            }),
            (0, i.YP)(a, (e) => {
              e && (0, m.qr)().setLaunchRecordOfNew({ lastViewTab: e });
            }),
            (0, i.YP)(k, (e) => {
              e.some((e) => e.id === a.value) || (a.value = e[0].id);
            });
          const T = (0, i.Fl)(() =>
            b.value
              ? (0, p.ju)("static/assets/images/new/home-menu-dark.svg")
              : (0, p.ju)("static/assets/images/new/home-menu-light.svg"),
          );
          return {
            isMac: false,
            isDark: b,
            iconURL: f,
            winTitleBarStyle: g,
            tabRef: n,
            activeTabId: a,
            activeTabName: x,
            activeTabIndex: _,
            tabs: k,
            isLibaryAvailable: y,
            isShowRecentPage: w,
            openExistingFile: () => {
              (0, m.JX)().handleCommand("open"),
                (0, d.L9)({
                  eventAction: "newLaunch",
                  eventName: "openLocalFile",
                });
            },
            isWinTitleBarActive: h,
            handleAtTopChange: ({ tab: e, atTop: t }) => {
              e === a.value && (h.value[e] = !t);
            },
            homeMenuImageURL: T,
            openHomeMenu: (e) =>
              re(this, void 0, void 0, function* () {
                yield u.ZP.fetch(c.bz, { x: e.pageX, y: e.pageY });
              }),
          };
        },
      });
      n(4277);
      const ce = (0, F.Z)(
        oe,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("div", { staticClass: "uk-window uk-window-dialog" }, [
            t(
              "div",
              {
                staticClass: "uk-window-title-bar new-win-title-bar",
                class: {
                  "new-win-title-bar-default":
                    !e.isWinTitleBarActive[e.activeTabId],
                },
                style: e.winTitleBarStyle,
              },
              [
                t(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.isMac && e.isWinTitleBarActive[e.activeTabId],
                        expression: "isMac && isWinTitleBarActive[activeTabId]",
                      },
                    ],
                    staticClass: "uk-window-title",
                  },
                  [e._v("\n      " + e._s(e.activeTabName) + "\n    ")],
                ),
                e._v(" "),
                t("window-control-button-group", {
                  style: !e.isMac && { height: "32px" },
                }),
              ],
              1,
            ),
            e._v(" "),
            t(
              "div",
              {
                staticClass:
                  "uk-flex uk-width-1-1 uk-height-1-1 uk-overflow-hidden",
              },
              [
                t(
                  "div",
                  {
                    staticClass:
                      "uk-workbench-left uk-panel uk-position-relative uk-height-1-1 uk-flex uk-flex-column new-left-panel",
                  },
                  [
                    t(
                      "div",
                      {
                        staticClass:
                          "uk-position-absolute uk-position-top new-title-bar",
                        staticStyle: { "-webkit-app-region": "drag" },
                      },
                      [
                        e.isMac
                          ? e._e()
                          : t(
                              "div",
                              {
                                staticClass:
                                  "uk-flex uk-flex-middle uk-flex-between",
                                style: { height: "40px" },
                              },
                              [
                                t("div", {
                                  staticClass: "title-bar-icon",
                                  attrs: {
                                    "uk-img": "",
                                    "data-src": e.iconURL,
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "button",
                                  {
                                    staticClass:
                                      "uk-button uk-button-icon uk-border-rounded uk-padding-remove uk-button-tile",
                                    staticStyle: {
                                      "-webkit-app-region": "none",
                                    },
                                    on: { click: e.openHomeMenu },
                                  },
                                  [
                                    t("img", {
                                      attrs: {
                                        draggable: "false",
                                        "uk-svg": "",
                                        src: e.homeMenuImageURL,
                                      },
                                    }),
                                  ],
                                ),
                              ],
                            ),
                      ],
                    ),
                    e._v(" "),
                    t(
                      "div",
                      {
                        staticClass:
                          "uk-flex-1 uk-flex uk-flex-column uk-flex-between",
                        staticStyle: { padding: "40px 16px 20px" },
                        style: { marginTop: e.isMac ? null : "8px" },
                      },
                      [
                        t(
                          "ul",
                          {
                            ref: "tabRef",
                            staticClass:
                              "uk-tab uk-tab-new-capsule uk-flex-column",
                            attrs: {
                              "uk-tab": "connect: .main-content-switcher",
                              "data-active": e.activeTabIndex,
                            },
                          },
                          e._l(e.tabs, function (n) {
                            return t("li", { key: n.id }, [
                              t(
                                "a",
                                {
                                  staticClass: "uk-flex-middle",
                                  staticStyle: {
                                    display: "flex",
                                    "line-height": "30px",
                                  },
                                  attrs: { draggable: "false", href: "#" },
                                  on: { click: n.click },
                                },
                                [
                                  t("img", {
                                    staticStyle: { "margin-right": "6px" },
                                    attrs: {
                                      draggable: "false",
                                      src: n.icon,
                                      "uk-svg": "",
                                    },
                                  }),
                                  e._v(" "),
                                  t("span", { staticClass: "uk-text-left" }, [
                                    e._v(e._s(n.name)),
                                  ]),
                                ],
                              ),
                            ]);
                          }),
                          0,
                        ),
                        e._v(" "),
                        t(
                          "button",
                          {
                            staticClass:
                              "uk-button uk-button-default uk-width-1-1",
                            attrs: { tabindex: "1" },
                            on: { click: e.openExistingFile },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$T("Open Local File")) +
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
                  "div",
                  {
                    staticClass:
                      "uk-flex-1 uk-position-relative uk-height-1-1 uk-overflow-hidden new-right-panel",
                    style: !e.isDark && { background: "#fff" },
                  },
                  [
                    t(
                      "ul",
                      { staticClass: "uk-switcher main-content-switcher" },
                      [
                        t(
                          "li",
                          [
                            t("new-template", {
                              on: { onAtTopChange: e.handleAtTopChange },
                            }),
                          ],
                          1,
                        ),
                        e._v(" "),
                        e.isShowRecentPage
                          ? t(
                              "li",
                              [
                                t("new-recent", {
                                  on: { onAtTopChange: e.handleAtTopChange },
                                }),
                              ],
                              1,
                            )
                          : e._e(),
                        e._v(" "),
                        t(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e.isLibaryAvailable,
                                expression: "isLibaryAvailable",
                              },
                            ],
                          },
                          [
                            t("new-library", {
                              attrs: {
                                "is-comp-active": "library" === e.activeTabId,
                              },
                              on: { onAtTopChange: e.handleAtTopChange },
                            }),
                          ],
                          1,
                        ),
                      ],
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
        "28bad24c",
        null,
      ).exports;
      (0, a.Z)(ce, { name: "new" });
    },
    13382: (e, t, n) => {
      "use strict";
      n.d(t, {
        G$: () => _,
        N0: () => h,
        Pg: () => I,
        R2: () => x,
        W5: () => k,
        ZZ: () => b,
        am: () => y,
        eq: () => g,
        yr: () => C,
      });
      var a = n(71017),
        i = n.n(a),
        l = n(67657),
        s = n(7104),
        r = n(86633),
        o = n(33394),
        c = n(94593),
        u = n(90435),
        d = n(54856),
        p = n(5893),
        v = n(50965),
        m = n(92636);
      const f = (0, r.ZP)("dialog");
      async function h(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = i().join((0, s.bY)(), e.icon));
        const t = l.BrowserWindow.fromId(window.id);
        return [l.dialog.showMessageBoxSync(t, e)];
      }
      async function w(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = i().join((0, s.bY)(), e.icon));
        const t = l.BrowserWindow.fromId(window.id),
          { response: n, checkboxChecked: a } = await l.dialog.showMessageBox(
            t,
            e,
          );
        return [n, a];
      }
      async function b(e) {
        (e = Object.assign({ securityScopedBookmarks: !0 }, e || {}))
          .suggestPath &&
          !e.defaultPath &&
          ((e.defaultPath = y(e.suggestPath, e.filters)), delete e.suggestPath);
        const {
          canceled: t,
          filePath: n,
          bookmark: a,
        } = await l.dialog.showSaveDialog(l.getCurrentWindow(), e);
        return t
          ? null
          : (n && a && (await o.Z.bindBookmark({ fp: n, bookmark: a })),
            n && (0, v.km)().setLastSaveDirectory(i().dirname(n)),
            n);
      }
      async function g({ folderName: e, dialogOptions: t }) {
        let n = "";
        (t = Object.assign({ securityScopedBookmarks: !0 }, t || {}))
          .defaultPath || (t.defaultPath = y({}));
        const {
          canceled: a,
          filePaths: s,
          bookmark: r,
        } = await l.dialog.showOpenDialog(l.getCurrentWindow(), t);
        if (a) return null;
        if (
          ((n = s[0]),
          s.length > 0 && r && (await o.Z.bindBookmark({ fp: n, bookmark: r })),
          "string" == typeof e)
        ) {
          let t = e.replace(/[\\/]/g, "");
          0, (n = i().join(n, t));
        }
        return (
          c.Z.existsSync(n) || c.Z.ensureDir(n),
          n && (0, v.km)().setLastSaveDirectory(n),
          n
        );
      }
      function y(
        { doc: e = null, oldDoc: t = null, suggestedName: n = null },
        a = null,
      ) {
        let s, r;
        if (
          (!s && n && (s = (0, p.N6)(n.toString())),
          !s &&
            e &&
            e.title &&
            e.source &&
            !e.source.startsWith("new://") &&
            (s = (0, p.N6)(e.title.toString())),
          !s &&
            t &&
            t.title &&
            t.source &&
            !t.source.startsWith("new://") &&
            (s = (0, p.N6)(t.title.toString())),
          s && Array.isArray(a))
        ) {
          const e = a[0] && a[0].extensions;
          Array.isArray(e) && e.length > 0 && (s = `${s}.${e[0]}`);
        }
        if (!r && t && t.source && t.source.startsWith("file://")) {
          let e = t.source.slice(7);
          0, (r = i().dirname(e));
        }
        if (
          (!r &&
            (0, v.km)().lastSaveDirectory &&
            (r = (0, v.km)().lastSaveDirectory),
          !r)
        )
          try {
            r = l.app.getPath("documents");
          } catch (e) {
            f.info(e);
          }
        return r && s ? i().join(r, s) : r || s;
      }
      async function k(e) {
        e.$withUIKit((t) => {
          const n = `\n        <button\n        class="uk-button uk-button-text uk-text-nowrap"\n        style="word-break: keep-all;"\n        focustrigger="cannotGetFocusByMouse">\n          ${e.$T("OK")}\n        </button>\n        </div>`;
          t.toast({
            message: e.$T(
              "The map style has been updated for your current version of Xmind.",
            ),
            pos: "bottom-center",
            timeout: 5e3,
            btn: n,
            style: { width: "500px", height: "auto", padding: "10px 20px" },
            btnClick: t.toast.clearAll(),
          });
        });
      }
      async function x(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("OK"),
          n = e("Get Latest Version"),
          a = [t, n],
          [i] = await w({
            title: "Xmind",
            message: e(
              "The map style in this file might vary since it was created in a newer version of Xmind.",
            ),
            detail: e(
              "You can continue to open the file or update to the latest version for better compatibility.",
            ),
            buttons: a,
            defaultId: a.indexOf(n),
            cancelId: a.indexOf(t),
            noLink: !0,
          });
        i === a.indexOf(n) && u.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function _(e) {
        if (((e = "function" != typeof e ? (e) => e : e), m.zr))
          return await w({
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
          n = e("Get Latest Version"),
          a = [n, t],
          [i] = await w({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file was created by a newer version of Xmind. Please update Xmind and try to open it again.",
            ),
            buttons: a,
            defaultId: a.indexOf(n),
            cancelId: a.indexOf(t),
            noLink: !0,
          });
        i === a.indexOf(n) && u.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function C(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Save"),
          n = e("Save as"),
          a = e("Cancel"),
          i = [];
        i.push(t, a, n);
        let [l] = await w({
          type: "none",
          title: "Xmind",
          message: e("Saving file from Xmind"),
          detail: e(
            "Once you save the file, it cannot be opened normally in older versions like $1.",
            "Xmind 22.11",
          ),
          buttons: i,
          defaultId: i.indexOf(n),
          cancelId: i.indexOf(a),
          noLink: !0,
        });
        const s = l === i.indexOf(t),
          r = l === i.indexOf(n);
        return { toSave: s, toSaveAs: r, toCancel: !s && !r };
      }
      async function I(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Fix ＆ Open"),
          n = e("Cancel"),
          a = [t, n],
          [i] = await w({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file may contain invalid data structure or have become corrupted. Xmind can try to fix the data structure to help you open it.",
            ),
            buttons: a,
            defaultId: a.indexOf(t),
            cancelId: a.indexOf(n),
            noLink: !0,
          });
        return { toFix: i === a.indexOf(t), toCancel: i === a.indexOf(n) };
      }
    },
    33394: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => m });
      var a = n(57147),
        i = n.n(a),
        l = n(71017),
        s = n.n(l),
        r = n(73837),
        o = n(86633),
        c = n(16704),
        u = n(56222);
      const d = (0, o.ZP)("renderer:fs");
      async function p(e) {
        return (0, u.A)("OBTAIN_READ_WRITE_ACCESS", e);
      }
      async function v(e) {
        return (0, u.A)("RELEASE_READ_WRITE_ACCESS", e);
      }
      const m = {
        read: async function (e) {
          if (!s().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const t = await (async function (e) {
            return (0, u.A)("OBTAIN_READ_LOCK", e);
          })(e);
          try {
            return await (0, r.promisify)(i().readFile)(e);
          } catch (t) {
            d.error(`path(${e}) read error: ${(0, c.SC)(t)}`);
            try {
              if (!(await p(e))) throw new Error(`No access to '${e}'`);
              return await (0, r.promisify)(i().readFile)(e);
            } catch (e) {
              throw e;
            } finally {
              await v(e);
            }
          } finally {
            await (async function (e) {
              return (0, u.A)("RELEASE_READ_LOCK", e);
            })(t);
          }
        },
        write: async function (e, t) {
          if (!s().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const n = await (async function (e) {
            return (0, u.A)("OBTAIN_WRITE_LOCK", e);
          })(e);
          try {
            return await (0, r.promisify)(i().writeFile)(e, t);
          } catch (n) {
            d.error(`path(${e}) write error: ${(0, c.SC)(n)}`);
            try {
              if (!(await p(e))) throw new Error(`No access to '${e}'`);
              return await (0, r.promisify)(i().writeFile)(e, t);
            } catch (e) {
              throw e;
            } finally {
              await v(e);
            }
          } finally {
            await (async function (e) {
              return (0, u.A)("RELEASE_WRITE_LOCK", e);
            })(n);
          }
        },
        bindBookmark: async function ({ fp: e, bookmark: t } = {}) {
          return (0, u.A)("BIND_BOOKMARK", { fp: e, bookmark: t });
        },
        hasRWAccess: async function (e) {
          return (0, u.A)("HAS_READ_WRITE_ACCESS", e);
        },
        obtainRWAccessFromOS: p,
        releaseRWAccessFromOS: v,
      };
    },
    77242: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => s, k: () => l });
      var a = n(67657);
      const { Menu: i } = a,
        l = (e, t = {}) => {
          if (!e || !e.length) return;
          const n = i.buildFromTemplate(e);
          return n.popup(Object.assign({ window: a.getCurrentWindow() }, t)), n;
        },
        s = () => {
          const e = i.getApplicationMenu();
          return (e && e.items) || [];
        };
    },
    6225: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      var a = n(2954),
        i = n(7836),
        l = n(16704);
      const s = (0, a.aZ)({
        __name: "drop-down",
        props: {
          value: null,
          items: null,
          title: { default: "" },
          disabled: { type: Boolean, default: !1 },
          popoverContainerId: { default: "body" },
          customIcon: null,
          customBtnStyle: null,
          customBtnClass: null,
          customIconStyle: null,
          popoverStyle: null,
        },
        emits: ["input"],
        setup(e, { emit: t }) {
          const n = e,
            s = (0, a.iH)(`popover-${(0, l.hb)()}`),
            r = (0, a.Fl)(() => n.items.find(({ value: e }) => e === n.value)),
            o = (0, a.Fl)(() => n.disabled || !n.items.length);
          return {
            __sfc: !0,
            props: n,
            emit: t,
            popoverId: s,
            selectedItem: r,
            isDisabled: o,
            handleItemSelect: (e) => {
              t("input", e);
            },
            Vue2Teleport: i.Z,
          };
        },
      });
      const r = (0, n(51900).Z)(
        s,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            [
              t(
                "button",
                {
                  staticClass:
                    "uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left uk-overflow-hidden",
                  class: `${e.customIcon ? "is-icon-disbale" : ""} ${e.customBtnClass}`,
                  style: e.customBtnStyle,
                  attrs: {
                    id: n.popoverId,
                    title: e.title,
                    disabled: n.isDisabled,
                  },
                },
                [
                  n.selectedItem
                    ? [
                        n.selectedItem.label
                          ? t("span", [e._v(e._s(n.selectedItem.label))])
                          : e._e(),
                      ]
                    : e._e(),
                  e._v(" "),
                  e.customIcon
                    ? [
                        t("img", {
                          style: e.customIconStyle,
                          attrs: { src: e.customIcon },
                        }),
                      ]
                    : e._e(),
                ],
                2,
              ),
              e._v(" "),
              t(n.Vue2Teleport, { attrs: { to: e.popoverContainerId } }, [
                t(
                  "div",
                  {
                    staticClass: "uk-popover-contextual",
                    style: e.popoverStyle,
                    attrs: {
                      "uk-contextual-popover": "",
                      "data-target": `#${n.popoverId}`,
                      "data-toggle": `#${n.popoverId}`,
                      "data-sel-close": "[uk-menu] > li > button",
                    },
                  },
                  [
                    t(
                      "ul",
                      {
                        staticClass: "uk-overflow-auto",
                        attrs: { "uk-menu": "" },
                      },
                      e._l(e.items, function (a) {
                        return t("li", { key: a.value }, [
                          t(
                            "button",
                            {
                              class: {
                                "uk-checked":
                                  (n.selectedItem && n.selectedItem.value) ===
                                  a.value,
                              },
                              on: {
                                click: function (e) {
                                  return n.handleItemSelect(a.value);
                                },
                              },
                            },
                            [
                              a.label
                                ? t("span", [e._v(e._s(a.label))])
                                : e._e(),
                            ],
                          ),
                        ]);
                      }),
                      0,
                    ),
                  ],
                ),
              ]),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "7f2a00f4",
        null,
      ).exports;
    },
    96393: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => s });
      var a = n(2954),
        i = function (e, t, n, a) {
          return new (n || (n = Promise))(function (i, l) {
            function s(e) {
              try {
                o(a.next(e));
              } catch (e) {
                l(e);
              }
            }
            function r(e) {
              try {
                o(a.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, r);
            }
            o((a = a.apply(e, t || [])).next());
          });
        };
      const l = (0, a.aZ)({
        name: "VisibilitySensor",
        props: { options: Object, onVisibleChange: Function },
        setup(e, t) {
          const n = (0, a.iH)(null);
          let l = null;
          return (
            (0, a.bv)(() =>
              i(this, void 0, void 0, function* () {
                yield new Promise((e) => setTimeout(e, 0)),
                  n.value &&
                    ((l = new IntersectionObserver(
                      ([e]) => {
                        t.emit("onVisibleChange", e.isIntersecting);
                      },
                      Object.assign({ root: n.value.parentElement }, e.options),
                    )),
                    l.observe(n.value));
              }),
            ),
            (0, a.Jd)(() => {
              l && l.disconnect();
            }),
            { entryContainer: n }
          );
        },
      });
      const s = (0, n(51900).Z)(
        l,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("div", { ref: "entryContainer" }, [e._t("default")], 2);
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
    },
    4277: (e, t, n) => {
      var a = n(74138);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals);
      (0, n(45346).Z)("b0b2aee0", a, !0, {});
    },
    33898: (e, t, n) => {
      var a = n(59316);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals);
      (0, n(45346).Z)("7d3f5a9c", a, !0, {});
    },
    25474: (e, t, n) => {
      var a = n(30673);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals);
      (0, n(45346).Z)("863c6712", a, !0, {});
    },
    93938: (e, t, n) => {
      var a = n(32874);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals);
      (0, n(45346).Z)("6a5013f9", a, !0, {});
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
    e.O(0, [2079, 4045, 1505], () => {
      return (t = 60812), e((e.s = t));
      var t;
    });
    var t = e.O();
    module.exports = t;
  },
]);
