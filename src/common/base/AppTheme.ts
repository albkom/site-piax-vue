import type { AppPalette } from './AppPalette'

export function applyTheme(palette: AppPalette) {
  const r: HTMLElement | null = document.querySelector(':root')
  if (r != null) {
    r.style.setProperty('--action', palette.action)
    r.style.setProperty('--highlight', palette.highlight)
    r.style.setProperty('--text', palette.text)
    r.style.setProperty('--danger', palette.danger)

    r.style.setProperty('--dominant', palette.dominant)
    r.style.setProperty('--complement', palette.complement)
  }
}
