!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 13));
})([
  function (e, t) {
    (e.exports = function (e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t, r) {
    var n = r(4),
      o = r(5),
      a = r(6),
      i = r(8);
    (e.exports = function (e, t) {
      return n(e) || o(e, t) || a(e, t) || i();
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t, r) {
    "use strict";
    const n = r(9),
      o = r(10),
      a = r(11),
      i = r(12),
      s = Symbol("encodeFragmentIdentifier");
    function u(e) {
      if ("string" != typeof e || 1 !== e.length)
        throw new TypeError(
          "arrayFormatSeparator must be single character string"
        );
    }
    function c(e, t) {
      return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
    }
    function d(e, t) {
      return t.decode ? o(e) : e;
    }
    function l(e) {
      const t = e.indexOf("#");
      return -1 !== t && (e = e.slice(0, t)), e;
    }
    function p(e) {
      const t = (e = l(e)).indexOf("?");
      return -1 === t ? "" : e.slice(t + 1);
    }
    function f(e, t) {
      return (
        t.parseNumbers &&
        !Number.isNaN(Number(e)) &&
        "string" == typeof e &&
        "" !== e.trim()
          ? (e = Number(e))
          : !t.parseBooleans ||
            null === e ||
            ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
            (e = "true" === e.toLowerCase()),
        e
      );
    }
    function m(e, t) {
      u(
        (t = Object.assign(
          {
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1,
          },
          t
        )).arrayFormatSeparator
      );
      const r = (function (e) {
          let t;
          switch (e.arrayFormat) {
            case "index":
              return (e, r, n) => {
                (t = /\[(\d*)\]$/.exec(e)),
                  (e = e.replace(/\[\d*\]$/, "")),
                  t
                    ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                    : (n[e] = r);
              };
            case "bracket":
              return (e, r, n) => {
                (t = /(\[\])$/.exec(e)),
                  (e = e.replace(/\[\]$/, "")),
                  t
                    ? void 0 !== n[e]
                      ? (n[e] = [].concat(n[e], r))
                      : (n[e] = [r])
                    : (n[e] = r);
              };
            case "comma":
            case "separator":
              return (t, r, n) => {
                const o =
                    "string" == typeof r && r.includes(e.arrayFormatSeparator),
                  a =
                    "string" == typeof r &&
                    !o &&
                    d(r, e).includes(e.arrayFormatSeparator);
                r = a ? d(r, e) : r;
                const i =
                  o || a
                    ? r.split(e.arrayFormatSeparator).map((t) => d(t, e))
                    : null === r
                    ? r
                    : d(r, e);
                n[t] = i;
              };
            case "bracket-separator":
              return (t, r, n) => {
                const o = /(\[\])$/.test(t);
                if (((t = t.replace(/\[\]$/, "")), !o))
                  return void (n[t] = r ? d(r, e) : r);
                const a =
                  null === r
                    ? []
                    : r.split(e.arrayFormatSeparator).map((t) => d(t, e));
                void 0 !== n[t] ? (n[t] = [].concat(n[t], a)) : (n[t] = a);
              };
            default:
              return (e, t, r) => {
                void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
              };
          }
        })(t),
        n = Object.create(null);
      if ("string" != typeof e) return n;
      if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
      for (const o of e.split("&")) {
        if ("" === o) continue;
        let [e, i] = a(t.decode ? o.replace(/\+/g, " ") : o, "=");
        (i =
          void 0 === i
            ? null
            : ["comma", "separator", "bracket-separator"].includes(
                t.arrayFormat
              )
            ? i
            : d(i, t)),
          r(d(e, t), i, n);
      }
      for (const e of Object.keys(n)) {
        const r = n[e];
        if ("object" == typeof r && null !== r)
          for (const e of Object.keys(r)) r[e] = f(r[e], t);
        else n[e] = f(r, t);
      }
      return !1 === t.sort
        ? n
        : (!0 === t.sort
            ? Object.keys(n).sort()
            : Object.keys(n).sort(t.sort)
          ).reduce((e, t) => {
            const r = n[t];
            return (
              Boolean(r) && "object" == typeof r && !Array.isArray(r)
                ? (e[t] = (function e(t) {
                    return Array.isArray(t)
                      ? t.sort()
                      : "object" == typeof t
                      ? e(Object.keys(t))
                          .sort((e, t) => Number(e) - Number(t))
                          .map((e) => t[e])
                      : t;
                  })(r))
                : (e[t] = r),
              e
            );
          }, Object.create(null));
    }
    (t.extract = p),
      (t.parse = m),
      (t.stringify = (e, t) => {
        if (!e) return "";
        u(
          (t = Object.assign(
            {
              encode: !0,
              strict: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
            },
            t
          )).arrayFormatSeparator
        );
        const r = (r) =>
            (t.skipNull && null == e[r]) || (t.skipEmptyString && "" === e[r]),
          n = (function (e) {
            switch (e.arrayFormat) {
              case "index":
                return (t) => (r, n) => {
                  const o = r.length;
                  return void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                    ? r
                    : null === n
                    ? [...r, [c(t, e), "[", o, "]"].join("")]
                    : [...r, [c(t, e), "[", c(o, e), "]=", c(n, e)].join("")];
                };
              case "bracket":
                return (t) => (r, n) =>
                  void 0 === n ||
                  (e.skipNull && null === n) ||
                  (e.skipEmptyString && "" === n)
                    ? r
                    : null === n
                    ? [...r, [c(t, e), "[]"].join("")]
                    : [...r, [c(t, e), "[]=", c(n, e)].join("")];
              case "comma":
              case "separator":
              case "bracket-separator": {
                const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                return (r) => (n, o) =>
                  void 0 === o ||
                  (e.skipNull && null === o) ||
                  (e.skipEmptyString && "" === o)
                    ? n
                    : ((o = null === o ? "" : o),
                      0 === n.length
                        ? [[c(r, e), t, c(o, e)].join("")]
                        : [[n, c(o, e)].join(e.arrayFormatSeparator)]);
              }
              default:
                return (t) => (r, n) =>
                  void 0 === n ||
                  (e.skipNull && null === n) ||
                  (e.skipEmptyString && "" === n)
                    ? r
                    : null === n
                    ? [...r, c(t, e)]
                    : [...r, [c(t, e), "=", c(n, e)].join("")];
            }
          })(t),
          o = {};
        for (const t of Object.keys(e)) r(t) || (o[t] = e[t]);
        const a = Object.keys(o);
        return (
          !1 !== t.sort && a.sort(t.sort),
          a
            .map((r) => {
              const o = e[r];
              return void 0 === o
                ? ""
                : null === o
                ? c(r, t)
                : Array.isArray(o)
                ? 0 === o.length && "bracket-separator" === t.arrayFormat
                  ? c(r, t) + "[]"
                  : o.reduce(n(r), []).join("&")
                : c(r, t) + "=" + c(o, t);
            })
            .filter((e) => e.length > 0)
            .join("&")
        );
      }),
      (t.parseUrl = (e, t) => {
        t = Object.assign({ decode: !0 }, t);
        const [r, n] = a(e, "#");
        return Object.assign(
          { url: r.split("?")[0] || "", query: m(p(e), t) },
          t && t.parseFragmentIdentifier && n
            ? { fragmentIdentifier: d(n, t) }
            : {}
        );
      }),
      (t.stringifyUrl = (e, r) => {
        r = Object.assign({ encode: !0, strict: !0, [s]: !0 }, r);
        const n = l(e.url).split("?")[0] || "",
          o = t.extract(e.url),
          a = t.parse(o, { sort: !1 }),
          i = Object.assign(a, e.query);
        let u = t.stringify(i, r);
        u && (u = "?" + u);
        let d = (function (e) {
          let t = "";
          const r = e.indexOf("#");
          return -1 !== r && (t = e.slice(r)), t;
        })(e.url);
        return (
          e.fragmentIdentifier &&
            (d =
              "#" + (r[s] ? c(e.fragmentIdentifier, r) : e.fragmentIdentifier)),
          `${n}${u}${d}`
        );
      }),
      (t.pick = (e, r, n) => {
        n = Object.assign({ parseFragmentIdentifier: !0, [s]: !1 }, n);
        const { url: o, query: a, fragmentIdentifier: u } = t.parseUrl(e, n);
        return t.stringifyUrl(
          { url: o, query: i(a, r), fragmentIdentifier: u },
          n
        );
      }),
      (t.exclude = (e, r, n) => {
        const o = Array.isArray(r) ? (e) => !r.includes(e) : (e, t) => !r(e, t);
        return t.pick(e, o, n);
      });
  },
  function (e, t) {
    e.exports = {
      CONTENT_API_BASEURL: "https://content-api.changenow.io",
      DASHBOARD_API_BASE_URL: "https://vip-api.changenow.io",
      API_URL: "https://api.changenow.io/v1/",
      API_KEY:
        "07c68a80cc1582087df7509f51a8a8b29eb5ec3f13db8c40a7633c6b1801b832",
      DEFAULT_FIAT: "eur",
      API_URL_V2: "https://api.changenow.io/v2",
      FRONT_URL: "https://changenow.io",
    };
  },
  function (e, t) {
    (e.exports = function (e) {
      if (Array.isArray(e)) return e;
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t) {
    (e.exports = function (e, t) {
      var r =
        null == e
          ? null
          : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
      if (null != r) {
        var n,
          o,
          a = [],
          i = !0,
          s = !1;
        try {
          for (
            r = r.call(e);
            !(i = (n = r.next()).done) &&
            (a.push(n.value), !t || a.length !== t);
            i = !0
          );
        } catch (e) {
          (s = !0), (o = e);
        } finally {
          try {
            i || null == r.return || r.return();
          } finally {
            if (s) throw o;
          }
        }
        return a;
      }
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t, r) {
    var n = r(7);
    (e.exports = function (e, t) {
      if (e) {
        if ("string" == typeof e) return n(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === r && e.constructor && (r = e.constructor.name),
          "Map" === r || "Set" === r
            ? Array.from(e)
            : "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? n(e, t)
            : void 0
        );
      }
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t) {
    (e.exports = function (e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t) {
    (e.exports = function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t, r) {
    "use strict";
    e.exports = (e) =>
      encodeURIComponent(e).replace(
        /[!'()*]/g,
        (e) => "%" + e.charCodeAt(0).toString(16).toUpperCase()
      );
  },
  function (e, t, r) {
    "use strict";
    var n = new RegExp("%[a-f0-9]{2}", "gi"),
      o = new RegExp("(%[a-f0-9]{2})+", "gi");
    function a(e, t) {
      try {
        return decodeURIComponent(e.join(""));
      } catch (e) {}
      if (1 === e.length) return e;
      t = t || 1;
      var r = e.slice(0, t),
        n = e.slice(t);
      return Array.prototype.concat.call([], a(r), a(n));
    }
    function i(e) {
      try {
        return decodeURIComponent(e);
      } catch (o) {
        for (var t = e.match(n), r = 1; r < t.length; r++)
          t = (e = a(t, r).join("")).match(n);
        return e;
      }
    }
    e.exports = function (e) {
      if ("string" != typeof e)
        throw new TypeError(
          "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"
        );
      try {
        return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
      } catch (t) {
        return (function (e) {
          for (var t = { "%FE%FF": "��", "%FF%FE": "��" }, r = o.exec(e); r; ) {
            try {
              t[r[0]] = decodeURIComponent(r[0]);
            } catch (e) {
              var n = i(r[0]);
              n !== r[0] && (t[r[0]] = n);
            }
            r = o.exec(e);
          }
          t["%C2"] = "�";
          for (var a = Object.keys(t), s = 0; s < a.length; s++) {
            var u = a[s];
            e = e.replace(new RegExp(u, "g"), t[u]);
          }
          return e;
        })(e);
      }
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = (e, t) => {
      if ("string" != typeof e || "string" != typeof t)
        throw new TypeError("Expected the arguments to be of type `string`");
      if ("" === t) return [e];
      const r = e.indexOf(t);
      return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)];
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      for (
        var r = {}, n = Object.keys(e), o = Array.isArray(t), a = 0;
        a < n.length;
        a++
      ) {
        var i = n[a],
          s = e[i];
        (o ? -1 !== t.indexOf(i) : t(i, s, e)) && (r[i] = s);
      }
      return r;
    };
  },
  function (e, t, r) {
    "use strict";
    r.r(t);
    r(0);
    var n = r(1),
      o = r.n(n),
      a = r(2),
      i = r.n(a);
    Math.pow(10, 8);
    var s = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      },
      u = function (e, t, r) {
        var n,
          o = s[e];
        return (
          (n =
            "string" == typeof o
              ? o
              : 1 === t
              ? o.one
              : o.other.replace("{{count}}", t.toString())),
          null != r && r.addSuffix
            ? r.comparison && r.comparison > 0
              ? "in " + n
              : n + " ago"
            : n
        );
      };
    function c(e) {
      return function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = t.width ? String(t.width) : e.defaultWidth,
          n = e.formats[r] || e.formats[e.defaultWidth];
        return n;
      };
    }
    var d = {
        date: c({
          formats: {
            full: "EEEE, MMMM do, y",
            long: "MMMM do, y",
            medium: "MMM d, y",
            short: "MM/dd/yyyy",
          },
          defaultWidth: "full",
        }),
        time: c({
          formats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a",
          },
          defaultWidth: "full",
        }),
        dateTime: c({
          formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
          },
          defaultWidth: "full",
        }),
      },
      l = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
      };
    function p(e) {
      return function (t, r) {
        var n,
          o = r || {};
        if (
          "formatting" === (o.context ? String(o.context) : "standalone") &&
          e.formattingValues
        ) {
          var a = e.defaultFormattingWidth || e.defaultWidth,
            i = o.width ? String(o.width) : a;
          n = e.formattingValues[i] || e.formattingValues[a];
        } else {
          var s = e.defaultWidth,
            u = o.width ? String(o.width) : e.defaultWidth;
          n = e.values[u] || e.values[s];
        }
        return n[e.argumentCallback ? e.argumentCallback(t) : t];
      };
    }
    function f(e) {
      return function (t) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = r.width,
          o = (n && e.matchPatterns[n]) || e.matchPatterns[e.defaultMatchWidth],
          a = t.match(o);
        if (!a) return null;
        var i,
          s = a[0],
          u = (n && e.parsePatterns[n]) || e.parsePatterns[e.defaultParseWidth],
          c = Array.isArray(u)
            ? h(u, function (e) {
                return e.test(s);
              })
            : m(u, function (e) {
                return e.test(s);
              });
        (i = e.valueCallback ? e.valueCallback(c) : c),
          (i = r.valueCallback ? r.valueCallback(i) : i);
        var d = t.slice(s.length);
        return { value: i, rest: d };
      };
    }
    function m(e, t) {
      for (var r in e) if (e.hasOwnProperty(r) && t(e[r])) return r;
    }
    function h(e, t) {
      for (var r = 0; r < e.length; r++) if (t(e[r])) return r;
    }
    var g;
    p({
      values: {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"],
      },
      defaultWidth: "wide",
    }),
      p({
        values: {
          narrow: ["1", "2", "3", "4"],
          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
          wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        },
        defaultWidth: "wide",
        argumentCallback: function (e) {
          return e - 1;
        },
      }),
      p({
        values: {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        defaultWidth: "wide",
      }),
      p({
        values: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
        defaultWidth: "wide",
      }),
      p({
        values: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
        },
        defaultWidth: "wide",
        formattingValues: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
        },
        defaultFormattingWidth: "wide",
      }),
      (g = {
        matchPattern: /^(\d+)(th|st|nd|rd)?/i,
        parsePattern: /\d+/i,
        valueCallback: function (e) {
          return parseInt(e, 10);
        },
      }),
      f({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated:
            /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: { any: [/^b/i, /^(a|c)/i] },
        defaultParseWidth: "any",
      }),
      f({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
        defaultParseWidth: "any",
        valueCallback: function (e) {
          return e + 1;
        },
      }),
      f({
        matchPatterns: {
          narrow: /^[jfmasond]/i,
          abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
          wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
          any: [
            /^ja/i,
            /^f/i,
            /^mar/i,
            /^ap/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^au/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
        },
        defaultParseWidth: "any",
      }),
      f({
        matchPatterns: {
          narrow: /^[smtwf]/i,
          short: /^(su|mo|tu|we|th|fr|sa)/i,
          abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
          wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
          any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
        },
        defaultParseWidth: "any",
      }),
      f({
        matchPatterns: {
          narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
          any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
        },
        defaultMatchWidth: "any",
        parsePatterns: {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
          },
        },
        defaultParseWidth: "any",
      });
    var y = function (e) {
        return "string" == typeof e ? e.toLowerCase() : e;
      },
      b = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",";
        return decodeURI(e)
          .split(t)
          .map(function (e) {
            return y(e.trim());
          });
      },
      v = r(3);
    v.DEFAULT_FIAT;
    var k = function (e) {
        var t = Number(e);
        return Number.isNaN(t) ? 1 : t;
      },
      w = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return i.a.stringify(e);
      },
      x = document.getElementById("iframe-widget");
    null === x && console.error("EXCHANGE WIDGET: iframe-widget not found");
    var F = (function (e) {
        var t = {};
        e &&
          "string" == typeof e &&
          e
            .slice(1, e.length)
            .split("&")
            .forEach(function (e) {
              var r = e.split("="),
                n = o()(r, 2),
                a = n[0],
                i = n[1],
                s = escape(i);
              if ("undefined" !== s && "" !== s)
                switch (a) {
                  case "from":
                    t.fromTicker = s;
                    break;
                  case "to":
                    t.toTicker = s;
                    break;
                  case "fromFiat":
                    t.fromTickerFiat = s;
                    break;
                  case "toFiat":
                    t.toTickerFiat = s;
                    break;
                  case "isFiat":
                    t.isFiat = "true" === s;
                    break;
                  case "amount":
                    t.amount = k(s);
                    break;
                  case "amountFiat":
                    t.amountFiat = k(s);
                    break;
                  case "amountTo":
                    t.amountTo = k(s);
                    break;
                  case "activeTab":
                    t.activeTab = s;
                    break;
                  case "mode":
                    t.mode = s;
                    break;
                  case "isCheckTx":
                    t.isCheckTx = "true" === s;
                    break;
                  case "fromAmount":
                    t.fromAmount = k(s);
                    break;
                  case "fromCurrency":
                    t.fromCurrency = s;
                    break;
                  case "toCurrency":
                    t.toCurrency = s;
                    break;
                  case "fromNetwork":
                    t.fromNetwork = s;
                    break;
                  case "toNetwork":
                    t.toNetwork = s;
                    break;
                  case "FAQ":
                    t.faq = "true" === s;
                    break;
                  case "logo":
                    t.logo = "true" === s;
                    break;
                  case "address":
                    t.recipientAddress = s;
                    break;
                  case "link_id":
                    t.linkId = s;
                    break;
                  case "userId":
                    t.userId = s;
                    break;
                  case "locales":
                    t.locales = "true" === s;
                    break;
                  case "lang":
                    t.lang = s;
                    break;
                  case "currencies_from":
                    t.availableFromCurrencies = b(i);
                    break;
                  case "currencies_to":
                    t.availableToCurrencies = b(i);
                    break;
                  case "alone":
                    t.alone = "true" === s;
                    break;
                  case "toTheMoon":
                    t.toTheMoon = "true" === s;
                    break;
                  case "horizontal":
                    t.horizontal = "true" === s;
                    break;
                  case "isLedger":
                    t.isLedger = "true" === s;
                    break;
                  case "primaryColor":
                    t.primaryColor = s;
                    break;
                  case "darkMode":
                    t.darkMode = "true" === s;
                    break;
                  case "backgroundColor":
                    t.backgroundColor = s;
                    break;
                  case "configuratorType":
                    t.configuratorType = s;
                    break;
                  case "topUpMode":
                    t.topUpMode = "true" === s;
                    break;
                  case "topUpCurrency":
                    t.topUpCurrency = s;
                    break;
                  case "topUpNetwork":
                    t.topUpNetwork = s;
                    break;
                  case "topUpAddress":
                    t.topUpAddress = s;
                    break;
                  case "topUpExtraId":
                    t.topUpExtraId = s;
                    break;
                  case "isReverse":
                    t.reverse = "true" === s;
                    break;
                  case "stepperDarkMode":
                    t.stepperDarkMode = "true" === s;
                    break;
                  case "stepperBackgroundColor":
                    t.stepperBackgroundColor = s;
                    break;
                  case "stepperFullScreen":
                    t.stepperFullScreen = "true" === s;
                    break;
                  case "closeButtonHidden":
                    t.closeButtonHidden = "true" === s;
                }
            });
        return t;
      })(x ? x.src : window.location.search),
      M = F.fromTicker,
      C = F.toTicker,
      A = F.fromTickerFiat,
      T = F.toTickerFiat,
      j = F.isFiat,
      S = F.fromAmount,
      U = F.amount,
      I = F.amountFiat,
      O = F.faq,
      E = F.logo,
      N = F.locales,
      _ = F.lang,
      P = F.linkId,
      W = F.userId,
      B = F.horizontal,
      R = F.toTheMoon,
      L = F.primaryColor,
      D = F.fixedRate,
      q = F.isLedger,
      z = F.topUpMode,
      H = F.topUpCurrency,
      $ = F.topUpNetwork,
      J = F.topUpAddress,
      X = F.topUpExtraId,
      Q = F.darkMode,
      V = F.backgroundColor,
      Y = F.amountTo,
      G = F.from,
      K = F.to,
      Z = F.stepperDarkMode,
      ee = F.stepperBackgroundColor,
      te = F.stepperFullScreen,
      re = F.closeButtonHidden;
    if (x) {
      var ne = w({
        from: null != M ? M : G,
        to: null != C ? C : K,
        amount: null != S ? S : U,
        fromFiat: A,
        toFiat: T,
        amountFiat: I,
        isFiat: j,
        faq: O,
        logo: E,
        locales: N,
        lang: _,
        link_id: P,
        horizontal: B,
        primaryColor: L,
        toTheMoon: R,
        fixedRate: D,
        isLedger: q,
        topUpMode: z,
        topUpCurrency: H,
        topUpNetwork: $,
        topUpAddress: J,
        topUpExtraId: X,
        darkMode: Q,
        backgroundColor: V,
        amountTo: Y,
        stepperDarkMode: Z,
        stepperBackgroundColor: ee,
        stepperFullScreen: te,
        closeButtonHidden: re,
      });
      x.src = ""
        .concat(
          "https://changenow.io/embeds/exchange-widget/v2/widget.html",
          "?"
        )
        .concat(ne);
    }
    window.addEventListener(
      "message",
      function (e) {
        if ("Guardarian" === e.data.messageText) {
          var t = e.data.redirectUrl;
          t && window.open(t, "_blank");
        }
        "Close modal" === e.data.messageText &&
          document.querySelector(".wrapper-iframe").remove();
        if ("Open modal" === e.data.messageText) {
          var r = e.data.dataQuery,
            n = document.createElement("iframe"),
            o = document.createElement("div");
          (o.className = "wrapper-iframe"),
            (o.style.cssText =
              "\n      position: fixed;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n      height: 100vh;\n      width: 100vw;\n      z-index: 10000000000;\n    "),
            window.document.body.appendChild(o);
          var a = escape(r.linkId ? r.linkId : ""),
            i = w({
              fromCurrency: r.fromCurrency,
              toCurrency: r.toCurrency,
              fromNetwork: r.fromNetwork,
              toNetwork: r.toNetwork,
              fromAmount: r.fromAmount,
              userId: W,
              link_id: a,
              address: r.recipientAddress,
              logo: r.logo,
              FAQ: r.FAQ,
              rate: r.rate,
              lang: r.lang,
              locales: r.locales,
              isCheckTx: r.isCheckTx,
              currencies_from: r.availableFromCurrencies,
              currencies_to: r.availableToCurrencies,
              mode: r.mode,
              activeTab: r.activeTab,
              toTheMoon: r.toTheMoon,
              primaryColor: r.primaryColor,
              isLedger: r.isLedger,
              topUpMode: r.topUpMode,
              topUpCurrency: r.topUpCurrency,
              topUpNetwork: r.topUpNetwork,
              topUpAddress: r.topUpAddress,
              topUpExtraId: r.topUpExtraId,
              isReverse: r.reverse,
              amountTo: r.amountTo,
              from: null == r ? void 0 : r.from,
              to: null == r ? void 0 : r.to,
              fromFiat: null == r ? void 0 : r.fromFiat,
              toFiat: null == r ? void 0 : r.toFiat,
              amount: null == r ? void 0 : r.amount,
              amountFiat: null == r ? void 0 : r.amountFiat,
              stepperDarkMode: null == r ? void 0 : r.stepperDarkMode,
              stepperBackgroundColor:
                null == r ? void 0 : r.stepperBackgroundColor,
              stepperFullScreen: null == r ? void 0 : r.stepperFullScreen,
              closeButtonHidden: null == r ? void 0 : r.closeButtonHidden,
            });
          (n.src = ""
            .concat(
              "https://changenow.io/embeds/exchange-widget/v2/stepper.html",
              "?"
            )
            .concat(i)),
            (n.style.cssText = "width: 100%; height: 100%; border: none"),
            (n.id = "iframe-stepper"),
            (n.allow = "camera *"),
            o.appendChild(n);
        }
      },
      !1
    );
  },
]);
