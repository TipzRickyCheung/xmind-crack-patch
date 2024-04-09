(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [1530, 9891],
  {
    80102: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => s });
      var n = i(23645),
        a = i.n(n)()(function (e) {
          return e[1];
        });
      a.push([
        e.id,
        ".spinner-container[data-v-14a8e261] {\n  margin-top: -16px;\n}\n.spinner-image[data-v-14a8e261] {\n  width: 48px;\n  height: 48px;\n}\n.spinner-text[data-v-14a8e261] {\n  margin-top: 8px;\n}\n",
        "",
      ]);
      const s = a;
    },
    70851: (e, t, i) => {
      "use strict";
      i.r(t);
      var n = i(51505),
        a = i(2954),
        s = i(12e3);
      const o = (0, a.aZ)({
        __name: "app",
        setup: (e) => ({
          __sfc: !0,
          signInReferer: "dialog-signin",
          SignIn: s.Z,
        }),
      });
      const r = (0, i(51900).Z)(
        o,
        function () {
          var e = this._self._c,
            t = this._self._setupProxy;
          return e(t.SignIn, { attrs: { "sign-in-referer": t.signInReferer } });
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      (0, n.Z)(r, { name: "dialog-signin" });
    },
    13382: (e, t, i) => {
      "use strict";
      i.d(t, {
        G$: () => _,
        N0: () => m,
        Pg: () => C,
        R2: () => b,
        W5: () => x,
        ZZ: () => h,
        am: () => y,
        eq: () => k,
        yr: () => S,
      });
      var n = i(71017),
        a = i.n(n),
        s = i(67657),
        o = i(7104),
        r = i(86633),
        l = i(33394),
        c = i(94593),
        u = i(90435),
        d = i(54856),
        p = i(5893),
        v = i(50965),
        f = i(92636);
      const g = (0, r.ZP)("dialog");
      async function m(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = a().join((0, o.bY)(), e.icon));
        const t = s.BrowserWindow.fromId(window.id);
        return [s.dialog.showMessageBoxSync(t, e)];
      }
      async function w(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = a().join((0, o.bY)(), e.icon));
        const t = s.BrowserWindow.fromId(window.id),
          { response: i, checkboxChecked: n } = await s.dialog.showMessageBox(
            t,
            e,
          );
        return [i, n];
      }
      async function h(e) {
        (e = Object.assign({ securityScopedBookmarks: !0 }, e || {}))
          .suggestPath &&
          !e.defaultPath &&
          ((e.defaultPath = y(e.suggestPath, e.filters)), delete e.suggestPath);
        const {
          canceled: t,
          filePath: i,
          bookmark: n,
        } = await s.dialog.showSaveDialog(s.getCurrentWindow(), e);
        return t
          ? null
          : (i && n && (await l.Z.bindBookmark({ fp: i, bookmark: n })),
            i && (0, v.km)().setLastSaveDirectory(a().dirname(i)),
            i);
      }
      async function k({ folderName: e, dialogOptions: t }) {
        let i = "";
        (t = Object.assign({ securityScopedBookmarks: !0 }, t || {}))
          .defaultPath || (t.defaultPath = y({}));
        const {
          canceled: n,
          filePaths: o,
          bookmark: r,
        } = await s.dialog.showOpenDialog(s.getCurrentWindow(), t);
        if (n) return null;
        if (
          ((i = o[0]),
          o.length > 0 && r && (await l.Z.bindBookmark({ fp: i, bookmark: r })),
          "string" == typeof e)
        ) {
          let t = e.replace(/[\\/]/g, "");
          0, (i = a().join(i, t));
        }
        return (
          c.Z.existsSync(i) || c.Z.ensureDir(i),
          i && (0, v.km)().setLastSaveDirectory(i),
          i
        );
      }
      function y(
        { doc: e = null, oldDoc: t = null, suggestedName: i = null },
        n = null,
      ) {
        let o, r;
        if (
          (!o && i && (o = (0, p.N6)(i.toString())),
          !o &&
            e &&
            e.title &&
            e.source &&
            !e.source.startsWith("new://") &&
            (o = (0, p.N6)(e.title.toString())),
          !o &&
            t &&
            t.title &&
            t.source &&
            !t.source.startsWith("new://") &&
            (o = (0, p.N6)(t.title.toString())),
          o && Array.isArray(n))
        ) {
          const e = n[0] && n[0].extensions;
          Array.isArray(e) && e.length > 0 && (o = `${o}.${e[0]}`);
        }
        if (!r && t && t.source && t.source.startsWith("file://")) {
          let e = t.source.slice(7);
          0, (r = a().dirname(e));
        }
        if (
          (!r &&
            (0, v.km)().lastSaveDirectory &&
            (r = (0, v.km)().lastSaveDirectory),
          !r)
        )
          try {
            r = s.app.getPath("documents");
          } catch (e) {
            g.info(e);
          }
        return r && o ? a().join(r, o) : r || o;
      }
      async function x(e) {
        e.$withUIKit((t) => {
          const i = `\n        <button\n        class="uk-button uk-button-text uk-text-nowrap"\n        style="word-break: keep-all;"\n        focustrigger="cannotGetFocusByMouse">\n          ${e.$T("OK")}\n        </button>\n        </div>`;
          t.toast({
            message: e.$T(
              "The map style has been updated for your current version of Xmind.",
            ),
            pos: "bottom-center",
            timeout: 5e3,
            btn: i,
            style: { width: "500px", height: "auto", padding: "10px 20px" },
            btnClick: t.toast.clearAll(),
          });
        });
      }
      async function b(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("OK"),
          i = e("Get Latest Version"),
          n = [t, i],
          [a] = await w({
            title: "Xmind",
            message: e(
              "The map style in this file might vary since it was created in a newer version of Xmind.",
            ),
            detail: e(
              "You can continue to open the file or update to the latest version for better compatibility.",
            ),
            buttons: n,
            defaultId: n.indexOf(i),
            cancelId: n.indexOf(t),
            noLink: !0,
          });
        a === n.indexOf(i) && u.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function _(e) {
        if (((e = "function" != typeof e ? (e) => e : e), f.zr))
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
          i = e("Get Latest Version"),
          n = [i, t],
          [a] = await w({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file was created by a newer version of Xmind. Please update Xmind and try to open it again.",
            ),
            buttons: n,
            defaultId: n.indexOf(i),
            cancelId: n.indexOf(t),
            noLink: !0,
          });
        a === n.indexOf(i) && u.ZP.fetch(d.lf.GO_DOWNLOAD);
      }
      async function S(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Save"),
          i = e("Save as"),
          n = e("Cancel"),
          a = [];
        a.push(t, n, i);
        let [s] = await w({
          type: "none",
          title: "Xmind",
          message: e("Saving file from Xmind"),
          detail: e(
            "Once you save the file, it cannot be opened normally in older versions like $1.",
            "Xmind 22.11",
          ),
          buttons: a,
          defaultId: a.indexOf(i),
          cancelId: a.indexOf(n),
          noLink: !0,
        });
        const o = s === a.indexOf(t),
          r = s === a.indexOf(i);
        return { toSave: o, toSaveAs: r, toCancel: !o && !r };
      }
      async function C(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Fix ＆ Open"),
          i = e("Cancel"),
          n = [t, i],
          [a] = await w({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file may contain invalid data structure or have become corrupted. Xmind can try to fix the data structure to help you open it.",
            ),
            buttons: n,
            defaultId: n.indexOf(t),
            cancelId: n.indexOf(i),
            noLink: !0,
          });
        return { toFix: a === n.indexOf(t), toCancel: a === n.indexOf(i) };
      }
    },
    33394: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => f });
      var n = i(57147),
        a = i.n(n),
        s = i(71017),
        o = i.n(s),
        r = i(73837),
        l = i(86633),
        c = i(16704),
        u = i(56222);
      const d = (0, l.ZP)("renderer:fs");
      async function p(e) {
        return (0, u.A)("OBTAIN_READ_WRITE_ACCESS", e);
      }
      async function v(e) {
        return (0, u.A)("RELEASE_READ_WRITE_ACCESS", e);
      }
      const f = {
        read: async function (e) {
          if (!o().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const t = await (async function (e) {
            return (0, u.A)("OBTAIN_READ_LOCK", e);
          })(e);
          try {
            return await (0, r.promisify)(a().readFile)(e);
          } catch (t) {
            d.error(`path(${e}) read error: ${(0, c.SC)(t)}`);
            try {
              if (!(await p(e))) throw new Error(`No access to '${e}'`);
              return await (0, r.promisify)(a().readFile)(e);
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
          if (!o().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const i = await (async function (e) {
            return (0, u.A)("OBTAIN_WRITE_LOCK", e);
          })(e);
          try {
            return await (0, r.promisify)(a().writeFile)(e, t);
          } catch (i) {
            d.error(`path(${e}) write error: ${(0, c.SC)(i)}`);
            try {
              if (!(await p(e))) throw new Error(`No access to '${e}'`);
              return await (0, r.promisify)(a().writeFile)(e, t);
            } catch (e) {
              throw e;
            } finally {
              await v(e);
            }
          } finally {
            await (async function (e) {
              return (0, u.A)("RELEASE_WRITE_LOCK", e);
            })(i);
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
    24034: (e, t, i) => {
      "use strict";
      i.d(t, { q: () => a });
      var n = i(2954);
      i(92636), i(54856), i(16704), i(50965), i(18446), i(90435);
      function a(e, t, i = !1) {
        (0, n.iH)({});
        let a = () => {};
        return { updateTouchBarItems: a };
      }
    },
    4075: (e, t, i) => {
      "use strict";
      i.d(t, { R: () => a });
      var n = i(63477);
      const a = (e) =>
        e.startsWith("?") ? (0, n.parse)(e.slice(1)) : (0, n.parse)(e);
    },
    12e3: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => b });
      var n = i(2954),
        a = i(57310),
        s = i.n(a),
        o = i(49891),
        r = i(92636),
        l = i(16704),
        c = i(54856),
        u = i(50965),
        d = i(86633),
        p = i(90435),
        v = (i(13382), i(79409)),
        f = i(18621),
        g = i(69931),
        m = i(4075),
        w = i(24034),
        h = i(5893),
        k = i(7104),
        y = function (e, t, i, n) {
          return new (i || (i = Promise))(function (a, s) {
            function o(e) {
              try {
                l(n.next(e));
              } catch (e) {
                s(e);
              }
            }
            function r(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(o, r);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      const x = (0, n.aZ)({
        __name: "sign-in",
        props: { signInReferer: String },
        setup(e) {
          const t = e,
            i = {
              darwin: (0, g.ju)("static/images/signin-dialog-device-mac.svg"),
              win32: (0, g.ju)(
                "static/images/signin-dialog-device-windows.svg",
              ),
              linux: (0, g.ju)("static/images/signin-dialog-device-linux.svg"),
            },
            a = (0, g.ju)("static/assets/images/no-wifi.svg"),
            x = (0, d.ZP)("use-sign-in"),
            b = (0, m.R)(window.location.search),
            { T: _ } = (0, u.JE)(),
            S = (0, n.FN)().proxy,
            C = (0, n.iH)(null),
            D = (0, h.u3)(`${(0, k.bY)()}/static/scripts/sign-in-preload.js`),
            O = (0, n.iH)(!0),
            I = (0, n.iH)(!1),
            A = (0, n.iH)(!1),
            R = (0, n.iH)(""),
            T = (0, n.iH)(null),
            L = (0, n.iH)([]),
            E = (0, n.iH)(!1),
            B = (0, n.iH)([]),
            P = (0, n.iH)(!1),
            $ = (0, n.Fl)(() => {
              let e = `/in-app/signin?app_platform=${r.IQ.linux}&app_version=${(0, v.Z)("version")}`;
              b.targetAccount &&
                (e += `&account=${encodeURIComponent(b.targetAccount)}`),
                "true" === process.env.INTERNAL_TESTING && (e += "&beta=1"),
                r.pM && (e += `&specific=${encodeURIComponent("vana_lenovo")}`);
              const { serviceRegion: t } = (0, u.qr)(),
                { language: i } = (0, u.S)();
              if ("cn" === t) return `https://www.xmind.cn${e}`;
              if ("en-US" === i) return `https://www.xmind.app${e}`;
              {
                const t = r.cT[i];
                return `https://www.xmind.app${t ? `/${t}` : ""}${e}`;
              }
            }),
            F = (0, n.Fl)(() => B.value.length > 0 && !E.value);
          (0, n.bv)(() => {
            C.value.addEventListener("ipc-message", (e) => {
              N(e.channel);
            });
          });
          const N = (e) =>
              y(this, void 0, void 0, function* () {
                const i = JSON.parse(e);
                if (
                  ("welcome" === t.signInReferer &&
                    (0, f.L9)({
                      eventCategory: "welcome",
                      eventAction: "welcomeSigninClosedBySignIn",
                    }),
                  "signin_success" === i.event)
                )
                  return (
                    (T.value = {
                      region: R.value || "us",
                      user: i.data.user,
                      token: i.data.token,
                      uid: i.data.user,
                      primaryEmail: i.data.primary_email,
                      fullname: i.data.fullname,
                      groupName: i.data.group_name,
                      phone: i.data.phone,
                    }),
                    yield Z(),
                    void (
                      (0, u.Yh)().status === r.wi.VALID &&
                      (0, u.Yh)().updateStartTrial(!0)
                    )
                  );
              }),
            Z = () =>
              y(this, void 0, void 0, function* () {
                let e;
                try {
                  (e = yield p.ZP.fetch(c.lf.DEVICE_BIND, {
                    account: T.value,
                  })),
                    x.debug("Bind device result:", e);
                } catch (e) {
                  if (e.code === r.oM) return void (yield Z());
                  if (
                    e.code === r.q4 &&
                    e.data &&
                    e.data.devices &&
                    ((L.value = e.data.devices.filter(({ type: e }) => e in i)),
                    L.value.length > 0)
                  )
                    return;
                  return (
                    x.error("Error while binding device:", (0, l.SC)(e)),
                    void (I.value = !0)
                  );
                }
                if (e.license) {
                  const { ss: t } = e.license;
                  t && (P.value = !0);
                }
                yield q(e.rawData);
              }),
            U = (e) => B.value.includes(e),
            W = () =>
              y(this, void 0, void 0, function* () {
                let e;
                try {
                  e = yield p.ZP.fetch(c.lf.DEVICE_BIND, {
                    account: T.value,
                    unbind: B.value,
                  });
                } catch (e) {
                  return (
                    e.code === r.q4 &&
                      (e.data &&
                        e.data.devices &&
                        (L.value = e.data.devices.filter(
                          ({ type: e }) => e in i,
                        )),
                      (B.value = [])),
                    void x.error("Unbind devices: ", (0, l.SC)(e))
                  );
                }
                yield q(e.rawData);
              }),
            q = (e) =>
              y(this, void 0, void 0, function* () {
                let t;
                try {
                  t = yield p.ZP.fetch(c.lf.SUBSCRIPTION_DETAILS, {
                    account: T.value,
                  });
                } catch (e) {
                  x.warn(
                    "Failed to retrieve subscription details:",
                    (0, l.SC)(e),
                  );
                }
                const i = Object.assign(Object.assign({}, T.value), {
                  rawSubscriptionData: e,
                  subscriptionDetails: t,
                });
                if (
                  (yield Promise.all([
                    p.ZP.fetch(c.Pp, {
                      mutations: [
                        { id: "account", type: "updateAccount", payload: [i] },
                      ],
                    }),
                    p.ZP.fetch((0, c.iM)(window.id), { success: !0 }),
                  ]),
                  setTimeout(
                    () =>
                      null === window || void 0 === window
                        ? void 0
                        : window.close(),
                    0,
                  ),
                  b.ignoreOpenDialog)
                )
                  return;
                if (b.openBy)
                  return void (yield p.ZP.fetch(c.Fx, { name: b.openBy }));
                if (r.X_) return;
                const n = (0, u.Yh)().subscriptionStatus;
                n === r.rJ.VALID || "valid" === n
                  ? yield p.ZP.fetch(c.Fx, {
                      name: "dialog-congratulate",
                      query: { isOldUser: P.value },
                    })
                  : n === r.rJ.TRIAL &&
                    p.ZP.fetch(c.lf.TRIAL_COUPON, { immediately: !0 }).catch(
                      (e) => {
                        x.warn("Failed to load trial coupon:", e);
                      },
                    );
              }),
            j = (0, n.iH)([
              { type: "space", size: "flexible" },
              { type: "button", label: _("Cancel"), click: "close" },
              { type: "space", size: "flexible" },
            ]);
          return (
            (0, w.q)(j, { close }),
            {
              __sfc: !0,
              deviceImages: i,
              customNetworkFailLoadIcon: a,
              logger: x,
              query: b,
              $T: _,
              props: t,
              vm: S,
              webviewRef: C,
              preloadScriptURL: D,
              isMac: !1,
              goBackBtnText: "其他登录方式",
              isShowSpinner: O,
              isShowFailLoad: I,
              showGoBackBtn: A,
              region: R,
              account: T,
              devices: L,
              isUnbindingDevices: E,
              devicesToUnbind: B,
              isOldUser: P,
              signinURL: $,
              canUnbindDevices: F,
              handleDidNavigate: (e) => {
                const t = e.target.getURL(),
                  i = s().parse(t);
                i.hostname.includes("xmind") && i.pathname.includes("/in-app")
                  ? (i.hostname.includes(".cn")
                      ? (R.value = "cn")
                      : i.hostname.includes(".app") && (R.value = "us"),
                    (A.value = !1))
                  : (A.value = !0);
              },
              handleDomReady: () => {
                (O.value = !1), C.value.focus();
              },
              handleWebViewMessageResult: N,
              doWebViewSignin: Z,
              reload: () => {
                (O.value = !0), (I.value = !1), C.value.reload();
              },
              goBack: () => {
                C.value.goBack();
              },
              toggleDeviceToUnbind: (e) => {
                U(e)
                  ? (B.value = B.value.filter((t) => t !== e))
                  : (B.value = B.value.concat([e]));
              },
              isDeviceToUnbind: U,
              getStylesForDeviceDescription: (e) =>
                U(e) ? { opacity: "0.5" } : "",
              unbindDevices: (e) => {
                if (
                  (e &&
                    e.preventDefault &&
                    (e.preventDefault(), (e.returnValue = !1)),
                  F.value)
                )
                  return S.$safeRun(() => W()), !1;
              },
              doUnbindDevices: W,
              saveAndClose: q,
              touchBarItems: j,
              Spinner: o.default,
            }
          );
        },
      });
      const b = (0, i(51900).Z)(
        x,
        function () {
          var e = this,
            t = e._self._c,
            i = e._self._setupProxy;
          return t(
            "div",
            {
              staticClass:
                "uk-window uk-window-default uk-window-dialog uk-window-dialog-default",
            },
            [
              t(
                "div",
                {
                  staticClass: "uk-window-title-bar",
                  class: {
                    "uk-window-title-bar-floating": 0 !== i.devices.length,
                  },
                  style: i.isMac ? { textAlign: "right" } : null,
                },
                [
                  t("div", { staticClass: "uk-window-title" }, [
                    e._v(e._s(i.$T("Sign In"))),
                  ]),
                  e._v(" "),
                  t(
                    "button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: i.showGoBackBtn,
                          expression: "showGoBackBtn",
                        },
                      ],
                      staticClass: "uk-button uk-button-link",
                      style: i.isMac ? { marginRight: "12px" } : null,
                      on: { click: i.goBack },
                    },
                    [e._v("\n      " + e._s(i.goBackBtnText) + "\n    ")],
                  ),
                  e._v(" "),
                  t("window-control-button-group"),
                ],
                1,
              ),
              e._v(" "),
              t("div", { staticClass: "uk-window-body uk-flex" }, [
                0 === i.devices.length
                  ? t(
                      "div",
                      { staticClass: "uk-flex-1 uk-flex uk-position-relative" },
                      [
                        t("webview", {
                          ref: "webviewRef",
                          staticClass: "uk-width-1-1",
                          attrs: {
                            src: i.signinURL,
                            preload: i.preloadScriptURL,
                            allowpopups: "",
                          },
                          on: {
                            "will-navigate": function (e) {
                              i.isShowSpinner = !0;
                            },
                            "did-navigate": i.handleDidNavigate,
                            "dom-ready": i.handleDomReady,
                            "did-fail-load": function (e) {
                              i.isShowFailLoad = !0;
                            },
                          },
                        }),
                        e._v(" "),
                        t(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: i.isShowSpinner,
                                expression: "isShowSpinner",
                              },
                            ],
                            staticClass:
                              "uk-background-default uk-position-cover uk-flex uk-flex-1 uk-flex-center uk-flex-middle uk-icon-link",
                          },
                          [
                            t(i.Spinner, {
                              staticStyle: { "padding-bottom": "30px" },
                              attrs: {
                                text: i.$T("Connecting to Xmind Server..."),
                              },
                            }),
                          ],
                          1,
                        ),
                        e._v(" "),
                        t(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: i.isShowFailLoad,
                                expression: "isShowFailLoad",
                              },
                            ],
                            staticClass:
                              "uk-background-default uk-position-cover uk-flex uk-flex-1 uk-flex-center uk-flex-middle uk-icon-link",
                          },
                          [
                            t(
                              "div",
                              {
                                staticClass: "uk-text-center uk-text-muted",
                                staticStyle: { "padding-bottom": "30px" },
                              },
                              [
                                t("img", {
                                  staticStyle: {
                                    width: "48px",
                                    height: "48px",
                                  },
                                  attrs: {
                                    draggable: "false",
                                    src: i.customNetworkFailLoadIcon,
                                    "uk-svg": "",
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "div",
                                  { staticClass: "uk-margin-small-top" },
                                  [
                                    e._v(
                                      "\n            " +
                                        e._s(
                                          i.$T(
                                            "Please check your network connection and try again later.",
                                          ),
                                        ) +
                                        "\n          ",
                                    ),
                                  ],
                                ),
                                e._v(" "),
                                t(
                                  "button",
                                  {
                                    staticClass:
                                      "uk-button uk-button-default uk-margin-small-top",
                                    on: { click: i.reload },
                                  },
                                  [
                                    e._v(
                                      "\n            " +
                                        e._s(i.$T("Retry")) +
                                        "\n          ",
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ],
                        ),
                      ],
                      1,
                    )
                  : t(
                      "div",
                      {
                        staticClass:
                          "uk-width-expand uk-margin-large-left uk-margin-xlarge-top uk-margin-large-right uk-margin-large-bottom",
                      },
                      [
                        t(
                          "form",
                          {
                            staticClass: "uk-height-1-1",
                            on: {
                              submit: function (e) {
                                return (
                                  e.preventDefault(),
                                  i.unbindDevices.apply(null, arguments)
                                );
                              },
                            },
                          },
                          [
                            t("h1", { staticClass: "uk-margin-small-top" }, [
                              e._v(
                                "\n          " +
                                  e._s(i.$T("Exceeded Device Limit.")) +
                                  "\n        ",
                              ),
                            ]),
                            e._v(" "),
                            t(
                              "div",
                              { staticClass: "uk-margin-medium-bottom" },
                              [
                                e._v(
                                  "\n          " +
                                    e._s(
                                      i.$T(
                                        "Your account has exceeded device limit. Unlink one device to continue.",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ],
                            ),
                            e._v(" "),
                            t(
                              "div",
                              {
                                staticClass:
                                  "uk-overflow-auto uk-padding-remove-left uk-padding-remove-vertical uk-padding-small",
                                staticStyle: { "max-height": "340px" },
                              },
                              e._l(i.devices, function (n, a) {
                                return t("div", { key: a }, [
                                  t(
                                    "div",
                                    {
                                      staticClass:
                                        "uk-flex uk-flex-between uk-flex-middle uk-padding-large uk-padding-remove-horizontal",
                                    },
                                    [
                                      t("div", {
                                        staticClass:
                                          "uk-flex-none uk-background-norepeat uk-background-contain",
                                        staticStyle: {
                                          width: "56px",
                                          height: "42px",
                                        },
                                        style: i.getStylesForDeviceDescription(
                                          n.id,
                                        ),
                                        attrs: {
                                          "data-src": i.deviceImages[n.type],
                                          "uk-svg": "",
                                        },
                                      }),
                                      e._v(" "),
                                      t(
                                        "span",
                                        {
                                          staticClass:
                                            "uk-overflow-hidden uk-text-truncate uk-margin-small-left uk-margin-small-right uk-width-1-1",
                                          style:
                                            i.getStylesForDeviceDescription(
                                              n.id,
                                            ),
                                          attrs: { title: n.name },
                                        },
                                        [e._v(e._s(n.name))],
                                      ),
                                      e._v(" "),
                                      t(
                                        "button",
                                        {
                                          staticClass:
                                            "uk-button uk-flex-none uk-button-default",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function (e) {
                                              return i.toggleDeviceToUnbind(
                                                n.id,
                                              );
                                            },
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n                " +
                                              e._s(
                                                i.isDeviceToUnbind(n.id)
                                                  ? i.$T("Link(verb)")
                                                  : i.$T("Unlink"),
                                              ) +
                                              "\n              ",
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                  e._v(" "),
                                  a !== i.devices.length - 1
                                    ? t("hr", {
                                        staticClass: "uk-margin-remove",
                                      })
                                    : e._e(),
                                ]);
                              }),
                              0,
                            ),
                            e._v(" "),
                            t(
                              "div",
                              {
                                staticClass:
                                  "uk-margin-large-top uk-text-right",
                              },
                              [
                                t(
                                  "button",
                                  {
                                    staticClass:
                                      "uk-button uk-button-primary uk-button-large",
                                    staticStyle: { width: "180px" },
                                    attrs: {
                                      type: "submit",
                                      disabled: !i.canUnbindDevices,
                                    },
                                  },
                                  [
                                    t("span", {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: i.isUnbindingDevices,
                                          expression: "isUnbindingDevices",
                                        },
                                      ],
                                      staticClass: "uk-margin-small-right",
                                      attrs: { "uk-spinner": "ratio: 0.6" },
                                    }),
                                    e._v(" "),
                                    t("span", [e._v(e._s(i.$T("Continue")))]),
                                  ],
                                ),
                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
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
    49891: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => o });
      var n = i(2954),
        a = i(69931);
      const s = (0, n.aZ)({
        __name: "spinner",
        props: { text: { type: String } },
        setup: (e) => ({
          __sfc: !0,
          imageURL: (0, n.Fl)(() =>
            (0, a.ju)("static/assets/images/spinner.gif"),
          ),
        }),
      });
      i(25863);
      const o = (0, i(51900).Z)(
        s,
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            {
              staticClass:
                "uk-panel uk-background-default uk-flex uk-flex-column uk-flex-center uk-flex-middle",
            },
            [
              t(
                "div",
                {
                  staticClass: "uk-text-center uk-text-muted spinner-container",
                },
                [
                  t("img", {
                    staticClass: "spinner-image",
                    attrs: {
                      draggable: "false",
                      src: e._self._setupProxy.imageURL,
                    },
                  }),
                  e._v(" "),
                  e.text
                    ? t("div", { staticClass: "spinner-text" }, [
                        e._v("\n      " + e._s(e.text) + "\n    "),
                      ])
                    : e._e(),
                ],
              ),
            ],
          );
        },
        [],
        !1,
        null,
        "14a8e261",
        null,
      ).exports;
    },
    25863: (e, t, i) => {
      var n = i(80102);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, i(45346).Z)("1107ca9a", n, !0, {});
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
    e.O(0, [3025, 1505], () => {
      return (t = 70851), e((e.s = t));
      var t;
    });
    var t = e.O();
    module.exports = t;
  },
]);
