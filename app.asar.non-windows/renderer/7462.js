/*! For license information please see 7462.js.LICENSE.txt */
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [7462],
  {
    17462: (t, e, n) => {
      "use strict";
      n.r(e),
        n.d(e, {
          Converter: () => r,
          Editor: () => I,
          Finder: () => v,
          Shortcut: () => A,
          Type: () => x,
        });
      var i = n(88554);
      class r {
        static notesDataToHTML(t) {
          var e, n, r;
          return "string" ==
            typeof (null === (e = t.realHTML) || void 0 === e
              ? void 0
              : e.content)
            ? t.realHTML.content
            : t.ops && t.ops.ops
              ? ((r = t.ops.ops),
                new i.bc(r, { paragraphTag: "div" }).convert())
              : t.html && t.html.content
                ? ((t) => {
                    var e;
                    const n = (t, e) => {
                        Object.entries(
                          (null == e ? void 0 : e.properties) || {},
                        ).forEach(([e, n]) => {
                          if (
                            [
                              "fo:font-weight",
                              "fo:font-family",
                              "fo:font-style",
                              "fo:font-weight",
                              "fo:font-size",
                              "fo:color",
                              "fo:text-align",
                              "fo:text-bullet",
                              "fo:text-transform",
                              "fo:text-decoration",
                              "fo:background-color",
                              "fo:margin-left",
                              "fo:margin-right",
                              "fo:margin-top",
                              "fo:margin-bottom",
                            ].includes(e)
                          ) {
                            const i = e.replace(/^fo:/, "");
                            t.style[i] = n;
                          }
                        });
                      },
                      i = (t) => {
                        if ("text" in t && void 0 !== t.text) {
                          const e = t,
                            i = document.createElement("span");
                          return (
                            n(i, e.style),
                            "" === e.text
                              ? document.createElement("br")
                              : (i.append(document.createTextNode(e.text)), i)
                          );
                        }
                        if ("image" in t && void 0 !== t.image) {
                          const e = t,
                            i = document.createElement("img");
                          return (
                            n(i, e.style), i.setAttribute("src", e.image), i
                          );
                        }
                        if ("spans" in t && void 0 !== t.spans) {
                          const e =
                            "href" in t && void 0 !== t.href
                              ? document.createElement("a")
                              : document.createElement("div");
                          if (
                            (n(e, t.style), "href" in t && void 0 !== t.href)
                          ) {
                            const n = t;
                            e.setAttribute("href", n.href);
                          }
                          return (
                            t.spans.forEach((t) => {
                              if (!t) return;
                              const n = i(t);
                              n && e.appendChild(n);
                            }),
                            e
                          );
                        }
                      },
                      r =
                        null === (e = null == t ? void 0 : t.html) ||
                        void 0 === e
                          ? void 0
                          : e.content;
                    if (!r) throw new Error("[NotesData] not found in data");
                    const o = JSON.parse(JSON.stringify(r.paragraphs)),
                      s = document.createElement("div");
                    let a = o.shift();
                    for (; a; ) {
                      const t = i(a);
                      t && s.appendChild(t), (a = o.shift());
                    }
                    return s.innerHTML;
                  })(t)
                : "string" ==
                    typeof (null === (n = t.plain) || void 0 === n
                      ? void 0
                      : n.content)
                  ? t.plain.content
                  : (console.warn(
                      "Failed to load content, missing fallback plain text attribute in notes data. \n" +
                        JSON.stringify(t || {}, null, 2),
                    ),
                    "");
        }
        static notesDataToPlainText(t) {
          return t.plain && t.plain.content
            ? t.plain.content
            : r.htmlToPlainText(r.notesDataToPlainText(t));
        }
        static htmlToPlainText(t) {
          const e = document.createElement("div");
          return (e.innerHTML = t), e.textContent || "";
        }
        static htmlToNotesData(t) {
          return {
            realHTML: { content: t },
            plain: { content: r.htmlToPlainText(t) },
          };
        }
        static plainTextToNotesData(t) {
          return { realHTML: { content: t }, plain: { content: t } };
        }
        static notesDataToLatestFormat(t) {
          return {
            realHTML: { content: r.notesDataToPlainText(t) },
            plain: { content: r.notesDataToHTML(t) },
          };
        }
      }
      const o = [
          "div",
          "p",
          "li",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "pre",
          "blockquote",
          "address",
          "br",
        ],
        s = (t) => {
          const e = document.createElement("div");
          return e.appendChild(t.cloneNode(!0)), e.innerHTML;
        },
        a = (t) => t.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"),
        u = (t) => {
          const e =
            /<(\w+)\b(?:\s+[\w\-.:]+(?:\s*=\s*(?:"[^"]*"|"[^"]*"|[\w\-.:]+))?)*\s*\/?>\s*<\/\1\s*>/;
          let n = t;
          do {
            n = n.replace(e, "");
          } while (e.test(n));
          return n;
        },
        c = (t) => {
          let e = [];
          for (const n of t.childNodes)
            switch (n.nodeType) {
              case Node.TEXT_NODE:
                e.push(n);
                break;
              case Node.ELEMENT_NODE:
                (e = e.concat(c(n))),
                  o.includes(n.nodeName.toLowerCase()) &&
                    e.push(document.createTextNode("\n"));
            }
          return e;
        },
        l = (t, e, { matchOnce: n = !1, lastMatchedIndex: i = 0 } = {}) => {
          const r = [];
          let o;
          const s = new RegExp(e.source, "g" + e.flags.replace("g", ""));
          s.lastIndex = i;
          do {
            (o = s.exec(t)),
              o &&
                (o.index === s.lastIndex && s.lastIndex++,
                o[0].length && r.push({ start: o.index, length: o[0].length }));
          } while (o && !n);
          return r;
        },
        h = (t, e) => {
          const n = e.findIndex(
              (e) => e.start <= t.start && e.start + e.length > t.start,
            ),
            i = e.findIndex(
              (e) =>
                e.start + e.length >= t.start + t.length &&
                e.start <= t.start + t.length,
            ),
            r = e[n],
            o = e[i];
          return {
            startIndex: n,
            startCharacterIndex: t.start - r.start,
            endIndex: i,
            endCharacterIndex: t.start + t.length - o.start,
          };
        },
        p = (t) =>
          t.reduce((t, e) => {
            const n = t[Math.max(t.length - 1, 0)] || { start: 0, length: 0 };
            return (
              t.push({
                start: n.start + n.length,
                length: (e.textContent || "").length,
              }),
              t
            );
          }, []),
        d = (t) => t.map((t) => t.textContent || "").join(""),
        f = (t, e, n) => {
          var i, r;
          const o = n.startIndex,
            s = n.startCharacterIndex,
            a = n.endIndex,
            u = n.endCharacterIndex;
          if (o === a) {
            const n = e[o].textContent || "";
            e[o].textContent = n.slice(0, s) + t + n.slice(u, n.length);
          } else {
            const n = e[o],
              c = e[a],
              l = n.textContent || "",
              h = c.textContent || "";
            (e[o].textContent = l.slice(0, s) + t),
              (e[a].textContent = h.slice(u, h.length));
            for (let t = o + 1; t < a; t++)
              (e[t].textContent = ""),
                null ===
                  (r =
                    null === (i = e[t]) || void 0 === i
                      ? void 0
                      : i.parentNode) ||
                  void 0 === r ||
                  r.removeChild(e[t]);
          }
        },
        g = (t, e) => {
          const { regexp: n, mode: i = "find" } = e,
            r = document.createElement("div");
          r.innerHTML = t;
          const o = c(r);
          if ("replace" in e && "replace" === i) {
            const { replace: t } = e,
              i = d(o),
              s = { html: "", ranges: l(i, n), text: i, replacedText: "" };
            let a = 0;
            for (;;) {
              const e = d(o),
                i = l(e, n, { matchOnce: !0, lastMatchedIndex: a }),
                r = p(o);
              if (!i.length) break;
              const s = i[0];
              a = s.start + t.length;
              const u = h(s, r);
              f(t, o, u);
            }
            return (s.html = u(r.innerHTML)), (s.replacedText = d(o)), s;
          }
          {
            const t = d(o);
            return { ranges: l(t, n).slice(), text: t };
          }
        },
        m = (t, e, n) => {
          const { isCaseInsensitive: i = !1 } = n || {};
          let r = "g";
          i && (r += "i");
          const o = "string" == typeof t ? t : s(t);
          return g(o, { regexp: new RegExp(a(e), r), mode: "find" });
        },
        y = (t, e, n, i) => {
          const { isCaseInsensitive: r = !1 } = i || {};
          let o = "";
          r && (o += "i");
          const u = "string" == typeof t ? t : s(t);
          return g(u, {
            regexp: new RegExp(a(e), o),
            mode: "replace",
            replace: n,
          });
        };
      class v {
        static find(t, e, n) {
          const i = r.notesDataToHTML(t);
          return m(i, e, n);
        }
        static replace(t, e, n, i) {
          const o = r.notesDataToHTML(t),
            s = y(o, e, n, i);
          return r.htmlToNotesData(s.html || "");
        }
      }
      var b = n(61082);
      var A, x;
      function C() {}
      !(function (t) {
        let e;
        !(function (t) {
          (t.ToggleStyleAttribute = "ToggleStyleAttribute"),
            (t.SetStyleAttribute = "SetStyleAttribute"),
            (t.RemoveStyleAttribute = "RemoveStyleAttribute"),
            (t.Undo = "Undo"),
            (t.Redo = "Redo"),
            (t.CleanContent = "CleanContent"),
            (t.Reset = "Reset");
        })((e = t.ActionNames || (t.ActionNames = {})));
      })(A || (A = {})),
        (function (t) {
          let e;
          !(function (t) {
            (t.bold = "bold"),
              (t.italic = "italic"),
              (t.strike = "strike"),
              (t.underline = "underline"),
              (t.frozen = "frozen"),
              (t.bullet = "bullet"),
              (t.number = "number"),
              (t.code = "code"),
              (t.quote = "quote"),
              (t.href = "href");
          })((e = t.TextStyles || (t.TextStyles = {})));
        })(x || (x = {}));
      function w(t, e, n, i) {
        return new (n || (n = Promise))(function (r, o) {
          function s(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? r(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((i = i.apply(t, e || [])).next());
        });
      }
      Object.create;
      Object.create;
      var k = n(84401),
        S = n.n(k);
      const E = "xmind-autolink";
      b.config.textAttributes[E] = { tagName: E };
      class T {
        constructor(t) {
          this.stopEventListeners = void 0;
          const { container: e, trix: n } = t;
          (this.trix = n), (this.container = e), this.startEventListeners();
        }
        removeAutolinkFlag(t) {
          const e = this.trix,
            n = e.getSelectedRange();
          e.setSelectedRange(t),
            e.deactivateAttribute(E),
            e.setSelectedRange(n);
        }
        isContainsAutolinkFlag(t) {
          return ((t, e) => {
            const n = e
              .getDocumentAtRange(t)
              .getPieces()
              .map((t) => t.getAttributes());
            return [
              ...new Set(n.reduce((t, e) => t.concat(Object.keys(e)), [])),
            ];
          })(t, document).includes(E);
        }
        startEventListeners() {
          var t;
          null === (t = this.stopEventListeners) ||
            void 0 === t ||
            t.call(this);
          const e = this.container,
            n = (t) =>
              w(this, void 0, void 0, function* () {
                if (t.isComposing) return;
                ["Backspace", "NumpadEnter", "Enter", "Tab"].includes(t.code) &&
                  this.removeAutolinkInCursor();
                ["NumpadEnter", "Enter", "Space", "Tab"].includes(t.code) &&
                  this.updateAutolinkInCursor();
              }),
            i = (t) => {
              (t.isComposing && "insertCompositionText" !== t.inputType) ||
                (t.inputType.startsWith("insert") &&
                  t.data &&
                  this.removeAutolinkInCursor());
            };
          e.addEventListener("input", i),
            e.addEventListener("keydown", n),
            (this.stopEventListeners = () => {
              e.removeEventListener("keydown", n),
                e.removeEventListener("input", i),
                (this.stopEventListeners = void 0);
            });
        }
        removeAutolinkInCursor() {
          const t = this.trix,
            [e, n] = t.getSelectedRange();
          if (e !== n) return;
          const i = t.getDocument().findRangesForTextAttribute(E);
          if (!i.length) return;
          const r = i.find((t) => t[0] <= e && e <= t[1]);
          if (!r) return;
          const o = t.getSelectedRange();
          t.setSelectedRange(r),
            t.deactivateAttribute("href"),
            t.deactivateAttribute(E),
            t.setSelectedRange(o);
        }
        updateAutolinkInCursor() {
          const t = this.trix,
            e = this.trix.getDocument(),
            n = e.toString(),
            i = (t, e) => {
              const n = this.trix,
                i = n.getSelectedRange();
              n.setSelectedRange(e),
                n.activateAttribute(
                  "href",
                  /^https?:/.test(t) ? t : "http://" + t,
                ),
                n.activateAttribute(E),
                n.setSelectedRange(i);
            },
            r = (t, e) => {
              const n = this.trix,
                i = n.getSelectedRange();
              n.setSelectedRange(e),
                n.deactivateAttribute("href", t),
                n.deactivateAttribute(E),
                n.setSelectedRange(i);
            },
            [o, s] = t.getSelectedRange();
          if (o !== s) return;
          const { start: a, end: u } = ((t, e, n) => {
            const i = new RegExp(
                "s~!@#$%^&*()-=+_{}[]:;<>.?\"'/\\|,"
                  .split("")
                  .map((t) => "\\" + t)
                  .join("|"),
              ),
              r = new RegExp(
                "w~!@#$%^&*-=+_:;<>,.?/\\|"
                  .split("")
                  .map((t) => "\\" + t)
                  .join("|"),
              ),
              o = t.length;
            let s = !0,
              a = n,
              u = a;
            for (let n = a; n < o && n >= 0; n--) {
              if (s && i.test(t[n])) {
                (a = n), (u = n);
                continue;
              }
              if ((s && !i.test(t[n]) && (s = !1), !r.test(t[n]))) break;
              const o = e.getPieceAtPosition(n);
              if (o.getAttribute("href") && !o.getAttribute(E)) break;
              u = n;
            }
            return { start: u, end: a };
          })(n, e, o);
          if (a === u) return;
          const c = n.slice(a, u);
          console.log("url", c);
          const l = [a, u];
          (() => {
            this.trix.recordUndoEntry();
          })();
          var h;
          ((h = c), S()({ exact: !0 }).test(h)) ? i(c, l) : r(c, l);
        }
      }
      (b.config.textAttributes.underline = {
        tagName: "u",
        inheritable: !0,
        parser: function (t) {
          return "u" === t.tagName.toLowerCase();
        },
      }),
        (b.config.textAttributes.frozen = {
          style: {
            backgroundColor:
              "var(--notes-editor-frozen-background-color, lightgray)",
          },
          className: "notes-editor-frozen",
        }),
        (b.config.toolbar.getDefaultHTML = () => ""),
        (b.config.input.level2Enabled = !0),
        (b.config.undoInterval = 1e3);
      const L = "href",
        R = /^(\d+)\. $/,
        D = new Set([x.TextStyles.number, x.TextStyles.bullet]),
        O = Set.prototype.has.bind(D);
      class _ {
        constructor(t) {
          (this.lastSelectedRange = [void 0, void 0]),
            (this.shortcuts = {
              "Ctrl + Z": { action: A.ActionNames.Undo },
              "Ctrl + Shift + Z": { action: A.ActionNames.Redo },
              "Ctrl + I": {
                action: A.ActionNames.ToggleStyleAttribute,
                style: _.TextStyles.italic,
              },
              "Ctrl + B": {
                action: A.ActionNames.ToggleStyleAttribute,
                style: _.TextStyles.bold,
              },
              "Ctrl + U": {
                action: A.ActionNames.ToggleStyleAttribute,
                style: _.TextStyles.underline,
              },
            });
          const {
            container: e,
            placeholder: n = "",
            isShortcutsEnabled: i = !0,
          } = t;
          (this.trix = document.createElement("trix-editor")),
            (this.container = e),
            this.container.appendChild(this.trix),
            (this.placeholder = n),
            this.initEventListener(),
            i || (this.shortcuts = {}),
            (() => {
              if (document.querySelector("#notes-override-styles")) return;
              const t = document.createElement("style");
              (t.innerHTML =
                "\n\ntrix-editor:empty:before {\n   content: attr(placeholder);\n   color: graytext;\n   cursor: text;\n}\n[data-trix-attachment] figcaption, [data-trix-attachment] .attachment__toolbar {\n   display: none;\n}\ntrix-editor figure{\n   display: inline-block;\n   margin: 0;\n}\ntrix-editor {\n   outline: none;\n   overflow: auto;\n   height: 100%;\n   width: 100%;\n}\ntrix-editor em, trix-editor strong, trix-editor del{\n  color: inherit\n}\n"),
                document.body.appendChild(t);
            })(),
            (this.autolinker = new T({ trix: this.trix.editor, container: e }));
        }
        static getHref(t) {
          let e = t;
          for (; e; ) {
            if (e.hasAttribute("href")) return e.getAttribute("href");
            e = e.parentElement;
          }
          return null;
        }
        setEditorStyles(t) {
          Object.keys(t).forEach((e) => {
            const n = e;
            this.trix.style[n] = t[n];
          });
        }
        getEditorStyle(t) {
          return window
            .getComputedStyle(this.trix)
            .getPropertyValue(String(t) || "");
        }
        initEventListener() {
          ((t) => {
            Object.keys(t).forEach((e) => {
              const n = t[e],
                i = "string" == typeof n ? n : n.asNewEvent,
                r = "string" == typeof n ? C : n.handler;
              this.container.addEventListener(e, (t) => {
                r(t), this.container.dispatchEvent(new CustomEvent(i, t));
              });
            });
          })({
            "trix-initialize": "ready",
            "trix-focus": "focus",
            "trix-blur": {
              asNewEvent: "blur",
              handler: () => {
                this.lastSelectedRange = this.getSelectedRange();
              },
            },
            "trix-change": {
              asNewEvent: "change",
              handler: this.handleChange.bind(this),
            },
            "trix-selection-change": {
              asNewEvent: "selectionchange",
              handler: () => (this.lastSelectedRange = this.getSelectedRange()),
            },
          }),
            ((t) => {
              t.forEach((t) =>
                this.container.addEventListener(t, (t) =>
                  t.stopImmediatePropagation(),
                ),
              );
            })(["trix-attachment-add", "trix-attachment-remove"]),
            this.trix.addEventListener("trix-file-accept", (t) => {
              t.preventDefault(), t.stopImmediatePropagation();
            }),
            this.trix.addEventListener("keydown", (t) => {
              if (t.defaultPrevented) return;
              const e = [];
              (t.ctrlKey || t.metaKey) && e.push("ctrl"),
                t.altKey && e.push("alt"),
                t.shiftKey && e.push("shift"),
                t.key &&
                  !["control", "shift"].includes(t.key.toLowerCase()) &&
                  e.push(t.key.toLowerCase());
              const n = Object.entries(this.shortcuts).reduce(
                (t, [e, n]) => ((t[e.replace(/ /g, "").toLowerCase()] = n), t),
                {},
              )[e.join("+")];
              if (n) {
                if (n.action === A.ActionNames.ToggleStyleAttribute) {
                  const t = n;
                  this.toggleSelectionStyle(t.style);
                }
                n.action === A.ActionNames.Redo && this.redo(),
                  n.action === A.ActionNames.Undo && this.undo(),
                  n.action === A.ActionNames.CleanContent &&
                    this.cleanContent();
              }
            });
          const t = [
            "formatItalic",
            "formatStrikeThrough",
            "formatBold",
            "formatUnderline",
          ];
          this.container.addEventListener(
            "beforeinput",
            (e) => {
              t.includes(e.inputType) &&
                (e.preventDefault(),
                e.stopPropagation(),
                e.stopImmediatePropagation());
            },
            { capture: !0 },
          ),
            this.container.addEventListener("click", (t) => {
              const e = _.getHref(t.target);
              e &&
                this.container.dispatchEvent(
                  new CustomEvent("link-activated", { detail: { href: e } }),
                );
            });
        }
        handleChange() {
          this.handleAutoList();
        }
        handleAutoList() {
          if (this.getSelectionStyles().some(O)) return;
          const t = this.trix.editor,
            [e] = t.getSelectedRange(),
            n = (function (t) {
              const e = t.lastIndexOf("\n");
              return ~e ? t.slice(e + 1) : t;
            })(t.getDocument().toString().slice(0, e));
          let i;
          if ((i = n.match(R))) {
            if (+i[1] > 999) return;
            const n = t.composition.getSnapshot();
            t.setSelectedRange([e - i[1].length - 2, e]),
              t.deleteInDirection(),
              this.setSelectionStyle(
                x.TextStyles.number,
                { start: i[1] },
                { snapshot: n },
              );
          } else if ("- " === n) {
            const n = t.composition.getSnapshot();
            t.setSelectedRange([e - 2, e]),
              t.deleteInDirection(),
              this.setSelectionStyle(x.TextStyles.bullet, null, {
                snapshot: n,
              });
          }
        }
        getRangeStyles(t, e) {
          const n = [t, t + e],
            i = this.trix.editor
              .getDocument()
              .getDocumentAtRange(n)
              .getPieces()
              .map((t) => t.getAttributes()),
            r = this.trix.editor
              .getDocument()
              .getDocumentAtRange(n)
              .getBlocks()
              .map((t) => t.getAttributes());
          return [
            ...new Set(i.reduce((t, e) => t.concat(Object.keys(e)), [])),
            ...new Set(r.reduce((t, e) => t.concat(e), [])),
          ].filter((t) => t in _.TextStyles);
        }
        getDocument() {
          return this.trix.editor.getDocument();
        }
        setLink(t, e) {
          let [n, i] = null != e ? e : this.getSelectedRange();
          this.setSelectedRange([n, i]),
            t
              ? (n === i &&
                  (this.trix.editor.recordUndoEntry(),
                  this.trix.editor.insertString(t),
                  (i = n + t.length)),
                (t = t.includes("://") ? t : `http://${t}`),
                this.setSelectedRange([n, i]),
                this.trix.editorController.recordFormattingUndoEntry(L),
                this.trix.editor.activateAttribute(L, t),
                this.autolinker.removeAutolinkFlag([n, i]))
              : this.removeLink();
        }
        getLink() {
          return this.getSingleWholeLink();
        }
        removeLink() {
          this.trix.editorController.recordFormattingUndoEntry(L),
            this.trix.editor.deactivateAttribute(L),
            this.autolinker.removeAutolinkFlag(this.getSelectedRange()),
            this.focus();
        }
        autoFitLinkSelectedRange(t) {
          const [e, n] = null != t ? t : this.getSelectedRange(),
            i = [];
          Object.values(this.getDocument().getPieces()).reduce((t, e) => {
            const n = t,
              r = t + e.length;
            return e.attributes.has("href") && i.push([n, r]), t + e.length;
          }, 0);
          const r = [...i].reverse().find(([t]) => t <= e),
            o = i.find(([t, e]) => e >= n);
          if (r && r === o) {
            const [t, i] = r;
            if (e === n && (t === e || i === n)) return;
            this.setSelectedRange(r);
          }
        }
        getSingleWholeLink() {
          const t = this.getDocument()
            .getDocumentAtRange(this.getSelectedRange())
            .getPieces();
          let e;
          for (let n = 0; n < t.length - 1; n++) {
            const i = t[n].attributes;
            if (!i.has(L)) return null;
            if ((e || (e = i.get(L)), e !== i.get(L))) return null;
          }
          return e;
        }
        getSelectionStyles() {
          const t = Object.keys(
              this.trix.editorController.currentAttributes || {},
            ),
            e = this.trix.editor.getSelectedRange();
          if (!(e[0] !== e[1])) return [...t];
          const n = e[0] + (e[0] === e[1] && e[0] > 0 ? -1 : 0),
            i = e[1] - n,
            r = this.getRangeStyles(n, i);
          return [...new Set(t.concat(r))];
        }
        toggleSelectionStyle(t, e) {
          -1 !== this.getSelectionStyles().indexOf(t)
            ? this.removeSelectionStyle(t)
            : this.setSelectionStyle(t, e);
        }
        setSelectionStyle(t, e, n) {
          const { snapshot: i, isCanUndo: r = !0 } = n || {};
          if (_.TextStyles.hasOwnProperty(t)) {
            if (
              (r && this.trix.editorController.recordFormattingUndoEntry(t),
              this.trix.editor.activateAttribute(t, e),
              i)
            ) {
              const t = this.trix.editor.undoManager.undoEntries;
              t[t.length - 1].snapshot = i;
            }
            this.trix.editorController.render();
          } else console.warn("Style Not Found: " + t);
        }
        removeSelectionStyle(t, e) {
          const { isCanUndo: n = !0 } = e || {};
          _.TextStyles.hasOwnProperty(t)
            ? (n && this.trix.editorController.recordFormattingUndoEntry(t),
              this.trix.editor.deactivateAttribute(t),
              this.trix.editorController.render())
            : console.warn("Style Not Found: " + t);
        }
        canUndo() {
          return this.trix.editor.undoManager.canUndo();
        }
        undo() {
          this.trix.editor.undo();
        }
        redo() {
          this.trix.editor.redo();
        }
        canRedo() {
          return this.trix.editor.undoManager.canRedo();
        }
        focus() {
          if (this.trix.editorController.isFocused()) return;
          const t = this.lastSelectedRange.includes(void 0);
          this.trix.focus(),
            t
              ? this.trix.editor.setSelectedRange(
                  this.trix.editor.getDocument().toString().length - 1,
                )
              : this.trix.editor.setSelectedRange(this.lastSelectedRange),
            this.trix.focus();
        }
        blur() {
          this.trix.blur();
        }
        reset() {
          (this.trix.value = ""), (this.lastSelectedRange = [void 0, void 0]);
        }
        cleanContent() {
          this.trix.editor.composition.replaceHTML(""),
            (this.lastSelectedRange = [void 0, void 0]);
        }
        cleanUndo() {
          this.trix.editor.undoManager.undoEntries = [];
        }
        cleanRedo() {
          this.trix.editor.undoManager.redoEntries = [];
        }
        setSelectedRange(t) {
          this.focus(), this.trix.editor.setSelectedRange(t);
        }
        getSelectedRange() {
          return this.trix.editor.getSelectedRange();
        }
        getStyleRange(t, e) {
          const n = this.trix.editor.getDocument(),
            i = null != e ? e : this.getSelectedRange()[0];
          if (!t) return void console.warn("Style key required!");
          return n
            .findRangesForTextAttribute(t)
            .find((t) => t[0] <= i && t[1] >= i);
        }
        get isDisabled() {
          return (
            "false" ===
            (this.trix.getAttribute("contentEditable") || "").toLowerCase()
          );
        }
        set isDisabled(t) {
          this.trix.setAttribute("contentEditable", t ? "true" : "false");
        }
        get placeholder() {
          return this.trix.getAttribute("placeholder");
        }
        set placeholder(t) {
          this.trix.setAttribute("placeholder", t);
        }
        get isFocused() {
          return this.trix.editorController.isFocused();
        }
      }
      _.TextStyles = x.TextStyles;
      class I extends _ {
        setHTML(t) {
          const e = this.trix.editor.undoManager.undoEntries,
            n = this.trix.editor.undoManager.redoEntries;
          this.trix.editor.loadHTML(t),
            (this.trix.editor.undoManager.undoEntries = e),
            (this.trix.editor.undoManager.redoEntries = n);
        }
        setNoteData(t) {
          this.setHTML(r.notesDataToHTML(t));
        }
        getNoteData() {
          const t = this.trix.value;
          if (t.length)
            return {
              realHTML: { content: t },
              plain: { content: this.trix.editor.getDocument().toString() },
            };
        }
        get textLength() {
          return this.trix.editor.getDocument().toString().length - 1;
        }
        get htmlLength() {
          return this.trix.value.length;
        }
        find(t, e) {
          return m(this.trix.value, t, e);
        }
        replace(t, e, n) {
          const i = y(this.trix.value, t, e, n);
          return this.setHTML(i.html), i;
        }
        replaceByRanges(t, e) {
          const n = ((t, e, n) => {
            const i = "string" == typeof t ? t : s(t),
              r = document.createElement("div");
            r.innerHTML = i;
            const o = c(r),
              a = d(o),
              l = e.filter((t) => t.start >= 0 && t.length > 0);
            for (const t of l) {
              const e = p(o),
                i = h(t, e);
              f(n, o, i);
            }
            return {
              html: u(r.innerHTML),
              ranges: [...e],
              text: a,
              replacedText: d(o),
            };
          })(this.trix.value, t, e);
          return this.setHTML(n.html), n;
        }
      }
    },
    61082: function (t, e, n) {
      "use strict";
      var i, r;
      (function () {}).call(this),
        function () {
          null == window.Set &&
            (window.Set = (function () {
              function t() {
                this.clear();
              }
              return (
                (t.prototype.clear = function () {
                  return (this.values = []);
                }),
                (t.prototype.has = function (t) {
                  return -1 !== this.values.indexOf(t);
                }),
                (t.prototype.add = function (t) {
                  return this.has(t) || this.values.push(t), this;
                }),
                (t.prototype.delete = function (t) {
                  var e;
                  return (
                    -1 !== (e = this.values.indexOf(t)) &&
                    (this.values.splice(e, 1), !0)
                  );
                }),
                (t.prototype.forEach = function () {
                  var t;
                  return (t = this.values).forEach.apply(t, arguments);
                }),
                t
              );
            })());
        }.call(this),
        (function (e) {
          var n = setTimeout;
          function i() {}
          var r =
              ("function" == typeof setImmediate && setImmediate) ||
              function (t) {
                n(t, 1);
              },
            o = function (t) {
              "undefined" != typeof console &&
                console &&
                console.warn("Possible Unhandled Promise Rejection:", t);
            };
          function s(t) {
            if ("object" != typeof this)
              throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t) throw new TypeError("not a function");
            (this._state = 0),
              (this._handled = !1),
              (this._value = void 0),
              (this._deferreds = []),
              p(t, this);
          }
          function a(t, e) {
            for (; 3 === t._state; ) t = t._value;
            0 !== t._state
              ? ((t._handled = !0),
                r(function () {
                  var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                  if (null !== n) {
                    var i;
                    try {
                      i = n(t._value);
                    } catch (t) {
                      return void c(e.promise, t);
                    }
                    u(e.promise, i);
                  } else (1 === t._state ? u : c)(e.promise, t._value);
                }))
              : t._deferreds.push(e);
          }
          function u(t, e) {
            try {
              if (e === t)
                throw new TypeError(
                  "A promise cannot be resolved with itself.",
                );
              if (e && ("object" == typeof e || "function" == typeof e)) {
                var n = e.then;
                if (e instanceof s)
                  return (t._state = 3), (t._value = e), void l(t);
                if ("function" == typeof n)
                  return void p(
                    ((i = n),
                    (r = e),
                    function () {
                      i.apply(r, arguments);
                    }),
                    t,
                  );
              }
              (t._state = 1), (t._value = e), l(t);
            } catch (e) {
              c(t, e);
            }
            var i, r;
          }
          function c(t, e) {
            (t._state = 2), (t._value = e), l(t);
          }
          function l(t) {
            2 === t._state &&
              0 === t._deferreds.length &&
              setTimeout(function () {
                t._handled || o(t._value);
              }, 1);
            for (var e = 0, n = t._deferreds.length; e < n; e++)
              a(t, t._deferreds[e]);
            t._deferreds = null;
          }
          function h(t, e, n) {
            (this.onFulfilled = "function" == typeof t ? t : null),
              (this.onRejected = "function" == typeof e ? e : null),
              (this.promise = n);
          }
          function p(t, e) {
            var n = !1;
            try {
              t(
                function (t) {
                  n || ((n = !0), u(e, t));
                },
                function (t) {
                  n || ((n = !0), c(e, t));
                },
              );
            } catch (t) {
              if (n) return;
              (n = !0), c(e, t);
            }
          }
          (s.prototype.catch = function (t) {
            return this.then(null, t);
          }),
            (s.prototype.then = function (t, e) {
              var n = new s(i);
              return a(this, new h(t, e, n)), n;
            }),
            (s.all = function (t) {
              var e = Array.prototype.slice.call(t);
              return new s(function (t, n) {
                if (0 === e.length) return t([]);
                var i = e.length;
                function r(o, s) {
                  try {
                    if (s && ("object" == typeof s || "function" == typeof s)) {
                      var a = s.then;
                      if ("function" == typeof a)
                        return void a.call(
                          s,
                          function (t) {
                            r(o, t);
                          },
                          n,
                        );
                    }
                    (e[o] = s), 0 == --i && t(e);
                  } catch (t) {
                    n(t);
                  }
                }
                for (var o = 0; o < e.length; o++) r(o, e[o]);
              });
            }),
            (s.resolve = function (t) {
              return t && "object" == typeof t && t.constructor === s
                ? t
                : new s(function (e) {
                    e(t);
                  });
            }),
            (s.reject = function (t) {
              return new s(function (e, n) {
                n(t);
              });
            }),
            (s.race = function (t) {
              return new s(function (e, n) {
                for (var i = 0, r = t.length; i < r; i++) t[i].then(e, n);
              });
            }),
            (s._setImmediateFn = function (t) {
              r = t;
            }),
            (s._setUnhandledRejectionFn = function (t) {
              o = t;
            }),
            t.exports ? (t.exports = s) : e.Promise || (e.Promise = s);
        })(this),
        function () {
          var t,
            e,
            n,
            i = "object" == typeof window.customElements,
            r = "function" == typeof document.registerElement;
          i ||
            r ||
            ("undefined" == typeof WeakMap &&
              (function () {
                var t = Object.defineProperty,
                  e = Date.now() % 1e9,
                  n = function () {
                    this.name =
                      "__st" + ((1e9 * Math.random()) >>> 0) + e++ + "__";
                  };
                (n.prototype = {
                  set: function (e, n) {
                    var i = e[this.name];
                    return (
                      i && i[0] === e
                        ? (i[1] = n)
                        : t(e, this.name, { value: [e, n], writable: !0 }),
                      this
                    );
                  },
                  get: function (t) {
                    var e;
                    return (e = t[this.name]) && e[0] === t ? e[1] : void 0;
                  },
                  delete: function (t) {
                    var e = t[this.name];
                    return !(!e || e[0] !== t) && ((e[0] = e[1] = void 0), !0);
                  },
                  has: function (t) {
                    var e = t[this.name];
                    return !!e && e[0] === t;
                  },
                }),
                  (window.WeakMap = n);
              })(),
            (function (t) {
              if (!t.JsMutationObserver) {
                var e,
                  n = new WeakMap();
                if (/Trident|Edge/.test(navigator.userAgent)) e = setTimeout;
                else if (window.setImmediate) e = window.setImmediate;
                else {
                  var i = [],
                    r = String(Math.random());
                  window.addEventListener("message", function (t) {
                    if (t.data === r) {
                      var e = i;
                      (i = []),
                        e.forEach(function (t) {
                          t();
                        });
                    }
                  }),
                    (e = function (t) {
                      i.push(t), window.postMessage(r, "*");
                    });
                }
                var o,
                  s,
                  a = !1,
                  u = [],
                  c = 0;
                (p.prototype = {
                  observe: function (t, e) {
                    var i;
                    if (
                      ((i = t),
                      (t =
                        (window.ShadowDOMPolyfill &&
                          window.ShadowDOMPolyfill.wrapIfNeeded(i)) ||
                        i),
                      (!e.childList && !e.attributes && !e.characterData) ||
                        (e.attributeOldValue && !e.attributes) ||
                        (e.attributeFilter &&
                          e.attributeFilter.length &&
                          !e.attributes) ||
                        (e.characterDataOldValue && !e.characterData))
                    )
                      throw new SyntaxError();
                    var r,
                      o = n.get(t);
                    o || n.set(t, (o = []));
                    for (var s = 0; s < o.length; s++)
                      if (o[s].observer === this) {
                        (r = o[s]).removeListeners(), (r.options = e);
                        break;
                      }
                    r ||
                      ((r = new y(this, t, e)), o.push(r), this.nodes_.push(t)),
                      r.addListeners();
                  },
                  disconnect: function () {
                    this.nodes_.forEach(function (t) {
                      for (var e = n.get(t), i = 0; i < e.length; i++) {
                        var r = e[i];
                        if (r.observer === this) {
                          r.removeListeners(), e.splice(i, 1);
                          break;
                        }
                      }
                    }, this),
                      (this.records_ = []);
                  },
                  takeRecords: function () {
                    var t = this.records_;
                    return (this.records_ = []), t;
                  },
                }),
                  (y.prototype = {
                    enqueue: function (t) {
                      var n,
                        i = this.observer.records_,
                        r = i.length;
                      if (i.length > 0) {
                        var o = m(i[r - 1], t);
                        if (o) return void (i[r - 1] = o);
                      } else
                        (n = this.observer), u.push(n), a || ((a = !0), e(l));
                      i[r] = t;
                    },
                    addListeners: function () {
                      this.addListeners_(this.target);
                    },
                    addListeners_: function (t) {
                      var e = this.options;
                      e.attributes &&
                        t.addEventListener("DOMAttrModified", this, !0),
                        e.characterData &&
                          t.addEventListener(
                            "DOMCharacterDataModified",
                            this,
                            !0,
                          ),
                        e.childList &&
                          t.addEventListener("DOMNodeInserted", this, !0),
                        (e.childList || e.subtree) &&
                          t.addEventListener("DOMNodeRemoved", this, !0);
                    },
                    removeListeners: function () {
                      this.removeListeners_(this.target);
                    },
                    removeListeners_: function (t) {
                      var e = this.options;
                      e.attributes &&
                        t.removeEventListener("DOMAttrModified", this, !0),
                        e.characterData &&
                          t.removeEventListener(
                            "DOMCharacterDataModified",
                            this,
                            !0,
                          ),
                        e.childList &&
                          t.removeEventListener("DOMNodeInserted", this, !0),
                        (e.childList || e.subtree) &&
                          t.removeEventListener("DOMNodeRemoved", this, !0);
                    },
                    addTransientObserver: function (t) {
                      if (t !== this.target) {
                        this.addListeners_(t),
                          this.transientObservedNodes.push(t);
                        var e = n.get(t);
                        e || n.set(t, (e = [])), e.push(this);
                      }
                    },
                    removeTransientObservers: function () {
                      var t = this.transientObservedNodes;
                      (this.transientObservedNodes = []),
                        t.forEach(function (t) {
                          this.removeListeners_(t);
                          for (var e = n.get(t), i = 0; i < e.length; i++)
                            if (e[i] === this) {
                              e.splice(i, 1);
                              break;
                            }
                        }, this);
                    },
                    handleEvent: function (t) {
                      switch ((t.stopImmediatePropagation(), t.type)) {
                        case "DOMAttrModified":
                          var e = t.attrName,
                            n = t.relatedNode.namespaceURI,
                            i = t.target;
                          ((a = new f("attributes", i)).attributeName = e),
                            (a.attributeNamespace = n);
                          var r =
                            t.attrChange === MutationEvent.ADDITION
                              ? null
                              : t.prevValue;
                          h(i, function (t) {
                            if (
                              t.attributes &&
                              (!t.attributeFilter ||
                                !t.attributeFilter.length ||
                                -1 !== t.attributeFilter.indexOf(e) ||
                                -1 !== t.attributeFilter.indexOf(n))
                            )
                              return t.attributeOldValue ? g(r) : a;
                          });
                          break;
                        case "DOMCharacterDataModified":
                          var a = f("characterData", (i = t.target));
                          r = t.prevValue;
                          h(i, function (t) {
                            if (t.characterData)
                              return t.characterDataOldValue ? g(r) : a;
                          });
                          break;
                        case "DOMNodeRemoved":
                          this.addTransientObserver(t.target);
                        case "DOMNodeInserted":
                          var u,
                            c,
                            l = t.target;
                          "DOMNodeInserted" === t.type
                            ? ((u = [l]), (c = []))
                            : ((u = []), (c = [l]));
                          var p = l.previousSibling,
                            d = l.nextSibling;
                          ((a = f(
                            "childList",
                            t.target.parentNode,
                          )).addedNodes = u),
                            (a.removedNodes = c),
                            (a.previousSibling = p),
                            (a.nextSibling = d),
                            h(t.relatedNode, function (t) {
                              if (t.childList) return a;
                            });
                      }
                      o = s = void 0;
                    },
                  }),
                  (t.JsMutationObserver = p),
                  t.MutationObserver ||
                    ((t.MutationObserver = p), (p._isPolyfilled = !0));
              }
              function l() {
                a = !1;
                var t = u;
                (u = []),
                  t.sort(function (t, e) {
                    return t.uid_ - e.uid_;
                  });
                var e = !1;
                t.forEach(function (t) {
                  var i = t.takeRecords();
                  !(function (t) {
                    t.nodes_.forEach(function (e) {
                      var i = n.get(e);
                      i &&
                        i.forEach(function (e) {
                          e.observer === t && e.removeTransientObservers();
                        });
                    });
                  })(t),
                    i.length && (t.callback_(i, t), (e = !0));
                }),
                  e && l();
              }
              function h(t, e) {
                for (var i = t; i; i = i.parentNode) {
                  var r = n.get(i);
                  if (r)
                    for (var o = 0; o < r.length; o++) {
                      var s = r[o],
                        a = s.options;
                      if (i === t || a.subtree) {
                        var u = e(a);
                        u && s.enqueue(u);
                      }
                    }
                }
              }
              function p(t) {
                (this.callback_ = t),
                  (this.nodes_ = []),
                  (this.records_ = []),
                  (this.uid_ = ++c);
              }
              function d(t, e) {
                (this.type = t),
                  (this.target = e),
                  (this.addedNodes = []),
                  (this.removedNodes = []),
                  (this.previousSibling = null),
                  (this.nextSibling = null),
                  (this.attributeName = null),
                  (this.attributeNamespace = null),
                  (this.oldValue = null);
              }
              function f(t, e) {
                return (o = new d(t, e));
              }
              function g(t) {
                return (
                  s ||
                  (((n = new d((e = o).type, e.target)).addedNodes =
                    e.addedNodes.slice()),
                  (n.removedNodes = e.removedNodes.slice()),
                  (n.previousSibling = e.previousSibling),
                  (n.nextSibling = e.nextSibling),
                  (n.attributeName = e.attributeName),
                  (n.attributeNamespace = e.attributeNamespace),
                  (n.oldValue = e.oldValue),
                  ((s = n).oldValue = t),
                  s)
                );
                var e, n;
              }
              function m(t, e) {
                return t === e ? t : s && ((n = t) === s || n === o) ? s : null;
                var n;
              }
              function y(t, e, n) {
                (this.observer = t),
                  (this.target = e),
                  (this.options = n),
                  (this.transientObservedNodes = []);
              }
            })(self),
            (function (t) {
              if (!window.performance || !window.performance.now) {
                var e = Date.now();
                window.performance = {
                  now: function () {
                    return Date.now() - e;
                  },
                };
              }
              var n, i;
              if (
                (window.requestAnimationFrame ||
                  (window.requestAnimationFrame = (n =
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame)
                    ? function (t) {
                        return n(function () {
                          t(performance.now());
                        });
                      }
                    : function (t) {
                        return window.setTimeout(t, 1e3 / 60);
                      }),
                window.cancelAnimationFrame ||
                  (window.cancelAnimationFrame =
                    window.webkitCancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    function (t) {
                      clearTimeout(t);
                    }),
                !((i = document.createEvent("Event")).initEvent("foo", !0, !0),
                i.preventDefault(),
                i.defaultPrevented))
              ) {
                var r = Event.prototype.preventDefault;
                Event.prototype.preventDefault = function () {
                  this.cancelable &&
                    (r.call(this),
                    Object.defineProperty(this, "defaultPrevented", {
                      get: function () {
                        return !0;
                      },
                      configurable: !0,
                    }));
                };
              }
              var o = /Trident/.test(navigator.userAgent);
              if (
                ((!window.CustomEvent ||
                  (o && "function" != typeof window.CustomEvent)) &&
                  ((window.CustomEvent = function (t, e) {
                    e = e || {};
                    var n = document.createEvent("CustomEvent");
                    return (
                      n.initCustomEvent(
                        t,
                        Boolean(e.bubbles),
                        Boolean(e.cancelable),
                        e.detail,
                      ),
                      n
                    );
                  }),
                  (window.CustomEvent.prototype = window.Event.prototype)),
                !window.Event || (o && "function" != typeof window.Event))
              ) {
                var s = window.Event;
                (window.Event = function (t, e) {
                  e = e || {};
                  var n = document.createEvent("Event");
                  return (
                    n.initEvent(t, Boolean(e.bubbles), Boolean(e.cancelable)), n
                  );
                }),
                  (window.Event.prototype = s.prototype);
              }
            })(window.WebComponents),
            (window.CustomElements = window.CustomElements || { flags: {} }),
            (t = window.CustomElements),
            (e = t.flags),
            (n = []),
            (t.addModule = function (t) {
              n.push(t);
            }),
            (t.initializeModules = function () {
              n.forEach(function (e) {
                e(t);
              });
            }),
            (t.hasNative = Boolean(document.registerElement)),
            (t.isIE = /Trident/.test(navigator.userAgent)),
            (t.useNative =
              !e.register &&
              t.hasNative &&
              !window.ShadowDOMPolyfill &&
              (!window.HTMLImports || window.HTMLImports.useNative)),
            window.CustomElements.addModule(function (t) {
              var e = window.HTMLImports
                ? window.HTMLImports.IMPORT_LINK_TYPE
                : "none";
              function n(t, e) {
                i(t, function (t) {
                  if (e(t)) return !0;
                  r(t, e);
                }),
                  r(t, e);
              }
              function i(t, e, n) {
                var r = t.firstElementChild;
                if (!r)
                  for (
                    r = t.firstChild;
                    r && r.nodeType !== Node.ELEMENT_NODE;

                  )
                    r = r.nextSibling;
                for (; r; )
                  !0 !== e(r, n) && i(r, e, n), (r = r.nextElementSibling);
                return null;
              }
              function r(t, e) {
                for (var i = t.shadowRoot; i; )
                  n(i, e), (i = i.olderShadowRoot);
              }
              function o(t, n, i) {
                if (((t = window.wrap(t)), !(i.indexOf(t) >= 0))) {
                  i.push(t);
                  for (
                    var r,
                      s = t.querySelectorAll("link[rel=" + e + "]"),
                      a = 0,
                      u = s.length;
                    a < u && (r = s[a]);
                    a++
                  )
                    r.import && o(r.import, n, i);
                  n(t);
                }
              }
              (t.forDocumentTree = function (t, e) {
                o(t, e, []);
              }),
                (t.forSubtree = n);
            }),
            window.CustomElements.addModule(function (t) {
              var e = t.flags,
                n = t.forSubtree,
                i = t.forDocumentTree;
              function r(t, e) {
                return o(t, e) || s(t, e);
              }
              function o(e, n) {
                if (t.upgrade(e, n)) return !0;
                n && p(e);
              }
              function s(t, e) {
                n(t, function (t) {
                  if (o(t, e)) return !0;
                });
              }
              var a =
                window.MutationObserver._isPolyfilled && e["throttle-attached"];
              (t.hasPolyfillMutations = a), (t.hasThrottledAttached = a);
              var u = !1,
                c = [];
              function l(t) {
                c.push(t), u || ((u = !0), setTimeout(h));
              }
              function h() {
                u = !1;
                for (
                  var t, e = c, n = 0, i = e.length;
                  n < i && (t = e[n]);
                  n++
                )
                  t();
                c = [];
              }
              function p(t) {
                a
                  ? l(function () {
                      d(t);
                    })
                  : d(t);
              }
              function d(t) {
                t.__upgraded__ &&
                  !t.__attached &&
                  ((t.__attached = !0),
                  t.attachedCallback && t.attachedCallback());
              }
              function f(t) {
                a
                  ? l(function () {
                      g(t);
                    })
                  : g(t);
              }
              function g(t) {
                t.__upgraded__ &&
                  t.__attached &&
                  ((t.__attached = !1),
                  t.detachedCallback && t.detachedCallback());
              }
              function m(t, i) {
                if (e.dom) {
                  var o = i[0];
                  if (
                    o &&
                    "childList" === o.type &&
                    o.addedNodes &&
                    o.addedNodes
                  ) {
                    for (
                      var s = o.addedNodes[0];
                      s && s !== document && !s.host;

                    )
                      s = s.parentNode;
                    var a =
                      (s &&
                        (s.URL || s._URL || (s.host && s.host.localName))) ||
                      "";
                    a = a.split("/?").shift().split("/").pop();
                  }
                  console.group("mutations (%d) [%s]", i.length, a || "");
                }
                var u = (function (t) {
                  for (var e = t, n = window.wrap(document); e; ) {
                    if (e == n) return !0;
                    e =
                      e.parentNode ||
                      (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host);
                  }
                })(t);
                i.forEach(function (t) {
                  "childList" === t.type &&
                    (y(t.addedNodes, function (t) {
                      t.localName && r(t, u);
                    }),
                    y(t.removedNodes, function (t) {
                      var e;
                      t.localName &&
                        (f((e = t)),
                        n(e, function (t) {
                          f(t);
                        }));
                    }));
                }),
                  e.dom && console.groupEnd();
              }
              var y = Array.prototype.forEach.call.bind(
                Array.prototype.forEach,
              );
              function v(t) {
                if (!t.__observer) {
                  var e = new MutationObserver(m.bind(this, t));
                  e.observe(t, { childList: !0, subtree: !0 }),
                    (t.__observer = e);
                }
              }
              function b(t) {
                (t = window.wrap(t)),
                  e.dom &&
                    console.group(
                      "upgradeDocument: ",
                      t.baseURI.split("/").pop(),
                    ),
                  r(t, t === window.wrap(document)),
                  v(t),
                  e.dom && console.groupEnd();
              }
              var A = Element.prototype.createShadowRoot;
              A &&
                (Element.prototype.createShadowRoot = function () {
                  var t = A.call(this);
                  return window.CustomElements.watchShadow(this), t;
                }),
                (t.watchShadow = function (t) {
                  if (t.shadowRoot && !t.shadowRoot.__watched) {
                    e.dom &&
                      console.log("watching shadow-root for: ", t.localName);
                    for (var n = t.shadowRoot; n; )
                      v(n), (n = n.olderShadowRoot);
                  }
                }),
                (t.upgradeDocumentTree = function (t) {
                  i(t, b);
                }),
                (t.upgradeDocument = b),
                (t.upgradeSubtree = s),
                (t.upgradeAll = r),
                (t.attached = p),
                (t.takeRecords = function (t) {
                  for (
                    (t = window.wrap(t)) || (t = window.wrap(document));
                    t.parentNode;

                  )
                    t = t.parentNode;
                  var e = t.__observer;
                  e && (m(t, e.takeRecords()), h());
                });
            }),
            window.CustomElements.addModule(function (t) {
              var e = t.flags;
              function n(n, r, o) {
                return (
                  e.upgrade && console.group("upgrade:", n.localName),
                  r.is && n.setAttribute("is", r.is),
                  i(n, r),
                  (n.__upgraded__ = !0),
                  (function (t) {
                    t.createdCallback && t.createdCallback();
                  })(n),
                  o && t.attached(n),
                  t.upgradeSubtree(n, o),
                  e.upgrade && console.groupEnd(),
                  n
                );
              }
              function i(t, e) {
                Object.__proto__ ||
                  (function (t, e, n) {
                    var i = {},
                      r = e;
                    for (; r !== n && r !== HTMLElement.prototype; ) {
                      for (
                        var o, s = Object.getOwnPropertyNames(r), a = 0;
                        (o = s[a]);
                        a++
                      )
                        i[o] ||
                          (Object.defineProperty(
                            t,
                            o,
                            Object.getOwnPropertyDescriptor(r, o),
                          ),
                          (i[o] = 1));
                      r = Object.getPrototypeOf(r);
                    }
                  })(t, e.prototype, e.native),
                  (t.__proto__ = e.prototype);
              }
              (t.upgrade = function (e, i) {
                if (
                  ("template" === e.localName &&
                    window.HTMLTemplateElement &&
                    HTMLTemplateElement.decorate &&
                    HTMLTemplateElement.decorate(e),
                  !e.__upgraded__ && e.nodeType === Node.ELEMENT_NODE)
                ) {
                  var r = e.getAttribute("is"),
                    o =
                      t.getRegisteredDefinition(e.localName) ||
                      t.getRegisteredDefinition(r);
                  if (o && ((r && o.tag == e.localName) || (!r && !o.extends)))
                    return n(e, o, i);
                }
              }),
                (t.upgradeWithDefinition = n),
                (t.implementPrototype = i);
            }),
            window.CustomElements.addModule(function (t) {
              t.isIE;
              var e = t.upgradeDocumentTree,
                n = t.upgradeAll,
                i = t.upgradeWithDefinition,
                r = t.implementPrototype,
                o = t.useNative;
              function s(t, e, n) {
                t = t.toLowerCase();
                var i = this.getAttribute(t);
                n.apply(this, arguments);
                var r = this.getAttribute(t);
                this.attributeChangedCallback &&
                  r !== i &&
                  this.attributeChangedCallback(t, i, r);
              }
              var a = [
                "annotation-xml",
                "color-profile",
                "font-face",
                "font-face-src",
                "font-face-uri",
                "font-face-format",
                "font-face-name",
                "missing-glyph",
              ];
              function u(t) {
                var e = l(t);
                return e ? u(e.extends).concat([e]) : [];
              }
              var c = {};
              function l(t) {
                if (t) return c[t.toLowerCase()];
              }
              function h(t, e) {
                t && (t = t.toLowerCase()), e && (e = e.toLowerCase());
                var n,
                  i = l(e || t);
                if (i) {
                  if (t == i.tag && e == i.is) return new i.ctor();
                  if (!e && !i.is) return new i.ctor();
                }
                return e
                  ? ((n = h(t)).setAttribute("is", e), n)
                  : ((n = d(t)), t.indexOf("-") >= 0 && r(n, HTMLElement), n);
              }
              var p,
                d = document.createElement.bind(document),
                f = document.createElementNS.bind(document);
              function g(t, e) {
                var i = t[e];
                t[e] = function () {
                  var t = i.apply(this, arguments);
                  return n(t), t;
                };
              }
              (p =
                Object.__proto__ || o
                  ? function (t, e) {
                      return t instanceof e;
                    }
                  : function (t, e) {
                      if (t instanceof e) return !0;
                      for (var n = t; n; ) {
                        if (n === e.prototype) return !0;
                        n = n.__proto__;
                      }
                      return !1;
                    }),
                g(Node.prototype, "cloneNode"),
                g(document, "importNode"),
                (document.registerElement = function (n, r) {
                  var o = r || {};
                  if (!n)
                    throw new Error(
                      "document.registerElement: first argument `name` must not be empty",
                    );
                  if (n.indexOf("-") < 0)
                    throw new Error(
                      "document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" +
                        String(n) +
                        "'.",
                    );
                  if (
                    (function (t) {
                      for (var e = 0; e < a.length; e++)
                        if (t === a[e]) return !0;
                    })(n)
                  )
                    throw new Error(
                      "Failed to execute 'registerElement' on 'Document': Registration failed for type '" +
                        String(n) +
                        "'. The type name is invalid.",
                    );
                  if (l(n))
                    throw new Error(
                      "DuplicateDefinitionError: a type with name '" +
                        String(n) +
                        "' is already registered",
                    );
                  return (
                    o.prototype ||
                      (o.prototype = Object.create(HTMLElement.prototype)),
                    (o.__name = n.toLowerCase()),
                    o.extends && (o.extends = o.extends.toLowerCase()),
                    (o.lifecycle = o.lifecycle || {}),
                    (o.ancestry = u(o.extends)),
                    (function (t) {
                      for (
                        var e, n = t.extends, i = 0;
                        (e = t.ancestry[i]);
                        i++
                      )
                        n = e.is && e.tag;
                      (t.tag = n || t.__name), n && (t.is = t.__name);
                    })(o),
                    (function (t) {
                      if (!Object.__proto__) {
                        var e = HTMLElement.prototype;
                        if (t.is) {
                          var n = document.createElement(t.tag);
                          e = Object.getPrototypeOf(n);
                        }
                        for (var i, r = t.prototype, o = !1; r; )
                          r == e && (o = !0),
                            (i = Object.getPrototypeOf(r)) && (r.__proto__ = i),
                            (r = i);
                        o ||
                          console.warn(
                            t.tag +
                              " prototype not found in prototype chain for " +
                              t.is,
                          ),
                          (t.native = e);
                      }
                    })(o),
                    (function (t) {
                      if (t.setAttribute._polyfilled) return;
                      var e = t.setAttribute;
                      t.setAttribute = function (t, n) {
                        s.call(this, t, n, e);
                      };
                      var n = t.removeAttribute;
                      (t.removeAttribute = function (t) {
                        s.call(this, t, null, n);
                      }),
                        (t.setAttribute._polyfilled = !0);
                    })(o.prototype),
                    (function (t, e) {
                      c[t] = e;
                    })(o.__name, o),
                    (o.ctor = (function (t) {
                      return function () {
                        return (function (t) {
                          return i(d(t.tag), t);
                        })(t);
                      };
                    })(o)),
                    (o.ctor.prototype = o.prototype),
                    (o.prototype.constructor = o.ctor),
                    t.ready && e(document),
                    o.ctor
                  );
                }),
                (document.createElement = h),
                (document.createElementNS = function (t, e, n) {
                  return "http://www.w3.org/1999/xhtml" === t
                    ? h(e, n)
                    : f(t, e);
                }),
                (t.registry = c),
                (t.instanceof = p),
                (t.reservedTagList = a),
                (t.getRegisteredDefinition = l),
                (document.register = document.registerElement);
            }),
            (function (t) {
              var e = t.useNative,
                n = t.initializeModules;
              t.isIE;
              if (e) {
                var i = function () {};
                (t.watchShadow = i),
                  (t.upgrade = i),
                  (t.upgradeAll = i),
                  (t.upgradeDocumentTree = i),
                  (t.upgradeSubtree = i),
                  (t.takeRecords = i),
                  (t.instanceof = function (t, e) {
                    return t instanceof e;
                  });
              } else n();
              var r = t.upgradeDocumentTree,
                o = t.upgradeDocument;
              function s() {
                r(window.wrap(document)),
                  (window.CustomElements.ready = !0),
                  (
                    window.requestAnimationFrame ||
                    function (t) {
                      setTimeout(t, 16);
                    }
                  )(function () {
                    setTimeout(function () {
                      (window.CustomElements.readyTime = Date.now()),
                        window.HTMLImports &&
                          (window.CustomElements.elapsed =
                            window.CustomElements.readyTime -
                            window.HTMLImports.readyTime),
                        document.dispatchEvent(
                          new CustomEvent("WebComponentsReady", {
                            bubbles: !0,
                          }),
                        );
                    });
                  });
              }
              if (
                (window.wrap ||
                  (window.ShadowDOMPolyfill
                    ? ((window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded),
                      (window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded))
                    : (window.wrap = window.unwrap =
                        function (t) {
                          return t;
                        })),
                window.HTMLImports &&
                  (window.HTMLImports.__importsParsingHook = function (t) {
                    t.import && o(wrap(t.import));
                  }),
                "complete" === document.readyState || t.flags.eager)
              )
                s();
              else if (
                "interactive" !== document.readyState ||
                window.attachEvent ||
                (window.HTMLImports && !window.HTMLImports.ready)
              ) {
                var a =
                  window.HTMLImports && !window.HTMLImports.ready
                    ? "HTMLImportsLoaded"
                    : "DOMContentLoaded";
                window.addEventListener(a, s);
              } else s();
            })(window.CustomElements));
        }.call(this),
        function () {}.call(this),
        function () {
          (function () {
            (function () {
              this.Trix = {
                VERSION: "1.3.1",
                ZERO_WIDTH_SPACE: "\ufeff",
                NON_BREAKING_SPACE: " ",
                OBJECT_REPLACEMENT_CHARACTER: "￼",
                browser: {
                  composesExistingText: /Android.*Chrome/.test(
                    navigator.userAgent,
                  ),
                  forcesObjectResizing: /Trident.*rv:11/.test(
                    navigator.userAgent,
                  ),
                  supportsInputEvents: (function () {
                    var t, e, n;
                    if ("undefined" == typeof InputEvent) return !1;
                    for (
                      t = 0,
                        e = (n = ["data", "getTargetRanges", "inputType"])
                          .length;
                      t < e;
                      t++
                    )
                      if (!(n[t] in InputEvent.prototype)) return !1;
                    return !0;
                  })(),
                },
                config: {},
              };
            }).call(this);
          }).call(this);
          var o = this.Trix;
          (function () {
            (function () {
              o.BasicObject = (function () {
                var t, e, n;
                function i() {}
                return (
                  (i.proxyMethod = function (n) {
                    var i, r, o, s, a;
                    return (
                      (o = e(n)),
                      (i = o.name),
                      (s = o.toMethod),
                      (a = o.toProperty),
                      (r = o.optional),
                      (this.prototype[i] = function () {
                        var e, n;
                        return (
                          (e =
                            null != s
                              ? r
                                ? "function" == typeof this[s]
                                  ? this[s]()
                                  : void 0
                                : this[s]()
                              : null != a
                                ? this[a]
                                : void 0),
                          r
                            ? null != (n = null != e ? e[i] : void 0)
                              ? t.call(n, e, arguments)
                              : void 0
                            : ((n = e[i]), t.call(n, e, arguments))
                        );
                      })
                    );
                  }),
                  (e = function (t) {
                    var e, i;
                    if (!(i = t.match(n)))
                      throw new Error(
                        "can't parse @proxyMethod expression: " + t,
                      );
                    return (
                      (e = { name: i[4] }),
                      null != i[2]
                        ? (e.toMethod = i[1])
                        : (e.toProperty = i[1]),
                      null != i[3] && (e.optional = !0),
                      e
                    );
                  }),
                  (t = Function.prototype.apply),
                  (n = /^(.+?)(\(\))?(\?)?\.(.+?)$/),
                  i
                );
              })();
            }).call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.Object = (function (e) {
                  var n;
                  function i() {
                    this.id = ++n;
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(i, e),
                    (n = 0),
                    (i.fromJSONString = function (t) {
                      return this.fromJSON(JSON.parse(t));
                    }),
                    (i.prototype.hasSameConstructorAs = function (t) {
                      return (
                        this.constructor ===
                        (null != t ? t.constructor : void 0)
                      );
                    }),
                    (i.prototype.isEqualTo = function (t) {
                      return this === t;
                    }),
                    (i.prototype.inspect = function () {
                      var t, e, n;
                      return (
                        (t = function () {
                          var t, i, r;
                          for (e in ((r = []),
                          (i =
                            null != (t = this.contentsForInspection())
                              ? t
                              : {})))
                            (n = i[e]), r.push(e + "=" + n);
                          return r;
                        }.call(this)),
                        "#<" +
                          this.constructor.name +
                          ":" +
                          this.id +
                          (t.length ? " " + t.join(", ") : "") +
                          ">"
                      );
                    }),
                    (i.prototype.contentsForInspection = function () {}),
                    (i.prototype.toJSONString = function () {
                      return JSON.stringify(this);
                    }),
                    (i.prototype.toUTF16String = function () {
                      return o.UTF16String.box(this);
                    }),
                    (i.prototype.getCacheKey = function () {
                      return this.id.toString();
                    }),
                    i
                  );
                })(o.BasicObject);
              }.call(this),
              function () {
                o.extend = function (t) {
                  var e, n;
                  for (e in t) (n = t[e]), (this[e] = n);
                  return this;
                };
              }.call(this),
              function () {
                o.extend({
                  defer: function (t) {
                    return setTimeout(t, 1);
                  },
                });
              }.call(this),
              function () {
                var t, e;
                o.extend({
                  normalizeSpaces: function (t) {
                    return t
                      .replace(RegExp("" + o.ZERO_WIDTH_SPACE, "g"), "")
                      .replace(RegExp("" + o.NON_BREAKING_SPACE, "g"), " ");
                  },
                  normalizeNewlines: function (t) {
                    return t.replace(/\r\n/g, "\n");
                  },
                  breakableWhitespacePattern: RegExp(
                    "[^\\S" + o.NON_BREAKING_SPACE + "]",
                  ),
                  squishBreakableWhitespace: function (t) {
                    return t
                      .replace(
                        RegExp("" + o.breakableWhitespacePattern.source, "g"),
                        " ",
                      )
                      .replace(/\ {2,}/g, " ");
                  },
                  summarizeStringChange: function (t, n) {
                    var i, r, s, a;
                    return (
                      (t = o.UTF16String.box(t)),
                      (n = o.UTF16String.box(n)).length < t.length
                        ? ((a = (r = e(t, n))[0]), (i = r[1]))
                        : ((i = (s = e(n, t))[0]), (a = s[1])),
                      { added: i, removed: a }
                    );
                  },
                }),
                  (e = function (e, n) {
                    var i, r, s, a, u;
                    return e.isEqualTo(n)
                      ? ["", ""]
                      : ((s = (a = (r = t(e, n)).utf16String.length)
                          ? ((u = r.offset),
                            (i = e.codepoints
                              .slice(0, u)
                              .concat(e.codepoints.slice(u + a))),
                            t(n, o.UTF16String.fromCodepoints(i)))
                          : t(n, e)),
                        [r.utf16String.toString(), s.utf16String.toString()]);
                  }),
                  (t = function (t, e) {
                    var n, i, r;
                    for (
                      n = 0, i = t.length, r = e.length;
                      n < i && t.charAt(n).isEqualTo(e.charAt(n));

                    )
                      n++;
                    for (
                      ;
                      i > n + 1 && t.charAt(i - 1).isEqualTo(e.charAt(r - 1));

                    )
                      i--, r--;
                    return { utf16String: t.slice(n, i), offset: n };
                  });
              }.call(this),
              function () {
                o.extend({
                  copyObject: function (t) {
                    var e, n, i;
                    for (e in (null == t && (t = {}), (n = {}), t))
                      (i = t[e]), (n[e] = i);
                    return n;
                  },
                  objectsAreEqual: function (t, e) {
                    var n;
                    if (
                      (null == t && (t = {}),
                      null == e && (e = {}),
                      Object.keys(t).length !== Object.keys(e).length)
                    )
                      return !1;
                    for (n in t) if (t[n] !== e[n]) return !1;
                    return !0;
                  },
                });
              }.call(this),
              function () {
                var t = [].slice;
                o.extend({
                  arraysAreEqual: function (t, e) {
                    var n, i, r;
                    if (
                      (null == t && (t = []),
                      null == e && (e = []),
                      t.length !== e.length)
                    )
                      return !1;
                    for (i = n = 0, r = t.length; n < r; i = ++n)
                      if (t[i] !== e[i]) return !1;
                    return !0;
                  },
                  arrayStartsWith: function (t, e) {
                    return (
                      null == t && (t = []),
                      null == e && (e = []),
                      o.arraysAreEqual(t.slice(0, e.length), e)
                    );
                  },
                  spliceArray: function () {
                    var e, n, i;
                    return (
                      (n = arguments[0]),
                      (e = 2 <= arguments.length ? t.call(arguments, 1) : []),
                      (i = n.slice(0)).splice.apply(i, e),
                      i
                    );
                  },
                  summarizeArrayChange: function (t, e) {
                    var n, i, r, o, s, a, u, c, l, h, p;
                    for (
                      null == t && (t = []),
                        null == e && (e = []),
                        n = [],
                        h = [],
                        r = new Set(),
                        o = 0,
                        u = t.length;
                      o < u;
                      o++
                    )
                      (p = t[o]), r.add(p);
                    for (i = new Set(), s = 0, c = e.length; s < c; s++)
                      (p = e[s]), i.add(p), r.has(p) || n.push(p);
                    for (a = 0, l = t.length; a < l; a++)
                      (p = t[a]), i.has(p) || h.push(p);
                    return { added: n, removed: h };
                  },
                });
              }.call(this),
              function () {
                var t, e, n, i;
                (t = null),
                  (e = null),
                  (i = null),
                  (n = null),
                  o.extend({
                    getAllAttributeNames: function () {
                      return null != t
                        ? t
                        : (t = o
                            .getTextAttributeNames()
                            .concat(o.getBlockAttributeNames()));
                    },
                    getBlockConfig: function (t) {
                      return o.config.blockAttributes[t];
                    },
                    getBlockAttributeNames: function () {
                      return null != e
                        ? e
                        : (e = Object.keys(o.config.blockAttributes));
                    },
                    getTextConfig: function (t) {
                      return o.config.textAttributes[t];
                    },
                    getTextAttributeNames: function () {
                      return null != i
                        ? i
                        : (i = Object.keys(o.config.textAttributes));
                    },
                    getListAttributeNames: function () {
                      var t, e;
                      return null != n
                        ? n
                        : (n = (function () {
                            var n, i;
                            for (t in ((i = []),
                            (n = o.config.blockAttributes)))
                              null != (e = n[t].listAttribute) && i.push(e);
                            return i;
                          })());
                    },
                  });
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i,
                  r,
                  s =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; e < n; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (t = document.documentElement),
                  (e =
                    null !=
                    (n =
                      null !=
                      (i =
                        null != (r = t.matchesSelector)
                          ? r
                          : t.webkitMatchesSelector)
                        ? i
                        : t.msMatchesSelector)
                      ? n
                      : t.mozMatchesSelector),
                  o.extend({
                    handleEvent: function (e, n) {
                      var i, r, s, a, u, c, l, h, p, d, f;
                      return (
                        (u = (l = null != n ? n : {}).onElement),
                        (a = l.matchingSelector),
                        (f = l.withCallback),
                        (s = l.inPhase),
                        (c = l.preventDefault),
                        (p = l.times),
                        (i = null != u ? u : t),
                        (h = a),
                        f,
                        (d = "capturing" === s),
                        ((r = function (t) {
                          var e;
                          if (
                            (null != p && 0 == --p && r.destroy(),
                            null !=
                              (e = o.findClosestElementFromNode(t.target, {
                                matchingSelector: h,
                              })) && (null != f && f.call(e, t, e), c))
                          )
                            return t.preventDefault();
                        }).destroy = function () {
                          return i.removeEventListener(e, r, d);
                        }),
                        i.addEventListener(e, r, d),
                        r
                      );
                    },
                    handleEventOnce: function (t, e) {
                      return (
                        null == e && (e = {}),
                        (e.times = 1),
                        o.handleEvent(t, e)
                      );
                    },
                    triggerEvent: function (e, n) {
                      var i, r, s, a, u, c, l;
                      return (
                        (c = (l = null != n ? n : {}).onElement),
                        (r = l.bubbles),
                        (s = l.cancelable),
                        (i = l.attributes),
                        (a = null != c ? c : t),
                        (r = !1 !== r),
                        (s = !1 !== s),
                        (u = document.createEvent("Events")).initEvent(e, r, s),
                        null != i && o.extend.call(u, i),
                        a.dispatchEvent(u)
                      );
                    },
                    elementMatchesSelector: function (t, n) {
                      if (1 === (null != t ? t.nodeType : void 0))
                        return e.call(t, n);
                    },
                    findClosestElementFromNode: function (t, e) {
                      var n, i, r;
                      for (
                        n = (i = null != e ? e : {}).matchingSelector,
                          r = i.untilNode;
                        null != t && t.nodeType !== Node.ELEMENT_NODE;

                      )
                        t = t.parentNode;
                      if (null != t) {
                        if (null == n) return t;
                        if (t.closest && null == r) return t.closest(n);
                        for (; t && t !== r; ) {
                          if (o.elementMatchesSelector(t, n)) return t;
                          t = t.parentNode;
                        }
                      }
                    },
                    findInnerElement: function (t) {
                      for (; null != t ? t.firstElementChild : void 0; )
                        t = t.firstElementChild;
                      return t;
                    },
                    innerElementIsActive: function (t) {
                      return (
                        document.activeElement !== t &&
                        o.elementContainsNode(t, document.activeElement)
                      );
                    },
                    elementContainsNode: function (t, e) {
                      if (t && e)
                        for (; e; ) {
                          if (e === t) return !0;
                          e = e.parentNode;
                        }
                    },
                    findNodeFromContainerAndOffset: function (t, e) {
                      var n;
                      if (t)
                        return t.nodeType === Node.TEXT_NODE
                          ? t
                          : 0 === e
                            ? null != (n = t.firstChild)
                              ? n
                              : t
                            : t.childNodes.item(e - 1);
                    },
                    findElementFromContainerAndOffset: function (t, e) {
                      var n;
                      return (
                        (n = o.findNodeFromContainerAndOffset(t, e)),
                        o.findClosestElementFromNode(n)
                      );
                    },
                    findChildIndexOfNode: function (t) {
                      var e;
                      if (null != t ? t.parentNode : void 0) {
                        for (e = 0; (t = t.previousSibling); ) e++;
                        return e;
                      }
                    },
                    removeNode: function (t) {
                      var e;
                      return null != t && null != (e = t.parentNode)
                        ? e.removeChild(t)
                        : void 0;
                    },
                    walkTree: function (t, e) {
                      var n, i, r, o, s;
                      return (
                        (i = (r = null != e ? e : {}).onlyNodesOfType),
                        (o = r.usingFilter),
                        (n = r.expandEntityReferences),
                        (s = (function () {
                          switch (i) {
                            case "element":
                              return NodeFilter.SHOW_ELEMENT;
                            case "text":
                              return NodeFilter.SHOW_TEXT;
                            case "comment":
                              return NodeFilter.SHOW_COMMENT;
                            default:
                              return NodeFilter.SHOW_ALL;
                          }
                        })()),
                        document.createTreeWalker(
                          t,
                          s,
                          null != o ? o : null,
                          !0 === n,
                        )
                      );
                    },
                    tagName: function (t) {
                      var e;
                      return null != t && null != (e = t.tagName)
                        ? e.toLowerCase()
                        : void 0;
                    },
                    makeElement: function (t, e) {
                      var n, i, r, o, s, a, u, c, l, h, p, d, f, g;
                      if (
                        (null == e && (e = {}),
                        "object" == typeof t
                          ? (t = (e = t).tagName)
                          : (e = { attributes: e }),
                        (r = document.createElement(t)),
                        null != e.editable &&
                          (null == e.attributes && (e.attributes = {}),
                          (e.attributes.contenteditable = e.editable)),
                        e.attributes)
                      )
                        for (a in (l = e.attributes))
                          (g = l[a]), r.setAttribute(a, g);
                      if (e.style)
                        for (a in (h = e.style)) (g = h[a]), (r.style[a] = g);
                      if (e.data)
                        for (a in (p = e.data)) (g = p[a]), (r.dataset[a] = g);
                      if (e.className)
                        for (
                          o = 0, u = (d = e.className.split(" ")).length;
                          o < u;
                          o++
                        )
                          (i = d[o]), r.classList.add(i);
                      if (
                        (e.textContent && (r.textContent = e.textContent),
                        e.childNodes)
                      )
                        for (
                          s = 0, c = (f = [].concat(e.childNodes)).length;
                          s < c;
                          s++
                        )
                          (n = f[s]), r.appendChild(n);
                      return r;
                    },
                    getBlockTagNames: function () {
                      var t, e;
                      return null != o.blockTagNames
                        ? o.blockTagNames
                        : (o.blockTagNames = (function () {
                            var n, i;
                            for (t in ((i = []),
                            (n = o.config.blockAttributes)))
                              (e = n[t].tagName) && i.push(e);
                            return i;
                          })());
                    },
                    nodeIsBlockContainer: function (t) {
                      return o.nodeIsBlockStartComment(
                        null != t ? t.firstChild : void 0,
                      );
                    },
                    nodeProbablyIsBlockContainer: function (t) {
                      var e, n;
                      return (
                        (e = o.tagName(t)),
                        s.call(o.getBlockTagNames(), e) >= 0 &&
                          ((n = o.tagName(t.firstChild)),
                          s.call(o.getBlockTagNames(), n) < 0)
                      );
                    },
                    nodeIsBlockStart: function (t, e) {
                      return (null != e ? e : { strict: !0 }).strict
                        ? o.nodeIsBlockStartComment(t)
                        : o.nodeIsBlockStartComment(t) ||
                            (!o.nodeIsBlockStartComment(t.firstChild) &&
                              o.nodeProbablyIsBlockContainer(t));
                    },
                    nodeIsBlockStartComment: function (t) {
                      return (
                        o.nodeIsCommentNode(t) &&
                        "block" === (null != t ? t.data : void 0)
                      );
                    },
                    nodeIsCommentNode: function (t) {
                      return (
                        (null != t ? t.nodeType : void 0) === Node.COMMENT_NODE
                      );
                    },
                    nodeIsCursorTarget: function (t, e) {
                      var n;
                      if (((n = (null != e ? e : {}).name), t))
                        return o.nodeIsTextNode(t)
                          ? t.data === o.ZERO_WIDTH_SPACE
                            ? !n || t.parentNode.dataset.trixCursorTarget === n
                            : void 0
                          : o.nodeIsCursorTarget(t.firstChild);
                    },
                    nodeIsAttachmentElement: function (t) {
                      return o.elementMatchesSelector(
                        t,
                        o.AttachmentView.attachmentSelector,
                      );
                    },
                    nodeIsEmptyTextNode: function (t) {
                      return (
                        o.nodeIsTextNode(t) &&
                        "" === (null != t ? t.data : void 0)
                      );
                    },
                    nodeIsTextNode: function (t) {
                      return (
                        (null != t ? t.nodeType : void 0) === Node.TEXT_NODE
                      );
                    },
                  });
              }.call(this),
              function () {
                var t, e, n, i, r;
                (t = o.copyObject),
                  (i = o.objectsAreEqual),
                  o.extend({
                    normalizeRange: (n = function (t) {
                      var n;
                      if (null != t)
                        return (
                          Array.isArray(t) || (t = [t, t]),
                          [e(t[0]), e(null != (n = t[1]) ? n : t[0])]
                        );
                    }),
                    rangeIsCollapsed: function (t) {
                      var e, i, o;
                      if (null != t)
                        return (o = (i = n(t))[0]), (e = i[1]), r(o, e);
                    },
                    rangesAreEqual: function (t, e) {
                      var i, o, s, a, u, c;
                      if (null != t && null != e)
                        return (
                          (o = (s = n(t))[0]),
                          (i = s[1]),
                          (c = (a = n(e))[0]),
                          (u = a[1]),
                          r(o, c) && r(i, u)
                        );
                    },
                  }),
                  (e = function (e) {
                    return "number" == typeof e ? e : t(e);
                  }),
                  (r = function (t, e) {
                    return "number" == typeof t ? t === e : i(t, e);
                  });
              }.call(this),
              function () {
                var t, e, n, i, r, s, a, u;
                (o.registerElement = function (t, e) {
                  var n, o;
                  return (
                    null == e && (e = {}),
                    (t = t.toLowerCase()),
                    (e = a(e)),
                    (n = (o = s(e)).defaultCSS) &&
                      (delete o.defaultCSS, i(n, t)),
                    r(t, o)
                  );
                }),
                  (i = function (t, e) {
                    return (n(e).textContent = t.replace(/%t/g, e));
                  }),
                  (n = function (e) {
                    var n, i;
                    return (
                      (n = document.createElement("style")).setAttribute(
                        "type",
                        "text/css",
                      ),
                      n.setAttribute("data-tag-name", e.toLowerCase()),
                      (i = t()) && n.setAttribute("nonce", i),
                      document.head.insertBefore(n, document.head.firstChild),
                      n
                    );
                  }),
                  (t = function () {
                    var t;
                    if ((t = e("trix-csp-nonce") || e("csp-nonce")))
                      return t.getAttribute("content");
                  }),
                  (e = function (t) {
                    return document.head.querySelector("meta[name=" + t + "]");
                  }),
                  (s = function (t) {
                    var e, n, i;
                    for (e in ((n = {}), t))
                      (i = t[e]),
                        (n[e] = "function" == typeof i ? { value: i } : i);
                    return n;
                  }),
                  (u = function (t) {
                    var e, n, i, r, o;
                    for (
                      e = {},
                        n = 0,
                        r = (o = ["initialize", "connect", "disconnect"])
                          .length;
                      n < r;
                      n++
                    )
                      (e[(i = o[n])] = t[i]), delete t[i];
                    return e;
                  }),
                  (a = window.customElements
                    ? function (t) {
                        var e, n, i, r, o;
                        return (
                          (o = u(t)),
                          (i = o.initialize),
                          (e = o.connect),
                          (n = o.disconnect),
                          i &&
                            ((r = e),
                            (e = function () {
                              return (
                                this.initialized ||
                                  ((this.initialized = !0), i.call(this)),
                                null != r ? r.call(this) : void 0
                              );
                            })),
                          e && (t.connectedCallback = e),
                          n && (t.disconnectedCallback = n),
                          t
                        );
                      }
                    : function (t) {
                        var e, n, i, r;
                        return (
                          (i = (r = u(t)).initialize),
                          (e = r.connect),
                          (n = r.disconnect),
                          i && (t.createdCallback = i),
                          e && (t.attachedCallback = e),
                          n && (t.detachedCallback = n),
                          t
                        );
                      }),
                  (r = window.customElements
                    ? function (t, e) {
                        var n;
                        return (
                          (n = function () {
                            return "object" == typeof Reflect
                              ? Reflect.construct(HTMLElement, [], n)
                              : HTMLElement.apply(this);
                          }),
                          Object.setPrototypeOf(
                            n.prototype,
                            HTMLElement.prototype,
                          ),
                          Object.setPrototypeOf(n, HTMLElement),
                          Object.defineProperties(n.prototype, e),
                          window.customElements.define(t, n),
                          n
                        );
                      }
                    : function (t, e) {
                        var n, i;
                        return (
                          (i = Object.create(HTMLElement.prototype, e)),
                          (n = document.registerElement(t, { prototype: i })),
                          Object.defineProperty(i, "constructor", { value: n }),
                          n
                        );
                      });
              }.call(this),
              function () {
                var t, e;
                o.extend({
                  getDOMSelection: function () {
                    var t;
                    if ((t = window.getSelection()).rangeCount > 0) return t;
                  },
                  getDOMRange: function () {
                    var e, n;
                    if (
                      (e =
                        null != (n = o.getDOMSelection())
                          ? n.getRangeAt(0)
                          : void 0) &&
                      !t(e)
                    )
                      return e;
                  },
                  setDOMRange: function (t) {
                    var e;
                    return (
                      (e = window.getSelection()).removeAllRanges(),
                      e.addRange(t),
                      o.selectionChangeObserver.update()
                    );
                  },
                }),
                  (t = function (t) {
                    return e(t.startContainer) || e(t.endContainer);
                  }),
                  (e = function (t) {
                    return !Object.getPrototypeOf(t);
                  });
              }.call(this),
              function () {
                var t;
                (t = { "application/x-trix-feature-detection": "test" }),
                  o.extend({
                    dataTransferIsPlainText: function (t) {
                      var e, n, i;
                      return (
                        (i = t.getData("text/plain")),
                        (n = t.getData("text/html")),
                        i && n
                          ? (e = new DOMParser().parseFromString(
                              n,
                              "text/html",
                            ).body).textContent === i
                            ? !e.querySelector("*")
                            : void 0
                          : null != i
                            ? i.length
                            : void 0
                      );
                    },
                    dataTransferIsWritable: function (e) {
                      var n, i;
                      if (null != (null != e ? e.setData : void 0)) {
                        for (n in t)
                          if (
                            ((i = t[n]),
                            !(function () {
                              try {
                                return e.setData(n, i), e.getData(n) === i;
                              } catch (t) {}
                            })())
                          )
                            return;
                        return !0;
                      }
                    },
                    keyEventIsKeyboardCommand: /Mac|^iP/.test(
                      navigator.platform,
                    )
                      ? function (t) {
                          return t.metaKey;
                        }
                      : function (t) {
                          return t.ctrlKey;
                        },
                  });
              }.call(this),
              function () {
                var t, e, n, i;
                o.extend({
                  RTL_PATTERN:
                    /[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,
                  getDirection:
                    ((e = o.makeElement("input", {
                      dir: "auto",
                      name: "x",
                      dirName: "x.dir",
                    })),
                    (t = o.makeElement("form")).appendChild(e),
                    (n = (function () {
                      try {
                        return new FormData(t).has(e.dirName);
                      } catch (t) {}
                    })()),
                    (i = (function () {
                      try {
                        return e.matches(":dir(ltr),:dir(rtl)");
                      } catch (t) {}
                    })()),
                    n
                      ? function (n) {
                          return (e.value = n), new FormData(t).get(e.dirName);
                        }
                      : i
                        ? function (t) {
                            return (
                              (e.value = t),
                              e.matches(":dir(rtl)") ? "rtl" : "ltr"
                            );
                          }
                        : function (t) {
                            var e;
                            return (
                              (e = t.trim().charAt(0)),
                              o.RTL_PATTERN.test(e) ? "rtl" : "ltr"
                            );
                          }),
                });
              }.call(this),
              function () {}.call(this),
              function () {
                var t,
                  e = {}.hasOwnProperty;
                (t = o.arraysAreEqual),
                  (o.Hash = (function (n) {
                    var i, r, s, a, u;
                    function c(t) {
                      null == t && (t = {}),
                        (this.values = r(t)),
                        c.__super__.constructor.apply(this, arguments);
                    }
                    return (
                      (function (t, n) {
                        for (var i in n) e.call(n, i) && (t[i] = n[i]);
                        function r() {
                          this.constructor = t;
                        }
                        (r.prototype = n.prototype),
                          (t.prototype = new r()),
                          (t.__super__ = n.prototype);
                      })(c, n),
                      (c.fromCommonAttributesOfObjects = function (t) {
                        var e, n, r, o, s, a;
                        if ((null == t && (t = []), !t.length))
                          return new this();
                        for (
                          r = (e = i(t[0])).getKeys(),
                            n = 0,
                            o = (a = t.slice(1)).length;
                          n < o;
                          n++
                        )
                          (s = a[n]),
                            (r = e.getKeysCommonToHash(i(s))),
                            (e = e.slice(r));
                        return e;
                      }),
                      (c.box = function (t) {
                        return i(t);
                      }),
                      (c.prototype.add = function (t, e) {
                        return this.merge(a(t, e));
                      }),
                      (c.prototype.remove = function (t) {
                        return new o.Hash(r(this.values, t));
                      }),
                      (c.prototype.get = function (t) {
                        return this.values[t];
                      }),
                      (c.prototype.has = function (t) {
                        return t in this.values;
                      }),
                      (c.prototype.merge = function (t) {
                        return new o.Hash(s(this.values, u(t)));
                      }),
                      (c.prototype.slice = function (t) {
                        var e, n, i, r;
                        for (r = {}, e = 0, i = t.length; e < i; e++)
                          (n = t[e]), this.has(n) && (r[n] = this.values[n]);
                        return new o.Hash(r);
                      }),
                      (c.prototype.getKeys = function () {
                        return Object.keys(this.values);
                      }),
                      (c.prototype.getKeysCommonToHash = function (t) {
                        var e, n, r, o, s;
                        for (
                          t = i(t),
                            s = [],
                            e = 0,
                            r = (o = this.getKeys()).length;
                          e < r;
                          e++
                        )
                          (n = o[e]),
                            this.values[n] === t.values[n] && s.push(n);
                        return s;
                      }),
                      (c.prototype.isEqualTo = function (e) {
                        return t(this.toArray(), i(e).toArray());
                      }),
                      (c.prototype.isEmpty = function () {
                        return 0 === this.getKeys().length;
                      }),
                      (c.prototype.toArray = function () {
                        var t, e, n;
                        return (
                          null != this.array
                            ? this.array
                            : (this.array = function () {
                                var i;
                                for (t in ((e = []), (i = this.values)))
                                  (n = i[t]), e.push(t, n);
                                return e;
                              }.call(this))
                        ).slice(0);
                      }),
                      (c.prototype.toObject = function () {
                        return r(this.values);
                      }),
                      (c.prototype.toJSON = function () {
                        return this.toObject();
                      }),
                      (c.prototype.contentsForInspection = function () {
                        return { values: JSON.stringify(this.values) };
                      }),
                      (a = function (t, e) {
                        var n;
                        return ((n = {})[t] = e), n;
                      }),
                      (s = function (t, e) {
                        var n, i, o;
                        for (n in ((i = r(t)), e)) (o = e[n]), (i[n] = o);
                        return i;
                      }),
                      (r = function (t, e) {
                        var n, i, r, o, s;
                        for (
                          o = {}, n = 0, r = (s = Object.keys(t).sort()).length;
                          n < r;
                          n++
                        )
                          (i = s[n]) !== e && (o[i] = t[i]);
                        return o;
                      }),
                      (i = function (t) {
                        return t instanceof o.Hash ? t : new o.Hash(t);
                      }),
                      (u = function (t) {
                        return t instanceof o.Hash ? t.values : t;
                      }),
                      c
                    );
                  })(o.Object));
              }.call(this),
              function () {
                o.ObjectGroup = (function () {
                  function t(t, e) {
                    var n, i;
                    (this.objects = null != t ? t : []),
                      (i = e.depth),
                      (n = e.asTree) &&
                        ((this.depth = i),
                        (this.objects = this.constructor.groupObjects(
                          this.objects,
                          { asTree: n, depth: this.depth + 1 },
                        )));
                  }
                  return (
                    (t.groupObjects = function (t, e) {
                      var n, i, r, o, s, a, u, c, l;
                      for (
                        null == t && (t = []),
                          r = (l = null != e ? e : {}).depth,
                          (n = l.asTree) && null == r && (r = 0),
                          c = [],
                          s = 0,
                          a = t.length;
                        s < a;
                        s++
                      ) {
                        if (((u = t[s]), o)) {
                          if (
                            ("function" == typeof u.canBeGrouped
                              ? u.canBeGrouped(r)
                              : void 0) &&
                            ("function" ==
                            typeof (i = o[o.length - 1]).canBeGroupedWith
                              ? i.canBeGroupedWith(u, r)
                              : void 0)
                          ) {
                            o.push(u);
                            continue;
                          }
                          c.push(new this(o, { depth: r, asTree: n })),
                            (o = null);
                        }
                        (
                          "function" == typeof u.canBeGrouped
                            ? u.canBeGrouped(r)
                            : void 0
                        )
                          ? (o = [u])
                          : c.push(u);
                      }
                      return (
                        o && c.push(new this(o, { depth: r, asTree: n })), c
                      );
                    }),
                    (t.prototype.getObjects = function () {
                      return this.objects;
                    }),
                    (t.prototype.getDepth = function () {
                      return this.depth;
                    }),
                    (t.prototype.getCacheKey = function () {
                      var t, e, n, i, r;
                      for (
                        e = ["objectGroup"],
                          t = 0,
                          n = (r = this.getObjects()).length;
                        t < n;
                        t++
                      )
                        (i = r[t]), e.push(i.getCacheKey());
                      return e.join("/");
                    }),
                    t
                  );
                })();
              }.call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.ObjectMap = (function (e) {
                  function n(t) {
                    var e, n, i, r, o;
                    for (
                      null == t && (t = []),
                        this.objects = {},
                        i = 0,
                        r = t.length;
                      i < r;
                      i++
                    )
                      (o = t[i]),
                        (n = JSON.stringify(o)),
                        null == (e = this.objects)[n] && (e[n] = o);
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(n, e),
                    (n.prototype.find = function (t) {
                      var e;
                      return (e = JSON.stringify(t)), this.objects[e];
                    }),
                    n
                  );
                })(o.BasicObject);
              }.call(this),
              function () {
                o.ElementStore = (function () {
                  var t;
                  function e(t) {
                    this.reset(t);
                  }
                  return (
                    (e.prototype.add = function (e) {
                      var n;
                      return (n = t(e)), (this.elements[n] = e);
                    }),
                    (e.prototype.remove = function (e) {
                      var n, i;
                      if (((n = t(e)), (i = this.elements[n])))
                        return delete this.elements[n], i;
                    }),
                    (e.prototype.reset = function (t) {
                      var e, n, i;
                      for (
                        null == t && (t = []),
                          this.elements = {},
                          n = 0,
                          i = t.length;
                        n < i;
                        n++
                      )
                        (e = t[n]), this.add(e);
                      return t;
                    }),
                    (t = function (t) {
                      return t.dataset.trixStoreKey;
                    }),
                    e
                  );
                })();
              }.call(this),
              function () {}.call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.Operation = (function (e) {
                  function n() {
                    return n.__super__.constructor.apply(this, arguments);
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(n, e),
                    (n.prototype.isPerforming = function () {
                      return !0 === this.performing;
                    }),
                    (n.prototype.hasPerformed = function () {
                      return !0 === this.performed;
                    }),
                    (n.prototype.hasSucceeded = function () {
                      return this.performed && this.succeeded;
                    }),
                    (n.prototype.hasFailed = function () {
                      return this.performed && !this.succeeded;
                    }),
                    (n.prototype.getPromise = function () {
                      return null != this.promise
                        ? this.promise
                        : (this.promise = new Promise(
                            ((t = this),
                            function (e, n) {
                              return (
                                (t.performing = !0),
                                t.perform(function (i, r) {
                                  return (
                                    (t.succeeded = i),
                                    (t.performing = !1),
                                    (t.performed = !0),
                                    t.succeeded ? e(r) : n(r)
                                  );
                                })
                              );
                            }),
                          ));
                      var t;
                    }),
                    (n.prototype.perform = function (t) {
                      return t(!1);
                    }),
                    (n.prototype.release = function () {
                      var t;
                      return (
                        null != (t = this.promise) &&
                          "function" == typeof t.cancel &&
                          t.cancel(),
                        (this.promise = null),
                        (this.performing = null),
                        (this.performed = null),
                        (this.succeeded = null)
                      );
                    }),
                    n.proxyMethod("getPromise().then"),
                    n.proxyMethod("getPromise().catch"),
                    n
                  );
                })(o.BasicObject);
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i,
                  r,
                  s = {}.hasOwnProperty;
                (o.UTF16String = (function (t) {
                  function e(t, e) {
                    (this.ucs2String = t),
                      (this.codepoints = e),
                      (this.length = this.codepoints.length),
                      (this.ucs2Length = this.ucs2String.length);
                  }
                  return (
                    (function (t, e) {
                      for (var n in e) s.call(e, n) && (t[n] = e[n]);
                      function i() {
                        this.constructor = t;
                      }
                      (i.prototype = e.prototype),
                        (t.prototype = new i()),
                        (t.__super__ = e.prototype);
                    })(e, t),
                    (e.box = function (t) {
                      return (
                        null == t && (t = ""),
                        t instanceof this
                          ? t
                          : this.fromUCS2String(
                              null != t ? t.toString() : void 0,
                            )
                      );
                    }),
                    (e.fromUCS2String = function (t) {
                      return new this(t, i(t));
                    }),
                    (e.fromCodepoints = function (t) {
                      return new this(r(t), t);
                    }),
                    (e.prototype.offsetToUCS2Offset = function (t) {
                      return r(this.codepoints.slice(0, Math.max(0, t))).length;
                    }),
                    (e.prototype.offsetFromUCS2Offset = function (t) {
                      return i(this.ucs2String.slice(0, Math.max(0, t))).length;
                    }),
                    (e.prototype.slice = function () {
                      var t;
                      return this.constructor.fromCodepoints(
                        (t = this.codepoints).slice.apply(t, arguments),
                      );
                    }),
                    (e.prototype.charAt = function (t) {
                      return this.slice(t, t + 1);
                    }),
                    (e.prototype.isEqualTo = function (t) {
                      return (
                        this.constructor.box(t).ucs2String === this.ucs2String
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.ucs2String;
                    }),
                    (e.prototype.getCacheKey = function () {
                      return this.ucs2String;
                    }),
                    (e.prototype.toString = function () {
                      return this.ucs2String;
                    }),
                    e
                  );
                })(o.BasicObject)),
                  (t =
                    1 ===
                    ("function" == typeof Array.from
                      ? Array.from("👼").length
                      : void 0)),
                  (e =
                    null !=
                    ("function" == typeof " ".codePointAt
                      ? " ".codePointAt(0)
                      : void 0)),
                  (n =
                    " 👼" ===
                    ("function" == typeof String.fromCodePoint
                      ? String.fromCodePoint(32, 128124)
                      : void 0)),
                  (i =
                    t && e
                      ? function (t) {
                          return Array.from(t).map(function (t) {
                            return t.codePointAt(0);
                          });
                        }
                      : function (t) {
                          var e, n, i, r, o;
                          for (r = [], e = 0, i = t.length; e < i; )
                            55296 <= (o = t.charCodeAt(e++)) &&
                              o <= 56319 &&
                              e < i &&
                              (56320 == (64512 & (n = t.charCodeAt(e++)))
                                ? (o = ((1023 & o) << 10) + (1023 & n) + 65536)
                                : e--),
                              r.push(o);
                          return r;
                        }),
                  (r = n
                    ? function (t) {
                        return String.fromCodePoint.apply(String, t);
                      }
                    : function (t) {
                        var e, n;
                        return (function () {
                          var i, r, o;
                          for (o = [], i = 0, r = t.length; i < r; i++)
                            (n = t[i]),
                              (e = ""),
                              n > 65535 &&
                                ((n -= 65536),
                                (e += String.fromCharCode(
                                  ((n >>> 10) & 1023) | 55296,
                                )),
                                (n = 56320 | (1023 & n))),
                              o.push(e + String.fromCharCode(n));
                          return o;
                        })().join("");
                      });
              }.call(this),
              function () {}.call(this),
              function () {}.call(this),
              function () {
                o.config.lang = {
                  attachFiles: "Attach Files",
                  bold: "Bold",
                  bullets: "Bullets",
                  byte: "Byte",
                  bytes: "Bytes",
                  captionPlaceholder: "Add a caption…",
                  code: "Code",
                  heading1: "Heading",
                  indent: "Increase Level",
                  italic: "Italic",
                  link: "Link",
                  numbers: "Numbers",
                  outdent: "Decrease Level",
                  quote: "Quote",
                  redo: "Redo",
                  remove: "Remove",
                  strike: "Strikethrough",
                  undo: "Undo",
                  unlink: "Unlink",
                  url: "URL",
                  urlPlaceholder: "Enter a URL…",
                  GB: "GB",
                  KB: "KB",
                  MB: "MB",
                  PB: "PB",
                  TB: "TB",
                };
              }.call(this),
              function () {
                o.config.css = {
                  attachment: "attachment",
                  attachmentCaption: "attachment__caption",
                  attachmentCaptionEditor: "attachment__caption-editor",
                  attachmentMetadata: "attachment__metadata",
                  attachmentMetadataContainer: "attachment__metadata-container",
                  attachmentName: "attachment__name",
                  attachmentProgress: "attachment__progress",
                  attachmentSize: "attachment__size",
                  attachmentToolbar: "attachment__toolbar",
                  attachmentGallery: "attachment-gallery",
                };
              }.call(this),
              function () {
                var t;
                o.config.blockAttributes = t = {
                  default: { tagName: "div", parse: !1 },
                  quote: { tagName: "blockquote", nestable: !0 },
                  heading1: {
                    tagName: "h1",
                    terminal: !0,
                    breakOnReturn: !0,
                    group: !1,
                  },
                  code: {
                    tagName: "pre",
                    terminal: !0,
                    text: { plaintext: !0 },
                  },
                  bulletList: { tagName: "ul", parse: !1 },
                  bullet: {
                    tagName: "li",
                    listAttribute: "bulletList",
                    group: !1,
                    nestable: !0,
                    test: function (e) {
                      return (
                        o.tagName(e.parentNode) ===
                        t[this.listAttribute].tagName
                      );
                    },
                  },
                  numberList: { tagName: "ol", parse: !1 },
                  number: {
                    tagName: "li",
                    listAttribute: "numberList",
                    group: !1,
                    nestable: !0,
                    test: function (e) {
                      return (
                        o.tagName(e.parentNode) ===
                        t[this.listAttribute].tagName
                      );
                    },
                  },
                  attachmentGallery: {
                    tagName: "div",
                    exclusive: !0,
                    terminal: !0,
                    parse: !1,
                    group: !1,
                  },
                };
              }.call(this),
              function () {
                var t, e;
                (t = o.config.lang),
                  (e = [t.bytes, t.KB, t.MB, t.GB, t.TB, t.PB]),
                  (o.config.fileSize = {
                    prefix: "IEC",
                    precision: 2,
                    formatter: function (n) {
                      var i, r;
                      switch (n) {
                        case 0:
                          return "0 " + t.bytes;
                        case 1:
                          return "1 " + t.byte;
                        default:
                          return (
                            (i = function () {
                              switch (this.prefix) {
                                case "SI":
                                  return 1e3;
                                case "IEC":
                                  return 1024;
                              }
                            }.call(this)),
                            (r = Math.floor(Math.log(n) / Math.log(i))),
                            (n / Math.pow(i, r))
                              .toFixed(this.precision)
                              .replace(/0*$/, "")
                              .replace(/\.$/, "") +
                              " " +
                              e[r]
                          );
                      }
                    },
                  });
              }.call(this),
              function () {
                o.config.textAttributes = {
                  bold: {
                    tagName: "strong",
                    inheritable: !0,
                    parser: function (t) {
                      var e;
                      return (
                        "bold" ===
                          (e = window.getComputedStyle(t)).fontWeight ||
                        e.fontWeight >= 600
                      );
                    },
                  },
                  italic: {
                    tagName: "em",
                    inheritable: !0,
                    parser: function (t) {
                      return "italic" === window.getComputedStyle(t).fontStyle;
                    },
                  },
                  href: {
                    groupTagName: "a",
                    parser: function (t) {
                      var e, n;
                      if (
                        ((n =
                          "a:not(" + o.AttachmentView.attachmentSelector + ")"),
                        (e = o.findClosestElementFromNode(t, {
                          matchingSelector: n,
                        })))
                      )
                        return e.getAttribute("href");
                    },
                  },
                  strike: { tagName: "del", inheritable: !0 },
                  frozen: {
                    style: { backgroundColor: "highlight" },
                    className: "trix-frozen",
                  },
                };
              }.call(this),
              function () {
                var t, e, n, i;
                (i = [
                  "contenteditable",
                  "data-trix-id",
                  "data-trix-store-key",
                  "data-trix-mutable",
                  "data-trix-placeholder",
                  "tabindex",
                ]),
                  (n = "[" + (e = "data-trix-serialized-attributes") + "]"),
                  (t = new RegExp("\x3c!--block--\x3e", "g")),
                  o.extend({
                    serializers: {
                      "application/json": function (t) {
                        var e;
                        if (t instanceof o.Document) e = t;
                        else {
                          if (!(t instanceof HTMLElement))
                            throw new Error("unserializable object");
                          e = o.Document.fromHTML(t.innerHTML);
                        }
                        return e.toSerializableDocument().toJSONString();
                      },
                      "text/html": function (r) {
                        var s, a, u, c, l, h, p, d, f, g, m, y, v, b, A, x, C;
                        if (r instanceof o.Document)
                          c = o.DocumentView.render(r);
                        else {
                          if (!(r instanceof HTMLElement))
                            throw new Error("unserializable object");
                          c = r.cloneNode(!0);
                        }
                        for (
                          l = 0,
                            f = (b = c.querySelectorAll(
                              "[data-trix-serialize=false]",
                            )).length;
                          l < f;
                          l++
                        )
                          (u = b[l]), o.removeNode(u);
                        for (h = 0, g = i.length; h < g; h++)
                          for (
                            s = i[h],
                              p = 0,
                              m = (A = c.querySelectorAll("[" + s + "]"))
                                .length;
                            p < m;
                            p++
                          )
                            (u = A[p]).removeAttribute(s);
                        for (
                          d = 0, y = (x = c.querySelectorAll(n)).length;
                          d < y;
                          d++
                        ) {
                          u = x[d];
                          try {
                            for (v in ((a = JSON.parse(u.getAttribute(e))),
                            u.removeAttribute(e),
                            a))
                              (C = a[v]), u.setAttribute(v, C);
                          } catch (t) {}
                        }
                        return c.innerHTML.replace(t, "");
                      },
                    },
                    deserializers: {
                      "application/json": function (t) {
                        return o.Document.fromJSONString(t);
                      },
                      "text/html": function (t) {
                        return o.Document.fromHTML(t);
                      },
                    },
                    serializeToContentType: function (t, e) {
                      var n;
                      if ((n = o.serializers[e])) return n(t);
                      throw new Error("unknown content type: " + e);
                    },
                    deserializeFromContentType: function (t, e) {
                      var n;
                      if ((n = o.deserializers[e])) return n(t);
                      throw new Error("unknown content type: " + e);
                    },
                  });
              }.call(this),
              function () {
                o.config.toolbar = {
                  getDefaultHTML: function () {
                    var t;
                    return (
                      '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="' +
                      (t = o.config.lang).bold +
                      '" tabindex="-1">' +
                      t.bold +
                      '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="' +
                      t.italic +
                      '" tabindex="-1">' +
                      t.italic +
                      '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="' +
                      t.strike +
                      '" tabindex="-1">' +
                      t.strike +
                      '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="' +
                      t.link +
                      '" tabindex="-1">' +
                      t.link +
                      '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="' +
                      t.heading1 +
                      '" tabindex="-1">' +
                      t.heading1 +
                      '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="' +
                      t.quote +
                      '" tabindex="-1">' +
                      t.quote +
                      '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="' +
                      t.code +
                      '" tabindex="-1">' +
                      t.code +
                      '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="' +
                      t.bullets +
                      '" tabindex="-1">' +
                      t.bullets +
                      '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="' +
                      t.numbers +
                      '" tabindex="-1">' +
                      t.numbers +
                      '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="' +
                      t.outdent +
                      '" tabindex="-1">' +
                      t.outdent +
                      '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="' +
                      t.indent +
                      '" tabindex="-1">' +
                      t.indent +
                      '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="' +
                      t.attachFiles +
                      '" tabindex="-1">' +
                      t.attachFiles +
                      '</button>\n  </span>\n\n  <span class="trix-button-group-spacer"></span>\n\n  <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="' +
                      t.undo +
                      '" tabindex="-1">' +
                      t.undo +
                      '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="' +
                      t.redo +
                      '" tabindex="-1">' +
                      t.redo +
                      '</button>\n  </span>\n</div>\n\n<div class="trix-dialogs" data-trix-dialogs>\n  <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n    <div class="trix-dialog__link-fields">\n      <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="' +
                      t.urlPlaceholder +
                      '" aria-label="' +
                      t.url +
                      '" required data-trix-input>\n      <div class="trix-button-group">\n        <input type="button" class="trix-button trix-button--dialog" value="' +
                      t.link +
                      '" data-trix-method="setAttribute">\n        <input type="button" class="trix-button trix-button--dialog" value="' +
                      t.unlink +
                      '" data-trix-method="removeAttribute">\n      </div>\n    </div>\n  </div>\n</div>'
                    );
                  },
                };
              }.call(this),
              function () {
                o.config.undoInterval = 5e3;
              }.call(this),
              function () {
                o.config.attachments = {
                  preview: {
                    presentation: "gallery",
                    caption: { name: !0, size: !0 },
                  },
                  file: { caption: { size: !0 } },
                };
              }.call(this),
              function () {
                o.config.keyNames = {
                  8: "backspace",
                  9: "tab",
                  13: "return",
                  27: "escape",
                  37: "left",
                  39: "right",
                  46: "delete",
                  68: "d",
                  72: "h",
                  79: "o",
                };
              }.call(this),
              function () {
                o.config.input = {
                  level2Enabled: !0,
                  getLevel: function () {
                    return this.level2Enabled && o.browser.supportsInputEvents
                      ? 2
                      : 0;
                  },
                  pickFiles: function (t) {
                    var e;
                    return (
                      (e = o.makeElement("input", {
                        type: "file",
                        multiple: !0,
                        hidden: !0,
                        id: this.fileInputId,
                      })).addEventListener("change", function () {
                        return t(e.files), o.removeNode(e);
                      }),
                      o.removeNode(document.getElementById(this.fileInputId)),
                      document.body.appendChild(e),
                      e.click()
                    );
                  },
                  fileInputId: "trix-file-input-" + Date.now().toString(16),
                };
              }.call(this),
              function () {}.call(this),
              function () {
                o.registerElement("trix-toolbar", {
                  defaultCSS:
                    "%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}",
                  initialize: function () {
                    if ("" === this.innerHTML)
                      return (this.innerHTML =
                        o.config.toolbar.getDefaultHTML());
                  },
                });
              }.call(this),
              function () {
                var t = {}.hasOwnProperty,
                  e =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; e < n; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                o.ObjectView = (function (n) {
                  function i(t, e) {
                    (this.object = t),
                      (this.options = null != e ? e : {}),
                      (this.childViews = []),
                      (this.rootView = this);
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(i, n),
                    (i.prototype.getNodes = function () {
                      var t, e, n, i, r;
                      for (
                        null == this.nodes && (this.nodes = this.createNodes()),
                          r = [],
                          t = 0,
                          e = (i = this.nodes).length;
                        t < e;
                        t++
                      )
                        (n = i[t]), r.push(n.cloneNode(!0));
                      return r;
                    }),
                    (i.prototype.invalidate = function () {
                      var t;
                      return (
                        (this.nodes = null),
                        (this.childViews = []),
                        null != (t = this.parentView) ? t.invalidate() : void 0
                      );
                    }),
                    (i.prototype.invalidateViewForObject = function (t) {
                      var e;
                      return null != (e = this.findViewForObject(t))
                        ? e.invalidate()
                        : void 0;
                    }),
                    (i.prototype.findOrCreateCachedChildView = function (
                      t,
                      e,
                      n,
                    ) {
                      var i;
                      return (
                        (i = this.getCachedViewForObject(e))
                          ? this.recordChildView(i)
                          : ((i = this.createChildView.apply(this, arguments)),
                            this.cacheViewForObject(i, e)),
                        i
                      );
                    }),
                    (i.prototype.createChildView = function (t, e, n) {
                      var i;
                      return (
                        null == n && (n = {}),
                        e instanceof o.ObjectGroup &&
                          ((n.viewClass = t), (t = o.ObjectGroupView)),
                        (i = new t(e, n)),
                        this.recordChildView(i)
                      );
                    }),
                    (i.prototype.recordChildView = function (t) {
                      return (
                        (t.parentView = this),
                        (t.rootView = this.rootView),
                        this.childViews.push(t),
                        t
                      );
                    }),
                    (i.prototype.getAllChildViews = function () {
                      var t, e, n, i, r;
                      for (
                        r = [], e = 0, n = (i = this.childViews).length;
                        e < n;
                        e++
                      )
                        (t = i[e]),
                          r.push(t),
                          (r = r.concat(t.getAllChildViews()));
                      return r;
                    }),
                    (i.prototype.findElement = function () {
                      return this.findElementForObject(this.object);
                    }),
                    (i.prototype.findElementForObject = function (t) {
                      var e;
                      if ((e = null != t ? t.id : void 0))
                        return this.rootView.element.querySelector(
                          "[data-trix-id='" + e + "']",
                        );
                    }),
                    (i.prototype.findViewForObject = function (t) {
                      var e, n, i, r;
                      for (
                        e = 0, n = (i = this.getAllChildViews()).length;
                        e < n;
                        e++
                      )
                        if ((r = i[e]).object === t) return r;
                    }),
                    (i.prototype.getViewCache = function () {
                      return this.rootView !== this
                        ? this.rootView.getViewCache()
                        : this.isViewCachingEnabled()
                          ? null != this.viewCache
                            ? this.viewCache
                            : (this.viewCache = {})
                          : void 0;
                    }),
                    (i.prototype.isViewCachingEnabled = function () {
                      return !1 !== this.shouldCacheViews;
                    }),
                    (i.prototype.enableViewCaching = function () {
                      return (this.shouldCacheViews = !0);
                    }),
                    (i.prototype.disableViewCaching = function () {
                      return (this.shouldCacheViews = !1);
                    }),
                    (i.prototype.getCachedViewForObject = function (t) {
                      var e;
                      return null != (e = this.getViewCache())
                        ? e[t.getCacheKey()]
                        : void 0;
                    }),
                    (i.prototype.cacheViewForObject = function (t, e) {
                      var n;
                      return null != (n = this.getViewCache())
                        ? (n[e.getCacheKey()] = t)
                        : void 0;
                    }),
                    (i.prototype.garbageCollectCachedViews = function () {
                      var t, n, i, r, o, s;
                      if ((t = this.getViewCache())) {
                        for (n in ((s = this.getAllChildViews().concat(this)),
                        (i = (function () {
                          var t, e, n;
                          for (n = [], t = 0, e = s.length; t < e; t++)
                            (o = s[t]), n.push(o.object.getCacheKey());
                          return n;
                        })()),
                        (r = []),
                        t))
                          e.call(i, n) < 0 && r.push(delete t[n]);
                        return r;
                      }
                    }),
                    i
                  );
                })(o.BasicObject);
              }.call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.ObjectGroupView = (function (e) {
                  function n() {
                    n.__super__.constructor.apply(this, arguments),
                      (this.objectGroup = this.object),
                      (this.viewClass = this.options.viewClass),
                      delete this.options.viewClass;
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(n, e),
                    (n.prototype.getChildViews = function () {
                      var t, e, n, i;
                      if (!this.childViews.length)
                        for (
                          t = 0, e = (i = this.objectGroup.getObjects()).length;
                          t < e;
                          t++
                        )
                          (n = i[t]),
                            this.findOrCreateCachedChildView(
                              this.viewClass,
                              n,
                              this.options,
                            );
                      return this.childViews;
                    }),
                    (n.prototype.createNodes = function () {
                      var t, e, n, i, r, o, s, a;
                      for (
                        t = this.createContainerElement(),
                          e = 0,
                          i = (s = this.getChildViews()).length;
                        e < i;
                        e++
                      )
                        for (
                          n = 0, r = (a = s[e].getNodes()).length;
                          n < r;
                          n++
                        )
                          (o = a[n]), t.appendChild(o);
                      return [t];
                    }),
                    (n.prototype.createContainerElement = function (t) {
                      return (
                        null == t && (t = this.objectGroup.getDepth()),
                        this.getChildViews()[0].createContainerElement(t)
                      );
                    }),
                    n
                  );
                })(o.ObjectView);
              }.call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.Controller = (function (e) {
                  function n() {
                    return n.__super__.constructor.apply(this, arguments);
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(n, e),
                    n
                  );
                })(o.BasicObject);
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i,
                  r,
                  s,
                  a = {}.hasOwnProperty,
                  u =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; e < n; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (t = o.findClosestElementFromNode),
                  (n = o.nodeIsEmptyTextNode),
                  (e = o.nodeIsBlockStartComment),
                  (i = o.normalizeSpaces),
                  (r = o.summarizeStringChange),
                  (s = o.tagName),
                  (o.MutationObserver = (function (o) {
                    var c, l, h, p;
                    function d(t) {
                      var e, n;
                      (this.element = t),
                        (this.didMutate =
                          ((e = this.didMutate),
                          (n = this),
                          function () {
                            return e.apply(n, arguments);
                          })),
                        (this.observer = new window.MutationObserver(
                          this.didMutate,
                        )),
                        this.start();
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) a.call(e, n) && (t[n] = e[n]);
                        function i() {
                          this.constructor = t;
                        }
                        (i.prototype = e.prototype),
                          (t.prototype = new i()),
                          (t.__super__ = e.prototype);
                      })(d, o),
                      (h = "[" + (l = "data-trix-mutable") + "]"),
                      (p = {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        characterDataOldValue: !0,
                        subtree: !0,
                      }),
                      (d.prototype.start = function () {
                        return (
                          this.reset(), this.observer.observe(this.element, p)
                        );
                      }),
                      (d.prototype.stop = function () {
                        return this.observer.disconnect();
                      }),
                      (d.prototype.didMutate = function (t) {
                        var e, n;
                        if (
                          ((e = this.mutations).push.apply(
                            e,
                            this.findSignificantMutations(t),
                          ),
                          this.mutations.length)
                        )
                          return (
                            null != (n = this.delegate) &&
                              "function" == typeof n.elementDidMutate &&
                              n.elementDidMutate(this.getMutationSummary()),
                            this.reset()
                          );
                      }),
                      (d.prototype.reset = function () {
                        return (this.mutations = []);
                      }),
                      (d.prototype.findSignificantMutations = function (t) {
                        var e, n, i, r;
                        for (r = [], e = 0, n = t.length; e < n; e++)
                          (i = t[e]),
                            this.mutationIsSignificant(i) && r.push(i);
                        return r;
                      }),
                      (d.prototype.mutationIsSignificant = function (t) {
                        var e, n, i, r;
                        if (this.nodeIsMutable(t.target)) return !1;
                        for (
                          e = 0,
                            n = (r = this.nodesModifiedByMutation(t)).length;
                          e < n;
                          e++
                        )
                          if (((i = r[e]), this.nodeIsSignificant(i)))
                            return !0;
                        return !1;
                      }),
                      (d.prototype.nodeIsSignificant = function (t) {
                        return (
                          t !== this.element && !this.nodeIsMutable(t) && !n(t)
                        );
                      }),
                      (d.prototype.nodeIsMutable = function (e) {
                        return t(e, { matchingSelector: h });
                      }),
                      (d.prototype.nodesModifiedByMutation = function (t) {
                        var e;
                        switch (((e = []), t.type)) {
                          case "attributes":
                            t.attributeName !== l && e.push(t.target);
                            break;
                          case "characterData":
                            e.push(t.target.parentNode), e.push(t.target);
                            break;
                          case "childList":
                            e.push.apply(e, t.addedNodes),
                              e.push.apply(e, t.removedNodes);
                        }
                        return e;
                      }),
                      (d.prototype.getMutationSummary = function () {
                        return this.getTextMutationSummary();
                      }),
                      (d.prototype.getTextMutationSummary = function () {
                        var t, e, n, i, r, o, s, a, c, l, h;
                        for (
                          n = (a = this.getTextChangesFromCharacterData())
                            .additions,
                            r = a.deletions,
                            o = 0,
                            s = (c = (h = this.getTextChangesFromChildList())
                              .additions).length;
                          o < s;
                          o++
                        )
                          (e = c[o]), u.call(n, e) < 0 && n.push(e);
                        return (
                          r.push.apply(r, h.deletions),
                          (l = {}),
                          (t = n.join("")) && (l.textAdded = t),
                          (i = r.join("")) && (l.textDeleted = i),
                          l
                        );
                      }),
                      (d.prototype.getMutationsByType = function (t) {
                        var e, n, i, r, o;
                        for (
                          o = [], e = 0, n = (r = this.mutations).length;
                          e < n;
                          e++
                        )
                          (i = r[e]).type === t && o.push(i);
                        return o;
                      }),
                      (d.prototype.getTextChangesFromChildList = function () {
                        var t, n, r, o, s, a, u, l, h, p;
                        for (
                          t = [],
                            u = [],
                            n = 0,
                            o = (a = this.getMutationsByType("childList"))
                              .length;
                          n < o;
                          n++
                        )
                          (s = a[n]),
                            t.push.apply(t, s.addedNodes),
                            u.push.apply(u, s.removedNodes);
                        return (
                          0 === t.length && 1 === u.length && e(u[0])
                            ? ((h = []), (p = ["\n"]))
                            : ((h = c(t)), (p = c(u))),
                          {
                            additions: (function () {
                              var t, e, n;
                              for (
                                n = [], r = t = 0, e = h.length;
                                t < e;
                                r = ++t
                              )
                                (l = h[r]) !== p[r] && n.push(i(l));
                              return n;
                            })(),
                            deletions: (function () {
                              var t, e, n;
                              for (
                                n = [], r = t = 0, e = p.length;
                                t < e;
                                r = ++t
                              )
                                (l = p[r]) !== h[r] && n.push(i(l));
                              return n;
                            })(),
                          }
                        );
                      }),
                      (d.prototype.getTextChangesFromCharacterData =
                        function () {
                          var t, e, n, o, s, a, u, c;
                          return (
                            (e = this.getMutationsByType("characterData"))
                              .length &&
                              ((c = e[0]),
                              (n = e[e.length - 1]),
                              (s = i(c.oldValue)),
                              (o = i(n.target.data)),
                              (t = (a = r(s, o)).added),
                              (u = a.removed)),
                            { additions: t ? [t] : [], deletions: u ? [u] : [] }
                          );
                        }),
                      (c = function (t) {
                        var e, n, i, r;
                        for (
                          null == t && (t = []), r = [], e = 0, n = t.length;
                          e < n;
                          e++
                        )
                          switch ((i = t[e]).nodeType) {
                            case Node.TEXT_NODE:
                              r.push(i.data);
                              break;
                            case Node.ELEMENT_NODE:
                              "br" === s(i)
                                ? r.push("\n")
                                : r.push.apply(r, c(i.childNodes));
                          }
                        return r;
                      }),
                      d
                    );
                  })(o.BasicObject));
              }.call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.FileVerificationOperation = (function (e) {
                  function n(t) {
                    this.file = t;
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(n, e),
                    (n.prototype.perform = function (t) {
                      var e, n;
                      return (
                        ((e = new FileReader()).onerror = function () {
                          return t(!1);
                        }),
                        (e.onload =
                          ((n = this),
                          function () {
                            e.onerror = null;
                            try {
                              e.abort();
                            } catch (t) {}
                            return t(!0, n.file);
                          })),
                        e.readAsArrayBuffer(this.file)
                      );
                    }),
                    n
                  );
                })(o.Operation);
              }.call(this),
              function () {
                var t,
                  e,
                  n = {}.hasOwnProperty;
                (t = o.handleEvent),
                  (e = o.innerElementIsActive),
                  (o.InputController = (function (i) {
                    function r(e) {
                      var n;
                      for (n in ((this.element = e),
                      (this.mutationObserver = new o.MutationObserver(
                        this.element,
                      )),
                      (this.mutationObserver.delegate = this),
                      this.events))
                        t(n, {
                          onElement: this.element,
                          withCallback: this.handlerFor(n),
                        });
                    }
                    return (
                      (function (t, e) {
                        for (var i in e) n.call(e, i) && (t[i] = e[i]);
                        function r() {
                          this.constructor = t;
                        }
                        (r.prototype = e.prototype),
                          (t.prototype = new r()),
                          (t.__super__ = e.prototype);
                      })(r, i),
                      (r.prototype.events = {}),
                      (r.prototype.elementDidMutate = function (t) {}),
                      (r.prototype.editorWillSyncDocumentView = function () {
                        return this.mutationObserver.stop();
                      }),
                      (r.prototype.editorDidSyncDocumentView = function () {
                        return this.mutationObserver.start();
                      }),
                      (r.prototype.requestRender = function () {
                        var t;
                        return null != (t = this.delegate) &&
                          "function" == typeof t.inputControllerDidRequestRender
                          ? t.inputControllerDidRequestRender()
                          : void 0;
                      }),
                      (r.prototype.requestReparse = function () {
                        var t;
                        return (
                          null != (t = this.delegate) &&
                            "function" ==
                              typeof t.inputControllerDidRequestReparse &&
                            t.inputControllerDidRequestReparse(),
                          this.requestRender()
                        );
                      }),
                      (r.prototype.attachFiles = function (t) {
                        var e, n, i;
                        return (
                          (n = (function () {
                            var n, i, r;
                            for (r = [], n = 0, i = t.length; n < i; n++)
                              (e = t[n]),
                                r.push(new o.FileVerificationOperation(e));
                            return r;
                          })()),
                          Promise.all(n).then(
                            ((i = this),
                            function (t) {
                              return i.handleInput(function () {
                                var e, n;
                                return (
                                  null != (e = this.delegate) &&
                                    e.inputControllerWillAttachFiles(),
                                  null != (n = this.responder) &&
                                    n.insertFiles(t),
                                  this.requestRender()
                                );
                              });
                            }),
                          )
                        );
                      }),
                      (r.prototype.handlerFor = function (t) {
                        return (
                          (n = this),
                          function (i) {
                            if (!i.defaultPrevented)
                              return n.handleInput(function () {
                                if (!e(this.element))
                                  return (
                                    (this.eventName = t),
                                    this.events[t].call(this, i)
                                  );
                              });
                          }
                        );
                        var n;
                      }),
                      (r.prototype.handleInput = function (t) {
                        var e, n;
                        try {
                          return (
                            null != (e = this.delegate) &&
                              e.inputControllerWillHandleInput(),
                            t.call(this)
                          );
                        } finally {
                          null != (n = this.delegate) &&
                            n.inputControllerDidHandleInput();
                        }
                      }),
                      (r.prototype.createLinkHTML = function (t, e) {
                        var n;
                        return (
                          ((n = document.createElement("a")).href = t),
                          (n.textContent = null != e ? e : t),
                          n.outerHTML
                        );
                      }),
                      r
                    );
                  })(o.BasicObject));
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i,
                  r,
                  s,
                  a,
                  u,
                  c,
                  l,
                  h,
                  p,
                  d = function (t, e) {
                    for (var n in e) f.call(e, n) && (t[n] = e[n]);
                    function i() {
                      this.constructor = t;
                    }
                    return (
                      (i.prototype = e.prototype),
                      (t.prototype = new i()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  f = {}.hasOwnProperty,
                  g =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; e < n; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (c = o.makeElement),
                  (l = o.objectsAreEqual),
                  o.tagName,
                  (e = o.browser),
                  (a = o.keyEventIsKeyboardCommand),
                  (i = o.dataTransferIsWritable),
                  (n = o.dataTransferIsPlainText),
                  (u = o.config.keyNames),
                  (o.Level0InputController = (function (e) {
                    var s;
                    function f() {
                      f.__super__.constructor.apply(this, arguments),
                        this.resetInputSummary();
                    }
                    return (
                      d(f, e),
                      (s = 0),
                      (f.prototype.setInputSummary = function (t) {
                        var e, n;
                        for (e in (null == t && (t = {}),
                        (this.inputSummary.eventName = this.eventName),
                        t))
                          (n = t[e]), (this.inputSummary[e] = n);
                        return this.inputSummary;
                      }),
                      (f.prototype.resetInputSummary = function () {
                        return (this.inputSummary = {});
                      }),
                      (f.prototype.reset = function () {
                        return (
                          this.resetInputSummary(),
                          o.selectionChangeObserver.reset()
                        );
                      }),
                      (f.prototype.elementDidMutate = function (t) {
                        var e;
                        return this.isComposing()
                          ? null != (e = this.delegate) &&
                            "function" ==
                              typeof e.inputControllerDidAllowUnhandledInput
                            ? e.inputControllerDidAllowUnhandledInput()
                            : void 0
                          : this.handleInput(function () {
                              return (
                                this.mutationIsSignificant(t) &&
                                  (this.mutationIsExpected(t)
                                    ? this.requestRender()
                                    : this.requestReparse()),
                                this.reset()
                              );
                            });
                      }),
                      (f.prototype.mutationIsExpected = function (t) {
                        var e, n, i, r, o, s, a, u, c;
                        return (
                          (s = t.textAdded),
                          (a = t.textDeleted),
                          !!this.inputSummary.preferDocument ||
                            ((e =
                              null != s
                                ? s === this.inputSummary.textAdded
                                : !this.inputSummary.textAdded),
                            (n =
                              null != a
                                ? this.inputSummary.didDelete
                                : !this.inputSummary.didDelete),
                            (c = "\n" === a && !n),
                            !!(
                              (((u = ("\n" === s || " \n" === s) && !e) &&
                                !c) ||
                                (c && !u)) &&
                              (r = this.getSelectedRange()) &&
                              ((i = u
                                ? s.replace(/\n$/, "").length || -1
                                : (null != s ? s.length : void 0) || 1),
                              null != (o = this.responder)
                                ? o.positionIsBlockBreak(r[1] + i)
                                : void 0)
                            ) ||
                              (e && n))
                        );
                      }),
                      (f.prototype.mutationIsSignificant = function (t) {
                        var e, n, i;
                        return (
                          (i = Object.keys(t).length > 0),
                          (e =
                            "" ===
                            (null != (n = this.compositionInput)
                              ? n.getEndData()
                              : void 0)),
                          i || !e
                        );
                      }),
                      (f.prototype.events = {
                        keydown: function (t) {
                          var e, n, i, r, s, c, l, h, p;
                          if (
                            (this.isComposing() || this.resetInputSummary(),
                            (this.inputSummary.didInput = !0),
                            (r = u[t.keyCode]))
                          ) {
                            for (
                              n = this.keys,
                                i = 0,
                                c = (h = ["ctrl", "alt", "shift", "meta"])
                                  .length;
                              i < c;
                              i++
                            )
                              t[(l = h[i]) + "Key"] &&
                                ("ctrl" === l && (l = "control"),
                                (n = null != n ? n[l] : void 0));
                            null != (null != n ? n[r] : void 0) &&
                              (this.setInputSummary({ keyName: r }),
                              o.selectionChangeObserver.reset(),
                              n[r].call(this, t));
                          }
                          if (
                            a(t) &&
                            (e = String.fromCharCode(
                              t.keyCode,
                            ).toLowerCase()) &&
                            ((s = (function () {
                              var e, n, i, r;
                              for (
                                r = [],
                                  e = 0,
                                  n = (i = ["alt", "shift"]).length;
                                e < n;
                                e++
                              )
                                t[(l = i[e]) + "Key"] && r.push(l);
                              return r;
                            })()),
                            s.push(e),
                            null != (p = this.delegate)
                              ? p.inputControllerDidReceiveKeyboardCommand(s)
                              : void 0)
                          )
                            return t.preventDefault();
                        },
                        keypress: function (t) {
                          var e, n, i;
                          if (
                            null == this.inputSummary.eventName &&
                            !t.metaKey &&
                            (!t.ctrlKey || t.altKey)
                          )
                            return (i = p(t))
                              ? (null != (e = this.delegate) &&
                                  e.inputControllerWillPerformTyping(),
                                null != (n = this.responder) &&
                                  n.insertString(i),
                                this.setInputSummary({
                                  textAdded: i,
                                  didDelete: this.selectionIsExpanded(),
                                }))
                              : void 0;
                        },
                        textInput: function (t) {
                          var e, n, i, r;
                          if (
                            ((e = t.data),
                            (r = this.inputSummary.textAdded) &&
                              r !== e &&
                              r.toUpperCase() === e)
                          )
                            return (
                              (n = this.getSelectedRange()),
                              this.setSelectedRange([n[0], n[1] + r.length]),
                              null != (i = this.responder) && i.insertString(e),
                              this.setInputSummary({ textAdded: e }),
                              this.setSelectedRange(n)
                            );
                        },
                        dragenter: function (t) {
                          return t.preventDefault();
                        },
                        dragstart: function (t) {
                          var e;
                          return (
                            t.target,
                            this.serializeSelectionToDataTransfer(
                              t.dataTransfer,
                            ),
                            (this.draggedRange = this.getSelectedRange()),
                            null != (e = this.delegate) &&
                            "function" == typeof e.inputControllerDidStartDrag
                              ? e.inputControllerDidStartDrag()
                              : void 0
                          );
                        },
                        dragover: function (t) {
                          var e, n;
                          if (
                            (this.draggedRange ||
                              this.canAcceptDataTransfer(t.dataTransfer)) &&
                            (t.preventDefault(),
                            (e = { x: t.clientX, y: t.clientY }),
                            !l(e, this.draggingPoint))
                          )
                            return (
                              (this.draggingPoint = e),
                              null != (n = this.delegate) &&
                              "function" ==
                                typeof n.inputControllerDidReceiveDragOverPoint
                                ? n.inputControllerDidReceiveDragOverPoint(
                                    this.draggingPoint,
                                  )
                                : void 0
                            );
                        },
                        dragend: function (t) {
                          var e;
                          return (
                            null != (e = this.delegate) &&
                              "function" ==
                                typeof e.inputControllerDidCancelDrag &&
                              e.inputControllerDidCancelDrag(),
                            (this.draggedRange = null),
                            (this.draggingPoint = null)
                          );
                        },
                        drop: function (t) {
                          var e, n, i, r, s, a, u, c, l;
                          return (
                            t.preventDefault(),
                            (i =
                              null != (s = t.dataTransfer) ? s.files : void 0),
                            (r = { x: t.clientX, y: t.clientY }),
                            null != (a = this.responder) &&
                              a.setLocationRangeFromPointRange(r),
                            (null != i ? i.length : void 0)
                              ? this.attachFiles(i)
                              : this.draggedRange
                                ? (null != (u = this.delegate) &&
                                    u.inputControllerWillMoveText(),
                                  null != (c = this.responder) &&
                                    c.moveTextFromRange(this.draggedRange),
                                  (this.draggedRange = null),
                                  this.requestRender())
                                : (n = t.dataTransfer.getData(
                                    "application/x-trix-document",
                                  )) &&
                                  ((e = o.Document.fromJSONString(n)),
                                  null != (l = this.responder) &&
                                    l.insertDocument(e),
                                  this.requestRender()),
                            (this.draggedRange = null),
                            (this.draggingPoint = null)
                          );
                        },
                        cut: function (t) {
                          var e, n;
                          if (
                            (null != (e = this.responder)
                              ? e.selectionIsExpanded()
                              : void 0) &&
                            (this.serializeSelectionToDataTransfer(
                              t.clipboardData,
                            ) && t.preventDefault(),
                            null != (n = this.delegate) &&
                              n.inputControllerWillCutText(),
                            this.deleteInDirection("backward"),
                            t.defaultPrevented)
                          )
                            return this.requestRender();
                        },
                        copy: function (t) {
                          var e;
                          if (
                            (null != (e = this.responder)
                              ? e.selectionIsExpanded()
                              : void 0) &&
                            this.serializeSelectionToDataTransfer(
                              t.clipboardData,
                            )
                          )
                            return t.preventDefault();
                        },
                        paste: function (t) {
                          var e,
                            i,
                            a,
                            u,
                            c,
                            l,
                            p,
                            d,
                            f,
                            m,
                            y,
                            v,
                            b,
                            A,
                            x,
                            C,
                            w,
                            k,
                            S,
                            E,
                            T,
                            L,
                            R,
                            D;
                          if (
                            ((e =
                              null != (d = t.clipboardData)
                                ? d
                                : t.testClipboardData),
                            (p = { clipboard: e }),
                            null != e && !h(t))
                          )
                            return (
                              (u = e.getData("URL"))
                                ? ((p.type = "text/html"),
                                  (R = (l = e.getData("public.url-name"))
                                    ? o.squishBreakableWhitespace(l).trim()
                                    : u),
                                  (p.html = this.createLinkHTML(u, R)),
                                  null != (f = this.delegate) &&
                                    f.inputControllerWillPaste(p),
                                  this.setInputSummary({
                                    textAdded: R,
                                    didDelete: this.selectionIsExpanded(),
                                  }),
                                  null != (x = this.responder) &&
                                    x.insertHTML(p.html),
                                  this.requestRender(),
                                  null != (C = this.delegate) &&
                                    C.inputControllerDidPaste(p))
                                : n(e)
                                  ? ((p.type = "text/plain"),
                                    (p.string = e.getData("text/plain")),
                                    null != (w = this.delegate) &&
                                      w.inputControllerWillPaste(p),
                                    this.setInputSummary({
                                      textAdded: p.string,
                                      didDelete: this.selectionIsExpanded(),
                                    }),
                                    null != (k = this.responder) &&
                                      k.insertString(p.string),
                                    this.requestRender(),
                                    null != (S = this.delegate) &&
                                      S.inputControllerDidPaste(p))
                                  : (c = e.getData("text/html"))
                                    ? ((p.type = "text/html"),
                                      (p.html = c),
                                      null != (E = this.delegate) &&
                                        E.inputControllerWillPaste(p),
                                      null != (T = this.responder) &&
                                        T.insertHTML(p.html),
                                      this.requestRender(),
                                      null != (L = this.delegate) &&
                                        L.inputControllerDidPaste(p))
                                    : g.call(e.types, "Files") >= 0 &&
                                      (a =
                                        null != (m = e.items) &&
                                        null != (y = m[0]) &&
                                        "function" == typeof y.getAsFile
                                          ? y.getAsFile()
                                          : void 0) &&
                                      (!a.name &&
                                        (i = r(a)) &&
                                        (a.name =
                                          "pasted-file-" + ++s + "." + i),
                                      (p.type = "File"),
                                      (p.file = a),
                                      null != (v = this.delegate) &&
                                        v.inputControllerWillAttachFiles(),
                                      null != (b = this.responder) &&
                                        b.insertFile(p.file),
                                      this.requestRender(),
                                      null != (A = this.delegate) &&
                                        A.inputControllerDidPaste(p)),
                              t.preventDefault()
                            );
                          this.getPastedHTMLUsingHiddenElement(
                            ((D = this),
                            function (t) {
                              var e, n, i;
                              return (
                                (p.type = "text/html"),
                                (p.html = t),
                                null != (e = D.delegate) &&
                                  e.inputControllerWillPaste(p),
                                null != (n = D.responder) &&
                                  n.insertHTML(p.html),
                                D.requestRender(),
                                null != (i = D.delegate)
                                  ? i.inputControllerDidPaste(p)
                                  : void 0
                              );
                            }),
                          );
                        },
                        compositionstart: function (t) {
                          return this.getCompositionInput().start(t.data);
                        },
                        compositionupdate: function (t) {
                          return this.getCompositionInput().update(t.data);
                        },
                        compositionend: function (t) {
                          return this.getCompositionInput().end(t.data);
                        },
                        beforeinput: function (t) {
                          return (this.inputSummary.didInput = !0);
                        },
                        input: function (t) {
                          return (
                            (this.inputSummary.didInput = !0),
                            t.stopPropagation()
                          );
                        },
                      }),
                      (f.prototype.keys = {
                        backspace: function (t) {
                          var e;
                          return (
                            null != (e = this.delegate) &&
                              e.inputControllerWillPerformTyping(),
                            this.deleteInDirection("backward", t)
                          );
                        },
                        delete: function (t) {
                          var e;
                          return (
                            null != (e = this.delegate) &&
                              e.inputControllerWillPerformTyping(),
                            this.deleteInDirection("forward", t)
                          );
                        },
                        return: function (t) {
                          var e, n;
                          return (
                            this.setInputSummary({ preferDocument: !0 }),
                            null != (e = this.delegate) &&
                              e.inputControllerWillPerformTyping(),
                            null != (n = this.responder)
                              ? n.insertLineBreak()
                              : void 0
                          );
                        },
                        tab: function (t) {
                          var e, n;
                          return (
                            null != (e = this.responder)
                              ? e.canIncreaseNestingLevel()
                              : void 0
                          )
                            ? (null != (n = this.responder) &&
                                n.increaseNestingLevel(),
                              this.requestRender(),
                              t.preventDefault())
                            : (this.insertString("\t"),
                              this.event.preventDefault(),
                              this.render());
                        },
                        left: function (t) {
                          var e;
                          if (this.selectionIsInCursorTarget())
                            return (
                              t.preventDefault(),
                              null != (e = this.responder)
                                ? e.moveCursorInDirection("backward")
                                : void 0
                            );
                        },
                        right: function (t) {
                          var e;
                          if (this.selectionIsInCursorTarget())
                            return (
                              t.preventDefault(),
                              null != (e = this.responder)
                                ? e.moveCursorInDirection("forward")
                                : void 0
                            );
                        },
                        control: {
                          d: function (t) {
                            var e;
                            return (
                              null != (e = this.delegate) &&
                                e.inputControllerWillPerformTyping(),
                              this.deleteInDirection("forward", t)
                            );
                          },
                          h: function (t) {
                            var e;
                            return (
                              null != (e = this.delegate) &&
                                e.inputControllerWillPerformTyping(),
                              this.deleteInDirection("backward", t)
                            );
                          },
                          o: function (t) {
                            var e, n;
                            return (
                              t.preventDefault(),
                              null != (e = this.delegate) &&
                                e.inputControllerWillPerformTyping(),
                              null != (n = this.responder) &&
                                n.insertString("\n", { updatePosition: !1 }),
                              this.requestRender()
                            );
                          },
                        },
                        shift: {
                          return: function (t) {
                            var e, n;
                            return (
                              null != (e = this.delegate) &&
                                e.inputControllerWillPerformTyping(),
                              null != (n = this.responder) &&
                                n.insertString("\n"),
                              this.requestRender(),
                              t.preventDefault()
                            );
                          },
                          tab: function (t) {
                            var e, n;
                            if (
                              null != (e = this.responder)
                                ? e.canDecreaseNestingLevel()
                                : void 0
                            )
                              return (
                                null != (n = this.responder) &&
                                  n.decreaseNestingLevel(),
                                this.requestRender(),
                                t.preventDefault()
                              );
                          },
                          left: function (t) {
                            if (this.selectionIsInCursorTarget())
                              return (
                                t.preventDefault(),
                                this.expandSelectionInDirection("backward")
                              );
                          },
                          right: function (t) {
                            if (this.selectionIsInCursorTarget())
                              return (
                                t.preventDefault(),
                                this.expandSelectionInDirection("forward")
                              );
                          },
                        },
                        alt: {
                          backspace: function (t) {
                            var e;
                            return (
                              this.setInputSummary({ preferDocument: !1 }),
                              null != (e = this.delegate)
                                ? e.inputControllerWillPerformTyping()
                                : void 0
                            );
                          },
                        },
                        meta: {
                          backspace: function (t) {
                            var e;
                            return (
                              this.setInputSummary({ preferDocument: !1 }),
                              null != (e = this.delegate)
                                ? e.inputControllerWillPerformTyping()
                                : void 0
                            );
                          },
                        },
                      }),
                      (f.prototype.getCompositionInput = function () {
                        return this.isComposing()
                          ? this.compositionInput
                          : (this.compositionInput = new t(this));
                      }),
                      (f.prototype.isComposing = function () {
                        return (
                          null != this.compositionInput &&
                          !this.compositionInput.isEnded()
                        );
                      }),
                      (f.prototype.deleteInDirection = function (t, e) {
                        var n;
                        return !1 !==
                          (null != (n = this.responder)
                            ? n.deleteInDirection(t)
                            : void 0)
                          ? this.setInputSummary({ didDelete: !0 })
                          : e
                            ? (e.preventDefault(), this.requestRender())
                            : void 0;
                      }),
                      (f.prototype.serializeSelectionToDataTransfer = function (
                        t,
                      ) {
                        var e, n;
                        if (i(t))
                          return (
                            (e =
                              null != (n = this.responder)
                                ? n
                                    .getSelectedDocument()
                                    .toSerializableDocument()
                                : void 0),
                            t.setData(
                              "application/x-trix-document",
                              JSON.stringify(e),
                            ),
                            t.setData(
                              "text/html",
                              o.DocumentView.render(e).innerHTML,
                            ),
                            t.setData(
                              "text/plain",
                              e.toString().replace(/\n$/, ""),
                            ),
                            !0
                          );
                      }),
                      (f.prototype.canAcceptDataTransfer = function (t) {
                        var e, n, i, r, o;
                        for (
                          o = {},
                            e = 0,
                            n = (r =
                              null != (i = null != t ? t.types : void 0)
                                ? i
                                : []).length;
                          e < n;
                          e++
                        )
                          o[r[e]] = !0;
                        return (
                          o.Files ||
                          o["application/x-trix-document"] ||
                          o["text/html"] ||
                          o["text/plain"]
                        );
                      }),
                      (f.prototype.getPastedHTMLUsingHiddenElement = function (
                        t,
                      ) {
                        var e, n, i, r;
                        return (
                          (n = this.getSelectedRange()),
                          (i = {
                            position: "absolute",
                            left: window.pageXOffset + "px",
                            top: window.pageYOffset + "px",
                            opacity: 0,
                          }),
                          (e = c({ style: i, tagName: "div", editable: !0 })),
                          document.body.appendChild(e),
                          e.focus(),
                          requestAnimationFrame(
                            ((r = this),
                            function () {
                              var i;
                              return (
                                (i = e.innerHTML),
                                o.removeNode(e),
                                r.setSelectedRange(n),
                                t(i)
                              );
                            }),
                          )
                        );
                      }),
                      f.proxyMethod("responder?.getSelectedRange"),
                      f.proxyMethod("responder?.setSelectedRange"),
                      f.proxyMethod("responder?.expandSelectionInDirection"),
                      f.proxyMethod("responder?.selectionIsInCursorTarget"),
                      f.proxyMethod("responder?.selectionIsExpanded"),
                      f
                    );
                  })(o.InputController)),
                  (r = function (t) {
                    var e, n;
                    return null != (e = t.type) &&
                      null != (n = e.match(/\/(\w+)$/))
                      ? n[1]
                      : void 0;
                  }),
                  (s =
                    null !=
                    ("function" == typeof " ".codePointAt
                      ? " ".codePointAt(0)
                      : void 0)),
                  (p = function (t) {
                    var e;
                    return t.key && s && t.key.codePointAt(0) === t.keyCode
                      ? t.key
                      : (null === t.which
                          ? (e = t.keyCode)
                          : 0 !== t.which &&
                            0 !== t.charCode &&
                            (e = t.charCode),
                        null != e && "escape" !== u[e]
                          ? o.UTF16String.fromCodepoints([e]).toString()
                          : void 0);
                  }),
                  (h = function (t) {
                    var e, n, i, r, o, s, a, u, c;
                    if ((a = t.clipboardData)) {
                      if (g.call(a.types, "text/html") >= 0) {
                        for (i = 0, s = (u = a.types).length; i < s; i++)
                          if (
                            ((c = u[i]),
                            (e = /^CorePasteboardFlavorType/.test(c)),
                            (n = /^dyn\./.test(c) && a.getData(c)),
                            e || n)
                          )
                            return !0;
                        return !1;
                      }
                      return (
                        (r = g.call(a.types, "com.apple.webarchive") >= 0),
                        (o = g.call(a.types, "com.apple.flat-rtfd") >= 0),
                        r || o
                      );
                    }
                  }),
                  (t = (function (t) {
                    function n(t) {
                      var e;
                      (this.inputController = t),
                        (e = this.inputController),
                        (this.responder = e.responder),
                        (this.delegate = e.delegate),
                        (this.inputSummary = e.inputSummary),
                        (this.data = {});
                    }
                    return (
                      d(n, t),
                      (n.prototype.start = function (t) {
                        var e, n;
                        if (((this.data.start = t), this.isSignificant()))
                          return (
                            "keypress" === this.inputSummary.eventName &&
                              this.inputSummary.textAdded &&
                              null != (e = this.responder) &&
                              e.deleteInDirection("left"),
                            this.selectionIsExpanded() ||
                              (this.insertPlaceholder(), this.requestRender()),
                            (this.range =
                              null != (n = this.responder)
                                ? n.getSelectedRange()
                                : void 0)
                          );
                      }),
                      (n.prototype.update = function (t) {
                        var e;
                        if (
                          ((this.data.update = t),
                          this.isSignificant() &&
                            (e = this.selectPlaceholder()))
                        )
                          return this.forgetPlaceholder(), (this.range = e);
                      }),
                      (n.prototype.end = function (t) {
                        var e, n, i, r;
                        return (
                          (this.data.end = t),
                          this.isSignificant()
                            ? (this.forgetPlaceholder(),
                              this.canApplyToDocument()
                                ? (this.setInputSummary({
                                    preferDocument: !0,
                                    didInput: !1,
                                  }),
                                  null != (e = this.delegate) &&
                                    e.inputControllerWillPerformTyping(),
                                  null != (n = this.responder) &&
                                    n.setSelectedRange(this.range),
                                  null != (i = this.responder) &&
                                    i.insertString(this.data.end),
                                  null != (r = this.responder)
                                    ? r.setSelectedRange(
                                        this.range[0] + this.data.end.length,
                                      )
                                    : void 0)
                                : null != this.data.start ||
                                    null != this.data.update
                                  ? (this.requestReparse(),
                                    this.inputController.reset())
                                  : void 0)
                            : this.inputController.reset()
                        );
                      }),
                      (n.prototype.getEndData = function () {
                        return this.data.end;
                      }),
                      (n.prototype.isEnded = function () {
                        return null != this.getEndData();
                      }),
                      (n.prototype.isSignificant = function () {
                        return (
                          !e.composesExistingText || this.inputSummary.didInput
                        );
                      }),
                      (n.prototype.canApplyToDocument = function () {
                        var t, e;
                        return (
                          0 ===
                            (null != (t = this.data.start)
                              ? t.length
                              : void 0) &&
                          (null != (e = this.data.end) ? e.length : void 0) >
                            0 &&
                          null != this.range
                        );
                      }),
                      n.proxyMethod("inputController.setInputSummary"),
                      n.proxyMethod("inputController.requestRender"),
                      n.proxyMethod("inputController.requestReparse"),
                      n.proxyMethod("responder?.selectionIsExpanded"),
                      n.proxyMethod("responder?.insertPlaceholder"),
                      n.proxyMethod("responder?.selectPlaceholder"),
                      n.proxyMethod("responder?.forgetPlaceholder"),
                      n
                    );
                  })(o.BasicObject));
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i = {}.hasOwnProperty,
                  r =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; e < n; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (t = o.dataTransferIsPlainText),
                  (e = o.keyEventIsKeyboardCommand),
                  (n = o.objectsAreEqual),
                  (o.Level2InputController = (function (s) {
                    var a, u, c, l, h, p;
                    function d() {
                      var t, e;
                      return (
                        (this.render =
                          ((t = this.render),
                          (e = this),
                          function () {
                            return t.apply(e, arguments);
                          })),
                        d.__super__.constructor.apply(this, arguments)
                      );
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) i.call(e, n) && (t[n] = e[n]);
                        function r() {
                          this.constructor = t;
                        }
                        (r.prototype = e.prototype),
                          (t.prototype = new r()),
                          (t.__super__ = e.prototype);
                      })(d, s),
                      (d.prototype.elementDidMutate = function () {
                        var t;
                        return this.scheduledRender
                          ? this.composing &&
                            null != (t = this.delegate) &&
                            "function" ==
                              typeof t.inputControllerDidAllowUnhandledInput
                            ? t.inputControllerDidAllowUnhandledInput()
                            : void 0
                          : this.reparse();
                      }),
                      (d.prototype.scheduleRender = function () {
                        return null != this.scheduledRender
                          ? this.scheduledRender
                          : (this.scheduledRender = requestAnimationFrame(
                              this.render,
                            ));
                      }),
                      (d.prototype.render = function () {
                        var t;
                        return (
                          cancelAnimationFrame(this.scheduledRender),
                          (this.scheduledRender = null),
                          this.composing ||
                            (null != (t = this.delegate) && t.render()),
                          "function" == typeof this.afterRender &&
                            this.afterRender(),
                          (this.afterRender = null)
                        );
                      }),
                      (d.prototype.reparse = function () {
                        var t;
                        return null != (t = this.delegate)
                          ? t.reparse()
                          : void 0;
                      }),
                      (d.prototype.events = {
                        keydown: function (t) {
                          var n, i, r, o;
                          if (e(t)) {
                            if (
                              ((n = u(t)),
                              null != (o = this.delegate)
                                ? o.inputControllerDidReceiveKeyboardCommand(n)
                                : void 0)
                            )
                              return t.preventDefault();
                          } else if (
                            ((r = t.key),
                            t.altKey && (r += "+Alt"),
                            t.shiftKey && (r += "+Shift"),
                            (i = this.keys[r]))
                          )
                            return this.withEvent(t, i);
                        },
                        paste: function (t) {
                          var e, n, i, r, o, s, a, u, h;
                          return c(t)
                            ? (t.preventDefault(),
                              this.attachFiles(t.clipboardData.files))
                            : l(t)
                              ? (t.preventDefault(),
                                (n = {
                                  type: "text/plain",
                                  string: t.clipboardData.getData("text/plain"),
                                }),
                                null != (i = this.delegate) &&
                                  i.inputControllerWillPaste(n),
                                null != (r = this.responder) &&
                                  r.insertString(n.string),
                                this.render(),
                                null != (o = this.delegate)
                                  ? o.inputControllerDidPaste(n)
                                  : void 0)
                              : (e =
                                    null != (s = t.clipboardData)
                                      ? s.getData("URL")
                                      : void 0)
                                ? (t.preventDefault(),
                                  (n = {
                                    type: "text/html",
                                    html: this.createLinkHTML(e),
                                  }),
                                  null != (a = this.delegate) &&
                                    a.inputControllerWillPaste(n),
                                  null != (u = this.responder) &&
                                    u.insertHTML(n.html),
                                  this.render(),
                                  null != (h = this.delegate)
                                    ? h.inputControllerDidPaste(n)
                                    : void 0)
                                : void 0;
                        },
                        beforeinput: function (t) {
                          var e;
                          if ((e = this.inputTypes[t.inputType]))
                            return this.withEvent(t, e), this.scheduleRender();
                        },
                        input: function (t) {
                          return o.selectionChangeObserver.reset();
                        },
                        dragstart: function (t) {
                          var e, n;
                          if (
                            null != (e = this.responder)
                              ? e.selectionContainsAttachments()
                              : void 0
                          )
                            return (
                              t.dataTransfer.setData(
                                "application/x-trix-dragging",
                                !0,
                              ),
                              (this.dragging = {
                                range:
                                  null != (n = this.responder)
                                    ? n.getSelectedRange()
                                    : void 0,
                                point: h(t),
                              })
                            );
                        },
                        dragenter: function (t) {
                          if (a(t)) return t.preventDefault();
                        },
                        dragover: function (t) {
                          var e, i;
                          if (this.dragging) {
                            if (
                              (t.preventDefault(),
                              (e = h(t)),
                              !n(e, this.dragging.point))
                            )
                              return (
                                (this.dragging.point = e),
                                null != (i = this.responder)
                                  ? i.setLocationRangeFromPointRange(e)
                                  : void 0
                              );
                          } else if (a(t)) return t.preventDefault();
                        },
                        drop: function (t) {
                          var e, n, i, r;
                          return this.dragging
                            ? (t.preventDefault(),
                              null != (n = this.delegate) &&
                                n.inputControllerWillMoveText(),
                              null != (i = this.responder) &&
                                i.moveTextFromRange(this.dragging.range),
                              (this.dragging = null),
                              this.scheduleRender())
                            : a(t)
                              ? (t.preventDefault(),
                                (e = h(t)),
                                null != (r = this.responder) &&
                                  r.setLocationRangeFromPointRange(e),
                                this.attachFiles(t.dataTransfer.files))
                              : void 0;
                        },
                        dragend: function () {
                          var t;
                          if (this.dragging)
                            return (
                              null != (t = this.responder) &&
                                t.setSelectedRange(this.dragging.range),
                              (this.dragging = null)
                            );
                        },
                        compositionend: function (t) {
                          if (this.composing)
                            return (this.composing = !1), this.scheduleRender();
                        },
                      }),
                      (d.prototype.keys = {
                        ArrowLeft: function () {
                          var t, e;
                          if (
                            null != (t = this.responder)
                              ? t.shouldManageMovingCursorInDirection(
                                  "backward",
                                )
                              : void 0
                          )
                            return (
                              this.event.preventDefault(),
                              null != (e = this.responder)
                                ? e.moveCursorInDirection("backward")
                                : void 0
                            );
                        },
                        ArrowRight: function () {
                          var t, e;
                          if (
                            null != (t = this.responder)
                              ? t.shouldManageMovingCursorInDirection("forward")
                              : void 0
                          )
                            return (
                              this.event.preventDefault(),
                              null != (e = this.responder)
                                ? e.moveCursorInDirection("forward")
                                : void 0
                            );
                        },
                        Backspace: function () {
                          var t, e, n;
                          if (
                            null != (t = this.responder)
                              ? t.shouldManageDeletingInDirection("backward")
                              : void 0
                          )
                            return (
                              this.event.preventDefault(),
                              null != (e = this.delegate) &&
                                e.inputControllerWillPerformTyping(),
                              null != (n = this.responder) &&
                                n.deleteInDirection("backward"),
                              this.render()
                            );
                        },
                        Tab: function () {
                          var t, e;
                          return (
                            null != (t = this.responder)
                              ? t.canIncreaseNestingLevel()
                              : void 0
                          )
                            ? (this.event.preventDefault(),
                              null != (e = this.responder) &&
                                e.increaseNestingLevel(),
                              this.render())
                            : (this.insertString("\t"),
                              this.event.preventDefault(),
                              this.render());
                        },
                        "Tab+Shift": function () {
                          var t, e;
                          if (
                            null != (t = this.responder)
                              ? t.canDecreaseNestingLevel()
                              : void 0
                          )
                            return (
                              this.event.preventDefault(),
                              null != (e = this.responder) &&
                                e.decreaseNestingLevel(),
                              this.render()
                            );
                        },
                      }),
                      (d.prototype.inputTypes = {
                        deleteByComposition: function () {
                          return this.deleteInDirection("backward", {
                            recordUndoEntry: !1,
                          });
                        },
                        deleteByCut: function () {
                          return this.deleteInDirection("backward");
                        },
                        deleteByDrag: function () {
                          return (
                            this.event.preventDefault(),
                            this.withTargetDOMRange(function () {
                              var t;
                              return (this.deleteByDragRange =
                                null != (t = this.responder)
                                  ? t.getSelectedRange()
                                  : void 0);
                            })
                          );
                        },
                        deleteCompositionText: function () {
                          return this.deleteInDirection("backward", {
                            recordUndoEntry: !1,
                          });
                        },
                        deleteContent: function () {
                          return this.deleteInDirection("backward");
                        },
                        deleteContentBackward: function () {
                          return this.deleteInDirection("backward");
                        },
                        deleteContentForward: function () {
                          return this.deleteInDirection("forward");
                        },
                        deleteEntireSoftLine: function () {
                          return this.deleteInDirection("forward");
                        },
                        deleteHardLineBackward: function () {
                          return this.deleteInDirection("backward");
                        },
                        deleteHardLineForward: function () {
                          return this.deleteInDirection("forward");
                        },
                        deleteSoftLineBackward: function () {
                          return this.deleteInDirection("backward");
                        },
                        deleteSoftLineForward: function () {
                          return this.deleteInDirection("forward");
                        },
                        deleteWordBackward: function () {
                          return this.deleteInDirection("backward");
                        },
                        deleteWordForward: function () {
                          return this.deleteInDirection("forward");
                        },
                        formatBackColor: function () {
                          return this.activateAttributeIfSupported(
                            "backgroundColor",
                            this.event.data,
                          );
                        },
                        formatBold: function () {
                          return this.toggleAttributeIfSupported("bold");
                        },
                        formatFontColor: function () {
                          return this.activateAttributeIfSupported(
                            "color",
                            this.event.data,
                          );
                        },
                        formatFontName: function () {
                          return this.activateAttributeIfSupported(
                            "font",
                            this.event.data,
                          );
                        },
                        formatIndent: function () {
                          var t;
                          if (
                            null != (t = this.responder)
                              ? t.canIncreaseNestingLevel()
                              : void 0
                          )
                            return this.withTargetDOMRange(function () {
                              var t;
                              return null != (t = this.responder)
                                ? t.increaseNestingLevel()
                                : void 0;
                            });
                        },
                        formatItalic: function () {
                          return this.toggleAttributeIfSupported("italic");
                        },
                        formatJustifyCenter: function () {
                          return this.toggleAttributeIfSupported(
                            "justifyCenter",
                          );
                        },
                        formatJustifyFull: function () {
                          return this.toggleAttributeIfSupported("justifyFull");
                        },
                        formatJustifyLeft: function () {
                          return this.toggleAttributeIfSupported("justifyLeft");
                        },
                        formatJustifyRight: function () {
                          return this.toggleAttributeIfSupported(
                            "justifyRight",
                          );
                        },
                        formatOutdent: function () {
                          var t;
                          if (
                            null != (t = this.responder)
                              ? t.canDecreaseNestingLevel()
                              : void 0
                          )
                            return this.withTargetDOMRange(function () {
                              var t;
                              return null != (t = this.responder)
                                ? t.decreaseNestingLevel()
                                : void 0;
                            });
                        },
                        formatRemove: function () {
                          return this.withTargetDOMRange(function () {
                            var t, e, n, i;
                            for (t in ((i = []),
                            null != (e = this.responder)
                              ? e.getCurrentAttributes()
                              : void 0))
                              i.push(
                                null != (n = this.responder)
                                  ? n.removeCurrentAttribute(t)
                                  : void 0,
                              );
                            return i;
                          });
                        },
                        formatSetBlockTextDirection: function () {
                          return this.activateAttributeIfSupported(
                            "blockDir",
                            this.event.data,
                          );
                        },
                        formatSetInlineTextDirection: function () {
                          return this.activateAttributeIfSupported(
                            "textDir",
                            this.event.data,
                          );
                        },
                        formatStrikeThrough: function () {
                          return this.toggleAttributeIfSupported("strike");
                        },
                        formatSubscript: function () {
                          return this.toggleAttributeIfSupported("sub");
                        },
                        formatSuperscript: function () {
                          return this.toggleAttributeIfSupported("sup");
                        },
                        formatUnderline: function () {
                          return this.toggleAttributeIfSupported("underline");
                        },
                        historyRedo: function () {
                          var t;
                          return null != (t = this.delegate)
                            ? t.inputControllerWillPerformRedo()
                            : void 0;
                        },
                        historyUndo: function () {
                          var t;
                          return null != (t = this.delegate)
                            ? t.inputControllerWillPerformUndo()
                            : void 0;
                        },
                        insertCompositionText: function () {
                          return (
                            (this.composing = !0),
                            this.insertString(this.event.data)
                          );
                        },
                        insertFromComposition: function () {
                          return (
                            (this.composing = !1),
                            this.insertString(this.event.data)
                          );
                        },
                        insertFromDrop: function () {
                          var t, e;
                          if ((t = this.deleteByDragRange))
                            return (
                              (this.deleteByDragRange = null),
                              null != (e = this.delegate) &&
                                e.inputControllerWillMoveText(),
                              this.withTargetDOMRange(function () {
                                var e;
                                return null != (e = this.responder)
                                  ? e.moveTextFromRange(t)
                                  : void 0;
                              })
                            );
                        },
                        insertFromPaste: function () {
                          var e, n, i, r, s, a, u, c, l, h, p, d;
                          return (
                            (e = this.event.dataTransfer),
                            (s = { dataTransfer: e }),
                            (n = e.getData("URL"))
                              ? (this.event.preventDefault(),
                                (s.type = "text/html"),
                                (p = (r = e.getData("public.url-name"))
                                  ? o.squishBreakableWhitespace(r).trim()
                                  : n),
                                (s.html = this.createLinkHTML(n, p)),
                                null != (a = this.delegate) &&
                                  a.inputControllerWillPaste(s),
                                this.withTargetDOMRange(function () {
                                  var t;
                                  return null != (t = this.responder)
                                    ? t.insertHTML(s.html)
                                    : void 0;
                                }),
                                (this.afterRender =
                                  ((d = this),
                                  function () {
                                    var t;
                                    return null != (t = d.delegate)
                                      ? t.inputControllerDidPaste(s)
                                      : void 0;
                                  })))
                              : t(e)
                                ? ((s.type = "text/plain"),
                                  (s.string = e.getData("text/plain")),
                                  null != (u = this.delegate) &&
                                    u.inputControllerWillPaste(s),
                                  this.withTargetDOMRange(function () {
                                    var t;
                                    return null != (t = this.responder)
                                      ? t.insertString(s.string)
                                      : void 0;
                                  }),
                                  (this.afterRender = (function (t) {
                                    return function () {
                                      var e;
                                      return null != (e = t.delegate)
                                        ? e.inputControllerDidPaste(s)
                                        : void 0;
                                    };
                                  })(this)))
                                : (i = e.getData("text/html"))
                                  ? (this.event.preventDefault(),
                                    (s.type = "text/html"),
                                    (s.html = i),
                                    null != (c = this.delegate) &&
                                      c.inputControllerWillPaste(s),
                                    this.withTargetDOMRange(function () {
                                      var t;
                                      return null != (t = this.responder)
                                        ? t.insertHTML(s.html)
                                        : void 0;
                                    }),
                                    (this.afterRender = (function (t) {
                                      return function () {
                                        var e;
                                        return null != (e = t.delegate)
                                          ? e.inputControllerDidPaste(s)
                                          : void 0;
                                      };
                                    })(this)))
                                  : (null != (l = e.files) ? l.length : void 0)
                                    ? ((s.type = "File"),
                                      (s.file = e.files[0]),
                                      null != (h = this.delegate) &&
                                        h.inputControllerWillPaste(s),
                                      this.withTargetDOMRange(function () {
                                        var t;
                                        return null != (t = this.responder)
                                          ? t.insertFile(s.file)
                                          : void 0;
                                      }),
                                      (this.afterRender = (function (t) {
                                        return function () {
                                          var e;
                                          return null != (e = t.delegate)
                                            ? e.inputControllerDidPaste(s)
                                            : void 0;
                                        };
                                      })(this)))
                                    : void 0
                          );
                        },
                        insertFromYank: function () {
                          return this.insertString(this.event.data);
                        },
                        insertLineBreak: function () {
                          return this.insertString("\n");
                        },
                        insertLink: function () {
                          return this.activateAttributeIfSupported(
                            "href",
                            this.event.data,
                          );
                        },
                        insertOrderedList: function () {
                          return this.toggleAttributeIfSupported("number");
                        },
                        insertParagraph: function () {
                          var t;
                          return (
                            null != (t = this.delegate) &&
                              t.inputControllerWillPerformTyping(),
                            this.withTargetDOMRange(function () {
                              var t;
                              return null != (t = this.responder)
                                ? t.insertLineBreak()
                                : void 0;
                            })
                          );
                        },
                        insertReplacementText: function () {
                          return this.insertString(
                            this.event.dataTransfer.getData("text/plain"),
                            { updatePosition: !1 },
                          );
                        },
                        insertText: function () {
                          var t, e;
                          return this.insertString(
                            null != (t = this.event.data)
                              ? t
                              : null != (e = this.event.dataTransfer)
                                ? e.getData("text/plain")
                                : void 0,
                          );
                        },
                        insertTranspose: function () {
                          return this.insertString(this.event.data);
                        },
                        insertUnorderedList: function () {
                          return this.toggleAttributeIfSupported("bullet");
                        },
                      }),
                      (d.prototype.insertString = function (t, e) {
                        var n;
                        return (
                          null == t && (t = ""),
                          null != (n = this.delegate) &&
                            n.inputControllerWillPerformTyping(),
                          this.withTargetDOMRange(function () {
                            var n;
                            return null != (n = this.responder)
                              ? n.insertString(t, e)
                              : void 0;
                          })
                        );
                      }),
                      (d.prototype.toggleAttributeIfSupported = function (t) {
                        var e;
                        if (r.call(o.getAllAttributeNames(), t) >= 0)
                          return (
                            null != (e = this.delegate) &&
                              e.inputControllerWillPerformFormatting(t),
                            this.withTargetDOMRange(function () {
                              var e;
                              return null != (e = this.responder)
                                ? e.toggleCurrentAttribute(t)
                                : void 0;
                            })
                          );
                      }),
                      (d.prototype.activateAttributeIfSupported = function (
                        t,
                        e,
                      ) {
                        var n;
                        if (r.call(o.getAllAttributeNames(), t) >= 0)
                          return (
                            null != (n = this.delegate) &&
                              n.inputControllerWillPerformFormatting(t),
                            this.withTargetDOMRange(function () {
                              var n;
                              return null != (n = this.responder)
                                ? n.setCurrentAttribute(t, e)
                                : void 0;
                            })
                          );
                      }),
                      (d.prototype.deleteInDirection = function (t, e) {
                        var n, i, r, o;
                        return (
                          (null != e ? e : { recordUndoEntry: !0 })
                            .recordUndoEntry &&
                            null != (r = this.delegate) &&
                            r.inputControllerWillPerformTyping(),
                          (o = this),
                          (i = function () {
                            var e;
                            return null != (e = o.responder)
                              ? e.deleteInDirection(t)
                              : void 0;
                          }),
                          (n = this.getTargetDOMRange({ minLength: 2 }))
                            ? this.withTargetDOMRange(n, i)
                            : i()
                        );
                      }),
                      (d.prototype.withTargetDOMRange = function (t, e) {
                        var n;
                        return (
                          "function" == typeof t &&
                            ((e = t), (t = this.getTargetDOMRange())),
                          t
                            ? null != (n = this.responder)
                              ? n.withTargetDOMRange(t, e.bind(this))
                              : void 0
                            : (o.selectionChangeObserver.reset(), e.call(this))
                        );
                      }),
                      (d.prototype.getTargetDOMRange = function (t) {
                        var e, n, i, r;
                        if (
                          ((i = (null != t ? t : { minLength: 0 }).minLength),
                          (r =
                            "function" ==
                            typeof (e = this.event).getTargetRanges
                              ? e.getTargetRanges()
                              : void 0) &&
                            r.length &&
                            ((n = p(r[0])),
                            0 === i || n.toString().length >= i))
                        )
                          return n;
                      }),
                      (p = function (t) {
                        var e;
                        return (
                          (e = document.createRange()).setStart(
                            t.startContainer,
                            t.startOffset,
                          ),
                          e.setEnd(t.endContainer, t.endOffset),
                          e
                        );
                      }),
                      (d.prototype.withEvent = function (t, e) {
                        var n;
                        this.event = t;
                        try {
                          n = e.call(this);
                        } finally {
                          this.event = null;
                        }
                        return n;
                      }),
                      (a = function (t) {
                        var e, n;
                        return (
                          r.call(
                            null !=
                              (e =
                                null != (n = t.dataTransfer) ? n.types : void 0)
                              ? e
                              : [],
                            "Files",
                          ) >= 0
                        );
                      }),
                      (c = function (t) {
                        var e;
                        if ((e = t.clipboardData))
                          return (
                            r.call(e.types, "Files") >= 0 &&
                            1 === e.types.length &&
                            e.files.length >= 1
                          );
                      }),
                      (l = function (t) {
                        var e;
                        if ((e = t.clipboardData))
                          return (
                            r.call(e.types, "text/plain") >= 0 &&
                            1 === e.types.length
                          );
                      }),
                      (u = function (t) {
                        var e;
                        return (
                          (e = []),
                          t.altKey && e.push("alt"),
                          t.shiftKey && e.push("shift"),
                          e.push(t.key),
                          e
                        );
                      }),
                      (h = function (t) {
                        return { x: t.clientX, y: t.clientY };
                      }),
                      d
                    );
                  })(o.InputController));
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i,
                  r,
                  s,
                  a,
                  u,
                  c = function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  },
                  l = {}.hasOwnProperty;
                (e = o.defer),
                  (n = o.handleEvent),
                  (s = o.makeElement),
                  (u = o.tagName),
                  (a = o.config),
                  (r = a.lang),
                  (t = a.css),
                  (i = a.keyNames),
                  (o.AttachmentEditorController = (function (a) {
                    var h;
                    function p(t, e, n, i) {
                      (this.attachmentPiece = t),
                        (this.element = e),
                        (this.container = n),
                        (this.options = null != i ? i : {}),
                        (this.didBlurCaption = c(this.didBlurCaption, this)),
                        (this.didChangeCaption = c(
                          this.didChangeCaption,
                          this,
                        )),
                        (this.didInputCaption = c(this.didInputCaption, this)),
                        (this.didKeyDownCaption = c(
                          this.didKeyDownCaption,
                          this,
                        )),
                        (this.didClickActionButton = c(
                          this.didClickActionButton,
                          this,
                        )),
                        (this.didClickToolbar = c(this.didClickToolbar, this)),
                        (this.attachment = this.attachmentPiece.attachment),
                        "a" === u(this.element) &&
                          (this.element = this.element.firstChild),
                        this.install();
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) l.call(e, n) && (t[n] = e[n]);
                        function i() {
                          this.constructor = t;
                        }
                        (i.prototype = e.prototype),
                          (t.prototype = new i()),
                          (t.__super__ = e.prototype);
                      })(p, a),
                      (h = function (t) {
                        return function () {
                          var e;
                          return (
                            (e = t.apply(this, arguments)).do(),
                            null == this.undos && (this.undos = []),
                            this.undos.push(e.undo)
                          );
                        };
                      }),
                      (p.prototype.install = function () {
                        if (
                          (this.makeElementMutable(),
                          this.addToolbar(),
                          this.attachment.isPreviewable())
                        )
                          return this.installCaptionEditor();
                      }),
                      (p.prototype.uninstall = function () {
                        var t, e;
                        for (
                          this.savePendingCaption();
                          (e = this.undos.pop());

                        )
                          e();
                        return null != (t = this.delegate)
                          ? t.didUninstallAttachmentEditor(this)
                          : void 0;
                      }),
                      (p.prototype.savePendingCaption = function () {
                        var t, e, n;
                        if (null != this.pendingCaption)
                          return (
                            (t = this.pendingCaption),
                            (this.pendingCaption = null),
                            t
                              ? null != (e = this.delegate) &&
                                "function" ==
                                  typeof e.attachmentEditorDidRequestUpdatingAttributesForAttachment
                                ? e.attachmentEditorDidRequestUpdatingAttributesForAttachment(
                                    { caption: t },
                                    this.attachment,
                                  )
                                : void 0
                              : null != (n = this.delegate) &&
                                  "function" ==
                                    typeof n.attachmentEditorDidRequestRemovingAttributeForAttachment
                                ? n.attachmentEditorDidRequestRemovingAttributeForAttachment(
                                    "caption",
                                    this.attachment,
                                  )
                                : void 0
                          );
                      }),
                      (p.prototype.makeElementMutable = h(function () {
                        return {
                          do:
                            ((t = this),
                            function () {
                              return (t.element.dataset.trixMutable = !0);
                            }),
                          undo: (function (t) {
                            return function () {
                              return delete t.element.dataset.trixMutable;
                            };
                          })(this),
                        };
                        var t;
                      })),
                      (p.prototype.addToolbar = h(function () {
                        var e, i;
                        return (
                          (e = s({
                            tagName: "div",
                            className: t.attachmentToolbar,
                            data: { trixMutable: !0 },
                            childNodes: s({
                              tagName: "div",
                              className: "trix-button-row",
                              childNodes: s({
                                tagName: "span",
                                className:
                                  "trix-button-group trix-button-group--actions",
                                childNodes: s({
                                  tagName: "button",
                                  className: "trix-button trix-button--remove",
                                  textContent: r.remove,
                                  attributes: { title: r.remove },
                                  data: { trixAction: "remove" },
                                }),
                              }),
                            }),
                          })),
                          this.attachment.isPreviewable() &&
                            e.appendChild(
                              s({
                                tagName: "div",
                                className: t.attachmentMetadataContainer,
                                childNodes: s({
                                  tagName: "span",
                                  className: t.attachmentMetadata,
                                  childNodes: [
                                    s({
                                      tagName: "span",
                                      className: t.attachmentName,
                                      textContent:
                                        this.attachment.getFilename(),
                                      attributes: {
                                        title: this.attachment.getFilename(),
                                      },
                                    }),
                                    s({
                                      tagName: "span",
                                      className: t.attachmentSize,
                                      textContent:
                                        this.attachment.getFormattedFilesize(),
                                    }),
                                  ],
                                }),
                              }),
                            ),
                          n("click", {
                            onElement: e,
                            withCallback: this.didClickToolbar,
                          }),
                          n("click", {
                            onElement: e,
                            matchingSelector: "[data-trix-action]",
                            withCallback: this.didClickActionButton,
                          }),
                          {
                            do:
                              ((i = this),
                              function () {
                                return i.element.appendChild(e);
                              }),
                            undo: function () {
                              return o.removeNode(e);
                            },
                          }
                        );
                      })),
                      (p.prototype.installCaptionEditor = h(function () {
                        var i, a, u, c, l, h;
                        return (
                          ((c = s({
                            tagName: "textarea",
                            className: t.attachmentCaptionEditor,
                            attributes: { placeholder: r.captionPlaceholder },
                            data: { trixMutable: !0 },
                          })).value = this.attachmentPiece.getCaption()),
                          (l = c.cloneNode()).classList.add(
                            "trix-autoresize-clone",
                          ),
                          (l.tabIndex = -1),
                          (i = function () {
                            return (
                              (l.value = c.value),
                              (c.style.height = l.scrollHeight + "px")
                            );
                          }),
                          n("input", { onElement: c, withCallback: i }),
                          n("input", {
                            onElement: c,
                            withCallback: this.didInputCaption,
                          }),
                          n("keydown", {
                            onElement: c,
                            withCallback: this.didKeyDownCaption,
                          }),
                          n("change", {
                            onElement: c,
                            withCallback: this.didChangeCaption,
                          }),
                          n("blur", {
                            onElement: c,
                            withCallback: this.didBlurCaption,
                          }),
                          (u = this.element.querySelector("figcaption")),
                          (a = u.cloneNode()),
                          {
                            do:
                              ((h = this),
                              function () {
                                if (
                                  ((u.style.display = "none"),
                                  a.appendChild(c),
                                  a.appendChild(l),
                                  a.classList.add(
                                    t.attachmentCaption + "--editing",
                                  ),
                                  u.parentElement.insertBefore(a, u),
                                  i(),
                                  h.options.editCaption)
                                )
                                  return e(function () {
                                    return c.focus();
                                  });
                              }),
                            undo: function () {
                              return o.removeNode(a), (u.style.display = null);
                            },
                          }
                        );
                      })),
                      (p.prototype.didClickToolbar = function (t) {
                        return t.preventDefault(), t.stopPropagation();
                      }),
                      (p.prototype.didClickActionButton = function (t) {
                        var e;
                        if (
                          "remove" === t.target.getAttribute("data-trix-action")
                        )
                          return null != (e = this.delegate)
                            ? e.attachmentEditorDidRequestRemovalOfAttachment(
                                this.attachment,
                              )
                            : void 0;
                      }),
                      (p.prototype.didKeyDownCaption = function (t) {
                        var e;
                        if ("return" === i[t.keyCode])
                          return (
                            t.preventDefault(),
                            this.savePendingCaption(),
                            null != (e = this.delegate) &&
                            "function" ==
                              typeof e.attachmentEditorDidRequestDeselectingAttachment
                              ? e.attachmentEditorDidRequestDeselectingAttachment(
                                  this.attachment,
                                )
                              : void 0
                          );
                      }),
                      (p.prototype.didInputCaption = function (t) {
                        return (this.pendingCaption = t.target.value
                          .replace(/\s/g, " ")
                          .trim());
                      }),
                      (p.prototype.didChangeCaption = function (t) {
                        return this.savePendingCaption();
                      }),
                      (p.prototype.didBlurCaption = function (t) {
                        return this.savePendingCaption();
                      }),
                      p
                    );
                  })(o.BasicObject));
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i = {}.hasOwnProperty;
                (n = o.makeElement),
                  (t = o.config.css),
                  (o.AttachmentView = (function (r) {
                    var s;
                    function a() {
                      a.__super__.constructor.apply(this, arguments),
                        (this.attachment = this.object),
                        (this.attachment.uploadProgressDelegate = this),
                        (this.attachmentPiece = this.options.piece);
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) i.call(e, n) && (t[n] = e[n]);
                        function r() {
                          this.constructor = t;
                        }
                        (r.prototype = e.prototype),
                          (t.prototype = new r()),
                          (t.__super__ = e.prototype);
                      })(a, r),
                      (a.attachmentSelector = "[data-trix-attachment]"),
                      (a.prototype.createContentNodes = function () {
                        return [];
                      }),
                      (a.prototype.createNodes = function () {
                        var e, i, r, o, a, u, c;
                        if (
                          ((e = o =
                            n({
                              tagName: "figure",
                              className: this.getClassName(),
                              data: this.getData(),
                              editable: !1,
                            })),
                          (i = this.getHref()) &&
                            ((o = n({
                              tagName: "a",
                              editable: !1,
                              attributes: { href: i, tabindex: -1 },
                            })),
                            e.appendChild(o)),
                          this.attachment.hasContent())
                        )
                          o.innerHTML = this.attachment.getContent();
                        else
                          for (
                            r = 0, a = (c = this.createContentNodes()).length;
                            r < a;
                            r++
                          )
                            (u = c[r]), o.appendChild(u);
                        return (
                          o.appendChild(this.createCaptionElement()),
                          this.attachment.isPending() &&
                            ((this.progressElement = n({
                              tagName: "progress",
                              attributes: {
                                class: t.attachmentProgress,
                                value: this.attachment.getUploadProgress(),
                                max: 100,
                              },
                              data: {
                                trixMutable: !0,
                                trixStoreKey: [
                                  "progressElement",
                                  this.attachment.id,
                                ].join("/"),
                              },
                            })),
                            e.appendChild(this.progressElement)),
                          [s("left"), e, s("right")]
                        );
                      }),
                      (a.prototype.createCaptionElement = function () {
                        var e, i, r, o, s, a, u;
                        return (
                          (r = n({
                            tagName: "figcaption",
                            className: t.attachmentCaption,
                          })),
                          (e = this.attachmentPiece.getCaption())
                            ? (r.classList.add(
                                t.attachmentCaption + "--edited",
                              ),
                              (r.textContent = e))
                            : ((i = this.getCaptionConfig()).name &&
                                (o = this.attachment.getFilename()),
                              i.size &&
                                (a = this.attachment.getFormattedFilesize()),
                              o &&
                                ((s = n({
                                  tagName: "span",
                                  className: t.attachmentName,
                                  textContent: o,
                                })),
                                r.appendChild(s)),
                              a &&
                                (o &&
                                  r.appendChild(document.createTextNode(" ")),
                                (u = n({
                                  tagName: "span",
                                  className: t.attachmentSize,
                                  textContent: a,
                                })),
                                r.appendChild(u))),
                          r
                        );
                      }),
                      (a.prototype.getClassName = function () {
                        var e, n;
                        return (
                          (n = [
                            t.attachment,
                            t.attachment + "--" + this.attachment.getType(),
                          ]),
                          (e = this.attachment.getExtension()) &&
                            n.push(t.attachment + "--" + e),
                          n.join(" ")
                        );
                      }),
                      (a.prototype.getData = function () {
                        var t, e;
                        return (
                          (e = {
                            trixAttachment: JSON.stringify(this.attachment),
                            trixContentType: this.attachment.getContentType(),
                            trixId: this.attachment.id,
                          }),
                          (t = this.attachmentPiece.attributes).isEmpty() ||
                            (e.trixAttributes = JSON.stringify(t)),
                          this.attachment.isPending() && (e.trixSerialize = !1),
                          e
                        );
                      }),
                      (a.prototype.getHref = function () {
                        if (!e(this.attachment.getContent(), "a"))
                          return this.attachment.getHref();
                      }),
                      (a.prototype.getCaptionConfig = function () {
                        var t, e, n;
                        return (
                          (n = this.attachment.getType()),
                          (t = o.copyObject(
                            null != (e = o.config.attachments[n])
                              ? e.caption
                              : void 0,
                          )),
                          "file" === n && (t.name = !0),
                          t
                        );
                      }),
                      (a.prototype.findProgressElement = function () {
                        var t;
                        return null != (t = this.findElement())
                          ? t.querySelector("progress")
                          : void 0;
                      }),
                      (s = function (t) {
                        return n({
                          tagName: "span",
                          textContent: o.ZERO_WIDTH_SPACE,
                          data: { trixCursorTarget: t, trixSerialize: !1 },
                        });
                      }),
                      (a.prototype.attachmentDidChangeUploadProgress =
                        function () {
                          var t, e;
                          return (
                            (e = this.attachment.getUploadProgress()),
                            null != (t = this.findProgressElement())
                              ? (t.value = e)
                              : void 0
                          );
                        }),
                      a
                    );
                  })(o.ObjectView)),
                  (e = function (t, e) {
                    var i;
                    return (
                      ((i = n("div")).innerHTML = null != t ? t : ""),
                      i.querySelector(e)
                    );
                  });
              }.call(this),
              function () {
                var t,
                  e = {}.hasOwnProperty;
                (t = o.makeElement),
                  (o.PreviewableAttachmentView = (function (n) {
                    function i() {
                      i.__super__.constructor.apply(this, arguments),
                        (this.attachment.previewDelegate = this);
                    }
                    return (
                      (function (t, n) {
                        for (var i in n) e.call(n, i) && (t[i] = n[i]);
                        function r() {
                          this.constructor = t;
                        }
                        (r.prototype = n.prototype),
                          (t.prototype = new r()),
                          (t.__super__ = n.prototype);
                      })(i, n),
                      (i.prototype.createContentNodes = function () {
                        return (
                          (this.image = t({
                            tagName: "img",
                            attributes: { src: "" },
                            data: { trixMutable: !0 },
                          })),
                          this.refresh(this.image),
                          [this.image]
                        );
                      }),
                      (i.prototype.createCaptionElement = function () {
                        var t;
                        return (
                          (t = i.__super__.createCaptionElement.apply(
                            this,
                            arguments,
                          )).textContent ||
                            t.setAttribute(
                              "data-trix-placeholder",
                              o.config.lang.captionPlaceholder,
                            ),
                          t
                        );
                      }),
                      (i.prototype.refresh = function (t) {
                        var e;
                        if (
                          (null == t &&
                            (t =
                              null != (e = this.findElement())
                                ? e.querySelector("img")
                                : void 0),
                          t)
                        )
                          return this.updateAttributesForImage(t);
                      }),
                      (i.prototype.updateAttributesForImage = function (t) {
                        var e, n, i, r, o, s;
                        return (
                          (o = this.attachment.getURL()),
                          (n = this.attachment.getPreviewURL()),
                          (t.src = n || o),
                          n === o
                            ? t.removeAttribute(
                                "data-trix-serialized-attributes",
                              )
                            : ((i = JSON.stringify({ src: o })),
                              t.setAttribute(
                                "data-trix-serialized-attributes",
                                i,
                              )),
                          (s = this.attachment.getWidth()),
                          (e = this.attachment.getHeight()),
                          null != s && (t.width = s),
                          null != e && (t.height = e),
                          (r = [
                            "imageElement",
                            this.attachment.id,
                            t.src,
                            t.width,
                            t.height,
                          ].join("/")),
                          (t.dataset.trixStoreKey = r)
                        );
                      }),
                      (i.prototype.attachmentDidChangeAttributes = function () {
                        return this.refresh(this.image), this.refresh();
                      }),
                      i
                    );
                  })(o.AttachmentView));
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i = {}.hasOwnProperty;
                (n = o.makeElement),
                  (t = o.findInnerElement),
                  (e = o.getTextConfig),
                  (o.PieceView = (function (r) {
                    var s;
                    function a() {
                      var t;
                      a.__super__.constructor.apply(this, arguments),
                        (this.piece = this.object),
                        (this.attributes = this.piece.getAttributes()),
                        (t = this.options),
                        (this.textConfig = t.textConfig),
                        (this.context = t.context),
                        this.piece.attachment
                          ? (this.attachment = this.piece.attachment)
                          : (this.string = this.piece.toString());
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) i.call(e, n) && (t[n] = e[n]);
                        function r() {
                          this.constructor = t;
                        }
                        (r.prototype = e.prototype),
                          (t.prototype = new r()),
                          (t.__super__ = e.prototype);
                      })(a, r),
                      (a.prototype.createNodes = function () {
                        var e, n, i, r, o, s;
                        if (
                          ((s = this.attachment
                            ? this.createAttachmentNodes()
                            : this.createStringNodes()),
                          (e = this.createElement()))
                        ) {
                          for (i = t(e), n = 0, r = s.length; n < r; n++)
                            (o = s[n]), i.appendChild(o);
                          s = [e];
                        }
                        return s;
                      }),
                      (a.prototype.createAttachmentNodes = function () {
                        var t;
                        return (
                          (t = this.attachment.isPreviewable()
                            ? o.PreviewableAttachmentView
                            : o.AttachmentView),
                          this.createChildView(t, this.piece.attachment, {
                            piece: this.piece,
                          }).getNodes()
                        );
                      }),
                      (a.prototype.createStringNodes = function () {
                        var t, e, i, r, o, s, a, u, c;
                        if (
                          null != (a = this.textConfig) ? a.plaintext : void 0
                        )
                          return [document.createTextNode(this.string)];
                        for (
                          s = [],
                            i = e = 0,
                            r = (u = this.string.split("\n")).length;
                          e < r;
                          i = ++e
                        )
                          (c = u[i]),
                            i > 0 && ((t = n("br")), s.push(t)),
                            c.length &&
                              ((o = document.createTextNode(
                                this.preserveSpaces(c),
                              )),
                              s.push(o));
                        return s;
                      }),
                      (a.prototype.createElement = function () {
                        var t, i, r, o, s, a, u, c, l, h;
                        for (s in ((l = {}), (t = ""), (u = this.attributes)))
                          if (((h = u[s]), (i = e(s)))) {
                            if (
                              (i.tagName &&
                                ((a = n(i.tagName)),
                                o ? (o.appendChild(a), (o = a)) : (r = o = a)),
                              i.styleProperty && (l[i.styleProperty] = h),
                              i.style)
                            )
                              for (s in (c = i.style)) (h = c[s]), (l[s] = h);
                            i.className && (t = i.className);
                          }
                        if (Object.keys(l).length)
                          for (s in (null == r && (r = n("span")), l))
                            (h = l[s]), (r.style[s] = h);
                        return t && (r.className = t), r;
                      }),
                      (a.prototype.createContainerElement = function () {
                        var t, i, r, o, s;
                        for (r in (o = this.attributes))
                          if (((s = o[r]), (i = e(r)) && i.groupTagName))
                            return ((t = {})[r] = s), n(i.groupTagName, t);
                      }),
                      (s = o.NON_BREAKING_SPACE),
                      (a.prototype.preserveSpaces = function (t) {
                        return (
                          this.context.isLast && (t = t.replace(/\ $/, s)),
                          (t = t
                            .replace(/(\S)\ {3}(\S)/g, "$1 " + s + " $2")
                            .replace(/\ {2}/g, s + " ")
                            .replace(/\ {2}/g, " " + s)),
                          (this.context.isFirst ||
                            this.context.followsWhitespace) &&
                            (t = t.replace(/^\ /, s)),
                          t
                        );
                      }),
                      a
                    );
                  })(o.ObjectView));
              }.call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.TextView = (function (e) {
                  var n;
                  function i() {
                    i.__super__.constructor.apply(this, arguments),
                      (this.text = this.object),
                      (this.textConfig = this.options.textConfig);
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(i, e),
                    (i.prototype.createNodes = function () {
                      var t, e, i, r, s, a, u, c, l, h;
                      for (
                        a = [],
                          r =
                            (c = o.ObjectGroup.groupObjects(this.getPieces()))
                              .length - 1,
                          i = e = 0,
                          s = c.length;
                        e < s;
                        i = ++e
                      )
                        (u = c[i]),
                          (t = {}),
                          0 === i && (t.isFirst = !0),
                          i === r && (t.isLast = !0),
                          n(l) && (t.followsWhitespace = !0),
                          (h = this.findOrCreateCachedChildView(
                            o.PieceView,
                            u,
                            { textConfig: this.textConfig, context: t },
                          )),
                          a.push.apply(a, h.getNodes()),
                          (l = u);
                      return a;
                    }),
                    (i.prototype.getPieces = function () {
                      var t, e, n, i, r;
                      for (
                        r = [], t = 0, e = (i = this.text.getPieces()).length;
                        t < e;
                        t++
                      )
                        (n = i[t]).hasAttribute("blockBreak") || r.push(n);
                      return r;
                    }),
                    (n = function (t) {
                      return /\s$/.test(null != t ? t.toString() : void 0);
                    }),
                    i
                  );
                })(o.ObjectView);
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i = {}.hasOwnProperty;
                (n = o.makeElement),
                  (e = o.getBlockConfig),
                  (t = o.config.css),
                  (o.BlockView = (function (r) {
                    function s() {
                      s.__super__.constructor.apply(this, arguments),
                        (this.block = this.object),
                        (this.attributes = this.block.getAttributes());
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) i.call(e, n) && (t[n] = e[n]);
                        function r() {
                          this.constructor = t;
                        }
                        (r.prototype = e.prototype),
                          (t.prototype = new r()),
                          (t.__super__ = e.prototype);
                      })(s, r),
                      (s.prototype.createNodes = function () {
                        var t, i, r, s, a, u, c, l, h, p;
                        if (
                          ((u = [document.createComment("block")]),
                          this.block.isEmpty()
                            ? u.push(n("br"))
                            : ((h =
                                null != (c = e(this.block.getLastAttribute()))
                                  ? c.text
                                  : void 0),
                              (p = this.findOrCreateCachedChildView(
                                o.TextView,
                                this.block.text,
                                { textConfig: h },
                              )),
                              u.push.apply(u, p.getNodes()),
                              this.shouldAddExtraNewlineElement() &&
                                u.push(n("br"))),
                          this.attributes.length)
                        )
                          return u;
                        for (
                          l = o.config.blockAttributes.default.tagName,
                            this.block.isRTL() && (t = { dir: "rtl" }),
                            i = n({ tagName: l, attributes: t }),
                            r = 0,
                            s = u.length;
                          r < s;
                          r++
                        )
                          (a = u[r]), i.appendChild(a);
                        return [i];
                      }),
                      (s.prototype.createContainerElement = function (i) {
                        var r, o, s, a, u;
                        return (
                          (r = this.attributes[i]),
                          (u = e(r).tagName),
                          0 === i && this.block.isRTL() && (o = { dir: "rtl" }),
                          "attachmentGallery" === r &&
                            ((a = this.block.getBlockBreakPosition()),
                            (s =
                              t.attachmentGallery +
                              " " +
                              t.attachmentGallery +
                              "--" +
                              a)),
                          "numberList" === r &&
                            (o = Object.assign(o || {}, this.block.value)),
                          n({ tagName: u, className: s, attributes: o })
                        );
                      }),
                      (s.prototype.shouldAddExtraNewlineElement = function () {
                        return /\n\n$/.test(this.block.toString());
                      }),
                      s
                    );
                  })(o.ObjectView));
              }.call(this),
              function () {
                var t,
                  e,
                  n = {}.hasOwnProperty;
                (t = o.defer),
                  (e = o.makeElement),
                  (o.DocumentView = (function (i) {
                    var r, s, a;
                    function u() {
                      u.__super__.constructor.apply(this, arguments),
                        (this.element = this.options.element),
                        (this.elementStore = new o.ElementStore()),
                        this.setDocument(this.object);
                    }
                    return (
                      (function (t, e) {
                        for (var i in e) n.call(e, i) && (t[i] = e[i]);
                        function r() {
                          this.constructor = t;
                        }
                        (r.prototype = e.prototype),
                          (t.prototype = new r()),
                          (t.__super__ = e.prototype);
                      })(u, i),
                      (u.render = function (t) {
                        var n, i;
                        return (
                          (i = new this(t, {
                            element: (n = e("div")),
                          })).render(),
                          i.sync(),
                          n
                        );
                      }),
                      (u.prototype.setDocument = function (t) {
                        if (!t.isEqualTo(this.document))
                          return (this.document = this.object = t);
                      }),
                      (u.prototype.render = function () {
                        var t, n, i, r, s, a, u;
                        if (
                          ((this.childViews = []),
                          (this.shadowElement = e("div")),
                          !this.document.isEmpty())
                        ) {
                          for (
                            a = [],
                              t = 0,
                              n = (s = o.ObjectGroup.groupObjects(
                                this.document.getBlocks(),
                                { asTree: !0 },
                              )).length;
                            t < n;
                            t++
                          )
                            (r = s[t]),
                              (u = this.findOrCreateCachedChildView(
                                o.BlockView,
                                r,
                              )),
                              a.push(
                                function () {
                                  var t, e, n, r;
                                  for (
                                    r = [],
                                      t = 0,
                                      e = (n = u.getNodes()).length;
                                    t < e;
                                    t++
                                  )
                                    (i = n[t]),
                                      r.push(this.shadowElement.appendChild(i));
                                  return r;
                                }.call(this),
                              );
                          return a;
                        }
                      }),
                      (u.prototype.isSynced = function () {
                        return r(this.shadowElement, this.element);
                      }),
                      (u.prototype.sync = function () {
                        var t;
                        for (
                          t = this.createDocumentFragmentForSync();
                          this.element.lastChild;

                        )
                          this.element.removeChild(this.element.lastChild);
                        return this.element.appendChild(t), this.didSync();
                      }),
                      (u.prototype.didSync = function () {
                        return (
                          this.elementStore.reset(s(this.element)),
                          t(
                            ((e = this),
                            function () {
                              return e.garbageCollectCachedViews();
                            }),
                          )
                        );
                        var e;
                      }),
                      (u.prototype.createDocumentFragmentForSync = function () {
                        var t, e, n, i, r, o, a, u, c, l;
                        for (
                          e = document.createDocumentFragment(),
                            n = 0,
                            r = (u = this.shadowElement.childNodes).length;
                          n < r;
                          n++
                        )
                          (a = u[n]), e.appendChild(a.cloneNode(!0));
                        for (i = 0, o = (c = s(e)).length; i < o; i++)
                          (t = c[i]),
                            (l = this.elementStore.remove(t)) &&
                              t.parentNode.replaceChild(l, t);
                        return e;
                      }),
                      (s = function (t) {
                        return t.querySelectorAll("[data-trix-store-key]");
                      }),
                      (r = function (t, e) {
                        return a(t.innerHTML) === a(e.innerHTML);
                      }),
                      (a = function (t) {
                        return t.replace(/&nbsp;/g, " ");
                      }),
                      u
                    );
                  })(o.ObjectView));
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i,
                  r,
                  s = function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  },
                  a = {}.hasOwnProperty;
                (n = o.findClosestElementFromNode),
                  (i = o.handleEvent),
                  (r = o.innerElementIsActive),
                  (e = o.defer),
                  (t = o.AttachmentView.attachmentSelector),
                  (o.CompositionController = (function (u) {
                    function c(e, n) {
                      (this.element = e),
                        (this.composition = n),
                        (this.didClickAttachment = s(
                          this.didClickAttachment,
                          this,
                        )),
                        (this.didBlur = s(this.didBlur, this)),
                        (this.didFocus = s(this.didFocus, this)),
                        (this.documentView = new o.DocumentView(
                          this.composition.document,
                          { element: this.element },
                        )),
                        i("focus", {
                          onElement: this.element,
                          withCallback: this.didFocus,
                        }),
                        i("blur", {
                          onElement: this.element,
                          withCallback: this.didBlur,
                        }),
                        i("click", {
                          onElement: this.element,
                          matchingSelector: "a[contenteditable=false]",
                          preventDefault: !0,
                        }),
                        i("mousedown", {
                          onElement: this.element,
                          matchingSelector: t,
                          withCallback: this.didClickAttachment,
                        }),
                        i("click", {
                          onElement: this.element,
                          matchingSelector: "a" + t,
                          preventDefault: !0,
                        });
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) a.call(e, n) && (t[n] = e[n]);
                        function i() {
                          this.constructor = t;
                        }
                        (i.prototype = e.prototype),
                          (t.prototype = new i()),
                          (t.__super__ = e.prototype);
                      })(c, u),
                      (c.prototype.didFocus = function (t) {
                        var e, n, i, r;
                        return (
                          (r = this),
                          (e = function () {
                            var t;
                            if (!r.focused)
                              return (
                                (r.focused = !0),
                                null != (t = r.delegate) &&
                                "function" ==
                                  typeof t.compositionControllerDidFocus
                                  ? t.compositionControllerDidFocus()
                                  : void 0
                              );
                          }),
                          null !=
                          (n =
                            null != (i = this.blurPromise) ? i.then(e) : void 0)
                            ? n
                            : e()
                        );
                      }),
                      (c.prototype.didBlur = function (t) {
                        return (this.blurPromise = new Promise(
                          ((n = this),
                          function (t) {
                            return e(function () {
                              var e;
                              return (
                                r(n.element) ||
                                  ((n.focused = null),
                                  null != (e = n.delegate) &&
                                    "function" ==
                                      typeof e.compositionControllerDidBlur &&
                                    e.compositionControllerDidBlur()),
                                (n.blurPromise = null),
                                t()
                              );
                            });
                          }),
                        ));
                        var n;
                      }),
                      (c.prototype.didClickAttachment = function (t, e) {
                        var i, r, o;
                        return (
                          (i = this.findAttachmentForElement(e)),
                          (r =
                            null !=
                            n(t.target, { matchingSelector: "figcaption" })),
                          null != (o = this.delegate) &&
                          "function" ==
                            typeof o.compositionControllerDidSelectAttachment
                            ? o.compositionControllerDidSelectAttachment(i, {
                                editCaption: r,
                              })
                            : void 0
                        );
                      }),
                      (c.prototype.getSerializableElement = function () {
                        return this.isEditingAttachment()
                          ? this.documentView.shadowElement
                          : this.element;
                      }),
                      (c.prototype.render = function () {
                        var t, e, n;
                        return (
                          this.revision !== this.composition.revision &&
                            (this.documentView.setDocument(
                              this.composition.document,
                            ),
                            this.documentView.render(),
                            (this.revision = this.composition.revision)),
                          this.canSyncDocumentView() &&
                            !this.documentView.isSynced() &&
                            (null != (t = this.delegate) &&
                              "function" ==
                                typeof t.compositionControllerWillSyncDocumentView &&
                              t.compositionControllerWillSyncDocumentView(),
                            this.documentView.sync(),
                            null != (e = this.delegate) &&
                              "function" ==
                                typeof e.compositionControllerDidSyncDocumentView &&
                              e.compositionControllerDidSyncDocumentView()),
                          null != (n = this.delegate) &&
                          "function" == typeof n.compositionControllerDidRender
                            ? n.compositionControllerDidRender()
                            : void 0
                        );
                      }),
                      (c.prototype.rerenderViewForObject = function (t) {
                        return this.invalidateViewForObject(t), this.render();
                      }),
                      (c.prototype.invalidateViewForObject = function (t) {
                        return this.documentView.invalidateViewForObject(t);
                      }),
                      (c.prototype.isViewCachingEnabled = function () {
                        return this.documentView.isViewCachingEnabled();
                      }),
                      (c.prototype.enableViewCaching = function () {
                        return this.documentView.enableViewCaching();
                      }),
                      (c.prototype.disableViewCaching = function () {
                        return this.documentView.disableViewCaching();
                      }),
                      (c.prototype.refreshViewCache = function () {
                        return this.documentView.garbageCollectCachedViews();
                      }),
                      (c.prototype.isEditingAttachment = function () {
                        return null != this.attachmentEditor;
                      }),
                      (c.prototype.installAttachmentEditorForAttachment =
                        function (t, e) {
                          var n, i, r;
                          if (
                            (null != (r = this.attachmentEditor)
                              ? r.attachment
                              : void 0) !== t &&
                            (i = this.documentView.findElementForObject(t))
                          )
                            return (
                              this.uninstallAttachmentEditor(),
                              (n =
                                this.composition.document.getAttachmentPieceForAttachment(
                                  t,
                                )),
                              (this.attachmentEditor =
                                new o.AttachmentEditorController(
                                  n,
                                  i,
                                  this.element,
                                  e,
                                )),
                              (this.attachmentEditor.delegate = this)
                            );
                        }),
                      (c.prototype.uninstallAttachmentEditor = function () {
                        var t;
                        return null != (t = this.attachmentEditor)
                          ? t.uninstall()
                          : void 0;
                      }),
                      (c.prototype.didUninstallAttachmentEditor = function () {
                        return (this.attachmentEditor = null), this.render();
                      }),
                      (c.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment =
                        function (t, e) {
                          var n;
                          return (
                            null != (n = this.delegate) &&
                              "function" ==
                                typeof n.compositionControllerWillUpdateAttachment &&
                              n.compositionControllerWillUpdateAttachment(e),
                            this.composition.updateAttributesForAttachment(t, e)
                          );
                        }),
                      (c.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment =
                        function (t, e) {
                          var n;
                          return (
                            null != (n = this.delegate) &&
                              "function" ==
                                typeof n.compositionControllerWillUpdateAttachment &&
                              n.compositionControllerWillUpdateAttachment(e),
                            this.composition.removeAttributeForAttachment(t, e)
                          );
                        }),
                      (c.prototype.attachmentEditorDidRequestRemovalOfAttachment =
                        function (t) {
                          var e;
                          return null != (e = this.delegate) &&
                            "function" ==
                              typeof e.compositionControllerDidRequestRemovalOfAttachment
                            ? e.compositionControllerDidRequestRemovalOfAttachment(
                                t,
                              )
                            : void 0;
                        }),
                      (c.prototype.attachmentEditorDidRequestDeselectingAttachment =
                        function (t) {
                          var e;
                          return null != (e = this.delegate) &&
                            "function" ==
                              typeof e.compositionControllerDidRequestDeselectingAttachment
                            ? e.compositionControllerDidRequestDeselectingAttachment(
                                t,
                              )
                            : void 0;
                        }),
                      (c.prototype.canSyncDocumentView = function () {
                        return !this.isEditingAttachment();
                      }),
                      (c.prototype.findAttachmentForElement = function (t) {
                        return this.composition.document.getAttachmentById(
                          parseInt(t.dataset.trixId, 10),
                        );
                      }),
                      c
                    );
                  })(o.BasicObject));
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i = function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  },
                  r = {}.hasOwnProperty;
                (e = o.handleEvent),
                  (n = o.triggerEvent),
                  (t = o.findClosestElementFromNode),
                  (o.ToolbarController = (function (o) {
                    var s, a, u, c, l, h, p, d, f, g, m;
                    function y(t) {
                      (this.element = t),
                        (this.didKeyDownDialogInput = i(
                          this.didKeyDownDialogInput,
                          this,
                        )),
                        (this.didClickDialogButton = i(
                          this.didClickDialogButton,
                          this,
                        )),
                        (this.didClickAttributeButton = i(
                          this.didClickAttributeButton,
                          this,
                        )),
                        (this.didClickActionButton = i(
                          this.didClickActionButton,
                          this,
                        )),
                        (this.attributes = {}),
                        (this.actions = {}),
                        this.resetDialogInputs(),
                        e("mousedown", {
                          onElement: this.element,
                          matchingSelector: s,
                          withCallback: this.didClickActionButton,
                        }),
                        e("mousedown", {
                          onElement: this.element,
                          matchingSelector: u,
                          withCallback: this.didClickAttributeButton,
                        }),
                        e("click", {
                          onElement: this.element,
                          matchingSelector: m,
                          preventDefault: !0,
                        }),
                        e("click", {
                          onElement: this.element,
                          matchingSelector: c,
                          withCallback: this.didClickDialogButton,
                        }),
                        e("keydown", {
                          onElement: this.element,
                          matchingSelector: l,
                          withCallback: this.didKeyDownDialogInput,
                        });
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) r.call(e, n) && (t[n] = e[n]);
                        function i() {
                          this.constructor = t;
                        }
                        (i.prototype = e.prototype),
                          (t.prototype = new i()),
                          (t.__super__ = e.prototype);
                      })(y, o),
                      (m =
                        (u = "[data-trix-attribute]") +
                        ", " +
                        (s = "[data-trix-action]")),
                      (a = (h = "[data-trix-dialog]") + "[data-trix-active]"),
                      (c = h + " [data-trix-method]"),
                      (l = h + " [data-trix-input]"),
                      (y.prototype.didClickActionButton = function (t, e) {
                        var n, i, r;
                        return (
                          null != (i = this.delegate) &&
                            i.toolbarDidClickButton(),
                          t.preventDefault(),
                          (n = p(e)),
                          this.getDialog(n)
                            ? this.toggleDialog(n)
                            : null != (r = this.delegate)
                              ? r.toolbarDidInvokeAction(n)
                              : void 0
                        );
                      }),
                      (y.prototype.didClickAttributeButton = function (t, e) {
                        var n, i, r;
                        return (
                          null != (i = this.delegate) &&
                            i.toolbarDidClickButton(),
                          t.preventDefault(),
                          (n = d(e)),
                          this.getDialog(n)
                            ? this.toggleDialog(n)
                            : null != (r = this.delegate) &&
                              r.toolbarDidToggleAttribute(n),
                          this.refreshAttributeButtons()
                        );
                      }),
                      (y.prototype.didClickDialogButton = function (e, n) {
                        var i;
                        return (
                          (i = t(n, { matchingSelector: h })),
                          this[n.getAttribute("data-trix-method")].call(this, i)
                        );
                      }),
                      (y.prototype.didKeyDownDialogInput = function (t, e) {
                        var n, i;
                        if (
                          (13 === t.keyCode &&
                            (t.preventDefault(),
                            (n = e.getAttribute("name")),
                            (i = this.getDialog(n)),
                            this.setAttribute(i)),
                          27 === t.keyCode)
                        )
                          return t.preventDefault(), this.hideDialog();
                      }),
                      (y.prototype.updateActions = function (t) {
                        return (this.actions = t), this.refreshActionButtons();
                      }),
                      (y.prototype.refreshActionButtons = function () {
                        return this.eachActionButton(
                          ((t = this),
                          function (e, n) {
                            return (e.disabled = !1 === t.actions[n]);
                          }),
                        );
                        var t;
                      }),
                      (y.prototype.eachActionButton = function (t) {
                        var e, n, i, r, o;
                        for (
                          o = [],
                            n = 0,
                            i = (r = this.element.querySelectorAll(s)).length;
                          n < i;
                          n++
                        )
                          (e = r[n]), o.push(t(e, p(e)));
                        return o;
                      }),
                      (y.prototype.updateAttributes = function (t) {
                        return (
                          (this.attributes = t), this.refreshAttributeButtons()
                        );
                      }),
                      (y.prototype.refreshAttributeButtons = function () {
                        return this.eachAttributeButton(
                          ((t = this),
                          function (e, n) {
                            return (
                              (e.disabled = !1 === t.attributes[n]),
                              t.attributes[n] || t.dialogIsVisible(n)
                                ? (e.setAttribute("data-trix-active", ""),
                                  e.classList.add("trix-active"))
                                : (e.removeAttribute("data-trix-active"),
                                  e.classList.remove("trix-active"))
                            );
                          }),
                        );
                        var t;
                      }),
                      (y.prototype.eachAttributeButton = function (t) {
                        var e, n, i, r, o;
                        for (
                          o = [],
                            n = 0,
                            i = (r = this.element.querySelectorAll(u)).length;
                          n < i;
                          n++
                        )
                          (e = r[n]), o.push(t(e, d(e)));
                        return o;
                      }),
                      (y.prototype.applyKeyboardCommand = function (t) {
                        var e, i, r, o, s, a;
                        for (
                          o = JSON.stringify(t.sort()),
                            r = 0,
                            s = (a =
                              this.element.querySelectorAll("[data-trix-key]"))
                              .length;
                          r < s;
                          r++
                        )
                          if (
                            ((i = (e = a[r])
                              .getAttribute("data-trix-key")
                              .split("+")),
                            JSON.stringify(i.sort()) === o)
                          )
                            return n("mousedown", { onElement: e }), !0;
                        return !1;
                      }),
                      (y.prototype.dialogIsVisible = function (t) {
                        var e;
                        if ((e = this.getDialog(t)))
                          return e.hasAttribute("data-trix-active");
                      }),
                      (y.prototype.toggleDialog = function (t) {
                        return this.dialogIsVisible(t)
                          ? this.hideDialog()
                          : this.showDialog(t);
                      }),
                      (y.prototype.showDialog = function (t) {
                        var e, n, i, r, o, s, a, u, c;
                        for (
                          this.hideDialog(),
                            null != (s = this.delegate) &&
                              s.toolbarWillShowDialog(),
                            (n = this.getDialog(t)).setAttribute(
                              "data-trix-active",
                              "",
                            ),
                            n.classList.add("trix-active"),
                            i = 0,
                            o = (a = n.querySelectorAll("input[disabled]"))
                              .length;
                          i < o;
                          i++
                        )
                          a[i].removeAttribute("disabled");
                        return (
                          (e = d(n)) &&
                            (r = g(n, t)) &&
                            ((r.value =
                              null != (u = this.attributes[e]) ? u : ""),
                            r.select()),
                          null != (c = this.delegate)
                            ? c.toolbarDidShowDialog(t)
                            : void 0
                        );
                      }),
                      (y.prototype.setAttribute = function (t) {
                        var e, n, i;
                        return (
                          (e = d(t)),
                          (n = g(t, e)).willValidate && !n.checkValidity()
                            ? (n.setAttribute("data-trix-validate", ""),
                              n.classList.add("trix-validate"),
                              n.focus())
                            : (null != (i = this.delegate) &&
                                i.toolbarDidUpdateAttribute(e, n.value),
                              this.hideDialog())
                        );
                      }),
                      (y.prototype.removeAttribute = function (t) {
                        var e, n;
                        return (
                          (e = d(t)),
                          null != (n = this.delegate) &&
                            n.toolbarDidRemoveAttribute(e),
                          this.hideDialog()
                        );
                      }),
                      (y.prototype.hideDialog = function () {
                        var t, e;
                        if ((t = this.element.querySelector(a)))
                          return (
                            t.removeAttribute("data-trix-active"),
                            t.classList.remove("trix-active"),
                            this.resetDialogInputs(),
                            null != (e = this.delegate)
                              ? e.toolbarDidHideDialog(f(t))
                              : void 0
                          );
                      }),
                      (y.prototype.resetDialogInputs = function () {
                        var t, e, n, i, r;
                        for (
                          r = [],
                            t = 0,
                            n = (i = this.element.querySelectorAll(l)).length;
                          t < n;
                          t++
                        )
                          (e = i[t]).setAttribute("disabled", "disabled"),
                            e.removeAttribute("data-trix-validate"),
                            r.push(e.classList.remove("trix-validate"));
                        return r;
                      }),
                      (y.prototype.getDialog = function (t) {
                        return this.element.querySelector(
                          "[data-trix-dialog=" + t + "]",
                        );
                      }),
                      (g = function (t, e) {
                        return (
                          null == e && (e = d(t)),
                          t.querySelector("[data-trix-input][name='" + e + "']")
                        );
                      }),
                      (p = function (t) {
                        return t.getAttribute("data-trix-action");
                      }),
                      (d = function (t) {
                        var e;
                        return null !=
                          (e = t.getAttribute("data-trix-attribute"))
                          ? e
                          : t.getAttribute("data-trix-dialog-attribute");
                      }),
                      (f = function (t) {
                        return t.getAttribute("data-trix-dialog");
                      }),
                      y
                    );
                  })(o.BasicObject));
              }.call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.ImagePreloadOperation = (function (e) {
                  function n(t) {
                    this.url = t;
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(n, e),
                    (n.prototype.perform = function (t) {
                      var e, n;
                      return (
                        ((e = new Image()).onload =
                          ((n = this),
                          function () {
                            return (
                              (e.width = n.width = e.naturalWidth),
                              (e.height = n.height = e.naturalHeight),
                              t(!0, e)
                            );
                          })),
                        (e.onerror = function () {
                          return t(!1);
                        }),
                        (e.src = this.url)
                      );
                    }),
                    n
                  );
                })(o.Operation);
              }.call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.Attachment = (function (e) {
                  function n(t) {
                    var e, i;
                    null == t && (t = {}),
                      (this.releaseFile =
                        ((e = this.releaseFile),
                        (i = this),
                        function () {
                          return e.apply(i, arguments);
                        })),
                      n.__super__.constructor.apply(this, arguments),
                      (this.attributes = o.Hash.box(t)),
                      this.didChangeAttributes();
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(n, e),
                    (n.previewablePattern = /^image(\/(gif|png|jpe?g)|$)/),
                    (n.attachmentForFile = function (t) {
                      var e;
                      return (
                        (e = new this(this.attributesForFile(t))).setFile(t), e
                      );
                    }),
                    (n.attributesForFile = function (t) {
                      return new o.Hash({
                        filename: t.name,
                        filesize: t.size,
                        contentType: t.type,
                      });
                    }),
                    (n.fromJSON = function (t) {
                      return new this(t);
                    }),
                    (n.prototype.getAttribute = function (t) {
                      return this.attributes.get(t);
                    }),
                    (n.prototype.hasAttribute = function (t) {
                      return this.attributes.has(t);
                    }),
                    (n.prototype.getAttributes = function () {
                      return this.attributes.toObject();
                    }),
                    (n.prototype.setAttributes = function (t) {
                      var e, n, i;
                      if (
                        (null == t && (t = {}),
                        (e = this.attributes.merge(t)),
                        !this.attributes.isEqualTo(e))
                      )
                        return (
                          (this.attributes = e),
                          this.didChangeAttributes(),
                          null != (n = this.previewDelegate) &&
                            "function" ==
                              typeof n.attachmentDidChangeAttributes &&
                            n.attachmentDidChangeAttributes(this),
                          null != (i = this.delegate) &&
                          "function" == typeof i.attachmentDidChangeAttributes
                            ? i.attachmentDidChangeAttributes(this)
                            : void 0
                        );
                    }),
                    (n.prototype.didChangeAttributes = function () {
                      if (this.isPreviewable()) return this.preloadURL();
                    }),
                    (n.prototype.isPending = function () {
                      return (
                        null != this.file && !(this.getURL() || this.getHref())
                      );
                    }),
                    (n.prototype.isPreviewable = function () {
                      return this.attributes.has("previewable")
                        ? this.attributes.get("previewable")
                        : this.constructor.previewablePattern.test(
                            this.getContentType(),
                          );
                    }),
                    (n.prototype.getType = function () {
                      return this.hasContent()
                        ? "content"
                        : this.isPreviewable()
                          ? "preview"
                          : "file";
                    }),
                    (n.prototype.getURL = function () {
                      return this.attributes.get("url");
                    }),
                    (n.prototype.getHref = function () {
                      return this.attributes.get("href");
                    }),
                    (n.prototype.getFilename = function () {
                      var t;
                      return null != (t = this.attributes.get("filename"))
                        ? t
                        : "";
                    }),
                    (n.prototype.getFilesize = function () {
                      return this.attributes.get("filesize");
                    }),
                    (n.prototype.getFormattedFilesize = function () {
                      var t;
                      return "number" ==
                        typeof (t = this.attributes.get("filesize"))
                        ? o.config.fileSize.formatter(t)
                        : "";
                    }),
                    (n.prototype.getExtension = function () {
                      var t;
                      return null != (t = this.getFilename().match(/\.(\w+)$/))
                        ? t[1].toLowerCase()
                        : void 0;
                    }),
                    (n.prototype.getContentType = function () {
                      return this.attributes.get("contentType");
                    }),
                    (n.prototype.hasContent = function () {
                      return this.attributes.has("content");
                    }),
                    (n.prototype.getContent = function () {
                      return this.attributes.get("content");
                    }),
                    (n.prototype.getWidth = function () {
                      return this.attributes.get("width");
                    }),
                    (n.prototype.getHeight = function () {
                      return this.attributes.get("height");
                    }),
                    (n.prototype.getFile = function () {
                      return this.file;
                    }),
                    (n.prototype.setFile = function (t) {
                      if (((this.file = t), this.isPreviewable()))
                        return this.preloadFile();
                    }),
                    (n.prototype.releaseFile = function () {
                      return this.releasePreloadedFile(), (this.file = null);
                    }),
                    (n.prototype.getUploadProgress = function () {
                      var t;
                      return null != (t = this.uploadProgress) ? t : 0;
                    }),
                    (n.prototype.setUploadProgress = function (t) {
                      var e;
                      if (this.uploadProgress !== t)
                        return (
                          (this.uploadProgress = t),
                          null != (e = this.uploadProgressDelegate) &&
                          "function" ==
                            typeof e.attachmentDidChangeUploadProgress
                            ? e.attachmentDidChangeUploadProgress(this)
                            : void 0
                        );
                    }),
                    (n.prototype.toJSON = function () {
                      return this.getAttributes();
                    }),
                    (n.prototype.getCacheKey = function () {
                      return [
                        n.__super__.getCacheKey.apply(this, arguments),
                        this.attributes.getCacheKey(),
                        this.getPreviewURL(),
                      ].join("/");
                    }),
                    (n.prototype.getPreviewURL = function () {
                      return this.previewURL || this.preloadingURL;
                    }),
                    (n.prototype.setPreviewURL = function (t) {
                      var e, n;
                      if (t !== this.getPreviewURL())
                        return (
                          (this.previewURL = t),
                          null != (e = this.previewDelegate) &&
                            "function" ==
                              typeof e.attachmentDidChangeAttributes &&
                            e.attachmentDidChangeAttributes(this),
                          null != (n = this.delegate) &&
                          "function" == typeof n.attachmentDidChangePreviewURL
                            ? n.attachmentDidChangePreviewURL(this)
                            : void 0
                        );
                    }),
                    (n.prototype.preloadURL = function () {
                      return this.preload(this.getURL(), this.releaseFile);
                    }),
                    (n.prototype.preloadFile = function () {
                      if (this.file)
                        return (
                          (this.fileObjectURL = URL.createObjectURL(this.file)),
                          this.preload(this.fileObjectURL)
                        );
                    }),
                    (n.prototype.releasePreloadedFile = function () {
                      if (this.fileObjectURL)
                        return (
                          URL.revokeObjectURL(this.fileObjectURL),
                          (this.fileObjectURL = null)
                        );
                    }),
                    (n.prototype.preload = function (t, e) {
                      var n;
                      if (t && t !== this.getPreviewURL())
                        return (
                          (this.preloadingURL = t),
                          new o.ImagePreloadOperation(t)
                            .then(
                              ((n = this),
                              function (i) {
                                var r, o;
                                return (
                                  (o = i.width),
                                  (r = i.height),
                                  (n.getWidth() && n.getHeight()) ||
                                    n.setAttributes({ width: o, height: r }),
                                  (n.preloadingURL = null),
                                  n.setPreviewURL(t),
                                  "function" == typeof e ? e() : void 0
                                );
                              }),
                            )
                            .catch(
                              (function (t) {
                                return function () {
                                  return (
                                    (t.preloadingURL = null),
                                    "function" == typeof e ? e() : void 0
                                  );
                                };
                              })(this),
                            )
                        );
                    }),
                    n
                  );
                })(o.Object);
              }.call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.Piece = (function (e) {
                  function n(t, e) {
                    null == e && (e = {}),
                      n.__super__.constructor.apply(this, arguments),
                      (this.attributes = o.Hash.box(e));
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(n, e),
                    (n.types = {}),
                    (n.registerType = function (t, e) {
                      return (e.type = t), (this.types[t] = e);
                    }),
                    (n.fromJSON = function (t) {
                      var e;
                      if ((e = this.types[t.type])) return e.fromJSON(t);
                    }),
                    (n.prototype.copyWithAttributes = function (t) {
                      return new this.constructor(this.getValue(), t);
                    }),
                    (n.prototype.copyWithAdditionalAttributes = function (t) {
                      return this.copyWithAttributes(this.attributes.merge(t));
                    }),
                    (n.prototype.copyWithoutAttribute = function (t) {
                      return this.copyWithAttributes(this.attributes.remove(t));
                    }),
                    (n.prototype.copy = function () {
                      return this.copyWithAttributes(this.attributes);
                    }),
                    (n.prototype.getAttribute = function (t) {
                      return this.attributes.get(t);
                    }),
                    (n.prototype.getAttributesHash = function () {
                      return this.attributes;
                    }),
                    (n.prototype.getAttributes = function () {
                      return this.attributes.toObject();
                    }),
                    (n.prototype.getCommonAttributes = function () {
                      var t, e, n;
                      return (n = pieceList.getPieceAtIndex(0))
                        ? ((t = n.attributes),
                          (e = t.getKeys()),
                          pieceList.eachPiece(function (n) {
                            return (
                              (e = t.getKeysCommonToHash(n.attributes)),
                              (t = t.slice(e))
                            );
                          }),
                          t.toObject())
                        : {};
                    }),
                    (n.prototype.hasAttribute = function (t) {
                      return this.attributes.has(t);
                    }),
                    (n.prototype.hasSameStringValueAsPiece = function (t) {
                      return null != t && this.toString() === t.toString();
                    }),
                    (n.prototype.hasSameAttributesAsPiece = function (t) {
                      return (
                        null != t &&
                        (this.attributes === t.attributes ||
                          this.attributes.isEqualTo(t.attributes))
                      );
                    }),
                    (n.prototype.isBlockBreak = function () {
                      return !1;
                    }),
                    (n.prototype.isEqualTo = function (t) {
                      return (
                        n.__super__.isEqualTo.apply(this, arguments) ||
                        (this.hasSameConstructorAs(t) &&
                          this.hasSameStringValueAsPiece(t) &&
                          this.hasSameAttributesAsPiece(t))
                      );
                    }),
                    (n.prototype.isEmpty = function () {
                      return 0 === this.length;
                    }),
                    (n.prototype.isSerializable = function () {
                      return !0;
                    }),
                    (n.prototype.toJSON = function () {
                      return {
                        type: this.constructor.type,
                        attributes: this.getAttributes(),
                      };
                    }),
                    (n.prototype.contentsForInspection = function () {
                      return {
                        type: this.constructor.type,
                        attributes: this.attributes.inspect(),
                      };
                    }),
                    (n.prototype.canBeGrouped = function () {
                      return this.hasAttribute("href");
                    }),
                    (n.prototype.canBeGroupedWith = function (t) {
                      return (
                        this.getAttribute("href") === t.getAttribute("href")
                      );
                    }),
                    (n.prototype.getLength = function () {
                      return this.length;
                    }),
                    (n.prototype.canBeConsolidatedWith = function (t) {
                      return !1;
                    }),
                    n
                  );
                })(o.Object);
              }.call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.Piece.registerType(
                  "attachment",
                  (o.AttachmentPiece = (function (e) {
                    function n(t) {
                      (this.attachment = t),
                        n.__super__.constructor.apply(this, arguments),
                        (this.length = 1),
                        this.ensureAttachmentExclusivelyHasAttribute("href"),
                        this.attachment.hasContent() ||
                          this.removeProhibitedAttributes();
                    }
                    return (
                      (function (e, n) {
                        for (var i in n) t.call(n, i) && (e[i] = n[i]);
                        function r() {
                          this.constructor = e;
                        }
                        (r.prototype = n.prototype),
                          (e.prototype = new r()),
                          (e.__super__ = n.prototype);
                      })(n, e),
                      (n.fromJSON = function (t) {
                        return new this(
                          o.Attachment.fromJSON(t.attachment),
                          t.attributes,
                        );
                      }),
                      (n.permittedAttributes = ["caption", "presentation"]),
                      (n.prototype.ensureAttachmentExclusivelyHasAttribute =
                        function (t) {
                          if (this.hasAttribute(t))
                            return (
                              this.attachment.hasAttribute(t) ||
                                this.attachment.setAttributes(
                                  this.attributes.slice(t),
                                ),
                              (this.attributes = this.attributes.remove(t))
                            );
                        }),
                      (n.prototype.removeProhibitedAttributes = function () {
                        var t;
                        if (
                          !(t = this.attributes.slice(
                            this.constructor.permittedAttributes,
                          )).isEqualTo(this.attributes)
                        )
                          return (this.attributes = t);
                      }),
                      (n.prototype.getValue = function () {
                        return this.attachment;
                      }),
                      (n.prototype.isSerializable = function () {
                        return !this.attachment.isPending();
                      }),
                      (n.prototype.getCaption = function () {
                        var t;
                        return null != (t = this.attributes.get("caption"))
                          ? t
                          : "";
                      }),
                      (n.prototype.isEqualTo = function (t) {
                        var e;
                        return (
                          n.__super__.isEqualTo.apply(this, arguments) &&
                          this.attachment.id ===
                            (null != t && null != (e = t.attachment)
                              ? e.id
                              : void 0)
                        );
                      }),
                      (n.prototype.toString = function () {
                        return o.OBJECT_REPLACEMENT_CHARACTER;
                      }),
                      (n.prototype.toJSON = function () {
                        var t;
                        return (
                          ((t = n.__super__.toJSON.apply(
                            this,
                            arguments,
                          )).attachment = this.attachment),
                          t
                        );
                      }),
                      (n.prototype.getCacheKey = function () {
                        return [
                          n.__super__.getCacheKey.apply(this, arguments),
                          this.attachment.getCacheKey(),
                        ].join("/");
                      }),
                      (n.prototype.toConsole = function () {
                        return JSON.stringify(this.toString());
                      }),
                      n
                    );
                  })(o.Piece)),
                );
              }.call(this),
              function () {
                var t,
                  e = {}.hasOwnProperty;
                (t = o.normalizeNewlines),
                  o.Piece.registerType(
                    "string",
                    (o.StringPiece = (function (n) {
                      function i(e) {
                        i.__super__.constructor.apply(this, arguments),
                          (this.string = t(e)),
                          (this.length = this.string.length);
                      }
                      return (
                        (function (t, n) {
                          for (var i in n) e.call(n, i) && (t[i] = n[i]);
                          function r() {
                            this.constructor = t;
                          }
                          (r.prototype = n.prototype),
                            (t.prototype = new r()),
                            (t.__super__ = n.prototype);
                        })(i, n),
                        (i.fromJSON = function (t) {
                          return new this(t.string, t.attributes);
                        }),
                        (i.prototype.getValue = function () {
                          return this.string;
                        }),
                        (i.prototype.toString = function () {
                          return this.string.toString();
                        }),
                        (i.prototype.isBlockBreak = function () {
                          return (
                            "\n" === this.toString() &&
                            !0 === this.getAttribute("blockBreak")
                          );
                        }),
                        (i.prototype.toJSON = function () {
                          var t;
                          return (
                            ((t = i.__super__.toJSON.apply(
                              this,
                              arguments,
                            )).string = this.string),
                            t
                          );
                        }),
                        (i.prototype.canBeConsolidatedWith = function (t) {
                          return (
                            null != t &&
                            this.hasSameConstructorAs(t) &&
                            this.hasSameAttributesAsPiece(t)
                          );
                        }),
                        (i.prototype.consolidateWith = function (t) {
                          return new this.constructor(
                            this.toString() + t.toString(),
                            this.attributes,
                          );
                        }),
                        (i.prototype.splitAtOffset = function (t) {
                          var e, n;
                          return (
                            0 === t
                              ? ((e = null), (n = this))
                              : t === this.length
                                ? ((e = this), (n = null))
                                : ((e = new this.constructor(
                                    this.string.slice(0, t),
                                    this.attributes,
                                  )),
                                  (n = new this.constructor(
                                    this.string.slice(t),
                                    this.attributes,
                                  ))),
                            [e, n]
                          );
                        }),
                        (i.prototype.toConsole = function () {
                          var t;
                          return (
                            (t = this.string).length > 15 &&
                              (t = t.slice(0, 14) + "…"),
                            JSON.stringify(t.toString())
                          );
                        }),
                        i
                      );
                    })(o.Piece)),
                  );
              }.call(this),
              function () {
                var t,
                  e = {}.hasOwnProperty,
                  n = [].slice;
                (t = o.spliceArray),
                  (o.SplittableList = (function (i) {
                    var r, o, s;
                    function a(t) {
                      null == t && (t = []),
                        a.__super__.constructor.apply(this, arguments),
                        (this.objects = t.slice(0)),
                        (this.length = this.objects.length);
                    }
                    return (
                      (function (t, n) {
                        for (var i in n) e.call(n, i) && (t[i] = n[i]);
                        function r() {
                          this.constructor = t;
                        }
                        (r.prototype = n.prototype),
                          (t.prototype = new r()),
                          (t.__super__ = n.prototype);
                      })(a, i),
                      (a.box = function (t) {
                        return t instanceof this ? t : new this(t);
                      }),
                      (a.prototype.indexOf = function (t) {
                        return this.objects.indexOf(t);
                      }),
                      (a.prototype.splice = function () {
                        var e;
                        return (
                          (e =
                            1 <= arguments.length ? n.call(arguments, 0) : []),
                          new this.constructor(
                            t.apply(null, [this.objects].concat(n.call(e))),
                          )
                        );
                      }),
                      (a.prototype.eachObject = function (t) {
                        var e, n, i, r, o, s;
                        for (
                          s = [], n = e = 0, i = (o = this.objects).length;
                          e < i;
                          n = ++e
                        )
                          (r = o[n]), s.push(t(r, n));
                        return s;
                      }),
                      (a.prototype.insertObjectAtIndex = function (t, e) {
                        return this.splice(e, 0, t);
                      }),
                      (a.prototype.insertSplittableListAtIndex = function (
                        t,
                        e,
                      ) {
                        return this.splice.apply(
                          this,
                          [e, 0].concat(n.call(t.objects)),
                        );
                      }),
                      (a.prototype.insertSplittableListAtPosition = function (
                        t,
                        e,
                      ) {
                        var n, i, r;
                        return (
                          (i = (r = this.splitObjectAtPosition(e))[0]),
                          (n = r[1]),
                          new this.constructor(i).insertSplittableListAtIndex(
                            t,
                            n,
                          )
                        );
                      }),
                      (a.prototype.editObjectAtIndex = function (t, e) {
                        return this.replaceObjectAtIndex(e(this.objects[t]), t);
                      }),
                      (a.prototype.replaceObjectAtIndex = function (t, e) {
                        return this.splice(e, 1, t);
                      }),
                      (a.prototype.removeObjectAtIndex = function (t) {
                        return this.splice(t, 1);
                      }),
                      (a.prototype.getObjectAtIndex = function (t) {
                        return this.objects[t];
                      }),
                      (a.prototype.getSplittableListInRange = function (t) {
                        var e, n, i, r;
                        return (
                          (n = (i = this.splitObjectsAtRange(t))[0]),
                          (e = i[1]),
                          (r = i[2]),
                          new this.constructor(n.slice(e, r + 1))
                        );
                      }),
                      (a.prototype.selectSplittableList = function (t) {
                        var e, n;
                        return (
                          (n = function () {
                            var n, i, r, o;
                            for (
                              o = [], n = 0, i = (r = this.objects).length;
                              n < i;
                              n++
                            )
                              (e = r[n]), t(e) && o.push(e);
                            return o;
                          }.call(this)),
                          new this.constructor(n)
                        );
                      }),
                      (a.prototype.removeObjectsInRange = function (t) {
                        var e, n, i, r;
                        return (
                          (n = (i = this.splitObjectsAtRange(t))[0]),
                          (e = i[1]),
                          (r = i[2]),
                          new this.constructor(n).splice(e, r - e + 1)
                        );
                      }),
                      (a.prototype.transformObjectsInRange = function (t, e) {
                        var n, i, r, o, s, a, u;
                        return (
                          (s = this.splitObjectsAtRange(t)),
                          (o = s[0]),
                          (i = s[1]),
                          (a = s[2]),
                          (u = (function () {
                            var t, s, u;
                            for (
                              u = [], n = t = 0, s = o.length;
                              t < s;
                              n = ++t
                            )
                              (r = o[n]),
                                i <= n && n <= a ? u.push(e(r)) : u.push(r);
                            return u;
                          })()),
                          new this.constructor(u)
                        );
                      }),
                      (a.prototype.splitObjectsAtRange = function (t) {
                        var e, n, i, o, a;
                        return (
                          (n = (o = this.splitObjectAtPosition(s(t)))[0]),
                          (e = o[1]),
                          (i = o[2]),
                          [
                            (n = (a = new this.constructor(
                              n,
                            ).splitObjectAtPosition(r(t) + i))[0]),
                            e,
                            a[1] - 1,
                          ]
                        );
                      }),
                      (a.prototype.getObjectAtPosition = function (t) {
                        var e, n;
                        return (
                          (e = (n = this.findIndexAndOffsetAtPosition(t))
                            .index),
                          n.offset,
                          this.objects[e]
                        );
                      }),
                      (a.prototype.splitObjectAtPosition = function (t) {
                        var e, n, i, r, o, s, a, u, c;
                        return (
                          (e = (o = this.findIndexAndOffsetAtPosition(t))
                            .index),
                          (r = o.offset),
                          (i = this.objects.slice(0)),
                          null != e
                            ? 0 === r
                              ? ((u = e), (c = 0))
                              : ((n = (s =
                                  this.getObjectAtIndex(e).splitAtOffset(
                                    r,
                                  ))[0]),
                                (a = s[1]),
                                i.splice(e, 1, n, a),
                                (u = e + 1),
                                (c = n.getLength() - r))
                            : ((u = i.length), (c = 0)),
                          [i, u, c]
                        );
                      }),
                      (a.prototype.consolidate = function () {
                        var t, e, n, i, r, o;
                        for (
                          i = [],
                            r = this.objects[0],
                            t = 0,
                            e = (o = this.objects.slice(1)).length;
                          t < e;
                          t++
                        )
                          (n = o[t]),
                            (
                              "function" == typeof r.canBeConsolidatedWith
                                ? r.canBeConsolidatedWith(n)
                                : void 0
                            )
                              ? (r = r.consolidateWith(n))
                              : (i.push(r), (r = n));
                        return null != r && i.push(r), new this.constructor(i);
                      }),
                      (a.prototype.consolidateFromIndexToIndex = function (
                        t,
                        e,
                      ) {
                        var i, r;
                        return (
                          (r = this.objects.slice(0).slice(t, e + 1)),
                          (i = new this.constructor(r).consolidate().toArray()),
                          this.splice.apply(
                            this,
                            [t, r.length].concat(n.call(i)),
                          )
                        );
                      }),
                      (a.prototype.findIndexAndOffsetAtPosition = function (t) {
                        var e, n, i, r, o, s;
                        for (
                          e = 0, i = n = 0, r = (s = this.objects).length;
                          n < r;
                          i = ++n
                        ) {
                          if (((o = e + s[i].getLength()), e <= t && t < o))
                            return { index: i, offset: t - e };
                          e = o;
                        }
                        return { index: null, offset: null };
                      }),
                      (a.prototype.findPositionAtIndexAndOffset = function (
                        t,
                        e,
                      ) {
                        var n, i, r, o, s, a;
                        for (
                          s = 0, n = i = 0, r = (a = this.objects).length;
                          i < r;
                          n = ++i
                        )
                          if (((o = a[n]), n < t)) s += o.getLength();
                          else if (n === t) {
                            s += e;
                            break;
                          }
                        return s;
                      }),
                      (a.prototype.getEndPosition = function () {
                        var t, e;
                        return null != this.endPosition
                          ? this.endPosition
                          : (this.endPosition = function () {
                              var n, i, r;
                              for (
                                e = 0, n = 0, i = (r = this.objects).length;
                                n < i;
                                n++
                              )
                                (t = r[n]), (e += t.getLength());
                              return e;
                            }.call(this));
                      }),
                      (a.prototype.toString = function () {
                        return this.objects.join("");
                      }),
                      (a.prototype.toArray = function () {
                        return this.objects.slice(0);
                      }),
                      (a.prototype.toJSON = function () {
                        return this.toArray();
                      }),
                      (a.prototype.isEqualTo = function (t) {
                        return (
                          a.__super__.isEqualTo.apply(this, arguments) ||
                          o(this.objects, null != t ? t.objects : void 0)
                        );
                      }),
                      (o = function (t, e) {
                        var n, i, r, o, s;
                        if ((null == e && (e = []), t.length !== e.length))
                          return !1;
                        for (s = !0, i = n = 0, r = t.length; n < r; i = ++n)
                          (o = t[i]), s && !o.isEqualTo(e[i]) && (s = !1);
                        return s;
                      }),
                      (a.prototype.contentsForInspection = function () {
                        var t;
                        return {
                          objects:
                            "[" +
                            function () {
                              var e, n, i, r;
                              for (
                                r = [], e = 0, n = (i = this.objects).length;
                                e < n;
                                e++
                              )
                                (t = i[e]), r.push(t.inspect());
                              return r;
                            }
                              .call(this)
                              .join(", ") +
                            "]",
                        };
                      }),
                      (s = function (t) {
                        return t[0];
                      }),
                      (r = function (t) {
                        return t[1];
                      }),
                      a
                    );
                  })(o.Object));
              }.call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.Text = (function (e) {
                  function n(t) {
                    var e;
                    null == t && (t = []),
                      n.__super__.constructor.apply(this, arguments),
                      (this.pieceList = new o.SplittableList(
                        (function () {
                          var n, i, r;
                          for (r = [], n = 0, i = t.length; n < i; n++)
                            (e = t[n]).isEmpty() || r.push(e);
                          return r;
                        })(),
                      ));
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(n, e),
                    (n.textForAttachmentWithAttributes = function (t, e) {
                      return new this([new o.AttachmentPiece(t, e)]);
                    }),
                    (n.textForStringWithAttributes = function (t, e) {
                      return new this([new o.StringPiece(t, e)]);
                    }),
                    (n.fromJSON = function (t) {
                      var e;
                      return new this(
                        (function () {
                          var n, i, r;
                          for (r = [], n = 0, i = t.length; n < i; n++)
                            (e = t[n]), r.push(o.Piece.fromJSON(e));
                          return r;
                        })(),
                      );
                    }),
                    (n.prototype.copy = function () {
                      return this.copyWithPieceList(this.pieceList);
                    }),
                    (n.prototype.copyWithPieceList = function (t) {
                      return new this.constructor(t.consolidate().toArray());
                    }),
                    (n.prototype.copyUsingObjectMap = function (t) {
                      var e, n;
                      return (
                        (n = function () {
                          var n, i, r, o, s;
                          for (
                            s = [], n = 0, i = (r = this.getPieces()).length;
                            n < i;
                            n++
                          )
                            (e = r[n]), s.push(null != (o = t.find(e)) ? o : e);
                          return s;
                        }.call(this)),
                        new this.constructor(n)
                      );
                    }),
                    (n.prototype.appendText = function (t) {
                      return this.insertTextAtPosition(t, this.getLength());
                    }),
                    (n.prototype.insertTextAtPosition = function (t, e) {
                      return this.copyWithPieceList(
                        this.pieceList.insertSplittableListAtPosition(
                          t.pieceList,
                          e,
                        ),
                      );
                    }),
                    (n.prototype.removeTextAtRange = function (t) {
                      return this.copyWithPieceList(
                        this.pieceList.removeObjectsInRange(t),
                      );
                    }),
                    (n.prototype.replaceTextAtRange = function (t, e) {
                      return this.removeTextAtRange(e).insertTextAtPosition(
                        t,
                        e[0],
                      );
                    }),
                    (n.prototype.moveTextFromRangeToPosition = function (t, e) {
                      var n, i;
                      if (!(t[0] <= e && e <= t[1]))
                        return (
                          (n = (i = this.getTextAtRange(t)).getLength()),
                          t[0] < e && (e -= n),
                          this.removeTextAtRange(t).insertTextAtPosition(i, e)
                        );
                    }),
                    (n.prototype.addAttributeAtRange = function (t, e, n) {
                      var i;
                      return ((i = {})[t] = e), this.addAttributesAtRange(i, n);
                    }),
                    (n.prototype.addAttributesAtRange = function (t, e) {
                      return this.copyWithPieceList(
                        this.pieceList.transformObjectsInRange(e, function (e) {
                          return e.copyWithAdditionalAttributes(t);
                        }),
                      );
                    }),
                    (n.prototype.removeAttributeAtRange = function (t, e) {
                      return this.copyWithPieceList(
                        this.pieceList.transformObjectsInRange(e, function (e) {
                          return e.copyWithoutAttribute(t);
                        }),
                      );
                    }),
                    (n.prototype.setAttributesAtRange = function (t, e) {
                      return this.copyWithPieceList(
                        this.pieceList.transformObjectsInRange(e, function (e) {
                          return e.copyWithAttributes(t);
                        }),
                      );
                    }),
                    (n.prototype.getAttributesAtPosition = function (t) {
                      var e, n;
                      return null !=
                        (e =
                          null != (n = this.pieceList.getObjectAtPosition(t))
                            ? n.getAttributes()
                            : void 0)
                        ? e
                        : {};
                    }),
                    (n.prototype.getCommonAttributes = function () {
                      var t, e;
                      return (
                        (t = function () {
                          var t, n, i, r;
                          for (
                            r = [],
                              t = 0,
                              n = (i = this.pieceList.toArray()).length;
                            t < n;
                            t++
                          )
                            (e = i[t]), r.push(e.getAttributes());
                          return r;
                        }.call(this)),
                        o.Hash.fromCommonAttributesOfObjects(t).toObject()
                      );
                    }),
                    (n.prototype.getCommonAttributesAtRange = function (t) {
                      var e;
                      return null !=
                        (e = this.getTextAtRange(t).getCommonAttributes())
                        ? e
                        : {};
                    }),
                    (n.prototype.getExpandedRangeForAttributeAtOffset =
                      function (t, e) {
                        var n, i, r;
                        for (
                          n = r = e, i = this.getLength();
                          n > 0 &&
                          this.getCommonAttributesAtRange([n - 1, r])[t];

                        )
                          n--;
                        for (
                          ;
                          r < i &&
                          this.getCommonAttributesAtRange([e, r + 1])[t];

                        )
                          r++;
                        return [n, r];
                      }),
                    (n.prototype.getTextAtRange = function (t) {
                      return this.copyWithPieceList(
                        this.pieceList.getSplittableListInRange(t),
                      );
                    }),
                    (n.prototype.getStringAtRange = function (t) {
                      return this.pieceList
                        .getSplittableListInRange(t)
                        .toString();
                    }),
                    (n.prototype.getStringAtPosition = function (t) {
                      return this.getStringAtRange([t, t + 1]);
                    }),
                    (n.prototype.startsWithString = function (t) {
                      return this.getStringAtRange([0, t.length]) === t;
                    }),
                    (n.prototype.endsWithString = function (t) {
                      var e;
                      return (
                        (e = this.getLength()),
                        this.getStringAtRange([e - t.length, e]) === t
                      );
                    }),
                    (n.prototype.getAttachmentPieces = function () {
                      var t, e, n, i, r;
                      for (
                        r = [],
                          t = 0,
                          e = (i = this.pieceList.toArray()).length;
                        t < e;
                        t++
                      )
                        null != (n = i[t]).attachment && r.push(n);
                      return r;
                    }),
                    (n.prototype.getAttachments = function () {
                      var t, e, n, i, r;
                      for (
                        r = [],
                          t = 0,
                          e = (i = this.getAttachmentPieces()).length;
                        t < e;
                        t++
                      )
                        (n = i[t]), r.push(n.attachment);
                      return r;
                    }),
                    (n.prototype.getAttachmentAndPositionById = function (t) {
                      var e, n, i, r, o, s;
                      for (
                        r = 0, e = 0, n = (o = this.pieceList.toArray()).length;
                        e < n;
                        e++
                      ) {
                        if (
                          (null != (s = (i = o[e]).attachment)
                            ? s.id
                            : void 0) === t
                        )
                          return { attachment: i.attachment, position: r };
                        r += i.length;
                      }
                      return { attachment: null, position: null };
                    }),
                    (n.prototype.getAttachmentById = function (t) {
                      var e, n;
                      return (
                        (e = (n = this.getAttachmentAndPositionById(t))
                          .attachment),
                        n.position,
                        e
                      );
                    }),
                    (n.prototype.getRangeOfAttachment = function (t) {
                      var e, n;
                      if (
                        ((t = (n = this.getAttachmentAndPositionById(t.id))
                          .attachment),
                        (e = n.position),
                        null != t)
                      )
                        return [e, e + 1];
                    }),
                    (n.prototype.updateAttributesForAttachment = function (
                      t,
                      e,
                    ) {
                      var n;
                      return (n = this.getRangeOfAttachment(e))
                        ? this.addAttributesAtRange(t, n)
                        : this;
                    }),
                    (n.prototype.getLength = function () {
                      return this.pieceList.getEndPosition();
                    }),
                    (n.prototype.isEmpty = function () {
                      return 0 === this.getLength();
                    }),
                    (n.prototype.isEqualTo = function (t) {
                      var e;
                      return (
                        n.__super__.isEqualTo.apply(this, arguments) ||
                        (null != t && null != (e = t.pieceList)
                          ? e.isEqualTo(this.pieceList)
                          : void 0)
                      );
                    }),
                    (n.prototype.isBlockBreak = function () {
                      return (
                        1 === this.getLength() &&
                        this.pieceList.getObjectAtIndex(0).isBlockBreak()
                      );
                    }),
                    (n.prototype.eachPiece = function (t) {
                      return this.pieceList.eachObject(t);
                    }),
                    (n.prototype.getPieces = function () {
                      return this.pieceList.toArray();
                    }),
                    (n.prototype.getPieceAtPosition = function (t) {
                      return this.pieceList.getObjectAtPosition(t);
                    }),
                    (n.prototype.contentsForInspection = function () {
                      return { pieceList: this.pieceList.inspect() };
                    }),
                    (n.prototype.toSerializableText = function () {
                      var t;
                      return (
                        (t = this.pieceList.selectSplittableList(function (t) {
                          return t.isSerializable();
                        })),
                        this.copyWithPieceList(t)
                      );
                    }),
                    (n.prototype.toString = function () {
                      return this.pieceList.toString();
                    }),
                    (n.prototype.toJSON = function () {
                      return this.pieceList.toJSON();
                    }),
                    (n.prototype.toConsole = function () {
                      var t;
                      return JSON.stringify(
                        function () {
                          var e, n, i, r;
                          for (
                            r = [],
                              e = 0,
                              n = (i = this.pieceList.toArray()).length;
                            e < n;
                            e++
                          )
                            (t = i[e]), r.push(JSON.parse(t.toConsole()));
                          return r;
                        }.call(this),
                      );
                    }),
                    (n.prototype.getDirection = function () {
                      return o.getDirection(this.toString());
                    }),
                    (n.prototype.isRTL = function () {
                      return "rtl" === this.getDirection();
                    }),
                    n
                  );
                })(o.Object);
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i,
                  r = {}.hasOwnProperty,
                  s =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; e < n; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    },
                  a = [].slice;
                (t = o.arraysAreEqual),
                  (i = o.spliceArray),
                  (e = o.getBlockConfig),
                  o.getBlockAttributeNames,
                  (n = o.getListAttributeNames),
                  (o.Block = (function (u) {
                    var c, l, h, p, d, f, g, m, y;
                    function v(t, e, n) {
                      null == t && (t = new o.Text()),
                        null == e && (e = []),
                        v.__super__.constructor.apply(this, arguments),
                        (this.text = l(t)),
                        (this.attributes = e),
                        (this.value = n);
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) r.call(e, n) && (t[n] = e[n]);
                        function i() {
                          this.constructor = t;
                        }
                        (i.prototype = e.prototype),
                          (t.prototype = new i()),
                          (t.__super__ = e.prototype);
                      })(v, u),
                      (v.fromJSON = function (t) {
                        return new this(o.Text.fromJSON(t.text), t.attributes);
                      }),
                      (v.prototype.isEmpty = function () {
                        return this.text.isBlockBreak();
                      }),
                      (v.prototype.isEqualTo = function (e) {
                        return (
                          v.__super__.isEqualTo.apply(this, arguments) ||
                          (this.text.isEqualTo(null != e ? e.text : void 0) &&
                            t(
                              this.attributes,
                              null != e ? e.attributes : void 0,
                            ))
                        );
                      }),
                      (v.prototype.copyWithText = function (t) {
                        return new this.constructor(
                          t,
                          this.attributes,
                          this.value,
                        );
                      }),
                      (v.prototype.copyWithoutText = function () {
                        return this.copyWithText(null);
                      }),
                      (v.prototype.copyWithAttributes = function (t, e) {
                        return new this.constructor(this.text, t, e);
                      }),
                      (v.prototype.copyWithoutAttributes = function () {
                        return this.copyWithAttributes(null);
                      }),
                      (v.prototype.copyUsingObjectMap = function (t) {
                        var e;
                        return (e = t.find(this.text))
                          ? this.copyWithText(e)
                          : this.copyWithText(this.text.copyUsingObjectMap(t));
                      }),
                      (v.prototype.addAttribute = function (t, e) {
                        var n;
                        return (
                          (n = this.attributes.concat(p(t))),
                          this.copyWithAttributes(n, e)
                        );
                      }),
                      (v.prototype.removeAttribute = function (t) {
                        var n, i;
                        return (
                          (i = e(t).listAttribute),
                          (n = f(f(this.attributes, t), i)),
                          this.copyWithAttributes(n)
                        );
                      }),
                      (v.prototype.removeLastAttribute = function () {
                        return this.removeAttribute(this.getLastAttribute());
                      }),
                      (v.prototype.getLastAttribute = function () {
                        return d(this.attributes);
                      }),
                      (v.prototype.getAttributes = function () {
                        return this.attributes.slice(0);
                      }),
                      (v.prototype.getAttributeLevel = function () {
                        return this.attributes.length;
                      }),
                      (v.prototype.getAttributeAtLevel = function (t) {
                        return this.attributes[t - 1];
                      }),
                      (v.prototype.hasAttribute = function (t) {
                        return s.call(this.attributes, t) >= 0;
                      }),
                      (v.prototype.hasAttributes = function () {
                        return this.getAttributeLevel() > 0;
                      }),
                      (v.prototype.getLastNestableAttribute = function () {
                        return d(this.getNestableAttributes());
                      }),
                      (v.prototype.getNestableAttributes = function () {
                        var t, n, i, r, o;
                        for (
                          o = [], n = 0, i = (r = this.attributes).length;
                          n < i;
                          n++
                        )
                          (t = r[n]), e(t).nestable && o.push(t);
                        return o;
                      }),
                      (v.prototype.getNestingLevel = function () {
                        return this.getNestableAttributes().length;
                      }),
                      (v.prototype.decreaseNestingLevel = function () {
                        var t;
                        return (t = this.getLastNestableAttribute())
                          ? this.removeAttribute(t)
                          : this;
                      }),
                      (v.prototype.increaseNestingLevel = function () {
                        var t, e, n;
                        return (t = this.getLastNestableAttribute())
                          ? ((n = this.attributes.lastIndexOf(t)),
                            (e = i.apply(
                              null,
                              [this.attributes, n + 1, 0].concat(a.call(p(t))),
                            )),
                            this.copyWithAttributes(e))
                          : this;
                      }),
                      (v.prototype.getListItemAttributes = function () {
                        var t, n, i, r, o;
                        for (
                          o = [], n = 0, i = (r = this.attributes).length;
                          n < i;
                          n++
                        )
                          (t = r[n]), e(t).listAttribute && o.push(t);
                        return o;
                      }),
                      (v.prototype.isListItem = function () {
                        var t;
                        return null != (t = e(this.getLastAttribute()))
                          ? t.listAttribute
                          : void 0;
                      }),
                      (v.prototype.isTerminalBlock = function () {
                        var t;
                        return null != (t = e(this.getLastAttribute()))
                          ? t.terminal
                          : void 0;
                      }),
                      (v.prototype.breaksOnReturn = function () {
                        var t;
                        return null != (t = e(this.getLastAttribute()))
                          ? t.breakOnReturn
                          : void 0;
                      }),
                      (v.prototype.findLineBreakInDirectionFromPosition =
                        function (t, e) {
                          var n, i;
                          if (
                            ((i = this.toString()),
                            -1 !==
                              (n = (function () {
                                switch (t) {
                                  case "forward":
                                    return i.indexOf("\n", e);
                                  case "backward":
                                    return i.slice(0, e).lastIndexOf("\n");
                                }
                              })()))
                          )
                            return n;
                        }),
                      (v.prototype.contentsForInspection = function () {
                        return {
                          text: this.text.inspect(),
                          attributes: this.attributes,
                        };
                      }),
                      (v.prototype.toString = function () {
                        return this.text.toString();
                      }),
                      (v.prototype.toJSON = function () {
                        return { text: this.text, attributes: this.attributes };
                      }),
                      (v.prototype.getDirection = function () {
                        return this.text.getDirection();
                      }),
                      (v.prototype.isRTL = function () {
                        return this.text.isRTL();
                      }),
                      (v.prototype.getLength = function () {
                        return this.text.getLength();
                      }),
                      (v.prototype.canBeConsolidatedWith = function (t) {
                        return (
                          !this.hasAttributes() &&
                          !t.hasAttributes() &&
                          this.getDirection() === t.getDirection()
                        );
                      }),
                      (v.prototype.consolidateWith = function (t) {
                        var e, n;
                        return (
                          (e = o.Text.textForStringWithAttributes("\n")),
                          (n = this.getTextWithoutBlockBreak().appendText(e)),
                          this.copyWithText(n.appendText(t.text))
                        );
                      }),
                      (v.prototype.splitAtOffset = function (t) {
                        var e, n;
                        return (
                          0 === t
                            ? ((e = null), (n = this))
                            : t === this.getLength()
                              ? ((e = this), (n = null))
                              : ((e = this.copyWithText(
                                  this.text.getTextAtRange([0, t]),
                                )),
                                (n = this.copyWithText(
                                  this.text.getTextAtRange([
                                    t,
                                    this.getLength(),
                                  ]),
                                ))),
                          [e, n]
                        );
                      }),
                      (v.prototype.getBlockBreakPosition = function () {
                        return this.text.getLength() - 1;
                      }),
                      (v.prototype.getTextWithoutBlockBreak = function () {
                        return g(this.text)
                          ? this.text.getTextAtRange([
                              0,
                              this.getBlockBreakPosition(),
                            ])
                          : this.text.copy();
                      }),
                      (v.prototype.canBeGrouped = function (t) {
                        return this.attributes[t];
                      }),
                      (v.prototype.canBeGroupedWith = function (t, i) {
                        var r, o, a, u;
                        return (
                          (o = (a = t.getAttributes())[i]),
                          (r = this.attributes[i]) === o &&
                            !(
                              !1 === e(r).group &&
                              ((u = a[i + 1]), s.call(n(), u) < 0)
                            ) &&
                            (this.getDirection() === t.getDirection() ||
                              t.isEmpty())
                        );
                      }),
                      (l = function (t) {
                        return (t = y(t)), (t = c(t));
                      }),
                      (y = function (t) {
                        var e, n, i, r, s, u;
                        return (
                          (r = !1),
                          (u = t.getPieces()),
                          (n =
                            2 <= u.length
                              ? a.call(u, 0, (e = u.length - 1))
                              : ((e = 0), [])),
                          null == (i = u[e++])
                            ? t
                            : ((n = (function () {
                                var t, e, i;
                                for (i = [], t = 0, e = n.length; t < e; t++)
                                  (s = n[t]).isBlockBreak()
                                    ? ((r = !0), i.push(m(s)))
                                    : i.push(s);
                                return i;
                              })()),
                              r ? new o.Text(a.call(n).concat([i])) : t)
                        );
                      }),
                      (h = o.Text.textForStringWithAttributes("\n", {
                        blockBreak: !0,
                      })),
                      (c = function (t) {
                        return g(t) ? t : t.appendText(h);
                      }),
                      (g = function (t) {
                        var e;
                        return (
                          0 !== (e = t.getLength()) &&
                          t.getTextAtRange([e - 1, e]).isBlockBreak()
                        );
                      }),
                      (m = function (t) {
                        return t.copyWithoutAttribute("blockBreak");
                      }),
                      (p = function (t) {
                        var n;
                        return null != (n = e(t).listAttribute) ? [n, t] : [t];
                      }),
                      (d = function (t) {
                        return t.slice(-1)[0];
                      }),
                      (f = function (t, e) {
                        var n;
                        return -1 === (n = t.lastIndexOf(e)) ? t : i(t, n, 1);
                      }),
                      v
                    );
                  })(o.Object));
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i = {}.hasOwnProperty,
                  r =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; e < n; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    },
                  s = [].slice;
                (e = o.tagName),
                  (n = o.walkTree),
                  (t = o.nodeIsAttachmentElement),
                  (o.HTMLSanitizer = (function (a) {
                    var u, c, l, h;
                    function p(t, e) {
                      var n;
                      (n = null != e ? e : {}),
                        (this.allowedAttributes = n.allowedAttributes),
                        (this.forbiddenProtocols = n.forbiddenProtocols),
                        (this.forbiddenElements = n.forbiddenElements),
                        null == this.allowedAttributes &&
                          (this.allowedAttributes = u),
                        null == this.forbiddenProtocols &&
                          (this.forbiddenProtocols = l),
                        null == this.forbiddenElements &&
                          (this.forbiddenElements = c),
                        (this.body = h(t));
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) i.call(e, n) && (t[n] = e[n]);
                        function r() {
                          this.constructor = t;
                        }
                        (r.prototype = e.prototype),
                          (t.prototype = new r()),
                          (t.__super__ = e.prototype);
                      })(p, a),
                      (u = "style href src width height class".split(" ")),
                      (l = "javascript:".split(" ")),
                      (c = "script iframe".split(" ")),
                      (p.sanitize = function (t, e) {
                        var n;
                        return (n = new this(t, e)).sanitize(), n;
                      }),
                      (p.prototype.sanitize = function () {
                        return (
                          this.sanitizeElements(),
                          this.normalizeListElementNesting()
                        );
                      }),
                      (p.prototype.getHTML = function () {
                        return this.body.innerHTML;
                      }),
                      (p.prototype.getBody = function () {
                        return this.body;
                      }),
                      (p.prototype.sanitizeElements = function () {
                        var t, e, i, r, s;
                        for (s = n(this.body), r = []; s.nextNode(); )
                          switch ((i = s.currentNode).nodeType) {
                            case Node.ELEMENT_NODE:
                              this.elementIsRemovable(i)
                                ? r.push(i)
                                : this.sanitizeElement(i);
                              break;
                            case Node.COMMENT_NODE:
                              r.push(i);
                          }
                        for (t = 0, e = r.length; t < e; t++)
                          (i = r[t]), o.removeNode(i);
                        return this.body;
                      }),
                      (p.prototype.sanitizeElement = function (t) {
                        var e, n, i, o, a;
                        for (
                          t.hasAttribute("href") &&
                            ((o = t.protocol),
                            r.call(this.forbiddenProtocols, o) >= 0 &&
                              t.removeAttribute("href")),
                            e = 0,
                            n = (a = s.call(t.attributes)).length;
                          e < n;
                          e++
                        )
                          (i = a[e].name),
                            r.call(this.allowedAttributes, i) >= 0 ||
                              0 === i.indexOf("data-trix") ||
                              t.removeAttribute(i);
                        return t;
                      }),
                      (p.prototype.normalizeListElementNesting = function () {
                        var t, n, i, r, o;
                        for (
                          t = 0,
                            n = (o = s.call(
                              this.body.querySelectorAll("ul,ol"),
                            )).length;
                          t < n;
                          t++
                        )
                          (r = (i = o[t]).previousElementSibling) &&
                            "li" === e(r) &&
                            r.appendChild(i);
                        return this.body;
                      }),
                      (p.prototype.elementIsRemovable = function (t) {
                        if (
                          (null != t ? t.nodeType : void 0) ===
                          Node.ELEMENT_NODE
                        )
                          return (
                            this.elementIsForbidden(t) ||
                            this.elementIsntSerializable(t)
                          );
                      }),
                      (p.prototype.elementIsForbidden = function (t) {
                        var n;
                        return (
                          (n = e(t)), r.call(this.forbiddenElements, n) >= 0
                        );
                      }),
                      (p.prototype.elementIsntSerializable = function (e) {
                        return (
                          "false" === e.getAttribute("data-trix-serialize") &&
                          !t(e)
                        );
                      }),
                      (h = function (t) {
                        var e, n, i, r, o;
                        for (
                          null == t && (t = ""),
                            t = t.replace(/<\/html[^>]*>[^]*$/i, "</html>"),
                            (e =
                              document.implementation.createHTMLDocument(
                                "",
                              )).documentElement.innerHTML = t,
                            i = 0,
                            r = (o = e.head.querySelectorAll("style")).length;
                          i < r;
                          i++
                        )
                          (n = o[i]), e.body.appendChild(n);
                        return e.body;
                      }),
                      p
                    );
                  })(o.BasicObject));
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i,
                  r,
                  s,
                  a,
                  u,
                  c,
                  l,
                  h,
                  p = {}.hasOwnProperty,
                  d =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; e < n; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (t = o.arraysAreEqual),
                  (s = o.makeElement),
                  (l = o.tagName),
                  (r = o.getBlockTagNames),
                  (h = o.walkTree),
                  (i = o.findClosestElementFromNode),
                  (n = o.elementContainsNode),
                  (a = o.nodeIsAttachmentElement),
                  (u = o.normalizeSpaces),
                  (e = o.breakableWhitespacePattern),
                  (c = o.squishBreakableWhitespace),
                  (o.HTMLParser = (function (f) {
                    var g, m, y, v, b, A, x, C, w, k, S, E;
                    function T(t, e) {
                      (this.html = t),
                        (this.referenceElement = (
                          null != e ? e : {}
                        ).referenceElement),
                        (this.blocks = []),
                        (this.blockElements = []),
                        (this.processedElements = []);
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) p.call(e, n) && (t[n] = e[n]);
                        function i() {
                          this.constructor = t;
                        }
                        (i.prototype = e.prototype),
                          (t.prototype = new i()),
                          (t.__super__ = e.prototype);
                      })(T, f),
                      (T.parse = function (t, e) {
                        var n;
                        return (n = new this(t, e)).parse(), n;
                      }),
                      (T.prototype.getDocument = function () {
                        return o.Document.fromJSON(this.blocks);
                      }),
                      (T.prototype.parse = function () {
                        var t, e;
                        try {
                          for (
                            this.createHiddenContainer(),
                              t = o.HTMLSanitizer.sanitize(this.html).getHTML(),
                              this.containerElement.innerHTML = t,
                              e = h(this.containerElement, { usingFilter: x });
                            e.nextNode();

                          )
                            this.processNode(e.currentNode);
                          return this.translateBlockElementMarginsToNewlines();
                        } finally {
                          this.removeHiddenContainer();
                        }
                      }),
                      (T.prototype.createHiddenContainer = function () {
                        return this.referenceElement
                          ? ((this.containerElement =
                              this.referenceElement.cloneNode(!1)),
                            this.containerElement.removeAttribute("id"),
                            this.containerElement.setAttribute(
                              "data-trix-internal",
                              "",
                            ),
                            (this.containerElement.style.display = "none"),
                            this.referenceElement.parentNode.insertBefore(
                              this.containerElement,
                              this.referenceElement.nextSibling,
                            ))
                          : ((this.containerElement = s({
                              tagName: "div",
                              style: { display: "none" },
                            })),
                            document.body.appendChild(this.containerElement));
                      }),
                      (T.prototype.removeHiddenContainer = function () {
                        return o.removeNode(this.containerElement);
                      }),
                      (x = function (t) {
                        return "style" === l(t)
                          ? NodeFilter.FILTER_REJECT
                          : NodeFilter.FILTER_ACCEPT;
                      }),
                      (T.prototype.processNode = function (t) {
                        switch (t.nodeType) {
                          case Node.TEXT_NODE:
                            if (!this.isInsignificantTextNode(t))
                              return (
                                this.appendBlockForTextNode(t),
                                this.processTextNode(t)
                              );
                            break;
                          case Node.ELEMENT_NODE:
                            return (
                              this.appendBlockForElement(t),
                              this.processElement(t)
                            );
                        }
                      }),
                      (T.prototype.appendBlockForTextNode = function (e) {
                        var n, i, r;
                        return (i = e.parentNode) ===
                          this.currentBlockElement &&
                          this.isBlockElement(e.previousSibling)
                          ? this.appendStringWithAttributes("\n")
                          : (i !== this.containerElement &&
                                !this.isBlockElement(i)) ||
                              ((n = this.getBlockAttributes(i)),
                              t(
                                n,
                                null != (r = this.currentBlock)
                                  ? r.attributes
                                  : void 0,
                              ))
                            ? void 0
                            : ((this.currentBlock =
                                this.appendBlockForAttributesWithElement(n, i)),
                              (this.currentBlockElement = i));
                      }),
                      (T.prototype.appendBlockForElement = function (e) {
                        var i, r, o, s;
                        if (
                          ((o = this.isBlockElement(e)),
                          (r = n(this.currentBlockElement, e)),
                          o && !this.isBlockElement(e.firstChild))
                        ) {
                          if (
                            (!this.isInsignificantTextNode(e.firstChild) ||
                              !this.isBlockElement(e.firstElementChild)) &&
                            ((i = this.getBlockAttributes(e)), e.firstChild)
                          )
                            return r && t(i, this.currentBlock.attributes)
                              ? this.appendStringWithAttributes("\n")
                              : ((this.currentBlock =
                                  this.appendBlockForAttributesWithElement(
                                    i,
                                    e,
                                  )),
                                (this.currentBlockElement = e));
                        } else if (this.currentBlockElement && !r && !o)
                          return (s = this.findParentBlockElement(e))
                            ? this.appendBlockForElement(s)
                            : ((this.currentBlock = this.appendEmptyBlock()),
                              (this.currentBlockElement = null));
                      }),
                      (T.prototype.findParentBlockElement = function (t) {
                        var e;
                        for (
                          e = t.parentElement;
                          e && e !== this.containerElement;

                        ) {
                          if (
                            this.isBlockElement(e) &&
                            d.call(this.blockElements, e) >= 0
                          )
                            return e;
                          e = e.parentElement;
                        }
                        return null;
                      }),
                      (T.prototype.processTextNode = function (t) {
                        var e, n;
                        return (
                          (n = t.data),
                          m(t.parentNode) ||
                            ((n = c(n)),
                            S(
                              null != (e = t.previousSibling)
                                ? e.textContent
                                : void 0,
                            ) && (n = b(n))),
                          this.appendStringWithAttributes(
                            n,
                            this.getTextAttributes(t.parentNode),
                          )
                        );
                      }),
                      (T.prototype.processElement = function (t) {
                        var e, n, i, r, o;
                        if (a(t))
                          return (
                            (e = C(t, "attachment")),
                            Object.keys(e).length &&
                              ((r = this.getTextAttributes(t)),
                              this.appendAttachmentWithAttributes(e, r),
                              (t.innerHTML = "")),
                            this.processedElements.push(t)
                          );
                        switch (l(t)) {
                          case "br":
                            return (
                              this.isExtraBR(t) ||
                                this.isBlockElement(t.nextSibling) ||
                                this.appendStringWithAttributes(
                                  "\n",
                                  this.getTextAttributes(t),
                                ),
                              this.processedElements.push(t)
                            );
                          case "img":
                            for (n in ((e = {
                              url: t.getAttribute("src"),
                              contentType: "image",
                            }),
                            (i = v(t))))
                              (o = i[n]), (e[n] = o);
                            return (
                              this.appendAttachmentWithAttributes(
                                e,
                                this.getTextAttributes(t),
                              ),
                              this.processedElements.push(t)
                            );
                          case "tr":
                            if (t.parentNode.firstChild !== t)
                              return this.appendStringWithAttributes("\n");
                            break;
                          case "td":
                            if (t.parentNode.firstChild !== t)
                              return this.appendStringWithAttributes(" | ");
                        }
                      }),
                      (T.prototype.appendBlockForAttributesWithElement =
                        function (t, e) {
                          var n;
                          return (
                            this.blockElements.push(e),
                            (n = g(t)),
                            this.blocks.push(n),
                            n
                          );
                        }),
                      (T.prototype.appendEmptyBlock = function () {
                        return this.appendBlockForAttributesWithElement(
                          [],
                          null,
                        );
                      }),
                      (T.prototype.appendStringWithAttributes = function (
                        t,
                        e,
                      ) {
                        return this.appendPiece(k(t, e));
                      }),
                      (T.prototype.appendAttachmentWithAttributes = function (
                        t,
                        e,
                      ) {
                        return this.appendPiece(w(t, e));
                      }),
                      (T.prototype.appendPiece = function (t) {
                        return (
                          0 === this.blocks.length && this.appendEmptyBlock(),
                          this.blocks[this.blocks.length - 1].text.push(t)
                        );
                      }),
                      (T.prototype.appendStringToTextAtIndex = function (t, e) {
                        var n, i;
                        return "string" ===
                          (null != (n = (i = this.blocks[e].text)[i.length - 1])
                            ? n.type
                            : void 0)
                          ? (n.string += t)
                          : i.push(k(t));
                      }),
                      (T.prototype.prependStringToTextAtIndex = function (
                        t,
                        e,
                      ) {
                        var n, i;
                        return "string" ===
                          (null != (n = (i = this.blocks[e].text)[0])
                            ? n.type
                            : void 0)
                          ? (n.string = t + n.string)
                          : i.unshift(k(t));
                      }),
                      (k = function (t, e) {
                        return (
                          null == e && (e = {}),
                          "string",
                          { string: (t = u(t)), attributes: e, type: "string" }
                        );
                      }),
                      (w = function (t, e) {
                        return (
                          null == e && (e = {}),
                          "attachment",
                          { attachment: t, attributes: e, type: "attachment" }
                        );
                      }),
                      (g = function (t) {
                        return (
                          null == t && (t = {}), { text: [], attributes: t }
                        );
                      }),
                      (T.prototype.getTextAttributes = function (t) {
                        var e, n, r, s, u, c, l, h, p, d, f, g;
                        for (e in ((r = {}), (p = o.config.textAttributes)))
                          if (
                            (u = p[e]).tagName &&
                            i(t, {
                              matchingSelector: u.tagName,
                              untilNode: this.containerElement,
                            })
                          )
                            r[e] = !0;
                          else if (u.parser) {
                            if ((g = u.parser(t))) {
                              for (
                                n = !1,
                                  c = 0,
                                  h = (d = this.findBlockElementAncestors(t))
                                    .length;
                                c < h;
                                c++
                              )
                                if (((s = d[c]), u.parser(s) === g)) {
                                  n = !0;
                                  break;
                                }
                              n || (r[e] = g);
                            }
                          } else
                            u.styleProperty &&
                              (g = t.style[u.styleProperty]) &&
                              (r[e] = g);
                        if (a(t))
                          for (l in (f = C(t, "attributes")))
                            (g = f[l]), (r[l] = g);
                        return r;
                      }),
                      (T.prototype.getBlockAttributes = function (t) {
                        var e, n, i, r;
                        for (n = []; t && t !== this.containerElement; ) {
                          for (e in (r = o.config.blockAttributes))
                            !1 !== (i = r[e]).parse &&
                              l(t) === i.tagName &&
                              ((!("function" == typeof i.test
                                ? i.test(t)
                                : void 0) &&
                                i.test) ||
                                (n.push(e),
                                i.listAttribute && n.push(i.listAttribute)));
                          t = t.parentNode;
                        }
                        return n.reverse();
                      }),
                      (T.prototype.findBlockElementAncestors = function (t) {
                        var e, n;
                        for (e = []; t && t !== this.containerElement; )
                          (n = l(t)),
                            d.call(r(), n) >= 0 && e.push(t),
                            (t = t.parentNode);
                        return e;
                      }),
                      (C = function (t, e) {
                        try {
                          return JSON.parse(t.getAttribute("data-trix-" + e));
                        } catch (t) {
                          return {};
                        }
                      }),
                      (v = function (t) {
                        var e, n, i;
                        return (
                          (i = t.getAttribute("width")),
                          (n = t.getAttribute("height")),
                          (e = {}),
                          i && (e.width = parseInt(i, 10)),
                          n && (e.height = parseInt(n, 10)),
                          e
                        );
                      }),
                      (T.prototype.isBlockElement = function (t) {
                        var e;
                        if (
                          (null != t ? t.nodeType : void 0) ===
                            Node.ELEMENT_NODE &&
                          !a(t) &&
                          !i(t, {
                            matchingSelector: "td",
                            untilNode: this.containerElement,
                          })
                        )
                          return (
                            (e = l(t)),
                            d.call(r(), e) >= 0 ||
                              "block" === window.getComputedStyle(t).display
                          );
                      }),
                      (T.prototype.isInsignificantTextNode = function (t) {
                        var e, n, i;
                        if (
                          (null != t ? t.nodeType : void 0) ===
                            Node.TEXT_NODE &&
                          E(t.data) &&
                          ((n = t.parentNode),
                          (i = t.previousSibling),
                          (e = t.nextSibling),
                          (!A(n.previousSibling) ||
                            this.isBlockElement(n.previousSibling)) &&
                            !m(n))
                        )
                          return (
                            !i ||
                            this.isBlockElement(i) ||
                            !e ||
                            this.isBlockElement(e)
                          );
                      }),
                      (T.prototype.isExtraBR = function (t) {
                        return (
                          "br" === l(t) &&
                          this.isBlockElement(t.parentNode) &&
                          t.parentNode.lastChild === t
                        );
                      }),
                      (m = function (t) {
                        var e;
                        return (
                          "pre" ===
                            (e = window.getComputedStyle(t).whiteSpace) ||
                          "pre-wrap" === e ||
                          "pre-line" === e
                        );
                      }),
                      (A = function (t) {
                        return t && !S(t.textContent);
                      }),
                      (T.prototype.translateBlockElementMarginsToNewlines =
                        function () {
                          var t, e, n, i, r, o, s;
                          for (
                            t = this.getMarginOfDefaultBlockElement(),
                              s = [],
                              n = e = 0,
                              i = (o = this.blocks).length;
                            e < i;
                            n = ++e
                          )
                            o[n],
                              (r = this.getMarginOfBlockElementAtIndex(n)) &&
                                (r.top > 2 * t.top &&
                                  this.prependStringToTextAtIndex("\n", n),
                                r.bottom > 2 * t.bottom
                                  ? s.push(
                                      this.appendStringToTextAtIndex("\n", n),
                                    )
                                  : s.push(void 0));
                          return s;
                        }),
                      (T.prototype.getMarginOfBlockElementAtIndex = function (
                        t,
                      ) {
                        var e, n;
                        if (
                          (e = this.blockElements[t]) &&
                          e.textContent &&
                          ((n = l(e)),
                          !(
                            d.call(r(), n) >= 0 ||
                            d.call(this.processedElements, e) >= 0
                          ))
                        )
                          return y(e);
                      }),
                      (T.prototype.getMarginOfDefaultBlockElement =
                        function () {
                          var t;
                          return (
                            (t = s(o.config.blockAttributes.default.tagName)),
                            this.containerElement.appendChild(t),
                            y(t)
                          );
                        }),
                      (y = function (t) {
                        var e;
                        if (
                          "block" === (e = window.getComputedStyle(t)).display
                        )
                          return {
                            top: parseInt(e.marginTop),
                            bottom: parseInt(e.marginBottom),
                          };
                      }),
                      (b = function (t) {
                        return t.replace(RegExp("^" + e.source + "+"), "");
                      }),
                      (E = function (t) {
                        return RegExp("^" + e.source + "*$").test(t);
                      }),
                      (S = function (t) {
                        return /\s$/.test(t);
                      }),
                      T
                    );
                  })(o.BasicObject));
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i,
                  r = {}.hasOwnProperty,
                  s = [].slice,
                  a =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; e < n; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (t = o.arraysAreEqual),
                  (n = o.normalizeRange),
                  (i = o.rangeIsCollapsed),
                  (e = o.getBlockConfig),
                  (o.Document = (function (u) {
                    var c;
                    function l(t) {
                      null == t && (t = []),
                        l.__super__.constructor.apply(this, arguments),
                        0 === t.length && (t = [new o.Block()]),
                        (this.blockList = o.SplittableList.box(t));
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) r.call(e, n) && (t[n] = e[n]);
                        function i() {
                          this.constructor = t;
                        }
                        (i.prototype = e.prototype),
                          (t.prototype = new i()),
                          (t.__super__ = e.prototype);
                      })(l, u),
                      (l.fromJSON = function (t) {
                        var e;
                        return new this(
                          (function () {
                            var n, i, r;
                            for (r = [], n = 0, i = t.length; n < i; n++)
                              (e = t[n]), r.push(o.Block.fromJSON(e));
                            return r;
                          })(),
                        );
                      }),
                      (l.fromHTML = function (t, e) {
                        return o.HTMLParser.parse(t, e).getDocument();
                      }),
                      (l.fromString = function (t, e) {
                        var n;
                        return (
                          (n = o.Text.textForStringWithAttributes(t, e)),
                          new this([new o.Block(n)])
                        );
                      }),
                      (l.prototype.isEmpty = function () {
                        var t;
                        return (
                          1 === this.blockList.length &&
                          (t = this.getBlockAtIndex(0)).isEmpty() &&
                          !t.hasAttributes()
                        );
                      }),
                      (l.prototype.copy = function (t) {
                        var e;
                        return (
                          null == t && (t = {}),
                          (e = t.consolidateBlocks
                            ? this.blockList.consolidate().toArray()
                            : this.blockList.toArray()),
                          new this.constructor(e)
                        );
                      }),
                      (l.prototype.copyUsingObjectsFromDocument = function (t) {
                        var e;
                        return (
                          (e = new o.ObjectMap(t.getObjects())),
                          this.copyUsingObjectMap(e)
                        );
                      }),
                      (l.prototype.copyUsingObjectMap = function (t) {
                        var e, n, i;
                        return (
                          (n = function () {
                            var n, r, o, s;
                            for (
                              s = [], n = 0, r = (o = this.getBlocks()).length;
                              n < r;
                              n++
                            )
                              (e = o[n]),
                                (i = t.find(e))
                                  ? s.push(i)
                                  : s.push(e.copyUsingObjectMap(t));
                            return s;
                          }.call(this)),
                          new this.constructor(n)
                        );
                      }),
                      (l.prototype.copyWithBaseBlockAttributes = function (t) {
                        var e, n, i;
                        return (
                          null == t && (t = []),
                          (i = function () {
                            var i, r, o, s;
                            for (
                              s = [], i = 0, r = (o = this.getBlocks()).length;
                              i < r;
                              i++
                            )
                              (n = o[i]),
                                (e = t.concat(n.getAttributes())),
                                s.push(n.copyWithAttributes(e));
                            return s;
                          }.call(this)),
                          new this.constructor(i)
                        );
                      }),
                      (l.prototype.replaceBlock = function (t, e) {
                        var n;
                        return -1 === (n = this.blockList.indexOf(t))
                          ? this
                          : new this.constructor(
                              this.blockList.replaceObjectAtIndex(e, n),
                            );
                      }),
                      (l.prototype.insertDocumentAtRange = function (t, e) {
                        var r, o, s, a, u, c, l;
                        return (
                          (o = t.blockList),
                          (u = (e = n(e))[0]),
                          (s = (c = this.locationFromPosition(u)).index),
                          (a = c.offset),
                          (l = this),
                          (r = this.getBlockAtPosition(u)),
                          i(e) && r.isEmpty() && !r.hasAttributes()
                            ? (l = new this.constructor(
                                l.blockList.removeObjectAtIndex(s),
                              ))
                            : r.getBlockBreakPosition() === a && u++,
                          (l = l.removeTextAtRange(e)),
                          new this.constructor(
                            l.blockList.insertSplittableListAtPosition(o, u),
                          )
                        );
                      }),
                      (l.prototype.mergeDocumentAtRange = function (e, i) {
                        var r, o, s, a, u, c, l, h, p, d, f, g;
                        return (
                          (f = (i = n(i))[0]),
                          (d = this.locationFromPosition(f)),
                          (o = this.getBlockAtIndex(d.index).getAttributes()),
                          (r = e.getBaseBlockAttributes()),
                          (g = o.slice(-r.length)),
                          t(r, g)
                            ? ((l = o.slice(0, -r.length)),
                              (c = e.copyWithBaseBlockAttributes(l)))
                            : (c = e
                                .copy({ consolidateBlocks: !0 })
                                .copyWithBaseBlockAttributes(o)),
                          (s = c.getBlockCount()),
                          (a = c.getBlockAtIndex(0)),
                          t(o, a.getAttributes())
                            ? ((u = a.getTextWithoutBlockBreak()),
                              (p = this.insertTextAtRange(u, i)),
                              s > 1 &&
                                ((c = new this.constructor(
                                  c.getBlocks().slice(1),
                                )),
                                (h = f + u.getLength()),
                                (p = p.insertDocumentAtRange(c, h))))
                            : (p = this.insertDocumentAtRange(c, i)),
                          p
                        );
                      }),
                      (l.prototype.insertTextAtRange = function (t, e) {
                        var i, r, o, s, a;
                        return (
                          (a = (e = n(e))[0]),
                          (r = (s = this.locationFromPosition(a)).index),
                          (o = s.offset),
                          (i = this.removeTextAtRange(e)),
                          new this.constructor(
                            i.blockList.editObjectAtIndex(r, function (e) {
                              return e.copyWithText(
                                e.text.insertTextAtPosition(t, o),
                              );
                            }),
                          )
                        );
                      }),
                      (l.prototype.removeTextAtRange = function (t) {
                        var e,
                          r,
                          o,
                          s,
                          a,
                          u,
                          c,
                          l,
                          h,
                          p,
                          d,
                          f,
                          g,
                          m,
                          y,
                          v,
                          b,
                          A;
                        return (
                          (l = (p = t = n(t))[0]),
                          (v = p[1]),
                          i(t)
                            ? this
                            : ((u = (d = this.locationRangeFromRange(t))[0]),
                              (m = d[1]),
                              (a = u.index),
                              (c = u.offset),
                              (s = this.getBlockAtIndex(a)),
                              (g = m.index),
                              (y = m.offset),
                              (f = this.getBlockAtIndex(g)),
                              v - l == 1 &&
                              s.getBlockBreakPosition() === c &&
                              f.getBlockBreakPosition() !== y &&
                              "\n" === f.text.getStringAtPosition(y)
                                ? (o = this.blockList.editObjectAtIndex(
                                    g,
                                    function (t) {
                                      return t.copyWithText(
                                        t.text.removeTextAtRange([y, y + 1]),
                                      );
                                    },
                                  ))
                                : ((h = s.text.getTextAtRange([0, c])),
                                  (b = f.text.getTextAtRange([
                                    y,
                                    f.getLength(),
                                  ])),
                                  (A = h.appendText(b)),
                                  (r =
                                    a !== g &&
                                    0 === c &&
                                    s.getAttributeLevel() >=
                                      f.getAttributeLevel()
                                      ? f.copyWithText(A)
                                      : s.copyWithText(A)),
                                  (e = g + 1 - a),
                                  (o = this.blockList.splice(a, e, r))),
                              new this.constructor(o))
                        );
                      }),
                      (l.prototype.moveTextFromRangeToPosition = function (
                        t,
                        e,
                      ) {
                        var i, r, o, a, u, c, l, h, p, d;
                        return (
                          (p = (c = t = n(t))[0]),
                          (o = c[1]),
                          p <= e && e <= o
                            ? this
                            : ((r = this.getDocumentAtRange(t)),
                              (h = this.removeTextAtRange(t)),
                              (u = p < e) && (e -= r.getLength()),
                              (a = (l = r.getBlocks())[0]),
                              0 ===
                              (i = 2 <= l.length ? s.call(l, 1) : []).length
                                ? ((d = a.getTextWithoutBlockBreak()),
                                  u && (e += 1))
                                : (d = a.text),
                              (h = h.insertTextAtRange(d, e)),
                              0 === i.length
                                ? h
                                : ((r = new this.constructor(i)),
                                  (e += d.getLength()),
                                  h.insertDocumentAtRange(r, e)))
                        );
                      }),
                      (l.prototype.addAttributeAtRange = function (t, n, i) {
                        var r;
                        return (
                          (r = this.blockList),
                          this.eachBlockAtRange(i, function (i, o, s) {
                            return (r = r.editObjectAtIndex(s, function () {
                              return e(t)
                                ? i.addAttribute(t, n)
                                : o[0] === o[1]
                                  ? i
                                  : i.copyWithText(
                                      i.text.addAttributeAtRange(t, n, o),
                                    );
                            }));
                          }),
                          new this.constructor(r)
                        );
                      }),
                      (l.prototype.addAttribute = function (t, e) {
                        var n;
                        return (
                          (n = this.blockList),
                          this.eachBlock(function (i, r) {
                            return (n = n.editObjectAtIndex(r, function () {
                              return i.addAttribute(t, e);
                            }));
                          }),
                          new this.constructor(n)
                        );
                      }),
                      (l.prototype.removeAttributeAtRange = function (t, n) {
                        var i;
                        return (
                          (i = this.blockList),
                          this.eachBlockAtRange(n, function (n, r, o) {
                            return e(t)
                              ? (i = i.editObjectAtIndex(o, function () {
                                  return n.removeAttribute(t);
                                }))
                              : r[0] !== r[1]
                                ? (i = i.editObjectAtIndex(o, function () {
                                    return n.copyWithText(
                                      n.text.removeAttributeAtRange(t, r),
                                    );
                                  }))
                                : void 0;
                          }),
                          new this.constructor(i)
                        );
                      }),
                      (l.prototype.updateAttributesForAttachment = function (
                        t,
                        e,
                      ) {
                        var n, i, r;
                        return (
                          (i = this.getRangeOfAttachment(e)[0]),
                          (n = this.locationFromPosition(i).index),
                          (r = this.getTextAtIndex(n)),
                          new this.constructor(
                            this.blockList.editObjectAtIndex(n, function (n) {
                              return n.copyWithText(
                                r.updateAttributesForAttachment(t, e),
                              );
                            }),
                          )
                        );
                      }),
                      (l.prototype.removeAttributeForAttachment = function (
                        t,
                        e,
                      ) {
                        var n;
                        return (
                          (n = this.getRangeOfAttachment(e)),
                          this.removeAttributeAtRange(t, n)
                        );
                      }),
                      (l.prototype.insertBlockBreakAtRange = function (t) {
                        var e, i, r, s;
                        return (
                          (s = (t = n(t))[0]),
                          (r = this.locationFromPosition(s).offset),
                          (i = this.removeTextAtRange(t)),
                          0 === r && (e = [new o.Block()]),
                          new this.constructor(
                            i.blockList.insertSplittableListAtPosition(
                              new o.SplittableList(e),
                              s,
                            ),
                          )
                        );
                      }),
                      (l.prototype.applyBlockAttributeAtRange = function (
                        t,
                        n,
                        i,
                      ) {
                        var r, o, s, a;
                        return (
                          (o = (s =
                            this.expandRangeToLineBreaksAndSplitBlocks(i))
                            .document),
                          (i = s.range),
                          (r = e(t)).listAttribute
                            ? ((a = (o = o.removeLastListAttributeAtRange(i, {
                                exceptAttributeName: t,
                              })).convertLineBreaksToBlockBreaksInRange(i)),
                              (o = a.document),
                              (i = a.range))
                            : (o = r.exclusive
                                ? o.removeBlockAttributesAtRange(i)
                                : r.terminal
                                  ? o.removeLastTerminalAttributeAtRange(i)
                                  : o.consolidateBlocksAtRange(i)),
                          o.addAttributeAtRange(t, n, i)
                        );
                      }),
                      (l.prototype.removeLastListAttributeAtRange = function (
                        t,
                        n,
                      ) {
                        var i;
                        return (
                          null == n && (n = {}),
                          (i = this.blockList),
                          this.eachBlockAtRange(t, function (t, r, o) {
                            var s;
                            if (
                              (s = t.getLastAttribute()) &&
                              e(s).listAttribute &&
                              s !== n.exceptAttributeName
                            )
                              return (i = i.editObjectAtIndex(o, function () {
                                return t.removeAttribute(s);
                              }));
                          }),
                          new this.constructor(i)
                        );
                      }),
                      (l.prototype.removeLastTerminalAttributeAtRange =
                        function (t) {
                          var n;
                          return (
                            (n = this.blockList),
                            this.eachBlockAtRange(t, function (t, i, r) {
                              var o;
                              if ((o = t.getLastAttribute()) && e(o).terminal)
                                return (n = n.editObjectAtIndex(r, function () {
                                  return t.removeAttribute(o);
                                }));
                            }),
                            new this.constructor(n)
                          );
                        }),
                      (l.prototype.removeBlockAttributesAtRange = function (t) {
                        var e;
                        return (
                          (e = this.blockList),
                          this.eachBlockAtRange(t, function (t, n, i) {
                            if (t.hasAttributes())
                              return (e = e.editObjectAtIndex(i, function () {
                                return t.copyWithoutAttributes();
                              }));
                          }),
                          new this.constructor(e)
                        );
                      }),
                      (l.prototype.expandRangeToLineBreaksAndSplitBlocks =
                        function (t) {
                          var e, i, r, o, s, a, u, c, l;
                          return (
                            (l = (a = t = n(t))[0]),
                            (o = a[1]),
                            (c = this.locationFromPosition(l)),
                            (r = this.locationFromPosition(o)),
                            (u = (e = this).getBlockAtIndex(c.index)),
                            null !=
                              (c.offset =
                                u.findLineBreakInDirectionFromPosition(
                                  "backward",
                                  c.offset,
                                )) &&
                              ((s = e.positionFromLocation(c)),
                              (e = e.insertBlockBreakAtRange([s, s + 1])),
                              (r.index += 1),
                              (r.offset -= e
                                .getBlockAtIndex(c.index)
                                .getLength()),
                              (c.index += 1)),
                            (c.offset = 0),
                            0 === r.offset && r.index > c.index
                              ? ((r.index -= 1),
                                (r.offset = e
                                  .getBlockAtIndex(r.index)
                                  .getBlockBreakPosition()))
                              : ("\n" ===
                                (i = e.getBlockAtIndex(
                                  r.index,
                                )).text.getStringAtRange([
                                  r.offset - 1,
                                  r.offset,
                                ])
                                  ? (r.offset -= 1)
                                  : (r.offset =
                                      i.findLineBreakInDirectionFromPosition(
                                        "forward",
                                        r.offset,
                                      )),
                                r.offset !== i.getBlockBreakPosition() &&
                                  ((s = e.positionFromLocation(r)),
                                  (e = e.insertBlockBreakAtRange([s, s + 1])))),
                            (l = e.positionFromLocation(c)),
                            (o = e.positionFromLocation(r)),
                            { document: e, range: (t = n([l, o])) }
                          );
                        }),
                      (l.prototype.convertLineBreaksToBlockBreaksInRange =
                        function (t) {
                          var e, i, r;
                          return (
                            (i = (t = n(t))[0]),
                            (r = this.getStringAtRange(t).slice(0, -1)),
                            (e = this),
                            r.replace(/.*?\n/g, function (t) {
                              return (
                                (i += t.length),
                                (e = e.insertBlockBreakAtRange([i - 1, i]))
                              );
                            }),
                            { document: e, range: t }
                          );
                        }),
                      (l.prototype.consolidateBlocksAtRange = function (t) {
                        var e, i, r, o, s;
                        return (
                          (s = (r = t = n(t))[0]),
                          (i = r[1]),
                          (o = this.locationFromPosition(s).index),
                          (e = this.locationFromPosition(i).index),
                          new this.constructor(
                            this.blockList.consolidateFromIndexToIndex(o, e),
                          )
                        );
                      }),
                      (l.prototype.getDocumentAtRange = function (t) {
                        var e;
                        return (
                          (t = n(t)),
                          (e = this.blockList
                            .getSplittableListInRange(t)
                            .toArray()),
                          new this.constructor(e)
                        );
                      }),
                      (l.prototype.getStringAtRange = function (t) {
                        var e, i;
                        return (
                          (i = t = n(t))[i.length - 1] !== this.getLength() &&
                            (e = -1),
                          this.getDocumentAtRange(t).toString().slice(0, e)
                        );
                      }),
                      (l.prototype.getBlockAtIndex = function (t) {
                        return this.blockList.getObjectAtIndex(t);
                      }),
                      (l.prototype.getBlockAtPosition = function (t) {
                        var e;
                        return (
                          (e = this.locationFromPosition(t).index),
                          this.getBlockAtIndex(e)
                        );
                      }),
                      (l.prototype.getTextAtIndex = function (t) {
                        var e;
                        return null != (e = this.getBlockAtIndex(t))
                          ? e.text
                          : void 0;
                      }),
                      (l.prototype.getTextAtPosition = function (t) {
                        var e;
                        return (
                          (e = this.locationFromPosition(t).index),
                          this.getTextAtIndex(e)
                        );
                      }),
                      (l.prototype.getPieceAtPosition = function (t) {
                        var e, n, i;
                        return (
                          (e = (i = this.locationFromPosition(t)).index),
                          (n = i.offset),
                          this.getTextAtIndex(e).getPieceAtPosition(n)
                        );
                      }),
                      (l.prototype.getCharacterAtPosition = function (t) {
                        var e, n, i;
                        return (
                          (e = (i = this.locationFromPosition(t)).index),
                          (n = i.offset),
                          this.getTextAtIndex(e).getStringAtRange([n, n + 1])
                        );
                      }),
                      (l.prototype.getLength = function () {
                        return this.blockList.getEndPosition();
                      }),
                      (l.prototype.getBlocks = function () {
                        return this.blockList.toArray();
                      }),
                      (l.prototype.getBlockCount = function () {
                        return this.blockList.length;
                      }),
                      (l.prototype.getEditCount = function () {
                        return this.editCount;
                      }),
                      (l.prototype.eachBlock = function (t) {
                        return this.blockList.eachObject(t);
                      }),
                      (l.prototype.eachBlockAtRange = function (t, e) {
                        var i, r, o, s, a, u, c, l, h, p, d, f;
                        if (
                          ((d = (u = t = n(t))[0]),
                          (o = u[1]),
                          (p = this.locationFromPosition(d)),
                          (r = this.locationFromPosition(o)),
                          p.index === r.index)
                        )
                          return (
                            (i = this.getBlockAtIndex(p.index)),
                            (f = [p.offset, r.offset]),
                            e(i, f, p.index)
                          );
                        for (
                          h = [], a = s = c = p.index, l = r.index;
                          c <= l ? s <= l : s >= l;
                          a = c <= l ? ++s : --s
                        )
                          (i = this.getBlockAtIndex(a))
                            ? ((f = (function () {
                                switch (a) {
                                  case p.index:
                                    return [p.offset, i.text.getLength()];
                                  case r.index:
                                    return [0, r.offset];
                                  default:
                                    return [0, i.text.getLength()];
                                }
                              })()),
                              h.push(e(i, f, a)))
                            : h.push(void 0);
                        return h;
                      }),
                      (l.prototype.getCommonAttributesAtRange = function (t) {
                        var e, r, s;
                        return (
                          (r = (t = n(t))[0]),
                          i(t)
                            ? this.getCommonAttributesAtPosition(r)
                            : ((s = []),
                              (e = []),
                              this.eachBlockAtRange(t, function (t, n) {
                                if (n[0] !== n[1])
                                  return (
                                    s.push(
                                      t.text.getCommonAttributesAtRange(n),
                                    ),
                                    e.push(c(t))
                                  );
                              }),
                              o.Hash.fromCommonAttributesOfObjects(s)
                                .merge(o.Hash.fromCommonAttributesOfObjects(e))
                                .toObject())
                        );
                      }),
                      (l.prototype.getCommonAttributesAtPosition = function (
                        t,
                      ) {
                        var e, n, i, r, s, u, l, h, p, d;
                        if (
                          ((s = (p = this.locationFromPosition(t)).index),
                          (h = p.offset),
                          !(i = this.getBlockAtIndex(s)))
                        )
                          return {};
                        for (l in ((r = c(i)),
                        (e = i.text.getAttributesAtPosition(h)),
                        (n = i.text.getAttributesAtPosition(h - 1)),
                        (u = (function () {
                          var t, e;
                          for (l in ((e = []), (t = o.config.textAttributes)))
                            (d = t[l]).inheritable && e.push(l);
                          return e;
                        })()),
                        n))
                          ((d = n[l]) === e[l] || a.call(u, l) >= 0) &&
                            (r[l] = d);
                        return r;
                      }),
                      (l.prototype.getRangeOfCommonAttributeAtPosition =
                        function (t, e) {
                          var i, r, o, s, a, u, c, l;
                          return (
                            (o = (a = this.locationFromPosition(e)).index),
                            (s = a.offset),
                            (l = (u = this.getTextAtIndex(
                              o,
                            ).getExpandedRangeForAttributeAtOffset(t, s))[0]),
                            (r = u[1]),
                            (c = this.positionFromLocation({
                              index: o,
                              offset: l,
                            })),
                            (i = this.positionFromLocation({
                              index: o,
                              offset: r,
                            })),
                            n([c, i])
                          );
                        }),
                      (l.prototype.getBaseBlockAttributes = function () {
                        var t, e, n, i, r, o, s;
                        for (
                          t = this.getBlockAtIndex(0).getAttributes(),
                            n = i = 1,
                            s = this.getBlockCount();
                          1 <= s ? i < s : i > s;
                          n = 1 <= s ? ++i : --i
                        )
                          (e = this.getBlockAtIndex(n).getAttributes()),
                            (o = Math.min(t.length, e.length)),
                            (t = (function () {
                              var n, i, s;
                              for (
                                s = [], r = n = 0, i = o;
                                (0 <= i ? n < i : n > i) && e[r] === t[r];
                                r = 0 <= i ? ++n : --n
                              )
                                s.push(e[r]);
                              return s;
                            })());
                        return t;
                      }),
                      (c = function (t) {
                        var e, n;
                        return (
                          (n = {}), (e = t.getLastAttribute()) && (n[e] = !0), n
                        );
                      }),
                      (l.prototype.getAttachmentById = function (t) {
                        var e, n, i, r;
                        for (
                          n = 0, i = (r = this.getAttachments()).length;
                          n < i;
                          n++
                        )
                          if ((e = r[n]).id === t) return e;
                      }),
                      (l.prototype.getAttachmentPieces = function () {
                        var t;
                        return (
                          (t = []),
                          this.blockList.eachObject(function (e) {
                            var n;
                            return (
                              (n = e.text),
                              (t = t.concat(n.getAttachmentPieces()))
                            );
                          }),
                          t
                        );
                      }),
                      (l.prototype.getAttachments = function () {
                        var t, e, n, i, r;
                        for (
                          r = [],
                            t = 0,
                            e = (i = this.getAttachmentPieces()).length;
                          t < e;
                          t++
                        )
                          (n = i[t]), r.push(n.attachment);
                        return r;
                      }),
                      (l.prototype.getRangeOfAttachment = function (t) {
                        var e, i, r, o, s, a, u;
                        for (
                          o = 0,
                            i = e = 0,
                            r = (s = this.blockList.toArray()).length;
                          e < r;
                          i = ++e
                        ) {
                          if ((u = (a = s[i].text).getRangeOfAttachment(t)))
                            return n([o + u[0], o + u[1]]);
                          o += a.getLength();
                        }
                      }),
                      (l.prototype.getLocationRangeOfAttachment = function (t) {
                        var e;
                        return (
                          (e = this.getRangeOfAttachment(t)),
                          this.locationRangeFromRange(e)
                        );
                      }),
                      (l.prototype.getAttachmentPieceForAttachment = function (
                        t,
                      ) {
                        var e, n, i, r;
                        for (
                          e = 0, n = (r = this.getAttachmentPieces()).length;
                          e < n;
                          e++
                        )
                          if ((i = r[e]).attachment === t) return i;
                      }),
                      (l.prototype.findRangesForBlockAttribute = function (t) {
                        var e, n, i, r, o, s, a;
                        for (
                          o = 0,
                            s = [],
                            n = 0,
                            i = (a = this.getBlocks()).length;
                          n < i;
                          n++
                        )
                          (r = (e = a[n]).getLength()),
                            e.hasAttribute(t) && s.push([o, o + r]),
                            (o += r);
                        return s;
                      }),
                      (l.prototype.findRangesForTextAttribute = function (
                        t,
                        e,
                      ) {
                        var n, i, r, o, s, a, u, c, l, h;
                        for (
                          h = (null != e ? e : {}).withValue,
                            a = 0,
                            u = [],
                            c = [],
                            o = function (e) {
                              return null != h
                                ? e.getAttribute(t) === h
                                : e.hasAttribute(t);
                            },
                            n = 0,
                            i = (l = this.getPieces()).length;
                          n < i;
                          n++
                        )
                          (r = (s = l[n]).getLength()),
                            o(s) &&
                              (u[1] === a
                                ? (u[1] = a + r)
                                : c.push((u = [a, a + r]))),
                            (a += r);
                        return c;
                      }),
                      (l.prototype.locationFromPosition = function (t) {
                        var e, n;
                        return null !=
                          (n = this.blockList.findIndexAndOffsetAtPosition(
                            Math.max(0, t),
                          )).index
                          ? n
                          : {
                              index: (e = this.getBlocks()).length - 1,
                              offset: e[e.length - 1].getLength(),
                            };
                      }),
                      (l.prototype.positionFromLocation = function (t) {
                        return this.blockList.findPositionAtIndexAndOffset(
                          t.index,
                          t.offset,
                        );
                      }),
                      (l.prototype.locationRangeFromPosition = function (t) {
                        return n(this.locationFromPosition(t));
                      }),
                      (l.prototype.locationRangeFromRange = function (t) {
                        var e, i, r, o;
                        if ((t = n(t)))
                          return (
                            (o = t[0]),
                            (i = t[1]),
                            (r = this.locationFromPosition(o)),
                            (e = this.locationFromPosition(i)),
                            n([r, e])
                          );
                      }),
                      (l.prototype.rangeFromLocationRange = function (t) {
                        var e, r;
                        return (
                          (t = n(t)),
                          (e = this.positionFromLocation(t[0])),
                          i(t) || (r = this.positionFromLocation(t[1])),
                          n([e, r])
                        );
                      }),
                      (l.prototype.isEqualTo = function (t) {
                        return this.blockList.isEqualTo(
                          null != t ? t.blockList : void 0,
                        );
                      }),
                      (l.prototype.getTexts = function () {
                        var t, e, n, i, r;
                        for (
                          r = [], e = 0, n = (i = this.getBlocks()).length;
                          e < n;
                          e++
                        )
                          (t = i[e]), r.push(t.text);
                        return r;
                      }),
                      (l.prototype.getPieces = function () {
                        var t, e, n, i, r;
                        for (
                          n = [], t = 0, e = (i = this.getTexts()).length;
                          t < e;
                          t++
                        )
                          (r = i[t]), n.push.apply(n, r.getPieces());
                        return n;
                      }),
                      (l.prototype.getObjects = function () {
                        return this.getBlocks()
                          .concat(this.getTexts())
                          .concat(this.getPieces());
                      }),
                      (l.prototype.toSerializableDocument = function () {
                        var t;
                        return (
                          (t = []),
                          this.blockList.eachObject(function (e) {
                            return t.push(
                              e.copyWithText(e.text.toSerializableText()),
                            );
                          }),
                          new this.constructor(t)
                        );
                      }),
                      (l.prototype.toString = function () {
                        return this.blockList.toString();
                      }),
                      (l.prototype.toJSON = function () {
                        return this.blockList.toJSON();
                      }),
                      (l.prototype.toConsole = function () {
                        var t;
                        return JSON.stringify(
                          function () {
                            var e, n, i, r;
                            for (
                              r = [],
                                e = 0,
                                n = (i = this.blockList.toArray()).length;
                              e < n;
                              e++
                            )
                              (t = i[e]),
                                r.push(JSON.parse(t.text.toConsole()));
                            return r;
                          }.call(this),
                        );
                      }),
                      l
                    );
                  })(o.Object));
              }.call(this),
              function () {
                o.LineBreakInsertion = (function () {
                  function t(t) {
                    var e;
                    (this.composition = t),
                      (this.document = this.composition.document),
                      (e = this.composition.getSelectedRange()),
                      (this.startPosition = e[0]),
                      (this.endPosition = e[1]),
                      (this.startLocation = this.document.locationFromPosition(
                        this.startPosition,
                      )),
                      (this.endLocation = this.document.locationFromPosition(
                        this.endPosition,
                      )),
                      (this.block = this.document.getBlockAtIndex(
                        this.endLocation.index,
                      )),
                      (this.breaksOnReturn = this.block.breaksOnReturn()),
                      (this.previousCharacter =
                        this.block.text.getStringAtPosition(
                          this.endLocation.offset - 1,
                        )),
                      (this.nextCharacter = this.block.text.getStringAtPosition(
                        this.endLocation.offset,
                      ));
                  }
                  return (
                    (t.prototype.shouldInsertBlockBreak = function () {
                      return this.block.hasAttributes() &&
                        this.block.isListItem() &&
                        !this.block.isEmpty()
                        ? 0 !== this.startLocation.offset
                        : this.breaksOnReturn && "\n" !== this.nextCharacter;
                    }),
                    (t.prototype.shouldBreakFormattedBlock = function () {
                      return (
                        this.block.hasAttributes() &&
                        !this.block.isListItem() &&
                        ((this.breaksOnReturn && "\n" === this.nextCharacter) ||
                          "\n" === this.previousCharacter)
                      );
                    }),
                    (t.prototype.shouldDecreaseListLevel = function () {
                      return (
                        this.block.hasAttributes() &&
                        this.block.isListItem() &&
                        this.block.isEmpty()
                      );
                    }),
                    (t.prototype.shouldPrependListItem = function () {
                      return (
                        this.block.isListItem() &&
                        0 === this.startLocation.offset &&
                        !this.block.isEmpty()
                      );
                    }),
                    (t.prototype.shouldRemoveLastBlockAttribute = function () {
                      return (
                        this.block.hasAttributes() &&
                        !this.block.isListItem() &&
                        this.block.isEmpty()
                      );
                    }),
                    t
                  );
                })();
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i,
                  r,
                  s,
                  a,
                  u,
                  c,
                  l,
                  h = {}.hasOwnProperty;
                (s = o.normalizeRange),
                  (c = o.rangesAreEqual),
                  (u = o.rangeIsCollapsed),
                  (a = o.objectsAreEqual),
                  (t = o.arrayStartsWith),
                  (l = o.summarizeArrayChange),
                  (n = o.getAllAttributeNames),
                  (i = o.getBlockConfig),
                  (r = o.getTextConfig),
                  (e = o.extend),
                  (o.Composition = (function (p) {
                    function d() {
                      (this.document = new o.Document()),
                        (this.attachments = []),
                        (this.currentAttributes = {}),
                        (this.revision = 0);
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) h.call(e, n) && (t[n] = e[n]);
                        function i() {
                          this.constructor = t;
                        }
                        (i.prototype = e.prototype),
                          (t.prototype = new i()),
                          (t.__super__ = e.prototype);
                      })(d, p),
                      (d.prototype.setDocument = function (t) {
                        var e;
                        if (!t.isEqualTo(this.document))
                          return (
                            (this.document = t),
                            this.refreshAttachments(),
                            this.revision++,
                            null != (e = this.delegate) &&
                            "function" == typeof e.compositionDidChangeDocument
                              ? e.compositionDidChangeDocument(t)
                              : void 0
                          );
                      }),
                      (d.prototype.getSnapshot = function () {
                        return {
                          document: this.document,
                          selectedRange: this.getSelectedRange(),
                        };
                      }),
                      (d.prototype.loadSnapshot = function (t) {
                        var e, n, i, r;
                        return (
                          (e = t.document),
                          (r = t.selectedRange),
                          null != (n = this.delegate) &&
                            "function" ==
                              typeof n.compositionWillLoadSnapshot &&
                            n.compositionWillLoadSnapshot(),
                          this.setDocument(null != e ? e : new o.Document()),
                          this.setSelection(null != r ? r : [0, 0]),
                          null != (i = this.delegate) &&
                          "function" == typeof i.compositionDidLoadSnapshot
                            ? i.compositionDidLoadSnapshot()
                            : void 0
                        );
                      }),
                      (d.prototype.insertText = function (t, e) {
                        var n, i, r, o;
                        return (
                          (o = (null != e ? e : { updatePosition: !0 })
                            .updatePosition),
                          (i = this.getSelectedRange({ strict: !1 })),
                          this.setDocument(
                            this.document.insertTextAtRange(t, i),
                          ),
                          (n = (r = i[0]) + t.getLength()),
                          o && this.setSelection(n),
                          this.notifyDelegateOfInsertionAtRange([r, n])
                        );
                      }),
                      (d.prototype.insertBlock = function (t) {
                        var e;
                        return (
                          null == t && (t = new o.Block()),
                          (e = new o.Document([t])),
                          this.insertDocument(e)
                        );
                      }),
                      (d.prototype.insertDocument = function (t) {
                        var e, n, i;
                        return (
                          null == t && (t = new o.Document()),
                          (n = this.getSelectedRange()),
                          this.setDocument(
                            this.document.insertDocumentAtRange(t, n),
                          ),
                          (e = (i = n[0]) + t.getLength()),
                          this.setSelection(e),
                          this.notifyDelegateOfInsertionAtRange([i, e])
                        );
                      }),
                      (d.prototype.insertString = function (t, e) {
                        var n, i;
                        return (
                          (n = this.getCurrentTextAttributes()),
                          (i = o.Text.textForStringWithAttributes(t, n)),
                          this.insertText(i, e)
                        );
                      }),
                      (d.prototype.insertBlockBreak = function () {
                        var t, e, n;
                        return (
                          (e = this.getSelectedRange()),
                          this.setDocument(
                            this.document.insertBlockBreakAtRange(e),
                          ),
                          (t = (n = e[0]) + 1),
                          this.setSelection(t),
                          this.notifyDelegateOfInsertionAtRange([n, t])
                        );
                      }),
                      (d.prototype.insertLineBreak = function () {
                        var t, e;
                        return (e = new o.LineBreakInsertion(
                          this,
                        )).shouldDecreaseListLevel()
                          ? (this.decreaseListLevel(),
                            this.setSelection(e.startPosition))
                          : e.shouldPrependListItem()
                            ? ((t = new o.Document([
                                e.block.copyWithoutText(),
                              ])),
                              this.insertDocument(t))
                            : e.shouldInsertBlockBreak()
                              ? this.insertBlockBreak()
                              : e.shouldRemoveLastBlockAttribute()
                                ? this.removeLastBlockAttribute()
                                : e.shouldBreakFormattedBlock()
                                  ? this.breakFormattedBlock(e)
                                  : this.insertString("\n");
                      }),
                      (d.prototype.insertHTML = function (t) {
                        var e, n, i, r;
                        return (
                          (e = o.Document.fromHTML(t)),
                          (i = this.getSelectedRange()),
                          this.setDocument(
                            this.document.mergeDocumentAtRange(e, i),
                          ),
                          (n = (r = i[0]) + e.getLength() - 1),
                          this.setSelection(n),
                          this.notifyDelegateOfInsertionAtRange([r, n])
                        );
                      }),
                      (d.prototype.replaceHTML = function (t) {
                        var e, n, i;
                        return (
                          (e = o.Document.fromHTML(
                            t,
                          ).copyUsingObjectsFromDocument(this.document)),
                          (n = this.getLocationRange({ strict: !1 })),
                          (i = this.document.rangeFromLocationRange(n)),
                          this.setDocument(e),
                          this.setSelection(i)
                        );
                      }),
                      (d.prototype.insertFile = function (t) {
                        return this.insertFiles([t]);
                      }),
                      (d.prototype.insertFiles = function (t) {
                        var e, n, i, r, s, a;
                        for (n = [], r = 0, s = t.length; r < s; r++)
                          (i = t[r]),
                            (null != (a = this.delegate)
                              ? a.compositionShouldAcceptFile(i)
                              : void 0) &&
                              ((e = o.Attachment.attachmentForFile(i)),
                              n.push(e));
                        return this.insertAttachments(n);
                      }),
                      (d.prototype.insertAttachment = function (t) {
                        return this.insertAttachments([t]);
                      }),
                      (d.prototype.insertAttachments = function (t) {
                        var e, n, i, r, s, a, u, c, l;
                        for (c = new o.Text(), r = 0, s = t.length; r < s; r++)
                          (l = (e = t[r]).getType()),
                            (a =
                              null != (u = o.config.attachments[l])
                                ? u.presentation
                                : void 0),
                            (i = this.getCurrentTextAttributes()),
                            a && (i.presentation = a),
                            (n = o.Text.textForAttachmentWithAttributes(e, i)),
                            (c = c.appendText(n));
                        return this.insertText(c);
                      }),
                      (d.prototype.shouldManageDeletingInDirection = function (
                        t,
                      ) {
                        var e;
                        if (((e = this.getLocationRange()), u(e))) {
                          if ("backward" === t && 0 === e[0].offset) return !0;
                          if (this.shouldManageMovingCursorInDirection(t))
                            return !0;
                        } else if (e[0].index !== e[1].index) return !0;
                        return !1;
                      }),
                      (d.prototype.deleteInDirection = function (t, e) {
                        var n, i, r, o, s, a, c, l;
                        return (
                          (o = (null != e ? e : {}).length),
                          (s = this.getLocationRange()),
                          (a = this.getSelectedRange()),
                          (c = u(a))
                            ? (r = "backward" === t && 0 === s[0].offset)
                            : (l = s[0].index !== s[1].index),
                          !(
                            r &&
                            this.canDecreaseBlockAttributeLevel() &&
                            ((i = this.getBlock()).isListItem()
                              ? this.decreaseListLevel()
                              : this.decreaseBlockAttributeLevel(),
                            this.setSelection(a[0]),
                            i.isEmpty())
                          ) &&
                            (c &&
                              ((a = this.getExpandedRangeInDirection(t, {
                                length: o,
                              })),
                              "backward" === t &&
                                (n = this.getAttachmentAtRange(a))),
                            n
                              ? (this.editAttachment(n), !1)
                              : (this.setDocument(
                                  this.document.removeTextAtRange(a),
                                ),
                                this.setSelection(a[0]),
                                !r && !l && void 0))
                        );
                      }),
                      (d.prototype.moveTextFromRange = function (t) {
                        var e;
                        return (
                          (e = this.getSelectedRange()[0]),
                          this.setDocument(
                            this.document.moveTextFromRangeToPosition(t, e),
                          ),
                          this.setSelection(e)
                        );
                      }),
                      (d.prototype.removeAttachment = function (t) {
                        var e;
                        if ((e = this.document.getRangeOfAttachment(t)))
                          return (
                            this.stopEditingAttachment(),
                            this.setDocument(
                              this.document.removeTextAtRange(e),
                            ),
                            this.setSelection(e[0])
                          );
                      }),
                      (d.prototype.removeLastBlockAttribute = function () {
                        var t, e, n, i;
                        return (
                          (i = (n = this.getSelectedRange())[0]),
                          (e = n[1]),
                          (t = this.document.getBlockAtPosition(e)),
                          this.removeCurrentAttribute(t.getLastAttribute()),
                          this.setSelection(i)
                        );
                      }),
                      " ",
                      (d.prototype.insertPlaceholder = function () {
                        return (
                          (this.placeholderPosition = this.getPosition()),
                          this.insertString(" ")
                        );
                      }),
                      (d.prototype.selectPlaceholder = function () {
                        if (null != this.placeholderPosition)
                          return (
                            this.setSelectedRange([
                              this.placeholderPosition,
                              this.placeholderPosition + 1,
                            ]),
                            this.getSelectedRange()
                          );
                      }),
                      (d.prototype.forgetPlaceholder = function () {
                        return (this.placeholderPosition = null);
                      }),
                      (d.prototype.hasCurrentAttribute = function (t) {
                        var e;
                        return (
                          null != (e = this.currentAttributes[t]) && !1 !== e
                        );
                      }),
                      (d.prototype.toggleCurrentAttribute = function (t) {
                        var e;
                        return (e = !this.currentAttributes[t])
                          ? this.setCurrentAttribute(t, e)
                          : this.removeCurrentAttribute(t);
                      }),
                      (d.prototype.canSetCurrentAttribute = function (t) {
                        return i(t)
                          ? this.canSetCurrentBlockAttribute(t)
                          : this.canSetCurrentTextAttribute(t);
                      }),
                      (d.prototype.canSetCurrentTextAttribute = function (t) {
                        var e, n, i, r;
                        if ((e = this.getSelectedDocument())) {
                          for (
                            n = 0, i = (r = e.getAttachments()).length;
                            n < i;
                            n++
                          )
                            if (!r[n].hasContent()) return !1;
                          return !0;
                        }
                      }),
                      (d.prototype.canSetCurrentBlockAttribute = function (t) {
                        var e;
                        if ((e = this.getBlock())) return !e.isTerminalBlock();
                      }),
                      (d.prototype.setCurrentAttribute = function (t, e) {
                        return i(t)
                          ? this.setBlockAttribute(t, e)
                          : (this.setTextAttribute(t, e),
                            (this.currentAttributes[t] = e),
                            this.notifyDelegateOfCurrentAttributesChange());
                      }),
                      (d.prototype.setTextAttribute = function (t, e) {
                        var n, i;
                        if ((n = this.getSelectedRange()))
                          return n[0] !== n[1]
                            ? this.setDocument(
                                this.document.addAttributeAtRange(t, e, n),
                              )
                            : "href" === t
                              ? ((i = o.Text.textForStringWithAttributes(e, {
                                  href: e,
                                })),
                                this.insertText(i))
                              : void 0;
                      }),
                      (d.prototype.setBlockAttribute = function (t, e) {
                        var n;
                        if ((n = this.getSelectedRange()))
                          return this.canSetCurrentAttribute(t)
                            ? (this.getBlock(),
                              this.setDocument(
                                this.document.applyBlockAttributeAtRange(
                                  t,
                                  e,
                                  n,
                                ),
                              ),
                              this.setSelection(n))
                            : void 0;
                      }),
                      (d.prototype.removeCurrentAttribute = function (t) {
                        return i(t)
                          ? (this.removeBlockAttribute(t),
                            this.updateCurrentAttributes())
                          : (this.removeTextAttribute(t),
                            delete this.currentAttributes[t],
                            this.notifyDelegateOfCurrentAttributesChange());
                      }),
                      (d.prototype.removeTextAttribute = function (t) {
                        var e;
                        if ((e = this.getSelectedRange()))
                          return this.setDocument(
                            this.document.removeAttributeAtRange(t, e),
                          );
                      }),
                      (d.prototype.removeBlockAttribute = function (t) {
                        var e;
                        if ((e = this.getSelectedRange()))
                          return this.setDocument(
                            this.document.removeAttributeAtRange(t, e),
                          );
                      }),
                      (d.prototype.canDecreaseNestingLevel = function () {
                        var t;
                        return (
                          (null != (t = this.getBlock())
                            ? t.getNestingLevel()
                            : void 0) > 0
                        );
                      }),
                      (d.prototype.canIncreaseNestingLevel = function () {
                        var e, n, r;
                        if ((e = this.getBlock()))
                          return (
                            null != (r = i(e.getLastNestableAttribute()))
                              ? r.listAttribute
                              : void 0
                          )
                            ? (n = this.getPreviousBlock())
                              ? t(
                                  n.getListItemAttributes(),
                                  e.getListItemAttributes(),
                                )
                              : void 0
                            : e.getNestingLevel() > 0;
                      }),
                      (d.prototype.decreaseNestingLevel = function () {
                        var t;
                        if ((t = this.getBlock()))
                          return this.setDocument(
                            this.document.replaceBlock(
                              t,
                              t.decreaseNestingLevel(),
                            ),
                          );
                      }),
                      (d.prototype.increaseNestingLevel = function () {
                        var t;
                        if ((t = this.getBlock()))
                          return this.setDocument(
                            this.document.replaceBlock(
                              t,
                              t.increaseNestingLevel(),
                            ),
                          );
                      }),
                      (d.prototype.canDecreaseBlockAttributeLevel =
                        function () {
                          var t;
                          return (
                            (null != (t = this.getBlock())
                              ? t.getAttributeLevel()
                              : void 0) > 0
                          );
                        }),
                      (d.prototype.decreaseBlockAttributeLevel = function () {
                        var t, e;
                        if (
                          (t =
                            null != (e = this.getBlock())
                              ? e.getLastAttribute()
                              : void 0)
                        )
                          return this.removeCurrentAttribute(t);
                      }),
                      (d.prototype.decreaseListLevel = function () {
                        var t, e, n, i, r, o;
                        for (
                          o = this.getSelectedRange()[0],
                            n = r = this.document.locationFromPosition(o).index,
                            t = this.getBlock().getAttributeLevel();
                          (e = this.document.getBlockAtIndex(n + 1)) &&
                          e.isListItem() &&
                          e.getAttributeLevel() > t;

                        )
                          n++;
                        return (
                          (o = this.document.positionFromLocation({
                            index: r,
                            offset: 0,
                          })),
                          (i = this.document.positionFromLocation({
                            index: n,
                            offset: 0,
                          })),
                          this.setDocument(
                            this.document.removeLastListAttributeAtRange([
                              o,
                              i,
                            ]),
                          )
                        );
                      }),
                      (d.prototype.updateCurrentAttributes = function () {
                        var t, e, i, r, o, s;
                        if ((s = this.getSelectedRange({ ignoreLock: !0 }))) {
                          for (
                            e = this.document.getCommonAttributesAtRange(s),
                              i = 0,
                              r = (o = n()).length;
                            i < r;
                            i++
                          )
                            e[(t = o[i])] ||
                              this.canSetCurrentAttribute(t) ||
                              (e[t] = !1);
                          if (!a(e, this.currentAttributes))
                            return (
                              (this.currentAttributes = e),
                              this.notifyDelegateOfCurrentAttributesChange()
                            );
                        }
                      }),
                      (d.prototype.getCurrentAttributes = function () {
                        return e.call({}, this.currentAttributes);
                      }),
                      (d.prototype.getCurrentTextAttributes = function () {
                        var t, e, n, i;
                        for (e in ((t = {}), (n = this.currentAttributes)))
                          !1 !== (i = n[e]) && r(e) && (t[e] = i);
                        return t;
                      }),
                      (d.prototype.freezeSelection = function () {
                        return this.setCurrentAttribute("frozen", !0);
                      }),
                      (d.prototype.thawSelection = function () {
                        return this.removeCurrentAttribute("frozen");
                      }),
                      (d.prototype.hasFrozenSelection = function () {
                        return this.hasCurrentAttribute("frozen");
                      }),
                      d.proxyMethod("getSelectionManager().getPointRange"),
                      d.proxyMethod(
                        "getSelectionManager().setLocationRangeFromPointRange",
                      ),
                      d.proxyMethod(
                        "getSelectionManager().createLocationRangeFromDOMRange",
                      ),
                      d.proxyMethod(
                        "getSelectionManager().locationIsCursorTarget",
                      ),
                      d.proxyMethod(
                        "getSelectionManager().selectionIsExpanded",
                      ),
                      d.proxyMethod("delegate?.getSelectionManager"),
                      (d.prototype.setSelection = function (t) {
                        var e, n;
                        return (
                          (e = this.document.locationRangeFromRange(t)),
                          null != (n = this.delegate)
                            ? n.compositionDidRequestChangingSelectionToLocationRange(
                                e,
                              )
                            : void 0
                        );
                      }),
                      (d.prototype.getSelectedRange = function (t) {
                        var e;
                        if ((e = this.getLocationRange(t)))
                          return this.document.rangeFromLocationRange(e);
                      }),
                      (d.prototype.setSelectedRange = function (t) {
                        var e;
                        return (
                          (e = this.document.locationRangeFromRange(t)),
                          this.getSelectionManager().setLocationRange(e)
                        );
                      }),
                      (d.prototype.getPosition = function () {
                        var t;
                        if ((t = this.getLocationRange()))
                          return this.document.positionFromLocation(t[0]);
                      }),
                      (d.prototype.getLocationRange = function (t) {
                        var e, n;
                        return null !=
                          (e =
                            null != (n = this.targetLocationRange)
                              ? n
                              : this.getSelectionManager().getLocationRange(t))
                          ? e
                          : s({ index: 0, offset: 0 });
                      }),
                      (d.prototype.withTargetLocationRange = function (t, e) {
                        var n;
                        this.targetLocationRange = t;
                        try {
                          n = e();
                        } finally {
                          this.targetLocationRange = null;
                        }
                        return n;
                      }),
                      (d.prototype.withTargetRange = function (t, e) {
                        var n;
                        return (
                          (n = this.document.locationRangeFromRange(t)),
                          this.withTargetLocationRange(n, e)
                        );
                      }),
                      (d.prototype.withTargetDOMRange = function (t, e) {
                        var n;
                        return (
                          (n = this.createLocationRangeFromDOMRange(t, {
                            strict: !1,
                          })),
                          this.withTargetLocationRange(n, e)
                        );
                      }),
                      (d.prototype.getExpandedRangeInDirection = function (
                        t,
                        e,
                      ) {
                        var n, i, r, o;
                        return (
                          (i = (null != e ? e : {}).length),
                          (o = (r = this.getSelectedRange())[0]),
                          (n = r[1]),
                          "backward" === t
                            ? i
                              ? (o -= i)
                              : (o = this.translateUTF16PositionFromOffset(
                                  o,
                                  -1,
                                ))
                            : i
                              ? (n += i)
                              : (n = this.translateUTF16PositionFromOffset(
                                  n,
                                  1,
                                )),
                          s([o, n])
                        );
                      }),
                      (d.prototype.shouldManageMovingCursorInDirection =
                        function (t) {
                          var e;
                          return (
                            !!this.editingAttachment ||
                            ((e = this.getExpandedRangeInDirection(t)),
                            null != this.getAttachmentAtRange(e))
                          );
                        }),
                      (d.prototype.moveCursorInDirection = function (t) {
                        var e, n, i, r;
                        if (
                          (this.editingAttachment
                            ? (i = this.document.getRangeOfAttachment(
                                this.editingAttachment,
                              ))
                            : ((r = this.getSelectedRange()),
                              (i = this.getExpandedRangeInDirection(t)),
                              (n = !c(r, i))),
                          "backward" === t
                            ? this.setSelectedRange(i[0])
                            : this.setSelectedRange(i[1]),
                          n && (e = this.getAttachmentAtRange(i)))
                        )
                          return this.editAttachment(e);
                      }),
                      (d.prototype.expandSelectionInDirection = function (
                        t,
                        e,
                      ) {
                        var n, i;
                        return (
                          (n = (null != e ? e : {}).length),
                          (i = this.getExpandedRangeInDirection(t, {
                            length: n,
                          })),
                          this.setSelectedRange(i)
                        );
                      }),
                      (d.prototype.expandSelectionForEditing = function () {
                        if (this.hasCurrentAttribute("href"))
                          return this.expandSelectionAroundCommonAttribute(
                            "href",
                          );
                      }),
                      (d.prototype.expandSelectionAroundCommonAttribute =
                        function (t) {
                          var e, n;
                          return (
                            (e = this.getPosition()),
                            (n =
                              this.document.getRangeOfCommonAttributeAtPosition(
                                t,
                                e,
                              )),
                            this.setSelectedRange(n)
                          );
                        }),
                      (d.prototype.selectionContainsAttachments = function () {
                        var t;
                        return (
                          (null != (t = this.getSelectedAttachments())
                            ? t.length
                            : void 0) > 0
                        );
                      }),
                      (d.prototype.selectionIsInCursorTarget = function () {
                        return (
                          this.editingAttachment ||
                          this.positionIsCursorTarget(this.getPosition())
                        );
                      }),
                      (d.prototype.positionIsCursorTarget = function (t) {
                        var e;
                        if ((e = this.document.locationFromPosition(t)))
                          return this.locationIsCursorTarget(e);
                      }),
                      (d.prototype.positionIsBlockBreak = function (t) {
                        var e;
                        return null != (e = this.document.getPieceAtPosition(t))
                          ? e.isBlockBreak()
                          : void 0;
                      }),
                      (d.prototype.getSelectedDocument = function () {
                        var t;
                        if ((t = this.getSelectedRange()))
                          return this.document.getDocumentAtRange(t);
                      }),
                      (d.prototype.getSelectedAttachments = function () {
                        var t;
                        return null != (t = this.getSelectedDocument())
                          ? t.getAttachments()
                          : void 0;
                      }),
                      (d.prototype.getAttachments = function () {
                        return this.attachments.slice(0);
                      }),
                      (d.prototype.refreshAttachments = function () {
                        var t, e, n, i, r, o, s, a, u, c, h, p;
                        for (
                          n = this.document.getAttachments(),
                            t = (a = l(this.attachments, n)).added,
                            h = a.removed,
                            this.attachments = n,
                            i = 0,
                            o = h.length;
                          i < o;
                          i++
                        )
                          ((e = h[i]).delegate = null),
                            null != (u = this.delegate) &&
                              "function" ==
                                typeof u.compositionDidRemoveAttachment &&
                              u.compositionDidRemoveAttachment(e);
                        for (p = [], r = 0, s = t.length; r < s; r++)
                          ((e = t[r]).delegate = this),
                            p.push(
                              null != (c = this.delegate) &&
                                "function" ==
                                  typeof c.compositionDidAddAttachment
                                ? c.compositionDidAddAttachment(e)
                                : void 0,
                            );
                        return p;
                      }),
                      (d.prototype.attachmentDidChangeAttributes = function (
                        t,
                      ) {
                        var e;
                        return (
                          this.revision++,
                          null != (e = this.delegate) &&
                          "function" == typeof e.compositionDidEditAttachment
                            ? e.compositionDidEditAttachment(t)
                            : void 0
                        );
                      }),
                      (d.prototype.attachmentDidChangePreviewURL = function (
                        t,
                      ) {
                        var e;
                        return (
                          this.revision++,
                          null != (e = this.delegate) &&
                          "function" ==
                            typeof e.compositionDidChangeAttachmentPreviewURL
                            ? e.compositionDidChangeAttachmentPreviewURL(t)
                            : void 0
                        );
                      }),
                      (d.prototype.editAttachment = function (t, e) {
                        var n;
                        if (t !== this.editingAttachment)
                          return (
                            this.stopEditingAttachment(),
                            (this.editingAttachment = t),
                            null != (n = this.delegate) &&
                            "function" ==
                              typeof n.compositionDidStartEditingAttachment
                              ? n.compositionDidStartEditingAttachment(
                                  this.editingAttachment,
                                  e,
                                )
                              : void 0
                          );
                      }),
                      (d.prototype.stopEditingAttachment = function () {
                        var t;
                        if (this.editingAttachment)
                          return (
                            null != (t = this.delegate) &&
                              "function" ==
                                typeof t.compositionDidStopEditingAttachment &&
                              t.compositionDidStopEditingAttachment(
                                this.editingAttachment,
                              ),
                            (this.editingAttachment = null)
                          );
                      }),
                      (d.prototype.updateAttributesForAttachment = function (
                        t,
                        e,
                      ) {
                        return this.setDocument(
                          this.document.updateAttributesForAttachment(t, e),
                        );
                      }),
                      (d.prototype.removeAttributeForAttachment = function (
                        t,
                        e,
                      ) {
                        return this.setDocument(
                          this.document.removeAttributeForAttachment(t, e),
                        );
                      }),
                      (d.prototype.breakFormattedBlock = function (t) {
                        var e, n, i, r, s;
                        return (
                          (n = t.document),
                          (e = t.block),
                          (s = [(r = t.startPosition) - 1, r]),
                          e.getBlockBreakPosition() === t.startLocation.offset
                            ? (e.breaksOnReturn() && "\n" === t.nextCharacter
                                ? (r += 1)
                                : (n = n.removeTextAtRange(s)),
                              (s = [r, r]))
                            : "\n" === t.nextCharacter
                              ? "\n" === t.previousCharacter
                                ? (s = [r - 1, r + 1])
                                : ((s = [r, r + 1]), (r += 1))
                              : t.startLocation.offset - 1 != 0 && (r += 1),
                          (i = new o.Document([
                            e.removeLastAttribute().copyWithoutText(),
                          ])),
                          this.setDocument(n.insertDocumentAtRange(i, s)),
                          this.setSelection(r)
                        );
                      }),
                      (d.prototype.getPreviousBlock = function () {
                        var t, e;
                        if (
                          (e = this.getLocationRange()) &&
                          (t = e[0].index) > 0
                        )
                          return this.document.getBlockAtIndex(t - 1);
                      }),
                      (d.prototype.getBlock = function () {
                        var t;
                        if ((t = this.getLocationRange()))
                          return this.document.getBlockAtIndex(t[0].index);
                      }),
                      (d.prototype.getAttachmentAtRange = function (t) {
                        var e;
                        if (
                          (e =
                            this.document.getDocumentAtRange(t)).toString() ===
                          o.OBJECT_REPLACEMENT_CHARACTER + "\n"
                        )
                          return e.getAttachments()[0];
                      }),
                      (d.prototype.notifyDelegateOfCurrentAttributesChange =
                        function () {
                          var t;
                          return null != (t = this.delegate) &&
                            "function" ==
                              typeof t.compositionDidChangeCurrentAttributes
                            ? t.compositionDidChangeCurrentAttributes(
                                this.currentAttributes,
                              )
                            : void 0;
                        }),
                      (d.prototype.notifyDelegateOfInsertionAtRange = function (
                        t,
                      ) {
                        var e;
                        return null != (e = this.delegate) &&
                          "function" ==
                            typeof e.compositionDidPerformInsertionAtRange
                          ? e.compositionDidPerformInsertionAtRange(t)
                          : void 0;
                      }),
                      (d.prototype.translateUTF16PositionFromOffset = function (
                        t,
                        e,
                      ) {
                        var n, i;
                        return (
                          (n = (i =
                            this.document.toUTF16String()).offsetFromUCS2Offset(
                            t,
                          )),
                          i.offsetToUCS2Offset(n + e)
                        );
                      }),
                      d
                    );
                  })(o.BasicObject));
              }.call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.UndoManager = (function (e) {
                  var n;
                  function i(t) {
                    (this.composition = t),
                      (this.undoEntries = []),
                      (this.redoEntries = []);
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(i, e),
                    (i.prototype.recordUndoEntry = function (t, e) {
                      var i, r, o, s, a;
                      if (
                        ((r = (s = null != e ? e : {}).context),
                        (i = s.consolidatable),
                        (o = this.undoEntries.slice(-1)[0]),
                        !i || !n(o, t, r))
                      )
                        return (
                          (a = this.createEntry({
                            description: t,
                            context: r,
                          })),
                          this.undoEntries.push(a),
                          (this.redoEntries = [])
                        );
                    }),
                    (i.prototype.undo = function () {
                      var t, e;
                      if ((e = this.undoEntries.pop()))
                        return (
                          (t = this.createEntry(e)),
                          this.redoEntries.push(t),
                          this.composition.loadSnapshot(e.snapshot)
                        );
                    }),
                    (i.prototype.redo = function () {
                      var t, e;
                      if ((t = this.redoEntries.pop()))
                        return (
                          (e = this.createEntry(t)),
                          this.undoEntries.push(e),
                          this.composition.loadSnapshot(t.snapshot)
                        );
                    }),
                    (i.prototype.canUndo = function () {
                      return this.undoEntries.length > 0;
                    }),
                    (i.prototype.canRedo = function () {
                      return this.redoEntries.length > 0;
                    }),
                    (i.prototype.createEntry = function (t) {
                      var e, n, i;
                      return (
                        (n = (i = null != t ? t : {}).description),
                        (e = i.context),
                        {
                          description: null != n ? n.toString() : void 0,
                          context: JSON.stringify(e),
                          snapshot: this.composition.getSnapshot(),
                        }
                      );
                    }),
                    (n = function (t, e, n) {
                      return (
                        (null != t ? t.description : void 0) ===
                          (null != e ? e.toString() : void 0) &&
                        (null != t ? t.context : void 0) === JSON.stringify(n)
                      );
                    }),
                    i
                  );
                })(o.BasicObject);
              }.call(this),
              function () {
                var t;
                (o.attachmentGalleryFilter = function (e) {
                  var n;
                  return (n = new t(e)).perform(), n.getSnapshot();
                }),
                  (t = (function () {
                    var t;
                    function e(t) {
                      (this.document = t.document),
                        (this.selectedRange = t.selectedRange);
                    }
                    return (
                      (t = "attachmentGallery"),
                      "presentation",
                      "gallery",
                      (e.prototype.perform = function () {
                        return (
                          this.removeBlockAttribute(),
                          this.applyBlockAttribute()
                        );
                      }),
                      (e.prototype.getSnapshot = function () {
                        return {
                          document: this.document,
                          selectedRange: this.selectedRange,
                        };
                      }),
                      (e.prototype.removeBlockAttribute = function () {
                        var e, n, i, r, o;
                        for (
                          o = [],
                            e = 0,
                            n = (r = this.findRangesOfBlocks()).length;
                          e < n;
                          e++
                        )
                          (i = r[e]),
                            o.push(
                              (this.document =
                                this.document.removeAttributeAtRange(t, i)),
                            );
                        return o;
                      }),
                      (e.prototype.applyBlockAttribute = function () {
                        var e, n, i, r, o, s;
                        for (
                          i = 0,
                            s = [],
                            e = 0,
                            n = (o = this.findRangesOfPieces()).length;
                          e < n;
                          e++
                        )
                          (r = o[e])[1] - r[0] > 1 &&
                            ((r[0] += i),
                            (r[1] += i),
                            "\n" !==
                              this.document.getCharacterAtPosition(r[1]) &&
                              ((this.document =
                                this.document.insertBlockBreakAtRange(r[1])),
                              r[1] < this.selectedRange[1] &&
                                this.moveSelectedRangeForward(),
                              r[1]++,
                              i++),
                            0 !== r[0] &&
                              "\n" !==
                                this.document.getCharacterAtPosition(
                                  r[0] - 1,
                                ) &&
                              ((this.document =
                                this.document.insertBlockBreakAtRange(r[0])),
                              r[0] < this.selectedRange[0] &&
                                this.moveSelectedRangeForward(),
                              r[0]++,
                              i++),
                            s.push(
                              (this.document =
                                this.document.applyBlockAttributeAtRange(
                                  t,
                                  !0,
                                  r,
                                )),
                            ));
                        return s;
                      }),
                      (e.prototype.findRangesOfBlocks = function () {
                        return this.document.findRangesForBlockAttribute(t);
                      }),
                      (e.prototype.findRangesOfPieces = function () {
                        return this.document.findRangesForTextAttribute(
                          "presentation",
                          { withValue: "gallery" },
                        );
                      }),
                      (e.prototype.moveSelectedRangeForward = function () {
                        return (
                          (this.selectedRange[0] += 1),
                          (this.selectedRange[1] += 1)
                        );
                      }),
                      e
                    );
                  })());
              }.call(this),
              function () {
                o.Editor = (function () {
                  var t;
                  function e(e, n, i) {
                    var r, s;
                    (this.composition = e),
                      (this.selectionManager = n),
                      (this.element = i),
                      (this.insertFiles =
                        ((r = this.insertFiles),
                        (s = this),
                        function () {
                          return r.apply(s, arguments);
                        })),
                      (this.undoManager = new o.UndoManager(this.composition)),
                      (this.filters = t.slice(0));
                  }
                  return (
                    (t = [o.attachmentGalleryFilter]),
                    (e.prototype.loadDocument = function (t) {
                      return this.loadSnapshot({
                        document: t,
                        selectedRange: [0, 0],
                      });
                    }),
                    (e.prototype.loadHTML = function (t) {
                      return (
                        null == t && (t = ""),
                        this.loadDocument(
                          o.Document.fromHTML(t, {
                            referenceElement: this.element,
                          }),
                        )
                      );
                    }),
                    (e.prototype.loadJSON = function (t) {
                      var e, n;
                      return (
                        (e = t.document),
                        (n = t.selectedRange),
                        (e = o.Document.fromJSON(e)),
                        this.loadSnapshot({ document: e, selectedRange: n })
                      );
                    }),
                    (e.prototype.loadSnapshot = function (t) {
                      return (
                        (this.undoManager = new o.UndoManager(
                          this.composition,
                        )),
                        this.composition.loadSnapshot(t)
                      );
                    }),
                    (e.prototype.getDocument = function () {
                      return this.composition.document;
                    }),
                    (e.prototype.getSelectedDocument = function () {
                      return this.composition.getSelectedDocument();
                    }),
                    (e.prototype.getSnapshot = function () {
                      return this.composition.getSnapshot();
                    }),
                    (e.prototype.toJSON = function () {
                      return this.getSnapshot();
                    }),
                    (e.prototype.deleteInDirection = function (t) {
                      return this.composition.deleteInDirection(t);
                    }),
                    (e.prototype.insertAttachment = function (t) {
                      return this.composition.insertAttachment(t);
                    }),
                    (e.prototype.insertAttachments = function (t) {
                      return this.composition.insertAttachments(t);
                    }),
                    (e.prototype.insertDocument = function (t) {
                      return this.composition.insertDocument(t);
                    }),
                    (e.prototype.insertFile = function (t) {
                      return this.composition.insertFile(t);
                    }),
                    (e.prototype.insertFiles = function (t) {
                      return this.composition.insertFiles(t);
                    }),
                    (e.prototype.insertHTML = function (t) {
                      return this.composition.insertHTML(t);
                    }),
                    (e.prototype.insertString = function (t) {
                      return this.composition.insertString(t);
                    }),
                    (e.prototype.insertText = function (t) {
                      return this.composition.insertText(t);
                    }),
                    (e.prototype.insertLineBreak = function () {
                      return this.composition.insertLineBreak();
                    }),
                    (e.prototype.getSelectedRange = function () {
                      return this.composition.getSelectedRange();
                    }),
                    (e.prototype.getPosition = function () {
                      return this.composition.getPosition();
                    }),
                    (e.prototype.getClientRectAtPosition = function (t) {
                      var e;
                      return (
                        (e = this.getDocument().locationRangeFromRange([
                          t,
                          t + 1,
                        ])),
                        this.selectionManager.getClientRectAtLocationRange(e)
                      );
                    }),
                    (e.prototype.expandSelectionInDirection = function (t) {
                      return this.composition.expandSelectionInDirection(t);
                    }),
                    (e.prototype.moveCursorInDirection = function (t) {
                      return this.composition.moveCursorInDirection(t);
                    }),
                    (e.prototype.setSelectedRange = function (t) {
                      return this.composition.setSelectedRange(t);
                    }),
                    (e.prototype.activateAttribute = function (t, e) {
                      return (
                        null == e && (e = !0),
                        this.composition.setCurrentAttribute(t, e)
                      );
                    }),
                    (e.prototype.attributeIsActive = function (t) {
                      return this.composition.hasCurrentAttribute(t);
                    }),
                    (e.prototype.canActivateAttribute = function (t) {
                      return this.composition.canSetCurrentAttribute(t);
                    }),
                    (e.prototype.deactivateAttribute = function (t) {
                      return this.composition.removeCurrentAttribute(t);
                    }),
                    (e.prototype.canDecreaseNestingLevel = function () {
                      return this.composition.canDecreaseNestingLevel();
                    }),
                    (e.prototype.canIncreaseNestingLevel = function () {
                      return this.composition.canIncreaseNestingLevel();
                    }),
                    (e.prototype.decreaseNestingLevel = function () {
                      if (this.canDecreaseNestingLevel())
                        return this.composition.decreaseNestingLevel();
                    }),
                    (e.prototype.increaseNestingLevel = function () {
                      if (this.canIncreaseNestingLevel())
                        return this.composition.increaseNestingLevel();
                    }),
                    (e.prototype.canRedo = function () {
                      return this.undoManager.canRedo();
                    }),
                    (e.prototype.canUndo = function () {
                      return this.undoManager.canUndo();
                    }),
                    (e.prototype.recordUndoEntry = function (t, e) {
                      var n, i, r;
                      return (
                        (i = (r = null != e ? e : {}).context),
                        (n = r.consolidatable),
                        this.undoManager.recordUndoEntry(t, {
                          context: i,
                          consolidatable: n,
                        })
                      );
                    }),
                    (e.prototype.redo = function () {
                      if (this.canRedo()) return this.undoManager.redo();
                    }),
                    (e.prototype.undo = function () {
                      if (this.canUndo()) return this.undoManager.undo();
                    }),
                    e
                  );
                })();
              }.call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.ManagedAttachment = (function (e) {
                  function n(t, e) {
                    var n;
                    (this.attachmentManager = t),
                      (this.attachment = e),
                      (n = this.attachment),
                      (this.id = n.id),
                      (this.file = n.file);
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(n, e),
                    (n.prototype.remove = function () {
                      return this.attachmentManager.requestRemovalOfAttachment(
                        this.attachment,
                      );
                    }),
                    n.proxyMethod("attachment.getAttribute"),
                    n.proxyMethod("attachment.hasAttribute"),
                    n.proxyMethod("attachment.setAttribute"),
                    n.proxyMethod("attachment.getAttributes"),
                    n.proxyMethod("attachment.setAttributes"),
                    n.proxyMethod("attachment.isPending"),
                    n.proxyMethod("attachment.isPreviewable"),
                    n.proxyMethod("attachment.getURL"),
                    n.proxyMethod("attachment.getHref"),
                    n.proxyMethod("attachment.getFilename"),
                    n.proxyMethod("attachment.getFilesize"),
                    n.proxyMethod("attachment.getFormattedFilesize"),
                    n.proxyMethod("attachment.getExtension"),
                    n.proxyMethod("attachment.getContentType"),
                    n.proxyMethod("attachment.getFile"),
                    n.proxyMethod("attachment.setFile"),
                    n.proxyMethod("attachment.releaseFile"),
                    n.proxyMethod("attachment.getUploadProgress"),
                    n.proxyMethod("attachment.setUploadProgress"),
                    n
                  );
                })(o.BasicObject);
              }.call(this),
              function () {
                var t = {}.hasOwnProperty;
                o.AttachmentManager = (function (e) {
                  function n(t) {
                    var e, n, i;
                    for (
                      null == t && (t = []),
                        this.managedAttachments = {},
                        n = 0,
                        i = t.length;
                      n < i;
                      n++
                    )
                      (e = t[n]), this.manageAttachment(e);
                  }
                  return (
                    (function (e, n) {
                      for (var i in n) t.call(n, i) && (e[i] = n[i]);
                      function r() {
                        this.constructor = e;
                      }
                      (r.prototype = n.prototype),
                        (e.prototype = new r()),
                        (e.__super__ = n.prototype);
                    })(n, e),
                    (n.prototype.getAttachments = function () {
                      var t, e, n, i;
                      for (e in ((i = []), (n = this.managedAttachments)))
                        (t = n[e]), i.push(t);
                      return i;
                    }),
                    (n.prototype.manageAttachment = function (t) {
                      var e, n;
                      return null != (e = this.managedAttachments)[(n = t.id)]
                        ? e[n]
                        : (e[n] = new o.ManagedAttachment(this, t));
                    }),
                    (n.prototype.attachmentIsManaged = function (t) {
                      return t.id in this.managedAttachments;
                    }),
                    (n.prototype.requestRemovalOfAttachment = function (t) {
                      var e;
                      if (this.attachmentIsManaged(t))
                        return null != (e = this.delegate) &&
                          "function" ==
                            typeof e.attachmentManagerDidRequestRemovalOfAttachment
                          ? e.attachmentManagerDidRequestRemovalOfAttachment(t)
                          : void 0;
                    }),
                    (n.prototype.unmanageAttachment = function (t) {
                      var e;
                      return (
                        (e = this.managedAttachments[t.id]),
                        delete this.managedAttachments[t.id],
                        e
                      );
                    }),
                    n
                  );
                })(o.BasicObject);
              }.call(this),
              function () {
                var t, e, n, i, r, s, a, u, c, l, h;
                (t = o.elementContainsNode),
                  (e = o.findChildIndexOfNode),
                  (r = o.nodeIsBlockStart),
                  (s = o.nodeIsBlockStartComment),
                  (i = o.nodeIsBlockContainer),
                  (a = o.nodeIsCursorTarget),
                  (u = o.nodeIsEmptyTextNode),
                  (c = o.nodeIsTextNode),
                  (n = o.nodeIsAttachmentElement),
                  (l = o.tagName),
                  (h = o.walkTree),
                  (o.LocationMapper = (function () {
                    var o, p, d, f;
                    function g(t) {
                      this.element = t;
                    }
                    return (
                      (g.prototype.findLocationFromContainerAndOffset =
                        function (n, i, o) {
                          var s, u, l, f, g, m, y;
                          for (
                            m = (null != o ? o : { strict: !0 }).strict,
                              u = 0,
                              l = !1,
                              f = { index: 0, offset: 0 },
                              (s =
                                this.findAttachmentElementParentForNode(n)) &&
                                ((n = s.parentNode), (i = e(s))),
                              y = h(this.element, { usingFilter: d });
                            y.nextNode();

                          ) {
                            if ((g = y.currentNode) === n && c(n)) {
                              a(g) || (f.offset += i);
                              break;
                            }
                            if (g.parentNode === n) {
                              if (u++ === i) break;
                            } else if (!t(n, g) && u > 0) break;
                            r(g, { strict: m })
                              ? (l && f.index++, (f.offset = 0), (l = !0))
                              : (f.offset += p(g));
                          }
                          return f;
                        }),
                      (g.prototype.findContainerAndOffsetFromLocation =
                        function (t) {
                          var n, o, s, u, l;
                          if (0 === t.index && 0 === t.offset) {
                            for (n = this.element, u = 0; n.firstChild; )
                              if (((n = n.firstChild), i(n))) {
                                u = 1;
                                break;
                              }
                            return [n, u];
                          }
                          if (
                            ((o = (l =
                              this.findNodeAndOffsetFromLocation(t))[0]),
                            (s = l[1]),
                            o)
                          ) {
                            if (c(o))
                              0 === p(o)
                                ? ((n = o.parentNode.parentNode),
                                  (u = e(o.parentNode)),
                                  a(o, { name: "right" }) && u++)
                                : ((n = o), (u = t.offset - s));
                            else {
                              if (
                                ((n = o.parentNode),
                                !r(o.previousSibling) && !i(n))
                              )
                                for (
                                  ;
                                  o === n.lastChild &&
                                  ((o = n), (n = n.parentNode), !i(n));

                                );
                              (u = e(o)), 0 !== t.offset && u++;
                            }
                            return [n, u];
                          }
                        }),
                      (g.prototype.findNodeAndOffsetFromLocation = function (
                        t,
                      ) {
                        var e, n, i, r, o, s, u, l;
                        for (
                          u = 0,
                            n = 0,
                            i = (l = this.getSignificantNodesForIndex(t.index))
                              .length;
                          n < i;
                          n++
                        ) {
                          if (((e = l[n]), (r = p(e)), t.offset <= u + r))
                            if (c(e)) {
                              if (((o = e), (s = u), t.offset === s && a(o)))
                                break;
                            } else o || ((o = e), (s = u));
                          if ((u += r) > t.offset) break;
                        }
                        return [o, s];
                      }),
                      (g.prototype.findAttachmentElementParentForNode =
                        function (t) {
                          for (; t && t !== this.element; ) {
                            if (n(t)) return t;
                            t = t.parentNode;
                          }
                        }),
                      (g.prototype.getSignificantNodesForIndex = function (t) {
                        var e, n, i, r, a;
                        for (
                          i = [],
                            a = h(this.element, { usingFilter: o }),
                            r = !1;
                          a.nextNode();

                        )
                          if (((n = a.currentNode), s(n))) {
                            if ((null != e ? e++ : (e = 0), e === t)) r = !0;
                            else if (r) break;
                          } else r && i.push(n);
                        return i;
                      }),
                      (p = function (t) {
                        return t.nodeType === Node.TEXT_NODE
                          ? a(t)
                            ? 0
                            : t.textContent.length
                          : "br" === l(t) || n(t)
                            ? 1
                            : 0;
                      }),
                      (o = function (t) {
                        return f(t) === NodeFilter.FILTER_ACCEPT
                          ? d(t)
                          : NodeFilter.FILTER_REJECT;
                      }),
                      (f = function (t) {
                        return u(t)
                          ? NodeFilter.FILTER_REJECT
                          : NodeFilter.FILTER_ACCEPT;
                      }),
                      (d = function (t) {
                        return n(t.parentNode)
                          ? NodeFilter.FILTER_REJECT
                          : NodeFilter.FILTER_ACCEPT;
                      }),
                      g
                    );
                  })());
              }.call(this),
              function () {
                var t,
                  e,
                  n = [].slice;
                (t = o.getDOMRange),
                  (e = o.setDOMRange),
                  (o.PointMapper = (function () {
                    function i() {}
                    return (
                      (i.prototype.createDOMRangeFromPoint = function (n) {
                        var i, r, o, s, a, u, c, l;
                        if (
                          ((c = n.x),
                          (l = n.y),
                          document.caretPositionFromPoint)
                        )
                          return (
                            (o = (a = document.caretPositionFromPoint(c, l))
                              .offsetNode),
                            (r = a.offset),
                            (i = document.createRange()).setStart(o, r),
                            i
                          );
                        if (document.caretRangeFromPoint)
                          return document.caretRangeFromPoint(c, l);
                        if (document.body.createTextRange) {
                          s = t();
                          try {
                            (u = document.body.createTextRange()).moveToPoint(
                              c,
                              l,
                            ),
                              u.select();
                          } catch (t) {}
                          return (i = t()), e(s), i;
                        }
                      }),
                      (i.prototype.getClientRectsForDOMRange = function (t) {
                        var e;
                        return [
                          (e = n.call(t.getClientRects()))[0],
                          e[e.length - 1],
                        ];
                      }),
                      i
                    );
                  })());
              }.call(this),
              function () {
                var t,
                  e = function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  },
                  n = {}.hasOwnProperty,
                  i =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; e < n; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (t = o.getDOMRange),
                  (o.SelectionChangeObserver = (function (r) {
                    var o;
                    function s() {
                      (this.run = e(this.run, this)),
                        (this.update = e(this.update, this)),
                        (this.selectionManagers = []);
                    }
                    return (
                      (function (t, e) {
                        for (var i in e) n.call(e, i) && (t[i] = e[i]);
                        function r() {
                          this.constructor = t;
                        }
                        (r.prototype = e.prototype),
                          (t.prototype = new r()),
                          (t.__super__ = e.prototype);
                      })(s, r),
                      (s.prototype.start = function () {
                        if (!this.started)
                          return (
                            (this.started = !0),
                            "onselectionchange" in document
                              ? document.addEventListener(
                                  "selectionchange",
                                  this.update,
                                  !0,
                                )
                              : this.run()
                          );
                      }),
                      (s.prototype.stop = function () {
                        if (this.started)
                          return (
                            (this.started = !1),
                            document.removeEventListener(
                              "selectionchange",
                              this.update,
                              !0,
                            )
                          );
                      }),
                      (s.prototype.registerSelectionManager = function (t) {
                        if (i.call(this.selectionManagers, t) < 0)
                          return this.selectionManagers.push(t), this.start();
                      }),
                      (s.prototype.unregisterSelectionManager = function (t) {
                        var e;
                        if (
                          ((this.selectionManagers = function () {
                            var n, i, r, o;
                            for (
                              o = [],
                                n = 0,
                                i = (r = this.selectionManagers).length;
                              n < i;
                              n++
                            )
                              (e = r[n]) !== t && o.push(e);
                            return o;
                          }.call(this)),
                          0 === this.selectionManagers.length)
                        )
                          return this.stop();
                      }),
                      (s.prototype.notifySelectionManagersOfSelectionChange =
                        function () {
                          var t, e, n, i, r;
                          for (
                            i = [],
                              t = 0,
                              e = (n = this.selectionManagers).length;
                            t < e;
                            t++
                          )
                            (r = n[t]), i.push(r.selectionDidChange());
                          return i;
                        }),
                      (s.prototype.update = function () {
                        var e;
                        if (((e = t()), !o(e, this.domRange)))
                          return (
                            (this.domRange = e),
                            this.notifySelectionManagersOfSelectionChange()
                          );
                      }),
                      (s.prototype.reset = function () {
                        return (this.domRange = null), this.update();
                      }),
                      (s.prototype.run = function () {
                        if (this.started)
                          return this.update(), requestAnimationFrame(this.run);
                      }),
                      (o = function (t, e) {
                        return (
                          (null != t ? t.startContainer : void 0) ===
                            (null != e ? e.startContainer : void 0) &&
                          (null != t ? t.startOffset : void 0) ===
                            (null != e ? e.startOffset : void 0) &&
                          (null != t ? t.endContainer : void 0) ===
                            (null != e ? e.endContainer : void 0) &&
                          (null != t ? t.endOffset : void 0) ===
                            (null != e ? e.endOffset : void 0)
                        );
                      }),
                      s
                    );
                  })(o.BasicObject)),
                  null == o.selectionChangeObserver &&
                    (o.selectionChangeObserver =
                      new o.SelectionChangeObserver());
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i,
                  r,
                  s,
                  a,
                  u,
                  c,
                  l,
                  h = function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  },
                  p = {}.hasOwnProperty;
                (n = o.getDOMSelection),
                  (e = o.getDOMRange),
                  (l = o.setDOMRange),
                  (t = o.elementContainsNode),
                  (s = o.nodeIsCursorTarget),
                  (r = o.innerElementIsActive),
                  (i = o.handleEvent),
                  (a = o.normalizeRange),
                  (u = o.rangeIsCollapsed),
                  (c = o.rangesAreEqual),
                  (o.SelectionManager = (function (d) {
                    function f(t) {
                      (this.element = t),
                        (this.selectionDidChange = h(
                          this.selectionDidChange,
                          this,
                        )),
                        (this.didMouseDown = h(this.didMouseDown, this)),
                        (this.locationMapper = new o.LocationMapper(
                          this.element,
                        )),
                        (this.pointMapper = new o.PointMapper()),
                        (this.lockCount = 0),
                        i("mousedown", {
                          onElement: this.element,
                          withCallback: this.didMouseDown,
                        });
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) p.call(e, n) && (t[n] = e[n]);
                        function i() {
                          this.constructor = t;
                        }
                        (i.prototype = e.prototype),
                          (t.prototype = new i()),
                          (t.__super__ = e.prototype);
                      })(f, d),
                      (f.prototype.getLocationRange = function (t) {
                        var n;
                        return (
                          null == t && (t = {}),
                          !1 === t.strict
                            ? this.createLocationRangeFromDOMRange(e(), {
                                strict: !1,
                              })
                            : t.ignoreLock
                              ? this.currentLocationRange
                              : null != (n = this.lockedLocationRange)
                                ? n
                                : this.currentLocationRange
                        );
                      }),
                      (f.prototype.setLocationRange = function (t) {
                        var e;
                        if (!this.lockedLocationRange)
                          return (
                            (t = a(t)),
                            (e = this.createDOMRangeFromLocationRange(t))
                              ? (l(e), this.updateCurrentLocationRange(t))
                              : void 0
                          );
                      }),
                      (f.prototype.setLocationRangeFromPointRange = function (
                        t,
                      ) {
                        var e, n;
                        return (
                          (t = a(t)),
                          (n = this.getLocationAtPoint(t[0])),
                          (e = this.getLocationAtPoint(t[1])),
                          this.setLocationRange([n, e])
                        );
                      }),
                      (f.prototype.getClientRectAtLocationRange = function (t) {
                        var e;
                        if ((e = this.createDOMRangeFromLocationRange(t)))
                          return this.getClientRectsForDOMRange(e)[1];
                      }),
                      (f.prototype.locationIsCursorTarget = function (t) {
                        var e, n;
                        return (
                          (e = (n = this.findNodeAndOffsetFromLocation(t))[0]),
                          n[1],
                          s(e)
                        );
                      }),
                      (f.prototype.lock = function () {
                        if (0 == this.lockCount++)
                          return (
                            this.updateCurrentLocationRange(),
                            (this.lockedLocationRange = this.getLocationRange())
                          );
                      }),
                      (f.prototype.unlock = function () {
                        var t;
                        if (
                          0 == --this.lockCount &&
                          ((t = this.lockedLocationRange),
                          (this.lockedLocationRange = null),
                          null != t)
                        )
                          return this.setLocationRange(t);
                      }),
                      (f.prototype.clearSelection = function () {
                        var t;
                        return null != (t = n()) ? t.removeAllRanges() : void 0;
                      }),
                      (f.prototype.selectionIsCollapsed = function () {
                        var t;
                        return (
                          !0 === (null != (t = e()) ? t.collapsed : void 0)
                        );
                      }),
                      (f.prototype.selectionIsExpanded = function () {
                        return !this.selectionIsCollapsed();
                      }),
                      (f.prototype.createLocationRangeFromDOMRange = function (
                        t,
                        e,
                      ) {
                        var n, i;
                        if (
                          null != t &&
                          this.domRangeWithinElement(t) &&
                          (i = this.findLocationFromContainerAndOffset(
                            t.startContainer,
                            t.startOffset,
                            e,
                          ))
                        )
                          return (
                            t.collapsed ||
                              (n = this.findLocationFromContainerAndOffset(
                                t.endContainer,
                                t.endOffset,
                                e,
                              )),
                            a([i, n])
                          );
                      }),
                      f.proxyMethod(
                        "locationMapper.findLocationFromContainerAndOffset",
                      ),
                      f.proxyMethod(
                        "locationMapper.findContainerAndOffsetFromLocation",
                      ),
                      f.proxyMethod(
                        "locationMapper.findNodeAndOffsetFromLocation",
                      ),
                      f.proxyMethod("pointMapper.createDOMRangeFromPoint"),
                      f.proxyMethod("pointMapper.getClientRectsForDOMRange"),
                      (f.prototype.didMouseDown = function () {
                        return this.pauseTemporarily();
                      }),
                      (f.prototype.pauseTemporarily = function () {
                        var e, n, r, o, s;
                        return (
                          (this.paused = !0),
                          (s = this),
                          (n = function () {
                            var e, n;
                            for (
                              s.paused = !1,
                                clearTimeout(o),
                                e = 0,
                                n = r.length;
                              e < n;
                              e++
                            )
                              r[e].destroy();
                            if (t(document, s.element))
                              return s.selectionDidChange();
                          }),
                          (o = setTimeout(n, 200)),
                          (r = (function () {
                            var t, r, o, s;
                            for (
                              s = [],
                                t = 0,
                                r = (o = ["mousemove", "keydown"]).length;
                              t < r;
                              t++
                            )
                              (e = o[t]),
                                s.push(
                                  i(e, {
                                    onElement: document,
                                    withCallback: n,
                                  }),
                                );
                            return s;
                          })())
                        );
                      }),
                      (f.prototype.selectionDidChange = function () {
                        if (!this.paused && !r(this.element))
                          return this.updateCurrentLocationRange();
                      }),
                      (f.prototype.updateCurrentLocationRange = function (t) {
                        var n;
                        if (
                          (null != t
                            ? t
                            : (t =
                                this.createLocationRangeFromDOMRange(e()))) &&
                          !c(t, this.currentLocationRange)
                        )
                          return (
                            (this.currentLocationRange = t),
                            null != (n = this.delegate) &&
                            "function" == typeof n.locationRangeDidChange
                              ? n.locationRangeDidChange(
                                  this.currentLocationRange.slice(0),
                                )
                              : void 0
                          );
                      }),
                      (f.prototype.createDOMRangeFromLocationRange = function (
                        t,
                      ) {
                        var e, n, i, r;
                        if (
                          ((i = this.findContainerAndOffsetFromLocation(t[0])),
                          (n = u(t)
                            ? i
                            : null !=
                                (r = this.findContainerAndOffsetFromLocation(
                                  t[1],
                                ))
                              ? r
                              : i),
                          null != i && null != n)
                        )
                          return (
                            (e = document.createRange()).setStart.apply(e, i),
                            e.setEnd.apply(e, n),
                            e
                          );
                      }),
                      (f.prototype.getLocationAtPoint = function (t) {
                        var e, n;
                        if ((e = this.createDOMRangeFromPoint(t)))
                          return null !=
                            (n = this.createLocationRangeFromDOMRange(e))
                            ? n[0]
                            : void 0;
                      }),
                      (f.prototype.domRangeWithinElement = function (e) {
                        return e.collapsed
                          ? t(this.element, e.startContainer)
                          : t(this.element, e.startContainer) &&
                              t(this.element, e.endContainer);
                      }),
                      f
                    );
                  })(o.BasicObject));
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i,
                  r = {}.hasOwnProperty,
                  s = [].slice;
                (n = o.rangeIsCollapsed),
                  (i = o.rangesAreEqual),
                  (e = o.objectsAreEqual),
                  (t = o.getBlockConfig),
                  (o.EditorController = (function (a) {
                    var u;
                    function c(t) {
                      var e, n;
                      (this.editorElement = t.editorElement),
                        (e = t.document),
                        (n = t.html),
                        (this.selectionManager = new o.SelectionManager(
                          this.editorElement,
                        )),
                        (this.selectionManager.delegate = this),
                        (this.composition = new o.Composition()),
                        (this.composition.delegate = this),
                        (this.attachmentManager = new o.AttachmentManager(
                          this.composition.getAttachments(),
                        )),
                        (this.attachmentManager.delegate = this),
                        (this.inputController = new o[
                          "Level" +
                            o.config.input.getLevel() +
                            "InputController"
                        ](this.editorElement)),
                        (this.inputController.delegate = this),
                        (this.inputController.responder = this.composition),
                        (this.compositionController =
                          new o.CompositionController(
                            this.editorElement,
                            this.composition,
                          )),
                        (this.compositionController.delegate = this),
                        (this.toolbarController = new o.ToolbarController(
                          this.editorElement.toolbarElement,
                        )),
                        (this.toolbarController.delegate = this),
                        (this.editor = new o.Editor(
                          this.composition,
                          this.selectionManager,
                          this.editorElement,
                        )),
                        null != e
                          ? this.editor.loadDocument(e)
                          : this.editor.loadHTML(n);
                    }
                    return (
                      (function (t, e) {
                        for (var n in e) r.call(e, n) && (t[n] = e[n]);
                        function i() {
                          this.constructor = t;
                        }
                        (i.prototype = e.prototype),
                          (t.prototype = new i()),
                          (t.__super__ = e.prototype);
                      })(c, a),
                      (c.prototype.registerSelectionManager = function () {
                        return o.selectionChangeObserver.registerSelectionManager(
                          this.selectionManager,
                        );
                      }),
                      (c.prototype.unregisterSelectionManager = function () {
                        return o.selectionChangeObserver.unregisterSelectionManager(
                          this.selectionManager,
                        );
                      }),
                      (c.prototype.render = function () {
                        return this.compositionController.render();
                      }),
                      (c.prototype.reparse = function () {
                        return this.composition.replaceHTML(
                          this.editorElement.innerHTML,
                        );
                      }),
                      (c.prototype.compositionDidChangeDocument = function (t) {
                        if (
                          (this.notifyEditorElement("document-change"),
                          !this.handlingInput)
                        )
                          return this.render();
                      }),
                      (c.prototype.compositionDidChangeCurrentAttributes =
                        function (t) {
                          return (
                            (this.currentAttributes = t),
                            this.toolbarController.updateAttributes(
                              this.currentAttributes,
                            ),
                            this.updateCurrentActions(),
                            this.notifyEditorElement("attributes-change", {
                              attributes: this.currentAttributes,
                            })
                          );
                        }),
                      (c.prototype.compositionDidPerformInsertionAtRange =
                        function (t) {
                          if (this.pasting) return (this.pastedRange = t);
                        }),
                      (c.prototype.compositionShouldAcceptFile = function (t) {
                        return this.notifyEditorElement("file-accept", {
                          file: t,
                        });
                      }),
                      (c.prototype.compositionDidAddAttachment = function (t) {
                        var e;
                        return (
                          (e = this.attachmentManager.manageAttachment(t)),
                          this.notifyEditorElement("attachment-add", {
                            attachment: e,
                          })
                        );
                      }),
                      (c.prototype.compositionDidEditAttachment = function (t) {
                        var e;
                        return (
                          this.compositionController.rerenderViewForObject(t),
                          (e = this.attachmentManager.manageAttachment(t)),
                          this.notifyEditorElement("attachment-edit", {
                            attachment: e,
                          }),
                          this.notifyEditorElement("change")
                        );
                      }),
                      (c.prototype.compositionDidChangeAttachmentPreviewURL =
                        function (t) {
                          return (
                            this.compositionController.invalidateViewForObject(
                              t,
                            ),
                            this.notifyEditorElement("change")
                          );
                        }),
                      (c.prototype.compositionDidRemoveAttachment = function (
                        t,
                      ) {
                        var e;
                        return (
                          (e = this.attachmentManager.unmanageAttachment(t)),
                          this.notifyEditorElement("attachment-remove", {
                            attachment: e,
                          })
                        );
                      }),
                      (c.prototype.compositionDidStartEditingAttachment =
                        function (t, e) {
                          return (
                            (this.attachmentLocationRange =
                              this.composition.document.getLocationRangeOfAttachment(
                                t,
                              )),
                            this.compositionController.installAttachmentEditorForAttachment(
                              t,
                              e,
                            ),
                            this.selectionManager.setLocationRange(
                              this.attachmentLocationRange,
                            )
                          );
                        }),
                      (c.prototype.compositionDidStopEditingAttachment =
                        function (t) {
                          return (
                            this.compositionController.uninstallAttachmentEditor(),
                            (this.attachmentLocationRange = null)
                          );
                        }),
                      (c.prototype.compositionDidRequestChangingSelectionToLocationRange =
                        function (t) {
                          if (!this.loadingSnapshot || this.isFocused())
                            return (
                              (this.requestedLocationRange = t),
                              (this.compositionRevisionWhenLocationRangeRequested =
                                this.composition.revision),
                              this.handlingInput ? void 0 : this.render()
                            );
                        }),
                      (c.prototype.compositionWillLoadSnapshot = function () {
                        return (this.loadingSnapshot = !0);
                      }),
                      (c.prototype.compositionDidLoadSnapshot = function () {
                        return (
                          this.compositionController.refreshViewCache(),
                          this.render(),
                          (this.loadingSnapshot = !1)
                        );
                      }),
                      (c.prototype.getSelectionManager = function () {
                        return this.selectionManager;
                      }),
                      c.proxyMethod("getSelectionManager().setLocationRange"),
                      c.proxyMethod("getSelectionManager().getLocationRange"),
                      (c.prototype.attachmentManagerDidRequestRemovalOfAttachment =
                        function (t) {
                          return this.removeAttachment(t);
                        }),
                      (c.prototype.compositionControllerWillSyncDocumentView =
                        function () {
                          return (
                            this.inputController.editorWillSyncDocumentView(),
                            this.selectionManager.lock(),
                            this.selectionManager.clearSelection()
                          );
                        }),
                      (c.prototype.compositionControllerDidSyncDocumentView =
                        function () {
                          return (
                            this.inputController.editorDidSyncDocumentView(),
                            this.selectionManager.unlock(),
                            this.updateCurrentActions(),
                            this.notifyEditorElement("sync")
                          );
                        }),
                      (c.prototype.compositionControllerDidRender =
                        function () {
                          return (
                            null != this.requestedLocationRange &&
                              (this
                                .compositionRevisionWhenLocationRangeRequested ===
                                this.composition.revision &&
                                this.selectionManager.setLocationRange(
                                  this.requestedLocationRange,
                                ),
                              (this.requestedLocationRange = null),
                              (this.compositionRevisionWhenLocationRangeRequested =
                                null)),
                            this.renderedCompositionRevision !==
                              this.composition.revision &&
                              (this.runEditorFilters(),
                              this.composition.updateCurrentAttributes(),
                              this.notifyEditorElement("render")),
                            (this.renderedCompositionRevision =
                              this.composition.revision)
                          );
                        }),
                      (c.prototype.compositionControllerDidFocus = function () {
                        return (
                          this.isFocusedInvisibly() &&
                            this.setLocationRange({ index: 0, offset: 0 }),
                          this.toolbarController.hideDialog(),
                          this.notifyEditorElement("focus")
                        );
                      }),
                      (c.prototype.compositionControllerDidBlur = function () {
                        return this.notifyEditorElement("blur");
                      }),
                      (c.prototype.compositionControllerDidSelectAttachment =
                        function (t, e) {
                          return (
                            this.toolbarController.hideDialog(),
                            this.composition.editAttachment(t, e)
                          );
                        }),
                      (c.prototype.compositionControllerDidRequestDeselectingAttachment =
                        function (t) {
                          var e, n;
                          return (
                            (e =
                              null != (n = this.attachmentLocationRange)
                                ? n
                                : this.composition.document.getLocationRangeOfAttachment(
                                    t,
                                  )),
                            this.selectionManager.setLocationRange(e[1])
                          );
                        }),
                      (c.prototype.compositionControllerWillUpdateAttachment =
                        function (t) {
                          return this.editor.recordUndoEntry(
                            "Edit Attachment",
                            { context: t.id, consolidatable: !0 },
                          );
                        }),
                      (c.prototype.compositionControllerDidRequestRemovalOfAttachment =
                        function (t) {
                          return this.removeAttachment(t);
                        }),
                      (c.prototype.inputControllerWillHandleInput =
                        function () {
                          return (
                            (this.handlingInput = !0),
                            (this.requestedRender = !1)
                          );
                        }),
                      (c.prototype.inputControllerDidRequestRender =
                        function () {
                          return (this.requestedRender = !0);
                        }),
                      (c.prototype.inputControllerDidHandleInput = function () {
                        if (((this.handlingInput = !1), this.requestedRender))
                          return (this.requestedRender = !1), this.render();
                      }),
                      (c.prototype.inputControllerDidAllowUnhandledInput =
                        function () {
                          return this.notifyEditorElement("change");
                        }),
                      (c.prototype.inputControllerDidRequestReparse =
                        function () {
                          return this.reparse();
                        }),
                      (c.prototype.inputControllerWillPerformTyping =
                        function () {
                          return this.recordTypingUndoEntry();
                        }),
                      (c.prototype.inputControllerWillPerformFormatting =
                        function (t) {
                          return this.recordFormattingUndoEntry(t);
                        }),
                      (c.prototype.inputControllerWillCutText = function () {
                        return this.editor.recordUndoEntry("Cut");
                      }),
                      (c.prototype.inputControllerWillPaste = function (t) {
                        return (
                          this.editor.recordUndoEntry("Paste"),
                          (this.pasting = !0),
                          this.notifyEditorElement("before-paste", { paste: t })
                        );
                      }),
                      (c.prototype.inputControllerDidPaste = function (t) {
                        return (
                          (t.range = this.pastedRange),
                          (this.pastedRange = null),
                          (this.pasting = null),
                          this.notifyEditorElement("paste", { paste: t })
                        );
                      }),
                      (c.prototype.inputControllerWillMoveText = function () {
                        return this.editor.recordUndoEntry("Move");
                      }),
                      (c.prototype.inputControllerWillAttachFiles =
                        function () {
                          return this.editor.recordUndoEntry("Drop Files");
                        }),
                      (c.prototype.inputControllerWillPerformUndo =
                        function () {
                          return this.editor.undo();
                        }),
                      (c.prototype.inputControllerWillPerformRedo =
                        function () {
                          return this.editor.redo();
                        }),
                      (c.prototype.inputControllerDidReceiveKeyboardCommand =
                        function (t) {
                          return this.toolbarController.applyKeyboardCommand(t);
                        }),
                      (c.prototype.inputControllerDidStartDrag = function () {
                        return (this.locationRangeBeforeDrag =
                          this.selectionManager.getLocationRange());
                      }),
                      (c.prototype.inputControllerDidReceiveDragOverPoint =
                        function (t) {
                          return this.selectionManager.setLocationRangeFromPointRange(
                            t,
                          );
                        }),
                      (c.prototype.inputControllerDidCancelDrag = function () {
                        return (
                          this.selectionManager.setLocationRange(
                            this.locationRangeBeforeDrag,
                          ),
                          (this.locationRangeBeforeDrag = null)
                        );
                      }),
                      (c.prototype.locationRangeDidChange = function (t) {
                        return (
                          this.composition.updateCurrentAttributes(),
                          this.updateCurrentActions(),
                          this.attachmentLocationRange &&
                            !i(this.attachmentLocationRange, t) &&
                            this.composition.stopEditingAttachment(),
                          this.notifyEditorElement("selection-change")
                        );
                      }),
                      (c.prototype.toolbarDidClickButton = function () {
                        if (!this.getLocationRange())
                          return this.setLocationRange({ index: 0, offset: 0 });
                      }),
                      (c.prototype.toolbarDidInvokeAction = function (t) {
                        return this.invokeAction(t);
                      }),
                      (c.prototype.toolbarDidToggleAttribute = function (t) {
                        if (
                          (this.recordFormattingUndoEntry(t),
                          this.composition.toggleCurrentAttribute(t),
                          this.render(),
                          !this.selectionFrozen)
                        )
                          return this.editorElement.focus();
                      }),
                      (c.prototype.toolbarDidUpdateAttribute = function (t, e) {
                        if (
                          (this.recordFormattingUndoEntry(t),
                          this.composition.setCurrentAttribute(t, e),
                          this.render(),
                          !this.selectionFrozen)
                        )
                          return this.editorElement.focus();
                      }),
                      (c.prototype.toolbarDidRemoveAttribute = function (t) {
                        if (
                          (this.recordFormattingUndoEntry(t),
                          this.composition.removeCurrentAttribute(t),
                          this.render(),
                          !this.selectionFrozen)
                        )
                          return this.editorElement.focus();
                      }),
                      (c.prototype.toolbarWillShowDialog = function (t) {
                        return (
                          this.composition.expandSelectionForEditing(),
                          this.freezeSelection()
                        );
                      }),
                      (c.prototype.toolbarDidShowDialog = function (t) {
                        return this.notifyEditorElement("toolbar-dialog-show", {
                          dialogName: t,
                        });
                      }),
                      (c.prototype.toolbarDidHideDialog = function (t) {
                        return (
                          this.thawSelection(),
                          this.editorElement.focus(),
                          this.notifyEditorElement("toolbar-dialog-hide", {
                            dialogName: t,
                          })
                        );
                      }),
                      (c.prototype.freezeSelection = function () {
                        if (!this.selectionFrozen)
                          return (
                            this.selectionManager.lock(),
                            this.composition.freezeSelection(),
                            (this.selectionFrozen = !0),
                            this.render()
                          );
                      }),
                      (c.prototype.thawSelection = function () {
                        if (this.selectionFrozen)
                          return (
                            this.composition.thawSelection(),
                            this.selectionManager.unlock(),
                            (this.selectionFrozen = !1),
                            this.render()
                          );
                      }),
                      (c.prototype.actions = {
                        undo: {
                          test: function () {
                            return this.editor.canUndo();
                          },
                          perform: function () {
                            return this.editor.undo();
                          },
                        },
                        redo: {
                          test: function () {
                            return this.editor.canRedo();
                          },
                          perform: function () {
                            return this.editor.redo();
                          },
                        },
                        link: {
                          test: function () {
                            return this.editor.canActivateAttribute("href");
                          },
                        },
                        increaseNestingLevel: {
                          test: function () {
                            return this.editor.canIncreaseNestingLevel();
                          },
                          perform: function () {
                            return (
                              this.editor.increaseNestingLevel() &&
                              this.render()
                            );
                          },
                        },
                        decreaseNestingLevel: {
                          test: function () {
                            return this.editor.canDecreaseNestingLevel();
                          },
                          perform: function () {
                            return (
                              this.editor.decreaseNestingLevel() &&
                              this.render()
                            );
                          },
                        },
                        attachFiles: {
                          test: function () {
                            return !0;
                          },
                          perform: function () {
                            return o.config.input.pickFiles(
                              this.editor.insertFiles,
                            );
                          },
                        },
                      }),
                      (c.prototype.canInvokeAction = function (t) {
                        var e, n;
                        return (
                          !!this.actionIsExternal(t) ||
                          !!(null != (e = this.actions[t]) &&
                          null != (n = e.test)
                            ? n.call(this)
                            : void 0)
                        );
                      }),
                      (c.prototype.invokeAction = function (t) {
                        var e, n;
                        return this.actionIsExternal(t)
                          ? this.notifyEditorElement("action-invoke", {
                              actionName: t,
                            })
                          : null != (e = this.actions[t]) &&
                              null != (n = e.perform)
                            ? n.call(this)
                            : void 0;
                      }),
                      (c.prototype.actionIsExternal = function (t) {
                        return /^x-./.test(t);
                      }),
                      (c.prototype.getCurrentActions = function () {
                        var t, e;
                        for (t in ((e = {}), this.actions))
                          e[t] = this.canInvokeAction(t);
                        return e;
                      }),
                      (c.prototype.updateCurrentActions = function () {
                        var t;
                        if (
                          ((t = this.getCurrentActions()),
                          !e(t, this.currentActions))
                        )
                          return (
                            (this.currentActions = t),
                            this.toolbarController.updateActions(
                              this.currentActions,
                            ),
                            this.notifyEditorElement("actions-change", {
                              actions: this.currentActions,
                            })
                          );
                      }),
                      (c.prototype.runEditorFilters = function () {
                        var t, e, n, i, r, o, s, a;
                        for (
                          a = this.composition.getSnapshot(),
                            n = 0,
                            i = (r = this.editor.filters).length;
                          n < i;
                          n++
                        )
                          (e = r[n]),
                            (t = a.document),
                            (s = a.selectedRange),
                            null ==
                              (a =
                                null != (o = e.call(this.editor, a)) ? o : {})
                                .document && (a.document = t),
                            null == a.selectedRange && (a.selectedRange = s);
                        if (!u(a, this.composition.getSnapshot()))
                          return this.composition.loadSnapshot(a);
                      }),
                      (u = function (t, e) {
                        return (
                          i(t.selectedRange, e.selectedRange) &&
                          t.document.isEqualTo(e.document)
                        );
                      }),
                      (c.prototype.updateInputElement = function () {
                        var t, e;
                        return (
                          (t =
                            this.compositionController.getSerializableElement()),
                          (e = o.serializeToContentType(t, "text/html")),
                          this.editorElement.setInputElementValue(e)
                        );
                      }),
                      (c.prototype.notifyEditorElement = function (t, e) {
                        switch (t) {
                          case "document-change":
                            this.documentChangedSinceLastRender = !0;
                            break;
                          case "render":
                            this.documentChangedSinceLastRender &&
                              ((this.documentChangedSinceLastRender = !1),
                              this.notifyEditorElement("change"));
                            break;
                          case "change":
                          case "attachment-add":
                          case "attachment-edit":
                          case "attachment-remove":
                            this.updateInputElement();
                        }
                        return this.editorElement.notify(t, e);
                      }),
                      (c.prototype.removeAttachment = function (t) {
                        return (
                          this.editor.recordUndoEntry("Delete Attachment"),
                          this.composition.removeAttachment(t),
                          this.render()
                        );
                      }),
                      (c.prototype.recordFormattingUndoEntry = function (e) {
                        var i, r;
                        if (
                          ((i = t(e)),
                          (r = this.selectionManager.getLocationRange()),
                          i || !n(r))
                        )
                          return this.editor.recordUndoEntry("Formatting", {
                            context: this.getUndoContext(),
                            consolidatable: !0,
                          });
                      }),
                      (c.prototype.recordTypingUndoEntry = function () {
                        return this.editor.recordUndoEntry("Typing", {
                          context: this.getUndoContext(this.currentAttributes),
                          consolidatable: !0,
                        });
                      }),
                      (c.prototype.getUndoContext = function () {
                        var t;
                        return (
                          (t =
                            1 <= arguments.length ? s.call(arguments, 0) : []),
                          [
                            this.getLocationContext(),
                            this.getTimeContext(),
                          ].concat(s.call(t))
                        );
                      }),
                      (c.prototype.getLocationContext = function () {
                        var t;
                        return (
                          (t = this.selectionManager.getLocationRange()),
                          n(t) ? t[0].index : t
                        );
                      }),
                      (c.prototype.getTimeContext = function () {
                        return o.config.undoInterval > 0
                          ? Math.floor(
                              new Date().getTime() / o.config.undoInterval,
                            )
                          : 0;
                      }),
                      (c.prototype.isFocused = function () {
                        var t;
                        return (
                          this.editorElement ===
                          (null != (t = this.editorElement.ownerDocument)
                            ? t.activeElement
                            : void 0)
                        );
                      }),
                      (c.prototype.isFocusedInvisibly = function () {
                        return this.isFocused() && !this.getLocationRange();
                      }),
                      c
                    );
                  })(o.Controller));
              }.call(this),
              function () {
                var t,
                  e,
                  n,
                  i,
                  r,
                  s,
                  a,
                  u,
                  c,
                  l,
                  h,
                  p,
                  d,
                  f,
                  g,
                  m,
                  y =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; e < n; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (e = o.browser),
                  (s = o.makeElement),
                  (a = o.triggerEvent),
                  (i = o.handleEvent),
                  (r = o.handleEventOnce),
                  (n = o.findClosestElementFromNode),
                  (t = o.AttachmentView.attachmentSelector),
                  o.registerElement(
                    "trix-editor",
                    ((f = 0),
                    (c = function (t) {
                      if (
                        !document.querySelector(":focus") &&
                        t.hasAttribute("autofocus") &&
                        document.querySelector("[autofocus]") === t
                      )
                        return t.focus();
                    }),
                    (g = function (t) {
                      if (!t.hasAttribute("contenteditable"))
                        return (
                          t.setAttribute("contenteditable", ""),
                          r("focus", {
                            onElement: t,
                            withCallback: function () {
                              return l(t);
                            },
                          })
                        );
                    }),
                    (l = function (t) {
                      return p(t), m(t);
                    }),
                    (p = function (t) {
                      if (
                        "function" == typeof document.queryCommandSupported
                          ? document.queryCommandSupported(
                              "enableObjectResizing",
                            )
                          : void 0
                      )
                        return (
                          document.execCommand("enableObjectResizing", !1, !1),
                          i("mscontrolselect", {
                            onElement: t,
                            preventDefault: !0,
                          })
                        );
                    }),
                    (m = function (t) {
                      var e;
                      if (
                        ("function" == typeof document.queryCommandSupported
                          ? document.queryCommandSupported(
                              "DefaultParagraphSeparator",
                            )
                          : void 0) &&
                        ("div" ===
                          (e = o.config.blockAttributes.default.tagName) ||
                          "p" === e)
                      )
                        return document.execCommand(
                          "DefaultParagraphSeparator",
                          !1,
                          e,
                        );
                    }),
                    (u = function (t) {
                      if (!t.hasAttribute("role"))
                        return t.setAttribute("role", "textbox");
                    }),
                    (d = function (t) {
                      var e;
                      if (
                        !t.hasAttribute("aria-label") &&
                        !t.hasAttribute("aria-labelledby")
                      )
                        return (
                          (e = function () {
                            var e, n;
                            return (n = (function () {
                              var n, i, r, o;
                              for (
                                o = [], n = 0, i = (r = t.labels).length;
                                n < i;
                                n++
                              )
                                (e = r[n]).contains(t) || o.push(e.textContent);
                              return o;
                            })().join(" "))
                              ? t.setAttribute("aria-label", n)
                              : t.removeAttribute("aria-label");
                          })(),
                          i("focus", { onElement: t, withCallback: e })
                        );
                    }),
                    (h = e.forcesObjectResizing
                      ? { display: "inline", width: "auto" }
                      : { display: "inline-block", width: "1px" }),
                    {
                      defaultCSS:
                        "%t {\n  display: block;\n  white-space: pre-wrap;\n}\n\n%t:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: graytext;\n  cursor: text;\n  pointer-events: none;\n}\n\n%t a[contenteditable=false] {\n  cursor: text;\n}\n\n%t img {\n  max-width: 100%;\n  height: auto;\n}\n\n%t " +
                        t +
                        " figcaption textarea {\n  resize: none;\n}\n\n%t " +
                        t +
                        " figcaption textarea.trix-autoresize-clone {\n  position: absolute;\n  left: -9999px;\n  max-height: 0px;\n}\n\n%t " +
                        t +
                        " figcaption[data-trix-placeholder]:empty::before {\n  content: attr(data-trix-placeholder);\n  color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n  display: " +
                        h.display +
                        " !important;\n  width: " +
                        h.width +
                        " !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n  vertical-align: top !important;\n  margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n  vertical-align: bottom !important;\n  margin-right: -1px !important;\n}",
                      trixId: {
                        get: function () {
                          return this.hasAttribute("trix-id")
                            ? this.getAttribute("trix-id")
                            : (this.setAttribute("trix-id", ++f), this.trixId);
                        },
                      },
                      labels: {
                        get: function () {
                          var t, e, i;
                          return (
                            (e = []),
                            this.id &&
                              this.ownerDocument &&
                              e.push.apply(
                                e,
                                this.ownerDocument.querySelectorAll(
                                  "label[for='" + this.id + "']",
                                ),
                              ),
                            (t = n(this, { matchingSelector: "label" })) &&
                              (((i = t.control) !== this && null !== i) ||
                                e.push(t)),
                            e
                          );
                        },
                      },
                      toolbarElement: {
                        get: function () {
                          var t, e, n;
                          return this.hasAttribute("toolbar")
                            ? null != (e = this.ownerDocument)
                              ? e.getElementById(this.getAttribute("toolbar"))
                              : void 0
                            : this.parentNode
                              ? ((n = "trix-toolbar-" + this.trixId),
                                this.setAttribute("toolbar", n),
                                (t = s("trix-toolbar", { id: n })),
                                this.parentNode.insertBefore(t, this),
                                t)
                              : void 0;
                        },
                      },
                      inputElement: {
                        get: function () {
                          var t, e, n;
                          return this.hasAttribute("input")
                            ? null != (n = this.ownerDocument)
                              ? n.getElementById(this.getAttribute("input"))
                              : void 0
                            : this.parentNode
                              ? ((e = "trix-input-" + this.trixId),
                                this.setAttribute("input", e),
                                (t = s("input", { type: "hidden", id: e })),
                                this.parentNode.insertBefore(
                                  t,
                                  this.nextElementSibling,
                                ),
                                t)
                              : void 0;
                        },
                      },
                      editor: {
                        get: function () {
                          var t;
                          return null != (t = this.editorController)
                            ? t.editor
                            : void 0;
                        },
                      },
                      name: {
                        get: function () {
                          var t;
                          return null != (t = this.inputElement)
                            ? t.name
                            : void 0;
                        },
                      },
                      value: {
                        get: function () {
                          var t;
                          return null != (t = this.inputElement)
                            ? t.value
                            : void 0;
                        },
                        set: function (t) {
                          var e;
                          return (
                            (this.defaultValue = t),
                            null != (e = this.editor)
                              ? e.loadHTML(this.defaultValue)
                              : void 0
                          );
                        },
                      },
                      notify: function (t, e) {
                        if (this.editorController)
                          return a("trix-" + t, {
                            onElement: this,
                            attributes: e,
                          });
                      },
                      setInputElementValue: function (t) {
                        var e;
                        return null != (e = this.inputElement)
                          ? (e.value = t)
                          : void 0;
                      },
                      initialize: function () {
                        if (!this.hasAttribute("data-trix-internal"))
                          return g(this), u(this), d(this);
                      },
                      connect: function () {
                        if (!this.hasAttribute("data-trix-internal"))
                          return (
                            this.editorController ||
                              (a("trix-before-initialize", { onElement: this }),
                              (this.editorController = new o.EditorController({
                                editorElement: this,
                                html: (this.defaultValue = this.value),
                              })),
                              requestAnimationFrame(
                                ((t = this),
                                function () {
                                  return a("trix-initialize", { onElement: t });
                                }),
                              )),
                            this.editorController.registerSelectionManager(),
                            this.registerResetListener(),
                            this.registerClickListener(),
                            c(this)
                          );
                        var t;
                      },
                      disconnect: function () {
                        var t;
                        return (
                          null != (t = this.editorController) &&
                            t.unregisterSelectionManager(),
                          this.unregisterResetListener(),
                          this.unregisterClickListener()
                        );
                      },
                      registerResetListener: function () {
                        return (
                          (this.resetListener = this.resetBubbled.bind(this)),
                          window.addEventListener(
                            "reset",
                            this.resetListener,
                            !1,
                          )
                        );
                      },
                      unregisterResetListener: function () {
                        return window.removeEventListener(
                          "reset",
                          this.resetListener,
                          !1,
                        );
                      },
                      registerClickListener: function () {
                        return (
                          (this.clickListener = this.clickBubbled.bind(this)),
                          window.addEventListener(
                            "click",
                            this.clickListener,
                            !1,
                          )
                        );
                      },
                      unregisterClickListener: function () {
                        return window.removeEventListener(
                          "click",
                          this.clickListener,
                          !1,
                        );
                      },
                      resetBubbled: function (t) {
                        var e;
                        if (
                          !t.defaultPrevented &&
                          t.target ===
                            (null != (e = this.inputElement) ? e.form : void 0)
                        )
                          return this.reset();
                      },
                      clickBubbled: function (t) {
                        var e;
                        if (
                          !t.defaultPrevented &&
                          !this.contains(t.target) &&
                          (e = n(t.target, { matchingSelector: "label" })) &&
                          !(y.call(this.labels, e) < 0)
                        )
                          return this.focus();
                      },
                      reset: function () {
                        return (this.value = this.defaultValue);
                      },
                    }),
                  );
              }.call(this),
              function () {}.call(this);
          }).call(this),
            t.exports
              ? (t.exports = o)
              : void 0 ===
                  (r = "function" == typeof (i = o) ? i.call(e, n, e, t) : i) ||
                (t.exports = r);
        }.call(this);
    },
    72307: (t, e, n) => {
      t = n.nmd(t);
      var i = "__lodash_hash_undefined__",
        r = 1,
        o = 2,
        s = 9007199254740991,
        a = "[object Arguments]",
        u = "[object Array]",
        c = "[object AsyncFunction]",
        l = "[object Boolean]",
        h = "[object Date]",
        p = "[object Error]",
        d = "[object Function]",
        f = "[object GeneratorFunction]",
        g = "[object Map]",
        m = "[object Number]",
        y = "[object Null]",
        v = "[object Object]",
        b = "[object Promise]",
        A = "[object Proxy]",
        x = "[object RegExp]",
        C = "[object Set]",
        w = "[object String]",
        k = "[object Symbol]",
        S = "[object Undefined]",
        E = "[object WeakMap]",
        T = "[object ArrayBuffer]",
        L = "[object DataView]",
        R = /^\[object .+?Constructor\]$/,
        D = /^(?:0|[1-9]\d*)$/,
        O = {};
      (O["[object Float32Array]"] =
        O["[object Float64Array]"] =
        O["[object Int8Array]"] =
        O["[object Int16Array]"] =
        O["[object Int32Array]"] =
        O["[object Uint8Array]"] =
        O["[object Uint8ClampedArray]"] =
        O["[object Uint16Array]"] =
        O["[object Uint32Array]"] =
          !0),
        (O[a] =
          O[u] =
          O[T] =
          O[l] =
          O[L] =
          O[h] =
          O[p] =
          O[d] =
          O[g] =
          O[m] =
          O[v] =
          O[x] =
          O[C] =
          O[w] =
          O[E] =
            !1);
      var _ =
          "object" == typeof global &&
          global &&
          global.Object === Object &&
          global,
        I = "object" == typeof self && self && self.Object === Object && self,
        N = _ || I || Function("return this")(),
        B = e && !e.nodeType && e,
        P = B && t && !t.nodeType && t,
        M = P && P.exports === B,
        F = M && _.process,
        j = (function () {
          try {
            return F && F.binding && F.binding("util");
          } catch (t) {}
        })(),
        z = j && j.isTypedArray;
      function W(t, e) {
        for (var n = -1, i = null == t ? 0 : t.length; ++n < i; )
          if (e(t[n], n, t)) return !0;
        return !1;
      }
      function H(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t, i) {
            n[++e] = [i, t];
          }),
          n
        );
      }
      function V(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t) {
            n[++e] = t;
          }),
          n
        );
      }
      var q,
        U,
        G,
        J = Array.prototype,
        K = Function.prototype,
        $ = Object.prototype,
        X = N["__core-js_shared__"],
        Z = K.toString,
        Q = $.hasOwnProperty,
        Y = (q = /[^.]+$/.exec((X && X.keys && X.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + q
          : "",
        tt = $.toString,
        et = RegExp(
          "^" +
            Z.call(Q)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        ),
        nt = M ? N.Buffer : void 0,
        it = N.Symbol,
        rt = N.Uint8Array,
        ot = $.propertyIsEnumerable,
        st = J.splice,
        at = it ? it.toStringTag : void 0,
        ut = Object.getOwnPropertySymbols,
        ct = nt ? nt.isBuffer : void 0,
        lt =
          ((U = Object.keys),
          (G = Object),
          function (t) {
            return U(G(t));
          }),
        ht = jt(N, "DataView"),
        pt = jt(N, "Map"),
        dt = jt(N, "Promise"),
        ft = jt(N, "Set"),
        gt = jt(N, "WeakMap"),
        mt = jt(Object, "create"),
        yt = Vt(ht),
        vt = Vt(pt),
        bt = Vt(dt),
        At = Vt(ft),
        xt = Vt(gt),
        Ct = it ? it.prototype : void 0,
        wt = Ct ? Ct.valueOf : void 0;
      function kt(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      function St(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      function Et(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      function Tt(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.__data__ = new Et(); ++e < n; ) this.add(t[e]);
      }
      function Lt(t) {
        var e = (this.__data__ = new St(t));
        this.size = e.size;
      }
      function Rt(t, e) {
        var n = Gt(t),
          i = !n && Ut(t),
          r = !n && !i && Jt(t),
          o = !n && !i && !r && Qt(t),
          s = n || i || r || o,
          a = s
            ? (function (t, e) {
                for (var n = -1, i = Array(t); ++n < t; ) i[n] = e(n);
                return i;
              })(t.length, String)
            : [],
          u = a.length;
        for (var c in t)
          (!e && !Q.call(t, c)) ||
            (s &&
              ("length" == c ||
                (r && ("offset" == c || "parent" == c)) ||
                (o &&
                  ("buffer" == c || "byteLength" == c || "byteOffset" == c)) ||
                Ht(c, u))) ||
            a.push(c);
        return a;
      }
      function Dt(t, e) {
        for (var n = t.length; n--; ) if (qt(t[n][0], e)) return n;
        return -1;
      }
      function Ot(t) {
        return null == t
          ? void 0 === t
            ? S
            : y
          : at && at in Object(t)
            ? (function (t) {
                var e = Q.call(t, at),
                  n = t[at];
                try {
                  t[at] = void 0;
                  var i = !0;
                } catch (t) {}
                var r = tt.call(t);
                i && (e ? (t[at] = n) : delete t[at]);
                return r;
              })(t)
            : (function (t) {
                return tt.call(t);
              })(t);
      }
      function _t(t) {
        return Zt(t) && Ot(t) == a;
      }
      function It(t, e, n, i, s) {
        return (
          t === e ||
          (null == t || null == e || (!Zt(t) && !Zt(e))
            ? t != t && e != e
            : (function (t, e, n, i, s, c) {
                var d = Gt(t),
                  f = Gt(e),
                  y = d ? u : Wt(t),
                  b = f ? u : Wt(e),
                  A = (y = y == a ? v : y) == v,
                  S = (b = b == a ? v : b) == v,
                  E = y == b;
                if (E && Jt(t)) {
                  if (!Jt(e)) return !1;
                  (d = !0), (A = !1);
                }
                if (E && !A)
                  return (
                    c || (c = new Lt()),
                    d || Qt(t)
                      ? Pt(t, e, n, i, s, c)
                      : (function (t, e, n, i, s, a, u) {
                          switch (n) {
                            case L:
                              if (
                                t.byteLength != e.byteLength ||
                                t.byteOffset != e.byteOffset
                              )
                                return !1;
                              (t = t.buffer), (e = e.buffer);
                            case T:
                              return !(
                                t.byteLength != e.byteLength ||
                                !a(new rt(t), new rt(e))
                              );
                            case l:
                            case h:
                            case m:
                              return qt(+t, +e);
                            case p:
                              return t.name == e.name && t.message == e.message;
                            case x:
                            case w:
                              return t == e + "";
                            case g:
                              var c = H;
                            case C:
                              var d = i & r;
                              if ((c || (c = V), t.size != e.size && !d))
                                return !1;
                              var f = u.get(t);
                              if (f) return f == e;
                              (i |= o), u.set(t, e);
                              var y = Pt(c(t), c(e), i, s, a, u);
                              return u.delete(t), y;
                            case k:
                              if (wt) return wt.call(t) == wt.call(e);
                          }
                          return !1;
                        })(t, e, y, n, i, s, c)
                  );
                if (!(n & r)) {
                  var R = A && Q.call(t, "__wrapped__"),
                    D = S && Q.call(e, "__wrapped__");
                  if (R || D) {
                    var O = R ? t.value() : t,
                      _ = D ? e.value() : e;
                    return c || (c = new Lt()), s(O, _, n, i, c);
                  }
                }
                if (!E) return !1;
                return (
                  c || (c = new Lt()),
                  (function (t, e, n, i, o, s) {
                    var a = n & r,
                      u = Mt(t),
                      c = u.length,
                      l = Mt(e),
                      h = l.length;
                    if (c != h && !a) return !1;
                    var p = c;
                    for (; p--; ) {
                      var d = u[p];
                      if (!(a ? d in e : Q.call(e, d))) return !1;
                    }
                    var f = s.get(t);
                    if (f && s.get(e)) return f == e;
                    var g = !0;
                    s.set(t, e), s.set(e, t);
                    var m = a;
                    for (; ++p < c; ) {
                      var y = t[(d = u[p])],
                        v = e[d];
                      if (i)
                        var b = a ? i(v, y, d, e, t, s) : i(y, v, d, t, e, s);
                      if (!(void 0 === b ? y === v || o(y, v, n, i, s) : b)) {
                        g = !1;
                        break;
                      }
                      m || (m = "constructor" == d);
                    }
                    if (g && !m) {
                      var A = t.constructor,
                        x = e.constructor;
                      A == x ||
                        !("constructor" in t) ||
                        !("constructor" in e) ||
                        ("function" == typeof A &&
                          A instanceof A &&
                          "function" == typeof x &&
                          x instanceof x) ||
                        (g = !1);
                    }
                    return s.delete(t), s.delete(e), g;
                  })(t, e, n, i, s, c)
                );
              })(t, e, n, i, It, s))
        );
      }
      function Nt(t) {
        return (
          !(
            !Xt(t) ||
            (function (t) {
              return !!Y && Y in t;
            })(t)
          ) && (Kt(t) ? et : R).test(Vt(t))
        );
      }
      function Bt(t) {
        if (
          ((n = (e = t) && e.constructor),
          (i = ("function" == typeof n && n.prototype) || $),
          e !== i)
        )
          return lt(t);
        var e,
          n,
          i,
          r = [];
        for (var o in Object(t))
          Q.call(t, o) && "constructor" != o && r.push(o);
        return r;
      }
      function Pt(t, e, n, i, s, a) {
        var u = n & r,
          c = t.length,
          l = e.length;
        if (c != l && !(u && l > c)) return !1;
        var h = a.get(t);
        if (h && a.get(e)) return h == e;
        var p = -1,
          d = !0,
          f = n & o ? new Tt() : void 0;
        for (a.set(t, e), a.set(e, t); ++p < c; ) {
          var g = t[p],
            m = e[p];
          if (i) var y = u ? i(m, g, p, e, t, a) : i(g, m, p, t, e, a);
          if (void 0 !== y) {
            if (y) continue;
            d = !1;
            break;
          }
          if (f) {
            if (
              !W(e, function (t, e) {
                if (((r = e), !f.has(r) && (g === t || s(g, t, n, i, a))))
                  return f.push(e);
                var r;
              })
            ) {
              d = !1;
              break;
            }
          } else if (g !== m && !s(g, m, n, i, a)) {
            d = !1;
            break;
          }
        }
        return a.delete(t), a.delete(e), d;
      }
      function Mt(t) {
        return (function (t, e, n) {
          var i = e(t);
          return Gt(t)
            ? i
            : (function (t, e) {
                for (var n = -1, i = e.length, r = t.length; ++n < i; )
                  t[r + n] = e[n];
                return t;
              })(i, n(t));
        })(t, Yt, zt);
      }
      function Ft(t, e) {
        var n,
          i,
          r = t.__data__;
        return (
          "string" == (i = typeof (n = e)) ||
          "number" == i ||
          "symbol" == i ||
          "boolean" == i
            ? "__proto__" !== n
            : null === n
        )
          ? r["string" == typeof e ? "string" : "hash"]
          : r.map;
      }
      function jt(t, e) {
        var n = (function (t, e) {
          return null == t ? void 0 : t[e];
        })(t, e);
        return Nt(n) ? n : void 0;
      }
      (kt.prototype.clear = function () {
        (this.__data__ = mt ? mt(null) : {}), (this.size = 0);
      }),
        (kt.prototype.delete = function (t) {
          var e = this.has(t) && delete this.__data__[t];
          return (this.size -= e ? 1 : 0), e;
        }),
        (kt.prototype.get = function (t) {
          var e = this.__data__;
          if (mt) {
            var n = e[t];
            return n === i ? void 0 : n;
          }
          return Q.call(e, t) ? e[t] : void 0;
        }),
        (kt.prototype.has = function (t) {
          var e = this.__data__;
          return mt ? void 0 !== e[t] : Q.call(e, t);
        }),
        (kt.prototype.set = function (t, e) {
          var n = this.__data__;
          return (
            (this.size += this.has(t) ? 0 : 1),
            (n[t] = mt && void 0 === e ? i : e),
            this
          );
        }),
        (St.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (St.prototype.delete = function (t) {
          var e = this.__data__,
            n = Dt(e, t);
          return (
            !(n < 0) &&
            (n == e.length - 1 ? e.pop() : st.call(e, n, 1), --this.size, !0)
          );
        }),
        (St.prototype.get = function (t) {
          var e = this.__data__,
            n = Dt(e, t);
          return n < 0 ? void 0 : e[n][1];
        }),
        (St.prototype.has = function (t) {
          return Dt(this.__data__, t) > -1;
        }),
        (St.prototype.set = function (t, e) {
          var n = this.__data__,
            i = Dt(n, t);
          return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
        }),
        (Et.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new kt(),
              map: new (pt || St)(),
              string: new kt(),
            });
        }),
        (Et.prototype.delete = function (t) {
          var e = Ft(this, t).delete(t);
          return (this.size -= e ? 1 : 0), e;
        }),
        (Et.prototype.get = function (t) {
          return Ft(this, t).get(t);
        }),
        (Et.prototype.has = function (t) {
          return Ft(this, t).has(t);
        }),
        (Et.prototype.set = function (t, e) {
          var n = Ft(this, t),
            i = n.size;
          return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
        }),
        (Tt.prototype.add = Tt.prototype.push =
          function (t) {
            return this.__data__.set(t, i), this;
          }),
        (Tt.prototype.has = function (t) {
          return this.__data__.has(t);
        }),
        (Lt.prototype.clear = function () {
          (this.__data__ = new St()), (this.size = 0);
        }),
        (Lt.prototype.delete = function (t) {
          var e = this.__data__,
            n = e.delete(t);
          return (this.size = e.size), n;
        }),
        (Lt.prototype.get = function (t) {
          return this.__data__.get(t);
        }),
        (Lt.prototype.has = function (t) {
          return this.__data__.has(t);
        }),
        (Lt.prototype.set = function (t, e) {
          var n = this.__data__;
          if (n instanceof St) {
            var i = n.__data__;
            if (!pt || i.length < 199)
              return i.push([t, e]), (this.size = ++n.size), this;
            n = this.__data__ = new Et(i);
          }
          return n.set(t, e), (this.size = n.size), this;
        });
      var zt = ut
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  (function (t, e) {
                    for (
                      var n = -1, i = null == t ? 0 : t.length, r = 0, o = [];
                      ++n < i;

                    ) {
                      var s = t[n];
                      e(s, n, t) && (o[r++] = s);
                    }
                    return o;
                  })(ut(t), function (e) {
                    return ot.call(t, e);
                  }));
            }
          : function () {
              return [];
            },
        Wt = Ot;
      function Ht(t, e) {
        return (
          !!(e = null == e ? s : e) &&
          ("number" == typeof t || D.test(t)) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      }
      function Vt(t) {
        if (null != t) {
          try {
            return Z.call(t);
          } catch (t) {}
          try {
            return t + "";
          } catch (t) {}
        }
        return "";
      }
      function qt(t, e) {
        return t === e || (t != t && e != e);
      }
      ((ht && Wt(new ht(new ArrayBuffer(1))) != L) ||
        (pt && Wt(new pt()) != g) ||
        (dt && Wt(dt.resolve()) != b) ||
        (ft && Wt(new ft()) != C) ||
        (gt && Wt(new gt()) != E)) &&
        (Wt = function (t) {
          var e = Ot(t),
            n = e == v ? t.constructor : void 0,
            i = n ? Vt(n) : "";
          if (i)
            switch (i) {
              case yt:
                return L;
              case vt:
                return g;
              case bt:
                return b;
              case At:
                return C;
              case xt:
                return E;
            }
          return e;
        });
      var Ut = _t(
          (function () {
            return arguments;
          })(),
        )
          ? _t
          : function (t) {
              return Zt(t) && Q.call(t, "callee") && !ot.call(t, "callee");
            },
        Gt = Array.isArray;
      var Jt =
        ct ||
        function () {
          return !1;
        };
      function Kt(t) {
        if (!Xt(t)) return !1;
        var e = Ot(t);
        return e == d || e == f || e == c || e == A;
      }
      function $t(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= s;
      }
      function Xt(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      }
      function Zt(t) {
        return null != t && "object" == typeof t;
      }
      var Qt = z
        ? (function (t) {
            return function (e) {
              return t(e);
            };
          })(z)
        : function (t) {
            return Zt(t) && $t(t.length) && !!O[Ot(t)];
          };
      function Yt(t) {
        return null != (e = t) && $t(e.length) && !Kt(e) ? Rt(t) : Bt(t);
        var e;
      }
      t.exports = function (t, e) {
        return It(t, e);
      };
    },
    65614: function (t, e, n) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(45374),
        o = n(86176),
        s = i(n(72307)),
        a = (function () {
          function t(t, e) {
            "string" == typeof t &&
              (t = new o.InsertDataQuill(r.DataType.Text, t + "")),
              (this.insert = t),
              (this.attributes = e || {});
          }
          return (
            (t.createNewLineOp = function () {
              return new t(r.NewLine);
            }),
            (t.prototype.isContainerBlock = function () {
              return (
                this.isBlockquote() ||
                this.isList() ||
                this.isTable() ||
                this.isCodeBlock() ||
                this.isHeader() ||
                this.isBlockAttribute() ||
                this.isCustomTextBlock()
              );
            }),
            (t.prototype.isBlockAttribute = function () {
              var t = this.attributes;
              return !!(t.align || t.direction || t.indent);
            }),
            (t.prototype.isBlockquote = function () {
              return !!this.attributes.blockquote;
            }),
            (t.prototype.isHeader = function () {
              return !!this.attributes.header;
            }),
            (t.prototype.isTable = function () {
              return !!this.attributes.table;
            }),
            (t.prototype.isSameHeaderAs = function (t) {
              return (
                t.attributes.header === this.attributes.header &&
                this.isHeader()
              );
            }),
            (t.prototype.hasSameAdiAs = function (t) {
              return (
                this.attributes.align === t.attributes.align &&
                this.attributes.direction === t.attributes.direction &&
                this.attributes.indent === t.attributes.indent
              );
            }),
            (t.prototype.hasSameIndentationAs = function (t) {
              return this.attributes.indent === t.attributes.indent;
            }),
            (t.prototype.hasSameAttr = function (t) {
              return s.default(this.attributes, t.attributes);
            }),
            (t.prototype.hasHigherIndentThan = function (t) {
              return (
                (Number(this.attributes.indent) || 0) >
                (Number(t.attributes.indent) || 0)
              );
            }),
            (t.prototype.isInline = function () {
              return !(
                this.isContainerBlock() ||
                this.isVideo() ||
                this.isCustomEmbedBlock()
              );
            }),
            (t.prototype.isCodeBlock = function () {
              return !!this.attributes["code-block"];
            }),
            (t.prototype.hasSameLangAs = function (t) {
              return (
                this.attributes["code-block"] === t.attributes["code-block"]
              );
            }),
            (t.prototype.isJustNewline = function () {
              return this.insert.value === r.NewLine;
            }),
            (t.prototype.isList = function () {
              return (
                this.isOrderedList() ||
                this.isBulletList() ||
                this.isCheckedList() ||
                this.isUncheckedList()
              );
            }),
            (t.prototype.isOrderedList = function () {
              return this.attributes.list === r.ListType.Ordered;
            }),
            (t.prototype.isBulletList = function () {
              return this.attributes.list === r.ListType.Bullet;
            }),
            (t.prototype.isCheckedList = function () {
              return this.attributes.list === r.ListType.Checked;
            }),
            (t.prototype.isUncheckedList = function () {
              return this.attributes.list === r.ListType.Unchecked;
            }),
            (t.prototype.isACheckList = function () {
              return (
                this.attributes.list == r.ListType.Unchecked ||
                this.attributes.list === r.ListType.Checked
              );
            }),
            (t.prototype.isSameListAs = function (t) {
              return (
                !!t.attributes.list &&
                (this.attributes.list === t.attributes.list ||
                  (t.isACheckList() && this.isACheckList()))
              );
            }),
            (t.prototype.isSameTableRowAs = function (t) {
              return (
                !!t.isTable() &&
                this.isTable() &&
                this.attributes.table === t.attributes.table
              );
            }),
            (t.prototype.isText = function () {
              return this.insert.type === r.DataType.Text;
            }),
            (t.prototype.isImage = function () {
              return this.insert.type === r.DataType.Image;
            }),
            (t.prototype.isFormula = function () {
              return this.insert.type === r.DataType.Formula;
            }),
            (t.prototype.isVideo = function () {
              return this.insert.type === r.DataType.Video;
            }),
            (t.prototype.isLink = function () {
              return this.isText() && !!this.attributes.link;
            }),
            (t.prototype.isCustomEmbed = function () {
              return this.insert instanceof o.InsertDataCustom;
            }),
            (t.prototype.isCustomEmbedBlock = function () {
              return this.isCustomEmbed() && !!this.attributes.renderAsBlock;
            }),
            (t.prototype.isCustomTextBlock = function () {
              return this.isText() && !!this.attributes.renderAsBlock;
            }),
            (t.prototype.isMentions = function () {
              return this.isText() && !!this.attributes.mentions;
            }),
            t
          );
        })();
      e.DeltaInsertOp = a;
    },
    86176: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = function (t, e) {
        (this.type = t), (this.value = e);
      };
      e.InsertDataQuill = n;
      var i = function (t, e) {
        (this.type = t), (this.value = e);
      };
      e.InsertDataCustom = i;
    },
    1137: function (t, e, n) {
      "use strict";
      var i =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return (e.default = t), e;
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(45374),
        o = i(n(932)),
        s = i(n(53140)),
        a = (function () {
          function t() {}
          return (
            (t.denormalize = function (t) {
              if (!t || "object" != typeof t) return [];
              if ("object" == typeof t.insert || t.insert === r.NewLine)
                return [t];
              var e = o.tokenizeWithNewLines(t.insert + "");
              if (1 === e.length) return [t];
              var n = s.assign({}, t, { insert: r.NewLine });
              return e.map(function (e) {
                return e === r.NewLine ? n : s.assign({}, t, { insert: e });
              });
            }),
            t
          );
        })();
      e.InsertOpDenormalizer = a;
    },
    50204: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(65614),
        r = n(45374),
        o = n(86176),
        s = n(43097),
        a = n(1137),
        u = n(65195),
        c = (function () {
          function t() {}
          return (
            (t.convert = function (e, n) {
              if (!Array.isArray(e)) return [];
              for (
                var r,
                  o,
                  u = [],
                  c = 0,
                  l = [].concat.apply(
                    [],
                    e.map(a.InsertOpDenormalizer.denormalize),
                  );
                c < l.length;
                c++
              ) {
                var h = l[c];
                h.insert &&
                  (r = t.convertInsertVal(h.insert, n)) &&
                  ((o = s.OpAttributeSanitizer.sanitize(h.attributes, n)),
                  u.push(new i.DeltaInsertOp(r, o)));
              }
              return u;
            }),
            (t.convertInsertVal = function (t, e) {
              if ("string" == typeof t)
                return new o.InsertDataQuill(r.DataType.Text, t);
              if (!t || "object" != typeof t) return null;
              var n = Object.keys(t);
              return n.length
                ? r.DataType.Image in t
                  ? new o.InsertDataQuill(
                      r.DataType.Image,
                      u.OpLinkSanitizer.sanitize(t[r.DataType.Image] + "", e),
                    )
                  : r.DataType.Video in t
                    ? new o.InsertDataQuill(
                        r.DataType.Video,
                        u.OpLinkSanitizer.sanitize(t[r.DataType.Video] + "", e),
                      )
                    : r.DataType.Formula in t
                      ? new o.InsertDataQuill(
                          r.DataType.Formula,
                          t[r.DataType.Formula],
                        )
                      : new o.InsertDataCustom(n[0], t[n[0]])
                : null;
            }),
            t
          );
        })();
      e.InsertOpsConverter = c;
    },
    43097: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(45374),
        r = n(89250),
        o = n(82935),
        s = n(65195),
        a = (function () {
          function t() {}
          return (
            (t.sanitize = function (e, n) {
              var a = {};
              if (!e || "object" != typeof e) return a;
              var u = [
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "code",
                  "blockquote",
                  "code-block",
                  "renderAsBlock",
                ],
                c = ["background", "color"],
                l = e.font,
                h = e.size,
                p = e.link,
                d = e.script,
                f = e.list,
                g = e.header,
                m = e.align,
                y = e.direction,
                v = e.indent,
                b = e.mentions,
                A = e.mention,
                x = e.width,
                C = e.target,
                w = e.rel,
                k = e["code-block"],
                S = u.concat(c, [
                  "font",
                  "size",
                  "link",
                  "script",
                  "list",
                  "header",
                  "align",
                  "direction",
                  "indent",
                  "mentions",
                  "mention",
                  "width",
                  "target",
                  "rel",
                  "code-block",
                ]);
              if (
                (u.forEach(function (t) {
                  var n = e[t];
                  n && (a[t] = !!n);
                }),
                c.forEach(function (n) {
                  var i = e[n];
                  i &&
                    (t.IsValidHexColor(i + "") ||
                      t.IsValidColorLiteral(i + "") ||
                      t.IsValidRGBColor(i + "")) &&
                    (a[n] = i);
                }),
                l && t.IsValidFontName(l + "") && (a.font = l),
                h && t.IsValidSize(h + "") && (a.size = h),
                x && t.IsValidWidth(x + "") && (a.width = x),
                p && (a.link = s.OpLinkSanitizer.sanitize(p + "", n)),
                C && t.isValidTarget(C) && (a.target = C),
                w && t.IsValidRel(w) && (a.rel = w),
                k &&
                  (t.IsValidLang(k)
                    ? (a["code-block"] = k)
                    : (a["code-block"] = !!k)),
                (d !== i.ScriptType.Sub && i.ScriptType.Super !== d) ||
                  (a.script = d),
                (f !== i.ListType.Bullet &&
                  f !== i.ListType.Ordered &&
                  f !== i.ListType.Checked &&
                  f !== i.ListType.Unchecked) ||
                  (a.list = f),
                Number(g) && (a.header = Math.min(Number(g), 6)),
                o.find(
                  [
                    i.AlignType.Center,
                    i.AlignType.Right,
                    i.AlignType.Justify,
                    i.AlignType.Left,
                  ],
                  function (t) {
                    return t === m;
                  },
                ) && (a.align = m),
                y === i.DirectionType.Rtl && (a.direction = y),
                v && Number(v) && (a.indent = Math.min(Number(v), 30)),
                b && A)
              ) {
                var E = r.MentionSanitizer.sanitize(A, n);
                Object.keys(E).length > 0 &&
                  ((a.mentions = !!b), (a.mention = A));
              }
              return Object.keys(e).reduce(function (t, n) {
                return -1 === S.indexOf(n) && (t[n] = e[n]), t;
              }, a);
            }),
            (t.IsValidHexColor = function (t) {
              return !!t.match(/^#([0-9A-F]{6}|[0-9A-F]{3})$/i);
            }),
            (t.IsValidColorLiteral = function (t) {
              return !!t.match(/^[a-z]{1,50}$/i);
            }),
            (t.IsValidRGBColor = function (t) {
              return !!t.match(
                /^rgb\(((0|25[0-5]|2[0-4]\d|1\d\d|0?\d?\d),\s*){2}(0|25[0-5]|2[0-4]\d|1\d\d|0?\d?\d)\)$/i,
              );
            }),
            (t.IsValidFontName = function (t) {
              return !!t.match(/^[a-z\s0-9\- ]{1,30}$/i);
            }),
            (t.IsValidSize = function (t) {
              return !!t.match(/^[a-z0-9\-]{1,20}$/i);
            }),
            (t.IsValidWidth = function (t) {
              return !!t.match(/^[0-9]*(px|em|%)?$/);
            }),
            (t.isValidTarget = function (t) {
              return !!t.match(/^[_a-zA-Z0-9\-]{1,50}$/);
            }),
            (t.IsValidRel = function (t) {
              return !!t.match(/^[a-zA-Z\s\-]{1,250}$/i);
            }),
            (t.IsValidLang = function (t) {
              return (
                "boolean" == typeof t ||
                !!t.match(/^[a-zA-Z\s\-\\\/\+]{1,50}$/i)
              );
            }),
            t
          );
        })();
      e.OpAttributeSanitizer = a;
    },
    65195: function (t, e, n) {
      "use strict";
      var i =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return (e.default = t), e;
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = i(n(51579)),
        o = n(18410),
        s = (function () {
          function t() {}
          return (
            (t.sanitize = function (t, e) {
              var n = function () {};
              e && "function" == typeof e.urlSanitizer && (n = e.urlSanitizer);
              var i = n(t);
              return "string" == typeof i ? i : o.encodeLink(r.sanitize(t));
            }),
            t
          );
        })();
      e.OpLinkSanitizer = s;
    },
    37924: function (t, e, n) {
      "use strict";
      var i =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return (e.default = t), e;
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(18410),
        o = n(45374),
        s = i(n(53140)),
        a = i(n(82935)),
        u = n(43097),
        c = {
          serif: "font-family: Georgia, Times New Roman, serif",
          monospace: "font-family: Monaco, Courier New, monospace",
        };
      e.DEFAULT_INLINE_STYLES = {
        font: function (t) {
          return c[t] || "font-family:" + t;
        },
        size: {
          small: "font-size: 0.75em",
          large: "font-size: 1.5em",
          huge: "font-size: 2.5em",
        },
        indent: function (t, e) {
          var n = 3 * parseInt(t, 10);
          return (
            "padding-" +
            ("rtl" === e.attributes.direction ? "right" : "left") +
            ":" +
            n +
            "em"
          );
        },
        direction: function (t, e) {
          return "rtl" === t
            ? "direction:rtl" +
                (e.attributes.align ? "" : "; text-align:inherit")
            : void 0;
        },
      };
      var l = (function () {
        function t(t, e) {
          (this.op = t),
            (this.options = s.assign(
              {},
              {
                classPrefix: "ql",
                inlineStyles: void 0,
                encodeHtml: !0,
                listItemTag: "li",
                paragraphTag: "p",
              },
              e,
            ));
        }
        return (
          (t.prototype.prefixClass = function (t) {
            return this.options.classPrefix
              ? this.options.classPrefix + "-" + t
              : t + "";
          }),
          (t.prototype.getHtml = function () {
            var t = this.getHtmlParts();
            return t.openingTag + t.content + t.closingTag;
          }),
          (t.prototype.getHtmlParts = function () {
            var t = this;
            if (this.op.isJustNewline() && !this.op.isContainerBlock())
              return { openingTag: "", closingTag: "", content: o.NewLine };
            var e = this.getTags(),
              n = this.getTagAttributes();
            !e.length && n.length && e.push("span");
            for (
              var i = [],
                s = [],
                a = function (e) {
                  return "img" === e && !!t.op.attributes.link;
                },
                u = 0,
                c = e;
              u < c.length;
              u++
            ) {
              var l = c[u];
              a(l) && i.push(r.makeStartTag("a", this.getLinkAttrs())),
                i.push(r.makeStartTag(l, n)),
                s.push("img" === l ? "" : r.makeEndTag(l)),
                a(l) && s.push(r.makeEndTag("a")),
                (n = []);
            }
            return (
              s.reverse(),
              {
                openingTag: i.join(""),
                content: this.getContent(),
                closingTag: s.join(""),
              }
            );
          }),
          (t.prototype.getContent = function () {
            if (this.op.isContainerBlock()) return "";
            if (this.op.isMentions()) return this.op.insert.value;
            var t =
              this.op.isFormula() || this.op.isText()
                ? this.op.insert.value
                : "";
            return (this.options.encodeHtml && r.encodeHtml(t)) || t;
          }),
          (t.prototype.getCssClasses = function () {
            var t = this.op.attributes;
            if (this.options.inlineStyles) return [];
            var e = ["indent", "align", "direction", "font", "size"];
            return (
              this.options.allowBackgroundClasses && e.push("background"),
              (this.getCustomCssClasses() || []).concat(
                e
                  .filter(function (e) {
                    return !!t[e];
                  })
                  .filter(function (e) {
                    return (
                      "background" !== e ||
                      u.OpAttributeSanitizer.IsValidColorLiteral(t[e])
                    );
                  })
                  .map(function (e) {
                    return e + "-" + t[e];
                  })
                  .concat(this.op.isFormula() ? "formula" : [])
                  .concat(this.op.isVideo() ? "video" : [])
                  .concat(this.op.isImage() ? "image" : [])
                  .map(this.prefixClass.bind(this)),
              )
            );
          }),
          (t.prototype.getCssStyles = function () {
            var t = this,
              n = this.op.attributes,
              i = [["color"]];
            return (
              (!this.options.inlineStyles &&
                this.options.allowBackgroundClasses) ||
                i.push(["background", "background-color"]),
              this.options.inlineStyles &&
                (i = i.concat([
                  ["indent"],
                  ["align", "text-align"],
                  ["direction"],
                  ["font", "font-family"],
                  ["size"],
                ])),
              (this.getCustomCssStyles() || [])
                .concat(
                  i
                    .filter(function (t) {
                      return !!n[t[0]];
                    })
                    .map(function (i) {
                      var r = i[0],
                        o = n[r],
                        s =
                          (t.options.inlineStyles &&
                            t.options.inlineStyles[r]) ||
                          e.DEFAULT_INLINE_STYLES[r];
                      return "object" == typeof s
                        ? s[o]
                        : "function" == typeof s
                          ? s(o, t.op)
                          : a.preferSecond(i) + ":" + o;
                    }),
                )
                .filter(function (t) {
                  return void 0 !== t;
                })
            );
          }),
          (t.prototype.getTagAttributes = function () {
            if (this.op.attributes.code && !this.op.isLink()) return [];
            var t = this.makeAttr.bind(this),
              e = this.getCustomTagAttributes(),
              n = e
                ? Object.keys(this.getCustomTagAttributes()).map(function (n) {
                    return t(n, e[n]);
                  })
                : [],
              i = this.getCssClasses(),
              r = i.length ? n.concat([t("class", i.join(" "))]) : n;
            if (this.op.isImage())
              return (
                this.op.attributes.width &&
                  (r = r.concat(t("width", this.op.attributes.width))),
                r.concat(t("src", this.op.insert.value))
              );
            if (this.op.isACheckList())
              return r.concat(
                t("data-checked", this.op.isCheckedList() ? "true" : "false"),
              );
            if (this.op.isFormula()) return r;
            if (this.op.isVideo())
              return r.concat(
                t("frameborder", "0"),
                t("allowfullscreen", "true"),
                t("src", this.op.insert.value),
              );
            if (this.op.isMentions()) {
              var o = this.op.attributes.mention;
              return (
                o.class && (r = r.concat(t("class", o.class))),
                (r =
                  o["end-point"] && o.slug
                    ? r.concat(t("href", o["end-point"] + "/" + o.slug))
                    : r.concat(t("href", "about:blank"))),
                o.target && (r = r.concat(t("target", o.target))),
                r
              );
            }
            var s = this.getCssStyles();
            return (
              s.length && r.push(t("style", s.join(";"))),
              this.op.isCodeBlock() &&
              "string" == typeof this.op.attributes["code-block"]
                ? r.concat(t("data-language", this.op.attributes["code-block"]))
                : (this.op.isContainerBlock() ||
                    (this.op.isLink() && (r = r.concat(this.getLinkAttrs()))),
                  r)
            );
          }),
          (t.prototype.makeAttr = function (t, e) {
            return { key: t, value: e };
          }),
          (t.prototype.getLinkAttrs = function () {
            var t = u.OpAttributeSanitizer.isValidTarget(
                this.options.linkTarget || "",
              )
                ? this.options.linkTarget
                : void 0,
              e = u.OpAttributeSanitizer.IsValidRel(this.options.linkRel || "")
                ? this.options.linkRel
                : void 0,
              n = this.op.attributes.target || t,
              i = this.op.attributes.rel || e;
            return []
              .concat(this.makeAttr("href", this.op.attributes.link))
              .concat(n ? this.makeAttr("target", n) : [])
              .concat(i ? this.makeAttr("rel", i) : []);
          }),
          (t.prototype.getCustomTag = function (t) {
            if (
              this.options.customTag &&
              "function" == typeof this.options.customTag
            )
              return this.options.customTag.apply(null, [t, this.op]);
          }),
          (t.prototype.getCustomTagAttributes = function () {
            if (
              this.options.customTagAttributes &&
              "function" == typeof this.options.customTagAttributes
            )
              return this.options.customTagAttributes.apply(null, [this.op]);
          }),
          (t.prototype.getCustomCssClasses = function () {
            if (
              this.options.customCssClasses &&
              "function" == typeof this.options.customCssClasses
            ) {
              var t = this.options.customCssClasses.apply(null, [this.op]);
              if (t) return Array.isArray(t) ? t : [t];
            }
          }),
          (t.prototype.getCustomCssStyles = function () {
            if (
              this.options.customCssStyles &&
              "function" == typeof this.options.customCssStyles
            ) {
              var t = this.options.customCssStyles.apply(null, [this.op]);
              if (t) return Array.isArray(t) ? t : [t];
            }
          }),
          (t.prototype.getTags = function () {
            var t = this,
              e = this.op.attributes;
            if (!this.op.isText())
              return [
                this.op.isVideo()
                  ? "iframe"
                  : this.op.isImage()
                    ? "img"
                    : "span",
              ];
            for (
              var n = this.options.paragraphTag || "p",
                i = 0,
                r = [
                  ["blockquote"],
                  ["code-block", "pre"],
                  ["list", this.options.listItemTag],
                  ["header"],
                  ["align", n],
                  ["direction", n],
                  ["indent", n],
                ];
              i < r.length;
              i++
            ) {
              var s,
                u = r[i],
                c = u[0];
              if (e[c])
                return (s = this.getCustomTag(c))
                  ? [s]
                  : "header" === c
                    ? ["h" + e[c]]
                    : [a.preferSecond(u)];
            }
            if (this.op.isCustomTextBlock())
              return (s = this.getCustomTag("renderAsBlock")) ? [s] : [n];
            var l = Object.keys(e).reduce(function (e, n) {
                var i = t.getCustomTag(n);
                return i && (e[n] = i), e;
              }, {}),
              h = [
                ["link", "a"],
                ["mentions", "a"],
                ["script"],
                ["bold", "strong"],
                ["italic", "em"],
                ["strike", "s"],
                ["underline", "u"],
                ["code"],
              ];
            return h
              .filter(function (t) {
                return !!e[t[0]];
              })
              .concat(
                Object.keys(l)
                  .filter(function (t) {
                    return !h.some(function (e) {
                      return e[0] == t;
                    });
                  })
                  .map(function (t) {
                    return [t, l[t]];
                  }),
              )
              .map(function (t) {
                return l[t[0]]
                  ? l[t[0]]
                  : "script" === t[0]
                    ? e[t[0]] === o.ScriptType.Sub
                      ? "sub"
                      : "sup"
                    : a.preferSecond(t);
              });
          }),
          t
        );
      })();
      e.OpToHtmlConverter = l;
    },
    94722: function (t, e, n) {
      "use strict";
      var i =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return (e.default = t), e;
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(50204),
        o = n(37924),
        s = n(92546),
        a = n(91510),
        u = n(92949),
        c = n(18410),
        l = i(n(53140)),
        h = n(45374),
        p = n(12716),
        d = "<br/>",
        f = (function () {
          function t(t, e) {
            var n;
            (this.rawDeltaOps = []),
              (this.callbacks = {}),
              (this.options = l.assign(
                {
                  paragraphTag: "p",
                  encodeHtml: !0,
                  classPrefix: "ql",
                  inlineStyles: !1,
                  multiLineBlockquote: !0,
                  multiLineHeader: !0,
                  multiLineCodeblock: !0,
                  multiLineParagraph: !0,
                  multiLineCustomBlock: !0,
                  allowBackgroundClasses: !1,
                  linkTarget: "_blank",
                },
                e,
                {
                  orderedListTag: "ol",
                  bulletListTag: "ul",
                  listItemTag: "li",
                },
              )),
              (n = this.options.inlineStyles
                ? "object" == typeof this.options.inlineStyles
                  ? this.options.inlineStyles
                  : {}
                : void 0),
              (this.converterOptions = {
                encodeHtml: this.options.encodeHtml,
                classPrefix: this.options.classPrefix,
                inlineStyles: n,
                listItemTag: this.options.listItemTag,
                paragraphTag: this.options.paragraphTag,
                linkRel: this.options.linkRel,
                linkTarget: this.options.linkTarget,
                allowBackgroundClasses: this.options.allowBackgroundClasses,
                customTag: this.options.customTag,
                customTagAttributes: this.options.customTagAttributes,
                customCssClasses: this.options.customCssClasses,
                customCssStyles: this.options.customCssStyles,
              }),
              (this.rawDeltaOps = t);
          }
          return (
            (t.prototype._getListTag = function (t) {
              return t.isOrderedList()
                ? this.options.orderedListTag + ""
                : t.isBulletList() || t.isCheckedList() || t.isUncheckedList()
                  ? this.options.bulletListTag + ""
                  : "";
            }),
            (t.prototype.getGroupedOps = function () {
              var t = r.InsertOpsConverter.convert(
                  this.rawDeltaOps,
                  this.options,
                ),
                e = s.Grouper.pairOpsWithTheirBlock(t),
                n = s.Grouper.groupConsecutiveSameStyleBlocks(e, {
                  blockquotes: !!this.options.multiLineBlockquote,
                  header: !!this.options.multiLineHeader,
                  codeBlocks: !!this.options.multiLineCodeblock,
                  customBlocks: !!this.options.multiLineCustomBlock,
                }),
                i = s.Grouper.reduceConsecutiveSameStyleBlocksToOne(n);
              return (
                (i = new p.TableGrouper().group(i)), new u.ListNester().nest(i)
              );
            }),
            (t.prototype.convert = function () {
              var t = this;
              return this.getGroupedOps()
                .map(function (e) {
                  if (e instanceof a.ListGroup)
                    return t._renderWithCallbacks(
                      h.GroupType.List,
                      e,
                      function () {
                        return t._renderList(e);
                      },
                    );
                  if (e instanceof a.TableGroup)
                    return t._renderWithCallbacks(
                      h.GroupType.Table,
                      e,
                      function () {
                        return t._renderTable(e);
                      },
                    );
                  if (e instanceof a.BlockGroup) {
                    var n = e;
                    return t._renderWithCallbacks(
                      h.GroupType.Block,
                      e,
                      function () {
                        return t._renderBlock(n.op, n.ops);
                      },
                    );
                  }
                  return e instanceof a.BlotBlock
                    ? t._renderCustom(e.op, null)
                    : e instanceof a.VideoItem
                      ? t._renderWithCallbacks(
                          h.GroupType.Video,
                          e,
                          function () {
                            var n = e;
                            return new o.OpToHtmlConverter(
                              n.op,
                              t.converterOptions,
                            ).getHtml();
                          },
                        )
                      : t._renderWithCallbacks(
                          h.GroupType.InlineGroup,
                          e,
                          function () {
                            return t._renderInlines(e.ops, !0);
                          },
                        );
                })
                .join("");
            }),
            (t.prototype._renderWithCallbacks = function (t, e, n) {
              var i = "",
                r = this.callbacks.beforeRender_cb;
              (i = "function" == typeof r ? r.apply(null, [t, e]) : "") ||
                (i = n());
              var o = this.callbacks.afterRender_cb;
              return (i = "function" == typeof o ? o.apply(null, [t, i]) : i);
            }),
            (t.prototype._renderList = function (t) {
              var e = this,
                n = t.items[0];
              return (
                c.makeStartTag(this._getListTag(n.item.op)) +
                t.items
                  .map(function (t) {
                    return e._renderListItem(t);
                  })
                  .join("") +
                c.makeEndTag(this._getListTag(n.item.op))
              );
            }),
            (t.prototype._renderListItem = function (t) {
              t.item.op.attributes.indent = 0;
              var e = new o.OpToHtmlConverter(
                  t.item.op,
                  this.converterOptions,
                ).getHtmlParts(),
                n = this._renderInlines(t.item.ops, !1);
              return (
                e.openingTag +
                n +
                (t.innerList ? this._renderList(t.innerList) : "") +
                e.closingTag
              );
            }),
            (t.prototype._renderTable = function (t) {
              var e = this;
              return (
                c.makeStartTag("table") +
                c.makeStartTag("tbody") +
                t.rows
                  .map(function (t) {
                    return e._renderTableRow(t);
                  })
                  .join("") +
                c.makeEndTag("tbody") +
                c.makeEndTag("table")
              );
            }),
            (t.prototype._renderTableRow = function (t) {
              var e = this;
              return (
                c.makeStartTag("tr") +
                t.cells
                  .map(function (t) {
                    return e._renderTableCell(t);
                  })
                  .join("") +
                c.makeEndTag("tr")
              );
            }),
            (t.prototype._renderTableCell = function (t) {
              var e = new o.OpToHtmlConverter(
                  t.item.op,
                  this.converterOptions,
                ).getHtmlParts(),
                n = this._renderInlines(t.item.ops, !1);
              return (
                c.makeStartTag("td", {
                  key: "data-row",
                  value: t.item.op.attributes.table,
                }) +
                e.openingTag +
                n +
                e.closingTag +
                c.makeEndTag("td")
              );
            }),
            (t.prototype._renderBlock = function (t, e) {
              var n = this,
                i = new o.OpToHtmlConverter(
                  t,
                  this.converterOptions,
                ).getHtmlParts();
              if (t.isCodeBlock())
                return (
                  i.openingTag +
                  c.encodeHtml(
                    e
                      .map(function (e) {
                        return e.isCustomEmbed()
                          ? n._renderCustom(e, t)
                          : e.insert.value;
                      })
                      .join(""),
                  ) +
                  i.closingTag
                );
              var r = e
                .map(function (e) {
                  return n._renderInline(e, t);
                })
                .join("");
              return i.openingTag + (r || d) + i.closingTag;
            }),
            (t.prototype._renderInlines = function (t, e) {
              var n = this;
              void 0 === e && (e = !0);
              var i = t.length - 1,
                r = t
                  .map(function (t, e) {
                    return e > 0 && e === i && t.isJustNewline()
                      ? ""
                      : n._renderInline(t, null);
                  })
                  .join("");
              if (!e) return r;
              var o = c.makeStartTag(this.options.paragraphTag),
                s = c.makeEndTag(this.options.paragraphTag);
              return r === d || this.options.multiLineParagraph
                ? o + r + s
                : o +
                    r
                      .split(d)
                      .map(function (t) {
                        return "" === t ? d : t;
                      })
                      .join(s + o) +
                    s;
            }),
            (t.prototype._renderInline = function (t, e) {
              return t.isCustomEmbed()
                ? this._renderCustom(t, e)
                : new o.OpToHtmlConverter(t, this.converterOptions)
                    .getHtml()
                    .replace(/\n/g, d);
            }),
            (t.prototype._renderCustom = function (t, e) {
              var n = this.callbacks.renderCustomOp_cb;
              return "function" == typeof n ? n.apply(null, [t, e]) : "";
            }),
            (t.prototype.beforeRender = function (t) {
              "function" == typeof t && (this.callbacks.beforeRender_cb = t);
            }),
            (t.prototype.afterRender = function (t) {
              "function" == typeof t && (this.callbacks.afterRender_cb = t);
            }),
            (t.prototype.renderCustomWith = function (t) {
              this.callbacks.renderCustomOp_cb = t;
            }),
            t
          );
        })();
      e.QuillDeltaToHtmlConverter = f;
    },
    18410: (t, e) => {
      "use strict";
      var n;
      function i(t) {
        return r(n.Html).reduce(s, t);
      }
      function r(t) {
        var e = [
          ["&", "&amp;"],
          ["<", "&lt;"],
          [">", "&gt;"],
          ['"', "&quot;"],
          ["'", "&#x27;"],
          ["\\/", "&#x2F;"],
          ["\\(", "&#40;"],
          ["\\)", "&#41;"],
        ];
        return t === n.Html
          ? e.filter(function (t) {
              var e = t[0];
              t[1];
              return -1 === e.indexOf("(") && -1 === e.indexOf(")");
            })
          : e.filter(function (t) {
              var e = t[0];
              t[1];
              return -1 === e.indexOf("/");
            });
      }
      function o(t, e) {
        return t.replace(new RegExp(e[0], "g"), e[1]);
      }
      function s(t, e) {
        return t.replace(new RegExp(e[1], "g"), e[0].replace("\\", ""));
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t) {
          (t[(t.Html = 0)] = "Html"), (t[(t.Url = 1)] = "Url");
        })(n || (n = {})),
        (e.makeStartTag = function (t, e) {
          if ((void 0 === e && (e = void 0), !t)) return "";
          var n = "";
          e &&
            (n = []
              .concat(e)
              .map(function (t) {
                return t.key + (t.value ? '="' + t.value + '"' : "");
              })
              .join(" "));
          var i = ">";
          return (
            ("img" !== t && "br" !== t) || (i = "/>"),
            n ? "<" + t + " " + n + i : "<" + t + i
          );
        }),
        (e.makeEndTag = function (t) {
          return void 0 === t && (t = ""), (t && "</" + t + ">") || "";
        }),
        (e.decodeHtml = i),
        (e.encodeHtml = function (t, e) {
          return (
            void 0 === e && (e = !0), e && (t = i(t)), r(n.Html).reduce(o, t)
          );
        }),
        (e.encodeLink = function (t) {
          var e = r(n.Url),
            i = e.reduce(s, t);
          return e.reduce(o, i);
        });
    },
    92546: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(65614),
        r = n(82935),
        o = n(91510),
        s = (function () {
          function t() {}
          return (
            (t.pairOpsWithTheirBlock = function (t) {
              for (
                var e,
                  n = [],
                  i = function (t) {
                    return !(
                      t.isJustNewline() ||
                      t.isCustomEmbedBlock() ||
                      t.isVideo() ||
                      t.isContainerBlock()
                    );
                  },
                  s = function (t) {
                    return t.isInline();
                  },
                  a = t.length - 1;
                a >= 0;
                a--
              ) {
                var u = t[a];
                u.isVideo()
                  ? n.push(new o.VideoItem(u))
                  : u.isCustomEmbedBlock()
                    ? n.push(new o.BlotBlock(u))
                    : u.isContainerBlock()
                      ? ((e = r.sliceFromReverseWhile(t, a - 1, i)),
                        n.push(new o.BlockGroup(u, e.elements)),
                        (a = e.sliceStartsAt > -1 ? e.sliceStartsAt : a))
                      : ((e = r.sliceFromReverseWhile(t, a - 1, s)),
                        n.push(new o.InlineGroup(e.elements.concat(u))),
                        (a = e.sliceStartsAt > -1 ? e.sliceStartsAt : a));
              }
              return n.reverse(), n;
            }),
            (t.groupConsecutiveSameStyleBlocks = function (e, n) {
              return (
                void 0 === n &&
                  (n = {
                    header: !0,
                    codeBlocks: !0,
                    blockquotes: !0,
                    customBlocks: !0,
                  }),
                r.groupConsecutiveElementsWhile(e, function (e, i) {
                  return (
                    e instanceof o.BlockGroup &&
                    i instanceof o.BlockGroup &&
                    ((n.codeBlocks && t.areBothCodeblocksWithSameLang(e, i)) ||
                      (n.blockquotes &&
                        t.areBothBlockquotesWithSameAdi(e, i)) ||
                      (n.header && t.areBothSameHeadersWithSameAdi(e, i)) ||
                      (n.customBlocks &&
                        t.areBothCustomBlockWithSameAttr(e, i)))
                  );
                })
              );
            }),
            (t.reduceConsecutiveSameStyleBlocksToOne = function (t) {
              var e = i.DeltaInsertOp.createNewLineOp();
              return t.map(function (t) {
                if (!Array.isArray(t))
                  return (
                    t instanceof o.BlockGroup && !t.ops.length && t.ops.push(e),
                    t
                  );
                var n = t.length - 1;
                return (
                  (t[0].ops = r.flatten(
                    t.map(function (t, i) {
                      return t.ops.length
                        ? t.ops.concat(i < n ? [e] : [])
                        : [e];
                    }),
                  )),
                  t[0]
                );
              });
            }),
            (t.areBothCodeblocksWithSameLang = function (t, e) {
              return (
                t.op.isCodeBlock() &&
                e.op.isCodeBlock() &&
                t.op.hasSameLangAs(e.op)
              );
            }),
            (t.areBothSameHeadersWithSameAdi = function (t, e) {
              return t.op.isSameHeaderAs(e.op) && t.op.hasSameAdiAs(e.op);
            }),
            (t.areBothBlockquotesWithSameAdi = function (t, e) {
              return (
                t.op.isBlockquote() &&
                e.op.isBlockquote() &&
                t.op.hasSameAdiAs(e.op)
              );
            }),
            (t.areBothCustomBlockWithSameAttr = function (t, e) {
              return (
                t.op.isCustomTextBlock() &&
                e.op.isCustomTextBlock() &&
                t.op.hasSameAttr(e.op)
              );
            }),
            t
          );
        })();
      e.Grouper = s;
    },
    92949: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(91510),
        r = n(82935),
        o = (function () {
          function t() {}
          return (
            (t.prototype.nest = function (t) {
              var e = this,
                n = this.convertListBlocksToListGroups(t),
                o = this.groupConsecutiveListGroups(n),
                s = r.flatten(
                  o.map(function (t) {
                    return Array.isArray(t) ? e.nestListSection(t) : t;
                  }),
                );
              return r
                .groupConsecutiveElementsWhile(s, function (t, e) {
                  return (
                    t instanceof i.ListGroup &&
                    e instanceof i.ListGroup &&
                    t.items[0].item.op.isSameListAs(e.items[0].item.op)
                  );
                })
                .map(function (t) {
                  if (!Array.isArray(t)) return t;
                  var e = t.map(function (t) {
                    return t.items;
                  });
                  return new i.ListGroup(r.flatten(e));
                });
            }),
            (t.prototype.convertListBlocksToListGroups = function (t) {
              return r
                .groupConsecutiveElementsWhile(t, function (t, e) {
                  return (
                    t instanceof i.BlockGroup &&
                    e instanceof i.BlockGroup &&
                    t.op.isList() &&
                    e.op.isList() &&
                    t.op.isSameListAs(e.op) &&
                    t.op.hasSameIndentationAs(e.op)
                  );
                })
                .map(function (t) {
                  return Array.isArray(t)
                    ? new i.ListGroup(
                        t.map(function (t) {
                          return new i.ListItem(t);
                        }),
                      )
                    : t instanceof i.BlockGroup && t.op.isList()
                      ? new i.ListGroup([new i.ListItem(t)])
                      : t;
                });
            }),
            (t.prototype.groupConsecutiveListGroups = function (t) {
              return r.groupConsecutiveElementsWhile(t, function (t, e) {
                return t instanceof i.ListGroup && e instanceof i.ListGroup;
              });
            }),
            (t.prototype.nestListSection = function (t) {
              var e = this,
                n = this.groupByIndent(t);
              return (
                Object.keys(n)
                  .map(Number)
                  .sort()
                  .reverse()
                  .forEach(function (i) {
                    n[i].forEach(function (n) {
                      var i = t.indexOf(n);
                      e.placeUnderParent(n, t.slice(0, i)) && t.splice(i, 1);
                    });
                  }),
                t
              );
            }),
            (t.prototype.groupByIndent = function (t) {
              return t.reduce(function (t, e) {
                var n = e.items[0].item.op.attributes.indent;
                return n && ((t[n] = t[n] || []), t[n].push(e)), t;
              }, {});
            }),
            (t.prototype.placeUnderParent = function (t, e) {
              for (var n = e.length - 1; n >= 0; n--) {
                var i = e[n];
                if (
                  t.items[0].item.op.hasHigherIndentThan(i.items[0].item.op)
                ) {
                  var r = i.items[i.items.length - 1];
                  return (
                    r.innerList
                      ? (r.innerList.items = r.innerList.items.concat(t.items))
                      : (r.innerList = t),
                    !0
                  );
                }
              }
              return !1;
            }),
            t
          );
        })();
      e.ListNester = o;
    },
    12716: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(91510),
        r = n(82935),
        o = (function () {
          function t() {}
          return (
            (t.prototype.group = function (t) {
              return this.convertTableBlocksToTableGroups(t);
            }),
            (t.prototype.convertTableBlocksToTableGroups = function (t) {
              var e = this;
              return r
                .groupConsecutiveElementsWhile(t, function (t, e) {
                  return (
                    t instanceof i.BlockGroup &&
                    e instanceof i.BlockGroup &&
                    t.op.isTable() &&
                    e.op.isTable()
                  );
                })
                .map(function (t) {
                  return Array.isArray(t)
                    ? new i.TableGroup(e.convertTableBlocksToTableRows(t))
                    : t instanceof i.BlockGroup && t.op.isTable()
                      ? new i.TableGroup([new i.TableRow([new i.TableCell(t)])])
                      : t;
                });
            }),
            (t.prototype.convertTableBlocksToTableRows = function (t) {
              return r
                .groupConsecutiveElementsWhile(t, function (t, e) {
                  return (
                    t instanceof i.BlockGroup &&
                    e instanceof i.BlockGroup &&
                    t.op.isTable() &&
                    e.op.isTable() &&
                    t.op.isSameTableRowAs(e.op)
                  );
                })
                .map(function (t) {
                  return new i.TableRow(
                    Array.isArray(t)
                      ? t.map(function (t) {
                          return new i.TableCell(t);
                        })
                      : [new i.TableCell(t)],
                  );
                });
            }),
            t
          );
        })();
      e.TableGrouper = o;
    },
    91510: function (t, e) {
      "use strict";
      var n,
        i =
          (this && this.__extends) ||
          ((n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            }),
          function (t, e) {
            function i() {
              this.constructor = t;
            }
            n(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((i.prototype = e.prototype), new i()));
          });
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = function (t) {
        this.ops = t;
      };
      e.InlineGroup = r;
      var o = function (t) {
          this.op = t;
        },
        s = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return i(e, t), e;
        })(o);
      e.VideoItem = s;
      var a = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return i(e, t), e;
      })(o);
      e.BlotBlock = a;
      var u = function (t, e) {
        (this.op = t), (this.ops = e);
      };
      e.BlockGroup = u;
      var c = function (t) {
        this.items = t;
      };
      e.ListGroup = c;
      var l = function (t, e) {
        void 0 === e && (e = null), (this.item = t), (this.innerList = e);
      };
      e.ListItem = l;
      var h = function (t) {
        this.rows = t;
      };
      e.TableGroup = h;
      var p = function (t) {
        this.cells = t;
      };
      e.TableRow = p;
      var d = function (t) {
        this.item = t;
      };
      e.TableCell = d;
    },
    82935: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.preferSecond = function (t) {
          return 0 === t.length ? null : t.length >= 2 ? t[1] : t[0];
        }),
        (e.flatten = function t(e) {
          return e.reduce(function (e, n) {
            return e.concat(Array.isArray(n) ? t(n) : n);
          }, []);
        }),
        (e.find = function (t, e) {
          if (Array.prototype.find) return Array.prototype.find.call(t, e);
          for (var n = 0; n < t.length; n++) if (e(t[n])) return t[n];
        }),
        (e.groupConsecutiveElementsWhile = function (t, e) {
          for (var n, i = [], r = 0; r < t.length; r++)
            (n = t[r]),
              r > 0 && e(n, t[r - 1]) ? i[i.length - 1].push(n) : i.push([n]);
          return i.map(function (t) {
            return 1 === t.length ? t[0] : t;
          });
        }),
        (e.sliceFromReverseWhile = function (t, e, n) {
          for (
            var i = { elements: [], sliceStartsAt: -1 }, r = e;
            r >= 0 && n(t[r]);
            r--
          )
            (i.sliceStartsAt = r), i.elements.unshift(t[r]);
          return i;
        }),
        (e.intersperse = function (t, e) {
          return t.reduce(function (n, i, r) {
            return n.push(i), r < t.length - 1 && n.push(e), n;
          }, []);
        });
    },
    53140: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.assign = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          if (null == t)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var i = Object(t), r = 0; r < e.length; r++) {
            var o = e[r];
            if (null != o)
              for (var s in o)
                Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
          }
          return i;
        });
    },
    932: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.tokenizeWithNewLines = function (t) {
          var e = "\n";
          if (t === e) return [t];
          var n = t.split(e);
          if (1 === n.length) return n;
          var i = n.length - 1;
          return n.reduce(function (t, n, r) {
            return (
              r !== i
                ? "" !== n
                  ? (t = t.concat(n, e))
                  : t.push(e)
                : "" !== n && t.push(n),
              t
            );
          }, []);
        });
    },
    51579: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.sanitize = function (t) {
          var e = t;
          return (
            (e = e.replace(/^\s*/gm, "")),
            /^((https?|s?ftp|file|blob|mailto|tel):|#|\/|data:image\/)/.test(e)
              ? e
              : "unsafe:" + e
          );
        });
    },
    88554: (t, e, n) => {
      "use strict";
      var i = n(94722);
      (e.bc = i.QuillDeltaToHtmlConverter), n(37924).OpToHtmlConverter;
      var r = n(91510);
      r.InlineGroup,
        r.VideoItem,
        r.BlockGroup,
        r.ListGroup,
        r.ListItem,
        r.BlotBlock,
        n(65614).DeltaInsertOp;
      var o = n(86176);
      o.InsertDataQuill, o.InsertDataCustom;
      var s = n(45374);
      s.NewLine,
        s.ListType,
        s.ScriptType,
        s.DirectionType,
        s.AlignType,
        s.DataType,
        s.GroupType;
    },
    89250: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(65195),
        r = (function () {
          function t() {}
          return (
            (t.sanitize = function (e, n) {
              var r = {};
              return e && "object" == typeof e
                ? (e.class && t.IsValidClass(e.class) && (r.class = e.class),
                  e.id && t.IsValidId(e.id) && (r.id = e.id),
                  t.IsValidTarget(e.target + "") && (r.target = e.target),
                  e.avatar &&
                    (r.avatar = i.OpLinkSanitizer.sanitize(e.avatar + "", n)),
                  e["end-point"] &&
                    (r["end-point"] = i.OpLinkSanitizer.sanitize(
                      e["end-point"] + "",
                      n,
                    )),
                  e.slug && (r.slug = e.slug + ""),
                  r)
                : r;
            }),
            (t.IsValidClass = function (t) {
              return !!t.match(/^[a-zA-Z0-9_\-]{1,500}$/i);
            }),
            (t.IsValidId = function (t) {
              return !!t.match(/^[a-zA-Z0-9_\-\:\.]{1,500}$/i);
            }),
            (t.IsValidTarget = function (t) {
              return ["_self", "_blank", "_parent", "_top"].indexOf(t) > -1;
            }),
            t
          );
        })();
      e.MentionSanitizer = r;
    },
    45374: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n, i, r, o, s, a;
      (e.NewLine = "\n"),
        (function (t) {
          (t.Ordered = "ordered"),
            (t.Bullet = "bullet"),
            (t.Checked = "checked"),
            (t.Unchecked = "unchecked");
        })(n || (n = {})),
        (e.ListType = n),
        (function (t) {
          (t.Sub = "sub"), (t.Super = "super");
        })(i || (i = {})),
        (e.ScriptType = i),
        (function (t) {
          t.Rtl = "rtl";
        })(r || (r = {})),
        (e.DirectionType = r),
        (function (t) {
          (t.Left = "left"),
            (t.Center = "center"),
            (t.Right = "right"),
            (t.Justify = "justify");
        })(o || (o = {})),
        (e.AlignType = o),
        (function (t) {
          (t.Image = "image"),
            (t.Video = "video"),
            (t.Formula = "formula"),
            (t.Text = "text");
        })(s || (s = {})),
        (e.DataType = s),
        (function (t) {
          (t.Block = "block"),
            (t.InlineGroup = "inline-group"),
            (t.List = "list"),
            (t.Video = "video"),
            (t.Table = "table");
        })(a || (a = {})),
        (e.GroupType = a);
    },
    84401: (t) => {
      t.exports = (function () {
        function t(e, n, i) {
          function r(s, a) {
            if (!n[s]) {
              if (!e[s]) {
                if (o) return o(s, !0);
                var u = new Error("Cannot find module '" + s + "'");
                throw ((u.code = "MODULE_NOT_FOUND"), u);
              }
              var c = (n[s] = { exports: {} });
              e[s][0].call(
                c.exports,
                function (t) {
                  return r(e[s][1][t] || t);
                },
                c,
                c.exports,
                t,
                e,
                n,
                i,
              );
            }
            return n[s].exports;
          }
          for (var o = void 0, s = 0; s < i.length; s++) r(i[s]);
          return r;
        }
        return t;
      })()(
        {
          1: [function (t, e, n) {}, {}],
          2: [
            function (t, e, n) {
              "use strict";
              var i = "[a-fA-F\\d:]",
                r = function (t) {
                  return t && t.includeBoundaries
                    ? "(?:(?<=\\s|^)(?="
                        .concat(i, ")|(?<=")
                        .concat(i, ")(?=\\s|$))")
                    : "";
                },
                o =
                  "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
                s = "[a-fA-F\\d]{1,4}",
                a = "\n(?:\n(?:"
                  .concat(s, ":){7}(?:")
                  .concat(
                    s,
                    "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:",
                  )
                  .concat(s, ":){6}(?:")
                  .concat(o, "|:")
                  .concat(
                    s,
                    "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:",
                  )
                  .concat(s, ":){5}(?::")
                  .concat(o, "|(?::")
                  .concat(
                    s,
                    "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:",
                  )
                  .concat(s, ":){4}(?:(?::")
                  .concat(s, "){0,1}:")
                  .concat(o, "|(?::")
                  .concat(
                    s,
                    "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:",
                  )
                  .concat(s, ":){3}(?:(?::")
                  .concat(s, "){0,2}:")
                  .concat(o, "|(?::")
                  .concat(
                    s,
                    "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:",
                  )
                  .concat(s, ":){2}(?:(?::")
                  .concat(s, "){0,3}:")
                  .concat(o, "|(?::")
                  .concat(
                    s,
                    "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:",
                  )
                  .concat(s, ":){1}(?:(?::")
                  .concat(s, "){0,4}:")
                  .concat(o, "|(?::")
                  .concat(
                    s,
                    "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::",
                  )
                  .concat(s, "){0,5}:")
                  .concat(o, "|(?::")
                  .concat(
                    s,
                    "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n",
                  )
                  .replace(/\s*\/\/.*$/gm, "")
                  .replace(/\n/g, "")
                  .trim(),
                u = new RegExp("(?:^".concat(o, "$)|(?:^").concat(a, "$)")),
                c = new RegExp("^".concat(o, "$")),
                l = new RegExp("^".concat(a, "$")),
                h = function (t) {
                  return t && t.exact
                    ? u
                    : new RegExp(
                        "(?:"
                          .concat(r(t))
                          .concat(o)
                          .concat(r(t), ")|(?:")
                          .concat(r(t))
                          .concat(a)
                          .concat(r(t), ")"),
                        "g",
                      );
                };
              (h.v4 = function (t) {
                return t && t.exact
                  ? c
                  : new RegExp("".concat(r(t)).concat(o).concat(r(t)), "g");
              }),
                (h.v6 = function (t) {
                  return t && t.exact
                    ? l
                    : new RegExp("".concat(r(t)).concat(a).concat(r(t)), "g");
                }),
                (e.exports = h);
            },
            {},
          ],
          3: [
            function (t, e, n) {
              e.exports = [
                "aaa",
                "aarp",
                "abarth",
                "abb",
                "abbott",
                "abbvie",
                "abc",
                "able",
                "abogado",
                "abudhabi",
                "ac",
                "academy",
                "accenture",
                "accountant",
                "accountants",
                "aco",
                "actor",
                "ad",
                "adac",
                "ads",
                "adult",
                "ae",
                "aeg",
                "aero",
                "aetna",
                "af",
                "afamilycompany",
                "afl",
                "africa",
                "ag",
                "agakhan",
                "agency",
                "ai",
                "aig",
                "airbus",
                "airforce",
                "airtel",
                "akdn",
                "al",
                "alfaromeo",
                "alibaba",
                "alipay",
                "allfinanz",
                "allstate",
                "ally",
                "alsace",
                "alstom",
                "am",
                "amazon",
                "americanexpress",
                "americanfamily",
                "amex",
                "amfam",
                "amica",
                "amsterdam",
                "analytics",
                "android",
                "anquan",
                "anz",
                "ao",
                "aol",
                "apartments",
                "app",
                "apple",
                "aq",
                "aquarelle",
                "ar",
                "arab",
                "aramco",
                "archi",
                "army",
                "arpa",
                "art",
                "arte",
                "as",
                "asda",
                "asia",
                "associates",
                "at",
                "athleta",
                "attorney",
                "au",
                "auction",
                "audi",
                "audible",
                "audio",
                "auspost",
                "author",
                "auto",
                "autos",
                "avianca",
                "aw",
                "aws",
                "ax",
                "axa",
                "az",
                "azure",
                "ba",
                "baby",
                "baidu",
                "banamex",
                "bananarepublic",
                "band",
                "bank",
                "bar",
                "barcelona",
                "barclaycard",
                "barclays",
                "barefoot",
                "bargains",
                "baseball",
                "basketball",
                "bauhaus",
                "bayern",
                "bb",
                "bbc",
                "bbt",
                "bbva",
                "bcg",
                "bcn",
                "bd",
                "be",
                "beats",
                "beauty",
                "beer",
                "bentley",
                "berlin",
                "best",
                "bestbuy",
                "bet",
                "bf",
                "bg",
                "bh",
                "bharti",
                "bi",
                "bible",
                "bid",
                "bike",
                "bing",
                "bingo",
                "bio",
                "biz",
                "bj",
                "black",
                "blackfriday",
                "blockbuster",
                "blog",
                "bloomberg",
                "blue",
                "bm",
                "bms",
                "bmw",
                "bn",
                "bnpparibas",
                "bo",
                "boats",
                "boehringer",
                "bofa",
                "bom",
                "bond",
                "boo",
                "book",
                "booking",
                "bosch",
                "bostik",
                "boston",
                "bot",
                "boutique",
                "box",
                "br",
                "bradesco",
                "bridgestone",
                "broadway",
                "broker",
                "brother",
                "brussels",
                "bs",
                "bt",
                "budapest",
                "bugatti",
                "build",
                "builders",
                "business",
                "buy",
                "buzz",
                "bv",
                "bw",
                "by",
                "bz",
                "bzh",
                "ca",
                "cab",
                "cafe",
                "cal",
                "call",
                "calvinklein",
                "cam",
                "camera",
                "camp",
                "cancerresearch",
                "canon",
                "capetown",
                "capital",
                "capitalone",
                "car",
                "caravan",
                "cards",
                "care",
                "career",
                "careers",
                "cars",
                "casa",
                "case",
                "caseih",
                "cash",
                "casino",
                "cat",
                "catering",
                "catholic",
                "cba",
                "cbn",
                "cbre",
                "cbs",
                "cc",
                "cd",
                "center",
                "ceo",
                "cern",
                "cf",
                "cfa",
                "cfd",
                "cg",
                "ch",
                "chanel",
                "channel",
                "charity",
                "chase",
                "chat",
                "cheap",
                "chintai",
                "christmas",
                "chrome",
                "church",
                "ci",
                "cipriani",
                "circle",
                "cisco",
                "citadel",
                "citi",
                "citic",
                "city",
                "cityeats",
                "ck",
                "cl",
                "claims",
                "cleaning",
                "click",
                "clinic",
                "clinique",
                "clothing",
                "cloud",
                "club",
                "clubmed",
                "cm",
                "cn",
                "co",
                "coach",
                "codes",
                "coffee",
                "college",
                "cologne",
                "com",
                "comcast",
                "commbank",
                "community",
                "company",
                "compare",
                "computer",
                "comsec",
                "condos",
                "construction",
                "consulting",
                "contact",
                "contractors",
                "cooking",
                "cookingchannel",
                "cool",
                "coop",
                "corsica",
                "country",
                "coupon",
                "coupons",
                "courses",
                "cpa",
                "cr",
                "credit",
                "creditcard",
                "creditunion",
                "cricket",
                "crown",
                "crs",
                "cruise",
                "cruises",
                "csc",
                "cu",
                "cuisinella",
                "cv",
                "cw",
                "cx",
                "cy",
                "cymru",
                "cyou",
                "cz",
                "dabur",
                "dad",
                "dance",
                "data",
                "date",
                "dating",
                "datsun",
                "day",
                "dclk",
                "dds",
                "de",
                "deal",
                "dealer",
                "deals",
                "degree",
                "delivery",
                "dell",
                "deloitte",
                "delta",
                "democrat",
                "dental",
                "dentist",
                "desi",
                "design",
                "dev",
                "dhl",
                "diamonds",
                "diet",
                "digital",
                "direct",
                "directory",
                "discount",
                "discover",
                "dish",
                "diy",
                "dj",
                "dk",
                "dm",
                "dnp",
                "do",
                "docs",
                "doctor",
                "dog",
                "domains",
                "dot",
                "download",
                "drive",
                "dtv",
                "dubai",
                "duck",
                "dunlop",
                "dupont",
                "durban",
                "dvag",
                "dvr",
                "dz",
                "earth",
                "eat",
                "ec",
                "eco",
                "edeka",
                "edu",
                "education",
                "ee",
                "eg",
                "email",
                "emerck",
                "energy",
                "engineer",
                "engineering",
                "enterprises",
                "epson",
                "equipment",
                "er",
                "ericsson",
                "erni",
                "es",
                "esq",
                "estate",
                "et",
                "etisalat",
                "eu",
                "eurovision",
                "eus",
                "events",
                "exchange",
                "expert",
                "exposed",
                "express",
                "extraspace",
                "fage",
                "fail",
                "fairwinds",
                "faith",
                "family",
                "fan",
                "fans",
                "farm",
                "farmers",
                "fashion",
                "fast",
                "fedex",
                "feedback",
                "ferrari",
                "ferrero",
                "fi",
                "fiat",
                "fidelity",
                "fido",
                "film",
                "final",
                "finance",
                "financial",
                "fire",
                "firestone",
                "firmdale",
                "fish",
                "fishing",
                "fit",
                "fitness",
                "fj",
                "fk",
                "flickr",
                "flights",
                "flir",
                "florist",
                "flowers",
                "fly",
                "fm",
                "fo",
                "foo",
                "food",
                "foodnetwork",
                "football",
                "ford",
                "forex",
                "forsale",
                "forum",
                "foundation",
                "fox",
                "fr",
                "free",
                "fresenius",
                "frl",
                "frogans",
                "frontdoor",
                "frontier",
                "ftr",
                "fujitsu",
                "fujixerox",
                "fun",
                "fund",
                "furniture",
                "futbol",
                "fyi",
                "ga",
                "gal",
                "gallery",
                "gallo",
                "gallup",
                "game",
                "games",
                "gap",
                "garden",
                "gay",
                "gb",
                "gbiz",
                "gd",
                "gdn",
                "ge",
                "gea",
                "gent",
                "genting",
                "george",
                "gf",
                "gg",
                "ggee",
                "gh",
                "gi",
                "gift",
                "gifts",
                "gives",
                "giving",
                "gl",
                "glade",
                "glass",
                "gle",
                "global",
                "globo",
                "gm",
                "gmail",
                "gmbh",
                "gmo",
                "gmx",
                "gn",
                "godaddy",
                "gold",
                "goldpoint",
                "golf",
                "goo",
                "goodyear",
                "goog",
                "google",
                "gop",
                "got",
                "gov",
                "gp",
                "gq",
                "gr",
                "grainger",
                "graphics",
                "gratis",
                "green",
                "gripe",
                "grocery",
                "group",
                "gs",
                "gt",
                "gu",
                "guardian",
                "gucci",
                "guge",
                "guide",
                "guitars",
                "guru",
                "gw",
                "gy",
                "hair",
                "hamburg",
                "hangout",
                "haus",
                "hbo",
                "hdfc",
                "hdfcbank",
                "health",
                "healthcare",
                "help",
                "helsinki",
                "here",
                "hermes",
                "hgtv",
                "hiphop",
                "hisamitsu",
                "hitachi",
                "hiv",
                "hk",
                "hkt",
                "hm",
                "hn",
                "hockey",
                "holdings",
                "holiday",
                "homedepot",
                "homegoods",
                "homes",
                "homesense",
                "honda",
                "horse",
                "hospital",
                "host",
                "hosting",
                "hot",
                "hoteles",
                "hotels",
                "hotmail",
                "house",
                "how",
                "hr",
                "hsbc",
                "ht",
                "hu",
                "hughes",
                "hyatt",
                "hyundai",
                "ibm",
                "icbc",
                "ice",
                "icu",
                "id",
                "ie",
                "ieee",
                "ifm",
                "ikano",
                "il",
                "im",
                "imamat",
                "imdb",
                "immo",
                "immobilien",
                "in",
                "inc",
                "industries",
                "infiniti",
                "info",
                "ing",
                "ink",
                "institute",
                "insurance",
                "insure",
                "int",
                "international",
                "intuit",
                "investments",
                "io",
                "ipiranga",
                "iq",
                "ir",
                "irish",
                "is",
                "ismaili",
                "ist",
                "istanbul",
                "it",
                "itau",
                "itv",
                "iveco",
                "jaguar",
                "java",
                "jcb",
                "je",
                "jeep",
                "jetzt",
                "jewelry",
                "jio",
                "jll",
                "jm",
                "jmp",
                "jnj",
                "jo",
                "jobs",
                "joburg",
                "jot",
                "joy",
                "jp",
                "jpmorgan",
                "jprs",
                "juegos",
                "juniper",
                "kaufen",
                "kddi",
                "ke",
                "kerryhotels",
                "kerrylogistics",
                "kerryproperties",
                "kfh",
                "kg",
                "kh",
                "ki",
                "kia",
                "kim",
                "kinder",
                "kindle",
                "kitchen",
                "kiwi",
                "km",
                "kn",
                "koeln",
                "komatsu",
                "kosher",
                "kp",
                "kpmg",
                "kpn",
                "kr",
                "krd",
                "kred",
                "kuokgroup",
                "kw",
                "ky",
                "kyoto",
                "kz",
                "la",
                "lacaixa",
                "lamborghini",
                "lamer",
                "lancaster",
                "lancia",
                "land",
                "landrover",
                "lanxess",
                "lasalle",
                "lat",
                "latino",
                "latrobe",
                "law",
                "lawyer",
                "lb",
                "lc",
                "lds",
                "lease",
                "leclerc",
                "lefrak",
                "legal",
                "lego",
                "lexus",
                "lgbt",
                "li",
                "lidl",
                "life",
                "lifeinsurance",
                "lifestyle",
                "lighting",
                "like",
                "lilly",
                "limited",
                "limo",
                "lincoln",
                "linde",
                "link",
                "lipsy",
                "live",
                "living",
                "lixil",
                "lk",
                "llc",
                "llp",
                "loan",
                "loans",
                "locker",
                "locus",
                "loft",
                "lol",
                "london",
                "lotte",
                "lotto",
                "love",
                "lpl",
                "lplfinancial",
                "lr",
                "ls",
                "lt",
                "ltd",
                "ltda",
                "lu",
                "lundbeck",
                "luxe",
                "luxury",
                "lv",
                "ly",
                "ma",
                "macys",
                "madrid",
                "maif",
                "maison",
                "makeup",
                "man",
                "management",
                "mango",
                "map",
                "market",
                "marketing",
                "markets",
                "marriott",
                "marshalls",
                "maserati",
                "mattel",
                "mba",
                "mc",
                "mckinsey",
                "md",
                "me",
                "med",
                "media",
                "meet",
                "melbourne",
                "meme",
                "memorial",
                "men",
                "menu",
                "merckmsd",
                "mg",
                "mh",
                "miami",
                "microsoft",
                "mil",
                "mini",
                "mint",
                "mit",
                "mitsubishi",
                "mk",
                "ml",
                "mlb",
                "mls",
                "mm",
                "mma",
                "mn",
                "mo",
                "mobi",
                "mobile",
                "moda",
                "moe",
                "moi",
                "mom",
                "monash",
                "money",
                "monster",
                "mormon",
                "mortgage",
                "moscow",
                "moto",
                "motorcycles",
                "mov",
                "movie",
                "mp",
                "mq",
                "mr",
                "ms",
                "msd",
                "mt",
                "mtn",
                "mtr",
                "mu",
                "museum",
                "mutual",
                "mv",
                "mw",
                "mx",
                "my",
                "mz",
                "na",
                "nab",
                "nagoya",
                "name",
                "nationwide",
                "natura",
                "navy",
                "nba",
                "nc",
                "ne",
                "nec",
                "net",
                "netbank",
                "netflix",
                "network",
                "neustar",
                "new",
                "newholland",
                "news",
                "next",
                "nextdirect",
                "nexus",
                "nf",
                "nfl",
                "ng",
                "ngo",
                "nhk",
                "ni",
                "nico",
                "nike",
                "nikon",
                "ninja",
                "nissan",
                "nissay",
                "nl",
                "no",
                "nokia",
                "northwesternmutual",
                "norton",
                "now",
                "nowruz",
                "nowtv",
                "np",
                "nr",
                "nra",
                "nrw",
                "ntt",
                "nu",
                "nyc",
                "nz",
                "obi",
                "observer",
                "off",
                "office",
                "okinawa",
                "olayan",
                "olayangroup",
                "oldnavy",
                "ollo",
                "om",
                "omega",
                "one",
                "ong",
                "onl",
                "online",
                "onyourside",
                "ooo",
                "open",
                "oracle",
                "orange",
                "org",
                "organic",
                "origins",
                "osaka",
                "otsuka",
                "ott",
                "ovh",
                "pa",
                "page",
                "panasonic",
                "paris",
                "pars",
                "partners",
                "parts",
                "party",
                "passagens",
                "pay",
                "pccw",
                "pe",
                "pet",
                "pf",
                "pfizer",
                "pg",
                "ph",
                "pharmacy",
                "phd",
                "philips",
                "phone",
                "photo",
                "photography",
                "photos",
                "physio",
                "pics",
                "pictet",
                "pictures",
                "pid",
                "pin",
                "ping",
                "pink",
                "pioneer",
                "pizza",
                "pk",
                "pl",
                "place",
                "play",
                "playstation",
                "plumbing",
                "plus",
                "pm",
                "pn",
                "pnc",
                "pohl",
                "poker",
                "politie",
                "porn",
                "post",
                "pr",
                "pramerica",
                "praxi",
                "press",
                "prime",
                "pro",
                "prod",
                "productions",
                "prof",
                "progressive",
                "promo",
                "properties",
                "property",
                "protection",
                "pru",
                "prudential",
                "ps",
                "pt",
                "pub",
                "pw",
                "pwc",
                "py",
                "qa",
                "qpon",
                "quebec",
                "quest",
                "qvc",
                "racing",
                "radio",
                "raid",
                "re",
                "read",
                "realestate",
                "realtor",
                "realty",
                "recipes",
                "red",
                "redstone",
                "redumbrella",
                "rehab",
                "reise",
                "reisen",
                "reit",
                "reliance",
                "ren",
                "rent",
                "rentals",
                "repair",
                "report",
                "republican",
                "rest",
                "restaurant",
                "review",
                "reviews",
                "rexroth",
                "rich",
                "richardli",
                "ricoh",
                "ril",
                "rio",
                "rip",
                "rmit",
                "ro",
                "rocher",
                "rocks",
                "rodeo",
                "rogers",
                "room",
                "rs",
                "rsvp",
                "ru",
                "rugby",
                "ruhr",
                "run",
                "rw",
                "rwe",
                "ryukyu",
                "sa",
                "saarland",
                "safe",
                "safety",
                "sakura",
                "sale",
                "salon",
                "samsclub",
                "samsung",
                "sandvik",
                "sandvikcoromant",
                "sanofi",
                "sap",
                "sarl",
                "sas",
                "save",
                "saxo",
                "sb",
                "sbi",
                "sbs",
                "sc",
                "sca",
                "scb",
                "schaeffler",
                "schmidt",
                "scholarships",
                "school",
                "schule",
                "schwarz",
                "science",
                "scjohnson",
                "scot",
                "sd",
                "se",
                "search",
                "seat",
                "secure",
                "security",
                "seek",
                "select",
                "sener",
                "services",
                "ses",
                "seven",
                "sew",
                "sex",
                "sexy",
                "sfr",
                "sg",
                "sh",
                "shangrila",
                "sharp",
                "shaw",
                "shell",
                "shia",
                "shiksha",
                "shoes",
                "shop",
                "shopping",
                "shouji",
                "show",
                "showtime",
                "si",
                "silk",
                "sina",
                "singles",
                "site",
                "sj",
                "sk",
                "ski",
                "skin",
                "sky",
                "skype",
                "sl",
                "sling",
                "sm",
                "smart",
                "smile",
                "sn",
                "sncf",
                "so",
                "soccer",
                "social",
                "softbank",
                "software",
                "sohu",
                "solar",
                "solutions",
                "song",
                "sony",
                "soy",
                "spa",
                "space",
                "sport",
                "spot",
                "spreadbetting",
                "sr",
                "srl",
                "ss",
                "st",
                "stada",
                "staples",
                "star",
                "statebank",
                "statefarm",
                "stc",
                "stcgroup",
                "stockholm",
                "storage",
                "store",
                "stream",
                "studio",
                "study",
                "style",
                "su",
                "sucks",
                "supplies",
                "supply",
                "support",
                "surf",
                "surgery",
                "suzuki",
                "sv",
                "swatch",
                "swiftcover",
                "swiss",
                "sx",
                "sy",
                "sydney",
                "systems",
                "sz",
                "tab",
                "taipei",
                "talk",
                "taobao",
                "target",
                "tatamotors",
                "tatar",
                "tattoo",
                "tax",
                "taxi",
                "tc",
                "tci",
                "td",
                "tdk",
                "team",
                "tech",
                "technology",
                "tel",
                "temasek",
                "tennis",
                "teva",
                "tf",
                "tg",
                "th",
                "thd",
                "theater",
                "theatre",
                "tiaa",
                "tickets",
                "tienda",
                "tiffany",
                "tips",
                "tires",
                "tirol",
                "tj",
                "tjmaxx",
                "tjx",
                "tk",
                "tkmaxx",
                "tl",
                "tm",
                "tmall",
                "tn",
                "to",
                "today",
                "tokyo",
                "tools",
                "top",
                "toray",
                "toshiba",
                "total",
                "tours",
                "town",
                "toyota",
                "toys",
                "tr",
                "trade",
                "trading",
                "training",
                "travel",
                "travelchannel",
                "travelers",
                "travelersinsurance",
                "trust",
                "trv",
                "tt",
                "tube",
                "tui",
                "tunes",
                "tushu",
                "tv",
                "tvs",
                "tw",
                "tz",
                "ua",
                "ubank",
                "ubs",
                "ug",
                "uk",
                "unicom",
                "university",
                "uno",
                "uol",
                "ups",
                "us",
                "uy",
                "uz",
                "va",
                "vacations",
                "vana",
                "vanguard",
                "vc",
                "ve",
                "vegas",
                "ventures",
                "verisign",
                "versicherung",
                "vet",
                "vg",
                "vi",
                "viajes",
                "video",
                "vig",
                "viking",
                "villas",
                "vin",
                "vip",
                "virgin",
                "visa",
                "vision",
                "viva",
                "vivo",
                "vlaanderen",
                "vn",
                "vodka",
                "volkswagen",
                "volvo",
                "vote",
                "voting",
                "voto",
                "voyage",
                "vu",
                "vuelos",
                "wales",
                "walmart",
                "walter",
                "wang",
                "wanggou",
                "watch",
                "watches",
                "weather",
                "weatherchannel",
                "webcam",
                "weber",
                "website",
                "wed",
                "wedding",
                "weibo",
                "weir",
                "wf",
                "whoswho",
                "wien",
                "wiki",
                "williamhill",
                "win",
                "windows",
                "wine",
                "winners",
                "wme",
                "wolterskluwer",
                "woodside",
                "work",
                "works",
                "world",
                "wow",
                "ws",
                "wtc",
                "wtf",
                "xbox",
                "xerox",
                "xfinity",
                "xihuan",
                "xin",
                "कॉम",
                "セール",
                "佛山",
                "ಭಾರತ",
                "慈善",
                "集团",
                "在线",
                "한국",
                "ଭାରତ",
                "大众汽车",
                "点看",
                "คอม",
                "ভাৰত",
                "ভারত",
                "八卦",
                "ישראל",
                "موقع",
                "বাংলা",
                "公益",
                "公司",
                "香格里拉",
                "网站",
                "移动",
                "我爱你",
                "москва",
                "қаз",
                "католик",
                "онлайн",
                "сайт",
                "联通",
                "срб",
                "бг",
                "бел",
                "קום",
                "时尚",
                "微博",
                "淡马锡",
                "ファッション",
                "орг",
                "नेट",
                "ストア",
                "アマゾン",
                "삼성",
                "சிங்கப்பூர்",
                "商标",
                "商店",
                "商城",
                "дети",
                "мкд",
                "ею",
                "ポイント",
                "新闻",
                "家電",
                "كوم",
                "中文网",
                "中信",
                "中国",
                "中國",
                "娱乐",
                "谷歌",
                "భారత్",
                "ලංකා",
                "電訊盈科",
                "购物",
                "クラウド",
                "ભારત",
                "通販",
                "भारतम्",
                "भारत",
                "भारोत",
                "网店",
                "संगठन",
                "餐厅",
                "网络",
                "ком",
                "укр",
                "香港",
                "亚马逊",
                "诺基亚",
                "食品",
                "飞利浦",
                "台湾",
                "台灣",
                "手机",
                "мон",
                "الجزائر",
                "عمان",
                "ارامكو",
                "ایران",
                "العليان",
                "اتصالات",
                "امارات",
                "بازار",
                "موريتانيا",
                "پاکستان",
                "الاردن",
                "بارت",
                "بھارت",
                "المغرب",
                "ابوظبي",
                "البحرين",
                "السعودية",
                "ڀارت",
                "كاثوليك",
                "سودان",
                "همراه",
                "عراق",
                "مليسيا",
                "澳門",
                "닷컴",
                "政府",
                "شبكة",
                "بيتك",
                "عرب",
                "გე",
                "机构",
                "组织机构",
                "健康",
                "ไทย",
                "سورية",
                "招聘",
                "рус",
                "рф",
                "تونس",
                "大拿",
                "ລາວ",
                "みんな",
                "グーグル",
                "ευ",
                "ελ",
                "世界",
                "書籍",
                "ഭാരതം",
                "ਭਾਰਤ",
                "网址",
                "닷넷",
                "コム",
                "天主教",
                "游戏",
                "vermögensberater",
                "vermögensberatung",
                "企业",
                "信息",
                "嘉里大酒店",
                "嘉里",
                "مصر",
                "قطر",
                "广东",
                "இலங்கை",
                "இந்தியா",
                "հայ",
                "新加坡",
                "فلسطين",
                "政务",
                "xxx",
                "xyz",
                "yachts",
                "yahoo",
                "yamaxun",
                "yandex",
                "ye",
                "yodobashi",
                "yoga",
                "yokohama",
                "you",
                "youtube",
                "yt",
                "yun",
                "za",
                "zappos",
                "zara",
                "zero",
                "zip",
                "zm",
                "zone",
                "zuerich",
                "zw",
              ];
            },
            {},
          ],
          4: [
            function (t, e, n) {
              "use strict";
              function i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(t);
                  e &&
                    (i = i.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, i);
                }
                return n;
              }
              function r(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? i(Object(n), !0).forEach(function (e) {
                        o(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(n),
                        )
                      : i(Object(n)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(n, e),
                          );
                        });
                }
                return t;
              }
              function o(t, e, n) {
                return (
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n),
                  t
                );
              }
              var s = t("ip-regex"),
                a = t("tlds"),
                u = (function () {
                  try {
                    var e = t("re2");
                    return "function" == typeof e ? e : RegExp;
                  } catch (t) {
                    return RegExp;
                  }
                })(),
                c = s.v4().source,
                l = s.v6().source;
              e.exports = function (t) {
                t = r(
                  {
                    exact: !1,
                    strict: !1,
                    auth: !1,
                    localhost: !0,
                    parens: !1,
                    apostrophes: !1,
                    trailingPeriod: !1,
                    ipv4: !0,
                    ipv6: !0,
                    tlds: a,
                    returnString: !1,
                  },
                  t,
                );
                var e = "(?:(?:[a-z]+:)?//)".concat(t.strict ? "" : "?"),
                  n = t.auth ? "(?:\\S+(?::\\S*)?@)?" : "",
                  i =
                    "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",
                  o =
                    "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",
                  s = "(?:\\."
                    .concat(
                      t.strict
                        ? "(?:[a-z\\u00a1-\\uffff]{2,})"
                        : "(?:".concat(
                            t.tlds
                              .sort(function (t, e) {
                                return e.length - t.length;
                              })
                              .join("|"),
                            ")",
                          ),
                      ")",
                    )
                    .concat(t.trailingPeriod ? "\\.?" : ""),
                  h = "(?::\\d{2,5})?",
                  p = t.parens
                    ? t.apostrophes
                      ? '(?:[/?#][^\\s"]*)?'
                      : "(?:[/?#][^\\s\"']*)?"
                    : t.apostrophes
                      ? '(?:[/?#][^\\s"\\)]*)?'
                      : "(?:[/?#][^\\s\"\\)']*)?",
                  d = "(?:".concat(e, "|www\\.)").concat(n, "(?:");
                return (
                  t.localhost && (d += "localhost|"),
                  t.ipv4 && (d += "".concat(c, "|")),
                  t.ipv6 && (d += "".concat(l, "|")),
                  (d += ""
                    .concat(i)
                    .concat(o)
                    .concat(s, ")")
                    .concat(h)
                    .concat(p)),
                  t.returnString
                    ? d
                    : t.exact
                      ? new u("(?:^".concat(d, "$)"), "i")
                      : new u(d, "ig")
                );
              };
            },
            { "ip-regex": 2, re2: 1, tlds: 3 },
          ],
        },
        {},
        [4],
      )(4);
    },
  },
]);
