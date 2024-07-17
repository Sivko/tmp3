<template>
  <div class="flex gap-[8px] text-[14px] leading-[18px] tracking-[2%]">
    <nuxt-link v-for="(tag, index) in tags" :to="tag.link" :class="`flex items-center gap-[4px] rounded-md border px-[12px] py-[4px] text-${getColor(index)} border-${getColor(index)}`">
      <span v-if="tag.before" :class="'w-[11px] h-[11px] rounded-full text-white text-[8px] flex items-center justify-center bg-'+getColor(index) ">{{ tag.before }}</span>
      {{ tag.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: [
    'tags'
  ]
}
</script>

<script setup>
const colors = ["A/10", "A/20"]

function getColor(index) {
  const color = colors[index % colors.length]
  return color
}

</script>