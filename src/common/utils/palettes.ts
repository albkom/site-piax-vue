import type { AppPalette } from "../base/AppPalette";

export type Palettes = { [index: string]: AppPalette }

export const palettes: Palettes = {
  emerald: {
    dominant: '#0BDA51',
    complement: '#f25822',
    action: '#483d8b',
    highlight: '#023012',
    text: '#121212',
    danger: '#0f9dd5'
  },
  cobalt: {
    dominant: '#0047AB',
    complement: '#f25822',
    action: '#f5b041',
    highlight: '#a3e4d7',
    text: '#fafafa',
    danger: '#0f9dd5'
  },
  alabaster: {
    dominant: '#fafaf7',
    complement: '#0a0a0a',
    action: '#d00a0c',
    highlight: '#038a3a',
    text: '#1a1a1a',
    danger: '#0f9dd5'
  },
};
