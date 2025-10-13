<script setup lang="ts">
// # Section
import { useSection } from '@/common/layout/useSection'
useSection(onEnter)

// @ Components
import CircleSmall from '@/components/circles/CircleSmall.vue'

// @ Local
import { ref } from 'vue'
defineProps({
  title: String,
  name: { type: String, required: true },
  description: Array<String>,
  priceRange: { type: Number, required: true },
  time: { type: Number, required: true },
  unit: String,
  color: String,
})

const current = ref<HTMLElement | null>(null)

async function onEnter() {}
</script>

<template>
  <article ref="current" class="card--lighter flx-x pad gap-m">
    <header class="flx-x left gap-s">
      <h2>{{ title }}</h2>
      <div class="flx-x row left gap-s">
        <span class="badge">{{ time.toString() }} minuti</span>
        <!-- <CircleSmall class="indicator" :value="time.toString()" :unit="'minuti'" :color="color" /> -->
        <span class="badge">{{ '€'.repeat(Math.floor(priceRange / 3)) }}</span>
      </div>
    </header>
    <section class="flx-x left txt--left">
      <p v-for="(p, index) in description" :key="index">
        {{ p }}
      </p>
    </section>
    <footer>
      <div></div>
      <button @click="() => {  $router.push({ name: 'recipes', hash: `#${name}` })}">Leggi</button>
    </footer>
  </article>
</template>

<style scoped></style>
