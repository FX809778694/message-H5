import en from './langs/en'
import cn from './langs/cn'
import cnPublic from './lib/cn'
import enPublic from './lib/en'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zh_CN',
  messages: {
    en_US: {...enPublic, ...en},
    zh_CN: {...cnPublic, ...cn},
  },
});

import { Locale } from 'vant';
import zhCN from 'vant/lib/locale/lang/zh-CN';
// import enUS from 'vant/lib/locale/lang/en-US';

Locale.use('zh-CN', zhCN);

export default i18n;

