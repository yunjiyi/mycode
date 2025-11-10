( () => {
    var e = {
        53: e => {
            !function() {
                const t = e => (new TextEncoder).encode(e);
                function n(e, n) {
                    let o, a, i, r, s, c, l, d;
                    for ("string" == typeof e && (e = t(e)),
                    o = 3 & e.length,
                    a = e.length - o,
                    i = n,
                    s = 3432918353,
                    c = 461845907,
                    d = 0; d < a; )
                        l = 255 & e[d] | (255 & e[++d]) << 8 | (255 & e[++d]) << 16 | (255 & e[++d]) << 24,
                        ++d,
                        l = (65535 & l) * s + (((l >>> 16) * s & 65535) << 16) & 4294967295,
                        l = l << 15 | l >>> 17,
                        l = (65535 & l) * c + (((l >>> 16) * c & 65535) << 16) & 4294967295,
                        i ^= l,
                        i = i << 13 | i >>> 19,
                        r = 5 * (65535 & i) + ((5 * (i >>> 16) & 65535) << 16) & 4294967295,
                        i = 27492 + (65535 & r) + ((58964 + (r >>> 16) & 65535) << 16);
                    switch (l = 0,
                    o) {
                    case 3:
                        l ^= (255 & e[d + 2]) << 16;
                    case 2:
                        l ^= (255 & e[d + 1]) << 8;
                    case 1:
                        l ^= 255 & e[d],
                        l = (65535 & l) * s + (((l >>> 16) * s & 65535) << 16) & 4294967295,
                        l = l << 15 | l >>> 17,
                        l = (65535 & l) * c + (((l >>> 16) * c & 65535) << 16) & 4294967295,
                        i ^= l
                    }
                    return i ^= e.length,
                    i ^= i >>> 16,
                    i = 2246822507 * (65535 & i) + ((2246822507 * (i >>> 16) & 65535) << 16) & 4294967295,
                    i ^= i >>> 13,
                    i = 3266489909 * (65535 & i) + ((3266489909 * (i >>> 16) & 65535) << 16) & 4294967295,
                    i ^= i >>> 16,
                    i >>> 0
                }
                const o = n;
                o.v2 = function(e, n) {
                    "string" == typeof e && (e = t(e));
                    let o, a = e.length, i = n ^ a, r = 0;
                    for (; a >= 4; )
                        o = 255 & e[r] | (255 & e[++r]) << 8 | (255 & e[++r]) << 16 | (255 & e[++r]) << 24,
                        o = 1540483477 * (65535 & o) + ((1540483477 * (o >>> 16) & 65535) << 16),
                        o ^= o >>> 24,
                        o = 1540483477 * (65535 & o) + ((1540483477 * (o >>> 16) & 65535) << 16),
                        i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16) ^ o,
                        a -= 4,
                        ++r;
                    switch (a) {
                    case 3:
                        i ^= (255 & e[r + 2]) << 16;
                    case 2:
                        i ^= (255 & e[r + 1]) << 8;
                    case 1:
                        i ^= 255 & e[r],
                        i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16)
                    }
                    return i ^= i >>> 13,
                    i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16),
                    i ^= i >>> 15,
                    i >>> 0
                }
                ,
                o.v3 = n,
                e.exports = o
            }()
        }
        ,
        861: (e, t, n) => {
            "use strict";
            n.r(t),
            n.d(t, {
                invalidURLTest: () => r
            });
            const {round2: o, now: a} = n(162);
            function i(e, t=5) {
                return new Promise((n => {
                    let o = [];
                    for (let i = 0; i < t; i++) {
                        let r = a()
                          , s = e + (44435 + i) + "/" + Date.now() + ".png";
                        fetch(s).then((e => {}
                        )).catch((e => {
                            let i = a() - r;
                            o.push(parseFloat(i.toFixed(3))),
                            o.length === t && n(o)
                        }
                        ))
                    }
                }
                ))
            }
            async function r(e) {
                let t = a()
                  , n = {
                    "0.0.0.0": [],
                    "127.0.0.1": [],
                    "167.99.241.135": [],
                    perf: null
                }
                  , r = {
                    "0.0.0.0": "https://0.0.0.0:",
                    "127.0.0.1": "https://127.0.0.1:",
                    "167.99.241.135": "https://167.99.241.135:"
                };
                var s = [];
                for (let t in r)
                    s.push(i(r[t], e.invalidURLTestSamples).then((e => {
                        n[t] = e
                    }
                    )));
                return await Promise.all(s),
                n.perf = o(a() - t),
                n
            }
        }
        ,
        432: (e, t, n) => {
            "use strict";
            n.r(t),
            n.d(t, {
                getLatencyWebSocket: () => r,
                getWsLatencies: () => s,
                measureImageLatency: () => l
            });
            const {round2: o, now: a} = n(162)
              , i = 5e3;
            function r(e) {
                const t = a()
                  , n = (e.config.wsPorts || []).map((t => s(e.config.wsEndpoint, t, e.config.latencyMeasurements, e.config.uuid, e.config.wsSocketTimeout || i)));
                return 0 === n.length ? Promise.resolve({
                    perf: o(a() - t),
                    latency_method: "ws"
                }) : Promise.all(n).then(( () => ({
                    perf: o(a() - t),
                    latency_method: "ws"
                }))).catch(( () => ({
                    perf: o(a() - t),
                    latency_method: "ws",
                    error: !0
                })))
            }
            function s(e, t, n, o, a=i) {
                return new Promise((i => {
                    let r = null
                      , s = null
                      , c = !1
                      , l = 0;
                    const d = e => {
                        if (!c) {
                            if (c = !0,
                            s && (window.clearTimeout(s),
                            s = null),
                            r && r.readyState === WebSocket.OPEN)
                                try {
                                    r.close()
                                } catch (e) {}
                            i(e)
                        }
                    }
                    ;
                    try {
                        r = new WebSocket(`${e}${t}`),
                        s = window.setTimeout(( () => d(!1)), a),
                        r.onerror = () => d(!1),
                        r.onclose = () => d(!0),
                        r.onopen = () => {
                            if (n <= 0)
                                d(!0);
                            else
                                try {
                                    r.send(JSON.stringify({
                                        uuid: o
                                    }))
                                } catch (e) {
                                    d(!1)
                                }
                        }
                        ,
                        r.onmessage = () => {
                            if (l += 1,
                            l > n)
                                d(!0);
                            else
                                try {
                                    r.send(JSON.stringify({
                                        uuid: o
                                    }))
                                } catch (e) {
                                    d(!1)
                                }
                        }
                    } catch (e) {
                        d(!1)
                    }
                }
                ))
            }
            function c(e, t) {
                return new Promise((n => {
                    const a = Math.random().toString(36).replace("0.", "")
                      , i = new Image
                      , r = Date.now();
                    let s = !1;
                    "decoding"in i && (i.decoding = "async"),
                    "referrerPolicy"in i && (i.referrerPolicy = "no-referrer");
                    const c = () => {
                        s || (s = !0,
                        i.onload = null,
                        i.onerror = null,
                        n(o(Date.now() - r)))
                    }
                    ;
                    i.onload = c,
                    i.onerror = c,
                    i.src = `${t.config.endpoint}/images/small.png?n=${e}&r=${a}`
                }
                ))
            }
            function l(e) {
                const t = Math.max(0, e.config.imagesToLoad || 0)
                  , n = Math.max(0, e.config.imageLatencyDelay || 0);
                if (0 === t)
                    return Promise.resolve([]);
                const o = () => {
                    const n = [];
                    for (let o = 0; o <= t; o++)
                        n.push(c(o, e));
                    return Promise.all(n)
                }
                ;
                return 0 === n ? o() : new Promise((e => {
                    window.setTimeout(( () => {
                        o().then(e)
                    }
                    ), n)
                }
                ))
            }
        }
        ,
        372: (e, t, n) => {
            "use strict";
            n.r(t),
            n.d(t, {
                scanCommonPorts: () => s
            });
            const {round2: o, now: a} = n(162);
            var i = [];
            const r = function(e, t) {
                return new Promise((n => {
                    var o = 13;
                    ["localhost", "127.0.0.1"].includes(e.trim()) || (o = 5);
                    var r = function(t) {
                        return new Promise((n => {
                            var o = a()
                              , i = Math.random().toString().replace("0.", "").slice(0, 7)
                              , r = new Image;
                            "decoding"in r && (r.decoding = "async");
                            var s = function() {
                                var e = a() - o;
                                r.onerror = null,
                                r.onload = null,
                                n(parseFloat(e.toFixed(3)))
                            };
                            r.onerror = s,
                            r.onload = s,
                            r.src = "https://" + e + ":" + t + "/" + i + ".png"
                        }
                        ))
                    };
                    (async () => {
                        var e = [];
                        if (i.length != o)
                            for (var a = 0; a < o; a++)
                                i.push(await r(37857));
                        for (a = 0; a < o; a++)
                            if (e.push(await r(t)),
                            e.length > 3 && e[0] > 1e3 && e[1] > 1e3 && e[2] > 1e3 && e[3] > 1e3) {
                                for (var s = a; s < o; s++)
                                    e.push(e[0]);
                                break
                            }
                        n({
                            test_timings: e
                        })
                    }
                    )()
                }
                ))
            };
            async function s() {
                let e = a();
                var t = {};
                for (var n of ["80", "443", "8080", "9222", "9050", "8888", "1080", "3128"])
                    t[n] = await r("localhost", n);
                return t.timings_closed = i,
                t.perf = o(a() - e),
                t
            }
        }
        ,
        611: (e, t, n) => {
            "use strict";
            function o() {
                return new Promise((async e => {
                    const t = /\((khtml|unlike|vizio|like gec|internal dummy|org\.eclipse|openssl|ipv6|via translate|safari|cardamon).+|xt\d+\)/gi
                      , n = /\((.+)\)/
                      , o = /((android).+)/i
                      , a = /^(linux|[a-z]|wv|mobile|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|windows|(rv:|trident|webview|iemobile).+/i
                      , i = /build\/.+\s|\sbuild\/.+/i
                      , r = /android( |-)\d+/i
                      , s = /((windows).+)/i
                      , c = /^(windows|ms(-|)office|microsoft|compatible|[a-z]|x64|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|outlook|ms(-|)office|microsoft|trident|\.net|msie|httrack|media center|infopath|aol|opera|iemobile|webbrowser).+/i
                      , l = /w(ow|in)64/i
                      , d = /cros/i
                      , u = /^([a-z]|x11|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|trident).+/i
                      , g = /\d+\.\d+\.\d+/i
                      , m = /linux|x11|ubuntu|debian/i
                      , f = /^([a-z]|x11|unknown|compatible|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|java|oracle|\+http|http|unknown|mozilla|konqueror|valve).+/i
                      , p = /(cpu iphone|cpu os|iphone os|mac os|macos|intel os|ppc mac).+/i
                      , w = /^([a-z]|macintosh|compatible|mimic|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2}|rv|\d+\.\d+)$|(rv:|silk|valve).+/i
                      , h = /(ppc |intel |)(mac|mac |)os (x |x|)(\d{2}(_|\.)\d{1,2}|\d{2,})/i
                      , v = /((symbianos|nokia|blackberry|morphos|mac).+)|\/linux|freebsd|symbos|series \d+|win\d+|unix|hp-ux|bsdi|bsd|x86_64/i
                      , y = (e, t) => e.filter((e => t.test(e))).length
                      , b = e => {
                        try {
                            const t = e ? e.getExtension("WEBGL_debug_renderer_info") : null;
                            if (!t)
                                return;
                            return e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                        } catch (e) {
                            return
                        }
                    }
                      , {userAgent: T, platform: S, hardwareConcurrency: C, deviceMemory: D, maxTouchPoints: P} = navigator
                      , k = ( ({userAgent: e, excludeBuild: b=!0}) => {
                        if (!e)
                            return;
                        const {platformLie: T, touchLie: S, core: C} = ( () => {
                            const {userAgent: e, platform: t, maxTouchPoints: n} = navigator
                              , o = /win(dows|16|32|64|95|98|nt)|wow64/gi.test(e) ? "Windows" : /android|linux|cros/gi.test(e) ? "Linux" : /i(os|p(ad|hone|od))/gi.test(e) ? "iOS" : /mac/gi.test(e) ? "Mac" : "Other"
                              , a = /win/gi.test(t) ? "Windows" : /android|arm|linux/i.test(t) ? "Linux" : /i(os|p(ad|hone|od))/gi.test(t) ? "iOS" : /mac/i.test(t) ? "Mac" : "Other"
                              , i = /w(in|ow)64/gi.test(e) && /win16/gi.test(t) || /win(16|32)/gi.test(e) && !/win(16|32)/gi.test(t);
                            return {
                                core: o,
                                platformLie: o != a || i,
                                touchLie: !!n && (/NT\s(6.0|5.(0|1|2)|4.0)/gi.test(e) || /mac/gi.test(e) && !/like mac/gi.test(e) || /mac|win16/gi.test(t))
                            }
                        }
                        )()
                          , D = {
                            core: C,
                            platformLie: T,
                            touchLie: S,
                            trimmed: e.trim().replace(/\s{2,}/, " ")
                        };
                        if (D.compressed = D.trimmed.replace(t, "").trim(),
                        n.test(D.compressed)) {
                            if (D.platform = D.compressed.match(n)[0],
                            D.identifiers = D.platform.slice(1, -1).replace(/,/g, ";").split(";").map((e => e.trim())),
                            y(D.identifiers, o))
                                return D.parsed = D.identifiers.map((e => r.test(e) ? r.exec(e)[0].replace("-", " ") : e)).filter((e => !a.test(e))).join(" ").replace(b ? i : "", "").trim().replace(/\s{2,}/, " "),
                                D;
                            if (y(D.identifiers, s))
                                return D.parsed = D.identifiers.filter((e => !c.test(e))).join(" ").replace(/\sNT (\d+\.\d+)/, ( (e, t) => "10.0" == t ? " 10" : "6.3" == t ? " 8.1" : "6.2" == t ? " 8" : "6.1" == t ? " 7" : "6.0" == t ? " Vista" : "5.2" == t ? " XP Pro" : "5.1" == t ? " XP" : "5.0" == t ? " 2000" : "4.0" == t ? e : " " + t)).replace(l, "(64-bit)").trim().replace(/\s{2,}/, " "),
                                D;
                            if (y(D.identifiers, d))
                                return D.parsed = D.identifiers.filter((e => !u.test(e))).join(" ").replace(b ? g : "", "").trim().replace(/\s{2,}/, " "),
                                D;
                            if (y(D.identifiers, m))
                                return D.parsed = D.identifiers.filter((e => !f.test(e))).join(" ").trim().replace(/\s{2,}/, " "),
                                D;
                            if (y(D.identifiers, p))
                                return D.parsed = D.identifiers.map((e => {
                                    if (h.test(e)) {
                                        const t = h.exec(e)[0]
                                          , n = {
                                            "10_7": "Lion",
                                            "10_8": "Mountain Lion",
                                            "10_9": "Mavericks",
                                            "10_10": "Yosemite",
                                            "10_11": "El Capitan",
                                            "10_12": "Sierra",
                                            "10_13": "High Sierra",
                                            "10_14": "Mojave",
                                            "10_15": "Catalina",
                                            11: "Big Sur",
                                            12: "Monterey"
                                        }
                                          , o = ((/(\d{2}(_|\.)\d{1,2}|\d{2,})/.exec(t) || [])[0] || "").replace(/\./g, "_")
                                          , a = n[/^10/.test(o) ? o : (/^\d{2,}/.exec(o) || [])[0]];
                                        return a ? `macOS ${a}` : t
                                    }
                                    return e
                                }
                                )).filter((e => !w.test(e))).join(" ").replace(/\slike mac.+/gi, "").trim().replace(/\s{2,}/, " "),
                                D;
                            {
                                const e = D.identifiers.filter((e => v.test(e)));
                                return e.length ? (D.parsed = e.join(" ").trim().replace(/\s{2,}/, " "),
                                D) : (D.parsed = D.identifiers.join(" "),
                                D)
                            }
                        }
                    }
                    )({
                        userAgent: T,
                        excludeBuild: !0
                    }) || {}
                      , x = ( () => {
                        const {userAgent: e} = navigator;
                        if (e)
                            return /windows phone/gi.test(e) ? "Windows Phone" : /win(dows|16|32|64|95|98|nt)|wow64/gi.test(e) ? "Windows" : /android/gi.test(e) ? "Android" : /cros/gi.test(e) ? "Chrome OS" : /linux/gi.test(e) ? "Linux" : /ipad/gi.test(e) ? "iPad" : /iphone/gi.test(e) ? "iPhone" : /ipod/gi.test(e) ? "iPod" : /ios/gi.test(e) ? "iOS" : /mac/gi.test(e) ? "Mac" : "Other"
                    }
                    )()
                      , L = await new Promise((async e => {
                        try {
                            if (!("speechSynthesis"in window))
                                return e();
                            let t = !1;
                            const n = () => {
                                const n = speechSynthesis.getVoices();
                                if (!n.length)
                                    return;
                                t = !0;
                                const o = n.map(( ({name: e, lang: t}) => ({
                                    name: e,
                                    lang: t
                                })));
                                return e(o.find((e => /lekha/i.test(e.name))) ? "Mac" : o.find((e => /microsoft/i.test(e.name))) ? "Windows" : o.find((e => /chrome os/i.test(e.name))) ? "Chrome OS" : o.find((e => /android/i.test(e.name))) ? "Android" : void 0)
                            }
                            ;
                            n(),
                            speechSynthesis.onvoiceschanged = n,
                            setTimeout(( () => t ? void 0 : e()), 100)
                        } catch (t) {
                            return e()
                        }
                    }
                    ))
                      , M = L && (/Mac|iOS/.test(k.core) && "Mac" != L || !/Mac|iOS/.test(k.core) && L != x)
                      , R = (e, t, n=8) => e > n && t && /Windows Phone|Android/.test(t)
                      , _ = R(D, x)
                      , O = R(C, x)
                      , B = "iOS" == k.core && void 0 !== D
                      , E = ( () => {
                        let e, t;
                        "OffscreenCanvas"in window && (e = new OffscreenCanvas(256,256),
                        t = new OffscreenCanvas(256,256));
                        const n = document.createElement("canvas")
                          , o = document.createElement("canvas")
                          , a = (e, t) => {
                            try {
                                return "webgl2" == t ? e.getContext("webgl2") || e.getContext("experimental-webgl2") : e.getContext("webgl") || e.getContext("experimental-webgl") || e.getContext("moz-webgl") || e.getContext("webkit-3d")
                            } catch (e) {
                                return "blocked"
                            }
                        }
                          , i = new Set([b(a(e, "webgl")), b(a(t, "webgl2")), b(a(n, "webgl")), b(a(o, "webgl2"))]);
                        return i.delete(void 0),
                        [...i]
                    }
                    )()
                      , z = E.length > 1
                      , $ = "" + E[0]
                      , N = !z && "iOS" == k.core && !/apple/i.test($) && !/gpu/i.test($)
                      , A = {
                        ua_identifiers: [!k.identifiers || !k.identifiers.length, k.identifiers],
                        core: [!k.core, k.core],
                        system: [!x, x],
                        device: [!k.parsed, k.parsed],
                        platform: [k.platformLie, S],
                        speechSynthesis: [M, L],
                        deviceMemory: [D < 1 || _ || B, D],
                        hardwareConcurrency: [C < 1 || O, C],
                        gpu: [z || N, z ? E : E[0] || "undefined"]
                    };
                    e(Object.fromEntries(Object.entries(A).map((e => {
                        const t = 1 == e[1][0];
                        return [e[0], t ? e[1][1] : t]
                    }
                    ))))
                }
                ))
            }
            n.r(t),
            n.d(t, {
                getMachineDetails: () => o
            })
        }
        ,
        65: (e, t, n) => {
            "use strict";
            n.r(t),
            n.d(t, {
                canLoadScriptFromUncommonPort: () => s,
                dnsResolving: () => r
            });
            const {now: o, round2: a, random: i} = n(162);
            function r(e) {
                return new Promise((t => {
                    const n = o()
                      , r = `https://k56sj76s${Date.now().toString().slice(-5)}k3ds.com?b=${i()}`;
                    let s = !1;
                    const c = e => {
                        s || (s = !0,
                        clearTimeout(l),
                        t(e))
                    }
                    ;
                    fetch(r).then(( () => c({
                        res: 1,
                        perf: a(o() - n)
                    }))).catch(( () => c({
                        res: 0,
                        perf: a(o() - n)
                    })));
                    const l = window.setTimeout(( () => {
                        c({
                            res: -1,
                            perf: a(o() - n)
                        })
                    }
                    ), e.config.maxNetTestsTimeout)
                }
                ))
            }
            function s(e) {
                return new Promise((t => {
                    const n = o()
                      , i = {
                        res: 0,
                        perf: null
                    }
                      , r = document.createElement("script");
                    let s = !1;
                    const c = () => {
                        s || (s = !0,
                        clearTimeout(l),
                        r.parentNode && r.parentNode.removeChild(r),
                        i.perf = a(o() - n),
                        t(i))
                    }
                    ;
                    r.setAttribute("src", e.config.canLoadJsUrl),
                    r.async = !0,
                    r.onload = () => {
                        const e = document.getElementById("q7a3bil64v7ba2x");
                        e && (i.res = 1,
                        e.parentNode && e.parentNode.removeChild(e)),
                        c()
                    }
                    ,
                    r.onerror = c,
                    (document.head || document.getElementsByTagName("head")[0] || document.documentElement).appendChild(r);
                    const l = window.setTimeout(c, e.config.maxNetTestsTimeout)
                }
                ))
            }
        }
        ,
        119: (e, t, n) => {
            "use strict";
            function o() {
                let e = new Date
                  , t = null;
                try {
                    t = Intl.DateTimeFormat().resolvedOptions().timeZone
                } catch (e) {}
                return {
                    timestamp: e.getTime(),
                    time_str: e.toString(),
                    time_zone: t
                }
            }
            function a() {
                return new Promise((e => {
                    const t = (e, t=1) => 2 == t ? (e / 1e3).toFixed(3).slice(2, 5) : (e / 100).toFixed(2).slice(2, 4)
                      , {timeZone: n} = Intl.DateTimeFormat().resolvedOptions()
                      , o = ( ({year: e, city: t}) => {
                        const n = {
                            timeZone: t,
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        }
                          , o = new Intl.DateTimeFormat("en",n);
                        return +new Date(o.format(new Date(`7/1/${e}`)))
                    }
                    )({
                        year: 1113,
                        city: n
                    })
                      , a = +new Date(new Date("7/1/1113"))
                      , i = ("" + new Date).replace(/.*\(|\).*/g, "")
                      , r = (0,
                    23,
                    0 + ~~(24 * Math.random()));
                    const {methods: s, stringify: c, toJSON: l, toISOString: d} = ( () => {
                        const e = new Date
                          , n = e.getUTCFullYear()
                          , o = e.getUTCMonth() + 1
                          , a = e.getUTCDate()
                          , i = e.getUTCHours()
                          , r = e.getUTCMinutes()
                          , s = e.getUTCSeconds()
                          , c = e.getUTCMilliseconds();
                        return {
                            methods: `${n}-${t(o)}-${t(a)}T${t(i)}:${t(r)}:${t(s)}.${t(c, 2)}Z`,
                            stringify: JSON.stringify(e).slice(1, -1),
                            toISOString: e.toISOString(),
                            toJSON: e.toJSON()
                        }
                    }
                    )()
                      , {now: u, dateValue: g, valueOf: m, getTime: f} = ( () => {
                        const e = new Date;
                        return {
                            now: Date.now(),
                            dateValue: +e,
                            valueOf: e.getTime(),
                            getTime: e.valueOf()
                        }
                    }
                    )()
                      , p = new Date
                      , w = new Date("07/01/1970")
                      , h = ( () => {
                        const [e,t,n] = JSON.stringify(new Date).slice(1, 11).split("-")
                          , o = `${t}/${n}/${e}`
                          , a = `${e}-${t}-${n}`;
                        return {
                            computed: ~~(+(+new Date(o) - +new Date(a)) / 6e4),
                            key: ~~new Date(o).getTimezoneOffset()
                        }
                    }
                    )()
                      , v = "" + p.getHours()
                      , y = `${v > 12 ? v - 12 : v}:${"" + t(p.getMinutes())}:${"" + t(p.getSeconds())} ${v < 12 ? "AM" : "PM"}`;
                    p.setHours(r),
                    p.setMinutes(r),
                    p.setSeconds(r),
                    e({
                        valid: {
                            time: p.getHours() == r && p.getMinutes() == r && p.getSeconds() == r,
                            clock: 0 == w.getHours() && 0 == w.getMinutes() && 0 == w.getSeconds() && 0 == w.getMilliseconds(),
                            date: /^function Date\(\) {(\n    | )\[native code\](\n| )}$/.test(Date + "") && 7 == Date.length && "Date" == Date.name && new Date == Date() && "" + new Date(Date.parse(new Date)) == "" + new Date,
                            invalidDate: /^Invalid Date$/.test(new Date(1e25)),
                            offset: ( () => {
                                try {
                                    return new Date.prototype.getTimezoneOffset,
                                    !1
                                } catch (e) {
                                    const {name: t, message: n} = e;
                                    return !("TypeError" != t || !/not a constructor/.test(n) || !/^function getTimezoneOffset\(\) {(\n    | )\[native code\](\n| )}$/.test(Date.prototype.getTimezoneOffset + ""))
                                }
                            }
                            )(),
                            matchingOffset: h.key == h.computed,
                            nowTime: g == f && g == u && g == m,
                            utcTime: s == c && s == l && s == d
                        },
                        date: `${new Date}`,
                        time: y,
                        zone: i,
                        reported_offset: h.key,
                        computed_offset: h.computed,
                        reported_location: n,
                        resolvedOptionsEpoch: o,
                        systemEpoch: a
                    })
                }
                ))
            }
            n.r(t),
            n.d(t, {
                getTimezoneDetails: () => a,
                timezoneTest: () => o
            })
        }
        ,
        162: (e, t, n) => {
            "use strict";
            function o() {
                return Math.random().toString().replace("0.", "")
            }
            function a() {
                return "performance"in window ? i(performance.now()) : Date.now()
            }
            function i(e) {
                return null === e ? null : +(Math.round(e + "e+2") + "e-2")
            }
            function r(e, t) {
                const n = Math.pow(10, t);
                return Math.round(e * n) / n
            }
            function s(e) {
                if (0 === e.length)
                    return 0;
                e.sort((function(e, t) {
                    return e - t
                }
                ));
                var t = Math.floor(e.length / 2);
                return e.length % 2 ? e[t] : (e[t - 1] + e[t]) / 2
            }
            function c(e) {
                return Array.isArray(e) && 0 !== e.length ? e.reduce(( (e, t) => e + t)) / e.length : 0
            }
            function l(e) {
                if (!e || 0 === e.length)
                    return 0;
                const t = e.length
                  , n = e.reduce(( (e, t) => e + t)) / t;
                return Math.sqrt(e.map((e => Math.pow(e - n, 2))).reduce(( (e, t) => e + t)) / t)
            }
            n.r(t),
            n.d(t, {
                getStandardDeviation: () => l,
                mean: () => c,
                median: () => s,
                now: () => a,
                random: () => o,
                round: () => r,
                round2: () => i
            })
        }
        ,
        829: (e, t, n) => {
            "use strict";
            n.r(t),
            n.d(t, {
                getWebRTC: () => r,
                webrtcTest: () => i
            });
            const {now: o, round: a} = n(162);
            function i(e) {
                return new Promise((function(t) {
                    const n = o();
                    let i = {
                        cands: []
                    }
                      , r = !1
                      , s = new (window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection)({
                        iceServers: [{
                            urls: e.config.stunServer
                        }]
                    },{
                        optional: [{
                            RtpDataChannels: !0
                        }]
                    })
                      , c = function() {};
                    function l(c) {
                        if (!r) {
                            if (r = !0,
                            i.finishEvent = c,
                            i.elapsed = a(o() - n, 2),
                            e.config.collectWebRTCMeta) {
                                try {
                                    i.sdp = s.localDescription.sdp
                                } catch (e) {}
                                try {
                                    i.signalingState = s.signalingState
                                } catch (e) {}
                                try {
                                    i.connectionState = s.connectionState
                                } catch (e) {}
                                try {
                                    i.iceGatheringState = s.iceGatheringState
                                } catch (e) {}
                                try {
                                    i.canTrickleIceCandidates = s.canTrickleIceCandidates
                                } catch (e) {}
                            }
                            e.config.collectWebRTCStats && s.getStats ? s.getStats().then((e => {
                                i.stats = [];
                                for (let t of e)
                                    i.stats.push(t)
                            }
                            )).finally(( () => {
                                i.elapsed2 = a(o() - n, 2),
                                t(i)
                            }
                            )) : t(i)
                        }
                    }
                    s.createDataChannel(""),
                    s.createOffer((function(e) {
                        s.setLocalDescription(e, c, c)
                    }
                    ), c),
                    s.onicecandidate = function(e) {
                        e.candidate && e.candidate.candidate && i.cands.push(e.candidate.candidate)
                    }
                    ,
                    s.onicecandidateerror = function(e) {
                        try {
                            i.error = {
                                address: e.address,
                                errorCode: e.errorCode,
                                errorText: e.errorText,
                                port: e.port,
                                url: e.url
                            }
                        } catch (e) {}
                    }
                    ,
                    s.onicegatheringstatechange = function(e) {
                        switch (e.target.iceGatheringState) {
                        case "gathering":
                            break;
                        case "complete":
                            l("complete")
                        }
                    }
                    ,
                    setTimeout((function() {
                        l(`timeout: ${e.config.webRTCTimeout}`)
                    }
                    ), e.config.webRTCTimeout)
                }
                ))
            }
            const r = e => new Promise((t => {
                const n = o();
                let i = {
                    ips: [],
                    finishEvent: ""
                }
                  , r = !1;
                const s = e => {
                    r || (r = !0,
                    clearTimeout(c),
                    t(e))
                }
                  , c = setTimeout((function() {
                    i.finishEvent = `timeout: ${e.config.webRTCTimeout}`,
                    i.elapsed = a(o() - n, 2),
                    s(i)
                }
                ), e.config.webRTCTimeout);
                if (navigator.getUserMedia) {
                    const e = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
                    let t = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
                    if (!t) {
                        const e = document.createElement("iframe");
                        document.body.appendChild(e),
                        e.style.display = "none";
                        const n = e.contentWindow;
                        t = n.RTCPeerConnection || n.mozRTCPeerConnection || n.webkitRTCPeerConnection
                    }
                    const r = new t({
                        iceServers: [{
                            urls: "stun:stun.l.google.com:19302"
                        }]
                    },{
                        optional: [{
                            RtpDataChannels: !0
                        }]
                    });
                    let c = [];
                    r.onicecandidate = t => {
                        if (t.candidate) {
                            const n = e.exec(t.candidate.candidate);
                            null !== n && n.length > 1 && c.push(n[1])
                        }
                    }
                    ,
                    r.createDataChannel(""),
                    r.createOffer((e => {
                        r.setLocalDescription(e, ( () => {}
                        ), ( () => {}
                        ))
                    }
                    ), ( () => {}
                    ));
                    const l = async () => {
                        r.localDescription ? (r.localDescription.sdp.split("\n").forEach((t => {
                            if (0 === t.indexOf("a=candidate:")) {
                                const n = e.exec(t);
                                null !== n && n.length > 1 && c.push(n[1])
                            }
                        }
                        )),
                        c = [...new Set(c)],
                        i.ips = c,
                        i.finishEvent = "complete",
                        i.elapsed = a(o() - n, 2),
                        s(i)) : setTimeout(l, 250)
                    }
                    ;
                    l()
                } else
                    i.finishEvent = "notSupported",
                    i.elapsed = a(o() - n, 2),
                    s(i)
            }
            ))
        }
        ,
        868: (e, t, n) => {
            "use strict";
            n.r(t),
            n.d(t, {
                detectProxies: () => D
            });
            const {getWebRTC: o} = n(829)
              , {timezoneTest: a, getTimezoneDetails: i} = n(119)
              , {invalidURLTest: r} = n(861)
              , {getLatencyWebSocket: s, measureImageLatency: c} = n(432)
              , {scanCommonPorts: l} = n(372)
              , {dnsResolving: d, canLoadScriptFromUncommonPort: u} = n(65)
              , {now: g} = n(162)
              , {getMachineDetails: m} = n(611)
              , f = n(53)
              , p = 1200
              , w = 3200
              , h = e => Promise.allSettled ? Promise.allSettled(e) : Promise.all(e.map((e => e.then((e => ({
                status: "fulfilled",
                value: e
            }))).catch((e => ({
                status: "rejected",
                reason: e
            }))))))
              , v = e => {
                if (!e)
                    return "unknown_error";
                if ("string" == typeof e)
                    return e;
                if (e.message)
                    return e.message;
                try {
                    return e.toString()
                } catch (e) {
                    return "unknown_error"
                }
            }
              , y = (e, t=!1) => {
                if ("boolean" == typeof e)
                    return e;
                if ("string" == typeof e) {
                    const t = e.trim().toLowerCase();
                    if ("true" === t || "1" === t || "yes" === t)
                        return !0;
                    if ("false" === t || "0" === t || "no" === t || "" === t)
                        return !1
                }
                return "number" == typeof e ? 0 !== e : t
            }
              , b = (e, t=0) => {
                if ("number" == typeof e && Number.isFinite(e))
                    return e;
                if ("string" == typeof e && "" !== e.trim()) {
                    const t = Number(e);
                    if (Number.isFinite(t))
                        return t
                }
                return t
            }
              , T = (e, t=0) => {
                const n = b(e, t);
                return Number.isFinite(n) ? Math.max(0, Math.floor(n)) : t
            }
              , S = e => {
                e.latencyMeasurements = T(e.latencyMeasurements, 5),
                e.imagesToLoad = T(e.imagesToLoad, 0),
                e.imageLatencyDelay = b(e.imageLatencyDelay, 0),
                e.webRTCTimeout = b(e.webRTCTimeout, 3e3),
                e.invalidURLTestSamples = T(e.invalidURLTestSamples, 5),
                e.maxNetTestsTimeout = b(e.maxNetTestsTimeout, 3e3),
                e.collectMoreSignals = y(e.collectMoreSignals, !1),
                e.collectWebRTCStats = y(e.collectWebRTCStats, !1),
                e.collectWebRTCMeta = y(e.collectWebRTCMeta, !1),
                e.waitForImageLatency = y(e.waitForImageLatency, !1),
                e.enableGeoLatency = y(e.enableGeoLatency, !1),
                e.forceSingleCallback = y(e.forceSingleCallback, !1),
                e.debug = y(e.debug, !1),
                e.runTests = y(e.runTests, !0),
                e.firstCallbackTimeout = b(window.pdFirstCallbackTimeout, p);
                const t = Math.max(e.webRTCTimeout + 250, w);
                e.secondCallbackTimeout = b(window.pdSecondCallbackTimeout, t),
                e.wsSocketTimeout = b(window.pdWsTimeout, 5e3),
                Array.isArray(e.wsPorts) ? (e.wsPorts = e.wsPorts.map((e => b(e, 0))).filter((e => e > 0)),
                0 === e.wsPorts.length && e.wsPorts.push(7630)) : e.wsPorts = [7630]
            }
            ;
            function C(e) {
                const t = window.location.search;
                return new URLSearchParams(t).get(e)
            }
            function D() {
                let e = {
                    mode: window.pd_mode || "prod",
                    debug: C("debug") || !1,
                    runTests: !0,
                    dataSent: !1,
                    uuid: "6115d28315adc166",
                    rip: "138.2.232.81",
                    endpoint: "https://engine.proxydetect.live",
                    latencyMeasurements: "5",
                    wsEndpoint: "wss://engine.proxydetect.live:",
                    wsPorts: [7630],
                    canLoadJsUrl: "https://engine.proxydetect.live:22379/canLoadJS",
                    maxNetTestsTimeout: 3e3,
                    imagesToLoad: 2,
                    imageLatencyDelay: 0,
                    waitForImageLatency: false,
                    webRTCTimeout: 5000,
                    stunServer: "stun:stun.l.google.com:19302",
                    collectMoreSignals: false,
                    collectWebRTCStats: false,
                    collectWebRTCMeta: !1,
                    invalidURLTestSamples: 5,
                    enableGeoLatency: false,
                    forceSingleCallback: true
                };
                S(e);
                let t = C("stop") || !1;
                t && "1" === t && (e.runTests = !1);
                let n = {
                    config: e,
                    clientData: {
                        uuid: e.uuid,
                        pdKey: undefined,
                        pdVal: undefined,
                        idx: 1,
                        loaded: g(),
                        elapsed: null,
                        location: window.location.href,
                        userAgent: navigator.userAgent
                    },
                    testResults: {
                        "latency_vs_ping": {
                            "active": true,
                            "name": "Latency vs Ping Test",
                            "desc": "The idea is to compare the latency of the incoming TCP/IP connection to outgoing ping RTT. If the ping RTT is <strong>significantly smaller</strong> than the TCP/IP latency, then it is likely a VPN connection. Only works if the connecting host is ICMP reachable."
                        },
                        "http_headers": {
                            "active": true,
                            "name": "HTTP Headers Test",
                            "desc": "Detects most common proxy headers in HTTP requests such as <code>X-Forwarded-For</code>, <code>HTTP_PROXY_CONNECTION</code>, <code>Via</code>, etc."
                        },
                        "datacenter_ip": {
                            "active": true,
                            "name": "IP belongs to Hosting Provider",
                            "desc": "Checks if the client IP belongs to a hosting provider (by using <a href=\"https://ipapi.is\" target=\"_blank\">ipapi.is</a>). While this is not a definitive indicator of a VPN or proxy, there is still some usable correlation."
                        },
                        "proxy_ip": {
                            "active": true,
                            "name": "IP on Proxy List",
                            "desc": "Checks if the client IP is known to be a proxy by using <a href=\"https://ipapi.is\" target=\"_blank\">ipapi.is</a> lookup service."
                        },
                        "vpn_ip": {
                            "active": true,
                            "name": "IP on VPN List",
                            "desc": "Checks if the client IP is known to be a VPN provider by using <a href=\"https://ipapi.is\" target=\"_blank\">ipapi.is</a> lookup service."
                        },
                        "enumerated_vpn_ip": {
                            "active": true,
                            "name": "VPN Exit Node Enumeration",
                            "desc": "Checks if the client IP is known to be a VPN exit node by using <a href=\"https://ipapi.is\" target=\"_blank\">ipapi.is</a> VPN enumeration service. If an IP is on this list, it is <strong>definitely</strong> a VPN exit node."
                        },
                        "tcpip_fp": {
                            "active": true,
                            "name": "TCP/IP Fingerprint Test",
                            "desc": "TCP/IP fingerprinting to detect OS mismatch between the User-Agent and the OS derived from the TCP/IP headers. For a full description please check: <a href=\"https://github.com/NikolaiT/zardaxt\" target=\"_blank\">https://github.com/NikolaiT/zardaxt</a>"
                        },
                        "timezone": {
                            "active": true,
                            "name": "Timezone Test",
                            "desc": "Detects timezone mismatch between client and IP geolocation. This is a simple test that checks if the client timezone is <strong>significantly different</strong> from the IP geolocation timezone."
                        },
                        "invalid_url": {
                            "active": false,
                            "name": "Invalid URL Test",
                            "desc": "Client side JavaScript test running certain tests with invalid URLs and their behavior."
                        },
                        "net": {
                            "active": true,
                            "name": "Network Behavior Test",
                            "desc": "This test suite includes several client side JavaScript tests to detect network anomalies."
                        },
                        "browser_portscan": {
                            "active": false,
                            "name": "Browser Portscan Test",
                            "desc": "You can portscan in the browser with JavaScript. Several ports are indicative of TOR or proxy services."
                        },
                        "webrtc": {
                            "active": true,
                            "name": "WebRTC IP Leak Test",
                            "desc": "WebRTC IP leak detection. This test checks if the WebRTC connection is leaking the real client's IP address."
                        },
                        "latency": {
                            "active": true,
                            "name": "Latency Test",
                            "desc": "This test compares incoming TCP/IP latencies to WebSocket latencies initiated via JavaScript on the client side. If the WebSocket latency is <strong>significantly higher</strong> than the TCP/IP latency, then it is likely a Proxy or VPN connection."
                        },
                        "flow_pattern": {
                            "active": true,
                            "name": "Network Flow Pattern Test",
                            "desc": "TCP/IP connections can be described by flows. A flow is a sequence of tuples (source IP, destination IP, packet size, packet inter arrival time) that describes a bidirectional communication between two hosts. In Proxy and VPN connections, there are <strong>certain patterns</strong> indicative of Proxy or VPN usage."
                        },
                        "portscan": {
                            "active": false,
                            "name": "Portscan Test",
                            "desc": "Scans for open ports that indicate proxy services. The portscan is done via the server on the incoming connection. <strong>This test is very invasive and should be used with caution.</strong>"
                        },
                        "high_latencies": {
                            "active": true,
                            "name": "High Latency Test",
                            "desc": "Detects unusually high network latencies in the incoming connection. This is indicative of VPN usage."
                        },
                        "vpn_ai": {
                            "active": false,
                            "name": "AI-based VPN detection",
                            "desc": "AI-based VPN detection. This test uses a <strong>pre-trained model</strong> to detect VPN usage. Flow data is fed to the model."
                        },
                        "proxy_ai": {
                            "active": false,
                            "name": "AI-based proxy detection",
                            "desc": "AI-based proxy detection. This test uses a <strong>pre-trained model</strong> to detect proxy usage. Flow data is fed to the model."
                        }
                    },
                    secondCallback: {
                        uuid: e.uuid,
                        pdKey: undefined,
                        pdVal: undefined,
                        idx: 2,
                        loaded: g(),
                        elapsed: null
                    }
                };
                window.pds = n,
                "visual" === e.mode ? window.addEventListener("load", (function() {
                    R(n)
                }
                )) : R(n)
            }
            const P = async () => new Promise((e => {
                if (!navigator.userAgentData)
                    return e("not supported");
                navigator.userAgentData.getHighEntropyValues(["architecture", "model", "platformVersion", "fullVersionList"]).then((t => {
                    e(t)
                }
                )).catch((t => {
                    e(t.message)
                }
                ))
            }
            ))
              , k = async (e=500) => new Promise((t => {
                try {
                    if (!("speechSynthesis"in window))
                        return t("not supported");
                    window.speechSynthesis.onvoiceschanged = () => {
                        const e = window.speechSynthesis.getVoices();
                        t(e.length)
                    }
                    ;
                    try {
                        const e = window.speechSynthesis.getVoices();
                        t(e.length)
                    } catch (e) {}
                    setTimeout((function() {
                        t("timeout" + e)
                    }
                    ), e)
                } catch (e) {
                    t(e.message)
                }
            }
            ))
              , x = async () => {
                let e = {
                    HEV: await P(),
                    voiceCount: await k(),
                    time: (new Date).toString(),
                    pdfViewerEnabled: navigator.pdfViewerEnabled
                };
                try {
                    Object.assign(e, {
                        tUAD: typeof navigator.userAgentData,
                        tHEV: typeof navigator?.userAgentData?.getHighEntropyValues,
                        sHEV: navigator?.userAgentData?.getHighEntropyValues?.toString(),
                        pHEV: navigator?.userAgentData?.getHighEntropyValues?.__proto__?.toString()
                    })
                } catch (e) {}
                return e
            }
            ;
            function L(e, t) {
                const n = `${e.config.endpoint}/s`
                  , o = () => JSON.stringify(t);
                if (navigator && "function" == typeof navigator.sendBeacon)
                    return navigator.sendBeacon(n, o());
                if ("function" == typeof fetch) {
                    const e = o();
                    return fetch(n, {
                        method: "POST",
                        headers: {
                            "Content-Type": "text/plain;charset=UTF-8"
                        },
                        body: e,
                        keepalive: !0,
                        credentials: "omit"
                    }).catch(( () => {
                        t.xml_http_req = !0,
                        a(JSON.stringify(t))
                    }
                    )),
                    !0
                }
                return t.xml_http_req = !0,
                a(JSON.stringify(t)),
                !0;
                function a(e) {
                    try {
                        const t = new XMLHttpRequest;
                        t.open("POST", n, !0),
                        t.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"),
                        t.send(e)
                    } catch (e) {}
                }
            }
            function M(e) {
                e.config.dataSent || (e.clientData.fp = function() {
                    let e = null;
                    try {
                        let t = {
                            booleanFingerprint: Boolean(navigator.credentials) + (Boolean(navigator.appMinorVersion) << 1) + (Boolean(navigator.bluetooth) << 2) + (Boolean(navigator.storage) << 3) + (Boolean(Math.imul) << 4) + (Boolean(navigator.getGamepads) << 5) + (Boolean(navigator.getStorageUpdates) << 6) + (Boolean(navigator.hardwareConcurrency) << 7) + (Boolean(navigator.mediaDevices) << 8) + (Boolean(navigator.mozAlarms) << 9) + (Boolean(navigator.mozConnection) << 10) + (Boolean(navigator.mozIsLocallyAvailable) << 11) + (Boolean(navigator.mozPhoneNumberService) << 12) + (Boolean(navigator.msManipulationViewsEnabled) << 13) + (Boolean(navigator.permissions) << 14) + (Boolean(navigator.registerProtocolHandler) << 15) + (Boolean(navigator.requestMediaKeySystemAccess) << 16) + (Boolean(navigator.requestWakeLock) << 17) + (Boolean(navigator.sendBeacon) << 18) + (Boolean(navigator.serviceWorker) << 19) + (Boolean(navigator.storeWebWideTrackingException) << 20) + (Boolean(navigator.webkitGetGamepads) << 21) + (Boolean(navigator.webkitTemporaryStorage) << 22) + (Boolean(Number.parseInt) << 23) + (Boolean(Math.hypot) << 24) || "",
                            hardwareConcurrency: navigator.hardwareConcurrency || "",
                            deviceMemory: navigator.deviceMemory || "",
                            platform: navigator.platform || "",
                            oscpu: navigator.oscpu || "",
                            cpuClass: navigator.cpuClass || "",
                            vendor: navigator.vendor || "",
                            buildID: navigator.buildID || "",
                            product: navigator.product || "",
                            productSub: navigator.productSub || "",
                            pluginsSupport: void 0 !== navigator.plugins,
                            maxTouchPoints: navigator.maxTouchPoints || navigator.msMaxTouchPoints || "",
                            language: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage,
                            languages: String(navigator.languages),
                            sessionStorage: !!window.sessionStorage,
                            localStorage: !!window.localStorage,
                            indexedDB: !!window.indexedDB,
                            openDatabase: !!window.openDatabase,
                            navigatorCookieEnabled: navigator.cookieEnabled || "",
                            doNotTrack: !!(navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack),
                            sayswho: navigator.sayswho || "",
                            loadPurpose: navigator.loadPurpose || "",
                            webdriver: navigator.webdriver || "",
                            dimensions: String([screen.width, screen.height]),
                            geolocation: Boolean(navigator.geolocation),
                            vibrate: Boolean(navigator.vibrate),
                            getBattery: Boolean(navigator.getBattery),
                            webrtcKey: "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection,
                            _phantom: Boolean(window._phantom),
                            webdriver: Boolean(window.webdriver),
                            domAutomation: Boolean(window.domAutomation),
                            auto: Boolean(window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_),
                            wd1: Boolean(null != window.document.documentElement.getAttribute("webdriver")),
                            XPathResult: Boolean(0 !== window.XPathResult || void 0 !== document.XPathResult),
                            wd2: Boolean(null != window.document.documentElement.getAttribute("driver")),
                            selenium: Boolean(null != window.document.documentElement.getAttribute("selenium"))
                        }
                          , n = "";
                        for (let e in t)
                            n += e + ":" + t[e] + ";";
                        e = f.v3(n)
                    } catch (t) {
                        e = t.toString()
                    }
                    return e
                }(),
                e.clientData.elapsed = g(),
                L(e, e.clientData))
            }
            function R(e) {
                if (!e.config.runTests)
                    return;
                const t = t => {
                    "visual" === e.config.mode && window.dispatchEvent(new CustomEvent(t,{
                        detail: e
                    }))
                }
                  , n = []
                  , f = [];
                let y = !1
                  , b = null
                  , T = null;
                const S = (t, n) => {
                    t && (e.clientData.errors || (e.clientData.errors = {}),
                    e.clientData.errors[t] = v(n))
                }
                ;
                try {
                    t("pdStart");
                    const v = (t, n) => {
                        const o = t.split(".");
                        let a = e.secondCallback;
                        for (; o.length > 1; ) {
                            const e = o.shift();
                            a[e] && "object" == typeof a[e] || (a[e] = {}),
                            a = a[e]
                        }
                        a[o[0]] = n
                    }
                      , C = (t, n) => {
                        !e.config.forceSingleCallback && e.config.dataSent && v(t, n)
                    }
                      , D = (t, n) => t.catch((t => {
                        if (S(n, t),
                        e.config.debug)
                            try {
                                console.error("[pd]", t)
                            } catch (e) {}
                        return null
                    }
                    ))
                      , P = (e, t) => {
                        e && n.push(D(e, t))
                    }
                      , k = (t, o) => {
                        t && (e.config.forceSingleCallback ? n.push(D(t, o)) : f.push(D(t, o)))
                    }
                      , R = () => {
                        y || (y = !0,
                        e.config.dataSent || (M(e),
                        e.config.dataSent = !0),
                        t("pdPoll"))
                    }
                    ;
                    b = window.setTimeout(R, Math.max(200, e.config.firstCallbackTimeout || p));
                    const _ = () => {
                        const t = {
                            uuid: !0,
                            pdKey: !0,
                            pdVal: !0,
                            idx: !0,
                            loaded: !0,
                            elapsed: !0
                        };
                        return Object.keys(e.secondCallback).some((e => !t[e]))
                    }
                    ;
                    if (P(m().then((t => (e.clientData.machine = t,
                    C("machine", t),
                    t))), "machine"),
                    e.config.collectMoreSignals && P(x().then((t => (e.clientData.more = t,
                    C("more", t),
                    t))), "moreSignals"),
                    !0 === e.testResults.latency.active && s(e).catch(( () => null)),
                    e.config.imagesToLoad > 0) {
                        const t = c(e).then((t => (e.config.waitForImageLatency || e.config.forceSingleCallback ? (e.clientData.imageLatencies = t,
                        C("imageLatencies", t)) : v("imageLatencies", t),
                        t)));
                        e.config.waitForImageLatency || e.config.forceSingleCallback ? P(t, "imageLatency") : k(t, "imageLatency")
                    }
                    if (!0 === e.testResults.timezone.active && (e.clientData.time = a(e),
                    P(i().then((t => (e.clientData.timezoneDetails = t,
                    C("timezoneDetails", t),
                    t))), "timezone")),
                    !0 === e.testResults.webrtc.active && k(o(e).then((t => (e.config.forceSingleCallback ? (e.clientData.webrtc = t,
                    C("webrtc", t)) : v("webrtc", t),
                    t))), "webrtc"),
                    !0 === e.testResults.invalid_url.active && P(r(e).then((t => (e.clientData.urlLatency = t,
                    C("urlLatency", t),
                    t))), "invalidUrl"),
                    !0 === e.testResults.net.active && (e.clientData.net = {},
                    P(d(e).then((t => (e.clientData.net.dnsResolving = t,
                    C("net.dnsResolving", t),
                    t))), "dnsResolving"),
                    P(u(e).then((t => (e.clientData.net.canLoadScriptFromUncommonPort = t,
                    C("net.canLoadScriptFromUncommonPort", t),
                    t))), "uncommonPort")),
                    !0 === e.testResults.browser_portscan.active && k(l().then((t => (e.config.forceSingleCallback ? (e.clientData.browserPortscan = t,
                    C("browserPortscan", t)) : v("browserPortscan", t),
                    t))), "browserPortscan"),
                    (n.length > 0 ? h(n) : Promise.resolve()).then(( () => {
                        b && (window.clearTimeout(b),
                        b = null),
                        R()
                    }
                    )),
                    !e.config.forceSingleCallback && f.length > 0) {
                        let t = !1;
                        const n = () => {
                            t || (e.config.dataSent || R(),
                            _() && (t = !0,
                            e.secondCallback.elapsed = g(),
                            L(e, e.secondCallback)))
                        }
                        ;
                        T = window.setTimeout(n, Math.max(e.config.webRTCTimeout + 200, e.config.secondCallbackTimeout || w)),
                        h(f).then(( () => {
                            T && (window.clearTimeout(T),
                            T = null),
                            n()
                        }
                        ))
                    }
                } catch (n) {
                    S("startTests", n),
                    e.clientData.error = v(n),
                    e.clientData.errorStack = n && n.stack ? n.stack : void 0,
                    b && (window.clearTimeout(b),
                    b = null),
                    T && (window.clearTimeout(T),
                    T = null),
                    M(e),
                    e.config.dataSent = !0;
                    try {
                        t("pdPoll")
                    } catch (e) {}
                }
            }
        }
    }
      , t = {};
    function n(o) {
        var a = t[o];
        if (void 0 !== a)
            return a.exports;
        var i = t[o] = {
            exports: {}
        };
        return e[o](i, i.exports, n),
        i.exports
    }
    n.d = (e, t) => {
        for (var o in t)
            n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
            })
    }
    ,
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        const {detectProxies: e} = n(868);
        e()
    }
    )()
}
)();
