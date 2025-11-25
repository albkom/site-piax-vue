<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'

// @ Components
import TheMenu from '@/components/TheMenu.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheBubble from '@/components/TheBubble.vue'

// @ Stores
import { storeToRefs } from 'pinia'
import { useNavigationStore } from '@/stores/navigation'
const { init } = useNavigationStore()
const { isBusy } = storeToRefs(useNavigationStore())

const isReady = ref(false)
onMounted(() => {
  // *** App initialization ***
  init(async () => {
    console.log('>>> app callback')
    isReady.value = true
  })
})
</script>

<template>
  <TheMenu />
  <TheBubble class="z-5" />
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
