import { animate } from "motion";

export async function fadeOut(element: HTMLElement, duration: number = 0.2) {
  await animate(
    element,
    {
      opacity: [1, 0],
      offset: ['start end'],
    },
    { ease: 'linear', duration: 0.6 },
  );
}
