(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [7548, 716],
  {
    39940: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => a });
      var o = n(23645),
        i = n.n(o)()(function (e) {
          return e[1];
        });
      i.push([
        e.id,
        "#editor-container[data-v-4f478b30] .sheet-viewer {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: auto;\n  z-index: -1;\n  outline: none;\n  visibility: hidden;\n}\n#editor-container[data-v-4f478b30] .sheet-viewer.active {\n  z-index: 0;\n  visibility: visible;\n}\n.sheet-rendering-mask[data-v-4f478b30] {\n  z-index: 99;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.editor-tooltip[data-v-4f478b30] {\n  background: var(--uk-popover-background, rgba(255, 255, 255, 0.7));\n  color: var(--uk-global-color, #27292a);\n  border-radius: 5px;\n  backdrop-filter: blur(30px);\n  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.35));\n  position: absolute;\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  font-weight: normal;\n}\n.editor-tooltip[data-v-4f478b30]::before {\n  content: ' ';\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-color: var(--uk-popover-arrow-mask-border, rgba(232, 232, 232, 0));\n  border-width: 5px;\n  top: 100%;\n  left: calc(50%);\n  margin-left: -5px;\n  border-top-color: var(--uk-popover-background, rgba(255, 255, 255, 0.7));\n}\n[data-v-4f478b30] #editor-container ::selection {\n  color: unset;\n}\n",
        "",
      ]);
      const a = i;
    },
    70716: (e, t, n) => {
      "use strict";
      var o;
      n.d(t, { v: () => o, w: () => i }),
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
      const i = {
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
    75900: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => f });
      var o = n(71017),
        i = n.n(o),
        a = n(94593),
        r = n(72298),
        d = n(86633),
        l = n(57147),
        c = n(67657),
        s = n(96160),
        u = n(50965),
        m = n(13382),
        v = n(5893),
        p = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, a) {
            function r(e) {
              try {
                l(o.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(o.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      const h = (0, d.ZP)("editor:attachment"),
        f = (e, t) =>
          p(void 0, void 0, void 0, function* () {
            const { getResourceUrlByXapUrl: n } = (0, s.nZ)(),
              o = yield n(t),
              i = (0, v.iZ)(o);
            g(e, i);
          }),
        g = (e, t) =>
          p(void 0, void 0, void 0, function* () {
            const { T: n } = (0, u.JE)(),
              {
                lastSaveDirectory: o,
                doNotShowAttachmentMessageAgain: a,
                setDoNotShowAttachmentMessageAgain: r,
              } = (0, u._I)();
            let d = e,
              l = "";
            const s = i().extname(t);
            try {
              l = o || c.app.getPath("downloads");
            } catch (e) {
              l = "downloads";
            }
            if ((d && !d.endsWith(s) && (d += s), a)) I(t, l, d);
            else {
              const { response: e, checkboxChecked: o } =
                yield c.dialog.showMessageBox({
                  title: "Xmind",
                  message: n("Trying to Open Attachment"),
                  detail: n(
                    "Xmind will save this attachment to $1 and open with default application in your system.",
                    l,
                  ),
                  checkboxLabel: n("Don't show this message again."),
                  buttons: [n("Save and Open"), n("Cancel")],
                  defaultId: 0,
                  cancelId: 1,
                });
              0 === e && (o && r(), I(t, l, d));
            }
          }),
        I = (e, t, n) =>
          p(void 0, void 0, void 0, function* () {
            const { T: o } = (0, u.JE)(),
              { setLastDirectory: d } = (0, u._I)();
            try {
              a.Z.accessSync(t, l.constants.F_OK | l.constants.W_OK);
              const o = (0, v.AK)(t, n),
                d = i().join(t, o);
              yield a.Z.copyFile(e, d), yield r.shell.openPath(d);
            } catch (a) {
              h.info("Failed to save and open attachment", a);
              const [r] = yield (0, m.N0)({
                title: "Xmind",
                message: o("Failed to Save File"),
                detail: o(
                  "Xmind doesn't have permission to save file to $1, please choose another folder to save.",
                  t,
                ),
                buttons: [o("Choose Folder"), o("Cancel")],
                defaultId: 0,
                cancelId: 1,
              });
              if (0 === r) {
                const t = yield (0, m.ZZ)({
                  title: "Save",
                  suggestPath: { suggestedName: n },
                });
                if (t) {
                  const o = i().dirname(t);
                  d({ lastSaveDirectory: o }), yield I(e, o, n);
                }
              }
            }
          });
    },
    5546: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => b, U: () => I });
      var o = n(71017),
        i = n.n(o),
        a = n(94593),
        r = n(72298),
        d = n(86633),
        l = n(67657),
        c = n(50965),
        s = n(57147),
        u = n(5893),
        m = n(13382),
        v = n(96160),
        p = n(42799),
        h = n(16704),
        f = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, a) {
            function r(e) {
              try {
                l(o.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(o.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      const g = (0, d.ZP)("editor:hyperlink"),
        I = (e) =>
          f(void 0, void 0, void 0, function* () {
            const { T: t } = (0, c.JE)(),
              { source: n } = (0, p.F)();
            let o, d;
            if (e.startsWith("file://"))
              try {
                o = (0, u.iZ)(e);
              } catch (t) {
                g.error((0, h.SC)(t)), (o = e.slice(7));
              }
            else o = e.startsWith("file:") ? e.slice(5) : e;
            if (i().isAbsolute(o)) d = o;
            else {
              if (!n.startsWith("file:")) return;
              {
                const e = (0, u.iZ)(n),
                  t = i().dirname(e);
                d = i().join(t, o);
              }
            }
            try {
              a.Z.accessSync(d, s.constants.F_OK), yield r.shell.openPath(d);
            } catch (e) {
              g.info("Failed to open file:", e),
                yield (0, m.N0)({
                  title: "Xmind",
                  message: t("Failed to open this file link."),
                  detail: t(
                    "Probably the location or name of this file/folder is changed.",
                  ),
                  buttons: [t("OK")],
                  defaultId: 0,
                });
            }
          }),
        b = (e, t) => {
          var n;
          const { T: o } = (0, c.JE)(),
            {
              executeMutationAction: i,
              executePropertyAction: a,
              document: r,
              setActiveSheetId: d,
            } = (0, v.nZ)(),
            s = e.replace("xmind:#", ""),
            u =
              null === (n = r.value.query({ id: s })) || void 0 === n
                ? void 0
                : n.asTopic();
          if (u) {
            const e = r.value.query({ id: t }).asTopic().ownerSheet,
              n = u.ownerSheet;
            e.id !== n.id && d(n.id),
              i({
                name: "mutate:selectTopics",
                payload: { topics: [s], centerOn: !0 },
              });
          } else {
            0 ===
              l.dialog.showMessageBoxSync({
                title: o("Invalid Topic Link"),
                message: o(
                  "The target topic may have been deleted. Do you want to delete this topic link as well?",
                ),
                buttons: [o("Delete It"), o("No")],
                defaultId: 0,
                cancelId: 1,
              }) && a({ name: "mutateProperty:topicLink", inputValue: "" });
          }
        };
    },
    27548: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => be });
      var o = n(2954),
        i = n(50965),
        a = n(36442),
        r = n(92636),
        d = n(76893),
        l = n(21029),
        c = n(79792),
        s = n(96160),
        u = n(42799),
        m = n(91324),
        v = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, a) {
            function r(e) {
              try {
                l(o.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(o.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      var p = n(71017),
        h = n.n(p),
        f = n(57310),
        g = n.n(f),
        I = n(63477),
        b = n.n(I),
        y = n(90435),
        T = n(54856),
        E = n(16704),
        w = n(13382),
        S = n(10182),
        k = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, a) {
            function r(e) {
              try {
                l(o.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(o.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      function O() {
        const e = (0, S.y)(),
          t = (0, l.$)(),
          n = (0, u.F)(),
          a = y.ZP.route((0, T.K3)(window.editorId), () =>
            k(this, void 0, void 0, function* () {
              if ((0, u.F)().emptyEditorView) return { canceled: !1 };
              const e = (0, c.A)(),
                t = (0, i.km)(),
                {
                  activeSheetId: n,
                  currentZoomScale: o,
                  sheets: a,
                } = (0, s.nZ)();
              t.updateLastViewStatuses({
                id: n.value,
                lastSheetIndex: a.value.findIndex((e) => e.id === n.value),
                geometryStatus: { scale: o.value },
              }),
                yield new Promise((e) => setTimeout(e, 0));
              const r = (0, u.F)(),
                d = (0, c.A)().saving;
              if (r.isDirty || d) {
                const t = yield (function () {
                  return k(this, void 0, void 0, function* () {
                    const e = (0, c.A)().saving,
                      t = (0, i.JE)().T,
                      n = t(e ? "Continue to save" : "Save"),
                      o = t(e ? "Don't save and Close" : "Don't Save"),
                      a = t(
                        e
                          ? "File is saving"
                          : "Do you want to save the changes?",
                      ),
                      r = t(
                        e
                          ? "The file may be corrupted if you close it now."
                          : "Your changes will be lost if you don't save them.",
                      ),
                      d = t("Cancel"),
                      l = [];
                    l.push(o, d, n);
                    const [s] = yield (0, w.N0)({
                      type: "none",
                      title: "Xmind",
                      message: a,
                      detail: r,
                      buttons: l,
                      defaultId: l.indexOf(n),
                      cancelId: l.indexOf(d),
                      noLink: !0,
                    });
                    if (s == l.indexOf(o)) return !0;
                    if (s == l.indexOf(n)) {
                      if (e) return !1;
                      return yield A();
                    }
                    return !1;
                  });
                })();
                return (
                  t && (null == e || e.setAlive(!1), yield r.close()),
                  { canceled: !t }
                );
              }
              return null == e || e.setAlive(!1), yield r.close(), {};
            }),
          );
        (0, o.bv)(() => {
          e.registerCommands([
            {
              id: "save",
              provider: `editor/${window.editorId}`,
              enabledFn: () => n.isDirty,
              handler: () => {
                n.canSave() ? A() : M();
              },
            },
            {
              id: "saveAs",
              provider: `editor/${window.editorId}`,
              enabledFn: () => t.isWorkbenchReady,
              handler: () => {
                M();
              },
            },
            {
              id: "saveSheetAs",
              provider: `editor/${window.editorId}`,
              enabledFn: () => t.isWorkbenchReady,
              handler: x,
            },
          ]);
        }),
          (0, o.Jd)(() => {
            e.unregisterCommands([
              { id: "save", provider: `editor/${window.editorId}` },
              { id: "saveAs", provider: `editor/${window.editorId}` },
              { id: "saveSheetAs", provider: `editor/${window.editorId}` },
            ]),
              a();
          });
      }
      function A() {
        return k(this, void 0, void 0, function* () {
          const e = (0, u.F)(),
            { canSave: t } = (0, u.F)(),
            n = (0, s.nZ)().document.value,
            o = n.metadataFor(s.aX.KnownMetaKey.DataStructureVersion) || "1";
          if (parseInt(o) < parseInt(s.aX.DocumentDataStructureVersion)) {
            const e = (e, ...t) => (0, i.JE)().T(e, ...t),
              t = yield (0, w.yr)(e);
            if (t.toSave)
              return (
                (0, s.nZ)().changeDoc(
                  n
                    .asMutable()
                    .metadataFor(
                      s.aX.KnownMetaKey.DataStructureVersion,
                      s.aX.DocumentDataStructureVersion,
                    )
                    .commit(),
                ),
                yield A(),
                !0
              );
            if (t.toSaveAs) {
              return yield M();
            }
            return !1;
          }
          if (!t()) return yield M();
          yield e.save();
          const { markDocumentSaved: a } = (0, s.nZ)();
          return a(), !0;
        });
      }
      function M() {
        return k(this, void 0, void 0, function* () {
          const e = (0, u.F)(),
            t = yield e.getSaveAsHandlers();
          if (!t || !t.length)
            throw new Error("No save-as handlers available.");
          return t.length, yield C(t[0]);
        });
      }
      function x(e) {
        return k(this, void 0, void 0, function* () {
          const { document: t } = (0, s.nZ)(),
            n = (0, i.JE)().T,
            o = t.value.sheets[e];
          if (!o) return;
          const a = o.rootTopic.title || "",
            r = yield (0, w.ZZ)({
              title: "Save Sheet As",
              suggestPath: { suggestedName: a },
              filters: [{ name: n("Xmind Workbook"), extensions: ["xmind"] }],
            });
          if (!r) return !1;
          const d = r;
          return yield (0, u.F)().saveSheetAs(e, d), !0;
        });
      }
      function C(e) {
        return k(this, void 0, void 0, function* () {
          const t = yield e.prompt();
          if (!t) return !1;
          const n = (0, s.nZ)().document.value,
            o = n.metadataFor(s.aX.KnownMetaKey.DataStructureVersion) || "1";
          parseInt(o) < parseInt(s.aX.DocumentDataStructureVersion) &&
            (0, s.nZ)().changeDoc(
              n
                .asMutable()
                .metadataFor(
                  s.aX.KnownMetaKey.DataStructureVersion,
                  s.aX.DocumentDataStructureVersion,
                )
                .commit(),
            );
          const i = (0, u.F)(),
            a = i.source;
          yield i.saveAs(t);
          const { markDocumentSaved: r, clearUndo: d } = (0, s.nZ)();
          return (null == a ? void 0 : a.startsWith("file:")) && d(), r(), !0;
        });
      }
      var L = n(86633),
        P = n(7104),
        R = n(5893),
        F = n(18621),
        D = n(69537),
        B = n(95246),
        H = n(23083),
        Z = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, a) {
            function r(e) {
              try {
                l(o.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(o.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      const N = (0, L.ZP)("editor:fm");
      function V() {
        const e = (0, o.FN)().proxy;
        !(function () {
          const e = (0, u.F)();
          (0, o.bv)(() => {
            e.fileId ||
              ((0, d.E)().updateEditorVisible(!1),
              e.waitInited().then(() => {
                e.open()
                  .then(() => {
                    (0, s.pk)().changeFile({ id: e.fileId, stage: e.stage });
                  })
                  .catch((t) => {
                    e.handleOpenError(t).then((e) => {
                      const { recovered: n = !1, prompted: o = !1 } = e || {};
                      if (!n) {
                        if (!o)
                          return y.ZP.fetch(T.Fx, {
                            name: "dialog-problem",
                            payload: {
                              name: "OpenError",
                              message: t.message || t,
                              stack: t.stack,
                              code: "OPEN_FILE",
                            },
                          }).then(() => {
                            window.close();
                          });
                        window.close();
                      }
                    });
                  });
              }));
          });
        })(),
          (function () {
            const e = (0, u.F)();
            window.addEventListener("focus", n);
            let t = !1;
            function n() {
              e.fileId &&
                (t ||
                  (0, c.A)().saving ||
                  ((t = !0),
                  e.heartbeatTest().then((e) => {
                    setTimeout(() => {
                      t = !1;
                    }, 0);
                    const { shouldClose: o = !1 } = e || {};
                    o &&
                      (window.removeEventListener("focus", n),
                      y.ZP.fetch(T.s2, {
                        editors: [window.editorId],
                        forceQuit: !1,
                      }));
                  })));
            }
            (0, o.Jd)(() => {
              window.removeEventListener("focus", n);
            });
          })(),
          O();
        const t = (0, u.F)();
        t.injectThumbnailGenerator({
          generateThumbnail: function (e) {
            return Z(this, void 0, void 0, function* () {
              const t = (0, u.F)(),
                {
                  getSheetViewer: n,
                  activeSheetId: o,
                  document: i,
                } = (0, s.nZ)(),
                a = t.lastThumbnail,
                r = n(e || o.value),
                d = i.value.sheets.find((t) => t.id === (e || o.value)).clone(),
                l = JSON.stringify(d).includes("全瀨體");
              let c;
              const m = 42 / 26;
              try {
                if (l) {
                  const e = yield r.exportSVGImage({
                      padding: s.viewerKit.insetsOf(16),
                      aspectRatio: m,
                      maximumWidth: 2100,
                      maximumHeight: 1300,
                      opaqueBackground: !0,
                      disableEmbedFonts: !0,
                    }),
                    t = e.size,
                    n = e.svg;
                  if (
                    "yes" !==
                    (yield Promise.race([
                      y.ZP.fetch(T.Lk),
                      new Promise((e) => setTimeout(e, 2500)),
                    ]))
                  )
                    return a;
                  c = yield Promise.race([
                    y.ZP.fetch(T.Zm, {
                      data: n,
                      width: Math.round(t.width),
                      height: Math.round(t.height),
                    }),
                    new Promise((e) => setTimeout(e, 18e4)),
                  ]);
                } else
                  c = yield r.exportRasterImage("png", {
                    padding: s.viewerKit.insetsOf(16),
                    aspectRatio: m,
                    maximumWidth: 2100,
                    maximumHeight: 1300,
                    opaqueBackground: !0,
                  });
              } catch (e) {
                N.info("generateThumbnail fail" + e);
              }
              if (c) {
                const e = c.replace(/^data:image\/png;base64,/, "");
                return Buffer.from(e, "base64");
              }
              return a || Buffer.from("", "base64");
            });
          },
        });
        const n = [
          t.addFileEventHook("close", (e) => {
            "closed" === e && (0, d.E)().updateEditorVisible(!1);
          }),
          t.addFileEventHook("save", (e) =>
            Z(this, void 0, void 0, function* () {
              if ("presave" === e) {
                const e = h().join((0, P.N8)(), window.editorId);
                let t = null;
                try {
                  t = yield (0, R.cs)(e);
                } catch (e) {
                  return void N.error((0, E.SC)(e));
                }
                t > r.tZ.FILE_SIZE &&
                  y.ZP.fetch(T.Fx, {
                    name: "dialog-progress",
                    parentId: window.id,
                    wait: !0,
                    query: { type: "xmind", editorId: window.editorId },
                  });
              }
            }),
          ),
          t.addFileEventHook("saveSheet", (e) => {
            "postsavesheet" === e &&
              (0, F.L9)({
                eventCategory: "Save",
                eventAction: "saveSheet",
                eventValue: 1,
              });
          }),
          t.addFileEventHook("close", (e) => {
            "closed" === e &&
              (0, F.L9)({
                eventCategory: "Quit",
                eventAction: "closeTab",
                eventValue: 1,
              });
          }),
          t.addFileEventHook("open", (t) =>
            Z(this, void 0, void 0, function* () {
              "postopen" === t &&
                (function () {
                  Z(this, void 0, void 0, function* () {
                    const t = (0, d.E)(),
                      n = (0, u.F)(),
                      a = (0, i.km)();
                    t.updateMindMapCreated(!0), n.updateMemento(!0);
                    let c = !1;
                    const v = (0, o.YP)((0, s.nZ)().activeSheetViewer, (e) => {
                      var t, n, o, r;
                      if (e) {
                        const l = a.lastViewStatuses.find(
                            (t) => t.id === e.sheetId,
                          ),
                          u =
                            (null ===
                              (t = null == l ? void 0 : l.geometryStatus) ||
                            void 0 === t
                              ? void 0
                              : t.scale) ||
                            (function () {
                              var e, t, n;
                              const { activeSheetId: o } = (0, s.nZ)(),
                                { initialZoomLevel: a } = (0, i.S)(),
                                r =
                                  null === (e = (0, d.E)().sheetStatuses) ||
                                  void 0 === e
                                    ? void 0
                                    : e[o.value];
                              let l =
                                null !==
                                  (t = null == r ? void 0 : r.zoomScale) &&
                                void 0 !== t
                                  ? t
                                  : (0, B.GI)(a) / 100;
                              return (
                                (l =
                                  null !==
                                    (n =
                                      null == r
                                        ? void 0
                                        : r.suggestedZoomScale) && void 0 !== n
                                    ? n
                                    : l),
                                l
                              );
                            })(),
                          m =
                            null !== (n = e.getViewerCenter()) && void 0 !== n
                              ? n
                              : {
                                  x:
                                    (null ===
                                      (o =
                                        null == l
                                          ? void 0
                                          : l.geometryStatus) || void 0 === o
                                      ? void 0
                                      : o.x) || 0,
                                  y:
                                    (null ===
                                      (r =
                                        null == l
                                          ? void 0
                                          : l.geometryStatus) || void 0 === r
                                      ? void 0
                                      : r.y) || 0,
                                };
                        e.centerOn(m, u), (c = !0), v();
                      }
                    });
                    (0, o.YP)((0, s.nZ)().activeSheetViewer, (e) =>
                      Z(this, void 0, void 0, function* () {
                        if (!c) return;
                        e &&
                          (function (e) {
                            var t, n, o, a, r;
                            if (!(null == e ? void 0 : e.sheetId)) return;
                            const l = e.sheetId,
                              { initialZoomLevel: c } = (0, i.S)(),
                              s =
                                null === (t = (0, d.E)().sheetStatuses) ||
                                void 0 === t
                                  ? void 0
                                  : t[l];
                            let u =
                              null !== (n = null == s ? void 0 : s.zoomScale) &&
                              void 0 !== n
                                ? n
                                : (0, B.GI)(c);
                            u =
                              null !==
                                (o =
                                  null == s ? void 0 : s.suggestedZoomScale) &&
                              void 0 !== o
                                ? o
                                : u;
                            const m = e.getViewerState(),
                              v =
                                null !== (a = m.zoomScale) && void 0 !== a
                                  ? a
                                  : 1,
                              p =
                                null !== (r = e.getViewerCenter()) &&
                                void 0 !== r
                                  ? r
                                  : { x: 0, y: 0 };
                            u !== 100 * v &&
                              (e.centerOn(p, u / 100),
                              e.changeZoomScale(u / 100));
                            (0, d.E)().updateSheetStatus({
                              id: l,
                              zoomScale: u,
                            });
                          })(e);
                        const {
                          updateSheetRendering: t,
                          sheetRenderingStartAt: n,
                          sheetRendering: o,
                        } = (0, d.E)();
                        if (o && n) {
                          const e = new Date().getTime() - n;
                          e < r.oY && (yield (0, E._v)(r.oY - e)),
                            t({
                              sheetRendering: !1,
                              sheetRenderingStartAt: null,
                            });
                        }
                        e.restoreViewportState();
                      }),
                    ),
                      (0, o.YP)((0, s.nZ)().currentZoomScale, (e) => {
                        if (null == e) return;
                        const { activeSheetId: n } = (0, s.nZ)();
                        (null == n ? void 0 : n.value) &&
                          t.updateSheetStatus({
                            id: n.value,
                            zoomScale: 100 * e,
                          });
                      }),
                      (0, o.YP)(
                        () => a.isAutoBeginnerModeVisible,
                        (e) => t.changeBeginnerModeVisible(e),
                      );
                    const p = 3e5,
                      h = (0, m.P2)(() => {
                        n.makeDocumentCache();
                      }, p);
                    (0, o.YP)(
                      () => (0, s.nZ)().document.value,
                      () => {
                        h();
                      },
                    ),
                      (0, o.YP)(
                        () => (0, H.U)().isFocusMissing,
                        (e) => {
                          var t;
                          (0, l.$)().isOutlinerMode ||
                            (e &&
                              (null ===
                                (t = (0, s.nZ)().activeSheetViewer.value) ||
                                void 0 === t ||
                                t.focus()));
                        },
                      );
                    a.hasShownTutorial ||
                      setTimeout(() => {
                        t.changeBeginnerDialogVisible(!0),
                          (0, o.YP)(
                            () => a.hasShownTutorial,
                            (e) => {
                              e && t.changeBeginnerDialogVisible(!1);
                            },
                          );
                      }, 1400);
                    const f = (0, i.JE)().T,
                      I = n.docCompatibility;
                    I ===
                    s.viewerKit.LayoutEngineIncompatibility.UnsupportedFeatures
                      ? yield (0, w.R2)(f)
                      : (I !==
                          s.viewerKit.LayoutEngineIncompatibility
                            .ObsoleteFeatures &&
                          I !==
                            s.viewerKit.LayoutEngineIncompatibility
                              .Undetermined) ||
                        (yield (0, w.W5)(e),
                        n.changeDirty(!0),
                        n.updateMemento(!1));
                    const y = n.source,
                      T = g().parse(y),
                      S = b().parse(T.query).template || "default";
                    if ("new:" === T.protocol && "default" === S) {
                      const e = (0, o.YP)(
                        (0, s.nZ)().activeSheetViewerInited,
                        (t) => {
                          if (t) {
                            const t = (0, o.YP)(
                              () => (0, s.nZ)().selection.value,
                              (e) => {
                                e.modelIds.length > 0 &&
                                  ((0, l.$)().updateRightBarPanel({
                                    visible: !0,
                                    panel: D.QN.THEME,
                                    tab: D.x9.MAP,
                                  }),
                                  t());
                              },
                            );
                            e();
                          }
                        },
                      );
                    }
                    const k = (yield n.stage.getDocument()).sheets;
                    if (k.length > 0) {
                      const e = a.lastViewStatuses.find((e) =>
                        k.find((t) => t.id === e.id),
                      );
                      (0, s.nZ)().setInitialSheetId(
                        (null == e ? void 0 : e.id) || k[0].id,
                      );
                    }
                    document.addEventListener("mousedown", (e) => {
                      var t, n;
                      if ((0, l.$)().editorMode === r.hO) {
                        if (
                          null ===
                            (n =
                              null === (t = e.target) || void 0 === t
                                ? void 0
                                : t.classList) || void 0 === n
                            ? void 0
                            : n.contains("uk-pop-overlay")
                        )
                          return;
                        const o = (0, s.nZ)().activeSheetViewer.value;
                        if (o && o.includesNode(e.target)) return;
                        if (
                          Array.from(
                            document.querySelectorAll(".keep-edit-session"),
                          ).some((t) => t.contains(e.target))
                        )
                          return;
                        (0, s.nZ)().executeAction({
                          name: "mutate:interruptingEditSession",
                        });
                      }
                    });
                  });
                })();
            }),
          ),
        ];
        (0, o.YP)(
          () => (0, c.A)().saving,
          (e) => {
            e ||
              y.ZP.fetch(T.g_, { name: "dialog-progress" }).catch(() =>
                N.warn("Close process dialog failed."),
              );
          },
        ),
          (0, o.YP)(
            () => (0, i.S)().cjkFontFamily,
            (e) => {
              const { changeDefaultCJKFontFamily: t } = (0, s.nZ)();
              t(e);
            },
            { immediate: !0 },
          ),
          (0, o.Jd)(() => {
            n.forEach((e) => e());
          }),
          (window.canPreformUIkitMutationObserver = ({ target: e }) => {
            var t;
            return (
              !(e && e instanceof Element) ||
              !(null === (t = (0, s.nZ)().activeSheetViewer.value) ||
              void 0 === t
                ? void 0
                : t.includesNode(e))
            );
          });
      }
      var _ = n(94593),
        K = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, a) {
            function r(e) {
              try {
                l(o.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(o.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      const G = (0, L.ZP)("editor:fm");
      function q() {
        return K(this, void 0, void 0, function* () {
          const e = (0, i.km)(),
            t = (0, u.F)(),
            { activeSheetId: n } = (0, s.nZ)(),
            o = e.recentlyOpenedItems,
            a = t.source;
          let r = null;
          if (!a) return;
          const d = o.find((e) => e.source === a);
          let l = t.lastThumbnail;
          const c = t.thumbnailGenerator;
          if ((null == l || 0 === l.byteLength) && c)
            try {
              l = yield c.generateThumbnail(n.value);
            } catch (e) {
              G.error(
                "Export thumbnail failed when update recent",
                (0, E.SC)(e),
              );
            }
          if (l) {
            r =
              d && d.previewUrl && d.previewUrl.endsWith("png")
                ? d.previewUrl
                : `recent/${(0, E.hb)()}.png`;
            try {
              yield _.Z.ensureDir(h().join((0, P.D8)(), "recent")),
                yield _.Z.writeFile(h().join((0, P.D8)(), r), Buffer.from(l));
            } catch (e) {
              G.warn(
                "something wrong when save recent preview img to appData directory",
                e,
              );
            }
          }
          e.appendRecentlyOpenedItem({
            source: a,
            timestamp: new Date().getTime(),
            previewUrl: r || (d && d.previewUrl),
          });
        });
      }
      var J = n(85786);
      var U = n(75900),
        W = n(5546),
        Y = n(87878),
        z = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, a) {
            function r(e) {
              try {
                l(o.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(o.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      const $ = () => {
        const {
            document: e,
            properties: t,
            installTopicImageHandler: n,
            installClickLabelHandler: o,
            installClickMarkerHandler: a,
            installTopicWebVideoHandler: r,
            installClickTopicInfoHandler: c,
            installCheckTaskHandler: u,
          } = (0, s.nZ)(),
          { T: m } = (0, i.JE)(),
          { setPopoverEditorVisible: v } = (0, l.$)(),
          { handleCommand: p } = (0, i.JX)();
        o(() => {
          v("label");
        }),
          u((e) => {
            (0, Y.fR)(e.checked ? "checkTask" : "uncheckTask");
          }),
          n((e) =>
            z(void 0, void 0, void 0, function* () {
              var n;
              if (!e || !t) return;
              const o =
                null === (n = t.value) || void 0 === n
                  ? void 0
                  : n.equation.value;
              (null == o ? void 0 : o.text)
                ? p("editor.showEquationEditor")
                : p("editor.previewImage", { topicId: e.topicId });
            }),
          ),
          a((e) => {
            if (!e) return;
            const t = e.markerId;
            t && p("editor.showMarkerPopup", t);
          }),
          r((e) => {
            var t;
            const n =
              null === (t = null == e ? void 0 : e.webVideo) || void 0 === t
                ? void 0
                : t.embedUrl;
            n && p("videoViewer", { url: n });
          }),
          c((t) => {
            if (!t) return;
            const { infoItemType: n, topicId: o } = t,
              i = e.value.query({ id: o }).asTopic(),
              { title: a, href: r } = i;
            if ("note" === n) v("notes");
            else if ("topic-link" === n) {
              if (!r) return;
              (0, W.S)(r, o);
            } else if ("file-link" === n) {
              if (!r) return;
              (0, W.U)(r);
            } else if ("web-link" === n) {
              if (!r) return;
              (0, J.DL)(r, m);
            } else if ("attachment" === n) {
              if (!a || !r) return;
              (0, U.F)(a, r);
            } else
              "audio-note" === n
                ? ((e) => {
                    const {
                      audioRecording: t,
                      updateAudioBarMode: n,
                      audioBarMode: o,
                    } = (0, d.E)();
                    if (t) return;
                    n({
                      audioBarMode:
                        "open_new_audio_play" === o
                          ? "audio_play"
                          : "open_new_audio_play",
                      audioTopicId: e,
                      audioAutoplay: !0,
                    });
                  })(o)
                : "multiple" === n && v("informationcard");
          });
      };
      var X = n(77242),
        j = n(37475),
        Q = n(67657),
        ee = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, a) {
            function r(e) {
              try {
                l(o.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(o.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      function te(e, t = !1) {
        var n, o, a, r;
        const d = {};
        if ("separator" === e.type) return Object.assign({}, e);
        d.click =
          e.click ||
          function () {
            void 0 !== e.arg
              ? (0, i.JX)().handleCommand(e.commandId, e.arg)
              : (0, i.JX)().handleCommand(e.commandId);
          };
        const l =
            null !== (n = (0, i.JX)().commandById(e.commandId)) && void 0 !== n
              ? n
              : null === (o = (0, c.A)()) || void 0 === o
                ? void 0
                : o.commandById(e.commandId),
          s = l && l.enabled;
        (d.enabled = e.enabled || !!s || !1),
          (d.label =
            null !==
              (r =
                null !== (a = e.label) && void 0 !== a
                  ? a
                  : null == l
                    ? void 0
                    : l.label) && void 0 !== r
              ? r
              : ""),
          e.interactive && (d.label = d.label + "..."),
          (d.accelerator = (0, i.f7)().formarKeybindingForMenu(
            e.accelerator || (0, i.f7)().keybindingByCommandId(e.commandId),
          ));
        const u =
          e.submenu &&
          (m = e.submenu) &&
          m
            .filter(
              (e) =>
                !(function (e) {
                  return "---" === e || (e && "separator" === e.type);
                })(e),
            )
            .every(ne);
        var m;
        (d.submenu = e.submenu && e.submenu.map((e) => te(e, u))),
          e.id && (d.id = e.id);
        const v = true,
          p = ne(e);
        return (
          v ||
            t ||
            (!p && !u) ||
            (d.icon = h().join(
              (0, P.bY)(),
              "static/assets/images/pro/menu-pro-small@2x.png",
            )),
          d
        );
      }
      function ne(e) {
        return r.TK.includes(e.commandId);
      }
      function oe(e, t) {
        return e in t ? e : t.length > 0 ? t[0] : "";
      }
      const ie = {
        validateTargetIsCallout: function (e, t, n) {
          var o;
          const i = oe(e.id, t);
          if (!i) return;
          return (
            (null === (o = n.query({ id: i })) || void 0 === o
              ? void 0
              : o.asTopic().topicType) === s.viewerKit.TopicType.Callout
          );
        },
        getSelectedTopicInfo: function (e, t) {
          const n = [],
            o = [];
          return (
            e.forEach((e) => {
              const i = t.query({ id: e }).asTopic();
              n.push(i), o.push(i.topicType);
            }),
            { selectedTopicList: n, selectedTopicTypeList: o }
          );
        },
        validateIsIncludeMain: function (e, t) {
          for (const n of e) {
            const e = t.query({ id: n }).asTopic();
            if (
              e.topicType === s.viewerKit.TopicType.Attached &&
              e.parentTopic.topicType === s.viewerKit.TopicType.Root
            )
              return !0;
          }
          return !1;
        },
        getTargetBranchByTopic: function (e, t, n) {
          var o;
          const i = oe(e.id, t);
          if (i)
            return null === (o = n.query({ id: i })) || void 0 === o
              ? void 0
              : o.asTopic();
        },
        getContentOnEquation: function (e, t, n) {
          var o;
          const i = oe(e.topicId, t);
          if (!i) return;
          const a = n.query({ id: i }).asTopic();
          if (a.imageIsMathJaxImage) {
            const e = a.extensionBy(s.o9.Equation);
            return null === (o = null == e ? void 0 : e.content) || void 0 === o
              ? void 0
              : o.content;
          }
        },
        getEmbedUrlOnWebVideo: function (e, t, n) {
          var o;
          const i = oe(e.topicId, t);
          if (!i) return;
          const a = n.query({ id: i }).asTopic().extensionBy(s.o9.WebVideo);
          return null === (o = null == a ? void 0 : a.content) || void 0 === o
            ? void 0
            : o.embedUrl;
        },
        getMarkerInfo: function (e, t) {
          if (!oe(e.topicId, t)) return;
          const n = e.id;
          if (!n) return;
          const { markerModule: o } = (0, s.nZ)();
          return { markerId: n, isMissingMarker: !o.getMarkerInfoById(n) };
        },
        getLabelInfo: function (e, t, n) {
          const o = oe(e.topicId, t);
          if (!o) return;
          const i = e.label,
            a = n
              .query({ id: o })
              .asTopic()
              .labels.filter((e) => e !== i)
              .join(",");
          return { selectedLabel: i, resultLabelJoinedStringForDelete: a };
        },
        getTaskInfo: function (e, t, n) {
          var o;
          const i = oe(e.topicId, t);
          if (!i) return;
          const a =
            null === (o = n.query({ id: i })) || void 0 === o
              ? void 0
              : o.asTopic();
          if (!a) return;
          const r = Object.assign({}, a.task);
          return (
            null !== a.aggregatedCountOfTodos &&
              a.aggregatedCountOfTodos === a.aggregatedCountOfCheckedTodos &&
              (r.status = "done"),
            r
          );
        },
        getInfoButtonType: function (e, t) {
          const n = oe(e.topicId, t);
          if (!n) return;
          const { activeSheetViewer: o } = (0, s.nZ)();
          return o.value.getInfoItemTypeForTopicById(n);
        },
        validateIsFolderLink: function (e, t, n) {
          var o;
          const i = oe(e.topicId, t);
          if (!i) return;
          const a =
              null === (o = n.query({ id: i })) || void 0 === o
                ? void 0
                : o.asTopic(),
            r = "file:";
          let d = !1;
          if (a.href && a.href.startsWith(r)) {
            const e = a.href.slice(5);
            try {
              d = _.Z.isDirectorySync(e);
            } catch (e) {}
          }
          return d;
        },
        getTopicIdByInfoButton: function (e, t, n) {
          var o;
          const i = oe(e.topicId, t);
          if (!i) return;
          const a =
            null === (o = n.query({ id: i })) || void 0 === o
              ? void 0
              : o.asTopic();
          return null == a ? void 0 : a.id;
        },
        getImagePreviewData: function (e, t, n) {
          return ee(this, void 0, void 0, function* () {
            const o = oe(e.topicId, t);
            if (!o) return;
            const i = n.query({ id: o }).asTopic();
            if (!i) return;
            const a = yield (0, s.nZ)().getResourceUrlByXapUrl(i.imageSource);
            return {
              imageUrl: a,
              imageSize: yield (0, j.N8)(a),
              title: i.title || "",
              winId: (0, Q.getCurrentWindow)().id,
            };
          });
        },
      };
      var ae = n(70716);
      const { TopicType: re } = s.viewerKit;
      function de(e) {
        if (!0 !== e.hideOnDisabled) return !0;
        if (Object.keys(e).includes("enabled")) return e.enabled;
        const t = (0, i.JX)().commandById(e.commandId);
        return !!t && t.enabled;
      }
      function le(e) {
        return !0;
      }
      const ce = "editor.toggleBranchOnly";
      function se(e) {
        if (e.commandId === ce && void 0 !== e.arg) {
          let t = e.arg;
          for (; t && t.topicType !== re.Root; ) {
            if (t.topicType === re.Callout) return !1;
            if (t.topicType === re.Summary) return !1;
            t = t.parentTopic;
          }
        }
        return !0;
      }
      function ue(e, t, n, o, a) {
        const r = (0, i.JE)().T,
          { activeSheet: d } = (0, s.nZ)(),
          l = d.value.rootTopic.structureClass,
          c = ![
            ae.v.SPREADSHEET,
            ae.v.COLUMNSPREADSHEET,
            ae.v.TREETABLE,
            ae.v.TOPTITLETREETABLE,
          ].includes(l),
          u = [
            { commandId: "editor.showHyperlinkEditor", label: r("Webpage") },
            { commandId: "editor.showTopiclinkEditor", label: r("Topic") },
            {
              commandId: "editor.addFileLink",
              label: r("Local File"),
              hideOnMAS: !0,
            },
            {
              commandId: "editor.addFolderLink",
              label: r("Local Folder"),
              hideOnMAS: !0,
            },
          ].filter(le),
          m = [
            { commandId: "editor.showNotesEditor", label: r("Note") },
            { commandId: "editor.showLabelEditor", label: r("Label") },
            { commandId: "editor.addTask", label: r("Task") },
            { submenu: u, label: r("Link(noun)"), enabled: !0 },
            { type: "separator" },
            {
              commandId: "editor.addAttachmentOnNewTopic",
              label: r("Attachment"),
            },
            { commandId: "editor.addAudioOnNewTopic", label: r("Audio Note") },
            { type: "separator" },
            { commandId: "workbench.toggleMarkerPanel", label: r("Marker") },
            { commandId: "workbench.toggleStickerPanel", label: r("Sticker") },
            {
              commandId: "workbench.toggleIllustrationPanel",
              label: r("Illustration"),
            },
            { commandId: "editor.addLocalImage", label: r("Local Image") },
            { commandId: "editor.showEquationEditor", label: r("Equation") },
          ],
          v = [
            {
              commandId: "editor.removeMarker",
              label: r("Marker"),
              hideOnDisabled: !0,
            },
            {
              commandId: "editor.removeLabel",
              label: r("Label"),
              hideOnDisabled: !0,
            },
            {
              commandId: "editor.removeTask",
              label: r("Task"),
              hideOnDisabled: !0,
            },
            {
              commandId: "editor.removeLink",
              label: r("Link"),
              hideOnDisabled: !0,
            },
          ].filter(de),
          p = [
            {
              commandId: "editor.clearText",
              label: r("Clear Text"),
              hideOnDisabled: !0,
            },
            {
              commandId: "editor.removeMarkerForTopicContextMenu",
              label: r("Remove Marker"),
              hideOnDisabled: !0,
            },
            {
              commandId: "editor.removeLabelForTopicContextMenu",
              label: r("Remove Label"),
              hideOnDisabled: !0,
            },
            {
              commandId: "editor.removeTaskForTopicContextMenu",
              label: r("Remove Task"),
              hideOnDisabled: !0,
            },
            {
              commandId: "editor.removeLinkForTopicContextMenu",
              label: r("Remove Link"),
              hideOnDisabled: !0,
            },
            {
              submenu: v,
              commandId: "editor.removeTopicContent",
              label: r("Remove"),
              hideOnDisabled: !0,
            },
          ],
          h = [
            {
              commandId: "workbench.exportBranchPng",
              label: r("PNG"),
              interactive: !0,
            },
            {
              commandId: "workbench.exportBranchSvg",
              label: r("SVG"),
              interactive: !0,
            },
            {
              commandId: "workbench.exportBranchPdf",
              label: r("PDF"),
              interactive: !0,
            },
            {
              commandId: "workbench.exportBranchMd",
              label: r("Markdown"),
              arg: { selectedTopicList: t },
              interactive: !0,
            },
          ],
          f = [
            { commandId: "editor.alignTopicsToLeft", label: r("Left") },
            { commandId: "editor.alignTopicsToCenter", label: r("Center") },
            { commandId: "editor.alignTopicsToRight", label: r("Right") },
            { type: "separator" },
            { commandId: "editor.alignTopicsToTop", label: r("Top") },
            { commandId: "editor.alignTopicsToMiddle", label: r("Middle") },
            { commandId: "editor.alignTopicsToBottom", label: r("Bottom") },
            { type: "separator" },
            {
              commandId: "editor.distributeTopicsHorizontally",
              label: r("Distribute Horizontally"),
            },
            {
              commandId: "editor.distributeTopicsVertically",
              label: r("Distribute Vertically"),
            },
          ],
          g = [
            { commandId: "delete", label: r("Delete") },
            ...p,
            { type: "separator" },
            { commandId: "editor.copyStyle", label: r("Copy Style") },
            { commandId: "editor.pasteStyle", label: r("Paste Style") },
            { commandId: "editor.resetStyle", label: r("Reset Style") },
          ],
          I = [
            { submenu: m, label: r("Insert"), enabled: !0 },
            { type: "separator" },
            { commandId: "cut", label: r("Cut"), hideOnIncludeSummary: !0 },
            { commandId: "copy", label: r("Copy"), hideOnIncludeSummary: !0 },
            { commandId: "paste", label: r("Paste"), hideOnIncludeSummary: !0 },
            {
              commandId: "duplicate",
              label: r("Duplicate"),
              hideOnIncludeSummary: !0,
            },
            { type: "separator" },
            { commandId: "delete", label: r("Delete") },
            {
              commandId: "deleteSingleTopic",
              label: r("Delete Single Topic"),
              hideOnIncludeSummary: !0,
            },
            ...p,
            { type: "separator" },
            {
              commandId: "editor.checkTask",
              label: r("Mark as Completed"),
              hideOnDisabled: !0,
            },
            {
              commandId: "editor.uncheckTask",
              label: r("Mark as Uncompleted"),
              hideOnDisabled: !0,
            },
            {
              commandId: "editor.cancelTask",
              label: r("Mark as Canceled"),
              hideOnDisabled: !0,
            },
            { type: "separator" },
            { commandId: "editor.copyStyle", label: r("Copy Style") },
            { commandId: "editor.pasteStyle", label: r("Paste Style") },
            { commandId: "editor.resetStyle", label: r("Reset Style") },
            { type: "separator" },
            { commandId: "editor.toggleBranch", hideOnIncludeRoot: !0 },
            { commandId: "editor.toggleAllBranch" },
            { type: "separator", hideOnIncludeRoot: !0 },
            {
              submenu: h,
              label: r("Export Branch To"),
              hideOnIncludeRoot: !0,
              enabled: c,
            },
            {
              commandId: "printBranch",
              label: r("Print Branch"),
              hideOnIncludeRoot: !0,
              interactive: !0,
            },
            { type: "separator", hideOnIncludeRoot: !0 },
            { commandId: ce, hideOnIncludeRoot: !0, arg: a },
            { type: "separator", hideOnIncludeRoot: !0 },
            {
              submenu: f,
              id: "align",
              label: r("Align Floating Topic"),
              enabled: !0,
            },
            {
              commandId: "editor.newSheetFromTopic",
              label: r("New Sheet From Topic"),
            },
            { type: "separator", showOnIncludeMain: !0 },
            {
              commandId: "editor.resetPosition",
              label: r("Reset Position"),
              showOnIncludeMain: !0,
            },
          ];
        return e
          ? g.filter(de)
          : I.filter(de)
              .filter((e) =>
                (function (e, t) {
                  return (
                    !Object.keys(e).includes("hideOnIncludeSummary") ||
                    (t.includes(re.Summary)
                      ? !e.hideOnIncludeSummary
                      : !!e.hideOnIncludeSummary)
                  );
                })(e, n),
              )
              .filter((e) =>
                (function (e, t) {
                  return (
                    !Object.keys(e).includes("hideOnIncludeRoot") ||
                    (t.includes(re.Root)
                      ? !e.hideOnIncludeRoot
                      : !!e.hideOnIncludeRoot)
                  );
                })(e, n),
              )
              .filter((e) =>
                (function (e, t) {
                  return (
                    !Object.keys(e).includes("showOnIncludeMain") ||
                    (e.showOnIncludeMain && t)
                  );
                })(e, o),
              )
              .filter(se);
      }
      function me(e, t, n) {
        const o = (0, i.JE)().T,
          a = [
            { commandId: "editor.editInfoItem", label: o("Edit") },
            { type: "separator" },
            { commandId: "editor.removeNote", label: o("Delete") },
            { type: "separator" },
            {
              commandId: "workbench.showNoteNavigationPanelAndSelect",
              label: o("View All Notes"),
              arg: n,
            },
          ],
          r = [
            { commandId: "editor.removeAudioNotes", label: o("Delete") },
            { type: "separator" },
            { commandId: "editor.saveAsAudioNote", label: o("Save As") },
          ],
          d = [
            { commandId: "editor.removeAttachment", label: o("Delete") },
            { type: "separator" },
            { commandId: "editor.saveAsAttachment", label: o("Save As") },
          ],
          l = [
            {
              commandId: "editor.addFileLink",
              label: o("Edit"),
              hideOnIsFolderLink: !0,
            },
            {
              commandId: "editor.addFolderLink",
              label: o("Edit"),
              hideOnIsFolderLink: !1,
            },
            { commandId: "editor.removeLink", label: o("Delete") },
          ],
          c = [
            { commandId: "editor.showTopiclinkEditor", label: o("Edit") },
            { type: "separator" },
            { commandId: "editor.removeLink", label: o("Delete") },
          ],
          u = [
            { commandId: "editor.editInfoItem", label: o("Edit") },
            { type: "separator" },
            { commandId: "editor.removeLink", label: o("Delete") },
          ];
        switch (e) {
          case s.viewerKit.InfoItemType.Multiple:
            return [];
          case s.viewerKit.InfoItemType.Note:
            return a;
          case s.viewerKit.InfoItemType.AudioNote:
            return r;
          case s.viewerKit.InfoItemType.Attachment:
            return d;
          case s.viewerKit.InfoItemType.FileLink:
            return l.filter((e) =>
              (function (e, t) {
                return (
                  !Object.keys(e).includes("hideOnIsFolderLink") ||
                  (t ? !e.hideOnIsFolderLink : !!e.hideOnIsFolderLink)
                );
              })(e, t),
            );
          case s.viewerKit.InfoItemType.TopicLink:
            return c;
          case s.viewerKit.InfoItemType.WebLink:
            return u;
          default:
            return [];
        }
      }
      var ve = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, a) {
          function r(e) {
            try {
              l(o.next(e));
            } catch (e) {
              a(e);
            }
          }
          function d(e) {
            try {
              l(o.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(r, d);
          }
          l((o = o.apply(e, t || [])).next());
        });
      };
      function pe() {
        const { installContextMenuHandler: e } = (0, s.nZ)();
        e((e) => {
          var t;
          if ("map" !== e.type) return;
          if (null !== e.viewerState.pointerTarget) return;
          const n = (t) => {
              if ((null == t ? void 0 : t.length) > 0) return;
              const n = (function (e) {
                const t = (0, i.JE)().T;
                return [
                  {
                    label: t("Paste"),
                    commandId: "paste",
                    arg: { payload: { targetPoint: e } },
                  },
                  { type: "separator" },
                  {
                    commandId: "editor.preAddFloatingTopic",
                    label: t("Insert Floating Topic"),
                  },
                  {
                    commandId: "editor.addRelationship",
                    label: t("Insert Relationship"),
                  },
                  { type: "separator" },
                  { commandId: "editor.toggleAllBranch" },
                  { type: "separator" },
                  {
                    commandId: "editor.focusAndSelectCenter",
                    label: t("Go to Central Topic"),
                  },
                  { commandId: "selectAll", label: t("Select All") },
                ];
              })(e.contextMenuRequest.locationInContent).map((e) => te(e));
              (0, X.k)(n, e.location);
            },
            { selection: o } = (0, s.nZ)();
          "none" !== (null === (t = o.value) || void 0 === t ? void 0 : t.type)
            ? he(o, n)
            : n([]);
        }),
          e((e) => {
            var t, n;
            if ("topic" !== e.type) return;
            const o = e.viewerState.pointerTarget;
            if ("topic" !== (null == o ? void 0 : o.kind)) return;
            const i = (t) => {
                if (!(null == t ? void 0 : t.includes(o.id))) return;
                const n = ie.validateTargetIsCallout(o, t, e.sheet),
                  i = ie.getSelectedTopicInfo(t, e.sheet);
                if (!i) return;
                const { selectedTopicList: a, selectedTopicTypeList: r } = i,
                  d = ue(
                    n,
                    a,
                    r,
                    ie.validateIsIncludeMain(t, e.sheet),
                    ie.getTargetBranchByTopic(o, t, e.sheet),
                  ).map((e) => te(e));
                (0, X.k)(d, e.location);
              },
              { selection: a } = (0, s.nZ)(),
              r = s.viewerKit.selectedTopicsFrom(e.viewerState.selection);
            "topic" !==
              (null === (t = a.value) || void 0 === t ? void 0 : t.type) ||
            (null === (n = a.value) || void 0 === n
              ? void 0
              : n.modelIds[0]) !== r[0]
              ? he(a, i)
              : i(r);
          }),
          e((e) => {
            var t, n, o;
            if ("boundary" !== e.type) return;
            const a = e.viewerState.pointerTarget;
            if ("boundary" !== (null == a ? void 0 : a.kind)) return;
            const r = (t) => {
                if (!(null == t ? void 0 : t.includes(a.id))) return;
                const n = (function () {
                  const e = (0, i.JE)().T;
                  return [
                    { commandId: "editor.showEditBox", label: e("Edit") },
                    { commandId: "delete", label: e("Delete") },
                    { type: "separator" },
                    { commandId: "editor.copyStyle", label: e("Copy Style") },
                    { commandId: "editor.pasteStyle", label: e("Paste Style") },
                    { commandId: "editor.resetStyle", label: e("Reset Style") },
                  ];
                })().map((e) => te(e));
                (0, X.k)(n, e.location);
              },
              { selection: d } = (0, s.nZ)();
            "textInput" === e.viewerState.focus
              ? fe(d, r)
              : "boundary" !==
                    (null === (t = d.value) || void 0 === t
                      ? void 0
                      : t.type) ||
                  (null === (n = d.value) || void 0 === n
                    ? void 0
                    : n.modelIds[0]) !== a.id
                ? he(d, r)
                : r(
                    null === (o = d.value) || void 0 === o
                      ? void 0
                      : o.modelIds,
                  );
          }),
          e((e) => {
            var t, n, o;
            if ("relationship" !== e.type) return;
            const a = e.viewerState.pointerTarget;
            if ("relationship" !== (null == a ? void 0 : a.kind)) return;
            const r = (t) => {
                if (!(null == t ? void 0 : t.includes(a.id))) return;
                const n = (function () {
                  const e = (0, i.JE)().T;
                  return [
                    { commandId: "editor.showEditBox", label: e("Edit") },
                    { commandId: "delete", label: e("Delete") },
                    { type: "separator" },
                    { commandId: "editor.copyStyle", label: e("Copy Style") },
                    { commandId: "editor.pasteStyle", label: e("Paste Style") },
                    { commandId: "editor.resetStyle", label: e("Reset Style") },
                    { type: "separator" },
                    {
                      commandId: "editor.resetRelationshipPointPositions",
                      label: e("Reset Point Position"),
                    },
                  ];
                })().map((e) => te(e));
                (0, X.k)(n, e.location);
              },
              { selection: d } = (0, s.nZ)();
            "textInput" === e.viewerState.focus
              ? fe(d, r)
              : "relationship" !==
                    (null === (t = d.value) || void 0 === t
                      ? void 0
                      : t.type) ||
                  (null === (n = d.value) || void 0 === n
                    ? void 0
                    : n.modelIds[0]) !== a.id
                ? he(d, r)
                : r(
                    null === (o = d.value) || void 0 === o
                      ? void 0
                      : o.modelIds,
                  );
          }),
          e((e) => {
            var t, n;
            if ("image" !== e.type) return;
            const o = e.viewerState.pointerTarget;
            if ("image" !== (null == o ? void 0 : o.kind)) return;
            const a = (t) =>
                ve(this, void 0, void 0, function* () {
                  if (!(null == t ? void 0 : t.includes(o.topicId))) return;
                  const n = (function (e, t, n) {
                    const o = (0, i.JE)().T,
                      a = [
                        {
                          commandId: "editor.showEquationEditor",
                          label: o("Edit"),
                        },
                        { type: "separator" },
                        {
                          commandId: "cut",
                          label: o("Cut"),
                          arg: { payload: { equation: e } },
                        },
                        {
                          commandId: "copy",
                          label: o("Copy"),
                          arg: { payload: { equation: e } },
                        },
                        { commandId: "delete", label: o("Delete") },
                        { type: "separator" },
                        {
                          commandId: "editor.saveAsEquation",
                          label: o("Save As"),
                        },
                        { type: "separator" },
                        {
                          commandId: "editor.resizeEquation",
                          label: o("Reset Size"),
                        },
                      ],
                      r = [
                        { commandId: "cut", label: o("Cut") },
                        { commandId: "copy", label: o("Copy") },
                        { commandId: "delete", label: o("Delete") },
                        { type: "separator" },
                        {
                          commandId: "videoViewer",
                          label: o("Play"),
                          arg: { url: t },
                        },
                        { type: "separator" },
                        {
                          commandId: "editor.resetImage",
                          label: o("Reset Size"),
                        },
                      ],
                      d = [
                        {
                          commandId: "editor.previewImage",
                          label: o("Preview"),
                          arg: { topicId: n },
                        },
                        { type: "separator" },
                        { commandId: "cut", label: o("Cut") },
                        { commandId: "copy", label: o("Copy") },
                        { commandId: "delete", label: o("Delete") },
                        { type: "separator" },
                        {
                          commandId: "editor.saveAsImage",
                          label: o("Save As"),
                        },
                        { type: "separator" },
                        {
                          commandId: "editor.rotateImageLeft",
                          label: o("Rotate Left"),
                        },
                        {
                          commandId: "editor.resetImage",
                          label: o("Reset Size"),
                        },
                      ];
                    return e ? a : t ? r : d;
                  })(
                    ie.getContentOnEquation(o, t, e.sheet),
                    ie.getEmbedUrlOnWebVideo(o, t, e.sheet),
                    t[0],
                  ).map((e) => te(e));
                  (0, X.k)(n, e.location);
                }),
              { selection: r } = (0, s.nZ)(),
              d = s.viewerKit.selectedTopicsFrom(e.viewerState.selection);
            "image" !==
              (null === (t = r.value) || void 0 === t ? void 0 : t.type) ||
            (null === (n = r.value) || void 0 === n
              ? void 0
              : n.modelIds[0]) !== d[0]
              ? he(r, a)
              : a(d);
          }),
          e((e) => {
            var t, n;
            if ("marker" !== e.type) return;
            const o = e.viewerState.pointerTarget;
            if ("marker" !== (null == o ? void 0 : o.kind)) return;
            const a = (t) => {
                if (!(null == t ? void 0 : t.includes(o.topicId))) return;
                const n = ie.getMarkerInfo(o, t);
                if (!n) return;
                const { markerId: a, isMissingMarker: r } = n,
                  d = (function (e, t) {
                    const n = (0, i.JE)().T,
                      o = [
                        {
                          commandId: "editor.deleteMarker",
                          label: n("Delete"),
                          arg: { value: e },
                        },
                      ],
                      a = [
                        {
                          commandId: "editor.showMarkerPopup",
                          label: n("Edit"),
                          arg: e,
                        },
                        { type: "separator" },
                        {
                          commandId: "cut",
                          label: n("Cut"),
                          arg: { payload: { markerId: e } },
                        },
                        {
                          commandId: "copy",
                          label: n("Copy"),
                          arg: { payload: { markerId: e } },
                        },
                        {
                          commandId: "editor.deleteMarker",
                          label: n("Delete"),
                          arg: { value: e },
                        },
                        { type: "separator" },
                        {
                          commandId:
                            "workbench.showMarkerNavigationPanelAndSelect",
                          label: n("Highlight Relevant Topics"),
                          arg: e,
                        },
                      ];
                    return t ? o : a;
                  })(a, r).map((e) => te(e));
                (0, X.k)(d, e.location);
              },
              { selection: r } = (0, s.nZ)(),
              d = s.viewerKit.selectedTopicsFrom(e.viewerState.selection);
            "topic" !==
              (null === (t = r.value) || void 0 === t ? void 0 : t.type) ||
            (null === (n = r.value) || void 0 === n
              ? void 0
              : n.modelIds[0]) !== d[0]
              ? he(r, a)
              : a(d);
          }),
          e((e) => {
            var t, n;
            if ("label" !== e.type) return;
            const o = e.viewerState.pointerTarget;
            if ("label" !== (null == o ? void 0 : o.kind)) return;
            const a = (t) => {
                if (!(null == t ? void 0 : t.includes(o.topicId))) return;
                const n = ie.getLabelInfo(o, t, e.sheet);
                if (!n) return;
                const {
                    selectedLabel: a,
                    resultLabelJoinedStringForDelete: r,
                  } = n,
                  d = (function (e, t) {
                    const n = (0, i.JE)().T;
                    return [
                      {
                        commandId: "editor.removeTopicLabel",
                        label: n("Delete"),
                        arg: { value: t },
                      },
                      { type: "separator" },
                      {
                        commandId:
                          "workbench.showLabelNavigationPanelAndSelect",
                        label: n("Highlight Relevant Topics"),
                        arg: e,
                      },
                    ];
                  })(a, r).map((e) => te(e));
                (0, X.k)(d, e.location);
              },
              { selection: r } = (0, s.nZ)(),
              d = s.viewerKit.selectedTopicsFrom(e.viewerState.selection);
            "topic" !==
              (null === (t = r.value) || void 0 === t ? void 0 : t.type) ||
            (null === (n = r.value) || void 0 === n
              ? void 0
              : n.modelIds[0]) !== d[0]
              ? he(r, a)
              : a(d);
          }),
          e((e) => {
            var t, n;
            if ("infoButton" !== e.type) return;
            const o = e.viewerState.pointerTarget;
            if ("info-button" !== (null == o ? void 0 : o.kind)) return;
            const i = (t) => {
                if (!(null == t ? void 0 : t.includes(o.topicId))) return;
                const n = me(
                  ie.getInfoButtonType(o, t),
                  ie.validateIsFolderLink(o, t, e.sheet),
                  ie.getTopicIdByInfoButton(o, t, e.sheet),
                ).map((e) => te(e));
                (0, X.k)(n, e.location);
              },
              { selection: a } = (0, s.nZ)(),
              r = s.viewerKit.selectedTopicsFrom(e.viewerState.selection);
            "topic" !==
              (null === (t = a.value) || void 0 === t ? void 0 : t.type) ||
            (null === (n = a.value) || void 0 === n
              ? void 0
              : n.modelIds[0]) !== r[0]
              ? he(a, i)
              : i(r);
          }),
          e((e) => {
            var t, n;
            if ("task" !== e.type) return;
            const o = e.viewerState.pointerTarget;
            if ("task" !== (null == o ? void 0 : o.kind)) return;
            const a = (t) => {
                if (!(null == t ? void 0 : t.includes(o.topicId))) return;
                const n = (function (e) {
                  const t = (0, i.JE)().T;
                  return [
                    { commandId: "editor.removeTask", label: t("Delete") },
                    {
                      commandId: "editor.cancelTask",
                      label: t("Mark as Canceled"),
                    },
                    { type: "separator" },
                    {
                      commandId: "workbench.showTaskNavigationPanelAndSelect",
                      label:
                        "done" === (null == e ? void 0 : e.status)
                          ? t("Highlight Completed Task")
                          : t("Highlight Uncompleted Task"),
                      arg: e,
                    },
                  ];
                })(ie.getTaskInfo(o, t, e.sheet)).map((e) => te(e));
                (0, X.k)(n, e.location);
              },
              { selection: r } = (0, s.nZ)(),
              d = s.viewerKit.selectedTopicsFrom(e.viewerState.selection);
            "topic" !==
              (null === (t = r.value) || void 0 === t ? void 0 : t.type) ||
            (null === (n = r.value) || void 0 === n
              ? void 0
              : n.modelIds[0]) !== d[0]
              ? he(r, a)
              : a(d);
          });
      }
      const he = (e, t) => {
          const n = (0, o.YP)(
            e,
            () => {
              n && n();
              const i = (0, o.YP)(
                  () => (0, c.A)().commands,
                  () => {
                    var n;
                    i && i(),
                      clearTimeout(a),
                      t(
                        null === (n = e.value) || void 0 === n
                          ? void 0
                          : n.modelIds,
                      );
                  },
                ),
                a = setTimeout(() => {
                  var n;
                  i && i(),
                    t(
                      null === (n = e.value) || void 0 === n
                        ? void 0
                        : n.modelIds,
                    );
                }, 400);
            },
            { immediate: !1 },
          );
        },
        fe = (e, t) => {
          const { activeSheetViewerState: n } = (0, s.nZ)(),
            i = (0, o.YP)(
              () => n.value.editSession,
              (n) => {
                if (null === n) {
                  i && i();
                  const n = (0, o.YP)(
                      () => (0, c.A)().commands,
                      () => {
                        var o;
                        n && n(),
                          clearTimeout(a),
                          t(
                            null === (o = e.value) || void 0 === o
                              ? void 0
                              : o.modelIds,
                          );
                      },
                    ),
                    a = setTimeout(() => {
                      var o;
                      n && n(),
                        t(
                          null === (o = e.value) || void 0 === o
                            ? void 0
                            : o.modelIds,
                        );
                    }, 400);
                }
              },
            );
        };
      function ge() {
        !(function () {
          const { document: e, isDirtyDocument: t } = (0, s.nZ)(),
            n = (0, u.F)(),
            i = (0, m.Ds)(
              () =>
                v(this, void 0, void 0, function* () {
                  yield n.saveTemp(), yield n.updateMemento(!1);
                }),
              2e3,
            );
          (0, o.YP)(e, (e, o) => {
            e && o && (n.changeDirty(t()), i());
          }),
            (0, o.YP)(
              () => n.password,
              () =>
                v(this, void 0, void 0, function* () {
                  yield n.saveTemp(), yield n.updateMemento(!1);
                }),
            );
        })(),
          V(),
          (function () {
            const e = (0, u.F)(),
              t = [
                e.addFileEventHook("open", (t) => {
                  "postopen" === t &&
                    e.source.startsWith("file:") &&
                    setTimeout(() => {
                      q();
                    }, 2e3);
                }),
                e.addFileEventHook("save", (t) =>
                  K(this, void 0, void 0, function* () {
                    "postsave" === t &&
                      (e.startJob(),
                      yield q(),
                      e.endJob(),
                      (0, F.L9)({
                        eventCategory: "Save",
                        eventAction: "save",
                        eventValue: 1,
                      }));
                  }),
                ),
                e.addFileEventHook("saveAs", (t) =>
                  K(this, void 0, void 0, function* () {
                    "postsaveas" === t &&
                      (e.startJob(),
                      yield q(),
                      e.endJob(),
                      (0, F.L9)({
                        eventCategory: "Save",
                        eventAction: "saveAs",
                        eventValue: 1,
                      }));
                  }),
                ),
              ];
            (0, o.Jd)(() => {
              t.forEach((e) => e());
            });
          })(),
          (function () {
            const {
                editorContainer: e,
                sheets: t,
                getSheetViewer: n,
              } = (0, s.nZ)(),
              i = (0, l.$)();
            (0, o.YP)(
              () => i.editorMode,
              () => {
                "snowbrush" === i.editorMode &&
                  t.value.forEach((e) => {
                    var t;
                    return null === (t = n(e.id)) || void 0 === t
                      ? void 0
                      : t.checkSize();
                  });
              },
            );
            let a = null;
            (0, o.bv)(() => {
              (0, o.YP)(
                () => e.value,
                () => {
                  a && (a.disconnect(), (a = null)),
                    e.value &&
                      ((a = new ResizeObserver(
                        (0, m.Ds)(() => {
                          t.value.forEach((e) => {
                            var t;
                            return null === (t = n(e.id)) || void 0 === t
                              ? void 0
                              : t.checkSize();
                          });
                        }, 50),
                      )),
                      a.observe(e.value));
                },
              );
            });
          })(),
          pe(),
          $();
        const { updateEditorVisible: e } = (0, d.E)();
        return { updateEditorVisible: e };
      }
      const Ie = (0, o.aZ)({
        __name: "editor",
        props: { progressIndicatorText: { default: "" } },
        setup(e) {
          const t = (0, o.RC)(() => n.e(9891).then(n.bind(n, 49891))),
            u = (0, o.RC)(() =>
              Promise.all([n.e(6486), n.e(2118), n.e(4660)]).then(
                n.bind(n, 74660),
              ),
            ),
            m = (0, o.RC)(() =>
              Promise.all([n.e(6486), n.e(6053), n.e(5763)]).then(
                n.bind(n, 75763),
              ),
            ),
            v = (0, o.RC)(() => n.e(397).then(n.bind(n, 90397))),
            p = (0, o.RC)(() => n.e(6197).then(n.bind(n, 86197))),
            h = (0, o.RC)(() =>
              Promise.all([n.e(5644), n.e(7370)]).then(n.bind(n, 77370)),
            ),
            f = (0, o.RC)(() => n.e(9430).then(n.bind(n, 9430))),
            g = (0, o.RC)(() => n.e(6933).then(n.bind(n, 76933))),
            I = (0, o.RC)(() =>
              Promise.all([n.e(7462), n.e(2312)]).then(n.bind(n, 72312)),
            ),
            b = (0, o.RC)(() => n.e(3462).then(n.bind(n, 3462))),
            y = (0, o.RC)(() => n.e(5250).then(n.bind(n, 45250))),
            T = (0, o.RC)(() => n.e(1626).then(n.bind(n, 71626))),
            E = (0, s.pk)(),
            {
              selection: w,
              isInBranchOnly: S,
              executeEditorAction: k,
              changeLanguage: O,
            } = (0, s.nZ)(),
            { updateEditorVisible: A } = ge(),
            {
              updateRightBarPanel: M,
              updateIconPanel: x,
              updateWorkbenchReady: C,
            } = (0, l.$)(),
            L = (0, o.iH)(!1),
            P = (0, o.Fl)(() => (0, l.$)().isOutlinerMode),
            R = (0, o.Fl)(() => (0, l.$)().pitchMode),
            F = (0, o.Fl)(() => (0, l.$)().zenMode),
            B = (0, o.Fl)(() => {
              var e;
              return (
                F.value &&
                (null === (e = (0, c.r)()) || void 0 === e
                  ? void 0
                  : e.activeEditorId) === window.editorId
              );
            }),
            H = (0, o.Fl)(() => {
              var e;
              return null === (e = (0, c.A)()) || void 0 === e
                ? void 0
                : e.aggregatedContexts["editor.inMapShotMode"];
            }),
            Z = (0, o.Fl)(() => (0, d.E)().isBeginnerModeVisible),
            N = (0, o.Fl)(() => "" !== (0, d.E)().audioBarMode && !P.value),
            V = (0, o.Fl)(() => S.value),
            _ = (0, o.Fl)(() => {
              switch ((0, l.$)().popoverEditorVisible) {
                case "equation":
                  return g;
                case "label":
                  return f;
                case "notes":
                  return I;
                case "markerpopup":
                  return b;
                case "informationcard":
                  return y;
              }
            }),
            K = (0, o.iH)(!1),
            G = (e) => {
              K.value = e;
            },
            q = (0, o.iH)(null),
            J = (e) => {
              q.value = e;
            },
            U = (0, o.iH)(null),
            W = (e) => {
              U.value = e;
            };
          let Y;
          const z = (0, o.Fl)(() => {
              var e, t;
              return {
                left:
                  ((null === (e = null == U ? void 0 : U.value) || void 0 === e
                    ? void 0
                    : e.left) || 0) + "px",
                top:
                  ((null === (t = null == U ? void 0 : U.value) || void 0 === t
                    ? void 0
                    : t.top) || 0) + "px",
                visibility: K.value ? "visible" : "hidden",
              };
            }),
            $ = (0, o.iH)(null),
            X = (0, o.Fl)(() => (0, d.E)().sheetRendering),
            j = (e, t) => {
              M({ panel: e, tab: t });
            },
            Q = () => {
              var e;
              (null === (e = w.value) || void 0 === e
                ? void 0
                : e.modelIds.length) > 0
                ? (0, l.$)().rightBarPanel === D.QN.THEME &&
                  j(D.QN.FORMAT, (0, l.$)().rightPanelTab[D.QN.FORMAT])
                : (0, l.$)().rightBarPanel === D.QN.FORMAT &&
                  j(D.QN.THEME, (0, l.$)().rightPanelTab[D.QN.THEME]);
            };
          return (
            (0, o.YP)(
              () => w.value,
              () => {
                Q();
              },
            ),
            (0, o.YP)(
              () => (0, l.$)().editorMode,
              (e) => {
                M({ visible: !1 }),
                  x({ visible: !1 }),
                  e === r.hO && (j(D.QN.FORMAT), Q()),
                  e === r.Pq && j(D.QN.IMAGE, D.ll.MARKER);
              },
            ),
            (0, o.YP)(
              () => (0, l.$)().zenMode,
              (e) => {
                M({ visible: !1 }),
                  e
                    ? (x({ visible: !1 }),
                      k({
                        name: "mutateEditor:changeShowMapOverview",
                        inputValue: !1,
                      }))
                    : (M({ panel: D.QN.FORMAT }), Q());
              },
            ),
            (0, o.YP)(
              () => (0, i.S)().language,
              (e) => O(e),
              { immediate: !0 },
            ),
            (0, o.YP)((0, s.nZ)().activeSheetViewerInited, (e) => {
              L.value = e;
            }),
            (0, o.bv)(() => {
              const e = document.getElementById("editor-container");
              E.setContainer(e),
                e.addEventListener(
                  "contextmenu",
                  (e) => {
                    const t = !!(0, i.si)().contexts["mindmap.inEditTitleMode"],
                      n = e.target,
                      o = n.closest(
                        'textarea, input[type="text"], [contenteditable="true"], [contenteditable=""]',
                      );
                    t &&
                      o &&
                      (e.stopPropagation(),
                      setTimeout(() => {
                        a.A.buildSpellContextMenu({
                          content: document.getSelection().toString(),
                          target: n,
                          menuType: a.h.DEFAULT,
                        });
                      }, 100));
                  },
                  { capture: !0 },
                ),
                A(!0),
                C(!0);
            }),
            ((e) => {
              const { document: t, installHoverChangedTaskHandler: n } = (0,
              s.nZ)();
              n((n) => {
                var o;
                if (!n) return void e(null);
                const i =
                  null === (o = t.value.query({ id: n.topicId })) ||
                  void 0 === o
                    ? void 0
                    : o.asTopic();
                i && null !== i.aggregatedCountOfTodos
                  ? e({ location: n.location, topic: i })
                  : e(null);
              });
            })((e) => {
              if (
                (G(!1),
                Y && (clearTimeout(Y), (Y = null)),
                !e || null === e.topic.aggregatedCountOfTodos)
              )
                return;
              const t = Math.round(
                (e.topic.aggregatedCountOfCheckedTodos /
                  e.topic.aggregatedCountOfTodos) *
                  100,
              );
              J(
                `${e.topic.aggregatedCountOfCheckedTodos}/${e.topic.aggregatedCountOfTodos} (${t}%)`,
              ),
                (Y = setTimeout(() => {
                  var t, n, o, i;
                  if (!e || null === e.topic.aggregatedCountOfTodos)
                    return void G(!1);
                  const a = e.location;
                  W({
                    left:
                      a.x -
                      ((null ===
                        (n =
                          null === (t = $.value) || void 0 === t
                            ? void 0
                            : t.getBoundingClientRect()) || void 0 === n
                        ? void 0
                        : n.width) || 0) /
                        2 +
                      9,
                    top:
                      a.y -
                      ((null ===
                        (i =
                          null === (o = $.value) || void 0 === o
                            ? void 0
                            : o.getBoundingClientRect()) || void 0 === i
                        ? void 0
                        : i.height) || 0) -
                      12,
                  }),
                    G(!0);
                }, 1e3));
            }),
            {
              __sfc: !0,
              TASK_TOOLTIP_SHOW_DELAY: 1e3,
              TASK_TOOLTIP_LEFT_OFFSET: 9,
              TASK_TOOLTIP_TOP_OFFSET: -12,
              Spinner: t,
              Pitch: u,
              ZenModeBar: m,
              BeginnerMode: v,
              BranchOnlyBar: p,
              AudioBar: h,
              LabelEditor: f,
              EquationEditor: g,
              NoteEditor: I,
              MarkerEditor: b,
              Informationcard: y,
              TutorialDialog: T,
              snowdance: E,
              selection: w,
              isInBranchOnly: S,
              executeEditorAction: k,
              changeLanguage: O,
              updateEditorVisible: A,
              updateRightBarPanel: M,
              updateIconPanel: x,
              updateWorkbenchReady: C,
              isMindMapInited: L,
              isOutlineMode: P,
              isPitchMode: R,
              isZenMode: F,
              isZenModeBarVisible: B,
              isInMapShotMode: H,
              isBeginnerModeVisible: Z,
              isAudioBarEnable: N,
              isBranchOnlyMode: V,
              currentPopoverEditor: _,
              tooltipVisible: K,
              changeTooltipVisible: G,
              tooltipContent: q,
              changeTooltipContent: J,
              tooltipLocation: U,
              changeTooltipLocation: W,
              tooltipTimeout: Y,
              tooltipStyle: z,
              tooltipRef: $,
              sheetRendering: X,
              switchRightPanelTab: j,
              updateRightPanelTab: Q,
            }
          );
        },
      });
      n(70156);
      const be = (0, n(51900).Z)(
        Ie,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              staticClass:
                "uk-panel uk-position-cover uk-flex uk-flex-column uk-child-separator",
            },
            [
              n.isBranchOnlyMode && !n.isInMapShotMode
                ? t(n.BranchOnlyBar, {
                    staticClass: "uk-position-absolute",
                    staticStyle: { left: "20px", top: "20px", "z-index": "1" },
                  })
                : e._e(),
              e._v(" "),
              t(
                "div",
                {
                  staticClass:
                    "uk-height-1-1 uk-width-1-1 uk-position-relative uk-background-default",
                  attrs: { id: "zen-mode-container" },
                },
                [
                  t("div", {
                    directives: [
                      {
                        name: "focus-contexts",
                        rawName: "v-focus-contexts:group",
                        value: ["focus.mindMap"],
                        expression: "['focus.mindMap']",
                        arg: "group",
                      },
                    ],
                    staticClass: "uk-panel uk-position-cover",
                    attrs: { id: "editor-container" },
                  }),
                  e._v(" "),
                  n.isAudioBarEnable
                    ? t(n.AudioBar, {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !n.isInMapShotMode,
                            expression: "!isInMapShotMode",
                          },
                        ],
                      })
                    : e._e(),
                  e._v(" "),
                  t(n.currentPopoverEditor, { tag: "component" }),
                  e._v(" "),
                  n.isZenModeBarVisible
                    ? [
                        t(n.ZenModeBar),
                        e._v(" "),
                        t(n.Spinner, {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: n.sheetRendering || !n.isMindMapInited,
                              expression: "sheetRendering || !isMindMapInited",
                            },
                          ],
                          staticClass: "uk-position-cover sheet-rendering-mask",
                          attrs: { text: e.progressIndicatorText },
                        }),
                      ]
                    : e._e(),
                  e._v(" "),
                  t(
                    "transition",
                    { attrs: { name: "beginner" } },
                    [
                      n.isBeginnerModeVisible && !n.isZenMode
                        ? t(n.BeginnerMode)
                        : e._e(),
                    ],
                    1,
                  ),
                  e._v(" "),
                  t(
                    "transition",
                    { attrs: { name: "dialog" } },
                    [t(n.TutorialDialog)],
                    1,
                  ),
                  e._v(" "),
                  t("div", {
                    directives: [
                      {
                        name: "focus-contexts",
                        rawName: "v-focus-contexts:group",
                        value: ["focus.popover"],
                        expression: "['focus.popover']",
                        arg: "group",
                      },
                    ],
                    attrs: { id: "popover-container-for-editor" },
                  }),
                  e._v(" "),
                  n.isPitchMode ? t(n.Pitch) : e._e(),
                  e._v(" "),
                  n.tooltipContent
                    ? t(
                        "div",
                        {
                          ref: "tooltipRef",
                          staticClass: "editor-tooltip",
                          style: n.tooltipStyle,
                        },
                        [e._v("\n      " + e._s(n.tooltipContent) + "\n    ")],
                      )
                    : e._e(),
                ],
                2,
              ),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "4f478b30",
        null,
      ).exports;
    },
    70156: (e, t, n) => {
      var o = n(39940);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[e.id, o, ""]]),
        o.locals && (e.exports = o.locals);
      (0, n(45346).Z)("68a449f3", o, !0, {});
    },
  },
]);
