<template>
  <p>{{ content }}</p>
</template>

<script setup>
const { props } = defineProps(['props'])
const { content } = props
</script>