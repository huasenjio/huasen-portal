/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-30 00:20:22
 * @Description: 常量文件
 */
export default {
  // 资源链接前缀
  baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000/' : '/server/',
  // 用户本地标识
  localUser: 'localUser',
  // 根节点最小宽度
  appMinWidth: 435,
};
