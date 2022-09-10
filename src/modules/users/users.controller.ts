import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import userService from "./users.service";


const createUserController = async (req: Request<{}, {}, Prisma.UserCreateInput>, res: Response) => {
    try {
        const newUser = req.body
        const createdUser = await userService.createUser(newUser)
        
        res.status(201)
        res.json(createdUser)
    } catch (err) {
        res.status(401)
        res.json({
            message: "Não foi possível criar o usuário"
        })
    }
}

const getUser = async (req: Request, res: Response) => {
    try {

        const id = req.user?.id

        if(!id) throw new Error()

        const user = await userService.getUserById(id)

        res.status(200)
        res.json(user)
    } catch (err) {
        res.status(401)
        res.json({
            message: "Não foi possível criar o usuário"
        })
    }
}

const userController = {
    createUserController,
    getUser
}

export default userController