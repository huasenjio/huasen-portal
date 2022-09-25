<!--
 * @Autor: huasenjio
 * @Date: 2021-12-08 23:24:34
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-19 22:20:15
 * @Description: 
-->
<template>
  <div v-rightMenu="{ id: 'homeSite' }" class="home-site">
    <section
      :id="`site-anchor-${encodeURI(item.typeName)}`"
      v-for="(item, index) in categorySites"
      :key="index"
    >
      <div v-rightMenu="{ id: `homeSiteItem${index}` }" class="site-item">
        <header>
          <i class="iconfont icon-tag"></i>
          <a class="title" :name="item.typeName">{{ item.typeName }}</a>
        </header>
        <main>
          <ul v-balance>
            <a
              class="site inherit-text"
              v-for="(site, i) in item.sites"
              :key="i"
              :href="site.url"
              :title="site.describe"
              target="_blank"
            >
              <div class="site-card inherit-text text w-px-180 sm:w-px-150">
                <div class="img-group icon-hs w-px-100 h-px-100" :class="site.imgClass"></div>
                <div
                  v-rightMenu="{ id: `homeSiteItemLoading${i}` }"
                  v-if="showLoadingIcon(site)"
                  class="img-loading w-px-100 h-px-100"
                ></div>
                <div class="text-group">
                  <div class="name text">{{ site.name }}</div>
                  <div class="describe inherit-text text">{{ site.describe }}</div>
                </div>
              </div>
            </a>
          </ul>
        </main>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'HomeSite',
  data() {
    return {};
  },
  computed: {
    ...mapState(['categorySites']),
  },
  mounted() {
    this.$store.dispatch('initLocalStyleInfo');
  },
  methods: {
    showLoadingIcon(val) {
      return val.imgClass === 'icon-hs-default' || val.imgClass === '';
    },
  },
};
</script>

<style lang="scss" scoped>
.home-site {
  flex: 1;
  position: relative;
  background-color: var(--gray-50);
  z-index: 1;
  section {
    width: calc(100% - 20px);
    margin: 10px auto 0 auto;
    &:first-of-type {
      margin-top: 0px;
    }
    .site-item {
      padding: 10px;
      border-radius: 2px;
      background-color: var(--gray-0);
      box-sizing: border-box;
      header {
        display: flex;
        align-items: center;
        i {
          font-size: 20px;
          font-weight: 500;
        }
        .title {
          margin-left: 10px;
          font-size: 16px;
          font-weight: 500;
        }
      }
      main {
        ul {
          display: flex;
          flex-wrap: wrap;
          .site {
            margin-top: 10px;
            .site-card {
              position: relative;
              height: 50px;
              padding: 5px;
              display: flex;
              align-items: center;
              border-radius: 3px;
              color: var(--gray-600);
              border: 1px solid rgba(0, 0, 0, 0.03);
              box-shadow: 0px 0px 20px -5px rgba(158, 158, 158, 0.2);
              transition: all 0.3s ease;
              .img-group {
                position: absolute;
                left: -18px;
                transform: scale(0.4, 0.4);
                z-index: 2;
              }
              .img-loading {
                position: absolute;
                left: -18px;
                transform: scale(0.4, 0.4);
                background-image: url('/img/loading/1.gif');
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center center;
                background-color: var(--gray-0);
                z-index: 1;
              }
              .text-group {
                width: calc(100% - 50px);
                display: block;
                margin-left: 60px;
                .name {
                  font-weight: 500;
                }
                .describe {
                  color: var(--gray-400);
                  font-size: 12px;
                }
              }
              &:hover {
                transform: translateY(-3px);
                box-shadow: 0 26px 40px -24px var(--gray-700);
              }
            }
          }
        }
      }
    }
  }
  // 动态插入样式名，实现锚点效果
  .active-anchor {
    header {
      i {
        color: var(--red-500) !important;
      }
      a {
        color: var(--red-500) !important;
      }
    }
  }
}
</style>
