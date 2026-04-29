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
    <div class="hero-overlay absolute top z-1"></div>
    <div class="flx-x z-2" style="align-items: flex-start; justify-content: flex-end; padding: 2rem;">
      <div class="flx left" style="align-items: flex-start; gap: 0.75rem; max-width: 480px;">
        <div class="flx-x">
          <img src="@/assets/logo.svg" class="flx-x h-20vh hero-logo" alt="" />
        </div>
        <span class="txt--l lh-100 fw-700 highlight" style="text-shadow: 0 0 10px var(--text);">
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
.hero-overlay {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.15) 100%);
  min-height: 100%;
  width: 100%;
}

.hero-logo {
  filter: brightness(0) invert(1) drop-shadow(0 0 0.6rem var(--highlight));
}

#cta {
  border-color: var(--highlight) !important;
  box-shadow: 0 0 0.75rem rgba(94, 196, 209, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
  color: var(--dominant) !important;
}

#cta:hover {
  background: rgba(94, 196, 209, 0.15) !important;
  box-shadow: 0 0 1.25rem rgba(94, 196, 209, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;
}

#cta-old-old {
  color: var(--text) !important;
  filter: drop-shadow(0 0 1rem var(--highlight));
  animation: bounce 2s infinite;
}

#cta-old span {
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