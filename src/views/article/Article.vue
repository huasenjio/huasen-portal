<!--
 * @Autor: huasenjio
 * @Date: 2021-10-31 01:33:48
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-21 23:19:15
 * @Description: 文章展示页面
-->
<template>
  <div class="article">
    <ul v-if="!showEmptyPanel" v-balance class="article-group overflow-x-hidden overflow-y-auto">
      <li class="article-item w-px-240 h-px-300 my-px-20 shadow-md overflow-hidden rounded-sm" v-for="item in articles" :key="item._id" @click="read(item)">
        <div class="img-group overflow-hidden">
          <img class="w-full" :src="TOOL.handleFileURL(item.bannerImg)" />
        </div>
        <div class="text-group">
          <div class="w-full h-full relative">
            <div class="title">{{ item.title }}</div>
            <div class="tag-group">
              <div class="tag text">{{ item.tag }}</div>
              <div class="icon" :style="{ backgroundImage: `url(/img/article/${TOOL.randomInt(1, 10)}.png)` }"></div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <section v-else class="empty-group">
      <Empty></Empty>
    </section>
  </div>
</template>

<script>
import Empty from '@/components/content/empty/Empty.vue';
export default {
  name: 'Article',
  components: { Empty },
  data() {
    return {
      articles: [],
      showEmptyPanel: false,
    };
  },
  watch: {
    articles: {
      handler(nV, oV) {
        if (Array.isArray(nV) && nV.length !== 0) {
          this.showEmptyPanel = false;
        } else {
          this.showEmptyPanel = true;
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.queryNews();
  },
  methods: {
    // 查询所有的新闻文章
    queryNews() {
      this.API.getNews().then(res => {
        this.articles = res.data.articles;
      });
    },
    // 跳转至阅读页面
    read(articleItem) {
      this.$router.push({ path: `/read/${articleItem._id}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .article-group {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    margin: 10px;
    border-radius: 4px;
    background-color: var(--gray-0);
  }
  .article-item {
    .img-group {
      position: relative;
      width: 100%;
      height: calc(100% - 90px);
      img {
        transition: all 0.3s linear;
        &:hover {
          transform: scale(1.15);
        }
      }
      &::after {
        position: absolute;
        bottom: -50px;
        right: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 60px;
        display: block;
        background-color: var(--gray-o5);
        transform: skewY(-15deg);
      }
    }
    .text-group {
      position: relative;
      width: 100%;
      height: 90px;
      cursor: pointer;
      & > div {
        background-color: var(--gray-0);
      }
      &::before {
        position: absolute;
        top: -18px;
        left: 0;
        right: 0;
        content: '';
        width: 100%;
        height: 80px;
        display: block;
        background-color: var(--gray-0);
        transform: skewY(8deg);
      }
      .title {
        width: 100%;
        padding: 5px 10px;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 500;
      }
      .tag-group {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 5px 10px;
        box-sizing: border-box;
        .tag {
          width: calc(100% - 32px);
          padding: 14px 10px;
          box-sizing: border-box;
          text-align: right;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          box-sizing: border-box;
          font-size: 12px;
        }
        .icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-position: center center;
        }
      }
    }
  }
  .empty-group {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    margin: 10px;
    border-radius: 4px;
    background-color: var(--gray-0);
  }
}
</style>
