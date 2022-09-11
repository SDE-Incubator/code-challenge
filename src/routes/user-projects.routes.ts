import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import userProjectsController from "../modules/user-projects/user-projects.controller";

const userProjectsRouter = Router()

userProjectsRouter.post("/project/:projectId/start", authMiddleware.verifyAuth, userProjectsController.startProject)

export default userProjectsRouter;