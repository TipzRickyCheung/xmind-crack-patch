(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [3940],
  {
    74551: (e, i, t) => {
      "use strict";
      t.r(i), t.d(i, { default: () => l });
      var n = t(23645),
        o = t.n(n)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".theme-option[data-v-592e5523] {\n  border-radius: 4px;\n  overflow: hidden;\n}\n.theme-option-title[data-v-592e5523] {\n  width: 100%;\n  white-space: normal;\n  text-align: center;\n  font-size: 11px;\n  line-height: 13px;\n  padding: 8px 0 12px 0;\n}\n",
        "",
      ]);
      const l = o;
    },
    52172: (e, i, t) => {
      "use strict";
      t.r(i), t.d(i, { default: () => l });
      var n = t(23645),
        o = t.n(n)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".uk-lang-pt-PT .preview-title[data-v-00202376] {\n  font-size: 12px;\n}\n.uk-lang-pt-PT .slide-panel-selection-title[data-v-00202376] {\n  font-size: 10px;\n}\n.uk-lang-de-DE .slide-panel-selection-title[data-v-00202376] {\n  font-size: 10px;\n}\n.uk-lang-es .slide-panel-selection-title[data-v-00202376] {\n  font-size: 10px;\n}\n.uk-lang-fr-FR .slide-panel-selection-title[data-v-00202376] {\n  font-size: 10px;\n}\n.uk-lang-ru-RU .preview-title[data-v-00202376] {\n  font-size: 12px;\n}\n",
        "",
      ]);
      const l = o;
    },
    36349: (e, i, t) => {
      "use strict";
      t.r(i), t.d(i, { default: () => l });
      var n = t(23645),
        o = t.n(n)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".uk-lang-pt-PT .preview-title[data-v-0d49d937] {\n  font-size: 12px;\n}\n.uk-lang-pt-PT .slide-panel-selection-title[data-v-0d49d937] {\n  font-size: 10px;\n}\n.uk-lang-de-DE .slide-panel-selection-title[data-v-0d49d937] {\n  font-size: 10px;\n}\n.uk-lang-es .slide-panel-selection-title[data-v-0d49d937] {\n  font-size: 10px;\n}\n.uk-lang-fr-FR .slide-panel-selection-title[data-v-0d49d937] {\n  font-size: 10px;\n}\n.uk-lang-ru-RU .preview-title[data-v-0d49d937] {\n  font-size: 12px;\n}\n",
        "",
      ]);
      const l = o;
    },
    7230: (e, i, t) => {
      "use strict";
      t.r(i), t.d(i, { default: () => l });
      var n = t(23645),
        o = t.n(n)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".pitch-mode-preview-slide[data-v-36870632] {\n  position: relative;\n}\n.preview-container[data-v-36870632] {\n  position: relative;\n  width: 227px;\n  height: 128px;\n}\n.fade-enter-active[data-v-36870632],\n.fade-leave-active[data-v-36870632] {\n  transition: opacity 0.2s;\n}\n.fade-enter[data-v-36870632],\n.fade-leave-to[data-v-36870632] {\n  opacity: 0;\n}\n.uk-border-rounded[data-v-36870632] {\n  border-radius: 10px;\n}\n.mask[data-v-36870632] {\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n",
        "",
      ]);
      const l = o;
    },
    14484: (e, i, t) => {
      "use strict";
      t.r(i), t.d(i, { default: () => l });
      var n = t(23645),
        o = t.n(n)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".uk-lang-pt-PT .preview-title[data-v-fc932c80] {\n  font-size: 12px;\n}\n.uk-lang-pt-PT .slide-panel-selection-title[data-v-fc932c80] {\n  font-size: 10px;\n}\n.uk-lang-de-DE .slide-panel-selection-title[data-v-fc932c80] {\n  font-size: 10px;\n}\n.uk-lang-es .slide-panel-selection-title[data-v-fc932c80] {\n  font-size: 10px;\n}\n.uk-lang-fr-FR .slide-panel-selection-title[data-v-fc932c80] {\n  font-size: 10px;\n}\n.uk-lang-ru-RU .preview-title[data-v-fc932c80] {\n  font-size: 12px;\n}\n",
        "",
      ]);
      const l = o;
    },
    74188: (e, i, t) => {
      "use strict";
      t.r(i), t.d(i, { default: () => l });
      var n = t(23645),
        o = t.n(n)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        "@keyframes fadein-74f67b6e {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n.animate[data-v-74f67b6e] {\n  animation: fadein-74f67b6e 0.3s ease-out;\n}\n",
        "",
      ]);
      const l = o;
    },
    92344: (e, i, t) => {
      "use strict";
      t.d(i, {
        yh: () => r,
        dM: () => m,
        I6: () => h,
        zF: () => v,
        Y$: () => l.Y,
      });
      var n = t(94025),
        o = t(24813),
        l = t(38853);
      class s {
        constructor() {
          this.eventCallbacks = new Map();
        }
        on(e, i) {
          var t;
          const n =
            null !== (t = this.eventCallbacks.get(e)) && void 0 !== t ? t : [];
          this.eventCallbacks.set(e, [...n, i]);
        }
        off(e, i) {
          var t;
          let n =
            null !== (t = this.eventCallbacks.get(e)) && void 0 !== t ? t : [];
          (n = n.filter((e) => e !== i)), this.eventCallbacks.set(e, n);
        }
        emit(e) {
          const i = this.eventCallbacks.get(e.eventName);
          if (i) for (const t of i) t(e);
        }
        unload() {
          this.eventCallbacks = new Map();
        }
      }
      var a = function (e, i, t, n) {
        return new (t || (t = Promise))(function (o, l) {
          function s(e) {
            try {
              r(n.next(e));
            } catch (e) {
              l(e);
            }
          }
          function a(e) {
            try {
              r(n.throw(e));
            } catch (e) {
              l(e);
            }
          }
          function r(e) {
            var i;
            e.done
              ? o(e.value)
              : ((i = e.value),
                i instanceof t
                  ? i
                  : new t(function (e) {
                      e(i);
                    })).then(s, a);
          }
          r((n = n.apply(e, i || [])).next());
        });
      };
      class r extends s {
        constructor(e) {
          var i;
          super(),
            (this._presenters = []),
            (this._isStarted = !1),
            (this._disableSettingsUpdate = !1),
            (this._traveledTopicSet = new Set()),
            (this._needSubscriptionHint = !1),
            (this.slideControl = (e) =>
              a(this, void 0, void 0, function* () {
                const { action: i, value: t } = e;
                switch (i) {
                  case "goto":
                    return yield this.slideshow.present(t);
                  case "next":
                    return yield this.slideshow.forward();
                  case "prev":
                    return yield this.slideshow.backward();
                  case "fastBackward":
                    return yield this.slideshow.fastBackward();
                  case "fastForward":
                    return yield this.slideshow.fastForward();
                  case "updateSlide":
                    return yield this.slideshow.forceUpdateSlideContent();
                }
              })),
            (this.changeSlideSetting = (e) => {
              const { action: i, option: t } = e;
              switch (i) {
                case "theme":
                  return this.changeTheme(t);
                case "aspect":
                  return this.changeSlideAspect(t);
                case "animation":
                  return this.switchAnimationOption(t);
                case "watermark":
                  return this.switchWatermarkOption(t);
              }
            }),
            (this.unloaded = !1),
            (this.settings = (0, l.Y)()),
            (this._startTopicId =
              null !== (i = e.startTopicId) && void 0 !== i ? i : null),
            (this._suggestedSlideSize = e.suggestedSlideSize),
            (this._disableSettingsUpdate = e.disableSettingsUpdate),
            (this._needSubscriptionHint = !!e.needSubscriptionHint),
            this.initSlideshow(e);
        }
        get presenters() {
          return this._presenters;
        }
        get slideshow() {
          return this._slideshow;
        }
        get isShowingEnding() {
          return this._slideshow.isShowingEndingScreen;
        }
        get currentSlide() {
          return this.slideshow.currentSlide;
        }
        initSlideshow(e) {
          var i, t, l, s;
          const a = e.contentProviderData
              ? (0, o.xm)(e.contentProviderData)
              : (0, o.n2)(),
            r =
              null !== (i = e.defaultAspect) && void 0 !== i
                ? i
                : this.settings.slideAspect.value,
            d =
              "Auto" === r
                ? null !==
                    (l =
                      null === (t = e.suggestedSlideSize) || void 0 === t
                        ? void 0
                        : t.value) && void 0 !== l
                  ? l
                  : "16:9"
                : r;
          (this._slideshow = new n.ur({
            contentProvider: a,
            slideTheme:
              null !== (s = e.defaultSlideTheme) && void 0 !== s
                ? s
                : this.settings.slideTheme.value,
            slideSize: d,
            disablesWatermark: !this.settings.watermarkEnabled.value,
            preferredLanguage: this.settings.preferredLanguage.value,
          })),
            (this._slideshow.disablesAnimations =
              !this.settings.animationEnabled.value),
            this._slideshow.on("finish", () => this.finish()),
            this._slideshow.on("stateDidChange", () => {
              this.presenters.forEach((e) => e.stateChangedHandler());
            }),
            this._slideshow.on("transitionStart", ({ request: e }) => {
              const i = this._slideshow.computeNextStoppedSlide(e);
              i &&
                (this._traveledTopicSet.add(i),
                this._needSubscriptionHint &&
                  this._traveledTopicSet.size > 5 &&
                  this.emit({ eventName: "needSubscription" })),
                this.emit({
                  eventName: "slideChangeStart",
                  payload: { request: e, targetSlide: i },
                });
            }),
            this._slideshow.on("transitionEnd", () =>
              this.emit({ eventName: "slideChangeEnd" }),
            ),
            this._slideshow.on("modalOpened", () =>
              this.emit({ eventName: "presenterModal", payload: { show: !0 } }),
            ),
            this._slideshow.on("modalClosed", () =>
              this.emit({ eventName: "presenterModal", payload: { show: !1 } }),
            ),
            this._slideshow.on("reveal", ({ request: e }) =>
              this.emit({
                eventName: "presenterLinkClick",
                payload: { title: e.title, href: e.href, topicId: e.topicId },
              }),
            ),
            this._slideshow.on("playWebVideo", ({ request: e }) => {
              this.emit({
                eventName: "playWebVideo",
                payload: { videoSource: e.videoSource },
              });
            });
        }
        addPresenter(e) {
          this._presenters.includes(e) ||
            (this._presenters.push(e), this.slideshow.addPresenter(e.view));
        }
        removePresenter(e) {
          (this._presenters = this._presenters.filter((i) => i !== e)),
            this.slideshow.removePresenter(e.view);
        }
        switchAnimationOption(e) {
          var i;
          (this.slideshow.disablesAnimations = !e),
            !this._disableSettingsUpdate &&
              (null === (i = this.settings) ||
                void 0 === i ||
                i.updateAnimationSetting(e));
        }
        switchWatermarkOption(e) {
          var i;
          this.slideshow.disablesWatermark !== !e &&
            (this.slideshow.changeWatermarkDisabled(!e),
            !this._disableSettingsUpdate &&
              (null === (i = this.settings) ||
                void 0 === i ||
                i.updateWatermarkSetting(e)));
        }
        changeTheme(e) {
          var i;
          this.slideshow.slideAppearanceId !== e &&
            (this.slideshow.changeSlideTheme(e),
            !this._disableSettingsUpdate &&
              (null === (i = this.settings) ||
                void 0 === i ||
                i.updateSlideThemeSetting(e)));
        }
        changeSlideAspect(e) {
          var i, t, o;
          const l =
            "Auto" === e
              ? null !==
                  (t =
                    null === (i = this._suggestedSlideSize) || void 0 === i
                      ? void 0
                      : i.value) && void 0 !== t
                ? t
                : "16:9"
              : e;
          this.slideshow.changeSlideSize(n.IE[l]),
            !this._disableSettingsUpdate &&
              (null === (o = this.settings) ||
                void 0 === o ||
                o.updateSlideAspectSetting(e));
        }
        start(e) {
          return a(this, void 0, void 0, function* () {
            this._isStarted ||
              (e.forEach((e) => this.addPresenter(e)),
              this.slideshow.present(this._startTopicId),
              (this._isStarted = !0));
          });
        }
        finish() {
          this.emit({ eventName: "slidePlayFinished" });
        }
        unload() {
          this.emit({ eventName: "beforeUnload" }),
            super.unload(),
            (this.unloaded = !0);
        }
      }
      var d = t(90435),
        u = t(16704),
        c = t(54856),
        p = function (e, i, t, n) {
          return new (t || (t = Promise))(function (o, l) {
            function s(e) {
              try {
                r(n.next(e));
              } catch (e) {
                l(e);
              }
            }
            function a(e) {
              try {
                r(n.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function r(e) {
              var i;
              e.done
                ? o(e.value)
                : ((i = e.value),
                  i instanceof t
                    ? i
                    : new t(function (e) {
                        e(i);
                      })).then(s, a);
            }
            r((n = n.apply(e, i || [])).next());
          });
        };
      function v() {
        const e = (0, u.hb)(),
          i = d.ZP.route(c.OV.CONNECT_MAIN(e), (e) =>
            p(this, void 0, void 0, function* () {
              switch (e.type) {
                case "retrieveContent":
                  return JSON.stringify(yield (0, o.d4)());
                case "dismiss":
                  return i();
                case "openHyperlink":
                  return null;
              }
            }),
          );
        return e;
      }
      function h(e) {
        return p(this, void 0, void 0, function* () {
          const i = yield d.ZP.fetch(c.OV.CONNECT_MAIN(e), {
            type: "retrieveContent",
          });
          return JSON.parse(i);
        });
      }
      function m(e) {
        d.ZP.fetch(c.OV.CONNECT_MAIN(e), { type: "dismiss" });
      }
    },
    38853: (e, i, t) => {
      "use strict";
      t.d(i, { Y: () => d });
      var n = t(2954),
        o = t(50965),
        l = t(96160),
        s = t(24813);
      function a(e) {
        var i, t;
        return null !==
          (t =
            null === (i = (0, s.pP)(e)) || void 0 === i
              ? void 0
              : i["slide-appearance"]) && void 0 !== t
          ? t
          : "default";
      }
      function r(e) {
        var i, t;
        return null !==
          (t =
            null === (i = (0, s.pP)(e)) || void 0 === i
              ? void 0
              : i["slide-aspect-ratio"]) && void 0 !== t
          ? t
          : "Auto";
      }
      const d = (function () {
        const { activeSheet: e } = (0, l.nZ)(),
          i = (0, n.Fl)(() => {
            var i;
            return null === (i = e.value) || void 0 === i
              ? void 0
              : i.rootTopic.id;
          }),
          t = (0, n.Fl)(() => !(0, o.rs)().disableAnimation),
          d = (0, n.Fl)(
            () => !true || (0, o.rs)().watermarkEnabled,
          ),
          u = (0, n.iH)(r(i.value)),
          c = (0, n.iH)(a(i.value)),
          p = (0, n.Fl)(() =>
            "zh-CN" === (0, o.S)().language ||
            "zh-CN" === (0, o.S)().defaultLanguage
              ? "zh"
              : "en",
          ),
          v = (e) => {
            (0, o.rs)().updateSettings({ disableAnimation: !e });
          },
          h = (e) => {
            (0, o.rs)().updateSettings({ watermarkEnabled: e });
          },
          m = (e) => {
            e !== a(i.value) &&
              ((0, s.nh)(i.value, { "slide-appearance": e }), (c.value = e));
          },
          f = (e) => {
            e !== r(i.value) &&
              ((0, s.nh)(i.value, { "slide-aspect-ratio": e }), (u.value = e));
          };
        return (
          (0, n.YP)(
            () => i.value,
            (e) => {
              (u.value = r(e)), (c.value = a(e));
            },
          ),
          () => ({
            animationEnabled: t,
            watermarkEnabled: d,
            slideTheme: (0, n.Fl)(() => c.value),
            slideAspect: (0, n.Fl)(() => u.value),
            preferredLanguage: p,
            updateAnimationSetting: v,
            updateWatermarkSetting: h,
            updateSlideThemeSetting: m,
            updateSlideAspectSetting: f,
          })
        );
      })();
    },
    94025: (e, i, t) => {
      "use strict";
      t.d(i, {
        CU: () => a,
        YN: () => r,
        ur: () => n.Slideshow,
        I2: () => n.SlideshowExporter,
        rc: () => h,
        qV: () => v,
        WS: () => p,
        bh: () => u,
        sz: () => d,
        _y: () => c,
        _p: () => n.previewSlidesScopedBy,
        IE: () => n.slideSizes,
        hf: () => m,
        tT: () => s,
      });
      var n = t(32118),
        o = t(24813);
      const l = {
        summarySlideVisibility: "summary-slide-visibility",
        topicSlideVisibility: "topic-slide-visibility",
        topicImagePlacement: "topic-slide-image-placement",
        listSlideVisibility: "list-slide-visibility",
        listSlideDelivery: "list-slide-delivery",
        listSlideLayout: "list-slide-layout",
      };
      function s() {
        const e = (e, i, t) => (0, o.nh)(e, { [l[i]]: t });
        return {
          getSlideOption: (e, i) => {
            var t;
            return null === (t = (0, o.pP)(e)) || void 0 === t
              ? void 0
              : t[l[i]];
          },
          setSlideOption: e,
          deleteSlideOption: (i, t) => e(i, t),
        };
      }
      const a = "org.xmind.ui.ice-cream-pancake",
        r = ["Auto", "16:9", "4:3", "9:16", "3:4"];
      function d(e) {
        return new n.Slideshow(e);
      }
      function u(e = {}) {
        const {
            initialSlide: i,
            perspectiveMode: t,
            viewStyle: o,
            contentStyle: l,
          } = e,
          s = new n.PresentationView({ initialSlide: i });
        return (
          t
            ? ((s.allowsActivatingPresenterPerspectiveMode = !0),
              (s.mode = "presenterPerspective"))
            : ((s.allowsActivatingPresenterPerspectiveMode = !1),
              (s.mode = "presentation")),
          o && Object.keys(o).forEach((e) => (s.el.style[e] = o[e])),
          l && Object.keys(l).forEach((e) => (s.contentEl.style[e] = l[e])),
          s
        );
      }
      function c(e, i, t) {
        return {
          topicSkipped: (0, n.isSlideSkippedScopedBy)(e, i, "topic", {
            ignoresUserValue: t,
          }),
          listSkipped: (0, n.isSlideSkippedScopedBy)(e, i, "list", {
            ignoresUserValue: t,
          }),
          summarySkipped: (0, n.isSlideSkippedScopedBy)(e, i, "summary", {
            ignoresUserValue: t,
          }),
        };
      }
      function p(e, i) {
        const t = (0, n.computeSlideContent)(
          i,
          e.contentProvider,
          e.defaultListSlideDelivery,
        );
        return t && t.topic.image
          ? (0, n.computeTopicSlideImagePlacement)(
              e.slideSize,
              t,
              t.topic.image,
              { ignoresUserValue: !0 },
            )
          : null;
      }
      function v(e, i) {
        return (0, n.computeSlideLayout)(
          "list",
          e.slideSize,
          e.getSlideContent(i),
        );
      }
      function h(e, i) {
        return (0, n.getEligibleSlideLayouts)("list", e.getSlideContent(i));
      }
      function m(e, i) {
        const t = e.getSlideContent(i.topicId).computedListSlideDelivery;
        let n = [];
        if (
          ("list" === i.type &&
            "all-at-once" === t &&
            (n = [...n, ...(i.subtopics || [])]),
          i.boxes)
        ) {
          const e = (t) => {
            for (const o of t) {
              if (
                (o.id.startsWith("topic:title:") ||
                  o.id.startsWith("topic:image:")) &&
                o.opacity
              ) {
                const e = o.id.split(":")[2];
                i.subtopics.includes(e) && n.push(o.id.split(":")[2]);
              }
              "children" in o && e(o.children);
            }
          };
          e(i.boxes);
        }
        const o = i.topicId,
          l = [...new Set(n)].filter((e) => e !== o);
        return { topicId: o, subTopicIds: l };
      }
    },
    7703: (e, i, t) => {
      "use strict";
      t.d(i, {
        yh: () => n.yh,
        Nn: () => f,
        c4: () => g,
        XT: () => S.XT,
        iA: () => S.iA,
        vN: () => y,
        dM: () => n.dM,
        HZ: () => C,
        Su: () => x,
        I6: () => n.I6,
        zF: () => n.zF,
        Y$: () => n.Y$,
        _x: () => S._x,
      });
      var n = t(92344),
        o = t(90435),
        l = t(2954),
        s = t(94025),
        a = t(54856),
        r = t(86633),
        d = function (e, i, t, n) {
          return new (t || (t = Promise))(function (o, l) {
            function s(e) {
              try {
                r(n.next(e));
              } catch (e) {
                l(e);
              }
            }
            function a(e) {
              try {
                r(n.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function r(e) {
              var i;
              e.done
                ? o(e.value)
                : ((i = e.value),
                  i instanceof t
                    ? i
                    : new t(function (e) {
                        e(i);
                      })).then(s, a);
            }
            r((n = n.apply(e, i || [])).next());
          });
        };
      const u = (0, r.ZP)("pitchmode");
      class c {
        sendMessage(e, i) {
          return d(this, void 0, void 0, function* () {
            try {
              return yield o.ZP.fetch(a.OV.SUB_COMMAND(this.proxyId), {
                command: e,
                payload: i,
              });
            } catch (e) {
              return u.warn("SendMessage: ", e), e;
            }
          });
        }
        performTransition(e) {
          return d(this, void 0, void 0, function* () {
            yield this.sendMessage("performTransition", e);
          });
        }
        performStateChange(e, i) {
          return d(this, void 0, void 0, function* () {
            yield this.sendMessage("performStateChange", {
              state: e,
              animationOptions: i,
            });
          });
        }
        preloadTransition(e) {
          this.sendMessage("preloadTransition", e);
        }
        presentEndingScreen(e, i, t, n, o) {
          return d(this, void 0, void 0, function* () {
            this.sendMessage("presentEndingscreen", {
              content: e,
              slideSize: i,
              epilogueSlide: t,
              backgroundColor: n,
              options: o,
            });
          });
        }
        dismissEndingScreen(e) {
          return d(this, void 0, void 0, function* () {
            this.sendMessage("dismissEndingscreen", e);
          });
        }
        presentModalDisplay(e, i) {
          return d(this, void 0, void 0, function* () {
            this.sendMessage("presentModalDisplay", { options: e, boxId: i });
          });
        }
        dismissModalDisplay(e) {
          return d(this, void 0, void 0, function* () {
            this.sendMessage("dismissModalDisplay", { contentType: e });
          });
        }
        constructor(e) {
          this.proxyId = e;
        }
        unload() {}
      }
      var p = t(16704),
        v = function (e, i, t, n) {
          return new (t || (t = Promise))(function (o, l) {
            function s(e) {
              try {
                r(n.next(e));
              } catch (e) {
                l(e);
              }
            }
            function a(e) {
              try {
                r(n.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function r(e) {
              var i;
              e.done
                ? o(e.value)
                : ((i = e.value),
                  i instanceof t
                    ? i
                    : new t(function (e) {
                        e(i);
                      })).then(s, a);
            }
            r((n = n.apply(e, i || [])).next());
          });
        };
      class h {
        constructor() {
          (this.ready = (0, l.iH)(!1)),
            (this.isProxiedPresenter = !1),
            (this._id = (0, p.hb)());
        }
        get id() {
          return this._id;
        }
        get isReady() {
          return this.ready.value;
        }
        setReady() {
          this.ready.value = !0;
        }
        init() {
          return v(this, void 0, void 0, function* () {});
        }
        stateChangedHandler() {}
        unload() {}
      }
      var m = function (e, i, t, n) {
        return new (t || (t = Promise))(function (o, l) {
          function s(e) {
            try {
              r(n.next(e));
            } catch (e) {
              l(e);
            }
          }
          function a(e) {
            try {
              r(n.throw(e));
            } catch (e) {
              l(e);
            }
          }
          function r(e) {
            var i;
            e.done
              ? o(e.value)
              : ((i = e.value),
                i instanceof t
                  ? i
                  : new t(function (e) {
                      e(i);
                    })).then(s, a);
          }
          r((n = n.apply(e, i || [])).next());
        });
      };
      class f extends h {
        constructor(e) {
          var i;
          super(),
            (this._containerEle = null),
            (this.presentationViewOptions = e.presentationViewOptions),
            (this.isShowingPerspective = (0, l.iH)(!1)),
            (this.isEnablePerspective = !!(null ===
              (i = e.presentationViewOptions) || void 0 === i
              ? void 0
              : i.perspectiveMode));
        }
        get view() {
          return this._presentationView;
        }
        get container() {
          return this._containerEle;
        }
        get viewEle() {
          return this._presentationView.el;
        }
        init() {
          return m(this, void 0, void 0, function* () {
            this.createPresentationView(this.presentationViewOptions),
              this.setReady();
          });
        }
        createPresentationView(e) {
          this._presentationView = (0, s.bh)({
            initialSlide: e.initialSlide,
            perspectiveMode: e.perspectiveMode,
            viewStyle: {
              left: "0",
              right: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "#000000",
            },
            contentStyle: { backgroundColor: "#000000" },
          });
        }
        update() {
          this._presentationView.update();
        }
        connect() {
          this._presentationView.connect();
        }
        stateChangedHandler() {
          this.isEnablePerspective &&
            (this.isShowingPerspective.value =
              "presenterPerspective" === this.view.mode);
        }
        setContainer(e) {
          this._containerEle ||
            ((this._containerEle = e),
            this._containerEle.appendChild(this.viewEle),
            this.update(),
            this.connect());
        }
        unload() {
          var e;
          null === (e = this._containerEle) ||
            void 0 === e ||
            e.removeChild(this.viewEle),
            (this._containerEle = null);
        }
      }
      class g extends h {
        constructor(e) {
          super(),
            (this.isProxy = !0),
            (this._unRoute = []),
            (this.presentationViewOptions = e.presentationViewOptions);
        }
        get view() {
          return this._proxyView;
        }
        init() {
          return m(this, void 0, void 0, function* () {
            return (
              this.createPresentationProxyView(this.id),
              yield this.connectProxiedPresenter()
            );
          });
        }
        createPresentationProxyView(e) {
          this._proxyView = new c(e);
        }
        connectProxiedPresenter() {
          const e = window.id;
          return (
            this._unRoute.push(
              o.ZP.route(
                a.OV.CONNECT_MAIN(e),
                () => (
                  setTimeout(() => {
                    this.setReady();
                  }, 50),
                  {
                    presentationViewOptions: this.presentationViewOptions,
                    proxyId: this.id,
                  }
                ),
              ),
            ),
            new Promise((e) => {
              const i = (0, l.YP)(
                () => this.ready.value,
                (t) => {
                  t && (e(), i());
                },
              );
            })
          );
        }
        unload() {
          this._unRoute.forEach((e) => e());
        }
      }
      class y extends f {
        constructor(e) {
          super({}), (this.isProxiedPresenter = !0), (this.remoteWindowId = e);
        }
        init() {
          return m(this, void 0, void 0, function* () {
            yield this.connectProxy(), this.setReady();
          });
        }
        connectProxy() {
          return m(this, void 0, void 0, function* () {
            const e = () =>
                m(this, void 0, void 0, function* () {
                  return (
                    (yield Promise.race([
                      o.ZP.fetch(a.OV.CONNECT_MAIN(this.remoteWindowId)),
                      new Promise((e) => setTimeout(e, 1e3)),
                    ])) || (yield e())
                  );
                }),
              i = yield e();
            var t, n;
            this.createPresentationView(i.presentationViewOptions),
              (t = this._presentationView),
              (n = i.proxyId),
              o.ZP.route(a.OV.SUB_COMMAND(n), (e) => {
                switch (e.command) {
                  case "performTransition":
                    return t.performTransition(e.payload);
                  case "performStateChange":
                    return t.performStateChange(
                      e.payload.state,
                      e.payload.animationOptions,
                    );
                  case "preloadTransition":
                    return t.preloadTransition(e.payload);
                  case "presentEndingscreen":
                    return t.presentEndingScreen(
                      e.payload.content,
                      e.payload.slideSize,
                      e.payload.epilogueSlide,
                      e.payload.backgroundColor,
                      e.payload.options,
                    );
                  case "dismissEndingscreen":
                    return t.dismissEndingScreen(e.payload);
                  case "presentModalDisplay":
                    return t.presentModalDisplay(
                      e.payload.options,
                      e.payload.boxId,
                    );
                  case "dismissModalDisplay":
                    return t.dismissModalDisplay(e.payload.contentType);
                }
              });
          });
        }
      }
      var S = t(28086),
        w = t(91324),
        b = t(38853);
      function C(e, i) {
        const t = (i) => {
          (function (e, i) {
            const t = (0, w.Ds)(e.slideControl, 100),
              { animationEnabled: n } = (0, b.Y)();
            switch (i.key) {
              case "PageDown":
              case "ArrowDown":
              case "Enter":
              case " ":
                return t({ action: "next" }), !0;
              case "ArrowRight":
                return (
                  i.shiftKey
                    ? t({ action: "fastForward" })
                    : t({ action: "next" }),
                  !0
                );
              case "PageUp":
              case "ArrowUp":
                return t({ action: "prev" }), !0;
              case "ArrowLeft":
                return (
                  i.shiftKey
                    ? t({ action: "fastBackward" })
                    : t({ action: "prev" }),
                  !0
                );
              case "Escape":
              case "q":
              case "Q":
                return e.finish(), !0;
              case "a":
              case "A":
                return e.switchAnimationOption(!n.value), !0;
            }
            return !1;
          })(e, i) && (i.preventDefault(), i.stopPropagation());
        };
        return (
          i.addEventListener("keydown", t),
          e.on("beforeUnload", () => {
            i.removeEventListener("keydown", t);
          }),
          e
        );
      }
      var F = t(50965);
      function x(e, i) {
        return (
          e.on("playWebVideo", ({ payload: e }) => {
            var t, n, o;
            const l =
                null !==
                  (n =
                    null === (t = null == i ? void 0 : i.subWindow) ||
                    void 0 === t
                      ? void 0
                      : t.getBounds()) && void 0 !== n
                  ? n
                  : null === (o = null == i ? void 0 : i.mainWindow) ||
                      void 0 === o
                    ? void 0
                    : o.getBounds(),
              s = l
                ? Object.assign(Object.assign({}, l), { fullscreen: !0 })
                : null;
            !(function (e) {
              const { handleCommand: i } = (0, F.JX)(),
                { videoSource: t, overrideSetting: n } = e;
              t && i("videoViewer", { url: t, overrideSetting: n });
            })({ videoSource: e.videoSource, overrideSetting: s });
          }),
          e
        );
      }
    },
    24813: (e, i, t) => {
      "use strict";
      t.d(i, {
        xm: () => h,
        pP: () => m,
        n2: () => p,
        d4: () => v,
        nh: () => f,
      });
      var n = t(2954),
        o = t(94025),
        l = t(70716),
        s = t(96160);
      const {
          TopicQuickStyleClassName: a,
          PrimaryClassName: r,
          TopicPrimaryClassName: d,
        } = s.viewerKit,
        u = Object.freeze({
          default: {
            [r.Map]: {
              fillColor: "#101010",
              multiLineColors: ["#F6F6F6"].join(" "),
            },
            [r.Relationship]: { lineColor: "#F6F6F6", textColor: "#FFFFFF" },
            [r.Boundary]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [r.Summary]: {},
            [d.CentralTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [d.MainTopic]: { fillColor: "#E3E3E3", textColor: "#000000" },
            [d.Subtopic]: { fillColor: "#B9B9B9", textColor: "#000000" },
            [d.FloatingTopic]: { fillColor: "#BABABA", textColor: "#000000" },
            [d.CalloutTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [d.SummaryTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [a.VeryImportant]: { fillColor: "#A43838" },
            [a.Important]: { fillColor: "#CFA362", textColor: "#000000" },
            [a.CrossOut]: {},
          },
          light: {
            [r.Map]: {
              fillColor: "#F4F4F4",
              multiLineColors: ["#282828"].join(" "),
            },
            [r.Relationship]: { lineColor: "#282828", textColor: "#000000" },
            [r.Boundary]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [r.Summary]: {},
            [d.CentralTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [d.MainTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [d.Subtopic]: { fillColor: "#4F4F4F", textColor: "#FFFFFF" },
            [d.FloatingTopic]: { fillColor: "#4F4F4F", textColor: "#FFFFFF" },
            [d.CalloutTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [d.SummaryTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [a.VeryImportant]: { fillColor: "#A43838" },
            [a.Important]: { fillColor: "#CFA362", textColor: "#000000" },
            [a.CrossOut]: {},
          },
          Innocence: {
            [r.Map]: {
              fillColor: "#ECF4E9",
              multiLineColors: [
                "#FF9A9A",
                "#F9E168",
                "#FFC368",
                "#ACDB87",
                "#749AC7",
                "#FF9A9A",
              ].join(" "),
            },
            [r.Relationship]: { lineColor: "#F06767", textColor: "#F7FFF4" },
            [r.Boundary]: { fillColor: "#F06767", textColor: "#F7FFF4" },
            [r.Summary]: {},
            [d.CentralTopic]: { fillColor: "#F06767" },
            [d.MainTopic]: { textColor: "#000000" },
            [d.Subtopic]: { textColor: "#000000" },
            [d.FloatingTopic]: { fillColor: "#797979", textColor: "#F7FFF4" },
            [d.CalloutTopic]: { fillColor: "#F06767", textColor: "#F7FFF4" },
            [d.SummaryTopic]: { fillColor: "#F06767", textColor: "#000000" },
            [a.VeryImportant]: { fillColor: "#1000C6" },
            [a.Important]: { fillColor: "#22D896", textColor: "#000000" },
            [a.CrossOut]: {},
          },
          "Hubble-Bubble": {
            [r.Map]: { fillColor: "#1D663A", multiLineColors: "#A2B864" },
            [r.Relationship]: { lineColor: "#A2B864", textColor: "#FEFFD0" },
            [r.Boundary]: { fillColor: "#A2B864", textColor: "#FFFFFF" },
            [r.Summary]: {},
            [d.CentralTopic]: { fillColor: "#39B169", textColor: "#FEFFD0" },
            [d.MainTopic]: { fillColor: "#39B169", textColor: "#FEFFD0" },
            [d.Subtopic]: { fillColor: "#2E9356", textColor: "#FEFFD0" },
            [d.FloatingTopic]: { fillColor: "#A2B864", textColor: "#1D663A" },
            [d.CalloutTopic]: { fillColor: "#FEFFD0", textColor: "#000000" },
            [d.SummaryTopic]: { fillColor: "#A2B864", textColor: "#1D663A" },
            [a.VeryImportant]: { fillColor: "#FA813D", textColor: "#000000" },
            [a.Important]: { fillColor: "#ECDE5D", textColor: "#000000" },
            [a.CrossOut]: {},
          },
          "midnight-rose": {
            [r.Map]: { fillColor: "#010518", multiLineColors: "#9EAEFF" },
            [r.Relationship]: { lineColor: "#2C47D8", textColor: "#FFFFFF" },
            [r.Boundary]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [r.Summary]: {},
            [d.CentralTopic]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [d.MainTopic]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [d.Subtopic]: { fillColor: "#3E4C95", textColor: "#FFFFFF" },
            [d.FloatingTopic]: { fillColor: "#DEE3FF", textColor: "#404E9C" },
            [d.CalloutTopic]: { fillColor: "#FEFFD0", textColor: "#404E9C" },
            [d.SummaryTopic]: { fillColor: "#9EAEFF", textColor: "#404E9C" },
            [a.VeryImportant]: { fillColor: "#A716CB", textColor: "#000000" },
            [a.Important]: { fillColor: "#D45757", textColor: "#000000" },
            [a.CrossOut]: {},
          },
          "shape-for-you": {
            [r.Map]: {
              fillColor: "#F5D8DD",
              multiLineColors: [
                "#EDB998",
                "#BEADA6",
                "#E994B1",
                "#ACBCD6",
                "#B1ABD6",
                "#B0CD99",
                "#97D6C3",
                "#BDB783",
              ].join(" "),
            },
            [r.Relationship]: { lineColor: "#E59294", textColor: "#000000" },
            [r.Boundary]: { fillColor: "#E59294", textColor: "#FFFFFF" },
            [r.Summary]: {},
            [d.CentralTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [d.MainTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [d.Subtopic]: { fillColor: "#E59294", textColor: "#000000" },
            [d.FloatingTopic]: { fillColor: "#4B4B4B", textColor: "#FFFFFF" },
            [d.CalloutTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [d.SummaryTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [a.VeryImportant]: { fillColor: "#50209E", textColor: "#000000" },
            [a.Important]: { fillColor: "#D45757", textColor: "#62A8CF" },
            [a.CrossOut]: {},
          },
          "hand-drawn": {
            [r.Map]: { fillColor: "#DCE2D4", multiLineColors: "#2F4DB5" },
            [r.Relationship]: { lineColor: "#2F4DB5", textColor: "#2F4DB5" },
            [r.Boundary]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [r.Summary]: {},
            [d.CentralTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [d.MainTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [d.Subtopic]: { fillColor: "#5E6AA2", textColor: "#FFFFFF" },
            [d.FloatingTopic]: { fillColor: "#5A5E74", textColor: "#EDF4E5" },
            [d.CalloutTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [d.SummaryTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [a.VeryImportant]: { fillColor: "#9433AC", textColor: "#FFFFFF" },
            [a.Important]: { fillColor: "#D05252", textColor: "#FFFFFF" },
            [a.CrossOut]: {},
          },
        });
      var c = function (e, i, t, n) {
        return new (t || (t = Promise))(function (o, l) {
          function s(e) {
            try {
              r(n.next(e));
            } catch (e) {
              l(e);
            }
          }
          function a(e) {
            try {
              r(n.throw(e));
            } catch (e) {
              l(e);
            }
          }
          function r(e) {
            var i;
            e.done
              ? o(e.value)
              : ((i = e.value),
                i instanceof t
                  ? i
                  : new t(function (e) {
                      e(i);
                    })).then(s, a);
          }
          r((n = n.apply(e, i || [])).next());
        });
      };
      function p(e) {
        const { sheets: i, activeSheetId: t, getSheetViewer: o } = (0, s.nZ)(),
          l = (0, n.Fl)(() =>
            i.value.find((i) => i.id === (null != e ? e : t.value)),
          ),
          a = (0, n.Fl)(() => o(l.value.id));
        return {
          getStartingTopicId: () => {
            var e, i, t;
            return null !==
              (t =
                null ===
                  (i =
                    null === (e = l.value) || void 0 === e
                      ? void 0
                      : e.rootTopic) || void 0 === i
                  ? void 0
                  : i.id) && void 0 !== t
              ? t
              : null;
          },
          getTopicAttributes: (e) => {
            var i, t, n, o, s, r, d, u, c, p, v;
            const h =
                null ===
                  (t =
                    null === (i = l.value) || void 0 === i
                      ? void 0
                      : i.query({ id: e })) || void 0 === t
                  ? void 0
                  : t.asTopic(),
              f =
                null ===
                  (o =
                    null === (n = a.value) || void 0 === n
                      ? void 0
                      : n.getSheetFigure()) || void 0 === o
                  ? void 0
                  : o.topicFigureByTopicId[e],
              C = m(e);
            return (
              h && {
                id: null == h ? void 0 : h.id,
                title:
                  null !== (s = null == h ? void 0 : h.title) && void 0 !== s
                    ? s
                    : "",
                labels:
                  null !== (r = null == h ? void 0 : h.labels) && void 0 !== r
                    ? r
                    : [],
                note: (null == h ? void 0 : h.notes) && {
                  plainText:
                    null === (d = h.notes) || void 0 === d ? void 0 : d.text,
                  html:
                    null === (u = h.notes) || void 0 === u ? void 0 : u.html,
                },
                image: y(f),
                summaries:
                  null === (c = null == h ? void 0 : h.summaries) ||
                  void 0 === c
                    ? void 0
                    : c.map((e) => ({
                        topicId: e.id,
                        startIndex: e.rangeStart,
                        endIndex: e.rangeEnd,
                      })),
                markers: g(
                  null !== (p = null == h ? void 0 : h.markers) && void 0 !== p
                    ? p
                    : [],
                ),
                video: S(f),
                calloutTopicId:
                  null === (v = null == h ? void 0 : h.callout) || void 0 === v
                    ? void 0
                    : v.id,
                hyperlink: w(h),
                topicSlide: null == C ? void 0 : C["topic-slide-visibility"],
                topicSlideImagePlacement:
                  null == C ? void 0 : C["topic-slide-image-placement"],
                listSlides: null == C ? void 0 : C["list-slide-visibility"],
                listSlideLayout: null == C ? void 0 : C["list-slide-layout"],
                listSlideDelivery:
                  null == C ? void 0 : C["list-slide-delivery"],
                summarySlide:
                  null == C ? void 0 : C["summary-slide-visibility"],
                preferredDefaultListSlideLayout: b(f),
              }
            );
          },
          getSubtopics: (e) => {
            var i, t, n, o;
            const s =
              null ===
                (t =
                  null === (i = l.value) || void 0 === i
                    ? void 0
                    : i.query({ id: e })) || void 0 === t
                ? void 0
                : t.asTopic();
            return null !==
              (o =
                null === (n = null == s ? void 0 : s.children) || void 0 === n
                  ? void 0
                  : n.map((e) => e.id)) && void 0 !== o
              ? o
              : [];
          },
          getParentTopicId: (e) => {
            var i, t, n, o;
            const s =
              null ===
                (t =
                  null === (i = l.value) || void 0 === i
                    ? void 0
                    : i.query({ id: e })) || void 0 === t
                ? void 0
                : t.asTopic();
            return null !==
              (o =
                null === (n = null == s ? void 0 : s.parentTopic) ||
                void 0 === n
                  ? void 0
                  : n.id) && void 0 !== o
              ? o
              : null;
          },
          getFloatingTopics: () => {
            var e, i, t;
            return null !==
              (t =
                null ===
                  (i =
                    null === (e = l.value) || void 0 === e
                      ? void 0
                      : e.rootTopic) || void 0 === i
                  ? void 0
                  : i.detachedChildren.map((e) => e.id)) && void 0 !== t
              ? t
              : [];
          },
          getEndingScreenContent: (e) =>
            c(this, void 0, void 0, function* () {
              var i, t, n, o, s, r, d, c;
              const p =
                  null !==
                    (s =
                      null !== (i = null == e ? void 0 : e.appearance) &&
                      void 0 !== i
                        ? i
                        : null ===
                              (o = m(
                                null ===
                                  (n =
                                    null === (t = l.value) || void 0 === t
                                      ? void 0
                                      : t.rootTopic) || void 0 === n
                                  ? void 0
                                  : n.id,
                              )) || void 0 === o
                          ? void 0
                          : o["slide-appearance"]) && void 0 !== s
                    ? s
                    : "default",
                { svg: v, size: h } =
                  yield a.value.exportSVGElementWithSizeUsingSheetAppearance(
                    l.value,
                    null !== (r = u[p]) && void 0 !== r ? r : u.default,
                    {
                      padding: { left: 20, right: 20, top: 20, bottom: 20 },
                      disableEmbedFonts: !0,
                    },
                  );
              return {
                svgString: new XMLSerializer().serializeToString(v),
                width:
                  null !== (d = h.width) && void 0 !== d
                    ? d
                    : parseInt(v.getAttribute("width")),
                height:
                  null !== (c = h.height) && void 0 !== c
                    ? c
                    : parseInt(v.getAttribute("height")),
              };
            }),
        };
      }
      function v() {
        return c(this, void 0, void 0, function* () {
          const e = p(),
            i = e.getStartingTopicId(),
            t = e.getFloatingTopics(),
            n = [i, ...t],
            o = (i) => {
              const t = i.map((i) => e.getSubtopics(i)).flat();
              n.push(...t), t.length <= 0 || o(t);
            };
          o(n);
          const l = {},
            s = {},
            a = {};
          n.forEach((i) => {
            (l[i] = e.getTopicAttributes(i)),
              (s[i] = e.getParentTopicId(i)),
              (a[i] = e.getSubtopics(i));
          });
          const r = yield e.getEndingScreenContent(void 0);
          return {
            startingTopicId: i,
            floatingTopicIds: t,
            topicRecords: l,
            parentRecords: s,
            subTopicsRecords: a,
            endingScreenContent: r,
          };
        });
      }
      function h(e) {
        const {
          startingTopicId: i,
          floatingTopicIds: t,
          topicRecords: n,
          subTopicsRecords: o,
          parentRecords: l,
          endingScreenContent: s,
        } = e;
        return {
          getStartingTopicId: () => i,
          getTopicAttributes: (e) => {
            var i;
            return null !== (i = n[e]) && void 0 !== i ? i : null;
          },
          getSubtopics: (e) => {
            var i;
            return null !== (i = o[e]) && void 0 !== i ? i : [];
          },
          getParentTopicId: (e) => {
            var i;
            return null !== (i = l[e]) && void 0 !== i ? i : null;
          },
          getFloatingTopics: () => t,
          getEndingScreenContent: () =>
            c(this, void 0, void 0, function* () {
              return s;
            }),
        };
      }
      function m(e) {
        var i, t, n;
        const { document: l } = (0, s.nZ)(),
          a =
            null ===
              (t =
                null === (i = l.value) || void 0 === i
                  ? void 0
                  : i.query({ id: e })) || void 0 === t
              ? void 0
              : t.asTopic(),
          r = null == a ? void 0 : a.extensionBy(o.CU);
        return null !== (n = null == r ? void 0 : r.content) && void 0 !== n
          ? n
          : null;
      }
      function f(e, i) {
        var t, n, l, a, r;
        const { document: d, changeDoc: u } = (0, s.nZ)(),
          c =
            null ===
              (n =
                null === (t = d.value) || void 0 === t
                  ? void 0
                  : t.query({ id: e })) || void 0 === n
              ? void 0
              : n.asTopic(),
          p =
            null !==
              (a =
                null === (l = null == c ? void 0 : c.extensionBy(o.CU)) ||
                void 0 === l
                  ? void 0
                  : l.content) && void 0 !== a
              ? a
              : {},
          v = { content: Object.assign(Object.assign({}, p), i) },
          h =
            null === (r = null == c ? void 0 : c.asMutable()) || void 0 === r
              ? void 0
              : r.extensionBy(o.CU, v).commit().ownerDocument;
        h && u(h);
      }
      function g(e) {
        const { markerModule: i } = (0, s.nZ)();
        return e
          .map((e) => ({
            markerId: e,
            imageSource: i.getMarkerInfoById(e).imageSrc,
          }))
          .filter((e) => !!e.imageSource);
      }
      function y(e) {
        var i, t, n, o, l;
        if (!e) return null;
        const {
            imageView: a,
            measuredImageView: r,
            imageNaturalSize: d,
          } = e.nodeContent,
          u = null == e ? void 0 : e.modelAttributes,
          c =
            null === (i = null == u ? void 0 : u.equation) || void 0 === i
              ? void 0
              : i.text;
        if (c)
          return (function (e) {
            var i, t;
            const n = (
              null !== (i = (0, s.nZ)().makeMathJaxSVG(e)) && void 0 !== i
                ? i
                : ""
            ).replace(/currentColor/g, "");
            if (!n) return null;
            const o =
              null ===
                (t = new DOMParser().parseFromString(n, "image/svg+xml")) ||
              void 0 === t
                ? void 0
                : t.documentElement;
            return o
              ? {
                  source: n,
                  size: {
                    width: parseInt(o.getAttribute("width")),
                    height: parseInt(o.getAttribute("height")),
                  },
                }
              : null;
          })(c);
        {
          const e =
              null !==
                (n =
                  null !== (t = null == d ? void 0 : d.width) && void 0 !== t
                    ? t
                    : null == r
                      ? void 0
                      : r.width) && void 0 !== n
                ? n
                : null == u
                  ? void 0
                  : u.imageWidth,
            i =
              null !==
                (l =
                  null !== (o = null == d ? void 0 : d.height) && void 0 !== o
                    ? o
                    : null == r
                      ? void 0
                      : r.height) && void 0 !== l
                ? l
                : null == u
                  ? void 0
                  : u.imageHeight,
            s = null == a ? void 0 : a.src;
          return e && i && s
            ? { source: s, size: { width: e, height: i } }
            : null;
        }
      }
      function S(e) {
        var i, t;
        const n =
          null ===
            (t =
              null === (i = null == e ? void 0 : e.modelAttributes) ||
              void 0 === i
                ? void 0
                : i.webVideo) || void 0 === t
            ? void 0
            : t.embedUrl;
        return n ? { videoSource: n } : null;
      }
      function w(e) {
        const i = null == e ? void 0 : e.href;
        if (!i) return null;
        const t =
          i &&
          (function (e) {
            return e.toLowerCase().startsWith("xap:resources")
              ? "attachment"
              : e.toLowerCase().startsWith("file:")
                ? "local"
                : e.toLowerCase().startsWith("xmind:")
                  ? null
                  : "webpage";
          })(i);
        return i && t ? { href: i, type: t } : null;
      }
      function b(e) {
        var i, t;
        const n =
          null !==
            (t =
              null === (i = null == e ? void 0 : e.modelAttributes) ||
              void 0 === i
                ? void 0
                : i.structureClass) && void 0 !== t
            ? t
            : null;
        return [l.v.FISHBONELEFTHEADED, l.v.FISHBONERIGHTHEADED].includes(n)
          ? "fishbone"
          : [
                l.v.TIMELINEHORIZONTAL,
                l.v.TIMELINESIDEDHORIZONTAL,
                l.v.TIMELINETHROUGHVERTICAL,
              ].includes(n)
            ? "timeline"
            : null;
      }
    },
    28086: (e, i, t) => {
      "use strict";
      t.d(i, { Ur: () => h, XT: () => c, _x: () => v, iA: () => p });
      var n = t(67657),
        o = t(90435),
        l = t(54856),
        s = t(82361),
        a = t(94025),
        r = t(91324),
        d = function (e, i, t, n) {
          return new (t || (t = Promise))(function (o, l) {
            function s(e) {
              try {
                r(n.next(e));
              } catch (e) {
                l(e);
              }
            }
            function a(e) {
              try {
                r(n.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function r(e) {
              var i;
              e.done
                ? o(e.value)
                : ((i = e.value),
                  i instanceof t
                    ? i
                    : new t(function (e) {
                        e(i);
                      })).then(s, a);
            }
            r((n = n.apply(e, i || [])).next());
          });
        };
      const u = n.screen,
        c = {
          AFTER_SUB_WINDOW_CREATED: "pitch:afterSubWindowCreated",
          AFTER_SUB_WINDOW_REMOVED: "pitch:afterSubWindowRemoved",
          ON_DISPLAY_ADDED: "pitch:onDisplayAdded",
          ON_DISPLAY_REMOVED: "pitch:onDisplayRemoved",
          ON_MAIN_WINDOW_ENTER_FULLSCREEN: "pitch:onMainWindowEnterFullScreen",
          ON_MAIN_WINDOW_LEAVE_FULLSCREEN: "pitch:onMainWindowLeaveFullScreen",
        };
      class p extends s.EventEmitter {
        constructor() {
          super(),
            (this.mainWindowId = window.id),
            (this.subWindowId = null),
            (this.subWindowDisplayId = null),
            (this.win = n.getCurrentWindow()),
            (this._windowFittedSlideSize = {}),
            (this.onDisplayAdded = () =>
              d(this, void 0, void 0, function* () {
                yield new Promise((e) => setTimeout(e, 1e3)),
                  this.emit(c.ON_DISPLAY_ADDED);
              })),
            (this.onDisplayRemoved = () => {
              u
                .getAllDisplays()
                .map((e) => e.id)
                .includes(this.subWindowDisplayId) || this.closeSubWindow(),
                this.emit(c.ON_DISPLAY_REMOVED);
            }),
            (this.onMainWindowEnterFullScreen = () => {
              this.emit(c.ON_MAIN_WINDOW_ENTER_FULLSCREEN);
            }),
            (this.onMainWindowLeaveFullScreen = () => {
              this.emit(c.ON_MAIN_WINDOW_LEAVE_FULLSCREEN);
            }),
            u.on("display-added", this.onDisplayAdded),
            u.on("display-removed", this.onDisplayRemoved),
            this.win.on("enter-full-screen", this.onMainWindowEnterFullScreen),
            this.win.on("leave-full-screen", this.onMainWindowLeaveFullScreen);
        }
        get subWindowCreated() {
          return null !== this.subWindowId;
        }
        get mainWindow() {
          return this.win;
        }
        get subWindow() {
          var e;
          return (
            this.subWindowId &&
            (null === (e = n.BrowserWindow) || void 0 === e
              ? void 0
              : e.fromId(this.subWindowId))
          );
        }
        get windowFittedSlideSize() {
          var e, i, t;
          const n =
            null !==
              (t =
                null ===
                  (i =
                    null === (e = this.subWindow) || void 0 === e
                      ? void 0
                      : e.getContentSize) || void 0 === i
                  ? void 0
                  : i.call(e)) && void 0 !== t
              ? t
              : this.win.getContentSize();
          return (
            (this._windowFittedSlideSize.value = h(n)),
            this._windowFittedSlideSize
          );
        }
        createSubWindow() {
          var e;
          return d(this, void 0, void 0, function* () {
            if (this.subWindowCreated) return !1;
            const i = this.getSubWindowDisplay();
            if (!i) return !1;
            const t = yield o.ZP.fetch(l.Fx, {
              name: "presentation",
              query: { remoteId: this.mainWindowId },
              backgroundThrottling: !1,
              overrideSetting: {
                x: i.bounds.x,
                y: i.bounds.y,
                fullscreen: !0,
                focusable: !1,
                backgroundColor: "#000000",
              },
            });
            return (
              (this.subWindowDisplayId = i.id),
              (this.subWindowId = t.id),
              null === (e = this.subWindow) ||
                void 0 === e ||
                e.on("focus", () => this.focusMainWindow()),
              this.emit(c.AFTER_SUB_WINDOW_CREATED, this.subWindowId),
              !0
            );
          });
        }
        getSubWindowDisplay() {
          const e = u.getDisplayMatching(n.getCurrentWindow().getBounds());
          return u.getAllDisplays().filter((i) => i.id !== e.id)[0] || null;
        }
        closeSubWindow() {
          var e;
          this.subWindowId &&
            (null === (e = this.subWindow) || void 0 === e || e.close(),
            (this.subWindowId = null),
            (this.subWindowDisplayId = null),
            this.emit(c.AFTER_SUB_WINDOW_REMOVED));
        }
        enterFullscreen(e) {
          return d(this, void 0, void 0, function* () {
            return yield o.ZP.fetch(l.IB, {
              fullscreen: !0,
              editorViewId: window.editorId,
              targetElementId: e,
            });
          });
        }
        leaveFullscreen(e) {
          return d(this, void 0, void 0, function* () {
            return yield o.ZP.fetch(l.IB, {
              fullscreen: !1,
              editorViewId: window.editorId,
              targetElementId: e,
            });
          });
        }
        focusMainWindow() {
          var e;
          null === (e = this.win) || void 0 === e || e.focus();
        }
        unload() {
          u.removeListener("display-added", this.onDisplayAdded),
            u.removeListener("display-removed", this.onDisplayRemoved),
            this.win.removeListener(
              "enter-full-screen",
              this.onMainWindowEnterFullScreen,
            ),
            this.win.removeListener(
              "leave-full-screen",
              this.onMainWindowLeaveFullScreen,
            ),
            this.closeSubWindow();
        }
      }
      function v(e) {
        e || (e = n.getCurrentWindow());
        return {
          lockAspect: (i) => {
            if (!i) {
              const { width: t, height: n } = e.getBounds();
              i = t / n;
            }
            e.setAspectRatio(i);
          },
          releaseAspect: () => e.setAspectRatio(0),
          setMinimumSize: (i, t) => e.setMinimumSize(i, t),
          setBounds: (i) => e.setBounds(i),
          smoothOnResize: (i) => {
            e.on(
              "resize",
              (0, r.P2)(() => window.requestAnimationFrame(i), 1e3 / 60),
            );
          },
          closeWindow: () => e.close(),
          onWindowClose: (i) => e.on("close", i),
          computeSuitableWindowSize: m,
          computeSuitableSlideSizeIdFromWindowSize: h,
        };
      }
      function h(e) {
        e || (e = n.getCurrentWindow().getContentSize());
        const i = e[0] / e[1];
        let t = "16:9",
          o = 1 / 0;
        for (const e of Object.keys(a.IE)) {
          if (!/\d+:\d+/.test(e)) continue;
          const n = e.split(":").map((e) => Number(e)),
            l = Math.abs(n[0] / n[1] - i);
          l < o && ((o = l), (t = e));
        }
        return t;
      }
      function m(e) {
        const i = g().bounds,
          t = (e) => e.width + 80 < i.width && e.height + 80 < i.height;
        let n = f(
          (function () {
            const e = g();
            if (!e) return "16:9";
            const i = e.bounds,
              t = i.width / i.height;
            let n = "16:9",
              o = 1 / 0;
            for (const e of Object.keys(a.IE)) {
              if (!/\d+:\d+/.test(e)) continue;
              const i = e.split(":").map((e) => Number(e)),
                l = Math.abs(i[0] / i[1] - t);
              l < o && ((o = l), (n = e));
            }
            return n;
          })(),
        );
        const o = {
          width: 1280,
          height: Math.floor(1280 / n),
          x: 0,
          y: 0,
          minWidth: 360,
          minHeight: 360,
        };
        if (
          ("Auto" !== e &&
            ((n = f(e)),
            (o.height = Math.floor(o.width / n)),
            n < 1
              ? (o.minHeight = Math.floor(o.minWidth / n))
              : (o.minWidth = Math.floor(o.minHeight * n))),
          !t(o))
        )
          for (const e of [960, 640, 360])
            if (((o.width = e), (o.height = Math.floor(e / n)), t(o))) break;
        return (
          (o.x = Math.floor(i.x + (i.width - o.width) / 2)),
          (o.y = Math.floor(i.y + (i.height - o.height) / 2)),
          o
        );
      }
      function f(e) {
        const i = e.split(":").map((e) => Number(e));
        return i[0] / i[1];
      }
      function g() {
        const e = n.screen,
          i = n.getCurrentWindow().getBounds();
        return e.getDisplayMatching(i);
      }
    },
    83567: (e, i, t) => {
      "use strict";
      t.d(i, { Z: () => u });
      var n = t(2954),
        o = t(90435),
        l = t(50965),
        s = t(54856),
        a = t(92636),
        r = t(69931);
      const d = (0, n.aZ)({
        __name: "theme-picker",
        props: { aspect: String, themeId: String },
        emits: ["changeTheme"],
        setup(e, { expose: i, emit: t }) {
          const d = e,
            u = (e, ...i) => (0, l.JE)().T(e, ...i),
            c = (0, r.ju)("static/assets/images/pro/pro-small-with-border.svg"),
            p = (0, n.Fl)(() => true),
            v = (0, n.Fl)(() => d.aspect),
            h = (0, n.iH)(),
            m = (0, n.Fl)(() => d.themeId),
            f = (0, n.Fl)(() => {
              switch (v.value) {
                case "3:4":
                  return "3_4";
                case "4:3":
                  return "4_3";
                case "9:16":
                  return "9_16";
              }
              return "16_9";
            }),
            g = (0, n.Fl)(() => {
              switch (v.value) {
                case "3:4":
                  return { width: 84, height: 112 };
                case "4:3":
                  return { width: 112, height: 84 };
                case "9:16":
                  return { width: 63, height: 112 };
              }
              return { width: 112, height: 63 };
            }),
            y = (0, n.Fl)(() => {
              switch (v.value) {
                case "3:4":
                  return { width: 316 };
                case "4:3":
                  return { width: 276 };
                case "9:16":
                  return { width: 304 };
              }
              return { width: 276 };
            }),
            S = (0, n.Fl)(() => [
              {
                id: "light",
                name: u("Light"),
                thumbnail: (0, r.ju)(
                  `static/images/pitchmode/theme/${f.value}/light.svg`,
                ),
              },
              {
                id: "default",
                name: u("Dark"),
                thumbnail: (0, r.ju)(
                  `static/images/pitchmode/theme/${f.value}/dark.svg`,
                ),
              },
              {
                id: "innocence",
                name: u("Innocence"),
                thumbnail: (0, r.ju)(
                  `static/images/pitchmode/theme/${f.value}/innocence.svg`,
                ),
              },
              {
                id: "shape-for-you",
                name: u("Shape for You"),
                thumbnail: (0, r.ju)(
                  `static/images/pitchmode/theme/${f.value}/shape-for-you.svg`,
                ),
              },
              {
                id: "midnight-rose",
                name: u("Midnight Rose"),
                thumbnail: (0, r.ju)(
                  `static/images/pitchmode/theme/${f.value}/midnight-rose.svg`,
                ),
              },
              {
                id: "hubble-bubble",
                name: u("Hubble Bubble"),
                thumbnail: (0, r.ju)(
                  `static/images/pitchmode/theme/${f.value}/hubble-bubble.svg`,
                ),
              },
              {
                id: "hand-drawn",
                name: u("Sketchbook"),
                thumbnail: (0, r.ju)(
                  `static/images/pitchmode/theme/${f.value}/hand-drawn.svg`,
                ),
              },
            ]),
            w = () => {
              (h.value.style.paddingRight = "20px"),
                (h.value.style.height = ""),
                (0, n.Y3)(() => {
                  if (!h.value.offsetHeight) return;
                  const e = h.value.getBoundingClientRect(),
                    i = window.innerHeight;
                  e.bottom > i &&
                    ((h.value.style.height =
                      e.height - (e.bottom - i) - 20 + "px"),
                    (h.value.style.paddingRight = "5px"));
                });
            };
          return (
            i({ updateHeight: w }),
            {
              __sfc: !0,
              props: d,
              emit: t,
              $T: u,
              pitchThemeProSVG: c,
              isActivationStatusValid: p,
              currentAspectRatio: v,
              picker: h,
              currentThemeId: m,
              thumbnailDir: f,
              thumbnailSize: g,
              popoverSize: y,
              options: S,
              handleClick: (e) => {
                a.J9.includes(e) && !p.value
                  ? o.ZP.fetch(s.Fx, { name: "dialog-activate" })
                  : t("changeTheme", e);
              },
              updateHeight: w,
              PRO_PITCH_THEMES: a.J9,
            }
          );
        },
      });
      t(16595);
      const u = (0, t(51900).Z)(
        d,
        function () {
          var e = this,
            i = e._self._c,
            t = e._self._setupProxy;
          return i(
            "div",
            {
              ref: "picker",
              staticClass: "uk-height-1-1 uk-overflow-auto",
              staticStyle: {
                padding: "20px 20px 8px 20px",
                "overflow-x": "hidden",
              },
              style: { width: t.popoverSize.width + "px" },
            },
            [
              i(
                "div",
                {
                  staticClass:
                    "uk-height-1-1 uk-flex uk-flex-wrap uk-flex-between",
                },
                e._l(t.options, function ({ id: n, thumbnail: o, name: l }) {
                  return i("div", { key: n }, [
                    i(
                      "div",
                      {
                        staticClass: "uk-flex uk-flex-wrap uk-flex-center",
                        staticStyle: {
                          position: "relative",
                          "min-width": "80px",
                        },
                        style: {
                          width: Math.max(t.thumbnailSize.width, 80) + "px",
                        },
                      },
                      [
                        i(
                          "div",
                          {
                            staticClass: "theme-option uk-card-selectable",
                            class: { "uk-active": t.currentThemeId === n },
                            staticStyle: { position: "relative" },
                            style: { width: t.thumbnailSize.width + "px" },
                            on: {
                              click: function (e) {
                                return t.handleClick(n);
                              },
                            },
                          },
                          [
                            i("img", {
                              staticClass: "uk-preserve",
                              attrs: {
                                "data-src": o,
                                width: t.thumbnailSize.width,
                                height: t.thumbnailSize.height,
                                "uk-img": "",
                              },
                            }),
                            e._v(" "),
                            t.PRO_PITCH_THEMES.includes(n) &&
                            !t.isActivationStatusValid
                              ? i("img", {
                                  staticStyle: {
                                    position: "absolute",
                                    top: "4px",
                                    left: "4px",
                                  },
                                  attrs: {
                                    "data-src": t.pitchThemeProSVG,
                                    "uk-img": "",
                                  },
                                })
                              : e._e(),
                          ],
                        ),
                        e._v(" "),
                        i("div", { staticClass: "theme-option-title" }, [
                          e._v("\n          " + e._s(l) + "\n        "),
                        ]),
                      ],
                    ),
                  ]);
                }),
                0,
              ),
            ],
          );
        },
        [],
        !1,
        null,
        "592e5523",
        null,
      ).exports;
    },
    83940: (e, i, t) => {
      "use strict";
      t.r(i), t.d(i, { default: () => ee });
      var n = t(2954),
        o = t(96160),
        l = t(91324),
        s = t(7703),
        a = t(94025),
        r = t(24813),
        d = t(38853),
        u = function (e, i, t, n) {
          return new (t || (t = Promise))(function (o, l) {
            function s(e) {
              try {
                r(n.next(e));
              } catch (e) {
                l(e);
              }
            }
            function a(e) {
              try {
                r(n.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function r(e) {
              var i;
              e.done
                ? o(e.value)
                : ((i = e.value),
                  i instanceof t
                    ? i
                    : new t(function (e) {
                        e(i);
                      })).then(s, a);
            }
            r((n = n.apply(e, i || [])).next());
          });
        };
      function c(e, i, t) {
        const {
            containerSize: o,
            topicId: l,
            topicType: s,
            isListVisible: c,
            isSummaryVisible: v,
            isTopicVisible: h,
          } = t,
          m = (0, n.iH)(!1);
        let f,
          g,
          y,
          S = "",
          w = null,
          b = 0,
          C = !1;
        const F = () => {
            var e;
            if (null == f ? void 0 : f.currentSlide) {
              if (g) {
                const e = f.currentSlide.backgroundColor || "";
                (g.contentEl.style.backgroundColor = e), (S = e);
              }
              w ||
                (w =
                  null !== (e = null == f ? void 0 : f.currentSlide) &&
                  void 0 !== e
                    ? e
                    : null);
            }
          },
          x = () => {
            P(),
              (f = (function () {
                const {
                  slideTheme: e,
                  slideAspect: i,
                  preferredLanguage: t,
                } = (0, d.Y)();
                return (0, a.sz)({
                  contentProvider: (0, r.n2)(),
                  slideSize: "Auto" === i.value ? "16:9" : i.value,
                  slideTheme: e.value,
                  disablesWatermark: !0,
                  preferredLanguage: t.value,
                });
              })()),
              f.on("transitionEnd", F);
          },
          _ = (e) =>
            u(this, void 0, void 0, function* () {
              let i;
              (i =
                "topic" === e
                  ? h
                    ? "topic"
                    : c
                      ? "list"
                      : void 0
                  : v
                    ? "summary"
                    : void 0),
                yield (0, a._p)(f, l, i, { interval: 2e3 });
            }),
          T = (0, n.iH)([]),
          k = () => {
            T.value.forEach((e) => e()),
              (T.value = []),
              b >= 1 && ((m.value = !1), I());
          },
          I = () => {
            if (C || !w || !e.value) return;
            null == y || y.remove();
            const i = p(o, S);
            e.value.appendChild(i.el),
              (y = i.el),
              (i.slideView.slide = w),
              i.slideView.update(),
              i.slideView.connect(),
              i.update(),
              i.connect();
          },
          P = () => {
            null == f || f.off("transitionEnd", F),
              g && (null == f || f.removePresenter(g));
          };
        return {
          isPreviewPlaying: m,
          playPreview: () =>
            u(this, void 0, void 0, function* () {
              if (C || !e.value) return;
              k();
              let t = !1;
              T.value.push(() => {
                t = !0;
              }),
                (m.value = !0),
                x(),
                (g = p(o, S)),
                f.addPresenter(g),
                null == y || y.remove(),
                e.value.appendChild(g.el),
                (y = g.el),
                g.update(),
                g.connect(),
                yield _(s),
                (b += 1);
              const n = () =>
                u(this, void 0, void 0, function* () {
                  !t && i.value
                    ? (yield new Promise((e) => setTimeout(e, 500)),
                      yield _(),
                      (b += 1),
                      n())
                    : (m.value = !1);
                });
              i.value ? yield n() : ((m.value = !1), I());
            }),
          stopPlay: k,
          unload: () => {
            P(), T.value.forEach((e) => e()), null == y || y.remove(), (C = !0);
          },
        };
      }
      function p(e, i) {
        return (0, a.bh)({
          viewStyle: {
            left: "50%",
            transform: "translateX(-50%)",
            position: "relative",
            width: `${e.width}px`,
            height: `${e.height}px`,
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow:
              "0px 1px 4px 0px rgba(0, 0, 0, 0.05), 0px 4px 15px 0px rgba(0, 0, 0, 0.1)",
            backgroundColor: "unset",
          },
          contentStyle: { backgroundColor: i },
        });
      }
      var v = function (e, i, t, n) {
        return new (t || (t = Promise))(function (o, l) {
          function s(e) {
            try {
              r(n.next(e));
            } catch (e) {
              l(e);
            }
          }
          function a(e) {
            try {
              r(n.throw(e));
            } catch (e) {
              l(e);
            }
          }
          function r(e) {
            var i;
            e.done
              ? o(e.value)
              : ((i = e.value),
                i instanceof t
                  ? i
                  : new t(function (e) {
                      e(i);
                    })).then(s, a);
          }
          r((n = n.apply(e, i || [])).next());
        });
      };
      const h = (0, n.aZ)({
        __name: "slide-preview",
        props: {
          aspect: null,
          isSummarySlideVisible: { type: Boolean },
          isListSlideVisible: { type: Boolean },
          isTopicSlideVisible: { type: Boolean },
          isMultiple: { type: Boolean },
          isSummary: { type: Boolean },
          topicIds: null,
        },
        setup(e, { expose: i }) {
          const t = e,
            o = (0, n.iH)(),
            l = (0, n.iH)(!1),
            s = (0, n.Fl)(
              () =>
                t.isListSlideVisible ||
                t.isTopicSlideVisible ||
                t.isSummarySlideVisible,
            ),
            a = (0, n.Fl)(() => {
              switch (t.aspect) {
                case "3:4":
                  return { width: 96, height: 128 };
                case "4:3":
                  return { width: 170.04, height: 127.53 };
                case "9:16":
                  return { width: 72, height: 128 };
              }
              return { width: 227.04, height: 127.71 };
            });
          let r;
          const d = () =>
            v(this, void 0, void 0, function* () {
              if (
                (null == r || r(),
                t.isMultiple || t.topicIds.length > 1 || !o.value)
              )
                return;
              const {
                isPreviewPlaying: e,
                stopPlay: i,
                playPreview: d,
                unload: u,
              } = c(o, l, {
                containerSize: a.value,
                topicId: t.topicIds[0],
                topicType: t.isSummary ? "summary" : "topic",
                isSummaryVisible: t.isSummarySlideVisible,
                isTopicVisible: t.isTopicSlideVisible,
                isListVisible: t.isListSlideVisible,
              });
              let p;
              s.value &&
                (d(),
                (p = (0, n.YP)(
                  () => l.value,
                  (t) => {
                    t ? !e.value && d() : i();
                  },
                ))),
                (r = () => {
                  null == p || p(), u();
                });
            });
          return (
            i({ startNewPlay: d }),
            {
              __sfc: !0,
              props: t,
              preview: o,
              isPreviewMaskHovered: l,
              isAvailable: s,
              containerSize: a,
              clearPlay: r,
              play: d,
            }
          );
        },
      });
      t(69773);
      var m = t(51900);
      const f = (0, m.Z)(
        h,
        function () {
          var e = this,
            i = e._self._c,
            t = e._self._setupProxy;
          return i("div", [
            i(
              "div",
              {
                staticClass: "preview-container",
                style: [!t.isAvailable && { boxShadow: "none" }],
              },
              [
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.isAvailable,
                        expression: "isAvailable",
                      },
                    ],
                    ref: "preview",
                    staticClass: "pitch-mode-preview-slide",
                    style: {
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    },
                  },
                  [
                    i("div", {
                      staticClass: "mask",
                      style: {
                        width: `${t.containerSize.width}px`,
                        height: `${t.containerSize.height}px`,
                      },
                      on: {
                        mouseenter: function (e) {
                          e.stopPropagation(), (t.isPreviewMaskHovered = !0);
                        },
                        mouseleave: function (e) {
                          e.stopPropagation(), (t.isPreviewMaskHovered = !1);
                        },
                      },
                    }),
                  ],
                ),
                e._v(" "),
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !t.isAvailable,
                        expression: "!isAvailable",
                      },
                    ],
                    key: "noPreview",
                    staticClass:
                      "uk-flex uk-flex-center uk-flex-middle slide-preview-notice uk-border-rounded",
                    style: {
                      width: "228px",
                      height: "128px",
                      textAlign: "center",
                    },
                  },
                  [
                    e.isMultiple
                      ? i("span", [
                          e._v(e._s(e.$T("Multiple topics selected."))),
                        ])
                      : i("span", [
                          e._v(e._s(e.$T("Current slides are not visible."))),
                        ]),
                  ],
                ),
              ],
            ),
          ]);
        },
        [],
        !1,
        null,
        "36870632",
        null,
      ).exports;
      var g = t(16704),
        y = t(7836),
        S = t(83567);
      const w = (0, n.aZ)({
        __name: "slide-theme",
        props: { aspect: String, themeId: String },
        setup(e) {
          const i = (0, n.FN)().proxy,
            t = (0, n.iH)(),
            o = (0, n.iH)(),
            l = (0, n.iH)(`popover-${(0, g.hb)()}`);
          return (
            (0, n.bv)(() => {
              i.$withUIKit((e) => {
                e.util.on(o.value, "show", () => {
                  var e;
                  null === (e = t.value) || void 0 === e || e.updateHeight();
                });
              });
            }),
            {
              __sfc: !0,
              vm: i,
              picker: t,
              popover: o,
              popoverId: l,
              Vue2Teleport: y.Z,
              ThemePicker: S.Z,
            }
          );
        },
      });
      const b = (0, m.Z)(
        w,
        function () {
          var e = this,
            i = e._self._c,
            t = e._self._setupProxy;
          return i(
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
            },
            [
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
                  staticClass: "uk-button uk-button-floating uk-width-1-1",
                  attrs: {
                    id: t.popoverId,
                    title: e.$T("Choose a different theme for Pitch Mode."),
                  },
                },
                [e._v("\n    " + e._s(e.$T("Change Theme")) + "\n  ")],
              ),
              e._v(" "),
              i(
                t.Vue2Teleport,
                { attrs: { to: "#popover-container-for-editor" } },
                [
                  i(
                    "div",
                    {
                      ref: "popover",
                      attrs: {
                        "uk-popover": "",
                        "data-pos": "bottom",
                        "data-sel-close": "button",
                        "data-target": `#${t.popoverId}`,
                        "data-toggle": `#${t.popoverId}`,
                      },
                    },
                    [
                      i(t.ThemePicker, {
                        ref: "picker",
                        attrs: { aspect: e.aspect, "theme-id": e.themeId },
                        on: { changeTheme: (i) => e.$emit("changeTheme", i) },
                      }),
                    ],
                    1,
                  ),
                ],
              ),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "06c0b8d4",
        null,
      ).exports;
      var C = t(50965),
        F = t(18621);
      const x = (0, n.aZ)({
        __name: "slide-options",
        props: {
          optionWidth: null,
          showWidth: null,
          currentOption: null,
          currentOptionName: null,
          displayOptions: null,
          displayOptionName: null,
          dividers: null,
          title: null,
        },
        emits: ["optionChanged"],
        setup(e, { emit: i }) {
          const t = e;
          return {
            __sfc: !0,
            popoverId: (0, n.iH)(`popover-${(0, g.hb)()}`),
            props: t,
            emit: i,
            onChangeOption: (e) => {
              e !== t.currentOption && i("optionChanged", e);
            },
            Vue2Teleport: y.Z,
          };
        },
      });
      const _ = (0, m.Z)(
          x,
          function () {
            var e = this,
              i = e._self._c,
              t = e._self._setupProxy;
            return i(
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
                staticClass: "uk-width-1-1",
              },
              [
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
                      "uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left",
                    staticStyle: { "min-width": "85px !important" },
                    style: [e.showWidth && { width: e.showWidth }],
                    attrs: { id: t.popoverId, title: e.title },
                  },
                  [
                    i("span", { staticClass: "uk-width-1-1" }, [
                      e._v(" " + e._s(e.currentOptionName[e.currentOption])),
                    ]),
                  ],
                ),
                e._v(" "),
                i(
                  t.Vue2Teleport,
                  { attrs: { to: "#popover-container-for-editor" } },
                  [
                    i(
                      "div",
                      {
                        ref: "popover",
                        staticClass: "uk-popover-contextual",
                        attrs: {
                          "uk-contextual-popover": "",
                          "data-sel-close": "[uk-menu] > li > button",
                          "data-target": `#${t.popoverId}`,
                          "data-toggle": `#${t.popoverId}`,
                        },
                      },
                      [
                        i(
                          "ul",
                          {
                            staticClass: "uk-overflow-auto uk-height-1-1",
                            attrs: { "uk-menu": "" },
                          },
                          [
                            e._l(e.displayOptions, function (n) {
                              return [
                                i("li", { key: n }, [
                                  i(
                                    "button",
                                    {
                                      class: {
                                        "uk-checked": n === e.currentOption,
                                      },
                                      staticStyle: {
                                        height: "24px",
                                        "shape-rendering": "crispEdges",
                                      },
                                      style: [
                                        e.optionWidth && {
                                          width: e.optionWidth,
                                        },
                                      ],
                                      attrs: {
                                        autofocus: n === e.currentOption,
                                      },
                                      on: {
                                        click: function (e) {
                                          return t.onChangeOption(n);
                                        },
                                      },
                                    },
                                    [
                                      i("span", [
                                        e._v(e._s(e.displayOptionName[n])),
                                      ]),
                                    ],
                                  ),
                                ]),
                                e._v(" "),
                                e.dividers?.includes(n)
                                  ? i("li", {
                                      key: n + "divider",
                                      staticClass: "uk-menu-divider",
                                    })
                                  : e._e(),
                              ];
                            }),
                          ],
                          2,
                        ),
                      ],
                    ),
                  ],
                ),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          "1a079f64",
          null,
        ).exports,
        T = (0, n.aZ)({
          __name: "slide-aspect",
          props: { aspect: null },
          emits: ["changeAspect"],
          setup(e, { emit: i }) {
            const t = (e, ...i) => (0, C.JE)().T(e, ...i),
              o = a.YN,
              l = (0, n.Fl)(() => ({
                Auto: t("AUTO"),
                "16:9": "16:9",
                "4:3": "4:3",
                "9:16": "9:16",
                "3:4": "3:4",
              }));
            return {
              __sfc: !0,
              $T: t,
              emit: i,
              displayOptions: o,
              optionName: l,
              changeAspect: function (e) {
                i("changeAspect", e);
                const t = {
                  Auto: "clickAspectRatioAuto",
                  "16:9": "clickAspectRatio16-9",
                  "4:3": "clickAspectRatio4-3",
                  "9:16": "clickAspectRatio9-16",
                  "3:4": "clickAspectRatio3-4",
                }[e];
                (0, F.L9)({
                  eventCategory: "PitchMode",
                  eventAction: "clickAspectRatioMenu",
                  eventName: t,
                });
              },
              Options: _,
            };
          },
        });
      t(84866);
      const k = (0, m.Z)(
        T,
        function () {
          var e = this,
            i = e._self._c,
            t = e._self._setupProxy;
          return i("div", [
            i(
              "div",
              { staticClass: "uk-flex uk-flex-between uk-flex-middle" },
              [
                i("div", { staticClass: "slide-panel-selection-title" }, [
                  e._v("\n      " + e._s(t.$T("Aspect Ratio")) + "\n    "),
                ]),
                e._v(" "),
                i(
                  "div",
                  [
                    i(t.Options, {
                      attrs: {
                        "show-width": "85px",
                        "option-width": "160px",
                        "current-option": e.aspect,
                        "current-option-name": t.optionName,
                        "display-options": t.displayOptions,
                        "display-option-name": t.optionName,
                        dividers: ["Auto", "4:3"],
                        title: t.$T("Choose a slide aspect ratio."),
                      },
                      on: { optionChanged: t.changeAspect },
                    }),
                  ],
                  1,
                ),
              ],
            ),
          ]);
        },
        [],
        !1,
        null,
        "00202376",
        null,
      ).exports;
      const {
        getSlideOption: I,
        setSlideOption: P,
        deleteSlideOption: E,
      } = (0, a.tT)();
      function L(e, i) {
        const t = (0, n.Fl)(() =>
            (function (e, i) {
              return e.reduce(
                (e, t) => {
                  const {
                    summarySkipped: n,
                    topicSkipped: o,
                    listSkipped: l,
                  } = (0, a._y)(i, t, !0);
                  return {
                    summarySlide: [...e.summarySlide, !n],
                    topicSlide: [...e.topicSlide, !o],
                    listSlide: [...e.listSlide, !l],
                  };
                },
                { summarySlide: [], topicSlide: [], listSlide: [] },
              );
            })(i.value, e.value),
          ),
          o = (0, n.iH)(M(i.value)),
          l = () => {
            o.value = M(i.value);
          },
          s = (0, n.Fl)(() => A([...new Set(o.value.summarySlide)])),
          r = (0, n.Fl)(() => {
            const e = [...new Set(t.value.summarySlide)];
            return 1 === e.length ? (e[0] ? "show" : "skip") : "unknown";
          }),
          d = (0, n.Fl)(() => A([...new Set(o.value.topicSlide)])),
          u = (0, n.Fl)(() => {
            const e = [...new Set(t.value.topicSlide)];
            return 1 === e.length ? (e[0] ? "show" : "skip") : "unknown";
          }),
          c = (0, n.Fl)(() => A([...new Set(o.value.listSlide)])),
          p = (0, n.Fl)(() => {
            const e = [...new Set(t.value.listSlide)];
            return 1 === e.length ? (e[0] ? "show" : "skip") : "unknown";
          });
        return (
          (0, n.YP)([e, i], () => l()),
          {
            currentSummarySlideVisibilityOption: s,
            defaultSummarySlideVisibility: r,
            currentTopicSlideVisibilityOption: d,
            defaultTopicSlideVisibility: u,
            currentListSlideVisibilityOption: c,
            defaultListSlideVisibility: p,
            makeSlideVisibilityUpdateHandler: (e) => (t) => {
              i.value.forEach((i) => ("auto" === t ? E(i, e) : P(i, e, t))),
                l();
            },
          }
        );
      }
      function A(e) {
        return e.length > 1 ? "multiple" : 1 === e.length ? e[0] : "";
      }
      function V(e) {
        return e.map((e) => {
          var i;
          return null !== (i = I(e, "summarySlideVisibility")) && void 0 !== i
            ? i
            : "auto";
        });
      }
      function O(e) {
        return e.map((e) => {
          var i;
          return null !== (i = I(e, "topicSlideVisibility")) && void 0 !== i
            ? i
            : "auto";
        });
      }
      function D(e) {
        return e.map((e) => {
          var i;
          return null !== (i = I(e, "listSlideVisibility")) && void 0 !== i
            ? i
            : "auto";
        });
      }
      function M(e) {
        return { summarySlide: V(e), topicSlide: O(e), listSlide: D(e) };
      }
      const {
        getSlideOption: N,
        setSlideOption: W,
        deleteSlideOption: B,
      } = (0, a.tT)();
      function R(e) {
        return e.map((e) => {
          var i;
          return null !== (i = N(e, "topicImagePlacement")) && void 0 !== i
            ? i
            : "auto";
        });
      }
      const { getSlideOption: z, setSlideOption: H } = (0, a.tT)();
      function $(e) {
        return e.map((e) => {
          var i;
          return null !== (i = z(e, "listSlideDelivery")) && void 0 !== i
            ? i
            : "auto";
        });
      }
      const { setSlideOption: U } = (0, a.tT)(),
        Z = ["brace-list", "bullet-list", "lyric-list", "fishbone", "timeline"];
      function j(e) {
        const i = (0, n.XI)(Y()),
          {
            currentSummarySlideVisibilityOption: t,
            defaultSummarySlideVisibility: o,
            currentTopicSlideVisibilityOption: l,
            defaultTopicSlideVisibility: s,
            currentListSlideVisibilityOption: r,
            defaultListSlideVisibility: d,
            makeSlideVisibilityUpdateHandler: u,
          } = L(i, e),
          {
            currentSlideImagePosition: c,
            defaultSlideImagePosition: p,
            changeSlideImagePotions: v,
          } = (function (e, i) {
            const t = (0, n.iH)(R(i.value)),
              o = () => {
                t.value = R(i.value);
              },
              l = (0, n.Fl)(() => {
                const e = [...new Set(t.value)];
                return e.length > 1 ? "multiple" : 1 === e.length ? e[0] : "";
              }),
              s = (0, n.Fl)(() => {
                const t = [
                  ...new Set(
                    i.value.map((i) => (0, a.WS)(e.value, i)).filter(Boolean),
                  ),
                ];
                return 1 === t.length ? t[0] : "unknown";
              });
            return (
              (0, n.YP)([e, i], () => o()),
              {
                currentSlideImagePosition: l,
                defaultSlideImagePosition: s,
                changeSlideImagePotions: (e) => {
                  i.value.forEach((i) =>
                    "auto" === e
                      ? B(i, "topicImagePlacement")
                      : W(i, "topicImagePlacement", e),
                  ),
                    o();
                },
              }
            );
          })(i, e),
          { currentListSlideDelivery: h, changeListSlideDelivery: m } =
            (function (e, i) {
              const t = (0, n.iH)($(i.value)),
                o = () => {
                  t.value = $(i.value);
                },
                l = (0, n.Fl)(() => {
                  const i = [...new Set(t.value)];
                  return i.length > 1
                    ? "multiple"
                    : 1 === i.length
                      ? "auto" === i[0]
                        ? e.value.defaultListSlideDelivery
                        : i[0]
                      : "";
                });
              return (
                (0, n.YP)([e, i], () => o()),
                {
                  currentListSlideDelivery: l,
                  changeListSlideDelivery: (e) => {
                    i.value.forEach((i) => H(i, "listSlideDelivery", e)), o();
                  },
                }
              );
            })(i, e),
          {
            currentListSlideLayout: f,
            availableListSlideLayouts: g,
            changeListSlideLayout: y,
          } = (function (e, i) {
            return {
              currentListSlideLayout: (0, n.Fl)(() => {
                const t = i.value
                  .map((i) => (0, a.qV)(e.value, i))
                  .filter(Boolean);
                return t.length > 1 ? "multiple" : 1 === t.length ? t[0] : "";
              }),
              availableListSlideLayouts: (0, n.Fl)(() => {
                const t = new Set(
                  i.value.map((i) => (0, a.rc)(e.value, i)).flat(),
                );
                return Z.filter((e) => t.has(e));
              }),
              changeListSlideLayout: (e) => {
                i.value.forEach((i) => U(i, "listSlideLayout", e));
              },
            };
          })(i, e);
        return {
          currentSummarySlideVisibilityOption: t,
          defaultSummarySlideVisibility: o,
          currentTopicSlideVisibilityOption: l,
          defaultTopicSlideVisibility: s,
          currentListSlideVisibilityOption: r,
          defaultListSlideVisibility: d,
          currentSlideImagePosition: c,
          defaultSlideImagePosition: p,
          currentListSlideDelivery: h,
          currentListSlideLayout: f,
          availableListSlideLayouts: g,
          changeSummarySlideVisibility: u("summarySlideVisibility"),
          changeTopicSlideVisibility: u("topicSlideVisibility"),
          changeListSlideVisibility: u("listSlideVisibility"),
          changeSlideImagePotions: v,
          changeListSlideDelivery: m,
          changeListSlideLayout: y,
          updateSlideshow: () => {
            i.value = Y();
          },
        };
      }
      function Y() {
        const {
          slideAspect: e,
          slideTheme: i,
          preferredLanguage: t,
        } = (0, d.Y)();
        return (0, a.sz)({
          contentProvider: (0, r.n2)(),
          slideSize: "Auto" === e.value ? "16:9" : e.value,
          slideTheme: i.value,
          disablesWatermark: !0,
          preferredLanguage: t.value,
        });
      }
      const q = (0, n.aZ)({
        __name: "slide-layout-options",
        props: { currentLayout: null, availableLayouts: null },
        emits: ["changeLayout"],
        setup(e, { emit: i }) {
          const t = e,
            o = (e, ...i) => (0, C.JE)().T(e, ...i),
            l = (0, n.Fl)(() => ({
              "brace-list": o("Set the layout as Brace List."),
              "bullet-list": o("Set the layout as Bullet List."),
              "lyric-list": o("Set the layout as Lyrics."),
              fishbone: o("Set the layout as Fishbone."),
              timeline: o("Set the layout as Timeline."),
            })),
            s = (0, n.Fl)(() => {
              switch (t.currentLayout) {
                case "fishbone-head":
                  return "fishbone";
                case "timeline-head":
                  return "timeline";
                default:
                  return t.currentLayout;
              }
            });
          return {
            __sfc: !0,
            props: t,
            emit: i,
            $T: o,
            layoutNames: l,
            activeLayoutType: s,
            changeLayout: (e) => {
              e !== t.currentLayout && i("changeLayout", e);
            },
          };
        },
      });
      t(2291);
      const J = (0, m.Z)(
          q,
          function () {
            var e = this,
              i = e._self._c,
              t = e._self._setupProxy;
            return i("div", [
              i(
                "ul",
                {
                  staticClass:
                    "uk-button-segment-group uk-child-width-expand uk-button-segment-divider uk-width-1-1 uk-flex",
                  attrs: {
                    title: t.$T(
                      "Choose the layout of subtopics as a slide in Pitch Mode.",
                    ),
                  },
                },
                e._l(e.availableLayouts, function (n) {
                  return i(
                    "li",
                    {
                      key: n,
                      class: { "uk-active": n === t.activeLayoutType },
                      attrs: { title: t.layoutNames[n] },
                    },
                    [
                      i("label", [
                        i("input", {
                          attrs: {
                            type: "radio",
                            disabled:
                              "fishbone-head" === e.currentLayout ||
                              "timeline-head" === e.currentLayout,
                            name: "segmentButton",
                          },
                          domProps: {
                            checked: n === t.activeLayoutType,
                            value: n,
                          },
                          on: {
                            change: function (e) {
                              return t.changeLayout(n);
                            },
                          },
                        }),
                        e._v(" "),
                        "fishbone" === n || "timeline" === n
                          ? i(
                              "span",
                              {
                                staticClass:
                                  "uk-button uk-button-segment uk-button-icon",
                              },
                              [
                                i("img", {
                                  attrs: {
                                    "data-src": e.$toResourceURL(
                                      `static/images/pitchmode/${"fishbone" === n ? "fishbone" : "timeline"}.svg`,
                                    ),
                                    "uk-svg": "",
                                  },
                                }),
                              ],
                            )
                          : i("span", {
                              staticClass:
                                "uk-button uk-button-segment uk-button-icon",
                              attrs: { "uk-icon": n },
                            }),
                      ]),
                    ],
                  );
                }),
                0,
              ),
            ]);
          },
          [],
          !1,
          null,
          "0d49d937",
          null,
        ).exports,
        X = (0, n.aZ)({
          __name: "slide-topic",
          props: { topicIds: null, isSummary: { type: Boolean } },
          setup(e, { expose: i }) {
            const t = e,
              l = (e, ...i) => (0, C.JE)().T(e, ...i),
              { document: s, activeSheetFigure: a } = (0, o.nZ)(),
              { preferredLanguage: r } = (0, C.S)(),
              d = (0, n.Fl)(() => t.topicIds),
              {
                currentSummarySlideVisibilityOption: u,
                currentTopicSlideVisibilityOption: c,
                currentListSlideVisibilityOption: p,
                currentSlideImagePosition: v,
                currentListSlideDelivery: h,
                currentListSlideLayout: m,
                defaultSummarySlideVisibility: f,
                defaultTopicSlideVisibility: g,
                defaultListSlideVisibility: y,
                defaultSlideImagePosition: S,
                availableListSlideLayouts: w,
                changeSummarySlideVisibility: b,
                changeTopicSlideVisibility: F,
                changeListSlideVisibility: x,
                changeSlideImagePotions: T,
                changeListSlideDelivery: k,
                changeListSlideLayout: I,
                updateSlideshow: P,
              } = j(d),
              E = (0, n.Fl)(() =>
                t.topicIds.every((e) => {
                  var i, t, n;
                  return !!(null ===
                    (n =
                      null ===
                        (t =
                          null === (i = s.value) || void 0 === i
                            ? void 0
                            : i.query({ id: e })) || void 0 === t
                        ? void 0
                        : t.asTopic()) || void 0 === n
                    ? void 0
                    : n.imageSource);
                }),
              ),
              L = (0, n.Fl)(() =>
                t.topicIds
                  .map((e) => {
                    var i, t, n, o;
                    return null !==
                      (o =
                        null ===
                          (n =
                            null ===
                              (t =
                                null === (i = s.value) || void 0 === i
                                  ? void 0
                                  : i.query({ id: e })) || void 0 === t
                              ? void 0
                              : t.asTopic()) || void 0 === n
                          ? void 0
                          : n.children) && void 0 !== o
                      ? o
                      : [];
                  })
                  .flat()
                  .some((e) => {
                    var i, t, n, o;
                    return ["mainTopic", "subTopic"].includes(
                      null ===
                        (o =
                          null ===
                            (n =
                              null ===
                                (t =
                                  null === (i = a.value) || void 0 === i
                                    ? void 0
                                    : i.topicFigureByTopicId) || void 0 === t
                                ? void 0
                                : t[e.id]) || void 0 === n
                            ? void 0
                            : n.modelAttributes) || void 0 === o
                        ? void 0
                        : o.primaryClass,
                    );
                  }),
              ),
              A = (0, n.Fl)(() =>
                "auto" === u.value ? "show" === f.value : "show" === u.value,
              ),
              V = (0, n.Fl)(() =>
                "auto" === p.value ? "show" === y.value : "show" === p.value,
              ),
              O = (0, n.Fl)(() =>
                "auto" === c.value ? "show" === g.value : "show" === c.value,
              ),
              D = (0, n.Fl)(() => ({
                show: l("Visible"),
                skip: l("Hidden"),
                auto: l("AUTO"),
                multiple: l("Multiple"),
                unknown: "",
              })),
              M = (0, n.Fl)(() => ({
                auto: l("AUTO"),
                left: l("Left"),
                right: l("Right"),
                aboveTitle: l("Top"),
                belowTitle: l("Bottom"),
                full: l("Back（Image Position）"),
                multiple: l("Multiple"),
                unknown: "",
              })),
              N = (0, n.Fl)(() => ({
                "one-by-one-drill-in": l("One by One - Drill in"),
                "one-by-one": l("One by One"),
                "all-at-once": l("All at Once"),
                multiple: l("Multiple"),
              })),
              W = (0, n.Fl)(() => {
                const e = D.value[f.value];
                return Object.assign(Object.assign({}, D.value), {
                  auto: l("AUTO") + (e ? ` (${e})` : ""),
                });
              }),
              B = (0, n.Fl)(() => {
                const e = D.value[g.value];
                return Object.assign(Object.assign({}, D.value), {
                  auto: l("AUTO") + (e ? ` (${e})` : ""),
                });
              }),
              R = (0, n.Fl)(() => {
                const e = D.value[y.value];
                return Object.assign(Object.assign({}, D.value), {
                  auto: l("AUTO") + (e ? ` (${e})` : ""),
                });
              }),
              z = (0, n.Fl)(() => {
                const e = M.value[S.value];
                return Object.assign(Object.assign({}, M.value), {
                  auto: l("AUTO") + (e ? ` (${e})` : ""),
                });
              });
            return (
              i({
                isTopicSlideVisible: O,
                isSummarySlideVisible: A,
                isListSlideVisible: V,
              }),
              (0, n.YP)(s, () => P()),
              {
                __sfc: !0,
                props: t,
                $T: l,
                document: s,
                activeSheetFigure: a,
                preferredLanguage: r,
                topicIds: d,
                currentSummarySlideVisibilityOption: u,
                currentTopicSlideVisibilityOption: c,
                currentListSlideVisibilityOption: p,
                currentSlideImagePosition: v,
                currentListSlideDelivery: h,
                currentListSlideLayout: m,
                defaultSummarySlideVisibility: f,
                defaultTopicSlideVisibility: g,
                defaultListSlideVisibility: y,
                defaultSlideImagePosition: S,
                availableListSlideLayouts: w,
                changeSummarySlideVisibility: b,
                changeTopicSlideVisibility: F,
                changeListSlideVisibility: x,
                changeSlideImagePotions: T,
                changeListSlideDelivery: k,
                changeListSlideLayout: I,
                updateSlideshow: P,
                isImageTopic: E,
                isListTopic: L,
                isSummarySlideVisible: A,
                isListSlideVisible: V,
                isTopicSlideVisible: O,
                visibilityOptions: ["auto", "show", "skip"],
                imagePositionOptions: [
                  "auto",
                  "left",
                  "right",
                  "aboveTitle",
                  "belowTitle",
                  "full",
                ],
                listSlideDeliveryOptions: [
                  "one-by-one-drill-in",
                  "one-by-one",
                  "all-at-once",
                ],
                visibilityNames: D,
                imagePositionNames: M,
                listSlideDeliveryNames: N,
                summaryDisplayNames: W,
                topicDisplayNames: B,
                listDisplayNames: R,
                imagePositionDisplayNames: z,
                Options: _,
                LayoutOptions: J,
              }
            );
          },
        });
      t(47462);
      const G = (0, m.Z)(
        X,
        function () {
          var e = this,
            i = e._self._c,
            t = e._self._setupProxy;
          return i(
            "div",
            [
              e.isSummary && t.currentSummarySlideVisibilityOption
                ? [
                    i(
                      "div",
                      { staticClass: "uk-flex uk-flex-between uk-flex-middle" },
                      [
                        i(
                          "span",
                          { staticClass: "slide-panel-selection-title" },
                          [e._v(e._s(t.$T("Summary Slide")))],
                        ),
                        e._v(" "),
                        i(
                          "div",
                          [
                            i(t.Options, {
                              attrs: {
                                "show-width": "85px",
                                "option-width": [
                                  "de-DE",
                                  "es",
                                  "id",
                                  "pt-PT",
                                  "ru-RU",
                                ].includes(t.preferredLanguage)
                                  ? "220px"
                                  : "160px",
                                "current-option":
                                  t.currentSummarySlideVisibilityOption,
                                "current-option-name": t.visibilityNames,
                                "display-options": t.visibilityOptions,
                                "display-option-name": t.summaryDisplayNames,
                                title: t.$T(
                                  "Choose a slide aspect ratio.Choose whether to display the summary as a slide in Pitch Mode.",
                                ),
                              },
                              on: {
                                optionChanged: t.changeSummarySlideVisibility,
                              },
                            }),
                          ],
                          1,
                        ),
                      ],
                    ),
                    e._v(" "),
                    i("hr", {
                      staticClass:
                        "uk-format-panel-divider uk-margin-top uk-margin-bottom",
                    }),
                  ]
                : e._e(),
              e._v(" "),
              t.currentTopicSlideVisibilityOption
                ? i(
                    "div",
                    { staticClass: "uk-flex uk-flex-between uk-flex-middle" },
                    [
                      i(
                        "span",
                        { staticClass: "slide-panel-selection-title" },
                        [e._v(e._s(t.$T("Topic Slide")))],
                      ),
                      e._v(" "),
                      i(
                        "div",
                        [
                          i(t.Options, {
                            attrs: {
                              "show-width": "85px",
                              "option-width": [
                                "de-DE",
                                "es",
                                "id",
                                "pt-PT",
                                "ru-RU",
                              ].includes(t.preferredLanguage)
                                ? "220px"
                                : "160px",
                              "current-option":
                                t.currentTopicSlideVisibilityOption,
                              "current-option-name": t.visibilityNames,
                              "display-options": t.visibilityOptions,
                              "display-option-name": t.topicDisplayNames,
                              title: t.$T(
                                "Choose whether to display the topic as a slide in Pitch Mode.",
                              ),
                            },
                            on: { optionChanged: t.changeTopicSlideVisibility },
                          }),
                        ],
                        1,
                      ),
                    ],
                  )
                : e._e(),
              e._v(" "),
              t.isImageTopic && t.currentSlideImagePosition
                ? i(
                    "div",
                    { staticStyle: { "margin-top": "16px" } },
                    [
                      i(
                        "div",
                        {
                          staticClass: "slide-panel-selection-subtitle",
                          staticStyle: { "margin-bottom": "4px" },
                        },
                        [
                          e._v(
                            "\n      " +
                              e._s(t.$T("Image Position")) +
                              "\n    ",
                          ),
                        ],
                      ),
                      e._v(" "),
                      i(t.Options, {
                        attrs: {
                          "current-option": t.currentSlideImagePosition,
                          "current-option-name": t.imagePositionNames,
                          "display-options": t.imagePositionOptions,
                          dividers: ["auto"],
                          "display-option-name": t.imagePositionDisplayNames,
                          title: t.$T(
                            "Choose the image position of the topic slide in Pitch Mode.",
                          ),
                        },
                        on: { optionChanged: t.changeSlideImagePotions },
                      }),
                    ],
                    1,
                  )
                : e._e(),
              e._v(" "),
              t.isListTopic
                ? [
                    i("hr", {
                      staticClass:
                        "uk-format-panel-divider uk-margin-top uk-margin-bottom",
                    }),
                    e._v(" "),
                    i(
                      "div",
                      { staticClass: "uk-flex uk-flex-between uk-flex-middle" },
                      [
                        i(
                          "span",
                          { staticClass: "slide-panel-selection-title" },
                          [e._v(e._s(t.$T("List Slide")))],
                        ),
                        e._v(" "),
                        i(
                          "div",
                          [
                            i(t.Options, {
                              attrs: {
                                "show-width": "85px",
                                "option-width": [
                                  "de-DE",
                                  "es",
                                  "id",
                                  "pt-PT",
                                  "ru-RU",
                                ].includes(t.preferredLanguage)
                                  ? "220px"
                                  : "160px",
                                "current-option":
                                  t.currentListSlideVisibilityOption,
                                "current-option-name": t.visibilityNames,
                                "display-options": t.visibilityOptions,
                                "display-option-name": t.listDisplayNames,
                                title: t.$T(
                                  "Choose whether to display subtopics as a slide in Pitch Mode.",
                                ),
                              },
                              on: {
                                optionChanged: t.changeListSlideVisibility,
                              },
                            }),
                          ],
                          1,
                        ),
                      ],
                    ),
                    e._v(" "),
                    t.isListSlideVisible && t.currentListSlideDelivery
                      ? i(
                          "div",
                          { staticStyle: { "margin-top": "16px" } },
                          [
                            i(
                              "div",
                              {
                                staticClass: "slide-panel-selection-subtitle",
                                staticStyle: { "margin-bottom": "4px" },
                              },
                              [
                                e._v(
                                  "\n        " +
                                    e._s(t.$T("Delivery")) +
                                    "\n      ",
                                ),
                              ],
                            ),
                            e._v(" "),
                            i(t.Options, {
                              attrs: {
                                "current-option": t.currentListSlideDelivery,
                                "current-option-name": t.listSlideDeliveryNames,
                                "display-options": t.listSlideDeliveryOptions,
                                "display-option-name": t.listSlideDeliveryNames,
                                title: t.$T(
                                  "Choose how to deliver subtopics as a slide in Pitch Mode.",
                                ),
                              },
                              on: { optionChanged: t.changeListSlideDelivery },
                            }),
                          ],
                          1,
                        )
                      : e._e(),
                    e._v(" "),
                    t.isListSlideVisible &&
                    !["multiple", ""].includes(t.currentListSlideLayout)
                      ? i(
                          "div",
                          { staticStyle: { "margin-top": "12px" } },
                          [
                            i(
                              "div",
                              {
                                staticClass: "slide-panel-selection-subtitle",
                                staticStyle: { "margin-bottom": "4px" },
                              },
                              [
                                e._v(
                                  "\n        " +
                                    e._s(t.$T("Layout")) +
                                    "\n      ",
                                ),
                              ],
                            ),
                            e._v(" "),
                            i(t.LayoutOptions, {
                              attrs: {
                                "current-layout": t.currentListSlideLayout,
                                "available-layouts":
                                  t.availableListSlideLayouts,
                              },
                              on: { changeLayout: t.changeListSlideLayout },
                            }),
                          ],
                          1,
                        )
                      : e._e(),
                  ]
                : e._e(),
            ],
            2,
          );
        },
        [],
        !1,
        null,
        "fc932c80",
        null,
      ).exports;
      var K = function (e, i, t, n) {
        return new (t || (t = Promise))(function (o, l) {
          function s(e) {
            try {
              r(n.next(e));
            } catch (e) {
              l(e);
            }
          }
          function a(e) {
            try {
              r(n.throw(e));
            } catch (e) {
              l(e);
            }
          }
          function r(e) {
            var i;
            e.done
              ? o(e.value)
              : ((i = e.value),
                i instanceof t
                  ? i
                  : new t(function (e) {
                      e(i);
                    })).then(s, a);
          }
          r((n = n.apply(e, i || [])).next());
        });
      };
      const Q = (0, n.aZ)({
        __name: "slide-panel",
        setup(e) {
          const { selection: i, document: t } = (0, o.nZ)(),
            a = (0, n.iH)(),
            r = (0, n.iH)(),
            d = (0, n.Fl)(() => {
              var e;
              return !!(null === (e = r.value) || void 0 === e
                ? void 0
                : e.isSummarySlideVisible);
            }),
            u = (0, n.Fl)(() => {
              var e;
              return !!(null === (e = r.value) || void 0 === e
                ? void 0
                : e.isTopicSlideVisible);
            }),
            c = (0, n.Fl)(() => {
              var e;
              return !!(null === (e = r.value) || void 0 === e
                ? void 0
                : e.isListSlideVisible);
            }),
            {
              slideTheme: p,
              slideAspect: v,
              updateSlideThemeSetting: h,
              updateSlideAspectSetting: m,
            } = (0, s.Y$)(),
            g = (0, n.Fl)(() => i.value.isMulti),
            y = (0, n.Fl)(() =>
              "topic" === i.value.type ? i.value.modelIds : [],
            ),
            S = (0, n.Fl)(() =>
              y.value.every((e) => {
                var i, n, o;
                return (
                  "summary" ===
                  (null ===
                    (o =
                      null ===
                        (n =
                          null === (i = t.value) || void 0 === i
                            ? void 0
                            : i.query({ id: e })) || void 0 === n
                        ? void 0
                        : n.asTopic()) || void 0 === o
                    ? void 0
                    : o.topicType)
                );
              }),
            ),
            w = (0, n.iH)(!0),
            C = (0, l.Ds)(
              () =>
                K(this, void 0, void 0, function* () {
                  var e;
                  (w.value = !1),
                    yield new Promise((e) => setTimeout(e, 1)),
                    (w.value = !0),
                    null === (e = a.value) || void 0 === e || e.startNewPlay();
                }),
              200,
            ),
            F = (0, n.iH)(!1);
          return (
            (0, n.bv)(() => {
              (F.value = !0), C(), (0, n.YP)([t, p, v, y], C);
            }),
            {
              __sfc: !0,
              selection: i,
              document: t,
              preview: a,
              topic: r,
              isSummarySlideVisible: d,
              isTopicSlideVisible: u,
              isListSlideVisible: c,
              slideTheme: p,
              slideAspect: v,
              updateSlideThemeSetting: h,
              updateSlideAspectSetting: m,
              isMultiple: g,
              topicIds: y,
              isSummary: S,
              startFadeAnimation: w,
              changeSlideTheme: (e) => {
                p.value !== e && h(e);
              },
              changeSlideAspect: (e) => {
                v.value !== e && m(e);
              },
              renderPreview: C,
              mounted: F,
              SlidePreview: f,
              theme: b,
              Aspect: k,
              SlideTopic: G,
            }
          );
        },
      });
      t(42522);
      const ee = (0, m.Z)(
        Q,
        function () {
          var e = this,
            i = e._self._c,
            t = e._self._setupProxy;
          return i(
            "div",
            { staticClass: "uk-format-panel uk-slide-panel" },
            [
              t.mounted
                ? [
                    i(
                      "div",
                      {
                        staticClass:
                          "uk-format-panel-section uk-padding-remove-bottom",
                      },
                      [
                        i(
                          "div",
                          {
                            staticClass: "preview-title",
                            staticStyle: { "margin-bottom": "12px" },
                          },
                          [
                            e._v(
                              "\n        " +
                                e._s(e.$T("Display in Pitch Mode")) +
                                "\n      ",
                            ),
                          ],
                        ),
                        e._v(" "),
                        i(
                          "transition",
                          { attrs: { name: "fade", mode: "out-in" } },
                          [
                            i(t.SlidePreview, {
                              ref: "preview",
                              class: { animate: t.startFadeAnimation },
                              attrs: {
                                "is-list-slide-visible": t.isListSlideVisible,
                                "is-summary-slide-visible":
                                  t.isSummarySlideVisible,
                                "is-topic-slide-visible": t.isTopicSlideVisible,
                                aspect: t.slideAspect,
                                "is-multiple": t.isMultiple,
                                "topic-ids": t.topicIds,
                                "is-summary": t.isSummary,
                              },
                            }),
                          ],
                          1,
                        ),
                      ],
                      1,
                    ),
                    e._v(" "),
                    i(
                      "div",
                      { staticClass: "uk-format-panel-section" },
                      [
                        i(t.theme, {
                          staticStyle: { "margin-bottom": "12px" },
                          attrs: {
                            "aspect-ratio": t.slideAspect,
                            "theme-id": t.slideTheme,
                          },
                          on: { changeTheme: t.changeSlideTheme },
                        }),
                        e._v(" "),
                        i(t.Aspect, {
                          attrs: { aspect: t.slideAspect },
                          on: { changeAspect: t.changeSlideAspect },
                        }),
                        e._v(" "),
                        i("hr", {
                          staticClass:
                            "uk-format-panel-divider uk-margin-top uk-margin-bottom",
                        }),
                        e._v(" "),
                        i(t.SlideTopic, {
                          ref: "topic",
                          attrs: {
                            "topic-ids": t.topicIds,
                            "is-summary": t.isSummary,
                          },
                        }),
                      ],
                      1,
                    ),
                  ]
                : e._e(),
            ],
            2,
          );
        },
        [],
        !1,
        null,
        "74f67b6e",
        null,
      ).exports;
    },
    16595: (e, i, t) => {
      var n = t(74551);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, t(45346).Z)("5732bd56", n, !0, {});
    },
    84866: (e, i, t) => {
      var n = t(52172);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, t(45346).Z)("eca96ef6", n, !0, {});
    },
    2291: (e, i, t) => {
      var n = t(36349);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, t(45346).Z)("abcd4d12", n, !0, {});
    },
    69773: (e, i, t) => {
      var n = t(7230);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, t(45346).Z)("a8132e08", n, !0, {});
    },
    47462: (e, i, t) => {
      var n = t(14484);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, t(45346).Z)("ffc3d656", n, !0, {});
    },
    42522: (e, i, t) => {
      var n = t(74188);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals);
      (0, t(45346).Z)("2897dc61", n, !0, {});
    },
  },
]);
