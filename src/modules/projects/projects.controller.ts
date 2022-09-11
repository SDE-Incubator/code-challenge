import { ProjectStackEnum } from "@prisma/client";
import { Request, Response } from "express";
import projectsService from "./projects.service";


const getUserProjects = async (req: Request, res: Response) => {
    try {
        const user = req.user
        
        if(!user) throw new Error()

        const userProjects = await projectsService.getUserProjects(user.id)

        res.status(200)
        res.json(userProjects)
    } catch (err) {
        res.status(400)
        res.json({
            message: "Não foi possível listar os projetos"
        })
    }
}

const getProjectsByStack = async (req: Request<{ stack: ProjectStackEnum }>, res: Response) => {
    try {
        const stack = req.params.stack

        const projects = await projectsService.getProjectsByStack(stack)

        res.status(200)
        res.json(projects)
    } catch (err) {
        res.status(400)
        res.json({
            message: "Não foi possível listar os projetos"
        })
    }
}

const getProjectWithTasks = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const id = req.params.id

        const project = await projectsService.getProjectWithTasks(id)

        res.status(200)
        res.json(project)
    } catch (err) {
        res.status(400)
        res.json({
            message: "Não foi possível encontrar o projeto"
        })
    }
}

const projectsController = {
    getUserProjects,
    getProjectsByStack,
    getProjectWithTasks
}

export default projectsController