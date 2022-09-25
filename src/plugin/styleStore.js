/*
 * @Autor: huasenjio
 * @Date: 2022-09-10 23:16:16
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-14 00:35:57
 * @Description: 根据查询存储的样式数据
 */

import storage from './storage.js';
import state from '@/store/state/state.js';

export function getStyleById(id) {
  try {
    return state.user.config.theme[id] ? state.user.config.theme[id] : {};
  } catch (err) {
    return {};
  }
}

export function setStyleById(id, style) {
  try {
    let localStyle = state.user.config.theme;
    localStyle[id] = style;
  } catch (err) {}
}

export function removeStyleById(id) {
  try {
    let localStyle = state.user.config.theme;
    delete localStyle[id];
  } catch (err) {}
}
