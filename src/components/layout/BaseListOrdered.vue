<script setup lang="ts">
// import { animate, scroll } from 'motion'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'

defineProps({
  items: {
    type: Array as () => string[],
    required: true,
  },
})
const currentSection = ref<HTMLElement | null>(null)

onMounted(() => {
  onEnter()
})

async function onEnter() {
  if (currentSection.value != null) {
    currentSection.value.querySelectorAll('.ingredients-message').forEach((h1, i) => {
      // scroll(
      //   animate(
      //     h1,
      //     {
      //       opacity: [0, 0.2, 1],
      //       transform: [
      //         `translateX(${i % 2 ? -100 : -100}%)`,
      //         'translateX(-100%)',
      //         'translateX(0%)',
      //       ],
      //     },
      //     { ease: 'linear' },
      //   ),
      //   { target: h1 as Element, offset: ['start end', '50% 85%', '50% 75%'] },
      // )
    })
  }
}
</script>

<template >
  <ul ref="currentSection" class="flx-x left gap-m">
    <li
      v-for="(item, i) in items"
      :key="`instruction-${i}`"
      class="ingredients-message card flx-x row left txt--left pad"
    >
      <div style="display: inline-block">
        <small class="fw-700">{{ i + 1 }}.</small> <span>{{ item }}</span>
      </div>
    </li>
  </ul>
</template>

<style scoped>
#subtitle,
#message {
  clip-path: inset(0% 100% 0% 0%);
}
#circle-subtitle,
#circle-message {
  z-index: 2;
  position: absolute;
  transform: translateX(-100vw);
}
#call-to-action {
  opacity: 0;
  transform: translateY(100vh);
}
#ingredients-hero-1,
#ingredients-hero-2 {
  opacity: 0;
  transform: translateX(-100vw);
}
</style>
