/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-19 00:38:58
 * @Description:
 */
import Vue from 'vue';
const that = Vue.prototype;

export default {
  // 解析本地缓存的用户配置，若不存在，则采用仓库默认设定值
  initLocalUserInfo(context, payload) {
    try {
      // 获取本地存储数据
      let user = that.STORAGE.getItem(that.CONSTANT.localUser);
      if (user) {
        // 合并配置，便于拓展
        let config = { ...context.state.user.config, ...user.config };
        // 提交更新
        context.commit('commitAll', {
          user: {
            id: user.id,
            name: user.name,
            headImg: user.headImg,
            code: user.code,
            token: user.token,
            record: user.record,
            config: config,
          },
        });
      }
    } catch (err) {
      that.$tips('error', '初始化失败', 'top-right', 2000, () => {
        that.STORAGE.clear();
      });
    }
  },

  // 初始化主题皮肤
  initLocalStyleInfo(context, payload) {
    let localStyle = context.state.user.config.theme;
    Object.keys(localStyle).map(id => {
      let node = document.getElementById(id);
      if (node) {
        node.classList.add('inherit-theme');

        node.style.color = localStyle[id].color;
        node.style.backgroundColor = localStyle[id].backgroundColor;
      }
    });
  },

  // 保存当前用户快照
  snapshoot(context, payload) {
    let { user } = context.state;
    that.STORAGE.setItem(that.CONSTANT.localUser, {
      id: user.id,
      name: user.name,
      code: user.code,
      headImg: user.headImg,
      token: user.token,
      record: user.record,
      config: user.config,
    });
  },
};

// import { mapActions } from 'vuex'
// export default {
//   methods: {
//     // 1.数组形式
//     ...mapActions([
//       'initLocalUserInfo', // 将 `this.initLocalUserInfo()` 映射为 `this.$store.dispatch('initLocalUserInfo', payload)`
//     ]),
//     // 2.对象形式
//     ...mapActions({
//       add: 'getUser' // 将 `this.add()` 映射为 `this.$store.dispatch('payload')`
//     })
//   }
// }
