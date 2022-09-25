/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-08-30 22:57:28
 * @Description: 统一配置请求拦截器
 */

import Vue from 'vue';
const that = Vue.prototype;
import { mockResponseFormat } from './utils';

function requestIntercept(config) {
  // 开启遮罩
  that.$startLoading();
  return config;
}

function requestError(error) {
  // 发生错误时关闭重置遮罩
  that.$resetLoading();
  // 请求无法发出时的错误
  return Promise.reject(error);
}

function responseIntercept(result) {
  // 关闭遮罩
  that.$stopLoading();
  // 判断响应头类型，如果数据为二进制流，直接放行
  if (result.headers['content-type'] === 'application/octet-stream') {
    return result;
  }
  // 针对mock请求，使用返回格式工具处理返回参数
  if (result.config._isMock) {
    result.data = mockResponseFormat(result.data);
  }
  // 正常的逻辑提示处理
  if (result.status === 200 && result.data.code === 200) {
    // 提示请求成功
    if (result.config._notify) {
      that.$tips('success', result.data.msg, 'top-right', 1200);
    }
    return result.data;
  } else if (result.data.code === 500) {
    // 请求出错
    if (result.config._errorNotify) {
      that.$tips('error', result.data.msg, 'top-right', 1200);
    }
  } else if (result.data.code === 204) {
    // 请求受理但是无返回
    if (result.config._errorNotify) {
      that.$tips('warning', result.data.msg, 'top-right', 1200);
    }
  } else if (result.data.code === 401 || result.data.code === 403) {
    // 重新认证，权限不足
    if (result.config._errorNotify) {
      that.$tips('warning', result.data.msg, 'top-right', 1200, () => {
        window.location.reload();
      });
    }
  }
  return Promise.reject(result);
}

function responseError(error) {
  // 发生错误时关闭重置遮罩
  that.$resetLoading();
  if (!navigator.onLine) {
    that.$tips('error', '请检查网络是否连接', 'top-right', 2000);
  } else {
    that.$tips('error', '服务器已经崩溃了', 'top-right', 2000);
  }
  return Promise.reject(error);
}

export default {
  requestIntercept,
  responseIntercept,
  requestError,
  responseError,
};
