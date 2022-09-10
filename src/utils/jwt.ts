import { User } from '@prisma/client'
import jwt from 'jsonwebtoken'

const generateJwt = (data: any) => {
    return jwt.sign(data, String(process.env.JWT_SECRET))
}

const isValid = (token: string): User => {
    return jwt.verify(token, String(process.env.JWT_SECRET)) as User
}

export {
    generateJwt,
    isValid
}