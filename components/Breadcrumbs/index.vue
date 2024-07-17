<template>
  <div class="uppercase text-small font-medium flex gap-[8px] whitespace-nowrap truncate">
    <nuxt-link v-for="breadcrumb in breadcrumbs" :key="breadcrumbs.name" :to="breadcrumb.link" class="breadcrumb">
      {{ breadcrumb.name }}
    </nuxt-link>
    <span class="opacity-40">{{ articleName }}</span>
  </div>
</template>

<script>
export default {
  props: [
    'articleName'
  ]
}
</script>

<script setup>
const breadcrumbs = [{ name: "главная", link: "/" }, { name: "новости", link: "/news" }]
</script>