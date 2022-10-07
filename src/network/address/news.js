/*
 * @Autor: huasenjio
 * @Date: 2022-09-06 21:37:39
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-25 16:18:54
 * @Description: 文章相关接口
 */
import Mock from 'mockjs2';
import { get, post } from '../request.js';

// 获取全部文章
const getNews = get('/news/queryAll', {
  articles: [
    {
      _id: 1,
      title: '测试文章',
      tag: '测试/验证/标签',
      bannerImg: 'http://a.huasen.cc/server/huasen-public-static/admin/1650133541053.png',
    },
  ],
});

// 通过文章id获取文章
const getNewsById = get('/news/query', {
  article: {
    _id: 1,
    title: '测试文章',
    tag: '测试/验证/标签',
    bannerImg: 'http://n.huasen.cc/server/huasen-public-static/admin/1650133543049.png',
    content:
      "# 标题1\n\n> 批注批注批注\n\n标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一\n\n## 标题2\n\n标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2\n\n### 标题3\n\n1. 条目1；\n2. 条目2；\n3. 条目3；\n\n#### 标题4\n\n- 第一条；\n- 第二条；\n\n## 标题2-测试图片\n\nimage image image image image image\n\n![](http://a.huasen.cc/server/huasen-public-static/admin/1651395053333.jpeg)\n\n## 标题2-测试图表\n\n| Col1 | Col2 | Col3 |\n| ---- | ---- | ---- |\n| 1    | 2    | 3    |\n| 4    | 5    | 6    |\n| 7    | 8    | 9    |\n\n### 标题3-测试代码块\n\n```javascript\n你好 //普通话\nmwngz ndei //壮语\nhello //英语\nconsole.log('你好') //JS\n```\n\n### 标题3-测试着重\n\n着重着重着重着重着重着重着**重着**重着重着`重着`重着重着重着重着重着重着重着重着重\n\n# 免责声明\n\n严格遵守中华人民共和国相关法律，不存在破解、串改、贩卖数据等违法行为，一切资源均来源于各大免费论坛社区，包括提供的体验账号，仅供大家学习参考，请勿用于商业用途，违反者造成损失及法律责任与本人无关。如有不幸侵犯到您的权益，请联系小森，我们将全面积极配合！\n\n# 联系我们\n\n企鹅🐧：184820911\n\n邮箱📮：[184820911@qq.com](184820911@qq.com)\n\n哔哩哔哩：[花森酱JioJio]('https://space.bilibili.com/241546158')",
    time: '2022-4-19',
  },
});

export default {
  getNews,
  getNewsById,
};
