<template>
  <p v-html="content"></p>
</template>

<script setup lang="ts">
const { props } = defineProps(['props'])
const { content } = props
</script>