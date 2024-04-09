(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [5250],
  {
    71623: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => i });
      var o = n(23645),
        r = n.n(o)()(function (e) {
          return e[1];
        });
      r.push([
        e.id,
        ".card-text {\n  max-height: 44px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n#delete-icon {\n  display: none;\n}\n#inforrmation-button:hover #delete-icon {\n  display: block;\n}\n",
        "",
      ]);
      const i = r;
    },
    10454: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => i });
      var o = n(23645),
        r = n.n(o)()(function (e) {
          return e[1];
        });
      r.push([
        e.id,
        ".topic-popover-overlay {\n  display: block;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1010;\n  background-color: transparent;\n  border: none;\n}\n",
        "",
      ]);
      const i = r;
    },
    96874: (e) => {
      e.exports = function (e, t, n) {
        switch (n.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, n[0]);
          case 2:
            return e.call(t, n[0], n[1]);
          case 3:
            return e.call(t, n[0], n[1], n[2]);
        }
        return e.apply(t, n);
      };
    },
    29932: (e) => {
      e.exports = function (e, t) {
        for (var n = -1, o = null == e ? 0 : e.length, r = Array(o); ++n < o; )
          r[n] = t(e[n], n, e);
        return r;
      };
    },
    34865: (e, t, n) => {
      var o = n(89465),
        r = n(77813),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n) {
        var l = e[t];
        (i.call(e, t) && r(l, n) && (void 0 !== n || t in e)) || o(e, t, n);
      };
    },
    89465: (e, t, n) => {
      var o = n(38777);
      e.exports = function (e, t, n) {
        "__proto__" == t && o
          ? o(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    21078: (e, t, n) => {
      var o = n(62488),
        r = n(37285);
      e.exports = function e(t, n, i, l, a) {
        var u = -1,
          c = t.length;
        for (i || (i = r), a || (a = []); ++u < c; ) {
          var s = t[u];
          n > 0 && i(s)
            ? n > 1
              ? e(s, n - 1, i, l, a)
              : o(a, s)
            : l || (a[a.length] = s);
        }
        return a;
      };
    },
    97786: (e, t, n) => {
      var o = n(71811),
        r = n(40327);
      e.exports = function (e, t) {
        for (var n = 0, i = (t = o(t, e)).length; null != e && n < i; )
          e = e[r(t[n++])];
        return n && n == i ? e : void 0;
      };
    },
    13: (e) => {
      e.exports = function (e, t) {
        return null != e && t in Object(e);
      };
    },
    25970: (e, t, n) => {
      var o = n(63012),
        r = n(79095);
      e.exports = function (e, t) {
        return o(e, t, function (t, n) {
          return r(e, n);
        });
      };
    },
    63012: (e, t, n) => {
      var o = n(97786),
        r = n(10611),
        i = n(71811);
      e.exports = function (e, t, n) {
        for (var l = -1, a = t.length, u = {}; ++l < a; ) {
          var c = t[l],
            s = o(e, c);
          n(s, c) && r(u, i(c, e), s);
        }
        return u;
      };
    },
    10611: (e, t, n) => {
      var o = n(34865),
        r = n(71811),
        i = n(65776),
        l = n(13218),
        a = n(40327);
      e.exports = function (e, t, n, u) {
        if (!l(e)) return e;
        for (
          var c = -1, s = (t = r(t, e)).length, p = s - 1, d = e;
          null != d && ++c < s;

        ) {
          var v = a(t[c]),
            f = n;
          if ("__proto__" === v || "constructor" === v || "prototype" === v)
            return e;
          if (c != p) {
            var h = d[v];
            void 0 === (f = u ? u(h, v, d) : void 0) &&
              (f = l(h) ? h : i(t[c + 1]) ? [] : {});
          }
          o(d, v, f), (d = d[v]);
        }
        return e;
      };
    },
    56560: (e, t, n) => {
      var o = n(75703),
        r = n(38777),
        i = n(6557),
        l = r
          ? function (e, t) {
              return r(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: o(t),
                writable: !0,
              });
            }
          : i;
      e.exports = l;
    },
    80531: (e, t, n) => {
      var o = n(62705),
        r = n(29932),
        i = n(1469),
        l = n(33448),
        a = o ? o.prototype : void 0,
        u = a ? a.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (i(t)) return r(t, e) + "";
        if (l(t)) return u ? u.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -Infinity ? "-0" : n;
      };
    },
    71811: (e, t, n) => {
      var o = n(1469),
        r = n(15403),
        i = n(55514),
        l = n(79833);
      e.exports = function (e, t) {
        return o(e) ? e : r(e, t) ? [e] : i(l(e));
      };
    },
    38777: (e, t, n) => {
      var o = n(10852),
        r = (function () {
          try {
            var e = o(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        })();
      e.exports = r;
    },
    99021: (e, t, n) => {
      var o = n(85564),
        r = n(45357),
        i = n(30061);
      e.exports = function (e) {
        return i(r(e, void 0, o), e + "");
      };
    },
    222: (e, t, n) => {
      var o = n(71811),
        r = n(35694),
        i = n(1469),
        l = n(65776),
        a = n(41780),
        u = n(40327);
      e.exports = function (e, t, n) {
        for (var c = -1, s = (t = o(t, e)).length, p = !1; ++c < s; ) {
          var d = u(t[c]);
          if (!(p = null != e && n(e, d))) break;
          e = e[d];
        }
        return p || ++c != s
          ? p
          : !!(s = null == e ? 0 : e.length) &&
              a(s) &&
              l(d, s) &&
              (i(e) || r(e));
      };
    },
    37285: (e, t, n) => {
      var o = n(62705),
        r = n(35694),
        i = n(1469),
        l = o ? o.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return i(e) || r(e) || !!(l && e && e[l]);
      };
    },
    15403: (e, t, n) => {
      var o = n(1469),
        r = n(33448),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        l = /^\w*$/;
      e.exports = function (e, t) {
        if (o(e)) return !1;
        var n = typeof e;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != e &&
            !r(e)
          ) ||
          l.test(e) ||
          !i.test(e) ||
          (null != t && e in Object(t))
        );
      };
    },
    24523: (e, t, n) => {
      var o = n(88306);
      e.exports = function (e) {
        var t = o(e, function (e) {
            return 500 === n.size && n.clear(), e;
          }),
          n = t.cache;
        return t;
      };
    },
    45357: (e, t, n) => {
      var o = n(96874),
        r = Math.max;
      e.exports = function (e, t, n) {
        return (
          (t = r(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var i = arguments, l = -1, a = r(i.length - t, 0), u = Array(a);
              ++l < a;

            )
              u[l] = i[t + l];
            l = -1;
            for (var c = Array(t + 1); ++l < t; ) c[l] = i[l];
            return (c[t] = n(u)), o(e, this, c);
          }
        );
      };
    },
    30061: (e, t, n) => {
      var o = n(56560),
        r = n(21275)(o);
      e.exports = r;
    },
    21275: (e) => {
      var t = Date.now;
      e.exports = function (e) {
        var n = 0,
          o = 0;
        return function () {
          var r = t(),
            i = 16 - (r - o);
          if (((o = r), i > 0)) {
            if (++n >= 800) return arguments[0];
          } else n = 0;
          return e.apply(void 0, arguments);
        };
      };
    },
    55514: (e, t, n) => {
      var o = n(24523),
        r =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        l = o(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(r, function (e, n, o, r) {
              t.push(o ? r.replace(i, "$1") : n || e);
            }),
            t
          );
        });
      e.exports = l;
    },
    40327: (e, t, n) => {
      var o = n(33448);
      e.exports = function (e) {
        if ("string" == typeof e || o(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Infinity ? "-0" : t;
      };
    },
    75703: (e) => {
      e.exports = function (e) {
        return function () {
          return e;
        };
      };
    },
    85564: (e, t, n) => {
      var o = n(21078);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? o(e, 1) : [];
      };
    },
    79095: (e, t, n) => {
      var o = n(13),
        r = n(222);
      e.exports = function (e, t) {
        return null != e && r(e, t, o);
      };
    },
    6557: (e) => {
      e.exports = function (e) {
        return e;
      };
    },
    88306: (e, t, n) => {
      var o = n(83369);
      function r(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var n = function () {
          var o = arguments,
            r = t ? t.apply(this, o) : o[0],
            i = n.cache;
          if (i.has(r)) return i.get(r);
          var l = e.apply(this, o);
          return (n.cache = i.set(r, l) || i), l;
        };
        return (n.cache = new (r.Cache || o)()), n;
      }
      (r.Cache = o), (e.exports = r);
    },
    78718: (e, t, n) => {
      var o = n(25970),
        r = n(99021)(function (e, t) {
          return null == e ? {} : o(e, t);
        });
      e.exports = r;
    },
    79833: (e, t, n) => {
      var o = n(80531);
      e.exports = function (e) {
        return null == e ? "" : o(e);
      };
    },
    45250: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => C });
      var o = n(2954),
        r = n(96160),
        i = n(21029);
      const l = (0, o.aZ)({
        __name: "card-template",
        props: { cardLeftIconSrc: null, cardContent: null },
        emits: [
          "handleCardClick",
          "handleDeleteIconClick",
          "handleCardContextmenu",
          "handleCardContentClick",
        ],
        setup: (e, { emit: t }) => ({ __sfc: !0, props: e, emits: t }),
      });
      n(72179);
      var a = n(51900);
      const u = (0, a.Z)(
        l,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "button",
            {
              staticClass:
                "uk-button uk-position-relative uk-button-tile uk-button-icon uk-padding-small uk-flex uk-flex-row uk-flex-left",
              attrs: { id: "inforrmation-button" },
              on: {
                click: function (e) {
                  return n.emits("handleCardClick");
                },
                contextmenu: function (e) {
                  return n.emits("handleCardContextmenu");
                },
              },
            },
            [
              t("img", {
                staticClass:
                  "uk-margin-xsmall-right uk-margin-small-left uk-preserve uk-background-norepeat",
                staticStyle: { width: "14px", height: "14px" },
                attrs: {
                  "uk-svg": "",
                  draggable: "false",
                  src: e.$toResourceURL(n.props.cardLeftIconSrc),
                },
              }),
              e._v(" "),
              t(
                "span",
                {
                  staticClass:
                    "uk-text-left uk-overflow-hidden uk-text-break card-text",
                  staticStyle: { width: "200px" },
                  on: {
                    click: function (e) {
                      return (
                        e.stopPropagation(), n.emits("handleCardContentClick")
                      );
                    },
                  },
                },
                [e._v("\n    " + e._s(n.props.cardContent) + "\n  ")],
              ),
              e._v(" "),
              t("span", {
                staticClass:
                  "uk-margin-small-right uk-button-tile uk-position-center-right",
                attrs: { id: "delete-icon", "uk-icon": "icon: trash" },
                on: {
                  click: function (e) {
                    return (
                      e.stopPropagation(), n.emits("handleDeleteIconClick")
                    );
                  },
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
      var c = n(53419),
        s = n(67657),
        p = n(50965),
        d = n(76893);
      var v = n(92636),
        f = n(54856),
        h = n(5893),
        m = n(5546),
        k = n(90435),
        x = n(94593),
        g = n(85786);
      var w = n(75900);
      const y = (0, o.aZ)({
        __name: "informationcard",
        setup(e) {
          const { domRectForSelection: t } = (0, r.nZ)(),
            { setPopoverEditorVisible: n } = (0, i.$)(),
            {
              hyperlink: l,
              openHyperlink: a,
              deleteHyperlink: y,
              showHyperlinkMenu: C,
              showHyperlinkEditor: b,
            } = (() => {
              const { T: e } = (0, p.JE)(),
                { handleCommand: t } = (0, p.JX)(),
                { setPopoverEditorVisible: n } = (0, i.$)(),
                {
                  document: l,
                  selection: a,
                  properties: u,
                  activeSheet: c,
                  executePropertyAction: d,
                } = (0, r.nZ)(),
                w = (0, o.Fl)(() => {
                  var e, t;
                  return null ===
                    (t =
                      null === (e = u.value.webLink) || void 0 === e
                        ? void 0
                        : e.value) || void 0 === t
                    ? void 0
                    : t.href;
                }),
                y = (0, o.Fl)(() => {
                  var e;
                  return null === (e = u.value.topicLink) || void 0 === e
                    ? void 0
                    : e.value;
                }),
                C = (0, o.Fl)(() => {
                  if (y.value) {
                    const e = l.value.query({ id: y.value });
                    return e ? `${e.asTopic().title} (${c.value.title})` : " ";
                  }
                }),
                b = (0, o.Fl)(() => {
                  var e;
                  const t =
                    null === (e = u.value.fileLink) || void 0 === e
                      ? void 0
                      : e.value;
                  if (!t || t.startsWith("xap:")) return;
                  let n;
                  const o = t;
                  if (o.startsWith("file://"))
                    try {
                      n = (0, h.iZ)(o);
                    } catch (e) {
                      n = t.slice(7);
                    }
                  else n = o.startsWith("file:") ? o.slice(5) : o;
                  return n;
                }),
                _ = (0, o.Fl)(() => {
                  var e, t;
                  return null !==
                    (t =
                      null !== (e = w.value) && void 0 !== e ? e : C.value) &&
                    void 0 !== t
                    ? t
                    : b.value;
                }),
                E = () => {
                  d({ name: "mutateProperty:webLink" }),
                    d({ name: "mutateProperty:topicLink" }),
                    d({ name: "mutateProperty:fileLink" });
                },
                P = (0, o.Fl)(() => {
                  let e;
                  if (y.value) {
                    const t = y.value.replace("xmind:#", ""),
                      n = l.value.query({ id: t }).asTopic();
                    e = `${n.title} (${n.ownerSheet.title})`;
                  } else e = _.value;
                  return e;
                });
              return {
                hyperlink: _,
                formatHyperlink: P,
                openHyperlink: () => {
                  if (v.nd) k.ZP.fetch(f.QN);
                  else {
                    const t = a.value.modelIds[0];
                    if (y.value) (0, m.S)(y.value, t);
                    else if (w.value) (0, g.DL)(w.value, e);
                    else if (b.value) {
                      const e = b.value;
                      (0, m.U)(e);
                    }
                  }
                  n("");
                },
                deleteHyperlink: E,
                showHyperlinkMenu: () => {
                  const o =
                      _.value &&
                      !_.value.startsWith("xap:") &&
                      (!!y.value || !!w.value || !!b.value),
                    r = new s.Menu();
                  [
                    {
                      label: e("Edit"),
                      enabled: o,
                      click: () => {
                        y.value
                          ? t("editor.showTopiclinkEditor")
                          : w.value
                            ? t("editor.showHyperlinkEditor")
                            : b.value &&
                              (x.Z.isDirectorySync(b.value)
                                ? t("editor.addFolderLink")
                                : t("editor.addFileLink")),
                          n("");
                      },
                    },
                    { type: "separator" },
                    { label: e("Delete"), click: E },
                  ].forEach((e) => r.append(new s.MenuItem(e))),
                    r.popup({ window: (0, s.getCurrentWindow)() });
                },
                showHyperlinkEditor: () => {
                  w.value
                    ? t("editor.showHyperlinkEditor", !0)
                    : y.value
                      ? t("editor.showTopiclinkEditor")
                      : b.value &&
                        (x.Z.isDirectorySync(b.value)
                          ? t("editor.addFolderLink")
                          : t("editor.addFileLink"));
                },
              };
            })(),
            {
              attachmentFileName: _,
              openAttachment: E,
              deleteAttachment: P,
              showAttachmentMenu: M,
            } = (() => {
              const { T: e } = (0, p.JE)(),
                { setPopoverEditorVisible: t } = (0, i.$)(),
                { properties: n, executeMutationAction: l } = (0, r.nZ)(),
                a = (0, o.Fl)(() => {
                  var e, t;
                  return null ===
                    (t =
                      null === (e = n.value.attachmentFile) || void 0 === e
                        ? void 0
                        : e.value) || void 0 === t
                    ? void 0
                    : t.fileName;
                }),
                u = (0, o.Fl)(() => {
                  var e, t;
                  const o =
                    null ===
                      (t =
                        null === (e = n.value.attachmentFile) || void 0 === e
                          ? void 0
                          : e.value) || void 0 === t
                      ? void 0
                      : t.resourcePath;
                  return o && "xap:" + o;
                }),
                c = () => {
                  l({ name: "mutate:removeAttachment" });
                };
              return {
                attachmentFileName: a,
                openAttachment: () => {
                  (0, w.F)(a.value, u.value), t("");
                },
                deleteAttachment: c,
                showAttachmentMenu: () => {
                  const t = new s.Menu();
                  [
                    { label: e("Edit"), enabled: !1 },
                    { type: "separator" },
                    { label: e("Delete"), click: c },
                  ].forEach((e) => t.append(new s.MenuItem(e))),
                    t.popup({ window: (0, s.getCurrentWindow)() });
                },
              };
            })(),
            {
              audioName: A,
              openAudio: L,
              showAudioMenu: F,
              deleteAudio: I,
            } = (() => {
              const { T: e } = (0, p.JE)(),
                { updateAudioBarMode: t } = (0, d.E)(),
                { setPopoverEditorVisible: n } = (0, i.$)(),
                {
                  selection: l,
                  properties: a,
                  executeMutationAction: u,
                } = (0, r.nZ)(),
                c = (0, o.Fl)(() => a.value.audioNotes.value),
                v = (0, o.Fl)(() => c.value && c.value.title),
                f = () => {
                  u({ name: "mutate:removeAudioNotes" });
                };
              return {
                audioName: v,
                openAudio: () => {
                  if (
                    (n(""),
                    !c.value ||
                      !c.value.resourcePath ||
                      (0, d.E)().audioRecording)
                  )
                    return;
                  const e =
                    "open_new_audio_play" === (0, d.E)().audioBarMode
                      ? "audio_play"
                      : "open_new_audio_play";
                  t({
                    audioBarMode: e,
                    audioTopicId: l.value.modelIds[0],
                    audioAutoplay: !0,
                  });
                },
                deleteAudio: f,
                showAudioMenu: () => {
                  const t = new s.Menu();
                  [
                    { label: e("Edit"), enabled: !1 },
                    { type: "separator" },
                    { label: e("Delete"), click: f },
                  ].forEach((e) => t.append(new s.MenuItem(e))),
                    t.popup({ window: (0, s.getCurrentWindow)() });
                },
              };
            })(),
            {
              notesText: T,
              showNotesEditor: H,
              showNotesMenu: S,
              deleteNotes: N,
            } = (() => {
              const { T: e } = (0, p.JE)(),
                { setPopoverEditorVisible: t } = (0, i.$)(),
                { properties: n, executePropertyAction: l } = (0, r.nZ)(),
                a = (0, o.Fl)(() => {
                  var e, t, o;
                  return null ===
                    (o =
                      null ===
                        (t =
                          null === (e = n.value) || void 0 === e
                            ? void 0
                            : e.notes) || void 0 === t
                        ? void 0
                        : t.value) || void 0 === o
                    ? void 0
                    : o.text;
                }),
                u = () => {
                  t("notes");
                },
                c = () => {
                  l({ name: "mutateProperty:notes", inputValue: null });
                };
              return {
                notesText: a,
                deleteNotes: c,
                showNotesMenu: () => {
                  const t = new s.Menu();
                  [
                    { label: e("Edit"), click: u },
                    { type: "separator" },
                    { label: e("Delete"), click: c },
                  ].forEach((e) => t.append(new s.MenuItem(e))),
                    t.popup({ window: (0, s.getCurrentWindow)() });
                },
                showNotesEditor: u,
              };
            })(),
            Z = (0, o.Fl)(() => {
              var e, t, n;
              return Boolean(
                null !==
                  (n =
                    null !==
                      (t =
                        null !== (e = l.value) && void 0 !== e ? e : T.value) &&
                    void 0 !== t
                      ? t
                      : A.value) && void 0 !== n
                  ? n
                  : _.value,
              );
            }),
            D = (0, o.Fl)(() =>
              [
                {
                  content: T.value,
                  cardLeftIconSrc:
                    "static/images/information-icon/info_notes.svg",
                  handleCardClick: H,
                  handleCardContentClick: H,
                  handleCardContextmenu: S,
                  handleDeleteIconClick: N,
                },
                {
                  content: l.value,
                  cardLeftIconSrc:
                    "static/images/information-icon/info_hyperlink.svg",
                  handleCardClick: b,
                  handleCardContentClick: a,
                  handleCardContextmenu: C,
                  handleDeleteIconClick: y,
                },
                {
                  content: _.value,
                  cardLeftIconSrc:
                    "static/images/information-icon/info_attachment.svg",
                  handleCardClick: E,
                  handleCardContentClick: E,
                  handleCardContextmenu: M,
                  handleDeleteIconClick: P,
                },
                {
                  content: A.value,
                  cardLeftIconSrc:
                    "static/images/information-icon/info_audionotes.svg",
                  handleCardClick: L,
                  handleCardContentClick: L,
                  handleCardContextmenu: F,
                  handleDeleteIconClick: I,
                },
              ].filter((e) => !!e.content),
            ),
            W = () => n("");
          return (
            (0, o.YP)(
              () => Z.value,
              (e) => {
                !1 === e && W();
              },
            ),
            {
              __sfc: !0,
              topicRect: t,
              setPopoverEditorVisible: n,
              hyperlink: l,
              openHyperlink: a,
              deleteHyperlink: y,
              showHyperlinkMenu: C,
              showHyperlinkEditor: b,
              attachmentFileName: _,
              openAttachment: E,
              deleteAttachment: P,
              showAttachmentMenu: M,
              audioName: A,
              openAudio: L,
              showAudioMenu: F,
              deleteAudio: I,
              notesText: T,
              showNotesEditor: H,
              showNotesMenu: S,
              deleteNotes: N,
              isEmpty: Z,
              cardLists: D,
              close: W,
              CardTemplate: u,
              TopicPopoverContainer: c.Z,
            }
          );
        },
      });
      const C = (0, a.Z)(
        y,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            n.TopicPopoverContainer,
            {
              attrs: {
                "topic-height": n.topicRect.height,
                "topic-width": n.topicRect.width,
                "topic-top": n.topicRect.y,
                "topic-left": n.topicRect.x,
                "popover-width": 264,
              },
              on: { "popover-close": n.close },
            },
            [
              t(
                "div",
                {
                  staticClass:
                    "uk-flex uk-flex-column uk-padding-small uk-padding-remove-horizontal",
                },
                e._l(n.cardLists, function (e, o) {
                  return t(n.CardTemplate, {
                    key: o,
                    attrs: {
                      "card-content": e.content,
                      "card-left-icon-src": e.cardLeftIconSrc,
                    },
                    on: {
                      handleCardClick: e.handleCardClick,
                      handleDeleteIconClick: e.handleDeleteIconClick,
                      handleCardContextmenu: e.handleCardContextmenu,
                      handleCardContentClick: e.handleCardContentClick,
                    },
                  });
                }),
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
    53419: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => c });
      var o = n(2954),
        r = n(78718),
        i = n.n(r),
        l = n(96160),
        a = function (e, t, n, o) {
          return new (n || (n = Promise))(function (r, i) {
            function l(e) {
              try {
                u(o.next(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              try {
                u(o.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(l, a);
            }
            u((o = o.apply(e, t || [])).next());
          });
        };
      const u = (0, o.aZ)({
        __name: "topic-popover-container",
        props: {
          topicHeight: null,
          topicWidth: null,
          topicLeft: null,
          topicTop: null,
          popoverWidth: null,
          popoverHeight: null,
          viewPortPadding: null,
          autoShowOnMounted: null,
        },
        emits: ["popover-close"],
        setup(e, { emit: t }) {
          const n = e,
            r = (0, o.FN)(),
            u = (0, o.iH)(null),
            c = (0, o.Fl)(() => {
              const { viewPortPadding: e } = n;
              return void 0 === e ? 16 : e;
            }),
            s = (0, o.Fl)(() => {
              const { autoShowOnMounted: e } = n;
              return void 0 === e || e;
            }),
            p = (0, o.Fl)(() => ({
              top: n.topicTop + "px",
              left: n.topicLeft + "px",
              width: n.topicWidth + "px",
              height: n.topicHeight + "px",
            })),
            d = (e) => {
              const t = e.getBoundingClientRect();
              return Object.assign(
                {},
                i()(t, "top", "left", "right", "bottom", "width", "height"),
                { offsetTop: e.offsetTop, offsetLeft: e.offsetLeft },
              );
            },
            v = () => {
              const e = document.querySelector("#editor-container");
              return e ? d(e) : null;
            },
            f = () => {
              const e = v();
              if (!e) return !1;
              const {
                  popoverHeight: t,
                  popoverWidth: o,
                  topicTop: r,
                  topicLeft: i,
                  topicWidth: a,
                  topicHeight: u,
                } = n,
                s = i + v().left,
                p = r + v().top,
                d = e.offsetTop > p,
                f = e.offsetTop + e.height < u + p + t,
                h = s - (e.left + e.offsetLeft) < o / 2 - a / 2,
                m = e.left + e.offsetLeft + e.width < s + a / 2 + o / 2,
                k = u + t > e.height,
                x = a > e.width;
              let g = e.offsetLeft,
                w = e.offsetTop;
              d && (w = p - c.value),
                f && (w = p + u + n.popoverHeight - e.height + c.value),
                k && (w = Math.max(u - e.height, 0) + p + n.popoverHeight);
              const y = Math.max((n.popoverWidth - a) / 2, 0);
              if (
                (h && (g = s - e.left - c.value - y),
                m && (g = s - e.left + a - e.width + y + c.value),
                x && (g = s + y),
                d || f || h || m || k || x)
              ) {
                const { moveViewport: e } = (0, l.nZ)();
                return e(g, w), !0;
              }
              return !0;
            },
            h = () =>
              a(this, void 0, void 0, function* () {
                if (!(yield f())) return m(!1);
                m(!0);
              }),
            m = (e) => {
              setTimeout(() => {
                r.proxy.$withUIKit((t) => {
                  const n = t.pop(u.value);
                  n && (e ? n.show() : n.hide());
                });
              }, 50);
            };
          return (
            (0, o.bv)(() => {
              s.value && h(),
                (0, o.Y3)(() => {
                  r.proxy.$withUIKit((e) => {
                    e.util.on(u.value, "hidden", () => {
                      t("popover-close");
                    });
                  });
                });
            }),
            {
              __sfc: !0,
              props: n,
              emits: t,
              vm: r,
              popoverEl: u,
              viewPortPadding: c,
              isAutoShowOnMounted: s,
              topicRectStyle: p,
              getElementRect: d,
              getWindowBounds: v,
              moveViewport: f,
              showPopover: h,
              _togglePopover: m,
            }
          );
        },
      });
      n(19455);
      const c = (0, n(51900).Z)(
        u,
        function () {
          var e = this,
            t = e._self._c;
          return t(
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
              t("div", {
                staticClass: "uk-position-absolute",
                style: e._self._setupProxy.topicRectStyle,
              }),
              e._v(" "),
              t(
                "div",
                {
                  ref: "popoverEl",
                  style: {
                    width: e.popoverWidth + "px",
                    height: e.popoverHeight + "px" ?? "auto",
                  },
                  attrs: {
                    "uk-popover": "",
                    "data-cls-overlay": "topic-popover-overlay",
                  },
                },
                [e._t("default")],
                2,
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
    72179: (e, t, n) => {
      var o = n(71623);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[e.id, o, ""]]),
        o.locals && (e.exports = o.locals);
      (0, n(45346).Z)("200ad6b9", o, !0, {});
    },
    19455: (e, t, n) => {
      var o = n(10454);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[e.id, o, ""]]),
        o.locals && (e.exports = o.locals);
      (0, n(45346).Z)("b6d891a8", o, !0, {});
    },
  },
]);
