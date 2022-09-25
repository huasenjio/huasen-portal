/*
 * @Autor: huasenjio
 * @Date: 2022-09-06 21:37:39
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-22 23:21:59
 * @Description: 文章相关接口
 */
import Mock from 'mockjs2';
import { get, post } from '../request.js';

// 获取全部文章
const getNews = get('/news/queryAll', {
  articles: [
    {
      _id: 1,
      title: '测试文章1',
      tag: '测试/验证/标签',
      bannerImg: 'http://a.huasen.cc/server/huasen-public-static/admin/1650133541053.png',
    },
  ],
});

// 通过文章id获取文章
const getNewsById = get('/news/query', {
  article: {
    _id: 1,
    title: '测试文章1',
    tag: '测试/验证/标签',
    bannerImg: 'http://n.huasen.cc/server/huasen-public-static/admin/1650133543049.png',
    content: '# 心境\n\n> 森林覆盖的岛屿花开遍地美好都将与约而至\n\n念念不忘',
    time: '2022-4-19',
  },
});

export default {
  getNews,
  getNewsById,
};
