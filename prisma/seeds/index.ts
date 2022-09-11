import { PrismaClient } from '@prisma/client'
import projectsSeed from './projects.seed'
import tasksSeed from './tasks.seed'
import usersProjectsSeed from './users-projects.seed'
import usersSeed from './users.seed'
const prisma = new PrismaClient()

async function main() {
    console.log('Running seeds')
    console.warn('DO NOT STOP...')
    await usersSeed()
    await projectsSeed()
    await tasksSeed()
    await usersProjectsSeed()
    console.log("Seeds generated")
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })