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
    alt="Image"
  />
</template>

<style scoped>
.image-section-background {
  width: 100vw;
  height: 100%;
  object-fit: cover;
  object-position: center;
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
