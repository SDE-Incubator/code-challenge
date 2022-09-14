import { Request, Response } from "express";
import userTasksService from "./user-tasks.service";
import { GetTasksByUserProjectParams, UserTasksBody, UserTasksParams, UserTasksUpdateBody } from "./user-tasks.types";


const createUserTask = async (req: Request<any, any, UserTasksBody>, res: Response) => {
    try {
        const { status, taskId, userProjectId, pos } = req.body;
        
        const userTask = await userTasksService.createUserTask({status, userProjectId, taskId, pos});

        res.status(201);
        res.json(userTask);
    } catch (err) {
        res.status(400)
        res.json({ message: 'Não foi possível iniciar a Tarefa.' })
    }
}

const updateUserTask = async (req: Request<UserTasksParams, any, UserTasksUpdateBody>, res: Response) => {
    try {
        const { userTaskId } = req.params;
        const { status, pos } = req.body;
        
        const updatedUserTask = await userTasksService.updateUserTask({status, userTaskId, pos});
        
        res.status(200);
        res.json(updatedUserTask);
    } catch (err) {
        res.status(400)
        res.json({ message: 'Não foi possível atualizar a Tarefa.' })
    }
}

const getTasksByUserProject = async (req: Request<GetTasksByUserProjectParams>, res: Response) => {
    try {
        const { status, userProjectId } = req.params;

        const tasks = await userTasksService.getTasksByUserProject({ status, userProjectId });

        res.status(200);
        res.json(tasks);
    } catch (err) {
        console.log(err)
        res.status(400)
        res.json({ message: 'Não foi possível listar as tarefas.' })
    }
}

const userTasksController = {
    createUserTask,
    updateUserTask,
    getTasksByUserProject
} 

export default userTasksController;