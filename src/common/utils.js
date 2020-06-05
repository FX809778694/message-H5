import Vue from 'vue'
import _ from 'lodash'

/**
 * @desc 对象筛选公共方法
 * @param obj：被删选的对象
 * @param arr：数组想要的key值
 * @return 筛选后的对象
 *
 * */
export let $filterObj = function (obj, arr) {
  const result = {};
  Object.keys(obj).filter((key) => arr.includes(key)).forEach((key) => {
    result[key] = obj[key]
  });
  return result
};

Vue.prototype.$filterObj = $filterObj;

export const setLocalStorage = (name, val) => {
  window.localStorage.setItem(name, JSON.stringify(val));
};

export const getLocalStorage = name => {
  return JSON.parse(window.localStorage.getItem(name));
};

export const removeLocalStorage = opt => {
  window.localStorage.removeItem(opt);
};

export const setSessionStorage = (name, val) => {
  window.sessionStorage.setItem(name, JSON.stringify(val));
};

export const getSessionStorage = name => {
  return JSON.parse(window.sessionStorage.getItem(name));
};

export const removeSessionStorage = opt => {
  window.sessionStorage.removeItem(opt);
};

Vue.prototype.$setLocalStorage = setLocalStorage;
Vue.prototype.$getLocalStorage = getLocalStorage;
Vue.prototype.$removeLocalStorage = removeLocalStorage;
Vue.prototype.$setSessionStorage = setSessionStorage;
Vue.prototype.$getSessionStorage = getSessionStorage;
Vue.prototype.$removeSessionStorage = removeSessionStorage;

/**
 * @desc 11 -> ['UK', 00, 01, 02, ... , 10, 11]
 * @param {Number} type
 * @param {Boolean} fromZero 是否从0开始
 *
 * */
export const getTimeSelector = function (type, fromZero = true) {
  let _a = Array.from(new Array(type), (item, index) => {
    return index >= 10 ? '' + index : '0' + index
  });

  if (!fromZero) {
    _a = _.tail(_a);
    _a.push('' + type)
  }

  return ['UK', ..._a]
};

/**
 * 判断B数组是A数组的子集
 *
 * */
export const subset = function (A = [], B = []) {
  A = A.slice();
  for (let i = 0; i < B.length; i++) {
    if (A.indexOf(B[i]) === -1) {
      return false;
    } else {
      A.splice(A.indexOf(B[i]), 1);
    }
  }
  return true;
};

/**
 * 判断对象或者数组不为空
 *
 * */
export const objectIsNotEmpty = function (o) {
  let flag = o && o !== 'null' && o !== 'undefined' && o !== 'false' && o !== 'NaN';

  if (flag) {
    const type = Object.prototype.toString.call(o);

    if (type === '[object Object]') {
      flag = !!Object.keys(o).length;
    } else if (type === '[object Array]') {
      flag = !!o.length;
    }
  }

  return flag;
};

export function isFunction (fn) {
  return Object.prototype.toString.call(fn) === '[object Function]'
}

export const isTrue = function (o) {
  let flag = o && o !== 'null' && o !== 'undefined' && o !== 'false' && o !== 'NaN';
  return flag || flag === 0
};

export const isFalse = function (o) {
  return !isTrue(o)
};

export function selectToValue (col, row) {
  let showValue = '';
  if (!col.innerid) col.innerid = col.prop;
  let value = row[col.innerid];

  if (col.fieldtype === 'select' && col.innerid && col.selector.filter(item => item.codevalue === value).length) {
    showValue = col.selector.filter(item => item.codevalue === value)[0].codedesp

  } else if (col.fieldtype === 'mselect' && col.innerid && value) {

    if (!Array.isArray(value)) value = value.split(',');

    value.map((cellValue, cellIndex) => {
      col.selector.filter(item => {
        if (item.codevalue === cellValue) showValue += item.codedesp + (cellIndex + 1 === value.length ? '' : ',');
      })
    })
  }

  return showValue;
}

export const isIphoneBangs = () => {
  // X XS, XS Max, XR, 11, 11pro, 11pro MAX
  const xSeriesConfig = [
    {
      devicePixelRatio: 3,
      width: 375,
      height: 812,
    },
    {
      devicePixelRatio: 3,
      width: 414,
      height: 896,
    },
    {
      devicePixelRatio: 2,
      width: 414,
      height: 896,
    },
  ];
  // h5
  if (typeof window !== 'undefined' && window) {
    const isIOS = /iphone/gi.test(window.navigator.userAgent);
    if (!isIOS) return false;
    const { devicePixelRatio, screen } = window;
    const { width, height } = screen;
    return xSeriesConfig.some(item => item.devicePixelRatio === devicePixelRatio && item.width === width && item.height === height);
  }
  return false;
}
