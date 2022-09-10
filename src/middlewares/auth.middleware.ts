import { NextFunction, Request, Response } from "express";
import { isValid } from "../utils/jwt";

const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const bearer = req.get('Authorization')
        const type = bearer?.split(' ')[0]
        const token = bearer?.split(' ')[1]
        if(type != "Bearer" || !token) throw new Error()
        const user = isValid(token)
        if(!user) throw new Error()
        req.user = user

        next()
    } catch (err) {
        res.status(401)
        res.json({
            message: "Não autorizado"
        })
    }
}

const authMiddleware = {
    verifyAuth
}

export default authMiddleware