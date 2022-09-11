import { Router } from "express";
import authRouter from "./auth.routes";
import projectsRouter from "./projects.routes";
import usersRouter from "./users.routes";

const router = Router()

router.use(authRouter)
router.use(usersRouter)
router.use(projectsRouter)

export default router