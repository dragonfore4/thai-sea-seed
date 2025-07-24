import type { PrismaClient } from "@prisma/client"

export async function seedUsers(prisma: PrismaClient) {
  console.log('👤 Creating users...')
  const users = await prisma.user.createMany({
    data: [
      { id: 'user1', name: 'นักสำรวจทะเล', email: 'user1@example.com', emailVerified: true },
      { id: 'user2', name: 'นักวิจัยทะเล', email: 'user2@example.com', emailVerified: true },
      { id: 'user3', name: 'นักอนุรักษ์ทะเล', email: 'user3@example.com', emailVerified: true },
      { id: 'user4', name: 'นักตกปลา', email: 'user4@example.com', emailVerified: true },
    ]
  })
  return await prisma.user.findMany()
}
