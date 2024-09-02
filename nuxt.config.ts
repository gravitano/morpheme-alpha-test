// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@morpheme/nuxt', '@nuxtjs/tailwindcss'],

  typescript: {
    shim: false,
  },

  morpheme: {
    theme: 'morpheme',
    sass: true,
    darkMode: false,
  },

  compatibilityDate: '2024-08-29',
});