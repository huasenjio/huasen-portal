<!--
 * @Autor: huasenjio
 * @Date: 2022-09-09 00:24:16
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-20 21:35:01
 * @Description: 
-->
<template>
  <div v-rightMenu="{ id: 'HsEmpty' }" :style="style" class="empty">
    <main>
      <img class="w-full" src="/img/article/empty.png" />
      <div class="w-full text">空空如也</div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'Empty',

  props: {
    width: {
      type: [Number, String],
      default: '100%',
    },
    height: {
      type: [Number, String],
      default: '100%',
    },
  },

  computed: {
    style() {
      return {
        '--emptyWidth': this.handleSize(this.width),
        '--emptyHeight': this.handleSize(this.height),
      };
    },
  },

  methods: {
    // 处理传入尺寸数据，支持'100%' || '100px' = '100' = 100 = '100px'
    handleSize(size) {
      if (typeof size === 'string') {
        return /^\d+(%|px)$/.test(size) ? size : `${size}px`;
      } else if (typeof size === 'number') {
        return `${size}px`;
      } else {
        return '435px';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.empty {
  width: var(--emptyWidth);
  height: var(--emptyHeight);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: auto;
  background-color: var(--gray-0);
  main {
    width: 200px;
    height: 200px;
    img {
      width: 100%;
      height: auto;
    }
    div {
      text-align: center;
    }
  }
}
</style>
