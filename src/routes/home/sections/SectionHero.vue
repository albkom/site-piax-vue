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
    <div class="absolute top flx-xy z-0" style="filter: contrast(75%)">
      <ImageLazy img="SAL/SAL_105" ext="png" fit="cover" />
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
      <span class="txt--l pad fw-700 glow-light glow--l">La tua impresa edile di fiducia a Genova</span>
      <hr class="h-10vh" />
      <div class="flx-x">
        <span>Scorri per <small class="txt--m">scoprire di più</small></span>
        <div class="h-2rem w-2rem">
          <!-- @click="scrollToPosition('section-BAG')" -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 800">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
      </div>

      <!-- <button @click.prevent="scrollToPosition('section-bagni')">
        <div class="flx-x">
          <span>Guarda i nostri lavori</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 800">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
      </button> -->
    </div>
  </div>
</template>
