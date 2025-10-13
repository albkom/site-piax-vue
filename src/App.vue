<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterView } from 'vue-router'

// @ Components
import TheBackground from '@/components/TheBackground.vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

// @ Stores
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/common/common'
const { init, goTo } = useCommonStore()
const { isBusy } = storeToRefs(useCommonStore())

import { useDbStore } from './routes/store'
import { applyTheme } from './common/base/AppTheme'
import { settings } from './default.settings'

const isReady = ref(false)
onMounted(() => {
  applyTheme(settings.palette)

  // *** App initialization ***
  init(async () => {
    console.log('>>> app callback')

    // await loadPrices()

    isReady.value = true
  })
})
</script>

<template>
  <TheHeader />
  <RouterView v-if="!isBusy" />
  <TheFooter v-if="!isBusy" />
</template>

<style scoped>
#content-wrapper {
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: white; */
  clip-path: polygon(0 10vh, 100% 10vh, 100% 100%, 0 100%);
}
</style>
