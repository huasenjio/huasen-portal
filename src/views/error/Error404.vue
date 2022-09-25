<!--
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-01 00:01:27
 * @Description: 
-->
<template>
  <div class="error">
    <div class="main">
      <img src="~@/assets/img/error/404.svg" />
      <h2>页面开发中</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Error404',
};
</script>
<style lang="scss" scoped>
.error {
  width: 100%;
  height: 100%;
  position: relative;
  .main {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    h2 {
      text-align: center;
      margin-top: 30px;
      padding: 5px 10px;
    }
    img {
      width: 200px;
    }
  }
}
</style>
