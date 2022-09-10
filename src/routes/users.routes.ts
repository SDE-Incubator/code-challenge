import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import userController from "../modules/users/users.controller";

const usersRouter = Router()

usersRouter.post("/users", userController.createUserController)
usersRouter.get("/user/info", authMiddleware.verifyAuth, userController.getUser)

export default usersRouter