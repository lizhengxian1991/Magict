function oneapm_log(a) {
    __enableoneapmLog && "undefined" != typeof console && "undefined" != typeof a && "log" in console && console.log(a)
}

var __enableoneapmLog = !1;
!function () {
    function i(b) {
        a = b.createElement("iframe"), a.style.display = "none", b.documentElement.appendChild(a)
    }

    function j(a) {
        var b, d;
        if (WebViewJavascriptBridge._messageHandler) throw new Error("WebViewJavascriptBridge.init called twice");
        for (WebViewJavascriptBridge._messageHandler = a, b = c, c = null, d = 0; d < b.length; d++) p(b[d])
    }

    function k(a, b) {
        n({data: a}, b)
    }

    function l(a, b) {
        d[a] = b
    }

    function m(a, b, c) {
        n({handlerName: a, data: b}, c)
    }

    function n(c, d) {
        if (d) {
            var i = "cb_" + h++ + "_" + (new Date).getTime();
            g[i] = d, c["callbackId"] = i
        }
        b.push(c), a.src = e + "://" + f
    }

    function o() {
        var a = JSON.stringify(b);
        return b = [], a
    }

    function p(a) {
        setTimeout(function () {
            var e, f, h, b = JSON.parse(a);
            if (b.responseId) {
                if (e = g[b.responseId], !e) return;
                e(b.responseData), delete g[b.responseId]
            } else {
                b.callbackId && (f = b.callbackId, e = function (a) {
                    n({responseId: f, responseData: a})
                }), h = WebViewJavascriptBridge._messageHandler, b.handlerName && (h = d[b.handlerName]);
                try {
                    h(b.data, e)
                } catch (i) {
                    "undefined" != typeof console && console.log("WebViewJavascriptBridge: WARNING: javascript handler threw.", b, i)
                }
            }
        })
    }

    function q(a) {
        c ? c.push(a) : p(a)
    }

    function t(a) {
        "undefined" != typeof window.WebViewJavascriptBridge ? a(WebViewJavascriptBridge) : document.addEventListener("WebViewJavascriptBridgeReady", function () {
            a(WebViewJavascriptBridge)
        }, !1)
    }

    var a, b, c, d, e, f, g, h, r, s;
    window.WebViewJavascriptBridge || (b = [], c = [], d = {}, e = "oneapmexec", f = "__ONEAPM_WEBVIEW_QUEUE_MESSAGE__", g = {}, h = 1, window.WebViewJavascriptBridge = {
        init: j,
        send: k,
        registerHandler: l,
        callHandler: m,
        _fetchQueue: o,
        _handleMessageFromObjC: q
    }, r = document, i(r), s = r.createEvent("Events"), s.initEvent("WebViewJavascriptBridgeReady"), s.bridge = WebViewJavascriptBridge, r.dispatchEvent(s), t(function (a) {
        oneapm_log("install _oneapm_connectWebViewJavascriptBridge invoke bridge"), a.init(function () {
            oneapm_log("install init successful")
        }), a.registerHandler("registerOnepmWebViewIdHandler", function (a, b) {
            var c;
            a = JSON.parse(a), "undefined" != typeof a && "undefined" != typeof a.webviewId ? (window._oneapm_webview_1_ = a.webviewId, c = {register: "suc"}, oneapm_log(" webview id " + window._oneapm_webview_1_), b(c), oneapm_log("register webview id  and  invoke successful ! ")) : (c = {register: "fail"}, b(c))
        }), oneapm_log("connect webview javascript bridge successful ! ")
    }))
}();