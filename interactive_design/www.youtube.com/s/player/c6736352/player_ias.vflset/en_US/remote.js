(function(g) {
    var window = this;
    'use strict';
    var i_a = function(a, b) {
            this.u = a >>> 0;
            this.j = b >>> 0
        },
        k_a = function(a) {
            if (!a) return j_a || (j_a = new i_a(0, 0));
            if (!/^\d+$/.test(a)) return null;
            g.fd(a);
            return new i_a(g.ed, g.dd)
        },
        l_a = function(a, b, c) {
            null != c && ("string" === typeof c && k_a(c), g.Ld(a, b, 1), "number" === typeof c ? (a = a.j, b = c >>> 0, c = Math.floor((c - b) / 4294967296) >>> 0, g.ed = b, g.dd = c, g.Jd(a, g.ed), g.Jd(a, g.dd)) : (c = k_a(c), a = a.j, b = c.j, g.Jd(a, c.u), g.Jd(a, b)))
        },
        m_a = function(a, b, c) {
            b = g.fe(b, c);
            null != b && (g.Ld(a, c, 0), a.j.j.push(b ? 1 : 0))
        },
        n_a = function(a, b) {
            return g.Zf(a, b)
        },
        o_a = function(a, b) {
            b = b instanceof g.ah ? b : g.fh(b, /^data:image\//i.test(b));
            a.src = g.bh(b)
        },
        q_a = function(a) {
            g.F.call(this, a, -1, p_a)
        },
        r_a = function(a) {
            g.F.call(this, a)
        },
        u_a = function() {
            return [1,
                s_a, 2, t_a
            ]
        },
        v_a = function() {
            return [1,
                g.lq, r_a, u_a
            ]
        },
        w_a = function(a) {
            g.F.call(this, a)
        },
        x_a = function(a) {
            g.F.call(this, a)
        },
        z_a = function() {
            return [1,
                g.nq, 2, g.nq, 3, y_a
            ]
        },
        A_a = function(a) {
            g.F.call(this, a)
        },
        C_a = function() {
            return [1,
                g.nq, 2, g.nq, 3, B_a, 4, y_a
            ]
        },
        E_a = function() {
            return [1,
                g.pf, x_a, z_a, D_a, 2, g.pf, A_a, C_a, D_a
            ]
        },
        I_a = function() {
            return [1,
                F_a, g.Gi, 2, G_a, g.Gi, 3, H_a, g.Gi
            ]
        },
        L_a = function() {
            return [1,
                J_a, g.Fi, 2, K_a, g.Fi, 3, g.pf, q_a, v_a, g.Fi
            ]
        },
        N_a = function() {
            return [1,
                g.lq, g.Di, I_a, 2, M_a, g.Ei, L_a
            ]
        },
        R_a = function() {
            return [1,
                g.nq, 5, O_a, 2, M_a, w_a, E_a, 3, P_a, 6, Q_a, 4, g.lq, g.Ci, N_a
            ]
        },
        m6 = function(a) {
            g.Ak(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Ua()).toString(36));
            return a
        },
        n6 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Zda(a.B, b, c)
        },
        S_a = function(a) {
            if (a instanceof g.wn) return a;
            if ("function" == typeof a.Hh) return a.Hh(!1);
            if (g.Oa(a)) {
                var b = 0,
                    c = new g.wn;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.I_;
                        if (b in a) return g.xn(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        T_a = function(a, b, c) {
            if (g.Oa(a)) g.tc(a, b, c);
            else
                for (a = S_a(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        U_a = function(a, b) {
            var c = [];
            T_a(b, function(d) {
                try {
                    var e = g.Up.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.Tia(e) && c.push(d)
            }, a);
            return c
        },
        V_a = function(a, b) {
            U_a(a, b).forEach(function(c) {
                g.Up.prototype.remove.call(this, c)
            }, a)
        },
        W_a = function(a) {
            if (a.ma) {
                if (a.ma.locationOverrideToken) return {
                    locationOverrideToken: a.ma.locationOverrideToken
                };
                if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7) return {
                    latitudeE7: a.ma.latitudeE7,
                    longitudeE7: a.ma.longitudeE7
                }
            }
            return null
        },
        X_a = function(a, b) {
            g.bc(a, b) || a.push(b)
        },
        o6 = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Y_a = function(a) {
            try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        p6 = function(a) {
            if (g.C.JSON) try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            return Y_a(a)
        },
        Z_a = function(a, b, c, d) {
            var e = new g.sk(null, void 0);
            a && g.tk(e, a);
            b && g.uk(e, b);
            c && g.vk(e, c);
            d && (e.K = d);
            return e
        },
        q6 = function(a, b) {
            g.Au[a] = !0;
            var c = g.yu();
            c && c.publish.apply(c, arguments);
            g.Au[a] = !1
        },
        r6 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.Cp;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username =
                a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", $_a(this, a.capabilities || ""), a0a(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "",
                this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        $_a = function(a, b) {
            a.capabilities.clear();
            g.Bn(b.split(","), g.Ta(n_a, b0a)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        a0a = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        s6 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        t6 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        c0a = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        d0a = function(a) {
            return new s6(a)
        },
        e0a = function(a) {
            return Array.isArray(a) ? g.Kl(a, d0a) : []
        },
        u6 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        v6 = function(a) {
            return Array.isArray(a) ? "[" + g.Kl(a, u6).join(",") + "]" : "null"
        },
        w6 = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        f0a = function(a) {
            return g.Kl(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        x6 = function(a, b) {
            return g.Zb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        y6 = function(a, b) {
            return g.Zb(a, function(c) {
                return t6(c, b)
            })
        },
        g0a = function() {
            var a = (0, g.Yv)();
            a && V_a(a, a.j.Hh(!0))
        },
        z6 = function() {
            var a = g.aw("yt-remote-connected-devices") || [];
            g.qc(a);
            return a
        },
        h0a = function(a) {
            if (g.cc(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.Kl(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        i0a = function(a) {
            g.$v("yt-remote-connected-devices", a, 86400)
        },
        B6 = function() {
            if (A6) return A6;
            var a = g.aw("yt-remote-device-id");
            a || (a = w6(), g.$v("yt-remote-device-id", a, 31536E3));
            for (var b = z6(), c = 1, d = a; g.bc(b, d);) c++, d = a + "#" + c;
            return A6 = d
        },
        C6 = function() {
            var a = z6(),
                b = B6();
            g.bc(a, b);
            g.cw() && g.sc(a, b);
            a = h0a(a);
            if (g.cc(a)) try {
                g.Ama("remote_sid")
            } catch (c) {} else try {
                g.Jr("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        j0a = function() {
            return g.aw("yt-remote-session-browser-channel")
        },
        k0a = function() {
            return g.aw("yt-remote-local-screens") || []
        },
        l0a = function() {
            g.$v("yt-remote-lounge-token-expiration", !0, 86400)
        },
        m0a = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.Kl(k0a(), function(d) {
                    return d.loungeToken
                }),
                c = g.Kl(a, function(d) {
                    return d.loungeToken
                });
            g.Ll(c, function(d) {
                return !g.bc(b, d)
            }) && l0a();
            g.$v("yt-remote-local-screens", a, 31536E3)
        },
        D6 = function(a) {
            a || (g.bw("yt-remote-session-screen-id"), g.bw("yt-remote-session-video-id"));
            C6();
            a = z6();
            g.fc(a, B6());
            i0a(a)
        },
        n0a = function() {
            if (!E6) {
                var a = g.cq();
                a && (E6 = new g.Rp(a))
            }
        },
        o0a = function() {
            n0a();
            return E6 ? !!E6.get("yt-remote-use-staging-server") : !1
        },
        F6 = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        p0a = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        q0a = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        G6 = function(a) {
            a.length ? r0a(a.shift(), function() {
                G6(a)
            }) : H6()
        },
        s0a = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        r0a = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Tj(d, g.Hp(a));
            (document.head || document.documentElement).appendChild(d)
        },
        t0a = function() {
            var a = F6(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        H6 = function() {
            var a = q0a();
            a && a(!1, "No cast extension found")
        },
        I6 = function() {
            if (u0a) {
                var a = 2,
                    b = q0a(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                r0a("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", H6, c)
            }
        },
        v0a = function() {
            I6();
            var a = t0a();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            G6(a)
        },
        x0a = function() {
            I6();
            var a = t0a();
            a.push.apply(a, g.u(w0a.map(s0a)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            G6(a)
        },
        y0a = function() {
            this.j = J6();
            this.j.Cz("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels")
        },
        z0a = function() {
            this.j = J6();
            this.j.Cz("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        A0a = function() {
            this.j = J6();
            this.j.Cz("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        K6 = function(a, b, c) {
            g.G.call(this);
            this.J = null != c ? (0, g.Sa)(a, c) : a;
            this.hg = b;
            this.D = (0, g.Sa)(this.aT, this);
            this.j = !1;
            this.u = 0;
            this.B = this.Rb = null;
            this.C = []
        },
        L6 = function(a, b, c) {
            g.G.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.hg = b;
            this.B = null;
            this.j = !1;
            this.u = 0;
            this.Rb = null
        },
        M6 = function(a) {
            a.Rb = g.zi(function() {
                a.Rb = null;
                a.j && !a.u && (a.j = !1, M6(a))
            }, a.hg);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        N6 = function() {},
        O6 = function() {
            g.Cf.call(this, "p")
        },
        P6 = function() {
            g.Cf.call(this, "o")
        },
        B0a = function() {
            var a = new g.C.TextEncoder;
            return new g.C.ReadableStream({
                start: function(b) {
                    for (var c = g.r(["test\r\n", "test\r\n"]), d = c.next(); !d.done; d = c.next()) b.enqueue(a.encode(d.value));
                    b.close()
                }
            })
        },
        C0a = function(a) {
            return (a = /\/\/([^\/]+)\//.exec(a)) ? a[1].endsWith("google.com") : !1
        },
        E0a = function(a, b) {
            if (!D0a) {
                D0a = !0;
                var c;
                a: {
                    if (c = g.C.navigator)
                        if (c = c.userAgent) break a;c = ""
                }(-1 == c.indexOf("Chrome") || -1 != c.indexOf("Edg") ? 0 : 90 <= parseInt(/Chrome\/(\d+)/.exec(c)[1], 10)) && C0a(a) && window && window.document && C0a(window.document.URL) && (c = document.createElement("meta"), c.httpEquiv = "origin-trial", c.content = "A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
                    document.head.appendChild(c), (new Request("", {
                        body: new ReadableStream,
                        method: "POST"
                    })).headers.has("Content-Type") || (g.C.fetch(a + "?ot=1", {
                        method: "POST",
                        body: "test\r\n"
                    }).catch(b), g.C.fetch(a + "?ot=2", {
                        method: "POST",
                        body: B0a(),
                        IT: !1
                    }).catch(b), g.C.fetch(a + "?ot=3", {
                        method: "POST",
                        body: B0a(),
                        IT: !0
                    }).catch(b)))
            }
        },
        Q6 = function() {
            return F0a = F0a || new g.Fg
        },
        G0a = function(a) {
            g.Cf.call(this, "serverreachability", a)
        },
        R6 = function(a) {
            var b = Q6();
            b.dispatchEvent(new G0a(b, a))
        },
        H0a = function(a, b) {
            g.Cf.call(this, "statevent", a);
            this.stat = b
        },
        S6 = function(a) {
            var b = Q6();
            b.dispatchEvent(new H0a(b, a))
        },
        I0a = function(a, b, c, d) {
            g.Cf.call(this, "timingevent", a);
            this.size = b;
            this.uu = d
        },
        T6 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function() {
                a()
            }, b)
        },
        U6 = function() {},
        V6 = function(a, b, c, d) {
            this.D = a;
            this.C = b;
            this.Gb = c;
            this.Fb = d || 1;
            this.Wa = new g.Fk(this);
            this.ib = 45E3;
            a = g.RC ? 125 : void 0;
            this.Xa = new g.yi(a);
            this.Ha = null;
            this.B = !1;
            this.N = this.Va = this.K = this.Ia = this.ra = this.ob = this.X = null;
            this.ma = [];
            this.j = null;
            this.Z = 0;
            this.J = this.va = null;
            this.qb = -1;
            this.Da = !1;
            this.gb = 0;
            this.Pa = null;
            this.Cb = this.Ra = this.ub = this.xa = !1;
            this.u = new J0a
        },
        J0a = function() {
            this.B = null;
            this.j = "";
            this.u = !1
        },
        W6 = function(a, b, c) {
            a.Ia = 1;
            a.K = m6(b.clone());
            a.N = c;
            a.xa = !0;
            K0a(a, null)
        },
        K0a = function(a, b) {
            a.ra = Date.now();
            X6(a);
            a.Va = a.K.clone();
            n6(a.Va, "t", a.Fb);
            a.Z = 0;
            var c = a.D.Ia;
            a.u = new J0a;
            a.j = L0a(a.D, c ? b : null, !a.N);
            0 < a.gb && (a.Pa = new L6((0, g.Sa)(a.ZJ, a, a.j), a.gb));
            a.Wa.Oa(a.j, "readystatechange", a.dT);
            b = a.Ha ? g.gg(a.Ha) : {};
            a.N ? (a.va || (a.va = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Va, a.va, a.N, b)) : (a.va = "GET", a.j.send(a.Va, a.va, null, b));
            R6(1)
        },
        Y6 = function(a) {
            return a.j ? a.u.u ? !0 : !(!g.zj(a.j) && !g.Aj(a.j)) : !1
        },
        M0a = function(a) {
            return a.j ? "GET" == a.va && 2 != a.Ia && a.D.Zc : !1
        },
        O0a = function(a, b,
            c) {
            for (var d = !0, e; !a.Da && a.Z < c.length;)
                if (e = N0a(a, c), e == Z6) {
                    4 == b && (a.J = 4, S6(14), d = !1);
                    break
                } else if (e == $6) {
                a.J = 4;
                S6(15);
                d = !1;
                break
            } else a7(a, e);
            M0a(a) && e != Z6 && e != $6 && (a.u.j = "", a.Z = 0);
            4 != b || 0 != c.length || a.u.u || (a.J = 1, S6(16), d = !1);
            a.B = a.B && d;
            d ? 0 < c.length && !a.Cb && (a.Cb = !0, a.D.MG(a)) : (b7(a), c7(a))
        },
        N0a = function(a, b) {
            var c = a.Z,
                d = b.indexOf("\n", c);
            if (-1 == d) return Z6;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return $6;
            d += 1;
            if (d + c > b.length) return Z6;
            b = b.substr(d, c);
            a.Z = d + c;
            return b
        },
        X6 = function(a) {
            a.ob = Date.now() + a.ib;
            P0a(a, a.ib)
        },
        P0a = function(a, b) {
            if (null != a.X) throw Error("WatchDog timer not null");
            a.X = T6((0, g.Sa)(a.bT, a), b)
        },
        d7 = function(a) {
            a.X && (g.C.clearTimeout(a.X), a.X = null)
        },
        c7 = function(a) {
            a.D.cf() || a.Da || Q0a(a.D, a)
        },
        b7 = function(a) {
            d7(a);
            g.zf(a.Pa);
            a.Pa = null;
            a.Xa.stop();
            g.Gk(a.Wa);
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        a7 = function(a, b) {
            try {
                var c = a.D;
                if (0 != c.nf && (c.j == a || e7(c.u, a)))
                    if (!a.Ra && e7(c.u, a) && 3 == c.nf) {
                        try {
                            var d = c.Zf.j.parse(b)
                        } catch (y) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.N) {
                                    if (c.j)
                                        if (c.j.ra + 3E3 < a.ra) f7(c), g7(c);
                                        else break a;
                                    h7(c);
                                    S6(18)
                                }
                            }
                            else c.kc = e[1], 0 < c.kc - c.Ra && 37500 > e[2] && c.Xa && 0 == c.ma && !c.Z && (c.Z = T6((0, g.Sa)(c.fT, c), 6E3));
                            if (1 >= i7(c.u) && c.Qb) {
                                try {
                                    c.Qb()
                                } catch (y) {}
                                c.Qb = void 0
                            }
                        } else j7(c, 11)
                    } else if ((a.Ra || c.j == a) && f7(c), !g.kb(b))
                    for (e = c.Zf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Ra = f[0];
                        f = f[1];
                        if (2 == c.nf)
                            if ("c" == f[0]) {
                                c.C = f[1];
                                c.Cb = f[2];
                                var k = f[3];
                                null != k && (c.aK = k);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.Va = 1.5 * l);
                                d = c;
                                var m = a.j;
                                if (m) {
                                    var n = g.Bj(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.u;
                                        !p.j && (g.ub(n, "spdy") || g.ub(n, "quic") || g.ub(n, "h2")) && (p.C = p.D, p.j = new Set, p.u && (k7(p, p.u), p.u = null))
                                    }
                                    if (d.xa) {
                                        var q = g.Bj(m, "X-HTTP-Session-Id");
                                        q && (d.Uc = q, g.Ak(d.Ha, d.xa, q))
                                    }
                                }
                                c.nf = 3;
                                c.D && c.D.gK();
                                c.Kb && (c.Sb = Date.now() - a.ra);
                                d = c;
                                var t = a;
                                d.Ub = R0a(d, d.Ia ? d.Cb : null, d.Fb);
                                if (t.Ra) {
                                    S0a(d.u, t);
                                    var w =
                                        t,
                                        x = d.Va;
                                    x && w.setTimeout(x);
                                    w.X && (d7(w), X6(w));
                                    d.j = t
                                } else T0a(d);
                                0 < c.B.length && l7(c)
                            } else "stop" != f[0] && "close" != f[0] || j7(c, 7);
                        else 3 == c.nf && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? j7(c, 7) : c.disconnect() : "noop" != f[0] && c.D && c.D.fK(f), c.ma = 0)
                    }
                R6(4)
            } catch (y) {}
        },
        U0a = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        V0a = function(a) {
            this.D = a || 10;
            g.C.PerformanceNavigationTiming ? (a = g.C.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.C.chrome && g.C.chrome.loadTimes && g.C.chrome.loadTimes() && g.C.chrome.loadTimes().wasFetchedViaSpdy);
            this.C = a ? this.D : 1;
            this.j = null;
            1 < this.C && (this.j = new Set);
            this.u = null;
            this.B = []
        },
        W0a = function(a) {
            return a.u ? !0 : a.j ? a.j.size >= a.C : !1
        },
        i7 = function(a) {
            return a.u ? 1 : a.j ? a.j.size : 0
        },
        e7 = function(a, b) {
            return a.u ? a.u == b : a.j ? a.j.has(b) : !1
        },
        k7 = function(a,
            b) {
            a.j ? a.j.add(b) : a.u = b
        },
        S0a = function(a, b) {
            a.u && a.u == b ? a.u = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        m7 = function(a) {
            if (null != a.u) return a.B.concat(a.u.ma);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.B;
                a = g.r(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ma);
                return b
            }
            return g.ic(a.B)
        },
        X0a = function(a, b) {
            var c = new U6;
            if (g.C.Image) {
                var d = new Image;
                d.onload = g.Ta(n7, c, d, "TestLoadImage: loaded", !0, b);
                d.onerror = g.Ta(n7, c, d, "TestLoadImage: error", !1, b);
                d.onabort = g.Ta(n7, c, d, "TestLoadImage: abort", !1, b);
                d.ontimeout = g.Ta(n7, c, d, "TestLoadImage: timeout", !1, b);
                g.C.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        n7 = function(a, b, c, d, e) {
            try {
                b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d)
            } catch (f) {}
        },
        Y0a = function() {
            this.j = new N6
        },
        Z0a = function(a, b, c) {
            var d = c || "";
            try {
                g.rk(a, function(e, f) {
                    var k = e;
                    g.Pa(e) && (k = g.Qi(e));
                    b.push(d + f + "=" + encodeURIComponent(k))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        o7 = function(a, b, c) {
            return c && c.uV ? c.uV[a] || b : b
        },
        $0a = function(a) {
            this.B = [];
            this.Cb = this.Ub = this.Ha = this.Fb = this.j = this.Uc = this.xa = this.Da = this.K = this.ob = this.X = null;
            this.Pd = this.Pa = 0;
            this.Bd = o7("failFast", !1, a);
            this.Xa = this.Z = this.N = this.J = this.D = null;
            this.Gb = !0;
            this.Cc = this.kc = this.Ra = -1;
            this.ub = this.ma = this.ra = 0;
            this.kd = o7("baseRetryDelayMs", 5E3, a);
            this.Td = o7("retryDelaySeedMs", 1E4, a);
            this.Od = o7("forwardChannelMaxRetries", 2, a);
            this.Wb = o7("forwardChannelRequestTimeoutMs", 2E4, a);
            this.Oc = a && a.bia || void 0;
            this.Zc = a && a.Zha || !1;
            this.Va = void 0;
            this.Ia = a && a.e_ || !1;
            this.C = "";
            this.u =
                new V0a(a && a.Uga);
            this.Zf = new Y0a;
            this.ib = a && a.fha || !1;
            this.gb = a && a.cha || !1;
            this.ib && this.gb && (this.gb = !1);
            this.le = a && a.Qga || !1;
            a && a.hha && (this.Gb = !1);
            this.Kb = !this.ib && this.Gb && a && a.Zga || !1;
            this.Qb = void 0;
            this.Sb = 0;
            this.Wa = !1;
            this.va = null;
            this.xe = !a || !1 !== a.bha;
            this.qb = null
        },
        g7 = function(a) {
            a.j && (p7(a), a.j.cancel(), a.j = null)
        },
        a1a = function(a) {
            g7(a);
            a.N && (g.C.clearTimeout(a.N), a.N = null);
            f7(a);
            a.u.cancel();
            a.J && ("number" === typeof a.J && g.C.clearTimeout(a.J), a.J = null)
        },
        l7 = function(a) {
            W0a(a.u) || a.J || (a.J = !0, g.oi(a.cK, a), a.ra = 0)
        },
        c1a = function(a, b) {
            if (i7(a.u) >= a.u.C - (a.J ? 1 : 0)) return !1;
            if (a.J) return a.B = b.ma.concat(a.B), !0;
            if (1 == a.nf || 2 == a.nf || a.ra >= (a.Bd ? 0 : a.Od)) return !1;
            a.J = T6((0, g.Sa)(a.cK, a, b), b1a(a, a.ra));
            a.ra++;
            return !0
        },
        e1a = function(a, b) {
            var c;
            b ? c = b.Gb : c = a.Pa++;
            var d = a.Ha.clone();
            g.Ak(d, "SID", a.C);
            g.Ak(d, "RID", c);
            g.Ak(d, "AID", a.Ra);
            q7(a, d);
            a.K && a.X && g.Ek(d, a.K, a.X);
            c = new V6(a, a.C, c, a.ra + 1);
            null === a.K && (c.Ha = a.X);
            b && (a.B = b.ma.concat(a.B));
            b = d1a(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.Wb) + Math.round(.5 * a.Wb * Math.random()));
            k7(a.u, c);
            W6(c, d, b)
        },
        q7 = function(a, b) {
            a.Da && g.Mf(a.Da, function(c, d) {
                g.Ak(b, d, c)
            });
            a.D && g.rk({}, function(c, d) {
                g.Ak(b, d, c)
            })
        },
        d1a = function(a, b, c) {
            c = Math.min(a.B.length, c);
            var d = a.D ? (0, g.Sa)(a.D.gT, a.D, a) : null;
            a: for (var e = a.B, f = -1;;) {
                var k = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, k.push("ofs=" + f)) : f = 0 : k.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        Z0a(p, k, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = k.join("&");
                    break a
                }
            }
            a = a.B.splice(0, c);
            b.ma = a;
            return d
        },
        T0a = function(a) {
            a.j || a.N || (a.ub = 1, g.oi(a.bK, a), a.ma = 0)
        },
        h7 = function(a) {
            if (a.j || a.N || 3 <= a.ma) return !1;
            a.ub++;
            a.N = T6((0, g.Sa)(a.bK, a), b1a(a, a.ma));
            a.ma++;
            return !0
        },
        p7 = function(a) {
            null != a.va && (g.C.clearTimeout(a.va), a.va = null)
        },
        f1a = function(a) {
            a.j = new V6(a, a.C, "rpc", a.ub);
            null === a.K && (a.j.Ha = a.X);
            a.j.gb = 0;
            var b = a.Ub.clone();
            g.Ak(b, "RID", "rpc");
            g.Ak(b, "SID", a.C);
            g.Ak(b, "CI", a.Xa ? "0" : "1");
            g.Ak(b, "AID", a.Ra);
            g.Ak(b, "TYPE", "xmlhttp");
            q7(a, b);
            a.K && a.X && g.Ek(b, a.K, a.X);
            a.Va && a.j.setTimeout(a.Va);
            var c = a.j;
            a = a.Cb;
            c.Ia = 1;
            c.K = m6(b.clone());
            c.N = null;
            c.xa = !0;
            K0a(c, a)
        },
        f7 = function(a) {
            null != a.Z && (g.C.clearTimeout(a.Z), a.Z = null)
        },
        Q0a = function(a, b) {
            var c = null;
            if (a.j == b) {
                f7(a);
                p7(a);
                a.j = null;
                var d = 2
            } else if (e7(a.u, b)) c = b.ma, S0a(a.u, b), d = 1;
            else return;
            if (0 != a.nf)
                if (a.Cc = b.qb, b.B)
                    if (1 == d) {
                        c = b.N ? b.N.length : 0;
                        b = Date.now() - b.ra;
                        var e = a.ra;
                        d = Q6();
                        d.dispatchEvent(new I0a(d, c, b, e));
                        l7(a)
                    } else T0a(a);
            else if (e = b.getLastError(), 3 == e || 0 == e && 0 < a.Cc || !(1 == d && c1a(a, b) || 2 == d && h7(a))) switch (c && 0 < c.length && (b = a.u, b.B = b.B.concat(c)), e) {
                case 1:
                    j7(a, 5);
                    break;
                case 4:
                    j7(a, 10);
                    break;
                case 3:
                    j7(a, 6);
                    break;
                default:
                    j7(a, 2)
            }
        },
        b1a = function(a, b) {
            var c = a.kd + Math.floor(Math.random() *
                a.Td);
            a.isActive() || (c *= 2);
            return c * b
        },
        j7 = function(a, b) {
            if (2 == b) {
                var c = null;
                a.D && (c = null);
                var d = (0, g.Sa)(a.k_, a);
                c || (c = new g.sk("//www.google.com/images/cleardot.gif"), g.C.location && "http" == g.C.location.protocol || g.tk(c, "https"), m6(c));
                X0a(c.toString(), d)
            } else S6(2);
            a.nf = 0;
            a.D && a.D.eK(b);
            g1a(a);
            a1a(a)
        },
        g1a = function(a) {
            a.nf = 0;
            a.qb = [];
            if (a.D) {
                var b = m7(a.u);
                if (0 != b.length || 0 != a.B.length) g.jc(a.qb, b), g.jc(a.qb, a.B), a.u.B.length = 0, g.ic(a.B), a.B.length = 0;
                a.D.dK()
            }
        },
        h1a = function(a) {
            if (0 == a.nf) return a.qb;
            var b = [];
            g.jc(b, m7(a.u));
            g.jc(b, a.B);
            return b
        },
        R0a = function(a, b, c) {
            var d = g.Bk(c);
            "" != d.j ? (b && g.uk(d, b + "." + d.j), g.vk(d, d.u)) : (d = g.C.location, d = Z_a(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.xa;
            c = a.Uc;
            b && c && g.Ak(d, b, c);
            g.Ak(d, "VER", a.aK);
            q7(a, d);
            return d
        },
        L0a = function(a, b, c) {
            if (b && !a.Ia) throw Error("Can't create secondary domain capable XhrIo object.");
            b = c && a.Zc && !a.Oc ? new g.tj(new g.nk({
                bQ: !0
            })) : new g.tj(a.Oc);
            b.K = a.Ia;
            return b
        },
        i1a = function() {},
        j1a = function() {
            if (g.Mc && !g.Ec(10)) throw Error("Environmental error: no available transport.");
        },
        s7 = function(a, b) {
            g.Fg.call(this);
            this.j = new $0a(b);
            this.J = a;
            this.u = b && b.XV || null;
            a = b && b.WV || null;
            b && b.Tga && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.X = a;
            a = b && b.oha || null;
            b && b.MN && (a ? a["X-WebChannel-Content-Type"] = b.MN : a = {
                "X-WebChannel-Content-Type": b.MN
            });
            b && b.CL && (a ? a["X-WebChannel-Client-Profile"] = b.CL : a = {
                "X-WebChannel-Client-Profile": b.CL
            });
            this.j.ob = a;
            (a = b && b.lha) && !g.kb(a) && (this.j.K = a);
            this.K = b && b.e_ || !1;
            this.D = b && b.Oha || !1;
            (b = b && b.qV) && !g.kb(b) && (this.j.xa = b, g.Yf(this.u, b) && g.dg(this.u,
                b));
            this.C = new r7(this)
        },
        k1a = function(a) {
            O6.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.metadataKey = g.Uf(b)) ? g.eg(b, this.metadataKey) : b : this.data = a
        },
        l1a = function(a) {
            P6.call(this);
            this.status = 1;
            this.errorCode = a
        },
        r7 = function(a) {
            this.j = a
        },
        m1a = function(a, b) {
            this.u = a;
            this.j = b
        },
        n1a = function(a) {
            return h1a(a.j).map(function(b) {
                b = b.map;
                "__data__" in b && (b = b.__data__, b = a.u.D ? Y_a(b) : b);
                return b
            })
        },
        t7 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function() {
                a()
            }, b)
        },
        v7 = function(a) {
            u7.dispatchEvent(new o1a(u7, a))
        },
        o1a = function(a, b) {
            g.Cf.call(this, "statevent", a);
            this.stat = b
        },
        w7 = function(a, b, c, d) {
            this.j = a;
            this.C = b;
            this.K = c;
            this.J = d || 1;
            this.u = 45E3;
            this.B = new g.Fk(this);
            this.D = new g.yi;
            this.D.setInterval(250)
        },
        q1a = function(a, b, c) {
            a.zs = 1;
            a.Bn = m6(b.clone());
            a.Op = c;
            a.xa = !0;
            p1a(a, null)
        },
        x7 = function(a, b, c, d, e) {
            a.zs = 1;
            a.Bn = m6(b.clone());
            a.Op = null;
            a.xa = c;
            e && (a.MP = !1);
            p1a(a, d)
        },
        p1a = function(a, b) {
            a.ys = Date.now();
            y7(a);
            a.Dn = a.Bn.clone();
            n6(a.Dn, "t", a.J);
            a.vz = 0;
            a.Of = a.j.AD(a.j.Ev() ? b : null);
            0 < a.yD && (a.rz = new L6((0, g.Sa)(a.hK, a, a.Of), a.yD));
            a.B.Oa(a.Of, "readystatechange", a.iT);
            b = a.Np ? g.gg(a.Np) : {};
            a.Op ? (a.sz = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Of.send(a.Dn, a.sz, a.Op, b)) : (a.sz = "GET", a.MP && !g.Gf && (b.Connection = "close"), a.Of.send(a.Dn, a.sz, null, b));
            a.j.Wj(1)
        },
        s1a = function(a, b) {
            var c = a.vz,
                d = b.indexOf("\n", c);
            if (-1 == d) return z7;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return r1a;
            d += 1;
            if (d + c > b.length) return z7;
            b = b.substr(d, c);
            a.vz = d + c;
            return b
        },
        u1a = function(a, b) {
            a.ys = Date.now();
            y7(a);
            var c = b ? window.location.hostname : "";
            a.Dn = a.Bn.clone();
            g.Ak(a.Dn, "DOMAIN", c);
            g.Ak(a.Dn, "t", a.J);
            try {
                a.qk = new ActiveXObject("htmlfile")
            } catch (m) {
                A7(a);
                a.Cn = 7;
                v7(22);
                B7(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in C7) f = C7[f];
                        else if (f in t1a) f = C7[f] = t1a[f];
                        else {
                            var k = f.charCodeAt(0);
                            if (31 < k && 127 > k) var l = f;
                            else {
                                if (256 > k) {
                                    if (l = "\\x", 16 > k || 256 < k) l += "0"
                                } else l = "\\u", 4096 > k && (l += "0");
                                l += k.toString(16).toUpperCase()
                            }
                            f =
                                C7[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            c = g.th(g.Tg("b/12014412"), d);
            a.qk.open();
            a.qk.write(g.qh(c));
            a.qk.close();
            a.qk.parentWindow.m = (0, g.Sa)(a.aZ, a);
            a.qk.parentWindow.d = (0, g.Sa)(a.SO, a, !0);
            a.qk.parentWindow.rpcClose = (0, g.Sa)(a.SO, a, !1);
            c = a.qk.createElement("DIV");
            a.qk.parentWindow.document.body.appendChild(c);
            d = g.eh(a.Dn.toString());
            d = g.Ih(g.bh(d));
            d = g.th(g.Tg("b/12014412"), '<iframe src="' + d + '"></iframe>');
            g.uba(c, d);
            a.j.Wj(1)
        },
        y7 = function(a) {
            a.zD =
                Date.now() + a.u;
            v1a(a, a.u)
        },
        v1a = function(a, b) {
            if (null != a.As) throw Error("WatchDog timer not null");
            a.As = t7((0, g.Sa)(a.hT, a), b)
        },
        D7 = function(a) {
            a.As && (g.C.clearTimeout(a.As), a.As = null)
        },
        B7 = function(a) {
            a.j.cf() || a.Mp || a.j.wz(a)
        },
        A7 = function(a) {
            D7(a);
            g.zf(a.rz);
            a.rz = null;
            a.D.stop();
            g.Gk(a.B);
            if (a.Of) {
                var b = a.Of;
                a.Of = null;
                b.abort();
                b.dispose()
            }
            a.qk && (a.qk = null)
        },
        E7 = function(a, b) {
            try {
                a.j.iK(a, b), a.j.Wj(4)
            } catch (c) {}
        },
        x1a = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                w1a(a, b, function(k) {
                    k ? c(!0) : g.C.setTimeout(function() {
                        x1a(a, b, c, d, f)
                    }, f)
                })
            }
        },
        w1a = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    F7(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    F7(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    F7(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    F7(d), c(!1)
                } catch (e) {}
            };
            g.C.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            o_a(d, a)
        },
        F7 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        y1a = function(a) {
            this.j = a;
            this.u = new N6
        },
        z1a = function(a) {
            var b = G7(a.j, a.Zv, "/mail/images/cleardot.gif");
            m6(b);
            x1a(b.toString(), 5E3, (0, g.Sa)(a.QT, a), 3, 2E3);
            a.Wj(1)
        },
        I7 = function(a) {
            var b = a.j.X;
            if (null != b) v7(5), b ? (v7(11), H7(a.j, a, !1)) : (v7(12), H7(a.j, a, !0));
            else if (a.Vg = new w7(a, void 0, void 0, void 0), a.Vg.Np = a.BD, b = a.j, b = G7(b, b.Ev() ? a.Dv : null, a.CD), v7(5), !g.Mc || g.Ec(10)) n6(b, "TYPE", "xmlhttp"), x7(a.Vg, b, !1, a.Dv, !1);
            else {
                n6(b, "TYPE", "html");
                var c = a.Vg;
                a = !!a.Dv;
                c.zs = 3;
                c.Bn = m6(b.clone());
                u1a(c, a)
            }
        },
        J7 = function(a, b, c) {
            this.j = 1;
            this.u = [];
            this.B = [];
            this.D = new N6;
            this.N = a || null;
            this.X = null != b ? b : null;
            this.K = c || !1
        },
        A1a = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        B1a = function(a, b, c, d) {
            g.Cf.call(this, "timingevent", a);
            this.size = b;
            this.uu = d
        },
        C1a = function(a) {
            g.Cf.call(this, "serverreachability", a)
        },
        D1a = function(a) {
            a.jT(1, 0);
            a.xz = G7(a, null, a.DD);
            K7(a)
        },
        E1a = function(a) {
            a.Nn && (a.Nn.abort(), a.Nn = null);
            a.Qe && (a.Qe.cancel(), a.Qe = null);
            a.Xl && (g.C.clearTimeout(a.Xl), a.Xl = null);
            L7(a);
            a.eh && (a.eh.cancel(), a.eh = null);
            a.En && (g.C.clearTimeout(a.En), a.En = null)
        },
        F1a = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.u.push(new A1a(a.kT++, b));
            2 != a.j && 3 != a.j || K7(a)
        },
        G1a = function(a) {
            var b = 0;
            a.Qe && b++;
            a.eh && b++;
            return b
        },
        K7 = function(a) {
            a.eh || a.En || (a.En = t7((0, g.Sa)(a.mK, a), 0), a.Cs = 0)
        },
        I1a = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.Gv = Math.floor(1E5 * Math.random());
                    b = a.Gv++;
                    var c = new w7(a, "", b, void 0);
                    c.Np = a.Gk;
                    var d = M7(a),
                        e = a.xz.clone();
                    g.Ak(e, "RID", b);
                    g.Ak(e, "CVER", "1");
                    N7(a, e);
                    q1a(c, e, d);
                    a.eh = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? H1a(a, b) : 0 == a.u.length || a.eh || H1a(a))
        },
        H1a = function(a, b) {
            if (b)
                if (6 < a.Pp) {
                    a.u = a.B.concat(a.u);
                    a.B.length = 0;
                    var c = a.Gv - 1;
                    b = M7(a)
                } else c = b.K, b = b.Op;
            else c = a.Gv++, b = M7(a);
            var d = a.xz.clone();
            g.Ak(d, "SID", a.C);
            g.Ak(d, "RID", c);
            g.Ak(d, "AID", a.Ds);
            N7(a, d);
            c = new w7(a, a.C, c, a.Cs + 1);
            c.Np = a.Gk;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.eh = c;
            q1a(c, d, b)
        },
        N7 = function(a, b) {
            a.Yf && (a = a.Yf.qK()) && g.Mf(a, function(c, d) {
                g.Ak(b, d, c)
            })
        },
        M7 = function(a) {
            var b = Math.min(a.u.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Pp && 0 < b) {
                var d = a.u[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    Tr: e.Tr
                }, f++) {
                e.Tr = a.u[f].j;
                var k = a.u[f].map;
                e.Tr = 6 >= a.Pp ? f : e.Tr - d;
                try {
                    g.Mf(k, function(l) {
                        return function(m, n) {
                            c.push("req" + l.Tr + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.Tr + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.B = a.B.concat(a.u.splice(0, b));
            return c.join("&")
        },
        J1a = function(a) {
            a.Qe || a.Xl || (a.J = 1, a.Xl = t7((0, g.Sa)(a.lK, a), 0), a.Bs = 0)
        },
        O7 = function(a) {
            if (a.Qe || a.Xl || 3 <= a.Bs) return !1;
            a.J++;
            a.Xl = t7((0, g.Sa)(a.lK, a), K1a(a, a.Bs));
            a.Bs++;
            return !0
        },
        H7 = function(a, b, c) {
            a.CC = c;
            a.Hk = b.Wl;
            a.K || D1a(a)
        },
        L7 = function(a) {
            null != a.Qp && (g.C.clearTimeout(a.Qp), a.Qp = null)
        },
        K1a = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        P7 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Yf && (c = null);
                var d = (0, g.Sa)(a.j_, a);
                c || (c = new g.sk("//www.google.com/images/cleardot.gif"), m6(c));
                w1a(c.toString(), 1E4, d)
            } else v7(2);
            L1a(a, b)
        },
        L1a = function(a, b) {
            a.j = 0;
            a.Yf && a.Yf.nK(b);
            M1a(a);
            E1a(a)
        },
        M1a = function(a) {
            a.j = 0;
            a.Hk = -1;
            if (a.Yf)
                if (0 == a.B.length && 0 == a.u.length) a.Yf.ED();
                else {
                    var b = g.ic(a.B),
                        c = g.ic(a.u);
                    a.B.length = 0;
                    a.u.length = 0;
                    a.Yf.ED(b, c)
                }
        },
        G7 = function(a, b, c) {
            var d = g.Bk(c);
            if ("" != d.j) b && g.uk(d, b + "." + d.j), g.vk(d, d.u);
            else {
                var e = window.location;
                d = Z_a(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.Fv && g.Mf(a.Fv, function(f, k) {
                g.Ak(d, k, f)
            });
            g.Ak(d, "VER", a.Pp);
            N7(a, d);
            return d
        },
        N1a = function() {},
        O1a = function() {
            this.j = [];
            this.u = []
        },
        P1a = function() {},
        J6 = function() {
            if (!Q7) {
                Q7 = new g.Bi(new P1a);
                var a = g.Yq("client_streamz_web_flush_count", -1); - 1 !== a && (Q7.C = a)
            }
            return Q7
        },
        R7 = function(a) {
            g.Cf.call(this, "channelMessage");
            this.message = a
        },
        S7 = function(a) {
            g.Cf.call(this, "channelError");
            this.error = a
        },
        Q1a = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        T7 = function(a, b) {
            g.G.call(this);
            this.j = new g.L(this.SY, 0, this);
            g.H(this, this.j);
            this.hg = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.Sa)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.Sa)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        U7 = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.ra = a;
            this.K = b;
            this.B = new g.Qp;
            this.u = new T7(this.NZ, this);
            this.j = null;
            this.Z = !1;
            this.J = null;
            this.X = "";
            this.N = this.D = 0;
            this.C = [];
            this.xa = c;
            this.ma = d;
            this.Da = e;
            this.va = new y0a;
            this.Ha = new z0a;
            this.Ia = new A0a
        },
        V7 = function(a) {
            if (a.j) {
                var b = a.ma(),
                    c = a.j.Gk || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Gk = c
            }
        },
        W7 = function(a) {
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.Wi(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Xi(a) || "";
            a = g.Ab();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.zb(a, "10.0") && (this.u = !1))
        },
        X7 = function(a, b) {
            var c = a.j;
            a.u && (c = "https://" + a.domain + a.port + a.j);
            return g.cj(c + b, {})
        },
        Y7 = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Ta(a.C, d, !0),
                onError: g.Ta(a.B, e),
                onTimeout: g.Ta(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.Ar(b, a)
        },
        Z7 = function(a, b) {
            g.Fg.call(this);
            var c = this;
            this.Lc = a();
            this.Lc.subscribe("handlerOpened", this.qR, this);
            this.Lc.subscribe("handlerClosed", this.oR, this);
            this.Lc.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Lc.subscribe("handlerMessage", this.pR, this);
            this.j = b
        },
        R1a = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new j1a : e;
            var f = void 0 === f ? new g.Qp : f;
            this.pathPrefix = a;
            this.j = b;
            this.va = c;
            this.D = f;
            this.N = null;
            this.X = this.K = 0;
            this.channel = null;
            this.J = 0;
            this.B = new T7(function() {
                d.B.isActive();
                var k;
                0 === (null == (k = d.channel) ? void 0 : i7((new m1a(k, k.j)).j.u)) && d.connect(d.N, d.K)
            });
            this.C = {};
            this.u = {};
            this.Z = !1;
            this.logger = null;
            this.ra = [];
            this.ma = void 0
        },
        S1a = function(a) {
            g.pg(a.channel, "m", function() {
                a.J = 3;
                a.B.reset();
                a.N = null;
                a.K = 0;
                for (var b = g.r(a.ra), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.ra = [];
                a.ea("webChannelOpened")
            });
            g.pg(a.channel, "n", function() {
                a.J = 0;
                a.B.isActive() || a.ea("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : n1a(new m1a(b, b.j));
                c && (a.ra = [].concat(g.u(c)))
            });
            g.pg(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.B.start(), a.channel && a.channel.close()) : a.ea("webChannelMessage", new Q1a(c[0], c[1]));
                a.ma = b.statusCode
            });
            g.pg(a.channel, "o", function() {
                401 === a.ma || a.B.start();
                a.ea("webChannelError")
            })
        },
        $7 = function(a) {
            var b = a.va();
            b ? a.C["x-youtube-lounge-xsrf-token"] = b : delete a.C["x-youtube-lounge-xsrf-token"]
        },
        a8 = function(a) {
            g.Fg.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.tR, this);
            this.j.subscribe("webChannelClosed", this.rR, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.sR, this)
        },
        T1a = function(a, b, c, d, e) {
            function f() {
                return new U7(X7(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.Q("enable_mdx_web_channel_desktop") ? new a8(function() {
                return new R1a(X7(a, "/wc"), b, c)
            }) : new Z7(f, e)
        },
        X1a = function() {
            var a = U1a;
            V1a();
            b8.push(a);
            W1a()
        },
        c8 = function(a, b) {
            V1a();
            var c = Y1a(a, String(b));
            g.cc(b8) ? Z1a(c) : (W1a(), g.tc(b8, function(d) {
                d(c)
            }))
        },
        V1a = function() {
            b8 || (b8 = g.Ka("yt.mdx.remote.debug.handlers_") || [], g.Ja("yt.mdx.remote.debug.handlers_", b8, void 0))
        },
        Z1a = function(a) {
            var b = (d8 + 1) % 50;
            d8 = b;
            e8[b] = a;
            f8 || (f8 = 49 == b)
        },
        W1a = function() {
            var a = b8;
            if (e8[0]) {
                var b = f8 ? d8 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = e8[b];
                    g.tc(a, function(d) {
                        d(c)
                    })
                } while (b != d8);
                e8 = Array(50);
                d8 = -1;
                f8 = !1
            }
        },
        Y1a = function(a, b) {
            var c = (Date.now() - $1a) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g8 = function(a) {
            g.cv.call(this);
            this.J = a;
            this.screens = []
        },
        a2a = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        b2a = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.Bn(a.screens, function(f) {
                return !!x6(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = a2a(a, b[d]) || c;
            return c
        },
        c2a = function(a, b) {
            var c = a.screens.length;
            a.screens = g.Bn(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        h8 = function(a, b, c, d, e) {
            g.cv.call(this);
            this.B = a;
            this.K = b;
            this.C = c;
            this.J = d;
            this.D = e;
            this.u = 0;
            this.j = null;
            this.Rb = NaN
        },
        j8 = function(a) {
            g8.call(this, "LocalScreenService");
            this.u = a;
            this.j = NaN;
            i8(this);
            this.info("Initializing with " + v6(this.screens))
        },
        d2a = function(a) {
            if (a.screens.length) {
                var b = g.Kl(a.screens, function(d) {
                        return d.id
                    }),
                    c = X7(a.u, "/pairing/get_lounge_token_batch");
                Y7(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.Sa)(a.SU, a), (0, g.Sa)(a.RU, a))
            }
        },
        i8 = function(a) {
            if (g.Q("deprecate_pair_servlet_enabled")) return b2a(a, []);
            var b = e0a(k0a());
            b = g.Bn(b, function(c) {
                return !c.uuid
            });
            return b2a(a, b)
        },
        k8 = function(a, b) {
            m0a(g.Kl(a.screens, c0a));
            b && l0a()
        },
        m8 = function(a, b) {
            g.cv.call(this);
            this.J = b;
            b = (b = g.aw("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.J(), e = 0, f = d.length; e < f; ++e) {
                var k = d[e].id;
                c[k] = g.bc(b, k)
            }
            this.j = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            l8("Initialized with " + g.Qi(this.j))
        },
        n8 = function(a, b, c) {
            var d = X7(a.D, "/pairing/get_screen_availability");
            Y7(a.D, d, {
                lounge_token: b.token
            }, (0, g.Sa)(function(e) {
                e = e.screens || [];
                for (var f = 0, k = e.length; f < k; ++f)
                    if (e[f].loungeToken == b.token) {
                        c("online" == e[f].status);
                        return
                    }
                c(!1)
            }, a), (0, g.Sa)(function() {
                c(!1)
            }, a))
        },
        o8 = function(a, b) {
            a: if (o6(b) != o6(a.j)) var c = !1;
                else {
                    c = g.Xf(b);
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (!a.j[c[d]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (l8("Updated online screens: " + g.Qi(a.j)), a.j = b, a.ea("screenChange"));e2a(a)
        },
        p8 = function(a) {
            isNaN(a.B) || g.tr(a.B);
            a.B = g.rr((0, g.Sa)(a.CH, a), 0 < a.C && a.C < g.Ua() ? 2E4 : 1E4)
        },
        l8 = function(a) {
            c8("OnlineScreenService", a)
        },
        f2a = function(a) {
            var b = {};
            g.tc(a.J(), function(c) {
                c.token ? b[c.token] = c.id : this.Ee("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        e2a = function(a) {
            a = g.Xf(g.Nf(a.j, function(b) {
                return b
            }));
            g.qc(a);
            a.length ? g.$v("yt-remote-online-screen-ids", a.join(","), 60) : g.bw("yt-remote-online-screen-ids")
        },
        q8 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g8.call(this, "ScreenService");
            this.C = a;
            this.K = b;
            this.j = this.u = null;
            this.B = [];
            this.D = {};
            g2a(this)
        },
        i2a = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var k = a.Mh(),
                l = c ? y6(k, c) : null;
            c && (a.K || l) || (l = y6(k, b));
            if (l) {
                l.uuid = b;
                var m = r8(a, l);
                n8(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? h2a(a, c, (0, g.Sa)(function(n) {
                var p = r8(this, new s6({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                n8(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        j2a = function(a, b) {
            for (var c = 0, d = a.screens.length; c < d; ++c)
                if (a.screens[c].name == b) return a.screens[c];
            return null
        },
        k2a = function(a, b, c) {
            n8(a.j, b, c)
        },
        h2a = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, k) {
                    f = k && k.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.Ar(X7(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        l2a = function(a) {
            a.screens = a.u.Mh();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = 0;
            for (d = a.screens.length; b < d; ++b) {
                var e = a.screens[b];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + v6(a.screens))
        },
        g2a = function(a) {
            s8(a);
            a.u = new j8(a.C);
            a.u.subscribe("screenChange", (0, g.Sa)(a.bV, a));
            l2a(a);
            a.K || (a.B = e0a(g.aw("yt-remote-automatic-screen-cache") || []));
            s8(a);
            a.info("Initializing automatic screens: " + v6(a.B));
            a.j = new m8(a.C, (0, g.Sa)(a.Mh, a, !0));
            a.j.subscribe("screenChange", (0, g.Sa)(function() {
                this.ea("onlineScreenChange")
            }, a))
        },
        r8 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = y6(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.K || m2a(a));
            s8(a);
            a.D[b.uuid] = b.id;
            g.$v("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        m2a = function(a) {
            a = g.Bn(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.$v("yt-remote-automatic-screen-cache", g.Kl(a, c0a))
        },
        s8 = function(a) {
            a.D = g.aw("yt-remote-device-id-map") || {}
        },
        t8 = function(a, b, c) {
            g.cv.call(this);
            this.xa = c;
            this.B = a;
            this.j = b;
            this.C = null
        },
        u8 = function(a, b) {
            a.C = b;
            a.ea("sessionScreen", a.C)
        },
        n2a = function(a, b) {
            a.C && (a.C.token = b, r8(a.B, a.C));
            a.ea("sessionScreen", a.C)
        },
        v8 = function(a, b) {
            c8(a.xa, b)
        },
        w8 = function(a, b, c) {
            t8.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.u = null;
            this.ma = (0, g.Sa)(this.yR, this);
            this.va = (0, g.Sa)(this.kZ, this);
            this.Z = g.rr(function() {
                o2a(d, null)
            }, 12E4);
            this.K = this.D = this.J = this.N = 0;
            this.ra = !1;
            this.X = "unknown"
        },
        x8 = function(a, b) {
            g.tr(a.K);
            a.K = 0;
            0 == b ? p2a(a) : a.K = g.rr(function() {
                p2a(a)
            }, b)
        },
        p2a = function(a) {
            q2a(a, "getLoungeToken");
            g.tr(a.D);
            a.D = g.rr(function() {
                r2a(a, null)
            }, 3E4)
        },
        q2a = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Qi(void 0));
            var c = {};
            c.type = b;
            a.u ? a.u.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.Sa)(function() {
                v8(this, "Failed to send message: " + b + ".")
            }, a)) : v8(a, "Sending yt message without session: " + g.Qi(c))
        },
        y8 = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.wM(b, function(c) {
                u8(a, c)
            }, function() {
                return a.Jg()
            }, 5)) : a.Jg(Error("Waiting for session status timed out."))
        },
        t2a = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " +
                JSON.stringify(b));
            var d = new s6(b);
            s2a(a, d, function(e) {
                e ? (a.ra = !0, r8(a.B, d), u8(a, d), a.X = "unknown", x8(a, c)) : (g.br(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Jg())
            }, 5)
        },
        o2a = function(a, b) {
            g.tr(a.Z);
            a.Z = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? t2a(a, {
                name: a.j.friendlyName,
                screenId: b.screenId,
                loungeToken: b.loungeToken,
                dialId: b.deviceId,
                screenIdType: "shortLived"
            }, b.loungeTokenRefreshIntervalMs) : (g.br(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), y8(a, b.screenId))) : (g.br(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) +
                ".")), y8(a, b.screenId)) : y8(a, b.screenId) : a.Jg(Error("Waiting for session status timed out."))
        },
        r2a = function(a, b) {
            g.tr(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.X = c, x8(a, 3E4)) : (n2a(a, b.loungeToken), a.ra = !1, a.X = "unknown", x8(a, b.loungeTokenRefreshIntervalMs))
        },
        s2a = function(a, b, c, d) {
            g.tr(a.J);
            a.J = 0;
            k2a(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.rr(function() {
                    s2a(a, b, c, d - 1)
                }, 300)
            })
        },
        u2a = function(a) {
            g.tr(a.N);
            a.N = 0;
            g.tr(a.J);
            a.J = 0;
            g.tr(a.Z);
            a.Z = 0;
            g.tr(a.D);
            a.D = 0;
            g.tr(a.K);
            a.K = 0
        },
        z8 = function(a, b, c, d) {
            t8.call(this, a, b, "DialSession");
            this.config_ = d;
            this.u = this.N = null;
            this.va = "";
            this.Ia = c;
            this.Ha = null;
            this.Z = function() {};
            this.X = NaN;
            this.Da = (0, g.Sa)(this.zR, this);
            this.D = function() {};
            this.K = this.J = 0;
            this.ma = !1;
            this.ra = "unknown"
        },
        A8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.u) ? 0 : b.getDialAppInfo))
        },
        v2a = function(a) {
            a.D = a.B.jJ(a.va, a.j.label, a.j.friendlyName, A8(a), function(b, c) {
                a.D = function() {};
                a.ma = !0;
                u8(a, b);
                "shortLived" == b.idType && 0 < c && B8(a, c)
            }, function(b) {
                a.D = function() {};
                a.Jg(b)
            })
        },
        w2a = function(a) {
            var b = {};
            b.pairingCode = a.va;
            b.theme = a.Ia;
            o0a() && (b.env_useStageMdx = 1);
            return g.aj(b)
        },
        C8 = function(a) {
            return new Promise(function(b) {
                a.va = w6();
                if (a.Ha) {
                    var c = new chrome.cast.DialLaunchResponse(!0, w2a(a));
                    b(c);
                    v2a(a)
                } else a.Z = function() {
                    g.tr(a.X);
                    a.Z = function() {};
                    a.X = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, w2a(a));
                    b(d);
                    v2a(a)
                }, a.X = g.rr(function() {
                    a.Z()
                }, 100)
            })
        },
        y2a = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new s6(b);
            return (new Promise(function(e) {
                x2a(a, d, function(f) {
                    f ? (a.ma = !0, r8(a.B, d), u8(a, d), B8(a, c)) : g.br(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : C8(a)
            })
        },
        z2a = function(a, b) {
            var c = a.N.receiver.label,
                d = a.j.friendlyName;
            return (new Promise(function(e) {
                i2a(a.B, c, b, d, function(f) {
                    f && f.token && u8(a, f);
                    e(f)
                }, function(f) {
                    v8(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : C8(a)
            })
        },
        x2a = function(a, b, c, d) {
            g.tr(a.J);
            a.J = 0;
            k2a(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.rr(function() {
                    x2a(a, b, c, d - 1)
                }, 300)
            })
        },
        B8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            A8(a) && (g.tr(a.K), a.K = 0, 0 == b ? A2a(a) : a.K = g.rr(function() {
                A2a(a)
            }, b))
        },
        A2a = function(a) {
            A8(a) && a.u.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.ra = c, B8(a, 3E4)) : (a.ma = !1, a.ra = "unknown", n2a(a, b.loungeToken), B8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.ra = "noLoungeTokenResponse";
                B8(a, 3E4)
            })
        },
        B2a = function(a) {
            g.tr(a.J);
            a.J = 0;
            g.tr(a.K);
            a.K = 0;
            a.D();
            a.D = function() {};
            g.tr(a.X)
        },
        D8 = function(a, b) {
            t8.call(this, a, b, "ManualSession");
            this.u = g.rr((0, g.Sa)(this.Mt, this, null), 150)
        },
        E8 = function(a, b) {
            g.cv.call(this);
            this.config_ = b;
            this.u = a;
            this.N = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.X = b.disableCastApi || !1;
            this.J = b.forceMirroring || !1;
            this.j = null;
            this.K = !1;
            this.B = [];
            this.D = (0, g.Sa)(this.fY, this)
        },
        C2a = function(a, b) {
            return b ? g.Zb(a.B, function(c) {
                return t6(b, c.label)
            }, a) : null
        },
        F8 = function(a) {
            c8("Controller", a)
        },
        U1a = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        G8 = function(a) {
            return a.K || !!a.B.length || !!a.j
        },
        H8 = function(a, b, c) {
            b != a.j && (g.zf(a.j), (a.j = b) ? (c ? a.ea("yt-remote-cast2-receiver-resumed",
                b.j) : a.ea("yt-remote-cast2-receiver-selected", b.j), b.subscribe("sessionScreen", (0, g.Sa)(a.QO, a, b)), b.subscribe("sessionFailed", function() {
                return D2a(a, b)
            }), b.getScreen() ? a.ea("yt-remote-cast2-session-change", b.getScreen()) : c && a.j.Mt(null)) : a.ea("yt-remote-cast2-session-change", null))
        },
        D2a = function(a, b) {
            a.j == b && a.ea("yt-remote-cast2-session-failed")
        },
        E2a = function(a) {
            var b = a.u.iJ(),
                c = a.j && a.j.j;
            a = g.Kl(b, function(d) {
                c && t6(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = C2a(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        J2a = function(a, b, c, d) {
            d.disableCastApi ? I8("Cannot initialize because disabled by Mdx config.") : F2a() ? G2a(b, d) && (J8(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? H2a(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? H2a(a, c) : (K8("Failed to load cast API: " + f), L8(!1), J8(!1), g.bw("yt-remote-cast-available"), g.bw("yt-remote-cast-receiver"),
                    I2a(), c(!1))
            }, d.loadCastApiSetupScript ? g.dw("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= F6() && v0a() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? H6() : 89 <= F6() ? x0a() : (I6(), G6(w0a.map(s0a))))) : I8("Cannot initialize because not running Chrome")
        },
        I2a = function() {
            I8("dispose");
            var a = M8();
            a && a.dispose();
            g.Ja("yt.mdx.remote.cloudview.instance_", null, void 0);
            K2a(!1);
            g.Du(N8);
            N8.length = 0
        },
        O8 = function() {
            return !!g.aw("yt-remote-cast-installed")
        },
        L2a = function() {
            var a = g.aw("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        M2a = function() {
            I8("clearCurrentReceiver");
            g.bw("yt-remote-cast-receiver")
        },
        N2a = function() {
            return O8() ? M8() ? M8().getCastSession() : (K8("getCastSelector: Cast is not initialized."), null) : (K8("getCastSelector: Cast API is not installed!"), null)
        },
        Q8 = function() {
            O8() ? M8() ? P8() ? (I8("Requesting cast selector."), M8().requestSession()) : (I8("Wait for cast API to be ready to request the session."), N8.push(g.Cu("yt-remote-cast2-api-ready", Q8))) : K8("requestCastSelector: Cast is not initialized.") : K8("requestCastSelector: Cast API is not installed!")
        },
        R8 =
        function(a, b) {
            P8() ? M8().setConnectedScreenStatus(a, b) : K8("setConnectedScreenStatus called before ready.")
        },
        F2a = function() {
            var a = 0 <= g.Ab().search(/ (CrMo|Chrome|CriOS)\//);
            return g.gA || a
        },
        O2a = function(a, b) {
            M8().init(a, b)
        },
        G2a = function(a, b) {
            var c = !1;
            M8() || (a = new E8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.$v("yt-remote-cast-available", d);
                q6("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                I8("onReceiverSelected: " + d.friendlyName);
                g.$v("yt-remote-cast-receiver", d);
                q6("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                I8("onReceiverResumed: " + d.friendlyName);
                g.$v("yt-remote-cast-receiver", d);
                q6("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                I8("onSessionChange: " + u6(d));
                d || g.bw("yt-remote-cast-receiver");
                q6("yt-remote-cast2-session-change", d)
            }), g.Ja("yt.mdx.remote.cloudview.instance_", a, void 0), c = !0);
            I8("cloudview.createSingleton_: " + c);
            return c
        },
        M8 = function() {
            return g.Ka("yt.mdx.remote.cloudview.instance_")
        },
        H2a = function(a, b) {
            L8(!0);
            J8(!1);
            O2a(a, function(c) {
                c ? (K2a(!0), g.Eu("yt-remote-cast2-api-ready")) : (K8("Failed to initialize cast API."), L8(!1), g.bw("yt-remote-cast-available"), g.bw("yt-remote-cast-receiver"), I2a());
                b(c)
            })
        },
        I8 = function(a) {
            c8("cloudview", a)
        },
        K8 = function(a) {
            c8("cloudview", a)
        },
        L8 = function(a) {
            I8("setCastInstalled_ " + a);
            g.$v("yt-remote-cast-installed", a)
        },
        P8 = function() {
            return !!g.Ka("yt.mdx.remote.cloudview.apiReady_")
        },
        K2a = function(a) {
            I8("setApiReady_ " + a);
            g.Ja("yt.mdx.remote.cloudview.apiReady_", a, void 0)
        },
        J8 = function(a) {
            g.Ja("yt.mdx.remote.cloudview.initializing_", a, void 0)
        },
        S8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.J = this.K = 0;
            this.trackData = null;
            this.hasNext = this.vl = !1;
            this.N = this.D = this.j = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        T8 = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.vl = !1;
            a.hasNext = !1;
            a.K = 0;
            a.J = g.Ua();
            a.C = 0;
            a.j = 0;
            a.D = 0;
            a.N = 0;
            a.B = NaN;
            a.u = !1
        },
        U8 = function(a) {
            return a.Ic() ? (g.Ua() - a.J) / 1E3 : 0
        },
        V8 = function(a, b) {
            a.K = b;
            a.J = g.Ua()
        },
        W8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Ua() - a.J) / 1E3 + a.K;
                case -1E3:
                    return 0
            }
            return a.K
        },
        X8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && T8(a)
        },
        Y8 = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.hg(a.trackData);
            b.hasPrevious = a.vl;
            b.hasNext = a.hasNext;
            b.playerTime = a.K;
            b.playerTimeAt = a.J;
            b.seekableStart = a.C;
            b.seekableEnd = a.j;
            b.duration = a.D;
            b.loadedTime = a.N;
            b.liveIngestionTime = a.B;
            return b
        },
        $8 = function(a, b) {
            g.cv.call(this);
            this.B = 0;
            this.C = a;
            this.J = [];
            this.D = new O1a;
            this.u = this.j = null;
            this.X = (0, g.Sa)(this.RW, this);
            this.K = (0, g.Sa)(this.Hx, this);
            this.N = (0, g.Sa)(this.QW, this);
            this.Z = (0, g.Sa)(this.UW, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.UH, this), P2a(this))) : c = 3;
            0 != c && (b ? this.UH(c) : g.rr((0, g.Sa)(function() {
                this.UH(c)
            }, this), 0));
            (a = N2a()) && Z8(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.Z)
        },
        a9 = function(a) {
            return new S8(a.C.getPlayerContextData())
        },
        P2a = function(a) {
            g.tc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.J.push(this.C.subscribe(b, g.Ta(this.dY, b), this))
            }, a)
        },
        Q2a = function(a) {
            g.tc(a.J, function(b) {
                this.C.unsubscribeByKey(b)
            }, a);
            a.J.length = 0
        },
        b9 = function(a) {
            return 1 == a.getState()
        },
        c9 = function(a, b) {
            var c = a.D;
            50 > c.j.length + c.u.length && a.D.enqueue(b)
        },
        e9 = function(a, b, c) {
            var d = a9(a);
            V8(d, c); - 1E3 != d.playerState && (d.playerState = b);
            d9(a, d)
        },
        f9 = function(a, b, c) {
            a.C.sendMessage(b, c)
        },
        d9 = function(a, b) {
            Q2a(a);
            a.C.setPlayerContextData(Y8(b));
            P2a(a)
        },
        Z8 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.X), a.u.removeMediaListener(a.K), a.Hx(null));
            a.u = b;
            a.u && (c8("CP", "Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.X), a.u.addMediaListener(a.K), a.u.media.length && a.Hx(a.u.media[0]))
        },
        R2a = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = a9(a);
                b.contentId != d.videoId && c8("CP", "Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                V8(d, a.j.getEstimatedTime());
                d9(a, d)
            } else c8("CP", "No cast media video. Ignoring state update.")
        },
        g9 = function(a, b, c) {
            return (0, g.Sa)(function(d) {
                this.Ee("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.Ee("Retrying " + b + " using MDx browser channel."), f9(this, b, c))
            }, a)
        },
        j9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.cv.call(this);
            var e = this;
            this.J = NaN;
            this.va = !1;
            this.X = this.N = this.ma = this.ra = NaN;
            this.Z = [];
            this.D = this.K = this.C = this.j = this.u = null;
            this.Ha = a;
            this.Da = d;
            this.Z.push(g.iu(window, "beforeunload", function() {
                e.Ws(2)
            }));
            this.B = [];
            this.j = new S8;
            this.Ia = b.id;
            this.xa = b.idType;
            this.u = T1a(this.Ha, c, this.nJ, "shortLived" == this.xa, this.Ia);
            this.u.Oa("channelOpened", function() {
                S2a(e)
            });
            this.u.Oa("channelClosed", function() {
                h9("Channel closed");
                isNaN(e.J) ? D6(!0) : D6();
                e.dispose()
            });
            this.u.Oa("channelError", function(f) {
                D6();
                isNaN(e.Sw()) ? (1 == f && "shortLived" == e.xa && e.ea("browserChannelAuthError", f), h9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.va = !0, h9("Channel error: " + f + " with reconnection in " + e.Sw() + " ms"), i9(e, 2))
            });
            this.u.Oa("channelMessage", function(f) {
                T2a(e, f)
            });
            this.u.fn(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.cw() && g.$v("yt-remote-session-video-id", f)
            })
        },
        U2a = function(a) {
            return g.Zb(a.B, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        h9 = function(a) {
            c8("conn", a)
        },
        i9 = function(a, b) {
            a.ea("proxyStateChange", b)
        },
        V2a = function(a) {
            a.J = g.rr(function() {
                h9("Connecting timeout");
                a.Ws(1)
            }, 2E4)
        },
        k9 = function(a) {
            g.tr(a.J);
            a.J = NaN
        },
        l9 = function(a) {
            g.tr(a.ra);
            a.ra = NaN
        },
        W2a = function(a) {
            m9(a);
            a.ma = g.rr(function() {
                n9(a, "getNowPlaying")
            }, 2E4)
        },
        m9 = function(a) {
            g.tr(a.ma);
            a.ma = NaN
        },
        S2a = function(a) {
            h9("Channel opened");
            a.va && (a.va = !1, l9(a), a.ra = g.rr(function() {
                h9("Timing out waiting for a screen.");
                a.Ws(1)
            }, 15E3))
        },
        Y2a = function(a, b) {
            var c = null;
            if (b) {
                var d = U2a(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ja("yt.mdx.remote.remoteClient_", c, void 0);
            b && (k9(a), l9(a));
            c = a.u.Dt() && isNaN(a.J);
            b == c ? b && (i9(a, 1), n9(a, "getSubtitlesTrack")) : b ? (a.vM() && a.j.reset(), i9(a, 1), n9(a, "getNowPlaying"), X2a(a)) : a.Ws(1)
        },
        Z2a = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.bg(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.ea("remotePlayerChange"))
        },
        $2a = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            X8(a.j, d, e);
            a.ea("remoteQueueChange", c)
        },
        b3a = function(a, b) {
            b.params = b.params || {};
            $2a(a, b, "NOW_PLAYING_MAY_CHANGE");
            a3a(a, b);
            a.ea("autoplayDismissed")
        },
        a3a = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            V8(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.N = isNaN(c) ? 0 : c;
            a.j.hk(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? W2a(a) : m9(a);
            a.ea("remotePlayerChange")
        },
        c3a = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                V8(a.j, isNaN(b) ? 0 : b);
                a.ea("remotePlayerChange")
            }
        },
        d3a = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.ea("remotePlayerChange")
        },
        e3a = function(a, b) {
            a.K = b.params.videoId;
            a.ea("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        f3a = function(a, b) {
            a.K = b.params.videoId || null;
            a.ea("autoplayUpNext", a.K)
        },
        g3a = function(a, b) {
            a.D = b.params.autoplayMode;
            a.ea("autoplayModeChange", a.D);
            "DISABLED" == a.D && a.ea("autoplayDismissed")
        },
        h3a = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.vl = "true" == b.params.hasPrevious;
            a.j.hasNext = c;
            a.ea("previousNextChange")
        },
        T2a = function(a, b) {
            b = b.message;
            b.params ? h9("Received: action=" + b.action + ", params=" + g.Qi(b.params)) : h9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = p6(b.params.devices);
                    a.B = g.Kl(b, function(d) {
                        return new r6(d)
                    });
                    b = !!g.Zb(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    Y2a(a, b);
                    b = a.fN("mlm");
                    a.ea("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.gc(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    Y2a(a, !1);
                    break;
                case "remoteConnected":
                    var c = new r6(p6(b.params.device));
                    g.Zb(a.B, function(d) {
                        return d.equals(c)
                    }) || X_a(a.B, c);
                    break;
                case "remoteDisconnected":
                    c = new r6(p6(b.params.device));
                    g.gc(a.B, function(d) {
                        return d.equals(c)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    $2a(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    b3a(a, b);
                    break;
                case "onStateChange":
                    a3a(a, b);
                    break;
                case "onAdStateChange":
                    c3a(a, b);
                    break;
                case "onVolumeChanged":
                    d3a(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    Z2a(a, b);
                    break;
                case "nowAutoplaying":
                    e3a(a, b);
                    break;
                case "autoplayDismissed":
                    a.ea("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    f3a(a, b);
                    break;
                case "onAutoplayModeChanged":
                    g3a(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    h3a(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.ea("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.ea("loopModeChange", b.params.loopMode);
                    break;
                default:
                    h9("Unrecognized action: " + b.action)
            }
        },
        X2a = function(a) {
            g.tr(a.X);
            a.X = g.rr(function() {
                a.Ws(1)
            }, 864E5)
        },
        n9 = function(a, b, c) {
            c ? h9("Sending: action=" + b + ", params=" + g.Qi(c)) : h9("Sending: action=" + b);
            a.u.sendMessage(b, c)
        },
        o9 = function(a) {
            g8.call(this, "ScreenServiceProxy");
            this.Ze = a;
            this.j = [];
            this.j.push(this.Ze.$_s("screenChange", (0, g.Sa)(this.ER, this)));
            this.j.push(this.Ze.$_s("onlineScreenChange", (0, g.Sa)(this.KX, this)))
        },
        l3a = function(a, b) {
            n0a();
            if (!E6 || !E6.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.P("MDX_CONFIG") || b;
                g0a();
                C6();
                p9 || (p9 = new W7(b ? b.loungeApiHost : void 0), o0a() && (p9.j = "/api/loungedev"));
                q9 || (q9 = g.Ka("yt.mdx.remote.deferredProxies_") || [], g.Ja("yt.mdx.remote.deferredProxies_", q9, void 0));
                i3a();
                var c = r9();
                if (!c) {
                    var d = new q8(p9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ja("yt.mdx.remote.screenService_", d, void 0);
                    c = r9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ja("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1, void 0);
                    J2a(a, d, function(f) {
                        f ? s9() && R8(s9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            q6("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Ka("yt.mdx.remote.initialized_") && (g.Ja("yt.mdx.remote.initialized_", !0, void 0), t9("Initializing: " +
                        g.Qi(b)), u9.push(g.Cu("yt-remote-cast2-api-ready", function() {
                        q6("yt-remote-api-ready")
                    })), u9.push(g.Cu("yt-remote-cast2-availability-change", function() {
                        q6("yt-remote-receiver-availability-change")
                    })), u9.push(g.Cu("yt-remote-cast2-receiver-selected", function() {
                        v9(null);
                        q6("yt-remote-auto-connect", "cast-selector-receiver")
                    })), u9.push(g.Cu("yt-remote-cast2-receiver-resumed", function() {
                        q6("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), u9.push(g.Cu("yt-remote-cast2-session-change", j3a)), u9.push(g.Cu("yt-remote-connection-change", function(f) {
                        f ? R8(s9(), "YouTube TV") : w9() || (R8(null, null), M2a())
                    })), u9.push(g.Cu("yt-remote-cast2-session-failed", function() {
                        q6("yt-remote-connection-failed")
                    })), a = x9(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.Q("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), t9(" -- with channel params: " + g.Qi(a)), a ? (g.$v("yt-remote-session-app", a.app), g.$v("yt-remote-session-name", a.name)) : (g.bw("yt-remote-session-app"), g.bw("yt-remote-session-name")), g.Ja("yt.mdx.remote.channelParams_", a, void 0), c.start(), s9() || k3a())
            }
        },
        m3a = function() {
            var a = r9().Ze.$_gos();
            var b = y9();
            b && z9() && (x6(a, b) || a.push(b));
            return f0a(a)
        },
        A9 = function() {
            var a = n3a();
            !a && O8() && L2a() && (a = {
                key: "cast-selector-receiver",
                name: L2a()
            });
            return a
        },
        n3a = function() {
            var a = m3a(),
                b = y9();
            b || (b = w9());
            return g.Zb(a, function(c) {
                return b && t6(b, c.key) ? !0 : !1
            })
        },
        y9 = function() {
            var a = s9();
            if (!a) return null;
            var b = r9().Mh();
            return y6(b, a)
        },
        j3a = function(a) {
            t9("remote.onCastSessionChange_: " + u6(a));
            if (a) {
                var b = y9();
                if (b && b.id == a.id) {
                    if (R8(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) B9 && (B9.token = a), (b = z9()) && b.fn(a)
                } else b && C9(), D9(a, 1)
            } else z9() && C9()
        },
        C9 = function() {
            P8() ? M8().stopSession() : K8("stopSession called before API ready.");
            var a = z9();
            a && (a.disconnect(1), E9(null))
        },
        F9 = function() {
            var a = z9();
            return !!a && 3 != a.getProxyState()
        },
        t9 = function(a) {
            c8("remote", a)
        },
        r9 = function() {
            if (!G9) {
                var a = g.Ka("yt.mdx.remote.screenService_");
                G9 = a ? new o9(a) : null
            }
            return G9
        },
        s9 = function() {
            return g.Ka("yt.mdx.remote.currentScreenId_")
        },
        o3a = function(a) {
            g.Ja("yt.mdx.remote.currentScreenId_", a, void 0)
        },
        p3a = function() {
            return g.Ka("yt.mdx.remote.connectData_")
        },
        v9 = function(a) {
            g.Ja("yt.mdx.remote.connectData_", a, void 0)
        },
        z9 = function() {
            return g.Ka("yt.mdx.remote.connection_")
        },
        E9 = function(a) {
            var b = z9();
            v9(null);
            a || o3a("");
            g.Ja("yt.mdx.remote.connection_", a, void 0);
            q9 && (g.tc(q9, function(c) {
                c(a)
            }), q9.length = 0);
            b && !a ? q6("yt-remote-connection-change", !1) : !b && a && q6("yt-remote-connection-change", !0)
        },
        w9 = function() {
            var a = g.cw();
            if (!a) return null;
            var b = r9();
            if (!b) return null;
            b = b.Mh();
            return y6(b, a)
        },
        D9 = function(a, b) {
            s9();
            y9() && y9();
            if (H9) B9 = a;
            else {
                o3a(a.id);
                var c = g.Ka("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new j9(p9, a, x9(), c);
                a.connect(b, p3a());
                a.subscribe("beforeDisconnect", function(d) {
                    q6("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    z9() && (z9(), E9(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = y9();
                    d && "shortLived" == d.idType && (P8() ? M8().handleBrowserChannelAuthError() : K8("refreshLoungeToken called before API ready."))
                });
                E9(a)
            }
        },
        k3a = function() {
            var a = w9();
            a ? (t9("Resume connection to: " + u6(a)), D9(a, 0)) : (D6(), M2a(), t9("Skipping connecting because no session screen found."))
        },
        i3a = function() {
            var a = x9();
            if (g.bg(a)) {
                a = B6();
                var b = g.aw("yt-remote-session-name") || "",
                    c = g.aw("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Ja("yt.mdx.remote.channelParams_", a, void 0)
            }
        },
        x9 = function() {
            return g.Ka("yt.mdx.remote.channelParams_") || {}
        },
        I9 = function(a, b, c) {
            g.G.call(this);
            var d = this;
            this.u = a;
            this.I = b;
            this.dc = c;
            this.events = new g.cA(this);
            this.Z = this.events.T(this.I, "onVolumeChange", function(e) {
                q3a(d, e)
            });
            this.D = !1;
            this.J = new g.kH(64);
            this.j = new g.L(this.YP, 500, this);
            this.B = new g.L(this.ZP, 1E3, this);
            this.N = new K6(this.D_, 0, this);
            this.C = {};
            this.X = new g.L(this.GQ, 1E3, this);
            this.K = new L6(this.seekTo, 1E3, this);
            g.H(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.vX);
            this.events.T(b, "captionschanged", this.OW);
            this.events.T(b, "captionssettingschanged", this.gQ);
            this.events.T(b, "videoplayerreset", this.BB);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.dc.RL()
            });
            a = this.dc;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.NO, this);
            a.subscribe("remotePlayerChange", this.Mx, this);
            a.subscribe("remoteQueueChange", this.BB, this);
            a.subscribe("previousNextChange", this.KO, this);
            a.subscribe("nowAutoplaying", this.EO, this);
            a.subscribe("autoplayDismissed", this.hO, this);
            g.H(this, this.j);
            g.H(this, this.B);
            g.H(this, this.N);
            g.H(this, this.X);
            g.H(this, this.K);
            this.gQ();
            this.BB();
            this.Mx()
        },
        q3a = function(a, b) {
            if (J9(a)) {
                a.dc.unsubscribe("remotePlayerChange", a.Mx, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = a9(a.dc);
                if (c !== d.volume || b !== d.muted) a.dc.setVolume(c, b), a.X.start();
                a.dc.subscribe("remotePlayerChange", a.Mx, a)
            }
        },
        r3a = function(a) {
            a.Pb(0);
            a.j.stop();
            a.Vb(new g.kH(64))
        },
        K9 = function(a, b) {
            if (J9(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.I.getSubtitlesUserSettings()
                }, g.jg(c, b));
                a.dc.mJ(a.I.getVideoData(1).videoId, c);
                a.C = a9(a.dc).trackData
            }
        },
        L9 = function(a, b) {
            var c = a.I.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.I.getVideoData(1);
            a.dc.playVideo(c.videoId, b, d, e, c.playerParams, c.Wa, W_a(c));
            a.Vb(new g.kH(1))
        },
        s3a = function(a, b) {
            if (b) {
                var c = a.I.getOption("captions", "tracklist", {
                    WM: 1
                });
                c && c.length ? (a.I.setOption("captions", "track", b), a.D = !1) : (a.I.loadModule("captions"), a.D = !0)
            } else a.I.setOption("captions", "track", {})
        },
        J9 = function(a) {
            return a9(a.dc).videoId === a.I.getVideoData(1).videoId
        },
        M9 = function() {
            g.W.call(this, {
                G: "div",
                L: "ytp-mdx-popup-dialog",
                W: {
                    role: "dialog"
                },
                U: [{
                    G: "div",
                    L: "ytp-mdx-popup-dialog-inner-content",
                    U: [{
                        G: "div",
                        L: "ytp-mdx-popup-title",
                        oa: "You're signed out"
                    }, {
                        G: "div",
                        L: "ytp-mdx-popup-description",
                        oa: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        G: "div",
                        L: "ytp-mdx-privacy-popup-buttons",
                        U: [{
                            G: "button",
                            Fa: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            oa: "Cancel"
                        }, {
                            G: "button",
                            Fa: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            oa: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.SI(this, 250);
            this.cancelButton = this.Ca("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ca("ytp-mdx-privacy-popup-confirm");
            g.H(this, this.j);
            this.T(this.cancelButton, "click", this.u);
            this.T(this.confirmButton, "click", this.B)
        },
        N9 = function(a) {
            g.W.call(this, {
                G: "div",
                L: "ytp-remote",
                U: [{
                    G: "div",
                    L: "ytp-remote-display-status",
                    U: [{
                        G: "div",
                        L: "ytp-remote-display-status-icon",
                        U: [g.Uza()]
                    }, {
                        G: "div",
                        L: "ytp-remote-display-status-text",
                        oa: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.SI(this, 250);
            g.H(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            t3a(this, a.yb())
        },
        t3a = function(a, b) {
            if (3 === a.api.getPresentingPlayerType()) {
                var c = {
                    RECEIVER_NAME: a.api.getOption("remote", "currentReceiver").name
                };
                b = g.V(b, 128) ? g.HF("Error on $RECEIVER_NAME", c) : b.Ic() || g.V(b, 4) ? g.HF("Playing on $RECEIVER_NAME", c) : g.HF("Connected to $RECEIVER_NAME", c);
                a.La("statustext", b);
                a.j.show()
            } else a.j.hide()
        },
        O9 = function(a, b) {
            g.rO.call(this, "Play on", 0, a, b);
            this.I = a;
            this.jp = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        P9 = function(a) {
            g.jL.call(this, a);
            this.Bl = {
                key: w6(),
                name: "This computer"
            };
            this.Ci = null;
            this.subscriptions = [];
            this.nH = this.dc = null;
            this.jp = [this.Bl];
            this.Qn = this.Bl;
            this.Ld = new g.kH(64);
            this.tN = 0;
            this.Ff = -1;
            this.Ux = !1;
            this.Sx = this.fu = null;
            if (!g.sC(this.player.V()) && !g.tC(this.player.V())) {
                a = this.player;
                var b = g.NK(a);
                b && (b = b.Co()) && (b = new O9(a, b), g.H(this, b));
                b = new N9(a);
                g.H(this, b);
                g.XK(a, b.element, 4);
                this.fu = new M9;
                g.H(this, this.fu);
                g.XK(a, this.fu.element, 4);
                this.Ux = !!w9()
            }
        },
        Q9 = function(a) {
            a.Sx && (a.player.removeEventListener("presentingplayerstatechange",
                a.Sx), a.Sx = null)
        },
        u3a = function(a, b, c) {
            a.Ld = c;
            a.player.ea("presentingplayerstatechange", new g.pF(c, b))
        },
        R9 = function(a, b) {
            if (b.key !== a.Qn.key)
                if (b.key === a.Bl.key) C9();
                else {
                    var c;
                    (c = !a.player.V().S("mdx_enable_privacy_disclosure_ui")) || (c = ((c = g.P("PLAYER_CONFIG")) && c.args && void 0 !== c.args.authuser ? !0 : !(!g.P("SESSION_INDEX") && !g.P("LOGGED_IN"))) || a.Ux || !a.fu);
                    (c ? 0 : g.KC(a.player.V()) || g.NC(a.player.V())) && v3a(a);
                    a.Qn = b;
                    if (!a.player.V().S("disable_mdx_connection_in_mdx_module_for_music_web") || !g.tC(a.player.V())) {
                        var d = a.player.getPlaylistId();
                        c = a.player.getVideoData(1);
                        var e = c.videoId;
                        if (!d && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.V().S("should_clear_video_data_on_player_cued_unstarted")) a =
                            null;
                        else {
                            var f = a.player.getPlaylist();
                            if (f) {
                                var k = [];
                                for (var l = 0; l < f.length; l++) k[l] = g.eL(f, l).videoId
                            } else k = [e];
                            f = a.player.getCurrentTime(1);
                            a = {
                                videoIds: k,
                                listId: d,
                                videoId: e,
                                playerParams: c.playerParams,
                                clickTrackingParams: c.Wa,
                                index: Math.max(a.player.getPlaylistIndex(), 0),
                                currentTime: 0 === f ? void 0 : f
                            };
                            (c = W_a(c)) && (a.locationInfo = c)
                        }
                        t9("Connecting to: " + g.Qi(b));
                        "cast-selector-receiver" == b.key ? (v9(a || null), b = a || null, P8() ? M8().setLaunchParams(b) : K8("setLaunchParams called before ready.")) : !a && F9() &&
                            s9() == b.key ? q6("yt-remote-connection-change", !0) : (C9(), v9(a || null), a = r9().Mh(), (b = y6(a, b.key)) && D9(b, 1))
                    }
                }
        },
        v3a = function(a) {
            a.player.yb().Ic() ? a.player.pauseVideo() : (a.Sx = function(b) {
                !a.Ux && g.rF(b, 8) && (a.player.pauseVideo(), Q9(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.Sx));
            a.fu && a.fu.od();
            z9() || (H9 = !0)
        };
    g.sq.prototype.po = g.da(1, function() {
        return g.fe(this, 6)
    });
    g.gd.prototype.ez = g.da(0, function() {
        var a = g.ld(this);
        return 4294967296 * g.ld(this) + (a >>> 0)
    });
    var j_a, s_a = g.bf(function(a, b, c) {
            if (1 !== a.u) return !1;
            g.D(b, c, g.wd(a));
            return !0
        }, g.cf),
        K_a = g.bf(function(a, b, c, d) {
            if (1 !== a.u) return !1;
            g.se(b, c, d, g.wd(a));
            return !0
        }, g.cf),
        t_a = g.bf(function(a, b, c) {
            if (0 !== a.u) return !1;
            g.D(b, c, g.jd(a.j));
            return !0
        }, g.df),
        J_a = g.bf(function(a, b, c, d) {
            if (0 !== a.u) return !1;
            g.se(b, c, d, g.jd(a.j));
            return !0
        }, g.df),
        B_a = g.bf(function(a, b, c) {
            if (0 !== a.u) return !1;
            g.D(b, c, g.kd(a.j));
            return !0
        }, g.ef),
        G_a = g.bf(function(a, b, c, d) {
            if (0 !== a.u) return !1;
            g.se(b, c, d, g.kd(a.j));
            return !0
        }, g.ef),
        O_a = g.bf(function(a, b, c) {
            if (1 !== a.u) return !1;
            g.D(b, c, a.j.ez());
            return !0
        }, function(a, b, c) {
            l_a(a, c, g.fe(b, c))
        }),
        Q_a = g.bf(function(a, b, c) {
            if (1 !== a.u && 2 !== a.u) return !1;
            b = g.he(b, c);
            if (2 == a.u) {
                c = g.gd.prototype.ez;
                var d = g.kd(a.j) >>> 0;
                for (d = a.j.j + d; a.j.j < d;) b.push(c.call(a.j))
            } else b.push(a.j.ez());
            return !0
        }, function(a, b, c) {
            b = g.he(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) l_a(a, c, b[d])
        }),
        y_a = g.bf(function(a, b, c) {
            if (0 !== a.u) return !1;
            g.D(b, c, g.md(a.j));
            return !0
        }, m_a),
        H_a = g.bf(function(a, b, c, d) {
            if (0 !== a.u) return !1;
            g.se(b, c, d, g.md(a.j));
            return !0
        }, m_a),
        P_a = g.bf(function(a, b, c) {
            if (2 !== a.u) return !1;
            a = g.yd(a);
            g.qe(b, c, a);
            return !0
        }, function(a, b, c) {
            b = g.he(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    null != e && g.Od(a, c, g.fb(e))
                }
        }),
        F_a = g.bf(function(a, b, c, d) {
            if (2 !== a.u) return !1;
            g.se(b, c, d, g.yd(a));
            return !0
        }, g.ff),
        M_a = g.bf(function(a, b, c, d, e) {
            if (2 !== a.u) return !1;
            g.vd(a, g.ue(b, d, c), e);
            return !0
        }, g.gf),
        p_a = [1];
    g.v(q_a, g.F);
    g.v(r_a, g.F);
    g.v(w_a, g.F);
    g.v(x_a, g.F);
    var D_a = [1, 2];
    g.v(A_a, g.F);
    var t1a = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        C7 = {
            "'": "\\'"
        },
        b0a = {
            h1: "atp",
            Oda: "ska",
            rca: "que",
            aaa: "mus",
            Nda: "sus",
            L6: "dsp",
            Pca: "seq",
            D$: "mic",
            C5: "dpa",
            C1: "cds",
            Y$: "mlm",
            z5: "dsdtr",
            Jaa: "ntb"
        };
    r6.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    };
    var E6, A6 = "",
        u0a = p0a("loadCastFramework") || p0a("loadCastApplicationFramework"),
        w0a = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    g.Va(K6, g.G);
    g.h = K6.prototype;
    g.h.ZS = function(a) {
        this.C = arguments;
        this.j = !1;
        this.Rb ? this.B = g.Ua() + this.hg : this.Rb = g.zi(this.D, this.hg)
    };
    g.h.stop = function() {
        this.Rb && (g.C.clearTimeout(this.Rb), this.Rb = null);
        this.B = null;
        this.j = !1;
        this.C = []
    };
    g.h.pause = function() {
        ++this.u
    };
    g.h.resume = function() {
        this.u && (--this.u, !this.u && this.j && (this.j = !1, this.J.apply(null, this.C)))
    };
    g.h.qa = function() {
        this.stop();
        K6.qe.qa.call(this)
    };
    g.h.aT = function() {
        this.Rb && (g.C.clearTimeout(this.Rb), this.Rb = null);
        this.B ? (this.Rb = g.zi(this.D, this.B - g.Ua()), this.B = null) : this.u ? this.j = !0 : (this.j = !1, this.J.apply(null, this.C))
    };
    g.v(L6, g.G);
    g.h = L6.prototype;
    g.h.xD = function(a) {
        this.B = arguments;
        this.Rb || this.u ? this.j = !0 : M6(this)
    };
    g.h.stop = function() {
        this.Rb && (g.C.clearTimeout(this.Rb), this.Rb = null, this.j = !1, this.B = null)
    };
    g.h.pause = function() {
        this.u++
    };
    g.h.resume = function() {
        this.u--;
        this.u || !this.j || this.Rb || (this.j = !1, M6(this))
    };
    g.h.qa = function() {
        g.G.prototype.qa.call(this);
        this.stop()
    };
    N6.prototype.stringify = function(a) {
        return g.C.JSON.stringify(a, void 0)
    };
    N6.prototype.parse = function(a) {
        return g.C.JSON.parse(a, void 0)
    };
    g.Va(O6, g.Cf);
    g.Va(P6, g.Cf);
    var D0a = !1;
    var F0a = null;
    g.Va(G0a, g.Cf);
    g.Va(H0a, g.Cf);
    g.Va(I0a, g.Cf);
    U6.prototype.info = function() {};
    U6.prototype.warning = function() {};
    var $6 = {},
        Z6 = {};
    g.h = V6.prototype;
    g.h.setTimeout = function(a) {
        this.ib = a
    };
    g.h.dT = function(a) {
        a = a.target;
        var b = this.Pa;
        b && 3 == g.wj(a) ? b.xD() : this.ZJ(a)
    };
    g.h.ZJ = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.wj(this.j),
                    c = this.j.u,
                    d = this.j.getStatus();
                if (!(3 > b || 3 == b && !g.RC && !Y6(this))) {
                    this.Da || 4 != b || 7 == c || (8 == c || 0 >= d ? R6(3) : R6(2));
                    d7(this);
                    var e = this.j.getStatus();
                    this.qb = e;
                    b: if (M0a(this)) {
                        var f = g.Aj(this.j);
                        a = "";
                        var k = f.length,
                            l = 4 == g.wj(this.j);
                        if (!this.u.B) {
                            if ("undefined" === typeof TextDecoder) {
                                b7(this);
                                c7(this);
                                var m = "";
                                break b
                            }
                            this.u.B = new g.C.TextDecoder
                        }
                        for (c = 0; c < k; c++) this.u.u = !0, a += this.u.B.decode(f[c], {
                            stream: l && c == k - 1
                        });
                        f.splice(0, k);
                        this.u.j += a;
                        this.Z = 0;
                        m = this.u.j
                    } else m = g.zj(this.j);
                    Y6(this);
                    if (this.B = 200 == e) {
                        if (this.ub && !this.Ra) {
                            b: {
                                if (this.j) {
                                    var n = g.Bj(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.kb(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Ra = !0,
                            a7(this, e);
                            else {
                                this.B = !1;
                                this.J = 3;
                                S6(12);
                                b7(this);
                                c7(this);
                                break a
                            }
                        }
                        this.xa ? (O0a(this, b, m), g.RC && this.B && 3 == b && (this.Wa.Oa(this.Xa, "tick", this.cT), this.Xa.start())) : a7(this, m);
                        4 == b && b7(this);
                        this.B && !this.Da && (4 == b ? Q0a(this.D, this) : (this.B = !1, X6(this)))
                    } else 400 == e && 0 < m.indexOf("Unknown SID") ?
                        (this.J = 3, S6(12)) : (this.J = 0, S6(13)), b7(this), c7(this)
                }
            }
        } catch (q) {
            Y6(this)
        } finally {}
    };
    g.h.cT = function() {
        if (this.j) {
            var a = g.wj(this.j),
                b = g.zj(this.j);
            this.Z < b.length && (d7(this), O0a(this, a, b), this.B && 4 != a && X6(this))
        }
    };
    g.h.cancel = function() {
        this.Da = !0;
        b7(this)
    };
    g.h.bT = function() {
        this.X = null;
        var a = Date.now();
        0 <= a - this.ob ? (2 != this.Ia && (R6(3), S6(17)), b7(this), this.J = 2, c7(this)) : P0a(this, this.ob - a)
    };
    g.h.getLastError = function() {
        return this.J
    };
    V0a.prototype.cancel = function() {
        this.B = m7(this);
        if (this.u) this.u.cancel(), this.u = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.r(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.h = $0a.prototype;
    g.h.aK = 8;
    g.h.nf = 1;
    g.h.connect = function(a, b, c, d) {
        this.xe && g.oi((0, g.Sa)(this.LZ, this, a));
        S6(0);
        this.Fb = a;
        this.Da = b || {};
        c && void 0 !== d && (this.Da.OSID = c, this.Da.OAID = d);
        this.Xa = this.Gb;
        this.eT(1, 0);
        this.Ha = R0a(this, null, this.Fb);
        l7(this)
    };
    g.h.disconnect = function() {
        a1a(this);
        if (3 == this.nf) {
            var a = this.Pa++,
                b = this.Ha.clone();
            g.Ak(b, "SID", this.C);
            g.Ak(b, "RID", a);
            g.Ak(b, "TYPE", "terminate");
            q7(this, b);
            a = new V6(this, this.C, a, void 0);
            a.Ia = 2;
            a.K = m6(b.clone());
            b = !1;
            g.C.navigator && g.C.navigator.sendBeacon && (b = g.C.navigator.sendBeacon(a.K.toString(), ""));
            !b && g.C.Image && ((new Image).src = a.K, b = !0);
            b || (a.j = L0a(a.D, null), a.j.send(a.K));
            a.ra = Date.now();
            X6(a)
        }
        g1a(this)
    };
    g.h.LZ = function(a) {
        try {
            E0a(a, function() {})
        } catch (b) {}
    };
    g.h.cf = function() {
        return 0 == this.nf
    };
    g.h.getState = function() {
        return this.nf
    };
    g.h.cK = function(a) {
        if (this.J)
            if (this.J = null, 1 == this.nf) {
                if (!a) {
                    this.Pa = Math.floor(1E5 * Math.random());
                    a = this.Pa++;
                    var b = new V6(this, "", a, void 0),
                        c = this.X;
                    this.ob && (c ? (c = g.gg(c), g.jg(c, this.ob)) : c = this.ob);
                    null !== this.K || this.gb || (b.Ha = c, c = null);
                    var d;
                    if (this.ib) a: {
                        for (var e = d = 0; e < this.B.length; e++) {
                            b: {
                                var f = this.B[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.B.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = d1a(this, b, d);
                    e = this.Ha.clone();
                    g.Ak(e, "RID", a);
                    g.Ak(e, "CVER", 22);
                    this.xa && g.Ak(e, "X-HTTP-Session-Id", this.xa);
                    q7(this, e);
                    c && (this.gb ? d = "headers=" + g.Gh(g.$da(c)) + "&" + d : this.K && g.Ek(e, this.K, c));
                    k7(this.u, b);
                    this.le && g.Ak(e, "TYPE", "init");
                    this.ib ? (g.Ak(e, "$req", d), g.Ak(e, "SID", "null"), b.ub = !0, W6(b, e, null)) : W6(b, e, d);
                    this.nf = 2
                }
            } else 3 == this.nf && (a ? e1a(this, a) : 0 == this.B.length || W0a(this.u) || e1a(this))
    };
    g.h.bK = function() {
        this.N = null;
        f1a(this);
        if (this.Kb && !(this.Wa || null == this.j || 0 >= this.Sb)) {
            var a = 2 * this.Sb;
            this.va = T6((0, g.Sa)(this.NW, this), a)
        }
    };
    g.h.NW = function() {
        this.va && (this.va = null, null != this.j.j && g.zj(this.j.j), this.Xa = !1, this.Wa = !0, S6(10), g7(this), f1a(this))
    };
    g.h.MG = function(a) {
        this.j == a && this.Kb && !this.Wa && (p7(this), this.Wa = !0, S6(11))
    };
    g.h.fT = function() {
        null != this.Z && (this.Z = null, g7(this), h7(this), S6(19))
    };
    g.h.eT = function(a) {
        g.bc(arguments, this.nf)
    };
    g.h.k_ = function(a) {
        a ? S6(2) : S6(1)
    };
    g.h.isActive = function() {
        return !!this.D && this.D.isActive(this)
    };
    g.h = i1a.prototype;
    g.h.gK = function() {};
    g.h.fK = function() {};
    g.h.eK = function() {};
    g.h.dK = function() {};
    g.h.isActive = function() {
        return !0
    };
    g.h.gT = function() {};
    g.Va(s7, g.Fg);
    s7.prototype.open = function() {
        this.j.D = this.C;
        this.K && (this.j.Ia = !0);
        this.j.connect(this.J, this.u || void 0)
    };
    s7.prototype.close = function() {
        this.j.disconnect()
    };
    s7.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.Qi(a), a = c);
        b.B.push(new U0a(b.Pd++, a));
        3 == b.nf && l7(b)
    };
    s7.prototype.qa = function() {
        this.j.D = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        s7.qe.qa.call(this)
    };
    g.Va(k1a, O6);
    g.Va(l1a, P6);
    g.Va(r7, i1a);
    r7.prototype.gK = function() {
        this.j.dispatchEvent("m")
    };
    r7.prototype.fK = function(a) {
        this.j.dispatchEvent(new k1a(a))
    };
    r7.prototype.eK = function(a) {
        this.j.dispatchEvent(new l1a(a))
    };
    r7.prototype.dK = function() {
        this.j.dispatchEvent("n")
    };
    var u7 = new g.Fg;
    g.v(o1a, g.Cf);
    g.h = w7.prototype;
    g.h.Np = null;
    g.h.Vl = !1;
    g.h.As = null;
    g.h.zD = null;
    g.h.ys = null;
    g.h.zs = null;
    g.h.Bn = null;
    g.h.Dn = null;
    g.h.Op = null;
    g.h.Of = null;
    g.h.vz = 0;
    g.h.qk = null;
    g.h.sz = null;
    g.h.Cn = null;
    g.h.Cv = -1;
    g.h.MP = !0;
    g.h.Mp = !1;
    g.h.yD = 0;
    g.h.rz = null;
    var r1a = {},
        z7 = {};
    g.h = w7.prototype;
    g.h.setTimeout = function(a) {
        this.u = a
    };
    g.h.iT = function(a) {
        a = a.target;
        var b = this.rz;
        b && 3 == g.wj(a) ? b.xD() : this.hK(a)
    };
    g.h.hK = function(a) {
        try {
            if (a == this.Of) a: {
                var b = g.wj(this.Of),
                    c = this.Of.u,
                    d = this.Of.getStatus();
                if (g.Mc && !g.Ec(10) || g.Gf && !g.Cc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.zj(this.Of)) break a;this.Mp || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Wj(3) : this.j.Wj(2));D7(this);
                var e = this.Of.getStatus();this.Cv = e;
                var f = g.zj(this.Of);
                if (this.Vl = 200 == e) {
                    4 == b && A7(this);
                    if (this.xa) {
                        for (a = !0; !this.Mp && this.vz < f.length;) {
                            var k = s1a(this, f);
                            if (k == z7) {
                                4 == b && (this.Cn = 4, v7(15), a = !1);
                                break
                            } else if (k == r1a) {
                                this.Cn = 4;
                                v7(16);
                                a = !1;
                                break
                            } else E7(this, k)
                        }
                        4 == b && 0 == f.length && (this.Cn = 1, v7(17), a = !1);
                        this.Vl = this.Vl && a;
                        a || (A7(this), B7(this))
                    } else E7(this, f);
                    this.Vl && !this.Mp && (4 == b ? this.j.wz(this) : (this.Vl = !1, y7(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Cn = 3, v7(13)) : (this.Cn = 0, v7(14)),
                A7(this),
                B7(this)
            }
        } catch (l) {
            this.Of && g.zj(this.Of)
        } finally {}
    };
    g.h.aZ = function(a) {
        t7((0, g.Sa)(this.ZY, this, a), 0)
    };
    g.h.ZY = function(a) {
        this.Mp || (D7(this), E7(this, a), y7(this))
    };
    g.h.SO = function(a) {
        t7((0, g.Sa)(this.YY, this, a), 0)
    };
    g.h.YY = function(a) {
        this.Mp || (A7(this), this.Vl = a, this.j.wz(this), this.j.Wj(4))
    };
    g.h.cancel = function() {
        this.Mp = !0;
        A7(this)
    };
    g.h.hT = function() {
        this.As = null;
        var a = Date.now();
        0 <= a - this.zD ? (2 != this.zs && this.j.Wj(3), A7(this), this.Cn = 2, v7(18), B7(this)) : v1a(this, this.zD - a)
    };
    g.h.getLastError = function() {
        return this.Cn
    };
    g.h = y1a.prototype;
    g.h.BD = null;
    g.h.Vg = null;
    g.h.VB = !1;
    g.h.aQ = null;
    g.h.hA = null;
    g.h.gG = null;
    g.h.CD = null;
    g.h.Ai = null;
    g.h.Wl = -1;
    g.h.Dv = null;
    g.h.Zv = null;
    g.h.connect = function(a) {
        this.CD = a;
        a = G7(this.j, null, this.CD);
        v7(3);
        this.aQ = Date.now();
        var b = this.j.N;
        null != b ? (this.Dv = b[0], (this.Zv = b[1]) ? (this.Ai = 1, z1a(this)) : (this.Ai = 2, I7(this))) : (n6(a, "MODE", "init"), this.Vg = new w7(this, void 0, void 0, void 0), this.Vg.Np = this.BD, x7(this.Vg, a, !1, null, !0), this.Ai = 0)
    };
    g.h.QT = function(a) {
        if (a) this.Ai = 2, I7(this);
        else {
            v7(4);
            var b = this.j;
            b.Hk = b.Nn.Wl;
            P7(b, 9)
        }
        a && this.Wj(2)
    };
    g.h.AD = function(a) {
        return this.j.AD(a)
    };
    g.h.abort = function() {
        this.Vg && (this.Vg.cancel(), this.Vg = null);
        this.Wl = -1
    };
    g.h.cf = function() {
        return !1
    };
    g.h.iK = function(a, b) {
        this.Wl = a.Cv;
        if (0 == this.Ai)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Hk = this.Wl;
                    P7(a, 2);
                    return
                }
                this.Dv = c[0];
                this.Zv = c[1]
            } else a = this.j, a.Hk = this.Wl, P7(a, 2);
        else if (2 == this.Ai)
            if (this.VB) v7(7), this.gG = Date.now();
            else if ("11111" == b) {
            if (v7(6), this.VB = !0, this.hA = Date.now(), a = this.hA - this.aQ, !g.Mc || g.Ec(10) || 500 > a) this.Wl = 200, this.Vg.cancel(), v7(12), H7(this.j, this, !0)
        } else v7(8), this.hA = this.gG = Date.now(), this.VB = !1
    };
    g.h.wz = function() {
        this.Wl = this.Vg.Cv;
        if (this.Vg.Vl) 0 == this.Ai ? this.Zv ? (this.Ai = 1, z1a(this)) : (this.Ai = 2, I7(this)) : 2 == this.Ai && ((!g.Mc || g.Ec(10) ? !this.VB : 200 > this.gG - this.hA) ? (v7(11), H7(this.j, this, !1)) : (v7(12), H7(this.j, this, !0)));
        else {
            0 == this.Ai ? v7(9) : 2 == this.Ai && v7(10);
            var a = this.j;
            this.Vg.getLastError();
            a.Hk = this.Wl;
            P7(a, 2)
        }
    };
    g.h.Ev = function() {
        return this.j.Ev()
    };
    g.h.isActive = function() {
        return this.j.isActive()
    };
    g.h.Wj = function(a) {
        this.j.Wj(a)
    };
    g.h = J7.prototype;
    g.h.Gk = null;
    g.h.Fv = null;
    g.h.eh = null;
    g.h.Qe = null;
    g.h.DD = null;
    g.h.xz = null;
    g.h.jK = null;
    g.h.yz = null;
    g.h.Gv = 0;
    g.h.kT = 0;
    g.h.Yf = null;
    g.h.En = null;
    g.h.Xl = null;
    g.h.Qp = null;
    g.h.Nn = null;
    g.h.CC = null;
    g.h.Ds = -1;
    g.h.kK = -1;
    g.h.Hk = -1;
    g.h.Cs = 0;
    g.h.Bs = 0;
    g.h.Pp = 8;
    g.Va(B1a, g.Cf);
    g.Va(C1a, g.Cf);
    g.h = J7.prototype;
    g.h.connect = function(a, b, c, d, e) {
        v7(0);
        this.DD = b;
        this.Fv = c || {};
        d && void 0 !== e && (this.Fv.OSID = d, this.Fv.OAID = e);
        this.K ? (t7((0, g.Sa)(this.DL, this, a), 100), D1a(this)) : this.DL(a)
    };
    g.h.disconnect = function() {
        E1a(this);
        if (3 == this.j) {
            var a = this.Gv++,
                b = this.xz.clone();
            g.Ak(b, "SID", this.C);
            g.Ak(b, "RID", a);
            g.Ak(b, "TYPE", "terminate");
            N7(this, b);
            a = new w7(this, this.C, a, void 0);
            a.zs = 2;
            a.Bn = m6(b.clone());
            o_a(new Image, a.Bn.toString());
            a.ys = Date.now();
            y7(a)
        }
        M1a(this)
    };
    g.h.DL = function(a) {
        this.Nn = new y1a(this);
        this.Nn.BD = this.Gk;
        this.Nn.u = this.D;
        this.Nn.connect(a)
    };
    g.h.cf = function() {
        return 0 == this.j
    };
    g.h.getState = function() {
        return this.j
    };
    g.h.mK = function(a) {
        this.En = null;
        I1a(this, a)
    };
    g.h.lK = function() {
        this.Xl = null;
        this.Qe = new w7(this, this.C, "rpc", this.J);
        this.Qe.Np = this.Gk;
        this.Qe.yD = 0;
        var a = this.jK.clone();
        g.Ak(a, "RID", "rpc");
        g.Ak(a, "SID", this.C);
        g.Ak(a, "CI", this.CC ? "0" : "1");
        g.Ak(a, "AID", this.Ds);
        N7(this, a);
        if (!g.Mc || g.Ec(10)) g.Ak(a, "TYPE", "xmlhttp"), x7(this.Qe, a, !0, this.yz, !1);
        else {
            g.Ak(a, "TYPE", "html");
            var b = this.Qe,
                c = !!this.yz;
            b.zs = 3;
            b.Bn = m6(a.clone());
            u1a(b, c)
        }
    };
    g.h.iK = function(a, b) {
        if (0 != this.j && (this.Qe == a || this.eh == a))
            if (this.Hk = a.Cv, this.eh == a && 3 == this.j)
                if (7 < this.Pp) {
                    try {
                        var c = this.D.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.Xl) {
                                if (this.Qe)
                                    if (this.Qe.ys + 3E3 < this.eh.ys) L7(this), this.Qe.cancel(), this.Qe = null;
                                    else break a;
                                O7(this);
                                v7(19)
                            }
                        }
                    else this.kK = a[1], 0 < this.kK - this.Ds && 37500 > a[2] && this.CC && 0 == this.Bs && !this.Qp && (this.Qp = t7((0, g.Sa)(this.lT, this), 6E3));
                    else P7(this, 11)
                } else null != b && P7(this, 11);
        else if (this.Qe ==
            a && L7(this), !g.kb(b))
            for (a = this.D.parse(b), b = 0; b < a.length; b++) c = a[b], this.Ds = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.C = c[1], this.yz = c[2], c = c[3], null != c ? this.Pp = c : this.Pp = 6, this.j = 3, this.Yf && this.Yf.pK(), this.jK = G7(this, this.Ev() ? this.yz : null, this.DD), J1a(this)) : "stop" == c[0] && P7(this, 7) : 3 == this.j && ("stop" == c[0] ? P7(this, 7) : "noop" != c[0] && this.Yf && this.Yf.oK(c), this.Bs = 0)
    };
    g.h.lT = function() {
        null != this.Qp && (this.Qp = null, this.Qe.cancel(), this.Qe = null, O7(this), v7(20))
    };
    g.h.wz = function(a) {
        if (this.Qe == a) {
            L7(this);
            this.Qe = null;
            var b = 2
        } else if (this.eh == a) this.eh = null, b = 1;
        else return;
        this.Hk = a.Cv;
        if (0 != this.j)
            if (a.Vl)
                if (1 == b) {
                    b = Date.now() - a.ys;
                    var c = u7;
                    c.dispatchEvent(new B1a(c, a.Op ? a.Op.length : 0, b, this.Cs));
                    K7(this);
                    this.B.length = 0
                } else J1a(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Hk)) {
                if (d = 1 == b) this.eh || this.En || 1 == this.j || 2 <= this.Cs ? d = !1 : (this.En = t7((0, g.Sa)(this.mK, this, a), K1a(this, this.Cs)), this.Cs++, d = !0);
                d = !(d || 2 == b && O7(this))
            }
            if (d) switch (c) {
                case 1:
                    P7(this,
                        5);
                    break;
                case 4:
                    P7(this, 10);
                    break;
                case 3:
                    P7(this, 6);
                    break;
                case 7:
                    P7(this, 12);
                    break;
                default:
                    P7(this, 2)
            }
        }
    };
    g.h.jT = function(a) {
        if (!g.bc(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.h.j_ = function(a) {
        a ? v7(2) : (v7(1), L1a(this, 8))
    };
    g.h.AD = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.tj;
        a.K = !1;
        return a
    };
    g.h.isActive = function() {
        return !!this.Yf && this.Yf.isActive(this)
    };
    g.h.Wj = function(a) {
        var b = u7;
        b.dispatchEvent(new C1a(b, a))
    };
    g.h.Ev = function() {
        return !(!g.Mc || g.Ec(10))
    };
    g.h = N1a.prototype;
    g.h.pK = function() {};
    g.h.oK = function() {};
    g.h.nK = function() {};
    g.h.ED = function() {};
    g.h.qK = function() {
        return {}
    };
    g.h.isActive = function() {
        return !0
    };
    g.h = O1a.prototype;
    g.h.enqueue = function(a) {
        this.u.push(a)
    };
    g.h.isEmpty = function() {
        return 0 === this.j.length && 0 === this.u.length
    };
    g.h.clear = function() {
        this.j = [];
        this.u = []
    };
    g.h.contains = function(a) {
        return g.bc(this.j, a) || g.bc(this.u, a)
    };
    g.h.remove = function(a) {
        var b = this.j;
        var c = (0, g.GRa)(b, a);
        0 <= c ? (g.ec(b, c), b = !0) : b = !1;
        return b || g.fc(this.u, a)
    };
    g.h.Mi = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    P1a.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.Q("enable_client_streamz_web")) {
            a = g.r(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.pca(c.value), c = {
                serializedIncrementBatch: g.Hc(g.af(c, R_a))
            }, g.xs("streamzIncremented", c, {
                OH: b
            })
        }
    };
    var Q7;
    g.v(R7, g.Cf);
    g.v(S7, g.Cf);
    g.Va(T7, g.G);
    g.h = T7.prototype;
    g.h.SY = function() {
        this.hg = Math.min(3E5, 2 * this.hg);
        this.B();
        this.u && this.start()
    };
    g.h.start = function() {
        var a = this.hg + 15E3 * Math.random();
        g.op(this.j, a);
        this.u = Date.now() + a
    };
    g.h.stop = function() {
        this.j.stop();
        this.u = 0
    };
    g.h.isActive = function() {
        return this.j.isActive()
    };
    g.h.reset = function() {
        this.j.stop();
        this.hg = 5E3
    };
    g.Va(U7, N1a);
    g.h = U7.prototype;
    g.h.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.h.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.h.Mf = function(a) {
        return this.B.Mf(a)
    };
    g.h.ea = function(a, b) {
        return this.B.ea.apply(this.B, arguments)
    };
    g.h.dispose = function() {
        this.Z || (this.Z = !0, g.zf(this.B), this.disconnect(), g.zf(this.u), this.u = null, this.ma = function() {
            return ""
        })
    };
    g.h.isDisposed = function() {
        return this.Z
    };
    g.h.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.X = "";
            this.u.stop();
            this.J = a || null;
            this.D = b || 0;
            a = this.ra + "/test";
            b = this.ra + "/bind";
            var d = new J7(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.xa),
                e = this.j;
            e && (e.Yf = null);
            d.Yf = this;
            this.j = d;
            V7(this);
            if (this.j) {
                d = g.P("ID_TOKEN");
                var f = this.j.Gk || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Gk = f
            }
            e ? (3 != e.getState() && 0 == G1a(e) || e.getState(), this.j.connect(a, b, this.K, e.C, e.Ds)) : c ? this.j.connect(a,
                b, this.K, c.sessionId, c.arrayId) : this.j.connect(a, b, this.K)
        }
    };
    g.h.disconnect = function(a) {
        this.N = a || 0;
        this.u.stop();
        V7(this);
        this.j && (3 == this.j.getState() && I1a(this.j), this.j.disconnect());
        this.N = 0
    };
    g.h.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.jg(a, b);
        this.u.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.C.push(a) : this.Dt() && (V7(this), F1a(this.j, a))
    };
    g.h.pK = function() {
        this.u.reset();
        this.J = null;
        this.D = 0;
        if (this.C.length) {
            var a = this.C;
            this.C = [];
            for (var b = 0, c = a.length; b < c; ++b) F1a(this.j, a[b])
        }
        this.ea("handlerOpened")
    };
    g.h.nK = function(a) {
        var b = 2 == a && 401 == this.j.Hk;
        4 == a || b || this.u.start();
        this.ea("handlerError", a, b)
    };
    g.h.ED = function(a, b) {
        if (!this.u.isActive()) this.ea("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.C.push(e)
            }
        this.va.j.sJ("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels");
        a && this.Ha.j.eD("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.Ia.j.eD("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.h.qK = function() {
        var a = {
            v: 2
        };
        this.X && (a.gsessionid = this.X);
        0 != this.D && (a.ui = "" + this.D);
        0 != this.N && (a.ui = "" + this.N);
        this.J && g.jg(a, this.J);
        return a
    };
    g.h.oK = function(a) {
        "S" == a[0] ? this.X = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), this.j.disconnect()) : this.ea("handlerMessage", new Q1a(a[0], a[1]))
    };
    g.h.Dt = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.h.fn = function(a) {
        (this.K.loungeIdToken = a) || this.u.stop();
        if (this.Da && this.j) {
            var b = this.j.Gk || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Gk = b
        }
    };
    g.h.po = function() {
        return this.K.id
    };
    g.h.Bo = function() {
        return this.u.isActive() ? this.u.u - Date.now() : NaN
    };
    g.h.rr = function() {
        var a = this.u;
        g.pp(a.j);
        a.start()
    };
    g.h.NZ = function() {
        this.u.isActive();
        0 == G1a(this.j) && this.connect(this.J, this.D)
    };
    W7.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    W7.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    W7.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    g.v(Z7, g.Fg);
    g.h = Z7.prototype;
    g.h.connect = function(a, b, c) {
        this.Lc.connect(a, b, c)
    };
    g.h.disconnect = function(a) {
        this.Lc.disconnect(a)
    };
    g.h.rr = function() {
        this.Lc.rr()
    };
    g.h.po = function() {
        return this.Lc.po()
    };
    g.h.Bo = function() {
        return this.Lc.Bo()
    };
    g.h.Dt = function() {
        return this.Lc.Dt()
    };
    g.h.qR = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Lc,
            b = this.j;
        g.$v("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.CC,
            sessionId: a.j.C,
            arrayId: a.j.Ds
        });
        g.$v("yt-remote-session-screen-id", b);
        a = z6();
        b = B6();
        g.bc(a, b) || a.push(b);
        i0a(a);
        C6()
    };
    g.h.oR = function() {
        this.dispatchEvent("channelClosed")
    };
    g.h.pR = function(a) {
        this.dispatchEvent(new R7(a))
    };
    g.h.onError = function(a) {
        this.dispatchEvent(new S7(a ? 1 : 0))
    };
    g.h.sendMessage = function(a, b) {
        this.Lc.sendMessage(a, b)
    };
    g.h.fn = function(a) {
        this.Lc.fn(a)
    };
    g.h.dispose = function() {
        this.Lc.dispose()
    };
    g.h = R1a.prototype;
    g.h.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.J && (this.B.stop(), this.N = a, this.K = b, $7(this), (a = g.P("ID_TOKEN")) ? this.C["x-youtube-identity-token"] = a : delete this.C["x-youtube-identity-token"], this.j && (this.u.device = this.j.device, this.u.name = this.j.name, this.u.app = this.j.app, this.u.id = this.j.id, this.j.TV && (this.u.mdxVersion = "" + this.j.TV), this.j.theme && (this.u.theme = this.j.theme), this.j.capabilities && (this.u.capabilities = this.j.capabilities)), 0 !== this.K ? this.u.ui = "" + this.K : delete this.u.ui,
            Object.assign(this.u, this.N), this.channel = new s7(this.pathPrefix, {
                qV: "gsessionid",
                WV: this.C,
                XV: this.u
            }), this.channel.open(), this.J = 2, S1a(this))
    };
    g.h.disconnect = function(a) {
        this.X = void 0 === a ? 0 : a;
        this.B.stop();
        $7(this);
        this.channel && (0 !== this.X ? this.u.ui = "" + this.X : delete this.u.ui, this.channel.close());
        this.X = 0
    };
    g.h.Bo = function() {
        return this.B.isActive() ? this.B.u - Date.now() : NaN
    };
    g.h.rr = function() {
        var a = this.B;
        g.pp(a.j);
        a.start()
    };
    g.h.sendMessage = function(a, b) {
        this.channel && ($7(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.h.fn = function(a) {
        a || this.B.stop();
        a ? this.C["X-YouTube-LoungeId-Token"] = a : delete this.C["X-YouTube-LoungeId-Token"]
    };
    g.h.po = function() {
        return this.j ? this.j.id : ""
    };
    g.h.ea = function(a) {
        return this.D.ea.apply(this.D, [a].concat(g.u(g.Da.apply(1, arguments))))
    };
    g.h.subscribe = function(a, b, c) {
        return this.D.subscribe(a, b, c)
    };
    g.h.unsubscribe = function(a, b, c) {
        return this.D.unsubscribe(a, b, c)
    };
    g.h.Mf = function(a) {
        return this.D.Mf(a)
    };
    g.h.dispose = function() {
        this.Z || (this.Z = !0, g.zf(this.D), this.disconnect(), g.zf(this.B), this.va = function() {
            return ""
        })
    };
    g.h.isDisposed = function() {
        return this.Z
    };
    g.v(a8, g.Fg);
    g.h = a8.prototype;
    g.h.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.h.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.h.rr = function() {
        this.j.rr()
    };
    g.h.po = function() {
        return this.j.po()
    };
    g.h.Bo = function() {
        return this.j.Bo()
    };
    g.h.Dt = function() {
        return 3 === this.j.J
    };
    g.h.tR = function() {
        this.dispatchEvent("channelOpened")
    };
    g.h.rR = function() {
        this.dispatchEvent("channelClosed")
    };
    g.h.sR = function(a) {
        this.dispatchEvent(new R7(a))
    };
    g.h.onError = function() {
        this.dispatchEvent(new S7(401 === this.j.ma ? 1 : 0))
    };
    g.h.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.h.fn = function(a) {
        this.j.fn(a)
    };
    g.h.dispose = function() {
        this.j.dispose()
    };
    var $1a = Date.now(),
        b8 = null,
        e8 = Array(50),
        d8 = -1,
        f8 = !1;
    g.Va(g8, g.cv);
    g8.prototype.Mh = function() {
        return this.screens
    };
    g8.prototype.contains = function(a) {
        return !!x6(this.screens, a)
    };
    g8.prototype.get = function(a) {
        return a ? y6(this.screens, a) : null
    };
    g8.prototype.info = function(a) {
        c8(this.J, a)
    };
    g.v(h8, g.cv);
    g.h = h8.prototype;
    g.h.start = function() {
        !this.j && isNaN(this.Rb) && this.dP()
    };
    g.h.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.Rb) || (g.tr(this.Rb), this.Rb = NaN)
    };
    g.h.qa = function() {
        this.stop();
        g.cv.prototype.qa.call(this)
    };
    g.h.dP = function() {
        this.Rb = NaN;
        this.j = g.Ar(X7(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.K
            },
            timeout: 5E3,
            onSuccess: (0, g.Sa)(this.vR, this),
            onError: (0, g.Sa)(this.uR, this),
            onTimeout: (0, g.Sa)(this.wR, this)
        })
    };
    g.h.vR = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.J;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.ea("pairingComplete", new s6(a), b)
    };
    g.h.uR = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.u >= w3a.length ? this.ea("pairingFailed", Error("DIAL polling timed out")) : (a = w3a[this.u], this.Rb = g.rr((0, g.Sa)(this.dP, this), a), this.u++) : this.ea("pairingFailed", Error("Server error " + a.status))
    };
    g.h.wR = function() {
        this.j = null;
        this.ea("pairingFailed", Error("Server not responding"))
    };
    var w3a = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Va(j8, g8);
    g.h = j8.prototype;
    g.h.start = function() {
        i8(this) && this.ea("screenChange");
        !g.aw("yt-remote-lounge-token-expiration") && d2a(this);
        g.tr(this.j);
        this.j = g.rr((0, g.Sa)(this.start, this), 1E4)
    };
    g.h.add = function(a, b) {
        i8(this);
        a2a(this, a);
        k8(this, !1);
        this.ea("screenChange");
        b(a);
        a.token || d2a(this)
    };
    g.h.remove = function(a, b) {
        var c = i8(this);
        c2a(this, a) && (k8(this, !1), c = !0);
        b(a);
        c && this.ea("screenChange")
    };
    g.h.AC = function(a, b, c, d) {
        var e = i8(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, k8(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.ea("screenChange")
    };
    g.h.qa = function() {
        g.tr(this.j);
        j8.qe.qa.call(this)
    };
    g.h.SU = function(a) {
        i8(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        k8(this, !b);
        b && c8(this.J, "Missed " + b + " lounge tokens.")
    };
    g.h.RU = function(a) {
        c8(this.J, "Requesting lounge tokens failed: " + a)
    };
    g.v(m8, g.cv);
    g.h = m8.prototype;
    g.h.start = function() {
        var a = parseInt(g.aw("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.Ua() - 144E5 < a ? 0 : a) ? p8(this): (this.C = g.Ua() + 3E5, g.$v("yt-remote-fast-check-period", this.C), this.CH())
    };
    g.h.isEmpty = function() {
        return g.bg(this.j)
    };
    g.h.update = function() {
        l8("Updating availability on schedule.");
        var a = this.J(),
            b = g.Nf(this.j, function(c, d) {
                return c && !!y6(a, d)
            }, this);
        o8(this, b)
    };
    g.h.qa = function() {
        g.tr(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.cv.prototype.qa.call(this)
    };
    g.h.CH = function() {
        g.tr(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = f2a(this);
        if (o6(a)) {
            var b = X7(this.D, "/pairing/get_screen_availability");
            this.u = Y7(this.D, b, {
                lounge_token: g.Xf(a).join(",")
            }, (0, g.Sa)(this.xY, this, a), (0, g.Sa)(this.wY, this))
        } else o8(this, {}), p8(this)
    };
    g.h.xY = function(a, b) {
        this.u = null;
        var c = g.Xf(f2a(this));
        if (g.rc(c, g.Xf(a))) {
            b = b.screens || [];
            c = {};
            for (var d = 0, e = b.length; d < e; ++d) c[a[b[d].loungeToken]] = "online" == b[d].status;
            o8(this, c);
            p8(this)
        } else this.Ee("Changing Screen set during request."), this.CH()
    };
    g.h.wY = function(a) {
        this.Ee("Screen availability failed: " + a);
        this.u = null;
        p8(this)
    };
    g.h.Ee = function(a) {
        c8("OnlineScreenService", a)
    };
    g.Va(q8, g8);
    g.h = q8.prototype;
    g.h.start = function() {
        this.u.start();
        this.j.start();
        this.screens.length && (this.ea("screenChange"), this.j.isEmpty() || this.ea("onlineScreenChange"))
    };
    g.h.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.h.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.j.update()
    };
    g.h.AC = function(a, b, c, d) {
        this.u.contains(a) ? this.u.AC(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, c8(this.J, a), d(Error(a)))
    };
    g.h.Mh = function(a) {
        return a ? this.screens : g.hc(this.screens, g.Bn(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.h.iJ = function() {
        return g.Bn(this.Mh(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.h.jJ = function(a, b, c, d, e, f) {
        var k = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new h8(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.zf(l);
            e(r8(k, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.zf(l);
            f(m)
        });
        l.start();
        return (0, g.Sa)(l.stop, l)
    };
    g.h.xR = function(a, b, c, d) {
        g.Ar(X7(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Sa)(function(e, f) {
                e = new s6(f.screen || {});
                if (!e.name || j2a(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var k = 2, l = b(f, k); j2a(this, l);) {
                            k++;
                            if (20 < k) break a;
                            l = b(f, k)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(r8(this, e))
            }, this),
            onError: (0, g.Sa)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Sa)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.h.qa = function() {
        g.zf(this.u);
        g.zf(this.j);
        q8.qe.qa.call(this)
    };
    g.h.bV = function() {
        l2a(this);
        this.ea("screenChange");
        this.j.update()
    };
    q8.prototype.dispose = q8.prototype.dispose;
    g.Va(t8, g.cv);
    g.h = t8.prototype;
    g.h.getScreen = function() {
        return this.C
    };
    g.h.Jg = function(a) {
        this.isDisposed() || (a && (v8(this, "" + a), this.ea("sessionFailed")), this.C = null, this.ea("sessionScreen", null))
    };
    g.h.info = function(a) {
        c8(this.xa, a)
    };
    g.h.kJ = function() {
        return null
    };
    g.h.TH = function(a) {
        var b = this.j;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Sa)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Sa)(function() {
            v8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.h.qa = function() {
        this.TH("");
        t8.qe.qa.call(this)
    };
    g.v(w8, t8);
    g.h = w8.prototype;
    g.h.SH = function(a) {
        if (this.u) {
            if (this.u == a) return;
            v8(this, "Overriding cast session with new session object");
            u2a(this);
            this.ra = !1;
            this.X = "unknown";
            this.u.removeUpdateListener(this.ma);
            this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.va)
        }
        this.u = a;
        this.u.addUpdateListener(this.ma);
        this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.va);
        q2a(this, "getMdxSessionStatus")
    };
    g.h.Mt = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Qi(a))
    };
    g.h.stop = function() {
        this.u ? this.u.stop((0, g.Sa)(function() {
            this.Jg()
        }, this), (0, g.Sa)(function() {
            this.Jg(Error("Failed to stop receiver app."))
        }, this)) : this.Jg(Error("Stopping cast device without session."))
    };
    g.h.TH = function() {};
    g.h.qa = function() {
        this.info("disposeInternal");
        u2a(this);
        this.u && (this.u.removeUpdateListener(this.ma), this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.va));
        this.u = null;
        t8.prototype.qa.call(this)
    };
    g.h.kZ = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = p6(b), g.Pa(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Qi(b)), a) {
                    case "mdxSessionStatus":
                        o2a(this, b);
                        break;
                    case "loungeToken":
                        r2a(this, b);
                        break;
                    default:
                        v8(this, "Unknown youtube message: " + a)
                } else v8(this, "Unable to parse message.");
                else v8(this, "No data in message.")
    };
    g.h.wM = function(a, b, c, d) {
        g.tr(this.N);
        this.N = 0;
        i2a(this.B, this.j.label, a, this.j.friendlyName, (0, g.Sa)(function(e) {
            e ? b(e) : 0 <= d ? (v8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.N = g.rr((0, g.Sa)(this.wM, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.h.kJ = function() {
        return this.u
    };
    g.h.yR = function(a) {
        this.isDisposed() || a || (v8(this, "Cast session died."), this.Jg())
    };
    g.v(z8, t8);
    g.h = z8.prototype;
    g.h.SH = function(a) {
        this.u = a;
        this.u.addUpdateListener(this.Da)
    };
    g.h.Mt = function(a) {
        this.Ha = a;
        this.Z()
    };
    g.h.stop = function() {
        B2a(this);
        this.u ? this.u.stop((0, g.Sa)(this.Jg, this, null), (0, g.Sa)(this.Jg, this, "Failed to stop DIAL device.")) : this.Jg()
    };
    g.h.qa = function() {
        B2a(this);
        this.u && this.u.removeUpdateListener(this.Da);
        this.u = null;
        t8.prototype.qa.call(this)
    };
    g.h.zR = function(a) {
        this.isDisposed() || a || (v8(this, "DIAL session died."), this.D(), this.D = function() {}, this.Jg())
    };
    g.v(D8, t8);
    D8.prototype.stop = function() {
        this.Jg()
    };
    D8.prototype.SH = function() {};
    D8.prototype.Mt = function() {
        g.tr(this.u);
        this.u = NaN;
        var a = y6(this.B.Mh(), this.j.label);
        a ? u8(this, a) : this.Jg(Error("No such screen"))
    };
    D8.prototype.qa = function() {
        g.tr(this.u);
        this.u = NaN;
        t8.prototype.qa.call(this)
    };
    g.v(E8, g.cv);
    g.h = E8.prototype;
    g.h.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.N, [chrome.cast.Capability.AUDIO_OUT]);
        this.X || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.J ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Sa)(this.iY, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Sa)(this.OO, this), e, d, a);
        c.customDialLaunchCallback = (0, g.Sa)(this.cX, this);
        chrome.cast.initialize(c, (0, g.Sa)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), X1a(), this.u.subscribe("onlineScreenChange", (0, g.Sa)(this.lJ, this)), this.B = E2a(this), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Sa)(function(f) {
                this.Ee("Failed to set initial custom receivers: " + g.Qi(f))
            }, this)), this.ea("yt-remote-cast2-availability-change", G8(this)), b(!0))
        }, this), (0, g.Sa)(function(f) {
            this.Ee("Failed to initialize API: " + g.Qi(f));
            b(!1)
        }, this))
    };
    g.h.RZ = function(a, b) {
        F8("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.getScreen();
            if (!a || c && c.id != a) F8("Unsetting old screen status: " + this.j.j.friendlyName), H8(this, null)
        }
        if (a && b) {
            if (!this.j) {
                c = y6(this.u.Mh(), a);
                if (!c) {
                    F8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    F8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = C2a(this, c);
                a || (F8("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Sa)(function(d) {
                    this.Ee("Failed to set initial custom receivers: " + g.Qi(d))
                }, this)));
                F8("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                H8(this, new D8(this.u, a), !0)
            }
            this.j.TH(b)
        } else F8("setConnectedScreenStatus: no screen.")
    };
    g.h.SZ = function(a) {
        this.isDisposed() ? this.Ee("Setting connection data on disposed cast v2") : this.j ? this.j.Mt(a) : this.Ee("Setting connection data without a session")
    };
    g.h.BR = function() {
        this.isDisposed() ? this.Ee("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), H8(this, null)) : F8("Stopping non-existing session")
    };
    g.h.requestSession = function() {
        chrome.cast.requestSession((0, g.Sa)(this.OO, this), (0, g.Sa)(this.AY, this))
    };
    g.h.qa = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.Sa)(this.lJ, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = U1a,
            b = g.Ka("yt.mdx.remote.debug.handlers_");
        g.fc(b || [], a);
        g.zf(this.j);
        g.cv.prototype.qa.call(this)
    };
    g.h.Ee = function(a) {
        c8("Controller", a)
    };
    g.h.QO = function(a, b) {
        this.j == a && (b || H8(this, null), this.ea("yt-remote-cast2-session-change", b))
    };
    g.h.fY = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), F8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.j.label != a.label) F8("onReceiverAction_: Stopping active receiver: " + this.j.j.friendlyName), this.j.stop();
                        else {
                            F8("onReceiverAction_: Casting to active receiver.");
                            this.j.getScreen() && this.ea("yt-remote-cast2-session-change", this.j.getScreen());
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            H8(this,
                                new D8(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            H8(this, new z8(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            H8(this, new w8(this.u, a, this.config_));
                            break;
                        default:
                            this.Ee("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.j.label == a.label ? this.j.stop() : this.Ee("Stopping receiver w/o session: " + a.friendlyName)
            } else this.Ee("onReceiverAction_ called without receiver.")
    };
    g.h.cX = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Ee("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.j : null;
        if (!c || c.label != b.label) return this.Ee("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.getScreen()) return F8("Reselecting dial screen."),
                this.ea("yt-remote-cast2-session-change", this.j.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Ee('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            H8(this, new z8(this.u, b, this.C, this.config_))
        }
        b = this.j;
        b.N = a;
        b.N.appState == chrome.cast.DialAppState.RUNNING ? (a = b.N.extraData || {}, c = a.screenId || null, A8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = y2a(b, {
            name: b.j.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.N.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.br(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = z2a(b, c)) : a = z2a(b, c)) : a = C8(b);
        return a
    };
    g.h.OO = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.J) {
            F8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) F8("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), H8(this, new w8(this.u, c, this.config_), !0);
                    else {
                        this.Ee("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.j,
                    e = y6(this.u.Mh(),
                        d.label);
                e && t6(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (F8("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.zf(this.j), this.j = new w8(this.u, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Sa)(this.QO, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return D2a(b, b.j)
                }), this.j.Mt(null));
                this.j.SH(a)
            }
        }
    };
    g.h.AR = function() {
        return this.j ? this.j.kJ() : null
    };
    g.h.AY = function(a) {
        this.isDisposed() || (this.Ee("Failed to estabilish a session: " + g.Qi(a)), a.code != chrome.cast.ErrorCode.CANCEL && H8(this, null), this.ea("yt-remote-cast2-session-failed"))
    };
    g.h.iY = function(a) {
        F8("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = G8(this);
            this.K = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            G8(this) != b && this.ea("yt-remote-cast2-availability-change", G8(this))
        }
    };
    g.h.lJ = function() {
        this.isDisposed() || (this.B = E2a(this), F8("Updating custom receivers: " + g.Qi(this.B)), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Sa)(function() {
            this.Ee("Failed to set custom receivers.")
        }, this)), this.ea("yt-remote-cast2-availability-change", G8(this)))
    };
    E8.prototype.setLaunchParams = E8.prototype.SZ;
    E8.prototype.setConnectedScreenStatus = E8.prototype.RZ;
    E8.prototype.stopSession = E8.prototype.BR;
    E8.prototype.getCastSession = E8.prototype.AR;
    E8.prototype.requestSession = E8.prototype.requestSession;
    E8.prototype.init = E8.prototype.init;
    E8.prototype.dispose = E8.prototype.dispose;
    var N8 = [];
    g.h = S8.prototype;
    g.h.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        T8(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.vl = a.hasPrevious, this.hasNext = a.hasNext, this.K = a.playerTime, this.J = a.playerTimeAt, this.C = a.seekableStart, this.j = a.seekableEnd, this.D = a.duration, this.N = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.h.Ic = function() {
        return 1 == this.playerState
    };
    g.h.isAdPlaying = function() {
        return 1081 == this.playerState
    };
    g.h.hk = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.h.getDuration = function() {
        return this.u ? this.D + U8(this) : this.D
    };
    g.h.clone = function() {
        return new S8(Y8(this))
    };
    g.v($8, g.cv);
    g.h = $8.prototype;
    g.h.getState = function() {
        return this.B
    };
    g.h.Bo = function() {
        return this.C.getReconnectTimeout()
    };
    g.h.rr = function() {
        this.C.reconnect()
    };
    g.h.play = function() {
        b9(this) ? (this.j ? this.j.play(null, g.Kg, g9(this, "play")) : f9(this, "play"), e9(this, 1, W8(a9(this))), this.ea("remotePlayerChange")) : c9(this, this.play)
    };
    g.h.pause = function() {
        b9(this) ? (this.j ? this.j.pause(null, g.Kg, g9(this, "pause")) : f9(this, "pause"), e9(this, 2, W8(a9(this))), this.ea("remotePlayerChange")) : c9(this, this.pause)
    };
    g.h.seekTo = function(a) {
        if (b9(this)) {
            if (this.j) {
                var b = a9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.Ic() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Kg, g9(this, "seekTo", {
                    newTime: a
                }))
            } else f9(this, "seekTo", {
                newTime: a
            });
            e9(this, 3, a);
            this.ea("remotePlayerChange")
        } else c9(this, g.Ta(this.seekTo, a))
    };
    g.h.stop = function() {
        if (b9(this)) {
            this.j ? this.j.stop(null, g.Kg, g9(this, "stopVideo")) : f9(this, "stopVideo");
            var a = a9(this);
            a.index = -1;
            a.videoId = "";
            T8(a);
            d9(this, a);
            this.ea("remotePlayerChange")
        } else c9(this, this.stop)
    };
    g.h.setVolume = function(a, b) {
        if (b9(this)) {
            var c = a9(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.Sa)(function() {
                        c8("CP", "set receiver volume: " + d)
                    }, this), (0, g.Sa)(function() {
                        this.Ee("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.Sa)(function() {
                    c8("CP", "set receiver muted: " + b)
                }, this), (0, g.Sa)(function() {
                    this.Ee("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                f9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            d9(this, c)
        } else c9(this, g.Ta(this.setVolume, a, b))
    };
    g.h.mJ = function(a, b) {
        if (b9(this)) {
            var c = a9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Qi(b.style), g.jg(a, c.trackData));
            f9(this, "setSubtitlesTrack", a);
            d9(this, c)
        } else c9(this, g.Ta(this.mJ, a, b))
    };
    g.h.setAudioTrack = function(a, b) {
        b9(this) ? (b = b.getLanguageInfo().getId(), f9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = a9(this), a.audioTrackId = b, d9(this, a)) : c9(this, g.Ta(this.setAudioTrack, a, b))
    };
    g.h.playVideo = function(a, b, c, d, e, f, k) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        k = void 0 === k ? null : k;
        var l = a9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        X8(l, a, c || 0);
        void 0 !== b && (V8(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        k && (m.locationInfo = g.Qi(k));
        f9(this, "setPlaylist", m);
        d || d9(this, l)
    };
    g.h.OB = function(a, b) {
        if (b9(this)) {
            if (a && b) {
                var c = a9(this);
                X8(c, a, b);
                d9(this, c)
            }
            f9(this, "previous")
        } else c9(this, g.Ta(this.OB, a, b))
    };
    g.h.nextVideo = function(a, b) {
        if (b9(this)) {
            if (a && b) {
                var c = a9(this);
                X8(c, a, b);
                d9(this, c)
            }
            f9(this, "next")
        } else c9(this, g.Ta(this.nextVideo, a, b))
    };
    g.h.Os = function() {
        if (b9(this)) {
            f9(this, "clearPlaylist");
            var a = a9(this);
            a.reset();
            d9(this, a);
            this.ea("remotePlayerChange")
        } else c9(this, this.Os)
    };
    g.h.RL = function() {
        b9(this) ? f9(this, "dismissAutoplay") : c9(this, this.RL)
    };
    g.h.dispose = function() {
        if (3 != this.B) {
            var a = this.B;
            this.B = 3;
            this.ea("proxyStateChange", a, this.B)
        }
        g.cv.prototype.dispose.call(this)
    };
    g.h.qa = function() {
        Q2a(this);
        this.C = null;
        this.D.clear();
        Z8(this, null);
        g.cv.prototype.qa.call(this)
    };
    g.h.UH = function(a) {
        if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
            var b = this.B;
            this.B = a;
            this.ea("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty();) b = a = this.D, 0 === b.j.length && (b.j = b.u, b.j.reverse(), b.u = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.h.dY = function(a, b) {
        this.ea(a, b)
    };
    g.h.RW = function(a) {
        if (!a) this.Hx(null), Z8(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = a9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c8("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, d9(this, b)
        }
    };
    g.h.Hx = function(a) {
        c8("CP", "Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.N);
        if (this.j = a) this.j.addUpdateListener(this.N), R2a(this), this.ea("remotePlayerChange")
    };
    g.h.QW = function(a) {
        a ? (R2a(this), this.ea("remotePlayerChange")) : this.Hx(null)
    };
    g.h.qI = function() {
        f9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.h.UW = function() {
        var a = N2a();
        a && Z8(this, a)
    };
    g.h.Ee = function(a) {
        c8("CP", a)
    };
    g.v(j9, g.cv);
    g.h = j9.prototype;
    g.h.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                k = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            k && (m.clickTrackingParams = k);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Da && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            V8(this.j,
                n);
            this.D = "UNSUPPORTED";
            c = this.Da ? "setInitialState" : "setPlaylist";
            h9("Connecting with " + c + " and params: " + g.Qi(m));
            this.u.connect({
                method: c,
                params: g.Qi(m)
            }, a, j0a())
        } else h9("Connecting without params"), this.u.connect({}, a, j0a());
        V2a(this)
    };
    g.h.fn = function(a) {
        this.u.fn(a)
    };
    g.h.dispose = function() {
        this.isDisposed() || (g.Ja("yt.mdx.remote.remoteClient_", null, void 0), this.ea("beforeDispose"), i9(this, 3));
        g.cv.prototype.dispose.call(this)
    };
    g.h.qa = function() {
        k9(this);
        m9(this);
        l9(this);
        g.tr(this.N);
        this.N = NaN;
        g.tr(this.X);
        this.X = NaN;
        this.C = null;
        g.ju(this.Z);
        this.Z.length = 0;
        this.u.dispose();
        g.cv.prototype.qa.call(this);
        this.D = this.K = this.B = this.j = this.u = null
    };
    g.h.fN = function(a) {
        if (!this.B || 0 === this.B.length) return !1;
        for (var b = g.r(this.B), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.h.LU = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.Sw()) ? this.u.Dt() && isNaN(this.J) && (a = 1) : a = 2);
        return a
    };
    g.h.Ws = function(a) {
        h9("Disconnecting with " + a);
        g.Ja("yt.mdx.remote.remoteClient_", null, void 0);
        k9(this);
        this.ea("beforeDisconnect", a);
        1 == a && D6();
        this.u.disconnect(a);
        this.dispose()
    };
    g.h.JU = function() {
        var a = this.j;
        this.C && (a = this.j.clone(), X8(a, this.C, a.index));
        return Y8(a)
    };
    g.h.TZ = function(a) {
        var b = this,
            c = new S8(a);
        c.videoId && c.videoId != this.j.videoId && (this.C = c.videoId, g.tr(this.N), this.N = g.rr(function() {
            if (b.C) {
                var e = b.C;
                b.C = null;
                b.j.videoId != e && n9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && W8(this.j) == W8(c) && g.Qi(this.j.trackData) == g.Qi(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.tc(d, function(e) {
            this.ea(e)
        }, this)
    };
    g.h.vM = function() {
        var a = this.u.po(),
            b = g.Zb(this.B, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.h.Sw = function() {
        return this.u.Bo()
    };
    g.h.GU = function() {
        return this.D || "UNSUPPORTED"
    };
    g.h.HU = function() {
        return this.K || ""
    };
    g.h.CR = function() {
        !isNaN(this.Sw()) && this.u.rr()
    };
    g.h.QZ = function(a, b) {
        n9(this, a, b);
        X2a(this)
    };
    g.h.nJ = function() {
        var a = g.Kr("SID", "") || "",
            b = g.Kr("SAPISID", "") || "",
            c = g.Kr("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.Hc(g.gb(a), 2);
        b = g.Hc(g.gb(b), 2);
        c = g.Hc(g.gb(c), 2);
        return g.Hc(g.gb(a + "," + b + "," + c), 2)
    };
    j9.prototype.subscribe = j9.prototype.subscribe;
    j9.prototype.unsubscribeByKey = j9.prototype.Mf;
    j9.prototype.getProxyState = j9.prototype.LU;
    j9.prototype.disconnect = j9.prototype.Ws;
    j9.prototype.getPlayerContextData = j9.prototype.JU;
    j9.prototype.setPlayerContextData = j9.prototype.TZ;
    j9.prototype.getOtherConnectedRemoteId = j9.prototype.vM;
    j9.prototype.getReconnectTimeout = j9.prototype.Sw;
    j9.prototype.getAutoplayMode = j9.prototype.GU;
    j9.prototype.getAutoplayVideoId = j9.prototype.HU;
    j9.prototype.reconnect = j9.prototype.CR;
    j9.prototype.sendMessage = j9.prototype.QZ;
    j9.prototype.getXsrfToken = j9.prototype.nJ;
    j9.prototype.isCapabilitySupportedOnConnectedDevices = j9.prototype.fN;
    g.v(o9, g8);
    g.h = o9.prototype;
    g.h.Mh = function(a) {
        return this.Ze.$_gs(a)
    };
    g.h.contains = function(a) {
        return !!this.Ze.$_c(a)
    };
    g.h.get = function(a) {
        return this.Ze.$_g(a)
    };
    g.h.start = function() {
        this.Ze.$_st()
    };
    g.h.add = function(a, b, c) {
        this.Ze.$_a(a, b, c)
    };
    g.h.remove = function(a, b, c) {
        this.Ze.$_r(a, b, c)
    };
    g.h.AC = function(a, b, c, d) {
        this.Ze.$_un(a, b, c, d)
    };
    g.h.qa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.Ze.$_ubk(this.j[a]);
        this.j.length = 0;
        this.Ze = null;
        g8.prototype.qa.call(this)
    };
    g.h.ER = function() {
        this.ea("screenChange")
    };
    g.h.KX = function() {
        this.ea("onlineScreenChange")
    };
    q8.prototype.$_st = q8.prototype.start;
    q8.prototype.$_gspc = q8.prototype.xR;
    q8.prototype.$_gsppc = q8.prototype.jJ;
    q8.prototype.$_c = q8.prototype.contains;
    q8.prototype.$_g = q8.prototype.get;
    q8.prototype.$_a = q8.prototype.add;
    q8.prototype.$_un = q8.prototype.AC;
    q8.prototype.$_r = q8.prototype.remove;
    q8.prototype.$_gs = q8.prototype.Mh;
    q8.prototype.$_gos = q8.prototype.iJ;
    q8.prototype.$_s = q8.prototype.subscribe;
    q8.prototype.$_ubk = q8.prototype.Mf;
    var B9 = null,
        H9 = !1,
        p9 = null,
        q9 = null,
        G9 = null,
        u9 = [];
    g.v(I9, g.G);
    g.h = I9.prototype;
    g.h.qa = function() {
        g.G.prototype.qa.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.dc;
        a.unsubscribe("proxyStateChange", this.NO, this);
        a.unsubscribe("remotePlayerChange", this.Mx, this);
        a.unsubscribe("remoteQueueChange", this.BB, this);
        a.unsubscribe("previousNextChange", this.KO, this);
        a.unsubscribe("nowAutoplaying", this.EO, this);
        a.unsubscribe("autoplayDismissed", this.hO, this);
        this.dc = this.u = null
    };
    g.h.Nj = function(a) {
        var b = g.Da.apply(1, arguments);
        if (2 != this.dc.B)
            if (J9(this)) {
                var c = a;
                if (!a9(this.dc).isAdPlaying() || "control_seek" !== c) switch (c) {
                    case "control_toggle_play_pause":
                        a9(this.dc).Ic() ? this.dc.pause() : this.dc.play();
                        break;
                    case "control_play":
                        this.dc.play();
                        break;
                    case "control_pause":
                        this.dc.pause();
                        break;
                    case "control_seek":
                        this.K.xD(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        K9(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.I.getCurrentTime();
                    L9(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    L9(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    K9(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.h.OW = function(a) {
        this.N.ZS(a)
    };
    g.h.D_ = function(a) {
        this.Nj("control_subtitles_set_track", g.bg(a) ? null : a)
    };
    g.h.gQ = function() {
        var a = this.I.getOption("captions", "track");
        g.bg(a) || K9(this, a)
    };
    g.h.Pb = function(a) {
        this.u.Pb(a, this.I.getVideoData().lengthSeconds)
    };
    g.h.vX = function() {
        g.bg(this.C) || s3a(this, this.C);
        this.D = !1
    };
    g.h.NO = function(a, b) {
        this.B.stop();
        2 === b && this.ZP()
    };
    g.h.Mx = function() {
        if (J9(this)) {
            this.j.stop();
            var a = a9(this.dc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.u.Ff = 1;
                    break;
                case 1082:
                case 1083:
                    this.u.Ff = 0;
                    break;
                default:
                    this.u.Ff = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Vb(new g.kH(8));
                    this.YP();
                    break;
                case 1085:
                case 3:
                    this.Vb(new g.kH(9));
                    break;
                case 1083:
                case 0:
                    this.Vb(new g.kH(2));
                    this.K.stop();
                    this.Pb(this.I.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Vb(new g.kH(4));
                    break;
                case 2:
                    this.Vb(new g.kH(4));
                    this.Pb(W8(a));
                    break;
                case -1:
                    this.Vb(new g.kH(64));
                    break;
                case -1E3:
                    this.Vb(new g.kH(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        RE: 2
                    }))
            }
            a = a9(this.dc).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, s3a(this, a));
            a = a9(this.dc); - 1 === a.volume || Math.round(this.I.getVolume()) === a.volume && this.I.isMuted() === a.muted || this.X.isActive() || this.GQ()
        } else r3a(this)
    };
    g.h.KO = function() {
        this.I.ea("mdxpreviousnextchange")
    };
    g.h.BB = function() {
        J9(this) || r3a(this)
    };
    g.h.EO = function(a) {
        isNaN(a) || this.I.ea("mdxnowautoplaying", a)
    };
    g.h.hO = function() {
        this.I.ea("mdxautoplaycanceled")
    };
    g.h.setAudioTrack = function(a) {
        J9(this) && this.dc.setAudioTrack(this.I.getVideoData(1).videoId, a)
    };
    g.h.seekTo = function(a, b) {
        -1 === a9(this.dc).playerState ? L9(this, a) : b && this.dc.seekTo(a)
    };
    g.h.GQ = function() {
        var a = this;
        if (J9(this)) {
            var b = a9(this.dc);
            this.events.vc(this.Z);
            b.muted ? this.I.mute() : this.I.unMute();
            this.I.setVolume(b.volume);
            this.Z = this.events.T(this.I, "onVolumeChange", function(c) {
                q3a(a, c)
            })
        }
    };
    g.h.YP = function() {
        this.j.stop();
        if (!this.dc.isDisposed()) {
            var a = a9(this.dc);
            a.Ic() && this.Vb(new g.kH(8));
            this.Pb(W8(a));
            this.j.start()
        }
    };
    g.h.ZP = function() {
        this.B.stop();
        this.j.stop();
        var a = this.dc.Bo();
        2 == this.dc.B && !isNaN(a) && this.B.start()
    };
    g.h.Vb = function(a) {
        this.B.stop();
        var b = this.J;
        if (!g.pH(b, a)) {
            var c = g.V(a, 2);
            c !== g.V(this.J, 2) && this.I.Au(c);
            this.J = a;
            u3a(this.u, b, a)
        }
    };
    g.v(M9, g.W);
    M9.prototype.od = function() {
        this.j.show()
    };
    M9.prototype.Db = function() {
        this.j.hide()
    };
    M9.prototype.u = function() {
        q6("mdx-privacy-popup-cancel");
        this.Db()
    };
    M9.prototype.B = function() {
        q6("mdx-privacy-popup-confirm");
        this.Db()
    };
    g.v(N9, g.W);
    N9.prototype.onStateChange = function(a) {
        t3a(this, a.state)
    };
    g.v(O9, g.rO);
    O9.prototype.D = function() {
        var a = this.I.getOption("remote", "receivers");
        a && 1 < a.length && !this.I.getOption("remote", "quickCast") ? (this.jp = g.uc(a, this.j, this), g.sO(this, g.Kl(a, this.j)), a = this.I.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.zi(a), this.enable(!0)) : this.enable(!1)
    };
    O9.prototype.j = function(a) {
        return a.key
    };
    O9.prototype.Dj = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.jp[a].name
    };
    O9.prototype.Nf = function(a) {
        g.rO.prototype.Nf.call(this, a);
        this.I.setOption("remote", "currentReceiver", this.jp[a]);
        this.rb.Db()
    };
    g.v(P9, g.jL);
    g.h = P9.prototype;
    g.h.create = function() {
        var a = this.player.V(),
            b = g.qC(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.S("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.S("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.S("enable_cast_short_lived_lounge_token")
        };
        l3a(b, a);
        this.subscriptions.push(g.Cu("yt-remote-before-disconnect", this.MW, this));
        this.subscriptions.push(g.Cu("yt-remote-connection-change", this.jY, this));
        this.subscriptions.push(g.Cu("yt-remote-receiver-availability-change", this.MO,
            this));
        this.subscriptions.push(g.Cu("yt-remote-auto-connect", this.hY, this));
        this.subscriptions.push(g.Cu("yt-remote-receiver-resumed", this.gY, this));
        this.subscriptions.push(g.Cu("mdx-privacy-popup-confirm", this.wZ, this));
        this.subscriptions.push(g.Cu("mdx-privacy-popup-cancel", this.vZ, this));
        this.MO()
    };
    g.h.load = function() {
        this.player.cancelPlayback();
        g.jL.prototype.load.call(this);
        this.Ci = new I9(this, this.player, this.dc);
        var a = (a = p3a()) ? a.currentTime : 0;
        var b = F9() ? new $8(z9(), void 0) : null;
        0 == a && b && (a = W8(a9(b)));
        0 !== a && this.Pb(a);
        u3a(this, this.Ld, this.Ld);
        this.player.Kl(6)
    };
    g.h.unload = function() {
        this.player.ea("mdxautoplaycanceled");
        this.Qn = this.Bl;
        g.Af(this.Ci, this.dc);
        this.dc = this.Ci = null;
        g.jL.prototype.unload.call(this);
        this.player.Kl(5);
        Q9(this)
    };
    g.h.qa = function() {
        g.Du(this.subscriptions);
        g.jL.prototype.qa.call(this)
    };
    g.h.Dl = function(a) {
        var b = g.Da.apply(1, arguments);
        this.loaded && this.Ci.Nj.apply(this.Ci, [a].concat(g.u(b)))
    };
    g.h.getAdState = function() {
        return this.Ff
    };
    g.h.vl = function() {
        return this.dc ? a9(this.dc).vl : !1
    };
    g.h.hasNext = function() {
        return this.dc ? a9(this.dc).hasNext : !1
    };
    g.h.Pb = function(a, b) {
        this.tN = a || 0;
        this.player.ea("progresssync", a, b);
        this.player.Na("onVideoProgress", a || 0)
    };
    g.h.getCurrentTime = function() {
        return this.tN
    };
    g.h.getProgressState = function() {
        var a = a9(this.dc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: this.player.V().S("web_player_mdx_allow_seeking_change_killswitch") ? this.player.rf() : !a.isAdPlaying() && this.player.rf(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + U8(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.j + U8(a) : a.j) - this.getCurrentTime(),
            loaded: a.N,
            seekableEnd: a.u ? a.j + U8(a) : a.j,
            seekableStart: 0 <
                a.C ? a.C + U8(a) : a.C
        }
    };
    g.h.nextVideo = function() {
        this.dc && this.dc.nextVideo()
    };
    g.h.OB = function() {
        this.dc && this.dc.OB()
    };
    g.h.MW = function(a) {
        1 === a && (this.nH = this.dc ? a9(this.dc) : null)
    };
    g.h.jY = function() {
        var a = F9() ? new $8(z9(), void 0) : null;
        if (a) {
            var b = this.Qn;
            this.loaded && this.unload();
            this.dc = a;
            this.nH = null;
            b.key !== this.Bl.key && (this.Qn = b, this.load())
        } else g.zf(this.dc), this.dc = null, this.loaded && (this.unload(), (a = this.nH) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, W8(a)));
        this.player.ea("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.h.MO = function() {
        var a = [this.Bl],
            b = a.concat,
            c = m3a();
        O8() && g.aw("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.jp = b.call(a, c);
        a = A9() || this.Bl;
        R9(this, a);
        this.player.Na("onMdxReceiversChange")
    };
    g.h.hY = function() {
        var a = A9();
        R9(this, a)
    };
    g.h.gY = function() {
        this.Qn = A9()
    };
    g.h.wZ = function() {
        this.Ux = !0;
        Q9(this);
        H9 = !1;
        B9 && D9(B9, 1);
        B9 = null
    };
    g.h.vZ = function() {
        this.Ux = !1;
        Q9(this);
        R9(this, this.Bl);
        this.Qn = this.Bl;
        H9 = !1;
        B9 = null;
        this.player.playVideo()
    };
    g.h.xf = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.jp;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? Q8() : R9(this, b)), this.loaded ? this.Qn : this.Bl;
            case "quickCast":
                return 2 === this.jp.length && "cast-selector-receiver" === this.jp[1].key ? (b && Q8(), !0) : !1
        }
    };
    g.h.qI = function() {
        this.dc.qI()
    };
    g.h.Zh = function() {
        return !1
    };
    g.h.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.iL("remote", P9);
})(_yt_player);