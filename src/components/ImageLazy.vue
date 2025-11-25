<script setup lang="ts">
import { getImageUrl } from '@/common/utils/images'
import { onMounted, ref } from 'vue'

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
  console.log('ImageLazy loaded:', props.img)
  if (image.value)
    image.value.style.opacity = '1'
}
</script>

<template>
  <img
    ref="image"
    class="image-section-background"
    draggable="false"
    @contextmenu.prevent
    style="pointer-events: none"
    :class="fit"
    :src="getImageUrl(img, ext)"
    loading="lazy"
    @load="handleImageLoad"
    alt="Image"
  />
</template>

<style scoped>
.image-section-background {
  width: 100vw;
  height: 100%;
  aspect-ratio: 0.75;
  object-fit: cover;
  object-position: center;

  background-color: var(--dominant);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.contain {
  width: auto;
  height: 100vh;
  object-fit: contain;
  object-position: center;
}
.scale-down {
  width: 100%;
  height: auto;
  /* height: 100vh; */
  object-fit: scale-down;
  object-position: center;
}
</style>
