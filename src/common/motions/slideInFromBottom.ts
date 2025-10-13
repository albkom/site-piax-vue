import { animate } from "motion";

export async function slideInFromBottom(id: string, duration = 0.6) {
  const element = document.querySelector(id);
  if (element)
    return await animate(
      element,
      {
        opacity: [0, 1],
        transform: [`translateY(+100vh)`, `translateY(0)`],
      },
      { duration: duration, ease: 'easeOut', type: 'spring' },
    );
}
