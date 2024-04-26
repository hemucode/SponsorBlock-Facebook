/*
 * content-script.js
 * https://github.com/hemucode/SponsorBlock-Facebook/
 * MIT licensed
 *
 * Copyright (c) 2023 hemucode
 */

let blockSponsoredEnabled, 
    blockSuggestedEnabled;

const none = 'none', config = {
    'childList': !0,
    'subtree': !0
};
chrome['storage']['sync']['get']({
'sponsoredBlocked': !0,
'suggestedBlocked': !0
}, a => {
blockSponsoredEnabled = a['sponsoredBlocked'], blockSuggestedEnabled = a['suggestedBlocked'];
});
const d = ((() => {
    let b = '', g = 0, j = 'div[role=main] h3+div:not([class])', k = 'feedContainer', q = ':scope>div', v = ':scope div div>span>span[id]:not([class]) >span:nth-child(2)>span>a>span', w = 'href', x = 'div[role="feed"]> * div div>span>span:not([id])>span>span>a>span>span>span', y = '/ads/', z = [
            'Sponsored',
            'Publicidad',
            'Gesponsert',
            'Bersponsor',
            'Giisponsoran',
            'Sponzorirano',
            'Sponsoreret',
            'Sponsitud',
            'Commandité',
            'Sponsorisé',
            'Sponsore',
            'Sponsorizzato',
            'Sponsorkirî',
            'Hirdetés',
            'Gesponsord',
            'Sponset',
            'Sponsa',
            'Sponsorowane',
            'Patrocinado',
            'Sponsorizuar',
            'Sponzorrirano',
            'Sponsrad',
            'Sponsorıdû',
            'Sponzorováno',
            'La maalgeliyey',
            'مُموَّل',
            'Geborg',
            'Sponsor dəstəkli',
            'Disponsori',
            'Paeroniet',
            'Patrocinat',
            'Spunsurizatu',
            'Noddwyd',
            'pəɹosuodS',
            'Reklamo',
            'Babestua',
            'May Sponsor',
            'Misy Mpiantoka',
            'Yoɓanaama',
            'Stuðlað',
            'Urraithe',
            'Oñepatrosinapyre',
            'Daukar Nauyi',
            'Plaćeni oglas',
            'Icyamamaza ndasukirwaho',
            'Imedhaminiwa',
            'Peye',
            'Apmaksāta reklāma',
            'Remiama',
            'Sponsorjat',
            'Reklama',
            'Sponsorizat',
            'Patronadu de:',
            'Zvabhadharirwa',
            'Sponzorované',
            'Sponsoroitu',
            'Được tài trợ',
            'Kostað',
            'Szpōnzorowane',
            'Χορηγούμενη',
            'Рэклама',
            'Спонсорирано',
            'Ивээн тэтгэсэн',
            'Спонзорисано',
            'Хәйрияче',
            'Бо сарпарастӣ',
            'Демөөрчүлөнгөн',
            'Демеушілік көрсеткен',
            'Գովազդային',
            'سپانسرڈ',
            'دارای پشتیبانی مالی',
            'تمويل شوي',
            'پاڵپشتیکراو',
            'ܒܘܕܩܐ ܡܡܘܘܢܐ',
            'পৃষ্ঠপোষকতা কৰা ',
            'ਸਰਪ੍ਰਸਤੀ ਪ੍ਰਾਪਤ',
            'પ્રાયોજિત',
            'ପ୍ରଯୋଜିତ',
            'விளம்பரம்',
            'ప్రాయోజితం చేయబడింది',
            'ಪ್ರಾಯೋಜಿತ',
            'സ്പോൺസർ ചെയ്തത്',
            'අනුග්‍රාහක',
            'ຜູ້ສະໜັບສະໜູນ',
            'အခပေးကြော်ငြာ',
            'რეკლამა',
            'የተከፈለበት ማስታወቂያ',
            'បានឧបត្ថម្ភ',
            'ⵉⴷⵍ',
            '贊助',
            '赞助内容',
            '広告',
            'ממומן',
            'Реклама'
        ];
    function A(F) {
        if (F instanceof HTMLElement)
            return F['style']['display'] = none, chrome['runtime']['sendMessage']({ 'blockedCount': ++g }), !0;
    }
    function B(F, G) {
        if (null === (F = G['querySelector'](F)))
            return;
        let H = F['querySelector']('use');
        if (H && z['includes'](document['querySelector'](H['getAttribute']('xlink:href'))['innerHTML']))
            return A(G);
        let I = F['innerHTML'];
        if (b['length'] && b === I || 0 === b['length'] && z['includes'](I) || F['parentNode']['getAttribute'](w)['startsWith'](y))
            return b = I, A(G);
    }
    function C(F) {
        let G = F['querySelector'](x);
        if (null === G)
            return;
        let H = [];
        G['childNodes']['forEach'](J => {
            let K = getComputedStyle(J);
            0 === parseInt(K['top']) && (H[K['order']] = J['innerHTML']);
        });
        let I = H['join']('');
        if (b['length'] && b === I || 0 === b['length'] && z['includes'](I) || G['parentNode']['parentNode']['parentNode']['getAttribute'](w)['startsWith'](y))
            return b = I, A(F);
    }
    function D(F) {
        let G = F['querySelector'](':scope div[class=""]>div[data-19]+div:not([data-19])>div>div>div>span');
        if (G instanceof HTMLSpanElement && 1 === G['childNodes']['length'])
            return F['style']['display'] = none, chrome['runtime']['sendMessage']({ 'blockedCount': ++g }), !0;
    }
    let E = new MutationObserver(F => {
        let G = document['getElementById'](k) || document['querySelector'](j), H = document['querySelector']('div[role="feed"]');
        if (null !== G || null !== H)
            for (let I of (G instanceof HTMLDivElement && (G['id'] = k), F)) {
                if (0 === I['addedNodes']['length'])
                    continue;
                let J = I['addedNodes'][0];
                if (!I['target']['isSameNode'](G) && !I['target']['isSameNode'](H))
                    continue;
                let K = blockSponsoredEnabled && (B(v, J) || C(J));
                !K && blockSuggestedEnabled && (K = D(J)), K || getComputedStyle(J)['display'] !== none || chrome['runtime']['sendMessage']({ 'blockedCount': ++g });
            }
    });
    return () => {
        let F = document['querySelector'](j);
        if (F instanceof HTMLDivElement) {
            if (F['id'] = k, blockSponsoredEnabled)
                F['querySelectorAll'](q)['forEach'](G => {
                    B(v, G);
                }), A(document['querySelector'](x)?.['closest']('div[role="article"]'));
            else {
                let G = document['createElement']('style');
                G['innerText'] = 'div[data-instancekey]>div>div:nth-child(8),div[role="complementary"]>div>div>div>div>div>span,div[data-instancekey]>div>div:nth-child(8),div:not([class]):has(div [class=aov4n071]),#feedContainer>div:has(div div>span>span[id]:not([class])>div:nth-child(2)[role="button"]),#feedContainer>div:has(div div>span>span[id]:not([class])>a:nth-child(2)[href^="/business"]){display:block;}', document['head']['appendChild'](G);
            }
            blockSuggestedEnabled && F['querySelectorAll'](q)['forEach'](H => {
                D(H);
            });
        }
        E['observe'](document['body'], config);
    };
})()), m = () => {
    if (blockSponsoredEnabled)
        setInterval(() => {
            currentBlockedCount = Array['from'](document['querySelectorAll']('#MNewsFeed article'))['filter'](a => getComputedStyle(a)['display'] === none)['length'], chrome['runtime']['sendMessage']({ 'blockedCount': currentBlockedCount });
        }, 1000);
    else {
        let a = document['createElement']('style');
        a['innerText'] = 'article:has(div[data-sigil="m-feed-voice-subtitle"]>:first-child:not(a)){display:block;}', document['head']['appendChild'](a);
    }
    if (blockSuggestedEnabled) {
        let b = new MutationObserver(c => {
            for (let f of c) {
                if (0 === f['addedNodes']['length'])
                    continue;
                let g = f['addedNodes'][0];
                if ('SECTION' !== g['tagName'])
                    continue;
                let h = g['querySelectorAll'](':scope>article>header');
                h['forEach'](i => {
                    1 === i['childNodes']['length'] && (i['closest']('article')['style']['display'] = none);
                });
            }
        });
        b['observe'](document['body'], config);
    }
};
