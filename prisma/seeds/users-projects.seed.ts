import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function usersProjectsSeed() {
    await prisma.userProject.upsert({
        where: { id: '548c7c17-9ace-4f64-9167-610c81f682a9' },
        update: {},
        create: {
            id: '548c7c17-9ace-4f64-9167-610c81f682a9',
            projectId: '2a8b2293-dde3-44e8-bc7d-d1f219cbd88f',
            userId: 'ec98963a-ad9b-4c7c-9e71-fbb3b86f6f18'
        },
    })
}

export default usersProjectsSeed