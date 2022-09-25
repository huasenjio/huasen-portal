/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-22 23:11:42
 * @Description: 常量文件
 */
export default {
  // 链接常量，用于拼接下载链接、图片链接、上传链接
  baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000/' : '/server/',
  // 本地保存用户数据对应的Key
  localUser: 'localUser',
};
