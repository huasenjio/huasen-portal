<!--
 * @Autor: huasenjio
 * @Date: 2022-04-05 23:40:21
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-22 00:08:59
 * @Description: 
-->
<template>
  <div class="read">
    <main>
      <div class="content">
        <div class="title-group flex my-px-10">
          <div class="title text-3xl flex-1 text">
            {{ article.title }}
          </div>
          <div class="icon-group text-xl hover:text-red-500 pointer" @click="goBack">
            返回
            <i class="iconfont icon-tuichu text-xl"></i>
          </div>
        </div>
        <div class="tag-group">
          <div v-for="item in tags" :key="item" v-randomColor class="text-white inline-block text-xs px-px-8 py-px-2 first:mx-px-0 mx-px-4 rounded-full">
            {{ item }}
          </div>
        </div>
        <div class="info-group">
          <div class="text">
            {{ `花森原创 · 最后修改于${time}` }}
          </div>
        </div>
        <div class="my-px-10 overflow-x-hidden overflow-y-auto">
          <HMarkdown :value="article.content"></HMarkdown>
        </div>
        <footer class="footer-group">
          <div class="text">版权说明：MIT开源协议</div>
          <div class="text">免责声明：文章仅供学习交流 禁止用于商业用途</div>
        </footer>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'Read',
  data() {
    return {
      article: {
        title: '文章标题',
        time: '1979-01-01',
        tag: '简洁/用心/愉悦',
        content: '文章内容....',
      },
    };
  },
  created() {
    this.initData();
    this.hideSidebar();
  },
  destroyed() {
    this.showSidebar();
  },
  computed: {
    tags() {
      return this.article.tag ? this.article.tag.split('/') : [];
    },
    time() {
      if (this.article.time) {
        let temps = this.article.time.split('-');
        return `${temps[0]}年${temps[1]}月${temps[2]}日`;
      } else {
        return '1979年01月01日';
      }
    },
  },
  methods: {
    initData() {
      if (!this.$route.params.id) {
        this.$router.push('/article');
      } else {
        this.queryNewsById(this.$route.params.id);
      }
    },
    queryNewsById(_id) {
      this.API.getNewsById({ _id }).then(res => {
        this.article = res.data.article;
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    hideSidebar() {
      this.$store.commit('commitAll', {
        showWrapSidebar: false,
      });
    },
    showSidebar() {
      this.$store.commit('commitAll', {
        showWrapSidebar: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.read {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  main {
    width: calc(100% - 20px);
    min-height: calc(100% - 20px);
    padding: 20px 10px;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: var(--gray-0);
    .content {
      .title-group {
        display: flex;
        align-items: center;
      }
      .tag-group {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
      }
      .info-group {
        width: auto;
        height: 24px;
        line-height: 24px;
        margin: 10px 0;
        box-sizing: border-box;
        color: var(--gray-700);
      }
      .footer-group {
        width: auto;
        height: 58px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 10px 0;
        padding: 0 10px;
        border-left: 5px solid var(--gray-300);
        border-right: 5px solid var(--gray-300);
        background-color: var(--gray-100);
        box-sizing: border-box;
      }
    }
  }
  @media only screen and (min-width: 1024px) and (min-height: 640px) {
    .tag-group {
      width: calc(100% - 150px) !important;
    }
    .info-group {
      width: calc(100% - 150px) !important;
    }
    .footer-group {
      width: calc(100% - 150px) !important;
    }
  }
}
</style>
