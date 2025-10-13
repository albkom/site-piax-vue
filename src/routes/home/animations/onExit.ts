import { fadeOut } from "@/common/motions"

export async function onExit() {
  await Promise.all(
    Array.from(document.querySelectorAll('main')).map(async (main) => {
      await fadeOut(main, 0.6)
    }),
  )
}
