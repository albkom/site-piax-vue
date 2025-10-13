<script setup lang="ts">
// # Section
import { useSection } from '@/common/layout/useSection'
// import { fadeIn, rollIn, clipIn, slideInFromBottom } from '@/common/motions'
import ImageLazy from '@/components/ImageLazy.vue'
// import { fadeIn, rollIn, clipIn, slideInFromBottom } from '@/common/motions'

import { useCommonStore } from '@/common/common'
const { scrollToPosition } = useCommonStore()

import { useDbStore } from '@/routes/store'
const { hero } = useDbStore()
</script>

<template>
  <div class="flx-x max--width h-100vh compensate-header">
    <div class="absolute top flx-xy z-0">
      <ImageLazy :img="hero" ext="jpg" fit="cover" />
    </div>
    <div class="flx-x z-1">
      <div class="flx-x">
        <img src="@/assets/logo.svg" class="flx-x h-20vh" alt="" />
      </div>
      <hr class="h-10vh" />
      <button
        @click.prevent="scrollToPosition('section-bagni')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 800">
          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
        </svg>
      </button>
    </div>
  </div>
</template>
