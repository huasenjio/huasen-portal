<!--
 * @Autor: huasenjio
 * @Date: 2022-08-30 00:45:43
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-25 10:15:57
 * @Description: 
-->
<template>
  <div
    v-rightMenu="{ id: 'homeHead' }"
    class="home-head"
    :class="{
      clear: !showGrossGlass && headBgConfig.clear,
      white: headBgConfig.white,
      'gross-glass': showGrossGlass || headBgConfig.grossGlass,
    }"
  >
    <section class="fold" @click="hiddenWrapLeft">
      <i class="iconfont icon-md-barcode"></i>
    </section>
    <section class="menu" @click="hiddenMenu">
      <i class="iconfont  icon-md-menu"></i>
    </section>
    <section v-if="showMenu" class="collapse">
      <ul class="links">
        <li v-for="(item, index) in links" :key="index">
          <i :class="item.iconfontClass" class="icon"></i>
          <span class="text">{{ item.text }}</span>
        </li>
      </ul>
    </section>
    <section class="today">
      <div class="clock-group">
        <Clock></Clock>
      </div>
      <div class="weather-group">
        <Weather></Weather>
      </div>
    </section>
    <section v-if="showMenu" class="take">
      <el-dropdown class="dropdown" trigger="click" @command="selectTake">
        <span class="el-dropdown-link pointer">
          {{ selectedTake }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item in takes" :key="item.id" :command="item.name">
            {{ item.name }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </section>
    <section v-if="showMenu" @click="sign" class="sign">
      {{ signText }}
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import Clock from '@/components/common/clock/Clock.vue';
import Weather from '@/components/common/weather/Weather.vue';
export default {
  name: 'HomeHead',

  components: {
    Clock,
    Weather,
  },

  props: {
    headBgConfig: {
      type: Object,
      default: () => {
        return {
          clear: false,
          white: false,
          grossGlass: true,
        };
      },
    },
  },

  data() {
    return {
      showMenu: false,
      selectedTake: '????????????',
      takes: [],
      links: [
        {
          iconfontClass: 'iconfont icon-md-home',
          text: '????????????',
          url: '',
          isArticle: false,
        },
        {
          iconfontClass: 'iconfont icon-md-stats',
          text: '????????????',
          url: '',
          isArticle: true,
        },
        {
          iconfontClass: 'iconfont icon-md-at',
          text: '????????????',
          url: '',
          isArticle: true,
        },
      ],
    };
  },

  computed: {
    ...mapState(['showWrapLeft', 'user']),
    showGrossGlass() {
      return this.showMenu && document.body.clientWidth <= 1024 ? true : false;
    },
    signText() {
      return this.user.token ? this.user.name : '????????????';
    },
  },

  mounted() {
    this.queryTakes();
    this.initMenu();
  },

  methods: {
    ...mapMutations(['commitAll']),

    // ?????????????????????
    queryTakes() {
      this.API.getTakes(
        {},
        {
          notify: false,
        },
      ).then(res => {
        this.takes = res.data.takes;
        if (!this.takes.lenght !== 0) {
          this.selectedTake = this.takes[0].name;
          this.commitAll({
            categorySites: this.takes[0].series,
          });
        }
      });
    },

    // ???????????????????????????
    selectTake(label) {
      this.selectedTake = label;
      let take = this.takes.find(item => {
        return item.name === label;
      });
      if (!take) return;
      this.commitAll({
        categorySites: take.series,
      });
    },

    // ???????????????
    hiddenWrapLeft() {
      this.commitAll({
        showWrapLeft: !this.showWrapLeft,
      });
    },

    // ????????????
    sign() {
      if (this.user.token) {
        // ???????????????????????????????????????
        this.commitAll({
          showWrapPerson: true,
        });
      } else {
        // ??????????????????????????????
        this.commitAll({
          showWrapSign: true,
        });
      }
    },

    // ????????????
    hiddenMenu() {
      this.showMenu = !this.showMenu;
    },

    // ????????????????????????1024?????????????????????
    initMenu() {
      let debounce = this.LODASH.debounce(
        () => {
          if (document.body.clientWidth > 1024) {
            this.showMenu = true;
          } else {
            this.showMenu = false;
          }
        },
        100,
        {
          leading: true,
          trailing: true,
        },
      );
      window.addEventListener('resize', debounce);
      this.$once('hook:beforeDestory', () => {
        window.removeEventListener('resize', debounce);
      });
      // ??????????????????resize??????
      this.$nextTick(() => {
        let event = new Event('resize', { bubbles: true, cancelable: false });
        document.dispatchEvent(event);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-head {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: var(--gray-50);
  z-index: 2;
  .fold {
    order: 1;
    width: 75px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 28px;
      cursor: pointer;
    }
  }
  .menu {
    display: none;
    i {
      cursor: pointer;
    }
  }
  .collapse {
    order: 3;
    .links {
      display: flex;
      align-items: center;
      li {
        margin-left: 12px;
        cursor: pointer;

        &:first-of-type {
          margin-left: 0;
        }
      }
    }
  }
  .today {
    order: 4;
    height: 75px;
    display: flex;
    align-items: center;
    margin-left: 14px;
    margin-right: auto;
    .clock-group {
      order: 1;
    }
    .weather-group {
      order: 2;
      max-width: 185px;
      overflow: hidden;
    }
  }
  .take {
    order: 5;
    .dropdown {
      color: inherit;
    }
  }
  .sign {
    order: 6;
    margin-left: 18px;
    margin-right: 22px;
    max-width: 100px;
    cursor: pointer;
  }
  i {
    color: inherit;
  }
}

.clear {
  background-color: transparent;
  i {
    color: inherit;
  }
}
.gross-glass {
  color: var(--gray-600) !important;
  background-color: var(--gray-o5) !important;
  backdrop-filter: blur(8px) !important;
  i {
    color: inherit;
  }
}
.white {
  color: var(--gray-700) !important;
  background-color: var(--gray-0) !important;
  i {
    color: inherit;
  }
}

@media only screen and (max-width: 1024px) {
  .home-head {
    width: 100%;
    height: auto;
    .fold {
      display: none;
    }
    .menu {
      order: 2;
      margin-right: 10px;
      display: block;
      i {
        font-size: 24px;
      }
    }
    .collapse {
      order: 3;
      width: 100%;
      .links {
        flex-direction: column;
        padding: 0px 15px;
        box-sizing: border-box;
        li {
          width: 100%;
          margin-top: 10px;
          margin-left: 0px;
        }
      }
    }
    .today {
      order: 1;
      margin: 0;
      margin-left: 10px;
      margin-right: auto;
      .clock-group {
        order: 2;
      }
      .weather-group {
        order: 1;
      }
    }
    .take {
      order: 5;
      width: 100%;
      padding: 10px 30px;
      box-sizing: border-box;
    }
    .sign {
      order: 6;
      min-width: 100%;
      margin: 0;
      padding: 0px 30px 10px 30px;
      box-sizing: border-box;
    }
  }
}
</style>
