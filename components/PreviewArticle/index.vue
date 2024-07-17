<template>
  <div class="bg-fillPreview rounded-[16px] md:rounded-lg overflow-hidden flex flex-col md:flex-row md:gap-[24px] p-[4px]">
    <div class="relative ">
      <img class="rounded-[14px] md:rounded-lg  h-[164px] md:h-[220px] md:w-fit object-cover w-full" width="320" height="220" alt="" :src="article.preview" />
      <div class="absolute left-[16px] top-[16px] py-[8px] px-[16px] font-medium tracking-[4%] bg-lilac bg-opacity-80 text-white rounded-lg">{{ formatDate(article.date) }}</div>
    </div>
    <div class="py-[16px] px-[8px] flex flex-col gap-[16px] md:px-0">
      <h3 class="subtitle-3lvl md:flex-1">Правительство продлило «Льготную ипотеку» и расширило «Семейную».</h3>
      <TagNews :tags="article.tags" />
    </div>

  </div>
</template>

<script>
import TagNews from "~/components/TagNews";

export default {
  props: [
    "article"
  ]
}
</script>

<script setup>

function formatDate(time) {
  const date = new Date(time);
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });

  return `${day}.${month}.${year}`;
}
</script>