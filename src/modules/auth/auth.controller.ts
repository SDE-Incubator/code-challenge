import { Request, Response } from "express";
import authService from "./auth.service";
import { AuthUserBody } from "./auth.types";


const authUser = async (req: Request<{}, {}, AuthUserBody>, res: Response) => {
    try {
        const body = req.body
        const authentication = await authService.authUser(body)

        res.status(200)
        res.json(authentication)
    } catch (err) {
        res.status(401)
        res.json({
            message: "Não foi possível realizar o login"
        })
    }
}

const authController = {
    authUser
}

export default authController