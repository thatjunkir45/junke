(() => {
  "use strict";
  var t,
    e = {
      53: (t, e, s) => {
        s(884),
          $(document).ready(function () {
            function t() {
              $("button#send-request").html("Send Request"),
                $("#name").val(""),
                $("#message").val(""),
                setTimeout(function () {
                  $(".result").html("");
                }, 3e3);
            }
            function e() {
              var t = Math.floor(11 * Math.random()) + 10;
              $.ajax({
                url: "https://altair.streamerr.co/json/stream/pola",
                method: "GET",
                dataType: "json",
                success: function (e) {
                  !1 === e.status
                    ? ($("#radio-live-indicator").html(
                        '<div class="hstack gap-2 fw-bolder"><span>Off Air</span><i class="bi bi-mute"></i></div>'
                      ),
                      $("#servertitle").text("No Title Available"),
                      $("#listeners").text(""))
                    : (console.log(e.connections + t),
                      $("#servertitle").text(e.nowplaying),
                      $("#radio-live-indicator").html(
                        '<div class="hstack gap-2 blinker fw-bolder"><span>Live</span><i class="bi bi-broadcast"></i></div>'
                      ),
                      $("#listeners").text(
                        `${e.connections + t} Current Listeners`
                      ),
                      $("#songtitle").text(e.songtitle || ""),
                      $("#max").text(`${e.maxlisteners}`),
                      $("#peak").text(`${e.peaklisteners}`),
                      $("#unique").text(`${e.uniquelisteners}`),
                      $("#streams").text(`${e.streamhits}`));
                },
                error: function (t, e, s) {
                  $("#radio-live-indicator").html(
                    '<div class="hstack gap-2 fw-bolder"><span>Off Air</span><i class="bi bi-mute"></i></div>'
                  );
                },
              });
            }
            $(document).on("click", ".close", function () {
              $(this).closest(".lightbox").remove(), player.destroy();
            }),
              $(document).on("click", ".tut", function () {
                $("body").append(
                  '<div class="lightbox w-100 h-100 position-fixed top-0 start-0 vstack justify-content-center align-items-center frosted-glass-effect z-3 p-5">\n\t\t\t<div class="col-12 col-lg-9 col-xl-8 gap-4 d-flex flex-column align-items-center justify-content-center">\n\t\t\t\t<div class="w-100 bg-dark shadow overflow-hidden rounded-4">\n\t\t\t\t\t<video id="player" playsinline controls data-poster="https://embed-ssl.wistia.com/deliveries/242aa1ff4b65c066403aefda27252662e50a70ff.jpg?image_crop_resized=1280x720">\n\t\t\t\t\t\t<source src="https://polaonbase.com/assets/video/How_To_Bridge_To_Base.mp4" type="video/mp4" />\n\t\t\t\t\t\t<source src="/path/to/video.webm" type="video/webm" />\n\t\t\t\t\t</video>\n\t\t\t\t</div>\n\t\t\t\t<button class="btn btn-lg btn-light fw-bold px-4 close rounded-pill">\n\t\t\t\t\t<i class="bi bi-x-circle"></i>\n\t\t\t\t\t<span>Close Tutorial</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>'
                ),
                  new Plyr("#player");
              }),
              $(document).on("click", "#request-song", function () {
                $("body").append(
                  '<div class="lightbox w-100 h-100 position-fixed top-0 start-0 vstack justify-content-center align-items-center frosted-glass-effect z-3 p-5">\n\t\t\t<form id="request-song-form" class="p-5 bg-white shadow rounded-4 border d-flex flex-column col-12 col-lg-8 col-xl-4 gap-3">\n\t\t\t\t<h5 class="fw-bolder">Request A Song</h5>\n\t\t\t\t<div class="result"></div>\n\t\t\t\t<input id="name" name="name" class="form-control form-control-lg" placeholder="Your name here" />\n\t\t\t\t<textarea class="form-control form-control-lg" id="message" name="message" placeholder="Insert request here"></textarea>\n\t\t\t\t<button type="submit" id="send-request" class="btn btn-md btn-primary fw-bold">\n\t\t\t\t\t<span>Send Request</span>\n\t\t\t\t</button>\n\t\t\t\t<button type="button" class="close btn btn-sm btn-danger fw-bold">\n\t\t\t\t\t<span>Cancel Request</span>\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t</div>'
                );
              }),
              $(document).on("submit", "#request-song-form", function (e) {
                e.preventDefault(),
                  $.ajax({
                    type: "POST",
                    url: "/request",
                    data: $(this).serialize(),
                    dataType: "json",
                    beforeSend: function () {
                      $("button#send-request").html(
                        '<div class="spinner-border spinner-border-sm" role="status"></div> Sending....'
                      );
                    },
                    success: function (e) {
                      "success" === e.status
                        ? ($(".result").html(
                            `<span class="w-100 float-start py-2 px-3 rounded-3 my-2 bg-success text-white fw-bold">${e.message}</span>`
                          ),
                          t())
                        : "error" === e.status &&
                          ($(".result").html(
                            `<span class="w-100 float-start py-2 px-3 rounded-3 my-2 bg-danger text-white fw-bold">${e.message}</span>`
                          ),
                          t());
                    },
                  });
              }),
              $(document).on("click", ".copy", function () {
                var t = $(this).attr("data-text"),
                  e = $(this);
                navigator.clipboard
                  .writeText(t)
                  .then(function () {
                    e.html('<i class="bi bi-clipboard2-check"></i>'),
                      e.removeClass("btn-light").addClass("btn-success"),
                      $(".contact").text("Contract Address Copied");
                  })
                  .catch(function (t) {
                    alert("Error copying text: " + t);
                  });
              }),
              $(document).on("click", "a.polarmy-link", function (t) {
                t.preventDefault();
                var e = $(this).attr("href"),
                  s = window.open(
                    e,
                    "_blank",
                    "width=600,height=800,scrollbars=yes,resizable=yes"
                  );
                s ? s.focus() : alert("Please allow popups for this website");
              }),
              $(window).on("scroll", function () {
                $(window).scrollTop() > 100
                  ? $("header")
                      .removeClass("header-faded")
                      .addClass("bg-white shadow")
                  : $("header")
                      .removeClass("bg-white shadow")
                      .addClass("header-faded");
              }),
              $(document).on("click", ".disclaimer-btn", function () {
                var t = $(this).data("id");
                "risk" === t && $("#risk").toggleClass("d-none"),
                  "legal" === t && $("#legal").toggleClass("d-none");
              }),
              $(document).on("click", 'a[href^="#"]', function (t) {
                t.preventDefault();
                var e = $(this).attr("href"),
                  s = $(e);
                if (s.length) {
                  var n = s.offset().top - 60;
                  $("html, body").animate({ scrollTop: n }, 1e3);
                }
              }),
              $(window)
                .scroll(function () {
                  var t = $(window).scrollTop();
                  $("div.menu-list > a").each(function (e) {
                    var s = $(this).attr("href");
                    s.length > 1 &&
                      $(s).length &&
                      $(s).position().top <= t + 100 &&
                      ($("a.active").removeClass("active"),
                      $("div.menu-list > a").eq(e).addClass("active"));
                  });
                })
                .scroll(),
              $("#downloadApkApp").on("click", function () {
                window.open(
                  "https://polaonbase.com/assets/POLAVPN.apk",
                  "_blank"
                );
              }),
              $("#openRadio").on("click", function () {
                var t = window.open(
                  "https://altair.streamerr.co/public/pola",
                  "_blank",
                  "width=800,height=350"
                );
                t ? t.focus() : alert("Please allow popups for this website");
              }),
              setInterval(e, 6e4),
              e();
          });
      },
    },
    s = {};
  function n(t) {
    var o = s[t];
    if (void 0 !== o) return o.exports;
    var a = (s[t] = { id: t, exports: {} });
    return e[t](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (t = []),
    (n.O = (e, s, o, a) => {
      if (!s) {
        var r = 1 / 0;
        for (d = 0; d < t.length; d++) {
          for (var [s, o, a] = t[d], i = !0, l = 0; l < s.length; l++)
            (!1 & a || r >= a) && Object.keys(n.O).every((t) => n.O[t](s[l]))
              ? s.splice(l--, 1)
              : ((i = !1), a < r && (r = a));
          if (i) {
            t.splice(d--, 1);
            var c = o();
            void 0 !== c && (e = c);
          }
        }
        return e;
      }
      a = a || 0;
      for (var d = t.length; d > 0 && t[d - 1][2] > a; d--) t[d] = t[d - 1];
      t[d] = [s, o, a];
    }),
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
    (n.d = (t, e) => {
      for (var s in e)
        n.o(e, s) &&
          !n.o(t, s) &&
          Object.defineProperty(t, s, { enumerable: !0, get: e[s] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + "");
      var e = n.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var s = e.getElementsByTagName("script");
        if (s.length)
          for (var o = s.length - 1; o > -1 && (!t || !/^http(s?):/.test(t)); )
            t = s[o--].src;
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = t);
    })(),
    (() => {
      n.b = document.baseURI || self.location.href;
      var t = { 792: 0 };
      n.O.j = (e) => 0 === t[e];
      var e = (e, s) => {
          var o,
            a,
            [r, i, l] = s,
            c = 0;
          if (r.some((e) => 0 !== t[e])) {
            for (o in i) n.o(i, o) && (n.m[o] = i[o]);
            if (l) var d = l(n);
          }
          for (e && e(s); c < r.length; c++)
            (a = r[c]), n.o(t, a) && t[a] && t[a][0](), (t[a] = 0);
          return n.O(d);
        },
        s = (self.webpackChunkpublic_html = self.webpackChunkpublic_html || []);
      s.forEach(e.bind(null, 0)), (s.push = e.bind(null, s.push.bind(s)));
    })(),
    (n.nc = void 0);
  var o = n.O(void 0, [884], () => n(53));
  o = n.O(o);
})();
