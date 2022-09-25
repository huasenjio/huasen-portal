/*
 * @Autor: huasenjio
 * @Date: 2022-02-27 18:19:26
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-06 23:22:25
 * @Description: 后端的静态文件目录地址转换成为http地址
 */

import CONSTANT from '../constant/index';

/**
 * 统一将url转成可以访问的http连接
 * @param {Srting} path 后端静态文件夹连接，例如：public/admin/xxx.png
 * @returns String
 */
export function handleFileURL(url) {
  return /^public/.test(url) || /^huasen-public-static/.test(url)
    ? `${CONSTANT.baseURL}${url}` // public/xxx.png || huasen-public-static/xxx.png
    : url; // https || http || base64
}
