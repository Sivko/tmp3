<template>
  <div>
    <h1 class="title">Новости</h1>
    <Teleport to="body">
      <PopupNews :article="article" v-if="isPopupNews && article" />
    </Teleport>
    <div class="flex flex-col gap-[10px]">
      <div v-if="errorArticle?.message">
        {{ JSON.stringify(errorArticle, null, 2) }}
      </div>
      <PreviewArticle edging="#F3F3F3" background="#fff" :article="item" v-for="item in news?.data.result.list" />
    </div>
  </div>
</template>

<script setup lang="ts">
// import type INews from "~/types/INews"
import PreviewArticle from "~/components/PreviewArticle/index.vue";
import PopupNews from "~/components/PopupNews/index.vue"
import type IArticle from "~/types/IArticle";
import type { ISearchNews } from "~/types/ISerchNews";
// import article from "~/static/article";

const route = useRoute()
const [path, code] = route.params.slug
const isPopupNews = (path == "popup-news" && code)


if (!isPopupNews && path)
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })


const { data: news, error } = await useAsyncData<ISearchNews>('news', () => {
  return $fetch(`https://www.bsk-32.ru/api/getApi`, {
    method: "POST",
    body: {
      "apiUrl": "https://bsk-admin.testers-site.ru/api/news",
      "keyCache": "release-1.12.2_v-1_GET_api_news",
      "method": "GET",
    }
  })
})

const { data: article, error: errorArticle } = await useAsyncData<IArticle>('article', () => {
  if (!isPopupNews) throw Error
  return $fetch(`https://bsk-admin-test.testers-site.ru/api/news/${code}`)
})

</script>
