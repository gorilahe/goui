!function () {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1a7c022d-14c3-4f8d-bfca-4ad55383d215", e._sentryDebugIdIdentifier = "sentry-dbid-1a7c022d-14c3-4f8d-bfca-4ad55383d215")
    } catch (e) {}
}
();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[353], {
            49351: function (e, t, n) {
                class o extends Error {
                    constructor(e, t) {
                        super(e),
                        this.error = e,
                        this.errorData = t
                    }
                }
                let r = async(e, t) => {
                    let {
                        onError: n,
                        onLoading: r,
                        onResult: l,
                        params: i,
                        ...s
                    } = t;
                    try {
                        null == r || r(!0);
                        let t = i ? new URLSearchParams(i).toString() : "",
                        n = await fetch("".concat(e).concat(t ? "?".concat(t) : ""), s);
                        if (!n.ok) {
                            let e = await n.json();
                            throw new o(e.error || "Request failed!", e.errorData)
                        }
                        let a = await n.json();
                        return null == l || l(a),
                        a
                    } catch (t) {
                        let e = t instanceof Error ? t : Error(t);
                        return null == n || n(e),
                        e
                    } finally {
                        null == r || r(!1)
                    }
                };
                class l {
                    static async get(e, t) {
                        return r(e, {
                            ...t,
                            method: "GET"
                        })
                    }
                    static async post(e, t) {
                        return r(e, {
                            ...t,
                            method: "POST"
                        })
                    }
                    static async put(e, t) {
                        return r(e, {
                            ...t,
                            method: "PUT"
                        })
                    }
                    static async delete (e, t) {
                        return r(e, {
                            ...t,
                            method: "DELETE"
                        })
                    }
                }
                t.Z = l
            },
            55524: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return m
                    }
                });
                var o = n(27573),
                r = n(21500),
                l = n(37093),
                i = n(45531),
                s = n.n(i),
                a = n(42807),
                c = n(81529),
                d = n(30353);
                let u = "gs-cmp-accordion",
                p = "".concat(u, "-handler"),
                g = "".concat(u, "-content");
                function m(e) {
                    let {
                        className: t,
                        classNameWrap: n,
                        classNameContent: i,
                        style: m,
                        handler: h,
                        children: f,
                        inverted: b,
                        disabled: y,
                        sticky: v,
                        onChange: x,
                        open: j
                    } = e;
                    return (0, o.jsx)(r.p, {
                        as: "div",
                        defaultOpen: j,
                        className: (0, l.Z)(u, n, "relative"),
                        children: e => {
                            let {
                                open: n
                            } = e;
                            return (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(r.p.Button, {
                                        as: y ? "div" : "button",
                                        disabled: y,
                                        style: m,
                                        onClick: e => null == x ? void 0 : x({
                                            event: e,
                                            open: !n
                                        }),
                                        className: e => {
                                            let {
                                                open: n
                                            } = e;
                                            return s()(p, "function" == typeof t ? t(n) : t, v && "gs-utl-sticky gs-utl-top-0 gs-utl-z-10", "gs-utl-w-full")
                                        },
                                        children: e => {
                                            let {
                                                open: t
                                            } = e;
                                            return (0, o.jsxs)(a.Z, {
                                                items: "center",
                                                className: (0, l.Z)("gap-2"),
                                                full: !0,
                                                children: [(0, o.jsx)(c.Z, {
                                                        className: (0, l.Z)("text-left"),
                                                        grow: !0,
                                                        children: "function" == typeof h ? h(t) : h
                                                    }), (0, o.jsx)(c.Z, {
                                                        className: (0, l.Z)(b && "-order-1", y && "gs-utl-hidden"),
                                                        children: (0, o.jsx)(d.ZP, {
                                                            icon: d.do.chevronDown,
                                                            className: (0, l.Z)("w-5 h-5 transition-transform", t && "rotate-180")
                                                        })
                                                    })]
                                            })
                                        }
                                    }), (0, o.jsx)(r.p.Panel, {
                                        className: (0, l.Z)(g, i),
                                        children: f
                                    })]
                            })
                        }
                    })
                }
            },
            19601: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return i
                    }
                });
                var o = n(27573),
                r = n(62077),
                l = n(47988);
                function i(e) {
                    let {
                        children: t,
                        title: n,
                        classNameWrp: i,
                        ...s
                    } = e;
                    return (0, o.jsx)(l.Z, {
                        title: n,
                        classNameWrp: i,
                        children: (0, o.jsx)(r.default, {
                            ...s,
                            children: t
                        })
                    })
                }
            },
            62077: function (e, t, n) {
                n.d(t, {
                    M: function () {
                        return u
                    },
                default:
                    function () {
                        return p
                    }
                });
                var o = n(27573),
                r = n(67393),
                l = n(82652),
                i = n(37093),
                s = n(42807),
                a = n(81529),
                c = n(30353),
                d = n(41062);
                let u = e => {
                    let {
                        variant: t,
                        size: n = "m",
                        className: o,
                        active: r,
                        border: l = !0,
                        rounded: s = !0,
                        disabled: a = !1,
                        withBg: c,
                        block: u,
                        full: p
                    } = e,
                    g = "out" === t,
                    m = l && (g || "out-clear" === t || !t);
                    return ["transition-colors", u && "block", "s" === n && "gjs-p-1 text-sm", "m" === n && "gjs-p-1 gjs-px-2", "m2" === n && "gjs-p-1 gjs-px-3", "lg" === n && "gjs-p-2 gjs-px-4 text-lg", o, s && d.br.rnd, m && "".concat(d.br.b, " ").concat(d.cl.br), c && d.cl.bg, m && (0, i.Z)(d.br.b, g && d.cl.bA, g && d.cl.tAo, !a && d.cl.hBgH), "warn" === t && (0, i.Z)(d.cl.bgW, d.cl.hBgW, !a && d.cl.hBgW, "text-white"), "danger" === t && (0, i.Z)(d.cl.bgRed, !a && d.cl.hBgRed, "text-white"), "pr" === t && (0, i.Z)(d.cl.bgA2, !a && d.cl.hBgAct), r && d.cl.bgA, a && "disabled:gs-utl-opacity-80 cursor-not-allowed", p && "w-full", d.v_.focus]
                };
                function p(e) {
                    let {
                        children: t,
                        ...n
                    } = e, {
                        variant: d,
                        size: p,
                        active: g,
                        border: m,
                        rounded: h,
                        block: f,
                        full: b,
                        className: y,
                        icon: v,
                        loading: x,
                        withBg: j,
                        ...w
                    } = n,
                    Z = x ? {
                        icon: r.CEZ,
                        size: "18px",
                        className: (0, i.Z)("animate-spin-fast")
                    }
                     : (0, l.HD)(v) ? {
                        icon: v,
                        size: "18px"
                    }
                     : v;
                    return (0, o.jsx)("button", {
                        className: (0, i.Z)(u(n)),
                        disabled: n.disabled,
                        ...w,
                        children: Z ? (0, o.jsxs)(s.Z, {
                            className: (0, i.Z)("gap-2"),
                            items: "center",
                            nowrap: !0,
                            children: [(0, o.jsx)(a.Z, {
                                    children: (0, o.jsx)(c.ZP, {
                                        ...Z
                                    })
                                }), t && (0, o.jsx)(a.Z, {
                                    children: t
                                })]
                        }) : t
                    })
                }
            },
            10046: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return p
                    }
                });
                var o = n(27573),
                r = n(35777),
                l = n(37093),
                i = n(42807),
                s = n(81529),
                a = n(82106),
                c = n(41062),
                d = n(47988),
                u = n(30353);
                function p(e) {
                    let {
                        className: t,
                        options: n,
                        label: p,
                        value: g,
                        size: m = "m",
                        disabled: h,
                        onChange: f
                    } = e,
                    b = e => {
                        let t = n.filter(t => t.id === e)[0];
                        return n.indexOf(t) === n.length - 1
                    },
                    y = (e, t) => (0, l.Z)("cursor-pointer", "m" === m && c.vk.xy, "s" === m && "gs-utl-px-2 gs-utl-py-1 text-sm", "xs" === m && "gs-utl-p-1 text-sm", c.cl.br, e && c.cl.bgO, !b(t) && c.br.br);
                    return (0, o.jsxs)(r.E, {
                        value: g,
                        onChange: f,
                        className: (0, l.Z)("gs-field-buttons w-full"),
                        disabled: h,
                        children: [!!p && (0, o.jsx)(a.Z, {
                                size: m,
                                children: p
                            }), (0, o.jsx)(i.Z, {
                                className: (0, l.Z)(t, c.br.b, c.br.rnd, c.cl.br, "cursor-pointer"),
                                items: "center",
                                full: !0,
                                nowrap: !0,
                                children: n.map(e => {
                                    let {
                                        id: t,
                                        label: n,
                                        title: a,
                                        icon: p
                                    } = e;
                                    return (0, o.jsx)(d.Z, {
                                        title: a,
                                        className: (0, l.Z)("w-full"),
                                        classNameWrp: (0, l.Z)("flex-1"),
                                        children: (0, o.jsx)(r.E.Option, {
                                            value: t,
                                            className: e => {
                                                let {
                                                    checked: n
                                                } = e;
                                                return y(n, t)
                                            },
                                            children: (0, o.jsxs)(i.Z, {
                                                justify: "center",
                                                space: "s",
                                                full: !0,
                                                children: [!!p && (0, o.jsx)(u.ZP, {
                                                        icon: p,
                                                        size: c.qv.s
                                                    }), n && (0, o.jsx)(s.Z, {
                                                        children: n
                                                    })]
                                            })
                                        })
                                    }, t)
                                })
                            })]
                    })
                }
            },
            79473: function (e, t, n) {
                var o = n(27573),
                r = n(7653),
                l = n(37093),
                i = n(42807),
                s = n(81529),
                a = n(30353),
                c = n(41062);
                t.Z = (0, r.forwardRef)(function (e, t) {
                    let {
                        children: n,
                        title: r,
                        onClose: d,
                        icon: u,
                        shadow: p = !0,
                        padding: g = !0,
                        border: m = !0,
                        round: h = !0,
                        className: f,
                        classNameBody: b,
                        size: y = "m",
                        titleClass: v = (0, l.Z)("gs-utl-mb-2 gs-utl-mt-0.5"),
                        style: x,
                        bg: j,
                        ...w
                    } = e;
                    return (0, o.jsxs)("div", {
                        ...w,
                        ref: t,
                        style: x,
                        className: (0, l.Z)([f, j || c.Sw.bg, c.br.b, h && c.br.rnd, m ? c.cl.br : c.br.bT, "gs-utl-card gs-utl-overflow-auto", p && "gs-utl-shadow-md", g && "l" === y && "gs-utl-p-5", g && "m" === y && "gs-utl-px-4 gs-utl-py-2", g && "s" === y && "gs-utl-px-2 gs-utl-py-1", g && "xs" === y && "gs-utl-px-2 gs-utl-py-0.5", g && "x2s" === y && "gs-utl-px-0.5"]),
                        children: [(r || d) && !1 !== r && (0, o.jsxs)(i.Z, {
                                className: (0, l.Z)("gs-utl-card-title", v),
                                items: "center",
                                children: [(0, o.jsx)(s.Z, {
                                        className: (0, l.Z)("truncate"),
                                        grow: !0,
                                        children: r
                                    }), (d || u) && (0, o.jsx)(s.Z, {
                                        onClick: d,
                                        className: (0, l.Z)("cursor-pointer transition-opacity opacity-50 hover:gs-utl-opacity-100"),
                                        children: (0, o.jsx)(a.ZP, {
                                            icon: u || a.do.close,
                                            size: "18px"
                                        })
                                    })]
                            }), (0, o.jsx)("div", {
                                className: (0, l.Z)("gs-utl-card-body", b),
                                children: n
                            })]
                    })
                })
            },
            52003: function (e, t, n) {
                n.d(t, {
                    X: function () {
                        return c
                    },
                    Z: function () {
                        return u
                    }
                });
                var o = n(27573),
                r = n(90276),
                l = n(82652),
                i = n(37093),
                s = n(82106),
                a = n(41062);
                let c = e => {
                    var t;
                    null === (t = e.getAction("editor.action.formatDocument")) || void 0 === t || t.run()
                },
                d = {
                    minimap: {
                        enabled: !1
                    },
                    lineNumbers: "off",
                    scrollBeyondLastLine: !1,
                    contextmenu: !1,
                    fixedOverflowWidgets: !0,
                    showFoldingControls: "always",
                    suggestOnTriggerCharacters: !1,
                    lineDecorationsWidth: 0,
                    renderLineHighlight: "none",
                    wordWrapOverride1: "off",
                    tabSize: 2,
                    scrollbar: {
                        verticalScrollbarSize: 8,
                        horizontal: "hidden",
                        alwaysConsumeMouseWheel: !1
                    }
                };
                function u(e) {
                    let {
                        size: t,
                        value: n,
                        label: u,
                        language: p,
                        onChange: g,
                        clean: m,
                        padding: h,
                        isDarkTheme: f,
                        className: b,
                        containerClassName: y,
                        noMinHeight: v,
                        onMount: x,
                        readOnly: j,
                        description: w
                    } = e,
                    Z = "string" == typeof n ? n : JSON.stringify(n, null, 2);
                    return (0, o.jsxs)("div", {
                        className: (0, i.cx)("gs-field-code", "flex flex-col w-full h-full", y),
                        children: [!!u && (0, o.jsx)(s.Z, {
                                children: u
                            }), !!w && (0, o.jsx)(s.Z, {
                                as: "span",
                                size: t,
                                className: (0, i.cx)(a.cl.txtLowEmphasis),
                                capitalize: !1,
                                children: w
                            }), (0, o.jsx)("div", {
                                className: (0, i.cx)("flex-grow", "w-full", "h-full", !v && "gs-utl-min-h-48"),
                                style: {
                                    position: "relative",
                                    width: "100%",
                                    height: "100%"
                                },
                                children: (0, o.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0
                                    },
                                    children: (0, o.jsx)(r.ZP, {
                                        defaultLanguage: p,
                                        defaultValue: Z,
                                        theme: f ? "vs-dark" : "light",
                                        className: (0, i.cx)(a.br.b, a.br.rnd, a.cl.br, b),
                                        options: {
                                            ...d,
                                            readOnly: j,
                                            ...m && {
                                                domReadOnly: !0,
                                                overviewRulerLanes: 0,
                                                selectOnLineNumbers: !1,
                                                folding: !1,
                                                matchBrackets: "never",
                                                guides: {
                                                    indentation: !1
                                                }
                                            },
                                            ...(0, l.Xq)(h) && {
                                                lineDecorationsWidth: 2 * h,
                                                padding: {
                                                    top: h,
                                                    bottom: h
                                                }
                                            }
                                        },
                                        onChange: g,
                                        onMount: (e, t) => {
                                            let n = !1,
                                            o = () => c(e);
                                            e.onDidChangeModelLanguageConfiguration(o),
                                            e.onDidScrollChange(() => {
                                                n || (n = !0, o())
                                            }),
                                            setTimeout(o, 10),
                                            null == x || x(e, t)
                                        }
                                    })
                                })
                            })]
                    })
                }
            },
            8871: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return g
                    }
                });
                var o = n(27573),
                r = n(7653),
                l = n(37093),
                i = n(77735),
                s = n(81198),
                a = n(42807),
                c = n(81529),
                d = n(82106),
                u = n(41062);
                let p = e => (0, i.Xq)(e) ? e : "";
                function g(e) {
                    let {
                        className: t,
                        value: n,
                        label: i,
                        size: g = "m",
                        placeholder: m,
                        preventSubmitOnEnter: h = !1,
                        onChange: f
                    } = e,
                    [b, y] = (0, r.useState)(p(n));
                    (0, r.useEffect)(() => {
                        y(p(n))
                    }, [n]);
                    let v = (e, t) => {
                        null == f || f(e, t)
                    };
                    return (0, o.jsxs)("div", {
                        className: (0, l.Z)("gs-cmp-color-field", t),
                        children: [!!i && (0, o.jsx)(d.Z, {
                                size: g,
                                children: i
                            }), (0, o.jsxs)(a.Z, {
                                className: (0, l.Z)(u.cl.bg, u.cl.br, u.br.b, u.br.rnd, "m" === g && u.vk.xy, "s" === g && "gjs-px-3 gjs-py-1"),
                                items: "center",
                                space: "s",
                                children: [(0, o.jsx)(c.Z, {
                                        children: (0, o.jsx)(s.Z, {
                                            value: n,
                                            onChange: f
                                        })
                                    }), (0, o.jsx)(c.Z, {
                                        grow: !0,
                                        children: (0, o.jsx)("input", {
                                            className: (0, l.Z)("w-full focus:gs-utl-outline-none", u.cl.bgTr),
                                            value: b,
                                            onChange: e => y(e.target.value),
                                            placeholder: m,
                                            onBlur: () => {
                                                v(b)
                                            },
                                            onKeyDown: e => {
                                                switch (e.key) {
                                                case "Escape":
                                                    return y(n);
                                                case "Enter":
                                                    v(b),
                                                    h && (e.preventDefault(), e.stopPropagation())
                                                }
                                            }
                                        })
                                    })]
                            })]
                    })
                }
            },
            81198: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return y
                    }
                });
                var o = n(27573),
                r = n(34760),
                l = n(13462),
                i = n(24953),
                s = n(37093),
                a = n(62077),
                c = n(42807),
                d = n(81529),
                u = n(45837),
                p = n(43912),
                g = n(30353),
                m = n(41062);
                (0, r.l7)([l.Z]);
                let h = {
                    backgroundSize: "10px"
                },
                f = {
                    position: {
                        x: "left"
                    },
                    offset: {
                        x: 40,
                        y: -30
                    }
                },
                b = e => e.startsWith("rgba") ? e : (0, r.Vi)(e).toRgbString();
                function y(e) {
                    let {
                        className: t,
                        value: n,
                        onChange: r
                    } = e,
                    l = b(n || ""),
                    y = !!window.EyeDropper,
                    v = (0, s.Z)("bg-checker overflow-hidden cursor-pointer", t, m.br.b, m.br.rnd, m.cl.br),
                    x = (0, o.jsx)("div", {
                        style: h,
                        className: v,
                        children: (0, o.jsx)("div", {
                            className: (0, s.Z)("w-4 h-4"),
                            style: {
                                backgroundColor: n
                            }
                        })
                    }),
                    j = e => {
                        null == r || r(e, !0)
                    };
                    return (0, o.jsxs)(p.Z, {
                        handler: x,
                        title: "Color",
                        size: "s",
                        pos: f,
                        static: !0,
                        clickAway: !0,
                        children: [(0, o.jsx)(i.ef, {
                                className: "color-picker",
                                color: l,
                                onChange: j,
                                onPointerUp: () => null == r ? void 0 : r(l, !1)
                            }), (0, o.jsxs)(c.Z, {
                                className: (0, s.Z)("gjs-mt-3"),
                                space: "s",
                                children: [(0, o.jsx)(d.Z, {
                                        grow: !0,
                                        children: (0, o.jsx)(u.ZP, {
                                            size: "s",
                                            value: l,
                                            onChange: j
                                        })
                                    }), y && (0, o.jsx)(a.default, {
                                        type: "button",
                                        onClick: () => {
                                            y && new EyeDropper().open().then(e => j(e.sRGBHex))
                                        },
                                        children: (0, o.jsx)(g.ZP, {
                                            icon: g.do.eyedropperVariant,
                                            size: m.qv.s
                                        })
                                    })]
                            })]
                    })
                }
            },
            90623: function (e, t, n) {
                n.d(t, {
                    E: function () {
                        return ec
                    },
                    Z: function () {
                        return ea
                    }
                });
                var o = {
                    add: "Add",
                    delete : "Delete",
                    duplicate: "Duplicate",
                    rename: "Rename",
                    remove: "Remove",
                    clear: "Clear",
                    select: "Select",
                    selectList: "Select from the list",
                    search: "Search",
                    update: "Update",
                    updated: "Updated!",
                    confirm: "Confirm",
                    cancel: "Cancel",
                    enable: "Enable",
                    disable: "Disable",
                    upload: "Upload",
                    close: "Close",
                    load: "Load",
                    copy: "Copy",
                    save: "Save",
                    current: "Current",
                    toggleCss: "Toggle CSS",
                    selectTarget: "Target Component",
                    noCode: "No code available",
                    noItems: "No items found",
                    confirmAction: "Do you confirm this action?",
                    eyeDropper: "Eyedropper",
                    noEyeDropper: "Eyedropper not supported",
                    unauthorized: "Unauthorized project",
                    notItemsFound: "No items found",
                    actions: {
                        componentOutline: {
                            title: "Component outline"
                        },
                        preview: {
                            title: "Preview"
                        },
                        fullscreen: {
                            title: "Fullscreen"
                        },
                        showCode: {
                            title: "Code",
                            exportButton: "Export to ZIP"
                        },
                        undo: {
                            title: "Undo"
                        },
                        redo: {
                            title: "Redo"
                        },
                        save: {
                            title: "Save project"
                        },
                        store: {
                            title: "Save content"
                        },
                        open: {
                            title: "Open project"
                        },
                        importCode: {
                            title: "Import code",
                            content: "Paste here your HTML/CSS and click Import",
                            button: "Import"
                        },
                        clearCanvas: {
                            title: "Clear page",
                            content: "Are you sure you want to clear the page?"
                        },
                        about: {
                            title: "About"
                        },
                        embed: {
                            title: "Embed Studio"
                        },
                        newProject: {
                            title: "Load project"
                        },
                        installApp: {
                            title: "Install App",
                            installed: "App installed"
                        }
                    },
                    modals: {
                        styleCatalog: {
                            title: "Style Catalog",
                            noStyles: "No styles found"
                        },
                        openProject: {
                            title: "Open project"
                        }
                    },
                    pluginManager: {
                        plugins: "Plugins",
                        all: "Available",
                        installed: "Installed",
                        install: "Install",
                        uninstall: "Uninstall",
                        allPlugins: "All plugins",
                        updateStudio: "Restart Studio for plugin updates"
                    },
                    globalStyleManager: {
                        notFound: "No global styles found"
                    },
                    pageManager: {
                        pages: "Pages",
                        page: "Page",
                        newPage: "New Page",
                        add: "Add page",
                        rename: "Rename",
                        duplicate: "Duplicate",
                        copy: "Copy",
                        delete : "Delete",
                        deletePage: "Delete Page",
                        confirmDelete: "Are you sure you want to delete the page?",
                        settings: {
                            label: "Settings",
                            title: "Page settings",
                            global: "Global settings",
                            fields: {
                                name: {
                                    label: "Name"
                                },
                                slug: {
                                    label: "Slug",
                                    description: "The slug is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens."
                                },
                                favicon: {
                                    label: "Favicon",
                                    description: "The favicon is the small icon that appears in the browser tab."
                                },
                                title: {
                                    label: "Title",
                                    description: "The title is the name of the page that appears in the browser tab."
                                },
                                description: {
                                    label: "Description",
                                    description: "The description is a short summary of the page content."
                                },
                                keywords: {
                                    label: "Keywords",
                                    description: "Keywords are words or phrases that describe the content of the page."
                                },
                                socialTitle: {
                                    label: "Social title",
                                    description: "The title is the name of the page that appears on social networks."
                                },
                                socialImage: {
                                    label: "Social image",
                                    description: "The image is the picture that appears on social networks."
                                },
                                socialDescription: {
                                    label: "Social description",
                                    description: "The description is a short summary of the page content that appears on social networks."
                                },
                                customCodeHead: {
                                    label: "Custom HTML head",
                                    description: "Add any custom HTML (e.g., meta tags, stylesheets, scripts) to be included in the <head> section of the page."
                                },
                                customCodeBody: {
                                    label: "Custom HTML body",
                                    description: "Add any custom HTML (e.g., scripts, tracking codes) to be included just before the closing </body> tag."
                                }
                            }
                        }
                    },
                    projectManager: {
                        existentProjects: "Your projects",
                        templates: "Templates",
                        notAvailable: "No projects available",
                        projectType: "Project type",
                        projectName: "Project name",
                        pages: "Pages"
                    },
                    templates: {
                        notFound: "No templates found"
                    },
                    storageManager: {
                        errorLoad: "Failed to load the project",
                        errorStore: "Failed to save the project"
                    },
                    assetManager: {
                        addUrl: "Add URL",
                        projectAssets: "Assets in this project",
                        userAssets: "Assets from all my projects",
                        errorLoad: "Failed to load assets",
                        errorUpload: "Failed to upload",
                        errorDelete: "Failed to delete",
                        deleteConfirmQuestion: "Delete asset?",
                        deleteConfirmExplanation: "This will affect existing and published projects that rely on this asset, if any exist."
                    },
                    blockManager: {
                        notFound: "No blocks found",
                        blocks: "Blocks",
                        add: "Add more blocks",
                        labels: {
                            section: "Section",
                            column1: "1 Column",
                            column2: "2 Columns",
                            column3: "3 Columns",
                            "column3-7": "2 Columns 3/7",
                            gridRow: "Grid",
                            heading: "Heading",
                            divider: "Divider",
                            imageBox: "Image Box",
                            linkBox: "Link Box"
                        },
                        categories: {},
                        symbols: {
                            notFound: "No symbols found",
                            instancesProject: "Instance/s in the project",
                            delete : "Delete symbol",
                            deleteConfirm: "Are you sure you want to delete the symbol? All instances inside the project will be detached."
                        }
                    },
                    domComponents: {
                        names: {
                            section: "Section",
                            gridRow: "Row",
                            gridColumn: "Column",
                            heading: "Heading",
                            divider: "Divider",
                            imageBox: "Image Box",
                            linkBox: "Link Box"
                        }
                    },
                    traitManager: {
                        empty: "Select a component to see its properties",
                        panelLabel: "Properties",
                        traits: {
                            labels: {
                                loading: "Lazy load",
                                target: "Open in new tab",
                                showList: "Show element list",
                                customAttributes: "Custom Attributes"
                            },
                            attributes: {}
                        }
                    },
                    deviceManager: {
                        allDevices: "All devices"
                    },
                    selectorManager: {
                        noSelecton: "You don't have any selected element.",
                        selectFromCanvas: "Select an element from the canvas.",
                        selectFromList: "Pick any style from the Style Catalog.",
                        selectCustom: "Add your custom style selector.",
                        selection: "Selection",
                        selector: "Selector",
                        addNewSelector: "Add new selector",
                        removeSelector: "Remove selector",
                        target: "Target",
                        device: "Device",
                        state: "State",
                        deleteStyle: "Delete style",
                        showCSS: "Show CSS code",
                        searchStyle: "Search style",
                        applyOnSelector: "Apply style changes on Selectors",
                        noSelectors: "No Selectors applied",
                        applyOnComponents: "Apply style changes on Components",
                        noComponents: "No Components selected",
                        currentSelection: "The current selection from which styles are displayed of"
                    },
                    layerManager: {
                        layers: "Layers"
                    },
                    styleManager: {
                        panelLabel: "Styles",
                        layout: {
                            flexChild: "Flex child",
                            display: {
                                tips: {
                                    block: "Block generates a block element box, generating line breaks both before and after the element when in the normal flow.",
                                    inline: "Inline generates one or more inline element boxes that do not generate line breaks. The inline is generally default for text content.",
                                    "inline-block": "Inline-block is similar to inline but allows to define width and height properties.",
                                    flex: "Flex behaves like a block element and lays out its child elements on a vertical/horizontal axis",
                                    none: "The element is hidden from the layout"
                                }
                            },
                            direction: {
                                title: {
                                    row: "Horizontal",
                                    "row-reverse": "Horizontal reversed",
                                    column: "Vertical",
                                    "column-reverse": "Vertical reversed"
                                }
                            }
                        },
                        position: {
                            tips: {
                                static: "Default position",
                                relative: "Similar to Static but with the ability to be moved relative to itself",
                                absolute: "Absolute position, relative to its closest non-static parent",
                                fixed: "Fixed position (even when the page is scrolled), relative to the browser viewport",
                                sticky: "Elements are keept in place but moved when the page is scrolled, based on indicated distance"
                            },
                            presets: {
                                title: "Presets",
                                options: {
                                    topLeft: "Top left",
                                    topRight: "Top right",
                                    bottomLeft: "Bottom left",
                                    bottomRight: "Bottom right",
                                    left: "Left",
                                    right: "Right",
                                    bottom: "Bottom",
                                    top: "Top",
                                    full: "Full"
                                }
                            }
                        },
                        properties: {
                            "margin-top": "Top",
                            "margin-right": "Right",
                            "margin-bottom": "Bottom",
                            "margin-left": "Left",
                            "padding-top": "Top",
                            "padding-right": "Right",
                            "padding-bottom": "Bottom",
                            "padding-left": "Left",
                            "border-top-left-radius": "Top Left",
                            "border-top-right-radius": "Top Right",
                            "border-bottom-right-radius": "Bottom Right",
                            "border-bottom-left-radius": "Bottom Left",
                            "mix-blend-mode": "Blend mode",
                            "transform-style": "Type",
                            "backface-visibility": "Backface",
                            "perspective-origin": "Perspective origin",
                            "perspective-origin-x": "Left",
                            "perspective-origin-y": "Top",
                            "transform-origin-x": "Left",
                            "transform-origin-y": "Top",
                            "align-items": "Align",
                            "align-self": "Align",
                            "justify-content": "Justify",
                            "row-gap": "Row",
                            "column-gap": "Column",
                            "font-family": "Font",
                            "font-size": "Size",
                            "font-weight": "Weight",
                            "letter-spacing": "Spacing",
                            "text-align": "Align",
                            "text-decoration": "Decoration",
                            "text-transform": "Transform",
                            "white-space": "Breaking",
                            "border-top-width": "Top",
                            "border-right-width": "Right",
                            "border-bottom-width": "Bottom",
                            "border-left-width": "Left",
                            "border-top-style": "Top",
                            "border-right-style": "Right",
                            "border-bottom-style": "Bottom",
                            "border-left-style": "Left",
                            "border-top-color": "Top",
                            "border-right-color": "Right",
                            "border-bottom-color": "Bottom",
                            "border-left-color": "Left",
                            "background-position": "Position",
                            "background-position-x": "Left",
                            "background-position-y": "Top",
                            "background-size": "Size",
                            "background-size-x": "Left",
                            "background-size-y": "Top",
                            "background-repeat": "Repeat",
                            "background-attachment": "Attachment",
                            "background-origin": "Origin",
                            "background-clip": "Clip",
                            "overflow-x": "X",
                            "overflow-y": "Y"
                        },
                        options: {
                            "__background-type": {
                                image: "Image",
                                gradient: "Gradient",
                                color: "Color"
                            },
                            display: {
                                block: "Block",
                                inline: "Inline",
                                "inline-block": "Inline block",
                                flex: "Flex",
                                none: "None"
                            },
                            overflow: {
                                visible: "Visible",
                                hidden: "Hidden",
                                scroll: "Scroll",
                                auto: "Auto"
                            },
                            "flex-wrap": {
                                nowrap: "No wrap",
                                wrap: "Wrap",
                                "wrap-reverse": "Reverse wrap"
                            }
                        }
                    }
                },
                r = n(77735),
                l = n(98698);
                let i = "column3-7";
                var s = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        Components: n,
                        Blocks: o
                    } = e,
                    r = "gridRow",
                    s = "gridColumn",
                    a = "gjs-grid-row",
                    c = "gjs-grid-column",
                    d = {
                        tl: 0,
                        tc: 0,
                        tr: 0,
                        cl: 0,
                        bl: 0,
                        br: 0
                    };
                    n.addType(r, {
                        isComponent: e => (0, l.nX)(e, a),
                        model: {
                            defaults: {
                                emptyState: !0,
                                droppable: (0, l.Ee)(s),
                                highlightable: !1,
                                attributes: {
                                    class: a
                                },
                                resizable: {
                                    ...d,
                                    keyHeight: "min-height"
                                },
                                icon: '\n            <svg viewBox="0 0 24 24">\n              <path d="M22 14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v4M4 14h4v-4H4v4m6 0h4v-4h-4v4m6 0h4v-4h-4v4z"></path>\n            </svg>\n          ',
                                "stylable-require": ["flex-align-items", "flex-align-items-v", "flex-direction-id", "flex-multiline"],
                                traits: ["id", "title", {
                                        name: "add-column",
                                        labelButton: "Add column",
                                        type: "button",
                                        full: !0,
                                        command: e => {
                                            e.getSelected().components().add({
                                                type: s
                                            })
                                        }
                                    }
                                ],
                                styles: "\n            .".concat(a, " {\n              display: flex;\n              justify-content: flex-start;\n              align-items: stretch;\n              flex-direction: row;\n              min-height: auto;\n              padding: 10px 0;\n            }\n            @media (max-width: 992px) {\n              .").concat(a, " {\n                flex-direction: column;\n              }\n            }\n          ")
                            }
                        }
                    }),
                    n.addType(s, {
                        isComponent: e => (0, l.nX)(e, c),
                        model: {
                            defaults: {
                                emptyState: !0,
                                attributes: {
                                    class: c
                                },
                                draggable: (0, l.Ee)(r),
                                resizable: {
                                    ...d,
                                    bc: 0,
                                    keyWidth: "flex-basis",
                                    currentUnit: 1,
                                    minDim: 1,
                                    step: 1
                                },
                                icon: '\n            <svg viewBox="0 0 24 24">\n              <path d="M8 2h8c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2m0 8v4h8v-4H8m0 6v4h8v-4H8M8 4v4h8V4H8z"></path>\n            </svg>\n          ',
                                unstylable: ["width"],
                                "stylable-require": ["flex-basis", "flex-item-behaviour", "flex-item-h-align", "flex-order"],
                                traits: [{
                                        label: "Center content",
                                        name: "center-content",
                                        type: "checkbox",
                                        changeProp: !0
                                    }
                                ],
                                styles: "\n            .".concat(c, " {\n              flex: 1 1 0%;\n              padding: 5px 0;\n            }\n          ")
                            },
                            init() {
                                this.listenTo(this, "change:center-content", this.handleCenter)
                            },
                            handleCenter() {
                                let e = this.get("center-content");
                                this.addStyle({
                                    display: e ? "flex" : "block",
                                    "align-items": e ? "center" : "",
                                    "justify-content": e ? "center" : ""
                                })
                            }
                        }
                    });
                    let u = {
                        label: r,
                        content: {
                            type: r,
                            components: [{
                                    type: s
                                }, {
                                    type: s
                                }, {
                                    type: s
                                }
                            ]
                        },
                        ...t.block
                    },
                    p = {
                        merge: !0
                    };
                    o.add("column1", {
                        ...u,
                        content: {
                            type: r,
                            components: [{
                                    type: s
                                }
                            ]
                        }
                    }, p),
                    o.add("column2", {
                        ...u,
                        content: {
                            type: r,
                            components: [{
                                    type: s
                                }, {
                                    type: s
                                }
                            ]
                        }
                    }, p),
                    o.add("column3", {
                        ...u,
                        content: {
                            type: r,
                            components: [{
                                    type: s
                                }, {
                                    type: s
                                }, {
                                    type: s
                                }
                            ]
                        }
                    }, p),
                    o.add(i, {
                        ...u,
                        content: {
                            type: r,
                            components: [{
                                    type: s,
                                    style: {
                                        "flex-basis": "30%",
                                        "flex-grow": 0
                                    }
                                }, {
                                    type: s
                                }
                            ]
                        }
                    }, p)
                };
                let a = "section",
                c = "container",
                d = "gjs-section",
                u = "gjs-container";
                var p = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        Components: n,
                        Blocks: o
                    } = e;
                    o.add(a, {
                        label: a,
                        media: '\n        <svg viewBox="0 0 24 24">\n          <path fill="currentColor" d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z" />\n        </svg>\n      ',
                        content: {
                            type: a
                        },
                        ...t.block
                    }, {
                        at: (0, l.ob)(e, i) + 1
                    }),
                    n.addType(a, {
                        isComponent: e => (0, l.nX)(e, d),
                        model: {
                            defaults: {
                                tagName: "section",
                                emptyState: !0,
                                draggable: (0, l.Ee)("wrapper"),
                                droppable: (0, l.Ee)(c),
                                attributes: {
                                    class: d
                                },
                                components: {
                                    type: c
                                },
                                styles: "\n            .".concat(d, " {\n              display: flex;\n              padding: 50px 0;\n            }\n          ")
                            }
                        }
                    }),
                    n.addType(c, {
                        isComponent: e => (0, l.nX)(e, u),
                        model: {
                            defaults: {
                                emptyState: !0,
                                copyable: !1,
                                removable: !1,
                                draggable: !1,
                                attributes: {
                                    class: u
                                },
                                styles: "\n            .".concat(u, " {\n              width: 90%;\n              margin: 0 auto;\n              max-width: 1200px;\n            }\n          ")
                            }
                        }
                    })
                },
                g = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        Components: n,
                        Blocks: o
                    } = e,
                    r = "divider",
                    i = "gjs-divider";
                    o.add(r, {
                        label: r,
                        media: '\n        <svg viewBox="0 0 24 24">\n          <path d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z" />\n        </svg>\n      ',
                        content: {
                            type: r
                        },
                        ...t.block
                    }, {
                        at: (0, l.ob)(e, a) + 1
                    }),
                    n.addType(r, {
                        isComponent: e => (0, l.nX)(e, i),
                        model: {
                            defaults: {
                                droppable: !1,
                                highlightable: !1,
                                attributes: {
                                    class: i
                                },
                                stylable: ["height", "width", "background-color", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left"],
                                styles: "\n            .".concat(i, " {\n              height: 3px;\n              width: 100%;\n              margin: 10px;\n              background-color: rgba(0, 0, 0, 0.05);\n            }\n          ")
                            }
                        }
                    })
                };
                let m = "page://";
                var h = function (e) {
                    let {
                        Components: t,
                        Blocks: n
                    } = e,
                    o = t.getType("wrapper").model.getDefaults(),
                    r = t.getType("head").model;
                    t.addType("wrapper", {
                        model: {
                            defaults: {
                                emptyState: {
                                    styleIn: "height: 100vh",
                                    styleOut: "padding: 0;"
                                },
                                stylable: [...o.stylable, "font-family"]
                            }
                        }
                    }),
                    t.addType("head", {
                        model: {
                            components(e, t) {
                                return r.prototype.components.call(this, e, {
                                    ...t,
                                    skipDomReset: !0
                                })
                            }
                        },
                        view: {
                            updateContent() {}
                        }
                    }),
                    t.addType("text", {
                        model: {
                            defaults: {
                                highlightable: !1,
                                emptyState: {
                                    styleIn: "min-height: auto; font-size: inherit;"
                                }
                            }
                        }
                    }),
                    t.addType("image", {
                        model: {
                            defaults: {
                                traits: ["alt", {
                                        type: "checkbox",
                                        name: "loading",
                                        valueTrue: "lazy"
                                    }
                                ]
                            }
                        }
                    });
                    let i = t.getType("link").model;
                    t.addType("link", {
                        model: {
                            defaults: {
                                emptyState: !0,
                                traits: ["title", {
                                        type: "checkbox",
                                        name: "target",
                                        valueTrue: "_blank"
                                    }, {
                                        type: "href",
                                        name: "href"
                                    }
                                ]
                            },
                            getAttrToHTML() {
                                let t = i.prototype.getAttrToHTML.apply(this), {
                                    href: n
                                } = t;
                                if (n && 0 === n.indexOf(m)) {
                                    let o = n.replace(m, ""),
                                    r = e.Pages.get(o);
                                    t.href = r ? "./".concat((0, l.bg)(e, r)) : "##"
                                }
                                return t
                            }
                        }
                    }),
                    n.add("link", {
                        label: "Link",
                        content: {
                            type: "link",
                            content: "Link",
                            style: {
                                color: "#d983a6",
                                padding: "10px"
                            }
                        }
                    }, {
                        merge: !0
                    }),
                    t.addType("select", {
                        model: {
                            defaults: {
                                traits: [{
                                        name: "name"
                                    }, {
                                        type: "checkbox",
                                        name: "required"
                                    }, {
                                        name: "options",
                                        type: "stack",
                                        getValue(e) {
                                            let {
                                                component: t
                                            } = e;
                                            return t.components().map(e => ({
                                                    id: e.getAttributes().value || "",
                                                    label: e.getInnerHTML()
                                                }))
                                        },
                                        setValue: e => {
                                            let {
                                                component: t,
                                                value: n,
                                                emitUpdate: o
                                            } = e;
                                            t.components(n.map(e => ({
                                                        type: "option",
                                                        content: e.label,
                                                        attributes: {
                                                            value: e.id
                                                        }
                                                    }))),
                                            o()
                                        },
                                        properties: [{
                                                name: "id"
                                            }, {
                                                name: "label"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    });
                    let s = "contentEditable";
                    t.addType(s, {
                        extend: "text",
                        model: {
                            defaults: {
                                name: "Content",
                                tagName: "span",
                                hoverable: !1,
                                selectable: !1
                            },
                            toHTML(e) {
                                return this.getInnerHTML(e)
                            }
                        }
                    }),
                    t.addType("button", {
                        model: {
                            defaults: {
                                components: [{
                                        type: s,
                                        components: {
                                            type: "textnode",
                                            content: "Button"
                                        }
                                    }
                                ],
                                traits: [{
                                        type: "select",
                                        name: "type",
                                        options: [{
                                                id: "button",
                                                label: "Button"
                                            }, {
                                                id: "submit",
                                                label: "Submit"
                                            }, {
                                                id: "reset",
                                                label: "Reset"
                                            }
                                        ]
                                    }
                                ]
                            },
                            init() {
                                var e;
                                let t = [...this.components().models];
                                !(t.length > 1) && (null === (e = t[0]) || void 0 === e ? void 0 : e.is(s)) || this.append({
                                    type: s
                                })[0].append(t)
                            }
                        }
                    })
                },
                f = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        Components: n,
                        Blocks: o
                    } = e,
                    r = "heading";
                    o.add(r, {
                        label: r,
                        media: '\n        <svg viewBox="0 0 24 24">\n          <path d="M8.3 11.5h7.4V6.9l-.2-1.6a1 1 0 00-.5-.5c-.3-.2-.7-.3-1-.3h-.6v-.4h6.8v.4h-.6c-.4 0-.7.1-1 .3a1 1 0 00-.6.6L18 6.9v10.3c0 .8 0 1.3.2 1.6 0 .2.2.3.4.5.4.2.7.3 1.1.3h.6v.4h-6.8v-.4h.5c.7 0 1.2-.2 1.5-.6.2-.3.3-.9.3-1.8v-4.9H8.3v4.9l.1 1.6.5.5c.3.2.7.3 1 .3h.7v.4H3.7v-.4h.6c.7 0 1.1-.2 1.4-.6.2-.3.3-.9.3-1.8V6.9L6 5.3a1 1 0 00-.5-.5l-1-.3h-.7v-.4h6.9v.4H10c-.4 0-.8.1-1 .3a1 1 0 00-.6.6l-.1 1.5v4.6z"></path>\n        </svg>\n      ',
                        content: {
                            type: r,
                            components: "Insert your text here"
                        },
                        ...t.block
                    }, {
                        at: (0, l.ob)(e, "text")
                    }),
                    n.addType(r, {
                        extend: "text",
                        isComponent: e => (0, l.FS)(e, "H1", "H2", "H3", "H4", "H5", "H6"),
                        model: {
                            defaults: {
                                emptyState: !0,
                                tagName: "h1",
                                traits: [{
                                        type: "select",
                                        options: [{
                                                value: "h1",
                                                name: "One (largest)"
                                            }, {
                                                value: "h2",
                                                name: "Two"
                                            }, {
                                                value: "h3",
                                                name: "Three"
                                            }, {
                                                value: "h4",
                                                name: "Four"
                                            }, {
                                                value: "h5",
                                                name: "Five"
                                            }, {
                                                value: "h6",
                                                name: "Six (smallest)"
                                            }
                                        ],
                                        label: "Size",
                                        name: "tagName",
                                        changeProp: !0
                                    }
                                ]
                            }
                        }
                    })
                },
                b = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        Components: n,
                        Blocks: o
                    } = e,
                    r = e.Components.getType("default").model,
                    i = "imageBox",
                    s = "gjs-image-box";
                    o.add(i, {
                        label: i,
                        media: '\n        <svg viewBox="0 0 24 24">\n          <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z" />\n        </svg>\n      ',
                        content: {
                            type: i
                        },
                        ...t.block
                    }, {
                        at: (0, l.ob)(e, "image") + 1
                    }),
                    n.addType(i, {
                        extend: "image",
                        isComponent: e => (0, l.nX)(e, s),
                        model: {
                            defaults: {
                                tagName: "div",
                                void: !1,
                                droppable: !0,
                                emptyState: !1,
                                resizable: {
                                    tl: 0,
                                    tc: 0,
                                    tr: 0,
                                    cl: 0,
                                    cr: 0,
                                    bl: 0,
                                    br: 0
                                },
                                traits: ["title"],
                                attributes: {
                                    class: s
                                },
                                styles: "\n            .".concat(s, " {\n              height: 200px;\n              width: 100%;\n            }\n          ")
                            },
                            getAttrToHTML() {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                    t[n] = arguments[n];
                                return r.prototype.getAttrToHTML.apply(this, t)
                            }
                        },
                        view: {
                            tagName: "div",
                            updateSrc() {
                                let {
                                    model: e,
                                    em: t
                                } = this,
                                n = e.getSrcResult(),
                                o = e.isDefaultSrc(),
                                r = e.getStyle();
                                n && e.addStyle({
                                    "background-image": o && r["background-image"] || "url('".concat(n, "')"),
                                    "background-size": r["background-size"] || "contain",
                                    "background-position": r["background-position"] || "center center",
                                    "background-attachment": r["background-attachment"] || "scroll",
                                    "background-repeat": r["background-repeat"] || "no-repeat"
                                }),
                                n && t.trigger("component:toggled"),
                                this.$el[n ? "removeClass" : "addClass"](this.classEmpty)
                            },
                            onRender() {
                                this.renderChildren(),
                                this.updateSrc()
                            }
                        }
                    })
                },
                y = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        Components: n,
                        Blocks: o
                    } = e,
                    r = "linkBox",
                    i = "gjs-link-box";
                    o.add(r, {
                        label: r,
                        media: '\n        <svg viewBox="0 0 24 24">\n          <path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M11,16H10C8.39,16 6,14.94 6,12C6,9.07 8.39,8 10,8H11V10H10C9.54,10 8,10.17 8,12C8,13.9 9.67,14 10,14H11V16M14,16H13V14H14C14.46,14 16,13.83 16,12C16,10.1 14.33,10 14,10H13V8H14C15.61,8 18,9.07 18,12C18,14.94 15.61,16 14,16M15,13H9V11H15V13Z" />\n        </svg>\n      ',
                        content: {
                            type: r
                        },
                        ...t.block
                    }, {
                        at: (0, l.ob)(e, "link") + 1
                    }),
                    n.addType(r, {
                        isComponent: e => (0, l.nX)(e, i),
                        extend: "link",
                        model: {
                            defaults: {
                                editable: !1,
                                droppable: !0,
                                attributes: {
                                    class: i
                                },
                                styles: "\n            .".concat(i, " {\n              color: inherit;\n              display: inline-block;\n              vertical-align: top;\n              padding: 10px;\n              max-width: 100%;\n              text-decoration: none;\n            }\n          ")
                            }
                        }
                    })
                },
                v = n(16414),
                x = n(40969);
                let j = {
                    ratioDefault: !0,
                    tc: !1,
                    cl: !1,
                    cr: !1,
                    bc: !1
                },
                w = '<svg viewBox="0 0 24 24">\n  <path d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z"></path>\n</svg>';
                var Z = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        Components: n,
                        Blocks: o
                    } = e,
                    r = "icon",
                    i = "gjs-icon",
                    s = "data-type-icon";
                    o.add(r, {
                        label: r,
                        media: w,
                        content: {
                            type: r
                        },
                        ...t.block
                    }),
                    n.addType(r, {
                        isComponent: e => (0, l.nX)(e, i) || (0, l.Fk)(e, s),
                        model: {
                            defaults: {
                                droppable: !1,
                                attributes: {
                                    class: i,
                                    [s]: !0
                                },
                                resizable: j,
                                components: w,
                                traits: ["id", "title", {
                                        type: "code",
                                        label: "Content",
                                        typeProps: {
                                            language: "html",
                                            clean: !0,
                                            padding: 5
                                        },
                                        getValue(e) {
                                            let {
                                                component: t
                                            } = e;
                                            return t.getInnerHTML()
                                        },
                                        setValue: (0, x.Z)(e => {
                                            let {
                                                editor: t,
                                                component: n,
                                                value: o
                                            } = e,
                                            r = t.Parser.parseHtml(o).html,
                                            l = Array.isArray(r) ? r[0] : r;
                                            l && "svg" === l.tagName && n.components(l)
                                        }, 500)
                                    }
                                ],
                                styles: "\n            .".concat(i, " {\n              display: inline-block;\n              text-decoration: none;\n              color: inherit;\n              vertical-align: middle;\n              fill: currentColor;\n              width: 50px;\n              height: 50px;\n            }\n          ")
                            },
                            init() {
                                this.listenTo(this.components(), "change add", this.disableLayers),
                                this.disableLayers()
                            },
                            disableLayers() {
                                this.components().forEach(e => e.set("layerable", !1))
                            }
                        },
                        view: {
                            init() {
                                let {
                                    model: e
                                } = this;
                                this.listenTo(e.components(), "change", this.disableChildren)
                            },
                            onRender() {
                                this.disableChildren()
                            },
                            disableChildren() {
                                this.model.components().forEach(e => {
                                    var t;
                                    let n = null === (t = e.view) || void 0 === t ? void 0 : t.el;
                                    n && (n.style.pointerEvents = "none")
                                })
                            }
                        }
                    })
                };
                let S = "__nc",
                C = e => {
                    let t = e.getAttributes({
                        noClass: !0,
                        noStyle: !0
                    });
                    return e.traits.forEach(e => {
                        let n = e.getName();
                        e.get("changeProp") || delete t[n]
                    }),
                    delete t.id,
                    delete t.__p,
                    t
                };
                var k = n(82652),
                P = n(21133),
                T = n(27573),
                L = n(30353),
                H = n(16544),
                N = n(41062),
                V = n(17524),
                z = n(63877);
                function M(e) {
                    let {
                        Components: t
                    } = e, {
                        modalStore: n,
                        i18nStore: o
                    } = (0, V.bh)(),
                    r = {
                        id: "link",
                        name: "href",
                        label: "Link",
                        placeholder: "Link to redirect on click"
                    },
                    i = {
                        label: "Content",
                        getValue: e => {
                            let {
                                component: t
                            } = e;
                            return t.getInnerHTML()
                        },
                        setValue: e => {
                            let {
                                component: t,
                                value: n
                            } = e;
                            return t.components(n)
                        }
                    },
                    s = e => {
                        var t;
                        let n = e.getChildrenContainer();
                        (null == n ? void 0 : null === (t = n.innerHTML) || void 0 === t ? void 0 : t.trim()) === "" && (n.innerHTML = "")
                    },
                    a = e => e.set({
                        void: !1
                    }, {
                        silent: !0
                    });
                    t.addType("wrapper", {
                        model: {
                            defaults: {
                                stylable: !1,
                                delegate: {
                                    layer: e => e.findType("mjml")[0]
                                }
                            }
                        }
                    }),
                    t.addType("mjml", {
                        model: {
                            defaults: {
                                name: "Root",
                                toolbar: []
                            }
                        }
                    }),
                    t.addType("mj-head", {
                        model: {
                            defaults: {
                                name: "Head",
                                copyable: !1,
                                icon: '<svg viewBox="0 0 24 24">\n          <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />\n        </svg>'
                            }
                        },
                        view: {
                            init() {
                                this.listenTo(this.em, "run:core:preview", () => {
                                    this.el.style.display = "none"
                                }),
                                this.listenTo(this.em, "stop:core:preview", () => {
                                    this.el.style.display = ""
                                })
                            }
                        }
                    }),
                    t.addType("mj-attributes", {
                        isComponent: (0, l.Kf)("mj-attributes"),
                        model: {
                            defaults: {
                                name: "Attributes",
                                copyable: !1,
                                stylable: !1,
                                draggable: (0, l.Ee)("mj-head"),
                                traits: []
                            }
                        },
                        view: {
                            onRender() {
                                this.el.style.display = "none"
                            }
                        }
                    }),
                    t.addType("mj-class", {
                        isComponent: (0, l.Kf)("mj-class"),
                        model: {
                            defaults: {
                                name: "Class",
                                stylable: !1,
                                draggable: (0, l.Ee)("mj-head"),
                                traits: []
                            }
                        }
                    }),
                    t.addType("mj-all", {
                        isComponent: (0, l.Kf)("mj-all"),
                        model: {
                            defaults: {
                                name: "All",
                                stylable: !1,
                                draggable: (0, l.Ee)("mj-head"),
                                traits: []
                            }
                        }
                    }),
                    t.addType("mj-preview", {
                        isComponent: (0, l.Kf)("mj-preview"),
                        model: {
                            defaults: {
                                name: "Preview",
                                copyable: !1,
                                droppable: !1,
                                stylable: !1,
                                draggable: (0, l.Ee)("mj-head"),
                                traits: [i],
                                icon: '<svg viewBox="0 0 24 24">\n          <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />\n        </svg>'
                            }
                        },
                        view: {
                            tagName: () => "div",
                            init() {
                                let e = this.model.components();
                                this.onRender = (0, x.Z)(this.onRender, 1),
                                this.listenTo(e, "add remove reset change", this.onRender)
                            },
                            onRender() {
                                let {
                                    model: e,
                                    el: t
                                } = this,
                                n = e.getName({
                                    noCustom: !0
                                }),
                                o = e.getInnerHTML();
                                t.innerHTML = "<b>".concat(n, "</B>: ").concat(o),
                                t.style.padding = "5px 10px",
                                t.style.fontFamily = "system-ui"
                            }
                        }
                    }),
                    t.addType("mj-title", {
                        isComponent: (0, l.Kf)("mj-title"),
                        extend: "mj-preview",
                        model: {
                            defaults: {
                                name: "Title",
                                icon: '<svg viewBox="0 0 24 24"><path d="M5,4V7H10.5V19H13.5V7H19V4H5Z" /></svg>'
                            }
                        }
                    }),
                    t.addType("mj-style", {
                        model: {
                            defaults: {
                                name: "Style",
                                droppable: !1,
                                stylable: !1,
                                traits: []
                            }
                        }
                    }),
                    t.addType("mj-body", {
                        model: {
                            defaults: {
                                icon: '<svg viewBox="0 0 24 24">\n          <path d="M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M6,8V16H18V8H6Z" />\n        </svg>',
                                emptyState: {
                                    midSelector: ">div",
                                    styleOut: "height: 100vh;"
                                }
                            }
                        }
                    }),
                    t.addType("mj-section", {
                        extendFn: ["init"],
                        model: {
                            defaults: {
                                icon: '<svg viewBox="0 0 24 24">\n          <path d="M2,3V6H21V3M20,8H3A1,1 0 0,0 2,9V15A1,1 0 0,0 3,16H20A1,1 0 0,0 21,15V9A1,1 0 0,0 20,8M2,21H21V18H2V21Z" />\n        </svg>',
                                emptyState: {
                                    midSelector: ">div>div>table>tbody>tr>td"
                                }
                            },
                            init() {
                                a(this)
                            }
                        },
                        extendFnView: ["render"],
                        view: {
                            render() {
                                return s(this),
                                this
                            }
                        }
                    }),
                    t.addType("mj-column", {
                        extendFn: ["init"],
                        model: {
                            defaults: {
                                icon: '<svg viewBox="0 0 24 24" style="rotate: 90deg;">\n          <path d="M2,3V6H21V3M20,8H3A1,1 0 0,0 2,9V15A1,1 0 0,0 3,16H20A1,1 0 0,0 21,15V9A1,1 0 0,0 20,8M2,21H21V18H2V21Z" />\n        </svg>',
                                emptyState: {
                                    midSelector: ">table",
                                    styleIn: "margin: 0 10px;"
                                }
                            },
                            init() {
                                a(this)
                            }
                        }
                    }),
                    t.addType("mj-text", {
                        model: {
                            defaults: {
                                emptyState: {
                                    midSelector: ' [contenteditable="false"]',
                                    styleIn: "min-height: 20px;",
                                    styleOut: "padding: 0 5px;"
                                },
                                traits: []
                            }
                        }
                    }),
                    t.addType("mj-button", {
                        model: {
                            defaults: {
                                traits: [r]
                            }
                        }
                    }),
                    t.addType("mj-image", {
                        model: {
                            defaults: {
                                "style-default": {
                                    padding: "10px 25px",
                                    align: "center"
                                },
                                traits: [{
                                        name: "src",
                                        changeProp: !0,
                                        type: "image",
                                        label: "Image"
                                    }, {
                                        id: "altText",
                                        name: "alt",
                                        placeholder: "Image description"
                                    }, "title", r]
                            }
                        }
                    }),
                    t.addType("mj-divider", {
                        model: {
                            defaults: {
                                attributes: {
                                    align: "center"
                                },
                                traits: [{
                                        name: "align",
                                        type: "radio",
                                        options: [{
                                                id: "left",
                                                title: "Left",
                                                labelReact: (0, T.jsx)(L.ZP, {
                                                    icon: L.do.alignHorizontalLeft,
                                                    size: N.qv.sx
                                                })
                                            }, {
                                                id: "center",
                                                title: "Center",
                                                labelReact: (0, T.jsx)(L.ZP, {
                                                    icon: L.do.alignHorizontalCenter,
                                                    size: N.qv.sx
                                                })
                                            }, {
                                                id: "right",
                                                title: "Right",
                                                labelReact: (0, T.jsx)(L.ZP, {
                                                    icon: L.do.alignHorizontalRight,
                                                    size: N.qv.sx
                                                })
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }),
                    t.addType("mj-social", {
                        model: {
                            defaults: {
                                name: "Social",
                                traits: [],
                                emptyState: {
                                    midSelector: ">td"
                                }
                            }
                        }
                    });
                    let {
                        view: c
                    } = t.getType("mj-social-element");
                    t.addType("mj-social-element", {
                        extendFn: ["init"],
                        model: {
                            defaults: {
                                traits: [{
                                        type: "select",
                                        label: "Icon",
                                        name: "name",
                                        options: [{
                                                id: "custom",
                                                name: "Custom"
                                            }, {
                                                id: "facebook",
                                                name: "Facebook"
                                            }, {
                                                id: "twitter",
                                                name: "Twitter"
                                            }, {
                                                id: "google",
                                                name: "Google"
                                            }, {
                                                id: "instagram",
                                                name: "Instagram"
                                            }, {
                                                id: "web",
                                                name: "Web"
                                            }, {
                                                id: "youtube",
                                                name: "Youtube"
                                            }, {
                                                id: "pinterest",
                                                name: "Pinterest"
                                            }, {
                                                id: "linkedin",
                                                name: "Linkedin"
                                            }, {
                                                id: "snapchat",
                                                name: "Snapchat"
                                            }, {
                                                id: "vimeo",
                                                name: "Vimeo"
                                            }, {
                                                id: "tumblr",
                                                name: "Tumblr"
                                            }, {
                                                id: "github",
                                                name: "Github"
                                            }, {
                                                id: "soundcloud",
                                                name: "SoundCloud"
                                            }, {
                                                id: "medium",
                                                name: "Medium"
                                            }, {
                                                id: "dribbble",
                                                name: "Dribbble"
                                            }, {
                                                id: "xing",
                                                name: "Xing"
                                            }
                                        ]
                                    }, {
                                        name: "src",
                                        changeProp: !0,
                                        type: "image",
                                        label: "Image"
                                    }, r, i]
                            },
                            init() {
                                a(this)
                            }
                        },
                        extendFnView: ["init"],
                        view: {
                            init() {
                                this.listenTo(this.model, "component:update:components", this.rerender)
                            },
                            getInnerMjmlTemplate() {
                                var e;
                                let {
                                    start: t,
                                    end: n
                                } = c.prototype.getInnerMjmlTemplate.call(this),
                                o = (null === (e = this.model.getInnerHTML()) || void 0 === e ? void 0 : e.trim()) || "";
                                return {
                                    start: "".concat(t).concat(o),
                                    end: n
                                }
                            },
                            getChildrenContainer() {
                                var e;
                                let {
                                    el: t
                                } = this,
                                n = null === (e = t.querySelector("tbody > tr > td")) || void 0 === e ? void 0 : e.nextElementSibling;
                                return (null == n ? void 0 : n.firstElementChild) || t.querySelector("img") || t
                            }
                        }
                    }),
                    t.addType("mj-spacer", {
                        model: {
                            defaults: {
                                traits: []
                            }
                        }
                    }),
                    t.addType("mj-navbar", {
                        model: {
                            defaults: {
                                emptyState: {
                                    midSelector: ">td>div"
                                }
                            }
                        }
                    }),
                    t.addType("mj-navbar-link", {
                        model: {
                            defaults: {
                                icon: '<svg viewBox="0 0 24 24">\n          <path fill="currentColor" d="M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z" />\n        </svg>',
                                emptyState: {
                                    midSelector: ">td>div"
                                }
                            }
                        }
                    });
                    let d = e => {
                        n.open({
                            title: e.getName({
                                noCustom: !0
                            }),
                            content: () => (0, T.jsx)(H.Z, {
                                content: "",
                                code: e.getInnerHTML(),
                                onAction: t => e.components(t),
                                buttonProps: {
                                    children: o.t("save")
                                }
                            })
                        })
                    };
                    t.addType("mj-raw", {
                        extendFn: ["initToolbar"],
                        model: {
                            defaults: {
                                name: "HTML block",
                                emptyState: {
                                    midSelector: ">div"
                                }
                            },
                            initToolbar() {
                                (0, l.LP)(this, {
                                    id: "edit",
                                    command: () => d(this),
                                    label: '<svg viewBox="0 0 24 24">\n            <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"></path>\n          </svg>'
                                })
                            }
                        },
                        view: {
                            events: {
                                dblclick: "onActive"
                            },
                            onActive() {
                                d(this.model)
                            }
                        }
                    });
                    let u = e => {
                        let {
                            id: n,
                            view: o
                        } = e,
                        r = o.prototype;
                        t.addType(n, {
                            view: {
                                render() {
                                    return r.render.apply(this, arguments),
                                    (0, z.Vk)(n, this),
                                    this
                                }
                            }
                        })
                    };
                    ["mj-body", "mj-section", "mj-column", "mj-text", "mj-navbar", "mj-social", "mj-raw"].forEach(e => u(t.getType(e))),
                    t.getTypes().forEach(e => {
                        let {
                            id: n,
                            view: o
                        } = e;
                        o.prototype.disableEditing && t.addType(n, {
                            view: {
                                onDisable() {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    this.disableEditing({
                                        ...e,
                                        parserOptions: {
                                            htmlType: "text/html"
                                        }
                                    })
                                }
                            }
                        })
                    })
                }
                var A = n(42807),
                B = n(81529),
                E = n(37093);
                let O = (e, t) => ({
                    [r.cd.web]: e => (function (e, t) {
                        let {
                            appStore: n
                        } = t;
                        e.Css.getConfig().onBeforeStyle = v.Z;
                        let o = e.Parser.getConfig().optionsHtml;
                        o.htmlType = "text/html";
                        let r = n.sdkOptions.pages || {};
                        (!(0, k.Xq)(r.allowDocuments) || r.allowDocuments) && (o.detectDocument = !0, o.allowScripts = !0),
                        e.Components.addType("trait-check", {
                            model: {
                                defaults: {
                                    traits: ["id", "title", {
                                            type: "select",
                                            name: "select-type",
                                            options: [{
                                                    id: "value1",
                                                    label: "Value 1"
                                                }, {
                                                    id: "value2",
                                                    label: "Value 2"
                                                }, {
                                                    id: "value3",
                                                    label: "Value 3"
                                                }
                                            ]
                                        }, {
                                            type: "number",
                                            name: "number-type",
                                            units: ["px", "rem", "%"]
                                        }, {
                                            type: "checkbox",
                                            name: "checkbox-type"
                                        }, {
                                            type: "color",
                                            name: "color-type"
                                        }, {
                                            type: "button",
                                            name: "button-type",
                                            label: "Delete",
                                            command: "core:component-delete"
                                        }
                                    ]
                                }
                            }
                        });
                        let l = {
                            category: "Basic",
                            select: !0,
                            activate: !0
                        };
                        (0, P.ZP)(e, t),
                        h(e, {}),
                        s(e, {
                            block: l
                        }),
                        f(e, {
                            block: l
                        }),
                        p(e, {
                            block: l
                        }),
                        g(e, {
                            block: l
                        }),
                        b(e, {
                            block: l
                        }),
                        y(e, {
                            block: l
                        }),
                        Z(e, {
                            block: l
                        }),
                        function (e) {
                            let {
                                Components: t
                            } = e;
                            t.getTypes().forEach(e => {
                                let {
                                    model: n,
                                    id: o
                                } = e,
                                r = n.getDefaults();
                                t.addType(o, {
                                    model: {
                                        defaults: {
                                            traits: [...r.traits, {
                                                    name: "customAttributes",
                                                    type: "stack",
                                                    getValue(e) {
                                                        let {
                                                            component: t
                                                        } = e,
                                                        n = C(t);
                                                        return Object.keys(n).map(e => ({
                                                                id: e,
                                                                value: n[e]
                                                            }))
                                                    },
                                                    setValue: e => {
                                                        let {
                                                            component: t,
                                                            value: n,
                                                            options: o,
                                                            emitUpdate: r
                                                        } = e,
                                                        l = o.removed,
                                                        i = o.previous,
                                                        s = o.item;
                                                        if (l)
                                                            t.removeAttributes(l.id);
                                                        else {
                                                            i && s && i.id !== s.id && t.removeAttributes(i.id);
                                                            let e = n.reduce((e, t) => (e[t.id] = t.value || "", e), {});
                                                            t.addAttributes(e)
                                                        }
                                                        r()
                                                    },
                                                    addItem: () => ({
                                                        id: S,
                                                        value: !1
                                                    }),
                                                    labelItem: e => e.id !== S && (e.id || e.value) ? "".concat(e.id || "", '="').concat(e.value || "", '"') : "- Empty -",
                                                    properties: [{
                                                            name: "id",
                                                            label: "Name",
                                                            getValue: e => e === S ? "" : e,
                                                            setValue: (e, t) => e.trim().toLowerCase().replace(/^[^a-z]{1}/gi, "_").replace(/\s+/g, "-") || t
                                                        }, {
                                                            name: "value",
                                                            label: "Value",
                                                            getValue: e => "boolean" == typeof e ? "" : e
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                })
                            })
                        }
                        (e)
                    })(e, t),
                    [r.cd.email]: M
                })[e],
                D = {
                    global: [{
                            id: "grapesjs-indexeddb",
                            src: "https://unpkg.com/grapesjs-indexeddb@1.0.4/dist/index.js",
                            options: {
                                type: "local"
                            }
                        }
                    ],
                    [r.cd.email]: [function (e) {
                            let {
                                Blocks: t
                            } = e,
                            n = {
                                className: "h-7",
                                full: !0,
                                space: "s",
                                nowrap: !0
                            },
                            o = {
                                category: "Layout",
                                full: !0
                            },
                            r = "gjs-border-2 gjs-border-current gjs-rounded-sm",
                            l = (e, n) => {
                                t.add(e, {
                                    select: !0,
                                    category: "Content",
                                    ...n
                                })
                            };
                            l("mj-text", {
                                label: "Text",
                                media: '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />\n    </svg>',
                                content: "<mj-text>Insert text here</mj-text>",
                                activate: !0
                            }),
                            l("mj-button", {
                                label: "Button",
                                media: '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z" />\n    </svg>',
                                content: "<mj-button>Button</mj-button>"
                            }),
                            l("mj-image", {
                                label: "Image",
                                media: '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />\n    </svg>',
                                content: '<mj-image src="'.concat(k.Oc, '"/>'),
                                activate: !0
                            }),
                            l("mj-divider", {
                                label: "Divider",
                                media: '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z" />\n    </svg>',
                                content: "<mj-divider/>"
                            }),
                            l("mj-social", {
                                label: "Social",
                                media: '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />\n    </svg>',
                                content: '<mj-social font-size="12px" icon-size="24px" border-radius="12px" mode="horizontal">\n        <mj-social-element name="facebook"></mj-social-element>\n        <mj-social-element name="linkedin"></mj-social-element>\n        <mj-social-element name="twitter"></mj-social-element>\n      </mj-social>'
                            }),
                            l("mj-social-element", {
                                label: "Social Element",
                                media: '<svg viewBox="0 0 24 24">\n      <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z" />\n    </svg>',
                                content: '<mj-social-element name="facebook">Facebook</mj-social-element>'
                            }),
                            l("mj-spacer", {
                                label: "Spacer",
                                media: '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z" />\n    </svg>',
                                content: "<mj-spacer/>"
                            }),
                            l("mj-navbar", {
                                label: "Navbar",
                                media: '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />\n    </svg>',
                                content: "<mj-navbar>\n      <mj-navbar-link>HOME</mj-navbar-link>\n      <mj-navbar-link>ABOUT</mj-navbar-link>\n      <mj-navbar-link>CONTACT</mj-navbar-link>\n      <mj-navbar-link>BLOG</mj-navbar-link>\n    </mj-navbar>"
                            }),
                            l("mj-hero", {
                                label: "Hero",
                                media: '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />\n    </svg>',
                                content: '<mj-hero mode="fixed-height" height="469px" background-width="600px" background-height="469px" background-url="'.concat((0, k._s)({
                                        width: 600,
                                        height: 300,
                                        text: "Hero Image",
                                        fg: "555"
                                    }), '" background-color="#2a3448" padding="100px 0px">\n      <mj-text padding="20px" color="#ffffff" font-family="Helvetica" align="center" font-size="45px" line-height="45px" font-weight="900">\n        Heading title\n      </mj-text>\n      <mj-text padding="20px" color="#ffffff" font-family="Helvetica" align="center">\n        Place here your hero content text\n      </mj-text>\n      <mj-button href="https://mjml.io/" align="center">\n        Call to action!\n      </mj-button>\n    </mj-hero>')
                            }),
                            l("mj-raw", {
                                label: "HTML block",
                                activate: !0,
                                media: '<svg viewBox="0 0 24 24">\n      <path d="M5.59 3.41L7 4.82L3.82 8L7 11.18L5.59 12.6L1 8L5.59 3.41M11.41 3.41L16 8L11.41 12.6L10 11.18L13.18 8L10 4.82L11.41 3.41M22 6V18C22 19.11 21.11 20 20 20H4C2.9 20 2 19.11 2 18V14H4V18H20V6H17.03V4H20C21.11 4 22 4.89 22 6Z" />\n    </svg>',
                                content: "<mj-raw>\n      <span>Insert here you custom HTML</span>\n    </mj-raw>"
                            }),
                            l("mj-1-column", {
                                ...o,
                                label: "1 Column",
                                mediaReact: (0, T.jsx)(A.Z, {
                                    ...n,
                                    children: (0, T.jsx)(B.Z, {
                                        className: r,
                                        grow: !0
                                    })
                                }),
                                content: "<mj-section>\n        <mj-column></mj-column>\n      </mj-section>"
                            }),
                            l("mj-2-columns-50-50", {
                                ...o,
                                label: "2 Columns 50/50",
                                mediaReact: (0, T.jsxs)(A.Z, {
                                    ...n,
                                    children: [(0, T.jsx)(B.Z, {
                                            className: r,
                                            grow: !0
                                        }), (0, T.jsx)(B.Z, {
                                            className: r,
                                            grow: !0
                                        })]
                                }),
                                content: "<mj-section>\n      <mj-column></mj-column>\n      <mj-column></mj-column>\n    </mj-section>"
                            }),
                            l("mj-2-columns-25-75", {
                                ...o,
                                label: "2 Columns 25/75",
                                mediaReact: (0, T.jsxs)(A.Z, {
                                    ...n,
                                    children: [(0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-1/4")
                                        }), (0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-3/4")
                                        })]
                                }),
                                content: '<mj-section>\n      <mj-column width="25%"></mj-column>\n      <mj-column width="75%"></mj-column>\n    </mj-section>'
                            }),
                            l("mj-2-columns-33-67", {
                                ...o,
                                label: "2 Columns 33/67",
                                mediaReact: (0, T.jsxs)(A.Z, {
                                    ...n,
                                    children: [(0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-1/3")
                                        }), (0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-2/3")
                                        })]
                                }),
                                content: '<mj-section>\n      <mj-column width="33%"></mj-column>\n      <mj-column width="67%"></mj-column>\n    </mj-section>'
                            }),
                            l("mj-2-columns-67-33", {
                                ...o,
                                label: "2 Columns 67/33",
                                mediaReact: (0, T.jsxs)(A.Z, {
                                    ...n,
                                    children: [(0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-2/3")
                                        }), (0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-1/3")
                                        })]
                                }),
                                content: '<mj-section>\n      <mj-column width="67%"></mj-column>\n      <mj-column width="33%"></mj-column>\n    </mj-section>'
                            }),
                            l("mj-2-columns-75-25", {
                                ...o,
                                label: "2 Columns 75/25",
                                mediaReact: (0, T.jsxs)(A.Z, {
                                    ...n,
                                    children: [(0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-3/4")
                                        }), (0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-1/4")
                                        })]
                                }),
                                content: '<mj-section>\n      <mj-column width="75%"></mj-column>\n      <mj-column width="25%"></mj-column>\n    </mj-section>'
                            }),
                            l("mj-3-columns", {
                                ...o,
                                label: "3 Columns",
                                mediaReact: (0, T.jsxs)(A.Z, {
                                    ...n,
                                    children: [(0, T.jsx)(B.Z, {
                                            className: r,
                                            grow: !0
                                        }), (0, T.jsx)(B.Z, {
                                            className: r,
                                            grow: !0
                                        }), (0, T.jsx)(B.Z, {
                                            className: r,
                                            grow: !0
                                        })]
                                }),
                                content: "<mj-section>\n        <mj-column></mj-column>\n        <mj-column></mj-column>\n        <mj-column></mj-column>\n      </mj-section>"
                            }),
                            l("mj-3-columns-25-25-50", {
                                ...o,
                                label: "3 Columns 25/25/50",
                                mediaReact: (0, T.jsxs)(A.Z, {
                                    ...n,
                                    children: [(0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-1/4")
                                        }), (0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-1/4")
                                        }), (0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-2/4")
                                        })]
                                }),
                                content: '<mj-section>\n        <mj-column width="25%"></mj-column>\n        <mj-column width="25%"></mj-column>\n        <mj-column width="50%"></mj-column>\n      </mj-section>'
                            }),
                            l("mj-3-columns-25-50-25", {
                                ...o,
                                label: "3 Columns 25/50/25",
                                mediaReact: (0, T.jsxs)(A.Z, {
                                    ...n,
                                    children: [(0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-1/4")
                                        }), (0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-2/4")
                                        }), (0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-1/4")
                                        })]
                                }),
                                content: '<mj-section>\n        <mj-column width="25%"></mj-column>\n        <mj-column width="50%"></mj-column>\n        <mj-column width="25%"></mj-column>\n      </mj-section>'
                            }),
                            l("mj-3-columns-50-25-25", {
                                ...o,
                                label: "3 Columns 50/25/25",
                                mediaReact: (0, T.jsxs)(A.Z, {
                                    ...n,
                                    children: [(0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-2/4")
                                        }), (0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-1/4")
                                        }), (0, T.jsx)(B.Z, {
                                            className: (0, E.cx)(r, "gs-utl-basis-1/4")
                                        })]
                                }),
                                content: '<mj-section>\n        <mj-column width="50%"></mj-column>\n        <mj-column width="25%"></mj-column>\n        <mj-column width="25%"></mj-column>\n      </mj-section>'
                            }),
                            l("mj-4-columns", {
                                ...o,
                                label: "4 Columns",
                                mediaReact: (0, T.jsxs)(A.Z, {
                                    ...n,
                                    children: [(0, T.jsx)(B.Z, {
                                            className: r,
                                            grow: !0
                                        }), (0, T.jsx)(B.Z, {
                                            className: r,
                                            grow: !0
                                        }), (0, T.jsx)(B.Z, {
                                            className: r,
                                            grow: !0
                                        }), (0, T.jsx)(B.Z, {
                                            className: r,
                                            grow: !0
                                        })]
                                }),
                                content: "<mj-section>\n        <mj-column></mj-column>\n        <mj-column></mj-column>\n        <mj-column></mj-column>\n        <mj-column></mj-column>\n      </mj-section>"
                            })
                        }, {
                            id: "grapesjs-mjml",
                            src: "https://unpkg.com/grapesjs-mjml@1.0.5/dist/index.js",
                            options: {
                                columnsPadding: "",
                                useCustomTheme: !1,
                                resetDevices: !1,
                                resetBlocks: !1,
                                blocks: [],
                                useXmlParser: !0,
                                resetStyleManager: !1
                            }
                        }
                    ],
                    [r.cd.web]: [{
                            id: "gjs-blocks-basic",
                            src: "https://unpkg.com/grapesjs-blocks-basic@1.0.1/dist/index.js"
                        }, {
                            id: "grapesjs-plugin-forms",
                            src: "https://unpkg.com/grapesjs-plugin-forms@2.0.5/dist/index.js"
                        }, {
                            id: "grapesjs-plugin-export",
                            src: "https://unpkg.com/grapesjs-plugin-export@1.0.11/dist/index.js",
                            options: {
                                isBinary: (e, t) => {
                                    let n = t.split(".")[1];
                                    return /[\x00-\x08\x0E-\x1F]/.test(e) && !(n && ["html", "css"].indexOf(n) >= 0)
                                }
                            }
                        }, {
                            id: "grapesjs-parser-postcss",
                            src: "https://unpkg.com/grapesjs-parser-postcss@1.0.1/dist/index.js"
                        }, {
                            id: "grapesjs-tui-image-editor",
                            src: "https://unpkg.com/grapesjs-tui-image-editor@1.0.1/dist/index.js"
                        }, {
                            id: "grapesjs-navbar",
                            src: "https://unpkg.com/grapesjs-navbar@1.0.1/dist/index.js",
                            options: {
                                block: {
                                    category: "Extra"
                                }
                            }
                        }
                    ]
                };
                var R = n(97620);
                let I = /\s(?![^(]*\))/,
                F = /^-?[0-9]+[a-zA-Z%]{0,}$/;
                function _(e) {
                    let t = e.split(I),
                    n = t.indexOf("inset") >= 0,
                    o = t.filter(e => "inset" !== e),
                    r = o.filter(e => !F.test(e))[0] || "currentColor",
                    [l = "0", i = "0", s = "0", a = "0"] = o.filter(e => F.test(e));
                    return {
                        x: l,
                        y: i,
                        blur: s,
                        spread: a,
                        inset: n,
                        color: r
                    }
                }
                var U = n(41693),
                X = n(80513),
                q = n(82520);
                let W = ["%"],
                Y = ["s", "ms"],
                G = ["deg", "rad", "grad"],
                K = ["px", "%", "em", "rem", "vw", "vh"],
                J = {
                    type: "select",
                    options: ["visible", "hidden", "scroll", "auto"].map(e => ({
                            id: e
                        })),
                default:
                    "visible"
                },
                $ = e => "linear-gradient(".concat(e, " 1%, ").concat(e, " 100%)"),
                Q = e => ({
                    id: e,
                    label: e.split("-").map(k.kC).join(" ")
                }),
                ee = e => t => {
                    let {
                        property: n,
                        to: o
                    } = t;
                    if (o.value) {
                        let t = n.getOption(),
                        o = n.getParent().getProperty(e),
                        r = o.getUnit(),
                        l = {
                            units: t.units || [],
                            min: t.min,
                            max: t.max,
                            unit: ""
                        };
                        (!r || (null == l ? void 0 : l.units.indexOf(r)) < 0) && (l.unit = (null == l ? void 0 : l.units[0]) || ""),
                        o.up(l)
                    }
                },
                et = e => {
                    let t = {
                        [X.zw]: e
                    };
                    if (e.indexOf("url(") > -1)
                        t[X.dX] = X.Eo.Image;
                    else if (e.indexOf("gradient(") > -1) {
                        let n = (0, q.k)(e),
                        o = n.colorStops,
                        r = n.name.indexOf("linear") >= 0;
                        2 === o.length && r && o[0].color === o[1].color ? t[X.dX] = X.Eo.Color : t[X.dX] = X.Eo.Gradient
                    } else
                        t[X.dX] = X.Eo.Color, t[X.zw] = $(e);
                    return t
                },
                en = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "filter",
                    t = "".concat(e, "-name"),
                    n = "".concat(e, "-value");
                    return {
                        property: e,
                        type: "stack",
                        layerSeparator: " ",
                        fromStyle(o, r) {
                            let {
                                separatorLayers: l
                            } = r,
                            i = o[e] || "";
                            return i ? i.split(l).map(e => {
                                let {
                                    name: o,
                                    value: r
                                } = (0, U.Z)(e);
                                return {
                                    [t]: o,
                                    [n]: r
                                }
                            }) : []
                        },
                        toStyle(e, o) {
                            let {
                                name: r
                            } = o;
                            return {
                                [r]: "".concat(e[t], "(").concat(e[n] || "0", ")")
                            }
                        },
                        properties: [{
                                property: t,
                                type: "select",
                            default:
                                "blur",
                                options: [{
                                        id: "blur",
                                        label: "Blur",
                                        min: 0,
                                        units: ["px", "em", "rem", "vw", "vh"]
                                    }, {
                                        id: "brightness",
                                        label: "Brightness",
                                        min: 0,
                                        units: ["%"]
                                    }, {
                                        id: "contrast",
                                        label: "Contrast",
                                        min: 0,
                                        units: ["%"]
                                    }, {
                                        id: "grayscale",
                                        label: "Grayscale",
                                        min: 0,
                                        max: 100,
                                        units: ["%"]
                                    }, {
                                        id: "hue-rotate",
                                        label: "Hue rotate",
                                        min: 0,
                                        max: 360,
                                        units: ["deg", "rad", "grad"]
                                    }, {
                                        id: "invert",
                                        label: "Invert",
                                        min: 0,
                                        max: 100,
                                        units: ["%"]
                                    }, {
                                        id: "saturate",
                                        label: "Saturate",
                                        min: 0,
                                        units: ["%"]
                                    }, {
                                        id: "sepia",
                                        label: "Sepia",
                                        min: 0,
                                        max: 100,
                                        units: ["%"]
                                    }
                                ],
                                onChange: ee(n)
                            }, {
                                property: n,
                                type: "integer"
                            }
                        ]
                    }
                },
                eo = function (e) {
                    let {
                        x: t,
                        y: n,
                        mergable: o
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = {
                        property: "".concat(e, "-x"),
                        type: "integer",
                        units: K,
                        ...t
                    },
                    l = {
                        property: "".concat(e, "-y"),
                        type: "integer",
                        units: K,
                        ...n
                    };
                    return {
                        property: e,
                        type: "composite",
                        properties: [r, l],
                        ...o && {
                            fromStyle(e, t) {
                                let {
                                    name: n,
                                    separator: o,
                                    property: r
                                } = t,
                                [l, i] = r.getProperties(),
                                [s, a] = (e[n] || "").split(o);
                                return {
                                    [l.getId()]: e[l.getName()] || s || "",
                                    [i.getId()]: e[i.getName()] || a || s || ""
                                }
                            },
                            toStyle(e, t) {
                                let {
                                    name: n,
                                    property: o
                                } = t,
                                [r, l] = o.getProperties(),
                                i = e[r.getId()],
                                s = e[l.getId()];
                                return {
                                    [n]: i === s ? i : "".concat(i, " ").concat(s)
                                }
                            }
                        }
                    }
                },
                er = [{
                        name: "Size",
                        open: !1,
                        buildProps: ["width", "height", "max-width", "min-height"],
                        properties: [{
                                property: "icon-size",
                                type: "number",
                                defaults: "20px",
                                units: ["px", "%"]
                            }
                        ]
                    }, {
                        name: "Space",
                        open: !1,
                        buildProps: ["margin", "padding", "vertical-align"],
                        properties: [{
                                property: "margin",
                                properties: [{
                                        name: "Top",
                                        property: "margin-top"
                                    }, {
                                        name: "Right",
                                        property: "margin-right"
                                    }, {
                                        name: "Bottom",
                                        property: "margin-bottom"
                                    }, {
                                        name: "Left",
                                        property: "margin-left"
                                    }
                                ]
                            }, {
                                property: "padding",
                                properties: [{
                                        name: "Top",
                                        property: "padding-top"
                                    }, {
                                        name: "Right",
                                        property: "padding-right"
                                    }, {
                                        name: "Bottom",
                                        property: "padding-bottom"
                                    }, {
                                        name: "Left",
                                        property: "padding-left"
                                    }
                                ]
                            }, {
                                property: "vertical-align",
                                type: "select",
                                options: ["top", "middle", "bottom"].map(Q)
                            }
                        ]
                    }, {
                        name: "Typography",
                        open: !1,
                        buildProps: ["font-family", "font-size", "font-weight", "letter-spacing", "color", "line-height", "text-align", "align", "text-decoration", "font-style"],
                        properties: [{
                                name: "Font",
                                property: "font-family"
                            }, {
                                name: "Weight",
                                property: "font-weight"
                            }, {
                                name: "Font color",
                                property: "color"
                            }, {
                                property: "text-align",
                                defaults: "left",
                                type: "select",
                                options: [{
                                        id: "left",
                                        label: "Left"
                                    }, {
                                        id: "center",
                                        label: "Center"
                                    }, {
                                        id: "right",
                                        label: "Right"
                                    }, {
                                        id: "justify",
                                        label: "Justify"
                                    }
                                ]
                            }, {
                                property: "align",
                                defaults: "left",
                                type: "select",
                                options: [{
                                        id: "left",
                                        label: "Left"
                                    }, {
                                        id: "center",
                                        label: "Center"
                                    }, {
                                        id: "right",
                                        label: "Right"
                                    }, {
                                        id: "justify",
                                        label: "Justify"
                                    }
                                ]
                            }, {
                                property: "text-decoration",
                                type: "select",
                                defaults: "none",
                                options: [{
                                        id: "none",
                                        label: "None"
                                    }, {
                                        id: "underline",
                                        label: "underline"
                                    }, {
                                        id: "line-through",
                                        label: "Line-through"
                                    }
                                ]
                            }, {
                                property: "font-style",
                                type: "select",
                                defaults: "normal",
                                options: [{
                                        id: "normal",
                                        label: "Normal"
                                    }, {
                                        id: "italic",
                                        label: "Italic"
                                    }
                                ]
                            }
                        ]
                    }, {
                        name: "Borders",
                        open: !1,
                        buildProps: ["border-radius", "border"],
                        properties: [{
                                property: "border-radius",
                                corners: !0,
                                properties: [{
                                        name: "Top",
                                        property: "border-top-left-radius"
                                    }, {
                                        name: "Right",
                                        property: "border-top-right-radius"
                                    }, {
                                        name: "Bottom",
                                        property: "border-bottom-left-radius"
                                    }, {
                                        name: "Left",
                                        property: "border-bottom-right-radius"
                                    }
                                ]
                            }, {
                                property: "border",
                                generic: !0
                            }, {
                                property: "border-detached",
                                name: "Border",
                                type: "composite",
                                detached: !0,
                                generic: !0,
                                properties: [{
                                        name: "Width",
                                        property: "border-width",
                                        type: "integer",
                                        units: ["px", "%"]
                                    }, {
                                        name: "Style",
                                        property: "border-style",
                                        type: "select",
                                        options: ["none", "solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset"].map(Q)
                                    }, {
                                        name: "Color",
                                        property: "border-color",
                                        type: "color"
                                    }
                                ]
                            }
                        ]
                    }, {
                        name: "Decorations",
                        open: !1,
                        buildProps: ["background-color", "container-background-color", "background-url", "background-repeat", "background-size"],
                        properties: [{
                                name: "Background color",
                                property: "container-background-color",
                                full: !0,
                                type: "color"
                            }, {
                                property: "background-url",
                                type: "file"
                            }
                        ]
                    }
                ],
                el = [{
                        id: "gs-layout",
                        name: "Layout",
                        properties: [{
                                extend: "display"
                            }, {
                                extend: "flex-direction",
                                name: "Direction",
                                type: "radio",
                            default:
                                "row"
                            }, {
                                extend: "justify-content",
                                type: "radio",
                            default:
                                "flex-start"
                            }, {
                                extend: "align-items",
                                type: "radio",
                            default:
                                "stretch"
                            }, eo("gap", {
                                x: {
                                    property: "row-gap",
                                    min: 0,
                                default:
                                    "0"
                                },
                                y: {
                                    property: "column-gap",
                                    min: 0,
                                default:
                                    "0"
                                },
                                mergable: !0
                            }), {
                                extend: "flex-wrap"
                            }, {
                                extend: "align-content"
                            }, {
                                extend: "align-self"
                            }, {
                                extend: "order"
                            }, {
                                property: "flex",
                                type: "composite",
                                properties: [{
                                        type: "integer",
                                        property: "flex-grow",
                                    default:
                                        "0",
                                        min: 0
                                    }, {
                                        type: "integer",
                                        property: "flex-shrink",
                                    default:
                                        "0",
                                        min: 0
                                    }, {
                                        type: "integer",
                                        property: "flex-basis",
                                        fixedValues: ["auto"],
                                    default:
                                        "auto",
                                        units: K,
                                        min: 0
                                    }
                                ]
                            }
                        ]
                    }, {
                        id: "gs-size",
                        name: "Size",
                        properties: [{
                                extend: "width"
                            }, {
                                extend: "min-width"
                            }, {
                                extend: "max-width"
                            }, {
                                extend: "height"
                            }, {
                                extend: "min-height"
                            }, {
                                extend: "max-height"
                            }
                        ]
                    }, {
                        id: "gs-space",
                        name: "Space",
                        properties: [{
                                extend: "padding",
                                detached: !0
                            }, {
                                extend: "margin",
                                detached: !0
                            }
                        ]
                    }, {
                        id: "gs-position",
                        name: "Position",
                        properties: [{
                                extend: "position",
                                options: [{
                                        id: "static",
                                        label: "Static"
                                    }, {
                                        id: "relative",
                                        label: "Relative"
                                    }, {
                                        id: "absolute",
                                        label: "Absolute"
                                    }, {
                                        id: "fixed",
                                        label: "Fixed"
                                    }, {
                                        id: "sticky",
                                        label: "Sticky"
                                    }
                                ],
                                onChange(e) {
                                    let {
                                        opts: t,
                                        property: n
                                    } = e;
                                    t.__clear && n.__upTargetsStyle({
                                        top: "",
                                        right: "",
                                        bottom: "",
                                        left: "",
                                        "z-index": ""
                                    }, t)
                                }
                            }, {
                                extend: "top"
                            }, {
                                extend: "right"
                            }, {
                                extend: "bottom"
                            }, {
                                extend: "left"
                            }, {
                                extend: "z-index",
                                type: "integer",
                            default:
                                "0"
                            }
                        ]
                    }, {
                        id: "gs-typography",
                        name: "Typography",
                        properties: [{
                                extend: "font-family"
                            }, {
                                extend: "color"
                            }, {
                                extend: "font-size"
                            }, {
                                extend: "font-weight"
                            }, {
                                extend: "line-height",
                                min: 0
                            }, {
                                extend: "letter-spacing"
                            }, {
                                extend: "text-align"
                            }, {
                                property: "vertical-align",
                                type: "select",
                            default:
                                "baseline",
                                options: ["baseline", "top", "middle", "bottom"].map(Q)
                            }, {
                                extend: "text-decoration",
                                type: "select",
                            default:
                                "none",
                                options: [{
                                        id: "none",
                                        label: "None"
                                    }, {
                                        id: "underline",
                                        label: "Underline"
                                    }, {
                                        id: "overline",
                                        label: "Overline"
                                    }, {
                                        id: "line-through",
                                        label: "Line through"
                                    }
                                ]
                            }, {
                                extend: "text-transform",
                                type: "select",
                            default:
                                "none",
                                options: [{
                                        id: "none",
                                        label: "None"
                                    }, {
                                        id: "capitalize",
                                        label: "Capitalize"
                                    }, {
                                        id: "uppercase",
                                        label: "Uppercase"
                                    }, {
                                        id: "lowercase",
                                        label: "Lowercase"
                                    }
                                ]
                            }, {
                                extend: "direction",
                                type: "radio",
                            default:
                                "ltr",
                                options: [{
                                        id: "ltr",
                                        label: "LTR"
                                    }, {
                                        id: "rtl",
                                        label: "RTL"
                                    }
                                ]
                            }, {
                                extend: "white-space",
                                type: "select",
                            default:
                                "normal",
                                options: [{
                                        id: "normal",
                                        label: "Normal"
                                    }, {
                                        id: "nowrap",
                                        label: "No wrap"
                                    }, {
                                        id: "pre",
                                        label: "Pre"
                                    }, {
                                        id: "pre-wrap",
                                        label: "Pre wrap"
                                    }, {
                                        id: "pre-line",
                                        label: "Pre line"
                                    }, {
                                        id: "break-spaces",
                                        label: "Break spaces"
                                    }
                                ]
                            }
                        ]
                    }, {
                        id: "gs-background",
                        name: "Background",
                        properties: [{
                                property: "background",
                                type: "stack",
                                layerSeparator: RegExp("(?<!\\(.*[^)]),(?![^(]*\\))"),
                                layerJoin: ", ",
                                detached: !0,
                                layerLabel: (e, t) => {
                                    let {
                                        values: n,
                                        property: o
                                    } = t;
                                    return o.getProperty(X.dX).getOptionLabel(n[X.dX])
                                },
                                toStyle(e) {
                                    let t = e[X.dX],
                                    n = e[X.zw];
                                    return "color" === t && 0 > n.indexOf("linear-gradient") && (n = "linear-gradient(".concat(n, " 1%, ").concat(n, " 100%)")), {
                                        ...e,
                                        [X.zw]: n
                                    }
                                },
                                fromStyle(e, t) {
                                    let {
                                        property: n,
                                        name: o,
                                        separatorLayers: r
                                    } = t,
                                    l = n.getProperties(),
                                    i = [];
                                    return e[X.KT] ? (i = n.__splitStyleName(e, X.KT, r).map(et), l.forEach(t => {
                                            let o = t.getId(),
                                            l = t.getName();
                                            l !== X.KT && n.__splitStyleName(e, l, r).map(e => ({
                                                    [o]: e || t.getDefaultValue()
                                                })).forEach((e, t) => {
                                                i[t] = i[t] ? {
                                                    ...i[t],
                                                    ...e
                                                }
                                                 : e
                                            })
                                        })) : e[o] && (i = n.__splitStyleName(e, o, /(?![^)(]*\([^)(]*?\)\)),(?![^\(]*\))/).map(e => e.substring(0, e.lastIndexOf(")") + 1)).map(et)),
                                    i
                                },
                                properties: [{
                                        property: X.dX,
                                        type: "radio",
                                    default:
                                        "image",
                                        options: [{
                                                id: X.Eo.Image
                                            }, {
                                                id: X.Eo.Gradient
                                            }, {
                                                id: X.Eo.Color
                                            }
                                        ]
                                    }, {
                                        property: X.zw,
                                    default:
                                        "none"
                                    }, {
                                        property: "background-position",
                                        type: "composite",
                                        properties: ["background-position-x", "background-position-y"].map(e => ({
                                                type: "integer",
                                                property: e,
                                                units: K,
                                            default:
                                                "0px"
                                            }))
                                    }, {
                                        property: "background-size",
                                        type: "composite",
                                        properties: ["background-size-x", "background-size-y"].map(e => ({
                                                type: "integer",
                                                property: e,
                                                units: K,
                                            default:
                                                "auto"
                                            }))
                                    }, {
                                        property: "background-repeat",
                                    default:
                                        "repeat",
                                        type: "select",
                                        options: [{
                                                id: "repeat",
                                                label: "Repeat"
                                            }, {
                                                id: "repeat-x",
                                                label: "Repeat x"
                                            }, {
                                                id: "repeat-y",
                                                label: "Repeat y"
                                            }, {
                                                id: "no-repeat",
                                                label: "No repeat"
                                            }, {
                                                id: "space",
                                                label: "Space"
                                            }, {
                                                id: "round",
                                                label: "Round"
                                            }
                                        ]
                                    }, {
                                        property: "background-attachment",
                                    default:
                                        "scroll",
                                        type: "select",
                                        options: [{
                                                id: "scroll",
                                                label: "Scroll"
                                            }, {
                                                id: "fixed",
                                                label: "Fixed"
                                            }
                                        ]
                                    }, {
                                        property: "background-origin",
                                    default:
                                        "padding-box",
                                        type: "select",
                                        options: [{
                                                id: "padding-box",
                                                label: "Padding box"
                                            }, {
                                                id: "border-box",
                                                label: "Border box"
                                            }, {
                                                id: "content-box",
                                                label: "Content box"
                                            }
                                        ]
                                    }
                                ]
                            }, {
                                property: "background-color",
                                type: "color",
                            default:
                                "none"
                            }, {
                                property: "background-clip",
                            default:
                                "border-box",
                                type: "select",
                                options: [{
                                        id: "border-box",
                                        label: "Border box"
                                    }, {
                                        id: "padding-box",
                                        label: "Padding box"
                                    }, {
                                        id: "content-box",
                                        label: "Content box"
                                    }, {
                                        id: "text",
                                        label: "Text"
                                    }
                                ],
                                onChange(e) {
                                    let {
                                        to: t,
                                        property: n,
                                        opts: o
                                    } = e, {
                                        value: r
                                    } = t;
                                    if (void 0 !== r) {
                                        let e = "text" === r;
                                        n.__upTargetsStyle({
                                            "-webkit-background-clip": e ? r : "",
                                            "-webkit-text-fill-color": e ? "transparent" : ""
                                        }, o)
                                    }
                                }
                            }
                        ]
                    }, {
                        id: "gs-borders",
                        name: "Borders",
                        properties: [{
                                extend: "border-radius",
                                detached: !0
                            }, {
                                extend: "border-width",
                                type: "composite",
                                detached: !0,
                                properties: ["border-top-width", "border-right-width", "border-bottom-width", "border-left-width"].map(e => ({
                                        type: "integer",
                                        property: e,
                                    default:
                                        "0",
                                        units: K
                                    }))
                            }, {
                                extend: "border-style",
                                type: "composite",
                                detached: !0,
                                properties: ["border-top-style", "border-right-style", "border-bottom-style", "border-left-style"].map(e => ({
                                        type: "select",
                                        property: e,
                                    default:
                                        "none",
                                        options: [{
                                                id: "none",
                                                label: "None"
                                            }, {
                                                id: "solid",
                                                label: "Solid"
                                            }, {
                                                id: "dotted",
                                                label: "Dotted"
                                            }, {
                                                id: "dashed",
                                                label: "Dashed"
                                            }, {
                                                id: "double",
                                                label: "Double"
                                            }, {
                                                id: "groove",
                                                label: "Groove"
                                            }, {
                                                id: "ridge",
                                                label: "Ridge"
                                            }, {
                                                id: "inset",
                                                label: "Inset"
                                            }, {
                                                id: "outset",
                                                label: "Outset"
                                            }
                                        ]
                                    }))
                            }, {
                                extend: "border-color",
                                type: "composite",
                                detached: !0,
                                properties: ["border-top-color", "border-right-color", "border-bottom-color", "border-left-color"].map(e => ({
                                        type: "color",
                                        property: e,
                                    default:
                                        "currentColor"
                                    }))
                            }
                        ]
                    }, {
                        id: "gs-effects",
                        name: "Effects",
                        properties: [{
                                property: "opacity",
                                type: "integer",
                                min: 0,
                                max: 100,
                            default:
                                "100",
                                units: ["%"]
                            }, {
                                property: "mix-blend-mode",
                                type: "select",
                            default:
                                "normal",
                                options: [{
                                        id: "normal",
                                        label: "Normal"
                                    }, {
                                        id: "multiply",
                                        label: "Multiply"
                                    }, {
                                        id: "screen",
                                        label: "Screen"
                                    }, {
                                        id: "overlay",
                                        label: "Overlay"
                                    }, {
                                        id: "darken",
                                        label: "Darken"
                                    }, {
                                        id: "lighten",
                                        label: "Lighten"
                                    }, {
                                        id: "color-dodge",
                                        label: "Color dodge"
                                    }, {
                                        id: "color-burn",
                                        label: "Color burn"
                                    }, {
                                        id: "hard-light",
                                        label: "Hard light"
                                    }, {
                                        id: "soft-light",
                                        label: "Soft light"
                                    }, {
                                        id: "difference",
                                        label: "Difference"
                                    }, {
                                        id: "exclusion",
                                        label: "Exclusion"
                                    }, {
                                        id: "hue",
                                        label: "Hue"
                                    }, {
                                        id: "saturation",
                                        label: "Saturation"
                                    }, {
                                        id: "color",
                                        label: "Color"
                                    }, {
                                        id: "luminosity",
                                        label: "Luminosity"
                                    }
                                ]
                            }, {
                                extend: "cursor"
                            }, eo("overflow", {
                                x: J,
                                y: J,
                                mergable: !0
                            }), {
                                extend: "box-shadow",
                                fromStyle(e, t) {
                                    let {
                                        separatorLayers: n
                                    } = t,
                                    o = e["box-shadow"] || "";
                                    return o ? o.split(n).map(e => {
                                        let {
                                            x: t,
                                            y: n,
                                            blur: o,
                                            spread: r,
                                            inset: l,
                                            color: i
                                        } = _(e);
                                        return {
                                            "box-shadow-h": t,
                                            "box-shadow-v": n,
                                            "box-shadow-blur": o,
                                            "box-shadow-spread": r,
                                            "box-shadow-color": i,
                                            "box-shadow-type": l ? "inset" : ""
                                        }
                                    }) : []
                                }
                            }, {
                                extend: "text-shadow",
                                fromStyle(e, t) {
                                    let {
                                        separatorLayers: n
                                    } = t,
                                    o = e["text-shadow"] || "";
                                    return o ? o.split(n).map(e => {
                                        let {
                                            x: t,
                                            y: n,
                                            blur: o,
                                            color: r
                                        } = _(e);
                                        return {
                                            "text-shadow-h": t,
                                            "text-shadow-v": n,
                                            "text-shadow-blur": o,
                                            "text-shadow-color": r
                                        }
                                    }) : []
                                }
                            }, en(), en("backdrop-filter"), {
                                property: "transition",
                                type: "stack",
                                layerLabel: (e, t) => {
                                    let {
                                        values: n
                                    } = t;
                                    return "".concat((0, k.kC)(n["transition-property"]), ": ").concat(n["transition-duration"])
                                },
                                properties: [{
                                        property: "transition-property",
                                        type: "select",
                                    default:
                                        "opacity",
                                        options: ["width", "height", "min-width", "min-height", "max-width", "max-height", "padding", "margin", "color", "font-size", "line-height", "letter-height", "border", "border-radius", "background", "opacity", "box-shadow", "text-shadow", "filter", "backdrop-filter", "transform", "all"].map(Q)
                                    }, {
                                        property: "transition-duration",
                                        type: "integer",
                                    default:
                                        "1s",
                                        unit: "s",
                                        units: Y,
                                        min: 0
                                    }, {
                                        property: "transition-timing-function",
                                        type: "select",
                                    default:
                                        "ease",
                                        options: [{
                                                id: "ease",
                                                label: "Ease"
                                            }, {
                                                id: "ease-in",
                                                label: "Ease-In"
                                            }, {
                                                id: "ease-in-out",
                                                label: "Ease-In-Out"
                                            }, {
                                                id: "ease-out",
                                                label: "Ease-Out"
                                            }, {
                                                id: "linear",
                                                label: "Linear"
                                            }
                                        ]
                                    }, {
                                        property: "transition-delay",
                                        type: "integer",
                                    default:
                                        "0s",
                                        unit: "s",
                                        units: Y
                                    }
                                ]
                            }, {
                                property: "transform",
                                type: "stack",
                                layerSeparator: " ",
                                layerLabel: (e, t) => {
                                    let {
                                        values: n,
                                        property: o
                                    } = t,
                                    r = o.getProperty("transform-name").getOptionLabel(n["transform-name"]);
                                    return "".concat((0, k.kC)(r), ": ").concat(n["transform-value"])
                                },
                                fromStyle: (e => {
                                    let t = "".concat(e, "-name"),
                                    n = "".concat(e, "-value");
                                    return (o, r) => {
                                        let {
                                            separatorLayers: l
                                        } = r,
                                        i = o[e] || "";
                                        return i ? i.split(l).map(e => {
                                            let {
                                                name: o,
                                                value: r
                                            } = (0, U.Z)(e);
                                            return {
                                                [t]: o,
                                                [n]: r
                                            }
                                        }) : []
                                    }
                                })("transform"),
                                toStyle: function (e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                    n = "".concat(e, "-name"),
                                    o = "".concat(e, "-value");
                                    return (e, r) => {
                                        let {
                                            name: l
                                        } = r;
                                        return {
                                            [l]: "".concat(e[n], "(").concat(e[o] || t, ")")
                                        }
                                    }
                                }
                                ("transform", "0"),
                                properties: [{
                                        property: "transform-name",
                                        type: "select",
                                    default:
                                        "translateX",
                                        options: [{
                                                id: "translateX",
                                                label: "Move X",
                                                units: K
                                            }, {
                                                id: "translateY",
                                                label: "Move Y",
                                                units: K
                                            }, {
                                                id: "translateZ",
                                                label: "Move Z",
                                                units: K
                                            }, {
                                                id: "rotateX",
                                                label: "Rotate X",
                                                units: G
                                            }, {
                                                id: "rotateY",
                                                label: "Rotate Y",
                                                units: G
                                            }, {
                                                id: "rotateZ",
                                                label: "Rotate Z",
                                                units: G
                                            }, {
                                                id: "scale",
                                                label: "Scale",
                                                units: W
                                            }, {
                                                id: "scaleX",
                                                label: "Scale X",
                                                units: W
                                            }, {
                                                id: "scaleY",
                                                label: "Scale Y",
                                                units: W
                                            }, {
                                                id: "scaleZ",
                                                label: "Scale Z",
                                                units: W
                                            }, {
                                                id: "skewX",
                                                label: "Skew X",
                                                units: G
                                            }, {
                                                id: "skewY",
                                                label: "Skew Y",
                                                units: G
                                            }
                                        ],
                                        onChange: ee("transform-value")
                                    }, {
                                        property: "transform-value",
                                        type: "integer",
                                    default:
                                        "0"
                                    }
                                ]
                            }, eo("transform-origin", {
                                x: {
                                default:
                                    "50%"
                                },
                                y: {
                                default:
                                    "50%"
                                }
                            }), {
                                property: "backface-visibility",
                                type: "radio",
                            default:
                                "visible",
                                options: [{
                                        id: "visible",
                                        label: "Visible"
                                    }, {
                                        id: "hidden",
                                        label: "Hidden"
                                    }
                                ]
                            }, {
                                property: "perspective",
                                type: "integer",
                                min: 0,
                            default:
                                "none",
                                units: K
                            }, eo("perspective-origin", {
                                x: {
                                default:
                                    "50%"
                                },
                                y: {
                                default:
                                    "50%"
                                }
                            }), {
                                property: "transform-style",
                                type: "radio",
                            default:
                                "flat",
                                options: [{
                                        id: "flat",
                                        label: "2D"
                                    }, {
                                        id: "preserve-3d",
                                        label: "3D"
                                    }
                                ]
                            }
                        ]
                    }
                ];
                var ei = n(40036);
                let es = [{
                        id: "desktop",
                        name: "Desktop",
                        width: ""
                    }, {
                        id: "mobilePortrait",
                        name: "Mobile",
                        width: "320px",
                        widthMedia: "480px"
                    }
                ];
                function ea(e, t) {
                    return [...D[e], ...D.global, e => (0, R.ZP)(e, t), O(e, t)]
                }
                function ec(e) {
                    var t,
                    n,
                    l,
                    i;
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = e === r.cd.email, {
                        devices: c
                    } = s,
                    d = c ? {
                    default:
                        c.selected,
                        devices: null !== (n = c.default) && void 0 !== n ? n : a ? es : void 0
                    }
                     : a ? {
                        devices: es
                    }
                     : {},
                    u = {
                        undoManager: {
                            trackSelection: !1
                        },
                        showOffsets: !0,
                        cssIcons: "",
                        assetManager: {},
                        blockManager: {},
                        styleManager: {
                            sectors: a ? er : el
                        },
                        selectorManager: {
                            componentFirst: !0
                        },
                        storageManager: {
                            onStore: e => {
                                let t = (0, V.bh)().appEditorStore.projectDataCustom;
                                return e.custom = t ? JSON.parse(JSON.stringify(t)) : {},
                                e
                            },
                            onLoad: (e, t) => {
                                var n;
                                return null === (n = t.events) || void 0 === n || n.projectLoad,
                                (0, ei.Hd)(t, e.custom),
                                e
                            }
                        },
                        i18n: {
                            messagesAdd: (0, k.RH)({
                                en: o
                            }, null !== (l = null === (t = s.i18n) || void 0 === t ? void 0 : t.locales) && void 0 !== l ? l : {})
                        },
                        deviceManager: d,
                        canvasCss: "\n      [contenteditable] { outline: 0px solid transparent;}\n    ",
                        canvas: {
                            customSpots: {
                                select: !0,
                                hover: !0,
                                spacing: !0,
                                target: !0
                            }
                        },
                        telemetry: !1
                    };
                    return (0, k.RH)(u, null !== (i = s.gjsOptions) && void 0 !== i ? i : {})
                }
            },
            36129: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return p
                    }
                });
                var o = n(27573),
                r = n(37093),
                l = n(62077),
                i = n(19601),
                s = n(42807),
                a = n(81529),
                c = n(30353),
                d = n(82106),
                u = n(41062);
                function p(e) {
                    var t;
                    let {
                        className: n,
                        value: p,
                        label: g,
                        btnLabel: m,
                        size: h,
                        isContain: f,
                        clear: b,
                        onChange: y,
                        onOpen: v,
                        description: x
                    } = e,
                    j = (null === (t = p.replace(/^"|"$/gi, "").split("/").pop()) || void 0 === t ? void 0 : t.split("?")[0]) || "",
                    w = (0, r.Z)("w-12 h-12 bg-checker bg-no-repeat bg-center", f ? "bg-contain" : "bg-cover", u.br.b, u.br.rnd, u.cl.br);
                    return (0, o.jsxs)("div", {
                        className: (0, r.Z)(n),
                        children: [!!g && (0, o.jsx)(d.Z, {
                                size: h,
                                children: g
                            }), !!x && (0, o.jsx)(d.Z, {
                                size: h,
                                as: "span",
                                className: (0, r.Z)(u.cl.txtLowEmphasis),
                                capitalize: !1,
                                children: x
                            }), (0, o.jsxs)(s.Z, {
                                className: (0, r.Z)(u.cl.bg),
                                items: "center",
                                space: "s",
                                nowrap: !0,
                                children: [(0, o.jsx)(a.Z, {
                                        children: (0, o.jsx)("div", {
                                            className: w,
                                            style: p ? {
                                                backgroundImage: 'url("'.concat(p, '")')
                                            }
                                             : {}
                                        })
                                    }), (0, o.jsxs)(a.Z, {
                                        grow: !0,
                                        className: (0, r.Z)("overflow-hidden"),
                                        children: [j && (0, o.jsx)(d.Z, {
                                                as: "div",
                                                size: h,
                                                className: (0, r.Z)("gjs-mb-2", u.fx.txtEllips),
                                                capitalize: !1,
                                                children: j
                                            }), (0, o.jsxs)(s.Z, {
                                                space: "s",
                                                nowrap: !0,
                                                children: [(0, o.jsx)(l.default, {
                                                        onClick: () => null == v ? void 0 : v(p),
                                                        size: h,
                                                        type: "button",
                                                        block: !0,
                                                        full: !0,
                                                        children: m || "Select image"
                                                    }), !!p && b && (0, o.jsx)(i.Z, {
                                                        onClick: () => null == y ? void 0 : y(""),
                                                        title: b.tooltip,
                                                        size: h,
                                                        icon: {
                                                            icon: c.do.close,
                                                            size: u.qv.s
                                                        },
                                                        type: "button",
                                                        block: !0
                                                    })]
                                            })]
                                    })]
                            })]
                    })
                }
            },
            82520: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return w
                    },
                    k: function () {
                        return v
                    }
                });
                var o = n(27573),
                r = n(7653),
                l = n(37093),
                i = n(41693),
                s = n(81198),
                a = n(42807),
                c = n(81529),
                d = n(30353),
                u = n(12225),
                p = n(63990),
                g = n(41062);
                let m = /^-?[0-9]+(\.[0-9]+)?[a-zA-Z%]{0,}$/,
                h = /,(?![^(]*\))/,
                f = /\s(?![^(]*\))/,
                b = /^(closest-side|closest-corner|farthest-side|farthest-corner)/i,
                y = /^circle|ellipse/i,
                v = e => {
                    let t = [], {
                        name: n,
                        value: o
                    } = (0, i.Z)(e),
                    [r, ...l] = o.split(h).map(e => e.trim()).filter(Boolean),
                    s = l.length > 1,
                    a = s ? r : "",
                    c = {
                        type: "none"
                    },
                    d = s ? l : [r, ...l];
                    if (m.test(a))
                        c.type = "angle", c.value = a;
                    else if (/^to\s/.test(a))
                        c.type = "side-or-corner", c.value = a;
                    else if (b.test(a))
                        c.type = "size", c.value = a;
                    else if (y.test(a) || /^at\s/.test(a) || /\sat\s/.test(a)) {
                        var u;
                        c.type = "at",
                        c.value = a;
                        let e = (null === (u = a.match(y)) || void 0 === u ? void 0 : u[0]) || "circle";
                        c.shape = e;
                        let t = {
                            x: "0%",
                            y: "0%"
                        },
                        n = {
                            x: "0%",
                            y: "0%"
                        },
                        [o, r] = a.replace(y, "").trim().split("at").map(e => e.trim());
                        if (o) {
                            let [e, n] = o.split(f);
                            t.x = e,
                            t.y = n || e
                        }
                        if (r) {
                            let [e, t] = r.split(f);
                            n.x = e,
                            n.y = t || e
                        }
                        c.size = t,
                        c.position = n
                    }
                    return d.forEach(e => {
                        let [n, o] = e.split(f);
                        t.push({
                            color: n,
                            hint: o ? parseFloat(o) : null
                        })
                    }),
                    t.forEach((e, n) => {
                        null === e.hint && (e.hint = n / (t.length - 1) * 100)
                    }), {
                        name: n,
                        orientation: c,
                        colorStops: t
                    }
                },
                x = e => {
                    let {
                        stops: t,
                        orientation: n = "to right",
                        name: o = "linear-gradient"
                    } = e,
                    r = (1 === t.length ? [{
                                color: t[0].color,
                                hint: null
                            }, {
                                color: t[0].color,
                                hint: null
                            }
                        ] : t).map(e => "".concat(e.color, " ").concat(e.hint ? "".concat(e.hint, "%") : "").trim()).join(", ");
                    return r ? "".concat(o, "(").concat(n, ", ").concat(r, ")") : "none"
                },
                j = e => e.slice().sort((e, t) => (e.hint || 0) - (t.hint || 0));
                function w(e) {
                    var t,
                    n,
                    i;
                    let {
                        className: m,
                        value: h,
                        onChange: f
                    } = e,
                    b = v(h),
                    [y, w] = (0, r.useState)(b.colorStops),
                    [Z, S] = (0, r.useState)(null),
                    C = (0, r.useRef)(null),
                    k = (0, l.Z)("grad-picker select-none", m, g.br.rnd),
                    P = b.name || "linear-gradient",
                    T = P.indexOf("radial") >= 0,
                    L = P.indexOf("repeating") >= 0,
                    H = b.orientation.value,
                    N = "".concat(parseFloat("".concat(H)) || 180),
                    V = "".concat(parseFloat("".concat(null === (t = b.orientation.size) || void 0 === t ? void 0 : t.x)) || 0),
                    z = "".concat(parseFloat("".concat(null === (n = b.orientation.position) || void 0 === n ? void 0 : n.x)) || 0),
                    M = "".concat(parseFloat("".concat(null === (i = b.orientation.position) || void 0 === i ? void 0 : i.y)) || 0),
                    A = function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = j(e);
                        w(n),
                        null == f || f(x({
                                name: P,
                                orientation: H,
                                stops: n
                            }), t)
                    };
                    (0, r.useEffect)(() => {
                        if (!Z)
                            return;
                        let e = parseFloat("".concat(Z.stop.hint)),
                        t = t => {
                            let n = 100 * (t.clientX - Z.x);
                            n /= Z.w,
                            n = (n = (n = e + n) < 0 ? 0 : n) > 100 ? 100 : n,
                            Z.stop.hint = parseInt("".concat(n), 10),
                            A(y, !0)
                        },
                        n = () => {
                            S(null),
                            A(y)
                        };
                        return window.addEventListener("pointermove", t),
                        window.addEventListener("pointerup", n),
                        () => {
                            window.removeEventListener("pointermove", t),
                            window.removeEventListener("pointerup", n),
                            n()
                        }
                    }, [Z]);
                    let B = (e, t) => {
                        let n = C.current;
                        S({
                            stop: t,
                            w: (null == n ? void 0 : n.clientWidth) || 0,
                            h: (null == n ? void 0 : n.clientHeight) || 0,
                            x: e.clientX,
                            y: e.clientY
                        })
                    },
                    E = e => {
                        A(y.filter(t => t !== e))
                    },
                    O = (e, t, n) => {
                        t && (e.color = t),
                        A(y, n)
                    },
                    D = e => (null == Z ? void 0 : Z.stop) === e;
                    return (0, o.jsxs)("div", {
                        className: k,
                        children: [!!(null == Z ? void 0 : Z.stop) && (0, o.jsx)("div", {
                                className: (0, l.Z)("fixed inset-0 z-50 cursor-colr")
                            }), (0, o.jsxs)("div", {
                                className: (0, l.Z)("relative gjs-mb-6 gjs-mt-3"),
                                children: [(0, o.jsx)("div", {
                                        className: (0, l.Z)("bg-checker h-8", g.br.rnd),
                                        children: (0, o.jsx)("div", {
                                            ref: C,
                                            className: (0, l.Z)("w-full h-full cursor-cross", g.br.b, g.br.rnd, g.cl.br),
                                            style: {
                                                backgroundImage: x({
                                                    stops: y
                                                })
                                            },
                                            onClick: e => {
                                                let t = C.current,
                                                n = (null == t ? void 0 : t.clientWidth) || 0,
                                                o = (null == t ? void 0 : t.clientHeight) || 0,
                                                r = e.nativeEvent.offsetX - ((null == t ? void 0 : t.clientLeft) || 0),
                                                l = e.nativeEvent.offsetY - ((null == t ? void 0 : t.clientTop) || 0),
                                                i = r / n * 100,
                                                s = document.createElement("canvas"),
                                                a = s.getContext("2d");
                                                if (!a)
                                                    return;
                                                s.width = n,
                                                s.height = o;
                                                let c = a.createLinearGradient(0, 0, n, o);
                                                y.forEach(e => c.addColorStop(parseFloat("".concat(e.hint)) / 100, e.color)),
                                                a.fillStyle = c,
                                                a.fillRect(0, 0, s.width, s.height),
                                                s.style.background = "black";
                                                let d = a.getImageData(r, l, 1, 1).data,
                                                u = d[3] ? (100 / 255 * d[3] / 100).toFixed(2) : 0,
                                                p = "rgba(".concat(d[0], ", ").concat(d[1], ", ").concat(d[2], ", ").concat(u, ")");
                                                A([...y, {
                                                            color: "rgba(0, 0, 0, 0)" === p ? "#000" : p,
                                                            hint: i
                                                        }
                                                    ])
                                            }
                                        })
                                    }), y.map((e, t) => (0, o.jsxs)("div", {
                                            className: (0, l.Z)("absolute top-0 h-full"),
                                            style: {
                                                left: "".concat(e.hint, "%")
                                            },
                                            children: [(0, o.jsx)("div", {
                                                    className: (0, l.Z)("cursor-pointer absolute gs-utl-translate-x-[-50%] gs-utl-top-[-14px]"),
                                                    onClick: () => E(e),
                                                    children: (0, o.jsx)(d.ZP, {
                                                        icon: d.do.close,
                                                        size: g.qv.s3x
                                                    })
                                                }), (0, o.jsx)("div", {
                                                    onPointerDown: t => B(t, e),
                                                    className: (0, l.Z)("h-full w-1 gs-utl-translate-x-[-50%] cursor-colr opacity-50 gjs-border-white", g.br.br, g.br.bl, D(e) ? "gjs-bg-white" : "gjs-bg-black")
                                                }), (0, o.jsx)("div", {
                                                    className: (0, l.Z)("cursor-pointer gs-utl-bottom-[-17px] gs-utl-left-[-7px] absolute"),
                                                    children: (0, o.jsx)(s.Z, {
                                                        value: e.color,
                                                        onChange: (t, n) => O(e, t, n),
                                                        className: (0, l.Z)("h-4 w-4 gjs-rounded-full gjs-border-2")
                                                    })
                                                })]
                                        }, t))]
                            }), (0, o.jsxs)(a.Z, {
                                space: "s",
                                items: "center",
                                children: [(0, o.jsx)(c.Z, {
                                        grow: !0,
                                        children: (0, o.jsx)(p.Z, {
                                            label: "Repeat",
                                            value: L,
                                            onChange: e => {
                                                let t = "".concat(e ? "repeating-" : "").concat(T ? "radial" : "linear", "-gradient");
                                                null == f || f(x({
                                                        stops: y,
                                                        orientation: H,
                                                        name: t
                                                    }))
                                            }
                                        })
                                    }), (0, o.jsx)(c.Z, {
                                        grow: !0,
                                        children: (0, o.jsx)(p.Z, {
                                            label: "Radial",
                                            value: T,
                                            onChange: e => {
                                                let t = "".concat(L ? "repeating-" : "").concat(e ? "radial" : "linear", "-gradient");
                                                null == f || f(x({
                                                        stops: y,
                                                        orientation: e ? "100px at 50% 50%" : "90deg",
                                                        name: t
                                                    }))
                                            }
                                        })
                                    })]
                            }), T ? (0, o.jsxs)(a.Z, {
                                space: "s",
                                col: !0,
                                children: [(0, o.jsx)(c.Z, {
                                        children: (0, o.jsx)(a.Z, {
                                            space: "s",
                                            items: "center",
                                            children: (0, o.jsx)(c.Z, {
                                                grow: !0,
                                                children: (0, o.jsx)(u.Z, {
                                                    pan: "S",
                                                    size: "s",
                                                    value: V,
                                                    onChange: function (e) {
                                                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                                        null == f || f(x({
                                                                stops: y,
                                                                name: P,
                                                                orientation: "".concat(e, "px at ").concat(z, "% ").concat(M, "%")
                                                            }), t)
                                                    },
                                                    valueUnit: "px",
                                                    units: ["px"]
                                                })
                                            })
                                        })
                                    }), (0, o.jsx)(c.Z, {
                                        children: (0, o.jsxs)(a.Z, {
                                            space: "s",
                                            children: [(0, o.jsx)(c.Z, {
                                                    grow: !0,
                                                    children: (0, o.jsx)(u.Z, {
                                                        pan: "X",
                                                        size: "s",
                                                        value: z,
                                                        onChange: function (e) {
                                                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                                            null == f || f(x({
                                                                    stops: y,
                                                                    name: P,
                                                                    orientation: "".concat(V, "px at ").concat(e, "% ").concat(M, "%")
                                                                }), t)
                                                        },
                                                        valueUnit: "%",
                                                        units: ["%"]
                                                    })
                                                }), (0, o.jsx)(c.Z, {
                                                    grow: !0,
                                                    children: (0, o.jsx)(u.Z, {
                                                        pan: "Y",
                                                        size: "s",
                                                        value: M,
                                                        onChange: function (e) {
                                                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                                            null == f || f(x({
                                                                    stops: y,
                                                                    name: P,
                                                                    orientation: "".concat(V, "px at ").concat(z, "% ").concat(e, "%")
                                                                }), t)
                                                        },
                                                        valueUnit: "%",
                                                        units: ["%"]
                                                    })
                                                })]
                                        })
                                    })]
                            }) : (0, o.jsx)(a.Z, {
                                space: "s",
                                items: "center",
                                nowrap: !0,
                                children: (0, o.jsx)(c.Z, {
                                    grow: !0,
                                    children: (0, o.jsx)(u.Z, {
                                        pan: "A",
                                        size: "s",
                                        value: N,
                                        onChange: function (e) {
                                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                            null == f || f(x({
                                                    stops: y,
                                                    name: P,
                                                    orientation: "".concat(e, "deg")
                                                }), t)
                                        },
                                        valueUnit: "deg",
                                        units: ["deg"]
                                    })
                                })
                            })]
                    })
                }
            },
            42807: function (e, t, n) {
                var o = n(27573),
                r = n(7653),
                l = n(37093);
                t.Z = r.forwardRef(function (e, t) {
                    let {
                        as: n,
                        children: r,
                        className: i,
                        col: s,
                        revert: a,
                        full: c,
                        nowrap: d,
                        space: u,
                        justify: p,
                        items: g,
                        ...m
                    } = e;
                    return (0, o.jsx)(n || "div", {
                        ref: t,
                        className: (0, l.Z)(["gs-utl-flex", i, s && !a && "gs-utl-flex-col", s && a && "gs-utl-flex-col-reverse", !s && a && "gs-utl-flex-row-reverse", c && !s && "gs-utl-w-full", c && s && "gs-utl-h-full", d ? "gs-utl-flex-nowrap" : "gs-utl-flex-wrap", "x2s" === u && (s ? "gs-utl-space-y-0.5" : "gs-utl-space-x-0.5"), "xs" === u && (s ? "gs-utl-space-y-1" : "gs-utl-space-x-1"), "s" === u && (s ? "gs-utl-space-y-2" : "gs-utl-space-x-2"), "m" === u && (s ? "gs-utl-space-y-4" : "gs-utl-space-x-4"), "l" === u && (s ? "gs-utl-space-y-6" : "gs-utl-space-x-6"), "xl" === u && (s ? "gs-utl-space-y-8" : "gs-utl-space-x-8"), "start" === g && "gs-utl-items-start", "end" === g && "gs-utl-items-end", "center" === g && "gs-utl-items-center", "start" === p && "gs-utl-justify-start", "end" === p && "gs-utl-justify-end", "center" === p && "gs-utl-justify-center", "between" === p && "gs-utl-justify-between"]),
                        ...m,
                        children: r
                    })
                })
            },
            81529: function (e, t, n) {
                var o = n(27573),
                r = n(7653),
                l = n(37093);
                t.Z = r.forwardRef(function (e, t) {
                    let {
                        children: n,
                        className: r,
                        grow: i,
                        ...s
                    } = e;
                    return (0, o.jsx)("div", {
                        ref: t,
                        className: (0, l.Z)([r, i && "flex-1"]),
                        ...s,
                        children: n
                    })
                })
            },
            45837: function (e, t, n) {
                n.d(t, {
                    XA: function () {
                        return m
                    },
                    fz: function () {
                        return r
                    }
                });
                var o,
                r,
                l = n(27573),
                i = n(7653),
                s = n(37093),
                a = n(77735),
                c = n(42807),
                d = n(81529),
                u = n(82106),
                p = n(41062);
                (o = r || (r = {})).m = "m",
                o.s = "s";
                let g = e => (0, a.Xq)(e) ? e : "",
                m = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, s.Z)("w-full placeholder:italic", p.cl.bgTr, p.Pl.inputText, e.disabled && p.cl.txtLowEmphasis)
                };
                t.ZP = (0, i.forwardRef)(function (e, t) {
                    let {
                        className: n,
                        value: o,
                        label: r,
                        size: a = "m",
                        type: h,
                        placeholder: f,
                        required: b,
                        disabled: y,
                        readOnly: v,
                        description: x,
                        name: j,
                        style: w,
                        tip: Z,
                        onInput: S,
                        onChange: C,
                        onBlur: k
                    } = e,
                    [P, T] = (0, i.useState)(g(o)),
                    L = m(e),
                    H = (0, i.useRef)(null);
                    (0, i.useImperativeHandle)(t, () => H.current, []),
                    (0, i.useEffect)(() => {
                        T(g(o))
                    }, [o]),
                    (0, i.useEffect)(() => {
                        S && setTimeout(() => S(P))
                    }, [P]);
                    let N = (e, t) => {
                        null == C || C(e, t)
                    };
                    return (0, l.jsxs)("div", {
                        className: (0, s.Z)("gs-input-field", n),
                        style: w,
                        ref: H,
                        children: [!!r && (0, l.jsx)(u.Z, {
                                size: a,
                                children: r
                            }), !!x && (0, l.jsx)(u.Z, {
                                size: a,
                                tip: Z,
                                as: "span",
                                className: (0, s.Z)(p.cl.txtLowEmphasis),
                                capitalize: !1,
                                children: x
                            }), (0, l.jsx)(c.Z, {
                                className: (0, s.Z)(p.cl.bg, p.br.b, p.br.rnd, p.cl.br, "m" === a && p.vk.xy, "s" === a && "gjs-px-3 gjs-py-1"),
                                items: "center",
                                space: "x2s",
                                children: (0, l.jsx)(d.Z, {
                                    grow: !0,
                                    children: (0, l.jsx)("input", {
                                        className: L,
                                        name: j,
                                        value: P,
                                        onChange: e => T(e.target.value),
                                        placeholder: f,
                                        required: b,
                                        onBlur: () => {
                                            N(P),
                                            null == k || k()
                                        },
                                        onKeyDown: e => {
                                            let {
                                                key: t
                                            } = e;
                                            switch (t) {
                                            case "Escape":
                                                return T(o);
                                            case "Enter":
                                                return N(P)
                                            }
                                        },
                                        readOnly: v,
                                        disabled: y,
                                        type: h
                                    })
                                })
                            })]
                    })
                })
            },
            82106: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return a
                    }
                });
                var o = n(27573),
                r = n(37093),
                l = n(47988),
                i = n(30353),
                s = n(41062);
                function a(e) {
                    let {
                        className: t,
                        as: n = "label",
                        bold: a,
                        m: c = "gjs-mb-1",
                        size: d = "m",
                        capitalize: u = !0,
                        children: p,
                        tip: g,
                        ...m
                    } = e;
                    return (0, o.jsxs)(n, {
                        className: (0, r.Z)(t, c, g ? "gs-utl-flex gs-utl-gap-2 gs-utl-items-center" : "block", u && "capitalize", a && "font-semibold", "s" === d && "text-sm"),
                        ...m,
                        children: [!!g && (0, o.jsx)(l.Z, {
                                classNameWrp: "gs-utl-normal-case",
                                classNameContent: "gs-utl-max-w-60",
                                title: g,
                                children: (0, o.jsx)(i.ZP, {
                                    icon: i.do.information,
                                    size: s.qv.s2x
                                })
                            }), p]
                    })
                }
            },
            16544: function (e, t, n) {
                var o = n(27573),
                r = n(51621),
                l = n(7653),
                i = n(6217),
                s = n(69460),
                a = n(46398),
                c = n(42640),
                d = n(37093),
                u = n(62077),
                p = n(52003),
                g = n(42807),
                m = n(81529),
                h = n(5770);
                t.Z = (0, r.Pi)(function (e) {
                    let {
                        buttonProps: t,
                        content: n,
                        code: r,
                        onAction: f
                    } = e,
                    b = (0, c.a)(),
                    y = (0, i.X)(),
                    v = (0, s.yT)(), {
                        isProjectTypeEmail: x
                    } = v,
                    j = v.editor, {
                        isDarkTheme: w
                    } = (0, a.Hc)(),
                    [Z, S] = (0, l.useState)();
                    (0, l.useEffect)(() => {
                        let e = async() => {
                            if (x)
                                S(j.getHtml());
                            else {
                                let e = (await(0, h.M)(j, {
                                        page: j.Pages.getSelected(),
                                        skipProject: !0,
                                        styles: "inline"
                                    })).find(e => "text/html" === e.mimeType);
                                e && S(e.content)
                            }
                        };
                        r ? S(r) : e()
                    }, []);
                    let C = (null == t ? void 0 : t.children) || y.t("actions.importCode.button");
                    return (0, o.jsxs)(g.Z, {
                        col: !0,
                        space: "m",
                        children: [(0, o.jsx)(m.Z, {
                                children: null != n ? n : y.t("actions.importCode.content")
                            }), (0, o.jsx)(m.Z, {
                                className: (0, d.Z)("h-96"),
                                children: void 0 !== Z && (0, o.jsx)(p.Z, {
                                    value: Z,
                                    onChange: e => S(e || ""),
                                    isDarkTheme: w,
                                    language: "html"
                                })
                            }), (0, o.jsx)(g.Z, {
                                justify: "end",
                                children: (0, o.jsx)(u.default, {
                                    size: "m2",
                                    variant: "pr",
                                    onClick: () => {
                                        let e = (Z || "").trim();
                                        f ? f(e) : j.setComponents(e),
                                        b.close()
                                    },
                                    ...t,
                                    children: C
                                })
                            })]
                    })
                })
            },
            12225: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return h
                    }
                });
                var o = n(27573),
                r = n(7653),
                l = n(37093),
                i = n(77735),
                s = n(42807),
                a = n(81529),
                c = n(82106),
                d = n(59639),
                u = n(30353),
                p = n(41062),
                g = n(86353);
                let m = e => (0, i.Xq)(e) ? e : "";
                function h(e) {
                    let {
                        className: t,
                        value: n,
                        units: i,
                        valueUnit: h,
                        label: f,
                        size: b = "m",
                        pan: y = !0,
                        min: v,
                        max: x,
                        step: j,
                        tip: w,
                        placeholder: Z,
                        onChange: S,
                        onChangeUnit: C
                    } = e,
                    [k, P] = (0, r.useState)(m(n)),
                    [T, L] = (0, r.useState)(!1),
                    H = (null == i ? void 0 : i.map(e => ({
                                id: e,
                                label: e
                            }))) || [],
                    N = {
                        min: v,
                        max: x,
                        step: j
                    };
                    (0, r.useEffect)(() => {
                        P(m(n))
                    }, [n, h]);
                    let V = (e, t) => {
                        null == S || S((0, g.vu)({
                                min: v,
                                max: x,
                                value: e
                            }), t)
                    };
                    return (0, o.jsxs)("div", {
                        className: (0, l.Z)("gs-cmp-number-field", t),
                        children: [T && (0, o.jsx)("div", {
                                className: (0, l.Z)("fixed inset-0 z-50 cursor-ns")
                            }), !!f && (0, o.jsx)(c.Z, {
                                size: b,
                                tip: w,
                                children: f
                            }), (0, o.jsxs)(s.Z, {
                                className: (0, l.Z)(p.cl.bg, p.cl.br, p.br.b, p.br.rnd, "m" === b && p.vk.xy, "s" === b && "gjs-px-3 gjs-py-1"),
                                items: "center",
                                space: "x2s",
                                children: [!!y && (0, o.jsx)(a.Z, {
                                        onMouseDown: e => {
                                            L(!0),
                                            (0, g.S7)(k, e.clientY, (e, t) => {
                                                V(e, !!t),
                                                t || L(!1)
                                            }, N)
                                        },
                                        className: (0, l.Z)("opacity-50 cursor-ns", "m" === b && "-gjs-ml-3", "s" === b && "-gjs-ml-2", !0 !== y && "gjs-mr-0.5 -gjs-ml-1"),
                                        children: !0 === y ? (0, o.jsx)(u.ZP, {
                                            icon: u.do.panVertical,
                                            size: p.qv.s2x
                                        }) : y
                                    }), (0, o.jsx)(a.Z, {
                                        grow: !0,
                                        children: (0, o.jsx)("input", {
                                            className: (0, l.Z)("w-full", p.cl.bgTr, p.Pl.inputText),
                                            value: k,
                                            onChange: e => P(e.target.value),
                                            placeholder: Z,
                                            onBlur: () => {
                                                V(k)
                                            },
                                            onKeyDown: e => {
                                                let {
                                                    key: t,
                                                    shiftKey: o
                                                } = e;
                                                switch (t) {
                                                case "Escape":
                                                    return P(n);
                                                case "Enter":
                                                    return V(k)
                                                }
                                                let r = (0, g.GP)({
                                                    step: j,
                                                    value: n,
                                                    key: t,
                                                    shiftKey: o
                                                });
                                                null !== r && (e.preventDefault(), V(r))
                                            }
                                        })
                                    }), !!H.length && (0, o.jsx)(a.Z, {
                                        className: (0, l.Z)(1 === H.length && "opacity-50 pointer-events-none"),
                                        children: (0, o.jsx)(d.ZP, {
                                            caret: "",
                                            size: "x2s",
                                            pos: "right",
                                            width: "75px",
                                            emptyState: "-",
                                            border: !1,
                                            value: h,
                                            onChange: e => null == C ? void 0 : C(e),
                                            options: H
                                        })
                                    })]
                            })]
                    })
                }
            },
            86353: function (e, t, n) {
                n.d(t, {
                    GP: function () {
                        return i
                    },
                    S7: function () {
                        return a
                    },
                    ot: function () {
                        return c
                    },
                    ue: function () {
                        return r
                    },
                    vu: function () {
                        return s
                    }
                });
                var o = n(82652);
                let r = e => {
                    let t = parseFloat(e),
                    n = e.replace("".concat(t), "").trim();
                    return {
                        number: t || 0 === t ? "".concat(t) : "",
                        unit: n
                    }
                },
                l = e => {
                    let {
                        value: t,
                        step: n
                    } = e,
                    o = parseFloat("".concat(t)),
                    r = 0;
                    if (Math.floor(o) !== o && n) {
                        let e = "".concat(n).split(".")[1];
                        r = (null == e ? void 0 : e.length) || 0
                    }
                    return r ? parseFloat(o.toFixed(r)) : o
                },
                i = e => {
                    let {
                        value: t,
                        key: n,
                        shiftKey: o,
                        min: r,
                        max: i,
                        step: a = 1
                    } = e,
                    c = "ArrowUp" === n,
                    d = "ArrowDown" === n,
                    u = null;
                    if (c || d) {
                        u = Number(t);
                        let e = parseFloat("".concat(a));
                        c && (u += (o ? 10 : 1) * e),
                        d && (u -= (o ? 10 : 1) * e),
                        u = l({
                            value: u = "".concat(s({
                                        min: r,
                                        max: i,
                                        value: u
                                    })),
                            step: a
                        })
                    }
                    return u
                },
                s = e => {
                    let {
                        min: t,
                        max: n,
                        value: r
                    } = e,
                    l = parseFloat("".concat(r)),
                    i = l || 0;
                    return (0, o.Xq)(t) && (i = Math.max(i, parseFloat("".concat(t)) || 0)),
                    (0, o.Xq)(n) && (i = Math.min(i, parseFloat("".concat(n)) || 0)),
                    "".concat("".concat(l) !== "".concat(r) ? r : i)
                },
                a = function (e, t, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    r = parseInt("".concat(e), 10) || 0, {
                        min: i,
                        max: a,
                        step: c = 1
                    } = o,
                    d = r,
                    u = e => {
                        n(d = l({
                                value: s({
                                    min: i,
                                    max: a,
                                    value: r - (e.clientY - t) * parseFloat("".concat(c))
                                }),
                                step: c
                            }), !0)
                    },
                    p = () => {
                        window.removeEventListener("mousemove", u),
                        window.removeEventListener("mouseup", p),
                        n(d)
                    };
                    window.addEventListener("mousemove", u),
                    window.addEventListener("mouseup", p)
                },
                c = function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                        partial: o
                    } = n,
                    r = (e, t) => e === t || o && e.startsWith(t);
                    return t.some(t => "string" == typeof t ? r(t, e) : r(t.id, e))
                }
            },
            43912: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return h
                    }
                });
                var o = n(27573),
                r = n(20914),
                l = n(74769),
                i = n(7653),
                s = n(38057),
                a = n(95816),
                c = n(37093),
                d = n(77735),
                u = n(62077),
                p = n(79473),
                g = n(47988),
                m = n(41062);
                function h(e) {
                    let {
                        children: t,
                        handler: n,
                        title: h,
                        size: f,
                        padding: b = !0,
                        overlay: y,
                        clickAway: v,
                        topIcon: x,
                        pos: j,
                        open: w,
                        onClose: Z,
                        buttonAs: S,
                        className: C,
                        buttonProps: k = {}
                    } = e,
                    P = (0, i.useRef)(null),
                    T = (0, i.useRef)(null),
                    [L, H] = (0, i.useState)(!!w),
                    [N, V] = (0, i.useState)({
                        top: 0,
                        left: 0
                    }),
                    z = () => {
                        H(!1),
                        null == Z || Z()
                    };
                    (0, a.O8)(T, {
                        onTrigger: z,
                        enabled: v && L
                    }),
                    (0, i.useEffect)(() => {
                        H(!!w)
                    }, [w]),
                    (0, i.useEffect)(() => {
                        let e = P.current,
                        t = T.current;
                        e && t && L && setTimeout(() => V((0, g.k)(e, t, j)))
                    }, [P, T, L]);
                    let M = (0, c.Z)("w-full transition-colors", ...(0, u.M)({
                            border: !1,
                            size: "",
                            ...k
                        }));
                    return (0, o.jsxs)(r.J, {
                        className: (0, c.Z)("gjs-popover relative flex", C),
                        children: [(0, o.jsx)(r.J.Button, {
                                ref: P,
                                as: S,
                                className: M,
                                children: (0, o.jsx)("div", {
                                    onClick: () => !(0, d.Xq)(w) && H(!L),
                                    children: n
                                })
                            }), L && y && (0, o.jsx)("div", {
                                onClick: z,
                                className: (0, c.Z)("z-10 fixed inset-0")
                            }), (0, o.jsx)(l.u, {
                                as: i.Fragment,
                                show: L,
                                unmount: !1,
                                ...m.ts,
                                children: (0, o.jsx)(r.J.Panel, {
                                    className: (0, c.Z)(["fixed z-20", x && "gjs-mt-5", "s" === f && "w-full max-w-64", "sm" === f && "w-full max-w-sm", "md" === f && "w-full max-w-md"]),
                                    onClick: s.sT,
                                    style: N,
                                    static: !0,
                                    children: (0, o.jsx)(p.Z, {
                                        ref: T,
                                        title: h,
                                        onClose: z,
                                        padding: b,
                                        children: L ? "function" == typeof t ? t({
                                            close: z
                                        }) : t : null
                                    })
                                })
                            })]
                    })
                }
            },
            59639: function (e, t, n) {
                n.d(t, {
                    IE: function () {
                        return j
                    },
                    O7: function () {
                        return x
                    },
                    ZP: function () {
                        return Z
                    },
                    zD: function () {
                        return w
                    }
                });
                var o = n(27573),
                r = n(33006),
                l = n(7653),
                i = n(20069),
                s = n(38057),
                a = n(37093),
                c = n(45531),
                d = n.n(c),
                u = n(79473),
                p = n(42807),
                g = n(81529),
                m = n(82106);
                n(47988);
                var h = n(30353),
                f = n(41062);
                let b = (e, t) => e.filter(e => e.id === t)[0] || null,
                y = (e, t) => (null == e ? void 0 : e.id) === (null == t ? void 0 : t.id),
                v = (e, t) => e.label.toLowerCase().indexOf(t.toLowerCase()) >= 0,
                x = (0, a.Z)("cursor-default select-none focus:gs-utl-outline-none", "z-20 max-h-full"),
                j = {
                    strategy: "fixed",
                    placement: "bottom",
                    modifiers: [{
                            name: "offset",
                            options: {
                                offset: [0, 5]
                            }
                        }, {
                            name: "flip",
                            options: {
                                fallbackPlacements: ["top"]
                            }
                        }
                    ]
                };
                function w(e) {
                    var t;
                    let {
                        option: n,
                        active: r,
                        selected: l
                    } = e,
                    i = (null === (t = e.isSelected) || void 0 === t ? void 0 : t.call(e)) || !0;
                    return (0, o.jsxs)(p.Z, {
                        items: "center",
                        className: (0, a.Z)([f.vk.xy, r && f.Sw.bgH]),
                        children: [(0, o.jsx)(g.Z, {
                                className: (0, a.Z)("truncate"),
                                grow: !0,
                                children: n.label
                            }), (0, o.jsx)(g.Z, {
                                className: (0, a.Z)("gjs-pl-2"),
                                children: y(n, l) && i && (0, o.jsx)(h.ZP, {
                                    className: (0, a.Z)(f.cl.tA),
                                    icon: h.do.check,
                                    size: f.qv.s
                                })
                            })]
                    })
                }
                function Z(e) {
                    let {
                        value: t,
                        onChange: n,
                        onBlur: c,
                        onFocus: w,
                        handlerSelected: Z,
                        label: S,
                        options: C,
                        includeEmpty: k,
                        className: P,
                        search: T,
                        fixed: L,
                        open: H,
                        caret: N = h.do.chevronDown,
                        size: V = "m",
                        width: z = "",
                        border: M,
                        style: A,
                        pos: B,
                        emptyState: E = "- Select an option -",
                        name: O,
                        required: D,
                        tip: R,
                        classNameContainer: I,
                        autoFocus: F
                    } = e,
                    [_, U] = (0, l.useState)(null),
                    [X, q] = (0, l.useState)(null),
                    [W, Y] = (0, l.useState)(""), {
                        styles: G,
                        attributes: K
                    } = (0, i.D)(_, X, j),
                    J = "object" == typeof T ? T.onChange : void 0,
                    $ = [...C].filter(e => T ? J || v(e, W) : e),
                    Q = T && ("object" == typeof T && T.value || W),
                    ee = Q && $.length ? $[0] : b($, t),
                    et = {
                        id: null,
                        label: E
                    },
                    en = ee ? Z ? Z(ee) : ee.content || ee.label : Z ? Z(et) : E;
                    k && $.unshift(et);
                    let eo = e => {
                        let {
                            value: t
                        } = e.target,
                        o = t.trim();
                        switch (e.key) {
                        case "Escape":
                            n(null);
                            break;
                        case "Enter":
                            n(($.length ? $[0].id : o) || null);
                            break;
                        case " ":
                            (0, s.sT)(e)
                        }
                    },
                    er = d()("gs-utl-w-full gs-utl-text-left gs-utl-cursor-pointer gs-utl-block", f.br.rnd, f.v_.focus),
                    el = () => {
                        null == c || c()
                    };
                    return (0, o.jsx)(r.R, {
                        value: ee,
                        onChange: e => n(e.id),
                        children: e => {
                            var t;
                            let {
                                open: n
                            } = e;
                            return (0, o.jsxs)("div", {
                                className: d()("gs-select-field", I, "gs-utl-relative gs-utl-w-full gs-utl-text-sm"),
                                style: A,
                                children: [S && (0, o.jsx)(r.R.Label, {
                                        children: (0, o.jsx)(m.Z, {
                                            as: "span",
                                            size: V,
                                            tip: R,
                                            children: S
                                        })
                                    }), O && (0, o.jsx)("input", {
                                        type: "input",
                                        name: O,
                                        value: null !== (t = null == ee ? void 0 : ee.id) && void 0 !== t ? t : "",
                                        onChange: () => {},
                                        className: (0, a.Z)("gs-utl-w-[1px] gs-utl-h-[1px] gs-utl-opacity-[0.001] gs-utl-absolute"),
                                        required: D
                                    }), (0, o.jsx)(r.R.Button, {
                                        ref: U,
                                        className: er,
                                        tabIndex: T ? -1 : void 0,
                                        children: T ? (0, o.jsx)("input", {
                                            autoFocus: F,
                                            value: "object" == typeof T && T.value || W,
                                            className: d()([P, "gs-utl-w-full", f.br.rnd, f.v_.focus, f.vk.xyS]),
                                            onChange: e => {
                                                Y(e.target.value),
                                                null == J || J(e.target.value)
                                            },
                                            onKeyDown: eo,
                                            onClick: s.sT,
                                            onBlur: el,
                                            onFocus: w
                                        }) : (0, o.jsx)(u.Z, {
                                            border: M,
                                            size: V,
                                            title: en,
                                            icon: N,
                                            shadow: !1,
                                            className: (0, a.Z)(P),
                                            titleClass: ""
                                        })
                                    }), (0, o.jsx)(r.R.Options, {
                                        static: H,
                                        className: x,
                                        ref: q,
                                        style: G.popper,
                                        ...K.popper,
                                        children: (0, o.jsxs)(u.Z, {
                                            padding: !1,
                                            className: (0, a.Z)("h-full"),
                                            style: {
                                                minWidth: "".concat(null == _ ? void 0 : _.offsetWidth, "px"),
                                                maxHeight: 200
                                            },
                                            children: [!$.length && T && !0 !== T && (0, o.jsx)("div", {
                                                    className: (0, a.Z)(f.vk.xy),
                                                    children: T.empty
                                                }), $.map((e, t) => (0, o.jsx)(r.R.Option, {
                                                        value: e,
                                                        children: t => {
                                                            let {
                                                                active: n,
                                                                selected: r
                                                            } = t;
                                                            return (0, o.jsxs)(p.Z, {
                                                                items: "center",
                                                                className: (0, a.Z)([f.vk.xy, n && f.Sw.bgH]),
                                                                children: [(0, o.jsx)(g.Z, {
                                                                        className: (0, a.Z)("truncate"),
                                                                        grow: !0,
                                                                        children: e.content || e.label
                                                                    }), (0, o.jsx)(g.Z, {
                                                                        className: (0, a.Z)("gjs-pl-2"),
                                                                        children: y(e, ee) && !Q && (0, o.jsx)(h.ZP, {
                                                                            className: (0, a.Z)(f.cl.tA),
                                                                            icon: h.do.check,
                                                                            size: f.qv.s
                                                                        })
                                                                    })]
                                                            })
                                                        }
                                                    }, t))]
                                        })
                                    })]
                            })
                        }
                    })
                }
            },
            8975: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return j
                    }
                });
                var o = n(27573),
                r = n(43228),
                l = n(72926),
                i = n(58725),
                s = n(37093),
                a = n(62077),
                c = n(42807),
                d = n(81529),
                u = n(82106),
                p = n(43912),
                g = n(30353),
                m = n(41062),
                h = n(47988),
                f = n(34139),
                b = n(38057);
                function y(e) {
                    let {
                        id: t,
                        item: n,
                        className: r,
                        select: l,
                        remove: a,
                        renderItem: u,
                        previewStyle: p
                    } = e, {
                        attributes: h,
                        listeners: y,
                        setNodeRef: v,
                        transform: x,
                        transition: j
                    } = (0, i.nB)({
                        id: t
                    }),
                    w = {
                        transform: f.ux.Transform.toString(x),
                        transition: j
                    };
                    return (0, o.jsx)("div", {
                        ref: v,
                        style: w,
                        ...h,
                        children: (0, o.jsxs)(c.Z, {
                            space: "s",
                            onClick: () => null == l ? void 0 : l(n),
                            className: r,
                            items: "center",
                            nowrap: !0,
                            children: [(0, o.jsx)(d.Z, {
                                    className: (0, s.Z)(m.fx.hover, "cursor-grab"),
                                    ...y,
                                    children: (0, o.jsx)(g.ZP, {
                                        icon: g.do.dotsVertical,
                                        size: m.qv.sx
                                    })
                                }), (0, o.jsx)(d.Z, {
                                    grow: !0,
                                    className: (0, s.Z)("overflow-hidden"),
                                    children: (0, o.jsxs)(c.Z, {
                                        children: [(0, o.jsx)(d.Z, {
                                                grow: !0,
                                                className: (0, s.Z)("overflow-ellipsis overflow-hidden"),
                                                children: u(n)
                                            }), !!p && (0, o.jsx)(d.Z, {
                                                children: (0, o.jsx)("div", {
                                                    className: (0, s.Z)("w-4 h-4 gjs-bg-white", m.br.b, m.br.rnd),
                                                    style: p(n)
                                                })
                                            })]
                                    })
                                }), (0, o.jsx)(d.Z, {
                                    className: (0, s.Z)(m.fx.click),
                                    onClick: e => {
                                        (0, b.sT)(e),
                                        null == a || a(n)
                                    },
                                    children: (0, o.jsx)(g.ZP, {
                                        icon: g.do.close,
                                        size: m.qv.sx
                                    })
                                })]
                        }, n.getIndex ? n.getIndex() : n.id || n.cid)
                    })
                }
                let v = {
                    position: {
                        x: "left-edge",
                        y: "top-bottom"
                    },
                    offset: {
                        x: 7,
                        y: 0
                    }
                },
                x = e => {
                    var t;
                    return null !== (t = e.cid) && void 0 !== t ? t : e.id
                };
                function j(e) {
                    let {
                        className: t,
                        items: n,
                        selected: f,
                        children: b,
                        title: j,
                        titleAdd: w,
                        label: Z,
                        select: S,
                        add: C,
                        move: k,
                        remove: P,
                        renderItem: T,
                        previewStyle: L
                    } = e,
                    H = (0, r.Dy)((0, r.VT)(r.we), (0, r.VT)(r.Lg, {
                            coordinateGetter: i.is
                        })),
                    N = (0, s.Z)(m.br.rnd, m.cl.br, n.length && m.br.b, n.length && "gjs-mt-1");
                    return (0, o.jsxs)("div", {
                        className: (0, s.Z)(t, "w-full"),
                        children: [!!(Z || C) && (0, o.jsxs)(c.Z, {
                                items: "center",
                                children: [(0, o.jsx)(d.Z, {
                                        grow: !0,
                                        children: (0, o.jsx)(u.Z, {
                                            size: "s",
                                            children: Z
                                        })
                                    }), !!C && (0, o.jsx)(d.Z, {
                                        children: (0, o.jsx)(h.Z, {
                                            title: w,
                                            inline: !0,
                                            children: (0, o.jsx)(a.default, {
                                                onClick: C,
                                                size: "s",
                                                children: (0, o.jsx)(g.ZP, {
                                                    icon: g.do.plus,
                                                    size: m.qv.s
                                                })
                                            })
                                        })
                                    })]
                            }), (0, o.jsx)(p.Z, {
                                pos: v,
                                size: "s",
                                buttonAs: "div",
                                title: j,
                                open: !!f,
                                onClose: () => null == S ? void 0 : S(null),
                                handler: (0, o.jsx)(r.LB, {
                                    sensors: H,
                                    collisionDetection: r.pE,
                                    onDragEnd: function (e) {
                                        let {
                                            active: t,
                                            over: o
                                        } = e;
                                        if (t.id !== (null == o ? void 0 : o.id)) {
                                            let e = n.find(e => x(e) === t.id),
                                            r = n.findIndex(e => x(e) === (null == o ? void 0 : o.id));
                                            e && (null == k || k(e, r))
                                        }
                                    },
                                    modifiers: [l.DL, l.lv],
                                    children: (0, o.jsx)(i.Fo, {
                                        items: n.map(x),
                                        strategy: i.qw,
                                        children: (0, o.jsx)("div", {
                                            className: N,
                                            children: n.map((e, t) => {
                                                let n = x(e),
                                                r = e === f,
                                                l = (0, s.Z)("gjs-px-2 gjs-py-2 text-xs", m.cl.br, t && m.br.bt, !r && m.cl.hBgH2, r && m.cl.bgH);
                                                return (0, o.jsx)(y, {
                                                    id: n,
                                                    item: e,
                                                    className: l,
                                                    select: S,
                                                    remove: P,
                                                    renderItem: T,
                                                    previewStyle: L
                                                }, n)
                                            })
                                        })
                                    })
                                }),
                                children: b
                            })]
                    })
                }
            },
            2951: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return v
                    }
                });
                var o = n(27573),
                r = n(7653),
                l = n(36325),
                i = n(37093),
                s = n(10046),
                a = n(8871),
                c = n(42807),
                d = n(81529),
                u = n(12225),
                p = n(59639),
                g = n(30353),
                m = n(41062),
                h = n(23406),
                f = n(60474),
                b = n(70566);
                function y(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = e.getType(), {
                        compact: i = !1
                    } = n,
                    s = e.getParent(),
                    c = e.getDefaultValue();
                    if ("select" === r) {
                        let n = {
                            property: s.getName()
                        };
                        return (0, o.jsx)(p.ZP, {
                            ...(0, l.hM)(e, n),
                            ...t ? {
                                value: t.same ? e.getValue({
                                    noDefault: !0
                                }) : "",
                                emptyState: t.same ? e.getOptionLabel(c, n) || c : "Custom",
                                onChange: e => t.all.map(t => t.upValue(e))
                            }
                             : {}
                        })
                    }
                    return "color" === r ? (0, o.jsx)(a.Z, {
                        ...(0, l.Pd)(e),
                        ...t ? {
                            value: t.same ? e.getValue({
                                noDefault: !0
                            }) : "",
                            placeholder: t.same ? c : "Custom",
                            onChange: (e, n) => t.all.map(t => t.upValue(e, {
                                    partial: n
                                }))
                        }
                         : {}
                    }) : (0, o.jsx)(u.Z, {
                        ...(0, l.le)(e),
                        ...i ? {
                            pan: e.getLabel()[0]
                        }
                         : {},
                        ...t ? {
                            value: t.same ? e.getValue({
                                noDefault: !0
                            }) : "",
                            valueUnit: t.same ? e.getUnit() : "",
                            placeholder: t.same ? c : "Custom",
                            onChange: (e, n) => t.all.map(t => t.upValue(e, {
                                    partial: n
                                })),
                            onChangeUnit: e => t.all.map(t => t.upUnit(e))
                        }
                         : {}
                    })
                }
                function v(e) {
                    let {
                        property: t,
                        corners: n,
                        compact: l,
                        generic: a,
                        children: u,
                        options: p
                    } = e,
                    v = {
                        id: "custom",
                        label: (0, o.jsx)(g.ZP, {
                            icon: g.do.borderStyle,
                            size: m.qv.s
                        }),
                        title: "Custom"
                    },
                    x = [{
                            id: "all",
                            label: (0, o.jsx)(g.ZP, {
                                icon: g.do.borderAllVariant,
                                size: m.qv.s
                            }),
                            title: "All"
                        }, v],
                    [j, w] = (0, r.useState)(null),
                    Z = t.isDetached(),
                    S = t.getProperties(),
                    C = S.length,
                    [k, P, T, L] = S,
                    H = k.getFullValue(),
                    N = S.map(e => e.getFullValue()).every(e => e === H),
                    V = null !== j ? j : N || p ? "all" : v.id,
                    z = p ? [...p, v] : [],
                    M = t.getFullValue(),
                    A = z.some(e => e.id === M),
                    B = V === v.id || !!p && !A || !!a,
                    E = (0, o.jsx)(h.Z, {
                        property: l ? null : k,
                        shallow: !Z,
                        children: y(k, null, {
                            compact: l
                        })
                    }),
                    O = (0, o.jsx)(h.Z, {
                        property: l ? null : P,
                        shallow: !Z,
                        children: y(P, null, {
                            compact: l
                        })
                    }),
                    D = !!T && (0, o.jsx)(h.Z, {
                        property: l ? null : T,
                        shallow: !Z,
                        children: y(T, null, {
                            compact: l
                        })
                    }),
                    R = !!L && (0, o.jsx)(h.Z, {
                        property: l ? null : L,
                        shallow: !Z,
                        children: y(L, null, {
                            compact: l
                        })
                    }),
                    I = l ? {
                        label: t.getLabel()
                    }
                     : {
                        property: t
                    };
                    return (null == t ? void 0 : t.isVisible()) ? (0, o.jsxs)(c.Z, {
                        className: (0, i.Z)("w-full gs-utl-gap-2"),
                        col: !0,
                        nowrap: !0,
                        children: [(0, o.jsx)(b.Z, {
                                children: (0, o.jsx)(h.Z, {
                                    ...I,
                                    children: !a && (0, o.jsx)(b.Z, {
                                        bottom: "0",
                                        children: void 0 !== u ? u : p ? (0, o.jsx)(o.Fragment, {
                                            children: (0, o.jsx)(d.Z, {
                                                grow: !0,
                                                children: (0, o.jsx)(s.Z, {
                                                    size: "s",
                                                    options: z,
                                                    value: B ? v.id : M,
                                                    onChange: e => {
                                                        e === v.id ? w(e) : (t.upValue(e), w(""))
                                                    }
                                                })
                                            })
                                        }) : (0, o.jsxs)(o.Fragment, {
                                            children: [(0, o.jsx)(d.Z, {
                                                    grow: !0,
                                                    children: y(k, {
                                                        same: N,
                                                        all: S
                                                    })
                                                }), (0, o.jsx)(d.Z, {
                                                    grow: !0,
                                                    children: (0, o.jsx)(s.Z, {
                                                        size: "s",
                                                        options: x,
                                                        value: V,
                                                        onChange: w
                                                    })
                                                })]
                                        })
                                    })
                                })
                            }), B && (0, o.jsx)(b.Z, {
                                col: !0,
                                className: (0, i.Z)("gjs-px-2 gjs-py-1", m.cl.bgH2, m.br.rnd, m.br.b, m.cl.br),
                                children: a ? (0, o.jsx)("div", {
                                    className: (0, i.Z)("grid grid-cols-2 gap-2"),
                                    children: S.map(e => (0, o.jsx)(h.Z, {
                                            property: e,
                                            shallow: !Z,
                                            className: (0, i.Z)((0, f.SH)(e) && "col-span-full"),
                                            children: (0, o.jsx)(f.sA, {
                                                property: e
                                            })
                                        }, e.getId()))
                                }) : 2 === C ? (0, o.jsx)(o.Fragment, {
                                    children: (0, o.jsxs)(c.Z, {
                                        space: "s",
                                        children: [(0, o.jsx)(d.Z, {
                                                grow: !0,
                                                children: E
                                            }), (0, o.jsx)(d.Z, {
                                                grow: !0,
                                                children: O
                                            })]
                                    })
                                }) : 3 === C ? (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsxs)(c.Z, {
                                            space: "s",
                                            children: [(0, o.jsx)(d.Z, {
                                                    grow: !0,
                                                    children: E
                                                }), (0, o.jsx)(d.Z, {
                                                    grow: !0,
                                                    children: O
                                                })]
                                        }), (0, o.jsx)(c.Z, {
                                            space: "s",
                                            children: (0, o.jsx)(d.Z, {
                                                grow: !0,
                                                children: D
                                            })
                                        })]
                                }) : n ? (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsxs)(c.Z, {
                                            space: "s",
                                            children: [(0, o.jsx)(d.Z, {
                                                    grow: !0,
                                                    children: E
                                                }), (0, o.jsx)(d.Z, {
                                                    grow: !0,
                                                    children: O
                                                })]
                                        }), (0, o.jsxs)(c.Z, {
                                            space: "s",
                                            children: [(0, o.jsx)(d.Z, {
                                                    grow: !0,
                                                    children: R
                                                }), (0, o.jsx)(d.Z, {
                                                    grow: !0,
                                                    children: D
                                                })]
                                        })]
                                }) : (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)(c.Z, {
                                            className: (0, i.Z)("gs-utl-w-1/2 gjs-m-auto"),
                                            children: E
                                        }), (0, o.jsxs)(c.Z, {
                                            space: "s",
                                            children: [(0, o.jsx)(d.Z, {
                                                    grow: !0,
                                                    children: R
                                                }), (0, o.jsx)(d.Z, {
                                                    grow: !0,
                                                    children: O
                                                })]
                                        }), (0, o.jsx)(c.Z, {
                                            className: (0, i.Z)("gs-utl-w-1/2 gjs-m-auto"),
                                            children: D
                                        })]
                                })
                            })]
                    }) : null
                }
            },
            23406: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return d
                    }
                });
                var o = n(27573),
                r = n(37093),
                l = n(42807),
                i = n(81529),
                s = n(30353),
                a = n(41062),
                c = n(47988);
                function d(e) {
                    let {
                        label: t,
                        property: n,
                        hasValue: d,
                        empty: u,
                        onClear: p,
                        children: g,
                        shallow: m,
                        row: h,
                        tooltip: f,
                        className: b,
                        ...y
                    } = e,
                    v = t || (null == n ? void 0 : n.getLabel()),
                    x = null == n ? void 0 : n.getParentTarget(),
                    j = d || !u && (null == n ? void 0 : n.hasValue({
                                noParent: !0
                            })),
                    w = !j && (null == n ? void 0 : n.hasValue()) && x,
                    Z = null == x ? void 0 : x.getDevice(),
                    S = null == x ? void 0 : x.getState(),
                    C = null == x ? void 0 : x.getComponent(),
                    k = {
                        className: (0, r.Z)(b, "text-sm w-full"),
                        col: !h,
                        items: h ? "center" : void 0,
                        ...y
                    };
                    return n && !n.isVisible() ? null : (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsxs)(l.Z, {
                            ...k,
                            children: [(0, o.jsx)(i.Z, {
                                    grow: !0,
                                    children: (0, o.jsxs)(l.Z, {
                                        as: "label",
                                        items: "center",
                                        space: "xs",
                                        className: (0, r.Z)("block", !h && "gjs-mb-1", j && !m && a.cl.tAo),
                                        children: [f && (0, o.jsx)(i.Z, {
                                                children: (0, o.jsx)(c.Z, {
                                                    title: f,
                                                    children: (0, o.jsx)(s.ZP, {
                                                        icon: s.do.information,
                                                        size: a.qv.sx
                                                    })
                                                })
                                            }), (0, o.jsx)(i.Z, {
                                                children: u ? (0, o.jsx)("span", {
                                                    children: "\xa0"
                                                }) : v
                                            }), !!w && !m && (0, o.jsx)(c.Z, {
                                                title: (0, o.jsxs)(o.Fragment, {
                                                    children: [(0, o.jsx)("div", {
                                                            className: (0, r.Z)("gjs-mb-1"),
                                                            children: "Value inherited from"
                                                        }), !!Z && (0, o.jsxs)(l.Z, {
                                                            space: "s",
                                                            children: [(0, o.jsx)(i.Z, {
                                                                    children: (0, o.jsx)(s.ZP, {
                                                                        icon: s.do.cellphoneLink,
                                                                        size: a.qv.sx
                                                                    })
                                                                }), (0, o.jsx)(i.Z, {
                                                                    children: (0, o.jsx)("b", {
                                                                        children: Z.getName()
                                                                    })
                                                                })]
                                                        }), (0, o.jsxs)(l.Z, {
                                                            space: "s",
                                                            children: [(0, o.jsx)(i.Z, {
                                                                    children: (0, o.jsx)(s.ZP, {
                                                                        icon: C ? s.do.targetVariant : s.do.tag,
                                                                        size: a.qv.sx
                                                                    })
                                                                }), (0, o.jsxs)(i.Z, {
                                                                    children: [(0, o.jsx)("b", {
                                                                            children: C ? "Components" : "Selectors"
                                                                        }), (0, o.jsxs)("span", {
                                                                            className: (0, r.Z)("text-xs opacity-75"),
                                                                            children: [" ", null == x ? void 0 : x.selectorsToString({
                                                                                    skipState: 1
                                                                                })]
                                                                        })]
                                                                })]
                                                        }), !!S && (0, o.jsxs)(l.Z, {
                                                            space: "s",
                                                            children: [(0, o.jsx)(i.Z, {
                                                                    children: (0, o.jsx)(s.ZP, {
                                                                        icon: s.do.flare,
                                                                        size: a.qv.sx
                                                                    })
                                                                }), (0, o.jsx)(i.Z, {
                                                                    children: (0, o.jsx)("b", {
                                                                        children: S.getLabel()
                                                                    })
                                                                })]
                                                        })]
                                                }),
                                                children: (0, o.jsx)("div", {
                                                    className: (0, r.Z)("gs-utl-w-[6px] gs-utl-h-[6px] gjs-rounded-full", a.cl.bgW)
                                                })
                                            }), j && !m && (0, o.jsx)(c.Z, {
                                                title: "Clear value",
                                                onClick: () => p ? p() : null == n ? void 0 : n.clear(),
                                                children: (0, o.jsx)(s.ZP, {
                                                    className: (0, r.Z)(a.fx.click),
                                                    icon: s.do.close,
                                                    size: a.qv.s2x
                                                })
                                            })]
                                    })
                                }), (0, o.jsx)(i.Z, {
                                    grow: !0,
                                    className: (0, r.Z)("max-w-full"),
                                    children: g
                                })]
                        })
                    })
                }
            },
            80513: function (e, t, n) {
                n.d(t, {
                    Eo: function () {
                        return r
                    },
                    KT: function () {
                        return x
                    },
                    ZP: function () {
                        return P
                    },
                    dX: function () {
                        return j
                    },
                    zw: function () {
                        return w
                    }
                });
                var o,
                r,
                l = n(27573),
                i = n(43442),
                s = n(36325),
                a = n(41693),
                c = n(10046),
                d = n(8871),
                u = n(36129),
                p = n(82520),
                g = n(30353),
                m = n(59639),
                h = n(8975),
                f = n(41062),
                b = n(2951),
                y = n(23406),
                v = n(70566);
                (o = r || (r = {})).Image = "image",
                o.Gradient = "gradient",
                o.Color = "color";
                let x = "background-image",
                j = "__background-type",
                w = x,
                Z = "https://placehold.co/150/777/white.png?text=IMAGE",
                S = "50px",
                C = {
                    [j]: "image",
                    "background-image": 'url("'.concat(Z, '")'),
                    "background-size": "".concat(S, " ").concat(S),
                    "background-repeat": "repeat",
                    "background-position": "0px 0px"
                },
                k = e => (e.includes("gradient(") ? (0, p.k)(e).colorStops[0].color : e) || "";
                function P(e) {
                    var t;
                    let {
                        sector: n
                    } = e,
                    o = (0, i.jE)(),
                    r = n.getProperty("background"),
                    x = r.getProperty(j),
                    w = r.getProperty("background-image"),
                    P = r.getProperty("background-position"),
                    T = r.getProperty("background-size"),
                    L = n.getProperty("background-color"),
                    H = n.getProperty("background-clip"),
                    N = (null === (t = r.getSelectedLayer()) || void 0 === t ? void 0 : t.getIndex()) || -1,
                    V = null == x ? void 0 : x.getValue(),
                    z = "image" === V,
                    M = w.getValue(),
                    A = (0, s.pg)(x, [{
                                id: "image",
                                label: (0, l.jsx)(g.ZP, {
                                    icon: g.do.image,
                                    size: f.qv.s
                                })
                            }, {
                                id: "gradient",
                                label: (0, l.jsx)(g.ZP, {
                                    icon: g.do.gradientVertical,
                                    size: f.qv.s
                                })
                            }, {
                                id: "color",
                                label: (0, l.jsx)(g.ZP, {
                                    icon: g.do.checkboxBlank,
                                    size: f.qv.s
                                })
                            }
                        ]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(v.Z, {
                                property: r,
                                separator: !0,
                                children: (0, l.jsxs)(h.Z, {
                                    ...(0, s.Xd)(r, C),
                                    previewStyle: e => r.getStyleFromLayer(e, {
                                        camelCase: !0
                                    }),
                                    children: [(0, l.jsx)(v.Z, {
                                            children: (0, l.jsx)(y.Z, {
                                                label: "Type",
                                                children: (0, l.jsx)(c.Z, {
                                                    ...(0, s.hM)(x),
                                                    options: A,
                                                    onChange: e => {
                                                        let t = "none",
                                                        n = "100%";
                                                        "image" === e ? (t = 'url("'.concat(Z, '")'), n = S) : "gradient" === e ? t = "linear-gradient(90deg, black 10%, white 90%)" : "color" === e && (t = "rgba(0, 0, 0, 0.5)"),
                                                        w.upValue(t),
                                                        x.upValue(e),
                                                        P.upValue("0 0"),
                                                        T.upValue("".concat(n, " ").concat(n))
                                                    }
                                                })
                                            })
                                        }), (0, l.jsx)(v.Z, {
                                            children: (0, l.jsxs)(y.Z, {
                                                children: [z && (0, l.jsx)(u.Z, {
                                                        value: (0, a.Z)(M).value,
                                                        onOpen: () => {
                                                            let e = o.Assets;
                                                            e.open({
                                                                select(t) {
                                                                    let n = t.getSrc();
                                                                    w.upValue('url("'.concat(n, '")')),
                                                                    e.close()
                                                                }
                                                            })
                                                        }
                                                    }), "color" === V && (0, l.jsx)(d.Z, {
                                                        ...(0, s.Pd)(w),
                                                        value: k(M)
                                                    }), "gradient" === V && (0, l.jsx)(p.Z, {
                                                        value: M,
                                                        onChange: (e, t) => w.upValue(e, {
                                                            partial: t
                                                        })
                                                    }, N)]
                                            })
                                        }), z && (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(v.Z, {
                                                    col: !0,
                                                    children: (0, l.jsx)(b.Z, {
                                                        property: P
                                                    })
                                                }), (0, l.jsx)(v.Z, {
                                                    col: !0,
                                                    children: (0, l.jsx)(b.Z, {
                                                        property: T
                                                    })
                                                }), (0, l.jsxs)(v.Z, {
                                                    children: [(0, l.jsx)(y.Z, {
                                                            label: r.getProperty("background-repeat").getLabel(),
                                                            children: (0, l.jsx)(m.ZP, {
                                                                ...(0, s.hM)(r.getProperty("background-repeat"))
                                                            })
                                                        }), (0, l.jsx)(y.Z, {
                                                            label: r.getProperty("background-attachment").getLabel(),
                                                            children: (0, l.jsx)(m.ZP, {
                                                                ...(0, s.hM)(r.getProperty("background-attachment"))
                                                            })
                                                        })]
                                                }), (0, l.jsx)(v.Z, {
                                                    children: (0, l.jsx)(y.Z, {
                                                        label: r.getProperty("background-origin").getLabel(),
                                                        children: (0, l.jsx)(m.ZP, {
                                                            ...(0, s.hM)(r.getProperty("background-origin"))
                                                        })
                                                    })
                                                })]
                                        })]
                                })
                            }), (0, l.jsx)(v.Z, {
                                property: L,
                                children: (0, l.jsx)(y.Z, {
                                    property: L,
                                    children: (0, l.jsx)(d.Z, {
                                        ...(0, s.Pd)(L)
                                    })
                                })
                            }), (0, l.jsx)(v.Z, {
                                property: H,
                                children: (0, l.jsx)(y.Z, {
                                    property: H,
                                    children: (0, l.jsx)(m.ZP, {
                                        ...(0, s.hM)(H)
                                    })
                                })
                            })]
                    })
                }
            },
            60474: function (e, t, n) {
                n.d(t, {
                    SH: function () {
                        return h
                    },
                    ZP: function () {
                        return b
                    },
                    sA: function () {
                        return f
                    }
                });
                var o = n(27573),
                r = n(59639),
                l = n(36325),
                i = n(12225),
                s = n(45837),
                a = n(8871),
                c = n(10046),
                d = n(23406),
                u = n(37093),
                p = n(2951),
                g = n(8975),
                m = n(36129);
                function h(e) {
                    return e.isFull() || ["slider", "composite", "stack", "file"].includes(e.getType())
                }
                function f(e) {
                    let {
                        property: t
                    } = e;
                    switch (t.getType()) {
                    case "number":
                    case "slider":
                    case "integer":
                        return (0, o.jsx)(i.Z, {
                            ...(0, l.le)(t)
                        });
                    case "color":
                        return (0, o.jsx)(a.Z, {
                            ...(0, l.Pd)(t)
                        });
                    case "select":
                        return (0, o.jsx)(r.ZP, {
                            ...(0, l.hM)(t)
                        });
                    case "radio":
                        return (0, o.jsx)(c.Z, {
                            ...(0, l.hM)(t)
                        });
                    case "file":
                        return (0, o.jsx)(m.Z, {
                            ...(0, l.Ys)(t)
                        });
                    case "composite":
                        return (0, o.jsx)(p.Z, {
                            property: t,
                            corners: t.get("corners"),
                            generic: t.get("generic")
                        });
                    case "stack":
                        return (0, o.jsx)(g.Z, {
                            ...(0, l.Xd)(t),
                            children: t.getProperties().map(e => (0, o.jsx)(d.Z, {
                                    property: e,
                                    className: (0, u.cx)(h(e) && "col-span-full"),
                                    children: (0, o.jsx)(f, {
                                        property: e
                                    })
                                }, e.getId()))
                        });
                    default:
                        return (0, o.jsx)(s.ZP, {
                            ...(0, l.Pd)(t)
                        })
                    }
                }
                function b(e) {
                    let {
                        sector: t
                    } = e,
                    n = t.getProperties().filter(e => e.isVisible());
                    return (0, o.jsx)("div", {
                        className: (0, u.cx)("grid grid-cols-2 gap-2"),
                        children: n.map(e => ["composite", "stack"].includes(e.getType()) ? (0, o.jsx)("div", {
                                className: (0, u.cx)(h(e) && "col-span-full"),
                                children: (0, o.jsx)(f, {
                                    property: e
                                })
                            }, e.getId()) : (0, o.jsx)(d.Z, {
                                property: e,
                                className: (0, u.cx)(h(e) && "col-span-full"),
                                children: (0, o.jsx)(f, {
                                    property: e
                                })
                            }, e.getId()))
                    })
                }
            },
            70566: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return s
                    }
                });
                var o = n(27573),
                r = n(37093),
                l = n(42807),
                i = n(41062);
                function s(e) {
                    let {
                        className: t,
                        children: n,
                        bottom: s,
                        separator: a,
                        separatorTop: c,
                        property: d,
                        ...u
                    } = e,
                    p = (0, o.jsx)("div", {
                        className: (0, r.Z)("gjs-mb-2 -gjs-ml-2 -gjs-mr-2", i.br.bb, i.cl.br)
                    }),
                    g = (0, r.Z)("gs-cmp-sector-row", t, "w-full gs-utl-gap-2", s),
                    m = (Array.isArray(d) ? d : [d]).filter(Boolean);
                    return !m.length || m.some(e => e.isVisible()) ? (0, o.jsxs)(o.Fragment, {
                        children: [c && p, (0, o.jsx)(l.Z, {
                                className: g,
                                nowrap: !0,
                                ...u,
                                children: n
                            }), a && p]
                    }) : null
                }
            },
            36325: function (e, t, n) {
                n.d(t, {
                    ZP: function () {
                        return er
                    },
                    hM: function () {
                        return $
                    },
                    Pd: function () {
                        return et
                    },
                    Ys: function () {
                        return en
                    },
                    le: function () {
                        return ee
                    },
                    N7: function () {
                        return G
                    },
                    Xd: function () {
                        return Q
                    },
                    pg: function () {
                        return J
                    }
                });
                var o = n(27573),
                r = n(43442),
                l = n(37093),
                i = n(55524),
                s = n(42807),
                a = n(81529),
                c = n(41062),
                d = n(23406),
                u = n(80513),
                p = n(2951);
                function g(e) {
                    let {
                        sector: t
                    } = e,
                    n = t.getProperty("border-radius");
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(p.Z, {
                                property: n,
                                corners: !0
                            }), (0, o.jsx)(p.Z, {
                                property: t.getProperty("border-width")
                            }), (0, o.jsx)(p.Z, {
                                property: t.getProperty("border-style")
                            }), (0, o.jsx)(p.Z, {
                                property: t.getProperty("border-color")
                            })]
                    })
                }
                var m = n(10046),
                h = n(8871),
                f = n(12225),
                b = n(86353),
                y = n(59639),
                v = n(8975),
                x = n(70566);
                let j = e => (0, b.vu)({
                    value: parseFloat(e),
                    min: -3,
                    max: 3
                }),
                w = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "filter",
                    n = e.getProperty("".concat(t, "-value")),
                    o = e.getProperty("".concat(t, "-name")).getOption() || {},
                    r = o.units || [],
                    l = n.getUnit(),
                    i = (0, b.ot)(l, r) ? l : r[0];
                    return {
                        ...ee(n),
                        units: r,
                        valueUnit: i,
                        onChange: (e, t) => {
                            n.upValue(e, {
                                partial: t,
                                units: r,
                                min: o.min,
                                max: o.max
                            })
                        }
                    }
                },
                Z = (e, t) => {
                    let n = e.getProperty("".concat(t, "-name")),
                    o = e.getProperty("".concat(t, "-value"));
                    return {
                        ...$(n),
                        onChange: e => {
                            n.upValue(e),
                            o.upValue("")
                        }
                    }
                },
                S = {
                    "text-shadow-h": "1px",
                    "text-shadow-v": "1px",
                    "text-shadow-blur": "5px"
                };
                function C(e) {
                    let {
                        sector: t
                    } = e,
                    n = t.getProperty("box-shadow"),
                    r = t.getProperty("text-shadow"),
                    i = t.getProperty("filter"),
                    u = t.getProperty("backdrop-filter"),
                    g = t.getProperty("transition"),
                    b = t.getProperty("transform"),
                    C = t.getProperty("perspective-origin"),
                    k = t.getProperty("backface-visibility"),
                    P = t.getProperty("perspective"),
                    T = t.getProperty("transform-style"),
                    L = t.getProperty("opacity"),
                    H = t.getProperty("mix-blend-mode"),
                    N = t.getProperty("cursor");
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)(x.Z, {
                                property: [L, H],
                                children: [(0, o.jsx)(d.Z, {
                                        property: L,
                                        children: (0, o.jsx)(f.Z, {
                                            ...ee(L)
                                        })
                                    }), (0, o.jsx)(d.Z, {
                                        property: H,
                                        children: (0, o.jsx)(y.ZP, {
                                            ...$(H)
                                        })
                                    })]
                            }), (0, o.jsx)(x.Z, {
                                property: N,
                                separator: !0,
                                children: (0, o.jsx)(d.Z, {
                                    property: N,
                                    children: (0, o.jsx)(y.ZP, {
                                        ...$(N)
                                    })
                                })
                            }), (0, o.jsx)(x.Z, {
                                property: n,
                                separator: !0,
                                children: (0, o.jsxs)(v.Z, {
                                    ...Q(n),
                                    renderItem: e => {
                                        let {
                                            boxShadowH: t,
                                            boxShadowV: n,
                                            boxShadowBlur: r,
                                            boxShadowColor: i,
                                            boxShadowSpread: d,
                                            boxShadowType: u
                                        } = e.getValues({
                                            camelCase: !0
                                        }),
                                        p = j(t),
                                        g = j(n),
                                        m = j(r),
                                        h = j(d),
                                        f = "".concat(p, "px ").concat(g, "px ").concat(m, "px ").concat(h, "px ").concat(i, " ").concat(u).trim();
                                        return (0, o.jsxs)(s.Z, {
                                            space: "s",
                                            items: "center",
                                            children: [(0, o.jsxs)(a.Z, {
                                                    grow: !0,
                                                    children: [t, " ", n, " ", r, " ", d]
                                                }), (0, o.jsx)(a.Z, {
                                                    children: (0, o.jsx)("div", {
                                                        className: (0, l.Z)("w-4 h-4 gjs-bg-white", c.br.b, c.br.rnd),
                                                        style: {
                                                            boxShadow: f
                                                        }
                                                    })
                                                })]
                                        })
                                    },
                                    children: [(0, o.jsx)(x.Z, {
                                            children: (0, o.jsx)(m.Z, {
                                                ...$(n.getProperty("box-shadow-type"))
                                            })
                                        }), (0, o.jsxs)(x.Z, {
                                            children: [(0, o.jsx)(d.Z, {
                                                    label: "X offset",
                                                    children: (0, o.jsx)(f.Z, {
                                                        ...ee(n.getProperty("box-shadow-h"))
                                                    })
                                                }), (0, o.jsx)(d.Z, {
                                                    label: "Y offset",
                                                    children: (0, o.jsx)(f.Z, {
                                                        ...ee(n.getProperty("box-shadow-v"))
                                                    })
                                                })]
                                        }), (0, o.jsxs)(x.Z, {
                                            children: [(0, o.jsx)(d.Z, {
                                                    label: "Blur",
                                                    children: (0, o.jsx)(f.Z, {
                                                        ...ee(n.getProperty("box-shadow-blur"))
                                                    })
                                                }), (0, o.jsx)(d.Z, {
                                                    label: "Spread",
                                                    children: (0, o.jsx)(f.Z, {
                                                        ...ee(n.getProperty("box-shadow-spread"))
                                                    })
                                                })]
                                        }), (0, o.jsx)(x.Z, {
                                            children: (0, o.jsx)(d.Z, {
                                                label: "Color",
                                                children: (0, o.jsx)(h.Z, {
                                                    ...et(n.getProperty("box-shadow-color"))
                                                })
                                            })
                                        })]
                                })
                            }), (0, o.jsx)(x.Z, {
                                property: r,
                                separator: !0,
                                children: (0, o.jsxs)(v.Z, {
                                    ...Q(r, S),
                                    renderItem: e => {
                                        let {
                                            textShadowH: t,
                                            textShadowV: n,
                                            textShadowBlur: r,
                                            textShadowColor: i
                                        } = e.getValues({
                                            camelCase: !0
                                        }),
                                        d = j(t),
                                        u = j(n),
                                        p = j(r),
                                        g = "".concat(d, "px ").concat(u, "px ").concat(p, "px ").concat(i).trim();
                                        return (0, o.jsxs)(s.Z, {
                                            space: "s",
                                            items: "center",
                                            children: [(0, o.jsxs)(a.Z, {
                                                    grow: !0,
                                                    children: [t, " ", n, " ", r]
                                                }), (0, o.jsx)(a.Z, {
                                                    children: (0, o.jsx)("div", {
                                                        className: (0, l.Z)("w-4 h-4 gjs-bg-white", c.br.b, c.br.rnd),
                                                        style: {
                                                            boxShadow: g
                                                        }
                                                    })
                                                })]
                                        })
                                    },
                                    children: [(0, o.jsxs)(x.Z, {
                                            children: [(0, o.jsx)(d.Z, {
                                                    label: "X offset",
                                                    children: (0, o.jsx)(f.Z, {
                                                        ...ee(r.getProperty("text-shadow-h"))
                                                    })
                                                }), (0, o.jsx)(d.Z, {
                                                    label: "Y offset",
                                                    children: (0, o.jsx)(f.Z, {
                                                        ...ee(r.getProperty("text-shadow-v"))
                                                    })
                                                })]
                                        }), (0, o.jsx)(x.Z, {
                                            children: (0, o.jsx)(d.Z, {
                                                label: "Blur",
                                                children: (0, o.jsx)(f.Z, {
                                                    ...ee(r.getProperty("text-shadow-blur"))
                                                })
                                            })
                                        }), (0, o.jsx)(x.Z, {
                                            children: (0, o.jsx)(d.Z, {
                                                label: "Color",
                                                children: (0, o.jsx)(h.Z, {
                                                    ...et(r.getProperty("text-shadow-color"))
                                                })
                                            })
                                        })]
                                })
                            }), (0, o.jsx)(x.Z, {
                                property: i,
                                separator: !0,
                                children: (0, o.jsx)(v.Z, {
                                    ...Q(i, {
                                        "filter-name": "blur",
                                        "filter-value": "3px"
                                    }),
                                    children: (0, o.jsxs)(x.Z, {
                                        children: [(0, o.jsx)(d.Z, {
                                                label: "Type",
                                                children: (0, o.jsx)(y.ZP, {
                                                    ...Z(i, "filter")
                                                })
                                            }), (0, o.jsx)(d.Z, {
                                                label: "Value",
                                                children: (0, o.jsx)(f.Z, {
                                                    ...w(i)
                                                })
                                            })]
                                    })
                                })
                            }), (0, o.jsx)(x.Z, {
                                property: u,
                                separator: !0,
                                children: (0, o.jsx)(v.Z, {
                                    ...Q(u, {
                                        "backdrop-filter-name": "blur",
                                        "backdrop-filter-value": "3px"
                                    }),
                                    children: (0, o.jsxs)(x.Z, {
                                        children: [(0, o.jsx)(d.Z, {
                                                label: "Type",
                                                children: (0, o.jsx)(y.ZP, {
                                                    ...$(u.getProperty("backdrop-filter-name"))
                                                })
                                            }), (0, o.jsx)(d.Z, {
                                                label: "Value",
                                                children: (0, o.jsx)(f.Z, {
                                                    ...w(u, "backdrop-filter")
                                                })
                                            })]
                                    })
                                })
                            }), (0, o.jsx)(x.Z, {
                                property: g,
                                separator: !0,
                                children: (0, o.jsxs)(v.Z, {
                                    ...Q(g),
                                    children: [(0, o.jsx)(x.Z, {
                                            children: (0, o.jsx)(d.Z, {
                                                label: "Type",
                                                children: (0, o.jsx)(y.ZP, {
                                                    ...$(g.getProperty("transition-property"))
                                                })
                                            })
                                        }), (0, o.jsx)(x.Z, {
                                            children: (0, o.jsx)(d.Z, {
                                                label: "Easing",
                                                children: (0, o.jsx)(y.ZP, {
                                                    ...$(g.getProperty("transition-timing-function"))
                                                })
                                            })
                                        }), (0, o.jsxs)(x.Z, {
                                            children: [(0, o.jsx)(d.Z, {
                                                    label: "Duration",
                                                    children: (0, o.jsx)(f.Z, {
                                                        ...ee(g.getProperty("transition-duration"))
                                                    })
                                                }), (0, o.jsx)(d.Z, {
                                                    label: "Delay",
                                                    children: (0, o.jsx)(f.Z, {
                                                        ...ee(g.getProperty("transition-delay"))
                                                    })
                                                })]
                                        })]
                                })
                            }), (0, o.jsx)(x.Z, {
                                property: b,
                                separator: !0,
                                children: (0, o.jsx)(v.Z, {
                                    ...Q(b),
                                    children: (0, o.jsxs)(x.Z, {
                                        children: [(0, o.jsx)(d.Z, {
                                                label: "Type",
                                                children: (0, o.jsx)(y.ZP, {
                                                    ...Z(b, "transform")
                                                })
                                            }), (0, o.jsx)(d.Z, {
                                                label: "Value",
                                                children: (0, o.jsx)(f.Z, {
                                                    ...w(b, "transform")
                                                })
                                            })]
                                    })
                                })
                            }), (0, o.jsx)(p.Z, {
                                property: t.getProperty("transform-origin")
                            }), (0, o.jsx)(p.Z, {
                                property: t.getProperty("overflow")
                            }), (0, o.jsx)(x.Z, {
                                property: k,
                                children: (0, o.jsx)(d.Z, {
                                    property: k,
                                    children: (0, o.jsx)(m.Z, {
                                        ...$(k)
                                    })
                                })
                            }), (0, o.jsx)(x.Z, {
                                property: [P, T, C],
                                separatorTop: !0,
                                children: "Children transform"
                            }), (0, o.jsxs)(x.Z, {
                                property: [P, T],
                                children: [(0, o.jsx)(d.Z, {
                                        property: P,
                                        children: (0, o.jsx)(f.Z, {
                                            ...ee(P)
                                        })
                                    }), (0, o.jsx)(d.Z, {
                                        property: T,
                                        children: (0, o.jsx)(m.Z, {
                                            ...$(T)
                                        })
                                    })]
                            }), (0, o.jsx)(p.Z, {
                                property: C
                            })]
                    })
                }
                var k = n(60474),
                P = n(7653),
                T = n(6217),
                L = n(69460),
                H = n(30353);
                let N = c.qv.s,
                V = "M6 6v12h13V6H6zm0 13v5H5V0h1v5h13c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H6zm6-14h1v14h-1V5z",
                z = "M6 6v12h13V6H6zm0-1h13c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H6a1 1 0 01-1-1V6c0-.6.4-1 1-1zm6-5h1v24h-1V0z",
                M = "M6 6v12h13V6H6zm13-1V0h1v24h-1v-5H6a1 1 0 01-1-1V6c0-.6.4-1 1-1h13zm-7 0h1v14h-1V5z",
                A = "M2 6v12h6V6H2zm0 13v5H1V0h1v5h6c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H2zM16 6v12h6V6h-6zm6-1V0h1v24h-1v-5h-6a1 1 0 01-1-1V6c0-.6.4-1 1-1h6z",
                B = "M11 0h1v24h-1V0zM1 6h6v12H1V6zm0-1h6c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H1a1 1 0 01-1-1V6c0-.6.4-1 1-1zm15 1h6v12h-6V6zm0-1h6c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1h-6a1 1 0 01-1-1V6c0-.6.4-1 1-1z",
                E = "M15 19H9V6h6v13zM8 6v13H0v1h24v-1h-8V6h8V5H0v1h8z";
                function O(e) {
                    let {
                        sector: t
                    } = e, {
                        editor: n
                    } = (0, L.yT)(),
                    r = (0, T.X)(),
                    [l, i] = (0, P.useState)({}),
                    [s, a] = (0, P.useState)({}),
                    u = t.getProperty("display"),
                    g = t.getProperty("flex-direction"),
                    h = t.getProperty("justify-content"),
                    b = t.getProperty("align-items"),
                    v = t.getProperty("flex-wrap"),
                    j = t.getProperty("align-content"),
                    w = t.getProperty("align-self"),
                    Z = t.getProperty("order"),
                    S = e => r.t("styleManager.layout.".concat(e)),
                    C = u.getValue(),
                    k = (s.display || "").indexOf("flex") >= 0,
                    O = g.getValue(),
                    D = O.indexOf("reverse") >= 0,
                    R = !(["column", "column-reverse"].indexOf(O) >= 0),
                    I = [{
                            id: "row",
                            label: (0, o.jsx)(H.ZP, {
                                icon: H.do.arrowRight,
                                size: c.qv.sx
                            }),
                            title: S("direction.title.row")
                        }, {
                            id: "row-reverse",
                            label: (0, o.jsx)(H.ZP, {
                                icon: H.do.arrowRight,
                                size: N,
                                horizontal: !0
                            }),
                            title: S("direction.title.row-reverse")
                        }, {
                            id: "column",
                            label: (0, o.jsx)(H.ZP, {
                                icon: H.do.arrowDown,
                                size: c.qv.sx
                            }),
                            title: S("direction.title.column")
                        }, {
                            id: "column-reverse",
                            label: (0, o.jsx)(H.ZP, {
                                icon: H.do.arrowDown,
                                size: N,
                                vertical: !0
                            }),
                            title: S("direction.title.column-reverse")
                        }
                    ],
                    F = [{
                            id: "flex-start",
                            title: "Start",
                            label: (0, o.jsx)(H.ZP, {
                                icon: V,
                                size: N,
                                rotate: R ? 0 : 90,
                                horizontal: R && D,
                                vertical: !R && D
                            })
                        }, {
                            id: "center",
                            title: "Center",
                            label: (0, o.jsx)(H.ZP, {
                                icon: z,
                                size: N,
                                rotate: R ? 0 : 90
                            })
                        }, {
                            id: "flex-end",
                            title: "End",
                            label: (0, o.jsx)(H.ZP, {
                                icon: M,
                                size: N,
                                rotate: R ? 0 : 90,
                                horizontal: R && D,
                                vertical: !R && D
                            })
                        }, {
                            id: "space-between",
                            title: "Space between",
                            label: (0, o.jsx)(H.ZP, {
                                icon: A,
                                size: N,
                                rotate: R ? 0 : 90
                            })
                        }, {
                            id: "space-around",
                            title: "Space around",
                            label: (0, o.jsx)(H.ZP, {
                                icon: B,
                                size: N,
                                rotate: R ? 0 : 90
                            })
                        }, {
                            id: "space-evenly",
                            title: "Space evenly",
                            label: (0, o.jsx)(H.ZP, {
                                icon: "M3 6v12h6V6H3zm0-1h6c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H3a1 1 0 01-1-1V6c0-.6.4-1 1-1zM0 0h1v24H0V0zm14 6v12h6V6h-6zm0-1h6c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1h-6a1 1 0 01-1-1V6c0-.6.4-1 1-1zm8-5h1v24h-1V0zM11 0h1v24h-1V0z",
                                size: N,
                                rotate: R ? 0 : 90
                            })
                        }
                    ],
                    _ = [{
                            id: "stretch",
                            title: "Stretch",
                            label: (0, o.jsx)(H.ZP, {
                                icon: E,
                                size: N,
                                rotate: R ? 0 : 90
                            })
                        }, {
                            id: "flex-start",
                            title: "Start",
                            label: (0, o.jsx)(H.ZP, {
                                icon: V,
                                size: N,
                                rotate: R ? 90 : 0
                            })
                        }, {
                            id: "center",
                            title: "Center",
                            label: (0, o.jsx)(H.ZP, {
                                icon: z,
                                size: N,
                                rotate: R ? 90 : 0
                            })
                        }, {
                            id: "flex-end",
                            title: "End",
                            label: (0, o.jsx)(H.ZP, {
                                icon: M,
                                size: N,
                                rotate: R ? 90 : 0
                            })
                        }
                    ],
                    U = [{
                            id: "flex-start",
                            title: "Start",
                            label: (0, o.jsx)(H.ZP, {
                                icon: V,
                                size: N,
                                rotate: R ? 90 : 0,
                                horizontal: R && D,
                                vertical: !R && D
                            })
                        }, {
                            id: "center",
                            title: "Center",
                            label: (0, o.jsx)(H.ZP, {
                                icon: z,
                                size: N,
                                rotate: R ? 90 : 0
                            })
                        }, {
                            id: "flex-end",
                            title: "End",
                            label: (0, o.jsx)(H.ZP, {
                                icon: M,
                                size: N,
                                rotate: R ? 90 : 0,
                                horizontal: R && D,
                                vertical: !R && D
                            })
                        }, {
                            id: "space-between",
                            title: "Space between",
                            label: (0, o.jsx)(H.ZP, {
                                icon: A,
                                size: N,
                                rotate: R ? 90 : 0
                            })
                        }, {
                            id: "space-around",
                            title: "Space around",
                            label: (0, o.jsx)(H.ZP, {
                                icon: B,
                                size: N,
                                rotate: R ? 90 : 0
                            })
                        }, {
                            id: "stretch",
                            title: "Stretch",
                            label: (0, o.jsx)(H.ZP, {
                                icon: E,
                                size: N,
                                rotate: R ? 0 : 90
                            })
                        }
                    ],
                    X = [{
                            id: "auto",
                            title: "Auto",
                            label: (0, o.jsx)(H.ZP, {
                                icon: H.do.close,
                                size: N
                            })
                        }, {
                            id: "flex-start",
                            title: "Start",
                            label: (0, o.jsx)(H.ZP, {
                                icon: V,
                                size: N,
                                rotate: 90
                            })
                        }, {
                            id: "center",
                            title: "Center",
                            label: (0, o.jsx)(H.ZP, {
                                icon: z,
                                size: N,
                                rotate: 90
                            })
                        }, {
                            id: "flex-end",
                            title: "End",
                            label: (0, o.jsx)(H.ZP, {
                                icon: M,
                                size: N,
                                rotate: 90
                            })
                        }, {
                            id: "stretch",
                            title: "Stretch",
                            label: (0, o.jsx)(H.ZP, {
                                icon: E,
                                size: N,
                                rotate: 0
                            })
                        }
                    ],
                    q = [{
                            id: "0 0 auto",
                            label: (0, o.jsx)(H.ZP, {
                                icon: H.do.close,
                                size: N
                            }),
                            title: "Auto"
                        }, {
                            id: "1 1 0%",
                            label: (0, o.jsx)(H.ZP, {
                                icon: H.do.unfoldMoreHorizontal,
                                size: N,
                                rotate: 90
                            }),
                            title: "Fill container"
                        }, {
                            id: "0 1 auto",
                            label: (0, o.jsx)(H.ZP, {
                                icon: H.do.unfoldLessHorizontal,
                                size: N,
                                rotate: 90
                            }),
                            title: "Hug contents"
                        }
                    ];
                    return (0, P.useEffect)(() => {
                        if (!n)
                            return () => {};
                        let {
                            Styles: e
                        } = n,
                        t = () => {
                            let e = n.getSelected(),
                            t = {},
                            o = {};
                            if (e) {
                                let n = e.getEl();
                                if (n) {
                                    t = window.getComputedStyle(n);
                                    let e = n.parentElement;
                                    e && (o = window.getComputedStyle(e))
                                }
                            }
                            i(t),
                            a(o)
                        },
                        o = e.events.target;
                        return n.on(o, t),
                        t(),
                        () => n.off(o, t)
                    }, [n]),
                    (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(x.Z, {
                                children: (0, o.jsx)(d.Z, {
                                    property: u,
                                    tooltip: S("display.tips.".concat(C)),
                                    row: !0,
                                    children: (0, o.jsx)(y.ZP, {
                                        ...$(u)
                                    })
                                })
                            }), "flex" === C && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(x.Z, {
                                        children: (0, o.jsx)(d.Z, {
                                            property: g,
                                            children: (0, o.jsx)(m.Z, {
                                                ...$(g),
                                                options: I
                                            })
                                        })
                                    }), (0, o.jsx)(x.Z, {
                                        children: (0, o.jsx)(d.Z, {
                                            property: h,
                                            children: (0, o.jsx)(m.Z, {
                                                ...$(h),
                                                options: F
                                            })
                                        })
                                    }), (0, o.jsx)(x.Z, {
                                        children: (0, o.jsx)(d.Z, {
                                            property: b,
                                            children: (0, o.jsx)(m.Z, {
                                                ...$(b),
                                                options: _
                                            })
                                        })
                                    }), (0, o.jsx)(x.Z, {
                                        children: (0, o.jsx)(p.Z, {
                                            property: t.getProperty("gap")
                                        })
                                    }), (0, o.jsx)(x.Z, {
                                        children: (0, o.jsx)(d.Z, {
                                            property: v,
                                            row: !0,
                                            children: (0, o.jsx)(y.ZP, {
                                                ...$(v)
                                            })
                                        })
                                    }), "nowrap" !== v.getValue() && (0, o.jsx)(x.Z, {
                                        children: (0, o.jsx)(d.Z, {
                                            property: j,
                                            children: (0, o.jsx)(m.Z, {
                                                ...$(j),
                                                options: U
                                            })
                                        })
                                    })]
                            }), k && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(x.Z, {
                                        separatorTop: !0,
                                        children: S("flexChild")
                                    }), (0, o.jsx)(x.Z, {
                                        children: (0, o.jsx)(p.Z, {
                                            property: t.getProperty("flex"),
                                            options: q
                                        })
                                    }), (0, o.jsx)(x.Z, {
                                        children: (0, o.jsx)(d.Z, {
                                            property: w,
                                            children: (0, o.jsx)(m.Z, {
                                                ...$(w),
                                                options: X
                                            })
                                        })
                                    }), (0, o.jsx)(x.Z, {
                                        children: (0, o.jsx)(d.Z, {
                                            property: Z,
                                            row: !0,
                                            children: (0, o.jsx)(f.Z, {
                                                ...ee(Z)
                                            })
                                        })
                                    })]
                            })]
                    })
                }
                var D = n(47988);
                let R = ["topLeft", "topRight", "bottomLeft", "bottomRight", "left", "right", "bottom", "top", "full"];
                function I(e) {
                    var t;
                    let {
                        sector: n
                    } = e,
                    r = (0, T.X)(),
                    i = n.getProperty("position"),
                    c = i.getValue(),
                    u = n.getProperty("top"),
                    p = n.getProperty("right"),
                    g = n.getProperty("bottom"),
                    m = n.getProperty("left"),
                    h = e => r.t("styleManager.position.".concat(e)),
                    b = R.map(e => ({
                                id: e,
                                label: h("presets.options.".concat(e))
                            })),
                    v = ["absolute", "fixed"].includes(c);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)(x.Z, {
                                children: [(0, o.jsx)(d.Z, {
                                        property: i,
                                        tooltip: h("tips.".concat(null === (t = i.getOption()) || void 0 === t ? void 0 : t.id)),
                                        row: !0,
                                        children: (0, o.jsx)(y.ZP, {
                                            ...$(i)
                                        })
                                    }), v && (0, o.jsx)(a.Z, {
                                        children: (0, o.jsx)(D.Z, {
                                            title: h("presets.title"),
                                            children: (0, o.jsx)(y.ZP, {
                                                options: b,
                                                onChange: e => {
                                                    let t = "auto",
                                                    n = "auto",
                                                    o = "auto",
                                                    r = "auto";
                                                    switch (e) {
                                                    case "topLeft":
                                                        t = "0%",
                                                        r = "0%";
                                                        break;
                                                    case "topRight":
                                                        t = "0%",
                                                        n = "0%";
                                                        break;
                                                    case "bottomLeft":
                                                        o = "0%",
                                                        r = "0%";
                                                        break;
                                                    case "bottomRight":
                                                        o = "0%",
                                                        n = "0%";
                                                        break;
                                                    case "left":
                                                        t = "0%",
                                                        o = "0%",
                                                        r = "0%";
                                                        break;
                                                    case "right":
                                                        t = "0%",
                                                        o = "0%",
                                                        n = "0%";
                                                        break;
                                                    case "bottom":
                                                        r = "0%",
                                                        o = "0%",
                                                        n = "0%";
                                                        break;
                                                    case "top":
                                                        r = "0%",
                                                        t = "0%",
                                                        n = "0%";
                                                        break;
                                                    case "full":
                                                        r = "0%",
                                                        t = "0%",
                                                        n = "0%",
                                                        o = "0%"
                                                    }
                                                    u.upValue(t),
                                                    p.upValue(n),
                                                    g.upValue(o),
                                                    m.upValue(r)
                                                },
                                                emptyState: "P",
                                                size: "s",
                                                caret: "",
                                                value: !0
                                            })
                                        })
                                    })]
                            }), "static" !== c && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsxs)(x.Z, {
                                        col: !0,
                                        children: [(0, o.jsx)(s.Z, {
                                                className: (0, l.Z)("gs-utl-w-1/2 gjs-m-auto"),
                                                children: (0, o.jsx)(d.Z, {
                                                    property: u,
                                                    children: (0, o.jsx)(f.Z, {
                                                        ...ee(u)
                                                    })
                                                })
                                            }), (0, o.jsxs)(s.Z, {
                                                space: "s",
                                                children: [(0, o.jsx)(a.Z, {
                                                        grow: !0,
                                                        children: (0, o.jsx)(d.Z, {
                                                            property: m,
                                                            children: (0, o.jsx)(f.Z, {
                                                                ...ee(m)
                                                            })
                                                        })
                                                    }), (0, o.jsx)(a.Z, {
                                                        grow: !0,
                                                        children: (0, o.jsx)(d.Z, {
                                                            property: p,
                                                            children: (0, o.jsx)(f.Z, {
                                                                ...ee(p)
                                                            })
                                                        })
                                                    })]
                                            }), (0, o.jsx)(s.Z, {
                                                className: (0, l.Z)("gs-utl-w-1/2 gjs-m-auto"),
                                                children: (0, o.jsx)(d.Z, {
                                                    property: g,
                                                    children: (0, o.jsx)(f.Z, {
                                                        ...ee(g)
                                                    })
                                                })
                                            })]
                                    }), (0, o.jsx)(x.Z, {
                                        children: (0, o.jsx)(d.Z, {
                                            property: n.getProperty("z-index"),
                                            children: (0, o.jsx)(f.Z, {
                                                ...ee(n.getProperty("z-index"))
                                            })
                                        })
                                    })]
                            })]
                    })
                }
                function F(e) {
                    let {
                        sector: t
                    } = e,
                    n = t.getProperty("width"),
                    r = t.getProperty("min-width"),
                    l = t.getProperty("max-width"),
                    i = t.getProperty("height"),
                    s = t.getProperty("min-height"),
                    a = t.getProperty("max-height");
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)(x.Z, {
                                property: [n, i],
                                children: [(0, o.jsx)(d.Z, {
                                        property: n,
                                        children: (0, o.jsx)(f.Z, {
                                            ...ee(n)
                                        })
                                    }), (0, o.jsx)(d.Z, {
                                        property: i,
                                        children: (0, o.jsx)(f.Z, {
                                            ...ee(i)
                                        })
                                    })]
                            }), (0, o.jsxs)(x.Z, {
                                property: [r, s],
                                children: [(0, o.jsx)(d.Z, {
                                        property: r,
                                        children: (0, o.jsx)(f.Z, {
                                            ...ee(r)
                                        })
                                    }), (0, o.jsx)(d.Z, {
                                        property: s,
                                        children: (0, o.jsx)(f.Z, {
                                            ...ee(s)
                                        })
                                    })]
                            }), (0, o.jsxs)(x.Z, {
                                property: [l, a],
                                children: [(0, o.jsx)(d.Z, {
                                        property: l,
                                        children: (0, o.jsx)(f.Z, {
                                            ...ee(l)
                                        })
                                    }), (0, o.jsx)(d.Z, {
                                        property: a,
                                        children: (0, o.jsx)(f.Z, {
                                            ...ee(a)
                                        })
                                    })]
                            })]
                    })
                }
                function _(e) {
                    let {
                        sector: t
                    } = e;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(p.Z, {
                                property: t.getProperty("padding")
                            }), (0, o.jsx)(p.Z, {
                                property: t.getProperty("margin")
                            })]
                    })
                }
                function U(e) {
                    let {
                        sector: t
                    } = e,
                    n = t.getProperty("font-family"),
                    r = t.getProperty("color"),
                    l = t.getProperty("font-size"),
                    i = t.getProperty("font-weight"),
                    s = t.getProperty("line-height"),
                    a = t.getProperty("letter-spacing"),
                    c = t.getProperty("text-align"),
                    u = t.getProperty("vertical-align"),
                    p = t.getProperty("text-decoration"),
                    g = t.getProperty("text-transform"),
                    m = t.getProperty("direction"),
                    b = t.getProperty("white-space");
                    return (0, o.jsxs)(o.Fragment, {
                        children: [!!n && (0, o.jsx)(x.Z, {
                                property: n,
                                children: (0, o.jsx)(d.Z, {
                                    property: n,
                                    children: (0, o.jsx)(y.ZP, {
                                        ...$(n)
                                    })
                                })
                            }), !!r && (0, o.jsx)(x.Z, {
                                property: r,
                                children: (0, o.jsx)(d.Z, {
                                    property: r,
                                    children: (0, o.jsx)(h.Z, {
                                        ...et(r)
                                    })
                                })
                            }), (0, o.jsxs)(x.Z, {
                                property: [l, i],
                                children: [!!l && (0, o.jsx)(d.Z, {
                                        property: l,
                                        children: (0, o.jsx)(f.Z, {
                                            ...ee(l)
                                        })
                                    }), !!i && (0, o.jsx)(d.Z, {
                                        property: i,
                                        children: (0, o.jsx)(y.ZP, {
                                            ...$(i)
                                        })
                                    })]
                            }), (0, o.jsxs)(x.Z, {
                                property: [s, a],
                                children: [!!s && (0, o.jsx)(d.Z, {
                                        property: s,
                                        children: (0, o.jsx)(f.Z, {
                                            ...ee(s)
                                        })
                                    }), !!a && (0, o.jsx)(d.Z, {
                                        property: a,
                                        children: (0, o.jsx)(f.Z, {
                                            ...ee(a)
                                        })
                                    })]
                            }), (0, o.jsxs)(x.Z, {
                                property: [c, u],
                                children: [!!c && (0, o.jsx)(d.Z, {
                                        property: c,
                                        children: (0, o.jsx)(y.ZP, {
                                            ...$(c)
                                        })
                                    }), !!u && (0, o.jsx)(d.Z, {
                                        property: u,
                                        children: (0, o.jsx)(y.ZP, {
                                            ...$(u)
                                        })
                                    })]
                            }), (0, o.jsxs)(x.Z, {
                                property: [g, m],
                                children: [!!g && (0, o.jsx)(d.Z, {
                                        property: g,
                                        children: (0, o.jsx)(y.ZP, {
                                            ...$(g)
                                        })
                                    }), !!m && (0, o.jsx)(d.Z, {
                                        property: m,
                                        children: (0, o.jsx)(y.ZP, {
                                            ...$(m)
                                        })
                                    })]
                            }), (0, o.jsxs)(x.Z, {
                                property: [b, p],
                                children: [!!b && (0, o.jsx)(d.Z, {
                                        property: b,
                                        children: (0, o.jsx)(y.ZP, {
                                            ...$(b)
                                        })
                                    }), !!p && (0, o.jsx)(d.Z, {
                                        property: p,
                                        children: (0, o.jsx)(y.ZP, {
                                            ...$(p)
                                        })
                                    })]
                            })]
                    })
                }
                let X = "gs-style-manager",
                q = "".concat(X, "-sector"),
                W = "".concat(q, "-header"),
                Y = "".concat(q, "-content"),
                G = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    return (0, l.Z)(W, c.cl.bgH2, c.vk.xyS, c.cl.br, t && c.br.bt, (e || n) && c.br.bb)
                },
                K = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return e.getOptions().map(n => ({
                            id: e.getOptionId(n),
                            label: e.getOptionLabel(e.getOptionId(n), t),
                            title: n.title
                        }))
                },
                J = (e, t) => t.map(t => ({
                        ...t,
                        title: e.getOptionLabel(e.getOptionId(t))
                    })),
                $ = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        size: "s",
                        options: K(e, t),
                        value: e.getValue(),
                        onChange: t => e.upValue(t)
                    }
                },
                Q = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        title: e.getLabel(),
                        titleAdd: "Add new ".concat(e.getLabel()),
                        items: e.getLayers(),
                        selected: e.getSelectedLayer(),
                        renderItem: t => e.getLayerLabel(t),
                        add: () => e.addLayer(t, {
                            at: 0
                        }),
                        select: t => e.selectLayer(t),
                        remove: t => e.removeLayer(t),
                        move: function (t) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return e.moveLayer(t, n)
                        },
                        label: (0, o.jsx)(d.Z, {
                            property: e
                        })
                    }
                },
                ee = e => ({
                    size: "s",
                    value: e.getValue({
                        noDefault: !0
                    }),
                    valueUnit: e.getUnit(),
                    units: e.getUnits(),
                    placeholder: e.getDefaultValue(),
                    onChangeUnit: t => e.upUnit(t),
                    onChange: (t, n) => e.upValue(t, {
                        partial: n
                    })
                }),
                et = e => ({
                    size: "s",
                    value: e.getValue({
                        noDefault: !0
                    }),
                    placeholder: e.getDefaultValue(),
                    onChange: (t, n) => e.upValue(t, {
                        partial: n
                    })
                }),
                en = e => ({
                    ...et(e),
                    onOpen() {
                        let t = e.em.Assets;
                        t.open({
                            select(n) {
                                e.upValue(n.getSrc()),
                                t.close()
                            }
                        })
                    }
                }),
                eo = e => {
                    let t = e.getId(),
                    n = k.ZP;
                    switch (t) {
                    case "gs-layout":
                        n = O;
                        break;
                    case "gs-size":
                        n = F;
                        break;
                    case "gs-space":
                        n = _;
                        break;
                    case "gs-position":
                        n = I;
                        break;
                    case "gs-borders":
                        n = g;
                        break;
                    case "gs-effects":
                        n = C;
                        break;
                    case "gs-typography":
                        n = U;
                        break;
                    case "gs-background":
                        n = u.ZP
                    }
                    return (0, o.jsx)(n, {
                        sector: e
                    })
                };
                function er(e) {
                    let {
                        className: t,
                        sectors: n
                    } = e, {
                        Styles: d
                    } = (0, r.jE)(),
                    u = d.getSelected(),
                    p = n.length ? n : d.getSectors({
                        visible: !0
                    });
                    return u ? (0, o.jsx)("div", {
                        className: (0, l.Z)(X, t, "select-none"),
                        children: p.map((e, t) => (0, o.jsx)(i.Z, {
                                classNameWrap: q,
                                sticky: !0,
                                handler: () => {
                                    let t = e.getProperties({
                                        withValue: !0
                                    }).length > 0,
                                    n = e.getProperties({
                                        withParentValue: !0
                                    }).length > 0;
                                    return (0, o.jsxs)(s.Z, {
                                        space: "xs",
                                        items: "center",
                                        children: [(0, o.jsx)(a.Z, {
                                                className: (0, l.Z)("gjs-mr-2"),
                                                children: e.getName()
                                            }), t && (0, o.jsx)(a.Z, {
                                                children: (0, o.jsx)("div", {
                                                    className: (0, l.Z)(c.fx.dot, c.cl.bgA2)
                                                })
                                            }), n && (0, o.jsx)(a.Z, {
                                                children: (0, o.jsx)("div", {
                                                    className: (0, l.Z)(c.fx.dot, c.cl.bgW)
                                                })
                                            })]
                                    })
                                },
                                className: e => G(e, t, t === p.length - 1),
                                children: (0, o.jsx)(s.Z, {
                                    className: (0, l.Z)(Y, "gs-utl-p-2 gs-utl-gap-2"),
                                    col: !0,
                                    children: eo(e)
                                })
                            }, e.getId()))
                    }) : null
                }
            },
            10383: function (e, t, n) {
                var o = n(27573),
                r = n(7653),
                l = n(38057);
                let i = new Map;
                t.Z = r.forwardRef(function (e, t) {
                    let {
                        svg: n,
                        iconSize: r,
                        ...s
                    } = e,
                    a = i.get(n);
                    return a || (a = (0, l.jz)(n, r), i.set(n, a)),
                    (0, o.jsx)("div", {
                        ...s,
                        ref: t,
                        dangerouslySetInnerHTML: {
                            __html: a
                        }
                    })
                })
            },
            63990: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return c
                    }
                });
                var o = n(27573),
                r = n(54555),
                l = n(37093),
                i = n(42807),
                s = n(82106),
                a = n(41062);
                function c(e) {
                    let {
                        value: t,
                        label: n,
                        border: c,
                        size: d = "m",
                        tip: u,
                        disabled: p,
                        onChange: g
                    } = e,
                    m = !!t,
                    h = (0, l.Z)("relative inline-flex items-center h-6 gjs-rounded-full w-11 transition-colors focus:gs-utl-outline-none", m ? a.cl.bgA : a.cl.bgH, a.v_.focus, c && "".concat(a.cl.br, " ").concat(a.br.b));
                    return (0, o.jsx)(r.r.Group, {
                        children: (0, o.jsxs)(i.Z, {
                            full: !0,
                            items: "center",
                            children: [!!n && (0, o.jsx)(r.r.Label, {
                                    className: (0, l.Z)("gs-utl-mr-4 gs-utl-flex-1 gs-utl-flex gs-utl-gap-2 gs-utl-items-center"),
                                    passive: !0,
                                    children: (0, o.jsx)(s.Z, {
                                        as: "span",
                                        size: d,
                                        tip: u,
                                        m: "",
                                        children: n
                                    })
                                }), (0, o.jsx)(r.r, {
                                    checked: m,
                                    onChange: g,
                                    className: h,
                                    disabled: p,
                                    children: (0, o.jsx)("span", {
                                        className: (0, l.Z)(a.cl.bg, "inline-block w-4 h-4 transform gjs-rounded-full transition-transform", m ? "translate-x-6" : "translate-x-1")
                                    })
                                })]
                        })
                    })
                }
            },
            45134: function (e, t, n) {
                n.d(t, {
                    Ix: function () {
                        return v
                    },
                    x7: function () {
                        return r
                    }
                });
                var o,
                r,
                l = n(27573),
                i = n(80069),
                s = n(51621),
                a = n(7653),
                c = n(37093),
                d = n(62077),
                u = n(19601),
                p = n(79473),
                g = n(42807),
                m = n(81529),
                h = n(30353),
                f = n(41062);
                (o = r || (r = {})).Info = "info",
                o.Error = "error",
                o.Success = "success",
                o.Warning = "warning";
                let b = {
                    info: f.cl.bgA,
                    error: "bg-red-500",
                    success: "bg-green-500",
                    warning: "bg-orange-400"
                },
                y = a.forwardRef(function (e, t) {
                    let n = {
                        info: h.do.informationVariant,
                        error: h.do.fire,
                        success: h.do.checkBold,
                        warning: h.do.alertRhombus
                    }, {
                        children: o,
                        className: r,
                        content: i,
                        id: s,
                        buttons: y = [],
                        variant: v = "info",
                        autoHideTimeout: x = 3e3
                    } = e,
                    j = (0, a.useRef)(null),
                    w = (0, a.useRef)(),
                    Z = n[v],
                    S = b[v];
                    (0, a.useImperativeHandle)(t, () => j.current, []);
                    let C = () => {
                        var t;
                        return null === (t = e.onDismiss) || void 0 === t ? void 0 : t.call(e, s)
                    },
                    k = () => {
                        x && (w.current = setTimeout(C, x))
                    },
                    P = () => w.current && clearTimeout(w.current);
                    (0, a.useEffect)(() => (k(), P), []);
                    let T = i || o;
                    return (0, l.jsx)(p.Z, {
                        className: (0, c.cx)(r, "overflow-hidden relative"),
                        ref: j,
                        onPointerEnter: P,
                        onPointerLeave: k,
                        children: (0, l.jsxs)(g.Z, {
                            space: "m",
                            items: "center",
                            className: (0, c.cx)(f.vk.y),
                            children: [(0, l.jsx)(m.Z, {
                                    className: (0, c.cx)(S, f.br.pill, "text-white gjs-p-1"),
                                    children: (0, l.jsx)(h.ZP, {
                                        icon: Z,
                                        size: f.qv.s
                                    })
                                }), (0, l.jsx)(m.Z, {
                                    grow: !0,
                                    className: (0, c.cx)("gjs-pr-3"),
                                    children: (0, l.jsxs)(g.Z, {
                                        col: !0,
                                        space: "xs",
                                        children: [(0, l.jsx)(m.Z, {
                                                className: (0, c.cx)("text-lg font-medium leading-6"),
                                                children: e.header
                                            }), T && (0, l.jsx)(m.Z, {
                                                className: (0, c.cx)(f.cl.txtLowEmphasis),
                                                children: T
                                            }), !!y.length && (0, l.jsx)(g.Z, {
                                                space: "m",
                                                justify: "end",
                                                children: y.map(e => {
                                                    let {
                                                        id: t,
                                                        ...n
                                                    } = e;
                                                    return (0, l.jsx)(d.default, {
                                                        ...n
                                                    }, t)
                                                })
                                            })]
                                    })
                                }), (0, l.jsx)(m.Z, {
                                    className: (0, c.cx)("absolute top-1 right-1"),
                                    children: (0, l.jsx)(u.Z, {
                                        onClick: C,
                                        border: !1,
                                        children: (0, l.jsx)(h.ZP, {
                                            icon: h.do.close,
                                            size: f.qv.s
                                        })
                                    })
                                })]
                        })
                    })
                }),
                v = (0, s.Pi)(a.forwardRef(function (e, t) {
                        let {
                            className: n,
                            toasts: o,
                            onDismiss: r,
                            ...s
                        } = e,
                        a = (0, i.u)({});
                        return (0, l.jsx)("div", {
                            className: (0, c.cx)(n, "w-80 gs-utl-z-30"),
                            ...s,
                            ref: a,
                            children: o.map(e => (0, l.jsx)(y, {
                                    ...e,
                                    className: (0, c.cx)("gjs-mb-2"),
                                    onDismiss: r
                                }, e.uuid || e.id))
                        })
                    }))
            },
            47988: function (e, t, n) {
                n.d(t, {
                    Z: function () {
                        return g
                    },
                    k: function () {
                        return p
                    }
                });
                var o = n(27573),
                r = n(20914),
                l = n(74769),
                i = n(7653),
                s = n(37093),
                a = n(77735),
                c = n(79473),
                d = n(41062);
                function u() {
                    let {
                        x: e,
                        y: t
                    } = {
                        x: window.pageXOffset || document.documentElement.scrollLeft,
                        y: window.pageYOffset || document.documentElement.scrollTop
                    };
                    return {
                        left: e,
                        right: e + window.innerWidth,
                        top: t,
                        bottom: t + window.innerHeight
                    }
                }
                function p(e, t) {
                    var n;
                    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = u(),
                    l = function (e) {
                        let t = e.getBoundingClientRect(),
                        n = u();
                        return {
                            left: t.left + n.left,
                            right: t.right + n.left,
                            top: t.top + n.top,
                            bottom: t.bottom + n.top,
                            witdh: t.width,
                            height: t.height
                        }
                    }
                    (e),
                    i = {
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    },
                    s = {
                        x: l.right + i.width >= r.right ? "left" : "right",
                        y: l.bottom + i.height >= r.bottom ? "top" : "bottom",
                        ...o.position || {}
                    };
                    return ("left" === s.x && l.right + i.width / 2 <= r.right || "right" === s.x && l.right - i.width / 2 >= 0) && ((null == o ? void 0 : null === (n = o.position) || void 0 === n ? void 0 : n.x) || (s.x = "center")),
                    function (e, t, n) {
                        var o,
                        r,
                        l,
                        i;
                        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        a = u(),
                        c = {
                            top: 0,
                            left: 0
                        },
                        d = null !== (l = null == s ? void 0 : null === (o = s.offset) || void 0 === o ? void 0 : o.x) && void 0 !== l ? l : 5,
                        p = null !== (i = null == s ? void 0 : null === (r = s.offset) || void 0 === r ? void 0 : r.y) && void 0 !== i ? i : 5,
                        g = t.right - t.left,
                        m = t.bottom - t.top;
                        if ("bottom" === e.y)
                            c.top = t.bottom + p;
                        else if ("top-bottom" === e.y)
                            c.top = t.top + p;
                        else if ("center" === e.y) {
                            let e = t.top + m / 2;
                            c.top = e - n.height / 2
                        } else
                            c.top = t.top - n.height - p;
                        if ("left" === e.x)
                            c.left = t.right - n.width - d;
                        else if ("left-edge" === e.x)
                            c.left = t.right - n.width - g - d;
                        else if ("center" === e.x) {
                            let e = t.left + g / 2;
                            c.left = e - n.width / 2
                        } else
                            c.left = t.right + d;
                        return c.left + n.width > a.right && (c.left = a.right - n.width - d),
                        c.left < a.left && (c.left = a.left),
                        c.top + n.height > a.bottom && (c.top = a.bottom - n.height - p),
                        c.top < a.top && (c.top = a.top),
                        c
                    }
                    (s, l, i, o)
                }
                function g(e) {
                    let {
                        className: t,
                        classNameWrp: n,
                        classNameContent: u,
                        children: g,
                        title: m,
                        onClick: h,
                        inline: f,
                        size: b
                    } = e,
                    y = (0, i.useRef)(null),
                    v = (0, i.useRef)(null),
                    [x, j] = (0, i.useState)(!1),
                    [w, Z] = (0, i.useState)({
                        top: 0,
                        left: 0
                    }),
                    S = (0, a.Xq)(b);
                    return (0, i.useEffect)(() => {
                        let e = y.current,
                        t = v.current;
                        if (e && t && x) {
                            let n = () => Z(p(e, t));
                            return setTimeout(n),
                            window.addEventListener("scroll", n, !0),
                            () => window.removeEventListener("scroll", n, !0)
                        }
                    }, [y, v, x]),
                    (0, o.jsxs)(r.J, {
                        className: (0, s.Z)("gjs-tooltip relative", n),
                        children: [(0, o.jsx)("span", {
                                ref: y,
                                className: (0, s.Z)(!f && "block", t, !h && "cursor-auto"),
                                onMouseEnter: () => m && j(!0),
                                onMouseLeave: () => j(!1),
                                children: (0, o.jsx)("div", {
                                    className: (0, s.Z)(f && "inline-block"),
                                    onClick: () => {
                                        j(!1),
                                        null == h || h()
                                    },
                                    children: g
                                })
                            }), (0, o.jsx)(l.u, {
                                as: i.Fragment,
                                show: x,
                                unmount: !1,
                                ...d.ts,
                                children: (0, o.jsx)(r.J.Panel, {
                                    className: (0, s.Z)(u, "fixed z-30 text-sm", !S && !u && "whitespace-nowrap", "s" === b && "w-60"),
                                    style: w,
                                    static: !0,
                                    children: (0, o.jsx)(c.Z, {
                                        ref: v,
                                        className: (0, s.Z)(d._j.txt),
                                        bg: d._j.bg,
                                        size: "s",
                                        border: !1,
                                        children: m
                                    })
                                })
                            })]
                    })
                }
            },
            52942: function (e, t, n) {
                var o = n(27573),
                r = n(7653),
                l = n(45531),
                i = n.n(l),
                s = n(51621),
                a = n(69460);
                let c = "gs-custom-layout",
                d = (0, s.Pi)((0, r.forwardRef)(function (e, t) {
                        let {
                            children: n,
                            className: r,
                            component: l,
                            noWrapper: s,
                            id: d,
                            ...u
                        } = e, {
                            editor: p
                        } = (0, a.yT)(),
                        g = l && p ? (0, o.jsx)(l, {
                            editor: p
                        }) : n,
                        m = i()(c, d && "".concat(c, "__").concat(d), r);
                        return s ? g : (0, o.jsx)("div", {
                            className: m,
                            ref: t,
                            ...u,
                            children: g
                        })
                    }));
                t.Z = d
            },
            30353: function (e, t, n) {
                n.d(t, {
                    E6: function () {
                        return m
                    },
                    do : function () {
                            return r
                        }
            });
            var o,
            r,
            l = n(27573),
            i = n(67393),
            s = n(45488),
            a = n.n(s),
            c = n(45531),
            d = n.n(c),
            u = n(51621),
            p = n(69460),
            g = n(10383);
            (o = r || (r = {})).alertRhombus = "alertRhombus",
            o.alignHorizontalCenter = "alignHorizontalCenter",
            o.alignHorizontalLeft = "alignHorizontalLeft",
            o.alignHorizontalRight = "alignHorizontalRight",
            o.applicationBracketsOutline = "applicationBracketsOutline",
            o.arrowDown = "arrowDown",
            o.arrowRight = "arrowRight",
            o.arrowULeftTop = "arrowULeftTop",
            o.arrowURightTop = "arrowURightTop",
            o.borderAllVariant = "borderAllVariant",
            o.borderRadius = "borderRadius",
            o.borderStyle = "borderStyle",
            o.cellphoneLink = "cellphoneLink",
            o.check = "check",
            o.checkBold = "checkBold",
            o.checkboxBlank = "checkboxBlank",
            o.chevronUp = "chevronUp",
            o.chevronDown = "chevronDown",
            o.chevronLeft = "chevronLeft",
            o.chevronRight = "chevronRight",
            o.close = "close",
            o.codeBraces = "codeBraces",
            o.cog = "cog",
            o.contentCopy = "contentCopy",
            o.contentSave = "contentSave",
            o.delete = "delete",
            o.dotsVertical = "dotsVertical",
            o.email = "email",
            o.emailOutline = "emailOutline",
            o.eye = "eye",
            o.eyedropperVariant = "eyedropperVariant",
            o.eyeOff = "eyeOff",
            o.eyeOffOutline = "eyeOffOutline",
            o.eyeOutline = "eyeOutline",
            o.fire = "fire",
            o.flare = "flare",
            o.floppy = "floppy",
            o.folder = "folder",
            o.fullscreen = "fullscreen",
            o.gradientVertical = "gradientVertical",
            o.helpCircle = "helpCircle",
            o.image = "image",
            o.information = "information",
            o.informationVariant = "informationVariant",
            o.layers = "layers",
            o.link = "link",
            o.lock = "lock",
            o.lockOpenVariant = "lockOpenVariant",
            o.menuDown = "menuDown",
            o.newspaperVariantOutline = "newspaperVariantOutline",
            o.paletteSwatch = "paletteSwatch",
            o.panVertical = "panVertical",
            o.phone = "phone",
            o.plus = "plus",
            o.plusBox = "plusBox",
            o.powerPlug = "powerPlug",
            o.refresh = "refresh",
            o.rhombusOutline = "rhombusOutline",
            o.tag = "tag",
            o.target = "target",
            o.targetVariant = "targetVariant",
            o.textBoxMultiple = "textBoxMultiple",
            o.trayArrowDown = "trayArrowDown",
            o.unfoldLessHorizontal = "unfoldLessHorizontal",
            o.unfoldMoreHorizontal = "unfoldMoreHorizontal",
            o.viewDayOutline = "viewDayOutline",
            o.viewGridPlus = "viewGridPlus",
            o.web = "web",
            o.xml = "xml";
            let m = {
                alertRhombus: i.ssT,
                alignHorizontalCenter: i.Zyb,
                alignHorizontalLeft: i.aZs,
                alignHorizontalRight: i.ALp,
                applicationBracketsOutline: i.RoN,
                arrowDown: i.dYk,
                arrowRight: i.aIO,
                arrowULeftTop: i.SQf,
                arrowURightTop: i.Te5,
                borderAllVariant: i.PyP,
                borderRadius: i.gHt,
                borderStyle: i.OLw,
                cellphoneLink: i.TW0,
                check: i.oL1,
                checkBold: i.YKm,
                checkboxBlank: i.Eqf,
                chevronUp: i.Waq,
                chevronDown: i.CW,
                chevronLeft: i.gAv,
                chevronRight: i.zrb,
                close: i.r5M,
                codeBraces: i.bl5,
                cog: i.Shd,
                contentCopy: i.a0Z,
                contentSave: i.Tls,
                delete : i.x9U,
                dotsVertical: i.SXi,
                email: i.XH8,
                emailOutline: i.VAU,
                eye: i.rgx,
                eyedropperVariant: i.ga2,
                eyeOff: i.DqW,
                eyeOffOutline: i.qS7,
                eyeOutline: i._VZ,
                fire: i.xRl,
                flare: i.XVW,
                floppy: i.ggO,
                folder: i.in3,
                fullscreen: i.h40,
                gradientVertical: i.G1g,
                helpCircle: i.Xc_,
                image: i.TaT,
                information: i.geb,
                informationVariant: i.gCD,
                layers: i.wCz,
                link: i.tuE,
                lock: i.d5D,
                lockOpenVariant: i._Ub,
                menuDown: i.iW9,
                newspaperVariantOutline: i.uIW,
                paletteSwatch: i.bln,
                panVertical: i.Zr0,
                phone: i.yIv,
                plus: i.qX5,
                plusBox: i.U1m,
                powerPlug: i.ImJ,
                refresh: i.jcD,
                rhombusOutline: i.vf2,
                tag: i.fr_,
                target: i.sB3,
                targetVariant: i.Vdu,
                textBoxMultiple: i.ALG,
                trayArrowDown: i.JEL,
                unfoldLessHorizontal: i.f1y,
                unfoldMoreHorizontal: i.VYU,
                viewDayOutline: i.a5$,
                viewGridPlus: i.ZAH,
                web: i.m5Y,
                xml: i.SMx
            },
            h = (0, u.Pi)(function (e) {
                var t;
                let {
                    className: n,
                    icon: o,
                    size: r,
                    rotate: i,
                    horizontal: s,
                    vertical: c
                } = e,
                u = null === (t = (0, p.RC)()) || void 0 === t ? void 0 : t.sdkCustomIcons,
                h = (null == u ? void 0 : u[o]) || (null == m ? void 0 : m[o]) || o,
                f = [s && "scaleX(-1)", c && "scaleY(-1)", i && "rotate(".concat(i, "deg)")].filter(e => !!e).join(" ");
                if (!h)
                    return null;
                let b = d()("gs-cmp-icon", n);
                return h.startsWith("<svg") || h.startsWith("<?xml") ? (0, l.jsx)(g.Z, {
                    className: b,
                    style: {
                        transform: f || void 0
                    },
                    svg: h,
                    iconSize: r
                }) : (0, l.jsx)(a(), {
                    className: b,
                    path: h,
                    size: r,
                    rotate: i,
                    horizontal: s,
                    vertical: c
                })
            });
            t.ZP = h
        },
        41062: function (e, t, n) {
            n.d(t, {
                L2: function () {
                    return c
                },
                LK: function () {
                    return x
                },
                O3: function () {
                    return d
                },
                P6: function () {
                    return v
                },
                Pl: function () {
                    return y
                },
                Sw: function () {
                    return p
                },
                _j: function () {
                    return g
                },
                br: function () {
                    return m
                },
                cl: function () {
                    return s
                },
                dl: function () {
                    return j
                },
                fx: function () {
                    return b
                },
                h_: function () {
                    return i
                },
                kD: function () {
                    return r
                },
                qv: function () {
                    return f
                },
                ts: function () {
                    return a
                },
                v_: function () {
                    return h
                },
                vk: function () {
                    return u
                }
            });
            var o,
            r,
            l = n(37093);
            let i = 150;
            (o = r || (r = {})).txt = "gs-theme-cl-txt",
            o.bg = "gs-theme-cl-bg",
            o.br = "gs-theme-cl-br",
            o.bgA = "gs-theme-cl-bgA",
            o.bgA2 = "gs-theme-cl-bgA2",
            o.hBgAct = "gs-theme-cl-hBgAct",
            o.hBgA2 = "gs-theme-cl-hBgA2",
            o.tA = "gs-theme-cl-tA",
            o.tAo = "gs-theme-cl-tAo",
            o.hTAo = "gs-theme-cl-hTAo",
            o.grouphTAo = "gs-theme-cl-grouphTAo",
            o.bA = "gs-theme-cl-bA",
            o.bg0 = "gs-theme-cl-bg0",
            o.bgH = "gs-theme-cl-bgH",
            o.hBgH = "gs-theme-cl-hBgH",
            o.bgH2 = "gs-theme-cl-bgH2",
            o.hBgH2 = "gs-theme-cl-hBgH2",
            o.sel = "gs-theme-cl-sel",
            o.selBr = "gs-theme-cl-selBr",
            o.cmp = "gs-theme-cl-cmp",
            o.cmpBgSoft = "gs-theme-cl-cmpBgSoft",
            o.cmpBgSoftX = "gs-theme-cl-cmpBgSoftX",
            o.cmpBr = "gs-theme-cl-cmpBr",
            o.cmpSymbol = "gs-theme-cl-cmpSymbol",
            o.cmpBgSymbolSoft = "gs-theme-cl-cmpBgSymbolSoft",
            o.cmpBgSymbolSoftX = "gs-theme-cl-cmpBgSymbolSoftX",
            o.cmpSymbolBr = "gs-theme-cl-cmpSymbolBr",
            o.cmpTxtActive = "gs-theme-cl-cmpTxtActive",
            o.focus = "gs-theme-ring-focus",
            o.inputText = "gs-theme-elStyles-inputText";
            let s = {
                bgTr: "gs-utl-bg-transparent",
                txt: "gs-theme-cl-txt gs-utl-text-gray-900 dark:gs-utl-text-gray-400",
                txtLowEmphasis: "gs-utl-text-neutral-500 dark:gs-utl-text-neutral-500",
                txtHighEmphasis: "gs-utl-text-black dark:gs-utl-text-gray-200",
                txtHighEmphasisH: "hover:gs-utl-text-black hover:dark:gs-utl-text-gray-200",
                tA: "gs-theme-cl-tA gs-utl-text-violet-400",
                tAo: "gs-theme-cl-tAo gs-utl-text-violet-800 dark:gs-utl-text-violet-400",
                hTAo: "gs-theme-cl-hTAo hover:gs-utl-text-violet-800 hover:dark:gs-utl-text-violet-400",
                grouphTAo: "gs-theme-cl-grouphTAo group-hover:gs-utl-text-violet-800 group-hover:dark:gs-utl-text-violet-400",
                bA: "gs-theme-cl-bA gs-utl-border-violet-400",
                bgA: "gs-theme-cl-bgA gs-utl-bg-violet-400 gs-utl-text-white dark:gs-utl-bg-violet-500",
                bgA2: "gs-theme-cl-bgA2 gs-utl-bg-violet-500 gs-utl-text-white",
                bgO: "gs-theme-cl-bg0 gs-utl-bg-violet-50 gs-utl-text-violet-900 dark:gs-utl-bg-zinc-800 dark:gs-utl-text-violet-400",
                bg: "gs-theme-cl-bg gs-utl-bg-white dark:gs-utl-bg-zinc-900",
                bgBlur: "gs-utl-bg-white/50 dark:gs-utl-bg-zinc-900/50 gs-utl-backdrop-blur-sm",
                bgH: "gs-theme-cl-bgH gs-utl-bg-gray-100 dark:gs-utl-bg-zinc-700",
                bgH75: "gs-utl-bg-gray-100/75 dark:gs-utl-bg-zinc-700/75",
                hBgH: "gs-theme-cl-hBgH hover:gs-utl-bg-gray-50 hover:dark:gs-utl-bg-zinc-800",
                bgH2: "gs-theme-cl-bgH2 gs-utl-bg-gray-25 dark:gs-utl-bg-zinc-800",
                hBgH2: "gs-theme-cl-hBgH2 hover:gs-utl-bg-gray-25 hover:dark:gs-utl-bg-zinc-800",
                hBgAct: "gs-theme-cl-hBgAct hover:gs-utl-bg-violet-800 hover:dark:gs-utl-bg-violet-400",
                hBgA2: "gs-theme-cl-hBgA2 hover:gs-utl-bg-violet-500 hover:dark:gs-utl-bg-violet-600",
                hBgDark: "hover:gs-utl-bg-black/10",
                sel: "gs-theme-cl-sel gs-utl-bg-pink-200 gs-utl-text-pink-900",
                selBr: "gs-theme-cl-selBr gs-utl-border-pink-900",
                cmp: "gs-theme-cl-cmp gs-utl-bg-blue-450 gs-utl-text-white",
                cmpSymbol: "gs-theme-cl-cmpSymbol gs-utl-bg-[#7b61ff] gs-utl-text-white",
                cmpBgSoft: "gs-theme-cl-cmpBgSoft gs-utl-bg-blue-100 dark:gs-utl-bg-sky-800",
                cmpBgSymbolSoft: "gs-theme-cl-cmpBgSymbolSoft gs-utl-bg-violet-200 dark:gs-utl-bg-violet-800",
                cmpBgSoftX: "gs-theme-cl-cmpBgSoftX gs-utl-bg-blue-50 dark:gs-utl-bg-gray-800",
                cmpBgSymbolSoftX: "gs-theme-cl-cmpBgSymbolSoftX gs-utl-bg-[#edebff] dark:gs-utl-bg-[#2d1b4b]",
                cmpTxtActive: "gs-theme-cl-cmpTxtActive dark:gs-utl-text-gray-300",
                cmpBr: "gs-theme-cl-cmpBr gs-utl-border-blue-450",
                cmpSymbolBr: "gs-theme-cl-cmpSymbolBr gs-utl-border-[#7b61ff]",
                cmpTargetBg: "gs-utl-bg-amber-500 gs-utl-text-white",
                cmpTargetBgOpac: "gs-utl-bg-amber-500/5",
                cmpTargetBr: "gs-utl-border-amber-500",
                tW: "gs-utl-text-amber-500",
                bgW: "gs-utl-bg-amber-500",
                bgRed: "gs-utl-bg-red-500",
                hBgRed: "hover:gs-utl-bg-red-600",
                hBgW: "hover:gs-utl-bg-amber-600",
                br: "gs-theme-cl-br gs-utl-border-gray-300 dark:gs-utl-border-zinc-700",
                brLight: "gs-utl-border-white/25"
            },
            a = {
                enter: "gs-utl-transition gs-utl-duration-100 gs-utl-ease-out",
                enterFrom: "gs-utl-scale-95 gs-utl-opacity-0",
                enterTo: "gs-utl-opacity-100",
                leave: "gs-utl-transition gs-utl-ease-in gs-utl-duration-100",
                leaveFrom: "gs-utl-scale-100 gs-utl-opacity-100",
                leaveTo: "gs-utl-scale-95 gs-utl-opacity-0"
            },
            c = {
                enter: "gs-utl-transition gs-utl-duration-100 gs-utl-ease-out",
                enterFrom: "gs-utl-opacity-0",
                enterTo: "gs-utl-opacity-100"
            },
            d = {
                ...c,
                leave: "gs-utl-transition gs-utl-ease-in gs-utl-duration-100",
                leaveFrom: "gs-utl-opacity-100",
                leaveTo: "gs-utl-opacity-0"
            },
            u = {
                xy: "gs-utl-px-4 gs-utl-py-2",
                xyS: "gs-utl-px-2 gs-utl-py-1",
                xyS2: "gs-utl-px-2 gs-utl-py-0.5",
                x: "gs-utl-px-4",
                xS: "gs-utl-px-2",
                y: "gs-utl-py-2",
                s: "gs-utl-p-2"
            },
            p = {
                bg: s.bg,
                bgH: s.bgH
            },
            g = {
                bg: "gs-utl-bg-zinc-700",
                txt: "gs-utl-text-white",
                block: "gs-utl-text-xs gs-utl-mt-1 gs-utl-bg-white/10 gs-utl-rounded gs-utl-px-2 gs-utl-py-1"
            },
            m = {
                rnd: "gs-utl-rounded",
                pill: "gs-utl-rounded-full",
                b: "gs-utl-border",
                bT: "gs-utl-border-transparent",
                bS: "gs-utl-border-2",
                bt: "gs-utl-border-t",
                bb: "gs-utl-border-b",
                br: "gs-utl-border-r",
                bl: "gs-utl-border-l",
                bA: "gs-theme-cl-bA gs-utl-border-violet-400 dark:gs-utl-border-violet-500"
            },
            h = {
                focus: "gs-theme-ring-focus focus:gs-utl-outline-none focus-visible:gs-utl-ring-2 gs-utl-ring-violet-300 gs-utl-ring-opacity-80",
                deepFocus: "focus:gs-utl-outline-none [&:has(:focus-visible)]:gs-utl-ring-2 gs-utl-ring-violet-300 gs-utl-ring-opacity-80"
            },
            f = {
                s3x: "13px",
                s2x: "14px",
                sx: "16px",
                s: "18px"
            },
            b = {
                click: "gs-utl-cursor-pointer gs-utl-transition-opacity gs-utl-opacity-75 hover:gs-utl-opacity-100",
                hover: "gs-utl-transition-opacity gs-utl-opacity-50 hover:gs-utl-opacity-100",
                hoverGroup: "group-hover:gs-utl-opacity-100 gs-utl-opacity-0 gs-utl-transition-opacity",
                dot: "gs-utl-w-[6px] gs-utl-h-[6px] gs-utl-rounded-full",
                scrollY: "gs-utl-overflow-y-auto gs-utl-overflow-x-hidden",
                txtEllips: "gs-utl-text-ellipsis gs-utl-overflow-hidden gs-utl-whitespace-nowrap",
                coverAbs: "gs-utl-absolute gs-utl-top-0 gs-utl-left-0 gs-utl-w-full gs-utl-h-full",
                disabled: "gs-utl-opacity-50 gs-utl-pointer-events-none",
                noFocusOut: "focus:gs-utl-outline-none",
                spin: "gs-utl-animate-spin-fast"
            },
            y = {
                link: (0, l.Z)(s.tAo),
                inputText: "gs-theme-elStyles-inputText focus:gs-utl-outline-none gs-utl-placeholder:text-neutral-400 placeholder:dark:gs-utl-text-neutral-500"
            },
            v = {
                itemList: function () {
                    let {
                        index: e = 0,
                        open: t = !1,
                        length: n = 0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, l.Z)(s.bgH2, u.xyS, s.br, e && m.bt, (t || e === n - 1) && m.bb)
                }
            },
            x = e => ({
                bg: e ? "#18181b" : "#f9f9f9",
                text: e ? "#9ca3af" : "#111827",
                link: e ? "#a78bfa" : "#5b21b6"
            }),
            j = e => {
                let t = {
                    isSymbol: !1,
                    bg: s.cmp,
                    bgSoft: "".concat(s.cmpBgSoft, " ").concat(s.cmpTxtActive),
                    bgSoftX: s.cmpBgSoftX,
                    border: s.cmpBr,
                    txt: ""
                };
                if (!(null == e ? void 0 : e.em))
                    return t;
                let {
                    isSymbol: n
                } = e.em.Components.getSymbolInfo(e);
                return n && (t = {
                        isSymbol: n,
                        bg: s.cmpSymbol,
                        bgSoft: "".concat(s.cmpBgSymbolSoft, " ").concat(s.cmpTxtActive),
                        bgSoftX: s.cmpBgSymbolSoftX,
                        border: s.cmpSymbolBr,
                        txt: ""
                    }),
                t
            }
        },
        85317: function (e, t, n) {
            n.d(t, {
                HT: function () {
                    return d
                },
                Lq: function () {
                    return s
                },
                mC: function () {
                    return p
                }
            });
            var o = n(49351),
            r = n(69460);
            let l = () => {
                let {
                    baseApiUrl: e
                } = (0, r.cY)();
                return "".concat(e, "/assets/sdk")
            },
            i = e => "".concat(l(), "/").concat(e),
            s = async(e, t, n) => {
                var r;
                let i = await o.Z.get(l(), {
                    params: {
                        projectId: t,
                        identityId: n,
                        d: window.location.hostname,
                        licenseKey: e
                    }
                });
                return (null !== (r = null == i ? void 0 : i.result) && void 0 !== r ? r : []).map(e => {
                    let {
                        asset: t,
                        cdnUrl: n
                    } = e;
                    return {
                        ...t,
                        size: parseInt(t.size),
                        src: n
                    }
                })
            },
            a = async(e, t, n, r) => {
                let i = await o.Z.post(l(), {
                    body: JSON.stringify({
                        fileMetadata: e,
                        projectId: n,
                        identityId: r
                    }),
                    params: {
                        d: window.location.hostname,
                        licenseKey: t
                    }
                });
                return null == i ? void 0 : i.result
            },
            c = async(e, t) => {
                await o.Z.put(t, {
                    body: e
                })
            },
            d = async(e, t, n, o) => Promise.all(e.map(e => a({
                            name: e.name,
                            size: e.size,
                            type: e.type
                        }, t, n, o).then(async t => {
                            if (!t)
                                throw Error("No asset");
                            let {
                                asset: n,
                                cdnUrl: o,
                                uploadUrl: r
                            } = t;
                            return await c(e, r), {
                                ...n,
                                size: parseInt(n.size),
                                src: o
                            }
                        }))),
            u = async(e, t, n, r) => {
                let l = await o.Z.delete(i(e), {
                    body: JSON.stringify({
                        projectId: n,
                        identityId: r
                    }),
                    params: {
                        d: window.location.hostname,
                        licenseKey: t
                    }
                });
                return null == l ? void 0 : l.result
            },
            p = async(e, t, n, o) => Promise.all(e.map(e => u(e.attributes.id, t, n, o)))
        },
        58730: function (e, t, n) {
            n.d(t, {
                F2: function () {
                    return u
                },
                UN: function () {
                    return l
                },
                oi: function () {
                    return g
                },
                py: function () {
                    return m
                },
                w0: function () {
                    return p
                },
                wP: function () {
                    return i
                }
            });
            var o,
            r,
            l,
            i,
            s = n(38057);
            (o = l || (l = {})).Projects = "projects",
            o.Settings = "settings",
            (r = i || (i = {})).gjs = "gjs",
            r.gjsStudio = "gjs-studio";
            let a = {},
            c = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new Promise((t, n) => {
                    let o = (null == e ? void 0 : e.db) || "gjs",
                    r = a[o];
                    if (r)
                        t(r);
                    else {
                        if (!(0, s.Ym)())
                            return n(Error("window context not found"));
                        let e = window.indexedDB.open(o, 1);
                        e.onerror = n,
                        e.onsuccess = () => {
                            let r = e.result;
                            r.onerror = n,
                            a[o] = r,
                            t(r)
                        },
                        e.onupgradeneeded = () => {
                            let t = e.result;
                            t.objectStoreNames.contains("projects") || t.createObjectStore("projects"),
                            t.objectStoreNames.contains("settings") || t.createObjectStore("settings")
                        }
                    }
                })
            },
            d = async(e, t) => (await c(t)).transaction([e], "readwrite").objectStore(e),
            u = async(e, t) => {
                let n = await d(e, t);
                return new Promise((e, t) => {
                    let o = [],
                    r = n.openCursor();
                    r.onerror = t,
                    r.onsuccess = function (t) {
                        let n = t.target.result;
                        if (n) {
                            let e = n.primaryKey,
                            t = n.value;
                            o.push({
                                key: e,
                                data: t
                            }),
                            n.continue()
                        } else
                            e(o)
                    }
                })
            },
            p = async(e, t, n) => {
                let o = await d(e, n);
                return new Promise((e, n) => {
                    let r = o.get(t);
                    r.onerror = n,
                    r.onsuccess = () => e(r.result)
                })
            },
            g = async(e, t, n, o) => {
                let r = await d(e, o);
                return new Promise((e, o) => {
                    let l = r.put(n, t);
                    l.onerror = o,
                    l.onsuccess = () => e()
                })
            },
            m = async(e, t, n) => {
                let o = await d(e, n);
                return new Promise((e, n) => {
                    let r = o.delete(t);
                    r.onerror = n,
                    r.onsuccess = () => e()
                })
            }
        },
        49499: function (e, t, n) {
            n.d(t, {
                jw: function () {
                    return p
                },
                qx: function () {
                    return u
                },
                z0: function () {
                    return r
                }
            });
            var o,
            r,
            l = n(49351),
            i = n(69460),
            s = n(77735),
            a = n(58730);
            (o = r || (r = {})).Existing = "existing",
            o.Templates = "templates";
            let c = e => {
                let {
                    baseApiUrl: t
                } = (0, i.cY)();
                return "".concat(t, "/templates/").concat(e)
            },
            d = (e, t) => l.Z.get(c(e), {
                ...t
            }),
            u = async e => {
                try {
                    var t;
                    let n = await d(e);
                    return null !== (t = null == n ? void 0 : n.result) && void 0 !== t ? t : []
                } catch (t) {
                    return console.error("Failed to load templates for type ".concat(e, ":"), t),
                    []
                }
            },
            p = async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.cd.web;
                return (await(0, a.F2)(a.UN.Projects)).map(e => {
                    var t;
                    let {
                        key: n,
                        data: o
                    } = e;
                    return {
                        id: "".concat(n),
                        name: "".concat((null === (t = o.custom) || void 0 === t ? void 0 : t.projectName) || n),
                        data: o
                    }
                }).filter(t => {
                    var n;
                    return (null === (n = t.data.custom) || void 0 === n ? void 0 : n.projectType) === e
                })
            }
        },
        63877: function (e, t, n) {
            n.d(t, {
                NV: function () {
                    return r
                },
                Vk: function () {
                    return i
                }
            });
            let o = "data-type-empty",
            r = (e, t) => {
                e.Canvas.getFrames().forEach(e => {
                    let {
                        view: n
                    } = e;
                    for (let e of Array.from(n.getDoc().querySelectorAll("style[".concat(o, "]"))))
                        e.disabled = !t
                })
            },
            l = function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Empty",
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                l = "[".concat(o, '="').concat(t, '"]'),
                i = e.frameView.getHead(), {
                    midSelector: s = "",
                    styleOut: a = "",
                    styleIn: c = ""
                } = r;
                if (!i.querySelector("style".concat(l))) {
                    let e = document.createElement("style");
                    e.setAttribute(o, t),
                    e.innerHTML = '\n    [data-gjs-type="'.concat(t, '"]').concat(s, ":empty {\n      text-decoration: none;\n      padding: 5px;\n      ").concat(r.limitW ? "min-width: 50px;" : "", "\n      ").concat(a, '\n    }\n    [data-gjs-type="').concat(t, '"]').concat(s, ':empty:before {\n      background-color: #ddd;\n      color: #000;\n      font-size: 16px;\n      font-weight: bold;\n      font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      min-height: 30px;\n      padding: 0 10px;\n      opacity: 0.3;\n      border-radius: 3px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      content: "').concat(n, '";\n      ').concat(r.limitH ? "height: auto;" : "", "\n      ").concat(r.smallH ? "min-height: 30px;" : "", "\n      ").concat(c, "\n    }"),
                    i.appendChild(e)
                }
            },
            i = (e, t) => {
                let {
                    model: n
                } = t,
                o = n.constructor.getDefaults(),
                r = o.emptyState,
                i = n.get("type");
                r && !0 !== o.void && i === e && l(t, i, n.getName({
                        noCustom: !0
                    }), !0 === r ? {}
                     : r)
            };
            t.ZP = function (e) {
                let {
                    Components: t
                } = e,
                n = e => {
                    let {
                        id: n
                    } = e;
                    t.addType(n, {
                        extendFnView: ["onRender"],
                        view: {
                            onRender() {
                                i(n, this)
                            }
                        }
                    })
                };
                t.getTypes().forEach(n),
                e.on("component:type:add", n)
            }
        },
        97620: function (e, t, n) {
            n.d(t, {
                GS: function () {
                    return k
                },
                fn: function () {
                    return C
                },
                ZP: function () {
                    return P
                }
            });
            var o = n(45134),
            r = n(82652),
            l = n(40969),
            i = n(5770),
            s = n(63877),
            a = n(85317),
            c = n(17524),
            d = e => {
                var t,
                n,
                o;
                let {
                    appEditorStore: r,
                    toastStore: l,
                    i18nStore: i
                } = (0, c.bh)(), {
                    sdkProps: s,
                    isUsingAssetCloud: d
                } = r,
                u = s.options,
                p = u.licenseKey,
                g = null === (t = u.project) || void 0 === t ? void 0 : t.id,
                m = null === (n = u.identity) || void 0 === n ? void 0 : n.id,
                h = d ? e => {
                    let {
                        files: t
                    } = e;
                    return (0, a.HT)(t, p, g, m)
                }
                 : null === (o = u.assets) || void 0 === o ? void 0 : o.onUpload;
                if (h) {
                    let {
                        Assets: t
                    } = e;
                    t.getConfig().uploadFile = async n => {
                        try {
                            var o,
                            s;
                            r.setIsLoadingAssets(!0);
                            let l = (null === (o = n.dataTransfer) || void 0 === o ? void 0 : o.files) || (null === (s = n.target) || void 0 === s ? void 0 : s.files) || [],
                            i = Array.from(l),
                            a = await h({
                                files: i,
                                editor: e
                            });
                            t.add(a),
                            await e.store()
                        } catch (e) {
                            console.error(e),
                            l.addError("assets-error-upload", {
                                header: i.t("assetManager.errorUpload"),
                                content: null == e ? void 0 : e.message
                            })
                        } finally {
                            r.setIsLoadingAssets(!1)
                        }
                    }
                }
            },
            u = n(49351),
            p = n(69460);
            let g = () => {
                let {
                    baseApiUrl: e
                } = (0, p.cY)();
                return "".concat(e, "/sdk/projects")
            },
            m = e => "".concat(g(), "/").concat(e),
            h = async e => {
                let {
                    licenseKey: t,
                    projectId: n,
                    ...o
                } = e,
                r = await u.Z.put(m(n), {
                    body: JSON.stringify(o),
                    params: {
                        d: window.location.hostname,
                        licenseKey: t
                    }
                });
                return null == r ? void 0 : r.result
            },
            f = async(e, t) => {
                await u.Z.put(t, {
                    body: e,
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            },
            b = async(e, t, n, o) => {
                let r = JSON.stringify(e),
                l = await h({
                    licenseKey: t,
                    projectId: n,
                    fileMetadata: {
                        size: new Blob([r]).size
                    },
                    identityId: o,
                    name: e.name,
                    description: e.description
                });
                if (!l)
                    throw Error("No project");
                let {
                    uploadUrl: i
                } = l;
                await f(r, i)
            },
            y = (e, t, n) => u.Z.get(m(t), {
                params: {
                    d: window.location.hostname,
                    licenseKey: e,
                    identityId: n
                }
            }),
            v = async e => await u.Z.get(e),
            x = async(e, t, n, o) => {
                let r = await y(t, n, o),
                l = null == r ? void 0 : r.result,
                i = null == r ? void 0 : r.errorData;
                if (!l && (null == i ? void 0 : i.notFoundInDb))
                    return {
                        id: n,
                        project: e.getProjectData()
                    };
                if (!l)
                    throw Error("No project");
                let {
                    downloadUrl: s
                } = l,
                a = await v(s);
                if (!a)
                    throw Error("No project");
                return {
                    id: n,
                    project: a
                }
            };
            var j = (e, t) => {
                let n,
                o,
                r,
                l;
                let {
                    appEditorStore: i,
                    toastStore: s,
                    i18nStore: a
                } = t.appStore.store, {
                    isUsingProjectSelfHosted: c,
                    isUsingProjectCloud: d,
                    sdkOptions: u
                } = i, {
                    project: p,
                    onLoad: g,
                    onSave: m,
                    autosaveChanges: h,
                    autosaveIntervalMs: f
                } = u.storage || {};
                if (c)
                    r = g, l = m, n = h, o = f;
                else if (d) {
                    let e = u.licenseKey,
                    t = u.project.id,
                    i = u.identity.id;
                    l = n => {
                        let {
                            project: o
                        } = n;
                        return b(o, e, t, i)
                    },
                    r = n => {
                        let {
                            editor: o
                        } = n;
                        return x(o, e, t, i)
                    },
                    n = Math.max(10, null != h ? h : 10),
                    f && (o = Math.max(1e4, f))
                }
                let {
                    Storage: y
                } = e, {
                    events: v
                } = y,
                j = !1,
                w = e.em.constructor.prototype;
                if (e.em.loadData = function () {
                    for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
                        n[o] = arguments[o];
                    let r = w.loadData.apply(e.em, n);
                    return j = r && !!Object.keys(r).length,
                    r
                }, e.once("change:readyLoad", () => {
                        var t;
                        let n = null === (t = u.project) || void 0 === t ? void 0 : t.default;
                        !j && n && e.loadProjectData(n)
                    }), e.on(v.startStore, () => i.setIsSaving(!0)), e.on(v.endStore, () => i.setIsSaving(!1)), (r || p) && l) {
                    let t = "remote";
                    y.setCurrent(t),
                    y.add(t, {
                        load: async() => p || (await r({
                                editor: e
                            })).project,
                        async store(t) {
                            await l({
                                project: t,
                                editor: e
                            })
                        }
                    }),
                    e.on(v.errorLoad, e => {
                        s.addError("storage-error-load", {
                            header: a.t("storageManager.errorLoad"),
                            content: e.message
                        })
                    }),
                    e.on(v.errorStore, e => {
                        s.addError("storage-error-store", {
                            header: a.t("storageManager.errorStore"),
                            content: e.message
                        })
                    }),
                    n && y.setStepsBeforeSave(n),
                    o && e.onReady(() => {
                        let t = setInterval(async() => {
                            e.getDirtyCount() > 0 && !i.isSaving && await e.store()
                        }, o);
                        e.on("destroy", () => clearInterval(t))
                    })
                }
            },
            w = n(45678),
            Z = e => {
                let {
                    Canvas: t
                } = e;
                e.on(t.events.frameLoad, t => {
                    let {
                        window: n,
                        el: o
                    } = t;
                    n.document.addEventListener("contextmenu", async t => {
                        t.preventDefault();
                        let n = t.target,
                        r = e.getModel().get("componentHovered") || e.Utils.helpers.getModel(n);
                        if (r) {
                            let n = o.getBoundingClientRect();
                            e.runCommand(w.v.contextMenuComponent, {
                                component: r,
                                event: t,
                                x: t.clientX + n.left,
                                y: t.clientY + n.top
                            })
                        }
                    })
                })
            },
            S = (e, t) => {
                var n;
                let {
                    globalStylesStore: o
                } = t.appStore.store;
                null === (n = e.DataSources) || void 0 === n || n.all.on("reset", () => o.onLoad())
            };
            let C = "select-target",
            k = "enable-sm";
            function P(e, t) {
                var n,
                a,
                c,
                u;
                let {
                    appEditorStore: p,
                    blockManagerStore: g,
                    toastStore: m,
                    modalStore: h,
                    layoutStore: f,
                    contextMenu: b
                } = t.appStore.store, {
                    projectIdToLoad: y,
                    nextProjectData: v
                } = p,
                x = () => p.toggleLeftSidebar(),
                P = e.getConfig();
                if (e.AssetManager.all.model.prototype.idAttribute = "src", v && (P.projectData = v, p.setNextProjectData()), y) {
                    let t = e.Storage.getConfig().options;
                    t && (t.local.key = y)
                }
                (null === (n = e.events) || void 0 === n ? void 0 : n.projectLoad) && e.on(null === (u = e.events) || void 0 === u ? void 0 : u.projectLoad, e => {
                    let {
                        project: n
                    } = e;
                    t.appStore.setProjectDataCustom(n.custom)
                }),
                e.RichTextEditor.getConfig().custom = !0;
                let {
                    Canvas: T
                } = e,
                L = (0, l.Z)(() => p.setCanvasPanning(!1), 200);
                e.on(T.events.coords, () => {
                    p.setCanvasPanning(!0),
                    L()
                }),
                e.on(T.events.frameLoad, e => {
                    let {
                        el: t
                    } = e;
                    t.tabIndex = -1
                });
                let {
                    Parser: H
                } = e,
                N = (null === (a = p.sdkOptions.parser) || void 0 === a ? void 0 : a.showErrors) !== !1;
                (null === (c = H.events) || void 0 === c ? void 0 : c.css) && N && e.on(H.events.css, e => {
                    let {
                        error: t
                    } = e;
                    if (t) {
                        let e = (0, r.HD)(t) ? t : t.name && t.reason ? "".concat(t.name, ": ").concat(t.reason) : t.message;
                        m.addError("css-error", {
                            header: "CSS Parser Error",
                            content: e
                        })
                    }
                }),
                [{
                        id: "toggle-lsidebar",
                        keys: "alt+ctrl+,",
                        cmd: x
                    }, {
                        id: "toggle-lsidebar2",
                        keys: "alt+⌘+,",
                        cmd: x
                    }, {
                        id: "toggle-rsidebar",
                        keys: "alt+ctrl+., alt+⌘+.",
                        cmd: () => p.toggleRightSidebar()
                    }, {
                        id: "show-blocks",
                        keys: "ctrl+b, ⌘+b",
                        cmd: () => g.toggleOpen()
                    }, {
                        id: "add-symbol",
                        keys: "alt+ctrl+k, alt+⌘+k",
                        cmd: w.v.symbolAdd
                    }, {
                        id: "detach-symbol",
                        keys: "shift+alt+ctrl+k, shift+alt+⌘+k",
                        cmd: w.v.symbolDetach
                    }
                ].forEach(t => {
                    let {
                        id: n,
                        keys: o,
                        cmd: r
                    } = t;
                    e.Keymaps.add("preset:".concat(n), o, r, {
                        prevent: !0
                    })
                }),
                e.on("run:core:preview", () => {
                    p.setPreview(!0),
                    g.setOpen(!1),
                    (0, s.NV)(e, !1)
                }),
                e.on("stop:core:preview", () => {
                    p.setPreview(!1),
                    (0, s.NV)(e, !0),
                    setTimeout(() => {
                        e.refresh()
                    }, p.transitionTime)
                });
                let V = "target-selection", {
                    Commands: z,
                    Components: M
                } = e;
                z.add(C, {
                    opts: {},
                    init() {
                        this.beforeSelect = this.beforeSelect.bind(this)
                    },
                    onComponentHover(e, t) {
                        let n = {
                            id: V,
                            type: "target",
                            component: t
                        };
                        t ? T.addSpot(n) : T.removeSpots(n)
                    },
                    beforeSelect(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        n.abort = !0,
                        n.useValid = !1,
                        this.opts.onSelect(t),
                        e.stopCommand(C)
                    },
                    run(t, n, o) {
                        this.opts = o,
                        e.on("component:select:before", this.beforeSelect),
                        e.on("change:componentHovered", this.onComponentHover)
                    },
                    stop() {
                        e.off("component:select:before", this.beforeSelect),
                        e.off("change:componentHovered", this.onComponentHover),
                        T.removeSpots({
                            id: V
                        }),
                        p.setSelectingTarget(!1)
                    }
                }),
                z.add(k, () => {
                    p.setSelectedDesignerTab("style")
                }),
                z.add(w.v.toastAdd, (e, t, n) => {
                    m.add(n.id, n)
                }),
                z.add(w.v.dialogOpen, (e, t, n) => {
                    h.open(n)
                }),
                z.add(w.v.dialogClose, () => {
                    h.close()
                }),
                z.add(w.v.sidebarLeftGet, () => ({
                        visible: p.isLeftSidebarOpen
                    })),
                z.add(w.v.sidebarLeftSet, (e, t, n) => {
                    p.setLeftSidebarOpen(!!n.visible)
                }),
                z.add(w.v.sidebarLeftToggle, () => {
                    p.setLeftSidebarOpen(!p.isLeftSidebarOpen)
                }),
                z.add(w.v.sidebarRightGet, () => ({
                        visible: p.isRightSidebarOpen
                    })),
                z.add(w.v.sidebarRightSet, (e, t, n) => {
                    p.setRightSidebarOpen(!!n.visible)
                }),
                z.add(w.v.sidebarRightToggle, () => {
                    p.setRightSidebarOpen(!p.isRightSidebarOpen)
                }),
                z.add(w.v.sidebarTopGet, () => ({
                        visible: p.isTopSidebarOpen
                    })),
                z.add(w.v.sidebarTopSet, (e, t, n) => {
                    p.setTopSidebarOpen(!!n.visible)
                }),
                z.add(w.v.sidebarTopToggle, () => {
                    p.setTopSidebarOpen(!p.isTopSidebarOpen)
                }),
                z.add(w.v.sidebarBottomGet, () => ({
                        visible: p.isBottomSidebarOpen
                    })),
                z.add(w.v.sidebarBottomSet, (e, t, n) => {
                    p.setBottomSidebarOpen(!!n.visible)
                }),
                z.add(w.v.sidebarBottomToggle, () => {
                    p.setBottomSidebarOpen(!p.isBottomSidebarOpen)
                }),
                z.add(w.v.layoutAdd, (e, t, n) => {
                    n.id && f.add(n.id, n)
                }),
                z.add(w.v.layoutRemove, (e, t, n) => {
                    let {
                        id: o,
                        ...r
                    } = n;
                    f.remove(o, r)
                }),
                z.add(w.v.layoutToggle, (e, t, n) => {
                    let {
                        id: o,
                        ...r
                    } = n;
                    o && (f.get(o) ? f.remove(o, r) : f.add(o, r))
                }),
                z.add(w.v.getPagesConfig, () => p.sdkPagesConfig),
                z.add(w.v.setPagesConfig, (e, t, n) => {
                    let {
                        config: o
                    } = n || {};
                    (0, r.Xq)(o) && p.setSdkPagesConfig(o)
                }),
                z.add(w.v.getPageSettings, () => JSON.parse(JSON.stringify(p.panelPageSettings))),
                z.add(w.v.setPageSettings, (e, t, n) => {
                    p.setPanelPageSettings(n)
                }),
                z.add(w.v.projectFiles, (e, t, n) => (0, i.M)(e, {
                        isMJML: p.isProjectTypeEmail,
                        ...n
                    })),
                z.add(w.v.getBlocksPanel, () => ({
                        isOpen: g.isOpen
                    })),
                z.add(w.v.setBlocksPanel, (e, t, n) => {
                    let o = n || {};
                    (0, r.Xq)(o.isOpen) && g.setOpen(o.isOpen)
                }),
                z.add(w.v.canvasReload, () => {
                    let t = e.getSelected(),
                    n = T.getCanvasView(), {
                        frames: o
                    } = T.canvas;
                    o.once("loaded:all", () => {
                        let e = null == t ? void 0 : t.getView();
                        e && !e.isInViewport() && e.el.scrollIntoView({
                            block: "center"
                        })
                    }),
                    n.renderFrames()
                }),
                z.add(w.v.contextMenuComponent, (e, t, n) => {
                    let {
                        component: o,
                        ...r
                    } = n;
                    b.showForComponent(o, r)
                }),
                z.add(w.v.symbolAdd, (t, n, r) => {
                    let l = r.component || e.getSelected();
                    if (l)
                        return M.getSymbolInfo(l).isSymbol ? m.add("skip-symbol", {
                            header: "The selected element is already a symbol",
                            variant: o.x7.Warning
                        }) : M.addSymbol(l)
                }),
                z.add(w.v.symbolDetach, (t, n, o) => {
                    let r = o.component || e.getSelected();
                    r && M.getSymbolInfo(r).isRoot && M.detachSymbol(r)
                }),
                z.add(w.v.symbolOverride, (t, n, o) => {
                    let r = o.component || e.getSelected();
                    r && (r.setSymbolOverride(o.override), e.Layers.updateLayer(r))
                }),
                z.add(w.v.symbolPropagateStyles, (t, n, o) => {
                    let r = o.component || e.getSelected();
                    if (!r)
                        return;
                    let {
                        Css: l
                    } = e,
                    i = l.getComponentRules(r, {
                        current: !0
                    })[0];
                    if (i) {
                        let {
                            state: e,
                            mediaText: t
                        } = i.attributes,
                        n = i.getStyle();
                        M.getSymbolInfo(r).relatives.forEach(o => {
                            l.setIdRule(o.getId(), n, {
                                state: e,
                                mediaText: t
                            })
                        })
                    }
                    o.deep && r.components().forEach(t => e.runCommand(w.v.symbolPropagateStyles, {
                            ...o,
                            component: t
                        }))
                }),
                d(e),
                j(e, t),
                S(e, t),
                function (e) {
                    let {
                        Components: t
                    } = e;
                    e.on("component:type:add", e => {
                        let {
                            id: n,
                            model: o
                        } = e;
                        if ("custom-code" === n) {
                            let e = "<span>Insert here your custom code</span>";
                            t.addType(n, {
                                model: {
                                    defaults: {
                                        emptyState: !0,
                                        icon: '<svg viewBox="0 0 24 24"><path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"></path></svg>',
                                        classes: "gjs-custom-code",
                                        components: e,
                                        "custom-code-plugin__code": e,
                                        styles: ".gjs-custom-code { padding: 5px; }"
                                    }
                                }
                            })
                        }
                        if ("typed" === n) {
                            let e = o.getDefaults().traits.map(e => "strings" === e.name ? {
                                ...e,
                                type: "stack",
                                addItem: e => ({
                                    id: e,
                                    label: "New string ".concat(e)
                                }),
                                getValue(e) {
                                    let {
                                        component: t
                                    } = e;
                                    return t.get("strings").map((e, t) => ({
                                            id: "".concat(t),
                                            label: e
                                        }))
                                },
                                setValue: e => {
                                    let {
                                        component: t,
                                        value: n
                                    } = e,
                                    o = n.map(e => e.label);
                                    t.set({
                                        strings: o
                                    }),
                                    t.trigger("rerender")
                                },
                                properties: [{
                                        name: "label"
                                    }
                                ]
                            }
                                     : e);
                            t.addType(n, {
                                model: {
                                    defaults: {
                                        traits: e,
                                        strings: ["These are the default values...!!!", "Use your own strings from Properties!", "Have a great day!"],
                                        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path d="M212.3 44l2.3 49.6h-6A60 60 0 00204 75c-3.2-6-7.5-10.5-12.9-13.3a44.9 44.9 0 00-21.1-4.3h-29.8V219c0 13 1.4 21 4.2 24.3 4 4.4 10 6.6 18.2 6.6h7.4v5.7H80.2V250h7.5c9 0 15.3-2.7 19-8.2 2.4-3.3 3.5-10.9 3.5-22.7V57.3H84.8a71 71 0 00-21.1 2.2 29 29 0 00-13.9 11.3 46.1 46.1 0 00-6.9 22.8H37L39.5 44h172.8zM245 22h18v256h-18z"/></svg>',
                                        classes: "gjs-typed",
                                        styles: "\n                  .gjs-typed {\n                    padding: 5px;\n                  }\n                "
                                    }
                                }
                            })
                        }
                        if (["tabs", "tab-content", "tab-contents", "tab", "tab-container"].indexOf(n) >= 0) {
                            let e = {
                                emptyState: !0,
                                icon: "tabs" === n ? '\n            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n              <path d="M22 9.3c0-.8-.5-1.3-1.3-1.3H3.4C2.5 8 2 8.5 2 9.3v7.4c0 .8.5 1.3 1.3 1.3h17.4c.8 0 1.3-.5 1.3-1.3V9.3zM21 17H3V9h18v8z" fill-rule="nonzero"/><rect x="3" y="5" width="4" height="2" rx=".5"/><rect x="8" y="5" width="4" height="2" rx=".5"/><rect x="13" y="5" width="4" height="2" rx=".5"/>\n            </svg>\n          ' : void 0
                            };
                            "tab" === n && (e.traits = [{
                                        type: "button",
                                        label: !1,
                                        text: "Style Active",
                                        command: e => {
                                            e.select(),
                                            e.runCommand(k),
                                            setTimeout(() => e.Selectors.select(".tab.tab-active"))
                                        }
                                    }
                                ]),
                            t.addType(n, {
                                model: {
                                    defaults: e
                                }
                            })
                        }
                    })
                }
                (e),
                function (e) {
                    let {
                        Components: t,
                        Blocks: n
                    } = e,
                    o = e => {
                        let {
                            model: o,
                            id: r
                        } = e,
                        l = o.getDefaults(),
                        i = n.get(r),
                        s = l.icon,
                        a = null == i ? void 0 : i.get("media"),
                        c = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14z"></path></svg>';
                        t.addType(r, {
                            model: {
                                defaults: {
                                    icon: s && s !== c && !a ? s : a || c
                                }
                            }
                        })
                    };
                    t.getTypes().forEach(o),
                    e.on("component:type:add", o)
                }
                (e),
                (0, s.ZP)(e, {}),
                Z(e)
            }
        },
        45678: function (e, t, n) {
            var o,
            r,
            l,
            i;
            n.d(t, {
                m: function () {
                    return r
                },
                v: function () {
                    return o
                }
            }),
            (l = o || (o = {})).toastAdd = "studio:toastAdd",
            l.dialogOpen = "studio:dialogOpen",
            l.dialogClose = "studio:dialogClose",
            l.sidebarLeftSet = "studio:sidebarLeft:set",
            l.sidebarLeftGet = "studio:sidebarLeft:get",
            l.sidebarLeftToggle = "studio:sidebarLeft:toggle",
            l.sidebarRightSet = "studio:sidebarRight:set",
            l.sidebarRightGet = "studio:sidebarRight:get",
            l.sidebarRightToggle = "studio:sidebarRight:toggle",
            l.sidebarTopSet = "studio:sidebarTop:set",
            l.sidebarTopGet = "studio:sidebarTop:get",
            l.sidebarTopToggle = "studio:sidebarTop:toggle",
            l.sidebarBottomSet = "studio:sidebarBottom:set",
            l.sidebarBottomGet = "studio:sidebarBottom:get",
            l.sidebarBottomToggle = "studio:sidebarBottom:toggle",
            l.symbolAdd = "studio:symbolAdd",
            l.symbolDetach = "studio:symbolDetach",
            l.symbolOverride = "studio:symbolOverride",
            l.symbolPropagateStyles = "studio:propagateStyles",
            l.getPagesConfig = "studio:getPagesConfig",
            l.setPagesConfig = "studio:setPagesConfig",
            l.getPageSettings = "studio:getPageSettings",
            l.setPageSettings = "studio:setPageSettings",
            l.projectFiles = "studio:projectFiles",
            l.canvasReload = "studio:canvasReload",
            l.getBlocksPanel = "studio:getBlocksPanel",
            l.setBlocksPanel = "studio:setBlocksPanel",
            l.contextMenuComponent = "studio:contextMenuComponent",
            l.layoutAdd = "studio:layoutAdd",
            l.layoutRemove = "studio:layoutRemove",
            l.layoutToggle = "studio:layoutToggle",
            (i = r || (r = {})).layoutToggleId = "studio:layoutToggle:",
            i.toggleBlocksPanel = "studio:toggleBlocksPanel",
            i.pageSettingsUpdate = "studio:pageSettingsUpdate"
        },
        5770: function (e, t, n) {
            n.d(t, {
                M: function () {
                    return u
                }
            });
            var o = n(40036),
            r = n(98698),
            l = n(21133);
            let i = e => e.Assets.getAll().reduce((e, t) => {
                let n = t.getSrc(),
                o = n.match(/^data:([^;]+);/);
                if (o) {
                    let l = n.split(",")[1],
                    i = (0, r.zA)(t.get("name"));
                    e[n] = {
                        mime: o[1],
                        name: i,
                        base64: l
                    }
                }
                return e
            }, {}),
            s = e => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
            a = function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = e,
                r = n.pathPfx || "";
                for (let e in t)
                    if (o.includes(e)) {
                        let n = t[e];
                        o = o.replace(RegExp(s(e), "g"), "".concat(r).concat(n.name)),
                        n.found = !0
                    }
                return o
            },
            c = (e, t) => "".concat(t || "").concat(e || ""),
            d = (e, t) => {
                let n = e ? "<div ".concat(l._H, ">").concat(e, "</div>") : "",
                o = t ? "<div ".concat(l._H, " data-gjs-global>").concat(t, "</div>") : "";
                return "".concat(n).concat(o)
            },
            u = async function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    page: n,
                    skipProject: l,
                    assetsFolder: s = "assets",
                    filenameCss: u = "style.css",
                    styles: p,
                    isMJML: g
                } = t,
                m = [],
                h = n ? [n] : e.Pages.getAll(),
                f = i(e),
                b = "".concat(s, "/"),
                y = a(e.getCss({
                            keepUnusedStyles: !0,
                            component: null == n ? void 0 : n.getMainComponent()
                        }) || "", f, {
                        pathPfx: b
                    }),
                v = "inline" === p,
                x = "skip" === p,
                j = (0, o.NM)(e).globalPageSettings || {},
                w = h.map(t => {
                    var n,
                    l,
                    i;
                    let s = t.getName(),
                    p = (0, o.Hl)(t, "title") || s,
                    m = (0, o.Hl)(t, "favicon"),
                    h = (0, o.Hl)(t, "description"),
                    w = (0, o.Hl)(t, "keywords"),
                    Z = (0, o.Hl)(t, "socialTitle"),
                    S = (0, o.Hl)(t, "socialDescription"),
                    C = (0, o.Hl)(t, "socialImage"),
                    k = c((0, o.s5)({
                                page: t,
                                key: "customCodeHead"
                            }), j.customCodeHead),
                    P = d((0, o.s5)({
                                page: t,
                                key: "customCodeBody"
                            }), j.customCodeBody),
                    T = t.getMainComponent(),
                    L = e.getJs({
                        component: T
                    }),
                    H = [],
                    N = [],
                    V = T.toHTML({
                        asDocument: !1
                    }).replace("</body>", "".concat(P).concat(L ? "<script>".concat(L, "</script>") : "", "</body>")),
                    z = T.head,
                    M = p && "<title>".concat(p, "</title>"),
                    A = m && '<link rel="icon" href="'.concat(m, '"/>'),
                    B = h && '<meta name="description" content="'.concat(h, '"/>'),
                    E = w && '<meta name="keywords" content="'.concat(w, '"/>'),
                    O = Z && '<meta property="og:title" content="'.concat(Z, '"/>'),
                    D = S && '<meta property="og:description" content="'.concat(S, '"/>'),
                    R = C && '<meta property="og:image" content="'.concat(C, '"/>'),
                    I = '<meta charset="utf-8">',
                    F = '<meta name="viewport" content="width=device-width,initial-scale=1">',
                    _ = '<meta name="robots" content="index,follow">',
                    U = '<meta name="generator" content="GrapesJS Studio">';
                    z.components().forEach(e => {
                        let t = e.toHTML();
                        o.$k.title({
                            cmp: e
                        }) ? M = t : o.$k.favicon({
                            cmp: e
                        }) ? A = t : o.$k.description({
                            cmp: e
                        }) ? B = t : o.$k.keywords({
                            cmp: e
                        }) ? E = t : o.$k.socialTitle({
                            cmp: e
                        }) ? O = t : o.$k.socialDescription({
                            cmp: e
                        }) ? D = t : o.$k.socialImage({
                            cmp: e
                        }) ? R = t : o.$k.charset({
                            cmp: e
                        }) ? I = t : o.$k.viewport({
                            cmp: e
                        }) ? F = t : o.$k.robots({
                            cmp: e
                        }) ? _ = t : o.$k.generator({
                            cmp: e
                        }) && (U = t)
                    }),
                    M && H.push(M),
                    I && H.push(I),
                    F && H.push(F),
                    _ && H.push(_),
                    U && H.push(U),
                    B && H.push(B),
                    E && H.push(E),
                    O && H.push(O),
                    D && H.push(D),
                    R && H.push(R),
                    A && H.push(A),
                    y && !x && H.push(v ? "<style>".concat(y, "</style>") : '<link rel="stylesheet" href="./'.concat(u, '">')),
                    N.length && H.push(...N),
                    k && H.push(k);
                    let X = T.doctype || "<!DOCTYPE html>",
                    q = null === (n = (l = T.docEl).__attrToString) || void 0 === n ? void 0 : n.call(l),
                    W = null === (i = z.__attrToString) || void 0 === i ? void 0 : i.call(z),
                    Y = g ? e.runCommand("mjml-code-to-html").html : "".concat(X, "\n<html").concat(q ? " ".concat(q) : "", ">\n  <head").concat(W ? " ".concat(W) : "", ">\n    ").concat(H.join("\n  "), "\n  </head>\n  ").concat(V, "\n</html>\n");
                    return {
                        filename: (0, r.bg)(e, t),
                        content: a(Y, f, {
                            pathPfx: b
                        }),
                        mimeType: "text/html"
                    }
                });
                for (let t in m.push(...w), g && h.forEach(t => {
                        m.push({
                            filename: (0, r.bg)(e, t, "mjml"),
                            content: t.getMainComponent().toHTML(),
                            mimeType: "text/mjml"
                        })
                    }), f) {
                    let e = f[t];
                    e.found && m.push({
                        path: s,
                        filename: e.name,
                        content: atob(e.base64),
                        mimeType: e.mime
                    })
                }
                return !y || v || x || m.push({
                    filename: u,
                    content: y,
                    mimeType: "text/css"
                }),
                l || m.push({
                    filename: "gjs-project.grapesjs",
                    content: JSON.stringify(e.getProjectData()),
                    mimeType: "application/json"
                }),
                m
            }
        },
        21133: function (e, t, n) {
            n.d(t, {
                _H: function () {
                    return a
                },
                v0: function () {
                    return s
                }
            });
            var o = n(95474),
            r = n(38057),
            l = n(40036),
            i = n(98698);
            let s = "custom-html-body",
            a = "data-custom-html-body",
            c = "data-global-custom-html-head",
            d = "data-global-custom-html-body",
            u = "global";
            t.ZP = function (e, t) {
                var n;
                let p = n => {
                    if (!n)
                        return e.em.logError("loadGlobalHead: document not found");
                    let o = (0, l.Il)(t.appStore),
                    i = n.querySelector("[".concat(c, "]"));
                    i || ((i = n.createElement("div")).setAttribute(c, "true"), n.head.insertBefore(i, n.head.firstChild)),
                    i.innerHTML = o.customCodeHead || "",
                    (0, r.ig)(i)
                },
                g = n => {
                    if (!n)
                        return e.em.logError("loadGlobalBody: document not found");
                    let o = (0, l.Il)(t.appStore),
                    i = n.querySelector("[".concat(d, "]"));
                    if (!i) {
                        (i = n.createElement("div")).setAttribute(d, "true");
                        let e = n.querySelector('[data-gjs-type="wrapper"]');
                        null == e || e.appendChild(i)
                    }
                    i.innerHTML = o.customCodeBody || "",
                    (0, r.ig)(i)
                };
                e.on(e.Canvas.events.frameLoad, e => {
                    var t;
                    return p(null === (t = e.el.contentWindow) || void 0 === t ? void 0 : t.document)
                }),
                e.on(e.Canvas.events.frameLoadBody, e => {
                    var t;
                    return g(null === (t = e.el.contentWindow) || void 0 === t ? void 0 : t.document)
                }),
                e.on(o.mp.pageSettingsUpdate, t => {
                    var n,
                    o;
                    if (t.page)
                        return;
                    let r = null === (o = e.Canvas.getFrames()[0]) || void 0 === o ? void 0 : null === (n = o.view) || void 0 === n ? void 0 : n.getDoc();
                    p(r),
                    g(r)
                }),
                e.Components.addType(s, {
                    isComponent: e => (0, i.Fk)(e, a),
                    model: {
                        defaults: {
                            attributes: {
                                [a]: !0
                            },
                            locked: !0,
                            layerable: !1
                        },
                        toHTML: () => ""
                    }
                });
                let m = (null === (n = e.events) || void 0 === n ? void 0 : n.projectLoad) || "change:readyLoad";
                e.on(m, () => {
                    let {
                        appStore: n
                    } = t, {
                        globalPageSettings: o
                    } = n.projectDataCustom,
                    r = (null == o ? void 0 : o.customCodeHead) || "",
                    l = (null == o ? void 0 : o.customCodeBody) || "";
                    e.Pages.getAll().forEach(e => {
                        let t = e.getMainComponent(),
                        n = t.head.components(),
                        o = [];
                        n.forEach(e => {
                            e.has(u) && o.push(e)
                        }),
                        o.forEach(e => {
                            let t = e.toHTML();
                            r.includes(t) || (r += t),
                            e.remove()
                        });
                        let i = [];
                        t.findType(s).forEach(e => {
                            e.has(u) && i.push(e)
                        }),
                        i.forEach(e => {
                            let t = e.getInnerHTML();
                            l.includes(t) || (l += t),
                            e.remove()
                        })
                    }),
                    (r || l) && n.setProjectDataCustom({
                        globalPageSettings: {
                            ...o,
                            customCodeHead: r,
                            customCodeBody: l
                        }
                    })
                })
            }
        },
        16414: function (e, t, n) {
            n.d(t, {
                Z: function () {
                    return r
                },
                _: function () {
                    return o
                }
            });
            let o = e => {
                let t = (e || "").split(" "),
                n = t[0],
                o = t[0],
                r = t[0],
                l = t[0];
                return 4 === t.length ? (n = t[0], o = t[1], r = t[2], l = t[3]) : 3 === t.length ? (n = t[0], o = t[1], l = t[1], r = t[2]) : 2 === t.length && (n = t[0], o = t[1], l = t[1], r = t[0]),
                [n, o, r, l]
            };
            function r(e) {
                let t = {};
                if (e.padding) {
                    let n = e.padding.split(" "),
                    o = n[0],
                    r = n[0],
                    l = n[0],
                    i = n[0];
                    4 === n.length ? (o = n[0], r = n[1], l = n[2], i = n[3]) : 3 === n.length ? (o = n[0], r = n[1], i = n[1], l = n[2]) : 2 === n.length && (o = n[0], r = n[1], i = n[1], l = n[0]),
                    t["padding-top"] = e["padding-top"] || o,
                    t["padding-right"] = e["padding-right"] || r,
                    t["padding-bottom"] = e["padding-bottom"] || l,
                    t["padding-left"] = e["padding-left"] || i,
                    delete e.padding
                }
                return {
                    ...e,
                    ...t
                }
            }
        },
        98698: function (e, t, n) {
            n.d(t, {
                Ee: function () {
                    return i
                },
                FS: function () {
                    return s
                },
                Fk: function () {
                    return c
                },
                Kf: function () {
                    return l
                },
                LP: function () {
                    return g
                },
                bg: function () {
                    return p
                },
                nX: function () {
                    return a
                },
                ob: function () {
                    return d
                },
                zA: function () {
                    return u
                }
            });
            var o = n(40036),
            r = n(82652);
            let l = e => t => (t.tagName || "").toLowerCase() === e,
            i = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return t.map(e => '[data-gjs-type="'.concat(e, '"]')).join(",")
            },
            s = function (e) {
                for (var t, n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                    o[r - 1] = arguments[r];
                return o.indexOf(null == e ? void 0 : null === (t = e.tagName) || void 0 === t ? void 0 : t.toUpperCase()) >= 0
            },
            a = (e, t) => {
                var n;
                return null == e ? void 0 : null === (n = e.classList) || void 0 === n ? void 0 : n.contains(t)
            },
            c = (e, t) => {
                var n;
                return !!(null == e ? void 0 : null === (n = e.hasAttribute) || void 0 === n ? void 0 : n.call(e, t))
            },
            d = (e, t) => {
                let n = e.Blocks.get(t);
                return n ? n.collection.indexOf(n) : -1
            },
            u = e => e.replace(/[^a-z0-9.]/gi, "_").toLowerCase(),
            p = function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "html", {
                    Pages: l
                } = e,
                i = (0, o.s5)({
                    page: t,
                    key: "slug"
                }),
                s = l.getMain() === t ? "index" : (0, r.lV)(i || t.getName());
                return "".concat(s, ".").concat(n)
            },
            g = (e, t) => {
                let {
                    toolbar: n
                } = e;
                n.some(e => e.id === t.id) || (n.unshift(t), e.set("toolbar", [...n]))
            }
        },
        22394: function (e, t, n) {
            n.d(t, {
                Ie: function () {
                    return d
                },
                Zm: function () {
                    return a
                }
            });
            var o = n(82674),
            r = n(17524),
            l = n(45678),
            i = n(82652),
            s = n(76076);
            class a {
                 * showForComponent(e, t) {
                    let n = null == e ? void 0 : e.em;
                    if (!n)
                        return;
                    t.skipSelect || n.selected.hasComponent(e) || n.setSelected(e);
                    let o = yield this.getItemsForComponent(e, t);
                    o.length && this.show({
                        ...t,
                        items: o
                    })
                }
                show(e) {
                    let {
                        items: t,
                        x: n,
                        y: o,
                        w: r,
                        h: l
                    } = e;
                    this.isOpen = !0,
                    this.coordinates = {
                        x: n,
                        y: o,
                        w: r,
                        h: l
                    },
                    this.items = t
                }
                hide() {
                    this.isOpen = !1,
                    setTimeout(this.clear, 101)
                }
                clear() {
                    this.items = [],
                    this.coordinates = {
                        x: 0,
                        y: 0
                    }
                }
                constructor(e) {
                    this.isOpen = !1,
                    this.items = [],
                    this.coordinates = {
                        x: 0,
                        y: 0
                    },
                    this.getItemsForComponent = (0, o.ls)(function  * (e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!(null == e ? void 0 : e.em))
                            return [];
                        let o = e.em.getEditor(), {
                            isSymbol: r,
                            isRoot: i
                        } = o.Components.getSymbolInfo(e),
                        a = !!e.getSymbolOverride(),
                        d = !!e.get("removable"),
                        u = !!e.parent() && !!e.toolbar.length,
                        p = !!e.get("copyable"),
                        g = [u && {
                                id: s.X.selectParent,
                                label: "Select parent",
                                onClick: () => {
                                    o.runCommand("core:component-exit", {
                                        force: !0
                                    })
                                }
                            }, p && {
                                id: s.X.duplicate,
                                label: "Duplicate",
                                onClick: () => {
                                    o.runCommand("tlb-clone")
                                }
                            }, !r && d && {
                                id: s.X.symbolCreate,
                                label: "Create Symbol",
                                onClick: () => {
                                    o.runCommand(l.v.symbolAdd)
                                }
                            }, r && i && {
                                id: s.X.symbolDetach,
                                label: "Detach instance",
                                onClick: () => {
                                    o.runCommand(l.v.symbolDetach)
                                }
                            }, r && !a && {
                                id: s.X.symbolOverride,
                                label: "Make overridable",
                                onClick: () => {
                                    o.runCommand(l.v.symbolOverride, {
                                        override: !0
                                    })
                                }
                            }, r && a && {
                                id: s.X.symbolOverrideClear,
                                label: "Clear overridable",
                                onClick: () => {
                                    o.runCommand(l.v.symbolOverride)
                                }
                            }, d && {
                                id: s.X.delete,
                                label: "Delete",
                                onClick: () => {
                                    o.runCommand("core:component-delete")
                                }
                            }
                        ].filter(Boolean),
                        m = e.get("contextMenu"),
                        h = {
                            ...n,
                            items: g,
                            component: e,
                            editor: o,
                            type: e.get("type") || "default",
                            source: n.source || s.m.canvas
                        },
                        f = yield c(m, h),
                        b = null === (t = this.store.appEditorStore.sdkComponentsConfig) || void 0 === t ? void 0 : t.contextMenu;
                        return yield c(b, {
                            ...h,
                            items: f
                        })
                    }),
                    this.store = e,
                    (0, o.ky)(this, {}, {
                        autoBind: !0
                    })
                }
            }
            let c = async(e, t) => (0, i.mf)(e) ? (await e(t)).filter(Boolean) : t.items,
            d = () => (0, r.oR)().contextMenu
        },
        6217: function (e, t, n) {
            n.d(t, {
                G: function () {
                    return l
                },
                X: function () {
                    return i
                }
            });
            var o = n(82674),
            r = n(17524);
            class l {
                t(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        editor: o
                    } = this.store.appEditorStore;
                    return (null == o ? void 0 : null === (t = o.I18n) || void 0 === t ? void 0 : t.t(e, n)) || ""
                }
                tScoped(e) {
                    return (t, n) => this.t("".concat(e, ".").concat(t), n)
                }
                constructor(e) {
                    this.store = e,
                    (0, o.ky)(this, {}, {
                        autoBind: !0
                    })
                }
            }
            let i = () => (0, r.oR)().i18nStore
        },
        6540: function (e, t, n) {
            n.d(t, {
                E_: function () {
                    return c
                },
                Sz: function () {
                    return d
                },
                aD: function () {
                    return a
                }
            });
            var o = n(82674),
            r = n(17524),
            l = n(49208),
            i = n(52942),
            s = n(45678);
            class a {
                get editor() {
                    return this.store.appEditorStore.editor
                }
                add(e, t) {
                    var n;
                    this.get(e) || (this.layouts.push({
                            id: e,
                            ...t
                        }), null === (n = this.editor) || void 0 === n || n.trigger("".concat(s.m.layoutToggleId).concat(e), {
                            isOpen: !0
                        }))
                }
                remove(e, t) {
                    var n;
                    this.layouts = (null == t ? void 0 : t.force) ? this.layouts.filter(t => t.id !== e) : this.layouts.map(t => t.id === e ? {
                        ...t,
                        toRemove: !0
                    }
                         : t),
                    null === (n = this.editor) || void 0 === n || n.trigger("".concat(s.m.layoutToggleId).concat(e), {
                        isOpen: !1
                    })
                }
                get(e) {
                    return this.layouts.find(t => t.id === e)
                }
                clear() {
                    this.layouts = []
                }
                get layoutChildren() {
                    var e;
                    let {
                        children: t
                    } = this.store.appEditorStore.sdkProps;
                    return new Map(((null === (e = (0, l.Y)(t, i.Z)) || void 0 === e ? void 0 : e.filter(Boolean)) || []).map(e => {
                            let {
                                props: t
                            } = e;
                            return [t.id, t]
                        }))
                }
                constructor(e) {
                    this.layouts = [],
                    this.layoutsById = new Map,
                    this.store = e,
                    (0, o.ky)(this, {}, {
                        autoBind: !0
                    })
                }
            }
            let c = () => (0, r.oR)().layoutStore,
            d = () => (0, r.bh)().layoutStore
        },
        44085: function (e, t, n) {
            n.d(t, {
                Dm: function () {
                    return l
                },
                pP: function () {
                    return i
                }
            });
            var o = n(82674),
            r = n(17524);
            class l {
                show(e) {
                    this.isActive = !0,
                    this.content = e
                }
                hide() {
                    this.isActive = !1,
                    setTimeout(this.clear, 101)
                }
                clear() {
                    this.content = ""
                }
                constructor(e) {
                    this.isActive = !1,
                    this.content = "",
                    this.store = e,
                    (0, o.ky)(this, {}, {
                        autoBind: !0
                    })
                }
            }
            let i = () => (0, r.oR)().pointerBadgeStore
        },
        27265: function (e, t, n) {
            n.d(t, {
                PI: function () {
                    return s
                },
                Z_: function () {
                    return a
                }
            });
            var o = n(82674),
            r = n(17524),
            l = n(58730),
            i = n(49499);
            class s {
                get projectTypeFilter() {
                    return this._projectTypeFilter
                }
                get projectSourceFilter() {
                    return this._projectSourceFilter
                }
                get templates() {
                    return this._loadedTemplates
                }
                get projects() {
                    return this._loadedProjects
                }
                get filteredTemplates() {
                    return this.projectSourceFilter === i.z0.Existing ? this.projects : this.templates
                }
                async loadProjects() {
                    let e = await(0, i.jw)(this.projectTypeFilter);
                    this.setProjects(e)
                }
                async loadTemplates() {
                    var e;
                    let t;
                    let n = null === (e = this.store.appEditorStore.sdkOptions.templates) || void 0 === e ? void 0 : e.onLoad,
                    o = async() => await(0, i.qx)(this.projectTypeFilter);
                    if (n) {
                        let e = this.store.appEditorStore.editor;
                        t = await n({
                            editor: e,
                            fetchCommunityTemplates: o
                        })
                    } else
                        t = await o();
                    this.setTemplates(t)
                }
                async loadAllTemplates() {
                    await Promise.all([this.loadProjects(), this.loadTemplates()])
                }
                async removeProject(e) {
                    (0, l.py)(l.UN.Projects, e)
                }
                async setProjectTypeFilter(e) {
                    this._projectTypeFilter = e,
                    this.setProjects(void 0),
                    this.setTemplates(void 0)
                }
                setProjectSourceFilter(e) {
                    this._projectSourceFilter = e
                }
                setTemplates(e) {
                    this._loadedTemplates = e
                }
                setProjects(e) {
                    this._loadedProjects = e
                }
                constructor(e) {
                    this.store = e,
                    this._projectTypeFilter = this.store.appEditorStore.projectType,
                    this._projectSourceFilter = i.z0.Existing,
                    this._loadedProjects = void 0,
                    this._loadedTemplates = void 0,
                    (0, o.ky)(this, {}, {
                        autoBind: !0
                    })
                }
            }
            let a = () => (0, r.oR)().templatesStore
        },
        42250: function (e, t, n) {
            n.d(t, {
                Es: function () {
                    return a
                },
                U5: function () {
                    return c
                },
                UA: function () {
                    return s
                }
            });
            var o = n(82674),
            r = n(17524),
            l = n(45134),
            i = n(82652);
            class s {
                add(e, t) {
                    this.toasts.find(t => t.id === e) || this.toasts.push({
                        id: e,
                        ...t
                    })
                }
                addError(e, t) {
                    this.add(e, {
                        ...(0, i.HD)(t) ? {
                            header: t
                        }
                         : t,
                        variant: l.x7.Error
                    })
                }
                addWarning(e, t) {
                    this.add(e, {
                        ...(0, i.HD)(t) ? {
                            header: t
                        }
                         : t,
                        variant: l.x7.Warning
                    })
                }
                addSuccess(e, t) {
                    this.add(e, {
                        ...(0, i.HD)(t) ? {
                            header: t
                        }
                         : t,
                        variant: l.x7.Success
                    })
                }
                addInfo(e, t) {
                    this.add(e, {
                        ...(0, i.HD)(t) ? {
                            header: t
                        }
                         : t,
                        variant: l.x7.Info
                    })
                }
                remove(e) {
                    this.toasts = this.toasts.filter(t => t.id !== e)
                }
                constructor(e) {
                    this.toasts = [],
                    this.store = e,
                    (0, o.ky)(this, {}, {
                        autoBind: !0
                    })
                }
            }
            let a = () => (0, r.oR)().toastStore,
            c = () => (0, r.bh)().toastStore
        },
        69460: function (e, t, n) {
            n.d(t, {
                bU: function () {
                    return x
                },
                cY: function () {
                    return C
                },
                X2: function () {
                    return w
                },
                yT: function () {
                    return Z
                },
                RC: function () {
                    return S
                },
                mf: function () {
                    return k
                }
            });
            var o = n(49351),
            r = n(82674),
            l = n(7653),
            i = n(17524),
            s = n(49499),
            a = n(95474),
            c = n(82652),
            d = n(84891),
            u = n(38057),
            p = n(40036),
            g = n(27573);
            let m = e => {
                let {
                    icon: t,
                    layout: n,
                    tooltip: o,
                    className: r,
                    forceRemove: l,
                    removeLayouts: i
                } = e;
                return {
                    type: "button",
                    icon: t,
                    tooltip: o,
                    className: r,
                    size: "s",
                    editorEvents: {
                        ["".concat(a.mp.layoutToggleId).concat(n.id)]: e => {
                            let {
                                fromEvent: t,
                                setState: n
                            } = e;
                            n({
                                active: t.isOpen
                            })
                        }
                    },
                    onClick: e => {
                        let {
                            editor: t
                        } = e;
                        null == i || i.forEach(e => t.runCommand(a.vh.layoutRemove, {
                                id: e,
                                force: l
                            })),
                        t.runCommand(a.vh.layoutToggle, {
                            ...n
                        })
                    }
                }
            },
            h = {
                type: "static",
                layoutId: "leftPanelsContainer"
            },
            f = {
                width: 240,
                overflow: "hidden"
            };
            m({
                tooltip: "Blocks",
                removeLayouts: ["pagesLayers", "ps"],
                layout: {
                    id: "blocks",
                    layout: "panelBlocks",
                    header: {
                        label: "Blocks"
                    },
                    style: f,
                    placer: h
                }
            }),
            m({
                tooltip: "Pages & Layers",
                removeLayouts: ["blocks", "ps"],
                layout: {
                    id: "pagesLayers",
                    layout: "panelPagesLayers",
                    header: !1,
                    style: f,
                    placer: h
                }
            }),
            m({
                tooltip: "Page Settings",
                removeLayouts: ["pagesLayers", "blocks"],
                layout: {
                    id: "ps",
                    layout: "panelPageSettings",
                    header: {
                        label: "Page Settings"
                    },
                    style: {
                        marginLeft: 40
                    }
                }
            }),
            m({
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z" /></svg>',
                tooltip: "Custom Component",
                className: "gs-utl-mt-auto",
                layout: {
                    id: "customLayout",
                    layout: {
                        type: "custom",
                        component: () => (0, g.jsx)("div", {
                            children: "Custom Reat component"
                        })
                    },
                    header: {
                        label: "Custom"
                    },
                    style: {
                        marginLeft: 40
                    }
                }
            });
            let b = {
                type: "row",
                style: {
                    height: "100%"
                },
                children: [{
                        type: "sidebarLeft"
                    }, {
                        type: "canvasSidebarTop"
                    }, {
                        type: "sidebarRight"
                    }
                ]
            };
            var y = n(77735),
            v = n(57708);
            class x {
                get baseApiUrl() {
                    let {
                        isDev: e,
                        isStage: t
                    } = this;
                    return (0, c.XN)({
                        isDev: e,
                        isStage: t
                    })
                }
                get projectId() {
                    var e,
                    t;
                    let {
                        project: n,
                        storage: o
                    } = this.sdkOptions;
                    return this._projectId || (null === (t = (null == o ? void 0 : o.project) || (null == n ? void 0 : n.default)) || void 0 === t ? void 0 : null === (e = t.custom) || void 0 === e ? void 0 : e.id) || ""
                }
                get projectIdToLoad() {
                    return this.store.localSettingsStore.lastProjectId || this.projectId
                }
                get currentProjectId() {
                    return this.projectDataCustom.id || this.projectId
                }
                get isBrowserMode() {
                    return "browser" === this.displayMode
                }
                get sdkOptions() {
                    return this.sdkProps.options
                }
                get sdkPagesConfig() {
                    return this.sdkPagesConfigUpdates,
                    this.sdkOptions.pages
                }
                get sdkLayoutConfig() {
                    return this.sdkOptions.layout
                }
                get sdkComponentsConfig() {
                    return this.sdkOptions.components
                }
                get sdkCurrentLayout() {
                    let {
                        sdkLayoutConfig: e,
                        rootElWidth: t
                    } = this,
                    n = null == e ? void 0 : e.responsive,
                    o = (null == e ? void 0 : e.default) || b;
                    if (t && n) {
                        let e = Object.keys(n).map(Number).sort((e, t) => e - t).find(e => t <= e);
                        o = e ? n[e] : o
                    }
                    return o
                }
                get sdkCustomIcons() {
                    var e;
                    return null === (e = this.sdkOptions.customTheme) || void 0 === e ? void 0 : e.icons
                }
                get isProjectTypeEmail() {
                    return this.projectType === y.cd.email
                }
                get showPages() {
                    return this.isReady && !1 !== this.sdkPagesConfig && !this.isProjectTypeEmail
                }
                get showSelectors() {
                    return !this.isProjectTypeEmail
                }
                get sdkMisconfigurationError() {
                    if (this.isUsingAssetCloud || this.isUsingProjectCloud) {
                        var e,
                        t;
                        let n = null === (e = this.sdkOptions.project) || void 0 === e ? void 0 : e.id,
                        o = null === (t = this.sdkOptions.identity) || void 0 === t ? void 0 : t.id;
                        if (!n || !o)
                            return 'SDK Misconfiguration Error: When using assets.storageType == "cloud" or storage.type === "cloud", project.id and identity.id are required.'
                    }
                    return ""
                }
                get isUsingAssetCloud() {
                    var e;
                    return (null === (e = this.sdkOptions.assets) || void 0 === e ? void 0 : e.storageType) === a.UQ.cloud
                }
                get isUsingProjectSelfHosted() {
                    var e;
                    return (null === (e = this.sdkOptions.storage) || void 0 === e ? void 0 : e.type) === a.lt.self
                }
                get isUsingProjectCloud() {
                    var e;
                    return (null === (e = this.sdkOptions.storage) || void 0 === e ? void 0 : e.type) === a.lt.cloud
                }
                 * init() {
                    var e,
                    t;
                    let n,
                    o;
                    let {
                        store: r,
                        sdkOptions: l
                    } = this, {
                        lastProjectId: i,
                        lastProjectType: a
                    } = r.localSettingsStore,
                    c = null === (e = l.project) || void 0 === e ? void 0 : e.default, {
                        project: d
                    } = l.storage || {};
                    a && (this.store.templatesStore._projectTypeFilter = a),
                    i && (n = null === (t = (yield(0, s.jw)(a)).find(e => e.id === i)) || void 0 === t ? void 0 : t.data),
                    n ? o = n : d ? o = d : c && (o = c);
                    let u = (null == o ? void 0 : o.custom) || {},
                    p = u.projectType;
                    p && (this.projectType = p),
                    u.projectType = this.projectType,
                    this.setProjectDataCustom({
                        ...u,
                        id: this.projectIdToLoad
                    }),
                    yield r.pluginStore.initProjectPlugins(this.projectType),
                    this.editorKey++
                }
                setInstallEvent(e) {
                    this.installEvent = e
                }
                setAppInstalled(e) {
                    this.appInstalled = e
                }
                setDisplayMode(e) {
                    this.displayMode = e
                }
                setProject(e) {
                    let t = this.editor, {
                        id: n,
                        data: o,
                        isTemplate: r
                    } = e,
                    l = t.Storage.getConfig().options.local,
                    i = r ? "".concat(n, "__").concat((0, c.Mc)()) : n;
                    this._projectId = i,
                    l.key = i,
                    (0, c.Qr)(o) || this.loadProjectData({
                        ...o,
                        custom: {
                            ...o.custom,
                            id: i,
                            projectType: this.store.templatesStore.projectTypeFilter
                        }
                    })
                }
                setProjectDataCustom(e) {
                    let t = {
                        ...this.projectDataCustom,
                        ...e
                    };
                    this.projectDataCustom = t,
                    this.projectType = t.projectType || y.cd.web,
                    this.editor && (0, p.Hd)(this.editor, t),
                    t.id && this.store.localSettingsStore.setLocalState({
                        lastProjectId: t.id,
                        lastProjectType: this.projectType
                    })
                }
                loadProjectData(e) {
                    let t = e.custom || {};
                    if (j(e) !== this.projectType)
                        this.setNextProjectData(e), this.setProjectDataCustom(t), this.updateStudio();
                    else {
                        let n = this.editor;
                        n.loadProjectData(e),
                        n.UndoManager.clear(),
                        this.setProjectDataCustom(t)
                    }
                }
                setNextProjectData(e) {
                    this.nextProjectData = e
                }
                setLeftSidebarSize(e) {
                    this.leftSidebarSize = e
                }
                setRightSidebarSize(e) {
                    this.rightSidebarSize = e
                }
                setEditor(e) {
                    this.editor = e
                }
                setPreview(e) {
                    this.isInPreview = e
                }
                toggleCssPanel() {
                    this.isCssPanelActive = !this.isCssPanelActive
                }
                toggleLeftSidebar() {
                    this.isLeftSidebarOpen = !this.isLeftSidebarOpen,
                    this.refreshEditorPostTransition()
                }
                setLeftSidebarOpen(e) {
                    this.isLeftSidebarOpen = e,
                    this.refreshEditorPostTransition()
                }
                toggleRightSidebar() {
                    this.isRightSidebarOpen = !this.isRightSidebarOpen,
                    this.refreshEditorPostTransition()
                }
                setRightSidebarOpen(e) {
                    this.isRightSidebarOpen = e,
                    this.refreshEditorPostTransition()
                }
                setTopSidebarOpen(e) {
                    this.isTopSidebarOpen = e,
                    this.refreshEditorPostTransition()
                }
                setBottomSidebarOpen(e) {
                    this.isBottomSidebarOpen = e,
                    this.refreshEditorPostTransition()
                }
                refreshEditorPostTransition() {
                    setTimeout(() => {
                        var e;
                        return null === (e = this.editor) || void 0 === e ? void 0 : e.refresh()
                    }, this.transitionTime)
                }
                setCanvasPanning(e) {
                    this.isCanvasPanning = e
                }
                setSelectingTarget(e) {
                    this.isSelectingTarget = e
                }
                setSelectedDesignerTab(e) {
                    this.selectedDesignerTab = e
                }
                setCustomAssets(e) {
                    this.customAssets = e
                }
                setIsLoadingAssets(e) {
                    this.isLoadingAssets = e
                }
                setIsSaving(e) {
                    this.isSaving = e
                }
                setIsReady(e) {
                    this.isReady = e
                }
                setPanelPageSettings(e) {
                    this.panelPageSettings = {
                        ...this.panelPageSettings,
                        ...e
                    }
                }
                setSdkPagesConfig(e) {
                    this.sdkProps.options.pages = e ? {
                        ...this.sdkPagesConfig,
                        ...e
                    }
                     : e,
                    ++this.sdkPagesConfigUpdates
                }
                setRootElWidth(e) {
                    this.rootElWidth = e,
                    this.refreshEditorCanvas()
                }
                 * loadLicense() {
                    let {
                        editor: e
                    } = this;
                    try {
                        this.licenseCheckStarted = !0;
                        let {
                            licenseKey: t,
                            baseApiUrl: n,
                            studioSdkVersion: r
                        } = this;
                        null == e || e.trigger(d.W3, {
                            baseApiUrl: n
                        });
                        let l = (yield o.Z.post("".concat(n, "/sdk/").concat(t || "na"), {
                                params: {
                                    d: window.location.hostname,
                                    v: r
                                }
                            })).result || {}, {
                            license: i,
                            error: s,
                            plan: a
                        } = l;
                        s ? this.sdkLicenseError = s : (this.sdkLicense = i, (null == a ? void 0 : a.poweredBy) && (this.showPoweredBy = !0)),
                        null == e || e.trigger(d.v6, l)
                    } catch (t) {
                        this.licenseCheckRetry < 3 ? (this.licenseCheckRetry++, setTimeout(() => this.loadLicense(), 3e3)) : (console.log(t), this.showPoweredBy = !0, null == e || e.trigger(d.v6, {}))
                    }
                }
                 * updateStudio() {
                    let {
                        pluginStore: e
                    } = this.store, {
                        projectType: t
                    } = this.projectDataCustom;
                    yield e.initProjectPlugins(t),
                    this.editorKey++
                }
                refreshStudio() {
                    var e;
                    this.setNextProjectData(null === (e = this.editor) || void 0 === e ? void 0 : e.getProjectData()),
                    this.editorKey++
                }
                refreshEditorCanvas() {
                    var e;
                    null === (e = this.editor) || void 0 === e || e.refresh({
                        tools: !0
                    })
                }
                constructor(e, t) {
                    this.projectType = y.cd.web,
                    this.editor = void 0,
                    this.sdkProps = {},
                    this.sdkLicenseError = "",
                    this.licenseCheckRetry = 0,
                    this.showPoweredBy = !1,
                    this.isInPreview = !1,
                    this.isCssPanelActive = !1,
                    this.isLeftSidebarOpen = !0,
                    this.isRightSidebarOpen = !0,
                    this.isTopSidebarOpen = !0,
                    this.isBottomSidebarOpen = !0,
                    this.isSelectingTarget = !1,
                    this.leftSidebarSize = 240,
                    this.rightSidebarSize = 240,
                    this.transitionTime = 152,
                    this.topBarSize = 35,
                    this.isDev = !1,
                    this.isStage = !1,
                    this.editorKey = 0,
                    this.appInstalled = !1,
                    this.licenseKey = "",
                    this.licenseCheckStarted = !1,
                    this.studioSdkVersion = v.env.STUDIO_NPM_PACKAGE_VERSION,
                    this.projectDataCustom = {},
                    this.displayMode = "browser",
                    this.projectPlugins = [],
                    this.queryParams = {},
                    this.isCanvasPanning = !1,
                    this.selectedDesignerTab = "style",
                    this.customAssets = void 0,
                    this.nextProjectData = void 0,
                    this.isLoadingAssets = !1,
                    this.isSaving = !1,
                    this.isReady = !1,
                    this.sdkPagesConfigUpdates = 0,
                    this.panelPageSettings = {
                        isOpen: !1,
                        width: 300,
                        page: void 0
                    },
                    this.rootElWidth = 0,
                    this._projectId = "",
                    this.store = e,
                    t && Object.keys(t).forEach(e => {
                        let n = t[e];
                        void 0 !== n && (this[e] = n)
                    });
                    let n = (0, u.Ym)() ? window.location.search : "";
                    this.queryParams = (0, c.Z2)(n),
                    (0, r.ky)(this, {
                        sdkProps: !1
                    }, {
                        autoBind: !0
                    })
                }
            }
            let j = e => {
                var t;
                return (null === (t = e.custom) || void 0 === t ? void 0 : t.projectType) || y.cd.web
            },
            w = e => {
                (0, r.U5)(() => e.sdkCurrentLayout, () => e.refreshStudio())
            },
            Z = () => (0, i.oR)().appEditorStore,
            S = () => {
                try {
                    return Z()
                } catch (e) {}
            },
            C = () => (0, i.bh)().appEditorStore,
            k = () => {
                let [e, t] = (0, l.useState)(0), {
                    transitionTime: n
                } = (0, i.oR)().appEditorStore;
                return (0, l.useEffect)(() => {
                    setTimeout(() => t(e => ++e), n)
                }, [n]),
                [e]
            }
        },
        63755: function (e, t, n) {
            n.d(t, {
                K: function () {
                    return i
                },
                t: function () {
                    return s
                }
            });
            var o = n(82674),
            r = n(17524),
            l = n(95474);
            class i {
                setOpen(e) {
                    this.isOpen = e,
                    this.triggerEvent()
                }
                toggleOpen() {
                    this.isOpen = !this.isOpen,
                    this.triggerEvent()
                }
                triggerEvent() {
                    var e;
                    null === (e = this.store.appEditorStore.editor) || void 0 === e || e.trigger(l.mp.toggleBlocksPanel, {
                        isOpen: this.isOpen
                    })
                }
                constructor(e) {
                    this.isOpen = !1,
                    this.store = e,
                    (0, o.ky)(this, {}, {
                        autoBind: !0
                    })
                }
            }
            let s = () => (0, r.oR)().blockManagerStore
        },
        51689: function (e, t, n) {
            n.d(t, {
                w: function () {
                    return a
                },
                L: function () {
                    return c
                }
            });
            var o = n(82674),
            r = n(17524);
            let l = e => e.get("groups") || [],
            i = (e, t) => l(e).includes(t),
            s = (e, t) => {
                i(e, t) || e.set("groups", [...l(e), t])
            };
            class a {
                get sdkOptionStyles() {
                    var e;
                    return (null === (e = this.store.appEditorStore.sdkOptions.globalStyles) || void 0 === e ? void 0 : e.default) || []
                }
                get editor() {
                    return this.store.appEditorStore.editor
                }
                get DataSources() {
                    var e;
                    return null === (e = this.editor) || void 0 === e ? void 0 : e.DataSources
                }
                get recordsByCategory() {
                    let {
                        records: e,
                        sdkOptionStyles: t
                    } = this,
                    n = [],
                    o = e.reduce((e, t) => (e.set(t.get("id"), t), e), new Map);
                    return t.forEach(e => {
                        let {
                            id: t
                        } = e,
                        r = o.get(t);
                        r && (n.push(r), o.delete(t))
                    }),
                    Array.from(o).map(e => {
                        let [, t] = e;
                        t.get("_internal") || n.push(t)
                    }),
                    function (e) {
                        let t = new Map,
                        n = {
                            items: []
                        };
                        return e.forEach(e => {
                            let {
                                category: o,
                                item: r
                            } = e;
                            if (o) {
                                let e = t.get(o.id);
                                e ? (e.items.push(r), e.category = {
                                        ...e.category,
                                        ...o
                                    }) : t.set(o.id, {
                                    category: o,
                                    items: [r]
                                })
                            } else
                                n.items.push(r)
                        }),
                        [...Array.from(t).map(e => {
                                let [, t] = e;
                                return t
                            }), n].filter(e => e.items.length)
                    }
                    (n.map(e => ({
                                category: e.get("category"),
                                item: e
                            })))
                }
                setCategoryOpen(e, t) {
                    this.openCategories.set(e, t)
                }
                getDataSource() {
                    var e;
                    return null === (e = this.DataSources) || void 0 === e ? void 0 : e.get(this.dataSourceKeyid)
                }
                getRuleByGroup(e) {
                    var t;
                    return null === (t = this.editor) || void 0 === t ? void 0 : t.CssComposer.getAll().find(t => i(t, e))
                }
                addStyleRule(e) {
                    let t = e.get("id"),
                    n = e.get("selector"),
                    o = e.get("property"),
                    r = e.getPath("value"),
                    l = "globalStyles:".concat(t),
                    i = {
                        [o]: {
                            type: "data-variable",
                            path: r,
                            defaultValue: e.get("defaultValue")
                        }
                    },
                    a = this.getRuleByGroup(l);
                    if (a)
                        a.addStyle(i);
                    else {
                        var c;
                        let t = null === (c = this.editor) || void 0 === c ? void 0 : c.CssComposer.addCollection([{
                                        selectors: [],
                                        selectorsAdd: n,
                                        style: i
                                    }
                                ], {
                                extend: !0,
                                at: e.index
                            })[0];
                        t && s(t, l)
                    }
                }
                createDataSource() {
                    return this.DataSources.add({
                        id: this.dataSourceKeyid,
                        records: []
                    })
                }
                onLoad() {
                    var e;
                    let {
                        sdkOptionStyles: t
                    } = this;
                    if (!t.length) {
                        this.records = [];
                        return
                    }
                    let n = this.getDataSource();
                    n || (n = this.createDataSource()),
                    t.forEach(e => {
                        let t = n.getRecord(e.id);
                        if (t) {
                            let n = {
                                label: e.label,
                                field: e.field,
                                category: e.category
                            };
                            t.set({
                                ...n,
                                _undo: !0
                            })
                        } else
                            n.addRecord({
                                value: void 0,
                                ...e,
                                _internal: !0,
                                _undo: !0
                            })
                    }),
                    n.getRecords().forEach(e => {
                        this.addStyleRule(e)
                    }),
                    n.listenTo(n.records, "add", e => {
                        this.addStyleRule(e)
                    }),
                    null === (e = this.editor) || void 0 === e || e.UndoManager.add(n.records),
                    this.records = n.getRecords()
                }
                constructor(e) {
                    this.dataSourceKeyid = "globalStyles",
                    this.records = [],
                    this.openCategories = new Map,
                    this.store = e,
                    (0, o.ky)(this, {
                        openCategories: !1
                    }, {
                        autoBind: !0
                    })
                }
            }
            let c = () => (0, r.oR)().globalStylesStore
        },
        17524: function (e, t, n) {
            let o;
            n.d(t, {
                bh: function () {
                    return S
                },
                g3: function () {
                    return w
                },
                oR: function () {
                    return Z
                }
            });
            var r = n(27573),
            l = n(7653),
            i = n(82652),
            s = n(22394),
            a = n(6217),
            c = n(6540),
            d = n(44085),
            u = n(27265),
            p = n(42250),
            g = n(69460),
            m = n(63755),
            h = n(51689),
            f = n(46398),
            b = n(42640),
            y = n(98973);
            let v = (0, l.createContext)(void 0);
            class x {
                constructor(e) {
                    this.blockManagerStore = new m.K(this),
                    this.appEditorStore = new g.bU(this, null == e ? void 0 : e.appEditorStore),
                    this.localSettingsStore = new f.FT(null == e ? void 0 : e.localSettingsStore),
                    this.toastStore = new p.UA(this),
                    this.modalStore = new b.v(this),
                    this.i18nStore = new a.G(this),
                    this.pluginStore = new y.G(this),
                    this.pointerBadgeStore = new d.Dm(this),
                    this.contextMenu = new s.Zm(this),
                    this.layoutStore = new c.aD(this),
                    this.templatesStore = new u.PI(this),
                    this.globalStylesStore = new h.w(this),
                    this.appEditorStore.init(),
                    (0, i.Qz)() && (window.__gjss = this)
                }
            }
            let j = e => {
                (0, f.NB)(e.localSettingsStore),
                (0, g.X2)(e.appEditorStore)
            },
            w = e => {
                let {
                    children: t,
                    initialState: n
                } = e;
                return o = (0, l.useMemo)(() => {
                    let e = new x(n);
                    return j(e),
                    e
                }, []),
                (0, r.jsx)(v.Provider, {
                    value: o,
                    children: t
                })
            },
            Z = () => {
                let e = (0, l.useContext)(v);
                if (!e)
                    throw Error("useStore must be used inside of StoreProvider");
                return e
            },
            S = () => {
                if (!o)
                    throw Error("Store has not been initialized");
                return o
            }
        },
        46398: function (e, t, n) {
            n.d(t, {
                FT: function () {
                    return p
                },
                Hc: function () {
                    return m
                },
                NB: function () {
                    return g
                },
                rB: function () {
                    return a
                }
            });
            var o = n(82674),
            r = n(17524),
            l = n(33719),
            i = n(38057),
            s = n(95474);
            let a = "gs-utl-dark",
            c = () => (0, i.Ym)() && window.matchMedia("(prefers-color-scheme: dark)").matches,
            d = e => "dark" === e || "auto" === e && c(),
            u = (e, t) => {
                if (e && (0, i.Ym)() && t.rootEl) {
                    let {
                        classList: n
                    } = t.rootEl,
                    o = !1;
                    if (d(e) ? (n.add(a), o = !0) : n.remove(a), t.updateAppShell) {
                        let e = document.head.querySelector('meta[name="theme-color"]');
                        e && (e.content = o ? "#18181b" : "#ffffff")
                    }
                }
            };
            class p {
                init() {
                    u(this.theme, this)
                }
                changeTheme(e) {
                    u(e, this),
                    (0, l.RY)(this.key, {
                        theme: e
                    })
                }
                setTheme(e) {
                    this.theme = e
                }
                setRootEl(e) {
                    this.rootEl = e
                }
                setLocalState(e) {
                    Object.keys(e).forEach(t => {
                        let n = e[t];
                        void 0 !== n && (this[t] = n)
                    }),
                    (0, l.RY)(this.key, e)
                }
                get isDarkTheme() {
                    return d(this.theme)
                }
                constructor(e) {
                    this.key = "",
                    this.theme = s.yD.auto,
                    this.lastProjectId = "",
                    this.updateAppShell = !1,
                    this.rootEl = void 0,
                    e && Object.keys(e).forEach(t => {
                        let n = e[t];
                        void 0 !== n && (this[t] = n)
                    }),
                    (0, o.ky)(this, {}, {
                        autoBind: !0
                    }),
                    this.init()
                }
            }
            let g = e => {
                (0, o.U5)(() => e.theme, t => {
                    e.changeTheme(t)
                })
            },
            m = () => (0, r.oR)().localSettingsStore
        },
        42640: function (e, t, n) {
            n.d(t, {
                a: function () {
                    return i
                },
                v: function () {
                    return l
                }
            });
            var o = n(82674),
            r = n(17524);
            class l {
                setModalProps(e) {
                    this.modalProps = {
                        title: "",
                        size: "l",
                        fullH: !1,
                        buttons: [],
                        ...e
                    }
                }
                open(e) {
                    let {
                        content: t,
                        ...n
                    } = e;
                    this.isOpen = !0,
                    this.content = t,
                    this.setModalProps(n)
                }
                close() {
                    this.isOpen = !1,
                    setTimeout(this.clear, 101)
                }
                clear() {
                    this.content = "",
                    this.setModalProps({
                        size: this.modalProps.size
                    })
                }
                confirm(e) {
                    let {
                        content: t,
                        size: n = "m",
                        onConfirm: o,
                        confirmButton: r,
                        ...l
                    } = e;
                    this.isOpen = !0,
                    this.content = t,
                    this.setModalProps({
                        ...l,
                        size: n,
                        buttons: [{
                                children: "Cancel",
                                onClick: this.close,
                                size: "m2"
                            }, {
                                children: "Confirm",
                                onClick: () => {
                                    null == o || o(),
                                    this.close()
                                },
                                size: "m2",
                                variant: "pr",
                                ...r
                            }
                        ]
                    })
                }
                constructor(e) {
                    this.isOpen = !1,
                    this.title = "",
                    this.content = "",
                    this.size = "l",
                    this.fullH = !1,
                    this.modalProps = {},
                    this.buttons = [],
                    this.store = e,
                    (0, o.ky)(this, {}, {
                        autoBind: !0
                    })
                }
            }
            let i = () => (0, r.oR)().modalStore
        },
        98973: function (e, t, n) {
            n.d(t, {
                CC: function () {
                    return u
                },
                G: function () {
                    return c
                },
                GP: function () {
                    return g
                },
                RQ: function () {
                    return m
                },
                Tk: function () {
                    return p
                }
            });
            var o = n(82674),
            r = n(17524),
            l = n(90623),
            i = n(58730),
            s = n(38057),
            a = n(82652);
            class c {
                get hasPending() {
                    return !!this.pendingInstalled.length || !!this.pendingUninstalled.length
                }
                 * initProjectPlugins(e) {
                    this.pendingInstalled = [],
                    this.pendingUninstalled = [];
                    let t = (yield u()).filter(t => t.projectType.includes(e));
                    this.projectPlugins = [...t]
                }
                getPluginsToLoad(e, t) {
                    let n = [...(0, l.Z)(e, {
                            appStore: t
                        }), ...this.projectPlugins || []],
                    o = t.sdkOptions.plugins || [];
                    return (0, a.mf)(o) ? o({
                        plugins: n
                    }) : [...n, ...o]
                }
                addPendingInstalled(e) {
                    let {
                        pendingInstalled: t,
                        pendingUninstalled: n
                    } = this,
                    o = e.id;
                    n.includes(o) ? this.pendingUninstalled = n.filter(e => e !== o) : t.includes(o) || t.push(o)
                }
                addPendingUninstalled(e) {
                    let {
                        pendingInstalled: t,
                        pendingUninstalled: n
                    } = this,
                    o = e.id;
                    t.includes(o) ? this.pendingInstalled = t.filter(e => e !== o) : n.push(o)
                }
                setSelectedShown(e) {
                    this.selectedShown = e
                }
                constructor(e) {
                    this.loadCounter = 0,
                    this.pendingInstalled = [],
                    this.pendingUninstalled = [],
                    this.selectedShown = !1,
                    this.store = e,
                    (0, o.ky)(this, {}, {
                        autoBind: !0
                    })
                }
            }
            let d = {
                db: i.wP.gjsStudio
            },
            u = () => new Promise(async e => {
                let t = [];
                try {
                    t = await(0, i.w0)(i.UN.Settings, "plugins", d) || []
                } catch (e) {
                    (0, s.Ym)() && console.error(e)
                }
                e(t)
            }),
            p = e => new Promise(async t => {
                try {
                    let t = [...await u(), e];
                    h().addPendingInstalled(e),
                    await(0, i.oi)(i.UN.Settings, "plugins", t, d)
                } catch (e) {
                    console.error(e)
                }
                t()
            }),
            g = e => new Promise(async t => {
                try {
                    let t = (await u()).filter(t => t.id !== e.id);
                    h().addPendingUninstalled(e),
                    await(0, i.oi)(i.UN.Settings, "plugins", t, d)
                } catch (e) {
                    console.error(e)
                }
                t()
            }),
            m = () => (0, r.oR)().pluginStore,
            h = () => (0, r.bh)().pluginStore
        },
        76076: function (e, t, n) {
            var o,
            r,
            l,
            i;
            n.d(t, {
                X: function () {
                    return r
                },
                m: function () {
                    return o
                }
            }),
            (l = o || (o = {})).canvas = "canvas",
            l.layers = "layers",
            (i = r || (r = {})).selectParent = "selectParent",
            i.duplicate = "duplicate",
            i.delete = "delete",
            i.symbolCreate = "symbolCreate",
            i.symbolDetach = "symbolDetach",
            i.symbolOverride = "symbolOverride",
            i.symbolOverrideClear = "symbolOverrideClear"
        },
        95474: function (e, t, n) {
            n.d(t, {
                UQ: function () {
                    return d
                },
                Yq: function () {
                    return u
                },
                TW: function () {
                    return m
                },
                Yi: function () {
                    return g
                },
                lt: function () {
                    return h
                },
                vh: function () {
                    return y.v
                },
                mp: function () {
                    return y.m
                },
                yD: function () {
                    return f
                },
                x7: function () {
                    return b.x7
                }
            });
            var o,
            r,
            l,
            i,
            s,
            a,
            c,
            d,
            u,
            p,
            g,
            m,
            h,
            f,
            b = n(45134),
            y = n(45678);
            (o = d || (d = {})).self = "self",
            o.cloud = "cloud",
            (r = u || (u = {})).componentOutline = "componentOutline",
            r.preview = "preview",
            r.fullscreen = "fullscreen",
            r.showCode = "showCode",
            r.showImportCode = "showImportCode",
            r.clearCanvas = "clearCanvas",
            r.store = "store",
            r.undo = "undo",
            r.redo = "redo",
            (l = p || (p = {})).text = "text",
            l.number = "number",
            l.color = "color",
            l.select = "select",
            l.radio = "radio",
            (i = g || (g = {})).left = "left",
            i.right = "right",
            i.top = "top",
            i.bottom = "bottom",
            (s = m || (m = {})).popover = "popover",
            s.absolute = "absolute",
            s.static = "static",
            s.dialog = "dialog",
            (a = h || (h = {})).browser = "browser",
            a.self = "self",
            a.cloud = "cloud",
            n(30353),
            (c = f || (f = {})).dark = "dark",
            c.light = "light",
            c.auto = "auto",
            n(76076)
        },
        84891: function (e, t, n) {
            n.d(t, {
                Bo: function () {
                    return o
                },
                QN: function () {
                    return l
                },
                W3: function () {
                    return s
                },
                YO: function () {
                    return i
                },
                h: function () {
                    return r
                },
                v6: function () {
                    return a
                }
            });
            let o = "app.grapesjs.com",
            r = "app-stage.grapesjs.com",
            l = [o, r, "localhost", "127.0.0.1", ".local-credentialless.webcontainer.io", ".local.webcontainer.io", "-sandpack.codesandbox.io"],
            i = "INTERNAL_LICENSE_KEY",
            s = "license:check:start",
            a = "license:check:end"
        },
        40969: function (e, t, n) {
            n.d(t, {
                Z: function () {
                    return o
                }
            });
            function o(e, t, n) {
                let o,
                r,
                l,
                i,
                s;
                let a = void 0 === t ? 100 : t;
                function c() {
                    let t = Date.now() - i;
                    t < a && t >= 0 ? o = setTimeout(c, a - t) : (o = null, n || (s = e.apply(l, r), l = r = null))
                }
                let d = function () {
                    l = this,
                    r = arguments,
                    i = Date.now();
                    let t = n && !o;
                    return o || (o = setTimeout(c, a)),
                    t && (s = e.apply(l, r), l = r = null),
                    s
                };
                return d.clear = function () {
                    o && (clearTimeout(o), o = null)
                },
                d.flush = function () {
                    o && (s = e.apply(l, r), l = r = null, clearTimeout(o), o = null)
                },
                d
            }
        },
        38057: function (e, t, n) {
            n.d(t, {
                K4: function () {
                    return g
                },
                LL: function () {
                    return a
                },
                Ym: function () {
                    return r
                },
                cb: function () {
                    return m
                },
                ig: function () {
                    return u
                },
                jz: function () {
                    return h
                },
                sT: function () {
                    return l
                },
                vQ: function () {
                    return s
                },
                yu: function () {
                    return d
                }
            });
            var o = n(82652);
            let r = () => !0,
            l = e => e && e.stopPropagation(),
            i = (e, t) => {
                let n = n => n.key === e && t();
                return document.addEventListener("keydown", n),
                () => document.removeEventListener("keydown", n)
            },
            s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = document.createElement("textarea");
                t.value = e,
                t.setAttribute("readonly", ""),
                t.style.position = "absolute",
                t.style.left = "-9999px",
                document.body.appendChild(t),
                t.select(),
                document.execCommand("copy"),
                document.body.removeChild(t)
            },
            a = e => i("Escape", e),
            c = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = (0, o.HD)(e) ? {
                    id: e,
                    src: e
                }
                 : e;
                return new Promise((e, o) => {
                    var r,
                    l;
                    let i = document.querySelector('script[src="'.concat(n.src, '"]')), {
                        id: s
                    } = n;
                    if (i)
                        return null === (l = t.onScript) || void 0 === l || l.call(t, i), e(s);
                    let a = document.createElement("script");
                    a.src = n.src,
                    a.onload = () => e(s),
                    a.onerror = () => o(s),
                    document.head.appendChild(a),
                    null === (r = t.onScript) || void 0 === r || r.call(t, a)
                })
            },
            d = e => Promise.allSettled(e.map(e => c(e)));
            function u(e) {
                let t = e => {
                    if (e.length) {
                        var n;
                        let o = e.shift(),
                        r = function (e) {
                            let t = e.ownerDocument.createElement("script");
                            return t.text = e.innerHTML,
                            Array.from(e.attributes).forEach(e => t.setAttribute(e.nodeName, e.nodeValue)),
                            t
                        }
                        (o);
                        r.onerror = r.onload = t.bind(null, e),
                        null === (n = o.parentNode) || void 0 === n || n.replaceChild(r, o)
                    }
                };
                t(Array.from(e.querySelectorAll("script")))
            }
            let p = e => new DOMParser().parseFromString(e, "text/html"),
            g = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return p("<body>".concat(e, "</body>")).body.innerHTML
            },
            m = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return p("<head>".concat(e, "</head>")).head.innerHTML
            },
            h = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = new DOMParser().parseFromString(e, "text/html");
                if (t) {
                    let e = n.querySelectorAll("svg")[0].style || {},
                    r = (0, o.hj)(t) ? "".concat(t, "px") : t;
                    e.width = r,
                    e.height = r,
                    e.fill = "currentColor"
                }
                return new XMLSerializer().serializeToString(n)
            }
        },
        40036: function (e, t, n) {
            n.d(t, {
                $c: function () {
                    return S
                },
                $k: function () {
                    return g
                },
                Ah: function () {
                    return C
                },
                C$: function () {
                    return p
                },
                Hd: function () {
                    return y
                },
                Hl: function () {
                    return w
                },
                Il: function () {
                    return x
                },
                NC: function () {
                    return d
                },
                NM: function () {
                    return v
                },
                pd: function () {
                    return f
                },
                s5: function () {
                    return j
                },
                um: function () {
                    return Z
                },
                wX: function () {
                    return u
                }
            });
            var o = n(27573),
            r = n(82652),
            l = n(30353),
            i = n(10383),
            s = n(41062),
            a = n(37093),
            c = n(21133);
            let d = e => e.getSymbolOverride() ? (0, o.jsx)(l.ZP, {
                icon: l.do.rhombusOutline,
                size: s.qv.s3x
            }) : (0, o.jsx)(i.Z, {
                className: (0, a.Z)("w-4 fill-current"),
                svg: e.getIcon()
            }),
            u = e => {
                e.getModel().set({
                    changesCount: e.getDirtyCount() + 1
                })
            },
            p = e => e && e === e.em.Pages.getMain(),
            g = {
                title: e => {
                    let {
                        cmp: t
                    } = e;
                    return "title" === t.tagName
                },
                favicon: e => {
                    var t;
                    let {
                        cmp: n
                    } = e;
                    return "link" === n.tagName && (null === (t = n.attributes.attributes) || void 0 === t ? void 0 : t.rel) === "icon"
                },
                description: e => {
                    var t;
                    let {
                        cmp: n
                    } = e;
                    return "meta" === n.tagName && (null === (t = n.attributes.attributes) || void 0 === t ? void 0 : t.name) === "description"
                },
                keywords: e => {
                    var t;
                    let {
                        cmp: n
                    } = e;
                    return "meta" === n.tagName && (null === (t = n.attributes.attributes) || void 0 === t ? void 0 : t.name) === "keywords"
                },
                socialTitle: e => {
                    var t;
                    let {
                        cmp: n
                    } = e;
                    return "meta" === n.tagName && (null === (t = n.attributes.attributes) || void 0 === t ? void 0 : t.property) === "og:title"
                },
                socialImage: e => {
                    var t;
                    let {
                        cmp: n
                    } = e;
                    return "meta" === n.tagName && (null === (t = n.attributes.attributes) || void 0 === t ? void 0 : t.property) === "og:image"
                },
                socialDescription: e => {
                    var t;
                    let {
                        cmp: n
                    } = e;
                    return "meta" === n.tagName && (null === (t = n.attributes.attributes) || void 0 === t ? void 0 : t.property) === "og:description"
                },
                charset: e => {
                    var t;
                    let {
                        cmp: n
                    } = e;
                    return "meta" === n.tagName && (null === (t = n.attributes.attributes) || void 0 === t ? void 0 : t.charset)
                },
                viewport: e => {
                    var t;
                    let {
                        cmp: n
                    } = e;
                    return "meta" === n.tagName && (null === (t = n.attributes.attributes) || void 0 === t ? void 0 : t.name) === "viewport"
                },
                robots: e => {
                    var t;
                    let {
                        cmp: n
                    } = e;
                    return "meta" === n.tagName && (null === (t = n.attributes.attributes) || void 0 === t ? void 0 : t.name) === "robots"
                },
                generator: e => {
                    var t;
                    let {
                        cmp: n
                    } = e;
                    return "meta" === n.tagName && (null === (t = n.attributes.attributes) || void 0 === t ? void 0 : t.name) === "generator"
                }
            },
            m = e => {
                for (let t in g)
                    if (g[t]({
                            cmp: e
                        }))
                        return t
            },
            h = (e, t, n) => {
                let o = [],
                r = n;
                return e.getMainComponent().findType(c.v0).forEach(e => {
                    o.push(e),
                    r = (r || "") + e.getInnerHTML()
                }), {
                    components: o,
                    html: r,
                    changed: r !== t
                }
            },
            f = (e, t) => {
                let n = {
                    ...t
                },
                o = e.getMainComponent(), {
                    head: r
                } = o;
                if (r) {
                    let o = [],
                    l = r.components();
                    l.forEach(e => {
                        g.title({
                            cmp: e
                        }) ? (e.components(t.title), delete n.title) : g.favicon({
                            cmp: e
                        }) ? (e.addAttributes({
                                href: t.favicon
                            }), delete n.favicon) : g.description({
                            cmp: e
                        }) ? (e.addAttributes({
                                content: t.description
                            }), delete n.description) : g.keywords({
                            cmp: e
                        }) ? (e.addAttributes({
                                content: t.keywords
                            }), delete n.keywords) : g.socialTitle({
                            cmp: e
                        }) ? (e.addAttributes({
                                content: t.socialTitle
                            }), delete n.socialTitle) : g.socialDescription({
                            cmp: e
                        }) ? (e.addAttributes({
                                content: t.socialDescription
                            }), delete n.socialDescription) : g.socialImage({
                            cmp: e
                        }) ? (e.addAttributes({
                                content: t.socialImage
                            }), delete n.socialImage) : m(e) || o.push(e)
                    });
                    let i = e.em.Parser.parseHtml("<!DOCTYPE html><html><head>".concat(t.customCodeHead, "</head></html>"));
                    i.head && (l.remove(o), i.head.components && l.add(i.head.components), delete n.customCodeHead)
                }
                let l = h(e, n.customCodeBody);
                if (l.changed) {
                    let [e, ...t] = l.components;
                    (e || o.append({
                            type: c.v0
                        })[0]).components(n.customCodeBody),
                    t.forEach(e => e.remove()),
                    delete n.customCodeBody
                }
                return e.set("settings", n)
            },
            b = e => {
                var t;
                let n = {
                    ...null !== (t = e.get("settings")) && void 0 !== t ? t : {}
                }, {
                    head: o
                } = e.getMainComponent();
                if (o) {
                    let e = [];
                    o.components().forEach(t => {
                        let {
                            content: o,
                            href: r
                        } = t.getAttributes({
                            noClass: !0,
                            noStyle: !0
                        });
                        g.title({
                            cmp: t
                        }) ? n.title = t.getInnerHTML() : g.favicon({
                            cmp: t
                        }) ? n.favicon = r : g.description({
                            cmp: t
                        }) ? n.description = o : g.keywords({
                            cmp: t
                        }) ? n.keywords = o : g.socialTitle({
                            cmp: t
                        }) ? n.socialTitle = o : g.socialDescription({
                            cmp: t
                        }) ? n.socialDescription = o : g.socialImage({
                            cmp: t
                        }) ? n.socialImage = o : m(t) || e.push(t.toHTML())
                    }),
                    e.length && (n.customCodeHead = e.join("\n"))
                }
                return n.customCodeBody = h(e, n.customCodeBody).html,
                n
            },
            y = (e, t) => {
                e.getModel().set("customData", {
                    ...v(e),
                    ...t
                })
            },
            v = e => {
                var t;
                return null !== (t = e.getModel().get("customData")) && void 0 !== t ? t : {}
            },
            x = e => {
                var t;
                return null !== (t = null == e ? void 0 : e.projectDataCustom.globalPageSettings) && void 0 !== t ? t : {}
            },
            j = e => {
                var t,
                n;
                let {
                    page: o,
                    key: r,
                    appEditorStore: l,
                    def: i = "",
                    defPage: s = ""
                } = e;
                return null !== (n = o ? null !== (t = b(o)[r]) && void 0 !== t ? t : s : x(l)[r]) && void 0 !== n ? n : i
            },
            w = (e, t) => {
                let n = v(e.em.getEditor()).globalPageSettings || {};
                return j({
                    page: e,
                    key: t
                }) || n[t]
            },
            Z = (e, t) => {
                var n;
                let o = null !== (n = null == e ? void 0 : e.getName()) && void 0 !== n ? n : "",
                l = {
                    page: e,
                    appEditorStore: t
                };
                return {
                    name: o,
                    slug: j({
                        ...l,
                        key: "slug",
                        defPage: (0, r.lV)(o)
                    }),
                    title: j({
                        ...l,
                        key: "title",
                        defPage: o
                    }),
                    description: j({
                        ...l,
                        key: "description"
                    }),
                    favicon: j({
                        ...l,
                        key: "favicon"
                    }),
                    keywords: j({
                        ...l,
                        key: "keywords"
                    }),
                    socialTitle: j({
                        ...l,
                        key: "socialTitle",
                        defPage: o
                    }),
                    socialImage: j({
                        ...l,
                        key: "socialImage"
                    }),
                    socialDescription: j({
                        ...l,
                        key: "socialDescription"
                    }),
                    customCodeHead: j({
                        ...l,
                        key: "customCodeHead"
                    }),
                    customCodeBody: j({
                        ...l,
                        key: "customCodeBody"
                    })
                }
            },
            S = (e, t) => {
                var n;
                return null === (n = e.Styles.getSectors().find(e => !!e.getProperty(t))) || void 0 === n ? void 0 : n.getProperty(t)
            },
            C = (e, t, n) => {
                let o = S(e, t);
                return null == o ? void 0 : o.getProperty(n)
            }
        },
        95816: function (e, t, n) {
            n.d(t, {
                O8: function () {
                    return i
                },
                g$: function () {
                    return a
                },
                yj: function () {
                    return s
                }
            });
            var o = n(7653),
            r = n(42291),
            l = n(82652);
            function i(e, t) {
                (0, o.useEffect)(() => {
                    let n = "pointerdown", {
                        current: o
                    } = e;
                    if (o && t.enabled)
                        return document.addEventListener(n, r), () => {
                            document.removeEventListener(n, r)
                        };
                    function r(e) {
                        let n = e.target;
                        o && n && !o.contains(n) && t.onTrigger(n)
                    }
                }, [e.current, t.enabled])
            }
            let s = (e, t) => {
                let {
                    boxRectScreen: n,
                    vwHeight: r,
                    initialPos: l = "top-right"
                } = t,
                i = l.split("-"),
                s = i[0],
                a = i[1],
                c = "top" === s ? "bottom" : "top",
                d = "right" === a ? "left" : "right";
                (0, o.useLayoutEffect)(() => {
                    let o = e.current;
                    if (o) {
                        let {
                            offsetWidth: e,
                            offsetHeight: l
                        } = o,
                        i = n.y - l,
                        u = n.x + n.width - e,
                        p = n.height + l > r,
                        g = i < 0;
                        if (t.setPos("".concat(g && !p ? c : s, "-").concat(u < 0 ? d : a)), p) {
                            let e = n.y + n.height;
                            o.style.top = g ? "".concat(parseInt("".concat( - (e < 0 ? i - e : i))), "px") : ""
                        } else
                            o.style.top = ""
                    }
                }, [e.current, n])
            },
            a = e => {
                let {
                    ref: t,
                    show: n,
                    node: i,
                    styles: s,
                    update: a,
                    reload: c
                } = e,
                d = {
                    all: "initial",
                    zIndex: "10",
                    fontFamily: "inherit",
                    ...s
                };
                (0, o.useEffect)(() => {
                    let e = t.current;
                    if (e && n) {
                        if (!e.__sh) {
                            let t = e.attachShadow({
                                mode: "closed"
                            });
                            e.__sh = (0, r.createRoot)(t)
                        }
                        e.__sh.render(i),
                        Object.keys(d).forEach(t => {
                            e.style.setProperty((0, l.iS)(t), d[t], "important")
                        });
                        let t = new MutationObserver(c);
                        t.observe(e, {
                            attributeFilter: ["style"]
                        });
                        let n = new MutationObserver(e => e[0].removedNodes && c());
                        return n.observe(e.parentNode, {
                            childList: !0
                        }),
                        () => {
                            t.disconnect(),
                            n.disconnect()
                        }
                    }
                }, [t.current, n, a])
            }
        },
        82652: function (e, t, n) {
            n.d(t, {
                Fl: function () {
                    return c
                },
                HD: function () {
                    return h
                },
                Kn: function () {
                    return y
                },
                Mc: function () {
                    return Z
                },
                Oc: function () {
                    return s
                },
                Qr: function () {
                    return v
                },
                Qz: function () {
                    return a
                },
                RH: function () {
                    return x
                },
                W3: function () {
                    return o.W3
                },
                XN: function () {
                    return l
                },
                Xq: function () {
                    return m
                },
                Z2: function () {
                    return w
                },
                ZT: function () {
                    return p
                },
                _s: function () {
                    return i
                },
                cj: function () {
                    return g
                },
                dp: function () {
                    return j
                },
                hj: function () {
                    return f
                },
                iS: function () {
                    return u
                },
                kC: function () {
                    return d
                },
                lV: function () {
                    return S
                },
                mf: function () {
                    return b
                },
                v6: function () {
                    return o.v6
                }
            });
            var o = n(84891),
            r = n(38057);
            let l = e => {
                let {
                    isDev: t,
                    isStage: n
                } = e,
                r = n ? o.h : o.Bo;
                return "".concat(t ? "" : "https://".concat(r), "/api")
            },
            i = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                    width: t = 300,
                    height: n,
                    text: o = "IMAGE",
                    bg: r = "777",
                    fg: l = "white"
                } = e;
                return "https://placehold.co/".concat(t).concat(n ? "x".concat(n) : "", "/").concat(r, "/").concat(l, ".png?text=").concat(o)
            },
            s = i(),
            a = () => {
                let e = (0, r.Ym)() && window.location.hostname;
                return !!e && (o.QN.includes(e) || o.QN.some(t => e.endsWith(t)))
            },
            c = () => ((0, r.Ym)() && window.location.hostname) === o.Bo,
            d = e => e && e.charAt(0).toUpperCase() + e.substring(1),
            u = e => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase()),
            p = () => {},
            g = 240,
            m = e => void 0 !== e,
            h = e => "string" == typeof e,
            f = e => "number" == typeof e;
            function b(e) {
                return "function" == typeof e
            }
            function y(e) {
                return e && !Array.isArray(e) && "object" == typeof e
            }
            let v = e => !e || 0 === Object.keys(e).length,
            x = (e, t) => {
                let n = {
                    ...e
                },
                o = {
                    ...t
                };
                for (let e in o) {
                    let t = n[e],
                    r = o[e];
                    y(t) && y(r) ? n[e] = x(t, r) : n[e] = r
                }
                return n
            },
            j = (e, t) => {
                let n = (e || "").toLocaleLowerCase(),
                o = (t || "").toLocaleLowerCase();
                return n.includes(o)
            },
            w = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return Object.fromEntries(new URLSearchParams("?" === e[0] ? e.substring(1) : e))
            },
            Z = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
                t = "",
                n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                o = n.length;
                for (let r = 0; r < e; r++)
                    t += n.charAt(Math.floor(Math.random() * o));
                return t
            },
            S = e => (e || "").toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-._]+/g, "").replace(/--+/g, "-").trim()
        },
        33719: function (e, t, n) {
            n.d(t, {
                RY: function () {
                    return i
                },
                e_: function () {
                    return l
                },
                xH: function () {
                    return r
                }
            });
            var o = n(38057);
            let r = "gsLocalState",
            l = (e, t) => {
                let n;
                try {
                    let t = (0, o.Ym)() && e && localStorage.getItem(e);
                    t && (n = JSON.parse(t))
                } catch (e) {
                    console.error(e)
                }
                return {
                    lastProjectId: "",
                    ...t,
                    ...n
                }
            },
            i = (e, t) => {
                let n = {
                    ...l(e),
                    ...t
                };
                try {
                    (0, o.Ym)() && e && localStorage.setItem(e, JSON.stringify(n))
                } catch (e) {
                    console.error(e)
                }
                return n
            }
        },
        37093: function (e, t, n) {
            n.d(t, {
                Z: function () {
                    return r
                },
                cx: function () {
                    return o
                }
            });
            let o = r;
            function r() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return (Array.isArray(t[0]) ? t[0] : [...t]).filter(Boolean).flatMap(e => "string" == typeof e ? e.split(" ").map(e => {
                        if (!(e = e.replace(/gjs-/g, "gs-utl-")).includes("gs-utl-") && !e.startsWith("gs-")) {
                            let t = e.split(":"),
                            n = t.pop(),
                            o = t.join(":"),
                            r = null == n ? void 0 : n.startsWith("!"),
                            l = r ? null == n ? void 0 : n.slice(1) : n,
                            i = "gs-utl-".concat(l),
                            s = r ? "!".concat(i) : i;
                            return o ? "".concat(o, ":").concat(s) : s
                        }
                        return e
                    }) : e).join(" ")
            }
        },
        41693: function (e, t, n) {
            n.d(t, {
                Z: function () {
                    return o
                }
            });
            function o(e) {
                let t = e.indexOf("(") + 1,
                n = e.lastIndexOf(")");
                return {
                    name: e.substring(0, t - 1).trim(),
                    value: String.prototype.substring.apply(e, [t, n >= 0 ? n : void 0]).trim()
                }
            }
        },
        49208: function (e, t, n) {
            n.d(t, {
                Y: function () {
                    return r
                }
            });
            var o = n(7653);
            let r = (e, t) => o.Children.map(e, e => e && e.type === t ? e : null)
        },
        77735: function (e, t, n) {
            var o,
            r;
            n.d(t, {
                Xq: function () {
                    return l
                },
                cd: function () {
                    return o
                }
            });
            let l = e => void 0 !== e;
            (r = o || (o = {})).web = "web",
            r.email = "email"
        }
    }
]);
