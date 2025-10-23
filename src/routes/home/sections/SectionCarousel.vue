<script setup lang="ts">
import CarouselCounter from './CarouselCounter.vue'
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

import { onMounted, ref } from 'vue'

const scroller = ref<HTMLElement | null>(null)
const index = ref(1)
const count = ref(0)
const isTransitioning = ref(false)

// Intersection Observer for lazy loading
const sectionRef = ref<HTMLElement | null>(null)
const isInViewport = ref(false)

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
  { threshold: 0.1 }
)

onMounted(() => {
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
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
  }
})

let isAdjusting = false

function handleScrollEnd() {
  if (isAdjusting) return
  if (isTransitioning.value || !scroller.value) return

  console.log('>>> scroll end')
  const scrollLeft = scroller.value.scrollLeft
  const itemWidth = scroller.value.clientWidth
  const currentIndex = Math.round(scrollLeft / itemWidth) - 1 // Adjust for duplicated image
  const originalLength = props.images.length
  console.log(originalLength, currentIndex)

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

  scroller.value.scrollBy({
    left: scroller.value.clientWidth,
    behavior: 'smooth',
  })
}
</script>
<template>
  <section ref="sectionRef" class="relative flx-x back-dark">
    <div class="flx-x left pad back-dominant">
      <h4 class="txt--l mt-2vh">
        {{ title }}
      </h4>
      <span class="txt--m txt--left mt-2vh mb-3vh">
        {{ description }}
      </span>
    </div>
    <div ref="scroller" dir="ltr" class="scroll-container x-mandatory-scroll-snapping slow-scroll"
     v-if="isInViewport">
      <div
        class="relative scroll-image flx-x"
        v-for="(src, imgIndex) in [images[images.length - 1], ...images, images[0]]"
        :key="`img-${imgIndex}`"
        :id="`imgs-${imgIndex}`"
      >
        <ImageLazy :img="src" ext="png" fit="scale-down" />
      </div>
    </div>
    <div class="flx-x back-complement">
      <div class="flx-x row between pad mb-2vh">
        <button class="" @click="scrollLeft()" aria-label="Scroll left">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="2.5rem">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <div class="flx pad">
          <span style="text-wrap: wrap">{{ title }}</span>
          <div class="flx-x row">
            <small>{{ index + 1 }}</small>
            <span>/</span>
            <small>{{ count }}</small>
          </div>
        </div>
        <button class="" @click="scrollRight()" aria-label="Scroll right">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="2.5rem">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>
      <!-- <CarouselCounter :count="count" v-model:index="index" /> -->
    </div>
  </section>
</template>

<style scoped>
.scroller-header {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  color: var(--action);
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
.scroll-container {
  width: 100%;
  height: 100%;
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
  background-color: var(--dark);
}
.scroll-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
.scroll-container:nth-child(0) {
  border: none;
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
  background-image: linear-gradient(to right, var(--light), var(--action));
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
</style>
