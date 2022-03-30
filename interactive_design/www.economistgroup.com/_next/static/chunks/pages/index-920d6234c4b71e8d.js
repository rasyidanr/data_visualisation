(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        764: function(n, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                __N_SSG: function() {
                    return a
                },
                default: function() {
                    return o
                }
            });
            var u = r(1992),
                i = r(5107),
                t = r(5893),
                a = !0;

            function o(n) {
                var e = n.page,
                    r = n.error,
                    a = n.domain,
                    o = n.permalink,
                    _ = n.preview,
                    p = n.dev;
                return (0, t.jsx)(u.Z, {
                    dev: p,
                    page: e,
                    error: r,
                    preview: _,
                    domain: a,
                    permalink: o,
                    children: (0, t.jsx)(i.TemplateHomepage, {
                        page: e
                    })
                })
            }
        },
        8581: function(n, e, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(764)
            }])
        }
    },
    function(n) {
        n.O(0, [656, 212, 174, 107, 774, 888, 179], (function() {
            return e = 8581, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);