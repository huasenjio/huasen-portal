/*
 * @Autor: huasenjio
 * @Date: 2022-09-06 21:34:24
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-10-24 23:15:40
 * @Description: 用户相关接口
 */

import Mock from 'mockjs2';
import { get, post } from '../request.js';

const login = post('/user/login');
const register = post('/user/register');
const updatePassword = post('/user/updatePassword');
const backup = post('/user/backup');
const consistentFromCloud = post('/user/consistentFromCloud');
const findAppConfig = post(
  '/user/findAppConfig',
  {
    site: {
      brandName: '花森',
      brandUrl: '',
      redirectUrl: 'http://huasen.cc/',
      guidePageName: '花森小窝',
      guidePageUrl: 'http://huasen.cc/',
      footerHtml: '<a href="https://beian.miit.gov.cn/">桂ICP备20001761号</a>',
      openLabelClassification: true,
      serviceQRCodeUrl: '',
    },
    theme: {
      pure: [
        {
          color: '#ffffff',
          background: '#000000',
        },
        {
          color: '#ffffff',
          background: '#000000',
        },
      ],
      wallpaper: [
        {
          headerFontColor: '#FFFFFF',
          background: 'https://s2.loli.net/2023/03/31/oSz3nJB84dC5ueh.jpg',
        },
        {
          headerFontColor: '#000000',
          background: 'https://s2.loli.net/2023/03/31/W9n7RoFvhtlpg6U.jpg',
        },
      ],
      default: {
        bg: 'https://s2.loli.net/2023/03/31/W9n7RoFvhtlpg6U.jpg',
        color: '#000000',
      },
    },
    article: {
      changelog: '648c79d1cdf0f0076b134525',
      about: '648c79d1cdf0f0076b134525',
      help: '648c79d1cdf0f0076b134525',
    },
  },
  true,
);

export default {
  login,
  register,
  updatePassword,
  backup,
  consistentFromCloud,
  findAppConfig,
};
