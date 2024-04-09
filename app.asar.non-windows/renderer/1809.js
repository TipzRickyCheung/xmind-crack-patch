(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [1809],
  {
    57505: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => r });
      var a = t(23645),
        o = t.n(a)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".drag-bar[data-v-50164f48] {\n  height: 100%;\n  width: 3px;\n  z-index: 2;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: -1px;\n  cursor: ew-resize;\n}\n",
        "",
      ]);
      const r = o;
    },
    23493: (e, n, t) => {
      var a = t(23279),
        o = t(13218);
      e.exports = function (e, n, t) {
        var r = !0,
          i = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return (
          o(t) &&
            ((r = "leading" in t ? !!t.leading : r),
            (i = "trailing" in t ? !!t.trailing : i)),
          a(e, n, { leading: r, maxWait: n, trailing: i })
        );
      };
    },
    1809: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => d });
      var a = t(2954),
        o = t(23493),
        r = t.n(o);
      const i = (0, a.aZ)({
        name: "DragBar",
        props: {
          minPanelWidth: { type: Number, default: 240 },
          maxPanelWidth: { type: Number, default: 600 },
        },
        setup: (e, n) => {
          const t = (0, a.iH)(!1),
            o = r()((a) => {
              const { minPanelWidth: o, maxPanelWidth: r } = e;
              if (t.value) {
                const { clientX: e } = a;
                let t = e;
                t < o && (t = o), t > r && (t = r), n.emit("change", t);
              }
            });
          (0, a.bv)(() => {
            document.body.addEventListener("mousemove", o);
          }),
            (0, a.Jd)(() => {
              document.body.removeEventListener("mousemove", o);
            });
          const i = () => {
            n.emit("dragend"), (t.value = !1);
          };
          return {
            onDragBarMouseDown: () => {
              (t.value = !0),
                n.emit("dragstart"),
                document.body.addEventListener("mouseup", i, { once: !0 }),
                document.body.addEventListener("mouseleave", i, { once: !0 });
            },
          };
        },
      });
      t(37849);
      const d = (0, t(51900).Z)(
        i,
        function () {
          var e = this,
            n = e._self._c;
          e._self._setupProxy;
          return n("div", {
            staticClass: "drag-bar",
            on: { mousedown: e.onDragBarMouseDown },
          });
        },
        [],
        !1,
        null,
        "50164f48",
        null,
      ).exports;
    },
    37849: (e, n, t) => {
      var a = t(57505);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals);
      (0, t(45346).Z)("3bf36943", a, !0, {});
    },
  },
]);
