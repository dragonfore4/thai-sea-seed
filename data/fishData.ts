import { avgAge, avgDepthLevel, avgLength, avgWeight, description, fishNames, habitat, orderNames, scientificNames } from "./variable";

export interface Fish {
  [x: string]: any;
  id?: string;
  name: string;
  scientificName?: string;
  description?: string;
  imageUrl?: string;
  habitat?: string;
  length?: string;
  age?: string;
  depthLevel?: string;
  weight?: string;
  familyId?: string;
  family?: string;
  rarityId?: string;
}

export const fishData: Fish[] = fishNames.map((name, i) => ({
  name,
  scientificName: scientificNames[i] ?? "Unknown Scientific Name",
  description: description[i] ?? "No description available",
  family: orderNames[i] ?? "Unknown Family",
  habitat: habitat[i] ?? "Unknown Habitat", // Placeholder, will be updated from habitat.txt
  length: avgLength[i] ?? "Undetected",
  age: avgAge[i] ?? "Undetected",
  weight: avgWeight[i] ?? "Undetected",
  depthLevel: avgDepthLevel[i] ?? "Undetected",
}))

// console.log(fishData)