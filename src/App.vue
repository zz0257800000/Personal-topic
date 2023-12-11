<script setup>
import askDetail from './components/askDetail.vue';
import Header from './components/Header.vue';

import{ RouterLink,RouterView } from 'vue-router'
</script>

<template>
  <div class="head">


    <Header/>


 </div>
  <div class="homePage">


  </div>

<RouterView/>


</template>

<style lang="scss" scoped>
.head{
  background-color: rgb(188, 255, 117);
}
.homePage{
  background-color: #00415d;

}


</style>
