"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [7356],
  {
    67356: (t, e, n) => {
      n.r(e), n.d(e, { exportWord: () => p });
      var i = n(71017),
        r = n.n(i),
        o = n(97769),
        a = n(94787),
        h = n(72298),
        s = n(13382),
        g = n(18621),
        d = n(50965),
        c = n(5893),
        u = n(40219),
        l = n(83395),
        f = n(42799),
        m = n(37475),
        w = function (t, e, n, i) {
          return new (n || (n = Promise))(function (r, o) {
            function a(t) {
              try {
                s(i.next(t));
              } catch (t) {
                o(t);
              }
            }
            function h(t) {
              try {
                s(i.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function s(t) {
              var e;
              t.done
                ? r(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, h);
            }
            s((i = i.apply(t, e || [])).next());
          });
        };
      function p() {
        return w(this, void 0, void 0, function* () {
          const { activeSheet: t } = (0, u.h)(),
            e = Date.now();
          let n;
          try {
            (0, a.Ae)("docx"), (n = yield (0, l.e)([t.value], x));
          } catch (t) {
            throw t;
          } finally {
            yield (0, a.Gm)();
          }
          if (!n) throw new Error("Word Buffer is null!");
          (0, d.Rg)().addRateMasValue(10),
            (0, g.L9)({
              eventCategory: "export",
              eventAction: "durationExportWord",
              eventValue: Date.now() - e,
            });
          const i = yield (0, s.ZZ)({
            title: "Export",
            filters: [{ name: "DOCX", extensions: ["docx"] }],
            suggestPath: { suggestedName: (0, c.Nw)(t.value.rootTopic.title) },
          });
          i && (0, a.yS)(i, n), h.shell.showItemInFolder(i);
        });
      }
      const v = 40;
      function x(t, e, n, i) {
        return w(this, void 0, void 0, function* () {
          if ("marker" === t) {
            const { markerModule: t } = (0, u.h)(),
              r = yield new Promise((n) => {
                t.loadMarkerAsset(e)((t) => {
                  n(t.imageSource);
                });
              });
            let o;
            try {
              o = yield y(r, n, i);
            } catch (t) {
              return;
            }
            const { pngBuffer: a, originWidth: h, originHeight: s } = o,
              g = n ? n / v : h / v,
              d = i ? i / v : s / v;
            return new Promise((t) => {
              t({ width: g, height: d, data: a, extension: ".png" });
            });
          }
          if ("xap" === t || e.startsWith("xap:")) {
            const { stage: t } = (0, f.F)(),
              a = yield t.take(e.replace("xap:", ""));
            if (!a) return;
            const h = r().extname(e);
            if (".svg" === h) {
              const t = "data:image/svg+xml;base64," + a.toString("base64");
              let e;
              try {
                e = yield y(t, n, i);
              } catch (t) {
                return;
              }
              const { pngBuffer: r, originWidth: o, originHeight: h } = e,
                { targetWidth: s, targetHeight: g } = W(
                  n ? n / v : o / v,
                  i ? i / v : h / v,
                );
              return new Promise((t) => {
                t({ width: s, height: g, data: r, extension: ".png" });
              });
            }
            {
              const t =
                `data:${(yield (0, o.fromBuffer)(a)).mime};base64,` +
                a.toString("base64");
              let e;
              try {
                e = yield (0, m.N8)(t);
              } catch (t) {
                return;
              }
              const { width: r, height: s } = e,
                { targetWidth: g, targetHeight: d } = W(
                  n ? n / v : r / v,
                  i ? i / v : s / v,
                );
              return new Promise((t) => {
                t({ width: g, height: d, data: a, extension: h });
              });
            }
          }
          if ("base64" === t) {
            let t;
            try {
              t = yield y(e, n, i);
            } catch (t) {
              return;
            }
            const { pngBuffer: r, originWidth: o, originHeight: a } = t,
              { targetWidth: h, targetHeight: s } = W(
                n ? n / v : o / v,
                i ? i / v : a / v,
              );
            return new Promise((t) => {
              t({ width: h, height: s, data: r, extension: ".png" });
            });
          }
        });
      }
      function y(t, e, n) {
        return new Promise((i, r) => {
          const o = document.createElement("canvas"),
            a = o.getContext("2d"),
            h = new Image(e || void 0, n || void 0);
          (h.src = t),
            (h.onload = () => {
              (o.width = 2 * h.width),
                (o.height = 2 * h.height),
                a.setTransform(2, 0, 0, 2, 0, 0),
                a.drawImage(h, 0, 0, h.width, h.height);
              const t = o.toDataURL("image/png").slice(22);
              i({
                pngBuffer: Buffer.from(t, "base64"),
                originWidth: h.width,
                originHeight: h.height,
              });
            }),
            (h.onerror = (t) => r(t));
        });
      }
      function W(t, e) {
        const n = { MAX: 200 / v, MIN: 64 / v },
          i = e / t;
        let r = t,
          o = e;
        return (
          t < n.MIN
            ? ((r = n.MIN), (o = r * i))
            : t > n.MAX && ((r = n.MAX), (o = r * i)),
          { targetWidth: r, targetHeight: o }
        );
      }
    },
  },
]);
