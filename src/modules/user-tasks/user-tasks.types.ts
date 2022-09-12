import { UserTask, UserTaskStatusEnum } from "@prisma/client"

export type UserTasksBody = Pick<UserTask, 'status' | 'taskId' | 'userProjectId'>
export type UserTasksUpdateBody = Pick<UserTask, 'status'>

export type UserTasksParams = {
    userTaskId: string
}