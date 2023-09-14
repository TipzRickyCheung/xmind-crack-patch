"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [1189],
  {
    17014: (e, t, i) => {
      i.r(t);
      var n = i(63477),
        o = i.n(n),
        a = i(22244),
        r = i(90435),
        d = i(31945),
        l = i(54856),
        s = i(2954),
        c = i(63111),
        u = i(19741),
        h = i(27049),
        p = i(46016),
        m = i(84374),
        f = i(12455),
        v = i(78152),
        g = i(95185),
        C = i(1171);
      const y = (0, s.aZ)({
          components: {
            TopBar: () => i.e(1789).then(i.bind(i, 91789)),
            TabBar: () => i.e(4470).then(i.bind(i, 74470)),
            Workbench: () => i.e(8905).then(i.bind(i, 88905)),
            MapShot: () => i.e(1363).then(i.bind(i, 61363)),
          },
          setup() {
            const e = (0, v.JE)().T,
              t = (0, u.y)(),
              i = (0, p.$)(),
              n = (0, s.Fl)(() => {
                var e;
                return (
                  (null === (e = (0, f.r)()) || void 0 === e
                    ? void 0
                    : e.activeEditorId) === window.editorId
                );
              }),
              o = (0, s.Fl)(() => ((0, C.F)().fileId ? (0, C.F)().title : "")),
              a = (0, s.Fl)(() => (0, C.F)().isDirty),
              r = (0, s.Fl)(() => (0, f.A)().saving),
              d = (0, s.Fl)(() => (0, v.S)().language),
              l = (0, s.Fl)(() => (0, v.S)().systemAppearance),
              y = (0, s.Fl)(() => (0, v.S)().spellCheck),
              b = (0, s.Fl)(() => i.mapshotMode),
              w = (0, s.Fl)(() => i.editorMode === c.Pq),
              k = (0, s.Fl)(() => (0, v.Yh)().isStatusValid),
              T = (0, s.Fl)(() => i.isRightbarVisible),
              I = (0, s.Fl)(() => (0, v.S)().toolbarStyle === c.i_),
              S = (0, s.Fl)(() => {
                var e, t;
                return null !==
                  (t =
                    null === (e = (0, f.A)()) || void 0 === e
                      ? void 0
                      : e.ownerFrameId) && void 0 !== t
                  ? t
                  : "";
              }),
              M = (0, s.Fl)(() => {
                var e, t;
                return [
                  ...(null !==
                    (t =
                      null === (e = (0, f.r)()) || void 0 === e
                        ? void 0
                        : e.editorViewInfos) && void 0 !== t
                    ? t
                    : []),
                ];
              }),
              x = (0, s.Fl)(() => {
                const e = (0, f.r)(),
                  t = (null == e ? void 0 : e.editorViewInfos.length) > 1;
                return (null == e ? void 0 : e.isShowTabBar) || t;
              }),
              H = (0, s.Fl)(() => {
                var e, t;
                return null !==
                  (t =
                    null === (e = (0, f.r)()) || void 0 === e
                      ? void 0
                      : e.activeEditorId) && void 0 !== t
                  ? t
                  : "";
              }),
              E = (0, s.Fl)(() => H.value === window.editorId),
              L = (e) => {
                var t;
                const i =
                  null === (t = (0, f.A)()) || void 0 === t
                    ? void 0
                    : t.commandById(e);
                return !!i && !!i.enabled;
              },
              V = (0, s.Fl)(() => {
                var e;
                return null === (e = (0, f.r)()) || void 0 === e
                  ? void 0
                  : e.tabbarScrollLeft;
              }),
              P = (0, s.Fl)(() => (0, C.F)().source),
              A = (0, s.Fl)(() => {
                var e, t;
                const i =
                  null === (e = (0, f.r)()) || void 0 === e
                    ? void 0
                    : e.activeEditorId;
                if (!i) return;
                return (
                  null === (t = (0, f.r)().editorViewInfos) || void 0 === t
                    ? void 0
                    : t.find(({ id: e }) => e === i)
                ).source;
              }),
              Z = (0, s.Fl)(() => {
                var t, i, n;
                return (0, h.E)().sheetRendering
                  ? e("Loading...")
                  : (
                      null === (t = P.value) || void 0 === t
                        ? void 0
                        : t.startsWith("new")
                    )
                  ? e("Creating New Map ...")
                  : (null === (i = P.value) || void 0 === i
                      ? void 0
                      : i.startsWith("file-cache:")) ||
                    (null === (n = P.value) || void 0 === n
                      ? void 0
                      : n.startsWith("file:"))
                  ? e("Loading...")
                  : void 0;
              }),
              O = (0, s.Fl)(() => {
                var t, i, n;
                return (
                  null === (t = A.value) || void 0 === t
                    ? void 0
                    : t.startsWith("new")
                )
                  ? e("Creating New Map ...")
                  : (null === (i = A.value) || void 0 === i
                      ? void 0
                      : i.startsWith("file-cache:")) ||
                    (null === (n = A.value) || void 0 === n
                      ? void 0
                      : n.startsWith("file:"))
                  ? e("Loading...")
                  : void 0;
              });
            return (
              (0, s.YP)(
                (0, m.nZ)().isEditorFirstRendered,
                (e) => {
                  if (e) {
                    const e = (0, s.Fl)(() =>
                        w.value
                          ? [
                              {
                                type: "buttons",
                                buttons: [
                                  {
                                    icon: "static/images/touchbar/touchbar-indentTemplate.png",
                                    enabled: L("outliner.indent"),
                                    click: "command:outliner.indent",
                                  },
                                  {
                                    icon: "static/images/touchbar/touchbar-outdentTemplate.png",
                                    enabled: L("outliner.outdent"),
                                    click: "command:outliner.outdent",
                                  },
                                  {
                                    icon: "static/images/touchbar/touchbar-notesTemplate.png",
                                    enabled: L("editor.showNotesEditor"),
                                    click: "command:editor.showNotesEditor",
                                  },
                                ],
                              },
                            ]
                          : [
                              {
                                type: "buttons",
                                buttons: [
                                  {
                                    icon: "static/images/touchbar/touchbar-topicTemplate.png",
                                    enabled: L("editor.addTopic"),
                                    click: "command:editor.addTopic",
                                  },
                                  {
                                    icon: "static/images/touchbar/touchbar-subtopicTemplate.png",
                                    iconPosition: "overlay",
                                    enabled: L("editor.addSubTopic"),
                                    click: "command:editor.addSubTopic",
                                  },
                                  {
                                    icon: "static/images/touchbar/touchbar-relationshipTemplate.png",
                                    enabled: L("editor.addRelationship"),
                                    click: "command:editor.addRelationship",
                                  },
                                  {
                                    icon: "static/images/touchbar/touchbar-summaryTemplate.png",
                                    enabled: L("editor.addSummary"),
                                    click: "command:editor.addSummary",
                                  },
                                  {
                                    icon: "static/images/touchbar/touchbar-boundaryTemplate.png",
                                    enabled: L("editor.addBoundary"),
                                    click: "command:editor.addBoundary",
                                  },
                                  {
                                    icon: "static/images/touchbar/touchbar-notesTemplate.png",
                                    enabled: L("editor.showNotesEditor"),
                                    click: "command:editor.showNotesEditor",
                                  },
                                ],
                              },
                              {
                                type: "buttons",
                                buttons: [
                                  {
                                    icon: "static/images/touchbar/touchbar-zenTemplate.png",
                                    click: "command:workbench.toggleZenMode",
                                  },
                                ],
                              },
                            ],
                      ),
                      { updateTouchBarItems: t } = (0, g.q)(e, {}, !0);
                    t();
                  }
                },
                { immediate: !0 },
              ),
              (0, s.bv)(() => {
                (0, s.YP)(
                  o,
                  (e) => {
                    var t, i;
                    e &&
                      (null === (t = (0, f.A)()) ||
                        void 0 === t ||
                        t.changeTitle(e),
                      null === (i = window.getCurrentWindowAsync) ||
                        void 0 === i ||
                        i.call(window).then((t) => t.setTitle(e)));
                  },
                  { immediate: !0 },
                ),
                  (0, s.YP)(
                    () => {
                      var e;
                      return null === (e = (0, f.A)()) || void 0 === e
                        ? void 0
                        : e.title;
                    },
                    (e) => {
                      var t;
                      null === (t = (0, f.r)()) ||
                        void 0 === t ||
                        t.updateEditorViewInfo({
                          id: window.editorId,
                          title: e,
                          source: P.value,
                        });
                    },
                    { immediate: !0 },
                  ),
                  (0, s.YP)(a, (e) => {
                    var t;
                    return null === (t = (0, f.A)()) || void 0 === t
                      ? void 0
                      : t.changeIsDirty(e);
                  }),
                  (0, s.YP)(
                    () => i.editorMode,
                    (e) => {
                      var t;
                      return null === (t = (0, f.A)()) || void 0 === t
                        ? void 0
                        : t.setEditorMode(e);
                    },
                  );
              }),
              {
                title: o,
                isDirty: a,
                isSaving: r,
                language: d,
                spellCheck: y,
                systemAppearance: l,
                isOutlineMode: w,
                isActivationStatusValid: k,
                isRightbarVisible: T,
                isIconOnly: I,
                frameId: S,
                editorViewInfos: M,
                isShowTabBar: x,
                activeEditorId: H,
                mapshotMode: b,
                progressText: Z,
                isActivateEditor: n,
                activeEditorProgressText: O,
                isEditorTabChange: E,
                tabbarScrollLeft: V,
                canHandleCommand: L,
                handleCommand: (e) => {
                  (0, v.JX)().handleCommand(e);
                },
                handleCommandsRegister: (e) => {
                  t.registerCommands(e);
                },
                handleTabbarScroll: (e) => {
                  (0, f.r)().updateTabbarScrollLeft(e);
                },
              }
            );
          },
        }),
        b = y;
      const w = (0, i(51900).Z)(
        b,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "div",
            {
              staticClass: "uk-window uk-overflow-hidden",
              attrs: { id: "app", spellcheck: e.spellCheck },
            },
            [
              t("top-bar", {
                attrs: {
                  title: e.title,
                  "is-dirty": e.isDirty,
                  "is-saving": e.isSaving,
                  language: e.language,
                  "system-appearance": e.systemAppearance,
                  "is-outline-mode": e.isOutlineMode,
                  "is-activation-status-valid": e.isActivationStatusValid,
                  "is-rightbar-visible": e.isRightbarVisible,
                  "is-icon-only": e.isIconOnly,
                  "can-handle-command": e.canHandleCommand,
                  "is-register-app-region-event": !0,
                  "is-editor-tab-change": e.isEditorTabChange,
                  "is-activate-editor": e.isActivateEditor,
                },
                on: {
                  "on-toolbar-item-click": e.handleCommand,
                  "on-insert-menu-item-click": e.handleCommand,
                  "on-evaluation-mode-click": e.handleCommand,
                  "on-icon-only-change": e.handleCommand,
                  "on-commands-register": e.handleCommandsRegister,
                },
              }),
              e._v(" "),
              t("tab-bar", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.isShowTabBar,
                    expression: "isShowTabBar",
                  },
                ],
                attrs: {
                  "frame-id": e.frameId,
                  "active-editor-id": e.activeEditorId,
                  "editor-view-infos": e.editorViewInfos,
                  "scroll-left": e.tabbarScrollLeft,
                },
                on: { scroll: e.handleTabbarScroll },
              }),
              e._v(" "),
              t(
                "div",
                { staticClass: "uk-window-body uk-panel uk-overflow-hidden" },
                [
                  t("workbench", {
                    attrs: {
                      "progress-text": e.progressText,
                      "active-editor-progress-text": e.activeEditorProgressText,
                    },
                  }),
                  e._v(" "),
                  e.mapshotMode ? t("map-shot") : e._e(),
                ],
                1,
              ),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "6b535d5e",
        null,
      ).exports;
      var k = i(59474),
        T = i(96829),
        I = i(18264);
      const S = "focusContextsGroup",
        M = "focusedElementTag",
        x = "focusTrigger",
        H = "focusNoEffect",
        E = "cannotGetFocusByMouse";
      var L = i(75425);
      const V = {
        copy: { actionId: "copy", expr: "!selection.hasImageLoadingFailed" },
        cut: { actionId: "cut", expr: "!selection.hasImageLoadingFailed" },
        paste: { actionId: "paste" },
        duplicate: { actionId: "mutate:duplicateTopic" },
        undo: { actionId: "undo" },
        redo: { actionId: "redo" },
        delete: { actionId: "mutate:delete" },
        deleteSingleTopic: { actionId: "mutate:deleteTopicNodeOnly" },
        selectAll: { actionId: "mutate:selectAll" },
        "editor.addTopic": { actionId: "mutate:insertTopicAfter" },
        "editor.addSubTopic": { actionId: "mutate:insertSubtopic" },
        "editor.addParentTopic": { actionId: "mutate:insertParentTopic" },
        "editor.addTopicBefore": { actionId: "mutate:insertTopicBefore" },
        "editor.preAddFloatingTopic": {
          actionId: "mutate:insertFloatingTopic",
        },
        "editor.addRelationship": { actionId: "mutate:createRelationship" },
        "editor.addBoundary": { actionId: "mutate:insertBoundary" },
        "editor.addCallout": { actionId: "mutate:insertCallout" },
        "editor.toggleBranchFoldedState": {
          actionId: "mutate:toggleBranchFoldedState",
        },
        "editor.addSummary": { actionId: "mutate:insertSummary" },
        "editor.zoomIn": { actionId: "mutateEditor:zoomIn" },
        "editor.zoomOut": { actionId: "mutateEditor:zoomOut" },
        "editor.resetZoom": { actionId: "mutateEditor:resetZoom" },
        "editor.fitMap": { actionId: "mutateEditor:fitMap" },
        "editor.focusAndSelectCenter": { actionId: "mutate:goToCentralTopic" },
        "editor.showBranchOnly": { actionId: "mutate:showBranchOnly" },
        "editor.exitBranchOnly": { actionId: "mutate:exitShowBranchOnly" },
        "editor.foldBranch": { actionId: "mutate:foldBranch" },
        "editor.unfoldBranch": { actionId: "mutate:unfoldBranch" },
        "editor.foldAllDescendantBranches": {
          actionId: "mutate:foldAllDescendantBranches",
        },
        "editor.unfoldAllDescendantBranches": {
          actionId: "mutate:unfoldAllDescendantBranches",
        },
        "editor.changeImage": { actionId: "mutate:insertImage" },
        "editor.rotateImage": { actionId: "mutate:rotateImage" },
        "editor.resetImage": { actionId: "mutate:resetTopicImageSize" },
        "editor.addMarker": { actionId: "mutate:addMarker" },
        "editor.deleteMarker": { actionId: "mutate:removeMarker" },
        "editor.copyStyle": { actionId: "copyStyle" },
        "editor.pasteStyle": { actionId: "pasteStyle" },
        "editor.resetStyle": { actionId: "mutate:resetStyle" },
        "editor.updateStyle": { actionId: "mutate:updateStyle" },
        "editor.updateStyleToSameLevel": {
          actionId: "mutate:updateStyleToSameLevel",
        },
        "editor.distributeTopicsVertically": {
          actionId: "mutate:distributeTopicsVertically",
        },
        "editor.distributeTopicsHorizontally": {
          actionId: "mutate:distributeTopicsHorizontally",
        },
        "editor.alignTopicsToTop": { actionId: "mutate:alignTopicsToTop" },
        "editor.alignTopicsToBottom": {
          actionId: "mutate:alignTopicsToBottom",
        },
        "editor.alignTopicsToLeft": { actionId: "mutate:alignTopicsToLeft" },
        "editor.alignTopicsToRight": { actionId: "mutate:alignTopicsToRight" },
        "editor.alignTopicsToMiddle": {
          actionId: "mutate:alignTopicsToMiddle",
        },
        "editor.alignTopicsToCenter": {
          actionId: "mutate:alignTopicsToCenter",
        },
        "editor.showEditBox": { actionId: "mutate:startEditingTopic" },
        "editor.hideEditBox": { actionId: "mutate:endEditingTitle" },
        "editor.finishEditBox": { actionId: "mutate:finishEditingTitle" },
        "editor.newSheetFromTopic": {
          actionId: "mutate:createSheetWithSelectedTopic",
        },
        "editor.addSheet": { actionId: "mutateEditor:newSheet" },
        "editor.removeTopicLabel": { actionId: "mutateProperty:topicLabel" },
        "editor.removeAudioNotes": { actionId: "mutate:removeAudioNotes" },
        "editor.removeAttachment": { actionId: "mutate:removeAttachment" },
        "editor.removeTopicHref": { actionId: "mutate:removeTopicHref" },
        "editor.resetPosition": { actionId: "mutate:resetPosition" },
        "editor.exchangeSiblingTopicUp": {
          actionId: "mutate:exchangeSiblingTopicUpward",
        },
        "editor.exchangeSiblingTopicDown": {
          actionId: "mutate:exchangeSiblingTopicDownward",
        },
        "editor.exchangeSiblingTopicLeft": {
          actionId: "mutate:exchangeSiblingTopicLeftward",
        },
        "editor.exchangeSiblingTopicRight": {
          actionId: "mutate:exchangeSiblingTopicRightward",
        },
        "editor.moveTopicToTop": {
          actionId: "mutate:exchangeSiblingTopicFirst",
        },
        "editor.moveTopicToBottom": {
          actionId: "mutate:exchangeSiblingTopicLast",
        },
        "editor.increaseFontSize": { actionId: "mutate:increaseFontSize" },
        "editor.decreaseFontSize": { actionId: "mutate:decreaseFontSize" },
        "editor.boldText": { actionId: "mutate:setFontBold" },
        "editor.italicText": { actionId: "mutate:setFontItalic" },
        "editor.strikethroughText": { actionId: "mutate:setTextLineThrough" },
        "editor.uppercaseText": { actionId: "mutate:setTextUppercase" },
        "editor.lowercaseText": { actionId: "mutate:setTextLowercase" },
        "editor.capitalizeText": { actionId: "mutate:setTextCapitalize" },
        "editor.alignTextLeft": { actionId: "mutate:setTextAlignLeft" },
        "editor.centerText": { actionId: "mutate:setTextAlignCenter" },
        "editor.alignTextRight": { actionId: "mutate:setTextAlignRight" },
        "editor.setStyleAsVeryImportant": {
          actionId: "mutate:setStyleAsVeryImortant",
        },
        "editor.setStyleAsImportant": { actionId: "mutate:setStyleAsImortant" },
        "editor.setStyleAsCrossOut": { actionId: "mutate:setStyleAsCrossOut" },
        "editor.setStyleAsDefault": { actionId: "mutate:setStyleAsDefault" },
        "editor.updateStyleToSameLevelTopics": {
          actionId: "mutate:updateStyleToSameLevel",
        },
        "editor.updateStyleToSameTypeTopics": {
          actionId: "mutate:updateStyle",
        },
        "editor.keepTextOnly": { actionId: "mutate:keepTextOnly" },
        "editor.selectionNavigateUpWithShift": {
          actionId: "mutate:multiSelectUpward",
        },
        "editor.selectionNavigateDownWithShift": {
          actionId: "mutate:multiSelectDownward",
        },
        "editor.selectionNavigateLeftWithShift": {
          actionId: "mutate:multiSelectLeftward",
        },
        "editor.selectionNavigateRightWithShift": {
          actionId: "mutate:multiSelectRightward",
        },
        "editor.toggleBranchLevelOne": {
          actionId: "mutate:foldBranchLevelOne",
        },
        "editor.toggleBranchLevelTwo": {
          actionId: "mutate:foldBranchLevelTwo",
        },
        "editor.toggleBranchLevelThree": {
          actionId: "mutate:foldBranchLevelThree",
        },
        "editor.toggleBranchLevelFour": {
          actionId: "mutate:foldBranchLevelFour",
        },
        "editor.toggleBranchLevelFive": {
          actionId: "mutate:foldBranchLevelFive",
        },
        "editor.toggleBranchLevelSix": {
          actionId: "mutate:foldBranchLevelSix",
        },
        "editor.toggleBranchLevelSeven": {
          actionId: "mutate:foldBranchLevelSeven",
        },
        "editor.toggleBranchLevelEight": {
          actionId: "mutate:foldBranchLevelEight",
        },
        "editor.toggleBranchLevelNine": {
          actionId: "mutate:foldBranchLevelNine",
        },
        "editor.addTask": { actionId: "mutate:addTask" },
        "editor.removeTask": { actionId: "mutate:removeTask" },
        "editor.checkTask": { actionId: "mutate:checkTask" },
        "editor.uncheckTask": { actionId: "mutate:uncheckTask" },
        "editor.cancelTask": { actionId: "mutate:cancelTask" },
      };
      Object.keys(V).forEach((e) => {
        const t = V[e];
        void 0 === t.expr && (t.expr = "default");
      });
      const P = (e, t) => {
          var i;
          const n = V[e];
          return !(null === (i = t[null == n ? void 0 : n.actionId]) ||
          void 0 === i
            ? void 0
            : i.disabled);
        },
        A = (e, t) => {
          const i = V[e];
          if (i) {
            let e = i.expr;
            return (
              (e = e ? `(${e})&selection` : e),
              t && (e = e ? `(${e})&(${t})` : t),
              Z(e)
            );
          }
          return !1;
        },
        Z = (e, t) => {
          const i = (0, f.A)();
          return (0, L.ku)({
            contexts: null == i ? void 0 : i.aggregatedContexts,
            expr: e,
            testFn: t,
          });
        },
        O = L.f$,
        F = (e) => `editor/${e}/mindmap`,
        B = (e) => `editor/${e}`,
        $ = (e) => `editor/${e}/frame`,
        R = (e) => `editor/${e}/mindmap/beginnerMode`,
        N = (e) => `editor/${e}/mindmap/editTitleMode`,
        W = (e) => `editor/${e}/mapShot`,
        D = () => {
          const e = B(window.editorId),
            t = (0, v.JE)().T,
            i = Z;
          return [
            ...[
              {
                id: "workbench.toggleFindAndReplace",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.toggleTopicNavigationPanel",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.toggleNoteNavigationPanel",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.toggleLabelAndMarkerNavigationPanel",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.showNoteNavigationPanelAndSelect",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.showLabelNavigationPanelAndSelect",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.showMarkerNavigationPanelAndSelect",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.showTaskNavigationPanelAndSelect",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.highlightCurrentLabel",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.highlightCurrentMarker",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.highlightCurrentTask",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
            ],
            ...[
              {
                id: "workbench.toggleRightPanel",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.toggleTopicPanel",
                enabled: i(
                  "selection.hasTopic|selection.hasImage|selection.hasBoundary|selection.hasRelationship|selection.hasSummary",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
              {
                id: "workbench.toggleSlidePanel",
                enabled: i(
                  "selection.hasTopic",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
              {
                id: "workbench.toggleMapPanel",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.toggleSkeletonPanel",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.toggleColorThemePanel",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
            ],
            ...[
              {
                id: "workbench.toggleMarkerPanel",
                enabled: i(
                  "!selection.hasImage",
                  () => (0, p.$)().isWorkbenchReady,
                ),
                provider: e,
              },
              {
                id: "workbench.toggleStickerPanel",
                enabled: i(
                  "selection.hasTopic",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
              {
                id: "workbench.toggleIllustrationPanel",
                enabled: i(
                  "selection.hasTopic",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
            ],
            ...[
              {
                id: "workbench.toggleZenMode",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.showZenMode",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
            ],
            ...[
              {
                id: "workbench.mapMode",
                enabled:
                  (0, p.$)().isWorkbenchReady && (0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.outlineMode",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.switchToMapOrOutliner",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "editor.toggleSheetBar",
                label: (0, h.E)().isSheetBarVisible
                  ? t("Hide Sheet Bar")
                  : t("Show Sheet Bar"),
                enabled: (0, h.E)().mindmapCreated,
                provider: e,
              },
              {
                id: "editor.toggleTopicCountLabel",
                enabled: (0, h.E)().mindmapCreated,
                provider: e,
              },
            ],
            ...[
              {
                id: "editor.showLabelEditor",
                enabled: i(
                  "selection.hasTopic",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
              {
                id: "editor.showEquationEditor",
                enabled: i(
                  "(selection.hasEquation&selection.single)|(selection.hasTopic&selection.single)",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
              {
                id: "editor.showNotesEditor",
                enabled: i(
                  "selection.single&selection.hasTopic",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
              {
                id: "editor.showMarkerPopup",
                enabled: i(
                  "selection.single&selection.hasTopic",
                  () => (0, p.$)().isWorkbenchReady,
                ),
                provider: e,
              },
            ],
            ...[
              {
                id: "editor.addLocalImage",
                enabled: i(
                  "selection.single&selection.hasTopic|selection.hasImage",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
              {
                id: "editor.showHyperlinkEditor",
                enabled: i(
                  "selection.allTopics&!selection.hasTopicWithAttachmentOrAudioNote",
                  () =>
                    (0, p.$)().isWorkbenchReady &&
                    (0, h.E)().isAllowInsertHyperLink &&
                    !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
              {
                id: "editor.showTopiclinkEditor",
                enabled: i(
                  "selection.single&selection.hasTopic&!selection.hasTopicWithAttachmentOrAudioNote",
                  () =>
                    (0, p.$)().isWorkbenchReady &&
                    (0, h.E)().isAllowInsertHyperLink &&
                    !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
              {
                id: "editor.addFileLink",
                enabled: i(
                  "selection.allTopics&!selection.hasTopicWithAttachmentOrAudioNote",
                  () =>
                    (0, p.$)().isWorkbenchReady &&
                    (0, h.E)().isAllowInsertHyperLink &&
                    !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
              {
                id: "editor.addFolderLink",
                enabled: i(
                  "selection.allTopics&!selection.hasTopicWithAttachmentOrAudioNote",
                  () =>
                    (0, p.$)().isWorkbenchReady &&
                    (0, h.E)().isAllowInsertHyperLink &&
                    !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
              {
                id: "editor.addAttachmentOnNewTopic",
                enabled: i(
                  "selection.single&selection.hasTopic&!selection.hasCallout",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
              {
                id: "editor.addAudioOnNewTopic",
                enabled: i(
                  "selection.single&selection.hasTopic&!selection.hasCallout",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
            ],
            ...[
              {
                id: "workbench.exportPng1",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.exportSvg1",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.exportPdf",
                enabled: i(
                  "default",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
              {
                id: "workbench.exportMd",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.exportOPML",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.exportExcel",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.exportPowerPoint",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.exportTextBundle",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.exportWord",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.exportBranchPng",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.exportBranchSvg",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.exportBranchPdf",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.exportBranchMd",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
            ],
            ...[
              {
                id: "shareXmindLink",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "shareXmindLinkOfCN",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "shareMail",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "shareBlog",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "shareBiggerPlate",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "shareEvernote",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "sharePinterest",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "shareTwitter",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "shareFacebook",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
            ],
            ...[
              {
                id: "print",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "printBranch",
                enabled: i(
                  "selection.single|selection.hasTopic|selection.hasFloatingTopic|selection.hasSummary",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                ),
                provider: e,
              },
            ],
            ...[
              {
                id: "showMapShot",
                enabled:
                  !(0, p.$)().isOutlinerMode &&
                  !(0, p.$)().mapshotMode &&
                  !(0, p.$)().zenMode,
                provider: e,
              },
              {
                id: "mapShot",
                enabled:
                  !(0, p.$)().isOutlinerMode &&
                  !(0, p.$)().mapshotMode &&
                  !(0, p.$)().zenMode,
                provider: e,
              },
            ],
            ...[
              { id: "editor.toggleBeginnerMode", enabled: !0, provider: e },
              { id: "editor.toggleBeginnerModeTips", enabled: !0, provider: e },
              {
                id: "mergeXMindFiles",
                enabled: (0, h.E)().mindmapCreated,
                provider: e,
              },
              {
                id: "createTheme",
                enabled:
                  (0, p.$)().isWorkbenchReady &&
                  !(0, p.$)().isOutlinerMode &&
                  (0, h.E)().mindmapCreated,
                provider: e,
              },
              {
                id: "customizeTheme",
                enabled:
                  (0, h.E)().mindmapCreated && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.setpassword",
                enabled:
                  !(0, p.$)().isOutlinerMode && (0, h.E)().mindmapCreated,
                provider: e,
              },
              {
                id: "editor.rotateImageLeft",
                enabled: i(
                  "!selection.hasImageLoadingFailed",
                  () => (0, p.$)().isWorkbenchReady,
                ),
                provider: e,
              },
            ],
            ...[
              {
                id: "editor.enterPitchMode",
                enabled:
                  (0, p.$)().isWorkbenchReady &&
                  !(0, p.$)().isOutlinerMode &&
                  !(0, p.$)().zenMode,
                provider: e,
              },
              {
                id: "editor.enterPitchModeWindowed",
                enabled:
                  (0, p.$)().isWorkbenchReady &&
                  !(0, p.$)().isOutlinerMode &&
                  !(0, p.$)().zenMode,
                provider: e,
              },
              {
                id: "editor.enterPitchPresenterViewMode",
                enabled:
                  (0, p.$)().isWorkbenchReady &&
                  !(0, p.$)().isOutlinerMode &&
                  !(0, p.$)().zenMode,
                provider: e,
              },
            ],
          ];
        },
        j = () => {
          const e = F(window.editorId),
            t = Z,
            { actionStates: i } = (0, m.nZ)(),
            n = (0, v.JE)().T,
            o = A,
            a = [],
            r = V;
          Object.keys(r).forEach((t) => {
            var n;
            const d = r[t],
              l =
                !(null === (n = i.value[null == d ? void 0 : d.actionId]) ||
                void 0 === n
                  ? void 0
                  : n.disabled) && (0, h.E)().mindmapCreated;
            (!l && d.deactivatedWhenDisabled) ||
              a.push({
                id: t,
                enabled: l ? o(t) : 0,
                provider: e,
                enabledFn: (e) => {
                  const i = o(t);
                  return e ? O(i) : i;
                },
              });
          });
          const d =
              P("editor.showBranchOnly", i.value) ||
              P("editor.exitBranchOnly", i.value),
            l = P("editor.exitBranchOnly", i.value)
              ? n("Show Full Content")
              : n("Show Branch Only"),
            s =
              P("editor.foldBranch", i.value) ||
              P("editor.unfoldBranch", i.value),
            c = P("editor.foldBranch", i.value)
              ? n("Fold Subtopic")
              : n("Unfold Subtopic"),
            u =
              P("editor.foldAllDescendantBranches", i.value) ||
              P("editor.unfoldAllDescendantBranches", i.value),
            f = P("editor.foldAllDescendantBranches", i.value)
              ? n("Fold All Sub-Branches")
              : n("Unfold All Sub-Branches");
          return (
            a.push(
              {
                id: "editor.toggleBranchOnly",
                label: l,
                enabled: d && (0, h.E)().mindmapCreated,
                provider: e,
              },
              {
                id: "editor.toggleBranch",
                label: c,
                enabled: t("selection.hasTopic", () => s),
                provider: e,
              },
              {
                id: "editor.toggleAllBranch",
                label: f,
                enabled: t("default", () => u),
                provider: e,
              },
              {
                id: "editor.editInfoItem",
                enabled: t("selection.single&selection.hasTopic"),
                provider: e,
              },
              {
                id: "editor.saveAsAudioNote",
                enabled: t("default"),
                provider: e,
              },
              {
                id: "editor.saveAsAttachment",
                enabled: t("default"),
                provider: e,
              },
              {
                id: "editor.saveAsImage",
                enabled: t("!selection.hasImageLoadingFailed"),
                provider: e,
              },
              {
                id: "editor.saveAsEquation",
                enabled: t("!selection.hasImageLoadingFailed"),
                provider: e,
              },
              {
                id: "editor.resizeEquation",
                enabled: t(
                  "!selection.hasImageLoadingFailed",
                  () => (0, p.$)().isWorkbenchReady,
                ),
                provider: e,
              },
              {
                id: "editor.clearText",
                enabled: t("selection.hasTopicWithTitle"),
                provider: e,
              },
              {
                id: "editor.removeMarker",
                enabled: t("selection.hasTopicWithMarker"),
                provider: e,
              },
              {
                id: "editor.removeLabel",
                enabled: t("selection.hasTopicWithLabel"),
                provider: e,
              },
              {
                id: "editor.removeTask",
                enabled: t("selection.hasTopicWithTask"),
                provider: e,
              },
              {
                id: "editor.removeLink",
                enabled: t("selection.hasTopicWithLink"),
                provider: e,
              },
              {
                id: "editor.removeTopicContent",
                enabled: t(
                  "!selection.onlyTopicWithMarker&!selection.onlyTopicWithLabel&!selection.onlyTopicWithTask&!selection.onlyTopicWithLink&(selection.hasTopicWithMarker|selection.hasTopicWithLabel|selection.hasTopicWithTask|selection.hasTopicWithLink)",
                ),
                provider: e,
              },
              {
                id: "editor.removeMarkerForTopicContextMenu",
                enabled: t("selection.onlyTopicWithMarker"),
                provider: e,
              },
              {
                id: "editor.removeLabelForTopicContextMenu",
                enabled: t("selection.onlyTopicWithLabel"),
                provider: e,
              },
              {
                id: "editor.removeTaskForTopicContextMenu",
                enabled: t("selection.onlyTopicWithTask"),
                provider: e,
              },
              {
                id: "editor.removeLinkForTopicContextMenu",
                enabled: t("selection.onlyTopicWithLink"),
                provider: e,
              },
              {
                id: "editor.removeNote",
                enabled: t(
                  "selection.hasTopic",
                  () => (0, p.$)().isWorkbenchReady,
                ),
                provider: e,
              },
              {
                id: "editor.removeStickerOrImageOrEquation",
                enabled: t(
                  "selection.hasTopic",
                  () => (0, p.$)().isWorkbenchReady,
                ),
                provider: e,
              },
              {
                id: "editor.keepTextOnly",
                enabled: t(
                  "selection.hasTopic",
                  () => (0, p.$)().isWorkbenchReady,
                ),
                provider: e,
              },
              {
                id: "editor.previousSheet",
                enabled: t("default", () => (0, p.$)().isWorkbenchReady),
                provider: e,
              },
              {
                id: "editor.nextSheet",
                enabled: t("default", () => (0, p.$)().isWorkbenchReady),
                provider: e,
              },
              {
                id: "editor.exchangeSiblingTopicLeft",
                enabled: t(
                  "selection.hasTopic",
                  () => (0, p.$)().isWorkbenchReady,
                ),
                provider: e,
              },
              {
                id: "editor.exchangeSiblingTopicRight",
                enabled: t(
                  "selection.hasTopic",
                  () => (0, p.$)().isWorkbenchReady,
                ),
                provider: e,
              },
              ...[
                "editor.toggleBranchLevelOne",
                "editor.toggleBranchLevelTwo",
                "editor.toggleBranchLevelThree",
                "editor.toggleBranchLevelFour",
                "editor.toggleBranchLevelFive",
                "editor.toggleBranchLevelSix",
                "editor.toggleBranchLevelSeven",
                "editor.toggleBranchLevelEight",
                "editor.toggleBranchLevelNine",
              ].map((i) => ({
                id: i,
                enabled: t("selection.hasTopic"),
                provider: e,
              })),
              ...[
                "editor.addMarkerOne",
                "editor.addMarkerTwo",
                "editor.addMarkerThree",
                "editor.addMarkerFour",
                "editor.addMarkerFive",
                "editor.addMarkerSix",
                "editor.addMarkerSeven",
              ].map((i) => ({
                id: i,
                enabled: t("selection.hasTopic"),
                provider: e,
              })),
            ),
            a
          );
        },
        z = () => {
          var e;
          const t = $(window.editorId),
            i = (0, f.r)(),
            n =
              (null !== (e = null == i ? void 0 : i.editorViewInfos) &&
              void 0 !== e
                ? e
                : []
              ).length > 1;
          return [
            {
              id: "frame.addNewTab",
              label: "New Tab",
              enabled: !0,
              provider: t,
            },
            { id: "frame.previousTab", enabled: n, provider: t },
            { id: "frame.nextTab", enabled: n, provider: t },
            {
              id: "frame.toggleTabbar",
              label:
                (null == i ? void 0 : i.isShowTabBar) || n
                  ? "Hide Tab Bar"
                  : "Show Tab Bar",
              enabled: !n,
              provider: t,
            },
            {
              id: "closeSimpleWindow",
              label: n ? "Close Tab" : "Close Window",
              enabled: !0,
              provider: t,
            },
            {
              id: "closeComplexWindow",
              label: "Close Window",
              enabled: n,
              provider: t,
            },
          ];
        },
        _ = () => {
          const e = N(window.editorId);
          return [
            {
              id: "escape",
              enabled: Z("mindmap.inEditTitleMode"),
              provider: e,
            },
            { id: "paste", enabled: Z("mindmap.inEditTitleMode"), provider: e },
            {
              id: "editor.addMarker",
              enabled: Z(
                "mindmap.inEditTitleMode&selection.single&selection.hasTopic",
              ),
              provider: e,
            },
            {
              id: "editor.changeImage",
              enabled: Z(
                "mindmap.inEditTitleMode&selection.single&selection.hasTopic",
              ),
              provider: e,
            },
          ];
        },
        q = () => {
          const e = R(window.editorId);
          return [
            {
              id: "editor.addSubTopic",
              enabled: A("editor.addSubTopic", "editor.inBeginnerMode"),
              provider: e,
            },
            {
              id: "editor.addTopic",
              enabled: A("editor.addTopic", "editor.inBeginnerMode"),
              provider: e,
            },
            {
              id: "editor.showEditBox",
              enabled: Z("editor.inBeginnerMode"),
              provider: e,
            },
            { id: "escape", enabled: Z("editor.inBeginnerMode"), provider: e },
          ];
        },
        U = () => {
          const e = W(window.editorId),
            t = (0, p.$)();
          return [
            {
              id: "showMapShot",
              enabled: !t.isOutlinerMode && !t.mapshotMode,
              provider: e,
            },
            { id: "mapShot", enabled: !t.isOutlinerMode, provider: e },
            { id: "editor.zoomIn", enabled: !0, provider: e },
            { id: "editor.zoomOut", enabled: !0, provider: e },
            { id: "editor.resetZoom", enabled: !0, provider: e },
            { id: "editor.fitMap", enabled: !0, provider: e },
          ];
        };
      var X = i(53775);
      var G = i(20993),
        K = i(64805),
        J = i(77995),
        Y = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      var Q = i(67657),
        ee = i(94593),
        te = i(33394),
        ie = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      function ne(e) {
        return ie(this, void 0, void 0, function* () {
          const { T: t } = (0, v.JE)(),
            { executePropertyAction: i } = (0, m.nZ)(),
            {
              filePaths: n,
              bookmarks: o,
              canceled: a,
            } = yield Q.dialog.showOpenDialog((0, Q.getCurrentWindow)(), {
              properties: "folder" === e ? ["openDirectory"] : ["openFile"],
              buttonLabel: t("Insert"),
              securityScopedBookmarks: !0,
            });
          if (a || !n || !n.length) return;
          const r = n[0];
          if (ee.Z.existsSync(r)) {
            if (o && o.length === n.length)
              for (let e = 0; e < n.length; e++) {
                const t = n[e],
                  i = o[e];
                t && i && (yield te.Z.bindBookmark({ fp: t, bookmark: i }));
              }
            i({ name: "mutateProperty:fileLink", inputValue: r });
          }
        });
      }
      var oe = i(5893),
        ae = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      var re = i(13382),
        de = i(71017),
        le = i.n(de),
        se = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      var ce = i(83282),
        ue = i(18621);
      function he() {
        var e;
        !(function () {
          const e = (0, p.$)();
          e.isRightbarVisible && e.updateRightBarPanel({ visible: !1 });
          e.isSearchPanelVisible && e.updateSearchPanel({ visible: !1 });
        })(),
          (0, p.$)().setMapshotMode(!0),
          null === (e = (0, f.A)()) ||
            void 0 === e ||
            e.updateContexts({ "editor.inMapShotMode": !0 });
      }
      function pe() {
        var e;
        (0, p.$)().mapshotMode
          ? ((0, p.$)().setMapshotMode(!1),
            null === (e = (0, f.A)()) ||
              void 0 === e ||
              e.updateContexts({ "editor.inMapShotMode": !1 }),
            Q.getCurrentWindow().setFullScreenable(!0),
            (0, ue.L9)({ eventAction: "enterMapShot" }))
          : (0, v.JX)().handleCommand("showMapShot");
      }
      var me = i(23897),
        fe = i(55733),
        ve = i.n(fe),
        ge = i(87244),
        Ce = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      function ye() {
        return Ce(this, void 0, void 0, function* () {
          (0, ue.L9)({
            eventCategory: "Tools",
            eventAction: "clickMergeXMindFiles",
          });
          const e = (0, v.JE)().T,
            { result: t } = yield r.ZP.fetch(l.Fx, {
              name: "dialog-merging-options",
              parentId: window.id,
              wait: !0,
            });
          if (null === t) return;
          const { canceled: i, filePaths: n } = yield Q.dialog.showOpenDialog({
            properties: ["openFile", "multiSelections"],
            filters: [{ name: e("Xmind Workbook"), extensions: ["xmind"] }],
          });
          i ||
            (yield (function (e, t) {
              return Ce(this, void 0, void 0, function* () {
                if (!e || !e.length) return;
                (0, ue.L9)({
                  eventCategory: "Tools",
                  eventAction: "startMergeXMindFiles",
                  eventName: `target: ${
                    t.mergeIntoMultiSheet ? "Multiple Sheets" : "Current Map"
                  }, createIndexSheet: ${t.createIndexSheet}, fileCount: ${
                    e.length
                  }`,
                });
                let i = !0;
                const n = 1e3,
                  o = new Date().getTime();
                1 === e.length &&
                  ee.Z.statSync(e[0]).size < c.tZ.FILE_SIZE &&
                  (i = !1),
                  i &&
                    (yield r.ZP.fetch(l.Fx, {
                      name: "dialog-progress",
                      parentId: window.id,
                      height: c.Us["dialog-progress"].height - 30,
                      query: {
                        type: "merging",
                        editorId: window.editorId,
                        fileTotalCount: e.length,
                      },
                    })),
                  (0, f.A)().setMerging(!0);
                const a = (0, v.JE)().T,
                  d = [],
                  s = [],
                  { executeEditorAction: u } = (0, m.nZ)(),
                  { stage: p, passwordHelper: g } = (0, C.F)();
                try {
                  for (const t of e) {
                    const e = le().basename(t),
                      i = yield ee.Z.readFile(t);
                    try {
                      const t = yield be(p, g, yield (0, me.Zp)(i.buffer), e);
                      t ? s.push(t) : d.push(e);
                    } catch (t) {
                      d.push(e);
                    }
                  }
                  if (
                    (yield u({
                      name: "mutateEditor:mergeXmindFiles",
                      payload: t.mergeIntoCurrentSheet
                        ? { stages: s, intoCurrentMap: !0 }
                        : {
                            stages: s,
                            intoSheets: !0,
                            generateAMapOfContents: t.createIndexSheet,
                          },
                    }),
                    t.mergeIntoCurrentSheet)
                  ) {
                    const {
                      updateSheetRendering: e,
                      sheetRenderingStartAt: t,
                    } = (0, h.E)();
                    (0, h.E)().updateSheetRendering({
                      sheetRendering: !0,
                      sheetRenderingStartAt: new Date().getTime(),
                    }),
                      yield (0, T._v)(100);
                    const i = new Date().getTime() - t;
                    i < c.oY && (yield (0, T._v)(c.oY - i)),
                      e({ sheetRendering: !1, sheetRenderingStartAt: null });
                  }
                  const a = new Date().getTime() - o;
                  i && a < n && (yield (0, T._v)(n - a));
                } catch (e) {
                  throw e;
                } finally {
                  i && (yield r.ZP.fetch(l.g_, { name: "dialog-progress" })),
                    (0, f.A)().setMerging(!1),
                    (0, f.A)().updateMergingProgress(0),
                    d.length &&
                      (yield r.ZP.fetch(l.Fx, {
                        name: "dialog-err",
                        height: c.Us["dialog-err"].height,
                        payload: {
                          isCustomError: !0,
                          autoExpand: !0,
                          expansionHeight: 115,
                          code: "mergeFailed",
                          title: a(
                            "Failed to Merge $1 $2",
                            `${d.length}`,
                            d.length > 1 ? a("Files") : a("File"),
                          ),
                          message: d
                            .map((e, t) => `${t + 1}. ${e.split(".xmind")[0]}`)
                            .join("\n"),
                        },
                      }));
                }
              });
            })(n, t));
        });
      }
      function be(e, t, i, n) {
        return Ce(this, void 0, void 0, function* () {
          const o = yield ve().loadAsync(i),
            a = yield (0, ge.iw)(i, n, e, t);
          if ("needToClose" in a) return null;
          const r = a.content;
          return {
            take: (e) =>
              Ce(this, void 0, void 0, function* () {
                return o.file(e).async("uint8array");
              }),
            add: (e, t) => Ce(this, void 0, void 0, function* () {}),
            delete: (e) => Ce(this, void 0, void 0, function* () {}),
            toUrl: (e) => e,
            getDocument: () =>
              Ce(this, void 0, void 0, function* () {
                return r;
              }),
            setDocument: (e) => {},
          };
        });
      }
      function we() {
        const e = Q.BrowserWindow.getAllWindows().filter(
          (e) =>
            e.getTitle() === c.tL &&
            e.getParentWindow() &&
            e.getParentWindow().id === window.id,
        );
        e.length && e[0].close();
        const t = "CUSTOM-" + (0, T.hb)();
        (0, v.JX)().handleCommand("themeEditor", {
          id: t,
          editorId: window.editorId,
          parentId: window.id,
          openType: "create-theme",
        }),
          (0, ue.L9)({
            eventCategory: "ThemeEditor",
            eventAction: "createTheme",
          });
      }
      function ke() {
        (0, ue.L9)({
          eventCategory: "ThemeEditor",
          eventAction: "clickCustomizeTheme",
        }),
          (0, p.$)().updateRightBarPanel({
            visible: !0,
            panel: K.QN.THEME,
            tab: K.x9.MAP,
            win: K.ML.CUSTOM_THEME,
          });
      }
      var Te = i(86633),
        Ie = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      const Se = (0, Te.ZP)("editor:set-password");
      function Me() {
        return Ie(this, void 0, void 0, function* () {
          const {
            password: e,
            passwordHint: t,
            changeDirty: i,
            changePassword: n,
          } = (0, C.F)();
          r.ZP.fetch(l.Fx, {
            name: "dialog-setpassword",
            parentId: window.id,
            wait: !0,
            query: {
              oldPassword: null != e ? e : "",
              passwordHint: null != t ? t : "",
            },
          })
            .then(({ result: e = {} } = {}) => {
              if (!e) return;
              const { action: t, newPassword: o, newPasswordHint: a } = e;
              "set" === t
                ? (n({ password: o, passwordHint: a }), i(!0))
                : "remove" === t &&
                  (n({ password: null, passwordHint: null }), i(!0));
            })
            .catch((e) => {
              Se.error(e);
            });
        });
      }
      var xe = i(97769),
        He = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      function Ee() {
        return He(this, void 0, void 0, function* () {
          const { executeMutationAction: e } = (0, m.nZ)();
          e({ name: "mutate:rotateImage", payload: Pe("left") });
        });
      }
      const { rotateRasterImage: Le, rotateSvgImage: Ve } =
          m.viewerKit.makeImageRotator(document, window),
        Pe = (e) => (t) =>
          He(void 0, void 0, void 0, function* () {
            const { resourcePath: i, width: n, height: o } = t,
              { stage: a } = (0, C.F)(),
              r = Buffer.from(yield a.take(i)),
              d = r.toString("base64");
            if (!d) return t;
            const l = le().extname(i),
              s =
                ".svg" === l
                  ? Ve(Ae(d), e)
                  : yield Le(
                      `data:${(yield (0, xe.fromBuffer)(r)).mime};base64,${d}`,
                      e,
                    );
            if (!s) return t;
            const { createXapUrlByArrayBuffer: c } = (0, m.nZ)();
            return {
              resourcePath: (yield c(yield s.arrayBuffer(), l)).slice(4),
              width: o,
              height: n,
            };
          }),
        Ae = (e) => {
          const t = Uint8Array.from(atob(e), (e) => e.charCodeAt(0)).buffer;
          return new TextDecoder().decode(t);
        };
      function Ze(e, t) {
        const { updateSearchPanel: i, updateSearchPanelHighlightItem: n } = (0,
        p.$)();
        switch (e) {
          case K.qz.NOTE:
            i({ visible: !0, tab: K.It.NOTE }), n(t);
            break;
          case K.qz.LABEL:
            i({ visible: !0, tab: K.It.TAG }),
              (0, v.JX)().handleCommand(
                "workbench.highlightCurrentLabel",
                t.selectedLabel,
              );
            break;
          case K.qz.MARKER:
            i({ visible: !0, tab: K.It.TAG }),
              (0, v.JX)().handleCommand(
                "workbench.highlightCurrentMarker",
                t.markerId,
              );
            break;
          case K.qz.TASK:
            i({ visible: !0, tab: K.It.TAG }),
              (0, v.JX)().handleCommand(
                "workbench.highlightCurrentTask",
                t.taskInfo,
              );
        }
      }
      function Oe(e, t) {
        const { updateSearchPanelHighlightItem: i } = (0, p.$)(),
          { executeEditorAction: n } = (0, m.nZ)();
        switch (e) {
          case K.qz.LABEL:
            i(t),
              n({
                name: "mutateEditor:setHighlightLabels",
                payload: [t.selectedLabel],
              }),
              n({ name: "mutateEditor:setHighlightMarkers", payload: [] }),
              n({ name: "mutateEditor:setHighlightTasks", payload: [] });
            break;
          case K.qz.MARKER:
            i(t),
              n({
                name: "mutateEditor:setHighlightMarkers",
                payload: [t.markerId],
              }),
              n({ name: "mutateEditor:setHighlightLabels", payload: [] }),
              n({ name: "mutateEditor:setHighlightTasks", payload: [] });
            break;
          case K.qz.TASK:
            i(t),
              n({ name: "mutateEditor:setHighlightMarkers", payload: [] }),
              n({ name: "mutateEditor:setHighlightLabels", payload: [] }),
              n({
                name: "mutateEditor:setHighlightTasks",
                payload: [t.taskInfo],
              });
        }
      }
      var Fe = i(85786),
        Be = i(51091),
        $e = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      function Re(e, t, i = {}) {
        return $e(this, void 0, void 0, function* () {
          const { saveCurrentSheetOnly: n, currentSheetIndex: o, meta: a } = i;
          if (a) {
            const i = decodeURIComponent(e.title + ".xmind"),
              r = Q.app.getPath("temp"),
              d = le().join(r, i);
            return (
              n && Number.isInteger(o) && o >= 0
                ? yield t({
                    filePath: d,
                    toEncrypt: !1,
                    sheetIndexes: [o],
                    inject: (e) => Object.assign(Object.assign({}, e), Ne(a)),
                  })
                : yield t({
                    filePath: d,
                    toEncrypt: !1,
                    inject: (e) => Object.assign(Object.assign({}, e), Ne(a)),
                  }),
              ee.Z.readFile(d)
            );
          }
          {
            const i = decodeURIComponent(e.title + ".xmind"),
              n = Q.app.getPath("temp"),
              o = le().join(n, i);
            return (
              yield t({
                filePath: o,
                toEncrypt: !1,
                inject: (e) => Object.assign(Object.assign({}, e), Ne({})),
              }),
              ee.Z.readFile(o)
            );
          }
        });
      }
      function Ne(e) {
        var t, i, n, o, a, r, d, l, s, c, u;
        return {
          DESCRIPTION: null !== (t = e.description) && void 0 !== t ? t : "",
          Author:
            null !==
              (n = null === (i = e.author) || void 0 === i ? void 0 : i.name) &&
            void 0 !== n
              ? n
              : "",
          downloadable:
            1 === (null === (o = e.share) || void 0 === o ? void 0 : o.privacy),
          Thumbnail: {
            Origin: {
              X:
                null !==
                  (r =
                    null === (a = e.thumbnail) || void 0 === a
                      ? void 0
                      : a.x) && void 0 !== r
                  ? r
                  : 0,
              Y:
                null !==
                  (l =
                    null === (d = e.thumbnail) || void 0 === d
                      ? void 0
                      : d.y) && void 0 !== l
                  ? l
                  : 0,
            },
          },
          Create: { Time: new Date() },
          Share: {
            Privacy:
              null === (s = e.share) || void 0 === s ? void 0 : s.privacy,
            Downloadable:
              1 ===
              (null === (c = e.share) || void 0 === c ? void 0 : c.privacy)
                ? 1
                : 0,
            LanguageChannel:
              null === (u = e.share) || void 0 === u ? void 0 : u.lang,
          },
        };
      }
      function We(e) {
        return ze("", e).replace(/[\x00-\x08\x0b-\x0c\x0e-\x1f]/g, "");
      }
      const De = "<br />",
        je = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      function ze(e, t) {
        let i = e + Be.encodeXML(t.title || "") + De;
        e += je;
        for (const n of t.children) i += ze(e, n);
        for (const e of t.detachedChildren) i += ze(je, e);
        return i;
      }
      var _e = i(96026),
        qe = i.n(_e),
        Ue = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      const Xe = 1,
        Ge = 3,
        Ke = (0, Te.ZP)("editor:share-to-library");
      function Je(e) {
        let t = e.split(","),
          i = t[0].match(/:(.*?);/)[1],
          n = atob(t[1]),
          o = n.length,
          a = new Uint8Array(o);
        for (; o--; ) a[o] = n.charCodeAt(o);
        return new Blob([a], { type: i });
      }
      var Ye = function (e, t, i, n) {
        return new (i || (i = Promise))(function (o, a) {
          function r(e) {
            try {
              l(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function d(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(r, d);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      const Qe = (0, Te.ZP)("shareHandler:");
      function et(e) {
        return Ye(this, void 0, void 0, function* () {
          yield (function (e) {
            return $e(this, void 0, void 0, function* () {
              if (!["evernote", "biggerplate", "email"].includes(e)) {
                const { user: e } = (0, v.c7)();
                if (!Boolean(e)) {
                  let e;
                  const t = new Promise((t) => {
                    e = (0, s.YP)(
                      () => (0, v.c7)().user,
                      (i) => {
                        e(), t(i);
                      },
                    );
                  });
                  if (
                    !(yield r.ZP.fetch(l.Fx, {
                      name: "dialog-signin",
                      wait: !0,
                      query: { ignoreOpenDialog: !0 },
                    }).then(({ result: i }) =>
                      i && i.success ? t : (e(), !1),
                    ))
                  )
                    return !1;
                }
              }
              return (0, v.qr)().usableShareItems.includes(e);
            });
          })(e);
          const t = window.editorId,
            {
              sheets: i,
              activeSheet: n,
              activeSheetFigure: o,
              getSheetViewer: a,
            } = (0, m.nZ)(),
            d = r.ZP.route(
              (0, l.vN)(window.editorId),
              ({ sheetId: e, exportImageOptions: t }) =>
                Ye(this, void 0, void 0, function* () {
                  const {
                      format: i,
                      padding: n,
                      aspectRatio: o,
                      noBackground: r,
                      skipFont: d,
                      maximumWidth: l,
                      maximumHeight: s,
                    } = t,
                    c = a(e);
                  if ("SVG" === i) {
                    const e = yield c.exportSVGElement({
                      padding: n ? m.viewerKit.insetsOf(n) : null,
                      aspectRatio: o,
                      opaqueBackground: !r,
                      disableEmbedFonts: d,
                      maximumWidth: l,
                      maximumHeight: s,
                    });
                    return {
                      data: e.outerHTML,
                      width: e.getAttribute("width"),
                      height: e.getAttribute("height"),
                    };
                  }
                  if ("PNG" === i) {
                    return {
                      data: yield c.exportRasterImage("png", {
                        padding: n ? m.viewerKit.insetsOf(n) : null,
                        aspectRatio: o,
                        opaqueBackground: !r,
                        disableEmbedFonts: d,
                        maximumWidth: l,
                        maximumHeight: s,
                      }),
                    };
                  }
                }),
            ),
            { source: u, title: h } = (0, C.F)(),
            { upload: p, canceled: f } = (function ({
              type: e,
              editorId: t,
              sheetId: i,
            }) {
              const n = (0, s.iH)(!1),
                o = (0, s.iH)(),
                a = (0, s.iH)(""),
                d = (0, s.iH)(!1),
                { sheets: u } = (0, m.nZ)(),
                { T: h } = (0, v.JE)(),
                { saveAsLocalFile: p } = (0, C.F)(),
                f = (e) =>
                  Ue(this, void 0, void 0, function* () {
                    const i = yield r.ZP.fetch((0, l.vN)(t), {
                      sheetId: e,
                      exportImageOptions: {
                        format: "PNG",
                        padding: 16,
                        aspectRatio: 42 / 26,
                        noBackground: !1,
                        skipFont: !1,
                        maximumWidth: 2100,
                        maximumHeight: 1300,
                      },
                    });
                    return (i.buffer = Je(i.data)), i;
                  }),
                g = () =>
                  Ue(this, void 0, void 0, function* () {
                    if (!n.value) {
                      if (!o.value)
                        try {
                          o.value = yield r.ZP.fetch(
                            l.lf.CREATE_UPLOAD_SESSION,
                            { title: a.value },
                          );
                        } catch (e) {
                          throw e;
                        }
                      return o.value;
                    }
                  }),
                y = ({ description: e, lang: t, uploadCurrentSheetOnly: o }) =>
                  Ue(this, void 0, void 0, function* () {
                    if (n.value) return;
                    const r = d.value ? Ge : Xe,
                      l = yield g();
                    if (!l) return;
                    const s = yield f(i),
                      c = s.buffer,
                      h = u.value.findIndex(({ id: e }) => e === i),
                      m = { width: s.width, height: s.height };
                    return Re(
                      { title: a.value },
                      (e) =>
                        Ue(this, void 0, void 0, function* () {
                          const {
                            filePath: t,
                            toEncrypt: i,
                            sheetIndexes: n,
                            inject: o,
                          } = e;
                          yield p(t, {
                            toEncrypt: i,
                            sheetIndexes: null != n ? n : qe()(u.value.length),
                            preprocessMetadata: (e) => o(e),
                            thumbnail: yield null == c
                              ? void 0
                              : c.arrayBuffer(),
                          });
                        }),
                      {
                        saveCurrentSheetOnly: o,
                        currentSheetIndex: h,
                        meta: {
                          description: e,
                          author: { name: (0, v.c7)().user },
                          share: { privacy: r, lang: t, url: l.url },
                          thumbnail: { image: c, x: m.width, y: m.height },
                        },
                      },
                    );
                  }),
                b = () =>
                  Ue(this, void 0, void 0, function* () {
                    const e = yield g();
                    if (e)
                      return (() =>
                        Ue(this, void 0, void 0, function* () {
                          if (!n.value)
                            return new Promise((t, i) => {
                              const n = () =>
                                Ue(this, void 0, void 0, function* () {
                                  const { status: o } = yield r.ZP.fetch(
                                    l.lf.UPLOAD_MAP,
                                    { session: e.session, action: "query" },
                                  );
                                  (o !== c.DU.UPLOADING &&
                                    o !== c.DU.PROCESSING) ||
                                    setTimeout(
                                      () =>
                                        Ue(this, void 0, void 0, function* () {
                                          yield n();
                                        }),
                                      500,
                                    ),
                                    o === c.DU.ERROR &&
                                      (Ke.warn(
                                        "Error in query uploading progress",
                                      ),
                                      i("Something wrong in uploading")),
                                    o === c.DU.FINISHED && t();
                                });
                              try {
                                n();
                              } catch (e) {
                                if (
                                  e.code === c.Xb.E_KEY_NOT_EXIST ||
                                  e.code === c.W1
                                )
                                  throw {
                                    code: c.W1,
                                    message: "Session expired",
                                  };
                                throw e;
                              }
                            });
                          try {
                            yield r.ZP.fetch(l.lf.UPLOAD_MAP, {
                              session: e.session,
                              action: "cancel",
                            });
                          } catch (e) {
                            throw e;
                          }
                        }))();
                  });
              return {
                canceled: n,
                getPreview: f,
                getUploadInfo: g,
                compress: y,
                upload: (t, i, s, u = !1, p = !1) =>
                  Ue(this, void 0, void 0, function* () {
                    if (n.value) return;
                    (d.value = p), (a.value = t);
                    const m = yield g();
                    if (!m) return;
                    if ("xmind-share-of-cn" === e && !m.submitUrl)
                      throw new Error("no submitUrl");
                    const f = {
                      map: [
                        yield y({
                          description: i,
                          lang: s,
                          uploadCurrentSheetOnly: u,
                        }),
                        `${t}.xmind`,
                      ],
                      session: m.session,
                      action: "upload",
                    };
                    try {
                      yield r.ZP.fetch(l.lf.UPLOAD_MAP, f);
                    } catch (e) {
                      if (e.code === c.Xb.E_PARAM_MISSING)
                        throw { code: 401, message: "Session expired" };
                      throw e;
                    }
                    return b().then(
                      () => () =>
                        Ue(this, void 0, void 0, function* () {
                          const t = Q.getCurrentWindow().id;
                          switch (e) {
                            case "blog": {
                              const i =
                                '<iframe src="' +
                                o.value.url.replace(
                                  "xmind.app/m/",
                                  "xmind.app/embed/",
                                ) +
                                '" width="900px" height="540px" frameborder="0" scrolling="no"></iframe>';
                              yield r.ZP.fetch(l.Fx, {
                                name: "dialog-copy-link-to-share",
                                parentId: t,
                                wait: !0,
                                query: { link: encodeURIComponent(i), type: e },
                              });
                              break;
                            }
                            case "xmind share":
                              yield r.ZP.fetch(l.Fx, {
                                name: "dialog-copy-link-to-share",
                                parentId: t,
                                wait: !0,
                                query: {
                                  link: encodeURIComponent(o.value.url),
                                  type: e,
                                },
                              });
                              break;
                            case "xmind-share-of-cn":
                              (0, Fe.DL)(o.value.submitUrl, h);
                              break;
                            default:
                              (0, Fe.DL)(o.value[e], h);
                          }
                        }),
                    );
                  }),
                queryProcess: b,
                reset: () => {
                  (n.value = !1),
                    (o.value = null),
                    (a.value = ""),
                    (d.value = !1);
                },
              };
            })({ type: e, editorId: t, sheetId: n.value.id });
          let g = null;
          const y = r.ZP.route((0, l.dm)(t), (t) =>
              p(
                t.title,
                t.description,
                t.lang,
                "CURRENT_SHEET" === t.uploadSheetTypes,
                t.isPrivate,
              )
                .then((e) => {
                  g &&
                    g.then(e).then(() => {
                      (0, v.Rg)().addRateMasValue(10);
                    });
                })
                .catch(
                  (t) => (Qe.info(`upload ${e} error:`, t.message || t), t),
                ),
            ),
            { id: b, title: w } = n.value,
            k = i.value.map((e) => e.id),
            T = tt(o.value.viewAttributes.mapBackgroundColor),
            { T: I } = (0, v.JE)(),
            S = new RegExp(`^(?:${I("Map")}) \\d+$`);
          g =
            "xmind share" === e || "xmind-share-of-cn" === e
              ? r.ZP.fetch(l.Fx, {
                  name: "dialog-share-to-gallery",
                  parentId: Q.getCurrentWindow().id,
                  wait: !0,
                  query: {
                    type: e,
                    editorId: t,
                    sheetIds: k,
                    currSheetId: b,
                    mapTitle: S.test(w)
                      ? (0, oe.N6)(n.value.rootTopic.title)
                      : (0, oe.N6)(w),
                    fileTitle: u.startsWith("new://")
                      ? (0, oe.N6)(i.value[0].rootTopic.title)
                      : (0, oe.N6)(h),
                  },
                }).then(() => {
                  (f.value = !0), y(), d && d();
                })
              : r.ZP.fetch(l.Fx, {
                  name: "dialog-share",
                  parentId: Q.getCurrentWindow().id,
                  wait: !0,
                  query: {
                    type: e,
                    editorId: t,
                    sheetId: b,
                    mapName: w,
                    backgroundColor: T,
                  },
                }).then(() => {
                  (f.value = !0), y(), d && d();
                });
        });
      }
      const tt = (e) => {
        const { r: t, g: i, b: n } = e;
        return "#" + ((t << 16) | (i << 8) | n).toString(16);
      };
      var it = i(72298),
        nt = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      const ot = i(16478).Z;
      var at = i(6113),
        rt = i.n(at),
        dt = i(99020),
        lt = i.n(dt),
        st = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      const ct = !1,
        ut = (0, Te.ZP)("shareHandler:");
      class ht extends Error {}
      class pt extends Error {}
      function mt() {
        return st(this, void 0, void 0, function* () {
          const e = window.editorId,
            { getSheetViewer: t } = (0, m.nZ)(),
            {
              checkOAuth: i,
              getNoteData: n,
              saveEvernote: o,
            } = (function (e) {
              const { title: t, saveAsLocalFile: i } = (0, C.F)(),
                { sheets: n, activeSheet: o } = (0, m.nZ)(),
                a = (0, s.iH)(),
                d = (0, s.iH)([]),
                c = () => {
                  const { oauthToken: e, username: t, china: i } = (0, v.Ak)();
                  return { oauthToken: e, username: t, china: i };
                },
                u = () =>
                  st(this, void 0, void 0, function* () {
                    const e = yield r.ZP.fetch(l.Fx, {
                        name: "evernote",
                        wait: !0,
                      }),
                      t = null == e ? void 0 : e.result;
                    (null == t ? void 0 : t.oauthToken) &&
                      (0, v.Ak)().updateEvernote({
                        china: t.china,
                        username: t.username,
                        oauthToken: t.oauthToken,
                      });
                  }),
                h = (e) => d.value.find((t) => t.guid === e),
                p = (e, i, n, o) => {
                  const a = rt().createHash("md5").update(i).digest("hex");
                  return {
                    resource: {
                      notebookGuid: h(e) || null,
                      mime: n,
                      data: new (lt().Types.Data)({
                        bodyHash: a,
                        body: i,
                        size: i.length,
                      }),
                      attributes: { fileName: `${t}.${o}` },
                    },
                    bodyHash: a,
                  };
                },
                f = (e) =>
                  st(this, void 0, void 0, function* () {
                    const o = yield Re({ title: t }, (e) =>
                        st(this, void 0, void 0, function* () {
                          const {
                            filePath: t,
                            toEncrypt: o,
                            sheetIndexes: a,
                            inject: r,
                          } = e;
                          yield i(t, {
                            toEncrypt: o,
                            sheetIndexes: null != a ? a : qe()(n.value.length),
                            preprocessMetadata: (e) => r(e),
                          });
                        }),
                      ),
                      { resource: a, bodyHash: r } = p(
                        e,
                        o,
                        "application/vnd.xmind.workbook",
                        "xmind",
                      );
                    return {
                      resource: a,
                      content: `Attachment: <br /><en-media type="${a.mime}" hash="${r}" /><br /><br />`,
                    };
                  }),
                g = (i) =>
                  st(this, void 0, void 0, function* () {
                    const n = yield r.ZP.fetch((0, l.vN)(e), {
                      sheetId: o.value.id,
                      exportImageOptions: {
                        skipFont: !1,
                        format: "PNG",
                        padding: 15,
                      },
                    });
                    n.buffer = Je(n.data);
                    const { resource: a, bodyHash: d } = p(
                        i,
                        Buffer.from(yield n.buffer.arrayBuffer()),
                        "image/png",
                        "png",
                      ),
                      s = {
                        escape: {
                          "&": "&amp;",
                          "<": "&lt;",
                          ">": "&gt;",
                          '"': "&quot;",
                          "'": "&apos;",
                        },
                      },
                      c = {
                        escape: RegExp(
                          "[" + Object.keys(s.escape).join("") + "]",
                          "g",
                        ),
                      };
                    return {
                      resource: a,
                      content: `<div style="width:100%;text-align:center;"><h2>${t.replace(
                        c.escape,
                        (e) => s.escape[e],
                      )}</h2><br /><en-media type="${
                        a.mime
                      }" hash="${d}" /></div><br /><br />`,
                    };
                  }),
                y = () => ({ content: We(o.value.rootTopic) + "<br /><br />" });
              return {
                getAccountData: c,
                checkOAuth: () =>
                  st(this, void 0, void 0, function* () {
                    const e = c();
                    (null == e ? void 0 : e.oauthToken) || (yield u());
                  }),
                getNoteData: () =>
                  new Promise((e, t) =>
                    st(this, void 0, void 0, function* () {
                      try {
                        const t = c(),
                          i = new (lt().Client)({
                            token: t.oauthToken,
                            sandbox: ct,
                            china: t.china,
                          });
                        (a.value = i.getNoteStore()),
                          (d.value = yield a.value.listNotebooks()),
                          e(
                            d.value.map((e) => ({
                              guid: e.guid,
                              name: e.name,
                            })),
                          );
                      } catch (e) {
                        9 === e.errorCode &&
                          t(
                            new ht(
                              "Authentication expired. Please reauthorize.",
                            ),
                          ),
                          t(e);
                      }
                    }),
                  ),
                getNotebook: h,
                createResource: p,
                getFile: f,
                getPreview: g,
                getText: y,
                saveEvernote: ({
                  notebookGuid: e,
                  selectedFile: i,
                  selectedImage: n,
                  selectedPlain: o,
                }) =>
                  st(this, void 0, void 0, function* () {
                    const r = Object.assign(new (lt().Types.Note)(), {
                      title: t,
                      notebookGuid: e,
                      content: [
                        '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd"><en-note>',
                      ],
                      resources: [],
                    });
                    if (i) {
                      const { resource: t, content: i } = yield f(e);
                      r.content.push(i), r.resources.push(t);
                    }
                    if (n) {
                      const { resource: t, content: i } = yield g(e);
                      r.content.push(i), r.resources.push(t);
                    }
                    if (o) {
                      const { content: e } = y();
                      r.content.push(e);
                    }
                    return (
                      r.content.push(
                        '<br /><br /><div style="width:100%;text-align:right;color:rgb(153,153,153)">' +
                          new Date().toDateString() +
                          ". Created by Xmind</div><br /></en-note>",
                      ),
                      (r.content = r.content.map((e) => e.trim()).join("")),
                      yield a.value.createNote(r)
                    );
                  }),
              };
            })(e),
            { clearEvernote: a } = (0, v.Ak)();
          let d = [];
          const c = () =>
            st(this, void 0, void 0, function* () {
              try {
                return yield i(), yield n();
              } catch (e) {
                if (e instanceof ht) return a(), yield c();
                throw (ut.info("get evernote book list error", e), e);
              }
            });
          if (((d = yield c()), !Array.isArray(d) || !d.length))
            throw (
              (ut.info("got none evernote book list", d),
              new Error("Got none evernote book list"))
            );
          const u = r.ZP.route(
              (0, l.vN)(window.editorId),
              ({ sheetId: e, exportImageOptions: i }) =>
                st(this, void 0, void 0, function* () {
                  const { format: n, padding: o } = i,
                    a = t(e);
                  if ("SVG" === n) {
                    const e = yield a.exportSVGElement({
                      padding: o ? m.viewerKit.insetsOf(o) : null,
                    });
                    return {
                      data: e.outerHTML,
                      width: e.getAttribute("width"),
                      height: e.getAttribute("height"),
                    };
                  }
                  if ("PNG" === n) {
                    return {
                      data: yield a.exportRasterImage("png", {
                        padding: o ? m.viewerKit.insetsOf(o) : null,
                        opaqueBackground: !0,
                      }),
                    };
                  }
                }),
            ),
            h = r.ZP.route((0, l.wZ)(e), (e) =>
              st(this, void 0, void 0, function* () {
                return o(e)
                  .then(() => {
                    (0, v.Rg)().addRateMasValue(10);
                  })
                  .catch((e) => {
                    let t = e;
                    throw (
                      ((null == e ? void 0 : e.parameter) &&
                        ((t = new pt("Upload evernote error")),
                        (t.data = e.parameter),
                        (t.code = e.errorCode)),
                      t)
                    );
                  });
              }),
            );
          r.ZP.fetch(l.Fx, {
            name: "dialog-evernote",
            parentId: Q.getCurrentWindow().id,
            wait: !0,
            query: { bookList: JSON.stringify(d), editorId: e },
          })
            .then(() => {
              h && h(), u && u();
            })
            .catch(() => {
              u && u();
            });
        });
      }
      var ft = i(43063),
        vt = i.n(ft),
        gt = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      const Ct = (0, Te.ZP)("shareHandler:"),
        yt = {
          CLIENT_ID: "K9FIvBKyOCYhS1Q1i6ov2YuC5FZ7iXOVzTdBS7GD",
          CLIENT_SECRET: "Uoe5YUPf14wkes5Gy5HIwTygMxPGe7hrztVMuIGU",
        },
        bt = "https://api.biggerplate.com/maps",
        wt = "https://accounts.biggerplate.com/oauth/token";
      function kt() {
        return gt(this, void 0, void 0, function* () {
          const e = window.editorId,
            { activeSheetId: t, activeSheetFigure: i } = (0, m.nZ)(),
            { title: n } = (0, C.F)(),
            { checkOAuth: o, upload: a } = (function () {
              const { updateBiggerplate: e } = (0, v.vF)(),
                { T: t } = (0, v.JE)(),
                { saveAsLocalFile: i } = (0, C.F)(),
                { sheets: n } = (0, m.nZ)(),
                o = (t) =>
                  new Promise((i, n) => {
                    t
                      ? fetch(wt, {
                          headers: {
                            "Content-Type":
                              "application/x-www-form-urlencoded; charset=utf-8",
                          },
                          method: "POST",
                          body: new URLSearchParams({
                            client_id: yt.CLIENT_ID,
                            client_secret: yt.CLIENT_SECRET,
                            refreshToken: t,
                            grant_type: "refresh_token",
                          }),
                        }).then((t) =>
                          gt(this, void 0, void 0, function* () {
                            if (!t || !t.ok) return void n();
                            const o = yield t.json();
                            o.access_token
                              ? (e({
                                  accessToken: o.access_token,
                                  realExpireTime:
                                    Date.now() + 1e3 * (o.expires_in - 100),
                                  refreshToken: o.refresh_token,
                                }),
                                i())
                              : n("OAuth failed");
                          }),
                        )
                      : n();
                  });
              return {
                checkOAuth: () =>
                  new Promise((e) => {
                    const {
                      accessToken: t,
                      realExpireTime: i,
                      refreshToken: n,
                    } = (0, v.vF)();
                    if (!(t && i > Date.now()))
                      return o(n).catch(() => {
                        r.ZP.fetch(l.Fx, {
                          name: "biggerplate",
                          wait: !0,
                        }).then(() => {
                          const { accessToken: t, realExpireTime: i } = (0,
                          v.vF)();
                          t && i > Date.now() ? e() : vt()();
                        });
                      });
                    e();
                  }),
                refreshTokenAsync: o,
                upload: (e, o) =>
                  gt(this, void 0, void 0, function* () {
                    const a = yield Re({ title: e }, (e) =>
                        gt(this, void 0, void 0, function* () {
                          const {
                            filePath: t,
                            toEncrypt: o,
                            sheetIndexes: a,
                            inject: r,
                          } = e;
                          i(t, {
                            toEncrypt: o,
                            sheetIndexes: null != a ? a : qe()(n.value.length),
                            preprocessMetadata: (e) => r(e),
                          });
                        }),
                      ),
                      r = new ArrayBuffer(a.length),
                      d = new Uint8Array(r);
                    for (let e = 0; e < a.length; e++) d[e] = a[e];
                    const l = new File([r], `${e}.xmind`, {
                        type: "application/vnd.xmind.workbook",
                      }),
                      s = new FormData(),
                      c = {
                        title: [e],
                        description: [o || e],
                        map: [l, `${e}.xmind`],
                      };
                    for (const [e, t] of Object.entries(c)) s.set(e, ...t);
                    const u = yield fetch(bt, {
                      headers: {
                        "Transfer-Encoding": "chunked",
                        Authorization:
                          this.$store.state.biggerplate.accessToken,
                      },
                      method: "POST",
                      body: s,
                    });
                    if (!u || !u.ok || 200 !== u.status)
                      return Promise.reject(u && u.statusText);
                    {
                      const e = yield u.json(),
                        { url: i } = e;
                      i && (0, Fe.DL)(i, t);
                    }
                  }),
              };
            })();
          yield o();
          const d = tt(i.value.viewAttributes.mapBackgroundColor),
            s = r.ZP.route((0, l.dm)(e), ({ title: e, description: t }) =>
              a(e, t)
                .catch((e) => (Ct.info("upload biggerplate error", e), e))
                .then(() => {
                  (0, v.Rg)().addRateMasValue(10);
                }),
            );
          r.ZP.fetch(l.Fx, {
            name: "dialog-share",
            parentId: Q.getCurrentWindow().id,
            wait: !0,
            query: {
              type: "biggerplate",
              editorId: e,
              sheetId: t,
              mapName: n,
              backgroundColor: d,
            },
          }).then(() => {
            s();
          });
        });
      }
      var Tt = function (e, t, i, n) {
        return new (i || (i = Promise))(function (o, a) {
          function r(e) {
            try {
              l(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function d(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(r, d);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      const It = () => {
        const {
            activeSheet: e,
            activeSheetViewerState: t,
            document: n,
            executeMutationAction: o,
          } = (0, m.nZ)(),
          a = (e = K.It.TOPIC) => {
            const { updateSearchPanel: t } = (0, p.$)();
            t({
              visible:
                !(
                  !(0, p.$)().isSearchPanelVisible ||
                  (0, p.$)().searchPanelTab === e
                ) || !(0, p.$)().isSearchPanelVisible,
              tab: e,
            });
          },
          d = {
            "workbench.toggleFindAndReplace": () => a(),
            "workbench.toggleTopicNavigationPanel": () => a(K.It.TOPIC),
            "workbench.toggleNoteNavigationPanel": () => a(K.It.NOTE),
            "workbench.toggleLabelAndMarkerNavigationPanel": () => a(K.It.TAG),
            "workbench.showNoteNavigationPanelAndSelect": (e) =>
              Ze(K.qz.NOTE, { topicId: e }),
            "workbench.showLabelNavigationPanelAndSelect": (e) =>
              Ze(K.qz.LABEL, { selectedLabel: e }),
            "workbench.showMarkerNavigationPanelAndSelect": (e) =>
              Ze(K.qz.MARKER, { markerId: e }),
            "workbench.showTaskNavigationPanelAndSelect": (e) => {
              (0, G.kI)(
                "done" === e.status
                  ? "highlightCheckedTask"
                  : "highlightUncheckedTask",
              ),
                Ze(K.qz.TASK, { taskInfo: e });
            },
            "workbench.highlightCurrentLabel": (e) =>
              Oe(K.qz.LABEL, { selectedLabel: e }),
            "workbench.highlightCurrentMarker": (e) =>
              Oe(K.qz.MARKER, { markerId: e }),
            "workbench.highlightCurrentTask": (e) =>
              Oe(K.qz.TASK, { taskInfo: e }),
          },
          s = (e, t, i = { popover: "" }) => {
            const { updateRightBarPanel: n } = (0, p.$)(),
              o = (0, p.$)().isRightbarVisible;
            if ((e || t || n({ visible: !o }), e && t)) {
              const a = (0, p.$)().rightBarPanel;
              n({
                visible: !(
                  o &&
                  a === e &&
                  (0, p.$)().rightPanelWin === K.ML.DEFAULT &&
                  (0, p.$)().rightPanelTab[a] === t &&
                  (0, p.$)().rightPanelTabConfig.popover === i.popover
                ),
                win: K.ML.DEFAULT,
                panel: e,
                tab: t,
                tabConfig: i,
              });
            }
          },
          u = {
            "workbench.toggleRightPanel": () => s(),
            "workbench.toggleTopicPanel": () => s(K.QN.FORMAT, K.zZ.TOPIC),
            "workbench.toggleSlidePanel": () => s(K.QN.FORMAT, K.zZ.SLIDE),
            "workbench.toggleMapPanel": () => s(K.QN.THEME, K.x9.MAP),
            "workbench.toggleSkeletonPanel": () =>
              s(K.QN.THEME, K.x9.MAP, { popover: "skeleton" }),
            "workbench.toggleColorThemePanel": () =>
              s(K.QN.THEME, K.x9.MAP, { popover: "color-theme" }),
          },
          g = (e) => {
            const {
              zenMode: t,
              editorMode: i,
              isIconPanelVisible: n,
              iconPanelTab: o,
              updateIconPanel: a,
            } = (0, p.$)();
            (t || i === c.Pq) && s(K.QN.IMAGE, e),
              i === c.hO && a({ tab: e, visible: !(n && o === e) });
          },
          y = {
            "workbench.toggleMarkerPanel": () => g(K.ll.MARKER),
            "workbench.toggleStickerPanel": () => g(K.ll.STICKER),
            "workbench.toggleIllustrationPanel": () => g(K.ll.ILLUSTRATION),
          },
          b = {
            "workbench.toggleZenMode": () =>
              (() => {
                const {
                    updateSearchPanel: e,
                    updateSearchPanelHighlightItem: t,
                  } = (0, p.$)(),
                  { executeEditorAction: i } = (0, m.nZ)();
                e({ visible: !1, tab: K.It.TOPIC }),
                  t({}),
                  i({ name: "mutateEditor:setHighlightLabels", payload: [] }),
                  i({ name: "mutateEditor:setHighlightMarkers", payload: [] }),
                  i({ name: "mutateEditor:setHighlightTasks", payload: [] }),
                  (0, p.$)().zenMode
                    ? r.ZP.fetch(l.oH, { editorId: window.editorId }).then(
                        () => {
                          setTimeout(() => {
                            !window.document.fullscreenElement &&
                              (0, p.$)().zenMode &&
                              ((0, f.r)().setIsFullScreen(!1),
                              (0, f.r)().setIsZenMode(!1));
                          }, 400);
                        },
                      )
                    : (0, v.JX)().handleCommand("workbench.showZenMode");
              })(),
            "workbench.showZenMode": () => {
              r.ZP.fetch(l.O0, {
                editorId: window.editorId,
                targetId: "zen-mode-container",
              }).then(() => {
                setTimeout(() => {
                  window.document.fullscreenElement &&
                    !(0, p.$)().zenMode &&
                    ((0, f.r)().setIsFullScreen(!0),
                    (0, f.r)().setIsZenMode(!0));
                }, 400);
              });
            },
          },
          w = () => {
            (0, p.$)().setEditorMode(c.hO);
          },
          k = () =>
            Tt(void 0, void 0, void 0, function* () {
              (0, h.E)().updateSheetRendering({
                sheetRendering: !0,
                sheetRenderingStartAt: new Date().getTime(),
              }),
                yield (0, T._v)(100),
                (0, p.$)().setEditorMode(c.Pq);
            }),
          I = {
            "workbench.mapMode": () => w(),
            "workbench.outlineMode": () => k(),
            "workbench.switchToMapOrOutliner": () => {
              (0, p.$)().isOutlinerMode ? w() : k();
            },
            "editor.toggleSheetBar": () => {
              (0, h.E)().changeSheetBarVisible(!(0, h.E)().isSheetBarVisible);
            },
            "editor.toggleTopicCountLabel": () => {
              const {
                isTopicCountLabelVisible: e,
                changeTopicCountVisible: t,
              } = (0, h.E)();
              t(!e);
            },
          },
          S = (e) => {
            (0, p.$)().setPopoverEditorVisible(e);
          },
          M = {
            "editor.showLabelEditor": () => S("label"),
            "editor.showNotesEditor": () => S("notes"),
            "editor.showEquationEditor": () => S("equation"),
            "editor.addAudioOnNewTopic": () => {
              (0, h.E)().updateAudioBarMode({
                audioBarMode: "audio_record",
                audioAutoplay: !1,
              });
            },
            "editor.showMarkerPopup": (e) => {
              e && ((0, h.E)().updateSelectedMarkerId(e), S("markerpopup"));
            },
          },
          x = {
            "editor.addLocalImage": () =>
              (function () {
                return ae(this, void 0, void 0, function* () {
                  const { createXapUrl: e, executeMutationAction: t } = (0,
                    m.nZ)(),
                    { T: i } = (0, v.JE)(),
                    { filePaths: n, canceled: o } =
                      yield Q.dialog.showOpenDialog((0, Q.getCurrentWindow)(), {
                        buttonLabel: i("Insert"),
                        filters: [
                          {
                            name: "All",
                            extensions: [
                              "png",
                              "apng",
                              "jpg",
                              "jpeg",
                              "jpe",
                              "jif",
                              "jfif",
                              "jfi",
                              "tif",
                              "webp",
                              "gif",
                              "svg",
                              "xbm",
                              "xbm",
                              "dib",
                              "ico",
                              "avif",
                              "bmp",
                            ],
                          },
                          { name: "PNG", extensions: ["png", "apng"] },
                          {
                            name: "JPG",
                            extensions: [
                              "jpg",
                              "jpeg",
                              "jpe",
                              "jif",
                              "jfif",
                              "jfi",
                            ],
                          },
                          { name: "WebP", extensions: ["webp"] },
                          { name: "GIF", extensions: ["gif"] },
                          { name: "SVG", extensions: ["svg"] },
                          { name: "XBM", extensions: ["xbm"] },
                          { name: "BMP", extensions: ["xbm", "dib", "bmp"] },
                          { name: "ICO", extensions: ["ico"] },
                          { name: "AVIF", extensions: ["avif"] },
                        ],
                      });
                  if (o || !n || !n.length) return;
                  const a = n[0];
                  ee.Z.existsSync(a) &&
                    t({
                      name: "mutate:insertImage",
                      inputValue: yield e((0, oe.u3)(a)),
                    });
                });
              })(),
            "editor.showHyperlinkEditor": () => (0, J.H)(),
            "editor.showTopiclinkEditor": () =>
              (function ({
                activeSheet: e,
                document: t,
                viewerState: i,
                executeMutationAction: n,
              }) {
                var o;
                if ((0, h.E)().isTopicLinkDialogShowing) return;
                const { selection: a } = i,
                  d = a && "topics" === a.kind && a.topics[0];
                if (!d) return;
                const s =
                  null === (o = e.query({ id: d })) || void 0 === o
                    ? void 0
                    : o.asTopic();
                if (!s) return;
                (0, h.E)().changeIsTopicLinkDialogShowing(!0);
                const c = "xmind:#",
                  u = s && s.href;
                let p = !1,
                  f = null;
                u && u.startsWith(c) && ((f = u.substr(7)), (p = !0));
                const v = () =>
                  Y(this, void 0, void 0, function* () {
                    return JSON.stringify(yield m.HG.serializeDocument(t));
                  });
                let g = r.ZP.route((0, l.zj)(window.editorId), () =>
                  Y(this, void 0, void 0, function* () {
                    return v();
                  }),
                );
                r.ZP.fetch(l.Fx, {
                  name: "dialog-topiclink",
                  parentId: window.id,
                  wait: !0,
                  query: {
                    hasTopicLink: p,
                    xmindObjectId: f,
                    editorId: window.editorId,
                  },
                })
                  .then(({ result: e }) => {
                    e &&
                      n({
                        name: "mutate:insertTopicLink",
                        payload: {
                          targetTopicId: e.topicId,
                          shouldInsertReverseLink:
                            "set" === e.action && e.twoWay,
                          isRemove: "remove" === e.action,
                        },
                      });
                  })
                  .catch(() => {})
                  .finally(() => {
                    g && (g(), (g = null)),
                      (0, h.E)().changeIsTopicLinkDialogShowing(!1);
                  });
              })({
                activeSheet: e.value,
                document: n.value,
                viewerState: t.value,
                executeMutationAction: o,
              }),
            "editor.addFileLink": () => ne("file"),
            "editor.addFolderLink": () => ne("folder"),
            "editor.addAttachmentOnNewTopic": () =>
              se(void 0, void 0, void 0, function* () {
                const { T: e } = (0, v.JE)(),
                  { createXapUrlByArrayBuffer: t, executeMutationAction: i } =
                    (0, m.nZ)(),
                  { filePaths: n, canceled: o } = yield Q.dialog.showOpenDialog(
                    (0, Q.getCurrentWindow)(),
                    { buttonLabel: e("Insert") },
                  );
                if (o || !n || !n.length) return;
                const a = n[0];
                if (ee.Z.existsSync(a)) {
                  const n = ee.Z.statSync(a);
                  if (n.isDirectory())
                    return void (0, re.N0)({
                      type: "warning",
                      title: "Xmind",
                      detail: e("Folder is not supported."),
                      message: e("Insert Attachment Failed"),
                      buttons: [e("OK")],
                      defaultId: 0,
                      cancelId: 0,
                      noLink: !0,
                    });
                  if (n.size > 20 * Math.pow(1024, 2))
                    (0, re.N0)({
                      type: "warning",
                      title: "Xmind",
                      detail: e("File size cannot exceed 20MB."),
                      message: e("Insert Attachment Failed"),
                      buttons: [e("OK")],
                      defaultId: 0,
                      cancelId: 0,
                      noLink: !0,
                    });
                  else {
                    const e = yield ee.Z.readFile(a),
                      n = le().basename(a);
                    i({
                      name: "mutate:insertAttachment",
                      payload: [
                        {
                          fileName: n,
                          resourcePath: (yield t(e, n)).substring(4),
                        },
                      ],
                    });
                  }
                }
              }),
          },
          H = {
            "workbench.exportPng1": (...e) =>
              i
                .e(1966)
                .then(i.bind(i, 11966))
                .then((t) => t.exportImage("png", ...e)),
            "workbench.exportSvg1": (...e) =>
              i
                .e(1966)
                .then(i.bind(i, 11966))
                .then((t) => t.exportImage("svg", ...e)),
            "workbench.exportPdf": (...e) =>
              Promise.all([
                i.e(6486),
                i.e(2118),
                i.e(7462),
                i.e(4718),
                i.e(8585),
              ])
                .then(i.bind(i, 46952))
                .then((t) => t.exportPDF(e[0])),
            "workbench.exportExcel": () =>
              Promise.all([i.e(1117), i.e(4360)])
                .then(i.bind(i, 94360))
                .then((e) => e.exportExcel()),
            "workbench.exportPowerPoint": () =>
              Promise.all([i.e(6486), i.e(2118), i.e(3907), i.e(1038)])
                .then(i.bind(i, 21038))
                .then((e) => e.exportPowerPoint()),
            "workbench.exportMd": (...e) =>
              i
                .e(6434)
                .then(i.bind(i, 93118))
                .then((t) => t.exportMarkdown(e[0])),
            "workbench.exportOPML": () =>
              i
                .e(4715)
                .then(i.bind(i, 64715))
                .then((e) => e.exportOPML()),
            "workbench.exportTextBundle": () =>
              i
                .e(3999)
                .then(i.bind(i, 63999))
                .then((e) => e.exportTextBundle()),
            "workbench.exportWord": () =>
              i
                .e(8665)
                .then(i.bind(i, 58665))
                .then((e) => e.exportWord()),
            "workbench.exportBranchPng": () =>
              i
                .e(1966)
                .then(i.bind(i, 11966))
                .then((e) => e.exportBranchAsPNG()),
            "workbench.exportBranchSvg": () =>
              i
                .e(1966)
                .then(i.bind(i, 11966))
                .then((e) => e.exportBranchAsSVG()),
            "workbench.exportBranchPdf": () =>
              Promise.all([
                i.e(6486),
                i.e(2118),
                i.e(7462),
                i.e(4718),
                i.e(8585),
              ])
                .then(i.bind(i, 46952))
                .then((e) => e.exportBranchAsPDF()),
            "workbench.exportBranchMd": (...e) =>
              i
                .e(6434)
                .then(i.bind(i, 93118))
                .then((t) => t.exportMarkdown(e[0])),
          },
          E = {
            shareXmindLink: () => et("xmind share"),
            shareXmindLinkOfCN: () => {
              (0, G.JC)("submitToGalleryClick"), et("xmind-share-of-cn");
            },
            shareMail: () =>
              (function () {
                return nt(this, void 0, void 0, function* () {
                  const { title: e, saveAs: t } = (0, C.F)(),
                    i = decodeURIComponent(e + ".xmind"),
                    n = Q.app.getPath("temp"),
                    o = le().join(n, i);
                  yield t((0, oe.u3)(o));
                  const a = ee.Z.readFileSync(o),
                    d = new ot().createChild(!1, { filename: i }).setContent(a),
                    s = new ot("multipart/form-data");
                  s.setHeader({
                    From: "",
                    To: "",
                    Subject: "",
                    "MIME-Version": "1.0",
                    "X-Unsent": 1,
                    "X-Priority": 3,
                    "X-Has-Attach": "yes",
                    "X-Mozilla-Draft-Info":
                      "internal/draft; vcard=0; receipt=0; DSN=0; uuencode=0",
                  }),
                    s.appendChild(d);
                  const c = le().join(n, "XMind.eml");
                  ee.Z.writeFileSync(c, s.build()),
                    it.shell.openExternal((0, oe.u3)(c)).catch((e) => {
                      r.ZP.fetch(l.Fx, {
                        name: "dialog-problem",
                        payload: {
                          name: "OpenError",
                          message: e.message || e,
                          stack: e.stack,
                          code: "OPEN_EMAIL",
                        },
                      });
                    });
                });
              })(),
            shareBlog: () => et("blog"),
            shareBiggerPlate: () => kt(),
            shareEvernote: () => mt(),
            sharePinterest: () => et("pinterest"),
            shareTwitter: () => et("twitter"),
            shareFacebook: () => et("facebook"),
          },
          L = { printBranch: ce.Ln, print: ce.S0 },
          V = {
            showMapShot: he,
            mapShot: pe,
            mergeXMindFiles: ye,
            createTheme: we,
            customizeTheme: ke,
          },
          P = {
            "editor.toggleBeginnerMode": () =>
              (0, h.E)().changeBeginnerModeVisible(!0),
            "editor.toggleBeginnerModeTips": () =>
              (0, h.E)().changeTooltipsVisible(!(0, h.E)().isTooltipsVisible),
            "workbench.setpassword": Me,
            "editor.rotateImageLeft": Ee,
          },
          A = {
            "editor.enterPitchMode": () =>
              Promise.all([i.e(6486), i.e(2118), i.e(705)])
                .then(i.bind(i, 80705))
                .then((e) => e.enterPitchMode({ isPresenterView: !1 })),
            "editor.enterPitchModeWindowed": () =>
              Promise.all([i.e(6486), i.e(2118), i.e(705)])
                .then(i.bind(i, 80705))
                .then((e) => e.startWindowedPitch()),
            "editor.enterPitchPresenterViewMode": () =>
              Promise.all([i.e(6486), i.e(2118), i.e(705)])
                .then(i.bind(i, 80705))
                .then((e) => e.enterPitchMode({ isPresenterView: !0 })),
          };
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              Object.assign(Object.assign({}, d), u),
                              y,
                            ),
                            b,
                          ),
                          I,
                        ),
                        M,
                      ),
                      x,
                    ),
                    H,
                  ),
                  E,
                ),
                L,
              ),
              V,
            ),
            P,
          ),
          A,
        );
      };
      function St() {
        const { properties: e } = (0, m.nZ)();
        if (e.value.webLink.value) (0, J.H)();
        else if (e.value.notes.value) {
          (0, p.$)().setPopoverEditorVisible("notes");
        } else;
      }
      var Mt = i(81296),
        xt = i.n(Mt),
        Ht = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      function Et(e) {
        return e.split("/").slice(-1).pop();
      }
      function Lt(e) {
        return Ht(this, void 0, void 0, function* () {
          let t = "";
          try {
            t = (0, v._I)().lastSaveDirectory || Q.app.getPath("downloads");
          } catch (e) {
            t = "downloads";
          }
          const i = yield (0, re.ZZ)({
            title: "Save",
            suggestPath: { suggestedName: e, defaultPath: t },
          });
          return new Promise(function (e) {
            if (i) {
              const t = le().dirname(i);
              r.ZP.fetch(l.Pp, {
                mutations: [
                  {
                    id: "attachment",
                    type: "setLastDirectory",
                    payload: [{ lastSaveDirectory: t }],
                  },
                ],
              }),
                e(i);
            }
          });
        });
      }
      function Vt() {
        return Ht(this, void 0, void 0, function* () {
          const { properties: e } = (0, m.nZ)(),
            t = e.value.audioNotes.value.resourcePath,
            i = Et(t),
            { stage: n } = (0, C.F)(),
            o = yield n.take(t);
          Lt(i).then(function (e) {
            xt().writeFileSync(e, o);
          });
        });
      }
      function Pt() {
        return Ht(this, void 0, void 0, function* () {
          const { properties: e } = (0, m.nZ)(),
            t = e.value.attachmentFile.value.resourcePath;
          let i = e.value.attachmentFile.value.fileName;
          const n = le().extname(t);
          i && !i.endsWith(n) && (i += n);
          const { stage: o } = (0, C.F)(),
            a = yield o.take(t);
          Lt(i).then(function (e) {
            xt().writeFileSync(e, a);
          });
        });
      }
      function At() {
        return Ht(this, void 0, void 0, function* () {
          const { activeSheet: e, selection: t } = (0, m.nZ)(),
            i = t.value.modelIds[0],
            n = e.value.query({ id: i }).asTopic().imageSource,
            o = Et(n),
            { stage: a } = (0, C.F)(),
            r = yield a.take(n.replace("xap:", ""));
          Lt(o).then(function (e) {
            xt().writeFileSync(e, r);
          });
        });
      }
      function Zt() {
        return Ht(this, void 0, void 0, function* () {
          const { activeSheet: e, selection: t } = (0, m.nZ)(),
            i = t.value.modelIds[0],
            n = e.value.query({ id: i }).asTopic().imageSource,
            o = (0, (0, v.JE)().T)("Equation") + ".png",
            { stage: a } = (0, C.F)(),
            r = yield a.take(n.replace("xap:", ""));
          Lt(o).then(function (e) {
            xt().writeFileSync(e, r);
          });
        });
      }
      function Ot() {
        const { selection: e, activeSheet: t, changeDoc: i } = (0, m.nZ)();
        e.value.modelIds.forEach((e) => {
          const n = t.value
            .query({ id: e })
            .asTopic()
            .asMutable()
            .attrs({ title: "" })
            .commit();
          i(n.ownerDocument);
        });
      }
      function Ft() {
        const { executePropertyAction: e } = (0, m.nZ)();
        e({ name: "mutateProperty:marker", inputValue: null });
      }
      function Bt() {
        const { executePropertyAction: e } = (0, m.nZ)();
        e({ name: "mutateProperty:topicLabel" });
      }
      function $t() {
        const { executeMutationAction: e } = (0, m.nZ)();
        e({ name: "mutate:removeTopicHref" });
      }
      const Rt = () => {
          const { executePropertyAction: e } = (0, m.nZ)();
          e({ name: "mutateProperty:notes", inputValue: null });
        },
        Nt = () => {
          !(function () {
            const { executeMutationAction: e } = (0, m.nZ)();
            e({ name: "mutate:deleteTopicImage" });
          })(),
            (function () {
              const { executePropertyAction: e } = (0, m.nZ)();
              e({ name: "mutateProperty:equation" });
            })();
        };
      const Wt = () => {
          const { sheets: e } = (0, m.nZ)(),
            t = zt();
          if (t > -1) {
            let i = t - 1;
            (i = i < 0 ? i + e.value.length : i), jt(i);
          }
        },
        Dt = () => {
          const { sheets: e } = (0, m.nZ)(),
            t = zt();
          if (t > -1) {
            const i = (t + 1) % e.value.length;
            jt(i);
          }
        },
        jt = (e) => {
          const { executeEditorAction: t, sheets: i } = (0, m.nZ)(),
            n = i.value[e];
          if (!n) return;
          t({ name: "mutateEditor:switchSheet", inputValue: n.id });
        },
        zt = () => {
          const { activeSheetId: e, sheets: t } = (0, m.nZ)(),
            i = t.value.map((e) => e.id);
          if (!i || i.length < 2) return;
          return i.indexOf(e.value);
        };
      var _t = i(50743);
      const qt = () => {
        const e = {};
        Object.keys(V).forEach((t) => {
          e[t] = Ut(t);
        }),
          (e["editor.toggleBranchOnly"] = () => {
            const { isInBranchOnly: e } = (0, m.nZ)();
            e.value
              ? (0, v.JX)().handleCommand("editor.exitBranchOnly")
              : (0, v.JX)().handleCommand("editor.showBranchOnly");
          }),
          (e["editor.toggleBranch"] = () => {
            const { actionStates: e, executeMutationAction: t } = (0, m.nZ)();
            t({
              name: P("editor.foldBranch", e.value)
                ? "mutate:foldBranch"
                : "mutate:unfoldBranch",
            });
          }),
          (e["editor.toggleAllBranch"] = () => {
            const { actionStates: e, executeMutationAction: t } = (0, m.nZ)();
            t({
              name: P("editor.foldAllDescendantBranches", e.value)
                ? "mutate:foldAllDescendantBranches"
                : "mutate:unfoldAllDescendantBranches",
            });
          }),
          (e["editor.editInfoItem"] = St),
          (e["editor.saveAsAudioNote"] = Vt),
          (e["editor.saveAsAttachment"] = Pt),
          (e["editor.saveAsImage"] = At),
          (e["editor.saveAsEquation"] = Zt),
          (e["editor.showEquationEditor"] = () => {
            (0, p.$)().setPopoverEditorVisible("equation");
          }),
          (e["editor.resizeEquation"] = () => {
            const { executeMutationAction: e } = (0, m.nZ)();
            e({ name: "mutate:resetTopicImageSize" });
          }),
          (e["editor.clearText"] = Ot),
          (e["editor.removeMarker"] = Ft),
          (e["editor.removeLabel"] = Bt),
          (e["editor.removeLink"] = $t),
          (e["editor.removeNote"] = Rt),
          (e["editor.removeStickerOrImageOrEquation"] = Nt),
          (e["editor.removeTopicContent"] = () => {}),
          (e["editor.removeMarkerForTopicContextMenu"] = Ft),
          (e["editor.removeLabelForTopicContextMenu"] = Bt),
          (e["editor.removeTaskForTopicContextMenu"] = () => {
            const { executeMutationAction: e } = (0, m.nZ)();
            e({ name: "mutate:removeTask" });
          }),
          (e["editor.removeLinkForTopicContextMenu"] = $t),
          (e["editor.previousSheet"] = Wt),
          (e["editor.nextSheet"] = Dt);
        return (
          [
            { id: "editor.addMarkerOne", payload: { priority: 1 } },
            { id: "editor.addMarkerTwo", payload: { priority: 2 } },
            { id: "editor.addMarkerThree", payload: { priority: 3 } },
            { id: "editor.addMarkerFour", payload: { priority: 4 } },
            { id: "editor.addMarkerFive", payload: { priority: 5 } },
            { id: "editor.addMarkerSix", payload: { priority: 6 } },
            { id: "editor.addMarkerSeven", payload: { priority: 7 } },
          ].forEach((t) => {
            e[t.id] = () => {
              const { markerGroups: e, addMarker: i } = (0, _t.HV)(),
                n = e.value.find((e) => "priorityMarkers" === e.id),
                o = ((null == n ? void 0 : n.markers) || [])[
                  t.payload.priority - 1
                ];
              n && o && i(o, n);
            };
          }),
          e
        );
      };
      function Ut(e) {
        var t;
        const {
            executeMutationAction: i,
            executeAction: n,
            executeEditorAction: o,
          } = (0, m.nZ)(),
          a = null === (t = V[e]) || void 0 === t ? void 0 : t.actionId;
        return (function (e) {
          return e.startsWith("mutate:");
        })(a)
          ? (e) =>
              i({
                name: a,
                inputValue: null == e ? void 0 : e.value,
                payload: null == e ? void 0 : e.payload,
              })
          : (function (e) {
              return e.startsWith("mutateEditor:");
            })(a)
          ? (e) =>
              o({
                name: a,
                inputValue: null == e ? void 0 : e.value,
                payload: null == e ? void 0 : e.payload,
              })
          : (e) =>
              n({
                name: a,
                inputValue: null == e ? void 0 : e.value,
                payload: null == e ? void 0 : e.payload,
              });
      }
      function Xt() {
        const e = (0, f.r)();
        if (!e) return;
        const t = e.activeEditorId,
          i = e.editorViewInfos.findIndex((e) => e.id === t),
          n = e.editorViewInfos.length,
          o = (i - 1 + n) % n;
        r.ZP.fetch(l.rM, {
          editorId: e.editorViewInfos[o].id,
          frameId: e.frameId,
        });
      }
      function Gt() {
        const e = (0, f.r)();
        if (!e) return;
        const t = e.activeEditorId,
          i =
            (e.editorViewInfos.findIndex((e) => e.id === t) + 1) %
            e.editorViewInfos.length;
        r.ZP.fetch(l.rM, {
          editorId: e.editorViewInfos[i].id,
          frameId: e.frameId,
        });
      }
      const Kt = () => {
        const e = qt();
        return {
          escape: e["editor.hideEditBox"],
          paste: () => {
            const t = e.paste,
              { selection: i } = (0, m.nZ)();
            ["relationship", "boundary"].includes(i.value.type)
              ? document.execCommand("paste")
              : t({ payload: { toImage: !0, toMarker: !0 } });
          },
          "editor.addMarker": ({ value: e }) =>
            (({ value: e }) => {
              const { executeAction: t } = (0, m.nZ)();
              t({
                name: "mutateBatchDirect",
                payload: [{ name: "mutate:addMarker", inputValue: e }],
              });
            })({ value: e }),
          "editor.changeImage": ({ value: e }) =>
            (({ value: e }) => {
              const { executeAction: t } = (0, m.nZ)();
              t({
                name: "mutateBatchDirect",
                payload: [{ name: "mutate:insertImage", inputValue: e }],
              });
            })({ value: e }),
        };
      };
      var Jt = i(32652);
      const Yt = (e) => (
        !(0, h.E)().isBeginnerModeVisible ||
          (0, p.$)().zenMode ||
          ((0, Jt.X)().actionMode &&
            (0, Jt.X)().currentKey === e &&
            (0, Jt.X)().next()),
        !1
      );
      function Qt() {
        const e = (0, v.f7)().keybindingByCommandId("editor.addSubTopic");
        Yt(e), Ut("editor.addSubTopic")();
      }
      function ei() {
        const e = (0, v.f7)().keybindingByCommandId("editor.addTopic");
        Yt(e), Ut("editor.addTopic")();
      }
      function ti() {
        const e = (0, v.f7)().keybindingByCommandId("editor.showEditBox");
        Yt(e), Ut("editor.showEditBox")();
      }
      function ii() {
        (0, h.E)().changeBeginnerModeVisible(!1);
      }
      const ni = () => {
        const e = It(),
          t = qt();
        return {
          showMapShot: e.showMapShot,
          mapShot: e.mapShot,
          "editor.zoomIn": t["editor.zoomIn"],
          "editor.zoomOut": t["editor.zoomOut"],
          "editor.resetZoom": t["editor.resetZoom"],
          "editor.fitMap": t["editor.fitMap"],
        };
      };
      var oi = function (e, t, i, n) {
        return new (i || (i = Promise))(function (o, a) {
          function r(e) {
            try {
              l(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function d(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(r, d);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      const ai = () => ({
        start: () => {
          ((e) => {
            const t = (0, X.Ds)((e) => {
              const t = (0, f.A)();
              null == t || t.updateCommands(e);
            }, 50);
            (0, s.YP)(
              () => {
                var t;
                if (!(0, m.nZ)().isEditorFirstRendered.value) return [];
                const i = $(window.editorId),
                  n = B(window.editorId),
                  o = F(window.editorId),
                  a = R(window.editorId),
                  r = N(window.editorId),
                  d = W(window.editorId),
                  l = `editor/${window.editorId}/outliner`,
                  s = `editor/${window.editorId}/mindmap/snowbrush`,
                  c = `editor/${window.editorId}/popover`,
                  u = {
                    [i]: z(),
                    [n]: D(),
                    [l]: [],
                    [o]: j(),
                    [s]: [],
                    [r]: _(),
                    [a]: q(),
                    [c]: [],
                    [d]: U(),
                  },
                  v = {};
                "function" == typeof e && Object.assign(v, e());
                const g = u[i].filter((e) => !!e),
                  C = u[n].concat(v[n]).filter((e) => !!e),
                  y = u[l].concat(v[l]).filter((e) => !!e),
                  b = u[o].concat(v[o]).filter((e) => !!e),
                  w = u[s].concat(v[s]).filter((e) => !!e),
                  k = u[r].concat(v[r]).filter((e) => !!e),
                  T = u[a].concat(v[a]).filter((e) => !!e),
                  I = u[c].concat(v[c]).filter((e) => !!e),
                  S = u[d].concat(v[d]).filter((e) => !!e),
                  M = [],
                  x = [],
                  H = Object.keys(v)
                    .filter((e) => !(e in u))
                    .map((e) => v[e])
                    .reduce((e, t) => [].concat(e).concat(t), [])
                    .filter((e) => !!e);
                let E = !0,
                  L = !0,
                  V = !0,
                  P = !0,
                  A = !0,
                  Z = !0,
                  O = !0,
                  X = !0;
                const G = (0, f.A)(),
                  K =
                    null !== (t = null == G ? void 0 : G.aggregatedContexts) &&
                    void 0 !== t
                      ? t
                      : {},
                  J = (0, p.$)(),
                  Y = !J.isOutlinerMode,
                  Q = J.isOutlinerMode,
                  ee = !!K["mindmap.inEditTitleMode"],
                  te = !!K["mindmap.inDraggingMode"],
                  ie = !!K["editor.inBeginnerMode"],
                  ne = !!K["editor.inMapShotMode"],
                  oe = !!K["editor.inBeginnerDialog"];
                (E = E && !oe),
                  (L = L && Y),
                  (L = L && !ee),
                  (L = L && !te),
                  (P = P && Q),
                  (A = A && ee),
                  (Z = Z && ie && !ee),
                  (O = O && !!K["focus.popover"]),
                  (X = X && ne);
                const ae = !!K["focus.input"];
                (L = L && !ae),
                  (P = P && !ae),
                  (A = A && !ae),
                  (Z = Z && !ae),
                  (O = O && !ae),
                  (X = X && !ae);
                const re = !!K["focus.popover"] || !!K["editor.inPopoverMode"];
                (L = L && !re),
                  (P = P && !re),
                  (A = A && !re),
                  (Z = Z && !re),
                  (X = X && !re),
                  (V = V && L);
                const de = !!K["editor.inIMEMode"];
                (E = E && !de), (E = E && !ne);
                const le = J.pitchMode,
                  se = J.pitchPresenterViewMode;
                E = E && !le;
                let ce = [].concat(g);
                const ue = ["editor.addSheet"];
                E &&
                  (ce.push(...C),
                  L && ce.push(...b),
                  P && ce.push(...y),
                  V && ce.push(...w),
                  ce.push(...M),
                  ce.push(...x),
                  A && ce.push(...k),
                  Z && ce.push(...T),
                  O && ce.push(...I),
                  (0, h.E)().sheetRendering &&
                    (ce = ce.filter((e) => ue.includes(e.id))));
                const he = ["workbench.toggleInfoCard"];
                return (
                  le && ce.push(...C.filter((e) => he.includes(e.id))),
                  se && (ce.push(...w), ce.push(...b)),
                  X && ce.push(...S),
                  ce.push(...H),
                  ce
                );
              },
              (e) => {
                const i = (0, f.A)();
                null == i || i.updateInternalCommands(e), t(e);
              },
            );
          })(() => {
            const e = (0, u.y)().contributedCommands,
              t = {};
            return (
              Object.keys(e).forEach((i) => {
                const n = e[i];
                (t[i] = []),
                  Object.keys(n).forEach((e) => {
                    const o = n[e],
                      a = {
                        id: o.id,
                        provider: o.provider,
                        enabled: Z(o.enabledExpr, o.enabledFn),
                      };
                    t[i].push(a);
                  });
              }),
              t
            );
          });
          const e = (0, u.y)().contributedHandlers,
            t = ((e) => {
              const t = $(window.editorId),
                i = B(window.editorId),
                n = `editor/${window.editorId}/outliner`,
                o = F(window.editorId),
                a = R(window.editorId),
                d = N(window.editorId),
                c = `editor/${window.editorId}/popover`,
                u = W(window.editorId),
                h = {
                  [t]: {
                    "frame.toggleTabbar": () => {
                      const e = (0, f.r)();
                      null == e ||
                        e.setIsShowTabBar(
                          !(null == e ? void 0 : e.isShowTabBar),
                        );
                    },
                    "frame.addNewTab": () => {
                      const e = (0, f.r)();
                      r.ZP.fetch(l.NF, {
                        frameId: null == e ? void 0 : e.frameId,
                      });
                    },
                    "frame.previousTab": Xt,
                    "frame.nextTab": Gt,
                    closeSimpleWindow: () => {
                      const e = (0, f.r)(),
                        t = null == e ? void 0 : e.activeEditorId;
                      t && r.ZP.fetch(l.s2, { editors: [t] });
                    },
                    closeComplexWindow: () =>
                      (0, v.JX)().handleCommand("closeWindow"),
                  },
                  [i]: It(),
                  [o]: qt(),
                  [a]: {
                    "editor.addSubTopic": Qt,
                    "editor.addTopic": ei,
                    "editor.showEditBox": ti,
                    escape: ii,
                  },
                  [d]: Kt(),
                  [u]: ni(),
                  [n]: {},
                  [c]: {},
                },
                p = [];
              return (
                Object.keys(h).forEach((e) => {
                  p.push(
                    r.ZP.route(
                      (0, l.B_)(e),
                      ({ commandId: e, handlerArgs: t }) => {
                        (0, v.JX)().doHandleCommand(e, t);
                      },
                    ),
                  );
                }),
                (0, s.YP)(
                  () => e(),
                  (e) => {
                    Object.keys(e).forEach((e) => {
                      e in h ||
                        ((h[e] = {}),
                        p.push(
                          r.ZP.route(
                            (0, l.B_)(e),
                            ({ commandId: e, handlerArgs: t }) => {
                              (0, v.JX)().doHandleCommand(e, t);
                            },
                          ),
                        ));
                    });
                  },
                ),
                (0, s.YP)(
                  () => window.isBeingDestroyed,
                  (e) => {
                    e && p.forEach((e) => e());
                  },
                  { flush: "sync" },
                ),
                h
              );
            })(() => Object.assign({}, e));
          (0, v.JX)().injectDoHandleCommand((e, i) =>
            oi(void 0, void 0, void 0, function* () {
              var n;
              const o =
                  null === (n = (0, f.A)()) || void 0 === n
                    ? void 0
                    : n.commandById(e),
                a = (i && i.provider) || (o && o.provider),
                d = (0, u.y)().contributedHandlers,
                s = (function (e, t) {
                  const i = {};
                  return (
                    Object.keys(e)
                      .concat(Object.keys(t))
                      .forEach((n) => {
                        i[n] = Object.assign({}, e[n], t[n]);
                      }),
                    i
                  );
                })(t, d);
              if (!(a in s))
                return (
                  r.ZP.fetch(l.hR, { commandId: e, handlerArgs: i }),
                  "interruption"
                );
              {
                const t = s[a][e];
                if (!t)
                  throw new Error(
                    `Command (${e}) can't be handled by command provider (${a})`,
                  );
                const n =
                  o &&
                  ("function" == typeof o.enabledFn
                    ? o.enabledFn(!0)
                    : o.enabled);
                n &&
                  ![
                    "copy",
                    "paste",
                    "escape",
                    "editor.addMarker",
                    "editor.changeImage",
                  ].includes(null == o ? void 0 : o.id) &&
                  (0, m.nZ)().executeAction({
                    name: "mutate:interruptingEditSession",
                  }),
                  n && t(i);
              }
            }),
          );
        },
      });
      function ri(e, t) {
        if (!e || !t) return {};
        let i = 0,
          n = 0,
          o = 0,
          a = 0,
          r = 0,
          d = !1,
          l = 0,
          s = 0,
          c = 0,
          u = 0,
          h = 0,
          p = 0,
          f = 0,
          v = 0,
          g = 0,
          C = 0;
        const y = e.type,
          b = e.modelIds;
        switch (y) {
          case "topic":
            (i = b.length),
              b.forEach((e) => {
                var i;
                const p =
                  null === (i = t.query({ id: e })) || void 0 === i
                    ? void 0
                    : i.asTopic();
                (n += "summary" === (null == p ? void 0 : p.topicType) ? 1 : 0),
                  (o +=
                    "callout" === (null == p ? void 0 : p.topicType) ? 1 : 0),
                  (a +=
                    "detached" === (null == p ? void 0 : p.topicType) ? 1 : 0),
                  (r += "root" === (null == p ? void 0 : p.topicType) ? 1 : 0),
                  (d = "" === (null == p ? void 0 : p.title)),
                  (l += null == p ? void 0 : p.markers.length),
                  (s += null == p ? void 0 : p.labels.length),
                  (c += (null == p ? void 0 : p.task) ? 1 : 0),
                  (u +=
                    (null == p ? void 0 : p.href) &&
                    ["http", "xmind", "file"].some((e) => p.href.startsWith(e))
                      ? 1
                      : 0),
                  (((null == p ? void 0 : p.href) &&
                    (null == p ? void 0 : p.href.startsWith("xap"))) ||
                    (null == p ? void 0 : p.extensionBy(m.o9.AudioNotes))) &&
                    (h = 1);
              });
            break;
          case "image":
            b.forEach((e) => {
              var i;
              const n =
                  null === (i = t.query({ id: e })) || void 0 === i
                    ? void 0
                    : i.asTopic(),
                { getSheetViewer: o } = (0, m.nZ)(),
                a = o(n.ownerSheet.id).getSheetFigure().topicFigureByTopicId[e];
              (null == n ? void 0 : n.extensionBy(m.o9.Equation))
                ? (g += 1)
                : (v += 1),
                (null == a ? void 0 : a.viewAttributes.hasImageLoadingFailed) &&
                  (C += 1);
            });
            break;
          case "boundary":
            p = b.length;
            break;
          case "relationship":
            f = b.length;
        }
        return {
          "selection.none": 0 === i && 0 === p && 0 === f && 0 === v && 0 === g,
          "selection.single": i + p + f + v + g === 1,
          "selection.couple": i + p + f + v + g === 2,
          "selection.greaterThanCouple": i + p + f + v + g > 2,
          "selection.multiple": i + p + f + v + g > 1,
          "selection.some": i + p + f + v + g >= 1,
          "selection.hasTopic": i > 0,
          "selection.hasCentralTopic": r > 0,
          "selection.hasBoundary": p > 0,
          "selection.hasRelationship": f > 0,
          "selection.hasSummary": n > 0,
          "selection.hasCallout": o > 0,
          "selection.hasFloatingTopic": a > 0,
          "selection.hasImage": v > 0,
          "selection.hasEquation": g > 0,
          "selection.hasImageLoadingFailed": C > 0,
          "selection.onlyCentralTopic":
            i === r && 0 === p && 0 === f && 0 === v && 0 === g,
          "selection.allTopics":
            i > 0 && 0 === p && 0 === f && 0 === v && 0 === g,
          "selection.allBoundaries":
            0 === i && p > 0 && 0 === f && 0 === v && 0 === g,
          "selection.allRelationships":
            0 === i && 0 === p && f > 0 && 0 === v && 0 === g,
          "selection.allSummaries":
            i === n && 0 === p && 0 === f && 0 === v && 0 === g,
          "selection.allCallout":
            i === o && 0 === p && 0 === f && 0 === v && 0 === g,
          "selection.allFloatingTopic":
            i === a && 0 === p && 0 === f && 0 === v && 0 === g,
          "selection.moreThanThreeFloatingTopic": a >= 3,
          "selection.allImages": 0 === i && 0 === p && 0 === f && v > 0,
          "selection.hasTopicWithTitle": !d,
          "selection.hasTopicWithMarker": l > 0,
          "selection.hasTopicWithLabel": s > 0,
          "selection.hasTopicWithTask": c > 0,
          "selection.hasTopicWithLink": u > 0,
          "selection.onlyTopicWithMarker":
            l > 0 && 0 === s && 0 === u && 0 === c,
          "selection.onlyTopicWithLabel":
            s > 0 && 0 === l && 0 === u && 0 === c,
          "selection.onlyTopicWithTask": c > 0 && 0 === s && 0 === l && 0 === u,
          "selection.onlyTopicWithLink": u > 0 && 0 === l && 0 === s && 0 === c,
          "selection.hasTopicWithAttachmentOrAudioNote": h > 0,
        };
      }
      var di = function (e, t, i, n) {
        return new (i || (i = Promise))(function (o, a) {
          function r(e) {
            try {
              l(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function d(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(r, d);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      const li = {
          start: () => {
            const e = (0, I.U)();
            let t = !1,
              i = !0;
            function n() {
              const t = e.lastFocusedElementTag,
                i = document.querySelector(`[${M}="${t}"]`);
              return (
                !document.activeElement ||
                document.activeElement === document.body ||
                document.activeElement.getAttribute(x) === E ||
                !document.contains(i)
              );
            }
            document.body.setAttribute("tabindex", "-1"),
              document.addEventListener(
                "focus",
                (o) => {
                  var a, r, d, l;
                  if (
                    !(null === (a = o.target) || void 0 === a
                      ? void 0
                      : a.getAttribute(H))
                  ) {
                    if (((i = !1), t)) {
                      const t = (0, T.hb)();
                      null === (r = o.target) ||
                        void 0 === r ||
                        r.setAttribute(M, t),
                        e.updateLastFocusedElementTag(t);
                    } else if (
                      (null === (d = o.target) || void 0 === d
                        ? void 0
                        : d.getAttribute(x)) === E ||
                      o.target === document.body
                    )
                      setTimeout(() => {
                        var t;
                        const i = e.lastFocusedElementTag,
                          o = document.querySelector(`[${M}="${i}"]`);
                        null === (t = null == o ? void 0 : o.focus) ||
                          void 0 === t ||
                          t.call(o, { preventScroll: !0 }),
                          n() && e.updateLastFocusedElementTag(null);
                      }, 10);
                    else {
                      const t = (0, T.hb)();
                      null === (l = o.target) ||
                        void 0 === l ||
                        l.setAttribute(M, t),
                        e.updateLastFocusedElementTag(t);
                    }
                    for (const e of o.path) {
                      if (e === document.body) break;
                      const t = null == e ? void 0 : e.updateFocusContextsFn;
                      if ((t && t(!0), e && e.getAttribute(S))) break;
                    }
                  }
                },
                !0,
              ),
              document.addEventListener(
                "blur",
                (o) => {
                  var a;
                  if (
                    null === (a = o.target) || void 0 === a
                      ? void 0
                      : a.getAttribute(H)
                  )
                    return;
                  i = !0;
                  const r = e.lastFocusedElementTag,
                    d = document.querySelector(`[${M}="${r}"]`);
                  if (document.hasFocus() || document.activeElement !== d) {
                    for (const e of o.path) {
                      if (e === document.body) break;
                      const t = e && e.updateFocusContextsFn;
                      if ((t && t(!1), e && e.getAttribute(S))) break;
                    }
                    (!t || (i && document.activeElement === document.body)) &&
                      setTimeout(() => {
                        var t;
                        if (i) {
                          const i = e.lastFocusedElementTag,
                            o = document.querySelector(`[${M}="${i}"]`);
                          null === (t = null == o ? void 0 : o.focus) ||
                            void 0 === t ||
                            t.call(o, { preventScroll: !0 }),
                            n() && e.updateLastFocusedElementTag(null);
                        }
                      }, 10);
                  }
                },
                !0,
              ),
              document.addEventListener(
                "keydown",
                (e) => {
                  t = 9 === e.keyCode;
                },
                !0,
              ),
              document.addEventListener(
                "mousedown",
                () => {
                  t = !1;
                },
                !0,
              ),
              document.addEventListener(
                "keyup",
                () => {
                  t = !1;
                },
                !0,
              ),
              s.ZP.directive("focus-contexts", {
                bind(e, t) {
                  const i = t.value,
                    n = t.arg;
                  "group" === n
                    ? e.setAttribute(S, (0, T.hb)())
                    : "no" === n
                    ? e.setAttribute(x, E)
                    : "no-effect" === n && e.setAttribute(H, "true"),
                    i &&
                      Array.isArray(i) &&
                      (e.updateFocusContextsFn = (e) => {
                        const t = {};
                        i.forEach((i) => {
                          t[i] = !!e;
                        });
                        const n = (0, f.A)();
                        null == n || n.updateContexts(t);
                      });
                },
              }),
              (0, s.YP)(
                () => n(),
                (e) => {
                  if (e) {
                    const e = (0, f.A)(),
                      t = (null == e ? void 0 : e.aggregatedContexts) || {},
                      i = {};
                    Object.keys(t).forEach((e) => {
                      e.startsWith("focus") && (i[e] = !1);
                    }),
                      null == e || e.updateContexts(i);
                  }
                },
                { immediate: !0 },
              );
          },
        },
        si = (() => {
          function e() {
            const e = (0, v.Gu)().tempEvents,
              t = Object.keys(e);
            return (
              0 !== t.length &&
              ((function () {
                if (
                  (0, v.HA)().focusedWinStoreModuleName !==
                  `window-${window.id}`
                )
                  return !1;
                if ((0, p.$)().zenMode || (0, h.E)().isBeginnerModeVisible)
                  return !1;
                return !0;
              })() &&
                setTimeout(() => {
                  (0, v.Gu)().setCurrentPromotion(e[t[0]]);
                }, 5e3),
              !0)
            );
          }
          return {
            start: () => {
              const t = (0, v.Gu)(),
                i = (0, s.YP)(
                  () => t.status,
                  (t) => {
                    t && (e() || i());
                  },
                );
              (0, s.YP)(
                () => t.currentPromotion,
                (e, i) => {
                  i || (i = {}),
                    e ||
                      (t.updateNotificationStatus(!0), t.shiftTempEvent(i.id));
                },
              ),
                window.addEventListener("focus", () => {
                  t.status && e();
                });
            },
          };
        })(),
        ci = o().parse(window.location.search.slice(1)),
        ui = ci.editorId || "";
      window.editorId = ui;
      const hi = ci.source;
      let pi = "",
        mi = "";
      async function fi() {
        let e = null;
        await new Promise((t) => {
          e = (0, s.YP)(
            () => (0, p.$)().isWorkbenchReady,
            (e) => {
              e && t(!0);
            },
            { immediate: !0 },
          );
        }),
          e && e();
      }
      (pi = document.querySelector("html").style.backgroundColor),
        (mi = document.querySelector("html").style.opacity),
        (document.querySelector("html").style.backgroundColor = "transparent"),
        (document.querySelector("html").style.opacity = 0),
        (0, a.Z)(w, {
          name: "editor",
          piniaPlugins: [],
          runAfterPiniaPlugin: (e) => {
            li.start(), si.start();
            di(void 0, void 0, void 0, function* () {
              const e = {
                start: () => {
                  const {
                    syncedSelection: e,
                    document: t,
                    isEditingTitle: i,
                    isInBranchOnly: n,
                  } = (0, m.nZ)();
                  (0, s.YP)(
                    e,
                    () => {
                      var i;
                      const n = ri(e.value, t.value);
                      null === (i = (0, f.A)()) ||
                        void 0 === i ||
                        i.updateContexts(n);
                    },
                    { immediate: !0 },
                  ),
                    (0, s.YP)(t, () => {
                      var i;
                      const n = ri(e.value, t.value);
                      null === (i = (0, f.A)()) ||
                        void 0 === i ||
                        i.updateContexts(n);
                    }),
                    (0, s.YP)(
                      i,
                      (e) => {
                        var t;
                        null === (t = (0, f.A)()) ||
                          void 0 === t ||
                          t.updateContexts({ "mindmap.inEditTitleMode": e });
                      },
                      { immediate: !0 },
                    ),
                    (0, s.YP)(
                      () => (0, h.E)().isBeginnerModeVisible,
                      (e) => {
                        var t;
                        null === (t = (0, f.A)()) ||
                          void 0 === t ||
                          t.updateContexts({ "editor.inBeginnerMode": e });
                      },
                    ),
                    (0, s.YP)(
                      () => (0, h.E)().isBeginnerDialogVisible,
                      (e) => {
                        var t;
                        null === (t = (0, f.A)()) ||
                          void 0 === t ||
                          t.updateContexts({ "editor.inBeginnerDialog": e });
                      },
                    ),
                    (0, s.YP)(
                      () => (0, h.E)().isTryPicthModeVisible,
                      (e) => {
                        var t;
                        null === (t = (0, f.A)()) ||
                          void 0 === t ||
                          t.updateContexts({ "editor.inTryPitchMode": e });
                      },
                    ),
                    (0, s.YP)(n, (e) => {
                      var t;
                      null === (t = (0, f.A)()) ||
                        void 0 === t ||
                        t.updateContexts({ "mindmap.inBranchOnly": e });
                    }),
                    (0, s.YP)(
                      () => (0, p.$)().popoverEditorVisible,
                      (e) => {
                        var t;
                        null === (t = (0, f.A)()) ||
                          void 0 === t ||
                          t.updateContextsSync({ "editor.inPopoverMode": !!e });
                      },
                    );
                },
              };
              ai().start(), e.start();
            });
          },
          editorId: ui,
        }).then(async (e) => {
          const t = r.ZP.route((0, l.uT)(window.editorId), () => {
              window.isBeingDestroyed ||
                ((window.isBeingDestroyed = !0), e.$destroy(), t()),
                setTimeout(() => {
                  window.isDestroyed = !0;
                }, 0);
            }),
            i = (0, C.F)();
          await i.init(hi || "new://workbook", ui);
        }),
        (0, s.YP)(
          () => (0, k.i)().ready,
          async (e) => {
            if (!e) return;
            const t = (0, v.OD)((0, d.aJ)(ui));
            (0, s.YP)(
              () => t().ownerFrameId,
              async (e, i) => {
                if (!e) return;
                window.getCurrentWindowAsync?.().then((e) => {
                  e &&
                    (e.isMaximized()
                      ? (document.body.classList?.add("uk-window-maximized"),
                        window.dispatchEvent(new Event("maximize")))
                      : (document.body.classList?.remove("uk-window-maximized"),
                        window.dispatchEvent(new Event("restore"))));
                }),
                  (0, v.d1)((0, d.v3)(i));
                const n = (0, d.v3)(e),
                  o = await r.ZP.fetch(l.Pp, {
                    mutations: [{ id: n, kind: "frame" }],
                  }),
                  a = (0, v.M4)(n)(),
                  c = o[n];
                a.$patch((0, s.qj)(c));
                const h = t();
                h.isAlive
                  ? fi().then(() => {
                      (document.querySelector("html").style.backgroundColor =
                        pi),
                        (document.querySelector("html").style.opacity = mi);
                    })
                  : fi().then(() => {
                      (document.querySelector("html").style.backgroundColor =
                        pi),
                        (document.querySelector("html").style.opacity = mi),
                        requestIdleCallback(
                          () => {
                            h.setAlive(!0), (0, u.y)().setAlive(!0);
                          },
                          { timeout: 100 },
                        );
                    });
                const p = await window.getWindowIdAsync(),
                  m = (0, d.b3)(p),
                  f = await r.ZP.fetch(l.Pp, {
                    mutations: [{ id: m, kind: "window" }],
                  });
                (0, v._t)(m)().$patch((0, s.qj)(f[m])),
                  (0, C.F)().updateMemento(!1);
              },
              { immediate: !0 },
            );
          },
        );
    },
    13382: (e, t, i) => {
      i.d(t, {
        G$: () => T,
        N0: () => v,
        Pg: () => S,
        R2: () => k,
        W5: () => w,
        ZZ: () => C,
        am: () => b,
        eq: () => y,
        yr: () => I,
      });
      var n = i(71017),
        o = i.n(n),
        a = i(67657),
        r = i(7104),
        d = i(86633),
        l = i(33394),
        s = i(94593),
        c = i(90435),
        u = i(54856),
        h = i(5893),
        p = i(78152),
        m = i(63111);
      const f = (0, d.ZP)("dialog");
      async function v(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = o().join((0, r.bY)(), e.icon));
        const t = a.BrowserWindow.fromId(window.id);
        return [a.dialog.showMessageBoxSync(t, e)];
      }
      async function g(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = o().join((0, r.bY)(), e.icon));
        const t = a.BrowserWindow.fromId(window.id),
          { response: i, checkboxChecked: n } = await a.dialog.showMessageBox(
            t,
            e,
          );
        return [i, n];
      }
      async function C(e) {
        (e = Object.assign({ securityScopedBookmarks: !0 }, e || {}))
          .suggestPath &&
          !e.defaultPath &&
          ((e.defaultPath = b(e.suggestPath, e.filters)), delete e.suggestPath);
        const {
          canceled: t,
          filePath: i,
          bookmark: n,
        } = await a.dialog.showSaveDialog(a.getCurrentWindow(), e);
        return t
          ? null
          : (i && n && (await l.Z.bindBookmark({ fp: i, bookmark: n })),
            i && (0, p.km)().setLastSaveDirectory(o().dirname(i)),
            i);
      }
      async function y({ folderName: e, dialogOptions: t }) {
        let i = "";
        (t = Object.assign({ securityScopedBookmarks: !0 }, t || {}))
          .defaultPath || (t.defaultPath = b({}));
        const {
          canceled: n,
          filePaths: r,
          bookmark: d,
        } = await a.dialog.showOpenDialog(a.getCurrentWindow(), t);
        if (n) return null;
        if (
          ((i = r[0]),
          r.length > 0 && d && (await l.Z.bindBookmark({ fp: i, bookmark: d })),
          "string" == typeof e)
        ) {
          let t = e.replace(/[\\/]/g, "");
          (t = (0, h.N6)(t).replace(/\.+$/g, "").trim()), (i = o().join(i, t));
        }
        return (
          s.Z.existsSync(i) || s.Z.ensureDir(i),
          i && (0, p.km)().setLastSaveDirectory(i),
          i
        );
      }
      function b(
        { doc: e = null, oldDoc: t = null, suggestedName: i = null },
        n = null,
      ) {
        let r, d;
        if (
          (!r && i && (r = (0, h.N6)(i.toString())),
          !r &&
            e &&
            e.title &&
            e.source &&
            !e.source.startsWith("new://") &&
            (r = (0, h.N6)(e.title.toString())),
          !r &&
            t &&
            t.title &&
            t.source &&
            !t.source.startsWith("new://") &&
            (r = (0, h.N6)(t.title.toString())),
          r && Array.isArray(n))
        ) {
          const e = n[0] && n[0].extensions;
          Array.isArray(e) && e.length > 0 && (r = `${r}.${e[0]}`);
        }
        if (!d && t && t.source && t.source.startsWith("file://")) {
          let e = t.source.slice(7);
          (e = e.substring(1)), (d = o().dirname(e));
        }
        if (
          (!d &&
            (0, p.km)().lastSaveDirectory &&
            (d = (0, p.km)().lastSaveDirectory),
          !d)
        )
          try {
            d = a.app.getPath("documents");
          } catch (e) {
            f.info(e);
          }
        return d && r ? o().join(d, r) : d || r;
      }
      async function w(e) {
        e.$withUIKit((t) => {
          const i = `\n        <button\n        class="uk-button uk-button-text uk-text-nowrap"\n        style="word-break: keep-all;"\n        focustrigger="cannotGetFocusByMouse">\n          ${e.$T(
            "OK",
          )}\n        </button>\n        </div>`;
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
      async function k(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("OK"),
          i = e("Get Latest Version"),
          n = [t, i],
          [o] = await g({
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
        o === n.indexOf(i) && c.ZP.fetch(u.lf.GO_DOWNLOAD);
      }
      async function T(e) {
        if (((e = "function" != typeof e ? (e) => e : e), m.zr))
          return await g({
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
          [o] = await g({
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
        o === n.indexOf(i) && c.ZP.fetch(u.lf.GO_DOWNLOAD);
      }
      async function I(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Save"),
          i = e("Save as"),
          n = e("Cancel"),
          o = [];
        o.push(i, t, n);
        let [a] = await g({
          type: "none",
          title: "Xmind",
          message: e("Saving file from Xmind"),
          detail: e(
            "Once you save the file, it cannot be opened normally in older versions like $1.",
            "Xmind 22.11",
          ),
          buttons: o,
          defaultId: o.indexOf(i),
          cancelId: o.indexOf(n),
          noLink: !0,
        });
        const r = a === o.indexOf(t),
          d = a === o.indexOf(i);
        return { toSave: r, toSaveAs: d, toCancel: !r && !d };
      }
      async function S(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Fix ＆ Open"),
          i = e("Cancel"),
          n = [t, i],
          [o] = await g({
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
        return { toFix: o === n.indexOf(t), toCancel: o === n.indexOf(i) };
      }
    },
    33394: (e, t, i) => {
      i.d(t, { Z: () => m });
      var n = i(57147),
        o = i.n(n),
        a = i(71017),
        r = i.n(a),
        d = i(73837),
        l = i(86633),
        s = i(96829),
        c = i(56222);
      const u = (0, l.ZP)("renderer:fs");
      async function h(e) {
        return (0, c.A)("OBTAIN_READ_WRITE_ACCESS", e);
      }
      async function p(e) {
        return (0, c.A)("RELEASE_READ_WRITE_ACCESS", e);
      }
      const m = {
        read: async function (e) {
          if (!r().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const t = await (async function (e) {
            return (0, c.A)("OBTAIN_READ_LOCK", e);
          })(e);
          try {
            return await (0, d.promisify)(o().readFile)(e);
          } catch (t) {
            u.error(`path(${e}) read error: ${(0, s.SC)(t)}`);
            try {
              if (!(await h(e))) throw new Error(`No access to '${e}'`);
              return await (0, d.promisify)(o().readFile)(e);
            } catch (e) {
              throw e;
            } finally {
              await p(e);
            }
          } finally {
            await (async function (e) {
              return (0, c.A)("RELEASE_READ_LOCK", e);
            })(t);
          }
        },
        write: async function (e, t) {
          if (!r().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const i = await (async function (e) {
            return (0, c.A)("OBTAIN_WRITE_LOCK", e);
          })(e);
          try {
            return await (0, d.promisify)(o().writeFile)(e, t);
          } catch (i) {
            u.error(`path(${e}) write error: ${(0, s.SC)(i)}`);
            try {
              if (!(await h(e))) throw new Error(`No access to '${e}'`);
              return await (0, d.promisify)(o().writeFile)(e, t);
            } catch (e) {
              throw e;
            } finally {
              await p(e);
            }
          } finally {
            await (async function (e) {
              return (0, c.A)("RELEASE_WRITE_LOCK", e);
            })(i);
          }
        },
        bindBookmark: async function ({ fp: e, bookmark: t } = {}) {
          return (0, c.A)("BIND_BOOKMARK", { fp: e, bookmark: t });
        },
        hasRWAccess: async function (e) {
          return (0, c.A)("HAS_READ_WRITE_ACCESS", e);
        },
        obtainRWAccessFromOS: h,
        releaseRWAccessFromOS: p,
      };
    },
    85786: (e, t, i) => {
      i.d(t, { DL: () => u, Xf: () => s, Yv: () => c, vQ: () => h });
      var n = i(22037),
        o = i.n(n),
        a = i(57310),
        r = i.n(a),
        d = i(72298),
        l = i(13382);
      function s() {
        return "win32";
      }
      function c() {
        return {
          platform: o().platform(),
          arch: o().arch(),
          release: o().release(),
        };
      }
      function u(e, t) {
        const i = r().parse(e).protocol,
          n = t || ((e) => e);
        d.shell.openExternal(i ? e : `http://${e}`).catch(() => {
          (0, l.N0)({
            title: "Xmind",
            message: n("Unable to open link."),
            detail: n(
              "This link is invalid and cannot be opened through browser.",
            ),
            buttons: [n("OK")],
          });
        });
      }
      function h(e) {
        d.clipboard.writeText(e);
      }
    },
    95246: (e, t, i) => {
      i.d(t, {
        RS: () => u,
        lF: () => h,
        gP: () => f,
        sF: () => c,
        GI: () => p,
        Ni: () => m,
        mi: () => w,
        QC: () => g,
        Sr: () => C,
        yB: () => b,
        SX: () => y,
        RL: () => v,
      });
      i(13382), i(81296), i(90435), i(54856), i(71017);
      var n = i(72298),
        o = i(67657),
        a = (i(63111), i(41809));
      require("posthtml");
      var r = i(97234),
        d = i(26601),
        l = i(78152);
      const s = { cache: !1 },
        c = (e) => {
          const t = (e) => parseInt(e, 16);
          if (
            "string" == typeof (e = (0, r.Z)(e).toHexString()) &&
            /^#[A-Z0-9]{6}$/.test(e.toUpperCase())
          ) {
            return (
              0.2126 * t(e.slice(1, 3)) +
              0.7152 * t(e.slice(3, 5)) +
              0.0722 * t(e.slice(5))
            );
          }
          return 0;
        },
        u = (e = {}) => {
          const t = Object.assign({}, s, e);
          let i = null;
          const n = {};
          return function (e = "", o = "") {
            if (t.cache && n[e]) return n[e];
            i || (i = document.createElement("canvas"));
            const a = i.getContext("2d");
            a.font = o;
            const r = a.measureText(e);
            return t.cache && (n[e] = r.width), r.width;
          };
        };
      const h = (e, t = 1) => {
        const i = (function () {
            const e = o.screen.getAllDisplays().map((e) => e.scaleFactor);
            return Math.max.apply(null, e);
          })(),
          n = (0, a.Hv)(e, 72 * i * t);
        return Buffer.from(n.slice(22), "base64");
      };
      function p(e) {
        let t = parseInt(e);
        return Number.isInteger(t) ? t : 100;
      }
      function m(e) {
        return `${parseInt(e)}%`;
      }
      const f = (function () {
        let e = null;
        return function () {
          if (!e)
            if (window.screen.deviceXDPI && window.screen.deviceYDPI)
              e = { x: window.screen.deviceXDPI, y: window.screen.deviceYDPI };
            else {
              const t = document.createElement("div");
              (t.style.cssText =
                "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden"),
                document.body.appendChild(t),
                (e = {
                  x: parseInt(t.offsetWidth),
                  y: parseInt(t.offsetHeight),
                }),
                t.parentNode.removeChild(t);
            }
          return e;
        };
      })();
      function v(e, t) {
        let i = (0, l.f7)().keybindingByCommandIdAndGroup(t);
        const n = [];
        return (
          "string" == typeof i &&
            i.split("+").forEach((e) => {
              let t = e;
              "=" === t && (t = "+"), t && n.push(t);
            }),
          n.length > 0 ? `${e} ${n.join(" ")}` : e
        );
      }
      const g = (e, t) => {
          o.getCurrentWindow().setSize(e, t);
        },
        C = (e) => {
          const t = (e, ...t) => (0, l.JE)().T(e, ...t),
            i = o.Menu,
            a = o.MenuItem,
            r = new i();
          setTimeout(() => {
            const i = document.getSelection().toString(),
              d = n.clipboard.readText();
            r.append(
              new a({
                label: t("Cut"),
                enabled: Boolean(i),
                click: () => document.execCommand("cut"),
              }),
            ),
              r.append(
                new a({
                  label: t("Copy"),
                  enabled: Boolean(i),
                  click: () => document.execCommand("copy"),
                }),
              ),
              r.append(
                new a({
                  label: t("Paste"),
                  enabled: Boolean(d),
                  click: () => document.execCommand("paste"),
                }),
              ),
              r.append(new a({ type: "separator" })),
              r.append(
                new a({
                  label: t("Select All"),
                  enabled: Boolean(e),
                  click: () => document.execCommand("selectAll"),
                }),
              ),
              r.popup({ window: o.getCurrentWindow() });
          }, 50);
        };
      async function y() {
        await new Promise((e) =>
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              requestIdleCallback(e);
            });
          }),
        );
      }
      const b = (e, t) => d.Z.test({ width: e, height: t, sizes: [e, t] }),
        w = async (e, t, i = 1) => {
          if (b(e * i, t * i)) return i;
          const n = await d.Z.maxWidth({ usePromise: !0 }),
            o = await d.Z.maxHeight({ usePromise: !0 }),
            a = await d.Z.maxArea({ usePromise: !0 }),
            r = n.width,
            l = o.height,
            s = a.width * a.height;
          let c = i;
          if (e * i > r) {
            const t = r / e;
            c = Math.min(c, t);
          }
          if (t * i > l) {
            const e = l / t;
            c = Math.min(c, e);
          }
          if (e * i * t * i > s) {
            const i = Math.sqrt(s / (e * t));
            c = Math.min(c, i);
          }
          return c;
        };
    },
    93090: (e, t, i) => {
      i.d(t, {
        qE: () => C,
        s9: () => g,
        v1: () => b,
        fR: () => p,
        Ec: () => m,
        zo: () => k,
        Hz: () => f,
        Li: () => h.Li,
        XO: () => h.XO,
        aR: () => y,
        jp: () => v,
      });
      var n = i(7104),
        o = i(94593),
        a = i(71017),
        r = i.n(a),
        d = i(96829);
      const l = require("ncp");
      var s = i.n(l),
        c = i(68278),
        u = i(41901),
        h = i(16053);
      async function p(e, t) {
        const i = r().join((0, n.tY)(), e);
        o.Z.existsSync(i) && (await o.Z.remove(i)),
          "function" == typeof t && (await t());
      }
      async function m(e, t) {
        const i = "CUSTOM-" + (0, d.hb)(),
          a = r().join((0, n.tY)(), e),
          l = r().join((0, n.tY)(), i);
        await new Promise((e, t) =>
          s()(a, l, (i) => {
            if (i) return t(i);
            e();
          }),
        );
        const c = await v(i);
        (c.id = i),
          await o.Z.writeFile(r().join(l, "content.json"), JSON.stringify(c)),
          await t(i);
      }
      async function f(e, t, i, a) {
        const d = (0, n.tY)(),
          l = r().join(d, e);
        await o.Z.ensureDir(l);
        const s = r().join(l, "content.json"),
          c = r().join(l, "previews");
        await o.Z.ensureDir(c), await t(s), await i(c), await a();
      }
      function v(e) {
        const t = (0, n.tY)(),
          i = r().join(t, e),
          a = r().join(i, "content.json");
        return JSON.parse(o.Z.readFileSync(a));
      }
      ((0, c.gA)() || []).reduce(
        (e, t) =>
          e.concat(t.idList.map((e) => ({ id: e, themeName: t.themeName }))),
        [],
      );
      const g = u.DEFAULT_SKELETON_THEME_ID,
        C = u.DEFAULT_COLOR_THEME_ID;
      const y = (e) => {
          let t = e.slice();
          for (; t.length < 6; ) t = t.concat(e);
          return t.slice(0, 6);
        },
        b = (e) => {
          if (!Array.isArray(e) || 0 === e.length) return {};
          const t = 360 / e.length;
          return {
            background: `conic-gradient(${e
              .map((e, i) => `${e} ${i * t}deg ${(i + 1) * t}deg`)
              .join(", ")})`,
            borderRadius: "50%",
          };
        },
        w = (e) => {
          const t = [0, 1, 2, 3, 5, 8];
          for (let i of t) if (e <= i) return i;
          return e;
        },
        k = (e) => (
          [
            "map",
            "centralTopic",
            "subTopic",
            "mainTopic",
            "summaryTopic",
            "calloutTopic",
            "boundary",
            "floatingTopic",
            "relationship",
            "importantTopic",
            "minorTopic",
            "expiredTopic",
          ].forEach((t) => {
            const i = e[t] && e[t].properties;
            if (!i) return;
            const n = parseInt(i["line-width"]);
            Number.isNaN(n) || (i["line-width"] = `${w(n)}pt`);
            const o = parseInt(i["border-line-width"]);
            Number.isNaN(o) || (i["border-line-width"] = `${w(o)}pt`);
          }),
          e
        );
    },
    67214: (e, t, i) => {
      function n(e) {
        const t = window.getSelection();
        t.removeAllRanges();
        const i = document.createRange();
        i.selectNode(e), t.addRange(i);
      }
      i.d(t, { FW: () => n, N8: () => o, d5: () => a, vV: () => r });
      const o = (e) => {
          const t = new Image();
          return new Promise((i, n) => {
            (t.onload = function () {
              const { height: e, width: n } = t;
              i({ height: e, width: n });
            }),
              (t.onerror = (e) => n(e)),
              (t.src = e);
          });
        },
        a = (() => {
          let e, t;
          return () => (
            e ||
              ((t = document.createElement("canvas")),
              (e = t.getContext("2d"))),
            { ctx: e, canvas: t }
          );
        })(),
        r = (e, t, i, n, o, a) => {
          const r = e.getContext("2d");
          return new Promise((e) => {
            const d = new Image();
            (d.src = t),
              d.addEventListener("load", () => {
                r.drawImage(d, i, n, o, a), e();
              });
          });
        };
    },
    95185: (e, t, i) => {
      i.d(t, { q: () => o });
      var n = i(2954);
      i(63111), i(54856), i(96829), i(78152), i(18446), i(90435);
      function o(e, t, i = !1) {
        (0, n.iH)({});
        let o = () => {};
        return { updateTouchBarItems: o };
      }
    },
    64805: (e, t, i) => {
      i.d(t, {
        fQ: () => p,
        zZ: () => s,
        M$: () => m,
        ll: () => u,
        QN: () => l,
        ML: () => h,
        JK: () => d,
        qz: () => o,
        It: () => n,
        x9: () => c,
      });
      var n,
        o,
        a = i(69931),
        r = i(96829);
      !(function (e) {
        (e.TOPIC = "TOPIC"), (e.NOTE = "NOTE"), (e.TAG = "TAG");
      })(n || (n = {})),
        (function (e) {
          (e.NOTE = "note"),
            (e.LABEL = "label"),
            (e.MARKER = "marker"),
            (e.TASK = "task");
        })(o || (o = {}));
      const d = [
        {
          key: n.TOPIC,
          image: (0, a.ju)("static/images/navigation-panel/filter-topic.svg"),
          tooltip: (0, r.WZ)("View topic outline and search the map."),
        },
        {
          key: n.NOTE,
          image: (0, a.ju)("static/images/navigation-panel/filter-note.svg"),
          tooltip: (0, r.WZ)("View and search all the notes."),
        },
        {
          key: n.TAG,
          image: (0, a.ju)("static/images/navigation-panel/filter-tag.svg"),
          tooltip: (0, r.WZ)("Highlight topics by marker, label and task."),
        },
      ];
      var l, s, c, u, h;
      !(function (e) {
        (e.FORMAT = "FORMAT"), (e.THEME = "THEME"), (e.IMAGE = "IMAGE");
      })(l || (l = {})),
        (function (e) {
          (e.TOPIC = "TOPIC"), (e.SLIDE = "SLIDE");
        })(s || (s = {})),
        (function (e) {
          e.MAP = "MAP";
        })(c || (c = {})),
        (function (e) {
          (e.MARKER = "MARKER"),
            (e.STICKER = "STICKER"),
            (e.ILLUSTRATION = "ILLUSTRATION");
        })(u || (u = {})),
        (function (e) {
          (e.CUSTOM_THEME = "CUSTOM_THEME"), (e.DEFAULT = "NONE");
        })(h || (h = {}));
      const p = [
          { key: s.TOPIC, category: l.FORMAT, label: (0, r.WZ)("Style") },
          { key: s.SLIDE, category: l.FORMAT, label: (0, r.WZ)("Pitch") },
          { key: c.MAP, category: l.THEME, label: (0, r.WZ)("Map") },
          {
            key: u.MARKER,
            category: l.IMAGE,
            image: (0, a.ju)(
              "static/assets/images/right-panel/normal/marker.svg",
            ),
            tooltip: (0, r.WZ)("Marker"),
          },
          {
            key: u.STICKER,
            category: l.IMAGE,
            image: (0, a.ju)(
              "static/assets/images/right-panel/normal/sticker.svg",
            ),
            tooltip: (0, r.WZ)("Sticker"),
          },
          {
            key: u.ILLUSTRATION,
            category: l.IMAGE,
            image: (0, a.ju)(
              "static/assets/images/right-panel/normal/illustration.svg",
            ),
            tooltip: (0, r.WZ)("Illustration"),
          },
        ],
        m = [
          {
            key: u.MARKER,
            label: (0, r.WZ)("Marker"),
            image: (0, a.ju)("static/assets/images/icon-module/marker.svg"),
          },
          {
            key: u.STICKER,
            label: (0, r.WZ)("Sticker"),
            image: (0, a.ju)("static/assets/images/icon-module/sticker.svg"),
          },
          {
            key: u.ILLUSTRATION,
            label: (0, r.WZ)("Illustration"),
            image: (0, a.ju)(
              "static/assets/images/icon-module/illustration.svg",
            ),
          },
        ];
    },
    84374: (e, t, i) => {
      i.d(t, {
        CX: () => v.CX,
        HG: () => v.HG,
        KR: () => v.KR,
        OE: () => v.OE,
        QS: () => v.QS,
        ZQ: () => v.ZQ,
        aX: () => v.aX,
        h0: () => v.h0,
        nZ: () => v.nZ,
        o9: () => v.o9,
        pk: () => v.pk,
        viewerKit: () => v.q_,
      });
      var n = i(3112),
        o = i(71017),
        a = i.n(o),
        r = i(72298),
        d = i(94593),
        l = i(13893),
        s = i.n(l),
        c = i(7104),
        u = i(5893),
        h = i(90435),
        p = i(54856),
        m = i(78152),
        f = i(63111),
        v = i(18653),
        g = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      const { getGlobalConfig: C, globalConfigSetup: y } = n.i;
      function b(e) {
        return g(this, void 0, void 0, function* () {
          return !(yield h.ZP.fetch(p.Gy, e));
        });
      }
      !(function () {
        const e = {
            translatesCtrlClickAsContextMenu: !1,
            translatesCtrlEnterAsInsertingLineBreak: !0,
          },
          t = (0, u.u3)(a().join((0, c.bY)(), "/static/snowbird/resource/"));
        n.i.globalConfigSetup({
          platformMapper: (t) => e[t],
          guidedPayment: b,
          featureIsCurrentlyRestricted: (e) =>
            (0, m.Yh)().status !== f.wi.VALID &&
            !f.nd &&
            (h.ZP.fetch(p.Fx, {
              name: "dialog-activate",
              query: { innerFeatureName: e },
            }),
            !0),
          assetsBaseURL: t,
          clipboard: {
            read: () =>
              g(this, void 0, void 0, function* () {
                const e = yield r.clipboard.readText("clipboard"),
                  t = yield r.clipboard.readHTML("clipboard"),
                  i = yield (function () {
                    return g(this, void 0, void 0, function* () {
                      let e = [];
                      if (r.clipboard.has("CF_HDROP")) {
                        const t =
                          r.clipboard.readBuffer("CF_HDROP").toString("ucs2") ||
                          "";
                        let i = [...t]
                          .filter((e, i) => 0 !== t.charCodeAt(i))
                          .join("")
                          .replace(/\\/g, "\\");
                        const n = i.match(/[a-zA-Z]:\\/);
                        if (n) {
                          const t = i.indexOf(n[0]);
                          0 !== t && (i = i.substring(t)),
                            (e = i
                              .split(n[0])
                              .filter((e) => e)
                              .map((e) => n + e));
                        }
                      } else
                        e = [
                          r.clipboard
                            .readBuffer("FileNameW")
                            .toString("ucs2")
                            .replace(RegExp(String.fromCharCode(0), "g"), ""),
                        ].filter((e) => e);
                      const t = [];
                      for (const i of e) {
                        const e = a().basename(i),
                          n = s().getType(a().extname(i).substring(1));
                        try {
                          const o = yield d.Z.readFile(i);
                          t.push(
                            new File([new Blob([o.buffer], { type: n })], e, {
                              type: n,
                            }),
                          );
                        } catch (e) {}
                      }
                      if (0 === t.length) {
                        const e = r.clipboard.readImage();
                        e.isEmpty() ||
                          t.push(
                            new File(
                              [
                                new Blob([e.toPNG().buffer], {
                                  type: "image/png",
                                }),
                              ],
                              "Untitled.png",
                              { type: "image/png" },
                            ),
                          );
                      }
                      return t;
                    });
                  })();
                return i.some((e) => !e.type.startsWith("image")) &&
                  (yield b("insertAttachment"))
                  ? { text: null, html: null }
                  : { text: e, html: t, files: i };
              }),
            write: (e) =>
              g(this, void 0, void 0, function* () {
                var t;
                const i = yield null === (t = e.image) || void 0 === t
                    ? void 0
                    : t.arrayBuffer(),
                  n = i ? r.nativeImage.createFromBuffer(Buffer.from(i)) : null;
                return r.clipboard.write(
                  { text: e.text, html: e.html, image: n },
                  "clipboard",
                );
              }),
          },
        });
      })();
    },
    19741: (e, t, i) => {
      i.d(t, { y: () => a });
      var n = i(77412),
        o = i(2954);
      const a = (0, n.Q_)("editor-app", () => {
        const e = (0, o.iH)({}),
          t = (0, o.iH)({}),
          i = (0, o.iH)(!1);
        return {
          contributedCommands: e,
          contributedHandlers: t,
          registerCommands: (i) => {
            Array.isArray(i) &&
              (i.forEach((i) => {
                const n = i.id,
                  o = i.provider,
                  a = i.handler;
                n &&
                  o &&
                  a &&
                  ((i.enabledExpr || i.enabledFn) &&
                    ((e.value[o] = e.value[o] || {}), (e.value[o][n] = i)),
                  (t.value[o] = t.value[o] || {}),
                  (t.value[o][n] = a));
              }),
              (e.value = Object.assign({}, e.value)),
              (t.value = Object.assign({}, t.value)));
          },
          unregisterCommands: (i) => {
            Array.isArray(i) &&
              (i.forEach(({ id: i, provider: n }) => {
                n in e.value && delete e.value[n][i],
                  n in t.value && delete t.value[n][i];
              }),
              (e.value = Object.assign({}, e.value)),
              (t.value = Object.assign({}, t.value)));
          },
          isAlive: i,
          setAlive: (e) => (i.value = e),
        };
      });
    },
    27049: (e, t, i) => {
      i.d(t, { E: () => a });
      var n = i(77412),
        o = i(2954);
      const a = (0, n.Q_)("editor", () => {
        const e = (0, o.iH)(!1),
          t = (0, o.iH)(!1),
          i = (0, o.iH)(!1),
          n = (0, o.iH)(),
          a = (0, o.iH)("snowbrush"),
          r = (0, o.iH)(!0),
          d = (0, o.iH)(!1),
          l = (0, o.iH)(!1),
          s = (0, o.iH)(!1),
          c = (0, o.iH)(!1),
          u = (0, o.iH)(!1),
          h = (0, o.iH)(!1),
          p = (0, o.iH)({}),
          m = (0, o.iH)({}),
          f = (0, o.iH)(),
          v = (0, o.iH)(!0),
          g = (0, o.iH)(""),
          C = (0, o.iH)(!1),
          y = (0, o.iH)(!1),
          b = (0, o.iH)(""),
          w = (0, o.iH)(""),
          k = (0, o.iH)(!0);
        return {
          mindmapCreated: t,
          updateMindMapCreated: (e) => (t.value = e),
          audioBarMode: g,
          audioAutoplay: C,
          audioTopicId: b,
          audioRecording: y,
          sheetRendering: i,
          sheetRenderingStartAt: n,
          isEditorVisible: e,
          isAllowInsertHyperLink: v,
          sheetStatuses: p,
          outlinerSheetStatuses: m,
          suggestedDefaultZoomScale: f,
          isSheetBarVisible: r,
          changeSheetBarVisible: (e) => (r.value = e),
          isTopicCountLabelVisible: d,
          changeTopicCountVisible: (e) => {
            d.value = e;
          },
          isBeginnerDialogVisible: c,
          isTopicLinkDialogShowing: u,
          changeIsTopicLinkDialogShowing: (e) => {
            u.value = e;
          },
          changeBeginnerDialogVisible: (e) => (c.value = e),
          isBeginnerModeVisible: l,
          changeBeginnerModeVisible: (e) => (l.value = e),
          isTryPicthModeVisible: s,
          changeTryPicthModeVisible: (e) => (s.value = e),
          isTooltipsVisible: h,
          changeTooltipsVisible: (e) => (h.value = e),
          selectedMarkerId: w,
          updateSelectedMarkerId: (e) => {
            w.value = e;
          },
          getZoomScaleForSheet: (e) => {
            const t = p.value[e];
            return t ? t.suggestedZoomScale || f.value || t.zoomScale : null;
          },
          getOutlinerZoomScaleForSheet: (e) => {
            const t = m.value[e];
            return t ? t.suggestedZoomScale || f.value || t.zoomScale : 100;
          },
          updateAudioBarMode: (e) => {
            void 0 !== e.audioBarMode && (g.value = e.audioBarMode),
              void 0 !== e.audioAutoplay && (C.value = e.audioAutoplay),
              void 0 !== e.audioTopicId && (b.value = e.audioTopicId);
          },
          updateEditorVisible: (t) => {
            e.value = t;
          },
          updateAudioRecording: (e) => {
            y.value = e;
          },
          updateSheetRendering: ({
            sheetRendering: e,
            sheetRenderingStartAt: t,
          }) => {
            (i.value = e), (n.value = t);
          },
          updateSheetRenderingInMode: ({ sheetRenderingInMode: e }) => {
            a.value = e;
          },
          updateSheetStatus: ({
            id: e,
            inited: t,
            suggestedZoomScale: i,
            zoomScale: n = null,
          }) => {
            if (void 0 === e) return;
            const o = {};
            t && (o.inited = t),
              null !== n &&
                (f.value ? (o.suggestedZoomScale = n) : (o.zoomScale = n)),
              void 0 !== i && ((o.suggestedZoomScale = i), (f.value = i)),
              (p.value = Object.assign(Object.assign({}, p.value), { [e]: o }));
          },
          updateOutlinerSheetStatus: ({ id: e, zoomScale: t = null }) => {
            if (void 0 === e) return;
            const i = {};
            e in m.value || (i.zoomScale = 100),
              null !== t && (i.zoomScale = t),
              (m.value = Object.assign(Object.assign({}, m.value), { [e]: i }));
          },
          updateAllowInsertHyperLink: (e) => {
            v.value = e;
          },
          isShapeShowMoreBtnVisible: k,
          updateShapeShowMoreBtnVisible: (e) => {
            k.value = e;
          },
        };
      });
    },
    1171: (e, t, i) => {
      i.d(t, { F: () => ae });
      var n = i(77412),
        o = i(2954),
        a = i(71017),
        r = i.n(a),
        d = i(57310),
        l = i.n(d),
        s = i(7104),
        c = i(69931),
        u = i(96829),
        h = i(5893),
        p = i(54856),
        m = i(63111),
        f = i(90435),
        v = i(94593),
        g = i(86633),
        C = i(84374),
        y = i(78152),
        b = i(63477),
        w = i.n(b),
        k = i(55733),
        T = i.n(k),
        I = i(13382),
        S = i(18621),
        M = i(87244),
        x = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      const H = (0, g.ZP)("from-temp:"),
        E = {
          protocol: "file",
          open(e, t) {
            return x(this, void 0, void 0, function* () {
              const i = (0, h.iZ)(e),
                n = yield (0, M.vP)(i, t.stage, t.passwordHelper);
              return Object.assign(Object.assign({}, n), {
                fileId: t.editorId,
              });
            });
          },
          getSaveAsHandler(e) {
            return {
              name: "My Computer",
              type: "local",
              prompt: () =>
                x(this, void 0, void 0, function* () {
                  const t = yield (0, I.ZZ)({
                    suggestPath: {
                      suggestedName: e.document.sheets[0].rootTopic.title,
                    },
                    filters: [
                      { name: e.$T("Xmind Workbook"), extensions: ["xmind"] },
                    ],
                  });
                  return t ? (0, h.u3)(t) : null;
                }),
            };
          },
          save(e) {
            return x(this, void 0, void 0, function* () {
              const {
                  password: t,
                  passwordHint: i,
                  thumbnailGenerator: n,
                  makeDocumentCache: o,
                } = e,
                a = (0, h.iZ)(e.source),
                r = yield n.generateThumbnail(e.document.sheets[0].id);
              return (
                yield (0, M.gv)(e.document, a, e.stage, {
                  password: t,
                  passwordHint: i,
                  thumbnail: r,
                }),
                (function (e) {
                  return x(this, void 0, void 0, function* () {
                    if (!v.Z.existsSync(e))
                      throw new Error(
                        "ensureFileFine: File not exist after saved file!",
                      );
                    const t = yield v.Z.readFile(e),
                      i = yield T().loadAsync(t);
                    if (!i || !i.files)
                      throw new Error("ensureFileFine: zip content is empty.");
                  });
                })(a)
                  .then(() => {
                    o();
                  })
                  .catch((e) => {
                    H.error("Ensure file fine error: ", (0, u.SC)(e));
                  }),
                { thumbnail: r }
              );
            });
          },
          canSave(e) {
            const t = (0, h.iZ)(e.source);
            if (v.Z.existsSync(t))
              try {
                v.Z.accessSync(t, v.Z.constants.R_OK | v.Z.constants.W_OK);
              } catch (e) {
                return !1;
              }
            return !!t;
          },
          handleOpenError(e, t) {
            return x(this, void 0, void 0, function* () {
              const { $T: i, source: n, editorId: o } = e;
              if ("ENOENT" === t.code)
                return (
                  yield (0, I.N0)({
                    type: "warning",
                    title: "Xmind",
                    message: i("The file doesn't exist."),
                    buttons: [i("OK")],
                    defaultId: 0,
                    cancelId: 0,
                    noLink: !0,
                  }),
                  { recovered: !1, prompted: !0 }
                );
              if ("TO_CLOSE_DOCUMENT" === t.code)
                return (
                  f.ZP.fetch(p.s2, { editors: [o], forceQuit: !0 }),
                  { recovered: !0, prompted: !1 }
                );
              const a = (0, y.yj)().fileCacheItem((0, h.iZ)(n));
              if (a) {
                const [e] = yield (0, I.N0)({
                  type: "info",
                  message: i("Failed to Open"),
                  detail: i(
                    "Your xmind file is corrupted, or you lack the necessary permissions to open it. You can try to open the previous version of this file.",
                  ),
                  buttons: [i("Open"), i("Cancel")],
                  defaultId: 0,
                  cancelId: 1,
                });
                if (0 === e) {
                  const e = a.fileCacheId,
                    t = a.filename;
                  let i = a.firstSnapshotId;
                  if (a.snapshots.length > 0) {
                    i = a.snapshots.pop().id;
                  }
                  (0, S.L9)({
                    eventCategory: "FileCache",
                    eventAction: "messageBoxRestoreSnapshot",
                  });
                  const n = r().join((0, s.L2)(), e, i + ".xmind");
                  return (
                    f.ZP.fetch(p.NF, {
                      source: l().format({
                        protocol: "file-cache",
                        slashes: !0,
                        search: w().stringify({ originalName: t, source: n }),
                      }),
                    }),
                    { recovered: !0, prompted: !0 }
                  );
                }
                return { recovered: !1, prompted: !0 };
              }
              return { recovered: !1, prompted: !1 };
            });
          },
          heartbeatTest(e) {
            return x(this, void 0, void 0, function* () {
              const {
                  source: t,
                  title: i,
                  dirty: n,
                  saveAs: o,
                  changeDirty: a,
                  $T: r,
                } = e,
                d = (0, h.iZ)(t);
              try {
                return (
                  yield v.Z.access(d, v.Z.constants.R_OK), { shouldClose: !1 }
                );
              } catch (e) {
                if (n) {
                  const e = yield (0, I.N0)({
                    type: "warning",
                    title: "Xmind",
                    message: r(
                      "This mind map has been deleted from disk. You can delete it now or save as a new xmind file.",
                    ),
                    buttons: [r("Save As"), r("Delete")],
                    defaultId: 0,
                    cancelId: 0,
                    noLink: !0,
                  });
                  if (Array.isArray(e) && e.length > 0 && 0 === e[0]) {
                    const e = yield (0, I.ZZ)({
                      suggestPath: { doc: { source: t, title: i } },
                      filters: [
                        { name: r("Xmind Workbook"), extensions: ["xmind"] },
                      ],
                    });
                    if (e) return yield o((0, h.u3)(e)), { shouldClose: !1 };
                  }
                }
                return a(!1), { shouldClose: !0 };
              }
            });
          },
        };
      var L = i(67657),
        V = i(33394),
        P = i(68898),
        A = i(95955),
        Z = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      const O = {
          protocol: "new",
          open(e, t) {
            return Z(this, void 0, void 0, function* () {
              const i = l().parse(e),
                { $T: n, editorId: o } = t,
                a = w().parse(i.query),
                d = a.template || "default",
                c =
                  a.title ||
                  (function (e) {
                    const t = e("Untitled"),
                      i = L.BrowserWindow.getAllWindows().filter((e) => {
                        var t;
                        return (
                          e.id !==
                          (null === (t = L.getCurrentWindow()) || void 0 === t
                            ? void 0
                            : t.id)
                        );
                      }),
                      n = new Set();
                    for (const e of i) n.add(e.getTitle());
                    const o = Array.from(n).filter(
                      (e) =>
                        e === t ||
                        (e.includes(t) &&
                          2 == e.split(" ").length &&
                          Number.isInteger(Number(e.split(" ")[1]))),
                    );
                    let a = 0;
                    for (const e of o)
                      a =
                        e == t
                          ? Math.max(a, 1)
                          : Math.max(a, Number(e.split(" ")[1]));
                    return 0 == a ? t : `${t} ${a + 1}`;
                  })(n);
              if ("default" === d) {
                const e = (function ({ $T: e } = {}) {
                  return F({ $T: e });
                })({ $T: n });
                let t = yield (0, C.OE)(JSON.stringify([e]));
                return (
                  (t = (0, M.Jb)(t)),
                  (t = (0, M.zw)(t)),
                  { fileId: o, content: t, fileName: c, isEncrypted: !1 }
                );
              }
              {
                const e = r().join((0, s.bY)(), d),
                  i = yield V.Z.read(e),
                  n = yield T().loadAsync(i),
                  a = JSON.parse(yield n.file("content.json").async("string")),
                  { language: l } = (0, y.S)(),
                  u = (function (e) {
                    switch (e) {
                      case "zh-CN":
                        return A.i.ZH_CN;
                      case "en-US":
                        return A.i.EN_US;
                      case "zh-HK":
                        return A.i.ZH_HK;
                      case "zh-TW":
                        return A.i.ZH_TW;
                      case "ja-JP":
                        return A.i.JA_JP;
                      case "de-DE":
                        return A.i.DE_DE;
                      case "fr-FR":
                        return A.i.FR_FR;
                      case "es":
                        return A.i.ES_ES;
                      case "id":
                        return A.i.ID_ID;
                      case "it-IT":
                        return A.i.IT_IT;
                      case "ko":
                        return A.i.KR_KR;
                      case "pt-PT":
                        return A.i.PT_PT;
                      case "ru-RU":
                        return A.i.RU_RU;
                      case "th":
                        return A.i.TH_TH;
                    }
                    return e;
                  })(l),
                  h = P.vV(a, u),
                  p = JSON.stringify(h);
                n.file("content.json", p);
                const m = r().basename(e, ".xmind"),
                  f = yield n.generateAsync({ type: "arraybuffer" }),
                  v = yield (0, M.ee)(f, m, t.stage);
                return (
                  "content" in v && (v.content = (0, M.zw)(v.content)),
                  Object.assign(Object.assign({}, v), {
                    fileId: o,
                    fileName: c,
                  })
                );
              }
            });
          },
        },
        F = ({ $T: e } = {}) => ({
          id: (0, u.hb)(),
          class: "sheet",
          title: e("Map 1"),
          rootTopic: {
            id: (0, u.hb)(),
            class: "topic",
            title: e("Central Topic"),
            structureClass: "org.xmind.ui.map.clockwise",
            titleUnedited: !0,
            children: {
              attached: [
                {
                  id: (0, u.hb)(),
                  title: e("Main Topic 1"),
                  titleUnedited: !0,
                },
                {
                  id: (0, u.hb)(),
                  title: e("Main Topic 2"),
                  titleUnedited: !0,
                },
                {
                  id: (0, u.hb)(),
                  title: e("Main Topic 3"),
                  titleUnedited: !0,
                },
                {
                  id: (0, u.hb)(),
                  title: e("Main Topic 4"),
                  titleUnedited: !0,
                },
              ],
            },
          },
        });
      var B = function (e, t, i, n) {
        return new (i || (i = Promise))(function (o, a) {
          function r(e) {
            try {
              l(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function d(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(r, d);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      const $ = {
          mindmanager: D((e) =>
            Promise.all([i.e(2829), i.e(4446)])
              .then(i.bind(i, 74446))
              .then((t) => t.importMindManager(e)),
          ),
          freemind: D((e) =>
            Promise.all([i.e(2829), i.e(4446)])
              .then(i.bind(i, 74446))
              .then((t) => t.importFreeMind(e)),
          ),
          lighten: D((e) =>
            Promise.all([i.e(2829), i.e(4446)])
              .then(i.bind(i, 74446))
              .then((t) => t.importLighten(e)),
          ),
          mindnode: D((e) =>
            Promise.all([i.e(2829), i.e(4446)])
              .then(i.bind(i, 74446))
              .then((t) => t.importMindNode(e)),
          ),
          mindmaster: D((e) =>
            Promise.all([i.e(2829), i.e(4446)])
              .then(i.bind(i, 74446))
              .then((t) => t.importMindMaster(e)),
          ),
          markdown: D((e) =>
            Promise.all([i.e(2829), i.e(4446)])
              .then(i.bind(i, 74446))
              .then((t) => t.importMarkdown(e)),
          ),
          opml: D((e) =>
            Promise.all([i.e(2829), i.e(4446)])
              .then(i.bind(i, 74446))
              .then((t) => t.importOPML(e)),
          ),
          textbundle: D((e, t) =>
            Promise.all([i.e(2829), i.e(4446)])
              .then(i.bind(i, 74446))
              .then((i) => i.importTextBundle(e, t)),
          ),
          word: D((e, t) =>
            Promise.all([i.e(2829), i.e(4446)])
              .then(i.bind(i, 74446))
              .then((i) => i.importDocx(e, t)),
          ),
        },
        R = "assets/",
        N = "text.md",
        W = {
          protocol: "import",
          open(e, t) {
            return B(this, void 0, void 0, function* () {
              const { stage: i, editorId: n } = t,
                o = l().parse(e).hostname,
                a = $[o],
                d = (function (e) {
                  const t = l().parse(e, !0).query;
                  let i = t ? t.source : "";
                  if (!i) throw new Error(`Invalid file path URL: "${e}"`);
                  i.startsWith("/") && (i = i.substring(1));
                  return i;
                })(e),
                s = r().basename(d, r().extname(d)),
                c = yield a(d),
                u = yield (0, M.ee)(c, s, i);
              return (
                "content" in u &&
                  ((u.content = (0, M.Jb)(u.content)),
                  (u.content = (0, M.zw)(u.content))),
                Object.assign(Object.assign({ fileId: n }, u), { isDirty: !0 })
              );
            });
          },
        };
      function D(e) {
        return (t) =>
          B(this, void 0, void 0, function* () {
            if (".textbundle" === r().extname(t)) {
              const i = yield v.Z.readFile(r().join(t, N)),
                n = {};
              if (v.Z.existsSync(r().join(t, R))) {
                const e = yield v.Z.readdir(r().join(t, R));
                for (const i of e) {
                  const e = yield v.Z.readFile(r().join(t, R, i));
                  n[i] = e;
                }
              }
              return e(i.buffer, n);
            }
            if (".docx" === r().extname(t)) {
              const i = yield v.Z.readFile(t),
                n = r().basename(t),
                o = n.substring(0, n.length - 5);
              return e(i.buffer, o);
            }
            {
              const i = yield v.Z.readFile(t);
              return e(i.buffer);
            }
          });
      }
      var j = function (e, t, i, n) {
        return new (i || (i = Promise))(function (o, a) {
          function r(e) {
            try {
              l(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function d(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(r, d);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      function z(e, t) {
        return j(this, void 0, void 0, function* () {
          const { stage: i, editorId: n, passwordHelper: o } = t,
            a = (function (e) {
              const t = r().parse(e);
              return ".xmind" === t.ext
                ? t.base
                : Math.random().toString(36).slice(2) + ".xmind";
            })(l().parse(e).pathname);
          let d;
          try {
            d = yield f.ZP.fetch(p.lf.FILE_DOWNLOAD, {
              downloadUrl: e,
              filename: a,
              cacheId: a,
            });
          } catch (e) {
            return Promise.reject(
              new Error("Download file failure, please retry."),
            );
          }
          const s = yield (0, M.vP)(d, i, o);
          return Object.assign(Object.assign({}, s), { fileId: n });
        });
      }
      const _ = { protocol: "http", open: z },
        q = { protocol: "https", open: z };
      var U = function (e, t, i, n) {
        return new (i || (i = Promise))(function (o, a) {
          function r(e) {
            try {
              l(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function d(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(r, d);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      const X = {
        protocol: "file-cache",
        open(e, t) {
          return U(this, void 0, void 0, function* () {
            const { stage: i, editorId: n, passwordHelper: o } = t,
              a = (function (e) {
                const t = "file-cache://";
                if (e && e.startsWith(t)) {
                  const t = l().parse(e),
                    i = w().parse(t.query);
                  return { filePath: i.source, fileName: i.originalName };
                }
                throw new Error("Document source error");
              })(e),
              r = yield (0, M.vP)(a.filePath, i, o);
            return (
              "fileName" in r && (r.fileName = a.fileName),
              Object.assign(Object.assign({}, r), { fileId: n })
            );
          });
        },
      };
      var G = i(79409),
        K = i(12455),
        J = i(52470),
        Y = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      const Q = (0, g.ZP)("from-temp:");
      function ee() {
        return Y(this, void 0, void 0, function* () {});
      }
      const te = {
        protocol: "temp-storage",
        open(e, t) {
          var i, n, o;
          return Y(this, void 0, void 0, function* () {
            const e = t.tempStorageDir,
              a = r().join(e, "manifest.json"),
              d = r().join(e, "content.json"),
              l = r().join(e, "metadata.json");
            if (
              !(
                v.Z.existsSync(e) &&
                v.Z.existsSync(a) &&
                v.Z.existsSync(d) &&
                v.Z.existsSync(l)
              )
            )
              return void window.close();
            const s = new (T())();
            s.file("manifest.json", yield v.Z.readFile(a)),
              s.file("content.json", yield v.Z.readFile(d)),
              s.file("metadata.json", yield v.Z.readFile(l));
            const c = yield s.generateAsync({
                type: "nodebuffer",
                compression: "STORE",
              }),
              u =
                null === (i = null == t ? void 0 : t.memento) || void 0 === i
                  ? void 0
                  : i.docId,
              h =
                null === (n = null == t ? void 0 : t.memento) || void 0 === n
                  ? void 0
                  : n.title,
              p =
                null === (o = null == t ? void 0 : t.memento) || void 0 === o
                  ? void 0
                  : o.dirty,
              m = yield (0, M.iw)(c, h, t.stage, t.passwordHelper);
            return Object.assign(Object.assign({}, m), {
              fileId: u,
              isDirty: p,
            });
          });
        },
        save(e) {
          return Y(this, void 0, void 0, function* () {
            const t = e.tempStorageDir;
            if (!v.Z.existsSync(t)) return;
            const i = e.document.metadataFor(
                C.aX.KnownMetaKey.DataStructureVersion,
              ),
              n = C.aX.withArchiveMetadata(e.document, {
                creatorName: "Vana",
                creatorVersion: (0, G.Z)("version"),
                layoutEngineVersion: C.viewerKit.DocumentLayoutEngineVersion,
              }),
              o = e.password;
            yield (0, C.KR)(
              n,
              (e, n) =>
                Y(this, void 0, void 0, function* () {
                  if ("metadata.json" === e.path && i) {
                    const e = JSON.parse(n);
                    (e[C.aX.KnownMetaKey.DataStructureVersion] = i),
                      (n = JSON.stringify(e));
                  }
                  if (o) {
                    const i = (0, J.H)(e, new TextEncoder().encode(n).buffer, {
                      password: o,
                    });
                    yield v.Z.writeFile(r().join(t, e.path), Buffer.from(i));
                  } else yield v.Z.writeFile(r().join(t, e.path), n);
                }),
              ee,
            );
          });
        },
        close(e) {
          return Y(this, void 0, void 0, function* () {
            const t = e.tempStorageDir;
            Q.debug("Start clearing temp storage: ", t);
            const i = function (e) {
              if (v.Z.statSync(e).isDirectory()) {
                for (const t of v.Z.readdirSync(e)) i(r().join(e, t));
                v.Z.rmdirSync(e);
              } else v.Z.removeSync(e);
            };
            try {
              i(t);
            } catch (e) {
              Q.warn(`Something wrong when clearing temp storage: ${t}`, e);
            }
          });
        },
        updateMemento(e, t) {
          return Y(this, void 0, void 0, function* () {
            if (m.nd) return;
            const i = e.tempStorageDir;
            if (!i) return;
            const n = r().join(i, ".memento.json");
            if (t || v.Z.existsSync(n))
              try {
                const t = {
                  docId: e.fileId,
                  workbookId: e.fileId,
                  source: e.source,
                  title: e.title,
                  dirty: !!e.dirty,
                  shouldOpenFromTempStorage: !0,
                  frameId: (0, K.A)().ownerFrameId,
                };
                Q.debug("Save Memento: ", t),
                  v.Z.writeFileSync(n, JSON.stringify(t));
              } catch (e) {
                Q.error("Error when saving memento.json.", (0, u.SC)(e));
              }
          });
        },
      };
      var ie = function (e, t, i, n) {
        return new (i || (i = Promise))(function (o, a) {
          function r(e) {
            try {
              l(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function d(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(r, d);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      const ne = (0, g.ZP)("fm:"),
        oe = {};
      [O, E, W, _, q, X].forEach((e) => (oe[e.protocol] = e));
      const ae = (0, n.Q_)("file-manager", () => {
        const { addFileEventHook: e, emitFileEvent: t } = (function () {
            const e = (0, o.qj)({
                open: null,
                save: null,
                saveAs: null,
                saveSheet: null,
                close: null,
              }),
              t = (t, i) =>
                (0, o.YP)(
                  () => e[t],
                  (e, t) => i(e, t),
                ),
              i = (t, i) => {
                e[t] = i;
              };
            return { addFileEventHook: t, emitFileEvent: i };
          })(),
          i = (e, ...t) => (0, y.JE)().T(e, ...t),
          n = (0, o.qj)({
            inited: !1,
            opened: !1,
            closed: !1,
            saving: !1,
            resaving: !1,
          }),
          a = (0, o.iH)(""),
          d = (0, o.iH)(i("Untitled")),
          g = (0, o.iH)(null),
          b = (0, o.iH)(null),
          w = (0, o.iH)(!1),
          k = (0, o.iH)(null),
          T = (0, o.Fl)(() => {
            let e = l().parse(a.value).protocol;
            return e
              ? (e.endsWith(":") && (e = e.substr(0, e.length - 1)), oe[e])
              : null;
          });
        let I, S, x, H;
        const E = (0, o.iH)(!1),
          L = (0, o.iH)(),
          V = (0, o.iH)(),
          P = {
            askForPassword(e, t, i) {
              return ie(this, void 0, void 0, function* () {
                yield (function () {
                  return ie(this, void 0, void 0, function* () {
                    let e = null;
                    yield new Promise((t) => {
                      e = (0, o.YP)(
                        () => (0, K.r)().activeEditorId,
                        (e) => {
                          e === window.editorId && t(!0);
                        },
                        { immediate: !0 },
                      );
                    }),
                      e && e();
                  });
                })();
                const { result: n } = yield f.ZP.fetch(p.Fx, {
                  name: "dialog-enterpassword",
                  parentId: window.id,
                  wait: !0,
                  query: {
                    errEncryptCount: e,
                    hint: i || V.value || "",
                    filename: t,
                  },
                });
                return null == n ? void 0 : n.password;
              });
            },
          },
          A = (0, o.iH)(),
          Z = (0, o.iH)(),
          O = (0, o.iH)(!1),
          F = () => ({
            memento: x,
            stage: g.value,
            tempStorageDir: S,
            document: H,
            source: a.value,
            title: d.value,
            dirty: w.value,
            editorId: I,
            fileId: b.value,
            password: L.value,
            passwordHint: V.value,
            thumbnailGenerator: Z.value,
            passwordHelper: P,
            $T: i,
            saveAs: $,
            changeDirty: D,
            makeDocumentCache: q,
          }),
          B = () => {
            var e, t;
            return (
              T.value &&
              (null === (t = (e = T.value).canSave) || void 0 === t
                ? void 0
                : t.call(e, { source: a.value }))
            );
          },
          $ = (e) =>
            ie(void 0, void 0, void 0, function* () {
              if (
                (t("saveAs", "presaveas"), (0, K.A)().setSaving(!0), _(e), !B())
              )
                throw new Error(`Cannot save workbook to "${a.value}"`);
              f.ZP.fetch(p.xr, { editorId: I, source: a.value });
              const i = yield T.value.save(F());
              E.value
                ? (A.value = (yield (0, c.zD)(
                    "static/images/xmindfile-lock.png",
                  )).buffer)
                : (A.value = i && i.thumbnail);
              const n = (0, h.iZ)(a.value);
              N(r().basename(n, ".xmind")),
                D(!1),
                yield R(!1),
                t("saveAs", "postsaveas"),
                (0, K.A)().setSaving(!1);
            }),
          R = (e) =>
            ie(void 0, void 0, void 0, function* () {
              var t;
              return null === (t = te.updateMemento) || void 0 === t
                ? void 0
                : t.call(te, F(), e);
            }),
          N = (e) => (d.value = e),
          W = () =>
            ie(void 0, void 0, void 0, function* () {
              return te.save(F());
            }),
          D = (e) => (w.value = e);
        let j = null;
        const z =
            (e) =>
            (...t) => {
              if (O.value) return new Promise(u.ZT);
              if (!n.inited)
                throw Error("Cannot call this function before inited.");
              return e(...t);
            },
          _ = (e) => {
            const t = e.indexOf("?"),
              i = t > -1 ? e.slice(0, t) : e;
            a.value = i;
          },
          q = () =>
            ie(void 0, void 0, void 0, function* () {
              var e;
              if (
                !m.nd &&
                b.value &&
                "file" ===
                  (null === (e = T.value) || void 0 === e ? void 0 : e.protocol)
              )
                try {
                  const e = (0, y.yj)(),
                    t = b.value,
                    i = a.value.startsWith("file:")
                      ? (0, h.iZ)(a.value)
                      : void 0,
                    n =
                      e.fileCacheItemById(t) ||
                      (a.value.startsWith("file:") && e.fileCacheItem(i)),
                    o = n ? n.fileCacheId : t,
                    l = (0, u.hb)(),
                    c = r().join((0, s.L2)(), o, l + ".xmind");
                  v.Z.ensureDirSync(r().dirname(c)),
                    yield (0, M.gv)(H, c, g.value),
                    yield f.ZP.fetch(p.Pp, {
                      mutations: [
                        {
                          id: y.g8,
                          type: "addSnapshot",
                          payload: [
                            {
                              filename: d.value,
                              snapshotId: l,
                              fileCacheId: o,
                              srcPath: i,
                            },
                          ],
                        },
                      ],
                    }),
                    yield f.ZP.fetch(p.S5, {
                      action: "expiredSnapshot",
                      fileCacheId: o,
                    });
                } catch (e) {
                  ne.error((0, u.SC)(e));
                }
            });
        return {
          stage: g,
          source: a,
          title: d,
          isDirty: w,
          fileId: b,
          emptyEditorView: O,
          docCompatibility: k,
          markEmpty: () => (O.value = !0),
          init: (e, t) =>
            ie(void 0, void 0, void 0, function* () {
              (a.value = e), (I = t || (0, u.hb)());
              const i = yield (0, s.Xl)();
              if (((S = r().join(i, I)), v.Z.ensureDirSync(S), t))
                try {
                  const e = r().join(S, ".memento.json");
                  x = JSON.parse(v.Z.readFileSync(e).toString());
                } catch (e) {}
              (g.value = {
                take: (e) =>
                  ie(void 0, void 0, void 0, function* () {
                    const t = r().join(S, e);
                    return v.Z.existsSync(t) ? v.Z.readFile(t) : null;
                  }),
                add: (e, t) =>
                  ie(void 0, void 0, void 0, function* () {
                    const i = r().join(S, e);
                    return (
                      yield v.Z.ensureDir(r().dirname(i)),
                      v.Z.writeFile(i, Buffer.from(t))
                    );
                  }),
                delete: (e) =>
                  ie(void 0, void 0, void 0, function* () {
                    return v.Z.existsSync(e) && v.Z.remove(r().join(S, e));
                  }),
                toUrl: (e) =>
                  ie(void 0, void 0, void 0, function* () {
                    return (0, h.u3)(r().join(S, e));
                  }),
                getDocument: () =>
                  ie(void 0, void 0, void 0, function* () {
                    return H;
                  }),
                setDocument: (e) => (H = e),
              }),
                (n.inited = !0);
            }),
          waitInited: () =>
            ie(void 0, void 0, void 0, function* () {
              return (
                j && (j(), (j = null)),
                !!n.inited ||
                  (yield new Promise((e) => {
                    j = (0, o.YP)(
                      () => n.inited,
                      (t) => {
                        t && e(!0);
                      },
                      { immediate: !0 },
                    );
                  }))
              );
            }),
          open: z(() =>
            ie(void 0, void 0, void 0, function* () {
              var e;
              t("open", "preopen");
              const i = null == x ? void 0 : x.shouldOpenFromTempStorage,
                n = i ? te : T.value;
              if (!n) throw new Error(`Unspported file source: ${a.value}`);
              const o = yield n.open(a.value, F());
              if (!o) throw new Error("Cannot open this file");
              if ("needToClose" in o)
                throw new re("TO_CLOSE_DOCUMENT", "Cannot open this file");
              const r = C.viewerKit.validateDocumentForLayoutEngine(o.content);
              return (
                (o.content = r.document),
                (k.value = r.incompatibility),
                (H = o.content),
                (b.value = o.fileId),
                (E.value = o.isEncrypted),
                (L.value = o.password),
                (V.value = o.passwordHint),
                N(o.fileName),
                _(a.value),
                D(null !== (e = o.isDirty) && void 0 !== e && e),
                t("open", "opened"),
                i || (yield W()),
                E.value
                  ? (A.value = (yield (0, c.zD)(
                      "static/images/xmindfile-lock.png",
                    )).buffer)
                  : (A.value = yield g.value.take("Thumbnails/thumbnail.png")),
                t("open", "postopen"),
                o.content
              );
            }),
          ),
          saveTemp: z(W),
          save: z(() =>
            ie(void 0, void 0, void 0, function* () {
              if (!w.value) return;
              if (!B()) throw new Error(`Cannot save workbook to "${a.value}"`);
              t("save", "presave"), (0, K.A)().setSaving(!0);
              const e = H,
                i = yield T.value.save(F());
              E.value
                ? (A.value = (yield (0, c.zD)(
                    "static/images/xmindfile-lock.png",
                  )).buffer)
                : (A.value = i && i.thumbnail),
                e === H && D(!1),
                t("save", "saved"),
                t("save", "postsave"),
                (0, K.A)().setSaving(!1),
                yield R(!1);
            }),
          ),
          saveAs: z($),
          saveSheetAs: z((e, t) =>
            ie(void 0, void 0, void 0, function* () {
              return (0, M.YO)(H, t, g.value, {
                sheetIndexes: [e],
                thumbnail: yield Z.value.generateThumbnail(H.sheets[e].id),
              });
            }),
          ),
          saveAsLocalFile: z(
            (
              e,
              {
                toEncrypt: t = !1,
                sheetIndexes: i,
                preprocessMetadata: n,
                thumbnail: o,
              },
            ) =>
              ie(void 0, void 0, void 0, function* () {
                return (0, M.YO)(H, e, g.value, {
                  password: t ? L.value : null,
                  sheetIndexes: i,
                  preprocessMetadata: n,
                  thumbnail: o,
                });
              }),
          ),
          close: z(() =>
            ie(void 0, void 0, void 0, function* () {
              var e, i, n;
              t("close", "preclose"),
                D(!1),
                yield null === (i = (e = T.value).close) || void 0 === i
                  ? void 0
                  : i.call(e, { tempStorageDir: S, document: H }),
                yield null === (n = te.close) || void 0 === n
                  ? void 0
                  : n.call(te, F()),
                t("close", "closed"),
                t("close", "postclose");
            }),
          ),
          canSave: B,
          getSaveAsHandlers: () => {
            const e = [];
            return (
              Object.values(oe).forEach((t) => {
                var i;
                const n =
                  null === (i = t.getSaveAsHandler) || void 0 === i
                    ? void 0
                    : i.call(t, F());
                "function" == typeof (null == n ? void 0 : n.prompt) &&
                  e.push(n);
              }),
              e
            );
          },
          updateMemento: R,
          makeDocumentCache: q,
          changeDirty: D,
          addFileEventHook: e,
          passwordHint: V,
          password: L,
          handleOpenError: (e) =>
            ie(void 0, void 0, void 0, function* () {
              var t, i;
              return null ===
                (i =
                  null === (t = T.value) || void 0 === t
                    ? void 0
                    : t.handleOpenError) || void 0 === i
                ? void 0
                : i.call(t, F(), { code: e.code });
            }),
          heartbeatTest: () =>
            ie(void 0, void 0, void 0, function* () {
              var e, t;
              return null ===
                (t =
                  null === (e = T.value) || void 0 === e
                    ? void 0
                    : e.heartbeatTest) || void 0 === t
                ? void 0
                : t.call(e, F());
            }),
          lastThumbnail: A,
          thumbnailGenerator: Z,
          passwordHelper: P,
          changePassword: (e) => {
            (E.value = !!e),
              (L.value = null == e ? void 0 : e.password),
              (V.value = null == e ? void 0 : e.passwordHint);
          },
          injectThumbnailGenerator: (e) => (Z.value = e),
        };
      });
      class re extends Error {
        constructor(e, t) {
          super(t), (this.code = e);
        }
      }
    },
    52470: (e, t, i) => {
      i.d(t, { H: () => d, p: () => l });
      var n = i(86633),
        o = i(6113),
        a = i.n(o);
      const r = (0, n.ZP)("crypto:");
      function d(e, t, i) {
        if (!e || !t || !i) return t;
        if (!e.encryptable) return t;
        const { password: n } = i;
        if (!n) return t;
        const o = a().randomBytes(8),
          d = a().randomBytes(16),
          l = (function (e, t, i, n) {
            try {
              const o = a().createCipheriv(t, i, n),
                r = Buffer.from(e);
              return Buffer.from(
                o.update(r, void 0, "hex") + o.final("hex"),
                "hex",
              );
            } catch (t) {
              return r.info("faild to encrypt", t), e;
            }
          })(t, "aes-128-cbc", a().pbkdf2Sync(n, o, 1024, 16, "sha512"), d);
        return (
          (e.keyDerivationAlgorithm = "AES/CBC/PKCS5Padding"),
          (e.keyDerivationSize = 128),
          (e.keyDerivationIterationCount = 1024),
          (e.keyDerivationSalt = o.toString("base64")),
          (e.keyDerivationIV = d.toString("base64")),
          (e.cipherAlgorithm = "PBKDF2WithHmacSHA512"),
          l
        );
      }
      function l(e, t, i) {
        if (!e || !t || !i) return t;
        if (!e.encrypted) return t;
        const { password: n } = i;
        if (!n) return t;
        const {
          keyDerivationIterationCount: o,
          keyDerivationSalt: d,
          keyDerivationSize: l,
          keyDerivationIV: s,
        } = e;
        if (!(o && d && l && s)) return t;
        const c = Buffer.from(d, "base64"),
          u = Buffer.from(s, "base64"),
          h = o,
          p = l / 8,
          m = (function (e, t, i, n) {
            try {
              const o = a().createDecipheriv(t, i, n),
                r = Buffer.from(e);
              return Buffer.from(
                o.update(r, void 0, "hex") + o.final("hex"),
                "hex",
              );
            } catch (t) {
              return r.info("faild to decrypt", t), e;
            }
          })(t, "aes-128-cbc", a().pbkdf2Sync(n, c, h, p, "sha512"), u);
        return m;
      }
    },
    87244: (e, t, i) => {
      i.d(t, {
        Jb: () => S,
        YO: () => I,
        ee: () => w,
        gv: () => T,
        iw: () => y,
        vP: () => b,
        zw: () => M,
      });
      var n = i(71017),
        o = i.n(n),
        a = i(55733),
        r = i.n(a),
        d = i(66069),
        l = i(23897),
        s = i(78152),
        c = i(33394),
        u = i(13382),
        h = i(69931),
        p = i(79409),
        m = i(84374),
        f = i(93090),
        v = i(91878),
        g = i(52470),
        C = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      function y(e, t, i = null, n) {
        return C(this, void 0, void 0, function* () {
          const o = yield r().loadAsync(e),
            { passwordHint: a, encrypted: l } = yield (0, d.n4)(o);
          if (l) {
            let o = 0;
            const r = () =>
              C(this, void 0, void 0, function* () {
                const d = yield n.askForPassword(o, t, a);
                if (null == d) return { needToClose: !0 };
                try {
                  return yield w(e, t, i, { password: d, passwordHint: a });
                } catch (e) {
                  return o++, yield r();
                }
              });
            return yield r();
          }
          return yield w(e, t, i);
        });
      }
      function b(e, t = null, i) {
        return C(this, void 0, void 0, function* () {
          const n = o().basename(e, ".xmind"),
            a = yield c.Z.read(e);
          return yield y(a, n, t, i);
        });
      }
      function w(e, t, i = null, n) {
        return C(this, void 0, void 0, function* () {
          const o = yield (0, l.Zp)(e, {
              password: null == n ? void 0 : n.password,
              decrypt: (e, t, i) => (0, g.p)(t, e, { password: i.password }),
            }),
            a = yield r().loadAsync(o);
          try {
            return yield k(a, t, i, n);
          } catch (e) {
            const { toFix: o } = yield (0, u.Pg)((0, s.JE)().T);
            if (!o) return { needToClose: !0 };
            {
              const e = yield (function (e, t) {
                return C(this, void 0, void 0, function* () {
                  const i = new (r())();
                  e.forEach((e, t) => {
                    i.file(e, t.async("blob"));
                  });
                  try {
                    yield m.aX.fixXMindFile(
                      ({ path: t }) =>
                        C(this, void 0, void 0, function* () {
                          return yield e.file(t).async("string");
                        }),
                      ({ path: i }) =>
                        e
                          .file(i)
                          .async("uint8array")
                          .then((e) =>
                            C(this, void 0, void 0, function* () {
                              !(yield t.take(i)) && (yield t.add(i, e));
                            }),
                          ),
                      (e, t) =>
                        C(this, void 0, void 0, function* () {
                          i.file(e.path, t);
                        }),
                      (e) =>
                        C(this, void 0, void 0, function* () {
                          const n = yield t.take(e.path);
                          i.file(e.path, n);
                        }),
                    );
                  } catch (e) {
                    return null;
                  }
                  return i;
                });
              })(a, i);
              if (e) return yield k(e, t, i, n);
            }
            throw e;
          }
        });
      }
      function k(e, t, i = null, n) {
        var o, a;
        return C(this, void 0, void 0, function* () {
          let r = null;
          try {
            r = yield (0, m.CX)(
              ({ path: t }) =>
                C(this, void 0, void 0, function* () {
                  return yield e.file(t).async("string");
                }),
              ({ path: t }) =>
                e
                  .file(t)
                  .async("uint8array")
                  .then((e) => {
                    null == i || i.add(t, e);
                  }),
            );
          } catch (e) {
            if (e instanceof m.aX.UnsupportedDataStructureError)
              return (
                yield (0, u.G$)((0, s.JE)().T),
                window.close(),
                { needToClose: !0 }
              );
            throw e;
          }
          if (!(null === (o = r.sheets[0]) || void 0 === o ? void 0 : o.id))
            throw new Error("No sheet in this .xmind file");
          return {
            fileName: t,
            content: r,
            isEncrypted: !(
              null === (a = null == n ? void 0 : n.password) ||
              void 0 === a ||
              !a
            ),
            password: null == n ? void 0 : n.password,
            passwordHint: null == n ? void 0 : n.passwordHint,
          };
        });
      }
      function T(e, t, i, n) {
        return C(this, void 0, void 0, function* () {
          const o = new (r())();
          (e = m.aX.withArchiveMetadata(e, {
            creatorName: "Vana",
            creatorVersion: (0, p.Z)("version"),
            layoutEngineVersion: m.viewerKit.DocumentLayoutEngineVersion,
          })),
            (null == n ? void 0 : n.password)
              ? yield (0, m.KR)(
                  e,
                  (e, t) =>
                    C(this, void 0, void 0, function* () {
                      (null == n ? void 0 : n.preStoreString) &&
                        (t = n.preStoreString(e, t));
                      const i = (0, g.H)(
                        e,
                        new TextEncoder().encode(t).buffer,
                        { password: n.password },
                      );
                      o.file(e.path, i);
                    }),
                  (e) =>
                    C(this, void 0, void 0, function* () {
                      if ("Thumbnails/thumbnail.png" === e.path) {
                        const e = (yield (0, h.zD)(
                          "static/images/xmindfile-lock.png",
                        )).buffer;
                        o.file("Thumbnails/thumbnail.png", e, {
                          createFolders: !0,
                          binary: !0,
                        });
                      } else {
                        const t = yield i.take(e.path),
                          a = (0, g.H)(e, t, { password: n.password });
                        o.file(e.path, a);
                      }
                    }),
                  {
                    passwordHint: null == n ? void 0 : n.passwordHint,
                    additionalResources: ["Thumbnails/thumbnail.png"],
                  },
                )
              : yield (0, m.KR)(
                  e,
                  (e, t) =>
                    C(this, void 0, void 0, function* () {
                      (null == n ? void 0 : n.preStoreString) &&
                        (t = n.preStoreString(e, t)),
                        o.file(e.path, t);
                    }),
                  (e) =>
                    C(this, void 0, void 0, function* () {
                      "Thumbnails/thumbnail.png" === e.path &&
                      (null == n ? void 0 : n.thumbnail)
                        ? o.file("Thumbnails/thumbnail.png", n.thumbnail, {
                            createFolders: !0,
                            binary: !0,
                          })
                        : o.file(e.path, yield i.take(e.path));
                    }),
                  { additionalResources: ["Thumbnails/thumbnail.png"] },
                );
          const a = yield o.generateAsync({
            type: "nodebuffer",
            compression: "STORE",
          });
          yield c.Z.write(t, a);
        });
      }
      function I(
        e,
        t,
        i,
        { password: n, sheetIndexes: o, preprocessMetadata: a, thumbnail: r },
      ) {
        return C(this, void 0, void 0, function* () {
          const d = o.map((t) => ({ id: e.sheets[t].id }));
          if (!d) return;
          const l = m.aX
            .DocumentBuilder()
            .sheets(e.queryList(d).clone())
            .build();
          yield T(l, t, i, {
            password: n,
            preStoreString: a
              ? (e, t) => (
                  "metadata.json" === e.path &&
                    a &&
                    (t = JSON.stringify(a(JSON.parse(t)))),
                  t
                )
              : null,
            thumbnail: r,
          });
        });
      }
      function S(e) {
        var t;
        const i = (0, s.S)().defaultTheme,
          n = "default" !== i && (0, s.fl)().lastUsedSkeletonId,
          o = (function (e) {
            var t;
            let i = null;
            if (e)
              if (e.startsWith("Custom")) {
                const n =
                  null ===
                    (t = (0, s.fl)().smartColorThemes.find((t) =>
                      t.idList.includes(e),
                    )) || void 0 === t
                    ? void 0
                    : t.id;
                n && (i = (0, v.B6)(n, e));
              } else i = m.HG.getColorThemeById(e);
            i || (i = m.HG.getColorThemeById(f.qE));
            return i;
          })("default" !== i && (0, s.fl)().lastUsedColorThemeId),
          a =
            null !== (t = m.HG.getSkeletonThemeById(n)) && void 0 !== t
              ? t
              : m.HG.getSkeletonThemeById(f.s9);
        return m.HG.combineTheme(e.sheets[0], {
          colorTheme: o,
          skeletonTheme: a,
        }).ownerDocument;
      }
      function M(e) {
        return e
          .asMutable()
          .metadataFor(
            m.aX.KnownMetaKey.DataStructureVersion,
            m.aX.DocumentDataStructureVersion,
          )
          .metadataFor(
            m.aX.KnownMetaKey.LayoutEngineVersion,
            m.viewerKit.DocumentLayoutEngineVersion,
          )
          .commit();
      }
    },
    18264: (e, t, i) => {
      i.d(t, { U: () => a });
      var n = i(77412),
        o = i(2954);
      const a = (0, n.Q_)("focus", () => {
        const e = (0, o.iH)("initial"),
          t = (0, o.Fl)(() => null === e.value);
        return {
          lastFocusedElementTag: e,
          isFocusMissing: t,
          updateLastFocusedElementTag: (t) => (e.value = t),
        };
      });
    },
    69361: (e, t, i) => {
      i.d(t, {
        Ae: () => v,
        C7: () => T,
        Gm: () => g,
        J2: () => k,
        Y8: () => w,
        nv: () => b,
        qM: () => I,
        yS: () => y,
      });
      var n = i(67657),
        o = i(90435),
        a = i(94593),
        r = i(13382),
        d = i(54856),
        l = i(96829),
        s = i(12455),
        c = i(84374),
        u = i(78152),
        h = i(5893),
        p = i(95246),
        m = i(67214),
        f = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      function v(e) {
        return f(this, void 0, void 0, function* () {
          (0, s.A)().setExporting(!0),
            o.ZP.fetch(d.Fx, {
              name: "dialog-progress",
              parentId: window.id,
              wait: !0,
              query: { type: e, editorId: window.editorId },
            });
        });
      }
      function g() {
        return f(this, void 0, void 0, function* () {
          const e = yield o.ZP.fetch(d._z, { name: "dialog-progress" }),
            t = e && n.BrowserWindow.fromId(e);
          if (t) {
            if (!t.rendererJSLoad)
              return new Promise((e) => {
                t.once("renderer-js-load", () =>
                  f(this, void 0, void 0, function* () {
                    (0, s.A)().setExporting(!1),
                      yield o.ZP.fetch(d.g_, { name: "dialog-progress" }),
                      yield (0, l._v)(100),
                      e(void 0);
                  }),
                );
              });
            (0, s.A)().setExporting(!1),
              yield o.ZP.fetch(d.g_, { name: "dialog-progress" }),
              yield (0, l._v)(100);
          }
        });
      }
      const C = () =>
          f(void 0, void 0, void 0, function* () {
            const e = (0, u.JE)().T;
            yield (0, r.N0)({
              type: "warning",
              message: e("File Replacement Failed"),
              detail: e(
                "The file has been occupied by other application, please close it and try again.",
              ),
              buttons: [e("OK")],
            });
          }),
        y = (e, t) =>
          f(void 0, void 0, void 0, function* () {
            try {
              yield a.Z.writeFile(e, t);
            } catch (e) {
              "EBUSY" === e.code && (yield C());
            }
          }),
        b = (e) => {
          const { document: t, activeSheet: i } = (0, c.nZ)();
          if (!e || 0 === e.length) return [];
          const n = Array.from(e),
            o = i.value.rootTopic.id;
          return (
            e.forEach((i) => {
              let a = i;
              for (; a !== o; ) {
                const o = t.value.query({ id: a }).asTopic().parentTopic.id;
                if (e.includes(o)) {
                  n.splice(n.indexOf(i), 1);
                  break;
                }
                a = o;
              }
            }),
            n
          );
        };
      class w {
        constructor() {
          (this.fileNameLists = []),
            (this.avoidRepeatName = (e, t = 2) => {
              const i = `${e}_${t}`;
              return this.fileNameLists.includes(i)
                ? this.avoidRepeatName(e, t + 1)
                : i;
            });
        }
        makeSafeName(e) {
          let t = e;
          this.fileNameLists.includes(e) && (t = this.avoidRepeatName(e, 2));
          const i = (0, h.N6)(t);
          return this.fileNameLists.push(i), i;
        }
      }
      const k = (e, t) =>
        f(void 0, void 0, void 0, function* () {
          let i;
          try {
            i = yield e();
          } catch (e) {
            if (
              (yield g(),
              "string" == typeof (n = e) && n.indexOf("timeout") > -1)
            ) {
              let i = "Unknown Error";
              return (
                e && (i = e.stack || e.message || e.toString()),
                t && t.error(i),
                (() => {
                  const e = (0, u.JE)().T;
                  (0, r.N0)({
                    type: "warning",
                    message: e("Failed to export this file."),
                    detail: e(
                      "Your ideas are beyond Xmind’s capacity. We suggest you to split this file into multiple files before next step.",
                    ),
                    buttons: [e("OK")],
                  });
                })(),
                null
              );
            }
            throw e;
          }
          var n;
          return i;
        });
      function T() {
        return f(this, void 0, void 0, function* () {
          const e = [
              "png",
              "apng",
              "jpg",
              "jpeg",
              "jpe",
              "jif",
              "jfif",
              "jfi",
              "tif",
              "webp",
              "gif",
              "svg",
              "xbm",
              "xbm",
              "dib",
              "ico",
            ],
            { sheets: t } = (0, c.nZ)(),
            i = function (t) {
              const n = null == t ? void 0 : t.imageSource,
                o = null == t ? void 0 : t.children;
              if (n) {
                let t = 0;
                return (
                  (t = o ? o.reduce((e, t) => e + i(t), 0) : 0),
                  e.some((e) => n.endsWith(e)) ? 1 + t : t
                );
              }
              return o ? o.reduce((e, t) => e + i(t), 0) : 0;
            },
            n = t.value.reduce((e, t) => e + i(t.rootTopic), 0);
          return new Promise((e) => setTimeout(e, 100 * n));
        });
      }
      const I = (e, t = 1, i) =>
          new Promise((n, o) => {
            const { ctx: a, canvas: r } = (0, m.d5)();
            a.clearRect(0, 0, r.width, r.height);
            const d = new Image();
            (d.src = e),
              d.addEventListener("load", () => {
                window.requestIdleCallback(
                  () =>
                    f(void 0, void 0, void 0, function* () {
                      (t = yield (0, p.mi)(d.width, d.height, t)),
                        (r.width = d.width * t),
                        (r.height = d.height * t),
                        (a.imageSmoothingEnabled = !1),
                        S(d, d.width, d.height, r, r.width, r.height),
                        "blob" === i
                          ? r.toBlob((e) => n(e))
                          : "string" === i && n(r.toDataURL());
                    }),
                  { timeout: 100 },
                );
              }),
              d.addEventListener("error", () => {
                o(null);
              });
          }),
        S = (e, t, i, n, o, a) => {
          const r = n.getContext("2d"),
            d = document.createElement("canvas"),
            l = Math.min(1e4, o),
            s = Math.min(1e4, a);
          (d.width = l), (d.height = s);
          const c = d.getContext("2d"),
            u = M(o, l) + (0 !== x(o, l) ? 1 : 0),
            h = M(a, s) + (0 !== x(a, s) ? 1 : 0),
            p = (t / o) * l,
            m = (i / a) * s;
          r.clearRect(0, 0, o, a);
          for (let t = 0; t < h; t++)
            for (let i = 0; i < u; i++)
              c.clearRect(0, 0, l, s),
                c.drawImage(e, i * p, t * m, p, m, 0, 0, l, s),
                r.drawImage(d, i * l, t * s);
        },
        M = (e, t) => (e - (e % t)) / t,
        x = (e, t) => e % t;
    },
    16794: (e, t, i) => {
      i.d(t, { g: () => l, k: () => d });
      var n = i(96829),
        o = i(95246),
        a = i(69361),
        r = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      function d(e, t) {
        return r(this, void 0, void 0, function* () {
          yield (0, a.C7)();
          const { cleanUp: i, addToRemoveEl: r } = (function () {
              const e = [];
              return {
                cleanUp: {
                  clean() {
                    e.forEach((e) => e.remove()), (e.length = 0);
                  },
                  effectSide: {},
                },
                addToRemoveEl(t) {
                  e.push(t);
                },
              };
            })(),
            d = (0, o.gP)(),
            l = { forSheets: {} };
          i.effectSide = l;
          const c = {};
          "actualSize" == e.scale
            ? Object.keys(t).forEach((i) => {
                const o = t[i];
                l.forSheets[i] = [];
                const a = (e.pageSizes && e.pageSizes[i]) || e.pageSize,
                  s =
                    (e.pageSizes && e.pageSizes[i].orientation) ||
                    e.orientation,
                  u = "portrait" === s ? a.x : a.y,
                  h = "portrait" === s ? a.y : a.x,
                  p = {
                    x: Math.round(
                      ((u - e.margins.left - e.margins.right) * d.x) / 25.4,
                    ),
                    y: Math.round(
                      ((h - e.margins.top - e.margins.bottom) * d.y) / 25.4,
                    ),
                  },
                  m = Math.ceil(o.width / p.x),
                  f = Math.ceil(o.height / p.y),
                  v = (m * p.x - o.width) / 2,
                  g = (f * p.y - o.height) / 2;
                for (let t = 0; t < f; t++)
                  for (let a = 0; a < m; a++) {
                    const d = "print_" + (0, n.hb)();
                    l.forSheets[i].push(d),
                      (c[
                        d
                      ] = `@page{\n            size:${u}mm ${h}mm ${s};\n              }`);
                    const m = o.data.cloneNode(!0);
                    m.setAttribute(
                      "viewBox",
                      a * p.x - v + " " + (t * p.y - g) + " " + p.x + " " + p.y,
                    ),
                      m.setAttribute("width", p.x.toString()),
                      m.setAttribute("height", p.y.toString()),
                      m.setAttribute("id", d),
                      (m.style.display = ""),
                      m.classList.add("print-el"),
                      e.boundaryFillNone &&
                        Array.from(
                          m.querySelectorAll('[data-name="boundary-path"]'),
                        ).forEach((e) => e.setAttribute("fill", "none")),
                      document.body.append(m),
                      document.body.appendChild(m),
                      r(m);
                  }
              })
            : Object.keys(t).forEach((i) => {
                const o = t[i];
                l.forSheets[i] = [];
                const a = (e.pageSizes && e.pageSizes[i]) || e.pageSize,
                  s =
                    (e.pageSizes && e.pageSizes[i].orientation) ||
                    e.orientation,
                  u = "portrait" === s ? a.x : a.y,
                  h = "portrait" === s ? a.y : a.x,
                  p = {
                    x: Math.round(
                      ((u - e.margins.left - e.margins.right) * d.x) / 25.4,
                    ),
                    y: Math.round(
                      ((h - e.margins.top - e.margins.bottom) * d.y) / 25.4,
                    ),
                  },
                  m = "print_" + (0, n.hb)();
                l.forSheets[i].push(m),
                  (c[
                    m
                  ] = `@page{\n        size:${u}mm ${h}mm ${s};\n            }`);
                const f = o.data;
                if (
                  (f.setAttribute("width", p.x.toString()),
                  f.setAttribute("height", p.y.toString()),
                  f.setAttribute("id", m),
                  (f.style.display = ""),
                  f.classList.add("print-el"),
                  e.boundaryFillNone &&
                    Array.from(
                      f.querySelectorAll('[data-name="boundary-path"]'),
                    ).forEach((e) => e.setAttribute("fill", "none")),
                  document.body.append(f),
                  r(f),
                  e.withFooter)
                ) {
                  const t = (function (e, t) {
                    const i = document.createElement("div");
                    return (
                      i.setAttribute("id", e),
                      i.classList.add("print-el"),
                      (i.style.pageBreakAfter = "always"),
                      Object.assign(i.style, {
                        width: "100%",
                        height: `${t}px`,
                      }),
                      i
                    );
                  })(
                    m + "-footer",
                    Math.floor(((e.margins.bottom - 2) * d.y) / 25.4),
                  );
                  r(t), t && document.body.appendChild(t);
                }
              });
          const u = document.createElement("style");
          return (
            (u.id = "print_css"),
            (u.innerHTML = s(e.margins, e.withFooter)),
            document.head.append(u),
            r(u),
            (i.hideSvg = (e) => {
              const t = document.getElementById(e);
              t && t.classList.add("hide-print-el");
              const i = e + "-footer",
                n = document.getElementById(i);
              n && n.classList.add("hide-print-el");
              const o = e + "_print_css",
                a = document.getElementById(o);
              a && a.remove();
            }),
            (i.showSvg = (e) => {
              const t = document.getElementById(e);
              t && t.classList.remove("hide-print-el");
              const i = e + "-footer",
                n = document.getElementById(i);
              n && n.classList.remove("hide-print-el");
              const o = e + "_print_css",
                a = document.getElementById(o);
              a && a.remove();
              const d = document.createElement("style");
              (d.id = `${e}_print_css`),
                (d.innerHTML = c[e]),
                document.head.append(d),
                r(d);
            }),
            yield (0, o.SX)(),
            i
          );
        });
      }
      function l(e, t) {
        return r(this, void 0, void 0, function* () {
          yield (0, a.C7)();
          const { cleanUp: i, addToRemoveEl: r } = (function () {
              const e = [];
              return {
                cleanUp: {
                  clean() {
                    e.forEach((e) => e.remove()), (e.length = 0);
                  },
                  effectSide: {},
                },
                addToRemoveEl(t) {
                  e.push(t);
                },
              };
            })(),
            d = (0, o.gP)(),
            l = { forSheets: {} };
          i.effectSide = l;
          const c = {};
          Object.keys(t).forEach((i) => {
            const o = t[i];
            l.forSheets[i] = [];
            const a = (e.pageSizes && e.pageSizes[i]) || e.pageSize,
              s = (e.pageSizes && e.pageSizes[i].orientation) || e.orientation,
              u = "portrait" === s ? a.x : a.y,
              h = "portrait" === s ? a.y : a.x,
              p = {
                x: Math.round(
                  ((u - e.margins.left - e.margins.right) * d.x) / 25.4,
                ),
                y: Math.round(
                  ((h - e.margins.top - e.margins.bottom) * d.y) / 25.4,
                ),
              },
              m = "print_" + (0, n.hb)();
            l.forSheets[i].push(m);
            const f = `@page {\n        size:${u}mm ${h}mm ${s};\n    }`;
            c[m] = f;
            const v = o.data;
            v.setAttribute("width", p.x.toString()),
              v.setAttribute("height", p.y.toString()),
              v.setAttribute("id", m),
              (v.style.display = ""),
              v.classList.add("print-el"),
              e.boundaryFillNone &&
                Array.from(
                  v.querySelectorAll('[data-name="boundary-path"]'),
                ).forEach((e) => e.setAttribute("fill", "none")),
              document.body.append(v),
              r(v);
          });
          const u = document.createElement("style");
          return (
            (u.id = "print_css"),
            (u.innerHTML = s(e.margins, e.withFooter)),
            document.head.append(u),
            r(u),
            (i.hideSvg = (e) => {
              const t = document.getElementById(e);
              t && t.classList.add("hide-print-el");
              const i = e + "-footer",
                n = document.getElementById(i);
              n && n.classList.add("hide-print-el");
              const o = e + "_print_css",
                a = document.getElementById(o);
              a && a.remove();
            }),
            (i.showSvg = (e) => {
              const t = document.getElementById(e);
              t && t.classList.remove("hide-print-el");
              const i = e + "-footer",
                n = document.getElementById(i);
              n && n.classList.remove("hide-print-el");
              const o = e + "_print_css",
                a = document.getElementById(o);
              a && a.remove();
              const d = document.createElement("style");
              (d.id = `${e}_print_css`),
                (d.innerHTML = c[e]),
                document.head.append(d),
                r(d);
            }),
            yield (0, o.SX)(),
            i
          );
        });
      }
      const s = (e, t) =>
        `\n  .print-el{\n    display:none;\n    overflow: hidden;\n  }\n  @page{\n    margin-top:${
          e.top
        }mm;\n    margin-left:${e.left}mm;\n    margin-right:${
          e.right
        }mm;\n    margin-bottom:${
          t ? 0 : 0 === e.bottom ? -2 : e.bottom
        }mm;\n  }\n  @media print{\n    .print-el{\n      display: block;\n    }\n    .hide-print-el {\n      display: none !important;\n    }\n    *{\n      webkit-transition: none !important;\n      transition: none !important;\n    }\n    html{\n      background-color:#fff;\n    }\n    body{\n      overflow:visible!important;\n      background-color:#fff;\n    }\n    #app{\n      display: none !important;\n    }\n    .uk-icon-module{\n      display: none !important;\n    }\n    #popover-container-for-editor {\n      display: none !important;\n    }\n  }\n  `;
    },
    72623: (e, t, i) => {
      i.d(t, { J: () => a });
      var n = i(65389),
        o = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      function a(
        { hasWatermark: e, orientation: t, pageSize: i, margins: a },
        r = "",
      ) {
        return o(this, void 0, void 0, function* () {
          const { cleanUp: o, addToRemoveEl: d } = (() => {
              let e = [];
              return {
                cleanUp() {
                  e.forEach((e) => e.remove()), (e = []);
                },
                addToRemoveEl: (t) => (e.push(t), t),
              };
            })(),
            l = "portrait" === t ? i.x : i.y,
            s = "portrait" === t ? i.y : i.x,
            c = r
              ? `.outliner-${r} .outliner-container`
              : ".outliner-container",
            u = document.querySelector(c).cloneNode(!0),
            h = document.createElement("div");
          if (
            (h.classList.add("print-el"),
            h.append(u),
            document.body.append(h),
            d(h),
            e)
          ) {
            const { url: e, width: t } = (0, n.CG)(),
              i = document.createElement("img");
            (i.src = e),
              (i.style.zIndex = "1"),
              (i.style.position = "fixed"),
              (i.style.left = "50%"),
              (i.style.bottom = "0"),
              (i.style.transform = `translateX(-${t / 2}px)`),
              (i.className = "print-el"),
              document.body.appendChild(i),
              d(i);
          }
          const p = `\n    .print-el {\n      display: none;\n    }\n    @page{\n      size: ${l}mm ${s}mm ${t};\n      margin-top: ${a.top};\n      margin-left: ${a.left};\n      margin-right:  ${a.right};\n      margin-bottom: ${a.bottom};\n    }\n    @media print {\n      .print-el {\n        display: block;\n        position: relative;\n      }\n      * {\n        webkit-transition: none !important;\n        transition: none !important;\n      }\n      html {\n        background-color: #fff;\n      }\n      body {\n        overflow: visible !important;\n        background-color: #fff;\n      }\n      #app {\n        display: none !important;\n      }\n      em {\n        font-family: auto !important;\n      }\n    }\n  `,
            m = document.createElement("style");
          return (
            (m.id = "print_css"),
            (m.innerHTML = p),
            document.head.append(m),
            d(m),
            o
          );
        });
      }
    },
    83282: (e, t, i) => {
      i.d(t, { Ln: () => T, S0: () => k });
      var n = i(57147),
        o = i.n(n),
        a = i(86633),
        r = i(13382),
        d = i(96829),
        l = i(63477),
        s = i.n(l),
        c = i(54856),
        u = i(90435),
        h = i(18621),
        p = i(67657),
        m = i(78152),
        f = i(16794),
        v = i(84374),
        g = i(65389),
        C = i(72623),
        y = i(46016),
        b = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      const w = (0, a.ZP)("core:printer");
      function k() {
        return b(this, void 0, void 0, function* () {
          I();
        });
      }
      function T() {
        return b(this, void 0, void 0, function* () {
          const { selection: e } = (0, v.nZ)();
          I(e.value.modelIds[0]), (0, h.L9)({ eventAction: "printBranch" });
        });
      }
      function I(e) {
        return b(this, void 0, void 0, function* () {
          (0, y.$)().isOutlinerMode
            ? yield (function () {
                return b(this, void 0, void 0, function* () {
                  const e =
                      s().parse(window.location.search.slice(1)).editorId || "",
                    { result: t } = yield u.ZP.fetch(c.Fx, {
                      name: "dialog-print",
                      parentId: window.id,
                      wait: !0,
                      query: { editorId: e },
                    });
                  if (t && "finish" === t.action) {
                    const e = yield (0, C.J)(t.settings);
                    e &&
                      M(t.settings, () =>
                        setTimeout(() => {
                          e(), (0, m.Rg)().addRateMasValue(10);
                        }, 500),
                      );
                  }
                });
              })()
            : yield (function (e) {
                return b(this, void 0, void 0, function* () {
                  const t =
                      s().parse(window.location.search.slice(1)).editorId || "",
                    { sheets: i, activeSheetId: n } = (0, v.nZ)(),
                    o = i.value.map((e) => e.id),
                    a = o.findIndex((e) => e === n.value),
                    r = (0, g.dF)(n.value),
                    l = (0, d.hb)(),
                    h = u.ZP.route(
                      (0, c.vN)(l),
                      ({
                        sheetId: t,
                        opaqueBackground: i,
                        monochrome: n,
                        hasWatermark: o,
                      }) =>
                        S(t, {
                          padding: { left: 50, top: 50, right: 50, bottom: 50 },
                          scopeTopicId: e,
                          opaqueBackground: i,
                          monochrome: n,
                          hasWatermark: o,
                        }).then((e) => ({
                          data: e.data.outerHTML,
                          height: e.height,
                          width: e.width,
                        })),
                    ),
                    { result: p } = yield u.ZP.fetch(c.Fx, {
                      name: "dialog-print",
                      parentId: window.id,
                      wait: !0,
                      query: {
                        backgroundColor: r,
                        currentSheetEditorIndex: a,
                        editorId: t,
                        routeId: l,
                        targetSheetId: o,
                        isPrintBranch: !!e,
                      },
                    });
                  if ((h && h(), !p || "finish" !== p.action)) return;
                  const C = p.settings,
                    y = C.pageSetup.background;
                  Object.assign(C, { withFooter: !0, boundaryFillNone: !0 });
                  const b = {};
                  if ("currentMap" === C.content) {
                    const t = yield S(n.value, {
                      scopeTopicId: e,
                      opaqueBackground: y,
                      monochrome: C.monochrome,
                      padding: {
                        left: 50,
                        top: 50,
                        right: 50,
                        bottom: C.hasWatermark ? 120 : 50,
                      },
                      hasWatermark: C.hasWatermark,
                    });
                    b[n.value] = t;
                  } else if ("workbook" === C.content) {
                    const e = i.value.map((e) => {
                      const t = e.id;
                      return S(t, {
                        opaqueBackground: y,
                        monochrome: C.monochrome,
                        padding: {
                          left: 50,
                          top: 50,
                          right: 50,
                          bottom: C.hasWatermark ? 120 : 50,
                        },
                        hasWatermark: C.hasWatermark,
                      }).then((e) => {
                        b[t] = e;
                      });
                    });
                    yield Promise.all(e);
                  }
                  const w = yield (0, f.k)(C, b);
                  w &&
                    M(C, () => {
                      setTimeout(() => {
                        w.clean(), (0, m.Rg)().addRateMasValue(10);
                      }, 500);
                    });
                });
              })(e);
        });
      }
      const S = (e, t) =>
        b(void 0, void 0, void 0, function* () {
          let i;
          Object.assign(t, { disableEmbedFonts: !0 });
          const { getSheetViewer: n, sheets: o } = (0, v.nZ)(),
            a = n(e),
            r = o.value.find((t) => t.id === e);
          i = t.monochrome
            ? yield a.exportSVGElementWithSizeUsingSheetAppearance(
                r,
                v.QS.GrayScale,
                t,
              )
            : yield a.exportSVGElementWithSize(t);
          const { size: d, svg: l } = i;
          return { data: l, width: d.width, height: d.height, scale: 1 };
        });
      const M = (e, t) =>
          b(void 0, void 0, void 0, function* () {
            const i = x(),
              n = (0, m.JE)().T;
            if (e.useSelectedPrinter && !e.saveAsPdf && i.length > 0) {
              const i = {
                silent: !0,
                pageSize: {
                  width: 1e3 * e.pageSize.x,
                  height: 1e3 * e.pageSize.y,
                },
                printBackground: !0,
                landscape: "landscape" == e.orientation,
                deviceName: e.selectedPrinter.name,
                copies: parseInt(e.copies),
              };
              (0, p.getCurrentWebContents)().print(i, (e, i) => {
                e || w.error((0, d.SC)(i)), t && t();
              });
            } else if (!e.useSelectedPrinter && e.saveAsPdf) {
              const i = yield (0, r.ZZ)({
                title: n("Save"),
                suggestPath: e.suggestPath,
                filters: [{ name: "PDF", extensions: ["pdf"] }],
              });
              if (i) {
                const t = {
                    pageSize: {
                      width: e.pageSize.x / 25.4,
                      height: e.pageSize.y / 25.4,
                    },
                    printBackground: !0,
                    landscape: "landscape" == e.orientation,
                  },
                  n = yield (0, p.getCurrentWebContents)().printToPDF(t);
                o().writeFile(i, n, (e) => {
                  if (e) return w.debug("[Print to PDF]: ", e);
                });
              }
              t && t();
            } else
              (0, p.getCurrentWebContents)().print(
                { silent: !1, printBackground: !0 },
                () => {
                  t && t();
                },
              );
          }),
        x = () =>
          (0, p.getCurrentWebContents)()
            .getPrinters()
            .map((e) => ({
              name: e.name,
              displayName: e.displayName,
              description: e.description,
            }));
    },
    77995: (e, t, i) => {
      i.d(t, { H: () => l });
      var n = i(54856),
        o = i(90435),
        a = i(84374),
        r = i(46016),
        d = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      function l() {
        var e;
        return d(this, void 0, void 0, function* () {
          const {
              syncedProperties: t,
              executePropertyAction: i,
              createXapUrlByArrayBuffer: d,
            } = (0, a.nZ)(),
            l = (0, r.$)(),
            s = l.hyperLinkAutoFillOpt,
            c = null === (e = t.value) || void 0 === e ? void 0 : e.webLink,
            { result: u } = yield o.ZP.fetch(n.Fx, {
              name: "dialog-hyperlink",
              parentId: window.id,
              wait: !0,
              query: {
                topicHref: (null == c ? void 0 : c.value) ? c.value.href : "",
                userAutoFillOpt: s || "",
              },
            });
          if (!u) return;
          const {
            action: h,
            webUrl: p,
            webTitle: m,
            thumbnail: f,
            isVideoUrl: v,
            embedUrl: g,
            autoFillOpt: C,
          } = u;
          if ("remove" === h) i({ name: "mutateProperty:webLink" });
          else if ("set" === h) {
            l.changeHyperLinkAutoFillOpt(C);
            const e = ("all" === C || "title" === C) && m;
            let t = null;
            ("all" === C || "thumbnail" === C) &&
              v &&
              f &&
              (t = yield d(f, ".png")),
              i({
                name: "mutateProperty:webLink",
                payload: {
                  href: p,
                  title: e ? m : null,
                  videoThumbnail: t,
                  videoEmbedUrl: g,
                },
              });
          }
        });
      }
    },
    65389: (e, t, i) => {
      i.d(t, { dF: () => s, CG: () => c });
      var n = i(84374);
      i(95246);
      var o = i(78152),
        a = i(91878);
      const r = {
          "print-watermark-dark-small":
            '<svg width="134" height="12" viewBox="0 0 134 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.22951 1.7004C4.88374 1.7004 5.46313 1.82634 5.9677 2.07822C6.47654 2.3301 6.86993 2.68362 7.14787 3.13877C7.43008 3.58951 7.57119 4.10874 7.57119 4.69646C7.57119 5.2886 7.43222 5.81445 7.15428 6.27402C6.87634 6.7336 6.48723 7.09153 5.98694 7.34783C5.49093 7.59971 4.92008 7.72565 4.27441 7.72565H2.13856V11.2652H1.0097V1.7004H4.22951ZM4.24234 6.7115C4.67422 6.7115 5.05692 6.62975 5.39044 6.46625C5.72397 6.29833 5.98266 6.06633 6.16653 5.77026C6.35467 5.47419 6.44875 5.13835 6.44875 4.76274C6.44875 4.36503 6.3504 4.01152 6.1537 3.70219C5.96129 3.38845 5.68976 3.1454 5.33913 2.97306C4.99278 2.79631 4.59511 2.70793 4.14613 2.70793H2.15139V6.7115H4.24234Z" fill="black" fill-opacity="0.2"/><path d="M10.3164 5.35267C10.5259 4.95938 10.8188 4.64564 11.1951 4.41143C11.5756 4.17281 12.0524 4.05129 12.6254 4.04687V5.07428C11.7488 5.0787 11.1416 5.29302 10.8038 5.71724C10.466 6.13704 10.295 6.66289 10.2907 7.2948V11.2652H9.20034V4.17281H10.2907V5.35267H10.3164Z" fill="black" fill-opacity="0.2"/><path d="M16.9612 11.3978C16.2044 11.3978 15.5566 11.2498 15.0178 10.9537C14.479 10.6576 14.0685 10.2312 13.7863 9.67441C13.5041 9.11762 13.363 8.45257 13.363 7.67925C13.363 6.95013 13.4977 6.31159 13.7671 5.76363C14.0407 5.21568 14.4213 4.79367 14.9088 4.4976C15.4005 4.19711 15.9671 4.04687 16.6085 4.04687C17.1986 4.04687 17.7288 4.18386 18.1991 4.45783C18.6738 4.73181 19.05 5.11847 19.328 5.61781C19.6059 6.11273 19.7534 6.68499 19.7706 7.33457V7.54006C19.7706 7.75217 19.7641 7.95765 19.7513 8.1565H14.5175C14.5261 8.88563 14.7506 9.44242 15.191 9.82687C15.6357 10.2069 16.2471 10.3969 17.0254 10.3969C17.3675 10.3969 17.7224 10.3483 18.0901 10.2511C18.4578 10.1539 18.802 10.0103 19.1227 9.82024L19.3216 10.7084C18.616 11.168 17.8293 11.3978 16.9612 11.3978ZM18.6353 7.25503C18.6353 6.82639 18.5498 6.44415 18.3787 6.10831C18.2077 5.77247 17.9704 5.51175 17.6668 5.32616C17.3675 5.13614 17.0275 5.04114 16.6469 5.04114C16.2536 5.04114 15.8965 5.13614 15.5758 5.32616C15.2551 5.51175 14.9986 5.77468 14.8061 6.11494C14.618 6.45078 14.5197 6.83081 14.5111 7.25503H18.6353Z" fill="black" fill-opacity="0.2"/><path d="M23.5869 11.3978C23.1037 11.3978 22.6141 11.3116 22.1181 11.1393C21.6263 10.967 21.1773 10.7305 20.7711 10.4301L21.1175 9.56836C21.5151 9.83349 21.9256 10.0368 22.349 10.1782C22.7723 10.3152 23.1657 10.3881 23.5291 10.3969C23.9738 10.4013 24.3266 10.3174 24.5874 10.145C24.8525 9.97269 24.9851 9.72081 24.9851 9.38939C24.9851 9.17286 24.9252 8.98726 24.8055 8.8326C24.6901 8.67794 24.5062 8.54095 24.2539 8.42164C24.0059 8.30233 23.6702 8.18743 23.2469 8.07696C22.5328 7.88694 22.0069 7.62181 21.6691 7.28155C21.3356 6.93687 21.1688 6.50823 21.1688 5.99563C21.1688 5.6156 21.2629 5.27755 21.451 4.98148C21.6434 4.68541 21.9107 4.45562 22.2528 4.29212C22.5991 4.12862 22.9946 4.04687 23.4393 4.04687C23.837 4.04687 24.2368 4.10432 24.6387 4.21921C25.0407 4.32968 25.4127 4.48214 25.7548 4.67657L25.5688 5.60455C24.8461 5.22452 24.1834 5.03451 23.5804 5.03451C23.1956 5.03451 22.8792 5.12068 22.6312 5.29302C22.3832 5.46094 22.2592 5.6863 22.2592 5.96912C22.2592 6.17239 22.3148 6.34694 22.4259 6.49276C22.5371 6.63417 22.7124 6.76453 22.9519 6.88384C23.1913 6.99873 23.5142 7.11363 23.9204 7.22852C24.6687 7.43621 25.2139 7.69914 25.5559 8.0173C25.9023 8.33105 26.0755 8.75085 26.0755 9.27671C26.0755 9.70535 25.9771 10.0787 25.7804 10.3969C25.5837 10.7151 25.2972 10.9625 24.921 11.1393C24.549 11.3116 24.1043 11.3978 23.5869 11.3978Z" fill="black" fill-opacity="0.2"/><path d="M30.6999 11.3978C29.9431 11.3978 29.2953 11.2498 28.7565 10.9537C28.2177 10.6576 27.8072 10.2312 27.525 9.67441C27.2428 9.11762 27.1017 8.45257 27.1017 7.67925C27.1017 6.95013 27.2364 6.31159 27.5058 5.76363C27.7795 5.21568 28.16 4.79367 28.6475 4.4976C29.1392 4.19711 29.7058 4.04687 30.3472 4.04687C30.9373 4.04687 31.4675 4.18386 31.9378 4.45783C32.4125 4.73181 32.7888 5.11847 33.0667 5.61781C33.3446 6.11273 33.4922 6.68499 33.5093 7.33457V7.54006C33.5093 7.75217 33.5028 7.95765 33.49 8.1565H28.2562C28.2648 8.88563 28.4893 9.44242 28.9297 9.82687C29.3744 10.2069 29.9859 10.3969 30.7641 10.3969C31.1062 10.3969 31.4611 10.3483 31.8288 10.2511C32.1965 10.1539 32.5408 10.0103 32.8615 9.82024L33.0603 10.7084C32.3547 11.168 31.568 11.3978 30.6999 11.3978ZM32.374 7.25503C32.374 6.82639 32.2885 6.44415 32.1174 6.10831C31.9464 5.77247 31.7091 5.51175 31.4055 5.32616C31.1062 5.13614 30.7662 5.04114 30.3857 5.04114C29.9923 5.04114 29.6352 5.13614 29.3145 5.32616C28.9938 5.51175 28.7373 5.77468 28.5449 6.11494C28.3567 6.45078 28.2584 6.83081 28.2498 7.25503H32.374Z" fill="black" fill-opacity="0.2"/><path d="M40.757 11.2652H39.6603V7.11584C39.6603 6.41764 39.5085 5.89399 39.2049 5.5449C38.9013 5.1958 38.4566 5.02125 37.8708 5.02125C37.5415 5.02125 37.2422 5.12068 36.9728 5.31953C36.7077 5.51396 36.4982 5.7791 36.3442 6.11494C36.1946 6.45078 36.1197 6.81535 36.1197 7.20863V11.2652H35.023V4.17281H36.1197V5.39907H36.1775C36.3528 4.97485 36.6243 4.64343 36.992 4.40481C37.3598 4.16618 37.766 4.04687 38.2107 4.04687C39.036 4.04687 39.6667 4.28991 40.1028 4.776C40.539 5.26208 40.757 5.96028 40.757 6.87058V11.2652Z" fill="black" fill-opacity="0.2"/><path d="M45.7535 11.1393C45.6124 11.1791 45.4478 11.21 45.2596 11.2321C45.0758 11.2542 44.9154 11.2652 44.7786 11.2652H44.7722C43.7032 11.2652 43.1687 10.7018 43.1687 9.57499V5.28639H42.0719V4.29212H43.1687V2.59524L44.2591 2.19754V4.29212H45.7022V5.28639H44.2591V9.38276C44.2591 9.61255 44.2826 9.79151 44.3296 9.91966C44.3809 10.0434 44.4558 10.1318 44.5541 10.1848C44.6525 10.2334 44.7893 10.2621 44.9646 10.271C45.2939 10.2621 45.5568 10.2312 45.7535 10.1782V11.1393Z" fill="black" fill-opacity="0.2"/><path d="M50.3523 11.3978C49.5955 11.3978 48.9477 11.2498 48.4089 10.9537C47.8701 10.6576 47.4596 10.2312 47.1774 9.67441C46.8952 9.11762 46.7541 8.45257 46.7541 7.67925C46.7541 6.95013 46.8888 6.31159 47.1582 5.76363C47.4318 5.21568 47.8124 4.79367 48.2999 4.4976C48.7916 4.19711 49.3582 4.04687 49.9996 4.04687C50.5896 4.04687 51.1199 4.18386 51.5902 4.45783C52.0649 4.73181 52.4411 5.11847 52.7191 5.61781C52.997 6.11273 53.1445 6.68499 53.1616 7.33457V7.54006C53.1616 7.75217 53.1552 7.95765 53.1424 8.1565H47.9086C47.9172 8.88563 48.1417 9.44242 48.5821 9.82687C49.0268 10.2069 49.6382 10.3969 50.4165 10.3969C50.7585 10.3969 51.1135 10.3483 51.4812 10.2511C51.8489 10.1539 52.1931 10.0103 52.5138 9.82024L52.7127 10.7084C52.0071 11.168 51.2204 11.3978 50.3523 11.3978ZM52.0264 7.25503C52.0264 6.82639 51.9409 6.44415 51.7698 6.10831C51.5988 5.77247 51.3615 5.51175 51.0579 5.32616C50.7585 5.13614 50.4186 5.04114 50.038 5.04114C49.6447 5.04114 49.2876 5.13614 48.9669 5.32616C48.6462 5.51175 48.3897 5.77468 48.1972 6.11494C48.0091 6.45078 47.9107 6.83081 47.9022 7.25503H52.0264Z" fill="black" fill-opacity="0.2"/><path d="M59.6462 1.50818H60.7365V11.2586H59.6462V10.0456H59.5949C59.3768 10.4477 59.0732 10.7725 58.6841 11.02C58.295 11.2674 57.8332 11.3912 57.2987 11.3912C56.7342 11.3912 56.2254 11.2409 55.7721 10.9404C55.3189 10.64 54.964 10.2224 54.7074 9.68767C54.4509 9.14856 54.3226 8.53432 54.3226 7.84496C54.3226 7.107 54.453 6.45078 54.7138 5.87632C54.9747 5.29743 55.3338 4.84891 55.7914 4.53075C56.2489 4.20816 56.762 4.04687 57.3307 4.04687C57.831 4.04687 58.28 4.17281 58.6777 4.42469C59.0753 4.67657 59.3853 5.02567 59.6077 5.47198H59.6462V1.50818ZM57.4911 10.5229C57.9315 10.5229 58.3142 10.4035 58.6392 10.1649C58.9641 9.92629 59.2122 9.61918 59.3832 9.24356C59.5585 8.86353 59.6462 8.46583 59.6462 8.05045V7.63948C59.6419 7.14898 59.5457 6.70045 59.3575 6.29391C59.1737 5.88295 58.9214 5.55815 58.6007 5.31953C58.28 5.08091 57.9229 4.96159 57.5296 4.96159C57.1447 4.96159 56.792 5.08533 56.4713 5.33279C56.1506 5.57583 55.894 5.91609 55.7016 6.35357C55.5134 6.79104 55.4194 7.28818 55.4194 7.84496C55.4194 8.36198 55.5113 8.82376 55.6952 9.23031C55.8833 9.63685 56.1356 9.95502 56.452 10.1848C56.7684 10.4102 57.1148 10.5229 57.4911 10.5229Z" fill="black" fill-opacity="0.2"/><path d="M72.6088 10.0986L74.3855 4.17281H75.4951L73.3528 11.2586L71.9546 11.2652L70.8963 8.04382L69.5365 11.2652H68.3627L65.7458 4.17281H66.8747L69.0041 10.0986H69.0555L70.4665 6.73802L69.6199 4.16618H70.6718L72.5575 10.0986H72.6088Z" fill="black" fill-opacity="0.2"/><path d="M77.8554 2.68804H76.6496V1.44189H77.8554V2.68804ZM77.8041 11.2652H76.7073V4.17281H77.8041V11.2652Z" fill="black" fill-opacity="0.2"/><path d="M82.916 11.1393C82.7749 11.1791 82.6103 11.21 82.4222 11.2321C82.2383 11.2542 82.0779 11.2652 81.9411 11.2652H81.9347C80.8657 11.2652 80.3312 10.7018 80.3312 9.57499V5.28639H79.2344V4.29212H80.3312V2.59524L81.4216 2.19754V4.29212H82.8647V5.28639H81.4216V9.38276C81.4216 9.61255 81.4451 9.79151 81.4921 9.91966C81.5434 10.0434 81.6183 10.1318 81.7166 10.1848C81.815 10.2334 81.9518 10.2621 82.1271 10.271C82.4564 10.2621 82.7193 10.2312 82.916 10.1782V11.1393Z" fill="black" fill-opacity="0.2"/><path d="M90.0035 11.2652H88.9067V7.11584C88.9067 6.42206 88.7549 5.90062 88.4513 5.55153C88.152 5.19801 87.7137 5.02125 87.1364 5.02125C86.82 5.02125 86.5314 5.10963 86.2705 5.28639C86.0097 5.46315 85.8002 5.70398 85.642 6.00889C85.4838 6.3138 85.3918 6.64964 85.3662 7.01641V11.2652H84.2694V1.50818H85.3662V5.42558H85.4111C85.5864 4.99253 85.8579 4.65448 86.2256 4.41143C86.5934 4.16839 86.9996 4.04687 87.4443 4.04687C88.2738 4.04687 88.9067 4.28991 89.3428 4.776C89.7832 5.26208 90.0035 5.96028 90.0035 6.87058V11.2652Z" fill="black" fill-opacity="0.2"/><path d="M101.676 4.06481L99.6395 7.37712L101.689 11.1238H99.4031L98.0107 8.65318L96.5263 11.1238H94.2407L96.395 7.37712L94.2932 4.06481H96.5526L98.0238 6.42687L99.3637 4.06481H101.676Z" fill="black" fill-opacity="0.2"/><path d="M102.745 4.06481V11.1238H104.821V7.3907V7.1735C104.821 6.41329 105.372 5.74812 106.003 5.74812C106.686 5.74812 107.132 6.26397 107.132 7.0649V11.1238H109.208V7.1735C109.208 6.41329 109.72 5.74812 110.324 5.74812C111.034 5.74812 111.494 6.26397 111.494 7.0649V11.1238H113.569V7.03775C113.569 5.88387 113.293 3.79331 110.955 3.79331C109.865 3.79331 109.129 4.34989 108.788 5.00149C108.367 4.21414 107.618 3.79331 106.594 3.79331C105.661 3.79331 105.031 4.18699 104.715 4.74356L104.361 4.06481H102.745Z" fill="black" fill-opacity="0.2"/><path d="M114.644 4.06481V11.1238H116.719V4.06481H114.644ZM114.368 1.87923C114.368 2.62586 114.959 3.23674 115.694 3.23674C116.404 3.23674 116.995 2.62586 116.995 1.87923C116.995 1.14618 116.404 0.521729 115.694 0.521729C114.959 0.521729 114.368 1.14618 114.368 1.87923Z" fill="black" fill-opacity="0.2"/><path d="M117.921 4.06481V11.1238H119.996V7.1735C119.996 6.41329 120.548 5.74812 121.178 5.74812C121.901 5.74812 122.308 6.22324 122.308 7.0649V11.1238H124.383V6.96987C124.383 4.92004 123.451 3.79331 121.769 3.79331C120.837 3.79331 120.206 4.18699 119.891 4.74356L119.536 4.06481H117.921Z" fill="black" fill-opacity="0.2"/><path d="M128.679 11.2732C129.494 11.2732 130.255 10.9745 130.847 10.4587L131.214 11.1238H132.778V1.97426L130.702 1.24121V4.48564C130.124 4.05124 129.428 3.79331 128.679 3.79331C126.735 3.79331 125.172 5.46304 125.172 7.54002C125.172 9.60343 126.735 11.2732 128.679 11.2732ZM127.234 7.4993C127.234 6.49474 128.009 5.68024 128.994 5.68024C129.98 5.68024 130.768 6.49474 130.768 7.4993C130.768 8.531 129.98 9.33193 128.994 9.33193C128.009 9.33193 127.234 8.531 127.234 7.4993Z" fill="black" fill-opacity="0.2"/></svg>',
          "print-watermark-dark-normal":
            '<svg width="201" height="18" viewBox="0 0 201 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.34427 2.55061C7.32561 2.55061 8.1947 2.73952 8.95155 3.11734C9.71481 3.49516 10.3049 4.02543 10.7218 4.70816C11.1451 5.38426 11.3568 6.1631 11.3568 7.04468C11.3568 7.9329 11.1483 8.72168 10.7314 9.41104C10.3145 10.1004 9.73084 10.6373 8.98041 11.0217C8.23639 11.3996 7.38013 11.5885 6.41162 11.5885H3.20784V16.8979H1.51456V2.55061H6.34427ZM6.36351 10.0673C7.01132 10.0673 7.58537 9.94463 8.08566 9.69937C8.58595 9.44749 8.974 9.0995 9.2498 8.65539C9.53201 8.21129 9.67312 7.70753 9.67312 7.14411C9.67312 6.54755 9.5256 6.01728 9.23056 5.55329C8.94193 5.08267 8.53464 4.7181 8.0087 4.45959C7.48916 4.19446 6.89267 4.06189 6.2192 4.06189H3.22709V10.0673H6.36351Z" fill="black" fill-opacity="0.2"/><path d="M15.4745 8.02901C15.7888 7.43908 16.2282 6.96846 16.7926 6.61715C17.3635 6.25922 18.0786 6.07693 18.9381 6.0703V7.61142C17.6232 7.61804 16.7124 7.93952 16.2057 8.57585C15.699 9.20556 15.4425 9.99434 15.4361 10.9422V16.8979H13.8005V6.25922H15.4361V8.02901H15.4745Z" fill="black" fill-opacity="0.2"/><path d="M25.4418 17.0967C24.3066 17.0967 23.3349 16.8747 22.5267 16.4306C21.7185 15.9864 21.1028 15.3468 20.6795 14.5116C20.2562 13.6764 20.0445 12.6789 20.0445 11.5189C20.0445 10.4252 20.2465 9.46738 20.6506 8.64545C21.0611 7.82353 21.632 7.19051 22.3631 6.74641C23.1008 6.29567 23.9506 6.0703 24.9127 6.0703C25.7978 6.0703 26.5932 6.27579 27.2987 6.68675C28.0106 7.09771 28.5751 7.6777 28.992 8.42671C29.4089 9.1691 29.6302 10.0275 29.6558 11.0019V11.3101C29.6558 11.6282 29.6462 11.9365 29.627 12.2348H21.7763C21.7891 13.3284 22.1258 14.1636 22.7865 14.7403C23.4535 15.3103 24.3707 15.5954 25.5381 15.5954C26.0512 15.5954 26.5835 15.5225 27.1351 15.3766C27.6867 15.2308 28.2031 15.0154 28.6841 14.7304L28.9824 16.0627C27.9241 16.752 26.7439 17.0967 25.4418 17.0967ZM27.9529 10.8825C27.9529 10.2396 27.8246 9.66623 27.5681 9.16247C27.3115 8.65871 26.9555 8.26763 26.5002 7.98924C26.0512 7.70421 25.5413 7.5617 24.9704 7.5617C24.3803 7.5617 23.8448 7.70421 23.3637 7.98924C22.8827 8.26763 22.4978 8.66202 22.2092 9.17241C21.927 9.67617 21.7795 10.2462 21.7666 10.8825H27.9529Z" fill="black" fill-opacity="0.2"/><path d="M35.3803 17.0967C34.6555 17.0967 33.9211 16.9675 33.1771 16.7089C32.4395 16.4504 31.766 16.0958 31.1567 15.6451L31.6762 14.3525C32.2727 14.7502 32.8885 15.0551 33.5234 15.2673C34.1584 15.4727 34.7485 15.5821 35.2937 15.5954C35.9608 15.602 36.4899 15.4761 36.8812 15.2175C37.2788 14.959 37.4777 14.5812 37.4777 14.0841C37.4777 13.7593 37.3879 13.4809 37.2083 13.2489C37.0351 13.0169 36.7593 12.8114 36.3809 12.6325C36.0089 12.4535 35.5054 12.2811 34.8704 12.1154C33.7992 11.8304 33.0103 11.4327 32.5036 10.9223C32.0033 10.4053 31.7532 9.76234 31.7532 8.99345C31.7532 8.4234 31.8943 7.91632 32.1765 7.47222C32.4651 7.02811 32.866 6.68344 33.3791 6.43818C33.8987 6.19293 34.492 6.0703 35.159 6.0703C35.7555 6.0703 36.3552 6.15647 36.9581 6.32881C37.561 6.49452 38.119 6.72321 38.6322 7.01486L38.3532 8.40683C37.2692 7.83678 36.275 7.55176 35.3707 7.55176C34.7934 7.55176 34.3188 7.68101 33.9468 7.93952C33.5748 8.1914 33.3888 8.52945 33.3888 8.95367C33.3888 9.25858 33.4721 9.52041 33.6389 9.73914C33.8057 9.95125 34.0686 10.1468 34.4278 10.3258C34.787 10.4981 35.2712 10.6704 35.8806 10.8428C37.003 11.1543 37.8208 11.5487 38.3339 12.026C38.8534 12.4966 39.1132 13.1263 39.1132 13.9151C39.1132 14.558 38.9657 15.1181 38.6707 15.5954C38.3756 16.0726 37.9459 16.4438 37.3814 16.7089C36.8234 16.9675 36.1564 17.0967 35.3803 17.0967Z" fill="black" fill-opacity="0.2"/><path d="M46.0499 17.0967C44.9146 17.0967 43.9429 16.8747 43.1348 16.4306C42.3266 15.9864 41.7109 15.3468 41.2875 14.5116C40.8642 13.6764 40.6526 12.6789 40.6526 11.5189C40.6526 10.4252 40.8546 9.46738 41.2587 8.64545C41.6692 7.82353 42.24 7.19051 42.9712 6.74641C43.7088 6.29567 44.5587 6.0703 45.5208 6.0703C46.4059 6.0703 47.2012 6.27579 47.9068 6.68675C48.6187 7.09771 49.1831 7.6777 49.6 8.42671C50.017 9.1691 50.2382 10.0275 50.2639 11.0019V11.3101C50.2639 11.6282 50.2543 11.9365 50.235 12.2348H42.3843C42.3972 13.3284 42.7339 14.1636 43.3945 14.7403C44.0616 15.3103 44.9788 15.5954 46.1461 15.5954C46.6592 15.5954 47.1916 15.5225 47.7432 15.3766C48.2948 15.2308 48.8111 15.0154 49.2922 14.7304L49.5904 16.0627C48.5321 16.752 47.352 17.0967 46.0499 17.0967ZM48.561 10.8825C48.561 10.2396 48.4327 9.66623 48.1761 9.16247C47.9196 8.65871 47.5636 8.26763 47.1082 7.98924C46.6592 7.70421 46.1493 7.5617 45.5785 7.5617C44.9884 7.5617 44.4528 7.70421 43.9718 7.98924C43.4907 8.26763 43.1059 8.66202 42.8173 9.17241C42.5351 9.67617 42.3875 10.2462 42.3747 10.8825H48.561Z" fill="black" fill-opacity="0.2"/><path d="M61.1356 16.8979H59.4904V10.6738C59.4904 9.62646 59.2627 8.84099 58.8073 8.31734C58.3519 7.7937 57.6848 7.53187 56.8061 7.53187C56.3123 7.53187 55.8633 7.68101 55.4592 7.97929C55.0615 8.27095 54.7473 8.66865 54.5163 9.17241C54.2919 9.67617 54.1796 10.223 54.1796 10.813V16.8979H52.5344V6.25922H54.1796V8.09861H54.2662C54.5292 7.46228 54.9365 6.96514 55.4881 6.60721C56.0397 6.24927 56.649 6.0703 57.316 6.0703C58.5539 6.0703 59.5 6.43487 60.1542 7.164C60.8084 7.89312 61.1356 8.94042 61.1356 10.3059V16.8979Z" fill="black" fill-opacity="0.2"/><path d="M68.6303 16.7089C68.4186 16.7686 68.1717 16.815 67.8895 16.8481C67.6137 16.8813 67.3731 16.8979 67.1679 16.8979H67.1583C65.5548 16.8979 64.753 16.0527 64.753 14.3625V7.92958H63.1079V6.43818H64.753V3.89286L66.3886 3.2963V6.43818H68.5533V7.92958H66.3886V14.0741C66.3886 14.4188 66.4239 14.6873 66.4944 14.8795C66.5714 15.0651 66.6836 15.1977 66.8312 15.2772C66.9787 15.3501 67.1839 15.3932 67.4469 15.4065C67.9408 15.3932 68.3352 15.3468 68.6303 15.2673V16.7089Z" fill="black" fill-opacity="0.2"/><path d="M75.5285 17.0967C74.3932 17.0967 73.4215 16.8747 72.6133 16.4306C71.8052 15.9864 71.1894 15.3468 70.7661 14.5116C70.3428 13.6764 70.1311 12.6789 70.1311 11.5189C70.1311 10.4252 70.3332 9.46738 70.7373 8.64545C71.1478 7.82353 71.7186 7.19051 72.4498 6.74641C73.1874 6.29567 74.0372 6.0703 74.9993 6.0703C75.8845 6.0703 76.6798 6.27579 77.3853 6.68675C78.0973 7.09771 78.6617 7.6777 79.0786 8.42671C79.4955 9.1691 79.7168 10.0275 79.7425 11.0019V11.3101C79.7425 11.6282 79.7328 11.9365 79.7136 12.2348H71.8629C71.8757 13.3284 72.2125 14.1636 72.8731 14.7403C73.5402 15.3103 74.4574 15.5954 75.6247 15.5954C76.1378 15.5954 76.6702 15.5225 77.2218 15.3766C77.7734 15.2308 78.2897 15.0154 78.7708 14.7304L79.069 16.0627C78.0107 16.752 76.8305 17.0967 75.5285 17.0967ZM78.0396 10.8825C78.0396 10.2396 77.9113 9.66623 77.6547 9.16247C77.3982 8.65871 77.0422 8.26763 76.5868 7.98924C76.1378 7.70421 75.6279 7.5617 75.0571 7.5617C74.467 7.5617 73.9314 7.70421 73.4504 7.98924C72.9693 8.26763 72.5845 8.66202 72.2959 9.17241C72.0136 9.67617 71.8661 10.2462 71.8533 10.8825H78.0396Z" fill="black" fill-opacity="0.2"/><path d="M89.4692 2.26227H91.1048V16.8879H89.4692V15.0684H89.3923C89.0652 15.6716 88.6098 16.1588 88.0261 16.53C87.4424 16.9012 86.7497 17.0868 85.948 17.0868C85.1013 17.0868 84.3381 16.8614 83.6582 16.4107C82.9783 15.9599 82.446 15.3335 82.0611 14.5315C81.6763 13.7228 81.4839 12.8015 81.4839 11.7674C81.4839 10.6605 81.6795 9.67617 82.0707 8.81448C82.462 7.94615 83.0008 7.27337 83.6871 6.79612C84.3734 6.31224 85.143 6.0703 85.9961 6.0703C86.7465 6.0703 87.42 6.25922 88.0165 6.63704C88.613 7.01486 89.078 7.5385 89.4115 8.20798H89.4692V2.26227ZM86.2366 15.7843C86.8972 15.7843 87.4713 15.6053 87.9588 15.2474C88.4462 14.8894 88.8182 14.4288 89.0748 13.8653C89.3378 13.2953 89.4692 12.6987 89.4692 12.0757V11.4592C89.4628 10.7235 89.3185 10.0507 89.0363 9.44086C88.7605 8.82442 88.3821 8.33723 87.901 7.97929C87.42 7.62136 86.8844 7.44239 86.2943 7.44239C85.7171 7.44239 85.1879 7.62799 84.7069 7.99918C84.2258 8.36374 83.841 8.87413 83.5524 9.53035C83.2702 10.1866 83.129 10.9323 83.129 11.7674C83.129 12.543 83.2669 13.2356 83.5427 13.8455C83.825 14.4553 84.2034 14.9325 84.678 15.2772C85.1526 15.6153 85.6722 15.7843 86.2366 15.7843Z" fill="black" fill-opacity="0.2"/><path d="M108.913 15.1479L111.578 6.25922H113.243L110.029 16.8879L107.932 16.8979L106.344 12.0657L104.305 16.8979H102.544L98.6188 6.25922H100.312L103.506 15.1479H103.583L105.7 10.107L104.43 6.24927H106.008L108.836 15.1479H108.913Z" fill="black" fill-opacity="0.2"/><path d="M116.783 4.03206H114.974V2.16284H116.783V4.03206ZM116.706 16.8979H115.061V6.25922H116.706V16.8979Z" fill="black" fill-opacity="0.2"/><path d="M124.374 16.7089C124.162 16.7686 123.915 16.815 123.633 16.8481C123.357 16.8813 123.117 16.8979 122.912 16.8979H122.902C121.299 16.8979 120.497 16.0527 120.497 14.3625V7.92958H118.852V6.43818H120.497V3.89286L122.132 3.2963V6.43818H124.297V7.92958H122.132V14.0741C122.132 14.4188 122.168 14.6873 122.238 14.8795C122.315 15.0651 122.427 15.1977 122.575 15.2772C122.722 15.3501 122.928 15.3932 123.191 15.4065C123.685 15.3932 124.079 15.3468 124.374 15.2673V16.7089Z" fill="black" fill-opacity="0.2"/><path d="M135.005 16.8979H133.36V10.6738C133.36 9.63309 133.132 8.85093 132.677 8.32729C132.228 7.79701 131.571 7.53187 130.705 7.53187C130.23 7.53187 129.797 7.66444 129.406 7.92958C129.015 8.19472 128.7 8.55597 128.463 9.01333C128.226 9.47069 128.088 9.97445 128.049 10.5246V16.8979H126.404V2.26227H128.049V8.13838H128.117C128.38 7.48879 128.787 6.98171 129.338 6.61715C129.89 6.25259 130.499 6.0703 131.166 6.0703C132.411 6.0703 133.36 6.43487 134.014 7.164C134.675 7.89312 135.005 8.94042 135.005 10.3059V16.8979Z" fill="black" fill-opacity="0.2"/><path d="M152.513 6.09722L149.459 11.0657L152.533 16.6857H149.105L147.016 12.9798L144.789 16.6857H141.361L144.592 11.0657L141.44 6.09722H144.829L147.036 9.6403L149.045 6.09722H152.513Z" fill="black" fill-opacity="0.2"/><path d="M154.118 6.09722V16.6857H157.231V11.086V10.7602C157.231 9.61994 158.058 8.62218 159.004 8.62218C160.029 8.62218 160.699 9.39595 160.699 10.5973V16.6857H163.812V10.7602C163.812 9.61994 164.58 8.62218 165.487 8.62218C166.551 8.62218 167.24 9.39595 167.24 10.5973V16.6857H170.353V10.5566C170.353 8.8258 169.94 5.68997 166.432 5.68997C164.797 5.68997 163.694 6.52483 163.181 7.50224C162.551 6.32121 161.428 5.68997 159.891 5.68997C158.492 5.68997 157.546 6.28048 157.073 7.11535L156.541 6.09722H154.118Z" fill="black" fill-opacity="0.2"/><path d="M171.965 6.09722V16.6857H175.078V6.09722H171.965ZM171.552 2.81885C171.552 3.93879 172.438 4.8551 173.542 4.8551C174.606 4.8551 175.492 3.93879 175.492 2.81885C175.492 1.71927 174.606 0.782593 173.542 0.782593C172.438 0.782593 171.552 1.71927 171.552 2.81885Z" fill="black" fill-opacity="0.2"/><path d="M176.881 6.09722V16.6857H179.994V10.7602C179.994 9.61994 180.822 8.62218 181.767 8.62218C182.851 8.62218 183.462 9.33487 183.462 10.5973V16.6857H186.575V10.4548C186.575 7.38006 185.176 5.68997 182.654 5.68997C181.255 5.68997 180.309 6.28048 179.836 7.11535L179.304 6.09722H176.881Z" fill="black" fill-opacity="0.2"/><path d="M193.019 16.9097C194.24 16.9097 195.383 16.4618 196.27 15.688L196.822 16.6857H199.166V2.96139L196.053 1.86181V6.72846C195.186 6.07686 194.142 5.68997 193.019 5.68997C190.103 5.68997 187.758 8.19456 187.758 11.31C187.758 14.4051 190.103 16.9097 193.019 16.9097ZM190.851 11.2489C190.851 9.74212 192.014 8.52036 193.492 8.52036C194.969 8.52036 196.152 9.74212 196.152 11.2489C196.152 12.7965 194.969 13.9979 193.492 13.9979C192.014 13.9979 190.851 12.7965 190.851 11.2489Z" fill="black" fill-opacity="0.2"/></svg>',
          "print-watermark-dark-big":
            '<svg width="268" height="24" viewBox="0 0 268 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.45903 3.40087C9.76748 3.40087 10.9263 3.65275 11.9354 4.15651C12.9531 4.66027 13.7399 5.3673 14.2957 6.27761C14.8602 7.17908 15.1424 8.21753 15.1424 9.39297C15.1424 10.5773 14.8644 11.629 14.3086 12.5481C13.7527 13.4673 12.9745 14.1831 11.9739 14.6957C10.9819 15.1995 9.84017 15.4514 8.54882 15.4514H4.27712V22.5305H2.01941V3.40087H8.45903ZM8.48469 13.4231C9.34843 13.4231 10.1138 13.2596 10.7809 12.9326C11.4479 12.5967 11.9653 12.1327 12.3331 11.5406C12.7093 10.9484 12.8975 10.2768 12.8975 9.52554C12.8975 8.73013 12.7008 8.0231 12.3074 7.40444C11.9226 6.77695 11.3795 6.29087 10.6783 5.94619C9.98555 5.59267 9.19022 5.41591 8.29227 5.41591H4.30278V13.4231H8.48469Z" fill="black" fill-opacity="0.2"/><path d="M20.6327 10.7054C21.0518 9.91883 21.6376 9.29134 22.3902 8.82293C23.1513 8.34568 24.1048 8.10264 25.2508 8.0938V10.1486C23.4976 10.1575 22.2833 10.5861 21.6077 11.4345C20.9321 12.2741 20.59 13.3258 20.5814 14.5897V22.5305H18.4007V8.34568H20.5814V10.7054H20.6327Z" fill="black" fill-opacity="0.2"/><path d="M33.9225 22.7957C32.4088 22.7957 31.1132 22.4996 30.0356 21.9075C28.9581 21.3153 28.1371 20.4625 27.5726 19.3489C27.0082 18.2353 26.726 16.9052 26.726 15.3586C26.726 13.9003 26.9954 12.6232 27.5342 11.5273C28.0815 10.4314 28.8426 9.58741 29.8175 8.99527C30.801 8.39429 31.9341 8.0938 33.2169 8.0938C34.3971 8.0938 35.4575 8.36778 36.3983 8.91573C37.3475 9.46368 38.1001 10.237 38.656 11.2357C39.2119 12.2255 39.5069 13.37 39.5411 14.6692V15.0802C39.5411 15.5044 39.5283 15.9154 39.5026 16.3131H29.035C29.0521 17.7713 29.5011 18.8849 30.382 19.6538C31.2714 20.4139 32.4943 20.7939 34.0507 20.7939C34.7349 20.7939 35.4447 20.6967 36.1802 20.5022C36.9157 20.3078 37.6041 20.0206 38.2455 19.6405L38.6431 21.417C37.2321 22.3361 35.6585 22.7957 33.9225 22.7957ZM37.2706 14.5101C37.2706 13.6528 37.0995 12.8884 36.7574 12.2167C36.4154 11.545 35.9407 11.0236 35.3335 10.6524C34.7349 10.2723 34.055 10.0823 33.2939 10.0823C32.5071 10.0823 31.793 10.2723 31.1516 10.6524C30.5102 11.0236 29.9971 11.5494 29.6123 12.2299C29.236 12.9016 29.0393 13.6617 29.0222 14.5101H37.2706Z" fill="black" fill-opacity="0.2"/><path d="M47.1737 22.7957C46.2073 22.7957 45.2281 22.6233 44.2361 22.2787C43.2526 21.934 42.3547 21.4611 41.5423 20.8602L42.235 19.1368C43.0303 19.667 43.8513 20.0736 44.6979 20.3564C45.5446 20.6304 46.3314 20.7762 47.0583 20.7939C47.9477 20.8027 48.6532 20.6348 49.1749 20.2901C49.7051 19.9454 49.9702 19.4417 49.9702 18.7788C49.9702 18.3458 49.8505 17.9746 49.611 17.6653C49.3801 17.3559 49.0124 17.082 48.5078 16.8433C48.0118 16.6047 47.3405 16.3749 46.4938 16.154C45.0657 15.7739 44.0138 15.2437 43.3382 14.5632C42.6711 13.8738 42.3376 13.0165 42.3376 11.9913C42.3376 11.2313 42.5257 10.5552 42.902 9.96302C43.2869 9.37088 43.8214 8.91131 44.5055 8.5843C45.1982 8.2573 45.9893 8.0938 46.8787 8.0938C47.674 8.0938 48.4736 8.20869 49.2775 8.43848C50.0814 8.65943 50.8254 8.96433 51.5096 9.3532L51.1375 11.2092C49.6923 10.4491 48.3667 10.0691 47.1609 10.0691C46.3912 10.0691 45.7584 10.2414 45.2624 10.5861C44.7663 10.9219 44.5183 11.3727 44.5183 11.9383C44.5183 12.3448 44.6295 12.6939 44.8519 12.9856C45.0742 13.2684 45.4248 13.5291 45.9038 13.7677C46.3827 13.9975 47.0283 14.2273 47.8408 14.4571C49.3374 14.8725 50.4277 15.3983 51.1119 16.0347C51.8046 16.6622 52.151 17.5018 52.151 18.5535C52.151 19.4107 51.9543 20.1576 51.5609 20.7939C51.1675 21.4302 50.5945 21.9251 49.8419 22.2787C49.0979 22.6233 48.2085 22.7957 47.1737 22.7957Z" fill="black" fill-opacity="0.2"/><path d="M61.3999 22.7957C59.8862 22.7957 58.5906 22.4996 57.513 21.9075C56.4355 21.3153 55.6145 20.4625 55.0501 19.3489C54.4856 18.2353 54.2034 16.9052 54.2034 15.3586C54.2034 13.9003 54.4728 12.6232 55.0116 11.5273C55.5589 10.4314 56.32 9.58741 57.295 8.99527C58.2784 8.39429 59.4116 8.0938 60.6944 8.0938C61.8745 8.0938 62.935 8.36778 63.8757 8.91573C64.8249 9.46368 65.5775 10.237 66.1334 11.2357C66.6893 12.2255 66.9843 13.37 67.0185 14.6692V15.0802C67.0185 15.5044 67.0057 15.9154 66.98 16.3131H56.5125C56.5296 17.7713 56.9785 18.8849 57.8594 19.6538C58.7488 20.4139 59.9717 20.7939 61.5282 20.7939C62.2123 20.7939 62.9221 20.6967 63.6576 20.5022C64.3931 20.3078 65.0815 20.0206 65.7229 19.6405L66.1206 21.417C64.7095 22.3361 63.1359 22.7957 61.3999 22.7957ZM64.748 14.5101C64.748 13.6528 64.5769 12.8884 64.2349 12.2167C63.8928 11.545 63.4182 11.0236 62.811 10.6524C62.2123 10.2723 61.5324 10.0823 60.7713 10.0823C59.9845 10.0823 59.2705 10.2723 58.6291 10.6524C57.9877 11.0236 57.4745 11.5494 57.0897 12.2299C56.7134 12.9016 56.5167 13.6617 56.4996 14.5101H64.748Z" fill="black" fill-opacity="0.2"/><path d="M81.5141 22.5305H79.3205V14.2317C79.3205 12.8353 79.0169 11.788 78.4097 11.0899C77.8025 10.3917 76.9131 10.0426 75.7415 10.0426C75.083 10.0426 74.4844 10.2414 73.9456 10.6391C73.4154 11.028 72.9963 11.5583 72.6885 12.2299C72.3891 12.9016 72.2395 13.6308 72.2395 14.4173V22.5305H70.0459V8.34568H72.2395V10.7982H72.3549C72.7056 9.94976 73.2486 9.28692 73.9841 8.80967C74.7196 8.33242 75.532 8.0938 76.4214 8.0938C78.0719 8.0938 79.3333 8.57989 80.2056 9.55206C81.0779 10.5242 81.5141 11.9206 81.5141 13.7412V22.5305Z" fill="black" fill-opacity="0.2"/><path d="M91.507 22.2787C91.2248 22.3582 90.8956 22.4201 90.5193 22.4642C90.1516 22.5084 89.8309 22.5305 89.5572 22.5305H89.5444C87.4064 22.5305 86.3374 21.4037 86.3374 19.15V10.5728H84.1438V8.5843H86.3374V5.19055L88.5181 4.39513V8.5843H91.4044V10.5728H88.5181V18.7656C88.5181 19.2252 88.5652 19.5831 88.6592 19.8394C88.7619 20.0868 88.9115 20.2636 89.1082 20.3697C89.3049 20.4669 89.5786 20.5243 89.9292 20.542C90.5877 20.5243 91.1136 20.4625 91.507 20.3564V22.2787Z" fill="black" fill-opacity="0.2"/><path d="M100.705 22.7957C99.191 22.7957 97.8953 22.4996 96.8178 21.9075C95.7403 21.3153 94.9193 20.4625 94.3548 19.3489C93.7904 18.2353 93.5082 16.9052 93.5082 15.3586C93.5082 13.9003 93.7776 12.6232 94.3164 11.5273C94.8637 10.4314 95.6248 9.58741 96.5997 8.99527C97.5832 8.39429 98.7163 8.0938 99.9991 8.0938C101.179 8.0938 102.24 8.36778 103.18 8.91573C104.13 9.46368 104.882 10.237 105.438 11.2357C105.994 12.2255 106.289 13.37 106.323 14.6692V15.0802C106.323 15.5044 106.31 15.9154 106.285 16.3131H95.8172C95.8343 17.7713 96.2833 18.8849 97.1642 19.6538C98.0536 20.4139 99.2765 20.7939 100.833 20.7939C101.517 20.7939 102.227 20.6967 102.962 20.5022C103.698 20.3078 104.386 20.0206 105.028 19.6405L105.425 21.417C104.014 22.3361 102.441 22.7957 100.705 22.7957ZM104.053 14.5101C104.053 13.6528 103.882 12.8884 103.54 12.2167C103.198 11.545 102.723 11.0236 102.116 10.6524C101.517 10.2723 100.837 10.0823 100.076 10.0823C99.2893 10.0823 98.5752 10.2723 97.9338 10.6524C97.2924 11.0236 96.7793 11.5494 96.3945 12.2299C96.0182 12.9016 95.8215 13.6617 95.8044 14.5101H104.053Z" fill="black" fill-opacity="0.2"/><path d="M119.292 3.01642H121.473V22.5173H119.292V20.0913H119.19C118.754 20.8955 118.146 21.5451 117.368 22.04C116.59 22.535 115.666 22.7824 114.597 22.7824C113.468 22.7824 112.451 22.4819 111.544 21.8809C110.638 21.28 109.928 20.4448 109.415 19.3754C108.902 18.2972 108.645 17.0687 108.645 15.69C108.645 14.2141 108.906 12.9016 109.428 11.7527C109.949 10.5949 110.668 9.69788 111.583 9.06155C112.498 8.41638 113.524 8.0938 114.661 8.0938C115.662 8.0938 116.56 8.34568 117.355 8.84944C118.151 9.3532 118.771 10.0514 119.215 10.944H119.292V3.01642ZM114.982 21.0458C115.863 21.0458 116.628 20.8071 117.278 20.3299C117.928 19.8526 118.424 19.2384 118.766 18.4872C119.117 17.7271 119.292 16.9317 119.292 16.101V15.279C119.284 14.298 119.091 13.401 118.715 12.5879C118.347 11.766 117.843 11.1164 117.201 10.6391C116.56 10.1619 115.846 9.92325 115.059 9.92325C114.289 9.92325 113.584 10.1707 112.943 10.6656C112.301 11.1517 111.788 11.8322 111.403 12.7072C111.027 13.5821 110.839 14.5764 110.839 15.69C110.839 16.724 111.023 17.6476 111.39 18.4607C111.767 19.2738 112.271 19.9101 112.904 20.3697C113.537 20.8204 114.23 21.0458 114.982 21.0458Z" fill="black" fill-opacity="0.2"/><path d="M145.218 20.1973L148.771 8.34568H150.99L146.706 22.5173L143.909 22.5305L141.793 16.0877L139.073 22.5305H136.725L131.492 8.34568H133.749L138.008 20.1973H138.111L140.933 13.4761L139.24 8.33242H141.344L145.115 20.1973H145.218Z" fill="black" fill-opacity="0.2"/><path d="M155.711 5.37614H153.299V2.88385H155.711V5.37614ZM155.608 22.5305H153.415V8.34568H155.608V22.5305Z" fill="black" fill-opacity="0.2"/><path d="M165.832 22.2787C165.55 22.3582 165.221 22.4201 164.844 22.4642C164.477 22.5084 164.156 22.5305 163.882 22.5305H163.869C161.731 22.5305 160.662 21.4037 160.662 19.15V10.5728H158.469V8.5843H160.662V5.19055L162.843 4.39513V8.5843H165.729V10.5728H162.843V18.7656C162.843 19.2252 162.89 19.5831 162.984 19.8394C163.087 20.0868 163.237 20.2636 163.433 20.3697C163.63 20.4669 163.904 20.5243 164.254 20.542C164.913 20.5243 165.439 20.4625 165.832 20.3564V22.2787Z" fill="black" fill-opacity="0.2"/><path d="M180.007 22.5305H177.813V14.2317C177.813 12.8442 177.51 11.8013 176.903 11.1031C176.304 10.3961 175.427 10.0426 174.273 10.0426C173.64 10.0426 173.063 10.2193 172.541 10.5728C172.019 10.9264 171.6 11.408 171.284 12.0178C170.968 12.6277 170.784 13.2993 170.732 14.0329V22.5305H168.539V3.01642H170.732V10.8512H170.822C171.173 9.98511 171.716 9.30901 172.451 8.82293C173.187 8.33684 173.999 8.0938 174.889 8.0938C176.548 8.0938 177.813 8.57989 178.686 9.55206C179.566 10.5242 180.007 11.9206 180.007 13.7412V22.5305Z" fill="black" fill-opacity="0.2"/><path d="M203.351 8.12962L199.279 14.7542L203.377 22.2477H198.806L196.021 17.3064L193.053 22.2477H188.481L192.79 14.7542L188.586 8.12962H193.105L196.048 12.8537L198.727 8.12962H203.351Z" fill="black" fill-opacity="0.2"/><path d="M205.49 8.12962V22.2477H209.641V14.7814V14.347C209.641 12.8266 210.744 11.4962 212.005 11.4962C213.372 11.4962 214.265 12.5279 214.265 14.1298V22.2477H218.416V14.347C218.416 12.8266 219.44 11.4962 220.649 11.4962C222.068 11.4962 222.987 12.5279 222.987 14.1298V22.2477H227.138V14.0755C227.138 11.7677 226.586 7.58662 221.91 7.58662C219.729 7.58662 218.258 8.69978 217.575 10.003C216.734 8.42828 215.237 7.58662 213.188 7.58662C211.322 7.58662 210.061 8.37398 209.431 9.48713L208.722 8.12962H205.49Z" fill="black" fill-opacity="0.2"/><path d="M229.287 8.12962V22.2477H233.438V8.12962H229.287ZM228.735 3.75846C228.735 5.25172 229.918 6.47347 231.389 6.47347C232.807 6.47347 233.99 5.25172 233.99 3.75846C233.99 2.29236 232.807 1.04346 231.389 1.04346C229.918 1.04346 228.735 2.29236 228.735 3.75846Z" fill="black" fill-opacity="0.2"/><path d="M235.841 8.12962V22.2477H239.992V14.347C239.992 12.8266 241.095 11.4962 242.356 11.4962C243.801 11.4962 244.616 12.4465 244.616 14.1298V22.2477H248.767V13.9397C248.767 9.84008 246.901 7.58662 243.539 7.58662C241.673 7.58662 240.412 8.37398 239.782 9.48713L239.072 8.12962H235.841Z" fill="black" fill-opacity="0.2"/><path d="M257.358 22.5463C258.987 22.5463 260.511 21.949 261.693 20.9173L262.429 22.2477H265.555V3.94851L261.404 2.48241V8.97128C260.248 8.10248 258.856 7.58662 257.358 7.58662C253.47 7.58662 250.344 10.9261 250.344 15.08C250.344 19.2069 253.47 22.5463 257.358 22.5463ZM254.468 14.9986C254.468 12.9895 256.018 11.3605 257.989 11.3605C259.959 11.3605 261.535 12.9895 261.535 14.9986C261.535 17.062 259.959 18.6639 257.989 18.6639C256.018 18.6639 254.468 17.062 254.468 14.9986Z" fill="black" fill-opacity="0.2"/></svg>',
          "print-watermark-light-small":
            '<svg width="134" height="12" viewBox="0 0 134 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.22951 1.7004C4.88374 1.7004 5.46313 1.82634 5.9677 2.07822C6.47654 2.3301 6.86993 2.68362 7.14787 3.13877C7.43008 3.58951 7.57119 4.10874 7.57119 4.69646C7.57119 5.2886 7.43222 5.81445 7.15428 6.27402C6.87634 6.7336 6.48723 7.09153 5.98694 7.34783C5.49093 7.59971 4.92008 7.72565 4.27441 7.72565H2.13856V11.2652H1.0097V1.7004H4.22951ZM4.24234 6.7115C4.67422 6.7115 5.05692 6.62975 5.39044 6.46625C5.72397 6.29833 5.98266 6.06633 6.16653 5.77026C6.35467 5.47419 6.44875 5.13835 6.44875 4.76274C6.44875 4.36503 6.3504 4.01152 6.1537 3.70219C5.96129 3.38845 5.68976 3.1454 5.33913 2.97306C4.99278 2.79631 4.59511 2.70793 4.14613 2.70793H2.15139V6.7115H4.24234Z" fill="white" fill-opacity="0.2"/><path d="M10.3164 5.35267C10.5259 4.95938 10.8188 4.64564 11.1951 4.41143C11.5756 4.17281 12.0524 4.05129 12.6254 4.04687V5.07428C11.7488 5.0787 11.1416 5.29302 10.8038 5.71724C10.466 6.13704 10.295 6.66289 10.2907 7.2948V11.2652H9.20034V4.17281H10.2907V5.35267H10.3164Z" fill="white" fill-opacity="0.2"/><path d="M16.9612 11.3978C16.2044 11.3978 15.5566 11.2498 15.0178 10.9537C14.479 10.6576 14.0685 10.2312 13.7863 9.67441C13.5041 9.11762 13.363 8.45257 13.363 7.67925C13.363 6.95013 13.4977 6.31159 13.7671 5.76363C14.0407 5.21568 14.4213 4.79367 14.9088 4.4976C15.4005 4.19711 15.9671 4.04687 16.6085 4.04687C17.1986 4.04687 17.7288 4.18386 18.1991 4.45783C18.6738 4.73181 19.05 5.11847 19.328 5.61781C19.6059 6.11273 19.7534 6.68499 19.7706 7.33457V7.54006C19.7706 7.75217 19.7641 7.95765 19.7513 8.1565H14.5175C14.5261 8.88563 14.7506 9.44242 15.191 9.82687C15.6357 10.2069 16.2471 10.3969 17.0254 10.3969C17.3675 10.3969 17.7224 10.3483 18.0901 10.2511C18.4578 10.1539 18.802 10.0103 19.1227 9.82024L19.3216 10.7084C18.616 11.168 17.8293 11.3978 16.9612 11.3978ZM18.6353 7.25503C18.6353 6.82639 18.5498 6.44415 18.3787 6.10831C18.2077 5.77247 17.9704 5.51175 17.6668 5.32616C17.3675 5.13614 17.0275 5.04114 16.6469 5.04114C16.2536 5.04114 15.8965 5.13614 15.5758 5.32616C15.2551 5.51175 14.9986 5.77468 14.8061 6.11494C14.618 6.45078 14.5197 6.83081 14.5111 7.25503H18.6353Z" fill="white" fill-opacity="0.2"/><path d="M23.5869 11.3978C23.1037 11.3978 22.6141 11.3116 22.1181 11.1393C21.6263 10.967 21.1773 10.7305 20.7711 10.4301L21.1175 9.56836C21.5151 9.83349 21.9256 10.0368 22.349 10.1782C22.7723 10.3152 23.1657 10.3881 23.5291 10.3969C23.9738 10.4013 24.3266 10.3174 24.5874 10.145C24.8525 9.97269 24.9851 9.72081 24.9851 9.38939C24.9851 9.17286 24.9252 8.98726 24.8055 8.8326C24.6901 8.67794 24.5062 8.54095 24.2539 8.42164C24.0059 8.30233 23.6702 8.18743 23.2469 8.07696C22.5328 7.88694 22.0069 7.62181 21.6691 7.28155C21.3356 6.93687 21.1688 6.50823 21.1688 5.99563C21.1688 5.6156 21.2629 5.27755 21.451 4.98148C21.6434 4.68541 21.9107 4.45562 22.2528 4.29212C22.5991 4.12862 22.9946 4.04687 23.4393 4.04687C23.837 4.04687 24.2368 4.10432 24.6387 4.21921C25.0407 4.32968 25.4127 4.48214 25.7548 4.67657L25.5688 5.60455C24.8461 5.22452 24.1834 5.03451 23.5804 5.03451C23.1956 5.03451 22.8792 5.12068 22.6312 5.29302C22.3832 5.46094 22.2592 5.6863 22.2592 5.96912C22.2592 6.17239 22.3148 6.34694 22.4259 6.49276C22.5371 6.63417 22.7124 6.76453 22.9519 6.88384C23.1913 6.99873 23.5142 7.11363 23.9204 7.22852C24.6687 7.43621 25.2139 7.69914 25.5559 8.0173C25.9023 8.33105 26.0755 8.75085 26.0755 9.27671C26.0755 9.70535 25.9771 10.0787 25.7804 10.3969C25.5837 10.7151 25.2972 10.9625 24.921 11.1393C24.549 11.3116 24.1043 11.3978 23.5869 11.3978Z" fill="white" fill-opacity="0.2"/><path d="M30.6999 11.3978C29.9431 11.3978 29.2953 11.2498 28.7565 10.9537C28.2177 10.6576 27.8072 10.2312 27.525 9.67441C27.2428 9.11762 27.1017 8.45257 27.1017 7.67925C27.1017 6.95013 27.2364 6.31159 27.5058 5.76363C27.7795 5.21568 28.16 4.79367 28.6475 4.4976C29.1392 4.19711 29.7058 4.04687 30.3472 4.04687C30.9373 4.04687 31.4675 4.18386 31.9378 4.45783C32.4125 4.73181 32.7888 5.11847 33.0667 5.61781C33.3446 6.11273 33.4922 6.68499 33.5093 7.33457V7.54006C33.5093 7.75217 33.5028 7.95765 33.49 8.1565H28.2562C28.2648 8.88563 28.4893 9.44242 28.9297 9.82687C29.3744 10.2069 29.9859 10.3969 30.7641 10.3969C31.1062 10.3969 31.4611 10.3483 31.8288 10.2511C32.1965 10.1539 32.5408 10.0103 32.8615 9.82024L33.0603 10.7084C32.3547 11.168 31.568 11.3978 30.6999 11.3978ZM32.374 7.25503C32.374 6.82639 32.2885 6.44415 32.1174 6.10831C31.9464 5.77247 31.7091 5.51175 31.4055 5.32616C31.1062 5.13614 30.7662 5.04114 30.3857 5.04114C29.9923 5.04114 29.6352 5.13614 29.3145 5.32616C28.9938 5.51175 28.7373 5.77468 28.5449 6.11494C28.3567 6.45078 28.2584 6.83081 28.2498 7.25503H32.374Z" fill="white" fill-opacity="0.2"/><path d="M40.757 11.2652H39.6603V7.11584C39.6603 6.41764 39.5085 5.89399 39.2049 5.5449C38.9013 5.1958 38.4566 5.02125 37.8708 5.02125C37.5415 5.02125 37.2422 5.12068 36.9728 5.31953C36.7077 5.51396 36.4982 5.7791 36.3442 6.11494C36.1946 6.45078 36.1197 6.81535 36.1197 7.20863V11.2652H35.023V4.17281H36.1197V5.39907H36.1775C36.3528 4.97485 36.6243 4.64343 36.992 4.40481C37.3598 4.16618 37.766 4.04687 38.2107 4.04687C39.036 4.04687 39.6667 4.28991 40.1028 4.776C40.539 5.26208 40.757 5.96028 40.757 6.87058V11.2652Z" fill="white" fill-opacity="0.2"/><path d="M45.7535 11.1393C45.6124 11.1791 45.4478 11.21 45.2596 11.2321C45.0758 11.2542 44.9154 11.2652 44.7786 11.2652H44.7722C43.7032 11.2652 43.1687 10.7018 43.1687 9.57499V5.28639H42.0719V4.29212H43.1687V2.59524L44.2591 2.19754V4.29212H45.7022V5.28639H44.2591V9.38276C44.2591 9.61255 44.2826 9.79151 44.3296 9.91966C44.3809 10.0434 44.4558 10.1318 44.5541 10.1848C44.6525 10.2334 44.7893 10.2621 44.9646 10.271C45.2939 10.2621 45.5568 10.2312 45.7535 10.1782V11.1393Z" fill="white" fill-opacity="0.2"/><path d="M50.3523 11.3978C49.5955 11.3978 48.9477 11.2498 48.4089 10.9537C47.8701 10.6576 47.4596 10.2312 47.1774 9.67441C46.8952 9.11762 46.7541 8.45257 46.7541 7.67925C46.7541 6.95013 46.8888 6.31159 47.1582 5.76363C47.4318 5.21568 47.8124 4.79367 48.2999 4.4976C48.7916 4.19711 49.3582 4.04687 49.9996 4.04687C50.5896 4.04687 51.1199 4.18386 51.5902 4.45783C52.0649 4.73181 52.4411 5.11847 52.7191 5.61781C52.997 6.11273 53.1445 6.68499 53.1616 7.33457V7.54006C53.1616 7.75217 53.1552 7.95765 53.1424 8.1565H47.9086C47.9172 8.88563 48.1417 9.44242 48.5821 9.82687C49.0268 10.2069 49.6382 10.3969 50.4165 10.3969C50.7585 10.3969 51.1135 10.3483 51.4812 10.2511C51.8489 10.1539 52.1931 10.0103 52.5138 9.82024L52.7127 10.7084C52.0071 11.168 51.2204 11.3978 50.3523 11.3978ZM52.0264 7.25503C52.0264 6.82639 51.9409 6.44415 51.7698 6.10831C51.5988 5.77247 51.3615 5.51175 51.0579 5.32616C50.7585 5.13614 50.4186 5.04114 50.038 5.04114C49.6447 5.04114 49.2876 5.13614 48.9669 5.32616C48.6462 5.51175 48.3897 5.77468 48.1972 6.11494C48.0091 6.45078 47.9107 6.83081 47.9022 7.25503H52.0264Z" fill="white" fill-opacity="0.2"/><path d="M59.6462 1.50818H60.7365V11.2586H59.6462V10.0456H59.5949C59.3768 10.4477 59.0732 10.7725 58.6841 11.02C58.295 11.2674 57.8332 11.3912 57.2987 11.3912C56.7342 11.3912 56.2254 11.2409 55.7721 10.9404C55.3189 10.64 54.964 10.2224 54.7074 9.68767C54.4509 9.14856 54.3226 8.53432 54.3226 7.84496C54.3226 7.107 54.453 6.45078 54.7138 5.87632C54.9747 5.29743 55.3338 4.84891 55.7914 4.53075C56.2489 4.20816 56.762 4.04687 57.3307 4.04687C57.831 4.04687 58.28 4.17281 58.6777 4.42469C59.0753 4.67657 59.3853 5.02567 59.6077 5.47198H59.6462V1.50818ZM57.4911 10.5229C57.9315 10.5229 58.3142 10.4035 58.6392 10.1649C58.9641 9.92629 59.2122 9.61918 59.3832 9.24356C59.5585 8.86353 59.6462 8.46583 59.6462 8.05045V7.63948C59.6419 7.14898 59.5457 6.70045 59.3575 6.29391C59.1737 5.88295 58.9214 5.55815 58.6007 5.31953C58.28 5.08091 57.9229 4.96159 57.5296 4.96159C57.1447 4.96159 56.792 5.08533 56.4713 5.33279C56.1506 5.57583 55.894 5.91609 55.7016 6.35357C55.5134 6.79104 55.4194 7.28818 55.4194 7.84496C55.4194 8.36198 55.5113 8.82376 55.6952 9.23031C55.8833 9.63685 56.1356 9.95502 56.452 10.1848C56.7684 10.4102 57.1148 10.5229 57.4911 10.5229Z" fill="white" fill-opacity="0.2"/><path d="M72.6088 10.0986L74.3855 4.17281H75.4951L73.3528 11.2586L71.9546 11.2652L70.8963 8.04382L69.5365 11.2652H68.3627L65.7458 4.17281H66.8747L69.0041 10.0986H69.0555L70.4665 6.73802L69.6199 4.16618H70.6718L72.5575 10.0986H72.6088Z" fill="white" fill-opacity="0.2"/><path d="M77.8554 2.68804H76.6496V1.44189H77.8554V2.68804ZM77.8041 11.2652H76.7073V4.17281H77.8041V11.2652Z" fill="white" fill-opacity="0.2"/><path d="M82.916 11.1393C82.7749 11.1791 82.6103 11.21 82.4222 11.2321C82.2383 11.2542 82.0779 11.2652 81.9411 11.2652H81.9347C80.8657 11.2652 80.3312 10.7018 80.3312 9.57499V5.28639H79.2344V4.29212H80.3312V2.59524L81.4216 2.19754V4.29212H82.8647V5.28639H81.4216V9.38276C81.4216 9.61255 81.4451 9.79151 81.4921 9.91966C81.5434 10.0434 81.6183 10.1318 81.7166 10.1848C81.815 10.2334 81.9518 10.2621 82.1271 10.271C82.4564 10.2621 82.7193 10.2312 82.916 10.1782V11.1393Z" fill="white" fill-opacity="0.2"/><path d="M90.0035 11.2652H88.9067V7.11584C88.9067 6.42206 88.7549 5.90062 88.4513 5.55153C88.152 5.19801 87.7137 5.02125 87.1364 5.02125C86.82 5.02125 86.5314 5.10963 86.2705 5.28639C86.0097 5.46315 85.8002 5.70398 85.642 6.00889C85.4838 6.3138 85.3918 6.64964 85.3662 7.01641V11.2652H84.2694V1.50818H85.3662V5.42558H85.4111C85.5864 4.99253 85.8579 4.65448 86.2256 4.41143C86.5934 4.16839 86.9996 4.04687 87.4443 4.04687C88.2738 4.04687 88.9067 4.28991 89.3428 4.776C89.7832 5.26208 90.0035 5.96028 90.0035 6.87058V11.2652Z" fill="white" fill-opacity="0.2"/><path d="M101.676 4.06481L99.6395 7.37712L101.689 11.1238H99.4031L98.0107 8.65318L96.5263 11.1238H94.2407L96.395 7.37712L94.2932 4.06481H96.5526L98.0238 6.42687L99.3636 4.06481H101.676Z" fill="white" fill-opacity="0.2"/><path d="M102.745 4.06481V11.1238H104.821V7.3907V7.1735C104.821 6.41329 105.372 5.74812 106.003 5.74812C106.686 5.74812 107.132 6.26397 107.132 7.0649V11.1238H109.208V7.1735C109.208 6.41329 109.72 5.74812 110.324 5.74812C111.034 5.74812 111.494 6.26397 111.494 7.0649V11.1238H113.569V7.03775C113.569 5.88387 113.293 3.79331 110.955 3.79331C109.865 3.79331 109.129 4.34989 108.788 5.00149C108.367 4.21414 107.618 3.79331 106.594 3.79331C105.661 3.79331 105.031 4.18699 104.715 4.74356L104.361 4.06481H102.745Z" fill="white" fill-opacity="0.2"/><path d="M114.644 4.06481V11.1238H116.719V4.06481H114.644ZM114.368 1.87923C114.368 2.62586 114.959 3.23674 115.694 3.23674C116.404 3.23674 116.995 2.62586 116.995 1.87923C116.995 1.14618 116.404 0.521729 115.694 0.521729C114.959 0.521729 114.368 1.14618 114.368 1.87923Z" fill="white" fill-opacity="0.2"/><path d="M117.921 4.06481V11.1238H119.996V7.1735C119.996 6.41329 120.548 5.74812 121.178 5.74812C121.901 5.74812 122.308 6.22324 122.308 7.0649V11.1238H124.383V6.96987C124.383 4.92004 123.451 3.79331 121.769 3.79331C120.837 3.79331 120.206 4.18699 119.891 4.74356L119.536 4.06481H117.921Z" fill="white" fill-opacity="0.2"/><path d="M128.679 11.2732C129.494 11.2732 130.255 10.9745 130.847 10.4587L131.214 11.1238H132.778V1.97426L130.702 1.24121V4.48564C130.124 4.05124 129.428 3.79331 128.679 3.79331C126.735 3.79331 125.172 5.46304 125.172 7.54002C125.172 9.60343 126.735 11.2732 128.679 11.2732ZM127.234 7.4993C127.234 6.49474 128.009 5.68024 128.994 5.68024C129.98 5.68024 130.768 6.49474 130.768 7.4993C130.768 8.531 129.98 9.33193 128.994 9.33193C128.009 9.33193 127.234 8.531 127.234 7.4993Z" fill="white" fill-opacity="0.2"/></svg>',
          "print-watermark-light-normal":
            '<svg width="201" height="18" viewBox="0 0 201 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.34427 2.55061C7.32561 2.55061 8.1947 2.73952 8.95155 3.11734C9.71481 3.49516 10.3049 4.02543 10.7218 4.70816C11.1451 5.38426 11.3568 6.1631 11.3568 7.04468C11.3568 7.9329 11.1483 8.72168 10.7314 9.41104C10.3145 10.1004 9.73084 10.6373 8.98041 11.0217C8.23639 11.3996 7.38013 11.5885 6.41162 11.5885H3.20784V16.8979H1.51456V2.55061H6.34427ZM6.36351 10.0673C7.01132 10.0673 7.58537 9.94463 8.08566 9.69937C8.58595 9.44749 8.974 9.0995 9.2498 8.65539C9.53201 8.21129 9.67312 7.70753 9.67312 7.14411C9.67312 6.54755 9.5256 6.01728 9.23056 5.55329C8.94193 5.08267 8.53464 4.7181 8.0087 4.45959C7.48916 4.19446 6.89267 4.06189 6.2192 4.06189H3.22709V10.0673H6.36351Z" fill="white" fill-opacity="0.2"/><path d="M15.4745 8.02901C15.7888 7.43908 16.2282 6.96846 16.7926 6.61715C17.3635 6.25922 18.0786 6.07693 18.9381 6.0703V7.61142C17.6232 7.61804 16.7124 7.93952 16.2057 8.57585C15.699 9.20556 15.4425 9.99434 15.4361 10.9422V16.8979H13.8005V6.25922H15.4361V8.02901H15.4745Z" fill="white" fill-opacity="0.2"/><path d="M25.4418 17.0967C24.3066 17.0967 23.3349 16.8747 22.5267 16.4306C21.7185 15.9864 21.1028 15.3468 20.6795 14.5116C20.2562 13.6764 20.0445 12.6789 20.0445 11.5189C20.0445 10.4252 20.2465 9.46738 20.6506 8.64545C21.0611 7.82353 21.632 7.19051 22.3631 6.74641C23.1008 6.29567 23.9506 6.0703 24.9127 6.0703C25.7978 6.0703 26.5932 6.27579 27.2987 6.68675C28.0106 7.09771 28.5751 7.6777 28.992 8.42671C29.4089 9.1691 29.6302 10.0275 29.6558 11.0019V11.3101C29.6558 11.6282 29.6462 11.9365 29.627 12.2348H21.7763C21.7891 13.3284 22.1258 14.1636 22.7865 14.7403C23.4535 15.3103 24.3707 15.5954 25.5381 15.5954C26.0512 15.5954 26.5835 15.5225 27.1351 15.3766C27.6867 15.2308 28.2031 15.0154 28.6841 14.7304L28.9824 16.0627C27.9241 16.752 26.7439 17.0967 25.4418 17.0967ZM27.9529 10.8825C27.9529 10.2396 27.8246 9.66623 27.5681 9.16247C27.3115 8.65871 26.9555 8.26763 26.5002 7.98924C26.0512 7.70421 25.5413 7.5617 24.9704 7.5617C24.3803 7.5617 23.8448 7.70421 23.3637 7.98924C22.8827 8.26763 22.4978 8.66202 22.2092 9.17241C21.927 9.67617 21.7795 10.2462 21.7666 10.8825H27.9529Z" fill="white" fill-opacity="0.2"/><path d="M35.3803 17.0967C34.6555 17.0967 33.9211 16.9675 33.1771 16.7089C32.4395 16.4504 31.766 16.0958 31.1567 15.6451L31.6762 14.3525C32.2727 14.7502 32.8885 15.0551 33.5234 15.2673C34.1584 15.4727 34.7485 15.5821 35.2937 15.5954C35.9608 15.602 36.4899 15.4761 36.8812 15.2175C37.2788 14.959 37.4777 14.5812 37.4777 14.0841C37.4777 13.7593 37.3879 13.4809 37.2083 13.2489C37.0351 13.0169 36.7593 12.8114 36.3809 12.6325C36.0089 12.4535 35.5054 12.2811 34.8704 12.1154C33.7992 11.8304 33.0103 11.4327 32.5036 10.9223C32.0033 10.4053 31.7532 9.76234 31.7532 8.99345C31.7532 8.4234 31.8943 7.91632 32.1765 7.47222C32.4651 7.02811 32.866 6.68344 33.3791 6.43818C33.8987 6.19293 34.492 6.0703 35.159 6.0703C35.7555 6.0703 36.3552 6.15647 36.9581 6.32881C37.561 6.49452 38.119 6.72321 38.6322 7.01486L38.3532 8.40683C37.2692 7.83678 36.275 7.55176 35.3707 7.55176C34.7934 7.55176 34.3188 7.68101 33.9468 7.93952C33.5748 8.1914 33.3888 8.52945 33.3888 8.95367C33.3888 9.25858 33.4721 9.52041 33.6389 9.73914C33.8057 9.95125 34.0686 10.1468 34.4278 10.3258C34.787 10.4981 35.2712 10.6704 35.8806 10.8428C37.003 11.1543 37.8208 11.5487 38.3339 12.026C38.8534 12.4966 39.1132 13.1263 39.1132 13.9151C39.1132 14.558 38.9657 15.1181 38.6707 15.5954C38.3756 16.0726 37.9459 16.4438 37.3814 16.7089C36.8234 16.9675 36.1564 17.0967 35.3803 17.0967Z" fill="white" fill-opacity="0.2"/><path d="M46.0499 17.0967C44.9146 17.0967 43.9429 16.8747 43.1348 16.4306C42.3266 15.9864 41.7109 15.3468 41.2875 14.5116C40.8642 13.6764 40.6526 12.6789 40.6526 11.5189C40.6526 10.4252 40.8546 9.46738 41.2587 8.64545C41.6692 7.82353 42.24 7.19051 42.9712 6.74641C43.7088 6.29567 44.5587 6.0703 45.5208 6.0703C46.4059 6.0703 47.2012 6.27579 47.9068 6.68675C48.6187 7.09771 49.1831 7.6777 49.6 8.42671C50.017 9.1691 50.2382 10.0275 50.2639 11.0019V11.3101C50.2639 11.6282 50.2543 11.9365 50.235 12.2348H42.3843C42.3972 13.3284 42.7339 14.1636 43.3945 14.7403C44.0616 15.3103 44.9788 15.5954 46.1461 15.5954C46.6592 15.5954 47.1916 15.5225 47.7432 15.3766C48.2948 15.2308 48.8111 15.0154 49.2922 14.7304L49.5904 16.0627C48.5321 16.752 47.352 17.0967 46.0499 17.0967ZM48.561 10.8825C48.561 10.2396 48.4327 9.66623 48.1761 9.16247C47.9196 8.65871 47.5636 8.26763 47.1082 7.98924C46.6592 7.70421 46.1493 7.5617 45.5785 7.5617C44.9884 7.5617 44.4528 7.70421 43.9718 7.98924C43.4907 8.26763 43.1059 8.66202 42.8173 9.17241C42.5351 9.67617 42.3875 10.2462 42.3747 10.8825H48.561Z" fill="white" fill-opacity="0.2"/><path d="M61.1356 16.8979H59.4904V10.6738C59.4904 9.62646 59.2627 8.84099 58.8073 8.31734C58.3519 7.7937 57.6848 7.53187 56.8061 7.53187C56.3123 7.53187 55.8633 7.68101 55.4592 7.97929C55.0615 8.27095 54.7473 8.66865 54.5163 9.17241C54.2919 9.67617 54.1796 10.223 54.1796 10.813V16.8979H52.5344V6.25922H54.1796V8.09861H54.2662C54.5292 7.46228 54.9365 6.96514 55.4881 6.60721C56.0397 6.24927 56.649 6.0703 57.316 6.0703C58.5539 6.0703 59.5 6.43487 60.1542 7.164C60.8084 7.89312 61.1356 8.94042 61.1356 10.3059V16.8979Z" fill="white" fill-opacity="0.2"/><path d="M68.6303 16.7089C68.4186 16.7686 68.1717 16.815 67.8895 16.8481C67.6137 16.8813 67.3731 16.8979 67.1679 16.8979H67.1583C65.5548 16.8979 64.753 16.0527 64.753 14.3625V7.92958H63.1079V6.43818H64.753V3.89286L66.3886 3.2963V6.43818H68.5533V7.92958H66.3886V14.0741C66.3886 14.4188 66.4239 14.6873 66.4944 14.8795C66.5714 15.0651 66.6836 15.1977 66.8312 15.2772C66.9787 15.3501 67.1839 15.3932 67.4469 15.4065C67.9408 15.3932 68.3352 15.3468 68.6303 15.2673V16.7089Z" fill="white" fill-opacity="0.2"/><path d="M75.5285 17.0967C74.3932 17.0967 73.4215 16.8747 72.6133 16.4306C71.8052 15.9864 71.1894 15.3468 70.7661 14.5116C70.3428 13.6764 70.1311 12.6789 70.1311 11.5189C70.1311 10.4252 70.3332 9.46738 70.7373 8.64545C71.1478 7.82353 71.7186 7.19051 72.4498 6.74641C73.1874 6.29567 74.0372 6.0703 74.9993 6.0703C75.8845 6.0703 76.6798 6.27579 77.3853 6.68675C78.0973 7.09771 78.6617 7.6777 79.0786 8.42671C79.4955 9.1691 79.7168 10.0275 79.7425 11.0019V11.3101C79.7425 11.6282 79.7328 11.9365 79.7136 12.2348H71.8629C71.8757 13.3284 72.2125 14.1636 72.8731 14.7403C73.5402 15.3103 74.4574 15.5954 75.6247 15.5954C76.1378 15.5954 76.6702 15.5225 77.2218 15.3766C77.7734 15.2308 78.2897 15.0154 78.7708 14.7304L79.069 16.0627C78.0107 16.752 76.8305 17.0967 75.5285 17.0967ZM78.0396 10.8825C78.0396 10.2396 77.9113 9.66623 77.6547 9.16247C77.3982 8.65871 77.0422 8.26763 76.5868 7.98924C76.1378 7.70421 75.6279 7.5617 75.0571 7.5617C74.467 7.5617 73.9314 7.70421 73.4504 7.98924C72.9693 8.26763 72.5845 8.66202 72.2959 9.17241C72.0136 9.67617 71.8661 10.2462 71.8533 10.8825H78.0396Z" fill="white" fill-opacity="0.2"/><path d="M89.4692 2.26227H91.1048V16.8879H89.4692V15.0684H89.3923C89.0652 15.6716 88.6098 16.1588 88.0261 16.53C87.4424 16.9012 86.7497 17.0868 85.948 17.0868C85.1013 17.0868 84.3381 16.8614 83.6582 16.4107C82.9783 15.9599 82.446 15.3335 82.0611 14.5315C81.6763 13.7228 81.4839 12.8015 81.4839 11.7674C81.4839 10.6605 81.6795 9.67617 82.0707 8.81448C82.462 7.94615 83.0008 7.27337 83.6871 6.79612C84.3734 6.31224 85.143 6.0703 85.9961 6.0703C86.7465 6.0703 87.42 6.25922 88.0165 6.63704C88.613 7.01486 89.078 7.5385 89.4115 8.20798H89.4692V2.26227ZM86.2366 15.7843C86.8972 15.7843 87.4713 15.6053 87.9588 15.2474C88.4462 14.8894 88.8182 14.4288 89.0748 13.8653C89.3378 13.2953 89.4692 12.6987 89.4692 12.0757V11.4592C89.4628 10.7235 89.3185 10.0507 89.0363 9.44086C88.7605 8.82442 88.3821 8.33723 87.901 7.97929C87.42 7.62136 86.8844 7.44239 86.2943 7.44239C85.7171 7.44239 85.1879 7.62799 84.7069 7.99918C84.2258 8.36374 83.841 8.87413 83.5524 9.53035C83.2702 10.1866 83.129 10.9323 83.129 11.7674C83.129 12.543 83.2669 13.2356 83.5427 13.8455C83.825 14.4553 84.2034 14.9325 84.678 15.2772C85.1526 15.6153 85.6722 15.7843 86.2366 15.7843Z" fill="white" fill-opacity="0.2"/><path d="M108.913 15.1479L111.578 6.25922H113.243L110.029 16.8879L107.932 16.8979L106.344 12.0657L104.305 16.8979H102.544L98.6188 6.25922H100.312L103.506 15.1479H103.583L105.7 10.107L104.43 6.24927H106.008L108.836 15.1479H108.913Z" fill="white" fill-opacity="0.2"/><path d="M116.783 4.03206H114.974V2.16284H116.783V4.03206ZM116.706 16.8979H115.061V6.25922H116.706V16.8979Z" fill="white" fill-opacity="0.2"/><path d="M124.374 16.7089C124.162 16.7686 123.915 16.815 123.633 16.8481C123.357 16.8813 123.117 16.8979 122.912 16.8979H122.902C121.299 16.8979 120.497 16.0527 120.497 14.3625V7.92958H118.852V6.43818H120.497V3.89286L122.132 3.2963V6.43818H124.297V7.92958H122.132V14.0741C122.132 14.4188 122.168 14.6873 122.238 14.8795C122.315 15.0651 122.427 15.1977 122.575 15.2772C122.722 15.3501 122.928 15.3932 123.191 15.4065C123.685 15.3932 124.079 15.3468 124.374 15.2673V16.7089Z" fill="white" fill-opacity="0.2"/><path d="M135.005 16.8979H133.36V10.6738C133.36 9.63309 133.132 8.85093 132.677 8.32729C132.228 7.79701 131.571 7.53187 130.705 7.53187C130.23 7.53187 129.797 7.66444 129.406 7.92958C129.015 8.19472 128.7 8.55597 128.463 9.01333C128.226 9.47069 128.088 9.97445 128.049 10.5246V16.8979H126.404V2.26227H128.049V8.13838H128.117C128.38 7.48879 128.787 6.98171 129.338 6.61715C129.89 6.25259 130.499 6.0703 131.166 6.0703C132.411 6.0703 133.36 6.43487 134.014 7.164C134.675 7.89312 135.005 8.94042 135.005 10.3059V16.8979Z" fill="white" fill-opacity="0.2"/><path d="M152.513 6.09722L149.459 11.0657L152.533 16.6857H149.105L147.016 12.9798L144.789 16.6857H141.361L144.592 11.0657L141.44 6.09722H144.829L147.036 9.6403L149.045 6.09722H152.513Z" fill="white" fill-opacity="0.2"/><path d="M154.118 6.09722V16.6857H157.231V11.086V10.7602C157.231 9.61994 158.058 8.62218 159.004 8.62218C160.029 8.62218 160.699 9.39595 160.699 10.5973V16.6857H163.812V10.7602C163.812 9.61994 164.58 8.62218 165.487 8.62218C166.551 8.62218 167.24 9.39595 167.24 10.5973V16.6857H170.353V10.5566C170.353 8.8258 169.94 5.68997 166.432 5.68997C164.797 5.68997 163.694 6.52483 163.181 7.50224C162.551 6.32121 161.428 5.68997 159.891 5.68997C158.492 5.68997 157.546 6.28048 157.073 7.11535L156.541 6.09722H154.118Z" fill="white" fill-opacity="0.2"/><path d="M171.965 6.09722V16.6857H175.078V6.09722H171.965ZM171.552 2.81885C171.552 3.93879 172.438 4.8551 173.542 4.8551C174.606 4.8551 175.492 3.93879 175.492 2.81885C175.492 1.71927 174.606 0.782593 173.542 0.782593C172.438 0.782593 171.552 1.71927 171.552 2.81885Z" fill="white" fill-opacity="0.2"/><path d="M176.881 6.09722V16.6857H179.994V10.7602C179.994 9.61994 180.822 8.62218 181.767 8.62218C182.851 8.62218 183.462 9.33487 183.462 10.5973V16.6857H186.575V10.4548C186.575 7.38006 185.176 5.68997 182.654 5.68997C181.255 5.68997 180.309 6.28048 179.836 7.11535L179.304 6.09722H176.881Z" fill="white" fill-opacity="0.2"/><path d="M193.019 16.9097C194.24 16.9097 195.383 16.4618 196.27 15.688L196.822 16.6857H199.166V2.96139L196.053 1.86181V6.72846C195.186 6.07686 194.142 5.68997 193.019 5.68997C190.103 5.68997 187.758 8.19456 187.758 11.31C187.758 14.4051 190.103 16.9097 193.019 16.9097ZM190.851 11.2489C190.851 9.74212 192.014 8.52036 193.492 8.52036C194.969 8.52036 196.152 9.74212 196.152 11.2489C196.152 12.7965 194.969 13.9979 193.492 13.9979C192.014 13.9979 190.851 12.7965 190.851 11.2489Z" fill="white" fill-opacity="0.2"/></svg>',
          "print-watermark-light-big":
            '<svg width="268" height="24" viewBox="0 0 268 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.45903 3.40087C9.76748 3.40087 10.9263 3.65275 11.9354 4.15651C12.9531 4.66027 13.7399 5.3673 14.2957 6.27761C14.8602 7.17908 15.1424 8.21753 15.1424 9.39297C15.1424 10.5773 14.8644 11.629 14.3086 12.5481C13.7527 13.4673 12.9745 14.1831 11.9739 14.6957C10.9819 15.1995 9.84017 15.4514 8.54882 15.4514H4.27712V22.5305H2.01941V3.40087H8.45903ZM8.48469 13.4231C9.34843 13.4231 10.1138 13.2596 10.7809 12.9326C11.4479 12.5967 11.9653 12.1327 12.3331 11.5406C12.7093 10.9484 12.8975 10.2768 12.8975 9.52554C12.8975 8.73013 12.7008 8.0231 12.3074 7.40444C11.9226 6.77695 11.3795 6.29087 10.6783 5.94619C9.98555 5.59267 9.19022 5.41591 8.29227 5.41591H4.30278V13.4231H8.48469Z" fill="white" fill-opacity="0.2"/><path d="M20.6327 10.7054C21.0518 9.91883 21.6376 9.29134 22.3902 8.82293C23.1513 8.34568 24.1048 8.10264 25.2508 8.0938V10.1486C23.4976 10.1575 22.2833 10.5861 21.6077 11.4345C20.9321 12.2741 20.59 13.3258 20.5814 14.5897V22.5305H18.4007V8.34568H20.5814V10.7054H20.6327Z" fill="white" fill-opacity="0.2"/><path d="M33.9225 22.7957C32.4088 22.7957 31.1132 22.4996 30.0356 21.9075C28.9581 21.3153 28.1371 20.4625 27.5726 19.3489C27.0082 18.2353 26.726 16.9052 26.726 15.3586C26.726 13.9003 26.9954 12.6232 27.5342 11.5273C28.0815 10.4314 28.8426 9.58741 29.8175 8.99527C30.801 8.39429 31.9341 8.0938 33.2169 8.0938C34.3971 8.0938 35.4575 8.36778 36.3983 8.91573C37.3475 9.46368 38.1001 10.237 38.656 11.2357C39.2119 12.2255 39.5069 13.37 39.5411 14.6692V15.0802C39.5411 15.5044 39.5283 15.9154 39.5026 16.3131H29.035C29.0521 17.7713 29.5011 18.8849 30.382 19.6538C31.2714 20.4139 32.4943 20.7939 34.0507 20.7939C34.7349 20.7939 35.4447 20.6967 36.1802 20.5022C36.9157 20.3078 37.6041 20.0206 38.2455 19.6405L38.6431 21.417C37.2321 22.3361 35.6585 22.7957 33.9225 22.7957ZM37.2706 14.5101C37.2706 13.6528 37.0995 12.8884 36.7574 12.2167C36.4154 11.545 35.9407 11.0236 35.3335 10.6524C34.7349 10.2723 34.055 10.0823 33.2939 10.0823C32.5071 10.0823 31.793 10.2723 31.1516 10.6524C30.5102 11.0236 29.9971 11.5494 29.6123 12.2299C29.236 12.9016 29.0393 13.6617 29.0222 14.5101H37.2706Z" fill="white" fill-opacity="0.2"/><path d="M47.1737 22.7957C46.2073 22.7957 45.2281 22.6233 44.2361 22.2787C43.2526 21.934 42.3547 21.4611 41.5423 20.8602L42.235 19.1368C43.0303 19.667 43.8513 20.0736 44.6979 20.3564C45.5446 20.6304 46.3314 20.7762 47.0583 20.7939C47.9477 20.8027 48.6532 20.6348 49.1749 20.2901C49.7051 19.9454 49.9702 19.4417 49.9702 18.7788C49.9702 18.3458 49.8505 17.9746 49.611 17.6653C49.3801 17.3559 49.0124 17.082 48.5078 16.8433C48.0118 16.6047 47.3405 16.3749 46.4938 16.154C45.0657 15.7739 44.0138 15.2437 43.3382 14.5632C42.6711 13.8738 42.3376 13.0165 42.3376 11.9913C42.3376 11.2313 42.5257 10.5552 42.902 9.96302C43.2869 9.37088 43.8214 8.91131 44.5055 8.5843C45.1982 8.2573 45.9893 8.0938 46.8787 8.0938C47.674 8.0938 48.4736 8.20869 49.2775 8.43848C50.0814 8.65943 50.8254 8.96433 51.5096 9.3532L51.1375 11.2092C49.6923 10.4491 48.3667 10.0691 47.1609 10.0691C46.3912 10.0691 45.7584 10.2414 45.2624 10.5861C44.7663 10.9219 44.5183 11.3727 44.5183 11.9383C44.5183 12.3448 44.6295 12.6939 44.8519 12.9856C45.0742 13.2684 45.4248 13.5291 45.9038 13.7677C46.3827 13.9975 47.0283 14.2273 47.8408 14.4571C49.3374 14.8725 50.4277 15.3983 51.1119 16.0347C51.8046 16.6622 52.151 17.5018 52.151 18.5535C52.151 19.4107 51.9543 20.1576 51.5609 20.7939C51.1675 21.4302 50.5945 21.9251 49.8419 22.2787C49.0979 22.6233 48.2085 22.7957 47.1737 22.7957Z" fill="white" fill-opacity="0.2"/><path d="M61.3999 22.7957C59.8862 22.7957 58.5906 22.4996 57.513 21.9075C56.4355 21.3153 55.6145 20.4625 55.0501 19.3489C54.4856 18.2353 54.2034 16.9052 54.2034 15.3586C54.2034 13.9003 54.4728 12.6232 55.0116 11.5273C55.5589 10.4314 56.32 9.58741 57.295 8.99527C58.2784 8.39429 59.4116 8.0938 60.6944 8.0938C61.8745 8.0938 62.935 8.36778 63.8757 8.91573C64.8249 9.46368 65.5775 10.237 66.1334 11.2357C66.6893 12.2255 66.9843 13.37 67.0185 14.6692V15.0802C67.0185 15.5044 67.0057 15.9154 66.98 16.3131H56.5125C56.5296 17.7713 56.9785 18.8849 57.8594 19.6538C58.7488 20.4139 59.9717 20.7939 61.5282 20.7939C62.2123 20.7939 62.9221 20.6967 63.6576 20.5022C64.3931 20.3078 65.0815 20.0206 65.7229 19.6405L66.1206 21.417C64.7095 22.3361 63.1359 22.7957 61.3999 22.7957ZM64.748 14.5101C64.748 13.6528 64.5769 12.8884 64.2349 12.2167C63.8928 11.545 63.4182 11.0236 62.811 10.6524C62.2123 10.2723 61.5324 10.0823 60.7713 10.0823C59.9845 10.0823 59.2705 10.2723 58.6291 10.6524C57.9877 11.0236 57.4745 11.5494 57.0897 12.2299C56.7134 12.9016 56.5167 13.6617 56.4996 14.5101H64.748Z" fill="white" fill-opacity="0.2"/><path d="M81.5141 22.5305H79.3205V14.2317C79.3205 12.8353 79.0169 11.788 78.4097 11.0899C77.8025 10.3917 76.9131 10.0426 75.7415 10.0426C75.083 10.0426 74.4844 10.2414 73.9456 10.6391C73.4154 11.028 72.9963 11.5583 72.6885 12.2299C72.3891 12.9016 72.2395 13.6308 72.2395 14.4173V22.5305H70.0459V8.34568H72.2395V10.7982H72.3549C72.7056 9.94976 73.2486 9.28692 73.9841 8.80967C74.7196 8.33242 75.532 8.0938 76.4214 8.0938C78.0719 8.0938 79.3333 8.57989 80.2056 9.55206C81.0779 10.5242 81.5141 11.9206 81.5141 13.7412V22.5305Z" fill="white" fill-opacity="0.2"/><path d="M91.507 22.2787C91.2248 22.3582 90.8956 22.4201 90.5193 22.4642C90.1516 22.5084 89.8309 22.5305 89.5572 22.5305H89.5444C87.4064 22.5305 86.3374 21.4037 86.3374 19.15V10.5728H84.1438V8.5843H86.3374V5.19055L88.5181 4.39513V8.5843H91.4044V10.5728H88.5181V18.7656C88.5181 19.2252 88.5652 19.5831 88.6592 19.8394C88.7619 20.0868 88.9115 20.2636 89.1082 20.3697C89.3049 20.4669 89.5786 20.5243 89.9292 20.542C90.5877 20.5243 91.1136 20.4625 91.507 20.3564V22.2787Z" fill="white" fill-opacity="0.2"/><path d="M100.705 22.7957C99.191 22.7957 97.8953 22.4996 96.8178 21.9075C95.7403 21.3153 94.9193 20.4625 94.3548 19.3489C93.7904 18.2353 93.5082 16.9052 93.5082 15.3586C93.5082 13.9003 93.7776 12.6232 94.3164 11.5273C94.8637 10.4314 95.6248 9.58741 96.5997 8.99527C97.5832 8.39429 98.7163 8.0938 99.9991 8.0938C101.179 8.0938 102.24 8.36778 103.18 8.91573C104.13 9.46368 104.882 10.237 105.438 11.2357C105.994 12.2255 106.289 13.37 106.323 14.6692V15.0802C106.323 15.5044 106.31 15.9154 106.285 16.3131H95.8172C95.8343 17.7713 96.2833 18.8849 97.1642 19.6538C98.0536 20.4139 99.2765 20.7939 100.833 20.7939C101.517 20.7939 102.227 20.6967 102.962 20.5022C103.698 20.3078 104.386 20.0206 105.028 19.6405L105.425 21.417C104.014 22.3361 102.441 22.7957 100.705 22.7957ZM104.053 14.5101C104.053 13.6528 103.882 12.8884 103.54 12.2167C103.198 11.545 102.723 11.0236 102.116 10.6524C101.517 10.2723 100.837 10.0823 100.076 10.0823C99.2893 10.0823 98.5752 10.2723 97.9338 10.6524C97.2924 11.0236 96.7793 11.5494 96.3945 12.2299C96.0182 12.9016 95.8215 13.6617 95.8044 14.5101H104.053Z" fill="white" fill-opacity="0.2"/><path d="M119.292 3.01642H121.473V22.5173H119.292V20.0913H119.19C118.754 20.8955 118.146 21.5451 117.368 22.04C116.59 22.535 115.666 22.7824 114.597 22.7824C113.468 22.7824 112.451 22.4819 111.544 21.8809C110.638 21.28 109.928 20.4448 109.415 19.3754C108.902 18.2972 108.645 17.0687 108.645 15.69C108.645 14.2141 108.906 12.9016 109.428 11.7527C109.949 10.5949 110.668 9.69788 111.583 9.06155C112.498 8.41638 113.524 8.0938 114.661 8.0938C115.662 8.0938 116.56 8.34568 117.355 8.84944C118.151 9.3532 118.771 10.0514 119.215 10.944H119.292V3.01642ZM114.982 21.0458C115.863 21.0458 116.628 20.8071 117.278 20.3299C117.928 19.8526 118.424 19.2384 118.766 18.4872C119.117 17.7271 119.292 16.9317 119.292 16.101V15.279C119.284 14.298 119.091 13.401 118.715 12.5879C118.347 11.766 117.843 11.1164 117.201 10.6391C116.56 10.1619 115.846 9.92325 115.059 9.92325C114.289 9.92325 113.584 10.1707 112.943 10.6656C112.301 11.1517 111.788 11.8322 111.403 12.7072C111.027 13.5821 110.839 14.5764 110.839 15.69C110.839 16.724 111.023 17.6476 111.39 18.4607C111.767 19.2738 112.271 19.9101 112.904 20.3697C113.537 20.8204 114.23 21.0458 114.982 21.0458Z" fill="white" fill-opacity="0.2"/><path d="M145.218 20.1973L148.771 8.34568H150.99L146.706 22.5173L143.909 22.5305L141.793 16.0877L139.073 22.5305H136.725L131.492 8.34568H133.749L138.008 20.1973H138.111L140.933 13.4761L139.24 8.33242H141.344L145.115 20.1973H145.218Z" fill="white" fill-opacity="0.2"/><path d="M155.711 5.37614H153.299V2.88385H155.711V5.37614ZM155.608 22.5305H153.415V8.34568H155.608V22.5305Z" fill="white" fill-opacity="0.2"/><path d="M165.832 22.2787C165.55 22.3582 165.221 22.4201 164.844 22.4642C164.477 22.5084 164.156 22.5305 163.882 22.5305H163.869C161.731 22.5305 160.662 21.4037 160.662 19.15V10.5728H158.469V8.5843H160.662V5.19055L162.843 4.39513V8.5843H165.729V10.5728H162.843V18.7656C162.843 19.2252 162.89 19.5831 162.984 19.8394C163.087 20.0868 163.237 20.2636 163.433 20.3697C163.63 20.4669 163.904 20.5243 164.254 20.542C164.913 20.5243 165.439 20.4625 165.832 20.3564V22.2787Z" fill="white" fill-opacity="0.2"/><path d="M180.007 22.5305H177.813V14.2317C177.813 12.8442 177.51 11.8013 176.903 11.1031C176.304 10.3961 175.427 10.0426 174.273 10.0426C173.64 10.0426 173.063 10.2193 172.541 10.5728C172.019 10.9264 171.6 11.408 171.284 12.0178C170.968 12.6277 170.784 13.2993 170.732 14.0329V22.5305H168.539V3.01642H170.732V10.8512H170.822C171.173 9.98511 171.716 9.30901 172.451 8.82293C173.187 8.33684 173.999 8.0938 174.889 8.0938C176.548 8.0938 177.813 8.57989 178.686 9.55206C179.566 10.5242 180.007 11.9206 180.007 13.7412V22.5305Z" fill="white" fill-opacity="0.2"/><path d="M203.351 8.12962L199.279 14.7542L203.377 22.2477H198.806L196.021 17.3064L193.053 22.2477H188.481L192.79 14.7542L188.586 8.12962H193.105L196.048 12.8537L198.727 8.12962H203.351Z" fill="white" fill-opacity="0.2"/><path d="M205.49 8.12962V22.2477H209.641V14.7814V14.347C209.641 12.8266 210.744 11.4962 212.005 11.4962C213.372 11.4962 214.265 12.5279 214.265 14.1298V22.2477H218.416V14.347C218.416 12.8266 219.44 11.4962 220.649 11.4962C222.068 11.4962 222.987 12.5279 222.987 14.1298V22.2477H227.138V14.0755C227.138 11.7677 226.586 7.58662 221.91 7.58662C219.729 7.58662 218.258 8.69978 217.575 10.003C216.734 8.42828 215.237 7.58662 213.188 7.58662C211.322 7.58662 210.061 8.37398 209.431 9.48713L208.722 8.12962H205.49Z" fill="white" fill-opacity="0.2"/><path d="M229.287 8.12962V22.2477H233.438V8.12962H229.287ZM228.735 3.75846C228.735 5.25172 229.918 6.47347 231.389 6.47347C232.807 6.47347 233.99 5.25172 233.99 3.75846C233.99 2.29236 232.807 1.04346 231.389 1.04346C229.918 1.04346 228.735 2.29236 228.735 3.75846Z" fill="white" fill-opacity="0.2"/><path d="M235.841 8.12962V22.2477H239.992V14.347C239.992 12.8266 241.095 11.4962 242.356 11.4962C243.801 11.4962 244.616 12.4465 244.616 14.1298V22.2477H248.767V13.9397C248.767 9.84008 246.901 7.58662 243.539 7.58662C241.673 7.58662 240.412 8.37398 239.782 9.48713L239.072 8.12962H235.841Z" fill="white" fill-opacity="0.2"/><path d="M257.358 22.5463C258.987 22.5463 260.511 21.949 261.693 20.9173L262.429 22.2477H265.555V3.94851L261.404 2.48241V8.97128C260.248 8.10248 258.856 7.58662 257.358 7.58662C253.47 7.58662 250.344 10.9261 250.344 15.08C250.344 19.2069 253.47 22.5463 257.358 22.5463ZM254.468 14.9986C254.468 12.9895 256.018 11.3605 257.989 11.3605C259.959 11.3605 261.535 12.9895 261.535 14.9986C261.535 17.062 259.959 18.6639 257.989 18.6639C256.018 18.6639 254.468 17.062 254.468 14.9986Z" fill="white" fill-opacity="0.2"/></svg>',
        },
        d = {
          big: { width: 263, height: 20 },
          normal: { width: 197, height: 15 },
          small: { width: 131, height: 11 },
        };
      function l(e) {
        const t = r[e];
        return `data:image/svg+xml;base64,${Buffer.from(t).toString("base64")}`;
      }
      function s(e = "") {
        var t;
        const { sheets: i } = (0, n.nZ)();
        if (!i.value || !i.value.length) return;
        const r = i.value.find((t) => t.id === e),
          d =
            null !== (t = r.fillColor) && void 0 !== t
              ? t
              : (function (e) {
                  var t, i, r, d, l;
                  const s =
                    null ===
                      (t = (0, o.fl)().smartColorThemes.find((t) =>
                        t.idList.includes(e),
                      )) || void 0 === t
                      ? void 0
                      : t.id;
                  if (s) {
                    const t = (0, a.B6)(s, e);
                    return null ===
                      (r =
                        null === (i = null == t ? void 0 : t.theme) ||
                        void 0 === i
                          ? void 0
                          : i.map) || void 0 === r
                      ? void 0
                      : r.fillColor;
                  }
                  {
                    const t = n.HG.getColorThemeById(e);
                    return null ===
                      (l =
                        null === (d = null == t ? void 0 : t.theme) ||
                        void 0 === d
                          ? void 0
                          : d.map) || void 0 === l
                      ? void 0
                      : l.fillColor;
                  }
                })(r.colorThemeId);
        return d ? d.slice(0, 7) : "#FFFFFF";
      }
      function c() {
        return Object.assign({ url: l("print-watermark-dark-small") }, d.small);
      }
    },
    12455: (e, t, i) => {
      i.d(t, { A: () => a, r: () => o });
      var n = i(78152);
      const o = () => {
          const e = (0, n.JS)("frame");
          return null == e ? void 0 : e();
        },
        a = () => {
          const e = (0, n.JS)("editor");
          return null == e ? void 0 : e();
        };
    },
    32652: (e, t, i) => {
      i.d(t, { X: () => d });
      var n = i(77412),
        o = i(2954),
        a = i(78152);
      const r = ["editor.addSubTopic", "editor.addTopic", "editor.showEditBox"],
        d = (0, n.Q_)("tutorial", () => {
          const e = (0, o.iH)(0),
            t = (0, o.iH)(!0),
            i = (0, o.Fl)(() =>
              r.map((e) => ({ key: (0, a.f7)().keybindingByCommandId(e) })),
            ),
            n = (0, o.Fl)(() =>
              (0, a.f7)().keybindingByCommandId(r[e.value > 2 ? 2 : e.value]),
            );
          return {
            step: e,
            actionMode: t,
            next: () => {
              e.value !== r.length &&
                (e.value !== r.length - 1
                  ? ((t.value = !1),
                    setTimeout(() => {
                      e.value++, (t.value = !0);
                    }, 1100))
                  : e.value++);
            },
            tutoriallist: i,
            currentKey: n,
            changeMode: (e) => (t.value = e),
            changeStep: (t) => (e.value = t),
          };
        });
    },
    46016: (e, t, i) => {
      i.d(t, { $: () => d });
      var n = i(77412),
        o = i(2954),
        a = i(63111),
        r = i(64805);
      const d = (0, n.Q_)("workbench", () => {
        const e = (0, o.iH)(!1),
          t = (0, o.iH)(!1),
          i = (0, o.iH)(r.It.TOPIC),
          n = (0, o.iH)({}),
          d = (0, o.iH)(!1),
          l = (0, o.iH)(!1),
          s = (0, o.iH)(!1),
          c = (0, o.iH)(!1),
          u = (0, o.iH)(!1),
          h = (0, o.iH)(a.hO),
          p = (0, o.Fl)(() => h.value === a.Pq),
          m = (0, o.iH)(!1),
          f = (0, o.iH)(r.ll.MARKER),
          v = (0, o.iH)(!1),
          g = (0, o.iH)(!1),
          C = (0, o.iH)(r.QN.FORMAT),
          y = (0, o.iH)({
            [r.QN.FORMAT]: r.zZ.TOPIC,
            [r.QN.THEME]: r.x9.MAP,
            [r.QN.IMAGE]: r.ll.MARKER,
          }),
          b = (0, o.iH)(null),
          w = (0, o.iH)({ popover: "" }),
          k = (0, o.iH)(""),
          T = (0, o.iH)(""),
          I = (0, o.iH)("none");
        return {
          isWorkbenchReady: e,
          updateWorkbenchReady: (t) => {
            e.value = t;
          },
          zenMode: d,
          zenModeNightMode: l,
          setZenMode: (e) => (d.value = e),
          setZenModeNightMode: (e) => (l.value = e),
          pitchMode: s,
          pitchPresenterViewMode: c,
          pitchRehearseMode: u,
          setPitchMode: ({ mode: e, isPresenterView: t, isRehearse: i }) => {
            "boolean" == typeof e && (s.value = e),
              "boolean" == typeof t && (c.value = t),
              "boolean" == typeof i && (u.value = i);
          },
          editorMode: h,
          setEditorMode: (e) => (h.value = e),
          isOutlinerMode: p,
          mapshotMode: m,
          setMapshotMode: (e) => (m.value = e),
          iconPanelTab: f,
          isIconPanelVisible: v,
          updateIconPanel: ({ visible: e, tab: t }) => {
            "boolean" == typeof e && (v.value = e), t && (f.value = t);
          },
          isRightbarVisible: g,
          rightBarPanel: C,
          rightPanelTab: y,
          rightPanelWin: b,
          rightPanelTabConfig: w,
          updateRightBarPanel: ({
            visible: e = null,
            panel: t = null,
            tab: i = null,
            win: n = null,
            tabConfig: o = { popover: "" },
          }) => {
            "boolean" == typeof e && (g.value = e),
              t && (C.value = t),
              i && t && (y.value[t] = i),
              n && (b.value = n),
              (w.value = o);
          },
          updateRightBarPanelTab: ({ panel: e, tab: t }) => {
            t && e && (y.value[e] = t);
          },
          isSearchPanelVisible: t,
          searchPanelTab: i,
          searchPanelHighlightParam: n,
          updateSearchPanel: ({ visible: e, tab: n }) => {
            "boolean" == typeof e && (t.value = e), n && (i.value = n);
          },
          updateSearchPanelHighlightItem: (e) => {
            n.value = e;
          },
          userSelectedColorThemeTab: k,
          updateUserSelectedColorThemeTab: (e) => {
            k.value = e;
          },
          popoverEditorVisible: T,
          setPopoverEditorVisible: (e) => {
            T.value = e;
          },
          hyperLinkAutoFillOpt: I,
          changeHyperLinkAutoFillOpt: (e) => (I.value = e),
        };
      });
    },
    50743: (e, t, i) => {
      i.d(t, { lE: () => p, HV: () => l, ZV: () => u });
      var n = i(2954),
        o = i(46016),
        a = i(78152),
        r = i(18621),
        d = i(84374);
      const l = () => {
          const {
              markerModule: e,
              styles: t,
              executePropertyAction: i,
            } = (0, d.nZ)(),
            l = (0, n.Fl)(() => (0, a.S)().language),
            s = (0, n.Fl)(() => (0, o.$)().isOutlinerMode),
            c = (0, n.Fl)(() => {
              var e;
              return !!(null === (e = t.value) || void 0 === e
                ? void 0
                : e.legendVisible.value);
            });
          return {
            markerGroups: (0, n.Fl)(() => {
              const { getMarkerGroups: t, getMarkerInfoById: i } = e;
              return t({ lang: l.value }).reduce((e, t) => {
                if (t.hidden) return e;
                const n = [];
                for (const e of t.markerIds) {
                  if (t.hidden) continue;
                  if (!i(e)) continue;
                  let { imageSrc: o } = i(e);
                  (o = o.split("\\").join("/")),
                    n.push({
                      id: e,
                      markerUrl: o,
                      backgroundImage: `url("${o}")`,
                    });
                }
                return [...e, { id: t.id, title: t.name, markers: n }];
              }, []);
            }),
            isOutlineMode: s,
            isLegendEnabled: c,
            addMarker: (e, t) => {
              (0, r.L9)({ eventName: t.title, eventAction: "insertMarker" });
              const { id: i } = e;
              i && (0, a.JX)().handleCommand("editor.addMarker", { value: i });
            },
            toggleLegend: () => {
              const e = c.value;
              i({ name: "mutateProperty:legendVisible", inputValue: !e }),
                e ||
                  (0, r.L9)({
                    eventCategory: "FormatMap",
                    eventAction: "toggleLegendDisplay",
                  });
            },
          };
        },
        s = (e, t) => {
          const { name: i, resource: n, relativeResource: o } = t || {};
          i &&
            n &&
            (e.dataTransfer.clearData(), e.dataTransfer.setData("xapsvg", o));
        };
      var c = function (e, t, i, n) {
        return new (i || (i = Promise))(function (o, a) {
          function r(e) {
            try {
              l(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function d(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(r, d);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      const u = () => {
        const { stickerModule: e, createXapUrl: t } = (0, d.nZ)(),
          { T: i } = (0, a.JE)(),
          o = (0, n.Fl)(() => (0, a.S)().language),
          r = (0, n.Fl)(() => {
            const { getBuiltInImageGroups: t } = e;
            return t({ lang: o.value });
          }),
          l = (0, n.Fl)(() =>
            [{ value: "all", label: i("All") }].concat(
              r.value.map((e) => ({ value: e.name, label: i("$$", e.name) })),
            ),
          ),
          u = (0, n.iH)("all"),
          h = (0, n.Fl)(
            () => l.value.find(({ value: e }) => e === u.value).label,
          ),
          p = (0, n.Fl)(() =>
            "all" === u.value
              ? r.value
              : [r.value.find(({ name: e }) => u.value === e)],
          );
        return {
          changeImage: (e) =>
            c(void 0, void 0, void 0, function* () {
              const i = yield t(e);
              (0, a.JX)().handleCommand("editor.changeImage", { value: i });
            }),
          ondragstart: s,
          optionChanged: (e) => {
            u.value = e;
          },
          currentStickerGroup: p,
          stickerGroupNames: l,
          currentCategoryLabel: h,
        };
      };
      var h = function (e, t, i, n) {
        return new (i || (i = Promise))(function (o, a) {
          function r(e) {
            try {
              l(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function d(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(r, d);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      const p = () => {
        const { illustrationModule: e, createXapUrl: t } = (0, d.nZ)(),
          { T: i } = (0, a.JE)(),
          o = (0, n.Fl)(() => (0, a.S)().language),
          r = (0, n.Fl)(() => {
            const { getBuiltInImageGroups: t } = e;
            return t({ lang: o.value });
          }),
          l = (0, n.Fl)(() =>
            [{ value: "all", label: i("All") }].concat(
              r.value.map((e) => ({ value: e.name, label: i("$$", e.name) })),
            ),
          ),
          c = (0, n.iH)("all"),
          u = (0, n.Fl)(
            () => l.value.find(({ value: e }) => e === c.value).label,
          ),
          p = (0, n.Fl)(() =>
            "all" === c.value
              ? r.value
              : [r.value.find(({ name: e }) => c.value === e)],
          );
        return {
          currentCategoryLabel: u,
          illustrationGroupNames: l,
          currentIllustrationGroup: p,
          changeImage: (e) =>
            h(void 0, void 0, void 0, function* () {
              const i = yield t(e);
              (0, a.JX)().handleCommand("editor.changeImage", { value: i });
            }),
          ondragstart: s,
          optionChanged: (e) => {
            c.value = e;
          },
        };
      };
    },
    91878: (e, t, i) => {
      i.d(t, {
        B6: () => C,
        CC: () => g,
        Ho: () => u,
        LN: () => m,
        PV: () => v,
        gA: () => b,
        jS: () => y,
        s9: () => p,
        uv: () => f,
      });
      var n = i(7104),
        o = i(94593),
        a = i(71017),
        r = i.n(a),
        d = i(96829),
        l = i(3112),
        s = function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, a) {
            function r(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function d(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, d);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      const {
          DEFAULT_SKELETON_THEME_ID: c,
          generateCustomSmartColorThemeInfo: u,
          deserializeColorTheme: h,
        } = l.s,
        p = c,
        m = (e, t) =>
          s(void 0, void 0, void 0, function* () {
            const i = r().join((0, n.Im)(), `${e}.json`);
            o.Z.existsSync(i) && (yield o.Z.remove(i)), t && (yield t());
          }),
        f = (e, t, i) =>
          s(void 0, void 0, void 0, function* () {
            const a = (0, n.Im)();
            yield o.Z.ensureDir(a);
            const d = r().join(a, `${e}.json`);
            yield t(d), i && (yield i());
          }),
        v = ({ colorList: e, themeName: t }, i) =>
          s(void 0, void 0, void 0, function* () {
            const a = "SMARTCOLOR-" + (0, d.hb)(),
              l = u([{ colorList: e, themeName: t }])[0],
              s = (0, n.Im)();
            yield o.Z.ensureDir(s);
            const c = r().join(s, `${a}.json`);
            try {
              const e = JSON.stringify(l);
              yield o.Z.writeFile(c, e),
                i && (yield i(Object.assign({ customSCTId: a }, l)));
            } catch (e) {
              return;
            }
          }),
        g = (e) => {
          const t = (0, n.Im)(),
            i = r().join(t, `${e}.json`);
          return JSON.parse(o.Z.readFileSync(i).toString());
        },
        C = (e, t) => {
          const i = g(e);
          if (!i) return null;
          const n = i.colorThemeList.find((e) => e.id === t);
          return "deserialized" in n ? n : h(n);
        },
        y = (e, t = p) => {
          const i =
            l.t.getColorThemePreviewById(t, e) ||
            l.t.getColorThemePreviewById(p, e);
          return i ? `data:image/svg+xml,${encodeURIComponent(i)}` : "";
        },
        b = () => l.t.initThemePreviewModule();
    },
    99020: (e) => {
      e.exports = require("evernote");
    },
    39491: (e) => {
      e.exports = require("assert");
    },
    50852: (e) => {
      e.exports = require("async_hooks");
    },
    22057: (e) => {
      e.exports = require("constants");
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
    95687: (e) => {
      e.exports = require("https");
    },
    22037: (e) => {
      e.exports = require("os");
    },
    71017: (e) => {
      e.exports = require("path");
    },
    77282: (e) => {
      e.exports = require("process");
    },
    85477: (e) => {
      e.exports = require("punycode");
    },
    63477: (e) => {
      e.exports = require("querystring");
    },
    12781: (e) => {
      e.exports = require("stream");
    },
    71576: (e) => {
      e.exports = require("string_decoder");
    },
    57310: (e) => {
      e.exports = require("url");
    },
    73837: (e) => {
      e.exports = require("util");
    },
    26144: (e) => {
      e.exports = require("vm");
    },
  },
  (e) => {
    e.O(0, [8270, 3112, 6192, 2244], () => {
      return (t = 17014), e((e.s = t));
      var t;
    });
    var t = e.O();
    module.exports = t;
  },
]);
