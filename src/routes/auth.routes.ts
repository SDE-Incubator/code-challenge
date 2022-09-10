import { Router } from "express";
import authController from "../modules/auth/auth.controller";

const authRouter = Router()

authRouter.post("/auth", authController.authUser)

export default authRouter