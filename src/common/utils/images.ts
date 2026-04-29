export function getImageUrl(name: string, ext?: string) {
  const resolvedExt = ext ?? 'webp'
  if (name.endsWith(`.${resolvedExt}`)) {
    console.log(`Getting image URL for ${name} with extension ${resolvedExt}`)
    return `/img/${name}`
  }
  return `/img/${name}.${resolvedExt}`
}

export function isPortrait(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.innerWidth <= 769
  )
}
