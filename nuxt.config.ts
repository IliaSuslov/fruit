// https://nuxt.com/docs/api/configuration/nuxt-config
//@ts-nocheck
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.scss'],
  script: {
    defineModel: true
  },
  modules: ['@pinia/nuxt', "@nuxt/image"],
  pinia: {
    storesDirs: ['./store/**'],
  },
  build: {
    loaders: {
      vue: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('V-'),
          delimiters: ['{{', '}}'],
        },
      },
    },
  },

})