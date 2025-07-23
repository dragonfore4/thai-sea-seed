import { fishData } from '../../data/fishData'
import { setFishFamilies, fishNamesThai } from '../../data/variable'
import { PrismaClient } from '../generated/client'

const prisma = new PrismaClient()

async function main() {
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
  await prisma.account.deleteMany()
  await prisma.session.deleteMany()
  await prisma.user.deleteMany()

  // Create Users
  console.log('Creating users...')
  const users = await Promise.all([
    prisma.user.create({
      data: {
        id: '8w8qF4dldpZe5lHgdem1TDsIP6WcLE7y',
        name: 'นักสำรวจทะเล',
        email: 'explorer@thai-sea.com',
        emailVerified: true,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }),
    prisma.user.create({
      data: {
        id: 'diver001_marine_photographer',
        name: 'ช่างภาพใต้น้ำ',
        email: 'photographer@thai-sea.com',
        emailVerified: true,
        image: 'https://images.unsplash.com/photo-1494790108755-2616b332446c?w=150',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }),
    prisma.user.create({
      data: {
        id: 'scientist_marine_bio_expert',
        name: 'นักชีววิทยาทางทะเล',
        email: 'scientist@thai-sea.com',
        emailVerified: true,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }),
    prisma.user.create({
      data: {
        id: 'conservationist_ocean_lover',
        name: 'นักอนุรักษ์ทะเล',
        email: 'conservationist@thai-sea.com',
        emailVerified: true,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }),
    prisma.user.create({
      data: {
        id: 'student_beginner_diver',
        name: 'นักเรียนนักดำน้ำ',
        email: 'student@thai-sea.com',
        emailVerified: true,
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
  ])

  const mainUserId = users[0].id

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
      const description = fish.description?.toLowerCase();
      if (description?.includes('endangered') || description?.includes('critically endangered')) {
        rarityName = 'endangered';
      } else if (description?.includes('vulnerable') || description?.includes('near threatened') || description?.includes('threatened')) {
        rarityName = 'rare';
      }

      const rarity = rarities.find(r => r.name === rarityName) || rarities[0];
      const family = families.find(fam => fam.id === fish.familyId);

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
          depthLevel: fish.depthLevel,
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
    //   prisma.mission.create({
    //     data: {
    //       title: 'นักถ่ายภาพปลาสวยงาม',
    //       point: 75,
    //       description: 'ค้นพบปลาการ์ตูน, ปลาผีเสื้อ และปลาหมอทะเล'
    //     }
    //   }),
    //   // Mission 5: Master explorer
    //   prisma.mission.create({
    //     data: {
    //       title: 'นักสำรวจท้องทะเล',
    //       point: 200,
    //       description: 'ค้นพบปลาทุกชนิดในระบบ (รวม 85 ชนิด)'
    //     }
    //   }),
    //   // Mission 6: Dangerous predators
    //   prisma.mission.create({
    //     data: {
    //       title: 'นักล่าผู้กล้าหาญ',
    //       point: 120,
    //       description: 'ค้นพบปลาที่มีพิษหรืออันตราย 3 ชนิด'
    //     }
    //   }),
    //   // Mission 7: Ray specialists
    //   prisma.mission.create({
    //     data: {
    //       title: 'ผู้เชี่ยวชาญปลากระเบน',
    //       point: 80,
    //       description: 'ค้นพบปลากระเบนทุกชนิด (กระเบนมันตา, กระเบนนกอินทรี และอื่นๆ)'
    //     }
    //   }),
    //   // Mission 8: Endemic species
    //   prisma.mission.create({
    //     data: {
    //       title: 'นักอนุรักษ์พันธุ์',
    //       point: 250,
    //       description: 'ค้นพบปลาหายากและใกล้สูญพันธุ์ทุกชนิด'
    //     }
    //   })
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

  // // Mission 5: All fish species (แค่ตัวอย่าง 10 ตัวแรก แทนที่จะเป็นทุกตัว)
  // fishes.slice(0, 10).forEach(fish => {
  //   missionTargets.push(
  //     prisma.missionDetailTarget.create({
  //       data: {
  //         amount: 1,
  //         missionId: missions[4].id,
  //         fishId: fish.id
  //       }
  //     })
  //   )
  // })

  // // Mission 6: Dangerous/venomous fish
  // const dangerousFish = [
  //   ...findFishByPattern(/lion|stone|scorpion/i),
  //   ...findFishByPattern(/ray|shark/i)
  // ].slice(0, 3)

  // dangerousFish.forEach(fish => {
  //   missionTargets.push(
  //     prisma.missionDetailTarget.create({
  //       data: {
  //         amount: 1,
  //         missionId: missions[5].id,
  //         fishId: fish.id
  //       }
  //     })
  //   )
  // })

  // // Mission 7: All ray species
  // const rays = findFishByFamily('Myliobatiformes')
  // rays.forEach(fish => {
  //   missionTargets.push(
  //     prisma.missionDetailTarget.create({
  //       data: {
  //         amount: 1,
  //         missionId: missions[6].id,
  //         fishId: fish.id
  //       }
  //     })
  //   )
  // })

  // // Mission 8: Endangered species
  // const endangeredFish = fishes.filter(fish =>
  //   fish.rarityId === rarities.find(r => r.name === 'endangered')?.id
  // )

  // endangeredFish.forEach(fish => {
  //   missionTargets.push(
  //     prisma.missionDetailTarget.create({
  //       data: {
  //         amount: 1,
  //         missionId: missions[7].id,
  //         fishId: fish.id
  //       }
  //     })
  //   )
  // })

  // // Execute all mission target creations
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
        userId: mainUserId
      }
    }),
    // Sample detection 2: Unclaimed detection
    prisma.detectionHistory.create({
      data: {
        imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        claimToken: 'sample-claim-token-002',
        isClaimed: false,
        userId: mainUserId
      }
    }),
    // Sample detection 3: Recent detection
    prisma.detectionHistory.create({
      data: {
        imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800',
        claimToken: 'sample-claim-token-003',
        isClaimed: true,
        userId: mainUserId
      }
    })
  ])

  // Create detection results for sample detections
  console.log('Creating detection results...')
  const detectionResultSeedData = [
    {
      history: detectionHistories[0],
      results: [
        { confidence: 0.95, keyword: /clown|anemone/i },
        { confidence: 0.88, keyword: /butterfly/i },
      ]
    }
  ]

  for (const { history, results } of detectionResultSeedData) {
    for (const { confidence, keyword } of results) {
      const fish = fishes.find(f => keyword.test(f.name)) ?? fishes[Math.floor(Math.random() * fishes.length)];

      await prisma.detectionResult.create({
        data: {
          confidence,
          detectionHistoryId: history.id,
          fishId: fish.id
        }
      })
    }
  }


  await Promise.all([
    // High confidence detection - clownfish
    prisma.detectionResult.create({
      data: {
        confidence: 0.95,
        detectionHistoryId: detectionHistories[0].id,
        fishId: fishes.find(f => f.name.includes('clown') || f.name.includes('anemone'))?.id || fishes[0]?.id || ''
      }
    }),
    // Medium confidence detection - shark
    prisma.detectionResult.create({
      data: {
        confidence: 0.78,
        detectionHistoryId: detectionHistories[1].id,
        fishId: fishes.find(f => f.name.toLowerCase().includes('shark'))?.id || fishes[1]?.id || ''
      }
    }),
    // High confidence detection - butterflyfish
    prisma.detectionResult.create({
      data: {
        confidence: 0.89,
        detectionHistoryId: detectionHistories[2].id,
        fishId: fishes.find(f => f.name.toLowerCase().includes('butterfly'))?.id || fishes[2]?.id || ''
      }
    })
  ])

  // // Create user point history for claimed detections
  // console.log('Creating user point history...')
  // await Promise.all([
  //   // Points from first detection
  //   prisma.userPointHistory.create({
  //     data: {
  //       point: 15,
  //       userId: mainUserId,
  //       detectionHistoryId: detectionHistories[0].id,
  //       fishId: fishes.find(f => f.name.includes('clown') || f.name.includes('anemone'))?.id || fishes[0]?.id || ''
  //     }
  //   }),
  //   // Points from third detection
  //   prisma.userPointHistory.create({
  //     data: {
  //       point: 12,
  //       userId: mainUserId,
  //       detectionHistoryId: detectionHistories[2].id,
  //       fishId: fishes.find(f => f.name.toLowerCase().includes('butterfly'))?.id || fishes[2]?.id || ''
  //     }
  //   }),
  //   // Mission completion bonus
  //   prisma.userPointHistory.create({
  //     data: {
  //       point: 50,
  //       userId: mainUserId,
  //       missionId: missions[0].id,
  //       fishId: null
  //     }
  //   })
  // ])

  // // Create sample user mission progress
  // console.log('Creating sample user mission progress...')
  // const sampleProgressData = []

  // // Progress for Mission 1 (Orectolobiformes) - partially completed
  // orectolobiformes.slice(0, 2).forEach(fish => {
  //   sampleProgressData.push(
  //     prisma.userMissionProgress.create({
  //       data: {
  //         isSuccess: true,
  //         userId: mainUserId,
  //         missionId: missions[0].id,
  //         fishId: fish.id
  //       }
  //     })
  //   )
  // })

  // // Progress for Mission 4 (Colorful fish) - one completed
  // if (colorfulFish.length > 0 && colorfulFish[0]) {
  //   sampleProgressData.push(
  //     prisma.userMissionProgress.create({
  //       data: {
  //         isSuccess: true,
  //         userId: mainUserId,
  //         missionId: missions[3].id,
  //         fishId: colorfulFish[0].id
  //       }
  //     })
  //   )
  // }

  // await Promise.all(sampleProgressData)

  // // Create diverse data for all users
  // console.log('Creating diverse user data...')

  // // User 2: Marine Photographer - focusing on colorful fish
  // const photographerDetections = await Promise.all([
  //   prisma.detectionHistory.create({
  //     data: {
  //       imageUrl: 'https://images.unsplash.com/photo-1571752726924-dd532d3f5086?w=800',
  //       claimToken: 'photographer-claim-001',
  //       isClaimed: true,
  //       userId: users[1].id
  //     }
  //   }),
  //   prisma.detectionHistory.create({
  //     data: {
  //       imageUrl: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800',
  //       claimToken: 'photographer-claim-002',
  //       isClaimed: true,
  //       userId: users[1].id
  //     }
  //   }),
  //   prisma.detectionHistory.create({
  //     data: {
  //       imageUrl: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800',
  //       claimToken: 'photographer-claim-003',
  //       isClaimed: false,
  //       userId: users[1].id
  //     }
  //   })
  // ])

  // // Detection results for photographer
  // await Promise.all([
  //   prisma.detectionResult.create({
  //     data: {
  //       confidence: 0.92,
  //       detectionHistoryId: photographerDetections[0].id,
  //       fishId: colorfulFish[1]?.id || fishes[10]?.id || ''
  //     }
  //   }),
  //   prisma.detectionResult.create({
  //     data: {
  //       confidence: 0.88,
  //       detectionHistoryId: photographerDetections[1].id,
  //       fishId: colorfulFish[2]?.id || fishes[11]?.id || ''
  //     }
  //   }),
  //   prisma.detectionResult.create({
  //     data: {
  //       confidence: 0.76,
  //       detectionHistoryId: photographerDetections[2].id,
  //       fishId: colorfulFish[3]?.id || fishes[12]?.id || ''
  //     }
  //   })
  // ])

  // // Point history for photographer
  // await Promise.all([
  //   prisma.userPointHistory.create({
  //     data: {
  //       point: 20,
  //       userId: users[1].id,
  //       detectionHistoryId: photographerDetections[0].id,
  //       fishId: colorfulFish[1]?.id || fishes[10]?.id || ''
  //     }
  //   }),
  //   prisma.userPointHistory.create({
  //     data: {
  //       point: 18,
  //       userId: users[1].id,
  //       detectionHistoryId: photographerDetections[1].id,
  //       fishId: colorfulFish[2]?.id || fishes[11]?.id || ''
  //     }
  //   }),
  //   prisma.userPointHistory.create({
  //     data: {
  //       point: 75,
  //       userId: users[1].id,
  //       missionId: missions[3].id, // Colorful fish mission
  //       fishId: null
  //     }
  //   })
  // ])

  // // Mission progress for photographer
  // const photographerProgress: Promise<any>[] = []
  // if (colorfulFish.length >= 4) {
  //   colorfulFish.slice(0, 4).forEach(fish => {
  //     photographerProgress.push(
  //       prisma.userMissionProgress.create({
  //         data: {
  //           isSuccess: true,
  //           userId: users[1].id,
  //           missionId: missions[3].id,
  //           fishId: fish.id
  //         }
  //       })
  //     )
  //   })
  // }
  // await Promise.all(photographerProgress)

  // // User 3: Marine Biologist - focusing on sharks and scientific approach
  // const scientistDetections = await Promise.all([
  //   prisma.detectionHistory.create({
  //     data: {
  //       imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  //       claimToken: 'scientist-claim-001',
  //       isClaimed: true,
  //       userId: users[2].id
  //     }
  //   }),
  //   prisma.detectionHistory.create({
  //     data: {
  //       imageUrl: 'https://images.unsplash.com/photo-1567473030492-533b30c5494c?w=800',
  //       claimToken: 'scientist-claim-002',
  //       isClaimed: true,
  //       userId: users[2].id
  //     }
  //   }),
  //   prisma.detectionHistory.create({
  //     data: {
  //       imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800',
  //       claimToken: 'scientist-claim-003',
  //       isClaimed: true,
  //       userId: users[2].id
  //     }
  //   }),
  //   prisma.detectionHistory.create({
  //     data: {
  //       imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  //       claimToken: 'scientist-claim-004',
  //       isClaimed: true,
  //       userId: users[2].id
  //     }
  //   })
  // ])

  // // Detection results for scientist
  // await Promise.all([
  //   prisma.detectionResult.create({
  //     data: {
  //       confidence: 0.97,
  //       detectionHistoryId: scientistDetections[0].id,
  //       fishId: carcharhiniformes[0]?.id || fishes[0]?.id || ''
  //     }
  //   }),
  //   prisma.detectionResult.create({
  //     data: {
  //       confidence: 0.94,
  //       detectionHistoryId: scientistDetections[1].id,
  //       fishId: carcharhiniformes[1]?.id || fishes[1]?.id || ''
  //     }
  //   }),
  //   prisma.detectionResult.create({
  //     data: {
  //       confidence: 0.91,
  //       detectionHistoryId: scientistDetections[2].id,
  //       fishId: carcharhiniformes[2]?.id || fishes[2]?.id || ''
  //     }
  //   }),
  //   prisma.detectionResult.create({
  //     data: {
  //       confidence: 0.85,
  //       detectionHistoryId: scientistDetections[3].id,
  //       fishId: orectolobiformes[0]?.id || fishes[3]?.id || ''
  //     }
  //   })
  // ])

  // // Point history for scientist
  // await Promise.all([
  //   prisma.userPointHistory.create({
  //     data: {
  //       point: 25,
  //       userId: users[2].id,
  //       detectionHistoryId: scientistDetections[0].id,
  //       fishId: carcharhiniformes[0]?.id || fishes[0]?.id || ''
  //     }
  //   }),
  //   prisma.userPointHistory.create({
  //     data: {
  //       point: 22,
  //       userId: users[2].id,
  //       detectionHistoryId: scientistDetections[1].id,
  //       fishId: carcharhiniformes[1]?.id || fishes[1]?.id || ''
  //     }
  //   }),
  //   prisma.userPointHistory.create({
  //     data: {
  //       point: 20,
  //       userId: users[2].id,
  //       detectionHistoryId: scientistDetections[2].id,
  //       fishId: carcharhiniformes[2]?.id || fishes[2]?.id || ''
  //     }
  //   }),
  //   prisma.userPointHistory.create({
  //     data: {
  //       point: 15,
  //       userId: users[2].id,
  //       detectionHistoryId: scientistDetections[3].id,
  //       fishId: orectolobiformes[0]?.id || fishes[3]?.id || ''
  //     }
  //   }),
  //   prisma.userPointHistory.create({
  //     data: {
  //       point: 150,
  //       userId: users[2].id,
  //       missionId: missions[2].id, // Carcharhiniformes mission
  //       fishId: null
  //     }
  //   })
  // ])

  // // Mission progress for scientist (completed shark missions)
  // const scientistProgress: Promise<any>[] = []
  // carcharhiniformes.forEach(fish => {
  //   scientistProgress.push(
  //     prisma.userMissionProgress.create({
  //       data: {
  //         isSuccess: true,
  //         userId: users[2].id,
  //         missionId: missions[2].id,
  //         fishId: fish.id
  //       }
  //     })
  //   )
  // })
  // if (orectolobiformes.length > 0 && orectolobiformes[0]) {
  //   scientistProgress.push(
  //     prisma.userMissionProgress.create({
  //       data: {
  //         isSuccess: true,
  //         userId: users[2].id,
  //         missionId: missions[0].id,
  //         fishId: orectolobiformes[0].id
  //       }
  //     })
  //   )
  // }
  // await Promise.all(scientistProgress)

  // // User 4: Conservationist - focusing on endangered species
  // const conservationistDetections = await Promise.all([
  //   prisma.detectionHistory.create({
  //     data: {
  //       imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  //       claimToken: 'conservationist-001',
  //       isClaimed: true,
  //       userId: users[3].id
  //     }
  //   }),
  //   prisma.detectionHistory.create({
  //     data: {
  //       imageUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800',
  //       claimToken: 'conservationist-002',
  //       isClaimed: true,
  //       userId: users[3].id
  //     }
  //   })
  // ])

  // // Detection results for conservationist
  // if (endangeredFish.length >= 2 && endangeredFish[0] && endangeredFish[1]) {
  //   await Promise.all([
  //     prisma.detectionResult.create({
  //       data: {
  //         confidence: 0.89,
  //         detectionHistoryId: conservationistDetections[0].id,
  //         fishId: endangeredFish[0].id
  //       }
  //     }),
  //     prisma.detectionResult.create({
  //       data: {
  //         confidence: 0.93,
  //         detectionHistoryId: conservationistDetections[1].id,
  //         fishId: endangeredFish[1].id
  //       }
  //     })
  //   ])

  //   // Point history for conservationist
  //   await Promise.all([
  //     prisma.userPointHistory.create({
  //       data: {
  //         point: 30,
  //         userId: users[3].id,
  //         detectionHistoryId: conservationistDetections[0].id,
  //         fishId: endangeredFish[0].id
  //       }
  //     }),
  //     prisma.userPointHistory.create({
  //       data: {
  //         point: 35,
  //         userId: users[3].id,
  //         detectionHistoryId: conservationistDetections[1].id,
  //         fishId: endangeredFish[1].id
  //       }
  //     })
  //   ])

  //   // Mission progress for conservationist
  //   const conservationistProgress: Promise<any>[] = []
  //   endangeredFish.slice(0, 2).forEach(fish => {
  //     conservationistProgress.push(
  //       prisma.userMissionProgress.create({
  //         data: {
  //           isSuccess: true,
  //           userId: users[3].id,
  //           missionId: missions[7].id, // Endangered species mission
  //           fishId: fish.id
  //         }
  //       })
  //     )
  //   })
  //   await Promise.all(conservationistProgress)
  // }

  // // User 5: Student - just starting out
  // const studentDetections = await Promise.all([
  //   prisma.detectionHistory.create({
  //     data: {
  //       imageUrl: 'https://images.unsplash.com/photo-1571752726924-dd532d3f5086?w=800',
  //       claimToken: 'student-001',
  //       isClaimed: true,
  //       userId: users[4].id
  //     }
  //   }),
  //   prisma.detectionHistory.create({
  //     data: {
  //       imageUrl: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?w=800',
  //       claimToken: 'student-002',
  //       isClaimed: false,
  //       userId: users[4].id
  //     }
  //   })
  // ])

  // // Detection results for student
  // await Promise.all([
  //   prisma.detectionResult.create({
  //     data: {
  //       confidence: 0.72,
  //       detectionHistoryId: studentDetections[0].id,
  //       fishId: fishes[20]?.id || fishes[0]?.id || ''
  //     }
  //   }),
  //   prisma.detectionResult.create({
  //     data: {
  //       confidence: 0.68,
  //       detectionHistoryId: studentDetections[1].id,
  //       fishId: fishes[21]?.id || fishes[1]?.id || ''
  //     }
  //   })
  // ])

  // // Point history for student
  // await Promise.all([
  //   prisma.userPointHistory.create({
  //     data: {
  //       point: 10,
  //       userId: users[4].id,
  //       detectionHistoryId: studentDetections[0].id,
  //       fishId: fishes[20]?.id || fishes[0]?.id || ''
  //     }
  //   })
  // ])

  // // Mission progress for student (just started)
  // if (colorfulFish.length > 0 && colorfulFish[0]) {
  //   await prisma.userMissionProgress.create({
  //     data: {
  //       isSuccess: true,
  //       userId: users[4].id,
  //       missionId: missions[3].id,
  //       fishId: colorfulFish[0].id
  //     }
  //   })
  // }

  // console.log('✅ Database seeding completed successfully!')
  // console.log(`Created ${users.length} users`)
  // console.log(`Created ${families.length} fish families`)
  // console.log(`Created ${rarities.length} fish rarities`)
  // console.log(`Created ${fishes.length} fishes`)
  // console.log(`Created ${missions.length} missions`)
  // console.log(`Created mission detail targets for all missions`)
  // console.log(`Created ${detectionHistories.length + photographerDetections.length + scientistDetections.length + conservationistDetections.length + studentDetections.length} detection histories`)
  // console.log('Created diverse detection results and user progress for all users')  // Summary statistics
  // const fishByFamily = families.map(family => ({
  //   family: family.name,
  //   count: fishes.filter(f => f.familyId === family.id).length
  // }))

  // const fishByRarity = rarities.map(rarity => ({
  //   rarity: rarity.name,
  //   count: fishes.filter(f => f.rarityId === rarity.id).length
  // }))

  // console.log('\n📊 Seeding Summary:')
  // console.log('Fish by Family:')
  // fishByFamily.forEach(({ family, count }) => {
  //   console.log(`  ${family}: ${count} species`)
  // })

  // console.log('Fish by Rarity:')
  // fishByRarity.forEach(({ rarity, count }) => {
  //   console.log(`  ${rarity}: ${count} species`)
  // })

  // console.log('\n👥 Users Created:')
  // users.forEach((user, index) => {
  //   console.log(`  ${index + 1}. ${user.name} (${user.email})`)
  // })

  // console.log('\n🎯 Mission Summary:')
  // missions.forEach((mission, index) => {
  //   console.log(`  ${index + 1}. ${mission.title} - ${mission.point} points`)
  // })
}

main()
  .catch(e => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
