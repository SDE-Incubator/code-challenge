import { Router } from "express";
import authRouter from "./auth.routes";
import usersRouter from "./users.routes";

const router = Router()

router.use(authRouter)
router.use(usersRouter)

export default router