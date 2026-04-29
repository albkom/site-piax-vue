<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Bagni',
  },
  description: {
    type: String,
    default: '',
  },
  images: {
    type: Array<string>,
    required: true,
  },
})

// @ Components
import ImageLazy from '@/components/ImageLazy.vue'

import { onMounted, ref, watch } from 'vue'

import { storeToRefs } from 'pinia'
import { useContentsStore } from '@/stores/contents'
const { areTextsHidden } = storeToRefs(useContentsStore())

const scroller = ref<HTMLElement | null>(null)
const index = ref(1)
const count = ref(0)
const isTransitioning = ref(false)

// Intersection Observer for lazy loading
const sectionRef = ref<HTMLElement | null>(null)
const isInViewport = ref(false)
const isLoaded = ref(false)

watch(isInViewport, (newVal) => {
  if (newVal && !isLoaded.value) {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 100)
    }).then(() => {
      if (scroller.value) {
        count.value = props.images.length // Use original count for indicators

        // Start at the first original image (after the duplicated one)
        scroller.value.scrollTo({
          left: scroller.value.clientWidth,
          behavior: 'instant',
        })

        // Listen for scroll end to handle infinite loop
        let scrollTimeout: number
        scroller.value.addEventListener('scroll', () => {
          clearTimeout(scrollTimeout)
          scrollTimeout = setTimeout(handleScrollEnd, 50)
        })
        isLoaded.value = true
      }
    })
  }
})

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isInViewport.value = true
        count.value = props.images.length // Use original count for indicators
        observer.disconnect() // Stop observing once loaded
      }
    })
  },
  { threshold: 0.1 },
)

