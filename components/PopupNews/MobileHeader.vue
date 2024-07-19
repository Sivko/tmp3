<template>
  <div id="mobile-popup-header" class="whitespace-nowrap md:hidden truncate pl-[16px] flex-1">
    <h1 v-if="mobileHeaderFixed == 'article-title'" class="font-bold text-[24px] leading-[28px] font-unbounded">
      {{ title }}</h1>
    <Breadcrumbs v-else :articleName="title" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ScrollTrigger } from "~/gsap"

const mobileHeaderFixed = ref("tags")

const { title } = defineProps<{ title: string }>()

onMounted(async () => {
  await nextTick()
  ScrollTrigger.create({
    scroller: "#popup",
    trigger: "#article-title",
    start: "bottom",
    endTrigger: "body",
    end: "bottom 1000%",
    // markers: true,
    onUpdate: (self) => self.progress ? mobileHeaderFixed.value = "article-title" : mobileHeaderFixed.value = "tags"
  });
})

</script>