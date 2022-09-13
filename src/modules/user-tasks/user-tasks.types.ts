import { UserTask } from "@prisma/client"

export type UserTasksBody = Pick<UserTask, 'status' | 'taskId' | 'userProjectId' | 'pos'>
export type UserTasksUpdateBody = Pick<UserTask, 'status' | 'pos'>

export type UserTaskUpdate = UserTasksUpdateBody & {
    userTaskId: string
}

export type UserTasksParams = {
    userTaskId: string
}