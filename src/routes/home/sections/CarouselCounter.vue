<script setup lang="ts">
defineProps<{
	count: number;
}>()
const index = defineModel<number>('index', { required: true })
</script>

<template>
	<div class="flx-x row gap-m pad-s">
	        <div
	          class="badge pad-s back-highlight"
	          v-for="i in count"
	          :key="i"
	          :class="{ 'op-03': i - 1 != index }"
	        ></div>
	      </div>
</template>
