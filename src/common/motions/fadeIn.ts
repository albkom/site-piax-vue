import { animate } from "motion";

export async function fadeIn(id: string, duration = 0.6) {
  const element = document.querySelector(id);
  if (element)
    return await animate(
      element,
      {
        opacity: [0, 1],
      },
      { duration: duration, ease: 'easeOut' },
    );
}
