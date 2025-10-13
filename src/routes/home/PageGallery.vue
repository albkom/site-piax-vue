<script setup lang="ts">
// # Page
// import { usePage } from '@/common/layout/usePage'
// import { onEnter } from './animations/onEnter'
// import { onExit } from './animations/onExit'
// const { onScroll } = usePage(onEnter, onExit)

// @ Stores
import { useCommonStore } from '@/common/common'
const { goTo } = useCommonStore()

// @ Components
import ImageLazy from '@/components/ImageLazy.vue'
import { ref } from 'vue'

const images = ref([
  'computer/img-20-computer',
  'computer/img-21-computer',
  'computer/img-22-computer',
  'computer/img-23-computer',
  'computer/img-24-computer',
  'computer/img-25-computer',
  'computer/img-26-computer',
  'computer/img-27-computer',
  'computer/img-28-computer',
  'computer/img-29-computer',
  'computer/img-30-computer',
  'computer/img-31-computer',
  'computer/img-32-computer',
  'computer/img-33-computer',
  'computer/img-34-computer',
  'computer/img-35-computer',
  'computer/img-36-computer',
  'computer/img-37-computer',
  'computer/img-38-computer',
  'computer/img-39-computer',
  'computer/img-40-computer',
  'computer/img-41-computer',
  'computer/img-42-computer',
  'computer/img-43-computer',
  'computer/img-44-computer',
  'computer/img-45-computer',
  'computer/img-46-computer',
  'computer/img-47-computer',
  'computer/img-48-computer',
  'computer/img-49-computer',
  'computer/img-50-computer',
  'computer/img-51-computer',
  'computer/img-52-computer',
  'computer/img-53-computer',
  'computer/img-54-computer',
  'computer/img-55-computer',
  'computer/img-56-computer',
  'computer/img-57-computer',
  'computer/img-58-computer',
  'computer/img-59-computer',
  'computer/img-60-computer',
  'computer/img-61-computer',
  'computer/img-62-computer',
  'computer/img-63-computer',
  'computer/img-64-computer',
  'computer/img-65-computer',
  'computer/img-66-computer',
  'computer/img-67-computer',
  'computer/img-68-computer',
  'computer/img-69-computer',
  'computer/img-70-computer',
  'computer/img-71-computer',
  'computer/img-72-computer',
  'computer/img-73-computer',
  'computer/img-74-computer',
  'computer/img-75-computer',
  'computer/img-76-computer',
  'computer/img-77-computer',
  'computer/img-78-computer',
  'computer/img-79-computer',
  'computer/img-80-computer',
])

import { computed } from 'vue'

const messages = [
  { title: 'Bagno', desc: 'Soluzioni moderne e funzionali per il tuo bagno.' },
  { title: 'Salotti', desc: 'Spazi accoglienti per il relax e la convivialità.' },
  { title: 'Cucine', desc: 'Cucine su misura per ogni esigenza.' },
  { title: 'Camere da letto', desc: 'Comfort e stile per il tuo riposo.' },
  { title: 'Uffici', desc: 'Ambienti di lavoro efficienti e moderni.' },
  { title: 'Facciate', desc: 'Ristrutturazione e valorizzazione delle facciate.' },
  { title: 'Tetti', desc: 'Coperture sicure e durature.' },
  { title: 'Pavimenti', desc: 'Pavimentazioni di qualità per ogni ambiente.' },
  { title: 'Ristrutturazioni', desc: 'Interventi completi di ristrutturazione.' },
  { title: 'Impianti', desc: 'Soluzioni impiantistiche all’avanguardia.' },
  { title: 'Serramenti', desc: 'Infissi e serramenti per efficienza e sicurezza.' },
  { title: 'Giardini', desc: 'Progettazione e realizzazione di spazi verdi.' },
]

const currentMeta = computed(() => {
  if (!section.value) return { title: '', desc: '' }
  const match = section.value.match(/^img-(\d+)$/)
  if (!match) return { title: '', desc: '' }
  const idx = Number(match[1])
  return messages[idx] || { title: '', desc: '' }
})

const progress = ref(0)
const section = ref<String | null>(null)
const message = ref({ title: '', desc: '' })
// onScroll((p: number) => {
//   progress.value = p
//   const sectionIds = [...images.value.map((_, i) => `img-${i}`)]
//   const sections = sectionIds
//     .map((id) => document.getElementById(id))
//     .filter(Boolean) as HTMLElement[]

//   const scrollY = window.scrollY
//   const viewportHeight = window.innerHeight

//   let currentSection = null
//   for (let i = 0; i < sections.length; i++) {
//     const rect = sections[i].getBoundingClientRect()
//     if (rect.top <= viewportHeight / 2 && rect.bottom > viewportHeight / 2) {
//       currentSection = sectionIds[i]
//       message.value = messages[i]
//       break
//     }
//   }
//   // You can now use `currentSection` as needed
//   console.log('Current section:', currentSection)
//   section.value = currentSection
// })
</script>

<template>
  <main class="relative">
    <section class="flx-x h-100vh" style="position: fixed;">
      <h1>Fotogallery</h1>
    </section>
    <section id="home-overlay" style="position: fixed" class="flx-x bottom h-100vh z-5">
      <!-- <div class="flx-x row between h-50vh" style="align-items: end">
        <button id="cta" class="button--icon" @click="$emit('scroll-to', 'section-home-hero')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-2rem" viewBox="0 -960 960 960">
            <path
              d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
            />
          </svg>
        </button>
        <div class="flx right pad gap-s txt--right">
          <strong class="txt--m lh-100">{{ message.title }}</strong>
          <span class="txt--s lh-100">{{ message.desc }}</span>
        </div>
      </div>
      <hr /> -->
      <div id="home-progress" class="flx-x" style="overflow: hidden">
        <div
          id="home-progress-value"
          class="flx-xy"
          style="background-color: var(--action); margin-left: -180%"
          :style="{ transform: `translateX(${progress}%)` }"
        ></div>
      </div>
      <hr class="h-5vh" />
    </section>
    <div class="flx-x h-100vh">
      <!-- To compensate fixed -->
    </div>
    <section
      class="flx-x relative z-3"
      v-for="(src, index) in images"
      :key="index"
      :id="`img-${index}`"
    >
      <div class="overlay gradient">
        {{ index }}
      </div>
      <ImageLazy :img="src" ext="jpg" />
    </section>
  </main>
</template>

<style>
#home-background {
  z-index: 0;
  min-height: 100%;
  height: 100%;
  min-width: 100%;
  width: 100%;
}
#home-progress {
  height: 0.5rem;
  border-radius: 0.25rem;
}
#home-progress-value {
  border-radius: 0.25rem;
  background-image: linear-gradient(
    to right,
    var(--action) 0%,
    var(--action) 50%,
    var(--text) 100%
  );
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

#home-overlay {
  opacity: 0;
  /* Subtle vignette at the borders */
  background-image: radial-gradient(
    circle at center,
    transparent 0%,
    transparent 50%,
    rgba(255, 255, 255, 0.35) 100%
  );
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
  margin-top: -25%;
}
</style>
