$(function () {
    let F16babd = $(document),
        F1e6f5e = 0,
        F8ab9d5;

    function F78a1c(F40a03a, F5150f6) {
        0 !== F40a03a['length'] && (F40a03a['hide'](), chrome['runtime']['sendMessag' + 'e']({
            'blockedCount': ++F1e6f5e
        }));
    }
    if ($('#MNewsFeed')['length']) {
        let F1736e5 = 'div[data-s' + 'igil=\"m-fe' + 'ed-voice-s' + 'ubtitle\"] ' + '> :first-c' + 'hild:not(a' + ')',
            F457152 = 'article';

        function F54d125() {
            F78a1c($(this)['closest'](F457152));
        }

        function F3302f7() {
            F78a1c($(this)['not'](':has(*)')['closest'](F457152));
        }

        function F51ec8f() {
            F8ab9d5 = 'article > ' + 'header', F78a1c($(F1736e5)['closest'](F457152)), F78a1c($(F8ab9d5)['not'](':has(*)')), F16babd['unbindArri' + 've'](F1736e5, F54d125), F16babd['unbindArri' + 've'](F8ab9d5, F3302f7), F16babd['arrive'](F1736e5, F54d125), F16babd['arrive'](F8ab9d5, F3302f7);
        }
        F51ec8f(), F16babd['on']('click', 'a', F51ec8f);
        return;
    }
    let F158d6a, F5c8aab, F3b8e57, F413255 = '',
        F4b872d = 'div[role=\"' + 'feed\"] > *',
        F20b073 = 'div[role=\"' + 'feed\"] > *' + ' div div >' + ' span > sp' + 'an[id]:not' + '([class])',
        F3c4780 = F20b073 + ('> span:nth' + '-child(2) ' + '> span > a' + ' > span'),
        F4c3a88 = F20b073 + ('> div:nth-' + 'child(2)[r' + 'ole=\"butto' + 'n\"]'),
        F235a7b = F20b073 + ('> a:nth-ch' + 'ild(2)[hre' + 'f^=\"/busin' + 'ess\"]'),
        F32b4b6 = 'div[role=\"' + 'feed\"] > *' + ' div [clas' + 's=aov4n071' + ']',
        F4d5748 = 'div[role=\"' + 'complement' + 'ary\"] > di' + 'v > div > ' + 'div > div ' + '> div > sp' + 'an',
        F2b837b = 'span',
        F3a7f92 = /[\/]videos[\/]\d+$/,
        F1fe40c = 'div[role=\"' + 'feed\"] div' + '.sjgh65i0[' + 'role=\"arti' + 'cle\"] span' + '.j1lvzwm4',
        F155077 = 'div[role=\"' + 'article\"]';

    function F345948() {
        F78a1c($(this)['closest'](F4b872d));
    }

    function F124a50() {
        let F3c8461 = $(this),
            F33faa1 = [],
            Fca0f14 = F3c8461['find']('> span > s' + 'pan'),
            F42494e;
        if (0 === Fca0f14['length']) {
            if (0 === (Fca0f14 = F3c8461['find']('> span > b'))['length'])
                return;
            F42494e = Fca0f14['children']('[class$=\"' + Fca0f14[0]['className']['substr'](-11) + '\"]')['text']();
        } else
            Fca0f14['children']()['each']((F5c24f1, Fe26259) => {
                let F37a373 = $(Fe26259);
                0 === parseInt(F37a373['css']('top')) && (F33faa1[F37a373['css']('order')] = Fe26259['innerText']);
            }), F42494e = F33faa1['join']('');
        (F413255['length'] && F413255 === F42494e || 0 === F413255['length'] && spTxts['includes'](F42494e) || F3c8461['parent']()['attr']('href')['startsWith']('/ads/')) && (F413255 = F42494e, F78a1c(F3c8461['closest'](F4b872d)));
    }

    function F537f2f() {
        let F3cddb2 = $(this),
            F46fe36 = F3cddb2['text']();
        (F413255['length'] && F413255 === F46fe36 || 0 === F413255['length'] && spTxts['includes'](F46fe36) || F3cddb2['parent']()['attr']('href')['startsWith']('/ads/')) && (F413255 = F46fe36, F78a1c(F3cddb2['closest'](F4b872d)));
    }

    function _11e6ed() {
        let F913b83 = $(this);
        0 === F913b83['find']('>a')['length'] && 1 === F913b83['contents']()['length'] && F78a1c(F913b83['closest'](F4b872d));
    }

    function F1b2623() {
        F78a1c($(this)['closest'](F2b837b));
    }

    function F13d501() {
        F78a1c($(this)['closest']('div:not([c' + 'lass])'));
    }

    function F5baad9() {
        F78a1c($(this)['closest'](F155077));
    }

    function F2a8027() {
        F78a1c($(this)['parent']()['children']()['eq'](7));
    }

    function F43392e() {
        if (F3a7f92['test'](location['href']) && (F16babd['unbindArri' + 've']('div[data-i' + 'nstancekey' + '] > div > ' + 'div', F2a8027), F16babd['arrive']('div[data-i' + 'nstancekey' + '] > div > ' + 'div', F2a8027)), !F3a7f92['test'](location['href']) || $('.mdeji52x.' + 'e9vueds3.l' + 'razzd5p.lj' + 'qsnud1')['length'])
            return;
        let F1d3eda = 0,
            F1b8427 = setInterval(function () {
                let F416dab = $('.k4urcfbm.' + 'l9j0dhe7.d' + 'atstx6m.a8' + 'c37x1j.du4' + 'w35lb')['eq'](1),
                    F24b3a9 = F416dab['closest']('div[role=\"' + 'main\"] > d' + 'iv > div >' + ' div'),
                    F28b599 = F416dab['find']('video');
                0 === F24b3a9['length'] && (F416dab = (F28b599 = (F24b3a9 = $('div[role=\"' + 'main\"] > d' + 'iv > div >' + ' div'))['find']('video'))['closest']('.k4urcfbm.' + 'l9j0dhe7.d' + 'atstx6m.a8' + 'c37x1j.du4' + 'w35lb')), F1d3eda > 1000 && clearInterval(F1b8427), F1d3eda++;
                let F56b993 = F24b3a9['find']('div.oajrlx' + 'b2.g5ia77u' + '1.gcieejh5')['eq'](1);
                if (0 === F416dab['length'] || 0 === F24b3a9['length'] || 0 === F28b599['length'] || 0 === F56b993['length'])
                    return;
                F24b3a9['before'](F56b993['css']({
                    'zIndex': 1,
                    'position': 'fixed',
                    'bottom': 41,
                    'right': 360
                }));
                let F638a5e = !1;
                F56b993['unbind']('click')['click'](function () {
                    if (F638a5e) {
                        F638a5e = !1, F56b993['css']('right', 360);
                        return;
                    }
                    F56b993['css']('right', 0), F638a5e = !0;
                }), F24b3a9['before'](F416dab), F24b3a9['remove'](), F28b599[0]['controls'] = !0, clearInterval(F1b8427);
            }, 0x4);
    }

    function F3ec66e(F386a71, F525bea) {
        let F29d2f7 = 0,
            F3cb86f = setInterval(function () {
                F29d2f7++, (F386a71 !== location['href'] || !(F29d2f7 > 1000)) && (F525bea(), clearInterval(F3cb86f));
            }, 4);
    }

    function Ffe5236() {
        F5c8aab && (F16babd['unbindArri' + 've'](F3c4780, F124a50), F16babd['unbindArri' + 've'](F3c4780, F537f2f), F16babd['arrive'](F3c4780, F124a50), F16babd['arrive'](F3c4780, F537f2f), F16babd['unbindArri' + 've'](F4d5748, F1b2623), F16babd['arrive'](F4d5748, F1b2623), F16babd['unbindArri' + 've'](F4c3a88, F345948), F16babd['arrive'](F4c3a88, F345948), F16babd['unbindArri' + 've'](F235a7b, F345948), F16babd['arrive'](F235a7b, F345948), F16babd['unbindArri' + 've'](F1fe40c, F5baad9), F16babd['arrive'](F1fe40c, F5baad9), F16babd['unbindArri' + 've'](F32b4b6, F13d501), F16babd['arrive'](F32b4b6, F13d501), F16babd['find'](F3c4780)['each'](F124a50), F16babd['find'](F3c4780)['each'](F537f2f), F78a1c(F16babd['find'](F4c3a88)['closest'](F4b872d)), F78a1c(F16babd['find'](F235a7b)['closest'](F4b872d)), F78a1c(F16babd['find'](F4d5748)['closest'](F2b837b)), F78a1c(F16babd['find'](F1fe40c)['closest'](F155077))), F3b8e57 && (F16babd['unbindArri' + 've'](F8ab9d5, _11e6ed), F16babd['arrive'](F8ab9d5, _11e6ed)), F158d6a && ('A' !== this['tagName'] || F3a7f92['test'](location['href']) ? F43392e() : F3ec66e(location['href'], F43392e));
    }
    F8ab9d5 = 'div[role=a' + 'rticle] di' + 'v[class=\"g' + 't60zsk1 r2' + '27ecj6\"] s' + 'pan', spTxts = [
        'Sponsored',
        'Publicidad',
        'Gesponsert',
        'Bersponsor',
        'Giisponsor' + 'an',
        'Sponzorira' + 'no',
        'Sponsorere' + 't',
        'Sponsitud',
        'Commandité',
        'Sponsorisé',
        'Sponsore',
        'Sponsorizz' + 'ato',
        'Sponsorkir' + 'î',
        'Hirdetés',
        'Gesponsord',
        'Sponset',
        'Sponsa',
        'Sponsorowa' + 'ne',
        'Patrocinad' + 'o',
        'Sponsorizu' + 'ar',
        'Sponzorrir' + 'ano',
        'Sponsrad',
        'Sponsorıdû',
        'Sponzorová' + 'no',
        'La maalgel' + 'iyey',
        'مُموَّل',
        'Geborg',
        'Sponsor də' + 'stəkli',
        'Disponsori',
        'Paeroniet',
        'Patrocinat',
        'Spunsuriza' + 'tu',
        'Noddwyd',
        'pəɹosuodS',
        'Reklamo',
        'Babestua',
        'May Sponso' + 'r',
        'Misy Mpian' + 'toka',
        'Yoɓanaama',
        'Stuðlað',
        'Urraithe',
        'Oñepatrosi' + 'napyre',
        'Daukar Nau' + 'yi',
        'Plaćeni og' + 'las',
        'Icyamamaza' + ' ndasukirw' + 'aho',
        'Imedhamini' + 'wa',
        'Peye',
        'Apmaksāta ' + 'reklāma',
        'Remiama',
        'Sponsorjat',
        'Reklama',
        'Sponsoriza' + 't',
        'Patronadu ' + 'de:',
        'Zvabhadhar' + 'irwa',
        'Sponzorova' + 'né',
        'Sponsoroit' + 'u',
        'Được tài t' + 'rợ',
        'Kostað',
        'Szpōnzorow' + 'ane',
        'Χορηγούμεν' + 'η',
        'Рэклама',
        'Спонсорира' + 'но',
        'Ивээн тэтг' + 'эсэн',
        'Спонзориса' + 'но',
        'Хәйрияче',
        'Бо сарпара' + 'стӣ',
        'Демөөрчүлө' + 'нгөн',
        'Демеушілік' + ' көрсеткен',
        'Գովազդային',
        'سپانسرڈ',
        'دارای پشتی' + 'بانی مالی',
        'تمويل شوي',
        'پاڵپشتیکرا' + 'و',
        'ܒܘܕܩܐ ܡܡܘܘ' + 'ܢܐ',
        'পৃষ্ঠপোষকত' + 'া কৰা ',
        'ਸਰਪ੍ਰਸਤੀ ਪ' + '੍ਰਾਪਤ',
        'પ્રાયોજિત',
        'ପ୍ରଯୋଜିତ',
        'விளம்பரம்',
        'ప్రాయోజితం' + ' చేయబడింది',
        'ಪ್ರಾಯೋಜಿತ',
        'സ്പോൺസർ ചെ' + 'യ്തത്',
        'අනුග්‍රාහක',
        'ຜູ້ສະໜັບສະ' + 'ໜູນ',
        'အခပေးကြော်' + 'ငြာ',
        'რეკლამა',
        'የተከፈለበት ማስ' + 'ታወቂያ',
        'បានឧបត្ថម្' + 'ភ',
        'ⵉⴷⵍ',
        '贊助',
        '赞助内容',
        '広告',
        'ממומן',
        'Реклама'
    ], chrome['storage']['sync']['get']({
        'videoAdBlocked': !1,
        'sponsoredBlocked': !0,
        'suggestedBlocked': !0
    }, function (F4a0e3d) {
        F158d6a = F4a0e3d['videoAdBlo' + 'cked'], F5c8aab = F4a0e3d['sponsoredB' + 'locked'], F3b8e57 = F4a0e3d['suggestedB' + 'locked'], Ffe5236();
    }), F16babd['on']('click', 'a', Ffe5236), F158d6a && (F16babd['on']('click', 'div[role=\"' + 'presentati' + 'on\"].nhd2j' + '8a9', function () {
        F3ec66e(location['href'], F43392e);
    }), F16babd['on']('click', 'a[href*=\"/' + 'videos/\"]', function () {
        F3ec66e(location['href'], F43392e);
    }));
});