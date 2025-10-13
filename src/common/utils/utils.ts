export async function delay(time: number) {
  return new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, time)
  })
}

export type Dictionary = { [index: string]: string }

export function generateRandomColor() {
  // Generate a random hue (0-360)
  const hue = Math.floor(Math.random() * 360)
  // Set saturation to 100% for vibrant colors
  const saturation = 30
  // Set lightness to a high value (60-80%) to ensure good contrast with black text
  const lightness = Math.floor(Math.random() * 20) + 60

  // Construct the HSL color string
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`

  return color
}

export function logSuccess(message: string) {
  console.log(`%c\u2714 ${message}`, 'color: teal; font-weight: bold;')
}
export function logWarning(message: string) {
  console.log(`%c\u26A0 ${message}`, 'color: orange; font-weight: bold;')
}
export function logTaskStart(message: string, inputs?: unknown[]) {
  console.log(`%c\u2699 ${message}\n${inputs?.join('\n')}`, 'color: lightblue; font-weight: bold;')
}
export function logTaskEnd(message: string, outputs?: unknown[]) {
  console.log(`%c✦ ${message}\n${outputs?.join('\n')}`, 'color: white; font-weight: bold;')
}

export function extractData(obj: any) {
  return JSON.parse(JSON.stringify(obj))
}
export function compareData(ref: any, target: any) {
  return JSON.stringify(ref) == JSON.stringify(target)
}

/**
 * Mixes two hex colors based on a given weight (percentage).
 * @param color1 - The first color in hex format (e.g., "#000000" for black).
 * @param color2 - The second color in hex format (e.g., "#ff0000" for red).
 * @param weight - The weight of `color1` as a percentage (0 to 100).
 *                 0% gives full `color2`, and 100% gives full `color1`.
 * @returns A new hex color representing the mixed color.
 */
export function mix(color1: string, color2: string, weight: number): string {
  // Ensure weight is between 0 and 100
  const w = Math.min(Math.max(weight, 0), 100) / 100

  // Parse hex color strings to RGB values
  const c1 = hexToRgb(color1)
  const c2 = hexToRgb(color2)

  if (!c1 || !c2) throw new Error('Invalid color format')

  // Calculate mixed RGB values
  const r = Math.round(c1.r * w + c2.r * (1 - w))
  const g = Math.round(c1.g * w + c2.g * (1 - w))
  const b = Math.round(c1.b * w + c2.b * (1 - w))

  // Convert mixed RGB back to hex
  return rgbToHex(r, g, b)
}

/**
 * Converts a hex color string to an RGB object.
 * @param hex - The hex color string (e.g., "#ff0000").
 * @returns An object with r, g, and b properties, or null if the hex is invalid.
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  // Remove "#" if present
  hex = hex.replace(/^#/, '')

  // Parse the hex color
  const bigint = parseInt(hex, 16)
  if (hex.length === 6) {
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255
    }
  }

  // Return null for invalid hex
  return null
}

/**
 * Converts RGB values to a hex color string.
 * @param r - The red component (0-255).
 * @param g - The green component (0-255).
 * @param b - The blue component (0-255).
 * @returns A hex color string.
 */
function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase()
  )
}

/**
 * Adjusts the alpha of a hex color by a specified amount.
 * @param color - The base color in hex format (e.g., "#ff0000").
 * @param alphaAdjust - The amount to adjust the alpha by (e.g., -0.1 to reduce).
 *                       Alpha values are between 0 and 1.
 * @returns A new RGBA color string with the adjusted alpha.
 */
export function transparentize(color: string, alphaAdjust: number): string {
  // Convert hex to RGB
  const rgb = hexToRgb(color)
  if (!rgb) throw new Error('Invalid color format')

  // Define the initial alpha (fully opaque if no transparency specified)
  const initialAlpha: number = 1

  // Adjust the alpha, ensuring it remains between 0 and 1
  const newAlpha = Math.min(Math.max(initialAlpha + alphaAdjust, 0), 1)

  // Return the RGBA string with the adjusted alpha
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${newAlpha})`
}

export function fibonacciAtIndex(n: number): number {
  if (n < 0) throw new Error('Index must be a non-negative integer.')
  if (n === 0) return 0
  if (n === 1) return 1

  let a = 0,
    b = 1
  for (let i = 2; i <= n; i++) {
    const next = a + b
    a = b
    b = next
  }
  return b
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function formatDateTime(date: string) {
  return new Date(date).toLocaleString('it-IT', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })
}
