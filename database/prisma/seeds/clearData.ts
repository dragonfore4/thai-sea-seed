import type { PrismaClient } from "@prisma/client";

export async function clearData(prisma: PrismaClient) {
  console.log('🧹 Clearing existing data...')
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
}