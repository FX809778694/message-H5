import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vant
import './common/vant'
import 'vant/lib/index.less'

import './components/lib/index'
import './icons'

// less
import './assets/less/lib/index.less';

// filter
import './filter/index';

// 国际化
import i18n from './i18n';

// http
import './common/http'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
