<script setup lang="ts">
// # Section
import { useSection } from '@/common/layout/useSection'
useSection(onEnter)

// @ Components
import CircleSmall from '@/components/circles/CircleSmall.vue'

// @ Local
import { ref } from 'vue'

const current = ref<HTMLElement | null>(null)

async function onEnter() {}
</script>

<template>
  <article ref="current" class="card flx-x pad gap-m">
    <header class="flx-x left gap-s">
      <slot name="header"></slot>
    </header>
    <section class="flx-x left txt--left">
      <slot name="body"></slot>
    </section>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </article>
</template>

<style scoped></style>
