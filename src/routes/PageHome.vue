<script setup lang="ts">
// @ Stores
import { useContentsStore } from '@/stores/contents'
const { services } = useContentsStore()

// @ Components
import SectionHero from '@/components/SectionHero.vue'
import SectionCarousel from '@/components/SectionCarousel.vue'
</script>

<template>
  <main class="flx-x top">
    <div class="flx-x h-100vh" style="position: fixed">
      <SectionHero class="z-0" />
    </div>
    <div class="flx-x h-100vh">
      <!-- To compensate fixed -->
    </div>
    <div class="flx-x top back-dark services-grid">
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
@media (min-width: 769px) {
  .services-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
