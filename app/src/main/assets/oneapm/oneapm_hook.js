function oneapm_log(a) {
    __enableoneapmLog && "undefined" != typeof console && "undefined" != typeof a && "log" in console && console.log(a)
}

var __enableoneapmLog, ___onapm_ajax_index, ___oneapm_ajax_array;
console.info("  jshook agent start install  !"), __enableoneapmLog = !1, function (a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B = [].indexOf || function (a) {
        for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
        return -1
    };
    t = a.document, d = "before", c = "after", m = "readyState", l = "addEventListener", k = "removeEventListener", g = "dispatchEvent", q = "XMLHttpRequest", h = "FormData", n = ["load", "loadend", "loadstart"], e = ["progress", "abort", "error", "timeout"], w = parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]), isNaN(w) && (w = parseInt((/trident\/.*; rv:(\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])), (A = Array.prototype).indexOf || (A.indexOf = function (a) {
        var b, c, d, e;
        for (b = d = 0, e = this.length; e > d; b = ++d) if (c = this[b], c === a) return b;
        return -1
    }), y = function (a, b) {
        return Array.prototype.slice.call(a, b)
    }, s = function (a) {
        return "returnValue" === a || "totalSize" === a || "position" === a
    }, v = function (a, b) {
        var c, d;
        for (c in a) if (d = a[c], !s(c)) try {
            b[c] = a[c]
        } catch (e) {
        }
        return b
    }, x = function (a, b, c) {
        var d, e, f, h;
        for (e = function (a) {
            return function (d) {
                var e, f, h;
                e = {};
                for (f in d) s(f) || (h = d[f], e[f] = h === b ? c : h);
                return c[g](a, e)
            }
        }, f = 0, h = a.length; h > f; f++) d = a[f], c._has(d) && (b["on" + d] = e(d))
    }, u = function (a) {
        var b;
        if (null != t.createEventObject) return b = t.createEventObject(), b.type = a, b;
        try {
            return new Event(a)
        } catch (c) {
            return {type: a}
        }
    }, f = function (a) {
        var c, d, e;
        return d = {}, e = function (a) {
            return d[a] || []
        }, c = {}, c[l] = function (a, c, f) {
            d[a] = e(a), d[a].indexOf(c) >= 0 || (f = f === b ? d[a].length : f, d[a].splice(f, 0, c))
        }, c[k] = function (a, c) {
            var f;
            return a === b ? (d = {}, void 0) : (c === b && (d[a] = []), f = e(a).indexOf(c), -1 !== f && e(a).splice(f, 1), void 0)
        }, c[g] = function () {
            var d, f, g, h, i, j, k, l;
            for (d = y(arguments), f = d.shift(), a || (d[0] = v(d[0], u(f))), h = c["on" + f], h && h.apply(b, d), l = e(f).concat(e("*")), g = j = 0, k = l.length; k > j; g = ++j) i = l[g], i.apply(b, d)
        }, c._has = function (a) {
            return !(!d[a] && !c["on" + a])
        }, a && (c.listeners = function (a) {
            return y(e(a))
        }, c.on = c[l], c.off = c[k], c.fire = c[g], c.once = function (a, b) {
            var d;
            return d = function () {
                return c.off(a, d), b.apply(null, arguments)
            }, c.on(a, d)
        }, c.destroy = function () {
            return d = {}
        }), c
    }, z = f(!0), z.EventEmitter = f, z[d] = function (a, b) {
        if (a.length < 1 || a.length > 2) throw"invalid hook";
        return z[l](d, a, b)
    }, z[c] = function (a, b) {
        if (a.length < 2 || a.length > 3) throw"invalid hook";
        return z[l](c, a, b)
    }, z.enable = function () {
        a[q] = p, i && (a[h] = o)
    }, z.disable = function () {
        a[q] = z[q], a[h] = i
    }, r = z.headers = function (a, b) {
        var c, d, e, f, g, h, i, j, k;
        switch (null == b && (b = {}), typeof a) {
            case"object":
                d = [];
                for (e in a) g = a[e], f = e.toLowerCase(), d.push("" + f + ":	" + g);
                return d.join("\n");
            case"string":
                for (d = a.split("\n"), i = 0, j = d.length; j > i; i++) c = d[i], /([^:]+):\s*(.+)/.test(c) && (f = null != (k = RegExp.$1) ? k.toLowerCase() : void 0, h = RegExp.$2, null == b[f] && (b[f] = h));
                return b
        }
    }, i = a[h], o = function (a) {
        var b;
        this.fd = a ? new i(a) : new i, this.form = a, b = [], Object.defineProperty(this, "entries", {
            get: function () {
                var c;
                return c = a ? y(a.querySelectorAll("input,select")).filter(function (a) {
                    var b;
                    return "checkbox" !== (b = a.type) && "radio" !== b || a.checked
                }).map(function (a) {
                    return [a.name, "file" === a.type ? a.files : a.value]
                }) : [], c.concat(b)
            }
        }), this.append = function (a) {
            return function () {
                var c;
                return c = y(arguments), b.push(c), a.fd.append.apply(a.fd, c)
            }
        }(this)
    }, i && (z[h] = i, a[h] = o), j = a[q], z[q] = j, p = a[q] = function () {
        var a, b, h, i, j, k, p, s, t, u, y, A, C, D, E, F, G;
        return a = -1, G = new z[q], u = {}, C = null, k = void 0, D = void 0, y = void 0, t = function () {
            var b, c, d, e;
            if (y.status = C || G.status, C === a && 10 > w || (y.statusText = G.statusText), C !== a) {
                e = r(G.getAllResponseHeaders());
                for (b in e) d = e[b], y.headers[b] || (c = b.toLowerCase(), y.headers[c] = d)
            }
        }, s = function () {
            G.responseType && "text" !== G.responseType ? "document" === G.responseType ? (y.xml = G.responseXML, y.data = G.responseXML) : y.data = G.response : (y.text = G.responseText, y.data = G.responseText), "responseURL" in G && (y.finalUrl = G.responseURL)
        }, F = function () {
            j.status = y.status, j.statusText = y.statusText
        }, E = function () {
            "text" in y && (j.responseText = y.text), "xml" in y && (j.responseXML = y.xml), "data" in y && (j.response = y.data), "finalUrl" in y && (j.responseURL = y.finalUrl)
        }, i = function (a) {
            for (; a > b && 4 > b;) j[m] = ++b, 1 === b && j[g]("loadstart", {}), 2 === b && F(), 4 === b && (F(), E()), j[g]("readystatechange", {}), 4 === b && setTimeout(h, 0)
        }, h = function () {
            k || j[g]("load", {}), j[g]("loadend", {}), k && (j[m] = 0)
        }, b = 0, A = function (a) {
            var b, d;
            return 4 !== a ? (i(a), void 0) : (b = z.listeners(c), d = function () {
                var a;
                return b.length ? (a = b.shift(), 2 === a.length ? (a(u, y), d()) : 3 === a.length && u.async ? a(u, y, d) : d()) : i(4)
            }, d(), void 0)
        }, j = u.xhr = f(), G.onreadystatechange = function () {
            try {
                2 === G[m] && t()
            } catch (b) {
            }
            4 === G[m] && (D = !1, t(), s()), A(G[m])
        }, p = function () {
            k = !0
        }, j[l]("error", p), j[l]("timeout", p), j[l]("abort", p), j[l]("progress", function () {
            3 > b ? A(3) : j[g]("readystatechange", {})
        }), ("withCredentials" in G || z.addWithCredentials) && (j.withCredentials = !1), j.status = 0, j.open = function (a, c, d, e, f) {
            b = 0, k = !1, D = !1, u.headers = {}, u.headerNames = {}, u.status = 0, y = {}, y.headers = {}, u.method = a, u.url = c, u.async = d !== !1, u.user = e, u.pass = f, A(1)
        }, j.send = function (a) {
            var b, c, f, g, h, i, k, l;
            for (l = ["type", "timeout", "withCredentials"], i = 0, k = l.length; k > i; i++) c = l[i], f = "type" === c ? "responseType" : c, f in j && (u[c] = j[f]);
            u.body = a, h = function () {
                var a, b, d, g, h, i;
                for (x(e, G, j), j.upload && x(e.concat(n), G.upload, j.upload), D = !0, G.open(u.method, u.url, u.async, u.user, u.pass), h = ["type", "timeout", "withCredentials"], d = 0, g = h.length; g > d; d++) c = h[d], f = "type" === c ? "responseType" : c, c in u && (G[f] = u[c]);
                i = u.headers;
                for (a in i) b = i[a], G.setRequestHeader(a, b);
                u.body instanceof o && (u.body = u.body.fd), G.send(u.body)
            }, b = z.listeners(d), g = function () {
                var a, c;
                return b.length ? (a = function (a) {
                    return "object" != typeof a || "number" != typeof a.status && "number" != typeof y.status ? (g(), void 0) : (v(a, y), B.call(a, "data") < 0 && (a.data = a.response || a.text), A(4), void 0)
                }, a.head = function (a) {
                    return v(a, y), A(2)
                }, a.progress = function (a) {
                    return v(a, y), A(3)
                }, c = b.shift(), 1 === c.length ? a(c(u)) : 2 === c.length && u.async ? c(u, a) : a()) : h()
            }, g()
        }, j.abort = function () {
            C = a, D ? G.abort() : j[g]("abort", {})
        }, j.setRequestHeader = function (a, b) {
            var c, d;
            c = null != a ? a.toLowerCase() : void 0, d = u.headerNames[c] = u.headerNames[c] || a, u.headers[d] && (b = u.headers[d] + ", " + b), u.headers[d] = b
        }, j.getResponseHeader = function (a) {
            var b;
            return b = null != a ? a.toLowerCase() : void 0, y.headers[b]
        }, j.getAllResponseHeaders = function () {
            return r(y.headers)
        }, G.overrideMimeType && (j.overrideMimeType = function () {
            return G.overrideMimeType.apply(G, arguments)
        }), G.upload && (j.upload = u.upload = f()), j
    }, "function" == typeof this.define && this.define.amd ? define("jshook", [], function () {
        return z
    }) : (this.exports || this).jshook = z
}.call(this, window), ___onapm_ajax_index = 0, ___oneapm_ajax_array = {}, jshook.before(function (a) {
    ___onapm_ajax_index++, ___onapm_ajax_index > 65500 && (___onapm_ajax_index = 0), a.__index = ___onapm_ajax_index, a.__start = (new Date).getTime()
}), jshook.after(function (a, b) {
    var c, d;
    b.__end = (new Date).getTime(), c = b.__end - a.__start, 0 >= c || (d = {}, d["time"] = c, d["method"] = a.method ? a.method : "unknown", d["url"] = a.url ? a.url : "unknown", d["requestHeader"] = a.headers ? a.headers : "unknown", d["status"] = b.status ? b.status : 0, d["statusText"] = b.statusText ? b.statusText : 0, d["responseHeader"] = b.headers ? b.headers : "unknown", d["data"] = 200 != d["status"] ? b.data ? b.data : "" : "", d["responseUrl"] = b.responseUrl ? b.responseUrl : "", d["starttime"] = a.__start ? a.__start : 0, window._oneapm_webview_1_ ? window.WebViewJavascriptBridge.callHandler("ajaxDataHandler", d, function () {
        oneapm_log("ajax send suc .")
    }) : oneapm_log("cat't find oneapm object named :window._oneapm_webview_1_ "))
}), console.info(" jshook install successful !");