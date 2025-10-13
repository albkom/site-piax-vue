// import { scroll } from 'motion'
import { onMounted, onBeforeUnmount, ref } from 'vue'

export let outroAnimation: () => Promise<void> = async () => {}

export function usePage(onEnter: () => Promise<void>, onExit: () => Promise<void>) {
  if (typeof onEnter !== 'function') {
    throw new Error('onEnter must be a function.')
  }
  if (typeof onExit !== 'function') {
    throw new Error('onExit must be a function.')
  }

  function onScroll(handler: (p: number) => void) {
    // scroll((progress: number) => {
    //   // console.log(progress)
    //   handler(Math.round(progress * 100))
    // })
  }

  onMounted(() => {
    // scroll((progress: number) => {
    //   onScroll(progress)
    // })

    // Entering animation
    onEnter()

    // Loads Outro animation
    outroAnimation = onExit
  })

  onBeforeUnmount(() => {
    onExit()
  })

  return {
    onScroll,
  }
}
