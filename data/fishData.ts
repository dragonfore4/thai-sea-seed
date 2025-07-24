import { avgAge, avgDepthLevel, avgLength, avgWeight, description, fishImagesUrl, fishNames, habitat, orderNames, scientificNames } from "./variable";

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
  imageUrl:  fishImagesUrl.find(url => url.includes(name.replaceAll(" ","-").toLowerCase())) ?? "https://example.com/default-image.jpg",
  weight: avgWeight[i] ?? "Undetected",
  depthLevel: avgDepthLevel[i] ?? "Undetected",
}))



// Write fishData to text file
// import { writeFileSync } from 'fs';

// const filePath = "fishData_output.txt"
// const fishDataString = JSON.stringify(fishData, null, 2);
// writeFileSync(filePath, fishDataString);
// console.log(`Fish data written to ${filePath}`);
// console.log(`Total fish records: ${fishData.length}`);



let count = 0;

async function checkFishImageUrls() {
  for (const fish of fishData) {
    const url = fish.imageUrl;
    try {
      const res = await fetch(url, { method: "HEAD" }); // HEAD = faster than full GET
      if (!res.ok) {
        console.error(`❌ ${fish.name}: Image fetch failed (${res.status} ${res.statusText})`);
        throw new Error(`Image URL for ${fish.name} is accessible, but this is a test failure.`);
      } else {
        console.log(`✅ ${fish.name}: Image accessible`);
      }
    } catch (error) {
      console.error(`🚨 ${fish.name}: Fetch error`, error);
        process.exit(1); // 💥 exit script immediately

    } finally {
      count++;
      console.log(`Checked ${count}/${fishData.length} images`);
    }
  }
}

// checkFishImageUrls()