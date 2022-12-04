(() => {
    var __webpack_modules__ = {
        711: function(module, __unused_webpack_exports, __webpack_require__) {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                var e = "undefined" != typeof window ? window : "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self ? self : {}, t = "Expected a function", n = NaN, o = "[object Symbol]", i = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, c = /^0o[0-7]+$/i, s = parseInt, u = "object" == typeof e && e && e.Object === Object && e, d = "object" == typeof self && self && self.Object === Object && self, l = u || d || Function("return this")(), f = Object.prototype.toString, m = Math.max, p = Math.min, b = function() {
                    return l.Date.now();
                };
                function v(e, n, o) {
                    var i, a, r, c, s, u, d = 0, l = !1, f = !1, v = !0;
                    if ("function" != typeof e) throw new TypeError(t);
                    function y(t) {
                        var n = i, o = a;
                        return i = a = void 0, d = t, c = e.apply(o, n);
                    }
                    function h(e) {
                        var t = e - u;
                        return void 0 === u || t >= n || t < 0 || f && e - d >= r;
                    }
                    function k() {
                        var e = b();
                        if (h(e)) return x(e);
                        s = setTimeout(k, function(e) {
                            var t = n - (e - u);
                            return f ? p(t, r - (e - d)) : t;
                        }(e));
                    }
                    function x(e) {
                        return s = void 0, v && i ? y(e) : (i = a = void 0, c);
                    }
                    function O() {
                        var e = b(), t = h(e);
                        if (i = arguments, a = this, u = e, t) {
                            if (void 0 === s) return function(e) {
                                return d = e, s = setTimeout(k, n), l ? y(e) : c;
                            }(u);
                            if (f) return s = setTimeout(k, n), y(u);
                        }
                        return void 0 === s && (s = setTimeout(k, n)), c;
                    }
                    return n = w(n) || 0, g(o) && (l = !!o.leading, r = (f = "maxWait" in o) ? m(w(o.maxWait) || 0, n) : r, 
                    v = "trailing" in o ? !!o.trailing : v), O.cancel = function() {
                        void 0 !== s && clearTimeout(s), d = 0, i = u = a = s = void 0;
                    }, O.flush = function() {
                        return void 0 === s ? c : x(b());
                    }, O;
                }
                function g(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t);
                }
                function w(e) {
                    if ("number" == typeof e) return e;
                    if (function(e) {
                        return "symbol" == typeof e || function(e) {
                            return !!e && "object" == typeof e;
                        }(e) && f.call(e) == o;
                    }(e)) return n;
                    if (g(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = g(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(i, "");
                    var u = r.test(e);
                    return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : a.test(e) ? n : +e;
                }
                var y = function(e, n, o) {
                    var i = !0, a = !0;
                    if ("function" != typeof e) throw new TypeError(t);
                    return g(o) && (i = "leading" in o ? !!o.leading : i, a = "trailing" in o ? !!o.trailing : a), 
                    v(e, n, {
                        leading: i,
                        maxWait: n,
                        trailing: a
                    });
                }, h = "Expected a function", k = NaN, x = "[object Symbol]", O = /^\s+|\s+$/g, j = /^[-+]0x[0-9a-f]+$/i, E = /^0b[01]+$/i, N = /^0o[0-7]+$/i, z = parseInt, C = "object" == typeof e && e && e.Object === Object && e, A = "object" == typeof self && self && self.Object === Object && self, q = C || A || Function("return this")(), L = Object.prototype.toString, T = Math.max, M = Math.min, S = function() {
                    return q.Date.now();
                };
                function D(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t);
                }
                function H(e) {
                    if ("number" == typeof e) return e;
                    if (function(e) {
                        return "symbol" == typeof e || function(e) {
                            return !!e && "object" == typeof e;
                        }(e) && L.call(e) == x;
                    }(e)) return k;
                    if (D(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = D(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(O, "");
                    var n = E.test(e);
                    return n || N.test(e) ? z(e.slice(2), n ? 2 : 8) : j.test(e) ? k : +e;
                }
                var $ = function(e, t, n) {
                    var o, i, a, r, c, s, u = 0, d = !1, l = !1, f = !0;
                    if ("function" != typeof e) throw new TypeError(h);
                    function m(t) {
                        var n = o, a = i;
                        return o = i = void 0, u = t, r = e.apply(a, n);
                    }
                    function p(e) {
                        var n = e - s;
                        return void 0 === s || n >= t || n < 0 || l && e - u >= a;
                    }
                    function b() {
                        var e = S();
                        if (p(e)) return v(e);
                        c = setTimeout(b, function(e) {
                            var n = t - (e - s);
                            return l ? M(n, a - (e - u)) : n;
                        }(e));
                    }
                    function v(e) {
                        return c = void 0, f && o ? m(e) : (o = i = void 0, r);
                    }
                    function g() {
                        var e = S(), n = p(e);
                        if (o = arguments, i = this, s = e, n) {
                            if (void 0 === c) return function(e) {
                                return u = e, c = setTimeout(b, t), d ? m(e) : r;
                            }(s);
                            if (l) return c = setTimeout(b, t), m(s);
                        }
                        return void 0 === c && (c = setTimeout(b, t)), r;
                    }
                    return t = H(t) || 0, D(n) && (d = !!n.leading, a = (l = "maxWait" in n) ? T(H(n.maxWait) || 0, t) : a, 
                    f = "trailing" in n ? !!n.trailing : f), g.cancel = function() {
                        void 0 !== c && clearTimeout(c), u = 0, o = s = i = c = void 0;
                    }, g.flush = function() {
                        return void 0 === c ? r : v(S());
                    }, g;
                }, W = function() {};
                function P(e) {
                    e && e.forEach((function(e) {
                        var t = Array.prototype.slice.call(e.addedNodes), n = Array.prototype.slice.call(e.removedNodes);
                        if (function e(t) {
                            var n = void 0, o = void 0;
                            for (n = 0; n < t.length; n += 1) {
                                if ((o = t[n]).dataset && o.dataset.aos) return !0;
                                if (o.children && e(o.children)) return !0;
                            }
                            return !1;
                        }(t.concat(n))) return W();
                    }));
                }
                function Y() {
                    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                }
                var _ = {
                    isSupported: function() {
                        return !!Y();
                    },
                    ready: function(e, t) {
                        var n = window.document, o = new (Y())(P);
                        W = t, o.observe(n.documentElement, {
                            childList: !0,
                            subtree: !0,
                            removedNodes: !0
                        });
                    }
                }, B = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }, F = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                            Object.defineProperty(e, o.key, o);
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t;
                    };
                }(), I = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                    }
                    return e;
                }, K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, J = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, Q = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
                function R() {
                    return navigator.userAgent || navigator.vendor || window.opera || "";
                }
                var U = new (function() {
                    function e() {
                        B(this, e);
                    }
                    return F(e, [ {
                        key: "phone",
                        value: function() {
                            var e = R();
                            return !(!K.test(e) && !G.test(e.substr(0, 4)));
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var e = R();
                            return !(!J.test(e) && !Q.test(e.substr(0, 4)));
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone();
                        }
                    }, {
                        key: "ie11",
                        value: function() {
                            return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                        }
                    } ]), e;
                }()), V = function(e, t) {
                    var n = void 0;
                    return U.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {
                        detail: t
                    }) : n = new CustomEvent(e, {
                        detail: t
                    }), document.dispatchEvent(n);
                }, X = function(e) {
                    return e.forEach((function(e, t) {
                        return function(e, t) {
                            var n = e.options, o = e.position, i = e.node, a = (e.data, function() {
                                e.animated && (function(e, t) {
                                    t && t.forEach((function(t) {
                                        return e.classList.remove(t);
                                    }));
                                }(i, n.animatedClassNames), V("aos:out", i), e.options.id && V("aos:in:" + e.options.id, i), 
                                e.animated = !1);
                            });
                            n.mirror && t >= o.out && !n.once ? a() : t >= o.in ? e.animated || (function(e, t) {
                                t && t.forEach((function(t) {
                                    return e.classList.add(t);
                                }));
                            }(i, n.animatedClassNames), V("aos:in", i), e.options.id && V("aos:in:" + e.options.id, i), 
                            e.animated = !0) : e.animated && !n.once && a();
                        }(e, window.pageYOffset);
                    }));
                }, Z = function(e) {
                    for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); ) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), 
                    n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                    return {
                        top: n,
                        left: t
                    };
                }, ee = function(e, t, n) {
                    var o = e.getAttribute("data-aos-" + t);
                    if (void 0 !== o) {
                        if ("true" === o) return !0;
                        if ("false" === o) return !1;
                    }
                    return o || n;
                }, te = function(e, t) {
                    return e.forEach((function(e, n) {
                        var o = ee(e.node, "mirror", t.mirror), i = ee(e.node, "once", t.once), a = ee(e.node, "id"), r = t.useClassNames && e.node.getAttribute("data-aos"), c = [ t.animatedClassName ].concat(r ? r.split(" ") : []).filter((function(e) {
                            return "string" == typeof e;
                        }));
                        t.initClassName && e.node.classList.add(t.initClassName), e.position = {
                            in: function(e, t, n) {
                                var o = window.innerHeight, i = ee(e, "anchor"), a = ee(e, "anchor-placement"), r = Number(ee(e, "offset", a ? 0 : t)), c = a || n, s = e;
                                i && document.querySelectorAll(i) && (s = document.querySelectorAll(i)[0]);
                                var u = Z(s).top - o;
                                switch (c) {
                                  case "top-bottom":
                                    break;

                                  case "center-bottom":
                                    u += s.offsetHeight / 2;
                                    break;

                                  case "bottom-bottom":
                                    u += s.offsetHeight;
                                    break;

                                  case "top-center":
                                    u += o / 2;
                                    break;

                                  case "center-center":
                                    u += o / 2 + s.offsetHeight / 2;
                                    break;

                                  case "bottom-center":
                                    u += o / 2 + s.offsetHeight;
                                    break;

                                  case "top-top":
                                    u += o;
                                    break;

                                  case "bottom-top":
                                    u += o + s.offsetHeight;
                                    break;

                                  case "center-top":
                                    u += o + s.offsetHeight / 2;
                                }
                                return u + r;
                            }(e.node, t.offset, t.anchorPlacement),
                            out: o && function(e, t) {
                                window.innerHeight;
                                var n = ee(e, "anchor"), o = ee(e, "offset", t), i = e;
                                return n && document.querySelectorAll(n) && (i = document.querySelectorAll(n)[0]), 
                                Z(i).top + i.offsetHeight - o;
                            }(e.node, t.offset)
                        }, e.options = {
                            once: i,
                            mirror: o,
                            animatedClassNames: c,
                            id: a
                        };
                    })), e;
                }, ne = function() {
                    var e = document.querySelectorAll("[data-aos]");
                    return Array.prototype.map.call(e, (function(e) {
                        return {
                            node: e
                        };
                    }));
                }, oe = [], ie = !1, ae = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    mirror: !1,
                    anchorPlacement: "top-bottom",
                    startEvent: "DOMContentLoaded",
                    animatedClassName: "aos-animate",
                    initClassName: "aos-init",
                    useClassNames: !1,
                    disableMutationObserver: !1,
                    throttleDelay: 99,
                    debounceDelay: 50
                }, re = function() {
                    return document.all && !window.atob;
                }, ce = function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ie = !0), ie && (oe = te(oe, ae), 
                    X(oe), window.addEventListener("scroll", y((function() {
                        X(oe, ae.once);
                    }), ae.throttleDelay)));
                }, se = function() {
                    if (oe = ne(), de(ae.disable) || re()) return ue();
                    ce();
                }, ue = function() {
                    oe.forEach((function(e, t) {
                        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), 
                        e.node.removeAttribute("data-aos-delay"), ae.initClassName && e.node.classList.remove(ae.initClassName), 
                        ae.animatedClassName && e.node.classList.remove(ae.animatedClassName);
                    }));
                }, de = function(e) {
                    return !0 === e || "mobile" === e && U.mobile() || "phone" === e && U.phone() || "tablet" === e && U.tablet() || "function" == typeof e && !0 === e();
                };
                return {
                    init: function(e) {
                        return ae = I(ae, e), oe = ne(), ae.disableMutationObserver || _.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), 
                        ae.disableMutationObserver = !0), ae.disableMutationObserver || _.ready("[data-aos]", se), 
                        de(ae.disable) || re() ? ue() : (document.querySelector("body").setAttribute("data-aos-easing", ae.easing), 
                        document.querySelector("body").setAttribute("data-aos-duration", ae.duration), document.querySelector("body").setAttribute("data-aos-delay", ae.delay), 
                        -1 === [ "DOMContentLoaded", "load" ].indexOf(ae.startEvent) ? document.addEventListener(ae.startEvent, (function() {
                            ce(!0);
                        })) : window.addEventListener("load", (function() {
                            ce(!0);
                        })), "DOMContentLoaded" === ae.startEvent && [ "complete", "interactive" ].indexOf(document.readyState) > -1 && ce(!0), 
                        window.addEventListener("resize", $(ce, ae.debounceDelay, !0)), window.addEventListener("orientationchange", $(ce, ae.debounceDelay, !0)), 
                        oe);
                    },
                    refresh: ce,
                    refreshHard: se
                };
            }));
        },
        230: module => {
            module.exports = "object" == typeof self ? self.FormData : window.FormData;
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" === typeof window) return window;
            }
        }();
    })();
    (() => {
        "use strict";
        const body = document.body;
        (function() {
            let currentBrowser;
            if (navigator.userAgent.indexOf("Firefox") > -1) currentBrowser = "firefox"; else if (navigator.userAgent.indexOf("Opera") > -1) currentBrowser = "opera"; else if (navigator.userAgent.indexOf("Trident") > -1) currentBrowser = "explorer"; else if (navigator.userAgent.indexOf("Edge") > -1) currentBrowser = "edge"; else if (navigator.userAgent.indexOf("Chrome") > -1) currentBrowser = "chrome"; else if (navigator.userAgent.indexOf("Safari") > -1) currentBrowser = "safari"; else currentBrowser = "unknown";
            console.log("You are using: " + currentBrowser);
            document.documentElement.classList.add(currentBrowser);
        })();
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        (function checkMobile() {
            if (isMobile.any()) document.documentElement.classList.add("_mobile");
        })();
        (function isWebp() {
            function testWebP(callback) {
                var webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                if (true === support) document.documentElement.classList.add("_webp"); else document.documentElement.classList.add("_no-webp");
            }));
        })();
        function menuInit() {
            let burger = document.querySelector(".menu__icon");
            let menu = document.querySelector(".menu");
            if (burger && menu) {
                burger.onclick = () => {
                    burger.classList.toggle("_active");
                    menu.classList.toggle("_active");
                    body.classList.toggle("_locked");
                };
                menu.querySelectorAll(".menu__link").forEach((link => {
                    link.addEventListener("click", (e => {
                        if (e.target.closest(".menu__item")) {
                            burger.classList.remove("_active");
                            menu.classList.remove("_active");
                            body.classList.remove("_locked");
                        }
                    }));
                }));
            }
        }
        function modalsInit() {
            const modalBtns = document.querySelectorAll("._modal-open");
            const modals = document.querySelectorAll("._modal");
            function openModal(elem) {
                elem.classList.add("_active");
                body.classList.add("_locked");
            }
            function closeModal(e) {
                if (e.target.classList.contains("modal-close") || e.target.closest(".modal-close") || e.target.classList.contains("modal-bg")) {
                    e.target.closest("._modal").classList.remove("_active");
                    body.classList.remove("_locked");
                }
            }
            modalBtns.forEach((btn => {
                btn.addEventListener("click", (e => {
                    let data = e.target.dataset.modalOpen;
                    modals.forEach((modal => {
                        if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest("._modal-open").dataset.modalOpen) openModal(modal);
                    }));
                }));
            }));
            modals.forEach((modal => {
                modal.addEventListener("click", (e => closeModal(e)));
            }));
            window.addEventListener("keydown", (e => {
                modals.forEach((modal => {
                    if ("Escape" === e.key && modal.classList.contains("_active")) {
                        modal.classList.remove("_active");
                        body.classList.remove("_locked");
                    }
                }));
            }));
        }
        function spollersInit() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabIndex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabIndex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        spollerClose.classList.remove("_spoller-active");
                        _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                    }));
                }));
            }
        }
        let _slideUp = (target, duration = 500, showMore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showMore ? `${showMore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showMore ? true : false;
                    !showMore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showMore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showMore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showMore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showMore ? `${showMore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        function daInit() {
            "use strict";
            (function() {
                let originalPositions = [];
                let daElements = document.querySelectorAll("[data-da]");
                let daElementsArray = [];
                let daMatchMedia = [];
                if (daElements.length > 0) {
                    let number = 0;
                    for (let index = 0; index < daElements.length; index++) {
                        const daElement = daElements[index];
                        const daMove = daElement.getAttribute("data-da");
                        if ("" != daMove) {
                            const daArray = daMove.split(",");
                            const daPlace = daArray[1] ? daArray[1].trim() : "last";
                            const daBreakpoint = daArray[2] ? daArray[2].trim() : "767";
                            const daType = "min" === daArray[3] ? daArray[3].trim() : "max";
                            const daDestination = document.querySelector("." + daArray[0].trim());
                            if (daArray.length > 0 && daDestination) {
                                daElement.setAttribute("data-da-index", number);
                                originalPositions[number] = {
                                    parent: daElement.parentNode,
                                    index: indexInParent(daElement)
                                };
                                daElementsArray[number] = {
                                    element: daElement,
                                    destination: document.querySelector("." + daArray[0].trim()),
                                    place: daPlace,
                                    breakpoint: daBreakpoint,
                                    type: daType
                                };
                                number++;
                            }
                        }
                    }
                    dynamicAdaptSort(daElementsArray);
                    for (let index = 0; index < daElementsArray.length; index++) {
                        const el = daElementsArray[index];
                        const daBreakpoint = el.breakpoint;
                        const daType = el.type;
                        daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
                        daMatchMedia[index].addListener(dynamicAdapt);
                    }
                }
                function dynamicAdapt(e) {
                    for (let index = 0; index < daElementsArray.length; index++) {
                        const el = daElementsArray[index];
                        const daElement = el.element;
                        const daDestination = el.destination;
                        const daPlace = el.place;
                        const daBreakpoint = el.breakpoint;
                        const daClassName = "_dynamic_adapt_" + daBreakpoint;
                        if (daMatchMedia[index].matches) {
                            if (!daElement.classList.contains(daClassName)) {
                                let actualIndex = indexOfElements(daDestination)[daPlace];
                                if ("first" === daPlace) actualIndex = indexOfElements(daDestination)[0]; else if ("last" === daPlace) actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
                                daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
                                daElement.classList.add(daClassName);
                            }
                        } else if (daElement.classList.contains(daClassName)) {
                            dynamicAdaptBack(daElement);
                            daElement.classList.remove(daClassName);
                        }
                    }
                }
                dynamicAdapt();
                function dynamicAdaptBack(el) {
                    const daIndex = el.getAttribute("data-da-index");
                    const originalPlace = originalPositions[daIndex];
                    const parentPlace = originalPlace["parent"];
                    const indexPlace = originalPlace["index"];
                    const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
                    parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
                }
                function indexInParent(el) {
                    var children = Array.prototype.slice.call(el.parentNode.children);
                    return children.indexOf(el);
                }
                function indexOfElements(parent, back) {
                    const children = parent.children;
                    const childrenArray = [];
                    for (let i = 0; i < children.length; i++) {
                        const childrenElement = children[i];
                        if (back) childrenArray.push(i); else if (null == childrenElement.getAttribute("data-da")) childrenArray.push(i);
                    }
                    return childrenArray;
                }
                function dynamicAdaptSort(arr) {
                    arr.sort((function(a, b) {
                        if (a.breakpoint > b.breakpoint) return -1; else return 1;
                    }));
                    arr.sort((function(a, b) {
                        if (a.place > b.place) return 1; else return -1;
                    }));
                }
            })();
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function ssr_window_esm_isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if ("number" === typeof items) super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if ("string" !== typeof selector) return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if ("string" === typeof selector) {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (0 === html.indexOf("<li")) toCreate = "ul";
                    if (0 === html.indexOf("<tr")) toCreate = "tbody";
                    if (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) toCreate = "tr";
                    if (0 === html.indexOf("<tbody")) toCreate = "table";
                    if (0 === html.indexOf("<option")) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (1 === arguments.length && "string" === typeof attrs) {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = "string" !== typeof duration ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (1 === arguments.length) if ("string" === typeof props) {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (2 === arguments.length && "string" === typeof props) {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if ("undefined" === typeof html) return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if ("undefined" === typeof text) return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || "undefined" === typeof selector) return false;
            if ("string" === typeof selector) {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if ("undefined" === typeof index) return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (null !== this[i].parentNode) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if ("undefined" === typeof selector) return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if ("undefined" === typeof args[0]) {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay = 0) {
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis = "x") {
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function utils_extend(...args) {
            const to = Object(args[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < args.length; i += 1) {
                const nextSource = args[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll({swiper, targetPosition, side}) {
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => "next" === dir && current >= target || "prev" === dir && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (null === startTime) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice({userAgent} = {}) {
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = "Win32" === platform;
            let macos = "MacIntel" === platform;
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides = {}) {
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize({swiper, on, emit}) {
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((({contentBoxSize, contentRect, target}) => {
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && "undefined" !== typeof window.ResizeObserver) {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer({swiper, extendParams, on, emit}) {
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = (target, options = {}) => {
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                function onceHandler(...args) {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit(...args) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = $el[0].clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = $el[0].clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter((key => "undefined" !== typeof params.breakpoints[key].slidesPerView)).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if ("none" === slide.css("display")) continue;
                if ("auto" === params.slidesPerView) {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || dom([])).each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || 0 === newHeight) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate = this && this.translate || 0) {
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if ("undefined" === typeof translate) {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && 0 === nextSlide.length) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && 0 === prevSlide.length) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if ("undefined" === typeof activeIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis = (this.isHorizontal() ? "x" : "y")) {
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit({swiper, runCallbacks, direction, step}) {
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if ("next" === dir) swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
            if ("number" !== typeof index && "string" !== typeof index) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(100 * translate);
                const normalizedGrid = Math.floor(100 * slidesGrid[i]);
                const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (0 === speed) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (0 === speed) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if ("undefined" !== typeof prevSnapIndex) prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = .5) {
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if ("auto" === params.slidesPerView && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                const slide = dom(el);
                slide.attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < swiper.loopedSlides; i += 1) {
                const index = i - Math.floor(i / slides.length) * slides.length;
                appendSlides.push(slides.eq(index)[0]);
                prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
            }
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - 3 * loopedSlides + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = "container" === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base = this) {
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if ("wrapper" === params.touchEventsTarget) if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = "touchstart" === e.type;
            if (!data.isTouchEvent && "which" in e && 3 === e.which) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            const eventPath = event.composedPath ? event.composedPath() : event.path ? event.path[0] : void 0;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) $targetEl = dom(event.path[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if ("touchstart" !== e.type) {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ("SELECT" === $targetEl[0].nodeName) data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && "touchmove" !== e.type) return;
            const targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX;
            const pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = "touchstart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base = "window", containerEl) {
            if (!breakpoints || "container" === base && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if ("window" === base) {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if ("object" === typeof item) Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if ("undefined" === typeof swiper || null === swiper || !swiper || swiper.destroyed) return;
                if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = 1 === swiper.snapGrid.length;
            if (true === params.allowSlideNext) swiper.allowSlideNext = !swiper.isLocked;
            if (true === params.allowSlidePrev) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: true,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj = {}) {
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if ("object" !== typeof moduleParams || null === moduleParams) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (true === params[moduleParamName]) params[moduleParamName] = {
                    enabled: true
                };
                if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class Swiper {
            constructor(...args) {
                let el;
                let params;
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => 0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass)));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass))).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view = "current", exact = false) {
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if ("current" === view) for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate = true) {
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && "rtl" === direction || !swiper.rtl && "ltr" === direction) return;
                swiper.rtl = "rtl" === direction;
                swiper.rtlTranslate = "horizontal" === swiper.params.direction && swiper.rtl;
                if (swiper.rtl) {
                    swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    if (!$el.children) return dom($el).children(getWrapperSelector());
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance = true, cleanStyles = true) {
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                const modules = Swiper.prototype.__modules__;
                if ("function" === typeof mod && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => Swiper.installModule(m)));
                    return Swiper;
                }
                Swiper.installModule(module);
                return Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        Swiper.use([ Resize, Observer ]);
        const core = Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && true === params.auto) {
                    let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                    if (!element) {
                        element = document.createElement("div");
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation({swiper, extendParams, on, emit}) {
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            };
            function getEl(el) {
                let $el;
                if (el) {
                    $el = dom(el);
                    if (swiper.params.uniqueNavElements && "string" === typeof el && $el.length > 1 && 1 === swiper.$el.find(el).length) $el = swiper.$el.find(el);
                }
                return $el;
            }
            function toggleEl($el, disabled) {
                const params = swiper.params.navigation;
                if ($el && $el.length > 0) {
                    $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
                    if ($el[0] && "BUTTON" === $el[0].tagName) $el[0].disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
            }
            function update() {
                if (swiper.params.loop) return;
                const {$nextEl, $prevEl} = swiper.navigation;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                const $nextEl = getEl(params.nextEl);
                const $prevEl = getEl(params.prevEl);
                if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
                if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
                Object.assign(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });
                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }
            function destroy() {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off("click", onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off("click", onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }
            on("init", (() => {
                if (false === swiper.params.navigation.enabled) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
            }));
            on("click", ((_s, e) => {
                const {$nextEl, $prevEl} = swiper.navigation;
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass); else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    if (true === isHidden) emit("navigationShow"); else emit("navigationHide");
                    if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
                init();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        var aos = __webpack_require__(711);
        var __defProp = Object.defineProperty;
        var __getOwnPropSymbols = Object.getOwnPropertySymbols;
        var __hasOwnProp = Object.prototype.hasOwnProperty;
        var __propIsEnum = Object.prototype.propertyIsEnumerable;
        var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
            enumerable: true,
            configurable: true,
            writable: true,
            value
        }) : obj[key] = value;
        var __spreadValues = (a, b) => {
            for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
            if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
            return a;
        };
        var __publicField = (obj, key, value) => {
            __defNormalProp(obj, "symbol" !== typeof key ? key + "" : key, value);
            return value;
        };
        const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const NUMBER_REGEXP = /^[0-9]+$/;
        const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const STRONG_PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const isEmpty = value => {
            let newVal = value;
            if ("string" === typeof value) newVal = value.trim();
            return !newVal;
        };
        const isEmail = value => EMAIL_REGEXP.test(value);
        const isLengthMoreThanMax = (value, len) => value.length > len;
        const isLengthLessThanMin = (value, len) => value.length < len;
        const isNumber = value => NUMBER_REGEXP.test(value);
        const isPassword = value => PASSWORD_REGEXP.test(value);
        const isStrongPassword = value => STRONG_PASSWORD_REGEXP.test(value);
        const isNumberMoreThanMax = (value, len) => value > len;
        const isNumberLessThanMin = (value, len) => value < len;
        var Rules = (Rules2 => {
            Rules2["Required"] = "required";
            Rules2["Email"] = "email";
            Rules2["MinLength"] = "minLength";
            Rules2["MaxLength"] = "maxLength";
            Rules2["Password"] = "password";
            Rules2["Number"] = "number";
            Rules2["MaxNumber"] = "maxNumber";
            Rules2["MinNumber"] = "minNumber";
            Rules2["StrongPassword"] = "strongPassword";
            Rules2["CustomRegexp"] = "customRegexp";
            Rules2["MinFilesCount"] = "minFilesCount";
            Rules2["MaxFilesCount"] = "maxFilesCount";
            Rules2["Files"] = "files";
            return Rules2;
        })(Rules || {});
        var GroupRules = (GroupRules2 => {
            GroupRules2["Required"] = "required";
            return GroupRules2;
        })(GroupRules || {});
        var CustomStyleTagIds = (CustomStyleTagIds2 => {
            CustomStyleTagIds2["Label"] = "label";
            CustomStyleTagIds2["LabelArrow"] = "labelArrow";
            return CustomStyleTagIds2;
        })(CustomStyleTagIds || {});
        const getDefaultFieldMessage = (rule, ruleValue) => {
            switch (rule) {
              case Rules.Required:
                return "The field is required";

              case Rules.Email:
                return "Email has invalid format";

              case Rules.MaxLength:
                return "The field must contain a maximum of :value characters".replace(":value", String(ruleValue));

              case Rules.MinLength:
                return "The field must contain a minimum of :value characters".replace(":value", String(ruleValue));

              case Rules.Password:
                return "Password must contain minimum eight characters, at least one letter and one number";

              case Rules.Number:
                return "Value should be a number";

              case Rules.StrongPassword:
                return "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";

              case Rules.MaxNumber:
                return "Number should be less or equal than :value".replace(":value", String(ruleValue));

              case Rules.MinNumber:
                return "Number should be more or equal than :value".replace(":value", String(ruleValue));

              case Rules.MinFilesCount:
                return "Files count should be more or equal than :value".replace(":value", String(ruleValue));

              case Rules.MaxFilesCount:
                return "Files count should be less or equal than :value".replace(":value", String(ruleValue));

              case Rules.Files:
                return "Uploaded files have one or several invalid properties (extension/size/type etc)";

              default:
                return "Value is incorrect";
            }
        };
        const getDefaultGroupMessage = rule => {
            switch (rule) {
              case GroupRules.Required:
                return "The field is required";

              default:
                return "Group is incorrect";
            }
        };
        const isPromise = val => !!val && "function" === typeof val.then;
        const getNodeParents = el => {
            let elem = el;
            const els = [];
            while (elem) {
                els.unshift(elem);
                elem = elem.parentNode;
            }
            return els;
        };
        const getClosestParent = (groups, parents) => {
            const reversedParents = [ ...parents ].reverse();
            for (let i = 0, len = reversedParents.length; i < len; ++i) {
                const parent = reversedParents[i];
                for (const key in groups) {
                    const group = groups[key];
                    if (group.groupElem === parent) return [ key, group ];
                }
            }
            return null;
        };
        const getClassList = classList => {
            if (Array.isArray(classList)) return classList.filter((cls => cls.length > 0));
            if ("string" === typeof classList && classList.trim()) return [ ...classList.split(" ").filter((cls => cls.length > 0)) ];
            return [];
        };
        const errorLabelCss = `.just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}`;
        const TOOLTIP_ARROW_HEIGHT = 5;
        const defaultGlobalConfig = {
            errorFieldStyle: {
                color: "#b81111",
                border: "1px solid #B81111"
            },
            errorFieldCssClass: "just-validate-error-field",
            successFieldCssClass: "just-validate-success-field",
            errorLabelStyle: {
                color: "#b81111"
            },
            errorLabelCssClass: "just-validate-error-label",
            successLabelCssClass: "just-validate-success-label",
            focusInvalidField: true,
            lockForm: true,
            testingMode: false
        };
        class JustValidate {
            constructor(form, globalConfig, dictLocale) {
                __publicField(this, "form", null);
                __publicField(this, "fields", {});
                __publicField(this, "groupFields", {});
                __publicField(this, "errors", {});
                __publicField(this, "isValid", false);
                __publicField(this, "isSubmitted", false);
                __publicField(this, "globalConfig", defaultGlobalConfig);
                __publicField(this, "errorLabels", {});
                __publicField(this, "successLabels", {});
                __publicField(this, "eventListeners", []);
                __publicField(this, "dictLocale", []);
                __publicField(this, "currentLocale");
                __publicField(this, "customStyleTags", {});
                __publicField(this, "onSuccessCallback");
                __publicField(this, "onFailCallback");
                __publicField(this, "tooltips", []);
                __publicField(this, "lastScrollPosition");
                __publicField(this, "isScrollTick");
                __publicField(this, "refreshAllTooltips", (() => {
                    this.tooltips.forEach((item => {
                        item.refresh();
                    }));
                }));
                __publicField(this, "handleDocumentScroll", (() => {
                    this.lastScrollPosition = window.scrollY;
                    if (!this.isScrollTick) {
                        window.requestAnimationFrame((() => {
                            this.refreshAllTooltips();
                            this.isScrollTick = false;
                        }));
                        this.isScrollTick = true;
                    }
                }));
                __publicField(this, "formSubmitHandler", (ev => {
                    ev.preventDefault();
                    this.isSubmitted = true;
                    this.validateHandler(ev);
                }));
                __publicField(this, "handleFieldChange", (target => {
                    let currentFieldName;
                    for (const fieldName in this.fields) {
                        const field = this.fields[fieldName];
                        if (field.elem === target) {
                            currentFieldName = fieldName;
                            break;
                        }
                    }
                    if (!currentFieldName) return;
                    this.validateField(currentFieldName, true);
                }));
                __publicField(this, "handleGroupChange", (target => {
                    let currentGroup;
                    let currentGroupName;
                    for (const groupName in this.groupFields) {
                        const group = this.groupFields[groupName];
                        if (group.elems.find((elem => elem === target))) {
                            currentGroup = group;
                            currentGroupName = groupName;
                            break;
                        }
                    }
                    if (!currentGroup || !currentGroupName) return;
                    this.validateGroup(currentGroupName, currentGroup);
                }));
                __publicField(this, "handlerChange", (ev => {
                    if (!ev.target) return;
                    this.handleFieldChange(ev.target);
                    this.handleGroupChange(ev.target);
                    this.renderErrors();
                }));
                this.initialize(form, globalConfig, dictLocale);
            }
            initialize(form, globalConfig, dictLocale) {
                this.form = null;
                this.errors = {};
                this.isValid = false;
                this.isSubmitted = false;
                this.globalConfig = defaultGlobalConfig;
                this.errorLabels = {};
                this.successLabels = {};
                this.eventListeners = [];
                this.customStyleTags = {};
                this.tooltips = [];
                if ("string" === typeof form) {
                    const elem = document.querySelector(form);
                    if (!elem) throw Error(`Form with ${form} selector not found! Please check the form selector`);
                    this.setForm(elem);
                } else if (form instanceof HTMLFormElement) this.setForm(form); else throw Error(`Form selector is not valid. Please specify a string selector or a DOM element.`);
                this.globalConfig = __spreadValues(__spreadValues({}, defaultGlobalConfig), globalConfig);
                if (dictLocale) this.dictLocale = dictLocale;
                if (this.isTooltip()) {
                    const styleTag = document.createElement("style");
                    styleTag.textContent = errorLabelCss;
                    this.customStyleTags[CustomStyleTagIds.Label] = document.head.appendChild(styleTag);
                    this.addListener("scroll", document, this.handleDocumentScroll);
                }
            }
            getLocalisedString(str) {
                var _a;
                if (!this.currentLocale || !this.dictLocale.length) return str;
                const localisedStr = null == (_a = this.dictLocale.find((item => item.key === str))) ? void 0 : _a.dict[this.currentLocale];
                return localisedStr || str;
            }
            getFieldErrorMessage(fieldRule, elem) {
                const msg = "function" === typeof fieldRule.errorMessage ? fieldRule.errorMessage(this.getElemValue(elem), this.fields) : fieldRule.errorMessage;
                return this.getLocalisedString(msg) || getDefaultFieldMessage(fieldRule.rule, fieldRule.value);
            }
            getFieldSuccessMessage(successMessage, elem) {
                const msg = "function" === typeof successMessage ? successMessage(this.getElemValue(elem), this.fields) : successMessage;
                return this.getLocalisedString(msg);
            }
            getGroupErrorMessage(groupRule) {
                return this.getLocalisedString(groupRule.errorMessage) || getDefaultGroupMessage(groupRule.rule);
            }
            getGroupSuccessMessage(groupRule) {
                return this.getLocalisedString(groupRule.successMessage);
            }
            setFieldInvalid(field, fieldRule) {
                this.fields[field].isValid = false;
                this.fields[field].errorMessage = this.getFieldErrorMessage(fieldRule, this.fields[field].elem);
            }
            setFieldValid(field, successMessage) {
                this.fields[field].isValid = true;
                if (void 0 !== successMessage) this.fields[field].successMessage = this.getFieldSuccessMessage(successMessage, this.fields[field].elem);
            }
            setGroupInvalid(groupName, groupRule) {
                this.groupFields[groupName].isValid = false;
                this.groupFields[groupName].errorMessage = this.getGroupErrorMessage(groupRule);
            }
            setGroupValid(groupName, groupRule) {
                this.groupFields[groupName].isValid = true;
                this.groupFields[groupName].successMessage = this.getGroupSuccessMessage(groupRule);
            }
            getElemValue(elem) {
                switch (elem.type) {
                  case "checkbox":
                    return elem.checked;

                  case "file":
                    return elem.files;

                  default:
                    return elem.value;
                }
            }
            validateGroupRule(groupName, elems, groupRule) {
                switch (groupRule.rule) {
                  case GroupRules.Required:
                    if (elems.every((elem => !elem.checked))) this.setGroupInvalid(groupName, groupRule); else this.setGroupValid(groupName, groupRule);
                }
            }
            validateFieldRule(field, elem, fieldRule, afterInputChanged = false) {
                const ruleValue = fieldRule.value;
                const elemValue = this.getElemValue(elem);
                if (fieldRule.plugin) {
                    const result = fieldRule.plugin(elemValue, this.fields);
                    if (!result) this.setFieldInvalid(field, fieldRule);
                    return;
                }
                switch (fieldRule.rule) {
                  case Rules.Required:
                    if (isEmpty(elemValue)) this.setFieldInvalid(field, fieldRule);
                    break;

                  case Rules.Email:
                    if ("string" !== typeof elemValue) {
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if (!isEmail(elemValue)) this.setFieldInvalid(field, fieldRule);
                    break;

                  case Rules.MaxLength:
                    if (void 0 === ruleValue) {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if ("number" !== typeof ruleValue) {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a number. The field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if ("string" !== typeof elemValue) {
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if ("" === elemValue) break;
                    if (isLengthMoreThanMax(elemValue, ruleValue)) this.setFieldInvalid(field, fieldRule);
                    break;

                  case Rules.MinLength:
                    if (void 0 === ruleValue) {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if ("number" !== typeof ruleValue) {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a number. The field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if ("string" !== typeof elemValue) {
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if ("" === elemValue) break;
                    if (isLengthLessThanMin(elemValue, ruleValue)) this.setFieldInvalid(field, fieldRule);
                    break;

                  case Rules.Password:
                    if ("string" !== typeof elemValue) {
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if ("" === elemValue) break;
                    if (!isPassword(elemValue)) this.setFieldInvalid(field, fieldRule);
                    break;

                  case Rules.StrongPassword:
                    if ("string" !== typeof elemValue) {
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if ("" === elemValue) break;
                    if (!isStrongPassword(elemValue)) this.setFieldInvalid(field, fieldRule);
                    break;

                  case Rules.Number:
                    if ("string" !== typeof elemValue) {
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if ("" === elemValue) break;
                    if (!isNumber(elemValue)) this.setFieldInvalid(field, fieldRule);
                    break;

                  case Rules.MaxNumber:
                    {
                        if (void 0 === ruleValue) {
                            console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
                            this.setFieldInvalid(field, fieldRule);
                            break;
                        }
                        if ("number" !== typeof ruleValue) {
                            console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
                            this.setFieldInvalid(field, fieldRule);
                            break;
                        }
                        if ("string" !== typeof elemValue) {
                            this.setFieldInvalid(field, fieldRule);
                            break;
                        }
                        if ("" === elemValue) break;
                        const num = +elemValue;
                        if (Number.isNaN(num) || isNumberMoreThanMax(num, ruleValue)) this.setFieldInvalid(field, fieldRule);
                        break;
                    }

                  case Rules.MinNumber:
                    {
                        if (void 0 === ruleValue) {
                            console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
                            this.setFieldInvalid(field, fieldRule);
                            break;
                        }
                        if ("number" !== typeof ruleValue) {
                            console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
                            this.setFieldInvalid(field, fieldRule);
                            break;
                        }
                        if ("string" !== typeof elemValue) {
                            this.setFieldInvalid(field, fieldRule);
                            break;
                        }
                        if ("" === elemValue) break;
                        const num = +elemValue;
                        if (Number.isNaN(num) || isNumberLessThanMin(num, ruleValue)) this.setFieldInvalid(field, fieldRule);
                        break;
                    }

                  case Rules.CustomRegexp:
                    {
                        if (void 0 === ruleValue) {
                            console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
                            this.setFieldInvalid(field, fieldRule);
                            return;
                        }
                        let regexp;
                        try {
                            regexp = new RegExp(ruleValue);
                        } catch (e) {
                            console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a valid regexp. This field will be always invalid.`);
                            this.setFieldInvalid(field, fieldRule);
                            break;
                        }
                        const str = String(elemValue);
                        if ("" !== str && !regexp.test(str)) this.setFieldInvalid(field, fieldRule);
                        break;
                    }

                  case Rules.MinFilesCount:
                    if (void 0 === ruleValue) {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if ("number" !== typeof ruleValue) {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if (Number.isFinite(null == elemValue ? void 0 : elemValue.length) && elemValue.length < ruleValue) {
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    break;

                  case Rules.MaxFilesCount:
                    if (void 0 === ruleValue) {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if ("number" !== typeof ruleValue) {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if (Number.isFinite(null == elemValue ? void 0 : elemValue.length) && elemValue.length > ruleValue) {
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    break;

                  case Rules.Files:
                    {
                        if (void 0 === ruleValue) {
                            console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
                            this.setFieldInvalid(field, fieldRule);
                            return;
                        }
                        if ("object" !== typeof ruleValue) {
                            console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be an object. This field will be always invalid.`);
                            this.setFieldInvalid(field, fieldRule);
                            return;
                        }
                        const filesConfig = ruleValue.files;
                        if ("object" !== typeof filesConfig) {
                            console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be an object with files array. This field will be always invalid.`);
                            this.setFieldInvalid(field, fieldRule);
                            return;
                        }
                        const isFilePropsInvalid = (file, fileConfig) => {
                            const minSizeInvalid = Number.isFinite(fileConfig.minSize) && file.size < fileConfig.minSize;
                            const maxSizeInvalid = Number.isFinite(fileConfig.maxSize) && file.size > fileConfig.maxSize;
                            const nameInvalid = Array.isArray(fileConfig.names) && !fileConfig.names.includes(file.name);
                            const extInvalid = Array.isArray(fileConfig.extensions) && !fileConfig.extensions.includes(file.name.split(".")[file.name.split(".").length - 1]);
                            const typeInvalid = Array.isArray(fileConfig.types) && !fileConfig.types.includes(file.type);
                            return minSizeInvalid || maxSizeInvalid || nameInvalid || extInvalid || typeInvalid;
                        };
                        if ("object" === typeof elemValue && null !== elemValue) for (let fileIdx = 0, len = elemValue.length; fileIdx < len; ++fileIdx) {
                            const file = elemValue.item(fileIdx);
                            if (!file) {
                                this.setFieldInvalid(field, fieldRule);
                                break;
                            }
                            const filesInvalid = isFilePropsInvalid(file, filesConfig);
                            if (filesInvalid) {
                                this.setFieldInvalid(field, fieldRule);
                                break;
                            }
                        }
                        break;
                    }

                  default:
                    {
                        if ("function" !== typeof fieldRule.validator) {
                            console.error(`Validator for custom rule for [${field}] field should be a function. This field will be always invalid.`);
                            this.setFieldInvalid(field, fieldRule);
                            return;
                        }
                        const result = fieldRule.validator(elemValue, this.fields);
                        if ("boolean" !== typeof result && "function" !== typeof result) console.error(`Validator return value for [${field}] field should be boolean or function. It will be cast to boolean.`);
                        if ("function" === typeof result) if (afterInputChanged) this.fields[field].asyncCheckPending = true; else {
                            this.fields[field].asyncCheckPending = false;
                            const promise = result();
                            if (!isPromise(promise)) {
                                console.error(`Validator function for custom rule for [${field}] field should return a Promise. This field will be always invalid.`);
                                this.setFieldInvalid(field, fieldRule);
                                return;
                            }
                            return promise.then((resp => {
                                if (!resp) this.setFieldInvalid(field, fieldRule);
                            })).catch((() => {
                                this.setFieldInvalid(field, fieldRule);
                            }));
                        }
                        if (!result) this.setFieldInvalid(field, fieldRule);
                    }
                }
            }
            validateField(fieldName, afterInputChanged = false) {
                var _a;
                const field = this.fields[fieldName];
                field.isValid = true;
                const promises = [];
                [ ...field.rules ].reverse().forEach((rule => {
                    const res = this.validateFieldRule(fieldName, field.elem, rule, afterInputChanged);
                    if (isPromise(res)) promises.push(res);
                }));
                if (field.isValid) this.setFieldValid(fieldName, null == (_a = field.config) ? void 0 : _a.successMessage);
                return Promise.allSettled(promises);
            }
            revalidateField(field) {
                if ("string" !== typeof field) throw Error(`Field selector is not valid. Please specify a string selector.`);
                if (!this.fields[field]) {
                    console.error(`Field not found. Check the field selector.`);
                    return Promise.reject();
                }
                return new Promise((resolve => {
                    this.validateField(field, true).finally((() => {
                        this.clearFieldStyle(field);
                        this.clearFieldLabel(field);
                        this.renderFieldError(field);
                        resolve(!!this.fields[field].isValid);
                    }));
                }));
            }
            validateGroup(groupName, group) {
                const promises = [];
                [ ...group.rules ].reverse().forEach((rule => {
                    const res = this.validateGroupRule(groupName, group.elems, rule);
                    if (isPromise(res)) promises.push(res);
                }));
                return Promise.allSettled(promises);
            }
            focusInvalidField() {
                for (const fieldName in this.fields) {
                    const field = this.fields[fieldName];
                    if (!field.isValid) {
                        setTimeout((() => field.elem.focus()), 0);
                        break;
                    }
                }
            }
            afterSubmitValidation(forceRevalidation = false) {
                this.renderErrors(forceRevalidation);
                if (this.globalConfig.focusInvalidField) this.focusInvalidField();
            }
            validate(forceRevalidation = false) {
                return new Promise((resolve => {
                    const promises = [];
                    Object.keys(this.fields).forEach((fieldName => {
                        const promise = this.validateField(fieldName);
                        if (isPromise(promise)) promises.push(promise);
                    }));
                    Object.keys(this.groupFields).forEach((groupName => {
                        const group = this.groupFields[groupName];
                        const promise = this.validateGroup(groupName, group);
                        if (isPromise(promise)) promises.push(promise);
                    }));
                    if (promises.length) Promise.allSettled(promises).then((() => {
                        this.afterSubmitValidation(forceRevalidation);
                        resolve(true);
                    })); else {
                        this.afterSubmitValidation(forceRevalidation);
                        resolve(false);
                    }
                }));
            }
            revalidate() {
                return new Promise((resolve => {
                    this.validateHandler(void 0, true).finally((() => {
                        if (this.globalConfig.focusInvalidField) this.focusInvalidField();
                        resolve(this.isValid);
                    }));
                }));
            }
            validateHandler(ev, forceRevalidation = false) {
                if (this.globalConfig.lockForm) this.lockForm();
                return this.validate(forceRevalidation).finally((() => {
                    var _a, _b;
                    if (this.globalConfig.lockForm) this.unlockForm();
                    if (this.isValid) null == (_a = this.onSuccessCallback) ? void 0 : _a.call(this, ev); else null == (_b = this.onFailCallback) ? void 0 : _b.call(this, this.fields, this.groupFields);
                }));
            }
            setForm(form) {
                this.form = form;
                this.form.setAttribute("novalidate", "novalidate");
                this.removeListener("submit", this.form, this.formSubmitHandler);
                this.addListener("submit", this.form, this.formSubmitHandler);
            }
            addListener(type, elem, handler) {
                elem.addEventListener(type, handler);
                this.eventListeners.push({
                    type,
                    elem,
                    func: handler
                });
            }
            removeListener(type, elem, handler) {
                elem.removeEventListener(type, handler);
                this.eventListeners = this.eventListeners.filter((item => item.type !== type || item.elem !== elem));
            }
            addField(field, rules, config) {
                if ("string" !== typeof field) throw Error(`Field selector is not valid. Please specify a string selector.`);
                const elem = this.form.querySelector(field);
                if (!elem) throw Error(`Field with ${field} selector not found! Please check the field selector.`);
                if (!Array.isArray(rules) || !rules.length) throw Error(`Rules argument for the field [${field}] should be an array and should contain at least 1 element.`);
                rules.forEach((item => {
                    if (!("rule" in item || "validator" in item || "plugin" in item)) throw Error(`Rules argument for the field [${field}] must contain at least one rule or validator property.`);
                    if (!item.validator && !item.plugin && (!item.rule || !Object.values(Rules).includes(item.rule))) throw Error(`Rule should be one of these types: ${Object.values(Rules).join(", ")}. Provided value: ${item.rule}`);
                }));
                this.fields[field] = {
                    elem,
                    rules,
                    isValid: void 0,
                    config
                };
                this.setListeners(elem);
                if (this.isSubmitted) this.validate();
                return this;
            }
            removeField(field) {
                if ("string" !== typeof field) throw Error(`Field selector is not valid. Please specify a string selector.`);
                if (!this.fields[field]) {
                    console.error(`Field not found. Check the field selector.`);
                    return this;
                }
                const type = this.getListenerType(this.fields[field].elem.type);
                this.removeListener(type, this.fields[field].elem, this.handlerChange);
                this.clearErrors();
                delete this.fields[field];
                return this;
            }
            removeGroup(group) {
                if ("string" !== typeof group) throw Error(`Group selector is not valid. Please specify a string selector.`);
                if (!this.groupFields[group]) {
                    console.error(`Group not found. Check the group selector.`);
                    return this;
                }
                this.groupFields[group].elems.forEach((elem => {
                    const type = this.getListenerType(elem.type);
                    this.removeListener(type, elem, this.handlerChange);
                }));
                this.clearErrors();
                delete this.groupFields[group];
                return this;
            }
            addRequiredGroup(groupField, errorMessage, config, successMessage) {
                if ("string" !== typeof groupField) throw Error(`Group selector is not valid. Please specify a string selector.`);
                const elem = this.form.querySelector(groupField);
                if (!elem) throw Error(`Group with ${groupField} selector not found! Please check the group selector.`);
                const inputs = elem.querySelectorAll("input");
                const childrenInputs = Array.from(inputs).filter((input => {
                    const parent = getClosestParent(this.groupFields, getNodeParents(input));
                    if (!parent) return true;
                    return parent[1].elems.find((elem2 => elem2 !== input));
                }));
                this.groupFields[groupField] = {
                    rules: [ {
                        rule: GroupRules.Required,
                        errorMessage,
                        successMessage
                    } ],
                    groupElem: elem,
                    elems: childrenInputs,
                    isDirty: false,
                    isValid: void 0,
                    config
                };
                inputs.forEach((input => {
                    this.setListeners(input);
                }));
                return this;
            }
            getListenerType(type) {
                switch (type) {
                  case "checkbox":
                  case "select-one":
                  case "file":
                  case "radio":
                    return "change";

                  default:
                    return "input";
                }
            }
            setListeners(elem) {
                const type = this.getListenerType(elem.type);
                this.removeListener(type, elem, this.handlerChange);
                this.addListener(type, elem, this.handlerChange);
            }
            clearFieldLabel(fieldName) {
                var _a, _b;
                null == (_a = this.errorLabels[fieldName]) ? void 0 : _a.remove();
                null == (_b = this.successLabels[fieldName]) ? void 0 : _b.remove();
            }
            clearFieldStyle(fieldName) {
                var _a, _b, _c, _d;
                const field = this.fields[fieldName];
                const errorStyle = (null == (_a = field.config) ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
                Object.keys(errorStyle).forEach((key => {
                    field.elem.style[key] = "";
                }));
                const successStyle = (null == (_b = field.config) ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
                Object.keys(successStyle).forEach((key => {
                    field.elem.style[key] = "";
                }));
                field.elem.classList.remove(...getClassList((null == (_c = field.config) ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass), ...getClassList((null == (_d = field.config) ? void 0 : _d.successFieldCssClass) || this.globalConfig.successFieldCssClass));
            }
            clearErrors() {
                var _a, _b;
                Object.keys(this.errorLabels).forEach((key => this.errorLabels[key].remove()));
                Object.keys(this.successLabels).forEach((key => this.successLabels[key].remove()));
                for (const fieldName in this.fields) this.clearFieldStyle(fieldName);
                for (const groupName in this.groupFields) {
                    const group = this.groupFields[groupName];
                    const errorStyle = (null == (_a = group.config) ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
                    Object.keys(errorStyle).forEach((key => {
                        group.elems.forEach((elem => {
                            var _a2;
                            elem.style[key] = "";
                            elem.classList.remove(...getClassList((null == (_a2 = group.config) ? void 0 : _a2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
                        }));
                    }));
                    const successStyle = (null == (_b = group.config) ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
                    Object.keys(successStyle).forEach((key => {
                        group.elems.forEach((elem => {
                            var _a2;
                            elem.style[key] = "";
                            elem.classList.remove(...getClassList((null == (_a2 = group.config) ? void 0 : _a2.successFieldCssClass) || this.globalConfig.successFieldCssClass));
                        }));
                    }));
                }
                this.tooltips = [];
            }
            isTooltip() {
                return !!this.globalConfig.tooltip;
            }
            lockForm() {
                const elems = this.form.querySelectorAll("input, textarea, button, select");
                for (let i = 0, len = elems.length; i < len; ++i) {
                    elems[i].setAttribute("data-just-validate-fallback-disabled", elems[i].disabled ? "true" : "false");
                    elems[i].setAttribute("disabled", "disabled");
                    elems[i].style.pointerEvents = "none";
                    elems[i].style.webkitFilter = "grayscale(100%)";
                    elems[i].style.filter = "grayscale(100%)";
                }
            }
            unlockForm() {
                const elems = this.form.querySelectorAll("input, textarea, button, select");
                for (let i = 0, len = elems.length; i < len; ++i) {
                    if ("true" !== elems[i].getAttribute("data-just-validate-fallback-disabled")) elems[i].removeAttribute("disabled");
                    elems[i].style.pointerEvents = "";
                    elems[i].style.webkitFilter = "";
                    elems[i].style.filter = "";
                }
            }
            renderTooltip(elem, errorLabel, position) {
                var _a;
                const {top, left, width, height} = elem.getBoundingClientRect();
                const errorLabelRect = errorLabel.getBoundingClientRect();
                const pos = position || (null == (_a = this.globalConfig.tooltip) ? void 0 : _a.position);
                switch (pos) {
                  case "left":
                    errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
                    errorLabel.style.left = `${left - errorLabelRect.width - TOOLTIP_ARROW_HEIGHT}px`;
                    break;

                  case "top":
                    errorLabel.style.top = `${top - errorLabelRect.height - TOOLTIP_ARROW_HEIGHT}px`;
                    errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
                    break;

                  case "right":
                    errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
                    errorLabel.style.left = `${left + width + TOOLTIP_ARROW_HEIGHT}px`;
                    break;

                  case "bottom":
                    errorLabel.style.top = `${top + height + TOOLTIP_ARROW_HEIGHT}px`;
                    errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
                    break;
                }
                errorLabel.dataset.direction = pos;
                const refresh = () => {
                    this.renderTooltip(elem, errorLabel, position);
                };
                return {
                    refresh
                };
            }
            createErrorLabelElem(name, errorMessage, config) {
                const errorLabel = document.createElement("div");
                errorLabel.innerHTML = errorMessage;
                const customErrorLabelStyle = this.isTooltip() ? null == config ? void 0 : config.errorLabelStyle : (null == config ? void 0 : config.errorLabelStyle) || this.globalConfig.errorLabelStyle;
                Object.assign(errorLabel.style, customErrorLabelStyle);
                errorLabel.classList.add(...getClassList((null == config ? void 0 : config.errorLabelCssClass) || this.globalConfig.errorLabelCssClass), "just-validate-error-label");
                if (this.isTooltip()) errorLabel.dataset.tooltip = "true";
                if (this.globalConfig.testingMode) errorLabel.dataset.testId = `error-label-${name}`;
                this.errorLabels[name] = errorLabel;
                return errorLabel;
            }
            createSuccessLabelElem(name, successMessage, config) {
                if (void 0 === successMessage) return null;
                const successLabel = document.createElement("div");
                successLabel.innerHTML = successMessage;
                const customSuccessLabelStyle = (null == config ? void 0 : config.successLabelStyle) || this.globalConfig.successLabelStyle;
                Object.assign(successLabel.style, customSuccessLabelStyle);
                successLabel.classList.add(...getClassList((null == config ? void 0 : config.successLabelCssClass) || this.globalConfig.successLabelCssClass), "just-validate-success-label");
                if (this.globalConfig.testingMode) successLabel.dataset.testId = `success-label-${name}`;
                this.successLabels[name] = successLabel;
                return successLabel;
            }
            renderErrorsContainer(label, errorsContainer) {
                const container = errorsContainer || this.globalConfig.errorsContainer;
                if ("string" === typeof container) {
                    const elem = this.form.querySelector(container);
                    if (elem) {
                        elem.appendChild(label);
                        return true;
                    } else console.error(`Error container with ${container} selector not found. Errors will be rendered as usual`);
                }
                if (container instanceof Element) {
                    container.appendChild(label);
                    return true;
                }
                if (void 0 !== container) console.error(`Error container not found. It should be a string or existing Element. Errors will be rendered as usual`);
                return false;
            }
            renderGroupLabel(elem, label, errorsContainer, isSuccess) {
                if (!isSuccess) {
                    const renderedInErrorsContainer = this.renderErrorsContainer(label, errorsContainer);
                    if (renderedInErrorsContainer) return;
                }
                elem.appendChild(label);
            }
            renderFieldLabel(elem, label, errorsContainer, isSuccess) {
                var _a, _b, _c, _d, _e, _f, _g;
                if (!isSuccess) {
                    const renderedInErrorsContainer = this.renderErrorsContainer(label, errorsContainer);
                    if (renderedInErrorsContainer) return;
                }
                if ("checkbox" === elem.type || "radio" === elem.type) {
                    const labelElem = document.querySelector(`label[for="${elem.getAttribute("id")}"]`);
                    if ("label" === (null == (_b = null == (_a = elem.parentElement) ? void 0 : _a.tagName) ? void 0 : _b.toLowerCase())) null == (_d = null == (_c = elem.parentElement) ? void 0 : _c.parentElement) ? void 0 : _d.appendChild(label); else if (labelElem) null == (_e = labelElem.parentElement) ? void 0 : _e.appendChild(label); else null == (_f = elem.parentElement) ? void 0 : _f.appendChild(label);
                } else null == (_g = elem.parentElement) ? void 0 : _g.appendChild(label);
            }
            showLabels(fields, isError) {
                Object.keys(fields).forEach(((fieldName, i) => {
                    const error = fields[fieldName];
                    const field = this.fields[fieldName];
                    field.isValid = !isError;
                    this.clearFieldStyle(fieldName);
                    this.clearFieldLabel(fieldName);
                    this.renderFieldError(fieldName, error);
                    if (0 === i && this.globalConfig.focusInvalidField) setTimeout((() => field.elem.focus()), 0);
                }));
            }
            showErrors(fields) {
                if ("object" !== typeof fields) throw Error("[showErrors]: Errors should be an object with key: value format");
                this.showLabels(fields, true);
            }
            showSuccessLabels(fields) {
                if ("object" !== typeof fields) throw Error("[showSuccessLabels]: Labels should be an object with key: value format");
                this.showLabels(fields, false);
            }
            renderFieldError(fieldName, message) {
                var _a, _b, _c, _d, _e, _f;
                const field = this.fields[fieldName];
                if (field.isValid) {
                    if (!field.asyncCheckPending) {
                        const successLabel = this.createSuccessLabelElem(fieldName, void 0 !== message ? message : field.successMessage, field.config);
                        if (successLabel) this.renderFieldLabel(field.elem, successLabel, null == (_a = field.config) ? void 0 : _a.errorsContainer, true);
                        field.elem.classList.add(...getClassList((null == (_b = field.config) ? void 0 : _b.successFieldCssClass) || this.globalConfig.successFieldCssClass));
                    }
                    return;
                }
                this.isValid = false;
                field.elem.classList.add(...getClassList((null == (_c = field.config) ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
                const errorLabel = this.createErrorLabelElem(fieldName, void 0 !== message ? message : field.errorMessage, field.config);
                this.renderFieldLabel(field.elem, errorLabel, null == (_d = field.config) ? void 0 : _d.errorsContainer);
                if (this.isTooltip()) this.tooltips.push(this.renderTooltip(field.elem, errorLabel, null == (_f = null == (_e = field.config) ? void 0 : _e.tooltip) ? void 0 : _f.position));
            }
            renderErrors(forceRevalidation = false) {
                var _a, _b, _c, _d;
                if (!this.isSubmitted && !forceRevalidation) return;
                this.clearErrors();
                this.isValid = true;
                for (const groupName in this.groupFields) {
                    const group = this.groupFields[groupName];
                    if (group.isValid) {
                        group.elems.forEach((elem => {
                            var _a2, _b2;
                            Object.assign(elem.style, (null == (_a2 = group.config) ? void 0 : _a2.successFieldStyle) || this.globalConfig.successFieldStyle);
                            elem.classList.add(...getClassList((null == (_b2 = group.config) ? void 0 : _b2.successFieldCssClass) || this.globalConfig.successFieldCssClass));
                        }));
                        const successLabel = this.createSuccessLabelElem(groupName, group.successMessage, group.config);
                        if (successLabel) this.renderGroupLabel(group.groupElem, successLabel, null == (_a = group.config) ? void 0 : _a.errorsContainer, true);
                        continue;
                    }
                    this.isValid = false;
                    group.elems.forEach((elem => {
                        var _a2, _b2;
                        Object.assign(elem.style, (null == (_a2 = group.config) ? void 0 : _a2.errorFieldStyle) || this.globalConfig.errorFieldStyle);
                        elem.classList.add(...getClassList((null == (_b2 = group.config) ? void 0 : _b2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
                    }));
                    const errorLabel = this.createErrorLabelElem(groupName, group.errorMessage, group.config);
                    this.renderGroupLabel(group.groupElem, errorLabel, null == (_b = group.config) ? void 0 : _b.errorsContainer);
                    if (this.isTooltip()) this.tooltips.push(this.renderTooltip(group.groupElem, errorLabel, null == (_d = null == (_c = group.config) ? void 0 : _c.tooltip) ? void 0 : _d.position));
                }
                for (const fieldName in this.fields) this.renderFieldError(fieldName);
            }
            destroy() {
                this.eventListeners.forEach((event => {
                    this.removeListener(event.type, event.elem, event.func);
                }));
                Object.keys(this.customStyleTags).forEach((key => {
                    this.customStyleTags[key].remove();
                }));
                this.clearErrors();
                if (this.globalConfig.lockForm) this.unlockForm();
            }
            refresh() {
                this.destroy();
                if (!this.form) console.error("Cannot initialize the library! Form is not defined"); else {
                    this.initialize(this.form, this.globalConfig);
                    Object.keys(this.fields).forEach((key => {
                        this.addField(key, [ ...this.fields[key].rules ], this.fields[key].config);
                    }));
                }
            }
            setCurrentLocale(locale) {
                if ("string" !== typeof locale && void 0 !== locale) {
                    console.error("Current locale should be a string");
                    return;
                }
                this.currentLocale = locale;
                if (this.isSubmitted) this.validate();
            }
            onSuccess(callback) {
                this.onSuccessCallback = callback;
                return this;
            }
            onFail(callback) {
                this.onFailCallback = callback;
                return this;
            }
        }
        function bind(fn, thisArg) {
            return function wrap() {
                return fn.apply(thisArg, arguments);
            };
        }
        const {toString: utils_toString} = Object.prototype;
        const {getPrototypeOf} = Object;
        const kindOf = (cache => thing => {
            const str = utils_toString.call(thing);
            return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
        })(Object.create(null));
        const kindOfTest = type => {
            type = type.toLowerCase();
            return thing => kindOf(thing) === type;
        };
        const typeOfTest = type => thing => typeof thing === type;
        const {isArray} = Array;
        const isUndefined = typeOfTest("undefined");
        function isBuffer(val) {
            return null !== val && !isUndefined(val) && null !== val.constructor && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
        }
        const isArrayBuffer = kindOfTest("ArrayBuffer");
        function isArrayBufferView(val) {
            let result;
            if ("undefined" !== typeof ArrayBuffer && ArrayBuffer.isView) result = ArrayBuffer.isView(val); else result = val && val.buffer && isArrayBuffer(val.buffer);
            return result;
        }
        const isString = typeOfTest("string");
        const isFunction = typeOfTest("function");
        const utils_isNumber = typeOfTest("number");
        const lib_utils_isObject = thing => null !== thing && "object" === typeof thing;
        const isBoolean = thing => true === thing || false === thing;
        const isPlainObject = val => {
            if ("object" !== kindOf(val)) return false;
            const prototype = getPrototypeOf(val);
            return (null === prototype || prototype === Object.prototype || null === Object.getPrototypeOf(prototype)) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
        };
        const isDate = kindOfTest("Date");
        const isFile = kindOfTest("File");
        const isBlob = kindOfTest("Blob");
        const isFileList = kindOfTest("FileList");
        const isStream = val => lib_utils_isObject(val) && isFunction(val.pipe);
        const isFormData = thing => {
            const pattern = "[object FormData]";
            return thing && ("function" === typeof FormData && thing instanceof FormData || utils_toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
        };
        const isURLSearchParams = kindOfTest("URLSearchParams");
        const trim = str => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        function forEach(obj, fn, {allOwnKeys = false} = {}) {
            if (null === obj || "undefined" === typeof obj) return;
            let i;
            let l;
            if ("object" !== typeof obj) obj = [ obj ];
            if (isArray(obj)) for (i = 0, l = obj.length; i < l; i++) fn.call(null, obj[i], i, obj); else {
                const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
                const len = keys.length;
                let key;
                for (i = 0; i < len; i++) {
                    key = keys[i];
                    fn.call(null, obj[key], key, obj);
                }
            }
        }
        function merge() {
            const result = {};
            const assignValue = (val, key) => {
                if (isPlainObject(result[key]) && isPlainObject(val)) result[key] = merge(result[key], val); else if (isPlainObject(val)) result[key] = merge({}, val); else if (isArray(val)) result[key] = val.slice(); else result[key] = val;
            };
            for (let i = 0, l = arguments.length; i < l; i++) arguments[i] && forEach(arguments[i], assignValue);
            return result;
        }
        const lib_utils_extend = (a, b, thisArg, {allOwnKeys} = {}) => {
            forEach(b, ((val, key) => {
                if (thisArg && isFunction(val)) a[key] = bind(val, thisArg); else a[key] = val;
            }), {
                allOwnKeys
            });
            return a;
        };
        const stripBOM = content => {
            if (65279 === content.charCodeAt(0)) content = content.slice(1);
            return content;
        };
        const inherits = (constructor, superConstructor, props, descriptors) => {
            constructor.prototype = Object.create(superConstructor.prototype, descriptors);
            constructor.prototype.constructor = constructor;
            Object.defineProperty(constructor, "super", {
                value: superConstructor.prototype
            });
            props && Object.assign(constructor.prototype, props);
        };
        const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
            let props;
            let i;
            let prop;
            const merged = {};
            destObj = destObj || {};
            if (null == sourceObj) return destObj;
            do {
                props = Object.getOwnPropertyNames(sourceObj);
                i = props.length;
                while (i-- > 0) {
                    prop = props[i];
                    if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                        destObj[prop] = sourceObj[prop];
                        merged[prop] = true;
                    }
                }
                sourceObj = false !== filter && getPrototypeOf(sourceObj);
            } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
            return destObj;
        };
        const endsWith = (str, searchString, position) => {
            str = String(str);
            if (void 0 === position || position > str.length) position = str.length;
            position -= searchString.length;
            const lastIndex = str.indexOf(searchString, position);
            return -1 !== lastIndex && lastIndex === position;
        };
        const toArray = thing => {
            if (!thing) return null;
            if (isArray(thing)) return thing;
            let i = thing.length;
            if (!utils_isNumber(i)) return null;
            const arr = new Array(i);
            while (i-- > 0) arr[i] = thing[i];
            return arr;
        };
        const isTypedArray = (TypedArray => thing => TypedArray && thing instanceof TypedArray)("undefined" !== typeof Uint8Array && getPrototypeOf(Uint8Array));
        const forEachEntry = (obj, fn) => {
            const generator = obj && obj[Symbol.iterator];
            const iterator = generator.call(obj);
            let result;
            while ((result = iterator.next()) && !result.done) {
                const pair = result.value;
                fn.call(obj, pair[0], pair[1]);
            }
        };
        const matchAll = (regExp, str) => {
            let matches;
            const arr = [];
            while (null !== (matches = regExp.exec(str))) arr.push(matches);
            return arr;
        };
        const isHTMLForm = kindOfTest("HTMLFormElement");
        const utils_toCamelCase = str => str.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, (function replacer(m, p1, p2) {
            return p1.toUpperCase() + p2;
        }));
        const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);
        const isRegExp = kindOfTest("RegExp");
        const reduceDescriptors = (obj, reducer) => {
            const descriptors = Object.getOwnPropertyDescriptors(obj);
            const reducedDescriptors = {};
            forEach(descriptors, ((descriptor, name) => {
                if (false !== reducer(descriptor, name, obj)) reducedDescriptors[name] = descriptor;
            }));
            Object.defineProperties(obj, reducedDescriptors);
        };
        const freezeMethods = obj => {
            reduceDescriptors(obj, ((descriptor, name) => {
                const value = obj[name];
                if (!isFunction(value)) return;
                descriptor.enumerable = false;
                if ("writable" in descriptor) {
                    descriptor.writable = false;
                    return;
                }
                if (!descriptor.set) descriptor.set = () => {
                    throw Error("Can not read-only method '" + name + "'");
                };
            }));
        };
        const toObjectSet = (arrayOrString, delimiter) => {
            const obj = {};
            const define = arr => {
                arr.forEach((value => {
                    obj[value] = true;
                }));
            };
            isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
            return obj;
        };
        const noop = () => {};
        const toFiniteNumber = (value, defaultValue) => {
            value = +value;
            return Number.isFinite(value) ? value : defaultValue;
        };
        const utils = {
            isArray,
            isArrayBuffer,
            isBuffer,
            isFormData,
            isArrayBufferView,
            isString,
            isNumber: utils_isNumber,
            isBoolean,
            isObject: lib_utils_isObject,
            isPlainObject,
            isUndefined,
            isDate,
            isFile,
            isBlob,
            isRegExp,
            isFunction,
            isStream,
            isURLSearchParams,
            isTypedArray,
            isFileList,
            forEach,
            merge,
            extend: lib_utils_extend,
            trim,
            stripBOM,
            inherits,
            toFlatObject,
            kindOf,
            kindOfTest,
            endsWith,
            toArray,
            forEachEntry,
            matchAll,
            isHTMLForm,
            hasOwnProperty: utils_hasOwnProperty,
            hasOwnProp: utils_hasOwnProperty,
            reduceDescriptors,
            freezeMethods,
            toObjectSet,
            toCamelCase: utils_toCamelCase,
            noop,
            toFiniteNumber
        };
        function AxiosError(message, code, config, request, response) {
            Error.call(this);
            if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor); else this.stack = (new Error).stack;
            this.message = message;
            this.name = "AxiosError";
            code && (this.code = code);
            config && (this.config = config);
            request && (this.request = request);
            response && (this.response = response);
        }
        utils.inherits(AxiosError, Error, {
            toJSON: function toJSON() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code,
                    status: this.response && this.response.status ? this.response.status : null
                };
            }
        });
        const AxiosError_prototype = AxiosError.prototype;
        const descriptors = {};
        [ "ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL" ].forEach((code => {
            descriptors[code] = {
                value: code
            };
        }));
        Object.defineProperties(AxiosError, descriptors);
        Object.defineProperty(AxiosError_prototype, "isAxiosError", {
            value: true
        });
        AxiosError.from = (error, code, config, request, response, customProps) => {
            const axiosError = Object.create(AxiosError_prototype);
            utils.toFlatObject(error, axiosError, (function filter(obj) {
                return obj !== Error.prototype;
            }), (prop => "isAxiosError" !== prop));
            AxiosError.call(axiosError, error.message, code, config, request, response);
            axiosError.cause = error;
            axiosError.name = error.name;
            customProps && Object.assign(axiosError, customProps);
            return axiosError;
        };
        const core_AxiosError = AxiosError;
        var lib_browser = __webpack_require__(230);
        const classes_FormData = lib_browser;
        function isVisitable(thing) {
            return utils.isPlainObject(thing) || utils.isArray(thing);
        }
        function removeBrackets(key) {
            return utils.endsWith(key, "[]") ? key.slice(0, -2) : key;
        }
        function renderKey(path, key, dots) {
            if (!path) return key;
            return path.concat(key).map((function each(token, i) {
                token = removeBrackets(token);
                return !dots && i ? "[" + token + "]" : token;
            })).join(dots ? "." : "");
        }
        function isFlatArray(arr) {
            return utils.isArray(arr) && !arr.some(isVisitable);
        }
        const predicates = utils.toFlatObject(utils, {}, null, (function filter(prop) {
            return /^is[A-Z]/.test(prop);
        }));
        function isSpecCompliant(thing) {
            return thing && utils.isFunction(thing.append) && "FormData" === thing[Symbol.toStringTag] && thing[Symbol.iterator];
        }
        function toFormData(obj, formData, options) {
            if (!utils.isObject(obj)) throw new TypeError("target must be an object");
            formData = formData || new (classes_FormData || FormData);
            options = utils.toFlatObject(options, {
                metaTokens: true,
                dots: false,
                indexes: false
            }, false, (function defined(option, source) {
                return !utils.isUndefined(source[option]);
            }));
            const metaTokens = options.metaTokens;
            const visitor = options.visitor || defaultVisitor;
            const dots = options.dots;
            const indexes = options.indexes;
            const _Blob = options.Blob || "undefined" !== typeof Blob && Blob;
            const useBlob = _Blob && isSpecCompliant(formData);
            if (!utils.isFunction(visitor)) throw new TypeError("visitor must be a function");
            function convertValue(value) {
                if (null === value) return "";
                if (utils.isDate(value)) return value.toISOString();
                if (!useBlob && utils.isBlob(value)) throw new core_AxiosError("Blob is not supported. Use a Buffer instead.");
                if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) return useBlob && "function" === typeof Blob ? new Blob([ value ]) : Buffer.from(value);
                return value;
            }
            function defaultVisitor(value, key, path) {
                let arr = value;
                if (value && !path && "object" === typeof value) if (utils.endsWith(key, "{}")) {
                    key = metaTokens ? key : key.slice(0, -2);
                    value = JSON.stringify(value);
                } else if (utils.isArray(value) && isFlatArray(value) || utils.isFileList(value) || utils.endsWith(key, "[]") && (arr = utils.toArray(value))) {
                    key = removeBrackets(key);
                    arr.forEach((function each(el, index) {
                        !(utils.isUndefined(el) || null === el) && formData.append(true === indexes ? renderKey([ key ], index, dots) : null === indexes ? key : key + "[]", convertValue(el));
                    }));
                    return false;
                }
                if (isVisitable(value)) return true;
                formData.append(renderKey(path, key, dots), convertValue(value));
                return false;
            }
            const stack = [];
            const exposedHelpers = Object.assign(predicates, {
                defaultVisitor,
                convertValue,
                isVisitable
            });
            function build(value, path) {
                if (utils.isUndefined(value)) return;
                if (-1 !== stack.indexOf(value)) throw Error("Circular reference detected in " + path.join("."));
                stack.push(value);
                utils.forEach(value, (function each(el, key) {
                    const result = !(utils.isUndefined(el) || null === el) && visitor.call(formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers);
                    if (true === result) build(el, path ? path.concat(key) : [ key ]);
                }));
                stack.pop();
            }
            if (!utils.isObject(obj)) throw new TypeError("data must be an object");
            build(obj);
            return formData;
        }
        const helpers_toFormData = toFormData;
        function encode(str) {
            const charMap = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+",
                "%00": "\0"
            };
            return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, (function replacer(match) {
                return charMap[match];
            }));
        }
        function AxiosURLSearchParams(params, options) {
            this._pairs = [];
            params && helpers_toFormData(params, this, options);
        }
        const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;
        AxiosURLSearchParams_prototype.append = function append(name, value) {
            this._pairs.push([ name, value ]);
        };
        AxiosURLSearchParams_prototype.toString = function toString(encoder) {
            const _encode = encoder ? function(value) {
                return encoder.call(this, value, encode);
            } : encode;
            return this._pairs.map((function each(pair) {
                return _encode(pair[0]) + "=" + _encode(pair[1]);
            }), "").join("&");
        };
        const helpers_AxiosURLSearchParams = AxiosURLSearchParams;
        function buildURL_encode(val) {
            return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        function buildURL(url, params, options) {
            if (!params) return url;
            const _encode = options && options.encode || buildURL_encode;
            const serializeFn = options && options.serialize;
            let serializedParams;
            if (serializeFn) serializedParams = serializeFn(params, options); else serializedParams = utils.isURLSearchParams(params) ? params.toString() : new helpers_AxiosURLSearchParams(params, options).toString(_encode);
            if (serializedParams) {
                const hashmarkIndex = url.indexOf("#");
                if (-1 !== hashmarkIndex) url = url.slice(0, hashmarkIndex);
                url += (-1 === url.indexOf("?") ? "?" : "&") + serializedParams;
            }
            return url;
        }
        class InterceptorManager {
            constructor() {
                this.handlers = [];
            }
            use(fulfilled, rejected, options) {
                this.handlers.push({
                    fulfilled,
                    rejected,
                    synchronous: options ? options.synchronous : false,
                    runWhen: options ? options.runWhen : null
                });
                return this.handlers.length - 1;
            }
            eject(id) {
                if (this.handlers[id]) this.handlers[id] = null;
            }
            clear() {
                if (this.handlers) this.handlers = [];
            }
            forEach(fn) {
                utils.forEach(this.handlers, (function forEachHandler(h) {
                    if (null !== h) fn(h);
                }));
            }
        }
        const core_InterceptorManager = InterceptorManager;
        const defaults_transitional = {
            silentJSONParsing: true,
            forcedJSONParsing: true,
            clarifyTimeoutError: false
        };
        const classes_URLSearchParams = "undefined" !== typeof URLSearchParams ? URLSearchParams : helpers_AxiosURLSearchParams;
        const browser_classes_FormData = FormData;
        const isStandardBrowserEnv = (() => {
            let product;
            if ("undefined" !== typeof navigator && ("ReactNative" === (product = navigator.product) || "NativeScript" === product || "NS" === product)) return false;
            return "undefined" !== typeof window && "undefined" !== typeof document;
        })();
        const platform_browser = {
            isBrowser: true,
            classes: {
                URLSearchParams: classes_URLSearchParams,
                FormData: browser_classes_FormData,
                Blob
            },
            isStandardBrowserEnv,
            protocols: [ "http", "https", "file", "blob", "url", "data" ]
        };
        function toURLEncodedForm(data, options) {
            return helpers_toFormData(data, new platform_browser.classes.URLSearchParams, Object.assign({
                visitor: function(value, key, path, helpers) {
                    if (platform_browser.isNode && utils.isBuffer(value)) {
                        this.append(key, value.toString("base64"));
                        return false;
                    }
                    return helpers.defaultVisitor.apply(this, arguments);
                }
            }, options));
        }
        function parsePropPath(name) {
            return utils.matchAll(/\w+|\[(\w*)]/g, name).map((match => "[]" === match[0] ? "" : match[1] || match[0]));
        }
        function arrayToObject(arr) {
            const obj = {};
            const keys = Object.keys(arr);
            let i;
            const len = keys.length;
            let key;
            for (i = 0; i < len; i++) {
                key = keys[i];
                obj[key] = arr[key];
            }
            return obj;
        }
        function formDataToJSON(formData) {
            function buildPath(path, value, target, index) {
                let name = path[index++];
                const isNumericKey = Number.isFinite(+name);
                const isLast = index >= path.length;
                name = !name && utils.isArray(target) ? target.length : name;
                if (isLast) {
                    if (utils.hasOwnProp(target, name)) target[name] = [ target[name], value ]; else target[name] = value;
                    return !isNumericKey;
                }
                if (!target[name] || !utils.isObject(target[name])) target[name] = [];
                const result = buildPath(path, value, target[name], index);
                if (result && utils.isArray(target[name])) target[name] = arrayToObject(target[name]);
                return !isNumericKey;
            }
            if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
                const obj = {};
                utils.forEachEntry(formData, ((name, value) => {
                    buildPath(parsePropPath(name), value, obj, 0);
                }));
                return obj;
            }
            return null;
        }
        const helpers_formDataToJSON = formDataToJSON;
        function settle(resolve, reject, response) {
            const validateStatus = response.config.validateStatus;
            if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response); else reject(new core_AxiosError("Request failed with status code " + response.status, [ core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
        }
        const cookies = platform_browser.isStandardBrowserEnv ? function standardBrowserEnv() {
            return {
                write: function write(name, value, expires, path, domain, secure) {
                    const cookie = [];
                    cookie.push(name + "=" + encodeURIComponent(value));
                    if (utils.isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
                    if (utils.isString(path)) cookie.push("path=" + path);
                    if (utils.isString(domain)) cookie.push("domain=" + domain);
                    if (true === secure) cookie.push("secure");
                    document.cookie = cookie.join("; ");
                },
                read: function read(name) {
                    const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
                    return match ? decodeURIComponent(match[3]) : null;
                },
                remove: function remove(name) {
                    this.write(name, "", Date.now() - 864e5);
                }
            };
        }() : function nonStandardBrowserEnv() {
            return {
                write: function write() {},
                read: function read() {
                    return null;
                },
                remove: function remove() {}
            };
        }();
        function isAbsoluteURL(url) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
        }
        function combineURLs(baseURL, relativeURL) {
            return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
        }
        function buildFullPath(baseURL, requestedURL) {
            if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
            return requestedURL;
        }
        const isURLSameOrigin = platform_browser.isStandardBrowserEnv ? function standardBrowserEnv() {
            const msie = /(msie|trident)/i.test(navigator.userAgent);
            const urlParsingNode = document.createElement("a");
            let originURL;
            function resolveURL(url) {
                let href = url;
                if (msie) {
                    urlParsingNode.setAttribute("href", href);
                    href = urlParsingNode.href;
                }
                urlParsingNode.setAttribute("href", href);
                return {
                    href: urlParsingNode.href,
                    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
                    host: urlParsingNode.host,
                    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
                    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
                    hostname: urlParsingNode.hostname,
                    port: urlParsingNode.port,
                    pathname: "/" === urlParsingNode.pathname.charAt(0) ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
                };
            }
            originURL = resolveURL(window.location.href);
            return function isURLSameOrigin(requestURL) {
                const parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
                return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
            };
        }() : function nonStandardBrowserEnv() {
            return function isURLSameOrigin() {
                return true;
            };
        }();
        function CanceledError(message, config, request) {
            core_AxiosError.call(this, null == message ? "canceled" : message, core_AxiosError.ERR_CANCELED, config, request);
            this.name = "CanceledError";
        }
        utils.inherits(CanceledError, core_AxiosError, {
            __CANCEL__: true
        });
        const cancel_CanceledError = CanceledError;
        function parseProtocol(url) {
            const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
            return match && match[1] || "";
        }
        const ignoreDuplicateOf = utils.toObjectSet([ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ]);
        const parseHeaders = rawHeaders => {
            const parsed = {};
            let key;
            let val;
            let i;
            rawHeaders && rawHeaders.split("\n").forEach((function parser(line) {
                i = line.indexOf(":");
                key = line.substring(0, i).trim().toLowerCase();
                val = line.substring(i + 1).trim();
                if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
                if ("set-cookie" === key) if (parsed[key]) parsed[key].push(val); else parsed[key] = [ val ]; else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }));
            return parsed;
        };
        const $internals = Symbol("internals");
        const $defaults = Symbol("defaults");
        function normalizeHeader(header) {
            return header && String(header).trim().toLowerCase();
        }
        function normalizeValue(value) {
            if (false === value || null == value) return value;
            return utils.isArray(value) ? value.map(normalizeValue) : String(value);
        }
        function parseTokens(str) {
            const tokens = Object.create(null);
            const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let match;
            while (match = tokensRE.exec(str)) tokens[match[1]] = match[2];
            return tokens;
        }
        function matchHeaderValue(context, value, header, filter) {
            if (utils.isFunction(filter)) return filter.call(this, value, header);
            if (!utils.isString(value)) return;
            if (utils.isString(filter)) return -1 !== value.indexOf(filter);
            if (utils.isRegExp(filter)) return filter.test(value);
        }
        function formatHeader(header) {
            return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((w, char, str) => char.toUpperCase() + str));
        }
        function buildAccessors(obj, header) {
            const accessorName = utils.toCamelCase(" " + header);
            [ "get", "set", "has" ].forEach((methodName => {
                Object.defineProperty(obj, methodName + accessorName, {
                    value: function(arg1, arg2, arg3) {
                        return this[methodName].call(this, header, arg1, arg2, arg3);
                    },
                    configurable: true
                });
            }));
        }
        function findKey(obj, key) {
            key = key.toLowerCase();
            const keys = Object.keys(obj);
            let i = keys.length;
            let _key;
            while (i-- > 0) {
                _key = keys[i];
                if (key === _key.toLowerCase()) return _key;
            }
            return null;
        }
        function AxiosHeaders(headers, defaults) {
            headers && this.set(headers);
            this[$defaults] = defaults || null;
        }
        Object.assign(AxiosHeaders.prototype, {
            set: function(header, valueOrRewrite, rewrite) {
                const self = this;
                function setHeader(_value, _header, _rewrite) {
                    const lHeader = normalizeHeader(_header);
                    if (!lHeader) throw new Error("header name must be a non-empty string");
                    const key = findKey(self, lHeader);
                    if (key && true !== _rewrite && (false === self[key] || false === _rewrite)) return;
                    self[key || _header] = normalizeValue(_value);
                }
                if (utils.isPlainObject(header)) utils.forEach(header, ((_value, _header) => {
                    setHeader(_value, _header, valueOrRewrite);
                })); else setHeader(valueOrRewrite, header, rewrite);
                return this;
            },
            get: function(header, parser) {
                header = normalizeHeader(header);
                if (!header) return;
                const key = findKey(this, header);
                if (key) {
                    const value = this[key];
                    if (!parser) return value;
                    if (true === parser) return parseTokens(value);
                    if (utils.isFunction(parser)) return parser.call(this, value, key);
                    if (utils.isRegExp(parser)) return parser.exec(value);
                    throw new TypeError("parser must be boolean|regexp|function");
                }
            },
            has: function(header, matcher) {
                header = normalizeHeader(header);
                if (header) {
                    const key = findKey(this, header);
                    return !!(key && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
                }
                return false;
            },
            delete: function(header, matcher) {
                const self = this;
                let deleted = false;
                function deleteHeader(_header) {
                    _header = normalizeHeader(_header);
                    if (_header) {
                        const key = findKey(self, _header);
                        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                            delete self[key];
                            deleted = true;
                        }
                    }
                }
                if (utils.isArray(header)) header.forEach(deleteHeader); else deleteHeader(header);
                return deleted;
            },
            clear: function() {
                return Object.keys(this).forEach(this.delete.bind(this));
            },
            normalize: function(format) {
                const self = this;
                const headers = {};
                utils.forEach(this, ((value, header) => {
                    const key = findKey(headers, header);
                    if (key) {
                        self[key] = normalizeValue(value);
                        delete self[header];
                        return;
                    }
                    const normalized = format ? formatHeader(header) : String(header).trim();
                    if (normalized !== header) delete self[header];
                    self[normalized] = normalizeValue(value);
                    headers[normalized] = true;
                }));
                return this;
            },
            toJSON: function(asStrings) {
                const obj = Object.create(null);
                utils.forEach(Object.assign({}, this[$defaults] || null, this), ((value, header) => {
                    if (null == value || false === value) return;
                    obj[header] = asStrings && utils.isArray(value) ? value.join(", ") : value;
                }));
                return obj;
            }
        });
        Object.assign(AxiosHeaders, {
            from: function(thing) {
                if (utils.isString(thing)) return new this(parseHeaders(thing));
                return thing instanceof this ? thing : new this(thing);
            },
            accessor: function(header) {
                const internals = this[$internals] = this[$internals] = {
                    accessors: {}
                };
                const accessors = internals.accessors;
                const prototype = this.prototype;
                function defineAccessor(_header) {
                    const lHeader = normalizeHeader(_header);
                    if (!accessors[lHeader]) {
                        buildAccessors(prototype, _header);
                        accessors[lHeader] = true;
                    }
                }
                utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
                return this;
            }
        });
        AxiosHeaders.accessor([ "Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent" ]);
        utils.freezeMethods(AxiosHeaders.prototype);
        utils.freezeMethods(AxiosHeaders);
        const core_AxiosHeaders = AxiosHeaders;
        function speedometer(samplesCount, min) {
            samplesCount = samplesCount || 10;
            const bytes = new Array(samplesCount);
            const timestamps = new Array(samplesCount);
            let head = 0;
            let tail = 0;
            let firstSampleTS;
            min = void 0 !== min ? min : 1e3;
            return function push(chunkLength) {
                const now = Date.now();
                const startedAt = timestamps[tail];
                if (!firstSampleTS) firstSampleTS = now;
                bytes[head] = chunkLength;
                timestamps[head] = now;
                let i = tail;
                let bytesCount = 0;
                while (i !== head) {
                    bytesCount += bytes[i++];
                    i %= samplesCount;
                }
                head = (head + 1) % samplesCount;
                if (head === tail) tail = (tail + 1) % samplesCount;
                if (now - firstSampleTS < min) return;
                const passed = startedAt && now - startedAt;
                return passed ? Math.round(1e3 * bytesCount / passed) : void 0;
            };
        }
        const helpers_speedometer = speedometer;
        function progressEventReducer(listener, isDownloadStream) {
            let bytesNotified = 0;
            const _speedometer = helpers_speedometer(50, 250);
            return e => {
                const loaded = e.loaded;
                const total = e.lengthComputable ? e.total : void 0;
                const progressBytes = loaded - bytesNotified;
                const rate = _speedometer(progressBytes);
                const inRange = loaded <= total;
                bytesNotified = loaded;
                const data = {
                    loaded,
                    total,
                    progress: total ? loaded / total : void 0,
                    bytes: progressBytes,
                    rate: rate ? rate : void 0,
                    estimated: rate && total && inRange ? (total - loaded) / rate : void 0
                };
                data[isDownloadStream ? "download" : "upload"] = true;
                listener(data);
            };
        }
        function xhrAdapter(config) {
            return new Promise((function dispatchXhrRequest(resolve, reject) {
                let requestData = config.data;
                const requestHeaders = core_AxiosHeaders.from(config.headers).normalize();
                const responseType = config.responseType;
                let onCanceled;
                function done() {
                    if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
                    if (config.signal) config.signal.removeEventListener("abort", onCanceled);
                }
                if (utils.isFormData(requestData) && platform_browser.isStandardBrowserEnv) requestHeaders.setContentType(false);
                let request = new XMLHttpRequest;
                if (config.auth) {
                    const username = config.auth.username || "";
                    const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
                    requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
                }
                const fullPath = buildFullPath(config.baseURL, config.url);
                request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
                request.timeout = config.timeout;
                function onloadend() {
                    if (!request) return;
                    const responseHeaders = core_AxiosHeaders.from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
                    const responseData = !responseType || "text" === responseType || "json" === responseType ? request.responseText : request.response;
                    const response = {
                        data: responseData,
                        status: request.status,
                        statusText: request.statusText,
                        headers: responseHeaders,
                        config,
                        request
                    };
                    settle((function _resolve(value) {
                        resolve(value);
                        done();
                    }), (function _reject(err) {
                        reject(err);
                        done();
                    }), response);
                    request = null;
                }
                if ("onloadend" in request) request.onloadend = onloadend; else request.onreadystatechange = function handleLoad() {
                    if (!request || 4 !== request.readyState) return;
                    if (0 === request.status && !(request.responseURL && 0 === request.responseURL.indexOf("file:"))) return;
                    setTimeout(onloadend);
                };
                request.onabort = function handleAbort() {
                    if (!request) return;
                    reject(new core_AxiosError("Request aborted", core_AxiosError.ECONNABORTED, config, request));
                    request = null;
                };
                request.onerror = function handleError() {
                    reject(new core_AxiosError("Network Error", core_AxiosError.ERR_NETWORK, config, request));
                    request = null;
                };
                request.ontimeout = function handleTimeout() {
                    let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
                    const transitional = config.transitional || defaults_transitional;
                    if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
                    reject(new core_AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED, config, request));
                    request = null;
                };
                if (platform_browser.isStandardBrowserEnv) {
                    const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
                    if (xsrfValue) requestHeaders.set(config.xsrfHeaderName, xsrfValue);
                }
                void 0 === requestData && requestHeaders.setContentType(null);
                if ("setRequestHeader" in request) utils.forEach(requestHeaders.toJSON(), (function setRequestHeader(val, key) {
                    request.setRequestHeader(key, val);
                }));
                if (!utils.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
                if (responseType && "json" !== responseType) request.responseType = config.responseType;
                if ("function" === typeof config.onDownloadProgress) request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
                if ("function" === typeof config.onUploadProgress && request.upload) request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
                if (config.cancelToken || config.signal) {
                    onCanceled = cancel => {
                        if (!request) return;
                        reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
                        request.abort();
                        request = null;
                    };
                    config.cancelToken && config.cancelToken.subscribe(onCanceled);
                    if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
                }
                const protocol = parseProtocol(fullPath);
                if (protocol && -1 === platform_browser.protocols.indexOf(protocol)) {
                    reject(new core_AxiosError("Unsupported protocol " + protocol + ":", core_AxiosError.ERR_BAD_REQUEST, config));
                    return;
                }
                request.send(requestData || null);
            }));
        }
        const adapters = {
            http: xhrAdapter,
            xhr: xhrAdapter
        };
        const lib_adapters = {
            getAdapter: nameOrAdapter => {
                if (utils.isString(nameOrAdapter)) {
                    const adapter = adapters[nameOrAdapter];
                    if (!nameOrAdapter) throw Error(utils.hasOwnProp(nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Can not resolve adapter '${nameOrAdapter}'`);
                    return adapter;
                }
                if (!utils.isFunction(nameOrAdapter)) throw new TypeError("adapter is not a function");
                return nameOrAdapter;
            },
            adapters
        };
        const DEFAULT_CONTENT_TYPE = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function getDefaultAdapter() {
            let adapter;
            if ("undefined" !== typeof XMLHttpRequest) adapter = lib_adapters.getAdapter("xhr"); else if ("undefined" !== typeof process && "process" === utils.kindOf(process)) adapter = lib_adapters.getAdapter("http");
            return adapter;
        }
        function stringifySafely(rawValue, parser, encoder) {
            if (utils.isString(rawValue)) try {
                (parser || JSON.parse)(rawValue);
                return utils.trim(rawValue);
            } catch (e) {
                if ("SyntaxError" !== e.name) throw e;
            }
            return (encoder || JSON.stringify)(rawValue);
        }
        const defaults_defaults = {
            transitional: defaults_transitional,
            adapter: getDefaultAdapter(),
            transformRequest: [ function transformRequest(data, headers) {
                const contentType = headers.getContentType() || "";
                const hasJSONContentType = contentType.indexOf("application/json") > -1;
                const isObjectPayload = utils.isObject(data);
                if (isObjectPayload && utils.isHTMLForm(data)) data = new FormData(data);
                const isFormData = utils.isFormData(data);
                if (isFormData) {
                    if (!hasJSONContentType) return data;
                    return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
                }
                if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
                if (utils.isArrayBufferView(data)) return data.buffer;
                if (utils.isURLSearchParams(data)) {
                    headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                    return data.toString();
                }
                let isFileList;
                if (isObjectPayload) {
                    if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return toURLEncodedForm(data, this.formSerializer).toString();
                    if ((isFileList = utils.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                        const _FormData = this.env && this.env.FormData;
                        return helpers_toFormData(isFileList ? {
                            "files[]": data
                        } : data, _FormData && new _FormData, this.formSerializer);
                    }
                }
                if (isObjectPayload || hasJSONContentType) {
                    headers.setContentType("application/json", false);
                    return stringifySafely(data);
                }
                return data;
            } ],
            transformResponse: [ function transformResponse(data) {
                const transitional = this.transitional || defaults_defaults.transitional;
                const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
                const JSONRequested = "json" === this.responseType;
                if (data && utils.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                    const silentJSONParsing = transitional && transitional.silentJSONParsing;
                    const strictJSONParsing = !silentJSONParsing && JSONRequested;
                    try {
                        return JSON.parse(data);
                    } catch (e) {
                        if (strictJSONParsing) {
                            if ("SyntaxError" === e.name) throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e;
                        }
                    }
                }
                return data;
            } ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
                FormData: platform_browser.classes.FormData,
                Blob: platform_browser.classes.Blob
            },
            validateStatus: function validateStatus(status) {
                return status >= 200 && status < 300;
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }
        };
        utils.forEach([ "delete", "get", "head" ], (function forEachMethodNoData(method) {
            defaults_defaults.headers[method] = {};
        }));
        utils.forEach([ "post", "put", "patch" ], (function forEachMethodWithData(method) {
            defaults_defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
        }));
        const lib_defaults = defaults_defaults;
        function transformData(fns, response) {
            const config = this || lib_defaults;
            const context = response || config;
            const headers = core_AxiosHeaders.from(context.headers);
            let data = context.data;
            utils.forEach(fns, (function transform(fn) {
                data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
            }));
            headers.normalize();
            return data;
        }
        function isCancel(value) {
            return !!(value && value.__CANCEL__);
        }
        function throwIfCancellationRequested(config) {
            if (config.cancelToken) config.cancelToken.throwIfRequested();
            if (config.signal && config.signal.aborted) throw new cancel_CanceledError;
        }
        function dispatchRequest(config) {
            throwIfCancellationRequested(config);
            config.headers = core_AxiosHeaders.from(config.headers);
            config.data = transformData.call(config, config.transformRequest);
            const adapter = config.adapter || lib_defaults.adapter;
            return adapter(config).then((function onAdapterResolution(response) {
                throwIfCancellationRequested(config);
                response.data = transformData.call(config, config.transformResponse, response);
                response.headers = core_AxiosHeaders.from(response.headers);
                return response;
            }), (function onAdapterRejection(reason) {
                if (!isCancel(reason)) {
                    throwIfCancellationRequested(config);
                    if (reason && reason.response) {
                        reason.response.data = transformData.call(config, config.transformResponse, reason.response);
                        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
                    }
                }
                return Promise.reject(reason);
            }));
        }
        function mergeConfig(config1, config2) {
            config2 = config2 || {};
            const config = {};
            function getMergedValue(target, source) {
                if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source); else if (utils.isPlainObject(source)) return utils.merge({}, source); else if (utils.isArray(source)) return source.slice();
                return source;
            }
            function mergeDeepProperties(prop) {
                if (!utils.isUndefined(config2[prop])) return getMergedValue(config1[prop], config2[prop]); else if (!utils.isUndefined(config1[prop])) return getMergedValue(void 0, config1[prop]);
            }
            function valueFromConfig2(prop) {
                if (!utils.isUndefined(config2[prop])) return getMergedValue(void 0, config2[prop]);
            }
            function defaultToConfig2(prop) {
                if (!utils.isUndefined(config2[prop])) return getMergedValue(void 0, config2[prop]); else if (!utils.isUndefined(config1[prop])) return getMergedValue(void 0, config1[prop]);
            }
            function mergeDirectKeys(prop) {
                if (prop in config2) return getMergedValue(config1[prop], config2[prop]); else if (prop in config1) return getMergedValue(void 0, config1[prop]);
            }
            const mergeMap = {
                url: valueFromConfig2,
                method: valueFromConfig2,
                data: valueFromConfig2,
                baseURL: defaultToConfig2,
                transformRequest: defaultToConfig2,
                transformResponse: defaultToConfig2,
                paramsSerializer: defaultToConfig2,
                timeout: defaultToConfig2,
                timeoutMessage: defaultToConfig2,
                withCredentials: defaultToConfig2,
                adapter: defaultToConfig2,
                responseType: defaultToConfig2,
                xsrfCookieName: defaultToConfig2,
                xsrfHeaderName: defaultToConfig2,
                onUploadProgress: defaultToConfig2,
                onDownloadProgress: defaultToConfig2,
                decompress: defaultToConfig2,
                maxContentLength: defaultToConfig2,
                maxBodyLength: defaultToConfig2,
                beforeRedirect: defaultToConfig2,
                transport: defaultToConfig2,
                httpAgent: defaultToConfig2,
                httpsAgent: defaultToConfig2,
                cancelToken: defaultToConfig2,
                socketPath: defaultToConfig2,
                responseEncoding: defaultToConfig2,
                validateStatus: mergeDirectKeys
            };
            utils.forEach(Object.keys(config1).concat(Object.keys(config2)), (function computeConfigValue(prop) {
                const merge = mergeMap[prop] || mergeDeepProperties;
                const configValue = merge(prop);
                utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
            }));
            return config;
        }
        const VERSION = "1.1.3";
        const validators = {};
        [ "object", "boolean", "number", "function", "string", "symbol" ].forEach(((type, i) => {
            validators[type] = function validator(thing) {
                return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
            };
        }));
        const deprecatedWarnings = {};
        validators.transitional = function transitional(validator, version, message) {
            function formatMessage(opt, desc) {
                return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
            }
            return (value, opt, opts) => {
                if (false === validator) throw new core_AxiosError(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), core_AxiosError.ERR_DEPRECATED);
                if (version && !deprecatedWarnings[opt]) {
                    deprecatedWarnings[opt] = true;
                    console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
                }
                return validator ? validator(value, opt, opts) : true;
            };
        };
        function assertOptions(options, schema, allowUnknown) {
            if ("object" !== typeof options) throw new core_AxiosError("options must be an object", core_AxiosError.ERR_BAD_OPTION_VALUE);
            const keys = Object.keys(options);
            let i = keys.length;
            while (i-- > 0) {
                const opt = keys[i];
                const validator = schema[opt];
                if (validator) {
                    const value = options[opt];
                    const result = void 0 === value || validator(value, opt, options);
                    if (true !== result) throw new core_AxiosError("option " + opt + " must be " + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
                    continue;
                }
                if (true !== allowUnknown) throw new core_AxiosError("Unknown option " + opt, core_AxiosError.ERR_BAD_OPTION);
            }
        }
        const validator = {
            assertOptions,
            validators
        };
        const Axios_validators = validator.validators;
        class Axios {
            constructor(instanceConfig) {
                this.defaults = instanceConfig;
                this.interceptors = {
                    request: new core_InterceptorManager,
                    response: new core_InterceptorManager
                };
            }
            request(configOrUrl, config) {
                if ("string" === typeof configOrUrl) {
                    config = config || {};
                    config.url = configOrUrl;
                } else config = configOrUrl || {};
                config = mergeConfig(this.defaults, config);
                const {transitional, paramsSerializer} = config;
                if (void 0 !== transitional) validator.assertOptions(transitional, {
                    silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
                    forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
                    clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
                }, false);
                if (void 0 !== paramsSerializer) validator.assertOptions(paramsSerializer, {
                    encode: Axios_validators.function,
                    serialize: Axios_validators.function
                }, true);
                config.method = (config.method || this.defaults.method || "get").toLowerCase();
                const defaultHeaders = config.headers && utils.merge(config.headers.common, config.headers[config.method]);
                defaultHeaders && utils.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], (function cleanHeaderConfig(method) {
                    delete config.headers[method];
                }));
                config.headers = new core_AxiosHeaders(config.headers, defaultHeaders);
                const requestInterceptorChain = [];
                let synchronousRequestInterceptors = true;
                this.interceptors.request.forEach((function unshiftRequestInterceptors(interceptor) {
                    if ("function" === typeof interceptor.runWhen && false === interceptor.runWhen(config)) return;
                    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
                    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
                }));
                const responseInterceptorChain = [];
                this.interceptors.response.forEach((function pushResponseInterceptors(interceptor) {
                    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
                }));
                let promise;
                let i = 0;
                let len;
                if (!synchronousRequestInterceptors) {
                    const chain = [ dispatchRequest.bind(this), void 0 ];
                    chain.unshift.apply(chain, requestInterceptorChain);
                    chain.push.apply(chain, responseInterceptorChain);
                    len = chain.length;
                    promise = Promise.resolve(config);
                    while (i < len) promise = promise.then(chain[i++], chain[i++]);
                    return promise;
                }
                len = requestInterceptorChain.length;
                let newConfig = config;
                i = 0;
                while (i < len) {
                    const onFulfilled = requestInterceptorChain[i++];
                    const onRejected = requestInterceptorChain[i++];
                    try {
                        newConfig = onFulfilled(newConfig);
                    } catch (error) {
                        onRejected.call(this, error);
                        break;
                    }
                }
                try {
                    promise = dispatchRequest.call(this, newConfig);
                } catch (error) {
                    return Promise.reject(error);
                }
                i = 0;
                len = responseInterceptorChain.length;
                while (i < len) promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
                return promise;
            }
            getUri(config) {
                config = mergeConfig(this.defaults, config);
                const fullPath = buildFullPath(config.baseURL, config.url);
                return buildURL(fullPath, config.params, config.paramsSerializer);
            }
        }
        utils.forEach([ "delete", "get", "head", "options" ], (function forEachMethodNoData(method) {
            Axios.prototype[method] = function(url, config) {
                return this.request(mergeConfig(config || {}, {
                    method,
                    url,
                    data: (config || {}).data
                }));
            };
        }));
        utils.forEach([ "post", "put", "patch" ], (function forEachMethodWithData(method) {
            function generateHTTPMethod(isForm) {
                return function httpMethod(url, data, config) {
                    return this.request(mergeConfig(config || {}, {
                        method,
                        headers: isForm ? {
                            "Content-Type": "multipart/form-data"
                        } : {},
                        url,
                        data
                    }));
                };
            }
            Axios.prototype[method] = generateHTTPMethod();
            Axios.prototype[method + "Form"] = generateHTTPMethod(true);
        }));
        const core_Axios = Axios;
        class CancelToken {
            constructor(executor) {
                if ("function" !== typeof executor) throw new TypeError("executor must be a function.");
                let resolvePromise;
                this.promise = new Promise((function promiseExecutor(resolve) {
                    resolvePromise = resolve;
                }));
                const token = this;
                this.promise.then((cancel => {
                    if (!token._listeners) return;
                    let i = token._listeners.length;
                    while (i-- > 0) token._listeners[i](cancel);
                    token._listeners = null;
                }));
                this.promise.then = onfulfilled => {
                    let _resolve;
                    const promise = new Promise((resolve => {
                        token.subscribe(resolve);
                        _resolve = resolve;
                    })).then(onfulfilled);
                    promise.cancel = function reject() {
                        token.unsubscribe(_resolve);
                    };
                    return promise;
                };
                executor((function cancel(message, config, request) {
                    if (token.reason) return;
                    token.reason = new cancel_CanceledError(message, config, request);
                    resolvePromise(token.reason);
                }));
            }
            throwIfRequested() {
                if (this.reason) throw this.reason;
            }
            subscribe(listener) {
                if (this.reason) {
                    listener(this.reason);
                    return;
                }
                if (this._listeners) this._listeners.push(listener); else this._listeners = [ listener ];
            }
            unsubscribe(listener) {
                if (!this._listeners) return;
                const index = this._listeners.indexOf(listener);
                if (-1 !== index) this._listeners.splice(index, 1);
            }
            static source() {
                let cancel;
                const token = new CancelToken((function executor(c) {
                    cancel = c;
                }));
                return {
                    token,
                    cancel
                };
            }
        }
        const cancel_CancelToken = CancelToken;
        function spread(callback) {
            return function wrap(arr) {
                return callback.apply(null, arr);
            };
        }
        function isAxiosError(payload) {
            return utils.isObject(payload) && true === payload.isAxiosError;
        }
        function createInstance(defaultConfig) {
            const context = new core_Axios(defaultConfig);
            const instance = bind(core_Axios.prototype.request, context);
            utils.extend(instance, core_Axios.prototype, context, {
                allOwnKeys: true
            });
            utils.extend(instance, context, null, {
                allOwnKeys: true
            });
            instance.create = function create(instanceConfig) {
                return createInstance(mergeConfig(defaultConfig, instanceConfig));
            };
            return instance;
        }
        const axios = createInstance(lib_defaults);
        axios.Axios = core_Axios;
        axios.CanceledError = cancel_CanceledError;
        axios.CancelToken = cancel_CancelToken;
        axios.isCancel = isCancel;
        axios.VERSION = VERSION;
        axios.toFormData = helpers_toFormData;
        axios.AxiosError = core_AxiosError;
        axios.Cancel = axios.CanceledError;
        axios.all = function all(promises) {
            return Promise.all(promises);
        };
        axios.spread = spread;
        axios.isAxiosError = isAxiosError;
        axios.formToJSON = thing => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
        const lib_axios = axios;
        const {Axios: axios_Axios, AxiosError: axios_AxiosError, CanceledError: axios_CanceledError, isCancel: axios_isCancel, CancelToken: axios_CancelToken, VERSION: axios_VERSION, all: axios_all, Cancel, isAxiosError: axios_isAxiosError, spread: axios_spread, toFormData: axios_toFormData} = lib_axios;
        const node_modules_axios = lib_axios;
        aos.init();
        const script_body = document.body;
        const certificateForm = document.querySelector("#certificate-form");
        const modalBtns = document.querySelectorAll("._modal-open");
        const modals = document.querySelectorAll("._modal");
        function openModal(elem) {
            elem.classList.add("_active");
            script_body.classList.add("_locked");
        }
        function closeModal(e) {
            if (e.target.classList.contains("modal-close") || e.target.closest(".modal-close") || e.target.classList.contains("modal-bg")) {
                e.target.closest("._modal").classList.remove("_active");
                script_body.classList.remove("_locked");
            }
        }
        modalBtns.forEach((btn => {
            btn.addEventListener("click", (e => {
                let data = e.target.dataset.modalOpen;
                modals.forEach((modal => {
                    if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest("._modal-open").dataset.modalOpen) openModal(modal);
                }));
            }));
        }));
        modals.forEach((modal => {
            modal.addEventListener("click", (e => closeModal(e)));
        }));
        window.addEventListener("keydown", (e => {
            modals.forEach((modal => {
                if ("Escape" === e.key && modal.classList.contains("_active")) {
                    modal.classList.remove("_active");
                    script_body.classList.remove("_locked");
                }
            }));
        }));
        if (certificateForm) {
            const validation = new JustValidate(certificateForm, {
                tooltip: {
                    position: "bottom"
                }
            });
            const modal = document.querySelector("._modal");
            const sendData = form => {
                const elems = form.querySelectorAll(".form-certificate__input");
                let info = {};
                elems.forEach((input => {
                    info[input.name] = input.value;
                }));
                let title = document.querySelector(".certificate__title").textContent;
                let msg = `\n\t\t\t${title}%0A\n\t\t\tИмя: ${info.name}%0A\n\t\t\tТелефон: ${info.tel}%0A\n\t\t\tПочта: ${info.email}%0A\n\t\t\tСообщение: ${info.message}\n\t\t`;
                const tkn = "5632010278:AAHMXClIxpt7TrVjsZrECfuI99wEObLpGbE";
                node_modules_axios({
                    method: "post",
                    url: `https://api.telegram.org/bot${tkn}/sendMessage?chat_id=-1001782421566&parse_mode=html&text=${msg}`
                });
                openModal(modal);
                modal.querySelector(".modal-content").textContent = "Ваша заявка успешно отправлена!";
            };
            validation.addField("#input-name", [ {
                rule: "required",
                errorMessage: "Пожалуйста, введите Ваше имя"
            } ]).addField("#input-tel", [ {
                rule: "required",
                errorMessage: "Пожалуйста, введите Ваш номер телефона"
            } ]).addField("#input-email", [ {
                rule: "required",
                errorMessage: "Пожалуйста, введите адрес почтового ящика"
            }, {
                rule: "email",
                errorMessage: "Введен неккоректный адрес почтового ящика!"
            } ]).onSuccess((() => sendData(certificateForm)));
        }
        window.addEventListener("load", (() => {
            const mainSlider = document.querySelector(".main-slider");
            if (mainSlider) {
                new core(mainSlider, {
                    slidesPerView: 1.5,
                    spaceBetween: 24,
                    centeredSlides: true,
                    loop: true,
                    breakpoints: {
                        992: {
                            slidesPerView: 4.5
                        },
                        768: {
                            slidesPerView: 3.7
                        },
                        576: {
                            slidesPerView: 2.5
                        }
                    }
                });
                const images = mainSlider.querySelectorAll(".swiper-slide");
                images.forEach((image => {
                    image.classList.add("_animate");
                }));
                for (let i = 0; i < images.length; i++) {
                    const image = images[i];
                    const time = 3e3 + 100 * i;
                    setTimeout((() => {
                        image.classList.remove("_animate");
                    }), time);
                }
            }
            const locationsSlider = document.querySelector(".slider-locations");
            const modal = document.querySelector(".modal-content");
            const renderSlider = slide => {
                const paths = [];
                for (let i = 0; i < slide.dataset.photos; i++) paths.push(`img/locations/${slide.dataset.location}/images/${i + 1}.png`);
                modal.innerHTML = `\n\t\t\t\t<div class="swiper modal-slider">\n\t\t\t\t\t<div class="swiper-wrapper">\n\t\t\t\t\t\t${paths.map((path => `\n\t\t\t\t\t\t\t\t<div class="swiper-slide" >\n\t\t\t\t\t\t\t\t\t<img src="${path}" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t`)).join("")}\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="location-slider-arrow location-slider-arrow-next">\n\t\t\t\t\t<svg viewBox="0 0 34 66" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t<path d="M1 64.5L32.5 32.5L1 1" stroke="#fff" stroke-width="2"/>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t\t<div class="location-slider-arrow location-slider-arrow-prev">\n\t\t\t\t\t<svg viewBox="0 0 35 66" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t<path d="M33.5 1L2 33L33.5 64.5" stroke="#fff" stroke-width="2"/>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t\t<div class="modal-slider-text">${slide.dataset.text}</div>\n\t\t\t`;
                new core(".modal-slider", {
                    modules: [ Navigation ],
                    navigation: {
                        nextEl: ".location-slider-arrow-next",
                        prevEl: ".location-slider-arrow-prev"
                    }
                });
            };
            if (locationsSlider) {
                const locationsSwiper = new core(locationsSlider, {
                    slidesPerView: 1.5,
                    spaceBetween: 24,
                    centeredSlides: true,
                    loop: true,
                    modules: [ Navigation ],
                    navigation: {
                        nextEl: ".slider-locations__next",
                        prevEl: ".slider-locations__prev"
                    },
                    breakpoints: {
                        992: {
                            slidesPerView: 4.5
                        },
                        768: {
                            slidesPerView: 3.7
                        },
                        576: {
                            slidesPerView: 3
                        },
                        425: {
                            slidesPerView: 1.7
                        }
                    },
                    on: {
                        init: function() {
                            modalsInit();
                            renderSlider(locationsSlider.querySelector(".swiper-slide-active"));
                            document.querySelector(".location-preloader").style.display = "none";
                        }
                    }
                });
                locationsSwiper.on("slideChangeTransitionEnd", (() => {
                    locationsSlider.querySelectorAll(".swiper-slide").forEach((slide => slide.classList.remove("_modal-open")));
                    const currentSlide = locationsSlider.querySelector(".swiper-slide-active");
                    currentSlide.classList.add("_modal-open");
                    modalsInit();
                    renderSlider(locationsSlider.querySelector(".swiper-slide-active"));
                }));
            }
        }));
        const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (isDarkTheme) {
            document.documentElement.classList.remove("_light");
            document.documentElement.classList.add("_dark");
        } else {
            document.documentElement.classList.remove("_dark");
            document.documentElement.classList.add("_light");
        }
        const preloader = document.querySelector(".preloader");
        if (preloader) {
            document.body.classList.add("_locked");
            window.addEventListener("load", (() => {
                setTimeout((() => {
                    preloader.style.opacity = "0";
                    preloader.style.visibility = "hidden";
                    document.body.classList.remove("_locked");
                }), 3e3);
                setTimeout((() => {
                    preloader.style.display = "none";
                }), 3500);
            }));
        }
        const goUp = document.getElementById("go-up");
        if (goUp) goUp.addEventListener("click", (() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }));
        const roundText = document.getElementById("round-text");
        if (roundText) {
            roundText.innerHTML = roundText.innerText.split("").map(((char, i) => `<span style="transform:rotate(${7.85 * i}deg)">${char}</span>`)).join("");
            console.log(roundText.innerHTML);
        }
        const trainingSliders = document.querySelectorAll(".student__photos");
        trainingSliders.forEach((slider => {
            new core(slider, {
                slidesPerView: 1.5,
                centeredSlides: true,
                loop: true,
                spaceBetween: 30,
                breakpoints: {
                    768: {
                        slidesPerView: 3.2
                    },
                    576: {
                        slidesPerView: 2.5
                    }
                }
            });
        }));
        menuInit();
        spollersInit();
        daInit();
    })();
})();