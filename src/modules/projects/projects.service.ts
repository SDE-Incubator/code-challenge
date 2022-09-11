import { Project, ProjectStackEnum, UserProject } from "@prisma/client"
import { db } from "../../config/db"

const getUserProjects = async (userId: string): Promise<UserProject[]> => {
    const list = await db.userProject.findMany({ where: { userId }, include: { project: true } })

    return list
}

const getProjectsByStack = async (stack: ProjectStackEnum): Promise<Project[]> => {
    const list = await db.project.findMany({ where: { stack } })

    return list
}

const getProjectWithTasks = async (id: string): Promise<Project> => {
    const project = db.project.findUniqueOrThrow({ where: { id }, include: { tasks: true } })

    return project
}

const projectsService = {
    getUserProjects,
    getProjectsByStack,
    getProjectWithTasks
}

export default projectsService