<!--
 * @Autor: huasenjio
 * @Date: 2021-12-05 16:10:46
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-21 01:06:33
 * @Description: 
-->
<template>
  <HsDrawer title="个人中心" :visible.sync="showWrapPerson" :direction="'rtl'" :size="435">
    <div class="wrap-person">
      <header class="information">
        <div class="head-icon" :style="headImgStyle"></div>
        <div class="name text">{{ user.name }}</div>
        <i class="iconfont icon-tuichu" @click="exit"></i>
      </header>
      <main>
        <ul>
          <li>
            <div class="left">
              <div class="title">备份到云</div>
              <div class="detail">上传本地数据并且覆盖云端内容</div>
            </div>
            <div class="right">
              <i class="iconfont icon-md-clipboard"></i>
            </div>
          </li>
          <li>
            <div class="left">
              <div class="title">同步云端</div>
              <div class="detail">拉取云端数据更新到本地</div>
            </div>
            <div class="right">
              <i class="iconfont icon-md-sync"></i>
            </div>
          </li>
          <li>
            <div class="left">
              <div class="title">清除数据</div>
              <div class="detail">清除所有数据并且重置所有功能</div>
            </div>
            <div class="right" @click="reset">
              <i class="iconfont icon-md-trash"></i>
            </div>
          </li>
        </ul>
      </main>
    </div>
  </HsDrawer>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import HsDrawer from '@/components/content/drawer/Drawer.vue';
export default {
  name: 'WrapPerson',
  components: { HsDrawer },
  computed: {
    ...mapState(['user']),
    headImgStyle() {
      let style = {};
      // 图片资源
      let img = this.user.headImg ? this.TOOL.handleFileURL(this.user.headImg) : require('@/assets/img/head/0.png');
      // 设置背景
      style.backgroundImage = `url(${img})`;
      return style;
    },
    showWrapPerson: {
      get() {
        return this.$store.state.showWrapPerson;
      },
      set(value) {
        this.commitAll({
          showWrapPerson: value,
        });
      },
    },
  },
  methods: {
    ...mapMutations(['commitAll']),
    exit() {
      this.$tips('success', '退出成功', 'top-right', 2000, () => {
        this.STORAGE.removeItemByKey(this.CONSTANT.localUser);
        window.location.reload();
      });
    },
    closePersonPanel() {
      this.commitAll({
        showWrapPerson: false,
      });
    },
    reset() {},
  },
};
</script>

<style lang="scss" scoped>
.wrap-person {
  width: 360px;
  margin: 20px auto 0 auto;
  padding-bottom: 20px;
  background-color: var(--gray-0);
  .information {
    width: 90%;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--gray-200);
    .head-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-size: 100% 100%;
    }
    .name {
      flex: 1;
      font-size: 18px;
      font-weight: 500;
      color: var(--gray-600);
      margin-left: 20px;
    }
    i {
      font-size: 18px;
      cursor: pointer;
    }
  }
  main {
    width: 90%;
    max-height: 320px;
    margin: 10px auto;
    overflow-y: auto;
    ul {
      li {
        margin-top: 10px;
        display: flex;
        align-items: center;
        .left {
          flex: 1;
          .title {
            font-size: 14px;
          }
          .detail {
            font-size: 10px;
            color: var(--gray-400);
          }
        }
        .right {
          i {
            font-size: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
