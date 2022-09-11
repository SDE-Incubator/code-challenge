import { PrismaClient } from '@prisma/client'
import { createHash } from '../../src/utils/hash'
const prisma = new PrismaClient()

async function usersSeed() {
    await prisma.user.upsert({
        where: { id: 'ec98963a-ad9b-4c7c-9e71-fbb3b86f6f18' },
        update: {},
        create: {
            email: 'nikolas@sdeincubator.com.br',
            name: 'Nikolas',
            password: createHash("12345678"),
            id: 'ec98963a-ad9b-4c7c-9e71-fbb3b86f6f18',
            github: 'nikolasroger'
        },
    })
}

export default usersSeed