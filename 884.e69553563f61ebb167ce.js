"use strict";
(self.webpackChunkpublic_html = self.webpackChunkpublic_html || []).push([
  [884],
  {
    933: (n, t, e) => {
      e.d(t, { A: () => m });
      var i = e(601),
        a = e.n(i),
        r = e(314),
        o = e.n(r),
        l = e(865),
        s = e(958),
        d = o()(a());
      d.push([
        n.id,
        "@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css);",
      ]),
        d.push([
          n.id,
          "@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css);",
        ]),
        d.push([n.id, "@import url(https://use.typekit.net/uys0nzu.css);"]),
        d.push([
          n.id,
          "@import url(https://necolas.github.io/normalize.css/latest/normalize.css);",
        ]),
        d.push([n.id, "@import url(https://use.typekit.net/uoy8lmg.css);"]),
        d.i(l.A),
        d.i(s.A),
        d.push([n.id, "\n", ""]);
      const m = d;
    },
    958: (n, t, e) => {
      e.d(t, { A: () => G });
      var i = e(601),
        a = e.n(i),
        r = e(314),
        o = e.n(r),
        l = e(417),
        s = e.n(l),
        d = new URL(e(759), e.b),
        m = new URL(e(636), e.b),
        c = new URL(e(357), e.b),
        f = new URL(e(817), e.b),
        b = new URL(e(292), e.b),
        g = new URL(e(327), e.b),
        h = new URL(e(501), e.b),
        p = new URL(e(231), e.b),
        w = new URL(e(430), e.b),
        v = new URL(e(536), e.b),
        u = new URL(e(572), e.b),
        k = new URL(e(704), e.b),
        y = new URL(e(715), e.b),
        x = new URL(e(730), e.b),
        z = o()(a()),
        C = s()(d),
        S = s()(m),
        T = s()(c),
        L = s()(f),
        R = s()(b),
        U = s()(g),
        $ = s()(h),
        M = s()(p),
        A = s()(w),
        I = s()(v),
        E = s()(u),
        F = s()(k),
        j = s()(y),
        _ = s()(x);
      z.push([
        n.id,
        `:root {\n\t--bs-blue-1:#a3d6d0;\n\t--bs-blue-2:#72b1b1;\n\t--bs-blue-3:#e2eff7;\n\t--bs-blue-4:#305473;\n\t\n\t--bs-gray-1:#c4c6c5;\n\t--bs-gray-2:#a7a7a7;\n\t--bs-gray-3:#ededed;\n\t\n\t--opacity-1:rgba(0,0,0,0.5);\n\t--opacity-2:rgba(0,0,0,0.15);\n\t--opacity-3:rgba(0,0,0,0.25);\n\t--opacity-4:rgba(0,0,0,0.55);\n\t--opacity-5:rgba(0,0,0,0.75);\n\t\n\t--opacity-6:rgba(255,255,255,0.5);\n\t--opacity-7:rgba(255,255,255,0.15);\n\t--opacity-8:rgba(255,255,255,0.25);\n\t--opacity-9:rgba(255,255,255,0.55);\n\t--opacity-10:rgba(255,255,255,0.75);\n}\n\nhtml {\n\tbackground:transparent; \n\tzoom:100%;\n}\n\nbody{\n\tline-height:18px;\n\toverflow-x: hidden;\n\tbackground-color:var(--bs-blue-3);\n\theight:100%;\n\twidth:100%;\n\tfont-family: "montserrat", sans-serif;\n\tfont-size: 100%; \n\t\n\t-webkit-font-smoothing:antialiased;\n\t-webkit-transition:opacity 0.3s, -webkit-transform 0.3s;\n\t-webkit-font-smoothing:antialiased;\n\t-moz-osx-font-smoothing:grayscale;\n\t\n\ttransition:opacity 0.3s, transform 0.3s;\n   \ttransition:background-color .1s;\n\t-moz-transition:background-color .1s linear;\n\t-webkit-transition:background-color .1s linear;\n}\n\n/*\n * Fix browser defanavt design\n */\n\nhtml, body, div, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, acronym, address, big, cite, code,\ndel, dfn, font, img, ins, kbd, q, s, samp, tt, var, center,\ndl, dt, dd, ol, nav, ul, li,\nfieldset, form, label, legend, input, button, textarea, select,\ntable, caption, tbody, tfoot, thead, tr, th, td{\n\tmargin:0;\n\tpadding:0;\n\tborder:0;\n\toutline:0;\n\tlist-style:none;\n}\n\n*:focus {\n  outline:0 !important;\n}\n\na,\nbutton{\n  \tcolor:inherit;\n  \ttext-decoration:none;\n  \tcursor:pointer;\n  \toutline:0;\n\ttransition:0.3s;\n\t-webkit-transition:0.3s;\n\t-moz-transition:0.3s;\n\t-ms-transition:0.3s;\n\tbackground: transparent;\n}\n\nbutton:active,\na:active{\n}\n\na,\na:focus {\n\tcolor: var(--bs-purple-5);\n\ttext-decoration:none; \n}\n\na:hover{\n\tcolor: var(--bs-purple-3);\n}\n\n.fs-7{\n\tfont-size: 0.8rem;\n}\n\n\n.blinker{\n  animation: blinker 1s linear infinite;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n.snow-cap::before,\n.snow-cap-2::before,\n.snow-cap-3::after{\n\tcontent: "";\n    position: absolute;\n    width: 100%;\n    height: 100px;\n    z-index: 1;\n}\n\n.snow-cap::before{\n    top: 0;\n    margin-top: -2rem;\n    left: 0;\n    background-image: url(${C});\n\tbackground-repeat: repeat-x;\n}\n\n.snow-cap-2::before {\n    top: 0;\n    margin-top: -3.7rem;\n    left: 0;\n    background-image: url(${S});\n\tbackground-repeat: no-repeat;\n\trotate:347deg;\n}\n\n.snow-cap-3::after{\n    bottom: 0;\n    margin-bottom: -3.7rem;\n    right: 0;\n    margin-right: -20.8rem;\n    background-image: url(${T});\n    background-repeat: no-repeat;\n    rotate: 3deg;\n}\n\n\n.pola-bear-1{\n\tbackground-image: url(${L});\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    margin-left: 20rem;\n    margin-bottom: 6rem;\n    width: 25rem;\n    height: 20rem;\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n.pola-bear-2{\n\tbackground-image: url(${R});\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    margin-right: 4rem;\n    margin-bottom: 9rem;\n    width: 21rem;\n    height: 19rem;\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n.pola-bear-3{\n\tbackground-image: url(${U});\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    margin-left: 5rem;\n    margin-bottom: 6rem;\n    width: 25rem;\n    height: 28rem;\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n\n.pola-bear-5{\n\tbackground-image: url(${$});\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    margin-left: 5rem;\n    margin-bottom: 6rem;\n    width: 25rem;\n    height: 28rem;\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n.pepe{\n\tbackground-image: url(${M});\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    margin-left: 47rem;\n    margin-bottom: 4rem;\n    width: 20rem;\n    height: 16.5rem;\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n.baby-pola{\n\tbackground-image: url(${A});\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    margin-right: -5rem;\n    margin-bottom: -3rem;\n    width: 33rem;\n    height: 41rem;\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n/* ==========================================================================\n   Backgrounds\n   ========================================================================== */\n\n.bg-blue-1{\n\tbackground-color: var(--bs-blue-1);\n}\n\n.bg-blue-2{\n\tbackground-color: var(--bs-blue-2);\n}\n\n.bg-blue-3{\n\tbackground-color: var(--bs-blue-3);\n}\n\n.bg-blue-4{\n\tbackground-color: var(--bs-blue-4);\n}\n\n.nft-bg::after{\n\tcontent: "";\n\tbackground-image: url(${I});\n\tbackground-size: cover;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0.75;\n}\n\n.frosted-glass-effect {\n\tbackground: rgba(255, 255, 255, 0.5);\n\tbackdrop-filter: blur(10px);\n\t-webkit-backdrop-filter: blur(10px);\n\tpadding: 20px;\n\tborder-radius: 10px;\n\tborder: 1px solid rgba(255, 255, 255, 0.18);\n}\n\n/* ==========================================================================\n   Font Sizes, Colors\n   ========================================================================== */\n\n.display-s{\n\tfont-size: 6rem;\n}\n\n.display-l{\n\tfont-size: 25rem;\n}\n\n.display-xl{\n\tfont-size: 50rem;\n}\n\n.text-blue-1{\n\tcolor: var(--bs-blue-1);\n}\n\n.text-blue-2{\n\tcolor: var(--bs-blue-2);\n}\n\n.text-blue-3{\n\tcolor: var(--bs-blue-3);\n}\n\n.text-blue-4{\n\tcolor: var(--bs-blue-4);\n}\n\n/* ==========================================================================\n   Border Colors\n   ========================================================================== */\n\n.border-blue-1{\n\tborder-color: var(--bs-blue-1);\n}\n\n.border-blue-2{\n\tborder-color: var(--bs-blue-2);\n}\n\n.border-blue-3{\n\tborder-color: var(--bs-blue-3);\n}\n\n.border-blue-4{\n\tborder-color: var(--bs-blue-4);\n}\n\n/* ==========================================================================\n   Logo\n   ========================================================================== */\n\n.logo{\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tdisplay: inline-block;\n}\n\n/* ==========================================================================\n   Menu\n   ========================================================================== */\n.menu{\n\tmargin-bottom: 2rem;\n    padding: 1rem;\n   \tleft: 50%;\n    transform: translateX(-50%);\n}\n\n.menu > div > a{\n\tfont-family: 'milky';\n\tfont-size: 1.25rem;\n\tpadding: 0.5rem 1.25rem;\n\tcolor: var(--bs-blue-4);\n}\n\n.menu > div > a.active{\n\tbackground-color: var(--bs-gray-3);\n\tcolor: var(--bs-blue-4);\n}\n\n.menu > div > a:hover{\n\tcolor: var(--bs-blue-1);\n\tbackground-color: var(--bs-blue-4)\n}\n\n.hamburger-menu {\n\tdisplay: block;\n    width: 3rem;\n    height: 1.5rem;\n    position: relative;\n}\n  \n.hamburger-menu div {\n\tbackground-color: #333; /* Color of the lines */\n\theight: 2px; /* Thickness of the lines, making it look thin */\n\twidth: 100%; /* Width of the lines */\n\tposition: absolute;\n\tleft: 0;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.hamburger-menu div:nth-child(1) {\n\ttop: 0;\n}\n\n.hamburger-menu div:nth-child(2) {\n\ttop: 50%;\n\ttransform: translateY(-50%);\n}\n\n.hamburger-menu div:nth-child(3) {\n\tbottom: 0;\n}\n\n/* ==========================================================================\n   Footer\n   ========================================================================== */\n\n.forest::after{\n\tcontent: "";\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-image: url(${E});\n\tbackground-size: contain;\n\tbackground-position: bottom center;\n\tbackground-repeat: no-repeat;\n}\n\nfooter{\n\tbackground: rgb(48,84,115);\n\tbackground: -moz-linear-gradient(180deg, rgba(48,84,115,1) 22%, rgba(255,255,255,1) 100%);\n\tbackground: -webkit-linear-gradient(180deg, rgba(48,84,115,1) 22%, rgba(255,255,255,1) 100%);\n\tbackground: linear-gradient(180deg, rgba(48,84,115,1) 22%, rgba(255,255,255,1) 100%);\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#305473",endColorstr="#ffffff",GradientType=1);\n\tpadding-bottom: 22rem;\n}\n\nfooter .row,\nfooter a{\n\tcolor: var(--bs-white) !important;\n}\n\nfooter .disclaimer{\n\tbackground:rgba(0,0,0,0.21);\n}\n\n.polarmy-link{\n\tfont-weight: bold;\n}\n\n/* ==========================================================================\n   Hero\n   ========================================================================== */\n\n.hero{\n\theight: 60rem;\n}\n.home-btn {\n    display: flex;\n    gap: 6rem;\n    justify-content: center;\n}\n\n.home-btn button {\n    font-size: 1.3rem;\n    width: 9rem;\n    height: 3.5rem;\n}\n\n/* ==========================================================================\n   Banner\n   ========================================================================== */\n\n.banner{\n\tletter-spacing: -1rem;\n}\n\n.banner > span:nth-child(1){\n\trotate: -35deg;\n}\n\n.banner > span:nth-child(2){\n\trotate: 0deg;\n}\n\n.banner > span:nth-child(3){\n\trotate: -5deg;\n}\n\n.banner > span:nth-child(4){\n\trotate: 15deg;\n\tmargin-left: 4rem;\n}\n\n.banner > span{\n\ttext-shadow: -1px 0 white, 0 15px white, 1px 0 white, 0 -1px white;\n}\n\n.banner span {\n  display: inline-block;\n  animation: hoverEffect 2s ease-in-out infinite;\n}\n\n/* Example individual delays for each letter */\n.banner span:nth-child(1) { animation-delay: 0.5s; }\n.banner span:nth-child(2) { animation-delay: 0.4s; }\n.banner span:nth-child(3) { animation-delay: 0.6s; }\n.banner span:nth-child(4) { animation-delay: 0.8s; }\n\n/* ==========================================================================\n   Images\n   ========================================================================== */\n\n.img{\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: contain;\n}\n\n.glacier-1{\n\tbackground-image: url(${F});\n\twidth: 55rem;\n\theight: 35rem;\n\tmargin-left: -5rem;\n\tmargin-bottom: -1.95rem;\n}\n\n.glacier-2{\n\tbackground-image: url(${j});\n\twidth: 50rem;\n\theight: 10rem;\n\tmargin-right: -5rem;\n\tmargin-bottom: 5rem;\n}\n\n/* ==========================================================================\n   Tokenomics\n   ========================================================================== */\n\n.tokenomics > div > div,\n.tokenomics > div > div > div:nth-child(1){\n\tborder-width: 0.4rem;\n\tborder-style: solid;\n}\n\n\n.tokenomics > div > div{\n  \tanimation: hoverEffect 2s ease-in-out infinite;\n\tdisplay: inline-block;\n}\n\n.tokenomics > div > div:nth-child(1) { animation-delay: 0.5s; }\n.tokenomics > div > div:nth-child(2) { animation-delay: 0.4s; }\n.tokenomics > div > div:nth-child(3) { animation-delay: 0.6s; }\n.tokenomics > div > div:nth-child(4) { animation-delay: 0.8s; }\n\n\n.tokenomics > div > div{\n\tbox-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, var(--bs-blue-3) 0px -6px 0px inset;\n\ttransition: 0.3s all;\n}\n\n.tokenomics > div:hover > div{\n\ttransform: scale(1.1);\n\tposition: relative;\n\tz-index: 1;\n}\n\n.tokenomics > div:nth-child(1) > div{\n\trotate:8deg;\n}\n\n.tokenomics > div:nth-child(1):hover > div{\n\trotate:-2deg;\n}\n\n.tokenomics > div:nth-child(2) > div{\n\trotate:-8deg;\n}\n\n.tokenomics > div:nth-child(2):hover > div{\n\trotate:-4deg;\n}\n\n.tokenomics > div:nth-child(3) > div{\n\trotate:10deg;\n}\n\n.tokenomics > div:nth-child(3):hover > div{\n\trotate:3deg;\n}\n\n.tokenomics > div:nth-child(4) > div{\n\trotate:-3deg;\n}\n\n.tokenomics > div:nth-child(4):hover > div{\n\trotate:6deg;\n}\n\n.tokenomics > div > div,\n.tokenomics > div > div > div{\n\tborder-color: var(--bs-blue-1);\n}\n\n.tokenomics > div > div::after{\n\tcontent: "";\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 5rem;\n\tbackground: url(${_});\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tmargin-bottom: -2rem;\n    margin-right: -7.6rem;\n}\n\n.tokenomics > div:nth-child(1) > div > div:nth-child(1){ \n\tbackground: rgb(136,237,136);\n\tbackground: -moz-radial-gradient(circle, rgba(136,237,136,1) 0%, rgba(0,198,0,1) 100%);\n\tbackground: -webkit-radial-gradient(circle, rgba(136,237,136,1) 0%, rgba(0,198,0,1) 100%);\n\tbackground: radial-gradient(circle, rgba(136,237,136,1) 0%, rgba(0,198,0,1) 100%);\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#88ed88",endColorstr="#00c600",GradientType=1);\n}\n\n.tokenomics > div:nth-child(2) > div > div:nth-child(1){ \n\tbackground: rgb(45,182,186);\n\tbackground: -moz-radial-gradient(circle, rgba(45,182,186,1) 0%, rgba(20,137,140,1) 100%);\n\tbackground: -webkit-radial-gradient(circle, rgba(45,182,186,1) 0%, rgba(20,137,140,1) 100%);\n\tbackground: radial-gradient(circle, rgba(45,182,186,1) 0%, rgba(20,137,140,1) 100%);\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2db6ba",endColorstr="#14898c",GradientType=1);\n}\n\n.tokenomics > div:nth-child(3) > div > div:nth-child(1){ \n\tbackground: rgb(94,105,147);\n\tbackground: -moz-radial-gradient(circle, rgba(94,105,147,1) 0%, rgba(31,41,82,1) 100%);\n\tbackground: -webkit-radial-gradient(circle, rgba(94,105,147,1) 0%, rgba(31,41,82,1) 100%);\n\tbackground: radial-gradient(circle, rgba(94,105,147,1) 0%, rgba(31,41,82,1) 100%);\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5e6993",endColorstr="#1f2952",GradientType=1);\n}\n\n.tokenomics > div:nth-child(4) > div > div:nth-child(1){ \n\tbackground: rgb(255,255,255);\n\tbackground: -moz-radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(230,209,209,1) 100%);\n\tbackground: -webkit-radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(230,209,209,1) 100%);\n\tbackground: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(230,209,209,1) 100%);\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#e6d1d1",GradientType=1);\n}\n\n/* ==========================================================================\n   Play Button\n   ========================================================================== */\n\n.play-btn{  \n\twidth: 8rem;\n\theight: 8rem;\n\tbottom: 0;\n\tleft: 0;\n\tmargin-bottom: 9rem;\n    margin-left: 34rem;\n}\n\n.play-btn > a{\n\tdisplay: flex;\n}\n\n.easy-bradge{\n\theight: 356px; \n\twidth: 100%; \n\tborder: none;\n}\n\n.btn-radio{\n\twidth: 18rem;\n}\n\n/* ==========================================================================\n   Socials\n   ========================================================================== */\n.link-section{\n\tpadding-top: 3rem;\n}   \n\n.pola-in-phone{\n\tposition: relative;\n\t\n}\n.pola-in-phone a:nth-child(1) img {\n    display: block; /* Show the first image by default */\n}\n.pola-in-phone a:nth-child(2) img {\n    display: block; /* Show the first image by default */\n}\n\n.pola-in-phone a:nth-child(3) img {\n    display: none; /* Hide the second image by default */\n}\n\n.pola-in-phone a:nth-child(4) img {\n    display: none; /* Hide the second image by default */\n}\n\n.pola-in-phone a {\n    position: absolute;\n    top: 0;              \n    left: 0;        \n}\n \n.polarmy-buble{\n\tanimation: hoverEffect 2s ease-in-out infinite;\n\tdisplay: inline-block;\n\tz-index: 2;\n\ttransition: 0.3s all;\n}\n\n.polarmy-buble:hover {\n    rotate:-3deg;\n}\n\n\n.socials > a > div{\n\twidth: 4rem;\n\theight: 4rem;\n\tbackground-position:center center;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n}\n\n.socials > a > div.twitter{\n\tbackground-image: url('https://assets-global.website-files.com/65df0808e9cb3fe30a509571/65df0808e9cb3fe30a5095b9_x-twitter.svg');\n\twidth: 3rem; /* Smaller width */\n    height: 3rem; /* Smaller height */\n}\n\n.socials > a > div.telegram{\n\tbackground-image: url('https://assets-global.website-files.com/65df0808e9cb3fe30a509571/65df0808e9cb3fe30a5095ba_telegram.svg');\n\twidth: 3rem; /* Smaller width */\n    height: 3rem; /* Smaller height */\n}\n\n.socials > a > div.dexscreener{\n\tbackground-image: url('https://assets-global.website-files.com/65df0808e9cb3fe30a509571/65df0808e9cb3fe30a5095aa_dexscreener.svg');\n\twidth: 3rem; /* Smaller width */\n    height: 3rem; /* Smaller height */\n}\n\n.socials > a > div.dextools{\n\tbackground-image: url('https://assets-global.website-files.com/65df0808e9cb3fe30a509571/65df0808e9cb3fe30a5095a9_dextools.svg');\n\twidth: 3rem; /* Smaller width */\n    height: 3rem; /* Smaller height */\n}\n\n.socials > a > div.coingecko{\n\tbackground-image: url('https://assets-global.website-files.com/65df0808e9cb3fe30a509571/65df0808e9cb3fe30a5095b7_coingecko.svg');\n\twidth: 3rem; /* Smaller width */\n    height: 3rem; /* Smaller height */\n}\n\n.dxsale{\n\twidth: 230px;\n}\n\n\n/* ==========================================================================\n   How to buy\n   ========================================================================== */\n\n.how-to-buy{\n\tmargin-top: 4rem;\n\topacity: 0.2;\n\tfont-weight: 900;\n\tfont-size: 10rem;\n\tmargin-left: 12rem;\n\t\n}\n\n.small-text {\n\tfont-size: 3em;\n\tmargin-top: 0.5rem; /* Adjust the size as needed */\n}\n\n\n.speech-bubble{\n\tposition: relative;\n\tborder-top-left-radius: 70rem;\n\tborder-top-right-radius: 70rem;\n\tborder-bottom-left-radius: 70rem;\n\tborder-bottom-right-radius: 70rem;\n\tbackground: #629bdd;\n\tfont: 2em/4 Century Gothic, Verdana, sans-serif;\n\ttext-align: center;\n\tborder: 1rem solid var(--bs-blue-3);\n}\n\n.speech-bubbles{\n\tmargin-top: 10rem;\n}\n\n.speech-bubbles > div > div{\n\tbox-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\n}\n\n.speech-bubbles > div:nth-child(1){\n\ttransform: rotate(-10deg) rotateY(15deg);\n}\n\n.speech-bubbles > div:nth-child(2){\n\ttransform: rotate(5deg) rotateY(15deg);\n}\n\n.speech-bubbles > div:nth-child(3){\n\ttransform: rotate(-3deg) rotateY(15deg);\n}\n\n.speech-bubbles > div:nth-child(4){\n\ttransform: rotate(-14deg) rotateY(15deg);\n}\n\n\n/* ==========================================================================\n   VPN section\n   ========================================================================== */\n   \n\n.vpn-button-container{\n\tdisplay: flex;\n\tgap: 1rem;\n}\n\n.vpn-button{\n\t\n\twidth: 350px;\n}\n\n.vpn-logo{\n\twidth: 100px; \n\theight: auto;\n}\n\n/* ==========================================================================\n   NFT Previews\n   ========================================================================== */\n\n.nft-previews > div{\n\twidth: 3rem;\n\theight: 3rem;\n\ttransition: all 0.3s;\n}\n\n.nft-previews > div > img{\n\twidth: 100%;\n}\n\n.nft-previews > div:hover{\n\ttransform: scale(1.2);\n}\n\n/* ==========================================================================\n   Ice Creams\n   ========================================================================== */\n\n.ice-creams > div > a{\n\tbackground: #FFFFFF;\n\ttransition: all 0.3s;\n}\n\n.ice-creams > div:hover > a{\n\ttransform: scale(1.1);\n}\n\n\n.ice-creams > div > a > div{\n\tbackground: var(--bs-blue-3);\n\ttransition: all 0.3s;\n}\n\n.ice-creams > div:hover > a > div{\n\ttransition: all 0.3s;\n\tbackground: rgb(255,255,255);\n\tbackground: -moz-radial-gradient(circle, rgba(255,255,255,1) 40%, rgba(226,239,247,1) 66%);\n\tbackground: -webkit-radial-gradient(circle, rgba(255,255,255,1) 40%, rgba(226,239,247,1) 66%);\n\tbackground: radial-gradient(circle, rgba(255,255,255,1) 40%, rgba(226,239,247,1) 66%);\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#e2eff7",GradientType=1);\n}\n\n.ice-creams > div:hover > a > div > img{\n\ttransform: scale(1.1);\n}\n\n\n\n/* ==========================================================================\n   Hover\n   ========================================================================== */\n\n.hovering-item {\n  animation: hoverEffect 2s ease-in-out infinite;\n  display: inline-block; /* Example to ensure transform applies */\n}\n\n@keyframes hoverEffect {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-15px);\n  }\n}\n\n/* ==========================================================================\n   Snowflake\n   ========================================================================== */\n\n.snow-wrapper{\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tpadding: 0;\n\tmargin: 0;\n\tposition: fixed;\n\toverflow: hidden;\n}\n\n.snowflake {\n  --size: 1vw;\n  width: var(--size);\n  height: var(--size);\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: -5vh;\n}\n\n@keyframes snowfall {\n  0% {\n    transform: translate3d(var(--left-ini), 0, 0);\n  }\n\n  100% {\n    transform: translate3d(var(--left-end), 110vh, 0);\n  }\n}\n\n.snowflake:nth-child(1) {\n  --size: 0.4vw;\n  --left-ini: 8vw;\n  --left-end: -3vw;\n  left: 82vw;\n  animation: snowfall 6s linear infinite;\n  animation-delay: -4s;\n}\n\n.snowflake:nth-child(2) {\n  --size: 0.2vw;\n  --left-ini: -4vw;\n  --left-end: -2vw;\n  left: 66vw;\n  animation: snowfall 14s linear infinite;\n  animation-delay: -3s;\n}\n\n.snowflake:nth-child(3) {\n  --size: 1vw;\n  --left-ini: 10vw;\n  --left-end: -9vw;\n  left: 34vw;\n  animation: snowfall 11s linear infinite;\n  animation-delay: -4s;\n}\n\n.snowflake:nth-child(4) {\n  --size: 0.6vw;\n  --left-ini: -7vw;\n  --left-end: 7vw;\n  left: 35vw;\n  animation: snowfall 10s linear infinite;\n  animation-delay: -8s;\n}\n\n.snowflake:nth-child(5) {\n  --size: 1vw;\n  --left-ini: 8vw;\n  --left-end: 0vw;\n  left: 85vw;\n  animation: snowfall 11s linear infinite;\n  animation-delay: -9s;\n}\n\n.snowflake:nth-child(6) {\n  --size: 0.2vw;\n  --left-ini: -2vw;\n  --left-end: -6vw;\n  left: 82vw;\n  animation: snowfall 7s linear infinite;\n  animation-delay: -5s;\n}\n\n.snowflake:nth-child(7) {\n  --size: 0.6vw;\n  --left-ini: 5vw;\n  --left-end: 2vw;\n  left: 96vw;\n  animation: snowfall 9s linear infinite;\n  animation-delay: -2s;\n}\n\n.snowflake:nth-child(8) {\n  --size: 0.2vw;\n  --left-ini: 0vw;\n  --left-end: 9vw;\n  left: 74vw;\n  animation: snowfall 14s linear infinite;\n  animation-delay: -9s;\n}\n\n.snowflake:nth-child(9) {\n  --size: 1vw;\n  --left-ini: 8vw;\n  --left-end: -3vw;\n  left: 81vw;\n  animation: snowfall 13s linear infinite;\n  animation-delay: -8s;\n}\n\n.snowflake:nth-child(10) {\n  --size: 0.6vw;\n  --left-ini: -6vw;\n  --left-end: 9vw;\n  left: 17vw;\n  animation: snowfall 7s linear infinite;\n  animation-delay: -2s;\n}\n\n.snowflake:nth-child(11) {\n  --size: 0.4vw;\n  --left-ini: -8vw;\n  --left-end: 6vw;\n  left: 71vw;\n  animation: snowfall 13s linear infinite;\n  animation-delay: -10s;\n}\n\n.snowflake:nth-child(12) {\n  --size: 0.6vw;\n  --left-ini: 7vw;\n  --left-end: 2vw;\n  left: 2vw;\n  animation: snowfall 8s linear infinite;\n  animation-delay: -4s;\n}\n\n.snowflake:nth-child(13) {\n  --size: 1vw;\n  --left-ini: -7vw;\n  --left-end: 6vw;\n  left: 57vw;\n  animation: snowfall 12s linear infinite;\n  animation-delay: -5s;\n}\n\n.snowflake:nth-child(14) {\n  --size: 0.2vw;\n  --left-ini: -2vw;\n  --left-end: -8vw;\n  left: 46vw;\n  animation: snowfall 8s linear infinite;\n  animation-delay: -4s;\n}\n\n.snowflake:nth-child(15) {\n  --size: 0.2vw;\n  --left-ini: -4vw;\n  --left-end: 4vw;\n  left: 15vw;\n  animation: snowfall 10s linear infinite;\n  animation-delay: -5s;\n}\n\n.snowflake:nth-child(16) {\n  --size: 0.6vw;\n  --left-ini: -3vw;\n  --left-end: -8vw;\n  left: 48vw;\n  animation: snowfall 10s linear infinite;\n  animation-delay: -4s;\n}\n\n.snowflake:nth-child(17) {\n  --size: 1vw;\n  --left-ini: 6vw;\n  --left-end: 10vw;\n  left: 70vw;\n  animation: snowfall 8s linear infinite;\n  animation-delay: -1s;\n}\n\n.snowflake:nth-child(18) {\n  --size: 1vw;\n  --left-ini: -2vw;\n  --left-end: 1vw;\n  left: 40vw;\n  animation: snowfall 10s linear infinite;\n  animation-delay: -8s;\n}\n\n.snowflake:nth-child(19) {\n  --size: 0.4vw;\n  --left-ini: -5vw;\n  --left-end: 10vw;\n  left: 9vw;\n  animation: snowfall 8s linear infinite;\n  animation-delay: -4s;\n}\n\n.snowflake:nth-child(20) {\n  --size: 0.8vw;\n  --left-ini: 1vw;\n  --left-end: -4vw;\n  left: 49vw;\n  animation: snowfall 11s linear infinite;\n  animation-delay: -5s;\n}\n\n.snowflake:nth-child(21) {\n  --size: 0.2vw;\n  --left-ini: -4vw;\n  --left-end: 9vw;\n  left: 59vw;\n  animation: snowfall 12s linear infinite;\n  animation-delay: -8s;\n}\n\n.snowflake:nth-child(22) {\n  --size: 0.2vw;\n  --left-ini: -7vw;\n  --left-end: 10vw;\n  left: 70vw;\n  animation: snowfall 8s linear infinite;\n  animation-delay: -6s;\n}\n\n.snowflake:nth-child(23) {\n  --size: 1vw;\n  --left-ini: -8vw;\n  --left-end: 4vw;\n  left: 21vw;\n  animation: snowfall 14s linear infinite;\n  animation-delay: -9s;\n}\n\n.snowflake:nth-child(24) {\n  --size: 0.8vw;\n  --left-ini: -7vw;\n  --left-end: 5vw;\n  left: 3vw;\n  animation: snowfall 14s linear infinite;\n  animation-delay: -2s;\n}\n\n.snowflake:nth-child(25) {\n  --size: 0.6vw;\n  --left-ini: 1vw;\n  --left-end: -5vw;\n  left: 41vw;\n  animation: snowfall 12s linear infinite;\n  animation-delay: -1s;\n}\n\n.snowflake:nth-child(26) {\n  --size: 0.4vw;\n  --left-ini: -4vw;\n  --left-end: 6vw;\n  left: 53vw;\n  animation: snowfall 11s linear infinite;\n  animation-delay: -9s;\n}\n\n.snowflake:nth-child(27) {\n  --size: 0.8vw;\n  --left-ini: 6vw;\n  --left-end: 6vw;\n  left: 45vw;\n  animation: snowfall 11s linear infinite;\n  animation-delay: -2s;\n}\n\n.snowflake:nth-child(28) {\n  --size: 0.2vw;\n  --left-ini: -2vw;\n  --left-end: -3vw;\n  left: 96vw;\n  animation: snowfall 6s linear infinite;\n  animation-delay: -3s;\n}\n\n.snowflake:nth-child(29) {\n  --size: 0.4vw;\n  --left-ini: 10vw;\n  --left-end: 4vw;\n  left: 33vw;\n  animation: snowfall 7s linear infinite;\n  animation-delay: -3s;\n}\n\n.snowflake:nth-child(30) {\n  --size: 0.4vw;\n  --left-ini: 2vw;\n  --left-end: -9vw;\n  left: 91vw;\n  animation: snowfall 7s linear infinite;\n  animation-delay: -5s;\n}\n\n.snowflake:nth-child(31) {\n  --size: 0.8vw;\n  --left-ini: 3vw;\n  --left-end: -4vw;\n  left: 91vw;\n  animation: snowfall 7s linear infinite;\n  animation-delay: -3s;\n}\n\n.snowflake:nth-child(32) {\n  --size: 1vw;\n  --left-ini: 2vw;\n  --left-end: 8vw;\n  left: 75vw;\n  animation: snowfall 6s linear infinite;\n  animation-delay: -7s;\n}\n\n.snowflake:nth-child(33) {\n  --size: 0.8vw;\n  --left-ini: 1vw;\n  --left-end: 1vw;\n  left: 91vw;\n  animation: snowfall 8s linear infinite;\n  animation-delay: -8s;\n}\n\n.snowflake:nth-child(34) {\n  --size: 0.6vw;\n  --left-ini: 1vw;\n  --left-end: 1vw;\n  left: 85vw;\n  animation: snowfall 13s linear infinite;\n  animation-delay: -10s;\n}\n\n.snowflake:nth-child(35) {\n  --size: 0.8vw;\n  --left-ini: 7vw;\n  --left-end: 3vw;\n  left: 88vw;\n  animation: snowfall 14s linear infinite;\n  animation-delay: -5s;\n}\n\n.snowflake:nth-child(36) {\n  --size: 0.6vw;\n  --left-ini: 9vw;\n  --left-end: 4vw;\n  left: 88vw;\n  animation: snowfall 10s linear infinite;\n  animation-delay: -7s;\n}\n\n.snowflake:nth-child(37) {\n  --size: 0.6vw;\n  --left-ini: -4vw;\n  --left-end: 7vw;\n  left: 85vw;\n  animation: snowfall 13s linear infinite;\n  animation-delay: -9s;\n}\n\n.snowflake:nth-child(38) {\n  --size: 0.6vw;\n  --left-ini: -6vw;\n  --left-end: 6vw;\n  left: 73vw;\n  animation: snowfall 14s linear infinite;\n  animation-delay: -9s;\n}\n\n\n@media screen and (max-width: 1440px){\n\t\n   \t.glacier-1 {\n\t\tmargin-left: -15rem;\n\t}\n\t\n\t.pola-bear-1 {\n\t\tmargin-left: 10rem;\n\t}\n\t\n\t.home-btn button{\n        width: 9rem;\n        height: 3.5rem;\n    }\n\t\n\t.pepe {\n\t\tmargin-left: 35rem;\n\t}\n\t.btn-radio-container{\n\t\tdisplay: flex;\n\t\tgap: 1rem;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n\t.btn-radio{\n\t\twidth: 29rem;\n\t}\n}\n\n\n@media screen and (max-width: 1024px){\n   \t.glacier-1 {\n\t\tmargin-left: -24rem;\n\t}\n\t\n\t.glacier-2 {\n\t\tmargin-right: -13rem;\n\t}\n\t\n\t.pola-bear-1 {\n\t\tmargin-left: 2rem;\n\t}\n\t\n\t.pola-bear-2 {\n\t\tmargin-right: -2rem;\n\t}\n\t\n\t.pepe {\n\t\tmargin-left: 27rem;\n\t\tmargin-bottom: -1rem;\n\t}\n\t\n\t.home-btn{\n        gap: 1rem;\n    }\n\t\n\t.baby-pola {\n\t\tmargin-right: -12rem;\n\t}\n\t\n\t.tokenomics > div > div::after {\n\t\tmargin-right: -17rem;\n\t}\n\t\n\t.snow-cap-2::before {\n\t\tmargin-top: -5.3rem;\n\t\trotate: 350deg;\n\t}\n\t\n\t.snow-cap-3::after {\n\t\tmargin-bottom: -4.3rem;\n\t\tmargin-right: -39.8rem;\n\t}\n\t\n\t.display-s {\n\t\tfont-size: 4.5rem;\n\t}\n\t\n\t.btn-radio-container{\n\t\tdisplay: flex;\n\t\tgap: 1rem;\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n\t.btn-radio{\n\t\twidth: 19rem;\n\t}\n\t\n\t.play-btn {\n\t\tmargin-bottom: 6rem;\n\t\tmargin-left: 23rem;\n\t}\n\t\n\t.how-to-buy {\n\t\tfont-size: 8rem;\n\t\tmargin-left: -3rem;\n\t}\n\t\n\tfooter{\n\t\tpadding-bottom: 15rem;\n\t}\n}\n\n\n@media screen and (max-width: 768px){\n\t\n\t.speech-bubbles {\n\t\tmargin-top: 0rem;\n\t}\n\t\n\t.how-to-buy {\n        margin-top: 0rem;\n        margin-left: -2rem;\n    }\n\t\n\t.how-to-buy {\n\t\tmargin-top: 0rem;\n\t\tmargin-left: -2rem;\n\t}\n\t\n\t.speech-bubbles > div{\n\t\ttransform: rotate(0deg) rotateY(0deg);\n\t}\n\t\n\t.hero {\n\t\theight: 42rem;\n\t}\n\t\n\t.display-l {\n\t\tfont-size: 15rem;\n\t}\n\t\n\t.display-s {\n\t\tfont-size: 3rem;\n\t}\n\t\n\t.pepe {\n\t\tmargin-left: 22rem;\n\t\tmargin-bottom: -1rem;\n\t\twidth: 14rem;\n\t\theight: 12rem;\n\t}\n\t\n\t.pola-bear-1 {\n\t\tmargin-left: 7rem;\n\t\tmargin-bottom: 5rem;\n\t\twidth: 13rem;\n\t\theight: 10rem;\n\t}\n\t\n\t.pola-bear-2 {\n\t\tmargin-right: 0rem;\n\t\tmargin-bottom: 7rem;\n\t\twidth: 11rem;\n\t\theight: 10rem;\n\t}\n\t\n\t.glacier-1 {\n\t\twidth: 40rem;\n\t\theight: 25rem;\n\t\tmargin-left: -17rem;\n\t\tmargin-bottom: -1.95rem;\n\t}\n\t\n\t.glacier-2 {\n\t\twidth: 30rem;\n\t\theight: 6rem;\n\t\tmargin-right: -6rem;\n\t\tmargin-bottom: 4rem;\n\t}\n\t\n    .home-btn{\n        gap: 0.8rem;\n    }\n\n    .home-btn button{\n        font-size: 1.2rem;\n        width: 7rem;\n        height: 2.8rem;\n    }\n    \n\t\n\t.play-btn {\n    \twidth: 5rem;\n\t\theight: 5rem;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tmargin-bottom: 5rem;\n\t\tmargin-left: 13rem;\n\t}\n\t\n\t.baby-pola {\n\t\tmargin-right: -5rem;\n\t\tmargin-bottom: -4rem;\n\t\twidth: 11rem;\n\t\theight: 14rem;\n\t}\n\t\n\t.snow-cap-2::before {\n\t\tmargin-top: -4.3rem;\n\t\trotate:347deg;\n\t}\n\t\n\t.snow-cap-3::after {\n\t\tmargin-right: -24.6rem;\n\t\tmargin-bottom: -3.8rem;\n\t}\n\t\n\t.link-section{\n\t\tpadding-top: 1rem;\n\t} \n\t\n\t.pola-in-phone{\n\t\twidth: 15rem;\n\t\theight: 15rem;\n\t\tmargin-bottom: 1rem;\n\t}\n\t\n\t.pola-in-phone a:nth-child(1) img {\n\t\tdisplay: none;\n\t}\n\t.pola-in-phone a:nth-child(2) img {\n\t\tdisplay: none; \n\t}\n\t\n\t.pola-in-phone a:nth-child(3) img {\n\t\tdisplay: block; \n\t}\n\t\n\t.pola-in-phone a:nth-child(4) img {\n\t\tdisplay: block; \n\t}\n\t\n\t.tokenomics > div > div::after {\n\t\tmargin-right: -9.5rem;\n\t}\n\t\n\t.vpn-button-container{\n\t\tflex-direction: column;\n\t}\n\t.vpn-button{\n\t\n\t\twidth: 300px;\n\t}\n\t\n\t.btn-radio-container{\n\t\tdisplay: flex;\n\t\tgap: 1rem;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n\t.btn-radio{\n\t\twidth: 25rem;\n\t}\n\t\n\t.popsicle-img{\n\t\twidth: 30%;\n\t}\n\n\t\n\tfooter{\n\t\tpadding-bottom: 7rem;\n\t}\n}\n\n@media screen and (max-width: 450px){\n\t\n\t.hero > .fs-3 {\n    \tfont-size: calc(0.9rem + .6vw) !important;\n\t\tpadding: 1rem 0 0;\n\t}\n\t\n\t#about .fs-5 {\n    \tfont-size: calc(0.7rem + .6vw) !important;\n\t}\n\t\n\t.how-to-buy {\n\t\tfont-size: 3rem;\n\t\tmargin-left: 2rem;\n\t\tmargin-top: -2rem;\n\t}\n\t\n\t.home-btn button{\n\t\tfont-size: 1rem;\n\t\twidth: 6rem;\n\t\theight: 2.5rem;\n\t}\n\t\n\t.tokenomics > div > div{\n\t\trotate:0deg !important;\n\t}\n\t\n\t.display-l {\n\t\tfont-size: 9rem;\n\t}\n\t\n\t.glacier-1 {\n\t\tmargin-left: -12rem;\n\t}\n\t\n\t.glacier-2{\n\t\tdisplay: none;\n\t}\n\t\n\t.pepe {\n\t\tmargin-left: 13rem;\n\t}\n\t\n\t.pola-bear-1{\n\t\tmargin-left: 13rem;\n\t}\n\t\n\t.pola-bear-2 {\n\t\tmargin-right: 15rem;\n\t\tmargin-bottom: 5rem;\n\t}\n\t\n\t.pepe {\n\t\tmargin-left: 18rem;\n\t\tmargin-bottom: 1rem;\n\t\twidth: 8rem;\n\t\theight: 7rem;\n\t}\n\t\n\t.hero {\n\t\theight: 35rem;\n\t}\n\t\n\t.snow-cap::before {\n\t\tmargin-top: -1.4rem;\n\t}\n\t\n\t.tokenomics > div > div::after {\n\t\tmargin-right: -13.6rem;\n\t}\n\t\n\t.snow-cap-2::before {\n\t\tmargin-top: -2rem;\n\t}\n\t\n\t.snow-cap-3::after {\n\t\tmargin-bottom: -2.7rem;\n\t\tmargin-right: -7.3rem;\n\t\trotate: 1deg;\n\t}\n\t\n\t.play-btn {\n\t\twidth: 7rem;\n\t\theight: 7rem;\n\t\tmargin-left: 14rem;\n\t}\n\t.btn-radio{\n\t\twidth: 18rem;\n\t}\n\t\n\t.link-section{\n\t\tpadding-top: 0.3rem;\n\t} \n\t\n\t\n\t.banner > span:nth-child(4){\n\t\tmargin-left: 0rem;\n\t\trotate: 349deg;\n\t}\n\t\n\t.banner > span{\n\t\tletter-spacing: 0.2rem;\n\t}\n\t\n\t.baby-pola {\n\t\tmargin-bottom: 25rem;\n\t}\n\t\n\tfooter{\n\t\tpadding-bottom: 1rem;\n\t}\n}\n\n\n\n`,
        "",
      ]);
      const G = z;
    },
    865: (n, t, e) => {
      e.d(t, { A: () => g });
      var i = e(601),
        a = e.n(i),
        r = e(314),
        o = e.n(r),
        l = e(417),
        s = e.n(l),
        d = new URL(e(573), e.b),
        m = new URL(e(333), e.b),
        c = o()(a()),
        f = s()(d),
        b = s()(m);
      c.push([
        n.id,
        `/*! Generated by Font Squirrel (https://www.fontsquirrel.com) on March 29, 2024 */\n\n\n\n@font-face {\n    font-family: 'milky';\n    src: url(${f}) format('woff2'),\n         url(${b}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n.milky{\n\t font-family: 'milky';\n}`,
        "",
      ]);
      const g = c;
    },
    314: (n) => {
      n.exports = function (n) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var e = "",
                i = void 0 !== t[5];
              return (
                t[4] && (e += "@supports (".concat(t[4], ") {")),
                t[2] && (e += "@media ".concat(t[2], " {")),
                i &&
                  (e += "@layer".concat(
                    t[5].length > 0 ? " ".concat(t[5]) : "",
                    " {"
                  )),
                (e += n(t)),
                i && (e += "}"),
                t[2] && (e += "}"),
                t[4] && (e += "}"),
                e
              );
            }).join("");
          }),
          (t.i = function (n, e, i, a, r) {
            "string" == typeof n && (n = [[null, n, void 0]]);
            var o = {};
            if (i)
              for (var l = 0; l < this.length; l++) {
                var s = this[l][0];
                null != s && (o[s] = !0);
              }
            for (var d = 0; d < n.length; d++) {
              var m = [].concat(n[d]);
              (i && o[m[0]]) ||
                (void 0 !== r &&
                  (void 0 === m[5] ||
                    (m[1] = "@layer"
                      .concat(m[5].length > 0 ? " ".concat(m[5]) : "", " {")
                      .concat(m[1], "}")),
                  (m[5] = r)),
                e &&
                  (m[2]
                    ? ((m[1] = "@media ".concat(m[2], " {").concat(m[1], "}")),
                      (m[2] = e))
                    : (m[2] = e)),
                a &&
                  (m[4]
                    ? ((m[1] = "@supports ("
                        .concat(m[4], ") {")
                        .concat(m[1], "}")),
                      (m[4] = a))
                    : (m[4] = "".concat(a))),
                t.push(m));
            }
          }),
          t
        );
      };
    },
    417: (n) => {
      n.exports = function (n, t) {
        return (
          t || (t = {}),
          n
            ? ((n = String(n.__esModule ? n.default : n)),
              /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
              t.hash && (n += t.hash),
              /["'() \t\n]|(%20)/.test(n) || t.needQuotes
                ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
                : n)
            : n
        );
      };
    },
    601: (n) => {
      n.exports = function (n) {
        return n[1];
      };
    },
    884: (n, t, e) => {
      var i = e(72),
        a = e.n(i),
        r = e(825),
        o = e.n(r),
        l = e(659),
        s = e.n(l),
        d = e(56),
        m = e.n(d),
        c = e(540),
        f = e.n(c),
        b = e(113),
        g = e.n(b),
        h = e(933),
        p = {};
      (p.styleTagTransform = g()),
        (p.setAttributes = m()),
        (p.insert = s().bind(null, "head")),
        (p.domAPI = o()),
        (p.insertStyleElement = f()),
        a()(h.A, p),
        h.A && h.A.locals && h.A.locals;
    },
    72: (n) => {
      var t = [];
      function e(n) {
        for (var e = -1, i = 0; i < t.length; i++)
          if (t[i].identifier === n) {
            e = i;
            break;
          }
        return e;
      }
      function i(n, i) {
        for (var r = {}, o = [], l = 0; l < n.length; l++) {
          var s = n[l],
            d = i.base ? s[0] + i.base : s[0],
            m = r[d] || 0,
            c = "".concat(d, " ").concat(m);
          r[d] = m + 1;
          var f = e(c),
            b = {
              css: s[1],
              media: s[2],
              sourceMap: s[3],
              supports: s[4],
              layer: s[5],
            };
          if (-1 !== f) t[f].references++, t[f].updater(b);
          else {
            var g = a(b, i);
            (i.byIndex = l),
              t.splice(l, 0, { identifier: c, updater: g, references: 1 });
          }
          o.push(c);
        }
        return o;
      }
      function a(n, t) {
        var e = t.domAPI(t);
        return (
          e.update(n),
          function (t) {
            if (t) {
              if (
                t.css === n.css &&
                t.media === n.media &&
                t.sourceMap === n.sourceMap &&
                t.supports === n.supports &&
                t.layer === n.layer
              )
                return;
              e.update((n = t));
            } else e.remove();
          }
        );
      }
      n.exports = function (n, a) {
        var r = i((n = n || []), (a = a || {}));
        return function (n) {
          n = n || [];
          for (var o = 0; o < r.length; o++) {
            var l = e(r[o]);
            t[l].references--;
          }
          for (var s = i(n, a), d = 0; d < r.length; d++) {
            var m = e(r[d]);
            0 === t[m].references && (t[m].updater(), t.splice(m, 1));
          }
          r = s;
        };
      };
    },
    659: (n) => {
      var t = {};
      n.exports = function (n, e) {
        var i = (function (n) {
          if (void 0 === t[n]) {
            var e = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              e instanceof window.HTMLIFrameElement
            )
              try {
                e = e.contentDocument.head;
              } catch (n) {
                e = null;
              }
            t[n] = e;
          }
          return t[n];
        })(n);
        if (!i)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        i.appendChild(e);
      };
    },
    540: (n) => {
      n.exports = function (n) {
        var t = document.createElement("style");
        return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
      };
    },
    56: (n, t, e) => {
      n.exports = function (n) {
        var t = e.nc;
        t && n.setAttribute("nonce", t);
      };
    },
    825: (n) => {
      n.exports = function (n) {
        if ("undefined" == typeof document)
          return { update: function () {}, remove: function () {} };
        var t = n.insertStyleElement(n);
        return {
          update: function (e) {
            !(function (n, t, e) {
              var i = "";
              e.supports && (i += "@supports (".concat(e.supports, ") {")),
                e.media && (i += "@media ".concat(e.media, " {"));
              var a = void 0 !== e.layer;
              a &&
                (i += "@layer".concat(
                  e.layer.length > 0 ? " ".concat(e.layer) : "",
                  " {"
                )),
                (i += e.css),
                a && (i += "}"),
                e.media && (i += "}"),
                e.supports && (i += "}");
              var r = e.sourceMap;
              r &&
                "undefined" != typeof btoa &&
                (i +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                    " */"
                  )),
                t.styleTagTransform(i, n, t.options);
            })(t, n, e);
          },
          remove: function () {
            !(function (n) {
              if (null === n.parentNode) return !1;
              n.parentNode.removeChild(n);
            })(t);
          },
        };
      };
    },
    113: (n) => {
      n.exports = function (n, t) {
        if (t.styleSheet) t.styleSheet.cssText = n;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(n));
        }
      };
    },
    333: (n, t, e) => {
      n.exports = e.p + "assets/fonts/milkynice-clean-webfont.woff";
    },
    573: (n, t, e) => {
      n.exports = e.p + "assets/fonts/milkynice-clean-webfont.woff2";
    },
    430: (n, t, e) => {
      n.exports = e.p + "assets/images/baby-pola.webp";
    },
    572: (n, t, e) => {
      n.exports = e.p + "assets/images/forest.svg";
    },
    704: (n, t, e) => {
      n.exports = e.p + "assets/images/glacier-1.svg";
    },
    715: (n, t, e) => {
      n.exports = e.p + "assets/images/glacier-2.svg";
    },
    536: (n, t, e) => {
      n.exports = e.p + "assets/images/nfts-bg.webp";
    },
    231: (n, t, e) => {
      n.exports = e.p + "assets/images/pepe-halp.webp";
    },
    817: (n, t, e) => {
      n.exports = e.p + "assets/images/pola-1.webp";
    },
    292: (n, t, e) => {
      n.exports = e.p + "assets/images/pola-2.webp";
    },
    327: (n, t, e) => {
      n.exports = e.p + "assets/images/pola-3.webp";
    },
    501: (n, t, e) => {
      n.exports = e.p + "assets/images/pola-5.webp";
    },
    759: (n, t, e) => {
      n.exports = e.p + "assets/images/snow-cap-1.svg";
    },
    636: (n, t, e) => {
      n.exports = e.p + "assets/images/snow-cap-2.svg";
    },
    357: (n, t, e) => {
      n.exports = e.p + "assets/images/snow-cap-3.svg";
    },
    730: (n, t, e) => {
      n.exports = e.p + "assets/images/snow-cap-4.svg";
    },
  },
]);
