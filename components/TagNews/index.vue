<template>
  <div class="flex gap-[8px] text-[14px] leading-[18px] tracking-[2%]">
    <div v-for="(tag, index) in tags" class="contents">
      <div v-for="(value, index) in tag.values"
        :class="`flex items-center gap-[4px] rounded-md border px-[12px] py-[4px] text-${getColor(value.color)} border-${getColor(value.color)}`">
        <span v-if="value.src"
          :class="'w-[18px] h-[18px] rounded-full text-white text-[8px] flex items-center justify-center'">
          <img :src="value.src" />
        </span>
        {{ value.name }}
      </div>
    </div>
  </div>
</template>

<!-- <script>
export default {
  props: [
    'tags'
  ]
}
</script> -->

<script setup lang="ts">
import type { Tag } from "~/types/IArticle";


const { tags } = defineProps<{ tags: Tag[] }>()


const colors: Record<string, string> = {
  "red": "A/10",
  "blue": "A/20",
}

function getColor(key: string) {
  const color = colors[key] ?? colors["red"]
  return color
}

</script>