<!--
 * @Description: 
 * @Author: 沈健
 * @Date: 2022-06-27 17:26:14
 * @LastEditors: 沈健
 * @LastEditTime: 2022-06-27 17:36:08
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
// import Test from './components/Test'
</script>

<template>
  <!-- <Test />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <div class="btns">
    <MButton type="primary" size="large" disabled>查询</MButton>
    <MButton type="warning" size="small" block>查询</MButton>
    <MButton type="danger">查询</MButton>
    <MButton type="info">查询</MButton>
  </div>
</template>

<style lang="scss">
#app {
  .btns {
    .s-btn {
      margin-right: 15px;
    }
  }
}
</style>
