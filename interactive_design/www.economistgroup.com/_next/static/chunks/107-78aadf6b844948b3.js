"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [107], {
        2941: function(e, n, t) {
            var a = t(4954),
                r = t(5893);
            n.Z = function(e) {
                var n = e.src,
                    t = e.title,
                    i = e.alt,
                    l = e.caption,
                    o = e.type;
                return n ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: o,
                        children: (0, r.jsx)("img", {
                            src: n,
                            title: t,
                            alt: i || "Image"
                        })
                    }), l && (0, r.jsx)("div", {
                        className: "responsive-image-caption",
                        children: (0, r.jsx)(a.Z, {
                            document: l
                        })
                    })]
                }) : ""
            }
        },
        4954: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return h
                }
            });
            var a = t(2809),
                r = t(37),
                i = t(865),
                l = t(4129),
                o = t(2941),
                c = t(6100),
                s = t(1879),
                u = t(7969),
                d = t(7294),
                m = function(e) {
                    try {
                        return e.hostname.replace("www.", "")
                    } catch (n) {
                        return console.error(n), ""
                    }
                },
                v = t(5893);

            function p(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function f(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? p(Object(t), !0).forEach((function(n) {
                        (0, a.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var h = function(e) {
                var n, t = e.document,
                    p = t.json,
                    h = t.links,
                    g = function(e) {
                        return e.data.target.sys.id
                    },
                    b = function(e, n) {
                        return h.entries[n].filter((function(n) {
                            return n.sys.id === e
                        }))[0]
                    },
                    j = {
                        renderText: function(e) {
                            return e.split("\n").reduce((function(e, n, t) {
                                return [].concat((0, r.Z)(e), [t > 0 && (0, v.jsx)("br", {}, t), n])
                            }), [])
                        },
                        renderNode: (n = {}, (0, a.Z)(n, i.Ev.HYPERLINK, (function(e, n) {
                            var t, a, r = e.data.uri,
                                i = null !== (t = e.data.uri) && void 0 !== t && t.includes("http") ? e.data.uri : "http://" + e.data.uri,
                                l = null !== (a = "https://economistgroup.com/") && a.includes("http") ? "https://economistgroup.com/" : "http://https://economistgroup.com/",
                                o = m(new URL(l)) !== m(new URL(i));
                            return (0, v.jsx)(u.Z, {
                                url: r,
                                external: o,
                                children: n
                            })
                        })), (0, a.Z)(n, i.Ev.ENTRY_HYPERLINK, (function(e, n) {
                            var t = g(e),
                                a = b(t, "hyperlink");
                            return (0, v.jsx)(u.Z, {
                                url: a.permalink,
                                children: n
                            })
                        })), (0, a.Z)(n, i.RG.EMBEDDED_ASSET, (function(e, n) {
                            var t = function(e) {
                                return h.assets.block.filter((function(n) {
                                    return n.sys.id === e
                                }))[0]
                            }(g(e));
                            return (0, v.jsx)("div", {
                                className: "rt-module__media",
                                children: (0, v.jsx)(o.Z, {
                                    src: t.url,
                                    title: t.title,
                                    alt: t.description
                                })
                            })
                        })), (0, a.Z)(n, i.RG.EMBEDDED_ENTRY, (function(e, n) {
                            var t = g(e),
                                a = b(t, "block"),
                                r = a.__typename;
                            return r ? "ComponentYoutubeVideo" === r ? (0, v.jsx)("div", {
                                className: "rt-module__media",
                                children: (0, v.jsx)(c.Z, f({}, a))
                            }) : "ComponentCtaButton" === r && (0, v.jsx)("div", {
                                className: "rt-module__cta-list",
                                children: (0, v.jsx)(s.d, f({}, a))
                            }) : null
                        })), (0, a.Z)(n, i.RG.UL_LIST, (function(e, n) {
                            return (0, v.jsx)("ul", {
                                children: n
                            })
                        })), (0, a.Z)(n, i.RG.OL_LIST, (function(e, n) {
                            return (0, v.jsx)("ol", {
                                children: n
                            })
                        })), n)
                    };
                return (0, v.jsx)(d.Fragment, {
                    children: (0, l.h)(p, j)
                })
            }
        },
        1555: function(e, n, t) {
            var a = t(5893);
            n.Z = function(e) {
                var n = e.options,
                    t = e.label,
                    r = e.value;
                return (0, a.jsxs)("div", {
                    className: "select",
                    children: [t && (0, a.jsx)("label", {
                        htmlFor: "select",
                        children: t
                    }), (0, a.jsx)("select", {
                        id: "select",
                        value: r,
                        onChange: function(n) {
                            e.onChange && e.onChange(n)
                        },
                        children: Array.isArray(n) ? n.map((function(e, n) {
                            return (0, a.jsx)("option", {
                                value: e.value,
                                children: e.name
                            }, n)
                        })) : (console.warn("options were not provided for select"), null)
                    })]
                })
            }
        },
        6949: function(e, n, t) {
            var a = t(7294),
                r = t(1664),
                i = t(5893);
            n.Z = function(e) {
                var n = e.attr,
                    t = e.url,
                    l = e.isDownload,
                    o = e.isExternal;
                return t ? (0, i.jsx)(r.default, {
                    href: t,
                    children: (0, i.jsx)("a", {
                        className: "clickable-area",
                        href: t,
                        "aria-label": n,
                        target: o ? "_blank" : null,
                        download: l,
                        rel: o ? "noopener" : null,
                        children: e.children
                    })
                }) : (0, i.jsx)(a.Fragment, {
                    children: e.children
                })
            }
        },
        5107: function(e, n, t) {
            t.r(n), t.d(n, {
                TemplateDetail: function() {
                    return $n
                },
                TemplateHomepage: function() {
                    return vn
                },
                TemplateLanding: function() {
                    return xn
                },
                TemplateListing: function() {
                    return Nn
                },
                default: function() {
                    return et
                }
            });
            var a = {};
            t.r(a), t.d(a, {
                BlockAccordion: function() {
                    return pe
                },
                BlockCards: function() {
                    return ve
                },
                BlockCarousel: function() {
                    return v
                },
                BlockCarouselTimeline: function() {
                    return h
                },
                BlockCta: function() {
                    return j
                },
                BlockCtaList: function() {
                    return y
                },
                BlockCustom: function() {
                    return Q
                },
                BlockEditorial: function() {
                    return Ie
                },
                BlockFeaturedLink: function() {
                    return Be
                },
                BlockImageGrid: function() {
                    return Oe
                },
                BlockLeadership: function() {
                    return He
                },
                BlockMedia: function() {
                    return ge
                },
                BlockNews: function() {
                    return Me
                },
                BlockPeople: function() {
                    return _e
                },
                BlockQuote: function() {
                    return Se
                },
                BlockStats: function() {
                    return ee
                },
                BlockTable: function() {
                    return f
                },
                BlockText: function() {
                    return re
                },
                BlockTextMulti: function() {
                    return ie
                },
                BlockTextOffset: function() {
                    return X
                },
                BlockVideoCards: function() {
                    return on
                }
            });
            var r = {};
            t.r(r), t.d(r, {
                NewsListing: function() {
                    return kn
                }
            });
            var i = t(2809),
                l = t(5152),
                o = function(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return e.sort((function(e, t) {
                        return n ? Date.parse(e.publicationDate) - Date.parse(t.publicationDate) : Date.parse(t.publicationDate) - Date.parse(e.publicationDate)
                    }))
                },
                c = t(9131),
                s = t(754),
                u = t(4613),
                d = t(1896),
                m = t(5893),
                v = function(e) {
                    var n = e.data,
                        a = n.display,
                        r = n.carouselItemsCollection,
                        i = n.background,
                        o = n.bgColor,
                        c = n.title,
                        s = !1;
                    i && (s = !0);
                    var u = (0, l.default)((function() {
                            return "Hero" === a ? Promise.all([t.e(822), t.e(793)]).then(t.bind(t, 5793)) : "Card" === a ? Promise.all([t.e(822), t.e(192)]).then(t.bind(t, 7192)) : "Card (simple)" === a ? Promise.all([t.e(822), t.e(132)]).then(t.bind(t, 6132)) : Promise.all([t.e(822), t.e(192)]).then(t.bind(t, 7192))
                        }), {
                            ssr: !1,
                            loadableGenerated: {
                                webpack: function() {
                                    return [5793, 7192, 6132, 7192]
                                },
                                modules: ["../components/blocks/BlockCarousel.js -> @/components/ui/Carousel/HeroCarousel", "../components/blocks/BlockCarousel.js -> @/components/ui/Carousel/CardCarousel", "../components/blocks/BlockCarousel.js -> @/components/ui/Carousel/SimpleCardCarousel", "../components/blocks/BlockCarousel.js -> @/components/ui/Carousel/CardCarousel"]
                            }
                        }),
                        v = "carousel";
                    return "Card" === a && (v = "carousel-blocks"), "Hero" === a && (v = "carousel-hero"), (0, m.jsx)(d.Z, {
                        blockType: v,
                        isFullWidth: !0,
                        children: (0, m.jsx)(u, {
                            title: c,
                            items: r.items,
                            hasBackground: s,
                            backgroundColor: o
                        })
                    })
                },
                p = t(7441),
                f = function(e) {
                    var n = e.data.table;
                    return (0, m.jsx)(d.Z, {
                        blockType: "table",
                        align: "left",
                        isContainer: !0,
                        children: (0, m.jsx)("div", {
                            className: "block-table",
                            children: (0, m.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: p.TU.parse(n)
                                }
                            })
                        })
                    })
                },
                h = function(e) {
                    var n = e.data.carouselItemsCollection,
                        a = (0, l.default)((function() {
                            return Promise.all([t.e(822), t.e(72)]).then(t.bind(t, 8072))
                        }), {
                            ssr: !1,
                            loadableGenerated: {
                                webpack: function() {
                                    return [8072]
                                },
                                modules: ["../components/blocks/BlockCarouselTimeline.js -> @/components/ui/Carousel/TimelineCarousel"]
                            }
                        });
                    return (0, m.jsx)(d.Z, {
                        blockType: "timeline",
                        isFullWidth: !0,
                        children: (0, m.jsx)(a, {
                            items: n.items
                        })
                    })
                },
                g = t(4372),
                b = function(e) {
                    var n = e.title,
                        t = e.headline,
                        a = e.subheadline,
                        r = e.ctaItemsCollection;
                    return (0, m.jsx)("div", {
                        className: "callout",
                        children: (0, m.jsxs)("div", {
                            className: "container",
                            children: [(0, m.jsx)("div", {
                                className: "callout__header",
                                children: (0, m.jsx)("h3", {
                                    className: "callout__title",
                                    children: n
                                })
                            }), (0, m.jsxs)("div", {
                                className: "callout__content",
                                children: [(0, c.Z)("\n            <h4 class='callout__headline'>".concat(t, "</h4>\n          ")), (0, c.Z)("\n            <p class='callout__subheadline'>".concat(a, "</p>\n          ")), (0, m.jsx)("div", {
                                    className: "callout__button-list",
                                    children: (0, m.jsx)(g.Z, {
                                        list: r
                                    })
                                })]
                            })]
                        })
                    })
                },
                j = function(e) {
                    var n = e.data,
                        t = n.title,
                        a = n.headline,
                        r = n.subheadline,
                        i = n.ctaItemsCollection;
                    return (0, m.jsx)(d.Z, {
                        blockType: "cta",
                        children: (0, m.jsx)(b, {
                            title: t,
                            headline: a,
                            subheadline: r,
                            ctaItemsCollection: i
                        })
                    })
                },
                y = function(e) {
                    var n = e.data,
                        t = n.ctaItemsCollection,
                        a = n.inverse;
                    return (0, m.jsx)(d.Z, {
                        blockType: "cta-list",
                        align: "left",
                        inverse: a,
                        isContainer: !0,
                        children: (0, m.jsx)(g.Z, {
                            list: t
                        })
                    })
                },
                x = t(3e3),
                O = t(580);

            function w(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function k(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? w(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var C = function(e) {
                    var n = e.items,
                        t = e.orientation,
                        a = e.type,
                        r = ["card-list"];
                    return a && r.push("card-list--".concat(a)), (0, m.jsx)("div", {
                        className: r.join(" "),
                        children: n.map((function(e, n) {
                            var r = e.card ? e.card : e;
                            return (0, m.jsxs)(m.Fragment, {
                                children: [(0, m.jsx)("div", {
                                    className: "card-list__card",
                                    children: (0, m.jsx)(O.Z, k(k({}, r), {}, {
                                        orientation: t,
                                        type: a || "list"
                                    }))
                                }, n), (0, m.jsx)("div", {
                                    className: "card-list__space"
                                })]
                            })
                        }))
                    })
                },
                P = function(e) {
                    return e && {
                        label: "Download",
                        download: e
                    }
                },
                S = function(e) {
                    var n = Object.keys(e).sort().reverse();
                    return {
                        tabTitles: n,
                        tabData: n.map((function(n) {
                            var t = e[n][0],
                                a = [];
                            return t.annualReportFile && a.push({
                                cardHeadline: "".concat(t.year, " Annual Report"),
                                description: t.annualReportDescription,
                                cta: P(t.annualReportFile)
                            }), t.interimReportFile && a.push({
                                cardHeadline: "".concat(t.year, " Interim Report"),
                                description: t.interimReportDescription,
                                cta: P(t.interimReportFile)
                            }), a
                        }))
                    }
                },
                _ = function(e) {
                    var n = S(e),
                        t = n.tabTitles,
                        a = n.tabData;
                    return (0, m.jsx)(x.Z, {
                        tabs: t,
                        select: !0,
                        label: "Select a year",
                        children: a.map((function(e, n) {
                            return (0, m.jsx)(C, {
                                items: e,
                                type: "compact"
                            }, n)
                        }))
                    })
                },
                N = t(9669),
                E = t.n(N),
                T = t(1257),
                D = function(e) {
                    var n = e.label,
                        t = e.name;
                    return (0, m.jsxs)("div", {
                        className: "form__item",
                        children: [n && (0, m.jsx)("label", {
                            htmlFor: t,
                            children: n
                        }), e.children]
                    })
                },
                Z = function(e) {
                    var n = e.name,
                        t = e.maxLength,
                        a = e.size,
                        r = e.label,
                        i = e.value,
                        l = e.handleChange,
                        o = e.handleBlur;
                    return (0, m.jsx)(D, {
                        label: r,
                        name: n,
                        children: (0, m.jsx)("input", {
                            onChange: l,
                            onBlur: o,
                            value: i,
                            name: n,
                            id: n,
                            maxLength: t || "40",
                            size: a || "20",
                            type: "text"
                        })
                    })
                },
                B = function(e) {
                    var n = e.name,
                        t = e.options,
                        a = e.label,
                        r = e.value,
                        i = e.handleChange,
                        l = e.handleBlur;
                    return (0, m.jsx)(D, {
                        label: a,
                        name: n,
                        children: (0, m.jsx)("div", {
                            className: "input-select",
                            children: (0, m.jsx)("select", {
                                id: n,
                                value: r,
                                onBlur: l,
                                onChange: i,
                                children: t.map((function(e, n) {
                                    return (0, m.jsx)("option", {
                                        value: e.value,
                                        children: e.name
                                    }, n)
                                }))
                            })
                        })
                    })
                },
                R = t(4231),
                M = t(2175),
                F = t(7294),
                I = {
                    first_name: "",
                    last_name: "",
                    company: "",
                    email: "",
                    phone: "",
                    country: "",
                    industry: "",
                    "00N30000003dR9o": !1,
                    "00N30000001gspV": "",
                    "00N30000001O01a": "",
                    lead_source: ""
                },
                L = R.Ry({
                    first_name: R.Z_().required("A name is required"),
                    last_name: R.Z_().required("A last name is required"),
                    country: R.Z_().required("Country is Required")
                }),
                A = function(e) {
                    var n = (0, F.useState)(!1),
                        t = n[0],
                        a = n[1],
                        r = (0, F.useState)(!1),
                        i = r[0],
                        l = r[1],
                        o = (0, M.TA)({
                            initialValues: I,
                            validationSchema: L,
                            onSubmit: function(n) {
                                a(!1), e.post("/api/salesForceContact", n).then((function(e) {
                                    l(!0)
                                })).catch((function(e) {
                                    l(!1), a(!0), console.log("error", e)
                                }))
                            }
                        });
                    return {
                        handleChange: o.handleChange,
                        handleSubmit: o.handleSubmit,
                        handleBlur: o.handleBlur,
                        values: o.values,
                        hasError: t,
                        hasSuccess: i,
                        isValid: o.isValid,
                        dirty: o.dirty,
                        successMessage: "Form was successful thank you for submitting",
                        errorMessage: "We're sorry an error has occured please try again"
                    }
                },
                G = function(e) {
                    var n = e.name,
                        t = e.label,
                        a = e.value,
                        r = e.handleChange,
                        i = e.handleBlur;
                    return (0, m.jsx)(D, {
                        children: (0, m.jsxs)("div", {
                            className: "ds-form-checkbox",
                            children: [(0, m.jsx)("input", {
                                checked: a,
                                type: "checkbox",
                                id: n,
                                onChange: r,
                                onBlur: i
                            }), (0, m.jsx)("div", {
                                className: "ds-form-checkbox__box"
                            }), t && (0, m.jsx)("label", {
                                className: "ds-form-check-label",
                                htmlFor: n,
                                children: t
                            })]
                        })
                    })
                },
                H = [{
                    value: "",
                    name: "--None--"
                }, {
                    value: "Accountants, Law Firms",
                    name: "Accountants, Law Firms"
                }, {
                    value: "Advertising",
                    name: "Advertising"
                }, {
                    value: "Aerospace / Defence",
                    name: "Aerospace / Defence"
                }, {
                    value: "Agribusiness",
                    name: "Agribusiness"
                }, {
                    value: "Agriculture - Crop Production",
                    name: "Agriculture - Crop Production"
                }, {
                    value: "Agriculture - Fishing",
                    name: "Agriculture - Fishing"
                }, {
                    value: "Agriculture - Forestry",
                    name: "Agriculture - Forestry"
                }, {
                    value: "Agriculture - Livestock",
                    name: "Agriculture - Livestock"
                }, {
                    value: "Automotive",
                    name: "Automotive"
                }, {
                    value: "Banking, Finance,\xa0Real Estate, Insurance",
                    name: "Banking, Finance,\xa0Real Estate, Insurance"
                }, {
                    value: "Chemicals",
                    name: "Chemicals"
                }, {
                    value: "Communications - ISP",
                    name: "Communications - ISP"
                }, {
                    value: "Communications - Other",
                    name: "Communications - Other"
                }, {
                    value: "Communications - Regulator",
                    name: "Communications - Regulator"
                }, {
                    value: "Communications - Telecoms Operator",
                    name: "Communications - Telecoms Operator"
                }, {
                    value: "Communications - Web Operator",
                    name: "Communications - Web Operator"
                }, {
                    value: "Construction - Domestic",
                    name: "Construction - Domestic"
                }, {
                    value: "Construction - Industrial",
                    name: "Construction - Industrial"
                }, {
                    value: "Construction - Other",
                    name: "Construction - Other"
                }, {
                    value: "Consultants",
                    name: "Consultants"
                }, {
                    value: "Consulting / Professional Services",
                    name: "Consulting / Professional Services"
                }, {
                    value: "Consumer Goods",
                    name: "Consumer Goods"
                }, {
                    value: "Education - Primary",
                    name: "Education - Primary"
                }, {
                    value: "Education - Secondary",
                    name: "Education - Secondary"
                }, {
                    value: "Education - Tertiary",
                    name: "Education - Tertiary"
                }, {
                    value: "Energy, Utilities, Chemical, Mining",
                    name: "Energy, Utilities, Chemical, Mining"
                }, {
                    value: "Energy / Oil &amp; Gas",
                    name: "Energy / Oil &amp; Gas"
                }, {
                    value: "Engineering / Infrastructure / Construction",
                    name: "Engineering / Infrastructure / Construction"
                }, {
                    value: "Entertainment",
                    name: "Entertainment"
                }, {
                    value: "Entertainment, Media, Publishing",
                    name: "Entertainment, Media, Publishing"
                }, {
                    value: "Financial Services / Banking / Insurance",
                    name: "Financial Services / Banking / Insurance"
                }, {
                    value: "Financial Services - Credit Rating Agent",
                    name: "Financial Services - Credit Rating Agent"
                }, {
                    value: "Financial Services - Exchanges",
                    name: "Financial Services - Exchanges"
                }, {
                    value: "Financial Services - Fund Management",
                    name: "Financial Services - Fund Management"
                }, {
                    value: "Financial Services - General Insurance",
                    name: "Financial Services - General Insurance"
                }, {
                    value: "Financial Services - Health Insurance",
                    name: "Financial Services - Health Insurance"
                }, {
                    value: "Financial Services - Holding Companies",
                    name: "Financial Services - Holding Companies"
                }, {
                    value: "Financial Services - IFA",
                    name: "Financial Services - IFA"
                }, {
                    value: "Financial Services - Insurance Brokers",
                    name: "Financial Services - Insurance Brokers"
                }, {
                    value: "Financial Services - Investment Banks",
                    name: "Financial Services - Investment Banks"
                }, {
                    value: "Financial Services - Life Assurance",
                    name: "Financial Services - Life Assurance"
                }, {
                    value: "Financial Services - Loans &amp; Mortgages",
                    name: "Financial Services - Loans &amp; Mortgages"
                }, {
                    value: "Financial Services - Private Banks",
                    name: "Financial Services - Private Banks"
                }, {
                    value: "Financial Services - Private Equity",
                    name: "Financial Services - Private Equity"
                }, {
                    value: "Financial Services - Real Estate",
                    name: "Financial Services - Real Estate"
                }, {
                    value: "Financial Services - Regulator",
                    name: "Financial Services - Regulator"
                }, {
                    value: "Financial Services - Re-Insurance",
                    name: "Financial Services - Re-Insurance"
                }, {
                    value: "Financial Services - Retail Banks",
                    name: "Financial Services - Retail Banks"
                }, {
                    value: "Financial Services - Securities",
                    name: "Financial Services - Securities"
                }, {
                    value: "Financial Services - Wholesale Insurance",
                    name: "Financial Services - Wholesale Insurance"
                }, {
                    value: "Food / Beverage",
                    name: "Food / Beverage"
                }, {
                    value: "Government",
                    name: "Government"
                }, {
                    value: "Government, Not-for-Profit",
                    name: "Government, Not-for-Profit"
                }, {
                    value: "Government - Central",
                    name: "Government - Central"
                }, {
                    value: "Government - Embassy",
                    name: "Government - Embassy"
                }, {
                    value: "Government - Executive Agency",
                    name: "Government - Executive Agency"
                }, {
                    value: "Government - Investment Agency",
                    name: "Government - Investment Agency"
                }, {
                    value: "Government - Local",
                    name: "Government - Local"
                }, {
                    value: "Government - Military",
                    name: "Government - Military"
                }, {
                    value: "Government - Other",
                    name: "Government - Other"
                }, {
                    value: "Healthcare",
                    name: "Healthcare"
                }, {
                    value: "Healthcare / Pharmaceuticals",
                    name: "Healthcare / Pharmaceuticals"
                }, {
                    value: "Healthcare - Health Care Centre",
                    name: "Healthcare - Health Care Centre"
                }, {
                    value: "Healthcare - Hospitals",
                    name: "Healthcare - Hospitals"
                }, {
                    value: "Healthcare - Medical Research",
                    name: "Healthcare - Medical Research"
                }, {
                    value: "Healthcare - Provider",
                    name: "Healthcare - Provider"
                }, {
                    value: "Healthcare - Regulator",
                    name: "Healthcare - Regulator"
                }, {
                    value: "Healthcare - System",
                    name: "Healthcare - System"
                }, {
                    value: "Heavy Manufacturing, Construction",
                    name: "Heavy Manufacturing, Construction"
                }, {
                    value: "Hospitality / Travel &amp; Tourism",
                    name: "Hospitality / Travel &amp; Tourism"
                }, {
                    value: "IT / Technology",
                    name: "IT / Technology"
                }, {
                    value: "IT - Hardware",
                    name: "IT - Hardware"
                }, {
                    value: "IT - Services",
                    name: "IT - Services"
                }, {
                    value: "IT - Software",
                    name: "IT - Software"
                }, {
                    value: "Legal",
                    name: "Legal"
                }, {
                    value: "Luxury Goods",
                    name: "Luxury Goods"
                }, {
                    value: "Manufacturing",
                    name: "Manufacturing"
                }, {
                    value: "Marketing / PR",
                    name: "Marketing / PR"
                }, {
                    value: "Media",
                    name: "Media"
                }, {
                    value: "Media - Publishing",
                    name: "Media - Publishing"
                }, {
                    value: "Media - Radio &amp; Television",
                    name: "Media - Radio &amp; Television"
                }, {
                    value: "Mfg - Chemicals",
                    name: "Mfg - Chemicals"
                }, {
                    value: "Mfg - Electrical Equipment not IT",
                    name: "Mfg - Electrical Equipment not IT"
                }, {
                    value: "Mfg - Food &amp; Drink",
                    name: "Mfg - Food &amp; Drink"
                }, {
                    value: "Mfg - Industrial Equipment",
                    name: "Mfg - Industrial Equipment"
                }, {
                    value: "Mfg - Medical Devices",
                    name: "Mfg - Medical Devices"
                }, {
                    value: "Mfg - Other",
                    name: "Mfg - Other"
                }, {
                    value: "Mfg - Paper &amp; Packaging",
                    name: "Mfg - Paper &amp; Packaging"
                }, {
                    value: "Mfg - Pharmaceuticals",
                    name: "Mfg - Pharmaceuticals"
                }, {
                    value: "Mfg - Textiles &amp; Clothing",
                    name: "Mfg - Textiles &amp; Clothing"
                }, {
                    value: "Mfg - Tobacco",
                    name: "Mfg - Tobacco"
                }, {
                    value: "Mfg - Vehicles",
                    name: "Mfg - Vehicles"
                }, {
                    value: "Mining",
                    name: "Mining"
                }, {
                    value: "Mining - Metals",
                    name: "Mining - Metals"
                }, {
                    value: "Mining - Other",
                    name: "Mining - Other"
                }, {
                    value: "NGO - Business Association",
                    name: "NGO - Business Association"
                }, {
                    value: "NGO - Conservation &amp; Environment",
                    name: "NGO - Conservation &amp; Environment"
                }, {
                    value: "NGO - Human Welfare",
                    name: "NGO - Human Welfare"
                }, {
                    value: "Not-for-Profit / Charities",
                    name: "Not-for-Profit / Charities"
                }, {
                    value: "Oil &amp; Gas - Downstream",
                    name: "Oil &amp; Gas - Downstream"
                }, {
                    value: "Oil &amp; Gas - Pipelines",
                    name: "Oil &amp; Gas - Pipelines"
                }, {
                    value: "Oil &amp; Gas - Service and supply",
                    name: "Oil &amp; Gas - Service and supply"
                }, {
                    value: "Oil &amp; Gas - Upstream",
                    name: "Oil &amp; Gas - Upstream"
                }, {
                    value: "Other",
                    name: "Other"
                }, {
                    value: "Other - Charities",
                    name: "Other - Charities"
                }, {
                    value: "Other - Political Party",
                    name: "Other - Political Party"
                }, {
                    value: "Other - Private Individual",
                    name: "Other - Private Individual"
                }, {
                    value: "Other - Student",
                    name: "Other - Student"
                }, {
                    value: "Other - Trade Unions",
                    name: "Other - Trade Unions"
                }, {
                    value: "Prof. Services - Accounting",
                    name: "Prof. Services - Accounting"
                }, {
                    value: "Prof. Services - Advertising Agency",
                    name: "Prof. Services - Advertising Agency"
                }, {
                    value: "Prof. Services - Architects &amp; Surveyors",
                    name: "Prof. Services - Architects &amp; Surveyors"
                }, {
                    value: "Prof. Services - Engineering Consultants",
                    name: "Prof. Services - Engineering Consultants"
                }, {
                    value: "Prof. Services - Facilities &amp; Office",
                    name: "Prof. Services - Facilities &amp; Office"
                }, {
                    value: "Prof. Services - Law Firms",
                    name: "Prof. Services - Law Firms"
                }, {
                    value: "Prof. Services - Management Consultants",
                    name: "Prof. Services - Management Consultants"
                }, {
                    value: "Prof. Services - PR/Marketing",
                    name: "Prof. Services - PR/Marketing"
                }, {
                    value: "Prof. Services - Recruitment",
                    name: "Prof. Services - Recruitment"
                }, {
                    value: "Prof. Services - Website Developers",
                    name: "Prof. Services - Website Developers"
                }, {
                    value: "Public Relations",
                    name: "Public Relations"
                }, {
                    value: "Real Estate",
                    name: "Real Estate"
                }, {
                    value: "Retail",
                    name: "Retail"
                }, {
                    value: "Retail / Luxury Goods",
                    name: "Retail / Luxury Goods"
                }, {
                    value: "Retail - Consumer Goods",
                    name: "Retail - Consumer Goods"
                }, {
                    value: "Retail - Other",
                    name: "Retail - Other"
                }, {
                    value: "Retail - Wholesale Goods",
                    name: "Retail - Wholesale Goods"
                }, {
                    value: "Services - Academia",
                    name: "Services - Academia"
                }, {
                    value: "Services - Associations",
                    name: "Services - Associations"
                }, {
                    value: "Services - Hotels",
                    name: "Services - Hotels"
                }, {
                    value: "Services - Recreation Services &amp; Sport",
                    name: "Services - Recreation Services &amp; Sport"
                }, {
                    value: "Technology, IT, Telecommunications",
                    name: "Technology, IT, Telecommunications"
                }, {
                    value: "Telecommunications",
                    name: "Telecommunications"
                }, {
                    value: "Transport - Air",
                    name: "Transport - Air"
                }, {
                    value: "Transport - Airports",
                    name: "Transport - Airports"
                }, {
                    value: "Transportation / Logistics / Supply Chain",
                    name: "Transportation / Logistics / Supply Chain"
                }, {
                    value: "Transport - Buses &amp; Taxis",
                    name: "Transport - Buses &amp; Taxis"
                }, {
                    value: "Transport - Ferries &amp; Water Freight",
                    name: "Transport - Ferries &amp; Water Freight"
                }, {
                    value: "Transport - Motor Freight",
                    name: "Transport - Motor Freight"
                }, {
                    value: "Transport - Other",
                    name: "Transport - Other"
                }, {
                    value: "Transport - Postal Services",
                    name: "Transport - Postal Services"
                }, {
                    value: "Transport - Rail",
                    name: "Transport - Rail"
                }, {
                    value: "Transport - Regulator",
                    name: "Transport - Regulator"
                }, {
                    value: "Travel, Transportation &amp; Logistics",
                    name: "Travel, Transportation &amp; Logistics"
                }, {
                    value: "University, Public Library",
                    name: "University, Public Library"
                }, {
                    value: "Utilities",
                    name: "Utilities"
                }, {
                    value: "Utilities - Electricity &amp; Gas Provider",
                    name: "Utilities - Electricity &amp; Gas Provider"
                }, {
                    value: "Utilities - Electricity Distribution",
                    name: "Utilities - Electricity Distribution"
                }, {
                    value: "Utilities - Gas Production &amp; Distributio",
                    name: "Utilities - Gas Production &amp; Distributio"
                }, {
                    value: "Utilities - Other",
                    name: "Utilities - Other"
                }, {
                    value: "Utilities - Regulator",
                    name: "Utilities - Regulator"
                }, {
                    value: "Utilities - Renewables",
                    name: "Utilities - Renewables"
                }, {
                    value: "Utilities - Water",
                    name: "Utilities - Water"
                }],
                q = [{
                    value: "",
                    name: "--None--"
                }, {
                    value: "Administration",
                    name: "Administration"
                }, {
                    value: "Advocacy / Policy",
                    name: "Advocacy / Policy"
                }, {
                    value: "Analyst",
                    name: "Analyst"
                }, {
                    value: "Business Development",
                    name: "Business Development"
                }, {
                    value: "Consulting",
                    name: "Consulting"
                }, {
                    value: "Corporate Development / Mergers &amp; Acquisitions",
                    name: "Corporate Development / Mergers &amp; Acquisitions"
                }, {
                    value: "Corporate Management / Board Level",
                    name: "Corporate Management / Board Level"
                }, {
                    value: "Corporate Social Responsibility",
                    name: "Corporate Social Responsibility"
                }, {
                    value: "Corporate Social Responsibility / Sustainability",
                    name: "Corporate Social Responsibility / Sustainability"
                }, {
                    value: "Customer Service",
                    name: "Customer Service"
                }, {
                    value: "Economics",
                    name: "Economics"
                }, {
                    value: "Editorial",
                    name: "Editorial"
                }, {
                    value: "Education / Library",
                    name: "Education / Library"
                }, {
                    value: "Engineering",
                    name: "Engineering"
                }, {
                    value: "Finance",
                    name: "Finance"
                }, {
                    value: "Finance / Treasury",
                    name: "Finance / Treasury"
                }, {
                    value: "General Management",
                    name: "General Management"
                }, {
                    value: "HR",
                    name: "HR"
                }, {
                    value: "Human Resources",
                    name: "Human Resources"
                }, {
                    value: "Investment Management",
                    name: "Investment Management"
                }, {
                    value: "IT",
                    name: "IT"
                }, {
                    value: "IT / Technology",
                    name: "IT / Technology"
                }, {
                    value: "Legal",
                    name: "Legal"
                }, {
                    value: "Manufacturing",
                    name: "Manufacturing"
                }, {
                    value: "Marketing",
                    name: "Marketing"
                }, {
                    value: "Marketing / Public Relations",
                    name: "Marketing / Public Relations"
                }, {
                    value: "Medical",
                    name: "Medical"
                }, {
                    value: "Operations",
                    name: "Operations"
                }, {
                    value: "Operations / Supply chain",
                    name: "Operations / Supply chain"
                }, {
                    value: "Other",
                    name: "Other"
                }, {
                    value: "Politics",
                    name: "Politics"
                }, {
                    value: "Procurement",
                    name: "Procurement"
                }, {
                    value: "Public Relations",
                    name: "Public Relations"
                }, {
                    value: "R\uff06D",
                    name: "R\uff06D"
                }, {
                    value: "Research / Business Intelligence",
                    name: "Research / Business Intelligence"
                }, {
                    value: "Risk Management",
                    name: "Risk Management"
                }, {
                    value: "Sales",
                    name: "Sales"
                }, {
                    value: "Sales / Business Development",
                    name: "Sales / Business Development"
                }, {
                    value: "Strategy",
                    name: "Strategy"
                }, {
                    value: "Strategy / Planning",
                    name: "Strategy / Planning"
                }, {
                    value: "Student/Not currently employed",
                    name: "Student/Not currently employed"
                }, {
                    value: "Supply Chain",
                    name: "Supply Chain"
                }, {
                    value: "Retired",
                    name: "Retired"
                }],
                W = [{
                    value: "",
                    name: "--None--"
                }, {
                    value: "Analyst / Researcher",
                    name: "Analyst / Researcher"
                }, {
                    value: "Associate",
                    name: "Associate"
                }, {
                    value: "Chair Person / C-Suite / Board Director",
                    name: "Chair Person / C-Suite / Board Director"
                }, {
                    value: "Consultant",
                    name: "Consultant"
                }, {
                    value: "Economist",
                    name: "Economist"
                }, {
                    value: "Government Official",
                    name: "Government Official"
                }, {
                    value: "Head of Department",
                    name: "Head of Department"
                }, {
                    value: "Journalist / Writer",
                    name: "Journalist / Writer"
                }, {
                    value: "Librarian / Information Officer",
                    name: "Librarian / Information Officer"
                }, {
                    value: "Manager",
                    name: "Manager"
                }, {
                    value: "Managing Director / President",
                    name: "Managing Director / President"
                }, {
                    value: "Other",
                    name: "Other"
                }, {
                    value: "Owner / Founder",
                    name: "Owner / Founder"
                }, {
                    value: "Self Employed",
                    name: "Self Employed"
                }, {
                    value: "Student",
                    name: "Student"
                }, {
                    value: "Teacher / Professor",
                    name: "Teacher / Professor"
                }, {
                    value: "Vice President / Director / Senior Executive",
                    name: "Vice President / Director / Senior Executive"
                }, {
                    value: "Retired",
                    name: "Retired"
                }],
                U = [{
                    value: "",
                    name: "--None--"
                }, {
                    value: "Advertisement/PR",
                    name: "Advertisement/PR"
                }, {
                    value: "Call In",
                    name: "Call In"
                }, {
                    value: "Client Referral",
                    name: "Client Referral"
                }, {
                    value: "Cold Call",
                    name: "Cold Call"
                }, {
                    value: "Cold Call by Sales",
                    name: "Cold Call by Sales"
                }, {
                    value: "Conference",
                    name: "Conference"
                }, {
                    value: "Conference Delegate",
                    name: "Conference Delegate"
                }, {
                    value: "Conferences",
                    name: "Conferences"
                }, {
                    value: "Customer Services",
                    name: "Customer Services"
                }, {
                    value: "Data Acquisition",
                    name: "Data Acquisition"
                }, {
                    value: "Desk Research",
                    name: "Desk Research"
                }, {
                    value: "Desk research - Marketing",
                    name: "Desk research - Marketing"
                }, {
                    value: "Direct Mail",
                    name: "Direct Mail"
                }, {
                    value: "Direct Mail/E-mail",
                    name: "Direct Mail/E-mail"
                }, {
                    value: "Direct Mail Response",
                    name: "Direct Mail Response"
                }, {
                    value: "Economist.com Ad",
                    name: "Economist.com Ad"
                }, {
                    value: "Economist Ad",
                    name: "Economist Ad"
                }, {
                    value: "Economist Conference",
                    name: "Economist Conference"
                }, {
                    value: "Economist Group conference",
                    name: "Economist Group conference"
                }, {
                    value: "Editorial",
                    name: "Editorial"
                }, {
                    value: "Editorial Referral",
                    name: "Editorial Referral"
                }, {
                    value: "Email Marketing",
                    name: "Email Marketing"
                }, {
                    value: "Email Newsletter",
                    name: "Email Newsletter"
                }, {
                    value: "External Referral",
                    name: "External Referral"
                }, {
                    value: "Global Outlook Conference",
                    name: "Global Outlook Conference"
                }, {
                    value: "GoldMine/C4 Legacy System",
                    name: "GoldMine/C4 Legacy System"
                }, {
                    value: "Inbound Call (They Called You)",
                    name: "Inbound Call (They Called You)"
                }, {
                    value: "Inbound Email (They Emailed Us)",
                    name: "Inbound Email (They Emailed Us)"
                }, {
                    value: "Key account mapping",
                    name: "Key account mapping"
                }, {
                    value: "Open House",
                    name: "Open House"
                }, {
                    value: "Organic Search",
                    name: "Organic Search"
                }, {
                    value: "Organic Social Media",
                    name: "Organic Social Media"
                }, {
                    value: "Other",
                    name: "Other"
                }, {
                    value: "Other Ad",
                    name: "Other Ad"
                }, {
                    value: "Other Magazine",
                    name: "Other Magazine"
                }, {
                    value: "Other Source/Unknown",
                    name: "Other Source/Unknown"
                }, {
                    value: "Outbound Email Response",
                    name: "Outbound Email Response"
                }, {
                    value: "Paid Search",
                    name: "Paid Search"
                }, {
                    value: "Paid Social Media",
                    name: "Paid Social Media"
                }, {
                    value: "Partner",
                    name: "Partner"
                }, {
                    value: "Partner/PR",
                    name: "Partner/PR"
                }, {
                    value: "Referral",
                    name: "Referral"
                }, {
                    value: "Referral/Editorial",
                    name: "Referral/Editorial"
                }, {
                    value: "Sales Acquisition",
                    name: "Sales Acquisition"
                }, {
                    value: "TactTree",
                    name: "TactTree"
                }, {
                    value: "Telemarketing",
                    name: "Telemarketing"
                }, {
                    value: "Trade Show",
                    name: "Trade Show"
                }, {
                    value: "Trade Show/External Mktg",
                    name: "Trade Show/External Mktg"
                }, {
                    value: "Typed/Bookmarked",
                    name: "Typed/Bookmarked"
                }, {
                    value: "Via Sales",
                    name: "Via Sales"
                }, {
                    value: "Webcast",
                    name: "Webcast"
                }, {
                    value: "Webinar",
                    name: "Webinar"
                }, {
                    value: "Web Site",
                    name: "Web Site"
                }, {
                    value: "Website Form",
                    name: "Website Form"
                }, {
                    value: "Word of mouth",
                    name: "Word of mouth"
                }, {
                    value: "Store",
                    name: "Store"
                }, {
                    value: "Internal Website",
                    name: "Internal Website"
                }, {
                    value: "LinkedIn Lead gen",
                    name: "LinkedIn Lead gen"
                }, {
                    value: "Dii Integrated",
                    name: "Dii Integrated"
                }, {
                    value: "UnbounceBulkSubs",
                    name: "UnbounceBulkSubs"
                }, {
                    value: "Live Chat",
                    name: "Live Chat"
                }, {
                    value: "Email",
                    name: "Email"
                }],
                V = function(e) {
                    var n = A(E()),
                        t = n.handleChange,
                        a = n.handleSubmit,
                        r = n.handleBlur,
                        i = n.values,
                        l = n.hasError,
                        o = n.isValid,
                        c = n.dirty,
                        s = n.hasSuccess,
                        u = n.errorMessage,
                        d = n.successMessage;
                    return (0, m.jsxs)(F.Fragment, {
                        children: [!s && (0, m.jsxs)("form", {
                            className: "form",
                            onSubmit: a,
                            children: [(0, m.jsx)(Z, {
                                value: i.first_name,
                                handleChange: t,
                                handleBlur: r,
                                name: "first_name",
                                label: "First Name"
                            }), (0, m.jsx)(Z, {
                                name: "last_name",
                                label: "Last name",
                                value: i.last_name,
                                handleChange: t,
                                handleBlur: r
                            }), (0, m.jsx)(Z, {
                                name: "country",
                                label: "Country",
                                handleChange: t,
                                handleBlur: r,
                                value: i.country
                            }), (0, m.jsx)(Z, {
                                name: "company",
                                label: "Company",
                                handleChange: t,
                                handleBlur: r,
                                value: i.company
                            }), (0, m.jsx)(Z, {
                                name: "email",
                                label: "Email",
                                handleChange: t,
                                handleBlur: r,
                                value: i.email
                            }), (0, m.jsx)(Z, {
                                name: "phone",
                                label: "Phone Number",
                                handleChange: t,
                                handleBlur: r,
                                value: i.phone
                            }), (0, m.jsx)(B, {
                                label: "Industry",
                                name: "industry",
                                options: H,
                                value: i.industry,
                                handleChange: t,
                                handleBlur: r
                            }), (0, m.jsx)(B, {
                                label: "Job Function",
                                name: "00N30000001gspV",
                                options: q,
                                value: i["00N30000001gspV"],
                                handleChange: t,
                                handleBlur: r
                            }), (0, m.jsx)(B, {
                                label: "Job Role",
                                name: "00N30000001O01a",
                                options: W,
                                value: i["00N30000001O01a"],
                                handleChange: t,
                                handleBlur: r
                            }), (0, m.jsx)(B, {
                                label: "Lead Source",
                                name: "lead_source",
                                options: U,
                                value: i.lead_source,
                                handleChange: t,
                                handleBlur: r
                            }), (0, m.jsx)(G, {
                                label: "Do not email",
                                name: "00N30000003dR9o",
                                value: i["00N30000003dR9o"],
                                handleChange: t,
                                handleBlur: r
                            }), (0, m.jsx)(T.Z, {
                                disabled: !o || !1 === c,
                                text: "Submit",
                                type: "primary"
                            }), l && (0, m.jsx)("div", {
                                className: "error",
                                children: (0, m.jsx)("p", {
                                    children: u
                                })
                            })]
                        }), s && (0, m.jsx)("div", {
                            className: "success-module",
                            children: (0, m.jsx)("p", {
                                children: d
                            })
                        })]
                    })
                };

            function Y(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function z(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Y(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var Q = function(e) {
                    var n = e.data,
                        a = n.reactComponent,
                        r = n.data,
                        i = (0, l.default)((function() {
                            return t.e(485).then(t.bind(t, 8485))
                        }), {
                            ssr: !1,
                            loadableGenerated: {
                                webpack: function() {
                                    return [8485]
                                },
                                modules: ["../components/blocks/BlockCustom.js -> @/components/custom/OfficeList"]
                            }
                        });
                    return "OfficeList" === a ? (0, m.jsx)(d.Z, {
                        blockType: "office",
                        isContainer: !0,
                        align: "left",
                        children: (0, m.jsx)(i, z({}, r))
                    }) : "ReportsList" === a ? (0, m.jsx)(d.Z, {
                        blockType: "reports-list",
                        isContainer: !0,
                        align: "left",
                        children: (0, m.jsx)(_, z({}, r))
                    }) : "ContactForm" === a ? (0, m.jsx)(d.Z, {
                        blockType: "contact-form",
                        isContainer: !0,
                        align: "left",
                        children: (0, m.jsx)(V, {})
                    }) : (console.warn("unknown custom component", a), null)
                },
                K = t(4954),
                J = function(e) {
                    return (0, m.jsx)("div", {
                        className: "loud-text",
                        children: e.document ? (0, m.jsx)(K.Z, {
                            document: e.document
                        }) : e.children
                    })
                },
                X = function(e) {
                    var n = e.data.textOffset;
                    return (0, m.jsx)(d.Z, {
                        blockType: "loud",
                        isFullWidth: !0,
                        children: (0, m.jsx)("div", {
                            className: "container",
                            children: (0, m.jsx)(J, {
                                children: n
                            })
                        })
                    })
                },
                $ = t(7790),
                ee = function(e) {
                    var n = e.data.statItemsCollection;
                    return (0, m.jsx)(d.Z, {
                        blockType: "stat",
                        align: "left",
                        isContainer: !0,
                        children: (0, m.jsx)($.Z, {
                            stats: n.items
                        })
                    })
                },
                ne = t(1220),
                te = function(e) {
                    var n = e.item;
                    return (0, m.jsx)("li", {
                        className: "list-module__item",
                        children: n
                    })
                },
                ae = function(e) {
                    var n = e.title,
                        t = e.list;
                    return (0, m.jsxs)("div", {
                        className: "list-module",
                        children: [n && (0, m.jsx)("h3", {
                            className: "list-module__title",
                            children: n
                        }), t && (0, m.jsx)("ul", {
                            className: "list-module__list",
                            children: t.map((function(e, n) {
                                return (0, m.jsx)(te, {
                                    item: e
                                }, n)
                            }))
                        })]
                    })
                },
                re = function(e) {
                    var n = e.data,
                        t = n.inverse,
                        a = n.text,
                        r = n.listHeadline,
                        i = n.listItems,
                        l = n.headline,
                        o = n.subheadline;
                    return (0, m.jsx)(d.Z, {
                        blockType: "text",
                        align: "left",
                        inverse: t,
                        isContainer: !0,
                        children: (0, m.jsxs)("div", {
                            className: "text-block  ".concat(l ? "text-block--header" : "text-block--basic"),
                            children: [(l || o) && (0, m.jsxs)("div", {
                                className: "text-block__headline",
                                children: [l && (0, c.Z)("\n              <h3 class='page-subheading'>\n                <div class='section-id-placeholder' id=".concat(l.replace(/\\s+/g, "-").toLowerCase(), "> </div>\n                ").concat(l, "\n              </h3>\n            ")), o && (0, c.Z)("\n              <p class='text-block__subheadline'>\n                ".concat(o, "\n              </p>\n            "))]
                            }), a && (0, m.jsx)("div", {
                                className: "text-block__primary",
                                children: (0, m.jsx)(ne.Z, {
                                    document: a
                                })
                            }), i && (0, m.jsx)("div", {
                                className: "text-block__secondary",
                                children: (0, m.jsx)(ae, {
                                    title: r,
                                    list: i
                                })
                            })]
                        })
                    })
                },
                ie = function(e) {
                    var n = e.data,
                        t = n.inverse,
                        a = n.columnsCollection,
                        r = n.singleText,
                        i = n.image,
                        l = n.backgroundColor,
                        o = a.items.length;
                    return (0, m.jsxs)(d.Z, {
                        blockType: "text-multi ".concat(l ? "text-multi__content-withoutSpacing" : "text-multi__content"),
                        align: "left",
                        inverse: t,
                        isContainer: !0,
                        isFullWidth: Boolean(l),
                        children: [(0, m.jsxs)("div", {
                            className: "text-block text-block--multi",
                            style: {
                                backgroundColor: l,
                                padding: l ? "24px" : void 0
                            },
                            children: [o > 0 && a.items.map((function(e) {
                                return (0, m.jsxs)("div", {
                                    className: "text-block__col",
                                    style: {
                                        width: l ? "100%" : void 0
                                    },
                                    children: [(0, m.jsx)("h3", {
                                        className: "text-block-header",
                                        children: e.headline
                                    }), (0, m.jsx)(ne.Z, {
                                        document: e.text
                                    })]
                                }, e.headline)
                            })), r && 0 === o && (0, m.jsx)(ne.Z, {
                                document: r.text
                            })]
                        }), i && 0 === o && (0, m.jsxs)("div", {
                            className: "text-multi__image",
                            children: [(0, m.jsx)("img", {
                                src: i.image.url,
                                alt: (null === i || void 0 === i ? void 0 : i.alt) || i.image.description || "grid item",
                                title: (null === i || void 0 === i ? void 0 : i.title) || i.image.title
                            }), (0, m.jsx)(ne.Z, {
                                document: null === i || void 0 === i ? void 0 : i.caption
                            })]
                        })]
                    })
                },
                le = t(6555);

            function oe(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function ce(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? oe(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : oe(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var se = function(e) {
                    var n = e.items,
                        t = e.layout,
                        a = e.orientation,
                        r = !1;
                    n.length >= 3 && (r = !0);
                    var i = "square";
                    r && (i = "landscape"), a && (i = a);
                    var l = ["card-grid"];
                    return n.length <= 2 ? l.push("card-grid--".concat(t)) : l.push("card-grid--equal"), (0, m.jsx)("div", {
                        className: l.join(" "),
                        children: n.map((function(e, n) {
                            var t = e.card ? e.card : e;
                            return (0, m.jsx)("div", {
                                className: "card-grid__card",
                                children: t.image ? (0, m.jsx)(O.Z, ce(ce({}, t), {}, {
                                    orientation: i
                                })) : (0, m.jsx)(le.Z, ce(ce({}, t), {}, {
                                    type: "ghost",
                                    shape: "square"
                                }))
                            }, n)
                        }))
                    })
                },
                ue = function(e) {
                    return (0, m.jsx)("div", {
                        className: "feature",
                        children: e.children
                    })
                };

            function de(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function me(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? de(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : de(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var ve = function(e) {
                    var n = e.data,
                        t = n.itemsCollection,
                        a = n.layout,
                        r = n.orientation,
                        i = n.display;
                    if ("Featured (1 item)" === i) {
                        var l = t.items[0];
                        return (0, m.jsx)(d.Z, {
                            blockType: "card-featured",
                            isContainer: !0,
                            children: (0, m.jsx)(ue, {
                                children: (0, m.jsx)(O.Z, me(me({}, l), {}, {
                                    orientation: "landscape"
                                }))
                            })
                        })
                    }
                    return "List (2-6 items)" === i ? (0, m.jsx)(d.Z, {
                        blockType: "card-list",
                        isContainer: !0,
                        children: (0, m.jsx)(C, {
                            items: t.items,
                            orientation: "square",
                            type: "list"
                        })
                    }) : (0, m.jsx)(d.Z, {
                        blockType: "card-grid",
                        isContainer: !0,
                        children: (0, m.jsx)(se, {
                            items: t.items,
                            layout: a,
                            orientation: r
                        })
                    })
                },
                pe = function(e) {
                    var n = (0, l.default)((function() {
                            return t.e(295).then(t.bind(t, 295))
                        }), {
                            ssr: !1,
                            loadableGenerated: {
                                webpack: function() {
                                    return [295]
                                },
                                modules: ["../components/blocks/BlockAccordion.js -> @/components/ui/Accordion"]
                            }
                        }),
                        a = e.data,
                        r = a.itemsCollection,
                        i = a.display;
                    return (0, m.jsx)(d.Z, {
                        blockType: "accordion",
                        isContainer: !0,
                        align: "left",
                        children: (0, m.jsx)(n, {
                            items: r.items,
                            display: i
                        })
                    })
                },
                fe = t(4375),
                he = t(2062),
                ge = function(e) {
                    var n = e.data,
                        t = n.media,
                        a = n.caption,
                        r = n.wideVideo;
                    return (0, m.jsx)(d.Z, {
                        blockType: "media",
                        isContainer: !0,
                        align: !r && "left",
                        children: (0, m.jsx)(fe.Z, {
                            media: t,
                            caption: a,
                            type: (0, he.Z)(t)
                        })
                    })
                },
                be = t(9711),
                je = t(2941),
                ye = [{
                    mediaQuery: "(max-width: 360px)",
                    params: {
                        w: 360,
                        h: 203,
                        fit: "fill",
                        q: 75,
                        fm: "jpg"
                    }
                }, {
                    mediaQuery: "(max-width: 600px)",
                    params: {
                        w: 600,
                        h: 338,
                        fit: "fill",
                        q: 75,
                        fm: "jpg"
                    }
                }, {
                    params: {
                        w: 1200,
                        h: 675,
                        fit: "fill",
                        q: 75,
                        fm: "jpg"
                    }
                }],
                xe = function(e) {
                    var n, t, a, r, i = e.imageObject1,
                        l = e.imageObject2,
                        o = (0, F.useState)(0),
                        c = o[0],
                        s = o[1],
                        u = (0, F.useState)(0),
                        v = u[0],
                        p = u[1],
                        f = (0, F.useState)(null),
                        h = f[0],
                        g = f[1],
                        b = (0, F.useState)(null),
                        j = b[0],
                        y = b[1],
                        x = (0, F.useState)(null),
                        O = x[0],
                        w = x[1],
                        k = (0, F.useState)(null),
                        C = k[0],
                        P = k[1],
                        S = (0, F.useState)(null),
                        _ = S[0],
                        N = S[1],
                        E = (0, F.useCallback)((function(e) {
                            null !== e && P(e)
                        }), []),
                        T = (0, F.useCallback)((function(e) {
                            null !== e && N(e)
                        }), []),
                        D = (0, F.useCallback)((function(e) {
                            null !== e && y(e)
                        }), []),
                        Z = (0, F.useCallback)((function(e) {
                            null !== e && w(e)
                        }), []),
                        B = (0, F.useCallback)((function(e) {
                            null !== e && (g(e), p(e.getBoundingClientRect().width))
                        }), []),
                        R = function() {
                            if (h && (p(h.getBoundingClientRect().width), window && s(window.innerWidth)), c > 599) {
                                var e = i.image.width / i.image.height,
                                    n = l.image.width / l.image.height,
                                    t = (v - 20) / (e + n),
                                    a = t * e,
                                    r = t * n;
                                C.style.width = "".concat(a, "px"), _.style.width = "".concat(r, "px")
                            } else j && (j.style = ""), O && (O.style = ""), C && (C.style = ""), _ && (_.style = "")
                        };
                    return (0, F.useEffect)((function() {
                        return window.addEventListener("resize", R), R(),
                            function() {
                                return window.removeEventListener("resize", R)
                            }
                    }), [j, O, c, i, l]), (0, m.jsx)(d.Z, {
                        blockType: "img2-grid",
                        isContainer: !0,
                        children: (0, m.jsxs)("div", {
                            ref: B,
                            children: [(0, m.jsxs)("div", {
                                ref: E,
                                children: [(0, m.jsx)("img", {
                                    className: "twiImageGeedItem",
                                    ref: D,
                                    src: null === i || void 0 === i || null === (n = i.image) || void 0 === n ? void 0 : n.url,
                                    alt: (null === i || void 0 === i ? void 0 : i.alt) || (null === i || void 0 === i || null === (t = i.image) || void 0 === t ? void 0 : t.description) || "grid item"
                                }), null !== i && void 0 !== i && i.caption ? (0, m.jsx)(K.Z, {
                                    document: null === i || void 0 === i ? void 0 : i.caption
                                }) : ""]
                            }), (0, m.jsxs)("div", {
                                ref: T,
                                children: [(0, m.jsx)("img", {
                                    className: "twiImageGeedItem",
                                    ref: Z,
                                    src: null === l || void 0 === l || null === (a = l.image) || void 0 === a ? void 0 : a.url,
                                    alt: (null === l || void 0 === l ? void 0 : l.alt) || (null === l || void 0 === l || null === (r = l.image) || void 0 === r ? void 0 : r.description) || "grid item"
                                }), null !== l && void 0 !== l && l.caption ? (0, m.jsx)(K.Z, {
                                    document: null === l || void 0 === l ? void 0 : l.caption
                                }) : ""]
                            })]
                        })
                    })
                },
                Oe = function(e) {
                    var n, t = e.data.itemsCollection,
                        a = (0, be.Z)(t.items, 3),
                        r = a[0],
                        i = a[1],
                        l = a[2],
                        o = function(e) {
                            var n;
                            return (0, m.jsx)(je.Z, {
                                src: e.image.url,
                                caption: null === e || void 0 === e ? void 0 : e.caption,
                                title: (null === e || void 0 === e ? void 0 : e.title) || e.image.title,
                                alt: (null === e || void 0 === e ? void 0 : e.alt) || e.image.description || "grid item",
                                lowRes: null === e || void 0 === e || null === (n = e.lqip) || void 0 === n ? void 0 : n.image
                            })
                        };
                    return (0, m.jsx)(d.Z, {
                        blockType: "image-grid",
                        isContainer: !0,
                        children: (0, m.jsxs)("div", {
                            className: "image-grid block--left-align",
                            children: [1 === t.items.length && (0, m.jsx)("div", {
                                className: "image-grid__item image-grid__single-image",
                                children: (0, m.jsx)(je.Z, {
                                    src: r.image.url,
                                    caption: null === r || void 0 === r ? void 0 : r.caption,
                                    title: (null === r || void 0 === r ? void 0 : r.title) || r.image.title,
                                    alt: (null === r || void 0 === r ? void 0 : r.alt) || r.image.description || "grid item",
                                    lowRes: null === r || void 0 === r || null === (n = r.lqip) || void 0 === n ? void 0 : n.image
                                })
                            }), 2 === t.items.length && (0, m.jsx)(xe, {
                                imageObject1: r,
                                imageObject2: i
                            }), 3 === t.items.length && (0, m.jsxs)(m.Fragment, {
                                children: [(0, m.jsx)("div", {
                                    className: "image-grid__item image-grid__1",
                                    children: o(r)
                                }), (0, m.jsx)("div", {
                                    className: "image-grid__item image-grid__2",
                                    children: o(i)
                                }), (0, m.jsx)("div", {
                                    className: "image-grid__item image-grid__3",
                                    children: o(l)
                                })]
                            })]
                        })
                    })
                },
                we = t(5036);

            function ke(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function Ce(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? ke(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ke(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var Pe = function(e) {
                    return !!(null !== e && void 0 !== e && e.firstName || null !== e && void 0 !== e && e.lastName) && ["".concat(null === e || void 0 === e ? void 0 : e.firstName, " ").concat(null === e || void 0 === e ? void 0 : e.lastName).trim(), null === e || void 0 === e ? void 0 : e.role].filter(Boolean).join(", ")
                },
                Se = function(e) {
                    var n = function(e) {
                            return {
                                quotes: e.itemsCollection.items.map((function(e) {
                                    var n, t = e.author;
                                    return {
                                        text: e.quote,
                                        author: t,
                                        attributionTitle: t && Pe(t),
                                        attributionSubtitle: null === e || void 0 === e ? void 0 : e.authorCustomText,
                                        image: null === (n = e.author) || void 0 === n ? void 0 : n.image,
                                        bgColor: e.backgroundColor
                                    }
                                }))
                            }
                        }(e.data).quotes,
                        a = (0, l.default)((function() {
                            return Promise.all([t.e(822), t.e(470)]).then(t.bind(t, 3470))
                        }), {
                            ssr: !1,
                            loadableGenerated: {
                                webpack: function() {
                                    return [3470]
                                },
                                modules: ["../components/blocks/BlockQuote.js -> @/components/ui/Carousel/QuoteCarousel"]
                            }
                        });
                    return (0, m.jsx)(d.Z, {
                        blockType: "quote",
                        children: n.length > 1 ? (0, m.jsx)(a, {
                            items: n
                        }) : (0, m.jsx)(we.Z, Ce({}, n[0]))
                    })
                },
                _e = function(e) {
                    var n = (0, l.default)((function() {
                            return Promise.all([t.e(822), t.e(443)]).then(t.bind(t, 7443))
                        }), {
                            ssr: !1,
                            loadableGenerated: {
                                webpack: function() {
                                    return [7443]
                                },
                                modules: ["../components/blocks/BlockPeople.js -> @/components/ui/Carousel/PeopleCarousel"]
                            }
                        }),
                        a = e.data,
                        r = a.peopleCollection,
                        i = a.cta,
                        o = r.items.map((function(e) {
                            return {
                                image: e.image,
                                title: "".concat(e.firstName, " ").concat(e.lastName),
                                subheadline: "".concat(e.role)
                            }
                        }));
                    return (0, m.jsx)(d.Z, {
                        blockType: "people",
                        children: (0, m.jsx)(n, {
                            items: o,
                            cta: i
                        })
                    })
                },
                Ne = t(6949),
                Ee = function(e) {
                    var n = e.label,
                        t = (e.inverse, e.name, e.disabled);
                    return (0, m.jsx)("button", {
                        "aria-label": n && n,
                        className: ["round-button"].join(" "),
                        onClick: e.onClick ? e.onClick : null,
                        disabled: t,
                        children: e.children
                    })
                },
                Te = t(150),
                De = function(e) {
                    var n = (0, Te.Z)(e),
                        t = n.cardHeadline,
                        a = n.subheadline,
                        r = n.url;
                    return (0, m.jsx)("div", {
                        className: "card-link",
                        children: (0, m.jsxs)(Ne.Z, {
                            url: r,
                            children: [(0, m.jsxs)("div", {
                                className: "card-link__content",
                                children: [(0, m.jsx)("h3", {
                                    className: "card-link__title",
                                    children: t
                                }), (0, m.jsx)("p", {
                                    className: "card-link__subtitle",
                                    children: a
                                })]
                            }), (0, m.jsx)("div", {
                                className: "card-link__cta",
                                children: (0, m.jsx)(Ee, {
                                    children: (0, m.jsx)("svg", {
                                        width: "10",
                                        height: "16",
                                        viewBox: "0 0 10 16",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, m.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M0 1.88L6.18084 8L0 14.12L1.90283 16L10 8L1.90283 0L0 1.88Z",
                                            fill: "white"
                                        })
                                    })
                                })
                            })]
                        })
                    })
                },
                Ze = function(e) {
                    var n = e.items;
                    return (0, m.jsx)("div", {
                        className: "featured-link-list",
                        children: n.map((function(e, n) {
                            return (0, m.jsx)(De, {
                                title: e.title,
                                subheadline: e.subtitle,
                                entry: e.entry
                            }, n)
                        }))
                    })
                },
                Be = function(e) {
                    var n = e.data.itemsCollection;
                    return (0, m.jsx)(d.Z, {
                        blockType: "featured-link-list",
                        isContainer: !0,
                        align: "left",
                        children: (0, m.jsx)(Ze, {
                            items: n.items
                        })
                    })
                },
                Re = t(8769),
                Me = function(e) {
                    var n = e.data,
                        t = n.itemsCollection,
                        a = n.hasBackground,
                        r = n.title,
                        i = n.hasCta,
                        l = !0;
                    l = null === a || void 0 === a || a;
                    var o = !0;
                    return o = null === i || void 0 === i || i, (0, m.jsx)(d.Z, {
                        blockType: "news-grid",
                        children: (0, m.jsx)(Re.Z, {
                            title: r || "Related News",
                            items: t.items,
                            hasBackground: l,
                            viewAll: o,
                            loading: !1
                        })
                    })
                },
                Fe = function(e) {
                    var n = e.quote,
                        t = e.authorName,
                        a = e.title,
                        r = e.company;
                    return (0, m.jsxs)("div", {
                        className: "editorial",
                        children: [(0, m.jsx)("blockquote", {
                            className: "editorial__text",
                            children: (0, m.jsx)("p", {
                                children: n
                            })
                        }), (0, m.jsxs)("div", {
                            className: "editorial__attr",
                            children: [(0, m.jsx)("p", {
                                className: "editorial__attr__name",
                                children: t
                            }), (0, m.jsx)("p", {
                                className: "editorial__attr__title",
                                children: a
                            }), (0, m.jsx)("p", {
                                className: "editorial__attr__company",
                                children: r
                            })]
                        })]
                    })
                },
                Ie = function(e) {
                    var n = e.data,
                        t = n.quote,
                        a = n.authorName,
                        r = n.title,
                        i = n.company;
                    return (0, m.jsx)(d.Z, {
                        blockType: "editorial",
                        isFullWidth: !0,
                        isContainer: !0,
                        children: (0, m.jsx)(Fe, {
                            quote: t,
                            authorName: a,
                            title: r,
                            company: i
                        })
                    })
                };

            function Le(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function Ae(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Le(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Le(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var Ge = (0, l.default)((function() {
                    return t.e(392).then(t.bind(t, 2392))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [2392]
                        },
                        modules: ["../components/blocks/BlockLeadership.js -> @/components/custom/BoardList"]
                    }
                }),
                He = function(e) {
                    var n = e.data,
                        t = n.executiveTeamPeopleCollection,
                        a = n.boardPeopleCollection,
                        r = n.trusteesPeopleCollection,
                        i = n.displayAs,
                        l = n.page,
                        o = {};
                    return null !== t && void 0 !== t && t.items.length && (o["Executive team"] = t.items), null !== a && void 0 !== a && a.items.length && (o.Board = a.items), null !== r && void 0 !== r && r.items.length && (o.Trustees = r.items), (0, m.jsx)(d.Z, {
                        blockType: "board-list",
                        children: (0, m.jsx)(Ge, Ae(Ae({}, o), {}, {
                            displayAs: i,
                            page: l
                        }))
                    })
                },
                qe = t(2968),
                We = t(9671),
                Ue = function() {
                    var e = (0, We.Y)(),
                        n = (0, be.Z)(e, 2),
                        t = n[0],
                        a = n[1],
                        r = (0, F.useState)(!1),
                        i = r[0],
                        l = r[1];
                    return (0, F.useEffect)((function() {
                        a && l(!0)
                    }), [a]), {
                        ref: t,
                        wasVisible: i
                    }
                },
                Ve = t(6030),
                Ye = function(e) {
                    (0, Ve.Z)({
                        targets: e,
                        opacity: 1,
                        easing: "linear",
                        duration: 300
                    })
                },
                ze = function(e, n, t, a) {
                    var r = {},
                        i = {};
                    return n && (r = {
                        backgroundImage: "url(".concat(n.hash, ")"),
                        backgroundSize: "cover"
                    }, i = {
                        opacity: 0
                    }), (0, F.useEffect)((function() {
                        t && a && Ye(e.current)
                    }), [t, a]), {
                        bgStyles: r,
                        imageStyles: i
                    }
                };

            function Qe(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function Ke(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Qe(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qe(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var Je = function(e) {
                var n = e.imageParams,
                    t = e.lowRes,
                    a = (0, F.useRef)(),
                    r = (0, F.useState)(!1),
                    i = r[0],
                    l = r[1],
                    o = Ue(),
                    c = o.ref,
                    s = o.wasVisible,
                    u = ze(a, t, s, i),
                    d = u.bgStyles,
                    v = u.imageStyles,
                    p = F.Children.map(e.children, (function(e) {
                        return (0, F.cloneElement)(e, {
                            style: v,
                            ref: a,
                            onLoad: function() {
                                return l(!0)
                            }
                        })
                    })),
                    f = n.h / n.w;
                return t ? (0, m.jsx)("div", {
                    ref: c,
                    className: "responsive-image",
                    style: Ke({
                        paddingTop: "".concat(100 * f, "%")
                    }, d),
                    children: s && p
                }) : (0, m.jsx)("div", {
                    ref: c,
                    className: "responsive-image",
                    style: Ke({
                        paddingTop: "".concat(100 * f, "%")
                    }, d),
                    children: p
                })
            };

            function Xe(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function $e(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Xe(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xe(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var en = function(e) {
                    return Object.keys(e).map((function(n) {
                        return n + "=" + e[n]
                    })).join("&")
                },
                nn = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1.5;
                    if (!n) return e;
                    var a = {
                        w: Math.round(n.w * t)
                    };
                    n.h && (a.h = Math.round(n.h * t));
                    var r = e + "?" + en($e($e({}, n), a));
                    return "".concat(r)
                },
                tn = function(e) {
                    var n = e.crops,
                        t = e.src,
                        a = e.alt,
                        r = e.lowRes,
                        i = e.caption,
                        l = void 0 === i ? null : i,
                        o = e.title,
                        c = void 0 === o ? null : o,
                        s = n.map((function(e) {
                            return nn(t, e.params) + " ".concat(e.params.w, "w")
                        })),
                        u = n.map((function(e) {
                            return e.mediaQuery ? "".concat(e.mediaQuery, " ").concat(e.params.w, "px") : "".concat(e.params.w, "px")
                        })),
                        d = n[n.length - 1],
                        v = nn(t, d.params),
                        p = d.params;
                    return (0, m.jsxs)(m.Fragment, {
                        children: [(0, m.jsx)(Je, {
                            imageParams: p,
                            lowRes: r,
                            children: (0, m.jsx)("img", {
                                onLoad: function() {
                                    return setLoaded(!0)
                                },
                                src: v,
                                title: c,
                                alt: a || "Image",
                                srcSet: s.join(","),
                                sizes: u.join(",")
                            })
                        }), l && (0, m.jsx)("div", {
                            className: "responsive-image-caption",
                            children: (0, m.jsx)(K.Z, {
                                document: l
                            })
                        })]
                    })
                },
                an = function(e) {
                    var n, t = e.headline,
                        a = e.entry,
                        r = e.video,
                        i = e.poster,
                        l = e.subheadline,
                        o = (0, F.useRef)(),
                        c = (0, F.useState)(!1),
                        s = c[0],
                        u = c[1],
                        d = (0, qe.Z)().breakpoint,
                        v = null === r || void 0 === r ? void 0 : r.url,
                        p = function() {
                            return "small" === d || "medium" === d
                        };
                    return (0, m.jsx)("div", {
                        className: "video-card ".concat(s ? "is-active" : ""),
                        onMouseEnter: function() {
                            v && (p() || (o.current.currentTime = 0, u(!0), o.current.play()))
                        },
                        onMouseLeave: function() {
                            v && (p() || (u(!1), o.current.pause()))
                        },
                        children: (0, m.jsxs)(Ne.Z, {
                            url: a.permalink,
                            attr: a.title,
                            children: [(0, m.jsxs)("div", {
                                className: "video-card__media",
                                children: [(0, m.jsx)(tn, {
                                    src: i.url,
                                    alt: i.description ? i.description : t,
                                    crops: ye,
                                    lowRes: null === e || void 0 === e || null === (n = e.lqip) || void 0 === n ? void 0 : n.poster
                                }), v ? (0, m.jsx)("video", {
                                    className: "video-card__video",
                                    ref: o,
                                    muted: !0,
                                    src: r.url,
                                    preload: "auto"
                                }) : null]
                            }), (0, m.jsx)("h3", {
                                className: "video-card__headline",
                                children: t
                            }), (0, m.jsx)("p", {
                                className: "video-card__subheadline",
                                children: l
                            })]
                        })
                    })
                };

            function rn(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function ln(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? rn(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : rn(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var on = function(e) {
                    var n = e.data.itemsCollection.items;
                    return (0, m.jsx)(d.Z, {
                        blockType: "video-grid",
                        isContainer: !0,
                        children: (0, m.jsx)("div", {
                            className: "video-grid",
                            children: n.map((function(e, n) {
                                return (0, F.createElement)(an, ln(ln({}, e), {}, {
                                    key: n
                                }))
                            }))
                        })
                    })
                },
                cn = {
                    BlockCards: "BlockCards",
                    BlockVideoCards: "BlockVideoCards",
                    BlockMedia: "BlockMedia",
                    BlockImageGrid: "BlockImageGrid",
                    BlockCarousel: "BlockCarousel",
                    BlockCarouselTimeline: "BlockCarouselTimeline",
                    BlockCta: "BlockCta",
                    BlockCtaList: "BlockCtaList",
                    BlockCustom: "BlockCustom",
                    BlockIntro: "BlockIntro",
                    BlockTextOffset: "BlockTextOffset",
                    BlockStatistics: "BlockStats",
                    BlockText: "BlockText",
                    BlockTextMulticolumn: "BlockTextMulti",
                    BlockAccordion: "BlockAccordion",
                    BlockQuote: "BlockQuote",
                    BlockPeople: "BlockPeople",
                    BlockFeaturedLink: "BlockFeaturedLink",
                    BlockNews: "BlockNews",
                    BlockQuoteEditorial: "BlockEditorial",
                    BlockLeadership: "BlockLeadership",
                    BlockTable: "BlockTable"
                },
                sn = function(e) {
                    var n = e.__typename;
                    if (void 0 === n) return null;
                    var t = cn[n],
                        r = t ? a[t] : null;
                    return t ? r ? (0, m.jsx)(r, {
                        data: e
                    }) : (console.error("".concat(n, " not exported from components/blocks")), !1) : (console.error("Key ".concat(n, " not found on BLOCK_MAP")), !1)
                };

            function un(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function dn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? un(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : un(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var mn = (0, l.default)((function() {
                return Promise.all([t.e(239), t.e(428)]).then(t.bind(t, 913))
            }), {
                ssr: !1,
                loadableGenerated: {
                    webpack: function() {
                        return [913]
                    },
                    modules: ["../components/templates/TemplateHomepage/index.js -> @/components/ui/Carousel/FeaturedNewsCarousel"]
                }
            });

            function vn(e) {
                var n = e.page,
                    t = n.content.sectionsCollection.items,
                    a = n.content.newsSection.featuredItemsCollection,
                    r = n.content,
                    i = r.isPresentOnPage,
                    l = r.newsSectionTitle;
                return (0, m.jsxs)(s.Z, {
                    page: n,
                    headerSize: "large",
                    isHomePage: !0,
                    children: [t.map((function(e, n) {
                        return (0, m.jsx)(u.Z, dn(dn({}, e), {}, {
                            children: e.blocksCollection.items && e.blocksCollection.items.map((function(e, n) {
                                return (0, m.jsx)(sn, dn({}, e), n)
                            }))
                        }), n)
                    })), et(n.relatedContentCollection) && (0, m.jsx)(u.Z, {
                        sectionHeadline: "Related Content",
                        sectionType: "simple",
                        children: (0, m.jsx)(ve, {
                            data: {
                                itemsCollection: n.relatedContentCollection,
                                orientation: "landscape"
                            }
                        })
                    }), i && a && (0, m.jsx)(u.Z, {
                        children: (0, m.jsxs)("div", {
                            className: "container news-container",
                            children: [(0, m.jsx)("div", {
                                className: "intro__large",
                                children: (0, c.Z)(l)
                            }), (0, m.jsx)(mn, {
                                features: {
                                    items: o(a.items, !1),
                                    hideDate: !0
                                },
                                slug: "news"
                            })]
                        })
                    })]
                })
            }
            var pn = t(6316),
                fn = t(6261),
                hn = t(1163);

            function gn(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function bn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? gn(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : gn(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var jn = (0, l.default)((function() {
                    return Promise.all([t.e(239), t.e(428)]).then(t.bind(t, 913))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [913]
                        },
                        modules: ["../components/templates/TemplateLanding/index.js -> @/components/ui/Carousel/FeaturedNewsCarousel"]
                    }
                }),
                yn = function(e, n) {
                    var t = !1;
                    if (0 !== e) {
                        var a = n[e - 1];
                        if (a.blocksCollection.items.length > 0) {
                            var r = a.blocksCollection.items,
                                i = r[r.length - 1];
                            ("BlockCarousel" === i.__typename && i.background && "Enable background" === i.background[0] || "BlockQuote" === i.__typename || "BlockCta" === i.__typename) && (t = !0)
                        }
                    }
                    return t
                },
                xn = function(e) {
                    var n, t, a = (0, hn.useRouter)(),
                        r = e.page,
                        i = r.content.sectionsCollection.items,
                        l = i.filter((function(e) {
                            return e.inPageNav
                        })),
                        d = null === (n = r.content) || void 0 === n || null === (t = n.newsSection) || void 0 === t ? void 0 : t.featuredItemsCollection,
                        v = null === r || void 0 === r ? void 0 : r.news,
                        p = r.content.newsSectionTitle,
                        f = r.content.heroDisplay,
                        h = (0, pn.wg)(f);
                    return (0, F.useEffect)((function() {
                        a.query.scrollto && fn.OK.scrollTo(a.query.scrollto, {
                            duration: 800,
                            delay: 0,
                            smooth: "easeInOutQuart"
                        })
                    })), (0, m.jsxs)(s.Z, {
                        page: r,
                        navItems: l,
                        headerSize: h,
                        children: [i.map((function(e, n) {
                            var t, a = e.blocksCollection.items.map((function(e) {
                                    return e.__typename && "BlockTable" === e.__typename
                                })).includes(!0),
                                r = yn(n, i),
                                l = e.blocksBackgroundColor;
                            return l && (t = (pn.O9.find((function(e) {
                                return e.name === l
                            })) || {}).color), (0, m.jsx)(u.Z, bn(bn({}, e), {}, {
                                allSections: i,
                                index: n,
                                collapseSpacing: r,
                                isHasTableBlock: a,
                                children: e.blocksCollection.items && e.blocksCollection.items.map((function(e, n) {
                                    return (0, m.jsx)(sn, bn(bn({}, e), {}, {
                                        backgroundColor: t
                                    }), n)
                                }))
                            }), n)
                        })), et(r.relatedContentCollection) && (0, m.jsx)(u.Z, {
                            sectionHeadline: "Go further",
                            sectionType: "simple",
                            children: (0, m.jsx)(ve, {
                                data: {
                                    layout: "equal",
                                    itemsCollection: r.relatedContentCollection,
                                    orientation: "landscape"
                                }
                            })
                        }), (d || v && v.items.length > 0) && (0, m.jsx)(u.Z, {
                            children: (0, m.jsxs)("div", {
                                className: "section-news container",
                                children: [p && (0, m.jsx)("div", {
                                    className: "intro__large",
                                    children: (0, c.Z)(p)
                                }), (0, m.jsx)(jn, {
                                    features: {
                                        items: o((null === d || void 0 === d ? void 0 : d.items) || v.items, !1),
                                        hideDate: !0
                                    },
                                    slug: "news"
                                })]
                            })
                        })]
                    })
                };

            function On(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function wn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? On(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : On(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function kn(e) {
                var n, a, r = e.page,
                    i = null === (n = r.content) || void 0 === n || null === (a = n.sectionsCollection) || void 0 === a ? void 0 : a.items,
                    o = i.filter((function(e) {
                        return e.inPageNav
                    })),
                    c = (0, l.default)((function() {
                        return Promise.all([t.e(239), t.e(302)]).then(t.bind(t, 1358))
                    }), {
                        ssr: !1,
                        loadableGenerated: {
                            webpack: function() {
                                return [1358]
                            },
                            modules: ["../components/templates/TemplateListing/types/NewsListing/index.js -> ./NewsListingContent"]
                        }
                    });
                return (0, m.jsxs)(s.Z, {
                    page: r,
                    navItems: o,
                    headerSize: "small",
                    children: [(0, m.jsx)(c, wn({}, e)), i && i.map((function(e, n) {
                        return (0, m.jsx)(u.Z, wn(wn({}, e), {}, {
                            children: e.blocksCollection.items && e.blocksCollection.items.map((function(e, n) {
                                return (0, m.jsx)(sn, wn({}, e), n)
                            }))
                        }), n)
                    }))]
                })
            }
            var Cn = {
                    news: "NewsListing"
                },
                Pn = function(e) {
                    var n = e.page,
                        t = Cn[n.listingType],
                        a = t ? r[t] : null;
                    return t ? a ? (0, m.jsx)(a, {
                        page: n
                    }) : (console.warn("".concat(t, ".js not exported from components/Listing")), !1) : (console.error("Key ".concat(n.listingType, " not found on LISTING_MAP")), !1)
                };

            function Sn(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function _n(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Sn(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Sn(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function Nn(e) {
                return (0, m.jsx)(F.Fragment, {
                    children: (0, m.jsx)(Pn, _n({}, e))
                })
            }
            var En = t(1879);

            function Tn(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function Dn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Tn(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Tn(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var Zn = function(e) {
                return (0, m.jsx)("svg", Dn(Dn({}, e), {}, {
                    children: (0, m.jsx)("path", {
                        d: "M25 10.654c-.627.283-1.3.474-2.003.56a3.547 3.547 0 0 0 1.533-1.959c-.673.407-1.42.7-2.217.862A3.452 3.452 0 0 0 19.77 9c-1.924 0-3.487 1.583-3.487 3.537 0 .273.031.544.091.801a9.873 9.873 0 0 1-7.19-3.691 3.546 3.546 0 0 0-.474 1.775c0 1.228.618 2.306 1.553 2.942a3.449 3.449 0 0 1-1.58-.442v.044c0 1.713 1.203 3.143 2.797 3.465a3.44 3.44 0 0 1-1.573.063c.445 1.404 1.733 2.426 3.259 2.453A6.954 6.954 0 0 1 8 21.41 9.764 9.764 0 0 0 13.347 23c6.41 0 9.92-5.385 9.92-10.056 0-.153 0-.307-.006-.459A7.118 7.118 0 0 0 25 10.655Z",
                        fill: "#fff"
                    })
                }))
            };
            Zn.defaultProps = {
                width: "32",
                height: "32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            };
            var Bn = function(e) {
                return (0, m.jsxs)("svg", Dn(Dn({}, e), {}, {
                    children: [(0, m.jsx)("path", {
                        d: "M24.5 22.999h-3.365v-5.295c0-1.263-.023-2.887-1.75-2.887-1.752 0-2.02 1.375-2.02 2.795V23H14V12.11h3.23v1.487h.045c.45-.856 1.548-1.758 3.186-1.758 3.41 0 4.039 2.255 4.039 5.186V23ZM8.25 23h3.5V12h-3.5v11Z",
                        fill: "#fff"
                    }), (0, m.jsx)("circle", {
                        cx: "10",
                        cy: "8",
                        r: "2",
                        fill: "#fff"
                    })]
                }))
            };
            Bn.defaultProps = {
                width: "32",
                height: "32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            };
            var Rn = function(e) {
                return (0, m.jsx)("svg", Dn(Dn({}, e), {}, {
                    children: (0, m.jsx)("path", {
                        d: "M16.5 25H13v-9.001h-2l.005-3h2L13 11.035C13 8.505 13.92 7 16.915 7H19.5v3.103h-1.651c-1.166 0-1.345.433-1.345 1.242V13h2.925l-.335 3h-2.595l.001 9Z",
                        fill: "#fff"
                    })
                }))
            };
            Rn.defaultProps = {
                width: "32",
                height: "32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            };
            var Mn = function(e) {
                return (0, m.jsxs)("svg", Dn(Dn({}, e), {}, {
                    children: [(0, m.jsx)("path", {
                        d: "m17.377 10.381-2.798 2.798-1.414-1.414 2.798-2.798c1.931-1.932 5.08-1.914 7.033.038 1.952 1.953 1.97 5.102.038 7.033l-2.798 2.798-1.414-1.414 2.797-2.798c1.16-1.159 1.15-3.048-.022-4.22-1.172-1.171-3.061-1.182-4.22-.023ZM11.766 13.164l1.414 1.414-2.798 2.798c-1.159 1.159-1.148 3.048.023 4.22 1.172 1.171 3.061 1.181 4.22.023l2.798-2.798 1.414 1.414-2.798 2.798c-1.931 1.931-5.08 1.914-7.033-.039-1.952-1.952-1.97-5.1-.038-7.032l2.798-2.798Z",
                        fill: "#fff"
                    }), (0, m.jsx)("path", {
                        d: "m18.092 12.495-5.596 5.596 1.414 1.414 5.596-5.596-1.414-1.414Z",
                        fill: "#fff"
                    })]
                }))
            };
            Mn.defaultProps = {
                width: "32",
                height: "32",
                fill: "none"
            };
            var Fn = function(e) {
                    switch (e.type) {
                        case "facebook":
                            return (0, m.jsx)(Rn, {});
                        case "linkedin":
                            return (0, m.jsx)(Bn, {});
                        case "twitter":
                            return (0, m.jsx)(Zn, {});
                        case "link":
                            return (0, m.jsx)(Mn, {});
                        default:
                            return !1
                    }
                },
                In = t(6573),
                Ln = t(8799),
                An = t(3597),
                Gn = function(e) {
                    var n = e.title,
                        t = e.url,
                        a = e.description,
                        r = e.copyLink;
                    return (0, m.jsxs)("ul", {
                        className: "link-list",
                        children: [(0, m.jsx)("li", {
                            children: (0, m.jsx)(In.Z, {
                                "aria-label": "Share on Facebook",
                                className: "round-button",
                                resetButtonStyle: !1,
                                quote: n,
                                url: t,
                                children: (0, m.jsx)(Fn, {
                                    type: "facebook"
                                })
                            })
                        }), (0, m.jsx)("li", {
                            children: (0, m.jsx)(Ln.Z, {
                                "aria-label": "Share on Twitter",
                                className: "round-button",
                                resetButtonStyle: !1,
                                title: n,
                                url: t,
                                children: (0, m.jsx)(Fn, {
                                    type: "twitter"
                                })
                            })
                        }), (0, m.jsx)("li", {
                            children: (0, m.jsx)(An.Z, {
                                "aria-label": "Share on LinkedIn",
                                className: "round-button",
                                resetButtonStyle: !1,
                                title: n,
                                description: a,
                                url: t,
                                children: (0, m.jsx)(Fn, {
                                    type: "linkedin"
                                })
                            })
                        }), r && (0, m.jsx)("li", {
                            children: (0, m.jsx)(Ee, {
                                label: "Copy link",
                                onClick: function() {
                                    navigator.clipboard.writeText(t)
                                },
                                children: (0, m.jsx)(Fn, {
                                    type: "link"
                                })
                            })
                        })]
                    })
                },
                Hn = function(e) {
                    var n = e.children,
                        t = e.newsSubheading,
                        a = e.dateToDisplay;
                    return (0, m.jsxs)("div", {
                        className: "news-page-social-wrp",
                        children: [(0, m.jsxs)("div", {
                            className: "subheading-date-wrp",
                            children: [(0, m.jsx)("div", {
                                className: "subheading-news-article",
                                children: t
                            }), (0, m.jsx)("div", {
                                className: "date-news-article",
                                children: a
                            })]
                        }), n]
                    })
                },
                qn = function() {
                    var e = (0, hn.useRouter)(),
                        n = (0, F.useState)(null),
                        t = n[0],
                        a = n[1];
                    return (0, F.useEffect)((function() {
                        a(window.location.href)
                    }), [e]), {
                        url: t
                    }
                };

            function Wn(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function Un(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Wn(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Wn(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var Vn = function(e) {
                    var n, t, a, r, i = e.page,
                        l = e.type,
                        o = i.content,
                        c = qn().url,
                        s = i.publicationDate && new Date(i.publicationDate),
                        u = s ? s.toLocaleString("default", {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }) : "";
                    return o.headline || o.media ? (0, m.jsxs)("div", {
                        className: "detail-intro detail-intro--".concat(l),
                        children: [o.media && "image" === (0, he.Z)(o.media) && (0, m.jsx)("div", {
                            className: "detail-intro__media",
                            children: (0, m.jsx)("img", {
                                src: null === o || void 0 === o || null === (n = o.media) || void 0 === n || null === (t = n.image) || void 0 === t ? void 0 : t.url,
                                alt: null === o || void 0 === o || null === (a = o.media) || void 0 === a || null === (r = a.image) || void 0 === r ? void 0 : r.description
                            })
                        }), (0, m.jsxs)("div", {
                            className: "detail-intro__content container",
                            children: [(0, m.jsx)(Hn, {
                                newsSubheading: null === i || void 0 === i ? void 0 : i.newsSubheading,
                                dateToDisplay: u,
                                children: (0, m.jsx)(Gn, {
                                    title: i.title,
                                    description: i.description,
                                    url: c,
                                    copyLink: !0
                                })
                            }), o.headline && (0, m.jsx)("div", {
                                className: "detail-intro__description",
                                children: (0, m.jsx)(ne.Z, {
                                    document: o.headline
                                })
                            }), i.cta && (0, m.jsxs)("div", {
                                className: "detail-intro__actions detail-intro__cta",
                                children: [(0, m.jsx)("p", {
                                    children: i.ctaText
                                }), (0, m.jsx)(En.d, Un({}, i.cta))]
                            })]
                        })]
                    }) : (0, m.jsx)("div", {
                        className: "detail-intro detail-intro--empty",
                        children: (0, m.jsx)("div", {
                            className: "detail-intro__media",
                            children: (0, m.jsx)("div", {
                                className: "detail-intro__content container",
                                children: (0, m.jsx)(Hn, {
                                    newsSubheading: null === i || void 0 === i ? void 0 : i.newsSubheading,
                                    dateToDisplay: u,
                                    children: (0, m.jsx)(Gn, {
                                        title: i.title,
                                        description: i.description,
                                        url: c,
                                        copyLink: !0
                                    })
                                })
                            })
                        })
                    })
                },
                Yn = t(7714),
                zn = t(6879);

            function Qn(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function Kn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Qn(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qn(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var Jn = function(e) {
                var n = e.title,
                    t = e.cta,
                    a = e.page,
                    r = (0, qe.Z)(),
                    i = r.width,
                    l = r.breakpoint,
                    o = (0, F.useState)(!1),
                    c = o[0],
                    s = o[1],
                    u = (0, F.useState)(0),
                    d = u[0],
                    v = u[1],
                    p = (0, F.useState)(0),
                    f = p[0],
                    h = p[1],
                    g = (0, F.useRef)(),
                    b = qn().url,
                    j = t,
                    y = function() {
                        var e = g.current;
                        if ("small" !== l) {
                            var n = e.querySelector(".article-sticky__actions"),
                                t = e.querySelector(".article-sticky__actions"),
                                a = window.innerWidth,
                                r = a - t.offsetWidth - n.offsetWidth - 24;
                            if (j) h(t.offsetWidth + 12), v(r);
                            else if ("medium" === l || "large" === l) {
                                h(12);
                                var i = a - n.offsetWidth - 24;
                                v(i)
                            } else h(t.offsetWidth + 12), v(r)
                        }
                    };
                return (0, F.useEffect)((function() {
                    y()
                }), [c]), (0, F.useEffect)((function() {
                    y()
                }), [i]), (0, Yn.R)((function() {
                    var e = (0, zn.Z)(document.querySelector(".intro__header"));
                    window.scrollY >= e.bottom - 40 ? s(!0) : s(!1)
                })), (0, m.jsxs)("div", {
                    className: "article-sticky ".concat(j ? "" : "article-sticky--no-cta", " ").concat(c ? "article-sticky--visible" : ""),
                    ref: g,
                    children: [t && (0, m.jsx)("div", {
                        className: "article-sticky__cta",
                        children: (0, m.jsx)(En.d, Kn({}, t))
                    }), (0, m.jsx)("div", {
                        className: "article-sticky__title",
                        style: {
                            width: "".concat(d, "px"),
                            left: "".concat(f, "px")
                        },
                        children: n
                    }), (0, m.jsx)("div", {
                        className: "article-sticky__actions",
                        children: (0, m.jsx)(Gn, {
                            title: a.title,
                            description: a.description,
                            url: b,
                            copyLink: !0
                        })
                    })]
                })
            };

            function Xn(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function $n(e) {
                var n, t = e.page,
                    a = !1,
                    r = "generic";
                return "NewsArticle" === t.__typename ? (r = "group-news", a = !0) : r = "CaseStudy" === t.__typename ? "case-study" : "basic", (0, m.jsxs)(F.Fragment, {
                    children: [(0, m.jsx)(Jn, {
                        title: (null === t || void 0 === t || null === (n = t.content) || void 0 === n ? void 0 : n.heroHeadline) || t.title,
                        type: r,
                        page: t,
                        cta: t.cta
                    }), (0, m.jsxs)(s.Z, {
                        page: t,
                        headerSize: "small",
                        children: [(0, m.jsx)(Vn, {
                            type: r,
                            page: t,
                            pageType: t.__typename
                        }), (0, m.jsx)(u.Z, {
                            sectionHeadline: "Main Content",
                            sectionType: "simple",
                            hideIntro: !0,
                            children: t.content.blocksCollection.items && t.content.blocksCollection.items.map((function(e, n) {
                                return (0, m.jsx)(sn, function(e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var t = null != arguments[n] ? arguments[n] : {};
                                        n % 2 ? Xn(Object(t), !0).forEach((function(n) {
                                            (0, i.Z)(e, n, t[n])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xn(Object(t)).forEach((function(n) {
                                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                                        }))
                                    }
                                    return e
                                }({}, e), n)
                            }))
                        }), et(t.relatedContentCollection) && (0, m.jsx)(u.Z, {
                            sectionType: "simple",
                            children: a ? (0, m.jsx)(Me, {
                                loading: !0,
                                data: {
                                    itemsCollection: t.relatedContentCollection,
                                    hasBackground: !1
                                }
                            }) : (0, m.jsx)(ve, {
                                data: {
                                    layout: "equal",
                                    itemsCollection: t.relatedContentCollection,
                                    orientation: "landscape"
                                }
                            })
                        })]
                    })]
                })
            }
            var et = function(e) {
                return e.items.length > 0
            }
        },
        6555: function(e, n, t) {
            var a = t(2809),
                r = t(9131),
                i = t(1879),
                l = t(6949),
                o = t(150),
                c = t(5893);

            function s(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function u(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? s(Object(t), !0).forEach((function(n) {
                        (0, a.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            n.Z = function(e) {
                var n = (0, o.Z)(e),
                    t = n.cta,
                    a = n.subheadline,
                    s = n.cardHeadline,
                    d = n.hasInlineCta,
                    m = n.type,
                    v = n.url,
                    p = n.shape,
                    f = ["card"];
                return m && f.push("card--".concat(m)), p && f.push("card--ghost--".concat(p)), (0, c.jsx)(l.Z, {
                    url: v,
                    children: (0, c.jsx)("div", {
                        className: "".concat(f.join(" ")),
                        children: (0, c.jsxs)("div", {
                            className: "card--ghost__inner",
                            children: [(0, c.jsxs)("div", {
                                className: "card__content",
                                children: [s && (0, r.Z)("\n              <h3 class='card__title'>".concat(s, "</h3>\n            ")), a && (0, r.Z)("\n              <p class='card__subtitle'>".concat(a, "</p>\n            "))]
                            }), d && t ? (0, c.jsx)("div", {
                                className: "card__cta",
                                children: (0, c.jsx)(i.d, u(u({}, t), {}, {
                                    displayOnly: !0
                                }))
                            }) : null]
                        })
                    })
                })
            }
        },
        1543: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return c
                }
            });
            var a = t(6949),
                r = function(e) {
                    return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][e.getMonth()]
                },
                i = function(e) {
                    return e.getFullYear()
                },
                l = t(2941),
                o = t(5893),
                c = function(e) {
                    var n, t = e.image,
                        c = e.title,
                        s = e.date,
                        u = e.category,
                        d = e.slug,
                        m = e.isInCarousel,
                        v = e.description,
                        p = s && new Date(s),
                        f = "/group-news/".concat(u.slug, "/").concat(d);
                    return (0, o.jsxs)("div", {
                        className: "news-card",
                        children: [t && (0, o.jsx)("div", {
                            className: "news-card__media",
                            children: (0, o.jsx)(a.Z, {
                                url: f,
                                attr: c,
                                children: m ? (0, o.jsx)(l.Z, {
                                    type: "news-carousel",
                                    src: t.image.url,
                                    alt: (null === t || void 0 === t ? void 0 : t.alt) || t.image.description || "news card",
                                    title: (null === t || void 0 === t ? void 0 : t.title) || t.image.title,
                                    caption: null === t || void 0 === t ? void 0 : t.caption
                                }) : (0, o.jsx)(l.Z, {
                                    src: t.image.url,
                                    caption: null === t || void 0 === t ? void 0 : t.caption,
                                    title: (null === t || void 0 === t ? void 0 : t.title) || t.image.title,
                                    alt: (null === t || void 0 === t ? void 0 : t.alt) || t.image.description || "news card",
                                    lowRes: null === t || void 0 === t || null === (n = t.lqip) || void 0 === n ? void 0 : n.image
                                })
                            })
                        }), (0, o.jsxs)("div", {
                            className: "news-card__content",
                            children: [(0, o.jsxs)("div", {
                                className: "news-card__info",
                                children: [u && (0, o.jsx)("div", {
                                    className: "news-card__category",
                                    children: u.title
                                }), (0, o.jsx)("div", {
                                    className: "news-card__date",
                                    children: p && "".concat(r(p), " ").concat(i(p))
                                })]
                            }), (0, o.jsx)("h3", {
                                className: "news-card__title",
                                children: (0, o.jsx)(a.Z, {
                                    url: f,
                                    children: c
                                })
                            }), (0, o.jsx)("p", {
                                className: "news-card__description",
                                children: v
                            })]
                        })]
                    })
                }
        },
        580: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return v
                }
            });
            var a = t(2809),
                r = t(9131),
                i = t(2941),
                l = t(5893),
                o = function(e) {
                    var n = e.orientation,
                        t = e.image,
                        a = "image";
                    "landscape" === n && (a = "imageLandscape"), "person" === n && (a = "imagePerson"), "square" === n && (a = "imageSquare");
                    var r = t[a] ? t[a] : t.image,
                        o = ["recirculation-image"];
                    return n && o.push("recirculation-image--".concat(n)), (0, l.jsx)("div", {
                        className: o.join(" "),
                        children: (0, l.jsx)(i.Z, {
                            src: null === r || void 0 === r ? void 0 : r.url,
                            caption: null === t || void 0 === t ? void 0 : t.caption,
                            title: (null === t || void 0 === t ? void 0 : t.title) || t.image.title,
                            alt: (null === t || void 0 === t ? void 0 : t.alt) || t.image.description || "grid item"
                        })
                    })
                },
                c = t(1879),
                s = t(6949),
                u = t(150);

            function d(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function m(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? d(Object(t), !0).forEach((function(n) {
                        (0, a.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var v = function(e) {
                var n = (0, u.Z)(e),
                    t = n.image,
                    a = n.cta,
                    i = n.subheadline,
                    d = n.cardHeadline,
                    v = n.url,
                    p = n.isDownload,
                    f = n.isExternal,
                    h = n.italicSubtitle,
                    g = n.hasCta,
                    b = n.hasInlineCta,
                    j = n.hasAfterTextCta,
                    y = n.orientation,
                    x = n.type,
                    O = n.description,
                    w = ["card"];
                return x && w.push("card--".concat(x)), y && w.push("card--".concat(y)), (0, l.jsxs)("div", {
                    className: "".concat(w.join(" ")),
                    children: [t && (0, l.jsxs)("div", {
                        className: "card__image",
                        children: [(0, l.jsx)(s.Z, {
                            url: v,
                            isExternal: f,
                            isDownload: p,
                            attr: d || "Card link",
                            children: (0, l.jsx)(o, {
                                image: t,
                                orientation: y
                            })
                        }), g && !j && !b && (0, l.jsx)(c.d, m(m({}, a), {}, {
                            type: "dark"
                        }))]
                    }), (0, l.jsxs)("div", {
                        className: "card__content",
                        children: [(0, l.jsxs)(s.Z, {
                            url: v,
                            isExternal: f,
                            isDownload: p,
                            attr: d || "Card link",
                            children: [d && (0, r.Z)("\n            <h3 class='card__title'>".concat(d, "</h3>\n          ")), h ? (0, l.jsx)("div", {
                                className: "card__subtitle__italic",
                                children: h
                            }) : (0, l.jsx)("br", {}), i && (0, r.Z)("\n            <p class='card__subtitle'>".concat(i, "</p>\n          "))]
                        }), O && (0, l.jsx)("p", {
                            className: "card__desc",
                            children: O
                        }), j && a && (0, l.jsx)("div", {
                            className: "card__after-text-cta",
                            children: (0, l.jsx)(c.d, m({}, a))
                        })]
                    }), b && !j && a ? (0, l.jsx)("div", {
                        className: "card__cta",
                        children: (0, l.jsx)(c.d, m({}, a))
                    }) : null]
                })
            }
        },
        150: function(e, n, t) {
            var a = t(2809),
                r = t(1879),
                i = t(3444),
                l = t.n(i);

            function o(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function c(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? o(Object(t), !0).forEach((function(n) {
                        (0, a.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            n.Z = function(e) {
                var n = e.headline,
                    t = e.entry,
                    a = e.cta,
                    i = e.type,
                    o = {
                        cardHeadline: n || e.cardHeadline
                    };
                return !n && t && (o.cardHeadline = t.title), e.title && (o.cardHeadline = e.title), e.entry && !e.cta && (o.url = e.entry.permalink), e.cta && (o.url = (0, r.g)(e.cta), o.isDownload = a.download && !0, o.isExternal = (a.url || o.isDownload) && !0), e.permalink && (o.url = e.permalink), !o.url && a && (o.url = (0, r.g)(a)), e.cta && (o.hasCta = !0, o.cta, e.cta), o.url || (o.hasCta = !1), o.url && l()(o.url) ? o.hasCta = !0 : o.hasCta = !1, o.description = null, i && ("ghost" === i && e.cta && (o.cta = c(c({}, e.cta), {}, {
                    type: "secondary"
                })), "list" !== i && "compact" !== i || (o.hasAfterTextCta = !0, o.description = o.description = e.description), "compact" !== i && "ghost" !== i || (o.hasInlineCta = !0, o.image = null)), c(c({}, e), o)
            }
        },
        4375: function(e, n, t) {
            var a = t(2809),
                r = t(2941),
                i = t(6100),
                l = t(4954),
                o = t(5893);

            function c(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function s(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? c(Object(t), !0).forEach((function(n) {
                        (0, a.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            n.Z = function(e) {
                var n = e.media,
                    t = e.caption,
                    a = e.type,
                    c = (null === n || void 0 === n ? void 0 : n.caption) || t,
                    u = ["media"];
                return a && u.push("media--".concat(a)), (0, o.jsxs)("div", {
                    className: u.join(" "),
                    children: [(0, o.jsxs)("div", {
                        className: "media__item",
                        children: ["video" === a && (0, o.jsx)(i.Z, s({}, n)), "image" === a && (0, o.jsx)(r.Z, {
                            src: n.image.url,
                            lowRes: n.lqip ? n.lqip.image : null,
                            title: n.title || n.image.title,
                            alt: (null === n || void 0 === n ? void 0 : n.alt) || n.image.description || "Media image"
                        })]
                    }), c && (0, o.jsx)("div", {
                        className: "media__caption",
                        children: (0, o.jsx)(l.Z, {
                            document: c
                        })
                    })]
                })
            }
        },
        8769: function(e, n, t) {
            var a = t(1543),
                r = t(7969),
                i = t(5893);
            n.Z = function(e) {
                var n = e.items,
                    t = e.hasBackground,
                    l = e.viewAll,
                    o = e.title;
                return (0, i.jsx)("div", {
                    className: "news-grid-module\n      ".concat(t ? "news-grid-module--bg" : "", "\n      ").concat(n.length > 0 ? "loaded" : ""),
                    children: (0, i.jsxs)("div", {
                        className: "container",
                        children: [o && (0, i.jsx)("h2", {
                            children: o
                        }), n.map((function(e, n) {
                            return null === e ? null : (0, i.jsx)(a.Z, {
                                image: e.image,
                                title: e.title,
                                date: e.publicationDate,
                                category: e.category,
                                slug: e.slug,
                                isInCarousel: !1
                            }, n)
                        })), l && (0, i.jsx)("div", {
                            className: "news-grid-module__cta",
                            children: (0, i.jsx)(r.Z, {
                                url: "/group-news",
                                text: "See all News",
                                formal: !0,
                                arrow: !0
                            })
                        })]
                    })
                })
            }
        },
        5036: function(e, n, t) {
            var a = t(9131),
                r = t(1220),
                i = t(2150),
                l = t(5893),
                o = function(e) {
                    var n = e.author;
                    return (0, l.jsxs)("div", {
                        className: "quote__attr",
                        children: [n.firstName && (0, l.jsxs)("p", {
                            className: "quote__attr__title",
                            children: [n.firstName, " ", n.lastName]
                        }), n.role && (0, a.Z)("\n        <p class='quote__attr__title'>".concat(n.role, "</p>\n      "))]
                    })
                },
                c = function(e) {
                    var n = e.image;
                    return (0, l.jsx)("div", {
                        className: "quote__image",
                        children: (0, l.jsx)("div", {
                            className: "quote__image-container",
                            children: (0, l.jsx)("img", {
                                src: n.image && n.image.url,
                                title: (null === n || void 0 === n ? void 0 : n.title) || n.image.title,
                                alt: (null === n || void 0 === n ? void 0 : n.alt) || n.image.description || "Author of the quote"
                            })
                        })
                    })
                };
            n.Z = function(e) {
                var n = e.text,
                    t = e.bgColor,
                    a = e.image,
                    s = i.v.filter((function(e) {
                        return e.name === t
                    }))[0],
                    u = ["quote"];
                return null !== s && void 0 !== s && s.isDarkBg && u.push("quote--darkBg"), (0, l.jsx)("div", {
                    className: u.join(" "),
                    style: {
                        backgroundColor: "".concat(null === s || void 0 === s ? void 0 : s.hex)
                    },
                    children: (0, l.jsxs)("div", {
                        className: "quote__wrapper container ".concat(a ? "" : "fullWidth"),
                        children: [(0, l.jsxs)("div", {
                            className: "quote__content",
                            children: [(0, l.jsx)("div", {
                                className: "quote__text",
                                children: (0, l.jsx)(r.Z, {
                                    document: n
                                })
                            }), e.author && (0, l.jsx)(o, {
                                author: e.author
                            })]
                        }), a && (0, l.jsx)(c, {
                            image: a
                        })]
                    })
                })
            }
        },
        2150: function(e, n, t) {
            t.d(n, {
                v: function() {
                    return a
                }
            });
            var a = [{
                name: "Chicago (blue)",
                hex: "#E1E4F4",
                isDarkBg: !1
            }, {
                name: "Gray",
                hex: "#F5F4EF",
                isDarkBg: !1
            }, {
                name: "Singapore (orange)",
                hex: "#F8E8DD",
                isDarkBg: !1
            }, {
                name: "Paris (green)",
                hex: "#E0EBEB",
                isDarkBg: !1
            }]
        },
        1220: function(e, n, t) {
            var a = t(4954),
                r = t(5893);
            n.Z = function(e) {
                return (0, r.jsx)("div", {
                    className: "rt-module",
                    children: e.document ? (0, r.jsx)(a.Z, {
                        document: e.document
                    }) : e.children
                })
            }
        },
        4613: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return f
                }
            });
            var a = t(2809),
                r = t(7294),
                i = t(37),
                l = function(e, n) {
                    var t = function() {
                            return e.current && {
                                width: e.current.offsetWidth,
                                height: e.current.offsetHeight
                            }
                        },
                        a = (0, r.useState)({
                            width: 0,
                            height: 0
                        }),
                        l = a[0],
                        o = a[1];
                    return (0, r.useEffect)((function() {
                        var n = new ResizeObserver((function() {
                            return o(t())
                        }));
                        return e.current && (o(t()), n.observe(e.current)),
                            function() {
                                return n.disconnect()
                            }
                    }), [e.current].concat((0, i.Z)(n))), l
                },
                o = t(4954),
                c = t(4375),
                s = t(2062),
                u = t(5893),
                d = function(e) {
                    return e.isFullWidth ? (0, u.jsx)("div", {
                        className: "intro__content-wrapper",
                        children: e.children
                    }) : e.children
                },
                m = function(e) {
                    var n, t, a, i, m, v = e.mediaFullWidth,
                        p = e.introMedia,
                        f = e.fullScreenWidth,
                        h = e.mediaPositionBeforeText,
                        g = void 0 === h || h,
                        b = e.headline,
                        j = e.displayHeadline,
                        y = e.hideIntro,
                        x = e.sectionHeadline,
                        O = e.setHeightHeadLine,
                        w = (0, r.useRef)(),
                        k = null === (n = l(w, [j, b, x])) || void 0 === n ? void 0 : n.height,
                        C = (0, r.useState)(!0),
                        P = C[0],
                        S = C[1],
                        _ = function() {
                            window.innerWidth <= 425 ? S(!1) : S(!0)
                        },
                        N = [];
                    p ? (N.push("section-intro--image-bottom-indent"), v ? N.push("section-intro--full-image") : N.push("section-intro--basic-image")) : N.push("section-intro--no-image"), j && N.push("section-intro--has-display"), y && N.push("section-intro--hidden");
                    var E = function() {
                        return (0, u.jsx)("div", {
                            className: "intro__media",
                            children: (0, u.jsx)(c.Z, {
                                media: p,
                                type: (0, s.Z)(p)
                            })
                        })
                    };
                    return (0, r.useEffect)((function() {
                        return k && (_(), O(k)), k && window.addEventListener("resize", _),
                            function() {
                                return window.removeEventListener("resize", _)
                            }
                    }), [k]), (0, u.jsx)("div", {
                        className: "section-intro\n        ".concat(!g && "section-intro__clear-top-indent", "\n        ").concat(N.join(" "), "\n      "),
                        children: (0, u.jsxs)("div", {
                            className: "section-intro__content",
                            children: [g && f && p && (0, u.jsx)("div", {
                                className: "hero-container",
                                children: P || !p.imageMobile ? (0, u.jsx)("img", {
                                    src: p && p.image && "".concat(p.image.url, "?h=494"),
                                    title: (null === p || void 0 === p ? void 0 : p.title) || (null === p || void 0 === p || null === (t = p.image) || void 0 === t ? void 0 : t.title),
                                    alt: (null === p || void 0 === p ? void 0 : p.alt) || (null === p || void 0 === p || null === (a = p.image) || void 0 === a ? void 0 : a.description) || "Media image",
                                    style: {
                                        margin: "auto",
                                        display: "block"
                                    },
                                    className: "section-image hero-desktop-image"
                                }) : (0, u.jsx)("img", {
                                    alt: (null === p || void 0 === p ? void 0 : p.alt) || (null === p || void 0 === p || null === (i = p.image) || void 0 === i ? void 0 : i.description) || "Media image",
                                    src: p && p.imageMobile.url,
                                    title: (null === p || void 0 === p ? void 0 : p.title) || (null === p || void 0 === p || null === (m = p.image) || void 0 === m ? void 0 : m.title),
                                    className: "hero-mobile-image"
                                })
                            }), (0, u.jsxs)("div", {
                                className: "container",
                                children: [g && !f && p && E(), (0, u.jsxs)(d, {
                                    isFullWidth: v,
                                    children: [(0, u.jsx)("div", {
                                        className: "intro__header",
                                        ref: w,
                                        children: (0, u.jsx)("h2", {
                                            className: "intro__title",
                                            children: x
                                        })
                                    }), (j || b) && (0, u.jsxs)("div", {
                                        className: "intro__content",
                                        children: [j ? (0, u.jsx)("div", {
                                            className: "intro__large",
                                            children: j
                                        }) : null, b && (0, u.jsx)("div", {
                                            className: "intro__text",
                                            children: (0, u.jsx)(o.Z, {
                                                document: b
                                            })
                                        })]
                                    })]
                                }), !g && !f && p && (0, u.jsxs)(u.Fragment, {
                                    children: [(0, u.jsx)("div", {
                                        className: "intro__spacer"
                                    }), E()]
                                })]
                            })]
                        })
                    })
                };

            function v(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function p(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? v(Object(t), !0).forEach((function(n) {
                        (0, a.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var f = function(e) {
                var n = e.sectionType,
                    t = e.slug,
                    a = e.sectionHeadline,
                    i = e.introMedia,
                    l = e.mediaFullWidth,
                    o = e.fullScreenWidth,
                    c = e.displayHeadline,
                    s = e.headline,
                    d = e.collapseSpacing,
                    v = e.isHasTableBlock,
                    f = ["section", "content"],
                    h = !(i && !o && !l || s || c) || i && !s && !c && window.innerWidth > 599 && window.innerWidth <= 899,
                    g = (0, r.useState)(0),
                    b = g[0],
                    j = g[1];
                return n && f.push("section--".concat(n)), d && f.push("section--collapse-spacing"), (0, u.jsxs)("section", {
                    "data-id": t,
                    className: "".concat(v && "alignment-for-table-block", " ").concat(f.join(" ")),
                    children: [(0, u.jsx)("div", {
                        className: "section-id-placeholder",
                        id: t || ""
                    }), t && (0, u.jsx)("div", {
                        className: "section__anchor"
                    }), a && (0, u.jsx)(m, p({
                        setHeightHeadLine: j
                    }, e)), (0, u.jsx)("div", {
                        className: "section__content",
                        style: h && "simple" !== n && b > 0 ? {
                            marginTop: "-".concat(b, "px")
                        } : null,
                        children: e.children
                    })]
                })
            }
        },
        7790: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return i
                }
            });
            var a = t(5893),
                r = function(e) {
                    var n = e.statistic,
                        t = e.label,
                        r = e.footnote;
                    return (0, a.jsxs)("div", {
                        className: "statistic",
                        children: [n && (0, a.jsx)("div", {
                            className: "statistic__num",
                            children: (0, a.jsx)("span", {
                                children: n
                            })
                        }), t && (0, a.jsxs)("div", {
                            className: "statistic__label",
                            children: [(0, a.jsx)("p", {
                                children: t
                            }), r && (0, a.jsxs)("p", {
                                className: "statistic__footnote",
                                children: ["*", r]
                            })]
                        })]
                    })
                },
                i = function(e) {
                    var n = e.stats;
                    return (0, a.jsx)("div", {
                        className: "stats",
                        children: (0, a.jsx)("div", {
                            className: "stats__content",
                            children: n.map((function(e, n) {
                                return (0, a.jsx)(r, {
                                    statistic: e.statistic,
                                    label: e.description,
                                    footnote: null === e || void 0 === e ? void 0 : e.footnote
                                }, n)
                            }))
                        })
                    })
                }
        },
        3e3: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return d
                }
            });
            var a = t(7969),
                r = t(1555),
                i = t(2277),
                l = t(7294),
                o = t(6261),
                c = t(5893),
                s = function(e) {
                    var n = e.tabs,
                        t = e.setCurrentTab,
                        s = e.currentTab,
                        u = e.viewAll,
                        d = e.select,
                        m = e.allLabel,
                        v = e.label;
                    (0, l.useEffect)((function() {
                        t(0)
                    }), []);
                    var p = function(e) {
                        return e === s
                    };
                    return (0, c.jsxs)("div", {
                        className: "nav",
                        children: [d && (0, c.jsx)(r.Z, {
                            label: v,
                            options: function() {
                                var e = n.map((function(e, n) {
                                    return {
                                        name: e,
                                        value: n
                                    }
                                }));
                                return u && e.unshift({
                                    name: m || "View All",
                                    value: i.G
                                }), e
                            }(),
                            onChange: function(e) {
                                var n = parseInt(e.target.value);
                                t(n)
                            }
                        }), !d && (0, c.jsxs)("div", {
                            className: "nav__scroll",
                            children: [(0, c.jsx)("div", {
                                className: "nav__overflow"
                            }), (0, c.jsxs)("ul", {
                                className: "nav__list",
                                children: [v && (0, c.jsx)("li", {
                                    className: "nav__label",
                                    children: v
                                }), n.map((function(e, n) {
                                    return (0, c.jsx)("li", {
                                        onClick: function() {
                                            return function(e) {
                                                t(e), o.OK.scrollTo("offices-section", {
                                                    duration: 800,
                                                    delay: 0,
                                                    offset: -75,
                                                    smooth: "easeInOutQuart",
                                                    spy: !0,
                                                    isDynamic: !0
                                                })
                                            }(n)
                                        },
                                        className: "nav__item ".concat(p(n) ? "is-active" : ""),
                                        children: (0, c.jsx)(a.Z, {
                                            formal: !0,
                                            active: p(n),
                                            children: e
                                        })
                                    }, n)
                                }))]
                            })]
                        })]
                    })
                },
                u = (0, l.forwardRef)((function(e, n) {
                    return (0, c.jsx)("div", {
                        className: "tab-box__section",
                        ref: n,
                        children: e.children
                    })
                })),
                d = function(e) {
                    var n = e.tabs,
                        t = e.initialState,
                        a = e.viewAll,
                        r = e.tabChanged,
                        o = e.select,
                        d = e.label,
                        m = e.tabsSlug,
                        v = (0, i.Z)(t, a),
                        p = v.currentTab,
                        f = v.setCurrentTab,
                        h = v.setRef;
                    return (0, l.useEffect)((function() {
                        r && r(p)
                    }), [p]), (0, c.jsxs)("div", {
                        className: "tab-box",
                        children: [(0, c.jsx)(s, {
                            label: d,
                            tabs: n,
                            currentTab: p,
                            setCurrentTab: f,
                            viewAll: a,
                            select: o
                        }), "offces" === m && (0, c.jsxs)(c.Fragment, {
                            children: [(0, c.jsx)("div", {
                                className: "offices-map",
                                children: (0, c.jsx)("img", {
                                    src: "/img/office-map.svg",
                                    alt: "offices map"
                                })
                            }), (0, c.jsx)("span", {
                                name: "offices-section"
                            })]
                        }), e.children.map((function(e, n) {
                            return (0, c.jsx)(u, {
                                ref: function(e) {
                                    return h(n, e)
                                },
                                children: e
                            }, n)
                        }))]
                    })
                }
        },
        6100: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return c
                }
            });
            var a = t(2941),
                r = t(7294),
                i = t(5893),
                l = function(e) {
                    return (0, i.jsxs)("svg", {
                        viewBox: "0 0 72 72",
                        fill: "none",
                        children: [(0, i.jsx)("circle", {
                            cx: "36",
                            cy: "36",
                            r: "36",
                            fill: "#333333",
                            fillOpacity: "0.85"
                        }), (0, i.jsx)("path", {
                            d: "M49.5056 35.1471C50.1648 35.5262 50.1648 36.4738 49.5056 36.8529L29.4831 48.3666C28.824 48.7456 28 48.2718 28 47.5137L28 24.4863C28 23.7282 28.824 23.2544 29.4831 23.6334L49.5056 35.1471Z",
                            fill: "white"
                        })]
                    })
                },
                o = function(e) {
                    var n = e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);
                    return !(!n || 11 != n[7].length) && n[7]
                },
                c = function(e) {
                    var n, t = e.youtubeUrl,
                        c = e.poster,
                        s = e.title,
                        u = (0, r.useState)(o(t)),
                        d = u[0],
                        m = (u[1], null === c || void 0 === c ? void 0 : c.url),
                        v = (0, r.useState)(m),
                        p = v[0],
                        f = v[1],
                        h = (0, r.useState)(!1),
                        g = h[0],
                        b = h[1],
                        j = !1;
                    (0, r.useEffect)((function() {
                        if (window.YT) a();
                        else {
                            var e = document.createElement("script");
                            e.src = "https://www.youtube.com/iframe_api", window.onYouTubeIframeAPIReady = a;
                            var t = document.getElementsByTagName("script")[0];
                            t.parentNode.insertBefore(e, t)
                        }

                        function a() {
                            n || (n = new window.YT.Player("youtube-player-".concat(d), {
                                videoId: d,
                                height: "360",
                                width: "640",
                                events: {
                                    onReady: y,
                                    onStateChange: x
                                },
                                playerVars: {
                                    rel: 0
                                }
                            })), n && n.loadVideoById && n.loadVideoById({
                                videoId: d
                            })
                        }
                    }), [d]);
                    var y = function() {
                            b(!0)
                        },
                        x = function(e) {
                            e.data != YT.PlayerState.PLAYING || j || (f(!1), j = !0)
                        };
                    return (0, i.jsx)("div", {
                        className: "video-player",
                        children: (0, i.jsxs)("div", {
                            className: "video-player__wrapper",
                            children: [m && p && (0, i.jsxs)("div", {
                                className: "video-player__poster",
                                children: [g && (0, i.jsx)("button", {
                                    className: "video-player__play-button",
                                    "aria-label": "Play Video",
                                    children: (0, i.jsx)(l, {})
                                }), (0, i.jsx)(a.Z, {
                                    src: c.url,
                                    title: s,
                                    alt: c.description
                                })]
                            }), (0, i.jsx)("div", {
                                id: "youtube-player-".concat(d)
                            })]
                        })
                    })
                }
        },
        2968: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return l
                }
            });
            var a = t(7294),
                r = t(6405),
                i = function() {
                    return window.opera ? window.getComputedStyle(document.body, ":after").getPropertyValue("content").replace(/'/gi, "").replace(/"/gi, "") || "large" : window.getComputedStyle ? window.getComputedStyle(document.body, null).getPropertyValue("font-family") : void 0
                },
                l = function() {
                    var e = (0, a.useState)("large"),
                        n = e[0],
                        t = e[1],
                        l = (0, r.Z)().width;
                    return (0, a.useEffect)((function() {
                        var e = i();
                        t(e)
                    }), [l]), {
                        breakpoint: n,
                        width: l
                    }
                }
        },
        2277: function(e, n, t) {
            t.d(n, {
                G: function() {
                    return r
                }
            });
            var a = t(7294),
                r = 999,
                i = function(e, n) {
                    var t = 0;
                    return n && (t = r), e && (t = e), t
                };
            n.Z = function(e, n) {
                var t = (0, a.useRef)([]),
                    l = (0, a.useState)(i(e, n)),
                    o = l[0],
                    c = l[1];
                return (0, a.useEffect)((function() {
                    t.current.forEach((function(e, n) {
                        o === n ? e.classList.add("is-visible") : e.classList.remove("is-visible"), o === r && e.classList.add("is-visible")
                    }));
                    var e = new Event("update-tab");
                    document.dispatchEvent(e)
                }), [o]), {
                    currentTab: o,
                    setCurrentTab: c,
                    setRef: function(e, n) {
                        t.current[e] = n
                    }
                }
            }
        },
        2062: function(e, n) {
            n.Z = function(e) {
                return "ComponentYoutubeVideo" === e.__typename ? "video" : "image"
            }
        },
        6316: function(e, n, t) {
            t.d(n, {
                O9: function() {
                    return r
                },
                Eq: function() {
                    return a
                },
                wg: function() {
                    return i
                }
            });
            var a = function(e) {
                    var n = r.find((function(n) {
                        if (n.name === e) return n
                    }));
                    return n || r[0]
                },
                r = [{
                    name: "Black (default)",
                    type: "light",
                    color: "#1A1A1A"
                }, {
                    name: "Chicago (blue)",
                    type: "dark",
                    color: "#EBEDFA"
                }, {
                    name: "White",
                    type: "dark",
                    color: "#FFF"
                }, {
                    name: "Economist (red)",
                    type: "light",
                    color: "#e3120b"
                }, {
                    name: "Singapore (orange)",
                    type: "dark",
                    color: "#FEE1CD"
                }, {
                    name: "Paris (green)",
                    type: "dark",
                    color: "#EFF5F5"
                }, {
                    name: "Los Angeles (warm gray)",
                    type: "dark",
                    color: "#F5F4EF"
                }, {
                    name: "New York (warm yellow)",
                    type: "dark",
                    color: "#FEF2CD"
                }, {
                    name: "Hong Kong (light green)",
                    type: "dark",
                    color: "#E9FCF8"
                }, {
                    name: "Error",
                    type: "light",
                    color: "#e3120b"
                }],
                i = function(e) {
                    var n = "large";
                    return n = "Hero" === e ? "large" : "small", null === e && (n = "large"), n
                }
        }
    }
]);