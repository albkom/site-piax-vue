<script setup lang="ts">
// # Page
import { usePage } from '@/common/layout/usePage'
// import { onEnter } from './animations/onEnter'
// import { onExit } from './animations/onExit'
// const { onScroll } = usePage(onEnter, onExit)

// @ Stores
import { useDbStore } from '@/routes/store'
const { updateProgress } = useDbStore()
import { storeToRefs } from 'pinia'
const { services } = useDbStore()

// @ Components
import BubbleOverlay from './sections/BubbleOverlay.vue'
import SectionHero from './sections/SectionHero.vue'
import SectionCarousel from './sections/SectionCarousel.vue'

// # Local
import { onMounted, ref } from 'vue'

onMounted(() => {
  // onScroll((p: number) => {
  //   updateProgress(p)
  // })
})
</script>

<template>
  <main class="flx-x top">
    <div class="flx-x h-100vh" style="position: fixed">
      <SectionHero class="z-0" />
    </div>
    <div class="flx-x h-100vh">
      <!-- To compensate fixed -->
    </div>
    <BubbleOverlay class="z-5" />
    <div class="flx-x top back-dark">
      <SectionCarousel
        v-for="service in services"
        :key="service.id"
        :id="`section-${service.id}`"
        :title="service.title"
        :description="service.description"
        :images="service.images"
        class="snap"
      />
    </div>
  </main>
</template>

<style scoped>
#home-background {
  z-index: 0;
  min-height: 100%;
  height: 100%;
  min-width: 100%;
  width: 100%;
}
#home-overlay {
  opacity: 0;
  top: auto;
  bottom: 0;
  /* pointer-events: none; */
}

.z-stack > * {
  position: relative;
}

.z-stack > *:nth-child(1) {
  z-index: 5;
}
.z-stack > *:nth-child(2) {
  z-index: 4;
}
.z-stack > *:nth-child(3) {
  z-index: 3;
}
.z-stack > *:nth-child(4) {
  z-index: 2;
}
.z-stack > *:nth-child(5) {
  z-index: 1;
}

#section-home-hero {
  /* background-image: url('/img/piax (13).jpg'); */
  background-size: cover;
  background-position: center;
}
.gradient {
  background-image: linear-gradient(to bottom, var(--dark) 0%, transparent 10%);
}

.sliding-image {
  margin-top: -10vh;
}
</style>
