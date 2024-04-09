(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [9773, 9891],
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
    65157: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => s });
      var n = i(23645),
        a = i.n(n)()(function (e) {
          return e[1];
        });
      a.push([
        e.id,
        "#welcome-to-xmind[data-v-b2adb38c] {\n  padding: 50px 0 30px 0;\n}\n#welcome-to-xmind h1[data-v-b2adb38c] {\n  font-size: 37px;\n  margin: 0;\n  line-height: 1;\n  margin-bottom: 36px;\n}\n#welcome-to-xmind h3[data-v-b2adb38c] {\n  line-height: 22px;\n  font-size: 18px;\n  margin: 0;\n}\n#welcome-to-xmind p[data-v-b2adb38c] {\n  line-height: 15px;\n  margin-top: 4px;\n  margin-bottom: 0;\n  font-size: 13px;\n  opacity: 0.5;\n}\n#welcome-to-xmind .welcome-desc[data-v-b2adb38c] {\n  margin-top: 24px;\n  width: 384px;\n}\n#welcome-to-xmind .welcome-desc-left img[data-v-b2adb38c] {\n  height: 50px;\n}\n#welcome-to-xmind .welcome-desc-right[data-v-b2adb38c] {\n  padding-top: 6px;\n  margin-left: 16px;\n  width: 314px;\n}\n#welcome-to-xmind button.welcome-continue[data-v-b2adb38c] {\n  width: 300px;\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n",
        "",
      ]);
      const s = a;
    },
    11632: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => u });
      var n = i(77412),
        a = i(92636),
        s = i(62652),
        o = i(54856),
        r = i(90435),
        c = i(50965);
      const l = [a.Zr.E_KEY_BIND_TO_ANOTHER_MACHINE, a.Zr.E_KEY_NOT_EXIST],
        u = {
          data: () => ({
            licenseKey: "",
            email: "",
            validity: a.lX.VALID,
            serverStatus: a.Zr.VALID,
            activating: !1,
          }),
          computed: {
            ...(0, n.rn)(c.Yh, {
              validatePerMachineLicenseKey: (e) =>
                e.validatePerMachineLicenseKey,
              parsePerMachineLicenseData: (e) => e.parsePerMachineLicenseData,
              validatePerMachineLicenseData: (e) =>
                e.validatePerMachineLicenseData,
            }),
            canActivate() {
              return this.licenseKey && this.email && !this.activating;
            },
            errMsg() {
              if (this.validity !== a.lX.VALID) {
                switch (this.validity) {
                  case a.lX.E_KEY_INVALID:
                    return this.$T(
                      "Invalid license. Please enter a correct email and key.",
                    );
                  case a.lX.E_OUTDATED:
                    return this.$T("Please enter a valid license key.");
                  case a.lX.E_MAJOR_VERSION_UNMATCHED:
                    return this.$T(
                      "This license key cannot be used in this version of Xmind.",
                    );
                  case a.lX.E_MACHINE_ID_UNMATCHED:
                    return this.$T(
                      "Failed to obtain device information to bind to this license key.",
                    );
                }
                return this.$T(
                  "Unexpected error occurred during activating license.",
                );
              }
              if (this.serverStatus !== a.Zr.VALID) {
                switch (this.serverStatus) {
                  case a.Zr.E_KEY_BIND_TO_ANOTHER_MACHINE:
                    return this.$T(
                      "This license key is already bound with another device.",
                    );
                  case a.Zr.E_KEY_NOT_EXIST:
                    return this.$T(
                      "Activation failed, please check your Email and license key.",
                    );
                  case a.Zr.E_PARAM_MISSING:
                    return this.$T(
                      "Unexpected error occurred during activating license.",
                    );
                  case a.Zr.E_SERVER_ERR:
                    return this.$T(
                      "Can't connect with Xmind server, please try again later.",
                    );
                }
                return this.$T(
                  "Network error or other unexpected error. Please try again later.",
                );
              }
              return "";
            },
          },
          methods: {
            submitForm(e) {
              return (
                e.preventDefault(),
                (e.returnValue = !1),
                this.$safeRun(() => this.activate()),
                !1
              );
            },
            async activate() {
              if (this.canActivate) {
                this.activating = !0;
                try {
                  (this.validity = a.lX.VALID),
                    (this.serverStatus = a.Zr.VALID);
                  const e = (0, s.Nc)(this.licenseKey),
                    t = this.email.trim();
                  let i;
                  try {
                    i = await r.ZP.fetch(o.lf.SME_LICENSE_ACTIVATE, {
                      key: e,
                      email: t,
                    });
                  } catch (n) {
                    if (l.includes(n.code))
                      return void (this.serverStatus = n.code);
                    i = { key: e, email: t };
                  }
                  try {
                    let e = this.parsePerMachineLicenseData(i);
                    this.validity = this.validatePerMachineLicenseData(e);
                  } catch (e) {
                    this.validity = a.lX.E_KEY_INVALID;
                  }
                  if (this.validity !== a.lX.VALID) return;
                  await Promise.all([
                    r.ZP.fetch(o.Pp, {
                      mutations: [
                        {
                          id: "activation",
                          type: "updateRawPerMachineLicenseData",
                          payload: [{ rawData: { ...i, email: t } }],
                        },
                      ],
                    }),
                    r.ZP.fetch((0, o.iM)(window.id), { success: !0 }),
                  ]),
                    setTimeout(() => window.close(), 0),
                    await r.ZP.fetch(o.Fx, { name: "dialog-congratulate" });
                } finally {
                  this.activating = !1;
                }
              }
            },
          },
        };
    },
    40334: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => c });
      var n = i(92636),
        a = i(54856),
        s = i(16704),
        o = i(50965),
        r = i(90435);
      const c = {
        computed: {},
        watch: {
          touchBarItems(e) {
            this.updateTouchBarItems(e);
          },
        },
        methods: {
          updateTouchBarItems(e) {
            const t = (e) => {
              const t = e.click;
              let i = this._touchBarRoutes[t];
              return (
                i ||
                  ((i = {
                    method: t,
                    endpoint: (0, a.A6)(window.id, (0, s.rs)(t)),
                  }),
                  (this._touchBarRoutes[t] = i)),
                i.unroute || (i.unroute = r.ZP.route(i.endpoint, this[t])),
                Object.assign({}, e, { click: i.endpoint })
              );
            };
            (e = (e || this.touchBarItems || []).map(
              (e) => (
                "button" !== e.type ||
                "string" != typeof e.click ||
                n.sq.includes(e.click) ||
                e.click.startsWith("command:")
                  ? "buttons" === e.type &&
                    (e = {
                      ...e,
                      buttons: e.buttons.map((e) =>
                        "string" != typeof e.click ||
                        n.sq.includes(e.click) ||
                        e.click.startsWith("command:")
                          ? e
                          : t(e),
                      ),
                    })
                  : (e = t(e)),
                e
              ),
            )),
              (0, o.JS)("window")?.().updateTouchBarItems(e);
          },
        },
        beforeCreate() {
          this._touchBarRoutes = {};
        },
        mounted() {
          this.updateTouchBarItems();
        },
        beforeDestroy() {
          Object.values(this._touchBarRoutes).forEach(
            ({ unroute: e }) => e && e(),
          ),
            (this._touchBarRoutes = {});
        },
      };
    },
    44367: (e, t, i) => {
      "use strict";
      i.r(t);
      var n = i(51505),
        a = i(63477),
        s = i.n(a),
        o = i(50965),
        r = i(92636),
        c = i(54856),
        l = i(90435),
        u = i(40334),
        d = (i(11632), i(18621)),
        p = i(12e3);
      const m = {
        mixins: [u.Z],
        components: { SignIn: p.Z },
        data() {
          return {
            licenseContent: "",
            loadingLicenseContent: !1,
            loopTimer: null,
            isLicenseMode: !1,
            composition: "feature",
            newSendUsageData: !0,
            independentComposition: null,
            signInReferer: "welcome",
            eulaTitle: this.$T("End User License Agreement"),
          };
        },
        created() {
          const e = s().parse(window.location.search.slice(1));
          e.composition &&
            ((this.independentComposition = e.composition),
            (this.composition = e.composition),
            "EULA" === this.composition && this.loadLicenseContent()),
            (0, o.qr)().updateWelcomeVersion(),
            window.addEventListener("beforeunload", () => {
              "signin" === this.composition &&
                (0, d.L9)({
                  eventCategory: "welcome",
                  eventAction: "welcomeSigninClosedByWindow",
                });
            });
        },
        mounted() {
          "feature" !== this.independentComposition &&
            (0, o.c7)().updateOpenActivateDialogDate(new Date().toJSON()),
            (this.eulaTitle =
              (0, o.qr)().acceptedEULAVersions.length > 0
                ? this.$T("End User License Agreement Updated")
                : this.$T("End User License Agreement")),
            (this.newSendUsageData = this.sendUsageData);
        },
        computed: {
          newFeatureItems() {
            return [
              {
                title: this.$T("New Templates"),
                desc: this.$T(
                  "Explore 100+ templates designed to enhance your creativity and efficiency.",
                ),
                img: this.$toResourceURL(
                  "static/assets/images/welcome/ic-new-templates.svg",
                ),
              },
              {
                title: this.$T("Rich Text Styles"),
                desc: this.$T(
                  "Modify font, size, and color for selected text to highlight key information.",
                ),
                img: this.$toResourceURL(
                  "static/assets/images/welcome/ic-rich-text-styles.svg",
                ),
              },
              {
                title: this.$T("Numbering"),
                desc: this.$T(
                  "Select your auto-numbering style for seamless topic organization.",
                ),
                img: this.$toResourceURL(
                  "static/assets/images/welcome/ic-numbering.svg",
                ),
              },
              {
                title: this.$T("Image Frame"),
                desc: this.$T(
                  "Design your exported images with personalizable frames, shadows, and etc.",
                ),
                img: this.$toResourceURL(
                  "static/assets/images/welcome/ic-image-frame.svg",
                ),
              },
            ];
          },
          illustrationImageURL() {
            0;
          },
          illustrationHDImageURL() {
            0;
          },
          touchBarItems() {
            return "feature" === this.composition
              ? [
                  { type: "space", size: "flexible" },
                  {
                    type: "button",
                    label: this.$T("Continue"),
                    backgroundColor: "primary",
                    click: "continueNext",
                  },
                  { type: "space", size: "flexible" },
                ]
              : "EULA" === this.composition
                ? [
                    { type: "space", size: "flexible" },
                    {
                      type: "button",
                      label: this.$T("Back"),
                      click: "backToFeature",
                    },
                    {
                      type: "button",
                      label: this.$T("Disagree"),
                      click: "close",
                    },
                    {
                      type: "button",
                      label: this.$T("Agree"),
                      backgroundColor: "primary",
                      click: "continueNext",
                    },
                    { type: "space", size: "flexible" },
                  ]
                : "license" === this.composition
                  ? [
                      { type: "space", size: "flexible" },
                      {
                        type: "button",
                        label: this.$T("Cancel"),
                        click: "close",
                      },
                      {
                        type: "button",
                        label: this.$T("Activate"),
                        backgroundColor: "primary",
                        click: "activate",
                      },
                      { type: "space", size: "flexible" },
                    ]
                  : [];
          },
          appearance: () => (0, o.S)().appearance,
          sendUsageData: () => (0, o.S)().sendUsageData,
        },
        methods: {
          backToFeature() {
            this.composition = "feature";
          },
          agreeAndContinue(e) {
            e && e.preventDefault && e.preventDefault(),
              l.ZP.fetch(c.Pp, {
                mutations: [{ id: "app", type: "acceptEULA" }],
              }),
              this.isLicenseMode ||
                this.newSendUsageDataValue == this.sendUsageData ||
                (0, o.S)().updatePreferences({
                  sendUsageData: this.newSendUsageData,
                }),
              r.sv
                ? (this.composition = "license")
                : (0, o.c7)().user
                  ? this.close()
                  : (this.composition = "signin");
          },
          close() {
            window.close();
          },
          continueNext() {
            if ("feature" === this.independentComposition || r.zr) this.close();
            else
              switch (this.composition) {
                case "feature":
                  this.loadLicenseContent();
                  break;
                case "EULA":
                  this.agreeAndContinue();
              }
          },
          loadLicenseContent() {
            if (
              ((this.composition = "EULA"),
              this.licenseContent || this.loadingLicenseContent)
            )
              return;
            this.loadingLicenseContent = !0;
            const e = "static/documents/eula.html";
            let t = e;
            switch ((0, o.S)().language) {
              case "zh":
              case "zh-CN":
                t = "static/documents/eula-zh.html";
            }
            this.$safeRun(async () => {
              try {
                let e = await this.$loadResource(t);
                return (
                  (this.licenseContent = e.toString("utf8")),
                  void (this.loadingLicenseContent = !1)
                );
              } catch (i) {
                if (t === e) throw ((this.loadingLicenseContent = !1), i);
              }
              try {
                let t = await this.$loadResource(e);
                (this.licenseContent = t.toString("utf8")),
                  (this.loadingLicenseContent = !1);
              } catch (e) {
                throw ((this.loadingLicenseContent = !1), e);
              }
            });
          },
        },
      };
      i(37474);
      const h = (0, i(51900).Z)(
        m,
        function () {
          var e = this,
            t = e._self._c;
          return "signin" !== e.composition
            ? t(
                "div",
                {
                  staticClass: "uk-window uk-window-dialog uk-window-default",
                  attrs: { id: "app" },
                },
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
                  t(
                    "div",
                    {
                      staticClass:
                        "uk-window-body uk-flex uk-child-width-expand",
                    },
                    [
                      t(
                        "article",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "feature" === e.composition,
                              expression: "composition === 'feature'",
                            },
                          ],
                          staticClass:
                            "uk-flex uk-position-relative uk-flex-center",
                          attrs: { id: "welcome-to-xmind" },
                        },
                        [
                          t("div", [
                            t(
                              "h1",
                              { staticClass: "uk-text-bold uk-text-center" },
                              [
                                e._v(
                                  "\n          " +
                                    e._s(e.$T("What's New")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                            e._v(" "),
                            t(
                              "div",
                              { style: { marginLeft: "5px" } },
                              e._l(e.newFeatureItems, function (i) {
                                return t(
                                  "div",
                                  {
                                    key: i.title,
                                    staticClass: "welcome-desc uk-flex",
                                  },
                                  [
                                    t(
                                      "div",
                                      {
                                        staticClass:
                                          "welcome-desc-left uk-flex-no-shrink",
                                      },
                                      [
                                        t("img", {
                                          attrs: {
                                            src: i.img,
                                            alt: "",
                                            draggable: "false",
                                          },
                                        }),
                                      ],
                                    ),
                                    e._v(" "),
                                    t(
                                      "div",
                                      { staticClass: "welcome-desc-right" },
                                      [
                                        t(
                                          "h3",
                                          { staticClass: "uk-text-bold" },
                                          [
                                            e._v(
                                              "\n                " +
                                                e._s(i.title) +
                                                "\n              ",
                                            ),
                                          ],
                                        ),
                                        e._v(" "),
                                        t("p", [
                                          e._v(
                                            "\n                " +
                                              e._s(i.desc) +
                                              "\n              ",
                                          ),
                                        ]),
                                      ],
                                    ),
                                  ],
                                );
                              }),
                              0,
                            ),
                            e._v(" "),
                            t(
                              "button",
                              {
                                staticClass:
                                  "welcome-continue uk-button uk-button-primary uk-button-large",
                                on: { click: e.continueNext },
                              },
                              [
                                e._v(
                                  "\n          " +
                                    e._s(e.$T("Continue")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                          ]),
                        ],
                      ),
                      e._v(" "),
                      t(
                        "article",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "EULA" === e.composition,
                              expression: "composition === 'EULA'",
                            },
                          ],
                          staticClass:
                            "uk-flex uk-flex-column uk-padding-xlarge",
                        },
                        [
                          t(
                            "h1",
                            {
                              staticClass: "uk-text-center",
                              staticStyle: { "margin-top": "14px" },
                            },
                            [
                              e._v(
                                "\n        " + e._s(e.eulaTitle) + "\n      ",
                              ),
                            ],
                          ),
                          e._v(" "),
                          t("div", {
                            staticClass:
                              "uk-background-muted uk-height-expand uk-padding-large uk-panel-scrollable",
                            style: !e.isLicenseMode && { minHeight: "340px" },
                            domProps: { innerHTML: e._s(e.licenseContent) },
                          }),
                          e._v(" "),
                          e.isLicenseMode
                            ? e._e()
                            : t("div", { staticClass: "uk-margin-top" }, [
                                t("label", [
                                  t("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: e.newSendUsageData,
                                        expression: "newSendUsageData",
                                      },
                                    ],
                                    staticClass: "uk-checkbox",
                                    attrs: { type: "checkbox" },
                                    domProps: {
                                      checked: Array.isArray(e.newSendUsageData)
                                        ? e._i(e.newSendUsageData, null) > -1
                                        : e.newSendUsageData,
                                    },
                                    on: {
                                      change: function (t) {
                                        var i = e.newSendUsageData,
                                          n = t.target,
                                          a = !!n.checked;
                                        if (Array.isArray(i)) {
                                          var s = e._i(i, null);
                                          n.checked
                                            ? s < 0 &&
                                              (e.newSendUsageData = i.concat([
                                                null,
                                              ]))
                                            : s > -1 &&
                                              (e.newSendUsageData = i
                                                .slice(0, s)
                                                .concat(i.slice(s + 1)));
                                        } else e.newSendUsageData = a;
                                      },
                                    },
                                  }),
                                  e._v(
                                    "\n          " +
                                      e._s(
                                        e.$T(
                                          "Automatically send usage statistics (NO PRIVATE DATA)",
                                        ),
                                      ) +
                                      "\n        ",
                                  ),
                                ]),
                              ]),
                        ],
                      ),
                      e._v(" "),
                      "license" === e.composition
                        ? t(
                            "article",
                            { staticClass: "uk-flex uk-height-1-1" },
                            [
                              t(
                                "div",
                                {
                                  staticClass:
                                    "uk-height-1-1 uk-flex-no-shrink",
                                },
                                [
                                  t("div", {
                                    staticClass:
                                      "uk-preserve uk-height-1-1 uk-text-center",
                                    style: {
                                      "background-color":
                                        "dark" === e.appearance
                                          ? "#27292A"
                                          : "#FAFAFB",
                                    },
                                    attrs: {
                                      "uk-img": "",
                                      "data-src": e.illustrationImageURL,
                                      "data-srcset": e.illustrationHDImageURL,
                                    },
                                  }),
                                ],
                              ),
                              e._v(" "),
                              t(
                                "div",
                                {
                                  staticClass:
                                    "uk-width-expand uk-margin-large-top uk-margin-large-bottom uk-padding-large",
                                },
                                [
                                  t(
                                    "div",
                                    {
                                      staticClass:
                                        "uk-height-1-1 uk-flex uk-flex-column",
                                    },
                                    [
                                      t(
                                        "h1",
                                        { staticClass: "uk-margin-bottom" },
                                        [
                                          e._v(
                                            "\n            " +
                                              e._s(e.$T("Enter License")) +
                                              "\n          ",
                                          ),
                                        ],
                                      ),
                                      e._v(" "),
                                      t("div", [
                                        e._v(
                                          "\n            " +
                                            e._s(
                                              e.$T(
                                                "Enter license to activate your Xmind Pro on this device.",
                                              ),
                                            ) +
                                            "\n          ",
                                        ),
                                      ]),
                                      e._v(" "),
                                      t(
                                        "form",
                                        {
                                          staticClass:
                                            "uk-form-stacked uk-margin-xlarge-top",
                                          staticStyle: { "margin-top": "40px" },
                                          attrs: {
                                            id: "per_machine_license_form",
                                          },
                                          on: {
                                            submit: function (t) {
                                              return (
                                                t.preventDefault(),
                                                e.submitForm.apply(
                                                  null,
                                                  arguments,
                                                )
                                              );
                                            },
                                          },
                                        },
                                        [
                                          t(
                                            "div",
                                            { staticClass: "uk-margin" },
                                            [
                                              t(
                                                "label",
                                                {
                                                  staticClass: "uk-form-label",
                                                },
                                                [
                                                  e._v(
                                                    e._s(
                                                      e.$T("Email") + e.$T(":"),
                                                    ),
                                                  ),
                                                ],
                                              ),
                                              e._v(" "),
                                              t(
                                                "div",
                                                {
                                                  staticClass:
                                                    "uk-form-controls",
                                                },
                                                [
                                                  t("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: e.email,
                                                        expression: "email",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "uk-input uk-form-large",
                                                    attrs: {
                                                      type: "text",
                                                      autofocus: "",
                                                    },
                                                    domProps: {
                                                      value: e.email,
                                                    },
                                                    on: {
                                                      input: function (t) {
                                                        t.target.composing ||
                                                          (e.email =
                                                            t.target.value);
                                                      },
                                                    },
                                                  }),
                                                ],
                                              ),
                                            ],
                                          ),
                                          e._v(" "),
                                          t(
                                            "div",
                                            { staticClass: "uk-margin" },
                                            [
                                              t(
                                                "label",
                                                {
                                                  staticClass: "uk-form-label",
                                                },
                                                [
                                                  e._v(
                                                    e._s(
                                                      e.$T("License Key") +
                                                        e.$T(":"),
                                                    ),
                                                  ),
                                                ],
                                              ),
                                              e._v(" "),
                                              t(
                                                "div",
                                                {
                                                  staticClass:
                                                    "uk-form-controls",
                                                },
                                                [
                                                  t("textarea", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: e.licenseKey,
                                                        expression:
                                                          "licenseKey",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "uk-textarea uk-form-large",
                                                    staticStyle: {
                                                      height: "122px",
                                                    },
                                                    domProps: {
                                                      value: e.licenseKey,
                                                    },
                                                    on: {
                                                      input: function (t) {
                                                        t.target.composing ||
                                                          (e.licenseKey =
                                                            t.target.value);
                                                      },
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
                                        "p",
                                        {
                                          staticClass:
                                            "uk-text-danger uk-margin-remove-top",
                                        },
                                        [
                                          e._v(
                                            "\n            " +
                                              e._s(e.errMsg || " ") +
                                              "\n          ",
                                          ),
                                        ],
                                      ),
                                      e._v(" "),
                                      t(
                                        "button",
                                        {
                                          staticClass:
                                            "uk-button uk-button-primary uk-button-large uk-width",
                                          attrs: {
                                            type: "submit",
                                            form: "per_machine_license_form",
                                            disabled: !e.canActivate,
                                          },
                                        },
                                        [
                                          e.activating
                                            ? t("span", {
                                                staticClass:
                                                  "uk-margin-small-right",
                                                attrs: {
                                                  "uk-spinner": "ratio: 0.6",
                                                },
                                              })
                                            : e._e(),
                                          e._v(
                                            "\n            " +
                                              e._s(e.$T("Activate")) +
                                              "\n          ",
                                          ),
                                        ],
                                      ),
                                      e._v(" "),
                                      t(
                                        "div",
                                        {
                                          staticClass:
                                            "uk-text-center uk-margin-top",
                                        },
                                        [
                                          t(
                                            "button",
                                            {
                                              staticClass:
                                                "uk-button-text uk-button",
                                              on: { click: e.close },
                                            },
                                            [
                                              e._v(
                                                "\n              " +
                                                  e._s(e.$T("Skip")) +
                                                  "\n            ",
                                              ),
                                            ],
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ],
                          )
                        : e._e(),
                    ],
                  ),
                  e._v(" "),
                  t(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "EULA" === e.composition,
                          expression: "composition === 'EULA'",
                        },
                      ],
                      staticClass: "uk-window-button-bar",
                    },
                    [
                      t("div", { staticClass: "uk-button-group" }, [
                        t(
                          "button",
                          {
                            staticClass:
                              "uk-button uk-button-primary uk-button-large",
                            staticStyle: { width: "126px" },
                            attrs: { type: "submit" },
                            on: { click: e.continueNext },
                          },
                          [
                            e._v(
                              "\n        " + e._s(e.$T("Agree")) + "\n      ",
                            ),
                          ],
                        ),
                        e._v(" "),
                        t(
                          "button",
                          {
                            staticClass:
                              "uk-button uk-button-default uk-button-large",
                            staticStyle: { "min-width": "126px" },
                            attrs: { type: "button" },
                            on: { click: e.close },
                          },
                          [
                            e._v(
                              "\n        " +
                                e._s(e.$T("Disagree")) +
                                "\n      ",
                            ),
                          ],
                        ),
                      ]),
                      e._v(" "),
                      t("div", { staticClass: "uk-button-group" }, [
                        t(
                          "button",
                          {
                            staticClass:
                              "uk-button uk-button-default uk-button-large",
                            staticStyle: { "min-width": "126px" },
                            attrs: { type: "button" },
                            on: { click: e.backToFeature },
                          },
                          [
                            e._v(
                              "\n        " + e._s(e.$T("Back")) + "\n      ",
                            ),
                          ],
                        ),
                      ]),
                    ],
                  ),
                ],
              )
            : t("sign-in", { attrs: { "sign-in-referer": e.signInReferer } });
        },
        [],
        !1,
        null,
        "b2adb38c",
        null,
      ).exports;
      (0, n.Z)(h, { name: "welcome" });
    },
    13382: (e, t, i) => {
      "use strict";
      i.d(t, {
        G$: () => _,
        N0: () => g,
        Pg: () => S,
        R2: () => x,
        W5: () => b,
        ZZ: () => k,
        am: () => y,
        eq: () => w,
        yr: () => C,
      });
      var n = i(71017),
        a = i.n(n),
        s = i(67657),
        o = i(7104),
        r = i(86633),
        c = i(33394),
        l = i(94593),
        u = i(90435),
        d = i(54856),
        p = i(5893),
        m = i(50965),
        h = i(92636);
      const v = (0, r.ZP)("dialog");
      async function g(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = a().join((0, o.bY)(), e.icon));
        const t = s.BrowserWindow.fromId(window.id);
        return [s.dialog.showMessageBoxSync(t, e)];
      }
      async function f(e) {
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
      async function k(e) {
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
          : (i && n && (await c.Z.bindBookmark({ fp: i, bookmark: n })),
            i && (0, m.km)().setLastSaveDirectory(a().dirname(i)),
            i);
      }
      async function w({ folderName: e, dialogOptions: t }) {
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
          o.length > 0 && r && (await c.Z.bindBookmark({ fp: i, bookmark: r })),
          "string" == typeof e)
        ) {
          let t = e.replace(/[\\/]/g, "");
          0, (i = a().join(i, t));
        }
        return (
          l.Z.existsSync(i) || l.Z.ensureDir(i),
          i && (0, m.km)().setLastSaveDirectory(i),
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
            (0, m.km)().lastSaveDirectory &&
            (r = (0, m.km)().lastSaveDirectory),
          !r)
        )
          try {
            r = s.app.getPath("documents");
          } catch (e) {
            v.info(e);
          }
        return r && o ? a().join(r, o) : r || o;
      }
      async function b(e) {
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
      async function x(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("OK"),
          i = e("Get Latest Version"),
          n = [t, i],
          [a] = await f({
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
        if (((e = "function" != typeof e ? (e) => e : e), h.zr))
          return await f({
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
          [a] = await f({
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
      async function C(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Save"),
          i = e("Save as"),
          n = e("Cancel"),
          a = [];
        a.push(t, n, i);
        let [s] = await f({
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
      async function S(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Fix ＆ Open"),
          i = e("Cancel"),
          n = [t, i],
          [a] = await f({
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
      i.d(t, { Z: () => h });
      var n = i(57147),
        a = i.n(n),
        s = i(71017),
        o = i.n(s),
        r = i(73837),
        c = i(86633),
        l = i(16704),
        u = i(56222);
      const d = (0, c.ZP)("renderer:fs");
      async function p(e) {
        return (0, u.A)("OBTAIN_READ_WRITE_ACCESS", e);
      }
      async function m(e) {
        return (0, u.A)("RELEASE_READ_WRITE_ACCESS", e);
      }
      const h = {
        read: async function (e) {
          if (!o().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const t = await (async function (e) {
            return (0, u.A)("OBTAIN_READ_LOCK", e);
          })(e);
          try {
            return await (0, r.promisify)(a().readFile)(e);
          } catch (t) {
            d.error(`path(${e}) read error: ${(0, l.SC)(t)}`);
            try {
              if (!(await p(e))) throw new Error(`No access to '${e}'`);
              return await (0, r.promisify)(a().readFile)(e);
            } catch (e) {
              throw e;
            } finally {
              await m(e);
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
            d.error(`path(${e}) write error: ${(0, l.SC)(i)}`);
            try {
              if (!(await p(e))) throw new Error(`No access to '${e}'`);
              return await (0, r.promisify)(a().writeFile)(e, t);
            } catch (e) {
              throw e;
            } finally {
              await m(e);
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
        releaseRWAccessFromOS: m,
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
      i.d(t, { Z: () => x });
      var n = i(2954),
        a = i(57310),
        s = i.n(a),
        o = i(49891),
        r = i(92636),
        c = i(16704),
        l = i(54856),
        u = i(50965),
        d = i(86633),
        p = i(90435),
        m = (i(13382), i(79409)),
        h = i(18621),
        v = i(69931),
        g = i(4075),
        f = i(24034),
        k = i(5893),
        w = i(7104),
        y = function (e, t, i, n) {
          return new (i || (i = Promise))(function (a, s) {
            function o(e) {
              try {
                c(n.next(e));
              } catch (e) {
                s(e);
              }
            }
            function r(e) {
              try {
                c(n.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
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
            c((n = n.apply(e, t || [])).next());
          });
        };
      const b = (0, n.aZ)({
        __name: "sign-in",
        props: { signInReferer: String },
        setup(e) {
          const t = e,
            i = {
              darwin: (0, v.ju)("static/images/signin-dialog-device-mac.svg"),
              win32: (0, v.ju)(
                "static/images/signin-dialog-device-windows.svg",
              ),
              linux: (0, v.ju)("static/images/signin-dialog-device-linux.svg"),
            },
            a = (0, v.ju)("static/assets/images/no-wifi.svg"),
            b = (0, d.ZP)("use-sign-in"),
            x = (0, g.R)(window.location.search),
            { T: _ } = (0, u.JE)(),
            C = (0, n.FN)().proxy,
            S = (0, n.iH)(null),
            T = (0, k.u3)(`${(0, w.bY)()}/static/scripts/sign-in-preload.js`),
            D = (0, n.iH)(!0),
            A = (0, n.iH)(!1),
            L = (0, n.iH)(!1),
            E = (0, n.iH)(""),
            I = (0, n.iH)(null),
            $ = (0, n.iH)([]),
            R = (0, n.iH)(!1),
            U = (0, n.iH)([]),
            O = (0, n.iH)(!1),
            N = (0, n.Fl)(() => {
              let e = `/in-app/signin?app_platform=${r.IQ.linux}&app_version=${(0, m.Z)("version")}`;
              x.targetAccount &&
                (e += `&account=${encodeURIComponent(x.targetAccount)}`),
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
            P = (0, n.Fl)(() => U.value.length > 0 && !R.value);
          (0, n.bv)(() => {
            S.value.addEventListener("ipc-message", (e) => {
              B(e.channel);
            });
          });
          const B = (e) =>
              y(this, void 0, void 0, function* () {
                const i = JSON.parse(e);
                if (
                  ("welcome" === t.signInReferer &&
                    (0, h.L9)({
                      eventCategory: "welcome",
                      eventAction: "welcomeSigninClosedBySignIn",
                    }),
                  "signin_success" === i.event)
                )
                  return (
                    (I.value = {
                      region: E.value || "us",
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
                  (e = yield p.ZP.fetch(l.lf.DEVICE_BIND, {
                    account: I.value,
                  })),
                    b.debug("Bind device result:", e);
                } catch (e) {
                  if (e.code === r.oM) return void (yield Z());
                  if (
                    e.code === r.q4 &&
                    e.data &&
                    e.data.devices &&
                    (($.value = e.data.devices.filter(({ type: e }) => e in i)),
                    $.value.length > 0)
                  )
                    return;
                  return (
                    b.error("Error while binding device:", (0, c.SC)(e)),
                    void (A.value = !0)
                  );
                }
                if (e.license) {
                  const { ss: t } = e.license;
                  t && (O.value = !0);
                }
                yield X(e.rawData);
              }),
            F = (e) => U.value.includes(e),
            M = () =>
              y(this, void 0, void 0, function* () {
                let e;
                try {
                  e = yield p.ZP.fetch(l.lf.DEVICE_BIND, {
                    account: I.value,
                    unbind: U.value,
                  });
                } catch (e) {
                  return (
                    e.code === r.q4 &&
                      (e.data &&
                        e.data.devices &&
                        ($.value = e.data.devices.filter(
                          ({ type: e }) => e in i,
                        )),
                      (U.value = [])),
                    void b.error("Unbind devices: ", (0, c.SC)(e))
                  );
                }
                yield X(e.rawData);
              }),
            X = (e) =>
              y(this, void 0, void 0, function* () {
                let t;
                try {
                  t = yield p.ZP.fetch(l.lf.SUBSCRIPTION_DETAILS, {
                    account: I.value,
                  });
                } catch (e) {
                  b.warn(
                    "Failed to retrieve subscription details:",
                    (0, c.SC)(e),
                  );
                }
                const i = Object.assign(Object.assign({}, I.value), {
                  rawSubscriptionData: e,
                  subscriptionDetails: t,
                });
                if (
                  (yield Promise.all([
                    p.ZP.fetch(l.Pp, {
                      mutations: [
                        { id: "account", type: "updateAccount", payload: [i] },
                      ],
                    }),
                    p.ZP.fetch((0, l.iM)(window.id), { success: !0 }),
                  ]),
                  setTimeout(
                    () =>
                      null === window || void 0 === window
                        ? void 0
                        : window.close(),
                    0,
                  ),
                  x.ignoreOpenDialog)
                )
                  return;
                if (x.openBy)
                  return void (yield p.ZP.fetch(l.Fx, { name: x.openBy }));
                if (r.X_) return;
                const n = (0, u.Yh)().subscriptionStatus;
                n === r.rJ.VALID || "valid" === n
                  ? yield p.ZP.fetch(l.Fx, {
                      name: "dialog-congratulate",
                      query: { isOldUser: O.value },
                    })
                  : n === r.rJ.TRIAL &&
                    p.ZP.fetch(l.lf.TRIAL_COUPON, { immediately: !0 }).catch(
                      (e) => {
                        b.warn("Failed to load trial coupon:", e);
                      },
                    );
              }),
            V = (0, n.iH)([
              { type: "space", size: "flexible" },
              { type: "button", label: _("Cancel"), click: "close" },
              { type: "space", size: "flexible" },
            ]);
          return (
            (0, f.q)(V, { close }),
            {
              __sfc: !0,
              deviceImages: i,
              customNetworkFailLoadIcon: a,
              logger: b,
              query: x,
              $T: _,
              props: t,
              vm: C,
              webviewRef: S,
              preloadScriptURL: T,
              isMac: !1,
              goBackBtnText: "其他登录方式",
              isShowSpinner: D,
              isShowFailLoad: A,
              showGoBackBtn: L,
              region: E,
              account: I,
              devices: $,
              isUnbindingDevices: R,
              devicesToUnbind: U,
              isOldUser: O,
              signinURL: N,
              canUnbindDevices: P,
              handleDidNavigate: (e) => {
                const t = e.target.getURL(),
                  i = s().parse(t);
                i.hostname.includes("xmind") && i.pathname.includes("/in-app")
                  ? (i.hostname.includes(".cn")
                      ? (E.value = "cn")
                      : i.hostname.includes(".app") && (E.value = "us"),
                    (L.value = !1))
                  : (L.value = !0);
              },
              handleDomReady: () => {
                (D.value = !1), S.value.focus();
              },
              handleWebViewMessageResult: B,
              doWebViewSignin: Z,
              reload: () => {
                (D.value = !0), (A.value = !1), S.value.reload();
              },
              goBack: () => {
                S.value.goBack();
              },
              toggleDeviceToUnbind: (e) => {
                F(e)
                  ? (U.value = U.value.filter((t) => t !== e))
                  : (U.value = U.value.concat([e]));
              },
              isDeviceToUnbind: F,
              getStylesForDeviceDescription: (e) =>
                F(e) ? { opacity: "0.5" } : "",
              unbindDevices: (e) => {
                if (
                  (e &&
                    e.preventDefault &&
                    (e.preventDefault(), (e.returnValue = !1)),
                  P.value)
                )
                  return C.$safeRun(() => M()), !1;
              },
              doUnbindDevices: M,
              saveAndClose: X,
              touchBarItems: V,
              Spinner: o.default,
            }
          );
        },
      });
      const x = (0, i(51900).Z)(
        b,
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
    37474: (e, t, i) => {
      var n = i(65157);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, i(45346).Z)("4dba81c5", n, !0, {});
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
      return (t = 44367), e((e.s = t));
      var t;
    });
    var t = e.O();
    module.exports = t;
  },
]);
