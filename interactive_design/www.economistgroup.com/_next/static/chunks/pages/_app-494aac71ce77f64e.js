(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        6337: function() {
            ! function() {
                "use strict";
                if ("object" === typeof window)
                    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0
                        }
                    });
                    else {
                        var t = function(t) {
                                for (var e = window.document, r = o(e); r;) r = o(e = r.ownerDocument);
                                return e
                            }(),
                            e = [],
                            r = null,
                            n = null;
                        s.prototype.THROTTLE_TIMEOUT = 100, s.prototype.POLL_INTERVAL = null, s.prototype.USE_MUTATION_OBSERVER = !0, s._setupCrossOriginUpdater = function() {
                            return r || (r = function(t, r) {
                                n = t && r ? f(t, r) : {
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    width: 0,
                                    height: 0
                                }, e.forEach((function(t) {
                                    t._checkForIntersections()
                                }))
                            }), r
                        }, s._resetCrossOriginUpdater = function() {
                            r = null, n = null
                        }, s.prototype.observe = function(t) {
                            if (!this._observationTargets.some((function(e) {
                                    return e.element == t
                                }))) {
                                if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                                this._registerInstance(), this._observationTargets.push({
                                    element: t,
                                    entry: null
                                }), this._monitorIntersections(t.ownerDocument), this._checkForIntersections()
                            }
                        }, s.prototype.unobserve = function(t) {
                            this._observationTargets = this._observationTargets.filter((function(e) {
                                return e.element != t
                            })), this._unmonitorIntersections(t.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
                        }, s.prototype.disconnect = function() {
                            this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
                        }, s.prototype.takeRecords = function() {
                            var t = this._queuedEntries.slice();
                            return this._queuedEntries = [], t
                        }, s.prototype._initThresholds = function(t) {
                            var e = t || [0];
                            return Array.isArray(e) || (e = [e]), e.sort().filter((function(t, e, r) {
                                if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                                return t !== r[e - 1]
                            }))
                        }, s.prototype._parseRootMargin = function(t) {
                            var e = (t || "0px").split(/\s+/).map((function(t) {
                                var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                                if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                                return {
                                    value: parseFloat(e[1]),
                                    unit: e[2]
                                }
                            }));
                            return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
                        }, s.prototype._monitorIntersections = function(e) {
                            var r = e.defaultView;
                            if (r && -1 == this._monitoringDocuments.indexOf(e)) {
                                var n = this._checkForIntersections,
                                    i = null,
                                    s = null;
                                this.POLL_INTERVAL ? i = r.setInterval(n, this.POLL_INTERVAL) : (u(r, "resize", n, !0), u(e, "scroll", n, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in r && (s = new r.MutationObserver(n)).observe(e, {
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0,
                                    subtree: !0
                                })), this._monitoringDocuments.push(e), this._monitoringUnsubscribes.push((function() {
                                    var t = e.defaultView;
                                    t && (i && t.clearInterval(i), a(t, "resize", n, !0)), a(e, "scroll", n, !0), s && s.disconnect()
                                }));
                                var c = this.root && (this.root.ownerDocument || this.root) || t;
                                if (e != c) {
                                    var l = o(e);
                                    l && this._monitorIntersections(l.ownerDocument)
                                }
                            }
                        }, s.prototype._unmonitorIntersections = function(e) {
                            var r = this._monitoringDocuments.indexOf(e);
                            if (-1 != r) {
                                var n = this.root && (this.root.ownerDocument || this.root) || t;
                                if (!this._observationTargets.some((function(t) {
                                        var r = t.element.ownerDocument;
                                        if (r == e) return !0;
                                        for (; r && r != n;) {
                                            var i = o(r);
                                            if ((r = i && i.ownerDocument) == e) return !0
                                        }
                                        return !1
                                    }))) {
                                    var i = this._monitoringUnsubscribes[r];
                                    if (this._monitoringDocuments.splice(r, 1), this._monitoringUnsubscribes.splice(r, 1), i(), e != n) {
                                        var s = o(e);
                                        s && this._unmonitorIntersections(s.ownerDocument)
                                    }
                                }
                            }
                        }, s.prototype._unmonitorAllIntersections = function() {
                            var t = this._monitoringUnsubscribes.slice(0);
                            this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
                            for (var e = 0; e < t.length; e++) t[e]()
                        }, s.prototype._checkForIntersections = function() {
                            if (this.root || !r || n) {
                                var t = this._rootIsInDom(),
                                    e = t ? this._getRootRect() : {
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        width: 0,
                                        height: 0
                                    };
                                this._observationTargets.forEach((function(n) {
                                    var o = n.element,
                                        s = l(o),
                                        u = this._rootContainsTarget(o),
                                        a = n.entry,
                                        c = t && u && this._computeTargetAndRootIntersection(o, s, e),
                                        h = null;
                                    this._rootContainsTarget(o) ? r && !this.root || (h = e) : h = {
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        width: 0,
                                        height: 0
                                    };
                                    var f = n.entry = new i({
                                        time: window.performance && performance.now && performance.now(),
                                        target: o,
                                        boundingClientRect: s,
                                        rootBounds: h,
                                        intersectionRect: c
                                    });
                                    a ? t && u ? this._hasCrossedThreshold(a, f) && this._queuedEntries.push(f) : a && a.isIntersecting && this._queuedEntries.push(f) : this._queuedEntries.push(f)
                                }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                            }
                        }, s.prototype._computeTargetAndRootIntersection = function(e, o, i) {
                            if ("none" != window.getComputedStyle(e).display) {
                                for (var s = o, u = p(e), a = !1; !a && u;) {
                                    var h = null,
                                        d = 1 == u.nodeType ? window.getComputedStyle(u) : {};
                                    if ("none" == d.display) return null;
                                    if (u == this.root || 9 == u.nodeType)
                                        if (a = !0, u == this.root || u == t) r && !this.root ? !n || 0 == n.width && 0 == n.height ? (u = null, h = null, s = null) : h = n : h = i;
                                        else {
                                            var g = p(u),
                                                b = g && l(g),
                                                v = g && this._computeTargetAndRootIntersection(g, b, i);
                                            b && v ? (u = g, h = f(b, v)) : (u = null, s = null)
                                        }
                                    else {
                                        var m = u.ownerDocument;
                                        u != m.body && u != m.documentElement && "visible" != d.overflow && (h = l(u))
                                    }
                                    if (h && (s = c(h, s)), !s) break;
                                    u = u && p(u)
                                }
                                return s
                            }
                        }, s.prototype._getRootRect = function() {
                            var e;
                            if (this.root && !g(this.root)) e = l(this.root);
                            else {
                                var r = g(this.root) ? this.root : t,
                                    n = r.documentElement,
                                    o = r.body;
                                e = {
                                    top: 0,
                                    left: 0,
                                    right: n.clientWidth || o.clientWidth,
                                    width: n.clientWidth || o.clientWidth,
                                    bottom: n.clientHeight || o.clientHeight,
                                    height: n.clientHeight || o.clientHeight
                                }
                            }
                            return this._expandRectByRootMargin(e)
                        }, s.prototype._expandRectByRootMargin = function(t) {
                            var e = this._rootMarginValues.map((function(e, r) {
                                    return "px" == e.unit ? e.value : e.value * (r % 2 ? t.width : t.height) / 100
                                })),
                                r = {
                                    top: t.top - e[0],
                                    right: t.right + e[1],
                                    bottom: t.bottom + e[2],
                                    left: t.left - e[3]
                                };
                            return r.width = r.right - r.left, r.height = r.bottom - r.top, r
                        }, s.prototype._hasCrossedThreshold = function(t, e) {
                            var r = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                                n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                            if (r !== n)
                                for (var o = 0; o < this.thresholds.length; o++) {
                                    var i = this.thresholds[o];
                                    if (i == r || i == n || i < r !== i < n) return !0
                                }
                        }, s.prototype._rootIsInDom = function() {
                            return !this.root || d(t, this.root)
                        }, s.prototype._rootContainsTarget = function(e) {
                            var r = this.root && (this.root.ownerDocument || this.root) || t;
                            return d(r, e) && (!this.root || r == e.ownerDocument)
                        }, s.prototype._registerInstance = function() {
                            e.indexOf(this) < 0 && e.push(this)
                        }, s.prototype._unregisterInstance = function() {
                            var t = e.indexOf(this); - 1 != t && e.splice(t, 1)
                        }, window.IntersectionObserver = s, window.IntersectionObserverEntry = i
                    }
                function o(t) {
                    try {
                        return t.defaultView && t.defaultView.frameElement || null
                    } catch (e) {
                        return null
                    }
                }

                function i(t) {
                    this.time = t.time, this.target = t.target, this.rootBounds = h(t.rootBounds), this.boundingClientRect = h(t.boundingClientRect), this.intersectionRect = h(t.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }), this.isIntersecting = !!t.intersectionRect;
                    var e = this.boundingClientRect,
                        r = e.width * e.height,
                        n = this.intersectionRect,
                        o = n.width * n.height;
                    this.intersectionRatio = r ? Number((o / r).toFixed(4)) : this.isIntersecting ? 1 : 0
                }

                function s(t, e) {
                    var r = e || {};
                    if ("function" != typeof t) throw new Error("callback must be a function");
                    if (r.root && 1 != r.root.nodeType && 9 != r.root.nodeType) throw new Error("root must be a Document or Element");
                    this._checkForIntersections = function(t, e) {
                        var r = null;
                        return function() {
                            r || (r = setTimeout((function() {
                                t(), r = null
                            }), e))
                        }
                    }(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
                        return t.value + t.unit
                    })).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
                }

                function u(t, e, r, n) {
                    "function" == typeof t.addEventListener ? t.addEventListener(e, r, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, r)
                }

                function a(t, e, r, n) {
                    "function" == typeof t.removeEventListener ? t.removeEventListener(e, r, n || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, r)
                }

                function c(t, e) {
                    var r = Math.max(t.top, e.top),
                        n = Math.min(t.bottom, e.bottom),
                        o = Math.max(t.left, e.left),
                        i = Math.min(t.right, e.right),
                        s = i - o,
                        u = n - r;
                    return s >= 0 && u >= 0 && {
                        top: r,
                        bottom: n,
                        left: o,
                        right: i,
                        width: s,
                        height: u
                    } || null
                }

                function l(t) {
                    var e;
                    try {
                        e = t.getBoundingClientRect()
                    } catch (r) {}
                    return e ? (e.width && e.height || (e = {
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                        left: e.left,
                        width: e.right - e.left,
                        height: e.bottom - e.top
                    }), e) : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function h(t) {
                    return !t || "x" in t ? t : {
                        top: t.top,
                        y: t.top,
                        bottom: t.bottom,
                        left: t.left,
                        x: t.left,
                        right: t.right,
                        width: t.width,
                        height: t.height
                    }
                }

                function f(t, e) {
                    var r = e.top - t.top,
                        n = e.left - t.left;
                    return {
                        top: r,
                        left: n,
                        height: e.height,
                        width: e.width,
                        bottom: r + e.height,
                        right: n + e.width
                    }
                }

                function d(t, e) {
                    for (var r = e; r;) {
                        if (r == t) return !0;
                        r = p(r)
                    }
                    return !1
                }

                function p(e) {
                    var r = e.parentNode;
                    return 9 == e.nodeType && e != t ? o(e) : (r && r.assignedSlot && (r = r.assignedSlot.parentNode), r && 11 == r.nodeType && r.host ? r.host : r)
                }

                function g(t) {
                    return t && 9 === t.nodeType
                }
            }()
        },
        3579: function(t, e, r) {
            "use strict";
            var n = r(1682);

            function o(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(r), !0).forEach((function(e) {
                        n(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            e.default = function(t, e) {
                var r = s.default,
                    n = {
                        loading: function(t) {
                            t.error, t.isLoading;
                            return t.pastDelay, null
                        }
                    };
                t instanceof Promise ? n.loader = function() {
                    return t
                } : "function" === typeof t ? n.loader = t : "object" === typeof t && (n = i(i({}, n), t));
                var o = n = i(i({}, n), e);
                if (o.suspense) throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");
                if (o.suspense) return r(o);
                n.loadableGenerated && delete(n = i(i({}, n), n.loadableGenerated)).loadableGenerated;
                if ("boolean" === typeof n.ssr) {
                    if (!n.ssr) return delete n.ssr, a(r, n);
                    delete n.ssr
                }
                return r(n)
            };
            u(r(7294));
            var s = u(r(3668));

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function a(t, e) {
                return delete e.webpack, delete e.modules, t(e)
            }
        },
        3982: function(t, e, r) {
            "use strict";
            var n;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LoadableContext = void 0;
            var o = ((n = r(7294)) && n.__esModule ? n : {
                default: n
            }).default.createContext(null);
            e.LoadableContext = o
        },
        3668: function(t, e, r) {
            "use strict";
            var n = r(2553),
                o = r(2012),
                i = r(1682);

            function s(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(r), !0).forEach((function(e) {
                        i(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function a(t, e) {
                var r = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" === typeof t) return c(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(t, e)
                        }(t)) || e && t && "number" === typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, s = !0,
                    u = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return s = t.done, t
                    },
                    e: function(t) {
                        u = !0, i = t
                    },
                    f: function() {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var l, h = (l = r(7294)) && l.__esModule ? l : {
                    default: l
                },
                f = r(7161),
                d = r(3982);
            var p = [],
                g = [],
                b = !1;

            function v(t) {
                var e = t(),
                    r = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return r.promise = e.then((function(t) {
                    return r.loading = !1, r.loaded = t, t
                })).catch((function(t) {
                    throw r.loading = !1, r.error = t, t
                })), r
            }
            var m = function() {
                function t(e, r) {
                    n(this, t), this._loadFn = e, this._opts = r, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return o(t, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var t = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var e = this._res,
                            r = this._opts;
                        e.loading && ("number" === typeof r.delay && (0 === r.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function() {
                            t._update({
                                pastDelay: !0
                            })
                        }), r.delay)), "number" === typeof r.timeout && (this._timeout = setTimeout((function() {
                            t._update({
                                timedOut: !0
                            })
                        }), r.timeout))), this._res.promise.then((function() {
                            t._update({}), t._clearTimeouts()
                        })).catch((function(e) {
                            t._update({}), t._clearTimeouts()
                        })), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(t) {
                        this._state = u(u({}, this._state), {}, {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }, t), this._callbacks.forEach((function(t) {
                            return t()
                        }))
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(t) {
                        var e = this;
                        return this._callbacks.add(t),
                            function() {
                                e._callbacks.delete(t)
                            }
                    }
                }]), t
            }();

            function y(t) {
                return function(t, e) {
                    var r = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        webpack: null,
                        modules: null,
                        suspense: !1
                    }, e);
                    r.suspense && (r.lazy = h.default.lazy(r.loader));
                    var n = null;

                    function o() {
                        if (!n) {
                            var e = new m(t, r);
                            n = {
                                getCurrentValue: e.getCurrentValue.bind(e),
                                subscribe: e.subscribe.bind(e),
                                retry: e.retry.bind(e),
                                promise: e.promise.bind(e)
                            }
                        }
                        return n.promise()
                    }
                    if (!b && "function" === typeof r.webpack && !r.suspense) {
                        var i = r.webpack();
                        g.push((function(t) {
                            var e, r = a(i);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n = e.value;
                                    if (-1 !== t.indexOf(n)) return o()
                                }
                            } catch (s) {
                                r.e(s)
                            } finally {
                                r.f()
                            }
                        }))
                    }
                    var s = r.suspense ? function(t, e) {
                        return h.default.createElement(r.lazy, u(u({}, t), {}, {
                            ref: e
                        }))
                    } : function(t, e) {
                        o();
                        var i = h.default.useContext(d.LoadableContext),
                            s = f.useSubscription(n);
                        return h.default.useImperativeHandle(e, (function() {
                            return {
                                retry: n.retry
                            }
                        }), []), i && Array.isArray(r.modules) && r.modules.forEach((function(t) {
                            i(t)
                        })), h.default.useMemo((function() {
                            return s.loading || s.error ? h.default.createElement(r.loading, {
                                isLoading: s.loading,
                                pastDelay: s.pastDelay,
                                timedOut: s.timedOut,
                                error: s.error,
                                retry: n.retry
                            }) : s.loaded ? h.default.createElement(function(t) {
                                return t && t.__esModule ? t.default : t
                            }(s.loaded), t) : null
                        }), [t, s])
                    };
                    return s.preload = function() {
                        return !r.suspense && o()
                    }, s.displayName = "LoadableComponent", h.default.forwardRef(s)
                }(v, t)
            }

            function w(t, e) {
                for (var r = []; t.length;) {
                    var n = t.pop();
                    r.push(n(e))
                }
                return Promise.all(r).then((function() {
                    if (t.length) return w(t, e)
                }))
            }
            y.preloadAll = function() {
                return new Promise((function(t, e) {
                    w(p).then(t, e)
                }))
            }, y.preloadReady = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise((function(e) {
                    var r = function() {
                        return b = !0, e()
                    };
                    w(g, t).then(r, r)
                }))
            }, window.__NEXT_PRELOADREADY = y.preloadReady;
            var _ = y;
            e.default = _
        },
        5009: function(t, e, r) {
            "use strict";
            r.d(e, {
                G: function() {
                    return a
                },
                U: function() {
                    return c
                }
            });
            var n = r(7294),
                o = [{
                    title: "About us",
                    url: "/about-us"
                }, {
                    title: "Businesses",
                    url: "/businesses"
                }, {
                    title: "Careers",
                    url: "/careers"
                }, {
                    title: "ESG",
                    url: "/esg"
                }, {
                    title: "Results",
                    url: "/results"
                }, {
                    title: "Group news",
                    url: "/group-news"
                }, {
                    title: "Contact us",
                    url: "/contact-us"
                }],
                i = [{
                    title: "About us",
                    url: "/about-us",
                    links: [{
                        url: "/about-us#our-story",
                        title: "Our history"
                    }, {
                        url: "/about-us#our-editorial-philosophy",
                        title: "Our structure"
                    }, {
                        url: "/about-us#our-values",
                        title: "Our values"
                    }, {
                        url: "/about-us#our-offices-with-map",
                        title: "Our offices"
                    }]
                }, {
                    title: "Businesses",
                    url: "/businesses",
                    links: [{
                        url: "/businesses/the-economist",
                        title: "The Economist"
                    }, {
                        url: "/businesses/economist-impact",
                        title: "Economist Impact"
                    }, {
                        url: "/businesses/economist-intelligence",
                        title: "Economist Intelligence"
                    }, {
                        url: "/businesses/economist-education",
                        title: "Economist Education"
                    }]
                }, {
                    title: "Careers",
                    url: "/careers",
                    links: [{
                        url: "/careers/find-your-team",
                        title: "Careers"
                    }, {
                        url: "/careers/working-here",
                        title: "Working here"
                    }, {
                        url: "/careers#diversity-equity-and-inclusion",
                        title: "DEI"
                    }]
                }, {
                    title: "ESG",
                    url: "/esg",
                    links: [{
                        url: "/esg#environmental-sustainability",
                        title: "Sustainability"
                    }, {
                        url: "/esg#social",
                        title: "Social"
                    }, {
                        url: "/esg#esg-governance",
                        title: "Governance"
                    }, {
                        url: "/esg/executive-leadership",
                        title: "Leadership"
                    }]
                }, {
                    title: "Results",
                    url: "/results",
                    links: [{
                        url: "/results#reports",
                        title: "Annual & interim results"
                    }, {
                        url: "/results#agm-and-shareholder-calls",
                        title: "AGM & shareholder calls"
                    }]
                }, {
                    title: "Group news",
                    url: "/group-news",
                    links: [{
                        url: "/group-news#main",
                        title: "Featured news"
                    }, {
                        url: "/group-news#content",
                        title: "More news"
                    }, {
                        url: "/group-news#press-office",
                        title: "Press office"
                    }]
                }],
                s = [{
                    url: "/terms-of-use",
                    title: "Terms of use"
                }, {
                    url: "/privacy-policy",
                    title: "Privacy"
                }, {
                    url: "/cookies-policy",
                    title: "Cookie policy"
                }, {
                    url: "#",
                    title: "Manage cookies",
                    onClick: function(t) {
                        t.preventDefault(), window._cmp_.open()
                    }
                }, {
                    url: "/accessibility-policy",
                    title: "Accessibility"
                }, {
                    url: "/contact-us",
                    title: "Contact us"
                }],
                u = r(5893),
                a = (0, n.createContext)(),
                c = function(t) {
                    return (0, u.jsx)(a.Provider, {
                        value: {
                            globalHeaderLinks: o,
                            globalFooterLinks: i,
                            legalLinks: s
                        },
                        children: t.children
                    })
                }
        },
        3455: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(2809),
                o = r(5009),
                i = r(5152),
                s = (r(5767), r(6337), r(215)),
                u = r(5893);

            function a(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(r), !0).forEach((function(e) {
                        (0, n.Z)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            e.default = function(t) {
                var e = t.Component,
                    n = t.pageProps,
                    a = (0, i.default)((function() {
                        return r.e(367).then(r.bind(r, 1367))
                    }), {
                        ssr: !1,
                        loadableGenerated: {
                            webpack: function() {
                                return [1367]
                            },
                            modules: ["_app.js -> @/components/helpers/Polyfills"]
                        }
                    });
                return (0, s.N9)(), (0, u.jsxs)(o.U, {
                    children: [(0, u.jsx)(a, {}), (0, u.jsx)(e, c({}, n))]
                })
            }
        },
        1780: function(t, e, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return r(3455)
            }])
        },
        5767: function() {},
        5152: function(t, e, r) {
            t.exports = r(3579)
        },
        4488: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.ContentRect = function(t) {
                if ("getBBox" in t) {
                    var e = t.getBBox();
                    return Object.freeze({
                        height: e.height,
                        left: 0,
                        top: 0,
                        width: e.width
                    })
                }
                var r = window.getComputedStyle(t);
                return Object.freeze({
                    height: parseFloat(r.height || "0"),
                    left: parseFloat(r.paddingLeft || "0"),
                    top: parseFloat(r.paddingTop || "0"),
                    width: parseFloat(r.width || "0")
                })
            }
        },
        8981: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(4488),
                o = function() {
                    function t(t) {
                        this.target = t, this.$$broadcastWidth = this.$$broadcastHeight = 0
                    }
                    return Object.defineProperty(t.prototype, "broadcastWidth", {
                        get: function() {
                            return this.$$broadcastWidth
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "broadcastHeight", {
                        get: function() {
                            return this.$$broadcastHeight
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.isActive = function() {
                        var t = n.ContentRect(this.target);
                        return !!t && (t.width !== this.broadcastWidth || t.height !== this.broadcastHeight)
                    }, t
                }();
            e.ResizeObservation = o
        },
        215: function(t, e, r) {
            "use strict";
            var n = r(8981),
                o = r(2778),
                i = [],
                s = function() {
                    function t(t) {
                        this.$$observationTargets = [], this.$$activeTargets = [], this.$$skippedTargets = [];
                        var e = function(t) {
                            if ("undefined" === typeof t) return "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";
                            if ("function" !== typeof t) return "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
                        }(t);
                        if (e) throw TypeError(e);
                        this.$$callback = t
                    }
                    return t.prototype.observe = function(t) {
                        var e, r = a("observe", t);
                        if (r) throw TypeError(r);
                        c(this.$$observationTargets, t) >= 0 || (this.$$observationTargets.push(new n.ResizeObservation(t)), e = this, i.indexOf(e) < 0 && (i.push(e), g()))
                    }, t.prototype.unobserve = function(t) {
                        var e = a("unobserve", t);
                        if (e) throw TypeError(e);
                        var r = c(this.$$observationTargets, t);
                        r < 0 || (this.$$observationTargets.splice(r, 1), 0 === this.$$observationTargets.length && u(this))
                    }, t.prototype.disconnect = function() {
                        this.$$observationTargets = [], this.$$activeTargets = [], u(this)
                    }, t
                }();

            function u(t) {
                var e = i.indexOf(t);
                e >= 0 && (i.splice(e, 1), v())
            }

            function a(t, e) {
                return "undefined" === typeof e ? "Failed to execute '" + t + "' on 'ResizeObserver': 1 argument required, but only 0 present." : e && e.nodeType === window.Node.ELEMENT_NODE ? void 0 : "Failed to execute '" + t + "' on 'ResizeObserver': parameter 1 is not of type 'Element'."
            }

            function c(t, e) {
                for (var r = 0; r < t.length; r += 1)
                    if (t[r].target === e) return r;
                return -1
            }
            var l, h = function(t) {
                    i.forEach((function(e) {
                        e.$$activeTargets = [], e.$$skippedTargets = [], e.$$observationTargets.forEach((function(r) {
                            r.isActive() && (d(r.target) > t ? e.$$activeTargets.push(r) : e.$$skippedTargets.push(r))
                        }))
                    }))
                },
                f = function() {
                    var t = 1 / 0;
                    return i.forEach((function(e) {
                        if (e.$$activeTargets.length) {
                            var r = [];
                            e.$$activeTargets.forEach((function(e) {
                                var n = new o.ResizeObserverEntry(e.target);
                                r.push(n), e.$$broadcastWidth = n.contentRect.width, e.$$broadcastHeight = n.contentRect.height;
                                var i = d(e.target);
                                i < t && (t = i)
                            })), e.$$callback(r, e), e.$$activeTargets = []
                        }
                    })), t
                },
                d = function(t) {
                    for (var e = 0; t.parentNode;) t = t.parentNode, e += 1;
                    return e
                },
                p = function() {
                    var t = 0;
                    for (h(t); i.some((function(t) {
                            return !!t.$$activeTargets.length
                        }));) t = f(), h(t);
                    i.some((function(t) {
                        return !!t.$$skippedTargets.length
                    })) && function() {
                        var t = new window.ErrorEvent("ResizeLoopError", {
                            message: "ResizeObserver loop completed with undelivered notifications."
                        });
                        window.dispatchEvent(t)
                    }()
                },
                g = function() {
                    l || b()
                },
                b = function() {
                    l = window.requestAnimationFrame((function() {
                        p(), b()
                    }))
                },
                v = function() {
                    l && !i.some((function(t) {
                        return !!t.$$observationTargets.length
                    })) && (window.cancelAnimationFrame(l), l = void 0)
                };
            e.N9 = function() {
                return window.ResizeObserver = s
            }
        },
        2778: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(4488),
                o = function(t) {
                    this.target = t, this.contentRect = n.ContentRect(t)
                };
            e.ResizeObserverEntry = o
        },
        2809: function(t, e, r) {
            "use strict";

            function n(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            r.d(e, {
                Z: function() {
                    return n
                }
            })
        }
    },
    function(t) {
        var e = function(e) {
            return t(t.s = e)
        };
        t.O(0, [774, 179], (function() {
            return e(1780), e(9898)
        }));
        var r = t.O();
        _N_E = r
    }
]);