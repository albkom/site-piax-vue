// import { animate } from 'motion'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const isOpen = ref(false)

  async function showMenu() {
    console.warn('Showing menu')
    const menu = document.getElementById('menu')
    if (menu) {
      menu.style.display = 'flex'
      menu.style.transform = 'translateY(0%)'
      isOpen.value = true
    }
  }

  async function hideMenu() {
    console.warn('Hiding menu')
    const menu = document.getElementById('menu')
    if (menu) {
      menu.style.display = 'none'
      menu.style.transform = 'translateY(-100%)'
      isOpen.value = false
    }
  }

  function toggleMenu() {
    if (isOpen.value) {
      hideMenu()
    } else {
      showMenu()
    }
  }

  return {
    isOpen,
    showMenu,
    hideMenu,
    toggleMenu
  }
})
