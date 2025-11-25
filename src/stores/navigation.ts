import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { logTaskStart} from '@/common/utils/utils'

import { useMenuStore } from '@/stores/menu'

export const useNavigationStore = defineStore('navigation', () => {
  // let outroAnimation: () => Promise<void> = async () => {}
  const router = useRouter()

  const isBusy = ref(false)

  const { hideMenu } = useMenuStore()

  // App initialization
  async function init(callback: () => Promise<void>) {
    console.warn('App Initialization')
    if (callback) await callback()
    console.warn('App is Ready')
  }

  /**
   * Navigate to the given route name
   * @param route name of the route (-1 for going back)
   */
  async function goTo(
    route: string | { name: string; hash: string },
    callback?: () => Promise<void>,
    skipAnimation: boolean = false,
  ) {
    logTaskStart(`Transitioning to`, [route])
    isBusy.value = true
    // Page outro animation
    if (skipAnimation) {
      // Page before outro callback
      if (callback) await callback()

      if (route == '-1') router.go(-1)
      else router.push(route)

      window.scrollTo({ top: 0, behavior: 'auto' })
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })

      // Page before outro callback
      if (callback) await callback()

      if (route == '-1') router.go(-1)
      else router.push(route)
    }
    isBusy.value = false
  }

  function scrollToPosition(id: string) {
    const section = document.getElementById(id)
    if (!section) return
    const rect = section.getBoundingClientRect()
    const top = rect.top + window.scrollY
    window.scrollTo({ top: top, behavior: 'smooth' })
    hideMenu()
  }

  const areTextsHidden = ref(false);
  function toggleTexts() {
    areTextsHidden.value = !areTextsHidden.value;
  }

  return {
    init,
    isBusy,
    goTo,
    scrollToPosition,
    areTextsHidden,
    toggleTexts,
  }
})
