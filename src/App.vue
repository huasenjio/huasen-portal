<!--
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-20 21:58:01
 * @Description: 入口文件
-->
<template>
  <div id="app">
    <BrowserTips v-if="!isSupport"></BrowserTips>
    <Wrap v-else> </Wrap>
  </div>
</template>

<script>
import Wrap from '@/components/content/wrap/Wrap.vue';
import BrowserTips from '@/components/content/browserTips/BrowserTips.vue';

import { mapActions } from 'vuex';
import { initScaleDocument, destoryScaleDocument } from '@/plugin/scale-document.js';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: { Wrap, BrowserTips },
  computed: {
    isSupport() {
      let temp = this.TOOL.judgeIE();
      console.log('浏览器信息：' + temp);
      if (temp === -1 || temp === 'edge') {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    // 移除loading
    this.removeLoading();
    // 调整文档大小，避免网站在移动端网页中，无法适应屏幕的问题
    initScaleDocument();
    this.$once('hook:beforeDestory', () => {
      destoryScaleDocument();
    });
  },
  mounted() {
    // 处理用户信息
    this.initLocalUserInfo();
    // 处理本地样式
    this.initLocalStyleInfo();
  },
  methods: {
    // 导入vuex中的方法
    ...mapActions(['initLocalUserInfo', 'initLocalStyleInfo']),
    // 移除开屏动画，vue实例挂载后移除加载爱心加载效果
    removeLoading() {
      let loadingDOM = document.getElementById('Loading');
      if (loadingDOM) {
        document.body.removeChild(loadingDOM);
      }
    },
  },
};
</script>

<style lang="scss">
@import url('./assets/css/index.css');
#app {
  position: relative;
  min-width: 435px;
  width: 100vw;
  height: 100vh;
}
</style>
