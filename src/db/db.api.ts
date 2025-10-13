import { delay } from '@/common/utils/utils'
import type { Benchmark } from '@/models/model.benchmark'
import type { Price } from '@/models/model.price'
import type { Recipe, Author } from '@/models/model.recipe'

import AUTHORS from './tables/table.authors.json'
import RECIPES from './tables/table.recipes.json'
import BENCHMARKS from './tables/table.benchmark.json'
import PRICES from './tables/table.prices.json'
import SUGGESTED from './tables/table.suggested.json'

const db: unknown = null

export async function connect() {
  await delay(200)
}

export async function getPrices(): Promise<Price[]> {
  return PRICES
}
export async function getPriceSuggested(): Promise<Price> {
  return SUGGESTED[0]
}
export async function getPriceHomemade(): Promise<Price> {
  return SUGGESTED[1]
}

export async function getBenchmarks(): Promise<Benchmark[]> {
  return BENCHMARKS
}

export async function getRecipes(): Promise<Recipe[]> {
  await delay(100)
  // const matchesCol = collection(db, 'matches')
  // const matchSnapshot = await getDocs(matchesCol)
  // const matchList: MatchDocument<Game>[] = matchSnapshot.docs.map((doc) => {
  //   const match: MatchDocument<Game> = doc.data() as MatchDocument<Game>
  //   match.id = doc.id

  //   return match
  // })

  return RECIPES as Recipe[]
}

export async function getAuthors(): Promise<Author[]> {
  await delay(100)
  return AUTHORS
}
