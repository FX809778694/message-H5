import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import Config from './http-config';
import { Toast } from 'vant';
// import i18n from '@/i18n';
import { getSessionStorage } from './utils';
import router from '../router'

const instance = axios.create({
  baseURL: Config.baseUrl,
  timeout: 16000
});


/**
 * 请求拦截处理
 *
 * header加语言判断
 * header加token, selrole, crfstatus
 *
 * */
instance.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);


/**
 * 响应拦截器处理
 *
 * 1. 判断请求是否成功
 * 2. 判断返回数据是否为空
 * 3. 判断是否有权限调用该接口，无则重定向
 *
 * */
instance.interceptors.response.use(
  res => {
    /**
     * 距维护30分钟之内，提示
     * */
    if (res.headers.beforenote)
      Toast(decodeURIComponent(res.headers.beforenote));

    if (res && res.data && !res.data.success) {
      Toast(res.data.msg)
    }
    return res.data
  },

  err => {
    if (!getSessionStorage('token')) {
      Toast('用户信息失效，请重新登录');
      setTimeout(() => {
        window.open(err.response.headers.logout, '_self')
      }, 2000)
    }

    if (err.response.status === 500) {
      Toast.fail('服务器错误');
    } else if (err.response.status === 400) {
      Toast('接口参数错误')
    } else if (err.response.status === 401) {
      if (err.response.headers && err.response.headers.logout) {
        if (err.response.headers.msg) {
          Toast(decodeURIComponent(err.response.headers.msg));
          setTimeout(() => {
            router.push({path: '/login'})
          }, 2000)
        } else {
          router.push({path: '/login'})
        }
      }
    } else if (err.response.status === 404) {
      Toast('404')
    }

    return Promise.reject(err);
  }
);

let http = {};
http.get = async (url, params) => {
  return instance.get(url + '?time=' + new Date().getTime(), {
    params: qs.parse(params)
  });
};

http.post = (url, data = {}) => {
  return instance.post(url + '?time=' + new Date().getTime(), data);
};

Vue.prototype.$get = http.get;
Vue.prototype.$post = http.post;
export default http;

/*

                      _oo0oo_
                     o8888888o
                     88" . "88
                     (| -_- |)
                     0\  =  /0
                   ___/`---'\___
                 .' \\|     |// '.
                / \\|||  :  |||// \
               / _||||| -:- |||||- \
              |   | \\\  -  /// |   |
              | \_|  ''\---/''  |_/ |
              \  .-\__  '-'  ___/-. /
            ___'. .'  /--.--\  `. .'___
         ."" '<  `.___\_<|>_/___.' >' "".
        | | :  `- \`.;`\ _ /`;.`/ - ` : | |
        \  \ `_.   \_ __\ /__ _/   .-` /  /
    =====`-.____`.___ \_____/___.-`___.-'=====
                      `=---='

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

              佛祖保佑         永无BUG
*/

