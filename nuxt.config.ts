// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },
  icon: {
    serverBundle: {
      collections: ['uil', 'mdi'], // <!--- this
    },
  },
  image: {
    domains: ['https://cdn.dummyjson.com'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
});
