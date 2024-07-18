<template>
  <img :src="element.src" :alt="element.title" />
</template>

<script setup>
const { props } = defineProps(['props'])
const { element } = props
</script>