import { Prisma, User } from "@prisma/client"
import { db } from "../../config/db"
import { createHash } from "../../utils/hash"

const createUser = async (data: Prisma.UserCreateInput): Promise<User> => {
    data.password = createHash(data.password)

    const createdUser = await db.user.create({
        data
    })

    return createdUser
}

const getUserById = async (id: string): Promise<User> => {
    return db.user.findUniqueOrThrow({ where: { id } })
}

const userService = {
    createUser,
    getUserById
}

export default userService