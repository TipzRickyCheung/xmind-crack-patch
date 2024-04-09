"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [7920],
  {
    33775: (e, t, s) => {
      s.r(t);
      var a = s(51505),
        r = s(2954),
        o = s(63477),
        n = s.n(o),
        i = s(54856),
        l = s(50965),
        u = s(24034),
        c = s(90435);
      const d = (0, r.aZ)({
        __name: "app",
        setup(e) {
          const t = (0, r.FN)().proxy,
            { T: s } = (0, l.JE)(),
            a = (0, r.iH)(""),
            o = (0, r.iH)(""),
            d = (0, r.iH)(""),
            p = (0, r.iH)(0),
            v = (0, r.iH)(""),
            w = (0, r.Fl)(() => !d.value),
            m = (0, r.Fl)(() => (p.value > 2 ? o.value : "")),
            k = (0, r.iH)([
              { type: "space", size: "flexible" },
              { type: "button", label: s("Cancel"), click: "cancel" },
              {
                type: "button",
                label: s("OK"),
                backgroundColor: "primary",
                click: "confirm",
              },
              { type: "space", size: "flexible" },
            ]);
          (0, r.bv)(() => {
            const e = n().parse(window.location.search.slice(1));
            (a.value = e.filename || ""),
              (o.value = e.hint || ""),
              (p.value = parseInt(e.errEncryptCount) || 0),
              (v.value =
                "merge" === e.type
                  ? s("Enter the password to merge this file")
                  : s("Enter the password to open this file"));
          });
          const _ = () => {
              w.value ||
                t.$safeRun(() => {
                  c.ZP.fetch((0, i.iM)(window.id), { password: d.value }).then(
                    () => window.close(),
                  );
                });
            },
            f = () => {
              t.$safeRun(() => {
                c.ZP.fetch((0, i.iM)(window.id), { password: null }).then(() =>
                  window.close(),
                );
              });
            };
          return (
            (0, u.q)(k, { cancel: f, confirm: _ }),
            {
              __sfc: !0,
              vm: t,
              $T: s,
              fileName: a,
              hint: o,
              passwordModel: d,
              errorCount: p,
              text: v,
              disabled: w,
              showHint: m,
              touchBarItems: k,
              confirm: _,
              cancel: f,
            }
          );
        },
      });
      const p = (0, s(51900).Z)(
        d,
        function () {
          var e = this,
            t = e._self._c,
            s = e._self._setupProxy;
          return t(
            "div",
            { staticClass: "uk-window uk-window-dialog", attrs: { id: "app" } },
            [
              t(
                "div",
                {
                  staticClass:
                    "uk-window-title-bar uk-window-title-bar-floating",
                },
                [t("window-control-button-group")],
                1,
              ),
              e._v(" "),
              t("div", { staticClass: "uk-window-body uk-padding" }, [
                t("h1", [e._v(e._s(s.text))]),
                e._v(" "),
                t("p", [e._v(e._s(s.$T("File name:") + " " + s.fileName))]),
                e._v(" "),
                t(
                  "form",
                  { staticClass: "uk-form-stacked uk-margin-large-top" },
                  [
                    t("div", { staticClass: "uk-margin" }, [
                      t("label", { staticClass: "uk-form-label" }, [
                        e._v(e._s(s.$T("Password:"))),
                      ]),
                      e._v(" "),
                      t("div", { staticClass: "uk-form-controls" }, [
                        t("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: s.passwordModel,
                              expression: "passwordModel",
                            },
                          ],
                          staticClass: "uk-input",
                          attrs: { type: "password", autofocus: "" },
                          domProps: { value: s.passwordModel },
                          on: {
                            keyup: function (t) {
                              return !t.type.indexOf("key") &&
                                e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                ? null
                                : s.confirm.apply(null, arguments);
                            },
                            input: function (e) {
                              e.target.composing ||
                                (s.passwordModel = e.target.value);
                            },
                          },
                        }),
                      ]),
                    ]),
                  ],
                ),
                e._v(" "),
                t(
                  "p",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !s.showHint && s.errorCount,
                        expression: "!showHint && errorCount",
                      },
                    ],
                    staticClass: "uk-text-danger uk-margin-remove",
                  },
                  [
                    e._v(
                      "\n      " +
                        e._s(
                          s.$T(
                            "The password is not correct. Please try again.",
                          ),
                        ) +
                        "\n    ",
                    ),
                  ],
                ),
                e._v(" "),
                t(
                  "p",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: s.showHint,
                        expression: "showHint",
                      },
                    ],
                    staticClass: "uk-text-muted uk-margin-remove",
                  },
                  [
                    e._v(
                      "\n      " +
                        e._s(s.$T("Password Hint:") + " " + s.showHint) +
                        "\n    ",
                    ),
                  ],
                ),
              ]),
              e._v(" "),
              t("div", { staticClass: "uk-window-button-bar" }, [
                t("div", { staticClass: "uk-button-group" }, [
                  t(
                    "button",
                    {
                      staticClass: "uk-button uk-button-primary",
                      attrs: { disabled: s.disabled },
                      on: { click: s.confirm },
                    },
                    [e._v("\n        " + e._s(s.$T("OK")) + "\n      ")],
                  ),
                  e._v(" "),
                  t(
                    "button",
                    {
                      staticClass: "uk-button uk-button-default",
                      on: { click: s.cancel },
                    },
                    [e._v("\n        " + e._s(s.$T("Cancel")) + "\n      ")],
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
      (0, a.Z)(p, { name: "dialog-enterpassword" });
    },
    24034: (e, t, s) => {
      s.d(t, { q: () => r });
      var a = s(2954);
      s(92636), s(54856), s(16704), s(50965), s(18446), s(90435);
      function r(e, t, s = !1) {
        (0, a.iH)({});
        let r = () => {};
        return { updateTouchBarItems: r };
      }
    },
    6113: (e) => {
      e.exports = require("crypto");
    },
    72298: (e) => {
      e.exports = require("electron");
    },
    82361: (e) => {
      e.exports = require("events");
    },
    57147: (e) => {
      e.exports = require("fs");
    },
    22037: (e) => {
      e.exports = require("os");
    },
    71017: (e) => {
      e.exports = require("path");
    },
    63477: (e) => {
      e.exports = require("querystring");
    },
    57310: (e) => {
      e.exports = require("url");
    },
    73837: (e) => {
      e.exports = require("util");
    },
  },
  (e) => {
    e.O(0, [6201, 1505], () => {
      return (t = 33775), e((e.s = t));
      var t;
    });
    var t = e.O();
    module.exports = t;
  },
]);
