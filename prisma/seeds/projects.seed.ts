import { PrismaClient, ProjectStackEnum } from '@prisma/client'
const prisma = new PrismaClient()

async function projectsSeed() {
    await prisma.project.upsert({
        where: { id: "2a8b2293-dde3-44e8-bc7d-d1f219cbd88f" },
        update: {},
        create: {
            id: '2a8b2293-dde3-44e8-bc7d-d1f219cbd88f',
            title: 'Projeto teste',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            thumbnail: 'https://github.com/kingreto1.png',
            images: ['https://github.com/kingreto1.png'],
            stack: ProjectStackEnum.back,
            estimatedTime: 10
        },
    })
    await prisma.project.upsert({
        where: { id: "8323a9be-bece-4227-b4fd-0d3bb9829798" },
        update: {},
        create: {
            id: '8323a9be-bece-4227-b4fd-0d3bb9829798',
            title: 'Projeto teste front',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            thumbnail: 'https://github.com/kingreto1.png',
            images: ['https://github.com/kingreto1.png'],
            stack: ProjectStackEnum.front,
            estimatedTime: 10
        },
    })
    await prisma.project.upsert({
        where: { id: "ab63712c-8578-4807-8f33-0db934e57380" },
        update: {},
        create: {
            id: 'ab63712c-8578-4807-8f33-0db934e57380',
            title: 'Projeto teste fullstack',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            thumbnail: 'https://github.com/kingreto1.png',
            images: ['https://github.com/kingreto1.png'],
            stack: ProjectStackEnum.full,
            estimatedTime: 20
        },
    })
}

export default projectsSeed