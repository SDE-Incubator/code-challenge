import { UserTask, UserTaskStatusEnum } from "@prisma/client";
import { db } from "../../config/db";


const createUserTask = async (status: UserTaskStatusEnum, userProjectId: string, taskId: string): Promise<UserTask> => {
    const userAlreadyExists = await db.userTask.findFirst({ where: { taskId, userProjectId }});

    if (userAlreadyExists) throw new Error();

    const userTask = await db.userTask.create({ data: { status, userProjectId, taskId }})

    return userTask;
}

const updateUserTask = async (status: UserTaskStatusEnum, userTaskId: string): Promise<UserTask> => {
    const userTask = await db.userTask.update({
        where: { id: userTaskId },
        data: { status }
    })

    return userTask;
}

const userTasksService = {
    createUserTask,
    updateUserTask
}

export default userTasksService;