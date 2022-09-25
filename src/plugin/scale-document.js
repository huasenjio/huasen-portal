/*
 * @Autor: huasenjio
 * @Date: 2022-09-03 13:59:36
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-05 23:47:14
 * @Description: 移动端设备，通过缩放可视窗口，实现完美展现，文档最小值为435px，根据业务修改
 */

import { debounce } from 'lodash';

// 不缩放开关
let noScale = undefined;

// resize事件回调
let scaleDocument = debounce(e => {
  let viewport = document.getElementById('viewport');
  let scale = document.body.clientWidth / 435;
  if (scale == 1 || noScale) {
    noScale = true;
    return;
  } else if (scale < 1) {
    // 缩放
    viewport.content = `width=device-width,initial-scale=${scale}`;
    noScale = true;
  } else {
    // 复原
    viewport.content = 'width=device-width,initial-scale=1.0';
    noScale = false;
  }
}, 500);

// 初始化
function initScaleDocument() {
  window.addEventListener('resize', scaleDocument);
  let event = new Event('resize', { bubbles: true, cancelable: false });
  document.dispatchEvent(event);
}

// 销毁
function destoryScaleDocument() {
  window.removeEventListener('resize', scaleDocument);
}

export { initScaleDocument, destoryScaleDocument };
