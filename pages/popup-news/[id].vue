<template>
  <div>
    <Modal ref="modal">
      <div v-on:scroll="(e) => isScrolled = e.target.scrollTop" id="popup"
        class="w-popup-content m-auto overflow-y-scroll  h-[calc(100dvh-68px)] mt-[68px] md:mt-[85px] rounded-t">
        <div
          :class="`absolute top-0 left-0 right-0 w-popup-content mx-auto flex justify-between items-center z-[60] bg-white md:bg-[#fff0] rounded-t overflow-hidden ${isScrolled ? 'shadow md:shadow-none' : ''}`">
          <div></div>
          <div id="mobile-popup-header" class="whitespace-nowrap md:hidden truncate pl-[16px] flex-1">
            <h1 v-if="mobileHeaderFixed == 'article-title'" class="font-bold text-[24px] leading-[28px] font-unbounded">
              {{ data.title }}</h1>
            <Breadcrumbs v-else :articleName="title" />
          </div>
          <button @click="close">
            <div class="closeButton "><img class="md:w-[32px] md:h-[32px]" src="~/public/close.svg" width="19"
                height="19" alt="" /></div>
          </button>
        </div>
        <div class="rounded bg-white mb-[50px]  py-[32px] px-[16px]">
          <!-- <button @click="close" class="absolute top-0 right-0 "><img class="relative closeButton" src="public/dclose.svg" /></button> -->
          <div class="max-w-[1056px] mx-auto min-h-[70dvh] mt-[32px] md:mt-0">
            <div class="mb-[32px] hidden md:block">
              <Breadcrumbs :articleName="data.title" />
            </div>
            <div class="mb-[16px]">
              <TagNews :tags="data.tags" />
            </div>

            <h1 id="article-title" class="title mb-[16px]">{{ data.title }}</h1>

            <div
              class="inline-block text-N/N60 mb-[32px] opacity-40 font-medium text-[14px] leading-[14px] tracking-[4%] pb-[4px] border-secondary border-b">
              {{ formatDate(date) }}
            </div>

            <Content :content="data.content" />

            <div v-if="article" class="mt-[32px] md:mt-[64px]">
              <h2 class="subtitle mb-[16px] md:mb-[32px] ">Следующая статья</h2>
              <PreviewArticle :article="data.next" />
            </div>

          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Content from "~/components/Content"
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import data from "../../static/article"

import TagNews from "~/components/TagNews";
import PreviewArticle from "~/components/PreviewArticle";
import Breadcrumbs from "~/components/Breadcrumbs";
import { onMounted, ref } from 'vue'
import Modal from '~/components/Modal.vue'

const mobileHeaderFixed = ref(null)
const isScrolled = useState('isScrolled', () => false)

const modal = ref(null)
const { id } = useRoute().params
const tags = [{ name: "СМИ", link: "/smi" }, { name: "акции", link: "/discont", before: "%" }]
const title = "Средняя ставка по ипотеке в России превысила 8%"
const date = Date.now();

const article = {
  title: "Правительство продлило «Льготную ипотеку» и расширило «Семейную»",
  tags: [{ name: "СМИ", link: "/smi" }, { name: "акции", link: "/discont", before: "%" }],
  preview: "https://i-like-taebo.ru/wp-content/uploads/2023/11/141.jpg",
  date: Date.now()
}

onMounted(async () => {
  modal.value.open()
  const evt = new CustomEvent("custom_statusOpenModal", { detail: { status: true } })
  document.dispatchEvent(evt)

  await nextTick()
  ScrollTrigger.create({
    scroller: "#popup",
    trigger: "#article-title",
    start: "bottom",
    endTrigger: "body",
    end: "bottom 1000%",
    // markers: true,
    onUpdate: (self) => self.progress ? mobileHeaderFixed.value = "article-title" : mobileHeaderFixed.value = "tags"
  });
})


function formatDate(time) {
  const date = new Date(time);
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });

  return `${day}.${month}.${year}`;
}



// const { data, error } = await useAsyncData('data', async () => {
//   try {
//     const _res = await $fetch('https://bsk-admin-test.testers-site.ru/api/news/novogodnee-vesele-ot-kompanii-bsk-kak-proshla-yelkabsk-v-2023-godu')
//     return _res.data.result
//   } catch (err) { return err }
// })

</script>
