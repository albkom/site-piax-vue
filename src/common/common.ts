import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import type { AppSettings } from './base/AppSettings'
import { applyTheme } from './base/AppTheme'

import { delay, logTaskEnd, logTaskStart, type Dictionary } from '@/common/utils/utils'

import { palettes, type Palettes } from './utils/palettes'
import AppConfig from '../default.settings'
import { outroAnimation } from './layout/usePage'
import { useWaitingStore } from './stores/waitingStore'

export const useCommonStore = defineStore('common', () => {
  // let outroAnimation: () => Promise<void> = async () => {}
  const router = useRouter()
  const settings = ref<AppSettings>(AppConfig.settings)

  const isBusy = ref(false)

  const { showWait, hideWait } = useWaitingStore()

  // App initialization
  async function init(callback: () => Promise<void>) {
    console.warn('App Initialization')
    if (callback) await callback()
    console.warn('App is Ready')
  }

  const themes = ref<Palettes>(palettes)
  watch(
    () => settings,
    (newValue) => {
      // Note: `newValue` will be equal to `oldValue` here
      applyTheme(settings.value.palette)
    },
    { deep: true },
  )

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
    console.log(id)
    const section = document.getElementById(id)
    if (!section) return
    const rect = section.getBoundingClientRect()
    const top = rect.top + window.scrollY
    const height = window.innerHeight
    window.scrollTo({ top: top, behavior: 'smooth' })
    hideMenu()
  }

  function hideMenu() {
    console.log("Hiding menu")
  }
  /**
   * Load and apply the theme based on the given theme ID
   * @param themeId The ID of the theme to load
   * @returns The loaded palette
   */
  function loadTheme(themeId: string) {
    let palette = palettes[themeId]
    if (!palette) {
      console.error(`No palette ${themeId} found`)
      palette = palettes['alabaster']
    }
    applyTheme(palette)

    return palette
  }

  async function switchTheme(themeId: string) {
    logTaskStart('Switching theme', [themeId])
    isBusy.value = true

    const palette = loadTheme(themeId)

    isBusy.value = false

    return
  }

  function getImageUrl(name: string, ext?: string) {
    // For images in the public folder, use the base path directly
    if (name.endsWith(`.${ext}`)) {
      return `/FOT/${name}`
    }
    return `/FOT/${name}.${ext ? ext : 'jpg'}`
  }

  return {
    init,
    themes,
    isBusy,
    goTo,
    scrollToPosition,
    switchTheme,
    settings,
    getImageUrl,
  }
})
