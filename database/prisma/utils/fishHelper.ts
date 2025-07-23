import type { Fish } from "../../../data/fishData"
export function findFishByFamily(fishes: Fish[], families: any[], familyName: string) {
  const familyId = families.find((f: { name: string }) => f.name === familyName)?.id
  return fishes.filter((fish: Fish) => fish.familyId === familyId)
}

export function findFishByPattern(fishes: any[], pattern: RegExp) {
  return fishes.filter((fish: { name: string }) => pattern.test(fish.name))
}
