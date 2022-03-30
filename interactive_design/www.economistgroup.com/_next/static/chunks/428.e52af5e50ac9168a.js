"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [428], {
        913: function(e, i, n) {
            n.r(i);
            var s = n(1543),
                t = n(8352),
                l = n(965),
                a = (n(3481), n(687), n(7294)),
                r = n(5893);
            i.default = function(e) {
                var i = (0, a.useState)(null),
                    n = i[0],
                    u = i[1],
                    c = e.features,
                    o = c.items,
                    d = c.hideDate,
                    f = void 0 === d ? null : d;
                return (0, a.useEffect)((function() {
                    n && n.slideTo(0)
                })), o.length > 0 && (0, r.jsx)("div", {
                    className: "news-slider-container",
                    children: (0, r.jsx)("div", {
                        className: "news-listing-slider news-listing-slider--button",
                        children: (0, r.jsx)(t.tq, {
                            observer: !0,
                            modules: [l.W_],
                            spaceBetween: 33,
                            slidesPerView: "auto",
                            navigation: !0,
                            onSwiper: function(e) {
                                return u(e)
                            },
                            children: o.map((function(e, i) {
                                return (0, r.jsx)(t.o5, {
                                    children: (0, r.jsx)(s.Z, {
                                        landscape: !1,
                                        image: e.image,
                                        title: e.title,
                                        description: e.description,
                                        date: !f && e.publicationDate,
                                        category: e.category,
                                        slug: e.slug,
                                        isInCarousel: !0
                                    }, i)
                                }, i)
                            }))
                        })
                    })
                })
            }
        }
    }
]);