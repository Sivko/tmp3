<!-- components/Modal.vue -->
<template>
  <div v-if="show" class="fixed bg-[#0000004b] inset-0 z-10" @click="close">
    <div @click.stop class="mb-[100px] relative">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import Breadcrumbs from "~/components/Breadcrumbs";
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const show = ref(false)
const router = useRouter()

function open() {
  show.value = true
}

function close() {
  show.value = false
  router.push({ path: '/' }) // Сбросить URL при закрытии модального окна
}

defineExpose({ open })
</script>

<style scoped></style>
