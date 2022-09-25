/*
 * @Autor: huasenjio
 * @Date: 2022-09-06 21:37:39
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-25 10:43:27
 * @Description: 共用接口
 */
import Mock from 'mockjs2';
import { get, post } from '../request.js';

// 获取订阅的网链
const getTakes = get('/take/query', {
  takes: [
    {
      name: '常用热门',
      id: '184820911@qq.com',
      takeCode: 1,
      series: [
        {
          typeName: '实用·工具',
          sites: [
            {
              describe: '免费的大文件传输工具',
              imgClass: 'icon-hs-niunaikuaichuan',
              name: '牛奶快传',
              url: 'https://cowtransfer.com/',
              mark: '',
            },
            {
              describe: '无需安装的在线传输数据网站',
              imgClass: 'icon-hs-kongtou',
              name: '空投',
              url: 'https://airportal.cn/',
              mark: '',
            },
            {
              describe: '超好用在线智能创作平台',
              imgClass: 'icon-hs-default',
              name: '智影',
              url: 'https://zenvideo.qq.com/',
              mark: '',
            },
            {
              describe: '号称世界上最准确的翻译器',
              imgClass: 'icon-hs-deepl',
              name: 'DeepL翻译器',
              url: 'https://www.deepl.com/translator',
              mark: '',
            },
            {
              describe: '一款专注于文件格式转换的免费网站',
              imgClass: 'icon-hs-alltoall',
              name: 'All2All',
              url: 'https://www.alltoall.net/',
              mark: '',
            },
          ],
        },
        {
          typeName: '文艺·音乐',
          sites: [
            {
              describe: '有温度的音乐平台',
              imgClass: 'icon-hs-wangyiyunyinyue',
              name: '网易云',
              url: 'https://music.163.com/',
              mark: '',
            },
            {
              describe: '歌曲版权最多的音乐垄断平台',
              imgClass: 'icon-hs-QQyinyue',
              name: 'QQ音乐',
              url: 'https://y.qq.com/',
              mark: '',
            },
            {
              describe: '国内知名的视频弹幕网站',
              imgClass: 'icon-hs-bilibili',
              name: '哔哩哔哩',
              url: 'https://www.bilibili.com/',
              mark: '',
            },
          ],
        },
        {
          typeName: '游戏·解压',
          sites: [
            {
              describe: '荒庙逃亡跑酷游戏',
              imgClass: 'icon-hs-default',
              name: '荒庙逃亡',
              url: 'http://a.huasen.cc/server/public/app/temple-run/index.html',
              mark: '',
            },
          ],
        },
        {
          typeName: '编程·资源',
          sites: [
            {
              describe: '广泛使用的CSS动画库',
              imgClass: 'icon-hs-default',
              name: 'Animate',
              url: 'https://animate.style/',
              mark: '',
            },
            {
              describe: '中国最大的开源社区平台',
              imgClass: 'icon-hs-gitee',
              name: '码云',
              url: 'https://gitee.com/',
              mark: '',
            },
          ],
        },
        {
          typeName: '色彩·搭配',
          sites: [
            {
              describe: '提供各种中国的传统颜色的名称',
              imgClass: 'icon-hs-zhongguochuantongyanse',
              name: '中国传统颜色',
              url: 'http://zhongguose.com/',
              mark: '',
            },
            {
              describe: '设计师和艺术家的调色板',
              imgClass: 'icon-hs-colorhunt',
              name: 'ColorHunt',
              url: 'https://colorhunt.co/',
              mark: '',
            },
          ],
        },
      ],
    },
    {
      name: '设计专区',
      id: 'admin@qq.com',
      takeCode: 2,
      series: [],
    },
  ],
});

// 获取邮箱验证码
const getMailCode = get('/mail/code', {});

export default {
  getTakes,
  getMailCode,
};
