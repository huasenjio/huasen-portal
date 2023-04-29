/*
 * @Autor: huasenjio
 * @Date: 2022-10-22 15:47:52
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-04-29 18:39:49
 * @Description:
 */
import Mock from 'mockjs2';
import { get, post } from '../request.js';

// 获取邮箱验证码
const getMailCode = get('/mail/getCode');

export default {
  getMailCode,
};
