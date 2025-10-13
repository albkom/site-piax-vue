<script setup lang="ts">
defineProps({
  top: {
    type: String,
    default: '-',
  },
  value: {
    type: String,
    default: '?',
  },
  sub: {
    type: String,
    default: '-',
  },
})
</script>

<template>
  <div class="badge-circle flx circle">
    <small>{{ top }}</small>
    <span>{{ value }}</span>
    <small>{{ sub }}</small>
  </div>
</template>

<style scoped>
.badge-circle {
  min-width: 3rem;
  width: 3rem;
  max-width: 3rem;
  // margin: 0.5rem 1rem 0 1rem; // to match the horizontal size of the other circles
  aspect-ratio: 1;
  background-color: var(--highlight);
}
.badge-circle span {
  font-weight: 700;
}
.badge-circle small {
  font-size: 0.5em;
  line-height: 100%;
}
</style>
