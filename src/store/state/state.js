/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-21 01:01:32
 * @Description: 数据状态树
 */
export default {
  // 用户数据
  user: {
    id: 'localhost@qq.com',
    name: '本地用户',
    headImg: 'http://n.huasen.cc/server/public/default/headImg/2.png',
    token: '',
    code: 1,
    record: [],
    config: {
      bg: 'http://a.huasen.cc/server/huasen-public-static/admin/1651394773795.jpeg', // 色值｜图片链接| base64
      bgFilter: 0, // 背景模糊度 0-10
      bgLightness: 0, // 背景明暗0-1（黑）

      lightMode: false, // 明亮模式
      simpleMode: false, // 极简模式

      theme: {},
    },
  },
  // 展示的栏目
  category: {},
  categorySites: [],
  // 侧栏折叠
  showWrapLeft: true,
  showWrapSidebar: true,
  showWrapSidebarSocket: false,
  showWrapConnect: false,
  showWrapSign: false,
  showWrapPerson: false,
  showForm: false,
};
