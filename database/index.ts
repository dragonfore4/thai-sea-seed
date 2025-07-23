import { PrismaClient } from './generated/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const database = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = database
}

export type Database = typeof database

export * from './generated/client'
