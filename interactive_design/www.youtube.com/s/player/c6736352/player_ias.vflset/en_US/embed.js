(function(g) {
    var window = this;
    'use strict';
    var GWa = function(a, b) {
            var c = (b - a.j) / (a.u - a.j);
            if (0 >= c) return 0;
            if (1 <= c) return 1;
            for (var d = 0, e = 1, f = 0, k = 0; 8 > k; k++) {
                f = g.Mp(a, c);
                var l = (g.Mp(a, c + 1E-6) - f) / 1E-6;
                if (1E-6 > Math.abs(f - b)) return c;
                if (1E-6 > Math.abs(l)) break;
                else f < b ? d = c : e = c, c -= (f - b) / l
            }
            for (k = 0; 1E-6 < Math.abs(f - b) && 8 > k; k++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = g.Mp(a, c);
            return c
        },
        Y2 = function() {
            return {
                G: "svg",
                W: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 110 26",
                    width: "100%"
                },
                U: [{
                    G: "path",
                    Ib: !0,
                    L: "ytp-svg-fill",
                    W: {
                        d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                    }
                }]
            }
        },
        Z2 = function(a) {
            g.G.call(this);
            this.callback = a;
            this.u = new g.Lp(0, 0, .4, 0, .2, 1, 1, 1);
            this.delay = new g.mp(this.next, window, this);
            this.startTime = this.duration = this.j = this.from = NaN;
            g.H(this, this.delay)
        },
        $2 = function(a) {
            g.W.call(this, {
                G: "div",
                L: "ytp-related-on-error-overlay"
            });
            var b = this;
            this.api = a;
            this.D = this.j = 0;
            this.C = new g.cA(this);
            this.B = [];
            this.suggestionData = [];
            this.containerWidth = 0;
            this.title = new g.W({
                G: "h2",
                L: "ytp-related-title",
                oa: "{{title}}"
            });
            this.previous = new g.W({
                G: "button",
                Fa: ["ytp-button", "ytp-previous"],
                W: {
                    "aria-label": "Show previous suggested videos"
                },
                U: [g.lI()]
            });
            this.N = new Z2(function(f) {
                b.suggestions.element.scrollLeft = -f
            });
            this.tileWidth = this.u = 0;
            this.J = !0;
            this.next = new g.W({
                G: "button",
                Fa: ["ytp-button", "ytp-next"],
                W: {
                    "aria-label": "Show more suggested videos"
                },
                U: [g.mI()]
            });
            g.H(this, this.C);
            a = a.V();
            this.K = a.j;
            g.H(this, this.title);
            this.title.Ba(this.element);
            this.suggestions = new g.W({
                G: "div",
                L: "ytp-suggestions"
            });
            g.H(this, this.suggestions);
            this.suggestions.Ba(this.element);
            g.H(this, this.previous);
            this.previous.Ba(this.element);
            this.previous.Oa("click", this.JS, this);
            g.H(this, this.N);
            for (var c = {
                    Rr: 0
                }; 16 > c.Rr; c = {
                    Rr: c.Rr
                },
                c.Rr++) {
                var d = new g.W({
                    G: "a",
                    L: "ytp-suggestion-link",
                    W: {
                        href: "{{link}}",
                        target: a.K,
                        "aria-label": "{{aria_label}}"
                    },
                    U: [{
                        G: "div",
                        L: "ytp-suggestion-image",
                        U: [{
                            G: "div",
                            W: {
                                "data-is-live": "{{is_live}}"
                            },
                            L: "ytp-suggestion-duration",
                            oa: "{{duration}}"
                        }]
                    }, {
                        G: "div",
                        L: "ytp-suggestion-title",
                        W: {
                            title: "{{hover_title}}"
                        },
                        oa: "{{title}}"
                    }, {
                        G: "div",
                        L: "ytp-suggestion-author",
                        oa: "{{views_or_author}}"
                    }]
                });
                g.H(this, d);
                d.Ba(this.suggestions.element);
                var e = d.Ca("ytp-suggestion-link");
                g.Dm(e, "transitionDelay", c.Rr / 20 + "s");
                this.C.T(e, "click", function(f) {
                    return function(k) {
                        var l = b.suggestionData[f.Rr],
                            m = l.sessionData;
                        g.IL(k, b.api, b.K, m || void 0) && b.api.wk(l.videoId, m, l.playlistId)
                    }
                }(c));
                this.B.push(d)
            }
            g.H(this, this.next);
            this.next.Ba(this.element);
            this.next.Oa("click", this.IS, this);
            this.C.T(this.api, "videodatachange", this.onVideoDataChange);
            this.resize(this.api.bb().getPlayerSize());
            this.onVideoDataChange();
            this.show()
        },
        a3 = function(a) {
            a.next.element.style.bottom = a.D + "px";
            a.previous.element.style.bottom = a.D + "px";
            var b = a.u,
                c = a.containerWidth - a.suggestionData.length * (a.tileWidth + a.j);
            g.O(a.element, "ytp-scroll-min", 0 <= b);
            g.O(a.element, "ytp-scroll-max", b <= c)
        },
        HWa = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.B[b],
                    e = c.shortViewCount ? c.shortViewCount : c.author,
                    f = c.rl(),
                    k = a.api.V();
                if (g.kC(k)) {
                    var l = {};
                    k.ma && g.kK(l, k.loaderUrl);
                    f = g.cj(f, g.jK(l, "emb_rel_err"))
                }
                d.element.style.display = "";
                k = d.Ca("ytp-suggestion-title");
                g.Jp.test(c.title) ? k.dir = "rtl" : g.QRa.test(c.title) && (k.dir = "ltr");
                k = d.Ca("ytp-suggestion-author");
                g.Jp.test(e) ? k.dir = "rtl" : g.QRa.test(e) && (k.dir = "ltr");
                k = c.isLivePlayback ? "Live" : c.lengthSeconds ? g.fJ(c.lengthSeconds) : "";
                d.update({
                    views_or_author: e,
                    duration: k,
                    link: f,
                    hover_title: c.title,
                    title: c.title,
                    aria_label: c.ariaLabel || null,
                    is_live: c.isLivePlayback
                });
                d = d.Ca("ytp-suggestion-image");
                c = c.Re();
                d.style.backgroundImage = c ? "url(" + c + ")" : ""
            }
            for (; b < a.B.length; b++) a.B[b].element.style.display = "none";
            a3(a)
        },
        b3 = function(a) {
            g.NL.call(this, a);
            var b = this;
            this.j = null;
            var c = a.V(),
                d = {
                    G: "svg",
                    W: {
                        fill: "#fff",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        width: "100%"
                    },
                    U: [{
                        G: "path",
                        W: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }, {
                        G: "path",
                        W: {
                            d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                        }
                    }]
                };
            g.vC(c) && (d = {
                G: "svg",
                W: {
                    fill: "none",
                    height: "100%",
                    viewBox: "0 0 25 25",
                    width: "100%"
                },
                U: [{
                        G: "g",
                        W: {
                            "clip-path": "url(#clip0)",
                            fill: "#fff"
                        },
                        U: [{
                            G: "path",
                            W: {
                                d: "M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z"
                            }
                        }, {
                            G: "path",
                            W: {
                                d: "M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z"
                            }
                        }]
                    },
                    {
                        G: "defs",
                        U: [{
                            G: "clipPath",
                            W: {
                                id: "clip0"
                            },
                            U: [{
                                G: "path",
                                W: {
                                    d: "M0 0h24v24H0z",
                                    fill: "#fff",
                                    transform: "translate(.57 .5)"
                                }
                            }]
                        }]
                    }
                ]
            });
            var e = {
                    target: c.K
                },
                f = ["ytp-small-redirect"];
            if (c.C) f.push("no-link");
            else {
                var k = g.VC(c);
                c.ma && (k = IWa(k, c.loaderUrl));
                e.href = k;
                e["aria-label"] = "Visit YouTube to search for more videos"
            }
            c = new g.W({
                G: "a",
                Fa: f,
                W: e,
                U: [d]
            });
            c.Ba(this.element);
            g.H(this, c);
            a.V().C || (this.j = new $2(a), this.j.Ba(this.element), g.H(this, this.j));
            this.T(a, "videodatachange", function() {
                b.show()
            });
            this.resize(this.api.bb().getPlayerSize())
        },
        JWa = function(a, b) {
            a.Ca("ytp-error-content").style.paddingTop = "0px";
            var c = a.Ca("ytp-error-content"),
                d = c.clientHeight;
            a.j.resize(b, b.height - d);
            c.style.paddingTop = (b.height - a.j.element.clientHeight) / 2 - d / 2 + "px"
        },
        KWa = function(a, b) {
            var c;
            b.reason && (c3(b.reason) ? c = g.Kw(b.reason) : c = g.OL(g.Jw(b.reason)), a.Ad(c, "content"));
            var d;
            b.subreason && (c3(b.subreason) ? d = g.Kw(b.subreason) : d = g.OL(g.Jw(b.subreason)), a.Ad(d, "subreason"));
            if (b.proceedButton && b.proceedButton.buttonRenderer && (c = a.Ca("ytp-error-content-wrap-subreason"), d = b.proceedButton.buttonRenderer, b = g.Yh("A"), d.text && d.text.simpleText)) {
                var e = d.text.simpleText;
                b.textContent = e;
                a: {
                    for (var f = g.Ph("A", c), k = 0; k < f.length; k++)
                        if (f[k].textContent === e) {
                            e = !0;
                            break a
                        }
                    e = !1
                }
                if (!e) {
                    var l, m;
                    e = null ==
                        d ? void 0 : null == (l = d.navigationEndpoint) ? void 0 : null == (m = l.urlEndpoint) ? void 0 : m.url;
                    var n, p;
                    l = null == d ? void 0 : null == (n = d.navigationEndpoint) ? void 0 : null == (p = n.urlEndpoint) ? void 0 : p.target;
                    e && (a = a.api.V(), a.ma && (e = IWa(e, a.loaderUrl)), b.setAttribute("href", e));
                    l && b.setAttribute("target", l);
                    a = g.Yh("DIV");
                    a.appendChild(b);
                    c.appendChild(a)
                }
            }
        },
        c3 = function(a) {
            if (a.runs)
                for (var b = 0; b < a.runs.length; b++)
                    if (a.runs[b].navigationEndpoint) return !0;
            return !1
        },
        IWa = function(a, b) {
            var c = {};
            g.kK(c, b);
            return g.cj(a, c)
        },
        d3 = function(a, b) {
            g.W.call(this, {
                G: "a",
                Fa: ["ytp-impression-link"],
                W: {
                    target: "{{target}}",
                    href: "{{url}}",
                    "aria-label": "Watch on YouTube"
                },
                U: [{
                    G: "div",
                    L: "ytp-impression-link-content",
                    W: {
                        "aria-hidden": "true"
                    },
                    U: [{
                        G: "div",
                        L: "ytp-impression-link-text",
                        oa: "Watch on"
                    }, {
                        G: "div",
                        L: "ytp-impression-link-logo",
                        U: [Y2()]
                    }]
                }]
            });
            this.api = a;
            this.u = b;
            this.La("target", a.V().K);
            this.api.Ab(this.element, this, 96714);
            this.T(this.api, "presentingplayerstatechange", this.qg);
            this.T(this.api, "videoplayerreset", this.j);
            this.T(this.element, "click", this.onClick);
            this.j()
        },
        LWa = function(a) {
            var b = {};
            a.api.V().ma && g.kK(b, a.api.V().loaderUrl);
            return g.cj(a.api.getVideoUrl(), g.jK(b, "emb_imp_woyt"))
        },
        e3 = function(a) {
            g.W.call(this, {
                G: "div",
                Fa: ["ytp-mobile-a11y-hidden-seek-button"],
                U: [{
                    G: "button",
                    Fa: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
                    W: {
                        "aria-label": "Rewind 10 seconds",
                        "aria-hidden": "false"
                    }
                }, {
                    G: "button",
                    Fa: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
                    W: {
                        "aria-label": "Fast forward 10 seconds",
                        "aria-hidden": "false"
                    }
                }]
            });
            this.api = a;
            this.j = this.Ca("ytp-mobile-a11y-hidden-seek-button-rewind");
            this.forwardButton = this.Ca("ytp-mobile-a11y-hidden-seek-button-forward");
            this.api.Ab(this.j, this, 141902);
            this.api.Ab(this.forwardButton,
                this, 141903);
            this.T(this.api, "presentingplayerstatechange", this.qg);
            this.T(this.j, "click", this.u);
            this.T(this.forwardButton, "click", this.B);
            this.qg()
        },
        f3 = function(a) {
            g.W.call(this, {
                G: "div",
                L: "ytp-muted-autoplay-endscreen-overlay",
                U: [{
                    G: "div",
                    L: "ytp-muted-autoplay-end-panel",
                    U: [{
                        G: "div",
                        L: "ytp-muted-autoplay-end-text",
                        oa: "{{text}}"
                    }]
                }]
            });
            this.api = a;
            this.B = this.Ca("ytp-muted-autoplay-end-panel");
            this.j = new g.GL(this.api);
            g.H(this, this.j);
            this.j.Ba(this.B, 0);
            this.api.Ab(this.element, this, 52428);
            this.T(this.api, "presentingplayerstatechange", this.u);
            this.Oa("click", this.onClick);
            this.hide()
        },
        g3 = function(a) {
            g.W.call(this, {
                G: "div",
                L: "ytp-muted-autoplay-overlay",
                U: [{
                    G: "div",
                    L: "ytp-muted-autoplay-bottom-buttons",
                    U: [{
                        G: "button",
                        Fa: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                        U: [{
                            G: "div",
                            Fa: ["ytp-muted-autoplay-equalizer-icon"],
                            U: [{
                                G: "svg",
                                W: {
                                    height: "100%",
                                    version: "1.1",
                                    viewBox: "-4 -4 24 24",
                                    width: "100%"
                                },
                                U: [{
                                    G: "g",
                                    W: {
                                        fill: "#fff"
                                    },
                                    U: [{
                                        G: "rect",
                                        L: "ytp-equalizer-bar-left",
                                        W: {
                                            height: "9",
                                            width: "4",
                                            x: "1",
                                            y: "7"
                                        }
                                    }, {
                                        G: "rect",
                                        L: "ytp-equalizer-bar-middle",
                                        W: {
                                            height: "14",
                                            width: "4",
                                            x: "6",
                                            y: "2"
                                        }
                                    }, {
                                        G: "rect",
                                        L: "ytp-equalizer-bar-right",
                                        W: {
                                            height: "12",
                                            width: "4",
                                            x: "11",
                                            y: "4"
                                        }
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            });
            this.api = a;
            this.bottomButtons = this.Ca("ytp-muted-autoplay-bottom-buttons");
            this.Ca("ytp-muted-autoplay-equalizer");
            this.B = new g.L(this.u, 4E3, this);
            a.Ab(this.element, this, 39306);
            this.T(a, "presentingplayerstatechange", this.j);
            this.T(a, "onMutedAutoplayStarts", this.j);
            this.Oa("click", this.onClick);
            this.hide()
        },
        h3 = function(a, b) {
            g.W.call(this, {
                G: "div",
                L: "ytp-pause-overlay",
                W: {
                    tabIndex: "-1"
                }
            });
            var c = this;
            this.api = a;
            this.J = b;
            this.j = new g.cA(this);
            this.C = new g.SI(this, 1E3, !1, 100);
            this.B = [];
            this.suggestionData = [];
            this.containerWidth = 0;
            this.D = !1;
            this.Z = 0;
            this.title = new g.W({
                G: "h2",
                L: "ytp-related-title",
                oa: "{{title}}"
            });
            this.previous = new g.W({
                G: "button",
                Fa: ["ytp-button", "ytp-previous"],
                W: {
                    "aria-label": "Show previous suggested videos"
                },
                U: [g.lI()]
            });
            this.N = new Z2(function(f) {
                c.suggestions.element.scrollLeft = -f
            });
            this.X = this.tileWidth = this.u = 0;
            this.next = new g.W({
                G: "button",
                Fa: ["ytp-button", "ytp-next"],
                W: {
                    "aria-label": "Show more suggested videos"
                },
                U: [g.mI()]
            });
            this.expandButton = new g.W({
                G: "button",
                Fa: ["ytp-button", "ytp-expand"],
                oa: "More videos"
            });
            g.H(this, this.j);
            g.H(this, this.C);
            b = a.V();
            "0" === b.controlsType && g.M(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
            this.K = b.j;
            g.H(this, this.title);
            this.title.Ba(this.element);
            this.suggestions = new g.W({
                G: "div",
                L: "ytp-suggestions"
            });
            g.H(this, this.suggestions);
            this.suggestions.Ba(this.element);
            g.H(this, this.previous);
            this.previous.Ba(this.element);
            this.previous.Oa("click", this.LS, this);
            g.H(this, this.N);
            for (a = {
                    Sr: 0
                }; 16 > a.Sr; a = {
                    Sr: a.Sr
                }, a.Sr++) {
                var d = new g.W({
                    G: "a",
                    L: "ytp-suggestion-link",
                    W: {
                        href: "{{link}}",
                        target: b.K,
                        "aria-label": "{{aria_label}}"
                    },
                    U: [{
                        G: "div",
                        L: "ytp-suggestion-image"
                    }, {
                        G: "div",
                        L: "ytp-suggestion-overlay",
                        W: {
                            style: "{{blink_rendering_hack}}",
                            "aria-hidden": "{{aria_hidden}}"
                        },
                        U: [{
                            G: "div",
                            L: "ytp-suggestion-title",
                            oa: "{{title}}"
                        }, {
                            G: "div",
                            L: "ytp-suggestion-author",
                            oa: "{{author_and_views}}"
                        }, {
                            G: "div",
                            W: {
                                "data-is-live": "{{is_live}}"
                            },
                            L: "ytp-suggestion-duration",
                            oa: "{{duration}}"
                        }]
                    }]
                });
                g.H(this, d);
                d.Ba(this.suggestions.element);
                var e = d.Ca("ytp-suggestion-link");
                g.Dm(e, "transitionDelay", a.Sr / 20 + "s");
                this.j.T(e, "click", function(f) {
                    return function(k) {
                        var l = f.Sr;
                        if (1E3 > (0, g.R)() - c.Z) g.ou(k), document.activeElement.blur();
                        else {
                            l = c.suggestionData[l];
                            var m = l.sessionData;
                            g.IL(k, c.api, c.K, m || void 0) && c.api.wk(l.videoId, m, l.playlistId)
                        }
                    }
                }(a));
                this.B.push(d)
            }
            g.H(this, this.next);
            this.next.Ba(this.element);
            this.next.Oa("click", this.KS, this);
            b = new g.W({
                G: "button",
                Fa: ["ytp-button", "ytp-collapse"],
                W: {
                    "aria-label": "Hide more videos"
                },
                U: [{
                    G: "svg",
                    W: {
                        height: "100%",
                        viewBox: "0 0 16 16",
                        width: "100%"
                    },
                    U: [{
                        G: "path",
                        W: {
                            d: "M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",
                            fill: "#fff"
                        }
                    }]
                }]
            });
            g.H(this, b);
            b.Ba(this.element);
            b.Oa("click", this.SW, this);
            g.H(this, this.expandButton);
            this.expandButton.Ba(this.element);
            this.expandButton.Oa("click", this.TW,
                this);
            this.j.T(this.api, "appresize", this.xb);
            this.j.T(this.api, "fullscreentoggled", this.Sm);
            this.j.T(this.api, "presentingplayerstatechange", this.Sc);
            this.j.T(this.api, "videodatachange", this.onVideoDataChange);
            this.xb(this.api.bb().getPlayerSize());
            this.onVideoDataChange()
        },
        i3 = function(a) {
            var b = a.J.bf() ? 32 : 16;
            b = a.X / 2 + b;
            a.next.element.style.bottom = b + "px";
            a.previous.element.style.bottom = b + "px";
            b = a.u;
            var c = a.containerWidth - a.suggestionData.length * (a.tileWidth + 8);
            g.O(a.element, "ytp-scroll-min", 0 <= b);
            g.O(a.element, "ytp-scroll-max", b <= c)
        },
        MWa = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.B[b],
                    e = c.shortViewCount ? c.author + " \u2022 " + c.shortViewCount : c.author;
                d.element.style.display = "";
                g.PRa.test(c.title) && (d.Ca("ytp-suggestion-title").dir = "rtl");
                g.PRa.test(e) && (d.Ca("ytp-suggestion-author").dir = "rtl");
                var f = c.isLivePlayback ? "Live" : c.lengthSeconds ? g.fJ(c.lengthSeconds) : "";
                var k = c.rl();
                if (g.kC(a.api.V())) {
                    var l = {};
                    a.api.V().ma && g.kK(l, a.api.V().loaderUrl);
                    k = g.cj(k, g.jK(l, "emb_rel_pause"))
                }
                d.update({
                    author_and_views: e,
                    duration: f,
                    link: k,
                    title: c.title,
                    aria_label: c.ariaLabel || null,
                    is_live: c.isLivePlayback,
                    aria_hidden: !(!c.ariaLabel || a.api.V().S("embeds_rv_aria_hidden_killswitch")),
                    blink_rendering_hack: g.gA || g.iC ? "will-change: opacity" : void 0
                });
                d = d.Ca("ytp-suggestion-image");
                c = c.Re();
                d.style.backgroundImage = c ? "url(" + c + ")" : ""
            }
            for (; b < a.B.length; b++) a.B[b].element.style.display = "none";
            i3(a)
        },
        j3 = function(a) {
            var b = a.V();
            g.W.call(this, {
                G: "a",
                Fa: ["ytp-watermark", "yt-uix-sessionlink"],
                W: {
                    target: b.K,
                    href: "{{url}}",
                    "aria-label": g.HF("Watch on $WEBSITE", {
                        WEBSITE: g.GC(b)
                    }),
                    "data-sessionlink": "feature=player-watermark"
                },
                U: [Y2()]
            });
            this.api = a;
            this.j = null;
            this.u = !1;
            this.state = a.yb();
            a.Ab(this.element, this, 76758);
            this.T(a, "videodatachange", this.LI);
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.T(a, "appresize", this.xb);
            b = this.state;
            this.state !== b && (this.state =
                b);
            this.LI();
            this.onVideoDataChange();
            this.xb(a.bb().getPlayerSize())
        },
        k3 = function(a) {
            g.jL.call(this, a);
            this.I = a;
            this.j = new g.cA(this);
            g.H(this, this.j);
            this.load()
        },
        l3 = function(a, b) {
            var c = a.I.getPresentingPlayerType();
            a = {
                adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
                breakType: NWa.get(c) || "EMBEDS_AD_BREAK_TYPE_UNKNOWN",
                embedUrl: g.Fca(a.I.V().loaderUrl),
                eventType: b
            };
            g.xs("embedsAdEvent", a)
        };
    g.v(Z2, g.G);
    Z2.prototype.start = function(a, b, c) {
        this.from = a;
        this.j = b;
        this.duration = c;
        this.startTime = (0, g.R)();
        this.next()
    };
    Z2.prototype.next = function() {
        var a = (0, g.R)() - this.startTime;
        var b = this.u;
        a = GWa(b, a / this.duration);
        if (0 == a) b = b.K;
        else if (1 == a) b = b.N;
        else {
            var c = g.zh(b.K, b.D, a),
                d = g.zh(b.D, b.J, a);
            b = g.zh(b.J, b.N, a);
            c = g.zh(c, d, a);
            d = g.zh(d, b, a);
            b = g.zh(c, d, a)
        }
        b = g.xh(b, 0, 1);
        this.callback((this.j - this.from) * b + this.from);
        1 > b && this.delay.start()
    };
    g.v($2, g.W);
    g.h = $2.prototype;
    g.h.hide = function() {
        this.J = !0;
        g.W.prototype.hide.call(this)
    };
    g.h.show = function() {
        this.J = !1;
        g.W.prototype.show.call(this)
    };
    g.h.isHidden = function() {
        return this.J
    };
    g.h.IS = function() {
        this.scrollTo(this.u - this.containerWidth)
    };
    g.h.JS = function() {
        this.scrollTo(this.u + this.containerWidth)
    };
    g.h.resize = function(a, b) {
        var c = this.api.V(),
            d = 16 / 9,
            e = 650 <= a.width,
            f = 480 > a.width || 290 > a.height,
            k = Math.min(this.suggestionData.length, this.B.length);
        if (150 >= Math.min(a.width, a.height) || 0 === k || !c.Kb) this.hide();
        else {
            var l;
            if (e) {
                var m = l = 28;
                this.j = 16
            } else this.j = m = l = 8;
            if (f) {
                var n = 6;
                e = 14;
                var p = 12;
                f = 24;
                c = 12
            } else n = 8, e = 18, p = 16, f = 36, c = 16;
            a = a.width - (48 + l + m);
            l = Math.ceil(a / 150);
            l = Math.min(3, l);
            l = a / l - this.j;
            m = Math.floor(l / d);
            b && m + 100 > b && 50 < l && (m = Math.max(b, 50 / d), l = Math.ceil(a / (d * (m - 100) + this.j)), l = a / l - this.j,
                m = Math.floor(l / d));
            50 > l || g.UK(this.api) ? this.hide() : this.show();
            for (b = 0; b < k; b++) {
                d = this.B[b];
                var q = d.Ca("ytp-suggestion-image");
                q.style.width = l + "px";
                q.style.height = m + "px";
                d.Ca("ytp-suggestion-title").style.width = l + "px";
                d.Ca("ytp-suggestion-author").style.width = l + "px";
                d = d.Ca("ytp-suggestion-duration");
                d.style.display = d && 100 > l ? "none" : ""
            }
            k = e + n + p + 4;
            this.D = k + c + (m - f) / 2;
            this.suggestions.element.style.height = m + k + "px";
            this.tileWidth = l;
            this.containerWidth = a;
            this.u = 0;
            this.suggestions.element.scrollLeft = -0;
            a3(this)
        }
    };
    g.h.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.V();
        this.K = a.D ? !1 : b.j;
        a.suggestions ? this.suggestionData = g.Bn(a.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        HWa(this);
        a.D ? this.title.update({
            title: g.HF("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: a.author
            })
        }) : this.title.update({
            title: "More videos on YouTube"
        })
    };
    g.h.scrollTo = function(a) {
        a = g.xh(a, this.containerWidth - this.suggestionData.length * (this.tileWidth + this.j), 0);
        this.N.start(this.u, a, 1E3);
        this.u = a;
        a3(this)
    };
    g.v(b3, g.NL);
    b3.prototype.show = function() {
        g.NL.prototype.show.call(this);
        JWa(this, this.api.bb().getPlayerSize())
    };
    b3.prototype.resize = function(a) {
        g.NL.prototype.resize.call(this, a);
        this.j && (JWa(this, a), g.O(this.element, "related-on-error-overlay-visible", !this.j.isHidden()))
    };
    b3.prototype.u = function(a) {
        g.NL.prototype.u.call(this, a);
        var b = this.api.getVideoData();
        if (b.WE || b.playerErrorMessageRenderer)(a = b.WE) ? KWa(this, a) : b.playerErrorMessageRenderer && KWa(this, b.playerErrorMessageRenderer);
        else {
            var c;
            a.Ki && (b.er ? c3(b.er) ? c = g.Kw(b.er) : c = g.OL(g.Jw(b.er)) : c = g.OL(a.Ki), this.Ad(c, "subreason"))
        }
    };
    g.v(d3, g.W);
    d3.prototype.qg = function() {
        this.api.yb().isCued() || (this.hide(), this.api.Za(this.element, !1))
    };
    d3.prototype.j = function() {
        var a = this.api.getVideoData(),
            b = this.api.V(),
            c = this.api.getVideoData().D,
            d = b.Qb,
            e = !b.Kb,
            f = this.u.Ef(),
            k = g.vC(b);
        b = b.C;
        d || f || c || e || k || b || !a.videoId ? (this.hide(), this.api.Za(this.element, !1)) : (a = LWa(this), this.La("url", a), this.show())
    };
    d3.prototype.onClick = function(a) {
        var b = LWa(this);
        g.JL(b, this.api, a);
        this.api.wb(this.element)
    };
    d3.prototype.show = function() {
        this.api.yb().isCued() && (g.W.prototype.show.call(this), this.api.Io(this.element) && this.api.Za(this.element, !0))
    };
    g.v(e3, g.W);
    e3.prototype.qg = function() {
        var a = this.api.yb();
        !this.api.rf() || g.V(a, 2) && g.RK(this.api) || g.V(a, 64) ? (this.api.Za(this.j, !1), this.api.Za(this.forwardButton, !1), this.hide()) : (this.show(), this.api.Za(this.j, !0), this.api.Za(this.forwardButton, !0))
    };
    e3.prototype.u = function() {
        this.api.seekBy(-10 * this.api.getPlaybackRate());
        this.api.wb(this.j)
    };
    e3.prototype.B = function() {
        this.api.seekBy(10 * this.api.getPlaybackRate());
        this.api.wb(this.forwardButton)
    };
    g.v(f3, g.W);
    f3.prototype.u = function() {
        var a = this.api.yb(),
            b = this.api.getVideoData();
        this.api.V().S("embeds_enable_muted_autoplay") && b.mutedAutoplay && (g.V(a, 2) && !this.tb ? (this.show(), this.j.show(), a = this.api.getVideoData(), this.La("text", a.vK), g.O(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.Za(this.element, this.tb), this.api.Na("onMutedAutoplayEnds")) : this.hide())
    };
    f3.prototype.onClick = function() {
        var a = this.api.getVideoData(),
            b = this.api.getCurrentTime();
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        g.PD(a);
        this.api.loadVideoById(a.videoId, b);
        this.api.wb(this.element);
        this.hide()
    };
    g.v(g3, g.W);
    g3.prototype.j = function() {
        var a = this.api.yb(),
            b = this.api.getVideoData();
        this.api.V().S("embeds_enable_muted_autoplay") && b.mutedAutoplay && !g.V(a, 2) ? this.tb || (g.W.prototype.show.call(this), this.B.start(), this.api.Za(this.element, this.tb)) : this.hide()
    };
    g3.prototype.u = function() {
        g.O(this.element, "ytp-muted-autoplay-hide-watermark", !0)
    };
    g3.prototype.onClick = function() {
        var a = this.api.getVideoData(),
            b = this.api.getCurrentTime();
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        g.PD(a);
        this.api.loadVideoById(a.videoId, b);
        this.api.wb(this.element)
    };
    g.v(h3, g.W);
    g.h = h3.prototype;
    g.h.hide = function() {
        g.wp(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.W.prototype.hide.call(this)
    };
    g.h.SW = function() {
        this.D = !0;
        g.wp(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.expandButton.focus()
    };
    g.h.TW = function() {
        this.D = !1;
        g.M(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.focus()
    };
    g.h.KS = function() {
        this.scrollTo(this.u - this.containerWidth)
    };
    g.h.LS = function() {
        this.scrollTo(this.u + this.containerWidth)
    };
    g.h.Sm = function() {
        this.xb(this.api.bb().getPlayerSize())
    };
    g.h.Sc = function(a) {
        if (!(g.V(a.state, 1) || g.V(a.state, 16) || g.V(a.state, 32))) {
            var b = !this.api.V().S("embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch") && g.V(a.state, 1024);
            !g.V(a.state, 4) || g.V(a.state, 2) || b ? this.C.hide() : this.suggestionData.length && (this.D || (g.M(this.api.getRootNode(), "ytp-expand-pause-overlay"), i3(this)), this.C.show(), this.Z = (0, g.R)())
        }
    };
    g.h.xb = function(a) {
        var b = 16 / 9,
            c = this.J.bf();
        a = a.width - (c ? 112 : 58);
        c = Math.ceil(a / (c ? 320 : 192));
        c = (a - 8 * c) / c;
        b = Math.floor(c / b);
        for (var d = 0; d < this.B.length; d++) {
            var e = this.B[d].Ca("ytp-suggestion-image");
            e.style.width = c + "px";
            e.style.height = b + "px"
        }
        this.suggestions.element.style.height = b + "px";
        this.tileWidth = c;
        this.X = b;
        this.containerWidth = a;
        this.u = 0;
        this.suggestions.element.scrollLeft = -0;
        i3(this)
    };
    g.h.onVideoDataChange = function() {
        var a = this.api.V(),
            b = this.api.getVideoData();
        this.K = b.D ? !1 : a.j;
        b.suggestions ? this.suggestionData = g.Bn(b.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        MWa(this);
        b.D ? this.title.update({
            title: g.HF("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: b.author
            })
        }) : this.title.update({
            title: "More videos"
        })
    };
    g.h.scrollTo = function(a) {
        a = g.xh(a, this.containerWidth - this.suggestionData.length * (this.tileWidth + 8), 0);
        this.N.start(this.u, a, 1E3);
        this.u = a;
        i3(this)
    };
    g.v(j3, g.W);
    g.h = j3.prototype;
    g.h.LI = function() {
        var a = this.api.getVideoData(),
            b = this.api.getVideoData(1).D,
            c = this.api.V();
        a = (a.mutedAutoplay || c.Qb && !g.V(this.state, 2)) && !(b && c.pfpChazalUi);
        g.gI(this, a);
        this.api.Za(this.element, a)
    };
    g.h.onStateChange = function(a) {
        a = a.state;
        this.state !== a && (this.state = a);
        this.LI()
    };
    g.h.onVideoDataChange = function() {
        if (this.api.getVideoData().videoId) {
            var a = this.api.getVideoUrl(!0, !1, !1, !0);
            this.La("url", a);
            this.j || (this.j = this.Oa("click", this.onClick))
        } else this.j && (this.La("url", null), this.vc(this.j), this.j = null)
    };
    g.h.onClick = function(a) {
        var b = this.api.getVideoUrl(!g.gJ(a), !1, !0, !0);
        g.JL(b, this.api, a);
        this.api.wb(this.element)
    };
    g.h.xb = function(a) {
        if ((a = 480 > a.width) && !this.u || !a && this.u) {
            var b = new g.W(Y2()),
                c = this.Ca("ytp-watermark");
            g.O(c, "ytp-watermark-small", a);
            g.$h(c);
            b.Ba(c);
            this.u = a
        }
    };
    var NWa = new Map([
        [5, "EMBEDS_AD_BREAK_TYPE_PRE_ROLL"],
        [7, "EMBEDS_AD_BREAK_TYPE_MID_ROLL"],
        [6, "EMBEDS_AD_BREAK_TYPE_POST_ROLL"]
    ]);
    g.v(k3, g.jL);
    g.h = k3.prototype;
    g.h.Zh = function() {
        return !1
    };
    g.h.create = function() {
        var a = this.I.V(),
            b = g.NK(this.I),
            c, d = null == (c = this.I.getVideoData()) ? void 0 : c.clientPlaybackNonce;
        d && g.ix("cpn", d);
        a.Kb && !a.C && (this.J = new h3(this.I, b), g.H(this, this.J), g.XK(this.I, this.J.element, 4));
        a.S("embeds_enable_muted_autoplay") && (this.u = new g3(this.I), g.H(this, this.u), g.XK(this.I, this.u.element, 4), this.D = new f3(this.I), g.H(this, this.D), g.XK(this.I, this.D.element, 4));
        if (a.Qb || this.u) this.watermark = new j3(this.I), g.H(this, this.watermark), g.XK(this.I, this.watermark.element,
            8);
        this.B = new d3(this.I, b);
        g.H(this, this.B);
        g.XK(this.I, this.B.element, 8);
        a.S("embeds_web_enable_mobile_a11y_hidden_seek_button") && (this.C = new e3(this.I), g.H(this, this.C), g.XK(this.I, this.C.element, 4));
        this.j.T(this.I, "appresize", this.xb);
        this.j.T(this.I, "presentingplayerstatechange", this.qg);
        this.j.T(this.I, "videodatachange", this.G_);
        this.j.T(this.I, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
        a.S("embeds_web_enable_ads_event_logging") && (this.j.T(this.I, "onAdStart", this.onAdStart), this.j.T(this.I,
            "onAdComplete", this.onAdComplete), this.j.T(this.I, "onAdSkip", this.onAdSkip), this.j.T(this.I, "onAdStateChange", this.onAdStateChange));
        this.Vb(this.I.yb());
        this.player.Je("embed")
    };
    g.h.xb = function() {
        var a = this.I.bb().getPlayerSize();
        this.Le && this.Le.resize(a)
    };
    g.h.qg = function(a) {
        this.Vb(a.state)
    };
    g.h.Vb = function(a) {
        g.V(a, 128) ? (this.Le || (this.Le = new b3(this.I), g.H(this, this.Le), g.XK(this.I, this.Le.element, 4)), this.Le.u(a.getData()), this.Le.show(), g.M(this.I.getRootNode(), "ytp-embed-error")) : this.Le && (this.Le.dispose(), this.Le = null, g.wp(this.I.getRootNode(), "ytp-embed-error"))
    };
    g.h.onMutedAutoplayStarts = function() {
        this.I.getVideoData().mutedAutoplay && this.u && this.watermark && this.watermark.Ba(this.u.bottomButtons, 0)
    };
    g.h.G_ = function() {
        var a = this.I.getVideoData();
        this.watermark && this.u && !a.mutedAutoplay && g.di(this.u.element, this.watermark.element) && g.XK(this.I, this.watermark.element, 8)
    };
    g.h.onAdStart = function() {
        l3(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED")
    };
    g.h.onAdComplete = function() {
        l3(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")
    };
    g.h.onAdSkip = function() {
        l3(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")
    };
    g.h.onAdStateChange = function(a) {
        2 === a && l3(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED")
    };
    g.iL("embed", k3);
})(_yt_player);