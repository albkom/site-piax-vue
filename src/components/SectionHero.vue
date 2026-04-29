<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigation'
import { isPortrait } from '@/common/utils/images'
import ImageLazy from '@/components/ImageLazy.vue'
import { onMounted, ref } from 'vue'
const { scrollToPosition } = useNavigationStore()

const heroSrc = ref<string>('')
onMounted(() => {
  const data = 'RIS/RIS_1'
  heroSrc.value = `${isPortrait() ? 'mobile' : 'desktop'}/${data}`
})
</script>

<template>
  <div class="flx-x max--width h-100vh compensate-header">
    <div class="absolute top flx-xy z-0" style="filter: contrast(80%) brightness(90%)">
      <ImageLazy :img="heroSrc" fit="cover" fill alt="Lavori di ristrutturazione GG Impianti e Costruzioni Srl" />
    </div>
    <div class="flx-x z-1" style="align-items: flex-start; justify-content: flex-end; padding: 2rem;">
      <div class="flx left" style="align-items: flex-start; gap: 0.75rem; max-width: 480px;">
        <div class="flx-x glow-light glow--l">
          <img src="@/assets/logo.svg" class="flx-x h-20vh" alt="" />
        </div>
        <span class="txt--l lh-100 fw-700 glow-light glow--l">
          I nostri lavori parlano per noi.
        </span>
        <div class="flx-x row" style="gap: 0.75rem; margin-top: 0.5rem;">
          <!-- <a href="https://wa.me/393206345722" target="_blank" class="btn-solid"
            aria-label="Richiedi un preventivo su WhatsApp">
            Preventivo gratuito
          </a> -->
          <button id="cta" class="btn-ghost" @click="scrollToPosition('section-BAG')">
            Scopri i servizi ↓
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#cta {
  color: var(--text) !important;
  filter: drop-shadow(0 0 1rem var(--highlight));
  animation: bounce 2s infinite;
}

#cta span {
  color: var(--text) !important;
  font-weight: 700;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}
</style>