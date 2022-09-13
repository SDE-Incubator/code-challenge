import { PrismaClient, ProjectStackEnum } from '@prisma/client'
const prisma = new PrismaClient()

async function tasksSeed() {
    await prisma.task.upsert({
        where: { id: "1a888024-52f3-4e9f-8a1f-a04fa0e68804" },
        update: {},
        create: {
            id: '1a888024-52f3-4e9f-8a1f-a04fa0e68804',
            title: 'Task teste 1',
            description: 'Lorem ipsum é o melhor de todos',
            stack: ProjectStackEnum.back,
            projectId: '2a8b2293-dde3-44e8-bc7d-d1f219cbd88f',
            complexity: 1
        },
    })
    await prisma.task.upsert({
        where: { id: "738a05da-2d77-485f-95c4-5e08bc0f0376" },
        update: {},
        create: {
            id: '738a05da-2d77-485f-95c4-5e08bc0f0376',
            title: 'Task teste 2',
            description: 'Lorem ipsum é o melhor de todos',
            stack: ProjectStackEnum.back,
            projectId: '2a8b2293-dde3-44e8-bc7d-d1f219cbd88f',
            complexity: 1
        },
    })
    await prisma.task.upsert({
        where: { id: "ad5a5887-7cb2-43b9-8c0d-a7a64202127d" },
        update: {},
        create: {
            id: 'ad5a5887-7cb2-43b9-8c0d-a7a64202127d',
            title: 'Task teste 3',
            description: 'Lorem ipsum é o melhor de todos',
            stack: ProjectStackEnum.back,
            projectId: '2a8b2293-dde3-44e8-bc7d-d1f219cbd88f',
            complexity: 1
        },
    })
    await prisma.task.upsert({
        where: { id: "b8e98492-c7b4-4fe6-9da6-745e95082bd3" },
        update: {},
        create: {
            id: 'b8e98492-c7b4-4fe6-9da6-745e95082bd3',
            title: 'Task teste 2',
            description: 'Lorem ipsum é o melhor de todos',
            stack: ProjectStackEnum.front,
            projectId: '8323a9be-bece-4227-b4fd-0d3bb9829798',
            complexity: 5
        },
    })
    await prisma.task.upsert({
        where: { id: "58cfd49d-e78b-429f-8e98-64bc7e814fb8" },
        update: {},
        create: {
            id: '58cfd49d-e78b-429f-8e98-64bc7e814fb8',
            title: 'Task teste 3',
            description: 'Lorem ipsum é o melhor de todos',
            stack: ProjectStackEnum.full,
            projectId: 'ab63712c-8578-4807-8f33-0db934e57380',
            complexity: 10
        },
    })
}

export default tasksSeed