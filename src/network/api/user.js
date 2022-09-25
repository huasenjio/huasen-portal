/*
 * @Autor: huasenjio
 * @Date: 2022-09-06 21:34:24
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-20 22:18:06
 * @Description: 用户相关接口
 */

import Mock from 'mockjs2';
import { get, post } from '../request.js';

const login = post('/user/login', {
  id: '184820911@qq.com',
  name: '演示用户',
  code: 4,
  token: '1234567890',
  headImg: 'http://n.huasen.cc/server/public/default/headImg/1.png',
  record: [
    {
      id: '1',
      name: '花森小窝',
      url: 'http://huasen.cc/',
      remark: '备注1',
    },
    {
      id: '2',
      name: '花森主页',
      url: 'http://n.huasen.cc/',
      remark: '备注2',
    },
  ],
  config: {
    bg: 'http://a.huasen.cc/server/huasen-public-static/admin/1651405567504.jpeg',
    bgFilter: 0,
    bgLightness: 0,
    lightMode: false,
    simpleMode: false,
    theme: {},
  },
});

const register = post('/user/register', {});

export default {
  login,
  register,
};
