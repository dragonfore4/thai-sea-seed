import { fishData } from '../../data/fishData'
import { setFishFamilies, fishNamesThai } from '../../data/variable'
import { PrismaClient } from '../generated/client'

const prisma = new PrismaClient()

async function main() {
  const userId = '8w8qF4dldpZe5lHgdem1TDsIP6WcLE7y'

  console.log('🌱 Starting database seeding...')

  // Clear existing data
  console.log('Clearing existing data...')
  await prisma.userMissionProgress.deleteMany()
  await prisma.userPointHistory.deleteMany()
  await prisma.detectionResult.deleteMany()
  await prisma.detectionHistory.deleteMany()
  await prisma.missionDetailTarget.deleteMany()
  await prisma.mission.deleteMany()
  await prisma.fish.deleteMany()
  await prisma.fishRarity.deleteMany()
  await prisma.fishFamily.deleteMany()

  // Create Fish Families
  console.log('Creating fish families...')
  const families = await Promise.all(
    setFishFamilies.map(familyName =>
      prisma.fishFamily.create({
        data: {
          name: familyName,
          description: `ปลาชนิดนี้เป็นส่วนหนึ่งของอันดับ ${familyName} ซึ่งมีลักษณะทางชีววิทยาและพฤติกรรมที่คล้ายกัน`
        }
      })
    )
  )

  // Create Fish Rarities
  console.log('Creating fish rarities...')
  const rarities = await Promise.all([
    prisma.fishRarity.create({
      data: {
        name: 'common'
      }
    }),
    prisma.fishRarity.create({
      data: {
        name: 'rare'
      }
    }),
    prisma.fishRarity.create({
      data: {
        name: 'endangered'
      }
    })
  ])

  // Create Fishes
  console.log('Creating fishes...')
  const fishes = await Promise.all(
    fishData.map((fish, index) => {
      // Assign rarity based on conservation status mentioned in description
      let rarityName = 'common';
      const description = fish.description.toLowerCase();
      if (description.includes('endangered') || description.includes('critically endangered')) {
        rarityName = 'endangered';
      } else if (description.includes('vulnerable') || description.includes('near threatened') || description.includes('threatened')) {
        rarityName = 'rare';
      }

      const rarity = rarities.find(r => r.name === rarityName) || rarities[0];
      const family = families.find(fam => fam.name === fish.family);
      const thaiName = fishNamesThai[index] || `ปลา${fish.name}`;

      // Generate realistic image URLs based on fish type
      const imageUrls = [
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', 
        'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800',
        'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800',
        'https://images.unsplash.com/photo-1591451155113-f42b16c68ad6?w=800'
      ];
      const imageUrl = imageUrls[index % imageUrls.length];

      return prisma.fish.create({
        data: {
          name: fish.name,
          scientificName: fish.scientificName,
          description: fish.description,
          habitat: fish.habitat,
          length: fish.length,
          age: fish.age,
          weight: fish.weight,
          depthLevel: fish.depth,
          imageUrl: imageUrl,
          familyId: family?.id || null,
          rarityId: rarity.id
        }
      })
    })
  )

  // Create Missions based on fish families and specific criteria
  console.log('Creating missions...')
  const missions = await Promise.all([
    // Mission 1: Orectolobiformes (Carpet sharks, whale sharks)
    prisma.mission.create({
      data: {
        title: 'นักล่าปลา Orectolobiformes',
        point: 50,
        description: 'ค้นพบปลา Orectolobiformes 3 ชนิด (ฉลามพรม, ฉลามวาฬ และฉลามไผ่)'
      }
    }),
    // Mission 2: Tetraodontiformes (Pufferfish, triggerfish, boxfish)
    prisma.mission.create({
      data: {
        title: 'นักล่าปลา Tetraodontiformes',
        point: 100,
        description: 'ค้นพบปลา Tetraodontiformes 5 ชนิด (ปลาปักเป้า, ปลาสินสมุทร, ปลากล่อง)'
      }
    }),
    // Mission 3: Carcharhiniformes (Reef sharks)
    prisma.mission.create({
      data: {
        title: 'ผู้เชี่ยวชาญปลา Carcharhiniformes',
        point: 150,
        description: 'ค้นพบปลา Carcharhiniformes 3 ชนิด (ฉลามครีบดำ, ฉลามครีบขาว, ฉลามเสือดาว)'
      }
    }),
    // Mission 4: Colorful reef fish
    prisma.mission.create({
      data: {
        title: 'นักถ่ายภาพปลาสวยงาม',
        point: 75,
        description: 'ค้นพบปลาการ์ตูน, ปลาผีเสื้อ และปลาหมอทะเล'
      }
    }),
    // Mission 5: Master explorer
    prisma.mission.create({
      data: {
        title: 'นักสำรวจท้องทะเล',
        point: 200,
        description: 'ค้นพบปลาทุกชนิดในระบบ (รวม 85 ชนิด)'
      }
    }),
    // Mission 6: Dangerous predators
    prisma.mission.create({
      data: {
        title: 'นักล่าผู้กล้าหาญ',
        point: 120,
        description: 'ค้นพบปลาที่มีพิษหรืออันตราย 3 ชนิด'
      }
    }),
    // Mission 7: Ray specialists
    prisma.mission.create({
      data: {
        title: 'ผู้เชี่ยวชาญปลากระเบน',
        point: 80,
        description: 'ค้นพบปลากระเบนทุกชนิด (กระเบนมันตา, กระเบนนกอินทรี และอื่นๆ)'
      }
    }),
    // Mission 8: Endemic species
    prisma.mission.create({
      data: {
        title: 'นักอนุรักษ์พันธุ์',
        point: 250,
        description: 'ค้นพบปลาหายากและใกล้สูญพันธุ์ทุกชนิด'
      }
    })
  ])

  // Create Mission Detail Targets
  console.log('Creating mission detail targets...')
  
  // Helper function to find fish by family/order
  const findFishByFamily = (familyName: string) => 
    fishes.filter(fish => fish.familyId === families.find(f => f.name === familyName)?.id)
  
  // Helper function to find fish by name pattern
  const findFishByPattern = (pattern: RegExp) =>
    fishes.filter(fish => pattern.test(fish.name))

  const missionTargets: Promise<any>[] = []

  // Mission 1: Orectolobiformes (3 species)
  const orectolobiformes = findFishByFamily('Orectolobiformes').slice(0, 3)
  orectolobiformes.forEach(fish => {
    missionTargets.push(
      prisma.missionDetailTarget.create({
        data: {
          amount: 1,
          missionId: missions[0].id,
          fishId: fish.id
        }
      })
    )
  })

  // Mission 2: Tetraodontiformes (5 species)
  const tetraodontiformes = findFishByFamily('Tetraodontiformes').slice(0, 5)
  tetraodontiformes.forEach(fish => {
    missionTargets.push(
      prisma.missionDetailTarget.create({
        data: {
          amount: 1,
          missionId: missions[1].id,
          fishId: fish.id
        }
      })
    )
  })

  // Mission 3: Carcharhiniformes (3 species)
  const carcharhiniformes = findFishByFamily('Carcharhiniformes').slice(0, 3)
  carcharhiniformes.forEach(fish => {
    missionTargets.push(
      prisma.missionDetailTarget.create({
        data: {
          amount: 1,
          missionId: missions[2].id,
          fishId: fish.id
        }
      })
    )
  })

  // Mission 4: Colorful reef fish (clownfish, butterflyfish, surgeonfish)
  const colorfulFish = [
    ...findFishByPattern(/clown|anemone/i),
    ...findFishByPattern(/butterfly/i),
    ...findFishByPattern(/surgeon/i),
    ...findFishByPattern(/angel/i)
  ].slice(0, 5)
  
  colorfulFish.forEach(fish => {
    missionTargets.push(
      prisma.missionDetailTarget.create({
        data: {
          amount: 1,
          missionId: missions[3].id,
          fishId: fish.id
        }
      })
    )
  })

  // Mission 5: All fish species
  fishes.forEach(fish => {
    missionTargets.push(
      prisma.missionDetailTarget.create({
        data: {
          amount: 1,
          missionId: missions[4].id,
          fishId: fish.id
        }
      })
    )
  })

  // Mission 6: Dangerous/venomous fish
  const dangerousFish = [
    ...findFishByPattern(/lion|stone|scorpion/i),
    ...findFishByPattern(/ray|shark/i)
  ].slice(0, 3)
  
  dangerousFish.forEach(fish => {
    missionTargets.push(
      prisma.missionDetailTarget.create({
        data: {
          amount: 1,
          missionId: missions[5].id,
          fishId: fish.id
        }
      })
    )
  })

  // Mission 7: All ray species
  const rays = findFishByFamily('Myliobatiformes')
  rays.forEach(fish => {
    missionTargets.push(
      prisma.missionDetailTarget.create({
        data: {
          amount: 1,
          missionId: missions[6].id,
          fishId: fish.id
        }
      })
    )
  })

  // Mission 8: Endangered species
  const endangeredFish = fishes.filter(fish => 
    fish.rarityId === rarities.find(r => r.name === 'endangered')?.id
  )
  
  endangeredFish.forEach(fish => {
    missionTargets.push(
      prisma.missionDetailTarget.create({
        data: {
          amount: 1,
          missionId: missions[7].id,
          fishId: fish.id
        }
      })
    )
  })

  // Execute all mission target creations
  await Promise.all(missionTargets)

  // Create some sample detection histories and results
  console.log('Creating sample detection histories...')
  const detectionHistories = await Promise.all([
    // Sample detection 1: Successful detection
    prisma.detectionHistory.create({
      data: {
        imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        claimToken: 'sample-claim-token-001',
        isClaimed: true,
        userId: userId
      }
    }),
    // Sample detection 2: Unclaimed detection
    prisma.detectionHistory.create({
      data: {
        imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        claimToken: 'sample-claim-token-002',
        isClaimed: false,
        userId: userId
      }
    }),
    // Sample detection 3: Recent detection
    prisma.detectionHistory.create({
      data: {
        imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800',
        claimToken: 'sample-claim-token-003',
        isClaimed: true,
        userId: userId
      }
    })
  ])

  // Create detection results for sample detections
  console.log('Creating detection results...')
  await Promise.all([
    // High confidence detection - clownfish
    prisma.detectionResult.create({
      data: {
        confidence: 0.95,
        detectionHistoryId: detectionHistories[0].id,
        fishId: fishes.find(f => f.name.includes('clown') || f.name.includes('anemone'))?.id || fishes[0].id
      }
    }),
    // Medium confidence detection - shark
    prisma.detectionResult.create({
      data: {
        confidence: 0.78,
        detectionHistoryId: detectionHistories[1].id,
        fishId: fishes.find(f => f.name.toLowerCase().includes('shark'))?.id || fishes[1].id
      }
    }),
    // High confidence detection - butterflyfish
    prisma.detectionResult.create({
      data: {
        confidence: 0.89,
        detectionHistoryId: detectionHistories[2].id,
        fishId: fishes.find(f => f.name.toLowerCase().includes('butterfly'))?.id || fishes[2].id
      }
    })
  ])

  // Create user point history for claimed detections
  console.log('Creating user point history...')
  await Promise.all([
    // Points from first detection
    prisma.userPointHistory.create({
      data: {
        point: 15,
        userId: userId,
        detectionHistoryId: detectionHistories[0].id,
        fishId: fishes.find(f => f.name.includes('clown') || f.name.includes('anemone'))?.id || fishes[0].id
      }
    }),
    // Points from third detection
    prisma.userPointHistory.create({
      data: {
        point: 12,
        userId: userId,
        detectionHistoryId: detectionHistories[2].id,
        fishId: fishes.find(f => f.name.toLowerCase().includes('butterfly'))?.id || fishes[2].id
      }
    }),
    // Mission completion bonus
    prisma.userPointHistory.create({
      data: {
        point: 50,
        userId: userId,
        missionId: missions[0].id,
        fishId: null
      }
    })
  ])

  // Create sample user mission progress
  console.log('Creating sample user mission progress...')
  const sampleProgressData = []
  
  // Progress for Mission 1 (Orectolobiformes) - partially completed
  orectolobiformes.slice(0, 2).forEach(fish => {
    sampleProgressData.push(
      prisma.userMissionProgress.create({
        data: {
          isSuccess: true,
          userId: userId,
          missionId: missions[0].id,
          fishId: fish.id
        }
      })
    )
  })

  // Progress for Mission 4 (Colorful fish) - one completed
  if (colorfulFish.length > 0) {
    sampleProgressData.push(
      prisma.userMissionProgress.create({
        data: {
          isSuccess: true,
          userId: userId,
          missionId: missions[3].id,
          fishId: colorfulFish[0].id
        }
      })
    )
  }

  await Promise.all(sampleProgressData)

  // // Create Mission Detail Targets
  // console.log('Creating mission detail targets...')
  // await Promise.all([
  //   // Mission 1: นักสำรวจปลากะพง
  //   prisma.missionDetailTarget.create({
  //     data: {
  //       amount: 1,
  //       missionId: missions[0].id,
  //       fishId: fishes[0].id // ปลากะพงแดง
  //     }
  //   }),
  //   prisma.missionDetailTarget.create({
  //     data: {
  //       amount: 1,
  //       missionId: missions[0].id,
  //       fishId: fishes[5].id // ปลากะพงขาว
  //     }
  //   }),
  //   // Mission 2: นักล่าปลาทูน่า
  //   prisma.missionDetailTarget.create({
  //     data: {
  //       amount: 1,
  //       missionId: missions[1].id,
  //       fishId: fishes[1].id // ปลาทูน่าครีบเหลือง
  //     }
  //   }),
  //   prisma.missionDetailTarget.create({
  //     data: {
  //       amount: 1,
  //       missionId: missions[1].id,
  //       fishId: fishes[6].id // ปลาทูน่าครีบน้ำเงิน
  //     }
  //   }),
  //   // Mission 3: ผู้เชี่ยวชาญปลาฉลาม
  //   prisma.missionDetailTarget.create({
  //     data: {
  //       amount: 1,
  //       missionId: missions[2].id,
  //       fishId: fishes[2].id // ปลาฉลามขาว
  //     }
  //   }),
  //   prisma.missionDetailTarget.create({
  //     data: {
  //       amount: 1,
  //       missionId: missions[2].id,
  //       fishId: fishes[7].id // ปลาฉลามเสือ
  //     }
  //   }),
  //   // Mission 4: นักถ่ายภาพปลาสวยงาม
  //   prisma.missionDetailTarget.create({
  //     data: {
  //       amount: 1,
  //       missionId: missions[3].id,
  //       fishId: fishes[3].id // ปลาการ์ตูนส้มขาว
  //     }
  //   }),
  //   prisma.missionDetailTarget.create({
  //     data: {
  //       amount: 1,
  //       missionId: missions[3].id,
  //       fishId: fishes[4].id // ปลาดาวน้ำเงิน
  //     }
  //   }),
  //   // Mission 5: นักสำรวจท้องทะเล (ทุกชนิด)
  //   ...fishes.map(fish =>
  //     prisma.missionDetailTarget.create({
  //       data: {
  //         amount: 1,
  //         missionId: missions[4].id,
  //         fishId: fish.id
  //       }
  //     })
  //   )
  // ])

  // // Create some sample detection histories and results
  // console.log('Creating sample detection histories...')
  // const detectionHistory = await prisma.detectionHistory.create({
  //   data: {
  //     imageUrl:
  //       'https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg',
  //     claimToken: 'sample-claim-token-123',
  //     isClaimed: true,
  //     userId: userId
  //   }
  // })

  // // Create detection results for the sample detection
  // await prisma.detectionResult.create({
  //   data: {
  //     confidence: 0.95,
  //     detectionHistoryId: detectionHistory.id,
  //     fishId: fishes[0].id // ปลากะพงแดง
  //   }
  // })

  // // Create user point history for the claimed detection
  // await prisma.userPointHistory.create({
  //   data: {
  //     point: 10,
  //     userId: userId,
  //     detectionHistoryId: detectionHistory.id,
  //     fishId: fishes[0].id
  //   }
  // })

  // // Create some user mission progress
  // console.log('Creating sample user mission progress...')
  // await prisma.userMissionProgress.create({
  //   data: {
  //     isSuccess: true,
  //     userId: userId,
  //     missionId: missions[0].id,
  //     fishId: fishes[0].id
  //   }
  // })

  // await prisma.userMissionProgress.create({
  //   data: {
  //     isSuccess: true,
  //     userId: userId,
  //     missionId: missions[3].id,
  //     fishId: fishes[3].id
  //   }
  // })

  console.log('✅ Database seeding completed successfully!')
  console.log(`Created ${families.length} fish families`)
  console.log(`Created ${rarities.length} fish rarities`)
  // console.log(`Created ${fishes.length} fishes`)
  // console.log(`Created ${missions.length} missions`)
  console.log('Created sample detection history and user progress')
}

main()
  .catch(e => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
