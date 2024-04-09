(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [7370],
  {
    21896: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => o });
      var i = a(23645),
        r = a.n(i)()(function (e) {
          return e[1];
        });
      r.push([
        e.id,
        ".audio-bar {\n  width: 248px;\n  height: 52px;\n  z-index: 1;\n  margin-top: 24px;\n  border-radius: 8px;\n}\n",
        "",
      ]);
      const o = r;
    },
    68303: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => l });
      var i = a(75644);
      const r = (0, a(86633).ZP)("mp3recorder"),
        o = 0,
        n = 1,
        u = 2;
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
          this.state = n;
          let e = new (window.AudioContext || window.webkitAudioContext)();
          this._context = e;
          let t = e.createMediaStreamSource(this._stream);
          (this.audioInput = t),
            (this.encoder = new i.d(1, e.sampleRate, this.kbps || 128));
          let a = e.createScriptProcessor(this.bufferSize, 1, 1);
          (a.onaudioprocess = (e) => {
            if (this.state === n) {
              let t = e.inputBuffer.getChannelData(0);
              t.filter((e) => 0 !== e).length > 0 && (this.isEmpty = !1);
              for (let e = 0; e < t.length; e += 1152) {
                let a = Math.min(t.length - e, 1152),
                  i = new ArrayBuffer(2 * a),
                  r = new DataView(i),
                  o = 0,
                  n = 0,
                  u = 0;
                for (; u < a; ++u, o += 2)
                  (n = Math.max(-1, Math.min(1, t[e + u]))),
                    r.setInt16(o, n < 0 ? 32768 * n : 32767 * n, !0);
                let l = this.encoder.encodeBuffer(new Int16Array(r.buffer));
                l.length > 0 && this._mp3Data.push(l);
              }
            }
          }),
            t.connect(a),
            a.connect(e.destination);
        }
        pause() {
          this.state === n && (this.state = u);
        }
        resume() {
          this.state === u && (this.state = n);
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
            r.warn("Error while stopping mp3 recording:", e);
          }
          this._context.close(), (this._context = null);
        }
      };
    },
    77370: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => x });
      var i = a(2954),
        r = a(76893),
        o = a(50965),
        n = a(96160),
        u = a(69931),
        l = a(86633),
        d = a(79792),
        s = function (e, t, a, i) {
          return new (a || (a = Promise))(function (r, o) {
            function n(e) {
              try {
                l(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                l(i.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof a
                    ? t
                    : new a(function (e) {
                        e(t);
                      })).then(n, u);
            }
            l((i = i.apply(e, t || [])).next());
          });
        };
      const c = (0, i.aZ)({
        __name: "audio-player",
        emits: ["error"],
        setup(e, { emit: t }) {
          const a = (0, i.iH)(null),
            {
              audioFilePath: c,
              audioAutoplay: p,
              playerTimeString: v,
              audioPlayerIcon: h,
              audioPlayerStatus: f,
              handleClickPlayer: m,
            } = ((e) => {
              const t = (0, l.ZP)("audioBarPlayer"),
                {
                  getResourceUrlByXapUrl: a,
                  document: c,
                  activeSheetViewerAppearance: p,
                } = (0, n.nZ)(),
                v = (0, i.iH)(""),
                h = (0, i.Fl)(() => {
                  var e;
                  const t = (0, d.r)().isZenMode
                      ? (
                          null === (e = p.value) || void 0 === e
                            ? void 0
                            : e.includes("dark")
                        )
                        ? "dark"
                        : "default"
                      : (0, o.S)().appearance,
                    a =
                      "play" === m.value
                        ? `audio-pause@${t}`
                        : `audio-play@${t}`;
                  return (0, u.ju)(`static/assets/images/audio/${a}.svg`);
                }),
                f = (0, i.iH)("00 : 00 : 00"),
                m = (0, i.iH)("inti");
              let g = null,
                y = 0;
              (0, i.bv)(() =>
                s(void 0, void 0, void 0, function* () {
                  e.value.addEventListener(
                    "durationchange",
                    (t) => {
                      e.value.duration != 1 / 0 &&
                        ((y = e.value.duration), w(!0));
                    },
                    !1,
                  ),
                    e.value.addEventListener("play", () => {
                      (m.value = "play"), b("play");
                    }),
                    e.value.addEventListener("pause", () => {
                      (m.value = "pause"), b("pause");
                    }),
                    e.value.addEventListener("ended", () => {
                      (m.value = "end"), b("ended");
                    }),
                    e.value.addEventListener("error", (a) => {
                      (m.value = "error"),
                        t.debug(
                          "Error " +
                            e.value.error.code +
                            "; details: " +
                            e.value.error.message,
                        );
                    }),
                    (v.value = yield k());
                }),
              ),
                (0, i.Jd)(() => {
                  x();
                });
              const k = () =>
                  s(void 0, void 0, void 0, function* () {
                    const e = c.value.query({ id: (0, r.E)().audioTopicId });
                    if (!e) return null;
                    const t = e.asTopic(),
                      i = n.HG.audioNotesFromTopic(t);
                    return i ? a(i) : null;
                  }),
                b = (e) => {
                  switch (e) {
                    case "play":
                      (m.value = "play"), _(), w();
                      break;
                    case "pause":
                      (m.value = "pause"), x(), w();
                      break;
                    case "ended":
                      (m.value = "end"), x(), w(!0);
                  }
                },
                w = (t) => {
                  if (e.value) {
                    const a = e.value.currentTime;
                    f.value = S(1e3 * (t ? y : y - a));
                  }
                },
                _ = () => {
                  x(),
                    (g = window.setInterval(() => {
                      f.value = S(1e3 * (y - e.value.currentTime));
                    }, 1e3));
                },
                S = (e) => {
                  if (Number.isNaN(e) || !Number.isFinite(e) || e < 0)
                    return "00 : 00 : 00";
                  let t = Math.floor(e / 1e3),
                    a = Math.floor(t / 60);
                  t %= 60;
                  const i = Math.floor(a / 60);
                  return (
                    (a %= 60),
                    `${i.toString().padStart(2, "0")} : ${a.toString().padStart(2, "0")} : ${t.toString().padStart(2, "0")}`
                  );
                },
                x = () => {
                  null !== g && (window.clearInterval(g), (g = null));
                };
              return (
                (0, i.YP)(c, () => {
                  (0, r.E)().audioTopicId &&
                    (c.value.query({ id: (0, r.E)().audioTopicId }) ||
                      (m.value = "error"));
                }),
                {
                  audioFilePath: v,
                  audioAutoplay: (0, i.Fl)(() => (0, r.E)().audioAutoplay),
                  audioPlayerIcon: h,
                  playerTimeString: f,
                  audioPlayerStatus: m,
                  handleClickPlayer: () => {
                    e.value &&
                      (e.value.paused
                        ? e.value.play().catch(() => {
                            m.value = "error";
                          })
                        : e.value.pause());
                  },
                }
              );
            })(a);
          return (
            (0, i.YP)(f, (e) => {
              "error" === e && t("error");
            }),
            {
              __sfc: !0,
              emits: t,
              audioElement: a,
              audioFilePath: c,
              audioAutoplay: p,
              playerTimeString: v,
              audioPlayerIcon: h,
              audioPlayerStatus: f,
              handleClickPlayer: m,
            }
          );
        },
      });
      var p = a(51900);
      const v = (0, p.Z)(
        c,
        function () {
          var e = this,
            t = e._self._c,
            a = e._self._setupProxy;
          return t(
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
                    "uk-button uk-button-icon uk-margin-right uk-padding-remove",
                  staticStyle: { background: "transparent" },
                  on: {
                    click: function (e) {
                      return a.handleClickPlayer();
                    },
                  },
                },
                [
                  t("img", {
                    staticClass: "uk-preserve",
                    staticStyle: { width: "32px", height: "32px" },
                    attrs: {
                      draggable: "false",
                      "uk-svg": "",
                      src: a.audioPlayerIcon,
                    },
                  }),
                ],
              ),
              e._v(" "),
              t("div", { staticStyle: { "font-size": "18px" } }, [
                e._v("\n    " + e._s(a.playerTimeString) + "\n  "),
              ]),
              e._v(" "),
              t("audio", {
                ref: "audioElement",
                attrs: {
                  preload: "auto",
                  autoplay: a.audioAutoplay,
                  src: a.audioFilePath,
                },
              }),
            ],
          );
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      var h = a(92636),
        f = a(21029),
        m = a(18621),
        g = a(13382),
        y = a(68303),
        k = function (e, t, a, i) {
          return new (a || (a = Promise))(function (r, o) {
            function n(e) {
              try {
                l(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                l(i.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof a
                    ? t
                    : new a(function (e) {
                        e(t);
                      })).then(n, u);
            }
            l((i = i.apply(e, t || [])).next());
          });
        };
      const b = () => {
          const {
              document: e,
              activeSheetViewer: t,
              changeDoc: a,
              executeAction: l,
              createXapUrlByArrayBuffer: s,
            } = (0, n.nZ)(),
            { T: c } = (0, o.JE)(),
            { updateAudioBarMode: p, updateAudioRecording: v } = (0, r.E)(),
            b = (0, i.iH)("init"),
            w = (0, i.iH)("00 : 00 : 00"),
            _ = (0, i.iH)(null);
          let S = "",
            x = null;
          const A = (0, i.Fl)(() => (0, f.$)().editorMode === h.Pq),
            P = (0, i.Fl)(
              () =>
                "init" === b.value &&
                "audio_record" === (0, r.E)().audioBarMode &&
                !T.value,
            ),
            T = (0, i.Fl)(() => {
              const { document: e, selection: t } = (0, n.nZ)();
              if (A.value) return !0;
              if (!t.value) return !1;
              if ("init" === b.value) {
                return (
                  t.value.modelIds.filter(
                    (t) => "topic" === e.value.query({ id: t }).type,
                  ).length > 0
                );
              }
            }),
            C = (0, i.Fl)(() => {
              var e;
              const { activeSheetViewerAppearance: t } = (0, n.nZ)(),
                a = (0, d.r)().isZenMode
                  ? (
                      null === (e = t.value) || void 0 === e
                        ? void 0
                        : e.includes("dark")
                    )
                    ? "dark"
                    : "default"
                  : (0, o.S)().appearance;
              let i;
              switch (b.value) {
                case "recording":
                  i = `audio-stop@${a}`;
                  break;
                case "recordCompleted":
                  i = `audio-play@${a}`;
                  break;
                default:
                  i = P.value ? "audio-disabled" : "audio-default";
              }
              return (0, u.ju)(`static/assets/images/audio/${i}.svg`);
            }),
            B = () => {
              (b.value = "saving"),
                I(),
                setTimeout(() => {
                  w.value = "00 : 00 : 00";
                }, 0),
                v(!1),
                _.value &&
                  (_.value.stop(),
                  _.value.isEmpty
                    ? (l({
                        name: "mutateBatchDirect",
                        payload: [
                          { name: "mutate:finishEditingTitle" },
                          {
                            name: "mutate:selectTopics",
                            payload: { topics: [S] },
                          },
                          { name: "mutate:delete" },
                        ],
                      }),
                      (b.value = "error"),
                      (0, g.N0)({
                        type: "error",
                        title: "Recording Failed",
                        message: c("Recording Failed"),
                        detail: c(
                          "This could be because that Xmind does not have permission to access microphone or microphone does not work properly.",
                        ),
                        buttons: [c("OK")],
                      }))
                    : (M(_.value.data), (b.value = "recordCompleted")));
            };
          (0, i.bv)(() => {
            navigator.mediaDevices
              .getUserMedia({ audio: !0, video: !1 })
              .then((e) => {
                _.value = new y.Z(e);
              })
              .catch(() => {
                (b.value = "error"),
                  (0, g.N0)({
                    type: "error",
                    title: "Xmind",
                    message: c("Audio Note is Disabled"),
                    detail: c(
                      "Audio note is disabled because no recorder device is detected.",
                    ),
                    buttons: [c("OK")],
                  });
              });
          }),
            (0, i.Jd)(() => {
              "recording" === b.value && B(), I();
            });
          const M = (t) =>
              k(void 0, void 0, void 0, function* () {
                var i, r;
                const o = yield t.arrayBuffer();
                if (o) {
                  const t = yield s(o, ".mp3");
                  setTimeout(() => {
                    p({
                      audioBarMode: "audio_play",
                      audioTopicId: S,
                      audioAutoplay: !1,
                    });
                  }, 10);
                  const u =
                      (null ===
                        (r =
                          null === (i = e.value.query({ id: S })) ||
                          void 0 === i
                            ? void 0
                            : i.asTopic()) || void 0 === r
                        ? void 0
                        : r.title) || "",
                    d = n.HG.changeAudioNotesFor(e.value, S, {
                      title: u,
                      resourcePath: t.substring(4),
                    });
                  d && a(d.ownerDocument),
                    l({
                      name: "mutateBatchDirect",
                      payload: [
                        {
                          name: "mutate:selectTopics",
                          payload: { topics: [S] },
                        },
                      ],
                    });
                }
              }),
            R = () => {
              I();
              const e = new Date().getTime();
              x = window.setInterval(() => {
                w.value = E(Date.now() - e);
              }, 1e3);
            },
            I = () => {
              null !== x && (window.clearInterval(x), (x = null));
            },
            E = (e) => {
              if (Number.isNaN(e) || !Number.isFinite(e) || e < 0)
                return "00 : 00 : 00";
              let t = Math.floor(e / 1e3),
                a = Math.floor(t / 60);
              t %= 60;
              const i = Math.floor(a / 60);
              a %= 60;
              return `${i.toString().padStart(2, "0")} : ${a.toString().padStart(2, "0")} : ${t.toString().padStart(2, "0")}`;
            };
          return (
            (0, i.YP)(e, () => {
              if (!S) return;
              e.value.query({ id: S }) || (b.value = "error");
            }),
            {
              recordTimeString: w,
              audioRecorderIcon: C,
              audioRecorderStatus: b,
              handleClickRecorder: () => {
                P.value ||
                  ("init" === b.value
                    ? k(void 0, void 0, void 0, function* () {
                        if (_.value) {
                          const e = new Date().toLocaleString();
                          yield l({
                            name: "mutateBatchDirect",
                            payload: [
                              {
                                name: "mutate:insertSubtopicWithTitle",
                                inputValue: e,
                              },
                            ],
                          });
                          const a = t.value.getViewerState().selection,
                            i = a && "topics" === a.kind && a.topics[0];
                          (S = i),
                            _.value.start(),
                            (b.value = "recording"),
                            v(!0),
                            R(),
                            (0, m.L9)({
                              eventCategory: "WorkBench",
                              eventAction: "recordAudio",
                            });
                        }
                      })
                    : "recording" === b.value && B());
              },
            }
          );
        },
        w = (0, i.aZ)({
          __name: "audio-recoder",
          emits: ["error"],
          setup(e, { emit: t }) {
            const {
              recordTimeString: a,
              audioRecorderIcon: r,
              audioRecorderStatus: o,
              handleClickRecorder: n,
            } = b();
            return (
              (0, i.YP)(o, (e) => {
                "error" === e && t("error");
              }),
              {
                __sfc: !0,
                emits: t,
                recordTimeString: a,
                audioRecorderIcon: r,
                audioRecorderStatus: o,
                handleClickRecorder: n,
              }
            );
          },
        });
      const _ = (0, p.Z)(
          w,
          function () {
            var e = this,
              t = e._self._c,
              a = e._self._setupProxy;
            return t(
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
                      "uk-button uk-button-icon uk-margin-small-right uk-padding-remove",
                    staticStyle: { background: "transparent" },
                    on: {
                      click: function (e) {
                        return a.handleClickRecorder();
                      },
                    },
                  },
                  [
                    t("img", {
                      staticClass: "uk-preserve",
                      staticStyle: { width: "32px", height: "32px" },
                      attrs: {
                        draggable: "false",
                        "uk-svg": "",
                        src: a.audioRecorderIcon,
                      },
                    }),
                  ],
                ),
                e._v(" "),
                t("div", { staticStyle: { "font-size": "18px" } }, [
                  e._v("\n    " + e._s(a.recordTimeString) + "\n  "),
                ]),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        ).exports,
        S = (0, i.aZ)({
          __name: "audio-bar",
          setup(e) {
            const { updateAudioRecording: t, updateAudioBarMode: a } = (0,
              r.E)(),
              o = (0, i.Fl)(() => "audio_record" === (0, r.E)().audioBarMode),
              n = () => {
                t(!1), a({ audioBarMode: "" });
              };
            return (
              (0, i.Jd)(() => {
                n();
              }),
              {
                __sfc: !0,
                updateAudioRecording: t,
                updateAudioBarMode: a,
                isRecodeMode: o,
                closeAudioBar: n,
                AudioPlayer: v,
                AudioRecoder: _,
              }
            );
          },
        });
      a(23085);
      const x = (0, p.Z)(
        S,
        function () {
          var e = this,
            t = e._self._c,
            a = e._self._setupProxy;
          return t(
            "div",
            {
              staticClass:
                "uk-position-absolute uk-position-top-center uk-box-shadow-floating uk-background-default audio-bar",
              staticStyle: { "-webkit-app-region": "no-drag" },
            },
            [
              t(
                "div",
                {
                  staticClass:
                    "uk-flex uk-flex-middle uk-height-1-1 uk-width-1-1",
                },
                [
                  a.isRecodeMode
                    ? t(a.AudioRecoder, { on: { error: a.closeAudioBar } })
                    : t(a.AudioPlayer, { on: { error: a.closeAudioBar } }),
                  e._v(" "),
                  t("button", {
                    staticClass:
                      "uk-button uk-button-icon uk-button-tile uk-icon uk-margin-right",
                    staticStyle: { width: "24px", height: "24px" },
                    attrs: { "uk-icon": "close" },
                    on: {
                      click: function (e) {
                        return a.closeAudioBar();
                      },
                    },
                  }),
                ],
                1,
              ),
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
    23085: (e, t, a) => {
      var i = a(21896);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals);
      (0, a(45346).Z)("375e78c9", i, !0, {});
    },
  },
]);
