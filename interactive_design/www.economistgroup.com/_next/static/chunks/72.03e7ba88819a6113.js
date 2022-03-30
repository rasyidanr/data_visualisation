"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [72], {
        4666: function(e, i, n) {
            n.d(i, {
                n: function() {
                    return l
                },
                K: function() {
                    return d
                }
            });
            var t = n(5976),
                r = n(7294),
                a = n(6405),
                s = n(5893),
                l = function(e) {
                    var i = e.prevDisabled,
                        n = e.prevSlide,
                        l = e.nextDisabled,
                        d = e.nextSlide,
                        c = e.containerRef,
                        o = e.centerOn,
                        u = (0, r.useRef)(),
                        f = (0, a.Z)().width;
                    return (0, r.useEffect)((function() {
                        if (o) {
                            var e = c.current.querySelector(".".concat(o)),
                                i = e.offsetTop,
                                n = e.offsetHeight / 2 + i;
                            if (n) u.current.querySelectorAll("button").forEach((function(e) {
                                e.style.top = "".concat(n, "px")
                            }))
                        }
                    }), [f, l, i]), (0, s.jsxs)("div", {
                        className: "carousel__controls ",
                        ref: u,
                        children: [(0, s.jsx)(t.Z, {
                            name: "carousel__prev",
                            direction: "left",
                            label: "Previous slide",
                            onClick: function() {
                                return n()
                            },
                            disabled: i
                        }), (0, s.jsx)(t.Z, {
                            name: "carousel__next",
                            direction: "right",
                            label: "Next slide",
                            onClick: function() {
                                return d()
                            },
                            disabled: l
                        })]
                    })
                },
                d = function(e) {
                    var i = e.prevDisabled,
                        n = e.prevSlide,
                        r = e.nextDisabled,
                        a = e.nextSlide;
                    return (0, s.jsxs)("div", {
                        className: "carousel__inline-controls",
                        children: [(0, s.jsx)(t.Z, {
                            name: "carousel__prev",
                            direction: "left",
                            label: "Previous slide",
                            onClick: function() {
                                return n()
                            },
                            disabled: i
                        }), (0, s.jsx)(t.Z, {
                            name: "carousel__next",
                            direction: "right",
                            label: "Next slide",
                            onClick: function() {
                                return a()
                            },
                            disabled: r
                        })]
                    })
                }
        },
        8072: function(e, i, n) {
            n.r(i), n.d(i, {
                default: function() {
                    return p
                }
            });
            var t = n(2809),
                r = n(3716),
                a = n(4666),
                s = n(9876),
                l = n(9131),
                d = n(2941),
                c = n(5893),
                o = function(e) {
                    var i = e.year,
                        n = e.headline,
                        t = e.subheadline,
                        r = e.image;
                    return (0, c.jsxs)("div", {
                        className: "timeline-card",
                        children: [(0, c.jsx)("div", {
                            className: "timeline-card__image",
                            children: (0, c.jsx)(d.Z, {
                                src: r.image.url || "",
                                caption: null === r || void 0 === r ? void 0 : r.caption,
                                title: (null === r || void 0 === r ? void 0 : r.title) || r.image.title,
                                alt: (null === r || void 0 === r ? void 0 : r.alt) || "timeline card for ".concat(i),
                                lowRes: r.lqip ? r.lqip.image : null
                            })
                        }), (0, c.jsxs)("div", {
                            className: "timeline-card__content",
                            children: [(0, c.jsx)("p", {
                                className: "timeline-card__year",
                                children: i
                            }), (0, c.jsx)("div", {
                                className: "timeline-card__headline",
                                children: (0, l.Z)(n)
                            }), (0, c.jsx)("div", {
                                className: "timeline-card__subheadline",
                                children: (0, l.Z)(t)
                            })]
                        })]
                    })
                };

            function u(e, i) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    i && (t = t.filter((function(i) {
                        return Object.getOwnPropertyDescriptor(e, i).enumerable
                    }))), n.push.apply(n, t)
                }
                return n
            }

            function f(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var n = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? u(Object(n), !0).forEach((function(i) {
                        (0, t.Z)(e, i, n[i])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(i) {
                        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i))
                    }))
                }
                return e
            }
            var p = function(e) {
                var i = e.items;
                return (0, c.jsx)("div", {
                    className: "timeline-slider",
                    children: (0, c.jsx)(s.Z, {
                        config: r.ww,
                        Controls: function(e) {
                            return (0, c.jsx)(a.n, f({}, e))
                        },
                        children: i.map((function(e, i) {
                            return (0, c.jsx)(o, f({}, e), i)
                        }))
                    })
                })
            }
        },
        9876: function(e, i, n) {
            n.d(i, {
                Z: function() {
                    return x
                }
            });
            var t = n(7294),
                r = n(37),
                a = n(9711),
                s = function(e) {
                    var i = e.offsetWidth,
                        n = getComputedStyle(e);
                    return i += parseInt(n.marginLeft) + parseInt(n.marginRight)
                },
                l = n(8595),
                d = n.n(l),
                c = n(6405),
                o = function(e, i, n, l) {
                    var o = (0, t.useState)(0),
                        u = o[0],
                        f = o[1],
                        p = (0, t.useState)(),
                        g = p[0],
                        v = p[1],
                        h = (0, t.useState)(!0),
                        x = h[0],
                        b = h[1],
                        m = (0, t.useState)(!0),
                        _ = m[0],
                        j = m[1],
                        S = (0, t.useState)(!1),
                        y = S[0],
                        w = S[1],
                        N = (0, c.Z)().width;
                    (0, t.useEffect)((function() {
                        ! function() {
                            var i = new(d())(e.current, n).mount();
                            if (i.on("moved", (function(e) {
                                    f(e)
                                })), l)
                                for (var t = 0, r = Object.entries(l); t < r.length; t++) {
                                    var s = (0, a.Z)(r[t], 2),
                                        c = s[0],
                                        o = s[1];
                                    i.on(c, o)
                                }
                            v(i)
                        }()
                    }), []), (0, t.useEffect)((function() {
                        if (g)
                            if (O(), j(0 === u), u + 1 === g.length) w(!0);
                            else {
                                var e = (0, r.Z)(g.root.querySelectorAll(".splide__slide"));
                                e[e.length - 1].classList.contains("is-visible") ? w(!0) : w(!1)
                            }
                    }), [N, g, u]), (0, t.useEffect)((function() {
                        var e = function() {
                            setTimeout((function() {
                                if (g)
                                    if (g.refresh(), O(), j(0 === u), u + 1 === g.length) w(!0);
                                    else {
                                        var e = (0, r.Z)(g.root.querySelectorAll(".splide__slide"));
                                        e[e.length - 1].classList.contains("is-visible") ? w(!0) : w(!1)
                                    }
                            }))
                        };
                        return document.addEventListener("update-tab", e),
                            function() {
                                return document.removeEventListener("update-tab", e)
                            }
                    }), [g]);
                    var O = function() {
                        var e = (0, r.Z)(g.root.querySelectorAll(".splide__slide")),
                            n = 0;
                        e.forEach((function(e) {
                            n += s(e)
                        })), n < i.current.offsetWidth ? b(!1) : b(!0)
                    };
                    return {
                        prevDisabled: _,
                        nextDisabled: y,
                        nextSlide: function() {
                            g.go(">")
                        },
                        prevSlide: function() {
                            g.go("<")
                        },
                        isSlider: x
                    }
                },
                u = n(3501),
                f = n.n(u),
                p = function(e) {
                    for (var i = [], n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = n.length, r = 0; r < e; r++) i.push(n.charAt(Math.floor(Math.random() * t)));
                    return i.join("")
                },
                g = n(5893),
                v = function(e) {
                    return (0, g.jsx)("li", {
                        className: "carousel-item splide__slide",
                        children: e.children
                    })
                },
                h = function(e) {
                    return (0, g.jsx)("div", {
                        className: "splide__track slider__track",
                        children: (0, g.jsx)("ul", {
                            className: "splide__list slider__list",
                            children: e.children.map((function(e, i) {
                                return (0, g.jsx)(v, {
                                    children: e
                                }, i)
                            }))
                        })
                    })
                },
                x = function(e) {
                    var i = e.config,
                        n = e.events,
                        r = e.Controls,
                        a = (0, t.useState)(!1),
                        s = (a[0], a[1]),
                        l = (0, t.useRef)(),
                        d = (0, t.useRef)(),
                        c = o(l, d, i, n),
                        u = c.prevSlide,
                        v = c.nextSlide,
                        x = c.nextDisabled,
                        b = c.prevDisabled,
                        m = c.isSlider,
                        _ = p(5);
                    return (0, g.jsx)(f(), {
                        onLoaded: function() {
                            return s(!0)
                        },
                        children: (0, g.jsx)("div", {
                            className: "carousel",
                            ref: d,
                            "aria-roledescription": "carousel",
                            children: (0, g.jsxs)("div", {
                                className: "carousel__content",
                                children: [r && (0, g.jsx)(r, {
                                    prevSlide: u,
                                    nextSlide: v,
                                    nextDisabled: x,
                                    prevDisabled: b,
                                    slidesPerView: "auto",
                                    isSlider: m,
                                    containerRef: d
                                }), (0, g.jsx)("div", {
                                    id: "splide--".concat(_),
                                    className: "splide slider",
                                    ref: l,
                                    children: (0, g.jsx)(h, {
                                        children: e.children
                                    })
                                })]
                            })
                        })
                    })
                }
        },
        3716: function(e, i, n) {
            n.d(i, {
                vI: function() {
                    return t
                },
                r$: function() {
                    return r
                },
                ww: function() {
                    return a
                },
                Fr: function() {
                    return s
                },
                Rt: function() {
                    return l
                }
            });
            var t = {
                    fixedWidth: 360,
                    gap: 16,
                    accessibility: !0,
                    pagination: !1,
                    drag: !0,
                    arrows: !1,
                    padding: 0,
                    perMove: 4,
                    breakpoints: {
                        1939: {
                            perMove: 4,
                            gap: 16,
                            fixedWidth: 360,
                            padding: 32
                        },
                        1499: {
                            perMove: 3,
                            gap: 16,
                            padding: 32,
                            fixedWidth: 360
                        },
                        1199: {
                            perMove: 2,
                            gap: 16,
                            padding: 32,
                            fixedWidth: 360
                        },
                        900: {
                            perMove: 1,
                            gap: 16,
                            padding: 24,
                            fixedWidth: 280
                        },
                        599: {
                            perMove: 1,
                            gap: 12,
                            padding: 12,
                            fixedWidth: 280
                        }
                    }
                },
                r = {
                    fixedWidth: 243,
                    gap: 16,
                    accessibility: !0,
                    pagination: !1,
                    drag: !0,
                    arrows: !1,
                    padding: 0,
                    perMove: 4
                },
                a = {
                    fixedWidth: 420,
                    gap: 16,
                    accessibility: !0,
                    pagination: !1,
                    drag: !0,
                    arrows: !1,
                    padding: 0,
                    perMove: 2,
                    breakpoints: {
                        1939: {
                            perMove: 1,
                            gap: 16,
                            fixedWidth: 420,
                            padding: 32
                        },
                        1499: {
                            perMove: 1,
                            gap: 16,
                            padding: 32,
                            fixedWidth: 420
                        },
                        900: {
                            perMove: 1,
                            gap: 16,
                            padding: 24,
                            fixedWidth: 280
                        },
                        599: {
                            perMove: 1,
                            gap: 12,
                            padding: 12,
                            fixedWidth: 280
                        }
                    }
                },
                s = {
                    accessibility: !0,
                    pagination: !1,
                    drag: !0,
                    arrows: !1,
                    gap: 24,
                    breakpoints: {
                        1939: {
                            gap: 24,
                            padding: {
                                left: 32,
                                right: 32
                            }
                        },
                        1499: {
                            gap: 24,
                            padding: {
                                left: 32,
                                right: 32
                            }
                        },
                        1199: {
                            gap: 24,
                            padding: {
                                left: 32,
                                right: 32
                            }
                        },
                        899: {
                            gap: 24,
                            padding: {
                                left: 24,
                                right: 24
                            }
                        },
                        599: {
                            gap: 12,
                            padding: {
                                left: 12,
                                right: 12
                            }
                        }
                    }
                },
                l = {
                    accessibility: !0,
                    pagination: !1,
                    drag: !0,
                    arrows: !1,
                    breakpoints: {
                        1939: {},
                        1499: {},
                        1199: {},
                        899: {},
                        599: {}
                    }
                }
        }
    }
]);