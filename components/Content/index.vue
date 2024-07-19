<template>
  <div class="popup-article-content">
    <component :is="elem.component" :props="elem.props" v-for="elem in renderComponents" />
  </div>
</template>

<script setup lang="ts">
import type { IContent } from "~/types/IArticle";

import Text from "./Text.vue"
import Default from "./Default.vue"
import MediaBlock from "./MediaBlock.vue"

const { content } = defineProps<{ content: IContent[] }>()

const components: Record<string, Object> = {
  "default": Default,
  "text": Text,
  "mediaBlock": MediaBlock
}

const getCurrentComponent = (type: string) => {
  return components[type] ?? components["default"]
}

const renderComponents = content.map((e) => ({ component: getCurrentComponent(e.type), props: e }))
</script>
