(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 95057, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        formatUrl: function() {
            return i
        },
        formatWithValidation: function() {
            return d
        },
        urlObjectKeys: function() {
            return s
        }
    };
    for (var n in o)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: o[n]
        });
    let a = e.r(90809)._(e.r(98183))
      , l = /https?|ftp|gopher|file/;
    function i(e) {
        let {auth: t, hostname: r} = e
          , o = e.protocol || ""
          , n = e.pathname || ""
          , i = e.hash || ""
          , s = e.query || ""
          , d = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "",
        e.host ? d = t + e.host : r && (d = t + (~r.indexOf(":") ? `[${r}]` : r),
        e.port && (d += ":" + e.port)),
        s && "object" == typeof s && (s = String(a.urlQueryToSearchParams(s)));
        let c = e.search || s && `?${s}` || "";
        return o && !o.endsWith(":") && (o += ":"),
        e.slashes || (!o || l.test(o)) && !1 !== d ? (d = "//" + (d || ""),
        n && "/" !== n[0] && (n = "/" + n)) : d || (d = ""),
        i && "#" !== i[0] && (i = "#" + i),
        c && "?" !== c[0] && (c = "?" + c),
        n = n.replace(/[?#]/g, encodeURIComponent),
        c = c.replace("#", "%23"),
        `${o}${d}${n}${c}${i}`
    }
    let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
    function d(e) {
        return i(e)
    }
}
, 18581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let o = e.r(71645);
    function n(e, t) {
        let r = (0,
        o.useRef)(null)
          , n = (0,
        o.useRef)(null);
        return (0,
        o.useCallback)(o => {
            if (null === o) {
                let e = r.current;
                e && (r.current = null,
                e());
                let t = n.current;
                t && (n.current = null,
                t())
            } else
                e && (r.current = a(e, o)),
                t && (n.current = a(t, o))
        }
        , [e, t])
    }
    function a(e, t) {
        if ("function" != typeof e)
            return e.current = t,
            () => {
                e.current = null
            }
            ;
        {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 73668, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let o = e.r(18967)
      , n = e.r(52817);
    function a(e) {
        if (!(0,
        o.isAbsoluteUrl)(e))
            return !0;
        try {
            let t = (0,
            o.getLocationOrigin)()
              , r = new URL(e,t);
            return r.origin === t && (0,
            n.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}
, 84508, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let o = e => {}
}
, 22016, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        default: function() {
            return h
        },
        useLinkStatus: function() {
            return y
        }
    };
    for (var n in o)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: o[n]
        });
    let a = e.r(90809)
      , l = e.r(43476)
      , i = a._(e.r(71645))
      , s = e.r(95057)
      , d = e.r(8372)
      , c = e.r(18581)
      , u = e.r(18967)
      , p = e.r(5550);
    e.r(33525);
    let f = e.r(88540)
      , m = e.r(91949)
      , b = e.r(73668)
      , g = e.r(9396);
    function h(t) {
        var r, o;
        let n, a, h, [y,x] = (0,
        i.useOptimistic)(m.IDLE_LINK_STATUS), w = (0,
        i.useRef)(null), {href: k, as: _, children: j, prefetch: z=null, passHref: O, replace: C, shallow: S, scroll: P, onClick: E, onMouseEnter: R, onTouchStart: M, legacyBehavior: I=!1, onNavigate: $, transitionTypes: N, ref: A, unstable_dynamicOnHover: T, ...L} = t;
        n = j,
        I && ("string" == typeof n || "number" == typeof n) && (n = (0,
        l.jsx)("a", {
            children: n
        }));
        let D = i.default.useContext(d.AppRouterContext)
          , U = !1 !== z
          , W = !1 !== z ? null === (o = z) || "auto" === o ? g.FetchStrategy.PPR : g.FetchStrategy.Full : g.FetchStrategy.PPR
          , G = "string" == typeof (r = _ || k) ? r : (0,
        s.formatUrl)(r);
        if (I) {
            if (n?.$$typeof === Symbol.for("react.lazy"))
                throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                    value: "E863",
                    enumerable: !1,
                    configurable: !0
                });
            a = i.default.Children.only(n)
        }
        let B = I ? a && "object" == typeof a && a.ref : A
          , F = i.default.useCallback(e => (null !== D && (w.current = (0,
        m.mountLinkInstance)(e, G, D, W, U, x)),
        () => {
            w.current && ((0,
            m.unmountLinkForCurrentNavigation)(w.current),
            w.current = null),
            (0,
            m.unmountPrefetchableInstance)(e)
        }
        ), [U, G, D, W, x])
          , q = {
            ref: (0,
            c.useMergedRef)(F, B),
            onClick(t) {
                I || "function" != typeof E || E(t),
                I && a.props && "function" == typeof a.props.onClick && a.props.onClick(t),
                !D || t.defaultPrevented || function(t, r, o, n, a, l, s) {
                    if ("u" > typeof window) {
                        let d, {nodeName: c} = t.currentTarget;
                        if ("A" === c.toUpperCase() && ((d = t.currentTarget.getAttribute("target")) && "_self" !== d || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download"))
                            return;
                        if (!(0,
                        b.isLocalURL)(r)) {
                            n && (t.preventDefault(),
                            location.replace(r));
                            return
                        }
                        if (t.preventDefault(),
                        l) {
                            let e = !1;
                            if (l({
                                preventDefault: () => {
                                    e = !0
                                }
                            }),
                            e)
                                return
                        }
                        let {dispatchNavigateAction: u} = e.r(99781);
                        i.default.startTransition( () => {
                            u(r, n ? "replace" : "push", !1 === a ? f.ScrollBehavior.NoScroll : f.ScrollBehavior.Default, o.current, s)
                        }
                        )
                    }
                }(t, G, w, C, P, $, N)
            },
            onMouseEnter(e) {
                I || "function" != typeof R || R(e),
                I && a.props && "function" == typeof a.props.onMouseEnter && a.props.onMouseEnter(e),
                D && U && (0,
                m.onNavigationIntent)(e.currentTarget, !0 === T)
            },
            onTouchStart: function(e) {
                I || "function" != typeof M || M(e),
                I && a.props && "function" == typeof a.props.onTouchStart && a.props.onTouchStart(e),
                D && U && (0,
                m.onNavigationIntent)(e.currentTarget, !0 === T)
            }
        };
        return (0,
        u.isAbsoluteUrl)(G) ? q.href = G : I && !O && ("a" !== a.type || "href"in a.props) || (q.href = (0,
        p.addBasePath)(G)),
        h = I ? i.default.cloneElement(a, q) : (0,
        l.jsx)("a", {
            ...L,
            ...q,
            children: n
        }),
        (0,
        l.jsx)(v.Provider, {
            value: y,
            children: h
        })
    }
    e.r(84508);
    let v = (0,
    i.createContext)(m.IDLE_LINK_STATUS)
      , y = () => (0,
    i.useContext)(v);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 56420, e => {
    "use strict";
    var t = e.i(71645);
    let r = (...e) => e.filter( (e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
      , o = e => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    ;
    var n = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let a = (0,
    t.createContext)({})
      , l = (0,
    t.forwardRef)( ({color: e, size: o, strokeWidth: l, absoluteStrokeWidth: i, className: s="", children: d, iconNode: c, ...u}, p) => {
        let {size: f=24, strokeWidth: m=2, absoluteStrokeWidth: b=!1, color: g="currentColor", className: h=""} = (0,
        t.useContext)(a) ?? {}
          , v = i ?? b ? 24 * Number(l ?? m) / Number(o ?? f) : l ?? m;
        return (0,
        t.createElement)("svg", {
            ref: p,
            ...n,
            width: o ?? f ?? n.width,
            height: o ?? f ?? n.height,
            stroke: e ?? g,
            strokeWidth: v,
            className: r("lucide", h, s),
            ...!d && !(e => {
                for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                        return !0;
                return !1
            }
            )(u) && {
                "aria-hidden": "true"
            },
            ...u
        }, [...c.map( ([e,r]) => (0,
        t.createElement)(e, r)), ...Array.isArray(d) ? d : [d]])
    }
    );
    e.s(["default", 0, (e, n) => {
        let a = (0,
        t.forwardRef)( ({className: a, ...i}, s) => (0,
        t.createElement)(l, {
            ref: s,
            iconNode: n,
            className: r(`lucide-${o(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, `lucide-${e}`, a),
            ...i
        }));
        return a.displayName = o(e),
        a
    }
    ], 56420)
}
, 67881, 20783, 91918, 47163, e => {
    "use strict";
    let t, r;
    var o = e.i(43476);
    function n() {
        for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++)
            (e = arguments[r]) && (t = function e(t) {
                var r, o, n = "";
                if ("string" == typeof t || "number" == typeof t)
                    n += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t)) {
                        var a = t.length;
                        for (r = 0; r < a; r++)
                            t[r] && (o = e(t[r])) && (n && (n += " "),
                            n += o)
                    } else
                        for (o in t)
                            t[o] && (n && (n += " "),
                            n += o);
                return n
            }(e)) && (o && (o += " "),
            o += t);
        return o
    }
    let a = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e;
    var l = e.i(71645);
    function i(e, t) {
        if ("function" == typeof e)
            return e(t);
        null != e && (e.current = t)
    }
    function s(...e) {
        return t => {
            let r = !1
              , o = e.map(e => {
                let o = i(e, t);
                return r || "function" != typeof o || (r = !0),
                o
            }
            );
            if (r)
                return () => {
                    for (let t = 0; t < o.length; t++) {
                        let r = o[t];
                        "function" == typeof r ? r() : i(e[t], null)
                    }
                }
        }
    }
    function d(e) {
        var t;
        let r, n = (t = e,
        (r = l.forwardRef( (e, t) => {
            let {children: r, ...o} = e;
            if (l.isValidElement(r)) {
                var n;
                let e, a, i = (n = r,
                (a = (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) && "isReactWarning"in e && e.isReactWarning) ? n.ref : (a = (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) && "isReactWarning"in e && e.isReactWarning) ? n.props.ref : n.props.ref || n.ref), d = function(e, t) {
                    let r = {
                        ...t
                    };
                    for (let o in t) {
                        let n = e[o]
                          , a = t[o];
                        /^on[A-Z]/.test(o) ? n && a ? r[o] = (...e) => {
                            let t = a(...e);
                            return n(...e),
                            t
                        }
                        : n && (r[o] = n) : "style" === o ? r[o] = {
                            ...n,
                            ...a
                        } : "className" === o && (r[o] = [n, a].filter(Boolean).join(" "))
                    }
                    return {
                        ...e,
                        ...r
                    }
                }(o, r.props);
                return r.type !== l.Fragment && (d.ref = t ? s(t, i) : i),
                l.cloneElement(r, d)
            }
            return l.Children.count(r) > 1 ? l.Children.only(null) : null
        }
        )).displayName = `${t}.SlotClone`,
        r), a = l.forwardRef( (e, t) => {
            let {children: r, ...a} = e
              , i = l.Children.toArray(r)
              , s = i.find(m);
            if (s) {
                let e = s.props.children
                  , r = i.map(t => t !== s ? t : l.Children.count(e) > 1 ? l.Children.only(null) : l.isValidElement(e) ? e.props.children : null);
                return (0,
                o.jsx)(n, {
                    ...a,
                    ref: t,
                    children: l.isValidElement(e) ? l.cloneElement(e, void 0, r) : null
                })
            }
            return (0,
            o.jsx)(n, {
                ...a,
                ref: t,
                children: r
            })
        }
        );
        return a.displayName = `${e}.Slot`,
        a
    }
    e.s(["composeRefs", 0, s, "useComposedRefs", 0, function(...e) {
        return l.useCallback(s(...e), e)
    }
    ], 20783);
    var c = d("Slot")
      , u = Symbol("radix.slottable");
    function p(e) {
        let t = ({children: e}) => (0,
        o.jsx)(o.Fragment, {
            children: e
        });
        return t.displayName = `${e}.Slottable`,
        t.__radixId = u,
        t
    }
    var f = p("Slottable");
    function m(e) {
        return l.isValidElement(e) && "function" == typeof e.type && "__radixId"in e.type && e.type.__radixId === u
    }
    e.s(["Root", 0, c, "Slot", 0, c, "Slottable", 0, f, "createSlot", 0, d, "createSlottable", 0, p], 91918);
    var b = e.i(91918)
      , b = b;
    let g = (e=new Map, t=null, r) => ({
        nextPart: e,
        validators: t,
        classGroupId: r
    })
      , h = []
      , v = (e, t, r) => {
        if (0 == e.length - t)
            return r.classGroupId;
        let o = e[t]
          , n = r.nextPart.get(o);
        if (n) {
            let r = v(e, t + 1, n);
            if (r)
                return r
        }
        let a = r.validators;
        if (null === a)
            return;
        let l = 0 === t ? e.join("-") : e.slice(t).join("-")
          , i = a.length;
        for (let e = 0; e < i; e++) {
            let t = a[e];
            if (t.validator(l))
                return t.classGroupId
        }
    }
      , y = (e, t) => {
        let r = g();
        for (let o in e)
            x(e[o], r, o, t);
        return r
    }
      , x = (e, t, r, o) => {
        let n = e.length;
        for (let a = 0; a < n; a++)
            w(e[a], t, r, o)
    }
      , w = (e, t, r, o) => {
        "string" == typeof e ? k(e, t, r) : "function" == typeof e ? _(e, t, r, o) : j(e, t, r, o)
    }
      , k = (e, t, r) => {
        ("" === e ? t : z(t, e)).classGroupId = r
    }
      , _ = (e, t, r, o) => {
        O(e) ? x(e(o), t, r, o) : (null === t.validators && (t.validators = []),
        t.validators.push({
            classGroupId: r,
            validator: e
        }))
    }
      , j = (e, t, r, o) => {
        let n = Object.entries(e)
          , a = n.length;
        for (let e = 0; e < a; e++) {
            let[a,l] = n[e];
            x(l, z(t, a), r, o)
        }
    }
      , z = (e, t) => {
        let r = e
          , o = t.split("-")
          , n = o.length;
        for (let e = 0; e < n; e++) {
            let t = o[e]
              , n = r.nextPart.get(t);
            n || (n = g(),
            r.nextPart.set(t, n)),
            r = n
        }
        return r
    }
      , O = e => "isThemeGetter"in e && !0 === e.isThemeGetter
      , C = []
      , S = (e, t, r, o, n) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: r,
        maybePostfixModifierPosition: o,
        isExternal: n
    })
      , P = /\s+/
      , E = e => {
        let t;
        if ("string" == typeof e)
            return e;
        let r = "";
        for (let o = 0; o < e.length; o++)
            e[o] && (t = E(e[o])) && (r && (r += " "),
            r += t);
        return r
    }
      , R = []
      , M = e => {
        let t = t => t[e] || R;
        return t.isThemeGetter = !0,
        t
    }
      , I = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
      , $ = /^\((?:(\w[\w-]*):)?(.+)\)$/i
      , N = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
      , A = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
      , T = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
      , L = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
      , D = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
      , U = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
      , W = e => N.test(e)
      , G = e => !!e && !Number.isNaN(Number(e))
      , B = e => !!e && Number.isInteger(Number(e))
      , F = e => e.endsWith("%") && G(e.slice(0, -1))
      , q = e => A.test(e)
      , V = () => !0
      , K = e => T.test(e) && !L.test(e)
      , X = () => !1
      , H = e => D.test(e)
      , J = e => U.test(e)
      , Q = e => !Y(e) && !ei(e)
      , Z = e => eb(e, ey, X)
      , Y = e => I.test(e)
      , ee = e => eb(e, ex, K)
      , et = e => eb(e, ew, G)
      , er = e => eb(e, e_, V)
      , eo = e => eb(e, ek, X)
      , en = e => eb(e, eh, X)
      , ea = e => eb(e, ev, J)
      , el = e => eb(e, ej, H)
      , ei = e => $.test(e)
      , es = e => eg(e, ex)
      , ed = e => eg(e, ek)
      , ec = e => eg(e, eh)
      , eu = e => eg(e, ey)
      , ep = e => eg(e, ev)
      , ef = e => eg(e, ej, !0)
      , em = e => eg(e, e_, !0)
      , eb = (e, t, r) => {
        let o = I.exec(e);
        return !!o && (o[1] ? t(o[1]) : r(o[2]))
    }
      , eg = (e, t, r=!1) => {
        let o = $.exec(e);
        return !!o && (o[1] ? t(o[1]) : r)
    }
      , eh = e => "position" === e || "percentage" === e
      , ev = e => "image" === e || "url" === e
      , ey = e => "length" === e || "size" === e || "bg-size" === e
      , ex = e => "length" === e
      , ew = e => "number" === e
      , ek = e => "family-name" === e
      , e_ = e => "number" === e || "weight" === e
      , ej = e => "shadow" === e
      , ez = ( (e, ...t) => {
        let r, o, n, a, l = e => {
            let t = o(e);
            if (t)
                return t;
            let a = ( (e, t) => {
                let {parseClassName: r, getClassGroupId: o, getConflictingClassGroupIds: n, sortModifiers: a} = t
                  , l = []
                  , i = e.trim().split(P)
                  , s = "";
                for (let e = i.length - 1; e >= 0; e -= 1) {
                    let t = i[e]
                      , {isExternal: d, modifiers: c, hasImportantModifier: u, baseClassName: p, maybePostfixModifierPosition: f} = r(t);
                    if (d) {
                        s = t + (s.length > 0 ? " " + s : s);
                        continue
                    }
                    let m = !!f
                      , b = o(m ? p.substring(0, f) : p);
                    if (!b) {
                        if (!m || !(b = o(p))) {
                            s = t + (s.length > 0 ? " " + s : s);
                            continue
                        }
                        m = !1
                    }
                    let g = 0 === c.length ? "" : 1 === c.length ? c[0] : a(c).join(":")
                      , h = u ? g + "!" : g
                      , v = h + b;
                    if (l.indexOf(v) > -1)
                        continue;
                    l.push(v);
                    let y = n(b, m);
                    for (let e = 0; e < y.length; ++e) {
                        let t = y[e];
                        l.push(h + t)
                    }
                    s = t + (s.length > 0 ? " " + s : s)
                }
                return s
            }
            )(e, r);
            return n(e, a),
            a
        }
        ;
        return a = i => {
            var s;
            let d;
            return o = (r = {
                cache: (e => {
                    if (e < 1)
                        return {
                            get: () => void 0,
                            set: () => {}
                        };
                    let t = 0
                      , r = Object.create(null)
                      , o = Object.create(null)
                      , n = (n, a) => {
                        r[n] = a,
                        ++t > e && (t = 0,
                        o = r,
                        r = Object.create(null))
                    }
                    ;
                    return {
                        get(e) {
                            let t = r[e];
                            return void 0 !== t ? t : void 0 !== (t = o[e]) ? (n(e, t),
                            t) : void 0
                        },
                        set(e, t) {
                            e in r ? r[e] = t : n(e, t)
                        }
                    }
                }
                )((s = t.reduce( (e, t) => t(e), e())).cacheSize),
                parseClassName: (e => {
                    let {prefix: t, experimentalParseClassName: r} = e
                      , o = e => {
                        let t, r = [], o = 0, n = 0, a = 0, l = e.length;
                        for (let i = 0; i < l; i++) {
                            let l = e[i];
                            if (0 === o && 0 === n) {
                                if (":" === l) {
                                    r.push(e.slice(a, i)),
                                    a = i + 1;
                                    continue
                                }
                                if ("/" === l) {
                                    t = i;
                                    continue
                                }
                            }
                            "[" === l ? o++ : "]" === l ? o-- : "(" === l ? n++ : ")" === l && n--
                        }
                        let i = 0 === r.length ? e : e.slice(a)
                          , s = i
                          , d = !1;
                        return i.endsWith("!") ? (s = i.slice(0, -1),
                        d = !0) : i.startsWith("!") && (s = i.slice(1),
                        d = !0),
                        S(r, d, s, t && t > a ? t - a : void 0)
                    }
                    ;
                    if (t) {
                        let e = t + ":"
                          , r = o;
                        o = t => t.startsWith(e) ? r(t.slice(e.length)) : S(C, !1, t, void 0, !0)
                    }
                    if (r) {
                        let e = o;
                        o = t => r({
                            className: t,
                            parseClassName: e
                        })
                    }
                    return o
                }
                )(s),
                sortModifiers: (d = new Map,
                s.orderSensitiveModifiers.forEach( (e, t) => {
                    d.set(e, 1e6 + t)
                }
                ),
                e => {
                    let t = []
                      , r = [];
                    for (let o = 0; o < e.length; o++) {
                        let n = e[o]
                          , a = "[" === n[0]
                          , l = d.has(n);
                        a || l ? (r.length > 0 && (r.sort(),
                        t.push(...r),
                        r = []),
                        t.push(n)) : r.push(n)
                    }
                    return r.length > 0 && (r.sort(),
                    t.push(...r)),
                    t
                }
                ),
                ...(e => {
                    let t = (e => {
                        let {theme: t, classGroups: r} = e;
                        return y(r, t)
                    }
                    )(e)
                      , {conflictingClassGroups: r, conflictingClassGroupModifiers: o} = e;
                    return {
                        getClassGroupId: e => {
                            if (e.startsWith("[") && e.endsWith("]")) {
                                var r;
                                let t, o, n;
                                return -1 === (r = e).slice(1, -1).indexOf(":") ? void 0 : (o = (t = r.slice(1, -1)).indexOf(":"),
                                (n = t.slice(0, o)) ? "arbitrary.." + n : void 0)
                            }
                            let o = e.split("-")
                              , n = +("" === o[0] && o.length > 1);
                            return v(o, n, t)
                        }
                        ,
                        getConflictingClassGroupIds: (e, t) => {
                            if (t) {
                                let t = o[e]
                                  , n = r[e];
                                if (t) {
                                    if (n) {
                                        let e = Array(n.length + t.length);
                                        for (let t = 0; t < n.length; t++)
                                            e[t] = n[t];
                                        for (let r = 0; r < t.length; r++)
                                            e[n.length + r] = t[r];
                                        return e
                                    }
                                    return t
                                }
                                return n || h
                            }
                            return r[e] || h
                        }
                    }
                }
                )(s)
            }).cache.get,
            n = r.cache.set,
            a = l,
            l(i)
        }
        ,
        (...e) => a(( (...e) => {
            let t, r, o = 0, n = "";
            for (; o < e.length; )
                (t = e[o++]) && (r = E(t)) && (n && (n += " "),
                n += r);
            return n
        }
        )(...e))
    }
    )( () => {
        let e = M("color")
          , t = M("font")
          , r = M("text")
          , o = M("font-weight")
          , n = M("tracking")
          , a = M("leading")
          , l = M("breakpoint")
          , i = M("container")
          , s = M("spacing")
          , d = M("radius")
          , c = M("shadow")
          , u = M("inset-shadow")
          , p = M("text-shadow")
          , f = M("drop-shadow")
          , m = M("blur")
          , b = M("perspective")
          , g = M("aspect")
          , h = M("ease")
          , v = M("animate")
          , y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
          , x = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
          , w = () => [...x(), ei, Y]
          , k = () => ["auto", "hidden", "clip", "visible", "scroll"]
          , _ = () => ["auto", "contain", "none"]
          , j = () => [ei, Y, s]
          , z = () => [W, "full", "auto", ...j()]
          , O = () => [B, "none", "subgrid", ei, Y]
          , C = () => ["auto", {
            span: ["full", B, ei, Y]
        }, B, ei, Y]
          , S = () => [B, "auto", ei, Y]
          , P = () => ["auto", "min", "max", "fr", ei, Y]
          , E = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
          , R = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
          , I = () => ["auto", ...j()]
          , $ = () => [W, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()]
          , N = () => [W, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...j()]
          , A = () => [W, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...j()]
          , T = () => [e, ei, Y]
          , L = () => [...x(), ec, en, {
            position: [ei, Y]
        }]
          , D = () => ["no-repeat", {
            repeat: ["", "x", "y", "space", "round"]
        }]
          , U = () => ["auto", "cover", "contain", eu, Z, {
            size: [ei, Y]
        }]
          , K = () => [F, es, ee]
          , X = () => ["", "none", "full", d, ei, Y]
          , H = () => ["", G, es, ee]
          , J = () => ["solid", "dashed", "dotted", "double"]
          , eb = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
          , eg = () => [G, F, ec, en]
          , eh = () => ["", "none", m, ei, Y]
          , ev = () => ["none", G, ei, Y]
          , ey = () => ["none", G, ei, Y]
          , ex = () => [G, ei, Y]
          , ew = () => [W, "full", ...j()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [q],
                breakpoint: [q],
                color: [V],
                container: [q],
                "drop-shadow": [q],
                ease: ["in", "out", "in-out"],
                font: [Q],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [q],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [q],
                shadow: [q],
                spacing: ["px", G],
                text: [q],
                "text-shadow": [q],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", W, Y, ei, g]
                }],
                container: ["container"],
                columns: [{
                    columns: [G, Y, ei, i]
                }],
                "break-after": [{
                    "break-after": y()
                }],
                "break-before": [{
                    "break-before": y()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: w()
                }],
                overflow: [{
                    overflow: k()
                }],
                "overflow-x": [{
                    "overflow-x": k()
                }],
                "overflow-y": [{
                    "overflow-y": k()
                }],
                overscroll: [{
                    overscroll: _()
                }],
                "overscroll-x": [{
                    "overscroll-x": _()
                }],
                "overscroll-y": [{
                    "overscroll-y": _()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: z()
                }],
                "inset-x": [{
                    "inset-x": z()
                }],
                "inset-y": [{
                    "inset-y": z()
                }],
                start: [{
                    "inset-s": z(),
                    start: z()
                }],
                end: [{
                    "inset-e": z(),
                    end: z()
                }],
                "inset-bs": [{
                    "inset-bs": z()
                }],
                "inset-be": [{
                    "inset-be": z()
                }],
                top: [{
                    top: z()
                }],
                right: [{
                    right: z()
                }],
                bottom: [{
                    bottom: z()
                }],
                left: [{
                    left: z()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [B, "auto", ei, Y]
                }],
                basis: [{
                    basis: [W, "full", "auto", i, ...j()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [G, W, "auto", "initial", "none", Y]
                }],
                grow: [{
                    grow: ["", G, ei, Y]
                }],
                shrink: [{
                    shrink: ["", G, ei, Y]
                }],
                order: [{
                    order: [B, "first", "last", "none", ei, Y]
                }],
                "grid-cols": [{
                    "grid-cols": O()
                }],
                "col-start-end": [{
                    col: C()
                }],
                "col-start": [{
                    "col-start": S()
                }],
                "col-end": [{
                    "col-end": S()
                }],
                "grid-rows": [{
                    "grid-rows": O()
                }],
                "row-start-end": [{
                    row: C()
                }],
                "row-start": [{
                    "row-start": S()
                }],
                "row-end": [{
                    "row-end": S()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": P()
                }],
                "auto-rows": [{
                    "auto-rows": P()
                }],
                gap: [{
                    gap: j()
                }],
                "gap-x": [{
                    "gap-x": j()
                }],
                "gap-y": [{
                    "gap-y": j()
                }],
                "justify-content": [{
                    justify: [...E(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...R(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...R()]
                }],
                "align-content": [{
                    content: ["normal", ...E()]
                }],
                "align-items": [{
                    items: [...R(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...R(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": E()
                }],
                "place-items": [{
                    "place-items": [...R(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...R()]
                }],
                p: [{
                    p: j()
                }],
                px: [{
                    px: j()
                }],
                py: [{
                    py: j()
                }],
                ps: [{
                    ps: j()
                }],
                pe: [{
                    pe: j()
                }],
                pbs: [{
                    pbs: j()
                }],
                pbe: [{
                    pbe: j()
                }],
                pt: [{
                    pt: j()
                }],
                pr: [{
                    pr: j()
                }],
                pb: [{
                    pb: j()
                }],
                pl: [{
                    pl: j()
                }],
                m: [{
                    m: I()
                }],
                mx: [{
                    mx: I()
                }],
                my: [{
                    my: I()
                }],
                ms: [{
                    ms: I()
                }],
                me: [{
                    me: I()
                }],
                mbs: [{
                    mbs: I()
                }],
                mbe: [{
                    mbe: I()
                }],
                mt: [{
                    mt: I()
                }],
                mr: [{
                    mr: I()
                }],
                mb: [{
                    mb: I()
                }],
                ml: [{
                    ml: I()
                }],
                "space-x": [{
                    "space-x": j()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": j()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: $()
                }],
                "inline-size": [{
                    inline: ["auto", ...N()]
                }],
                "min-inline-size": [{
                    "min-inline": ["auto", ...N()]
                }],
                "max-inline-size": [{
                    "max-inline": ["none", ...N()]
                }],
                "block-size": [{
                    block: ["auto", ...A()]
                }],
                "min-block-size": [{
                    "min-block": ["auto", ...A()]
                }],
                "max-block-size": [{
                    "max-block": ["none", ...A()]
                }],
                w: [{
                    w: [i, "screen", ...$()]
                }],
                "min-w": [{
                    "min-w": [i, "screen", "none", ...$()]
                }],
                "max-w": [{
                    "max-w": [i, "screen", "none", "prose", {
                        screen: [l]
                    }, ...$()]
                }],
                h: [{
                    h: ["screen", "lh", ...$()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...$()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...$()]
                }],
                "font-size": [{
                    text: ["base", r, es, ee]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [o, em, er]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", F, Y]
                }],
                "font-family": [{
                    font: [ed, eo, t]
                }],
                "font-features": [{
                    "font-features": [Y]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [n, ei, Y]
                }],
                "line-clamp": [{
                    "line-clamp": [G, "none", ei, et]
                }],
                leading: [{
                    leading: [a, ...j()]
                }],
                "list-image": [{
                    "list-image": ["none", ei, Y]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", ei, Y]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: T()
                }],
                "text-color": [{
                    text: T()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...J(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [G, "from-font", "auto", ei, ee]
                }],
                "text-decoration-color": [{
                    decoration: T()
                }],
                "underline-offset": [{
                    "underline-offset": [G, "auto", ei, Y]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: j()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ei, Y]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", ei, Y]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: L()
                }],
                "bg-repeat": [{
                    bg: D()
                }],
                "bg-size": [{
                    bg: U()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, B, ei, Y],
                        radial: ["", ei, Y],
                        conic: [B, ei, Y]
                    }, ep, ea]
                }],
                "bg-color": [{
                    bg: T()
                }],
                "gradient-from-pos": [{
                    from: K()
                }],
                "gradient-via-pos": [{
                    via: K()
                }],
                "gradient-to-pos": [{
                    to: K()
                }],
                "gradient-from": [{
                    from: T()
                }],
                "gradient-via": [{
                    via: T()
                }],
                "gradient-to": [{
                    to: T()
                }],
                rounded: [{
                    rounded: X()
                }],
                "rounded-s": [{
                    "rounded-s": X()
                }],
                "rounded-e": [{
                    "rounded-e": X()
                }],
                "rounded-t": [{
                    "rounded-t": X()
                }],
                "rounded-r": [{
                    "rounded-r": X()
                }],
                "rounded-b": [{
                    "rounded-b": X()
                }],
                "rounded-l": [{
                    "rounded-l": X()
                }],
                "rounded-ss": [{
                    "rounded-ss": X()
                }],
                "rounded-se": [{
                    "rounded-se": X()
                }],
                "rounded-ee": [{
                    "rounded-ee": X()
                }],
                "rounded-es": [{
                    "rounded-es": X()
                }],
                "rounded-tl": [{
                    "rounded-tl": X()
                }],
                "rounded-tr": [{
                    "rounded-tr": X()
                }],
                "rounded-br": [{
                    "rounded-br": X()
                }],
                "rounded-bl": [{
                    "rounded-bl": X()
                }],
                "border-w": [{
                    border: H()
                }],
                "border-w-x": [{
                    "border-x": H()
                }],
                "border-w-y": [{
                    "border-y": H()
                }],
                "border-w-s": [{
                    "border-s": H()
                }],
                "border-w-e": [{
                    "border-e": H()
                }],
                "border-w-bs": [{
                    "border-bs": H()
                }],
                "border-w-be": [{
                    "border-be": H()
                }],
                "border-w-t": [{
                    "border-t": H()
                }],
                "border-w-r": [{
                    "border-r": H()
                }],
                "border-w-b": [{
                    "border-b": H()
                }],
                "border-w-l": [{
                    "border-l": H()
                }],
                "divide-x": [{
                    "divide-x": H()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": H()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...J(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...J(), "hidden", "none"]
                }],
                "border-color": [{
                    border: T()
                }],
                "border-color-x": [{
                    "border-x": T()
                }],
                "border-color-y": [{
                    "border-y": T()
                }],
                "border-color-s": [{
                    "border-s": T()
                }],
                "border-color-e": [{
                    "border-e": T()
                }],
                "border-color-bs": [{
                    "border-bs": T()
                }],
                "border-color-be": [{
                    "border-be": T()
                }],
                "border-color-t": [{
                    "border-t": T()
                }],
                "border-color-r": [{
                    "border-r": T()
                }],
                "border-color-b": [{
                    "border-b": T()
                }],
                "border-color-l": [{
                    "border-l": T()
                }],
                "divide-color": [{
                    divide: T()
                }],
                "outline-style": [{
                    outline: [...J(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [G, ei, Y]
                }],
                "outline-w": [{
                    outline: ["", G, es, ee]
                }],
                "outline-color": [{
                    outline: T()
                }],
                shadow: [{
                    shadow: ["", "none", c, ef, el]
                }],
                "shadow-color": [{
                    shadow: T()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", u, ef, el]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": T()
                }],
                "ring-w": [{
                    ring: H()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: T()
                }],
                "ring-offset-w": [{
                    "ring-offset": [G, ee]
                }],
                "ring-offset-color": [{
                    "ring-offset": T()
                }],
                "inset-ring-w": [{
                    "inset-ring": H()
                }],
                "inset-ring-color": [{
                    "inset-ring": T()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", p, ef, el]
                }],
                "text-shadow-color": [{
                    "text-shadow": T()
                }],
                opacity: [{
                    opacity: [G, ei, Y]
                }],
                "mix-blend": [{
                    "mix-blend": [...eb(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": eb()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [G]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": eg()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": eg()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": T()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": T()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": eg()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": eg()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": T()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": T()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": eg()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": eg()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": T()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": T()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": eg()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": eg()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": T()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": T()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": eg()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": eg()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": T()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": T()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": eg()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": eg()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": T()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": T()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": eg()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": eg()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": T()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": T()
                }],
                "mask-image-radial": [{
                    "mask-radial": [ei, Y]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": eg()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": eg()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": T()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": T()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": x()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [G]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": eg()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": eg()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": T()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": T()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: L()
                }],
                "mask-repeat": [{
                    mask: D()
                }],
                "mask-size": [{
                    mask: U()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", ei, Y]
                }],
                filter: [{
                    filter: ["", "none", ei, Y]
                }],
                blur: [{
                    blur: eh()
                }],
                brightness: [{
                    brightness: [G, ei, Y]
                }],
                contrast: [{
                    contrast: [G, ei, Y]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", f, ef, el]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": T()
                }],
                grayscale: [{
                    grayscale: ["", G, ei, Y]
                }],
                "hue-rotate": [{
                    "hue-rotate": [G, ei, Y]
                }],
                invert: [{
                    invert: ["", G, ei, Y]
                }],
                saturate: [{
                    saturate: [G, ei, Y]
                }],
                sepia: [{
                    sepia: ["", G, ei, Y]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", ei, Y]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": eh()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [G, ei, Y]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [G, ei, Y]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", G, ei, Y]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [G, ei, Y]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", G, ei, Y]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [G, ei, Y]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [G, ei, Y]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", G, ei, Y]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": j()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": j()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": j()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ei, Y]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [G, "initial", ei, Y]
                }],
                ease: [{
                    ease: ["linear", "initial", h, ei, Y]
                }],
                delay: [{
                    delay: [G, ei, Y]
                }],
                animate: [{
                    animate: ["none", v, ei, Y]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [b, ei, Y]
                }],
                "perspective-origin": [{
                    "perspective-origin": w()
                }],
                rotate: [{
                    rotate: ev()
                }],
                "rotate-x": [{
                    "rotate-x": ev()
                }],
                "rotate-y": [{
                    "rotate-y": ev()
                }],
                "rotate-z": [{
                    "rotate-z": ev()
                }],
                scale: [{
                    scale: ey()
                }],
                "scale-x": [{
                    "scale-x": ey()
                }],
                "scale-y": [{
                    "scale-y": ey()
                }],
                "scale-z": [{
                    "scale-z": ey()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: ex()
                }],
                "skew-x": [{
                    "skew-x": ex()
                }],
                "skew-y": [{
                    "skew-y": ex()
                }],
                transform: [{
                    transform: [ei, Y, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: w()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: ew()
                }],
                "translate-x": [{
                    "translate-x": ew()
                }],
                "translate-y": [{
                    "translate-y": ew()
                }],
                "translate-z": [{
                    "translate-z": ew()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: T()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: T()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ei, Y]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": j()
                }],
                "scroll-mx": [{
                    "scroll-mx": j()
                }],
                "scroll-my": [{
                    "scroll-my": j()
                }],
                "scroll-ms": [{
                    "scroll-ms": j()
                }],
                "scroll-me": [{
                    "scroll-me": j()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": j()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": j()
                }],
                "scroll-mt": [{
                    "scroll-mt": j()
                }],
                "scroll-mr": [{
                    "scroll-mr": j()
                }],
                "scroll-mb": [{
                    "scroll-mb": j()
                }],
                "scroll-ml": [{
                    "scroll-ml": j()
                }],
                "scroll-p": [{
                    "scroll-p": j()
                }],
                "scroll-px": [{
                    "scroll-px": j()
                }],
                "scroll-py": [{
                    "scroll-py": j()
                }],
                "scroll-ps": [{
                    "scroll-ps": j()
                }],
                "scroll-pe": [{
                    "scroll-pe": j()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": j()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": j()
                }],
                "scroll-pt": [{
                    "scroll-pt": j()
                }],
                "scroll-pr": [{
                    "scroll-pr": j()
                }],
                "scroll-pb": [{
                    "scroll-pb": j()
                }],
                "scroll-pl": [{
                    "scroll-pl": j()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", ei, Y]
                }],
                fill: [{
                    fill: ["none", ...T()]
                }],
                "stroke-w": [{
                    stroke: [G, es, ee, et]
                }],
                stroke: [{
                    stroke: ["none", ...T()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    }
    );
    function eO(...e) {
        return ez(n(e))
    }
    e.s(["cn", 0, eO], 47163);
    let eC = (t = "group/button cursor-pointer inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    r = {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
                outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
                ghost: "hover:bg-primary hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
                destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
                link: "text-primary underline-offset-4 hover:underline",
                maxi: "rounded-sm font-extrabold uppercase tracking-widest text-white border-2 border-brand-700 bg-gradient-to-b from-brand-400 to-brand-600 shadow-[0_0_18px_rgba(251,134,2,0.5)] hover:shadow-[0_0_30px_rgba(251,134,2,0.75)] hover:brightness-110 active:scale-95 transition-all duration-200",
                "maxi-outline": "rounded-sm font-extrabold uppercase tracking-widest text-white border-2 border-white/70 bg-transparent hover:bg-white/10 hover:border-white active:scale-95 transition-all duration-200"
            },
            size: {
                default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
                xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
                sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
                lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
                icon: "size-8",
                "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
                "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
                "icon-lg": "size-9",
                hero: "h-12 px-10 text-sm gap-2"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    },
    e => {
        var o;
        if ((null == r ? void 0 : r.variants) == null)
            return n(t, null == e ? void 0 : e.class, null == e ? void 0 : e.className);
        let {variants: l, defaultVariants: i} = r
          , s = Object.keys(l).map(t => {
            let r = null == e ? void 0 : e[t]
              , o = null == i ? void 0 : i[t];
            if (null === r)
                return null;
            let n = a(r) || a(o);
            return l[t][n]
        }
        )
          , d = e && Object.entries(e).reduce( (e, t) => {
            let[r,o] = t;
            return void 0 === o || (e[r] = o),
            e
        }
        , {});
        return n(t, s, null == r || null == (o = r.compoundVariants) ? void 0 : o.reduce( (e, t) => {
            let {class: r, className: o, ...n} = t;
            return Object.entries(n).every(e => {
                let[t,r] = e;
                return Array.isArray(r) ? r.includes({
                    ...i,
                    ...d
                }[t]) : ({
                    ...i,
                    ...d
                })[t] === r
            }
            ) ? [...e, r, o] : e
        }
        , []), null == e ? void 0 : e.class, null == e ? void 0 : e.className)
    }
    );
    e.s(["Button", 0, function({className: e, variant: t="default", size: r="default", asChild: n=!1, ...a}) {
        let l = n ? b.Root : "button";
        return (0,
        o.jsx)(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": r,
            className: eO(eC({
                variant: t,
                size: r,
                className: e
            })),
            ...a
        })
    }
    ], 67881)
}
, 88143, (e, t, r) => {
    "use strict";
    function o({widthInt: e, heightInt: t, blurWidth: r, blurHeight: n, blurDataURL: a, objectFit: l}) {
        let i = r ? 40 * r : e
          , s = n ? 40 * n : t
          , d = i && s ? `viewBox='0 0 ${i} ${s}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d ? "none" : "contain" === l ? "xMidYMid" : "cover" === l ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return o
        }
    })
}
, 87690, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        VALID_LOADERS: function() {
            return a
        },
        imageConfigDefault: function() {
            return l
        }
    };
    for (var n in o)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: o[n]
        });
    let a = ["default", "imgix", "cloudinary", "akamai", "custom"]
      , l = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1
    }
}
, 8927, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return d
        }
    }),
    e.r(33525);
    let o = e.r(43369)
      , n = e.r(88143)
      , a = e.r(87690)
      , l = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function i(e) {
        return void 0 !== e.default
    }
    function s(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }
    function d({src: e, sizes: t, unoptimized: r=!1, priority: c=!1, preload: u=!1, loading: p, className: f, quality: m, width: b, height: g, fill: h=!1, style: v, overrideSrc: y, onLoad: x, onLoadingComplete: w, placeholder: k="empty", blurDataURL: _, fetchPriority: j, decoding: z="async", layout: O, objectFit: C, objectPosition: S, lazyBoundary: P, lazyRoot: E, ...R}, M) {
        var I;
        let $, N, A, {imgConf: T, showAltText: L, blurComplete: D, defaultLoader: U} = M, W = T || a.imageConfigDefault;
        if ("allSizes"in W)
            $ = W;
        else {
            let e = [...W.deviceSizes, ...W.imageSizes].sort( (e, t) => e - t)
              , t = W.deviceSizes.sort( (e, t) => e - t)
              , r = W.qualities?.sort( (e, t) => e - t);
            $ = {
                ...W,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === U)
            throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                value: "E163",
                enumerable: !1,
                configurable: !0
            });
        let G = R.loader || U;
        delete R.loader,
        delete R.srcSet;
        let B = "__next_img_default"in G;
        if (B) {
            if ("custom" === $.loader)
                throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                    value: "E252",
                    enumerable: !1,
                    configurable: !0
                })
        } else {
            let e = G;
            G = t => {
                let {config: r, ...o} = t;
                return e(o)
            }
        }
        if (O) {
            "fill" === O && (h = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[O];
            e && (v = {
                ...v,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[O];
            r && !t && (t = r)
        }
        let F = ""
          , q = s(b)
          , V = s(g);
        if ((I = e) && "object" == typeof I && (i(I) || void 0 !== I.src)) {
            let t = i(e) ? e.default : e;
            if (!t.src)
                throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                    value: "E460",
                    enumerable: !1,
                    configurable: !0
                });
            if (!t.height || !t.width)
                throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                    value: "E48",
                    enumerable: !1,
                    configurable: !0
                });
            if (N = t.blurWidth,
            A = t.blurHeight,
            _ = _ || t.blurDataURL,
            F = t.src,
            !h)
                if (q || V) {
                    if (q && !V) {
                        let e = q / t.width;
                        V = Math.round(t.height * e)
                    } else if (!q && V) {
                        let e = V / t.height;
                        q = Math.round(t.width * e)
                    }
                } else
                    q = t.width,
                    V = t.height
        }
        let K = !c && !u && ("lazy" === p || void 0 === p);
        (!(e = "string" == typeof e ? e : F) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0,
        K = !1),
        $.unoptimized && (r = !0),
        B && !$.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let X = s(m)
          , H = Object.assign(h ? {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: C,
            objectPosition: S
        } : {}, L ? {} : {
            color: "transparent"
        }, v)
          , J = D || "empty" === k ? null : "blur" === k ? `url("data:image/svg+xml;charset=utf-8,${(0,
        n.getImageBlurSvg)({
            widthInt: q,
            heightInt: V,
            blurWidth: N,
            blurHeight: A,
            blurDataURL: _ || "",
            objectFit: H.objectFit
        })}")` : `url("${k}")`
          , Q = l.includes(H.objectFit) ? "fill" === H.objectFit ? "100% 100%" : "cover" : H.objectFit
          , Z = J ? {
            backgroundSize: Q,
            backgroundPosition: H.objectPosition || "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundImage: J
        } : {}
          , Y = function({config: e, src: t, unoptimized: r, width: n, quality: a, sizes: l, loader: i}) {
            if (r) {
                if (t.startsWith("/") && !t.startsWith("//")) {
                    let e = (0,
                    o.getDeploymentId)();
                    if (e) {
                        let r = t.indexOf("?");
                        if (-1 !== r) {
                            let o = new URLSearchParams(t.slice(r + 1));
                            o.get("dpl") || (o.append("dpl", e),
                            t = t.slice(0, r) + "?" + o.toString())
                        } else
                            t += `?dpl=${e}`
                    }
                }
                return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                }
            }
            let {widths: s, kind: d} = function({deviceSizes: e, allSizes: t}, r, o) {
                if (o) {
                    let r = /(^|\s)(1?\d?\d)vw/g
                      , n = [];
                    for (let e; e = r.exec(o); )
                        n.push(parseInt(e[2]));
                    if (n.length) {
                        let r = .01 * Math.min(...n);
                        return {
                            widths: t.filter(t => t >= e[0] * r),
                            kind: "w"
                        }
                    }
                    return {
                        widths: t,
                        kind: "w"
                    }
                }
                return "number" != typeof r ? {
                    widths: e,
                    kind: "w"
                } : {
                    widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                    kind: "x"
                }
            }(e, n, l)
              , c = s.length - 1;
            return {
                sizes: l || "w" !== d ? l : "100vw",
                srcSet: s.map( (r, o) => `${i({
                    config: e,
                    src: t,
                    quality: a,
                    width: r
                })} ${"w" === d ? r : o + 1}${d}`).join(", "),
                src: i({
                    config: e,
                    src: t,
                    quality: a,
                    width: s[c]
                })
            }
        }({
            config: $,
            src: e,
            unoptimized: r,
            width: q,
            quality: X,
            sizes: t,
            loader: G
        })
          , ee = K ? "lazy" : p;
        return {
            props: {
                ...R,
                loading: ee,
                fetchPriority: j,
                width: q,
                height: V,
                decoding: z,
                className: f,
                style: {
                    ...H,
                    ...Z
                },
                sizes: Y.sizes,
                srcSet: Y.srcSet,
                src: y || Y.src
            },
            meta: {
                unoptimized: r,
                preload: u || c,
                placeholder: k,
                fill: h
            }
        }
    }
}
, 98879, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let o = e.r(71645)
      , n = "u" < typeof window
      , a = n ? () => {}
    : o.useLayoutEffect
      , l = n ? () => {}
    : o.useEffect;
    function i(e) {
        let {headManager: t, reduceComponentsToState: r} = e;
        function i() {
            if (t && t.mountedInstances) {
                let e = o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return n && (t?.mountedInstances?.add(e.children),
        i()),
        a( () => (t?.mountedInstances?.add(e.children),
        () => {
            t?.mountedInstances?.delete(e.children)
        }
        )),
        a( () => (t && (t._pendingUpdate = i),
        () => {
            t && (t._pendingUpdate = i)
        }
        )),
        l( () => (t && t._pendingUpdate && (t._pendingUpdate(),
        t._pendingUpdate = null),
        () => {
            t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null)
        }
        )),
        null
    }
}
, 25633, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        default: function() {
            return b
        },
        defaultHead: function() {
            return u
        }
    };
    for (var n in o)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: o[n]
        });
    let a = e.r(55682)
      , l = e.r(90809)
      , i = e.r(43476)
      , s = l._(e.r(71645))
      , d = a._(e.r(98879))
      , c = e.r(42732);
    function u() {
        return [(0,
        i.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0,
        i.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }
    function p(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === s.default.Fragment ? e.concat(s.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(33525);
    let f = ["name", "httpEquiv", "charSet", "itemProp"];
    function m(e) {
        let t, r, o, n;
        return e.reduce(p, []).reverse().concat(u().reverse()).filter((t = new Set,
        r = new Set,
        o = new Set,
        n = {},
        e => {
            let a = !0
              , l = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                l = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? a = !1 : t.add(r)
            }
            switch (e.type) {
            case "title":
            case "base":
                r.has(e.type) ? a = !1 : r.add(e.type);
                break;
            case "meta":
                for (let t = 0, r = f.length; t < r; t++) {
                    let r = f[t];
                    if (e.props.hasOwnProperty(r))
                        if ("charSet" === r)
                            o.has(r) ? a = !1 : o.add(r);
                        else {
                            let t = e.props[r]
                              , o = n[r] || new Set;
                            ("name" !== r || !l) && o.has(t) ? a = !1 : (o.add(t),
                            n[r] = o)
                        }
                }
            }
            return a
        }
        )).reverse().map( (e, t) => {
            let r = e.key || t;
            return s.default.cloneElement(e, {
                key: r
            })
        }
        )
    }
    let b = function({children: e}) {
        let t = (0,
        s.useContext)(c.HeadManagerContext);
        return (0,
        i.jsx)(d.default, {
            reduceComponentsToState: m,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 18556, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let o = e.r(55682)._(e.r(71645))
      , n = e.r(87690)
      , a = o.default.createContext(n.imageConfigDefault)
}
, 65856, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let o = e.r(55682)._(e.r(71645)).default.createContext(null)
}
, 70965, (e, t, r) => {
    "use strict";
    function o(e, t) {
        let r = e || 75;
        return t?.qualities?.length ? t.qualities.reduce( (e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, t.qualities[0]) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return o
        }
    })
}
, 1948, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let o = e.r(70965)
      , n = e.r(43369);
    function a({config: e, src: t, width: r, quality: l}) {
        let i = (0,
        n.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//")) {
            let e = t.indexOf("?");
            if (-1 !== e) {
                let r = new URLSearchParams(t.slice(e + 1))
                  , o = r.get("dpl");
                if (o) {
                    i = o,
                    r.delete("dpl");
                    let n = r.toString();
                    t = t.slice(0, e) + (n ? "?" + n : "")
                }
            }
        }
        if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search)
            throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                value: "E871",
                enumerable: !1,
                configurable: !0
            });
        let s = (0,
        o.findClosestQuality)(l, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/") && i ? `&dpl=${i}` : ""}`
    }
    a.__next_img_default = !0;
    let l = a
}
, 5500, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return x
        }
    });
    let o = e.r(55682)
      , n = e.r(90809)
      , a = e.r(43476)
      , l = n._(e.r(71645))
      , i = o._(e.r(74080))
      , s = o._(e.r(25633))
      , d = e.r(8927)
      , c = e.r(87690)
      , u = e.r(18556);
    e.r(33525);
    let p = e.r(65856)
      , f = o._(e.r(1948))
      , m = e.r(18581)
      , b = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1
    };
    function g(e, t, r, o, n, a, l) {
        let i = e?.src;
        e && e["data-loaded-src"] !== i && (e["data-loaded-src"] = i,
        ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
        ).then( () => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && n(!0),
                r?.current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let o = !1
                      , n = !1;
                    r.current({
                        ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => o,
                        isPropagationStopped: () => n,
                        persist: () => {}
                        ,
                        preventDefault: () => {
                            o = !0,
                            t.preventDefault()
                        }
                        ,
                        stopPropagation: () => {
                            n = !0,
                            t.stopPropagation()
                        }
                    })
                }
                o?.current && o.current(e)
            }
        }
        ))
    }
    function h(e) {
        return l.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let v = (0,
    l.forwardRef)( ({src: e, srcSet: t, sizes: r, height: o, width: n, decoding: i, className: s, style: d, fetchPriority: c, placeholder: u, loading: p, unoptimized: f, fill: b, onLoadRef: v, onLoadingCompleteRef: y, setBlurComplete: x, setShowAltText: w, sizesInput: k, onLoad: _, onError: j, ...z}, O) => {
        let C = (0,
        l.useCallback)(e => {
            e && (j && (e.src = e.src),
            e.complete && g(e, u, v, y, x, f, k))
        }
        , [e, u, v, y, x, j, f, k])
          , S = (0,
        m.useMergedRef)(O, C);
        return (0,
        a.jsx)("img", {
            ...z,
            ...h(c),
            loading: p,
            width: n,
            height: o,
            decoding: i,
            "data-nimg": b ? "fill" : "1",
            className: s,
            style: d,
            sizes: r,
            srcSet: t,
            src: e,
            ref: S,
            onLoad: e => {
                g(e.currentTarget, u, v, y, x, f, k)
            }
            ,
            onError: e => {
                w(!0),
                "empty" !== u && x(!0),
                j && j(e)
            }
        })
    }
    );
    function y({isAppRouter: e, imgAttributes: t}) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...h(t.fetchPriority)
        };
        return e && i.default.preload ? (i.default.preload(t.src, r),
        null) : (0,
        a.jsx)(s.default, {
            children: (0,
            a.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let x = (0,
    l.forwardRef)( (e, t) => {
        let r = (0,
        l.useContext)(p.RouterContext)
          , o = (0,
        l.useContext)(u.ImageConfigContext)
          , n = (0,
        l.useMemo)( () => {
            let e = b || o || c.imageConfigDefault
              , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
              , r = e.deviceSizes.sort( (e, t) => e - t)
              , n = e.qualities?.sort( (e, t) => e - t);
            return {
                ...e,
                allSizes: t,
                deviceSizes: r,
                qualities: n,
                localPatterns: "u" < typeof window ? o?.localPatterns : e.localPatterns
            }
        }
        , [o])
          , {onLoad: i, onLoadingComplete: s} = e
          , m = (0,
        l.useRef)(i);
        (0,
        l.useEffect)( () => {
            m.current = i
        }
        , [i]);
        let g = (0,
        l.useRef)(s);
        (0,
        l.useEffect)( () => {
            g.current = s
        }
        , [s]);
        let[h,x] = (0,
        l.useState)(!1)
          , [w,k] = (0,
        l.useState)(!1)
          , {props: _, meta: j} = (0,
        d.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: n,
            blurComplete: h,
            showAltText: w
        });
        return (0,
        a.jsxs)(a.Fragment, {
            children: [(0,
            a.jsx)(v, {
                ..._,
                unoptimized: j.unoptimized,
                placeholder: j.placeholder,
                fill: j.fill,
                onLoadRef: m,
                onLoadingCompleteRef: g,
                setBlurComplete: x,
                setShowAltText: k,
                sizesInput: e.sizes,
                ref: t
            }), j.preload ? (0,
            a.jsx)(y, {
                isAppRouter: !r,
                imgAttributes: _
            }) : null]
        })
    }
    );
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 94909, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return d
        }
    };
    for (var n in o)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: o[n]
        });
    let a = e.r(55682)
      , l = e.r(8927)
      , i = e.r(5500)
      , s = a._(e.r(1948));
    function d(e) {
        let {props: t} = (0,
        l.getImgProps)(e, {
            defaultLoader: s.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let[e,r] of Object.entries(t))
            void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let c = i.Image
}
, 57688, (e, t, r) => {
    t.exports = e.r(94909)
}
]);
