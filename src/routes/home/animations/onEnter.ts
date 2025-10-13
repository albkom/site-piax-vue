import { slideInFromBottom } from '@/common/motions'
import { delay } from '@/common/utils/utils'
import { animate, inView, scroll } from 'motion'

export async function onEnter() {
  await Promise.all(
    Array.from(document.querySelectorAll('#hero-logo')).map(
      (el, i) =>
        animate(
          el,
          {
            opacity: [0, 1, 1],
            transform: [
              'translate(-50%, -100%) scale(200%)',
              'translate(-50%, -100%) scale(200%)',
              'translateY(0)',
            ],
          },
          { duration: 0.6, ease: 'linear' },
        ).finished,
    ),
  )

  await Promise.all(
    Array.from(document.querySelectorAll('#image-hero')).map(
      (el, i) =>
        animate(
          el,
          {
            opacity: [0, 1],
            // transform: ['translateY(+20vh)', 'translateY(0)'],
          },
          { duration: 0.3, ease: 'linear' },
        ).finished,
    ),
  )

  const menuIcon = document.getElementById('menu-icon')
  const heroBackground = document.getElementById('section-home-hero')
  const homeTrigger = document.getElementById('section-bagni')
  const homeOverlay = document.getElementById('home-overlay')

  if (menuIcon && heroBackground && homeTrigger && homeOverlay) {
    scroll(
      animate(menuIcon, {
        opacity: [0, 0, 1],
      }),
      {
        axis: 'y',
        target: homeTrigger,
        offset: ['start 90%', 'start 5%', 'start 0%'],
      },
    )
  }

  if (homeOverlay && homeTrigger)
    scroll(
      animate(homeOverlay, {
        opacity: [0, 0, 1],
      }),
      {
        axis: 'y',
        target: homeTrigger,
        offset: ['start 90%', 'start 50%'],
      },
    )

  document.querySelectorAll('#hero-title').forEach((el, i) => {
    animate(
      el,
      {
        opacity: [0, 1],
        transform: ['translateX(+100vw)', 'translateX(0)'],
      },
      { duration: 0.2, ease: 'easeOut' },
    )
  })

  document.querySelectorAll('#home-logo').forEach((el) => {
    scroll(
      animate(el, {
        opacity: [1, 0.5],
        transform: ['scale(1)', 'scale(0.5)', 'scale(0.5)'],
        // position: ['relative', 'fixed'],
        // top: ['auto', '0']
      }),
      {
        // target: el as HTMLElement,
        offset: ['start 0%', 'start 100vh'],
      },
    )
  })

  document.querySelectorAll('.image-background').forEach((el) => {
    scroll(
      animate(el, {
        // opacity: [0, 1],
        // transform: ['translateY(0px)', 'translateY(-30vh)'],
      }),
      {
        target: el as HTMLElement,
        offset: ['start 100%', 'start 0%'],
      },
    )
  })

  document.querySelectorAll('.sliding-image').forEach((el) => {
    scroll(
      animate(el, {
        // opacity: [0, 1],
        transform: ['translateY(+10vh)', 'translateY(0)'],
      }),
      {
        target: el as HTMLElement,
        offset: ['start 100%', 'start 0%'],
      },
    )
  })
}
