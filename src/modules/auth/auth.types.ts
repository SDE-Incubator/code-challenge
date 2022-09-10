import { User } from "@prisma/client";

export type AuthUserBody = Pick<User, "email" | "password">

export type AuthUserResponse = {
    token: string
}