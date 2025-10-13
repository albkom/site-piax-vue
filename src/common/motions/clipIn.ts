import { animate } from "motion";

export async function clipIn(id: string, duration = 0.6) {
  const element = document.querySelector(id);
  if (element)
    return await animate(
      element,
      { clipPath: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)'] },
      { duration: duration, ease: 'easeOut' },
    );
}
