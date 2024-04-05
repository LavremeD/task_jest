const knex = require("../database/knex")
const TaskRepository = require("../repositories/taskRepository/TaskRepository")
const TaskByIdService = require("../services/taskServices/TaskByIdService")
const TaskCreateService = require("../services/taskServices/TaskCreateService")
const TaskUpdateService = require("../services/taskServices/TaskUpdateService")
const TaskListService = require("../services/taskServices/taskListService")

const taskRepository = new TaskRepository()
const taskCreateService = new TaskCreateService(taskRepository)
const taskListService = new TaskListService(taskRepository)
const taskByIdService = new TaskByIdService(taskRepository)
const taskUpdateService = new TaskUpdateService(taskRepository)

class TaskController{
    async createTask(req, res) {
        const {user_id} = req.params;
        const {title, description} = req.body;
       
        await taskCreateService.execute({title, description, user_id })
       
        return res.status(201).json("tarefa criada com sucesso.")
    }

    async listTasks(req, res) {
        const tasks = await taskListService.execute()
        
        res.status(200).json(tasks)
    }

    async listTaskById(req, res){
        const {id} = req.params
        const task = await taskByIdService.execute({id})
        
         return res.status(200).json(task)
    }

    async updateTask(req, res) {
        const {id} = req.params;
        const {title, description} = req.body;
        await taskUpdateService.execute({title, description, id})
        return res.status(200).json("Registro atualizado com sucesso!")
    }
    async updateTaskStatus(req, res){
        const {id} = req.params

        await knex("task").where({id}).update({isComplete:true})
        
        return res.status(200).json("Status alterado com sucesso!")
    }

    async deleteTask(req, res) {
    const {id} = req.params
    await knex("task").where({id}).delete()
    return res.status(200).json("Registro deletado com sucesso!")
    }
}

module.exports = TaskController