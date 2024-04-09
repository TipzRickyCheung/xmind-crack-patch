"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [8943, 716],
  {
    70716: (e, t, i) => {
      var o;
      i.d(t, { v: () => o, w: () => l }),
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
      const l = {
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
    92344: (e, t, i) => {
      i.d(t, {
        yh: () => a,
        dM: () => F,
        I6: () => h,
        zF: () => v,
        Y$: () => n.Y,
      });
      var o = i(94025),
        l = i(24813),
        n = i(38853);
      class r {
        constructor() {
          this.eventCallbacks = new Map();
        }
        on(e, t) {
          var i;
          const o =
            null !== (i = this.eventCallbacks.get(e)) && void 0 !== i ? i : [];
          this.eventCallbacks.set(e, [...o, t]);
        }
        off(e, t) {
          var i;
          let o =
            null !== (i = this.eventCallbacks.get(e)) && void 0 !== i ? i : [];
          (o = o.filter((e) => e !== t)), this.eventCallbacks.set(e, o);
        }
        emit(e) {
          const t = this.eventCallbacks.get(e.eventName);
          if (t) for (const i of t) i(e);
        }
        unload() {
          this.eventCallbacks = new Map();
        }
      }
      var s = function (e, t, i, o) {
        return new (i || (i = Promise))(function (l, n) {
          function r(e) {
            try {
              a(o.next(e));
            } catch (e) {
              n(e);
            }
          }
          function s(e) {
            try {
              a(o.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function a(e) {
            var t;
            e.done
              ? l(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(r, s);
          }
          a((o = o.apply(e, t || [])).next());
        });
      };
      class a extends r {
        constructor(e) {
          var t;
          super(),
            (this._presenters = []),
            (this._isStarted = !1),
            (this._disableSettingsUpdate = !1),
            (this._traveledTopicSet = new Set()),
            (this._needSubscriptionHint = !1),
            (this.slideControl = (e) =>
              s(this, void 0, void 0, function* () {
                const { action: t, value: i } = e;
                switch (t) {
                  case "goto":
                    return yield this.slideshow.present(i);
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
              const { action: t, option: i } = e;
              switch (t) {
                case "theme":
                  return this.changeTheme(i);
                case "aspect":
                  return this.changeSlideAspect(i);
                case "animation":
                  return this.switchAnimationOption(i);
                case "watermark":
                  return this.switchWatermarkOption(i);
              }
            }),
            (this.unloaded = !1),
            (this.settings = (0, n.Y)()),
            (this._startTopicId =
              null !== (t = e.startTopicId) && void 0 !== t ? t : null),
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
          var t, i, n, r;
          const s = e.contentProviderData
              ? (0, l.xm)(e.contentProviderData)
              : (0, l.n2)(),
            a =
              null !== (t = e.defaultAspect) && void 0 !== t
                ? t
                : this.settings.slideAspect.value,
            d =
              "Auto" === a
                ? null !==
                    (n =
                      null === (i = e.suggestedSlideSize) || void 0 === i
                        ? void 0
                        : i.value) && void 0 !== n
                  ? n
                  : "16:9"
                : a;
          (this._slideshow = new o.ur({
            contentProvider: s,
            slideTheme:
              null !== (r = e.defaultSlideTheme) && void 0 !== r
                ? r
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
              const t = this._slideshow.computeNextStoppedSlide(e);
              t &&
                (this._traveledTopicSet.add(t),
                this._needSubscriptionHint &&
                  this._traveledTopicSet.size > 5 &&
                  this.emit({ eventName: "needSubscription" })),
                this.emit({
                  eventName: "slideChangeStart",
                  payload: { request: e, targetSlide: t },
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
          (this._presenters = this._presenters.filter((t) => t !== e)),
            this.slideshow.removePresenter(e.view);
        }
        switchAnimationOption(e) {
          var t;
          (this.slideshow.disablesAnimations = !e),
            !this._disableSettingsUpdate &&
              (null === (t = this.settings) ||
                void 0 === t ||
                t.updateAnimationSetting(e));
        }
        switchWatermarkOption(e) {
          var t;
          this.slideshow.disablesWatermark !== !e &&
            (this.slideshow.changeWatermarkDisabled(!e),
            !this._disableSettingsUpdate &&
              (null === (t = this.settings) ||
                void 0 === t ||
                t.updateWatermarkSetting(e)));
        }
        changeTheme(e) {
          var t;
          this.slideshow.slideAppearanceId !== e &&
            (this.slideshow.changeSlideTheme(e),
            !this._disableSettingsUpdate &&
              (null === (t = this.settings) ||
                void 0 === t ||
                t.updateSlideThemeSetting(e)));
        }
        changeSlideAspect(e) {
          var t, i, l;
          const n =
            "Auto" === e
              ? null !==
                  (i =
                    null === (t = this._suggestedSlideSize) || void 0 === t
                      ? void 0
                      : t.value) && void 0 !== i
                ? i
                : "16:9"
              : e;
          this.slideshow.changeSlideSize(o.IE[n]),
            !this._disableSettingsUpdate &&
              (null === (l = this.settings) ||
                void 0 === l ||
                l.updateSlideAspectSetting(e));
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
      var d = i(90435),
        u = i(16704),
        c = i(54856),
        p = function (e, t, i, o) {
          return new (i || (i = Promise))(function (l, n) {
            function r(e) {
              try {
                a(o.next(e));
              } catch (e) {
                n(e);
              }
            }
            function s(e) {
              try {
                a(o.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function a(e) {
              var t;
              e.done
                ? l(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, s);
            }
            a((o = o.apply(e, t || [])).next());
          });
        };
      function v() {
        const e = (0, u.hb)(),
          t = d.ZP.route(c.OV.CONNECT_MAIN(e), (e) =>
            p(this, void 0, void 0, function* () {
              switch (e.type) {
                case "retrieveContent":
                  return JSON.stringify(yield (0, l.d4)());
                case "dismiss":
                  return t();
                case "openHyperlink":
                  return null;
              }
            }),
          );
        return e;
      }
      function h(e) {
        return p(this, void 0, void 0, function* () {
          const t = yield d.ZP.fetch(c.OV.CONNECT_MAIN(e), {
            type: "retrieveContent",
          });
          return JSON.parse(t);
        });
      }
      function F(e) {
        d.ZP.fetch(c.OV.CONNECT_MAIN(e), { type: "dismiss" });
      }
    },
    38853: (e, t, i) => {
      i.d(t, { Y: () => d });
      var o = i(2954),
        l = i(50965),
        n = i(96160),
        r = i(24813);
      function s(e) {
        var t, i;
        return null !==
          (i =
            null === (t = (0, r.pP)(e)) || void 0 === t
              ? void 0
              : t["slide-appearance"]) && void 0 !== i
          ? i
          : "default";
      }
      function a(e) {
        var t, i;
        return null !==
          (i =
            null === (t = (0, r.pP)(e)) || void 0 === t
              ? void 0
              : t["slide-aspect-ratio"]) && void 0 !== i
          ? i
          : "Auto";
      }
      const d = (function () {
        const { activeSheet: e } = (0, n.nZ)(),
          t = (0, o.Fl)(() => {
            var t;
            return null === (t = e.value) || void 0 === t
              ? void 0
              : t.rootTopic.id;
          }),
          i = (0, o.Fl)(() => !(0, l.rs)().disableAnimation),
          d = (0, o.Fl)(
            () => !(0, l.Yh)().isStatusValid || (0, l.rs)().watermarkEnabled,
          ),
          u = (0, o.iH)(a(t.value)),
          c = (0, o.iH)(s(t.value)),
          p = (0, o.Fl)(() =>
            "zh-CN" === (0, l.S)().language ||
            "zh-CN" === (0, l.S)().defaultLanguage
              ? "zh"
              : "en",
          ),
          v = (e) => {
            (0, l.rs)().updateSettings({ disableAnimation: !e });
          },
          h = (e) => {
            (0, l.rs)().updateSettings({ watermarkEnabled: e });
          },
          F = (e) => {
            e !== s(t.value) &&
              ((0, r.nh)(t.value, { "slide-appearance": e }), (c.value = e));
          },
          m = (e) => {
            e !== a(t.value) &&
              ((0, r.nh)(t.value, { "slide-aspect-ratio": e }), (u.value = e));
          };
        return (
          (0, o.YP)(
            () => t.value,
            (e) => {
              (u.value = a(e)), (c.value = s(e));
            },
          ),
          () => ({
            animationEnabled: i,
            watermarkEnabled: d,
            slideTheme: (0, o.Fl)(() => c.value),
            slideAspect: (0, o.Fl)(() => u.value),
            preferredLanguage: p,
            updateAnimationSetting: v,
            updateWatermarkSetting: h,
            updateSlideThemeSetting: F,
            updateSlideAspectSetting: m,
          })
        );
      })();
    },
    21718: (e, t, i) => {
      i.d(t, { o: () => a, v: () => s });
      var o = i(94025),
        l = i(92344),
        n = i(24813);
      function r(e, t) {
        var i;
        const {
            slideTheme: r,
            watermarkEnabled: s,
            preferredLanguage: a,
          } = (0, l.Y$)(),
          d = new o.ur({
            contentProvider: (0, n.n2)(e),
            slideTheme: r.value,
            slideSize: o.IE["16:9"],
            disablesWatermark:
              null !== (i = null == t ? void 0 : t.disablesWatermark) &&
              void 0 !== i
                ? i
                : !s.value,
            preferredLanguage: a.value,
          });
        return (d.disablesAnimations = !0), new o.I2(d);
      }
      function s(e, t) {
        return r(e, t).exportPptxSlides();
      }
      function a(e, t) {
        return r(e, t).exportHtmlPages();
      }
    },
    94025: (e, t, i) => {
      i.d(t, {
        CU: () => s,
        YN: () => a,
        ur: () => o.Slideshow,
        I2: () => o.SlideshowExporter,
        rc: () => h,
        qV: () => v,
        WS: () => p,
        bh: () => u,
        sz: () => d,
        _y: () => c,
        _p: () => o.previewSlidesScopedBy,
        IE: () => o.slideSizes,
        hf: () => F,
        tT: () => r,
      });
      var o = i(32118),
        l = i(24813);
      const n = {
        summarySlideVisibility: "summary-slide-visibility",
        topicSlideVisibility: "topic-slide-visibility",
        topicImagePlacement: "topic-slide-image-placement",
        listSlideVisibility: "list-slide-visibility",
        listSlideDelivery: "list-slide-delivery",
        listSlideLayout: "list-slide-layout",
      };
      function r() {
        const e = (e, t, i) => (0, l.nh)(e, { [n[t]]: i });
        return {
          getSlideOption: (e, t) => {
            var i;
            return null === (i = (0, l.pP)(e)) || void 0 === i
              ? void 0
              : i[n[t]];
          },
          setSlideOption: e,
          deleteSlideOption: (t, i) => e(t, i),
        };
      }
      const s = "org.xmind.ui.ice-cream-pancake",
        a = ["Auto", "16:9", "4:3", "9:16", "3:4"];
      function d(e) {
        return new o.Slideshow(e);
      }
      function u(e = {}) {
        const {
            initialSlide: t,
            perspectiveMode: i,
            viewStyle: l,
            contentStyle: n,
          } = e,
          r = new o.PresentationView({ initialSlide: t });
        return (
          i
            ? ((r.allowsActivatingPresenterPerspectiveMode = !0),
              (r.mode = "presenterPerspective"))
            : ((r.allowsActivatingPresenterPerspectiveMode = !1),
              (r.mode = "presentation")),
          l && Object.keys(l).forEach((e) => (r.el.style[e] = l[e])),
          n && Object.keys(n).forEach((e) => (r.contentEl.style[e] = n[e])),
          r
        );
      }
      function c(e, t, i) {
        return {
          topicSkipped: (0, o.isSlideSkippedScopedBy)(e, t, "topic", {
            ignoresUserValue: i,
          }),
          listSkipped: (0, o.isSlideSkippedScopedBy)(e, t, "list", {
            ignoresUserValue: i,
          }),
          summarySkipped: (0, o.isSlideSkippedScopedBy)(e, t, "summary", {
            ignoresUserValue: i,
          }),
        };
      }
      function p(e, t) {
        const i = (0, o.computeSlideContent)(
          t,
          e.contentProvider,
          e.defaultListSlideDelivery,
        );
        return i && i.topic.image
          ? (0, o.computeTopicSlideImagePlacement)(
              e.slideSize,
              i,
              i.topic.image,
              { ignoresUserValue: !0 },
            )
          : null;
      }
      function v(e, t) {
        return (0, o.computeSlideLayout)(
          "list",
          e.slideSize,
          e.getSlideContent(t),
        );
      }
      function h(e, t) {
        return (0, o.getEligibleSlideLayouts)("list", e.getSlideContent(t));
      }
      function F(e, t) {
        const i = e.getSlideContent(t.topicId).computedListSlideDelivery;
        let o = [];
        if (
          ("list" === t.type &&
            "all-at-once" === i &&
            (o = [...o, ...(t.subtopics || [])]),
          t.boxes)
        ) {
          const e = (i) => {
            for (const l of i) {
              if (
                (l.id.startsWith("topic:title:") ||
                  l.id.startsWith("topic:image:")) &&
                l.opacity
              ) {
                const e = l.id.split(":")[2];
                t.subtopics.includes(e) && o.push(l.id.split(":")[2]);
              }
              "children" in l && e(l.children);
            }
          };
          e(t.boxes);
        }
        const l = t.topicId,
          n = [...new Set(o)].filter((e) => e !== l);
        return { topicId: l, subTopicIds: n };
      }
    },
    24813: (e, t, i) => {
      i.d(t, {
        xm: () => h,
        pP: () => F,
        n2: () => p,
        d4: () => v,
        nh: () => m,
      });
      var o = i(2954),
        l = i(94025),
        n = i(70716),
        r = i(96160);
      const {
          TopicQuickStyleClassName: s,
          PrimaryClassName: a,
          TopicPrimaryClassName: d,
        } = r.viewerKit,
        u = Object.freeze({
          default: {
            [a.Map]: {
              fillColor: "#101010",
              multiLineColors: ["#F6F6F6"].join(" "),
            },
            [a.Relationship]: { lineColor: "#F6F6F6", textColor: "#FFFFFF" },
            [a.Boundary]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [a.Summary]: {},
            [d.CentralTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [d.MainTopic]: { fillColor: "#E3E3E3", textColor: "#000000" },
            [d.Subtopic]: { fillColor: "#B9B9B9", textColor: "#000000" },
            [d.FloatingTopic]: { fillColor: "#BABABA", textColor: "#000000" },
            [d.CalloutTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [d.SummaryTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [s.VeryImportant]: { fillColor: "#A43838" },
            [s.Important]: { fillColor: "#CFA362", textColor: "#000000" },
            [s.CrossOut]: {},
          },
          light: {
            [a.Map]: {
              fillColor: "#F4F4F4",
              multiLineColors: ["#282828"].join(" "),
            },
            [a.Relationship]: { lineColor: "#282828", textColor: "#000000" },
            [a.Boundary]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [a.Summary]: {},
            [d.CentralTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [d.MainTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [d.Subtopic]: { fillColor: "#4F4F4F", textColor: "#FFFFFF" },
            [d.FloatingTopic]: { fillColor: "#4F4F4F", textColor: "#FFFFFF" },
            [d.CalloutTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [d.SummaryTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [s.VeryImportant]: { fillColor: "#A43838" },
            [s.Important]: { fillColor: "#CFA362", textColor: "#000000" },
            [s.CrossOut]: {},
          },
          Innocence: {
            [a.Map]: {
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
            [a.Relationship]: { lineColor: "#F06767", textColor: "#F7FFF4" },
            [a.Boundary]: { fillColor: "#F06767", textColor: "#F7FFF4" },
            [a.Summary]: {},
            [d.CentralTopic]: { fillColor: "#F06767" },
            [d.MainTopic]: { textColor: "#000000" },
            [d.Subtopic]: { textColor: "#000000" },
            [d.FloatingTopic]: { fillColor: "#797979", textColor: "#F7FFF4" },
            [d.CalloutTopic]: { fillColor: "#F06767", textColor: "#F7FFF4" },
            [d.SummaryTopic]: { fillColor: "#F06767", textColor: "#000000" },
            [s.VeryImportant]: { fillColor: "#1000C6" },
            [s.Important]: { fillColor: "#22D896", textColor: "#000000" },
            [s.CrossOut]: {},
          },
          "Hubble-Bubble": {
            [a.Map]: { fillColor: "#1D663A", multiLineColors: "#A2B864" },
            [a.Relationship]: { lineColor: "#A2B864", textColor: "#FEFFD0" },
            [a.Boundary]: { fillColor: "#A2B864", textColor: "#FFFFFF" },
            [a.Summary]: {},
            [d.CentralTopic]: { fillColor: "#39B169", textColor: "#FEFFD0" },
            [d.MainTopic]: { fillColor: "#39B169", textColor: "#FEFFD0" },
            [d.Subtopic]: { fillColor: "#2E9356", textColor: "#FEFFD0" },
            [d.FloatingTopic]: { fillColor: "#A2B864", textColor: "#1D663A" },
            [d.CalloutTopic]: { fillColor: "#FEFFD0", textColor: "#000000" },
            [d.SummaryTopic]: { fillColor: "#A2B864", textColor: "#1D663A" },
            [s.VeryImportant]: { fillColor: "#FA813D", textColor: "#000000" },
            [s.Important]: { fillColor: "#ECDE5D", textColor: "#000000" },
            [s.CrossOut]: {},
          },
          "midnight-rose": {
            [a.Map]: { fillColor: "#010518", multiLineColors: "#9EAEFF" },
            [a.Relationship]: { lineColor: "#2C47D8", textColor: "#FFFFFF" },
            [a.Boundary]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [a.Summary]: {},
            [d.CentralTopic]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [d.MainTopic]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [d.Subtopic]: { fillColor: "#3E4C95", textColor: "#FFFFFF" },
            [d.FloatingTopic]: { fillColor: "#DEE3FF", textColor: "#404E9C" },
            [d.CalloutTopic]: { fillColor: "#FEFFD0", textColor: "#404E9C" },
            [d.SummaryTopic]: { fillColor: "#9EAEFF", textColor: "#404E9C" },
            [s.VeryImportant]: { fillColor: "#A716CB", textColor: "#000000" },
            [s.Important]: { fillColor: "#D45757", textColor: "#000000" },
            [s.CrossOut]: {},
          },
          "shape-for-you": {
            [a.Map]: {
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
            [a.Relationship]: { lineColor: "#E59294", textColor: "#000000" },
            [a.Boundary]: { fillColor: "#E59294", textColor: "#FFFFFF" },
            [a.Summary]: {},
            [d.CentralTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [d.MainTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [d.Subtopic]: { fillColor: "#E59294", textColor: "#000000" },
            [d.FloatingTopic]: { fillColor: "#4B4B4B", textColor: "#FFFFFF" },
            [d.CalloutTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [d.SummaryTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [s.VeryImportant]: { fillColor: "#50209E", textColor: "#000000" },
            [s.Important]: { fillColor: "#D45757", textColor: "#62A8CF" },
            [s.CrossOut]: {},
          },
          "hand-drawn": {
            [a.Map]: { fillColor: "#DCE2D4", multiLineColors: "#2F4DB5" },
            [a.Relationship]: { lineColor: "#2F4DB5", textColor: "#2F4DB5" },
            [a.Boundary]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [a.Summary]: {},
            [d.CentralTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [d.MainTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [d.Subtopic]: { fillColor: "#5E6AA2", textColor: "#FFFFFF" },
            [d.FloatingTopic]: { fillColor: "#5A5E74", textColor: "#EDF4E5" },
            [d.CalloutTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [d.SummaryTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [s.VeryImportant]: { fillColor: "#9433AC", textColor: "#FFFFFF" },
            [s.Important]: { fillColor: "#D05252", textColor: "#FFFFFF" },
            [s.CrossOut]: {},
          },
        });
      var c = function (e, t, i, o) {
        return new (i || (i = Promise))(function (l, n) {
          function r(e) {
            try {
              a(o.next(e));
            } catch (e) {
              n(e);
            }
          }
          function s(e) {
            try {
              a(o.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function a(e) {
            var t;
            e.done
              ? l(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(r, s);
          }
          a((o = o.apply(e, t || [])).next());
        });
      };
      function p(e) {
        const { sheets: t, activeSheetId: i, getSheetViewer: l } = (0, r.nZ)(),
          n = (0, o.Fl)(() =>
            t.value.find((t) => t.id === (null != e ? e : i.value)),
          ),
          s = (0, o.Fl)(() => l(n.value.id));
        return {
          getStartingTopicId: () => {
            var e, t, i;
            return null !==
              (i =
                null ===
                  (t =
                    null === (e = n.value) || void 0 === e
                      ? void 0
                      : e.rootTopic) || void 0 === t
                  ? void 0
                  : t.id) && void 0 !== i
              ? i
              : null;
          },
          getTopicAttributes: (e) => {
            var t, i, o, l, r, a, d, u, c, p, v;
            const h =
                null ===
                  (i =
                    null === (t = n.value) || void 0 === t
                      ? void 0
                      : t.query({ id: e })) || void 0 === i
                  ? void 0
                  : i.asTopic(),
              m =
                null ===
                  (l =
                    null === (o = s.value) || void 0 === o
                      ? void 0
                      : o.getSheetFigure()) || void 0 === l
                  ? void 0
                  : l.topicFigureByTopicId[e],
              T = F(e);
            return (
              h && {
                id: null == h ? void 0 : h.id,
                title:
                  null !== (r = null == h ? void 0 : h.title) && void 0 !== r
                    ? r
                    : "",
                labels:
                  null !== (a = null == h ? void 0 : h.labels) && void 0 !== a
                    ? a
                    : [],
                note: (null == h ? void 0 : h.notes) && {
                  plainText:
                    null === (d = h.notes) || void 0 === d ? void 0 : d.text,
                  html:
                    null === (u = h.notes) || void 0 === u ? void 0 : u.html,
                },
                image: g(m),
                summaries:
                  null === (c = null == h ? void 0 : h.summaries) ||
                  void 0 === c
                    ? void 0
                    : c.map((e) => ({
                        topicId: e.id,
                        startIndex: e.rangeStart,
                        endIndex: e.rangeEnd,
                      })),
                markers: C(
                  null !== (p = null == h ? void 0 : h.markers) && void 0 !== p
                    ? p
                    : [],
                ),
                video: f(m),
                calloutTopicId:
                  null === (v = null == h ? void 0 : h.callout) || void 0 === v
                    ? void 0
                    : v.id,
                hyperlink: E(h),
                topicSlide: null == T ? void 0 : T["topic-slide-visibility"],
                topicSlideImagePlacement:
                  null == T ? void 0 : T["topic-slide-image-placement"],
                listSlides: null == T ? void 0 : T["list-slide-visibility"],
                listSlideLayout: null == T ? void 0 : T["list-slide-layout"],
                listSlideDelivery:
                  null == T ? void 0 : T["list-slide-delivery"],
                summarySlide:
                  null == T ? void 0 : T["summary-slide-visibility"],
                preferredDefaultListSlideLayout: S(m),
              }
            );
          },
          getSubtopics: (e) => {
            var t, i, o, l;
            const r =
              null ===
                (i =
                  null === (t = n.value) || void 0 === t
                    ? void 0
                    : t.query({ id: e })) || void 0 === i
                ? void 0
                : i.asTopic();
            return null !==
              (l =
                null === (o = null == r ? void 0 : r.children) || void 0 === o
                  ? void 0
                  : o.map((e) => e.id)) && void 0 !== l
              ? l
              : [];
          },
          getParentTopicId: (e) => {
            var t, i, o, l;
            const r =
              null ===
                (i =
                  null === (t = n.value) || void 0 === t
                    ? void 0
                    : t.query({ id: e })) || void 0 === i
                ? void 0
                : i.asTopic();
            return null !==
              (l =
                null === (o = null == r ? void 0 : r.parentTopic) ||
                void 0 === o
                  ? void 0
                  : o.id) && void 0 !== l
              ? l
              : null;
          },
          getFloatingTopics: () => {
            var e, t, i;
            return null !==
              (i =
                null ===
                  (t =
                    null === (e = n.value) || void 0 === e
                      ? void 0
                      : e.rootTopic) || void 0 === t
                  ? void 0
                  : t.detachedChildren.map((e) => e.id)) && void 0 !== i
              ? i
              : [];
          },
          getEndingScreenContent: (e) =>
            c(this, void 0, void 0, function* () {
              var t, i, o, l, r, a, d, c;
              const p =
                  null !==
                    (r =
                      null !== (t = null == e ? void 0 : e.appearance) &&
                      void 0 !== t
                        ? t
                        : null ===
                              (l = F(
                                null ===
                                  (o =
                                    null === (i = n.value) || void 0 === i
                                      ? void 0
                                      : i.rootTopic) || void 0 === o
                                  ? void 0
                                  : o.id,
                              )) || void 0 === l
                          ? void 0
                          : l["slide-appearance"]) && void 0 !== r
                    ? r
                    : "default",
                { svg: v, size: h } =
                  yield s.value.exportSVGElementWithSizeUsingSheetAppearance(
                    n.value,
                    null !== (a = u[p]) && void 0 !== a ? a : u.default,
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
            t = e.getStartingTopicId(),
            i = e.getFloatingTopics(),
            o = [t, ...i],
            l = (t) => {
              const i = t.map((t) => e.getSubtopics(t)).flat();
              o.push(...i), i.length <= 0 || l(i);
            };
          l(o);
          const n = {},
            r = {},
            s = {};
          o.forEach((t) => {
            (n[t] = e.getTopicAttributes(t)),
              (r[t] = e.getParentTopicId(t)),
              (s[t] = e.getSubtopics(t));
          });
          const a = yield e.getEndingScreenContent(void 0);
          return {
            startingTopicId: t,
            floatingTopicIds: i,
            topicRecords: n,
            parentRecords: r,
            subTopicsRecords: s,
            endingScreenContent: a,
          };
        });
      }
      function h(e) {
        const {
          startingTopicId: t,
          floatingTopicIds: i,
          topicRecords: o,
          subTopicsRecords: l,
          parentRecords: n,
          endingScreenContent: r,
        } = e;
        return {
          getStartingTopicId: () => t,
          getTopicAttributes: (e) => {
            var t;
            return null !== (t = o[e]) && void 0 !== t ? t : null;
          },
          getSubtopics: (e) => {
            var t;
            return null !== (t = l[e]) && void 0 !== t ? t : [];
          },
          getParentTopicId: (e) => {
            var t;
            return null !== (t = n[e]) && void 0 !== t ? t : null;
          },
          getFloatingTopics: () => i,
          getEndingScreenContent: () =>
            c(this, void 0, void 0, function* () {
              return r;
            }),
        };
      }
      function F(e) {
        var t, i, o;
        const { document: n } = (0, r.nZ)(),
          s =
            null ===
              (i =
                null === (t = n.value) || void 0 === t
                  ? void 0
                  : t.query({ id: e })) || void 0 === i
              ? void 0
              : i.asTopic(),
          a = null == s ? void 0 : s.extensionBy(l.CU);
        return null !== (o = null == a ? void 0 : a.content) && void 0 !== o
          ? o
          : null;
      }
      function m(e, t) {
        var i, o, n, s, a;
        const { document: d, changeDoc: u } = (0, r.nZ)(),
          c =
            null ===
              (o =
                null === (i = d.value) || void 0 === i
                  ? void 0
                  : i.query({ id: e })) || void 0 === o
              ? void 0
              : o.asTopic(),
          p =
            null !==
              (s =
                null === (n = null == c ? void 0 : c.extensionBy(l.CU)) ||
                void 0 === n
                  ? void 0
                  : n.content) && void 0 !== s
              ? s
              : {},
          v = { content: Object.assign(Object.assign({}, p), t) },
          h =
            null === (a = null == c ? void 0 : c.asMutable()) || void 0 === a
              ? void 0
              : a.extensionBy(l.CU, v).commit().ownerDocument;
        h && u(h);
      }
      function C(e) {
        const { markerModule: t } = (0, r.nZ)();
        return e
          .map((e) => ({
            markerId: e,
            imageSource: t.getMarkerInfoById(e).imageSrc,
          }))
          .filter((e) => !!e.imageSource);
      }
      function g(e) {
        var t, i, o, l, n;
        if (!e) return null;
        const {
            imageView: s,
            measuredImageView: a,
            imageNaturalSize: d,
          } = e.nodeContent,
          u = null == e ? void 0 : e.modelAttributes,
          c =
            null === (t = null == u ? void 0 : u.equation) || void 0 === t
              ? void 0
              : t.text;
        if (c)
          return (function (e) {
            var t, i;
            const o = (
              null !== (t = (0, r.nZ)().makeMathJaxSVG(e)) && void 0 !== t
                ? t
                : ""
            ).replace(/currentColor/g, "");
            if (!o) return null;
            const l =
              null ===
                (i = new DOMParser().parseFromString(o, "image/svg+xml")) ||
              void 0 === i
                ? void 0
                : i.documentElement;
            return l
              ? {
                  source: o,
                  size: {
                    width: parseInt(l.getAttribute("width")),
                    height: parseInt(l.getAttribute("height")),
                  },
                }
              : null;
          })(c);
        {
          const e =
              null !==
                (o =
                  null !== (i = null == d ? void 0 : d.width) && void 0 !== i
                    ? i
                    : null == a
                      ? void 0
                      : a.width) && void 0 !== o
                ? o
                : null == u
                  ? void 0
                  : u.imageWidth,
            t =
              null !==
                (n =
                  null !== (l = null == d ? void 0 : d.height) && void 0 !== l
                    ? l
                    : null == a
                      ? void 0
                      : a.height) && void 0 !== n
                ? n
                : null == u
                  ? void 0
                  : u.imageHeight,
            r = null == s ? void 0 : s.src;
          return e && t && r
            ? { source: r, size: { width: e, height: t } }
            : null;
        }
      }
      function f(e) {
        var t, i;
        const o =
          null ===
            (i =
              null === (t = null == e ? void 0 : e.modelAttributes) ||
              void 0 === t
                ? void 0
                : t.webVideo) || void 0 === i
            ? void 0
            : i.embedUrl;
        return o ? { videoSource: o } : null;
      }
      function E(e) {
        const t = null == e ? void 0 : e.href;
        if (!t) return null;
        const i =
          t &&
          (function (e) {
            return e.toLowerCase().startsWith("xap:resources")
              ? "attachment"
              : e.toLowerCase().startsWith("file:")
                ? "local"
                : e.toLowerCase().startsWith("xmind:")
                  ? null
                  : "webpage";
          })(t);
        return t && i ? { href: t, type: i } : null;
      }
      function S(e) {
        var t, i;
        const o =
          null !==
            (i =
              null === (t = null == e ? void 0 : e.modelAttributes) ||
              void 0 === t
                ? void 0
                : t.structureClass) && void 0 !== i
            ? i
            : null;
        return [n.v.FISHBONELEFTHEADED, n.v.FISHBONERIGHTHEADED].includes(o)
          ? "fishbone"
          : [
                n.v.TIMELINEHORIZONTAL,
                n.v.TIMELINESIDEDHORIZONTAL,
                n.v.TIMELINETHROUGHVERTICAL,
              ].includes(o)
            ? "timeline"
            : null;
      }
    },
    18943: (e, t, i) => {
      i.r(t), i.d(t, { exportPowerPoint: () => p });
      var o = i(23907),
        l = i(94787),
        n = i(72298),
        r = i(13382),
        s = i(18621),
        a = i(96160),
        d = i(5893),
        u = i(21718),
        c = function (e, t, i, o) {
          return new (i || (i = Promise))(function (l, n) {
            function r(e) {
              try {
                a(o.next(e));
              } catch (e) {
                n(e);
              }
            }
            function s(e) {
              try {
                a(o.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function a(e) {
              var t;
              e.done
                ? l(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, s);
            }
            a((o = o.apply(e, t || [])).next());
          });
        };
      function p() {
        var e, t, i, p, v;
        return c(this, void 0, void 0, function* () {
          (0, l.Ae)("powerpoint");
          const h = Date.now(),
            F = yield (function () {
              return c(this, void 0, void 0, function* () {
                const e = (0, u.v)(),
                  t = new o.Z();
                t.layout = "LAYOUT_16x9";
                for (const [i, o] of e.entries()) {
                  const e = t.addSlide();
                  (e.background = {
                    color: o.backgroundColor,
                    transparency: o.backgroundTransparency,
                  }),
                    o.boxes.forEach((t) => {
                      "text" in t
                        ? e.addText(t.text, t)
                        : "data" in t || "path" in t
                          ? e.addImage(t)
                          : e.addShape("rect", t);
                    });
                }
                return yield t.write({ outputType: "nodebuffer" });
              });
            })();
          (0, s.L9)({
            eventCategory: "PitchMode",
            eventAction: "durationExportPpt",
            eventValue: Date.now() - h,
          }),
            yield (0, l.Gm)();
          const { activeSheet: m } = (0, a.nZ)(),
            C =
              (0, d.N6)(
                null !==
                  (i =
                    null ===
                      (t =
                        null === (e = m.value) || void 0 === e
                          ? void 0
                          : e.rootTopic) || void 0 === t
                      ? void 0
                      : t.title) && void 0 !== i
                  ? i
                  : "",
              ) ||
              (0, d.N6)(
                null !==
                  (v =
                    null === (p = m.value) || void 0 === p
                      ? void 0
                      : p.title) && void 0 !== v
                  ? v
                  : "",
              ),
            g = yield (0, r.ZZ)({
              title: "Export",
              suggestPath: { suggestedName: C },
              filters: [{ name: "PowerPoint", extensions: ["pptx"] }],
            });
          g &&
            ((0, s.L9)({
              eventCategory: "PitchMode",
              eventAction: "exportPowerPoint",
            }),
            yield (0, l.yS)(g, F),
            n.shell.showItemInFolder(g));
        });
      }
    },
  },
]);
