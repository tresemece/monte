/*Inline*/
function udm_(m) {
    var a = "comScore=",
        r = document,
        t = r.cookie,
        h = "",
        b = "indexOf",
        w = "substring",
        f = "length",
        q = 2048,
        k, x = "&ns_",
        e = "&",
        p, s, o, n, g = window,
        v = g.encodeURIComponent || escape;
    if (t[b](a) + 1) {
        for (o = 0, s = t.split(";"), n = s[f]; o < n; o++) {
            p = s[o][b](a);
            (p + 1) && (h = e + unescape(s[o][w](p + a[f])))
        }
    }
    m += x + "_t=" + (+new Date) + x + "c=" + (r.characterSet || r.defaultCharset || "") + "&c8=" + v(r.title) + h + "&c7=" + v(r.URL) + "&c9=" + v(r.referrer);
    if (m[f] > q && m[b](e) > 0) {
        k = m[w](0, q - 8).lastIndexOf(e);
        m = (m[w](0, k) + x + "cut=" + v(m[w](k + 1)))[w](0, q)
    }
    if (r.images) {
        p = new Image;
        if (!g.ns_p) {
            ns_p = p
        }
        p.src = m
    } else {
        r.write("<", "p", "><", 'img src="', m, '" height="1" width="1" alt="*"', "><", "/p", ">")
    }
}(function() {
    var h = document,
        l = window,
        f = false,
        c = true,
        b = "length",
        k = "script",
        j = "indexOf",
        i = "&",
        g = (self.encodeURIComponent ? encodeURIComponent : escape),
        a = /\/c2\/([^\/]+)/i,
        e = ".scorecardresearch.com";
    if (!self.ns_) {
        ns_ = {}
    }
    if (!ns_.crt) {
        ns_.crt = (function() {
            var q = function(t, u) {
                    var s, u = u && document.getElementById ? document.getElementById(u) : h;
                    if (u.getElementsByTagName) {
                        s = u.getElementsByTagName(t)
                    } else {
                        if (t.toLowerCase() == k && document.scripts) {
                            s = document.scripts
                        } else {
                            if (u.all && u.all.tags) {
                                s = u.all.tags(t)
                            }
                        }
                    }
                    return s || []
                },
                o = function(s) {
                    if (s[j]("#") != -1) {
                        s = s.substring(s[j]("#") + 1).replace(/&amp;/gi, i);
                        if (s[j]("sitio_id") >= 0 && s[j]("path") >= 0) {
                            return s.replace(/sitio_id=([^&]*)/i, "ce_sitio_id=$1").replace(/path=([^&]*)/i, function(t, u) {
                                return "ns_name=" + u.replace(/\//g, ".").replace(/(^\.|\.$)/g, "")
                            })
                        }
                    }
                    return f
                },
                d = function(s) {
                    return a.test(s) ? s.match(a)[1] : f
                },
                p = [],
                n = function(s) {
                    udm_(["http", h.URL.charAt(4) == "s" ? "s://sb" : "://b", ".scorecardresearch.com/b?", s].join(""))
                    console.log(udm_(["http", h.URL.charAt(4) == "s" ? "s://sb" : "://b", ".scorecardresearch.com/b?", s].join("")))
                },
                r = function(u) {
                    var w = o(u),
                        s = d(u),
                        v = f;
                    if (w && s) {
                        w = "c2=" + s + i + (/\bc1=/.test(w) ? "" : "c1=2" + i) + w;
                        for (var t = p[b] - 1; t >= 0; t--) {
                            if (w == p[t]) {
                                v = c
                            }
                        }
                        if (!v) {
                            p[p[b]] = w;
                            n(w)
                        }
                    }
                },
                m = function() {
                    if (!document.layers) {
                        var t = q(k);
                        for (var s = t[b] - 1; s >= 0; s--) {
                            r(t[s].src)
                        }
                    }

                };
                
            return {
                tag: r,
                fire: m
            }
        })()
    }
    ns_.crt.fire()

})();
/*Technical*/
typeof ns_ == "undefined" && (ns_ = {}), typeof ns_.b == "undefined" && (ns_.b = {}), ns_.b.ie = eval("/*@cc_on!@*/false"), ns_.b.ie4 = eval("/*@if (@_jscript_version<4) !@end@*/false"), ns_.b.ie7 = ns_.b.ie && /MSIE\s*([7-9]|[1-9]\d+)/i.test(navigator.userAgent) ? !0 : !1, ns_.b.wk = /WebKit/i.test(navigator.userAgent), typeof ns_.ar == "undefined" && (ns_.ar = {}), ns_.ar.is = function(e) {
        return e.constructor == Array
    }, ns_.ar.shift = function(e) {
        if (ns_.ar.is(e) && Array.prototype && typeof Array.prototype.shift == "function") return e.shift();
        for (var t = 0, n = e[0], r = e.length - 1; t < r; t++) e[t] = e[t + 1];
        return e.length--, n
    }, ns_.ar.join = function(e, t) {
        if (typeof Array.prototype.join == "function") return e.join(t);
        var n = "";
        t = t || ",";
        for (var r = 0, i = e.length, s; s = e[r]; r++) n += s + (r != i - 1 ? t : "");
        return n
    }, ns_.ar.indexOf = function(e, t) {
        for (var n = 0, r; r = e[n]; n++)
            if (r == t) return n;
        return -1
    }, ns_.ar.bSearch = function(e, t) {
        var n = e[0],
            r = e[1],
            i, s;
        while (n <= r) {
            i = parseInt(n + (r - n) / 2, 10), s = t.call(this, i);
            if (s < 0) {
                n = i + 1;
                continue
            }
            if (s > 0) {
                r = i - 1;
                continue
            }
            return i
        }
        return -1
    }, typeof ns_.dom == "undefined" && (ns_.dom = {}), ns_.dom.addEvent = window.addEventListener ? function(e, t, n) {
        e.addEventListener(t, n, !1)
    } : document.attachEvent ? function(e, t, n) {
        e.attachEvent("on" + t, n)
    } : function(e, t, n) {
        var r = e["on" + t];
        e["on" + t] = function(e) {
            typeof r == "function" && r(e), n(e)
        }
    }, ns_.tc = ns_.tc || {},
    function() {
        if (ns_.b.ie4) {
            ns_.tc.isTCProfile = function() {
                return !1
            };
            return
        }
        var e = "3.1303.15",
            t = null,
            n = (new Date).getTime(),
            r = /^[^\s\/]*\/\//,
            i = {},
            s = 0,
            o = window,
            u = document;
        ns_.tc.getPX = function() {
            if (!t) {
                var e = o.ns_pixelUrl || (o.ns_p ? o.ns_p.src : "?");
                if (e) {
                    var r = e.split("&"),
                        i = [],
                        s = ["ns__t", "ns_type", "type"],
                        u = function(e) {
                            var t = s.length;
                            while (t--)
                                if (e.indexOf(s[t] + "=") == 0) {
                                    if (s[t] == "ns__t") {
                                        var r = e.split("=");
                                        r.length > 1 && /\d+/.test(r[1]) && (n = r[1])
                                    }
                                    return !0
                                }
                            return !1
                        },
                        a = 0,
                        f = r.length;
                    while (a < f) r[a] && typeof r[a] == "string" && (u(r[a]) || (i[i.length] = r[a])), a++;
                    t = i.join("&")
                }
            }
            return t
        }, ns_.tc.getTime = function() {
            return ns_.tc.getPX(), n
        };
        var a = function(e) {
            var t = u.createElement("a");
            return t.href = e, t.hostname
        };
        ns_.tc.referrerSameDomain = function() {
            return u.referrer && a(u.referrer) == u.domain ? !0 : !1
        }, ns_.tc.isTCProfile = function() {
            return ns_.tc.getPX() && u.referrer && !ns_.tc.referrerSameDomain()
        };
        var f = function(t) {
                if (!t) return;
                var n = [];
                t.ns_type = "hidden", t.ns__t = ns_.tc.getTime(), t.ns_tc_sv = e;
                for (var r in t) n[n.length] = r + "=" + (t[r] != null && typeof t[r] != "undefined" ? escape(t[r].toString()) : "");
                var i = new Image,
                    s = ns_.tc.getPX() + (ns_.tc.getPX()[ns_.tc.getPX().length - 1] != "&" ? "&" : "") + ns_.ar.join(n, "&");
                i.src = s
            },
            l = function(e) {
                for (var t in e) i[t] = e[t];
                s--, s == 0 && f(i)
            };
        ns_.tc.collectUpon = function(e, t, n) {
            s++, ns_.dom.addEvent(e, t, function() {
                l(n())
            })
        }
    }();
ns_.tc.isTCProfile() && !ns_.b.ie4 && function() {
    function i() {
        for (var e in n) r[e] || (n[e] = "")
    }

    function o(e, i) {
        n[e] = (new Date).getTime() - (i || t), r[e] = 1
    }
    var e = (new Date).getTime(),
        t = typeof window["ns_tc_time"] != "undefined" && !isNaN(parseInt(window.ns_tc_time)) ? window.ns_tc_time : typeof window["ns_loadingtime1"] != "undefined" && !isNaN(parseInt(window.ns_loadingtime1)) ? window.ns_loadingtime1 : e,
        n = {
            dom: 0,
            page: 0,
            script: 0
        },
        r = {},
        s = function() {
            var e = new Date,
                t = new Date(e.getFullYear(), 0, 1, 0, 0, 0, 0),
                n = new Date(e.getFullYear(), 6, 1, 0, 0, 0, 0),
                r = t.toGMTString(),
                i = new Date(r.substring(0, r.lastIndexOf(" ") - 1)),
                r = n.toGMTString(),
                s = new Date(r.substring(0, r.lastIndexOf(" ") - 1)),
                o = (t - i) / 36e5,
                u = (n - s) / 36e5,
                a;
            if (o == u) a = 0;
            else {
                var f = o - u;
                f >= 0 && (o = u), a = 1
            }
            var l = function() {
                var e = parseInt(o),
                    t = e;
                o -= parseInt(o), o *= 60;
                var n = parseInt(o);
                o -= parseInt(o), o *= 60;
                var r = parseInt(o);
                return t = e < 10 && e > 0 ? "+0" + e : "+" + e, t = e == 0 ? "0" + e : t, t = e < 0 && e > -10 ? "-0" + Math.abs(e) : t, n = n < 10 ? "0" + n : n, t + ":" + n
            }();
            return {
                zn: l,
                dst: a
            }
        }();
    (function() {
        if (document.addEventListener && !ns_.b.wk) ns_.dom.addEvent(document, "DOMContentLoaded", function() {
            o("dom")
        });
        else if (ns_.b.wk) var t = setInterval(function() {
            /loaded|complete/.test(document.readyState) && (clearInterval(t), o("dom"))
        }, 5);
        else if (ns_.b.ie && !ns_.b.ie4) {
            document.write(unescape('%3Cscript id="ns_technical_script" defer src="//:"%3E%3C%2Fscript%3E'));
            var n = document.getElementById("ns_technical_script");
            n.onreadystatechange = function() {
                this.readyState == "complete" && o("dom")
            }
        }
    })(), o("script", e), ns_.tc.collectUpon(window, "load", function() {
        o("page"), i();
        var e = [],
            t = {
                ns_html_loading_time: n.dom,
                ns_full_loading_time: n.page,
                ns_script_time: n.script,
                ns_timezone: s.zn,
                ns_timedst: s.dst
            };
        return t
    })
}();
ns_.tc.isTCProfile() && !ns_.b.ie4 && function() {
    var e = typeof document.charset != "undefined" ? document.charset : typeof document.characterSet != "undefined" ? document.characterSet : null,
        t = navigator.userAgent || "",
        n = function() {
            var e = Math.max(isNaN(parseInt(window.innerWidth)) ? 0 : parseInt(window.innerWidth), document.body && !isNaN(parseInt(document.body.clientWidth)) ? parseInt(document.body.clientWidth) : 0),
                t = Math.max(isNaN(parseInt(window.innerHeight)) ? 0 : parseInt(window.innerHeight), document.body && !isNaN(parseInt(document.body.clientHeight)) ? parseInt(document.body.clientHeight) : 0);
            return ns_.ar.join([e, t], "x")
        }();
    _sOut = function() {
        var e = [0, 0];
        return screen && (typeof screen["width"] != "undefined" && (e[0] = screen.width), typeof screen["height"] != "undefined" && (e[1] = screen.height)), ns_.ar.join(e, "x")
    }(), ns_.tc.collectUpon(window, "load", function() {
        return {
            ns_charset: e,
            ns_screen: _sOut,
            ns_innersize: n,
            ns_useragent: t
        }
    })
}();
ns_.tc.isTCProfile() && !ns_.b.ie4 && function() {
    function getPluginstoDetect() {
        return ns_.b.ie && window.ns_tc_ieplugins && ns_.ar.is(window.ns_tc_ieplugins) ? window.ns_tc_ieplugins : !ns_.b.ie && window.ns_tc_navplugins && ns_.ar.is(window.ns_tc_navplugins) ? window.ns_tc_navplugins : window.ns_tc_plugins && ns_.ar.is(window.ns_tc_plugins) ? window.ns_tc_plugins : window.ns_ && window.ns_.tmc && window.ns_.tmc.plugins && ns_.ar.is(window.ns_.tmc.plugins) ? window.ns_.tmc.plugins : _dPls
    }

    function addPlugins(e) {
        for (var t = 0, n; n = e[t]; t++) ns_.ar.indexOf(getPluginstoDetect(), n.alias) != -1 && (_pls[_pls.length] = n, n.init())
    }

    function getPlugins() {
        var e = [];
        if (ns_.ar.is(_pls) && _pls.length)
            for (var t = 0, n; n = _pls[t]; t++)
                if (n.detectable && n.enabled) {
                    var r = n.getVer();
                    e[e.length] = n.code + (r ? ":" + r : "")
                }
        return ns_.ar.join(e, "|")
    }
    var _dPls = ["quicktime", "realplayer", "wmp", "shockwave", "flash", "acrobatreader", "silverlight", "googlegears", "vlc", "java"],
        _pls = [],
        _mimeTypes = function() {
            var e = {};
            for (var t = 0; t < navigator.mimeTypes.length; t++) e[navigator.mimeTypes[t].type] ? e[navigator.mimeTypes[t].type].push(navigator.mimeTypes[t]) : e[navigator.mimeTypes[t].type] = [navigator.mimeTypes[t]];
            return e
        }(),
        P = function(e, t, n, r, i) {
            var s = {
                detectable: null,
                getExt: null,
                getVer: null,
                enabled: null,
                aliases: []
            };
            this.options = {};
            if (i)
                for (var o in s) this.options[o] = typeof i[o] != "undefined" ? i[o] : s[o];
            this.code = e, this.alias = t, this.aliases = [this.alias].concat(this.options.aliases), this.mimeTypes = n, this.actX = null, this.actXs = r || [], this.enabled = !0, this.activeX = null, this.navPl = null, this.navMime = null, this.mode = null, this.ver = ""
        };
    P.hasActiveX = !!(ns_.b.ie && !ns_.b.ie4 && window.ActiveXObject), P.M_EXT = 1, P.M_ACTX = 2, P.M_NAV = 3, P.RV = /\d+\S*/, P.prototype.detectable = function() {
            return typeof this.options["detectable"] == "function" ? !!this.options.detectable(this) : !0
        }, P.prototype.getVer = function() {
            var e = P.RV;
            if (!this.ver && this.mode) {
                var t = "";
                return this.options && typeof this.options["getVer"] == "function" && (t = this.options.getVer(this) || ""), !t && this.mode == P.M_NAV ? typeof this.navPl["version"] == "string" && e.test(this.navPl.version) ? t = e.exec(this.navPl.version).toString() : typeof this.navPl["description"] == "string" && e.test(this.navPl.description) ? t = e.exec(this.navPl.description).toString() : typeof this.navPl["name"] == "string" && e.test(this.navPl.name) && (t = e.exec(this.navPl.name).toString()) : !t && this.activeX && (t = "x.x"), this.ver = e.test(t) ? e.exec(t).toString() : "x.x", this.ver
            }
            return this.ver
        }, P.prototype.getActiveX = function() {
            if (P.hasActiveX) {
                var activeX = null,
                    actXs = this.actXs;
                if (!this.activeX) {
                    var arr = [].concat(actXs),
                        progId, activeX = null;
                    while ((progId = ns_.ar.shift(arr)) && !activeX) activeX = eval("try{new ActiveXObject('" + progId + "')}catch(e){false;}"), activeX && (this.actX = progId);
                    return activeX
                }
            }
            return this.activeX
        }, P.prototype.getNavMime = function() {
            if (!this.navMime && !ns_.b.ie && window.navigator && window.navigator.mimeTypes)
                for (var e = 0, t; t = this.mimeTypes[e]; e++)
                    if (_mimeTypes[t])
                        for (var n = 0, r; r = _mimeTypes[t][n]; n++)
                            if (r.enabledPlugin) {
                                if (typeof r["enabledPlugin"]["description"] == "string" && this.hasAlias(r.enabledPlugin.description)) return r;
                                if (typeof r["enabledPlugin"]["name"] == "string" && this.hasAlias(r.enabledPlugin.name)) return r
                            }
            return this.navMime
        }, P.prototype.getNavPl = function() {
            return !this.navPl && this.navMime && this.navMime.enabledPlugin ? this.navMime.enabledPlugin ? this.navMime.enabledPlugin : null : this.navPl
        }, P.prototype.hasAlias = function(e) {
            e = e.toLowerCase();
            for (var t = 0, n; n = this.aliases[t]; t++)
                if (e.indexOf(n) != -1) return !0;
            return !1
        }, P.prototype.init = function() {
            if (this.detectable()) {
                var e = null;
                if (typeof this.options["getExt"] == "function" && (this.extension = this.options.getExt(this))) this.mode = P.M_EXT;
                else if (this.navMime = this.getNavMime()) {
                    if (this.navPl = this.getNavPl()) this.mode = P.M_NAV
                } else if (this.activeX = this.getActiveX()) this.mode = P.M_ACTX;
                if (this.mode && this.options && typeof this.options.enabled == "function") {
                    var t = this.options.enabled(this);
                    typeof t == "boolean" && (this.enabled = t)
                }
            }
        },
        function setPlugins() {
            var plQT = new P(0, "quicktime", ["video/quicktime"], ["QuickTime.QuickTime"]),
                plRP = new P(1, "realplayer", ["audio/x-pn-realaudio-plugin"], ["rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer"], {
                    getVer: function(ref) {
                        return P.hasActiveX ? eval("try{ref.activeX.GetVersionInfo();}catch(e){null;}") : null
                    }
                }),
                plWM = new P(2, "wmp", ["application/x-ms-wmp"], ["WMPlayer.OCX", "MediaPlayer.MediaPlayer.1"], {
                    detectable: /Firefox\/1/i.test(navigator.userAgent),
                    getVer: function(ref) {
                        return P.hasActiveX ? eval("try{ref.activeX.versionInfo;}catch(e){null;}") : null
                    }
                }),
                plSk = new P(3, "shockwave", ["application/x-director"], ["SWCtl.SWCtl"], {
                    getVer: function(ref) {
                        var v = null;
                        if (ref.mode == P.M_ACTX) {
                            var activeX = ref.activeX;
                            if (activeX) {
                                var s = eval("try{!!(typeof(activeX.ShockwaveVersion) != 'undefined')}catch(e){false;}");
                                if (s && ns_.b.ie && !ns_.b.ie4 && !!window.ActiveXObject) return eval("try{activeX.ShockwaveVersion('');}catch(e){null;}")
                            }
                        }
                        return null
                    }
                }),
                plFl = new P(4, "flash", ["application/x-shockwave-flash"], ["ShockwaveFlash.ShockwaveFlash"], {
                    getVer: function(ref) {
                        var v = null,
                            activeX = null;
                        if (P.hasActiveX) {
                            var id = ref.actXs[0];
                            for (var i = 10; i > 0; i--) {
                                activeX = eval("try{new ActiveXObject('" + ref.actXs[0] + "." + i + "')}catch(e){null}");
                                if (activeX) {
                                    v = i;
                                    break
                                }
                            }
                            v >= 7 && (v = eval("try{activeX.GetVariable('$version')}catch(e){v}"))
                        }
                        return v
                    }
                }),
                plAR = new P(5, "acrobatreader", ["application/pdf"], ["PDF.PdfCtrl", "AcroPDF.PDF"], {
                    getVer: function(ref) {
                        return P.hasActiveX && ref.mode == P.M_ACTX && ref.activeX ? eval("try{ref.activeX.GetVersions().split(',')[0]}catch(e){null}") : null
                    },
                    aliases: ["acrobat"]
                }),
                plSL = new P(6, "silverlight", ["application/x-silverlight"], ["AgControl.AgControl"], {
                    getVer: function(ref) {
                        var v = null;
                        if (P.hasActiveX && ref.mode == P.M_ACTX && ref.activeX && ns_.b.ie) {
                            var s = eval("try{!!(ref.activeX['isVersionSupported'] != 'undefined')}catch(e){false}"),
                                vp = function(rg, prefix, postfix) {
                                    typeof prefix == "undefined" && (prefix = ""), typeof postfix == "undefined" && (postfix = "");
                                    var b, i = 0;
                                    return ns_.ar.bSearch.call(this, rg, function(a) {
                                        var rst, ver = prefix + a + postfix;
                                        return eval("try {!!(ref.activeX.isVersionSupported(ver));}catch(e){false;}") ? (b = a, rst = -1) : rst = 1, rst
                                    }), b
                                },
                                ma = vp.call(this, [0, 10], null, ".0"),
                                mi, bld, rev;
                            if (typeof ma == "number") {
                                v = ma, mi = vp.call(this, [0, 10], v + ".");
                                if (typeof mi == "number") {
                                    v = ma + "." + mi, bld = vp.call(this, [0, 1e7], v + ".");
                                    if (typeof bld == "number") {
                                        v = ma + "." + mi + "." + bld;
                                        var rev = vp.call(this, [0, 100], v + ".");
                                        typeof rev == "number" && (v = ma + "." + mi + "." + bld + "." + rev)
                                    }
                                }
                            }
                        }
                        return v
                    }
                }),
                plGG = new P(7, "googlegears", ["application/x-googlegears"], ["Gears.Factory"], {
                    getExt: function() {
                        return !!window.GearsFactory
                    },
                    getVer: function(ref) {
                        return P.hasActiveX && ref.activeX ? eval("try{ref.activeX.getBuildInfo().split(';')[0]}catch(e){null}") : eval("try{(new GearsFactory()).version}catch(e){null}")
                    }
                }),
                plVLC = new P(8, "vlc", ["video/mpeg", "application/x-vlc-plugin"], ["VideoLAN.VLCPlugin.1", "VideoLAN.VLCPlugin.2"], {
                    detectable: !ns_.b.ie7,
                    getVer: function(ref) {
                        return P.hasActiveX && ref.mode == P.M_ACTX && ref.activeX ? eval("try{ref.activeX.VersionInfo;}catch(e){null;}") : null
                    }
                }),
                plJVM = new P(9, "java", ["application/x-java-applet"], ["JavaWebStart.isInstalled.1.7.0.0", "JavaWebStart.isInstalled.1.6.0.0", "JavaWebStart.isInstalled.1.5.0.0", "JavaWebStart.isInstalled.1.4.2.0", "JavaPlugin"], {
                    enabled: function() {
                        return ns_.b.ie ? !0 : typeof navigator != "undefined" && typeof navigator.javaEnabled == "function" ? navigator.javaEnabled() : !1
                    },
                    getVer: function(e) {
                        return P.hasActiveX && e.mode == P.M_ACTX && e.activeX && e.actX ? P.RV.test(e.actX) ? P.RV.exec(e.actX).toString() : null : null
                    }
                });
            addPlugins([plQT, plRP, plWM, plSk, plFl, plAR, plSL, plGG, plVLC, plJVM])
        }(), ns_.tc.collectUpon(window, "load", function() {
            return {
                ns_plugins: getPlugins()
            }
        })
}();