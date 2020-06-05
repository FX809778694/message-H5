import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import Config from './http-config';
import { Message } from 'element-ui';
import i18n from '@/i18n';
import { getSessionStorage } from './utils';

function httpMessage (message = i18n.t('public.networkErr'), type = 'error') {
  Message.closeAll();

  Message({
    message,
    type,
    title: type === 'error' ? i18n.t('public.error') : i18n.t('public.notice'),
    duration: 3000
  })
}

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
    config.headers.token = getSessionStorage('token') || '';
    config.headers.crfstatus = getSessionStorage('crfstatus') || '';

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
      httpMessage(decodeURIComponent(res.headers.beforenote), 'warning');

    if (res && res.data && !res.data.success) {
      httpMessage(res.data.msg);
    }
    return res.data
  },

  err => {
    console.log('接口异常: \n', err.response);
    if (!getSessionStorage('token')) {
      httpMessage(i18n.t('public.loginAgain'));
      setTimeout(() => {
        window.open(err.response.headers.logout, '_self')
      }, 2000)
    }

    if (err.response.status === 500) {
      httpMessage(i18n.t('public.serverError'))
    } else if (err.response.status === 400) {
      httpMessage(i18n.t('public.parameterError'))
    } else if (err.response.status === 401) {
      if (err.response.headers && err.response.headers.logout) {
        if (err.response.headers.msg) {
          httpMessage(decodeURIComponent(err.response.headers.msg), 'warning');
          setTimeout(() => {
            window.open(err.response.headers.logout, '_self')
          }, 2000)
        } else {
          window.open(err.response.headers.logout, '_self')
        }
      }
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

Vue.prototype.$http = http;
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

