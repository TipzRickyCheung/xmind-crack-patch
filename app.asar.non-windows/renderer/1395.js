"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [1395],
  {
    41395: (e, t, n) => {
      n.r(t), n.d(t, { exportExcel: () => x });
      var o = n(94787),
        a = n(72298),
        i = n(13382),
        l = n(18621),
        r = n(50965),
        c = n(5893),
        u = n(40219),
        s = n(91117),
        h = function (e, t, n, o) {
          return new (n || (n = Promise))(function (a, i) {
            function l(e) {
              try {
                c(o.next(e));
              } catch (e) {
                i(e);
              }
            }
            function r(e) {
              try {
                c(o.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(l, r);
            }
            c((o = o.apply(e, t || [])).next());
          });
        };
      function x() {
        return h(this, void 0, void 0, function* () {
          const { activeSheet: e } = (0, u.h)(),
            t = Date.now();
          let n;
          try {
            (0, o.Ae)("xlsx"), (n = yield (0, s.F)(e.value));
          } catch (e) {
            throw e;
          } finally {
            yield (0, o.Gm)();
          }
          if (!n) throw new Error("Excel Buffer is null!");
          (0, r.Rg)().addRateMasValue(10),
            (0, l.L9)({
              eventCategory: "export",
              eventAction: "durationExportExcel",
              eventValue: Date.now() - t,
            });
          const h = yield (0, i.ZZ)({
            title: "Export",
            filters: [{ name: "XLSX", extensions: ["xlsx"] }],
            suggestPath: { suggestedName: (0, c.Nw)(e.value.rootTopic.title) },
          });
          h && (0, o.yS)(h, n), a.shell.showItemInFolder(h);
        });
      }
    },
  },
]);
