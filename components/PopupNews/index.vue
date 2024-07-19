<template>
  <div class="fixed bg-[#0000004b] inset-0 z-10">
    <div class="mb-[100px] relative">
      <div v-on:scroll="(e) => isScrolled = !!(e.target as HTMLElement).scrollTop" id="popup"
        class="w-popup-content m-auto overflow-y-scroll  h-[calc(100dvh-68px)] mt-[68px] md:mt-[85px] rounded-t">
        <div
          :class="`absolute top-0 left-0 right-0 w-popup-content mx-auto flex justify-between items-center z-[60] bg-white md:bg-[#fff0] rounded-t overflow-hidden ${isScrolled ? 'shadow md:shadow-none' : ''}`">
          <div></div>
          <MobileHeader :title="article.data.result.title" />
          <NuxtLink to="/">
            <div class="closeButton "><img class="md:w-[32px] md:h-[32px]" src="~/public/close.svg" width="19"
                height="19" alt="" /></div>
          </NuxtLink>
        </div>
        <div class="rounded bg-white mb-[50px]  py-[32px] px-[16px]">
          <!-- <button @click="close" class="absolute top-0 right-0 "><img class="relative closeButton" src="public/dclose.svg" /></button> -->
          <div class="max-w-[1056px] mx-auto min-h-[70dvh] mt-[32px] md:mt-0">
            <div class="mb-[32px] hidden md:block">
              <Breadcrumbs :articleName="article.data.result.title" />
            </div>
            <div class="mb-[16px]">
              <TagNews :tags="article.data.result.tags" />
            </div>

            <h1 id="article-title" class="title mb-[16px]">{{ article.data.result.title }}</h1>

            <div
              class="inline-block text-N/N60 mb-[32px] opacity-40 font-medium text-[14px] leading-[14px] tracking-[4%] pb-[4px] border-secondary border-b">
              {{ formatDate(article.data.result.date) }}
            </div>

            <Content :content="article.data.result.content" />

            <div v-if="article" class="mt-[32px] md:mt-[64px]">
              <h2 class="subtitle mb-[16px] md:mb-[32px] ">Следующая статья</h2>
              <PreviewArticle edging="#fff" background="#F3F3F3"  :article="article.data.result.next" />
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import TagNews from "~/components/TagNews/index.vue";
import PreviewArticle from "~/components/PreviewArticle/index.vue";
import Breadcrumbs from "~/components/Breadcrumbs/index.vue";
import MobileHeader from "./MobileHeader.vue";
import Content from "~/components/Content/index.vue"
import formatDate from "~/helpers/formatDate";
import type IArticle from "~/types/IArticle";

const { article } = defineProps<{ article: IArticle }>()

const isScrolled = useState('isScrolled', () => false)
</script>