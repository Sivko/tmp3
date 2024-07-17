<template>
  <div class="wrapper-btn-mask">
    <button class="btn-mask">
      <img class=" -rotate-45 md:rotate-0" src="/arrow.svg" width="33" height="20" />
    </button>
  </div>
</template>

<style>
.wrapper-btn-mask {
  @apply h-fit pl-[20px] pt-[20px] md:pt-0 md:pb-[20px] bg-white rounded-tl-[33px] md:rounded-tl-[0] md:rounded-bl-[33px] md:mt-[-4px] md:mr-[-4px] md:relative absolute right-0 bottom-0
}

.wrapper-btn-mask::after {
  content: "";
  mask-image: linear-gradient(to top, red, red),
    radial-gradient(circle 15px at center, green 80%, transparent 81%);
  mask-size: 12px 12px, 100%;
  mask-composite: subtract;
  mask-repeat: no-repeat, repeat;
  mask-position: top left, center;
  @apply absolute bg-white right-0 md:right-[calc(100%-1px)] w-[24px] md:w-[48px] h-[24px] md:h-[48px] top-[-24px] md:top-0 rotate-180 md:rotate-90
}

.wrapper-btn-mask::before {
  content: "";
  mask-image: linear-gradient(to top, red, red),
    radial-gradient(circle 15px at center, green 80%, transparent 81%);
  mask-size: 12px 12px, 100%;
  mask-composite: subtract;
  mask-repeat: no-repeat, repeat;
  mask-position: top left, center;
  /* @apply absolute bg-white rotate-90 right-0 top-[100%] w-[24px] md:w-[48px] h-[24px] md:h-[48px] */
  @apply absolute bg-white right-[100%] md:right-0 w-[24px] md:w-[48px] h-[24px] md:h-[48px] md:top-[100%] rotate-180 md:rotate-90 bottom-0
}

@media screen and (min-width: 768px) {
  .wrapper-btn-mask::after, .wrapper-btn-mask::before {
    mask-image: linear-gradient(to top, red, red),
      radial-gradient(circle 30px at center, green 80%, transparent 81%);
    mask-size: 24px 24px, 100%;
  }
}

.btn-mask {
  @apply flex items-center justify-center w-[48px] h-[48px] md:w-[80px] md:h-[80px] rounded-[16px] md:rounded-[24px] bg-white shadow
}
</style>