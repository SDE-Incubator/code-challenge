import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import projectsController from "../modules/projects/projects.controller";

const projectsRouter = Router()

projectsRouter.get("/user/projects", authMiddleware.verifyAuth, projectsController.getUserProjects)
projectsRouter.get("/projects/:stack", projectsController.getProjectsByStack)
projectsRouter.get("/project/:id", projectsController.getProjectWithTasks)

export default projectsRouter