/*
 * @Autor: huasenjio
 * @Date: 2022-09-06 01:15:28
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-13 00:34:53
 * @Description: element登陆相关的校验
 */

import { checkParamsByRules } from '@/plugin/strategy.js';
const checkId = (rule, value, callback) => {
  let errText = checkParamsByRules([
    {
      value: value,
      rules: [
        {
          strategy: 'isNoEmpty',
          errMsg: '必填项',
        },
        {
          strategy: 'minLength：5',
          errMsg: '邮箱长度不能小于5',
        },
        {
          strategy: 'maxLength：20',
          errMsg: '邮箱长度不能大于20',
        },
        {
          strategy: 'isEmail',
          errMsg: '请输入邮箱登陆',
        },
      ],
    },
  ]);
  if (errText) {
    callback(new Error(errText));
  } else {
    callback();
  }
};

const checkPassword = (rule, value, callback) => {
  let errText = checkParamsByRules([
    {
      value: value,
      rules: [
        {
          strategy: 'isNoEmpty',
          errMsg: '必填项',
        },
        {
          strategy: 'minLength：5',
          errMsg: '密码长度不能小于5',
        },
        {
          strategy: 'maxLength：20',
          errMsg: '密码长度不能大于20',
        },
        {
          strategy: 'isPassword',
          errMsg: '仅支持数字/字母/下划线',
        },
      ],
    },
  ]);
  if (errText) {
    callback(new Error(errText));
  } else {
    callback();
  }
};

const checkMailCode = (rule, value, callback) => {
  let errText = checkParamsByRules([
    {
      value: value,
      rules: [
        {
          strategy: 'isNoEmpty',
          errMsg: '必填项',
        },
        {
          strategy: 'isNumber',
          errMsg: '请输入数字',
        },
      ],
    },
  ]);
  if (errText) {
    callback(new Error(errText));
  } else {
    callback();
  }
};

const checkSiteName = (rule, value, callback) => {
  let errText = checkParamsByRules([
    {
      value: value,
      rules: [
        {
          strategy: 'isNoEmpty',
          errMsg: '必填项',
        },
        {
          strategy: 'isChinese',
          errMsg: '请输入汉字/英文/数字',
        },
      ],
    },
  ]);
  if (errText) {
    callback(new Error(errText));
  } else {
    callback();
  }
};

const checkSiteUrl = (rule, value, callback) => {
  let errText = checkParamsByRules([
    {
      value: value,
      rules: [
        {
          strategy: 'isNoEmpty',
          errMsg: '必填项',
        },
        {
          strategy: 'isUrl',
          errMsg: '请输入正确的网址',
        },
      ],
    },
  ]);
  if (errText) {
    callback(new Error(errText));
  } else {
    callback();
  }
};

const checkSiteRemark = (rule, value, callback) => {
  let errText = checkParamsByRules([
    {
      value: value,
      rules: [
        {
          strategy: 'isNoEmpty',
          errMsg: '必填项',
        },
      ],
    },
  ]);
  if (errText) {
    callback(new Error(errText));
  } else {
    callback();
  }
};

export { checkId, checkPassword, checkMailCode, checkSiteName, checkSiteUrl, checkSiteRemark };
