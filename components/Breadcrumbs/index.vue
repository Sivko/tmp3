<template>
  <div class="uppercase text-[14px] md:text-[16px] font-medium flex gap-[8px] whitespace-nowrap truncate tracking-[4%]">
    <div v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name" class="breadcrumb">
      {{ breadcrumb.name }}
    </div>
    <span class="opacity-40">{{ articleName }}</span>
  </div>
</template>

<script setup lang="ts">

const { articleName } = defineProps<{ articleName: string }>()
const breadcrumbs = [{ name: "главная", link: "/" }, { name: "новости", link: "/news" }]
</script>