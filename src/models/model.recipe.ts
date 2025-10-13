export interface Ingredient {
  name: string
  quantity: string
  unit: string
  price: string
  priceUnit: string
  suggestedBrand?: string
}

export interface Image {
  src: string
  alt: string
}

export type Evaluation = 1 | 2 | 3 | 4 | 5

export interface RecipeDetails {
  priceRange: Evaluation
  effort: Evaluation
  minutes: number
  persons: number
}

export interface RecipeSection {
  title: string
  contents: (string | Image)[]
}

export interface Recipe {
  name: string
  title: string
  authorId: string
  color: string
  details: RecipeDetails
  shortDescription: string[]
  longDescription: string[]
  ingredients: Ingredient[]
  sections: RecipeSection[]
  recap: string[]
}

export interface Author {
  name: string
  id: string
}
