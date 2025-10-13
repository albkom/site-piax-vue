// import '@/assets/scss/theme.scss'

import 'itagoglow/itagoglow.min.css'
import '@/assets/customize.css'

import { settings } from '@/default.settings'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './routes/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import ButtonClose from '@/components/buttons/ButtonClose.vue'
// import { irationPlugin } from './common/graphics/plugin.iration'

app
  .component('ButtonClose', ButtonClose)

app.mount('#app')

app.config.globalProperties.$settings = settings

// ## 3d plugin
// app.use(irationPlugin, {})

// First visit - service worker is installed
// Client -> Server

// Online mode - service worker acting as a proxy
// Client -> Service Worker -> Server

// Offline mode - service worker responding with cached responses
// Client -> Service Worker -> Cache

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js', { scope: '/' })
      .then((registration) => {
        console.log('Service Worker registered:', registration.scope)
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error)
      })
  })
}
