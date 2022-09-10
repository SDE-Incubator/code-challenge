import { db } from "../../config/db"
import { validateHash } from "../../utils/hash"
import { generateJwt } from "../../utils/jwt"
import { AuthUserBody, AuthUserResponse } from "./auth.types"

const authUser = async (data: AuthUserBody): Promise<AuthUserResponse> => {
    const user = await db.user.findUniqueOrThrow({ where: { email: data.email } })

    const isValid = validateHash(data.password, user.password)

    if(!isValid) throw new Error()

    const token = generateJwt(user)

    return {
        token
    }
}

const authService = {
    authUser
}

export default authService