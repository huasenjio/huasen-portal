/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-08-29 00:30:31
 * @Description:
 */
import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import 'plugin/directive.js';
import 'plugin/element.js';
import 'plugin/animate.js';

import lodash from 'lodash';
import i18n from 'config/i18n.config.js';
import tool from 'utils/index.js';
import constant from 'constant/index.js';
import api from 'network/api.js';
import storage from 'plugin/storage.js';

Vue.prototype.TOOL = tool;
Vue.prototype.CONSTANT = constant;
Vue.prototype.API = api;
Vue.prototype.STORAGE = storage;
Vue.prototype.LODASH = lodash;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