onMounted(() => {
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

let isAdjusting = false

function handleScrollEnd() {
  if (isAdjusting) return
  if (isTransitioning.value || !scroller.value) return

  const scrollLeft = scroller.value.scrollLeft
  const itemWidth = scroller.value.clientWidth
  const currentIndex = Math.round(scrollLeft / itemWidth) - 1 // Adjust for duplicated image
  const originalLength = props.images.length
  // console.log(originalLength, currentIndex)

  // If we're at a duplicated image, jump back to the original
  if (currentIndex >= originalLength) {
    isTransitioning.value = true
    isAdjusting = true
    const targetIndex = currentIndex - originalLength
    index.value = targetIndex

    // Jump to the corresponding original image without animation
    try {
      scroller.value.scrollTo({
        left: (targetIndex + 1) * itemWidth, // +1 for the duplicated image at start
        behavior: 'instant' as ScrollBehavior,
      })
    } catch {
      // Fallback for browsers that don't support 'instant'
      scroller.value.scrollLeft = targetIndex * itemWidth
    }

    // Reset the transition flag after a short delay
    setTimeout(() => {
      isTransitioning.value = false
      isAdjusting = false
    }, 50)
  } else if (currentIndex < 0) {
    isTransitioning.value = true
    isAdjusting = true
    const targetIndex = originalLength // Jump to last original image
    index.value = targetIndex
    console.log('Jump to last original image:', targetIndex)
    // Jump to the corresponding original image without animation
    try {
      scroller.value.scrollTo({
        left: targetIndex * itemWidth, // +1 for the duplicated image at start
        behavior: 'instant' as ScrollBehavior,
      })
    } catch {
      // Fallback for browsers that don't support 'instant'
      scroller.value.scrollLeft = (targetIndex + 1) * itemWidth
    }

    // Reset the transition flag after a short delay
    setTimeout(() => {
      isTransitioning.value = false
      isAdjusting = false
    }, 50)
  } else {
    index.value = currentIndex
  }
}

function scrollLeft() {
  if (!scroller.value || isTransitioning.value) return

  scroller.value.scrollBy({
    left: -scroller.value.clientWidth,
    behavior: 'smooth',
  })
}

function scrollRight() {
  if (!scroller.value || isTransitioning.value) return
  // console.log('Scroll right')
  scroller.value.scrollBy({
    left: scroller.value.clientWidth,
    behavior: 'smooth',
  })
}
</script>
<template>
  <section ref="sectionRef" class="relative flx-x back-dark">
    <div class="flx-x left pad back-dominant section-header">
      <span class="section-eyebrow">Servizio</span>
      <h4 class="txt--l section-title-text">{{ title }}</h4>
      <div class="section-accent"></div>
      <span class="txt--m txt--left section-desc" v-if="!areTextsHidden">
        {{ description }}
      </span>
    </div>
    <div
      ref="scroller"
      dir="ltr"
      v-if="isInViewport"
      class="scroll-container x-mandatory-scroll-snapping slow-scroll"
    >
      <div
        class="relative scroll-image flx-x"
        v-for="(src, imgIndex) in [images[images.length - 1], ...images, images[0]]"
        :key="`img-${imgIndex}`"
        :id="`imgs-${imgIndex}`"
      >
        <ImageLazy :img="src" fit="scale-down" />
      </div>
    </div>
    <div class="image-placeholder" v-else>A</div>
    <div class="scroll-progress-bar">
      <div class="scroll-progress-fill" :style="{ width: ((index + 1) / count * 100) + '%' }"></div>
    </div>
    <div class="flx-x back-dominant" style="box-shadow: inset 0 -3pt 5pt var(--complement)">
      <div class="flx-x row between pad" style="width: 100%; overflow: hidden;">
        <button class="glow-text" @click="scrollLeft()" aria-label="Scroll left">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="2.5rem">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <div class="flx pad nav-center" style="flex: 1; min-width: 0; overflow: hidden;">
          <span class="nav-label">{{ title }}</span>
          <div class="nav-counter">{{ index + 1 }} / {{ count }}</div>
          <div class="nav-dots">
            <span
              v-for="i in count"
              :key="i"
              class="nav-dot"
              :class="{ active: i === index + 1 }"
            ></span>
          </div>
        </div>
        <button class="glow-text" @click="scrollRight()" aria-label="Scroll right">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="2.5rem">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scroller-header {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  color: var(--text);
  background-color: var(--dominant);
}
button {
  padding: 0;
}
button svg {
  width: 2.5rem;
  height: 2.5rem;
  fill: var(--action);
}
section {
  border-top: 2px solid var(--complement);
}
.scroll-container {
  width: 100%;
  /* height: 100%; */
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: left;
  vertical-align: top;
  scroll-snap-type: x mandatory; /* Add mandatory x snapping */
  /* border-top: 5pt solid var(--dark); */
  background-color: var(--dominant);
}
.scroll-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
.scroll-container:nth-child(0) {
  border: none;
}
.image-placeholder {
  background-color: var(--dominant);
  min-width: 100vw;
  min-height: calc(100vw * 4 / 3);
}
.scroll-image {
  display: flex;
  flex: none;
  scroll-snap-align: start; /* Snap each image to start */
  /* border-right: 5pt solid var(--dominant); */
  box-sizing: border-box;
  margin: auto;
}
.scroll-progress {
  bottom: 0;
  left: 0;
  height: 2pt;
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  /* background-color: var(--light); */
  background-image: linear-gradient(to right, var(--highlight), var(--action));
  transform-origin: left;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.gradient {
  /* background-image: linear-gradient(to bottom, var(--dark) 0%, transparent 50%); */
  background-color: var(--dominant);
  border-bottom: solid 5pt var(--dominant);
}

/* --- Miglioramenti estetici --- */
.section-header {
  border-bottom: 2px solid var(--complement);
}
.section-eyebrow {
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--complement);
  margin-bottom: 0.25rem;
}
.section-title-text {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.1;
}
.section-accent {
  width: 2rem;
  height: 2px;
  background-color: var(--text);
  margin: 0.4rem 0 0.6rem;
}
.section-desc {
  margin-bottom: 0.75rem;
}
.scroll-progress-bar {
  width: 100%;
  height: 3px;
  background-color: var(--complement);
}
.scroll-progress-fill {
  height: 100%;
  background-color: var(--highlight);
  transition: width 0.3s ease;
}
.nav-center {
  text-align: center;
}
.nav-label {
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--complement);
}
.nav-counter {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.1;
}
.nav-dots {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  margin-top: 3px;
  overflow: hidden;
}
.nav-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--complement);
  transition: all 0.2s ease;
}
.nav-dot.active {
  background-color: var(--text);
  width: 12px;
  border-radius: 2px;
}
.scroller-header {
  color: var(--text);
}

/* --- Desktop: 2 colonne --- */
@media (min-width: 769px) {
  .image-placeholder {
    min-height: calc(50vw * 4 / 3);
  }
}
</style>
