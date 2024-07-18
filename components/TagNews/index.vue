<template>
  <div class="flex gap-[8px] text-[14px] leading-[18px] tracking-[2%]">
    <div v-for="(tag, index) in tags">
      <nuxt-link v-for="(value, index) in tag.values" :to="value.src"
        :class="`flex items-center gap-[4px] rounded-md border px-[12px] py-[4px] text-${getColor(value.color)} border-${getColor(value.color)}`">
        <span v-if="value.before"
          :class="'w-[11px] h-[11px] rounded-full text-white text-[8px] flex items-center justify-center bg-' + getColor(value.color)">{{
            tag.before }}</span>
        {{ value.name }}
      </nuxt-link>
    </div>
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
// const colors = ["A/10", "A/20"]
const colors = {
  "red": "A/10",
  "blue": "A/20",
}

function getColor(key) {
  const color = colors[key] ?? color["red"]
  return color
}

</script>