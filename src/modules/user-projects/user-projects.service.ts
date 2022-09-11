import { UserProject } from "@prisma/client";
import { db } from "../../config/db";


const startProject = async (userId: string, projectId: string): Promise<UserProject> => {
    let userProject = await db.userProject.findFirst({ where: { projectId, userId } })

    if (!userProject) {
        userProject = await db.userProject.create({ data: { userId, projectId }})
    }

    return userProject;
}

const userProjectsService = {
    startProject,
}

export default userProjectsService;