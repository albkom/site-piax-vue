<script setup lang="ts">
// @ Stores
import { useCommonStore } from '@/common/common'
const { getImageUrl } = useCommonStore()

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
</script>

<template>
  <img
    class="image-section-background"
    draggable="false"
    @contextmenu.prevent
    style="pointer-events: none"
    :class="fit"
    :src="getImageUrl(img, ext)"
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
