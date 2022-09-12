import { Router } from "express";
import authRouter from "./auth.routes";
import projectsRouter from "./projects.routes";
import userProjectsRouter from "./user-projects.routes";
import userTasksRouter from "./user-tasks.routes";
import usersRouter from "./users.routes";

const router = Router()

router.use(authRouter)
router.use(usersRouter)
router.use(projectsRouter)
router.use(userProjectsRouter)
router.use(userTasksRouter)

export default router