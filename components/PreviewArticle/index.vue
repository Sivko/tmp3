<template>
  <NuxtLink :to="`/popup-news/${article.code}`" class="bg-fillPreview rounded-[16px] md:rounded-lg overflow-hidden flex flex-col md:flex-row md:gap-[24px] p-[4px]
    relative">
    <div class="relative ">
      <img class="rounded-[14px] md:rounded-lg  h-[164px] w-full md:min-w-[320px] md:h-[220px] object-cover" width="320"
        height="220" alt="" :src="article.picture" />
      <div
        class="absolute left-[16px] top-[16px] py-[8px] px-[16px] font-medium tracking-[4%] bg-lilac bg-opacity-80 text-white rounded-lg">
        {{ formatDate(article.date) }}
      </div>
    </div>
    <div class="py-[16px] px-[8px] flex flex-col gap-[16px] md:px-0 flex-1">
      <h3 class="subtitle-3lvl md:flex-1">{{ article.title }}</h3>
      <TagNews :tags="article.tags" />
    </div>
    <ButtonMaskCard />
  </NuxtLink>
</template>

<script lang="ts" setup>
import TagNews from "~/components/TagNews/index.vue";
import ButtonMaskCard from "~/components/ButtonMaskCard/index.vue";
import formatDate from "~/helpers/formatDate"
import type { Next } from "~/types/IArticle";

const { article } = defineProps<{ article: Next }>()


</script>
