function oneapm_log(a) {
    __enableoneapmLog && "undefined" != typeof console && "undefined" != typeof a && "log" in console && console.log(a)
}

var __enableoneapmLog = !1;
!function () {
    function e(a) {
        return a.sort(function (a, b) {
            return a - b
        })
    }

    function f(a) {
        return "[object Array]" === Object.prototype.toString.call(a) ? !0 : !1
    }

    function g() {
        var b, c, d, f, g, h, j, k, l, m, n, a = "getEntriesByType" in window.performance;
        if (!a) return oneapm_log("html5 feature not support getEntriesByType function  ,will not collect webview data ."), void 0;
        for (b = window.performance.getEntriesByType("resource"), c = 0, d = 0, f = 0, g = 0, h = Array(), j = Array(), k = Array(), i = 0; i < b.length; i++) g = Math.round(b[i].responseEnd - b[i].startTime), "img" == b[i].initiatorType ? (h.push(g), c += g) : "link" == b[i].initiatorType ? (f += g, k.push(g)) : "script" == b[i].initiatorType && (d += g, j.push(g));
        e(h), e(j), e(k), 0 != h.length && (1 == h.length ? (l = {
            count: "1",
            exclusive: c + "",
            max: h[0] + "",
            min: h[0] + "",
            sum_of_squares: "0",
            total: c + "",
            webviewId: window._oneapm_webview_1_ + ""
        }, window.WebViewJavascriptBridge.callHandler("addImageMetric", l, function (a) {
            log("addImageMetric ", a)
        })) : (l = {
            count: h.length + "",
            exclusive: c + "",
            max: h[h.length - 1] + "",
            min: h[0] + "",
            sum_of_squares: "0",
            total: c + "",
            webviewId: window._oneapm_webview_1_ + ""
        }, window.WebViewJavascriptBridge.callHandler("addImageMetric", l, function (a) {
            log("addImageMetric ", a)
        }))), 0 != j.length && (1 == j.length ? (m = {
            count: "1",
            exclusive: +d + "",
            max: +j[0] + "",
            min: +j[0] + "",
            sum_of_squares: "0",
            total: +d + "",
            webviewId: window._oneapm_webview_1_ + ""
        }, window.WebViewJavascriptBridge.callHandler("addScriptMetric", m, function (a) {
            log("addScriptMetric ", a)
        })) : (m = {
            count: j.length - 1 + "",
            exclusive: d + "",
            max: j[j.length - 1] + "",
            min: j[0] + "",
            sum_of_squares: "0",
            total: d + "",
            webviewId: window._oneapm_webview_1_ + ""
        }, window.WebViewJavascriptBridge.callHandler("addScriptMetric", m, function (a) {
            log("addScriptMetric ", a)
        }))), 0 != k.length && (1 == k.length ? (n = {
            count: "1",
            exclusive: f + "",
            max: k[0] + "",
            min: k[0] + "",
            sum_of_squares: "0",
            total: f + "",
            webviewId: window._oneapm_webview_1_ + ""
        }, window.WebViewJavascriptBridge.callHandler("addLinkMetric", n, function (a) {
            log("addLinkMetric ", a)
        })) : (n = {
            count: k.length - 1 + "",
            exclusive: f + "",
            max: k[k.length - 1] + "",
            min: k[0] + "",
            sum_of_squares: "0",
            total: f + "",
            webviewId: window._oneapm_webview_1_ + ""
        }, window.WebViewJavascriptBridge.callHandler("addLinkMetric", n, function (a) {
            log("addLinkMetric ", a)
        })))
    }

    function h() {
        var a = window.performance.timing, b = "about:blank";
        return window.document.URL == b && (b = "about:blank"), {
            url: window.document.URL,
            connectStart: a.connectStart,
            connectEnd: a.connectEnd,
            domComplete: a.domComplete,
            domContentLoadedEventEnd: a.domContentLoadedEventEnd,
            domContentLoadedEventStart: a.domContentLoadedEventStart,
            domInteractive: a.domInteractive,
            domLoading: a.domLoading,
            domainLookupEnd: a.domainLookupEnd,
            domainLookupStart: a.domainLookupStart,
            fetchStart: a.fetchStart,
            loadEventEnd: a.loadEventEnd,
            loadEventStart: a.loadEventStart,
            navigationStart: a.navigationStart,
            redirectEnd: a.redirectEnd,
            redirectStart: a.redirectStart,
            requestStart: a.requestStart,
            responseEnd: a.responseEnd,
            responseStart: a.responseStart,
            secureConnectionStart: a.secureConnectionStart,
            unloadEventEnd: a.unloadEventEnd,
            unloadEventStart: a.unloadEventStart
        }
    }

    function j(a, b) {
        for (var c = a.length; c--;) if (a[c] === b) return !0;
        return !1
    }

    function k() {
        var d, e, f, g, h, a = "getEntriesByType" in window.performance;
        if (!a) return oneapm_log("html5 feature not support getEntriesByType function  ,will not collect webview data ."), void 0;
        for (d = window.performance.getEntriesByType("resource"), e = [], f = 0; f < d.length; f++) g = "" + d[f].name + d[f].startTime, j(b, g) || (c = !0, b.push(g), console.info("new resource resourceList[i].entryType : " + d[f].name + " added ."), h = {
            connectEnd: d[f].connectEnd,
            connectStart: d[f].connectStart,
            domainLookupEnd: d[f].domainLookupEnd,
            domainLookupStart: d[f].domainLookupStart,
            duration: d[f].duration,
            entryType: d[f].entryType,
            fetchStart: d[f].fetchStart,
            initiatorType: d[f].initiatorType,
            name: d[f].name,
            redirectEnd: d[f].redirectEnd,
            redirectStart: d[f].redirectStart,
            requestStart: d[f].requestStart,
            responseEnd: d[f].responseEnd,
            responseStart: d[f].responseStart,
            secureConnectionStart: d[f].secureConnectionStart,
            startTime: d[f].startTime
        }, e.push(h));
        return e
    }

    function l() {
        var a = [];
        return a.push(h()), a.push(k()), c = !1, a
    }

    function m() {
        var b, c, a = window.document.getElementsByTagName("SCRIPT");
        for (b = a.length - 1; b >= 0; b--) if (c = a[b].textContent, c.indexOf("BlueWareGuid") > 0 && c.indexOf("___OneAPM__MI_JS") < 0) return BlueWareGuid = c.substring(c.indexOf("BlueWareGuid") + 15, c.indexOf("BlueWareGuid") + 31);
        return "___OneAPM__MI_JS_BlueWareGuid"
    }

    function n() {
        var b, c, e, f, h, i, j, k, n, o;
        return window.performance.timing && window.performance.timing.navigationStart ? "undefined" == typeof window._oneapm_webview_1_ ? (oneapm_log(" window._oneapm_webview_1_ is undefined !"), void 0) : "undefined" == typeof window.WebViewJavascriptBridge ? (oneapm_log("window.WebViewJavascriptBridge is undefined !"), void 0) : (b = window.performance, c = b.timing, e = c.domComplete - c.navigationStart, f = c.domainLookupEnd - c.domainLookupStart, 0 > e && (e = 0), 0 > f && (f = 0), g(), h = {
            addDomainLookupTime: f + "",
            webviewId: window._oneapm_webview_1_ + ""
        }, window.WebViewJavascriptBridge.callHandler("addDomainLookupTime", h, function () {
        }), i = {
            total_webview_summary: +e + "",
            webviewId: window._oneapm_webview_1_ + ""
        }, window.WebViewJavascriptBridge.callHandler("addTotalWebViewSummary", i, function () {
        }), j = {
            singe_webview_summary: e + "",
            webviewId: window._oneapm_webview_1_ + ""
        }, window.WebViewJavascriptBridge.callHandler("addSingleWebViewSummary", j, function () {
        }), k = l(), n = m(), o = [{}], "undefined" == typeof k ? oneapm_log("resource info's datas  is invalid ") : "undefined" != typeof k[1] && 0 == k[1].length && "undefined" != typeof k[0] && 0 != k[0].length ? (window.WebViewJavascriptBridge.callHandler("fetchPageContent", {
            navigationTiming: k[0],
            resourceTiming: o,
            blueWareGuid: n,
            webviewId: window._oneapm_webview_1_,
            hasResourceTiming: !1
        }, function () {
        }), d = !0) : "undefined" == typeof k[1] && 0 == d ? (window.WebViewJavascriptBridge.callHandler("fetchPageContent", {
            navigationTiming: k[0],
            resourceTiming: o,
            blueWareGuid: n,
            webviewId: window._oneapm_webview_1_,
            hasResourceTiming: !1
        }, function () {
        }), d = !0) : "undefined" != typeof k[1] && "undefined" != typeof k[0] && (window.WebViewJavascriptBridge.callHandler("fetchPageContent", {
            navigationTiming: k[0],
            resourceTiming: k[1],
            blueWareGuid: n,
            webviewId: window._oneapm_webview_1_,
            hasResourceTiming: !0
        }, function () {
        }), d = !0), oneapm_log("webview  interval with 10000 started   ." + a), void 0) : (oneapm_log("html5 feature not support ,will not collect webview data ."), void 0)
    }

    function o() {
        var d = k();
        f(d) && f(b) ? c ? (oneapm_log("new resource found,sampling  ! "), n(), c = !1) : oneapm_log("no new resource found ! ") : oneapm_log("new resource is not an array ,will not reResource! "), a = setTimeout("window.___OneAPM_ReResource()", 1e4)
    }

    function p(a) {
        var b, c, d, e, f, g, h, i;
        return window._oneapm_webview_1_ ? (b = [], c = "undefined" == typeof a.timeStamp ? "" : a.timeStamp, d = "undefined" == typeof a.filename ? "" : a.filename, e = "undefined" == typeof a.error.name ? "" : a.error.name, f = "undefined" == typeof a.message ? "" : a.message, g = "undefined" == typeof a.error.stack ? "" : a.error.stack, h = navigator.userAgent, i = navigator.language, b.push(window._oneapm_webview_1_), b.push(d), b.push(c), b.push(e), b.push(f), b.push(g), b.push(h), b.push(i), window.WebViewJavascriptBridge.callHandler("JsErrorHandler", b, function () {
            oneapm_log("js error send and receive suc !")
        }), void 0) : (oneapm_log("window._oneapm_webview_1_ is undefined!"), void 0)
    }

    var q, a = -1, b = [], c = !1, d = !1;
    window.___OneAPM_ReResource = o, window.addEventListener("error", p, !1), q = window.onunload, window.onunload = function () {
        q && q(), b = [], delete b, clearTimeout(a), a = -1, console.info("  webview  onunload resource cleared  !")
    }, n(), a = setTimeout("window.___OneAPM_ReResource()", 1e4)
}();