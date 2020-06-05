import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vant
import Vant from 'vant';
import 'vant/lib/index.less';
Vue.use(Vant);

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
