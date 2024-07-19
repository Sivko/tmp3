// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-04-03',
//   devtools: { enabled: true },
//   css: ['~/assets/main.sass'],
// })


export default defineNuxtConfig({
  css: ['~/assets/global.css'],

  modules: ['@nuxtjs/tailwindcss', ["@nuxtjs/google-fonts", {
    families: {
      Unbounded: true,
      Onest: true,
    }
  }], "@pinia/nuxt"],




  build: {
    transpile: ['gsap'],
  },


  //@ts-ignore
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  compatibilityDate: '2024-07-17'
})