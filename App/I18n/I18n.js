// @flow

import I18n from 'react-native-i18n';
const en = require('./languages/english.json');
const af = require('./languages/af.json');
const am = require('./languages/am.json');
const ar = require('./languages/ar.json');
const bg = require('./languages/bg.json');
const ca = require('./languages/ca.json');
const cs = require('./languages/cs.json');
const da = require('./languages/da.json');
const de = require('./languages/de.json');
const el = require('./languages/el.json');
const es = require('./languages/es.json');
const et = require('./languages/et.json');
const fil = require('./languages/fil.json');
const fi = require('./languages/fi.json');
const fr = require('./languages/fr.json');
const he = require('./languages/he.json');
const hi = require('./languages/hi.json');
const hr = require('./languages/hr.json');
const hu = require('./languages/hu.json');
const id = require('./languages/id.json');
const it = require('./languages/it.json');
const ja = require('./languages/ja.json');
const ko = require('./languages/ko.json');
const lt = require('./languages/lt.json');
const lv = require('./languages/lv.json');
const ms = require('./languages/ms.json');
const nb = require('./languages/nb.json');
const nl = require('./languages/nl.json');
const no = require('./languages/no.json');
const pl = require('./languages/pl.json');
const pt = require('./languages/pt.json');
const ro = require('./languages/ro.json');
const ru = require('./languages/ru.json');
const sl = require('./languages/sl.json');
const sk = require('./languages/sk.json');
const sr = require('./languages/sr.json');
const sv = require('./languages/sv.json');
const sw = require('./languages/sw.json');
const th = require('./languages/th.json');
const tr = require('./languages/tr.json');
const uk = require('./languages/uk.json');
const vi = require('./languages/vi.json');
const zh = require('./languages/zh.json');
const zu = require('./languages/zu.json');

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// English language is the main language for fall back:
I18n.translations = {
  en,
};

const languageCode = I18n.locale.substr(0, 2);

// All other translations for the app goes to the respective language file:
switch (languageCode) {
  case 'af':
    I18n.translations.af = af;
    break;
  case 'am':
    I18n.translations.am = am;
    break;
  case 'ar':
    I18n.translations.ar = ar;
    break;
  case 'bg':
    I18n.translations.bg = bg;
    break;
  case 'ca':
    I18n.translations.ca = ca;
    break;
  case 'cs':
    I18n.translations.cs = cs;
    break;
  case 'da':
    I18n.translations.da = da;
    break;
  case 'de':
    I18n.translations.de = de;
    break;
  case 'el':
    I18n.translations.el = el;
    break;
  case 'es':
    I18n.translations.es = es;
    break;
  case 'et':
    I18n.translations.et = et;
    break;
  case 'fi':
    {
      const addCode = I18n.locale.substr(0, 3);
      if (addCode === 'fil') {
        I18n.translations.fil = fil;
      } else {
        I18n.translations.fi = fi;
      }
    }
    break;
  case 'fr':
    I18n.translations.fr = fr;
    break;
  case 'he':
    I18n.translations.he = he;
    break;
  case 'hi':
    I18n.translations.hi = hi;
    break;
  case 'hr':
    I18n.translations.hr = hr;
    break;
  case 'hu':
    I18n.translations.hu = hu;
    break;
  case 'id':
    I18n.translations.id = id;
    break;
  case 'it':
    I18n.translations.it = it;
    break;
  case 'ja':
    I18n.translations.ja = ja;
    break;
  case 'ko':
    I18n.translations.ko = ko;
    break;
  case 'lt':
    I18n.translations.lt = lt;
    break;
  case 'lv':
    I18n.translations.lv = lv;
    break;
  case 'ms':
    I18n.translations.ms = ms;
    break;
  case 'nb':
    I18n.translations.nb = nb;
    break;
  case 'nl':
    I18n.translations.nl = nl;
    break;
  case 'no':
    I18n.translations.no = no;
    break;
  case 'pl':
    I18n.translations.pl = pl;
    break;
  case 'pt':
    I18n.translations.pt = pt;
    break;
  case 'ro':
    I18n.translations.ro = ro;
    break;
  case 'ru':
    I18n.translations.ru = ru;
    break;
  case 'sl':
    I18n.translations.sl = sl;
    break;
  case 'sk':
    I18n.translations.sk = sk;
    break;
  case 'sr':
    I18n.translations.sr = sr;
    break;
  case 'sv':
    I18n.translations.sv = sv;
    break;
  case 'sw':
    I18n.translations.sw = sw;
    break;
  case 'th':
    I18n.translations.th = th;
    break;
  case 'tr':
    I18n.translations.tr = tr;
    break;
  case 'uk':
    I18n.translations.uk = uk;
    break;
  case 'vi':
    I18n.translations.vi = vi;
    break;
  case 'zh':
    I18n.translations.zh = zh;
    break;
  case 'zu':
    I18n.translations.zu = zu;
    break;
  default:
    I18n.translations.th = en;
    break;
}
