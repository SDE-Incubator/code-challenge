import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import userTasksController from "../modules/user-tasks/user-tasks.controller";

const userTasksRouter = Router()

userTasksRouter.post("/user/tasks", authMiddleware.verifyAuth, userTasksController.createUserTask)
userTasksRouter.put("/user/tasks/:userTaskId", authMiddleware.verifyAuth, userTasksController.updateUserTask)
userTasksRouter.get("/user-project/:userProjectId/tasks/:status", authMiddleware.verifyAuth, userTasksController.getTasksByUserProject)

export default userTasksRouter;