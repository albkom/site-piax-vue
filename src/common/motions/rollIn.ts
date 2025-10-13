import { animate } from "motion";

export async function rollIn(id: string, duration = 0.6, pos: [string, string] = ['-100%', '100%']) {
  const element = document.querySelector(id);
  if (element)
    return await animate(
      element,
      {
        transform: [`translateX(${pos[0]}) rotateZ(0deg)`, `translateX(${pos[1]}) rotateZ(360deg)`],
      },
      { duration: duration, ease: 'easeOut' },
    );
}
