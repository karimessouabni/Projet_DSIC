// OpenLayers 3. See http://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
// Version: v3.17.1

(function (root, factory) {
    if (typeof exports === "object") {
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.ol = factory();
    }
}(this, function () {
    var OPENLAYERS = {};
    var k, aa = this;

    function t(a, b, c) {
        a = a.split(".");
        c = c || aa;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)a.length || void 0 === b ? c[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function ba(a) {
        a.Zb = function () {
            return a.Tg ? a.Tg : a.Tg = new a
        }
    }

    function ca(a) {
        var b = typeof a;
        if ("object" == b)if (a) {
            if (a instanceof Array)return "array";
            if (a instanceof Object)return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call)return "object";
        return b
    }

    function da(a) {
        return "string" == typeof a
    }

    function ea(a) {
        return "number" == typeof a
    }

    function fa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function w(a) {
        return a[ga] || (a[ga] = ++ha)
    }

    var ga = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;

    function ia(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ja(a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function ka(a, b, c) {
        ka = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
        return ka.apply(null, arguments)
    }

    var la, ma;

    function y(a, b) {
        a.prototype = Object.create(b.prototype);
        a.prototype.constructor = a
    }

    function na() {
    }

    var pa = Function("return this")();
    var qa = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function ra(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function sa(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    var ta = function () {
        var a;
        "cosh" in Math ? a = Math.cosh : a = function (a) {
            a = Math.exp(a);
            return (a + 1 / a) / 2
        };
        return a
    }();

    function ua(a, b, c, d, e, f) {
        var g = e - c, h = f - d;
        if (0 !== g || 0 !== h) {
            var l = ((a - c) * g + (b - d) * h) / (g * g + h * h);
            1 < l ? (c = e, d = f) : 0 < l && (c += g * l, d += h * l)
        }
        return va(a, b, c, d)
    }

    function va(a, b, c, d) {
        a = c - a;
        b = d - b;
        return a * a + b * b
    }

    function wa(a) {
        return a * Math.PI / 180
    }

    function xa(a, b) {
        var c = a % b;
        return 0 > c * b ? c + b : c
    }

    function za(a, b, c) {
        return a + c * (b - a)
    }

    function Ba(a) {
        return function (b) {
            if (b)return [sa(b[0], a[0], a[2]), sa(b[1], a[1], a[3])]
        }
    }

    function Ca(a) {
        return a
    }

    function Da(a, b, c) {
        this.center = a;
        this.resolution = b;
        this.rotation = c
    }

    var Ea = "function" === typeof Object.assign ? Object.assign : function (a, b) {
        if (!a || !a)throw new TypeError("Cannot convert undefined or null to object");
        for (var c = Object(a), d = 1, e = arguments.length; d < e; ++d) {
            var f = arguments[d];
            if (void 0 !== f && null !== f)for (var g in f)f.hasOwnProperty(g) && (c[g] = f[g])
        }
        return c
    };

    function Fa(a) {
        for (var b in a)delete a[b]
    }

    function Ga(a) {
        var b = [], c;
        for (c in a)b.push(a[c]);
        return b
    }

    function Ha(a) {
        for (var b in a)return !1;
        return !b
    }

    var Ia = "olm_" + (1E4 * Math.random() | 0);

    function Ja(a) {
        function b(b) {
            var d = a.listener, e = a.ng || a.target;
            a.pg && Ka(a);
            return d.call(e, b)
        }

        return a.og = b
    }

    function La(a, b, c, d) {
        for (var e, f = 0, g = a.length; f < g; ++f)if (e = a[f], e.listener === b && e.ng === c)return d && (e.deleteIndex = f), e
    }

    function Ma(a, b) {
        var c = a[Ia];
        return c ? c[b] : void 0
    }

    function Na(a) {
        var b = a[Ia];
        b || (b = a[Ia] = {});
        return b
    }

    function Oa(a, b) {
        var c = Ma(a, b);
        if (c) {
            for (var d = 0, e = c.length; d < e; ++d)a.removeEventListener(b, c[d].og), Fa(c[d]);
            c.length = 0;
            if (c = a[Ia])delete c[b], 0 === Object.keys(c).length && delete a[Ia]
        }
    }

    function B(a, b, c, d, e) {
        var f = Na(a), g = f[b];
        g || (g = f[b] = []);
        (f = La(g, c, d, !1)) ? e || (f.pg = !1) : (f = {
            ng: d,
            pg: !!e,
            listener: c,
            target: a,
            type: b
        }, a.addEventListener(b, Ja(f)), g.push(f));
        return f
    }

    function Pa(a, b, c, d) {
        return B(a, b, c, d, !0)
    }

    function Qa(a, b, c, d) {
        (a = Ma(a, b)) && (c = La(a, c, d, !0)) && Ka(c)
    }

    function Ka(a) {
        if (a && a.target) {
            a.target.removeEventListener(a.type, a.og);
            var b = Ma(a.target, a.type);
            if (b) {
                var c = "deleteIndex" in a ? a.deleteIndex : b.indexOf(a);
                -1 !== c && b.splice(c, 1);
                0 === b.length && Oa(a.target, a.type)
            }
            Fa(a)
        }
    }

    function Ra(a) {
        var b = Na(a), c;
        for (c in b)Oa(a, c)
    }

    function Sa() {
    }

    Sa.prototype.Gb = !1;
    function Ta(a) {
        a.Gb || (a.Gb = !0, a.ka())
    }

    Sa.prototype.ka = na;
    function Wa(a, b) {
        this.type = a;
        this.target = b || null
    }

    Wa.prototype.preventDefault = Wa.prototype.stopPropagation = function () {
        this.to = !0
    };
    function Ya(a) {
        a.stopPropagation()
    }

    function Za(a) {
        a.preventDefault()
    }

    function $a() {
        this.Ra = {};
        this.Ba = {};
        this.ya = {}
    }

    y($a, Sa);
    $a.prototype.addEventListener = function (a, b) {
        var c = this.ya[a];
        c || (c = this.ya[a] = []);
        -1 === c.indexOf(b) && c.push(b)
    };
    $a.prototype.b = function (a) {
        var b = "string" === typeof a ? new Wa(a) : a;
        a = b.type;
        b.target = this;
        var c = this.ya[a], d;
        if (c) {
            a in this.Ba || (this.Ba[a] = 0, this.Ra[a] = 0);
            ++this.Ba[a];
            for (var e = 0, f = c.length; e < f; ++e)if (!1 === c[e].call(this, b) || b.to) {
                d = !1;
                break
            }
            --this.Ba[a];
            if (0 === this.Ba[a]) {
                b = this.Ra[a];
                for (delete this.Ra[a]; b--;)this.removeEventListener(a, na);
                delete this.Ba[a]
            }
            return d
        }
    };
    $a.prototype.ka = function () {
        Ra(this)
    };
    function ab(a, b) {
        return b ? b in a.ya : 0 < Object.keys(a.ya).length
    }

    $a.prototype.removeEventListener = function (a, b) {
        var c = this.ya[a];
        if (c) {
            var d = c.indexOf(b);
            a in this.Ra ? (c[d] = na, ++this.Ra[a]) : (c.splice(d, 1), 0 === c.length && delete this.ya[a])
        }
    };
    function bb() {
        $a.call(this);
        this.g = 0
    }

    y(bb, $a);
    function cb(a) {
        if (Array.isArray(a))for (var b = 0, c = a.length; b < c; ++b)Ka(a[b]); else Ka(a)
    }

    k = bb.prototype;
    k.u = function () {
        ++this.g;
        this.b("change")
    };
    k.K = function () {
        return this.g
    };
    k.I = function (a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length, e = Array(d), f = 0; f < d; ++f)e[f] = B(this, a[f], b, c);
            return e
        }
        return B(this, a, b, c)
    };
    k.L = function (a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length, e = Array(d), f = 0; f < d; ++f)e[f] = Pa(this, a[f], b, c);
            return e
        }
        return Pa(this, a, b, c)
    };
    k.J = function (a, b, c) {
        if (Array.isArray(a))for (var d = 0, e = a.length; d < e; ++d)Qa(this, a[d], b, c); else Qa(this, a, b, c)
    };
    k.M = cb;
    function db(a, b, c) {
        Wa.call(this, a);
        this.key = b;
        this.oldValue = c
    }

    y(db, Wa);
    function eb(a) {
        bb.call(this);
        w(this);
        this.U = {};
        void 0 !== a && this.G(a)
    }

    y(eb, bb);
    var fb = {};

    function gb(a) {
        return fb.hasOwnProperty(a) ? fb[a] : fb[a] = "change:" + a
    }

    k = eb.prototype;
    k.get = function (a) {
        var b;
        this.U.hasOwnProperty(a) && (b = this.U[a]);
        return b
    };
    k.N = function () {
        return Object.keys(this.U)
    };
    k.O = function () {
        return Ea({}, this.U)
    };
    function hb(a, b, c) {
        var d;
        d = gb(b);
        a.b(new db(d, b, c));
        a.b(new db("propertychange", b, c))
    }

    k.set = function (a, b, c) {
        c ? this.U[a] = b : (c = this.U[a], this.U[a] = b, c !== b && hb(this, a, c))
    };
    k.G = function (a, b) {
        for (var c in a)this.set(c, a[c], b)
    };
    k.P = function (a, b) {
        if (a in this.U) {
            var c = this.U[a];
            delete this.U[a];
            b || hb(this, a, c)
        }
    };
    function ib(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function jb(a, b) {
        return 0 <= a.indexOf(b)
    }

    function kb(a, b, c) {
        var d = a.length;
        if (a[0] <= b)return 0;
        if (!(b <= a[d - 1]))if (0 < c)for (c = 1; c < d; ++c) {
            if (a[c] < b)return c - 1
        } else if (0 > c)for (c = 1; c < d; ++c) {
            if (a[c] <= b)return c
        } else for (c = 1; c < d; ++c) {
            if (a[c] == b)return c;
            if (a[c] < b)return a[c - 1] - b < b - a[c] ? c - 1 : c
        }
        return d - 1
    }

    function lb(a) {
        return a.reduce(function (a, c) {
            return Array.isArray(c) ? a.concat(lb(c)) : a.concat(c)
        }, [])
    }

    function mb(a, b) {
        var c;
        c = ca(b);
        var d = "array" == c || "object" == c && "number" == typeof b.length ? b : [b], e = d.length;
        for (c = 0; c < e; c++)a[a.length] = d[c]
    }

    function nb(a, b) {
        var c = a.indexOf(b), d = -1 < c;
        d && a.splice(c, 1);
        return d
    }

    function ob(a, b) {
        for (var c = a.length >>> 0, d, e = 0; e < c; e++)if (d = a[e], b(d, e, a))return d;
        return null
    }

    function pb(a, b) {
        var c = a.length;
        if (c !== b.length)return !1;
        for (var d = 0; d < c; d++)if (a[d] !== b[d])return !1;
        return !0
    }

    function qb(a) {
        var b = rb, c = a.length, d = Array(a.length), e;
        for (e = 0; e < c; e++)d[e] = {index: e, value: a[e]};
        d.sort(function (a, c) {
            return b(a.value, c.value) || a.index - c.index
        });
        for (e = 0; e < a.length; e++)a[e] = d[e].value
    }

    function sb(a, b) {
        var c;
        return a.every(function (d, e) {
            c = e;
            return !b(d, e, a)
        }) ? -1 : c
    }

    function tb(a) {
        return function (b, c, d) {
            if (void 0 !== b)return b = kb(a, b, d), b = sa(b + c, 0, a.length - 1), a[b]
        }
    }

    function ub(a, b, c) {
        return function (d, e, f) {
            if (void 0 !== d)return d = Math.max(Math.floor(Math.log(b / d) / Math.log(a) + (0 < f ? 0 : 0 > f ? 1 : .5)) + e, 0), void 0 !== c && (d = Math.min(d, c)), b / Math.pow(a, d)
        }
    }

    function vb(a) {
        if (void 0 !== a)return 0
    }

    function wb(a, b) {
        if (void 0 !== a)return a + b
    }

    function xb(a) {
        var b = 2 * Math.PI / a;
        return function (a, d) {
            if (void 0 !== a)return a = Math.floor((a + d) / b + .5) * b
        }
    }

    function yb() {
        var a = wa(5);
        return function (b, c) {
            if (void 0 !== b)return Math.abs(b + c) <= a ? 0 : b + c
        }
    }

    function zb(a, b) {
        var c = void 0 !== b ? a.toFixed(b) : "" + a, d = c.indexOf("."), d = -1 === d ? c.length : d;
        return 2 < d ? c : Array(3 - d).join("0") + c
    }

    function Ab(a) {
        a = ("" + a).split(".");
        for (var b = ["1", "3"], c = 0; c < Math.max(a.length, b.length); c++) {
            var d = parseInt(a[c] || "0", 10), e = parseInt(b[c] || "0", 10);
            if (d > e)return 1;
            if (e > d)return -1
        }
        return 0
    }

    function Bb(a, b) {
        a[0] += b[0];
        a[1] += b[1];
        return a
    }

    function Cb(a, b) {
        var c = a[0], d = a[1], e = b[0], f = b[1], g = e[0], e = e[1], h = f[0], f = f[1], l = h - g, m = f - e, c = 0 === l && 0 === m ? 0 : (l * (c - g) + m * (d - e)) / (l * l + m * m || 0);
        0 >= c || (1 <= c ? (g = h, e = f) : (g += c * l, e += c * m));
        return [g, e]
    }

    function Db(a, b, c) {
        a = xa(a + 180, 360) - 180;
        var d = Math.abs(3600 * a);
        return Math.floor(d / 3600) + "\u00b0 " + zb(Math.floor(d / 60 % 60)) + "\u2032 " + zb(d % 60, c || 0) + "\u2033 " + b.charAt(0 > a ? 1 : 0)
    }

    function Eb(a, b, c) {
        return a ? b.replace("{x}", a[0].toFixed(c)).replace("{y}", a[1].toFixed(c)) : ""
    }

    function Fb(a, b) {
        for (var c = !0, d = a.length - 1; 0 <= d; --d)if (a[d] != b[d]) {
            c = !1;
            break
        }
        return c
    }

    function Gb(a, b) {
        var c = Math.cos(b), d = Math.sin(b), e = a[1] * c + a[0] * d;
        a[0] = a[0] * c - a[1] * d;
        a[1] = e;
        return a
    }

    function Hb(a, b) {
        var c = a[0] - b[0], d = a[1] - b[1];
        return c * c + d * d
    }

    function Ib(a, b) {
        return Hb(a, Cb(a, b))
    }

    function Jb(a, b) {
        return Eb(a, "{x}, {y}", b)
    }

    function Kb(a) {
        for (var b = Lb(), c = 0, d = a.length; c < d; ++c)Mb(b, a[c]);
        return b
    }

    function Ob(a, b, c) {
        return c ? (c[0] = a[0] - b, c[1] = a[1] - b, c[2] = a[2] + b, c[3] = a[3] + b, c) : [a[0] - b, a[1] - b, a[2] + b, a[3] + b]
    }

    function Pb(a, b) {
        return b ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b) : a.slice()
    }

    function Rb(a, b, c) {
        b = b < a[0] ? a[0] - b : a[2] < b ? b - a[2] : 0;
        a = c < a[1] ? a[1] - c : a[3] < c ? c - a[3] : 0;
        return b * b + a * a
    }

    function Sb(a, b) {
        return Tb(a, b[0], b[1])
    }

    function Ub(a, b) {
        return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
    }

    function Tb(a, b, c) {
        return a[0] <= b && b <= a[2] && a[1] <= c && c <= a[3]
    }

    function Vb(a, b) {
        var c = a[1], d = a[2], e = a[3], f = b[0], g = b[1], h = 0;
        f < a[0] ? h |= 16 : f > d && (h |= 4);
        g < c ? h |= 8 : g > e && (h |= 2);
        0 === h && (h = 1);
        return h
    }

    function Lb() {
        return [Infinity, Infinity, -Infinity, -Infinity]
    }

    function Wb(a, b, c, d, e) {
        return e ? (e[0] = a, e[1] = b, e[2] = c, e[3] = d, e) : [a, b, c, d]
    }

    function Xb(a, b) {
        var c = a[0], d = a[1];
        return Wb(c, d, c, d, b)
    }

    function Yb(a, b, c, d, e) {
        e = Wb(Infinity, Infinity, -Infinity, -Infinity, e);
        return Zb(e, a, b, c, d)
    }

    function $b(a, b) {
        return a[0] == b[0] && a[2] == b[2] && a[1] == b[1] && a[3] == b[3]
    }

    function ac(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[2] > a[2] && (a[2] = b[2]);
        b[1] < a[1] && (a[1] = b[1]);
        b[3] > a[3] && (a[3] = b[3]);
        return a
    }

    function Mb(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[0] > a[2] && (a[2] = b[0]);
        b[1] < a[1] && (a[1] = b[1]);
        b[1] > a[3] && (a[3] = b[1])
    }

    function Zb(a, b, c, d, e) {
        for (; c < d; c += e) {
            var f = a, g = b[c], h = b[c + 1];
            f[0] = Math.min(f[0], g);
            f[1] = Math.min(f[1], h);
            f[2] = Math.max(f[2], g);
            f[3] = Math.max(f[3], h)
        }
        return a
    }

    function bc(a, b, c) {
        var d;
        return (d = b.call(c, cc(a))) || (d = b.call(c, dc(a))) || (d = b.call(c, ec(a))) ? d : (d = b.call(c, fc(a))) ? d : !1
    }

    function gc(a) {
        var b = 0;
        hc(a) || (b = ic(a) * jc(a));
        return b
    }

    function cc(a) {
        return [a[0], a[1]]
    }

    function dc(a) {
        return [a[2], a[1]]
    }

    function kc(a) {
        return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
    }

    function lc(a, b, c, d, e) {
        var f = b * d[0] / 2;
        d = b * d[1] / 2;
        b = Math.cos(c);
        var g = Math.sin(c);
        c = f * b;
        f *= g;
        b *= d;
        var h = d * g, l = a[0], m = a[1];
        a = l - c + h;
        d = l - c - h;
        g = l + c - h;
        c = l + c + h;
        var h = m - f - b, l = m - f + b, n = m + f + b, f = m + f - b;
        return Wb(Math.min(a, d, g, c), Math.min(h, l, n, f), Math.max(a, d, g, c), Math.max(h, l, n, f), e)
    }

    function jc(a) {
        return a[3] - a[1]
    }

    function mc(a, b, c) {
        c = c ? c : Lb();
        nc(a, b) && (c[0] = a[0] > b[0] ? a[0] : b[0], c[1] = a[1] > b[1] ? a[1] : b[1], c[2] = a[2] < b[2] ? a[2] : b[2], c[3] = a[3] < b[3] ? a[3] : b[3]);
        return c
    }

    function fc(a) {
        return [a[0], a[3]]
    }

    function ec(a) {
        return [a[2], a[3]]
    }

    function ic(a) {
        return a[2] - a[0]
    }

    function nc(a, b) {
        return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
    }

    function hc(a) {
        return a[2] < a[0] || a[3] < a[1]
    }

    function oc(a, b) {
        var c = (a[2] - a[0]) / 2 * (b - 1), d = (a[3] - a[1]) / 2 * (b - 1);
        a[0] -= c;
        a[2] += c;
        a[1] -= d;
        a[3] += d
    }

    function pc(a, b, c) {
        a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
        b(a, a, 2);
        var d = [a[0], a[2], a[4], a[6]], e = [a[1], a[3], a[5], a[7]];
        b = Math.min.apply(null, d);
        a = Math.min.apply(null, e);
        d = Math.max.apply(null, d);
        e = Math.max.apply(null, e);
        return Wb(b, a, d, e, c)
    }

    function qc() {
        return !0
    }

    function rc() {
        return !1
    }

    /*

     Latitude/longitude spherical geodesy formulae taken from
     http://www.movable-type.co.uk/scripts/latlong.html
     Licensed under CC-BY-3.0.
     */
    function sc(a) {
        this.radius = a
    }

    sc.prototype.a = function (a) {
        for (var b = 0, c = a.length, d = a[c - 1][0], e = a[c - 1][1], f = 0; f < c; f++)var g = a[f][0], h = a[f][1], b = b + wa(g - d) * (2 + Math.sin(wa(e)) + Math.sin(wa(h))), d = g, e = h;
        return b * this.radius * this.radius / 2
    };
    sc.prototype.b = function (a, b) {
        var c = wa(a[1]), d = wa(b[1]), e = (d - c) / 2, f = wa(b[0] - a[0]) / 2, c = Math.sin(e) * Math.sin(e) + Math.sin(f) * Math.sin(f) * Math.cos(c) * Math.cos(d);
        return 2 * this.radius * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
    };
    sc.prototype.offset = function (a, b, c) {
        var d = wa(a[1]);
        b /= this.radius;
        var e = Math.asin(Math.sin(d) * Math.cos(b) + Math.cos(d) * Math.sin(b) * Math.cos(c));
        return [180 * (wa(a[0]) + Math.atan2(Math.sin(c) * Math.sin(b) * Math.cos(d), Math.cos(b) - Math.sin(d) * Math.sin(e))) / Math.PI, 180 * e / Math.PI]
    };
    var tc = new sc(6370997);
    var uc = {};
    uc.degrees = 2 * Math.PI * tc.radius / 360;
    uc.ft = .3048;
    uc.m = 1;
    uc["us-ft"] = 1200 / 3937;
    function vc(a) {
        this.cb = a.code;
        this.c = a.units;
        this.f = void 0 !== a.extent ? a.extent : null;
        this.i = void 0 !== a.worldExtent ? a.worldExtent : null;
        this.b = void 0 !== a.axisOrientation ? a.axisOrientation : "enu";
        this.g = void 0 !== a.global ? a.global : !1;
        this.a = !(!this.g || !this.f);
        this.o = void 0 !== a.getPointResolution ? a.getPointResolution : this.sk;
        this.l = null;
        this.j = a.metersPerUnit;
        var b = wc, c = a.code, d = xc || pa.proj4;
        if ("function" == typeof d && void 0 === b[c]) {
            var e = d.defs(c);
            if (void 0 !== e) {
                void 0 !== e.axis && void 0 === a.axisOrientation &&
                (this.b = e.axis);
                void 0 === a.metersPerUnit && (this.j = e.to_meter);
                void 0 === a.units && (this.c = e.units);
                for (var f in b)b = d.defs(f), void 0 !== b && (a = yc(f), b === e ? zc([a, this]) : (b = d(f, c), Ac(a, this, b.forward, b.inverse)))
            }
        }
    }

    k = vc.prototype;
    k.Sj = function () {
        return this.cb
    };
    k.H = function () {
        return this.f
    };
    k.wb = function () {
        return this.c
    };
    k.$b = function () {
        return this.j || uc[this.c]
    };
    k.Ek = function () {
        return this.i
    };
    k.pl = function () {
        return this.g
    };
    k.ep = function (a) {
        this.g = a;
        this.a = !(!a || !this.f)
    };
    k.Mm = function (a) {
        this.f = a;
        this.a = !(!this.g || !a)
    };
    k.mp = function (a) {
        this.i = a
    };
    k.cp = function (a) {
        this.o = a
    };
    k.sk = function (a, b) {
        if ("degrees" == this.wb())return a;
        var c = Bc(this, yc("EPSG:4326")), d = [b[0] - a / 2, b[1], b[0] + a / 2, b[1], b[0], b[1] - a / 2, b[0], b[1] + a / 2], d = c(d, d, 2), c = tc.b(d.slice(0, 2), d.slice(2, 4)), d = tc.b(d.slice(4, 6), d.slice(6, 8)), d = (c + d) / 2, c = this.$b();
        void 0 !== c && (d /= c);
        return d
    };
    k.getPointResolution = function (a, b) {
        return this.o(a, b)
    };
    var wc = {}, Cc = {}, xc = null;

    function zc(a) {
        Dc(a);
        a.forEach(function (b) {
            a.forEach(function (a) {
                b !== a && Ec(b, a, Fc)
            })
        })
    }

    function Gc() {
        var a = Hc, b = Ic, c = Jc;
        Kc.forEach(function (d) {
            a.forEach(function (a) {
                Ec(d, a, b);
                Ec(a, d, c)
            })
        })
    }

    function Lc(a) {
        wc[a.cb] = a;
        Ec(a, a, Fc)
    }

    function Dc(a) {
        var b = [];
        a.forEach(function (a) {
            b.push(Lc(a))
        })
    }

    function Mc(a) {
        return a ? "string" === typeof a ? yc(a) : a : yc("EPSG:3857")
    }

    function Ec(a, b, c) {
        a = a.cb;
        b = b.cb;
        a in Cc || (Cc[a] = {});
        Cc[a][b] = c
    }

    function Ac(a, b, c, d) {
        a = yc(a);
        b = yc(b);
        Ec(a, b, Nc(c));
        Ec(b, a, Nc(d))
    }

    function Nc(a) {
        return function (b, c, d) {
            var e = b.length;
            d = void 0 !== d ? d : 2;
            c = void 0 !== c ? c : Array(e);
            var f, g;
            for (g = 0; g < e; g += d)for (f = a([b[g], b[g + 1]]), c[g] = f[0], c[g + 1] = f[1], f = d - 1; 2 <= f; --f)c[g + f] = b[g + f];
            return c
        }
    }

    function yc(a) {
        var b;
        if (a instanceof vc)b = a; else if ("string" === typeof a) {
            b = wc[a];
            var c = xc || pa.proj4;
            void 0 === b && "function" == typeof c && void 0 !== c.defs(a) && (b = new vc({code: a}), Lc(b))
        } else b = null;
        return b
    }

    function Oc(a, b) {
        if (a === b)return !0;
        var c = a.wb() === b.wb();
        return a.cb === b.cb ? c : Bc(a, b) === Fc && c
    }

    function Pc(a, b) {
        var c = yc(a), d = yc(b);
        return Bc(c, d)
    }

    function Bc(a, b) {
        var c = a.cb, d = b.cb, e;
        c in Cc && d in Cc[c] && (e = Cc[c][d]);
        void 0 === e && (e = Qc);
        return e
    }

    function Qc(a, b) {
        if (void 0 !== b && a !== b) {
            for (var c = 0, d = a.length; c < d; ++c)b[c] = a[c];
            a = b
        }
        return a
    }

    function Fc(a, b) {
        var c;
        if (void 0 !== b) {
            c = 0;
            for (var d = a.length; c < d; ++c)b[c] = a[c];
            c = b
        } else c = a.slice();
        return c
    }

    function Rc(a, b, c) {
        return Pc(b, c)(a, void 0, a.length)
    }

    function Sc(a, b, c) {
        b = Pc(b, c);
        return pc(a, b)
    }

    function Tc() {
        eb.call(this);
        this.v = Lb();
        this.A = -1;
        this.l = {};
        this.s = this.o = 0
    }

    y(Tc, eb);
    k = Tc.prototype;
    k.vb = function (a, b) {
        var c = b ? b : [NaN, NaN];
        this.sb(a[0], a[1], c, Infinity);
        return c
    };
    k.sg = function (a) {
        return this.Bc(a[0], a[1])
    };
    k.Bc = rc;
    k.H = function (a) {
        this.A != this.g && (this.v = this.Od(this.v), this.A = this.g);
        var b = this.v;
        a ? (a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3]) : a = b;
        return a
    };
    k.Bb = function (a) {
        return this.od(a * a)
    };
    k.jb = function (a, b) {
        this.rc(Pc(a, b));
        return this
    };
    function Uc(a) {
        this.length = a.length || a;
        for (var b = 0; b < this.length; b++)this[b] = a[b] || 0
    }

    Uc.prototype.BYTES_PER_ELEMENT = 4;
    Uc.prototype.set = function (a, b) {
        b = b || 0;
        for (var c = 0; c < a.length && b + c < this.length; c++)this[b + c] = a[c]
    };
    Uc.prototype.toString = Array.prototype.join;
    "undefined" == typeof Float32Array && (Uc.BYTES_PER_ELEMENT = 4, Uc.prototype.BYTES_PER_ELEMENT = Uc.prototype.BYTES_PER_ELEMENT, Uc.prototype.set = Uc.prototype.set, Uc.prototype.toString = Uc.prototype.toString, t("Float32Array", Uc, void 0));
    function Vc(a) {
        this.length = a.length || a;
        for (var b = 0; b < this.length; b++)this[b] = a[b] || 0
    }

    Vc.prototype.BYTES_PER_ELEMENT = 8;
    Vc.prototype.set = function (a, b) {
        b = b || 0;
        for (var c = 0; c < a.length && b + c < this.length; c++)this[b + c] = a[c]
    };
    Vc.prototype.toString = Array.prototype.join;
    if ("undefined" == typeof Float64Array) {
        try {
            Vc.BYTES_PER_ELEMENT = 8
        } catch (a) {
        }
        Vc.prototype.BYTES_PER_ELEMENT = Vc.prototype.BYTES_PER_ELEMENT;
        Vc.prototype.set = Vc.prototype.set;
        Vc.prototype.toString = Vc.prototype.toString;
        t("Float64Array", Vc, void 0)
    }
    function Wc(a, b, c, d, e) {
        a[0] = b;
        a[1] = c;
        a[2] = d;
        a[3] = e
    }

    function Xc() {
        var a = Array(16);
        Yc(a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return a
    }

    function Zc() {
        var a = Array(16);
        Yc(a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return a
    }

    function Yc(a, b, c, d, e, f, g, h, l, m, n, p, q, r, u, x, v) {
        a[0] = b;
        a[1] = c;
        a[2] = d;
        a[3] = e;
        a[4] = f;
        a[5] = g;
        a[6] = h;
        a[7] = l;
        a[8] = m;
        a[9] = n;
        a[10] = p;
        a[11] = q;
        a[12] = r;
        a[13] = u;
        a[14] = x;
        a[15] = v
    }

    function $c(a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5];
        a[6] = b[6];
        a[7] = b[7];
        a[8] = b[8];
        a[9] = b[9];
        a[10] = b[10];
        a[11] = b[11];
        a[12] = b[12];
        a[13] = b[13];
        a[14] = b[14];
        a[15] = b[15]
    }

    function ad(a) {
        a[0] = 1;
        a[1] = 0;
        a[2] = 0;
        a[3] = 0;
        a[4] = 0;
        a[5] = 1;
        a[6] = 0;
        a[7] = 0;
        a[8] = 0;
        a[9] = 0;
        a[10] = 1;
        a[11] = 0;
        a[12] = 0;
        a[13] = 0;
        a[14] = 0;
        a[15] = 1
    }

    function bd(a, b, c) {
        var d = a[0], e = a[1], f = a[2], g = a[3], h = a[4], l = a[5], m = a[6], n = a[7], p = a[8], q = a[9], r = a[10], u = a[11], x = a[12], v = a[13], D = a[14];
        a = a[15];
        var A = b[0], z = b[1], F = b[2], N = b[3], K = b[4], X = b[5], oa = b[6], H = b[7], ya = b[8], Ua = b[9], Xa = b[10], Va = b[11], Aa = b[12], Qb = b[13], Nb = b[14];
        b = b[15];
        c[0] = d * A + h * z + p * F + x * N;
        c[1] = e * A + l * z + q * F + v * N;
        c[2] = f * A + m * z + r * F + D * N;
        c[3] = g * A + n * z + u * F + a * N;
        c[4] = d * K + h * X + p * oa + x * H;
        c[5] = e * K + l * X + q * oa + v * H;
        c[6] = f * K + m * X + r * oa + D * H;
        c[7] = g * K + n * X + u * oa + a * H;
        c[8] = d * ya + h * Ua + p * Xa + x * Va;
        c[9] = e * ya + l * Ua + q * Xa + v * Va;
        c[10] = f *
            ya + m * Ua + r * Xa + D * Va;
        c[11] = g * ya + n * Ua + u * Xa + a * Va;
        c[12] = d * Aa + h * Qb + p * Nb + x * b;
        c[13] = e * Aa + l * Qb + q * Nb + v * b;
        c[14] = f * Aa + m * Qb + r * Nb + D * b;
        c[15] = g * Aa + n * Qb + u * Nb + a * b
    }

    function cd(a, b) {
        var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5], l = a[6], m = a[7], n = a[8], p = a[9], q = a[10], r = a[11], u = a[12], x = a[13], v = a[14], D = a[15], A = c * h - d * g, z = c * l - e * g, F = c * m - f * g, N = d * l - e * h, K = d * m - f * h, X = e * m - f * l, oa = n * x - p * u, H = n * v - q * u, ya = n * D - r * u, Ua = p * v - q * x, Xa = p * D - r * x, Va = q * D - r * v, Aa = A * Va - z * Xa + F * Ua + N * ya - K * H + X * oa;
        0 != Aa && (Aa = 1 / Aa, b[0] = (h * Va - l * Xa + m * Ua) * Aa, b[1] = (-d * Va + e * Xa - f * Ua) * Aa, b[2] = (x * X - v * K + D * N) * Aa, b[3] = (-p * X + q * K - r * N) * Aa, b[4] = (-g * Va + l * ya - m * H) * Aa, b[5] = (c * Va - e * ya + f * H) * Aa, b[6] = (-u * X + v * F - D * z) * Aa, b[7] = (n * X - q * F + r * z) * Aa,
            b[8] = (g * Xa - h * ya + m * oa) * Aa, b[9] = (-c * Xa + d * ya - f * oa) * Aa, b[10] = (u * K - x * F + D * A) * Aa, b[11] = (-n * K + p * F - r * A) * Aa, b[12] = (-g * Ua + h * H - l * oa) * Aa, b[13] = (c * Ua - d * H + e * oa) * Aa, b[14] = (-u * N + x * z - v * A) * Aa, b[15] = (n * N - p * z + q * A) * Aa)
    }

    function dd(a, b, c) {
        var d = a[1] * b + a[5] * c + 0 * a[9] + a[13], e = a[2] * b + a[6] * c + 0 * a[10] + a[14], f = a[3] * b + a[7] * c + 0 * a[11] + a[15];
        a[12] = a[0] * b + a[4] * c + 0 * a[8] + a[12];
        a[13] = d;
        a[14] = e;
        a[15] = f
    }

    function ed(a, b, c) {
        Yc(a, a[0] * b, a[1] * b, a[2] * b, a[3] * b, a[4] * c, a[5] * c, a[6] * c, a[7] * c, 1 * a[8], 1 * a[9], 1 * a[10], 1 * a[11], a[12], a[13], a[14], a[15])
    }

    function fd(a, b) {
        var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5], l = a[6], m = a[7], n = Math.cos(b), p = Math.sin(b);
        a[0] = c * n + g * p;
        a[1] = d * n + h * p;
        a[2] = e * n + l * p;
        a[3] = f * n + m * p;
        a[4] = c * -p + g * n;
        a[5] = d * -p + h * n;
        a[6] = e * -p + l * n;
        a[7] = f * -p + m * n
    }

    new Float64Array(3);
    new Float64Array(3);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(16);
    function gd(a, b, c, d, e, f) {
        var g = e[0], h = e[1], l = e[4], m = e[5], n = e[12];
        e = e[13];
        for (var p = f ? f : [], q = 0; b < c; b += d) {
            var r = a[b], u = a[b + 1];
            p[q++] = g * r + l * u + n;
            p[q++] = h * r + m * u + e
        }
        f && p.length != q && (p.length = q);
        return p
    }

    function hd() {
        Tc.call(this);
        this.f = "XY";
        this.a = 2;
        this.B = null
    }

    y(hd, Tc);
    function id(a) {
        if ("XY" == a)return 2;
        if ("XYZ" == a || "XYM" == a)return 3;
        if ("XYZM" == a)return 4
    }

    k = hd.prototype;
    k.Bc = rc;
    k.Od = function (a) {
        return Yb(this.B, 0, this.B.length, this.a, a)
    };
    k.Ib = function () {
        return this.B.slice(0, this.a)
    };
    k.la = function () {
        return this.B
    };
    k.Jb = function () {
        return this.B.slice(this.B.length - this.a)
    };
    k.Kb = function () {
        return this.f
    };
    k.od = function (a) {
        this.s != this.g && (Fa(this.l), this.o = 0, this.s = this.g);
        if (0 > a || 0 !== this.o && a <= this.o)return this;
        var b = a.toString();
        if (this.l.hasOwnProperty(b))return this.l[b];
        var c = this.Nc(a);
        if (c.la().length < this.B.length)return this.l[b] = c;
        this.o = a;
        return this
    };
    k.Nc = function () {
        return this
    };
    k.va = function () {
        return this.a
    };
    function jd(a, b, c) {
        a.a = id(b);
        a.f = b;
        a.B = c
    }

    function kd(a, b, c, d) {
        if (b)c = id(b); else {
            for (b = 0; b < d; ++b) {
                if (0 === c.length) {
                    a.f = "XY";
                    a.a = 2;
                    return
                }
                c = c[0]
            }
            c = c.length;
            b = 2 == c ? "XY" : 3 == c ? "XYZ" : 4 == c ? "XYZM" : void 0
        }
        a.f = b;
        a.a = c
    }

    k.rc = function (a) {
        this.B && (a(this.B, this.B, this.a), this.u())
    };
    k.rotate = function (a, b) {
        var c = this.la();
        if (c) {
            for (var d = c.length, e = this.va(), f = c ? c : [], g = Math.cos(a), h = Math.sin(a), l = b[0], m = b[1], n = 0, p = 0; p < d; p += e) {
                var q = c[p] - l, r = c[p + 1] - m;
                f[n++] = l + q * g - r * h;
                f[n++] = m + q * h + r * g;
                for (q = p + 2; q < p + e; ++q)f[n++] = c[q]
            }
            c && f.length != n && (f.length = n);
            this.u()
        }
    };
    k.Sc = function (a, b) {
        var c = this.la();
        if (c) {
            var d = c.length, e = this.va(), f = c ? c : [], g = 0, h, l;
            for (h = 0; h < d; h += e)for (f[g++] = c[h] + a, f[g++] = c[h + 1] + b, l = h + 2; l < h + e; ++l)f[g++] = c[l];
            c && f.length != g && (f.length = g);
            this.u()
        }
    };
    function ld(a, b, c, d) {
        for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d)var h = a[b], l = a[b + 1], e = e + (g * h - f * l), f = h, g = l;
        return e / 2
    }

    function md(a, b, c, d) {
        var e = 0, f, g;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var h = c[f], e = e + ld(a, b, h, d);
            b = h
        }
        return e
    }

    function nd(a, b, c, d, e, f, g) {
        var h = a[b], l = a[b + 1], m = a[c] - h, n = a[c + 1] - l;
        if (0 !== m || 0 !== n)if (f = ((e - h) * m + (f - l) * n) / (m * m + n * n), 1 < f)b = c; else if (0 < f) {
            for (e = 0; e < d; ++e)g[e] = za(a[b + e], a[c + e], f);
            g.length = d;
            return
        }
        for (e = 0; e < d; ++e)g[e] = a[b + e];
        g.length = d
    }

    function od(a, b, c, d, e) {
        var f = a[b], g = a[b + 1];
        for (b += d; b < c; b += d) {
            var h = a[b], l = a[b + 1], f = va(f, g, h, l);
            f > e && (e = f);
            f = h;
            g = l
        }
        return e
    }

    function pd(a, b, c, d, e) {
        var f, g;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var h = c[f];
            e = od(a, b, h, d, e);
            b = h
        }
        return e
    }

    function qd(a, b, c, d, e, f, g, h, l, m, n) {
        if (b == c)return m;
        var p;
        if (0 === e) {
            p = va(g, h, a[b], a[b + 1]);
            if (p < m) {
                for (n = 0; n < d; ++n)l[n] = a[b + n];
                l.length = d;
                return p
            }
            return m
        }
        for (var q = n ? n : [NaN, NaN], r = b + d; r < c;)if (nd(a, r - d, r, d, g, h, q), p = va(g, h, q[0], q[1]), p < m) {
            m = p;
            for (n = 0; n < d; ++n)l[n] = q[n];
            l.length = d;
            r += d
        } else r += d * Math.max((Math.sqrt(p) - Math.sqrt(m)) / e | 0, 1);
        if (f && (nd(a, c - d, b, d, g, h, q), p = va(g, h, q[0], q[1]), p < m)) {
            m = p;
            for (n = 0; n < d; ++n)l[n] = q[n];
            l.length = d
        }
        return m
    }

    function rd(a, b, c, d, e, f, g, h, l, m, n) {
        n = n ? n : [NaN, NaN];
        var p, q;
        p = 0;
        for (q = c.length; p < q; ++p) {
            var r = c[p];
            m = qd(a, b, r, d, e, f, g, h, l, m, n);
            b = r
        }
        return m
    }

    function sd(a, b) {
        var c = 0, d, e;
        d = 0;
        for (e = b.length; d < e; ++d)a[c++] = b[d];
        return c
    }

    function td(a, b, c, d) {
        var e, f;
        e = 0;
        for (f = c.length; e < f; ++e) {
            var g = c[e], h;
            for (h = 0; h < d; ++h)a[b++] = g[h]
        }
        return b
    }

    function ud(a, b, c, d, e) {
        e = e ? e : [];
        var f = 0, g, h;
        g = 0;
        for (h = c.length; g < h; ++g)b = td(a, b, c[g], d), e[f++] = b;
        e.length = f;
        return e
    }

    function vd(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        for (var f = 0; b < c; b += d)e[f++] = a.slice(b, b + d);
        e.length = f;
        return e
    }

    function wd(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        var f = 0, g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var l = c[g];
            e[f++] = vd(a, b, l, d, e[f]);
            b = l
        }
        e.length = f;
        return e
    }

    function xd(a, b, c, d, e, f, g) {
        var h = (c - b) / d;
        if (3 > h) {
            for (; b < c; b += d)f[g++] = a[b], f[g++] = a[b + 1];
            return g
        }
        var l = Array(h);
        l[0] = 1;
        l[h - 1] = 1;
        c = [b, c - d];
        for (var m = 0, n; 0 < c.length;) {
            var p = c.pop(), q = c.pop(), r = 0, u = a[q], x = a[q + 1], v = a[p], D = a[p + 1];
            for (n = q + d; n < p; n += d) {
                var A = ua(a[n], a[n + 1], u, x, v, D);
                A > r && (m = n, r = A)
            }
            r > e && (l[(m - b) / d] = 1, q + d < m && c.push(q, m), m + d < p && c.push(m, p))
        }
        for (n = 0; n < h; ++n)l[n] && (f[g++] = a[b + n * d], f[g++] = a[b + n * d + 1]);
        return g
    }

    function yd(a, b, c, d, e, f, g, h) {
        var l, m;
        l = 0;
        for (m = c.length; l < m; ++l) {
            var n = c[l];
            a:{
                var p = a, q = n, r = d, u = e, x = f;
                if (b != q) {
                    var v = u * Math.round(p[b] / u), D = u * Math.round(p[b + 1] / u);
                    b += r;
                    x[g++] = v;
                    x[g++] = D;
                    var A, z;
                    do if (A = u * Math.round(p[b] / u), z = u * Math.round(p[b + 1] / u), b += r, b == q) {
                        x[g++] = A;
                        x[g++] = z;
                        break a
                    } while (A == v && z == D);
                    for (; b < q;) {
                        var F, N;
                        F = u * Math.round(p[b] / u);
                        N = u * Math.round(p[b + 1] / u);
                        b += r;
                        if (F != A || N != z) {
                            var K = A - v, X = z - D, oa = F - v, H = N - D;
                            K * H == X * oa && (0 > K && oa < K || K == oa || 0 < K && oa > K) && (0 > X && H < X || X == H || 0 < X && H > X) || (x[g++] = A, x[g++] =
                                z, v = A, D = z);
                            A = F;
                            z = N
                        }
                    }
                    x[g++] = A;
                    x[g++] = z
                }
            }
            h.push(g);
            b = n
        }
        return g
    }

    function zd(a, b) {
        hd.call(this);
        this.i = this.j = -1;
        this.pa(a, b)
    }

    y(zd, hd);
    k = zd.prototype;
    k.clone = function () {
        var a = new zd(null);
        Ad(a, this.f, this.B.slice());
        return a
    };
    k.sb = function (a, b, c, d) {
        if (d < Rb(this.H(), a, b))return d;
        this.i != this.g && (this.j = Math.sqrt(od(this.B, 0, this.B.length, this.a, 0)), this.i = this.g);
        return qd(this.B, 0, this.B.length, this.a, this.j, !0, a, b, c, d)
    };
    k.nm = function () {
        return ld(this.B, 0, this.B.length, this.a)
    };
    k.Z = function () {
        return vd(this.B, 0, this.B.length, this.a)
    };
    k.Nc = function (a) {
        var b = [];
        b.length = xd(this.B, 0, this.B.length, this.a, a, b, 0);
        a = new zd(null);
        Ad(a, "XY", b);
        return a
    };
    k.X = function () {
        return "LinearRing"
    };
    k.pa = function (a, b) {
        a ? (kd(this, b, a, 1), this.B || (this.B = []), this.B.length = td(this.B, 0, a, this.a), this.u()) : Ad(this, "XY", null)
    };
    function Ad(a, b, c) {
        jd(a, b, c);
        a.u()
    }

    function C(a, b) {
        hd.call(this);
        this.pa(a, b)
    }

    y(C, hd);
    k = C.prototype;
    k.clone = function () {
        var a = new C(null);
        a.ba(this.f, this.B.slice());
        return a
    };
    k.sb = function (a, b, c, d) {
        var e = this.B;
        a = va(a, b, e[0], e[1]);
        if (a < d) {
            d = this.a;
            for (b = 0; b < d; ++b)c[b] = e[b];
            c.length = d;
            return a
        }
        return d
    };
    k.Z = function () {
        return this.B ? this.B.slice() : []
    };
    k.Od = function (a) {
        return Xb(this.B, a)
    };
    k.X = function () {
        return "Point"
    };
    k.Ka = function (a) {
        return Tb(a, this.B[0], this.B[1])
    };
    k.pa = function (a, b) {
        a ? (kd(this, b, a, 0), this.B || (this.B = []), this.B.length = sd(this.B, a), this.u()) : this.ba("XY", null)
    };
    k.ba = function (a, b) {
        jd(this, a, b);
        this.u()
    };
    function Bd(a, b, c, d, e) {
        return !bc(e, function (e) {
            return !Cd(a, b, c, d, e[0], e[1])
        })
    }

    function Cd(a, b, c, d, e, f) {
        for (var g = !1, h = a[c - d], l = a[c - d + 1]; b < c; b += d) {
            var m = a[b], n = a[b + 1];
            l > f != n > f && e < (m - h) * (f - l) / (n - l) + h && (g = !g);
            h = m;
            l = n
        }
        return g
    }

    function Dd(a, b, c, d, e, f) {
        if (0 === c.length || !Cd(a, b, c[0], d, e, f))return !1;
        var g;
        b = 1;
        for (g = c.length; b < g; ++b)if (Cd(a, c[b - 1], c[b], d, e, f))return !1;
        return !0
    }

    function Ed(a, b, c, d, e, f, g) {
        var h, l, m, n, p, q = e[f + 1], r = [], u = c[0];
        m = a[u - d];
        p = a[u - d + 1];
        for (h = b; h < u; h += d) {
            n = a[h];
            l = a[h + 1];
            if (q <= p && l <= q || p <= q && q <= l)m = (q - p) / (l - p) * (n - m) + m, r.push(m);
            m = n;
            p = l
        }
        u = NaN;
        p = -Infinity;
        r.sort(ib);
        m = r[0];
        h = 1;
        for (l = r.length; h < l; ++h) {
            n = r[h];
            var x = Math.abs(n - m);
            x > p && (m = (m + n) / 2, Dd(a, b, c, d, m, q) && (u = m, p = x));
            m = n
        }
        isNaN(u) && (u = e[f]);
        return g ? (g.push(u, q), g) : [u, q]
    }

    function Fd(a, b, c, d, e, f) {
        for (var g = [a[b], a[b + 1]], h = [], l; b + d < c; b += d) {
            h[0] = a[b + d];
            h[1] = a[b + d + 1];
            if (l = e.call(f, g, h))return l;
            g[0] = h[0];
            g[1] = h[1]
        }
        return !1
    }

    function Gd(a, b, c, d, e) {
        var f = Zb(Lb(), a, b, c, d);
        return nc(e, f) ? Ub(e, f) || f[0] >= e[0] && f[2] <= e[2] || f[1] >= e[1] && f[3] <= e[3] ? !0 : Fd(a, b, c, d, function (a, b) {
            var c = !1, d = Vb(e, a), f = Vb(e, b);
            if (1 === d || 1 === f)c = !0; else {
                var p = e[0], q = e[1], r = e[2], u = e[3], x = b[0], v = b[1], D = (v - a[1]) / (x - a[0]);
                f & 2 && !(d & 2) && (c = x - (v - u) / D, c = c >= p && c <= r);
                c || !(f & 4) || d & 4 || (c = v - (x - r) * D, c = c >= q && c <= u);
                c || !(f & 8) || d & 8 || (c = x - (v - q) / D, c = c >= p && c <= r);
                c || !(f & 16) || d & 16 || (c = v - (x - p) * D, c = c >= q && c <= u)
            }
            return c
        }) : !1
    }

    function Hd(a, b, c, d, e) {
        var f = c[0];
        if (!(Gd(a, b, f, d, e) || Cd(a, b, f, d, e[0], e[1]) || Cd(a, b, f, d, e[0], e[3]) || Cd(a, b, f, d, e[2], e[1]) || Cd(a, b, f, d, e[2], e[3])))return !1;
        if (1 === c.length)return !0;
        b = 1;
        for (f = c.length; b < f; ++b)if (Bd(a, c[b - 1], c[b], d, e))return !1;
        return !0
    }

    function Id(a, b, c, d) {
        for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d)var h = a[b], l = a[b + 1], e = e + (h - f) * (l + g), f = h, g = l;
        return 0 < e
    }

    function Jd(a, b, c, d) {
        var e = 0;
        d = void 0 !== d ? d : !1;
        var f, g;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var h = b[f], e = Id(a, e, h, c);
            if (0 === f) {
                if (d && e || !d && !e)return !1
            } else if (d && !e || !d && e)return !1;
            e = h
        }
        return !0
    }

    function Kd(a, b, c, d, e) {
        e = void 0 !== e ? e : !1;
        var f, g;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var h = c[f], l = Id(a, b, h, d);
            if (0 === f ? e && l || !e && !l : e && !l || !e && l)for (var l = a, m = h, n = d; b < m - n;) {
                var p;
                for (p = 0; p < n; ++p) {
                    var q = l[b + p];
                    l[b + p] = l[m - n + p];
                    l[m - n + p] = q
                }
                b += n;
                m -= n
            }
            b = h
        }
        return b
    }

    function Ld(a, b, c, d) {
        var e = 0, f, g;
        f = 0;
        for (g = b.length; f < g; ++f)e = Kd(a, e, b[f], c, d);
        return e
    }

    function E(a, b) {
        hd.call(this);
        this.i = [];
        this.C = -1;
        this.D = null;
        this.T = this.R = this.S = -1;
        this.j = null;
        this.pa(a, b)
    }

    y(E, hd);
    k = E.prototype;
    k.yj = function (a) {
        this.B ? mb(this.B, a.la()) : this.B = a.la().slice();
        this.i.push(this.B.length);
        this.u()
    };
    k.clone = function () {
        var a = new E(null);
        a.ba(this.f, this.B.slice(), this.i.slice());
        return a
    };
    k.sb = function (a, b, c, d) {
        if (d < Rb(this.H(), a, b))return d;
        this.R != this.g && (this.S = Math.sqrt(pd(this.B, 0, this.i, this.a, 0)), this.R = this.g);
        return rd(this.B, 0, this.i, this.a, this.S, !0, a, b, c, d)
    };
    k.Bc = function (a, b) {
        return Dd(this.Mb(), 0, this.i, this.a, a, b)
    };
    k.qm = function () {
        return md(this.Mb(), 0, this.i, this.a)
    };
    k.Z = function (a) {
        var b;
        void 0 !== a ? (b = this.Mb().slice(), Kd(b, 0, this.i, this.a, a)) : b = this.B;
        return wd(b, 0, this.i, this.a)
    };
    k.Db = function () {
        return this.i
    };
    function Md(a) {
        if (a.C != a.g) {
            var b = kc(a.H());
            a.D = Ed(a.Mb(), 0, a.i, a.a, b, 0);
            a.C = a.g
        }
        return a.D
    }

    k.bk = function () {
        return new C(Md(this))
    };
    k.gk = function () {
        return this.i.length
    };
    k.Hg = function (a) {
        if (0 > a || this.i.length <= a)return null;
        var b = new zd(null);
        Ad(b, this.f, this.B.slice(0 === a ? 0 : this.i[a - 1], this.i[a]));
        return b
    };
    k.Vd = function () {
        var a = this.f, b = this.B, c = this.i, d = [], e = 0, f, g;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var h = c[f], l = new zd(null);
            Ad(l, a, b.slice(e, h));
            d.push(l);
            e = h
        }
        return d
    };
    k.Mb = function () {
        if (this.T != this.g) {
            var a = this.B;
            Jd(a, this.i, this.a) ? this.j = a : (this.j = a.slice(), this.j.length = Kd(this.j, 0, this.i, this.a));
            this.T = this.g
        }
        return this.j
    };
    k.Nc = function (a) {
        var b = [], c = [];
        b.length = yd(this.B, 0, this.i, this.a, Math.sqrt(a), b, 0, c);
        a = new E(null);
        a.ba("XY", b, c);
        return a
    };
    k.X = function () {
        return "Polygon"
    };
    k.Ka = function (a) {
        return Hd(this.Mb(), 0, this.i, this.a, a)
    };
    k.pa = function (a, b) {
        if (a) {
            kd(this, b, a, 2);
            this.B || (this.B = []);
            var c = ud(this.B, 0, a, this.a, this.i);
            this.B.length = 0 === c.length ? 0 : c[c.length - 1];
            this.u()
        } else this.ba("XY", null, this.i)
    };
    k.ba = function (a, b, c) {
        jd(this, a, b);
        this.i = c;
        this.u()
    };
    function Nd(a, b, c, d) {
        var e = d ? d : 32;
        d = [];
        var f;
        for (f = 0; f < e; ++f)mb(d, a.offset(b, c, 2 * Math.PI * f / e));
        d.push(d[0], d[1]);
        a = new E(null);
        a.ba("XY", d, [d.length]);
        return a
    }

    function Od(a) {
        var b = a[0], c = a[1], d = a[2];
        a = a[3];
        b = [b, c, b, a, d, a, d, c, b, c];
        c = new E(null);
        c.ba("XY", b, [b.length]);
        return c
    }

    function Pd(a, b, c) {
        var d = b ? b : 32, e = a.va();
        b = a.f;
        for (var f = new E(null, b), d = e * (d + 1), e = Array(d), g = 0; g < d; g++)e[g] = 0;
        f.ba(b, e, [e.length]);
        Qd(f, a.rd(), a.wf(), c);
        return f
    }

    function Qd(a, b, c, d) {
        var e = a.la(), f = a.f, g = a.va(), h = a.Db(), l = e.length / g - 1;
        d = d ? d : 0;
        for (var m, n, p = 0; p <= l; ++p)n = p * g, m = d + 2 * xa(p, l) * Math.PI / l, e[n] = b[0] + c * Math.cos(m), e[n + 1] = b[1] + c * Math.sin(m);
        a.ba(f, e, h)
    }

    function Rd(a) {
        eb.call(this);
        a = a || {};
        this.f = [0, 0];
        var b = {};
        b.center = void 0 !== a.center ? a.center : null;
        this.l = Mc(a.projection);
        var c, d, e, f = void 0 !== a.minZoom ? a.minZoom : 0;
        c = void 0 !== a.maxZoom ? a.maxZoom : 28;
        var g = void 0 !== a.zoomFactor ? a.zoomFactor : 2;
        if (void 0 !== a.resolutions)c = a.resolutions, d = c[0], e = c[c.length - 1], c = tb(c); else {
            d = Mc(a.projection);
            e = d.H();
            var h = (e ? Math.max(ic(e), jc(e)) : 360 * uc.degrees / d.$b()) / 256 / Math.pow(2, 0), l = h / Math.pow(2, 28);
            d = a.maxResolution;
            void 0 !== d ? f = 0 : d = h / Math.pow(g, f);
            e = a.minResolution;
            void 0 === e && (e = void 0 !== a.maxZoom ? void 0 !== a.maxResolution ? d / Math.pow(g, c) : h / Math.pow(g, c) : l);
            c = f + Math.floor(Math.log(d / e) / Math.log(g));
            e = d / Math.pow(g, c - f);
            c = ub(g, d, c - f)
        }
        this.a = d;
        this.c = e;
        this.j = a.resolutions;
        this.i = f;
        f = void 0 !== a.extent ? Ba(a.extent) : Ca;
        (void 0 !== a.enableRotation ? a.enableRotation : 1) ? (d = a.constrainRotation, d = void 0 === d || !0 === d ? yb() : !1 === d ? wb : ea(d) ? xb(d) : wb) : d = vb;
        this.o = new Da(f, c, d);
        void 0 !== a.resolution ? b.resolution = a.resolution : void 0 !== a.zoom && (b.resolution = this.constrainResolution(this.a,
            a.zoom - this.i));
        b.rotation = void 0 !== a.rotation ? a.rotation : 0;
        this.G(b)
    }

    y(Rd, eb);
    k = Rd.prototype;
    k.Pd = function (a) {
        return this.o.center(a)
    };
    k.constrainResolution = function (a, b, c) {
        return this.o.resolution(a, b || 0, c || 0)
    };
    k.constrainRotation = function (a, b) {
        return this.o.rotation(a, b || 0)
    };
    k.ab = function () {
        return this.get("center")
    };
    function Sd(a, b) {
        return void 0 !== b ? (b[0] = a.f[0], b[1] = a.f[1], b) : a.f.slice()
    }

    k.Kc = function (a) {
        var b = this.ab(), c = this.$(), d = this.La();
        return lc(b, c, d, a)
    };
    k.Vl = function () {
        return this.a
    };
    k.Wl = function () {
        return this.c
    };
    k.Xl = function () {
        return this.l
    };
    k.$ = function () {
        return this.get("resolution")
    };
    k.Yl = function () {
        return this.j
    };
    function Td(a, b) {
        return Math.max(ic(a) / b[0], jc(a) / b[1])
    }

    function Ud(a) {
        var b = a.a, c = Math.log(b / a.c) / Math.log(2);
        return function (a) {
            return b / Math.pow(2, a * c)
        }
    }

    k.La = function () {
        return this.get("rotation")
    };
    function Vd(a) {
        var b = a.a, c = Math.log(b / a.c) / Math.log(2);
        return function (a) {
            return Math.log(b / a) / Math.log(2) / c
        }
    }

    k.V = function () {
        var a = this.ab(), b = this.l, c = this.$(), d = this.La();
        return {
            center: [Math.round(a[0] / c) * c, Math.round(a[1] / c) * c],
            projection: void 0 !== b ? b : null,
            resolution: c,
            rotation: d
        }
    };
    k.Fk = function () {
        var a, b = this.$();
        if (void 0 !== b) {
            var c, d = 0;
            do {
                c = this.constrainResolution(this.a, d);
                if (c == b) {
                    a = d;
                    break
                }
                ++d
            } while (c > this.c)
        }
        return void 0 !== a ? this.i + a : a
    };
    k.cf = function (a, b, c) {
        a instanceof hd || (a = Od(a));
        var d = c || {};
        c = void 0 !== d.padding ? d.padding : [0, 0, 0, 0];
        var e = void 0 !== d.constrainResolution ? d.constrainResolution : !0, f = void 0 !== d.nearest ? d.nearest : !1, g;
        void 0 !== d.minResolution ? g = d.minResolution : void 0 !== d.maxZoom ? g = this.constrainResolution(this.a, d.maxZoom - this.i, 0) : g = 0;
        var h = a.la(), l = this.La(), d = Math.cos(-l), l = Math.sin(-l), m = Infinity, n = Infinity, p = -Infinity, q = -Infinity;
        a = a.va();
        for (var r = 0, u = h.length; r < u; r += a)var x = h[r] * d - h[r + 1] * l, v = h[r] * l + h[r + 1] * d,
            m = Math.min(m, x), n = Math.min(n, v), p = Math.max(p, x), q = Math.max(q, v);
        b = Td([m, n, p, q], [b[0] - c[1] - c[3], b[1] - c[0] - c[2]]);
        b = isNaN(b) ? g : Math.max(b, g);
        e && (g = this.constrainResolution(b, 0, 0), !f && g < b && (g = this.constrainResolution(g, -1, 0)), b = g);
        this.Ub(b);
        l = -l;
        f = (m + p) / 2 + (c[1] - c[3]) / 2 * b;
        c = (n + q) / 2 + (c[0] - c[2]) / 2 * b;
        this.mb([f * d - c * l, c * d + f * l])
    };
    k.Ej = function (a, b, c) {
        var d = this.La(), e = Math.cos(-d), d = Math.sin(-d), f = a[0] * e - a[1] * d;
        a = a[1] * e + a[0] * d;
        var g = this.$(), f = f + (b[0] / 2 - c[0]) * g;
        a += (c[1] - b[1] / 2) * g;
        d = -d;
        this.mb([f * e - a * d, a * e + f * d])
    };
    function Wd(a) {
        return !!a.ab() && void 0 !== a.$()
    }

    k.rotate = function (a, b) {
        if (void 0 !== b) {
            var c, d = this.ab();
            void 0 !== d && (c = [d[0] - b[0], d[1] - b[1]], Gb(c, a - this.La()), Bb(c, b));
            this.mb(c)
        }
        this.ie(a)
    };
    k.mb = function (a) {
        this.set("center", a)
    };
    function Xd(a, b) {
        a.f[1] += b
    }

    k.Ub = function (a) {
        this.set("resolution", a)
    };
    k.ie = function (a) {
        this.set("rotation", a)
    };
    k.np = function (a) {
        a = this.constrainResolution(this.a, a - this.i, 0);
        this.Ub(a)
    };
    function Yd(a) {
        return Math.pow(a, 3)
    }

    function Zd(a) {
        return 1 - Yd(1 - a)
    }

    function $d(a) {
        return 3 * a * a - 2 * a * a * a
    }

    function ae(a) {
        return a
    }

    function be(a) {
        return .5 > a ? $d(2 * a) : 1 - $d(2 * (a - .5))
    }

    function ce(a) {
        var b = a.source, c = a.start ? a.start : Date.now(), d = b[0], e = b[1], f = void 0 !== a.duration ? a.duration : 1E3, g = a.easing ? a.easing : $d;
        return function (a, b) {
            if (b.time < c)return b.animate = !0, b.viewHints[0] += 1, !0;
            if (b.time < c + f) {
                var m = 1 - g((b.time - c) / f), n = d - b.viewState.center[0], p = e - b.viewState.center[1];
                b.animate = !0;
                b.viewState.center[0] += m * n;
                b.viewState.center[1] += m * p;
                b.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function de(a) {
        var b = a.rotation ? a.rotation : 0, c = a.start ? a.start : Date.now(), d = void 0 !== a.duration ? a.duration : 1E3, e = a.easing ? a.easing : $d, f = a.anchor ? a.anchor : null;
        return function (a, h) {
            if (h.time < c)return h.animate = !0, h.viewHints[0] += 1, !0;
            if (h.time < c + d) {
                var l = 1 - e((h.time - c) / d), l = (b - h.viewState.rotation) * l;
                h.animate = !0;
                h.viewState.rotation += l;
                if (f) {
                    var m = h.viewState.center;
                    m[0] -= f[0];
                    m[1] -= f[1];
                    Gb(m, l);
                    Bb(m, f)
                }
                h.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function ee(a) {
        var b = a.resolution, c = a.start ? a.start : Date.now(), d = void 0 !== a.duration ? a.duration : 1E3, e = a.easing ? a.easing : $d;
        return function (a, g) {
            if (g.time < c)return g.animate = !0, g.viewHints[0] += 1, !0;
            if (g.time < c + d) {
                var h = 1 - e((g.time - c) / d), l = b - g.viewState.resolution;
                g.animate = !0;
                g.viewState.resolution += h * l;
                g.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function fe(a, b, c, d) {
        this.ca = a;
        this.ea = b;
        this.fa = c;
        this.ga = d
    }

    fe.prototype.contains = function (a) {
        return ge(this, a[1], a[2])
    };
    function ge(a, b, c) {
        return a.ca <= b && b <= a.ea && a.fa <= c && c <= a.ga
    }

    function he(a, b) {
        return a.ca == b.ca && a.fa == b.fa && a.ea == b.ea && a.ga == b.ga
    }

    function ie(a, b) {
        return a.ca <= b.ea && a.ea >= b.ca && a.fa <= b.ga && a.ga >= b.fa
    }

    function je(a) {
        this.a = a.html;
        this.b = a.tileRanges ? a.tileRanges : null
    }

    je.prototype.g = function () {
        return this.a
    };
    function ke(a, b, c) {
        Wa.call(this, a, c);
        this.element = b
    }

    y(ke, Wa);
    function le(a) {
        eb.call(this);
        this.a = a ? a : [];
        me(this)
    }

    y(le, eb);
    k = le.prototype;
    k.clear = function () {
        for (; 0 < this.dc();)this.pop()
    };
    k.qf = function (a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; ++b)this.push(a[b]);
        return this
    };
    k.forEach = function (a, b) {
        this.a.forEach(a, b)
    };
    k.Gl = function () {
        return this.a
    };
    k.item = function (a) {
        return this.a[a]
    };
    k.dc = function () {
        return this.get("length")
    };
    k.ee = function (a, b) {
        this.a.splice(a, 0, b);
        me(this);
        this.b(new ke("add", b, this))
    };
    k.pop = function () {
        return this.Rf(this.dc() - 1)
    };
    k.push = function (a) {
        var b = this.a.length;
        this.ee(b, a);
        return b
    };
    k.remove = function (a) {
        var b = this.a, c, d;
        c = 0;
        for (d = b.length; c < d; ++c)if (b[c] === a)return this.Rf(c)
    };
    k.Rf = function (a) {
        var b = this.a[a];
        this.a.splice(a, 1);
        me(this);
        this.b(new ke("remove", b, this));
        return b
    };
    k.Zo = function (a, b) {
        var c = this.dc();
        if (a < c)c = this.a[a], this.a[a] = b, this.b(new ke("remove", c, this)), this.b(new ke("add", b, this)); else {
            for (; c < a; ++c)this.ee(c, void 0);
            this.ee(a, b)
        }
    };
    function me(a) {
        a.set("length", a.a.length)
    }

    function ne(a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    }

    function oe(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
            return c
        }
        return []
    }

    function pe(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    var qe = /^#(?:[0-9a-f]{3}){1,2}$/i, re = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i, se = /^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;

    function te(a) {
        return Array.isArray(a) ? a : ue(a)
    }

    function ve(a) {
        if ("string" !== typeof a) {
            var b = a[0];
            b != (b | 0) && (b = b + .5 | 0);
            var c = a[1];
            c != (c | 0) && (c = c + .5 | 0);
            var d = a[2];
            d != (d | 0) && (d = d + .5 | 0);
            a = "rgba(" + b + "," + c + "," + d + "," + (void 0 === a[3] ? 1 : a[3]) + ")"
        }
        return a
    }

    var ue = function () {
        var a = {}, b = 0;
        return function (c) {
            var d;
            if (a.hasOwnProperty(c))d = a[c]; else {
                if (1024 <= b) {
                    d = 0;
                    for (var e in a)0 === (d++ & 3) && (delete a[e], --b)
                }
                var f, g;
                qe.exec(c) ? (g = 3 == c.length - 1 ? 1 : 2, d = parseInt(c.substr(1 + 0 * g, g), 16), e = parseInt(c.substr(1 + 1 * g, g), 16), f = parseInt(c.substr(1 + 2 * g, g), 16), 1 == g && (d = (d << 4) + d, e = (e << 4) + e, f = (f << 4) + f), d = [d, e, f, 1]) : (g = se.exec(c)) ? (d = Number(g[1]), e = Number(g[2]), f = Number(g[3]), g = Number(g[4]), d = [d, e, f, g], d = we(d, d)) : (g = re.exec(c)) ? (d = Number(g[1]), e = Number(g[2]), f = Number(g[3]),
                    d = [d, e, f, 1], d = we(d, d)) : d = void 0;
                a[c] = d;
                ++b
            }
            return d
        }
    }();

    function we(a, b) {
        var c = b || [];
        c[0] = sa(a[0] + .5 | 0, 0, 255);
        c[1] = sa(a[1] + .5 | 0, 0, 255);
        c[2] = sa(a[2] + .5 | 0, 0, 255);
        c[3] = sa(a[3], 0, 1);
        return c
    }

    function xe(a) {
        return "string" === typeof a || a instanceof CanvasPattern || a instanceof CanvasGradient ? a : ve(a)
    }

    var ye;
    a:{
        var ze = aa.navigator;
        if (ze) {
            var Ae = ze.userAgent;
            if (Ae) {
                ye = Ae;
                break a
            }
        }
        ye = ""
    }
    function Be(a) {
        return -1 != ye.indexOf(a)
    }

    var Ce = Be("Opera"), Ee = Be("Trident") || Be("MSIE"), Fe = Be("Edge"), Ge = Be("Gecko") && !(-1 != ye.toLowerCase().indexOf("webkit") && !Be("Edge")) && !(Be("Trident") || Be("MSIE")) && !Be("Edge"), He = -1 != ye.toLowerCase().indexOf("webkit") && !Be("Edge"), Ie;
    a:{
        var Je = "", Ke = function () {
            var a = ye;
            if (Ge)return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (Fe)return /Edge\/([\d\.]+)/.exec(a);
            if (Ee)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (He)return /WebKit\/(\S+)/.exec(a);
            if (Ce)return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Ke && (Je = Ke ? Ke[1] : "");
        if (Ee) {
            var Le, Me = aa.document;
            Le = Me ? Me.documentMode : void 0;
            if (null != Le && Le > parseFloat(Je)) {
                Ie = String(Le);
                break a
            }
        }
        Ie = Je
    }
    var Ne = {};

    function Oe(a, b) {
        var c = document.createElement("CANVAS");
        a && (c.width = a);
        b && (c.height = b);
        return c.getContext("2d")
    }

    var Pe = function () {
        var a;
        return function () {
            if (void 0 === a) {
                var b = document.createElement("P"), c, d = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
                document.body.appendChild(b);
                for (var e in d)e in b.style && (b.style[e] = "translate(1px,1px)", c = pa.getComputedStyle(b).getPropertyValue(d[e]));
                document.body.removeChild(b);
                a = c && "none" !== c
            }
            return a
        }
    }(), Qe = function () {
        var a;
        return function () {
            if (void 0 === a) {
                var b = document.createElement("P"),
                    c, d = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                document.body.appendChild(b);
                for (var e in d)e in b.style && (b.style[e] = "translate3d(1px,1px,1px)", c = pa.getComputedStyle(b).getPropertyValue(d[e]));
                document.body.removeChild(b);
                a = c && "none" !== c
            }
            return a
        }
    }();

    function Re(a, b) {
        var c = a.style;
        c.WebkitTransform = b;
        c.MozTransform = b;
        c.b = b;
        c.msTransform = b;
        c.transform = b;
        if ((c = Ee) && !(c = Ne["9.0"])) {
            for (var c = 0, d = qa(String(Ie)).split("."), e = qa("9.0").split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
                var h = d[g] || "", l = e[g] || "", m = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var p = m.exec(h) || ["", "", ""], q = n.exec(l) || ["", "", ""];
                    if (0 == p[0].length && 0 == q[0].length)break;
                    c = ra(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || ra(0 ==
                            p[2].length, 0 == q[2].length) || ra(p[2], q[2])
                } while (0 == c)
            }
            c = Ne["9.0"] = 0 <= c
        }
        c && (a.style.transformOrigin = "0 0")
    }

    function Se(a, b) {
        var c;
        if (Qe()) {
            var d = Array(16);
            for (c = 0; 16 > c; ++c)d[c] = b[c].toFixed(6);
            Re(a, "matrix3d(" + d.join(",") + ")")
        } else if (Pe()) {
            var d = [b[0], b[1], b[4], b[5], b[12], b[13]], e = Array(6);
            for (c = 0; 6 > c; ++c)e[c] = d[c].toFixed(6);
            Re(a, "matrix(" + e.join(",") + ")")
        } else a.style.left = Math.round(b[12]) + "px", a.style.top = Math.round(b[13]) + "px"
    }

    function Te(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }

    function Ue(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function Ve(a) {
        for (; a.lastChild;)a.removeChild(a.lastChild)
    }

    function We(a, b, c) {
        Wa.call(this, a);
        this.map = b;
        this.frameState = void 0 !== c ? c : null
    }

    y(We, Wa);
    function Xe(a) {
        eb.call(this);
        this.element = a.element ? a.element : null;
        this.a = this.S = null;
        this.s = [];
        this.render = a.render ? a.render : na;
        a.target && this.c(a.target)
    }

    y(Xe, eb);
    Xe.prototype.ka = function () {
        Ue(this.element);
        eb.prototype.ka.call(this)
    };
    Xe.prototype.i = function () {
        return this.a
    };
    Xe.prototype.setMap = function (a) {
        this.a && Ue(this.element);
        for (var b = 0, c = this.s.length; b < c; ++b)Ka(this.s[b]);
        this.s.length = 0;
        if (this.a = a)(this.S ? this.S : a.v).appendChild(this.element), this.render !== na && this.s.push(B(a, "postrender", this.render, this)), a.render()
    };
    Xe.prototype.c = function (a) {
        this.S = "string" === typeof a ? document.getElementById(a) : a
    };
    function Ye() {
        this.g = 0;
        this.f = {};
        this.a = this.b = null
    }

    k = Ye.prototype;
    k.clear = function () {
        this.g = 0;
        this.f = {};
        this.a = this.b = null
    };
    function Ze(a, b) {
        return a.f.hasOwnProperty(b)
    }

    k.forEach = function (a, b) {
        for (var c = this.b; c;)a.call(b, c.pc, c.cc, this), c = c.yb
    };
    k.get = function (a) {
        a = this.f[a];
        if (a === this.a)return a.pc;
        a === this.b ? (this.b = this.b.yb, this.b.kc = null) : (a.yb.kc = a.kc, a.kc.yb = a.yb);
        a.yb = null;
        a.kc = this.a;
        this.a = this.a.yb = a;
        return a.pc
    };
    k.wc = function () {
        return this.g
    };
    k.N = function () {
        var a = Array(this.g), b = 0, c;
        for (c = this.a; c; c = c.kc)a[b++] = c.cc;
        return a
    };
    k.zc = function () {
        var a = Array(this.g), b = 0, c;
        for (c = this.a; c; c = c.kc)a[b++] = c.pc;
        return a
    };
    k.pop = function () {
        var a = this.b;
        delete this.f[a.cc];
        a.yb && (a.yb.kc = null);
        this.b = a.yb;
        this.b || (this.a = null);
        --this.g;
        return a.pc
    };
    k.replace = function (a, b) {
        this.get(a);
        this.f[a].pc = b
    };
    k.set = function (a, b) {
        var c = {cc: a, yb: null, kc: this.a, pc: b};
        this.a ? this.a.yb = c : this.b = c;
        this.a = c;
        this.f[a] = c;
        ++this.g
    };
    function $e(a, b, c, d) {
        return void 0 !== d ? (d[0] = a, d[1] = b, d[2] = c, d) : [a, b, c]
    }

    function af(a) {
        var b = a[0], c = Array(b), d = 1 << b - 1, e, f;
        for (e = 0; e < b; ++e)f = 48, a[1] & d && (f += 1), a[2] & d && (f += 2), c[e] = String.fromCharCode(f), d >>= 1;
        return c.join("")
    }

    function bf(a) {
        Ye.call(this);
        this.c = void 0 !== a ? a : 2048
    }

    y(bf, Ye);
    function cf(a) {
        return a.wc() > a.c
    }

    bf.prototype.Lc = function (a) {
        for (var b, c; cf(this) && !(b = this.b.pc, c = b.ma[0].toString(), c in a && a[c].contains(b.ma));)Ta(this.pop())
    };
    function df(a, b) {
        $a.call(this);
        this.ma = a;
        this.state = b;
        this.a = null;
        this.key = ""
    }

    y(df, $a);
    function ef(a) {
        a.b("change")
    }

    df.prototype.ib = function () {
        return w(this).toString()
    };
    df.prototype.i = function () {
        return this.ma
    };
    df.prototype.V = function () {
        return this.state
    };
    function ff(a, b, c) {
        void 0 === c && (c = [0, 0]);
        c[0] = a[0] + 2 * b;
        c[1] = a[1] + 2 * b;
        return c
    }

    function gf(a, b, c) {
        void 0 === c && (c = [0, 0]);
        c[0] = a[0] * b + .5 | 0;
        c[1] = a[1] * b + .5 | 0;
        return c
    }

    function hf(a, b) {
        if (Array.isArray(a))return a;
        void 0 === b ? b = [a, a] : (b[0] = a, b[1] = a);
        return b
    }

    function jf(a) {
        eb.call(this);
        this.f = yc(a.projection);
        this.l = kf(a.attributions);
        this.R = a.logo;
        this.za = void 0 !== a.state ? a.state : "ready";
        this.D = void 0 !== a.wrapX ? a.wrapX : !1
    }

    y(jf, eb);
    function kf(a) {
        if ("string" === typeof a)return [new je({html: a})];
        if (a instanceof je)return [a];
        if (Array.isArray(a)) {
            for (var b = a.length, c = Array(b), d = 0; d < b; d++) {
                var e = a[d];
                c[d] = "string" === typeof e ? new je({html: e}) : e
            }
            return c
        }
        return null
    }

    k = jf.prototype;
    k.ra = na;
    k.wa = function () {
        return this.l
    };
    k.ua = function () {
        return this.R
    };
    k.xa = function () {
        return this.f
    };
    k.V = function () {
        return this.za
    };
    k.sa = function () {
        this.u()
    };
    k.oa = function (a) {
        this.l = kf(a);
        this.u()
    };
    function lf(a, b) {
        a.za = b;
        a.u()
    }

    function mf(a) {
        this.minZoom = void 0 !== a.minZoom ? a.minZoom : 0;
        this.b = a.resolutions;
        this.maxZoom = this.b.length - 1;
        this.g = void 0 !== a.origin ? a.origin : null;
        this.c = null;
        void 0 !== a.origins && (this.c = a.origins);
        var b = a.extent;
        void 0 === b || this.g || this.c || (this.g = fc(b));
        this.i = null;
        void 0 !== a.tileSizes && (this.i = a.tileSizes);
        this.o = void 0 !== a.tileSize ? a.tileSize : this.i ? null : 256;
        this.s = void 0 !== b ? b : null;
        this.a = null;
        this.f = [0, 0];
        void 0 !== a.sizes ? this.a = a.sizes.map(function (a) {
            return new fe(Math.min(0, a[0]), Math.max(a[0] -
                1, -1), Math.min(0, a[1]), Math.max(a[1] - 1, -1))
        }, this) : b && nf(this, b)
    }

    var of = [0, 0, 0];
    k = mf.prototype;
    k.yg = function (a, b, c) {
        a = pf(this, a, b);
        for (var d = a.ca, e = a.ea; d <= e; ++d)for (var f = a.fa, g = a.ga; f <= g; ++f)c([b, d, f])
    };
    function qf(a, b, c, d, e) {
        e = a.Ea(b, e);
        for (b = b[0] - 1; b >= a.minZoom;) {
            if (c.call(null, b, pf(a, e, b, d)))return !0;
            --b
        }
        return !1
    }

    k.H = function () {
        return this.s
    };
    k.Ig = function () {
        return this.maxZoom
    };
    k.Jg = function () {
        return this.minZoom
    };
    k.Ia = function (a) {
        return this.g ? this.g : this.c[a]
    };
    k.$ = function (a) {
        return this.b[a]
    };
    k.Kh = function () {
        return this.b
    };
    function rf(a, b, c, d) {
        return b[0] < a.maxZoom ? (d = a.Ea(b, d), pf(a, d, b[0] + 1, c)) : null
    }

    function sf(a, b, c, d) {
        tf(a, b[0], b[1], c, !1, of);
        var e = of[1], f = of[2];
        tf(a, b[2], b[3], c, !0, of);
        a = of[1];
        b = of[2];
        void 0 !== d ? (d.ca = e, d.ea = a, d.fa = f, d.ga = b) : d = new fe(e, a, f, b);
        return d
    }

    function pf(a, b, c, d) {
        c = a.$(c);
        return sf(a, b, c, d)
    }

    function uf(a, b) {
        var c = a.Ia(b[0]), d = a.$(b[0]), e = hf(a.Ja(b[0]), a.f);
        return [c[0] + (b[1] + .5) * e[0] * d, c[1] + (b[2] + .5) * e[1] * d]
    }

    k.Ea = function (a, b) {
        var c = this.Ia(a[0]), d = this.$(a[0]), e = hf(this.Ja(a[0]), this.f), f = c[0] + a[1] * e[0] * d, c = c[1] + a[2] * e[1] * d;
        return Wb(f, c, f + e[0] * d, c + e[1] * d, b)
    };
    k.Zd = function (a, b, c) {
        return tf(this, a[0], a[1], b, !1, c)
    };
    function tf(a, b, c, d, e, f) {
        var g = a.Lb(d), h = d / a.$(g), l = a.Ia(g);
        a = hf(a.Ja(g), a.f);
        b = h * Math.floor((b - l[0]) / d + (e ? .5 : 0)) / a[0];
        c = h * Math.floor((c - l[1]) / d + (e ? 0 : .5)) / a[1];
        e ? (b = Math.ceil(b) - 1, c = Math.ceil(c) - 1) : (b = Math.floor(b), c = Math.floor(c));
        return $e(g, b, c, f)
    }

    k.qd = function (a, b, c) {
        b = this.$(b);
        return tf(this, a[0], a[1], b, !1, c)
    };
    k.Ja = function (a) {
        return this.o ? this.o : this.i[a]
    };
    k.Lb = function (a, b) {
        var c = kb(this.b, a, b || 0);
        return sa(c, this.minZoom, this.maxZoom)
    };
    function nf(a, b) {
        for (var c = a.b.length, d = Array(c), e = a.minZoom; e < c; ++e)d[e] = pf(a, b, e);
        a.a = d
    }

    function vf(a) {
        var b = a.l;
        if (!b) {
            var b = wf(a), c = xf(b, void 0, void 0), b = new mf({
                extent: b,
                origin: fc(b),
                resolutions: c,
                tileSize: void 0
            });
            a.l = b
        }
        return b
    }

    function yf(a) {
        var b = {};
        Ea(b, void 0 !== a ? a : {});
        void 0 === b.extent && (b.extent = yc("EPSG:3857").H());
        b.resolutions = xf(b.extent, b.maxZoom, b.tileSize);
        delete b.maxZoom;
        return new mf(b)
    }

    function xf(a, b, c) {
        b = void 0 !== b ? b : 42;
        var d = jc(a);
        a = ic(a);
        c = hf(void 0 !== c ? c : 256);
        c = Math.max(a / c[0], d / c[1]);
        b += 1;
        d = Array(b);
        for (a = 0; a < b; ++a)d[a] = c / Math.pow(2, a);
        return d
    }

    function wf(a) {
        a = yc(a);
        var b = a.H();
        b || (a = 180 * uc.degrees / a.$b(), b = Wb(-a, -a, a, a));
        return b
    }

    function zf(a) {
        jf.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state,
            wrapX: a.wrapX
        });
        this.ia = void 0 !== a.opaque ? a.opaque : !1;
        this.ta = void 0 !== a.tilePixelRatio ? a.tilePixelRatio : 1;
        this.tileGrid = void 0 !== a.tileGrid ? a.tileGrid : null;
        this.a = new bf(a.cacheSize);
        this.o = [0, 0];
        this.cc = ""
    }

    y(zf, jf);
    k = zf.prototype;
    k.Ah = function () {
        return cf(this.a)
    };
    k.Lc = function (a, b) {
        var c = this.pd(a);
        c && c.Lc(b)
    };
    function Af(a, b, c, d, e) {
        b = a.pd(b);
        if (!b)return !1;
        for (var f = !0, g, h, l = d.ca; l <= d.ea; ++l)for (var m = d.fa; m <= d.ga; ++m)g = a.Eb(c, l, m), h = !1, Ze(b, g) && (g = b.get(g), (h = 2 === g.V()) && (h = !1 !== e(g))), h || (f = !1);
        return f
    }

    k.Ud = function () {
        return 0
    };
    function Bf(a, b) {
        a.cc !== b && (a.cc = b, a.u())
    }

    k.Eb = function (a, b, c) {
        return a + "/" + b + "/" + c
    };
    k.jf = function () {
        return this.ia
    };
    k.Na = function () {
        return this.tileGrid
    };
    k.eb = function (a) {
        return this.tileGrid ? this.tileGrid : vf(a)
    };
    k.pd = function (a) {
        var b = this.f;
        return b && !Oc(b, a) ? null : this.a
    };
    k.bc = function () {
        return this.ta
    };
    k.$d = function (a, b, c) {
        c = this.eb(c);
        b = this.bc(b);
        a = hf(c.Ja(a), this.o);
        return 1 == b ? a : gf(a, b, this.o)
    };
    function Cf(a, b, c) {
        var d = void 0 !== c ? c : a.f;
        c = a.eb(d);
        if (a.D && d.g) {
            var e = b;
            b = e[0];
            a = uf(c, e);
            d = wf(d);
            Sb(d, a) ? b = e : (e = ic(d), a[0] += e * Math.ceil((d[0] - a[0]) / e), b = c.qd(a, b))
        }
        e = b[0];
        d = b[1];
        a = b[2];
        if (c.minZoom > e || e > c.maxZoom)c = !1; else {
            var f = c.H();
            c = (c = f ? pf(c, f, e) : c.a ? c.a[e] : null) ? ge(c, d, a) : !0
        }
        return c ? b : null
    }

    k.sa = function () {
        this.a.clear();
        this.u()
    };
    k.Yf = na;
    function Df(a, b) {
        Wa.call(this, a);
        this.tile = b
    }

    y(Df, Wa);
    function Ef(a) {
        a = a ? a : {};
        this.R = document.createElement("UL");
        this.v = document.createElement("LI");
        this.R.appendChild(this.v);
        this.v.style.display = "none";
        this.f = void 0 !== a.collapsed ? a.collapsed : !0;
        this.o = void 0 !== a.collapsible ? a.collapsible : !0;
        this.o || (this.f = !1);
        var b = void 0 !== a.className ? a.className : "ol-attribution", c = void 0 !== a.tipLabel ? a.tipLabel : "Attributions", d = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00bb";
        "string" === typeof d ? (this.A = document.createElement("span"), this.A.textContent = d) : this.A =
            d;
        d = void 0 !== a.label ? a.label : "i";
        "string" === typeof d ? (this.C = document.createElement("span"), this.C.textContent = d) : this.C = d;
        var e = this.o && !this.f ? this.A : this.C, d = document.createElement("button");
        d.setAttribute("type", "button");
        d.title = c;
        d.appendChild(e);
        B(d, "click", this.am, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control" + (this.f && this.o ? " ol-collapsed" : "") + (this.o ? "" : " ol-uncollapsible");
        c.appendChild(this.R);
        c.appendChild(d);
        Xe.call(this, {
            element: c, render: a.render ?
                a.render : Ff, target: a.target
        });
        this.D = !0;
        this.j = {};
        this.l = {};
        this.T = {}
    }

    y(Ef, Xe);
    function Ff(a) {
        if (a = a.frameState) {
            var b, c, d, e, f, g, h, l, m, n, p, q = a.layerStatesArray, r = Ea({}, a.attributions), u = {}, x = a.viewState.projection;
            c = 0;
            for (b = q.length; c < b; c++)if (g = q[c].layer.ha())if (n = w(g).toString(), m = g.l)for (d = 0, e = m.length; d < e; d++)if (h = m[d], l = w(h).toString(), !(l in r)) {
                if (f = a.usedTiles[n]) {
                    var v = g.eb(x);
                    a:{
                        p = h;
                        var D = x;
                        if (p.b) {
                            var A, z, F, N = void 0;
                            for (N in f)if (N in p.b) {
                                F = f[N];
                                var K;
                                A = 0;
                                for (z = p.b[N].length; A < z; ++A) {
                                    K = p.b[N][A];
                                    if (ie(K, F)) {
                                        p = !0;
                                        break a
                                    }
                                    var X = pf(v, wf(D), parseInt(N, 10)), oa = X.ea -
                                        X.ca + 1;
                                    if (F.ca < X.ca || F.ea > X.ea)if (ie(K, new fe(xa(F.ca, oa), xa(F.ea, oa), F.fa, F.ga)) || F.ea - F.ca + 1 > oa && ie(K, X)) {
                                        p = !0;
                                        break a
                                    }
                                }
                            }
                            p = !1
                        } else p = !0
                    }
                } else p = !1;
                p ? (l in u && delete u[l], r[l] = h) : u[l] = h
            }
            b = [r, u];
            c = b[0];
            b = b[1];
            for (var H in this.j)H in c ? (this.l[H] || (this.j[H].style.display = "", this.l[H] = !0), delete c[H]) : H in b ? (this.l[H] && (this.j[H].style.display = "none", delete this.l[H]), delete b[H]) : (Ue(this.j[H]), delete this.j[H], delete this.l[H]);
            for (H in c)d = document.createElement("LI"), d.innerHTML = c[H].a, this.R.appendChild(d),
                this.j[H] = d, this.l[H] = !0;
            for (H in b)d = document.createElement("LI"), d.innerHTML = b[H].a, d.style.display = "none", this.R.appendChild(d), this.j[H] = d;
            H = !Ha(this.l) || !Ha(a.logos);
            this.D != H && (this.element.style.display = H ? "" : "none", this.D = H);
            H && Ha(this.l) ? this.element.classList.add("ol-logo-only") : this.element.classList.remove("ol-logo-only");
            var ya;
            a = a.logos;
            H = this.T;
            for (ya in H)ya in a || (Ue(H[ya]), delete H[ya]);
            for (var Ua in a)b = a[Ua], b instanceof HTMLElement && (this.v.appendChild(b), H[Ua] = b), Ua in H || (ya =
                new Image, ya.src = Ua, "" === b ? c = ya : (c = document.createElement("a"), c.href = b, c.appendChild(ya)), this.v.appendChild(c), H[Ua] = c);
            this.v.style.display = Ha(a) ? "none" : ""
        } else this.D && (this.element.style.display = "none", this.D = !1)
    }

    k = Ef.prototype;
    k.am = function (a) {
        a.preventDefault();
        Gf(this)
    };
    function Gf(a) {
        a.element.classList.toggle("ol-collapsed");
        a.f ? Te(a.A, a.C) : Te(a.C, a.A);
        a.f = !a.f
    }

    k.$l = function () {
        return this.o
    };
    k.cm = function (a) {
        this.o !== a && (this.o = a, this.element.classList.toggle("ol-uncollapsible"), !a && this.f && Gf(this))
    };
    k.bm = function (a) {
        this.o && this.f !== a && Gf(this)
    };
    k.Zl = function () {
        return this.f
    };
    function Hf(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-rotate", c = void 0 !== a.label ? a.label : "\u21e7";
        this.f = null;
        "string" === typeof c ? (this.f = document.createElement("span"), this.f.className = "ol-compass", this.f.textContent = c) : (this.f = c, this.f.classList.add("ol-compass"));
        var d = a.tipLabel ? a.tipLabel : "Reset rotation", c = document.createElement("button");
        c.className = b + "-reset";
        c.setAttribute("type", "button");
        c.title = d;
        c.appendChild(this.f);
        B(c, "click", Hf.prototype.A, this);
        d = document.createElement("div");
        d.className = b + " ol-unselectable ol-control";
        d.appendChild(c);
        b = a.render ? a.render : If;
        this.o = a.resetNorth ? a.resetNorth : void 0;
        Xe.call(this, {element: d, render: b, target: a.target});
        this.j = void 0 !== a.duration ? a.duration : 250;
        this.l = void 0 !== a.autoHide ? a.autoHide : !0;
        this.v = void 0;
        this.l && this.element.classList.add("ol-hidden")
    }

    y(Hf, Xe);
    Hf.prototype.A = function (a) {
        a.preventDefault();
        if (void 0 !== this.o)this.o(); else {
            a = this.a;
            var b = a.aa();
            if (b) {
                var c = b.La();
                void 0 !== c && (0 < this.j && (c %= 2 * Math.PI, c < -Math.PI && (c += 2 * Math.PI), c > Math.PI && (c -= 2 * Math.PI), a.Wa(de({
                    rotation: c,
                    duration: this.j,
                    easing: Zd
                }))), b.ie(0))
            }
        }
    };
    function If(a) {
        if (a = a.frameState) {
            a = a.viewState.rotation;
            if (a != this.v) {
                var b = "rotate(" + a + "rad)";
                if (this.l) {
                    var c = this.element.classList.contains("ol-hidden");
                    c || 0 !== a ? c && 0 !== a && this.element.classList.remove("ol-hidden") : this.element.classList.add("ol-hidden")
                }
                this.f.style.msTransform = b;
                this.f.style.webkitTransform = b;
                this.f.style.transform = b
            }
            this.v = a
        }
    }

    function Jf(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-zoom", c = void 0 !== a.delta ? a.delta : 1, d = void 0 !== a.zoomInLabel ? a.zoomInLabel : "+", e = void 0 !== a.zoomOutLabel ? a.zoomOutLabel : "\u2212", f = void 0 !== a.zoomInTipLabel ? a.zoomInTipLabel : "Zoom in", g = void 0 !== a.zoomOutTipLabel ? a.zoomOutTipLabel : "Zoom out", h = document.createElement("button");
        h.className = b + "-in";
        h.setAttribute("type", "button");
        h.title = f;
        h.appendChild("string" === typeof d ? document.createTextNode(d) : d);
        B(h, "click", Jf.prototype.l.bind(this,
            c));
        d = document.createElement("button");
        d.className = b + "-out";
        d.setAttribute("type", "button");
        d.title = g;
        d.appendChild("string" === typeof e ? document.createTextNode(e) : e);
        B(d, "click", Jf.prototype.l.bind(this, -c));
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(h);
        c.appendChild(d);
        Xe.call(this, {element: c, target: a.target});
        this.f = void 0 !== a.duration ? a.duration : 250
    }

    y(Jf, Xe);
    Jf.prototype.l = function (a, b) {
        b.preventDefault();
        var c = this.a, d = c.aa();
        if (d) {
            var e = d.$();
            e && (0 < this.f && c.Wa(ee({
                resolution: e,
                duration: this.f,
                easing: Zd
            })), c = d.constrainResolution(e, a), d.Ub(c))
        }
    };
    function Kf(a) {
        a = a ? a : {};
        var b = new le;
        (void 0 !== a.zoom ? a.zoom : 1) && b.push(new Jf(a.zoomOptions));
        (void 0 !== a.rotate ? a.rotate : 1) && b.push(new Hf(a.rotateOptions));
        (void 0 !== a.attribution ? a.attribution : 1) && b.push(new Ef(a.attributionOptions));
        return b
    }

    function Lf(a) {
        a = a ? a : {};
        this.f = void 0 !== a.className ? a.className : "ol-full-screen";
        var b = void 0 !== a.label ? a.label : "\u2922";
        this.o = "string" === typeof b ? document.createTextNode(b) : b;
        b = void 0 !== a.labelActive ? a.labelActive : "\u00d7";
        this.j = "string" === typeof b ? document.createTextNode(b) : b;
        var c = a.tipLabel ? a.tipLabel : "Toggle full-screen", b = document.createElement("button");
        b.className = this.f + "-" + Mf();
        b.setAttribute("type", "button");
        b.title = c;
        b.appendChild(this.o);
        B(b, "click", this.C, this);
        c = document.createElement("div");
        c.className = this.f + " ol-unselectable ol-control " + (Nf() ? "" : "ol-unsupported");
        c.appendChild(b);
        Xe.call(this, {element: c, target: a.target});
        this.A = void 0 !== a.keys ? a.keys : !1;
        this.l = a.source
    }

    y(Lf, Xe);
    Lf.prototype.C = function (a) {
        a.preventDefault();
        Nf() && (a = this.a) && (Mf() ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : (a = this.l ? "string" === typeof this.l ? document.getElementById(this.l) : this.l : a.yc(), this.A ? a.mozRequestFullScreenWithKeys ? a.mozRequestFullScreenWithKeys() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) :
            Of(a) : Of(a)))
    };
    Lf.prototype.v = function () {
        var a = this.element.firstElementChild, b = this.a;
        Mf() ? (a.className = this.f + "-true", Te(this.j, this.o)) : (a.className = this.f + "-false", Te(this.o, this.j));
        b && b.Xc()
    };
    Lf.prototype.setMap = function (a) {
        Xe.prototype.setMap.call(this, a);
        a && this.s.push(B(pa.document, Pf(), this.v, this))
    };
    function Nf() {
        var a = document.body;
        return !!(a.webkitRequestFullscreen || a.mozRequestFullScreen && document.mozFullScreenEnabled || a.msRequestFullscreen && document.msFullscreenEnabled || a.requestFullscreen && document.fullscreenEnabled)
    }

    function Mf() {
        return !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
    }

    function Of(a) {
        a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
    }

    var Pf = function () {
        var a;
        return function () {
            if (!a) {
                var b = document.body;
                b.webkitRequestFullscreen ? a = "webkitfullscreenchange" : b.mozRequestFullScreen ? a = "mozfullscreenchange" : b.msRequestFullscreen ? a = "MSFullscreenChange" : b.requestFullscreen && (a = "fullscreenchange")
            }
            return a
        }
    }();

    function Qf(a) {
        a = a ? a : {};
        var b = document.createElement("DIV");
        b.className = void 0 !== a.className ? a.className : "ol-mouse-position";
        Xe.call(this, {element: b, render: a.render ? a.render : Rf, target: a.target});
        B(this, gb("projection"), this.dm, this);
        a.coordinateFormat && this.ei(a.coordinateFormat);
        a.projection && this.ih(yc(a.projection));
        this.v = void 0 !== a.undefinedHTML ? a.undefinedHTML : "";
        this.j = b.innerHTML;
        this.o = this.l = this.f = null
    }

    y(Qf, Xe);
    function Rf(a) {
        a = a.frameState;
        a ? this.f != a.viewState.projection && (this.f = a.viewState.projection, this.l = null) : this.f = null;
        Sf(this, this.o)
    }

    k = Qf.prototype;
    k.dm = function () {
        this.l = null
    };
    k.Cg = function () {
        return this.get("coordinateFormat")
    };
    k.hh = function () {
        return this.get("projection")
    };
    k.Xk = function (a) {
        this.o = this.a.Td(a);
        Sf(this, this.o)
    };
    k.Yk = function () {
        Sf(this, null);
        this.o = null
    };
    k.setMap = function (a) {
        Xe.prototype.setMap.call(this, a);
        a && (a = a.a, this.s.push(B(a, "mousemove", this.Xk, this), B(a, "mouseout", this.Yk, this)))
    };
    k.ei = function (a) {
        this.set("coordinateFormat", a)
    };
    k.ih = function (a) {
        this.set("projection", a)
    };
    function Sf(a, b) {
        var c = a.v;
        if (b && a.f) {
            if (!a.l) {
                var d = a.hh();
                a.l = d ? Bc(a.f, d) : Qc
            }
            if (d = a.a.Ma(b))a.l(d, d), c = (c = a.Cg()) ? c(d) : d.toString()
        }
        a.j && c == a.j || (a.element.innerHTML = c, a.j = c)
    }

    function Tf(a, b) {
        var c = a;
        b && (c = ka(a, b));
        "function" != ca(aa.setImmediate) || aa.Window && aa.Window.prototype && !Be("Edge") && aa.Window.prototype.setImmediate == aa.setImmediate ? (Uf || (Uf = Vf()), Uf(c)) : aa.setImmediate(c)
    }

    var Uf;

    function Vf() {
        var a = aa.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !Be("Presto") && (a = function () {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow, a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = ka(function (a) {
                if (("*" == d || a.origin == d) && a.data ==
                    c)this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && !Be("Trident") && !Be("MSIE")) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function () {
                if (void 0 !== c.next) {
                    c = c.next;
                    var a = c.rg;
                    c.rg = null;
                    a()
                }
            };
            return function (a) {
                d.next = {rg: a};
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
            var b = document.createElement("SCRIPT");
            b.onreadystatechange = function () {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            document.documentElement.appendChild(b)
        } : function (a) {
            aa.setTimeout(a, 0)
        }
    }

    function Wf(a, b, c) {
        Wa.call(this, a);
        this.b = b;
        a = c ? c : {};
        this.buttons = Xf(a);
        this.pressure = Yf(a, this.buttons);
        this.bubbles = "bubbles" in a ? a.bubbles : !1;
        this.cancelable = "cancelable" in a ? a.cancelable : !1;
        this.view = "view" in a ? a.view : null;
        this.detail = "detail" in a ? a.detail : null;
        this.screenX = "screenX" in a ? a.screenX : 0;
        this.screenY = "screenY" in a ? a.screenY : 0;
        this.clientX = "clientX" in a ? a.clientX : 0;
        this.clientY = "clientY" in a ? a.clientY : 0;
        this.button = "button" in a ? a.button : 0;
        this.relatedTarget = "relatedTarget" in a ? a.relatedTarget :
            null;
        this.pointerId = "pointerId" in a ? a.pointerId : 0;
        this.width = "width" in a ? a.width : 0;
        this.height = "height" in a ? a.height : 0;
        this.pointerType = "pointerType" in a ? a.pointerType : "";
        this.isPrimary = "isPrimary" in a ? a.isPrimary : !1;
        b.preventDefault && (this.preventDefault = function () {
            b.preventDefault()
        })
    }

    y(Wf, Wa);
    function Xf(a) {
        if (a.buttons || Zf)a = a.buttons; else switch (a.which) {
            case 1:
                a = 1;
                break;
            case 2:
                a = 4;
                break;
            case 3:
                a = 2;
                break;
            default:
                a = 0
        }
        return a
    }

    function Yf(a, b) {
        var c = 0;
        a.pressure ? c = a.pressure : c = b ? .5 : 0;
        return c
    }

    var Zf = !1;
    try {
        Zf = 1 === (new MouseEvent("click", {buttons: 1})).buttons
    } catch (a) {
    }
    var $f = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];

    function ag(a, b) {
        var c, d, e = $f.length;
        for (d = 0; d < e; ++d)try {
            if (c = a.getContext($f[d], b))return c
        } catch (f) {
        }
        return null
    }

    var bg, cg = "undefined" !== typeof navigator ? navigator.userAgent.toLowerCase() : "", dg = -1 !== cg.indexOf("firefox"), eg = -1 !== cg.indexOf("safari") && -1 === cg.indexOf("chrom"), fg = -1 !== cg.indexOf("macintosh"), gg = pa.devicePixelRatio || 1, hg = !1, ig = function () {
            if (!("HTMLCanvasElement" in pa))return !1;
            try {
                var a = Oe();
                return a ? (a.setLineDash && (hg = !0), !0) : !1
            } catch (b) {
                return !1
            }
        }(), jg = "DeviceOrientationEvent" in pa, kg = "geolocation" in pa.navigator, lg = "ontouchstart" in pa, mg = "PointerEvent" in pa, ng = !!pa.navigator.msPointerEnabled,
        og = !1, pg, qg = [];
    if ("WebGLRenderingContext" in pa)try {
        var rg = ag(document.createElement("CANVAS"), {failIfMajorPerformanceCaveat: !0});
        rg && (og = !0, pg = rg.getParameter(rg.MAX_TEXTURE_SIZE), qg = rg.getSupportedExtensions())
    } catch (a) {
    }
    bg = og;
    ma = qg;
    la = pg;
    function sg(a, b) {
        this.b = a;
        this.c = b
    }

    function tg(a) {
        sg.call(this, a, {
            mousedown: this.rl,
            mousemove: this.sl,
            mouseup: this.vl,
            mouseover: this.ul,
            mouseout: this.tl
        });
        this.a = a.g;
        this.g = []
    }

    y(tg, sg);
    function ug(a, b) {
        for (var c = a.g, d = b.clientX, e = b.clientY, f = 0, g = c.length, h; f < g && (h = c[f]); f++) {
            var l = Math.abs(e - h[1]);
            if (25 >= Math.abs(d - h[0]) && 25 >= l)return !0
        }
        return !1
    }

    function vg(a) {
        var b = wg(a, a), c = b.preventDefault;
        b.preventDefault = function () {
            a.preventDefault();
            c()
        };
        b.pointerId = 1;
        b.isPrimary = !0;
        b.pointerType = "mouse";
        return b
    }

    k = tg.prototype;
    k.rl = function (a) {
        if (!ug(this, a)) {
            if ((1).toString() in this.a) {
                var b = vg(a);
                xg(this.b, yg, b, a);
                delete this.a[(1).toString()]
            }
            b = vg(a);
            this.a[(1).toString()] = a;
            xg(this.b, zg, b, a)
        }
    };
    k.sl = function (a) {
        if (!ug(this, a)) {
            var b = vg(a);
            xg(this.b, Ag, b, a)
        }
    };
    k.vl = function (a) {
        if (!ug(this, a)) {
            var b = this.a[(1).toString()];
            b && b.button === a.button && (b = vg(a), xg(this.b, Bg, b, a), delete this.a[(1).toString()])
        }
    };
    k.ul = function (a) {
        if (!ug(this, a)) {
            var b = vg(a);
            Cg(this.b, b, a)
        }
    };
    k.tl = function (a) {
        if (!ug(this, a)) {
            var b = vg(a);
            Dg(this.b, b, a)
        }
    };
    function Eg(a) {
        sg.call(this, a, {
            MSPointerDown: this.Al,
            MSPointerMove: this.Bl,
            MSPointerUp: this.El,
            MSPointerOut: this.Cl,
            MSPointerOver: this.Dl,
            MSPointerCancel: this.zl,
            MSGotPointerCapture: this.xl,
            MSLostPointerCapture: this.yl
        });
        this.a = a.g;
        this.g = ["", "unavailable", "touch", "pen", "mouse"]
    }

    y(Eg, sg);
    function Fg(a, b) {
        var c = b;
        ea(b.pointerType) && (c = wg(b, b), c.pointerType = a.g[b.pointerType]);
        return c
    }

    k = Eg.prototype;
    k.Al = function (a) {
        this.a[a.pointerId.toString()] = a;
        var b = Fg(this, a);
        xg(this.b, zg, b, a)
    };
    k.Bl = function (a) {
        var b = Fg(this, a);
        xg(this.b, Ag, b, a)
    };
    k.El = function (a) {
        var b = Fg(this, a);
        xg(this.b, Bg, b, a);
        delete this.a[a.pointerId.toString()]
    };
    k.Cl = function (a) {
        var b = Fg(this, a);
        Dg(this.b, b, a)
    };
    k.Dl = function (a) {
        var b = Fg(this, a);
        Cg(this.b, b, a)
    };
    k.zl = function (a) {
        var b = Fg(this, a);
        xg(this.b, yg, b, a);
        delete this.a[a.pointerId.toString()]
    };
    k.yl = function (a) {
        this.b.b(new Wf("lostpointercapture", a, a))
    };
    k.xl = function (a) {
        this.b.b(new Wf("gotpointercapture", a, a))
    };
    function Gg(a) {
        sg.call(this, a, {
            pointerdown: this.lo,
            pointermove: this.mo,
            pointerup: this.po,
            pointerout: this.no,
            pointerover: this.oo,
            pointercancel: this.ko,
            gotpointercapture: this.Gk,
            lostpointercapture: this.ql
        })
    }

    y(Gg, sg);
    k = Gg.prototype;
    k.lo = function (a) {
        Hg(this.b, a)
    };
    k.mo = function (a) {
        Hg(this.b, a)
    };
    k.po = function (a) {
        Hg(this.b, a)
    };
    k.no = function (a) {
        Hg(this.b, a)
    };
    k.oo = function (a) {
        Hg(this.b, a)
    };
    k.ko = function (a) {
        Hg(this.b, a)
    };
    k.ql = function (a) {
        Hg(this.b, a)
    };
    k.Gk = function (a) {
        Hg(this.b, a)
    };
    function Ig(a, b) {
        sg.call(this, a, {touchstart: this.sp, touchmove: this.rp, touchend: this.qp, touchcancel: this.pp});
        this.a = a.g;
        this.l = b;
        this.g = void 0;
        this.i = 0;
        this.f = void 0
    }

    y(Ig, sg);
    k = Ig.prototype;
    k.ci = function () {
        this.i = 0;
        this.f = void 0
    };
    function Jg(a, b, c) {
        b = wg(b, c);
        b.pointerId = c.identifier + 2;
        b.bubbles = !0;
        b.cancelable = !0;
        b.detail = a.i;
        b.button = 0;
        b.buttons = 1;
        b.width = c.webkitRadiusX || c.radiusX || 0;
        b.height = c.webkitRadiusY || c.radiusY || 0;
        b.pressure = c.webkitForce || c.force || .5;
        b.isPrimary = a.g === c.identifier;
        b.pointerType = "touch";
        b.clientX = c.clientX;
        b.clientY = c.clientY;
        b.screenX = c.screenX;
        b.screenY = c.screenY;
        return b
    }

    function Kg(a, b, c) {
        function d() {
            b.preventDefault()
        }

        var e = Array.prototype.slice.call(b.changedTouches), f = e.length, g, h;
        for (g = 0; g < f; ++g)h = Jg(a, b, e[g]), h.preventDefault = d, c.call(a, b, h)
    }

    k.sp = function (a) {
        var b = a.touches, c = Object.keys(this.a), d = c.length;
        if (d >= b.length) {
            var e = [], f, g, h;
            for (f = 0; f < d; ++f) {
                g = c[f];
                h = this.a[g];
                var l;
                if (!(l = 1 == g))a:{
                    l = b.length;
                    for (var m, n = 0; n < l; n++)if (m = b[n], m.identifier === g - 2) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                l || e.push(h.out)
            }
            for (f = 0; f < e.length; ++f)this.Ue(a, e[f])
        }
        b = a.changedTouches[0];
        c = Object.keys(this.a).length;
        if (0 === c || 1 === c && (1).toString() in this.a)this.g = b.identifier, void 0 !== this.f && pa.clearTimeout(this.f);
        Lg(this, a);
        this.i++;
        Kg(this, a, this.fo)
    };
    k.fo = function (a, b) {
        this.a[b.pointerId] = {target: b.target, out: b, Lh: b.target};
        var c = this.b;
        b.bubbles = !0;
        xg(c, Mg, b, a);
        c = this.b;
        b.bubbles = !1;
        xg(c, Ng, b, a);
        xg(this.b, zg, b, a)
    };
    k.rp = function (a) {
        a.preventDefault();
        Kg(this, a, this.wl)
    };
    k.wl = function (a, b) {
        var c = this.a[b.pointerId];
        if (c) {
            var d = c.out, e = c.Lh;
            xg(this.b, Ag, b, a);
            d && e !== b.target && (d.relatedTarget = b.target, b.relatedTarget = e, d.target = e, b.target ? (Dg(this.b, d, a), Cg(this.b, b, a)) : (b.target = e, b.relatedTarget = null, this.Ue(a, b)));
            c.out = b;
            c.Lh = b.target
        }
    };
    k.qp = function (a) {
        Lg(this, a);
        Kg(this, a, this.tp)
    };
    k.tp = function (a, b) {
        xg(this.b, Bg, b, a);
        this.b.out(b, a);
        var c = this.b;
        b.bubbles = !1;
        xg(c, Og, b, a);
        delete this.a[b.pointerId];
        b.isPrimary && (this.g = void 0, this.f = pa.setTimeout(this.ci.bind(this), 200))
    };
    k.pp = function (a) {
        Kg(this, a, this.Ue)
    };
    k.Ue = function (a, b) {
        xg(this.b, yg, b, a);
        this.b.out(b, a);
        var c = this.b;
        b.bubbles = !1;
        xg(c, Og, b, a);
        delete this.a[b.pointerId];
        b.isPrimary && (this.g = void 0, this.f = pa.setTimeout(this.ci.bind(this), 200))
    };
    function Lg(a, b) {
        var c = a.l.g, d = b.changedTouches[0];
        if (a.g === d.identifier) {
            var e = [d.clientX, d.clientY];
            c.push(e);
            pa.setTimeout(function () {
                nb(c, e)
            }, 2500)
        }
    }

    function Pg(a) {
        $a.call(this);
        this.i = a;
        this.g = {};
        this.c = {};
        this.a = [];
        mg ? Qg(this, new Gg(this)) : ng ? Qg(this, new Eg(this)) : (a = new tg(this), Qg(this, a), lg && Qg(this, new Ig(this, a)));
        a = this.a.length;
        for (var b, c = 0; c < a; c++)b = this.a[c], Rg(this, Object.keys(b.c))
    }

    y(Pg, $a);
    function Qg(a, b) {
        var c = Object.keys(b.c);
        c && (c.forEach(function (a) {
            var c = b.c[a];
            c && (this.c[a] = c.bind(b))
        }, a), a.a.push(b))
    }

    Pg.prototype.f = function (a) {
        var b = this.c[a.type];
        b && b(a)
    };
    function Rg(a, b) {
        b.forEach(function (a) {
            B(this.i, a, this.f, this)
        }, a)
    }

    function Sg(a, b) {
        b.forEach(function (a) {
            Qa(this.i, a, this.f, this)
        }, a)
    }

    function wg(a, b) {
        for (var c = {}, d, e = 0, f = Tg.length; e < f; e++)d = Tg[e][0], c[d] = a[d] || b[d] || Tg[e][1];
        return c
    }

    Pg.prototype.out = function (a, b) {
        a.bubbles = !0;
        xg(this, Ug, a, b)
    };
    function Dg(a, b, c) {
        a.out(b, c);
        var d = b.target, e = b.relatedTarget;
        d && e && d.contains(e) || (b.bubbles = !1, xg(a, Og, b, c))
    }

    function Cg(a, b, c) {
        b.bubbles = !0;
        xg(a, Mg, b, c);
        var d = b.target, e = b.relatedTarget;
        d && e && d.contains(e) || (b.bubbles = !1, xg(a, Ng, b, c))
    }

    function xg(a, b, c, d) {
        a.b(new Wf(b, d, c))
    }

    function Hg(a, b) {
        a.b(new Wf(b.type, b, b))
    }

    Pg.prototype.ka = function () {
        for (var a = this.a.length, b, c = 0; c < a; c++)b = this.a[c], Sg(this, Object.keys(b.c));
        $a.prototype.ka.call(this)
    };
    var Ag = "pointermove", zg = "pointerdown", Bg = "pointerup", Mg = "pointerover", Ug = "pointerout", Ng = "pointerenter", Og = "pointerleave", yg = "pointercancel", Tg = [["bubbles", !1], ["cancelable", !1], ["view", null], ["detail", null], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary",
        !1], ["type", ""], ["target", null], ["currentTarget", null], ["which", 0]];

    function Vg(a, b, c, d, e) {
        We.call(this, a, b, e);
        this.originalEvent = c;
        this.pixel = b.Td(c);
        this.coordinate = b.Ma(this.pixel);
        this.dragging = void 0 !== d ? d : !1
    }

    y(Vg, We);
    Vg.prototype.preventDefault = function () {
        We.prototype.preventDefault.call(this);
        this.originalEvent.preventDefault()
    };
    Vg.prototype.stopPropagation = function () {
        We.prototype.stopPropagation.call(this);
        this.originalEvent.stopPropagation()
    };
    function Wg(a, b, c, d, e) {
        Vg.call(this, a, b, c.b, d, e);
        this.b = c
    }

    y(Wg, Vg);
    function Xg(a) {
        $a.call(this);
        this.f = a;
        this.l = 0;
        this.o = !1;
        this.c = [];
        this.g = null;
        a = this.f.a;
        this.U = 0;
        this.v = {};
        this.i = new Pg(a);
        this.a = null;
        this.j = B(this.i, zg, this.$k, this);
        this.s = B(this.i, Ag, this.No, this)
    }

    y(Xg, $a);
    function Yg(a, b) {
        var c;
        c = new Wg(Zg, a.f, b);
        a.b(c);
        0 !== a.l ? (pa.clearTimeout(a.l), a.l = 0, c = new Wg($g, a.f, b), a.b(c)) : a.l = pa.setTimeout(function () {
            this.l = 0;
            var a = new Wg(ah, this.f, b);
            this.b(a)
        }.bind(a), 250)
    }

    function bh(a, b) {
        b.type == ch || b.type == dh ? delete a.v[b.pointerId] : b.type == eh && (a.v[b.pointerId] = !0);
        a.U = Object.keys(a.v).length
    }

    k = Xg.prototype;
    k.Qg = function (a) {
        bh(this, a);
        var b = new Wg(ch, this.f, a);
        this.b(b);
        !this.o && 0 === a.button && Yg(this, this.g);
        0 === this.U && (this.c.forEach(Ka), this.c.length = 0, this.o = !1, this.g = null, Ta(this.a), this.a = null)
    };
    k.$k = function (a) {
        bh(this, a);
        var b = new Wg(eh, this.f, a);
        this.b(b);
        this.g = a;
        0 === this.c.length && (this.a = new Pg(document), this.c.push(B(this.a, fh, this.Sl, this), B(this.a, ch, this.Qg, this), B(this.i, dh, this.Qg, this)))
    };
    k.Sl = function (a) {
        if (a.clientX != this.g.clientX || a.clientY != this.g.clientY) {
            this.o = !0;
            var b = new Wg(gh, this.f, a, this.o);
            this.b(b)
        }
        a.preventDefault()
    };
    k.No = function (a) {
        this.b(new Wg(a.type, this.f, a, !(!this.g || a.clientX == this.g.clientX && a.clientY == this.g.clientY)))
    };
    k.ka = function () {
        this.s && (Ka(this.s), this.s = null);
        this.j && (Ka(this.j), this.j = null);
        this.c.forEach(Ka);
        this.c.length = 0;
        this.a && (Ta(this.a), this.a = null);
        this.i && (Ta(this.i), this.i = null);
        $a.prototype.ka.call(this)
    };
    var ah = "singleclick", Zg = "click", $g = "dblclick", gh = "pointerdrag", fh = "pointermove", eh = "pointerdown", ch = "pointerup", dh = "pointercancel", hh = {
        Mp: ah,
        Bp: Zg,
        Cp: $g,
        Fp: gh,
        Ip: fh,
        Ep: eh,
        Lp: ch,
        Kp: "pointerover",
        Jp: "pointerout",
        Gp: "pointerenter",
        Hp: "pointerleave",
        Dp: dh
    };

    function ih(a) {
        eb.call(this);
        var b = Ea({}, a);
        b.opacity = void 0 !== a.opacity ? a.opacity : 1;
        b.visible = void 0 !== a.visible ? a.visible : !0;
        b.zIndex = void 0 !== a.zIndex ? a.zIndex : 0;
        b.maxResolution = void 0 !== a.maxResolution ? a.maxResolution : Infinity;
        b.minResolution = void 0 !== a.minResolution ? a.minResolution : 0;
        this.G(b)
    }

    y(ih, eb);
    function jh(a) {
        var b = a.Pb(), c = a.kf(), d = a.xb(), e = a.H(), f = a.Qb(), g = a.Nb(), h = a.Ob();
        return {
            layer: a,
            opacity: sa(b, 0, 1),
            R: c,
            visible: d,
            Qc: !0,
            extent: e,
            zIndex: f,
            maxResolution: g,
            minResolution: Math.max(h, 0)
        }
    }

    k = ih.prototype;
    k.H = function () {
        return this.get("extent")
    };
    k.Nb = function () {
        return this.get("maxResolution")
    };
    k.Ob = function () {
        return this.get("minResolution")
    };
    k.Pb = function () {
        return this.get("opacity")
    };
    k.xb = function () {
        return this.get("visible")
    };
    k.Qb = function () {
        return this.get("zIndex")
    };
    k.fc = function (a) {
        this.set("extent", a)
    };
    k.nc = function (a) {
        this.set("maxResolution", a)
    };
    k.oc = function (a) {
        this.set("minResolution", a)
    };
    k.gc = function (a) {
        this.set("opacity", a)
    };
    k.hc = function (a) {
        this.set("visible", a)
    };
    k.ic = function (a) {
        this.set("zIndex", a)
    };
    function kh() {
    }

    function lh(a, b, c, d, e, f) {
        Wa.call(this, a, b);
        this.vectorContext = c;
        this.frameState = d;
        this.context = e;
        this.glContext = f
    }

    y(lh, Wa);
    function mh(a) {
        var b = Ea({}, a);
        delete b.source;
        ih.call(this, b);
        this.v = this.j = this.o = null;
        a.map && this.setMap(a.map);
        B(this, gb("source"), this.fl, this);
        this.Fc(a.source ? a.source : null)
    }

    y(mh, ih);
    function nh(a, b) {
        return a.visible && b >= a.minResolution && b < a.maxResolution
    }

    k = mh.prototype;
    k.hf = function (a) {
        a = a ? a : [];
        a.push(jh(this));
        return a
    };
    k.ha = function () {
        return this.get("source") || null
    };
    k.kf = function () {
        var a = this.ha();
        return a ? a.V() : "undefined"
    };
    k.Lm = function () {
        this.u()
    };
    k.fl = function () {
        this.v && (Ka(this.v), this.v = null);
        var a = this.ha();
        a && (this.v = B(a, "change", this.Lm, this));
        this.u()
    };
    k.setMap = function (a) {
        this.o && (Ka(this.o), this.o = null);
        a || this.u();
        this.j && (Ka(this.j), this.j = null);
        a && (this.o = B(a, "precompose", function (a) {
            var c = jh(this);
            c.Qc = !1;
            c.zIndex = Infinity;
            a.frameState.layerStatesArray.push(c);
            a.frameState.layerStates[w(this)] = c
        }, this), this.j = B(this, "change", a.render, a), this.u())
    };
    k.Fc = function (a) {
        this.set("source", a)
    };
    function oh(a, b, c, d, e) {
        $a.call(this);
        this.l = e;
        this.extent = a;
        this.f = c;
        this.resolution = b;
        this.state = d
    }

    y(oh, $a);
    function ph(a) {
        a.b("change")
    }

    oh.prototype.H = function () {
        return this.extent
    };
    oh.prototype.$ = function () {
        return this.resolution
    };
    oh.prototype.V = function () {
        return this.state
    };
    function qh(a, b, c, d, e, f, g, h) {
        ad(a);
        0 === b && 0 === c || dd(a, b, c);
        1 == d && 1 == e || ed(a, d, e);
        0 !== f && fd(a, f);
        0 === g && 0 === h || dd(a, g, h);
        return a
    }

    function rh(a, b) {
        return a[0] == b[0] && a[1] == b[1] && a[4] == b[4] && a[5] == b[5] && a[12] == b[12] && a[13] == b[13]
    }

    function sh(a, b, c) {
        var d = a[1], e = a[5], f = a[13], g = b[0];
        b = b[1];
        c[0] = a[0] * g + a[4] * b + a[12];
        c[1] = d * g + e * b + f;
        return c
    }

    function th(a) {
        bb.call(this);
        this.a = a
    }

    y(th, bb);
    k = th.prototype;
    k.ra = na;
    k.Cc = function (a, b, c, d) {
        a = a.slice();
        sh(b.pixelToCoordinateMatrix, a, a);
        if (this.ra(a, b, qc, this))return c.call(d, this.a)
    };
    k.le = rc;
    k.Qd = function (a, b, c) {
        return function (d, e) {
            return Af(a, b, d, e, function (a) {
                c[d] || (c[d] = {});
                c[d][a.ma.toString()] = a
            })
        }
    };
    k.Om = function (a) {
        2 === a.target.V() && uh(this)
    };
    function vh(a, b) {
        var c = b.V();
        2 != c && 3 != c && B(b, "change", a.Om, a);
        0 == c && (b.load(), c = b.V());
        return 2 == c
    }

    function uh(a) {
        var b = a.a;
        b.xb() && "ready" == b.kf() && a.u()
    }

    function wh(a, b) {
        b.Ah() && a.postRenderFunctions.push(function (a, b, e) {
            b = w(a).toString();
            a.Lc(e.viewState.projection, e.usedTiles[b])
        }.bind(null, b))
    }

    function xh(a, b) {
        if (b) {
            var c, d, e;
            d = 0;
            for (e = b.length; d < e; ++d)c = b[d], a[w(c).toString()] = c
        }
    }

    function yh(a, b) {
        var c = b.R;
        void 0 !== c && ("string" === typeof c ? a.logos[c] = "" : fa(c) && (a.logos[c.src] = c.href))
    }

    function zh(a, b, c, d) {
        b = w(b).toString();
        c = c.toString();
        b in a ? c in a[b] ? (a = a[b][c], d.ca < a.ca && (a.ca = d.ca), d.ea > a.ea && (a.ea = d.ea), d.fa < a.fa && (a.fa = d.fa), d.ga > a.ga && (a.ga = d.ga)) : a[b][c] = d : (a[b] = {}, a[b][c] = d)
    }

    function Ah(a, b, c) {
        return [b * (Math.round(a[0] / b) + c[0] % 2 / 2), b * (Math.round(a[1] / b) + c[1] % 2 / 2)]
    }

    function Bh(a, b, c, d, e, f, g, h, l, m) {
        var n = w(b).toString();
        n in a.wantedTiles || (a.wantedTiles[n] = {});
        var p = a.wantedTiles[n];
        a = a.tileQueue;
        var q = c.minZoom, r, u, x, v, D, A;
        for (A = g; A >= q; --A)for (u = pf(c, f, A, u), x = c.$(A), v = u.ca; v <= u.ea; ++v)for (D = u.fa; D <= u.ga; ++D)g - A <= h ? (r = b.ac(A, v, D, d, e), 0 == r.V() && (p[r.ma.toString()] = !0, r.ib() in a.g || a.f([r, n, uf(c, r.ma), x])), void 0 !== l && l.call(m, r)) : b.Yf(A, v, D, e)
    }

    function Ch(a) {
        this.v = a.opacity;
        this.U = a.rotateWithView;
        this.j = a.rotation;
        this.i = a.scale;
        this.C = a.snapToPixel
    }

    k = Ch.prototype;
    k.qe = function () {
        return this.v
    };
    k.Xd = function () {
        return this.U
    };
    k.re = function () {
        return this.j
    };
    k.se = function () {
        return this.i
    };
    k.Yd = function () {
        return this.C
    };
    k.te = function (a) {
        this.v = a
    };
    k.ue = function (a) {
        this.j = a
    };
    k.ve = function (a) {
        this.i = a
    };
    function Dh(a) {
        a = a || {};
        this.c = void 0 !== a.anchor ? a.anchor : [.5, .5];
        this.f = null;
        this.a = void 0 !== a.anchorOrigin ? a.anchorOrigin : "top-left";
        this.o = void 0 !== a.anchorXUnits ? a.anchorXUnits : "fraction";
        this.s = void 0 !== a.anchorYUnits ? a.anchorYUnits : "fraction";
        var b = void 0 !== a.crossOrigin ? a.crossOrigin : null, c = void 0 !== a.img ? a.img : null, d = void 0 !== a.imgSize ? a.imgSize : null, e = a.src;
        void 0 !== e && 0 !== e.length || !c || (e = c.src || w(c).toString());
        var f = void 0 !== a.src ? 0 : 2, g = void 0 !== a.color ? te(a.color) : null, h = Eh.Zb(), l = h.get(e,
            b, g);
        l || (l = new Fh(c, e, d, b, f, g), h.set(e, b, g, l));
        this.b = l;
        this.D = void 0 !== a.offset ? a.offset : [0, 0];
        this.g = void 0 !== a.offsetOrigin ? a.offsetOrigin : "top-left";
        this.l = null;
        this.A = void 0 !== a.size ? a.size : null;
        Ch.call(this, {
            opacity: void 0 !== a.opacity ? a.opacity : 1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: void 0 !== a.scale ? a.scale : 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0,
            rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1
        })
    }

    y(Dh, Ch);
    k = Dh.prototype;
    k.Yb = function () {
        if (this.f)return this.f;
        var a = this.c, b = this.Fb();
        if ("fraction" == this.o || "fraction" == this.s) {
            if (!b)return null;
            a = this.c.slice();
            "fraction" == this.o && (a[0] *= b[0]);
            "fraction" == this.s && (a[1] *= b[1])
        }
        if ("top-left" != this.a) {
            if (!b)return null;
            a === this.c && (a = this.c.slice());
            if ("top-right" == this.a || "bottom-right" == this.a)a[0] = -a[0] + b[0];
            if ("bottom-left" == this.a || "bottom-right" == this.a)a[1] = -a[1] + b[1]
        }
        return this.f = a
    };
    k.jc = function () {
        var a = this.b;
        return a.c ? a.c : a.a
    };
    k.ld = function () {
        return this.b.g
    };
    k.td = function () {
        return this.b.f
    };
    k.pe = function () {
        var a = this.b;
        if (!a.o)if (a.s) {
            var b = a.g[0], c = a.g[1], d = Oe(b, c);
            d.fillRect(0, 0, b, c);
            a.o = d.canvas
        } else a.o = a.a;
        return a.o
    };
    k.Ia = function () {
        if (this.l)return this.l;
        var a = this.D;
        if ("top-left" != this.g) {
            var b = this.Fb(), c = this.b.g;
            if (!b || !c)return null;
            a = a.slice();
            if ("top-right" == this.g || "bottom-right" == this.g)a[0] = c[0] - b[0] - a[0];
            if ("bottom-left" == this.g || "bottom-right" == this.g)a[1] = c[1] - b[1] - a[1]
        }
        return this.l = a
    };
    k.En = function () {
        return this.b.j
    };
    k.Fb = function () {
        return this.A ? this.A : this.b.g
    };
    k.pf = function (a, b) {
        return B(this.b, "change", a, b)
    };
    k.load = function () {
        this.b.load()
    };
    k.Xf = function (a, b) {
        Qa(this.b, "change", a, b)
    };
    function Fh(a, b, c, d, e, f) {
        $a.call(this);
        this.o = null;
        this.a = a ? a : new Image;
        null !== d && (this.a.crossOrigin = d);
        this.c = f ? document.createElement("CANVAS") : null;
        this.l = f;
        this.i = null;
        this.f = e;
        this.g = c;
        this.j = b;
        this.s = !1;
        2 == this.f && Gh(this)
    }

    y(Fh, $a);
    function Gh(a) {
        var b = Oe(1, 1);
        try {
            b.drawImage(a.a, 0, 0), b.getImageData(0, 0, 1, 1)
        } catch (c) {
            a.s = !0
        }
    }

    Fh.prototype.v = function () {
        this.f = 3;
        this.i.forEach(Ka);
        this.i = null;
        this.b("change")
    };
    Fh.prototype.U = function () {
        this.f = 2;
        this.g && (this.a.width = this.g[0], this.a.height = this.g[1]);
        this.g = [this.a.width, this.a.height];
        this.i.forEach(Ka);
        this.i = null;
        Gh(this);
        if (!this.s && null !== this.l) {
            this.c.width = this.a.width;
            this.c.height = this.a.height;
            var a = this.c.getContext("2d");
            a.drawImage(this.a, 0, 0);
            for (var b = a.getImageData(0, 0, this.a.width, this.a.height), c = b.data, d = this.l[0] / 255, e = this.l[1] / 255, f = this.l[2] / 255, g = 0, h = c.length; g < h; g += 4)c[g] *= d, c[g + 1] *= e, c[g + 2] *= f;
            a.putImageData(b, 0, 0)
        }
        this.b("change")
    };
    Fh.prototype.load = function () {
        if (0 == this.f) {
            this.f = 1;
            this.i = [Pa(this.a, "error", this.v, this), Pa(this.a, "load", this.U, this)];
            try {
                this.a.src = this.j
            } catch (a) {
                this.v()
            }
        }
    };
    function Eh() {
        this.b = {};
        this.a = 0
    }

    ba(Eh);
    Eh.prototype.clear = function () {
        this.b = {};
        this.a = 0
    };
    Eh.prototype.get = function (a, b, c) {
        a = b + ":" + a + ":" + (c ? ve(c) : "null");
        return a in this.b ? this.b[a] : null
    };
    Eh.prototype.set = function (a, b, c, d) {
        this.b[b + ":" + a + ":" + (c ? ve(c) : "null")] = d;
        ++this.a
    };
    function Hh(a, b) {
        this.i = b;
        this.g = {};
        this.s = {}
    }

    y(Hh, Sa);
    function Ih(a) {
        var b = a.viewState, c = a.coordinateToPixelMatrix;
        qh(c, a.size[0] / 2, a.size[1] / 2, 1 / b.resolution, -1 / b.resolution, -b.rotation, -b.center[0], -b.center[1]);
        cd(c, a.pixelToCoordinateMatrix)
    }

    k = Hh.prototype;
    k.ka = function () {
        for (var a in this.g)Ta(this.g[a])
    };
    function Jh() {
        var a = Eh.Zb();
        if (32 < a.a) {
            var b = 0, c, d;
            for (c in a.b)d = a.b[c], 0 !== (b++ & 3) || ab(d) || (delete a.b[c], --a.a)
        }
    }

    k.ra = function (a, b, c, d, e, f) {
        function g(a, e) {
            var f = w(a).toString(), g = b.layerStates[w(e)].Qc;
            if (!(f in b.skippedFeatureUids) || g)return c.call(d, a, g ? e : null)
        }

        var h, l = b.viewState, m = l.resolution, n = l.projection, l = a;
        if (n.a) {
            var n = n.H(), p = ic(n), q = a[0];
            if (q < n[0] || q > n[2])l = [q + p * Math.ceil((n[0] - q) / p), a[1]]
        }
        n = b.layerStatesArray;
        for (p = n.length - 1; 0 <= p; --p) {
            var r = n[p], q = r.layer;
            if (nh(r, m) && e.call(f, q) && (r = Kh(this, q), q.ha() && (h = r.ra(q.ha().D ? l : a, b, g, d)), h))return h
        }
    };
    k.rh = function (a, b, c, d, e, f) {
        var g, h = b.viewState.resolution, l = b.layerStatesArray, m;
        for (m = l.length - 1; 0 <= m; --m) {
            g = l[m];
            var n = g.layer;
            if (nh(g, h) && e.call(f, n) && (g = Kh(this, n).Cc(a, b, c, d)))return g
        }
    };
    k.sh = function (a, b, c, d) {
        return void 0 !== this.ra(a, b, qc, this, c, d)
    };
    function Kh(a, b) {
        var c = w(b).toString();
        if (c in a.g)return a.g[c];
        var d = a.Xe(b);
        a.g[c] = d;
        a.s[c] = B(d, "change", a.Rk, a);
        return d
    }

    k.Rk = function () {
        this.i.render()
    };
    k.Ce = na;
    k.To = function (a, b) {
        for (var c in this.g)if (!(b && c in b.layerStates)) {
            var d = c, e = this.g[d];
            delete this.g[d];
            Ka(this.s[d]);
            delete this.s[d];
            Ta(e)
        }
    };
    function Lh(a, b) {
        for (var c in a.g)if (!(c in b.layerStates)) {
            b.postRenderFunctions.push(a.To.bind(a));
            break
        }
    }

    function rb(a, b) {
        return a.zIndex - b.zIndex
    }

    function Mh(a, b) {
        this.j = a;
        this.l = b;
        this.b = [];
        this.a = [];
        this.g = {}
    }

    Mh.prototype.clear = function () {
        this.b.length = 0;
        this.a.length = 0;
        Fa(this.g)
    };
    function Nh(a) {
        var b = a.b, c = a.a, d = b[0];
        1 == b.length ? (b.length = 0, c.length = 0) : (b[0] = b.pop(), c[0] = c.pop(), Oh(a, 0));
        b = a.l(d);
        delete a.g[b];
        return d
    }

    Mh.prototype.f = function (a) {
        var b = this.j(a);
        return Infinity != b ? (this.b.push(a), this.a.push(b), this.g[this.l(a)] = !0, Ph(this, 0, this.b.length - 1), !0) : !1
    };
    Mh.prototype.wc = function () {
        return this.b.length
    };
    Mh.prototype.Ya = function () {
        return 0 === this.b.length
    };
    function Oh(a, b) {
        for (var c = a.b, d = a.a, e = c.length, f = c[b], g = d[b], h = b; b < e >> 1;) {
            var l = 2 * b + 1, m = 2 * b + 2, l = m < e && d[m] < d[l] ? m : l;
            c[b] = c[l];
            d[b] = d[l];
            b = l
        }
        c[b] = f;
        d[b] = g;
        Ph(a, h, b)
    }

    function Ph(a, b, c) {
        var d = a.b;
        a = a.a;
        for (var e = d[c], f = a[c]; c > b;) {
            var g = c - 1 >> 1;
            if (a[g] > f)d[c] = d[g], a[c] = a[g], c = g; else break
        }
        d[c] = e;
        a[c] = f
    }

    function Qh(a) {
        var b = a.j, c = a.b, d = a.a, e = 0, f = c.length, g, h, l;
        for (h = 0; h < f; ++h)g = c[h], l = b(g), Infinity == l ? delete a.g[a.l(g)] : (d[e] = l, c[e++] = g);
        c.length = e;
        d.length = e;
        for (b = (a.b.length >> 1) - 1; 0 <= b; b--)Oh(a, b)
    }

    function Rh(a, b) {
        Mh.call(this, function (b) {
            return a.apply(null, b)
        }, function (a) {
            return a[0].ib()
        });
        this.s = b;
        this.i = 0;
        this.c = {}
    }

    y(Rh, Mh);
    Rh.prototype.f = function (a) {
        var b = Mh.prototype.f.call(this, a);
        b && B(a[0], "change", this.o, this);
        return b
    };
    Rh.prototype.o = function (a) {
        a = a.target;
        var b = a.V();
        if (2 === b || 3 === b || 4 === b || 5 === b)Qa(a, "change", this.o, this), a = a.ib(), a in this.c && (delete this.c[a], --this.i), this.s()
    };
    function Sh(a, b, c) {
        for (var d = 0, e, f; a.i < b && d < c && 0 < a.wc();)e = Nh(a)[0], f = e.ib(), 0 !== e.V() || f in a.c || (a.c[f] = !0, ++a.i, ++d, e.load())
    }

    function Th(a, b, c) {
        this.f = a;
        this.g = b;
        this.i = c;
        this.b = [];
        this.a = this.c = 0
    }

    function Uh(a, b) {
        var c = a.f, d = a.a, e = a.g - d, f = Math.log(a.g / a.a) / a.f;
        return ce({
            source: b, duration: f, easing: function (a) {
                return d * (Math.exp(c * a * f) - 1) / e
            }
        })
    }

    function Vh(a) {
        eb.call(this);
        this.v = null;
        this.i(!0);
        this.handleEvent = a.handleEvent
    }

    y(Vh, eb);
    Vh.prototype.f = function () {
        return this.get("active")
    };
    Vh.prototype.l = function () {
        return this.v
    };
    Vh.prototype.i = function (a) {
        this.set("active", a)
    };
    Vh.prototype.setMap = function (a) {
        this.v = a
    };
    function Wh(a, b, c, d, e) {
        if (void 0 !== c) {
            var f = b.La(), g = b.ab();
            void 0 !== f && g && e && 0 < e && (a.Wa(de({rotation: f, duration: e, easing: Zd})), d && a.Wa(ce({
                source: g,
                duration: e,
                easing: Zd
            })));
            b.rotate(c, d)
        }
    }

    function Xh(a, b, c, d, e) {
        var f = b.$();
        c = b.constrainResolution(f, c, 0);
        Yh(a, b, c, d, e)
    }

    function Yh(a, b, c, d, e) {
        if (c) {
            var f = b.$(), g = b.ab();
            void 0 !== f && g && c !== f && e && 0 < e && (a.Wa(ee({
                resolution: f,
                duration: e,
                easing: Zd
            })), d && a.Wa(ce({source: g, duration: e, easing: Zd})));
            if (d) {
                var h;
                a = b.ab();
                e = b.$();
                void 0 !== a && void 0 !== e && (h = [d[0] - c * (d[0] - a[0]) / e, d[1] - c * (d[1] - a[1]) / e]);
                b.mb(h)
            }
            b.Ub(c)
        }
    }

    function Zh(a) {
        a = a ? a : {};
        this.a = a.delta ? a.delta : 1;
        Vh.call(this, {handleEvent: $h});
        this.c = void 0 !== a.duration ? a.duration : 250
    }

    y(Zh, Vh);
    function $h(a) {
        var b = !1, c = a.originalEvent;
        if (a.type == $g) {
            var b = a.map, d = a.coordinate, c = c.shiftKey ? -this.a : this.a, e = b.aa();
            Xh(b, e, c, d, this.c);
            a.preventDefault();
            b = !0
        }
        return !b
    }

    function ai(a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }

    function bi(a) {
        a = a.originalEvent;
        return 0 == a.button && !(He && fg && a.ctrlKey)
    }

    function ci(a) {
        return "pointermove" == a.type
    }

    function di(a) {
        return a.type == ah
    }

    function ei(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    }

    function fi(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }

    function gi(a) {
        a = a.originalEvent.target.tagName;
        return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
    }

    function hi(a) {
        return "mouse" == a.b.pointerType
    }

    function ii(a) {
        a = a.b;
        return a.isPrimary && 0 === a.button
    }

    function ji(a) {
        a = a ? a : {};
        Vh.call(this, {handleEvent: a.handleEvent ? a.handleEvent : ki});
        this.Oe = a.handleDownEvent ? a.handleDownEvent : rc;
        this.Pe = a.handleDragEvent ? a.handleDragEvent : na;
        this.Mi = a.handleMoveEvent ? a.handleMoveEvent : na;
        this.tj = a.handleUpEvent ? a.handleUpEvent : rc;
        this.C = !1;
        this.ia = {};
        this.o = []
    }

    y(ji, Vh);
    function li(a) {
        for (var b = a.length, c = 0, d = 0, e = 0; e < b; e++)c += a[e].clientX, d += a[e].clientY;
        return [c / b, d / b]
    }

    function ki(a) {
        if (!(a instanceof Wg))return !0;
        var b = !1, c = a.type;
        if (c === eh || c === gh || c === ch)c = a.b, a.type == ch ? delete this.ia[c.pointerId] : a.type == eh ? this.ia[c.pointerId] = c : c.pointerId in this.ia && (this.ia[c.pointerId] = c), this.o = Ga(this.ia);
        this.C && (a.type == gh ? this.Pe(a) : a.type == ch && (this.C = this.tj(a)));
        a.type == eh ? (this.C = a = this.Oe(a), b = this.Gc(a)) : a.type == fh && this.Mi(a);
        return !b
    }

    ji.prototype.Gc = function (a) {
        return a
    };
    function mi(a) {
        ji.call(this, {handleDownEvent: ni, handleDragEvent: oi, handleUpEvent: pi});
        a = a ? a : {};
        this.a = a.kinetic;
        this.c = this.j = null;
        this.A = a.condition ? a.condition : ei;
        this.s = !1
    }

    y(mi, ji);
    function oi(a) {
        var b = li(this.o);
        this.a && this.a.b.push(b[0], b[1], Date.now());
        if (this.c) {
            var c = this.c[0] - b[0], d = b[1] - this.c[1];
            a = a.map;
            var e = a.aa(), f = e.V(), d = c = [c, d], g = f.resolution;
            d[0] *= g;
            d[1] *= g;
            Gb(c, f.rotation);
            Bb(c, f.center);
            c = e.Pd(c);
            a.render();
            e.mb(c)
        }
        this.c = b
    }

    function pi(a) {
        a = a.map;
        var b = a.aa();
        if (0 === this.o.length) {
            var c;
            if (c = !this.s && this.a)if (c = this.a, 6 > c.b.length)c = !1; else {
                var d = Date.now() - c.i, e = c.b.length - 3;
                if (c.b[e + 2] < d)c = !1; else {
                    for (var f = e - 3; 0 < f && c.b[f + 2] > d;)f -= 3;
                    var d = c.b[e + 2] - c.b[f + 2], g = c.b[e] - c.b[f], e = c.b[e + 1] - c.b[f + 1];
                    c.c = Math.atan2(e, g);
                    c.a = Math.sqrt(g * g + e * e) / d;
                    c = c.a > c.g
                }
            }
            c && (c = this.a, c = (c.g - c.a) / c.f, e = this.a.c, f = b.ab(), this.j = Uh(this.a, f), a.Wa(this.j), f = a.Ga(f), c = a.Ma([f[0] - c * Math.cos(e), f[1] - c * Math.sin(e)]), c = b.Pd(c), b.mb(c));
            Xd(b, -1);
            a.render();
            return !1
        }
        this.c = null;
        return !0
    }

    function ni(a) {
        if (0 < this.o.length && this.A(a)) {
            var b = a.map, c = b.aa();
            this.c = null;
            this.C || Xd(c, 1);
            b.render();
            this.j && nb(b.R, this.j) && (c.mb(a.frameState.viewState.center), this.j = null);
            this.a && (a = this.a, a.b.length = 0, a.c = 0, a.a = 0);
            this.s = 1 < this.o.length;
            return !0
        }
        return !1
    }

    mi.prototype.Gc = rc;
    function qi(a) {
        a = a ? a : {};
        ji.call(this, {handleDownEvent: ri, handleDragEvent: si, handleUpEvent: ti});
        this.c = a.condition ? a.condition : ai;
        this.a = void 0;
        this.j = void 0 !== a.duration ? a.duration : 250
    }

    y(qi, ji);
    function si(a) {
        if (hi(a)) {
            var b = a.map, c = b.Za();
            a = a.pixel;
            c = Math.atan2(c[1] / 2 - a[1], a[0] - c[0] / 2);
            if (void 0 !== this.a) {
                a = c - this.a;
                var d = b.aa(), e = d.La();
                b.render();
                Wh(b, d, e - a)
            }
            this.a = c
        }
    }

    function ti(a) {
        if (!hi(a))return !0;
        a = a.map;
        var b = a.aa();
        Xd(b, -1);
        var c = b.La(), d = this.j, c = b.constrainRotation(c, 0);
        Wh(a, b, c, void 0, d);
        return !1
    }

    function ri(a) {
        return hi(a) && bi(a) && this.c(a) ? (a = a.map, Xd(a.aa(), 1), a.render(), this.a = void 0, !0) : !1
    }

    qi.prototype.Gc = rc;
    function ui(a) {
        this.f = null;
        this.a = document.createElement("div");
        this.a.style.position = "absolute";
        this.a.className = "ol-box " + a;
        this.g = this.c = this.b = null
    }

    y(ui, Sa);
    ui.prototype.ka = function () {
        this.setMap(null)
    };
    function vi(a) {
        var b = a.c, c = a.g;
        a = a.a.style;
        a.left = Math.min(b[0], c[0]) + "px";
        a.top = Math.min(b[1], c[1]) + "px";
        a.width = Math.abs(c[0] - b[0]) + "px";
        a.height = Math.abs(c[1] - b[1]) + "px"
    }

    ui.prototype.setMap = function (a) {
        if (this.b) {
            this.b.A.removeChild(this.a);
            var b = this.a.style;
            b.left = b.top = b.width = b.height = "inherit"
        }
        (this.b = a) && this.b.A.appendChild(this.a)
    };
    function wi(a) {
        var b = a.c, c = a.g, b = [b, [b[0], c[1]], c, [c[0], b[1]]].map(a.b.Ma, a.b);
        b[4] = b[0].slice();
        a.f ? a.f.pa([b]) : a.f = new E([b])
    }

    ui.prototype.W = function () {
        return this.f
    };
    function xi(a, b, c) {
        Wa.call(this, a);
        this.coordinate = b;
        this.mapBrowserEvent = c
    }

    y(xi, Wa);
    function yi(a) {
        ji.call(this, {handleDownEvent: zi, handleDragEvent: Ai, handleUpEvent: Bi});
        a = a ? a : {};
        this.a = new ui(a.className || "ol-dragbox");
        this.c = null;
        this.D = a.condition ? a.condition : qc;
        this.A = a.boxEndCondition ? a.boxEndCondition : Ci
    }

    y(yi, ji);
    function Ci(a, b, c) {
        a = c[0] - b[0];
        b = c[1] - b[1];
        return 64 <= a * a + b * b
    }

    function Ai(a) {
        if (hi(a)) {
            var b = this.a, c = a.pixel;
            b.c = this.c;
            b.g = c;
            wi(b);
            vi(b);
            this.b(new xi("boxdrag", a.coordinate, a))
        }
    }

    yi.prototype.W = function () {
        return this.a.W()
    };
    yi.prototype.s = na;
    function Bi(a) {
        if (!hi(a))return !0;
        this.a.setMap(null);
        this.A(a, this.c, a.pixel) && (this.s(a), this.b(new xi("boxend", a.coordinate, a)));
        return !1
    }

    function zi(a) {
        if (hi(a) && bi(a) && this.D(a)) {
            this.c = a.pixel;
            this.a.setMap(a.map);
            var b = this.a, c = this.c;
            b.c = this.c;
            b.g = c;
            wi(b);
            vi(b);
            this.b(new xi("boxstart", a.coordinate, a));
            return !0
        }
        return !1
    }

    function Di(a) {
        a = a ? a : {};
        var b = a.condition ? a.condition : fi;
        this.j = void 0 !== a.duration ? a.duration : 200;
        this.R = void 0 !== a.out ? a.out : !1;
        yi.call(this, {condition: b, className: a.className || "ol-dragzoom"})
    }

    y(Di, yi);
    Di.prototype.s = function () {
        var a = this.v, b = a.aa(), c = a.Za(), d = this.W().H();
        if (this.R) {
            var e = b.Kc(c), d = [a.Ga(cc(d)), a.Ga(ec(d))], f = Wb(Infinity, Infinity, -Infinity, -Infinity, void 0), g, h;
            g = 0;
            for (h = d.length; g < h; ++g)Mb(f, d[g]);
            oc(e, 1 / Td(f, c));
            d = e
        }
        c = b.constrainResolution(Td(d, c));
        e = b.$();
        f = b.ab();
        a.Wa(ee({resolution: e, duration: this.j, easing: Zd}));
        a.Wa(ce({source: f, duration: this.j, easing: Zd}));
        b.mb(kc(d));
        b.Ub(c)
    };
    function Ei(a) {
        Vh.call(this, {handleEvent: Fi});
        a = a || {};
        this.a = function (a) {
            return ei(a) && gi(a)
        };
        this.c = void 0 !== a.condition ? a.condition : this.a;
        this.o = void 0 !== a.duration ? a.duration : 100;
        this.j = void 0 !== a.pixelDelta ? a.pixelDelta : 128
    }

    y(Ei, Vh);
    function Fi(a) {
        var b = !1;
        if ("keydown" == a.type) {
            var c = a.originalEvent.keyCode;
            if (this.c(a) && (40 == c || 37 == c || 39 == c || 38 == c)) {
                var d = a.map, b = d.aa(), e = b.$() * this.j, f = 0, g = 0;
                40 == c ? g = -e : 37 == c ? f = -e : 39 == c ? f = e : g = e;
                c = [f, g];
                Gb(c, b.La());
                e = this.o;
                if (f = b.ab())e && 0 < e && d.Wa(ce({
                    source: f,
                    duration: e,
                    easing: ae
                })), d = b.Pd([f[0] + c[0], f[1] + c[1]]), b.mb(d);
                a.preventDefault();
                b = !0
            }
        }
        return !b
    }

    function Gi(a) {
        Vh.call(this, {handleEvent: Hi});
        a = a ? a : {};
        this.c = a.condition ? a.condition : gi;
        this.a = a.delta ? a.delta : 1;
        this.o = void 0 !== a.duration ? a.duration : 100
    }

    y(Gi, Vh);
    function Hi(a) {
        var b = !1;
        if ("keydown" == a.type || "keypress" == a.type) {
            var c = a.originalEvent.charCode;
            if (this.c(a) && (43 == c || 45 == c)) {
                b = a.map;
                c = 43 == c ? this.a : -this.a;
                b.render();
                var d = b.aa();
                Xh(b, d, c, void 0, this.o);
                a.preventDefault();
                b = !0
            }
        }
        return !b
    }

    function Ii(a) {
        Vh.call(this, {handleEvent: Ji});
        a = a || {};
        this.c = 0;
        this.C = void 0 !== a.duration ? a.duration : 250;
        this.s = void 0 !== a.useAnchor ? a.useAnchor : !0;
        this.a = null;
        this.j = this.o = void 0
    }

    y(Ii, Vh);
    function Ji(a) {
        var b = !1;
        if ("wheel" == a.type || "mousewheel" == a.type) {
            var b = a.map, c = a.originalEvent;
            this.s && (this.a = a.coordinate);
            var d;
            "wheel" == a.type ? (d = c.deltaY, dg && c.deltaMode === pa.WheelEvent.DOM_DELTA_PIXEL && (d /= gg), c.deltaMode === pa.WheelEvent.DOM_DELTA_LINE && (d *= 40)) : "mousewheel" == a.type && (d = -c.wheelDeltaY, eg && (d /= 3));
            this.c += d;
            void 0 === this.o && (this.o = Date.now());
            d = Math.max(80 - (Date.now() - this.o), 0);
            pa.clearTimeout(this.j);
            this.j = pa.setTimeout(this.A.bind(this, b), d);
            a.preventDefault();
            b = !0
        }
        return !b
    }

    Ii.prototype.A = function (a) {
        var b = sa(this.c, -1, 1), c = a.aa();
        a.render();
        Xh(a, c, -b, this.a, this.C);
        this.c = 0;
        this.a = null;
        this.j = this.o = void 0
    };
    Ii.prototype.D = function (a) {
        this.s = a;
        a || (this.a = null)
    };
    function Ki(a) {
        ji.call(this, {handleDownEvent: Li, handleDragEvent: Mi, handleUpEvent: Ni});
        a = a || {};
        this.c = null;
        this.j = void 0;
        this.a = !1;
        this.s = 0;
        this.D = void 0 !== a.threshold ? a.threshold : .3;
        this.A = void 0 !== a.duration ? a.duration : 250
    }

    y(Ki, ji);
    function Mi(a) {
        var b = 0, c = this.o[0], d = this.o[1], c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
        void 0 !== this.j && (b = c - this.j, this.s += b, !this.a && Math.abs(this.s) > this.D && (this.a = !0));
        this.j = c;
        a = a.map;
        c = a.a.getBoundingClientRect();
        d = li(this.o);
        d[0] -= c.left;
        d[1] -= c.top;
        this.c = a.Ma(d);
        this.a && (c = a.aa(), d = c.La(), a.render(), Wh(a, c, d + b, this.c))
    }

    function Ni(a) {
        if (2 > this.o.length) {
            a = a.map;
            var b = a.aa();
            Xd(b, -1);
            if (this.a) {
                var c = b.La(), d = this.c, e = this.A, c = b.constrainRotation(c, 0);
                Wh(a, b, c, d, e)
            }
            return !1
        }
        return !0
    }

    function Li(a) {
        return 2 <= this.o.length ? (a = a.map, this.c = null, this.j = void 0, this.a = !1, this.s = 0, this.C || Xd(a.aa(), 1), a.render(), !0) : !1
    }

    Ki.prototype.Gc = rc;
    function Oi(a) {
        ji.call(this, {handleDownEvent: Pi, handleDragEvent: Qi, handleUpEvent: Ri});
        a = a ? a : {};
        this.c = null;
        this.s = void 0 !== a.duration ? a.duration : 400;
        this.a = void 0;
        this.j = 1
    }

    y(Oi, ji);
    function Qi(a) {
        var b = 1, c = this.o[0], d = this.o[1], e = c.clientX - d.clientX, c = c.clientY - d.clientY, e = Math.sqrt(e * e + c * c);
        void 0 !== this.a && (b = this.a / e);
        this.a = e;
        1 != b && (this.j = b);
        a = a.map;
        var e = a.aa(), c = e.$(), d = a.a.getBoundingClientRect(), f = li(this.o);
        f[0] -= d.left;
        f[1] -= d.top;
        this.c = a.Ma(f);
        a.render();
        Yh(a, e, c * b, this.c)
    }

    function Ri(a) {
        if (2 > this.o.length) {
            a = a.map;
            var b = a.aa();
            Xd(b, -1);
            var c = b.$(), d = this.c, e = this.s, c = b.constrainResolution(c, 0, this.j - 1);
            Yh(a, b, c, d, e);
            return !1
        }
        return !0
    }

    function Pi(a) {
        return 2 <= this.o.length ? (a = a.map, this.c = null, this.a = void 0, this.j = 1, this.C || Xd(a.aa(), 1), a.render(), !0) : !1
    }

    Oi.prototype.Gc = rc;
    function Si(a) {
        a = a ? a : {};
        var b = new le, c = new Th(-.005, .05, 100);
        (void 0 !== a.altShiftDragRotate ? a.altShiftDragRotate : 1) && b.push(new qi);
        (void 0 !== a.doubleClickZoom ? a.doubleClickZoom : 1) && b.push(new Zh({
            delta: a.zoomDelta,
            duration: a.zoomDuration
        }));
        (void 0 !== a.dragPan ? a.dragPan : 1) && b.push(new mi({kinetic: c}));
        (void 0 !== a.pinchRotate ? a.pinchRotate : 1) && b.push(new Ki);
        (void 0 !== a.pinchZoom ? a.pinchZoom : 1) && b.push(new Oi({duration: a.zoomDuration}));
        if (void 0 !== a.keyboard ? a.keyboard : 1)b.push(new Ei), b.push(new Gi({
            delta: a.zoomDelta,
            duration: a.zoomDuration
        }));
        (void 0 !== a.mouseWheelZoom ? a.mouseWheelZoom : 1) && b.push(new Ii({duration: a.zoomDuration}));
        (void 0 !== a.shiftDragZoom ? a.shiftDragZoom : 1) && b.push(new Di({duration: a.zoomDuration}));
        return b
    }

    function Ti(a) {
        var b = a || {};
        a = Ea({}, b);
        delete a.layers;
        b = b.layers;
        ih.call(this, a);
        this.f = [];
        this.a = {};
        B(this, gb("layers"), this.Tk, this);
        b ? Array.isArray(b) && (b = new le(b.slice())) : b = new le;
        this.oh(b)
    }

    y(Ti, ih);
    k = Ti.prototype;
    k.ce = function () {
        this.xb() && this.u()
    };
    k.Tk = function () {
        this.f.forEach(Ka);
        this.f.length = 0;
        var a = this.Tc();
        this.f.push(B(a, "add", this.Sk, this), B(a, "remove", this.Uk, this));
        for (var b in this.a)this.a[b].forEach(Ka);
        Fa(this.a);
        var a = a.a, c, d;
        b = 0;
        for (c = a.length; b < c; b++)d = a[b], this.a[w(d).toString()] = [B(d, "propertychange", this.ce, this), B(d, "change", this.ce, this)];
        this.u()
    };
    k.Sk = function (a) {
        a = a.element;
        var b = w(a).toString();
        this.a[b] = [B(a, "propertychange", this.ce, this), B(a, "change", this.ce, this)];
        this.u()
    };
    k.Uk = function (a) {
        a = w(a.element).toString();
        this.a[a].forEach(Ka);
        delete this.a[a];
        this.u()
    };
    k.Tc = function () {
        return this.get("layers")
    };
    k.oh = function (a) {
        this.set("layers", a)
    };
    k.hf = function (a) {
        var b = void 0 !== a ? a : [], c = b.length;
        this.Tc().forEach(function (a) {
            a.hf(b)
        });
        a = jh(this);
        var d, e;
        for (d = b.length; c < d; c++)e = b[c], e.opacity *= a.opacity, e.visible = e.visible && a.visible, e.maxResolution = Math.min(e.maxResolution, a.maxResolution), e.minResolution = Math.max(e.minResolution, a.minResolution), void 0 !== a.extent && (e.extent = void 0 !== e.extent ? mc(e.extent, a.extent) : a.extent);
        return b
    };
    k.kf = function () {
        return "ready"
    };
    function Ui(a) {
        vc.call(this, {code: a, units: "m", extent: Vi, global: !0, worldExtent: Wi})
    }

    y(Ui, vc);
    Ui.prototype.getPointResolution = function (a, b) {
        return a / ta(b[1] / 6378137)
    };
    var Xi = 6378137 * Math.PI, Vi = [-Xi, -Xi, Xi, Xi], Wi = [-180, -85, 180, 85], Hc = "EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function (a) {
        return new Ui(a)
    });

    function Ic(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
        for (var e = 0; e < d; e += c)b[e] = 6378137 * Math.PI * a[e] / 180, b[e + 1] = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360));
        return b
    }

    function Jc(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
        for (var e = 0; e < d; e += c)b[e] = 180 * a[e] / (6378137 * Math.PI), b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI - 90;
        return b
    }

    var Yi = new sc(6378137);

    function Zi(a, b) {
        vc.call(this, {
            code: a,
            units: "degrees",
            extent: $i,
            axisOrientation: b,
            global: !0,
            metersPerUnit: aj,
            worldExtent: $i
        })
    }

    y(Zi, vc);
    Zi.prototype.getPointResolution = function (a) {
        return a
    };
    var $i = [-180, -90, 180, 90], aj = Math.PI * Yi.radius / 180, Kc = [new Zi("CRS:84"), new Zi("EPSG:4326", "neu"), new Zi("urn:ogc:def:crs:EPSG::4326", "neu"), new Zi("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new Zi("urn:ogc:def:crs:OGC:1.3:CRS84"), new Zi("urn:ogc:def:crs:OGC:2:84"), new Zi("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new Zi("urn:x-ogc:def:crs:EPSG:4326", "neu")];

    function bj() {
        zc(Hc);
        zc(Kc);
        Gc()
    }

    function cj(a) {
        mh.call(this, a ? a : {})
    }

    y(cj, mh);
    function dj(a) {
        a = a ? a : {};
        var b = Ea({}, a);
        delete b.preload;
        delete b.useInterimTilesOnError;
        mh.call(this, b);
        this.l(void 0 !== a.preload ? a.preload : 0);
        this.A(void 0 !== a.useInterimTilesOnError ? a.useInterimTilesOnError : !0)
    }

    y(dj, mh);
    dj.prototype.f = function () {
        return this.get("preload")
    };
    dj.prototype.l = function (a) {
        this.set("preload", a)
    };
    dj.prototype.c = function () {
        return this.get("useInterimTilesOnError")
    };
    dj.prototype.A = function (a) {
        this.set("useInterimTilesOnError", a)
    };
    var ej = [0, 0, 0, 1], fj = [], gj = [0, 0, 0, 1];

    function hj(a, b, c, d) {
        0 !== b && (a.translate(c, d), a.rotate(b), a.translate(-c, -d))
    }

    function ij(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.a = void 0
    }

    ij.prototype.g = function () {
        return this.b
    };
    ij.prototype.f = function (a) {
        this.b = a;
        this.a = void 0
    };
    function jj(a) {
        void 0 === a.a && (a.a = a.b instanceof CanvasPattern || a.b instanceof CanvasGradient ? w(a.b).toString() : "f" + (a.b ? ve(a.b) : "-"));
        return a.a
    }

    function kj() {
        this.a = -1
    }

    function lj() {
        this.a = 64;
        this.b = Array(4);
        this.c = Array(this.a);
        this.b[0] = 1732584193;
        this.b[1] = 4023233417;
        this.b[2] = 2562383102;
        this.b[3] = 271733878;
        this.f = this.g = 0
    }

    (function () {
        function a() {
        }

        a.prototype = kj.prototype;
        lj.a = kj.prototype;
        lj.prototype = new a;
        lj.prototype.constructor = lj;
        lj.b = function (a, c, d) {
            for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++)e[f - 2] = arguments[f];
            return kj.prototype[c].apply(a, e)
        }
    })();
    function mj(a, b, c) {
        c || (c = 0);
        var d = Array(16);
        if (da(b))for (var e = 0; 16 > e; ++e)d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24; else for (e = 0; 16 > e; ++e)d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
        b = a.b[0];
        c = a.b[1];
        var e = a.b[2], f = a.b[3], g;
        g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
        b = c + (g << 7 & 4294967295 | g >>> 25);
        g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
        f = b + (g << 12 & 4294967295 | g >>> 20);
        g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
        e = f + (g << 17 & 4294967295 | g >>> 15);
        g = c + (b ^ e & (f ^ b)) +
            d[3] + 3250441966 & 4294967295;
        c = e + (g << 22 & 4294967295 | g >>> 10);
        g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
        b = c + (g << 7 & 4294967295 | g >>> 25);
        g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
        f = b + (g << 12 & 4294967295 | g >>> 20);
        g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
        e = f + (g << 17 & 4294967295 | g >>> 15);
        g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
        c = e + (g << 22 & 4294967295 | g >>> 10);
        g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
        b = c + (g << 7 & 4294967295 | g >>> 25);
        g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
        f = b + (g << 12 & 4294967295 | g >>> 20);
        g = e + (c ^ f &
            (b ^ c)) + d[10] + 4294925233 & 4294967295;
        e = f + (g << 17 & 4294967295 | g >>> 15);
        g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
        c = e + (g << 22 & 4294967295 | g >>> 10);
        g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
        b = c + (g << 7 & 4294967295 | g >>> 25);
        g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
        f = b + (g << 12 & 4294967295 | g >>> 20);
        g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
        e = f + (g << 17 & 4294967295 | g >>> 15);
        g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
        c = e + (g << 22 & 4294967295 | g >>> 10);
        g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
        b = c + (g << 5 & 4294967295 | g >>>
            27);
        g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
        f = b + (g << 9 & 4294967295 | g >>> 23);
        g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
        e = f + (g << 14 & 4294967295 | g >>> 18);
        g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
        c = e + (g << 20 & 4294967295 | g >>> 12);
        g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
        b = c + (g << 5 & 4294967295 | g >>> 27);
        g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
        f = b + (g << 9 & 4294967295 | g >>> 23);
        g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
        e = f + (g << 14 & 4294967295 | g >>> 18);
        g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
        c = e + (g << 20 & 4294967295 |
            g >>> 12);
        g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
        b = c + (g << 5 & 4294967295 | g >>> 27);
        g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
        f = b + (g << 9 & 4294967295 | g >>> 23);
        g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
        e = f + (g << 14 & 4294967295 | g >>> 18);
        g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
        c = e + (g << 20 & 4294967295 | g >>> 12);
        g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
        b = c + (g << 5 & 4294967295 | g >>> 27);
        g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
        f = b + (g << 9 & 4294967295 | g >>> 23);
        g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
        e = f + (g << 14 & 4294967295 |
            g >>> 18);
        g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
        c = e + (g << 20 & 4294967295 | g >>> 12);
        g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
        b = c + (g << 4 & 4294967295 | g >>> 28);
        g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
        f = b + (g << 11 & 4294967295 | g >>> 21);
        g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
        e = f + (g << 16 & 4294967295 | g >>> 16);
        g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
        c = e + (g << 23 & 4294967295 | g >>> 9);
        g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
        b = c + (g << 4 & 4294967295 | g >>> 28);
        g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
        f = b + (g << 11 & 4294967295 | g >>> 21);
        g = e + (f ^
            b ^ c) + d[7] + 4139469664 & 4294967295;
        e = f + (g << 16 & 4294967295 | g >>> 16);
        g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
        c = e + (g << 23 & 4294967295 | g >>> 9);
        g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
        b = c + (g << 4 & 4294967295 | g >>> 28);
        g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
        f = b + (g << 11 & 4294967295 | g >>> 21);
        g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
        e = f + (g << 16 & 4294967295 | g >>> 16);
        g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
        c = e + (g << 23 & 4294967295 | g >>> 9);
        g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
        b = c + (g << 4 & 4294967295 | g >>> 28);
        g = f + (b ^ c ^ e) + d[12] + 3873151461 & 4294967295;
        f = b + (g << 11 & 4294967295 | g >>> 21);
        g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
        e = f + (g << 16 & 4294967295 | g >>> 16);
        g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
        c = e + (g << 23 & 4294967295 | g >>> 9);
        g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
        b = c + (g << 6 & 4294967295 | g >>> 26);
        g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
        f = b + (g << 10 & 4294967295 | g >>> 22);
        g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
        e = f + (g << 15 & 4294967295 | g >>> 17);
        g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
        c = e + (g << 21 & 4294967295 | g >>> 11);
        g = b + (e ^ (c | ~f)) + d[12] + 1700485571 & 4294967295;
        b = c +
            (g << 6 & 4294967295 | g >>> 26);
        g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
        f = b + (g << 10 & 4294967295 | g >>> 22);
        g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
        e = f + (g << 15 & 4294967295 | g >>> 17);
        g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
        c = e + (g << 21 & 4294967295 | g >>> 11);
        g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
        b = c + (g << 6 & 4294967295 | g >>> 26);
        g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
        f = b + (g << 10 & 4294967295 | g >>> 22);
        g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
        e = f + (g << 15 & 4294967295 | g >>> 17);
        g = c + (f ^ (e | ~b)) + d[13] + 1309151649 & 4294967295;
        c = e + (g << 21 & 4294967295 | g >>> 11);
        g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
        b = c + (g << 6 & 4294967295 | g >>> 26);
        g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
        f = b + (g << 10 & 4294967295 | g >>> 22);
        g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
        e = f + (g << 15 & 4294967295 | g >>> 17);
        g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
        a.b[0] = a.b[0] + b & 4294967295;
        a.b[1] = a.b[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
        a.b[2] = a.b[2] + e & 4294967295;
        a.b[3] = a.b[3] + f & 4294967295
    }

    function nj(a, b) {
        var c;
        void 0 === c && (c = b.length);
        for (var d = c - a.a, e = a.c, f = a.g, g = 0; g < c;) {
            if (0 == f)for (; g <= d;)mj(a, b, g), g += a.a;
            if (da(b))for (; g < c;) {
                if (e[f++] = b.charCodeAt(g++), f == a.a) {
                    mj(a, e);
                    f = 0;
                    break
                }
            } else for (; g < c;)if (e[f++] = b[g++], f == a.a) {
                mj(a, e);
                f = 0;
                break
            }
        }
        a.g = f;
        a.f += c
    }

    function oj(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.f = a.lineCap;
        this.g = void 0 !== a.lineDash ? a.lineDash : null;
        this.c = a.lineJoin;
        this.i = a.miterLimit;
        this.a = a.width;
        this.l = void 0
    }

    k = oj.prototype;
    k.Kn = function () {
        return this.b
    };
    k.dk = function () {
        return this.f
    };
    k.Ln = function () {
        return this.g
    };
    k.ek = function () {
        return this.c
    };
    k.jk = function () {
        return this.i
    };
    k.Mn = function () {
        return this.a
    };
    k.Nn = function (a) {
        this.b = a;
        this.l = void 0
    };
    k.fp = function (a) {
        this.f = a;
        this.l = void 0
    };
    k.On = function (a) {
        this.g = a;
        this.l = void 0
    };
    k.gp = function (a) {
        this.c = a;
        this.l = void 0
    };
    k.hp = function (a) {
        this.i = a;
        this.l = void 0
    };
    k.lp = function (a) {
        this.a = a;
        this.l = void 0
    };
    function pj(a) {
        if (void 0 === a.l) {
            var b = "s" + (a.b ? ve(a.b) : "-") + "," + (void 0 !== a.f ? a.f.toString() : "-") + "," + (a.g ? a.g.toString() : "-") + "," + (void 0 !== a.c ? a.c : "-") + "," + (void 0 !== a.i ? a.i.toString() : "-") + "," + (void 0 !== a.a ? a.a.toString() : "-"), c = new lj;
            nj(c, b);
            b = Array((56 > c.g ? c.a : 2 * c.a) - c.g);
            b[0] = 128;
            for (var d = 1; d < b.length - 8; ++d)b[d] = 0;
            for (var e = 8 * c.f, d = b.length - 8; d < b.length; ++d)b[d] = e & 255, e /= 256;
            nj(c, b);
            b = Array(16);
            for (d = e = 0; 4 > d; ++d)for (var f = 0; 32 > f; f += 8)b[e++] = c.b[d] >>> f & 255;
            if (8192 >= b.length)c = String.fromCharCode.apply(null,
                b); else for (c = "", d = 0; d < b.length; d += 8192)e = pe(b, d, d + 8192), c += String.fromCharCode.apply(null, e);
            a.l = c
        }
        return a.l
    }

    function qj(a) {
        a = a || {};
        this.l = this.f = this.c = null;
        this.g = void 0 !== a.fill ? a.fill : null;
        this.b = void 0 !== a.stroke ? a.stroke : null;
        this.a = a.radius;
        this.A = [0, 0];
        this.s = this.D = this.o = null;
        var b = a.atlasManager, c, d = null, e, f = 0;
        this.b && (e = ve(this.b.b), f = this.b.a, void 0 === f && (f = 1), d = this.b.g, hg || (d = null));
        var g = 2 * (this.a + f) + 1;
        e = {strokeStyle: e, Bd: f, size: g, lineDash: d};
        if (void 0 === b)b = Oe(g, g), this.f = b.canvas, c = g = this.f.width, this.Gh(e, b, 0, 0), this.g ? this.l = this.f : (b = Oe(e.size, e.size), this.l = b.canvas, this.Fh(e, b, 0, 0));
        else {
            g = Math.round(g);
            (d = !this.g) && (c = this.Fh.bind(this, e));
            var f = this.b ? pj(this.b) : "-", h = this.g ? jj(this.g) : "-";
            this.c && f == this.c[1] && h == this.c[2] && this.a == this.c[3] || (this.c = ["c" + f + h + (void 0 !== this.a ? this.a.toString() : "-"), f, h, this.a]);
            b = b.add(this.c[0], g, g, this.Gh.bind(this, e), c);
            this.f = b.image;
            this.A = [b.offsetX, b.offsetY];
            c = b.image.width;
            this.l = d ? b.Sg : this.f
        }
        this.o = [g / 2, g / 2];
        this.D = [g, g];
        this.s = [c, c];
        Ch.call(this, {
            opacity: 1, rotateWithView: !1, rotation: 0, scale: 1, snapToPixel: void 0 !== a.snapToPixel ?
                a.snapToPixel : !0
        })
    }

    y(qj, Ch);
    k = qj.prototype;
    k.Yb = function () {
        return this.o
    };
    k.Bn = function () {
        return this.g
    };
    k.pe = function () {
        return this.l
    };
    k.jc = function () {
        return this.f
    };
    k.td = function () {
        return 2
    };
    k.ld = function () {
        return this.s
    };
    k.Ia = function () {
        return this.A
    };
    k.Cn = function () {
        return this.a
    };
    k.Fb = function () {
        return this.D
    };
    k.Dn = function () {
        return this.b
    };
    k.pf = na;
    k.load = na;
    k.Xf = na;
    k.Gh = function (a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        b.arc(a.size / 2, a.size / 2, this.a, 0, 2 * Math.PI, !0);
        this.g && (b.fillStyle = xe(this.g.b), b.fill());
        this.b && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.Bd, a.lineDash && b.setLineDash(a.lineDash), b.stroke());
        b.closePath()
    };
    k.Fh = function (a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        b.arc(a.size / 2, a.size / 2, this.a, 0, 2 * Math.PI, !0);
        b.fillStyle = ve(ej);
        b.fill();
        this.b && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.Bd, a.lineDash && b.setLineDash(a.lineDash), b.stroke());
        b.closePath()
    };
    function rj(a) {
        a = a || {};
        this.i = null;
        this.g = sj;
        void 0 !== a.geometry && this.Jh(a.geometry);
        this.c = void 0 !== a.fill ? a.fill : null;
        this.a = void 0 !== a.image ? a.image : null;
        this.f = void 0 !== a.stroke ? a.stroke : null;
        this.l = void 0 !== a.text ? a.text : null;
        this.b = a.zIndex
    }

    k = rj.prototype;
    k.W = function () {
        return this.i
    };
    k.Zj = function () {
        return this.g
    };
    k.Pn = function () {
        return this.c
    };
    k.Qn = function () {
        return this.a
    };
    k.Rn = function () {
        return this.f
    };
    k.Ha = function () {
        return this.l
    };
    k.Sn = function () {
        return this.b
    };
    k.Jh = function (a) {
        "function" === typeof a ? this.g = a : "string" === typeof a ? this.g = function (b) {
            return b.get(a)
        } : a ? a && (this.g = function () {
            return a
        }) : this.g = sj;
        this.i = a
    };
    k.Tn = function (a) {
        this.b = a
    };
    function tj(a) {
        if ("function" !== typeof a) {
            var b;
            b = Array.isArray(a) ? a : [a];
            a = function () {
                return b
            }
        }
        return a
    }

    var uj = null;

    function vj() {
        if (!uj) {
            var a = new ij({color: "rgba(255,255,255,0.4)"}), b = new oj({color: "#3399CC", width: 1.25});
            uj = [new rj({image: new qj({fill: a, stroke: b, radius: 5}), fill: a, stroke: b})]
        }
        return uj
    }

    function wj() {
        var a = {}, b = [255, 255, 255, 1], c = [0, 153, 255, 1];
        a.Polygon = [new rj({fill: new ij({color: [255, 255, 255, .5]})})];
        a.MultiPolygon = a.Polygon;
        a.LineString = [new rj({stroke: new oj({color: b, width: 5})}), new rj({stroke: new oj({color: c, width: 3})})];
        a.MultiLineString = a.LineString;
        a.Circle = a.Polygon.concat(a.LineString);
        a.Point = [new rj({
            image: new qj({radius: 6, fill: new ij({color: c}), stroke: new oj({color: b, width: 1.5})}),
            zIndex: Infinity
        })];
        a.MultiPoint = a.Point;
        a.GeometryCollection = a.Polygon.concat(a.LineString,
            a.Point);
        return a
    }

    function sj(a) {
        return a.W()
    }

    function G(a) {
        a = a ? a : {};
        var b = Ea({}, a);
        delete b.style;
        delete b.renderBuffer;
        delete b.updateWhileAnimating;
        delete b.updateWhileInteracting;
        mh.call(this, b);
        this.a = void 0 !== a.renderBuffer ? a.renderBuffer : 100;
        this.A = null;
        this.i = void 0;
        this.l(a.style);
        this.S = void 0 !== a.updateWhileAnimating ? a.updateWhileAnimating : !1;
        this.T = void 0 !== a.updateWhileInteracting ? a.updateWhileInteracting : !1
    }

    y(G, mh);
    function xj(a) {
        return a.get("renderOrder")
    }

    G.prototype.C = function () {
        return this.A
    };
    G.prototype.D = function () {
        return this.i
    };
    G.prototype.l = function (a) {
        this.A = void 0 !== a ? a : vj;
        this.i = null === a ? void 0 : tj(this.A);
        this.u()
    };
    function I(a) {
        a = a ? a : {};
        var b = Ea({}, a);
        delete b.preload;
        delete b.useInterimTilesOnError;
        G.call(this, b);
        this.Y(a.preload ? a.preload : 0);
        this.ia(a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
        this.s = a.renderMode || "hybrid"
    }

    y(I, G);
    I.prototype.f = function () {
        return this.get("preload")
    };
    I.prototype.c = function () {
        return this.get("useInterimTilesOnError")
    };
    I.prototype.Y = function (a) {
        this.set("preload", a)
    };
    I.prototype.ia = function (a) {
        this.set("useInterimTilesOnError", a)
    };
    function yj(a, b, c, d, e) {
        this.f = a;
        this.A = b;
        this.c = c;
        this.D = d;
        this.Hc = e;
        this.i = this.b = this.a = this.ia = this.Ra = this.Y = null;
        this.qa = this.za = this.v = this.Ba = this.ya = this.R = 0;
        this.Gb = !1;
        this.l = this.ta = 0;
        this.Aa = !1;
        this.S = 0;
        this.g = "";
        this.j = this.C = this.qb = this.Sa = 0;
        this.T = this.s = this.o = null;
        this.U = [];
        this.Hb = Xc()
    }

    y(yj, kh);
    function zj(a, b, c) {
        if (a.i) {
            b = gd(b, 0, c, 2, a.D, a.U);
            c = a.f;
            var d = a.Hb, e = c.globalAlpha;
            1 != a.v && (c.globalAlpha = e * a.v);
            var f = a.ta;
            a.Gb && (f += a.Hc);
            var g, h;
            g = 0;
            for (h = b.length; g < h; g += 2) {
                var l = b[g] - a.R, m = b[g + 1] - a.ya;
                a.Aa && (l = Math.round(l), m = Math.round(m));
                if (0 !== f || 1 != a.l) {
                    var n = l + a.R, p = m + a.ya;
                    qh(d, n, p, a.l, a.l, f, -n, -p);
                    c.setTransform(d[0], d[1], d[4], d[5], d[12], d[13])
                }
                c.drawImage(a.i, a.za, a.qa, a.S, a.Ba, l, m, a.S, a.Ba)
            }
            0 === f && 1 == a.l || c.setTransform(1, 0, 0, 1, 0, 0);
            1 != a.v && (c.globalAlpha = e)
        }
    }

    function Aj(a, b, c, d) {
        var e = 0;
        if (a.T && "" !== a.g) {
            a.o && Bj(a, a.o);
            a.s && Cj(a, a.s);
            var f = a.T, g = a.f, h = a.ia;
            h ? (h.font != f.font && (h.font = g.font = f.font), h.textAlign != f.textAlign && (h.textAlign = g.textAlign = f.textAlign), h.textBaseline != f.textBaseline && (h.textBaseline = g.textBaseline = f.textBaseline)) : (g.font = f.font, g.textAlign = f.textAlign, g.textBaseline = f.textBaseline, a.ia = {
                font: f.font,
                textAlign: f.textAlign,
                textBaseline: f.textBaseline
            });
            b = gd(b, e, c, d, a.D, a.U);
            for (f = a.f; e < c; e += d) {
                g = b[e] + a.Sa;
                h = b[e + 1] + a.qb;
                if (0 !== a.C ||
                    1 != a.j) {
                    var l = qh(a.Hb, g, h, a.j, a.j, a.C, -g, -h);
                    f.setTransform(l[0], l[1], l[4], l[5], l[12], l[13])
                }
                a.s && f.strokeText(a.g, g, h);
                a.o && f.fillText(a.g, g, h)
            }
            0 === a.C && 1 == a.j || f.setTransform(1, 0, 0, 1, 0, 0)
        }
    }

    function Dj(a, b, c, d, e, f) {
        var g = a.f;
        a = gd(b, c, d, e, a.D, a.U);
        g.moveTo(a[0], a[1]);
        b = a.length;
        f && (b -= 2);
        for (c = 2; c < b; c += 2)g.lineTo(a[c], a[c + 1]);
        f && g.closePath();
        return d
    }

    function Ej(a, b, c, d, e) {
        var f, g;
        f = 0;
        for (g = d.length; f < g; ++f)c = Dj(a, b, c, d[f], e, !0);
        return c
    }

    k = yj.prototype;
    k.Rd = function (a) {
        if (nc(this.c, a.H())) {
            if (this.a || this.b) {
                this.a && Bj(this, this.a);
                this.b && Cj(this, this.b);
                var b;
                b = this.D;
                var c = this.U, d = a.la();
                b = d ? gd(d, 0, d.length, a.va(), b, c) : null;
                c = b[2] - b[0];
                d = b[3] - b[1];
                c = Math.sqrt(c * c + d * d);
                d = this.f;
                d.beginPath();
                d.arc(b[0], b[1], c, 0, 2 * Math.PI);
                this.a && d.fill();
                this.b && d.stroke()
            }
            "" !== this.g && Aj(this, a.rd(), 2, 2)
        }
    };
    k.sd = function (a) {
        this.Sb(a.c, a.f);
        this.Tb(a.a);
        this.Vb(a.Ha())
    };
    k.sc = function (a) {
        switch (a.X()) {
            case "Point":
                this.uc(a);
                break;
            case "LineString":
                this.hd(a);
                break;
            case "Polygon":
                this.bf(a);
                break;
            case "MultiPoint":
                this.tc(a);
                break;
            case "MultiLineString":
                this.$e(a);
                break;
            case "MultiPolygon":
                this.af(a);
                break;
            case "GeometryCollection":
                this.Ze(a);
                break;
            case "Circle":
                this.Rd(a)
        }
    };
    k.Ye = function (a, b) {
        var c = (0, b.g)(a);
        c && nc(this.c, c.H()) && (this.sd(b), this.sc(c))
    };
    k.Ze = function (a) {
        a = a.c;
        var b, c;
        b = 0;
        for (c = a.length; b < c; ++b)this.sc(a[b])
    };
    k.uc = function (a) {
        var b = a.la();
        a = a.va();
        this.i && zj(this, b, b.length);
        "" !== this.g && Aj(this, b, b.length, a)
    };
    k.tc = function (a) {
        var b = a.la();
        a = a.va();
        this.i && zj(this, b, b.length);
        "" !== this.g && Aj(this, b, b.length, a)
    };
    k.hd = function (a) {
        if (nc(this.c, a.H())) {
            if (this.b) {
                Cj(this, this.b);
                var b = this.f, c = a.la();
                b.beginPath();
                Dj(this, c, 0, c.length, a.va(), !1);
                b.stroke()
            }
            "" !== this.g && (a = Fj(a), Aj(this, a, 2, 2))
        }
    };
    k.$e = function (a) {
        var b = a.H();
        if (nc(this.c, b)) {
            if (this.b) {
                Cj(this, this.b);
                var b = this.f, c = a.la(), d = 0, e = a.Db(), f = a.va();
                b.beginPath();
                var g, h;
                g = 0;
                for (h = e.length; g < h; ++g)d = Dj(this, c, d, e[g], f, !1);
                b.stroke()
            }
            "" !== this.g && (a = Gj(a), Aj(this, a, a.length, 2))
        }
    };
    k.bf = function (a) {
        if (nc(this.c, a.H())) {
            if (this.b || this.a) {
                this.a && Bj(this, this.a);
                this.b && Cj(this, this.b);
                var b = this.f;
                b.beginPath();
                Ej(this, a.Mb(), 0, a.Db(), a.va());
                this.a && b.fill();
                this.b && b.stroke()
            }
            "" !== this.g && (a = Md(a), Aj(this, a, 2, 2))
        }
    };
    k.af = function (a) {
        if (nc(this.c, a.H())) {
            if (this.b || this.a) {
                this.a && Bj(this, this.a);
                this.b && Cj(this, this.b);
                var b = this.f, c = Hj(a), d = 0, e = a.i, f = a.va(), g, h;
                g = 0;
                for (h = e.length; g < h; ++g) {
                    var l = e[g];
                    b.beginPath();
                    d = Ej(this, c, d, l, f);
                    this.a && b.fill();
                    this.b && b.stroke()
                }
            }
            "" !== this.g && (a = Ij(a), Aj(this, a, a.length, 2))
        }
    };
    function Bj(a, b) {
        var c = a.f, d = a.Y;
        d ? d.fillStyle != b.fillStyle && (d.fillStyle = c.fillStyle = b.fillStyle) : (c.fillStyle = b.fillStyle, a.Y = {fillStyle: b.fillStyle})
    }

    function Cj(a, b) {
        var c = a.f, d = a.Ra;
        d ? (d.lineCap != b.lineCap && (d.lineCap = c.lineCap = b.lineCap), hg && !pb(d.lineDash, b.lineDash) && c.setLineDash(d.lineDash = b.lineDash), d.lineJoin != b.lineJoin && (d.lineJoin = c.lineJoin = b.lineJoin), d.lineWidth != b.lineWidth && (d.lineWidth = c.lineWidth = b.lineWidth), d.miterLimit != b.miterLimit && (d.miterLimit = c.miterLimit = b.miterLimit), d.strokeStyle != b.strokeStyle && (d.strokeStyle = c.strokeStyle = b.strokeStyle)) : (c.lineCap = b.lineCap, hg && c.setLineDash(b.lineDash), c.lineJoin = b.lineJoin, c.lineWidth =
            b.lineWidth, c.miterLimit = b.miterLimit, c.strokeStyle = b.strokeStyle, a.Ra = {
            lineCap: b.lineCap,
            lineDash: b.lineDash,
            lineJoin: b.lineJoin,
            lineWidth: b.lineWidth,
            miterLimit: b.miterLimit,
            strokeStyle: b.strokeStyle
        })
    }

    k.Sb = function (a, b) {
        if (a) {
            var c = a.b;
            this.a = {fillStyle: xe(c ? c : ej)}
        } else this.a = null;
        if (b) {
            var c = b.b, d = b.f, e = b.g, f = b.c, g = b.a, h = b.i;
            this.b = {
                lineCap: void 0 !== d ? d : "round",
                lineDash: e ? e : fj,
                lineJoin: void 0 !== f ? f : "round",
                lineWidth: this.A * (void 0 !== g ? g : 1),
                miterLimit: void 0 !== h ? h : 10,
                strokeStyle: ve(c ? c : gj)
            }
        } else this.b = null
    };
    k.Tb = function (a) {
        if (a) {
            var b = a.Yb(), c = a.jc(1), d = a.Ia(), e = a.Fb();
            this.R = b[0];
            this.ya = b[1];
            this.Ba = e[1];
            this.i = c;
            this.v = a.v;
            this.za = d[0];
            this.qa = d[1];
            this.Gb = a.U;
            this.ta = a.j;
            this.l = a.i;
            this.Aa = a.C;
            this.S = e[0]
        } else this.i = null
    };
    k.Vb = function (a) {
        if (a) {
            var b = a.b;
            b ? (b = b.b, this.o = {fillStyle: xe(b ? b : ej)}) : this.o = null;
            var c = a.l;
            if (c) {
                var b = c.b, d = c.f, e = c.g, f = c.c, g = c.a, c = c.i;
                this.s = {
                    lineCap: void 0 !== d ? d : "round",
                    lineDash: e ? e : fj,
                    lineJoin: void 0 !== f ? f : "round",
                    lineWidth: void 0 !== g ? g : 1,
                    miterLimit: void 0 !== c ? c : 10,
                    strokeStyle: ve(b ? b : gj)
                }
            } else this.s = null;
            var b = a.g, d = a.f, e = a.c, f = a.i, g = a.a, c = a.Ha(), h = a.o;
            a = a.j;
            this.T = {
                font: void 0 !== b ? b : "10px sans-serif",
                textAlign: void 0 !== h ? h : "center",
                textBaseline: void 0 !== a ? a : "middle"
            };
            this.g = void 0 !== c ?
                c : "";
            this.Sa = void 0 !== d ? this.A * d : 0;
            this.qb = void 0 !== e ? this.A * e : 0;
            this.C = void 0 !== f ? f : 0;
            this.j = this.A * (void 0 !== g ? g : 1)
        } else this.g = ""
    };
    function Jj(a) {
        th.call(this, a);
        this.R = Xc()
    }

    y(Jj, th);
    Jj.prototype.i = function (a, b, c) {
        Kj(this, "precompose", c, a, void 0);
        var d = this.f ? this.f.a() : null;
        if (d) {
            var e = b.extent, f = void 0 !== e;
            if (f) {
                var g = a.pixelRatio, h = a.size[0] * g, l = a.size[1] * g, m = a.viewState.rotation, n = fc(e), p = ec(e), q = dc(e), e = cc(e);
                sh(a.coordinateToPixelMatrix, n, n);
                sh(a.coordinateToPixelMatrix, p, p);
                sh(a.coordinateToPixelMatrix, q, q);
                sh(a.coordinateToPixelMatrix, e, e);
                c.save();
                hj(c, -m, h / 2, l / 2);
                c.beginPath();
                c.moveTo(n[0] * g, n[1] * g);
                c.lineTo(p[0] * g, p[1] * g);
                c.lineTo(q[0] * g, q[1] * g);
                c.lineTo(e[0] * g, e[1] *
                    g);
                c.clip();
                hj(c, m, h / 2, l / 2)
            }
            g = this.s;
            h = c.globalAlpha;
            c.globalAlpha = b.opacity;
            c.drawImage(d, 0, 0, +d.width, +d.height, Math.round(g[12]), Math.round(g[13]), Math.round(d.width * g[0]), Math.round(d.height * g[5]));
            c.globalAlpha = h;
            f && c.restore()
        }
        Lj(this, c, a)
    };
    function Kj(a, b, c, d, e) {
        var f = a.a;
        if (ab(f, b)) {
            var g = d.size[0] * d.pixelRatio, h = d.size[1] * d.pixelRatio, l = d.viewState.rotation;
            hj(c, -l, g / 2, h / 2);
            a = void 0 !== e ? e : Mj(a, d, 0);
            a = new yj(c, d.pixelRatio, d.extent, a, d.viewState.rotation);
            f.b(new lh(b, f, a, d, c, null));
            hj(c, l, g / 2, h / 2)
        }
    }

    function Lj(a, b, c, d) {
        Kj(a, "postcompose", b, c, d)
    }

    function Mj(a, b, c) {
        var d = b.viewState, e = b.pixelRatio;
        return qh(a.R, e * b.size[0] / 2, e * b.size[1] / 2, e / d.resolution, -e / d.resolution, -d.rotation, -d.center[0] + c, -d.center[1])
    }

    var Nj = ["Polygon", "LineString", "Image", "Text"];

    function Oj(a, b, c) {
        this.qa = a;
        this.T = b;
        this.f = null;
        this.c = 0;
        this.resolution = c;
        this.Ba = this.ya = null;
        this.a = [];
        this.coordinates = [];
        this.Ra = Xc();
        this.b = [];
        this.Y = [];
        this.ia = Xc();
        this.za = Xc()
    }

    y(Oj, kh);
    function Pj(a, b, c, d, e, f) {
        var g = a.coordinates.length, h = a.df(), l = [b[c], b[c + 1]], m = [NaN, NaN], n = !0, p, q, r;
        for (p = c + e; p < d; p += e)m[0] = b[p], m[1] = b[p + 1], r = Vb(h, m), r !== q ? (n && (a.coordinates[g++] = l[0], a.coordinates[g++] = l[1]), a.coordinates[g++] = m[0], a.coordinates[g++] = m[1], n = !1) : 1 === r ? (a.coordinates[g++] = m[0], a.coordinates[g++] = m[1], n = !1) : n = !0, l[0] = m[0], l[1] = m[1], q = r;
        p === c + e && (a.coordinates[g++] = l[0], a.coordinates[g++] = l[1]);
        f && (a.coordinates[g++] = b[c], a.coordinates[g++] = b[c + 1]);
        return g
    }

    function Qj(a, b) {
        a.ya = [0, b, 0];
        a.a.push(a.ya);
        a.Ba = [0, b, 0];
        a.b.push(a.Ba)
    }

    function Rj(a, b, c, d, e, f, g, h, l) {
        var m;
        rh(d, a.Ra) ? m = a.Y : (m = gd(a.coordinates, 0, a.coordinates.length, 2, d, a.Y), $c(a.Ra, d));
        d = !Ha(f);
        var n = 0, p = g.length, q, r, u = a.ia;
        a = a.za;
        for (var x, v, D, A; n < p;) {
            var z = g[n], F, N, K, X;
            switch (z[0]) {
                case 0:
                    q = z[1];
                    d && f[w(q).toString()] || !q.W() ? n = z[2] : void 0 === l || nc(l, q.W().H()) ? ++n : n = z[2];
                    break;
                case 1:
                    b.beginPath();
                    ++n;
                    break;
                case 2:
                    q = z[1];
                    r = m[q];
                    z = m[q + 1];
                    D = m[q + 2] - r;
                    q = m[q + 3] - z;
                    b.arc(r, z, Math.sqrt(D * D + q * q), 0, 2 * Math.PI, !0);
                    ++n;
                    break;
                case 3:
                    b.closePath();
                    ++n;
                    break;
                case 4:
                    q = z[1];
                    r = z[2];
                    F = z[3];
                    K = z[4] * c;
                    var oa = z[5] * c, H = z[6];
                    N = z[7];
                    var ya = z[8], Ua = z[9];
                    D = z[11];
                    A = z[12];
                    var Xa = z[13], Va = z[14];
                    for (z[10] && (D += e); q < r; q += 2) {
                        z = m[q] - K;
                        X = m[q + 1] - oa;
                        Xa && (z = Math.round(z), X = Math.round(X));
                        if (1 != A || 0 !== D) {
                            var Aa = z + K, Qb = X + oa;
                            qh(u, Aa, Qb, A, A, D, -Aa, -Qb);
                            b.transform(u[0], u[1], u[4], u[5], u[12], u[13])
                        }
                        Aa = b.globalAlpha;
                        1 != N && (b.globalAlpha = Aa * N);
                        var Qb = Va + ya > F.width ? F.width - ya : Va, Nb = H + Ua > F.height ? F.height - Ua : H;
                        b.drawImage(F, ya, Ua, Qb, Nb, z, X, Qb * c, Nb * c);
                        1 != N && (b.globalAlpha = Aa);
                        if (1 != A || 0 !== D)cd(u, a), b.transform(a[0],
                            a[1], a[4], a[5], a[12], a[13])
                    }
                    ++n;
                    break;
                case 5:
                    q = z[1];
                    r = z[2];
                    K = z[3];
                    oa = z[4] * c;
                    H = z[5] * c;
                    D = z[6];
                    A = z[7] * c;
                    F = z[8];
                    for (N = z[9]; q < r; q += 2) {
                        z = m[q] + oa;
                        X = m[q + 1] + H;
                        if (1 != A || 0 !== D)qh(u, z, X, A, A, D, -z, -X), b.transform(u[0], u[1], u[4], u[5], u[12], u[13]);
                        ya = K.split("\n");
                        Ua = ya.length;
                        1 < Ua ? (Xa = Math.round(1.5 * b.measureText("M").width), X -= (Ua - 1) / 2 * Xa) : Xa = 0;
                        for (Va = 0; Va < Ua; Va++)Aa = ya[Va], N && b.strokeText(Aa, z, X), F && b.fillText(Aa, z, X), X += Xa;
                        if (1 != A || 0 !== D)cd(u, a), b.transform(a[0], a[1], a[4], a[5], a[12], a[13])
                    }
                    ++n;
                    break;
                case 6:
                    if (void 0 !==
                        h && (q = z[1], q = h(q)))return q;
                    ++n;
                    break;
                case 7:
                    b.fill();
                    ++n;
                    break;
                case 8:
                    q = z[1];
                    r = z[2];
                    z = m[q];
                    X = m[q + 1];
                    D = z + .5 | 0;
                    A = X + .5 | 0;
                    if (D !== x || A !== v)b.moveTo(z, X), x = D, v = A;
                    for (q += 2; q < r; q += 2)if (z = m[q], X = m[q + 1], D = z + .5 | 0, A = X + .5 | 0, q == r - 2 || D !== x || A !== v)b.lineTo(z, X), x = D, v = A;
                    ++n;
                    break;
                case 9:
                    b.fillStyle = z[1];
                    ++n;
                    break;
                case 10:
                    x = void 0 !== z[7] ? z[7] : !0;
                    v = z[2];
                    b.strokeStyle = z[1];
                    b.lineWidth = x ? v * c : v;
                    b.lineCap = z[3];
                    b.lineJoin = z[4];
                    b.miterLimit = z[5];
                    hg && b.setLineDash(z[6]);
                    v = x = NaN;
                    ++n;
                    break;
                case 11:
                    b.font = z[1];
                    b.textAlign = z[2];
                    b.textBaseline = z[3];
                    ++n;
                    break;
                case 12:
                    b.stroke();
                    ++n;
                    break;
                default:
                    ++n
            }
        }
    }

    Oj.prototype.Pa = function (a, b, c, d, e) {
        Rj(this, a, b, c, d, e, this.a, void 0)
    };
    function Sj(a) {
        var b = a.b;
        b.reverse();
        var c, d = b.length, e, f, g = -1;
        for (c = 0; c < d; ++c)if (e = b[c], f = e[0], 6 == f)g = c; else if (0 == f) {
            e[2] = c;
            e = a.b;
            for (f = c; g < f;) {
                var h = e[g];
                e[g] = e[f];
                e[f] = h;
                ++g;
                --f
            }
            g = -1
        }
    }

    function Tj(a, b) {
        a.ya[2] = a.a.length;
        a.ya = null;
        a.Ba[2] = a.b.length;
        a.Ba = null;
        var c = [6, b];
        a.a.push(c);
        a.b.push(c)
    }

    Oj.prototype.ke = na;
    Oj.prototype.df = function () {
        return this.T
    };
    function Uj(a, b, c) {
        Oj.call(this, a, b, c);
        this.o = this.S = null;
        this.R = this.D = this.C = this.A = this.U = this.v = this.s = this.j = this.l = this.i = this.g = void 0
    }

    y(Uj, Oj);
    Uj.prototype.uc = function (a, b) {
        if (this.o) {
            Qj(this, b);
            var c = a.la(), d = this.coordinates.length, c = Pj(this, c, 0, c.length, a.va(), !1);
            this.a.push([4, d, c, this.o, this.g, this.i, this.l, this.j, this.s, this.v, this.U, this.A, this.C, this.D, this.R]);
            this.b.push([4, d, c, this.S, this.g, this.i, this.l, this.j, this.s, this.v, this.U, this.A, this.C, this.D, this.R]);
            Tj(this, b)
        }
    };
    Uj.prototype.tc = function (a, b) {
        if (this.o) {
            Qj(this, b);
            var c = a.la(), d = this.coordinates.length, c = Pj(this, c, 0, c.length, a.va(), !1);
            this.a.push([4, d, c, this.o, this.g, this.i, this.l, this.j, this.s, this.v, this.U, this.A, this.C, this.D, this.R]);
            this.b.push([4, d, c, this.S, this.g, this.i, this.l, this.j, this.s, this.v, this.U, this.A, this.C, this.D, this.R]);
            Tj(this, b)
        }
    };
    Uj.prototype.ke = function () {
        Sj(this);
        this.i = this.g = void 0;
        this.o = this.S = null;
        this.R = this.D = this.A = this.U = this.v = this.s = this.j = this.C = this.l = void 0
    };
    Uj.prototype.Tb = function (a) {
        var b = a.Yb(), c = a.Fb(), d = a.pe(1), e = a.jc(1), f = a.Ia();
        this.g = b[0];
        this.i = b[1];
        this.S = d;
        this.o = e;
        this.l = c[1];
        this.j = a.v;
        this.s = f[0];
        this.v = f[1];
        this.U = a.U;
        this.A = a.j;
        this.C = a.i;
        this.D = a.C;
        this.R = c[0]
    };
    function Vj(a, b, c) {
        Oj.call(this, a, b, c);
        this.g = {
            fd: void 0,
            ad: void 0,
            bd: null,
            cd: void 0,
            dd: void 0,
            ed: void 0,
            nf: 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }

    y(Vj, Oj);
    function Wj(a, b, c, d, e) {
        var f = a.coordinates.length;
        b = Pj(a, b, c, d, e, !1);
        f = [8, f, b];
        a.a.push(f);
        a.b.push(f);
        return d
    }

    k = Vj.prototype;
    k.df = function () {
        this.f || (this.f = Pb(this.T), 0 < this.c && Ob(this.f, this.resolution * (this.c + 1) / 2, this.f));
        return this.f
    };
    function Xj(a) {
        var b = a.g, c = b.strokeStyle, d = b.lineCap, e = b.lineDash, f = b.lineJoin, g = b.lineWidth, h = b.miterLimit;
        b.fd == c && b.ad == d && pb(b.bd, e) && b.cd == f && b.dd == g && b.ed == h || (b.nf != a.coordinates.length && (a.a.push([12]), b.nf = a.coordinates.length), a.a.push([10, c, g, d, f, h, e], [1]), b.fd = c, b.ad = d, b.bd = e, b.cd = f, b.dd = g, b.ed = h)
    }

    k.hd = function (a, b) {
        var c = this.g, d = c.lineWidth;
        void 0 !== c.strokeStyle && void 0 !== d && (Xj(this), Qj(this, b), this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash], [1]), c = a.la(), Wj(this, c, 0, c.length, a.va()), this.b.push([12]), Tj(this, b))
    };
    k.$e = function (a, b) {
        var c = this.g, d = c.lineWidth;
        if (void 0 !== c.strokeStyle && void 0 !== d) {
            Xj(this);
            Qj(this, b);
            this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash], [1]);
            var c = a.Db(), d = a.la(), e = a.va(), f = 0, g, h;
            g = 0;
            for (h = c.length; g < h; ++g)f = Wj(this, d, f, c[g], e);
            this.b.push([12]);
            Tj(this, b)
        }
    };
    k.ke = function () {
        this.g.nf != this.coordinates.length && this.a.push([12]);
        Sj(this);
        this.g = null
    };
    k.Sb = function (a, b) {
        var c = b.b;
        this.g.strokeStyle = ve(c ? c : gj);
        c = b.f;
        this.g.lineCap = void 0 !== c ? c : "round";
        c = b.g;
        this.g.lineDash = c ? c : fj;
        c = b.c;
        this.g.lineJoin = void 0 !== c ? c : "round";
        c = b.a;
        this.g.lineWidth = void 0 !== c ? c : 1;
        c = b.i;
        this.g.miterLimit = void 0 !== c ? c : 10;
        this.g.lineWidth > this.c && (this.c = this.g.lineWidth, this.f = null)
    };
    function Yj(a, b, c) {
        Oj.call(this, a, b, c);
        this.g = {
            ug: void 0,
            fd: void 0,
            ad: void 0,
            bd: null,
            cd: void 0,
            dd: void 0,
            ed: void 0,
            fillStyle: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }

    y(Yj, Oj);
    function Zj(a, b, c, d, e) {
        var f = a.g, g = [1];
        a.a.push(g);
        a.b.push(g);
        var h, g = 0;
        for (h = d.length; g < h; ++g) {
            var l = d[g], m = a.coordinates.length;
            c = Pj(a, b, c, l, e, !0);
            c = [8, m, c];
            m = [3];
            a.a.push(c, m);
            a.b.push(c, m);
            c = l
        }
        b = [7];
        a.b.push(b);
        void 0 !== f.fillStyle && a.a.push(b);
        void 0 !== f.strokeStyle && (f = [12], a.a.push(f), a.b.push(f));
        return c
    }

    k = Yj.prototype;
    k.Rd = function (a, b) {
        var c = this.g, d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            ak(this);
            Qj(this, b);
            this.b.push([9, ve(ej)]);
            void 0 !== c.strokeStyle && this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash]);
            var e = a.la(), d = this.coordinates.length;
            Pj(this, e, 0, e.length, a.va(), !1);
            e = [1];
            d = [2, d];
            this.a.push(e, d);
            this.b.push(e, d);
            d = [7];
            this.b.push(d);
            void 0 !== c.fillStyle && this.a.push(d);
            void 0 !== c.strokeStyle && (c = [12], this.a.push(c), this.b.push(c));
            Tj(this, b)
        }
    };
    k.bf = function (a, b) {
        var c = this.g, d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d)ak(this), Qj(this, b), this.b.push([9, ve(ej)]), void 0 !== c.strokeStyle && this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash]), c = a.Db(), d = a.Mb(), Zj(this, d, 0, c, a.va()), Tj(this, b)
    };
    k.af = function (a, b) {
        var c = this.g, d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            ak(this);
            Qj(this, b);
            this.b.push([9, ve(ej)]);
            void 0 !== c.strokeStyle && this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash]);
            var c = a.i, d = Hj(a), e = a.va(), f = 0, g, h;
            g = 0;
            for (h = c.length; g < h; ++g)f = Zj(this, d, f, c[g], e);
            Tj(this, b)
        }
    };
    k.ke = function () {
        Sj(this);
        this.g = null;
        var a = this.qa;
        if (0 !== a) {
            var b = this.coordinates, c, d;
            c = 0;
            for (d = b.length; c < d; ++c)b[c] = a * Math.round(b[c] / a)
        }
    };
    k.df = function () {
        this.f || (this.f = Pb(this.T), 0 < this.c && Ob(this.f, this.resolution * (this.c + 1) / 2, this.f));
        return this.f
    };
    k.Sb = function (a, b) {
        var c = this.g;
        if (a) {
            var d = a.b;
            c.fillStyle = xe(d ? d : ej)
        } else c.fillStyle = void 0;
        b ? (d = b.b, c.strokeStyle = ve(d ? d : gj), d = b.f, c.lineCap = void 0 !== d ? d : "round", d = b.g, c.lineDash = d ? d.slice() : fj, d = b.c, c.lineJoin = void 0 !== d ? d : "round", d = b.a, c.lineWidth = void 0 !== d ? d : 1, d = b.i, c.miterLimit = void 0 !== d ? d : 10, c.lineWidth > this.c && (this.c = c.lineWidth, this.f = null)) : (c.strokeStyle = void 0, c.lineCap = void 0, c.lineDash = null, c.lineJoin = void 0, c.lineWidth = void 0, c.miterLimit = void 0)
    };
    function ak(a) {
        var b = a.g, c = b.fillStyle, d = b.strokeStyle, e = b.lineCap, f = b.lineDash, g = b.lineJoin, h = b.lineWidth, l = b.miterLimit;
        void 0 !== c && b.ug != c && (a.a.push([9, c]), b.ug = b.fillStyle);
        void 0 === d || b.fd == d && b.ad == e && b.bd == f && b.cd == g && b.dd == h && b.ed == l || (a.a.push([10, d, h, e, g, l, f]), b.fd = d, b.ad = e, b.bd = f, b.cd = g, b.dd = h, b.ed = l)
    }

    function bk(a, b, c) {
        Oj.call(this, a, b, c);
        this.D = this.C = this.A = null;
        this.o = "";
        this.U = this.v = this.s = this.j = 0;
        this.l = this.i = this.g = null
    }

    y(bk, Oj);
    function ck(a, b, c, d, e) {
        if ("" !== a.o && a.l && (a.g || a.i)) {
            if (a.g) {
                var f = a.g, g = a.A;
                if (!g || g.fillStyle != f.fillStyle) {
                    var h = [9, f.fillStyle];
                    a.a.push(h);
                    a.b.push(h);
                    g ? g.fillStyle = f.fillStyle : a.A = {fillStyle: f.fillStyle}
                }
            }
            a.i && (f = a.i, g = a.C, g && g.lineCap == f.lineCap && g.lineDash == f.lineDash && g.lineJoin == f.lineJoin && g.lineWidth == f.lineWidth && g.miterLimit == f.miterLimit && g.strokeStyle == f.strokeStyle || (h = [10, f.strokeStyle, f.lineWidth, f.lineCap, f.lineJoin, f.miterLimit, f.lineDash, !1], a.a.push(h), a.b.push(h), g ? (g.lineCap =
                f.lineCap, g.lineDash = f.lineDash, g.lineJoin = f.lineJoin, g.lineWidth = f.lineWidth, g.miterLimit = f.miterLimit, g.strokeStyle = f.strokeStyle) : a.C = {
                lineCap: f.lineCap,
                lineDash: f.lineDash,
                lineJoin: f.lineJoin,
                lineWidth: f.lineWidth,
                miterLimit: f.miterLimit,
                strokeStyle: f.strokeStyle
            }));
            f = a.l;
            g = a.D;
            g && g.font == f.font && g.textAlign == f.textAlign && g.textBaseline == f.textBaseline || (h = [11, f.font, f.textAlign, f.textBaseline], a.a.push(h), a.b.push(h), g ? (g.font = f.font, g.textAlign = f.textAlign, g.textBaseline = f.textBaseline) : a.D =
            {font: f.font, textAlign: f.textAlign, textBaseline: f.textBaseline});
            Qj(a, e);
            f = a.coordinates.length;
            b = Pj(a, b, 0, c, d, !1);
            b = [5, f, b, a.o, a.j, a.s, a.v, a.U, !!a.g, !!a.i];
            a.a.push(b);
            a.b.push(b);
            Tj(a, e)
        }
    }

    bk.prototype.Vb = function (a) {
        if (a) {
            var b = a.b;
            b ? (b = b.b, b = xe(b ? b : ej), this.g ? this.g.fillStyle = b : this.g = {fillStyle: b}) : this.g = null;
            var c = a.l;
            if (c) {
                var b = c.b, d = c.f, e = c.g, f = c.c, g = c.a, c = c.i, d = void 0 !== d ? d : "round", e = e ? e.slice() : fj, f = void 0 !== f ? f : "round", g = void 0 !== g ? g : 1, c = void 0 !== c ? c : 10, b = ve(b ? b : gj);
                if (this.i) {
                    var h = this.i;
                    h.lineCap = d;
                    h.lineDash = e;
                    h.lineJoin = f;
                    h.lineWidth = g;
                    h.miterLimit = c;
                    h.strokeStyle = b
                } else this.i = {lineCap: d, lineDash: e, lineJoin: f, lineWidth: g, miterLimit: c, strokeStyle: b}
            } else this.i = null;
            var l = a.g, b = a.f, d = a.c, e = a.i, g = a.a, c = a.Ha(), f = a.o, h = a.j;
            a = void 0 !== l ? l : "10px sans-serif";
            f = void 0 !== f ? f : "center";
            h = void 0 !== h ? h : "middle";
            this.l ? (l = this.l, l.font = a, l.textAlign = f, l.textBaseline = h) : this.l = {
                font: a,
                textAlign: f,
                textBaseline: h
            };
            this.o = void 0 !== c ? c : "";
            this.j = void 0 !== b ? b : 0;
            this.s = void 0 !== d ? d : 0;
            this.v = void 0 !== e ? e : 0;
            this.U = void 0 !== g ? g : 1
        } else this.o = ""
    };
    function dk(a, b, c, d) {
        this.o = a;
        this.g = b;
        this.l = c;
        this.f = d;
        this.a = {};
        this.c = Oe(1, 1);
        this.i = Xc()
    }

    function ek(a) {
        for (var b in a.a) {
            var c = a.a[b], d;
            for (d in c)c[d].ke()
        }
    }

    dk.prototype.ra = function (a, b, c, d, e) {
        var f = this.i;
        qh(f, .5, .5, 1 / b, -1 / b, -c, -a[0], -a[1]);
        var g = this.c;
        g.clearRect(0, 0, 1, 1);
        var h;
        void 0 !== this.f && (h = Lb(), Mb(h, a), Ob(h, b * this.f, h));
        return fk(this, g, f, c, d, function (a) {
            if (0 < g.getImageData(0, 0, 1, 1).data[3]) {
                if (a = e(a))return a;
                g.clearRect(0, 0, 1, 1)
            }
        }, h)
    };
    dk.prototype.b = function (a, b) {
        var c = void 0 !== a ? a.toString() : "0", d = this.a[c];
        void 0 === d && (d = {}, this.a[c] = d);
        c = d[b];
        void 0 === c && (c = new gk[b](this.o, this.g, this.l), d[b] = c);
        return c
    };
    dk.prototype.Ya = function () {
        return Ha(this.a)
    };
    dk.prototype.Pa = function (a, b, c, d, e, f) {
        var g = Object.keys(this.a).map(Number);
        g.sort(ib);
        var h = this.g, l = h[0], m = h[1], n = h[2], h = h[3], l = [l, m, l, h, n, h, n, m];
        gd(l, 0, 8, 2, c, l);
        a.save();
        a.beginPath();
        a.moveTo(l[0], l[1]);
        a.lineTo(l[2], l[3]);
        a.lineTo(l[4], l[5]);
        a.lineTo(l[6], l[7]);
        a.closePath();
        a.clip();
        f = f ? f : Nj;
        for (var p, q, l = 0, m = g.length; l < m; ++l)for (p = this.a[g[l].toString()], n = 0, h = f.length; n < h; ++n)q = p[f[n]], void 0 !== q && q.Pa(a, b, c, d, e);
        a.restore()
    };
    function fk(a, b, c, d, e, f, g) {
        var h = Object.keys(a.a).map(Number);
        h.sort(function (a, b) {
            return b - a
        });
        var l, m, n, p, q;
        l = 0;
        for (m = h.length; l < m; ++l)for (p = a.a[h[l].toString()], n = Nj.length - 1; 0 <= n; --n)if (q = p[Nj[n]], void 0 !== q && (q = Rj(q, b, 1, c, d, e, q.b, f, g)))return q
    }

    var gk = {Image: Uj, LineString: Vj, Polygon: Yj, Text: bk};

    function hk(a, b, c, d) {
        this.g = a;
        this.b = b;
        this.c = c;
        this.f = d
    }

    k = hk.prototype;
    k.get = function (a) {
        return this.f[a]
    };
    k.Db = function () {
        return this.c
    };
    k.H = function () {
        this.a || (this.a = "Point" === this.g ? Xb(this.b) : Yb(this.b, 0, this.b.length, 2));
        return this.a
    };
    k.Mb = function () {
        return this.b
    };
    k.la = hk.prototype.Mb;
    k.W = function () {
        return this
    };
    k.Nm = function () {
        return this.f
    };
    k.od = hk.prototype.W;
    k.va = function () {
        return 2
    };
    k.ec = na;
    k.X = function () {
        return this.g
    };
    function ik(a, b) {
        return w(a) - w(b)
    }

    function jk(a, b) {
        var c = .5 * a / b;
        return c * c
    }

    function lk(a, b, c, d, e, f) {
        var g = !1, h, l;
        if (h = c.a)l = h.td(), 2 == l || 3 == l ? h.Xf(e, f) : (0 == l && h.load(), h.pf(e, f), g = !0);
        if (e = (0, c.g)(b))d = e.od(d), (0, mk[d.X()])(a, d, c, b);
        return g
    }

    var mk = {
        Point: function (a, b, c, d) {
            var e = c.a;
            if (e) {
                if (2 != e.td())return;
                var f = a.b(c.b, "Image");
                f.Tb(e);
                f.uc(b, d)
            }
            if (e = c.Ha())a = a.b(c.b, "Text"), a.Vb(e), ck(a, b.la(), 2, 2, d)
        }, LineString: function (a, b, c, d) {
            var e = c.f;
            if (e) {
                var f = a.b(c.b, "LineString");
                f.Sb(null, e);
                f.hd(b, d)
            }
            if (e = c.Ha())a = a.b(c.b, "Text"), a.Vb(e), ck(a, Fj(b), 2, 2, d)
        }, Polygon: function (a, b, c, d) {
            var e = c.c, f = c.f;
            if (e || f) {
                var g = a.b(c.b, "Polygon");
                g.Sb(e, f);
                g.bf(b, d)
            }
            if (e = c.Ha())a = a.b(c.b, "Text"), a.Vb(e), ck(a, Md(b), 2, 2, d)
        }, MultiPoint: function (a, b, c, d) {
            var e =
                c.a;
            if (e) {
                if (2 != e.td())return;
                var f = a.b(c.b, "Image");
                f.Tb(e);
                f.tc(b, d)
            }
            if (e = c.Ha())a = a.b(c.b, "Text"), a.Vb(e), c = b.la(), ck(a, c, c.length, b.va(), d)
        }, MultiLineString: function (a, b, c, d) {
            var e = c.f;
            if (e) {
                var f = a.b(c.b, "LineString");
                f.Sb(null, e);
                f.$e(b, d)
            }
            if (e = c.Ha())a = a.b(c.b, "Text"), a.Vb(e), b = Gj(b), ck(a, b, b.length, 2, d)
        }, MultiPolygon: function (a, b, c, d) {
            var e = c.c, f = c.f;
            if (f || e) {
                var g = a.b(c.b, "Polygon");
                g.Sb(e, f);
                g.af(b, d)
            }
            if (e = c.Ha())a = a.b(c.b, "Text"), a.Vb(e), b = Ij(b), ck(a, b, b.length, 2, d)
        }, GeometryCollection: function (a,
                                         b, c, d) {
            b = b.c;
            var e, f;
            e = 0;
            for (f = b.length; e < f; ++e)(0, mk[b[e].X()])(a, b[e], c, d)
        }, Circle: function (a, b, c, d) {
            var e = c.c, f = c.f;
            if (e || f) {
                var g = a.b(c.b, "Polygon");
                g.Sb(e, f);
                g.Rd(b, d)
            }
            if (e = c.Ha())a = a.b(c.b, "Text"), a.Vb(e), ck(a, b.rd(), 2, 2, d)
        }
    };

    function nk(a, b, c, d, e, f) {
        this.c = void 0 !== f ? f : null;
        oh.call(this, a, b, c, void 0 !== f ? 0 : 2, d);
        this.g = e
    }

    y(nk, oh);
    nk.prototype.i = function (a) {
        this.state = a ? 3 : 2;
        ph(this)
    };
    nk.prototype.load = function () {
        0 == this.state && (this.state = 1, ph(this), this.c(this.i.bind(this)))
    };
    nk.prototype.a = function () {
        return this.g
    };
    var ok, pk = pa.navigator, qk = pa.chrome, rk = -1 < pk.userAgent.indexOf("OPR"), sk = -1 < pk.userAgent.indexOf("Edge");
    ok = !(!pk.userAgent.match("CriOS") && null !== qk && void 0 !== qk && "Google Inc." === pk.vendor && 0 == rk && 0 == sk);
    function tk(a, b, c, d) {
        var e = Rc(c, b, a);
        c = b.getPointResolution(d, c);
        b = b.$b();
        void 0 !== b && (c *= b);
        b = a.$b();
        void 0 !== b && (c /= b);
        a = a.getPointResolution(c, e) / c;
        isFinite(a) && 0 < a && (c /= a);
        return c
    }

    function uk(a, b, c, d) {
        a = c - a;
        b = d - b;
        var e = Math.sqrt(a * a + b * b);
        return [Math.round(c + a / e), Math.round(d + b / e)]
    }

    function vk(a, b, c, d, e, f, g, h, l, m, n) {
        var p = Oe(Math.round(c * a), Math.round(c * b));
        if (0 === l.length)return p.canvas;
        p.scale(c, c);
        var q = Lb();
        l.forEach(function (a) {
            ac(q, a.extent)
        });
        var r = Oe(Math.round(c * ic(q) / d), Math.round(c * jc(q) / d)), u = c / d;
        l.forEach(function (a) {
            r.drawImage(a.image, m, m, a.image.width - 2 * m, a.image.height - 2 * m, (a.extent[0] - q[0]) * u, -(a.extent[3] - q[3]) * u, ic(a.extent) * u, jc(a.extent) * u)
        });
        var x = fc(g);
        h.f.forEach(function (a) {
            var b = a.source, e = a.target, g = b[1][0], h = b[1][1], l = b[2][0], m = b[2][1];
            a = (e[0][0] -
                x[0]) / f;
            var n = -(e[0][1] - x[1]) / f, u = (e[1][0] - x[0]) / f, H = -(e[1][1] - x[1]) / f, ya = (e[2][0] - x[0]) / f, Ua = -(e[2][1] - x[1]) / f, e = b[0][0], b = b[0][1], g = g - e, h = h - b, l = l - e, m = m - b;
            a:{
                g = [[g, h, 0, 0, u - a], [l, m, 0, 0, ya - a], [0, 0, g, h, H - n], [0, 0, l, m, Ua - n]];
                h = g.length;
                for (l = 0; l < h; l++) {
                    for (var m = l, Xa = Math.abs(g[l][l]), Va = l + 1; Va < h; Va++) {
                        var Aa = Math.abs(g[Va][l]);
                        Aa > Xa && (Xa = Aa, m = Va)
                    }
                    if (0 === Xa) {
                        g = null;
                        break a
                    }
                    Xa = g[m];
                    g[m] = g[l];
                    g[l] = Xa;
                    for (m = l + 1; m < h; m++)for (Xa = -g[m][l] / g[l][l], Va = l; Va < h + 1; Va++)g[m][Va] = l == Va ? 0 : g[m][Va] + Xa * g[l][Va]
                }
                l = Array(h);
                for (m = h - 1; 0 <= m; m--)for (l[m] = g[m][h] / g[m][m], Xa = m - 1; 0 <= Xa; Xa--)g[Xa][h] -= g[Xa][m] * l[m];
                g = l
            }
            g && (p.save(), p.beginPath(), ok ? (l = (a + u + ya) / 3, m = (n + H + Ua) / 3, h = uk(l, m, a, n), u = uk(l, m, u, H), ya = uk(l, m, ya, Ua), p.moveTo(h[0], h[1]), p.lineTo(u[0], u[1]), p.lineTo(ya[0], ya[1])) : (p.moveTo(a, n), p.lineTo(u, H), p.lineTo(ya, Ua)), p.closePath(), p.clip(), p.transform(g[0], g[2], g[1], g[3], a, n), p.translate(q[0] - e, q[3] - b), p.scale(d / c, -d / c), p.drawImage(r.canvas, 0, 0), p.restore())
        });
        n && (p.save(), p.strokeStyle = "black", p.lineWidth = 1, h.f.forEach(function (a) {
            var b =
                a.target;
            a = (b[0][0] - x[0]) / f;
            var c = -(b[0][1] - x[1]) / f, d = (b[1][0] - x[0]) / f, e = -(b[1][1] - x[1]) / f, g = (b[2][0] - x[0]) / f, b = -(b[2][1] - x[1]) / f;
            p.beginPath();
            p.moveTo(a, c);
            p.lineTo(d, e);
            p.lineTo(g, b);
            p.closePath();
            p.stroke()
        }), p.restore());
        return p.canvas
    }

    function wk(a, b, c, d, e) {
        this.g = a;
        this.c = b;
        var f = {}, g = Pc(this.c, this.g);
        this.a = function (a) {
            var b = a[0] + "/" + a[1];
            f[b] || (f[b] = g(a));
            return f[b]
        };
        this.i = d;
        this.s = e * e;
        this.f = [];
        this.o = !1;
        this.j = this.g.a && !!d && !!this.g.H() && ic(d) == ic(this.g.H());
        this.b = this.g.H() ? ic(this.g.H()) : null;
        this.l = this.c.H() ? ic(this.c.H()) : null;
        a = fc(c);
        b = ec(c);
        d = dc(c);
        c = cc(c);
        e = this.a(a);
        var h = this.a(b), l = this.a(d), m = this.a(c);
        xk(this, a, b, d, c, e, h, l, m, 10);
        if (this.o) {
            var n = Infinity;
            this.f.forEach(function (a) {
                n = Math.min(n, a.source[0][0],
                    a.source[1][0], a.source[2][0])
            });
            this.f.forEach(function (a) {
                if (Math.max(a.source[0][0], a.source[1][0], a.source[2][0]) - n > this.b / 2) {
                    var b = [[a.source[0][0], a.source[0][1]], [a.source[1][0], a.source[1][1]], [a.source[2][0], a.source[2][1]]];
                    b[0][0] - n > this.b / 2 && (b[0][0] -= this.b);
                    b[1][0] - n > this.b / 2 && (b[1][0] -= this.b);
                    b[2][0] - n > this.b / 2 && (b[2][0] -= this.b);
                    Math.max(b[0][0], b[1][0], b[2][0]) - Math.min(b[0][0], b[1][0], b[2][0]) < this.b / 2 && (a.source = b)
                }
            }, this)
        }
        f = {}
    }

    function xk(a, b, c, d, e, f, g, h, l, m) {
        var n = Kb([f, g, h, l]), p = a.b ? ic(n) / a.b : null, q = a.g.a && .5 < p && 1 > p, r = !1;
        if (0 < m) {
            if (a.c.g && a.l)var u = Kb([b, c, d, e]), r = r | .25 < ic(u) / a.l;
            !q && a.g.g && p && (r |= .25 < p)
        }
        if (r || !a.i || nc(n, a.i)) {
            if (!(r || isFinite(f[0]) && isFinite(f[1]) && isFinite(g[0]) && isFinite(g[1]) && isFinite(h[0]) && isFinite(h[1]) && isFinite(l[0]) && isFinite(l[1])))if (0 < m)r = !0; else return;
            if (0 < m && (r || (p = a.a([(b[0] + d[0]) / 2, (b[1] + d[1]) / 2]), n = q ? (xa(f[0], a.b) + xa(h[0], a.b)) / 2 - xa(p[0], a.b) : (f[0] + h[0]) / 2 - p[0], p = (f[1] + h[1]) / 2 - p[1],
                    r = n * n + p * p > a.s), r)) {
                Math.abs(b[0] - d[0]) <= Math.abs(b[1] - d[1]) ? (q = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2], n = a.a(q), p = [(e[0] + b[0]) / 2, (e[1] + b[1]) / 2], r = a.a(p), xk(a, b, c, q, p, f, g, n, r, m - 1), xk(a, p, q, d, e, r, n, h, l, m - 1)) : (q = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2], n = a.a(q), p = [(d[0] + e[0]) / 2, (d[1] + e[1]) / 2], r = a.a(p), xk(a, b, q, p, e, f, n, r, l, m - 1), xk(a, q, c, d, p, n, g, h, r, m - 1));
                return
            }
            if (q) {
                if (!a.j)return;
                a.o = !0
            }
            a.f.push({source: [f, h, l], target: [b, d, e]});
            a.f.push({source: [f, g, h], target: [b, c, d]})
        }
    }

    function yk(a) {
        var b = Lb();
        a.f.forEach(function (a) {
            a = a.source;
            Mb(b, a[0]);
            Mb(b, a[1]);
            Mb(b, a[2])
        });
        return b
    }

    function zk(a, b, c, d, e, f) {
        this.v = b;
        this.s = a.H();
        var g = b.H(), h = g ? mc(c, g) : c, g = tk(a, b, kc(h), d);
        this.o = new wk(a, b, h, this.s, .5 * g);
        this.c = d;
        this.g = c;
        a = yk(this.o);
        this.j = (this.ob = f(a, g, e)) ? this.ob.f : 1;
        this.Ad = this.i = null;
        e = 2;
        f = [];
        this.ob && (e = 0, f = this.ob.l);
        oh.call(this, c, d, this.j, e, f)
    }

    y(zk, oh);
    zk.prototype.ka = function () {
        1 == this.state && (Ka(this.Ad), this.Ad = null);
        oh.prototype.ka.call(this)
    };
    zk.prototype.a = function () {
        return this.i
    };
    zk.prototype.zd = function () {
        var a = this.ob.V();
        2 == a && (this.i = vk(ic(this.g) / this.c, jc(this.g) / this.c, this.j, this.ob.$(), 0, this.c, this.g, this.o, [{
            extent: this.ob.H(),
            image: this.ob.a()
        }], 0));
        this.state = a;
        ph(this)
    };
    zk.prototype.load = function () {
        if (0 == this.state) {
            this.state = 1;
            ph(this);
            var a = this.ob.V();
            2 == a || 3 == a ? this.zd() : (this.Ad = B(this.ob, "change", function () {
                var a = this.ob.V();
                if (2 == a || 3 == a)Ka(this.Ad), this.Ad = null, this.zd()
            }, this), this.ob.load())
        }
    };
    function Ak(a) {
        jf.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state
        });
        this.C = void 0 !== a.resolutions ? a.resolutions : null;
        this.a = null;
        this.qa = 0
    }

    y(Ak, jf);
    function Bk(a, b) {
        if (a.C) {
            var c = kb(a.C, b, 0);
            b = a.C[c]
        }
        return b
    }

    Ak.prototype.A = function (a, b, c, d) {
        var e = this.f;
        if (e && d && !Oc(e, d)) {
            if (this.a) {
                if (this.qa == this.g && Oc(this.a.v, d) && this.a.$() == b && this.a.f == c && $b(this.a.H(), a))return this.a;
                Ta(this.a);
                this.a = null
            }
            this.a = new zk(e, d, a, b, c, function (a, b, c) {
                return this.Mc(a, b, c, e)
            }.bind(this));
            this.qa = this.g;
            return this.a
        }
        e && (d = e);
        return this.Mc(a, b, c, d)
    };
    Ak.prototype.o = function (a) {
        a = a.target;
        switch (a.V()) {
            case 1:
                this.b(new Ck(Dk, a));
                break;
            case 2:
                this.b(new Ck(Ek, a));
                break;
            case 3:
                this.b(new Ck(Fk, a))
        }
    };
    function Gk(a, b) {
        a.a().src = b
    }

    function Ck(a, b) {
        Wa.call(this, a);
        this.image = b
    }

    y(Ck, Wa);
    var Dk = "imageloadstart", Ek = "imageloadend", Fk = "imageloaderror";

    function Hk(a) {
        Ak.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions,
            state: a.state
        });
        this.ia = a.canvasFunction;
        this.T = null;
        this.Y = 0;
        this.ta = void 0 !== a.ratio ? a.ratio : 1.5
    }

    y(Hk, Ak);
    Hk.prototype.Mc = function (a, b, c, d) {
        b = Bk(this, b);
        var e = this.T;
        if (e && this.Y == this.g && e.$() == b && e.f == c && Ub(e.H(), a))return e;
        a = a.slice();
        oc(a, this.ta);
        (d = this.ia(a, b, c, [ic(a) / b * c, jc(a) / b * c], d)) && (e = new nk(a, b, c, this.l, d));
        this.T = e;
        this.Y = this.g;
        return e
    };
    function Ik(a) {
        eb.call(this);
        this.i = void 0;
        this.a = "geometry";
        this.c = null;
        this.l = void 0;
        this.f = null;
        B(this, gb(this.a), this.be, this);
        void 0 !== a && (a instanceof Tc || !a ? this.Ua(a) : this.G(a))
    }

    y(Ik, eb);
    k = Ik.prototype;
    k.clone = function () {
        var a = new Ik(this.O());
        a.Ec(this.a);
        var b = this.W();
        b && a.Ua(b.clone());
        (b = this.c) && a.sf(b);
        return a
    };
    k.W = function () {
        return this.get(this.a)
    };
    k.Xa = function () {
        return this.i
    };
    k.$j = function () {
        return this.a
    };
    k.Jl = function () {
        return this.c
    };
    k.ec = function () {
        return this.l
    };
    k.Kl = function () {
        this.u()
    };
    k.be = function () {
        this.f && (Ka(this.f), this.f = null);
        var a = this.W();
        a && (this.f = B(a, "change", this.Kl, this));
        this.u()
    };
    k.Ua = function (a) {
        this.set(this.a, a)
    };
    k.sf = function (a) {
        this.l = (this.c = a) ? Jk(a) : void 0;
        this.u()
    };
    k.mc = function (a) {
        this.i = a;
        this.u()
    };
    k.Ec = function (a) {
        Qa(this, gb(this.a), this.be, this);
        this.a = a;
        B(this, gb(this.a), this.be, this);
        this.be()
    };
    function Jk(a) {
        if ("function" !== typeof a) {
            var b;
            b = Array.isArray(a) ? a : [a];
            a = function () {
                return b
            }
        }
        return a
    }

    function Kk(a, b, c, d, e) {
        df.call(this, a, b);
        this.g = Oe();
        this.l = d;
        this.c = null;
        this.f = {gd: !1, Tf: null, bi: -1, Uf: -1, yd: null, ui: []};
        this.v = e;
        this.j = c
    }

    y(Kk, df);
    k = Kk.prototype;
    k.$a = function () {
        return -1 == this.f.Uf ? null : this.g.canvas
    };
    k.Ul = function () {
        return this.l
    };
    k.ib = function () {
        return this.j
    };
    k.load = function () {
        0 == this.state && (this.state = 1, ef(this), this.v(this, this.j), this.s(null, NaN, null))
    };
    k.gi = function (a) {
        this.c = a;
        this.state = 2;
        ef(this)
    };
    k.vf = function (a) {
        this.o = a
    };
    k.ki = function (a) {
        this.s = a
    };
    var Lk = document.implementation.createDocument("", "", null);

    function Mk(a, b) {
        return Lk.createElementNS(a, b)
    }

    function Nk(a, b) {
        return Ok(a, b, []).join("")
    }

    function Ok(a, b, c) {
        if (a.nodeType == Node.CDATA_SECTION_NODE || a.nodeType == Node.TEXT_NODE)b ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue); else for (a = a.firstChild; a; a = a.nextSibling)Ok(a, b, c);
        return c
    }

    function Pk(a) {
        return a instanceof Document
    }

    function Qk(a) {
        return a instanceof Node
    }

    function Rk(a) {
        return (new DOMParser).parseFromString(a, "application/xml")
    }

    function Sk(a, b) {
        return function (c, d) {
            var e = a.call(b, c, d);
            void 0 !== e && mb(d[d.length - 1], e)
        }
    }

    function Tk(a, b) {
        return function (c, d) {
            var e = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== e && d[d.length - 1].push(e)
        }
    }

    function Uk(a, b) {
        return function (c, d) {
            var e = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== e && (d[d.length - 1] = e)
        }
    }

    function Vk(a) {
        return function (b, c) {
            var d = a.call(this, b, c);
            if (void 0 !== d) {
                var e = c[c.length - 1], f = b.localName, g;
                f in e ? g = e[f] : g = e[f] = [];
                g.push(d)
            }
        }
    }

    function J(a, b) {
        return function (c, d) {
            var e = a.call(this, c, d);
            void 0 !== e && (d[d.length - 1][void 0 !== b ? b : c.localName] = e)
        }
    }

    function L(a, b) {
        return function (c, d, e) {
            a.call(void 0 !== b ? b : this, c, d, e);
            e[e.length - 1].node.appendChild(c)
        }
    }

    function Wk(a) {
        var b, c;
        return function (d, e, f) {
            if (!b) {
                b = {};
                var g = {};
                g[d.localName] = a;
                b[d.namespaceURI] = g;
                c = Xk(d.localName)
            }
            Yk(b, c, e, f)
        }
    }

    function Xk(a, b) {
        return function (c, d, e) {
            c = d[d.length - 1].node;
            d = a;
            void 0 === d && (d = e);
            e = b;
            void 0 === b && (e = c.namespaceURI);
            return Mk(e, d)
        }
    }

    var Zk = Xk();

    function $k(a, b) {
        for (var c = b.length, d = Array(c), e = 0; e < c; ++e)d[e] = a[b[e]];
        return d
    }

    function M(a, b, c) {
        c = void 0 !== c ? c : {};
        var d, e;
        d = 0;
        for (e = a.length; d < e; ++d)c[a[d]] = b;
        return c
    }

    function al(a, b, c, d) {
        for (b = b.firstElementChild; b; b = b.nextElementSibling) {
            var e = a[b.namespaceURI];
            void 0 !== e && (e = e[b.localName]) && e.call(d, b, c)
        }
    }

    function O(a, b, c, d, e) {
        d.push(a);
        al(b, c, d, e);
        return d.pop()
    }

    function Yk(a, b, c, d, e, f) {
        for (var g = (void 0 !== e ? e : c).length, h, l, m = 0; m < g; ++m)h = c[m], void 0 !== h && (l = b.call(f, h, d, void 0 !== e ? e[m] : void 0), void 0 !== l && a[l.namespaceURI][l.localName].call(f, l, h, d))
    }

    function bl(a, b, c, d, e, f, g) {
        e.push(a);
        Yk(b, c, d, e, f, g);
        e.pop()
    }

    function cl(a, b, c, d) {
        return function (e, f, g) {
            var h = new XMLHttpRequest;
            h.open("GET", "function" === typeof a ? a(e, f, g) : a, !0);
            "arraybuffer" == b.X() && (h.responseType = "arraybuffer");
            h.onload = function () {
                if (200 <= h.status && 300 > h.status) {
                    var a = b.X(), e;
                    "json" == a || "text" == a ? e = h.responseText : "xml" == a ? (e = h.responseXML) || (e = Rk(h.responseText)) : "arraybuffer" == a && (e = h.response);
                    e && c.call(this, b.Fa(e, {featureProjection: g}), b.Oa(e))
                } else d.call(this)
            }.bind(this);
            h.send()
        }
    }

    function dl(a, b) {
        return cl(a, b, function (a, b) {
            this.vf(b);
            this.gi(a)
        }, function () {
            this.state = 3;
            ef(this)
        })
    }

    function el(a, b) {
        return cl(a, b, function (a) {
            this.Jc(a)
        }, na)
    }

    function fl() {
        return [[-Infinity, -Infinity, Infinity, Infinity]]
    }

    var gl, hl, il, jl;
    (function () {
        var a = {}, b = {ja: a};
        (function (c) {
            if ("object" === typeof a && "undefined" !== typeof b)b.ja = c(); else {
                var d;
                "undefined" !== typeof window ? d = window : "undefined" !== typeof global ? d = global : "undefined" !== typeof self ? d = self : d = this;
                d.Tp = c()
            }
        })(function () {
            return function d(a, b, g) {
                function h(m, p) {
                    if (!b[m]) {
                        if (!a[m]) {
                            var q = "function" == typeof require && require;
                            if (!p && q)return q(m, !0);
                            if (l)return l(m, !0);
                            q = Error("Cannot find module '" + m + "'");
                            throw q.code = "MODULE_NOT_FOUND", q;
                        }
                        q = b[m] = {ja: {}};
                        a[m][0].call(q.ja, function (b) {
                            var d =
                                a[m][1][b];
                            return h(d ? d : b)
                        }, q, q.ja, d, a, b, g)
                    }
                    return b[m].ja
                }

                for (var l = "function" == typeof require && require, m = 0; m < g.length; m++)h(g[m]);
                return h
            }({
                1: [function (a, b) {
                    function f(a, b) {
                        if (!(this instanceof f))return new f(a, b);
                        this.Te = Math.max(4, a || 9);
                        this.hg = Math.max(2, Math.ceil(.4 * this.Te));
                        b && this.mj(b);
                        this.clear()
                    }

                    function g(a, b) {
                        h(a, 0, a.children.length, b, a)
                    }

                    function h(a, b, d, e, f) {
                        f || (f = x(null));
                        f.ca = Infinity;
                        f.fa = Infinity;
                        f.ea = -Infinity;
                        f.ga = -Infinity;
                        for (var g; b < d; b++)g = a.children[b], l(f, a.Ta ? e(g) : g);
                        return f
                    }

                    function l(a, b) {
                        a.ca = Math.min(a.ca, b.ca);
                        a.fa = Math.min(a.fa, b.fa);
                        a.ea = Math.max(a.ea, b.ea);
                        a.ga = Math.max(a.ga, b.ga)
                    }

                    function m(a, b) {
                        return a.ca - b.ca
                    }

                    function n(a, b) {
                        return a.fa - b.fa
                    }

                    function p(a) {
                        return (a.ea - a.ca) * (a.ga - a.fa)
                    }

                    function q(a) {
                        return a.ea - a.ca + (a.ga - a.fa)
                    }

                    function r(a, b) {
                        return a.ca <= b.ca && a.fa <= b.fa && b.ea <= a.ea && b.ga <= a.ga
                    }

                    function u(a, b) {
                        return b.ca <= a.ea && b.fa <= a.ga && b.ea >= a.ca && b.ga >= a.fa
                    }

                    function x(a) {
                        return {
                            children: a, height: 1, Ta: !0, ca: Infinity, fa: Infinity, ea: -Infinity,
                            ga: -Infinity
                        }
                    }

                    function v(a, b, d, e, f) {
                        for (var g = [b, d], h; g.length;)d = g.pop(), b = g.pop(), d - b <= e || (h = b + Math.ceil((d - b) / e / 2) * e, D(a, h, b, d, f), g.push(b, h, h, d))
                    }

                    b.ja = f;
                    var D = a("quickselect");
                    f.prototype = {
                        all: function () {
                            return this.cg(this.data, [])
                        }, search: function (a) {
                            var b = this.data, d = [], e = this.lb;
                            if (!u(a, b))return d;
                            for (var f = [], g, h, l, m; b;) {
                                g = 0;
                                for (h = b.children.length; g < h; g++)l = b.children[g], m = b.Ta ? e(l) : l, u(a, m) && (b.Ta ? d.push(l) : r(a, m) ? this.cg(l, d) : f.push(l));
                                b = f.pop()
                            }
                            return d
                        }, load: function (a) {
                            if (!a || !a.length)return this;
                            if (a.length < this.hg) {
                                for (var b = 0, d = a.length; b < d; b++)this.Ca(a[b]);
                                return this
                            }
                            a = this.eg(a.slice(), 0, a.length - 1, 0);
                            this.data.children.length ? this.data.height === a.height ? this.jg(this.data, a) : (this.data.height < a.height && (b = this.data, this.data = a, a = b), this.gg(a, this.data.height - a.height - 1, !0)) : this.data = a;
                            return this
                        }, Ca: function (a) {
                            a && this.gg(a, this.data.height - 1);
                            return this
                        }, clear: function () {
                            this.data = x([]);
                            return this
                        }, remove: function (a, b) {
                            if (!a)return this;
                            for (var d = this.data, e = this.lb(a), f = [], g =
                                [], h, l, m, n; d || f.length;) {
                                d || (d = f.pop(), l = f[f.length - 1], h = g.pop(), n = !0);
                                if (d.Ta) {
                                    a:{
                                        m = a;
                                        var p = d.children, q = b;
                                        if (q) {
                                            for (var u = 0; u < p.length; u++)if (q(m, p[u])) {
                                                m = u;
                                                break a
                                            }
                                            m = -1
                                        } else m = p.indexOf(m)
                                    }
                                    if (-1 !== m) {
                                        d.children.splice(m, 1);
                                        f.push(d);
                                        this.kj(f);
                                        break
                                    }
                                }
                                n || d.Ta || !r(d, e) ? l ? (h++, d = l.children[h], n = !1) : d = null : (f.push(d), g.push(h), h = 0, l = d, d = d.children[0])
                            }
                            return this
                        }, lb: function (a) {
                            return a
                        }, Ve: m, We: n, toJSON: function () {
                            return this.data
                        }, cg: function (a, b) {
                            for (var d = []; a;)a.Ta ? b.push.apply(b, a.children) :
                                d.push.apply(d, a.children), a = d.pop();
                            return b
                        }, eg: function (a, b, d, e) {
                            var f = d - b + 1, h = this.Te, l;
                            if (f <= h)return l = x(a.slice(b, d + 1)), g(l, this.lb), l;
                            e || (e = Math.ceil(Math.log(f) / Math.log(h)), h = Math.ceil(f / Math.pow(h, e - 1)));
                            l = x([]);
                            l.Ta = !1;
                            l.height = e;
                            var f = Math.ceil(f / h), h = f * Math.ceil(Math.sqrt(h)), m, n, p;
                            for (v(a, b, d, h, this.Ve); b <= d; b += h)for (n = Math.min(b + h - 1, d), v(a, b, n, f, this.We), m = b; m <= n; m += f)p = Math.min(m + f - 1, n), l.children.push(this.eg(a, m, p, e - 1));
                            g(l, this.lb);
                            return l
                        }, jj: function (a, b, d, e) {
                            for (var f, g, h,
                                     l, m, n, q, r; ;) {
                                e.push(b);
                                if (b.Ta || e.length - 1 === d)break;
                                q = r = Infinity;
                                f = 0;
                                for (g = b.children.length; f < g; f++)h = b.children[f], m = p(h), n = (Math.max(h.ea, a.ea) - Math.min(h.ca, a.ca)) * (Math.max(h.ga, a.ga) - Math.min(h.fa, a.fa)) - m, n < r ? (r = n, q = m < q ? m : q, l = h) : n === r && m < q && (q = m, l = h);
                                b = l || b.children[0]
                            }
                            return b
                        }, gg: function (a, b, d) {
                            var e = this.lb;
                            d = d ? a : e(a);
                            var e = [], f = this.jj(d, this.data, b, e);
                            f.children.push(a);
                            for (l(f, d); 0 <= b;)if (e[b].children.length > this.Te)this.sj(e, b), b--; else break;
                            this.gj(d, e, b)
                        }, sj: function (a, b) {
                            var d =
                                a[b], e = d.children.length, f = this.hg;
                            this.hj(d, f, e);
                            e = this.ij(d, f, e);
                            e = x(d.children.splice(e, d.children.length - e));
                            e.height = d.height;
                            e.Ta = d.Ta;
                            g(d, this.lb);
                            g(e, this.lb);
                            b ? a[b - 1].children.push(e) : this.jg(d, e)
                        }, jg: function (a, b) {
                            this.data = x([a, b]);
                            this.data.height = a.height + 1;
                            this.data.Ta = !1;
                            g(this.data, this.lb)
                        }, ij: function (a, b, d) {
                            var e, f, g, l, m, n, q;
                            m = n = Infinity;
                            for (e = b; e <= d - b; e++)f = h(a, 0, e, this.lb), g = h(a, e, d, this.lb), l = Math.max(0, Math.min(f.ea, g.ea) - Math.max(f.ca, g.ca)) * Math.max(0, Math.min(f.ga, g.ga) -
                                    Math.max(f.fa, g.fa)), f = p(f) + p(g), l < m ? (m = l, q = e, n = f < n ? f : n) : l === m && f < n && (n = f, q = e);
                            return q
                        }, hj: function (a, b, d) {
                            var e = a.Ta ? this.Ve : m, f = a.Ta ? this.We : n, g = this.dg(a, b, d, e);
                            b = this.dg(a, b, d, f);
                            g < b && a.children.sort(e)
                        }, dg: function (a, b, d, e) {
                            a.children.sort(e);
                            e = this.lb;
                            var f = h(a, 0, b, e), g = h(a, d - b, d, e), m = q(f) + q(g), n, p;
                            for (n = b; n < d - b; n++)p = a.children[n], l(f, a.Ta ? e(p) : p), m += q(f);
                            for (n = d - b - 1; n >= b; n--)p = a.children[n], l(g, a.Ta ? e(p) : p), m += q(g);
                            return m
                        }, gj: function (a, b, d) {
                            for (; 0 <= d; d--)l(b[d], a)
                        }, kj: function (a) {
                            for (var b =
                                a.length - 1, d; 0 <= b; b--)0 === a[b].children.length ? 0 < b ? (d = a[b - 1].children, d.splice(d.indexOf(a[b]), 1)) : this.clear() : g(a[b], this.lb)
                        }, mj: function (a) {
                            var b = ["return a", " - b", ";"];
                            this.Ve = new Function("a", "b", b.join(a[0]));
                            this.We = new Function("a", "b", b.join(a[1]));
                            this.lb = new Function("a", "return {minX: a" + a[0] + ", minY: a" + a[1] + ", maxX: a" + a[2] + ", maxY: a" + a[3] + "};")
                        }
                    }
                }, {quickselect: 2}], 2: [function (a, b) {
                    function f(a, b, d, e, q) {
                        d = d || 0;
                        e = e || a.length - 1;
                        for (q = q || h; e > d;) {
                            if (600 < e - d) {
                                var r = e - d + 1, u = b - d + 1, x = Math.log(r),
                                    v = .5 * Math.exp(2 * x / 3), x = .5 * Math.sqrt(x * v * (r - v) / r) * (0 > u - r / 2 ? -1 : 1);
                                f(a, b, Math.max(d, Math.floor(b - u * v / r + x)), Math.min(e, Math.floor(b + (r - u) * v / r + x)), q)
                            }
                            r = a[b];
                            u = d;
                            v = e;
                            g(a, d, b);
                            for (0 < q(a[e], r) && g(a, d, e); u < v;) {
                                g(a, u, v);
                                u++;
                                for (v--; 0 > q(a[u], r);)u++;
                                for (; 0 < q(a[v], r);)v--
                            }
                            0 === q(a[d], r) ? g(a, d, v) : (v++, g(a, v, e));
                            v <= b && (d = v + 1);
                            b <= v && (e = v - 1)
                        }
                    }

                    function g(a, b, d) {
                        var e = a[b];
                        a[b] = a[d];
                        a[d] = e
                    }

                    function h(a, b) {
                        return a < b ? -1 : a > b ? 1 : 0
                    }

                    b.ja = f
                }, {}]
            }, {}, [1])(1)
        });
        gl = b.ja
    })();
    function kl(a) {
        this.a = gl(a);
        this.b = {}
    }

    k = kl.prototype;
    k.Ca = function (a, b) {
        var c = {ca: a[0], fa: a[1], ea: a[2], ga: a[3], value: b};
        this.a.Ca(c);
        this.b[w(b)] = c
    };
    k.load = function (a, b) {
        for (var c = Array(b.length), d = 0, e = b.length; d < e; d++) {
            var f = a[d], g = b[d], f = {ca: f[0], fa: f[1], ea: f[2], ga: f[3], value: g};
            c[d] = f;
            this.b[w(g)] = f
        }
        this.a.load(c)
    };
    k.remove = function (a) {
        a = w(a);
        var b = this.b[a];
        delete this.b[a];
        return null !== this.a.remove(b)
    };
    function ll(a, b, c) {
        var d = w(c), d = a.b[d];
        $b([d.ca, d.fa, d.ea, d.ga], b) || (a.remove(c), a.Ca(b, c))
    }

    function ml(a) {
        return a.a.all().map(function (a) {
            return a.value
        })
    }

    function nl(a, b) {
        return a.a.search({ca: b[0], fa: b[1], ea: b[2], ga: b[3]}).map(function (a) {
            return a.value
        })
    }

    k.forEach = function (a, b) {
        return pl(ml(this), a, b)
    };
    function ql(a, b, c, d) {
        return pl(nl(a, b), c, d)
    }

    function pl(a, b, c) {
        for (var d, e = 0, f = a.length; e < f && !(d = b.call(c, a[e])); e++);
        return d
    }

    k.Ya = function () {
        return Ha(this.b)
    };
    k.clear = function () {
        this.a.clear();
        this.b = {}
    };
    k.H = function () {
        var a = this.a.data;
        return [a.ca, a.fa, a.ea, a.ga]
    };
    function P(a) {
        a = a || {};
        jf.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: void 0,
            state: "ready",
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.S = na;
        this.qa = a.format;
        this.T = a.url;
        void 0 !== a.loader ? this.S = a.loader : void 0 !== this.T && (this.S = el(this.T, this.qa));
        this.qb = void 0 !== a.strategy ? a.strategy : fl;
        var b = void 0 !== a.useSpatialIndex ? a.useSpatialIndex : !0;
        this.a = b ? new kl : null;
        this.Y = new kl;
        this.i = {};
        this.o = {};
        this.j = {};
        this.s = {};
        this.c = null;
        var c, d;
        a.features instanceof le ? (c = a.features, d = c.a) : Array.isArray(a.features) &&
        (d = a.features);
        b || void 0 !== c || (c = new le(d));
        void 0 !== d && rl(this, d);
        void 0 !== c && sl(this, c)
    }

    y(P, jf);
    k = P.prototype;
    k.rb = function (a) {
        var b = w(a).toString();
        if (tl(this, b, a)) {
            ul(this, b, a);
            var c = a.W();
            c ? (b = c.H(), this.a && this.a.Ca(b, a)) : this.i[b] = a;
            this.b(new vl("addfeature", a))
        }
        this.u()
    };
    function ul(a, b, c) {
        a.s[b] = [B(c, "change", a.Eh, a), B(c, "propertychange", a.Eh, a)]
    }

    function tl(a, b, c) {
        var d = !0, e = c.Xa();
        void 0 !== e ? e.toString() in a.o ? d = !1 : a.o[e.toString()] = c : a.j[b] = c;
        return d
    }

    k.Jc = function (a) {
        rl(this, a);
        this.u()
    };
    function rl(a, b) {
        var c, d, e, f, g = [], h = [], l = [];
        d = 0;
        for (e = b.length; d < e; d++)f = b[d], c = w(f).toString(), tl(a, c, f) && h.push(f);
        d = 0;
        for (e = h.length; d < e; d++) {
            f = h[d];
            c = w(f).toString();
            ul(a, c, f);
            var m = f.W();
            m ? (c = m.H(), g.push(c), l.push(f)) : a.i[c] = f
        }
        a.a && a.a.load(g, l);
        d = 0;
        for (e = h.length; d < e; d++)a.b(new vl("addfeature", h[d]))
    }

    function sl(a, b) {
        var c = !1;
        B(a, "addfeature", function (a) {
            c || (c = !0, b.push(a.feature), c = !1)
        });
        B(a, "removefeature", function (a) {
            c || (c = !0, b.remove(a.feature), c = !1)
        });
        B(b, "add", function (a) {
            c || (a = a.element, c = !0, this.rb(a), c = !1)
        }, a);
        B(b, "remove", function (a) {
            c || (a = a.element, c = !0, this.nb(a), c = !1)
        }, a);
        a.c = b
    }

    k.clear = function (a) {
        if (a) {
            for (var b in this.s)this.s[b].forEach(Ka);
            this.c || (this.s = {}, this.o = {}, this.j = {})
        } else if (this.a) {
            this.a.forEach(this.Sf, this);
            for (var c in this.i)this.Sf(this.i[c])
        }
        this.c && this.c.clear();
        this.a && this.a.clear();
        this.Y.clear();
        this.i = {};
        this.b(new vl("clear"));
        this.u()
    };
    k.wg = function (a, b) {
        if (this.a)return this.a.forEach(a, b);
        if (this.c)return this.c.forEach(a, b)
    };
    function wl(a, b, c) {
        a.ub([b[0], b[1], b[0], b[1]], function (a) {
            if (a.W().sg(b))return c.call(void 0, a)
        })
    }

    k.ub = function (a, b, c) {
        if (this.a)return ql(this.a, a, b, c);
        if (this.c)return this.c.forEach(b, c)
    };
    k.xg = function (a, b, c) {
        return this.ub(a, function (d) {
            if (d.W().Ka(a) && (d = b.call(c, d)))return d
        })
    };
    k.Fg = function () {
        return this.c
    };
    k.oe = function () {
        var a;
        this.c ? a = this.c.a : this.a && (a = ml(this.a), Ha(this.i) || mb(a, Ga(this.i)));
        return a
    };
    k.Eg = function (a) {
        var b = [];
        wl(this, a, function (a) {
            b.push(a)
        });
        return b
    };
    k.ef = function (a) {
        return nl(this.a, a)
    };
    k.Ag = function (a, b) {
        var c = a[0], d = a[1], e = null, f = [NaN, NaN], g = Infinity, h = [-Infinity, -Infinity, Infinity, Infinity], l = b ? b : qc;
        ql(this.a, h, function (a) {
            if (l(a)) {
                var b = a.W(), p = g;
                g = b.sb(c, d, f, g);
                g < p && (e = a, a = Math.sqrt(g), h[0] = c - a, h[1] = d - a, h[2] = c + a, h[3] = d + a)
            }
        });
        return e
    };
    k.H = function () {
        return this.a.H()
    };
    k.Dg = function (a) {
        a = this.o[a.toString()];
        return void 0 !== a ? a : null
    };
    k.Ch = function () {
        return this.qa
    };
    k.Dh = function () {
        return this.T
    };
    k.Eh = function (a) {
        a = a.target;
        var b = w(a).toString(), c = a.W();
        c ? (c = c.H(), b in this.i ? (delete this.i[b], this.a && this.a.Ca(c, a)) : this.a && ll(this.a, c, a)) : b in this.i || (this.a && this.a.remove(a), this.i[b] = a);
        c = a.Xa();
        void 0 !== c ? (c = c.toString(), b in this.j ? (delete this.j[b], this.o[c] = a) : this.o[c] !== a && (xl(this, a), this.o[c] = a)) : b in this.j || (xl(this, a), this.j[b] = a);
        this.u();
        this.b(new vl("changefeature", a))
    };
    k.Ya = function () {
        return this.a.Ya() && Ha(this.i)
    };
    k.Pc = function (a, b, c) {
        var d = this.Y;
        a = this.qb(a, b);
        var e, f;
        e = 0;
        for (f = a.length; e < f; ++e) {
            var g = a[e];
            ql(d, g, function (a) {
                return Ub(a.extent, g)
            }) || (this.S.call(this, g, b, c), d.Ca(g, {extent: g.slice()}))
        }
    };
    k.nb = function (a) {
        var b = w(a).toString();
        b in this.i ? delete this.i[b] : this.a && this.a.remove(a);
        this.Sf(a);
        this.u()
    };
    k.Sf = function (a) {
        var b = w(a).toString();
        this.s[b].forEach(Ka);
        delete this.s[b];
        var c = a.Xa();
        void 0 !== c ? delete this.o[c.toString()] : delete this.j[b];
        this.b(new vl("removefeature", a))
    };
    function xl(a, b) {
        for (var c in a.o)if (a.o[c] === b) {
            delete a.o[c];
            break
        }
    }

    function vl(a, b) {
        Wa.call(this, a);
        this.feature = b
    }

    y(vl, Wa);
    function yl(a) {
        this.c = a.source;
        this.Aa = Xc();
        this.i = Oe();
        this.j = [0, 0];
        this.v = null;
        Hk.call(this, {
            attributions: a.attributions,
            canvasFunction: this.Dj.bind(this),
            logo: a.logo,
            projection: a.projection,
            ratio: a.ratio,
            resolutions: a.resolutions,
            state: this.c.V()
        });
        this.S = null;
        this.s = void 0;
        this.xh(a.style);
        B(this.c, "change", this.en, this)
    }

    y(yl, Hk);
    k = yl.prototype;
    k.Dj = function (a, b, c, d, e) {
        var f = new dk(.5 * b / c, a, b);
        this.c.Pc(a, b, e);
        var g = !1;
        this.c.ub(a, function (a) {
            var d;
            if (!(d = g)) {
                var e;
                (d = a.ec()) ? e = d.call(a, b) : this.s && (e = this.s(a, b));
                if (e) {
                    var n, p = !1;
                    Array.isArray(e) || (e = [e]);
                    d = 0;
                    for (n = e.length; d < n; ++d)p = lk(f, a, e[d], jk(b, c), this.dn, this) || p;
                    d = p
                } else d = !1
            }
            g = d
        }, this);
        ek(f);
        if (g)return null;
        this.j[0] != d[0] || this.j[1] != d[1] ? (this.i.canvas.width = d[0], this.i.canvas.height = d[1], this.j[0] = d[0], this.j[1] = d[1]) : this.i.clearRect(0, 0, d[0], d[1]);
        a = zl(this, kc(a), b, c, d);
        f.Pa(this.i,
            c, a, 0, {});
        this.v = f;
        return this.i.canvas
    };
    k.ra = function (a, b, c, d, e) {
        if (this.v) {
            var f = {};
            return this.v.ra(a, b, 0, d, function (a) {
                var b = w(a).toString();
                if (!(b in f))return f[b] = !0, e(a)
            })
        }
    };
    k.an = function () {
        return this.c
    };
    k.bn = function () {
        return this.S
    };
    k.cn = function () {
        return this.s
    };
    function zl(a, b, c, d, e) {
        return qh(a.Aa, e[0] / 2, e[1] / 2, d / c, -d / c, 0, -b[0], -b[1])
    }

    k.dn = function () {
        this.u()
    };
    k.en = function () {
        lf(this, this.c.V())
    };
    k.xh = function (a) {
        this.S = void 0 !== a ? a : vj;
        this.s = a ? tj(this.S) : void 0;
        this.u()
    };
    function Al(a) {
        Jj.call(this, a);
        this.f = null;
        this.s = Xc();
        this.o = this.c = null
    }

    y(Al, Jj);
    Al.prototype.ra = function (a, b, c, d) {
        var e = this.a;
        return e.ha().ra(a, b.viewState.resolution, b.viewState.rotation, b.skippedFeatureUids, function (a) {
            return c.call(d, a, e)
        })
    };
    Al.prototype.Cc = function (a, b, c, d) {
        if (this.f && this.f.a())if (this.a.ha() instanceof yl) {
            if (a = a.slice(), sh(b.pixelToCoordinateMatrix, a, a), this.ra(a, b, qc, this))return c.call(d, this.a)
        } else if (this.c || (this.c = Xc(), cd(this.s, this.c)), b = [0, 0], sh(this.c, a, b), this.o || (this.o = Oe(1, 1)), this.o.clearRect(0, 0, 1, 1), this.o.drawImage(this.f ? this.f.a() : null, b[0], b[1], 1, 1, 0, 0, 1, 1), 0 < this.o.getImageData(0, 0, 1, 1).data[3])return c.call(d, this.a)
    };
    Al.prototype.l = function (a, b) {
        var c = a.pixelRatio, d = a.viewState, e = d.center, f = d.resolution, g = this.a.ha(), h = a.viewHints, l = a.extent;
        void 0 !== b.extent && (l = mc(l, b.extent));
        h[0] || h[1] || hc(l) || (d = g.A(l, f, c, d.projection)) && vh(this, d) && (this.f = d);
        if (this.f) {
            var d = this.f, h = d.H(), l = d.$(), m = d.f, f = c * l / (f * m);
            qh(this.s, c * a.size[0] / 2, c * a.size[1] / 2, f, f, 0, m * (h[0] - e[0]) / l, m * (e[1] - h[3]) / l);
            this.c = null;
            xh(a.attributions, d.l);
            yh(a, g)
        }
        return !!this.f
    };
    function Bl(a) {
        Jj.call(this, a);
        this.c = Oe();
        this.o = null;
        this.j = Lb();
        this.S = [0, 0, 0];
        this.D = Xc();
        this.C = 0
    }

    y(Bl, Jj);
    Bl.prototype.i = function (a, b, c) {
        var d = Mj(this, a, 0);
        Kj(this, "precompose", c, a, d);
        Cl(this, c, a, b);
        Lj(this, c, a, d)
    };
    Bl.prototype.l = function (a, b) {
        function c(a) {
            a = a.V();
            return 2 == a || 4 == a || 3 == a && !r
        }

        var d = a.pixelRatio, e = a.viewState, f = e.projection, g = this.a, h = g.ha(), l = h.eb(f), m = l.Lb(e.resolution, this.C), n = l.$(m), p = e.center;
        n == e.resolution ? (p = Ah(p, n, a.size), e = lc(p, n, e.rotation, a.size)) : e = a.extent;
        void 0 !== b.extent && (e = mc(e, b.extent));
        if (hc(e))return !1;
        n = sf(l, e, n);
        p = {};
        p[m] = {};
        var q = this.Qd(h, f, p), r = g.c(), u = Lb(), x = new fe(0, 0, 0, 0), v, D, A, z;
        for (A = n.ca; A <= n.ea; ++A)for (z = n.fa; z <= n.ga; ++z)v = h.ac(m, A, z, d, f), !c(v) && v.a && (v = v.a),
            c(v) ? p[m][v.ma.toString()] = v : (D = qf(l, v.ma, q, x, u), D || (v = rf(l, v.ma, x, u)) && q(m + 1, v));
        q = Object.keys(p).map(Number);
        q.sort(ib);
        var u = [], F, x = 0;
        for (A = q.length; x < A; ++x)for (F in v = q[x], z = p[v], z)v = z[F], 2 == v.V() && u.push(v);
        this.o = u;
        zh(a.usedTiles, h, m, n);
        Bh(a, h, l, d, f, e, m, g.f());
        wh(a, h);
        yh(a, h);
        return !0
    };
    Bl.prototype.Cc = function (a, b, c, d) {
        var e = this.c.canvas, f = b.size;
        e.width = f[0];
        e.height = f[1];
        this.i(b, jh(this.a), this.c);
        if (0 < this.c.getImageData(a[0], a[1], 1, 1).data[3])return c.call(d, this.a)
    };
    function Cl(a, b, c, d) {
        var e = c.pixelRatio, f = c.viewState, g = f.center, h = f.projection, l = f.resolution, f = f.rotation, m = c.size, n = Math.round(e * m[0] / 2), p = Math.round(e * m[1] / 2), m = e / l, q = a.a, r = q.ha(), u = r.Ud(h), x = r.eb(h), q = ab(q, "render"), v = b, D, A, z, F;
        if (f || q)v = a.c, D = v.canvas, F = x.Lb(l), z = r.$d(F, e, h), F = hf(x.Ja(F)), z = z[0] / F[0], l = b.canvas.width * z, A = b.canvas.height * z, F = Math.round(Math.sqrt(l * l + A * A)), D.width != F ? D.width = D.height = F : v.clearRect(0, 0, F, F), D = (F - l) / 2 / z, A = (F - A) / 2 / z, m *= z, n = Math.round(z * (n + D)), p = Math.round(z * (p + A));
        l = v.globalAlpha;
        v.globalAlpha = d.opacity;
        var N = a.o, K, X = r.jf(h) && 1 == d.opacity;
        X || (N.reverse(), K = []);
        var oa = d.extent;
        if (d = void 0 !== oa) {
            var H = fc(oa), ya = ec(oa), Ua = dc(oa), oa = cc(oa);
            sh(c.coordinateToPixelMatrix, H, H);
            sh(c.coordinateToPixelMatrix, ya, ya);
            sh(c.coordinateToPixelMatrix, Ua, Ua);
            sh(c.coordinateToPixelMatrix, oa, oa);
            var Xa = D || 0, Va = A || 0;
            v.save();
            var Aa = v.canvas.width * e / 2, Qb = v.canvas.height * e / 2;
            hj(v, -f, Aa, Qb);
            v.beginPath();
            v.moveTo(H[0] * e + Xa, H[1] * e + Va);
            v.lineTo(ya[0] * e + Xa, ya[1] * e + Va);
            v.lineTo(Ua[0] *
                e + Xa, Ua[1] * e + Va);
            v.lineTo(oa[0] * e + Xa, oa[1] * e + Va);
            v.clip();
            hj(v, f, Aa, Qb)
        }
        H = 0;
        for (ya = N.length; H < ya; ++H) {
            var Ua = N[H], oa = Ua.ma, Qb = x.Ea(oa, a.j), Aa = oa[0], Nb = cc(x.Ea(x.qd(g, Aa, a.S))), oa = Math.round(ic(Qb) * m), Xa = Math.round(jc(Qb) * m), Va = Math.round((Qb[0] - Nb[0]) * m / oa) * oa + n + Math.round((Nb[0] - g[0]) * m), Qb = Math.round((Nb[1] - Qb[3]) * m / Xa) * Xa + p + Math.round((g[1] - Nb[1]) * m);
            if (!X) {
                Nb = [Va, Qb, Va + oa, Qb + Xa];
                v.save();
                for (var kk = 0, vs = K.length; kk < vs; ++kk) {
                    var De = K[kk];
                    nc(Nb, De) && (v.beginPath(), v.moveTo(Nb[0], Nb[1]), v.lineTo(Nb[0],
                        Nb[3]), v.lineTo(Nb[2], Nb[3]), v.lineTo(Nb[2], Nb[1]), v.moveTo(De[0], De[1]), v.lineTo(De[2], De[1]), v.lineTo(De[2], De[3]), v.lineTo(De[0], De[3]), v.closePath(), v.clip())
                }
                K.push(Nb)
            }
            Aa = r.$d(Aa, e, h);
            v.drawImage(Ua.$a(), u, u, Aa[0], Aa[1], Va, Qb, oa, Xa);
            X || v.restore()
        }
        d && v.restore();
        q && (e = D - n / z + n, h = A - p / z + p, g = qh(a.D, F / 2 - e, F / 2 - h, m, -m, -f, -g[0] + e / m, -g[1] - h / m), Kj(a, "render", v, c, g));
        (f || q) && b.drawImage(v.canvas, -Math.round(D), -Math.round(A), F / z, F / z);
        v.globalAlpha = l
    }

    function Dl(a) {
        Jj.call(this, a);
        this.c = !1;
        this.C = -1;
        this.A = NaN;
        this.v = Lb();
        this.o = this.U = null;
        this.j = Oe()
    }

    y(Dl, Jj);
    Dl.prototype.i = function (a, b, c) {
        var d = a.extent, e = a.pixelRatio, f = b.Qc ? a.skippedFeatureUids : {}, g = a.viewState, h = g.projection, g = g.rotation, l = h.H(), m = this.a.ha(), n = Mj(this, a, 0);
        Kj(this, "precompose", c, a, n);
        var p = this.o;
        if (p && !p.Ya()) {
            var q;
            ab(this.a, "render") ? (this.j.canvas.width = c.canvas.width, this.j.canvas.height = c.canvas.height, q = this.j) : q = c;
            var r = q.globalAlpha;
            q.globalAlpha = b.opacity;
            b = a.size[0] * e;
            var u = a.size[1] * e;
            hj(q, -g, b / 2, u / 2);
            p.Pa(q, e, n, g, f);
            if (m.D && h.a && !Ub(l, d)) {
                for (var h = d[0], m = ic(l), x = 0; h <
                l[0];)--x, n = m * x, n = Mj(this, a, n), p.Pa(q, e, n, g, f), h += m;
                x = 0;
                for (h = d[2]; h > l[2];)++x, n = m * x, n = Mj(this, a, n), p.Pa(q, e, n, g, f), h -= m;
                n = Mj(this, a, 0)
            }
            hj(q, g, b / 2, u / 2);
            q != c && (Kj(this, "render", q, a, n), c.drawImage(q.canvas, 0, 0));
            q.globalAlpha = r
        }
        Lj(this, c, a, n)
    };
    Dl.prototype.ra = function (a, b, c, d) {
        if (this.o) {
            var e = this.a, f = {};
            return this.o.ra(a, b.viewState.resolution, b.viewState.rotation, {}, function (a) {
                var b = w(a).toString();
                if (!(b in f))return f[b] = !0, c.call(d, a, e)
            })
        }
    };
    Dl.prototype.D = function () {
        uh(this)
    };
    Dl.prototype.l = function (a) {
        function b(a) {
            var b, d = a.ec();
            d ? b = d.call(a, m) : (d = c.i) && (b = d(a, m));
            if (b) {
                if (b) {
                    d = !1;
                    if (Array.isArray(b))for (var e = 0, f = b.length; e < f; ++e)d = lk(q, a, b[e], jk(m, n), this.D, this) || d; else d = lk(q, a, b, jk(m, n), this.D, this) || d;
                    a = d
                } else a = !1;
                this.c = this.c || a
            }
        }

        var c = this.a, d = c.ha();
        xh(a.attributions, d.l);
        yh(a, d);
        var e = a.viewHints[0], f = a.viewHints[1], g = c.S, h = c.T;
        if (!this.c && !g && e || !h && f)return !0;
        var l = a.extent, h = a.viewState, e = h.projection, m = h.resolution, n = a.pixelRatio, f = c.g, p = c.a, g = xj(c);
        void 0 === g && (g = ik);
        l = Ob(l, p * m);
        p = h.projection.H();
        d.D && h.projection.a && !Ub(p, a.extent) && (a = Math.max(ic(l) / 2, ic(p)), l[0] = p[0] - a, l[2] = p[2] + a);
        if (!this.c && this.A == m && this.C == f && this.U == g && Ub(this.v, l))return !0;
        this.o = null;
        this.c = !1;
        var q = new dk(.5 * m / n, l, m, c.a);
        d.Pc(l, m, e);
        if (g) {
            var r = [];
            d.ub(l, function (a) {
                r.push(a)
            }, this);
            r.sort(g);
            r.forEach(b, this)
        } else d.ub(l, b, this);
        ek(q);
        this.A = m;
        this.C = f;
        this.U = g;
        this.v = l;
        this.o = q;
        return !0
    };
    function El(a, b) {
        var c = /\{z\}/g, d = /\{x\}/g, e = /\{y\}/g, f = /\{-y\}/g;
        return function (g) {
            if (g)return a.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, function () {
                return (-g[2] - 1).toString()
            }).replace(f, function () {
                var a = b.a ? b.a[g[0]] : null;
                return (a.ga - a.fa + 1 + g[2]).toString()
            })
        }
    }

    function Fl(a, b) {
        for (var c = a.length, d = Array(c), e = 0; e < c; ++e)d[e] = El(a[e], b);
        return Gl(d)
    }

    function Gl(a) {
        return 1 === a.length ? a[0] : function (b, c, d) {
            if (b)return a[xa((b[1] << b[0]) + b[2], a.length)](b, c, d)
        }
    }

    function Hl() {
    }

    function Il(a) {
        var b = [], c = /\{(\d)-(\d)\}/.exec(a) || /\{([a-z])-([a-z])\}/.exec(a);
        if (c) {
            var d = c[2].charCodeAt(0), e;
            for (e = c[1].charCodeAt(0); e <= d; ++e)b.push(a.replace(c[0], String.fromCharCode(e)))
        } else b.push(a);
        return b
    }

    function Jl(a) {
        zf.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tilePixelRatio: a.tilePixelRatio,
            wrapX: a.wrapX
        });
        this.tileLoadFunction = a.tileLoadFunction;
        this.tileUrlFunction = this.vc ? this.vc.bind(this) : Hl;
        this.urls = null;
        a.urls ? this.bb(a.urls) : a.url && this.Va(a.url);
        a.tileUrlFunction && this.Qa(a.tileUrlFunction)
    }

    y(Jl, zf);
    k = Jl.prototype;
    k.fb = function () {
        return this.tileLoadFunction
    };
    k.gb = function () {
        return this.tileUrlFunction
    };
    k.hb = function () {
        return this.urls
    };
    k.Bh = function (a) {
        a = a.target;
        switch (a.V()) {
            case 1:
                this.b(new Df("tileloadstart", a));
                break;
            case 2:
                this.b(new Df("tileloadend", a));
                break;
            case 3:
                this.b(new Df("tileloaderror", a))
        }
    };
    k.kb = function (a) {
        this.a.clear();
        this.tileLoadFunction = a;
        this.u()
    };
    k.Qa = function (a, b) {
        this.tileUrlFunction = a;
        "undefined" !== typeof b ? Bf(this, b) : this.u()
    };
    k.Va = function (a) {
        var b = this.urls = Il(a);
        this.Qa(this.vc ? this.vc.bind(this) : Fl(b, this.tileGrid), a)
    };
    k.bb = function (a) {
        this.urls = a;
        var b = a.join("\n");
        this.Qa(this.vc ? this.vc.bind(this) : Fl(a, this.tileGrid), b)
    };
    k.Yf = function (a, b, c) {
        a = this.Eb(a, b, c);
        Ze(this.a, a) && this.a.get(a)
    };
    function Kl(a) {
        Jl.call(this, {
            attributions: a.attributions,
            cacheSize: void 0 !== a.cacheSize ? a.cacheSize : 128,
            extent: a.extent,
            logo: a.logo,
            opaque: !1,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : Ll,
            tileUrlFunction: a.tileUrlFunction,
            tilePixelRatio: a.tilePixelRatio,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 === a.wrapX ? !0 : a.wrapX
        });
        this.c = a.format ? a.format : null;
        this.tileClass = a.tileClass ? a.tileClass : Kk
    }

    y(Kl, Jl);
    Kl.prototype.ac = function (a, b, c, d, e) {
        var f = this.Eb(a, b, c);
        if (Ze(this.a, f))return this.a.get(f);
        a = [a, b, c];
        d = (b = Cf(this, a, e)) ? this.tileUrlFunction(b, d, e) : void 0;
        d = new this.tileClass(a, void 0 !== d ? 0 : 4, void 0 !== d ? d : "", this.c, this.tileLoadFunction);
        B(d, "change", this.Bh, this);
        this.a.set(f, d);
        return d
    };
    Kl.prototype.$d = function (a, b) {
        var c = hf(this.tileGrid.Ja(a));
        return [c[0] * b, c[1] * b]
    };
    function Ll(a, b) {
        a.ki(dl(b, a.l))
    }

    var Ml = {image: Nj, hybrid: ["Polygon", "LineString"]}, Nl = {hybrid: ["Image", "Text"], vector: Nj};

    function Ol(a) {
        Bl.call(this, a);
        this.U = !1;
        this.v = Xc();
        this.C = "vector" == a.s ? 1 : 0
    }

    y(Ol, Bl);
    Ol.prototype.i = function (a, b, c) {
        var d = Mj(this, a, 0);
        Kj(this, "precompose", c, a, d);
        var e = this.a.s;
        "vector" !== e && Cl(this, c, a, b);
        if ("image" !== e) {
            var f = this.a, e = Nl[f.s], g = a.pixelRatio, h = b.Qc ? a.skippedFeatureUids : {}, l = a.viewState, m = l.center, n = l.rotation, p = a.size, l = g / l.resolution, q = f.ha(), r = q.bc(g), u = Mj(this, a, 0);
            ab(f, "render") ? (this.c.canvas.width = c.canvas.width, this.c.canvas.height = c.canvas.height, f = this.c) : f = c;
            var x = f.globalAlpha;
            f.globalAlpha = b.opacity;
            b = this.o;
            var q = q.tileGrid, v, D, A, z, F, N, K, X;
            D = 0;
            for (A =
                     b.length; D < A; ++D)z = b[D], K = z.f, F = q.Ea(z.ma, this.j), v = z.ma[0], N = "tile-pixels" == z.o.wb(), v = q.$(v), X = v / r, v = Math.round(g * p[0] / 2), z = Math.round(g * p[1] / 2), N ? (F = fc(F), F = qh(this.v, v, z, l * X, l * X, n, (F[0] - m[0]) / X, (m[1] - F[1]) / X)) : F = u, hj(f, -n, v, z), K.yd.Pa(f, g, F, n, h, e), hj(f, n, v, z);
            f != c && (Kj(this, "render", f, a, u), c.drawImage(f.canvas, 0, 0));
            f.globalAlpha = x
        }
        Lj(this, c, a, d)
    };
    function Pl(a, b, c) {
        function d(a) {
            var b, c = a.ec();
            c ? b = c.call(a, u) : (c = e.i) && (b = c(a, u));
            if (b) {
                Array.isArray(b) || (b = [b]);
                var c = D, d = v;
                if (b) {
                    var f = !1;
                    if (Array.isArray(b))for (var g = 0, h = b.length; g < h; ++g)f = lk(d, a, b[g], c, this.A, this) || f; else f = lk(d, a, b, c, this.A, this) || f;
                    a = f
                } else a = !1;
                this.U = this.U || a;
                l.gd = l.gd || a
            }
        }

        var e = a.a, f = c.pixelRatio;
        c = c.viewState.projection;
        var g = e.g, h = xj(e) || null, l = b.f;
        if (l.gd || l.bi != g || l.Tf != h) {
            l.yd = null;
            l.gd = !1;
            var m = e.ha(), n = m.tileGrid, p = b.ma, q = b.o, r = "tile-pixels" == q.wb(), u = n.$(p[0]),
                x;
            r ? (r = m = m.bc(f), n = hf(n.Ja(p[0])), n = [0, 0, n[0] * r, n[1] * r]) : (m = u, n = n.Ea(p), Oc(c, q) || (x = !0, b.vf(c)));
            l.gd = !1;
            var v = new dk(0, n, m, e.a), D = jk(m, f);
            b = b.c;
            h && h !== l.Tf && b.sort(h);
            n = 0;
            for (p = b.length; n < p; ++n)f = b[n], x && f.W().jb(q, c), d.call(a, f);
            ek(v);
            l.bi = g;
            l.Tf = h;
            l.yd = v;
            l.resolution = NaN
        }
    }

    Ol.prototype.ra = function (a, b, c, d) {
        var e = b.pixelRatio, f = b.viewState.resolution;
        b = b.viewState.rotation;
        var g = this.a, h = {}, l = this.o, m = g.ha(), n = m.tileGrid, p, q, r, u, x, v;
        r = 0;
        for (u = l.length; r < u; ++r)v = l[r], q = v.ma, x = m.tileGrid.Ea(q, this.j), Sb(x, a) && ("tile-pixels" === v.o.wb() ? (x = fc(x), f = m.bc(e), q = n.$(q[0]) / f, q = [(a[0] - x[0]) / q, (x[1] - a[1]) / q]) : q = a, v = v.f.yd, p = p || v.ra(q, f, b, {}, function (a) {
                var b = w(a).toString();
                if (!(b in h))return h[b] = !0, c.call(d, a, g)
            }));
        return p
    };
    Ol.prototype.A = function () {
        uh(this)
    };
    Ol.prototype.l = function (a, b) {
        var c = Bl.prototype.l.call(this, a, b);
        if (c)for (var d = Object.keys(a.Ee || {}), e = 0, f = this.o.length; e < f; ++e) {
            var g = this.o[e];
            Pl(this, g, a);
            var h = g, g = a, l = this.a, m = Ml[l.s];
            if (m) {
                var n = g.pixelRatio, p = h.f, q = l.g;
                if (!pb(p.ui, d) || p.Uf !== q) {
                    p.ui = d;
                    p.Uf = q;
                    var q = h.g, r = l.ha(), u = r.tileGrid, x = h.ma[0], v = u.$(x), l = hf(u.Ja(x)), x = u.$(x), D = x / v, A = l[0] * n * D, z = l[1] * n * D;
                    q.canvas.width = A / D + .5;
                    q.canvas.height = z / D + .5;
                    q.scale(1 / D, 1 / D);
                    q.translate(A / 2, z / 2);
                    D = "tile-pixels" == h.o.wb();
                    v = n / v;
                    r = r.bc(n);
                    x /= r;
                    h =
                        u.Ea(h.ma, this.j);
                    D ? h = qh(this.v, 0, 0, v * x, v * x, 0, -l[0] * r / 2, -l[1] * r / 2) : (h = kc(h), h = qh(this.v, 0, 0, v, -v, 0, -h[0], -h[1]));
                    p.yd.Pa(q, n, h, 0, g.skippedFeatureUids || {}, m)
                }
            }
        }
        return c
    };
    function Ql(a, b) {
        Hh.call(this, 0, b);
        this.f = Oe();
        this.b = this.f.canvas;
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.className = "ol-unselectable";
        a.insertBefore(this.b, a.childNodes[0] || null);
        this.a = !0;
        this.c = Xc()
    }

    y(Ql, Hh);
    Ql.prototype.Xe = function (a) {
        return a instanceof cj ? new Al(a) : a instanceof dj ? new Bl(a) : a instanceof I ? new Ol(a) : a instanceof G ? new Dl(a) : null
    };
    function Rl(a, b, c) {
        var d = a.i, e = a.f;
        if (ab(d, b)) {
            var f = c.extent, g = c.pixelRatio, h = c.viewState.rotation, l = c.pixelRatio, m = c.viewState, n = m.resolution;
            a = qh(a.c, a.b.width / 2, a.b.height / 2, l / n, -l / n, -m.rotation, -m.center[0], -m.center[1]);
            f = new yj(e, g, f, a, h);
            d.b(new lh(b, d, f, c, e, null))
        }
    }

    Ql.prototype.X = function () {
        return "canvas"
    };
    Ql.prototype.Ce = function (a) {
        if (a) {
            var b = this.f, c = a.pixelRatio, d = Math.round(a.size[0] * c), c = Math.round(a.size[1] * c);
            this.b.width != d || this.b.height != c ? (this.b.width = d, this.b.height = c) : b.clearRect(0, 0, d, c);
            var e = a.viewState.rotation;
            Ih(a);
            Rl(this, "precompose", a);
            var f = a.layerStatesArray;
            qb(f);
            hj(b, e, d / 2, c / 2);
            var g = a.viewState.resolution, h, l, m, n;
            h = 0;
            for (l = f.length; h < l; ++h)n = f[h], m = n.layer, m = Kh(this, m), nh(n, g) && "ready" == n.R && m.l(a, n) && m.i(a, n, b);
            hj(b, -e, d / 2, c / 2);
            Rl(this, "postcompose", a);
            this.a || (this.b.style.display =
                "", this.a = !0);
            Lh(this, a);
            a.postRenderFunctions.push(Jh)
        } else this.a && (this.b.style.display = "none", this.a = !1)
    };
    function Sl(a, b) {
        th.call(this, a);
        this.target = b
    }

    y(Sl, th);
    Sl.prototype.Nd = na;
    Sl.prototype.th = na;
    function Tl(a) {
        var b = document.createElement("DIV");
        b.style.position = "absolute";
        Sl.call(this, a, b);
        this.f = null;
        this.c = Zc()
    }

    y(Tl, Sl);
    Tl.prototype.ra = function (a, b, c, d) {
        var e = this.a;
        return e.ha().ra(a, b.viewState.resolution, b.viewState.rotation, b.skippedFeatureUids, function (a) {
            return c.call(d, a, e)
        })
    };
    Tl.prototype.Nd = function () {
        Ve(this.target);
        this.f = null
    };
    Tl.prototype.yf = function (a, b) {
        var c = a.viewState, d = c.center, e = c.resolution, f = c.rotation, g = this.f, h = this.a.ha(), l = a.viewHints, m = a.extent;
        void 0 !== b.extent && (m = mc(m, b.extent));
        l[0] || l[1] || hc(m) || (c = h.A(m, e, a.pixelRatio, c.projection)) && vh(this, c) && (g = c);
        g && (l = g.H(), m = g.$(), c = Xc(), qh(c, a.size[0] / 2, a.size[1] / 2, m / e, m / e, f, (l[0] - d[0]) / m, (d[1] - l[3]) / m), g != this.f && (d = g.a(this), d.style.maxWidth = "none", d.style.position = "absolute", Ve(this.target), this.target.appendChild(d), this.f = g), rh(c, this.c) || (Se(this.target,
            c), $c(this.c, c)), xh(a.attributions, g.l), yh(a, h));
        return !0
    };
    function Ul(a) {
        var b = document.createElement("DIV");
        b.style.position = "absolute";
        Sl.call(this, a, b);
        this.c = !0;
        this.l = 1;
        this.i = 0;
        this.f = {}
    }

    y(Ul, Sl);
    Ul.prototype.Nd = function () {
        Ve(this.target);
        this.i = 0
    };
    Ul.prototype.yf = function (a, b) {
        if (!b.visible)return this.c && (this.target.style.display = "none", this.c = !1), !0;
        var c = a.pixelRatio, d = a.viewState, e = d.projection, f = this.a, g = f.ha(), h = g.eb(e), l = g.Ud(e), m = h.Lb(d.resolution), n = h.$(m), p = d.center, q;
        n == d.resolution ? (p = Ah(p, n, a.size), q = lc(p, n, d.rotation, a.size)) : q = a.extent;
        void 0 !== b.extent && (q = mc(q, b.extent));
        var n = sf(h, q, n), r = {};
        r[m] = {};
        var u = this.Qd(g, e, r), x = f.c(), v = Lb(), D = new fe(0, 0, 0, 0), A, z, F, N;
        for (F = n.ca; F <= n.ea; ++F)for (N = n.fa; N <= n.ga; ++N)A = g.ac(m, F, N, c, e),
            z = A.V(), z = 2 == z || 4 == z || 3 == z && !x, !z && A.a && (A = A.a), z = A.V(), 2 == z ? r[m][A.ma.toString()] = A : 4 == z || 3 == z && !x || (z = qf(h, A.ma, u, D, v), z || (A = rf(h, A.ma, D, v)) && u(m + 1, A));
        var K;
        if (this.i != g.g) {
            for (K in this.f)x = this.f[+K], Ue(x.target);
            this.f = {};
            this.i = g.g
        }
        v = Object.keys(r).map(Number);
        v.sort(ib);
        var u = {}, X;
        F = 0;
        for (N = v.length; F < N; ++F) {
            K = v[F];
            K in this.f ? x = this.f[K] : (x = h.qd(p, K), x = new Vl(h, x), u[K] = !0, this.f[K] = x);
            K = r[K];
            for (X in K) {
                A = x;
                z = K[X];
                var oa = l, H = z.ma, ya = H[0], Ua = H[1], Xa = H[2], H = H.toString();
                if (!(H in A.a)) {
                    var ya =
                        hf(A.c.Ja(ya), A.o), Va = z.$a(A), Aa = Va.style;
                    Aa.maxWidth = "none";
                    var Qb, Nb;
                    0 < oa ? (Qb = document.createElement("DIV"), Nb = Qb.style, Nb.overflow = "hidden", Nb.width = ya[0] + "px", Nb.height = ya[1] + "px", Aa.position = "absolute", Aa.left = -oa + "px", Aa.top = -oa + "px", Aa.width = ya[0] + 2 * oa + "px", Aa.height = ya[1] + 2 * oa + "px", Qb.appendChild(Va)) : (Aa.width = ya[0] + "px", Aa.height = ya[1] + "px", Qb = Va, Nb = Aa);
                    Nb.position = "absolute";
                    Nb.left = (Ua - A.g[1]) * ya[0] + "px";
                    Nb.top = (A.g[2] - Xa) * ya[1] + "px";
                    A.b || (A.b = document.createDocumentFragment());
                    A.b.appendChild(Qb);
                    A.a[H] = z
                }
            }
            x.b && (x.target.appendChild(x.b), x.b = null)
        }
        l = Object.keys(this.f).map(Number);
        l.sort(ib);
        F = Xc();
        X = 0;
        for (v = l.length; X < v; ++X)if (K = l[X], x = this.f[K], K in r)if (A = x.$(), N = x.Ia(), qh(F, a.size[0] / 2, a.size[1] / 2, A / d.resolution, A / d.resolution, d.rotation, (N[0] - p[0]) / A, (p[1] - N[1]) / A), x.setTransform(F), K in u) {
            for (--K; 0 <= K; --K)if (K in this.f) {
                this.f[K].target.parentNode && this.f[K].target.parentNode.insertBefore(x.target, this.f[K].target.nextSibling);
                break
            }
            0 > K && this.target.insertBefore(x.target, this.target.childNodes[0] ||
                null)
        } else {
            if (!a.viewHints[0] && !a.viewHints[1]) {
                z = pf(x.c, q, x.g[0], D);
                K = [];
                A = void 0;
                for (A in x.a)N = x.a[A], z.contains(N.ma) || K.push(N);
                z = 0;
                for (oa = K.length; z < oa; ++z)N = K[z], A = N.ma.toString(), Ue(N.$a(x)), delete x.a[A]
            }
        } else Ue(x.target), delete this.f[K];
        b.opacity != this.l && (this.l = this.target.style.opacity = b.opacity);
        b.visible && !this.c && (this.target.style.display = "", this.c = !0);
        zh(a.usedTiles, g, m, n);
        Bh(a, g, h, c, e, q, m, f.f());
        wh(a, g);
        yh(a, g);
        return !0
    };
    function Vl(a, b) {
        this.target = document.createElement("DIV");
        this.target.style.position = "absolute";
        this.target.style.width = "100%";
        this.target.style.height = "100%";
        this.c = a;
        this.g = b;
        this.i = fc(a.Ea(b));
        this.l = a.$(b[0]);
        this.a = {};
        this.b = null;
        this.f = Zc();
        this.o = [0, 0]
    }

    Vl.prototype.Ia = function () {
        return this.i
    };
    Vl.prototype.$ = function () {
        return this.l
    };
    Vl.prototype.setTransform = function (a) {
        rh(a, this.f) || (Se(this.target, a), $c(this.f, a))
    };
    function Wl(a) {
        this.i = Oe();
        var b = this.i.canvas;
        b.style.maxWidth = "none";
        b.style.position = "absolute";
        Sl.call(this, a, b);
        this.f = !1;
        this.l = -1;
        this.s = NaN;
        this.o = Lb();
        this.c = this.j = null;
        this.U = Xc();
        this.v = Xc()
    }

    y(Wl, Sl);
    k = Wl.prototype;
    k.Nd = function () {
        var a = this.i.canvas;
        a.width = a.width;
        this.l = 0
    };
    k.th = function (a, b) {
        var c = a.viewState, d = c.center, e = c.rotation, f = c.resolution, c = a.pixelRatio, g = a.size[0], h = a.size[1], l = g * c, m = h * c, d = qh(this.U, c * g / 2, c * h / 2, c / f, -c / f, -e, -d[0], -d[1]), f = this.i;
        f.canvas.width = l;
        f.canvas.height = m;
        g = qh(this.v, 0, 0, 1 / c, 1 / c, 0, -(l - g) / 2 * c, -(m - h) / 2 * c);
        Se(f.canvas, g);
        Xl(this, "precompose", a, d);
        (g = this.c) && !g.Ya() && (f.globalAlpha = b.opacity, g.Pa(f, c, d, e, b.Qc ? a.skippedFeatureUids : {}), Xl(this, "render", a, d));
        Xl(this, "postcompose", a, d)
    };
    function Xl(a, b, c, d) {
        var e = a.i;
        a = a.a;
        ab(a, b) && (d = new yj(e, c.pixelRatio, c.extent, d, c.viewState.rotation), a.b(new lh(b, a, d, c, e, null)))
    }

    k.ra = function (a, b, c, d) {
        if (this.c) {
            var e = this.a, f = {};
            return this.c.ra(a, b.viewState.resolution, b.viewState.rotation, {}, function (a) {
                var b = w(a).toString();
                if (!(b in f))return f[b] = !0, c.call(d, a, e)
            })
        }
    };
    k.uh = function () {
        uh(this)
    };
    k.yf = function (a) {
        function b(a) {
            var b, d = a.ec();
            d ? b = d.call(a, l) : (d = c.i) && (b = d(a, l));
            if (b) {
                if (b) {
                    d = !1;
                    if (Array.isArray(b))for (var e = 0, f = b.length; e < f; ++e)d = lk(n, a, b[e], jk(l, m), this.uh, this) || d; else d = lk(n, a, b, jk(l, m), this.uh, this) || d;
                    a = d
                } else a = !1;
                this.f = this.f || a
            }
        }

        var c = this.a, d = c.ha();
        xh(a.attributions, d.l);
        yh(a, d);
        var e = a.viewHints[0], f = a.viewHints[1], g = c.S, h = c.T;
        if (!this.f && !g && e || !h && f)return !0;
        var f = a.extent, g = a.viewState, e = g.projection, l = g.resolution, m = a.pixelRatio;
        a = c.g;
        h = c.a;
        g = xj(c);
        void 0 ===
        g && (g = ik);
        f = Ob(f, h * l);
        if (!this.f && this.s == l && this.l == a && this.j == g && Ub(this.o, f))return !0;
        this.c = null;
        this.f = !1;
        var n = new dk(.5 * l / m, f, l, c.a);
        d.Pc(f, l, e);
        if (g) {
            var p = [];
            d.ub(f, function (a) {
                p.push(a)
            }, this);
            p.sort(g);
            p.forEach(b, this)
        } else d.ub(f, b, this);
        ek(n);
        this.s = l;
        this.l = a;
        this.j = g;
        this.o = f;
        this.c = n;
        return !0
    };
    function Yl(a, b) {
        Hh.call(this, 0, b);
        this.f = Oe();
        var c = this.f.canvas;
        c.style.position = "absolute";
        c.style.width = "100%";
        c.style.height = "100%";
        c.className = "ol-unselectable";
        a.insertBefore(c, a.childNodes[0] || null);
        this.c = Xc();
        this.b = document.createElement("DIV");
        this.b.className = "ol-unselectable";
        c = this.b.style;
        c.position = "absolute";
        c.width = "100%";
        c.height = "100%";
        B(this.b, "touchstart", Za);
        a.insertBefore(this.b, a.childNodes[0] || null);
        this.a = !0
    }

    y(Yl, Hh);
    Yl.prototype.ka = function () {
        Ue(this.b);
        Hh.prototype.ka.call(this)
    };
    Yl.prototype.Xe = function (a) {
        if (a instanceof cj)a = new Tl(a); else if (a instanceof dj)a = new Ul(a); else if (a instanceof G)a = new Wl(a); else return null;
        return a
    };
    function Zl(a, b, c) {
        var d = a.i;
        if (ab(d, b)) {
            var e = c.extent, f = c.pixelRatio, g = c.viewState, h = g.rotation, l = a.f, m = l.canvas;
            qh(a.c, m.width / 2, m.height / 2, f / g.resolution, -f / g.resolution, -g.rotation, -g.center[0], -g.center[1]);
            a = new yj(l, f, e, a.c, h);
            d.b(new lh(b, d, a, c, l, null))
        }
    }

    Yl.prototype.X = function () {
        return "dom"
    };
    Yl.prototype.Ce = function (a) {
        if (a) {
            var b = this.i;
            if (ab(b, "precompose") || ab(b, "postcompose")) {
                var b = this.f.canvas, c = a.pixelRatio;
                b.width = a.size[0] * c;
                b.height = a.size[1] * c
            }
            Zl(this, "precompose", a);
            b = a.layerStatesArray;
            qb(b);
            var c = a.viewState.resolution, d, e, f, g;
            d = 0;
            for (e = b.length; d < e; ++d)g = b[d], f = g.layer, f = Kh(this, f), this.b.insertBefore(f.target, this.b.childNodes[d] || null), nh(g, c) && "ready" == g.R ? f.yf(a, g) && f.th(a, g) : f.Nd();
            var b = a.layerStates, h;
            for (h in this.g)h in b || (f = this.g[h], Ue(f.target));
            this.a || (this.b.style.display =
                "", this.a = !0);
            Ih(a);
            Lh(this, a);
            a.postRenderFunctions.push(Jh);
            Zl(this, "postcompose", a)
        } else this.a && (this.b.style.display = "none", this.a = !1)
    };
    function $l(a) {
        this.b = a
    }

    function am(a) {
        this.b = a
    }

    y(am, $l);
    am.prototype.X = function () {
        return 35632
    };
    function bm(a) {
        this.b = a
    }

    y(bm, $l);
    bm.prototype.X = function () {
        return 35633
    };
    function cm() {
        this.b = "precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }

    y(cm, am);
    ba(cm);
    function dm() {
        this.b = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"
    }

    y(dm, bm);
    ba(dm);
    function em(a, b) {
        this.o = a.getUniformLocation(b, "j");
        this.j = a.getUniformLocation(b, "i");
        this.i = a.getUniformLocation(b, "k");
        this.l = a.getUniformLocation(b, "h");
        this.b = a.getAttribLocation(b, "e");
        this.a = a.getAttribLocation(b, "f");
        this.f = a.getAttribLocation(b, "c");
        this.g = a.getAttribLocation(b, "g");
        this.c = a.getAttribLocation(b, "d")
    }

    function fm(a) {
        this.b = void 0 !== a ? a : []
    }

    function gm(a, b) {
        this.l = a;
        this.b = b;
        this.a = {};
        this.c = {};
        this.f = {};
        this.j = this.s = this.i = this.o = null;
        (this.g = jb(ma, "OES_element_index_uint")) && b.getExtension("OES_element_index_uint");
        B(this.l, "webglcontextlost", this.ao, this);
        B(this.l, "webglcontextrestored", this.bo, this)
    }

    y(gm, Sa);
    function hm(a, b, c) {
        var d = a.b, e = c.b, f = String(w(c));
        if (f in a.a)d.bindBuffer(b, a.a[f].buffer); else {
            var g = d.createBuffer();
            d.bindBuffer(b, g);
            var h;
            34962 == b ? h = new Float32Array(e) : 34963 == b && (h = a.g ? new Uint32Array(e) : new Uint16Array(e));
            d.bufferData(b, h, 35044);
            a.a[f] = {Cb: c, buffer: g}
        }
    }

    function im(a, b) {
        var c = a.b, d = String(w(b)), e = a.a[d];
        c.isContextLost() || c.deleteBuffer(e.buffer);
        delete a.a[d]
    }

    k = gm.prototype;
    k.ka = function () {
        Ra(this.l);
        var a = this.b;
        if (!a.isContextLost()) {
            for (var b in this.a)a.deleteBuffer(this.a[b].buffer);
            for (b in this.f)a.deleteProgram(this.f[b]);
            for (b in this.c)a.deleteShader(this.c[b]);
            a.deleteFramebuffer(this.i);
            a.deleteRenderbuffer(this.j);
            a.deleteTexture(this.s)
        }
    };
    k.$n = function () {
        return this.b
    };
    function jm(a) {
        if (!a.i) {
            var b = a.b, c = b.createFramebuffer();
            b.bindFramebuffer(b.FRAMEBUFFER, c);
            var d = km(b, 1, 1), e = b.createRenderbuffer();
            b.bindRenderbuffer(b.RENDERBUFFER, e);
            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, 1, 1);
            b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, d, 0);
            b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, e);
            b.bindTexture(b.TEXTURE_2D, null);
            b.bindRenderbuffer(b.RENDERBUFFER, null);
            b.bindFramebuffer(b.FRAMEBUFFER, null);
            a.i = c;
            a.s = d;
            a.j = e
        }
        return a.i
    }

    function lm(a, b) {
        var c = String(w(b));
        if (c in a.c)return a.c[c];
        var d = a.b, e = d.createShader(b.X());
        d.shaderSource(e, b.b);
        d.compileShader(e);
        return a.c[c] = e
    }

    function mm(a, b, c) {
        var d = w(b) + "/" + w(c);
        if (d in a.f)return a.f[d];
        var e = a.b, f = e.createProgram();
        e.attachShader(f, lm(a, b));
        e.attachShader(f, lm(a, c));
        e.linkProgram(f);
        return a.f[d] = f
    }

    k.ao = function () {
        Fa(this.a);
        Fa(this.c);
        Fa(this.f);
        this.j = this.s = this.i = this.o = null
    };
    k.bo = function () {
    };
    k.we = function (a) {
        if (a == this.o)return !1;
        this.b.useProgram(a);
        this.o = a;
        return !0
    };
    function nm(a, b, c) {
        var d = a.createTexture();
        a.bindTexture(a.TEXTURE_2D, d);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
        void 0 !== b && a.texParameteri(3553, 10242, b);
        void 0 !== c && a.texParameteri(3553, 10243, c);
        return d
    }

    function km(a, b, c) {
        var d = nm(a, void 0, void 0);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, b, c, 0, a.RGBA, a.UNSIGNED_BYTE, null);
        return d
    }

    function om(a, b) {
        var c = nm(a, 33071, 33071);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b);
        return c
    }

    function pm(a, b) {
        this.C = this.A = void 0;
        this.j = kc(b);
        this.U = [];
        this.i = [];
        this.R = void 0;
        this.c = [];
        this.f = [];
        this.Ba = this.ya = void 0;
        this.a = [];
        this.D = this.o = null;
        this.S = void 0;
        this.ta = Zc();
        this.Aa = Zc();
        this.Y = this.T = void 0;
        this.Sa = Zc();
        this.za = this.ia = this.Ra = void 0;
        this.Gb = [];
        this.l = [];
        this.b = [];
        this.v = null;
        this.g = [];
        this.s = [];
        this.qa = void 0
    }

    y(pm, kh);
    function qm(a, b) {
        var c = a.v, d = a.o, e = a.Gb, f = a.l, g = b.b;
        return function () {
            if (!g.isContextLost()) {
                var a, l;
                a = 0;
                for (l = e.length; a < l; ++a)g.deleteTexture(e[a]);
                a = 0;
                for (l = f.length; a < l; ++a)g.deleteTexture(f[a])
            }
            im(b, c);
            im(b, d)
        }
    }

    function rm(a, b, c, d) {
        var e = a.A, f = a.C, g = a.R, h = a.ya, l = a.Ba, m = a.S, n = a.T, p = a.Y, q = a.Ra ? 1 : 0, r = a.ia, u = a.za, x = a.qa, v = Math.cos(r), r = Math.sin(r), D = a.a.length, A = a.b.length, z, F, N, K, X, oa;
        for (z = 0; z < c; z += d)X = b[z] - a.j[0], oa = b[z + 1] - a.j[1], F = A / 8, N = -u * e, K = -u * (g - f), a.b[A++] = X, a.b[A++] = oa, a.b[A++] = N * v - K * r, a.b[A++] = N * r + K * v, a.b[A++] = n / l, a.b[A++] = (p + g) / h, a.b[A++] = m, a.b[A++] = q, N = u * (x - e), K = -u * (g - f), a.b[A++] = X, a.b[A++] = oa, a.b[A++] = N * v - K * r, a.b[A++] = N * r + K * v, a.b[A++] = (n + x) / l, a.b[A++] = (p + g) / h, a.b[A++] = m, a.b[A++] = q, N = u * (x - e), K =
            u * f, a.b[A++] = X, a.b[A++] = oa, a.b[A++] = N * v - K * r, a.b[A++] = N * r + K * v, a.b[A++] = (n + x) / l, a.b[A++] = p / h, a.b[A++] = m, a.b[A++] = q, N = -u * e, K = u * f, a.b[A++] = X, a.b[A++] = oa, a.b[A++] = N * v - K * r, a.b[A++] = N * r + K * v, a.b[A++] = n / l, a.b[A++] = p / h, a.b[A++] = m, a.b[A++] = q, a.a[D++] = F, a.a[D++] = F + 1, a.a[D++] = F + 2, a.a[D++] = F, a.a[D++] = F + 2, a.a[D++] = F + 3
    }

    pm.prototype.tc = function (a, b) {
        this.g.push(this.a.length);
        this.s.push(b);
        var c = a.la();
        rm(this, c, c.length, a.va())
    };
    pm.prototype.uc = function (a, b) {
        this.g.push(this.a.length);
        this.s.push(b);
        var c = a.la();
        rm(this, c, c.length, a.va())
    };
    function sm(a, b) {
        var c = b.b;
        a.U.push(a.a.length);
        a.i.push(a.a.length);
        a.v = new fm(a.b);
        hm(b, 34962, a.v);
        a.o = new fm(a.a);
        hm(b, 34963, a.o);
        var d = {};
        tm(a.Gb, a.c, d, c);
        tm(a.l, a.f, d, c);
        a.A = void 0;
        a.C = void 0;
        a.R = void 0;
        a.c = null;
        a.f = null;
        a.ya = void 0;
        a.Ba = void 0;
        a.a = null;
        a.S = void 0;
        a.T = void 0;
        a.Y = void 0;
        a.Ra = void 0;
        a.ia = void 0;
        a.za = void 0;
        a.b = null;
        a.qa = void 0
    }

    function tm(a, b, c, d) {
        var e, f, g, h = b.length;
        for (g = 0; g < h; ++g)e = b[g], f = w(e).toString(), f in c ? e = c[f] : (e = om(d, e), c[f] = e), a[g] = e
    }

    pm.prototype.Pa = function (a, b, c, d, e, f, g, h, l, m, n) {
        f = a.b;
        hm(a, 34962, this.v);
        hm(a, 34963, this.o);
        var p = cm.Zb(), q = dm.Zb(), q = mm(a, p, q);
        this.D ? p = this.D : this.D = p = new em(f, q);
        a.we(q);
        f.enableVertexAttribArray(p.f);
        f.vertexAttribPointer(p.f, 2, 5126, !1, 32, 0);
        f.enableVertexAttribArray(p.b);
        f.vertexAttribPointer(p.b, 2, 5126, !1, 32, 8);
        f.enableVertexAttribArray(p.c);
        f.vertexAttribPointer(p.c, 2, 5126, !1, 32, 16);
        f.enableVertexAttribArray(p.a);
        f.vertexAttribPointer(p.a, 1, 5126, !1, 32, 24);
        f.enableVertexAttribArray(p.g);
        f.vertexAttribPointer(p.g,
            1, 5126, !1, 32, 28);
        q = this.Sa;
        qh(q, 0, 0, 2 / (c * e[0]), 2 / (c * e[1]), -d, -(b[0] - this.j[0]), -(b[1] - this.j[1]));
        b = this.Aa;
        c = 2 / e[0];
        e = 2 / e[1];
        ad(b);
        b[0] = c;
        b[5] = e;
        b[10] = 1;
        b[15] = 1;
        e = this.ta;
        ad(e);
        0 !== d && fd(e, -d);
        f.uniformMatrix4fv(p.l, !1, q);
        f.uniformMatrix4fv(p.j, !1, b);
        f.uniformMatrix4fv(p.o, !1, e);
        f.uniform1f(p.i, g);
        var r;
        if (void 0 === l)um(this, f, a, h, this.Gb, this.U); else {
            if (m)a:{
                d = a.g ? 5125 : 5123;
                a = a.g ? 4 : 2;
                e = this.g.length - 1;
                for (g = this.l.length - 1; 0 <= g; --g)for (f.bindTexture(3553, this.l[g]), m = 0 < g ? this.i[g - 1] : 0, b = this.i[g]; 0 <=
                e && this.g[e] >= m;) {
                    r = this.g[e];
                    c = this.s[e];
                    q = w(c).toString();
                    if (void 0 === h[q] && c.W() && (void 0 === n || nc(n, c.W().H())) && (f.clear(f.COLOR_BUFFER_BIT | f.DEPTH_BUFFER_BIT), f.drawElements(4, b - r, d, r * a), b = l(c))) {
                        h = b;
                        break a
                    }
                    b = r;
                    e--
                }
                h = void 0
            } else f.clear(f.COLOR_BUFFER_BIT | f.DEPTH_BUFFER_BIT), um(this, f, a, h, this.l, this.i), h = (h = l(null)) ? h : void 0;
            r = h
        }
        f.disableVertexAttribArray(p.f);
        f.disableVertexAttribArray(p.b);
        f.disableVertexAttribArray(p.c);
        f.disableVertexAttribArray(p.a);
        f.disableVertexAttribArray(p.g);
        return r
    };
    function um(a, b, c, d, e, f) {
        var g = c.g ? 5125 : 5123;
        c = c.g ? 4 : 2;
        if (Ha(d)) {
            var h;
            a = 0;
            d = e.length;
            for (h = 0; a < d; ++a) {
                b.bindTexture(3553, e[a]);
                var l = f[a];
                b.drawElements(4, l - h, g, h * c);
                h = l
            }
        } else {
            h = 0;
            var m, l = 0;
            for (m = e.length; l < m; ++l) {
                b.bindTexture(3553, e[l]);
                for (var n = 0 < l ? f[l - 1] : 0, p = f[l], q = n; h < a.g.length && a.g[h] <= p;) {
                    var r = w(a.s[h]).toString();
                    void 0 !== d[r] ? (q !== n && b.drawElements(4, n - q, g, q * c), n = q = h === a.g.length - 1 ? p : a.g[h + 1]) : n = h === a.g.length - 1 ? p : a.g[h + 1];
                    h++
                }
                q !== n && b.drawElements(4, n - q, g, q * c)
            }
        }
    }

    pm.prototype.Tb = function (a) {
        var b = a.Yb(), c = a.jc(1), d = a.ld(), e = a.pe(1), f = a.v, g = a.Ia(), h = a.U, l = a.j, m = a.Fb();
        a = a.i;
        var n;
        0 === this.c.length ? this.c.push(c) : (n = this.c[this.c.length - 1], w(n) != w(c) && (this.U.push(this.a.length), this.c.push(c)));
        0 === this.f.length ? this.f.push(e) : (n = this.f[this.f.length - 1], w(n) != w(e) && (this.i.push(this.a.length), this.f.push(e)));
        this.A = b[0];
        this.C = b[1];
        this.R = m[1];
        this.ya = d[1];
        this.Ba = d[0];
        this.S = f;
        this.T = g[0];
        this.Y = g[1];
        this.ia = l;
        this.Ra = h;
        this.za = a;
        this.qa = m[0]
    };
    function vm(a, b, c) {
        this.f = b;
        this.c = a;
        this.g = c;
        this.a = {}
    }

    function wm(a, b) {
        var c = [], d;
        for (d in a.a)c.push(qm(a.a[d], b));
        return function () {
            for (var a = c.length, b, d = 0; d < a; d++)b = c[d].apply(this, arguments);
            return b
        }
    }

    function xm(a, b) {
        for (var c in a.a)sm(a.a[c], b)
    }

    vm.prototype.b = function (a, b) {
        var c = this.a[b];
        void 0 === c && (c = new ym[b](this.c, this.f), this.a[b] = c);
        return c
    };
    vm.prototype.Ya = function () {
        return Ha(this.a)
    };
    vm.prototype.Pa = function (a, b, c, d, e, f, g, h) {
        var l, m, n;
        l = 0;
        for (m = Nj.length; l < m; ++l)n = this.a[Nj[l]], void 0 !== n && n.Pa(a, b, c, d, e, f, g, h, void 0, !1)
    };
    function zm(a, b, c, d, e, f, g, h, l, m, n) {
        var p = Am, q, r;
        for (q = Nj.length - 1; 0 <= q; --q)if (r = a.a[Nj[q]], void 0 !== r && (r = r.Pa(b, c, d, e, p, f, g, h, l, m, n)))return r
    }

    vm.prototype.ra = function (a, b, c, d, e, f, g, h, l, m) {
        var n = b.b;
        n.bindFramebuffer(n.FRAMEBUFFER, jm(b));
        var p;
        void 0 !== this.g && (p = Ob(Xb(a), d * this.g));
        return zm(this, b, a, d, e, g, h, l, function (a) {
            var b = new Uint8Array(4);
            n.readPixels(0, 0, 1, 1, n.RGBA, n.UNSIGNED_BYTE, b);
            if (0 < b[3] && (a = m(a)))return a
        }, !0, p)
    };
    function Bm(a, b, c, d, e, f, g, h) {
        var l = c.b;
        l.bindFramebuffer(l.FRAMEBUFFER, jm(c));
        return void 0 !== zm(a, c, b, d, e, f, g, h, function () {
                var a = new Uint8Array(4);
                l.readPixels(0, 0, 1, 1, l.RGBA, l.UNSIGNED_BYTE, a);
                return 0 < a[3]
            }, !1)
    }

    var ym = {Image: pm}, Am = [1, 1];

    function Cm(a, b, c, d, e, f, g) {
        this.b = a;
        this.f = b;
        this.g = f;
        this.c = g;
        this.o = e;
        this.l = d;
        this.i = c;
        this.a = null
    }

    y(Cm, kh);
    k = Cm.prototype;
    k.sd = function (a) {
        this.Tb(a.a)
    };
    k.sc = function (a) {
        switch (a.X()) {
            case "Point":
                this.uc(a, null);
                break;
            case "MultiPoint":
                this.tc(a, null);
                break;
            case "GeometryCollection":
                this.Ze(a, null)
        }
    };
    k.Ye = function (a, b) {
        var c = (0, b.g)(a);
        c && nc(this.g, c.H()) && (this.sd(b), this.sc(c))
    };
    k.Ze = function (a) {
        a = a.c;
        var b, c;
        b = 0;
        for (c = a.length; b < c; ++b)this.sc(a[b])
    };
    k.uc = function (a, b) {
        var c = this.b, d = (new vm(1, this.g)).b(0, "Image");
        d.Tb(this.a);
        d.uc(a, b);
        sm(d, c);
        d.Pa(this.b, this.f, this.i, this.l, this.o, this.c, 1, {}, void 0, !1);
        qm(d, c)()
    };
    k.tc = function (a, b) {
        var c = this.b, d = (new vm(1, this.g)).b(0, "Image");
        d.Tb(this.a);
        d.tc(a, b);
        sm(d, c);
        d.Pa(this.b, this.f, this.i, this.l, this.o, this.c, 1, {}, void 0, !1);
        qm(d, c)()
    };
    k.Tb = function (a) {
        this.a = a
    };
    function Dm() {
        this.b = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"
    }

    y(Dm, am);
    ba(Dm);
    function Em() {
        this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }

    y(Em, bm);
    ba(Em);
    function Fm(a, b) {
        this.g = a.getUniformLocation(b, "f");
        this.f = a.getUniformLocation(b, "e");
        this.i = a.getUniformLocation(b, "d");
        this.c = a.getUniformLocation(b, "g");
        this.b = a.getAttribLocation(b, "b");
        this.a = a.getAttribLocation(b, "c")
    }

    function Gm(a, b) {
        th.call(this, b);
        this.f = a;
        this.S = new fm([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
        this.i = this.pb = null;
        this.l = void 0;
        this.s = Xc();
        this.U = Zc();
        this.v = null
    }

    y(Gm, th);
    function Hm(a, b, c) {
        var d = a.f.f;
        if (void 0 === a.l || a.l != c) {
            b.postRenderFunctions.push(function (a, b, c) {
                a.isContextLost() || (a.deleteFramebuffer(b), a.deleteTexture(c))
            }.bind(null, d, a.i, a.pb));
            b = km(d, c, c);
            var e = d.createFramebuffer();
            d.bindFramebuffer(36160, e);
            d.framebufferTexture2D(36160, 36064, 3553, b, 0);
            a.pb = b;
            a.i = e;
            a.l = c
        } else d.bindFramebuffer(36160, a.i)
    }

    Gm.prototype.vh = function (a, b, c) {
        Im(this, "precompose", c, a);
        hm(c, 34962, this.S);
        var d = c.b, e = Dm.Zb(), f = Em.Zb(), e = mm(c, e, f);
        this.v ? f = this.v : this.v = f = new Fm(d, e);
        c.we(e) && (d.enableVertexAttribArray(f.b), d.vertexAttribPointer(f.b, 2, 5126, !1, 16, 0), d.enableVertexAttribArray(f.a), d.vertexAttribPointer(f.a, 2, 5126, !1, 16, 8), d.uniform1i(f.c, 0));
        d.uniformMatrix4fv(f.i, !1, this.s);
        d.uniformMatrix4fv(f.f, !1, this.U);
        d.uniform1f(f.g, b.opacity);
        d.bindTexture(3553, this.pb);
        d.drawArrays(5, 0, 4);
        Im(this, "postcompose", c, a)
    };
    function Im(a, b, c, d) {
        a = a.a;
        if (ab(a, b)) {
            var e = d.viewState;
            a.b(new lh(b, a, new Cm(c, e.center, e.resolution, e.rotation, d.size, d.extent, d.pixelRatio), d, null, c))
        }
    }

    Gm.prototype.zf = function () {
        this.i = this.pb = null;
        this.l = void 0
    };
    function Jm(a, b) {
        Gm.call(this, a, b);
        this.j = this.o = this.c = null
    }

    y(Jm, Gm);
    function Km(a, b) {
        var c = b.a();
        return om(a.f.f, c)
    }

    Jm.prototype.ra = function (a, b, c, d) {
        var e = this.a;
        return e.ha().ra(a, b.viewState.resolution, b.viewState.rotation, b.skippedFeatureUids, function (a) {
            return c.call(d, a, e)
        })
    };
    Jm.prototype.Af = function (a, b) {
        var c = this.f.f, d = a.pixelRatio, e = a.viewState, f = e.center, g = e.resolution, h = e.rotation, l = this.c, m = this.pb, n = this.a.ha(), p = a.viewHints, q = a.extent;
        void 0 !== b.extent && (q = mc(q, b.extent));
        p[0] || p[1] || hc(q) || (e = n.A(q, g, d, e.projection)) && vh(this, e) && (l = e, m = Km(this, e), this.pb && a.postRenderFunctions.push(function (a, b) {
            a.isContextLost() || a.deleteTexture(b)
        }.bind(null, c, this.pb)));
        l && (c = this.f.c.l, Lm(this, c.width, c.height, d, f, g, h, l.H()), this.j = null, d = this.s, ad(d), ed(d, 1, -1), dd(d, 0,
            -1), this.c = l, this.pb = m, xh(a.attributions, l.l), yh(a, n));
        return !0
    };
    function Lm(a, b, c, d, e, f, g, h) {
        b *= f;
        c *= f;
        a = a.U;
        ad(a);
        ed(a, 2 * d / b, 2 * d / c);
        fd(a, -g);
        dd(a, h[0] - e[0], h[1] - e[1]);
        ed(a, (h[2] - h[0]) / 2, (h[3] - h[1]) / 2);
        dd(a, 1, 1)
    }

    Jm.prototype.le = function (a, b) {
        return void 0 !== this.ra(a, b, qc, this)
    };
    Jm.prototype.Cc = function (a, b, c, d) {
        if (this.c && this.c.a())if (this.a.ha() instanceof yl) {
            if (a = a.slice(), sh(b.pixelToCoordinateMatrix, a, a), this.ra(a, b, qc, this))return c.call(d, this.a)
        } else {
            var e = [this.c.a().width, this.c.a().height];
            if (!this.j) {
                var f = b.size;
                b = Xc();
                ad(b);
                dd(b, -1, -1);
                ed(b, 2 / f[0], 2 / f[1]);
                dd(b, 0, f[1]);
                ed(b, 1, -1);
                f = Xc();
                cd(this.U, f);
                var g = Xc();
                ad(g);
                dd(g, 0, e[1]);
                ed(g, 1, -1);
                ed(g, e[0] / 2, e[1] / 2);
                dd(g, 1, 1);
                var h = Xc();
                bd(g, f, h);
                bd(h, b, h);
                this.j = h
            }
            b = [0, 0];
            sh(this.j, a, b);
            if (!(0 > b[0] || b[0] > e[0] || 0 >
                b[1] || b[1] > e[1]) && (this.o || (this.o = Oe(1, 1)), this.o.clearRect(0, 0, 1, 1), this.o.drawImage(this.c.a(), b[0], b[1], 1, 1, 0, 0, 1, 1), 0 < this.o.getImageData(0, 0, 1, 1).data[3]))return c.call(d, this.a)
        }
    };
    function Mm() {
        this.b = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"
    }

    y(Mm, am);
    ba(Mm);
    function Nm() {
        this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"
    }

    y(Nm, bm);
    ba(Nm);
    function Om(a, b) {
        this.g = a.getUniformLocation(b, "e");
        this.f = a.getUniformLocation(b, "d");
        this.b = a.getAttribLocation(b, "b");
        this.a = a.getAttribLocation(b, "c")
    }

    function Pm(a, b) {
        Gm.call(this, a, b);
        this.D = Mm.Zb();
        this.T = Nm.Zb();
        this.c = null;
        this.C = new fm([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
        this.A = this.o = null;
        this.j = -1;
        this.R = [0, 0]
    }

    y(Pm, Gm);
    k = Pm.prototype;
    k.ka = function () {
        im(this.f.c, this.C);
        Gm.prototype.ka.call(this)
    };
    k.Qd = function (a, b, c) {
        var d = this.f;
        return function (e, f) {
            return Af(a, b, e, f, function (a) {
                var b = Ze(d.a, a.ib());
                b && (c[e] || (c[e] = {}), c[e][a.ma.toString()] = a);
                return b
            })
        }
    };
    k.zf = function () {
        Gm.prototype.zf.call(this);
        this.c = null
    };
    k.Af = function (a, b, c) {
        var d = this.f, e = c.b, f = a.viewState, g = f.projection, h = this.a, l = h.ha(), m = l.eb(g), n = m.Lb(f.resolution), p = m.$(n), q = l.$d(n, a.pixelRatio, g), r = q[0] / hf(m.Ja(n), this.R)[0], u = p / r, x = l.Ud(g), v = f.center, D;
        p == f.resolution ? (v = Ah(v, p, a.size), D = lc(v, p, f.rotation, a.size)) : D = a.extent;
        p = sf(m, D, p);
        if (this.o && he(this.o, p) && this.j == l.g)u = this.A; else {
            var A = [p.ea - p.ca + 1, p.ga - p.fa + 1], z = Math.pow(2, Math.ceil(Math.log(Math.max(A[0] * q[0], A[1] * q[1])) / Math.LN2)), A = u * z, F = m.Ia(n), N = F[0] + p.ca * q[0] * u, u = F[1] + p.fa * q[1] *
                u, u = [N, u, N + A, u + A];
            Hm(this, a, z);
            e.viewport(0, 0, z, z);
            e.clearColor(0, 0, 0, 0);
            e.clear(16384);
            e.disable(3042);
            z = mm(c, this.D, this.T);
            c.we(z);
            this.c || (this.c = new Om(e, z));
            hm(c, 34962, this.C);
            e.enableVertexAttribArray(this.c.b);
            e.vertexAttribPointer(this.c.b, 2, 5126, !1, 16, 0);
            e.enableVertexAttribArray(this.c.a);
            e.vertexAttribPointer(this.c.a, 2, 5126, !1, 16, 8);
            e.uniform1i(this.c.g, 0);
            c = {};
            c[n] = {};
            var K = this.Qd(l, g, c), X = h.c(), z = !0, N = Lb(), oa = new fe(0, 0, 0, 0), H, ya, Ua;
            for (ya = p.ca; ya <= p.ea; ++ya)for (Ua = p.fa; Ua <= p.ga; ++Ua) {
                F =
                    l.ac(n, ya, Ua, r, g);
                if (void 0 !== b.extent && (H = m.Ea(F.ma, N), !nc(H, b.extent)))continue;
                H = F.V();
                H = 2 == H || 4 == H || 3 == H && !X;
                !H && F.a && (F = F.a);
                H = F.V();
                if (2 == H) {
                    if (Ze(d.a, F.ib())) {
                        c[n][F.ma.toString()] = F;
                        continue
                    }
                } else if (4 == H || 3 == H && !X)continue;
                z = !1;
                H = qf(m, F.ma, K, oa, N);
                H || (F = rf(m, F.ma, oa, N)) && K(n + 1, F)
            }
            b = Object.keys(c).map(Number);
            b.sort(ib);
            for (var K = new Float32Array(4), Xa, Va, Aa, X = 0, oa = b.length; X < oa; ++X)for (Xa in Va = c[b[X]], Va)F = Va[Xa], H = m.Ea(F.ma, N), ya = 2 * (H[2] - H[0]) / A, Ua = 2 * (H[3] - H[1]) / A, Aa = 2 * (H[0] - u[0]) / A - 1,
                H = 2 * (H[1] - u[1]) / A - 1, Wc(K, ya, Ua, Aa, H), e.uniform4fv(this.c.f, K), Qm(d, F, q, x * r), e.drawArrays(5, 0, 4);
            z ? (this.o = p, this.A = u, this.j = l.g) : (this.A = this.o = null, this.j = -1, a.animate = !0)
        }
        zh(a.usedTiles, l, n, p);
        var Qb = d.o;
        Bh(a, l, m, r, g, D, n, h.f(), function (a) {
            var b;
            (b = 2 != a.V() || Ze(d.a, a.ib())) || (b = a.ib() in Qb.g);
            b || Qb.f([a, uf(m, a.ma), m.$(a.ma[0]), q, x * r])
        }, this);
        wh(a, l);
        yh(a, l);
        e = this.s;
        ad(e);
        dd(e, (v[0] - u[0]) / (u[2] - u[0]), (v[1] - u[1]) / (u[3] - u[1]));
        0 !== f.rotation && fd(e, f.rotation);
        ed(e, a.size[0] * f.resolution / (u[2] - u[0]),
            a.size[1] * f.resolution / (u[3] - u[1]));
        dd(e, -.5, -.5);
        return !0
    };
    k.Cc = function (a, b, c, d) {
        if (this.i) {
            var e = [0, 0];
            sh(this.s, [a[0] / b.size[0], (b.size[1] - a[1]) / b.size[1]], e);
            a = [e[0] * this.l, e[1] * this.l];
            b = this.f.c.b;
            b.bindFramebuffer(b.FRAMEBUFFER, this.i);
            e = new Uint8Array(4);
            b.readPixels(a[0], a[1], 1, 1, b.RGBA, b.UNSIGNED_BYTE, e);
            if (0 < e[3])return c.call(d, this.a)
        }
    };
    function Rm(a, b) {
        Gm.call(this, a, b);
        this.j = !1;
        this.R = -1;
        this.D = NaN;
        this.A = Lb();
        this.o = this.c = this.C = null
    }

    y(Rm, Gm);
    k = Rm.prototype;
    k.vh = function (a, b, c) {
        this.o = b;
        var d = a.viewState, e = this.c;
        e && !e.Ya() && e.Pa(c, d.center, d.resolution, d.rotation, a.size, a.pixelRatio, b.opacity, b.Qc ? a.skippedFeatureUids : {})
    };
    k.ka = function () {
        var a = this.c;
        a && (wm(a, this.f.c)(), this.c = null);
        Gm.prototype.ka.call(this)
    };
    k.ra = function (a, b, c, d) {
        if (this.c && this.o) {
            var e = b.viewState, f = this.a, g = {};
            return this.c.ra(a, this.f.c, e.center, e.resolution, e.rotation, b.size, b.pixelRatio, this.o.opacity, {}, function (a) {
                var b = w(a).toString();
                if (!(b in g))return g[b] = !0, c.call(d, a, f)
            })
        }
    };
    k.le = function (a, b) {
        if (this.c && this.o) {
            var c = b.viewState;
            return Bm(this.c, a, this.f.c, c.resolution, c.rotation, b.pixelRatio, this.o.opacity, b.skippedFeatureUids)
        }
        return !1
    };
    k.Cc = function (a, b, c, d) {
        a = a.slice();
        sh(b.pixelToCoordinateMatrix, a, a);
        if (this.le(a, b))return c.call(d, this.a)
    };
    k.wh = function () {
        uh(this)
    };
    k.Af = function (a, b, c) {
        function d(a) {
            var b, c = a.ec();
            c ? b = c.call(a, m) : (c = e.i) && (b = c(a, m));
            if (b) {
                if (b) {
                    c = !1;
                    if (Array.isArray(b))for (var d = 0, f = b.length; d < f; ++d)c = lk(q, a, b[d], jk(m, n), this.wh, this) || c; else c = lk(q, a, b, jk(m, n), this.wh, this) || c;
                    a = c
                } else a = !1;
                this.j = this.j || a
            }
        }

        var e = this.a;
        b = e.ha();
        xh(a.attributions, b.l);
        yh(a, b);
        var f = a.viewHints[0], g = a.viewHints[1], h = e.S, l = e.T;
        if (!this.j && !h && f || !l && g)return !0;
        var g = a.extent, h = a.viewState, f = h.projection, m = h.resolution, n = a.pixelRatio, h = e.g, p = e.a, l = xj(e);
        void 0 ===
        l && (l = ik);
        g = Ob(g, p * m);
        if (!this.j && this.D == m && this.R == h && this.C == l && Ub(this.A, g))return !0;
        this.c && a.postRenderFunctions.push(wm(this.c, c));
        this.j = !1;
        var q = new vm(.5 * m / n, g, e.a);
        b.Pc(g, m, f);
        if (l) {
            var r = [];
            b.ub(g, function (a) {
                r.push(a)
            }, this);
            r.sort(l);
            r.forEach(d, this)
        } else b.ub(g, d, this);
        xm(q, c);
        this.D = m;
        this.R = h;
        this.C = l;
        this.A = g;
        this.c = q;
        return !0
    };
    function Sm(a, b) {
        Hh.call(this, 0, b);
        this.b = document.createElement("CANVAS");
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.className = "ol-unselectable";
        a.insertBefore(this.b, a.childNodes[0] || null);
        this.U = this.A = 0;
        this.C = Oe();
        this.j = !0;
        this.f = ag(this.b, {
            antialias: !0,
            depth: !1,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !1,
            stencil: !0
        });
        this.c = new gm(this.b, this.f);
        B(this.b, "webglcontextlost", this.Pm, this);
        B(this.b, "webglcontextrestored", this.Qm, this);
        this.a = new Ye;
        this.v = null;
        this.o =
            new Mh(function (a) {
                var b = a[1];
                a = a[2];
                var e = b[0] - this.v[0], b = b[1] - this.v[1];
                return 65536 * Math.log(a) + Math.sqrt(e * e + b * b) / a
            }.bind(this), function (a) {
                return a[0].ib()
            });
        this.D = function () {
            if (!this.o.Ya()) {
                Qh(this.o);
                var a = Nh(this.o);
                Qm(this, a[0], a[3], a[4])
            }
            return !1
        }.bind(this);
        this.l = 0;
        Tm(this)
    }

    y(Sm, Hh);
    function Qm(a, b, c, d) {
        var e = a.f, f = b.ib();
        if (Ze(a.a, f))a = a.a.get(f), e.bindTexture(3553, a.pb), 9729 != a.Wg && (e.texParameteri(3553, 10240, 9729), a.Wg = 9729), 9729 != a.Yg && (e.texParameteri(3553, 10241, 9729), a.Yg = 9729); else {
            var g = e.createTexture();
            e.bindTexture(3553, g);
            if (0 < d) {
                var h = a.C.canvas, l = a.C;
                a.A !== c[0] || a.U !== c[1] ? (h.width = c[0], h.height = c[1], a.A = c[0], a.U = c[1]) : l.clearRect(0, 0, c[0], c[1]);
                l.drawImage(b.$a(), d, d, c[0], c[1], 0, 0, c[0], c[1]);
                e.texImage2D(3553, 0, 6408, 6408, 5121, h)
            } else e.texImage2D(3553, 0, 6408, 6408,
                5121, b.$a());
            e.texParameteri(3553, 10240, 9729);
            e.texParameteri(3553, 10241, 9729);
            e.texParameteri(3553, 10242, 33071);
            e.texParameteri(3553, 10243, 33071);
            a.a.set(f, {pb: g, Wg: 9729, Yg: 9729})
        }
    }

    k = Sm.prototype;
    k.Xe = function (a) {
        return a instanceof cj ? new Jm(this, a) : a instanceof dj ? new Pm(this, a) : a instanceof G ? new Rm(this, a) : null
    };
    function Um(a, b, c) {
        var d = a.i;
        if (ab(d, b)) {
            a = a.c;
            var e = c.viewState;
            d.b(new lh(b, d, new Cm(a, e.center, e.resolution, e.rotation, c.size, c.extent, c.pixelRatio), c, null, a))
        }
    }

    k.ka = function () {
        var a = this.f;
        a.isContextLost() || this.a.forEach(function (b) {
            b && a.deleteTexture(b.pb)
        });
        Ta(this.c);
        Hh.prototype.ka.call(this)
    };
    k.Gj = function (a, b) {
        for (var c = this.f, d; 1024 < this.a.wc() - this.l;) {
            if (d = this.a.b.pc)c.deleteTexture(d.pb); else if (+this.a.b.cc == b.index)break; else--this.l;
            this.a.pop()
        }
    };
    k.X = function () {
        return "webgl"
    };
    k.Pm = function (a) {
        a.preventDefault();
        this.a.clear();
        this.l = 0;
        a = this.g;
        for (var b in a)a[b].zf()
    };
    k.Qm = function () {
        Tm(this);
        this.i.render()
    };
    function Tm(a) {
        a = a.f;
        a.activeTexture(33984);
        a.blendFuncSeparate(770, 771, 1, 771);
        a.disable(2884);
        a.disable(2929);
        a.disable(3089);
        a.disable(2960)
    }

    k.Ce = function (a) {
        var b = this.c, c = this.f;
        if (c.isContextLost())return !1;
        if (!a)return this.j && (this.b.style.display = "none", this.j = !1), !1;
        this.v = a.focus;
        this.a.set((-a.index).toString(), null);
        ++this.l;
        Um(this, "precompose", a);
        var d = [], e = a.layerStatesArray;
        qb(e);
        var f = a.viewState.resolution, g, h, l, m;
        g = 0;
        for (h = e.length; g < h; ++g)m = e[g], nh(m, f) && "ready" == m.R && (l = Kh(this, m.layer), l.Af(a, m, b) && d.push(m));
        e = a.size[0] * a.pixelRatio;
        f = a.size[1] * a.pixelRatio;
        if (this.b.width != e || this.b.height != f)this.b.width = e, this.b.height =
            f;
        c.bindFramebuffer(36160, null);
        c.clearColor(0, 0, 0, 0);
        c.clear(16384);
        c.enable(3042);
        c.viewport(0, 0, this.b.width, this.b.height);
        g = 0;
        for (h = d.length; g < h; ++g)m = d[g], l = Kh(this, m.layer), l.vh(a, m, b);
        this.j || (this.b.style.display = "", this.j = !0);
        Ih(a);
        1024 < this.a.wc() - this.l && a.postRenderFunctions.push(this.Gj.bind(this));
        this.o.Ya() || (a.postRenderFunctions.push(this.D), a.animate = !0);
        Um(this, "postcompose", a);
        Lh(this, a);
        a.postRenderFunctions.push(Jh)
    };
    k.ra = function (a, b, c, d, e, f) {
        var g;
        if (this.f.isContextLost())return !1;
        var h = b.viewState, l = b.layerStatesArray, m;
        for (m = l.length - 1; 0 <= m; --m) {
            g = l[m];
            var n = g.layer;
            if (nh(g, h.resolution) && e.call(f, n) && (g = Kh(this, n).ra(a, b, c, d)))return g
        }
    };
    k.sh = function (a, b, c, d) {
        var e = !1;
        if (this.f.isContextLost())return !1;
        var f = b.viewState, g = b.layerStatesArray, h;
        for (h = g.length - 1; 0 <= h; --h) {
            var l = g[h], m = l.layer;
            if (nh(l, f.resolution) && c.call(d, m) && (e = Kh(this, m).le(a, b)))return !0
        }
        return e
    };
    k.rh = function (a, b, c, d, e) {
        if (this.f.isContextLost())return !1;
        var f = b.viewState, g, h = b.layerStatesArray, l;
        for (l = h.length - 1; 0 <= l; --l) {
            g = h[l];
            var m = g.layer;
            if (nh(g, f.resolution) && e.call(d, m) && (g = Kh(this, m).Cc(a, b, c, d)))return g
        }
    };
    var Vm = ["canvas", "webgl", "dom"];

    function Q(a) {
        eb.call(this);
        var b = Wm(a);
        this.Hb = void 0 !== a.loadTilesWhileAnimating ? a.loadTilesWhileAnimating : !1;
        this.Hc = void 0 !== a.loadTilesWhileInteracting ? a.loadTilesWhileInteracting : !1;
        this.Oe = void 0 !== a.pixelRatio ? a.pixelRatio : gg;
        this.Ne = b.logos;
        this.Y = function () {
            this.i = void 0;
            this.Uo.call(this, Date.now())
        }.bind(this);
        this.Sa = Xc();
        this.Pe = Xc();
        this.qb = 0;
        this.f = null;
        this.Aa = Lb();
        this.D = this.S = null;
        this.a = document.createElement("DIV");
        this.a.className = "ol-viewport" + (lg ? " ol-touch" : "");
        this.a.style.position =
            "relative";
        this.a.style.overflow = "hidden";
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.style.msTouchAction = "none";
        this.a.style.touchAction = "none";
        this.A = document.createElement("DIV");
        this.A.className = "ol-overlaycontainer";
        this.a.appendChild(this.A);
        this.v = document.createElement("DIV");
        this.v.className = "ol-overlaycontainer-stopevent";
        a = ["click", "dblclick", "mousedown", "touchstart", "mspointerdown", eh, "mousewheel", "wheel"];
        for (var c = 0, d = a.length; c < d; ++c)B(this.v, a[c], Ya);
        this.a.appendChild(this.v);
        this.za = new Xg(this);
        for (var e in hh)B(this.za, hh[e], this.Pg, this);
        this.ia = b.keyboardEventTarget;
        this.s = null;
        B(this.a, "wheel", this.Oc, this);
        B(this.a, "mousewheel", this.Oc, this);
        this.o = b.controls;
        this.l = b.interactions;
        this.j = b.overlays;
        this.Cf = {};
        this.C = new b.Wo(this.a, this);
        this.T = null;
        this.R = [];
        this.ta = [];
        this.qa = new Rh(this.Bk.bind(this), this.hl.bind(this));
        this.Ee = {};
        B(this, gb("layergroup"), this.Ok, this);
        B(this, gb("view"), this.il, this);
        B(this, gb("size"), this.el, this);
        B(this, gb("target"), this.gl,
            this);
        this.G(b.values);
        this.o.forEach(function (a) {
            a.setMap(this)
        }, this);
        B(this.o, "add", function (a) {
            a.element.setMap(this)
        }, this);
        B(this.o, "remove", function (a) {
            a.element.setMap(null)
        }, this);
        this.l.forEach(function (a) {
            a.setMap(this)
        }, this);
        B(this.l, "add", function (a) {
            a.element.setMap(this)
        }, this);
        B(this.l, "remove", function (a) {
            a.element.setMap(null)
        }, this);
        this.j.forEach(this.mg, this);
        B(this.j, "add", function (a) {
            this.mg(a.element)
        }, this);
        B(this.j, "remove", function (a) {
            var b = a.element.Xa();
            void 0 !== b && delete this.Cf[b.toString()];
            a.element.setMap(null)
        }, this)
    }

    y(Q, eb);
    k = Q.prototype;
    k.uj = function (a) {
        this.o.push(a)
    };
    k.vj = function (a) {
        this.l.push(a)
    };
    k.kg = function (a) {
        this.xc().Tc().push(a)
    };
    k.lg = function (a) {
        this.j.push(a)
    };
    k.mg = function (a) {
        var b = a.Xa();
        void 0 !== b && (this.Cf[b.toString()] = a);
        a.setMap(this)
    };
    k.Wa = function (a) {
        this.render();
        Array.prototype.push.apply(this.R, arguments)
    };
    k.ka = function () {
        Ta(this.za);
        Ta(this.C);
        Qa(this.a, "wheel", this.Oc, this);
        Qa(this.a, "mousewheel", this.Oc, this);
        void 0 !== this.c && (pa.removeEventListener("resize", this.c, !1), this.c = void 0);
        this.i && (pa.cancelAnimationFrame(this.i), this.i = void 0);
        this.fh(null);
        eb.prototype.ka.call(this)
    };
    k.kd = function (a, b, c, d, e) {
        if (this.f)return a = this.Ma(a), this.C.ra(a, this.f, b, void 0 !== c ? c : null, void 0 !== d ? d : qc, void 0 !== e ? e : null)
    };
    k.Tl = function (a, b, c, d, e) {
        if (this.f)return this.C.rh(a, this.f, b, void 0 !== c ? c : null, void 0 !== d ? d : qc, void 0 !== e ? e : null)
    };
    k.kl = function (a, b, c) {
        if (!this.f)return !1;
        a = this.Ma(a);
        return this.C.sh(a, this.f, void 0 !== b ? b : qc, void 0 !== c ? c : null)
    };
    k.Wj = function (a) {
        return this.Ma(this.Td(a))
    };
    k.Td = function (a) {
        var b = this.a.getBoundingClientRect();
        a = a.changedTouches ? a.changedTouches[0] : a;
        return [a.clientX - b.left, a.clientY - b.top]
    };
    k.tf = function () {
        return this.get("target")
    };
    k.yc = function () {
        var a = this.tf();
        return void 0 !== a ? "string" === typeof a ? document.getElementById(a) : a : null
    };
    k.Ma = function (a) {
        var b = this.f;
        return b ? (a = a.slice(), sh(b.pixelToCoordinateMatrix, a, a)) : null
    };
    k.Uj = function () {
        return this.o
    };
    k.nk = function () {
        return this.j
    };
    k.mk = function (a) {
        a = this.Cf[a.toString()];
        return void 0 !== a ? a : null
    };
    k.ak = function () {
        return this.l
    };
    k.xc = function () {
        return this.get("layergroup")
    };
    k.eh = function () {
        return this.xc().Tc()
    };
    k.Ga = function (a) {
        var b = this.f;
        return b ? (a = a.slice(0, 2), sh(b.coordinateToPixelMatrix, a, a)) : null
    };
    k.Za = function () {
        return this.get("size")
    };
    k.aa = function () {
        return this.get("view")
    };
    k.Dk = function () {
        return this.a
    };
    k.Bk = function (a, b, c, d) {
        var e = this.f;
        if (!(e && b in e.wantedTiles && e.wantedTiles[b][a.ma.toString()]))return Infinity;
        a = c[0] - e.focus[0];
        c = c[1] - e.focus[1];
        return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d
    };
    k.Oc = function (a, b) {
        var c = new Vg(b || a.type, this, a);
        this.Pg(c)
    };
    k.Pg = function (a) {
        if (this.f) {
            this.T = a.coordinate;
            a.frameState = this.f;
            var b = this.l.a, c;
            if (!1 !== this.b(a))for (c = b.length - 1; 0 <= c; c--) {
                var d = b[c];
                if (d.f() && !d.handleEvent(a))break
            }
        }
    };
    k.cl = function () {
        var a = this.f, b = this.qa;
        if (!b.Ya()) {
            var c = 16, d = c;
            if (a) {
                var e = a.viewHints;
                e[0] && (c = this.Hb ? 8 : 0, d = 2);
                e[1] && (c = this.Hc ? 8 : 0, d = 2)
            }
            b.i < c && (Qh(b), Sh(b, c, d))
        }
        b = this.ta;
        c = 0;
        for (d = b.length; c < d; ++c)b[c](this, a);
        b.length = 0
    };
    k.el = function () {
        this.render()
    };
    k.gl = function () {
        var a;
        this.tf() && (a = this.yc());
        if (this.s) {
            for (var b = 0, c = this.s.length; b < c; ++b)Ka(this.s[b]);
            this.s = null
        }
        a ? (a.appendChild(this.a), a = this.ia ? this.ia : a, this.s = [B(a, "keydown", this.Oc, this), B(a, "keypress", this.Oc, this)], this.c || (this.c = this.Xc.bind(this), pa.addEventListener("resize", this.c, !1))) : (Ue(this.a), void 0 !== this.c && (pa.removeEventListener("resize", this.c, !1), this.c = void 0));
        this.Xc()
    };
    k.hl = function () {
        this.render()
    };
    k.jl = function () {
        this.render()
    };
    k.il = function () {
        this.S && (Ka(this.S), this.S = null);
        var a = this.aa();
        a && (this.S = B(a, "propertychange", this.jl, this));
        this.render()
    };
    k.Pk = function () {
        this.render()
    };
    k.Qk = function () {
        this.render()
    };
    k.Ok = function () {
        this.D && (this.D.forEach(Ka), this.D = null);
        var a = this.xc();
        a && (this.D = [B(a, "propertychange", this.Qk, this), B(a, "change", this.Pk, this)]);
        this.render()
    };
    k.Vo = function () {
        this.i && pa.cancelAnimationFrame(this.i);
        this.Y()
    };
    k.render = function () {
        void 0 === this.i && (this.i = pa.requestAnimationFrame(this.Y))
    };
    k.Oo = function (a) {
        return this.o.remove(a)
    };
    k.Po = function (a) {
        return this.l.remove(a)
    };
    k.Ro = function (a) {
        return this.xc().Tc().remove(a)
    };
    k.So = function (a) {
        return this.j.remove(a)
    };
    k.Uo = function (a) {
        var b, c, d, e = this.Za(), f = this.aa(), g = Lb(), h = null;
        if (void 0 !== e && 0 < e[0] && 0 < e[1] && f && Wd(f)) {
            var h = Sd(f, this.f ? this.f.viewHints : void 0), l = this.xc().hf(), m = {};
            b = 0;
            for (c = l.length; b < c; ++b)m[w(l[b].layer)] = l[b];
            d = f.V();
            h = {
                animate: !1,
                attributions: {},
                coordinateToPixelMatrix: this.Sa,
                extent: g,
                focus: this.T ? this.T : d.center,
                index: this.qb++,
                layerStates: m,
                layerStatesArray: l,
                logos: Ea({}, this.Ne),
                pixelRatio: this.Oe,
                pixelToCoordinateMatrix: this.Pe,
                postRenderFunctions: [],
                size: e,
                skippedFeatureUids: this.Ee,
                tileQueue: this.qa,
                time: a,
                usedTiles: {},
                viewState: d,
                viewHints: h,
                wantedTiles: {}
            }
        }
        if (h) {
            a = this.R;
            b = e = 0;
            for (c = a.length; b < c; ++b)f = a[b], f(this, h) && (a[e++] = f);
            a.length = e;
            h.extent = lc(d.center, d.resolution, d.rotation, h.size, g)
        }
        this.f = h;
        this.C.Ce(h);
        h && (h.animate && this.render(), Array.prototype.push.apply(this.ta, h.postRenderFunctions), 0 !== this.R.length || h.viewHints[0] || h.viewHints[1] || $b(h.extent, this.Aa) || (this.b(new We("moveend", this, h)), Pb(h.extent, this.Aa)));
        this.b(new We("postrender", this, h));
        Tf(this.cl,
            this)
    };
    k.ji = function (a) {
        this.set("layergroup", a)
    };
    k.Wf = function (a) {
        this.set("size", a)
    };
    k.fh = function (a) {
        this.set("target", a)
    };
    k.kp = function (a) {
        this.set("view", a)
    };
    k.ti = function (a) {
        a = w(a).toString();
        this.Ee[a] = !0;
        this.render()
    };
    k.Xc = function () {
        var a = this.yc();
        if (a) {
            var b = pa.getComputedStyle(a);
            this.Wf([a.offsetWidth - parseFloat(b.borderLeftWidth) - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) - parseFloat(b.borderRightWidth), a.offsetHeight - parseFloat(b.borderTopWidth) - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) - parseFloat(b.borderBottomWidth)])
        } else this.Wf(void 0)
    };
    k.wi = function (a) {
        a = w(a).toString();
        delete this.Ee[a];
        this.render()
    };
    function Wm(a) {
        var b = null;
        void 0 !== a.keyboardEventTarget && (b = "string" === typeof a.keyboardEventTarget ? document.getElementById(a.keyboardEventTarget) : a.keyboardEventTarget);
        var c = {}, d = {};
        if (void 0 === a.logo || "boolean" === typeof a.logo && a.logo)d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] =
            "http://openlayers.org/"; else {
            var e = a.logo;
            "string" === typeof e ? d[e] = "" : e instanceof HTMLElement ? d[w(e).toString()] = e : fa(e) && (d[e.src] = e.href)
        }
        e = a.layers instanceof Ti ? a.layers : new Ti({layers: a.layers});
        c.layergroup = e;
        c.target = a.target;
        c.view = void 0 !== a.view ? a.view : new Rd;
        var e = Hh, f;
        void 0 !== a.renderer ? Array.isArray(a.renderer) ? f = a.renderer : "string" === typeof a.renderer && (f = [a.renderer]) : f = Vm;
        var g, h;
        g = 0;
        for (h = f.length; g < h; ++g) {
            var l = f[g];
            if ("canvas" == l) {
                if (ig) {
                    e = Ql;
                    break
                }
            } else if ("dom" == l) {
                e = Yl;
                break
            } else if ("webgl" ==
                l && bg) {
                e = Sm;
                break
            }
        }
        var m;
        void 0 !== a.controls ? m = Array.isArray(a.controls) ? new le(a.controls.slice()) : a.controls : m = Kf();
        var n;
        void 0 !== a.interactions ? n = Array.isArray(a.interactions) ? new le(a.interactions.slice()) : a.interactions : n = Si();
        a = void 0 !== a.overlays ? Array.isArray(a.overlays) ? new le(a.overlays.slice()) : a.overlays : new le;
        return {controls: m, interactions: n, keyboardEventTarget: b, logos: d, overlays: a, Wo: e, values: c}
    }

    bj();
    function Xm(a) {
        eb.call(this);
        this.j = a.id;
        this.o = void 0 !== a.insertFirst ? a.insertFirst : !0;
        this.s = void 0 !== a.stopEvent ? a.stopEvent : !0;
        this.f = document.createElement("DIV");
        this.f.className = "ol-overlay-container";
        this.f.style.position = "absolute";
        this.autoPan = void 0 !== a.autoPan ? a.autoPan : !1;
        this.i = void 0 !== a.autoPanAnimation ? a.autoPanAnimation : {};
        this.l = void 0 !== a.autoPanMargin ? a.autoPanMargin : 20;
        this.a = {Md: "", fe: "", De: "", Fe: "", visible: !0};
        this.c = null;
        B(this, gb("element"), this.Jk, this);
        B(this, gb("map"),
            this.Vk, this);
        B(this, gb("offset"), this.Zk, this);
        B(this, gb("position"), this.al, this);
        B(this, gb("positioning"), this.bl, this);
        void 0 !== a.element && this.fi(a.element);
        this.li(void 0 !== a.offset ? a.offset : [0, 0]);
        this.oi(void 0 !== a.positioning ? a.positioning : "top-left");
        void 0 !== a.position && this.uf(a.position)
    }

    y(Xm, eb);
    k = Xm.prototype;
    k.Sd = function () {
        return this.get("element")
    };
    k.Xa = function () {
        return this.j
    };
    k.he = function () {
        return this.get("map")
    };
    k.Kg = function () {
        return this.get("offset")
    };
    k.gh = function () {
        return this.get("position")
    };
    k.Lg = function () {
        return this.get("positioning")
    };
    k.Jk = function () {
        Ve(this.f);
        var a = this.Sd();
        a && this.f.appendChild(a)
    };
    k.Vk = function () {
        this.c && (Ue(this.f), Ka(this.c), this.c = null);
        var a = this.he();
        a && (this.c = B(a, "postrender", this.render, this), Ym(this), a = this.s ? a.v : a.A, this.o ? a.insertBefore(this.f, a.childNodes[0] || null) : a.appendChild(this.f))
    };
    k.render = function () {
        Ym(this)
    };
    k.Zk = function () {
        Ym(this)
    };
    k.al = function () {
        Ym(this);
        if (void 0 !== this.get("position") && this.autoPan) {
            var a = this.he();
            if (void 0 !== a && a.yc()) {
                var b = Zm(a.yc(), a.Za()), c = this.Sd(), d = c.offsetWidth, e = c.currentStyle || pa.getComputedStyle(c), d = d + (parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)), e = c.offsetHeight, f = c.currentStyle || pa.getComputedStyle(c), e = e + (parseInt(f.marginTop, 10) + parseInt(f.marginBottom, 10)), g = Zm(c, [d, e]), c = this.l;
                Ub(b, g) || (d = g[0] - b[0], e = b[2] - g[2], f = g[1] - b[1], g = b[3] - g[3], b = [0, 0], 0 > d ? b[0] = d - c : 0 > e && (b[0] = Math.abs(e) +
                    c), 0 > f ? b[1] = f - c : 0 > g && (b[1] = Math.abs(g) + c), 0 === b[0] && 0 === b[1]) || (c = a.aa().ab(), d = a.Ga(c), b = [d[0] + b[0], d[1] + b[1]], this.i && (this.i.source = c, a.Wa(ce(this.i))), a.aa().mb(a.Ma(b)))
            }
        }
    };
    k.bl = function () {
        Ym(this)
    };
    k.fi = function (a) {
        this.set("element", a)
    };
    k.setMap = function (a) {
        this.set("map", a)
    };
    k.li = function (a) {
        this.set("offset", a)
    };
    k.uf = function (a) {
        this.set("position", a)
    };
    function Zm(a, b) {
        var c = a.getBoundingClientRect(), d = c.left + pa.pageXOffset, c = c.top + pa.pageYOffset;
        return [d, c, d + b[0], c + b[1]]
    }

    k.oi = function (a) {
        this.set("positioning", a)
    };
    function $m(a, b) {
        a.a.visible !== b && (a.f.style.display = b ? "" : "none", a.a.visible = b)
    }

    function Ym(a) {
        var b = a.he(), c = a.gh();
        if (void 0 !== b && b.f && void 0 !== c) {
            var c = b.Ga(c), d = b.Za(), b = a.f.style, e = a.Kg(), f = a.Lg(), g = e[0], e = e[1];
            if ("bottom-right" == f || "center-right" == f || "top-right" == f)"" !== a.a.fe && (a.a.fe = b.left = ""), g = Math.round(d[0] - c[0] - g) + "px", a.a.De != g && (a.a.De = b.right = g); else {
                "" !== a.a.De && (a.a.De = b.right = "");
                if ("bottom-center" == f || "center-center" == f || "top-center" == f)g -= a.f.offsetWidth / 2;
                g = Math.round(c[0] + g) + "px";
                a.a.fe != g && (a.a.fe = b.left = g)
            }
            if ("bottom-left" == f || "bottom-center" == f || "bottom-right" ==
                f)"" !== a.a.Fe && (a.a.Fe = b.top = ""), c = Math.round(d[1] - c[1] - e) + "px", a.a.Md != c && (a.a.Md = b.bottom = c); else {
                "" !== a.a.Md && (a.a.Md = b.bottom = "");
                if ("center-left" == f || "center-center" == f || "center-right" == f)e -= a.f.offsetHeight / 2;
                c = Math.round(c[1] + e) + "px";
                a.a.Fe != c && (a.a.Fe = b.top = c)
            }
            $m(a, !0)
        } else $m(a, !1)
    }

    function an(a) {
        a = a ? a : {};
        this.l = void 0 !== a.collapsed ? a.collapsed : !0;
        this.o = void 0 !== a.collapsible ? a.collapsible : !0;
        this.o || (this.l = !1);
        var b = void 0 !== a.className ? a.className : "ol-overviewmap", c = void 0 !== a.tipLabel ? a.tipLabel : "Overview map", d = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00ab";
        "string" === typeof d ? (this.j = document.createElement("span"), this.j.textContent = d) : this.j = d;
        d = void 0 !== a.label ? a.label : "\u00bb";
        "string" === typeof d ? (this.v = document.createElement("span"), this.v.textContent = d) : this.v =
            d;
        var e = this.o && !this.l ? this.j : this.v, d = document.createElement("button");
        d.setAttribute("type", "button");
        d.title = c;
        d.appendChild(e);
        B(d, "click", this.gm, this);
        c = document.createElement("DIV");
        c.className = "ol-overviewmap-map";
        var f = this.f = new Q({controls: new le, interactions: new le, target: c, view: a.view});
        a.layers && a.layers.forEach(function (a) {
            f.kg(a)
        }, this);
        e = document.createElement("DIV");
        e.className = "ol-overviewmap-box";
        e.style.boxSizing = "border-box";
        this.A = new Xm({
            position: [0, 0], positioning: "bottom-left",
            element: e
        });
        this.f.lg(this.A);
        e = document.createElement("div");
        e.className = b + " ol-unselectable ol-control" + (this.l && this.o ? " ol-collapsed" : "") + (this.o ? "" : " ol-uncollapsible");
        e.appendChild(c);
        e.appendChild(d);
        Xe.call(this, {element: e, render: a.render ? a.render : bn, target: a.target})
    }

    y(an, Xe);
    k = an.prototype;
    k.setMap = function (a) {
        var b = this.a;
        a !== b && (b && (b = b.aa()) && Qa(b, gb("rotation"), this.de, this), Xe.prototype.setMap.call(this, a), a && (this.s.push(B(a, "propertychange", this.Wk, this)), 0 === this.f.eh().dc() && this.f.ji(a.xc()), a = a.aa())) && (B(a, gb("rotation"), this.de, this), Wd(a) && (this.f.Xc(), cn(this)))
    };
    k.Wk = function (a) {
        "view" === a.key && ((a = a.oldValue) && Qa(a, gb("rotation"), this.de, this), a = this.a.aa(), B(a, gb("rotation"), this.de, this))
    };
    k.de = function () {
        this.f.aa().ie(this.a.aa().La())
    };
    function bn() {
        var a = this.a, b = this.f;
        if (a.f && b.f) {
            var c = a.Za(), a = a.aa().Kc(c), d = b.Za(), c = b.aa().Kc(d), e = b.Ga(fc(a)), f = b.Ga(dc(a)), b = Math.abs(e[0] - f[0]), e = Math.abs(e[1] - f[1]), f = d[0], d = d[1];
            b < .1 * f || e < .1 * d || b > .75 * f || e > .75 * d ? cn(this) : Ub(c, a) || (a = this.f, c = this.a.aa(), a.aa().mb(c.ab()))
        }
        dn(this)
    }

    function cn(a) {
        var b = a.a;
        a = a.f;
        var c = b.Za(), b = b.aa().Kc(c), c = a.Za();
        a = a.aa();
        oc(b, 1 / (.1 * Math.pow(2, Math.log(7.5) / Math.LN2 / 2)));
        a.cf(b, c)
    }

    function dn(a) {
        var b = a.a, c = a.f;
        if (b.f && c.f) {
            var d = b.Za(), e = b.aa(), f = c.aa();
            c.Za();
            var c = e.La(), b = a.A, g = a.A.Sd(), e = e.Kc(d), d = f.$(), f = cc(e), e = ec(e), h;
            if (a = a.a.aa().ab())h = [f[0] - a[0], f[1] - a[1]], Gb(h, c), Bb(h, a);
            b.uf(h);
            g && (g.style.width = Math.abs((f[0] - e[0]) / d) + "px", g.style.height = Math.abs((e[1] - f[1]) / d) + "px")
        }
    }

    k.gm = function (a) {
        a.preventDefault();
        en(this)
    };
    function en(a) {
        a.element.classList.toggle("ol-collapsed");
        a.l ? Te(a.j, a.v) : Te(a.v, a.j);
        a.l = !a.l;
        var b = a.f;
        a.l || b.f || (b.Xc(), cn(a), Pa(b, "postrender", function () {
            dn(this)
        }, a))
    }

    k.fm = function () {
        return this.o
    };
    k.im = function (a) {
        this.o !== a && (this.o = a, this.element.classList.toggle("ol-uncollapsible"), !a && this.l && en(this))
    };
    k.hm = function (a) {
        this.o && this.l !== a && en(this)
    };
    k.em = function () {
        return this.l
    };
    k.pk = function () {
        return this.f
    };
    function fn(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-scale-line";
        this.o = document.createElement("DIV");
        this.o.className = b + "-inner";
        this.f = document.createElement("DIV");
        this.f.className = b + " ol-unselectable";
        this.f.appendChild(this.o);
        this.v = null;
        this.j = void 0 !== a.minWidth ? a.minWidth : 64;
        this.l = !1;
        this.C = void 0;
        this.A = "";
        Xe.call(this, {element: this.f, render: a.render ? a.render : gn, target: a.target});
        B(this, gb("units"), this.R, this);
        this.D(a.units || "metric")
    }

    y(fn, Xe);
    var hn = [1, 2, 5];
    fn.prototype.wb = function () {
        return this.get("units")
    };
    function gn(a) {
        (a = a.frameState) ? this.v = a.viewState : this.v = null;
        jn(this)
    }

    fn.prototype.R = function () {
        jn(this)
    };
    fn.prototype.D = function (a) {
        this.set("units", a)
    };
    function jn(a) {
        var b = a.v;
        if (b) {
            var c = b.projection, d = c.$b(), b = c.getPointResolution(b.resolution, b.center) * d, d = a.j * b, c = "", e = a.wb();
            "degrees" == e ? (c = uc.degrees, b /= c, d < c / 60 ? (c = "\u2033", b *= 3600) : d < c ? (c = "\u2032", b *= 60) : c = "\u00b0") : "imperial" == e ? .9144 > d ? (c = "in", b /= .0254) : 1609.344 > d ? (c = "ft", b /= .3048) : (c = "mi", b /= 1609.344) : "nautical" == e ? (b /= 1852, c = "nm") : "metric" == e ? 1 > d ? (c = "mm", b *= 1E3) : 1E3 > d ? c = "m" : (c = "km", b /= 1E3) : "us" == e && (.9144 > d ? (c = "in", b *= 39.37) : 1609.344 > d ? (c = "ft", b /= .30480061) : (c = "mi", b /= 1609.3472));
            for (var e =
                3 * Math.floor(Math.log(a.j * b) / Math.log(10)), f; ;) {
                f = hn[(e % 3 + 3) % 3] * Math.pow(10, Math.floor(e / 3));
                d = Math.round(f / b);
                if (isNaN(d)) {
                    a.f.style.display = "none";
                    a.l = !1;
                    return
                }
                if (d >= a.j)break;
                ++e
            }
            b = f + " " + c;
            a.A != b && (a.o.innerHTML = b, a.A = b);
            a.C != d && (a.o.style.width = d + "px", a.C = d);
            a.l || (a.f.style.display = "", a.l = !0)
        } else a.l && (a.f.style.display = "none", a.l = !1)
    }

    function kn(a) {
        a = a ? a : {};
        this.f = void 0;
        this.l = ln;
        this.v = [];
        this.C = this.j = 0;
        this.T = null;
        this.ia = !1;
        this.Y = void 0 !== a.duration ? a.duration : 200;
        var b = void 0 !== a.className ? a.className : "ol-zoomslider", c = document.createElement("button");
        c.setAttribute("type", "button");
        c.className = b + "-thumb ol-unselectable";
        var d = document.createElement("div");
        d.className = b + " ol-unselectable ol-control";
        d.appendChild(c);
        this.o = new Pg(d);
        B(this.o, zg, this.Ik, this);
        B(this.o, Ag, this.Ng, this);
        B(this.o, Bg, this.Og, this);
        B(d, "click",
            this.Hk, this);
        B(c, "click", Ya);
        Xe.call(this, {element: d, render: a.render ? a.render : mn})
    }

    y(kn, Xe);
    kn.prototype.ka = function () {
        Ta(this.o);
        Xe.prototype.ka.call(this)
    };
    var ln = 0;
    k = kn.prototype;
    k.setMap = function (a) {
        Xe.prototype.setMap.call(this, a);
        a && a.render()
    };
    function mn(a) {
        if (a.frameState) {
            if (!this.ia) {
                var b = this.element, c = b.offsetWidth, d = b.offsetHeight, e = b.firstElementChild, f = pa.getComputedStyle(e), b = e.offsetWidth + parseFloat(f.marginRight) + parseFloat(f.marginLeft), e = e.offsetHeight + parseFloat(f.marginTop) + parseFloat(f.marginBottom);
                this.T = [b, e];
                c > d ? (this.l = 1, this.C = c - b) : (this.l = ln, this.j = d - e);
                this.ia = !0
            }
            a = a.frameState.viewState.resolution;
            a !== this.f && (this.f = a, nn(this, a))
        }
    }

    k.Hk = function (a) {
        var b = this.a, c = b.aa(), d = c.$();
        b.Wa(ee({resolution: d, duration: this.Y, easing: Zd}));
        a = on(this, sa(1 === this.l ? (a.offsetX - this.T[0] / 2) / this.C : (a.offsetY - this.T[1] / 2) / this.j, 0, 1));
        c.Ub(c.constrainResolution(a))
    };
    k.Ik = function (a) {
        if (!this.A && a.b.target === this.element.firstElementChild && (Xd(this.a.aa(), 1), this.D = a.clientX, this.R = a.clientY, this.A = !0, 0 === this.v.length)) {
            a = this.Ng;
            var b = this.Og;
            this.v.push(B(document, "mousemove", a, this), B(document, "touchmove", a, this), B(document, Ag, a, this), B(document, "mouseup", b, this), B(document, "touchend", b, this), B(document, Bg, b, this))
        }
    };
    k.Ng = function (a) {
        if (this.A) {
            var b = this.element.firstElementChild;
            this.f = on(this, sa(1 === this.l ? (a.clientX - this.D + parseInt(b.style.left, 10)) / this.C : (a.clientY - this.R + parseInt(b.style.top, 10)) / this.j, 0, 1));
            this.a.aa().Ub(this.f);
            nn(this, this.f);
            this.D = a.clientX;
            this.R = a.clientY
        }
    };
    k.Og = function () {
        if (this.A) {
            var a = this.a, b = a.aa();
            Xd(b, -1);
            a.Wa(ee({resolution: this.f, duration: this.Y, easing: Zd}));
            a = b.constrainResolution(this.f);
            b.Ub(a);
            this.A = !1;
            this.R = this.D = void 0;
            this.v.forEach(Ka);
            this.v.length = 0
        }
    };
    function nn(a, b) {
        var c;
        c = 1 - Vd(a.a.aa())(b);
        var d = a.element.firstElementChild;
        1 == a.l ? d.style.left = a.C * c + "px" : d.style.top = a.j * c + "px"
    }

    function on(a, b) {
        return Ud(a.a.aa())(1 - b)
    }

    function pn(a) {
        a = a ? a : {};
        this.f = a.extent ? a.extent : null;
        var b = void 0 !== a.className ? a.className : "ol-zoom-extent", c = void 0 !== a.label ? a.label : "E", d = void 0 !== a.tipLabel ? a.tipLabel : "Fit to extent", e = document.createElement("button");
        e.setAttribute("type", "button");
        e.title = d;
        e.appendChild("string" === typeof c ? document.createTextNode(c) : c);
        B(e, "click", this.l, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(e);
        Xe.call(this, {element: c, target: a.target})
    }

    y(pn, Xe);
    pn.prototype.l = function (a) {
        a.preventDefault();
        var b = this.a;
        a = b.aa();
        var c = this.f ? this.f : a.l.H(), b = b.Za();
        a.cf(c, b)
    };
    function qn(a) {
        eb.call(this);
        a = a ? a : {};
        this.a = null;
        B(this, gb("tracking"), this.Il, this);
        this.rf(void 0 !== a.tracking ? a.tracking : !1)
    }

    y(qn, eb);
    k = qn.prototype;
    k.ka = function () {
        this.rf(!1);
        eb.prototype.ka.call(this)
    };
    k.co = function (a) {
        if (null !== a.alpha) {
            var b = wa(a.alpha);
            this.set("alpha", b);
            "boolean" === typeof a.absolute && a.absolute ? this.set("heading", b) : ea(a.webkitCompassHeading) && -1 != a.webkitCompassAccuracy && this.set("heading", wa(a.webkitCompassHeading))
        }
        null !== a.beta && this.set("beta", wa(a.beta));
        null !== a.gamma && this.set("gamma", wa(a.gamma));
        this.u()
    };
    k.Oj = function () {
        return this.get("alpha")
    };
    k.Rj = function () {
        return this.get("beta")
    };
    k.Yj = function () {
        return this.get("gamma")
    };
    k.Hl = function () {
        return this.get("heading")
    };
    k.$g = function () {
        return this.get("tracking")
    };
    k.Il = function () {
        if (jg) {
            var a = this.$g();
            a && !this.a ? this.a = B(pa, "deviceorientation", this.co, this) : a || null === this.a || (Ka(this.a), this.a = null)
        }
    };
    k.rf = function (a) {
        this.set("tracking", a)
    };
    function rn() {
        this.defaultDataProjection = null
    }

    function sn(a, b, c) {
        var d;
        c && (d = {
            dataProjection: c.dataProjection ? c.dataProjection : a.Oa(b),
            featureProjection: c.featureProjection
        });
        return tn(a, d)
    }

    function tn(a, b) {
        var c;
        b && (c = {
            featureProjection: b.featureProjection,
            dataProjection: b.dataProjection ? b.dataProjection : a.defaultDataProjection,
            rightHanded: b.rightHanded
        }, b.decimals && (c.decimals = b.decimals));
        return c
    }

    function un(a, b, c) {
        var d = c ? yc(c.featureProjection) : null, e = c ? yc(c.dataProjection) : null, f;
        d && e && !Oc(d, e) ? a instanceof Tc ? f = (b ? a.clone() : a).jb(b ? d : e, b ? e : d) : f = Sc(b ? a.slice() : a, b ? d : e, b ? e : d) : f = a;
        if (b && c && c.decimals) {
            var g = Math.pow(10, c.decimals);
            a = function (a) {
                for (var b = 0, c = a.length; b < c; ++b)a[b] = Math.round(a[b] * g) / g;
                return a
            };
            Array.isArray(f) ? a(f) : f.rc(a)
        }
        return f
    }

    function vn() {
        this.defaultDataProjection = null
    }

    y(vn, rn);
    function wn(a) {
        return fa(a) ? a : "string" === typeof a ? (a = JSON.parse(a)) ? a : null : null
    }

    k = vn.prototype;
    k.X = function () {
        return "json"
    };
    k.Rb = function (a, b) {
        return this.Uc(wn(a), sn(this, a, b))
    };
    k.Fa = function (a, b) {
        return this.Jf(wn(a), sn(this, a, b))
    };
    k.Vc = function (a, b) {
        return this.Rh(wn(a), sn(this, a, b))
    };
    k.Oa = function (a) {
        return this.Yh(wn(a))
    };
    k.Dd = function (a, b) {
        return JSON.stringify(this.Yc(a, b))
    };
    k.Xb = function (a, b) {
        return JSON.stringify(this.Ie(a, b))
    };
    k.Zc = function (a, b) {
        return JSON.stringify(this.Ke(a, b))
    };
    function xn(a, b, c, d, e, f) {
        var g = NaN, h = NaN, l = (c - b) / d;
        if (0 !== l)if (1 == l)g = a[b], h = a[b + 1]; else if (2 == l)g = (1 - e) * a[b] + e * a[b + d], h = (1 - e) * a[b + 1] + e * a[b + d + 1]; else {
            var h = a[b], l = a[b + 1], m = 0, g = [0], n;
            for (n = b + d; n < c; n += d) {
                var p = a[n], q = a[n + 1], m = m + Math.sqrt((p - h) * (p - h) + (q - l) * (q - l));
                g.push(m);
                h = p;
                l = q
            }
            c = e * m;
            l = 0;
            m = g.length;
            for (n = !1; l < m;)e = l + (m - l >> 1), h = +ib(g[e], c), 0 > h ? l = e + 1 : (m = e, n = !h);
            e = n ? l : ~l;
            0 > e ? (c = (c - g[-e - 2]) / (g[-e - 1] - g[-e - 2]), b += (-e - 2) * d, g = za(a[b], a[b + d], c), h = za(a[b + 1], a[b + d + 1], c)) : (g = a[b + e * d], h = a[b + e * d + 1])
        }
        return f ? (f[0] =
            g, f[1] = h, f) : [g, h]
    }

    function yn(a, b, c, d, e, f) {
        if (c == b)return null;
        if (e < a[b + d - 1])return f ? (c = a.slice(b, b + d), c[d - 1] = e, c) : null;
        if (a[c - 1] < e)return f ? (c = a.slice(c - d, c), c[d - 1] = e, c) : null;
        if (e == a[b + d - 1])return a.slice(b, b + d);
        b /= d;
        for (c /= d; b < c;)f = b + c >> 1, e < a[(f + 1) * d - 1] ? c = f : b = f + 1;
        c = a[b * d - 1];
        if (e == c)return a.slice((b - 1) * d, (b - 1) * d + d);
        f = (e - c) / (a[(b + 1) * d - 1] - c);
        c = [];
        var g;
        for (g = 0; g < d - 1; ++g)c.push(za(a[(b - 1) * d + g], a[b * d + g], f));
        c.push(e);
        return c
    }

    function zn(a, b, c, d, e, f) {
        var g = 0;
        if (f)return yn(a, g, b[b.length - 1], c, d, e);
        if (d < a[c - 1])return e ? (a = a.slice(0, c), a[c - 1] = d, a) : null;
        if (a[a.length - 1] < d)return e ? (a = a.slice(a.length - c), a[c - 1] = d, a) : null;
        e = 0;
        for (f = b.length; e < f; ++e) {
            var h = b[e];
            if (g != h) {
                if (d < a[g + c - 1])break;
                if (d <= a[h - 1])return yn(a, g, h, c, d, !1);
                g = h
            }
        }
        return null
    }

    function R(a, b) {
        hd.call(this);
        this.i = null;
        this.C = this.D = this.j = -1;
        this.pa(a, b)
    }

    y(R, hd);
    k = R.prototype;
    k.wj = function (a) {
        this.B ? mb(this.B, a) : this.B = a.slice();
        this.u()
    };
    k.clone = function () {
        var a = new R(null);
        a.ba(this.f, this.B.slice());
        return a
    };
    k.sb = function (a, b, c, d) {
        if (d < Rb(this.H(), a, b))return d;
        this.C != this.g && (this.D = Math.sqrt(od(this.B, 0, this.B.length, this.a, 0)), this.C = this.g);
        return qd(this.B, 0, this.B.length, this.a, this.D, !1, a, b, c, d)
    };
    k.Lj = function (a, b) {
        return Fd(this.B, 0, this.B.length, this.a, a, b)
    };
    k.lm = function (a, b) {
        return "XYM" != this.f && "XYZM" != this.f ? null : yn(this.B, 0, this.B.length, this.a, a, void 0 !== b ? b : !1)
    };
    k.Z = function () {
        return vd(this.B, 0, this.B.length, this.a)
    };
    k.Bg = function (a, b) {
        return xn(this.B, 0, this.B.length, this.a, a, b)
    };
    k.mm = function () {
        var a = this.B, b = this.a, c = a[0], d = a[1], e = 0, f;
        for (f = 0 + b; f < this.B.length; f += b)var g = a[f], h = a[f + 1], e = e + Math.sqrt((g - c) * (g - c) + (h - d) * (h - d)), c = g, d = h;
        return e
    };
    function Fj(a) {
        a.j != a.g && (a.i = a.Bg(.5, a.i), a.j = a.g);
        return a.i
    }

    k.Nc = function (a) {
        var b = [];
        b.length = xd(this.B, 0, this.B.length, this.a, a, b, 0);
        a = new R(null);
        a.ba("XY", b);
        return a
    };
    k.X = function () {
        return "LineString"
    };
    k.Ka = function (a) {
        return Gd(this.B, 0, this.B.length, this.a, a)
    };
    k.pa = function (a, b) {
        a ? (kd(this, b, a, 1), this.B || (this.B = []), this.B.length = td(this.B, 0, a, this.a), this.u()) : this.ba("XY", null)
    };
    k.ba = function (a, b) {
        jd(this, a, b);
        this.u()
    };
    function S(a, b) {
        hd.call(this);
        this.i = [];
        this.j = this.C = -1;
        this.pa(a, b)
    }

    y(S, hd);
    k = S.prototype;
    k.xj = function (a) {
        this.B ? mb(this.B, a.la().slice()) : this.B = a.la().slice();
        this.i.push(this.B.length);
        this.u()
    };
    k.clone = function () {
        var a = new S(null);
        a.ba(this.f, this.B.slice(), this.i.slice());
        return a
    };
    k.sb = function (a, b, c, d) {
        if (d < Rb(this.H(), a, b))return d;
        this.j != this.g && (this.C = Math.sqrt(pd(this.B, 0, this.i, this.a, 0)), this.j = this.g);
        return rd(this.B, 0, this.i, this.a, this.C, !1, a, b, c, d)
    };
    k.om = function (a, b, c) {
        return "XYM" != this.f && "XYZM" != this.f || 0 === this.B.length ? null : zn(this.B, this.i, this.a, a, void 0 !== b ? b : !1, void 0 !== c ? c : !1)
    };
    k.Z = function () {
        return wd(this.B, 0, this.i, this.a)
    };
    k.Db = function () {
        return this.i
    };
    k.fk = function (a) {
        if (0 > a || this.i.length <= a)return null;
        var b = new R(null);
        b.ba(this.f, this.B.slice(0 === a ? 0 : this.i[a - 1], this.i[a]));
        return b
    };
    k.md = function () {
        var a = this.B, b = this.i, c = this.f, d = [], e = 0, f, g;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var h = b[f], l = new R(null);
            l.ba(c, a.slice(e, h));
            d.push(l);
            e = h
        }
        return d
    };
    function Gj(a) {
        var b = [], c = a.B, d = 0, e = a.i;
        a = a.a;
        var f, g;
        f = 0;
        for (g = e.length; f < g; ++f) {
            var h = e[f], d = xn(c, d, h, a, .5);
            mb(b, d);
            d = h
        }
        return b
    }

    k.Nc = function (a) {
        var b = [], c = [], d = this.B, e = this.i, f = this.a, g = 0, h = 0, l, m;
        l = 0;
        for (m = e.length; l < m; ++l) {
            var n = e[l], h = xd(d, g, n, f, a, b, h);
            c.push(h);
            g = n
        }
        b.length = h;
        a = new S(null);
        a.ba("XY", b, c);
        return a
    };
    k.X = function () {
        return "MultiLineString"
    };
    k.Ka = function (a) {
        a:{
            var b = this.B, c = this.i, d = this.a, e = 0, f, g;
            f = 0;
            for (g = c.length; f < g; ++f) {
                if (Gd(b, e, c[f], d, a)) {
                    a = !0;
                    break a
                }
                e = c[f]
            }
            a = !1
        }
        return a
    };
    k.pa = function (a, b) {
        if (a) {
            kd(this, b, a, 2);
            this.B || (this.B = []);
            var c = ud(this.B, 0, a, this.a, this.i);
            this.B.length = 0 === c.length ? 0 : c[c.length - 1];
            this.u()
        } else this.ba("XY", null, this.i)
    };
    k.ba = function (a, b, c) {
        jd(this, a, b);
        this.i = c;
        this.u()
    };
    function An(a, b) {
        var c = a.f, d = [], e = [], f, g;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var h = b[f];
            0 === f && (c = h.f);
            mb(d, h.la());
            e.push(d.length)
        }
        a.ba(c, d, e)
    }

    function Bn(a, b) {
        hd.call(this);
        this.pa(a, b)
    }

    y(Bn, hd);
    k = Bn.prototype;
    k.zj = function (a) {
        this.B ? mb(this.B, a.la()) : this.B = a.la().slice();
        this.u()
    };
    k.clone = function () {
        var a = new Bn(null);
        a.ba(this.f, this.B.slice());
        return a
    };
    k.sb = function (a, b, c, d) {
        if (d < Rb(this.H(), a, b))return d;
        var e = this.B, f = this.a, g, h, l;
        g = 0;
        for (h = e.length; g < h; g += f)if (l = va(a, b, e[g], e[g + 1]), l < d) {
            d = l;
            for (l = 0; l < f; ++l)c[l] = e[g + l];
            c.length = f
        }
        return d
    };
    k.Z = function () {
        return vd(this.B, 0, this.B.length, this.a)
    };
    k.rk = function (a) {
        var b = this.B ? this.B.length / this.a : 0;
        if (0 > a || b <= a)return null;
        b = new C(null);
        b.ba(this.f, this.B.slice(a * this.a, (a + 1) * this.a));
        return b
    };
    k.je = function () {
        var a = this.B, b = this.f, c = this.a, d = [], e, f;
        e = 0;
        for (f = a.length; e < f; e += c) {
            var g = new C(null);
            g.ba(b, a.slice(e, e + c));
            d.push(g)
        }
        return d
    };
    k.X = function () {
        return "MultiPoint"
    };
    k.Ka = function (a) {
        var b = this.B, c = this.a, d, e, f, g;
        d = 0;
        for (e = b.length; d < e; d += c)if (f = b[d], g = b[d + 1], Tb(a, f, g))return !0;
        return !1
    };
    k.pa = function (a, b) {
        a ? (kd(this, b, a, 1), this.B || (this.B = []), this.B.length = td(this.B, 0, a, this.a), this.u()) : this.ba("XY", null)
    };
    k.ba = function (a, b) {
        jd(this, a, b);
        this.u()
    };
    function T(a, b) {
        hd.call(this);
        this.i = [];
        this.C = -1;
        this.D = null;
        this.T = this.R = this.S = -1;
        this.j = null;
        this.pa(a, b)
    }

    y(T, hd);
    k = T.prototype;
    k.Aj = function (a) {
        if (this.B) {
            var b = this.B.length;
            mb(this.B, a.la());
            a = a.Db().slice();
            var c, d;
            c = 0;
            for (d = a.length; c < d; ++c)a[c] += b
        } else this.B = a.la().slice(), a = a.Db().slice(), this.i.push();
        this.i.push(a);
        this.u()
    };
    k.clone = function () {
        for (var a = new T(null), b = this.i.length, c = Array(b), d = 0; d < b; ++d)c[d] = this.i[d].slice();
        Cn(a, this.f, this.B.slice(), c);
        return a
    };
    k.sb = function (a, b, c, d) {
        if (d < Rb(this.H(), a, b))return d;
        if (this.R != this.g) {
            var e = this.i, f = 0, g = 0, h, l;
            h = 0;
            for (l = e.length; h < l; ++h)var m = e[h], g = pd(this.B, f, m, this.a, g), f = m[m.length - 1];
            this.S = Math.sqrt(g);
            this.R = this.g
        }
        e = Hj(this);
        f = this.i;
        g = this.a;
        h = this.S;
        l = 0;
        var m = [NaN, NaN], n, p;
        n = 0;
        for (p = f.length; n < p; ++n) {
            var q = f[n];
            d = rd(e, l, q, g, h, !0, a, b, c, d, m);
            l = q[q.length - 1]
        }
        return d
    };
    k.Bc = function (a, b) {
        var c;
        a:{
            c = Hj(this);
            var d = this.i, e = 0;
            if (0 !== d.length) {
                var f, g;
                f = 0;
                for (g = d.length; f < g; ++f) {
                    var h = d[f];
                    if (Dd(c, e, h, this.a, a, b)) {
                        c = !0;
                        break a
                    }
                    e = h[h.length - 1]
                }
            }
            c = !1
        }
        return c
    };
    k.pm = function () {
        var a = Hj(this), b = this.i, c = 0, d = 0, e, f;
        e = 0;
        for (f = b.length; e < f; ++e)var g = b[e], d = d + md(a, c, g, this.a), c = g[g.length - 1];
        return d
    };
    k.Z = function (a) {
        var b;
        void 0 !== a ? (b = Hj(this).slice(), Ld(b, this.i, this.a, a)) : b = this.B;
        a = b;
        b = this.i;
        var c = this.a, d = 0, e = [], f = 0, g, h;
        g = 0;
        for (h = b.length; g < h; ++g) {
            var l = b[g];
            e[f++] = wd(a, d, l, c, e[f]);
            d = l[l.length - 1]
        }
        e.length = f;
        return e
    };
    function Ij(a) {
        if (a.C != a.g) {
            var b = a.B, c = a.i, d = a.a, e = 0, f = [], g, h;
            g = 0;
            for (h = c.length; g < h; ++g) {
                var l = c[g], e = Yb(b, e, l[0], d);
                f.push((e[0] + e[2]) / 2, (e[1] + e[3]) / 2);
                e = l[l.length - 1]
            }
            b = Hj(a);
            c = a.i;
            d = a.a;
            g = 0;
            h = [];
            l = 0;
            for (e = c.length; l < e; ++l) {
                var m = c[l];
                h = Ed(b, g, m, d, f, 2 * l, h);
                g = m[m.length - 1]
            }
            a.D = h;
            a.C = a.g
        }
        return a.D
    }

    k.ck = function () {
        var a = new Bn(null);
        a.ba("XY", Ij(this).slice());
        return a
    };
    function Hj(a) {
        if (a.T != a.g) {
            var b = a.B, c;
            a:{
                c = a.i;
                var d, e;
                d = 0;
                for (e = c.length; d < e; ++d)if (!Jd(b, c[d], a.a, void 0)) {
                    c = !1;
                    break a
                }
                c = !0
            }
            c ? a.j = b : (a.j = b.slice(), a.j.length = Ld(a.j, a.i, a.a));
            a.T = a.g
        }
        return a.j
    }

    k.Nc = function (a) {
        var b = [], c = [], d = this.B, e = this.i, f = this.a;
        a = Math.sqrt(a);
        var g = 0, h = 0, l, m;
        l = 0;
        for (m = e.length; l < m; ++l) {
            var n = e[l], p = [], h = yd(d, g, n, f, a, b, h, p);
            c.push(p);
            g = n[n.length - 1]
        }
        b.length = h;
        d = new T(null);
        Cn(d, "XY", b, c);
        return d
    };
    k.tk = function (a) {
        if (0 > a || this.i.length <= a)return null;
        var b;
        0 === a ? b = 0 : (b = this.i[a - 1], b = b[b.length - 1]);
        a = this.i[a].slice();
        var c = a[a.length - 1];
        if (0 !== b) {
            var d, e;
            d = 0;
            for (e = a.length; d < e; ++d)a[d] -= b
        }
        d = new E(null);
        d.ba(this.f, this.B.slice(b, c), a);
        return d
    };
    k.Wd = function () {
        var a = this.f, b = this.B, c = this.i, d = [], e = 0, f, g, h, l;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var m = c[f].slice(), n = m[m.length - 1];
            if (0 !== e)for (h = 0, l = m.length; h < l; ++h)m[h] -= e;
            h = new E(null);
            h.ba(a, b.slice(e, n), m);
            d.push(h);
            e = n
        }
        return d
    };
    k.X = function () {
        return "MultiPolygon"
    };
    k.Ka = function (a) {
        a:{
            var b = Hj(this), c = this.i, d = this.a, e = 0, f, g;
            f = 0;
            for (g = c.length; f < g; ++f) {
                var h = c[f];
                if (Hd(b, e, h, d, a)) {
                    a = !0;
                    break a
                }
                e = h[h.length - 1]
            }
            a = !1
        }
        return a
    };
    k.pa = function (a, b) {
        if (a) {
            kd(this, b, a, 3);
            this.B || (this.B = []);
            var c = this.B, d = this.a, e = this.i, f = 0, e = e ? e : [], g = 0, h, l;
            h = 0;
            for (l = a.length; h < l; ++h)f = ud(c, f, a[h], d, e[g]), e[g++] = f, f = f[f.length - 1];
            e.length = g;
            0 === e.length ? this.B.length = 0 : (c = e[e.length - 1], this.B.length = 0 === c.length ? 0 : c[c.length - 1]);
            this.u()
        } else Cn(this, "XY", null, this.i)
    };
    function Cn(a, b, c, d) {
        jd(a, b, c);
        a.i = d;
        a.u()
    }

    function Dn(a, b) {
        var c = a.f, d = [], e = [], f, g, h;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var l = b[f];
            0 === f && (c = l.f);
            var m = d.length;
            h = l.Db();
            var n, p;
            n = 0;
            for (p = h.length; n < p; ++n)h[n] += m;
            mb(d, l.la());
            e.push(h)
        }
        Cn(a, c, d, e)
    }

    function En(a) {
        a = a ? a : {};
        this.defaultDataProjection = null;
        this.b = a.geometryName
    }

    y(En, vn);
    function Fn(a, b) {
        if (!a)return null;
        var c;
        if (ea(a.x) && ea(a.y))c = "Point"; else if (a.points)c = "MultiPoint"; else if (a.paths)c = 1 === a.paths.length ? "LineString" : "MultiLineString"; else if (a.rings) {
            var d = a.rings, e = Gn(a), f = [];
            c = [];
            var g, h;
            g = 0;
            for (h = d.length; g < h; ++g) {
                var l = lb(d[g]);
                Id(l, 0, l.length, e.length) ? f.push([d[g]]) : c.push(d[g])
            }
            for (; c.length;) {
                d = c.shift();
                e = !1;
                for (g = f.length - 1; 0 <= g; g--)if (Ub((new zd(f[g][0])).H(), (new zd(d)).H())) {
                    f[g].push(d);
                    e = !0;
                    break
                }
                e || f.push([d.reverse()])
            }
            a = Ea({}, a);
            1 === f.length ?
                (c = "Polygon", a.rings = f[0]) : (c = "MultiPolygon", a.rings = f)
        }
        return un((0, Hn[c])(a), !1, b)
    }

    function Gn(a) {
        var b = "XY";
        !0 === a.hasZ && !0 === a.hasM ? b = "XYZM" : !0 === a.hasZ ? b = "XYZ" : !0 === a.hasM && (b = "XYM");
        return b
    }

    function In(a) {
        a = a.f;
        return {hasZ: "XYZ" === a || "XYZM" === a, hasM: "XYM" === a || "XYZM" === a}
    }

    var Hn = {
        Point: function (a) {
            return void 0 !== a.m && void 0 !== a.z ? new C([a.x, a.y, a.z, a.m], "XYZM") : void 0 !== a.z ? new C([a.x, a.y, a.z], "XYZ") : void 0 !== a.m ? new C([a.x, a.y, a.m], "XYM") : new C([a.x, a.y])
        }, LineString: function (a) {
            return new R(a.paths[0], Gn(a))
        }, Polygon: function (a) {
            return new E(a.rings, Gn(a))
        }, MultiPoint: function (a) {
            return new Bn(a.points, Gn(a))
        }, MultiLineString: function (a) {
            return new S(a.paths, Gn(a))
        }, MultiPolygon: function (a) {
            return new T(a.rings, Gn(a))
        }
    }, Jn = {
        Point: function (a) {
            var b = a.Z();
            a = a.f;
            if ("XYZ" ===
                a)return {x: b[0], y: b[1], z: b[2]};
            if ("XYM" === a)return {x: b[0], y: b[1], m: b[2]};
            if ("XYZM" === a)return {x: b[0], y: b[1], z: b[2], m: b[3]};
            if ("XY" === a)return {x: b[0], y: b[1]}
        }, LineString: function (a) {
            var b = In(a);
            return {hasZ: b.hasZ, hasM: b.hasM, paths: [a.Z()]}
        }, Polygon: function (a) {
            var b = In(a);
            return {hasZ: b.hasZ, hasM: b.hasM, rings: a.Z(!1)}
        }, MultiPoint: function (a) {
            var b = In(a);
            return {hasZ: b.hasZ, hasM: b.hasM, points: a.Z()}
        }, MultiLineString: function (a) {
            var b = In(a);
            return {hasZ: b.hasZ, hasM: b.hasM, paths: a.Z()}
        }, MultiPolygon: function (a) {
            var b =
                In(a);
            a = a.Z(!1);
            for (var c = [], d = 0; d < a.length; d++)for (var e = a[d].length - 1; 0 <= e; e--)c.push(a[d][e]);
            return {hasZ: b.hasZ, hasM: b.hasM, rings: c}
        }
    };
    k = En.prototype;
    k.Uc = function (a, b) {
        var c = Fn(a.geometry, b), d = new Ik;
        this.b && d.Ec(this.b);
        d.Ua(c);
        b && b.mf && a.attributes[b.mf] && d.mc(a.attributes[b.mf]);
        a.attributes && d.G(a.attributes);
        return d
    };
    k.Jf = function (a, b) {
        var c = b ? b : {};
        if (a.features) {
            var d = [], e = a.features, f, g;
            c.mf = a.objectIdFieldName;
            f = 0;
            for (g = e.length; f < g; ++f)d.push(this.Uc(e[f], c));
            return d
        }
        return [this.Uc(a, c)]
    };
    k.Rh = function (a, b) {
        return Fn(a, b)
    };
    k.Yh = function (a) {
        return a.spatialReference && a.spatialReference.wkid ? yc("EPSG:" + a.spatialReference.wkid) : null
    };
    function Kn(a, b) {
        return (0, Jn[a.X()])(un(a, !0, b), b)
    }

    k.Ke = function (a, b) {
        return Kn(a, tn(this, b))
    };
    k.Yc = function (a, b) {
        b = tn(this, b);
        var c = {}, d = a.W();
        d && (c.geometry = Kn(d, b));
        d = a.O();
        delete d[a.a];
        c.attributes = Ha(d) ? {} : d;
        b && b.featureProjection && (c.spatialReference = {wkid: yc(b.featureProjection).cb.split(":").pop()});
        return c
    };
    k.Ie = function (a, b) {
        b = tn(this, b);
        var c = [], d, e;
        d = 0;
        for (e = a.length; d < e; ++d)c.push(this.Yc(a[d], b));
        return {features: c}
    };
    function Ln(a) {
        Tc.call(this);
        this.c = a ? a : null;
        Mn(this)
    }

    y(Ln, Tc);
    function Nn(a) {
        var b = [], c, d;
        c = 0;
        for (d = a.length; c < d; ++c)b.push(a[c].clone());
        return b
    }

    function On(a) {
        var b, c;
        if (a.c)for (b = 0, c = a.c.length; b < c; ++b)Qa(a.c[b], "change", a.u, a)
    }

    function Mn(a) {
        var b, c;
        if (a.c)for (b = 0, c = a.c.length; b < c; ++b)B(a.c[b], "change", a.u, a)
    }

    k = Ln.prototype;
    k.clone = function () {
        var a = new Ln(null);
        a.hi(this.c);
        return a
    };
    k.sb = function (a, b, c, d) {
        if (d < Rb(this.H(), a, b))return d;
        var e = this.c, f, g;
        f = 0;
        for (g = e.length; f < g; ++f)d = e[f].sb(a, b, c, d);
        return d
    };
    k.Bc = function (a, b) {
        var c = this.c, d, e;
        d = 0;
        for (e = c.length; d < e; ++d)if (c[d].Bc(a, b))return !0;
        return !1
    };
    k.Od = function (a) {
        Wb(Infinity, Infinity, -Infinity, -Infinity, a);
        for (var b = this.c, c = 0, d = b.length; c < d; ++c)ac(a, b[c].H());
        return a
    };
    k.ff = function () {
        return Nn(this.c)
    };
    k.od = function (a) {
        this.s != this.g && (Fa(this.l), this.o = 0, this.s = this.g);
        if (0 > a || 0 !== this.o && a < this.o)return this;
        var b = a.toString();
        if (this.l.hasOwnProperty(b))return this.l[b];
        var c = [], d = this.c, e = !1, f, g;
        f = 0;
        for (g = d.length; f < g; ++f) {
            var h = d[f], l = h.od(a);
            c.push(l);
            l !== h && (e = !0)
        }
        if (e)return a = new Ln(null), On(a), a.c = c, Mn(a), a.u(), this.l[b] = a;
        this.o = a;
        return this
    };
    k.X = function () {
        return "GeometryCollection"
    };
    k.Ka = function (a) {
        var b = this.c, c, d;
        c = 0;
        for (d = b.length; c < d; ++c)if (b[c].Ka(a))return !0;
        return !1
    };
    k.Ya = function () {
        return 0 === this.c.length
    };
    k.rotate = function (a, b) {
        for (var c = this.c, d = 0, e = c.length; d < e; ++d)c[d].rotate(a, b);
        this.u()
    };
    k.hi = function (a) {
        a = Nn(a);
        On(this);
        this.c = a;
        Mn(this);
        this.u()
    };
    k.rc = function (a) {
        var b = this.c, c, d;
        c = 0;
        for (d = b.length; c < d; ++c)b[c].rc(a);
        this.u()
    };
    k.Sc = function (a, b) {
        var c = this.c, d, e;
        d = 0;
        for (e = c.length; d < e; ++d)c[d].Sc(a, b);
        this.u()
    };
    k.ka = function () {
        On(this);
        Tc.prototype.ka.call(this)
    };
    function Pn(a) {
        a = a ? a : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = yc(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326");
        this.b = a.geometryName
    }

    y(Pn, vn);
    function Qn(a, b) {
        return a ? un((0, Rn[a.type])(a), !1, b) : null
    }

    function Sn(a, b) {
        return (0, Tn[a.X()])(un(a, !0, b), b)
    }

    var Rn = {
        Point: function (a) {
            return new C(a.coordinates)
        }, LineString: function (a) {
            return new R(a.coordinates)
        }, Polygon: function (a) {
            return new E(a.coordinates)
        }, MultiPoint: function (a) {
            return new Bn(a.coordinates)
        }, MultiLineString: function (a) {
            return new S(a.coordinates)
        }, MultiPolygon: function (a) {
            return new T(a.coordinates)
        }, GeometryCollection: function (a, b) {
            var c = a.geometries.map(function (a) {
                return Qn(a, b)
            });
            return new Ln(c)
        }
    }, Tn = {
        Point: function (a) {
            return {type: "Point", coordinates: a.Z()}
        }, LineString: function (a) {
            return {
                type: "LineString",
                coordinates: a.Z()
            }
        }, Polygon: function (a, b) {
            var c;
            b && (c = b.rightHanded);
            return {type: "Polygon", coordinates: a.Z(c)}
        }, MultiPoint: function (a) {
            return {type: "MultiPoint", coordinates: a.Z()}
        }, MultiLineString: function (a) {
            return {type: "MultiLineString", coordinates: a.Z()}
        }, MultiPolygon: function (a, b) {
            var c;
            b && (c = b.rightHanded);
            return {type: "MultiPolygon", coordinates: a.Z(c)}
        }, GeometryCollection: function (a, b) {
            return {
                type: "GeometryCollection", geometries: a.c.map(function (a) {
                    var d = Ea({}, b);
                    delete d.featureProjection;
                    return Sn(a,
                        d)
                })
            }
        }, Circle: function () {
            return {type: "GeometryCollection", geometries: []}
        }
    };
    k = Pn.prototype;
    k.Uc = function (a, b) {
        var c = Qn(a.geometry, b), d = new Ik;
        this.b && d.Ec(this.b);
        d.Ua(c);
        void 0 !== a.id && d.mc(a.id);
        a.properties && d.G(a.properties);
        return d
    };
    k.Jf = function (a, b) {
        if ("Feature" == a.type)return [this.Uc(a, b)];
        if ("FeatureCollection" == a.type) {
            var c = [], d = a.features, e, f;
            e = 0;
            for (f = d.length; e < f; ++e)c.push(this.Uc(d[e], b));
            return c
        }
        return []
    };
    k.Rh = function (a, b) {
        return Qn(a, b)
    };
    k.Yh = function (a) {
        return (a = a.crs) ? "name" == a.type ? yc(a.properties.name) : "EPSG" == a.type ? yc("EPSG:" + a.properties.code) : null : this.defaultDataProjection
    };
    k.Yc = function (a, b) {
        b = tn(this, b);
        var c = {type: "Feature"}, d = a.Xa();
        void 0 !== d && (c.id = d);
        (d = a.W()) ? c.geometry = Sn(d, b) : c.geometry = null;
        d = a.O();
        delete d[a.a];
        Ha(d) ? c.properties = null : c.properties = d;
        return c
    };
    k.Ie = function (a, b) {
        b = tn(this, b);
        var c = [], d, e;
        d = 0;
        for (e = a.length; d < e; ++d)c.push(this.Yc(a[d], b));
        return {type: "FeatureCollection", features: c}
    };
    k.Ke = function (a, b) {
        return Sn(a, tn(this, b))
    };
    function Un() {
        this.f = new XMLSerializer;
        this.defaultDataProjection = null
    }

    y(Un, rn);
    k = Un.prototype;
    k.X = function () {
        return "xml"
    };
    k.Rb = function (a, b) {
        if (Pk(a))return Vn(this, a, b);
        if (Qk(a))return this.Ph(a, b);
        if ("string" === typeof a) {
            var c = Rk(a);
            return Vn(this, c, b)
        }
        return null
    };
    function Vn(a, b, c) {
        a = Wn(a, b, c);
        return 0 < a.length ? a[0] : null
    }

    k.Fa = function (a, b) {
        if (Pk(a))return Wn(this, a, b);
        if (Qk(a))return this.lc(a, b);
        if ("string" === typeof a) {
            var c = Rk(a);
            return Wn(this, c, b)
        }
        return []
    };
    function Wn(a, b, c) {
        var d = [];
        for (b = b.firstChild; b; b = b.nextSibling)b.nodeType == Node.ELEMENT_NODE && mb(d, a.lc(b, c));
        return d
    }

    k.Vc = function (a, b) {
        if (Pk(a))return this.v(a, b);
        if (Qk(a)) {
            var c = this.ye(a, [sn(this, a, b ? b : {})]);
            return c ? c : null
        }
        return "string" === typeof a ? (c = Rk(a), this.v(c, b)) : null
    };
    k.Oa = function (a) {
        return Pk(a) ? this.Pf(a) : Qk(a) ? this.Be(a) : "string" === typeof a ? (a = Rk(a), this.Pf(a)) : null
    };
    k.Pf = function () {
        return this.defaultDataProjection
    };
    k.Be = function () {
        return this.defaultDataProjection
    };
    k.Dd = function (a, b) {
        var c = this.A(a, b);
        return this.f.serializeToString(c)
    };
    k.Xb = function (a, b) {
        var c = this.a(a, b);
        return this.f.serializeToString(c)
    };
    k.Zc = function (a, b) {
        var c = this.s(a, b);
        return this.f.serializeToString(c)
    };
    function Xn(a) {
        a = a ? a : {};
        this.featureType = a.featureType;
        this.featureNS = a.featureNS;
        this.srsName = a.srsName;
        this.schemaLocation = "";
        this.b = {};
        this.b["http://www.opengis.net/gml"] = {
            featureMember: Uk(Xn.prototype.vd),
            featureMembers: Uk(Xn.prototype.vd)
        };
        Un.call(this)
    }

    y(Xn, Un);
    var Yn = /^[\s\xa0]*$/;
    k = Xn.prototype;
    k.vd = function (a, b) {
        var c = a.localName, d = null;
        if ("FeatureCollection" == c)"http://www.opengis.net/wfs" === a.namespaceURI ? d = O([], this.b, a, b, this) : d = O(null, this.b, a, b, this); else if ("featureMembers" == c || "featureMember" == c) {
            var e = b[0], f = e.featureType, g = e.featureNS, h, l;
            if (!f && a.childNodes) {
                f = [];
                g = {};
                h = 0;
                for (l = a.childNodes.length; h < l; ++h) {
                    var m = a.childNodes[h];
                    if (1 === m.nodeType) {
                        var n = m.nodeName.split(":").pop();
                        if (-1 === f.indexOf(n)) {
                            var p = "", q = 0, m = m.namespaceURI, r;
                            for (r in g) {
                                if (g[r] === m) {
                                    p = r;
                                    break
                                }
                                ++q
                            }
                            p ||
                            (p = "p" + q, g[p] = m);
                            f.push(p + ":" + n)
                        }
                    }
                }
                "featureMember" != c && (e.featureType = f, e.featureNS = g)
            }
            "string" === typeof g && (h = g, g = {}, g.p0 = h);
            var e = {}, f = Array.isArray(f) ? f : [f], u;
            for (u in g) {
                n = {};
                h = 0;
                for (l = f.length; h < l; ++h)(-1 === f[h].indexOf(":") ? "p0" : f[h].split(":")[0]) === u && (n[f[h].split(":").pop()] = "featureMembers" == c ? Tk(this.If, this) : Uk(this.If, this));
                e[g[u]] = n
            }
            "featureMember" == c ? d = O(void 0, e, a, b) : d = O([], e, a, b)
        }
        null === d && (d = []);
        return d
    };
    k.ye = function (a, b) {
        var c = b[0];
        c.srsName = a.firstElementChild.getAttribute("srsName");
        var d = O(null, this.bg, a, b, this);
        if (d)return un(d, !1, c)
    };
    k.If = function (a, b) {
        var c, d;
        (d = a.getAttribute("fid")) || (d = a.getAttributeNS("http://www.opengis.net/gml", "id") || "");
        var e = {}, f;
        for (c = a.firstElementChild; c; c = c.nextElementSibling) {
            var g = c.localName;
            if (0 === c.childNodes.length || 1 === c.childNodes.length && (3 === c.firstChild.nodeType || 4 === c.firstChild.nodeType)) {
                var h = Nk(c, !1);
                Yn.test(h) && (h = void 0);
                e[g] = h
            } else"boundedBy" !== g && (f = g), e[g] = this.ye(c, b)
        }
        c = new Ik(e);
        f && c.Ec(f);
        d && c.mc(d);
        return c
    };
    k.Xh = function (a, b) {
        var c = this.xe(a, b);
        if (c) {
            var d = new C(null);
            d.ba("XYZ", c);
            return d
        }
    };
    k.Vh = function (a, b) {
        var c = O([], this.Ui, a, b, this);
        if (c)return new Bn(c)
    };
    k.Uh = function (a, b) {
        var c = O([], this.Ti, a, b, this);
        if (c) {
            var d = new S(null);
            An(d, c);
            return d
        }
    };
    k.Wh = function (a, b) {
        var c = O([], this.Vi, a, b, this);
        if (c) {
            var d = new T(null);
            Dn(d, c);
            return d
        }
    };
    k.Mh = function (a, b) {
        al(this.Yi, a, b, this)
    };
    k.Ug = function (a, b) {
        al(this.Ri, a, b, this)
    };
    k.Nh = function (a, b) {
        al(this.Zi, a, b, this)
    };
    k.ze = function (a, b) {
        var c = this.xe(a, b);
        if (c) {
            var d = new R(null);
            d.ba("XYZ", c);
            return d
        }
    };
    k.zo = function (a, b) {
        var c = O(null, this.Fd, a, b, this);
        if (c)return c
    };
    k.Th = function (a, b) {
        var c = this.xe(a, b);
        if (c) {
            var d = new zd(null);
            Ad(d, "XYZ", c);
            return d
        }
    };
    k.Ae = function (a, b) {
        var c = O([null], this.Me, a, b, this);
        if (c && c[0]) {
            var d = new E(null), e = c[0], f = [e.length], g, h;
            g = 1;
            for (h = c.length; g < h; ++g)mb(e, c[g]), f.push(e.length);
            d.ba("XYZ", e, f);
            return d
        }
    };
    k.xe = function (a, b) {
        return O(null, this.Fd, a, b, this)
    };
    k.Ui = {"http://www.opengis.net/gml": {pointMember: Tk(Xn.prototype.Mh), pointMembers: Tk(Xn.prototype.Mh)}};
    k.Ti = {
        "http://www.opengis.net/gml": {
            lineStringMember: Tk(Xn.prototype.Ug),
            lineStringMembers: Tk(Xn.prototype.Ug)
        }
    };
    k.Vi = {"http://www.opengis.net/gml": {polygonMember: Tk(Xn.prototype.Nh), polygonMembers: Tk(Xn.prototype.Nh)}};
    k.Yi = {"http://www.opengis.net/gml": {Point: Tk(Xn.prototype.xe)}};
    k.Ri = {"http://www.opengis.net/gml": {LineString: Tk(Xn.prototype.ze)}};
    k.Zi = {"http://www.opengis.net/gml": {Polygon: Tk(Xn.prototype.Ae)}};
    k.Gd = {"http://www.opengis.net/gml": {LinearRing: Uk(Xn.prototype.zo)}};
    k.lc = function (a, b) {
        var c = {featureType: this.featureType, featureNS: this.featureNS};
        b && Ea(c, sn(this, a, b));
        return this.vd(a, [c]) || []
    };
    k.Be = function (a) {
        return yc(this.srsName ? this.srsName : a.firstElementChild.getAttribute("srsName"))
    };
    function Zn(a) {
        a = Nk(a, !1);
        return $n(a)
    }

    function $n(a) {
        if (a = /^\s*(true|1)|(false|0)\s*$/.exec(a))return void 0 !== a[1] || !1
    }

    function ao(a) {
        a = Nk(a, !1);
        if (a = /^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/.exec(a)) {
            var b = Date.UTC(parseInt(a[1], 10), parseInt(a[2], 10) - 1, parseInt(a[3], 10), parseInt(a[4], 10), parseInt(a[5], 10), parseInt(a[6], 10)) / 1E3;
            if ("Z" != a[7]) {
                var c = "-" == a[8] ? -1 : 1, b = b + 60 * c * parseInt(a[9], 10);
                void 0 !== a[10] && (b += 3600 * c * parseInt(a[10], 10))
            }
            return b
        }
    }

    function bo(a) {
        a = Nk(a, !1);
        return co(a)
    }

    function co(a) {
        if (a = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a))return parseFloat(a[1])
    }

    function eo(a) {
        a = Nk(a, !1);
        return fo(a)
    }

    function fo(a) {
        if (a = /^\s*(\d+)\s*$/.exec(a))return parseInt(a[1], 10)
    }

    function U(a) {
        return Nk(a, !1).trim()
    }

    function go(a, b) {
        ho(a, b ? "1" : "0")
    }

    function io(a, b) {
        a.appendChild(Lk.createTextNode(b.toPrecision()))
    }

    function jo(a, b) {
        a.appendChild(Lk.createTextNode(b.toString()))
    }

    function ho(a, b) {
        a.appendChild(Lk.createTextNode(b))
    }

    function ko(a) {
        a = a ? a : {};
        Xn.call(this, a);
        this.b["http://www.opengis.net/gml"].featureMember = Tk(Xn.prototype.vd);
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"
    }

    y(ko, Xn);
    k = ko.prototype;
    k.Qh = function (a, b) {
        var c = Nk(a, !1).replace(/^\s*|\s*$/g, ""), d = b[0].srsName, e = a.parentNode.getAttribute("srsDimension"), f = "enu";
        d && (d = yc(d)) && (f = d.b);
        c = c.split(/[\s,]+/);
        d = 2;
        a.getAttribute("srsDimension") ? d = fo(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? d = fo(a.getAttribute("dimension")) : e && (d = fo(e));
        for (var g, h, l = [], m = 0, n = c.length; m < n; m += d)e = parseFloat(c[m]), g = parseFloat(c[m + 1]), h = 3 === d ? parseFloat(c[m + 2]) : 0, "en" === f.substr(0, 2) ? l.push(e, g, h) : l.push(g, e, h);
        return l
    };
    k.wo = function (a, b) {
        var c = O([null], this.Ni, a, b, this);
        return Wb(c[1][0], c[1][1], c[1][3], c[1][4])
    };
    k.ml = function (a, b) {
        var c = O(void 0, this.Gd, a, b, this);
        c && b[b.length - 1].push(c)
    };
    k.eo = function (a, b) {
        var c = O(void 0, this.Gd, a, b, this);
        c && (b[b.length - 1][0] = c)
    };
    k.Fd = {"http://www.opengis.net/gml": {coordinates: Uk(ko.prototype.Qh)}};
    k.Me = {"http://www.opengis.net/gml": {innerBoundaryIs: ko.prototype.ml, outerBoundaryIs: ko.prototype.eo}};
    k.Ni = {"http://www.opengis.net/gml": {coordinates: Tk(ko.prototype.Qh)}};
    k.bg = {
        "http://www.opengis.net/gml": {
            Point: Uk(Xn.prototype.Xh),
            MultiPoint: Uk(Xn.prototype.Vh),
            LineString: Uk(Xn.prototype.ze),
            MultiLineString: Uk(Xn.prototype.Uh),
            LinearRing: Uk(Xn.prototype.Th),
            Polygon: Uk(Xn.prototype.Ae),
            MultiPolygon: Uk(Xn.prototype.Wh),
            Box: Uk(ko.prototype.wo)
        }
    };
    function lo(a) {
        a = a ? a : {};
        Xn.call(this, a);
        this.j = void 0 !== a.surface ? a.surface : !1;
        this.i = void 0 !== a.curve ? a.curve : !1;
        this.l = void 0 !== a.multiCurve ? a.multiCurve : !0;
        this.o = void 0 !== a.multiSurface ? a.multiSurface : !0;
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"
    }

    y(lo, Xn);
    k = lo.prototype;
    k.Do = function (a, b) {
        var c = O([], this.Si, a, b, this);
        if (c) {
            var d = new S(null);
            An(d, c);
            return d
        }
    };
    k.Eo = function (a, b) {
        var c = O([], this.Wi, a, b, this);
        if (c) {
            var d = new T(null);
            Dn(d, c);
            return d
        }
    };
    k.vg = function (a, b) {
        al(this.Oi, a, b, this)
    };
    k.vi = function (a, b) {
        al(this.cj, a, b, this)
    };
    k.Ho = function (a, b) {
        return O([null], this.Xi, a, b, this)
    };
    k.Jo = function (a, b) {
        return O([null], this.bj, a, b, this)
    };
    k.Io = function (a, b) {
        return O([null], this.Me, a, b, this)
    };
    k.Co = function (a, b) {
        return O([null], this.Fd, a, b, this)
    };
    k.ol = function (a, b) {
        var c = O(void 0, this.Gd, a, b, this);
        c && b[b.length - 1].push(c)
    };
    k.Hj = function (a, b) {
        var c = O(void 0, this.Gd, a, b, this);
        c && (b[b.length - 1][0] = c)
    };
    k.Zh = function (a, b) {
        var c = O([null], this.dj, a, b, this);
        if (c && c[0]) {
            var d = new E(null), e = c[0], f = [e.length], g, h;
            g = 1;
            for (h = c.length; g < h; ++g)mb(e, c[g]), f.push(e.length);
            d.ba("XYZ", e, f);
            return d
        }
    };
    k.Oh = function (a, b) {
        var c = O([null], this.Pi, a, b, this);
        if (c) {
            var d = new R(null);
            d.ba("XYZ", c);
            return d
        }
    };
    k.yo = function (a, b) {
        var c = O([null], this.Qi, a, b, this);
        return Wb(c[1][0], c[1][1], c[2][0], c[2][1])
    };
    k.Ao = function (a, b) {
        for (var c = Nk(a, !1), d = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/, e = [], f; f = d.exec(c);)e.push(parseFloat(f[1])), c = c.substr(f[0].length);
        if ("" === c) {
            c = b[0].srsName;
            d = "enu";
            c && (d = yc(c).b);
            if ("neu" === d)for (c = 0, d = e.length; c < d; c += 3)f = e[c], e[c] = e[c + 1], e[c + 1] = f;
            c = e.length;
            2 == c && e.push(0);
            return 0 === c ? void 0 : e
        }
    };
    k.Mf = function (a, b) {
        var c = Nk(a, !1).replace(/^\s*|\s*$/g, ""), d = b[0].srsName, e = a.parentNode.getAttribute("srsDimension"), f = "enu";
        d && (f = yc(d).b);
        c = c.split(/\s+/);
        d = 2;
        a.getAttribute("srsDimension") ? d = fo(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? d = fo(a.getAttribute("dimension")) : e && (d = fo(e));
        for (var g, h, l = [], m = 0, n = c.length; m < n; m += d)e = parseFloat(c[m]), g = parseFloat(c[m + 1]), h = 3 === d ? parseFloat(c[m + 2]) : 0, "en" === f.substr(0, 2) ? l.push(e, g, h) : l.push(g, e, h);
        return l
    };
    k.Fd = {"http://www.opengis.net/gml": {pos: Uk(lo.prototype.Ao), posList: Uk(lo.prototype.Mf)}};
    k.Me = {"http://www.opengis.net/gml": {interior: lo.prototype.ol, exterior: lo.prototype.Hj}};
    k.bg = {
        "http://www.opengis.net/gml": {
            Point: Uk(Xn.prototype.Xh),
            MultiPoint: Uk(Xn.prototype.Vh),
            LineString: Uk(Xn.prototype.ze),
            MultiLineString: Uk(Xn.prototype.Uh),
            LinearRing: Uk(Xn.prototype.Th),
            Polygon: Uk(Xn.prototype.Ae),
            MultiPolygon: Uk(Xn.prototype.Wh),
            Surface: Uk(lo.prototype.Zh),
            MultiSurface: Uk(lo.prototype.Eo),
            Curve: Uk(lo.prototype.Oh),
            MultiCurve: Uk(lo.prototype.Do),
            Envelope: Uk(lo.prototype.yo)
        }
    };
    k.Si = {"http://www.opengis.net/gml": {curveMember: Tk(lo.prototype.vg), curveMembers: Tk(lo.prototype.vg)}};
    k.Wi = {"http://www.opengis.net/gml": {surfaceMember: Tk(lo.prototype.vi), surfaceMembers: Tk(lo.prototype.vi)}};
    k.Oi = {"http://www.opengis.net/gml": {LineString: Tk(Xn.prototype.ze), Curve: Tk(lo.prototype.Oh)}};
    k.cj = {"http://www.opengis.net/gml": {Polygon: Tk(Xn.prototype.Ae), Surface: Tk(lo.prototype.Zh)}};
    k.dj = {"http://www.opengis.net/gml": {patches: Uk(lo.prototype.Ho)}};
    k.Pi = {"http://www.opengis.net/gml": {segments: Uk(lo.prototype.Jo)}};
    k.Qi = {"http://www.opengis.net/gml": {lowerCorner: Tk(lo.prototype.Mf), upperCorner: Tk(lo.prototype.Mf)}};
    k.Xi = {"http://www.opengis.net/gml": {PolygonPatch: Uk(lo.prototype.Io)}};
    k.bj = {"http://www.opengis.net/gml": {LineStringSegment: Uk(lo.prototype.Co)}};
    function mo(a, b, c) {
        c = c[c.length - 1].srsName;
        b = b.Z();
        for (var d = b.length, e = Array(d), f, g = 0; g < d; ++g) {
            f = b[g];
            var h = g, l = "enu";
            c && (l = yc(c).b);
            e[h] = "en" === l.substr(0, 2) ? f[0] + " " + f[1] : f[1] + " " + f[0]
        }
        ho(a, e.join(" "))
    }

    k.Ji = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = Mk(a.namespaceURI, "pos");
        a.appendChild(d);
        c = c[c.length - 1].srsName;
        a = "enu";
        c && (a = yc(c).b);
        b = b.Z();
        ho(d, "en" === a.substr(0, 2) ? b[0] + " " + b[1] : b[1] + " " + b[0])
    };
    var no = {"http://www.opengis.net/gml": {lowerCorner: L(ho), upperCorner: L(ho)}};
    k = lo.prototype;
    k.xp = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        bl({node: a}, no, Zk, [b[0] + " " + b[1], b[2] + " " + b[3]], c, ["lowerCorner", "upperCorner"], this)
    };
    k.Gi = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = Mk(a.namespaceURI, "posList");
        a.appendChild(d);
        mo(d, b, c)
    };
    k.aj = function (a, b) {
        var c = b[b.length - 1], d = c.node, e = c.exteriorWritten;
        void 0 === e && (c.exteriorWritten = !0);
        return Mk(d.namespaceURI, void 0 !== e ? "interior" : "exterior")
    };
    k.Le = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d);
        "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.Vd(), bl({
            node: a,
            srsName: d
        }, oo, this.aj, b, c, void 0, this)) : "Surface" === a.nodeName && (d = Mk(a.namespaceURI, "patches"), a.appendChild(d), a = Mk(d.namespaceURI, "PolygonPatch"), d.appendChild(a), this.Le(a, b, c))
    };
    k.Ge = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d);
        "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = Mk(a.namespaceURI, "posList"), a.appendChild(d), mo(d, b, c)) : "Curve" === a.nodeName && (d = Mk(a.namespaceURI, "segments"), a.appendChild(d), a = Mk(d.namespaceURI, "LineStringSegment"), d.appendChild(a), this.Ge(a, b, c))
    };
    k.Ii = function (a, b, c) {
        var d = c[c.length - 1], e = d.srsName, d = d.surface;
        e && a.setAttribute("srsName", e);
        b = b.Wd();
        bl({node: a, srsName: e, surface: d}, po, this.c, b, c, void 0, this)
    };
    k.yp = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        b = b.je();
        bl({node: a, srsName: d}, qo, Xk("pointMember"), b, c, void 0, this)
    };
    k.Hi = function (a, b, c) {
        var d = c[c.length - 1], e = d.srsName, d = d.curve;
        e && a.setAttribute("srsName", e);
        b = b.md();
        bl({node: a, srsName: e, curve: d}, ro, this.c, b, c, void 0, this)
    };
    k.Ki = function (a, b, c) {
        var d = Mk(a.namespaceURI, "LinearRing");
        a.appendChild(d);
        this.Gi(d, b, c)
    };
    k.Li = function (a, b, c) {
        var d = this.g(b, c);
        d && (a.appendChild(d), this.Le(d, b, c))
    };
    k.zp = function (a, b, c) {
        var d = Mk(a.namespaceURI, "Point");
        a.appendChild(d);
        this.Ji(d, b, c)
    };
    k.Fi = function (a, b, c) {
        var d = this.g(b, c);
        d && (a.appendChild(d), this.Ge(d, b, c))
    };
    k.Je = function (a, b, c) {
        var d = c[c.length - 1], e = Ea({}, d);
        e.node = a;
        var f;
        Array.isArray(b) ? d.dataProjection ? f = Sc(b, d.featureProjection, d.dataProjection) : f = b : f = un(b, !0, d);
        bl(e, so, this.g, [f], c, void 0, this)
    };
    k.Bi = function (a, b, c) {
        var d = b.Xa();
        d && a.setAttribute("fid", d);
        var d = c[c.length - 1], e = d.featureNS, f = b.a;
        d.Dc || (d.Dc = {}, d.Dc[e] = {});
        var g = b.O();
        b = [];
        var h = [], l;
        for (l in g) {
            var m = g[l];
            null !== m && (b.push(l), h.push(m), l == f || m instanceof Tc ? l in d.Dc[e] || (d.Dc[e][l] = L(this.Je, this)) : l in d.Dc[e] || (d.Dc[e][l] = L(ho)))
        }
        l = Ea({}, d);
        l.node = a;
        bl(l, d.Dc, Xk(void 0, e), h, c, b)
    };
    var po = {
        "http://www.opengis.net/gml": {
            surfaceMember: L(lo.prototype.Li),
            polygonMember: L(lo.prototype.Li)
        }
    }, qo = {"http://www.opengis.net/gml": {pointMember: L(lo.prototype.zp)}}, ro = {
        "http://www.opengis.net/gml": {
            lineStringMember: L(lo.prototype.Fi),
            curveMember: L(lo.prototype.Fi)
        }
    }, oo = {"http://www.opengis.net/gml": {exterior: L(lo.prototype.Ki), interior: L(lo.prototype.Ki)}}, so = {
        "http://www.opengis.net/gml": {
            Curve: L(lo.prototype.Ge),
            MultiCurve: L(lo.prototype.Hi),
            Point: L(lo.prototype.Ji),
            MultiPoint: L(lo.prototype.yp),
            LineString: L(lo.prototype.Ge),
            MultiLineString: L(lo.prototype.Hi),
            LinearRing: L(lo.prototype.Gi),
            Polygon: L(lo.prototype.Le),
            MultiPolygon: L(lo.prototype.Ii),
            Surface: L(lo.prototype.Le),
            MultiSurface: L(lo.prototype.Ii),
            Envelope: L(lo.prototype.xp)
        }
    }, to = {
        MultiLineString: "lineStringMember",
        MultiCurve: "curveMember",
        MultiPolygon: "polygonMember",
        MultiSurface: "surfaceMember"
    };
    lo.prototype.c = function (a, b) {
        return Mk("http://www.opengis.net/gml", to[b[b.length - 1].node.nodeName])
    };
    lo.prototype.g = function (a, b) {
        var c = b[b.length - 1], d = c.multiSurface, e = c.surface, f = c.curve, c = c.multiCurve, g;
        Array.isArray(a) ? g = "Envelope" : (g = a.X(), "MultiPolygon" === g && !0 === d ? g = "MultiSurface" : "Polygon" === g && !0 === e ? g = "Surface" : "LineString" === g && !0 === f ? g = "Curve" : "MultiLineString" === g && !0 === c && (g = "MultiCurve"));
        return Mk("http://www.opengis.net/gml", g)
    };
    lo.prototype.s = function (a, b) {
        b = tn(this, b);
        var c = Mk("http://www.opengis.net/gml", "geom"), d = {
            node: c,
            srsName: this.srsName,
            curve: this.i,
            surface: this.j,
            multiSurface: this.o,
            multiCurve: this.l
        };
        b && Ea(d, b);
        this.Je(c, a, [d]);
        return c
    };
    lo.prototype.a = function (a, b) {
        b = tn(this, b);
        var c = Mk("http://www.opengis.net/gml", "featureMembers");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
        var d = {
            srsName: this.srsName,
            curve: this.i,
            surface: this.j,
            multiSurface: this.o,
            multiCurve: this.l,
            featureNS: this.featureNS,
            featureType: this.featureType
        };
        b && Ea(d, b);
        var d = [d], e = d[d.length - 1], f = e.featureType, g = e.featureNS, h = {};
        h[g] = {};
        h[g][f] = L(this.Bi, this);
        e = Ea({}, e);
        e.node = c;
        bl(e, h, Xk(f, g), a, d);
        return c
    };
    function uo(a) {
        a = a ? a : {};
        Un.call(this);
        this.defaultDataProjection = yc("EPSG:4326");
        this.b = a.readExtensions
    }

    y(uo, Un);
    var vo = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];

    function wo(a, b, c) {
        a.push(parseFloat(b.getAttribute("lon")), parseFloat(b.getAttribute("lat")));
        "ele" in c ? (a.push(c.ele), delete c.ele) : a.push(0);
        "time" in c ? (a.push(c.time), delete c.time) : a.push(0);
        return a
    }

    function xo(a, b) {
        var c = b[b.length - 1], d = a.getAttribute("href");
        null !== d && (c.link = d);
        al(yo, a, b)
    }

    function zo(a, b) {
        b[b.length - 1].extensionsNode_ = a
    }

    function Ao(a, b) {
        var c = b[0], d = O({flatCoordinates: []}, Bo, a, b);
        if (d) {
            var e = d.flatCoordinates;
            delete d.flatCoordinates;
            var f = new R(null);
            f.ba("XYZM", e);
            un(f, !1, c);
            c = new Ik(f);
            c.G(d);
            return c
        }
    }

    function Co(a, b) {
        var c = b[0], d = O({flatCoordinates: [], ends: []}, Do, a, b);
        if (d) {
            var e = d.flatCoordinates;
            delete d.flatCoordinates;
            var f = d.ends;
            delete d.ends;
            var g = new S(null);
            g.ba("XYZM", e, f);
            un(g, !1, c);
            c = new Ik(g);
            c.G(d);
            return c
        }
    }

    function Eo(a, b) {
        var c = b[0], d = O({}, Fo, a, b);
        if (d) {
            var e = wo([], a, d), e = new C(e, "XYZM");
            un(e, !1, c);
            c = new Ik(e);
            c.G(d);
            return c
        }
    }

    var Go = {rte: Ao, trk: Co, wpt: Eo}, Ho = M(vo, {
            rte: Tk(Ao),
            trk: Tk(Co),
            wpt: Tk(Eo)
        }), yo = M(vo, {text: J(U, "linkText"), type: J(U, "linkType")}), Bo = M(vo, {
            name: J(U),
            cmt: J(U),
            desc: J(U),
            src: J(U),
            link: xo,
            number: J(eo),
            extensions: zo,
            type: J(U),
            rtept: function (a, b) {
                var c = O({}, Io, a, b);
                c && wo(b[b.length - 1].flatCoordinates, a, c)
            }
        }), Io = M(vo, {ele: J(bo), time: J(ao)}), Do = M(vo, {
            name: J(U),
            cmt: J(U),
            desc: J(U),
            src: J(U),
            link: xo,
            number: J(eo),
            type: J(U),
            extensions: zo,
            trkseg: function (a, b) {
                var c = b[b.length - 1];
                al(Jo, a, b);
                c.ends.push(c.flatCoordinates.length)
            }
        }),
        Jo = M(vo, {
            trkpt: function (a, b) {
                var c = O({}, Ko, a, b);
                c && wo(b[b.length - 1].flatCoordinates, a, c)
            }
        }), Ko = M(vo, {ele: J(bo), time: J(ao)}), Fo = M(vo, {
            ele: J(bo),
            time: J(ao),
            magvar: J(bo),
            geoidheight: J(bo),
            name: J(U),
            cmt: J(U),
            desc: J(U),
            src: J(U),
            link: xo,
            sym: J(U),
            type: J(U),
            fix: J(U),
            sat: J(eo),
            hdop: J(bo),
            vdop: J(bo),
            pdop: J(bo),
            ageofdgpsdata: J(bo),
            dgpsid: J(eo),
            extensions: zo
        });

    function Lo(a, b) {
        b || (b = []);
        for (var c = 0, d = b.length; c < d; ++c) {
            var e = b[c];
            if (a.b) {
                var f = e.get("extensionsNode_") || null;
                a.b(e, f)
            }
            e.set("extensionsNode_", void 0)
        }
    }

    uo.prototype.Ph = function (a, b) {
        if (!jb(vo, a.namespaceURI))return null;
        var c = Go[a.localName];
        if (!c)return null;
        c = c(a, [sn(this, a, b)]);
        if (!c)return null;
        Lo(this, [c]);
        return c
    };
    uo.prototype.lc = function (a, b) {
        if (!jb(vo, a.namespaceURI))return [];
        if ("gpx" == a.localName) {
            var c = O([], Ho, a, [sn(this, a, b)]);
            if (c)return Lo(this, c), c
        }
        return []
    };
    function Mo(a, b, c) {
        a.setAttribute("href", b);
        b = c[c.length - 1].properties;
        bl({node: a}, No, Zk, [b.linkText, b.linkType], c, Oo)
    }

    function Po(a, b, c) {
        var d = c[c.length - 1], e = d.node.namespaceURI, f = d.properties;
        a.setAttributeNS(null, "lat", b[1]);
        a.setAttributeNS(null, "lon", b[0]);
        switch (d.geometryLayout) {
            case "XYZM":
                0 !== b[3] && (f.time = b[3]);
            case "XYZ":
                0 !== b[2] && (f.ele = b[2]);
                break;
            case "XYM":
                0 !== b[2] && (f.time = b[2])
        }
        b = "rtept" == a.nodeName ? Qo[e] : Ro[e];
        d = $k(f, b);
        bl({node: a, properties: f}, So, Zk, d, c, b)
    }

    var Oo = ["text", "type"], No = M(vo, {
            text: L(ho),
            type: L(ho)
        }), To = M(vo, "name cmt desc src link number type rtept".split(" ")), Uo = M(vo, {
            name: L(ho),
            cmt: L(ho),
            desc: L(ho),
            src: L(ho),
            link: L(Mo),
            number: L(jo),
            type: L(ho),
            rtept: Wk(L(Po))
        }), Qo = M(vo, ["ele", "time"]), Vo = M(vo, "name cmt desc src link number type trkseg".split(" ")), Yo = M(vo, {
            name: L(ho),
            cmt: L(ho),
            desc: L(ho),
            src: L(ho),
            link: L(Mo),
            number: L(jo),
            type: L(ho),
            trkseg: Wk(L(function (a, b, c) {
                bl({node: a, geometryLayout: b.f, properties: {}}, Wo, Xo, b.Z(), c)
            }))
        }), Xo = Xk("trkpt"),
        Wo = M(vo, {trkpt: L(Po)}), Ro = M(vo, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")), So = M(vo, {
            ele: L(io),
            time: L(function (a, b) {
                var c = new Date(1E3 * b);
                a.appendChild(Lk.createTextNode(c.getUTCFullYear() + "-" + zb(c.getUTCMonth() + 1) + "-" + zb(c.getUTCDate()) + "T" + zb(c.getUTCHours()) + ":" + zb(c.getUTCMinutes()) + ":" + zb(c.getUTCSeconds()) + "Z"))
            }),
            magvar: L(io),
            geoidheight: L(io),
            name: L(ho),
            cmt: L(ho),
            desc: L(ho),
            src: L(ho),
            link: L(Mo),
            sym: L(ho),
            type: L(ho),
            fix: L(ho),
            sat: L(jo),
            hdop: L(io),
            vdop: L(io),
            pdop: L(io),
            ageofdgpsdata: L(io),
            dgpsid: L(jo)
        }), Zo = {Point: "wpt", LineString: "rte", MultiLineString: "trk"};

    function $o(a, b) {
        var c = a.W();
        if (c && (c = Zo[c.X()]))return Mk(b[b.length - 1].node.namespaceURI, c)
    }

    var ap = M(vo, {
        rte: L(function (a, b, c) {
            var d = c[0], e = b.O();
            a = {node: a, properties: e};
            if (b = b.W())b = un(b, !0, d), a.geometryLayout = b.f, e.rtept = b.Z();
            d = To[c[c.length - 1].node.namespaceURI];
            e = $k(e, d);
            bl(a, Uo, Zk, e, c, d)
        }), trk: L(function (a, b, c) {
            var d = c[0], e = b.O();
            a = {node: a, properties: e};
            if (b = b.W())b = un(b, !0, d), e.trkseg = b.md();
            d = Vo[c[c.length - 1].node.namespaceURI];
            e = $k(e, d);
            bl(a, Yo, Zk, e, c, d)
        }), wpt: L(function (a, b, c) {
            var d = c[0], e = c[c.length - 1];
            e.properties = b.O();
            if (b = b.W())b = un(b, !0, d), e.geometryLayout = b.f, Po(a, b.Z(),
                c)
        })
    });
    uo.prototype.a = function (a, b) {
        b = tn(this, b);
        var c = Mk("http://www.topografix.com/GPX/1/1", "gpx");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd");
        c.setAttribute("version", "1.1");
        c.setAttribute("creator", "OpenLayers 3");
        bl({node: c}, ap, $o, a, [b]);
        return c
    };
    function bp() {
        this.defaultDataProjection = null
    }

    y(bp, rn);
    function cp(a) {
        return "string" === typeof a ? a : ""
    }

    k = bp.prototype;
    k.X = function () {
        return "text"
    };
    k.Rb = function (a, b) {
        return this.ud(cp(a), tn(this, b))
    };
    k.Fa = function (a, b) {
        return this.Kf(cp(a), tn(this, b))
    };
    k.Vc = function (a, b) {
        return this.wd(cp(a), tn(this, b))
    };
    k.Oa = function (a) {
        cp(a);
        return this.defaultDataProjection
    };
    k.Dd = function (a, b) {
        return this.He(a, tn(this, b))
    };
    k.Xb = function (a, b) {
        return this.Ci(a, tn(this, b))
    };
    k.Zc = function (a, b) {
        return this.Ed(a, tn(this, b))
    };
    function dp(a) {
        a = a ? a : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = yc("EPSG:4326");
        this.b = a.altitudeMode ? a.altitudeMode : "none"
    }

    y(dp, bp);
    var ep = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/, fp = /^H.([A-Z]{3}).*?:(.*)/, gp = /^HFDTE(\d{2})(\d{2})(\d{2})/, hp = /\r\n|\r|\n/;
    dp.prototype.ud = function (a, b) {
        var c = this.b, d = a.split(hp), e = {}, f = [], g = 2E3, h = 0, l = 1, m = -1, n, p;
        n = 0;
        for (p = d.length; n < p; ++n) {
            var q = d[n], r;
            if ("B" == q.charAt(0)) {
                if (r = ep.exec(q)) {
                    var q = parseInt(r[1], 10), u = parseInt(r[2], 10), x = parseInt(r[3], 10), v = parseInt(r[4], 10) + parseInt(r[5], 10) / 6E4;
                    "S" == r[6] && (v = -v);
                    var D = parseInt(r[7], 10) + parseInt(r[8], 10) / 6E4;
                    "W" == r[9] && (D = -D);
                    f.push(D, v);
                    "none" != c && f.push("gps" == c ? parseInt(r[11], 10) : "barometric" == c ? parseInt(r[12], 10) : 0);
                    r = Date.UTC(g, h, l, q, u, x);
                    r < m && (r = Date.UTC(g, h, l + 1,
                        q, u, x));
                    f.push(r / 1E3);
                    m = r
                }
            } else"H" == q.charAt(0) && ((r = gp.exec(q)) ? (l = parseInt(r[1], 10), h = parseInt(r[2], 10) - 1, g = 2E3 + parseInt(r[3], 10)) : (r = fp.exec(q)) && (e[r[1]] = r[2].trim()))
        }
        if (0 === f.length)return null;
        d = new R(null);
        d.ba("none" == c ? "XYM" : "XYZM", f);
        c = new Ik(un(d, !1, b));
        c.G(e);
        return c
    };
    dp.prototype.Kf = function (a, b) {
        var c = this.ud(a, b);
        return c ? [c] : []
    };
    function ip(a, b) {
        this.a = {};
        this.b = [];
        this.g = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            var e;
            if (a instanceof ip)e = a.N(), d = a.zc(); else {
                var c = [], f = 0;
                for (e in a)c[f++] = e;
                e = c;
                c = [];
                f = 0;
                for (d in a)c[f++] = a[d];
                d = c
            }
            for (c = 0; c < e.length; c++)this.set(e[c], d[c])
        }
    }

    k = ip.prototype;
    k.wc = function () {
        return this.g
    };
    k.zc = function () {
        jp(this);
        for (var a = [], b = 0; b < this.b.length; b++)a.push(this.a[this.b[b]]);
        return a
    };
    k.N = function () {
        jp(this);
        return this.b.concat()
    };
    k.Ya = function () {
        return 0 == this.g
    };
    k.clear = function () {
        this.a = {};
        this.g = this.b.length = 0
    };
    k.remove = function (a) {
        return kp(this.a, a) ? (delete this.a[a], this.g--, this.b.length > 2 * this.g && jp(this), !0) : !1
    };
    function jp(a) {
        if (a.g != a.b.length) {
            for (var b = 0, c = 0; b < a.b.length;) {
                var d = a.b[b];
                kp(a.a, d) && (a.b[c++] = d);
                b++
            }
            a.b.length = c
        }
        if (a.g != a.b.length) {
            for (var e = {}, c = b = 0; b < a.b.length;)d = a.b[b], kp(e, d) || (a.b[c++] = d, e[d] = 1), b++;
            a.b.length = c
        }
    }

    k.get = function (a, b) {
        return kp(this.a, a) ? this.a[a] : b
    };
    k.set = function (a, b) {
        kp(this.a, a) || (this.g++, this.b.push(a));
        this.a[a] = b
    };
    k.forEach = function (a, b) {
        for (var c = this.N(), d = 0; d < c.length; d++) {
            var e = c[d], f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    k.clone = function () {
        return new ip(this)
    };
    function kp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    var lp = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function mp(a, b) {
        if (a)for (var c = a.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].indexOf("="), f, g = null;
            0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
            b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
        }
    }

    function np(a, b) {
        this.a = this.l = this.g = "";
        this.o = null;
        this.f = this.b = "";
        this.c = !1;
        var c;
        a instanceof np ? (this.c = void 0 !== b ? b : a.c, op(this, a.g), this.l = a.l, this.a = a.a, pp(this, a.o), this.b = a.b, qp(this, a.i.clone()), this.f = a.f) : a && (c = String(a).match(lp)) ? (this.c = !!b, op(this, c[1] || "", !0), this.l = rp(c[2] || ""), this.a = rp(c[3] || "", !0), pp(this, c[4]), this.b = rp(c[5] || "", !0), qp(this, c[6] || "", !0), this.f = rp(c[7] || "")) : (this.c = !!b, this.i = new sp(null, 0, this.c))
    }

    np.prototype.toString = function () {
        var a = [], b = this.g;
        b && a.push(tp(b, up, !0), ":");
        var c = this.a;
        if (c || "file" == b)a.push("//"), (b = this.l) && a.push(tp(b, up, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.o, null != c && a.push(":", String(c));
        if (c = this.b)this.a && "/" != c.charAt(0) && a.push("/"), a.push(tp(c, "/" == c.charAt(0) ? vp : wp, !0));
        (c = this.i.toString()) && a.push("?", c);
        (c = this.f) && a.push("#", tp(c, xp));
        return a.join("")
    };
    np.prototype.clone = function () {
        return new np(this)
    };
    function op(a, b, c) {
        a.g = c ? rp(b, !0) : b;
        a.g && (a.g = a.g.replace(/:$/, ""))
    }

    function pp(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)throw Error("Bad port number " + b);
            a.o = b
        } else a.o = null
    }

    function qp(a, b, c) {
        b instanceof sp ? (a.i = b, yp(a.i, a.c)) : (c || (b = tp(b, zp)), a.i = new sp(b, 0, a.c))
    }

    function Ap(a) {
        return a instanceof np ? a.clone() : new np(a, void 0)
    }

    function Bp(a, b) {
        a instanceof np || (a = Ap(a));
        b instanceof np || (b = Ap(b));
        var c = a, d = b, e = c.clone(), f = !!d.g;
        f ? op(e, d.g) : f = !!d.l;
        f ? e.l = d.l : f = !!d.a;
        f ? e.a = d.a : f = null != d.o;
        var g = d.b;
        if (f)pp(e, d.o); else if (f = !!d.b)if ("/" != g.charAt(0) && (c.a && !c.b ? g = "/" + g : (c = e.b.lastIndexOf("/"), -1 != c && (g = e.b.substr(0, c + 1) + g))), c = g, ".." == c || "." == c)g = ""; else if (-1 != c.indexOf("./") || -1 != c.indexOf("/.")) {
            for (var g = 0 == c.lastIndexOf("/", 0), c = c.split("/"), h = [], l = 0; l < c.length;) {
                var m = c[l++];
                "." == m ? g && l == c.length && h.push("") : ".." == m ?
                    ((1 < h.length || 1 == h.length && "" != h[0]) && h.pop(), g && l == c.length && h.push("")) : (h.push(m), g = !0)
            }
            g = h.join("/")
        } else g = c;
        f ? e.b = g : f = "" !== d.i.toString();
        f ? qp(e, rp(d.i.toString())) : f = !!d.f;
        f && (e.f = d.f);
        return e
    }

    function rp(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function tp(a, b, c) {
        return da(a) ? (a = encodeURI(a).replace(b, Cp), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function Cp(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }

    var up = /[#\/\?@]/g, wp = /[\#\?:]/g, vp = /[\#\?]/g, zp = /[\#\?@]/g, xp = /#/g;

    function sp(a, b, c) {
        this.a = this.b = null;
        this.g = a || null;
        this.f = !!c
    }

    function Dp(a) {
        a.b || (a.b = new ip, a.a = 0, a.g && mp(a.g, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }

    k = sp.prototype;
    k.wc = function () {
        Dp(this);
        return this.a
    };
    k.add = function (a, b) {
        Dp(this);
        this.g = null;
        a = Ep(this, a);
        var c = this.b.get(a);
        c || this.b.set(a, c = []);
        c.push(b);
        this.a = this.a + 1;
        return this
    };
    k.remove = function (a) {
        Dp(this);
        a = Ep(this, a);
        return kp(this.b.a, a) ? (this.g = null, this.a = this.a - this.b.get(a).length, this.b.remove(a)) : !1
    };
    k.clear = function () {
        this.b = this.g = null;
        this.a = 0
    };
    k.Ya = function () {
        Dp(this);
        return 0 == this.a
    };
    function Fp(a, b) {
        Dp(a);
        b = Ep(a, b);
        return kp(a.b.a, b)
    }

    k.N = function () {
        Dp(this);
        for (var a = this.b.zc(), b = this.b.N(), c = [], d = 0; d < b.length; d++)for (var e = a[d], f = 0; f < e.length; f++)c.push(b[d]);
        return c
    };
    k.zc = function (a) {
        Dp(this);
        var b = [];
        if (da(a))Fp(this, a) && (b = ne(b, this.b.get(Ep(this, a)))); else {
            a = this.b.zc();
            for (var c = 0; c < a.length; c++)b = ne(b, a[c])
        }
        return b
    };
    k.set = function (a, b) {
        Dp(this);
        this.g = null;
        a = Ep(this, a);
        Fp(this, a) && (this.a = this.a - this.b.get(a).length);
        this.b.set(a, [b]);
        this.a = this.a + 1;
        return this
    };
    k.get = function (a, b) {
        var c = a ? this.zc(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    k.toString = function () {
        if (this.g)return this.g;
        if (!this.b)return "";
        for (var a = [], b = this.b.N(), c = 0; c < b.length; c++)for (var d = b[c], e = encodeURIComponent(String(d)), d = this.zc(d), f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
            a.push(g)
        }
        return this.g = a.join("&")
    };
    k.clone = function () {
        var a = new sp;
        a.g = this.g;
        this.b && (a.b = this.b.clone(), a.a = this.a);
        return a
    };
    function Ep(a, b) {
        var c = String(b);
        a.f && (c = c.toLowerCase());
        return c
    }

    function yp(a, b) {
        b && !a.f && (Dp(a), a.g = null, a.b.forEach(function (a, b) {
            var e = b.toLowerCase();
            b != e && (this.remove(b), this.remove(e), 0 < a.length && (this.g = null, this.b.set(Ep(this, e), oe(a)), this.a = this.a + a.length))
        }, a));
        a.f = b
    }

    function Gp(a) {
        a = a || {};
        this.g = a.font;
        this.i = a.rotation;
        this.a = a.scale;
        this.s = a.text;
        this.o = a.textAlign;
        this.j = a.textBaseline;
        this.b = void 0 !== a.fill ? a.fill : new ij({color: "#333"});
        this.l = void 0 !== a.stroke ? a.stroke : null;
        this.f = void 0 !== a.offsetX ? a.offsetX : 0;
        this.c = void 0 !== a.offsetY ? a.offsetY : 0
    }

    k = Gp.prototype;
    k.Xj = function () {
        return this.g
    };
    k.kk = function () {
        return this.f
    };
    k.lk = function () {
        return this.c
    };
    k.Un = function () {
        return this.b
    };
    k.Vn = function () {
        return this.i
    };
    k.Wn = function () {
        return this.a
    };
    k.Xn = function () {
        return this.l
    };
    k.Ha = function () {
        return this.s
    };
    k.yk = function () {
        return this.o
    };
    k.zk = function () {
        return this.j
    };
    k.bp = function (a) {
        this.g = a
    };
    k.mi = function (a) {
        this.f = a
    };
    k.ni = function (a) {
        this.c = a
    };
    k.ap = function (a) {
        this.b = a
    };
    k.Yn = function (a) {
        this.i = a
    };
    k.Zn = function (a) {
        this.a = a
    };
    k.ip = function (a) {
        this.l = a
    };
    k.pi = function (a) {
        this.s = a
    };
    k.ri = function (a) {
        this.o = a
    };
    k.jp = function (a) {
        this.j = a
    };
    function Hp(a) {
        a = a ? a : {};
        Un.call(this);
        this.defaultDataProjection = yc("EPSG:4326");
        this.g = a.defaultStyle ? a.defaultStyle : Ip;
        this.c = void 0 !== a.extractStyles ? a.extractStyles : !0;
        this.l = void 0 !== a.writeStyles ? a.writeStyles : !0;
        this.b = {};
        this.i = void 0 !== a.showPointNames ? a.showPointNames : !0
    }

    y(Hp, Un);
    var Jp = ["http://www.google.com/kml/ext/2.2"], Kp = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"], Lp = [255, 255, 255, 1], Mp = new ij({color: Lp}), Np = [20, 2], Op = [64, 64], Pp = new Dh({
        anchor: Np,
        anchorOrigin: "bottom-left",
        anchorXUnits: "pixels",
        anchorYUnits: "pixels",
        crossOrigin: "anonymous",
        rotation: 0,
        scale: .5,
        size: Op,
        src: "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"
    }), Qp = new oj({color: Lp, width: 1}), Rp = new Gp({
        font: "bold 16px Helvetica",
        fill: Mp, stroke: new oj({color: [51, 51, 51, 1], width: 2}), scale: .8
    }), Ip = [new rj({fill: Mp, image: Pp, text: Rp, stroke: Qp, zIndex: 0})], Sp = {
        fraction: "fraction",
        pixels: "pixels"
    };

    function Tp(a, b) {
        var c, d = [0, 0], e = "start";
        if (a.a) {
            var f = a.a.ld();
            f && 2 == f.length && (d[0] = a.a.i * f[0] / 2, d[1] = -a.a.i * f[1] / 2, e = "left")
        }
        if (Ha(a.Ha()))c = new Gp({text: b, offsetX: d[0], offsetY: d[1], textAlign: e}); else {
            var f = a.Ha(), g = {};
            for (c in f)g[c] = f[c];
            c = g;
            c.pi(b);
            c.ri(e);
            c.mi(d[0]);
            c.ni(d[1])
        }
        return new rj({text: c})
    }

    function Up(a, b, c, d, e) {
        return function () {
            var f = e, g = "";
            f && this.W() && (f = "Point" === this.W().X());
            f && (g = this.get("name"), f = f && g);
            if (a)return f ? (f = Tp(a[0], g), a.concat(f)) : a;
            if (b) {
                var h = Vp(b, c, d);
                return f ? (f = Tp(h[0], g), h.concat(f)) : h
            }
            return f ? (f = Tp(c[0], g), c.concat(f)) : c
        }
    }

    function Vp(a, b, c) {
        return Array.isArray(a) ? a : "string" === typeof a ? (!(a in c) && "#" + a in c && (a = "#" + a), Vp(c[a], b, c)) : b
    }

    function Wp(a) {
        a = Nk(a, !1);
        if (a = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a))return a = a[1], [parseInt(a.substr(6, 2), 16), parseInt(a.substr(4, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(0, 2), 16) / 255]
    }

    function Xp(a) {
        a = Nk(a, !1);
        for (var b = [], c = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i, d; d = c.exec(a);)b.push(parseFloat(d[1]), parseFloat(d[2]), d[3] ? parseFloat(d[3]) : 0), a = a.substr(d[0].length);
        return "" !== a ? void 0 : b
    }

    function Yp(a) {
        var b = Nk(a, !1);
        return a.baseURI ? Bp(a.baseURI, b.trim()).toString() : b.trim()
    }

    function Zp(a) {
        a = bo(a);
        if (void 0 !== a)return Math.sqrt(a)
    }

    function $p(a, b) {
        return O(null, aq, a, b)
    }

    function bq(a, b) {
        var c = O({B: [], zi: []}, cq, a, b);
        if (c) {
            var d = c.B, c = c.zi, e, f;
            e = 0;
            for (f = Math.min(d.length, c.length); e < f; ++e)d[4 * e + 3] = c[e];
            c = new R(null);
            c.ba("XYZM", d);
            return c
        }
    }

    function dq(a, b) {
        var c = O({}, eq, a, b), d = O(null, fq, a, b);
        if (d) {
            var e = new R(null);
            e.ba("XYZ", d);
            e.G(c);
            return e
        }
    }

    function gq(a, b) {
        var c = O({}, eq, a, b), d = O(null, fq, a, b);
        if (d) {
            var e = new E(null);
            e.ba("XYZ", d, [d.length]);
            e.G(c);
            return e
        }
    }

    function hq(a, b) {
        var c = O([], iq, a, b);
        if (!c)return null;
        if (0 === c.length)return new Ln(c);
        var d = !0, e = c[0].X(), f, g, h;
        g = 1;
        for (h = c.length; g < h; ++g)if (f = c[g], f.X() != e) {
            d = !1;
            break
        }
        if (d) {
            if ("Point" == e) {
                f = c[0];
                d = f.f;
                e = f.la();
                g = 1;
                for (h = c.length; g < h; ++g)f = c[g], mb(e, f.la());
                f = new Bn(null);
                f.ba(d, e);
                jq(f, c);
                return f
            }
            return "LineString" == e ? (f = new S(null), An(f, c), jq(f, c), f) : "Polygon" == e ? (f = new T(null), Dn(f, c), jq(f, c), f) : "GeometryCollection" == e ? new Ln(c) : null
        }
        return new Ln(c)
    }

    function kq(a, b) {
        var c = O({}, eq, a, b), d = O(null, fq, a, b);
        if (d) {
            var e = new C(null);
            e.ba("XYZ", d);
            e.G(c);
            return e
        }
    }

    function lq(a, b) {
        var c = O({}, eq, a, b), d = O([null], mq, a, b);
        if (d && d[0]) {
            var e = new E(null), f = d[0], g = [f.length], h, l;
            h = 1;
            for (l = d.length; h < l; ++h)mb(f, d[h]), g.push(f.length);
            e.ba("XYZ", f, g);
            e.G(c);
            return e
        }
    }

    function nq(a, b) {
        var c = O({}, oq, a, b);
        if (!c)return null;
        var d = "fillStyle" in c ? c.fillStyle : Mp, e = c.fill;
        void 0 === e || e || (d = null);
        var e = "imageStyle" in c ? c.imageStyle : Pp, f = "textStyle" in c ? c.textStyle : Rp, g = "strokeStyle" in c ? c.strokeStyle : Qp, c = c.outline;
        void 0 === c || c || (g = null);
        return [new rj({fill: d, image: e, stroke: g, text: f, zIndex: void 0})]
    }

    function jq(a, b) {
        var c = b.length, d = Array(b.length), e = Array(b.length), f, g, h, l;
        h = l = !1;
        for (g = 0; g < c; ++g)f = b[g], d[g] = f.get("extrude"), e[g] = f.get("altitudeMode"), h = h || void 0 !== d[g], l = l || e[g];
        h && a.set("extrude", d);
        l && a.set("altitudeMode", e)
    }

    function pq(a, b) {
        al(qq, a, b)
    }

    var rq = M(Kp, {value: Uk(U)}), qq = M(Kp, {
        Data: function (a, b) {
            var c = a.getAttribute("name");
            if (null !== c) {
                var d = O(void 0, rq, a, b);
                d && (b[b.length - 1][c] = d)
            }
        }, SchemaData: function (a, b) {
            al(sq, a, b)
        }
    }), eq = M(Kp, {
        extrude: J(Zn),
        altitudeMode: J(U)
    }), aq = M(Kp, {coordinates: Uk(Xp)}), mq = M(Kp, {
        innerBoundaryIs: function (a, b) {
            var c = O(void 0, tq, a, b);
            c && b[b.length - 1].push(c)
        }, outerBoundaryIs: function (a, b) {
            var c = O(void 0, uq, a, b);
            c && (b[b.length - 1][0] = c)
        }
    }), cq = M(Kp, {
        when: function (a, b) {
            var c = b[b.length - 1].zi, d = Nk(a, !1);
            if (d = /^\s*(\d{4})($|-(\d{2})($|-(\d{2})($|T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?)))))\s*$/.exec(d)) {
                var e =
                    Date.UTC(parseInt(d[1], 10), d[3] ? parseInt(d[3], 10) - 1 : 0, d[5] ? parseInt(d[5], 10) : 1, d[7] ? parseInt(d[7], 10) : 0, d[8] ? parseInt(d[8], 10) : 0, d[9] ? parseInt(d[9], 10) : 0);
                if (d[10] && "Z" != d[10]) {
                    var f = "-" == d[11] ? -1 : 1, e = e + 60 * f * parseInt(d[12], 10);
                    d[13] && (e += 3600 * f * parseInt(d[13], 10))
                }
                c.push(e)
            } else c.push(0)
        }
    }, M(Jp, {
        coord: function (a, b) {
            var c = b[b.length - 1].B, d = Nk(a, !1);
            (d = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(d)) ? c.push(parseFloat(d[1]),
                parseFloat(d[2]), parseFloat(d[3]), 0) : c.push(0, 0, 0, 0)
        }
    })), fq = M(Kp, {coordinates: Uk(Xp)}), vq = M(Kp, {href: J(Yp)}, M(Jp, {
        x: J(bo),
        y: J(bo),
        w: J(bo),
        h: J(bo)
    })), wq = M(Kp, {
        Icon: J(function (a, b) {
            var c = O({}, vq, a, b);
            return c ? c : null
        }), heading: J(bo), hotSpot: J(function (a) {
            var b = a.getAttribute("xunits"), c = a.getAttribute("yunits");
            return {x: parseFloat(a.getAttribute("x")), $f: Sp[b], y: parseFloat(a.getAttribute("y")), ag: Sp[c]}
        }), scale: J(Zp)
    }), tq = M(Kp, {LinearRing: Uk($p)}), xq = M(Kp, {color: J(Wp), scale: J(Zp)}), yq = M(Kp, {
        color: J(Wp),
        width: J(bo)
    }), iq = M(Kp, {
        LineString: Tk(dq),
        LinearRing: Tk(gq),
        MultiGeometry: Tk(hq),
        Point: Tk(kq),
        Polygon: Tk(lq)
    }), zq = M(Jp, {Track: Tk(bq)}), Bq = M(Kp, {
        ExtendedData: pq, Link: function (a, b) {
            al(Aq, a, b)
        }, address: J(U), description: J(U), name: J(U), open: J(Zn), phoneNumber: J(U), visibility: J(Zn)
    }), Aq = M(Kp, {href: J(Yp)}), uq = M(Kp, {LinearRing: Uk($p)}), Cq = M(Kp, {
        Style: J(nq),
        key: J(U),
        styleUrl: J(function (a) {
            var b = Nk(a, !1).trim();
            return a.baseURI ? Bp(a.baseURI, b).toString() : b
        })
    }), Eq = M(Kp, {
        ExtendedData: pq,
        MultiGeometry: J(hq, "geometry"),
        LineString: J(dq, "geometry"),
        LinearRing: J(gq, "geometry"),
        Point: J(kq, "geometry"),
        Polygon: J(lq, "geometry"),
        Style: J(nq),
        StyleMap: function (a, b) {
            var c = O(void 0, Dq, a, b);
            if (c) {
                var d = b[b.length - 1];
                Array.isArray(c) ? d.Style = c : "string" === typeof c && (d.styleUrl = c)
            }
        },
        address: J(U),
        description: J(U),
        name: J(U),
        open: J(Zn),
        phoneNumber: J(U),
        styleUrl: J(Yp),
        visibility: J(Zn)
    }, M(Jp, {
        MultiTrack: J(function (a, b) {
            var c = O([], zq, a, b);
            if (c) {
                var d = new S(null);
                An(d, c);
                return d
            }
        }, "geometry"), Track: J(bq, "geometry")
    })), Fq = M(Kp, {
        color: J(Wp),
        fill: J(Zn), outline: J(Zn)
    }), sq = M(Kp, {
        SimpleData: function (a, b) {
            var c = a.getAttribute("name");
            if (null !== c) {
                var d = U(a);
                b[b.length - 1][c] = d
            }
        }
    }), oq = M(Kp, {
        IconStyle: function (a, b) {
            var c = O({}, wq, a, b);
            if (c) {
                var d = b[b.length - 1], e = "Icon" in c ? c.Icon : {}, f;
                f = (f = e.href) ? f : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";
                var g, h, l, m = c.hotSpot;
                m ? (g = [m.x, m.y], h = m.$f, l = m.ag) : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" === f ? (g = Np, l = h = "pixels") : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(f) &&
                (g = [.5, 0], l = h = "fraction");
                var n, m = e.x, p = e.y;
                void 0 !== m && void 0 !== p && (n = [m, p]);
                var q, m = e.w, e = e.h;
                void 0 !== m && void 0 !== e && (q = [m, e]);
                var r, e = c.heading;
                void 0 !== e && (r = wa(e));
                c = c.scale;
                "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" == f && (q = Op, void 0 === c && (c = .5));
                g = new Dh({
                    anchor: g,
                    anchorOrigin: "bottom-left",
                    anchorXUnits: h,
                    anchorYUnits: l,
                    crossOrigin: "anonymous",
                    offset: n,
                    offsetOrigin: "bottom-left",
                    rotation: r,
                    scale: c,
                    size: q,
                    src: f
                });
                d.imageStyle = g
            }
        }, LabelStyle: function (a, b) {
            var c = O({}, xq, a,
                b);
            c && (b[b.length - 1].textStyle = new Gp({
                fill: new ij({color: "color" in c ? c.color : Lp}),
                scale: c.scale
            }))
        }, LineStyle: function (a, b) {
            var c = O({}, yq, a, b);
            c && (b[b.length - 1].strokeStyle = new oj({
                color: "color" in c ? c.color : Lp,
                width: "width" in c ? c.width : 1
            }))
        }, PolyStyle: function (a, b) {
            var c = O({}, Fq, a, b);
            if (c) {
                var d = b[b.length - 1];
                d.fillStyle = new ij({color: "color" in c ? c.color : Lp});
                var e = c.fill;
                void 0 !== e && (d.fill = e);
                c = c.outline;
                void 0 !== c && (d.outline = c)
            }
        }
    }), Dq = M(Kp, {
        Pair: function (a, b) {
            var c = O({}, Cq, a, b);
            if (c) {
                var d = c.key;
                d && "normal" == d && ((d = c.styleUrl) && (b[b.length - 1] = d), (c = c.Style) && (b[b.length - 1] = c))
            }
        }
    });
    k = Hp.prototype;
    k.Gf = function (a, b) {
        var c = M(Kp, {
            Document: Sk(this.Gf, this),
            Folder: Sk(this.Gf, this),
            Placemark: Tk(this.Of, this),
            Style: this.Lo.bind(this),
            StyleMap: this.Ko.bind(this)
        });
        if (c = O([], c, a, b, this))return c
    };
    k.Of = function (a, b) {
        var c = O({geometry: null}, Eq, a, b);
        if (c) {
            var d = new Ik, e = a.getAttribute("id");
            null !== e && d.mc(e);
            var e = b[0], f = c.geometry;
            f && un(f, !1, e);
            d.Ua(f);
            delete c.geometry;
            this.c && d.sf(Up(c.Style, c.styleUrl, this.g, this.b, this.i));
            delete c.Style;
            d.G(c);
            return d
        }
    };
    k.Lo = function (a, b) {
        var c = a.getAttribute("id");
        if (null !== c) {
            var d = nq(a, b);
            d && (c = a.baseURI ? Bp(a.baseURI, "#" + c).toString() : "#" + c, this.b[c] = d)
        }
    };
    k.Ko = function (a, b) {
        var c = a.getAttribute("id");
        if (null !== c) {
            var d = O(void 0, Dq, a, b);
            d && (c = a.baseURI ? Bp(a.baseURI, "#" + c).toString() : "#" + c, this.b[c] = d)
        }
    };
    k.Ph = function (a, b) {
        if (!jb(Kp, a.namespaceURI))return null;
        var c = this.Of(a, [sn(this, a, b)]);
        return c ? c : null
    };
    k.lc = function (a, b) {
        if (!jb(Kp, a.namespaceURI))return [];
        var c;
        c = a.localName;
        if ("Document" == c || "Folder" == c)return (c = this.Gf(a, [sn(this, a, b)])) ? c : [];
        if ("Placemark" == c)return (c = this.Of(a, [sn(this, a, b)])) ? [c] : [];
        if ("kml" == c) {
            c = [];
            var d;
            for (d = a.firstElementChild; d; d = d.nextElementSibling) {
                var e = this.lc(d, b);
                e && mb(c, e)
            }
            return c
        }
        return []
    };
    k.Fo = function (a) {
        if (Pk(a))return Gq(this, a);
        if (Qk(a))return Hq(this, a);
        if ("string" === typeof a)return a = Rk(a), Gq(this, a)
    };
    function Gq(a, b) {
        var c;
        for (c = b.firstChild; c; c = c.nextSibling)if (c.nodeType == Node.ELEMENT_NODE) {
            var d = Hq(a, c);
            if (d)return d
        }
    }

    function Hq(a, b) {
        var c;
        for (c = b.firstElementChild; c; c = c.nextElementSibling)if (jb(Kp, c.namespaceURI) && "name" == c.localName)return U(c);
        for (c = b.firstElementChild; c; c = c.nextElementSibling) {
            var d = c.localName;
            if (jb(Kp, c.namespaceURI) && ("Document" == d || "Folder" == d || "Placemark" == d || "kml" == d) && (d = Hq(a, c)))return d
        }
    }

    k.Go = function (a) {
        var b = [];
        Pk(a) ? mb(b, Iq(this, a)) : Qk(a) ? mb(b, Jq(this, a)) : "string" === typeof a && (a = Rk(a), mb(b, Iq(this, a)));
        return b
    };
    function Iq(a, b) {
        var c, d = [];
        for (c = b.firstChild; c; c = c.nextSibling)c.nodeType == Node.ELEMENT_NODE && mb(d, Jq(a, c));
        return d
    }

    function Jq(a, b) {
        var c, d = [];
        for (c = b.firstElementChild; c; c = c.nextElementSibling)if (jb(Kp, c.namespaceURI) && "NetworkLink" == c.localName) {
            var e = O({}, Bq, c, []);
            d.push(e)
        }
        for (c = b.firstElementChild; c; c = c.nextElementSibling)e = c.localName, !jb(Kp, c.namespaceURI) || "Document" != e && "Folder" != e && "kml" != e || mb(d, Jq(a, c));
        return d
    }

    function Kq(a, b) {
        var c = te(b), c = [255 * (4 == c.length ? c[3] : 1), c[2], c[1], c[0]], d;
        for (d = 0; 4 > d; ++d) {
            var e = parseInt(c[d], 10).toString(16);
            c[d] = 1 == e.length ? "0" + e : e
        }
        ho(a, c.join(""))
    }

    function Lq(a, b, c) {
        a = {node: a};
        var d = b.X(), e, f;
        "GeometryCollection" == d ? (e = b.ff(), f = Mq) : "MultiPoint" == d ? (e = b.je(), f = Nq) : "MultiLineString" == d ? (e = b.md(), f = Oq) : "MultiPolygon" == d && (e = b.Wd(), f = Pq);
        bl(a, Qq, f, e, c)
    }

    function Rq(a, b, c) {
        bl({node: a}, Sq, Tq, [b], c)
    }

    function Uq(a, b, c) {
        var d = {node: a};
        b.Xa() && a.setAttribute("id", b.Xa());
        a = b.O();
        var e = b.ec();
        e && (e = e.call(b, 0)) && (e = Array.isArray(e) ? e[0] : e, this.l && (a.Style = e), (e = e.Ha()) && (a.name = e.Ha()));
        e = Vq[c[c.length - 1].node.namespaceURI];
        a = $k(a, e);
        bl(d, Wq, Zk, a, c, e);
        a = c[0];
        (b = b.W()) && (b = un(b, !0, a));
        bl(d, Wq, Mq, [b], c)
    }

    function Xq(a, b, c) {
        var d = b.la();
        a = {node: a};
        a.layout = b.f;
        a.stride = b.va();
        bl(a, Yq, Zq, [d], c)
    }

    function $q(a, b, c) {
        b = b.Vd();
        var d = b.shift();
        a = {node: a};
        bl(a, ar, br, b, c);
        bl(a, ar, cr, [d], c)
    }

    function dr(a, b) {
        io(a, Math.round(b * b * 1E6) / 1E6)
    }

    var er = M(Kp, ["Document", "Placemark"]), hr = M(Kp, {
        Document: L(function (a, b, c) {
            bl({node: a}, fr, gr, b, c, void 0, this)
        }), Placemark: L(Uq)
    }), fr = M(Kp, {Placemark: L(Uq)}), ir = {
        Point: "Point",
        LineString: "LineString",
        LinearRing: "LinearRing",
        Polygon: "Polygon",
        MultiPoint: "MultiGeometry",
        MultiLineString: "MultiGeometry",
        MultiPolygon: "MultiGeometry",
        GeometryCollection: "MultiGeometry"
    }, jr = M(Kp, ["href"], M(Jp, ["x", "y", "w", "h"])), kr = M(Kp, {href: L(ho)}, M(Jp, {
        x: L(io),
        y: L(io),
        w: L(io),
        h: L(io)
    })), lr = M(Kp, ["scale", "heading", "Icon",
        "hotSpot"]), nr = M(Kp, {
        Icon: L(function (a, b, c) {
            a = {node: a};
            var d = jr[c[c.length - 1].node.namespaceURI], e = $k(b, d);
            bl(a, kr, Zk, e, c, d);
            d = jr[Jp[0]];
            e = $k(b, d);
            bl(a, kr, mr, e, c, d)
        }), heading: L(io), hotSpot: L(function (a, b) {
            a.setAttribute("x", b.x);
            a.setAttribute("y", b.y);
            a.setAttribute("xunits", b.$f);
            a.setAttribute("yunits", b.ag)
        }), scale: L(dr)
    }), or = M(Kp, ["color", "scale"]), pr = M(Kp, {
        color: L(Kq),
        scale: L(dr)
    }), qr = M(Kp, ["color", "width"]), rr = M(Kp, {
        color: L(Kq),
        width: L(io)
    }), Sq = M(Kp, {LinearRing: L(Xq)}), Qq = M(Kp, {
        LineString: L(Xq),
        Point: L(Xq), Polygon: L($q), GeometryCollection: L(Lq)
    }), Vq = M(Kp, "name open visibility address phoneNumber description styleUrl Style".split(" ")), Wq = M(Kp, {
        MultiGeometry: L(Lq),
        LineString: L(Xq),
        LinearRing: L(Xq),
        Point: L(Xq),
        Polygon: L($q),
        Style: L(function (a, b, c) {
            a = {node: a};
            var d = {}, e = b.c, f = b.f, g = b.a;
            b = b.Ha();
            g instanceof Dh && (d.IconStyle = g);
            b && (d.LabelStyle = b);
            f && (d.LineStyle = f);
            e && (d.PolyStyle = e);
            b = sr[c[c.length - 1].node.namespaceURI];
            d = $k(d, b);
            bl(a, tr, Zk, d, c, b)
        }),
        address: L(ho),
        description: L(ho),
        name: L(ho),
        open: L(go),
        phoneNumber: L(ho),
        styleUrl: L(ho),
        visibility: L(go)
    }), Yq = M(Kp, {
        coordinates: L(function (a, b, c) {
            c = c[c.length - 1];
            var d = c.layout;
            c = c.stride;
            var e;
            "XY" == d || "XYM" == d ? e = 2 : ("XYZ" == d || "XYZM" == d) && (e = 3);
            var f, g = b.length, h = "";
            if (0 < g) {
                h += b[0];
                for (d = 1; d < e; ++d)h += "," + b[d];
                for (f = c; f < g; f += c)for (h += " " + b[f], d = 1; d < e; ++d)h += "," + b[f + d]
            }
            ho(a, h)
        })
    }), ar = M(Kp, {
        outerBoundaryIs: L(Rq),
        innerBoundaryIs: L(Rq)
    }), ur = M(Kp, {color: L(Kq)}), sr = M(Kp, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]), tr = M(Kp, {
        IconStyle: L(function (a,
                               b, c) {
            a = {node: a};
            var d = {}, e = b.Fb(), f = b.ld(), g = {href: b.b.j};
            if (e) {
                g.w = e[0];
                g.h = e[1];
                var h = b.Yb(), l = b.Ia();
                l && f && 0 !== l[0] && l[1] !== e[1] && (g.x = l[0], g.y = f[1] - (l[1] + e[1]));
                h && 0 !== h[0] && h[1] !== e[1] && (d.hotSpot = {x: h[0], $f: "pixels", y: e[1] - h[1], ag: "pixels"})
            }
            d.Icon = g;
            e = b.i;
            1 !== e && (d.scale = e);
            b = b.j;
            0 !== b && (d.heading = b);
            b = lr[c[c.length - 1].node.namespaceURI];
            d = $k(d, b);
            bl(a, nr, Zk, d, c, b)
        }), LabelStyle: L(function (a, b, c) {
            a = {node: a};
            var d = {}, e = b.b;
            e && (d.color = e.b);
            (b = b.a) && 1 !== b && (d.scale = b);
            b = or[c[c.length - 1].node.namespaceURI];
            d = $k(d, b);
            bl(a, pr, Zk, d, c, b)
        }), LineStyle: L(function (a, b, c) {
            a = {node: a};
            var d = qr[c[c.length - 1].node.namespaceURI];
            b = $k({color: b.b, width: b.a}, d);
            bl(a, rr, Zk, b, c, d)
        }), PolyStyle: L(function (a, b, c) {
            bl({node: a}, ur, vr, [b.b], c)
        })
    });

    function mr(a, b, c) {
        return Mk(Jp[0], "gx:" + c)
    }

    function gr(a, b) {
        return Mk(b[b.length - 1].node.namespaceURI, "Placemark")
    }

    function Mq(a, b) {
        if (a)return Mk(b[b.length - 1].node.namespaceURI, ir[a.X()])
    }

    var vr = Xk("color"), Zq = Xk("coordinates"), br = Xk("innerBoundaryIs"), Nq = Xk("Point"), Oq = Xk("LineString"), Tq = Xk("LinearRing"), Pq = Xk("Polygon"), cr = Xk("outerBoundaryIs");
    Hp.prototype.a = function (a, b) {
        b = tn(this, b);
        var c = Mk(Kp[4], "kml");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:gx", Jp[0]);
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var d = {node: c}, e = {};
        1 < a.length ? e.Document = a : 1 == a.length && (e.Placemark = a[0]);
        var f = er[c.namespaceURI],
            e = $k(e, f);
        bl(d, hr, Zk, e, [b], f, this);
        return c
    };
    (function () {
        var a = {}, b = {ja: a};
        (function (c) {
            if ("object" === typeof a && "undefined" !== typeof b)b.ja = c(); else {
                var d;
                "undefined" !== typeof window ? d = window : "undefined" !== typeof global ? d = global : "undefined" !== typeof self ? d = self : d = this;
                d.Rp = c()
            }
        })(function () {
            return function d(a, b, g) {
                function h(m, p) {
                    if (!b[m]) {
                        if (!a[m]) {
                            var q = "function" == typeof require && require;
                            if (!p && q)return q(m, !0);
                            if (l)return l(m, !0);
                            q = Error("Cannot find module '" + m + "'");
                            throw q.code = "MODULE_NOT_FOUND", q;
                        }
                        q = b[m] = {ja: {}};
                        a[m][0].call(q.ja, function (b) {
                            var d =
                                a[m][1][b];
                            return h(d ? d : b)
                        }, q, q.ja, d, a, b, g)
                    }
                    return b[m].ja
                }

                for (var l = "function" == typeof require && require, m = 0; m < g.length; m++)h(g[m]);
                return h
            }({
                1: [function (a, b) {
                    function f(a) {
                        var b;
                        a && a.length && (b = a, a = b.length);
                        a = new Uint8Array(a || 0);
                        b && a.set(b);
                        a.$h = l.$h;
                        a.Zf = l.Zf;
                        a.Sh = l.Sh;
                        a.Ei = l.Ei;
                        a.Nf = l.Nf;
                        a.Di = l.Di;
                        a.Hf = l.Hf;
                        a.Ai = l.Ai;
                        a.toString = l.toString;
                        a.write = l.write;
                        a.slice = l.slice;
                        a.tg = l.tg;
                        a.nj = !0;
                        return a
                    }

                    function g(a) {
                        for (var b = a.length, d = [], e = 0, f, g; e < b; e++) {
                            f = a.charCodeAt(e);
                            if (55295 < f && 57344 > f)if (g)if (56320 >
                                f) {
                                d.push(239, 191, 189);
                                g = f;
                                continue
                            } else f = g - 55296 << 10 | f - 56320 | 65536, g = null; else {
                                56319 < f || e + 1 === b ? d.push(239, 191, 189) : g = f;
                                continue
                            } else g && (d.push(239, 191, 189), g = null);
                            128 > f ? d.push(f) : 2048 > f ? d.push(f >> 6 | 192, f & 63 | 128) : 65536 > f ? d.push(f >> 12 | 224, f >> 6 & 63 | 128, f & 63 | 128) : d.push(f >> 18 | 240, f >> 12 & 63 | 128, f >> 6 & 63 | 128, f & 63 | 128)
                        }
                        return d
                    }

                    b.ja = f;
                    var h = a("ieee754"), l, m, n;
                    l = {
                        $h: function (a) {
                            return (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3]
                        }, Zf: function (a, b) {
                            this[b] = a;
                            this[b + 1] = a >>> 8;
                            this[b + 2] = a >>> 16;
                            this[b +
                            3] = a >>> 24
                        }, Sh: function (a) {
                            return (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + (this[a + 3] << 24)
                        }, Nf: function (a) {
                            return h.read(this, a, !0, 23, 4)
                        }, Hf: function (a) {
                            return h.read(this, a, !0, 52, 8)
                        }, Di: function (a, b) {
                            return h.write(this, a, b, !0, 23, 4)
                        }, Ai: function (a, b) {
                            return h.write(this, a, b, !0, 52, 8)
                        }, toString: function (a, b, d) {
                            var e = a = "";
                            d = Math.min(this.length, d || this.length);
                            for (b = b || 0; b < d; b++) {
                                var f = this[b];
                                127 >= f ? (a += decodeURIComponent(e) + String.fromCharCode(f), e = "") : e += "%" + f.toString(16)
                            }
                            return a += decodeURIComponent(e)
                        },
                        write: function (a, b) {
                            for (var d = a === m ? n : g(a), e = 0; e < d.length; e++)this[b + e] = d[e]
                        }, slice: function (a, b) {
                            return this.subarray(a, b)
                        }, tg: function (a, b) {
                            b = b || 0;
                            for (var d = 0; d < this.length; d++)a[b + d] = this[d]
                        }
                    };
                    l.Ei = l.Zf;
                    f.byteLength = function (a) {
                        m = a;
                        n = g(a);
                        return n.length
                    };
                    f.isBuffer = function (a) {
                        return !(!a || !a.nj)
                    }
                }, {ieee754: 3}], 2: [function (a, b) {
                    (function (f) {
                        function g(a) {
                            this.Cb = l.isBuffer(a) ? a : new l(a || 0);
                            this.da = 0;
                            this.length = this.Cb.length
                        }

                        function h(a, b) {
                            var d = b.Cb, e;
                            e = d[b.da++];
                            a += 268435456 * (e & 127);
                            if (128 >
                                e)return a;
                            e = d[b.da++];
                            a += 34359738368 * (e & 127);
                            if (128 > e)return a;
                            e = d[b.da++];
                            a += 4398046511104 * (e & 127);
                            if (128 > e)return a;
                            e = d[b.da++];
                            a += 562949953421312 * (e & 127);
                            if (128 > e)return a;
                            e = d[b.da++];
                            a += 72057594037927936 * (e & 127);
                            if (128 > e)return a;
                            e = d[b.da++];
                            if (128 > e)return a + 0x7fffffffffffffff * (e & 127);
                            throw Error("Expected varint not more than 10 bytes");
                        }

                        b.ja = g;
                        var l = f.Ap || a("./buffer");
                        g.f = 0;
                        g.g = 1;
                        g.b = 2;
                        g.a = 5;
                        var m = Math.pow(2, 63);
                        g.prototype = {
                            Lf: function (a, b, d) {
                                for (d = d || this.length; this.da < d;) {
                                    var e = this.Da(),
                                        f = this.da;
                                    a(e >> 3, b, this);
                                    this.da === f && this.op(e)
                                }
                                return b
                            }, Bo: function () {
                                var a = this.Cb.Nf(this.da);
                                this.da += 4;
                                return a
                            }, xo: function () {
                                var a = this.Cb.Hf(this.da);
                                this.da += 8;
                                return a
                            }, Da: function () {
                                var a = this.Cb, b, d;
                                d = a[this.da++];
                                b = d & 127;
                                if (128 > d)return b;
                                d = a[this.da++];
                                b |= (d & 127) << 7;
                                if (128 > d)return b;
                                d = a[this.da++];
                                b |= (d & 127) << 14;
                                if (128 > d)return b;
                                d = a[this.da++];
                                b |= (d & 127) << 21;
                                return 128 > d ? b : h(b, this)
                            }, Mo: function () {
                                var a = this.da, b = this.Da();
                                if (b < m)return b;
                                for (var d = this.da - 2; 255 === this.Cb[d];)d--;
                                d < a && (d = a);
                                for (var e = b = 0; e < d - a + 1; e++)var f = ~this.Cb[a + e] & 127, b = b + (4 > e ? f << 7 * e : f * Math.pow(2, 7 * e));
                                return -b - 1
                            }, xd: function () {
                                var a = this.Da();
                                return 1 === a % 2 ? (a + 1) / -2 : a / 2
                            }, vo: function () {
                                return !!this.Da()
                            }, Qf: function () {
                                var a = this.Da() + this.da, b = this.Cb.toString("utf8", this.da, a);
                                this.da = a;
                                return b
                            }, op: function (a) {
                                a &= 7;
                                if (a === g.f)for (; 127 < this.Cb[this.da++];); else if (a === g.b)this.da = this.Da() + this.da; else if (a === g.a)this.da += 4; else if (a === g.g)this.da += 8; else throw Error("Unimplemented type: " + a);
                            }
                        }
                    }).call(this,
                        "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                }, {"./buffer": 1}], 3: [function (a, b, f) {
                    f.read = function (a, b, d, e, f) {
                        var p;
                        p = 8 * f - e - 1;
                        var q = (1 << p) - 1, r = q >> 1, u = -7;
                        f = d ? f - 1 : 0;
                        var x = d ? -1 : 1, v = a[b + f];
                        f += x;
                        d = v & (1 << -u) - 1;
                        v >>= -u;
                        for (u += p; 0 < u; d = 256 * d + a[b + f], f += x, u -= 8);
                        p = d & (1 << -u) - 1;
                        d >>= -u;
                        for (u += e; 0 < u; p = 256 * p + a[b + f], f += x, u -= 8);
                        if (0 === d)d = 1 - r; else {
                            if (d === q)return p ? NaN : Infinity * (v ? -1 : 1);
                            p += Math.pow(2, e);
                            d -= r
                        }
                        return (v ? -1 : 1) * p * Math.pow(2, d - e)
                    };
                    f.write = function (a,
                                        b, d, e, f, p) {
                        var q, r = 8 * p - f - 1, u = (1 << r) - 1, x = u >> 1, v = 23 === f ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                        p = e ? 0 : p - 1;
                        var D = e ? 1 : -1, A = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
                        b = Math.abs(b);
                        isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0, e = u) : (e = Math.floor(Math.log(b) / Math.LN2), 1 > b * (q = Math.pow(2, -e)) && (e--, q *= 2), b = 1 <= e + x ? b + v / q : b + v * Math.pow(2, 1 - x), 2 <= b * q && (e++, q /= 2), e + x >= u ? (b = 0, e = u) : 1 <= e + x ? (b = (b * q - 1) * Math.pow(2, f), e += x) : (b = b * Math.pow(2, x - 1) * Math.pow(2, f), e = 0));
                        for (; 8 <= f; a[d + p] = b & 255, p += D, b /= 256, f -= 8);
                        e = e << f | b;
                        for (r += f; 0 < r; a[d + p] = e & 255, p += D, e /= 256,
                            r -= 8);
                        a[d + p - D] |= 128 * A
                    }
                }, {}]
            }, {}, [2])(2)
        });
        hl = b.ja
    })();
    (function () {
        var a = {}, b = {ja: a};
        (function (c) {
            if ("object" === typeof a && "undefined" !== typeof b)b.ja = c(); else {
                var d;
                "undefined" !== typeof window ? d = window : "undefined" !== typeof global ? d = global : "undefined" !== typeof self ? d = self : d = this;
                d.Up = c()
            }
        })(function () {
            return function d(a, b, g) {
                function h(m, p) {
                    if (!b[m]) {
                        if (!a[m]) {
                            var q = "function" == typeof require && require;
                            if (!p && q)return q(m, !0);
                            if (l)return l(m, !0);
                            q = Error("Cannot find module '" + m + "'");
                            throw q.code = "MODULE_NOT_FOUND", q;
                        }
                        q = b[m] = {ja: {}};
                        a[m][0].call(q.ja, function (b) {
                            var d =
                                a[m][1][b];
                            return h(d ? d : b)
                        }, q, q.ja, d, a, b, g)
                    }
                    return b[m].ja
                }

                for (var l = "function" == typeof require && require, m = 0; m < g.length; m++)h(g[m]);
                return h
            }({
                1: [function (a, b) {
                    b.ja.ej = a("./lib/vectortile.js");
                    b.ja.Np = a("./lib/vectortilefeature.js");
                    b.ja.Op = a("./lib/vectortilelayer.js")
                }, {"./lib/vectortile.js": 2, "./lib/vectortilefeature.js": 3, "./lib/vectortilelayer.js": 4}],
                2: [function (a, b) {
                    function f(a, b, d) {
                        3 === a && (a = new g(d, d.Da() + d.da), a.length && (b[a.name] = a))
                    }

                    var g = a("./vectortilelayer");
                    b.ja = function (a, b) {
                        this.layers =
                            a.Lf(f, {}, b)
                    }
                }, {"./vectortilelayer": 4}],
                3: [function (a, b) {
                    function f(a, b, d, e, f) {
                        this.properties = {};
                        this.extent = d;
                        this.type = 0;
                        this.qc = a;
                        this.Qe = -1;
                        this.Id = e;
                        this.Kd = f;
                        a.Lf(g, this, b)
                    }

                    function g(a, b, d) {
                        if (1 == a)b.Qp = d.Da(); else if (2 == a)for (a = d.Da() + d.da; d.da < a;) {
                            var e = b.Id[d.Da()], f = b.Kd[d.Da()];
                            b.properties[e] = f
                        } else 3 == a ? b.type = d.Da() : 4 == a && (b.Qe = d.da)
                    }

                    var h = a("point-geometry");
                    b.ja = f;
                    f.b = ["Unknown", "Point", "LineString", "Polygon"];
                    f.prototype.Vg = function () {
                        var a = this.qc;
                        a.da = this.Qe;
                        for (var b = a.Da() +
                            a.da, d = 1, e = 0, f = 0, g = 0, u = [], x; a.da < b;)if (e || (e = a.Da(), d = e & 7, e >>= 3), e--, 1 === d || 2 === d)f += a.xd(), g += a.xd(), 1 === d && (x && u.push(x), x = []), x.push(new h(f, g)); else if (7 === d)x && x.push(x[0].clone()); else throw Error("unknown command " + d);
                        x && u.push(x);
                        return u
                    };
                    f.prototype.bbox = function () {
                        var a = this.qc;
                        a.da = this.Qe;
                        for (var b = a.Da() + a.da, d = 1, e = 0, f = 0, g = 0, h = Infinity, x = -Infinity, v = Infinity, D = -Infinity; a.da < b;)if (e || (e = a.Da(), d = e & 7, e >>= 3), e--, 1 === d || 2 === d)f += a.xd(), g += a.xd(), f < h && (h = f), f > x && (x = f), g < v && (v = g), g > D && (D =
                            g); else if (7 !== d)throw Error("unknown command " + d);
                        return [h, v, x, D]
                    }
                }, {"point-geometry": 5}],
                4: [function (a, b) {
                    function f(a, b) {
                        this.version = 1;
                        this.name = null;
                        this.extent = 4096;
                        this.length = 0;
                        this.qc = a;
                        this.Id = [];
                        this.Kd = [];
                        this.Hd = [];
                        a.Lf(g, this, b);
                        this.length = this.Hd.length
                    }

                    function g(a, b, d) {
                        15 === a ? b.version = d.Da() : 1 === a ? b.name = d.Qf() : 5 === a ? b.extent = d.Da() : 2 === a ? b.Hd.push(d.da) : 3 === a ? b.Id.push(d.Qf()) : 4 === a && b.Kd.push(h(d))
                    }

                    function h(a) {
                        for (var b = null, d = a.Da() + a.da; a.da < d;)b = a.Da() >> 3, b = 1 === b ? a.Qf() :
                            2 === b ? a.Bo() : 3 === b ? a.xo() : 4 === b ? a.Mo() : 5 === b ? a.Da() : 6 === b ? a.xd() : 7 === b ? a.vo() : null;
                        return b
                    }

                    var l = a("./vectortilefeature.js");
                    b.ja = f;
                    f.prototype.feature = function (a) {
                        if (0 > a || a >= this.Hd.length)throw Error("feature index out of bounds");
                        this.qc.da = this.Hd[a];
                        a = this.qc.Da() + this.qc.da;
                        return new l(this.qc, a, this.extent, this.Id, this.Kd)
                    }
                }, {"./vectortilefeature.js": 3}],
                5: [function (a, b) {
                    function f(a, b) {
                        this.x = a;
                        this.y = b
                    }

                    b.ja = f;
                    f.prototype = {
                        clone: function () {
                            return new f(this.x, this.y)
                        }, add: function (a) {
                            return this.clone().fj(a)
                        },
                        rotate: function (a) {
                            return this.clone().qj(a)
                        }, round: function () {
                            return this.clone().rj()
                        }, angle: function () {
                            return Math.atan2(this.y, this.x)
                        }, fj: function (a) {
                            this.x += a.x;
                            this.y += a.y;
                            return this
                        }, qj: function (a) {
                            var b = Math.cos(a);
                            a = Math.sin(a);
                            var d = a * this.x + b * this.y;
                            this.x = b * this.x - a * this.y;
                            this.y = d;
                            return this
                        }, rj: function () {
                            this.x = Math.round(this.x);
                            this.y = Math.round(this.y);
                            return this
                        }
                    };
                    f.b = function (a) {
                        return a instanceof f ? a : Array.isArray(a) ? new f(a[0], a[1]) : a
                    }
                }, {}]
            }, {}, [1])(1)
        });
        il = b.ja
    })();
    function wr(a) {
        this.defaultDataProjection = null;
        a = a ? a : {};
        this.defaultDataProjection = new vc({code: "", units: "tile-pixels"});
        this.b = a.featureClass ? a.featureClass : hk;
        this.g = a.geometryName ? a.geometryName : "geometry";
        this.a = a.layerName ? a.layerName : "layer";
        this.f = a.layers ? a.layers : null
    }

    y(wr, rn);
    wr.prototype.X = function () {
        return "arraybuffer"
    };
    wr.prototype.Fa = function (a, b) {
        var c = this.f, d = new hl(a), d = new il.ej(d), e = [], f = this.b, g, h, l;
        for (l in d.layers)if (!c || -1 != c.indexOf(l)) {
            g = d.layers[l];
            for (var m = 0, n = g.length; m < n; ++m) {
                if (f === hk) {
                    var p = g.feature(m);
                    h = l;
                    var q = p.Vg(), r = [], u = [];
                    xr(q, u, r);
                    var x = p.type, v = void 0;
                    1 === x ? v = 1 === q.length ? "Point" : "MultiPoint" : 2 === x ? v = 1 === q.length ? "LineString" : "MultiLineString" : 3 === x && (v = "Polygon");
                    p = p.properties;
                    p[this.a] = h;
                    h = new this.b(v, u, r, p)
                } else {
                    p = g.feature(m);
                    v = l;
                    u = b;
                    h = new this.b;
                    r = p.properties;
                    r[this.a] = v;
                    v =
                        p.type;
                    if (0 === v)v = null; else {
                        p = p.Vg();
                        q = [];
                        x = [];
                        xr(p, x, q);
                        var D = void 0;
                        1 === v ? D = 1 === p.length ? new C(null) : new Bn(null) : 2 === v ? 1 === p.length ? D = new R(null) : D = new S(null) : 3 === v && (D = new E(null));
                        D.ba("XY", x, q);
                        v = D
                    }
                    (u = un(v, !1, tn(this, u))) && (r[this.g] = u);
                    h.G(r);
                    h.Ec(this.g)
                }
                e.push(h)
            }
        }
        return e
    };
    wr.prototype.Oa = function () {
        return this.defaultDataProjection
    };
    wr.prototype.c = function (a) {
        this.f = a
    };
    function xr(a, b, c) {
        for (var d = 0, e = 0, f = a.length; e < f; ++e) {
            var g = a[e], h, l;
            h = 0;
            for (l = g.length; h < l; ++h) {
                var m = g[h];
                b.push(m.x, m.y)
            }
            d += 2 * h;
            c.push(d)
        }
    }

    function yr(a, b) {
        return new zr(a, b)
    }

    function Ar(a, b, c) {
        return new Br(a, b, c)
    }

    function Cr(a) {
        this.Wb = a
    }

    function Dr(a) {
        this.Wb = a
    }

    y(Dr, Cr);
    function Er(a, b, c) {
        this.Wb = a;
        this.b = b;
        this.a = c
    }

    y(Er, Dr);
    function zr(a, b) {
        Er.call(this, "And", a, b)
    }

    y(zr, Er);
    function Fr(a, b) {
        Er.call(this, "Or", a, b)
    }

    y(Fr, Er);
    function Gr(a) {
        this.Wb = "Not";
        this.condition = a
    }

    y(Gr, Dr);
    function Br(a, b, c) {
        this.Wb = "BBOX";
        this.geometryName = a;
        this.extent = b;
        this.srsName = c
    }

    y(Br, Cr);
    function Hr(a, b) {
        this.Wb = a;
        this.b = b
    }

    y(Hr, Cr);
    function Ir(a, b, c, d) {
        Hr.call(this, a, b);
        this.g = c;
        this.a = d
    }

    y(Ir, Hr);
    function Jr(a, b, c) {
        Ir.call(this, "PropertyIsEqualTo", a, b, c)
    }

    y(Jr, Ir);
    function Kr(a, b, c) {
        Ir.call(this, "PropertyIsNotEqualTo", a, b, c)
    }

    y(Kr, Ir);
    function Lr(a, b) {
        Ir.call(this, "PropertyIsLessThan", a, b)
    }

    y(Lr, Ir);
    function Mr(a, b) {
        Ir.call(this, "PropertyIsLessThanOrEqualTo", a, b)
    }

    y(Mr, Ir);
    function Nr(a, b) {
        Ir.call(this, "PropertyIsGreaterThan", a, b)
    }

    y(Nr, Ir);
    function Or(a, b) {
        Ir.call(this, "PropertyIsGreaterThanOrEqualTo", a, b)
    }

    y(Or, Ir);
    function Pr(a) {
        Hr.call(this, "PropertyIsNull", a)
    }

    y(Pr, Hr);
    function Qr(a, b, c) {
        Hr.call(this, "PropertyIsBetween", a);
        this.a = b;
        this.g = c
    }

    y(Qr, Hr);
    function Rr(a, b, c, d, e, f) {
        Hr.call(this, "PropertyIsLike", a);
        this.f = b;
        this.i = void 0 !== c ? c : "*";
        this.c = void 0 !== d ? d : ".";
        this.g = void 0 !== e ? e : "!";
        this.a = f
    }

    y(Rr, Hr);
    function Sr() {
        Un.call(this);
        this.defaultDataProjection = yc("EPSG:4326")
    }

    y(Sr, Un);
    function Tr(a, b) {
        b[b.length - 1].Cd[a.getAttribute("k")] = a.getAttribute("v")
    }

    var Ur = [null], Vr = M(Ur, {
        nd: function (a, b) {
            b[b.length - 1].Rc.push(a.getAttribute("ref"))
        }, tag: Tr
    }), Xr = M(Ur, {
        node: function (a, b) {
            var c = b[0], d = b[b.length - 1], e = a.getAttribute("id"), f = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
            d.Zg[e] = f;
            var g = O({Cd: {}}, Wr, a, b);
            Ha(g.Cd) || (f = new C(f), un(f, !1, c), c = new Ik(f), c.mc(e), c.G(g.Cd), d.features.push(c))
        }, way: function (a, b) {
            for (var c = b[0], d = a.getAttribute("id"), e = O({
                Rc: [],
                Cd: {}
            }, Vr, a, b), f = b[b.length - 1], g = [], h = 0, l = e.Rc.length; h < l; h++)mb(g, f.Zg[e.Rc[h]]);
            e.Rc[0] == e.Rc[e.Rc.length - 1] ? (h = new E(null), h.ba("XY", g, [g.length])) : (h = new R(null), h.ba("XY", g));
            un(h, !1, c);
            c = new Ik(h);
            c.mc(d);
            c.G(e.Cd);
            f.features.push(c)
        }
    }), Wr = M(Ur, {tag: Tr});
    Sr.prototype.lc = function (a, b) {
        var c = sn(this, a, b);
        return "osm" == a.localName && (c = O({Zg: {}, features: []}, Xr, a, [c]), c.features) ? c.features : []
    };
    function Yr(a) {
        return a.getAttributeNS("http://www.w3.org/1999/xlink", "href")
    }

    function Zr() {
    }

    Zr.prototype.read = function (a) {
        return Pk(a) ? this.a(a) : Qk(a) ? this.b(a) : "string" === typeof a ? (a = Rk(a), this.a(a)) : null
    };
    function $r() {
    }

    y($r, Zr);
    $r.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.b(a);
        return null
    };
    $r.prototype.b = function (a) {
        return (a = O({}, as, a, [])) ? a : null
    };
    var bs = [null, "http://www.opengis.net/ows/1.1"], as = M(bs, {
            ServiceIdentification: J(function (a, b) {
                return O({}, cs, a, b)
            }), ServiceProvider: J(function (a, b) {
                return O({}, ds, a, b)
            }), OperationsMetadata: J(function (a, b) {
                return O({}, es, a, b)
            })
        }), fs = M(bs, {
            DeliveryPoint: J(U),
            City: J(U),
            AdministrativeArea: J(U),
            PostalCode: J(U),
            Country: J(U),
            ElectronicMailAddress: J(U)
        }), gs = M(bs, {
            Value: Vk(function (a) {
                return U(a)
            })
        }), hs = M(bs, {
            AllowedValues: J(function (a, b) {
                return O({}, gs, a, b)
            })
        }), js = M(bs, {
            Phone: J(function (a, b) {
                return O({},
                    is, a, b)
            }), Address: J(function (a, b) {
                return O({}, fs, a, b)
            })
        }), ls = M(bs, {
            HTTP: J(function (a, b) {
                return O({}, ks, a, b)
            })
        }), ks = M(bs, {
            Get: Vk(function (a, b) {
                var c = Yr(a);
                return c ? O({href: c}, ms, a, b) : void 0
            }), Post: void 0
        }), ns = M(bs, {
            DCP: J(function (a, b) {
                return O({}, ls, a, b)
            })
        }), es = M(bs, {
            Operation: function (a, b) {
                var c = a.getAttribute("name"), d = O({}, ns, a, b);
                d && (b[b.length - 1][c] = d)
            }
        }), is = M(bs, {Voice: J(U), Facsimile: J(U)}), ms = M(bs, {
            Constraint: Vk(function (a, b) {
                var c = a.getAttribute("name");
                return c ? O({name: c}, hs, a, b) : void 0
            })
        }),
        os = M(bs, {
            IndividualName: J(U), PositionName: J(U), ContactInfo: J(function (a, b) {
                return O({}, js, a, b)
            })
        }), cs = M(bs, {Title: J(U), ServiceTypeVersion: J(U), ServiceType: J(U)}), ds = M(bs, {
            ProviderName: J(U),
            ProviderSite: J(Yr),
            ServiceContact: J(function (a, b) {
                return O({}, os, a, b)
            })
        });

    function ps(a, b, c, d) {
        var e;
        void 0 !== d ? e = d : e = [];
        for (var f = d = 0; f < b;) {
            var g = a[f++];
            e[d++] = a[f++];
            e[d++] = g;
            for (g = 2; g < c; ++g)e[d++] = a[f++]
        }
        e.length = d
    }

    function qs(a) {
        a = a ? a : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = yc("EPSG:4326");
        this.b = a.factor ? a.factor : 1E5;
        this.a = a.geometryLayout ? a.geometryLayout : "XY"
    }

    y(qs, bp);
    function rs(a, b, c) {
        var d, e = Array(b);
        for (d = 0; d < b; ++d)e[d] = 0;
        var f, g;
        f = 0;
        for (g = a.length; f < g;)for (d = 0; d < b; ++d, ++f) {
            var h = a[f], l = h - e[d];
            e[d] = h;
            a[f] = l
        }
        return ss(a, c ? c : 1E5)
    }

    function ts(a, b, c) {
        var d, e = Array(b);
        for (d = 0; d < b; ++d)e[d] = 0;
        a = us(a, c ? c : 1E5);
        var f;
        c = 0;
        for (f = a.length; c < f;)for (d = 0; d < b; ++d, ++c)e[d] += a[c], a[c] = e[d];
        return a
    }

    function ss(a, b) {
        var c = b ? b : 1E5, d, e;
        d = 0;
        for (e = a.length; d < e; ++d)a[d] = Math.round(a[d] * c);
        c = 0;
        for (d = a.length; c < d; ++c)e = a[c], a[c] = 0 > e ? ~(e << 1) : e << 1;
        c = "";
        d = 0;
        for (e = a.length; d < e; ++d) {
            for (var f = a[d], g, h = ""; 32 <= f;)g = (32 | f & 31) + 63, h += String.fromCharCode(g), f >>= 5;
            h += String.fromCharCode(f + 63);
            c += h
        }
        return c
    }

    function us(a, b) {
        var c = b ? b : 1E5, d = [], e = 0, f = 0, g, h;
        g = 0;
        for (h = a.length; g < h; ++g) {
            var l = a.charCodeAt(g) - 63, e = e | (l & 31) << f;
            32 > l ? (d.push(e), f = e = 0) : f += 5
        }
        e = 0;
        for (f = d.length; e < f; ++e)g = d[e], d[e] = g & 1 ? ~(g >> 1) : g >> 1;
        e = 0;
        for (f = d.length; e < f; ++e)d[e] /= c;
        return d
    }

    k = qs.prototype;
    k.ud = function (a, b) {
        var c = this.wd(a, b);
        return new Ik(c)
    };
    k.Kf = function (a, b) {
        return [this.ud(a, b)]
    };
    k.wd = function (a, b) {
        var c = id(this.a), d = ts(a, c, this.b);
        ps(d, d.length, c, d);
        c = vd(d, 0, d.length, c);
        return un(new R(c, this.a), !1, tn(this, b))
    };
    k.He = function (a, b) {
        var c = a.W();
        return c ? this.Ed(c, b) : ""
    };
    k.Ci = function (a, b) {
        return this.He(a[0], b)
    };
    k.Ed = function (a, b) {
        a = un(a, !0, tn(this, b));
        var c = a.la(), d = a.va();
        ps(c, c.length, d, c);
        return rs(c, d, this.b)
    };
    function ws(a) {
        a = a ? a : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = yc(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326")
    }

    y(ws, vn);
    function xs(a, b) {
        var c = [], d, e, f, g;
        f = 0;
        for (g = a.length; f < g; ++f)d = a[f], 0 < f && c.pop(), 0 <= d ? e = b[d] : e = b[~d].slice().reverse(), c.push.apply(c, e);
        d = 0;
        for (e = c.length; d < e; ++d)c[d] = c[d].slice();
        return c
    }

    function ys(a, b, c, d, e) {
        a = a.geometries;
        var f = [], g, h;
        g = 0;
        for (h = a.length; g < h; ++g)f[g] = zs(a[g], b, c, d, e);
        return f
    }

    function zs(a, b, c, d, e) {
        var f = a.type, g = As[f];
        b = "Point" === f || "MultiPoint" === f ? g(a, c, d) : g(a, b);
        c = new Ik;
        c.Ua(un(b, !1, e));
        void 0 !== a.id && c.mc(a.id);
        a.properties && c.G(a.properties);
        return c
    }

    ws.prototype.Jf = function (a, b) {
        if ("Topology" == a.type) {
            var c, d = null, e = null;
            a.transform && (c = a.transform, d = c.scale, e = c.translate);
            var f = a.arcs;
            if (c) {
                c = d;
                var g = e, h, l;
                h = 0;
                for (l = f.length; h < l; ++h) {
                    var m = f[h], n = c, p = g, q = 0, r = 0, u, x, v;
                    x = 0;
                    for (v = m.length; x < v; ++x)u = m[x], q += u[0], r += u[1], u[0] = q, u[1] = r, Bs(u, n, p)
                }
            }
            c = [];
            g = Ga(a.objects);
            h = 0;
            for (l = g.length; h < l; ++h)"GeometryCollection" === g[h].type ? (m = g[h], c.push.apply(c, ys(m, f, d, e, b))) : (m = g[h], c.push(zs(m, f, d, e, b)));
            return c
        }
        return []
    };
    function Bs(a, b, c) {
        a[0] = a[0] * b[0] + c[0];
        a[1] = a[1] * b[1] + c[1]
    }

    ws.prototype.Oa = function () {
        return this.defaultDataProjection
    };
    var As = {
        Point: function (a, b, c) {
            a = a.coordinates;
            b && c && Bs(a, b, c);
            return new C(a)
        }, LineString: function (a, b) {
            var c = xs(a.arcs, b);
            return new R(c)
        }, Polygon: function (a, b) {
            var c = [], d, e;
            d = 0;
            for (e = a.arcs.length; d < e; ++d)c[d] = xs(a.arcs[d], b);
            return new E(c)
        }, MultiPoint: function (a, b, c) {
            a = a.coordinates;
            var d, e;
            if (b && c)for (d = 0, e = a.length; d < e; ++d)Bs(a[d], b, c);
            return new Bn(a)
        }, MultiLineString: function (a, b) {
            var c = [], d, e;
            d = 0;
            for (e = a.arcs.length; d < e; ++d)c[d] = xs(a.arcs[d], b);
            return new S(c)
        }, MultiPolygon: function (a, b) {
            var c =
                [], d, e, f, g, h, l;
            h = 0;
            for (l = a.arcs.length; h < l; ++h) {
                d = a.arcs[h];
                e = [];
                f = 0;
                for (g = d.length; f < g; ++f)e[f] = xs(d[f], b);
                c[h] = e
            }
            return new T(c)
        }
    };

    function Cs(a) {
        a = a ? a : {};
        this.i = a.featureType;
        this.g = a.featureNS;
        this.b = a.gmlFormat ? a.gmlFormat : new lo;
        this.c = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";
        Un.call(this)
    }

    y(Cs, Un);
    Cs.prototype.lc = function (a, b) {
        var c = {featureType: this.i, featureNS: this.g};
        Ea(c, sn(this, a, b ? b : {}));
        c = [c];
        this.b.b["http://www.opengis.net/gml"].featureMember = Tk(Xn.prototype.vd);
        (c = O([], this.b.b, a, c, this.b)) || (c = []);
        return c
    };
    Cs.prototype.o = function (a) {
        if (Pk(a))return Ds(a);
        if (Qk(a))return O({}, Es, a, []);
        if ("string" === typeof a)return a = Rk(a), Ds(a)
    };
    Cs.prototype.l = function (a) {
        if (Pk(a))return Fs(this, a);
        if (Qk(a))return Gs(this, a);
        if ("string" === typeof a)return a = Rk(a), Fs(this, a)
    };
    function Fs(a, b) {
        for (var c = b.firstChild; c; c = c.nextSibling)if (c.nodeType == Node.ELEMENT_NODE)return Gs(a, c)
    }

    var Hs = {"http://www.opengis.net/gml": {boundedBy: J(Xn.prototype.ye, "bounds")}};

    function Gs(a, b) {
        var c = {}, d = fo(b.getAttribute("numberOfFeatures"));
        c.numberOfFeatures = d;
        return O(c, Hs, b, [], a.b)
    }

    var Is = {
        "http://www.opengis.net/wfs": {
            totalInserted: J(eo),
            totalUpdated: J(eo),
            totalDeleted: J(eo)
        }
    }, Js = {
        "http://www.opengis.net/ogc": {
            FeatureId: Tk(function (a) {
                return a.getAttribute("fid")
            })
        }
    }, Ks = {
        "http://www.opengis.net/wfs": {
            Feature: function (a, b) {
                al(Js, a, b)
            }
        }
    }, Es = {
        "http://www.opengis.net/wfs": {
            TransactionSummary: J(function (a, b) {
                return O({}, Is, a, b)
            }, "transactionSummary"), InsertResults: J(function (a, b) {
                return O([], Ks, a, b)
            }, "insertIds")
        }
    };

    function Ds(a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return O({}, Es, a, [])
    }

    var Ls = {"http://www.opengis.net/wfs": {PropertyName: L(ho)}};

    function Ms(a, b) {
        var c = Mk("http://www.opengis.net/ogc", "Filter"), d = Mk("http://www.opengis.net/ogc", "FeatureId");
        c.appendChild(d);
        d.setAttribute("fid", b);
        a.appendChild(c)
    }

    var Ns = {
        "http://www.opengis.net/wfs": {
            Insert: L(function (a, b, c) {
                var d = c[c.length - 1], d = Mk(d.featureNS, d.featureType);
                a.appendChild(d);
                lo.prototype.Bi(d, b, c)
            }), Update: L(function (a, b, c) {
                var d = c[c.length - 1], e = d.featureType, f = d.featurePrefix, f = f ? f : "feature", g = d.featureNS;
                a.setAttribute("typeName", f + ":" + e);
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + f, g);
                e = b.Xa();
                if (void 0 !== e) {
                    for (var f = b.N(), g = [], h = 0, l = f.length; h < l; h++) {
                        var m = b.get(f[h]);
                        void 0 !== m && g.push({name: f[h], value: m})
                    }
                    bl({
                        node: a,
                        srsName: d.srsName
                    }, Ns, Xk("Property"), g, c);
                    Ms(a, e)
                }
            }), Delete: L(function (a, b, c) {
                var d = c[c.length - 1];
                c = d.featureType;
                var e = d.featurePrefix, e = e ? e : "feature", d = d.featureNS;
                a.setAttribute("typeName", e + ":" + c);
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, d);
                b = b.Xa();
                void 0 !== b && Ms(a, b)
            }), Property: L(function (a, b, c) {
                var d = Mk("http://www.opengis.net/wfs", "Name");
                a.appendChild(d);
                ho(d, b.name);
                void 0 !== b.value && null !== b.value && (d = Mk("http://www.opengis.net/wfs", "Value"), a.appendChild(d), b.value instanceof Tc ? lo.prototype.Je(d, b.value, c) : ho(d, b.value))
            }), Native: L(function (a, b) {
                b.wp && a.setAttribute("vendorId", b.wp);
                void 0 !== b.Yo && a.setAttribute("safeToIgnore", b.Yo);
                void 0 !== b.value && ho(a, b.value)
            })
        }
    };

    function Os(a, b, c) {
        a = {node: a};
        var d = b.b;
        bl(a, Ps, Xk(d.Wb), [d], c);
        b = b.a;
        bl(a, Ps, Xk(b.Wb), [b], c)
    }

    function Qs(a, b) {
        void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
        Rs(a, b.b);
        Ss("Literal", a, "" + b.g)
    }

    function Ss(a, b, c) {
        a = Mk("http://www.opengis.net/ogc", a);
        ho(a, c);
        b.appendChild(a)
    }

    function Rs(a, b) {
        Ss("PropertyName", a, b)
    }

    var Ps = {
        "http://www.opengis.net/wfs": {
            Query: L(function (a, b, c) {
                var d = c[c.length - 1], e = d.featurePrefix, f = d.featureNS, g = d.propertyNames, h = d.srsName;
                a.setAttribute("typeName", (e ? e + ":" : "") + b);
                h && a.setAttribute("srsName", h);
                f && a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
                b = Ea({}, d);
                b.node = a;
                bl(b, Ls, Xk("PropertyName"), g, c);
                if (d = d.filter)g = Mk("http://www.opengis.net/ogc", "Filter"), a.appendChild(g), bl({node: g}, Ps, Xk(d.Wb), [d], c)
            })
        }, "http://www.opengis.net/ogc": {
            And: L(Os),
            Or: L(Os),
            Not: L(function (a,
                             b, c) {
                b = b.condition;
                bl({node: a}, Ps, Xk(b.Wb), [b], c)
            }),
            BBOX: L(function (a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Rs(a, b.geometryName);
                lo.prototype.Je(a, b.extent, c)
            }),
            PropertyIsEqualTo: L(Qs),
            PropertyIsNotEqualTo: L(Qs),
            PropertyIsLessThan: L(Qs),
            PropertyIsLessThanOrEqualTo: L(Qs),
            PropertyIsGreaterThan: L(Qs),
            PropertyIsGreaterThanOrEqualTo: L(Qs),
            PropertyIsNull: L(function (a, b) {
                Rs(a, b.b)
            }),
            PropertyIsBetween: L(function (a, b) {
                Rs(a, b.b);
                Ss("LowerBoundary", a, "" + b.a);
                Ss("UpperBoundary", a, "" + b.g)
            }),
            PropertyIsLike: L(function (a,
                                        b) {
                a.setAttribute("wildCard", b.i);
                a.setAttribute("singleChar", b.c);
                a.setAttribute("escapeChar", b.g);
                void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
                Rs(a, b.b);
                Ss("Literal", a, "" + b.f)
            })
        }
    };
    Cs.prototype.j = function (a) {
        var b = Mk("http://www.opengis.net/wfs", "GetFeature");
        b.setAttribute("service", "WFS");
        b.setAttribute("version", "1.1.0");
        var c;
        if (a && (a.handle && b.setAttribute("handle", a.handle), a.outputFormat && b.setAttribute("outputFormat", a.outputFormat), void 0 !== a.maxFeatures && b.setAttribute("maxFeatures", a.maxFeatures), a.resultType && b.setAttribute("resultType", a.resultType), void 0 !== a.startIndex && b.setAttribute("startIndex", a.startIndex), void 0 !== a.count && b.setAttribute("count", a.count),
                c = a.filter, a.bbox)) {
            var d = Ar(a.geometryName, a.bbox, a.srsName);
            c ? c = yr(c, d) : c = d
        }
        b.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.c);
        d = a.featureTypes;
        a = [{
            node: b,
            srsName: a.srsName,
            featureNS: a.featureNS ? a.featureNS : this.g,
            featurePrefix: a.featurePrefix,
            geometryName: a.geometryName,
            filter: c,
            propertyNames: a.propertyNames ? a.propertyNames : []
        }];
        c = Ea({}, a[a.length - 1]);
        c.node = b;
        bl(c, Ps, Xk("Query"), d, a);
        return b
    };
    Cs.prototype.U = function (a, b, c, d) {
        var e = [], f = Mk("http://www.opengis.net/wfs", "Transaction");
        f.setAttribute("service", "WFS");
        f.setAttribute("version", "1.1.0");
        var g, h;
        d && (g = d.gmlOptions ? d.gmlOptions : {}, d.handle && f.setAttribute("handle", d.handle));
        f.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.c);
        a && (h = {
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: d.featurePrefix,
            srsName: d.srsName
        }, Ea(h, g), bl(h, Ns, Xk("Insert"), a, e));
        b && (h = {
            node: f, featureNS: d.featureNS,
            featureType: d.featureType, featurePrefix: d.featurePrefix, srsName: d.srsName
        }, Ea(h, g), bl(h, Ns, Xk("Update"), b, e));
        c && bl({
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: d.featurePrefix,
            srsName: d.srsName
        }, Ns, Xk("Delete"), c, e);
        d.nativeElements && bl({
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: d.featurePrefix,
            srsName: d.srsName
        }, Ns, Xk("Native"), d.nativeElements, e);
        return f
    };
    Cs.prototype.Pf = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.Be(a);
        return null
    };
    Cs.prototype.Be = function (a) {
        if (a.firstElementChild && a.firstElementChild.firstElementChild)for (a = a.firstElementChild.firstElementChild, a = a.firstElementChild; a; a = a.nextElementSibling)if (0 !== a.childNodes.length && (1 !== a.childNodes.length || 3 !== a.firstChild.nodeType)) {
            var b = [{}];
            this.b.ye(a, b);
            return yc(b.pop().srsName)
        }
        return null
    };
    function Ts(a) {
        a = a ? a : {};
        this.defaultDataProjection = null;
        this.b = void 0 !== a.splitCollection ? a.splitCollection : !1
    }

    y(Ts, bp);
    function Us(a) {
        a = a.Z();
        return 0 === a.length ? "" : a[0] + " " + a[1]
    }

    function Vs(a) {
        a = a.Z();
        for (var b = [], c = 0, d = a.length; c < d; ++c)b.push(a[c][0] + " " + a[c][1]);
        return b.join(",")
    }

    function Ws(a) {
        var b = [];
        a = a.Vd();
        for (var c = 0, d = a.length; c < d; ++c)b.push("(" + Vs(a[c]) + ")");
        return b.join(",")
    }

    function Xs(a) {
        var b = a.X();
        a = (0, Ys[b])(a);
        b = b.toUpperCase();
        return 0 === a.length ? b + " EMPTY" : b + "(" + a + ")"
    }

    var Ys = {
        Point: Us, LineString: Vs, Polygon: Ws, MultiPoint: function (a) {
            var b = [];
            a = a.je();
            for (var c = 0, d = a.length; c < d; ++c)b.push("(" + Us(a[c]) + ")");
            return b.join(",")
        }, MultiLineString: function (a) {
            var b = [];
            a = a.md();
            for (var c = 0, d = a.length; c < d; ++c)b.push("(" + Vs(a[c]) + ")");
            return b.join(",")
        }, MultiPolygon: function (a) {
            var b = [];
            a = a.Wd();
            for (var c = 0, d = a.length; c < d; ++c)b.push("(" + Ws(a[c]) + ")");
            return b.join(",")
        }, GeometryCollection: function (a) {
            var b = [];
            a = a.ff();
            for (var c = 0, d = a.length; c < d; ++c)b.push(Xs(a[c]));
            return b.join(",")
        }
    };
    k = Ts.prototype;
    k.ud = function (a, b) {
        var c = this.wd(a, b);
        if (c) {
            var d = new Ik;
            d.Ua(c);
            return d
        }
        return null
    };
    k.Kf = function (a, b) {
        var c = [], d = this.wd(a, b);
        this.b && "GeometryCollection" == d.X() ? c = d.c : c = [d];
        for (var e = [], f = 0, g = c.length; f < g; ++f)d = new Ik, d.Ua(c[f]), e.push(d);
        return e
    };
    k.wd = function (a, b) {
        var c;
        c = new Zs(new $s(a));
        c.b = at(c.a);
        return (c = bt(c)) ? un(c, !1, b) : null
    };
    k.He = function (a, b) {
        var c = a.W();
        return c ? this.Ed(c, b) : ""
    };
    k.Ci = function (a, b) {
        if (1 == a.length)return this.He(a[0], b);
        for (var c = [], d = 0, e = a.length; d < e; ++d)c.push(a[d].W());
        c = new Ln(c);
        return this.Ed(c, b)
    };
    k.Ed = function (a, b) {
        return Xs(un(a, !0, b))
    };
    function $s(a) {
        this.a = a;
        this.b = -1
    }

    function at(a) {
        var b = a.a.charAt(++a.b), c = {position: a.b, value: b};
        if ("(" == b)c.type = 2; else if ("," == b)c.type = 5; else if (")" == b)c.type = 3; else if ("0" <= b && "9" >= b || "." == b || "-" == b) {
            c.type = 4;
            var d, b = a.b, e = !1, f = !1;
            do {
                if ("." == d)e = !0; else if ("e" == d || "E" == d)f = !0;
                d = a.a.charAt(++a.b)
            } while ("0" <= d && "9" >= d || "." == d && (void 0 === e || !e) || !f && ("e" == d || "E" == d) || f && ("-" == d || "+" == d));
            a = parseFloat(a.a.substring(b, a.b--));
            c.value = a
        } else if ("a" <= b && "z" >= b || "A" <= b && "Z" >= b) {
            c.type = 1;
            b = a.b;
            do d = a.a.charAt(++a.b); while ("a" <= d && "z" >=
            d || "A" <= d && "Z" >= d);
            a = a.a.substring(b, a.b--).toUpperCase();
            c.value = a
        } else {
            if (" " == b || "\t" == b || "\r" == b || "\n" == b)return at(a);
            if ("" === b)c.type = 6; else throw Error("Unexpected character: " + b);
        }
        return c
    }

    function Zs(a) {
        this.a = a
    }

    k = Zs.prototype;
    k.match = function (a) {
        if (a = this.b.type == a)this.b = at(this.a);
        return a
    };
    function bt(a) {
        var b = a.b;
        if (a.match(1)) {
            var c = b.value;
            if ("GEOMETRYCOLLECTION" == c) {
                a:{
                    if (a.match(2)) {
                        b = [];
                        do b.push(bt(a)); while (a.match(5));
                        if (a.match(3)) {
                            a = b;
                            break a
                        }
                    } else if (ct(a)) {
                        a = [];
                        break a
                    }
                    throw Error(dt(a));
                }
                return new Ln(a)
            }
            var d = et[c], b = ft[c];
            if (!d || !b)throw Error("Invalid geometry type: " + c);
            a = d.call(a);
            return new b(a)
        }
        throw Error(dt(a));
    }

    k.Ef = function () {
        if (this.match(2)) {
            var a = gt(this);
            if (this.match(3))return a
        } else if (ct(this))return null;
        throw Error(dt(this));
    };
    k.Df = function () {
        if (this.match(2)) {
            var a = ht(this);
            if (this.match(3))return a
        } else if (ct(this))return [];
        throw Error(dt(this));
    };
    k.Ff = function () {
        if (this.match(2)) {
            var a = it(this);
            if (this.match(3))return a
        } else if (ct(this))return [];
        throw Error(dt(this));
    };
    k.io = function () {
        if (this.match(2)) {
            var a;
            if (2 == this.b.type)for (a = [this.Ef()]; this.match(5);)a.push(this.Ef()); else a = ht(this);
            if (this.match(3))return a
        } else if (ct(this))return [];
        throw Error(dt(this));
    };
    k.ho = function () {
        if (this.match(2)) {
            var a = it(this);
            if (this.match(3))return a
        } else if (ct(this))return [];
        throw Error(dt(this));
    };
    k.jo = function () {
        if (this.match(2)) {
            for (var a = [this.Ff()]; this.match(5);)a.push(this.Ff());
            if (this.match(3))return a
        } else if (ct(this))return [];
        throw Error(dt(this));
    };
    function gt(a) {
        for (var b = [], c = 0; 2 > c; ++c) {
            var d = a.b;
            if (a.match(4))b.push(d.value); else break
        }
        if (2 == b.length)return b;
        throw Error(dt(a));
    }

    function ht(a) {
        for (var b = [gt(a)]; a.match(5);)b.push(gt(a));
        return b
    }

    function it(a) {
        for (var b = [a.Df()]; a.match(5);)b.push(a.Df());
        return b
    }

    function ct(a) {
        var b = 1 == a.b.type && "EMPTY" == a.b.value;
        b && (a.b = at(a.a));
        return b
    }

    function dt(a) {
        return "Unexpected `" + a.b.value + "` at position " + a.b.position + " in `" + a.a.a + "`"
    }

    var ft = {
        POINT: C,
        LINESTRING: R,
        POLYGON: E,
        MULTIPOINT: Bn,
        MULTILINESTRING: S,
        MULTIPOLYGON: T
    }, et = {
        POINT: Zs.prototype.Ef,
        LINESTRING: Zs.prototype.Df,
        POLYGON: Zs.prototype.Ff,
        MULTIPOINT: Zs.prototype.io,
        MULTILINESTRING: Zs.prototype.ho,
        MULTIPOLYGON: Zs.prototype.jo
    };

    function jt() {
        this.version = void 0
    }

    y(jt, Zr);
    jt.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.b(a);
        return null
    };
    jt.prototype.b = function (a) {
        this.version = a.getAttribute("version").trim();
        return (a = O({version: this.version}, kt, a, [])) ? a : null
    };
    function lt(a, b) {
        return O({}, mt, a, b)
    }

    function nt(a, b) {
        return O({}, ot, a, b)
    }

    function pt(a, b) {
        var c = lt(a, b);
        if (c) {
            var d = [fo(a.getAttribute("width")), fo(a.getAttribute("height"))];
            c.size = d;
            return c
        }
    }

    function qt(a, b) {
        return O([], rt, a, b)
    }

    var st = [null, "http://www.opengis.net/wms"], kt = M(st, {
        Service: J(function (a, b) {
            return O({}, tt, a, b)
        }), Capability: J(function (a, b) {
            return O({}, ut, a, b)
        })
    }), ut = M(st, {
        Request: J(function (a, b) {
            return O({}, vt, a, b)
        }), Exception: J(function (a, b) {
            return O([], wt, a, b)
        }), Layer: J(function (a, b) {
            return O({}, xt, a, b)
        })
    }), tt = M(st, {
        Name: J(U),
        Title: J(U),
        Abstract: J(U),
        KeywordList: J(qt),
        OnlineResource: J(Yr),
        ContactInformation: J(function (a, b) {
            return O({}, yt, a, b)
        }),
        Fees: J(U),
        AccessConstraints: J(U),
        LayerLimit: J(eo),
        MaxWidth: J(eo),
        MaxHeight: J(eo)
    }), yt = M(st, {
        ContactPersonPrimary: J(function (a, b) {
            return O({}, zt, a, b)
        }), ContactPosition: J(U), ContactAddress: J(function (a, b) {
            return O({}, At, a, b)
        }), ContactVoiceTelephone: J(U), ContactFacsimileTelephone: J(U), ContactElectronicMailAddress: J(U)
    }), zt = M(st, {ContactPerson: J(U), ContactOrganization: J(U)}), At = M(st, {
        AddressType: J(U),
        Address: J(U),
        City: J(U),
        StateOrProvince: J(U),
        PostCode: J(U),
        Country: J(U)
    }), wt = M(st, {Format: Tk(U)}), xt = M(st, {
        Name: J(U), Title: J(U), Abstract: J(U), KeywordList: J(qt), CRS: Vk(U),
        EX_GeographicBoundingBox: J(function (a, b) {
            var c = O({}, Bt, a, b);
            if (c) {
                var d = c.westBoundLongitude, e = c.southBoundLatitude, f = c.eastBoundLongitude, c = c.northBoundLatitude;
                return void 0 === d || void 0 === e || void 0 === f || void 0 === c ? void 0 : [d, e, f, c]
            }
        }), BoundingBox: Vk(function (a) {
            var b = [co(a.getAttribute("minx")), co(a.getAttribute("miny")), co(a.getAttribute("maxx")), co(a.getAttribute("maxy"))], c = [co(a.getAttribute("resx")), co(a.getAttribute("resy"))];
            return {crs: a.getAttribute("CRS"), extent: b, res: c}
        }), Dimension: Vk(function (a) {
            return {
                name: a.getAttribute("name"),
                units: a.getAttribute("units"),
                unitSymbol: a.getAttribute("unitSymbol"),
                "default": a.getAttribute("default"),
                multipleValues: $n(a.getAttribute("multipleValues")),
                nearestValue: $n(a.getAttribute("nearestValue")),
                current: $n(a.getAttribute("current")),
                values: U(a)
            }
        }), Attribution: J(function (a, b) {
            return O({}, Ct, a, b)
        }), AuthorityURL: Vk(function (a, b) {
            var c = lt(a, b);
            if (c)return c.name = a.getAttribute("name"), c
        }), Identifier: Vk(U), MetadataURL: Vk(function (a, b) {
            var c = lt(a, b);
            if (c)return c.type = a.getAttribute("type"),
                c
        }), DataURL: Vk(lt), FeatureListURL: Vk(lt), Style: Vk(function (a, b) {
            return O({}, Dt, a, b)
        }), MinScaleDenominator: J(bo), MaxScaleDenominator: J(bo), Layer: Vk(function (a, b) {
            var c = b[b.length - 1], d = O({}, xt, a, b);
            if (d) {
                var e = $n(a.getAttribute("queryable"));
                void 0 === e && (e = c.queryable);
                d.queryable = void 0 !== e ? e : !1;
                e = fo(a.getAttribute("cascaded"));
                void 0 === e && (e = c.cascaded);
                d.cascaded = e;
                e = $n(a.getAttribute("opaque"));
                void 0 === e && (e = c.opaque);
                d.opaque = void 0 !== e ? e : !1;
                e = $n(a.getAttribute("noSubsets"));
                void 0 === e && (e = c.noSubsets);
                d.noSubsets = void 0 !== e ? e : !1;
                (e = co(a.getAttribute("fixedWidth"))) || (e = c.fixedWidth);
                d.fixedWidth = e;
                (e = co(a.getAttribute("fixedHeight"))) || (e = c.fixedHeight);
                d.fixedHeight = e;
                ["Style", "CRS", "AuthorityURL"].forEach(function (a) {
                    a in c && (d[a] = (d[a] || []).concat(c[a]))
                });
                "EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function (a) {
                    a in d || (d[a] = c[a])
                });
                return d
            }
        })
    }), Ct = M(st, {Title: J(U), OnlineResource: J(Yr), LogoURL: J(pt)}), Bt = M(st, {
        westBoundLongitude: J(bo),
        eastBoundLongitude: J(bo), southBoundLatitude: J(bo), northBoundLatitude: J(bo)
    }), vt = M(st, {GetCapabilities: J(nt), GetMap: J(nt), GetFeatureInfo: J(nt)}), ot = M(st, {
        Format: Vk(U),
        DCPType: Vk(function (a, b) {
            return O({}, Et, a, b)
        })
    }), Et = M(st, {
        HTTP: J(function (a, b) {
            return O({}, Ft, a, b)
        })
    }), Ft = M(st, {Get: J(lt), Post: J(lt)}), Dt = M(st, {
        Name: J(U),
        Title: J(U),
        Abstract: J(U),
        LegendURL: Vk(pt),
        StyleSheetURL: J(lt),
        StyleURL: J(lt)
    }), mt = M(st, {Format: J(U), OnlineResource: J(Yr)}), rt = M(st, {Keyword: Tk(U)});

    function Gt(a) {
        a = a ? a : {};
        this.g = "http://mapserver.gis.umn.edu/mapserver";
        this.b = new ko;
        this.c = a.layers ? a.layers : null;
        Un.call(this)
    }

    y(Gt, Un);
    Gt.prototype.lc = function (a, b) {
        var c = {};
        b && Ea(c, sn(this, a, b));
        var d = [c];
        a.setAttribute("namespaceURI", this.g);
        var e = a.localName, c = [];
        if (0 !== a.childNodes.length) {
            if ("msGMLOutput" == e)for (var f = 0, g = a.childNodes.length; f < g; f++) {
                var h = a.childNodes[f];
                if (h.nodeType === Node.ELEMENT_NODE) {
                    var l = d[0], m = h.localName.replace("_layer", "");
                    if (!this.c || jb(this.c, m)) {
                        m += "_feature";
                        l.featureType = m;
                        l.featureNS = this.g;
                        var n = {};
                        n[m] = Tk(this.b.If, this.b);
                        l = M([l.featureNS, null], n);
                        h.setAttribute("namespaceURI", this.g);
                        (h =
                            O([], l, h, d, this.b)) && mb(c, h)
                    }
                }
            }
            "FeatureCollection" == e && (d = O([], this.b.b, a, [{}], this.b)) && (c = d)
        }
        return c
    };
    function Ht() {
        this.g = new $r
    }

    y(Ht, Zr);
    Ht.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.b(a);
        return null
    };
    Ht.prototype.b = function (a) {
        var b = a.getAttribute("version").trim(), c = this.g.b(a);
        if (!c)return null;
        c.version = b;
        return (c = O(c, It, a, [])) ? c : null
    };
    function Jt(a) {
        var b = U(a).split(" ");
        if (b && 2 == b.length)return a = +b[0], b = +b[1], isNaN(a) || isNaN(b) ? void 0 : [a, b]
    }

    var Kt = [null, "http://www.opengis.net/wmts/1.0"], Lt = [null, "http://www.opengis.net/ows/1.1"], It = M(Kt, {
            Contents: J(function (a, b) {
                return O({}, Mt, a, b)
            })
        }), Mt = M(Kt, {
            Layer: Vk(function (a, b) {
                return O({}, Nt, a, b)
            }), TileMatrixSet: Vk(function (a, b) {
                return O({}, Ot, a, b)
            })
        }), Nt = M(Kt, {
            Style: Vk(function (a, b) {
                var c = O({}, Pt, a, b);
                if (c) {
                    var d = "true" === a.getAttribute("isDefault");
                    c.isDefault = d;
                    return c
                }
            }), Format: Vk(U), TileMatrixSetLink: Vk(function (a, b) {
                return O({}, Qt, a, b)
            }), Dimension: Vk(function (a, b) {
                return O({}, Rt, a, b)
            }),
            ResourceURL: Vk(function (a) {
                var b = a.getAttribute("format"), c = a.getAttribute("template");
                a = a.getAttribute("resourceType");
                var d = {};
                b && (d.format = b);
                c && (d.template = c);
                a && (d.resourceType = a);
                return d
            })
        }, M(Lt, {
            Title: J(U), Abstract: J(U), WGS84BoundingBox: J(function (a, b) {
                var c = O([], St, a, b);
                return 2 != c.length ? void 0 : Kb(c)
            }), Identifier: J(U)
        })), Pt = M(Kt, {
            LegendURL: Vk(function (a) {
                var b = {};
                b.format = a.getAttribute("format");
                b.href = Yr(a);
                return b
            })
        }, M(Lt, {Title: J(U), Identifier: J(U)})), Qt = M(Kt, {TileMatrixSet: J(U)}),
        Rt = M(Kt, {Default: J(U), Value: Vk(U)}, M(Lt, {Identifier: J(U)})), St = M(Lt, {
            LowerCorner: Tk(Jt),
            UpperCorner: Tk(Jt)
        }), Ot = M(Kt, {
            WellKnownScaleSet: J(U), TileMatrix: Vk(function (a, b) {
                return O({}, Tt, a, b)
            })
        }, M(Lt, {SupportedCRS: J(U), Identifier: J(U)})), Tt = M(Kt, {
            TopLeftCorner: J(Jt),
            ScaleDenominator: J(bo),
            TileWidth: J(eo),
            TileHeight: J(eo),
            MatrixWidth: J(eo),
            MatrixHeight: J(eo)
        }, M(Lt, {Identifier: J(U)}));

    function Ut(a) {
        eb.call(this);
        a = a || {};
        this.a = null;
        this.c = Qc;
        this.f = void 0;
        B(this, gb("projection"), this.Nl, this);
        B(this, gb("tracking"), this.Ol, this);
        void 0 !== a.projection && this.dh(yc(a.projection));
        void 0 !== a.trackingOptions && this.si(a.trackingOptions);
        this.ge(void 0 !== a.tracking ? a.tracking : !1)
    }

    y(Ut, eb);
    k = Ut.prototype;
    k.ka = function () {
        this.ge(!1);
        eb.prototype.ka.call(this)
    };
    k.Nl = function () {
        var a = this.ah();
        a && (this.c = Bc(yc("EPSG:4326"), a), this.a && this.set("position", this.c(this.a)))
    };
    k.Ol = function () {
        if (kg) {
            var a = this.bh();
            a && void 0 === this.f ? this.f = pa.navigator.geolocation.watchPosition(this.qo.bind(this), this.ro.bind(this), this.Mg()) : a || void 0 === this.f || (pa.navigator.geolocation.clearWatch(this.f), this.f = void 0)
        }
    };
    k.qo = function (a) {
        a = a.coords;
        this.set("accuracy", a.accuracy);
        this.set("altitude", null === a.altitude ? void 0 : a.altitude);
        this.set("altitudeAccuracy", null === a.altitudeAccuracy ? void 0 : a.altitudeAccuracy);
        this.set("heading", null === a.heading ? void 0 : wa(a.heading));
        this.a ? (this.a[0] = a.longitude, this.a[1] = a.latitude) : this.a = [a.longitude, a.latitude];
        var b = this.c(this.a);
        this.set("position", b);
        this.set("speed", null === a.speed ? void 0 : a.speed);
        a = Nd(Yi, this.a, a.accuracy);
        a.rc(this.c);
        this.set("accuracyGeometry", a);
        this.u()
    };
    k.ro = function (a) {
        a.type = "error";
        this.ge(!1);
        this.b(a)
    };
    k.Mj = function () {
        return this.get("accuracy")
    };
    k.Nj = function () {
        return this.get("accuracyGeometry") || null
    };
    k.Pj = function () {
        return this.get("altitude")
    };
    k.Qj = function () {
        return this.get("altitudeAccuracy")
    };
    k.Ll = function () {
        return this.get("heading")
    };
    k.Ml = function () {
        return this.get("position")
    };
    k.ah = function () {
        return this.get("projection")
    };
    k.wk = function () {
        return this.get("speed")
    };
    k.bh = function () {
        return this.get("tracking")
    };
    k.Mg = function () {
        return this.get("trackingOptions")
    };
    k.dh = function (a) {
        this.set("projection", a)
    };
    k.ge = function (a) {
        this.set("tracking", a)
    };
    k.si = function (a) {
        this.set("trackingOptions", a)
    };
    function Vt(a, b, c) {
        hd.call(this);
        this.Vf(a, b ? b : 0, c)
    }

    y(Vt, hd);
    k = Vt.prototype;
    k.clone = function () {
        var a = new Vt(null), b = this.B.slice();
        jd(a, this.f, b);
        a.u();
        return a
    };
    k.sb = function (a, b, c, d) {
        var e = this.B;
        a -= e[0];
        var f = b - e[1];
        b = a * a + f * f;
        if (b < d) {
            if (0 === b)for (d = 0; d < this.a; ++d)c[d] = e[d]; else for (d = this.wf() / Math.sqrt(b), c[0] = e[0] + d * a, c[1] = e[1] + d * f, d = 2; d < this.a; ++d)c[d] = e[d];
            c.length = this.a;
            return b
        }
        return d
    };
    k.Bc = function (a, b) {
        var c = this.B, d = a - c[0], c = b - c[1];
        return d * d + c * c <= Wt(this)
    };
    k.rd = function () {
        return this.B.slice(0, this.a)
    };
    k.Od = function (a) {
        var b = this.B, c = b[this.a] - b[0];
        return Wb(b[0] - c, b[1] - c, b[0] + c, b[1] + c, a)
    };
    k.wf = function () {
        return Math.sqrt(Wt(this))
    };
    function Wt(a) {
        var b = a.B[a.a] - a.B[0];
        a = a.B[a.a + 1] - a.B[1];
        return b * b + a * a
    }

    k.X = function () {
        return "Circle"
    };
    k.Ka = function (a) {
        var b = this.H();
        return nc(a, b) ? (b = this.rd(), a[0] <= b[0] && a[2] >= b[0] || a[1] <= b[1] && a[3] >= b[1] ? !0 : bc(a, this.sg, this)) : !1
    };
    k.jm = function (a) {
        var b = this.a, c = this.B[b] - this.B[0], d = a.slice();
        d[b] = d[0] + c;
        for (c = 1; c < b; ++c)d[b + c] = a[c];
        jd(this, this.f, d);
        this.u()
    };
    k.Vf = function (a, b, c) {
        if (a) {
            kd(this, c, a, 0);
            this.B || (this.B = []);
            c = this.B;
            a = sd(c, a);
            c[a++] = c[0] + b;
            var d;
            b = 1;
            for (d = this.a; b < d; ++b)c[a++] = c[b];
            c.length = a
        } else jd(this, "XY", null);
        this.u()
    };
    k.km = function (a) {
        this.B[this.a] = this.B[0] + a;
        this.u()
    };
    function Xt(a, b, c) {
        for (var d = [], e = a(0), f = a(1), g = b(e), h = b(f), l = [f, e], m = [h, g], n = [1, 0], p = {}, q = 1E5, r, u, x, v, D; 0 < --q && 0 < n.length;)x = n.pop(), e = l.pop(), g = m.pop(), f = x.toString(), f in p || (d.push(g[0], g[1]), p[f] = !0), v = n.pop(), f = l.pop(), h = m.pop(), D = (x + v) / 2, r = a(D), u = b(r), ua(u[0], u[1], g[0], g[1], h[0], h[1]) < c ? (d.push(h[0], h[1]), f = v.toString(), p[f] = !0) : (n.push(v, D, D, x), m.push(h, u, u, g), l.push(f, r, r, e));
        return d
    }

    function Yt(a, b, c, d, e) {
        var f = yc("EPSG:4326");
        return Xt(function (d) {
            return [a, b + (c - b) * d]
        }, Pc(f, d), e)
    }

    function Zt(a, b, c, d, e) {
        var f = yc("EPSG:4326");
        return Xt(function (d) {
            return [b + (c - b) * d, a]
        }, Pc(f, d), e)
    }

    function $t(a) {
        a = a || {};
        this.c = this.o = null;
        this.g = this.i = Infinity;
        this.f = this.l = -Infinity;
        this.A = this.U = Infinity;
        this.D = this.C = -Infinity;
        this.Ba = void 0 !== a.targetSize ? a.targetSize : 100;
        this.R = void 0 !== a.maxLines ? a.maxLines : 100;
        this.b = [];
        this.a = [];
        this.ya = void 0 !== a.strokeStyle ? a.strokeStyle : au;
        this.v = this.j = void 0;
        this.s = null;
        this.setMap(void 0 !== a.map ? a.map : null)
    }

    var au = new oj({color: "rgba(0,0,0,0.2)"}), bu = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001];

    function cu(a, b, c, d, e, f, g) {
        var h = g;
        b = Yt(b, c, d, a.c, e);
        h = void 0 !== a.b[h] ? a.b[h] : new R(null);
        h.ba("XY", b);
        nc(h.H(), f) && (a.b[g++] = h);
        return g
    }

    function du(a, b, c, d, e) {
        var f = e;
        b = Zt(b, a.f, a.g, a.c, c);
        f = void 0 !== a.a[f] ? a.a[f] : new R(null);
        f.ba("XY", b);
        nc(f.H(), d) && (a.a[e++] = f);
        return e
    }

    k = $t.prototype;
    k.Pl = function () {
        return this.o
    };
    k.ik = function () {
        return this.b
    };
    k.qk = function () {
        return this.a
    };
    k.Rg = function (a) {
        var b = a.vectorContext, c = a.frameState, d = c.extent;
        a = c.viewState;
        var e = a.center, f = a.projection, g = a.resolution;
        a = c.pixelRatio;
        a = g * g / (4 * a * a);
        if (!this.c || !Oc(this.c, f)) {
            var h = yc("EPSG:4326"), l = f.H(), m = f.i, n = Sc(m, h, f), p = m[2], q = m[1], r = m[0], u = n[3], x = n[2], v = n[1], n = n[0];
            this.i = m[3];
            this.g = p;
            this.l = q;
            this.f = r;
            this.U = u;
            this.A = x;
            this.C = v;
            this.D = n;
            this.j = Pc(h, f);
            this.v = Pc(f, h);
            this.s = this.v(kc(l));
            this.c = f
        }
        f.a && (f = f.H(), h = ic(f), c = c.focus[0], c < f[0] || c > f[2]) && (c = h * Math.ceil((f[0] - c) / h), d = [d[0] + c,
            d[1], d[2] + c, d[3]]);
        c = this.s[0];
        f = this.s[1];
        h = -1;
        m = Math.pow(this.Ba * g, 2);
        p = [];
        q = [];
        g = 0;
        for (l = bu.length; g < l; ++g) {
            r = bu[g] / 2;
            p[0] = c - r;
            p[1] = f - r;
            q[0] = c + r;
            q[1] = f + r;
            this.j(p, p);
            this.j(q, q);
            r = Math.pow(q[0] - p[0], 2) + Math.pow(q[1] - p[1], 2);
            if (r <= m)break;
            h = bu[g]
        }
        g = h;
        if (-1 == g)this.b.length = this.a.length = 0; else {
            c = this.v(e);
            e = c[0];
            c = c[1];
            f = this.R;
            h = [Math.max(d[0], this.D), Math.max(d[1], this.C), Math.min(d[2], this.A), Math.min(d[3], this.U)];
            h = Sc(h, this.c, "EPSG:4326");
            m = h[3];
            q = h[1];
            e = Math.floor(e / g) * g;
            p = sa(e, this.f, this.g);
            l = cu(this, p, q, m, a, d, 0);
            for (h = 0; p != this.f && h++ < f;)p = Math.max(p - g, this.f), l = cu(this, p, q, m, a, d, l);
            p = sa(e, this.f, this.g);
            for (h = 0; p != this.g && h++ < f;)p = Math.min(p + g, this.g), l = cu(this, p, q, m, a, d, l);
            this.b.length = l;
            c = Math.floor(c / g) * g;
            e = sa(c, this.l, this.i);
            l = du(this, e, a, d, 0);
            for (h = 0; e != this.l && h++ < f;)e = Math.max(e - g, this.l), l = du(this, e, a, d, l);
            e = sa(c, this.l, this.i);
            for (h = 0; e != this.i && h++ < f;)e = Math.min(e + g, this.i), l = du(this, e, a, d, l);
            this.a.length = l
        }
        b.Sb(null, this.ya);
        a = 0;
        for (e = this.b.length; a < e; ++a)g = this.b[a],
            b.hd(g, null);
        a = 0;
        for (e = this.a.length; a < e; ++a)g = this.a[a], b.hd(g, null)
    };
    k.setMap = function (a) {
        this.o && (this.o.J("postcompose", this.Rg, this), this.o.render());
        a && (a.I("postcompose", this.Rg, this), a.render());
        this.o = a
    };
    function eu(a, b, c, d, e, f, g) {
        oh.call(this, a, b, c, 0, d);
        this.j = e;
        this.g = new Image;
        null !== f && (this.g.crossOrigin = f);
        this.i = {};
        this.c = null;
        this.state = 0;
        this.o = g
    }

    y(eu, oh);
    eu.prototype.a = function (a) {
        if (void 0 !== a) {
            var b;
            a = w(a);
            if (a in this.i)return this.i[a];
            Ha(this.i) ? b = this.g : b = this.g.cloneNode(!1);
            return this.i[a] = b
        }
        return this.g
    };
    eu.prototype.s = function () {
        this.state = 3;
        this.c.forEach(Ka);
        this.c = null;
        ph(this)
    };
    eu.prototype.v = function () {
        void 0 === this.resolution && (this.resolution = jc(this.extent) / this.g.height);
        this.state = 2;
        this.c.forEach(Ka);
        this.c = null;
        ph(this)
    };
    eu.prototype.load = function () {
        if (0 == this.state || 3 == this.state)this.state = 1, ph(this), this.c = [Pa(this.g, "error", this.s, this), Pa(this.g, "load", this.v, this)], this.o(this, this.j)
    };
    function fu(a, b, c, d, e) {
        df.call(this, a, b);
        this.s = c;
        this.g = new Image;
        null !== d && (this.g.crossOrigin = d);
        this.c = {};
        this.j = null;
        this.v = e
    }

    y(fu, df);
    k = fu.prototype;
    k.ka = function () {
        1 == this.state && gu(this);
        this.a && Ta(this.a);
        this.state = 5;
        ef(this);
        df.prototype.ka.call(this)
    };
    k.$a = function (a) {
        if (void 0 !== a) {
            var b = w(a);
            if (b in this.c)return this.c[b];
            a = Ha(this.c) ? this.g : this.g.cloneNode(!1);
            return this.c[b] = a
        }
        return this.g
    };
    k.ib = function () {
        return this.s
    };
    k.Ql = function () {
        this.state = 3;
        gu(this);
        ef(this)
    };
    k.Rl = function () {
        this.state = this.g.naturalWidth && this.g.naturalHeight ? 2 : 4;
        gu(this);
        ef(this)
    };
    k.load = function () {
        if (0 == this.state || 3 == this.state)this.state = 1, ef(this), this.j = [Pa(this.g, "error", this.Ql, this), Pa(this.g, "load", this.Rl, this)], this.v(this, this.s)
    };
    function gu(a) {
        a.j.forEach(Ka);
        a.j = null
    }

    function hu(a) {
        a = a ? a : {};
        Vh.call(this, {handleEvent: qc});
        this.c = a.formatConstructors ? a.formatConstructors : [];
        this.j = a.projection ? yc(a.projection) : null;
        this.a = null;
        this.target = a.target ? a.target : null
    }

    y(hu, Vh);
    function iu(a) {
        a = a.dataTransfer.files;
        var b, c, d;
        b = 0;
        for (c = a.length; b < c; ++b) {
            d = a.item(b);
            var e = new FileReader;
            e.addEventListener("load", this.o.bind(this, d));
            e.readAsText(d)
        }
    }

    function ju(a) {
        a.stopPropagation();
        a.preventDefault();
        a.dataTransfer.dropEffect = "copy"
    }

    hu.prototype.o = function (a, b) {
        var c = b.target.result, d = this.v, e = this.j;
        e || (e = d.aa().l);
        var d = this.c, f = [], g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var l = new d[g];
            var m = {featureProjection: e};
            try {
                f = l.Fa(c, m)
            } catch (n) {
                f = null
            }
            if (f && 0 < f.length)break
        }
        this.b(new ku(lu, this, a, f, e))
    };
    hu.prototype.setMap = function (a) {
        this.a && (this.a.forEach(Ka), this.a = null);
        Vh.prototype.setMap.call(this, a);
        a && (a = this.target ? this.target : a.a, this.a = [B(a, "drop", iu, this), B(a, "dragenter", ju, this), B(a, "dragover", ju, this), B(a, "drop", ju, this)])
    };
    var lu = "addfeatures";

    function ku(a, b, c, d, e) {
        Wa.call(this, a, b);
        this.features = d;
        this.file = c;
        this.projection = e
    }

    y(ku, Wa);
    function mu(a) {
        a = a ? a : {};
        ji.call(this, {handleDownEvent: nu, handleDragEvent: ou, handleUpEvent: pu});
        this.s = a.condition ? a.condition : fi;
        this.a = this.c = void 0;
        this.j = 0;
        this.A = void 0 !== a.duration ? a.duration : 400
    }

    y(mu, ji);
    function ou(a) {
        if (hi(a)) {
            var b = a.map, c = b.Za(), d = a.pixel;
            a = d[0] - c[0] / 2;
            d = c[1] / 2 - d[1];
            c = Math.atan2(d, a);
            a = Math.sqrt(a * a + d * d);
            d = b.aa();
            b.render();
            if (void 0 !== this.c) {
                var e = c - this.c;
                Wh(b, d, d.La() - e)
            }
            this.c = c;
            void 0 !== this.a && (c = this.a * (d.$() / a), Yh(b, d, c));
            void 0 !== this.a && (this.j = this.a / a);
            this.a = a
        }
    }

    function pu(a) {
        if (!hi(a))return !0;
        a = a.map;
        var b = a.aa();
        Xd(b, -1);
        var c = this.j - 1, d = b.La(), d = b.constrainRotation(d, 0);
        Wh(a, b, d, void 0, void 0);
        var d = b.$(), e = this.A, d = b.constrainResolution(d, 0, c);
        Yh(a, b, d, void 0, e);
        this.j = 0;
        return !1
    }

    function nu(a) {
        return hi(a) && this.s(a) ? (Xd(a.map.aa(), 1), this.a = this.c = void 0, !0) : !1
    }

    function qu(a, b) {
        Wa.call(this, a);
        this.feature = b
    }

    y(qu, Wa);
    function ru(a) {
        ji.call(this, {handleDownEvent: su, handleEvent: tu, handleUpEvent: uu});
        this.za = null;
        this.S = !1;
        this.Hc = a.source ? a.source : null;
        this.qb = a.features ? a.features : null;
        this.Cj = a.snapTolerance ? a.snapTolerance : 12;
        this.Y = a.type;
        this.c = vu(this.Y);
        this.Sa = a.minPoints ? a.minPoints : this.c === wu ? 3 : 2;
        this.Aa = a.maxPoints ? a.maxPoints : Infinity;
        this.Ne = a.finishCondition ? a.finishCondition : qc;
        var b = a.geometryFunction;
        if (!b)if ("Circle" === this.Y)b = function (a, b) {
            var c = b ? b : new Vt([NaN, NaN]);
            c.Vf(a[0], Math.sqrt(Hb(a[0],
                a[1])));
            return c
        }; else {
            var c, b = this.c;
            b === xu ? c = C : b === yu ? c = R : b === wu && (c = E);
            b = function (a, b) {
                var f = b;
                f ? f.pa(a) : f = new c(a);
                return f
            }
        }
        this.D = b;
        this.T = this.A = this.a = this.R = this.j = this.s = null;
        this.Fj = a.clickTolerance ? a.clickTolerance * a.clickTolerance : 36;
        this.qa = new G({
            source: new P({useSpatialIndex: !1, wrapX: a.wrapX ? a.wrapX : !1}),
            style: a.style ? a.style : zu()
        });
        this.Hb = a.geometryName;
        this.Bj = a.condition ? a.condition : ei;
        this.ta = a.freehandCondition ? a.freehandCondition : fi;
        B(this, gb("active"), this.yi, this)
    }

    y(ru, ji);
    function zu() {
        var a = wj();
        return function (b) {
            return a[b.W().X()]
        }
    }

    k = ru.prototype;
    k.setMap = function (a) {
        ji.prototype.setMap.call(this, a);
        this.yi()
    };
    function tu(a) {
        this.c !== yu && this.c !== wu || !this.ta(a) || (this.S = !0);
        var b = !this.S;
        this.S && a.type === gh ? (Au(this, a), b = !1) : a.type === fh ? b = Bu(this, a) : a.type === $g && (b = !1);
        return ki.call(this, a) && b
    }

    function su(a) {
        return this.Bj(a) ? (this.za = a.pixel, !0) : this.S ? (this.za = a.pixel, this.s || Cu(this, a), !0) : !1
    }

    function uu(a) {
        this.S = !1;
        var b = this.za, c = a.pixel, d = b[0] - c[0], b = b[1] - c[1], c = !0;
        d * d + b * b <= this.Fj && (Bu(this, a), this.s ? this.c === Du ? this.jd() : Eu(this, a) ? this.Ne(a) && this.jd() : Au(this, a) : (Cu(this, a), this.c === xu && this.jd()), c = !1);
        return c
    }

    function Bu(a, b) {
        if (a.s) {
            var c = b.coordinate, d = a.j.W(), e;
            a.c === xu ? e = a.a : a.c === wu ? (e = a.a[0], e = e[e.length - 1], Eu(a, b) && (c = a.s.slice())) : (e = a.a, e = e[e.length - 1]);
            e[0] = c[0];
            e[1] = c[1];
            a.D(a.a, d);
            a.R && a.R.W().pa(c);
            d instanceof E && a.c !== wu ? (a.A || (a.A = new Ik(new R(null))), d = d.Hg(0), c = a.A.W(), c.ba(d.f, d.la())) : a.T && (c = a.A.W(), c.pa(a.T));
            Fu(a)
        } else c = b.coordinate.slice(), a.R ? a.R.W().pa(c) : (a.R = new Ik(new C(c)), Fu(a));
        return !0
    }

    function Eu(a, b) {
        var c = !1;
        if (a.j) {
            var d = !1, e = [a.s];
            a.c === yu ? d = a.a.length > a.Sa : a.c === wu && (d = a.a[0].length > a.Sa, e = [a.a[0][0], a.a[0][a.a[0].length - 2]]);
            if (d)for (var d = b.map, f = 0, g = e.length; f < g; f++) {
                var h = e[f], l = d.Ga(h), m = b.pixel, c = m[0] - l[0], l = m[1] - l[1], m = a.S && a.ta(b) ? 1 : a.Cj;
                if (c = Math.sqrt(c * c + l * l) <= m) {
                    a.s = h;
                    break
                }
            }
        }
        return c
    }

    function Cu(a, b) {
        var c = b.coordinate;
        a.s = c;
        a.c === xu ? a.a = c.slice() : a.c === wu ? (a.a = [[c.slice(), c.slice()]], a.T = a.a[0]) : (a.a = [c.slice(), c.slice()], a.c === Du && (a.T = a.a));
        a.T && (a.A = new Ik(new R(a.T)));
        c = a.D(a.a);
        a.j = new Ik;
        a.Hb && a.j.Ec(a.Hb);
        a.j.Ua(c);
        Fu(a);
        a.b(new qu("drawstart", a.j))
    }

    function Au(a, b) {
        var c = b.coordinate, d = a.j.W(), e, f;
        if (a.c === yu)a.s = c.slice(), f = a.a, f.push(c.slice()), e = f.length > a.Aa, a.D(f, d); else if (a.c === wu) {
            f = a.a[0];
            f.push(c.slice());
            if (e = f.length > a.Aa)a.s = f[0];
            a.D(a.a, d)
        }
        Fu(a);
        e && a.jd()
    }

    k.Qo = function () {
        var a = this.j.W(), b, c;
        this.c === yu ? (b = this.a, b.splice(-2, 1), this.D(b, a)) : this.c === wu && (b = this.a[0], b.splice(-2, 1), c = this.A.W(), c.pa(b), this.D(this.a, a));
        0 === b.length && (this.s = null);
        Fu(this)
    };
    k.jd = function () {
        var a = Gu(this), b = this.a, c = a.W();
        this.c === yu ? (b.pop(), this.D(b, c)) : this.c === wu && (b[0].pop(), b[0].push(b[0][0]), this.D(b, c));
        "MultiPoint" === this.Y ? a.Ua(new Bn([b])) : "MultiLineString" === this.Y ? a.Ua(new S([b])) : "MultiPolygon" === this.Y && a.Ua(new T([b]));
        this.b(new qu("drawend", a));
        this.qb && this.qb.push(a);
        this.Hc && this.Hc.rb(a)
    };
    function Gu(a) {
        a.s = null;
        var b = a.j;
        b && (a.j = null, a.R = null, a.A = null, a.qa.ha().clear(!0));
        return b
    }

    k.rm = function (a) {
        var b = a.W();
        this.j = a;
        this.a = b.Z();
        a = this.a[this.a.length - 1];
        this.s = a.slice();
        this.a.push(a.slice());
        Fu(this);
        this.b(new qu("drawstart", this.j))
    };
    k.Gc = rc;
    function Fu(a) {
        var b = [];
        a.j && b.push(a.j);
        a.A && b.push(a.A);
        a.R && b.push(a.R);
        a = a.qa.ha();
        a.clear(!0);
        a.Jc(b)
    }

    k.yi = function () {
        var a = this.v, b = this.f();
        a && b || Gu(this);
        this.qa.setMap(b ? a : null)
    };
    function vu(a) {
        var b;
        "Point" === a || "MultiPoint" === a ? b = xu : "LineString" === a || "MultiLineString" === a ? b = yu : "Polygon" === a || "MultiPolygon" === a ? b = wu : "Circle" === a && (b = Du);
        return b
    }

    var xu = "Point", yu = "LineString", wu = "Polygon", Du = "Circle";

    function Hu(a, b, c) {
        Wa.call(this, a);
        this.features = b;
        this.mapBrowserEvent = c
    }

    y(Hu, Wa);
    function Iu(a) {
        ji.call(this, {handleDownEvent: Ju, handleDragEvent: Ku, handleEvent: Lu, handleUpEvent: Mu});
        this.Hb = a.condition ? a.condition : ii;
        this.Sa = function (a) {
            return ei(a) && di(a)
        };
        this.qb = a.deleteCondition ? a.deleteCondition : this.Sa;
        this.Aa = this.c = null;
        this.qa = [0, 0];
        this.D = this.T = !1;
        this.a = new kl;
        this.R = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.s = this.ta = !1;
        this.j = [];
        this.S = new G({
            source: new P({useSpatialIndex: !1, wrapX: !!a.wrapX}),
            style: a.style ? a.style : Nu(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        this.za = {
            Point: this.ym,
            LineString: this.kh,
            LinearRing: this.kh,
            Polygon: this.zm,
            MultiPoint: this.wm,
            MultiLineString: this.vm,
            MultiPolygon: this.xm,
            GeometryCollection: this.um
        };
        this.A = a.features;
        this.A.forEach(this.xf, this);
        B(this.A, "add", this.sm, this);
        B(this.A, "remove", this.tm, this);
        this.Y = null
    }

    y(Iu, ji);
    k = Iu.prototype;
    k.xf = function (a) {
        var b = a.W();
        b.X() in this.za && this.za[b.X()].call(this, a, b);
        (b = this.v) && Ou(this, this.qa, b);
        B(a, "change", this.jh, this)
    };
    function Pu(a, b) {
        a.D || (a.D = !0, a.b(new Hu("modifystart", a.A, b)))
    }

    function Qu(a, b) {
        Ru(a, b);
        a.c && 0 === a.A.dc() && (a.S.ha().nb(a.c), a.c = null);
        Qa(b, "change", a.jh, a)
    }

    function Ru(a, b) {
        var c = a.a, d = [];
        c.forEach(function (a) {
            b === a.feature && d.push(a)
        });
        for (var e = d.length - 1; 0 <= e; --e)c.remove(d[e])
    }

    k.setMap = function (a) {
        this.S.setMap(a);
        ji.prototype.setMap.call(this, a)
    };
    k.sm = function (a) {
        this.xf(a.element)
    };
    k.jh = function (a) {
        this.s || (a = a.target, Qu(this, a), this.xf(a))
    };
    k.tm = function (a) {
        Qu(this, a.element)
    };
    k.ym = function (a, b) {
        var c = b.Z(), c = {feature: a, geometry: b, na: [c, c]};
        this.a.Ca(b.H(), c)
    };
    k.wm = function (a, b) {
        var c = b.Z(), d, e, f;
        e = 0;
        for (f = c.length; e < f; ++e)d = c[e], d = {
            feature: a,
            geometry: b,
            depth: [e],
            index: e,
            na: [d, d]
        }, this.a.Ca(b.H(), d)
    };
    k.kh = function (a, b) {
        var c = b.Z(), d, e, f, g;
        d = 0;
        for (e = c.length - 1; d < e; ++d)f = c.slice(d, d + 2), g = {
            feature: a,
            geometry: b,
            index: d,
            na: f
        }, this.a.Ca(Kb(f), g)
    };
    k.vm = function (a, b) {
        var c = b.Z(), d, e, f, g, h, l, m;
        g = 0;
        for (h = c.length; g < h; ++g)for (d = c[g], e = 0, f = d.length - 1; e < f; ++e)l = d.slice(e, e + 2), m = {
            feature: a,
            geometry: b,
            depth: [g],
            index: e,
            na: l
        }, this.a.Ca(Kb(l), m)
    };
    k.zm = function (a, b) {
        var c = b.Z(), d, e, f, g, h, l, m;
        g = 0;
        for (h = c.length; g < h; ++g)for (d = c[g], e = 0, f = d.length - 1; e < f; ++e)l = d.slice(e, e + 2), m = {
            feature: a,
            geometry: b,
            depth: [g],
            index: e,
            na: l
        }, this.a.Ca(Kb(l), m)
    };
    k.xm = function (a, b) {
        var c = b.Z(), d, e, f, g, h, l, m, n, p, q;
        l = 0;
        for (m = c.length; l < m; ++l)for (n = c[l], g = 0, h = n.length; g < h; ++g)for (d = n[g], e = 0, f = d.length - 1; e < f; ++e)p = d.slice(e, e + 2), q = {
            feature: a,
            geometry: b,
            depth: [g, l],
            index: e,
            na: p
        }, this.a.Ca(Kb(p), q)
    };
    k.um = function (a, b) {
        var c, d = b.c;
        for (c = 0; c < d.length; ++c)this.za[d[c].X()].call(this, a, d[c])
    };
    function Su(a, b) {
        var c = a.c;
        c ? c.W().pa(b) : (c = new Ik(new C(b)), a.c = c, a.S.ha().rb(c))
    }

    function Tu(a, b) {
        return a.index - b.index
    }

    function Ju(a) {
        if (!this.Hb(a))return !1;
        Ou(this, a.pixel, a.map);
        this.j.length = 0;
        this.D = !1;
        var b = this.c;
        if (b) {
            var c = [], b = b.W().Z(), d = Kb([b]), d = nl(this.a, d), e = {};
            d.sort(Tu);
            for (var f = 0, g = d.length; f < g; ++f) {
                var h = d[f], l = h.na, m = w(h.feature), n = h.depth;
                n && (m += "-" + n.join("-"));
                e[m] || (e[m] = Array(2));
                if (Fb(l[0], b) && !e[m][0])this.j.push([h, 0]), e[m][0] = h; else if (Fb(l[1], b) && !e[m][1]) {
                    if ("LineString" !== h.geometry.X() && "MultiLineString" !== h.geometry.X() || !e[m][0] || 0 !== e[m][0].index)this.j.push([h, 1]), e[m][1] = h
                } else w(l) in
                this.Aa && !e[m][0] && !e[m][1] && c.push([h, b])
            }
            c.length && Pu(this, a);
            for (a = c.length - 1; 0 <= a; --a)this.nl.apply(this, c[a])
        }
        return !!this.c
    }

    function Ku(a) {
        this.T = !1;
        Pu(this, a);
        a = a.coordinate;
        for (var b = 0, c = this.j.length; b < c; ++b) {
            for (var d = this.j[b], e = d[0], f = e.depth, g = e.geometry, h = g.Z(), l = e.na, d = d[1]; a.length < g.va();)a.push(0);
            switch (g.X()) {
                case "Point":
                    h = a;
                    l[0] = l[1] = a;
                    break;
                case "MultiPoint":
                    h[e.index] = a;
                    l[0] = l[1] = a;
                    break;
                case "LineString":
                    h[e.index + d] = a;
                    l[d] = a;
                    break;
                case "MultiLineString":
                    h[f[0]][e.index + d] = a;
                    l[d] = a;
                    break;
                case "Polygon":
                    h[f[0]][e.index + d] = a;
                    l[d] = a;
                    break;
                case "MultiPolygon":
                    h[f[1]][f[0]][e.index + d] = a, l[d] = a
            }
            e = g;
            this.s = !0;
            e.pa(h);
            this.s = !1
        }
        Su(this, a)
    }

    function Mu(a) {
        for (var b, c = this.j.length - 1; 0 <= c; --c)b = this.j[c][0], ll(this.a, Kb(b.na), b);
        this.D && (this.b(new Hu("modifyend", this.A, a)), this.D = !1);
        return !1
    }

    function Lu(a) {
        if (!(a instanceof Wg))return !0;
        this.Y = a;
        var b;
        Sd(a.map.aa())[1] || a.type != fh || this.C || (this.qa = a.pixel, Ou(this, a.pixel, a.map));
        this.c && this.qb(a) && (a.type == ah && this.T ? b = !0 : (this.c.W(), b = this.ai()));
        a.type == ah && (this.T = !1);
        return ki.call(this, a) && !b
    }

    function Ou(a, b, c) {
        function d(a, b) {
            return Ib(e, a.na) - Ib(e, b.na)
        }

        var e = c.Ma(b), f = c.Ma([b[0] - a.R, b[1] + a.R]), g = c.Ma([b[0] + a.R, b[1] - a.R]), f = Kb([f, g]), f = nl(a.a, f);
        if (0 < f.length) {
            f.sort(d);
            var g = f[0].na, h = Cb(e, g), l = c.Ga(h);
            if (Math.sqrt(Hb(b, l)) <= a.R) {
                b = c.Ga(g[0]);
                c = c.Ga(g[1]);
                b = Hb(l, b);
                c = Hb(l, c);
                a.ta = Math.sqrt(Math.min(b, c)) <= a.R;
                a.ta && (h = b > c ? g[1] : g[0]);
                Su(a, h);
                c = {};
                c[w(g)] = !0;
                b = 1;
                for (l = f.length; b < l; ++b)if (h = f[b].na, Fb(g[0], h[0]) && Fb(g[1], h[1]) || Fb(g[0], h[1]) && Fb(g[1], h[0]))c[w(h)] = !0; else break;
                a.Aa = c;
                return
            }
        }
        a.c && (a.S.ha().nb(a.c), a.c = null)
    }

    k.nl = function (a, b) {
        for (var c = a.na, d = a.feature, e = a.geometry, f = a.depth, g = a.index, h; b.length < e.va();)b.push(0);
        switch (e.X()) {
            case "MultiLineString":
                h = e.Z();
                h[f[0]].splice(g + 1, 0, b);
                break;
            case "Polygon":
                h = e.Z();
                h[f[0]].splice(g + 1, 0, b);
                break;
            case "MultiPolygon":
                h = e.Z();
                h[f[1]][f[0]].splice(g + 1, 0, b);
                break;
            case "LineString":
                h = e.Z();
                h.splice(g + 1, 0, b);
                break;
            default:
                return
        }
        this.s = !0;
        e.pa(h);
        this.s = !1;
        h = this.a;
        h.remove(a);
        Uu(this, e, g, f, 1);
        var l = {na: [c[0], b], feature: d, geometry: e, depth: f, index: g};
        h.Ca(Kb(l.na),
            l);
        this.j.push([l, 1]);
        c = {na: [b, c[1]], feature: d, geometry: e, depth: f, index: g + 1};
        h.Ca(Kb(c.na), c);
        this.j.push([c, 0]);
        this.T = !0
    };
    k.ai = function () {
        var a = !1;
        if (this.Y && this.Y.type != gh) {
            var b = this.Y;
            Pu(this, b);
            var c = this.j, a = {}, d, e, f, g, h, l, m, n, p;
            for (g = c.length - 1; 0 <= g; --g)f = c[g], m = f[0], n = w(m.feature), m.depth && (n += "-" + m.depth.join("-")), n in a || (a[n] = {}), 0 === f[1] ? (a[n].right = m, a[n].index = m.index) : 1 == f[1] && (a[n].left = m, a[n].index = m.index + 1);
            for (n in a) {
                l = a[n].right;
                g = a[n].left;
                f = a[n].index;
                h = f - 1;
                m = void 0 !== g ? g : l;
                0 > h && (h = 0);
                c = m.geometry;
                d = e = c.Z();
                p = !1;
                switch (c.X()) {
                    case "MultiLineString":
                        2 < e[m.depth[0]].length && (e[m.depth[0]].splice(f,
                            1), p = !0);
                        break;
                    case "LineString":
                        2 < e.length && (e.splice(f, 1), p = !0);
                        break;
                    case "MultiPolygon":
                        d = d[m.depth[1]];
                    case "Polygon":
                        d = d[m.depth[0]], 4 < d.length && (f == d.length - 1 && (f = 0), d.splice(f, 1), p = !0, 0 === f && (d.pop(), d.push(d[0]), h = d.length - 1))
                }
                p && (d = c, this.s = !0, d.pa(e), this.s = !1, e = [], void 0 !== g && (this.a.remove(g), e.push(g.na[0])), void 0 !== l && (this.a.remove(l), e.push(l.na[1])), void 0 !== g && void 0 !== l && (g = {
                    depth: m.depth,
                    feature: m.feature,
                    geometry: m.geometry,
                    index: h,
                    na: e
                }, this.a.Ca(Kb(g.na), g)), Uu(this, c, f, m.depth,
                    -1), this.c && (this.S.ha().nb(this.c), this.c = null))
            }
            a = !0;
            this.b(new Hu("modifyend", this.A, b));
            this.D = !1
        }
        return a
    };
    function Uu(a, b, c, d, e) {
        ql(a.a, b.H(), function (a) {
            a.geometry === b && (void 0 === d || void 0 === a.depth || pb(a.depth, d)) && a.index > c && (a.index += e)
        })
    }

    function Nu() {
        var a = wj();
        return function () {
            return a.Point
        }
    }

    function Vu(a, b, c, d) {
        Wa.call(this, a);
        this.selected = b;
        this.deselected = c;
        this.mapBrowserEvent = d
    }

    y(Vu, Wa);
    function Wu(a) {
        Vh.call(this, {handleEvent: Xu});
        var b = a ? a : {};
        this.C = b.condition ? b.condition : di;
        this.A = b.addCondition ? b.addCondition : rc;
        this.D = b.removeCondition ? b.removeCondition : rc;
        this.R = b.toggleCondition ? b.toggleCondition : fi;
        this.j = b.multi ? b.multi : !1;
        this.o = b.filter ? b.filter : qc;
        this.c = new G({
            source: new P({useSpatialIndex: !1, features: b.features, wrapX: b.wrapX}),
            style: b.style ? b.style : Yu(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        if (b.layers)if ("function" === typeof b.layers)a = function (a) {
            return b.layers(a)
        };
        else {
            var c = b.layers;
            a = function (a) {
                return jb(c, a)
            }
        } else a = qc;
        this.s = a;
        this.a = {};
        a = this.c.ha().c;
        B(a, "add", this.Am, this);
        B(a, "remove", this.Dm, this)
    }

    y(Wu, Vh);
    k = Wu.prototype;
    k.Bm = function () {
        return this.c.ha().c
    };
    k.Cm = function (a) {
        a = w(a);
        return this.a[a]
    };
    function Xu(a) {
        if (!this.C(a))return !0;
        var b = this.A(a), c = this.D(a), d = this.R(a), e = !b && !c && !d, f = a.map, g = this.c.ha().c, h = [], l = [];
        if (e)Fa(this.a), f.kd(a.pixel, function (a, b) {
            if (this.o(a, b)) {
                l.push(a);
                var c = w(a);
                this.a[c] = b;
                return !this.j
            }
        }, this, this.s), 0 < l.length && 1 == g.dc() && g.item(0) == l[0] ? l.length = 0 : (0 !== g.dc() && (h = Array.prototype.concat(g.a), g.clear()), g.qf(l)); else {
            f.kd(a.pixel, function (a, e) {
                if (this.o(a, e)) {
                    if (!b && !d || jb(g.a, a))(c || d) && jb(g.a, a) && (h.push(a), f = w(a), delete this.a[f]); else {
                        l.push(a);
                        var f =
                            w(a);
                        this.a[f] = e
                    }
                    return !this.j
                }
            }, this, this.s);
            for (e = h.length - 1; 0 <= e; --e)g.remove(h[e]);
            g.qf(l)
        }
        (0 < l.length || 0 < h.length) && this.b(new Vu("select", l, h, a));
        return ci(a)
    }

    k.setMap = function (a) {
        var b = this.v, c = this.c.ha().c;
        b && c.forEach(b.wi, b);
        Vh.prototype.setMap.call(this, a);
        this.c.setMap(a);
        a && c.forEach(a.ti, a)
    };
    function Yu() {
        var a = wj();
        mb(a.Polygon, a.LineString);
        mb(a.GeometryCollection, a.LineString);
        return function (b) {
            return a[b.W().X()]
        }
    }

    k.Am = function (a) {
        a = a.element;
        var b = this.v;
        b && b.ti(a)
    };
    k.Dm = function (a) {
        a = a.element;
        var b = this.v;
        b && b.wi(a)
    };
    function Zu(a) {
        ji.call(this, {handleEvent: $u, handleDownEvent: qc, handleUpEvent: av});
        a = a ? a : {};
        this.s = a.source ? a.source : null;
        this.qa = void 0 !== a.vertex ? a.vertex : !0;
        this.T = void 0 !== a.edge ? a.edge : !0;
        this.j = a.features ? a.features : null;
        this.ta = [];
        this.D = {};
        this.R = {};
        this.Y = {};
        this.A = {};
        this.S = null;
        this.c = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.Aa = bv.bind(this);
        this.a = new kl;
        this.za = {
            Point: this.Jm,
            LineString: this.nh,
            LinearRing: this.nh,
            Polygon: this.Km,
            MultiPoint: this.Hm,
            MultiLineString: this.Gm,
            MultiPolygon: this.Im,
            GeometryCollection: this.Fm
        }
    }

    y(Zu, ji);
    k = Zu.prototype;
    k.rb = function (a, b) {
        var c = void 0 !== b ? b : !0, d = w(a), e = a.W();
        if (e) {
            var f = this.za[e.X()];
            f && (this.Y[d] = e.H(Lb()), f.call(this, a, e), c && (this.R[d] = B(e, "change", this.Kk.bind(this, a), this)))
        }
        c && (this.D[d] = B(a, gb(a.a), this.Em, this))
    };
    k.Jj = function (a) {
        this.rb(a)
    };
    k.Kj = function (a) {
        this.nb(a)
    };
    k.lh = function (a) {
        var b;
        a instanceof vl ? b = a.feature : a instanceof ke && (b = a.element);
        this.rb(b)
    };
    k.mh = function (a) {
        var b;
        a instanceof vl ? b = a.feature : a instanceof ke && (b = a.element);
        this.nb(b)
    };
    k.Em = function (a) {
        a = a.target;
        this.nb(a, !0);
        this.rb(a, !0)
    };
    k.Kk = function (a) {
        if (this.C) {
            var b = w(a);
            b in this.A || (this.A[b] = a)
        } else this.xi(a)
    };
    k.nb = function (a, b) {
        var c = void 0 !== b ? b : !0, d = w(a), e = this.Y[d];
        if (e) {
            var f = this.a, g = [];
            ql(f, e, function (b) {
                a === b.feature && g.push(b)
            });
            for (e = g.length - 1; 0 <= e; --e)f.remove(g[e]);
            c && (cb(this.R[d]), delete this.R[d])
        }
        c && (cb(this.D[d]), delete this.D[d])
    };
    k.setMap = function (a) {
        var b = this.v, c = this.ta, d;
        this.j ? d = this.j : this.s && (d = this.s.oe());
        b && (c.forEach(cb), c.length = 0, d.forEach(this.Kj, this));
        ji.prototype.setMap.call(this, a);
        a && (this.j ? c.push(B(this.j, "add", this.lh, this), B(this.j, "remove", this.mh, this)) : this.s && c.push(B(this.s, "addfeature", this.lh, this), B(this.s, "removefeature", this.mh, this)), d.forEach(this.Jj, this))
    };
    k.Gc = rc;
    k.xi = function (a) {
        this.nb(a, !1);
        this.rb(a, !1)
    };
    k.Fm = function (a, b) {
        var c, d = b.c;
        for (c = 0; c < d.length; ++c)this.za[d[c].X()].call(this, a, d[c])
    };
    k.nh = function (a, b) {
        var c = b.Z(), d, e, f, g;
        d = 0;
        for (e = c.length - 1; d < e; ++d)f = c.slice(d, d + 2), g = {feature: a, na: f}, this.a.Ca(Kb(f), g)
    };
    k.Gm = function (a, b) {
        var c = b.Z(), d, e, f, g, h, l, m;
        g = 0;
        for (h = c.length; g < h; ++g)for (d = c[g], e = 0, f = d.length - 1; e < f; ++e)l = d.slice(e, e + 2), m = {
            feature: a,
            na: l
        }, this.a.Ca(Kb(l), m)
    };
    k.Hm = function (a, b) {
        var c = b.Z(), d, e, f;
        e = 0;
        for (f = c.length; e < f; ++e)d = c[e], d = {feature: a, na: [d, d]}, this.a.Ca(b.H(), d)
    };
    k.Im = function (a, b) {
        var c = b.Z(), d, e, f, g, h, l, m, n, p, q;
        l = 0;
        for (m = c.length; l < m; ++l)for (n = c[l], g = 0, h = n.length; g < h; ++g)for (d = n[g], e = 0, f = d.length - 1; e < f; ++e)p = d.slice(e, e + 2), q = {
            feature: a,
            na: p
        }, this.a.Ca(Kb(p), q)
    };
    k.Jm = function (a, b) {
        var c = b.Z(), c = {feature: a, na: [c, c]};
        this.a.Ca(b.H(), c)
    };
    k.Km = function (a, b) {
        var c = b.Z(), d, e, f, g, h, l, m;
        g = 0;
        for (h = c.length; g < h; ++g)for (d = c[g], e = 0, f = d.length - 1; e < f; ++e)l = d.slice(e, e + 2), m = {
            feature: a,
            na: l
        }, this.a.Ca(Kb(l), m)
    };
    function $u(a) {
        var b, c, d = a.pixel, e = a.coordinate;
        b = a.map;
        var f = b.Ma([d[0] - this.c, d[1] + this.c]);
        c = b.Ma([d[0] + this.c, d[1] - this.c]);
        var f = Kb([f, c]), g = nl(this.a, f), h, f = !1, l = null;
        c = null;
        if (0 < g.length) {
            this.S = e;
            g.sort(this.Aa);
            g = g[0].na;
            if (this.qa && !this.T) {
                if (e = b.Ga(g[0]), h = b.Ga(g[1]), e = Hb(d, e), d = Hb(d, h), h = Math.sqrt(Math.min(e, d)), h = h <= this.c)f = !0, l = e > d ? g[1] : g[0], c = b.Ga(l)
            } else this.T && (l = Cb(e, g), c = b.Ga(l), Math.sqrt(Hb(d, c)) <= this.c && (f = !0, this.qa && (e = b.Ga(g[0]), h = b.Ga(g[1]), e = Hb(c, e), d = Hb(c, h), h = Math.sqrt(Math.min(e,
                d)), h = h <= this.c))) && (l = e > d ? g[1] : g[0], c = b.Ga(l));
            f && (c = [Math.round(c[0]), Math.round(c[1])])
        }
        b = l;
        f && (a.coordinate = b.slice(0, 2), a.pixel = c);
        return ki.call(this, a)
    }

    function av() {
        var a = Ga(this.A);
        a.length && (a.forEach(this.xi, this), this.A = {});
        return !1
    }

    function bv(a, b) {
        return Ib(this.S, a.na) - Ib(this.S, b.na)
    }

    function cv(a, b, c) {
        Wa.call(this, a);
        this.features = b;
        this.coordinate = c
    }

    y(cv, Wa);
    function dv(a) {
        ji.call(this, {handleDownEvent: ev, handleDragEvent: fv, handleMoveEvent: gv, handleUpEvent: hv});
        this.s = void 0;
        this.a = null;
        this.c = void 0 !== a.features ? a.features : null;
        var b;
        if (a.layers)if ("function" === typeof a.layers)b = function (b) {
            return a.layers(b)
        }; else {
            var c = a.layers;
            b = function (a) {
                return jb(c, a)
            }
        } else b = qc;
        this.A = b;
        this.j = null
    }

    y(dv, ji);
    function ev(a) {
        this.j = iv(this, a.pixel, a.map);
        return !this.a && this.j ? (this.a = a.coordinate, gv.call(this, a), this.b(new cv("translatestart", this.c, a.coordinate)), !0) : !1
    }

    function hv(a) {
        return this.a ? (this.a = null, gv.call(this, a), this.b(new cv("translateend", this.c, a.coordinate)), !0) : !1
    }

    function fv(a) {
        if (this.a) {
            a = a.coordinate;
            var b = a[0] - this.a[0], c = a[1] - this.a[1];
            if (this.c)this.c.forEach(function (a) {
                var d = a.W();
                d.Sc(b, c);
                a.Ua(d)
            }); else if (this.j) {
                var d = this.j.W();
                d.Sc(b, c);
                this.j.Ua(d)
            }
            this.a = a;
            this.b(new cv("translating", this.c, a))
        }
    }

    function gv(a) {
        var b = a.map.yc();
        if (a = a.map.kd(a.pixel, function (a) {
                return a
            })) {
            var c = !1;
            this.c && jb(this.c.a, a) && (c = !0);
            this.s = b.style.cursor;
            b.style.cursor = this.a ? "-webkit-grabbing" : c ? "-webkit-grab" : "pointer";
            b.style.cursor = this.a ? c ? "grab" : "pointer" : "grabbing"
        } else b.style.cursor = void 0 !== this.s ? this.s : "", this.s = void 0
    }

    function iv(a, b, c) {
        var d = null;
        b = c.kd(b, function (a) {
            return a
        }, a, a.A);
        a.c && jb(a.c.a, b) && (d = b);
        return d
    }

    function V(a) {
        a = a ? a : {};
        var b = Ea({}, a);
        delete b.gradient;
        delete b.radius;
        delete b.blur;
        delete b.shadow;
        delete b.weight;
        G.call(this, b);
        this.f = null;
        this.ia = void 0 !== a.shadow ? a.shadow : 250;
        this.Y = void 0;
        this.c = null;
        B(this, gb("gradient"), this.Lk, this);
        this.ii(a.gradient ? a.gradient : jv);
        this.di(void 0 !== a.blur ? a.blur : 15);
        this.qh(void 0 !== a.radius ? a.radius : 8);
        B(this, gb("blur"), this.lf, this);
        B(this, gb("radius"), this.lf, this);
        this.lf();
        var c = a.weight ? a.weight : "weight", d;
        "string" === typeof c ? d = function (a) {
            return a.get(c)
        } :
            d = c;
        this.l(function (a) {
            a = d(a);
            a = void 0 !== a ? sa(a, 0, 1) : 1;
            var b = 255 * a | 0, c = this.c[b];
            c || (c = [new rj({image: new Dh({opacity: a, src: this.Y})})], this.c[b] = c);
            return c
        }.bind(this));
        this.set("renderOrder", null);
        B(this, "render", this.dl, this)
    }

    y(V, G);
    var jv = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];
    k = V.prototype;
    k.zg = function () {
        return this.get("blur")
    };
    k.Gg = function () {
        return this.get("gradient")
    };
    k.ph = function () {
        return this.get("radius")
    };
    k.Lk = function () {
        for (var a = this.Gg(), b = Oe(1, 256), c = b.createLinearGradient(0, 0, 1, 256), d = 1 / (a.length - 1), e = 0, f = a.length; e < f; ++e)c.addColorStop(e * d, a[e]);
        b.fillStyle = c;
        b.fillRect(0, 0, 1, 256);
        this.f = b.getImageData(0, 0, 1, 256).data
    };
    k.lf = function () {
        var a = this.ph(), b = this.zg(), c = a + b + 1, d = 2 * c, d = Oe(d, d);
        d.shadowOffsetX = d.shadowOffsetY = this.ia;
        d.shadowBlur = b;
        d.shadowColor = "#000";
        d.beginPath();
        b = c - this.ia;
        d.arc(b, b, a, 0, 2 * Math.PI, !0);
        d.fill();
        this.Y = d.canvas.toDataURL();
        this.c = Array(256);
        this.u()
    };
    k.dl = function (a) {
        a = a.context;
        var b = a.canvas, b = a.getImageData(0, 0, b.width, b.height), c = b.data, d, e, f;
        d = 0;
        for (e = c.length; d < e; d += 4)if (f = 4 * c[d + 3])c[d] = this.f[f], c[d + 1] = this.f[f + 1], c[d + 2] = this.f[f + 2];
        a.putImageData(b, 0, 0)
    };
    k.di = function (a) {
        this.set("blur", a)
    };
    k.ii = function (a) {
        this.set("gradient", a)
    };
    k.qh = function (a) {
        this.set("radius", a)
    };
    function kv(a, b, c, d) {
        function e() {
            delete pa[g];
            f.parentNode.removeChild(f)
        }

        var f = pa.document.createElement("script"), g = "olc_" + w(b);
        f.async = !0;
        f.src = a + (-1 == a.indexOf("?") ? "?" : "&") + (d || "callback") + "=" + g;
        var h = pa.setTimeout(function () {
            e();
            c && c()
        }, 1E4);
        pa[g] = function (a) {
            pa.clearTimeout(h);
            e();
            b(a)
        };
        pa.document.getElementsByTagName("head")[0].appendChild(f)
    }

    function lv(a, b, c, d, e, f, g, h, l, m, n) {
        df.call(this, e, 0);
        this.R = void 0 !== n ? n : !1;
        this.D = g;
        this.C = h;
        this.l = null;
        this.c = {};
        this.j = b;
        this.v = d;
        this.U = f ? f : e;
        this.g = [];
        this.Wc = null;
        this.s = 0;
        f = d.Ea(this.U);
        h = this.v.H();
        e = this.j.H();
        f = h ? mc(f, h) : f;
        if (0 === gc(f))this.state = 4; else if ((h = a.H()) && (e ? e = mc(e, h) : e = h), d = d.$(this.U[0]), d = tk(a, c, kc(f), d), !isFinite(d) || 0 >= d)this.state = 4; else if (this.A = new wk(a, c, f, e, d * (void 0 !== m ? m : .5)), 0 === this.A.f.length)this.state = 4; else if (this.s = b.Lb(d), c = yk(this.A), e && (a.a ? (c[1] = sa(c[1],
                e[1], e[3]), c[3] = sa(c[3], e[1], e[3])) : c = mc(c, e)), gc(c))if (a = pf(b, c, this.s), 100 > (a.ea - a.ca + 1) * (a.ga - a.fa + 1)) {
            for (b = a.ca; b <= a.ea; b++)for (c = a.fa; c <= a.ga; c++)(m = l(this.s, b, c, g)) && this.g.push(m);
            0 === this.g.length && (this.state = 4)
        } else this.state = 3; else this.state = 4
    }

    y(lv, df);
    lv.prototype.ka = function () {
        1 == this.state && (this.Wc.forEach(Ka), this.Wc = null);
        df.prototype.ka.call(this)
    };
    lv.prototype.$a = function (a) {
        if (void 0 !== a) {
            var b = w(a);
            if (b in this.c)return this.c[b];
            a = Ha(this.c) ? this.l : this.l.cloneNode(!1);
            return this.c[b] = a
        }
        return this.l
    };
    lv.prototype.zd = function () {
        var a = [];
        this.g.forEach(function (b) {
            b && 2 == b.V() && a.push({extent: this.j.Ea(b.ma), image: b.$a()})
        }, this);
        this.g.length = 0;
        if (0 === a.length)this.state = 3; else {
            var b = this.U[0], c = this.v.Ja(b), d = ea(c) ? c : c[0], c = ea(c) ? c : c[1], b = this.v.$(b), e = this.j.$(this.s), f = this.v.Ea(this.U);
            this.l = vk(d, c, this.D, e, this.j.H(), b, f, this.A, a, this.C, this.R);
            this.state = 2
        }
        ef(this)
    };
    lv.prototype.load = function () {
        if (0 == this.state) {
            this.state = 1;
            ef(this);
            var a = 0;
            this.Wc = [];
            this.g.forEach(function (b) {
                var c = b.V();
                if (0 == c || 1 == c) {
                    a++;
                    var d;
                    d = B(b, "change", function () {
                        var c = b.V();
                        if (2 == c || 3 == c || 4 == c)Ka(d), a--, 0 === a && (this.Wc.forEach(Ka), this.Wc = null, this.zd())
                    }, this);
                    this.Wc.push(d)
                }
            }, this);
            this.g.forEach(function (a) {
                0 == a.V() && a.load()
            });
            0 === a && pa.setTimeout(this.zd.bind(this), 0)
        }
    };
    function W(a) {
        Jl.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : mv,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: a.wrapX
        });
        this.crossOrigin = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.tileClass = void 0 !== a.tileClass ? a.tileClass : fu;
        this.i = {};
        this.s = {};
        this.qa = a.reprojectionErrorThreshold;
        this.C = !1
    }

    y(W, Jl);
    k = W.prototype;
    k.Ah = function () {
        if (cf(this.a))return !0;
        for (var a in this.i)if (cf(this.i[a]))return !0;
        return !1
    };
    k.Lc = function (a, b) {
        var c = this.pd(a);
        this.a.Lc(this.a == c ? b : {});
        for (var d in this.i) {
            var e = this.i[d];
            e.Lc(e == c ? b : {})
        }
    };
    k.Ud = function (a) {
        return this.f && a && !Oc(this.f, a) ? 0 : this.gf()
    };
    k.gf = function () {
        return 0
    };
    k.jf = function (a) {
        return this.f && a && !Oc(this.f, a) ? !1 : Jl.prototype.jf.call(this, a)
    };
    k.eb = function (a) {
        var b = this.f;
        return !this.tileGrid || b && !Oc(b, a) ? (b = w(a).toString(), b in this.s || (this.s[b] = vf(a)), this.s[b]) : this.tileGrid
    };
    k.pd = function (a) {
        var b = this.f;
        if (!b || Oc(b, a))return this.a;
        a = w(a).toString();
        a in this.i || (this.i[a] = new bf);
        return this.i[a]
    };
    function nv(a, b, c, d, e, f, g) {
        b = [b, c, d];
        e = (c = Cf(a, b, f)) ? a.tileUrlFunction(c, e, f) : void 0;
        e = new a.tileClass(b, void 0 !== e ? 0 : 4, void 0 !== e ? e : "", a.crossOrigin, a.tileLoadFunction);
        e.key = g;
        B(e, "change", a.Bh, a);
        return e
    }

    k.ac = function (a, b, c, d, e) {
        if (this.f && e && !Oc(this.f, e)) {
            var f = this.pd(e);
            b = [a, b, c];
            a = this.Eb.apply(this, b);
            if (Ze(f, a))return f.get(a);
            var g = this.f;
            c = this.eb(g);
            var h = this.eb(e), l = Cf(this, b, e);
            d = new lv(g, c, e, h, b, l, this.bc(d), this.gf(), function (a, b, c, d) {
                return ov(this, a, b, c, d, g)
            }.bind(this), this.qa, this.C);
            f.set(a, d);
            return d
        }
        return ov(this, a, b, c, d, e)
    };
    function ov(a, b, c, d, e, f) {
        var g, h = a.Eb(b, c, d), l = a.cc;
        if (Ze(a.a, h)) {
            if (g = a.a.get(h), g.key != l) {
                var m = g;
                g.a && g.a.key == l ? (g = g.a, 2 == m.V() && (g.a = m)) : (g = nv(a, b, c, d, e, f, l), 2 == m.V() ? g.a = m : m.a && 2 == m.a.V() && (g.a = m.a, m.a = null));
                g.a && (g.a.a = null);
                a.a.replace(h, g)
            }
        } else g = nv(a, b, c, d, e, f, l), a.a.set(h, g);
        return g
    }

    k.zb = function (a) {
        if (this.C != a) {
            this.C = a;
            for (var b in this.i)this.i[b].clear();
            this.u()
        }
    };
    k.Ab = function (a, b) {
        var c = yc(a);
        c && (c = w(c).toString(), c in this.s || (this.s[c] = b))
    };
    function mv(a, b) {
        a.$a().src = b
    }

    function pv(a) {
        W.call(this, {
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            opaque: !0,
            projection: yc("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.j = void 0 !== a.culture ? a.culture : "en-us";
        this.c = void 0 !== a.maxZoom ? a.maxZoom : -1;
        kv("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + a.imagerySet + "?uriScheme=https&include=ImageryProviders&key=" + a.key, this.v.bind(this), void 0, "jsonp")
    }

    y(pv, W);
    var qv = new je({html: '<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});
    pv.prototype.v = function (a) {
        if (200 != a.statusCode || "OK" != a.statusDescription || "ValidCredentials" != a.authenticationResultCode || 1 != a.resourceSets.length || 1 != a.resourceSets[0].resources.length)lf(this, "error"); else {
            var b = a.brandLogoUri;
            -1 == b.indexOf("https") && (b = b.replace("http", "https"));
            var c = a.resourceSets[0].resources[0], d = -1 == this.c ? c.zoomMax : this.c;
            a = wf(this.f);
            var e = yf({
                extent: a,
                minZoom: c.zoomMin,
                maxZoom: d,
                tileSize: c.imageWidth == c.imageHeight ? c.imageWidth : [c.imageWidth, c.imageHeight]
            });
            this.tileGrid =
                e;
            var f = this.j;
            this.tileUrlFunction = Gl(c.imageUrlSubdomains.map(function (a) {
                var b = [0, 0, 0], d = c.imageUrl.replace("{subdomain}", a).replace("{culture}", f);
                return function (a) {
                    if (a)return $e(a[0], a[1], -a[2] - 1, b), d.replace("{quadkey}", af(b))
                }
            }));
            if (c.imageryProviders) {
                var g = Bc(yc("EPSG:4326"), this.f);
                a = c.imageryProviders.map(function (a) {
                    var b = a.attribution, c = {};
                    a.coverageAreas.forEach(function (a) {
                        var b = a.zoomMin, f = Math.min(a.zoomMax, d);
                        a = a.bbox;
                        a = pc([a[1], a[0], a[3], a[2]], g);
                        var h, l;
                        for (h = b; h <= f; ++h)l = h.toString(),
                            b = pf(e, a, h), l in c ? c[l].push(b) : c[l] = [b]
                    });
                    return new je({html: b, tileRanges: c})
                });
                a.push(qv);
                this.oa(a)
            }
            this.R = b;
            lf(this, "ready")
        }
    };
    function rv(a) {
        a = a || {};
        var b = void 0 !== a.projection ? a.projection : "EPSG:3857", c = void 0 !== a.tileGrid ? a.tileGrid : yf({
            extent: wf(b),
            maxZoom: a.maxZoom,
            minZoom: a.minZoom,
            tileSize: a.tileSize
        });
        W.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: a.opaque,
            projection: b,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: c,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        })
    }

    y(rv, W);
    function sv(a) {
        this.v = a.account;
        this.A = a.map || "";
        this.c = a.config || {};
        this.j = {};
        rv.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 18,
            minZoom: a.minZoom,
            projection: a.projection,
            state: "loading",
            wrapX: a.wrapX
        });
        tv(this)
    }

    y(sv, rv);
    k = sv.prototype;
    k.Tj = function () {
        return this.c
    };
    k.up = function (a) {
        Ea(this.c, a);
        tv(this)
    };
    k.$o = function (a) {
        this.c = a || {};
        tv(this)
    };
    function tv(a) {
        var b = JSON.stringify(a.c);
        if (a.j[b])uv(a, a.j[b]); else {
            var c = "https://" + a.v + ".cartodb.com/api/v1/map";
            a.A && (c += "/named/" + a.A);
            var d = new XMLHttpRequest;
            d.addEventListener("load", a.Nk.bind(a, b));
            d.addEventListener("error", a.Mk.bind(a));
            d.open("POST", c);
            d.setRequestHeader("Content-type", "application/json");
            d.send(JSON.stringify(a.c))
        }
    }

    k.Nk = function (a, b) {
        var c = b.target;
        if (200 <= c.status && 300 > c.status) {
            var d;
            try {
                d = JSON.parse(c.responseText)
            } catch (e) {
                lf(this, "error");
                return
            }
            uv(this, d);
            this.j[a] = d;
            lf(this, "ready")
        } else lf(this, "error")
    };
    k.Mk = function () {
        lf(this, "error")
    };
    function uv(a, b) {
        a.Va("https://" + b.cdn_url.https + "/" + a.v + "/api/v1/map/" + b.layergroupid + "/{z}/{x}/{y}.png")
    }

    function Y(a) {
        P.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            wrapX: a.wrapX
        });
        this.C = void 0;
        this.ta = void 0 !== a.distance ? a.distance : 20;
        this.A = [];
        this.ia = a.geometryFunction || function (a) {
                return a.W()
            };
        this.v = a.source;
        this.v.I("change", Y.prototype.Sa, this)
    }

    y(Y, P);
    Y.prototype.Aa = function () {
        return this.v
    };
    Y.prototype.Pc = function (a, b, c) {
        this.v.Pc(a, b, c);
        b !== this.C && (this.clear(), this.C = b, vv(this), this.Jc(this.A))
    };
    Y.prototype.Sa = function () {
        this.clear();
        vv(this);
        this.Jc(this.A);
        this.u()
    };
    function vv(a) {
        if (void 0 !== a.C) {
            a.A.length = 0;
            for (var b = Lb(), c = a.ta * a.C, d = a.v.oe(), e = {}, f = 0, g = d.length; f < g; f++) {
                var h = d[f];
                w(h).toString() in e || !(h = a.ia(h)) || (h = h.Z(), Xb(h, b), Ob(b, c, b), h = a.v.ef(b), h = h.filter(function (a) {
                    a = w(a).toString();
                    return a in e ? !1 : e[a] = !0
                }), a.A.push(wv(a, h)))
            }
        }
    }

    function wv(a, b) {
        for (var c = [0, 0], d = b.length - 1; 0 <= d; --d) {
            var e = a.ia(b[d]);
            e ? Bb(c, e.Z()) : b.splice(d, 1)
        }
        d = 1 / b.length;
        c[0] *= d;
        c[1] *= d;
        c = new Ik(new C(c));
        c.set("features", b);
        return c
    }

    function xv(a, b) {
        var c = Object.keys(b).map(function (a) {
            return a + "=" + encodeURIComponent(b[a])
        }).join("&");
        a = a.replace(/[?&]$/, "");
        a = -1 === a.indexOf("?") ? a + "?" : a + "&";
        return a + c
    }

    function yv(a) {
        a = a || {};
        Ak.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.Y = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.i = a.url;
        this.j = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : Gk;
        this.v = a.params || {};
        this.c = null;
        this.s = [0, 0];
        this.T = 0;
        this.S = void 0 !== a.ratio ? a.ratio : 1.5
    }

    y(yv, Ak);
    k = yv.prototype;
    k.Sm = function () {
        return this.v
    };
    k.Mc = function (a, b, c, d) {
        if (void 0 === this.i)return null;
        b = Bk(this, b);
        var e = this.c;
        if (e && this.T == this.g && e.$() == b && e.f == c && Ub(e.H(), a))return e;
        e = {F: "image", FORMAT: "PNG32", TRANSPARENT: !0};
        Ea(e, this.v);
        a = a.slice();
        var f = (a[0] + a[2]) / 2, g = (a[1] + a[3]) / 2;
        if (1 != this.S) {
            var h = this.S * ic(a) / 2, l = this.S * jc(a) / 2;
            a[0] = f - h;
            a[1] = g - l;
            a[2] = f + h;
            a[3] = g + l
        }
        var h = b / c, l = Math.ceil(ic(a) / h), m = Math.ceil(jc(a) / h);
        a[0] = f - h * l / 2;
        a[2] = f + h * l / 2;
        a[1] = g - h * m / 2;
        a[3] = g + h * m / 2;
        this.s[0] = l;
        this.s[1] = m;
        f = a;
        g = this.s;
        d = d.cb.split(":").pop();
        e.SIZE =
            g[0] + "," + g[1];
        e.BBOX = f.join(",");
        e.BBOXSR = d;
        e.IMAGESR = d;
        e.DPI = 90 * c;
        d = this.i.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage");
        e = xv(d, e);
        this.c = new eu(a, b, c, this.l, e, this.Y, this.j);
        this.T = this.g;
        B(this.c, "change", this.o, this);
        return this.c
    };
    k.Rm = function () {
        return this.j
    };
    k.Tm = function () {
        return this.i
    };
    k.Um = function (a) {
        this.c = null;
        this.j = a;
        this.u()
    };
    k.Vm = function (a) {
        a != this.i && (this.i = a, this.c = null, this.u())
    };
    k.Wm = function (a) {
        Ea(this.v, a);
        this.c = null;
        this.u()
    };
    function zv(a) {
        Ak.call(this, {projection: a.projection, resolutions: a.resolutions});
        this.Y = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.s = void 0 !== a.displayDpi ? a.displayDpi : 96;
        this.j = a.params || {};
        this.T = a.url;
        this.c = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : Gk;
        this.ia = void 0 !== a.hidpi ? a.hidpi : !0;
        this.ta = void 0 !== a.metersPerUnit ? a.metersPerUnit : 1;
        this.v = void 0 !== a.ratio ? a.ratio : 1;
        this.Aa = void 0 !== a.useOverlay ? a.useOverlay : !1;
        this.i = null;
        this.S = 0
    }

    y(zv, Ak);
    k = zv.prototype;
    k.Ym = function () {
        return this.j
    };
    k.Mc = function (a, b, c) {
        b = Bk(this, b);
        c = this.ia ? c : 1;
        var d = this.i;
        if (d && this.S == this.g && d.$() == b && d.f == c && Ub(d.H(), a))return d;
        1 != this.v && (a = a.slice(), oc(a, this.v));
        var e = [ic(a) / b * c, jc(a) / b * c];
        if (void 0 !== this.T) {
            var d = this.T, f = kc(a), g = this.ta, h = ic(a), l = jc(a), m = e[0], n = e[1], p = .0254 / this.s, e = {
                OPERATION: this.Aa ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
                VERSION: "2.0.0",
                LOCALE: "en",
                CLIENTAGENT: "ol.source.ImageMapGuide source",
                CLIP: "1",
                SETDISPLAYDPI: this.s,
                SETDISPLAYWIDTH: Math.round(e[0]),
                SETDISPLAYHEIGHT: Math.round(e[1]),
                SETVIEWSCALE: n * h > m * l ? h * g / (m * p) : l * g / (n * p),
                SETVIEWCENTERX: f[0],
                SETVIEWCENTERY: f[1]
            };
            Ea(e, this.j);
            d = xv(d, e);
            d = new eu(a, b, c, this.l, d, this.Y, this.c);
            B(d, "change", this.o, this)
        } else d = null;
        this.i = d;
        this.S = this.g;
        return d
    };
    k.Xm = function () {
        return this.c
    };
    k.$m = function (a) {
        Ea(this.j, a);
        this.u()
    };
    k.Zm = function (a) {
        this.i = null;
        this.c = a;
        this.u()
    };
    function Av(a) {
        var b = a.imageExtent, c = void 0 !== a.crossOrigin ? a.crossOrigin : null, d = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : Gk;
        Ak.call(this, {attributions: a.attributions, logo: a.logo, projection: yc(a.projection)});
        this.c = new eu(b, void 0, 1, this.l, a.url, c, d);
        this.i = a.imageSize ? a.imageSize : null;
        B(this.c, "change", this.o, this)
    }

    y(Av, Ak);
    Av.prototype.Mc = function (a) {
        return nc(a, this.c.H()) ? this.c : null
    };
    Av.prototype.o = function (a) {
        if (2 == this.c.V()) {
            var b = this.c.H(), c = this.c.a(), d, e;
            this.i ? (d = this.i[0], e = this.i[1]) : (d = c.width, e = c.height);
            b = Math.ceil(ic(b) / (jc(b) / e));
            if (b != d) {
                var b = Oe(b, e), f = b.canvas;
                b.drawImage(c, 0, 0, d, e, 0, 0, f.width, f.height);
                this.c.g = f
            }
        }
        Ak.prototype.o.call(this, a)
    };
    function Bv(a) {
        a = a || {};
        Ak.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.ta = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.j = a.url;
        this.S = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : Gk;
        this.i = a.params || {};
        this.v = !0;
        Cv(this);
        this.ia = a.serverType;
        this.Aa = void 0 !== a.hidpi ? a.hidpi : !0;
        this.c = null;
        this.T = [0, 0];
        this.Y = 0;
        this.s = void 0 !== a.ratio ? a.ratio : 1.5
    }

    y(Bv, Ak);
    var Dv = [101, 101];
    k = Bv.prototype;
    k.fn = function (a, b, c, d) {
        if (void 0 !== this.j) {
            var e = lc(a, b, 0, Dv), f = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.i.LAYERS
            };
            Ea(f, this.i, d);
            d = Math.floor((e[3] - a[1]) / b);
            f[this.v ? "I" : "X"] = Math.floor((a[0] - e[0]) / b);
            f[this.v ? "J" : "Y"] = d;
            return Ev(this, e, Dv, 1, yc(c), f)
        }
    };
    k.hn = function () {
        return this.i
    };
    k.Mc = function (a, b, c, d) {
        if (void 0 === this.j)return null;
        b = Bk(this, b);
        1 == c || this.Aa && void 0 !== this.ia || (c = 1);
        a = a.slice();
        var e = (a[0] + a[2]) / 2, f = (a[1] + a[3]) / 2, g = b / c, h = ic(a) / g, g = jc(a) / g, l = this.c;
        if (l && this.Y == this.g && l.$() == b && l.f == c && Ub(l.H(), a))return l;
        if (1 != this.s) {
            var l = this.s * ic(a) / 2, m = this.s * jc(a) / 2;
            a[0] = e - l;
            a[1] = f - m;
            a[2] = e + l;
            a[3] = f + m
        }
        e = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
        Ea(e, this.i);
        this.T[0] = Math.ceil(h * this.s);
        this.T[1] = Math.ceil(g * this.s);
        d = Ev(this,
            a, this.T, c, d, e);
        this.c = new eu(a, b, c, this.l, d, this.ta, this.S);
        this.Y = this.g;
        B(this.c, "change", this.o, this);
        return this.c
    };
    k.gn = function () {
        return this.S
    };
    function Ev(a, b, c, d, e, f) {
        f[a.v ? "CRS" : "SRS"] = e.cb;
        "STYLES" in a.i || (f.STYLES = "");
        if (1 != d)switch (a.ia) {
            case "geoserver":
                d = 90 * d + .5 | 0;
                f.FORMAT_OPTIONS = "FORMAT_OPTIONS" in f ? f.FORMAT_OPTIONS + (";dpi:" + d) : "dpi:" + d;
                break;
            case "mapserver":
                f.MAP_RESOLUTION = 90 * d;
                break;
            case "carmentaserver":
            case "qgis":
                f.DPI = 90 * d
        }
        f.WIDTH = c[0];
        f.HEIGHT = c[1];
        c = e.b;
        var g;
        a.v && "ne" == c.substr(0, 2) ? g = [b[1], b[0], b[3], b[2]] : g = b;
        f.BBOX = g.join(",");
        return xv(a.j, f)
    }

    k.jn = function () {
        return this.j
    };
    k.kn = function (a) {
        this.c = null;
        this.S = a;
        this.u()
    };
    k.ln = function (a) {
        a != this.j && (this.j = a, this.c = null, this.u())
    };
    k.mn = function (a) {
        Ea(this.i, a);
        Cv(this);
        this.c = null;
        this.u()
    };
    function Cv(a) {
        a.v = 0 <= Ab(a.i.VERSION || "1.3.0")
    }

    function Fv(a) {
        a = a || {};
        var b;
        void 0 !== a.attributions ? b = a.attributions : b = [Gv];
        rv.call(this, {
            attributions: b,
            cacheSize: a.cacheSize,
            crossOrigin: void 0 !== a.crossOrigin ? a.crossOrigin : "anonymous",
            opaque: void 0 !== a.opaque ? a.opaque : !0,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 19,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            wrapX: a.wrapX
        })
    }

    y(Fv, rv);
    var Gv = new je({html: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'});
    (function () {
        var a = {}, b = {ja: a};
        (function (c) {
            if ("object" === typeof a && "undefined" !== typeof b)b.ja = c(); else {
                var d;
                "undefined" !== typeof window ? d = window : "undefined" !== typeof global ? d = global : "undefined" !== typeof self ? d = self : d = this;
                d.Sp = c()
            }
        })(function () {
            return function d(a, b, g) {
                function h(m, p) {
                    if (!b[m]) {
                        if (!a[m]) {
                            var q = "function" == typeof require && require;
                            if (!p && q)return q(m, !0);
                            if (l)return l(m, !0);
                            q = Error("Cannot find module '" + m + "'");
                            throw q.code = "MODULE_NOT_FOUND", q;
                        }
                        q = b[m] = {ja: {}};
                        a[m][0].call(q.ja, function (b) {
                            var d =
                                a[m][1][b];
                            return h(d ? d : b)
                        }, q, q.ja, d, a, b, g)
                    }
                    return b[m].ja
                }

                for (var l = "function" == typeof require && require, m = 0; m < g.length; m++)h(g[m]);
                return h
            }({
                1: [function (a, b, f) {
                    a = a("./processor");
                    f.$i = a
                }, {"./processor": 2}], 2: [function (a, b) {
                    function f(a) {
                        var b = !0;
                        try {
                            new ImageData(10, 10)
                        } catch (d) {
                            b = !1
                        }
                        return function (d) {
                            var e = d.buffers, f = d.meta, g = d.width, h = d.height, l = e.length, m = e[0].byteLength;
                            if (d.imageOps) {
                                m = Array(l);
                                for (d = 0; d < l; ++d) {
                                    var z = m, F = d, N;
                                    N = new Uint8ClampedArray(e[d]);
                                    var K = g, X = h;
                                    N = b ? new ImageData(N, K,
                                        X) : {data: N, width: K, height: X};
                                    z[F] = N
                                }
                                g = a(m, f).data
                            } else {
                                g = new Uint8ClampedArray(m);
                                h = Array(l);
                                z = Array(l);
                                for (d = 0; d < l; ++d)h[d] = new Uint8ClampedArray(e[d]), z[d] = [0, 0, 0, 0];
                                for (e = 0; e < m; e += 4) {
                                    for (d = 0; d < l; ++d)F = h[d], z[d][0] = F[e], z[d][1] = F[e + 1], z[d][2] = F[e + 2], z[d][3] = F[e + 3];
                                    d = a(z, f);
                                    g[e] = d[0];
                                    g[e + 1] = d[1];
                                    g[e + 2] = d[2];
                                    g[e + 3] = d[3]
                                }
                            }
                            return g.buffer
                        }
                    }

                    function g(a, b) {
                        var d = Object.keys(a.lib || {}).map(function (b) {
                            return "var " + b + " = " + a.lib[b].toString() + ";"
                        }).concat(["var __minion__ = (" + f.toString() + ")(", a.operation.toString(),
                            ");", 'self.addEventListener("message", function(event) {', "  var buffer = __minion__(event.data);", "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);", "});"]), d = URL.createObjectURL(new Blob(d, {type: "text/javascript"})), d = new Worker(d);
                        d.addEventListener("message", b);
                        return d
                    }

                    function h(a, b) {
                        var d = f(a.operation);
                        return {
                            postMessage: function (a) {
                                setTimeout(function () {
                                    b({data: {buffer: d(a), meta: a.meta}})
                                }, 0)
                            }
                        }
                    }

                    function l(a) {
                        this.Re = !!a.ll;
                        var b;
                        0 === a.threads ? b = 0 : this.Re ? b = 1 : b = a.threads ||
                            1;
                        var d = [];
                        if (b)for (var e = 0; e < b; ++e)d[e] = g(a, this.ig.bind(this, e)); else d[0] = h(a, this.ig.bind(this, 0));
                        this.Ld = d;
                        this.$c = [];
                        this.oj = a.uo || Infinity;
                        this.Jd = 0;
                        this.Ic = {};
                        this.Se = null
                    }

                    var m = a("./util").Fl;
                    l.prototype.so = function (a, b, d) {
                        this.lj({Ac: a, Xg: b, qg: d});
                        this.fg()
                    };
                    l.prototype.lj = function (a) {
                        for (this.$c.push(a); this.$c.length > this.oj;)this.$c.shift().qg(null, null)
                    };
                    l.prototype.fg = function () {
                        if (0 === this.Jd && 0 < this.$c.length) {
                            var a = this.Se = this.$c.shift(), b = a.Ac[0].width, d = a.Ac[0].height, e = a.Ac.map(function (a) {
                                    return a.data.buffer
                                }),
                                f = this.Ld.length;
                            this.Jd = f;
                            if (1 === f)this.Ld[0].postMessage({
                                buffers: e,
                                meta: a.Xg,
                                imageOps: this.Re,
                                width: b,
                                height: d
                            }, e); else for (var g = 4 * Math.ceil(a.Ac[0].data.length / 4 / f), h = 0; h < f; ++h) {
                                for (var l = h * g, m = [], z = 0, F = e.length; z < F; ++z)m.push(e[h].slice(l, l + g));
                                this.Ld[h].postMessage({
                                    buffers: m,
                                    meta: a.Xg,
                                    imageOps: this.Re,
                                    width: b,
                                    height: d
                                }, m)
                            }
                        }
                    };
                    l.prototype.ig = function (a, b) {
                        this.Pp || (this.Ic[a] = b.data, --this.Jd, 0 === this.Jd && this.pj())
                    };
                    l.prototype.pj = function () {
                        var a = this.Se, b = this.Ld.length, d, e;
                        if (1 === b)d = new Uint8ClampedArray(this.Ic[0].buffer),
                            e = this.Ic[0].meta; else {
                            var f = a.Ac[0].data.length;
                            d = new Uint8ClampedArray(f);
                            e = Array(f);
                            for (var f = 4 * Math.ceil(f / 4 / b), g = 0; g < b; ++g) {
                                var h = g * f;
                                d.set(new Uint8ClampedArray(this.Ic[g].buffer), h);
                                e[g] = this.Ic[g].meta
                            }
                        }
                        this.Se = null;
                        this.Ic = {};
                        a.qg(null, m(d, a.Ac[0].width, a.Ac[0].height), e);
                        this.fg()
                    };
                    b.ja = l
                }, {"./util": 3}], 3: [function (a, b, f) {
                    var g = !0;
                    try {
                        new ImageData(10, 10)
                    } catch (l) {
                        g = !1
                    }
                    var h = document.createElement("canvas").getContext("2d");
                    f.Fl = function (a, b, d) {
                        if (g)return new ImageData(a, b, d);
                        b = h.createImageData(b,
                            d);
                        b.data.set(a);
                        return b
                    }
                }, {}]
            }, {}, [1])(1)
        });
        jl = b.ja
    })();
    function Hv(a) {
        this.S = null;
        this.Aa = void 0 !== a.operationType ? a.operationType : "pixel";
        this.Sa = void 0 !== a.threads ? a.threads : 1;
        this.c = Iv(a.sources);
        for (var b = 0, c = this.c.length; b < c; ++b)B(this.c[b], "change", this.u, this);
        this.i = Oe();
        this.ia = new Rh(function () {
            return 1
        }, this.u.bind(this));
        for (var b = Jv(this.c), c = {}, d = 0, e = b.length; d < e; ++d)c[w(b[d].layer)] = b[d];
        this.j = this.s = null;
        this.Y = {
            animate: !1,
            attributions: {},
            coordinateToPixelMatrix: Xc(),
            extent: null,
            focus: null,
            index: 0,
            layerStates: c,
            layerStatesArray: b,
            logos: {},
            pixelRatio: 1,
            pixelToCoordinateMatrix: Xc(),
            postRenderFunctions: [],
            size: [0, 0],
            skippedFeatureUids: {},
            tileQueue: this.ia,
            time: Date.now(),
            usedTiles: {},
            viewState: {rotation: 0},
            viewHints: [],
            wantedTiles: {}
        };
        Ak.call(this, {});
        void 0 !== a.operation && this.v(a.operation, a.lib)
    }

    y(Hv, Ak);
    Hv.prototype.v = function (a, b) {
        this.S = new jl.$i({operation: a, ll: "image" === this.Aa, uo: 1, lib: b, threads: this.Sa});
        this.u()
    };
    function Kv(a, b, c) {
        var d = a.s;
        return !d || a.g !== d.Xo || c !== d.resolution || !$b(b, d.extent)
    }

    Hv.prototype.A = function (a, b, c, d) {
        c = !0;
        for (var e, f = 0, g = this.c.length; f < g; ++f)if (e = this.c[f].a.ha(), "ready" !== e.V()) {
            c = !1;
            break
        }
        if (!c)return null;
        a = a.slice();
        if (!Kv(this, a, b))return this.j;
        c = this.i.canvas;
        e = Math.round(ic(a) / b);
        f = Math.round(jc(a) / b);
        if (e !== c.width || f !== c.height)c.width = e, c.height = f;
        e = Ea({}, this.Y);
        e.viewState = Ea({}, e.viewState);
        var f = kc(a), g = Math.round(ic(a) / b), h = Math.round(jc(a) / b);
        e.extent = a;
        e.focus = kc(a);
        e.size[0] = g;
        e.size[1] = h;
        g = e.viewState;
        g.center = f;
        g.projection = d;
        g.resolution =
            b;
        this.j = d = new nk(a, b, 1, this.l, c, this.T.bind(this, e));
        this.s = {extent: a, resolution: b, Xo: this.g};
        return d
    };
    Hv.prototype.T = function (a, b) {
        for (var c = this.c.length, d = Array(c), e = 0; e < c; ++e) {
            var f;
            f = this.c[e];
            var g = a, h = a.layerStatesArray[e];
            if (f.l(g, h)) {
                var l = g.size[0], m = g.size[1];
                if (Lv) {
                    var n = Lv.canvas;
                    n.width !== l || n.height !== m ? Lv = Oe(l, m) : Lv.clearRect(0, 0, l, m)
                } else Lv = Oe(l, m);
                f.i(g, h, Lv);
                f = Lv.getImageData(0, 0, l, m)
            } else f = null;
            if (f)d[e] = f; else return
        }
        c = {};
        this.b(new Mv(Nv, a, c));
        this.S.so(d, c, this.ta.bind(this, a, b));
        Sh(a.tileQueue, 16, 16)
    };
    Hv.prototype.ta = function (a, b, c, d, e) {
        c ? b(c) : d && (this.b(new Mv(Ov, a, e)), Kv(this, a.extent, a.viewState.resolution / a.pixelRatio) || this.i.putImageData(d, 0, 0), b(null))
    };
    var Lv = null;

    function Jv(a) {
        return a.map(function (a) {
            return jh(a.a)
        })
    }

    function Iv(a) {
        for (var b = a.length, c = Array(b), d = 0; d < b; ++d) {
            var e = d, f = a[d], g = null;
            f instanceof zf ? (f = new dj({source: f}), g = new Bl(f)) : f instanceof Ak && (f = new cj({source: f}), g = new Al(f));
            c[e] = g
        }
        return c
    }

    function Mv(a, b, c) {
        Wa.call(this, a);
        this.extent = b.extent;
        this.resolution = b.viewState.resolution / b.pixelRatio;
        this.data = c
    }

    y(Mv, Wa);
    var Nv = "beforeoperations", Ov = "afteroperations";
    var Pv = {
        terrain: {tb: "jpg", opaque: !0},
        "terrain-background": {tb: "jpg", opaque: !0},
        "terrain-labels": {tb: "png", opaque: !1},
        "terrain-lines": {tb: "png", opaque: !1},
        "toner-background": {tb: "png", opaque: !0},
        toner: {tb: "png", opaque: !0},
        "toner-hybrid": {tb: "png", opaque: !1},
        "toner-labels": {tb: "png", opaque: !1},
        "toner-lines": {tb: "png", opaque: !1},
        "toner-lite": {tb: "png", opaque: !0},
        watercolor: {tb: "jpg", opaque: !0}
    }, Qv = {
        terrain: {minZoom: 4, maxZoom: 18},
        toner: {minZoom: 0, maxZoom: 20},
        watercolor: {minZoom: 1, maxZoom: 16}
    };

    function Rv(a) {
        var b = a.layer.indexOf("-"), b = -1 == b ? a.layer : a.layer.slice(0, b), b = Qv[b], c = Pv[a.layer];
        rv.call(this, {
            attributions: Sv,
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            maxZoom: void 0 != a.maxZoom ? a.maxZoom : b.maxZoom,
            minZoom: void 0 != a.minZoom ? a.minZoom : b.minZoom,
            opaque: c.opaque,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + a.layer + "/{z}/{x}/{y}." + c.tb
        })
    }

    y(Rv, rv);
    var Sv = [new je({html: 'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}), Gv];

    function Tv(a) {
        a = a || {};
        W.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.c = a.params || {};
        this.j = Lb()
    }

    y(Tv, W);
    Tv.prototype.v = function () {
        return this.c
    };
    Tv.prototype.bc = function (a) {
        return a
    };
    Tv.prototype.vc = function (a, b, c) {
        var d = this.tileGrid;
        d || (d = this.eb(c));
        if (!(d.b.length <= a[0])) {
            var e = d.Ea(a, this.j), f = hf(d.Ja(a[0]), this.o);
            1 != b && (f = gf(f, b, this.o));
            d = {F: "image", FORMAT: "PNG32", TRANSPARENT: !0};
            Ea(d, this.c);
            var g = this.urls;
            g ? (c = c.cb.split(":").pop(), d.SIZE = f[0] + "," + f[1], d.BBOX = e.join(","), d.BBOXSR = c, d.IMAGESR = c, d.DPI = Math.round(d.DPI ? d.DPI * b : 90 * b), a = (1 == g.length ? g[0] : g[xa((a[1] << a[0]) + a[2], g.length)]).replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage"),
                a = xv(a, d)) : a = void 0;
            return a
        }
    };
    Tv.prototype.A = function (a) {
        Ea(this.c, a);
        this.u()
    };
    function Uv(a, b, c) {
        df.call(this, a, 2);
        this.l = b;
        this.c = c;
        this.g = {}
    }

    y(Uv, df);
    Uv.prototype.$a = function (a) {
        a = void 0 !== a ? w(a) : -1;
        if (a in this.g)return this.g[a];
        var b = this.l, c = Oe(b[0], b[1]);
        c.strokeStyle = "black";
        c.strokeRect(.5, .5, b[0] + .5, b[1] + .5);
        c.fillStyle = "black";
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.font = "24px sans-serif";
        c.fillText(this.c, b[0] / 2, b[1] / 2);
        return this.g[a] = c.canvas
    };
    function Vv(a) {
        zf.call(this, {
            opaque: !1,
            projection: a.projection,
            tileGrid: a.tileGrid,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        })
    }

    y(Vv, zf);
    Vv.prototype.ac = function (a, b, c) {
        var d = this.Eb(a, b, c);
        if (Ze(this.a, d))return this.a.get(d);
        var e = hf(this.tileGrid.Ja(a));
        a = [a, b, c];
        b = (b = Cf(this, a)) ? Cf(this, b).toString() : "";
        e = new Uv(a, e, b);
        this.a.set(d, e);
        return e
    };
    function Wv(a) {
        this.c = null;
        W.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            projection: yc("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        if (a.jsonp)kv(a.url, this.yh.bind(this), this.me.bind(this)); else {
            var b = new XMLHttpRequest;
            b.addEventListener("load", this.pn.bind(this));
            b.addEventListener("error", this.nn.bind(this));
            b.open("GET", a.url);
            b.send()
        }
    }

    y(Wv, W);
    k = Wv.prototype;
    k.pn = function (a) {
        a = a.target;
        if (200 <= a.status && 300 > a.status) {
            var b;
            try {
                b = JSON.parse(a.responseText)
            } catch (c) {
                this.me();
                return
            }
            this.yh(b)
        } else this.me()
    };
    k.nn = function () {
        this.me()
    };
    k.Ak = function () {
        return this.c
    };
    k.yh = function (a) {
        var b = yc("EPSG:4326"), c = this.f, d;
        void 0 !== a.bounds && (d = pc(a.bounds, Bc(b, c)));
        var e = a.minzoom || 0, f = a.maxzoom || 22;
        this.tileGrid = c = yf({extent: wf(c), maxZoom: f, minZoom: e});
        this.tileUrlFunction = Fl(a.tiles, c);
        if (void 0 !== a.attribution && !this.l) {
            b = void 0 !== d ? d : b.H();
            d = {};
            for (var g; e <= f; ++e)g = e.toString(), d[g] = [pf(c, b, e)];
            this.oa([new je({html: a.attribution, tileRanges: d})])
        }
        this.c = a;
        lf(this, "ready")
    };
    k.me = function () {
        lf(this, "error")
    };
    function Xv(a) {
        zf.call(this, {projection: yc("EPSG:3857"), state: "loading"});
        this.s = void 0 !== a.preemptive ? a.preemptive : !0;
        this.j = Hl;
        this.i = void 0;
        this.c = a.jsonp || !1;
        if (a.url)if (this.c)kv(a.url, this.Bf.bind(this), this.ne.bind(this)); else {
            var b = new XMLHttpRequest;
            b.addEventListener("load", this.tn.bind(this));
            b.addEventListener("error", this.sn.bind(this));
            b.open("GET", a.url);
            b.send()
        } else a.tileJSON && this.Bf(a.tileJSON)
    }

    y(Xv, zf);
    k = Xv.prototype;
    k.tn = function (a) {
        a = a.target;
        if (200 <= a.status && 300 > a.status) {
            var b;
            try {
                b = JSON.parse(a.responseText)
            } catch (c) {
                this.ne();
                return
            }
            this.Bf(b)
        } else this.ne()
    };
    k.sn = function () {
        this.ne()
    };
    k.xk = function () {
        return this.i
    };
    k.Ij = function (a, b, c, d, e) {
        this.tileGrid ? (b = this.tileGrid.Zd(a, b), Yv(this.ac(b[0], b[1], b[2], 1, this.f), a, c, d, e)) : !0 === e ? Tf(function () {
            c.call(d, null)
        }) : c.call(d, null)
    };
    k.ne = function () {
        lf(this, "error")
    };
    k.Bf = function (a) {
        var b = yc("EPSG:4326"), c = this.f, d;
        void 0 !== a.bounds && (d = pc(a.bounds, Bc(b, c)));
        var e = a.minzoom || 0, f = a.maxzoom || 22;
        this.tileGrid = c = yf({extent: wf(c), maxZoom: f, minZoom: e});
        this.i = a.template;
        var g = a.grids;
        if (g) {
            this.j = Fl(g, c);
            if (void 0 !== a.attribution) {
                b = void 0 !== d ? d : b.H();
                for (d = {}; e <= f; ++e)g = e.toString(), d[g] = [pf(c, b, e)];
                this.oa([new je({html: a.attribution, tileRanges: d})])
            }
            lf(this, "ready")
        } else lf(this, "error")
    };
    k.ac = function (a, b, c, d, e) {
        var f = this.Eb(a, b, c);
        if (Ze(this.a, f))return this.a.get(f);
        a = [a, b, c];
        b = Cf(this, a, e);
        d = this.j(b, d, e);
        d = new Zv(a, void 0 !== d ? 0 : 4, void 0 !== d ? d : "", this.tileGrid.Ea(a), this.s, this.c);
        this.a.set(f, d);
        return d
    };
    k.Yf = function (a, b, c) {
        a = this.Eb(a, b, c);
        Ze(this.a, a) && this.a.get(a)
    };
    function Zv(a, b, c, d, e, f) {
        df.call(this, a, b);
        this.s = c;
        this.g = d;
        this.U = e;
        this.c = this.j = this.l = null;
        this.v = f
    }

    y(Zv, df);
    k = Zv.prototype;
    k.$a = function () {
        return null
    };
    k.getData = function (a) {
        if (!this.l || !this.j)return null;
        var b = this.l[Math.floor((1 - (a[1] - this.g[1]) / (this.g[3] - this.g[1])) * this.l.length)];
        if ("string" !== typeof b)return null;
        b = b.charCodeAt(Math.floor((a[0] - this.g[0]) / (this.g[2] - this.g[0]) * b.length));
        93 <= b && b--;
        35 <= b && b--;
        b -= 32;
        a = null;
        b in this.j && (b = this.j[b], this.c && b in this.c ? a = this.c[b] : a = b);
        return a
    };
    function Yv(a, b, c, d, e) {
        0 == a.state && !0 === e ? (Pa(a, "change", function () {
            c.call(d, this.getData(b))
        }, a), $v(a)) : !0 === e ? Tf(function () {
            c.call(d, this.getData(b))
        }, a) : c.call(d, a.getData(b))
    }

    k.ib = function () {
        return this.s
    };
    k.ae = function () {
        this.state = 3;
        ef(this)
    };
    k.zh = function (a) {
        this.l = a.grid;
        this.j = a.keys;
        this.c = a.data;
        this.state = 4;
        ef(this)
    };
    function $v(a) {
        if (0 == a.state)if (a.state = 1, a.v)kv(a.s, a.zh.bind(a), a.ae.bind(a)); else {
            var b = new XMLHttpRequest;
            b.addEventListener("load", a.rn.bind(a));
            b.addEventListener("error", a.qn.bind(a));
            b.open("GET", a.s);
            b.send()
        }
    }

    k.rn = function (a) {
        a = a.target;
        if (200 <= a.status && 300 > a.status) {
            var b;
            try {
                b = JSON.parse(a.responseText)
            } catch (c) {
                this.ae();
                return
            }
            this.zh(b)
        } else this.ae()
    };
    k.qn = function () {
        this.ae()
    };
    k.load = function () {
        this.U && $v(this)
    };
    function aw(a) {
        a = a || {};
        var b = a.params || {};
        W.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: !("TRANSPARENT" in b ? b.TRANSPARENT : 1),
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.v = void 0 !== a.gutter ? a.gutter : 0;
        this.c = b;
        this.j = !0;
        this.A = a.serverType;
        this.T = void 0 !== a.hidpi ? a.hidpi : !0;
        this.S = "";
        bw(this);
        this.Y = Lb();
        cw(this);
        Bf(this, dw(this))
    }

    y(aw, W);
    k = aw.prototype;
    k.vn = function (a, b, c, d) {
        c = yc(c);
        var e = this.tileGrid;
        e || (e = this.eb(c));
        b = e.Zd(a, b);
        if (!(e.b.length <= b[0])) {
            var f = e.$(b[0]), g = e.Ea(b, this.Y), e = hf(e.Ja(b[0]), this.o), h = this.v;
            0 !== h && (e = ff(e, h, this.o), g = Ob(g, f * h, g));
            h = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.c.LAYERS
            };
            Ea(h, this.c, d);
            d = Math.floor((g[3] - a[1]) / f);
            h[this.j ? "I" : "X"] = Math.floor((a[0] - g[0]) / f);
            h[this.j ? "J" : "Y"] = d;
            return ew(this, b, e, g, 1, c, h)
        }
    };
    k.gf = function () {
        return this.v
    };
    k.Eb = function (a, b, c) {
        return this.S + W.prototype.Eb.call(this, a, b, c)
    };
    k.wn = function () {
        return this.c
    };
    function ew(a, b, c, d, e, f, g) {
        var h = a.urls;
        if (h) {
            g.WIDTH = c[0];
            g.HEIGHT = c[1];
            g[a.j ? "CRS" : "SRS"] = f.cb;
            "STYLES" in a.c || (g.STYLES = "");
            if (1 != e)switch (a.A) {
                case "geoserver":
                    c = 90 * e + .5 | 0;
                    g.FORMAT_OPTIONS = "FORMAT_OPTIONS" in g ? g.FORMAT_OPTIONS + (";dpi:" + c) : "dpi:" + c;
                    break;
                case "mapserver":
                    g.MAP_RESOLUTION = 90 * e;
                    break;
                case "carmentaserver":
                case "qgis":
                    g.DPI = 90 * e
            }
            f = f.b;
            a.j && "ne" == f.substr(0, 2) && (a = d[0], d[0] = d[1], d[1] = a, a = d[2], d[2] = d[3], d[3] = a);
            g.BBOX = d.join(",");
            return xv(1 == h.length ? h[0] : h[xa((b[1] << b[0]) + b[2], h.length)],
                g)
        }
    }

    k.bc = function (a) {
        return this.T && void 0 !== this.A ? a : 1
    };
    function bw(a) {
        var b = 0, c = [];
        if (a.urls) {
            var d, e;
            d = 0;
            for (e = a.urls.length; d < e; ++d)c[b++] = a.urls[d]
        }
        a.S = c.join("#")
    }

    function dw(a) {
        var b = 0, c = [], d;
        for (d in a.c)c[b++] = d + "-" + a.c[d];
        return c.join("/")
    }

    k.vc = function (a, b, c) {
        var d = this.tileGrid;
        d || (d = this.eb(c));
        if (!(d.b.length <= a[0])) {
            1 == b || this.T && void 0 !== this.A || (b = 1);
            var e = d.$(a[0]), f = d.Ea(a, this.Y), d = hf(d.Ja(a[0]), this.o), g = this.v;
            0 !== g && (d = ff(d, g, this.o), f = Ob(f, e * g, f));
            1 != b && (d = gf(d, b, this.o));
            e = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
            Ea(e, this.c);
            return ew(this, a, d, f, b, c, e)
        }
    };
    k.xn = function (a) {
        Ea(this.c, a);
        bw(this);
        cw(this);
        Bf(this, dw(this))
    };
    function cw(a) {
        a.j = 0 <= Ab(a.c.VERSION || "1.3.0")
    }

    function fw(a) {
        this.l = a.matrixIds;
        mf.call(this, {
            extent: a.extent,
            origin: a.origin,
            origins: a.origins,
            resolutions: a.resolutions,
            tileSize: a.tileSize,
            tileSizes: a.tileSizes,
            sizes: a.sizes
        })
    }

    y(fw, mf);
    fw.prototype.j = function () {
        return this.l
    };
    function gw(a, b) {
        var c = [], d = [], e = [], f = [], g = [], h;
        h = yc(a.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var l = h.$b(), m = "ne" == h.b.substr(0, 2);
        a.TileMatrix.sort(function (a, b) {
            return b.ScaleDenominator - a.ScaleDenominator
        });
        a.TileMatrix.forEach(function (a) {
            d.push(a.Identifier);
            var b = 2.8E-4 * a.ScaleDenominator / l, h = a.TileWidth, r = a.TileHeight;
            m ? e.push([a.TopLeftCorner[1], a.TopLeftCorner[0]]) : e.push(a.TopLeftCorner);
            c.push(b);
            f.push(h == r ? h : [h, r]);
            g.push([a.MatrixWidth, -a.MatrixHeight])
        });
        return new fw({extent: b, origins: e, resolutions: c, matrixIds: d, tileSizes: f, sizes: g})
    }

    function Z(a) {
        function b(a) {
            a = "KVP" == d ? xv(a, f) : a.replace(/\{(\w+?)\}/g, function (a, b) {
                return b.toLowerCase() in f ? f[b.toLowerCase()] : a
            });
            return function (b) {
                if (b) {
                    var c = {TileMatrix: e.l[b[0]], TileCol: b[1], TileRow: -b[2] - 1};
                    Ea(c, g);
                    b = a;
                    return b = "KVP" == d ? xv(b, c) : b.replace(/\{(\w+?)\}/g, function (a, b) {
                        return c[b]
                    })
                }
            }
        }

        this.T = void 0 !== a.version ? a.version : "1.0.0";
        this.v = void 0 !== a.format ? a.format : "image/jpeg";
        this.c = void 0 !== a.dimensions ? a.dimensions : {};
        this.A = a.layer;
        this.j = a.matrixSet;
        this.S = a.style;
        var c =
            a.urls;
        void 0 === c && void 0 !== a.url && (c = Il(a.url));
        var d = this.Y = void 0 !== a.requestEncoding ? a.requestEncoding : "KVP", e = a.tileGrid, f = {
            layer: this.A,
            style: this.S,
            tilematrixset: this.j
        };
        "KVP" == d && Ea(f, {Service: "WMTS", Request: "GetTile", Version: this.T, Format: this.v});
        var g = this.c, h = c && 0 < c.length ? Gl(c.map(b)) : Hl;
        W.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: a.tileClass,
            tileGrid: e,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: h,
            urls: c,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !1
        });
        Bf(this, hw(this))
    }

    y(Z, W);
    k = Z.prototype;
    k.Vj = function () {
        return this.c
    };
    k.yn = function () {
        return this.v
    };
    k.zn = function () {
        return this.A
    };
    k.hk = function () {
        return this.j
    };
    k.vk = function () {
        return this.Y
    };
    k.An = function () {
        return this.S
    };
    k.Ck = function () {
        return this.T
    };
    function hw(a) {
        var b = 0, c = [], d;
        for (d in a.c)c[b++] = d + "-" + a.c[d];
        return c.join("/")
    }

    k.vp = function (a) {
        Ea(this.c, a);
        Bf(this, hw(this))
    };
    function iw(a) {
        a = a || {};
        var b = a.size, c = b[0], d = b[1], e = [], f = 256;
        switch (void 0 !== a.tierSizeCalculation ? a.tierSizeCalculation : "default") {
            case "default":
                for (; c > f || d > f;)e.push([Math.ceil(c / f), Math.ceil(d / f)]), f += f;
                break;
            case "truncated":
                for (; c > f || d > f;)e.push([Math.ceil(c / f), Math.ceil(d / f)]), c >>= 1, d >>= 1
        }
        e.push([1, 1]);
        e.reverse();
        for (var f = [1], g = [0], d = 1, c = e.length; d < c; d++)f.push(1 << d), g.push(e[d - 1][0] * e[d - 1][1] + g[d - 1]);
        f.reverse();
        var b = [0, -b[1], b[0], 0], b = new mf({extent: b, origin: fc(b), resolutions: f}), h = a.url;
        W.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: jw,
            tileGrid: b,
            tileUrlFunction: function (a) {
                if (a) {
                    var b = a[0], c = a[1];
                    a = -a[2] - 1;
                    return h + "TileGroup" + ((c + a * e[b][0] + g[b]) / 256 | 0) + "/" + b + "-" + c + "-" + a + ".jpg"
                }
            }
        })
    }

    y(iw, W);
    function jw(a, b, c, d, e) {
        fu.call(this, a, b, c, d, e);
        this.l = {}
    }

    y(jw, fu);
    jw.prototype.$a = function (a) {
        var b = void 0 !== a ? w(a).toString() : "";
        if (b in this.l)return this.l[b];
        a = fu.prototype.$a.call(this, a);
        if (2 == this.state) {
            if (256 == a.width && 256 == a.height)return this.l[b] = a;
            var c = Oe(256, 256);
            c.drawImage(a, 0, 0);
            return this.l[b] = c.canvas
        }
        return a
    };
    function kw(a) {
        a = a || {};
        this.a = void 0 !== a.initialSize ? a.initialSize : 256;
        this.g = void 0 !== a.maxSize ? a.maxSize : void 0 !== la ? la : 2048;
        this.b = void 0 !== a.space ? a.space : 1;
        this.c = [new lw(this.a, this.b)];
        this.f = this.a;
        this.i = [new lw(this.f, this.b)]
    }

    kw.prototype.add = function (a, b, c, d, e, f) {
        if (b + this.b > this.g || c + this.b > this.g)return null;
        d = mw(this, !1, a, b, c, d, f);
        if (!d)return null;
        a = mw(this, !0, a, b, c, void 0 !== e ? e : na, f);
        return {offsetX: d.offsetX, offsetY: d.offsetY, image: d.image, Sg: a.image}
    };
    function mw(a, b, c, d, e, f, g) {
        var h = b ? a.i : a.c, l, m, n;
        m = 0;
        for (n = h.length; m < n; ++m) {
            l = h[m];
            if (l = l.add(c, d, e, f, g))return l;
            l || m !== n - 1 || (b ? (l = Math.min(2 * a.f, a.g), a.f = l) : (l = Math.min(2 * a.a, a.g), a.a = l), l = new lw(l, a.b), h.push(l), ++n)
        }
    }

    function lw(a, b) {
        this.b = b;
        this.a = [{x: 0, y: 0, width: a, height: a}];
        this.f = {};
        this.g = Oe(a, a);
        this.c = this.g.canvas
    }

    lw.prototype.get = function (a) {
        return this.f[a] || null
    };
    lw.prototype.add = function (a, b, c, d, e) {
        var f, g, h;
        g = 0;
        for (h = this.a.length; g < h; ++g)if (f = this.a[g], f.width >= b + this.b && f.height >= c + this.b)return h = {
            offsetX: f.x + this.b,
            offsetY: f.y + this.b,
            image: this.c
        }, this.f[a] = h, d.call(e, this.g, f.x + this.b, f.y + this.b), a = g, b += this.b, d = c + this.b, f.width - b > f.height - d ? (c = {
            x: f.x + b,
            y: f.y,
            width: f.width - b,
            height: f.height
        }, b = {x: f.x, y: f.y + d, width: b, height: f.height - d}, nw(this, a, c, b)) : (c = {
            x: f.x + b,
            y: f.y,
            width: f.width - b,
            height: d
        }, b = {x: f.x, y: f.y + d, width: f.width, height: f.height - d}, nw(this,
            a, c, b)), h;
        return null
    };
    function nw(a, b, c, d) {
        b = [b, 1];
        0 < c.width && 0 < c.height && b.push(c);
        0 < d.width && 0 < d.height && b.push(d);
        a.a.splice.apply(a.a, b)
    }

    function ow(a) {
        this.A = this.s = this.f = null;
        this.o = void 0 !== a.fill ? a.fill : null;
        this.ya = [0, 0];
        this.b = a.points;
        this.g = void 0 !== a.radius ? a.radius : a.radius1;
        this.c = void 0 !== a.radius2 ? a.radius2 : this.g;
        this.l = void 0 !== a.angle ? a.angle : 0;
        this.a = void 0 !== a.stroke ? a.stroke : null;
        this.R = this.Ba = this.D = null;
        var b = a.atlasManager, c = "", d = "", e = 0, f = null, g, h = 0;
        this.a && (g = ve(this.a.b), h = this.a.a, void 0 === h && (h = 1), f = this.a.g, hg || (f = null), d = this.a.c, void 0 === d && (d = "round"), c = this.a.f, void 0 === c && (c = "round"), e = this.a.i, void 0 ===
        e && (e = 10));
        var l = 2 * (this.g + h) + 1, c = {
            strokeStyle: g,
            Bd: h,
            size: l,
            lineCap: c,
            lineDash: f,
            lineJoin: d,
            miterLimit: e
        };
        if (void 0 === b) {
            var m = Oe(l, l);
            this.s = m.canvas;
            b = l = this.s.width;
            this.Ih(c, m, 0, 0);
            this.o ? this.A = this.s : (m = Oe(c.size, c.size), this.A = m.canvas, this.Hh(c, m, 0, 0))
        } else l = Math.round(l), (d = !this.o) && (m = this.Hh.bind(this, c)), e = this.a ? pj(this.a) : "-", f = this.o ? jj(this.o) : "-", this.f && e == this.f[1] && f == this.f[2] && this.g == this.f[3] && this.c == this.f[4] && this.l == this.f[5] && this.b == this.f[6] || (this.f = ["r" + e + f + (void 0 !==
        this.g ? this.g.toString() : "-") + (void 0 !== this.c ? this.c.toString() : "-") + (void 0 !== this.l ? this.l.toString() : "-") + (void 0 !== this.b ? this.b.toString() : "-"), e, f, this.g, this.c, this.l, this.b]), m = b.add(this.f[0], l, l, this.Ih.bind(this, c), m), this.s = m.image, this.ya = [m.offsetX, m.offsetY], b = m.image.width, this.A = d ? m.Sg : this.s;
        this.D = [l / 2, l / 2];
        this.Ba = [l, l];
        this.R = [b, b];
        Ch.call(this, {
            opacity: 1,
            rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: 1,
            snapToPixel: void 0 !==
            a.snapToPixel ? a.snapToPixel : !0
        })
    }

    y(ow, Ch);
    k = ow.prototype;
    k.Yb = function () {
        return this.D
    };
    k.Fn = function () {
        return this.l
    };
    k.Gn = function () {
        return this.o
    };
    k.pe = function () {
        return this.A
    };
    k.jc = function () {
        return this.s
    };
    k.ld = function () {
        return this.R
    };
    k.td = function () {
        return 2
    };
    k.Ia = function () {
        return this.ya
    };
    k.Hn = function () {
        return this.b
    };
    k.In = function () {
        return this.g
    };
    k.uk = function () {
        return this.c
    };
    k.Fb = function () {
        return this.Ba
    };
    k.Jn = function () {
        return this.a
    };
    k.pf = na;
    k.load = na;
    k.Xf = na;
    k.Ih = function (a, b, c, d) {
        var e;
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        this.c !== this.g && (this.b *= 2);
        for (c = 0; c <= this.b; c++)d = 2 * c * Math.PI / this.b - Math.PI / 2 + this.l, e = 0 === c % 2 ? this.g : this.c, b.lineTo(a.size / 2 + e * Math.cos(d), a.size / 2 + e * Math.sin(d));
        this.o && (b.fillStyle = xe(this.o.b), b.fill());
        this.a && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.Bd, a.lineDash && b.setLineDash(a.lineDash), b.lineCap = a.lineCap, b.lineJoin = a.lineJoin, b.miterLimit = a.miterLimit, b.stroke());
        b.closePath()
    };
    k.Hh = function (a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        this.c !== this.g && (this.b *= 2);
        var e;
        for (c = 0; c <= this.b; c++)e = 2 * c * Math.PI / this.b - Math.PI / 2 + this.l, d = 0 === c % 2 ? this.g : this.c, b.lineTo(a.size / 2 + d * Math.cos(e), a.size / 2 + d * Math.sin(e));
        b.fillStyle = ej;
        b.fill();
        this.a && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.Bd, a.lineDash && b.setLineDash(a.lineDash), b.stroke());
        b.closePath()
    };
    t("ol.animation.bounce", function (a) {
        var b = a.resolution, c = a.start ? a.start : Date.now(), d = void 0 !== a.duration ? a.duration : 1E3, e = a.easing ? a.easing : be;
        return function (a, g) {
            if (g.time < c)return g.animate = !0, g.viewHints[0] += 1, !0;
            if (g.time < c + d) {
                var h = e((g.time - c) / d), l = b - g.viewState.resolution;
                g.animate = !0;
                g.viewState.resolution += h * l;
                g.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }, OPENLAYERS);
    t("ol.animation.pan", ce, OPENLAYERS);
    t("ol.animation.rotate", de, OPENLAYERS);
    t("ol.animation.zoom", ee, OPENLAYERS);
    t("ol.Attribution", je, OPENLAYERS);
    je.prototype.getHTML = je.prototype.g;
    ke.prototype.element = ke.prototype.element;
    t("ol.Collection", le, OPENLAYERS);
    le.prototype.clear = le.prototype.clear;
    le.prototype.extend = le.prototype.qf;
    le.prototype.forEach = le.prototype.forEach;
    le.prototype.getArray = le.prototype.Gl;
    le.prototype.item = le.prototype.item;
    le.prototype.getLength = le.prototype.dc;
    le.prototype.insertAt = le.prototype.ee;
    le.prototype.pop = le.prototype.pop;
    le.prototype.push = le.prototype.push;
    le.prototype.remove = le.prototype.remove;
    le.prototype.removeAt = le.prototype.Rf;
    le.prototype.setAt = le.prototype.Zo;
    t("ol.colorlike.asColorLike", xe, OPENLAYERS);
    t("ol.coordinate.add", Bb, OPENLAYERS);
    t("ol.coordinate.createStringXY", function (a) {
        return function (b) {
            return Jb(b, a)
        }
    }, OPENLAYERS);
    t("ol.coordinate.format", Eb, OPENLAYERS);
    t("ol.coordinate.rotate", Gb, OPENLAYERS);
    t("ol.coordinate.toStringHDMS", function (a, b) {
        return a ? Db(a[1], "NS", b) + " " + Db(a[0], "EW", b) : ""
    }, OPENLAYERS);
    t("ol.coordinate.toStringXY", Jb, OPENLAYERS);
    t("ol.DeviceOrientation", qn, OPENLAYERS);
    qn.prototype.getAlpha = qn.prototype.Oj;
    qn.prototype.getBeta = qn.prototype.Rj;
    qn.prototype.getGamma = qn.prototype.Yj;
    qn.prototype.getHeading = qn.prototype.Hl;
    qn.prototype.getTracking = qn.prototype.$g;
    qn.prototype.setTracking = qn.prototype.rf;
    t("ol.easing.easeIn", Yd, OPENLAYERS);
    t("ol.easing.easeOut", Zd, OPENLAYERS);
    t("ol.easing.inAndOut", $d, OPENLAYERS);
    t("ol.easing.linear", ae, OPENLAYERS);
    t("ol.easing.upAndDown", be, OPENLAYERS);
    t("ol.extent.boundingExtent", Kb, OPENLAYERS);
    t("ol.extent.buffer", Ob, OPENLAYERS);
    t("ol.extent.containsCoordinate", Sb, OPENLAYERS);
    t("ol.extent.containsExtent", Ub, OPENLAYERS);
    t("ol.extent.containsXY", Tb, OPENLAYERS);
    t("ol.extent.createEmpty", Lb, OPENLAYERS);
    t("ol.extent.equals", $b, OPENLAYERS);
    t("ol.extent.extend", ac, OPENLAYERS);
    t("ol.extent.getBottomLeft", cc, OPENLAYERS);
    t("ol.extent.getBottomRight", dc, OPENLAYERS);
    t("ol.extent.getCenter", kc, OPENLAYERS);
    t("ol.extent.getHeight", jc, OPENLAYERS);
    t("ol.extent.getIntersection", mc, OPENLAYERS);
    t("ol.extent.getSize", function (a) {
        return [a[2] - a[0], a[3] - a[1]]
    }, OPENLAYERS);
    t("ol.extent.getTopLeft", fc, OPENLAYERS);
    t("ol.extent.getTopRight", ec, OPENLAYERS);
    t("ol.extent.getWidth", ic, OPENLAYERS);
    t("ol.extent.intersects", nc, OPENLAYERS);
    t("ol.extent.isEmpty", hc, OPENLAYERS);
    t("ol.extent.applyTransform", pc, OPENLAYERS);
    t("ol.Feature", Ik, OPENLAYERS);
    Ik.prototype.clone = Ik.prototype.clone;
    Ik.prototype.getGeometry = Ik.prototype.W;
    Ik.prototype.getId = Ik.prototype.Xa;
    Ik.prototype.getGeometryName = Ik.prototype.$j;
    Ik.prototype.getStyle = Ik.prototype.Jl;
    Ik.prototype.getStyleFunction = Ik.prototype.ec;
    Ik.prototype.setGeometry = Ik.prototype.Ua;
    Ik.prototype.setStyle = Ik.prototype.sf;
    Ik.prototype.setId = Ik.prototype.mc;
    Ik.prototype.setGeometryName = Ik.prototype.Ec;
    t("ol.featureloader.tile", dl, OPENLAYERS);
    t("ol.featureloader.xhr", el, OPENLAYERS);
    t("ol.Geolocation", Ut, OPENLAYERS);
    Ut.prototype.getAccuracy = Ut.prototype.Mj;
    Ut.prototype.getAccuracyGeometry = Ut.prototype.Nj;
    Ut.prototype.getAltitude = Ut.prototype.Pj;
    Ut.prototype.getAltitudeAccuracy = Ut.prototype.Qj;
    Ut.prototype.getHeading = Ut.prototype.Ll;
    Ut.prototype.getPosition = Ut.prototype.Ml;
    Ut.prototype.getProjection = Ut.prototype.ah;
    Ut.prototype.getSpeed = Ut.prototype.wk;
    Ut.prototype.getTracking = Ut.prototype.bh;
    Ut.prototype.getTrackingOptions = Ut.prototype.Mg;
    Ut.prototype.setProjection = Ut.prototype.dh;
    Ut.prototype.setTracking = Ut.prototype.ge;
    Ut.prototype.setTrackingOptions = Ut.prototype.si;
    t("ol.Graticule", $t, OPENLAYERS);
    $t.prototype.getMap = $t.prototype.Pl;
    $t.prototype.getMeridians = $t.prototype.ik;
    $t.prototype.getParallels = $t.prototype.qk;
    $t.prototype.setMap = $t.prototype.setMap;
    t("ol.has.DEVICE_PIXEL_RATIO", gg, OPENLAYERS);
    t("ol.has.CANVAS", ig, OPENLAYERS);
    t("ol.has.DEVICE_ORIENTATION", jg, OPENLAYERS);
    t("ol.has.GEOLOCATION", kg, OPENLAYERS);
    t("ol.has.TOUCH", lg, OPENLAYERS);
    t("ol.has.WEBGL", bg, OPENLAYERS);
    eu.prototype.getImage = eu.prototype.a;
    eu.prototype.load = eu.prototype.load;
    fu.prototype.getImage = fu.prototype.$a;
    fu.prototype.load = fu.prototype.load;
    t("ol.Kinetic", Th, OPENLAYERS);
    t("ol.loadingstrategy.all", fl, OPENLAYERS);
    t("ol.loadingstrategy.bbox", function (a) {
        return [a]
    }, OPENLAYERS);
    t("ol.loadingstrategy.tile", function (a) {
        return function (b, c) {
            var d = a.Lb(c), e = pf(a, b, d), f = [], d = [d, 0, 0];
            for (d[1] = e.ca; d[1] <= e.ea; ++d[1])for (d[2] = e.fa; d[2] <= e.ga; ++d[2])f.push(a.Ea(d));
            return f
        }
    }, OPENLAYERS);
    t("ol.Map", Q, OPENLAYERS);
    Q.prototype.addControl = Q.prototype.uj;
    Q.prototype.addInteraction = Q.prototype.vj;
    Q.prototype.addLayer = Q.prototype.kg;
    Q.prototype.addOverlay = Q.prototype.lg;
    Q.prototype.beforeRender = Q.prototype.Wa;
    Q.prototype.forEachFeatureAtPixel = Q.prototype.kd;
    Q.prototype.forEachLayerAtPixel = Q.prototype.Tl;
    Q.prototype.hasFeatureAtPixel = Q.prototype.kl;
    Q.prototype.getEventCoordinate = Q.prototype.Wj;
    Q.prototype.getEventPixel = Q.prototype.Td;
    Q.prototype.getTarget = Q.prototype.tf;
    Q.prototype.getTargetElement = Q.prototype.yc;
    Q.prototype.getCoordinateFromPixel = Q.prototype.Ma;
    Q.prototype.getControls = Q.prototype.Uj;
    Q.prototype.getOverlays = Q.prototype.nk;
    Q.prototype.getOverlayById = Q.prototype.mk;
    Q.prototype.getInteractions = Q.prototype.ak;
    Q.prototype.getLayerGroup = Q.prototype.xc;
    Q.prototype.getLayers = Q.prototype.eh;
    Q.prototype.getPixelFromCoordinate = Q.prototype.Ga;
    Q.prototype.getSize = Q.prototype.Za;
    Q.prototype.getView = Q.prototype.aa;
    Q.prototype.getViewport = Q.prototype.Dk;
    Q.prototype.renderSync = Q.prototype.Vo;
    Q.prototype.render = Q.prototype.render;
    Q.prototype.removeControl = Q.prototype.Oo;
    Q.prototype.removeInteraction = Q.prototype.Po;
    Q.prototype.removeLayer = Q.prototype.Ro;
    Q.prototype.removeOverlay = Q.prototype.So;
    Q.prototype.setLayerGroup = Q.prototype.ji;
    Q.prototype.setSize = Q.prototype.Wf;
    Q.prototype.setTarget = Q.prototype.fh;
    Q.prototype.setView = Q.prototype.kp;
    Q.prototype.updateSize = Q.prototype.Xc;
    Vg.prototype.originalEvent = Vg.prototype.originalEvent;
    Vg.prototype.pixel = Vg.prototype.pixel;
    Vg.prototype.coordinate = Vg.prototype.coordinate;
    Vg.prototype.dragging = Vg.prototype.dragging;
    We.prototype.map = We.prototype.map;
    We.prototype.frameState = We.prototype.frameState;
    db.prototype.key = db.prototype.key;
    db.prototype.oldValue = db.prototype.oldValue;
    t("ol.Object", eb, OPENLAYERS);
    eb.prototype.get = eb.prototype.get;
    eb.prototype.getKeys = eb.prototype.N;
    eb.prototype.getProperties = eb.prototype.O;
    eb.prototype.set = eb.prototype.set;
    eb.prototype.setProperties = eb.prototype.G;
    eb.prototype.unset = eb.prototype.P;
    t("ol.Observable", bb, OPENLAYERS);
    t("ol.Observable.unByKey", cb, OPENLAYERS);
    bb.prototype.changed = bb.prototype.u;
    bb.prototype.dispatchEvent = bb.prototype.b;
    bb.prototype.getRevision = bb.prototype.K;
    bb.prototype.on = bb.prototype.I;
    bb.prototype.once = bb.prototype.L;
    bb.prototype.un = bb.prototype.J;
    bb.prototype.unByKey = bb.prototype.M;
    t("ol.inherits", y, OPENLAYERS);
    t("ol.Overlay", Xm, OPENLAYERS);
    Xm.prototype.getElement = Xm.prototype.Sd;
    Xm.prototype.getId = Xm.prototype.Xa;
    Xm.prototype.getMap = Xm.prototype.he;
    Xm.prototype.getOffset = Xm.prototype.Kg;
    Xm.prototype.getPosition = Xm.prototype.gh;
    Xm.prototype.getPositioning = Xm.prototype.Lg;
    Xm.prototype.setElement = Xm.prototype.fi;
    Xm.prototype.setMap = Xm.prototype.setMap;
    Xm.prototype.setOffset = Xm.prototype.li;
    Xm.prototype.setPosition = Xm.prototype.uf;
    Xm.prototype.setPositioning = Xm.prototype.oi;
    t("ol.render.toContext", function (a, b) {
        var c = a.canvas, d = b ? b : {}, e = d.pixelRatio || gg;
        if (d = d.size)c.width = d[0] * e, c.height = d[1] * e, c.style.width = d[0] + "px", c.style.height = d[1] + "px";
        c = [0, 0, c.width, c.height];
        d = qh(Xc(), 0, 0, e, e, 0, 0, 0);
        return new yj(a, e, c, d, 0)
    }, OPENLAYERS);
    t("ol.size.toSize", hf, OPENLAYERS);
    df.prototype.getTileCoord = df.prototype.i;
    df.prototype.load = df.prototype.load;
    Kk.prototype.getFormat = Kk.prototype.Ul;
    Kk.prototype.setFeatures = Kk.prototype.gi;
    Kk.prototype.setProjection = Kk.prototype.vf;
    Kk.prototype.setLoader = Kk.prototype.ki;
    t("ol.View", Rd, OPENLAYERS);
    Rd.prototype.constrainCenter = Rd.prototype.Pd;
    Rd.prototype.constrainResolution = Rd.prototype.constrainResolution;
    Rd.prototype.constrainRotation = Rd.prototype.constrainRotation;
    Rd.prototype.getCenter = Rd.prototype.ab;
    Rd.prototype.calculateExtent = Rd.prototype.Kc;
    Rd.prototype.getMaxResolution = Rd.prototype.Vl;
    Rd.prototype.getMinResolution = Rd.prototype.Wl;
    Rd.prototype.getProjection = Rd.prototype.Xl;
    Rd.prototype.getResolution = Rd.prototype.$;
    Rd.prototype.getResolutions = Rd.prototype.Yl;
    Rd.prototype.getRotation = Rd.prototype.La;
    Rd.prototype.getZoom = Rd.prototype.Fk;
    Rd.prototype.fit = Rd.prototype.cf;
    Rd.prototype.centerOn = Rd.prototype.Ej;
    Rd.prototype.rotate = Rd.prototype.rotate;
    Rd.prototype.setCenter = Rd.prototype.mb;
    Rd.prototype.setResolution = Rd.prototype.Ub;
    Rd.prototype.setRotation = Rd.prototype.ie;
    Rd.prototype.setZoom = Rd.prototype.np;
    t("ol.xml.getAllTextContent", Nk, OPENLAYERS);
    t("ol.xml.parse", Rk, OPENLAYERS);
    gm.prototype.getGL = gm.prototype.$n;
    gm.prototype.useProgram = gm.prototype.we;
    t("ol.tilegrid.TileGrid", mf, OPENLAYERS);
    mf.prototype.forEachTileCoord = mf.prototype.yg;
    mf.prototype.getMaxZoom = mf.prototype.Ig;
    mf.prototype.getMinZoom = mf.prototype.Jg;
    mf.prototype.getOrigin = mf.prototype.Ia;
    mf.prototype.getResolution = mf.prototype.$;
    mf.prototype.getResolutions = mf.prototype.Kh;
    mf.prototype.getTileCoordExtent = mf.prototype.Ea;
    mf.prototype.getTileCoordForCoordAndResolution = mf.prototype.Zd;
    mf.prototype.getTileCoordForCoordAndZ = mf.prototype.qd;
    mf.prototype.getTileSize = mf.prototype.Ja;
    mf.prototype.getZForResolution = mf.prototype.Lb;
    t("ol.tilegrid.createXYZ", yf, OPENLAYERS);
    t("ol.tilegrid.WMTS", fw, OPENLAYERS);
    fw.prototype.getMatrixIds = fw.prototype.j;
    t("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet", gw, OPENLAYERS);
    t("ol.style.AtlasManager", kw, OPENLAYERS);
    t("ol.style.Circle", qj, OPENLAYERS);
    qj.prototype.getFill = qj.prototype.Bn;
    qj.prototype.getImage = qj.prototype.jc;
    qj.prototype.getRadius = qj.prototype.Cn;
    qj.prototype.getStroke = qj.prototype.Dn;
    t("ol.style.Fill", ij, OPENLAYERS);
    ij.prototype.getColor = ij.prototype.g;
    ij.prototype.setColor = ij.prototype.f;
    t("ol.style.Icon", Dh, OPENLAYERS);
    Dh.prototype.getAnchor = Dh.prototype.Yb;
    Dh.prototype.getImage = Dh.prototype.jc;
    Dh.prototype.getOrigin = Dh.prototype.Ia;
    Dh.prototype.getSrc = Dh.prototype.En;
    Dh.prototype.getSize = Dh.prototype.Fb;
    Dh.prototype.load = Dh.prototype.load;
    t("ol.style.Image", Ch, OPENLAYERS);
    Ch.prototype.getOpacity = Ch.prototype.qe;
    Ch.prototype.getRotateWithView = Ch.prototype.Xd;
    Ch.prototype.getRotation = Ch.prototype.re;
    Ch.prototype.getScale = Ch.prototype.se;
    Ch.prototype.getSnapToPixel = Ch.prototype.Yd;
    Ch.prototype.setOpacity = Ch.prototype.te;
    Ch.prototype.setRotation = Ch.prototype.ue;
    Ch.prototype.setScale = Ch.prototype.ve;
    t("ol.style.RegularShape", ow, OPENLAYERS);
    ow.prototype.getAnchor = ow.prototype.Yb;
    ow.prototype.getAngle = ow.prototype.Fn;
    ow.prototype.getFill = ow.prototype.Gn;
    ow.prototype.getImage = ow.prototype.jc;
    ow.prototype.getOrigin = ow.prototype.Ia;
    ow.prototype.getPoints = ow.prototype.Hn;
    ow.prototype.getRadius = ow.prototype.In;
    ow.prototype.getRadius2 = ow.prototype.uk;
    ow.prototype.getSize = ow.prototype.Fb;
    ow.prototype.getStroke = ow.prototype.Jn;
    t("ol.style.Stroke", oj, OPENLAYERS);
    oj.prototype.getColor = oj.prototype.Kn;
    oj.prototype.getLineCap = oj.prototype.dk;
    oj.prototype.getLineDash = oj.prototype.Ln;
    oj.prototype.getLineJoin = oj.prototype.ek;
    oj.prototype.getMiterLimit = oj.prototype.jk;
    oj.prototype.getWidth = oj.prototype.Mn;
    oj.prototype.setColor = oj.prototype.Nn;
    oj.prototype.setLineCap = oj.prototype.fp;
    oj.prototype.setLineDash = oj.prototype.On;
    oj.prototype.setLineJoin = oj.prototype.gp;
    oj.prototype.setMiterLimit = oj.prototype.hp;
    oj.prototype.setWidth = oj.prototype.lp;
    t("ol.style.Style", rj, OPENLAYERS);
    rj.prototype.getGeometry = rj.prototype.W;
    rj.prototype.getGeometryFunction = rj.prototype.Zj;
    rj.prototype.getFill = rj.prototype.Pn;
    rj.prototype.getImage = rj.prototype.Qn;
    rj.prototype.getStroke = rj.prototype.Rn;
    rj.prototype.getText = rj.prototype.Ha;
    rj.prototype.getZIndex = rj.prototype.Sn;
    rj.prototype.setGeometry = rj.prototype.Jh;
    rj.prototype.setZIndex = rj.prototype.Tn;
    t("ol.style.Text", Gp, OPENLAYERS);
    Gp.prototype.getFont = Gp.prototype.Xj;
    Gp.prototype.getOffsetX = Gp.prototype.kk;
    Gp.prototype.getOffsetY = Gp.prototype.lk;
    Gp.prototype.getFill = Gp.prototype.Un;
    Gp.prototype.getRotation = Gp.prototype.Vn;
    Gp.prototype.getScale = Gp.prototype.Wn;
    Gp.prototype.getStroke = Gp.prototype.Xn;
    Gp.prototype.getText = Gp.prototype.Ha;
    Gp.prototype.getTextAlign = Gp.prototype.yk;
    Gp.prototype.getTextBaseline = Gp.prototype.zk;
    Gp.prototype.setFont = Gp.prototype.bp;
    Gp.prototype.setOffsetX = Gp.prototype.mi;
    Gp.prototype.setOffsetY = Gp.prototype.ni;
    Gp.prototype.setFill = Gp.prototype.ap;
    Gp.prototype.setRotation = Gp.prototype.Yn;
    Gp.prototype.setScale = Gp.prototype.Zn;
    Gp.prototype.setStroke = Gp.prototype.ip;
    Gp.prototype.setText = Gp.prototype.pi;
    Gp.prototype.setTextAlign = Gp.prototype.ri;
    Gp.prototype.setTextBaseline = Gp.prototype.jp;
    t("ol.Sphere", sc, OPENLAYERS);
    sc.prototype.geodesicArea = sc.prototype.a;
    sc.prototype.haversineDistance = sc.prototype.b;
    t("ol.source.BingMaps", pv, OPENLAYERS);
    t("ol.source.BingMaps.TOS_ATTRIBUTION", qv, OPENLAYERS);
    t("ol.source.CartoDB", sv, OPENLAYERS);
    sv.prototype.getConfig = sv.prototype.Tj;
    sv.prototype.updateConfig = sv.prototype.up;
    sv.prototype.setConfig = sv.prototype.$o;
    t("ol.source.Cluster", Y, OPENLAYERS);
    Y.prototype.getSource = Y.prototype.Aa;
    t("ol.source.ImageArcGISRest", yv, OPENLAYERS);
    yv.prototype.getParams = yv.prototype.Sm;
    yv.prototype.getImageLoadFunction = yv.prototype.Rm;
    yv.prototype.getUrl = yv.prototype.Tm;
    yv.prototype.setImageLoadFunction = yv.prototype.Um;
    yv.prototype.setUrl = yv.prototype.Vm;
    yv.prototype.updateParams = yv.prototype.Wm;
    t("ol.source.ImageCanvas", Hk, OPENLAYERS);
    t("ol.source.ImageMapGuide", zv, OPENLAYERS);
    zv.prototype.getParams = zv.prototype.Ym;
    zv.prototype.getImageLoadFunction = zv.prototype.Xm;
    zv.prototype.updateParams = zv.prototype.$m;
    zv.prototype.setImageLoadFunction = zv.prototype.Zm;
    t("ol.source.Image", Ak, OPENLAYERS);
    Ck.prototype.image = Ck.prototype.image;
    t("ol.source.ImageStatic", Av, OPENLAYERS);
    t("ol.source.ImageVector", yl, OPENLAYERS);
    yl.prototype.getSource = yl.prototype.an;
    yl.prototype.getStyle = yl.prototype.bn;
    yl.prototype.getStyleFunction = yl.prototype.cn;
    yl.prototype.setStyle = yl.prototype.xh;
    t("ol.source.ImageWMS", Bv, OPENLAYERS);
    Bv.prototype.getGetFeatureInfoUrl = Bv.prototype.fn;
    Bv.prototype.getParams = Bv.prototype.hn;
    Bv.prototype.getImageLoadFunction = Bv.prototype.gn;
    Bv.prototype.getUrl = Bv.prototype.jn;
    Bv.prototype.setImageLoadFunction = Bv.prototype.kn;
    Bv.prototype.setUrl = Bv.prototype.ln;
    Bv.prototype.updateParams = Bv.prototype.mn;
    t("ol.source.OSM", Fv, OPENLAYERS);
    t("ol.source.OSM.ATTRIBUTION", Gv, OPENLAYERS);
    t("ol.source.Raster", Hv, OPENLAYERS);
    Hv.prototype.setOperation = Hv.prototype.v;
    Mv.prototype.extent = Mv.prototype.extent;
    Mv.prototype.resolution = Mv.prototype.resolution;
    Mv.prototype.data = Mv.prototype.data;
    t("ol.source.Source", jf, OPENLAYERS);
    jf.prototype.getAttributions = jf.prototype.wa;
    jf.prototype.getLogo = jf.prototype.ua;
    jf.prototype.getProjection = jf.prototype.xa;
    jf.prototype.getState = jf.prototype.V;
    jf.prototype.refresh = jf.prototype.sa;
    jf.prototype.setAttributions = jf.prototype.oa;
    t("ol.source.Stamen", Rv, OPENLAYERS);
    t("ol.source.TileArcGISRest", Tv, OPENLAYERS);
    Tv.prototype.getParams = Tv.prototype.v;
    Tv.prototype.updateParams = Tv.prototype.A;
    t("ol.source.TileDebug", Vv, OPENLAYERS);
    t("ol.source.TileImage", W, OPENLAYERS);
    W.prototype.setRenderReprojectionEdges = W.prototype.zb;
    W.prototype.setTileGridForProjection = W.prototype.Ab;
    t("ol.source.TileJSON", Wv, OPENLAYERS);
    Wv.prototype.getTileJSON = Wv.prototype.Ak;
    t("ol.source.Tile", zf, OPENLAYERS);
    zf.prototype.getTileGrid = zf.prototype.Na;
    Df.prototype.tile = Df.prototype.tile;
    t("ol.source.TileUTFGrid", Xv, OPENLAYERS);
    Xv.prototype.getTemplate = Xv.prototype.xk;
    Xv.prototype.forDataAtCoordinateAndResolution = Xv.prototype.Ij;
    t("ol.source.TileWMS", aw, OPENLAYERS);
    aw.prototype.getGetFeatureInfoUrl = aw.prototype.vn;
    aw.prototype.getParams = aw.prototype.wn;
    aw.prototype.updateParams = aw.prototype.xn;
    Jl.prototype.getTileLoadFunction = Jl.prototype.fb;
    Jl.prototype.getTileUrlFunction = Jl.prototype.gb;
    Jl.prototype.getUrls = Jl.prototype.hb;
    Jl.prototype.setTileLoadFunction = Jl.prototype.kb;
    Jl.prototype.setTileUrlFunction = Jl.prototype.Qa;
    Jl.prototype.setUrl = Jl.prototype.Va;
    Jl.prototype.setUrls = Jl.prototype.bb;
    t("ol.source.Vector", P, OPENLAYERS);
    P.prototype.addFeature = P.prototype.rb;
    P.prototype.addFeatures = P.prototype.Jc;
    P.prototype.clear = P.prototype.clear;
    P.prototype.forEachFeature = P.prototype.wg;
    P.prototype.forEachFeatureInExtent = P.prototype.ub;
    P.prototype.forEachFeatureIntersectingExtent = P.prototype.xg;
    P.prototype.getFeaturesCollection = P.prototype.Fg;
    P.prototype.getFeatures = P.prototype.oe;
    P.prototype.getFeaturesAtCoordinate = P.prototype.Eg;
    P.prototype.getFeaturesInExtent = P.prototype.ef;
    P.prototype.getClosestFeatureToCoordinate = P.prototype.Ag;
    P.prototype.getExtent = P.prototype.H;
    P.prototype.getFeatureById = P.prototype.Dg;
    P.prototype.getFormat = P.prototype.Ch;
    P.prototype.getUrl = P.prototype.Dh;
    P.prototype.removeFeature = P.prototype.nb;
    vl.prototype.feature = vl.prototype.feature;
    t("ol.source.VectorTile", Kl, OPENLAYERS);
    t("ol.source.WMTS", Z, OPENLAYERS);
    Z.prototype.getDimensions = Z.prototype.Vj;
    Z.prototype.getFormat = Z.prototype.yn;
    Z.prototype.getLayer = Z.prototype.zn;
    Z.prototype.getMatrixSet = Z.prototype.hk;
    Z.prototype.getRequestEncoding = Z.prototype.vk;
    Z.prototype.getStyle = Z.prototype.An;
    Z.prototype.getVersion = Z.prototype.Ck;
    Z.prototype.updateDimensions = Z.prototype.vp;
    t("ol.source.WMTS.optionsFromCapabilities", function (a, b) {
        var c = ob(a.Contents.Layer, function (a) {
            return a.Identifier == b.layer
        }), d = a.Contents.TileMatrixSet, e, f;
        e = 1 < c.TileMatrixSetLink.length ? "projection" in b ? sb(c.TileMatrixSetLink, function (a) {
            return ob(d, function (b) {
                    return b.Identifier == a.TileMatrixSet
                }).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3") == b.projection
        }) : sb(c.TileMatrixSetLink, function (a) {
            return a.TileMatrixSet == b.matrixSet
        }) : 0;
        0 > e && (e = 0);
        f = c.TileMatrixSetLink[e].TileMatrixSet;
        var g = c.Format[0];
        "format" in b && (g = b.format);
        e = sb(c.Style, function (a) {
            return "style" in b ? a.Title == b.style : a.isDefault
        });
        0 > e && (e = 0);
        e = c.Style[e].Identifier;
        var h = {};
        "Dimension" in c && c.Dimension.forEach(function (a) {
            var b = a.Identifier, c = a.Default;
            void 0 === c && (c = a.Value[0]);
            h[b] = c
        });
        var l = ob(a.Contents.TileMatrixSet, function (a) {
            return a.Identifier == f
        }), m;
        m = "projection" in b ? yc(b.projection) : yc(l.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var n = c.WGS84BoundingBox, p, q;
        void 0 !== n &&
        (q = yc("EPSG:4326").H(), q = n[0] == q[0] && n[2] == q[2], p = Sc(n, "EPSG:4326", m), (n = m.H()) && (Ub(n, p) || (p = void 0)));
        var l = gw(l, p), r = [];
        p = b.requestEncoding;
        p = void 0 !== p ? p : "";
        if ("OperationsMetadata" in a && "GetTile" in a.OperationsMetadata)for (var n = a.OperationsMetadata.GetTile.DCP.HTTP.Get, u = 0, x = n.length; u < x; ++u) {
            var v = ob(n[u].Constraint, function (a) {
                return "GetEncoding" == a.name
            }).AllowedValues.Value;
            "" === p && (p = v[0]);
            if ("KVP" === p)jb(v, "KVP") && r.push(n[u].href); else break
        }
        0 === r.length && (p = "REST", c.ResourceURL.forEach(function (a) {
            "tile" ===
            a.resourceType && (g = a.format, r.push(a.template))
        }));
        return {
            urls: r,
            layer: b.layer,
            matrixSet: f,
            format: g,
            projection: m,
            requestEncoding: p,
            tileGrid: l,
            style: e,
            dimensions: h,
            wrapX: q
        }
    }, OPENLAYERS);
    t("ol.source.XYZ", rv, OPENLAYERS);
    t("ol.source.Zoomify", iw, OPENLAYERS);
    lh.prototype.vectorContext = lh.prototype.vectorContext;
    lh.prototype.frameState = lh.prototype.frameState;
    lh.prototype.context = lh.prototype.context;
    lh.prototype.glContext = lh.prototype.glContext;
    hk.prototype.get = hk.prototype.get;
    hk.prototype.getExtent = hk.prototype.H;
    hk.prototype.getGeometry = hk.prototype.W;
    hk.prototype.getProperties = hk.prototype.Nm;
    hk.prototype.getType = hk.prototype.X;
    t("ol.render.VectorContext", kh, OPENLAYERS);
    Cm.prototype.setStyle = Cm.prototype.sd;
    Cm.prototype.drawGeometry = Cm.prototype.sc;
    Cm.prototype.drawFeature = Cm.prototype.Ye;
    yj.prototype.drawCircle = yj.prototype.Rd;
    yj.prototype.setStyle = yj.prototype.sd;
    yj.prototype.drawGeometry = yj.prototype.sc;
    yj.prototype.drawFeature = yj.prototype.Ye;
    t("ol.proj.common.add", bj, OPENLAYERS);
    t("ol.proj.METERS_PER_UNIT", uc, OPENLAYERS);
    t("ol.proj.Projection", vc, OPENLAYERS);
    vc.prototype.getCode = vc.prototype.Sj;
    vc.prototype.getExtent = vc.prototype.H;
    vc.prototype.getUnits = vc.prototype.wb;
    vc.prototype.getMetersPerUnit = vc.prototype.$b;
    vc.prototype.getWorldExtent = vc.prototype.Ek;
    vc.prototype.isGlobal = vc.prototype.pl;
    vc.prototype.setGlobal = vc.prototype.ep;
    vc.prototype.setExtent = vc.prototype.Mm;
    vc.prototype.setWorldExtent = vc.prototype.mp;
    vc.prototype.setGetPointResolution = vc.prototype.cp;
    vc.prototype.getPointResolution = vc.prototype.getPointResolution;
    t("ol.proj.setProj4", function (a) {
        xc = a
    }, OPENLAYERS);
    t("ol.proj.addEquivalentProjections", zc, OPENLAYERS);
    t("ol.proj.addProjection", Lc, OPENLAYERS);
    t("ol.proj.addCoordinateTransforms", Ac, OPENLAYERS);
    t("ol.proj.fromLonLat", function (a, b) {
        return Rc(a, "EPSG:4326", void 0 !== b ? b : "EPSG:3857")
    }, OPENLAYERS);
    t("ol.proj.toLonLat", function (a, b) {
        return Rc(a, void 0 !== b ? b : "EPSG:3857", "EPSG:4326")
    }, OPENLAYERS);
    t("ol.proj.get", yc, OPENLAYERS);
    t("ol.proj.equivalent", Oc, OPENLAYERS);
    t("ol.proj.getTransform", Pc, OPENLAYERS);
    t("ol.proj.transform", Rc, OPENLAYERS);
    t("ol.proj.transformExtent", Sc, OPENLAYERS);
    t("ol.layer.Heatmap", V, OPENLAYERS);
    V.prototype.getBlur = V.prototype.zg;
    V.prototype.getGradient = V.prototype.Gg;
    V.prototype.getRadius = V.prototype.ph;
    V.prototype.setBlur = V.prototype.di;
    V.prototype.setGradient = V.prototype.ii;
    V.prototype.setRadius = V.prototype.qh;
    t("ol.layer.Image", cj, OPENLAYERS);
    cj.prototype.getSource = cj.prototype.ha;
    t("ol.layer.Layer", mh, OPENLAYERS);
    mh.prototype.getSource = mh.prototype.ha;
    mh.prototype.setMap = mh.prototype.setMap;
    mh.prototype.setSource = mh.prototype.Fc;
    t("ol.layer.Base", ih, OPENLAYERS);
    ih.prototype.getExtent = ih.prototype.H;
    ih.prototype.getMaxResolution = ih.prototype.Nb;
    ih.prototype.getMinResolution = ih.prototype.Ob;
    ih.prototype.getOpacity = ih.prototype.Pb;
    ih.prototype.getVisible = ih.prototype.xb;
    ih.prototype.getZIndex = ih.prototype.Qb;
    ih.prototype.setExtent = ih.prototype.fc;
    ih.prototype.setMaxResolution = ih.prototype.nc;
    ih.prototype.setMinResolution = ih.prototype.oc;
    ih.prototype.setOpacity = ih.prototype.gc;
    ih.prototype.setVisible = ih.prototype.hc;
    ih.prototype.setZIndex = ih.prototype.ic;
    t("ol.layer.Group", Ti, OPENLAYERS);
    Ti.prototype.getLayers = Ti.prototype.Tc;
    Ti.prototype.setLayers = Ti.prototype.oh;
    t("ol.layer.Tile", dj, OPENLAYERS);
    dj.prototype.getPreload = dj.prototype.f;
    dj.prototype.getSource = dj.prototype.ha;
    dj.prototype.setPreload = dj.prototype.l;
    dj.prototype.getUseInterimTilesOnError = dj.prototype.c;
    dj.prototype.setUseInterimTilesOnError = dj.prototype.A;
    t("ol.layer.Vector", G, OPENLAYERS);
    G.prototype.getSource = G.prototype.ha;
    G.prototype.getStyle = G.prototype.C;
    G.prototype.getStyleFunction = G.prototype.D;
    G.prototype.setStyle = G.prototype.l;
    t("ol.layer.VectorTile", I, OPENLAYERS);
    I.prototype.getPreload = I.prototype.f;
    I.prototype.getUseInterimTilesOnError = I.prototype.c;
    I.prototype.setPreload = I.prototype.Y;
    I.prototype.setUseInterimTilesOnError = I.prototype.ia;
    t("ol.interaction.DoubleClickZoom", Zh, OPENLAYERS);
    t("ol.interaction.DoubleClickZoom.handleEvent", $h, OPENLAYERS);
    t("ol.interaction.DragAndDrop", hu, OPENLAYERS);
    t("ol.interaction.DragAndDrop.handleEvent", qc, OPENLAYERS);
    ku.prototype.features = ku.prototype.features;
    ku.prototype.file = ku.prototype.file;
    ku.prototype.projection = ku.prototype.projection;
    xi.prototype.coordinate = xi.prototype.coordinate;
    xi.prototype.mapBrowserEvent = xi.prototype.mapBrowserEvent;
    t("ol.interaction.DragBox", yi, OPENLAYERS);
    yi.prototype.getGeometry = yi.prototype.W;
    t("ol.interaction.DragPan", mi, OPENLAYERS);
    t("ol.interaction.DragRotateAndZoom", mu, OPENLAYERS);
    t("ol.interaction.DragRotate", qi, OPENLAYERS);
    t("ol.interaction.DragZoom", Di, OPENLAYERS);
    qu.prototype.feature = qu.prototype.feature;
    t("ol.interaction.Draw", ru, OPENLAYERS);
    t("ol.interaction.Draw.handleEvent", tu, OPENLAYERS);
    ru.prototype.removeLastPoint = ru.prototype.Qo;
    ru.prototype.finishDrawing = ru.prototype.jd;
    ru.prototype.extend = ru.prototype.rm;
    t("ol.interaction.Draw.createRegularPolygon", function (a, b) {
        return function (c, d) {
            var e = c[0], f = c[1], g = Math.sqrt(Hb(e, f)), h = d ? d : Pd(new Vt(e), a);
            Qd(h, e, g, b ? b : Math.atan((f[1] - e[1]) / (f[0] - e[0])));
            return h
        }
    }, OPENLAYERS);
    t("ol.interaction.Interaction", Vh, OPENLAYERS);
    Vh.prototype.getActive = Vh.prototype.f;
    Vh.prototype.getMap = Vh.prototype.l;
    Vh.prototype.setActive = Vh.prototype.i;
    t("ol.interaction.defaults", Si, OPENLAYERS);
    t("ol.interaction.KeyboardPan", Ei, OPENLAYERS);
    t("ol.interaction.KeyboardPan.handleEvent", Fi, OPENLAYERS);
    t("ol.interaction.KeyboardZoom", Gi, OPENLAYERS);
    t("ol.interaction.KeyboardZoom.handleEvent", Hi, OPENLAYERS);
    Hu.prototype.features = Hu.prototype.features;
    Hu.prototype.mapBrowserEvent = Hu.prototype.mapBrowserEvent;
    t("ol.interaction.Modify", Iu, OPENLAYERS);
    t("ol.interaction.Modify.handleEvent", Lu, OPENLAYERS);
    Iu.prototype.removePoint = Iu.prototype.ai;
    t("ol.interaction.MouseWheelZoom", Ii, OPENLAYERS);
    t("ol.interaction.MouseWheelZoom.handleEvent", Ji, OPENLAYERS);
    Ii.prototype.setMouseAnchor = Ii.prototype.D;
    t("ol.interaction.PinchRotate", Ki, OPENLAYERS);
    t("ol.interaction.PinchZoom", Oi, OPENLAYERS);
    t("ol.interaction.Pointer", ji, OPENLAYERS);
    t("ol.interaction.Pointer.handleEvent", ki, OPENLAYERS);
    Vu.prototype.selected = Vu.prototype.selected;
    Vu.prototype.deselected = Vu.prototype.deselected;
    Vu.prototype.mapBrowserEvent = Vu.prototype.mapBrowserEvent;
    t("ol.interaction.Select", Wu, OPENLAYERS);
    Wu.prototype.getFeatures = Wu.prototype.Bm;
    Wu.prototype.getLayer = Wu.prototype.Cm;
    t("ol.interaction.Select.handleEvent", Xu, OPENLAYERS);
    Wu.prototype.setMap = Wu.prototype.setMap;
    t("ol.interaction.Snap", Zu, OPENLAYERS);
    Zu.prototype.addFeature = Zu.prototype.rb;
    Zu.prototype.removeFeature = Zu.prototype.nb;
    cv.prototype.features = cv.prototype.features;
    cv.prototype.coordinate = cv.prototype.coordinate;
    t("ol.interaction.Translate", dv, OPENLAYERS);
    t("ol.geom.Circle", Vt, OPENLAYERS);
    Vt.prototype.clone = Vt.prototype.clone;
    Vt.prototype.getCenter = Vt.prototype.rd;
    Vt.prototype.getRadius = Vt.prototype.wf;
    Vt.prototype.getType = Vt.prototype.X;
    Vt.prototype.intersectsExtent = Vt.prototype.Ka;
    Vt.prototype.setCenter = Vt.prototype.jm;
    Vt.prototype.setCenterAndRadius = Vt.prototype.Vf;
    Vt.prototype.setRadius = Vt.prototype.km;
    Vt.prototype.transform = Vt.prototype.jb;
    t("ol.geom.Geometry", Tc, OPENLAYERS);
    Tc.prototype.getClosestPoint = Tc.prototype.vb;
    Tc.prototype.getExtent = Tc.prototype.H;
    Tc.prototype.rotate = Tc.prototype.rotate;
    Tc.prototype.simplify = Tc.prototype.Bb;
    Tc.prototype.transform = Tc.prototype.jb;
    t("ol.geom.GeometryCollection", Ln, OPENLAYERS);
    Ln.prototype.clone = Ln.prototype.clone;
    Ln.prototype.getGeometries = Ln.prototype.ff;
    Ln.prototype.getType = Ln.prototype.X;
    Ln.prototype.intersectsExtent = Ln.prototype.Ka;
    Ln.prototype.setGeometries = Ln.prototype.hi;
    Ln.prototype.applyTransform = Ln.prototype.rc;
    Ln.prototype.translate = Ln.prototype.Sc;
    t("ol.geom.LinearRing", zd, OPENLAYERS);
    zd.prototype.clone = zd.prototype.clone;
    zd.prototype.getArea = zd.prototype.nm;
    zd.prototype.getCoordinates = zd.prototype.Z;
    zd.prototype.getType = zd.prototype.X;
    zd.prototype.setCoordinates = zd.prototype.pa;
    t("ol.geom.LineString", R, OPENLAYERS);
    R.prototype.appendCoordinate = R.prototype.wj;
    R.prototype.clone = R.prototype.clone;
    R.prototype.forEachSegment = R.prototype.Lj;
    R.prototype.getCoordinateAtM = R.prototype.lm;
    R.prototype.getCoordinates = R.prototype.Z;
    R.prototype.getCoordinateAt = R.prototype.Bg;
    R.prototype.getLength = R.prototype.mm;
    R.prototype.getType = R.prototype.X;
    R.prototype.intersectsExtent = R.prototype.Ka;
    R.prototype.setCoordinates = R.prototype.pa;
    t("ol.geom.MultiLineString", S, OPENLAYERS);
    S.prototype.appendLineString = S.prototype.xj;
    S.prototype.clone = S.prototype.clone;
    S.prototype.getCoordinateAtM = S.prototype.om;
    S.prototype.getCoordinates = S.prototype.Z;
    S.prototype.getLineString = S.prototype.fk;
    S.prototype.getLineStrings = S.prototype.md;
    S.prototype.getType = S.prototype.X;
    S.prototype.intersectsExtent = S.prototype.Ka;
    S.prototype.setCoordinates = S.prototype.pa;
    t("ol.geom.MultiPoint", Bn, OPENLAYERS);
    Bn.prototype.appendPoint = Bn.prototype.zj;
    Bn.prototype.clone = Bn.prototype.clone;
    Bn.prototype.getCoordinates = Bn.prototype.Z;
    Bn.prototype.getPoint = Bn.prototype.rk;
    Bn.prototype.getPoints = Bn.prototype.je;
    Bn.prototype.getType = Bn.prototype.X;
    Bn.prototype.intersectsExtent = Bn.prototype.Ka;
    Bn.prototype.setCoordinates = Bn.prototype.pa;
    t("ol.geom.MultiPolygon", T, OPENLAYERS);
    T.prototype.appendPolygon = T.prototype.Aj;
    T.prototype.clone = T.prototype.clone;
    T.prototype.getArea = T.prototype.pm;
    T.prototype.getCoordinates = T.prototype.Z;
    T.prototype.getInteriorPoints = T.prototype.ck;
    T.prototype.getPolygon = T.prototype.tk;
    T.prototype.getPolygons = T.prototype.Wd;
    T.prototype.getType = T.prototype.X;
    T.prototype.intersectsExtent = T.prototype.Ka;
    T.prototype.setCoordinates = T.prototype.pa;
    t("ol.geom.Point", C, OPENLAYERS);
    C.prototype.clone = C.prototype.clone;
    C.prototype.getCoordinates = C.prototype.Z;
    C.prototype.getType = C.prototype.X;
    C.prototype.intersectsExtent = C.prototype.Ka;
    C.prototype.setCoordinates = C.prototype.pa;
    t("ol.geom.Polygon", E, OPENLAYERS);
    E.prototype.appendLinearRing = E.prototype.yj;
    E.prototype.clone = E.prototype.clone;
    E.prototype.getArea = E.prototype.qm;
    E.prototype.getCoordinates = E.prototype.Z;
    E.prototype.getInteriorPoint = E.prototype.bk;
    E.prototype.getLinearRingCount = E.prototype.gk;
    E.prototype.getLinearRing = E.prototype.Hg;
    E.prototype.getLinearRings = E.prototype.Vd;
    E.prototype.getType = E.prototype.X;
    E.prototype.intersectsExtent = E.prototype.Ka;
    E.prototype.setCoordinates = E.prototype.pa;
    t("ol.geom.Polygon.circular", Nd, OPENLAYERS);
    t("ol.geom.Polygon.fromExtent", Od, OPENLAYERS);
    t("ol.geom.Polygon.fromCircle", Pd, OPENLAYERS);
    t("ol.geom.SimpleGeometry", hd, OPENLAYERS);
    hd.prototype.getFirstCoordinate = hd.prototype.Ib;
    hd.prototype.getLastCoordinate = hd.prototype.Jb;
    hd.prototype.getLayout = hd.prototype.Kb;
    hd.prototype.applyTransform = hd.prototype.rc;
    hd.prototype.translate = hd.prototype.Sc;
    t("ol.format.EsriJSON", En, OPENLAYERS);
    En.prototype.readFeature = En.prototype.Rb;
    En.prototype.readFeatures = En.prototype.Fa;
    En.prototype.readGeometry = En.prototype.Vc;
    En.prototype.readProjection = En.prototype.Oa;
    En.prototype.writeGeometry = En.prototype.Zc;
    En.prototype.writeGeometryObject = En.prototype.Ke;
    En.prototype.writeFeature = En.prototype.Dd;
    En.prototype.writeFeatureObject = En.prototype.Yc;
    En.prototype.writeFeatures = En.prototype.Xb;
    En.prototype.writeFeaturesObject = En.prototype.Ie;
    t("ol.format.Feature", rn, OPENLAYERS);
    t("ol.format.GeoJSON", Pn, OPENLAYERS);
    Pn.prototype.readFeature = Pn.prototype.Rb;
    Pn.prototype.readFeatures = Pn.prototype.Fa;
    Pn.prototype.readGeometry = Pn.prototype.Vc;
    Pn.prototype.readProjection = Pn.prototype.Oa;
    Pn.prototype.writeFeature = Pn.prototype.Dd;
    Pn.prototype.writeFeatureObject = Pn.prototype.Yc;
    Pn.prototype.writeFeatures = Pn.prototype.Xb;
    Pn.prototype.writeFeaturesObject = Pn.prototype.Ie;
    Pn.prototype.writeGeometry = Pn.prototype.Zc;
    Pn.prototype.writeGeometryObject = Pn.prototype.Ke;
    t("ol.format.GPX", uo, OPENLAYERS);
    uo.prototype.readFeature = uo.prototype.Rb;
    uo.prototype.readFeatures = uo.prototype.Fa;
    uo.prototype.readProjection = uo.prototype.Oa;
    uo.prototype.writeFeatures = uo.prototype.Xb;
    uo.prototype.writeFeaturesNode = uo.prototype.a;
    t("ol.format.IGC", dp, OPENLAYERS);
    dp.prototype.readFeature = dp.prototype.Rb;
    dp.prototype.readFeatures = dp.prototype.Fa;
    dp.prototype.readProjection = dp.prototype.Oa;
    t("ol.format.KML", Hp, OPENLAYERS);
    Hp.prototype.readFeature = Hp.prototype.Rb;
    Hp.prototype.readFeatures = Hp.prototype.Fa;
    Hp.prototype.readName = Hp.prototype.Fo;
    Hp.prototype.readNetworkLinks = Hp.prototype.Go;
    Hp.prototype.readProjection = Hp.prototype.Oa;
    Hp.prototype.writeFeatures = Hp.prototype.Xb;
    Hp.prototype.writeFeaturesNode = Hp.prototype.a;
    t("ol.format.MVT", wr, OPENLAYERS);
    wr.prototype.readFeatures = wr.prototype.Fa;
    wr.prototype.readProjection = wr.prototype.Oa;
    wr.prototype.setLayers = wr.prototype.c;
    t("ol.format.OSMXML", Sr, OPENLAYERS);
    Sr.prototype.readFeatures = Sr.prototype.Fa;
    Sr.prototype.readProjection = Sr.prototype.Oa;
    t("ol.format.Polyline", qs, OPENLAYERS);
    t("ol.format.Polyline.encodeDeltas", rs, OPENLAYERS);
    t("ol.format.Polyline.decodeDeltas", ts, OPENLAYERS);
    t("ol.format.Polyline.encodeFloats", ss, OPENLAYERS);
    t("ol.format.Polyline.decodeFloats", us, OPENLAYERS);
    qs.prototype.readFeature = qs.prototype.Rb;
    qs.prototype.readFeatures = qs.prototype.Fa;
    qs.prototype.readGeometry = qs.prototype.Vc;
    qs.prototype.readProjection = qs.prototype.Oa;
    qs.prototype.writeGeometry = qs.prototype.Zc;
    t("ol.format.TopoJSON", ws, OPENLAYERS);
    ws.prototype.readFeatures = ws.prototype.Fa;
    ws.prototype.readProjection = ws.prototype.Oa;
    t("ol.format.WFS", Cs, OPENLAYERS);
    Cs.prototype.readFeatures = Cs.prototype.Fa;
    Cs.prototype.readTransactionResponse = Cs.prototype.o;
    Cs.prototype.readFeatureCollectionMetadata = Cs.prototype.l;
    Cs.prototype.writeGetFeature = Cs.prototype.j;
    Cs.prototype.writeTransaction = Cs.prototype.U;
    Cs.prototype.readProjection = Cs.prototype.Oa;
    t("ol.format.WKT", Ts, OPENLAYERS);
    Ts.prototype.readFeature = Ts.prototype.Rb;
    Ts.prototype.readFeatures = Ts.prototype.Fa;
    Ts.prototype.readGeometry = Ts.prototype.Vc;
    Ts.prototype.writeFeature = Ts.prototype.Dd;
    Ts.prototype.writeFeatures = Ts.prototype.Xb;
    Ts.prototype.writeGeometry = Ts.prototype.Zc;
    t("ol.format.WMSCapabilities", jt, OPENLAYERS);
    jt.prototype.read = jt.prototype.read;
    t("ol.format.WMSGetFeatureInfo", Gt, OPENLAYERS);
    Gt.prototype.readFeatures = Gt.prototype.Fa;
    t("ol.format.WMTSCapabilities", Ht, OPENLAYERS);
    Ht.prototype.read = Ht.prototype.read;
    t("ol.format.ogc.filter.and", yr, OPENLAYERS);
    t("ol.format.ogc.filter.or", function (a, b) {
        return new Fr(a, b)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.not", function (a) {
        return new Gr(a)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.bbox", Ar, OPENLAYERS);
    t("ol.format.ogc.filter.equalTo", function (a, b, c) {
        return new Jr(a, b, c)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.notEqualTo", function (a, b, c) {
        return new Kr(a, b, c)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.lessThan", function (a, b) {
        return new Lr(a, b)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.lessThanOrEqualTo", function (a, b) {
        return new Mr(a, b)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.greaterThan", function (a, b) {
        return new Nr(a, b)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.greaterThanOrEqualTo", function (a, b) {
        return new Or(a, b)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.isNull", function (a) {
        return new Pr(a)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.between", function (a, b, c) {
        return new Qr(a, b, c)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.like", function (a, b, c, d, e, f) {
        return new Rr(a, b, c, d, e, f)
    }, OPENLAYERS);
    t("ol.format.ogc.filter.Filter", Cr, OPENLAYERS);
    t("ol.format.ogc.filter.And", zr, OPENLAYERS);
    t("ol.format.ogc.filter.Or", Fr, OPENLAYERS);
    t("ol.format.ogc.filter.Not", Gr, OPENLAYERS);
    t("ol.format.ogc.filter.Bbox", Br, OPENLAYERS);
    t("ol.format.ogc.filter.Comparison", Hr, OPENLAYERS);
    t("ol.format.ogc.filter.ComparisonBinary", Ir, OPENLAYERS);
    t("ol.format.ogc.filter.EqualTo", Jr, OPENLAYERS);
    t("ol.format.ogc.filter.NotEqualTo", Kr, OPENLAYERS);
    t("ol.format.ogc.filter.LessThan", Lr, OPENLAYERS);
    t("ol.format.ogc.filter.LessThanOrEqualTo", Mr, OPENLAYERS);
    t("ol.format.ogc.filter.GreaterThan", Nr, OPENLAYERS);
    t("ol.format.ogc.filter.GreaterThanOrEqualTo", Or, OPENLAYERS);
    t("ol.format.ogc.filter.IsNull", Pr, OPENLAYERS);
    t("ol.format.ogc.filter.IsBetween", Qr, OPENLAYERS);
    t("ol.format.ogc.filter.IsLike", Rr, OPENLAYERS);
    t("ol.format.GML2", ko, OPENLAYERS);
    t("ol.format.GML3", lo, OPENLAYERS);
    lo.prototype.writeGeometryNode = lo.prototype.s;
    lo.prototype.writeFeatures = lo.prototype.Xb;
    lo.prototype.writeFeaturesNode = lo.prototype.a;
    t("ol.format.GML", lo, OPENLAYERS);
    lo.prototype.writeFeatures = lo.prototype.Xb;
    lo.prototype.writeFeaturesNode = lo.prototype.a;
    Xn.prototype.readFeatures = Xn.prototype.Fa;
    t("ol.events.condition.altKeyOnly", function (a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    }, OPENLAYERS);
    t("ol.events.condition.altShiftKeysOnly", ai, OPENLAYERS);
    t("ol.events.condition.always", qc, OPENLAYERS);
    t("ol.events.condition.click", function (a) {
        return a.type == Zg
    }, OPENLAYERS);
    t("ol.events.condition.never", rc, OPENLAYERS);
    t("ol.events.condition.pointerMove", ci, OPENLAYERS);
    t("ol.events.condition.singleClick", di, OPENLAYERS);
    t("ol.events.condition.doubleClick", function (a) {
        return a.type == $g
    }, OPENLAYERS);
    t("ol.events.condition.noModifierKeys", ei, OPENLAYERS);
    t("ol.events.condition.platformModifierKeyOnly", function (a) {
        a = a.originalEvent;
        return !a.altKey && (fg ? a.metaKey : a.ctrlKey) && !a.shiftKey
    }, OPENLAYERS);
    t("ol.events.condition.shiftKeyOnly", fi, OPENLAYERS);
    t("ol.events.condition.targetNotEditable", gi, OPENLAYERS);
    t("ol.events.condition.mouseOnly", hi, OPENLAYERS);
    t("ol.events.condition.primaryAction", ii, OPENLAYERS);
    Wa.prototype.type = Wa.prototype.type;
    Wa.prototype.target = Wa.prototype.target;
    Wa.prototype.preventDefault = Wa.prototype.preventDefault;
    Wa.prototype.stopPropagation = Wa.prototype.stopPropagation;
    t("ol.control.Attribution", Ef, OPENLAYERS);
    t("ol.control.Attribution.render", Ff, OPENLAYERS);
    Ef.prototype.getCollapsible = Ef.prototype.$l;
    Ef.prototype.setCollapsible = Ef.prototype.cm;
    Ef.prototype.setCollapsed = Ef.prototype.bm;
    Ef.prototype.getCollapsed = Ef.prototype.Zl;
    t("ol.control.Control", Xe, OPENLAYERS);
    Xe.prototype.getMap = Xe.prototype.i;
    Xe.prototype.setMap = Xe.prototype.setMap;
    Xe.prototype.setTarget = Xe.prototype.c;
    t("ol.control.defaults", Kf, OPENLAYERS);
    t("ol.control.FullScreen", Lf, OPENLAYERS);
    t("ol.control.MousePosition", Qf, OPENLAYERS);
    t("ol.control.MousePosition.render", Rf, OPENLAYERS);
    Qf.prototype.getCoordinateFormat = Qf.prototype.Cg;
    Qf.prototype.getProjection = Qf.prototype.hh;
    Qf.prototype.setCoordinateFormat = Qf.prototype.ei;
    Qf.prototype.setProjection = Qf.prototype.ih;
    t("ol.control.OverviewMap", an, OPENLAYERS);
    t("ol.control.OverviewMap.render", bn, OPENLAYERS);
    an.prototype.getCollapsible = an.prototype.fm;
    an.prototype.setCollapsible = an.prototype.im;
    an.prototype.setCollapsed = an.prototype.hm;
    an.prototype.getCollapsed = an.prototype.em;
    an.prototype.getOverviewMap = an.prototype.pk;
    t("ol.control.Rotate", Hf, OPENLAYERS);
    t("ol.control.Rotate.render", If, OPENLAYERS);
    t("ol.control.ScaleLine", fn, OPENLAYERS);
    fn.prototype.getUnits = fn.prototype.wb;
    t("ol.control.ScaleLine.render", gn, OPENLAYERS);
    fn.prototype.setUnits = fn.prototype.D;
    t("ol.control.Zoom", Jf, OPENLAYERS);
    t("ol.control.ZoomSlider", kn, OPENLAYERS);
    t("ol.control.ZoomSlider.render", mn, OPENLAYERS);
    t("ol.control.ZoomToExtent", pn, OPENLAYERS);
    t("ol.color.asArray", te, OPENLAYERS);
    t("ol.color.asString", ve, OPENLAYERS);
    ke.prototype.type = ke.prototype.type;
    ke.prototype.target = ke.prototype.target;
    ke.prototype.preventDefault = ke.prototype.preventDefault;
    ke.prototype.stopPropagation = ke.prototype.stopPropagation;
    eb.prototype.changed = eb.prototype.u;
    eb.prototype.dispatchEvent = eb.prototype.b;
    eb.prototype.getRevision = eb.prototype.K;
    eb.prototype.on = eb.prototype.I;
    eb.prototype.once = eb.prototype.L;
    eb.prototype.un = eb.prototype.J;
    eb.prototype.unByKey = eb.prototype.M;
    le.prototype.get = le.prototype.get;
    le.prototype.getKeys = le.prototype.N;
    le.prototype.getProperties = le.prototype.O;
    le.prototype.set = le.prototype.set;
    le.prototype.setProperties = le.prototype.G;
    le.prototype.unset = le.prototype.P;
    le.prototype.changed = le.prototype.u;
    le.prototype.dispatchEvent = le.prototype.b;
    le.prototype.getRevision = le.prototype.K;
    le.prototype.on = le.prototype.I;
    le.prototype.once = le.prototype.L;
    le.prototype.un = le.prototype.J;
    le.prototype.unByKey = le.prototype.M;
    qn.prototype.get = qn.prototype.get;
    qn.prototype.getKeys = qn.prototype.N;
    qn.prototype.getProperties = qn.prototype.O;
    qn.prototype.set = qn.prototype.set;
    qn.prototype.setProperties = qn.prototype.G;
    qn.prototype.unset = qn.prototype.P;
    qn.prototype.changed = qn.prototype.u;
    qn.prototype.dispatchEvent = qn.prototype.b;
    qn.prototype.getRevision = qn.prototype.K;
    qn.prototype.on = qn.prototype.I;
    qn.prototype.once = qn.prototype.L;
    qn.prototype.un = qn.prototype.J;
    qn.prototype.unByKey = qn.prototype.M;
    Ik.prototype.get = Ik.prototype.get;
    Ik.prototype.getKeys = Ik.prototype.N;
    Ik.prototype.getProperties = Ik.prototype.O;
    Ik.prototype.set = Ik.prototype.set;
    Ik.prototype.setProperties = Ik.prototype.G;
    Ik.prototype.unset = Ik.prototype.P;
    Ik.prototype.changed = Ik.prototype.u;
    Ik.prototype.dispatchEvent = Ik.prototype.b;
    Ik.prototype.getRevision = Ik.prototype.K;
    Ik.prototype.on = Ik.prototype.I;
    Ik.prototype.once = Ik.prototype.L;
    Ik.prototype.un = Ik.prototype.J;
    Ik.prototype.unByKey = Ik.prototype.M;
    Ut.prototype.get = Ut.prototype.get;
    Ut.prototype.getKeys = Ut.prototype.N;
    Ut.prototype.getProperties = Ut.prototype.O;
    Ut.prototype.set = Ut.prototype.set;
    Ut.prototype.setProperties = Ut.prototype.G;
    Ut.prototype.unset = Ut.prototype.P;
    Ut.prototype.changed = Ut.prototype.u;
    Ut.prototype.dispatchEvent = Ut.prototype.b;
    Ut.prototype.getRevision = Ut.prototype.K;
    Ut.prototype.on = Ut.prototype.I;
    Ut.prototype.once = Ut.prototype.L;
    Ut.prototype.un = Ut.prototype.J;
    Ut.prototype.unByKey = Ut.prototype.M;
    fu.prototype.getTileCoord = fu.prototype.i;
    Q.prototype.get = Q.prototype.get;
    Q.prototype.getKeys = Q.prototype.N;
    Q.prototype.getProperties = Q.prototype.O;
    Q.prototype.set = Q.prototype.set;
    Q.prototype.setProperties = Q.prototype.G;
    Q.prototype.unset = Q.prototype.P;
    Q.prototype.changed = Q.prototype.u;
    Q.prototype.dispatchEvent = Q.prototype.b;
    Q.prototype.getRevision = Q.prototype.K;
    Q.prototype.on = Q.prototype.I;
    Q.prototype.once = Q.prototype.L;
    Q.prototype.un = Q.prototype.J;
    Q.prototype.unByKey = Q.prototype.M;
    We.prototype.type = We.prototype.type;
    We.prototype.target = We.prototype.target;
    We.prototype.preventDefault = We.prototype.preventDefault;
    We.prototype.stopPropagation = We.prototype.stopPropagation;
    Vg.prototype.map = Vg.prototype.map;
    Vg.prototype.frameState = Vg.prototype.frameState;
    Vg.prototype.type = Vg.prototype.type;
    Vg.prototype.target = Vg.prototype.target;
    Vg.prototype.preventDefault = Vg.prototype.preventDefault;
    Vg.prototype.stopPropagation = Vg.prototype.stopPropagation;
    Wg.prototype.originalEvent = Wg.prototype.originalEvent;
    Wg.prototype.pixel = Wg.prototype.pixel;
    Wg.prototype.coordinate = Wg.prototype.coordinate;
    Wg.prototype.dragging = Wg.prototype.dragging;
    Wg.prototype.preventDefault = Wg.prototype.preventDefault;
    Wg.prototype.stopPropagation = Wg.prototype.stopPropagation;
    Wg.prototype.map = Wg.prototype.map;
    Wg.prototype.frameState = Wg.prototype.frameState;
    Wg.prototype.type = Wg.prototype.type;
    Wg.prototype.target = Wg.prototype.target;
    db.prototype.type = db.prototype.type;
    db.prototype.target = db.prototype.target;
    db.prototype.preventDefault = db.prototype.preventDefault;
    db.prototype.stopPropagation = db.prototype.stopPropagation;
    Xm.prototype.get = Xm.prototype.get;
    Xm.prototype.getKeys = Xm.prototype.N;
    Xm.prototype.getProperties = Xm.prototype.O;
    Xm.prototype.set = Xm.prototype.set;
    Xm.prototype.setProperties = Xm.prototype.G;
    Xm.prototype.unset = Xm.prototype.P;
    Xm.prototype.changed = Xm.prototype.u;
    Xm.prototype.dispatchEvent = Xm.prototype.b;
    Xm.prototype.getRevision = Xm.prototype.K;
    Xm.prototype.on = Xm.prototype.I;
    Xm.prototype.once = Xm.prototype.L;
    Xm.prototype.un = Xm.prototype.J;
    Xm.prototype.unByKey = Xm.prototype.M;
    Kk.prototype.getTileCoord = Kk.prototype.i;
    Rd.prototype.get = Rd.prototype.get;
    Rd.prototype.getKeys = Rd.prototype.N;
    Rd.prototype.getProperties = Rd.prototype.O;
    Rd.prototype.set = Rd.prototype.set;
    Rd.prototype.setProperties = Rd.prototype.G;
    Rd.prototype.unset = Rd.prototype.P;
    Rd.prototype.changed = Rd.prototype.u;
    Rd.prototype.dispatchEvent = Rd.prototype.b;
    Rd.prototype.getRevision = Rd.prototype.K;
    Rd.prototype.on = Rd.prototype.I;
    Rd.prototype.once = Rd.prototype.L;
    Rd.prototype.un = Rd.prototype.J;
    Rd.prototype.unByKey = Rd.prototype.M;
    fw.prototype.forEachTileCoord = fw.prototype.yg;
    fw.prototype.getMaxZoom = fw.prototype.Ig;
    fw.prototype.getMinZoom = fw.prototype.Jg;
    fw.prototype.getOrigin = fw.prototype.Ia;
    fw.prototype.getResolution = fw.prototype.$;
    fw.prototype.getResolutions = fw.prototype.Kh;
    fw.prototype.getTileCoordExtent = fw.prototype.Ea;
    fw.prototype.getTileCoordForCoordAndResolution = fw.prototype.Zd;
    fw.prototype.getTileCoordForCoordAndZ = fw.prototype.qd;
    fw.prototype.getTileSize = fw.prototype.Ja;
    fw.prototype.getZForResolution = fw.prototype.Lb;
    qj.prototype.getOpacity = qj.prototype.qe;
    qj.prototype.getRotateWithView = qj.prototype.Xd;
    qj.prototype.getRotation = qj.prototype.re;
    qj.prototype.getScale = qj.prototype.se;
    qj.prototype.getSnapToPixel = qj.prototype.Yd;
    qj.prototype.setOpacity = qj.prototype.te;
    qj.prototype.setRotation = qj.prototype.ue;
    qj.prototype.setScale = qj.prototype.ve;
    Dh.prototype.getOpacity = Dh.prototype.qe;
    Dh.prototype.getRotateWithView = Dh.prototype.Xd;
    Dh.prototype.getRotation = Dh.prototype.re;
    Dh.prototype.getScale = Dh.prototype.se;
    Dh.prototype.getSnapToPixel = Dh.prototype.Yd;
    Dh.prototype.setOpacity = Dh.prototype.te;
    Dh.prototype.setRotation = Dh.prototype.ue;
    Dh.prototype.setScale = Dh.prototype.ve;
    ow.prototype.getOpacity = ow.prototype.qe;
    ow.prototype.getRotateWithView = ow.prototype.Xd;
    ow.prototype.getRotation = ow.prototype.re;
    ow.prototype.getScale = ow.prototype.se;
    ow.prototype.getSnapToPixel = ow.prototype.Yd;
    ow.prototype.setOpacity = ow.prototype.te;
    ow.prototype.setRotation = ow.prototype.ue;
    ow.prototype.setScale = ow.prototype.ve;
    jf.prototype.get = jf.prototype.get;
    jf.prototype.getKeys = jf.prototype.N;
    jf.prototype.getProperties = jf.prototype.O;
    jf.prototype.set = jf.prototype.set;
    jf.prototype.setProperties = jf.prototype.G;
    jf.prototype.unset = jf.prototype.P;
    jf.prototype.changed = jf.prototype.u;
    jf.prototype.dispatchEvent = jf.prototype.b;
    jf.prototype.getRevision = jf.prototype.K;
    jf.prototype.on = jf.prototype.I;
    jf.prototype.once = jf.prototype.L;
    jf.prototype.un = jf.prototype.J;
    jf.prototype.unByKey = jf.prototype.M;
    zf.prototype.getAttributions = zf.prototype.wa;
    zf.prototype.getLogo = zf.prototype.ua;
    zf.prototype.getProjection = zf.prototype.xa;
    zf.prototype.getState = zf.prototype.V;
    zf.prototype.refresh = zf.prototype.sa;
    zf.prototype.setAttributions = zf.prototype.oa;
    zf.prototype.get = zf.prototype.get;
    zf.prototype.getKeys = zf.prototype.N;
    zf.prototype.getProperties = zf.prototype.O;
    zf.prototype.set = zf.prototype.set;
    zf.prototype.setProperties = zf.prototype.G;
    zf.prototype.unset = zf.prototype.P;
    zf.prototype.changed = zf.prototype.u;
    zf.prototype.dispatchEvent = zf.prototype.b;
    zf.prototype.getRevision = zf.prototype.K;
    zf.prototype.on = zf.prototype.I;
    zf.prototype.once = zf.prototype.L;
    zf.prototype.un = zf.prototype.J;
    zf.prototype.unByKey = zf.prototype.M;
    Jl.prototype.getTileGrid = Jl.prototype.Na;
    Jl.prototype.refresh = Jl.prototype.sa;
    Jl.prototype.getAttributions = Jl.prototype.wa;
    Jl.prototype.getLogo = Jl.prototype.ua;
    Jl.prototype.getProjection = Jl.prototype.xa;
    Jl.prototype.getState = Jl.prototype.V;
    Jl.prototype.setAttributions = Jl.prototype.oa;
    Jl.prototype.get = Jl.prototype.get;
    Jl.prototype.getKeys = Jl.prototype.N;
    Jl.prototype.getProperties = Jl.prototype.O;
    Jl.prototype.set = Jl.prototype.set;
    Jl.prototype.setProperties = Jl.prototype.G;
    Jl.prototype.unset = Jl.prototype.P;
    Jl.prototype.changed = Jl.prototype.u;
    Jl.prototype.dispatchEvent = Jl.prototype.b;
    Jl.prototype.getRevision = Jl.prototype.K;
    Jl.prototype.on = Jl.prototype.I;
    Jl.prototype.once = Jl.prototype.L;
    Jl.prototype.un = Jl.prototype.J;
    Jl.prototype.unByKey = Jl.prototype.M;
    W.prototype.getTileLoadFunction = W.prototype.fb;
    W.prototype.getTileUrlFunction = W.prototype.gb;
    W.prototype.getUrls = W.prototype.hb;
    W.prototype.setTileLoadFunction = W.prototype.kb;
    W.prototype.setTileUrlFunction = W.prototype.Qa;
    W.prototype.setUrl = W.prototype.Va;
    W.prototype.setUrls = W.prototype.bb;
    W.prototype.getTileGrid = W.prototype.Na;
    W.prototype.refresh = W.prototype.sa;
    W.prototype.getAttributions = W.prototype.wa;
    W.prototype.getLogo = W.prototype.ua;
    W.prototype.getProjection = W.prototype.xa;
    W.prototype.getState = W.prototype.V;
    W.prototype.setAttributions = W.prototype.oa;
    W.prototype.get = W.prototype.get;
    W.prototype.getKeys = W.prototype.N;
    W.prototype.getProperties = W.prototype.O;
    W.prototype.set = W.prototype.set;
    W.prototype.setProperties = W.prototype.G;
    W.prototype.unset = W.prototype.P;
    W.prototype.changed = W.prototype.u;
    W.prototype.dispatchEvent = W.prototype.b;
    W.prototype.getRevision = W.prototype.K;
    W.prototype.on = W.prototype.I;
    W.prototype.once = W.prototype.L;
    W.prototype.un = W.prototype.J;
    W.prototype.unByKey = W.prototype.M;
    pv.prototype.setRenderReprojectionEdges = pv.prototype.zb;
    pv.prototype.setTileGridForProjection = pv.prototype.Ab;
    pv.prototype.getTileLoadFunction = pv.prototype.fb;
    pv.prototype.getTileUrlFunction = pv.prototype.gb;
    pv.prototype.getUrls = pv.prototype.hb;
    pv.prototype.setTileLoadFunction = pv.prototype.kb;
    pv.prototype.setTileUrlFunction = pv.prototype.Qa;
    pv.prototype.setUrl = pv.prototype.Va;
    pv.prototype.setUrls = pv.prototype.bb;
    pv.prototype.getTileGrid = pv.prototype.Na;
    pv.prototype.refresh = pv.prototype.sa;
    pv.prototype.getAttributions = pv.prototype.wa;
    pv.prototype.getLogo = pv.prototype.ua;
    pv.prototype.getProjection = pv.prototype.xa;
    pv.prototype.getState = pv.prototype.V;
    pv.prototype.setAttributions = pv.prototype.oa;
    pv.prototype.get = pv.prototype.get;
    pv.prototype.getKeys = pv.prototype.N;
    pv.prototype.getProperties = pv.prototype.O;
    pv.prototype.set = pv.prototype.set;
    pv.prototype.setProperties = pv.prototype.G;
    pv.prototype.unset = pv.prototype.P;
    pv.prototype.changed = pv.prototype.u;
    pv.prototype.dispatchEvent = pv.prototype.b;
    pv.prototype.getRevision = pv.prototype.K;
    pv.prototype.on = pv.prototype.I;
    pv.prototype.once = pv.prototype.L;
    pv.prototype.un = pv.prototype.J;
    pv.prototype.unByKey = pv.prototype.M;
    rv.prototype.setRenderReprojectionEdges = rv.prototype.zb;
    rv.prototype.setTileGridForProjection = rv.prototype.Ab;
    rv.prototype.getTileLoadFunction = rv.prototype.fb;
    rv.prototype.getTileUrlFunction = rv.prototype.gb;
    rv.prototype.getUrls = rv.prototype.hb;
    rv.prototype.setTileLoadFunction = rv.prototype.kb;
    rv.prototype.setTileUrlFunction = rv.prototype.Qa;
    rv.prototype.setUrl = rv.prototype.Va;
    rv.prototype.setUrls = rv.prototype.bb;
    rv.prototype.getTileGrid = rv.prototype.Na;
    rv.prototype.refresh = rv.prototype.sa;
    rv.prototype.getAttributions = rv.prototype.wa;
    rv.prototype.getLogo = rv.prototype.ua;
    rv.prototype.getProjection = rv.prototype.xa;
    rv.prototype.getState = rv.prototype.V;
    rv.prototype.setAttributions = rv.prototype.oa;
    rv.prototype.get = rv.prototype.get;
    rv.prototype.getKeys = rv.prototype.N;
    rv.prototype.getProperties = rv.prototype.O;
    rv.prototype.set = rv.prototype.set;
    rv.prototype.setProperties = rv.prototype.G;
    rv.prototype.unset = rv.prototype.P;
    rv.prototype.changed = rv.prototype.u;
    rv.prototype.dispatchEvent = rv.prototype.b;
    rv.prototype.getRevision = rv.prototype.K;
    rv.prototype.on = rv.prototype.I;
    rv.prototype.once = rv.prototype.L;
    rv.prototype.un = rv.prototype.J;
    rv.prototype.unByKey = rv.prototype.M;
    sv.prototype.setRenderReprojectionEdges = sv.prototype.zb;
    sv.prototype.setTileGridForProjection = sv.prototype.Ab;
    sv.prototype.getTileLoadFunction = sv.prototype.fb;
    sv.prototype.getTileUrlFunction = sv.prototype.gb;
    sv.prototype.getUrls = sv.prototype.hb;
    sv.prototype.setTileLoadFunction = sv.prototype.kb;
    sv.prototype.setTileUrlFunction = sv.prototype.Qa;
    sv.prototype.setUrl = sv.prototype.Va;
    sv.prototype.setUrls = sv.prototype.bb;
    sv.prototype.getTileGrid = sv.prototype.Na;
    sv.prototype.refresh = sv.prototype.sa;
    sv.prototype.getAttributions = sv.prototype.wa;
    sv.prototype.getLogo = sv.prototype.ua;
    sv.prototype.getProjection = sv.prototype.xa;
    sv.prototype.getState = sv.prototype.V;
    sv.prototype.setAttributions = sv.prototype.oa;
    sv.prototype.get = sv.prototype.get;
    sv.prototype.getKeys = sv.prototype.N;
    sv.prototype.getProperties = sv.prototype.O;
    sv.prototype.set = sv.prototype.set;
    sv.prototype.setProperties = sv.prototype.G;
    sv.prototype.unset = sv.prototype.P;
    sv.prototype.changed = sv.prototype.u;
    sv.prototype.dispatchEvent = sv.prototype.b;
    sv.prototype.getRevision = sv.prototype.K;
    sv.prototype.on = sv.prototype.I;
    sv.prototype.once = sv.prototype.L;
    sv.prototype.un = sv.prototype.J;
    sv.prototype.unByKey = sv.prototype.M;
    P.prototype.getAttributions = P.prototype.wa;
    P.prototype.getLogo = P.prototype.ua;
    P.prototype.getProjection = P.prototype.xa;
    P.prototype.getState = P.prototype.V;
    P.prototype.refresh = P.prototype.sa;
    P.prototype.setAttributions = P.prototype.oa;
    P.prototype.get = P.prototype.get;
    P.prototype.getKeys = P.prototype.N;
    P.prototype.getProperties = P.prototype.O;
    P.prototype.set = P.prototype.set;
    P.prototype.setProperties = P.prototype.G;
    P.prototype.unset = P.prototype.P;
    P.prototype.changed = P.prototype.u;
    P.prototype.dispatchEvent = P.prototype.b;
    P.prototype.getRevision = P.prototype.K;
    P.prototype.on = P.prototype.I;
    P.prototype.once = P.prototype.L;
    P.prototype.un = P.prototype.J;
    P.prototype.unByKey = P.prototype.M;
    Y.prototype.addFeature = Y.prototype.rb;
    Y.prototype.addFeatures = Y.prototype.Jc;
    Y.prototype.clear = Y.prototype.clear;
    Y.prototype.forEachFeature = Y.prototype.wg;
    Y.prototype.forEachFeatureInExtent = Y.prototype.ub;
    Y.prototype.forEachFeatureIntersectingExtent = Y.prototype.xg;
    Y.prototype.getFeaturesCollection = Y.prototype.Fg;
    Y.prototype.getFeatures = Y.prototype.oe;
    Y.prototype.getFeaturesAtCoordinate = Y.prototype.Eg;
    Y.prototype.getFeaturesInExtent = Y.prototype.ef;
    Y.prototype.getClosestFeatureToCoordinate = Y.prototype.Ag;
    Y.prototype.getExtent = Y.prototype.H;
    Y.prototype.getFeatureById = Y.prototype.Dg;
    Y.prototype.getFormat = Y.prototype.Ch;
    Y.prototype.getUrl = Y.prototype.Dh;
    Y.prototype.removeFeature = Y.prototype.nb;
    Y.prototype.getAttributions = Y.prototype.wa;
    Y.prototype.getLogo = Y.prototype.ua;
    Y.prototype.getProjection = Y.prototype.xa;
    Y.prototype.getState = Y.prototype.V;
    Y.prototype.refresh = Y.prototype.sa;
    Y.prototype.setAttributions = Y.prototype.oa;
    Y.prototype.get = Y.prototype.get;
    Y.prototype.getKeys = Y.prototype.N;
    Y.prototype.getProperties = Y.prototype.O;
    Y.prototype.set = Y.prototype.set;
    Y.prototype.setProperties = Y.prototype.G;
    Y.prototype.unset = Y.prototype.P;
    Y.prototype.changed = Y.prototype.u;
    Y.prototype.dispatchEvent = Y.prototype.b;
    Y.prototype.getRevision = Y.prototype.K;
    Y.prototype.on = Y.prototype.I;
    Y.prototype.once = Y.prototype.L;
    Y.prototype.un = Y.prototype.J;
    Y.prototype.unByKey = Y.prototype.M;
    Ak.prototype.getAttributions = Ak.prototype.wa;
    Ak.prototype.getLogo = Ak.prototype.ua;
    Ak.prototype.getProjection = Ak.prototype.xa;
    Ak.prototype.getState = Ak.prototype.V;
    Ak.prototype.refresh = Ak.prototype.sa;
    Ak.prototype.setAttributions = Ak.prototype.oa;
    Ak.prototype.get = Ak.prototype.get;
    Ak.prototype.getKeys = Ak.prototype.N;
    Ak.prototype.getProperties = Ak.prototype.O;
    Ak.prototype.set = Ak.prototype.set;
    Ak.prototype.setProperties = Ak.prototype.G;
    Ak.prototype.unset = Ak.prototype.P;
    Ak.prototype.changed = Ak.prototype.u;
    Ak.prototype.dispatchEvent = Ak.prototype.b;
    Ak.prototype.getRevision = Ak.prototype.K;
    Ak.prototype.on = Ak.prototype.I;
    Ak.prototype.once = Ak.prototype.L;
    Ak.prototype.un = Ak.prototype.J;
    Ak.prototype.unByKey = Ak.prototype.M;
    yv.prototype.getAttributions = yv.prototype.wa;
    yv.prototype.getLogo = yv.prototype.ua;
    yv.prototype.getProjection = yv.prototype.xa;
    yv.prototype.getState = yv.prototype.V;
    yv.prototype.refresh = yv.prototype.sa;
    yv.prototype.setAttributions = yv.prototype.oa;
    yv.prototype.get = yv.prototype.get;
    yv.prototype.getKeys = yv.prototype.N;
    yv.prototype.getProperties = yv.prototype.O;
    yv.prototype.set = yv.prototype.set;
    yv.prototype.setProperties = yv.prototype.G;
    yv.prototype.unset = yv.prototype.P;
    yv.prototype.changed = yv.prototype.u;
    yv.prototype.dispatchEvent = yv.prototype.b;
    yv.prototype.getRevision = yv.prototype.K;
    yv.prototype.on = yv.prototype.I;
    yv.prototype.once = yv.prototype.L;
    yv.prototype.un = yv.prototype.J;
    yv.prototype.unByKey = yv.prototype.M;
    Hk.prototype.getAttributions = Hk.prototype.wa;
    Hk.prototype.getLogo = Hk.prototype.ua;
    Hk.prototype.getProjection = Hk.prototype.xa;
    Hk.prototype.getState = Hk.prototype.V;
    Hk.prototype.refresh = Hk.prototype.sa;
    Hk.prototype.setAttributions = Hk.prototype.oa;
    Hk.prototype.get = Hk.prototype.get;
    Hk.prototype.getKeys = Hk.prototype.N;
    Hk.prototype.getProperties = Hk.prototype.O;
    Hk.prototype.set = Hk.prototype.set;
    Hk.prototype.setProperties = Hk.prototype.G;
    Hk.prototype.unset = Hk.prototype.P;
    Hk.prototype.changed = Hk.prototype.u;
    Hk.prototype.dispatchEvent = Hk.prototype.b;
    Hk.prototype.getRevision = Hk.prototype.K;
    Hk.prototype.on = Hk.prototype.I;
    Hk.prototype.once = Hk.prototype.L;
    Hk.prototype.un = Hk.prototype.J;
    Hk.prototype.unByKey = Hk.prototype.M;
    zv.prototype.getAttributions = zv.prototype.wa;
    zv.prototype.getLogo = zv.prototype.ua;
    zv.prototype.getProjection = zv.prototype.xa;
    zv.prototype.getState = zv.prototype.V;
    zv.prototype.refresh = zv.prototype.sa;
    zv.prototype.setAttributions = zv.prototype.oa;
    zv.prototype.get = zv.prototype.get;
    zv.prototype.getKeys = zv.prototype.N;
    zv.prototype.getProperties = zv.prototype.O;
    zv.prototype.set = zv.prototype.set;
    zv.prototype.setProperties = zv.prototype.G;
    zv.prototype.unset = zv.prototype.P;
    zv.prototype.changed = zv.prototype.u;
    zv.prototype.dispatchEvent = zv.prototype.b;
    zv.prototype.getRevision = zv.prototype.K;
    zv.prototype.on = zv.prototype.I;
    zv.prototype.once = zv.prototype.L;
    zv.prototype.un = zv.prototype.J;
    zv.prototype.unByKey = zv.prototype.M;
    Ck.prototype.type = Ck.prototype.type;
    Ck.prototype.target = Ck.prototype.target;
    Ck.prototype.preventDefault = Ck.prototype.preventDefault;
    Ck.prototype.stopPropagation = Ck.prototype.stopPropagation;
    Av.prototype.getAttributions = Av.prototype.wa;
    Av.prototype.getLogo = Av.prototype.ua;
    Av.prototype.getProjection = Av.prototype.xa;
    Av.prototype.getState = Av.prototype.V;
    Av.prototype.refresh = Av.prototype.sa;
    Av.prototype.setAttributions = Av.prototype.oa;
    Av.prototype.get = Av.prototype.get;
    Av.prototype.getKeys = Av.prototype.N;
    Av.prototype.getProperties = Av.prototype.O;
    Av.prototype.set = Av.prototype.set;
    Av.prototype.setProperties = Av.prototype.G;
    Av.prototype.unset = Av.prototype.P;
    Av.prototype.changed = Av.prototype.u;
    Av.prototype.dispatchEvent = Av.prototype.b;
    Av.prototype.getRevision = Av.prototype.K;
    Av.prototype.on = Av.prototype.I;
    Av.prototype.once = Av.prototype.L;
    Av.prototype.un = Av.prototype.J;
    Av.prototype.unByKey = Av.prototype.M;
    yl.prototype.getAttributions = yl.prototype.wa;
    yl.prototype.getLogo = yl.prototype.ua;
    yl.prototype.getProjection = yl.prototype.xa;
    yl.prototype.getState = yl.prototype.V;
    yl.prototype.refresh = yl.prototype.sa;
    yl.prototype.setAttributions = yl.prototype.oa;
    yl.prototype.get = yl.prototype.get;
    yl.prototype.getKeys = yl.prototype.N;
    yl.prototype.getProperties = yl.prototype.O;
    yl.prototype.set = yl.prototype.set;
    yl.prototype.setProperties = yl.prototype.G;
    yl.prototype.unset = yl.prototype.P;
    yl.prototype.changed = yl.prototype.u;
    yl.prototype.dispatchEvent = yl.prototype.b;
    yl.prototype.getRevision = yl.prototype.K;
    yl.prototype.on = yl.prototype.I;
    yl.prototype.once = yl.prototype.L;
    yl.prototype.un = yl.prototype.J;
    yl.prototype.unByKey = yl.prototype.M;
    Bv.prototype.getAttributions = Bv.prototype.wa;
    Bv.prototype.getLogo = Bv.prototype.ua;
    Bv.prototype.getProjection = Bv.prototype.xa;
    Bv.prototype.getState = Bv.prototype.V;
    Bv.prototype.refresh = Bv.prototype.sa;
    Bv.prototype.setAttributions = Bv.prototype.oa;
    Bv.prototype.get = Bv.prototype.get;
    Bv.prototype.getKeys = Bv.prototype.N;
    Bv.prototype.getProperties = Bv.prototype.O;
    Bv.prototype.set = Bv.prototype.set;
    Bv.prototype.setProperties = Bv.prototype.G;
    Bv.prototype.unset = Bv.prototype.P;
    Bv.prototype.changed = Bv.prototype.u;
    Bv.prototype.dispatchEvent = Bv.prototype.b;
    Bv.prototype.getRevision = Bv.prototype.K;
    Bv.prototype.on = Bv.prototype.I;
    Bv.prototype.once = Bv.prototype.L;
    Bv.prototype.un = Bv.prototype.J;
    Bv.prototype.unByKey = Bv.prototype.M;
    Fv.prototype.setRenderReprojectionEdges = Fv.prototype.zb;
    Fv.prototype.setTileGridForProjection = Fv.prototype.Ab;
    Fv.prototype.getTileLoadFunction = Fv.prototype.fb;
    Fv.prototype.getTileUrlFunction = Fv.prototype.gb;
    Fv.prototype.getUrls = Fv.prototype.hb;
    Fv.prototype.setTileLoadFunction = Fv.prototype.kb;
    Fv.prototype.setTileUrlFunction = Fv.prototype.Qa;
    Fv.prototype.setUrl = Fv.prototype.Va;
    Fv.prototype.setUrls = Fv.prototype.bb;
    Fv.prototype.getTileGrid = Fv.prototype.Na;
    Fv.prototype.refresh = Fv.prototype.sa;
    Fv.prototype.getAttributions = Fv.prototype.wa;
    Fv.prototype.getLogo = Fv.prototype.ua;
    Fv.prototype.getProjection = Fv.prototype.xa;
    Fv.prototype.getState = Fv.prototype.V;
    Fv.prototype.setAttributions = Fv.prototype.oa;
    Fv.prototype.get = Fv.prototype.get;
    Fv.prototype.getKeys = Fv.prototype.N;
    Fv.prototype.getProperties = Fv.prototype.O;
    Fv.prototype.set = Fv.prototype.set;
    Fv.prototype.setProperties = Fv.prototype.G;
    Fv.prototype.unset = Fv.prototype.P;
    Fv.prototype.changed = Fv.prototype.u;
    Fv.prototype.dispatchEvent = Fv.prototype.b;
    Fv.prototype.getRevision = Fv.prototype.K;
    Fv.prototype.on = Fv.prototype.I;
    Fv.prototype.once = Fv.prototype.L;
    Fv.prototype.un = Fv.prototype.J;
    Fv.prototype.unByKey = Fv.prototype.M;
    Hv.prototype.getAttributions = Hv.prototype.wa;
    Hv.prototype.getLogo = Hv.prototype.ua;
    Hv.prototype.getProjection = Hv.prototype.xa;
    Hv.prototype.getState = Hv.prototype.V;
    Hv.prototype.refresh = Hv.prototype.sa;
    Hv.prototype.setAttributions = Hv.prototype.oa;
    Hv.prototype.get = Hv.prototype.get;
    Hv.prototype.getKeys = Hv.prototype.N;
    Hv.prototype.getProperties = Hv.prototype.O;
    Hv.prototype.set = Hv.prototype.set;
    Hv.prototype.setProperties = Hv.prototype.G;
    Hv.prototype.unset = Hv.prototype.P;
    Hv.prototype.changed = Hv.prototype.u;
    Hv.prototype.dispatchEvent = Hv.prototype.b;
    Hv.prototype.getRevision = Hv.prototype.K;
    Hv.prototype.on = Hv.prototype.I;
    Hv.prototype.once = Hv.prototype.L;
    Hv.prototype.un = Hv.prototype.J;
    Hv.prototype.unByKey = Hv.prototype.M;
    Mv.prototype.type = Mv.prototype.type;
    Mv.prototype.target = Mv.prototype.target;
    Mv.prototype.preventDefault = Mv.prototype.preventDefault;
    Mv.prototype.stopPropagation = Mv.prototype.stopPropagation;
    Rv.prototype.setRenderReprojectionEdges = Rv.prototype.zb;
    Rv.prototype.setTileGridForProjection = Rv.prototype.Ab;
    Rv.prototype.getTileLoadFunction = Rv.prototype.fb;
    Rv.prototype.getTileUrlFunction = Rv.prototype.gb;
    Rv.prototype.getUrls = Rv.prototype.hb;
    Rv.prototype.setTileLoadFunction = Rv.prototype.kb;
    Rv.prototype.setTileUrlFunction = Rv.prototype.Qa;
    Rv.prototype.setUrl = Rv.prototype.Va;
    Rv.prototype.setUrls = Rv.prototype.bb;
    Rv.prototype.getTileGrid = Rv.prototype.Na;
    Rv.prototype.refresh = Rv.prototype.sa;
    Rv.prototype.getAttributions = Rv.prototype.wa;
    Rv.prototype.getLogo = Rv.prototype.ua;
    Rv.prototype.getProjection = Rv.prototype.xa;
    Rv.prototype.getState = Rv.prototype.V;
    Rv.prototype.setAttributions = Rv.prototype.oa;
    Rv.prototype.get = Rv.prototype.get;
    Rv.prototype.getKeys = Rv.prototype.N;
    Rv.prototype.getProperties = Rv.prototype.O;
    Rv.prototype.set = Rv.prototype.set;
    Rv.prototype.setProperties = Rv.prototype.G;
    Rv.prototype.unset = Rv.prototype.P;
    Rv.prototype.changed = Rv.prototype.u;
    Rv.prototype.dispatchEvent = Rv.prototype.b;
    Rv.prototype.getRevision = Rv.prototype.K;
    Rv.prototype.on = Rv.prototype.I;
    Rv.prototype.once = Rv.prototype.L;
    Rv.prototype.un = Rv.prototype.J;
    Rv.prototype.unByKey = Rv.prototype.M;
    Tv.prototype.setRenderReprojectionEdges = Tv.prototype.zb;
    Tv.prototype.setTileGridForProjection = Tv.prototype.Ab;
    Tv.prototype.getTileLoadFunction = Tv.prototype.fb;
    Tv.prototype.getTileUrlFunction = Tv.prototype.gb;
    Tv.prototype.getUrls = Tv.prototype.hb;
    Tv.prototype.setTileLoadFunction = Tv.prototype.kb;
    Tv.prototype.setTileUrlFunction = Tv.prototype.Qa;
    Tv.prototype.setUrl = Tv.prototype.Va;
    Tv.prototype.setUrls = Tv.prototype.bb;
    Tv.prototype.getTileGrid = Tv.prototype.Na;
    Tv.prototype.refresh = Tv.prototype.sa;
    Tv.prototype.getAttributions = Tv.prototype.wa;
    Tv.prototype.getLogo = Tv.prototype.ua;
    Tv.prototype.getProjection = Tv.prototype.xa;
    Tv.prototype.getState = Tv.prototype.V;
    Tv.prototype.setAttributions = Tv.prototype.oa;
    Tv.prototype.get = Tv.prototype.get;
    Tv.prototype.getKeys = Tv.prototype.N;
    Tv.prototype.getProperties = Tv.prototype.O;
    Tv.prototype.set = Tv.prototype.set;
    Tv.prototype.setProperties = Tv.prototype.G;
    Tv.prototype.unset = Tv.prototype.P;
    Tv.prototype.changed = Tv.prototype.u;
    Tv.prototype.dispatchEvent = Tv.prototype.b;
    Tv.prototype.getRevision = Tv.prototype.K;
    Tv.prototype.on = Tv.prototype.I;
    Tv.prototype.once = Tv.prototype.L;
    Tv.prototype.un = Tv.prototype.J;
    Tv.prototype.unByKey = Tv.prototype.M;
    Vv.prototype.getTileGrid = Vv.prototype.Na;
    Vv.prototype.refresh = Vv.prototype.sa;
    Vv.prototype.getAttributions = Vv.prototype.wa;
    Vv.prototype.getLogo = Vv.prototype.ua;
    Vv.prototype.getProjection = Vv.prototype.xa;
    Vv.prototype.getState = Vv.prototype.V;
    Vv.prototype.setAttributions = Vv.prototype.oa;
    Vv.prototype.get = Vv.prototype.get;
    Vv.prototype.getKeys = Vv.prototype.N;
    Vv.prototype.getProperties = Vv.prototype.O;
    Vv.prototype.set = Vv.prototype.set;
    Vv.prototype.setProperties = Vv.prototype.G;
    Vv.prototype.unset = Vv.prototype.P;
    Vv.prototype.changed = Vv.prototype.u;
    Vv.prototype.dispatchEvent = Vv.prototype.b;
    Vv.prototype.getRevision = Vv.prototype.K;
    Vv.prototype.on = Vv.prototype.I;
    Vv.prototype.once = Vv.prototype.L;
    Vv.prototype.un = Vv.prototype.J;
    Vv.prototype.unByKey = Vv.prototype.M;
    Wv.prototype.setRenderReprojectionEdges = Wv.prototype.zb;
    Wv.prototype.setTileGridForProjection = Wv.prototype.Ab;
    Wv.prototype.getTileLoadFunction = Wv.prototype.fb;
    Wv.prototype.getTileUrlFunction = Wv.prototype.gb;
    Wv.prototype.getUrls = Wv.prototype.hb;
    Wv.prototype.setTileLoadFunction = Wv.prototype.kb;
    Wv.prototype.setTileUrlFunction = Wv.prototype.Qa;
    Wv.prototype.setUrl = Wv.prototype.Va;
    Wv.prototype.setUrls = Wv.prototype.bb;
    Wv.prototype.getTileGrid = Wv.prototype.Na;
    Wv.prototype.refresh = Wv.prototype.sa;
    Wv.prototype.getAttributions = Wv.prototype.wa;
    Wv.prototype.getLogo = Wv.prototype.ua;
    Wv.prototype.getProjection = Wv.prototype.xa;
    Wv.prototype.getState = Wv.prototype.V;
    Wv.prototype.setAttributions = Wv.prototype.oa;
    Wv.prototype.get = Wv.prototype.get;
    Wv.prototype.getKeys = Wv.prototype.N;
    Wv.prototype.getProperties = Wv.prototype.O;
    Wv.prototype.set = Wv.prototype.set;
    Wv.prototype.setProperties = Wv.prototype.G;
    Wv.prototype.unset = Wv.prototype.P;
    Wv.prototype.changed = Wv.prototype.u;
    Wv.prototype.dispatchEvent = Wv.prototype.b;
    Wv.prototype.getRevision = Wv.prototype.K;
    Wv.prototype.on = Wv.prototype.I;
    Wv.prototype.once = Wv.prototype.L;
    Wv.prototype.un = Wv.prototype.J;
    Wv.prototype.unByKey = Wv.prototype.M;
    Df.prototype.type = Df.prototype.type;
    Df.prototype.target = Df.prototype.target;
    Df.prototype.preventDefault = Df.prototype.preventDefault;
    Df.prototype.stopPropagation = Df.prototype.stopPropagation;
    Xv.prototype.getTileGrid = Xv.prototype.Na;
    Xv.prototype.refresh = Xv.prototype.sa;
    Xv.prototype.getAttributions = Xv.prototype.wa;
    Xv.prototype.getLogo = Xv.prototype.ua;
    Xv.prototype.getProjection = Xv.prototype.xa;
    Xv.prototype.getState = Xv.prototype.V;
    Xv.prototype.setAttributions = Xv.prototype.oa;
    Xv.prototype.get = Xv.prototype.get;
    Xv.prototype.getKeys = Xv.prototype.N;
    Xv.prototype.getProperties = Xv.prototype.O;
    Xv.prototype.set = Xv.prototype.set;
    Xv.prototype.setProperties = Xv.prototype.G;
    Xv.prototype.unset = Xv.prototype.P;
    Xv.prototype.changed = Xv.prototype.u;
    Xv.prototype.dispatchEvent = Xv.prototype.b;
    Xv.prototype.getRevision = Xv.prototype.K;
    Xv.prototype.on = Xv.prototype.I;
    Xv.prototype.once = Xv.prototype.L;
    Xv.prototype.un = Xv.prototype.J;
    Xv.prototype.unByKey = Xv.prototype.M;
    aw.prototype.setRenderReprojectionEdges = aw.prototype.zb;
    aw.prototype.setTileGridForProjection = aw.prototype.Ab;
    aw.prototype.getTileLoadFunction = aw.prototype.fb;
    aw.prototype.getTileUrlFunction = aw.prototype.gb;
    aw.prototype.getUrls = aw.prototype.hb;
    aw.prototype.setTileLoadFunction = aw.prototype.kb;
    aw.prototype.setTileUrlFunction = aw.prototype.Qa;
    aw.prototype.setUrl = aw.prototype.Va;
    aw.prototype.setUrls = aw.prototype.bb;
    aw.prototype.getTileGrid = aw.prototype.Na;
    aw.prototype.refresh = aw.prototype.sa;
    aw.prototype.getAttributions = aw.prototype.wa;
    aw.prototype.getLogo = aw.prototype.ua;
    aw.prototype.getProjection = aw.prototype.xa;
    aw.prototype.getState = aw.prototype.V;
    aw.prototype.setAttributions = aw.prototype.oa;
    aw.prototype.get = aw.prototype.get;
    aw.prototype.getKeys = aw.prototype.N;
    aw.prototype.getProperties = aw.prototype.O;
    aw.prototype.set = aw.prototype.set;
    aw.prototype.setProperties = aw.prototype.G;
    aw.prototype.unset = aw.prototype.P;
    aw.prototype.changed = aw.prototype.u;
    aw.prototype.dispatchEvent = aw.prototype.b;
    aw.prototype.getRevision = aw.prototype.K;
    aw.prototype.on = aw.prototype.I;
    aw.prototype.once = aw.prototype.L;
    aw.prototype.un = aw.prototype.J;
    aw.prototype.unByKey = aw.prototype.M;
    vl.prototype.type = vl.prototype.type;
    vl.prototype.target = vl.prototype.target;
    vl.prototype.preventDefault = vl.prototype.preventDefault;
    vl.prototype.stopPropagation = vl.prototype.stopPropagation;
    Kl.prototype.getTileLoadFunction = Kl.prototype.fb;
    Kl.prototype.getTileUrlFunction = Kl.prototype.gb;
    Kl.prototype.getUrls = Kl.prototype.hb;
    Kl.prototype.setTileLoadFunction = Kl.prototype.kb;
    Kl.prototype.setTileUrlFunction = Kl.prototype.Qa;
    Kl.prototype.setUrl = Kl.prototype.Va;
    Kl.prototype.setUrls = Kl.prototype.bb;
    Kl.prototype.getTileGrid = Kl.prototype.Na;
    Kl.prototype.refresh = Kl.prototype.sa;
    Kl.prototype.getAttributions = Kl.prototype.wa;
    Kl.prototype.getLogo = Kl.prototype.ua;
    Kl.prototype.getProjection = Kl.prototype.xa;
    Kl.prototype.getState = Kl.prototype.V;
    Kl.prototype.setAttributions = Kl.prototype.oa;
    Kl.prototype.get = Kl.prototype.get;
    Kl.prototype.getKeys = Kl.prototype.N;
    Kl.prototype.getProperties = Kl.prototype.O;
    Kl.prototype.set = Kl.prototype.set;
    Kl.prototype.setProperties = Kl.prototype.G;
    Kl.prototype.unset = Kl.prototype.P;
    Kl.prototype.changed = Kl.prototype.u;
    Kl.prototype.dispatchEvent = Kl.prototype.b;
    Kl.prototype.getRevision = Kl.prototype.K;
    Kl.prototype.on = Kl.prototype.I;
    Kl.prototype.once = Kl.prototype.L;
    Kl.prototype.un = Kl.prototype.J;
    Kl.prototype.unByKey = Kl.prototype.M;
    Z.prototype.setRenderReprojectionEdges = Z.prototype.zb;
    Z.prototype.setTileGridForProjection = Z.prototype.Ab;
    Z.prototype.getTileLoadFunction = Z.prototype.fb;
    Z.prototype.getTileUrlFunction = Z.prototype.gb;
    Z.prototype.getUrls = Z.prototype.hb;
    Z.prototype.setTileLoadFunction = Z.prototype.kb;
    Z.prototype.setTileUrlFunction = Z.prototype.Qa;
    Z.prototype.setUrl = Z.prototype.Va;
    Z.prototype.setUrls = Z.prototype.bb;
    Z.prototype.getTileGrid = Z.prototype.Na;
    Z.prototype.refresh = Z.prototype.sa;
    Z.prototype.getAttributions = Z.prototype.wa;
    Z.prototype.getLogo = Z.prototype.ua;
    Z.prototype.getProjection = Z.prototype.xa;
    Z.prototype.getState = Z.prototype.V;
    Z.prototype.setAttributions = Z.prototype.oa;
    Z.prototype.get = Z.prototype.get;
    Z.prototype.getKeys = Z.prototype.N;
    Z.prototype.getProperties = Z.prototype.O;
    Z.prototype.set = Z.prototype.set;
    Z.prototype.setProperties = Z.prototype.G;
    Z.prototype.unset = Z.prototype.P;
    Z.prototype.changed = Z.prototype.u;
    Z.prototype.dispatchEvent = Z.prototype.b;
    Z.prototype.getRevision = Z.prototype.K;
    Z.prototype.on = Z.prototype.I;
    Z.prototype.once = Z.prototype.L;
    Z.prototype.un = Z.prototype.J;
    Z.prototype.unByKey = Z.prototype.M;
    iw.prototype.setRenderReprojectionEdges = iw.prototype.zb;
    iw.prototype.setTileGridForProjection = iw.prototype.Ab;
    iw.prototype.getTileLoadFunction = iw.prototype.fb;
    iw.prototype.getTileUrlFunction = iw.prototype.gb;
    iw.prototype.getUrls = iw.prototype.hb;
    iw.prototype.setTileLoadFunction = iw.prototype.kb;
    iw.prototype.setTileUrlFunction = iw.prototype.Qa;
    iw.prototype.setUrl = iw.prototype.Va;
    iw.prototype.setUrls = iw.prototype.bb;
    iw.prototype.getTileGrid = iw.prototype.Na;
    iw.prototype.refresh = iw.prototype.sa;
    iw.prototype.getAttributions = iw.prototype.wa;
    iw.prototype.getLogo = iw.prototype.ua;
    iw.prototype.getProjection = iw.prototype.xa;
    iw.prototype.getState = iw.prototype.V;
    iw.prototype.setAttributions = iw.prototype.oa;
    iw.prototype.get = iw.prototype.get;
    iw.prototype.getKeys = iw.prototype.N;
    iw.prototype.getProperties = iw.prototype.O;
    iw.prototype.set = iw.prototype.set;
    iw.prototype.setProperties = iw.prototype.G;
    iw.prototype.unset = iw.prototype.P;
    iw.prototype.changed = iw.prototype.u;
    iw.prototype.dispatchEvent = iw.prototype.b;
    iw.prototype.getRevision = iw.prototype.K;
    iw.prototype.on = iw.prototype.I;
    iw.prototype.once = iw.prototype.L;
    iw.prototype.un = iw.prototype.J;
    iw.prototype.unByKey = iw.prototype.M;
    lv.prototype.getTileCoord = lv.prototype.i;
    lv.prototype.load = lv.prototype.load;
    th.prototype.changed = th.prototype.u;
    th.prototype.dispatchEvent = th.prototype.b;
    th.prototype.getRevision = th.prototype.K;
    th.prototype.on = th.prototype.I;
    th.prototype.once = th.prototype.L;
    th.prototype.un = th.prototype.J;
    th.prototype.unByKey = th.prototype.M;
    Gm.prototype.changed = Gm.prototype.u;
    Gm.prototype.dispatchEvent = Gm.prototype.b;
    Gm.prototype.getRevision = Gm.prototype.K;
    Gm.prototype.on = Gm.prototype.I;
    Gm.prototype.once = Gm.prototype.L;
    Gm.prototype.un = Gm.prototype.J;
    Gm.prototype.unByKey = Gm.prototype.M;
    Jm.prototype.changed = Jm.prototype.u;
    Jm.prototype.dispatchEvent = Jm.prototype.b;
    Jm.prototype.getRevision = Jm.prototype.K;
    Jm.prototype.on = Jm.prototype.I;
    Jm.prototype.once = Jm.prototype.L;
    Jm.prototype.un = Jm.prototype.J;
    Jm.prototype.unByKey = Jm.prototype.M;
    Pm.prototype.changed = Pm.prototype.u;
    Pm.prototype.dispatchEvent = Pm.prototype.b;
    Pm.prototype.getRevision = Pm.prototype.K;
    Pm.prototype.on = Pm.prototype.I;
    Pm.prototype.once = Pm.prototype.L;
    Pm.prototype.un = Pm.prototype.J;
    Pm.prototype.unByKey = Pm.prototype.M;
    Rm.prototype.changed = Rm.prototype.u;
    Rm.prototype.dispatchEvent = Rm.prototype.b;
    Rm.prototype.getRevision = Rm.prototype.K;
    Rm.prototype.on = Rm.prototype.I;
    Rm.prototype.once = Rm.prototype.L;
    Rm.prototype.un = Rm.prototype.J;
    Rm.prototype.unByKey = Rm.prototype.M;
    Sl.prototype.changed = Sl.prototype.u;
    Sl.prototype.dispatchEvent = Sl.prototype.b;
    Sl.prototype.getRevision = Sl.prototype.K;
    Sl.prototype.on = Sl.prototype.I;
    Sl.prototype.once = Sl.prototype.L;
    Sl.prototype.un = Sl.prototype.J;
    Sl.prototype.unByKey = Sl.prototype.M;
    Tl.prototype.changed = Tl.prototype.u;
    Tl.prototype.dispatchEvent = Tl.prototype.b;
    Tl.prototype.getRevision = Tl.prototype.K;
    Tl.prototype.on = Tl.prototype.I;
    Tl.prototype.once = Tl.prototype.L;
    Tl.prototype.un = Tl.prototype.J;
    Tl.prototype.unByKey = Tl.prototype.M;
    Ul.prototype.changed = Ul.prototype.u;
    Ul.prototype.dispatchEvent = Ul.prototype.b;
    Ul.prototype.getRevision = Ul.prototype.K;
    Ul.prototype.on = Ul.prototype.I;
    Ul.prototype.once = Ul.prototype.L;
    Ul.prototype.un = Ul.prototype.J;
    Ul.prototype.unByKey = Ul.prototype.M;
    Wl.prototype.changed = Wl.prototype.u;
    Wl.prototype.dispatchEvent = Wl.prototype.b;
    Wl.prototype.getRevision = Wl.prototype.K;
    Wl.prototype.on = Wl.prototype.I;
    Wl.prototype.once = Wl.prototype.L;
    Wl.prototype.un = Wl.prototype.J;
    Wl.prototype.unByKey = Wl.prototype.M;
    Jj.prototype.changed = Jj.prototype.u;
    Jj.prototype.dispatchEvent = Jj.prototype.b;
    Jj.prototype.getRevision = Jj.prototype.K;
    Jj.prototype.on = Jj.prototype.I;
    Jj.prototype.once = Jj.prototype.L;
    Jj.prototype.un = Jj.prototype.J;
    Jj.prototype.unByKey = Jj.prototype.M;
    Al.prototype.changed = Al.prototype.u;
    Al.prototype.dispatchEvent = Al.prototype.b;
    Al.prototype.getRevision = Al.prototype.K;
    Al.prototype.on = Al.prototype.I;
    Al.prototype.once = Al.prototype.L;
    Al.prototype.un = Al.prototype.J;
    Al.prototype.unByKey = Al.prototype.M;
    Bl.prototype.changed = Bl.prototype.u;
    Bl.prototype.dispatchEvent = Bl.prototype.b;
    Bl.prototype.getRevision = Bl.prototype.K;
    Bl.prototype.on = Bl.prototype.I;
    Bl.prototype.once = Bl.prototype.L;
    Bl.prototype.un = Bl.prototype.J;
    Bl.prototype.unByKey = Bl.prototype.M;
    Dl.prototype.changed = Dl.prototype.u;
    Dl.prototype.dispatchEvent = Dl.prototype.b;
    Dl.prototype.getRevision = Dl.prototype.K;
    Dl.prototype.on = Dl.prototype.I;
    Dl.prototype.once = Dl.prototype.L;
    Dl.prototype.un = Dl.prototype.J;
    Dl.prototype.unByKey = Dl.prototype.M;
    Ol.prototype.changed = Ol.prototype.u;
    Ol.prototype.dispatchEvent = Ol.prototype.b;
    Ol.prototype.getRevision = Ol.prototype.K;
    Ol.prototype.on = Ol.prototype.I;
    Ol.prototype.once = Ol.prototype.L;
    Ol.prototype.un = Ol.prototype.J;
    Ol.prototype.unByKey = Ol.prototype.M;
    lh.prototype.type = lh.prototype.type;
    lh.prototype.target = lh.prototype.target;
    lh.prototype.preventDefault = lh.prototype.preventDefault;
    lh.prototype.stopPropagation = lh.prototype.stopPropagation;
    Wf.prototype.type = Wf.prototype.type;
    Wf.prototype.target = Wf.prototype.target;
    Wf.prototype.preventDefault = Wf.prototype.preventDefault;
    Wf.prototype.stopPropagation = Wf.prototype.stopPropagation;
    ih.prototype.get = ih.prototype.get;
    ih.prototype.getKeys = ih.prototype.N;
    ih.prototype.getProperties = ih.prototype.O;
    ih.prototype.set = ih.prototype.set;
    ih.prototype.setProperties = ih.prototype.G;
    ih.prototype.unset = ih.prototype.P;
    ih.prototype.changed = ih.prototype.u;
    ih.prototype.dispatchEvent = ih.prototype.b;
    ih.prototype.getRevision = ih.prototype.K;
    ih.prototype.on = ih.prototype.I;
    ih.prototype.once = ih.prototype.L;
    ih.prototype.un = ih.prototype.J;
    ih.prototype.unByKey = ih.prototype.M;
    mh.prototype.getExtent = mh.prototype.H;
    mh.prototype.getMaxResolution = mh.prototype.Nb;
    mh.prototype.getMinResolution = mh.prototype.Ob;
    mh.prototype.getOpacity = mh.prototype.Pb;
    mh.prototype.getVisible = mh.prototype.xb;
    mh.prototype.getZIndex = mh.prototype.Qb;
    mh.prototype.setExtent = mh.prototype.fc;
    mh.prototype.setMaxResolution = mh.prototype.nc;
    mh.prototype.setMinResolution = mh.prototype.oc;
    mh.prototype.setOpacity = mh.prototype.gc;
    mh.prototype.setVisible = mh.prototype.hc;
    mh.prototype.setZIndex = mh.prototype.ic;
    mh.prototype.get = mh.prototype.get;
    mh.prototype.getKeys = mh.prototype.N;
    mh.prototype.getProperties = mh.prototype.O;
    mh.prototype.set = mh.prototype.set;
    mh.prototype.setProperties = mh.prototype.G;
    mh.prototype.unset = mh.prototype.P;
    mh.prototype.changed = mh.prototype.u;
    mh.prototype.dispatchEvent = mh.prototype.b;
    mh.prototype.getRevision = mh.prototype.K;
    mh.prototype.on = mh.prototype.I;
    mh.prototype.once = mh.prototype.L;
    mh.prototype.un = mh.prototype.J;
    mh.prototype.unByKey = mh.prototype.M;
    G.prototype.setMap = G.prototype.setMap;
    G.prototype.setSource = G.prototype.Fc;
    G.prototype.getExtent = G.prototype.H;
    G.prototype.getMaxResolution = G.prototype.Nb;
    G.prototype.getMinResolution = G.prototype.Ob;
    G.prototype.getOpacity = G.prototype.Pb;
    G.prototype.getVisible = G.prototype.xb;
    G.prototype.getZIndex = G.prototype.Qb;
    G.prototype.setExtent = G.prototype.fc;
    G.prototype.setMaxResolution = G.prototype.nc;
    G.prototype.setMinResolution = G.prototype.oc;
    G.prototype.setOpacity = G.prototype.gc;
    G.prototype.setVisible = G.prototype.hc;
    G.prototype.setZIndex = G.prototype.ic;
    G.prototype.get = G.prototype.get;
    G.prototype.getKeys = G.prototype.N;
    G.prototype.getProperties = G.prototype.O;
    G.prototype.set = G.prototype.set;
    G.prototype.setProperties = G.prototype.G;
    G.prototype.unset = G.prototype.P;
    G.prototype.changed = G.prototype.u;
    G.prototype.dispatchEvent = G.prototype.b;
    G.prototype.getRevision = G.prototype.K;
    G.prototype.on = G.prototype.I;
    G.prototype.once = G.prototype.L;
    G.prototype.un = G.prototype.J;
    G.prototype.unByKey = G.prototype.M;
    V.prototype.getSource = V.prototype.ha;
    V.prototype.getStyle = V.prototype.C;
    V.prototype.getStyleFunction = V.prototype.D;
    V.prototype.setStyle = V.prototype.l;
    V.prototype.setMap = V.prototype.setMap;
    V.prototype.setSource = V.prototype.Fc;
    V.prototype.getExtent = V.prototype.H;
    V.prototype.getMaxResolution = V.prototype.Nb;
    V.prototype.getMinResolution = V.prototype.Ob;
    V.prototype.getOpacity = V.prototype.Pb;
    V.prototype.getVisible = V.prototype.xb;
    V.prototype.getZIndex = V.prototype.Qb;
    V.prototype.setExtent = V.prototype.fc;
    V.prototype.setMaxResolution = V.prototype.nc;
    V.prototype.setMinResolution = V.prototype.oc;
    V.prototype.setOpacity = V.prototype.gc;
    V.prototype.setVisible = V.prototype.hc;
    V.prototype.setZIndex = V.prototype.ic;
    V.prototype.get = V.prototype.get;
    V.prototype.getKeys = V.prototype.N;
    V.prototype.getProperties = V.prototype.O;
    V.prototype.set = V.prototype.set;
    V.prototype.setProperties = V.prototype.G;
    V.prototype.unset = V.prototype.P;
    V.prototype.changed = V.prototype.u;
    V.prototype.dispatchEvent = V.prototype.b;
    V.prototype.getRevision = V.prototype.K;
    V.prototype.on = V.prototype.I;
    V.prototype.once = V.prototype.L;
    V.prototype.un = V.prototype.J;
    V.prototype.unByKey = V.prototype.M;
    cj.prototype.setMap = cj.prototype.setMap;
    cj.prototype.setSource = cj.prototype.Fc;
    cj.prototype.getExtent = cj.prototype.H;
    cj.prototype.getMaxResolution = cj.prototype.Nb;
    cj.prototype.getMinResolution = cj.prototype.Ob;
    cj.prototype.getOpacity = cj.prototype.Pb;
    cj.prototype.getVisible = cj.prototype.xb;
    cj.prototype.getZIndex = cj.prototype.Qb;
    cj.prototype.setExtent = cj.prototype.fc;
    cj.prototype.setMaxResolution = cj.prototype.nc;
    cj.prototype.setMinResolution = cj.prototype.oc;
    cj.prototype.setOpacity = cj.prototype.gc;
    cj.prototype.setVisible = cj.prototype.hc;
    cj.prototype.setZIndex = cj.prototype.ic;
    cj.prototype.get = cj.prototype.get;
    cj.prototype.getKeys = cj.prototype.N;
    cj.prototype.getProperties = cj.prototype.O;
    cj.prototype.set = cj.prototype.set;
    cj.prototype.setProperties = cj.prototype.G;
    cj.prototype.unset = cj.prototype.P;
    cj.prototype.changed = cj.prototype.u;
    cj.prototype.dispatchEvent = cj.prototype.b;
    cj.prototype.getRevision = cj.prototype.K;
    cj.prototype.on = cj.prototype.I;
    cj.prototype.once = cj.prototype.L;
    cj.prototype.un = cj.prototype.J;
    cj.prototype.unByKey = cj.prototype.M;
    Ti.prototype.getExtent = Ti.prototype.H;
    Ti.prototype.getMaxResolution = Ti.prototype.Nb;
    Ti.prototype.getMinResolution = Ti.prototype.Ob;
    Ti.prototype.getOpacity = Ti.prototype.Pb;
    Ti.prototype.getVisible = Ti.prototype.xb;
    Ti.prototype.getZIndex = Ti.prototype.Qb;
    Ti.prototype.setExtent = Ti.prototype.fc;
    Ti.prototype.setMaxResolution = Ti.prototype.nc;
    Ti.prototype.setMinResolution = Ti.prototype.oc;
    Ti.prototype.setOpacity = Ti.prototype.gc;
    Ti.prototype.setVisible = Ti.prototype.hc;
    Ti.prototype.setZIndex = Ti.prototype.ic;
    Ti.prototype.get = Ti.prototype.get;
    Ti.prototype.getKeys = Ti.prototype.N;
    Ti.prototype.getProperties = Ti.prototype.O;
    Ti.prototype.set = Ti.prototype.set;
    Ti.prototype.setProperties = Ti.prototype.G;
    Ti.prototype.unset = Ti.prototype.P;
    Ti.prototype.changed = Ti.prototype.u;
    Ti.prototype.dispatchEvent = Ti.prototype.b;
    Ti.prototype.getRevision = Ti.prototype.K;
    Ti.prototype.on = Ti.prototype.I;
    Ti.prototype.once = Ti.prototype.L;
    Ti.prototype.un = Ti.prototype.J;
    Ti.prototype.unByKey = Ti.prototype.M;
    dj.prototype.setMap = dj.prototype.setMap;
    dj.prototype.setSource = dj.prototype.Fc;
    dj.prototype.getExtent = dj.prototype.H;
    dj.prototype.getMaxResolution = dj.prototype.Nb;
    dj.prototype.getMinResolution = dj.prototype.Ob;
    dj.prototype.getOpacity = dj.prototype.Pb;
    dj.prototype.getVisible = dj.prototype.xb;
    dj.prototype.getZIndex = dj.prototype.Qb;
    dj.prototype.setExtent = dj.prototype.fc;
    dj.prototype.setMaxResolution = dj.prototype.nc;
    dj.prototype.setMinResolution = dj.prototype.oc;
    dj.prototype.setOpacity = dj.prototype.gc;
    dj.prototype.setVisible = dj.prototype.hc;
    dj.prototype.setZIndex = dj.prototype.ic;
    dj.prototype.get = dj.prototype.get;
    dj.prototype.getKeys = dj.prototype.N;
    dj.prototype.getProperties = dj.prototype.O;
    dj.prototype.set = dj.prototype.set;
    dj.prototype.setProperties = dj.prototype.G;
    dj.prototype.unset = dj.prototype.P;
    dj.prototype.changed = dj.prototype.u;
    dj.prototype.dispatchEvent = dj.prototype.b;
    dj.prototype.getRevision = dj.prototype.K;
    dj.prototype.on = dj.prototype.I;
    dj.prototype.once = dj.prototype.L;
    dj.prototype.un = dj.prototype.J;
    dj.prototype.unByKey = dj.prototype.M;
    I.prototype.getSource = I.prototype.ha;
    I.prototype.getStyle = I.prototype.C;
    I.prototype.getStyleFunction = I.prototype.D;
    I.prototype.setStyle = I.prototype.l;
    I.prototype.setMap = I.prototype.setMap;
    I.prototype.setSource = I.prototype.Fc;
    I.prototype.getExtent = I.prototype.H;
    I.prototype.getMaxResolution = I.prototype.Nb;
    I.prototype.getMinResolution = I.prototype.Ob;
    I.prototype.getOpacity = I.prototype.Pb;
    I.prototype.getVisible = I.prototype.xb;
    I.prototype.getZIndex = I.prototype.Qb;
    I.prototype.setExtent = I.prototype.fc;
    I.prototype.setMaxResolution = I.prototype.nc;
    I.prototype.setMinResolution = I.prototype.oc;
    I.prototype.setOpacity = I.prototype.gc;
    I.prototype.setVisible = I.prototype.hc;
    I.prototype.setZIndex = I.prototype.ic;
    I.prototype.get = I.prototype.get;
    I.prototype.getKeys = I.prototype.N;
    I.prototype.getProperties = I.prototype.O;
    I.prototype.set = I.prototype.set;
    I.prototype.setProperties = I.prototype.G;
    I.prototype.unset = I.prototype.P;
    I.prototype.changed = I.prototype.u;
    I.prototype.dispatchEvent = I.prototype.b;
    I.prototype.getRevision = I.prototype.K;
    I.prototype.on = I.prototype.I;
    I.prototype.once = I.prototype.L;
    I.prototype.un = I.prototype.J;
    I.prototype.unByKey = I.prototype.M;
    Vh.prototype.get = Vh.prototype.get;
    Vh.prototype.getKeys = Vh.prototype.N;
    Vh.prototype.getProperties = Vh.prototype.O;
    Vh.prototype.set = Vh.prototype.set;
    Vh.prototype.setProperties = Vh.prototype.G;
    Vh.prototype.unset = Vh.prototype.P;
    Vh.prototype.changed = Vh.prototype.u;
    Vh.prototype.dispatchEvent = Vh.prototype.b;
    Vh.prototype.getRevision = Vh.prototype.K;
    Vh.prototype.on = Vh.prototype.I;
    Vh.prototype.once = Vh.prototype.L;
    Vh.prototype.un = Vh.prototype.J;
    Vh.prototype.unByKey = Vh.prototype.M;
    Zh.prototype.getActive = Zh.prototype.f;
    Zh.prototype.getMap = Zh.prototype.l;
    Zh.prototype.setActive = Zh.prototype.i;
    Zh.prototype.get = Zh.prototype.get;
    Zh.prototype.getKeys = Zh.prototype.N;
    Zh.prototype.getProperties = Zh.prototype.O;
    Zh.prototype.set = Zh.prototype.set;
    Zh.prototype.setProperties = Zh.prototype.G;
    Zh.prototype.unset = Zh.prototype.P;
    Zh.prototype.changed = Zh.prototype.u;
    Zh.prototype.dispatchEvent = Zh.prototype.b;
    Zh.prototype.getRevision = Zh.prototype.K;
    Zh.prototype.on = Zh.prototype.I;
    Zh.prototype.once = Zh.prototype.L;
    Zh.prototype.un = Zh.prototype.J;
    Zh.prototype.unByKey = Zh.prototype.M;
    hu.prototype.getActive = hu.prototype.f;
    hu.prototype.getMap = hu.prototype.l;
    hu.prototype.setActive = hu.prototype.i;
    hu.prototype.get = hu.prototype.get;
    hu.prototype.getKeys = hu.prototype.N;
    hu.prototype.getProperties = hu.prototype.O;
    hu.prototype.set = hu.prototype.set;
    hu.prototype.setProperties = hu.prototype.G;
    hu.prototype.unset = hu.prototype.P;
    hu.prototype.changed = hu.prototype.u;
    hu.prototype.dispatchEvent = hu.prototype.b;
    hu.prototype.getRevision = hu.prototype.K;
    hu.prototype.on = hu.prototype.I;
    hu.prototype.once = hu.prototype.L;
    hu.prototype.un = hu.prototype.J;
    hu.prototype.unByKey = hu.prototype.M;
    ku.prototype.type = ku.prototype.type;
    ku.prototype.target = ku.prototype.target;
    ku.prototype.preventDefault = ku.prototype.preventDefault;
    ku.prototype.stopPropagation = ku.prototype.stopPropagation;
    xi.prototype.type = xi.prototype.type;
    xi.prototype.target = xi.prototype.target;
    xi.prototype.preventDefault = xi.prototype.preventDefault;
    xi.prototype.stopPropagation = xi.prototype.stopPropagation;
    ji.prototype.getActive = ji.prototype.f;
    ji.prototype.getMap = ji.prototype.l;
    ji.prototype.setActive = ji.prototype.i;
    ji.prototype.get = ji.prototype.get;
    ji.prototype.getKeys = ji.prototype.N;
    ji.prototype.getProperties = ji.prototype.O;
    ji.prototype.set = ji.prototype.set;
    ji.prototype.setProperties = ji.prototype.G;
    ji.prototype.unset = ji.prototype.P;
    ji.prototype.changed = ji.prototype.u;
    ji.prototype.dispatchEvent = ji.prototype.b;
    ji.prototype.getRevision = ji.prototype.K;
    ji.prototype.on = ji.prototype.I;
    ji.prototype.once = ji.prototype.L;
    ji.prototype.un = ji.prototype.J;
    ji.prototype.unByKey = ji.prototype.M;
    yi.prototype.getActive = yi.prototype.f;
    yi.prototype.getMap = yi.prototype.l;
    yi.prototype.setActive = yi.prototype.i;
    yi.prototype.get = yi.prototype.get;
    yi.prototype.getKeys = yi.prototype.N;
    yi.prototype.getProperties = yi.prototype.O;
    yi.prototype.set = yi.prototype.set;
    yi.prototype.setProperties = yi.prototype.G;
    yi.prototype.unset = yi.prototype.P;
    yi.prototype.changed = yi.prototype.u;
    yi.prototype.dispatchEvent = yi.prototype.b;
    yi.prototype.getRevision = yi.prototype.K;
    yi.prototype.on = yi.prototype.I;
    yi.prototype.once = yi.prototype.L;
    yi.prototype.un = yi.prototype.J;
    yi.prototype.unByKey = yi.prototype.M;
    mi.prototype.getActive = mi.prototype.f;
    mi.prototype.getMap = mi.prototype.l;
    mi.prototype.setActive = mi.prototype.i;
    mi.prototype.get = mi.prototype.get;
    mi.prototype.getKeys = mi.prototype.N;
    mi.prototype.getProperties = mi.prototype.O;
    mi.prototype.set = mi.prototype.set;
    mi.prototype.setProperties = mi.prototype.G;
    mi.prototype.unset = mi.prototype.P;
    mi.prototype.changed = mi.prototype.u;
    mi.prototype.dispatchEvent = mi.prototype.b;
    mi.prototype.getRevision = mi.prototype.K;
    mi.prototype.on = mi.prototype.I;
    mi.prototype.once = mi.prototype.L;
    mi.prototype.un = mi.prototype.J;
    mi.prototype.unByKey = mi.prototype.M;
    mu.prototype.getActive = mu.prototype.f;
    mu.prototype.getMap = mu.prototype.l;
    mu.prototype.setActive = mu.prototype.i;
    mu.prototype.get = mu.prototype.get;
    mu.prototype.getKeys = mu.prototype.N;
    mu.prototype.getProperties = mu.prototype.O;
    mu.prototype.set = mu.prototype.set;
    mu.prototype.setProperties = mu.prototype.G;
    mu.prototype.unset = mu.prototype.P;
    mu.prototype.changed = mu.prototype.u;
    mu.prototype.dispatchEvent = mu.prototype.b;
    mu.prototype.getRevision = mu.prototype.K;
    mu.prototype.on = mu.prototype.I;
    mu.prototype.once = mu.prototype.L;
    mu.prototype.un = mu.prototype.J;
    mu.prototype.unByKey = mu.prototype.M;
    qi.prototype.getActive = qi.prototype.f;
    qi.prototype.getMap = qi.prototype.l;
    qi.prototype.setActive = qi.prototype.i;
    qi.prototype.get = qi.prototype.get;
    qi.prototype.getKeys = qi.prototype.N;
    qi.prototype.getProperties = qi.prototype.O;
    qi.prototype.set = qi.prototype.set;
    qi.prototype.setProperties = qi.prototype.G;
    qi.prototype.unset = qi.prototype.P;
    qi.prototype.changed = qi.prototype.u;
    qi.prototype.dispatchEvent = qi.prototype.b;
    qi.prototype.getRevision = qi.prototype.K;
    qi.prototype.on = qi.prototype.I;
    qi.prototype.once = qi.prototype.L;
    qi.prototype.un = qi.prototype.J;
    qi.prototype.unByKey = qi.prototype.M;
    Di.prototype.getGeometry = Di.prototype.W;
    Di.prototype.getActive = Di.prototype.f;
    Di.prototype.getMap = Di.prototype.l;
    Di.prototype.setActive = Di.prototype.i;
    Di.prototype.get = Di.prototype.get;
    Di.prototype.getKeys = Di.prototype.N;
    Di.prototype.getProperties = Di.prototype.O;
    Di.prototype.set = Di.prototype.set;
    Di.prototype.setProperties = Di.prototype.G;
    Di.prototype.unset = Di.prototype.P;
    Di.prototype.changed = Di.prototype.u;
    Di.prototype.dispatchEvent = Di.prototype.b;
    Di.prototype.getRevision = Di.prototype.K;
    Di.prototype.on = Di.prototype.I;
    Di.prototype.once = Di.prototype.L;
    Di.prototype.un = Di.prototype.J;
    Di.prototype.unByKey = Di.prototype.M;
    qu.prototype.type = qu.prototype.type;
    qu.prototype.target = qu.prototype.target;
    qu.prototype.preventDefault = qu.prototype.preventDefault;
    qu.prototype.stopPropagation = qu.prototype.stopPropagation;
    ru.prototype.getActive = ru.prototype.f;
    ru.prototype.getMap = ru.prototype.l;
    ru.prototype.setActive = ru.prototype.i;
    ru.prototype.get = ru.prototype.get;
    ru.prototype.getKeys = ru.prototype.N;
    ru.prototype.getProperties = ru.prototype.O;
    ru.prototype.set = ru.prototype.set;
    ru.prototype.setProperties = ru.prototype.G;
    ru.prototype.unset = ru.prototype.P;
    ru.prototype.changed = ru.prototype.u;
    ru.prototype.dispatchEvent = ru.prototype.b;
    ru.prototype.getRevision = ru.prototype.K;
    ru.prototype.on = ru.prototype.I;
    ru.prototype.once = ru.prototype.L;
    ru.prototype.un = ru.prototype.J;
    ru.prototype.unByKey = ru.prototype.M;
    Ei.prototype.getActive = Ei.prototype.f;
    Ei.prototype.getMap = Ei.prototype.l;
    Ei.prototype.setActive = Ei.prototype.i;
    Ei.prototype.get = Ei.prototype.get;
    Ei.prototype.getKeys = Ei.prototype.N;
    Ei.prototype.getProperties = Ei.prototype.O;
    Ei.prototype.set = Ei.prototype.set;
    Ei.prototype.setProperties = Ei.prototype.G;
    Ei.prototype.unset = Ei.prototype.P;
    Ei.prototype.changed = Ei.prototype.u;
    Ei.prototype.dispatchEvent = Ei.prototype.b;
    Ei.prototype.getRevision = Ei.prototype.K;
    Ei.prototype.on = Ei.prototype.I;
    Ei.prototype.once = Ei.prototype.L;
    Ei.prototype.un = Ei.prototype.J;
    Ei.prototype.unByKey = Ei.prototype.M;
    Gi.prototype.getActive = Gi.prototype.f;
    Gi.prototype.getMap = Gi.prototype.l;
    Gi.prototype.setActive = Gi.prototype.i;
    Gi.prototype.get = Gi.prototype.get;
    Gi.prototype.getKeys = Gi.prototype.N;
    Gi.prototype.getProperties = Gi.prototype.O;
    Gi.prototype.set = Gi.prototype.set;
    Gi.prototype.setProperties = Gi.prototype.G;
    Gi.prototype.unset = Gi.prototype.P;
    Gi.prototype.changed = Gi.prototype.u;
    Gi.prototype.dispatchEvent = Gi.prototype.b;
    Gi.prototype.getRevision = Gi.prototype.K;
    Gi.prototype.on = Gi.prototype.I;
    Gi.prototype.once = Gi.prototype.L;
    Gi.prototype.un = Gi.prototype.J;
    Gi.prototype.unByKey = Gi.prototype.M;
    Hu.prototype.type = Hu.prototype.type;
    Hu.prototype.target = Hu.prototype.target;
    Hu.prototype.preventDefault = Hu.prototype.preventDefault;
    Hu.prototype.stopPropagation = Hu.prototype.stopPropagation;
    Iu.prototype.getActive = Iu.prototype.f;
    Iu.prototype.getMap = Iu.prototype.l;
    Iu.prototype.setActive = Iu.prototype.i;
    Iu.prototype.get = Iu.prototype.get;
    Iu.prototype.getKeys = Iu.prototype.N;
    Iu.prototype.getProperties = Iu.prototype.O;
    Iu.prototype.set = Iu.prototype.set;
    Iu.prototype.setProperties = Iu.prototype.G;
    Iu.prototype.unset = Iu.prototype.P;
    Iu.prototype.changed = Iu.prototype.u;
    Iu.prototype.dispatchEvent = Iu.prototype.b;
    Iu.prototype.getRevision = Iu.prototype.K;
    Iu.prototype.on = Iu.prototype.I;
    Iu.prototype.once = Iu.prototype.L;
    Iu.prototype.un = Iu.prototype.J;
    Iu.prototype.unByKey = Iu.prototype.M;
    Ii.prototype.getActive = Ii.prototype.f;
    Ii.prototype.getMap = Ii.prototype.l;
    Ii.prototype.setActive = Ii.prototype.i;
    Ii.prototype.get = Ii.prototype.get;
    Ii.prototype.getKeys = Ii.prototype.N;
    Ii.prototype.getProperties = Ii.prototype.O;
    Ii.prototype.set = Ii.prototype.set;
    Ii.prototype.setProperties = Ii.prototype.G;
    Ii.prototype.unset = Ii.prototype.P;
    Ii.prototype.changed = Ii.prototype.u;
    Ii.prototype.dispatchEvent = Ii.prototype.b;
    Ii.prototype.getRevision = Ii.prototype.K;
    Ii.prototype.on = Ii.prototype.I;
    Ii.prototype.once = Ii.prototype.L;
    Ii.prototype.un = Ii.prototype.J;
    Ii.prototype.unByKey = Ii.prototype.M;
    Ki.prototype.getActive = Ki.prototype.f;
    Ki.prototype.getMap = Ki.prototype.l;
    Ki.prototype.setActive = Ki.prototype.i;
    Ki.prototype.get = Ki.prototype.get;
    Ki.prototype.getKeys = Ki.prototype.N;
    Ki.prototype.getProperties = Ki.prototype.O;
    Ki.prototype.set = Ki.prototype.set;
    Ki.prototype.setProperties = Ki.prototype.G;
    Ki.prototype.unset = Ki.prototype.P;
    Ki.prototype.changed = Ki.prototype.u;
    Ki.prototype.dispatchEvent = Ki.prototype.b;
    Ki.prototype.getRevision = Ki.prototype.K;
    Ki.prototype.on = Ki.prototype.I;
    Ki.prototype.once = Ki.prototype.L;
    Ki.prototype.un = Ki.prototype.J;
    Ki.prototype.unByKey = Ki.prototype.M;
    Oi.prototype.getActive = Oi.prototype.f;
    Oi.prototype.getMap = Oi.prototype.l;
    Oi.prototype.setActive = Oi.prototype.i;
    Oi.prototype.get = Oi.prototype.get;
    Oi.prototype.getKeys = Oi.prototype.N;
    Oi.prototype.getProperties = Oi.prototype.O;
    Oi.prototype.set = Oi.prototype.set;
    Oi.prototype.setProperties = Oi.prototype.G;
    Oi.prototype.unset = Oi.prototype.P;
    Oi.prototype.changed = Oi.prototype.u;
    Oi.prototype.dispatchEvent = Oi.prototype.b;
    Oi.prototype.getRevision = Oi.prototype.K;
    Oi.prototype.on = Oi.prototype.I;
    Oi.prototype.once = Oi.prototype.L;
    Oi.prototype.un = Oi.prototype.J;
    Oi.prototype.unByKey = Oi.prototype.M;
    Vu.prototype.type = Vu.prototype.type;
    Vu.prototype.target = Vu.prototype.target;
    Vu.prototype.preventDefault = Vu.prototype.preventDefault;
    Vu.prototype.stopPropagation = Vu.prototype.stopPropagation;
    Wu.prototype.getActive = Wu.prototype.f;
    Wu.prototype.getMap = Wu.prototype.l;
    Wu.prototype.setActive = Wu.prototype.i;
    Wu.prototype.get = Wu.prototype.get;
    Wu.prototype.getKeys = Wu.prototype.N;
    Wu.prototype.getProperties = Wu.prototype.O;
    Wu.prototype.set = Wu.prototype.set;
    Wu.prototype.setProperties = Wu.prototype.G;
    Wu.prototype.unset = Wu.prototype.P;
    Wu.prototype.changed = Wu.prototype.u;
    Wu.prototype.dispatchEvent = Wu.prototype.b;
    Wu.prototype.getRevision = Wu.prototype.K;
    Wu.prototype.on = Wu.prototype.I;
    Wu.prototype.once = Wu.prototype.L;
    Wu.prototype.un = Wu.prototype.J;
    Wu.prototype.unByKey = Wu.prototype.M;
    Zu.prototype.getActive = Zu.prototype.f;
    Zu.prototype.getMap = Zu.prototype.l;
    Zu.prototype.setActive = Zu.prototype.i;
    Zu.prototype.get = Zu.prototype.get;
    Zu.prototype.getKeys = Zu.prototype.N;
    Zu.prototype.getProperties = Zu.prototype.O;
    Zu.prototype.set = Zu.prototype.set;
    Zu.prototype.setProperties = Zu.prototype.G;
    Zu.prototype.unset = Zu.prototype.P;
    Zu.prototype.changed = Zu.prototype.u;
    Zu.prototype.dispatchEvent = Zu.prototype.b;
    Zu.prototype.getRevision = Zu.prototype.K;
    Zu.prototype.on = Zu.prototype.I;
    Zu.prototype.once = Zu.prototype.L;
    Zu.prototype.un = Zu.prototype.J;
    Zu.prototype.unByKey = Zu.prototype.M;
    cv.prototype.type = cv.prototype.type;
    cv.prototype.target = cv.prototype.target;
    cv.prototype.preventDefault = cv.prototype.preventDefault;
    cv.prototype.stopPropagation = cv.prototype.stopPropagation;
    dv.prototype.getActive = dv.prototype.f;
    dv.prototype.getMap = dv.prototype.l;
    dv.prototype.setActive = dv.prototype.i;
    dv.prototype.get = dv.prototype.get;
    dv.prototype.getKeys = dv.prototype.N;
    dv.prototype.getProperties = dv.prototype.O;
    dv.prototype.set = dv.prototype.set;
    dv.prototype.setProperties = dv.prototype.G;
    dv.prototype.unset = dv.prototype.P;
    dv.prototype.changed = dv.prototype.u;
    dv.prototype.dispatchEvent = dv.prototype.b;
    dv.prototype.getRevision = dv.prototype.K;
    dv.prototype.on = dv.prototype.I;
    dv.prototype.once = dv.prototype.L;
    dv.prototype.un = dv.prototype.J;
    dv.prototype.unByKey = dv.prototype.M;
    Tc.prototype.get = Tc.prototype.get;
    Tc.prototype.getKeys = Tc.prototype.N;
    Tc.prototype.getProperties = Tc.prototype.O;
    Tc.prototype.set = Tc.prototype.set;
    Tc.prototype.setProperties = Tc.prototype.G;
    Tc.prototype.unset = Tc.prototype.P;
    Tc.prototype.changed = Tc.prototype.u;
    Tc.prototype.dispatchEvent = Tc.prototype.b;
    Tc.prototype.getRevision = Tc.prototype.K;
    Tc.prototype.on = Tc.prototype.I;
    Tc.prototype.once = Tc.prototype.L;
    Tc.prototype.un = Tc.prototype.J;
    Tc.prototype.unByKey = Tc.prototype.M;
    hd.prototype.getClosestPoint = hd.prototype.vb;
    hd.prototype.getExtent = hd.prototype.H;
    hd.prototype.rotate = hd.prototype.rotate;
    hd.prototype.simplify = hd.prototype.Bb;
    hd.prototype.transform = hd.prototype.jb;
    hd.prototype.get = hd.prototype.get;
    hd.prototype.getKeys = hd.prototype.N;
    hd.prototype.getProperties = hd.prototype.O;
    hd.prototype.set = hd.prototype.set;
    hd.prototype.setProperties = hd.prototype.G;
    hd.prototype.unset = hd.prototype.P;
    hd.prototype.changed = hd.prototype.u;
    hd.prototype.dispatchEvent = hd.prototype.b;
    hd.prototype.getRevision = hd.prototype.K;
    hd.prototype.on = hd.prototype.I;
    hd.prototype.once = hd.prototype.L;
    hd.prototype.un = hd.prototype.J;
    hd.prototype.unByKey = hd.prototype.M;
    Vt.prototype.getFirstCoordinate = Vt.prototype.Ib;
    Vt.prototype.getLastCoordinate = Vt.prototype.Jb;
    Vt.prototype.getLayout = Vt.prototype.Kb;
    Vt.prototype.rotate = Vt.prototype.rotate;
    Vt.prototype.getClosestPoint = Vt.prototype.vb;
    Vt.prototype.getExtent = Vt.prototype.H;
    Vt.prototype.simplify = Vt.prototype.Bb;
    Vt.prototype.get = Vt.prototype.get;
    Vt.prototype.getKeys = Vt.prototype.N;
    Vt.prototype.getProperties = Vt.prototype.O;
    Vt.prototype.set = Vt.prototype.set;
    Vt.prototype.setProperties = Vt.prototype.G;
    Vt.prototype.unset = Vt.prototype.P;
    Vt.prototype.changed = Vt.prototype.u;
    Vt.prototype.dispatchEvent = Vt.prototype.b;
    Vt.prototype.getRevision = Vt.prototype.K;
    Vt.prototype.on = Vt.prototype.I;
    Vt.prototype.once = Vt.prototype.L;
    Vt.prototype.un = Vt.prototype.J;
    Vt.prototype.unByKey = Vt.prototype.M;
    Ln.prototype.getClosestPoint = Ln.prototype.vb;
    Ln.prototype.getExtent = Ln.prototype.H;
    Ln.prototype.rotate = Ln.prototype.rotate;
    Ln.prototype.simplify = Ln.prototype.Bb;
    Ln.prototype.transform = Ln.prototype.jb;
    Ln.prototype.get = Ln.prototype.get;
    Ln.prototype.getKeys = Ln.prototype.N;
    Ln.prototype.getProperties = Ln.prototype.O;
    Ln.prototype.set = Ln.prototype.set;
    Ln.prototype.setProperties = Ln.prototype.G;
    Ln.prototype.unset = Ln.prototype.P;
    Ln.prototype.changed = Ln.prototype.u;
    Ln.prototype.dispatchEvent = Ln.prototype.b;
    Ln.prototype.getRevision = Ln.prototype.K;
    Ln.prototype.on = Ln.prototype.I;
    Ln.prototype.once = Ln.prototype.L;
    Ln.prototype.un = Ln.prototype.J;
    Ln.prototype.unByKey = Ln.prototype.M;
    zd.prototype.getFirstCoordinate = zd.prototype.Ib;
    zd.prototype.getLastCoordinate = zd.prototype.Jb;
    zd.prototype.getLayout = zd.prototype.Kb;
    zd.prototype.rotate = zd.prototype.rotate;
    zd.prototype.getClosestPoint = zd.prototype.vb;
    zd.prototype.getExtent = zd.prototype.H;
    zd.prototype.simplify = zd.prototype.Bb;
    zd.prototype.transform = zd.prototype.jb;
    zd.prototype.get = zd.prototype.get;
    zd.prototype.getKeys = zd.prototype.N;
    zd.prototype.getProperties = zd.prototype.O;
    zd.prototype.set = zd.prototype.set;
    zd.prototype.setProperties = zd.prototype.G;
    zd.prototype.unset = zd.prototype.P;
    zd.prototype.changed = zd.prototype.u;
    zd.prototype.dispatchEvent = zd.prototype.b;
    zd.prototype.getRevision = zd.prototype.K;
    zd.prototype.on = zd.prototype.I;
    zd.prototype.once = zd.prototype.L;
    zd.prototype.un = zd.prototype.J;
    zd.prototype.unByKey = zd.prototype.M;
    R.prototype.getFirstCoordinate = R.prototype.Ib;
    R.prototype.getLastCoordinate = R.prototype.Jb;
    R.prototype.getLayout = R.prototype.Kb;
    R.prototype.rotate = R.prototype.rotate;
    R.prototype.getClosestPoint = R.prototype.vb;
    R.prototype.getExtent = R.prototype.H;
    R.prototype.simplify = R.prototype.Bb;
    R.prototype.transform = R.prototype.jb;
    R.prototype.get = R.prototype.get;
    R.prototype.getKeys = R.prototype.N;
    R.prototype.getProperties = R.prototype.O;
    R.prototype.set = R.prototype.set;
    R.prototype.setProperties = R.prototype.G;
    R.prototype.unset = R.prototype.P;
    R.prototype.changed = R.prototype.u;
    R.prototype.dispatchEvent = R.prototype.b;
    R.prototype.getRevision = R.prototype.K;
    R.prototype.on = R.prototype.I;
    R.prototype.once = R.prototype.L;
    R.prototype.un = R.prototype.J;
    R.prototype.unByKey = R.prototype.M;
    S.prototype.getFirstCoordinate = S.prototype.Ib;
    S.prototype.getLastCoordinate = S.prototype.Jb;
    S.prototype.getLayout = S.prototype.Kb;
    S.prototype.rotate = S.prototype.rotate;
    S.prototype.getClosestPoint = S.prototype.vb;
    S.prototype.getExtent = S.prototype.H;
    S.prototype.simplify = S.prototype.Bb;
    S.prototype.transform = S.prototype.jb;
    S.prototype.get = S.prototype.get;
    S.prototype.getKeys = S.prototype.N;
    S.prototype.getProperties = S.prototype.O;
    S.prototype.set = S.prototype.set;
    S.prototype.setProperties = S.prototype.G;
    S.prototype.unset = S.prototype.P;
    S.prototype.changed = S.prototype.u;
    S.prototype.dispatchEvent = S.prototype.b;
    S.prototype.getRevision = S.prototype.K;
    S.prototype.on = S.prototype.I;
    S.prototype.once = S.prototype.L;
    S.prototype.un = S.prototype.J;
    S.prototype.unByKey = S.prototype.M;
    Bn.prototype.getFirstCoordinate = Bn.prototype.Ib;
    Bn.prototype.getLastCoordinate = Bn.prototype.Jb;
    Bn.prototype.getLayout = Bn.prototype.Kb;
    Bn.prototype.rotate = Bn.prototype.rotate;
    Bn.prototype.getClosestPoint = Bn.prototype.vb;
    Bn.prototype.getExtent = Bn.prototype.H;
    Bn.prototype.simplify = Bn.prototype.Bb;
    Bn.prototype.transform = Bn.prototype.jb;
    Bn.prototype.get = Bn.prototype.get;
    Bn.prototype.getKeys = Bn.prototype.N;
    Bn.prototype.getProperties = Bn.prototype.O;
    Bn.prototype.set = Bn.prototype.set;
    Bn.prototype.setProperties = Bn.prototype.G;
    Bn.prototype.unset = Bn.prototype.P;
    Bn.prototype.changed = Bn.prototype.u;
    Bn.prototype.dispatchEvent = Bn.prototype.b;
    Bn.prototype.getRevision = Bn.prototype.K;
    Bn.prototype.on = Bn.prototype.I;
    Bn.prototype.once = Bn.prototype.L;
    Bn.prototype.un = Bn.prototype.J;
    Bn.prototype.unByKey = Bn.prototype.M;
    T.prototype.getFirstCoordinate = T.prototype.Ib;
    T.prototype.getLastCoordinate = T.prototype.Jb;
    T.prototype.getLayout = T.prototype.Kb;
    T.prototype.rotate = T.prototype.rotate;
    T.prototype.getClosestPoint = T.prototype.vb;
    T.prototype.getExtent = T.prototype.H;
    T.prototype.simplify = T.prototype.Bb;
    T.prototype.transform = T.prototype.jb;
    T.prototype.get = T.prototype.get;
    T.prototype.getKeys = T.prototype.N;
    T.prototype.getProperties = T.prototype.O;
    T.prototype.set = T.prototype.set;
    T.prototype.setProperties = T.prototype.G;
    T.prototype.unset = T.prototype.P;
    T.prototype.changed = T.prototype.u;
    T.prototype.dispatchEvent = T.prototype.b;
    T.prototype.getRevision = T.prototype.K;
    T.prototype.on = T.prototype.I;
    T.prototype.once = T.prototype.L;
    T.prototype.un = T.prototype.J;
    T.prototype.unByKey = T.prototype.M;
    C.prototype.getFirstCoordinate = C.prototype.Ib;
    C.prototype.getLastCoordinate = C.prototype.Jb;
    C.prototype.getLayout = C.prototype.Kb;
    C.prototype.rotate = C.prototype.rotate;
    C.prototype.getClosestPoint = C.prototype.vb;
    C.prototype.getExtent = C.prototype.H;
    C.prototype.simplify = C.prototype.Bb;
    C.prototype.transform = C.prototype.jb;
    C.prototype.get = C.prototype.get;
    C.prototype.getKeys = C.prototype.N;
    C.prototype.getProperties = C.prototype.O;
    C.prototype.set = C.prototype.set;
    C.prototype.setProperties = C.prototype.G;
    C.prototype.unset = C.prototype.P;
    C.prototype.changed = C.prototype.u;
    C.prototype.dispatchEvent = C.prototype.b;
    C.prototype.getRevision = C.prototype.K;
    C.prototype.on = C.prototype.I;
    C.prototype.once = C.prototype.L;
    C.prototype.un = C.prototype.J;
    C.prototype.unByKey = C.prototype.M;
    E.prototype.getFirstCoordinate = E.prototype.Ib;
    E.prototype.getLastCoordinate = E.prototype.Jb;
    E.prototype.getLayout = E.prototype.Kb;
    E.prototype.rotate = E.prototype.rotate;
    E.prototype.getClosestPoint = E.prototype.vb;
    E.prototype.getExtent = E.prototype.H;
    E.prototype.simplify = E.prototype.Bb;
    E.prototype.transform = E.prototype.jb;
    E.prototype.get = E.prototype.get;
    E.prototype.getKeys = E.prototype.N;
    E.prototype.getProperties = E.prototype.O;
    E.prototype.set = E.prototype.set;
    E.prototype.setProperties = E.prototype.G;
    E.prototype.unset = E.prototype.P;
    E.prototype.changed = E.prototype.u;
    E.prototype.dispatchEvent = E.prototype.b;
    E.prototype.getRevision = E.prototype.K;
    E.prototype.on = E.prototype.I;
    E.prototype.once = E.prototype.L;
    E.prototype.un = E.prototype.J;
    E.prototype.unByKey = E.prototype.M;
    ko.prototype.readFeatures = ko.prototype.Fa;
    lo.prototype.readFeatures = lo.prototype.Fa;
    lo.prototype.readFeatures = lo.prototype.Fa;
    Xe.prototype.get = Xe.prototype.get;
    Xe.prototype.getKeys = Xe.prototype.N;
    Xe.prototype.getProperties = Xe.prototype.O;
    Xe.prototype.set = Xe.prototype.set;
    Xe.prototype.setProperties = Xe.prototype.G;
    Xe.prototype.unset = Xe.prototype.P;
    Xe.prototype.changed = Xe.prototype.u;
    Xe.prototype.dispatchEvent = Xe.prototype.b;
    Xe.prototype.getRevision = Xe.prototype.K;
    Xe.prototype.on = Xe.prototype.I;
    Xe.prototype.once = Xe.prototype.L;
    Xe.prototype.un = Xe.prototype.J;
    Xe.prototype.unByKey = Xe.prototype.M;
    Ef.prototype.getMap = Ef.prototype.i;
    Ef.prototype.setMap = Ef.prototype.setMap;
    Ef.prototype.setTarget = Ef.prototype.c;
    Ef.prototype.get = Ef.prototype.get;
    Ef.prototype.getKeys = Ef.prototype.N;
    Ef.prototype.getProperties = Ef.prototype.O;
    Ef.prototype.set = Ef.prototype.set;
    Ef.prototype.setProperties = Ef.prototype.G;
    Ef.prototype.unset = Ef.prototype.P;
    Ef.prototype.changed = Ef.prototype.u;
    Ef.prototype.dispatchEvent = Ef.prototype.b;
    Ef.prototype.getRevision = Ef.prototype.K;
    Ef.prototype.on = Ef.prototype.I;
    Ef.prototype.once = Ef.prototype.L;
    Ef.prototype.un = Ef.prototype.J;
    Ef.prototype.unByKey = Ef.prototype.M;
    Lf.prototype.getMap = Lf.prototype.i;
    Lf.prototype.setMap = Lf.prototype.setMap;
    Lf.prototype.setTarget = Lf.prototype.c;
    Lf.prototype.get = Lf.prototype.get;
    Lf.prototype.getKeys = Lf.prototype.N;
    Lf.prototype.getProperties = Lf.prototype.O;
    Lf.prototype.set = Lf.prototype.set;
    Lf.prototype.setProperties = Lf.prototype.G;
    Lf.prototype.unset = Lf.prototype.P;
    Lf.prototype.changed = Lf.prototype.u;
    Lf.prototype.dispatchEvent = Lf.prototype.b;
    Lf.prototype.getRevision = Lf.prototype.K;
    Lf.prototype.on = Lf.prototype.I;
    Lf.prototype.once = Lf.prototype.L;
    Lf.prototype.un = Lf.prototype.J;
    Lf.prototype.unByKey = Lf.prototype.M;
    Qf.prototype.getMap = Qf.prototype.i;
    Qf.prototype.setMap = Qf.prototype.setMap;
    Qf.prototype.setTarget = Qf.prototype.c;
    Qf.prototype.get = Qf.prototype.get;
    Qf.prototype.getKeys = Qf.prototype.N;
    Qf.prototype.getProperties = Qf.prototype.O;
    Qf.prototype.set = Qf.prototype.set;
    Qf.prototype.setProperties = Qf.prototype.G;
    Qf.prototype.unset = Qf.prototype.P;
    Qf.prototype.changed = Qf.prototype.u;
    Qf.prototype.dispatchEvent = Qf.prototype.b;
    Qf.prototype.getRevision = Qf.prototype.K;
    Qf.prototype.on = Qf.prototype.I;
    Qf.prototype.once = Qf.prototype.L;
    Qf.prototype.un = Qf.prototype.J;
    Qf.prototype.unByKey = Qf.prototype.M;
    an.prototype.getMap = an.prototype.i;
    an.prototype.setMap = an.prototype.setMap;
    an.prototype.setTarget = an.prototype.c;
    an.prototype.get = an.prototype.get;
    an.prototype.getKeys = an.prototype.N;
    an.prototype.getProperties = an.prototype.O;
    an.prototype.set = an.prototype.set;
    an.prototype.setProperties = an.prototype.G;
    an.prototype.unset = an.prototype.P;
    an.prototype.changed = an.prototype.u;
    an.prototype.dispatchEvent = an.prototype.b;
    an.prototype.getRevision = an.prototype.K;
    an.prototype.on = an.prototype.I;
    an.prototype.once = an.prototype.L;
    an.prototype.un = an.prototype.J;
    an.prototype.unByKey = an.prototype.M;
    Hf.prototype.getMap = Hf.prototype.i;
    Hf.prototype.setMap = Hf.prototype.setMap;
    Hf.prototype.setTarget = Hf.prototype.c;
    Hf.prototype.get = Hf.prototype.get;
    Hf.prototype.getKeys = Hf.prototype.N;
    Hf.prototype.getProperties = Hf.prototype.O;
    Hf.prototype.set = Hf.prototype.set;
    Hf.prototype.setProperties = Hf.prototype.G;
    Hf.prototype.unset = Hf.prototype.P;
    Hf.prototype.changed = Hf.prototype.u;
    Hf.prototype.dispatchEvent = Hf.prototype.b;
    Hf.prototype.getRevision = Hf.prototype.K;
    Hf.prototype.on = Hf.prototype.I;
    Hf.prototype.once = Hf.prototype.L;
    Hf.prototype.un = Hf.prototype.J;
    Hf.prototype.unByKey = Hf.prototype.M;
    fn.prototype.getMap = fn.prototype.i;
    fn.prototype.setMap = fn.prototype.setMap;
    fn.prototype.setTarget = fn.prototype.c;
    fn.prototype.get = fn.prototype.get;
    fn.prototype.getKeys = fn.prototype.N;
    fn.prototype.getProperties = fn.prototype.O;
    fn.prototype.set = fn.prototype.set;
    fn.prototype.setProperties = fn.prototype.G;
    fn.prototype.unset = fn.prototype.P;
    fn.prototype.changed = fn.prototype.u;
    fn.prototype.dispatchEvent = fn.prototype.b;
    fn.prototype.getRevision = fn.prototype.K;
    fn.prototype.on = fn.prototype.I;
    fn.prototype.once = fn.prototype.L;
    fn.prototype.un = fn.prototype.J;
    fn.prototype.unByKey = fn.prototype.M;
    Jf.prototype.getMap = Jf.prototype.i;
    Jf.prototype.setMap = Jf.prototype.setMap;
    Jf.prototype.setTarget = Jf.prototype.c;
    Jf.prototype.get = Jf.prototype.get;
    Jf.prototype.getKeys = Jf.prototype.N;
    Jf.prototype.getProperties = Jf.prototype.O;
    Jf.prototype.set = Jf.prototype.set;
    Jf.prototype.setProperties = Jf.prototype.G;
    Jf.prototype.unset = Jf.prototype.P;
    Jf.prototype.changed = Jf.prototype.u;
    Jf.prototype.dispatchEvent = Jf.prototype.b;
    Jf.prototype.getRevision = Jf.prototype.K;
    Jf.prototype.on = Jf.prototype.I;
    Jf.prototype.once = Jf.prototype.L;
    Jf.prototype.un = Jf.prototype.J;
    Jf.prototype.unByKey = Jf.prototype.M;
    kn.prototype.getMap = kn.prototype.i;
    kn.prototype.setMap = kn.prototype.setMap;
    kn.prototype.setTarget = kn.prototype.c;
    kn.prototype.get = kn.prototype.get;
    kn.prototype.getKeys = kn.prototype.N;
    kn.prototype.getProperties = kn.prototype.O;
    kn.prototype.set = kn.prototype.set;
    kn.prototype.setProperties = kn.prototype.G;
    kn.prototype.unset = kn.prototype.P;
    kn.prototype.changed = kn.prototype.u;
    kn.prototype.dispatchEvent = kn.prototype.b;
    kn.prototype.getRevision = kn.prototype.K;
    kn.prototype.on = kn.prototype.I;
    kn.prototype.once = kn.prototype.L;
    kn.prototype.un = kn.prototype.J;
    kn.prototype.unByKey = kn.prototype.M;
    pn.prototype.getMap = pn.prototype.i;
    pn.prototype.setMap = pn.prototype.setMap;
    pn.prototype.setTarget = pn.prototype.c;
    pn.prototype.get = pn.prototype.get;
    pn.prototype.getKeys = pn.prototype.N;
    pn.prototype.getProperties = pn.prototype.O;
    pn.prototype.set = pn.prototype.set;
    pn.prototype.setProperties = pn.prototype.G;
    pn.prototype.unset = pn.prototype.P;
    pn.prototype.changed = pn.prototype.u;
    pn.prototype.dispatchEvent = pn.prototype.b;
    pn.prototype.getRevision = pn.prototype.K;
    pn.prototype.on = pn.prototype.I;
    pn.prototype.once = pn.prototype.L;
    pn.prototype.un = pn.prototype.J;
    pn.prototype.unByKey = pn.prototype.M;
    return OPENLAYERS.ol;
}));

