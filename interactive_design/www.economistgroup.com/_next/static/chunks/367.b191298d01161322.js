(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [367], {
        1367: function(t, o, e) {
            "use strict";
            e.r(o), e.d(o, {
                default: function() {
                    return c
                }
            });
            var l = e(7294),
                r = e(523),
                n = e.n(r),
                i = function() {
                    var t, o = "data-focus-method",
                        e = "touch",
                        l = !1;
                    document.addEventListener("keydown", (function() {
                        l = "key"
                    }), !0), document.addEventListener("mousedown", (function() {
                        l !== e && (l = "mouse")
                    }), !0), document.addEventListener("touchstart", (function() {
                        l = e
                    }), !0), document.addEventListener("focus", (function(e) {
                        l || (l = t), e.target && "function" === typeof e.target.setAttribute && (e.target.setAttribute(o, l), t = l, l = !1)
                    }), !0), document.addEventListener("blur", (function(t) {
                        t.target && "function" === typeof t.target.removeAttribute && t.target.removeAttribute(o)
                    }), !0), window.addEventListener("blur", (function() {
                        l = !1
                    }))
                },
                c = (e(6337), function(t) {
                    return (0, l.useEffect)((function() {
                        i()
                    }), []), n().polyfill(), null
                })
        },
        523: function(t) {
            ! function() {
                "use strict";
                t.exports = {
                    polyfill: function() {
                        var t = window,
                            o = document;
                        if (!("scrollBehavior" in o.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                            var e, l = t.HTMLElement || t.Element,
                                r = {
                                    scroll: t.scroll || t.scrollTo,
                                    scrollBy: t.scrollBy,
                                    elementScroll: l.prototype.scroll || c,
                                    scrollIntoView: l.prototype.scrollIntoView
                                },
                                n = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                                i = (e = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(e) ? 1 : 0);
                            t.scroll = t.scrollTo = function() {
                                void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? v.call(t, o.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : r.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                            }, t.scrollBy = function() {
                                void 0 !== arguments[0] && (s(arguments[0]) ? r.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : v.call(t, o.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                            }, l.prototype.scroll = l.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0])
                                    if (!0 !== s(arguments[0])) {
                                        var t = arguments[0].left,
                                            o = arguments[0].top;
                                        v.call(this, this, "undefined" === typeof t ? this.scrollLeft : ~~t, "undefined" === typeof o ? this.scrollTop : ~~o)
                                    } else {
                                        if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                        r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }, l.prototype.scrollBy = function() {
                                void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }, l.prototype.scrollIntoView = function() {
                                if (!0 !== s(arguments[0])) {
                                    var e = p(this),
                                        l = e.getBoundingClientRect(),
                                        n = this.getBoundingClientRect();
                                    e !== o.body ? (v.call(this, e, e.scrollLeft + n.left - l.left, e.scrollTop + n.top - l.top), "fixed" !== t.getComputedStyle(e).position && t.scrollBy({
                                        left: l.left,
                                        top: l.top,
                                        behavior: "smooth"
                                    })) : t.scrollBy({
                                        left: n.left,
                                        top: n.top,
                                        behavior: "smooth"
                                    })
                                } else r.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function c(t, o) {
                            this.scrollLeft = t, this.scrollTop = o
                        }

                        function s(t) {
                            if (null === t || "object" !== typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                            if ("object" === typeof t && "smooth" === t.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function f(t, o) {
                            return "Y" === o ? t.clientHeight + i < t.scrollHeight : "X" === o ? t.clientWidth + i < t.scrollWidth : void 0
                        }

                        function a(o, e) {
                            var l = t.getComputedStyle(o, null)["overflow" + e];
                            return "auto" === l || "scroll" === l
                        }

                        function u(t) {
                            var o = f(t, "Y") && a(t, "Y"),
                                e = f(t, "X") && a(t, "X");
                            return o || e
                        }

                        function p(t) {
                            for (; t !== o.body && !1 === u(t);) t = t.parentNode || t.host;
                            return t
                        }

                        function d(o) {
                            var e, l, r, i, c = (n() - o.startTime) / 468;
                            i = c = c > 1 ? 1 : c, e = .5 * (1 - Math.cos(Math.PI * i)), l = o.startX + (o.x - o.startX) * e, r = o.startY + (o.y - o.startY) * e, o.method.call(o.scrollable, l, r), l === o.x && r === o.y || t.requestAnimationFrame(d.bind(t, o))
                        }

                        function v(e, l, i) {
                            var s, f, a, u, p = n();
                            e === o.body ? (s = t, f = t.scrollX || t.pageXOffset, a = t.scrollY || t.pageYOffset, u = r.scroll) : (s = e, f = e.scrollLeft, a = e.scrollTop, u = c), d({
                                scrollable: s,
                                method: u,
                                startTime: p,
                                startX: f,
                                startY: a,
                                x: l,
                                y: i
                            })
                        }
                    }
                }
            }()
        }
    }
]);