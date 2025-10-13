import { animate } from "motion"

export async function onEnter() {
  await Promise.all(
    Array.from(document.querySelectorAll('#h1-about')).map((h1) =>
      animate(
        h1,
        {
          transform: ['translateX(-100%)', 'translateX(0%)'],
          offset: ['start end'],
        },
        { ease: 'linear' },
      )
    )
  )
  await Promise.all(
    Array.from(document.querySelectorAll('#ingredients-message')).map((h1) =>
      animate(
        h1,
        {
          transform: ['translateX(-100%)', 'translateX(0%)'],
          offset: ['start end'],
        },
        { ease: 'linear' },
      )
    )
  )
}
