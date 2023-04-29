/*
 * @Autor: huasenjio
 * @Date: 2022-10-26 23:40:52
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-04-29 17:14:33
 * @Description: 系统相关接口
 */

import Mock from 'mockjs2';
import { get, post } from '../request.js';

const findAppConfig = post('/manage/findAppConfig', {
  article: {
    id: '9527',
    course: '63666be7964404694b299520',
    about: '63666be7964404694b299521',
    help: '63666be7964404694b299522',
  },
  theme: {
    pure: [
      {
        color: '#FFFFFF',
        background: '#31c2e0',
      },
      {
        color: '#FFFFFF',
        background: '#8e54e9',
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
  },
});

export default { findAppConfig };
