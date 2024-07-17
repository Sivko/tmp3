<script setup lang="ts">
import Header from "./components/Header/index.vue";

const route = useRoute()

console.log(route.meta.title) // My home page
</script>

<template>
  <div id="app" class="text-base">
    <Header />

    <div class="container">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
/* #app {
  background-color: #020420;
  color: #00DC82;
} */
</style>
