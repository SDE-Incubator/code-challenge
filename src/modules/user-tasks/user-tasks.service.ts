import { UserTask, UserTaskStatusEnum } from "@prisma/client";
import { db } from "../../config/db";
import { UserTasksBody, UserTaskUpdate } from "./user-tasks.types";


const createUserTask = async (data: UserTasksBody): Promise<UserTask> => {
    const { pos, status, taskId, userProjectId } = data

    const userTaskAlreadyExists = await db.userTask.findFirst({ 
        where: { 
            taskId, 
            userProjectId 
        }
    });

    if (userTaskAlreadyExists) throw new Error();

    await db.userTask.updateMany({
        where: {
            pos: {
                gte: pos
            },
            status
        },
        data: {
            pos: {
                increment: 1
            }
        }
    })

    const userTask = await db.userTask.create({ 
        data: { 
            status, 
            userProjectId, 
            taskId,
            pos
        }
    })

    return userTask;
}

const updateUserTask = async (data: UserTaskUpdate): Promise<UserTask> => {

    const { pos, status, userTaskId } = data

    const sourceTask = await db.userTask.findUnique({ where: { id: userTaskId } })

    if(sourceTask?.status === status) {
        //pos = destino
        //sourceTask.pos = atual
        if(pos > sourceTask.pos) {
            await db.userTask.updateMany({
                where: {
                    pos: {
                        gt: sourceTask.pos
                    },
                    status
                },
                data: {
                    pos: {
                        decrement: 1
                    }
                }
            })
        } else if (pos < sourceTask.pos) {{
            await db.userTask.updateMany({
                where: {
                    pos: {
                        gte: pos
                    },
                    status
                },
                data: {
                    pos: {
                        increment: 1
                    }
                }
            })
        }}
    } else {
        //move
        //pos = destino
        //sourceTask.pos = atual
        await db.userTask.updateMany({
            where: {
                pos: {
                    gt: sourceTask?.pos
                },
                status: sourceTask?.status
            },
            data: {
                pos: {
                    decrement: 1
                }
            }
        })

        await db.userTask.updateMany({
            where: {
                pos: {
                    gte: pos
                },
                status
            },
            data: {
                pos: {
                    increment: 1
                }
            }
        })
    }

    const userTask = await db.userTask.update({
        where: { id: userTaskId },
        data: { status, pos }
    })

    return userTask;
}

const userTasksService = {
    createUserTask,
    updateUserTask
}

export default userTasksService;