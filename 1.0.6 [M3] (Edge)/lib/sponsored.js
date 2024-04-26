  (() => {
    try {
      (function () {
        try {
           new MutationObserver(function () {
            document.querySelectorAll('div[role="feed"] > div[data-pagelet^="FeedUnit"] > div[class]:not([style*="height"])').forEach(function (e) {
              "display: none !important;" == e.getAttribute("style") || e.classList.includes("hidden_elem") || e.querySelectorAll("div[aria-posinset] div[style] div[class] > div[class] > div[class] > div[class] > span")[0].innerText.includes("Suggested for you") && (console.log("--------"), console.log("Annoyances hidden (Suggested for you)"), e.style = "display:none!important;")
            })
          }).observe(document, {
            childList: !0,
            subtree: !0
          }), ! function () {
            var e = 0,
              t = [];
            new MutationObserver(function () {
              document.querySelectorAll('#ssrb_feed_start + div > div[class]:not([style*="display: none"]), #ssrb_feed_start + div span > h3 ~ div[class]:not([style*="display: none"]), #ssrb_feed_start + div h3~ div[class]:not([style*="display: none"]), #ssrb_feed_start + div h3 ~ div > div[class]:not([style*="display: none"]), div[role="main"] div > h3 ~ div > div[class]:not([style*="display: none"])').forEach(function (n) {
                Object.keys(n).forEach(function (s) {
                  if (s.includes("__reactEvents") || s.includes("__reactProps")) {
                    s = n[s];
                    try {
                      if (s.children?.props?.category?.includes("SHOWCASE") || s.children?.props?.children?.props?.category?.includes("SHOWCASE") || s.children?.props?.children?.props?.feedEdge?.category?.includes("SHOWCASE") || s.children?.props?.category?.includes("FB_SHORTS") || s.children?.props?.children?.props?.category?.includes("FB_SHORTS") || s.children?.props?.children?.props?.feedEdge?.category?.includes("FB_SHORTS") || s.children?.props?.children?.props?.children?.props?.feedEdge?.category?.includes("FB_SHORTS")) {
                        e++, n.style = "display: none !important;";
                        var o = n.querySelector("a[href][aria-label]:not([aria-hidden])");
                        o && (t.push(["SHOWCASE post blocked based on property [" + e + "] -> " + o.ariaLabel]), console.table(t))
                      }
                    } catch {}
                  }
                })
              })
            }).observe(document, {
              childList: !0,
              subtree: !0
            })
          }(), ! function () {
            var t = new MutationObserver(function () {
                var t = document.querySelectorAll("div[id^='mount_']"),
                  n = 0 < t.length ? document.querySelectorAll('div[role="feed"] > div[data-pagelet^="FeedUnit"] > div[class]:not([style*="height"])') : document.querySelectorAll('[id^="substream"] > div:not(.hidden_elem) div[id^="hyperfeed_story_id"]');
                n.forEach(function (n) {
                  function o(e, n) {
                    for (0 < t.length ? "0" == (i = e.querySelectorAll('div[role="article"] span[dir="auto"] > a > span > span > span[data-content]')).length && (i = e.querySelectorAll('div[role="article"] span[dir="auto"] > a > span[aria-label]')) : i = e.querySelectorAll(".userContentWrapper h5 + div[data-testid] a [class] [class]"), socheck = 0; socheck < i.length; socheck++) i[socheck].innerText.includes(n) && (l = ["1"], d = ["1"], u = ["1"], m = f = h = 1, socheck = i.length)
                  }

                  function g(e, n, s, o, a) {
                    for (0 < t.length ? "0" == (i = e.querySelectorAll('div[role="article"] span[dir="auto"] > a > span > span > span[data-content]')).length && (i = e.querySelectorAll('div[role="article"] span[dir="auto"] div[role="button"][tabindex]')) : i = e.querySelectorAll(".userContentWrapper h5 + div[data-testid] > span a > [class] [class]"), "0" == i.length && (i = e.querySelectorAll('div[role="article"] span[dir="auto"] > a > span[aria-label]')), socheck = 0; socheck < i.length; socheck++) {
                      spancheck = 0, 1 < i.length ? (spancheck = i[socheck].querySelectorAll("span")[0], 0 == spancheck && (spancheck = i[socheck].querySelectorAll("b")[0])) : (spancheck = i[0].querySelectorAll("span")[socheck], 0 == spancheck && (spancheck = i[0].querySelectorAll("b")[socheck]));
                      var r = i[0];
                      if (0 != spancheck && spancheck) {
                        if (2 == spancheck.children.length && 0 < t.length)
                          for (spancheck = spancheck.querySelectorAll("span:not([style])"), spcheck = 0; spcheck < spancheck.length; spcheck++) spancheck[spcheck].innerText.includes(n) ? p = 1 : !spancheck[spcheck].innerText.includes(s) || 0 != spancheck[spcheck].offsetTop || spancheck[spcheck].innerText.includes(n) || spancheck[spcheck].innerText.includes(o) || spancheck[spcheck].innerText.includes(a) ? !spancheck[spcheck].innerText.includes(o) || 0 != spancheck[spcheck].offsetTop || spancheck[spcheck].innerText.includes(s) || spancheck[spcheck].innerText.includes(n) || spancheck[spcheck].innerText.includes(a) ? !spancheck[spcheck].innerText.includes(a) || 0 != spancheck[spcheck].offsetTop || spancheck[spcheck].innerText.includes(s) || spancheck[spcheck].innerText.includes(o) || spancheck[spcheck].innerText.includes(n) || (u = ["1"], m = 1) : (d = ["1"], f = 1) : (l = ["1"], h = 1);
                        0 == t.length && ((!(spancheck.innerText.includes(n) && 0 == spancheck.offsetTop || i[0].innerText.includes(n) && 0 == i[0].offsetTop) || spancheck.innerText.includes(s) && !i[0].innerText.includes(s) || spancheck.innerText.includes(o) && !i[0].innerText.includes(o) || spancheck.innerText.includes(a) && !i[0].innerText.includes(a)) && (!r.innerText.includes(n) || 0 != r.offsetTop || r.innerText.includes(s) || r.innerText.includes(o) || r.innerText.includes(a)) ? !spancheck.innerText.includes(s) || 0 != spancheck.offsetTop || spancheck.innerText.includes(n) || spancheck.innerText.includes(o) || spancheck.innerText.includes(a) ? !spancheck.innerText.includes(o) || 0 != spancheck.offsetTop || spancheck.innerText.includes(s) || spancheck.innerText.includes(n) || spancheck.innerText.includes(a) ? !spancheck.innerText.includes(a) || 0 != spancheck.offsetTop || spancheck.innerText.includes(s) || spancheck.innerText.includes(o) || spancheck.innerText.includes(n) || (u = ["1"], m = 1) : (d = ["1"], f = 1) : (l = ["1"], h = 1) : p = 1)
                      }
                    }
                  }

                  function a(e, n, s, o, a) {
                    u = 0 < t.length ? (i = e.querySelectorAll('div[role="article"] span[dir="auto"] > a > span span[data-content=' + n + "]"), l = e.querySelectorAll('div[role="article"] span[dir="auto"] > a > span span[data-content=' + s + "]"), d = e.querySelectorAll('div[role="article"] span[dir="auto"] > a > span span[data-content=' + o + "]"), e.querySelectorAll('div[role="article"] span[dir="auto"] > a > span span[data-content=' + a + "]")) : (i = e.querySelectorAll(".userContentWrapper h5 + div[data-testid] a [data-content=" + n + "]"), l = e.querySelectorAll(".userContentWrapper h5 + div[data-testid] a [data-content=" + s + "]"), d = e.querySelectorAll(".userContentWrapper h5 + div[data-testid] a [data-content=" + o + "]"), e.querySelectorAll(".userContentWrapper h5 + div[data-testid] a [data-content=" + a + "]"))
                  }
                  var r, p = 0,
                    h = 0,
                    f = 0,
                    m = 0,
                    i = 0,
                    l = 0,
                    d = 0,
                    u = 0,
                    y = n.querySelectorAll("div[style='width: 100%'] > a[href*='oculus.com/quest'] > div"),
                    s = document.querySelector("[lang]"),
                    c = document.querySelectorAll("link[rel='preload'][href*='/l/']"),
                    s = s ? document.querySelector("[lang]").lang : "en",
                    v = n.querySelectorAll('a[ajaxify*="ad_id"] > span'),
                    b = n.querySelectorAll('a[href*="ads/about"]'),
                    j = n.querySelectorAll('a[href*="https://www.facebook.com/business/help"]');
                  if ("display: none !important;" != n.getAttribute("style") && !n.classList.includes("hidden_elem") && (0 < v.length || 0 < b.length || 0 < j.length ? (e += 1, 0 < t.length ? ("" == (r = n.querySelectorAll("a[href]")[0].innerText) && (r = n.querySelectorAll("a[href]")[1].innerText), "" == r && (r = n.querySelectorAll("a[href]")[0].querySelectorAll("a[aria-label]")[0].getAttribute("aria-label"))) : r = n.querySelectorAll("a[href]")[2].innerText, console.log("--------"), console.log("Ad hidden from: " + r), console.log("Total ads hidden: " + e), console.log("F length: " + v.length), console.log("H length: " + b.length), console.log("I length (Paid partnership): " + j.length), console.log("--------"), n.style = "display:none!important;") : 0 < y.length ? (e += 1, r = "Facebook", console.log("--------"), console.log("Ad hidden from: " + r), console.log("Total ads hidden: " + e), console.log("Non-declared ad"), console.log("--------"), n.style = "display:none!important;") : "af" == s ? o(n, "Geborg") : "de" == s || "nl" == s ? a(n, "G", "e", "s", "n") : "am" == s ? o(n, "የተከፈለበት ማስታወቂያ") : "ar" == s ? o(n, "مُموَّل") : "as" == s ? o(n, "পৃষ্ঠপোষকতা কৰা") : "az" == s ? o(n, "Sponsor dəstəkli") : "co" == s ? o(n, "Spunsurizatu") : "bs" == s || "sl" == s || "cs" == s ? a(n, "S", "p", "z", "n") : "da" == s || "en" == s || "et" == s || "fy" == s || "it" == s || "ku" == s || "nb" == s || "nn" == s || "pl" == s || "sq" == s || "sv" == s || "zz" == s ? 0 < t.length ? c[0].href.includes("en_UD") ? o(n, "pəɹosuodS") : c[0].href.includes("ja_KS") ? o(n, "広告") : c[0].href.includes("tz_MA") ? o(n, "ⵉⴷⵍ") : c[0].href.includes("sy_SY") ? o(n, "ܒܘܕܩܐ ܡܡܘܘܢܐ") : c[0].href.includes("cb_IQ") ? o(n, "پاڵپشتیکراو") : c[0].href.includes("ar_AR") ? o(n, "مُموَّل") : c[0].href.includes("sz_PL") ? o(n, "Szpōnzorowane") : c[0].href.includes("eo_EO") ? o(n, "Reklamo") : c[0].href.includes("es_LA") ? a(n, "P", "u", "c", "d") : (a(n, "S", "p", "s", "n"), "0" == i.length && g(n, "S", "p", "s", "n"), "0" == i.length && o(n, "Sponsored")) : document.querySelector("body").className.includes("Locale_en_UD") ? o(n, "pəɹosuodS") : document.querySelector("body").className.includes("ja_KS") ? o(n, "広告") : document.querySelector("body").className.includes("tz_MA") ? o(n, "ⵉⴷⵍ") : document.querySelector("body").className.includes("sy_SY") ? o(n, "ܒܘܕܩܐ ܡܡܘܘܢܐ") : document.querySelector("body").className.includes("cb_IQ") ? o(n, "پاڵپشتیکراو") : document.querySelector("body").className.includes("ar_AR") ? o(n, "مُموَّل") : document.querySelector("body").className.includes("sz_PL") ? o(n, "Szpōnzorowane") : document.querySelector("body").className.includes("eo_EO") ? o(n, "Reklamo") : document.querySelector("body").className.includes("es_LA") ? a(n, "P", "u", "c", "d") : (a(n, "S", "p", "s", "n"), "0" == i.length && g(n, "S", "p", "s", "n")) : "be" == s ? o(n, "Рэклама") : "bg" == s ? o(n, "Спонсорирано") : "mk" == s ? o(n, "Спонзорирано") : "br" == s ? o(n, "Paeroniet") : "ca" == s ? o(n, "Patrocinat") : "gl" == s || "pt" == s ? (o(n, "Patrocinado"), "0" == h && a(n, "P", "a", "c", "o")) : "bn" == s ? o(n, "সৌজন্যে") : "cb" == s ? o(n, "پاڵپشتیکراو") : "cx" == s ? a(n, "G", "i", "s", "n") : "cy" == s ? o(n, "Noddwyd") : "el" == s ? o(n, "Χορηγούμενη") : "eo" == s ? o(n, "Reklamo") : "es" == s ? a(n, "P", "u", "c", "d") : "eu" == s ? o(n, "Babestua") : "fa" == s ? o(n, "دارای پشتیبانی مالی") : "ff" == s ? o(n, "Yoɓanaama") : "fi" == s ? o(n, "Sponsoroitu") : "fo" == s ? o(n, "Stuðlað") : "fr" == s ? 0 < t.length ? c[0].href.includes("fr_FR") ? a(n, "S", "p", "s", "n") : a(n, "C", "o", "m", "n") : document.querySelector("body").className.includes("Locale_fr_FR") ? a(n, "S", "p", "s", "n") : a(n, "C", "o", "m", "n") : "ga" == s ? o(n, "Urraithe") : "gn" == s ? o(n, "Oñepatrosinapyre") : "gu" == s ? o(n, "પ્રાયોજિત") : "ha" == s ? o(n, "Daukar Nauyi") : "he" == s ? o(n, "ממומן") : "hr" == s ? o(n, "Plaćeni oglas") : "ht" == s ? o(n, "Peye") : "ne" == s || "mr" == s || "hi" == s ? o(n, "प्रायोजित") : "hu" == s ? a(n, "H", "i", "r", "d") : "hy" == s ? o(n, "Գովազդային") : "id" == s ? a(n, "B", "e", "p", "n") : "is" == s ? o(n, "Kostað") : "ja" == s ? o(n, "広告") : "ms" == s ? o(n, "Ditaja") : "jv" == s ? o(n, "Disponsori") : "ka" == s ? o(n, "რეკლამა") : "kk" == s ? o(n, "Демеушілік көрсеткен") : "km" == s ? o(n, "បានឧបត្ថម្ភ") : "kn" == s ? o(n, "ಪ್ರಾಯೋಜಿತ") : "ko" == s ? o(n, "Sponsored") : "ky" == s ? o(n, "Демөөрчүлөнгөн") : "lo" == s ? o(n, "ຜູ້ສະໜັບສະໜູນ") : "lt" == s ? o(n, "Remiama") : "lv" == s ? o(n, "Apmaksāta reklāma") : "mg" == s ? o(n, "Misy Mpiantoka") : "ml" == s ? o(n, "സ്പോൺസർ ചെയ്തത്") : "mn" == s ? o(n, "Ивээн тэтгэсэн") : "mt" == s ? o(n, "Sponsorjat") : "my" == s ? (o(n, "ပံ့ပိုးထားသည်"), "0" == h && o(n, "အခပေးကြော်ငြာ")) : "or" == s ? o(n, "ପ୍ରଯୋଜିତ") : "pa" == s ? o(n, "ਸਰਪ੍ਰਸਤੀ ਪ੍ਰਾਪਤ") : "ps" == s ? o(n, "تمويل شوي") : "ro" == s ? o(n, "Sponsorizat") : "ru" == s || "uk" == s ? o(n, "Реклама") : "rw" == s ? o(n, "Icyamamaza ndasukirwaho") : "sc" == s ? o(n, "Patronadu de") : "si" == s ? o(n, "අනුග්රාහක") : "sk" == s ? o(n, "Sponzorované") : "sn" == s ? o(n, "Zvabhadharirwa") : "so" == s ? o(n, "La maalgeliyey") : "sr" == s ? o(n, "Спонзорисано") : "sw" == s ? o(n, "Imedhaminiwa") : "sy" == s ? o(n, "ܒܘܕܩܐ ܡܡܘܘܢܐ") : "sz" == s ? o(n, "Szpōnzorowane") : "ta" == s ? o(n, "விளம்பரம்") : "te" == s ? o(n, "ప్రాయోజితం చేయబడింది") : "tg" == s ? o(n, "Бо сарпарастӣ") : "th" == s ? o(n, "ได้รับการสนับสนุน") : "tl" == s ? o(n, "May Sponsor") : "tr" == s ? o(n, "Sponsorlu") : "tt" == s ? o(n, "Хәйрияче") : "tz" == s ? o(n, "ⵉⴷⵍ") : "ur" == s ? o(n, "سپانسرڈ") : "uz" == s ? o(n, "Reklama") : "vi" == s ? o(n, "Được tài trợ") : "zh-Hans" == s ? o(n, "赞助内容") : "zh-Hant" == s && o(n, "贊助"), 0 < i.length && 0 < l.length && 0 < d.length && 0 < u.length)) {
                    for (cont = 0; cont < i.length; cont++) 0 < i[cont].offsetHeight && (cont = i.length, p = 1);
                    for (cont1 = 0; cont1 < l.length; cont1++) 0 < l[cont1].offsetHeight && (cont1 = l.length, h = 1);
                    for (cont2 = 0; cont2 < d.length; cont2++) 0 < d[cont2].offsetHeight && (cont2 = d.length, f = 1);
                    for (cont3 = 0; cont3 < u.length; cont3++) 0 < u[cont3].offsetHeight && (cont3 = u.length, m = 1);
                    1 == p && 1 == h && 1 == f && 1 == m && (0 < t.length && "" != (r = n.querySelectorAll("a[href]")[1].innerText) || (r = n.querySelectorAll("a[href]")[2].innerText), e += 1, console.log("--------"), console.log("Ad hidden from: " + r), console.log("Total ads hidden: " + e), console.log("--------"), n.style = "display:none!important;")
                  }
                })
              }),
              e = 0;
            t.observe(document, {
              childList: !0,
              subtree: !0
            })
          }(), ! function () {
            var e = 0,
              t = [];
            new MutationObserver(function () {
              document.querySelectorAll('div[data-pagelet^="FeedUnit"]:not([style*="display: none"]), div[role="feed"] > div:not([style*="display: none"]), div[role="feed"] > span:not([style*="display: none"]), #ssrb_feed_start + div > div[class]:not([style*="display: none"]), #ssrb_feed_start + div span > h3 ~ div[class]:not([style*="display: none"]), #ssrb_feed_start + div h3~ div[class]:not([style*="display: none"]), #ssrb_feed_start + div h3 ~ div > div[class]:not([style*="display: none"]), div[role="main"] div > h3 ~ div > div[class]:not([style*="display: none"]), div[role="main"] div > h2 ~ div > div[class]:not([style*="display: none"])').forEach(function (n) {
                Object.keys(n).forEach(function (s) {
                  if (s.includes("__reactEvents") || s.includes("__reactProps")) {
                    s = n[s];
                    try {
                      if (s.children?.props?.category?.includes("SPONSORED") || s.children?.props?.children?.props?.category?.includes("SPONSORED") || s.children?.props?.children?.props?.feedEdge?.category?.includes("SPONSORED") || s.children?.props?.children?.props?.children?.props?.feedEdge?.category?.includes("SPONSORED") || s.children?.props?.children?.props?.children?.props?.children?.props?.feedEdge?.category?.includes("SPONSORED")) {
                        e++, n.style = "display: none !important;";
                        var o = n.querySelector("a[href][aria-label]:not([aria-hidden])");
                        o && (t.push(["Ad blocked based on property [" + e + "] -> " + o.ariaLabel]), console.table(t))
                      }
                    } catch {}
                  }
                })
              })
            }).observe(document, {
              childList: !0,
              subtree: !0
            })
          }(), ! function () {
            new MutationObserver(function () {
              window.location.href.includes("/watch") && document.querySelectorAll('#watch_feed div:not([class]):not([id]) > div[class*=" "]:not([style*="display: none !important"]) div[class^="_"] > div[class*=" "]').forEach(function (e) {
                Object.keys(e).forEach(function (t) {
                  if (t.includes("__reactFiber")) {
                    t = e[t];
                    try {
                      if (null == (n = t) ? 0 : null == (s = n.return) ? 0 : null == (o = s.memoizedProps) ? 0 : null == (i = o.story) ? 0 : i.sponsored_data) {
                        var n, s, o, i, a = e.closest('#watch_feed div[class*=" "] div:not([class]):not([id]) > div[class*=" "]:not([style*="display: none !important"])');
                        a.style = "display: none !important;"
                      }
                    } catch {}
                  }
                })
              })
            }).observe(document, {
              childList: !0,
              subtree: !0,
              attributeFilter: ["style"]
            })
          }(), ! function () {
            if (location.href.includes("marketplace/item")) {
              var e = 0,
                t = [];
              new MutationObserver(function () {
                document.querySelectorAll("div[aria-label='Marketplace listing viewer'] > div div + div + span:not([style*='display: none']), #ssrb_feed_start + div > div div + div + span:not([style*='display: none'])").forEach(function (n) {
                  Object.keys(n).forEach(function (s) {
                    if (s.includes("__reactEvents") || s.includes("__reactProps")) {
                      s = n[s];
                      try {
                        if (s.children?.props?.children?.props?.adId) {
                          e++, n.style = "display: none !important;";
                          var o = n.querySelector("a[href][aria-label]:not([aria-hidden])");
                          o && (t.push(["Ad blocked based on property [" + e + "] -> " + o.ariaLabel]), console.table(t))
                        }
                      } catch {}
                    }
                  })
                })
              }).observe(document, {
                childList: !0,
                subtree: !0
              })
            }
          }(), ! function () {
            var t = new MutationObserver(function () {
                document.querySelectorAll('[id^="substream"] > div:not(.hidden_elem) div[id^="hyperfeed_story_id"]').forEach(function (t) {
                  function s(e, t) {
                    for (o = e.querySelectorAll('.userContentWrapper h5 + div[data-testid*="sub"] a [class] [class]'), socheck = 0; socheck < o.length; socheck++) o[socheck].innerText.includes(t) && (r = ["1"], c = ["1"], a = ["1"], d = u = h = 1, socheck = o.length)
                  }

                  function i(e, t, n, s, i) {
                    o = e.querySelectorAll('.userContentWrapper h5 + div[data-testid*="sub"] a [data-content=' + t + "]"), r = e.querySelectorAll('.userContentWrapper h5 + div[data-testid*="sub"] a [data-content=' + n + "]"), c = e.querySelectorAll('.userContentWrapper h5 + div[data-testid*="sub"] a [data-content=' + s + "]"), a = e.querySelectorAll('.userContentWrapper h5 + div[data-testid*="sub"] a [data-content=' + i + "]"), 0 == o.length && (o = e.querySelectorAll('.userContentWrapper h5 + div[data-testid*="label"] a [data-content=' + t + "]"), r = e.querySelectorAll('.userContentWrapper h5 + div[data-testid*="label"] a [data-content=' + n + "]"), c = e.querySelectorAll('.userContentWrapper h5 + div[data-testid*="label"] a [data-content=' + s + "]"), a = e.querySelectorAll('.userContentWrapper h5 + div[data-testid*="label"] a [data-content=' + i + "]"))
                  }
                  var l, m = 0,
                    h = 0,
                    u = 0,
                    d = 0,
                    o = 0,
                    r = 0,
                    c = 0,
                    a = 0,
                    g = t.querySelectorAll("div[style='width: 100%'] > a[href*='oculus.com/quest'] > div"),
                    n = document.querySelector("[lang]").lang,
                    f = t.querySelectorAll('a[ajaxify*="ad_id"] > span'),
                    p = t.querySelectorAll('a[href*="ads/about"]');
                  if ("display: none !important;" != t.getAttribute("style") && !t.classList.includes("hidden_elem") && (0 < f.length || 0 < p.length ? (e += 1, l = t.querySelectorAll("a[href]")[2].innerText, console.log("--------"), console.log("Ad hidden from: " + l), console.log("Total ads hidden: " + e), console.log("F length: " + f.length), console.log("H length: " + p.length), console.log("--------"), t.style = "display:none!important;") : 0 < g.length ? (e += 1, l = "Facebook", console.log("--------"), console.log("Ad hidden from: " + l), console.log("Total ads hidden: " + e), console.log("Non-declared ad"), console.log("--------"), t.style = "display:none!important;") : "af" == n ? s(t, "Geborg") : "de" == n || "nl" == n ? i(t, "G", "e", "s", "n") : "am" == n ? s(t, "የተከፈለበት ማስታወቂያ") : "ar" == n ? s(t, "مُموَّل") : "as" == n ? s(t, "পৃষ্ঠপোষকতা কৰা") : "az" == n ? s(t, "Sponsor dəstəkli") : "co" == n ? s(t, "Spunsurizatu") : "bs" == n || "sl" == n || "cs" == n ? i(t, "S", "p", "z", "n") : "da" == n || "en" == n || "et" == n || "fy" == n || "it" == n || "ku" == n || "nb" == n || "nn" == n || "pl" == n || "sq" == n || "sv" == n || "zz" == n ? document.querySelector("body").className.includes("Locale_en_UD") ? s(t, "pəɹosuodS") : i(t, "S", "p", "s", "n") : "be" == n ? s(t, "Рэклама") : "bg" == n ? s(t, "Спонсорирано") : "mk" == n ? s(t, "Спонзорирано") : "br" == n ? s(t, "Paeroniet") : "ca" == n ? s(t, "Patrocinat") : "gl" == n || "pt" == n ? s(t, "Patrocinado") : "bn" == n ? s(t, "সৌজন্যে") : "cb" == n ? s(t, "پاڵپشتیکراو") : "cx" == n ? i(t, "G", "i", "s", "n") : "cy" == n ? s(t, "Noddwyd") : "el" == n ? s(t, "Χορηγούμενη") : "eo" == n ? s(t, "Reklamo") : "es" == n ? i(t, "P", "u", "c", "d") : "eu" == n ? s(t, "Babestua") : "fa" == n ? s(t, "دارای پشتیبانی مالی") : "ff" == n ? s(t, "Yoɓanaama") : "fi" == n ? s(t, "Sponsoroitu") : "fo" == n ? s(t, "Stuðlað") : "fr" == n ? document.querySelector("body").className.includes("Locale_fr_FR") ? i(t, "S", "p", "s", "n") : i(t, "C", "o", "m", "n") : "ga" == n ? s(t, "Urraithe") : "gn" == n ? s(t, "Oñepatrosinapyre") : "gu" == n ? s(t, "પ્રાયોજિત") : "ha" == n ? s(t, "Daukar Nauyi") : "he" == n ? s(t, "ממומן") : "hr" == n ? s(t, "Plaćeni oglas") : "ht" == n ? s(t, "Peye") : "ne" == n || "mr" == n || "hi" == n ? s(t, "प्रायोजित") : "hu" == n ? i(t, "H", "i", "r", "d") : "hy" == n ? s(t, "Գովազդային") : "id" == n ? i(t, "B", "e", "p", "n") : "is" == n ? s(t, "Kostað") : "ja" == n ? s(t, "広告") : "ms" == n ? s(t, "Ditaja") : "jv" == n ? s(t, "Disponsori") : "ka" == n ? s(t, "რეკლამა") : "kk" == n ? s(t, "Демеушілік көрсеткен") : "km" == n ? s(t, "បានឧបត្ថម្ភ") : "kn" == n ? s(t, "ಪ್ರಾಯೋಜಿತ") : "ko" == n ? s(t, "Sponsored") : "ky" == n ? s(t, "Демөөрчүлөнгөн") : "lo" == n ? s(t, "ຜູ້ສະໜັບສະໜູນ") : "lt" == n ? s(t, "Remiama") : "lv" == n ? s(t, "Apmaksāta reklāma") : "mg" == n ? s(t, "Misy Mpiantoka") : "ml" == n ? s(t, "സ്പോൺസർ ചെയ്തത്") : "mn" == n ? s(t, "Ивээн тэтгэсэн") : "mt" == n ? s(t, "Sponsorjat") : "my" == n ? s(t, "ပံ့ပိုးထားသည်") : "or" == n ? s(t, "ପ୍ରଯୋଜିତ") : "pa" == n ? s(t, "ਸਰਪ੍ਰਸਤੀ ਪ੍ਰਾਪਤ") : "ps" == n ? s(t, "تمويل شوي") : "ro" == n ? s(t, "Sponsorizat") : "ru" == n || "uk" == n ? s(t, "Реклама") : "rw" == n ? s(t, "Icyamamaza ndasukirwaho") : "sc" == n ? s(t, "Patronadu de") : "si" == n ? s(t, "අනුග්‍රාහක") : "sk" == n ? s(t, "Sponzorované") : "sn" == n ? s(t, "Zvabhadharirwa") : "so" == n ? s(t, "La maalgeliyey") : "sr" == n ? s(t, "Спонзорисано") : "sw" == n ? s(t, "Imedhaminiwa") : "sy" == n ? s(t, "ܒܘܕܩܐ ܡܡܘܘܢܐ") : "sz" == n ? s(t, "Szpōnzorowane") : "ta" == n ? s(t, "விளம்பரம்") : "te" == n ? s(t, "ప్రాయోజితం చేయబడింది") : "tg" == n ? s(t, "Бо сарпарастӣ") : "th" == n ? s(t, "ได้รับการสนับสนุน") : "tl" == n ? s(t, "May Sponsor") : "tr" == n ? s(t, "Sponsorlu") : "tt" == n ? s(t, "Хәйрияче") : "tz" == n ? s(t, "ⵉⴷⵍ") : "ur" == n ? s(t, "سپانسرڈ") : "uz" == n ? s(t, "Reklama") : "vi" == n ? s(t, "Được tài trợ") : "zh-Hans" == n ? s(t, "赞助内容") : "zh-Hant" == n && s(t, "贊助"), 0 < o.length && 0 < r.length && 0 < c.length && 0 < a.length)) {
                    for (cont = 0; cont < o.length; cont++) 0 < o[cont].offsetHeight && (cont = o.length, m = 1);
                    for (cont1 = 0; cont1 < r.length; cont1++) 0 < r[cont1].offsetHeight && (cont1 = r.length, h = 1);
                    for (cont2 = 0; cont2 < c.length; cont2++) 0 < c[cont2].offsetHeight && (cont2 = c.length, u = 1);
                    for (cont3 = 0; cont3 < a.length; cont3++) 0 < a[cont3].offsetHeight && (cont3 = a.length, d = 1);
                    1 == m && 1 == h && 1 == u && 1 == d && (l = t.querySelectorAll("a[href]")[2].innerText, e += 1, console.log("--------"), console.log("Ad hidden from: " + l), console.log("Total ads hidden: " + e), console.log("--------"), t.style = "display:none!important;")
                  }
                })
              }),
              e = 0;
            t.observe(document, {
              childList: !0,
              subtree: !0,
              characterData: !0,
              attributes: !0
            })
          }(), ! function () {
            var e, t;
            0 < window.location.href.indexOf("marketplace") && (t = new MutationObserver(function () {
              document.querySelectorAll('div[role="main"] div[class][style^="max-width:"] div[class][style^="max-width:"]').forEach(function (t) {
                var n, s = t.querySelectorAll('a[href*="ads/about"]');
                "display: none !important;" == t.getAttribute("style") || t.classList.includes("hidden_elem") || 0 < s.length && (e += 1, "" == (n = t.querySelectorAll("a[href]")[0].innerText) && (n = t.querySelectorAll("a[href]")[1].innerText), "" == n && (n = t.querySelectorAll("a[href]")[0].querySelectorAll("a[aria-label]")[0].getAttribute("aria-label")), console.log("--------"), console.log("Ad hidden from: " + n), console.log("Total ads hidden: " + e), console.log("H length: " + s.length), console.log("--------"), t.style = "display:none!important;")
              })
            }), e = 0, t.observe(document, {
              childList: !0,
              subtree: !0
            }))
          }(), ! function () {
            new MutationObserver(function () {
              document.querySelectorAll('div[role="main"] div[class][style^="max-width:"] div[class][style*="max-width:"]:not([style*="display: none"])').forEach(function (e) {
                Object.keys(e).forEach(function (t) {
                  if (t.includes("__reactEvents") || t.includes("__reactProps")) {
                    t = e[t];
                    try {
                      t.children?.props?.adSurface?.includes("MarketplaceFeed") && (e.style = "display: none !important;")
                    } catch {}
                  }
                })
              })
            }).observe(document, {
              childList: !0,
              subtree: !0
            })
          }(), ! function () {
            window.location.href.includes("/marketplace/") && new MutationObserver(function () {
              document.querySelectorAll('div[data-testid="marketplace_home_feed"] div[class][data-testid^="MarketplaceUpsell-"] > div > div').forEach(function (e) {
                var t = e.outerHTML;
                t && void 0 !== t && !0 === t.includes("/ads/about/") && (e.style = "display:none!important;")
              })
            }).observe(document, {
              childList: !0,
              subtree: !0
            })
          }(), new MutationObserver(function () {
            var e = ["?fbclid", "%3Ffbclid", "&fbclid", "%26fbclid", "&__tn__", "%__26tn__", "%3Futm", "?utm", "&fbc=", "%26fbc%3D", "?share=", "%3Fshare%3D", "%3F__twitter_impression%3D", "?__twitter_impression=", "?wtmc=", "%3Fwtmc%3D", "?originalReferrer=", "%3ForiginalReferrer%3D", "?wtrid=", "%3Fwtrid%3D", "?trbo=", "%3Ftrbo%3D", "?GEPC=", "%3FGEPC%3D", "?whatsapp=", "%3Fwhatsapp%3D", "?fbc=", "%3Ffbc%3D", "?dmcid=", "%3Fdmcid%3D"];
            document.querySelectorAll('a[target="_blank"]').forEach(function (t) {
              for (i = 0; i < e.length; i++) {
                var n;
                t.href.includes(e[i]) && (n = (n = (n = t.href.split("#!")[1]) || t.href.split("%23%21")[1]) || "", t.href.includes("#!") && (n = "#!" + n), t.href.includes("%23%21") && (n = "%23%21" + n), n = (n = (n = t.href.split("&feature=share&")[1]) || t.href.split("%26feature%3Dshare%26")[1]) || "", t.href.includes("&feature=share&") && (n = "?" + n), t.href.includes("%26feature%3Dshare%26") && (n = "%3F" + n), n = (n = (n = t.href.split("&h=")[1]) || t.href.split("%26h%3D")[1]) || "", t.href.includes("&h=") && (n = "&h=" + n), t.href.includes("%26h%3D") && (n = "%26h%3D" + n), t.setAttribute("href", t.href.split(e[i])[0] + n))
              }
            })
          }).observe(document, {
            childList: !0,
            subtree: !0
          }), new MutationObserver(function () {
            var e = ["&eid=", "%26eid%3D", "?eid=", "%3Feid%3D", "?__tn__=", "%3F%5F%5Ftn%5F%5F%3D", "&__tn__=", "%26%5F%5Ftn%5F%5F%3D", "?source=", "%3Fsource%3D", "?__xts__", "%3F%5F%5Fxts%5F%5F", "&__xts__", "%26%5F%5Fxts%5F%5F", "&amp;__xts__%5B", "?ref=", "%3Fref%3D", "?fref=", "%3Ffref%3D", "?epa=", "%3Fepa%3D", "&ifg=", "%26ifg%3D", "?comment_tracking=", "%3Fcomment_tracking%3D", "?av=", "%3Fav%3D", "&av=", "%26av%3D", "?acontext=", "%3Facontext%3D", "&session_id=", "%26session_id%3D", "&amp;session_id=", "?hc_location=", "%3Fhc_location%3D", "&fref=", "%26fref%3D", "?__cft", "%3f__cft"];
            document.querySelectorAll('a:not([target="_blank"]):not([href*="2fac/"])').forEach(function (t) {
              for (i = 0; i < e.length; i++) t.href.includes(e[i]) && t.setAttribute("href", t.href.split(e[i])[0])
            })
          }).observe(document, {
            childList: !0,
            subtree: !0
          }), (() => {
            new MutationObserver(() => {
              try {
                document.querySelector("div[role='complementary'] > div > div > div > div > div > span > div > div").style.display = "none"
              } catch {}
            }).observe(document, {
              childList: !0,
              subtree: !0
            })
          })()
        } catch (e) {
          console.error("Error executing AB js: " + e)
        }
      })()
    } catch (e) {
      console.error("Error executing AB js: " + e)
    }
  })()