(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 22998, (t, e, r) => {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = t.r(71645)
      , i = n && "object" == typeof n && "default"in n ? n : {
        default: n
    };
    !function(t) {
        if (!t || "u" < typeof window)
            return;
        let e = document.createElement("style");
        e.setAttribute("type", "text/css"),
        e.innerHTML = t,
        document.head.appendChild(e)
    }('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'),
    r.default = n.forwardRef(function({style: t={}, className: e="", autoFill: r=!1, play: s=!0, pauseOnHover: a=!1, pauseOnClick: o=!1, direction: l="left", speed: c=50, delay: u=0, loop: f=0, gradient: d=!1, gradientColor: h="white", gradientWidth: p=200, onFinish: g, onCycleComplete: m, onMount: v, children: x}, _) {
        let[y,b] = n.useState(0)
          , [w,T] = n.useState(0)
          , [k,j] = n.useState(1)
          , [S,M] = n.useState(!1)
          , N = n.useRef(null)
          , A = _ || N
          , E = n.useRef(null)
          , C = n.useCallback( () => {
            if (E.current && A.current) {
                let t = A.current.getBoundingClientRect()
                  , e = E.current.getBoundingClientRect()
                  , n = t.width
                  , i = e.width;
                ("up" === l || "down" === l) && (n = t.height,
                i = e.height),
                r && n && i ? j(i < n ? Math.ceil(n / i) : 1) : j(1),
                b(n),
                T(i)
            }
        }
        , [r, A, l]);
        n.useEffect( () => {
            if (S && (C(),
            E.current && A.current)) {
                let t = new ResizeObserver( () => C());
                return t.observe(A.current),
                t.observe(E.current),
                () => {
                    t && t.disconnect()
                }
            }
        }
        , [C, A, S]),
        n.useEffect( () => {
            C()
        }
        , [C, x]),
        n.useEffect( () => {
            M(!0)
        }
        , []),
        n.useEffect( () => {
            "function" == typeof v && v()
        }
        , []);
        let O = n.useMemo( () => r ? w * k / c : w < y ? y / c : w / c, [r, y, w, k, c])
          , R = n.useMemo( () => Object.assign(Object.assign({}, t), {
            "--pause-on-hover": !s || a ? "paused" : "running",
            "--pause-on-click": !s || a && !o || o ? "paused" : "running",
            "--width": "up" === l || "down" === l ? "100vh" : "100%",
            "--transform": "up" === l ? "rotate(-90deg)" : "down" === l ? "rotate(90deg)" : "none"
        }), [t, s, a, o, l])
          , P = n.useMemo( () => ({
            "--gradient-color": h,
            "--gradient-width": "number" == typeof p ? `${p}px` : p
        }), [h, p])
          , z = n.useMemo( () => ({
            "--play": s ? "running" : "paused",
            "--direction": "left" === l ? "normal" : "reverse",
            "--duration": `${O}s`,
            "--delay": `${u}s`,
            "--iteration-count": f ? `${f}` : "infinite",
            "--min-width": r ? "auto" : "100%"
        }), [s, l, O, u, f, r])
          , D = n.useMemo( () => ({
            "--transform": "up" === l ? "rotate(90deg)" : "down" === l ? "rotate(-90deg)" : "none"
        }), [l])
          , I = n.useCallback(t => [...Array(Number.isFinite(t) && t >= 0 ? t : 0)].map( (t, e) => i.default.createElement(n.Fragment, {
            key: e
        }, n.Children.map(x, t => i.default.createElement("div", {
            style: D,
            className: "rfm-child"
        }, t)))), [D, x]);
        return S ? i.default.createElement("div", {
            ref: A,
            style: R,
            className: "rfm-marquee-container " + e
        }, d && i.default.createElement("div", {
            style: P,
            className: "rfm-overlay"
        }), i.default.createElement("div", {
            className: "rfm-marquee",
            style: z,
            onAnimationIteration: m,
            onAnimationEnd: g
        }, i.default.createElement("div", {
            className: "rfm-initial-child-container",
            ref: E
        }, n.Children.map(x, t => i.default.createElement("div", {
            style: D,
            className: "rfm-child"
        }, t))), I(k - 1)), i.default.createElement("div", {
            className: "rfm-marquee",
            style: z
        }, I(k))) : null
    })
}
, 87634, t => {
    "use strict";
    var e = t.i(43476)
      , r = t.i(22998);
    let n = Array.from({
        length: 10
    }, () => "$MAXI");
    t.s(["default", 0, ({text: t=n}) => (0,
    e.jsx)("div", {
        className: "inset-x-0 z-9999 overflow-hidden border-t border-brand-900 bg-linear-to-b from-brand-400 via-brand-500 to-brand-600 shadow-[0_0px_45px_20px_rgba(251,134,2,0.4)]",
        children: (0,
        e.jsx)(r.default, {
            autoFill: !0,
            speed: 44,
            gradient: !1,
            className: "py-2",
            children: t.map( (t, r) => (0,
            e.jsx)("span", {
                className: "mx-5 inline-block font-black tracking-[0.06em] text-[#1f0800] sm:mx-7",
                style: {
                    fontFamily: "inherit",
                    fontSize: "clamp(1.65rem, 2vw, 2.0rem)",
                    textShadow: "0 1px 0 rgba(255,225,140,0.28)"
                },
                children: t
            }, r))
        })
    })])
}
, 21419, t => {
    "use strict";
    t.s(["CA", 0, "0x1b9e5cde1a2f8c3b4d5e6f7890abcdef12345678", "StrategyOnX", 0, "https://x.com/Strategy/status/1958551440604983343"])
}
, 89970, t => {
    "use strict";
    function e(t) {
        if (void 0 === t)
            throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function r(t, e) {
        t.prototype = Object.create(e.prototype),
        t.prototype.constructor = t,
        t.__proto__ = e
    }
    var n, i, s, a, o, l, c, u, f, d, h, p, g, m, v, x, _, y, b, w, T, k, j, S, M, N, A, E, C = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, O = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, R = 2 * Math.PI, P = R / 4, z = 0, D = Math.sqrt, I = Math.cos, F = Math.sin, X = function(t) {
        return "string" == typeof t
    }, B = function(t) {
        return "function" == typeof t
    }, L = function(t) {
        return "number" == typeof t
    }, Y = function(t) {
        return void 0 === t
    }, H = function(t) {
        return "object" == typeof t
    }, q = function(t) {
        return !1 !== t
    }, U = function() {
        return "u" > typeof window
    }, W = function(t) {
        return B(t) || X(t)
    }, V = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , $ = Array.isArray, G = /random\([^)]+\)/g, Z = /,\s*/g, J = /(?:-?\.?\d|\.)+/gi, Q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, K = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, tt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, te = /[+-]=-?[.\d]+/, tr = /[^,'"\[\]\s]+/gi, tn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ti = {}, ts = {}, ta = function(t) {
        return (ts = tD(t, ti)) && rM
    }, to = function(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }, tl = function(t, e) {
        return !e && console.warn(t)
    }, tc = function(t, e) {
        return t && (ti[t] = e) && ts && (ts[t] = e) || ti
    }, tu = function() {
        return 0
    }, tf = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, td = {
        suppressEvents: !0,
        kill: !1
    }, th = {
        suppressEvents: !0
    }, tp = {}, tg = [], tm = {}, tv = {}, tx = {}, t_ = 30, ty = [], tb = "", tw = function(t) {
        var e, r, n = t[0];
        if (H(n) || B(n) || (t = [t]),
        !(e = (n._gsap || {}).harness)) {
            for (r = ty.length; r-- && !ty[r].targetTest(n); )
                ;
            e = ty[r]
        }
        for (r = t.length; r--; )
            t[r] && (t[r]._gsap || (t[r]._gsap = new eH(t[r],e))) || t.splice(r, 1);
        return t
    }, tT = function(t) {
        return t._gsap || tw(ea(t))[0]._gsap
    }, tk = function(t, e, r) {
        return (r = t[e]) && B(r) ? t[e]() : Y(r) && t.getAttribute && t.getAttribute(e) || r
    }, tj = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }, tS = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }, tM = function(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }, tN = function(t, e) {
        var r = e.charAt(0)
          , n = parseFloat(e.substr(2));
        return t = parseFloat(t),
        "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
    }, tA = function(t, e) {
        for (var r = e.length, n = 0; 0 > t.indexOf(e[n]) && ++n < r; )
            ;
        return n < r
    }, tE = function() {
        var t, e, r = tg.length, n = tg.slice(0);
        for (t = 0,
        tm = {},
        tg.length = 0; t < r; t++)
            (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }, tC = function(t) {
        return !!(t._initted || t._startAt || t.add)
    }, tO = function(t, e, r, n) {
        tg.length && !b && tE(),
        t.render(e, r, n || !!(b && e < 0 && tC(t))),
        tg.length && !b && tE()
    }, tR = function(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(tr).length < 2 ? e : X(t) ? t.trim() : t
    }, tP = function(t) {
        return t
    }, tz = function(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }, tD = function(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, tI = function t(e, r) {
        for (var n in r)
            "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = H(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
        return e
    }, tF = function(t, e) {
        var r, n = {};
        for (r in t)
            r in e || (n[r] = t[r]);
        return n
    }, tX = function(t) {
        var e, r = t.parent || T, n = t.keyframes ? (e = $(t.keyframes),
        function(t, r) {
            for (var n in r)
                n in t || "duration" === n && e || "ease" === n || (t[n] = r[n])
        }
        ) : tz;
        if (q(t.inherit))
            for (; r; )
                n(t, r.vars.defaults),
                r = r.parent || r._dp;
        return t
    }, tB = function(t, e) {
        for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r]; )
            ;
        return r < 0
    }, tL = function(t, e, r, n, i) {
        void 0 === r && (r = "_first"),
        void 0 === n && (n = "_last");
        var s, a = t[n];
        if (i)
            for (s = e[i]; a && a[i] > s; )
                a = a._prev;
        return a ? (e._next = a._next,
        a._next = e) : (e._next = t[r],
        t[r] = e),
        e._next ? e._next._prev = e : t[n] = e,
        e._prev = a,
        e.parent = e._dp = t,
        e
    }, tY = function(t, e, r, n) {
        void 0 === r && (r = "_first"),
        void 0 === n && (n = "_last");
        var i = e._prev
          , s = e._next;
        i ? i._next = s : t[r] === e && (t[r] = s),
        s ? s._prev = i : t[n] === e && (t[n] = i),
        e._next = e._prev = e.parent = null
    }, tH = function(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
        t._act = 0
    }, tq = function(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; )
                r._dirty = 1,
                r = r.parent;
        return t
    }, tU = function(t) {
        for (var e = t.parent; e && e.parent; )
            e._dirty = 1,
            e.totalDuration(),
            e = e.parent;
        return t
    }, tW = function(t, e, r, n) {
        return t._startAt && (b ? t._startAt.revert(td) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
    }, tV = function(t) {
        return t._repeat ? t$(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }, t$ = function(t, e) {
        var r = Math.floor(t = tM(t / e));
        return t && r === t ? r - 1 : r
    }, tG = function(t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }, tZ = function(t) {
        return t._end = tM(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
    }, tJ = function(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = tM(r._time - (t._ts > 0 ? e / t._ts : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))),
        tZ(t),
        r._dirty || tq(r, t)),
        t
    }, tQ = function(t, e) {
        var r;
        if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = tG(t.rawTime(), e),
        (!e._dur || er(0, e.totalDuration(), r) - e._tTime > 1e-8) && e.render(r, !0)),
        tq(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp; )
                    r.rawTime() >= 0 && r.totalTime(r._tTime),
                    r = r._dp;
            t._zTime = -1e-8
        }
    }, tK = function(t, e, r, n) {
        return e.parent && tH(e),
        e._start = tM((L(r) ? r : r || t !== T ? t9(t, r, e) : t._time) + e._delay),
        e._end = tM(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        tL(t, e, "_first", "_last", t._sort ? "_start" : 0),
        t5(e) || (t._recent = e),
        n || tQ(t, e),
        t._ts < 0 && tJ(t, t._tTime),
        t
    }, t0 = function(t, e) {
        return (ti.ScrollTrigger || to("scrollTrigger", e)) && ti.ScrollTrigger.create(e, t)
    }, t1 = function(t, e, r, n, i) {
        return (e2(t, e, i),
        t._initted) ? !r && t._pt && !b && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && N !== eA.frame ? (tg.push(t),
        t._lazy = [i, n],
        1) : void 0 : 1
    }, t2 = function t(e) {
        var r = e.parent;
        return r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || t(r))
    }, t5 = function(t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e
    }, t3 = function(t, e, r, n) {
        var i, s, a, o = t.ratio, l = e < 0 || !e && (!t._start && t2(t) && !(!t._initted && t5(t)) || (t._ts < 0 || t._dp._ts < 0) && !t5(t)) ? 0 : 1, c = t._rDelay, u = 0;
        if (c && t._repeat && (s = t$(u = er(0, t._tDur, e), c),
        t._yoyo && 1 & s && (l = 1 - l),
        s !== t$(t._tTime, c) && (o = 1 - l,
        t.vars.repeatRefresh && t._initted && t.invalidate())),
        l !== o || b || n || 1e-8 === t._zTime || !e && t._zTime) {
            if (!t._initted && t1(t, e, n, r, u))
                return;
            for (a = t._zTime,
            t._zTime = e || 1e-8 * !!r,
            r || (r = e && !a),
            t.ratio = l,
            t._from && (l = 1 - l),
            t._time = 0,
            t._tTime = u,
            i = t._pt; i; )
                i.r(l, i.d),
                i = i._next;
            e < 0 && tW(t, e, r, !0),
            t._onUpdate && !r && ev(t, "onUpdate"),
            u && t._repeat && !r && t.parent && ev(t, "onRepeat"),
            (e >= t._tDur || e < 0) && t.ratio === l && (l && tH(t, 1),
            r || b || (ev(t, l ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom()))
        } else
            t._zTime || (t._zTime = e)
    }, t4 = function(t, e, r) {
        var n;
        if (r > e)
            for (n = t._first; n && n._start <= r; ) {
                if ("isPause" === n.data && n._start > e)
                    return n;
                n = n._next
            }
        else
            for (n = t._last; n && n._start >= r; ) {
                if ("isPause" === n.data && n._start < e)
                    return n;
                n = n._prev
            }
    }, t8 = function(t, e, r, n) {
        var i = t._repeat
          , s = tM(e) || 0
          , a = t._tTime / t._tDur;
        return a && !n && (t._time *= s / t._dur),
        t._dur = s,
        t._tDur = i ? i < 0 ? 1e10 : tM(s * (i + 1) + t._rDelay * i) : s,
        a > 0 && !n && tJ(t, t._tTime = t._tDur * a),
        t.parent && tZ(t),
        r || tq(t.parent, t),
        t
    }, t6 = function(t) {
        return t instanceof eU ? tq(t) : t8(t, t._dur)
    }, t7 = {
        _start: 0,
        endTime: tu,
        totalDuration: tu
    }, t9 = function t(e, r, n) {
        var i, s, a, o = e.labels, l = e._recent || t7, c = e.duration() >= 1e8 ? l.endTime(!1) : e._dur;
        return X(r) && (isNaN(r) || r in o) ? (s = r.charAt(0),
        a = "%" === r.substr(-1),
        i = r.indexOf("="),
        "<" === s || ">" === s) ? (i >= 0 && (r = r.replace(/=/, "")),
        ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (i < 0 ? l : n).totalDuration() / 100 : 1)) : i < 0 ? (r in o || (o[r] = c),
        o[r]) : (s = parseFloat(r.charAt(i - 1) + r.substr(i + 1)),
        a && n && (s = s / 100 * ($(n) ? n[0] : n).totalDuration()),
        i > 1 ? t(e, r.substr(0, i - 1), n) + s : c + s) : null == r ? c : +r
    }, et = function(t, e, r) {
        var n, i, s = L(e[1]), a = (s ? 2 : 1) + (t < 2 ? 0 : 1), o = e[a];
        if (s && (o.duration = e[1]),
        o.parent = r,
        t) {
            for (n = o,
            i = r; i && !("immediateRender"in n); )
                n = i.vars.defaults || {},
                i = q(i.vars.inherit) && i.parent;
            o.immediateRender = q(n.immediateRender),
            t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
        }
        return new e9(e[0],o,e[a + 1])
    }, ee = function(t, e) {
        return t || 0 === t ? e(t) : e
    }, er = function(t, e, r) {
        return r < t ? t : r > e ? e : r
    }, en = function(t, e) {
        return X(t) && (e = tn.exec(t)) ? e[1] : ""
    }, ei = [].slice, es = function(t, e) {
        return t && H(t) && "length"in t && (!e && !t.length || t.length - 1 in t && H(t[0])) && !t.nodeType && t !== k
    }, ea = function(t, e, r) {
        var n;
        return w && !e && w.selector ? w.selector(t) : X(t) && !r && (j || !eE()) ? ei.call((e || S).querySelectorAll(t), 0) : $(t) ? (void 0 === n && (n = []),
        t.forEach(function(t) {
            var e;
            return X(t) && !r || es(t, 1) ? (e = n).push.apply(e, ea(t)) : n.push(t)
        }) || n) : es(t) ? ei.call(t, 0) : t ? [t] : []
    }, eo = function(t) {
        return t = ea(t)[0] || tl("Invalid scope") || {},
        function(e) {
            var r = t.current || t.nativeElement || t;
            return ea(e, r.querySelectorAll ? r : r === t ? tl("Invalid scope") || S.createElement("div") : t)
        }
    }, el = function(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }, ec = function(t) {
        if (B(t))
            return t;
        var e = H(t) ? t : {
            each: t
        }
          , r = eF(e.ease)
          , n = e.from || 0
          , i = parseFloat(e.base) || 0
          , s = {}
          , a = n > 0 && n < 1
          , o = isNaN(n) || a
          , l = e.axis
          , c = n
          , u = n;
        return X(n) ? c = u = ({
            center: .5,
            edges: .5,
            end: 1
        })[n] || 0 : !a && o && (c = n[0],
        u = n[1]),
        function(t, a, f) {
            var d, h, p, g, m, v, x, _, y, b = (f || e).length, w = s[b];
            if (!w) {
                if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                    for (x = -1e8; x < (x = f[y++].getBoundingClientRect().left) && y < b; )
                        ;
                    y < b && y--
                }
                for (v = 0,
                w = s[b] = [],
                d = o ? Math.min(y, b) * c - .5 : n % y,
                h = 1e8 === y ? 0 : o ? b * u / y - .5 : n / y | 0,
                x = 0,
                _ = 1e8; v < b; v++)
                    p = v % y - d,
                    g = h - (v / y | 0),
                    w[v] = m = l ? Math.abs("y" === l ? g : p) : D(p * p + g * g),
                    m > x && (x = m),
                    m < _ && (_ = m);
                "random" === n && el(w),
                w.max = x - _,
                w.min = _,
                w.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (y > b ? b - 1 : l ? "y" === l ? b / y : y : Math.max(y, b / y)) || 0) * ("edges" === n ? -1 : 1),
                w.b = b < 0 ? i - b : i,
                w.u = en(e.amount || e.each) || 0,
                r = r && b < 0 ? eI(r) : r
            }
            return b = (w[t] - w.min) / w.max || 0,
            tM(w.b + (r ? r(b) : b) * w.v) + w.u
        }
    }, eu = function(t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function(r) {
            var n = tM(Math.round(parseFloat(r) / t) * t * e);
            return (n - n % 1) / e + (L(r) ? 0 : en(r))
        }
    }, ef = function(t, e) {
        var r, n, i = $(t);
        return !i && H(t) && (r = i = t.radius || 1e8,
        t.values ? (n = !L((t = ea(t.values))[0])) && (r *= r) : t = eu(t.increment)),
        ee(e, i ? B(t) ? function(e) {
            return Math.abs((n = t(e)) - e) <= r ? n : e
        }
        : function(e) {
            for (var i, s, a = parseFloat(n ? e.x : e), o = parseFloat(n ? e.y : 0), l = 1e8, c = 0, u = t.length; u--; )
                (i = n ? (i = t[u].x - a) * i + (s = t[u].y - o) * s : Math.abs(t[u] - a)) < l && (l = i,
                c = u);
            return c = !r || l <= r ? t[c] : e,
            n || c === e || L(e) ? c : c + en(e)
        }
        : eu(t))
    }, ed = function(t, e, r, n) {
        return ee($(t) ? !e : !0 === r ? (r = 0,
        !1) : !n, function() {
            return $(t) ? t[~~(Math.random() * t.length)] : (n = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
        })
    }, eh = function(t, e, r) {
        return ee(r, function(r) {
            return t[~~e(r)]
        })
    }, ep = function(t) {
        return t.replace(G, function(t) {
            var e = t.indexOf("[") + 1
              , r = t.substring(e || 7, e ? t.indexOf("]") : t.length - 1).split(Z);
            return ed(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5)
        })
    }, eg = function(t, e, r, n, i) {
        var s = e - t
          , a = n - r;
        return ee(i, function(e) {
            return r + ((e - t) / s * a || 0)
        })
    }, em = function(t, e, r) {
        var n, i, s, a = t.labels, o = 1e8;
        for (n in a)
            (i = a[n] - e) < 0 == !!r && i && o > (i = Math.abs(i)) && (s = n,
            o = i);
        return s
    }, ev = function(t, e, r) {
        var n, i, s, a = t.vars, o = a[e], l = w, c = t._ctx;
        if (o)
            return n = a[e + "Params"],
            i = a.callbackScope || t,
            r && tg.length && tE(),
            c && (w = c),
            s = n ? o.apply(i, n) : o.call(i),
            w = l,
            s
    }, ex = function(t) {
        return tH(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!b),
        1 > t.progress() && ev(t, "onInterrupt"),
        t
    }, e_ = [], ey = function(t) {
        if (t)
            if (t = !t.name && t.default || t,
            U() || t.headless) {
                var e = t.name
                  , r = B(t)
                  , n = e && !r && t.init ? function() {
                    this._props = []
                }
                : t
                  , i = {
                    init: tu,
                    render: rl,
                    add: eK,
                    kill: ru,
                    modifier: rc,
                    rawVars: 0
                }
                  , s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: ri,
                    aliases: {},
                    register: 0
                };
                if (eE(),
                t !== n) {
                    if (tv[e])
                        return;
                    tz(n, tz(tF(t, i), s)),
                    tD(n.prototype, tD(i, tF(t, s))),
                    tv[n.prop = e] = n,
                    t.targetTest && (ty.push(n),
                    tp[e] = 1),
                    e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                tc(e, n),
                t.register && t.register(rM, n, rh)
            } else
                e_.push(t)
    }, eb = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0]
    }, ew = function(t, e, r) {
        return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * 255 + .5 | 0
    }, eT = function(t, e, r) {
        var n, i, s, a, o, l, c, u, f, d, h = t ? L(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : eb.black;
        if (!h) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            eb[t])
                h = eb[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (n = t.charAt(1),
                t = "#" + n + n + (i = t.charAt(2)) + i + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
                    return [(h = parseInt(t.substr(1, 6), 16)) >> 16, h >> 8 & 255, 255 & h, parseInt(t.substr(7), 16) / 255];
                h = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
            } else if ("hsl" === t.substr(0, 3))
                if (h = d = t.match(J),
                e) {
                    if (~t.indexOf("="))
                        return h = t.match(Q),
                        r && h.length < 4 && (h[3] = 1),
                        h
                } else
                    a = h[0] % 360 / 360,
                    o = h[1] / 100,
                    i = (l = h[2] / 100) <= .5 ? l * (o + 1) : l + o - l * o,
                    n = 2 * l - i,
                    h.length > 3 && (h[3] *= 1),
                    h[0] = ew(a + 1 / 3, n, i),
                    h[1] = ew(a, n, i),
                    h[2] = ew(a - 1 / 3, n, i);
            else
                h = t.match(J) || eb.transparent;
            h = h.map(Number)
        }
        return e && !d && (n = h[0] / 255,
        l = ((c = Math.max(n, i = h[1] / 255, s = h[2] / 255)) + (u = Math.min(n, i, s))) / 2,
        c === u ? a = o = 0 : (f = c - u,
        o = l > .5 ? f / (2 - c - u) : f / (c + u),
        a = (c === n ? (i - s) / f + 6 * (i < s) : c === i ? (s - n) / f + 2 : (n - i) / f + 4) * 60),
        h[0] = ~~(a + .5),
        h[1] = ~~(100 * o + .5),
        h[2] = ~~(100 * l + .5)),
        r && h.length < 4 && (h[3] = 1),
        h
    }, ek = function(t) {
        var e = []
          , r = []
          , n = -1;
        return t.split(eS).forEach(function(t) {
            var i = t.match(K) || [];
            e.push.apply(e, i),
            r.push(n += i.length + 1)
        }),
        e.c = r,
        e
    }, ej = function(t, e, r) {
        var n, i, s, a, o = "", l = (t + o).match(eS), c = e ? "hsla(" : "rgba(", u = 0;
        if (!l)
            return t;
        if (l = l.map(function(t) {
            return (t = eT(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        r && (s = ek(t),
        (n = r.c).join(o) !== s.c.join(o)))
            for (a = (i = t.replace(eS, "1").split(K)).length - 1; u < a; u++)
                o += i[u] + (~n.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (s.length ? s : l.length ? l : r).shift());
        if (!i)
            for (a = (i = t.split(eS)).length - 1; u < a; u++)
                o += i[u] + l[u];
        return o + i[a]
    }, eS = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in eb)
            e += "|" + t + "\\b";
        return RegExp(e + ")", "gi")
    }(), eM = /hsl[a]?\(/, eN = function(t) {
        var e, r = t.join(" ");
        if (eS.lastIndex = 0,
        eS.test(r))
            return e = eM.test(r),
            t[1] = ej(t[1], e),
            t[0] = ej(t[0], e, ek(t[1])),
            !0
    }, eA = (f = Date.now,
    d = 500,
    h = 33,
    g = p = f(),
    m = 1e3 / 240,
    v = 1e3 / 240,
    x = [],
    _ = function t(e) {
        var r, n, i, o, _ = f() - g, y = !0 === e;
        if ((_ > d || _ < 0) && (p += _ - h),
        g += _,
        ((r = (i = g - p) - v) > 0 || y) && (o = ++l.frame,
        c = i - 1e3 * l.time,
        l.time = i /= 1e3,
        v += r + (r >= m ? 4 : m - r),
        n = 1),
        y || (s = a(t)),
        n)
            for (u = 0; u < x.length; u++)
                x[u](i, c, o, e)
    }
    ,
    l = {
        time: 0,
        frame: 0,
        tick: function() {
            _(!0)
        },
        deltaRatio: function(t) {
            return c / (1e3 / (t || 60))
        },
        wake: function() {
            M && (!j && U() && (S = (k = j = window).document || {},
            ti.gsap = rM,
            (k.gsapVersions || (k.gsapVersions = [])).push(rM.version),
            ta(ts || k.GreenSockGlobals || !k.gsap && k || {}),
            e_.forEach(ey)),
            o = "u" > typeof requestAnimationFrame && requestAnimationFrame,
            s && l.sleep(),
            a = o || function(t) {
                return setTimeout(t, v - 1e3 * l.time + 1 | 0)
            }
            ,
            E = 1,
            _(2))
        },
        sleep: function() {
            (o ? cancelAnimationFrame : clearTimeout)(s),
            E = 0,
            a = tu
        },
        lagSmoothing: function(t, e) {
            h = Math.min(e || 33, d = t || 1 / 0)
        },
        fps: function(t) {
            m = 1e3 / (t || 240),
            v = 1e3 * l.time + m
        },
        add: function(t, e, r) {
            var n = e ? function(e, r, i, s) {
                t(e, r, i, s),
                l.remove(n)
            }
            : t;
            return l.remove(t),
            x[r ? "unshift" : "push"](n),
            eE(),
            n
        },
        remove: function(t, e) {
            ~(e = x.indexOf(t)) && x.splice(e, 1) && u >= e && u--
        },
        _listeners: x
    }), eE = function() {
        return !E && eA.wake()
    }, eC = {}, eO = /^[\d.\-M][\d.\-,\s]/, eR = /["']/g, eP = function(t) {
        for (var e, r, n, i = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, l = s.length; o < l; o++)
            r = s[o],
            e = o !== l - 1 ? r.lastIndexOf(",") : r.length,
            n = r.substr(0, e),
            i[a] = isNaN(n) ? n.replace(eR, "").trim() : +n,
            a = r.substr(e + 1).trim();
        return i
    }, ez = function(t) {
        var e = t.indexOf("(") + 1
          , r = t.indexOf(")")
          , n = t.indexOf("(", e);
        return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r)
    }, eD = function(t) {
        var e = (t + "").split("(")
          , r = eC[e[0]];
        return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [eP(e[1])] : ez(t).split(",").map(tR)) : eC._CE && eO.test(t) ? eC._CE("", t) : r
    }, eI = function(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    }, eF = function(t, e) {
        return t && (B(t) ? t : eC[t] || eD(t)) || e
    }, eX = function(t, e, r, n) {
        void 0 === r && (r = function(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === n && (n = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2
        }
        );
        var i, s = {
            easeIn: e,
            easeOut: r,
            easeInOut: n
        };
        return tj(t, function(t) {
            for (var e in eC[t] = ti[t] = s,
            eC[i = t.toLowerCase()] = r,
            s)
                eC[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = eC[t + "." + e] = s[e]
        }),
        s
    }, eB = function(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t((e - .5) * 2) / 2
        }
    }, eL = function t(e, r, n) {
        var i = r >= 1 ? r : 1
          , s = (n || (e ? .3 : .45)) / (r < 1 ? r : 1)
          , a = s / R * (Math.asin(1 / i) || 0)
          , o = function(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * F((t - a) * s) + 1
        }
          , l = "out" === e ? o : "in" === e ? function(t) {
            return 1 - o(1 - t)
        }
        : eB(o);
        return s = R / s,
        l.config = function(r, n) {
            return t(e, r, n)
        }
        ,
        l
    }, eY = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var n = function(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
          , i = "out" === e ? n : "in" === e ? function(t) {
            return 1 - n(1 - t)
        }
        : eB(n);
        return i.config = function(r) {
            return t(e, r)
        }
        ,
        i
    };
    tj("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        eX(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        }
        : function(t) {
            return t
        }
        , function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2
        })
    }),
    eC.Linear.easeNone = eC.none = eC.Linear.easeIn,
    eX("Elastic", eL("in"), eL("out"), eL()),
    eV = 2 * (eW = 1 / 2.75),
    e$ = 2.5 * eW,
    eX("Bounce", function(t) {
        return 1 - eG(1 - t)
    }, eG = function(t) {
        return t < eW ? 7.5625 * t * t : t < eV ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < e$ ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ),
    eX("Expo", function(t) {
        return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
    }),
    eX("Circ", function(t) {
        return -(D(1 - t * t) - 1)
    }),
    eX("Sine", function(t) {
        return 1 === t ? 1 : -I(t * P) + 1
    }),
    eX("Back", eY("in"), eY("out"), eY()),
    eC.SteppedEase = eC.steps = ti.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t
              , n = t + +!e
              , i = +!!e
              , s = .99999999;
            return function(t) {
                return ((n * er(0, s, t) | 0) + i) * r
            }
        }
    },
    O.ease = eC["quad.out"],
    tj("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return tb += t + "," + t + "Params,"
    });
    var eH = function(t, e) {
        this.id = z++,
        t._gsap = this,
        this.target = t,
        this.harness = e,
        this.get = e ? e.get : tk,
        this.set = e ? e.getSetter : ri
    }
      , eq = function() {
        function t(t) {
            this.vars = t,
            this._delay = +t.delay || 0,
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
            this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            t8(this, +t.duration, 1, 1),
            this.data = t.data,
            w && (this._ctx = w,
            w.data.push(this)),
            E || eA.wake()
        }
        var e = t.prototype;
        return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }
        ,
        e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0,
            t8(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        e.totalTime = function(t, e) {
            if (eE(),
            !arguments.length)
                return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (tJ(this, t),
                !r._dp || r.parent || tQ(r, this); r && r.parent; )
                    r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : -((r.totalDuration() - r._tTime) / r._ts)) && r.totalTime(r._tTime, !0),
                    r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && tK(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !this._initted && this._dur && t || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
            tO(this, t, e)),
            this
        }
        ,
        e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + tV(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }
        ,
        e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
        }
        ,
        e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) + tV(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : +(this.rawTime() > 0)
        }
        ,
        e.iteration = function(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? t$(this._tTime, r) + 1 : 1
        }
        ,
        e.timeScale = function(t, e) {
            if (!arguments.length)
                return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t)
                return this;
            var r = this.parent && this._ts ? tG(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0,
            this._ts = this._ps || -1e-8 === t ? 0 : this._rts,
            this.totalTime(er(-Math.abs(this._delay), this.totalDuration(), r), !1 !== e),
            tZ(this),
            tU(this)
        }
        ,
        e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t,
            t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (eE(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))),
            this) : this._ps
        }
        ,
        e.startTime = function(t) {
            if (arguments.length) {
                this._start = tM(t);
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && tK(e, this, this._start - this._delay),
                this
            }
            return this._start
        }
        ,
        e.endTime = function(t) {
            return this._start + (q(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        ,
        e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? tG(e.rawTime(t), this) : this._tTime : this._tTime
        }
        ,
        e.revert = function(t) {
            void 0 === t && (t = th);
            var e = b;
            return b = t,
            tC(this) && (this.timeline && this.timeline.revert(t),
            this.totalTime(-.01, t.suppressEvents)),
            "nested" !== this.data && !1 !== t.kill && this.kill(),
            b = e,
            this
        }
        ,
        e.globalTime = function(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                r = e._start + r / (Math.abs(e._ts) || 1),
                e = e._dp;
            return !this.parent && this._sat ? this._sat.globalTime(t) : r
        }
        ,
        e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
            t6(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        ,
        e.repeatDelay = function(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t,
                t6(this),
                e ? this.time(e) : this
            }
            return this._rDelay
        }
        ,
        e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        e.seek = function(t, e) {
            return this.totalTime(t9(this, t), q(e))
        }
        ,
        e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, q(e)),
            this._dur || (this._zTime = -1e-8),
            this
        }
        ,
        e.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        e.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        e.resume = function() {
            return this.paused(!1)
        }
        ,
        e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)),
            this) : this._rts < 0
        }
        ,
        e.invalidate = function() {
            return this._initted = this._act = 0,
            this._zTime = -1e-8,
            this
        }
        ,
        e.isActive = function() {
            var t, e = this.parent || this._dp, r = this._start;
            return !!(!e || this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - 1e-8)
        }
        ,
        e.eventCallback = function(t, e, r) {
            var n = this.vars;
            return arguments.length > 1 ? (e ? (n[t] = e,
            r && (n[t + "Params"] = r),
            "onUpdate" === t && (this._onUpdate = e)) : delete n[t],
            this) : n[t]
        }
        ,
        e.then = function(t) {
            var e = this
              , r = e._prom;
            return new Promise(function(n) {
                var i = B(t) ? t : tP
                  , s = function() {
                    var t = e.then;
                    e.then = null,
                    r && r(),
                    B(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                    n(i),
                    e.then = t
                };
                e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? s() : e._prom = s
            }
            )
        }
        ,
        e.kill = function() {
            ex(this)
        }
        ,
        t
    }();
    tz(eq.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var eU = function(t) {
        function n(r, n) {
            var i;
            return void 0 === r && (r = {}),
            (i = t.call(this, r) || this).labels = {},
            i.smoothChildTiming = !!r.smoothChildTiming,
            i.autoRemoveChildren = !!r.autoRemoveChildren,
            i._sort = q(r.sortChildren),
            T && tK(r.parent || T, e(i), n),
            r.reversed && i.reverse(),
            r.paused && i.paused(!0),
            r.scrollTrigger && t0(e(i), r.scrollTrigger),
            i
        }
        r(n, t);
        var i = n.prototype;
        return i.to = function(t, e, r) {
            return et(0, arguments, this),
            this
        }
        ,
        i.from = function(t, e, r) {
            return et(1, arguments, this),
            this
        }
        ,
        i.fromTo = function(t, e, r, n) {
            return et(2, arguments, this),
            this
        }
        ,
        i.set = function(t, e, r) {
            return e.duration = 0,
            e.parent = this,
            tX(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new e9(t,e,t9(this, r),1),
            this
        }
        ,
        i.call = function(t, e, r) {
            return tK(this, e9.delayedCall(0, t, e), r)
        }
        ,
        i.staggerTo = function(t, e, r, n, i, s, a) {
            return r.duration = e,
            r.stagger = r.stagger || n,
            r.onComplete = s,
            r.onCompleteParams = a,
            r.parent = this,
            new e9(t,r,t9(this, i)),
            this
        }
        ,
        i.staggerFrom = function(t, e, r, n, i, s, a) {
            return r.runBackwards = 1,
            tX(r).immediateRender = q(r.immediateRender),
            this.staggerTo(t, e, r, n, i, s, a)
        }
        ,
        i.staggerFromTo = function(t, e, r, n, i, s, a, o) {
            return n.startAt = r,
            tX(n).immediateRender = q(n.immediateRender),
            this.staggerTo(t, e, n, i, s, a, o)
        }
        ,
        i.render = function(t, e, r) {
            var n, i, s, a, o, l, c, u, f, d, h, p, g = this._time, m = this._dirty ? this.totalDuration() : this._tDur, v = this._dur, x = t <= 0 ? 0 : tM(t), _ = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (this !== T && x > m && t >= 0 && (x = m),
            x !== this._tTime || r || _) {
                if (g !== this._time && v && (x += this._time - g,
                t += this._time - g),
                n = x,
                f = this._start,
                l = !(u = this._ts),
                _ && (v || (g = this._zTime),
                (t || !e) && (this._zTime = t)),
                this._repeat) {
                    if (h = this._yoyo,
                    o = v + this._rDelay,
                    this._repeat < -1 && t < 0)
                        return this.totalTime(100 * o + t, e, r);
                    if (n = tM(x % o),
                    x === m ? (a = this._repeat,
                    n = v) : ((a = ~~(d = tM(x / o))) && a === d && (n = v,
                    a--),
                    n > v && (n = v)),
                    d = t$(this._tTime, o),
                    !g && this._tTime && d !== a && this._tTime - d * o - this._dur <= 0 && (d = a),
                    h && 1 & a && (n = v - n,
                    p = 1),
                    a !== d && !this._lock) {
                        var y = h && 1 & d
                          , w = y === (h && 1 & a);
                        if (a < d && (y = !y),
                        g = y ? 0 : x % v ? v : x,
                        this._lock = 1,
                        this.render(g || (p ? 0 : tM(a * o)), e, !v)._lock = 0,
                        this._tTime = x,
                        !e && this.parent && ev(this, "onRepeat"),
                        this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1,
                        d = a),
                        g && g !== this._time || !this._ts !== l || this.vars.onRepeat && !this.parent && !this._act || (v = this._dur,
                        m = this._tDur,
                        w && (this._lock = 2,
                        g = y ? v : -1e-4,
                        this.render(g, !0),
                        this.vars.repeatRefresh && !p && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !l))
                            return this
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (c = t4(this, tM(g), tM(n))) && (x -= n - (n = c._start)),
                this._tTime = x,
                this._time = n,
                this._act = !!u,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t,
                g = 0),
                !g && x && v && !e && !d && (ev(this, "onStart"),
                this._tTime !== x))
                    return this;
                if (n >= g && t >= 0)
                    for (i = this._first; i; ) {
                        if (s = i._next,
                        (i._act || n >= i._start) && i._ts && c !== i) {
                            if (i.parent !== this)
                                return this.render(t, e, r);
                            if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r),
                            n !== this._time || !this._ts && !l) {
                                c = 0,
                                s && (x += this._zTime = -1e-8);
                                break
                            }
                        }
                        i = s
                    }
                else {
                    i = this._last;
                    for (var k = t < 0 ? t : n; i; ) {
                        if (s = i._prev,
                        (i._act || k <= i._end) && i._ts && c !== i) {
                            if (i.parent !== this)
                                return this.render(t, e, r);
                            if (i.render(i._ts > 0 ? (k - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (k - i._start) * i._ts, e, r || b && tC(i)),
                            n !== this._time || !this._ts && !l) {
                                c = 0,
                                s && (x += this._zTime = k ? -1e-8 : 1e-8);
                                break
                            }
                        }
                        i = s
                    }
                }
                if (c && !e && (this.pause(),
                c.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1,
                this._ts))
                    return this._start = f,
                    tZ(this),
                    this.render(t, e, r);
                this._onUpdate && !e && ev(this, "onUpdate", !0),
                (x === m && this._tTime >= this.totalDuration() || !x && g) && (f === this._start || Math.abs(u) !== Math.abs(this._ts)) && !this._lock && ((t || !v) && (x === m && this._ts > 0 || !x && this._ts < 0) && tH(this, 1),
                e || t < 0 && !g || !x && !g && m || (ev(this, x === m && t >= 0 ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(x < m && this.timeScale() > 0) && this._prom()))
            }
            return this
        }
        ,
        i.add = function(t, e) {
            var r = this;
            if (L(e) || (e = t9(this, e, t)),
            !(t instanceof eq)) {
                if ($(t))
                    return t.forEach(function(t) {
                        return r.add(t, e)
                    }),
                    this;
                if (X(t))
                    return this.addLabel(t, e);
                if (!B(t))
                    return this;
                t = e9.delayedCall(0, t)
            }
            return this !== t ? tK(this, t, e) : this
        }
        ,
        i.getChildren = function(t, e, r, n) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === n && (n = -1e8);
            for (var i = [], s = this._first; s; )
                s._start >= n && (s instanceof e9 ? e && i.push(s) : (r && i.push(s),
                t && i.push.apply(i, s.getChildren(!0, e, r)))),
                s = s._next;
            return i
        }
        ,
        i.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t)
                    return e[r]
        }
        ,
        i.remove = function(t) {
            return X(t) ? this.removeLabel(t) : B(t) ? this.killTweensOf(t) : (t.parent === this && tY(this, t),
            t === this._recent && (this._recent = this._last),
            tq(this))
        }
        ,
        i.totalTime = function(e, r) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = tM(eA.time - (this._ts > 0 ? e / this._ts : -((this.totalDuration() - e) / this._ts)))),
            t.prototype.totalTime.call(this, e, r),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        i.addLabel = function(t, e) {
            return this.labels[t] = t9(this, e),
            this
        }
        ,
        i.removeLabel = function(t) {
            return delete this.labels[t],
            this
        }
        ,
        i.addPause = function(t, e, r) {
            var n = e9.delayedCall(0, e || tu, r);
            return n.data = "isPause",
            this._hasPause = 1,
            tK(this, n, t9(this, t))
        }
        ,
        i.removePause = function(t) {
            var e = this._first;
            for (t = t9(this, t); e; )
                e._start === t && "isPause" === e.data && tH(e),
                e = e._next
        }
        ,
        i.killTweensOf = function(t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--; )
                eZ !== n[i] && n[i].kill(t, e);
            return this
        }
        ,
        i.getTweensOf = function(t, e) {
            for (var r, n = [], i = ea(t), s = this._first, a = L(e); s; )
                s instanceof e9 ? tA(s._targets, i) && (a ? (!eZ || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
                s = s._next;
            return n
        }
        ,
        i.tweenTo = function(t, e) {
            e = e || {};
            var r, n = this, i = t9(n, t), s = e, a = s.startAt, o = s.onStart, l = s.onStartParams, c = s.immediateRender, u = e9.to(n, tz({
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: i,
                overwrite: "auto",
                duration: e.duration || Math.abs((i - (a && "time"in a ? a.time : n._time)) / n.timeScale()) || 1e-8,
                onStart: function() {
                    if (n.pause(),
                    !r) {
                        var t = e.duration || Math.abs((i - (a && "time"in a ? a.time : n._time)) / n.timeScale());
                        u._dur !== t && t8(u, t, 0, 1).render(u._time, !0, !0),
                        r = 1
                    }
                    o && o.apply(u, l || [])
                }
            }, e));
            return c ? u.render(0) : u
        }
        ,
        i.tweenFromTo = function(t, e, r) {
            return this.tweenTo(e, tz({
                startAt: {
                    time: t9(this, t)
                }
            }, r))
        }
        ,
        i.recent = function() {
            return this._recent
        }
        ,
        i.nextLabel = function(t) {
            return void 0 === t && (t = this._time),
            em(this, t9(this, t))
        }
        ,
        i.previousLabel = function(t) {
            return void 0 === t && (t = this._time),
            em(this, t9(this, t), 1)
        }
        ,
        i.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
        }
        ,
        i.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            var n, i = this._first, s = this.labels;
            for (t = tM(t); i; )
                i._start >= r && (i._start += t,
                i._end += t),
                i = i._next;
            if (e)
                for (n in s)
                    s[n] >= r && (s[n] += t);
            return tq(this)
        }
        ,
        i.invalidate = function(e) {
            var r = this._first;
            for (this._lock = 0; r; )
                r.invalidate(e),
                r = r._next;
            return t.prototype.invalidate.call(this, e)
        }
        ,
        i.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
                e = r._next,
                this.remove(r),
                r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            tq(this)
        }
        ,
        i.totalDuration = function(t) {
            var e, r, n, i = 0, s = this._last, a = 1e8;
            if (arguments.length)
                return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -t : t));
            if (this._dirty) {
                for (n = this.parent; s; )
                    e = s._prev,
                    s._dirty && s.totalDuration(),
                    (r = s._start) > a && this._sort && s._ts && !this._lock ? (this._lock = 1,
                    tK(this, s, r - s._delay, 1)._lock = 0) : a = r,
                    r < 0 && s._ts && (i -= r,
                    (!n && !this._dp || n && n.smoothChildTiming) && (this._start += tM(r / this._ts),
                    this._time -= r,
                    this._tTime -= r),
                    this.shiftChildren(-r, !1, -Infinity),
                    a = 0),
                    s._end > i && s._ts && (i = s._end),
                    s = e;
                t8(this, this === T && this._time > i ? this._time : i, 1, 1),
                this._dirty = 0
            }
            return this._tDur
        }
        ,
        n.updateRoot = function(t) {
            if (T._ts && (tO(T, tG(t, T)),
            N = eA.frame),
            eA.frame >= t_) {
                t_ += C.autoSleep || 120;
                var e = T._first;
                if ((!e || !e._ts) && C.autoSleep && eA._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || eA.sleep()
                }
            }
        }
        ,
        n
    }(eq);
    tz(eU.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var eW, eV, e$, eG, eZ, eJ, eQ = function(t, e, r, n, i, s, a) {
        var o, l, c, u, f, d, h, p, g = new rh(this._pt,t,e,0,1,ro,null,i), m = 0, v = 0;
        for (g.b = r,
        g.e = n,
        r += "",
        n += "",
        (h = ~n.indexOf("random(")) && (n = ep(n)),
        s && (s(p = [r, n], t, e),
        r = p[0],
        n = p[1]),
        l = r.match(tt) || []; o = tt.exec(n); )
            u = o[0],
            f = n.substring(m, o.index),
            c ? c = (c + 1) % 5 : "rgba(" === f.substr(-5) && (c = 1),
            u !== l[v++] && (d = parseFloat(l[v - 1]) || 0,
            g._pt = {
                _next: g._pt,
                p: f || 1 === v ? f : ",",
                s: d,
                c: "=" === u.charAt(1) ? tN(d, u) - d : parseFloat(u) - d,
                m: c && c < 4 ? Math.round : 0
            },
            m = tt.lastIndex);
        return g.c = m < n.length ? n.substring(m, n.length) : "",
        g.fp = a,
        (te.test(n) || h) && (g.e = 0),
        this._pt = g,
        g
    }, eK = function(t, e, r, n, i, s, a, o, l, c) {
        B(n) && (n = n(i || 0, t, s));
        var u, f = t[e], d = "get" !== r ? r : B(f) ? l ? t[e.indexOf("set") || !B(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : f, h = B(f) ? l ? rr : re : rt;
        if (X(n) && (~n.indexOf("random(") && (n = ep(n)),
        "=" === n.charAt(1) && ((u = tN(d, n) + (en(d) || 0)) || 0 === u) && (n = u)),
        !c || d !== n || eJ)
            return isNaN(d * n) || "" === n ? (f || e in t || to(e, n),
            eQ.call(this, t, e, d, n, h, o || C.stringFilter, l)) : (u = new rh(this._pt,t,e,+d || 0,n - (d || 0),"boolean" == typeof f ? ra : rs,0,h),
            l && (u.fp = l),
            a && u.modifier(a, this, t),
            this._pt = u)
    }, e0 = function(t, e, r, n, i) {
        if (B(t) && (t = e8(t, i, e, r, n)),
        !H(t) || t.style && t.nodeType || $(t) || V(t))
            return X(t) ? e8(t, i, e, r, n) : t;
        var s, a = {};
        for (s in t)
            a[s] = e8(t[s], i, e, r, n);
        return a
    }, e1 = function(t, e, r, n, i, s) {
        var a, o, l, c;
        if (tv[t] && !1 !== (a = new tv[t]).init(i, a.rawVars ? e[t] : e0(e[t], n, i, s, r), r, n, s) && (r._pt = o = new rh(r._pt,i,t,0,1,a.render,a,0,a.priority),
        r !== A))
            for (l = r._ptLookup[r._targets.indexOf(i)],
            c = a._props.length; c--; )
                l[a._props[c]] = o;
        return a
    }, e2 = function t(e, r, n) {
        var i, s, a, o, l, c, u, f, d, h, p, g, m, v = e.vars, x = v.ease, _ = v.startAt, w = v.immediateRender, k = v.lazy, j = v.onUpdate, S = v.runBackwards, M = v.yoyoEase, N = v.keyframes, A = v.autoRevert, E = e._dur, C = e._startAt, R = e._targets, P = e.parent, z = P && "nested" === P.data ? P.vars.targets : R, D = "auto" === e._overwrite && !y, I = e.timeline, F = v.easeReverse || M;
        if (!I || N && x || (x = "none"),
        e._ease = eF(x, O.ease),
        e._rEase = F && (eF(F) || e._ease),
        e._from = !I && !!v.runBackwards,
        e._from && (e.ratio = 1),
        !I || N && !v.stagger) {
            if (g = (f = R[0] ? tT(R[0]).harness : 0) && v[f.prop],
            i = tF(v, tp),
            C && (C._zTime < 0 && C.progress(1),
            r < 0 && S && w && !A ? C.render(-1, !0) : C.revert(S && E ? td : tf),
            C._lazy = 0),
            _) {
                if (tH(e._startAt = e9.set(R, tz({
                    data: "isStart",
                    overwrite: !1,
                    parent: P,
                    immediateRender: !0,
                    lazy: !C && q(k),
                    startAt: null,
                    delay: 0,
                    onUpdate: j && function() {
                        return ev(e, "onUpdate")
                    }
                    ,
                    stagger: 0
                }, _))),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                r < 0 && (b || !w && !A) && e._startAt.revert(td),
                w && E && r <= 0 && n <= 0) {
                    r && (e._zTime = r);
                    return
                }
            } else if (S && E && !C)
                if (r && (w = !1),
                a = tz({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: w && !C && q(k),
                    immediateRender: w,
                    stagger: 0,
                    parent: P
                }, i),
                g && (a[f.prop] = g),
                tH(e._startAt = e9.set(R, a)),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                r < 0 && (b ? e._startAt.revert(td) : e._startAt.render(-1, !0)),
                e._zTime = r,
                w) {
                    if (!r)
                        return
                } else
                    t(e._startAt, 1e-8, 1e-8);
            for (s = 0,
            e._pt = e._ptCache = 0,
            k = E && q(k) || k && !E; s < R.length; s++) {
                if (u = (l = R[s])._gsap || tw(R)[s]._gsap,
                e._ptLookup[s] = h = {},
                tm[u.id] && tg.length && tE(),
                p = z === R ? s : z.indexOf(l),
                f && !1 !== (d = new f).init(l, g || i, e, p, z) && (e._pt = o = new rh(e._pt,l,d.name,0,1,d.render,d,0,d.priority),
                d._props.forEach(function(t) {
                    h[t] = o
                }),
                d.priority && (c = 1)),
                !f || g)
                    for (a in i)
                        tv[a] && (d = e1(a, i, e, p, l, z)) ? d.priority && (c = 1) : h[a] = o = eK.call(e, l, a, "get", i[a], p, z, 0, v.stringFilter);
                e._op && e._op[s] && e.kill(l, e._op[s]),
                D && e._pt && (eZ = e,
                T.killTweensOf(l, h, e.globalTime(r)),
                m = !e.parent,
                eZ = 0),
                e._pt && k && (tm[u.id] = 1)
            }
            c && rd(e),
            e._onInit && e._onInit(e)
        }
        e._onUpdate = j,
        e._initted = (!e._op || e._pt) && !m,
        N && r <= 0 && I.render(1e8, !0, !0)
    }, e5 = function(t, e, r, n, i, s, a, o) {
        var l, c, u, f, d = (t._pt && t._ptCache || (t._ptCache = {}))[e];
        if (!d)
            for (d = t._ptCache[e] = [],
            u = t._ptLookup,
            f = t._targets.length; f--; ) {
                if ((l = u[f][e]) && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
                        l = l._next;
                if (!l)
                    return eJ = 1,
                    t.vars[e] = "+=0",
                    e2(t, a),
                    eJ = 0,
                    o ? tl(e + " not eligible for reset. Try splitting into individual properties") : 1;
                d.push(l)
            }
        for (f = d.length; f--; )
            (l = (c = d[f])._pt || c).s = (n || 0 === n) && !i ? n : l.s + (n || 0) + s * l.c,
            l.c = r - l.s,
            c.e && (c.e = tS(r) + en(c.e)),
            c.b && (c.b = l.s + en(c.b))
    }, e3 = function(t, e) {
        var r, n, i, s, a = t[0] ? tT(t[0]).harness : 0, o = a && a.aliases;
        if (!o)
            return e;
        for (n in r = tD({}, e),
        o)
            if (n in r)
                for (i = (s = o[n].split(",")).length; i--; )
                    r[s[i]] = r[n];
        return r
    }, e4 = function(t, e, r, n) {
        var i, s, a = e.ease || n || "power1.inOut";
        if ($(e))
            s = r[t] || (r[t] = []),
            e.forEach(function(t, r) {
                return s.push({
                    t: r / (e.length - 1) * 100,
                    v: t,
                    e: a
                })
            });
        else
            for (i in e)
                s = r[i] || (r[i] = []),
                "ease" === i || s.push({
                    t: parseFloat(t),
                    v: e[i],
                    e: a
                })
    }, e8 = function(t, e, r, n, i) {
        return B(t) ? t.call(e, r, n, i) : X(t) && ~t.indexOf("random(") ? ep(t) : t
    }, e6 = tb + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", e7 = {};
    tj(e6 + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return e7[t] = 1
    });
    var e9 = function(t) {
        function n(r, n, i, s) {
            "number" == typeof n && (i.duration = n,
            n = i,
            i = null);
            var a, o, l, c, u, f, d, h, p = t.call(this, s ? n : tX(n)) || this, g = p.vars, m = g.duration, v = g.delay, x = g.immediateRender, _ = g.stagger, b = g.overwrite, w = g.keyframes, k = g.defaults, j = g.scrollTrigger, S = n.parent || T, M = ($(r) || V(r) ? L(r[0]) : "length"in n) ? [r] : ea(r);
            if (p._targets = M.length ? tw(M) : tl("GSAP target " + r + " not found. https://gsap.com", !C.nullTargetWarn) || [],
            p._ptLookup = [],
            p._overwrite = b,
            w || _ || W(m) || W(v)) {
                var N = (n = p.vars).easeReverse || n.yoyoEase;
                if ((a = p.timeline = new eU({
                    data: "nested",
                    defaults: k || {},
                    targets: S && "nested" === S.data ? S.vars.targets : M
                })).kill(),
                a.parent = a._dp = e(p),
                a._start = 0,
                _ || W(m) || W(v)) {
                    if (c = M.length,
                    d = _ && ec(_),
                    H(_))
                        for (u in _)
                            ~e6.indexOf(u) && (h || (h = {}),
                            h[u] = _[u]);
                    for (o = 0; o < c; o++)
                        (l = tF(n, e7)).stagger = 0,
                        N && (l.easeReverse = N),
                        h && tD(l, h),
                        f = M[o],
                        l.duration = +e8(m, e(p), o, f, M),
                        l.delay = (+e8(v, e(p), o, f, M) || 0) - p._delay,
                        !_ && 1 === c && l.delay && (p._delay = v = l.delay,
                        p._start += v,
                        l.delay = 0),
                        a.to(f, l, d ? d(o, f, M) : 0),
                        a._ease = eC.none;
                    a.duration() ? m = v = 0 : p.timeline = 0
                } else if (w) {
                    tX(tz(a.vars.defaults, {
                        ease: "none"
                    })),
                    a._ease = eF(w.ease || n.ease || "none");
                    var A, E, O, R = 0;
                    if ($(w))
                        w.forEach(function(t) {
                            return a.to(M, t, ">")
                        }),
                        a.duration();
                    else {
                        for (u in l = {},
                        w)
                            "ease" === u || "easeEach" === u || e4(u, w[u], l, w.easeEach);
                        for (u in l)
                            for (o = 0,
                            A = l[u].sort(function(t, e) {
                                return t.t - e.t
                            }),
                            R = 0; o < A.length; o++)
                                (O = {
                                    ease: (E = A[o]).e,
                                    duration: (E.t - (o ? A[o - 1].t : 0)) / 100 * m
                                })[u] = E.v,
                                a.to(M, O, R),
                                R += O.duration;
                        a.duration() < m && a.to({}, {
                            duration: m - a.duration()
                        })
                    }
                }
                m || p.duration(m = a.duration())
            } else
                p.timeline = 0;
            return !0 !== b || y || (eZ = e(p),
            T.killTweensOf(M),
            eZ = 0),
            tK(S, e(p), i),
            n.reversed && p.reverse(),
            n.paused && p.paused(!0),
            (x || !m && !w && p._start === tM(S._time) && q(x) && function t(e) {
                return !e || e._ts && t(e.parent)
            }(e(p)) && "nested" !== S.data) && (p._tTime = -1e-8,
            p.render(Math.max(0, -v) || 0)),
            j && t0(e(p), j),
            p
        }
        r(n, t);
        var i = n.prototype;
        return i.render = function(t, e, r) {
            var n, i, s, a, o, l, c, u, f = this._time, d = this._tDur, h = this._dur, p = t < 0, g = t > d - 1e-8 && !p ? d : t < 1e-8 ? 0 : t;
            if (h) {
                if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== p || this._lazy) {
                    if (n = g,
                    u = this.timeline,
                    this._repeat) {
                        if (a = h + this._rDelay,
                        this._repeat < -1 && p)
                            return this.totalTime(100 * a + t, e, r);
                        if (n = tM(g % a),
                        g === d ? (s = this._repeat,
                        n = h) : (s = ~~(o = tM(g / a))) && s === o ? (n = h,
                        s--) : n > h && (n = h),
                        (l = this._yoyo && 1 & s) && (n = h - n),
                        o = t$(this._tTime, a),
                        n === f && !r && this._initted && s === o)
                            return this._tTime = g,
                            this;
                        s !== o && this.vars.repeatRefresh && !l && !this._lock && n !== a && this._initted && (this._lock = r = 1,
                        this.render(tM(a * s), !0).invalidate()._lock = 0)
                    }
                    if (!this._initted) {
                        if (t1(this, p ? t : n, r, e, g))
                            return this._tTime = 0,
                            this;
                        if (f !== this._time && !(r && this.vars.repeatRefresh && s !== o))
                            return this;
                        if (h !== this._dur)
                            return this.render(t, e, r)
                    }
                    if (this._rEase) {
                        var m = n < f;
                        if (m !== this._inv) {
                            var v = m ? f : h - f;
                            this._inv = m,
                            this._from && (this.ratio = 1 - this.ratio),
                            this._invRatio = this.ratio,
                            this._invTime = f,
                            this._invRecip = v ? (m ? -1 : 1) / v : 0,
                            this._invScale = m ? -this.ratio : 1 - this.ratio,
                            this._invEase = m ? this._rEase : this._ease
                        }
                        this.ratio = c = this._invRatio + this._invScale * this._invEase((n - this._invTime) * this._invRecip)
                    } else
                        this.ratio = c = this._ease(n / h);
                    if (this._from && (this.ratio = c = 1 - c),
                    this._tTime = g,
                    this._time = n,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    !f && g && !e && !o && (ev(this, "onStart"),
                    this._tTime !== g))
                        return this;
                    for (i = this._pt; i; )
                        i.r(c, i.d),
                        i = i._next;
                    u && u.render(t < 0 ? t : u._dur * u._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (p && tW(this, t, e, r),
                    ev(this, "onUpdate")),
                    this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && ev(this, "onRepeat"),
                    (g === this._tDur || !g) && this._tTime === g && (p && !this._onUpdate && tW(this, t, !0, !0),
                    (t || !h) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && tH(this, 1),
                    !e && !(p && !f) && (g || f || l) && (ev(this, g === d ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(g < d && this.timeScale() > 0) && this._prom()))
                }
            } else
                t3(this, t, e, r);
            return this
        }
        ,
        i.targets = function() {
            return this._targets
        }
        ,
        i.invalidate = function(e) {
            return e && this.vars.runBackwards || (this._startAt = 0),
            this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(e),
            t.prototype.invalidate.call(this, e)
        }
        ,
        i.resetTo = function(t, e, r, n, i) {
            E || eA.wake(),
            this._ts || this.play();
            var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return (this._initted || e2(this, s),
            e5(this, t, e, r, n, this._ease(s / this._dur), s, i)) ? this.resetTo(t, e, r, n, 1) : (tJ(this, 0),
            this.parent || tL(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
            this.render(0))
        }
        ,
        i.kill = function(t, e) {
            if (void 0 === e && (e = "all"),
            !t && (!e || "all" === e))
                return this._lazy = this._pt = 0,
                this.parent ? ex(this) : this.scrollTrigger && this.scrollTrigger.kill(!!b),
                this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, eZ && !0 !== eZ.vars.overwrite)._first || ex(this),
                this.parent && r !== this.timeline.totalDuration() && t8(this, this._dur * this.timeline._tDur / r, 0, 1),
                this
            }
            var n, i, s, a, o, l, c, u = this._targets, f = t ? ea(t) : u, d = this._ptLookup, h = this._pt;
            if ((!e || "all" === e) && tB(u, f))
                return "all" === e && (this._pt = 0),
                ex(this);
            for (n = this._op = this._op || [],
            "all" !== e && (X(e) && (o = {},
            tj(e, function(t) {
                return o[t] = 1
            }),
            e = o),
            e = e3(u, e)),
            c = u.length; c--; )
                if (~f.indexOf(u[c]))
                    for (o in i = d[c],
                    "all" === e ? (n[c] = e,
                    a = i,
                    s = {}) : (s = n[c] = n[c] || {},
                    a = e),
                    a)
                        (l = i && i[o]) && ("kill"in l.d && !0 !== l.d.kill(o) || tY(this, l, "_pt"),
                        delete i[o]),
                        "all" !== s && (s[o] = 1);
            return this._initted && !this._pt && h && ex(this),
            this
        }
        ,
        n.to = function(t, e) {
            return new n(t,e,arguments[2])
        }
        ,
        n.from = function(t, e) {
            return et(1, arguments)
        }
        ,
        n.delayedCall = function(t, e, r, i) {
            return new n(e,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }
        ,
        n.fromTo = function(t, e, r) {
            return et(2, arguments)
        }
        ,
        n.set = function(t, e) {
            return e.duration = 0,
            e.repeatDelay || (e.repeat = 0),
            new n(t,e)
        }
        ,
        n.killTweensOf = function(t, e, r) {
            return T.killTweensOf(t, e, r)
        }
        ,
        n
    }(eq);
    tz(e9.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    tj("staggerTo,staggerFrom,staggerFromTo", function(t) {
        e9[t] = function() {
            var e = new eU
              , r = ei.call(arguments, 0);
            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
            e[t].apply(e, r)
        }
    });
    var rt = function(t, e, r) {
        return t[e] = r
    }
      , re = function(t, e, r) {
        return t[e](r)
    }
      , rr = function(t, e, r, n) {
        return t[e](n.fp, r)
    }
      , rn = function(t, e, r) {
        return t.setAttribute(e, r)
    }
      , ri = function(t, e) {
        return B(t[e]) ? re : Y(t[e]) && t.setAttribute ? rn : rt
    }
      , rs = function(t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
    }
      , ra = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , ro = function(t, e) {
        var r = e._pt
          , n = "";
        if (!t && e.b)
            n = e.b;
        else if (1 === t && e.e)
            n = e.e;
        else {
            for (; r; )
                n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + n,
                r = r._next;
            n += e.c
        }
        e.set(e.t, e.p, n, e)
    }
      , rl = function(t, e) {
        for (var r = e._pt; r; )
            r.r(t, r.d),
            r = r._next
    }
      , rc = function(t, e, r, n) {
        for (var i, s = this._pt; s; )
            i = s._next,
            s.p === n && s.modifier(t, e, r),
            s = i
    }
      , ru = function(t) {
        for (var e, r, n = this._pt; n; )
            r = n._next,
            (n.p !== t || n.op) && n.op !== t ? n.dep || (e = 1) : tY(this, n, "_pt"),
            n = r;
        return !e
    }
      , rf = function(t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
    }
      , rd = function(t) {
        for (var e, r, n, i, s = t._pt; s; ) {
            for (e = s._next,
            r = n; r && r.pr > s.pr; )
                r = r._next;
            (s._prev = r ? r._prev : i) ? s._prev._next = s : n = s,
            (s._next = r) ? r._prev = s : i = s,
            s = e
        }
        t._pt = n
    }
      , rh = function() {
        function t(t, e, r, n, i, s, a, o, l) {
            this.t = e,
            this.s = n,
            this.c = i,
            this.p = r,
            this.r = s || rs,
            this.d = a || this,
            this.set = o || rt,
            this.pr = l || 0,
            this._next = t,
            t && (t._prev = this)
        }
        return t.prototype.modifier = function(t, e, r) {
            this.mSet = this.mSet || this.set,
            this.set = rf,
            this.m = t,
            this.mt = r,
            this.tween = e
        }
        ,
        t
    }();
    tj(tb + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(t) {
        return tp[t] = 1
    }),
    ti.TweenMax = ti.TweenLite = e9,
    ti.TimelineLite = ti.TimelineMax = eU,
    T = new eU({
        sortChildren: !1,
        defaults: O,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    C.stringFilter = eN;
    var rp = []
      , rg = {}
      , rm = []
      , rv = 0
      , rx = 0
      , r_ = function(t) {
        return (rg[t] || rm).map(function(t) {
            return t()
        })
    }
      , ry = function() {
        var t = Date.now()
          , e = [];
        t - rv > 2 && (r_("matchMediaInit"),
        rp.forEach(function(t) {
            var r, n, i, s, a = t.queries, o = t.conditions;
            for (n in a)
                (r = k.matchMedia(a[n]).matches) && (i = 1),
                r !== o[n] && (o[n] = r,
                s = 1);
            s && (t.revert(),
            i && e.push(t))
        }),
        r_("matchMediaRevert"),
        e.forEach(function(t) {
            return t.onMatch(t, function(e) {
                return t.add(null, e)
            })
        }),
        rv = t,
        r_("matchMedia"))
    }
      , rb = function() {
        function t(t, e) {
            this.selector = e && eo(e),
            this.data = [],
            this._r = [],
            this.isReverted = !1,
            this.id = rx++,
            t && this.add(t)
        }
        var e = t.prototype;
        return e.add = function(t, e, r) {
            B(t) && (r = e,
            e = t,
            t = B);
            var n = this
              , i = function() {
                var t, i = w, s = n.selector;
                return i && i !== n && i.data.push(n),
                r && (n.selector = eo(r)),
                w = n,
                t = e.apply(n, arguments),
                B(t) && n._r.push(t),
                w = i,
                n.selector = s,
                n.isReverted = !1,
                t
            };
            return n.last = i,
            t === B ? i(n, function(t) {
                return n.add(null, t)
            }) : t ? n[t] = i : i
        }
        ,
        e.ignore = function(t) {
            var e = w;
            w = null,
            t(this),
            w = e
        }
        ,
        e.getTweens = function() {
            var e = [];
            return this.data.forEach(function(r) {
                return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof e9 && !(r.parent && "nested" === r.parent.data) && e.push(r)
            }),
            e
        }
        ,
        e.clear = function() {
            this._r.length = this.data.length = 0
        }
        ,
        e.kill = function(t, e) {
            var r = this;
            if (t) {
                for (var n, i = r.getTweens(), s = r.data.length; s--; )
                    "isFlip" === (n = r.data[s]).data && (n.revert(),
                    n.getChildren(!0, !0, !1).forEach(function(t) {
                        return i.splice(i.indexOf(t), 1)
                    }));
                for (i.map(function(t) {
                    return {
                        g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                        t: t
                    }
                }).sort(function(t, e) {
                    return e.g - t.g || -1 / 0
                }).forEach(function(e) {
                    return e.t.revert(t)
                }),
                s = r.data.length; s--; )
                    (n = r.data[s])instanceof eU ? "nested" !== n.data && (n.scrollTrigger && n.scrollTrigger.revert(),
                    n.kill()) : n instanceof e9 || !n.revert || n.revert(t);
                r._r.forEach(function(e) {
                    return e(t, r)
                }),
                r.isReverted = !0
            } else
                this.data.forEach(function(t) {
                    return t.kill && t.kill()
                });
            if (this.clear(),
            e)
                for (var a = rp.length; a--; )
                    rp[a].id === this.id && rp.splice(a, 1)
        }
        ,
        e.revert = function(t) {
            this.kill(t || {})
        }
        ,
        t
    }()
      , rw = function() {
        function t(t) {
            this.contexts = [],
            this.scope = t,
            w && w.data.push(this)
        }
        var e = t.prototype;
        return e.add = function(t, e, r) {
            H(t) || (t = {
                matches: t
            });
            var n, i, s, a = new rb(0,r || this.scope), o = a.conditions = {};
            for (i in w && !a.selector && (a.selector = w.selector),
            this.contexts.push(a),
            e = a.add("onMatch", e),
            a.queries = t,
            t)
                "all" === i ? s = 1 : (n = k.matchMedia(t[i])) && (0 > rp.indexOf(a) && rp.push(a),
                (o[i] = n.matches) && (s = 1),
                n.addListener ? n.addListener(ry) : n.addEventListener("change", ry));
            return s && e(a, function(t) {
                return a.add(null, t)
            }),
            this
        }
        ,
        e.revert = function(t) {
            this.kill(t || {})
        }
        ,
        e.kill = function(t) {
            this.contexts.forEach(function(e) {
                return e.kill(t, !0)
            })
        }
        ,
        t
    }()
      , rT = {
        registerPlugin: function() {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            e.forEach(function(t) {
                return ey(t)
            })
        },
        timeline: function(t) {
            return new eU(t)
        },
        getTweensOf: function(t, e) {
            return T.getTweensOf(t, e)
        },
        getProperty: function(t, e, r, n) {
            X(t) && (t = ea(t)[0]);
            var i = tT(t || {}).get
              , s = r ? tP : tR;
            return "native" === r && (r = ""),
            t ? e ? s((tv[e] && tv[e].get || i)(t, e, r, n)) : function(e, r, n) {
                return s((tv[e] && tv[e].get || i)(t, e, r, n))
            }
            : t
        },
        quickSetter: function(t, e, r) {
            if ((t = ea(t)).length > 1) {
                var n = t.map(function(t) {
                    return rM.quickSetter(t, e, r)
                })
                  , i = n.length;
                return function(t) {
                    for (var e = i; e--; )
                        n[e](t)
                }
            }
            t = t[0] || {};
            var s = tv[e]
              , a = tT(t)
              , o = a.harness && (a.harness.aliases || {})[e] || e
              , l = s ? function(e) {
                var n = new s;
                A._pt = 0,
                n.init(t, r ? e + r : e, A, 0, [t]),
                n.render(1, n),
                A._pt && rl(1, A)
            }
            : a.set(t, o);
            return s ? l : function(e) {
                return l(t, o, r ? e + r : e, a, 1)
            }
        },
        quickTo: function(t, e, r) {
            var n, i = rM.to(t, tz(((n = {})[e] = "+=0.1",
            n.paused = !0,
            n.stagger = 0,
            n), r || {})), s = function(t, r, n) {
                return i.resetTo(e, t, r, n)
            };
            return s.tween = i,
            s
        },
        isTweening: function(t) {
            return T.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = eF(t.ease, O.ease)),
            tI(O, t || {})
        },
        config: function(t) {
            return tI(C, t || {})
        },
        registerEffect: function(t) {
            var e = t.name
              , r = t.effect
              , n = t.plugins
              , i = t.defaults
              , s = t.extendTimeline;
            (n || "").split(",").forEach(function(t) {
                return t && !tv[t] && !ti[t] && tl(e + " effect requires " + t + " plugin.")
            }),
            tx[e] = function(t, e, n) {
                return r(ea(t), tz(e || {}, i), n)
            }
            ,
            s && (eU.prototype[e] = function(t, r, n) {
                return this.add(tx[e](t, H(r) ? r : (n = r) && {}, this), n)
            }
            )
        },
        registerEase: function(t, e) {
            eC[t] = eF(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? eF(t, e) : eC
        },
        getById: function(t) {
            return T.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var r, n, i = new eU(t);
            for (i.smoothChildTiming = q(t.smoothChildTiming),
            T.remove(i),
            i._dp = 0,
            i._time = i._tTime = T._time,
            r = T._first; r; )
                n = r._next,
                (e || !(!r._dur && r instanceof e9 && r.vars.onComplete === r._targets[0])) && tK(i, r, r._start - r._delay),
                r = n;
            return tK(T, i, 0),
            i
        },
        context: function(t, e) {
            return t ? new rb(t,e) : w
        },
        matchMedia: function(t) {
            return new rw(t)
        },
        matchMediaRefresh: function() {
            return rp.forEach(function(t) {
                var e, r, n = t.conditions;
                for (r in n)
                    n[r] && (n[r] = !1,
                    e = 1);
                e && t.revert()
            }) || ry()
        },
        addEventListener: function(t, e) {
            var r = rg[t] || (rg[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function(t, e) {
            var r = rg[t]
              , n = r && r.indexOf(e);
            n >= 0 && r.splice(n, 1)
        },
        utils: {
            wrap: function t(e, r, n) {
                var i = r - e;
                return $(e) ? eh(e, t(0, e.length), r) : ee(n, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function t(e, r, n) {
                var i = r - e
                  , s = 2 * i;
                return $(e) ? eh(e, t(0, e.length - 1), r) : ee(n, function(t) {
                    return t = (s + (t - e) % s) % s || 0,
                    e + (t > i ? s - t : t)
                })
            },
            distribute: ec,
            random: ed,
            snap: ef,
            normalize: function(t, e, r) {
                return eg(t, e, 0, 1, r)
            },
            getUnit: en,
            clamp: function(t, e, r) {
                return ee(r, function(r) {
                    return er(t, e, r)
                })
            },
            splitColor: eT,
            toArray: ea,
            selector: eo,
            mapRange: eg,
            pipe: function() {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function(t, e) {
                return function(r) {
                    return t(parseFloat(r)) + (e || en(r))
                }
            },
            interpolate: function t(e, r, n, i) {
                var s = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                }
                ;
                if (!s) {
                    var a, o, l, c, u, f = X(e), d = {};
                    if (!0 === n && (i = 1) && (n = null),
                    f)
                        e = {
                            p: e
                        },
                        r = {
                            p: r
                        };
                    else if ($(e) && !$(r)) {
                        for (o = 1,
                        l = [],
                        u = (c = e.length) - 2; o < c; o++)
                            l.push(t(e[o - 1], e[o]));
                        c--,
                        s = function(t) {
                            var e = Math.min(u, ~~(t *= c));
                            return l[e](t - e)
                        }
                        ,
                        n = r
                    } else
                        i || (e = tD($(e) ? [] : {}, e));
                    if (!l) {
                        for (a in r)
                            eK.call(d, e, a, "get", r[a]);
                        s = function(t) {
                            return rl(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return ee(n, s)
            },
            shuffle: el
        },
        install: ta,
        effects: tx,
        ticker: eA,
        updateRoot: eU.updateRoot,
        plugins: tv,
        globalTimeline: T,
        core: {
            PropTween: rh,
            globals: tc,
            Tween: e9,
            Timeline: eU,
            Animation: eq,
            getCache: tT,
            _removeLinkedListItem: tY,
            reverting: function() {
                return b
            },
            context: function(t) {
                return t && w && (w.data.push(t),
                t._ctx = w),
                w
            },
            suppressOverwrites: function(t) {
                return y = t
            }
        }
    };
    tj("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return rT[t] = e9[t]
    }),
    eA.add(eU.updateRoot),
    A = rT.to({}, {
        duration: 0
    });
    var rk = function(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
        return r
    }
      , rj = function(t, e) {
        var r, n, i, s = t._targets;
        for (r in e)
            for (n = s.length; n--; )
                (i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = rk(i, r)),
                i && i.modifier && i.modifier(e[r], t, s[n], r))
    }
      , rS = function(t, e) {
        return {
            name: t,
            headless: 1,
            rawVars: 1,
            init: function(t, r, n) {
                n._onInit = function(t) {
                    var n, i;
                    if (X(r) && (n = {},
                    tj(r, function(t) {
                        return n[t] = 1
                    }),
                    r = n),
                    e) {
                        for (i in n = {},
                        r)
                            n[i] = e(r[i]);
                        r = n
                    }
                    rj(t, r)
                }
            }
        }
    }
      , rM = rT.registerPlugin({
        name: "attr",
        init: function(t, e, r, n, i) {
            var s, a, o;
            for (s in this.tween = r,
            e)
                o = t.getAttribute(s) || "",
                (a = this.add(t, "setAttribute", (o || 0) + "", e[s], n, i, 0, 0, s)).op = s,
                a.b = o,
                this._props.push(s)
        },
        render: function(t, e) {
            for (var r = e._pt; r; )
                b ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d),
                r = r._next
        }
    }, {
        name: "endArray",
        headless: 1,
        init: function(t, e) {
            for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, rS("roundProps", eu), rS("modifiers"), rS("snap", ef)) || rT;
    e9.version = eU.version = rM.version = "3.15.0",
    M = 1,
    U() && eE(),
    eC.Power0,
    eC.Power1,
    eC.Power2,
    eC.Power3,
    eC.Power4,
    eC.Linear,
    eC.Quad,
    eC.Cubic,
    eC.Quart,
    eC.Quint,
    eC.Strong,
    eC.Elastic,
    eC.Back,
    eC.SteppedEase,
    eC.Bounce,
    eC.Sine,
    eC.Expo,
    eC.Circ;
    var rN, rA, rE, rC, rO, rR, rP, rz = {}, rD = 180 / Math.PI, rI = Math.PI / 180, rF = Math.atan2, rX = /([A-Z])/g, rB = /(left|right|width|margin|padding|x)/i, rL = /[\s,\(]\S/, rY = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, rH = function(t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    }, rq = function(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    }, rU = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
    }, rW = function(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
    }, rV = function(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }, r$ = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }, rG = function(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }, rZ = function(t, e, r) {
        return t.style[e] = r
    }, rJ = function(t, e, r) {
        return t.style.setProperty(e, r)
    }, rQ = function(t, e, r) {
        return t._gsap[e] = r
    }, rK = function(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }, r0 = function(t, e, r, n, i) {
        var s = t._gsap;
        s.scaleX = s.scaleY = r,
        s.renderTransform(i, s)
    }, r1 = function(t, e, r, n, i) {
        var s = t._gsap;
        s[e] = r,
        s.renderTransform(i, s)
    }, r2 = "transform", r5 = r2 + "Origin", r3 = function t(e, r) {
        var n = this
          , i = this.target
          , s = i.style
          , a = i._gsap;
        if (e in rz && s) {
            if (this.tfm = this.tfm || {},
            "transform" === e)
                return rY.transform.split(",").forEach(function(e) {
                    return t.call(n, e, r)
                });
            if (~(e = rY[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                return n.tfm[t] = nd(i, t)
            }) : this.tfm[e] = a.x ? a[e] : nd(i, e),
            e === r5 && (this.tfm.zOrigin = a.zOrigin),
            this.props.indexOf(r2) >= 0)
                return;
            a.svg && (this.svgo = i.getAttribute("data-svg-origin"),
            this.props.push(r5, r, "")),
            e = r2
        }
        (s || r) && this.props.push(e, r, s[e])
    }, r4 = function(t) {
        t.translate && (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"))
    }, r8 = function() {
        var t, e, r = this.props, n = this.target, i = n.style, s = n._gsap;
        for (t = 0; t < r.length; t += 3)
            r[t + 1] ? 2 === r[t + 1] ? n[r[t]](r[t + 2]) : n[r[t]] = r[t + 2] : r[t + 2] ? i[r[t]] = r[t + 2] : i.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(rX, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm)
                s[e] = this.tfm[e];
            s.svg && (s.renderTransform(),
            n.setAttribute("data-svg-origin", this.svgo || "")),
            (t = rR()) && t.isStart || i[r2] || (r4(i),
            s.zOrigin && i[r5] && (i[r5] += " " + s.zOrigin + "px",
            s.zOrigin = 0,
            s.renderTransform()),
            s.uncache = 1)
        }
    }, r6 = function(t, e) {
        var r = {
            target: t,
            props: [],
            revert: r8,
            save: r3
        };
        return t._gsap || rM.core.getCache(t),
        e && t.style && t.nodeType && e.split(",").forEach(function(t) {
            return r.save(t)
        }),
        r
    }, r7 = function(t, e) {
        var r = rN.createElementNS ? rN.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : rN.createElement(t);
        return r && r.style ? r : rN.createElement(t)
    }, r9 = function t(e, r, n) {
        var i = getComputedStyle(e);
        return i[r] || i.getPropertyValue(r.replace(rX, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, ne(r) || r, 1) || ""
    }, nt = "O,Moz,ms,Ms,Webkit".split(","), ne = function(t, e, r) {
        var n = (e || rC).style
          , i = 5;
        if (t in n && !r)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(nt[i] + t in n); )
            ;
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? nt[i] : "") + t
    }, nr = function() {
        "u" > typeof window && window.document && (rA = (rN = window.document).documentElement,
        rC = r7("div") || {
            style: {}
        },
        r7("div"),
        r5 = (r2 = ne(r2)) + "Origin",
        rC.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        rP = !!ne("perspective"),
        rR = rM.core.reverting,
        rE = 1)
    }, nn = function(t) {
        var e, r = t.ownerSVGElement, n = r7("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = t.cloneNode(!0);
        i.style.display = "block",
        n.appendChild(i),
        rA.appendChild(n);
        try {
            e = i.getBBox()
        } catch (t) {}
        return n.removeChild(i),
        rA.removeChild(n),
        e
    }, ni = function(t, e) {
        for (var r = e.length; r--; )
            if (t.hasAttribute(e[r]))
                return t.getAttribute(e[r])
    }, ns = function(t) {
        var e, r;
        try {
            e = t.getBBox()
        } catch (n) {
            e = nn(t),
            r = 1
        }
        return e && (e.width || e.height) || r || (e = nn(t)),
        !e || e.width || e.x || e.y ? e : {
            x: +ni(t, ["x", "cx", "x1"]) || 0,
            y: +ni(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }, na = function(t) {
        return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && ns(t))
    }, no = function(t, e) {
        if (e) {
            var r, n = t.style;
            e in rz && e !== r5 && (e = r2),
            n.removeProperty ? (("ms" === (r = e.substr(0, 2)) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
            n.removeProperty("--" === r ? e : e.replace(rX, "-$1").toLowerCase())) : n.removeAttribute(e)
        }
    }, nl = function(t, e, r, n, i, s) {
        var a = new rh(t._pt,e,r,0,1,s ? rG : r$);
        return t._pt = a,
        a.b = n,
        a.e = i,
        t._props.push(r),
        a
    }, nc = {
        deg: 1,
        rad: 1,
        turn: 1
    }, nu = {
        grid: 1,
        flex: 1
    }, nf = function t(e, r, n, i) {
        var s, a, o, l, c = parseFloat(n) || 0, u = (n + "").trim().substr((c + "").length) || "px", f = rC.style, d = rB.test(r), h = "svg" === e.tagName.toLowerCase(), p = (h ? "client" : "offset") + (d ? "Width" : "Height"), g = "px" === i, m = "%" === i;
        if (i === u || !c || nc[i] || nc[u])
            return c;
        if ("px" === u || g || (c = t(e, r, n, "px")),
        l = e.getCTM && na(e),
        (m || "%" === u) && (rz[r] || ~r.indexOf("adius")))
            return s = l ? e.getBBox()[d ? "width" : "height"] : e[p],
            tS(m ? c / s * 100 : c / 100 * s);
        if (f[d ? "width" : "height"] = 100 + (g ? u : i),
        a = "rem" !== i && ~r.indexOf("adius") || "em" === i && e.appendChild && !h ? e : e.parentNode,
        l && (a = (e.ownerSVGElement || {}).parentNode),
        a && a !== rN && a.appendChild || (a = rN.body),
        (o = a._gsap) && m && o.width && d && o.time === eA.time && !o.uncache)
            return tS(c / o.width * 100);
        if (m && ("height" === r || "width" === r)) {
            var v = e.style[r];
            e.style[r] = 100 + i,
            s = e[p],
            v ? e.style[r] = v : no(e, r)
        } else
            (m || "%" === u) && !nu[r9(a, "display")] && (f.position = r9(e, "position")),
            a === e && (f.position = "static"),
            a.appendChild(rC),
            s = rC[p],
            a.removeChild(rC),
            f.position = "absolute";
        return d && m && ((o = tT(a)).time = eA.time,
        o.width = a[p]),
        tS(g ? s * c / 100 : s && c ? 100 / s * c : 0)
    }, nd = function(t, e, r, n) {
        var i;
        return rE || nr(),
        e in rY && "transform" !== e && ~(e = rY[e]).indexOf(",") && (e = e.split(",")[0]),
        rz[e] && "transform" !== e ? (i = nk(t, n),
        i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : nj(r9(t, r5)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = nv[e] && nv[e](t, e, r) || r9(t, e) || tk(t, e) || +("opacity" === e)),
        r && !~(i + "").trim().indexOf(" ") ? nf(t, e, i, r) + r : i
    }, nh = function(t, e, r, n) {
        if (!r || "none" === r) {
            var i = ne(e, t, 1)
              , s = i && r9(t, i, 1);
            s && s !== r ? (e = i,
            r = s) : "borderColor" === e && (r = r9(t, "borderTopColor"))
        }
        var a, o, l, c, u, f, d, h, p, g, m, v = new rh(this._pt,t.style,e,0,1,ro), x = 0, _ = 0;
        if (v.b = r,
        v.e = n,
        r += "",
        "var(--" === (n += "").substring(0, 6) && (n = r9(t, n.substring(4, n.indexOf(")")))),
        "auto" === n && (f = t.style[e],
        t.style[e] = n,
        n = r9(t, e) || n,
        f ? t.style[e] = f : no(t, e)),
        eN(a = [r, n]),
        r = a[0],
        n = a[1],
        l = r.match(K) || [],
        (n.match(K) || []).length) {
            for (; o = K.exec(n); )
                d = o[0],
                p = n.substring(x, o.index),
                u ? u = (u + 1) % 5 : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) && (u = 1),
                d !== (f = l[_++] || "") && (c = parseFloat(f) || 0,
                m = f.substr((c + "").length),
                "=" === d.charAt(1) && (d = tN(c, d) + m),
                h = parseFloat(d),
                g = d.substr((h + "").length),
                x = K.lastIndex - g.length,
                g || (g = g || C.units[e] || m,
                x === n.length && (n += g,
                v.e += g)),
                m !== g && (c = nf(t, e, f, g) || 0),
                v._pt = {
                    _next: v._pt,
                    p: p || 1 === _ ? p : ",",
                    s: c,
                    c: h - c,
                    m: u && u < 4 || "zIndex" === e ? Math.round : 0
                });
            v.c = x < n.length ? n.substring(x, n.length) : ""
        } else
            v.r = "display" === e && "none" === n ? rG : r$;
        return te.test(n) && (v.e = 0),
        this._pt = v,
        v
    }, np = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, ng = function(t) {
        var e = t.split(" ")
          , r = e[0]
          , n = e[1] || "50%";
        return ("top" === r || "bottom" === r || "left" === n || "right" === n) && (t = r,
        r = n,
        n = t),
        e[0] = np[r] || r,
        e[1] = np[n] || n,
        e.join(" ")
    }, nm = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, n, i, s = e.t, a = s.style, o = e.u, l = s._gsap;
            if ("all" === o || !0 === o)
                a.cssText = "",
                n = 1;
            else
                for (i = (o = o.split(",")).length; --i > -1; )
                    rz[r = o[i]] && (n = 1,
                    r = "transformOrigin" === r ? r5 : r2),
                    no(s, r);
            n && (no(s, r2),
            l && (l.svg && s.removeAttribute("transform"),
            a.scale = a.rotate = a.translate = "none",
            nk(s, 1),
            l.uncache = 1,
            r4(a)))
        }
    }, nv = {
        clearProps: function(t, e, r, n, i) {
            if ("isFromStart" !== i.data) {
                var s = t._pt = new rh(t._pt,e,r,0,0,nm);
                return s.u = n,
                s.pr = -10,
                s.tween = i,
                t._props.push(r),
                1
            }
        }
    }, nx = [1, 0, 0, 1, 0, 0], n_ = {}, ny = function(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }, nb = function(t) {
        var e = r9(t, r2);
        return ny(e) ? nx : e.substr(7).match(Q).map(tS)
    }, nw = function(t, e) {
        var r, n, i, s, a = t._gsap || tT(t), o = t.style, l = nb(t);
        return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? nx : l : (l !== nx || t.offsetParent || t === rA || a.svg || (i = o.display,
        o.display = "block",
        (r = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width) || (s = 1,
        n = t.nextElementSibling,
        rA.appendChild(t)),
        l = nb(t),
        i ? o.display = i : no(t, "display"),
        s && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : rA.removeChild(t))),
        e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    }, nT = function(t, e, r, n, i, s) {
        var a, o, l, c, u = t._gsap, f = i || nw(t, !0), d = u.xOrigin || 0, h = u.yOrigin || 0, p = u.xOffset || 0, g = u.yOffset || 0, m = f[0], v = f[1], x = f[2], _ = f[3], y = f[4], b = f[5], w = e.split(" "), T = parseFloat(w[0]) || 0, k = parseFloat(w[1]) || 0;
        r ? f !== nx && (o = m * _ - v * x) && (l = _ / o * T + -x / o * k + (x * b - _ * y) / o,
        c = -v / o * T + m / o * k - (m * b - v * y) / o,
        T = l,
        k = c) : (T = (a = ns(t)).x + (~w[0].indexOf("%") ? T / 100 * a.width : T),
        k = a.y + (~(w[1] || w[0]).indexOf("%") ? k / 100 * a.height : k)),
        n || !1 !== n && u.smooth ? (u.xOffset = p + ((y = T - d) * m + (b = k - h) * x) - y,
        u.yOffset = g + (y * v + b * _) - b) : u.xOffset = u.yOffset = 0,
        u.xOrigin = T,
        u.yOrigin = k,
        u.smooth = !!n,
        u.origin = e,
        u.originIsAbsolute = !!r,
        t.style[r5] = "0px 0px",
        s && (nl(s, u, "xOrigin", d, T),
        nl(s, u, "yOrigin", h, k),
        nl(s, u, "xOffset", p, u.xOffset),
        nl(s, u, "yOffset", g, u.yOffset)),
        t.setAttribute("data-svg-origin", T + " " + k)
    }, nk = function(t, e) {
        var r = t._gsap || new eH(t);
        if ("x"in r && !e && !r.uncache)
            return r;
        var n, i, s, a, o, l, c, u, f, d, h, p, g, m, v, x, _, y, b, w, T, k, j, S, M, N, A, E, O, R, P, z, D = t.style, I = r.scaleX < 0, F = getComputedStyle(t), X = r9(t, r5) || "0";
        return n = i = s = l = c = u = f = d = h = 0,
        a = o = 1,
        r.svg = !!(t.getCTM && na(t)),
        F.translate && (("none" !== F.translate || "none" !== F.scale || "none" !== F.rotate) && (D[r2] = ("none" !== F.translate ? "translate3d(" + (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") + ("none" !== F.scale ? "scale(" + F.scale.split(" ").join(",") + ") " : "") + ("none" !== F[r2] ? F[r2] : "")),
        D.scale = D.rotate = D.translate = "none"),
        m = nw(t, r.svg),
        r.svg && (r.uncache ? (M = t.getBBox(),
        X = r.xOrigin - M.x + "px " + (r.yOrigin - M.y) + "px",
        S = "") : S = !e && t.getAttribute("data-svg-origin"),
        nT(t, S || X, !!S || r.originIsAbsolute, !1 !== r.smooth, m)),
        p = r.xOrigin || 0,
        g = r.yOrigin || 0,
        m !== nx && (y = m[0],
        b = m[1],
        w = m[2],
        T = m[3],
        n = k = m[4],
        i = j = m[5],
        6 === m.length ? (a = Math.sqrt(y * y + b * b),
        o = Math.sqrt(T * T + w * w),
        l = y || b ? rF(b, y) * rD : 0,
        (f = w || T ? rF(w, T) * rD + l : 0) && (o *= Math.abs(Math.cos(f * rI))),
        r.svg && (n -= p - (p * y + g * w),
        i -= g - (p * b + g * T))) : (z = m[6],
        R = m[7],
        A = m[8],
        E = m[9],
        O = m[10],
        P = m[11],
        n = m[12],
        i = m[13],
        s = m[14],
        c = (v = rF(z, O)) * rD,
        v && (S = k * (x = Math.cos(-v)) + A * (_ = Math.sin(-v)),
        M = j * x + E * _,
        N = z * x + O * _,
        A = -(k * _) + A * x,
        E = -(j * _) + E * x,
        O = -(z * _) + O * x,
        P = -(R * _) + P * x,
        k = S,
        j = M,
        z = N),
        u = (v = rF(-w, O)) * rD,
        v && (S = y * (x = Math.cos(-v)) - A * (_ = Math.sin(-v)),
        M = b * x - E * _,
        N = w * x - O * _,
        P = T * _ + P * x,
        y = S,
        b = M,
        w = N),
        l = (v = rF(b, y)) * rD,
        v && (S = y * (x = Math.cos(v)) + b * (_ = Math.sin(v)),
        M = k * x + j * _,
        b = b * x - y * _,
        j = j * x - k * _,
        y = S,
        k = M),
        c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0,
        u = 180 - u),
        a = tS(Math.sqrt(y * y + b * b + w * w)),
        o = tS(Math.sqrt(j * j + z * z)),
        f = Math.abs(v = rF(k, j)) > 2e-4 ? v * rD : 0,
        h = P ? 1 / (P < 0 ? -P : P) : 0),
        r.svg && (S = t.getAttribute("transform"),
        r.forceCSS = t.setAttribute("transform", "") || !ny(r9(t, r2)),
        S && t.setAttribute("transform", S))),
        Math.abs(f) > 90 && 270 > Math.abs(f) && (I ? (a *= -1,
        f += l <= 0 ? 180 : -180,
        l += l <= 0 ? 180 : -180) : (o *= -1,
        f += f <= 0 ? 180 : -180)),
        e = e || r.uncache,
        r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px",
        r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px",
        r.z = s + "px",
        r.scaleX = tS(a),
        r.scaleY = tS(o),
        r.rotation = tS(l) + "deg",
        r.rotationX = tS(c) + "deg",
        r.rotationY = tS(u) + "deg",
        r.skewX = f + "deg",
        r.skewY = d + "deg",
        r.transformPerspective = h + "px",
        (r.zOrigin = parseFloat(X.split(" ")[2]) || !e && r.zOrigin || 0) && (D[r5] = nj(X)),
        r.xOffset = r.yOffset = 0,
        r.force3D = C.force3D,
        r.renderTransform = r.svg ? nE : rP ? nA : nM,
        r.uncache = 0,
        r
    }, nj = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, nS = function(t, e, r) {
        var n = en(e);
        return tS(parseFloat(e) + parseFloat(nf(t, "x", r + "px", n))) + n
    }, nM = function(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        nA(t, e)
    }, nN = "0deg", nA = function(t, e) {
        var r = e || this
          , n = r.xPercent
          , i = r.yPercent
          , s = r.x
          , a = r.y
          , o = r.z
          , l = r.rotation
          , c = r.rotationY
          , u = r.rotationX
          , f = r.skewX
          , d = r.skewY
          , h = r.scaleX
          , p = r.scaleY
          , g = r.transformPerspective
          , m = r.force3D
          , v = r.target
          , x = r.zOrigin
          , _ = ""
          , y = "auto" === m && t && 1 !== t || !0 === m;
        if (x && (u !== nN || c !== nN)) {
            var b, w = parseFloat(c) * rI, T = Math.sin(w), k = Math.cos(w);
            s = nS(v, s, -(T * (b = Math.cos(w = parseFloat(u) * rI)) * x)),
            a = nS(v, a, -(-Math.sin(w) * x)),
            o = nS(v, o, -(k * b * x) + x)
        }
        "0px" !== g && (_ += "perspective(" + g + ") "),
        (n || i) && (_ += "translate(" + n + "%, " + i + "%) "),
        (y || "0px" !== s || "0px" !== a || "0px" !== o) && (_ += "0px" !== o || y ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + ") "),
        l !== nN && (_ += "rotate(" + l + ") "),
        c !== nN && (_ += "rotateY(" + c + ") "),
        u !== nN && (_ += "rotateX(" + u + ") "),
        (f !== nN || d !== nN) && (_ += "skew(" + f + ", " + d + ") "),
        (1 !== h || 1 !== p) && (_ += "scale(" + h + ", " + p + ") "),
        v.style[r2] = _ || "translate(0, 0)"
    }, nE = function(t, e) {
        var r, n, i, s, a, o = e || this, l = o.xPercent, c = o.yPercent, u = o.x, f = o.y, d = o.rotation, h = o.skewX, p = o.skewY, g = o.scaleX, m = o.scaleY, v = o.target, x = o.xOrigin, _ = o.yOrigin, y = o.xOffset, b = o.yOffset, w = o.forceCSS, T = parseFloat(u), k = parseFloat(f);
        d = parseFloat(d),
        h = parseFloat(h),
        (p = parseFloat(p)) && (h += p = parseFloat(p),
        d += p),
        d || h ? (d *= rI,
        h *= rI,
        r = Math.cos(d) * g,
        n = Math.sin(d) * g,
        i = -(Math.sin(d - h) * m),
        s = Math.cos(d - h) * m,
        h && (p *= rI,
        i *= a = Math.sqrt(1 + (a = Math.tan(h - p)) * a),
        s *= a,
        p && (r *= a = Math.sqrt(1 + (a = Math.tan(p)) * a),
        n *= a)),
        r = tS(r),
        n = tS(n),
        i = tS(i),
        s = tS(s)) : (r = g,
        s = m,
        n = i = 0),
        (T && !~(u + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (T = nf(v, "x", u, "px"),
        k = nf(v, "y", f, "px")),
        (x || _ || y || b) && (T = tS(T + x - (x * r + _ * i) + y),
        k = tS(k + _ - (x * n + _ * s) + b)),
        (l || c) && (T = tS(T + l / 100 * (a = v.getBBox()).width),
        k = tS(k + c / 100 * a.height)),
        a = "matrix(" + r + "," + n + "," + i + "," + s + "," + T + "," + k + ")",
        v.setAttribute("transform", a),
        w && (v.style[r2] = a)
    }, nC = function(t, e, r, n, i) {
        var s, a, o = X(i), l = parseFloat(i) * (o && ~i.indexOf("rad") ? rD : 1) - n, c = n + l + "deg";
        return o && ("short" === (s = i.split("_")[1]) && (l %= 360) != l % 180 && (l += l < 0 ? 360 : -360),
        "cw" === s && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === s && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))),
        t._pt = a = new rh(t._pt,e,r,n,l,rq),
        a.e = c,
        a.u = "deg",
        t._props.push(r),
        a
    }, nO = function(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, nR = function(t, e, r) {
        var n, i, s, a, o, l, c, u = nO({}, r._gsap), f = r.style;
        for (i in u.svg ? (s = r.getAttribute("transform"),
        r.setAttribute("transform", ""),
        f[r2] = e,
        n = nk(r, 1),
        no(r, r2),
        r.setAttribute("transform", s)) : (s = getComputedStyle(r)[r2],
        f[r2] = e,
        n = nk(r, 1),
        f[r2] = s),
        rz)
            (s = u[i]) !== (a = n[i]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) && (o = en(s) !== (c = en(a)) ? nf(r, i, s, c) : parseFloat(s),
            l = parseFloat(a),
            t._pt = new rh(t._pt,n,i,o,l - o,rH),
            t._pt.u = c || 0,
            t._props.push(i));
        nO(n, u)
    };
    tj("padding,margin,Width,Radius", function(t, e) {
        var r = "Right"
          , n = "Bottom"
          , i = "Left"
          , s = (e < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]).map(function(r) {
            return e < 2 ? t + r : "border" + r + t
        });
        nv[e > 1 ? "border" + t : t] = function(t, e, r, n, i) {
            var a, o;
            if (arguments.length < 4)
                return 5 === (o = (a = s.map(function(e) {
                    return nd(t, e, r)
                })).join(" ")).split(a[0]).length ? a[0] : o;
            a = (n + "").split(" "),
            o = {},
            s.forEach(function(t, e) {
                return o[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }),
            t.init(e, o, i)
        }
    });
    var nP = {
        name: "css",
        register: nr,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, n, i) {
            var s, a, o, l, c, u, f, d, h, p, g, m, v, x, _, y, b, w = this._props, T = t.style, k = r.vars.startAt;
            for (f in rE || nr(),
            this.styles = this.styles || r6(t),
            y = this.styles.props,
            this.tween = r,
            e)
                if ("autoRound" !== f && (a = e[f],
                !(tv[f] && e1(f, e, r, n, t, i)))) {
                    if (c = typeof a,
                    u = nv[f],
                    "function" === c && (c = typeof (a = a.call(r, n, t, i))),
                    "string" === c && ~a.indexOf("random(") && (a = ep(a)),
                    u)
                        u(this, t, f, a, r) && (_ = 1);
                    else if ("--" === f.substr(0, 2))
                        s = (getComputedStyle(t).getPropertyValue(f) + "").trim(),
                        a += "",
                        eS.lastIndex = 0,
                        !eS.test(s) && (d = en(s),
                        (h = en(a)) ? d !== h && (s = nf(t, f, s, h) + h) : d && (a += d)),
                        this.add(T, "setProperty", s, a, n, i, 0, 0, f),
                        w.push(f),
                        y.push(f, 0, T[f]);
                    else if ("undefined" !== c) {
                        if (k && f in k ? (X(s = "function" == typeof k[f] ? k[f].call(r, n, t, i) : k[f]) && ~s.indexOf("random(") && (s = ep(s)),
                        en(s + "") || "auto" === s || (s += C.units[f] || en(nd(t, f)) || ""),
                        "=" === (s + "").charAt(1) && (s = nd(t, f))) : s = nd(t, f),
                        l = parseFloat(s),
                        (p = "string" === c && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)),
                        o = parseFloat(a),
                        f in rY && ("autoAlpha" === f && (1 === l && "hidden" === nd(t, "visibility") && o && (l = 0),
                        y.push("visibility", 0, T.visibility),
                        nl(this, T, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                        "scale" !== f && "transform" !== f && ~(f = rY[f]).indexOf(",") && (f = f.split(",")[0])),
                        g = f in rz) {
                            if (this.styles.save(f),
                            b = a,
                            "string" === c && "var(--" === a.substring(0, 6)) {
                                if ("calc(" === (a = r9(t, a.substring(4, a.indexOf(")")))).substring(0, 5)) {
                                    var j = t.style.perspective;
                                    t.style.perspective = a,
                                    a = r9(t, "perspective"),
                                    j ? t.style.perspective = j : no(t, "perspective")
                                }
                                o = parseFloat(a)
                            }
                            if (m || ((v = t._gsap).renderTransform && !e.parseTransform || nk(t, e.parseTransform),
                            x = !1 !== e.smoothOrigin && v.smooth,
                            (m = this._pt = new rh(this._pt,T,r2,0,1,v.renderTransform,v,0,-1)).dep = 1),
                            "scale" === f)
                                this._pt = new rh(this._pt,v,"scaleY",v.scaleY,(p ? tN(v.scaleY, p + o) : o) - v.scaleY || 0,rH),
                                this._pt.u = 0,
                                w.push("scaleY", f),
                                f += "X";
                            else if ("transformOrigin" === f) {
                                y.push(r5, 0, T[r5]),
                                a = ng(a),
                                v.svg ? nT(t, a, 0, x, 0, this) : ((h = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && nl(this, v, "zOrigin", v.zOrigin, h),
                                nl(this, T, f, nj(s), nj(a)));
                                continue
                            } else if ("svgOrigin" === f) {
                                nT(t, a, 1, x, 0, this);
                                continue
                            } else if (f in n_) {
                                nC(this, v, f, l, p ? tN(l, p + a) : a);
                                continue
                            } else if ("smoothOrigin" === f) {
                                nl(this, v, "smooth", v.smooth, a);
                                continue
                            } else if ("force3D" === f) {
                                v[f] = a;
                                continue
                            } else if ("transform" === f) {
                                nR(this, a, t);
                                continue
                            }
                        } else
                            f in T || (f = ne(f) || f);
                        if (g || (o || 0 === o) && (l || 0 === l) && !rL.test(a) && f in T)
                            d = (s + "").substr((l + "").length),
                            o || (o = 0),
                            h = en(a) || (f in C.units ? C.units[f] : d),
                            d !== h && (l = nf(t, f, s, h)),
                            this._pt = new rh(this._pt,g ? v : T,f,l,(p ? tN(l, p + o) : o) - l,!g && ("px" === h || "zIndex" === f) && !1 !== e.autoRound ? rV : rH),
                            this._pt.u = h || 0,
                            g && b !== a ? (this._pt.b = s,
                            this._pt.e = b,
                            this._pt.r = rW) : d !== h && "%" !== h && (this._pt.b = s,
                            this._pt.r = rU);
                        else if (f in T)
                            nh.call(this, t, f, s, p ? p + a : a);
                        else if (f in t)
                            this.add(t, f, s || t[f], p ? p + a : a, n, i);
                        else if ("parseTransform" !== f) {
                            to(f, a);
                            continue
                        }
                        g || (f in T ? y.push(f, 0, T[f]) : "function" == typeof t[f] ? y.push(f, 2, t[f]()) : y.push(f, 1, s || t[f])),
                        w.push(f)
                    }
                }
            _ && rd(this)
        },
        render: function(t, e) {
            if (e.tween._time || !rR())
                for (var r = e._pt; r; )
                    r.r(t, r.d),
                    r = r._next;
            else
                e.styles.revert()
        },
        get: nd,
        aliases: rY,
        getSetter: function(t, e, r) {
            var n = rY[e];
            return n && 0 > n.indexOf(",") && (e = n),
            e in rz && e !== r5 && (t._gsap.x || nd(t, "x")) ? r && rO === r ? "scale" === e ? rK : rQ : (rO = r || {},
            "scale" === e ? r0 : r1) : t.style && !Y(t.style[e]) ? rZ : ~e.indexOf("-") ? rJ : ri(t, e)
        },
        core: {
            _removeProperty: no,
            _getMatrix: nw
        }
    };
    rM.utils.checkPrefix = ne,
    rM.core.getStyleSaver = r6,
    i = tj("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (n = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        rz[t] = 1
    }),
    tj(n, function(t) {
        C.units[t] = "deg",
        n_[t] = 1
    }),
    rY[i[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + n,
    tj("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        rY[e[1]] = i[e[0]]
    }),
    tj("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        C.units[t] = "px"
    }),
    rM.registerPlugin(nP);
    var nz = rM.registerPlugin(nP) || rM;
    nz.core.Tween,
    t.s(["default", 0, nz, "gsap", 0, nz], 89970)
}
, 83495, t => {
    "use strict";
    var e, r, n, i, s, a, o, l, c, u, f, d, h, p = function() {
        return e || "u" > typeof window && (e = window.gsap) && e.registerPlugin && e
    }, g = 1, m = [], v = [], x = [], _ = Date.now, y = function(t, e) {
        return e
    }, b = function() {
        var t = c.core
          , e = t.bridge || {}
          , r = t._scrollers
          , n = t._proxies;
        r.push.apply(r, v),
        n.push.apply(n, x),
        v = r,
        x = n,
        y = function(t, r) {
            return e[t](r)
        }
    }, w = function(t, e) {
        return ~x.indexOf(t) && x[x.indexOf(t) + 1][e]
    }, T = function(t) {
        return !!~u.indexOf(t)
    }, k = function(t, e, r, n, i) {
        return t.addEventListener(e, r, {
            passive: !1 !== n,
            capture: !!i
        })
    }, j = function(t, e, r, n) {
        return t.removeEventListener(e, r, !!n)
    }, S = "scrollLeft", M = "scrollTop", N = function() {
        return f && f.isPressed || v.cache++
    }, A = function(t, e) {
        var r = function r(i) {
            if (i || 0 === i) {
                g && (n.history.scrollRestoration = "manual");
                var s = f && f.isPressed;
                t(i = r.v = Math.round(i) || (f && f.iOS ? 1 : 0)),
                r.cacheID = v.cache,
                s && y("ss", i)
            } else
                (e || v.cache !== r.cacheID || y("ref")) && (r.cacheID = v.cache,
                r.v = t());
            return r.v + r.offset
        };
        return r.offset = 0,
        t && r
    }, E = {
        s: S,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: A(function(t) {
            return arguments.length ? n.scrollTo(t, C.sc()) : n.pageXOffset || i[S] || s[S] || a[S] || 0
        })
    }, C = {
        s: M,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: E,
        sc: A(function(t) {
            return arguments.length ? n.scrollTo(E.sc(), t) : n.pageYOffset || i[M] || s[M] || a[M] || 0
        })
    }, O = function(t, r) {
        return (r && r._ctx && r._ctx.selector || e.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== e.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
    }, R = function(t, e) {
        for (var r = e.length; r--; )
            if (e[r] === t || e[r].contains(t))
                return !0;
        return !1
    }, P = function(t, r) {
        var n = r.s
          , a = r.sc;
        T(t) && (t = i.scrollingElement || s);
        var o = v.indexOf(t)
          , l = a === C.sc ? 1 : 2;
        ~o || (o = v.push(t) - 1),
        v[o + l] || k(t, "scroll", N);
        var c = v[o + l]
          , u = c || (v[o + l] = A(w(t, n), !0) || (T(t) ? a : A(function(e) {
            return arguments.length ? t[n] = e : t[n]
        })));
        return u.target = t,
        c || (u.smooth = "smooth" === e.getProperty(t, "scrollBehavior")),
        u
    }, z = function(t, e, r) {
        var n = t
          , i = t
          , s = _()
          , a = s
          , o = e || 50
          , l = Math.max(500, 3 * o)
          , c = function(t, e) {
            var l = _();
            e || l - s > o ? (i = n,
            n = t,
            a = s,
            s = l) : r ? n += t : n = i + (t - i) / (l - a) * (s - a)
        };
        return {
            update: c,
            reset: function() {
                i = n = r ? 0 : n,
                a = s = 0
            },
            getVelocity: function(t) {
                var e = a
                  , o = i
                  , u = _();
                return (t || 0 === t) && t !== n && c(t),
                s === a || u - a > l ? 0 : (n + (r ? o : -o)) / ((r ? u : s) - e) * 1e3
            }
        }
    }, D = function(t, e) {
        return e && !t._gsapAllow && !1 !== t.cancelable && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
    }, I = function(t) {
        var e = Math.max.apply(Math, t)
          , r = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(r) ? e : r
    }, F = function() {
        (c = e.core.globals().ScrollTrigger) && c.core && b()
    }, X = function(t) {
        return e = t || p(),
        !r && e && "u" > typeof document && document.body && (n = window,
        s = (i = document).documentElement,
        a = i.body,
        u = [n, i, s, a],
        e.utils.clamp,
        h = e.core.context || function() {}
        ,
        l = "onpointerenter"in a ? "pointer" : "mouse",
        o = B.isTouch = n.matchMedia && n.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : 2 * ("ontouchstart"in n || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0),
        d = B.eventTypes = ("ontouchstart"in s ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown"in s) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(","),
        setTimeout(function() {
            return g = 0
        }, 500),
        r = 1),
        c || F(),
        r
    };
    E.op = C,
    v.cache = 0;
    var B = function() {
        var t;
        function u(t) {
            this.init(t)
        }
        return u.prototype.init = function(t) {
            r || X(e) || console.warn("Please gsap.registerPlugin(Observer)"),
            c || F();
            var u = t.tolerance
              , p = t.dragMinimum
              , g = t.type
              , v = t.target
              , x = t.lineHeight
              , y = t.debounce
              , b = t.preventDefault
              , w = t.onStop
              , S = t.onStopDelay
              , M = t.ignore
              , A = t.wheelSpeed
              , B = t.event
              , L = t.onDragStart
              , Y = t.onDragEnd
              , H = t.onDrag
              , q = t.onPress
              , U = t.onRelease
              , W = t.onRight
              , V = t.onLeft
              , $ = t.onUp
              , G = t.onDown
              , Z = t.onChangeX
              , J = t.onChangeY
              , Q = t.onChange
              , K = t.onToggleX
              , tt = t.onToggleY
              , te = t.onHover
              , tr = t.onHoverEnd
              , tn = t.onMove
              , ti = t.ignoreCheck
              , ts = t.isNormalizer
              , ta = t.onGestureStart
              , to = t.onGestureEnd
              , tl = t.onWheel
              , tc = t.onEnable
              , tu = t.onDisable
              , tf = t.onClick
              , td = t.scrollSpeed
              , th = t.capture
              , tp = t.allowClicks
              , tg = t.lockAxis
              , tm = t.onLockAxis;
            this.target = v = O(v) || s,
            this.vars = t,
            M && (M = e.utils.toArray(M)),
            u = u || 1e-9,
            p = p || 0,
            A = A || 1,
            td = td || 1,
            g = g || "wheel,touch,pointer",
            y = !1 !== y,
            x || (x = parseFloat(n.getComputedStyle(a).lineHeight) || 22);
            var tv, tx, t_, ty, tb, tw, tT, tk = this, tj = 0, tS = 0, tM = t.passive || !b && !1 !== t.passive, tN = P(v, E), tA = P(v, C), tE = tN(), tC = tA(), tO = ~g.indexOf("touch") && !~g.indexOf("pointer") && "pointerdown" === d[0], tR = T(v), tP = v.ownerDocument || i, tz = [0, 0, 0], tD = [0, 0, 0], tI = 0, tF = function() {
                return tI = _()
            }, tX = function(t, e) {
                return (tk.event = t) && M && R(t.target, M) || e && tO && "touch" !== t.pointerType || ti && ti(t, e)
            }, tB = function() {
                var t = tk.deltaX = I(tz)
                  , e = tk.deltaY = I(tD)
                  , r = Math.abs(t) >= u
                  , n = Math.abs(e) >= u;
                Q && (r || n) && Q(tk, t, e, tz, tD),
                r && (W && tk.deltaX > 0 && W(tk),
                V && tk.deltaX < 0 && V(tk),
                Z && Z(tk),
                K && tk.deltaX < 0 != tj < 0 && K(tk),
                tj = tk.deltaX,
                tz[0] = tz[1] = tz[2] = 0),
                n && (G && tk.deltaY > 0 && G(tk),
                $ && tk.deltaY < 0 && $(tk),
                J && J(tk),
                tt && tk.deltaY < 0 != tS < 0 && tt(tk),
                tS = tk.deltaY,
                tD[0] = tD[1] = tD[2] = 0),
                (ty || t_) && (tn && tn(tk),
                t_ && (L && 1 === t_ && L(tk),
                H && H(tk),
                t_ = 0),
                ty = !1),
                tw && (tw = !1,
                1) && tm && tm(tk),
                tb && (tl(tk),
                tb = !1),
                tv = 0
            }, tL = function(t, e, r) {
                tz[r] += t,
                tD[r] += e,
                tk._vx.update(t),
                tk._vy.update(e),
                y ? tv || (tv = requestAnimationFrame(tB)) : tB()
            }, tY = function(t, e) {
                tg && !tT && (tk.axis = tT = Math.abs(t) > Math.abs(e) ? "x" : "y",
                tw = !0),
                "y" !== tT && (tz[2] += t,
                tk._vx.update(t, !0)),
                "x" !== tT && (tD[2] += e,
                tk._vy.update(e, !0)),
                y ? tv || (tv = requestAnimationFrame(tB)) : tB()
            }, tH = function(t) {
                if (!tX(t, 1)) {
                    var e = (t = D(t, b)).clientX
                      , r = t.clientY
                      , n = e - tk.x
                      , i = r - tk.y
                      , s = tk.isDragging;
                    tk.x = e,
                    tk.y = r,
                    (s || (n || i) && (Math.abs(tk.startX - e) >= p || Math.abs(tk.startY - r) >= p)) && (t_ || (t_ = s ? 2 : 1),
                    s || (tk.isDragging = !0),
                    tY(n, i))
                }
            }, tq = tk.onPress = function(t) {
                tX(t, 1) || t && t.button || (tk.axis = tT = null,
                tx.pause(),
                tk.isPressed = !0,
                t = D(t),
                tj = tS = 0,
                tk.startX = tk.x = t.clientX,
                tk.startY = tk.y = t.clientY,
                tk._vx.reset(),
                tk._vy.reset(),
                k(ts ? v : tP, d[1], tH, tM, !0),
                tk.deltaX = tk.deltaY = 0,
                q && q(tk))
            }
            , tU = tk.onRelease = function(t) {
                if (!tX(t, 1)) {
                    j(ts ? v : tP, d[1], tH, !0);
                    var r = !isNaN(tk.y - tk.startY)
                      , i = tk.isDragging
                      , s = i && (Math.abs(tk.x - tk.startX) > 3 || Math.abs(tk.y - tk.startY) > 3)
                      , a = D(t);
                    !s && r && (tk._vx.reset(),
                    tk._vy.reset(),
                    b && tp && e.delayedCall(.08, function() {
                        if (_() - tI > 300 && !t.defaultPrevented) {
                            if (t.target.click)
                                t.target.click();
                            else if (tP.createEvent) {
                                var e = tP.createEvent("MouseEvents");
                                e.initMouseEvent("click", !0, !0, n, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null),
                                t.target.dispatchEvent(e)
                            }
                        }
                    })),
                    tk.isDragging = tk.isGesturing = tk.isPressed = !1,
                    w && i && !ts && tx.restart(!0),
                    t_ && tB(),
                    Y && i && Y(tk),
                    U && U(tk, s)
                }
            }
            , tW = function(t) {
                return t.touches && t.touches.length > 1 && (tk.isGesturing = !0) && ta(t, tk.isDragging)
            }, tV = function() {
                return tk.isGesturing = !1,
                to(tk)
            }, t$ = function(t) {
                if (!tX(t)) {
                    var e = tN()
                      , r = tA();
                    tL((e - tE) * td, (r - tC) * td, 1),
                    tE = e,
                    tC = r,
                    w && tx.restart(!0)
                }
            }, tG = function(t) {
                if (!tX(t)) {
                    t = D(t, b),
                    tl && (tb = !0);
                    var e = (1 === t.deltaMode ? x : 2 === t.deltaMode ? n.innerHeight : 1) * A;
                    tL(t.deltaX * e, t.deltaY * e, 0),
                    w && !ts && tx.restart(!0)
                }
            }, tZ = function(t) {
                if (!tX(t)) {
                    var e = t.clientX
                      , r = t.clientY
                      , n = e - tk.x
                      , i = r - tk.y;
                    tk.x = e,
                    tk.y = r,
                    ty = !0,
                    w && tx.restart(!0),
                    (n || i) && tY(n, i)
                }
            }, tJ = function(t) {
                tk.event = t,
                te(tk)
            }, tQ = function(t) {
                tk.event = t,
                tr(tk)
            }, tK = function(t) {
                return tX(t) || D(t, b) && tf(tk)
            };
            tx = tk._dc = e.delayedCall(S || .25, function() {
                tk._vx.reset(),
                tk._vy.reset(),
                tx.pause(),
                w && w(tk)
            }).pause(),
            tk.deltaX = tk.deltaY = 0,
            tk._vx = z(0, 50, !0),
            tk._vy = z(0, 50, !0),
            tk.scrollX = tN,
            tk.scrollY = tA,
            tk.isDragging = tk.isGesturing = tk.isPressed = !1,
            h(this),
            tk.enable = function(t) {
                return !tk.isEnabled && (k(tR ? tP : v, "scroll", N),
                g.indexOf("scroll") >= 0 && k(tR ? tP : v, "scroll", t$, tM, th),
                g.indexOf("wheel") >= 0 && k(v, "wheel", tG, tM, th),
                (g.indexOf("touch") >= 0 && o || g.indexOf("pointer") >= 0) && (k(v, d[0], tq, tM, th),
                k(tP, d[2], tU),
                k(tP, d[3], tU),
                tp && k(v, "click", tF, !0, !0),
                tf && k(v, "click", tK),
                ta && k(tP, "gesturestart", tW),
                to && k(tP, "gestureend", tV),
                te && k(v, l + "enter", tJ),
                tr && k(v, l + "leave", tQ),
                tn && k(v, l + "move", tZ)),
                tk.isEnabled = !0,
                tk.isDragging = tk.isGesturing = tk.isPressed = ty = t_ = !1,
                tk._vx.reset(),
                tk._vy.reset(),
                tE = tN(),
                tC = tA(),
                t && t.type && tq(t),
                tc && tc(tk)),
                tk
            }
            ,
            tk.disable = function() {
                tk.isEnabled && (m.filter(function(t) {
                    return t !== tk && T(t.target)
                }).length || j(tR ? tP : v, "scroll", N),
                tk.isPressed && (tk._vx.reset(),
                tk._vy.reset(),
                j(ts ? v : tP, d[1], tH, !0)),
                j(tR ? tP : v, "scroll", t$, th),
                j(v, "wheel", tG, th),
                j(v, d[0], tq, th),
                j(tP, d[2], tU),
                j(tP, d[3], tU),
                j(v, "click", tF, !0),
                j(v, "click", tK),
                j(tP, "gesturestart", tW),
                j(tP, "gestureend", tV),
                j(v, l + "enter", tJ),
                j(v, l + "leave", tQ),
                j(v, l + "move", tZ),
                tk.isEnabled = tk.isPressed = tk.isDragging = !1,
                tu && tu(tk))
            }
            ,
            tk.kill = tk.revert = function() {
                tk.disable();
                var t = m.indexOf(tk);
                t >= 0 && m.splice(t, 1),
                f === tk && (f = 0)
            }
            ,
            m.push(tk),
            ts && T(v) && (f = tk),
            tk.enable(B)
        }
        ,
        t = [{
            key: "velocityX",
            get: function() {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function() {
                return this._vy.getVelocity()
            }
        }],
        function(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }(u.prototype, t),
        u
    }();
    B.version = "3.15.0",
    B.create = function(t) {
        return new B(t)
    }
    ,
    B.register = X,
    B.getAll = function() {
        return m.slice()
    }
    ,
    B.getById = function(t) {
        return m.filter(function(e) {
            return e.vars.id === t
        })[0]
    }
    ,
    p() && e.registerPlugin(B);
    var L, Y, H, q, U, W, V, $, G, Z, J, Q, K, tt, te, tr, tn, ti, ts, ta, to, tl, tc, tu, tf, td, th, tp, tg, tm, tv, tx, t_, ty, tb, tw, tT, tk, tj = 1, tS = Date.now, tM = tS(), tN = 0, tA = 0, tE = function(t, e, r) {
        var n = tq(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
        return r["_" + e + "Clamp"] = n,
        n ? t.substr(6, t.length - 7) : t
    }, tC = function(t, e) {
        return e && (!tq(t) || "clamp(" !== t.substr(0, 6)) ? "clamp(" + t + ")" : t
    }, tO = function() {
        return tt = 1
    }, tR = function() {
        return tt = 0
    }, tP = function(t) {
        return t
    }, tz = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }, tD = function() {
        return "u" > typeof window
    }, tI = function() {
        return L || tD() && (L = window.gsap) && L.registerPlugin && L
    }, tF = function(t) {
        return !!~V.indexOf(t)
    }, tX = function(t) {
        return ("Height" === t ? tv : H["inner" + t]) || U["client" + t] || W["client" + t]
    }, tB = function(t) {
        return w(t, "getBoundingClientRect") || (tF(t) ? function() {
            return eV.width = H.innerWidth,
            eV.height = tv,
            eV
        }
        : function() {
            return er(t)
        }
        )
    }, tL = function(t, e, r) {
        var n = r.d
          , i = r.d2
          , s = r.a;
        return (s = w(t, "getBoundingClientRect")) ? function() {
            return s()[n]
        }
        : function() {
            return (e ? tX(i) : t["client" + i]) || 0
        }
    }, tY = function(t, e) {
        var r = e.s
          , n = e.d2
          , i = e.d
          , s = e.a;
        return Math.max(0, (s = w(t, r = "scroll" + n)) ? s() - tB(t)()[i] : tF(t) ? (U[r] || W[r]) - tX(n) : t[r] - t["offset" + n])
    }, tH = function(t, e) {
        for (var r = 0; r < ts.length; r += 3)
            (!e || ~e.indexOf(ts[r + 1])) && t(ts[r], ts[r + 1], ts[r + 2])
    }, tq = function(t) {
        return "string" == typeof t
    }, tU = function(t) {
        return "function" == typeof t
    }, tW = function(t) {
        return "number" == typeof t
    }, tV = function(t) {
        return "object" == typeof t
    }, t$ = function(t, e, r) {
        return t && t.progress(+!e) && r && t.pause()
    }, tG = function(t, e, r) {
        if (t.enabled) {
            var n = t._ctx ? t._ctx.add(function() {
                return e(t, r)
            }) : e(t, r);
            n && n.totalTime && (t.callbackAnimation = n)
        }
    }, tZ = Math.abs, tJ = "left", tQ = "right", tK = "bottom", t0 = "width", t1 = "height", t2 = "Right", t5 = "Left", t3 = "Bottom", t4 = "padding", t8 = "margin", t6 = "Width", t7 = "Height", t9 = function(t) {
        return H.getComputedStyle(t.nodeType === Node.DOCUMENT_NODE ? t.scrollingElement : t)
    }, et = function(t) {
        var e = t9(t).position;
        t.style.position = "absolute" === e || "fixed" === e ? e : "relative"
    }, ee = function(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }, er = function(t, e) {
        var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== t9(t)[te] && L.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1)
          , n = t.getBoundingClientRect ? t.getBoundingClientRect() : t.scrollingElement.getBoundingClientRect();
        return r && r.progress(0).kill(),
        n
    }, en = function(t, e) {
        var r = e.d2;
        return t["offset" + r] || t["client" + r] || 0
    }, ei = function(t) {
        var e, r = [], n = t.labels, i = t.duration();
        for (e in n)
            r.push(n[e] / i);
        return r
    }, es = function(t) {
        var e = L.utils.snap(t)
          , r = Array.isArray(t) && t.slice(0).sort(function(t, e) {
            return t - e
        });
        return r ? function(t, n, i) {
            var s;
            if (void 0 === i && (i = .001),
            !n)
                return e(t);
            if (n > 0) {
                for (t -= i,
                s = 0; s < r.length; s++)
                    if (r[s] >= t)
                        return r[s];
                return r[s - 1]
            }
            for (s = r.length,
            t += i; s--; )
                if (r[s] <= t)
                    return r[s];
            return r[0]
        }
        : function(r, n, i) {
            void 0 === i && (i = .001);
            var s = e(r);
            return !n || Math.abs(s - r) < i || s - r < 0 == n < 0 ? s : e(n < 0 ? r - t : r + t)
        }
    }, ea = function(t, e, r, n) {
        return r.split(",").forEach(function(r) {
            return t(e, r, n)
        })
    }, eo = function(t, e, r, n, i) {
        return t.addEventListener(e, r, {
            passive: !n,
            capture: !!i
        })
    }, el = function(t, e, r, n) {
        return t.removeEventListener(e, r, !!n)
    }, ec = function(t, e, r) {
        (r = r && r.wheelHandler) && (t(e, "wheel", r),
        t(e, "touchmove", r))
    }, eu = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, ef = {
        toggleActions: "play",
        anticipatePin: 0
    }, ed = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, eh = function(t, e) {
        if (tq(t)) {
            var r = t.indexOf("=")
              , n = ~r ? (t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
            ~r && (t.indexOf("%") > r && (n *= e / 100),
            t = t.substr(0, r - 1)),
            t = n + (t in ed ? ed[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
        }
        return t
    }, ep = function(t, e, r, n, i, s, a, o) {
        var l = i.startColor
          , c = i.endColor
          , u = i.fontSize
          , f = i.indent
          , d = i.fontWeight
          , h = q.createElement("div")
          , p = tF(r) || "fixed" === w(r, "pinType")
          , g = -1 !== t.indexOf("scroller")
          , m = p ? W : "IFRAME" === r.tagName ? r.contentDocument.body : r
          , v = -1 !== t.indexOf("start")
          , x = v ? l : c
          , _ = "border-color:" + x + ";font-size:" + u + ";color:" + x + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return _ += "position:" + ((g || o) && p ? "fixed;" : "absolute;"),
        (g || o || !p) && (_ += (n === C ? tQ : tK) + ":" + (s + parseFloat(f)) + "px;"),
        a && (_ += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
        h._isStart = v,
        h.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        h.style.cssText = _,
        h.innerText = e || 0 === e ? t + "-" + e : t,
        m.children[0] ? m.insertBefore(h, m.children[0]) : m.appendChild(h),
        h._offset = h["offset" + n.op.d2],
        eg(h, 0, n, v),
        h
    }, eg = function(t, e, r, n) {
        var i = {
            display: "block"
        }
          , s = r[n ? "os2" : "p2"]
          , a = r[n ? "p2" : "os2"];
        t._isFlipped = n,
        i[r.a + "Percent"] = n ? -100 : 0,
        i[r.a] = n ? "1px" : 0,
        i["border" + s + t6] = 1,
        i["border" + a + t6] = 0,
        i[r.p] = e + "px",
        L.set(t, i)
    }, em = [], ev = {}, ex = function() {
        return tS() - tN > 34 && (tb || (tb = requestAnimationFrame(eF)))
    }, e_ = function() {
        tc && tc.isPressed && !(tc.startX > W.clientWidth) || (v.cache++,
        tc ? tb || (tb = requestAnimationFrame(eF)) : eF(),
        tN || ej("scrollStart"),
        tN = tS())
    }, ey = function() {
        td = H.innerWidth,
        tf = H.innerHeight
    }, eb = function(t) {
        v.cache++,
        (!0 === t || !K && !tl && !q.fullscreenElement && !q.webkitFullscreenElement && (!tu || td !== H.innerWidth || Math.abs(H.innerHeight - tf) > .25 * H.innerHeight)) && $.restart(!0)
    }, ew = {}, eT = [], ek = function t() {
        return el(e0, "scrollEnd", t) || ez(!0)
    }, ej = function(t) {
        return ew[t] && ew[t].map(function(t) {
            return t()
        }) || eT
    }, eS = [], eM = function(t) {
        for (var e = 0; e < eS.length; e += 5)
            (!t || eS[e + 4] && eS[e + 4].query === t) && (eS[e].style.cssText = eS[e + 1],
            eS[e].getBBox && eS[e].setAttribute("transform", eS[e + 2] || ""),
            eS[e + 3].uncache = 1)
    }, eN = function() {
        return v.forEach(function(t) {
            return tU(t) && ++t.cacheID && (t.rec = t())
        })
    }, eA = function(t, e) {
        var r;
        for (tr = 0; tr < em.length; tr++)
            (r = em[tr]) && (!e || r._ctx === e) && (t ? r.kill(1) : r.revert(!0, !0));
        tx = !0,
        e && eM(e),
        e || ej("revert")
    }, eE = function(t, e) {
        v.cache++,
        (e || !tw) && v.forEach(function(t) {
            return tU(t) && t.cacheID++ && (t.rec = 0)
        }),
        tq(t) && (H.history.scrollRestoration = tg = t)
    }, eC = 0, eO = function() {
        if (tT !== eC) {
            var t = tT = eC;
            requestAnimationFrame(function() {
                return t === eC && ez(!0)
            })
        }
    }, eR = function() {
        W.appendChild(tm),
        tv = !tc && tm.offsetHeight || H.innerHeight,
        W.removeChild(tm)
    }, eP = function(t) {
        return G(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
            return e.style.display = t ? "none" : "block"
        })
    }, ez = function(t, e) {
        if (U = q.documentElement,
        W = q.body,
        V = [H, q, U, W],
        tN && !t && !tx)
            return void eo(e0, "scrollEnd", ek);
        eR(),
        tw = e0.isRefreshing = !0,
        tx || eN();
        var r = ej("refreshInit");
        ta && e0.sort(),
        e || eA(),
        v.forEach(function(t) {
            tU(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"),
            t(0))
        }),
        em.slice(0).forEach(function(t) {
            return t.refresh()
        }),
        tx = !1,
        em.forEach(function(t) {
            if (t._subPinOffset && t.pin) {
                var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight"
                  , r = t.pin[e];
                t.revert(!0, 1),
                t.adjustPinSpacing(t.pin[e] - r),
                t.refresh()
            }
        }),
        t_ = 1,
        eP(!0),
        em.forEach(function(t) {
            var e = tY(t.scroller, t._dir)
              , r = "max" === t.vars.end || t._endClamp && t.end > e
              , n = t._startClamp && t.start >= e;
            (r || n) && t.setPositions(n ? e - 1 : t.start, r ? Math.max(n ? e : t.start + 1, e) : t.end, !0)
        }),
        eP(!1),
        t_ = 0,
        r.forEach(function(t) {
            return t && t.render && t.render(-1)
        }),
        v.forEach(function(t) {
            tU(t) && (t.smooth && requestAnimationFrame(function() {
                return t.target.style.scrollBehavior = "smooth"
            }),
            t.rec && t(t.rec))
        }),
        eE(tg, 1),
        $.pause(),
        eC++,
        tw = 2,
        eF(2),
        em.forEach(function(t) {
            return tU(t.vars.onRefresh) && t.vars.onRefresh(t)
        }),
        tw = e0.isRefreshing = !1,
        ej("refresh")
    }, eD = 0, eI = 1, eF = function(t) {
        if (2 === t || !tw && !tx) {
            e0.isUpdating = !0,
            tk && tk.update(0);
            var e = em.length
              , r = tS()
              , n = r - tM >= 50
              , i = e && em[0].scroll();
            if (eI = eD > i ? -1 : 1,
            tw || (eD = i),
            n && (tN && !tt && r - tN > 200 && (tN = 0,
            ej("scrollEnd")),
            J = tM,
            tM = r),
            eI < 0) {
                for (tr = e; tr-- > 0; )
                    em[tr] && em[tr].update(0, n);
                eI = 1
            } else
                for (tr = 0; tr < e; tr++)
                    em[tr] && em[tr].update(0, n);
            e0.isUpdating = !1
        }
        tb = 0
    }, eX = [tJ, "top", tK, tQ, t8 + t3, t8 + t2, t8 + "Top", t8 + t5, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], eB = eX.concat([t0, t1, "boxSizing", "max" + t6, "max" + t7, "position", t8, t4, t4 + "Top", t4 + t2, t4 + t3, t4 + t5]), eL = function(t, e, r) {
        eq(r);
        var n = t._gsap;
        if (n.spacerIsNative)
            eq(n.spacerState);
        else if (t._gsap.swappedIn) {
            var i = e.parentNode;
            i && (i.insertBefore(t, e),
            i.removeChild(e))
        }
        t._gsap.swappedIn = !1
    }, eY = function(t, e, r, n) {
        if (!t._gsap.swappedIn) {
            for (var i, s = eX.length, a = e.style, o = t.style; s--; )
                a[i = eX[s]] = r[i];
            a.position = "absolute" === r.position ? "absolute" : "relative",
            "inline" === r.display && (a.display = "inline-block"),
            o[tK] = o[tQ] = "auto",
            a.flexBasis = r.flexBasis || "auto",
            a.overflow = "visible",
            a.boxSizing = "border-box",
            a[t0] = en(t, E) + "px",
            a[t1] = en(t, C) + "px",
            a[t4] = o[t8] = o.top = o[tJ] = "0",
            eq(n),
            o[t0] = o["max" + t6] = r[t0],
            o[t1] = o["max" + t7] = r[t1],
            o[t4] = r[t4],
            t.parentNode !== e && (t.parentNode.insertBefore(e, t),
            e.appendChild(t)),
            t._gsap.swappedIn = !0
        }
    }, eH = /([A-Z])/g, eq = function(t) {
        if (t) {
            var e, r, n = t.t.style, i = t.length, s = 0;
            for ((t.t._gsap || L.core.getCache(t.t)).uncache = 1; s < i; s += 2)
                r = t[s + 1],
                e = t[s],
                r ? n[e] = r : n[e] && n.removeProperty(e.replace(eH, "-$1").toLowerCase())
        }
    }, eU = function(t) {
        for (var e = eB.length, r = t.style, n = [], i = 0; i < e; i++)
            n.push(eB[i], r[eB[i]]);
        return n.t = t,
        n
    }, eW = function(t, e, r) {
        for (var n, i = [], s = t.length, a = 8 * !!r; a < s; a += 2)
            n = t[a],
            i.push(n, n in e ? e[n] : t[a + 1]);
        return i.t = t.t,
        i
    }, eV = {
        left: 0,
        top: 0
    }, e$ = function(t, e, r, n, i, s, a, o, l, c, u, f, d, h) {
        tU(t) && (t = t(o)),
        tq(t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? eh("0" + t.substr(3), r) : 0));
        var p, g, m, v = d ? d.time() : 0;
        if (d && d.seek(0),
        isNaN(t) || (t *= 1),
        tW(t))
            d && (t = L.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, t)),
            a && eg(a, r, n, !0);
        else {
            tU(e) && (e = e(o));
            var x, _, y, b, w = (t || "0").split(" ");
            (x = er(m = O(e, o) || W) || {}).left || x.top || "none" !== t9(m).display || (b = m.style.display,
            m.style.display = "block",
            x = er(m),
            b ? m.style.display = b : m.style.removeProperty("display")),
            _ = eh(w[0], x[n.d]),
            y = eh(w[1] || "0", r),
            t = x[n.p] - l[n.p] - c + _ + i - y,
            a && eg(a, y, n, r - y < 20 || a._isStart && y > 20),
            r -= r - y
        }
        if (h && (o[h] = t || -.001,
        t < 0 && (t = 0)),
        s) {
            var T = t + r
              , k = s._isStart;
            p = "scroll" + n.d2,
            eg(s, T, n, k && T > 20 || !k && (u ? Math.max(W[p], U[p]) : s.parentNode[p]) <= T + 1),
            u && (l = er(a),
            u && (s.style[n.op.p] = l[n.op.p] - n.op.m - s._offset + "px"))
        }
        return d && m && (p = er(m),
        d.seek(f),
        g = er(m),
        d._caScrollDist = p[n.p] - g[n.p],
        t = t / d._caScrollDist * f),
        d && d.seek(v),
        d ? t : Math.round(t)
    }, eG = /(webkit|moz|length|cssText|inset)/i, eZ = function(t, e, r, n) {
        if (t.parentNode !== e) {
            var i, s, a = t.style;
            if (e === W) {
                for (i in t._stOrig = a.cssText,
                s = t9(t))
                    +i || eG.test(i) || !s[i] || "string" != typeof a[i] || "0" === i || (a[i] = s[i]);
                a.top = r,
                a.left = n
            } else
                a.cssText = t._stOrig;
            L.core.getCache(t).uncache = 1,
            e.appendChild(t)
        }
    }, eJ = function(t, e, r) {
        var n = e
          , i = n;
        return function(e) {
            var s = Math.round(t());
            return s !== n && s !== i && Math.abs(s - n) > 3 && Math.abs(s - i) > 3 && (e = s,
            r && r()),
            i = n,
            n = Math.round(e)
        }
    }, eQ = function(t, e, r) {
        var n = {};
        n[e.p] = "+=" + r,
        L.set(t, n)
    }, eK = function(t, e) {
        var r = P(t, e)
          , n = "_scroll" + e.p2
          , i = function e(i, s, a, o, l) {
            var c = e.tween
              , u = s.onComplete
              , f = {};
            a = a || r();
            var d = eJ(r, a, function() {
                c.kill(),
                e.tween = 0
            });
            return l = o && l || 0,
            o = o || i - a,
            c && c.kill(),
            s[n] = i,
            s.inherit = !1,
            s.modifiers = f,
            f[n] = function() {
                return d(a + o * c.ratio + l * c.ratio * c.ratio)
            }
            ,
            s.onUpdate = function() {
                v.cache++,
                e.tween && eF()
            }
            ,
            s.onComplete = function() {
                e.tween = 0,
                u && u.call(c)
            }
            ,
            c = e.tween = L.to(t, s)
        };
        return t[n] = r,
        r.wheelHandler = function() {
            return i.tween && i.tween.kill() && (i.tween = 0)
        }
        ,
        eo(t, "wheel", r.wheelHandler),
        e0.isTouch && eo(t, "touchmove", r.wheelHandler),
        i
    }, e0 = function() {
        function t(e, r) {
            Y || t.register(L) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            tp(this),
            this.init(e, r)
        }
        return t.prototype.init = function(e, r) {
            if (this.progress = this.start = 0,
            this.vars && this.kill(!0, !0),
            !tA) {
                this.update = this.refresh = this.kill = tP;
                return
            }
            var n, i, s, a, o, l, c, u, f, d, h, p, g, m, _, y, b, T, k, j, S, M, N, A, R, z, D, I, F, X, B, Y, V, $, Q, te, tn, ti, ts, tl, tc, tu = e = ee(tq(e) || tW(e) || e.nodeType ? {
                trigger: e
            } : e, ef), tf = tu.onUpdate, td = tu.toggleClass, th = tu.id, tp = tu.onToggle, tg = tu.onRefresh, tm = tu.scrub, tv = tu.trigger, tx = tu.pin, tb = tu.pinSpacing, tT = tu.invalidateOnRefresh, tM = tu.anticipatePin, tO = tu.onScrubComplete, tR = tu.onSnapComplete, tD = tu.once, tI = tu.snap, tX = tu.pinReparent, tH = tu.pinSpacer, tJ = tu.containerAnimation, tQ = tu.fastScrollEnd, tK = tu.preventOverlaps, ea = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? E : C, ec = !tm && 0 !== tm, ed = O(e.scroller || H), eg = L.core.getCache(ed), ex = tF(ed), ey = ("pinType"in e ? e.pinType : w(ed, "pinType") || ex && "fixed") === "fixed", ew = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], eT = ec && e.toggleActions.split(" "), ej = "markers"in e ? e.markers : ef.markers, eS = ex ? 0 : parseFloat(t9(ed)["border" + ea.p2 + t6]) || 0, eM = this, eN = e.onRefreshInit && function() {
                return e.onRefreshInit(eM)
            }
            , eA = tL(ed, ex, ea), eE = !ex || ~x.indexOf(ed) ? tB(ed) : function() {
                return eV
            }
            , eC = 0, eR = 0, eP = 0, ez = P(ed, ea);
            if (eM._startClamp = eM._endClamp = !1,
            eM._dir = ea,
            tM *= 45,
            eM.scroller = ed,
            eM.scroll = tJ ? tJ.time.bind(tJ) : ez,
            l = ez(),
            eM.vars = e,
            r = r || e.animation,
            "refreshPriority"in e && (ta = 1,
            -9999 === e.refreshPriority && (tk = eM)),
            eg.tweenScroll = eg.tweenScroll || {
                top: eK(ed, C),
                left: eK(ed, E)
            },
            eM.tweenTo = s = eg.tweenScroll[ea.p],
            eM.scrubDuration = function(t) {
                (Q = tW(t) && t) ? $ ? $.duration(t) : $ = L.to(r, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: !1,
                    duration: Q,
                    paused: !0,
                    onComplete: function() {
                        return tO && tO(eM)
                    }
                }) : ($ && $.progress(1).kill(),
                $ = 0)
            }
            ,
            r && (r.vars.lazy = !1,
            r._initted && !eM.isReverted || !1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.duration() && r.render(0, !0, !0),
            eM.animation = r.pause(),
            r.scrollTrigger = eM,
            eM.scrubDuration(tm),
            Y = 0,
            th || (th = r.vars.id)),
            tI && ((!tV(tI) || tI.push) && (tI = {
                snapTo: tI
            }),
            "scrollBehavior"in W.style && L.set(ex ? [W, U] : ed, {
                scrollBehavior: "auto"
            }),
            v.forEach(function(t) {
                return tU(t) && t.target === (ex ? q.scrollingElement || U : ed) && (t.smooth = !1)
            }),
            o = tU(tI.snapTo) ? tI.snapTo : "labels" === tI.snapTo ? (n = r,
            function(t) {
                return L.utils.snap(ei(n), t)
            }
            ) : "labelsDirectional" === tI.snapTo ? (i = r,
            function(t, e) {
                return es(ei(i))(t, e.direction)
            }
            ) : !1 !== tI.directional ? function(t, e) {
                return es(tI.snapTo)(t, tS() - eR < 500 ? 0 : e.direction)
            }
            : L.utils.snap(tI.snapTo),
            te = tV(te = tI.duration || {
                min: .1,
                max: 2
            }) ? Z(te.min, te.max) : Z(te, te),
            tn = L.delayedCall(tI.delay || Q / 2 || .1, function() {
                var t = ez()
                  , e = tS() - eR < 500
                  , n = s.tween;
                if ((e || 10 > Math.abs(eM.getVelocity())) && !n && !tt && eC !== t) {
                    var i, a, l = (t - u) / y, c = r && !ec ? r.totalProgress() : l, d = e ? 0 : (c - V) / (tS() - J) * 1e3 || 0, h = L.utils.clamp(-l, 1 - l, tZ(d / 2) * d / .185), p = l + (!1 === tI.inertia ? 0 : h), g = tI, m = g.onStart, v = g.onInterrupt, x = g.onComplete;
                    if (tW(i = o(p, eM)) || (i = p),
                    a = Math.max(0, Math.round(u + i * y)),
                    t <= f && t >= u && a !== t) {
                        if (n && !n._initted && n.data <= tZ(a - t))
                            return;
                        !1 === tI.inertia && (h = i - l),
                        s(a, {
                            duration: te(tZ(.185 * Math.max(tZ(p - c), tZ(i - c)) / d / .05 || 0)),
                            ease: tI.ease || "power3",
                            data: tZ(a - t),
                            onInterrupt: function() {
                                return tn.restart(!0) && v && tG(eM, v)
                            },
                            onComplete: function() {
                                eM.update(),
                                eC = ez(),
                                r && !ec && ($ ? $.resetTo("totalProgress", i, r._tTime / r._tDur) : r.progress(i)),
                                Y = V = r && !ec ? r.totalProgress() : eM.progress,
                                tR && tR(eM),
                                x && tG(eM, x)
                            }
                        }, t, h * y, a - t - h * y),
                        m && tG(eM, m, s.tween)
                    }
                } else
                    eM.isActive && eC !== t && tn.restart(!0)
            }).pause()),
            th && (ev[th] = eM),
            (tc = (tv = eM.trigger = O(tv || !0 !== tx && tx)) && tv._gsap && tv._gsap.stRevert) && (tc = tc(eM)),
            tx = !0 === tx ? tv : O(tx),
            tq(td) && (td = {
                targets: tv,
                className: td
            }),
            tx && (!1 === tb || tb === t8 || (tb = (!!tb || !tx.parentNode || !tx.parentNode.style || "flex" !== t9(tx.parentNode).display) && t4),
            eM.pin = tx,
            (a = L.core.getCache(tx)).spacer ? b = a.pinState : (tH && ((tH = O(tH)) && !tH.nodeType && (tH = tH.current || tH.nativeElement),
            a.spacerIsNative = !!tH,
            tH && (a.spacerState = eU(tH))),
            a.spacer = j = tH || q.createElement("div"),
            j.classList.add("pin-spacer"),
            th && j.classList.add("pin-spacer-" + th),
            a.pinState = b = eU(tx)),
            !1 !== e.force3D && L.set(tx, {
                force3D: !0
            }),
            eM.spacer = j = a.spacer,
            z = (B = t9(tx))[tb + ea.os2],
            M = L.getProperty(tx),
            N = L.quickSetter(tx, ea.a, "px"),
            eY(tx, j, B),
            k = eU(tx)),
            ej) {
                m = tV(ej) ? ee(ej, eu) : eu,
                p = ep("scroller-start", th, ed, ea, m, 0),
                g = ep("scroller-end", th, ed, ea, m, 0, p),
                S = p["offset" + ea.op.d2];
                var eD = O(w(ed, "content") || ed);
                d = this.markerStart = ep("start", th, eD, ea, m, S, 0, tJ),
                h = this.markerEnd = ep("end", th, eD, ea, m, S, 0, tJ),
                tJ && (tl = L.quickSetter([d, h], ea.a, "px")),
                ey || x.length && !0 === w(ed, "fixedMarkers") || (et(ex ? W : ed),
                L.set([p, g], {
                    force3D: !0
                }),
                I = L.quickSetter(p, ea.a, "px"),
                X = L.quickSetter(g, ea.a, "px"))
            }
            if (tJ) {
                var eF = tJ.vars.onUpdate
                  , eX = tJ.vars.onUpdateParams;
                tJ.eventCallback("onUpdate", function() {
                    eM.update(0, 0, 1),
                    eF && eF.apply(tJ, eX || [])
                })
            }
            if (eM.previous = function() {
                return em[em.indexOf(eM) - 1]
            }
            ,
            eM.next = function() {
                return em[em.indexOf(eM) + 1]
            }
            ,
            eM.revert = function(t, e) {
                if (!e)
                    return eM.kill(!0);
                var n = !1 !== t || !eM.enabled
                  , i = K;
                n !== eM.isReverted && (n && (ti = Math.max(ez(), eM.scroll.rec || 0),
                eP = eM.progress,
                ts = r && r.progress()),
                d && [d, h, p, g].forEach(function(t) {
                    return t.style.display = n ? "none" : "block"
                }),
                n && (K = eM,
                eM.update(n)),
                !tx || tX && eM.isActive || (n ? eL(tx, j, b) : eY(tx, j, t9(tx), D)),
                n || eM.update(n),
                K = i,
                eM.isReverted = n)
            }
            ,
            eM.refresh = function(n, i, a, o) {
                if (!K && eM.enabled || i) {
                    if (tx && n && tN)
                        return void eo(t, "scrollEnd", ek);
                    !tw && eN && eN(eM),
                    K = eM,
                    s.tween && !a && (s.tween.kill(),
                    s.tween = 0),
                    $ && $.pause(),
                    tT && r && (r.revert({
                        kill: !1
                    }).invalidate(),
                    r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(t) {
                        return t.vars.immediateRender && t.render(0, !0, !0)
                    }) : r.vars.immediateRender && r.render(0, !0, !0)),
                    eM.isReverted || eM.revert(!0, !0),
                    eM._subPinOffset = !1;
                    var m, v, x, w, S, N, z, I, X, B, Y, H, V, G = eA(), Z = eE(), J = tJ ? tJ.duration() : tY(ed, ea), Q = y <= .01 || !y, tt = 0, te = o || 0, tr = tV(a) ? a.end : e.end, ta = e.endTrigger || tv, tl = tV(a) ? a.start : e.start || (0 !== e.start && tv ? tx ? "0 0" : "0 100%" : 0), tc = eM.pinnedContainer = e.pinnedContainer && O(e.pinnedContainer, eM), tu = tv && Math.max(0, em.indexOf(eM)) || 0, tf = tu;
                    for (ej && tV(a) && (H = L.getProperty(p, ea.p),
                    V = L.getProperty(g, ea.p)); tf-- > 0; )
                        (N = em[tf]).end || N.refresh(0, 1) || (K = eM),
                        (z = N.pin) && (z === tv || z === tx || z === tc) && !N.isReverted && (B || (B = []),
                        B.unshift(N),
                        N.revert(!0, !0)),
                        N !== em[tf] && (tu--,
                        tf--);
                    for (tU(tl) && (tl = tl(eM)),
                    u = e$(tl = tE(tl, "start", eM), tv, G, ea, ez(), d, p, eM, Z, eS, ey, J, tJ, eM._startClamp && "_startClamp") || (tx ? -.001 : 0),
                    tU(tr) && (tr = tr(eM)),
                    tq(tr) && !tr.indexOf("+=") && (~tr.indexOf(" ") ? tr = (tq(tl) ? tl.split(" ")[0] : "") + tr : (tt = eh(tr.substr(2), G),
                    tr = tq(tl) ? tl : (tJ ? L.utils.mapRange(0, tJ.duration(), tJ.scrollTrigger.start, tJ.scrollTrigger.end, u) : u) + tt,
                    ta = tv)),
                    tr = tE(tr, "end", eM),
                    f = Math.max(u, e$(tr || (ta ? "100% 0" : J), ta, G, ea, ez() + tt, h, g, eM, Z, eS, ey, J, tJ, eM._endClamp && "_endClamp")) || -.001,
                    tt = 0,
                    tf = tu; tf--; )
                        (z = (N = em[tf] || {}).pin) && N.start - N._pinPush <= u && !tJ && N.end > 0 && (m = N.end - (eM._startClamp ? Math.max(0, N.start) : N.start),
                        (z === tv && N.start - N._pinPush < u || z === tc) && isNaN(tl) && (tt += m * (1 - N.progress)),
                        z === tx && (te += m));
                    if (u += tt,
                    f += tt,
                    eM._startClamp && (eM._startClamp += tt),
                    eM._endClamp && !tw && (eM._endClamp = f || -.001,
                    f = Math.min(f, tY(ed, ea))),
                    y = f - u || (u -= .01) && .001,
                    Q && (eP = L.utils.clamp(0, 1, L.utils.normalize(u, f, ti))),
                    eM._pinPush = te,
                    d && tt && ((m = {})[ea.a] = "+=" + tt,
                    tc && (m[ea.p] = "-=" + ez()),
                    L.set([d, h], m)),
                    tx && !(t_ && eM.end >= tY(ed, ea)))
                        m = t9(tx),
                        w = ea === C,
                        x = ez(),
                        A = parseFloat(M(ea.a)) + te,
                        !J && f > 1 && (Y = {
                            style: Y = (ex ? q.scrollingElement || U : ed).style,
                            value: Y["overflow" + ea.a.toUpperCase()]
                        },
                        ex && "scroll" !== t9(W)["overflow" + ea.a.toUpperCase()] && (Y.style["overflow" + ea.a.toUpperCase()] = "scroll")),
                        eY(tx, j, m),
                        k = eU(tx),
                        v = er(tx, !0),
                        I = ey && P(ed, w ? E : C)(),
                        tb ? ((D = [tb + ea.os2, y + te + "px"]).t = j,
                        (tf = tb === t4 ? en(tx, ea) + y + te : 0) && (D.push(ea.d, tf + "px"),
                        "auto" !== j.style.flexBasis && (j.style.flexBasis = tf + "px")),
                        eq(D),
                        tc && em.forEach(function(t) {
                            t.pin === tc && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                        }),
                        ey && ez(ti)) : (tf = en(tx, ea)) && "auto" !== j.style.flexBasis && (j.style.flexBasis = tf + "px"),
                        ey && ((S = {
                            top: v.top + (w ? x - u : I) + "px",
                            left: v.left + (w ? I : x - u) + "px",
                            boxSizing: "border-box",
                            position: "fixed"
                        })[t0] = S["max" + t6] = Math.ceil(v.width) + "px",
                        S[t1] = S["max" + t7] = Math.ceil(v.height) + "px",
                        S[t8] = S[t8 + "Top"] = S[t8 + t2] = S[t8 + t3] = S[t8 + t5] = "0",
                        S[t4] = m[t4],
                        S[t4 + "Top"] = m[t4 + "Top"],
                        S[t4 + t2] = m[t4 + t2],
                        S[t4 + t3] = m[t4 + t3],
                        S[t4 + t5] = m[t4 + t5],
                        T = eW(b, S, tX),
                        tw && ez(0)),
                        r ? (X = r._initted,
                        to(1),
                        r.render(r.duration(), !0, !0),
                        R = M(ea.a) - A + y + te,
                        F = Math.abs(y - R) > 1,
                        ey && F && T.splice(T.length - 2, 2),
                        r.render(0, !0, !0),
                        X || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        to(0)) : R = y,
                        Y && (Y.value ? Y.style["overflow" + ea.a.toUpperCase()] = Y.value : Y.style.removeProperty("overflow-" + ea.a));
                    else if (tv && ez() && !tJ)
                        for (v = tv.parentNode; v && v !== W; )
                            v._pinOffset && (u -= v._pinOffset,
                            f -= v._pinOffset),
                            v = v.parentNode;
                    B && B.forEach(function(t) {
                        return t.revert(!1, !0)
                    }),
                    eM.start = u,
                    eM.end = f,
                    l = c = tw ? ti : ez(),
                    tJ || tw || (l < ti && ez(ti),
                    eM.scroll.rec = 0),
                    eM.revert(!1, !0),
                    eR = tS(),
                    tn && (eC = -1,
                    tn.restart(!0)),
                    K = 0,
                    r && ec && (r._initted || ts) && r.progress() !== ts && r.progress(ts || 0, !0).render(r.time(), !0, !0),
                    (Q || eP !== eM.progress || tJ || tT || r && !r._initted) && (r && !ec && (r._initted || eP || !1 !== r.vars.immediateRender) && r.totalProgress(tJ && u < -.001 && !eP ? L.utils.normalize(u, f, 0) : eP, !0),
                    eM.progress = Q || (l - u) / y === eP ? 0 : eP),
                    tx && tb && (j._pinOffset = Math.round(eM.progress * R)),
                    $ && $.invalidate(),
                    isNaN(H) || (H -= L.getProperty(p, ea.p),
                    V -= L.getProperty(g, ea.p),
                    eQ(p, ea, H),
                    eQ(d, ea, H - (o || 0)),
                    eQ(g, ea, V),
                    eQ(h, ea, V - (o || 0))),
                    Q && !tw && eM.update(),
                    !tg || tw || _ || (_ = !0,
                    tg(eM),
                    _ = !1)
                }
            }
            ,
            eM.getVelocity = function() {
                return (ez() - c) / (tS() - J) * 1e3 || 0
            }
            ,
            eM.endAnimation = function() {
                t$(eM.callbackAnimation),
                r && ($ ? $.progress(1) : r.paused() ? ec || t$(r, eM.direction < 0, 1) : t$(r, r.reversed()))
            }
            ,
            eM.labelToScroll = function(t) {
                return r && r.labels && (u || eM.refresh() || u) + r.labels[t] / r.duration() * y || 0
            }
            ,
            eM.getTrailing = function(t) {
                var e = em.indexOf(eM)
                  , r = eM.direction > 0 ? em.slice(0, e).reverse() : em.slice(e + 1);
                return (tq(t) ? r.filter(function(e) {
                    return e.vars.preventOverlaps === t
                }) : r).filter(function(t) {
                    return eM.direction > 0 ? t.end <= u : t.start >= f
                })
            }
            ,
            eM.update = function(t, e, n) {
                if (!tJ || n || t) {
                    var i, a, o, d, h, g, m, v = !0 === tw ? ti : eM.scroll(), x = t ? 0 : (v - u) / y, _ = x < 0 ? 0 : x > 1 ? 1 : x || 0, b = eM.progress;
                    if (e && (c = l,
                    l = tJ ? ez() : v,
                    tI && (V = Y,
                    Y = r && !ec ? r.totalProgress() : _)),
                    tM && tx && !K && !tj && tN && (!_ && u < v + (v - c) / (tS() - J) * tM ? _ = 1e-4 : 1 === _ && f > v + (v - c) / (tS() - J) * tM && (_ = .9999)),
                    _ !== b && eM.enabled) {
                        if (d = (h = (i = eM.isActive = !!_ && _ < 1) != (!!b && b < 1)) || !!_ != !!b,
                        eM.direction = _ > b ? 1 : -1,
                        eM.progress = _,
                        d && !K && (a = _ && !b ? 0 : 1 === _ ? 1 : 1 === b ? 2 : 3,
                        ec && (o = !h && "none" !== eT[a + 1] && eT[a + 1] || eT[a],
                        m = r && ("complete" === o || "reset" === o || o in r))),
                        tK && (h || m) && (m || tm || !r) && (tU(tK) ? tK(eM) : eM.getTrailing(tK).forEach(function(t) {
                            return t.endAnimation()
                        })),
                        !ec && (!$ || K || tj ? r && r.totalProgress(_, !!(K && (eR || t))) : ($._dp._time - $._start !== $._time && $.render($._dp._time - $._start),
                        $.resetTo ? $.resetTo("totalProgress", _, r._tTime / r._tDur) : ($.vars.totalProgress = _,
                        $.invalidate().restart()))),
                        tx)
                            if (t && tb && (j.style[tb + ea.os2] = z),
                            ey) {
                                if (d) {
                                    if (g = !t && _ > b && f + 1 > v && v + 1 >= tY(ed, ea),
                                    tX)
                                        if (!t && (i || g)) {
                                            var w = er(tx, !0)
                                              , S = v - u;
                                            eZ(tx, W, w.top + (ea === C ? S : 0) + "px", w.left + (ea === C ? 0 : S) + "px")
                                        } else
                                            eZ(tx, j);
                                    eq(i || g ? T : k),
                                    F && _ < 1 && i || N(A + (1 !== _ || g ? 0 : R))
                                }
                            } else
                                N(tz(A + R * _));
                        !tI || s.tween || K || tj || tn.restart(!0),
                        td && (h || tD && _ && (_ < 1 || !ty)) && G(td.targets).forEach(function(t) {
                            return t.classList[i || tD ? "add" : "remove"](td.className)
                        }),
                        !tf || ec || t || tf(eM),
                        d && !K ? (ec && (m && ("complete" === o ? r.pause().totalProgress(1) : "reset" === o ? r.restart(!0).pause() : "restart" === o ? r.restart(!0) : r[o]()),
                        tf && tf(eM)),
                        (h || !ty) && (tp && h && tG(eM, tp),
                        ew[a] && tG(eM, ew[a]),
                        tD && (1 === _ ? eM.kill(!1, 1) : ew[a] = 0),
                        !h && ew[a = 1 === _ ? 1 : 3] && tG(eM, ew[a])),
                        tQ && !i && Math.abs(eM.getVelocity()) > (tW(tQ) ? tQ : 2500) && (t$(eM.callbackAnimation),
                        $ ? $.progress(1) : t$(r, "reverse" === o ? 1 : !_, 1))) : ec && tf && !K && tf(eM)
                    }
                    if (X) {
                        var M = tJ ? v / tJ.duration() * (tJ._caScrollDist || 0) : v;
                        I(M + +!!p._isFlipped),
                        X(M)
                    }
                    tl && tl(-v / tJ.duration() * (tJ._caScrollDist || 0))
                }
            }
            ,
            eM.enable = function(e, r) {
                eM.enabled || (eM.enabled = !0,
                eo(ed, "resize", eb),
                ex || eo(ed, "scroll", e_),
                eN && eo(t, "refreshInit", eN),
                !1 !== e && (eM.progress = eP = 0,
                l = c = eC = ez()),
                !1 !== r && eM.refresh())
            }
            ,
            eM.getTween = function(t) {
                return t && s ? s.tween : $
            }
            ,
            eM.setPositions = function(t, e, r, n) {
                if (tJ) {
                    var i = tJ.scrollTrigger
                      , s = tJ.duration()
                      , a = i.end - i.start;
                    t = i.start + a * t / s,
                    e = i.start + a * e / s
                }
                eM.refresh(!1, !1, {
                    start: tC(t, r && !!eM._startClamp),
                    end: tC(e, r && !!eM._endClamp)
                }, n),
                eM.update()
            }
            ,
            eM.adjustPinSpacing = function(t) {
                if (D && t) {
                    var e = D.indexOf(ea.d) + 1;
                    D[e] = parseFloat(D[e]) + t + "px",
                    D[1] = parseFloat(D[1]) + t + "px",
                    eq(D)
                }
            }
            ,
            eM.disable = function(e, r) {
                if (!1 !== e && eM.revert(!0, !0),
                eM.enabled && (eM.enabled = eM.isActive = !1,
                r || $ && $.pause(),
                ti = 0,
                a && (a.uncache = 1),
                eN && el(t, "refreshInit", eN),
                tn && (tn.pause(),
                s.tween && s.tween.kill() && (s.tween = 0)),
                !ex)) {
                    for (var n = em.length; n--; )
                        if (em[n].scroller === ed && em[n] !== eM)
                            return;
                    el(ed, "resize", eb),
                    ex || el(ed, "scroll", e_)
                }
            }
            ,
            eM.kill = function(t, n) {
                eM.disable(t, n),
                $ && !n && $.kill(),
                th && delete ev[th];
                var i = em.indexOf(eM);
                i >= 0 && em.splice(i, 1),
                i === tr && eI > 0 && tr--,
                i = 0,
                em.forEach(function(t) {
                    return t.scroller === eM.scroller && (i = 1)
                }),
                i || tw || (eM.scroll.rec = 0),
                r && (r.scrollTrigger = null,
                t && r.revert({
                    kill: !1
                }),
                n || r.kill()),
                d && [d, h, p, g].forEach(function(t) {
                    return t.parentNode && t.parentNode.removeChild(t)
                }),
                tk === eM && (tk = 0),
                tx && (a && (a.uncache = 1),
                i = 0,
                em.forEach(function(t) {
                    return t.pin === tx && i++
                }),
                i || (a.spacer = 0)),
                e.onKill && e.onKill(eM)
            }
            ,
            em.push(eM),
            eM.enable(!1, !1),
            tc && tc(eM),
            r && r.add && !y) {
                var eB = eM.update;
                eM.update = function() {
                    eM.update = eB,
                    v.cache++,
                    u || f || eM.refresh()
                }
                ,
                L.delayedCall(.01, eM.update),
                y = .01,
                u = f = 0
            } else
                eM.refresh();
            tx && eO()
        }
        ,
        t.register = function(e) {
            return Y || (L = e || tI(),
            tD() && window.document && t.enable(),
            Y = tA),
            Y
        }
        ,
        t.defaults = function(t) {
            if (t)
                for (var e in t)
                    ef[e] = t[e];
            return ef
        }
        ,
        t.disable = function(t, e) {
            tA = 0,
            em.forEach(function(r) {
                return r[e ? "kill" : "disable"](t)
            }),
            el(H, "wheel", e_),
            el(q, "scroll", e_),
            clearInterval(Q),
            el(q, "touchcancel", tP),
            el(W, "touchstart", tP),
            ea(el, q, "pointerdown,touchstart,mousedown", tO),
            ea(el, q, "pointerup,touchend,mouseup", tR),
            $.kill(),
            tH(el);
            for (var r = 0; r < v.length; r += 3)
                ec(el, v[r], v[r + 1]),
                ec(el, v[r], v[r + 2])
        }
        ,
        t.enable = function() {
            if (H = window,
            U = (q = document).documentElement,
            W = q.body,
            L)
                if (G = L.utils.toArray,
                Z = L.utils.clamp,
                tp = L.core.context || tP,
                to = L.core.suppressOverwrites || tP,
                tg = H.history.scrollRestoration || "auto",
                eD = H.pageYOffset || 0,
                L.core.globals("ScrollTrigger", t),
                W) {
                    tA = 1,
                    (tm = document.createElement("div")).style.height = "100vh",
                    tm.style.position = "absolute",
                    eR(),
                    function t() {
                        return tA && requestAnimationFrame(t)
                    }(),
                    B.register(L),
                    t.isTouch = B.isTouch,
                    th = B.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                    tu = 1 === B.isTouch,
                    eo(H, "wheel", e_),
                    V = [H, q, U, W],
                    L.matchMedia ? (t.matchMedia = function(t) {
                        var e, r = L.matchMedia();
                        for (e in t)
                            r.add(e, t[e]);
                        return r
                    }
                    ,
                    L.addEventListener("matchMediaInit", function() {
                        eN(),
                        eA()
                    }),
                    L.addEventListener("matchMediaRevert", function() {
                        return eM()
                    }),
                    L.addEventListener("matchMedia", function() {
                        ez(0, 1),
                        ej("matchMedia")
                    }),
                    L.matchMedia().add("(orientation: portrait)", function() {
                        return ey(),
                        ey
                    })) : console.warn("Requires GSAP 3.11.0 or later"),
                    ey(),
                    eo(q, "scroll", e_);
                    var e, r, n = W.hasAttribute("style"), i = W.style, s = i.borderTopStyle, a = L.core.Animation.prototype;
                    for (a.revert || Object.defineProperty(a, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }),
                    i.borderTopStyle = "solid",
                    C.m = Math.round((e = er(W)).top + C.sc()) || 0,
                    E.m = Math.round(e.left + E.sc()) || 0,
                    s ? i.borderTopStyle = s : i.removeProperty("border-top-style"),
                    n || (W.setAttribute("style", ""),
                    W.removeAttribute("style")),
                    Q = setInterval(ex, 250),
                    L.delayedCall(.5, function() {
                        return tj = 0
                    }),
                    eo(q, "touchcancel", tP),
                    eo(W, "touchstart", tP),
                    ea(eo, q, "pointerdown,touchstart,mousedown", tO),
                    ea(eo, q, "pointerup,touchend,mouseup", tR),
                    te = L.utils.checkPrefix("transform"),
                    eB.push(te),
                    Y = tS(),
                    $ = L.delayedCall(.2, ez).pause(),
                    ts = [q, "visibilitychange", function() {
                        var t = H.innerWidth
                          , e = H.innerHeight;
                        q.hidden ? (tn = t,
                        ti = e) : (tn !== t || ti !== e) && eb()
                    }
                    , q, "DOMContentLoaded", ez, H, "load", ez, H, "resize", eb],
                    tH(eo),
                    em.forEach(function(t) {
                        return t.enable(0, 1)
                    }),
                    r = 0; r < v.length; r += 3)
                        ec(el, v[r], v[r + 1]),
                        ec(el, v[r], v[r + 2])
                } else
                    q && q.addEventListener("DOMContentLoaded", function e() {
                        t.enable(),
                        q.removeEventListener("DOMContentLoaded", e)
                    })
        }
        ,
        t.config = function(e) {
            "limitCallbacks"in e && (ty = !!e.limitCallbacks);
            var r = e.syncInterval;
            r && clearInterval(Q) || (Q = r) && setInterval(ex, r),
            "ignoreMobileResize"in e && (tu = 1 === t.isTouch && e.ignoreMobileResize),
            "autoRefreshEvents"in e && (tH(el) || tH(eo, e.autoRefreshEvents || "none"),
            tl = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        ,
        t.scrollerProxy = function(t, e) {
            var r = O(t)
              , n = v.indexOf(r)
              , i = tF(r);
            ~n && v.splice(n, i ? 6 : 2),
            e && (i ? x.unshift(H, e, W, e, U, e) : x.unshift(r, e))
        }
        ,
        t.clearMatchMedia = function(t) {
            em.forEach(function(e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            })
        }
        ,
        t.isInViewport = function(t, e, r) {
            var n = (tq(t) ? O(t) : t).getBoundingClientRect()
              , i = n[r ? t0 : t1] * e || 0;
            return r ? n.right - i > 0 && n.left + i < H.innerWidth : n.bottom - i > 0 && n.top + i < H.innerHeight
        }
        ,
        t.positionInViewport = function(t, e, r) {
            tq(t) && (t = O(t));
            var n = t.getBoundingClientRect()
              , i = n[r ? t0 : t1]
              , s = null == e ? i / 2 : e in ed ? ed[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
            return r ? (n.left + s) / H.innerWidth : (n.top + s) / H.innerHeight
        }
        ,
        t.killAll = function(t) {
            if (em.slice(0).forEach(function(t) {
                return "ScrollSmoother" !== t.vars.id && t.kill()
            }),
            !0 !== t) {
                var e = ew.killAll || [];
                ew = {},
                e.forEach(function(t) {
                    return t()
                })
            }
        }
        ,
        t
    }();
    e0.version = "3.15.0",
    e0.saveStyles = function(t) {
        return t ? G(t).forEach(function(t) {
            if (t && t.style) {
                var e = eS.indexOf(t);
                e >= 0 && eS.splice(e, 5),
                eS.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), L.core.getCache(t), tp())
            }
        }) : eS
    }
    ,
    e0.revert = function(t, e) {
        return eA(!t, e)
    }
    ,
    e0.create = function(t, e) {
        return new e0(t,e)
    }
    ,
    e0.refresh = function(t) {
        return t ? eb(!0) : (Y || e0.register()) && ez(!0)
    }
    ,
    e0.update = function(t) {
        return ++v.cache && eF(2 * (!0 === t))
    }
    ,
    e0.clearScrollMemory = eE,
    e0.maxScroll = function(t, e) {
        return tY(t, e ? E : C)
    }
    ,
    e0.getScrollFunc = function(t, e) {
        return P(O(t), e ? E : C)
    }
    ,
    e0.getById = function(t) {
        return ev[t]
    }
    ,
    e0.getAll = function() {
        return em.filter(function(t) {
            return "ScrollSmoother" !== t.vars.id
        })
    }
    ,
    e0.isScrolling = function() {
        return !!tN
    }
    ,
    e0.snapDirectional = es,
    e0.addEventListener = function(t, e) {
        var r = ew[t] || (ew[t] = []);
        ~r.indexOf(e) || r.push(e)
    }
    ,
    e0.removeEventListener = function(t, e) {
        var r = ew[t]
          , n = r && r.indexOf(e);
        n >= 0 && r.splice(n, 1)
    }
    ,
    e0.batch = function(t, e) {
        var r, n = [], i = {}, s = e.interval || .016, a = e.batchMax || 1e9, o = function(t, e) {
            var r = []
              , n = []
              , i = L.delayedCall(s, function() {
                e(r, n),
                r = [],
                n = []
            }).pause();
            return function(t) {
                r.length || i.restart(!0),
                r.push(t.trigger),
                n.push(t),
                a <= r.length && i.progress(1)
            }
        };
        for (r in e)
            i[r] = "on" === r.substr(0, 2) && tU(e[r]) && "onRefreshInit" !== r ? o(r, e[r]) : e[r];
        return tU(a) && (a = a(),
        eo(e0, "refresh", function() {
            return a = e.batchMax()
        })),
        G(t).forEach(function(t) {
            var e = {};
            for (r in i)
                e[r] = i[r];
            e.trigger = t,
            n.push(e0.create(e))
        }),
        n
    }
    ;
    var e1, e2 = function(t, e, r, n) {
        return e > n ? t(n) : e < 0 && t(0),
        r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
    }, e5 = function t(e, r) {
        !0 === r ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (B.isTouch ? " pinch-zoom" : "") : "none",
        e === U && t(W, r)
    }, e3 = {
        auto: 1,
        scroll: 1
    }, e4 = function(t) {
        var e, r = t.event, n = t.target, i = t.axis, s = (r.changedTouches ? r.changedTouches[0] : r).target, a = s._gsap || L.core.getCache(s), o = tS();
        if (!a._isScrollT || o - a._isScrollT > 2e3) {
            for (; s && s !== W && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(e3[(e = t9(s)).overflowY] || e3[e.overflowX])); )
                s = s.parentNode;
            a._isScroll = s && s !== n && !tF(s) && (e3[(e = t9(s)).overflowY] || e3[e.overflowX]),
            a._isScrollT = o
        }
        (a._isScroll || "x" === i) && (r.stopPropagation(),
        r._gsapAllow = !0)
    }, e8 = function(t, e, r, n) {
        return B.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: n = n && e4,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function() {
                return r && eo(q, B.eventTypes[0], e7, !1, !0)
            },
            onDisable: function() {
                return el(q, B.eventTypes[0], e7, !0)
            }
        })
    }, e6 = /(input|label|select|textarea)/i, e7 = function(t) {
        var e = e6.test(t.target.tagName);
        (e || e1) && (t._gsapAllow = !0,
        e1 = e)
    }, e9 = function(t) {
        tV(t) || (t = {}),
        t.preventDefault = t.isNormalizer = t.allowClicks = !0,
        t.type || (t.type = "wheel,touch"),
        t.debounce = !!t.debounce,
        t.id = t.id || "normalizer";
        var e, r, n, i, s, a, o, l, c = t, u = c.normalizeScrollX, f = c.momentum, d = c.allowNestedScroll, h = c.onRelease, p = O(t.target) || U, g = L.core.globals().ScrollSmoother, m = g && g.get(), x = th && (t.content && O(t.content) || m && !1 !== t.content && !m.smooth() && m.content()), _ = P(p, C), y = P(p, E), b = 1, w = (B.isTouch && H.visualViewport ? H.visualViewport.scale * H.visualViewport.width : H.outerWidth) / H.innerWidth, T = 0, k = tU(f) ? function() {
            return f(e)
        }
        : function() {
            return f || 2.8
        }
        , j = e8(p, t.type, !0, d), S = function() {
            return i = !1
        }, M = tP, N = tP, A = function() {
            r = tY(p, C),
            N = Z(+!!th, r),
            u && (M = Z(0, tY(p, E))),
            n = eC
        }, R = function() {
            x._gsap.y = tz(parseFloat(x._gsap.y) + _.offset) + "px",
            x.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(x._gsap.y) + ", 0, 1)",
            _.offset = _.cacheID = 0
        }, z = function() {
            if (i) {
                requestAnimationFrame(S);
                var t = tz(e.deltaY / 2)
                  , r = N(_.v - t);
                if (x && r !== _.v + _.offset) {
                    _.offset = r - _.v;
                    var n = tz((parseFloat(x && x._gsap.y) || 0) - _.offset);
                    x.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)",
                    x._gsap.y = n + "px",
                    _.cacheID = v.cache,
                    eF()
                }
                return !0
            }
            _.offset && R(),
            i = !0
        }, D = function() {
            A(),
            s.isActive() && s.vars.scrollY > r && (_() > r ? s.progress(1) && _(r) : s.resetTo("scrollY", r))
        };
        return x && L.set(x, {
            y: "+=0"
        }),
        t.ignoreCheck = function(t) {
            return th && "touchmove" === t.type && z(t) || b > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
        }
        ,
        t.onPress = function() {
            i = !1;
            var t = b;
            b = tz((H.visualViewport && H.visualViewport.scale || 1) / w),
            s.pause(),
            t !== b && e5(p, b > 1.01 || !u && "x"),
            a = y(),
            o = _(),
            A(),
            n = eC
        }
        ,
        t.onRelease = t.onGestureStart = function(t, e) {
            if (_.offset && R(),
            e) {
                v.cache++;
                var n, i, a = k();
                u && (i = (n = y()) + -(.05 * a * t.velocityX) / .227,
                a *= e2(y, n, i, tY(p, E)),
                s.vars.scrollX = M(i)),
                i = (n = _()) + -(.05 * a * t.velocityY) / .227,
                a *= e2(_, n, i, tY(p, C)),
                s.vars.scrollY = N(i),
                s.invalidate().duration(a).play(.01),
                (th && s.vars.scrollY >= r || n >= r - 1) && L.to({}, {
                    onUpdate: D,
                    duration: a
                })
            } else
                l.restart(!0);
            h && h(t)
        }
        ,
        t.onWheel = function() {
            s._ts && s.pause(),
            tS() - T > 1e3 && (n = 0,
            T = tS())
        }
        ,
        t.onChange = function(t, e, r, i, s) {
            if (eC !== n && A(),
            e && u && y(M(i[2] === e ? a + (t.startX - t.x) : y() + e - i[1])),
            r) {
                _.offset && R();
                var l = s[2] === r
                  , c = l ? o + t.startY - t.y : _() + r - s[1]
                  , f = N(c);
                l && c !== f && (o += f - c),
                _(f)
            }
            (r || e) && eF()
        }
        ,
        t.onEnable = function() {
            e5(p, !u && "x"),
            e0.addEventListener("refresh", D),
            eo(H, "resize", D),
            _.smooth && (_.target.style.scrollBehavior = "auto",
            _.smooth = y.smooth = !1),
            j.enable()
        }
        ,
        t.onDisable = function() {
            e5(p, !0),
            el(H, "resize", D),
            e0.removeEventListener("refresh", D),
            j.kill()
        }
        ,
        t.lockAxis = !1 !== t.lockAxis,
        (e = new B(t)).iOS = th,
        th && !_() && _(1),
        th && L.ticker.add(tP),
        l = e._dc,
        s = L.to(e, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: u ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: eJ(_, _(), function() {
                    return s.pause()
                })
            },
            onUpdate: eF,
            onComplete: l.vars.onComplete
        }),
        e
    };
    e0.sort = function(t) {
        if (tU(t))
            return em.sort(t);
        var e = H.pageYOffset || 0;
        return e0.getAll().forEach(function(t) {
            return t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect().top : t.start + H.innerHeight
        }),
        em.sort(t || function(t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + -1e6 * (e.vars.refreshPriority || 0))
        }
        )
    }
    ,
    e0.observe = function(t) {
        return new B(t)
    }
    ,
    e0.normalizeScroll = function(t) {
        if (void 0 === t)
            return tc;
        if (!0 === t && tc)
            return tc.enable();
        if (!1 === t) {
            tc && tc.kill(),
            tc = t;
            return
        }
        var e = t instanceof B ? t : e9(t);
        return tc && tc.target === e.target && tc.kill(),
        tF(e.target) && (tc = e),
        e
    }
    ,
    e0.core = {
        _getVelocityProp: z,
        _inputObserver: e8,
        _scrollers: v,
        _proxies: x,
        bridge: {
            ss: function() {
                tN || ej("scrollStart"),
                tN = tS()
            },
            ref: function() {
                return K
            }
        }
    },
    tI() && L.registerPlugin(e0),
    t.s(["ScrollTrigger", 0, e0], 83495)
}
, 79356, t => {
    "use strict";
    var e = t.i(43476)
      , r = t.i(57688)
      , n = t.i(87634)
      , i = t.i(22016)
      , s = t.i(21419)
      , a = t.i(71645)
      , o = t.i(89970)
      , l = t.i(83495);
    o.gsap.registerPlugin(l.ScrollTrigger);
    let c = [{
        icon: "/assets/About1.png",
        text: "Institutional-grade resilience against market volatility and misinformation, ensuring unwavering commitment to the protocol.",
        highlight: null
    }, {
        icon: "/assets/About2.webp",
        text: "Powered by a Conviction Engine that precisely detects high-value signals, separating noise from true opportunity.",
        highlight: "Conviction Engine"
    }, {
        icon: "/assets/About3.webp",
        text: "Join the apex predator of DeFi and leverage automated strategies for superior returns. Welcome to the fortress.",
        highlight: null
    }];
    function u() {
        return (0,
        e.jsxs)("div", {
            className: "relative w-full aspect-video bg-black rounded-t-2xl overflow-hidden",
            children: [(0,
            e.jsx)("video", {
                src: "/assets/About.mp4",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                className: "w-full h-full object-cover",
                preload: "metadata",
                controls: !0
            }), (0,
            e.jsx)(i.default, {
                href: s.StrategyOnX,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "absolute top-3 right-3",
                children: (0,
                e.jsx)("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "white",
                    children: (0,
                    e.jsx)("path", {
                        d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                    })
                })
            })]
        })
    }
    t.s(["default", 0, function() {
        let t = (0,
        a.useRef)(null)
          , l = (0,
        a.useRef)(null);
        return (0,
        a.useEffect)( () => {
            if (!l.current || !t.current)
                return;
            let e = o.gsap.context( () => {
                o.gsap.set(l.current, {
                    opacity: 0,
                    scaleX: 0,
                    transformOrigin: "left center"
                }),
                o.gsap.to(l.current, {
                    opacity: 1,
                    scaleX: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: t.current,
                        start: "top 80%",
                        toggleActions: "play reverse play reverse"
                    }
                })
            }
            );
            return () => e.revert()
        }
        , []),
        (0,
        e.jsxs)("section", {
            id: "about",
            className: "relative min-h-screen w-full flex flex-col",
             children: [
        // Background Image - Fixed
        (0, e.jsx)("img", {
            src: "/assets/AboutBg.webp",
            alt: "",
            className: "object-cover object-center pointer-events-none select-none",
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0
            }
        }), (0,
            e.jsxs)("div", {
                className: "relative z-10 flex-1 container_layout grid grid-cols-1 lg:grid-cols-12 items-center justify-between gap-10 xl:gap-16 py-10 lg:py-20",
                children: [(0,
                e.jsx)("div", {
                    className: "w-full flex flex-col items-center justify-center col-span-full lg:col-span-5 gap-5 shrink-0",
                    children: (0,
                    e.jsxs)("div", {
                        className: "w-full rounded-2xl border-2 border-brand-500/60 bg-black/70 shadow-[0_0_50px_rgba(251,134,2,0.3),inset_0_0_30px_rgba(251,134,2,0.05)] overflow-hidden",
                        children: [(0,
                        e.jsx)(u, {}), (0,
                        e.jsx)("div", {
                            className: "px-4 py-3 border-t border-brand-700/30 bg-black/50",
                            children: (0,
                            e.jsxs)("p", {
                                className: "text-xs font-mono leading-relaxed",
                                children: [(0,
                                e.jsx)("span", {
                                    className: "text-white font-bold",
                                    children: "Source: "
                                }), (0,
                                e.jsx)("i.default", {
                                    href: s.StrategyOnX,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-white/55 hover:text-brand-400 transition-colors break-all",
                                    children: s.StrategyOnX
                                })]
                            })
                        })]
                    })
                }), (0,
                e.jsxs)("div", {
                    className: "w-full flex flex-col gap-8 col-span-full lg:col-span-7",
                    children: [(0,
                    e.jsxs)("div", {
                        ref: t,
                        className: "",
                        children: [(0,
                        e.jsx)("p", {
                            className: "font-black text-white leading-tight",
                            style: {
                                fontSize: "clamp(2.0rem, 4.0vw, 4.0rem)"
                            },
                            children: "About"
                        }), (0,
                        e.jsxs)("h2", {
                            className: "font-black leading-none w-fit",
                            style: {
                                fontSize: "clamp(3.0rem, 7vw, 6.0rem)",
                                textShadow: "0 0 50px rgba(251,134,2,0.45)",
                                letterSpacing: "-0.02em"
                            },
                            children: [(0,
                            e.jsx)("span", {
                                className: "text-primary",
                                children: "$"
                            }), "MAXI", (0,
                            e.jsx)("div", {
                                ref: l,
                                className: "mt-4 mb-4 origin-left bg-primary rounded-full h-2 w-full ",
                                style: {
                                    boxShadow: "0 0 12px rgba(251,134,2,0.7)"
                                }
                            })]
                        })]
                    }), (0,
                    e.jsx)("div", {
                        className: "flex flex-col gap-4",
                        children: c.map( (t, n) => (0,
                        e.jsxs)("div", {
                            className: "flex flex-col sm:flex-row items-start gap-4 rounded-xl px-4 py-4 bg-black/80 border-l-2 border-l-brand-500/60 border border-white/8 backdrop-blur-md",
                            children: [(0,
                            e.jsx)("div", {
                                className: "shrink-0 w-14 h-14 relative",
                                children: (0,
                                e.jsx)("img", {
                                    width: 200,
                                    height: 200,
                                    src: t.icon,
                                    alt: `About ${n + 1}`,
                                    className: "w-full h-full object-contain",
                                    style: {
                                        filter: "drop-shadow(0 0 10px rgba(251,134,2,0.65))"
                                    }
                                })
                            }), (0,
                            e.jsx)("p", {
                                className: "text-white leading-relaxed text-sm lg:text-base",
                                style: {
                                    textShadow: "0 1px 4px rgba(0,0,0,0.9)"
                                },
                                children: t.highlight ? t.text.split(t.highlight).map( (r, n, i) => (0,
                                e.jsxs)("span", {
                                    children: [r, n < i.length - 1 && (0,
                                    e.jsx)("strong", {
                                        className: "text-brand-500 font-extrabold",
                                        children: t.highlight
                                    })]
                                }, n)) : t.text
                            })]
                        }, n))
                    })]
                })]
            }), (0,
            e.jsx)("div", {
                className: "relative z-10",
                children: (0,
                e.jsx)("img", {})
            })]
        })
    }
    ])
}
, 65336, t => {
    "use strict";
    var e = t.i(43476)
      , r = t.i(57688)
      , n = t.i(71645)
      , i = t.i(89970)
      , s = t.i(83495)
      , a = t.i(87634);
    i.default.registerPlugin(s.ScrollTrigger);
    let o = [{
        num: "01",
        title: "Buy $MAXI",
        desc: "Secure your $MAXI tokens by connecting your wallet and executing a trade on our institutional trading platform.",
        img: "/assets/Deploy1.webp",
        side: "left"
    }, {
        num: "02",
        title: "Stake $MAXI",
        desc: "Deposit your $MAXI tokens into our secure staking pool to begin generating capital for the vault.",
        img: "/assets/Deploy2.webp",
        side: "left"
    }, {
        num: "03",
        title: "Stack WBTC rewards",
        desc: "Staking pool will generate upto 11% APY to mimic Strategy's dividend yield.",
        img: "/assets/Deploy3.webp",
        side: "right"
    }, {
        num: "04",
        title: "Infinite Satoshi glitch.",
        desc: "Utilize the compound rewards from automated strategy execution to create a continuous Bitcoin accumulation loop.",
        img: "/assets/Deploy4.webp",
        side: "right"
    }];
    t.s(["default", 0, function() {
        let t = (0,
        n.useRef)(null)
          , s = (0,
        n.useRef)([])
          , l = (0,
        n.useRef)([])
          , c = (0,
        n.useRef)(null)
          , u = (0,
        n.useRef)(null);
        (0,
        n.useEffect)( () => {
            let e = i.default.context( () => {
                i.default.from(u.current, {
                    y: 40,
                    opacity: 0,
                    duration: .8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: u.current,
                        start: "top 85%"
                    }
                }),
                s.current.forEach( (t, e) => {
                    t && i.default.from(t, {
                        x: -80,
                        opacity: 0,
                        duration: .7,
                        ease: "power3.out",
                        delay: .15 * e,
                        scrollTrigger: {
                            trigger: t,
                            start: "top 88%",
                            toggleActions: "play reverse play reverse"
                        }
                    })
                }
                ),
                l.current.forEach( (t, e) => {
                    t && i.default.from(t, {
                        x: 80,
                        opacity: 0,
                        duration: .7,
                        ease: "power3.out",
                        delay: .15 * e,
                        scrollTrigger: {
                            trigger: t,
                            start: "top 88%",
                            toggleActions: "play reverse play reverse"
                        }
                    })
                }
                ),
                i.default.from(c.current, {
                    scale: .82,
                    opacity: 0,
                    duration: .9,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                        trigger: c.current,
                        start: "top 85%"
                    }
                })
            }
            , t);
            return () => e.revert()
        }
        , []);
        let f = o.filter(t => "left" === t.side)
          , d = o.filter(t => "right" === t.side);
        return (0,
        e.jsxs)(e.Fragment, {
            children: [(0,
            e.jsxs)("section", {
                ref: t,
                id: "deploy",
                className: "relative w-full overflow-hidden py-20 lg:py-28",
                children: [(0,
                e.jsx)("div", {
                    className: "pointer-events-none absolute bottom-0 left-0 right-0 h-40 z-0",
                    style: {
                        background: "linear-gradient(to top, rgba(251,134,2,0.22) 0%, transparent 100%)"
                    }
                }), (0,
                e.jsxs)("div", {
                    className: "container_layout relative z-10",
                    children: [(0,
                    e.jsx)("div", {
                        ref: u,
                        className: "text-center mb-14 lg:mb-20",
                        children: (0,
                        e.jsxs)("h2", {
                            className: "font-black uppercase leading-none",
                            style: {
                                fontSize: "clamp(1.9rem, 4vw, 4rem)",
                                letterSpacing: "-0.01em"
                            },
                            children: [(0,
                            e.jsx)("span", {
                                className: "text-brand-500",
                                style: {
                                    textShadow: "0 0 48px rgba(251,134,2,0.6)"
                                },
                                children: "Follow"
                            }), " ", (0,
                            e.jsx)("span", {
                                className: "uppercase font-black",
                                children: "strategy"
                            })]
                        })
                    }), (0,
                    e.jsxs)("div", {
                        className: "relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center",
                        children: [(0,
                        e.jsxs)("div", {
                            className: "hidden md:block pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 z-0",
                            style: {
                                width: "20px"
                            },
                            children: [(0,
                            e.jsx)("div", {
                                className: "absolute inset-0",
                                style: {
                                    background: "linear-gradient(to bottom, transparent 0%, rgba(251,134,2,0.5) 15%, rgba(251,134,2,0.5) 85%, transparent 100%)",
                                    filter: "blur(5px)"
                                }
                            }), (0,
                            e.jsx)("div", {
                                className: "absolute inset-y-0 left-1/2 -translate-x-1/2",
                                style: {
                                    width: "1px",
                                    background: "linear-gradient(to bottom, transparent 0%, #fb8602 12%, #fb8602 88%, transparent 100%)"
                                }
                            })]
                        }), (0,
                        e.jsxs)("div", {
                            className: "hidden md:block pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0",
                            style: {
                                height: "20px"
                            },
                            children: [(0,
                            e.jsx)("div", {
                                className: "absolute inset-0",
                                style: {
                                    background: "linear-gradient(to right, transparent 0%, rgba(251,134,2,0.55) 10%, rgba(251,134,2,0.55) 90%, transparent 100%)",
                                    filter: "blur(5px)"
                                }
                            }), (0,
                            e.jsx)("div", {
                                className: "absolute inset-x-0 top-1/2 -translate-y-1/2",
                                style: {
                                    height: "1px",
                                    background: "linear-gradient(to right, transparent 0%, #fb8602 8%, #fb8602 92%, transparent 100%)"
                                }
                            })]
                        }), (0,
                        e.jsx)("div", {
                            className: "flex flex-col",
                            children: f.map( (t, n) => (0,
                            e.jsxs)("div", {
                                ref: t => {
                                    s.current[n] = t
                                }
                                ,
                                className: "flex flex-col px-4 lg:px-8 py-8 lg:py-10",
                                children: [(0,
                                e.jsxs)("div", {
                                    className: "flex items-center justify-between gap-3",
                                    children: [(0,
                                    e.jsxs)("div", {
                                        className: "flex-1 min-w-0",
                                        children: [(0,
                                        e.jsx)("span", {
                                            className: "block font-black text-brand-500 leading-none",
                                            style: {
                                                fontSize: "clamp(3rem, 6vw, 5rem)",
                                                textShadow: "0 0 32px rgba(251,134,2,0.55)",
                                                letterSpacing: "-0.04em"
                                            },
                                            children: t.num
                                        }), (0,
                                        e.jsx)("h3", {
                                            className: "font-black text-white drop-shadow-xl drop-shadow-space mt-3 mb-1.5",
                                            style: {
                                                fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)"
                                            },
                                            children: t.title
                                        })]
                                    }), (0,
                                    e.jsx)("div", {
                                        className: "relative shrink-0 w-30 h-30",
                                        children: (0,
                                        e.jsx)("img", {
                                            src: t.img,
                                            alt: t.title,
                                            width: 1080,
                                            height: 1080,
                                            className: "w-full object-contain drop-shadow-lg drop-shadow-primary",
                                            sizes: "1080px"
                                        })
                                    })]
                                }), (0,
                                e.jsx)("p", {
                                    className: "text-white/70 text-xs lg:text-sm leading-relaxed",
                                    children: t.desc
                                })]
                            }, t.num))
                        }), (0,
                        e.jsxs)("div", {
                            ref: c,
                            className: "hidden md:flex justify-center items-center relative z-10 px-4 lg:px-6",
                            children: [(0,
                            e.jsx)("div", {
                                className: "absolute inset-0 pointer-events-none",
                                style: {
                                    backgroundImage: "linear-gradient(rgba(251,134,2,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(251,134,2,0.09) 1px, transparent 1px)",
                                    backgroundSize: "32px 32px",
                                    maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)"
                                }
                            }), (0,
                            e.jsx)("div", {
                                className: "relative w-52 h-72 lg:w-64 lg:h-96 xl:w-72 xl:h-105",
                                children: (0,
                                e.jsx)("img", {
                                    src: "/assets/DeployMaxi21.png",
                                    alt: "Maxi Agent",
                                    width: 1080,
                                    height: 1080,
                                    className: "object-contain",
                                    sizes: "300px",
                                    style: {
                                        filter: "drop-shadow(0 0 28px rgba(251,134,2,0.45))"
                                    }
                                })
                            })]
                        }), (0,
                        e.jsx)("div", {
                            className: "flex flex-col",
                            children: d.map( (t, n) => (0,
                            e.jsxs)("div", {
                                ref: t => {
                                    l.current[n] = t
                                }
                                ,
                                className: "flex flex-col items-center px-4 lg:px-8 py-8 lg:py-10",
                                children: [(0,
                                e.jsxs)("div", {
                                    className: "flex items-center justify-between gap-3",
                                    children: [(0,
                                    e.jsx)("div", {
                                        className: "relative shrink-0 w-30 h-28",
                                        children: (0,
                                        e.jsx)("img", {
                                            src: t.img,
                                            alt: t.title,
                                            fill: !0,
                                            className: "w-full object-contain drop-shadow-lg drop-shadow-primary",
                                            sizes: "1080px"
                                        })
                                    }), (0,
                                    e.jsxs)("div", {
                                        className: "flex-1 min-w-0",
                                        children: [(0,
                                        e.jsx)("span", {
                                            className: "block font-black text-brand-500 leading-none text-right",
                                            style: {
                                                fontSize: "clamp(3rem, 6vw, 5rem)",
                                                textShadow: "0 0 32px rgba(251,134,2,0.55)",
                                                letterSpacing: "-0.04em"
                                            },
                                            children: t.num
                                        }), (0,
                                        e.jsx)("h3", {
                                            className: "font-black text-white drop-shadow-xl drop-shadow-space mt-3 mb-1.5 text-right",
                                            style: {
                                                fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)"
                                            },
                                            children: t.title
                                        })]
                                    })]
                                }), (0,
                                e.jsx)("p", {
                                    className: "text-white/60 text-xs lg:text-sm leading-relaxed text-right",
                                    children: t.desc
                                })]
                            }, t.num))
                        })]
                    })]
                })]
            }), (0,
            e.jsx)(a.default, {})]
        })
    }
    ])
}
, 98140, t => {
    "use strict";
    var e = t.i(43476)
      , r = t.i(57688)
      , n = t.i(87634)
      , i = t.i(71645)
      , s = t.i(89970)
      , a = t.i(83495);
    s.gsap.registerPlugin(a.ScrollTrigger);
    let o = [{
        percent: "21%",
        title: "Reserved for\nCapital Formation",
        bullets: ["At launch, single sided liquidity positions will be added, ranging from $1m MC upto $50m MC.", "The capital acquired from these positions will be added to $MAXI Vault and readily converted to WBTC.", "This vault will reward staking pool of $MAXI with WBTC acquired from the vault capital."]
    }, {
        percent: "79%",
        title: "Initial\nLiquidity Pool Supply",
        bullets: ["Supply will be used to launch initial liquidity pair."]
    }];
    t.s(["default", 0, function() {
        let t = (0,
        i.useRef)(null)
          , a = (0,
        i.useRef)(null);
        return (0,
        i.useEffect)( () => {
            if (!a.current || !t.current)
                return;
            let e = s.gsap.context( () => {
                s.gsap.set(a.current, {
                    scaleX: 0,
                    opacity: 0,
                    transformOrigin: "left center"
                }),
                s.gsap.to(a.current, {
                    scaleX: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: t.current,
                        start: "top 80%",
                        toggleActions: "play reverse play reverse"
                    }
                })
            }
            );
            return () => e.revert()
        }
        , []),
        (0,
        e.jsxs)("section", {
            id: "economy",
            className: "relative w-full overflow-hidden",
            children: [(0,
            e.jsx)("div", {
                className: "pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[80%] hidden lg:block",
                style: {
                    background: "radial-gradient(ellipse at 70% 50%, rgba(251,134,2,0.12) 0%, transparent 70%)"
                }
            }), (0,
            e.jsxs)("div", {
                className: "relative z-10 container_layout grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-6 py-16 lg:py-24",
                children: [(0,
                e.jsxs)("div", {
                    className: "flex flex-col gap-7 lg:pr-4 z-1",
                    children: [(0,
                    e.jsxs)("div", {
                        ref: t,
                        children: [(0,
                        e.jsxs)("p", {
                            className: "font-black leading-tight",
                            style: {
                                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                                letterSpacing: "0.06em"
                            },
                            children: [(0,
                            e.jsx)("span", {
                                className: "text-primary",
                                children: "$"
                            }), "MAXI"]
                        }), (0,
                        e.jsxs)("h2", {
                            className: "font-black text-white leading-none w-fit",
                            style: {
                                fontSize: "clamp(2.5rem, 4vw, 5rem)",
                                letterSpacing: "-0.03em",
                                textShadow: "0 0 50px rgba(251,134,2,0.45)"
                            },
                            children: [(0,
                            e.jsx)("span", {
                                children: "ECONOMY"
                            }), (0,
                            e.jsx)("div", {
                                ref: a,
                                className: "mt-4 mb-4 origin-left bg-primary rounded-full h-2 w-full ",
                                style: {
                                    boxShadow: "0 0 14px rgba(251,134,2,0.7)"
                                }
                            })]
                        }), (0,
                        e.jsxs)("p", {
                            className: "text-white font-bold text-sm lg:text-base leading-relaxed",
                            children: ["Total Supply = 21,000,000", " ", (0,
                            e.jsx)("span", {
                                className: "text-brand-500",
                                children: "$MAXI"
                            }), " only."]
                        })]
                    }), (0,
                    e.jsx)("div", {
                        className: "flex flex-col gap-4",
                        children: o.map(t => (0,
                        e.jsxs)("div", {
                            className: "rounded-2xl border border-brand-500/50 bg-black/70 backdrop-blur-sm overflow-hidden",
                            style: {
                                boxShadow: "0 0 24px rgba(251,134,2,0.08), inset 0 0 20px rgba(251,134,2,0.03)"
                            },
                            children: [(0,
                            e.jsxs)("div", {
                                className: "flex items-center gap-5 px-5 py-4 border-b border-brand-500/25",
                                children: [(0,
                                e.jsx)("span", {
                                    className: "font-black text-brand-500 leading-none shrink-0",
                                    style: {
                                        fontSize: "clamp(2rem, 5vw, 2.8rem)",
                                        textShadow: "0 0 20px rgba(251,134,2,0.5)"
                                    },
                                    children: t.percent
                                }), (0,
                                e.jsx)("span", {
                                    className: "font-bold text-white text-sm lg:text-base leading-snug whitespace-pre-line",
                                    children: t.title
                                })]
                            }), (0,
                            e.jsx)("ul", {
                                className: "px-5 py-4 flex flex-col gap-2.5",
                                children: t.bullets.map( (t, r) => (0,
                                e.jsxs)("li", {
                                    className: "flex items-start gap-3 text-white/75 text-xs lg:text-sm leading-relaxed",
                                    children: [(0,
                                    e.jsx)("span", {
                                        className: "mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-500 opacity-90"
                                    }), t]
                                }, r))
                            })]
                        }, t.percent))
                    })]
                }), (0,
                e.jsxs)("div", {
                    className: "relative flex items-center justify-center order-first lg:order-last z-0",
                    children: [(0,
                    e.jsx)("div", {
                        className: "absolute inset-0 rounded-full",
                        style: {
                            background: "radial-gradient(ellipse at center, rgba(251,134,2,0.18) 0%, transparent 65%)"
                        }
                    }), (0,
                    e.jsx)("div", {
                        className: "relative w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-full aspect-square",
                        children: (0,
                        e.jsx)("img", {
                            width: 1080,
                            height: 1080,
                            src: "/assets/EconomyCharacter.webp",
                            alt: "MAXI Economy — Hodl, Accumulate, Maximize",
                            className: "object-contain w-full drop-shadow-[0_0_40px_rgba(251,134,2,0.35)]",
                            priority: !0
                        })
                    })]
                })]
            }), (0,
            e.jsx)("div", {
                className: "relative z-10",
                children: (0,
                e.jsx)("img", {})
            })]
        })
    }
    ])
}
, 23271, t => {
    "use strict";
    var e = t.i(43476)
      , r = t.i(71645)
      , n = t.i(57688)
      , i = t.i(89970)
      , s = t.i(67881)
      , a = t.i(21419)
      , o = t.i(56420);
    let l = (0,
    o.default)("check", [["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]])
      , c = (0,
    o.default)("copy", [["rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
    }], ["path", {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
    }]]);
    t.s(["default", 0, function() {
        let t = (0,
        r.useRef)(null)
          , o = (0,
        r.useRef)(null)
          , u = (0,
        r.useRef)(null)
          , f = (0,
        r.useRef)(null)
          , d = (0,
        r.useRef)(null)
          , [h,p] = (0,
        r.useState)(!1);
        return (0,
        r.useEffect)( () => {
            if (!t.current || !o.current || !u.current)
                return;
            let e = i.gsap.context( () => {
                i.gsap.set(t.current, {
                    opacity: 0,
                    y: -40
                }),
                i.gsap.set(o.current, {
                    opacity: 0,
                    scaleX: 0
                }),
                i.gsap.set(u.current, {
                    opacity: 0,
                    y: 20
                }),
                f.current && i.gsap.set(f.current, {
                    opacity: 0,
                    y: 50
                }),
                d.current && i.gsap.set(d.current, {
                    opacity: 0,
                    y: 20
                });
                let e = i.gsap.timeline({
                    defaults: {
                        ease: "power3.out"
                    }
                });
                e.to(t.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1
                }).to(o.current, {
                    opacity: 1,
                    scaleX: 1,
                    duration: .6
                }, "-=0.4").to(u.current, {
                    opacity: 1,
                    y: 0,
                    duration: .8
                }, "-=0.3"),
                f.current && e.to(f.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1
                }, "-=0.5"),
                d.current && e.to(d.current, {
                    opacity: 1,
                    y: 0,
                    duration: .7
                }, "-=0.4")
            }
            );
            return () => e.revert()
        }
        , []),
        (0,
        e.jsx)("section", {
            className: "relative h-screen w-full overflow-hidden",
            children: (0,
            e.jsxs)("div", {
                className: "relative container_layout z-10 flex flex-col items-center justify-start h-full pt-32 px-4 text-center",
                children: [(0,
                e.jsxs)("div", {
                    className: "flex flex-col items-center justify-between gap-2",
                    children: [(0,
                    e.jsxs)("div", {
                        ref: t,
                        children: [(0,
                        e.jsx)("p", {
                            className: "font-black text-white",
                            style: {
                                fontFamily: "inherit",
                                fontSize: "clamp(1rem, 2vw, 2.0rem)",
                                textShadow: "0 2px 12px rgba(0,0,0,0.8)"
                            },
                            children: "Welcome to Official"
                        }), (0,
                        e.jsxs)("h1", {
                            className: "leading-none font-black mt-1",
                            style: {
                                fontFamily: "inherit",
                                fontSize: "clamp(1.5rem, 5vw, 5rem)",
                                textShadow: "0 4px 20px rgba(0,0,0,0.9)"
                            },
                            children: [(0,
                            e.jsx)("span", {
                                className: "text-primary",
                                children: "$"
                            }), (0,
                            e.jsx)("span", {
                                children: "MAXI"
                            }), (0,
                            e.jsx)("span", {
                                className: "text-white",
                                children: " on ETH"
                            }), (0,
                            e.jsx)("div", {
                                ref: o,
                                className: "mt-4 mb-4 origin-center bg-primary rounded-full h-2 w-full ",
                                style: {
                                    boxShadow: "0 0 12px rgba(251,134,2,0.7)"
                                }
                            })]
                        })]
                    }), (0,
                    e.jsxs)("p", {
                        ref: u,
                        className: "font-bold text-white text-[20px] lg:text-[30px]",
                        style: {
                            fontFamily: "inherit",
                            textShadow: "0 2px 10px rgba(0,0,0,0.8)"
                        },
                        children: [(0,
                        e.jsx)("span", {
                            className: "text-primary",
                            children: "MAXI"
                        }), (0,
                        e.jsx)("span", {
                            className: "",
                            children: " is the Official Mascot of "
                        }), (0,
                        e.jsx)("span", {
                            className: "font-black",
                            children: "Strategy"
                        }), (0,
                        e.jsx)("sup", {
                            className: "text-primary",
                            children: "₿"
                        }), " ", " ", (0,
                        e.jsxs)("span", {
                            className: "font-black",
                            children: ["(", (0,
                            e.jsx)("span", {
                                className: "text-primary",
                                children: "MSTR"
                            }), ")"]
                        })]
                    }), (0,
                    e.jsxs)("div", {
                        ref: d,
                        className: "mt-4 z-30 xl:hidden flex items-center justify-between gap-3 rounded-sm px-5 py-3 bg-muted border backdrop-filter backdrop-blur-md",
                        children: [(0,
                        e.jsx)("div", {
                            className: "text-white/80 max-w-[20ch] sm:max-w-full font-mono text-xs sm:text-sm tracking-wide truncate select-all ",
                            children: a.CA.slice(0, 6) + "..." + a.CA.slice(-6)
                        }), (0,
                        e.jsx)(s.Button, {
                            variant: "ghost",
                            onClick: () => navigator.clipboard.writeText(a.CA),
                            className: "text-white/50 hover:text-white transition-colors shrink-0",
                            "aria-label": "Copy contract address",
                            children: (0,
                            e.jsxs)("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [(0,
                                e.jsx)("rect", {
                                    x: "9",
                                    y: "9",
                                    width: "13",
                                    height: "13",
                                    rx: "2"
                                }), (0,
                                e.jsx)("path", {
                                    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                                })]
                            })
                        })]
                    })]
                }), (0,
               e.jsx)("div", {
    ref: f,
    className: "absolute bottom-0 left-0 right-0 z-10 flex justify-center pointer-events-none",
    children: (0,
    e.jsxs)("div", {
        className: "relative w-full",
        children: [(0,
        e.jsx)("img", {  // Changed from n.default to "img"
            src: "/assets/HeroMascot.webp",
            alt: "Maxi mascot",
            className: "absolute bottom-5 md:bottom-10 xl:bottom-40 left-1/2 -translate-x-1/2 w-40 md:w-60 xl:w-100 h-auto object-contain select-none z-1",
            loading: "eager"  // Replaces priority={true}
        }), (0,
                        e.jsx)("img", {
                            src: "/assets/HeroGlobe.webp",
                            alt: "Maxi globe",
                            width: 1920,
                            height: 1080,
                            className: "w-full h-auto absolute bottom-0 md:-bottom-10 xl:bottom-0 left-0 object-contain select-none drop-shadow-[0px_0px_50px_#f98806]",
                            priority: !0
                        })]
                    })
                }), (0,
                e.jsxs)("div", {
                    ref: d,
                    className: "hidden mt-4 z-30 absolute bottom-25 xl:flex items-center justify-between gap-2 rounded-sm px-3 xl:px-5 py-0 xl:py-3 bg-muted border backdrop-filter backdrop-blur-md",
                    children: [(0,
                    e.jsx)("span", {
                        className: "text-white/80 max-w-[20ch] sm:max-w-full font-mono text-xs sm:text-sm",
                        children: "CA:"
                    }), (0,
                    e.jsx)("div", {
                        className: "text-white/80 max-w-[20ch] sm:max-w-full font-mono text-xs sm:text-sm tracking-wide truncate select-all ",
                        children: a.CA
                    }), (0,
                    e.jsx)(s.Button, {
                        variant: "ghost",
                        onClick: () => {
                            navigator.clipboard.writeText(a.CA),
                            p(!0),
                            setTimeout( () => p(!1), 2e3)
                        }
                        ,
                        className: "text-white/50 hover:text-white transition-colors shrink-0",
                        "aria-label": "Copy contract address",
                        children: h ? (0,
                        e.jsx)(l, {}) : (0,
                        e.jsx)(c, {})
                    })]
                })]
            })
        })
    }
    ], 23271)
}
, 31975, t => {
    "use strict";
    var e = t.i(43476)
      , r = t.i(71645)
      , n = t.i(89970)
      , i = t.i(83495)
      , s = t.i(57688);
    n.gsap.registerPlugin(i.ScrollTrigger);
    let a = [{
        name: "TWITTER",
        Icon: () => (0,
        e.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "w-6 h-6 lg:w-7 lg:h-7",
            children: (0,
            e.jsx)("path", {
                d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631ZM17.083 19.77h1.833L7.084 4.126H5.117Z"
            })
        }),
        href: "#"
    }, {
        name: "DISCORD",
        Icon: () => (0,
        e.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "w-6 h-6 lg:w-7 lg:h-7",
            children: (0,
            e.jsx)("path", {
                d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.082.114 18.105.134 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
            })
        }),
        href: "#"
    }, {
        name: "TELEGRAM",
        Icon: () => (0,
        e.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "w-6 h-6 lg:w-7 lg:h-7",
            children: (0,
            e.jsx)("path", {
                d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
            })
        }),
        href: "#"
    }];
    t.s(["default", 0, function() {
        let t = (0,
        r.useRef)(null)
          , o = (0,
        r.useRef)(null)
          , l = (0,
        r.useRef)(null)
          , c = (0,
        r.useRef)(null)
          , u = (0,
        r.useRef)(null)
          , f = (0,
        r.useRef)(null)
          , d = (0,
        r.useRef)(null);
        return (0,
        r.useEffect)( () => {
            let e = n.gsap.context( () => {
                n.gsap.set(o.current, {
                    opacity: 0,
                    x: -60
                }),
                n.gsap.set(l.current, {
                    opacity: 0,
                    y: 20
                }),
                n.gsap.set(u.current, {
                    opacity: 0,
                    scaleX: 0
                }),
                n.gsap.set(f.current, {
                    opacity: 0,
                    y: 30
                }),
                n.gsap.set(d.current, {
                    opacity: 0,
                    y: 30
                }),
                i.ScrollTrigger.create({
                    trigger: t.current,
                    start: "top 75%",
                    once: !0,
                    onEnter: () => {
                        n.gsap.timeline({
                            defaults: {
                                ease: "power3.out"
                            }
                        }).to(o.current, {
                            opacity: 1,
                            x: 0,
                            duration: 1
                        }).to(l.current, {
                            opacity: 1,
                            y: 0,
                            duration: .8
                        }, "-=0.4").to(c.current, {
                            opacity: 1,
                            x: 0,
                            duration: 1
                        }, "-=0.6").to(u.current, {
                            opacity: 1,
                            scaleX: 1,
                            duration: .6
                        }, "-=0.5").to(f.current, {
                            opacity: 1,
                            y: 0,
                            duration: .8
                        }, "-=0.3").to(d.current, {
                            opacity: 1,
                            y: 0,
                            duration: .8
                        }, "-=0.5")
                    }
                })
            }
            , t);
            return () => e.revert()
        }
        , []),
        (0,
        e.jsxs)("section", {
            ref: t,
            className: "relative overflow-hidden flex flex-col md:h-[85vh]",
            style: {
                backgroundImage: "url(/assets/JoinHuntBg.png)",
                backgroundSize: "cover",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat"
            },
            children: [(0,
            e.jsx)("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    background: "linear-gradient(to right, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.85) 100%)"
                }
            }), (0,
            e.jsxs)("div", {
                className: "flex justify-center items-end h-full",
                children: [(0,
                e.jsx)("div", {
                    className: "hidden md:block",
                    children: (0,
                    e.jsx)("img", {
                        src: "/assets/JoinHuntCharacter.webp",
                        alt: "Join Hunt Mascot",
                        width: 500,
                        height: 500,
                        objectFit: "contain",
                        className: "w-150"
                    })
                }), (0,
                e.jsxs)("div", {
                    className: "relative z-10 flex-1 flex flex-col container_layout",
                    children: [(0,
                    e.jsxs)("div", {
                        className: "flex-1 flex flex-col md:flex-row md:items-end gap-0",
                        children: [(0,
                        e.jsx)("div", {
                            ref: o,
                            className: "hidden xl:block flex-none md:w-[45%] lg:w-[48%]"
                        }), (0,
                        e.jsxs)("div", {
                            className: "flex-1 flex flex-col items-center md:items-start justify-end pb-6 pl-0 md:pl-10 lg:pl-16 pt-8 md:pt-0",
                            children: [(0,
                            e.jsx)("div", {
                                ref: c,
                                className: "mb-4 lg:mb-5",
                                children: (0,
                                e.jsxs)("h3", {
                                    className: "font-black uppercase leading-[0.88] w-fit",
                                    style: {
                                        fontSize: "clamp(2.8rem, 6vw, 5rem)"
                                    },
                                    children: [(0,
                                    e.jsx)("span", {
                                        className: "",
                                        children: "BE Like"
                                    }), " ", (0,
                                    e.jsx)("span", {
                                        className: "text-primary",
                                        children: "MAXI"
                                    })]
                                })
                            }), (0,
                            e.jsxs)("div", {
                                ref: u,
                                className: "mb-6 lg:mb-8 w-full max-w-md",
                                style: {
                                    transformOrigin: "left center"
                                },
                                children: [(0,
                                e.jsx)("div", {
                                    style: {
                                        height: "10px",
                                        marginBottom: "-5px",
                                        background: "linear-gradient(to right, rgba(251,134,2,0.9) 0%, rgba(251,134,2,0.5) 55%, transparent 100%)",
                                        filter: "blur(5px)"
                                    }
                                }), (0,
                                e.jsx)("div", {
                                    style: {
                                        height: "2px",
                                        background: "linear-gradient(to right, #fb8602 0%, #fb8602 55%, transparent 100%)"
                                    }
                                })]
                            }), (0,
                            e.jsx)("div", {
                                ref: f,
                                className: "flex gap-6 lg:gap-10 mb-8 lg:mb-10",
                                children: a.map( ({name: t, Icon: r, href: n}) => (0,
                                e.jsxs)("a", {
                                    href: n,
                                    className: "flex flex-col items-center gap-2 group",
                                    "aria-label": t,
                                    children: [(0,
                                    e.jsx)("div", {
                                        className: "w-12 h-12 md:w-14 md:h-14 lg:w-[68px] lg:h-[68px] rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110",
                                        style: {
                                            border: "2px solid #fb8602",
                                            background: "radial-gradient(circle at center, rgba(251,134,2,0.18) 0%, rgba(0,0,0,0.85) 100%)",
                                            boxShadow: "0 0 18px rgba(251,134,2,0.4), inset 0 0 14px rgba(251,134,2,0.08)"
                                        },
                                        children: (0,
                                        e.jsx)(r, {})
                                    }), (0,
                                    e.jsx)("span", {
                                        className: "text-white/55 tracking-[0.2em] uppercase",
                                        style: {
                                            fontSize: "10px"
                                        },
                                        children: t
                                    })]
                                }, t))
                            })]
                        })]
                    }), (0,
                    e.jsxs)("div", {
                        className: "flex items-end justify-between gap-6 ",
                        children: [(0,
                        e.jsx)("div", {
                            className: "md:hidden",
                            children: (0,
                            e.jsx)("img", {
                                src: "/assets/JoinHuntCharacter.webp",
                                alt: "Join Hunt Mascot",
                                width: 1080,
                                height: 1080,
                                objectFit: "contain",
                                className: "w-50"
                            })
                        }), (0,
                        e.jsxs)("div", {
                            ref: l,
                            className: "block md:hidden pb-4 pt-6 flex-1",
                            children: [(0,
                            e.jsx)("p", {
                                className: "text-white/80 uppercase tracking-widest font-medium leading-snug",
                                style: {
                                    fontSize: "0.7rem"
                                },
                                children: "THE APEX PREDATOR OF"
                            }), (0,
                            e.jsx)("p", {
                                className: "text-white font-black uppercase leading-tight text-xl",
                                children: "BITCOIN INTELLIGENCE"
                            })]
                        })]
                    })]
                })]
            }), (0,
            e.jsxs)("footer", {
                className: "relative z-10",
                children: [(0,
                e.jsx)("div", {
                    className: "h-px",
                    style: {
                        background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.12) 15%, rgba(255,255,255,0.12) 85%, transparent 100%)"
                    }
                }), (0,
                e.jsxs)("div", {
                    className: "hidden md:flex container_layout py-3 flex-row items-end justify-between gap-2",
                    children: [(0,
                    e.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0,
                        e.jsx)("span", {
                            className: "text-white/80 uppercase tracking-widest font-medium leading-snug",
                            style: {
                                fontSize: "clamp(0.65rem, 1.2vw, 0.85rem)"
                            },
                            children: "THE APEX PREDATOR OF"
                        }), (0,
                        e.jsx)("span", {
                            className: "text-white font-black uppercase leading-tight",
                            style: {
                                fontSize: "clamp(1.1rem, 2.2vw, 1.75rem)"
                            },
                            children: "BITCOIN INTELLIGENCE"
                        }), (0,
                        e.jsxs)("span", {
                            className: "text-white/40 tracking-wider uppercase",
                            style: {
                                fontSize: "9px"
                            },
                            children: ["@ ", new Date().getFullYear(), " $MAXI AGENT | ALL RIGHTS RESERVED."]
                        })]
                    }), (0,
                    e.jsx)("span", {
                        className: "text-white/40 tracking-wider uppercase shrink-0 text-right",
                        style: {
                            fontSize: "9px"
                        },
                        children: "TOTAL SUPPLY: 21,000,000 | NO FUD TOLERATED."
                    })]
                }), (0,
                e.jsx)("div", {
                    className: "flex md:hidden container_layout py-3 items-center justify-center",
                    children: (0,
                    e.jsx)("span", {
                        className: "text-white/40 tracking-wider uppercase text-center",
                        style: {
                            fontSize: "8px"
                        },
                        children: "© 2026 $MAXI AGENT | ALL RIGHTS RESERVED. | TOTAL SUPPLY: 21,000,000"
                    })
                })]
            })]
        })
    }
    ])
}
, 6673, t => {
    "use strict";
    var e = t.i(43476)
      , r = t.i(57688)
      , n = t.i(71645)
      , i = t.i(89970)
      , s = t.i(83495)
      , a = t.i(87634);
    i.gsap.registerPlugin(s.ScrollTrigger);
    let o = [{
        label: "PHASE 1",
        img: "/assets/Phase1.webp",
        bullets: ["Accumulate community", "Secure the network", "Establish the public $MAXI Vault", "Enable MAXI Dashboard"]
    }, {
        label: "PHASE 2",
        img: "/assets/Phase2.webp",
        bullets: ["Establish staking pools for $MAXI holders", "Deposit Staking rewards per each epoch.", "Interstellar expansion", "Supply squeeze"]
    }, {
        label: "PHASE 3",
        img: "/assets/Phase3.webp",
        bullets: ["Establish permanent colony for MAXI supremacy on mars."]
    }];
    t.s(["default", 0, function() {
        let t = (0,
        n.useRef)(null)
          , l = (0,
        n.useRef)([])
          , c = (0,
        n.useRef)(null);
        return (0,
        n.useEffect)( () => {
            let e = l.current.filter(Boolean);
            if (!t.current || 0 === e.length)
                return;
            i.gsap.set(e, {
                x: 160,
                opacity: 0
            }),
            c.current && i.gsap.set(c.current, {
                scaleX: 0,
                transformOrigin: "left center"
            });
            let r = i.gsap.matchMedia();
            return r.add("(min-width: 768px)", () => {
                let r = i.gsap.timeline();
                e.forEach( (t, e) => {
                    r.to(t, {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out"
                    }, .9 * e)
                }
                ),
                c.current && r.to(c.current, {
                    scaleX: 1,
                    duration: 2.6,
                    ease: "none"
                }, 0),
                s.ScrollTrigger.create({
                    trigger: t.current,
                    pin: !0,
                    pinSpacing: !0,
                    start: "top top",
                    end: "+=250%",
                    scrub: 1.5,
                    animation: r
                })
            }
            ),
            r.add("(max-width: 767px)", () => {
                e.forEach( (t, e) => {
                    i.gsap.to(t, {
                        x: 0,
                        opacity: 1,
                        duration: .7,
                        ease: "power3.out",
                        delay: .15 * e,
                        scrollTrigger: {
                            trigger: t,
                            start: "top 88%",
                            toggleActions: "play reverse play reverse"
                        }
                    })
                }
                ),
                c.current && i.gsap.to(c.current, {
                    scaleX: 1,
                    duration: 1.2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: t.current,
                        start: "top 70%",
                        toggleActions: "play reverse play reverse"
                    }
                })
            }
            ),
            () => r.revert()
        }
        , []),
        (0,
        e.jsxs)(e.Fragment, {
            children: [(0,
            e.jsxs)("section", {
                ref: t,
                id: "roadmap",
                className: "relative w-full min-h-screen flex flex-col justify-center overflow-hidden py-16 lg:py-20",
                children: [(0,
                e.jsx)("div", {
                    className: "container_layout mb-12 lg:mb-16 text-center",
                    children: (0,
                    e.jsxs)("h2", {
                        className: "font-black leading-none inline-flex flex-wrap items-center justify-center gap-x-3",
                        style: {
                            fontSize: "clamp(2.5rem, 4vw, 4rem)",
                            letterSpacing: "-0.02em"
                        },
                        children: [(0,
                        e.jsx)("span", {
                            className: "text-primary",
                            style: {
                                textShadow: "0 0 40px rgba(251,134,2,0.55)"
                            },
                            children: "ROADMAP"
                        }), (0,
                        e.jsx)("span", {
                            className: "text-white",
                            children: "- EARTH TO MARS"
                        })]
                    })
                }), (0,
                e.jsx)("div", {
                    className: "container_layout grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8",
                    children: o.map( (t, n) => (0,
                    e.jsxs)("div", {
                        ref: t => {
                            l.current[n] = t
                        }
                        ,
                        className: "flex flex-col items-center gap-4 h-full",
                        children: [(0,
                        e.jsx)("span", {
                            className: "font-semibold text-white tracking-[0.2em] uppercase",
                            style: {
                                fontSize: "clamp(1rem, 2vw, 1.5rem)"
                            },
                            children: t.label
                        }), (0,
                        e.jsxs)("div", {
                            className: "w-full flex flex-col flex-1 rounded-2xl overflow-hidden",
                            style: {
                                background: "#0a0a0a",
                                border: "2px solid rgba(251,134,2,0.7)",
                                boxShadow: "rgba(251, 134, 2, 0.12) 0px 0px 10px 0px, rgb(251 134 2) 0px 0px 20px 0px, rgba(251, 134, 2, 0.18) 0px 0px 60px 10px"
                            },
                            children: [(0,
                            e.jsx)("div", {
                                className: "relative w-full aspect-4/3 overflow-hidden",
                                style: {
                                    borderBottom: "2px solid rgba(251,134,2,0.7)",
                                    boxShadow: "rgba(251, 134, 2, 0.12) 0px 0px 10px 0px, rgb(251 134 2) 0px 0px 20px 0px, rgba(251, 134, 2, 0.18) 0px 0px 60px 10px"
                                },
                                children: (0,
                                e.jsx)("img", {
                                    src: t.img,
                                    alt: t.label,
                                    fill: !0,
                                    className: "object-cover",
                                    sizes: "(max-width: 768px) 100vw, 33vw"
                                })
                            }), (0,
                            e.jsx)("ul", {
                                className: "px-5 py-6 flex flex-col items-center justify-center gap-2 flex-1",
                                children: t.bullets.map( (t, r) => (0,
                                e.jsxs)("li", {
                                    className: "flex items-start gap-2.5 text-white/85 text-xs leading-relaxed",
                                    children: [(0,
                                    e.jsx)("span", {
                                        className: "mt-[0.38rem] shrink-0 w-1.5 h-1.5 rounded-full bg-brand-500"
                                    }), t]
                                }, r))
                            })]
                        })]
                    }, t.label))
                }), (0,
                e.jsx)("div", {
                    className: "container_layout mt-10 lg:mt-14 hidden md:block",
                    children: (0,
                    e.jsxs)("div", {
                        className: "relative",
                        style: {
                            height: "60px"
                        },
                        children: [(0,
                        e.jsx)("span", {
                            className: "absolute font-black text-white text-xs tracking-widest z-20",
                            style: {
                                left: 30,
                                top: "0px"
                            },
                            children: "EARTH"
                        }), (0,
                        e.jsx)("span", {
                            className: "absolute font-black text-white text-xs tracking-widest z-20",
                            style: {
                                right: 30,
                                top: "0px"
                            },
                            children: "MARS"
                        }), (0,
                        e.jsx)("div", {
                            className: "absolute rounded-full",
                            style: {
                                left: "3.5rem",
                                right: "3.5rem",
                                bottom: "18px",
                                height: "10px",
                                background: "rgba(30,15,0,0.75)",
                                border: "1px solid rgba(251,134,2,0.25)"
                            }
                        }), (0,
                        e.jsx)("div", {
                            ref: c,
                            className: "absolute rounded-full",
                            style: {
                                left: "3.5rem",
                                right: "3.5rem",
                                bottom: "18px",
                                height: "10px",
                                transformOrigin: "left center",
                                background: "linear-gradient(to bottom, #ffe566 0%, #ffaa00 35%, #e07000 100%)",
                                boxShadow: "0 0 14px rgba(251,134,2,0.9), 0 0 4px rgba(255,180,0,0.5)"
                            }
                        }), (0,
                        e.jsx)("div", {
                            className: "absolute z-20 rounded-full",
                            style: {
                                left: "3.5rem",
                                bottom: "13px",
                                width: "20px",
                                height: "20px",
                                transform: "translateX(-50%)",
                                background: "radial-gradient(circle at 38% 32%, #fff0a0, #ffaa00 50%, #a85000)",
                                boxShadow: "0 0 12px rgba(251,134,2,1), 0 0 3px rgba(0,0,0,0.5)"
                            }
                        }), (0,
                        e.jsx)("div", {
                            className: "absolute z-20 rounded-full",
                            style: {
                                right: "3.5rem",
                                bottom: "13px",
                                width: "20px",
                                height: "20px",
                                transform: "translateX(50%)",
                                background: "radial-gradient(circle at 38% 32%, #fff0a0, #ffaa00 50%, #a85000)",
                                boxShadow: "0 0 12px rgba(251,134,2,1), 0 0 3px rgba(0,0,0,0.5)"
                            }
                        })]
                    })
                })]
            }), (0,
            e.jsx)("div", {
                className: "relative z-10",
                children: (0,
                e.jsx)(a.default, {})
            })]
        })
    }
    ])
}
]);
