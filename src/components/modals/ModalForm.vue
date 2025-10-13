<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  canClose: Boolean,
})
const emit = defineEmits(['confirm', 'cancel'])

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
  <div class="modal" v-if="isVisible">
    <div class="h-10vh"></div>
    <form class="font-header card gap-m" @submit.prevent="confirm">
      <div class="flx-x right" v-if="canClose">
        <ButtonClose type="button" @click="cancel" />
      </div>
      <h2 v-if="title != ''">{{ title }}</h2>
      <slot></slot>
    </form>
  </div>
</template>
