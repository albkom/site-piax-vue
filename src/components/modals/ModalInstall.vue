<script setup lang="ts">
import { onMounted, ref } from 'vue'

async function detectSWUpdate() {
  const registration = await navigator.serviceWorker.ready

  registration.addEventListener('updatefound', (event) => {
    const newSW = registration.installing
    if (newSW)
      newSW.addEventListener('statechange', (event) => {
        if (newSW.state == 'installed') {
          // New service worker is installed, but waiting activation
          alert('New version available')
        }
      })
  })
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

let installPrompt: BeforeInstallPromptEvent | null = null
const askingToInstall = ref(false)
const install = async () => {
  if (!installPrompt) {
    askingToInstall.value = false
    return
  }
  const result = await installPrompt.prompt()
  askingToInstall.value = false
}

onMounted(() => {
  window.addEventListener('beforeinstallprompt', (event: Event) => {
    event.preventDefault()
    installPrompt = event as BeforeInstallPromptEvent
    // askingToInstall.value = true
  })

  if ('serviceWorker' in navigator) {
    detectSWUpdate()
  }
})
</script>

<template>
  <div class="modal" v-if="askingToInstall">
    <div class="modal-content">
      <button @click="install()">Installa</button>
    </div>
  </div>
</template>

<style scoped></style>
