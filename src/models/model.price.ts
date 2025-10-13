export interface Price {
  name: string
  value: number
  unit: string
}

export interface PriceRange {
  value: [number, number]
  unit: string
}
