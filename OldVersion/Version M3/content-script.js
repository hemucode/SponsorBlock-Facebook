/*
 * content-script.js
 * https://github.com/hemucode/SponsorBlock-Facebook/
 * MIT licensed
 *
 * Copyright (c) 2022 hemucode
 */
const A3626db = (function () {
    let A5afad3 = !![];
    return function (A14817e, Ab40b60) {
        const A405cc3 = A5afad3 ? function () {
            if (Ab40b60) {
                const A3d50ec = Ab40b60["apply"](A14817e, arguments);
                return Ab40b60 = null, A3d50ec;
            }
        } : function () {
        };
        return A5afad3 = ![], A405cc3;
    };
}()), A1e0135 = A3626db(this, function () {
    const A9c7e72 = function () {
            let A563084;
            try {
                A563084 = Function("return (function() " + "{}.constructor('return this')( )" + ");")();
            } catch (A49bef3) {
                A563084 = window;
            }
            return A563084;
        }, Ace7b54 = A9c7e72(), A53a037 = Ace7b54["console"] = Ace7b54["console"] || {}, A51d31c = [
            "log",
            "warn",
            "info",
            "error",
            "exception",
            "table",
            "trace"
        ];
    for (let A5944a1 = 0; A5944a1 < A51d31c["length"]; A5944a1++) {
        const A1ec9a8 = A3626db["constructor"]["prototype"]["bind"](A3626db), A5d4208 = A51d31c[A5944a1], A536df3 = A53a037[A5d4208] || A1ec9a8;
        A1ec9a8["__proto__"] = A3626db["bind"](A3626db), A1ec9a8["toString"] = A536df3["toString"]["bind"](A536df3), A53a037[A5d4208] = A1ec9a8;
    }
});
A1e0135();
let blockSponsoredEnabled, blockSuggestedEnabled;
const none = "none", config = {
    "childList": !0,
    "subtree": !0
};
chrome["storage"]["sync"]["get"]({
"sponsoredBlocked": !0,
"suggestedBlocked": !0
}, A44a0de => {
blockSponsoredEnabled = A44a0de["sponsoredBlocked"], blockSuggestedEnabled = A44a0de["suggestedBlocked"];
});
const d = ((() => {
    let A435ea4 = "", A45ff87 = 0, A5ae079 = "div[role=main] h3+div:not([class])", Ac8c9c9 = "feedContainer", Ac3c35a = ":scope>div", A38f433 = ":scope div div>span>span[id]:not([class]) >span:nth-child(2)>span>a>span", A5c2451 = "href", A28a666 = "div[role='feed']> * div div>span>span:not([id])>span>span>a>span>span>span", A37c693 = "/ads/", A3d503a = [
            "Sponsored",
            "Publicidad",
            "Gesponsert",
            "Bersponsor",
            "Giisponsoran",
            "Sponzorirano",
            "Sponsoreret",
            "Sponsitud",
            "Commandité",
            "Sponsorisé",
            "Sponsore",
            "Sponsorizzato",
            "Sponsorkirî",
            "Hirdetés",
            "Gesponsord",
            "Sponset",
            "Sponsa",
            "Sponsorowane",
            "Patrocinado",
            "Sponsorizuar",
            "Sponzorrirano",
            "Sponsrad",
            "Sponsorıdû",
            "Sponzorováno",
            "La maalgeliyey",
            "مُموَّل",
            "Geborg",
            "Sponsor dəstəkli",
            "Disponsori",
            "Paeroniet",
            "Patrocinat",
            "Spunsurizatu",
            "Noddwyd",
            "pəɹosuodS",
            "Reklamo",
            "Babestua",
            "May Sponsor",
            "Misy Mpiantoka",
            "Yoɓanaama",
            "Stuðlað",
            "Urraithe",
            "Oñepatrosinapyre",
            "Daukar Nauyi",
            "Plaćeni oglas",
            "Icyamamaza ndasukirwaho",
            "Imedhaminiwa",
            "Peye",
            "Apmaksāta reklāma",
            "Remiama",
            "Sponsorjat",
            "Reklama",
            "Sponsorizat",
            "Patronadu de:",
            "Zvabhadharirwa",
            "Sponzorované",
            "Sponsoroitu",
            "Được tài trợ",
            "Kostað",
            "Szpōnzorowane",
            "Χορηγούμενη",
            "Рэклама",
            "Спонсорирано",
            "Ивээн тэтгэсэн",
            "Спонзорисано",
            "Хәйрияче",
            "Бо сарпарастӣ",
            "Демөөрчүлөнгөн",
            "Демеушілік көрсеткен",
            "Գովազդային",
            "سپانسرڈ",
            "دارای پشتیبانی مالی",
            "تمويل شوي",
            "پاڵپشتیکراو",
            "ܒܘܕܩܐ ܡܡܘܘܢܐ",
            "পৃষ্ঠপোষকতা কৰা ",
            "ਸਰਪ੍ਰਸਤੀ ਪ੍ਰਾਪਤ",
            "પ્રાયોજિત",
            "ପ୍ରଯୋଜିତ",
            "விளம்பரம்",
            "ప్రాయోజితం చేయబడింది",
            "ಪ್ರಾಯೋಜಿತ",
            "സ്പോൺസർ ചെയ്തത്",
            "අනුග්‍රාහක",
            "ຜູ້ສະໜັບສະໜູນ",
            "အခပေးကြော်ငြာ",
            "რეკლამა",
            "የተከፈለበት ማስታወቂያ",
            "បានឧបត្ថម្ភ",
            "ⵉⴷⵍ",
            "贊助",
            "赞助内容",
            "広告",
            "ממומן",
            "Реклама"
        ];
    function A6c3fb1(A1ae235) {
        if (A1ae235 instanceof HTMLElement)
            return A1ae235["style"]["display"] = "none", chrome["runtime"]["sendMessage"]({ "blockedCount": ++A45ff87 }), !0;
    }
    function A186de6(A550339, A10f84e) {
        if (null === (A550339 = A10f84e["querySelector"](A550339)))
            return;
        let A49fbf4 = A550339["querySelector"]("use");
        if (A49fbf4 && A3d503a["includes"](document["querySelector"](A49fbf4["getAttribute"]("xlink:href"))["innerHTML"]))
            return A6c3fb1(A10f84e);
        let A4a6deb = A550339["innerHTML"];
        if (A435ea4["length"] && A435ea4 === A4a6deb || 0 === A435ea4["length"] && A3d503a["includes"](A4a6deb) || A550339["parentNode"]["getAttribute"](A5c2451)["startsWith"](A37c693))
            return A435ea4 = A4a6deb, A6c3fb1(A10f84e);
    }
    function A13722b(A19d9c5) {
        let A1ab33c = A19d9c5["querySelector"](A28a666);
        if (null === A1ab33c)
            return;
        let A3b5a85 = [];
        A1ab33c["childNodes"]["forEach"](A340528 => {
            let A2e0aff = getComputedStyle(A340528);
            0 === parseInt(A2e0aff["top"]) && (A3b5a85[A2e0aff["order"]] = A340528["innerHTML"]);
        });
        let A17af62 = A3b5a85["join"]("");
        if (A435ea4["length"] && A435ea4 === A17af62 || 0 === A435ea4["length"] && A3d503a["includes"](A17af62) || A1ab33c["parentNode"]["parentNode"]["parentNode"]["getAttribute"](A5c2451)["startsWith"](A37c693))
            return A435ea4 = A17af62, A6c3fb1(A19d9c5);
    }
    function A30718a(A33593c) {
        let A1e9633 = A33593c["querySelector"](":scope div[class='']>div[data-19]+div:not([data-19])>div>div>div>span");
        if (A1e9633 instanceof HTMLSpanElement && 1 === A1e9633["childNodes"]["length"])
            return A33593c["style"]["display"] = none, chrome["runtime"]["sendMessage"]({ "blockedCount": ++A45ff87 }), !0;
    }
    let A5232e5 = new MutationObserver(A132ea3 => {
        let A462073 = document["getElementById"](Ac8c9c9) || document["querySelector"](A5ae079), A216dfa = document["querySelector"]("div[role='feed']");
        if (null !== A462073 || null !== A216dfa)
            for (let A50e981 of (A462073 instanceof HTMLDivElement && (A462073["id"] = Ac8c9c9), A132ea3)) {
                if (0 === A50e981["addedNodes"]["length"])
                    continue;
                let A166738 = A50e981["addedNodes"][0];
                if (!A50e981["target"]["isSameNode"](A462073) && !A50e981["target"]["isSameNode"](A216dfa))
                    continue;
                let A1478c0 = blockSponsoredEnabled && (A186de6(A38f433, A166738) || A13722b(A166738));
                !A1478c0 && blockSuggestedEnabled && (A1478c0 = A30718a(A166738)), A1478c0 || getComputedStyle(A166738)["display"] !== none || chrome["runtime"]["sendMessage"]({ "blockedCount": ++A45ff87 });
            }
    });
    return () => {
        let A5850e8 = document["querySelector"](A5ae079);
        if (A5850e8 instanceof HTMLDivElement) {
            if (A5850e8["id"] = Ac8c9c9, blockSponsoredEnabled)
                A5850e8["querySelectorAll"](Ac3c35a)["forEach"](A560685 => {
                    A186de6(A38f433, A560685);
                }), A6c3fb1(document["querySelector"](A28a666)?.["closest"]("div[role='article']"));
            else {
                let Add3290 = document["createElement"]("style");
                Add3290["innerText"] = "div[data-instancekey]>div>div:nth-child(8),div[role='complementary']>div>div>div>div>div>span,div[data-instancekey]>div>div:nth-child(8),div:not([class]):has(div [class=aov4n071]),#feedContainer>div:has(div div>span>span[id]:not([class])>div:nth-child(2)[role='button']),#feedContainer>div:has(div div>span>span[id]:not([class])>a:nth-child(2)[href^='/business']){display:block;}", document["head"]["appendChild"](Add3290);
            }
            blockSuggestedEnabled && A5850e8["querySelectorAll"](Ac3c35a)["forEach"](A4c5102 => {
                A30718a(A4c5102);
            });
        }
        A5232e5["observe"](document["body"], config);
    };
})()), m = () => {
    if (blockSponsoredEnabled)
        setInterval(() => {
            currentBlockedCount = Array["from"](document["querySelectorAll"]("#MNewsFeed article"))["filter"](A2aefd7 => getComputedStyle(A2aefd7)["display"] === none)["length"], chrome["runtime"]["sendMessage"]({ "blockedCount": currentBlockedCount });
        }, 1000);
    else {
        let A27519b = document["createElement"]("style");
        A27519b["innerText"] = "article:has(div[data-sigil='m-feed-voice-subtitle']>:first-child:not(a)){display:block;}", document["head"]["appendChild"](A27519b);
    }
    if (blockSuggestedEnabled) {
        let A14125d = new MutationObserver(A481b3b => {
            for (let A34176d of A481b3b) {
                if (0 === A34176d["addedNodes"]["length"])
                    continue;
                let A32b831 = A34176d["addedNodes"][0];
                if ("SECTION" !== A32b831["tagName"])
                    continue;
                let A5406ac = A32b831["querySelectorAll"](":scope>article>header");
                A5406ac["forEach"](A2b98d6 => {
                    1 === A2b98d6["childNodes"]["length"] && (A2b98d6["closest"]("article")["style"]["display"] = none);
                });
            }
        });
        A14125d["observe"](document["body"], config);
    }
};