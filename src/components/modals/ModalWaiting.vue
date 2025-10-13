<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

defineProps({
  canClose: Boolean,
})
const emit = defineEmits(['confirm', 'cancel'])

import { useWaitingStore } from '@/common/stores/waitingStore'
const { isWaiting, message, progress, error } = storeToRefs(useWaitingStore())

const isVisible = ref(false)
const title = ref<String>('')
function show(header?: string) {
  isVisible.value = true
  title.value = header ? header : ''
}
function hide() {
  isVisible.value = false
}
function confirm() {
  emit('confirm')
  hide()
}
function cancel() {
  emit('cancel')
  hide()
}
defineExpose({ show, hide })
</script>

<template>
  <div class="modal-waiting" v-if="isWaiting">
    <div class="h-10vh"></div>
    <div class="font-header card flx-x pad gap-s">
      <h2 v-if="title != ''">{{ title }}</h2>
      <p class="font-header" :class="error ? 'highlight' : ''">{{ message }}</p>
      <div class="progress-bar" v-if="progress != undefined">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  /* margin: 20px auto; */
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.progress-bar {
  width: 100%;
  background-color: var(--action-glass);
  border-radius: 5px;
  overflow: hidden;
  /* margin-top: 10px; */
}

.progress {
  height: 10px;
  background-color: var(--action);
  width: 0;
  transition: width 0.5s;
}
</style>
