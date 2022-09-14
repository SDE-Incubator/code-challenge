import { UserProject } from "@prisma/client";
import { db } from "../../config/db";


const startProject = async (userId: string, projectId: string): Promise<UserProject> => {
    let userProject = await db.userProject.findFirst({ where: { projectId, userId }, include: { project: true } })

    if (!userProject) {
        userProject = await db.userProject.create({ data: { userId, projectId }, include: { project: true }})
    }

    return userProject;
}

const userProjectsService = {
    startProject,
}

export default userProjectsService;