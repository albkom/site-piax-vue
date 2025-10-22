export function getImageUrl(name: string, ext?: string) {
  // For images in the public folder, use the base path directly
  if (name.endsWith(`.${ext}`)) {
    return `/img/${name}`
  }
  return `/img/${name}.${ext ? ext : 'jpg'}`
}

export function isPortrait(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.innerWidth <= 769
  )
}
