<script setup lang="ts">
// @ Stores
import { useCommonStore } from '@/common/common'
const { goTo } = useCommonStore()

defineProps({
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

// import { animate, scroll } from 'motion'
import { onMounted, ref } from 'vue'

const scroller = ref<HTMLElement | null>(null)
const progress = ref<HTMLElement | null>(null)

onMounted(() => {
  if (scroller.value && progress.value) {
    // scroll(animate(progress.value, { scaleX: [0.1, 1] }, { ease: 'linear' }), {
    //   container: scroller.value as HTMLElement,
    //   axis: 'x',
    // })
    // scroll(
    //   (p: number) => {
    //     if (scroller.value) {
    //       scroller.value.querySelectorAll('.button-scroll.scroll-backward').forEach((item) => {
    //         ;(item as HTMLButtonElement).disabled = p <= 0
    //         ;(item as HTMLButtonElement).style.opacity = p <= 0 ? '0.5' : '1'
    //       })
    //       scroller.value.querySelectorAll('.button-scroll.scroll-forward').forEach((item) => {
    //         ;(item as HTMLButtonElement).disabled = p >= 1.0
    //         ;(item as HTMLButtonElement).style.opacity = p >= 1.0 ? '0.5' : '1'
    //       })
    //     }
    //   },
    //   {
    //     container: scroller.value as HTMLElement,
    //     axis: 'x',
    //   },
    // )
  }
})

function scrollLeft() {
  if (scroller.value) {
    scroller.value.scrollBy({
      left: -scroller.value.clientWidth,
      behavior: 'smooth',
    })
  }
}
function scrollRight() {
  console.log('scrollRight')
  if (scroller.value) {
    scroller.value.scrollBy({
      left: scroller.value.clientWidth,
      behavior: 'smooth',
    })
  }
}
</script>
<template>
  <section class="relative flx-x h-100vh">
    <div ref="scroller" dir="ltr" class="scroll-container x-mandatory-scroll-snapping">
      <div
        class="relative scroll-image h-100vh flx-x"
        style="background-color: var(--light)"
        v-for="(src, index) in images"
        :key="index"
        :id="`imgs-${index}`"
      >
        <div v-if="index == 0" class="absolute flx-x pad gradient">
          <!-- <hr class="h-10vh" /> -->
          <hr class="h-3rem" />
          <p class="txt--m">
            {{ description }}
          </p>
        </div>
        <ImageLazy :img="src" ext="jpg" fit="cover" />
      </div>
    </div>
    <div class="absolute flx-xy bottom">
      <div class="flx-x h-50vh row between">
        <button class="button-scroll scroll-backward big" @click="scrollLeft()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </button>
        <button class="button-scroll scroll-forward big" @click="scrollRight()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </button>
      </div>
    </div>
    <!-- <div class="overlay gradient z-4"></div> -->
    <div class="scroller-header absolute z-2 flx-x row pad" style="bottom: auto; top: 0">
      <!-- <hr class="h-10vh" /> -->
      <div class="flx stretch left">
        <div ref="progress" class="scroll-progress"></div>
        <h3 class="txt--left left">{{ title }}</h3>
      </div>
      <!-- <div class="only--mobile flx">
        <button class="button-scroll scroll-backward" @click="scrollLeft()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </button>
      </div>
      <div class="only--mobile flx">
        <button class="button-scroll scroll-forward" @click="scrollRight()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </button>
      </div> -->
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
.button-scroll {
  background-color: transparent;
  border: none;
  color: var(--action);
  padding: 0;
}
.button-scroll svg {
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
  stroke-width: 20pt;
  stroke: var(--lighter);
}
.button-scroll.big svg {
  width: 4rem;
  height: 4rem;
  color: var(--action);
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
}
.scroll-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
.scroll-container:nth-child(0) {
  border: none;
}
.scroll-image {
  display: block;
  flex: none;
  scroll-snap-align: start; /* Snap each image to start */
  border-right: 5pt solid var(--dominant);
  box-sizing: border-box;
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
