import { defineStore } from 'pinia'
import { ref } from 'vue'
import { delay } from '@/common/utils/utils'

export const useWaitingStore = defineStore('waiting', () => {
  const isWaiting = ref<boolean>(false)

  const message = ref<string>("")
  const progress = ref<number | undefined>(undefined)
  const error = ref<boolean | undefined>(undefined)

  function showWait(msg?: string, prog?: number) {
    isWaiting.value = true
    message.value = msg ? msg : 'Attendi...'
    progress.value = prog
  }

  function updateWait(msg?: string, err?: boolean, prog?: number) {
    message.value = msg ? msg : 'Attendi...'
    progress.value = prog
    error.value = err
    isWaiting.value = true
  }

  async function hideWait(ms?: number) {
    if (ms) await delay(ms)
      isWaiting.value = false
  }

  return {
    isWaiting,
    message,
    error,
    progress,
    showWait,
    updateWait,
    hideWait,
  }
})
