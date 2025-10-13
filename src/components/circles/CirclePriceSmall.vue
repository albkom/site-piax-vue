<script setup lang="ts">
defineProps({
  value: {
    type: String,
    default: '?',
  },
  unit: {
    type: String,
    default: '-',
  },
})
</script>

<template>
  <div class="price-circle flx circle">
    <span>{{ value }}</span>
    <small>{{ unit }}</small>
  </div>
</template>

<style scoped>
.price-circle {
  min-width: 3rem;
  width: 3rem;
  max-width: 3rem;
  margin: 0.5rem 1rem 0 1rem; // to match the horizontal size of the other circles
  aspect-ratio: 1;
  font-size: 0.7rem;
}
.price-circle span {
  color: currentColor;
  font-weight: 700;
}
.price-circle small {
  color: currentColor;
  font-size: 0.7em;
  line-height: 100%;
}
</style>
