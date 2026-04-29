<script setup lang="ts">
import { getImageUrl } from '@/common/utils/images'
import { onMounted, ref } from 'vue'

const PREFIX_MAP: Record<string, string> = {
  BAG: 'Bagno',
  CUC: 'Cucina',
  ILL: 'Illuminazione',
  PAV: 'Pavimento',
  RIS: 'Ristrutturazione',
  SAL: 'Salotto',
}

function deriveAlt(img: string): string {
  const filename = img.split('/').pop() ?? img
  const nameWithoutExt = filename.replace(/\.[^.]+$/, '')
  const match = nameWithoutExt.match(/^([A-Z]+)_(\d+)$/)
  if (!match) return nameWithoutExt
  const [, prefix, num] = match
  const label = PREFIX_MAP[prefix] ?? prefix
  return `${label} ${num}`
}

const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  ext: {
    type: String,
    required: false,
  },
  fit: {
    type: String,
    default: 'cover',
  },
  alt: {
    type: String,
    required: false,
  },
  fill: {
    type: Boolean,
    default: false,
  },
})

const isLoaded = ref(false)

const image = ref<HTMLImageElement | null>(null)
onMounted(() => {
  // console.log('ImageLazy mounted with img:', props.img);
  // const imgElement = document.createElement('img');
  // image.value = imgElement;
  // if (image.value) {
  //   image.value.src = getImageUrl(props.img, props.ext)
  //   image.value.onload = () => {
  //     // console.log('Image loaded:', image.value.src);
  //   }
  // }
})

function handleImageLoad() {
  isLoaded.value = true
  // console.log('ImageLazy loaded:', props.img)
  if (image.value)
    image.value.style.opacity = '1'
}
</script>

<template>
  <div class="image-wrapper" :class="{ 'image-wrapper--fill': fill }">
    <img
      ref="image"
      class="image-section-background"
      draggable="false"
      @contextmenu.prevent
      style="pointer-events: none"
      :class="[fit, { loaded: isLoaded }]"
      :src="getImageUrl(img, ext)"
      loading="lazy"
      @load="handleImageLoad"
      :alt="alt ?? deriveAlt(img)"
    />
  </div>
</template>

<style scoped>
.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  background-color: var(--dominant);
  overflow: hidden;
}
.image-wrapper--fill {
  position: absolute;
  inset: 0;
  width: unset;
  aspect-ratio: unset;
}
.image-section-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.image-section-background.loaded {
  opacity: 1;
}
.contain {
  object-fit: contain;
}
.scale-down {
  object-fit: scale-down;
}
</style>
