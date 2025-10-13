<script setup lang="ts">
import { applyTheme } from '@/common/base/AppTheme'

import { onMounted, ref } from 'vue'

// @ Stores

const emits = defineEmits(['click', 'afterEntering'])
const props = defineProps({
  height: Number,
})

async function trigger(animation: string) {
  // await data.triggerSequence(animation)
}

const target = ref<HTMLElement>()
function load() {
  if (target.value) {
    const color = '#7cc365'
  }
}

defineExpose({
  trigger,
  load,
})

onMounted(() => {
  load()

  const backgroundImg: HTMLElement | null = document.getElementById('background-img')
  if (backgroundImg) {
    // animate(backgroundImg, { opacity: [0, 0.66] }, { ease: 'easeIn', duration: 0.6 })
    // scroll(
    //   animate(
    //     backgroundImg,
    //     {
    //       transform: ['scale(1)', 'scale(2)'],
    //     },
    //     {
    //       ease: 'linear',
    //       duration: 0.6,
    //     },
    //   ),
    // )
  }
})
</script>

<template>
  <div id="background-img" class="image"></div>
</template>

<style scoped>
#canvas {
  height: 100%;
  width: 100%;
  position: absolute;
}
#overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  top: 0;
}
.image {
  position: fixed;
  height: 100dvh;
  width: 100dvw;
  top: 0;
  background-size: cover;
  pointer-events: none;
}
</style>
