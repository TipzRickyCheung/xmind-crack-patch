"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [2205, 716],
  {
    70716: (e, i, t) => {
      var o;
      t.d(i, { v: () => o, w: () => n }),
        (function (e) {
          (e.LOGICRIGHT = "org.xmind.ui.logic.right"),
            (e.LOGICLEFT = "org.xmind.ui.logic.left"),
            (e.TREERIGHT = "org.xmind.ui.tree.right"),
            (e.TREELEFT = "org.xmind.ui.tree.left"),
            (e.TREESIDED = "org.xmind.ui.timeline.vertical"),
            (e.ORGCHARTDOWN = "org.xmind.ui.org-chart.down"),
            (e.ORGCHARTUP = "org.xmind.ui.org-chart.up"),
            (e.MAPCLOCKWISE = "org.xmind.ui.map.clockwise"),
            (e.MAPANTICLOCKWISE = "org.xmind.ui.map.anticlockwise"),
            (e.MAP = "org.xmind.ui.map"),
            (e.MAPUNBALANCED = "org.xmind.ui.map.unbalanced"),
            (e.MAPFLOATING = "org.xmind.ui.map.floating"),
            (e.MAPFLOATINGCLOCKWISE = "org.xmind.ui.map.floating.clockwise"),
            (e.MAPFLOATINGANTICLOCKWISE =
              "org.xmind.ui.map.floating.anticlockwise"),
            (e.TIMELINETHROUGHVERTICAL =
              "org.xmind.ui.timeline.through.vertical"),
            (e.TIMELINESIDEDHORIZONTAL =
              "org.xmind.ui.timeline.sided.horizontal"),
            (e.TIMELINEHORIZONTAL = "org.xmind.ui.timeline.horizontal"),
            (e.FISHBONELEFTHEADED = "org.xmind.ui.fishbone.leftHeaded"),
            (e.LEFTHEADTOPBONE =
              "org.xmind.ui.fishbone.structure.lefthead.topbone"),
            (e.LEFTHEADBOTTOMBONE =
              "org.xmind.ui.fishbone.structure.lefthead.bottombone"),
            (e.FISHBONERIGHTHEADED = "org.xmind.ui.fishbone.rightHeaded"),
            (e.RIGHTHEADTOPBONE =
              "org.xmind.ui.fishbone.structure.righthead.topbone"),
            (e.RIGHTHEADBOTTOMBONE =
              "org.xmind.ui.fishbone.structure.righthead.bottombone"),
            (e.SPREADSHEET = "org.xmind.ui.spreadsheet"),
            (e.COLUMNSPREADSHEET = "org.xmind.ui.spreadsheet.column"),
            (e.TREETABLE = "org.xmind.ui.treetable"),
            (e.TOPTITLETREETABLE = "org.xmind.ui.treetable.toptitle"),
            (e.SPREADSHEETROW = "org.xmind.ui.structure.spreadsheet.row"),
            (e.SPREADSHEETCOLUMN = "org.xmind.ui.structure.column.spreadsheet"),
            (e.FISHBONELEFTHEADTOP = "org.xmind.ui.fishbone.leftHeaded.top"),
            (e.FISHBONELEFTHEADBOTTOM =
              "org.xmind.ui.fishbone.leftHeaded.bottom"),
            (e.FISHBONERIGHTHEADTOP = "org.xmind.ui.fishbone.rightHeaded.top"),
            (e.FISHBONERIGHTHEADBOTTOM =
              "org.xmind.ui.fishbone.rightHeaded.bottom"),
            (e.TIMELINEHORIZONTALUP = "org.xmind.ui.timeline.horizontal.up"),
            (e.TIMELINEHORIZONTALDOWN =
              "org.xmind.ui.timeline.horizontal.down"),
            (e.LOGICCHARTRIGHT = "org.xmind.ui.logic-chart.right"),
            (e.LOGICCHARTLEFT = "org.xmind.ui.logic-chart.left"),
            (e.BRACERIGHT = "org.xmind.ui.brace.right"),
            (e.BRACELEFT = "org.xmind.ui.brace.left"),
            (e.TIMELINEVERTICAL = "org.xmind.ui.timeline.vertical");
        })(o || (o = {}));
      const n = {
        [o.MAPUNBALANCED]: "map-unbalance",
        [o.MAPCLOCKWISE]: "map-clockwise",
        [o.LOGICRIGHT]: "logic-right",
        [o.LOGICLEFT]: "logic-left",
        [o.BRACERIGHT]: "brace-right",
        [o.BRACELEFT]: "brace-left",
        [o.TREERIGHT]: "tree-right",
        [o.TREELEFT]: "tree-left",
        [o.ORGCHARTDOWN]: "org-down",
        [o.ORGCHARTUP]: "org-up",
        [o.FISHBONELEFTHEADED]: "fishbone-left",
        [o.FISHBONERIGHTHEADED]: "fishbone-right",
        [o.TIMELINEHORIZONTAL]: "timeline-horizontal",
        [o.TIMELINEVERTICAL]: "timeline-vertical",
        [o.TIMELINETHROUGHVERTICAL]: "timeline-through-vertical",
        [o.TIMELINESIDEDHORIZONTAL]: "timeline-sided-horizontal",
        [o.SPREADSHEET]: "matrix-row",
        [o.COLUMNSPREADSHEET]: "matrix-column",
        [o.TOPTITLETREETABLE]: "tree-table-column",
        [o.TREETABLE]: "tree-table-row",
      };
    },
    92344: (e, i, t) => {
      t.d(i, {
        yh: () => d,
        dM: () => m,
        I6: () => v,
        zF: () => p,
        Y$: () => l.Y,
      });
      var o = t(94025),
        n = t(24813),
        l = t(38853);
      class r {
        constructor() {
          this.eventCallbacks = new Map();
        }
        on(e, i) {
          var t;
          const o =
            null !== (t = this.eventCallbacks.get(e)) && void 0 !== t ? t : [];
          this.eventCallbacks.set(e, [...o, i]);
        }
        off(e, i) {
          var t;
          let o =
            null !== (t = this.eventCallbacks.get(e)) && void 0 !== t ? t : [];
          (o = o.filter((e) => e !== i)), this.eventCallbacks.set(e, o);
        }
        emit(e) {
          const i = this.eventCallbacks.get(e.eventName);
          if (i) for (const t of i) t(e);
        }
        unload() {
          this.eventCallbacks = new Map();
        }
      }
      var s = function (e, i, t, o) {
        return new (t || (t = Promise))(function (n, l) {
          function r(e) {
            try {
              d(o.next(e));
            } catch (e) {
              l(e);
            }
          }
          function s(e) {
            try {
              d(o.throw(e));
            } catch (e) {
              l(e);
            }
          }
          function d(e) {
            var i;
            e.done
              ? n(e.value)
              : ((i = e.value),
                i instanceof t
                  ? i
                  : new t(function (e) {
                      e(i);
                    })).then(r, s);
          }
          d((o = o.apply(e, i || [])).next());
        });
      };
      class d extends r {
        constructor(e) {
          var i;
          super(),
            (this._presenters = []),
            (this._isStarted = !1),
            (this._disableSettingsUpdate = !1),
            (this._traveledTopicSet = new Set()),
            (this._needSubscriptionHint = !1),
            (this.slideControl = (e) =>
              s(this, void 0, void 0, function* () {
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
          var i, t, l, r;
          const s = e.contentProviderData
              ? (0, n.xm)(e.contentProviderData)
              : (0, n.n2)(),
            d =
              null !== (i = e.defaultAspect) && void 0 !== i
                ? i
                : this.settings.slideAspect.value,
            a =
              "Auto" === d
                ? null !==
                    (l =
                      null === (t = e.suggestedSlideSize) || void 0 === t
                        ? void 0
                        : t.value) && void 0 !== l
                  ? l
                  : "16:9"
                : d;
          (this._slideshow = new o.ur({
            contentProvider: s,
            slideTheme:
              null !== (r = e.defaultSlideTheme) && void 0 !== r
                ? r
                : this.settings.slideTheme.value,
            slideSize: a,
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
          var i, t, n;
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
          this.slideshow.changeSlideSize(o.IE[l]),
            !this._disableSettingsUpdate &&
              (null === (n = this.settings) ||
                void 0 === n ||
                n.updateSlideAspectSetting(e));
        }
        start(e) {
          return s(this, void 0, void 0, function* () {
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
      var a = t(90435),
        u = t(16704),
        c = t(54856),
        h = function (e, i, t, o) {
          return new (t || (t = Promise))(function (n, l) {
            function r(e) {
              try {
                d(o.next(e));
              } catch (e) {
                l(e);
              }
            }
            function s(e) {
              try {
                d(o.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function d(e) {
              var i;
              e.done
                ? n(e.value)
                : ((i = e.value),
                  i instanceof t
                    ? i
                    : new t(function (e) {
                        e(i);
                      })).then(r, s);
            }
            d((o = o.apply(e, i || [])).next());
          });
        };
      function p() {
        const e = (0, u.hb)(),
          i = a.ZP.route(c.OV.CONNECT_MAIN(e), (e) =>
            h(this, void 0, void 0, function* () {
              switch (e.type) {
                case "retrieveContent":
                  return JSON.stringify(yield (0, n.d4)());
                case "dismiss":
                  return i();
                case "openHyperlink":
                  return null;
              }
            }),
          );
        return e;
      }
      function v(e) {
        return h(this, void 0, void 0, function* () {
          const i = yield a.ZP.fetch(c.OV.CONNECT_MAIN(e), {
            type: "retrieveContent",
          });
          return JSON.parse(i);
        });
      }
      function m(e) {
        a.ZP.fetch(c.OV.CONNECT_MAIN(e), { type: "dismiss" });
      }
    },
    38853: (e, i, t) => {
      t.d(i, { Y: () => a });
      var o = t(2954),
        n = t(50965),
        l = t(96160),
        r = t(24813);
      function s(e) {
        var i, t;
        return null !==
          (t =
            null === (i = (0, r.pP)(e)) || void 0 === i
              ? void 0
              : i["slide-appearance"]) && void 0 !== t
          ? t
          : "default";
      }
      function d(e) {
        var i, t;
        return null !==
          (t =
            null === (i = (0, r.pP)(e)) || void 0 === i
              ? void 0
              : i["slide-aspect-ratio"]) && void 0 !== t
          ? t
          : "Auto";
      }
      const a = (function () {
        const { activeSheet: e } = (0, l.nZ)(),
          i = (0, o.Fl)(() => {
            var i;
            return null === (i = e.value) || void 0 === i
              ? void 0
              : i.rootTopic.id;
          }),
          t = (0, o.Fl)(() => !(0, n.rs)().disableAnimation),
          a = (0, o.Fl)(
            () => !true || (0, n.rs)().watermarkEnabled,
          ),
          u = (0, o.iH)(d(i.value)),
          c = (0, o.iH)(s(i.value)),
          h = (0, o.Fl)(() =>
            "zh-CN" === (0, n.S)().language ||
            "zh-CN" === (0, n.S)().defaultLanguage
              ? "zh"
              : "en",
          ),
          p = (e) => {
            (0, n.rs)().updateSettings({ disableAnimation: !e });
          },
          v = (e) => {
            (0, n.rs)().updateSettings({ watermarkEnabled: e });
          },
          m = (e) => {
            e !== s(i.value) &&
              ((0, r.nh)(i.value, { "slide-appearance": e }), (c.value = e));
          },
          g = (e) => {
            e !== d(i.value) &&
              ((0, r.nh)(i.value, { "slide-aspect-ratio": e }), (u.value = e));
          };
        return (
          (0, o.YP)(
            () => i.value,
            (e) => {
              (u.value = d(e)), (c.value = s(e));
            },
          ),
          () => ({
            animationEnabled: t,
            watermarkEnabled: a,
            slideTheme: (0, o.Fl)(() => c.value),
            slideAspect: (0, o.Fl)(() => u.value),
            preferredLanguage: h,
            updateAnimationSetting: p,
            updateWatermarkSetting: v,
            updateSlideThemeSetting: m,
            updateSlideAspectSetting: g,
          })
        );
      })();
    },
    94025: (e, i, t) => {
      t.d(i, {
        CU: () => s,
        YN: () => d,
        ur: () => o.Slideshow,
        I2: () => o.SlideshowExporter,
        rc: () => v,
        qV: () => p,
        WS: () => h,
        bh: () => u,
        sz: () => a,
        _y: () => c,
        _p: () => o.previewSlidesScopedBy,
        IE: () => o.slideSizes,
        hf: () => m,
        tT: () => r,
      });
      var o = t(32118),
        n = t(24813);
      const l = {
        summarySlideVisibility: "summary-slide-visibility",
        topicSlideVisibility: "topic-slide-visibility",
        topicImagePlacement: "topic-slide-image-placement",
        listSlideVisibility: "list-slide-visibility",
        listSlideDelivery: "list-slide-delivery",
        listSlideLayout: "list-slide-layout",
      };
      function r() {
        const e = (e, i, t) => (0, n.nh)(e, { [l[i]]: t });
        return {
          getSlideOption: (e, i) => {
            var t;
            return null === (t = (0, n.pP)(e)) || void 0 === t
              ? void 0
              : t[l[i]];
          },
          setSlideOption: e,
          deleteSlideOption: (i, t) => e(i, t),
        };
      }
      const s = "org.xmind.ui.ice-cream-pancake",
        d = ["Auto", "16:9", "4:3", "9:16", "3:4"];
      function a(e) {
        return new o.Slideshow(e);
      }
      function u(e = {}) {
        const {
            initialSlide: i,
            perspectiveMode: t,
            viewStyle: n,
            contentStyle: l,
          } = e,
          r = new o.PresentationView({ initialSlide: i });
        return (
          t
            ? ((r.allowsActivatingPresenterPerspectiveMode = !0),
              (r.mode = "presenterPerspective"))
            : ((r.allowsActivatingPresenterPerspectiveMode = !1),
              (r.mode = "presentation")),
          n && Object.keys(n).forEach((e) => (r.el.style[e] = n[e])),
          l && Object.keys(l).forEach((e) => (r.contentEl.style[e] = l[e])),
          r
        );
      }
      function c(e, i, t) {
        return {
          topicSkipped: (0, o.isSlideSkippedScopedBy)(e, i, "topic", {
            ignoresUserValue: t,
          }),
          listSkipped: (0, o.isSlideSkippedScopedBy)(e, i, "list", {
            ignoresUserValue: t,
          }),
          summarySkipped: (0, o.isSlideSkippedScopedBy)(e, i, "summary", {
            ignoresUserValue: t,
          }),
        };
      }
      function h(e, i) {
        const t = (0, o.computeSlideContent)(
          i,
          e.contentProvider,
          e.defaultListSlideDelivery,
        );
        return t && t.topic.image
          ? (0, o.computeTopicSlideImagePlacement)(
              e.slideSize,
              t,
              t.topic.image,
              { ignoresUserValue: !0 },
            )
          : null;
      }
      function p(e, i) {
        return (0, o.computeSlideLayout)(
          "list",
          e.slideSize,
          e.getSlideContent(i),
        );
      }
      function v(e, i) {
        return (0, o.getEligibleSlideLayouts)("list", e.getSlideContent(i));
      }
      function m(e, i) {
        const t = e.getSlideContent(i.topicId).computedListSlideDelivery;
        let o = [];
        if (
          ("list" === i.type &&
            "all-at-once" === t &&
            (o = [...o, ...(i.subtopics || [])]),
          i.boxes)
        ) {
          const e = (t) => {
            for (const n of t) {
              if (
                (n.id.startsWith("topic:title:") ||
                  n.id.startsWith("topic:image:")) &&
                n.opacity
              ) {
                const e = n.id.split(":")[2];
                i.subtopics.includes(e) && o.push(n.id.split(":")[2]);
              }
              "children" in n && e(n.children);
            }
          };
          e(i.boxes);
        }
        const n = i.topicId,
          l = [...new Set(o)].filter((e) => e !== n);
        return { topicId: n, subTopicIds: l };
      }
    },
    7703: (e, i, t) => {
      t.d(i, {
        yh: () => o.yh,
        Nn: () => g,
        c4: () => f,
        XT: () => C.XT,
        iA: () => C.iA,
        vN: () => F,
        dM: () => o.dM,
        HZ: () => w,
        Su: () => T,
        I6: () => o.I6,
        zF: () => o.zF,
        Y$: () => o.Y$,
        _x: () => C._x,
      });
      var o = t(92344),
        n = t(90435),
        l = t(2954),
        r = t(94025),
        s = t(54856),
        d = t(86633),
        a = function (e, i, t, o) {
          return new (t || (t = Promise))(function (n, l) {
            function r(e) {
              try {
                d(o.next(e));
              } catch (e) {
                l(e);
              }
            }
            function s(e) {
              try {
                d(o.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function d(e) {
              var i;
              e.done
                ? n(e.value)
                : ((i = e.value),
                  i instanceof t
                    ? i
                    : new t(function (e) {
                        e(i);
                      })).then(r, s);
            }
            d((o = o.apply(e, i || [])).next());
          });
        };
      const u = (0, d.ZP)("pitchmode");
      class c {
        sendMessage(e, i) {
          return a(this, void 0, void 0, function* () {
            try {
              return yield n.ZP.fetch(s.OV.SUB_COMMAND(this.proxyId), {
                command: e,
                payload: i,
              });
            } catch (e) {
              return u.warn("SendMessage: ", e), e;
            }
          });
        }
        performTransition(e) {
          return a(this, void 0, void 0, function* () {
            yield this.sendMessage("performTransition", e);
          });
        }
        performStateChange(e, i) {
          return a(this, void 0, void 0, function* () {
            yield this.sendMessage("performStateChange", {
              state: e,
              animationOptions: i,
            });
          });
        }
        preloadTransition(e) {
          this.sendMessage("preloadTransition", e);
        }
        presentEndingScreen(e, i, t, o, n) {
          return a(this, void 0, void 0, function* () {
            this.sendMessage("presentEndingscreen", {
              content: e,
              slideSize: i,
              epilogueSlide: t,
              backgroundColor: o,
              options: n,
            });
          });
        }
        dismissEndingScreen(e) {
          return a(this, void 0, void 0, function* () {
            this.sendMessage("dismissEndingscreen", e);
          });
        }
        presentModalDisplay(e, i) {
          return a(this, void 0, void 0, function* () {
            this.sendMessage("presentModalDisplay", { options: e, boxId: i });
          });
        }
        dismissModalDisplay(e) {
          return a(this, void 0, void 0, function* () {
            this.sendMessage("dismissModalDisplay", { contentType: e });
          });
        }
        constructor(e) {
          this.proxyId = e;
        }
        unload() {}
      }
      var h = t(16704),
        p = function (e, i, t, o) {
          return new (t || (t = Promise))(function (n, l) {
            function r(e) {
              try {
                d(o.next(e));
              } catch (e) {
                l(e);
              }
            }
            function s(e) {
              try {
                d(o.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function d(e) {
              var i;
              e.done
                ? n(e.value)
                : ((i = e.value),
                  i instanceof t
                    ? i
                    : new t(function (e) {
                        e(i);
                      })).then(r, s);
            }
            d((o = o.apply(e, i || [])).next());
          });
        };
      class v {
        constructor() {
          (this.ready = (0, l.iH)(!1)),
            (this.isProxiedPresenter = !1),
            (this._id = (0, h.hb)());
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
          return p(this, void 0, void 0, function* () {});
        }
        stateChangedHandler() {}
        unload() {}
      }
      var m = function (e, i, t, o) {
        return new (t || (t = Promise))(function (n, l) {
          function r(e) {
            try {
              d(o.next(e));
            } catch (e) {
              l(e);
            }
          }
          function s(e) {
            try {
              d(o.throw(e));
            } catch (e) {
              l(e);
            }
          }
          function d(e) {
            var i;
            e.done
              ? n(e.value)
              : ((i = e.value),
                i instanceof t
                  ? i
                  : new t(function (e) {
                      e(i);
                    })).then(r, s);
          }
          d((o = o.apply(e, i || [])).next());
        });
      };
      class g extends v {
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
          this._presentationView = (0, r.bh)({
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
      class f extends v {
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
              n.ZP.route(
                s.OV.CONNECT_MAIN(e),
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
      class F extends g {
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
                      n.ZP.fetch(s.OV.CONNECT_MAIN(this.remoteWindowId)),
                      new Promise((e) => setTimeout(e, 1e3)),
                    ])) || (yield e())
                  );
                }),
              i = yield e();
            var t, o;
            this.createPresentationView(i.presentationViewOptions),
              (t = this._presentationView),
              (o = i.proxyId),
              n.ZP.route(s.OV.SUB_COMMAND(o), (e) => {
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
      var C = t(28086),
        S = t(91324),
        E = t(38853);
      function w(e, i) {
        const t = (i) => {
          (function (e, i) {
            const t = (0, S.Ds)(e.slideControl, 100),
              { animationEnabled: o } = (0, E.Y)();
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
                return e.switchAnimationOption(!o.value), !0;
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
      var y = t(50965);
      function T(e, i) {
        return (
          e.on("playWebVideo", ({ payload: e }) => {
            var t, o, n;
            const l =
                null !==
                  (o =
                    null === (t = null == i ? void 0 : i.subWindow) ||
                    void 0 === t
                      ? void 0
                      : t.getBounds()) && void 0 !== o
                  ? o
                  : null === (n = null == i ? void 0 : i.mainWindow) ||
                      void 0 === n
                    ? void 0
                    : n.getBounds(),
              r = l
                ? Object.assign(Object.assign({}, l), { fullscreen: !0 })
                : null;
            !(function (e) {
              const { handleCommand: i } = (0, y.JX)(),
                { videoSource: t, overrideSetting: o } = e;
              t && i("videoViewer", { url: t, overrideSetting: o });
            })({ videoSource: e.videoSource, overrideSetting: r });
          }),
          e
        );
      }
    },
    24813: (e, i, t) => {
      t.d(i, {
        xm: () => v,
        pP: () => m,
        n2: () => h,
        d4: () => p,
        nh: () => g,
      });
      var o = t(2954),
        n = t(94025),
        l = t(70716),
        r = t(96160);
      const {
          TopicQuickStyleClassName: s,
          PrimaryClassName: d,
          TopicPrimaryClassName: a,
        } = r.viewerKit,
        u = Object.freeze({
          default: {
            [d.Map]: {
              fillColor: "#101010",
              multiLineColors: ["#F6F6F6"].join(" "),
            },
            [d.Relationship]: { lineColor: "#F6F6F6", textColor: "#FFFFFF" },
            [d.Boundary]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [d.Summary]: {},
            [a.CentralTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [a.MainTopic]: { fillColor: "#E3E3E3", textColor: "#000000" },
            [a.Subtopic]: { fillColor: "#B9B9B9", textColor: "#000000" },
            [a.FloatingTopic]: { fillColor: "#BABABA", textColor: "#000000" },
            [a.CalloutTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [a.SummaryTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [s.VeryImportant]: { fillColor: "#A43838" },
            [s.Important]: { fillColor: "#CFA362", textColor: "#000000" },
            [s.CrossOut]: {},
          },
          light: {
            [d.Map]: {
              fillColor: "#F4F4F4",
              multiLineColors: ["#282828"].join(" "),
            },
            [d.Relationship]: { lineColor: "#282828", textColor: "#000000" },
            [d.Boundary]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [d.Summary]: {},
            [a.CentralTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [a.MainTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [a.Subtopic]: { fillColor: "#4F4F4F", textColor: "#FFFFFF" },
            [a.FloatingTopic]: { fillColor: "#4F4F4F", textColor: "#FFFFFF" },
            [a.CalloutTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [a.SummaryTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [s.VeryImportant]: { fillColor: "#A43838" },
            [s.Important]: { fillColor: "#CFA362", textColor: "#000000" },
            [s.CrossOut]: {},
          },
          Innocence: {
            [d.Map]: {
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
            [d.Relationship]: { lineColor: "#F06767", textColor: "#F7FFF4" },
            [d.Boundary]: { fillColor: "#F06767", textColor: "#F7FFF4" },
            [d.Summary]: {},
            [a.CentralTopic]: { fillColor: "#F06767" },
            [a.MainTopic]: { textColor: "#000000" },
            [a.Subtopic]: { textColor: "#000000" },
            [a.FloatingTopic]: { fillColor: "#797979", textColor: "#F7FFF4" },
            [a.CalloutTopic]: { fillColor: "#F06767", textColor: "#F7FFF4" },
            [a.SummaryTopic]: { fillColor: "#F06767", textColor: "#000000" },
            [s.VeryImportant]: { fillColor: "#1000C6" },
            [s.Important]: { fillColor: "#22D896", textColor: "#000000" },
            [s.CrossOut]: {},
          },
          "Hubble-Bubble": {
            [d.Map]: { fillColor: "#1D663A", multiLineColors: "#A2B864" },
            [d.Relationship]: { lineColor: "#A2B864", textColor: "#FEFFD0" },
            [d.Boundary]: { fillColor: "#A2B864", textColor: "#FFFFFF" },
            [d.Summary]: {},
            [a.CentralTopic]: { fillColor: "#39B169", textColor: "#FEFFD0" },
            [a.MainTopic]: { fillColor: "#39B169", textColor: "#FEFFD0" },
            [a.Subtopic]: { fillColor: "#2E9356", textColor: "#FEFFD0" },
            [a.FloatingTopic]: { fillColor: "#A2B864", textColor: "#1D663A" },
            [a.CalloutTopic]: { fillColor: "#FEFFD0", textColor: "#000000" },
            [a.SummaryTopic]: { fillColor: "#A2B864", textColor: "#1D663A" },
            [s.VeryImportant]: { fillColor: "#FA813D", textColor: "#000000" },
            [s.Important]: { fillColor: "#ECDE5D", textColor: "#000000" },
            [s.CrossOut]: {},
          },
          "midnight-rose": {
            [d.Map]: { fillColor: "#010518", multiLineColors: "#9EAEFF" },
            [d.Relationship]: { lineColor: "#2C47D8", textColor: "#FFFFFF" },
            [d.Boundary]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [d.Summary]: {},
            [a.CentralTopic]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [a.MainTopic]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [a.Subtopic]: { fillColor: "#3E4C95", textColor: "#FFFFFF" },
            [a.FloatingTopic]: { fillColor: "#DEE3FF", textColor: "#404E9C" },
            [a.CalloutTopic]: { fillColor: "#FEFFD0", textColor: "#404E9C" },
            [a.SummaryTopic]: { fillColor: "#9EAEFF", textColor: "#404E9C" },
            [s.VeryImportant]: { fillColor: "#A716CB", textColor: "#000000" },
            [s.Important]: { fillColor: "#D45757", textColor: "#000000" },
            [s.CrossOut]: {},
          },
          "shape-for-you": {
            [d.Map]: {
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
            [d.Relationship]: { lineColor: "#E59294", textColor: "#000000" },
            [d.Boundary]: { fillColor: "#E59294", textColor: "#FFFFFF" },
            [d.Summary]: {},
            [a.CentralTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [a.MainTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [a.Subtopic]: { fillColor: "#E59294", textColor: "#000000" },
            [a.FloatingTopic]: { fillColor: "#4B4B4B", textColor: "#FFFFFF" },
            [a.CalloutTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [a.SummaryTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [s.VeryImportant]: { fillColor: "#50209E", textColor: "#000000" },
            [s.Important]: { fillColor: "#D45757", textColor: "#62A8CF" },
            [s.CrossOut]: {},
          },
          "hand-drawn": {
            [d.Map]: { fillColor: "#DCE2D4", multiLineColors: "#2F4DB5" },
            [d.Relationship]: { lineColor: "#2F4DB5", textColor: "#2F4DB5" },
            [d.Boundary]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [d.Summary]: {},
            [a.CentralTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [a.MainTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [a.Subtopic]: { fillColor: "#5E6AA2", textColor: "#FFFFFF" },
            [a.FloatingTopic]: { fillColor: "#5A5E74", textColor: "#EDF4E5" },
            [a.CalloutTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [a.SummaryTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [s.VeryImportant]: { fillColor: "#9433AC", textColor: "#FFFFFF" },
            [s.Important]: { fillColor: "#D05252", textColor: "#FFFFFF" },
            [s.CrossOut]: {},
          },
        });
      var c = function (e, i, t, o) {
        return new (t || (t = Promise))(function (n, l) {
          function r(e) {
            try {
              d(o.next(e));
            } catch (e) {
              l(e);
            }
          }
          function s(e) {
            try {
              d(o.throw(e));
            } catch (e) {
              l(e);
            }
          }
          function d(e) {
            var i;
            e.done
              ? n(e.value)
              : ((i = e.value),
                i instanceof t
                  ? i
                  : new t(function (e) {
                      e(i);
                    })).then(r, s);
          }
          d((o = o.apply(e, i || [])).next());
        });
      };
      function h(e) {
        const { sheets: i, activeSheetId: t, getSheetViewer: n } = (0, r.nZ)(),
          l = (0, o.Fl)(() =>
            i.value.find((i) => i.id === (null != e ? e : t.value)),
          ),
          s = (0, o.Fl)(() => n(l.value.id));
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
            var i, t, o, n, r, d, a, u, c, h, p;
            const v =
                null ===
                  (t =
                    null === (i = l.value) || void 0 === i
                      ? void 0
                      : i.query({ id: e })) || void 0 === t
                  ? void 0
                  : t.asTopic(),
              g =
                null ===
                  (n =
                    null === (o = s.value) || void 0 === o
                      ? void 0
                      : o.getSheetFigure()) || void 0 === n
                  ? void 0
                  : n.topicFigureByTopicId[e],
              w = m(e);
            return (
              v && {
                id: null == v ? void 0 : v.id,
                title:
                  null !== (r = null == v ? void 0 : v.title) && void 0 !== r
                    ? r
                    : "",
                labels:
                  null !== (d = null == v ? void 0 : v.labels) && void 0 !== d
                    ? d
                    : [],
                note: (null == v ? void 0 : v.notes) && {
                  plainText:
                    null === (a = v.notes) || void 0 === a ? void 0 : a.text,
                  html:
                    null === (u = v.notes) || void 0 === u ? void 0 : u.html,
                },
                image: F(g),
                summaries:
                  null === (c = null == v ? void 0 : v.summaries) ||
                  void 0 === c
                    ? void 0
                    : c.map((e) => ({
                        topicId: e.id,
                        startIndex: e.rangeStart,
                        endIndex: e.rangeEnd,
                      })),
                markers: f(
                  null !== (h = null == v ? void 0 : v.markers) && void 0 !== h
                    ? h
                    : [],
                ),
                video: C(g),
                calloutTopicId:
                  null === (p = null == v ? void 0 : v.callout) || void 0 === p
                    ? void 0
                    : p.id,
                hyperlink: S(v),
                topicSlide: null == w ? void 0 : w["topic-slide-visibility"],
                topicSlideImagePlacement:
                  null == w ? void 0 : w["topic-slide-image-placement"],
                listSlides: null == w ? void 0 : w["list-slide-visibility"],
                listSlideLayout: null == w ? void 0 : w["list-slide-layout"],
                listSlideDelivery:
                  null == w ? void 0 : w["list-slide-delivery"],
                summarySlide:
                  null == w ? void 0 : w["summary-slide-visibility"],
                preferredDefaultListSlideLayout: E(g),
              }
            );
          },
          getSubtopics: (e) => {
            var i, t, o, n;
            const r =
              null ===
                (t =
                  null === (i = l.value) || void 0 === i
                    ? void 0
                    : i.query({ id: e })) || void 0 === t
                ? void 0
                : t.asTopic();
            return null !==
              (n =
                null === (o = null == r ? void 0 : r.children) || void 0 === o
                  ? void 0
                  : o.map((e) => e.id)) && void 0 !== n
              ? n
              : [];
          },
          getParentTopicId: (e) => {
            var i, t, o, n;
            const r =
              null ===
                (t =
                  null === (i = l.value) || void 0 === i
                    ? void 0
                    : i.query({ id: e })) || void 0 === t
                ? void 0
                : t.asTopic();
            return null !==
              (n =
                null === (o = null == r ? void 0 : r.parentTopic) ||
                void 0 === o
                  ? void 0
                  : o.id) && void 0 !== n
              ? n
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
              var i, t, o, n, r, d, a, c;
              const h =
                  null !==
                    (r =
                      null !== (i = null == e ? void 0 : e.appearance) &&
                      void 0 !== i
                        ? i
                        : null ===
                              (n = m(
                                null ===
                                  (o =
                                    null === (t = l.value) || void 0 === t
                                      ? void 0
                                      : t.rootTopic) || void 0 === o
                                  ? void 0
                                  : o.id,
                              )) || void 0 === n
                          ? void 0
                          : n["slide-appearance"]) && void 0 !== r
                    ? r
                    : "default",
                { svg: p, size: v } =
                  yield s.value.exportSVGElementWithSizeUsingSheetAppearance(
                    l.value,
                    null !== (d = u[h]) && void 0 !== d ? d : u.default,
                    {
                      padding: { left: 20, right: 20, top: 20, bottom: 20 },
                      disableEmbedFonts: !0,
                    },
                  );
              return {
                svgString: new XMLSerializer().serializeToString(p),
                width:
                  null !== (a = v.width) && void 0 !== a
                    ? a
                    : parseInt(p.getAttribute("width")),
                height:
                  null !== (c = v.height) && void 0 !== c
                    ? c
                    : parseInt(p.getAttribute("height")),
              };
            }),
        };
      }
      function p() {
        return c(this, void 0, void 0, function* () {
          const e = h(),
            i = e.getStartingTopicId(),
            t = e.getFloatingTopics(),
            o = [i, ...t],
            n = (i) => {
              const t = i.map((i) => e.getSubtopics(i)).flat();
              o.push(...t), t.length <= 0 || n(t);
            };
          n(o);
          const l = {},
            r = {},
            s = {};
          o.forEach((i) => {
            (l[i] = e.getTopicAttributes(i)),
              (r[i] = e.getParentTopicId(i)),
              (s[i] = e.getSubtopics(i));
          });
          const d = yield e.getEndingScreenContent(void 0);
          return {
            startingTopicId: i,
            floatingTopicIds: t,
            topicRecords: l,
            parentRecords: r,
            subTopicsRecords: s,
            endingScreenContent: d,
          };
        });
      }
      function v(e) {
        const {
          startingTopicId: i,
          floatingTopicIds: t,
          topicRecords: o,
          subTopicsRecords: n,
          parentRecords: l,
          endingScreenContent: r,
        } = e;
        return {
          getStartingTopicId: () => i,
          getTopicAttributes: (e) => {
            var i;
            return null !== (i = o[e]) && void 0 !== i ? i : null;
          },
          getSubtopics: (e) => {
            var i;
            return null !== (i = n[e]) && void 0 !== i ? i : [];
          },
          getParentTopicId: (e) => {
            var i;
            return null !== (i = l[e]) && void 0 !== i ? i : null;
          },
          getFloatingTopics: () => t,
          getEndingScreenContent: () =>
            c(this, void 0, void 0, function* () {
              return r;
            }),
        };
      }
      function m(e) {
        var i, t, o;
        const { document: l } = (0, r.nZ)(),
          s =
            null ===
              (t =
                null === (i = l.value) || void 0 === i
                  ? void 0
                  : i.query({ id: e })) || void 0 === t
              ? void 0
              : t.asTopic(),
          d = null == s ? void 0 : s.extensionBy(n.CU);
        return null !== (o = null == d ? void 0 : d.content) && void 0 !== o
          ? o
          : null;
      }
      function g(e, i) {
        var t, o, l, s, d;
        const { document: a, changeDoc: u } = (0, r.nZ)(),
          c =
            null ===
              (o =
                null === (t = a.value) || void 0 === t
                  ? void 0
                  : t.query({ id: e })) || void 0 === o
              ? void 0
              : o.asTopic(),
          h =
            null !==
              (s =
                null === (l = null == c ? void 0 : c.extensionBy(n.CU)) ||
                void 0 === l
                  ? void 0
                  : l.content) && void 0 !== s
              ? s
              : {},
          p = { content: Object.assign(Object.assign({}, h), i) },
          v =
            null === (d = null == c ? void 0 : c.asMutable()) || void 0 === d
              ? void 0
              : d.extensionBy(n.CU, p).commit().ownerDocument;
        v && u(v);
      }
      function f(e) {
        const { markerModule: i } = (0, r.nZ)();
        return e
          .map((e) => ({
            markerId: e,
            imageSource: i.getMarkerInfoById(e).imageSrc,
          }))
          .filter((e) => !!e.imageSource);
      }
      function F(e) {
        var i, t, o, n, l;
        if (!e) return null;
        const {
            imageView: s,
            measuredImageView: d,
            imageNaturalSize: a,
          } = e.nodeContent,
          u = null == e ? void 0 : e.modelAttributes,
          c =
            null === (i = null == u ? void 0 : u.equation) || void 0 === i
              ? void 0
              : i.text;
        if (c)
          return (function (e) {
            var i, t;
            const o = (
              null !== (i = (0, r.nZ)().makeMathJaxSVG(e)) && void 0 !== i
                ? i
                : ""
            ).replace(/currentColor/g, "");
            if (!o) return null;
            const n =
              null ===
                (t = new DOMParser().parseFromString(o, "image/svg+xml")) ||
              void 0 === t
                ? void 0
                : t.documentElement;
            return n
              ? {
                  source: o,
                  size: {
                    width: parseInt(n.getAttribute("width")),
                    height: parseInt(n.getAttribute("height")),
                  },
                }
              : null;
          })(c);
        {
          const e =
              null !==
                (o =
                  null !== (t = null == a ? void 0 : a.width) && void 0 !== t
                    ? t
                    : null == d
                      ? void 0
                      : d.width) && void 0 !== o
                ? o
                : null == u
                  ? void 0
                  : u.imageWidth,
            i =
              null !==
                (l =
                  null !== (n = null == a ? void 0 : a.height) && void 0 !== n
                    ? n
                    : null == d
                      ? void 0
                      : d.height) && void 0 !== l
                ? l
                : null == u
                  ? void 0
                  : u.imageHeight,
            r = null == s ? void 0 : s.src;
          return e && i && r
            ? { source: r, size: { width: e, height: i } }
            : null;
        }
      }
      function C(e) {
        var i, t;
        const o =
          null ===
            (t =
              null === (i = null == e ? void 0 : e.modelAttributes) ||
              void 0 === i
                ? void 0
                : i.webVideo) || void 0 === t
            ? void 0
            : t.embedUrl;
        return o ? { videoSource: o } : null;
      }
      function S(e) {
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
      function E(e) {
        var i, t;
        const o =
          null !==
            (t =
              null === (i = null == e ? void 0 : e.modelAttributes) ||
              void 0 === i
                ? void 0
                : i.structureClass) && void 0 !== t
            ? t
            : null;
        return [l.v.FISHBONELEFTHEADED, l.v.FISHBONERIGHTHEADED].includes(o)
          ? "fishbone"
          : [
                l.v.TIMELINEHORIZONTAL,
                l.v.TIMELINESIDEDHORIZONTAL,
                l.v.TIMELINETHROUGHVERTICAL,
              ].includes(o)
            ? "timeline"
            : null;
      }
    },
    28086: (e, i, t) => {
      t.d(i, { Ur: () => v, XT: () => c, _x: () => p, iA: () => h });
      var o = t(67657),
        n = t(90435),
        l = t(54856),
        r = t(82361),
        s = t(94025),
        d = t(91324),
        a = function (e, i, t, o) {
          return new (t || (t = Promise))(function (n, l) {
            function r(e) {
              try {
                d(o.next(e));
              } catch (e) {
                l(e);
              }
            }
            function s(e) {
              try {
                d(o.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function d(e) {
              var i;
              e.done
                ? n(e.value)
                : ((i = e.value),
                  i instanceof t
                    ? i
                    : new t(function (e) {
                        e(i);
                      })).then(r, s);
            }
            d((o = o.apply(e, i || [])).next());
          });
        };
      const u = o.screen,
        c = {
          AFTER_SUB_WINDOW_CREATED: "pitch:afterSubWindowCreated",
          AFTER_SUB_WINDOW_REMOVED: "pitch:afterSubWindowRemoved",
          ON_DISPLAY_ADDED: "pitch:onDisplayAdded",
          ON_DISPLAY_REMOVED: "pitch:onDisplayRemoved",
          ON_MAIN_WINDOW_ENTER_FULLSCREEN: "pitch:onMainWindowEnterFullScreen",
          ON_MAIN_WINDOW_LEAVE_FULLSCREEN: "pitch:onMainWindowLeaveFullScreen",
        };
      class h extends r.EventEmitter {
        constructor() {
          super(),
            (this.mainWindowId = window.id),
            (this.subWindowId = null),
            (this.subWindowDisplayId = null),
            (this.win = o.getCurrentWindow()),
            (this._windowFittedSlideSize = {}),
            (this.onDisplayAdded = () =>
              a(this, void 0, void 0, function* () {
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
            (null === (e = o.BrowserWindow) || void 0 === e
              ? void 0
              : e.fromId(this.subWindowId))
          );
        }
        get windowFittedSlideSize() {
          var e, i, t;
          const o =
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
            (this._windowFittedSlideSize.value = v(o)),
            this._windowFittedSlideSize
          );
        }
        createSubWindow() {
          var e;
          return a(this, void 0, void 0, function* () {
            if (this.subWindowCreated) return !1;
            const i = this.getSubWindowDisplay();
            if (!i) return !1;
            const t = yield n.ZP.fetch(l.Fx, {
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
          const e = u.getDisplayMatching(o.getCurrentWindow().getBounds());
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
          return a(this, void 0, void 0, function* () {
            return yield n.ZP.fetch(l.IB, {
              fullscreen: !0,
              editorViewId: window.editorId,
              targetElementId: e,
            });
          });
        }
        leaveFullscreen(e) {
          return a(this, void 0, void 0, function* () {
            return yield n.ZP.fetch(l.IB, {
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
      function p(e) {
        e || (e = o.getCurrentWindow());
        return {
          lockAspect: (i) => {
            if (!i) {
              const { width: t, height: o } = e.getBounds();
              i = t / o;
            }
            e.setAspectRatio(i);
          },
          releaseAspect: () => e.setAspectRatio(0),
          setMinimumSize: (i, t) => e.setMinimumSize(i, t),
          setBounds: (i) => e.setBounds(i),
          smoothOnResize: (i) => {
            e.on(
              "resize",
              (0, d.P2)(() => window.requestAnimationFrame(i), 1e3 / 60),
            );
          },
          closeWindow: () => e.close(),
          onWindowClose: (i) => e.on("close", i),
          computeSuitableWindowSize: m,
          computeSuitableSlideSizeIdFromWindowSize: v,
        };
      }
      function v(e) {
        e || (e = o.getCurrentWindow().getContentSize());
        const i = e[0] / e[1];
        let t = "16:9",
          n = 1 / 0;
        for (const e of Object.keys(s.IE)) {
          if (!/\d+:\d+/.test(e)) continue;
          const o = e.split(":").map((e) => Number(e)),
            l = Math.abs(o[0] / o[1] - i);
          l < n && ((n = l), (t = e));
        }
        return t;
      }
      function m(e) {
        const i = f().bounds,
          t = (e) => e.width + 80 < i.width && e.height + 80 < i.height;
        let o = g(
          (function () {
            const e = f();
            if (!e) return "16:9";
            const i = e.bounds,
              t = i.width / i.height;
            let o = "16:9",
              n = 1 / 0;
            for (const e of Object.keys(s.IE)) {
              if (!/\d+:\d+/.test(e)) continue;
              const i = e.split(":").map((e) => Number(e)),
                l = Math.abs(i[0] / i[1] - t);
              l < n && ((n = l), (o = e));
            }
            return o;
          })(),
        );
        const n = {
          width: 1280,
          height: Math.floor(1280 / o),
          x: 0,
          y: 0,
          minWidth: 360,
          minHeight: 360,
        };
        if (
          ("Auto" !== e &&
            ((o = g(e)),
            (n.height = Math.floor(n.width / o)),
            o < 1
              ? (n.minHeight = Math.floor(n.minWidth / o))
              : (n.minWidth = Math.floor(n.minHeight * o))),
          !t(n))
        )
          for (const e of [960, 640, 360])
            if (((n.width = e), (n.height = Math.floor(e / o)), t(n))) break;
        return (
          (n.x = Math.floor(i.x + (i.width - n.width) / 2)),
          (n.y = Math.floor(i.y + (i.height - n.height) / 2)),
          n
        );
      }
      function g(e) {
        const i = e.split(":").map((e) => Number(e));
        return i[0] / i[1];
      }
      function f() {
        const e = o.screen,
          i = o.getCurrentWindow().getBounds();
        return e.getDisplayMatching(i);
      }
    },
    72205: (e, i, t) => {
      t.r(i), t.d(i, { enterPitchMode: () => a, startWindowedPitch: () => u });
      var o = t(90435),
        n = t(54856),
        l = t(21029),
        r = t(96160),
        s = t(7703),
        d = function (e, i, t, o) {
          return new (t || (t = Promise))(function (n, l) {
            function r(e) {
              try {
                d(o.next(e));
              } catch (e) {
                l(e);
              }
            }
            function s(e) {
              try {
                d(o.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function d(e) {
              var i;
              e.done
                ? n(e.value)
                : ((i = e.value),
                  i instanceof t
                    ? i
                    : new t(function (e) {
                        e(i);
                      })).then(r, s);
            }
            d((o = o.apply(e, i || [])).next());
          });
        };
      function a(e) {
        const i = (0, l.$)();
        i.pitchMode ||
          (i.updateRightBarPanel({ visible: !1 }),
          i.setPitchMode({ mode: !0, isPresenterView: e.isPresenterView }));
      }
      function u() {
        var e, i;
        return d(this, void 0, void 0, function* () {
          const {
              slideAspect: t,
              slideTheme: l,
              watermarkEnabled: d,
              animationEnabled: a,
            } = (0, s.Y$)(),
            { computeSuitableWindowSize: u } = (0, s._x)(),
            { selection: c } = (0, r.nZ)(),
            h =
              "topic" ===
                (null === (e = c.value) || void 0 === e ? void 0 : e.type) &&
              null !== (i = c.value.modelIds[0]) &&
              void 0 !== i
                ? i
                : "",
            p = (0, s.zF)();
          return (yield o.ZP.fetch(n.Fx, {
            name: "presentationwindowed",
            query: {
              portalId: p,
              startTopicId: h,
              initialAspect: t.value,
              initialSlideTheme: l.value,
              initialWatermarkEnabled: `${d.value}`,
              initialAnimationEnabled: `${a.value}`,
            },
            backgroundThrottling: !1,
            overrideSetting: Object.assign(Object.assign({}, u(t.value)), {
              center: !0,
              fullscreen: !1,
              backgroundColor: "#000000",
            }),
          })).id;
        });
      }
    },
  },
]);
