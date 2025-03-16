// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      // Add smooth scrolling to the entire page
      htmlAttrs: {
        style: 'scroll-behavior: smooth;',
      },
    },
  },
  
  modules: ['@nuxt/ui'],

  css : [
    '/assets/css/main.css'
  ],

  plugins : [
    '~/plugins/scroll.client.ts'
  ]
})