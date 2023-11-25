/*
 * @Autor: huasenjio
 * @Date: 2022-10-22 10:49:51
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-03-19 15:16:30
 * @Description:
 */

import Mock from 'mockjs2';
import { get, post } from '../request.js';

const findJournal = post(
  '/journal/findAll',
  [
    {
      _id: '641881fa39ede6001dacb8b9',
      name: '默认订阅',
      expand: '{}',
      code: 0,
    },
  ],
  true,
);
const findJournalInformationById = post(
  '/journal/findJournalInformationById',
  {
    _id: '641881fa39ede6001dacb8b9',
    name: '默认订阅',
    code: 0,
    expand: '{}',
    series: [
      {
        typeName: '实用工具',
        sites: [
          {
            _id: '6418835e39ede6001dacba0b',
            name: 'ChatGPT',
            url: 'https://chat.openai.com/',
            icon: 'http://n.huasen.cc/huasen-store/icon/1676792653674.png',
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
      },
      {
        typeName: '文艺视听',
        sites: [
          {
            expand: '{}',
            enabled: true,
            code: 0,
            _id: '6418821e39ede6001dacb8cd',
            name: '网易云',
            url: 'https://music.163.com/',
            icon: 'huasen-store/icon/1666507242478.png',
            description: '专注于发现与分享的音乐平台',
            remarks: '',
            __v: 0,
          },
          {
            expand: '{}',
            enabled: true,
            code: 0,
            _id: '6418821e39ede6001dacb8d2',
            name: '哔哩哔哩',
            url: 'https://www.bilibili.com/',
            icon: 'http://n.huasen.cc/huasen-store/icon/1666507825660.png',
            description: '国内知名的视频弹幕网站',
            remarks: '',
            __v: 0,
          },
        ],
      },
    ],
  },
  true,
);

export default {
  findJournal,
  findJournalInformationById,
};
