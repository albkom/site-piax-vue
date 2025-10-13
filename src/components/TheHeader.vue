<script setup lang="ts">
import TheMenu from '@/components/TheMenu.vue'

import { ref } from 'vue'
import { onMounted } from 'vue'
import { useCommonStore } from '@/common/common'
// import { animate, scroll } from 'motion'
const { goTo } = useCommonStore()

const header = ref()
const menu = ref()
// scroll((progress: number) => {
//   if (menu.value && !menu.value.isOpen) {
//     header.value.style.opacity = progress > 0 ? 0 : 1 // TODO
//   }
// })

onMounted(() => {
  document.querySelectorAll('#header').forEach((item) => {
    // animate(
    //   item,
    //   {
    //     opacity: [0, 1],
    //   },
    //   { duration: 0.6, ease: 'easeOut', delay: 0.6 },
    // )
  })
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <TheMenu ref="header" />
</template>

<style scoped>
</style>
