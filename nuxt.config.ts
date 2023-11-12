// https://nuxt.com/docs/api/configuration/nuxt-config
//@ts-nocheck
import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/')
  },
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