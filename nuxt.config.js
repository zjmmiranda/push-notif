const fs = require('fs')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'push-notif',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyBx_RydFNfcS4aJYjO1eiz7gIWJHXyh4ng",
      authDomain: "push-notif-14198.firebaseapp.com",
      projectId: "push-notif-14198",
      storageBucket: "push-notif-14198.appspot.com",
      messagingSenderId: "728336722180",
      appId: "1:728336722180:web:4bd63fefddcfeead600851",
      measurementId: "G-4907MGSZM9"
    },
    services: {
      messaging:  {
        createServiceWorker: true,
        fcmPublicVapidKey: 'BPeL0H7u5ov8EmpGBNqPy_1xdJWOnIU5yEN7SuG2gSdZKtLC4VW26md5RpYirAw8j9iJ9NaYWCjktSkxi78i37s', //see step 7
      },
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
