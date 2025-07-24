
import { PrismaClient } from '../generated/client'
import { fishData } from '../../data/fishData'
import { setFishFamilies } from '../../data/variable'
import { faker } from '@faker-js/faker/locale/en'

const prisma = new PrismaClient()

async function main() {
  console.time('seed')

  /* 1. ล้างข้อมูล ---------------------------------------------------- */
  await prisma.$transaction([
    prisma.userMissionProgress.deleteMany(),
    prisma.userPointHistory.deleteMany(),
    prisma.detectionResult.deleteMany(),
    prisma.detectionHistory.deleteMany(),
    prisma.missionDetailTarget.deleteMany(),
    prisma.mission.deleteMany(),
    prisma.fish.deleteMany(),
    prisma.fishRarity.deleteMany(),
    prisma.fishFamily.deleteMany(),
    prisma.account.deleteMany(),
    prisma.session.deleteMany(),
    prisma.user.deleteMany(),
  ])
  console.log('🗑️ cleared')

  /* 2. lookup tables -------------------------------------------------- */
  const fishFamilyRows = setFishFamilies.map(name => ({
    name,
    description: `ตระกูลปลา ${name}`,
  }))
  const rarityRows = ['common', 'rare', 'endangered'].map(name => ({ name }))

  await Promise.all([
    prisma.fishFamily.createMany({ data: fishFamilyRows }),
    prisma.fishRarity.createMany({ data: rarityRows }),
  ])

  const families = await prisma.fishFamily.findMany()
  const rarities = await prisma.fishRarity.findMany()
  const familyByName = Object.fromEntries(families.map(f => [f.name, f.id]))
  const rarityByName = Object.fromEntries(rarities.map(r => [r.name, r.id]))

  /* 3. Users ---------------------------------------------------------- */
  const userRows = Array.from({ length: 50 }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    emailVerified: true,
    image: faker.image.avatar(),
    createdAt: faker.date.recent({ days: 10 }),
    updatedAt: new Date(),
  }))
  await prisma.user.createMany({ data: userRows })
  const users = await prisma.user.findMany()

  /* 4. Fishes --------------------------------------------------------- */
  const fishRows = fishData.map((fish, i) => {
    const desc = fish.description?.toLowerCase() ?? ''
    const rarity =
      desc.includes('endangered')
        ? 'endangered'
        : /vulnerable|near threatened|threatened/.test(desc)
          ? 'rare'
          : 'common'


    return {
      name: fish.name,
      scientificName: fish.scientificName,
      description: fish.description,
      habitat: fish.habitat,
      length: fish.length,
      age: fish.age,
      weight: fish.weight,
      depthLevel: fish.depthLevel,
      imageUrl: fish.imageUrl,
      familyId: fish.family ? familyByName[fish.family] ?? null : null,  // ตรวจให้มี field นี้ใน fishData
      rarityId: rarityByName[rarity],
    }
  })

  await prisma.fish.createMany({ data: fishRows })

  const fishes = await prisma.fish.findMany()

  /* 5. Missions ------------------------------------------------------- */
  const missionsRows = [
    { title: 'นักล่า Orectolobiformes', point: 50, description: 'ครบ 3 ชนิด' },
    { title: 'นักล่า Tetraodontiformes', point: 75, description: 'ครบ 4 ชนิด' },
    { title: 'ผู้เชี่ยวชาญ Carcharhiniformes', point: 100, description: 'ครบ 3 ชนิด' },
    { title: 'นักถ่ายภาพปลาสวยงาม', point: 60, description: 'ปลาการ์ตูน/ผีเสื้อ/นกแก้ว อย่างละ 1' },
    { title: 'เจ้าแห่งกระเบน', point: 80, description: 'ค้นพบกระเบน 2 ชนิด' },
    { title: 'ผู้ตามรอย Anguilliformes', point: 70, description: 'พบปลาหมึก 2 ชนิด' },
    { title: 'นักสำรวจน้ำลึก', point: 90, description: 'ปลาที่อาศัย > 50 m สองชนิด' },
    { title: 'พิชิตปลามีพิษ', point: 110, description: 'พบ Lion/Stone/Scorpionfish 1 ตัว' },
    { title: 'อนุรักษ์พันธุ์หายาก', point: 120, description: 'ปลาสถานะ Endangered 2 ชนิด' },
    { title: 'สุดยอดนักสะสม', point: 150, description: 'พบปลาครบ 20 ชนิดแรกในระบบ' },
  ]
  await prisma.mission.createMany({ data: missionsRows })
  const missions = await prisma.mission.findMany()

  /* 6. Mission targets ----------------------------------------------- */
  const targetRows: { amount: number, missionId: string, fishId: string }[] = []

  const byFamily = (fam: string, n: number) =>
    fishes.filter(f => familyByName[fam] === f.familyId).slice(0, n)

  const byName = (regex: RegExp, n = 99) =>
    fishes.filter(f => regex.test(f.name)).slice(0, n)

  // #0‑2
  byFamily('Orectolobiformes', 3).forEach(f =>
    targetRows.push({ amount: 1, missionId: missions[0] ? missions[0].id : '', fishId: f.id }))
  byFamily('Tetraodontiformes', 4).forEach(f =>
    targetRows.push({ amount: 1, missionId: missions[1] ? missions[1].id : '', fishId: f.id }))
  byFamily('Carcharhiniformes', 3).forEach(f =>
    targetRows.push({ amount: 1, missionId: missions[2] ? missions[2].id : '', fishId: f.id }))

  // #3 สวยงาม
  const beautifulFish = [
    ...byName(/clown|anemone/i, 1),
    ...byName(/butterfly/i, 1),
    ...byName(/parrot/i, 1),
  ]
  beautifulFish.forEach(f => {
    targetRows.push({ amount: 1, missionId: missions[3] ? missions[3].id : '', fishId: f.id })
  })

  // #4 กระเบน
  byFamily('Myliobatiformes', 2).forEach(f =>
    targetRows.push({ amount: 1, missionId: missions[4] ? missions[4].id : '', fishId: f.id }))

  // #5 หมึก
  byFamily('Anguilliformes', 2).forEach(f =>
    targetRows.push({ amount: 1, missionId: missions[5] ? missions[5].id : '', fishId: f.id }))

  // #6 น้ำลึก > 50 m
  fishes
    .filter(f => parseFloat(f.depthLevel ?? '') > 50)
    .slice(0, 2)
    .forEach(f =>
      targetRows.push({ amount: 1, missionId: missions[6] ? missions[6].id : '', fishId: f.id }))

  // #7 มีพิษ
  byName(/lion|stone|scorpion/i, 1).forEach(f =>
    targetRows.push({ amount: 1, missionId: missions[7] ? missions[7].id : '', fishId: f.id }))

  // #8 Endangered
  fishes
    .filter(f => f.rarityId === rarityByName['endangered'])
    .slice(0, 2)
    .forEach(f =>
      targetRows.push({ amount: 1, missionId: missions[8] ? missions[8].id : '', fishId: f.id }))

  // #9 สะสม 20 ตัวแรก
  fishes.slice(0, 20).forEach(f =>
    targetRows.push({ amount: 1, missionId: missions[9] ? missions[9].id : '', fishId: f.id }))

  await prisma.missionDetailTarget.createMany({ data: targetRows })

  /* 7. Detection histories ------------------------------------------- */
  const historiesRows = Array.from({ length: 100 }).map(() => {
    const u = users[Math.floor(Math.random() * users.length)]
    if (!u) throw new Error('No users found')
    return {
      imageUrl: `https://picsum.photos/seed/${faker.string.uuid()}/800`,
      claimToken: faker.string.nanoid(12),
      isClaimed: faker.datatype.boolean({ probability: 0.6 }),
      userId: u.id,
      createdAt: faker.date.recent({ days: 30 }),
      updatedAt: new Date(),
    }
  })
  await prisma.detectionHistory.createMany({ data: historiesRows })

  const histories = await prisma.detectionHistory.findMany()
  /* 8. DetectionResult + Point + MissionProgress + MissionPoint ------- */
  const resultRows: any[] = []
  const pointRows: any[] = []
  const progressRows: {
    userId: string
    missionId: string
    fishId: string
    isSuccess: boolean
  }[] = []

  /* map ช่วย: fish → missions,   missionId → targetCount,  missionId → point */
  const fishToMissions = new Map<string, string[]>()
  const targetCount = new Map<string, number>()
  const missionPointBy = new Map<string, number>()

  /* ---------- helper: weighted random fish ---------- */
  // ปลาใน Mission target จะถูกสุ่มบ่อยกว่า 4 เท่า
  function weightedRandomFish() {
    const weights = fishes.map(f => (fishToMissions.has(f.id) ? 4 : 1))
    const total = weights.reduce((a, b) => a + b, 0)
    let r = Math.random() * total
    for (let i = 0; i < fishes.length; i++) {
      if ((r -= weights[i]) < 0) return fishes[i]
    }
    return fishes[0]       // fallback
  }


  targetRows.forEach(t => {
    if (!fishToMissions.has(t.fishId)) fishToMissions.set(t.fishId, [])
    fishToMissions.get(t.fishId)!.push(t.missionId)
  })
  missions.forEach(m => {
    targetCount.set(m.id, (targetRows.filter(t => t.missionId === m.id).length))
    missionPointBy.set(m.id, m.point)
  })

  /* track fish ที่แต่ละ user จับสำหรับภารกิจนั้น ๆ  + track ว่า point ของ mission ได้แล้วหรือยัง */
  const userMissionFish = new Map<string, Map<string, Set<string>>>()  // user -> mission -> set<fish>
  const missionRewarded = new Set<string>()                            // userId|missionId



  histories.forEach(h => {
    /* ---------- random DetectionResult ---------- */
    const nResults = faker.number.int({ min: 3, max: 5 })
    let topConf = 0, topFish = ''

    for (let i = 0; i < nResults; i++) {
      // const fish = fishes[Math.floor(Math.random() * fishes.length)]
      const fish = weightedRandomFish()  // ใช้ฟังก์ชันสุ่มที่มีน้ำหนัก
      const conf = faker.number.float({ min: 0.6, max: 0.99, fractionDigits: 2 })

      if (!fish) {
        continue;
      }
      resultRows.push({
        confidence: conf,
        detectionHistoryId: h.id,
        fishId: fish.id,
        createdAt: h.createdAt,
        updatedAt: new Date(),
      })

      if (conf > topConf) { topConf = conf; topFish = fish.id }
    }

    /* ---------- ถ้า claim แล้ว ---------- */
    if (h.isClaimed) {
      /* point จากปลา */
      pointRows.push({
        userId: h.userId,
        point: Math.floor(Math.random() * 100),
        detectionHistoryId: h.id,
        fishId: topFish,
        missionId: null,
        createdAt: h.createdAt,
        updatedAt: new Date(),
      })

      /* อัปเดต Mission progress */
      const missionsHit = fishToMissions.get(topFish) ?? []
      missionsHit.forEach(mid => {
        // เก็บ set ของปลาที่ user จับได้สำหรับ mission นี้
        if (!userMissionFish.has(h.userId)) userMissionFish.set(h.userId, new Map())
        const mMap = userMissionFish.get(h.userId)!
        if (!mMap.has(mid)) mMap.set(mid, new Set())
        mMap.get(mid)!.add(topFish)

        /* ถ้ายังไม่ได้บันทึก MissionProgress สำหรับปลานี้ → ใส่เลย */
        progressRows.push({
          userId: h.userId,
          missionId: mid,
          fishId: topFish,
          isSuccess: true,        // จับได้ = สำเร็จทันที (ตัวละ 1)
        })

        /* เช็กครบทุก target แล้วหรือยัง */
        const done = mMap.get(mid)!.size
        if (done === targetCount.get(mid)!) {
          const key = `${h.userId}|${mid}`
          if (!missionRewarded.has(key)) {
            missionRewarded.add(key)

            /* ให้ point จาก Mission */
            pointRows.push({
              userId: h.userId,
              point: missionPointBy.get(mid)!,   // คะแนนจาก mission
              detectionHistoryId: null,           // ผูกกับ history นี้ก็ได้
              fishId: null,
              missionId: mid,
              createdAt: h.createdAt,
              updatedAt: new Date(),
            })
          }
        }
      })
    }
  })

  /* bulk insert */
  await prisma.detectionResult.createMany({ data: resultRows })
  await prisma.userPointHistory.createMany({ data: pointRows })
  await prisma.userMissionProgress.createMany({ data: progressRows })

  console.log(`✅ detectionResult  : ${resultRows.length}`)
  console.log(`✅ userPointHistory : ${pointRows.length}`)
  console.log(`✅ missionProgress  : ${progressRows.length}`)
  console.timeEnd('seed')
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
