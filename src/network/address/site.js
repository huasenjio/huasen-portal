/*
 * @Autor: huasenjio
 * @Date: 2022-10-22 10:49:51
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-03-19 14:13:30
 * @Description:
 */

import Mock from 'mockjs2';
import { get, post } from '../request.js';

const findSiteByCode = post(
  '/site/findByCode',
  [
    {
      _id: '6418835e39ede6001dacba0b',
      name: 'ChatGPT',
      url: 'https://chat.openai.com/',
      icon: 'huasen-store/icon/1676792653674.png',
      code: 0,
      expand: '{"tag":["聊天"],"pin":[2,1,4]}',
      description: '一种基于机器学习的聊天机器人',
      remarks: '',
      describe: '一种基于机器学习的聊天机器人',
      remark: '',
    },
    {
      _id: '6418821e39ede6001dacb8bc',
      name: '熊猫缩图',
      url: 'https://tinypng.com/',
      icon: 'huasen-store/icon/1693624397213.png',
      code: 0,
      expand: '{"tag":["图片"],"pin":[3]}',
      description: '在线图片压缩工具',
      remarks: '',
      describe: '在线图片压缩工具',
      remark: '',
    },
  ],
  true,
);
export default {
  findSiteByCode,
};
