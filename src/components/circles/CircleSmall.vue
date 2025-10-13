<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
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
    <small>{{ title }}</small>
    <span>{{ value }}</span>
    <small>{{ unit }}</small>
  </div>
</template>

<style scoped>
.price-circle {
  min-width: 3rem;
  width: 3rem;
  max-width: 3rem;
  aspect-ratio: 1;
}
.price-circle span {
  font-weight: 700;
}
.price-circle small {
  font-size: 0.7em;
  line-height: 100%;
}
</style>
