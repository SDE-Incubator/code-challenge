import { Request, Response } from "express";
import userProjectsService from "./user-projects.service";
import { StartProjectParams } from "./user-projects.types";


const startProject = async (req: Request<StartProjectParams>, res: Response) => {
    try {
        const { projectId } = req.params;
        const userId = req.user?.id;
        
        if (!userId) throw new Error();

        const userProject = await userProjectsService.startProject(userId, projectId)

        res.status(201);
        res.json(userProject);
    } catch (err) {
        res.status(400)
        res.json({ message: 'Não foi possível iniciar o projeto.' })
    }
}

const userProjectsController = {
    startProject,
} 

export default userProjectsController;