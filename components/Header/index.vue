<template>
  <div id="wrapper-header">
    <!-- <div class="flex justify-between text-secondary text-[14px] container mb-5">
      <div class="flex gap-[10px]">
        <span>Жилая недвижимость </span>
        <span>Коммерческие помещения</span>
      </div>
      <div class="flex gap-[10px]">
        <span>О компании</span>
        <span>Завод БСК</span>
        <span>Индустрия</span>
      </div>
    </div> -->

    <div class="h-[68px] relative mb-10" id="header-deception">
      <div id="header-bg" class="rounded fixed left-0 right-0 top-[10px] z-[60] px-[16px]">
        <header class="py-[16px] md:py-[22px] flex justify-between items-center container">
          <img src="/logo.png" alt="" width="74" height="22" />
          <nav class="flex-1 flex items-center justify-center">
            <ul class="hidden md:flex gap-[16px] items-center whitespace-nowrap overflow-hidden">
              <li>
                <NuxtLink to="/" class="bg-A/10 px-[12px] py-[6px] rounded text-white">Объекты</NuxtLink>
              </li>
              <li>Квартиры </li>
              <li>Ипотека от 4%</li>
              <li>Ремонт</li>
              <li>Контактуцвапувапыван</li>
              <button><img src="/menu.png" width="24" height="24" alt="" /></button>
            </ul>
          </nav>
          <a href="tel:911" class="whitespace-nowrap overflow-hidden">+7 (4832) 32-15-68</a>
        </header>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap, ScrollTrigger } from '~/gsap';
import { onMounted } from 'vue'

const fixed = () => gsap.to("#header-bg", { position: "fixed", marginLeft: "20px", marginRight: "20px", background: "rgba(255,255,255,1)", duration: .1 });
const absolute = () => gsap.to("#header-bg", { position: "absolute", marginLeft: "0", marginRight: "0", background: "rgba(255,255,255,0)", duration: .1 });


onMounted(() => {
  ScrollTrigger.create({
    trigger: "#header-deception",
    start: "top",
    endTrigger: "body",
    end: "bottom -1000%",
    onToggle: (self) => self.isActive ? fixed() : absolute(),
  });
})

</script>