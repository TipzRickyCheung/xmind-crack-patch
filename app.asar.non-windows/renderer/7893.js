(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [7893],
  {
    94878: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => o });
      var i = a(23645),
        n = a.n(i)()(function (e) {
          return e[1];
        });
      n.push([
        e.id,
        ".outliner-audio-bar {\n  margin-top: 24px;\n  width: 248px;\n  height: 52px;\n  z-index: 1;\n  border-radius: 8px;\n}\n.audio-btn {\n  width: 40px;\n  height: 40px;\n  background: unset;\n}\n",
        "",
      ]);
      const o = n;
    },
    38769: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => o });
      var i = a(23645),
        n = a.n(i)()(function (e) {
          return e[1];
        });
      n.push([
        e.id,
        ".branch-only-bar[data-v-a226de70] {\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  z-index: 1;\n  border: none;\n}\n",
        "",
      ]);
      const o = n;
    },
    12245: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => o });
      var i = a(23645),
        n = a.n(i)()(function (e) {
          return e[1];
        });
      n.push([
        e.id,
        ".outliner-mode-container[data-v-1e07d9cc] {\n  outline: none;\n}\n",
        "",
      ]);
      const o = n;
    },
    78198: (e, t, a) => {
      "use strict";
      a.d(t, {
        Y1: () => o,
        ZP: () => n,
        d_: () => u,
        lY: () => r,
        sC: () => l,
      });
      const i = [500, 400, 300, 200, 150, 120, 100, 80, 50, 20, 10],
        n = i,
        o = i[0],
        u = i[i.length - 1];
      function r(e) {
        let t = i[i.length - 1];
        for (let a = i.length - 2; a >= 0 && !(i[a] >= e); a--) t = i[a];
        return t;
      }
      function l(e) {
        let t = i[0];
        for (let a = 1; a < i.length && !(i[a] <= e); a++) t = i[a];
        return t;
      }
    },
    68303: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => l });
      var i = a(75644);
      const n = (0, a(86633).ZP)("mp3recorder"),
        o = 0,
        u = 1,
        r = 2;
      const l = class {
        constructor(e, t) {
          (t = t || {}),
            (this.sampleRate = t.sampleRate || 44100),
            (this.bufferSize = t.bufferSize || 4096),
            (this.kbps = t.kbps || 128),
            (this._mp3Data = []),
            (this._stream = e),
            (this.state = o),
            (this.isEmpty = !0),
            (this.data = null);
        }
        start() {
          if (this.state !== o) return;
          this.state = u;
          let e = new (window.AudioContext || window.webkitAudioContext)();
          this._context = e;
          let t = e.createMediaStreamSource(this._stream);
          (this.audioInput = t),
            (this.encoder = new i.d(1, e.sampleRate, this.kbps || 128));
          let a = e.createScriptProcessor(this.bufferSize, 1, 1);
          (a.onaudioprocess = (e) => {
            if (this.state === u) {
              let t = e.inputBuffer.getChannelData(0);
              t.filter((e) => 0 !== e).length > 0 && (this.isEmpty = !1);
              for (let e = 0; e < t.length; e += 1152) {
                let a = Math.min(t.length - e, 1152),
                  i = new ArrayBuffer(2 * a),
                  n = new DataView(i),
                  o = 0,
                  u = 0,
                  r = 0;
                for (; r < a; ++r, o += 2)
                  (u = Math.max(-1, Math.min(1, t[e + r]))),
                    n.setInt16(o, u < 0 ? 32768 * u : 32767 * u, !0);
                let l = this.encoder.encodeBuffer(new Int16Array(n.buffer));
                l.length > 0 && this._mp3Data.push(l);
              }
            }
          }),
            t.connect(a),
            a.connect(e.destination);
        }
        pause() {
          this.state === u && (this.state = r);
        }
        resume() {
          this.state === r && (this.state = u);
        }
        stop() {
          if (this.state === o) return;
          this.state = o;
          let e = this.encoder.flush();
          e.length > 0 && this._mp3Data.push(new Int8Array(e)),
            (this.data = new Blob(this._mp3Data, { type: "audio/mp3" })),
            this.audioInput.disconnect(),
            (this.audioInput = null);
          try {
            let e = this._stream.getAudioTracks();
            for (let t of e) t.stop();
            this._stream = null;
          } catch (e) {
            n.warn("Error while stopping mp3 recording:", e);
          }
          this._context.close(), (this._context = null);
        }
      };
    },
    22854: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => x });
      var i = a(2954),
        n = a(50965),
        o = a(837),
        u = a(23083),
        r = a(27710),
        l = a(69931),
        s = a(13382),
        d = a(18621),
        c = a(94593),
        p = a(68303),
        v = a(96160),
        h = a(53573),
        f = function (e, t, a, i) {
          return new (a || (a = Promise))(function (n, o) {
            function u(e) {
              try {
                l(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function r(e) {
              try {
                l(i.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof a
                    ? t
                    : new a(function (e) {
                        e(t);
                      })).then(u, r);
            }
            l((i = i.apply(e, t || [])).next());
          });
        };
      const m = (0, i.aZ)({
        __name: "audio-bar",
        setup(e) {
          const t = (e, ...t) => (0, n.JE)().T(e, ...t),
            {
              outlinerState: a,
              updateOutlinerState: o,
              handleOutlinerOperation: u,
            } = (0, h.p)(),
            {
              document: r,
              changeDoc: m,
              getResourceUrlByXapUrl: g,
              createXapUrlByArrayBuffer: y,
            } = (0, v.nZ)(),
            b = (0, i.iH)(""),
            k = (0, i.iH)(null),
            _ = (0, i.iH)(null),
            x = (0, i.iH)(null),
            w = (0, i.iH)(null),
            B = (0, i.iH)("00 : 00 : 00"),
            S = (0, i.iH)("00 : 00 : 00"),
            A = (0, i.iH)(0),
            T = (0, i.iH)(!1),
            M = (0, i.iH)(!1),
            C = (0, i.iH)(""),
            I = (0, i.Fl)(() => a.value.audioBarMode),
            O = (0, i.Fl)(() => "" !== I.value),
            P = (0, i.Fl)(
              () =>
                "" === b.value &&
                "audio_record" === a.value.audioBarMode &&
                0 === a.value.selectionIds.length &&
                !a.value.currEditingTopicId,
            ),
            D = (0, i.Fl)(() => (0, n.S)().appearance),
            R = (0, i.Fl)(() => {
              let e = "";
              switch (b.value) {
                case "recording":
                  e = `audio-stop@${D.value}`;
                  break;
                case "playing":
                  e = `audio-pause@${D.value}`;
                  break;
                case "recordCompleted":
                case "paused":
                case "ended":
                  e = `audio-play@${D.value}`;
                  break;
                default:
                  e = P.value ? "audio-disabled" : "audio-default";
              }
              return (0, l.ju)(`static/assets/images/audio/${e}.svg`);
            }),
            F = () =>
              f(this, void 0, void 0, function* () {
                if (_.value) {
                  const e = a.value.currEditingTopicId;
                  if (!e) return;
                  const t = a.value.topicItems.find((t) => t.topicId === e),
                    n = new Date().toLocaleString();
                  u({
                    type: "add",
                    parentTopicId: t.topicId,
                    targetIndex: t.children.length,
                    title: n,
                    callback: ({ newTopicId: e }) =>
                      f(this, void 0, void 0, function* () {
                        (C.value = e), o({ selectionIds: [e] });
                      }),
                  }),
                    yield (0, i.Y3)(),
                    _.value.start(),
                    (b.value = "recording"),
                    o({ audioRecording: !0 }),
                    Z(),
                    (0, d.L9)({
                      eventCategory: "WorkBench",
                      eventAction: "recordAudio",
                    });
                }
              }),
            Z = () => {
              N();
              const e = new Date().getTime();
              x.value = setInterval(() => {
                S.value = Y(Date.now() - e);
              }, 1e3);
            },
            E = ({ closeAfterDone: e = !1 } = {}) => {
              (T.value = !0),
                N(),
                setTimeout(() => {
                  S.value = "00 : 00 : 00";
                }, 0),
                (M.value = e),
                o({ audioRecording: !1 }),
                _.value &&
                  (_.value.stop(),
                  _.value.isEmpty
                    ? (u({ type: "delete", topicId: a.value.selectionIds[0] }),
                      $(),
                      (0, s.N0)({
                        type: "error",
                        title: "Recording Failed",
                        message: t("Recording Failed"),
                        detail: t(
                          "This could be because that Xmind does not have permission to access microphone or microphone does not work properly.",
                        ),
                        buttons: [t("OK")],
                      }))
                    : J(_.value.data));
            },
            J = (e) =>
              f(this, void 0, void 0, function* () {
                var t, a;
                const i = yield e.arrayBuffer();
                if (i) {
                  const e = yield y(i, ".mp3"),
                    n =
                      null === (t = r.value.query({ id: C.value })) ||
                      void 0 === t
                        ? void 0
                        : t.asTopic();
                  if (n) {
                    const t =
                        null !== (a = null == n ? void 0 : n.title) &&
                        void 0 !== a
                          ? a
                          : "",
                      i = v.HG.changeAudioNotesFor(r.value, C.value, {
                        title: t,
                        resourcePath: e.substring(4),
                      });
                    i && m(i.ownerDocument);
                  }
                  !M.value &&
                    setTimeout(() => {
                      o({
                        audioBarMode: "audio_play",
                        audioFilePath: n ? e : "",
                        audioAutoPlay: !1,
                      });
                    }, 10);
                }
                M.value && $();
              }),
            N = () => {
              x.value && (clearInterval(x.value), (x.value = null));
            },
            H = () => {
              w.value && (clearInterval(w.value), (w.value = null));
            },
            L = () => {
              navigator.mediaDevices
                .getUserMedia({ audio: !0, video: !1 })
                .then((e) => {
                  _.value = new p.Z(e);
                })
                .catch(() => {
                  $(),
                    (0, s.N0)({
                      type: "error",
                      title: "Xmind",
                      message: t("Audio Note is Disabled"),
                      detail: t(
                        "Audio note is disabled because no recorder device is detected.",
                      ),
                      buttons: [t("OK")],
                    });
                });
            },
            $ = () => {
              N(),
                (S.value = "00 : 00 : 00"),
                (b.value = ""),
                o({ audioBarMode: "", audioFilePath: "", audioAutoPlay: !1 });
            },
            U = () => {
              try {
                k.value.pause();
              } catch (e) {
                $();
              }
              k.value.removeAttribute("src"), k.value.load();
            },
            z = () =>
              f(this, void 0, void 0, function* () {
                const e = a.value.audioFilePath;
                if (e && c.Z.existsSync(e)) return e;
                const t = a.value.currEditingTopicId;
                if (!t) return;
                const i = a.value.topicItems.find((e) => e.topicId === t);
                if (!i) return;
                return yield g(i.audioNotes);
              }),
            X = (e) => ("0" + e).slice(-2),
            Y = (e) => {
              if (Number.isNaN(e) || !Number.isFinite(e) || e < 0)
                return "00 : 00 : 00";
              let t = Math.floor(e / 1e3),
                a = Math.floor(t / 60);
              t %= 60;
              let i = Math.floor(a / 60);
              return (a %= 60), `${X(i)} : ${X(a)} : ${X(t)}`;
            },
            V = (e = !1) => {
              if (k.value) {
                const t = k.value.currentTime;
                B.value = Y(1e3 * (e ? A.value : A.value - t));
              }
            },
            j = () => {
              N(),
                k.value &&
                  (x.value = setInterval(() => {
                    B.value = Y(1e3 * (A.value - k.value.currentTime));
                  }, 1e3));
            },
            q = (e) => {
              switch (e) {
                case "play":
                  (b.value = "playing"), V(), j();
                  break;
                case "pause":
                  (b.value = "paused"), H(), V();
                  break;
                case "ended":
                  (b.value = "ended"), H(), V(!0);
              }
            },
            G = (e, t) => {
              const a = new Audio(e);
              return (
                (a.autoplay = t),
                (a.preload = "auto"),
                a.addEventListener("play", () => {
                  q("play");
                }),
                a.addEventListener("pause", () => {
                  q("pause");
                }),
                a.addEventListener("ended", () => {
                  q("ended");
                }),
                a.addEventListener("error", (e) => {
                  console.log(
                    "Error " + a.error.code + "; details: " + a.error.message,
                  );
                }),
                a
              );
            },
            K = () =>
              f(this, void 0, void 0, function* () {
                const e = yield z();
                e
                  ? (a.value.audioAutoPlay
                      ? (b.value = "playing")
                      : (b.value = "ended"),
                    k.value
                      ? ((k.value.src = e),
                        (k.value.autoplay = a.value.audioAutoPlay))
                      : (k.value = G(e, a.value.audioAutoPlay)))
                  : $(),
                  Q(e, () => {
                    setTimeout(() => {
                      V(!0);
                    }, 10);
                  });
              }),
            W = () => {
              "recording" === b.value
                ? E({ closeAfterDone: !0 })
                : "playing" === b.value
                  ? (U(), $())
                  : $();
            },
            Q = (e, t) => {
              const a = new Audio(e);
              a.addEventListener(
                "durationchange",
                (e) => {
                  a.duration != 1 / 0 &&
                    ((A.value = a.duration), a.remove(), t());
                },
                !1,
              ),
                a.load(),
                (a.currentTime = 86400),
                (a.volume = 0);
              const i = a.play();
              i &&
                i.then(() => {
                  a.pause();
                });
            };
          let ee;
          return (
            (0, i.YP)(
              () => I.value,
              (e) => {
                switch (((T.value = !1), e)) {
                  case "audio_record":
                    k.value &&
                      (U(), N(), (S.value = "00 : 00 : 00"), (b.value = "")),
                      L();
                    break;
                  case "audio_play":
                    K();
                    break;
                  case "open_new_audio_play":
                    k.value &&
                      (N(), (S.value = "00 : 00 : 00"), (b.value = "")),
                      K();
                }
              },
              { immediate: !0 },
            ),
            (0, i.bv)(() => {
              ee = (0, i.YP)(r, () => {
                if (!C.value) return;
                r.value.query({ id: C.value }) || W();
              });
            }),
            (0, i.Jd)(() => {
              W(), ee && ee();
            }),
            {
              __sfc: !0,
              $T: t,
              outlinerState: a,
              updateOutlinerState: o,
              handleOutlinerOperation: u,
              document: r,
              changeDoc: m,
              getResourceUrlByXapUrl: g,
              createXapUrlByArrayBuffer: y,
              audioStatus: b,
              audio: k,
              audioRecorder: _,
              recordTimer: x,
              playerTimer: w,
              playerTimeString: B,
              recordTimeString: S,
              audioDuration: A,
              isSaving: T,
              isCloseAfterDone: M,
              audioTopicId: C,
              audioBarMode: I,
              isAudioBarVisible: O,
              isRecordDisabled: P,
              appearance: D,
              audioBarIcon: R,
              startRecord: F,
              resumeRecordTimer: Z,
              doneRecord: E,
              saveAudio: J,
              handleRecord: () => {
                (P.value && T.value) || ("recording" !== b.value ? F() : E());
              },
              handlePlay: () => {
                k.value &&
                  (k.value.paused
                    ? k.value.play().catch(() => {
                        W();
                      })
                    : k.value.pause());
              },
              clearRecordTimer: N,
              clearPlayerTimer: H,
              initMediaDevices: L,
              closeAudioBarAndReset: $,
              resetAudioSrc: U,
              getAudioFilePath: z,
              formatNumberWithTwoDigit: X,
              toTimeString: Y,
              playerTimeRemaining: V,
              resumePlayerTimer: j,
              handleAudioStateChange: q,
              createAudio: G,
              prepareAudio: K,
              closeAudioBar: W,
              getDuration: Q,
              unwatch: ee,
            }
          );
        },
      });
      a(12311);
      var g = a(51900);
      const y = (0, g.Z)(
        m,
        function () {
          var e = this,
            t = e._self._c,
            a = e._self._setupProxy;
          return a.isAudioBarVisible
            ? t(
                "div",
                {
                  staticClass:
                    "uk-position-absolute uk-position-top-center uk-box-shadow-floating uk-background-default outliner-audio-bar",
                },
                [
                  t(
                    "div",
                    {
                      staticClass:
                        "uk-flex uk-flex-middle uk-height-1-1 uk-width-1-1",
                    },
                    [
                      "audio_record" === a.audioBarMode
                        ? t(
                            "div",
                            {
                              staticClass:
                                "uk-flex uk-flex-middle uk-flex-row uk-height-1-1 uk-width-expand uk-margin-left",
                            },
                            [
                              t(
                                "button",
                                {
                                  staticClass:
                                    "uk-button uk-button-icon uk-margin-small-right uk-padding-remove audio-btn",
                                  on: { click: a.handleRecord },
                                },
                                [
                                  t("img", {
                                    staticClass: "uk-preserve",
                                    staticStyle: {
                                      width: "32px",
                                      height: "32px",
                                    },
                                    attrs: {
                                      draggable: "false",
                                      "uk-svg": "",
                                      src: a.audioBarIcon,
                                    },
                                  }),
                                ],
                              ),
                              e._v(" "),
                              t(
                                "div",
                                { staticStyle: { "font-size": "18px" } },
                                [
                                  e._v(
                                    "\n        " +
                                      e._s(a.recordTimeString) +
                                      "\n      ",
                                  ),
                                ],
                              ),
                            ],
                          )
                        : e._e(),
                      e._v(" "),
                      "audio_play" === a.audioBarMode ||
                      "open_new_audio_play" === a.audioBarMode
                        ? t(
                            "div",
                            {
                              staticClass:
                                "uk-flex uk-flex-middle uk-flex-row uk-height-1-1 uk-width-expand uk-margin-left",
                            },
                            [
                              t(
                                "button",
                                {
                                  staticClass:
                                    "uk-button uk-button-icon uk-margin-right uk-padding-remove audio-btn",
                                  on: { click: a.handlePlay },
                                },
                                [
                                  t("img", {
                                    staticClass: "uk-preserve",
                                    staticStyle: {
                                      width: "32px",
                                      height: "32px",
                                    },
                                    attrs: {
                                      draggable: "false",
                                      "uk-svg": "",
                                      src: a.audioBarIcon,
                                    },
                                  }),
                                ],
                              ),
                              e._v(" "),
                              t(
                                "div",
                                { staticStyle: { "font-size": "18px" } },
                                [
                                  e._v(
                                    "\n        " +
                                      e._s(a.playerTimeString) +
                                      "\n      ",
                                  ),
                                ],
                              ),
                            ],
                          )
                        : e._e(),
                      e._v(" "),
                      t("button", {
                        staticClass:
                          "uk-button uk-button-icon uk-button-tile uk-icon uk-margin-right",
                        staticStyle: { width: "24px", height: "24px" },
                        attrs: { "uk-icon": "close" },
                        on: { click: a.closeAudioBar },
                      }),
                    ],
                  ),
                ],
              )
            : e._e();
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      const b = (0, i.aZ)({
        __name: "branch-only-bar",
        emits: ["exit"],
        setup: (e, { emit: t }) => ({
          __sfc: !0,
          emit: t,
          handleClick: () => {
            t("exit");
          },
        }),
      });
      a(98756);
      const k = (0, g.Z)(
          b,
          function () {
            var e = this,
              t = e._self._c;
            return t("div", { staticClass: "branch-only-bar" }, [
              t(
                "button",
                {
                  staticClass:
                    "uk-button uk-button-primary uk-flex uk-flex-middle",
                  staticStyle: {
                    "padding-left": "12px",
                    "padding-right": "12px",
                  },
                  on: { click: e._self._setupProxy.handleClick },
                },
                [
                  t("span", { attrs: { "uk-icon": "icon: arrow-left" } }),
                  e._v(" "),
                  t("span", { staticClass: "uk-margin-xsmall-left" }, [
                    e._v(" " + e._s(e.$T("Show Full Content")) + " "),
                  ]),
                ],
              ),
            ]);
          },
          [],
          !1,
          null,
          "a226de70",
          null,
        ).exports,
        _ = (0, i.aZ)({
          __name: "outliner",
          setup(e) {
            const {
                outlinerSheetModel: t,
                handleOutlinerOperation: a,
                outlinerState: l,
                updateOutlinerState: s,
                openOutlinerCtxMenu: d,
                unregisterOutliner: c,
                maxTopicsLoopNum: p,
              } = (0, o.dI)(),
              { registerCommands: v, unregisterCommands: h } = (0, o.Qp)();
            (0, i.JJ)("handleOutlinerOperation", a),
              (0, i.JJ)("outlinerState", l),
              (0, i.JJ)("updateOutlinerState", s),
              (0, i.JJ)("outlinerActions", o.xI),
              (0, i.JJ)("openOutlinerCtxMenu", d);
            const f = (0, i.Fl)(() => l.value.isBranchOnlyMode);
            return (
              (0, i.YP)(
                () => (0, u.U)().isFocusMissing,
                (e) => {
                  e &&
                    setTimeout(() => {
                      const e = (0, o.Gj)(
                        (0, o.dI)().outlinerState.value.currEditingTopicId,
                      );
                      e && e.focus();
                    }, 60);
                },
              ),
              (0, i.bv)(() => {
                v();
              }),
              (0, i.Jd)(() => {
                h(), c();
              }),
              {
                __sfc: !0,
                outlinerSheetModel: t,
                handleOutlinerOperation: a,
                outlinerState: l,
                updateOutlinerState: s,
                openOutlinerCtxMenu: d,
                unregisterOutliner: c,
                maxTopicsLoopNum: p,
                registerCommands: v,
                unregisterCommands: h,
                isBranchOnlyMode: f,
                exitBranchOnlyMode: () => {
                  (0, n.JX)().handleCommand("editor.exitBranchOnly");
                },
                OutlinerMode: r.Z,
                AudioBar: y,
                BranchOnlyBar: k,
              }
            );
          },
        });
      a(49279);
      const x = (0, g.Z)(
        _,
        function () {
          var e = this,
            t = e._self._c,
            a = e._self._setupProxy;
          return t(
            "div",
            {
              staticClass:
                "outliner-mode-container uk-position-cover uk-flex uk-flex-column uk-overflow-hidden",
              attrs: { tabindex: "-1" },
            },
            [
              a.isBranchOnlyMode
                ? t(a.BranchOnlyBar, { on: { exit: a.exitBranchOnlyMode } })
                : e._e(),
              e._v(" "),
              t(a.AudioBar),
              e._v(" "),
              t(
                a.OutlinerMode,
                e._b(
                  {},
                  "outliner-mode",
                  {
                    outlinerSheetModel: a.outlinerSheetModel,
                    maxTopicsLoopNum: a.maxTopicsLoopNum,
                  },
                  !1,
                ),
              ),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "1e07d9cc",
        null,
      ).exports;
    },
    12311: (e, t, a) => {
      var i = a(94878);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, a(45346).Z)("21bb18fa", i, !0, {});
    },
    98756: (e, t, a) => {
      var i = a(38769);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, a(45346).Z)("6fd724de", i, !0, {});
    },
    49279: (e, t, a) => {
      var i = a(12245);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, a(45346).Z)("d28f0b32", i, !0, {});
    },
  },
]);
