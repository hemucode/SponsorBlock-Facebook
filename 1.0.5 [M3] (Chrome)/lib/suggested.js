try{
  ! function () {
    var t = new MutationObserver(function () {
        document.querySelectorAll('div[id^="substream_"] div[id^="hyperfeed_story_id"]').forEach(function (t) {
          var n, s = t.querySelectorAll(".userContentWrapper > div[class] > div[class] > div[class]"),
            o = t.querySelectorAll(".userContentWrapper > div[class] > div > div span");
          "display: none !important;" != t.getAttribute("style") && (0 < s.length && s[0].innerText.includes("Suggested") && (console.log("--------"), e += 1, n = t.querySelectorAll("a[href]")[2].innerText, console.log("Annoyance hidden from: " + n), console.log("Total annoyances Hidden: " + e), console.log("F length: " + s.length), console.log("--------"), t.style = "display:none!important;"), 0 < o.length && o[0].innerText.includes("People you may know") && (console.log("--------"), e += 1, "" == (n = t.querySelectorAll("a[href]")[2].innerText) && (n = "Facebook"), console.log("Annoyance hidden from: " + n), console.log("Total annoyances Hidden: " + e), console.log("F length: " + s.length), console.log("--------"), t.style = "display:none!important;"))
        })
      }),
      e = 0;
    t.observe(document, {
      childList: !0,
      subtree: !0
    })
  }(),
  new MutationObserver(function (){
    allEliment = document.querySelectorAll('div[data-pagelet^="FeedUnit"]:not([style*="display: none"]), div[role="feed"] > div:not([style*="display: none"]), #ssrb_feed_start + div > div[class]:not([style*="display: none"]), #ssrb_feed_start + div span > h3 ~ div[class]:not([style*="display: none"]), #ssrb_feed_start + div h3~ div[class]:not([style*="display: none"]), #ssrb_feed_start + div h3 ~ div > div[class]:not([style*="display: none"]), div[role="main"] div > h3 ~ div > div[class]:not([style*="display: none"])');
    for (elm of allEliment) {
      objectKey = Object.keys(elm);
      for (s of objectKey) {
        if (s.includes("__reactEvents") || s.includes("__reactProps")) {
          s = elm[s];

          try{
             if (s.children?.props?.category?.includes("ENGABEMENT") || s.children?.props?.children?.props?.category?.includes("ENGABEMENT") || s.children?.props?.children?.props?.feedEdge?.category?.includes("ENGABEMENT")){
              elm.style = "display: none !important;";
              if (elm.querySelector("a[href][aria-label]:not([aria-hidden])")) {
                console.log(`Suggested post blocked based on property - ${elm.querySelector("a[href][aria-label]:not([aria-hidden])").ariaLabel}`)
              }
             }
          }catch (e) {console.error(e);}


          try{
            if (s.children?.props?.children?.props?.children?.props?.feedEdge?.category?.includes("ENGAGEMENT") || s.children?.props?.children?.props?.children?.props?.children?.props?.feedEdge?.category?.includes("ENGAGEMENT")) {
              elm.style = "display: none !important;";
              if (elm.querySelector("a[href][aria-label]:not([aria-hidden])")) {
                console.log(`Suggested post blocked based on property - ${elm.querySelector("a[href][aria-label]:not([aria-hidden])").ariaLabel}`)
              }
            }
          }catch (e) {console.error(e);}

          //console.log(s);
        }
      }
    }
  
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

}catch (e) {console.error(e);}





