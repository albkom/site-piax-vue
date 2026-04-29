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
    <div class="absolute top flx-xy z-0" style="filter: contrast(50%) brightness(150%)">
      <ImageLazy :img="heroSrc" fit="cover" fill alt="Lavori di ristrutturazione GG Impianti e Costruzioni Srl" />
    </div>
    <div class="flx-x z-1">
      <!-- <div class="flx-x font-header">
        <div class="flx-x row txt--xxl">
          <div>G</div>
          <div style="transform: scaleX(-1)">G</div>
        </div>
        <div class="flx-x txt--l">Impianti e Costruzioni</div>
      </div> -->
      <div class="flx-x glow-light glow--l">
        <img src="@/assets/logo.svg" class="flx-x h-20vh" alt="" />
      </div>
      <span class="txt--l pad lh-100 fw-700 glow-light glow--l">La tua impresa edile di fiducia a Genova</span>
      <hr class="h-10vh" />
      <button id="cta" class="flx-x pad--zero"
        style="background:none;border:none;cursor:pointer;color:inherit;" @click="scrollToPosition('section-BAG')">
        <span>Scorri per scoprire di più</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-2rem w-2rem" viewBox="0 -960 960 800">
          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
        </svg>
      </button>
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