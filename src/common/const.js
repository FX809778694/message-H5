import i18n from '@/i18n'

// 验证string字符类型的长度
export const stingReg = (rule, value, callback) => {
  if (value.value || value.value === 0) {
    if (value.fieldtype === 'string' && value.value.length > 99) {
      callback(new Error(i18n.t('public.stringMax100')));
    }  else {
      callback();
    }
  } else {
    if (value.required) {
      callback(new Error(`${value.fieldname}` + i18n.t('public.notEmpty')));
    } else {
      callback();
    }
  }
};

export const IDReg = /(^\d{15}$)|(^\d{17}(\d|X|x)$)/
