const knex = require("../../database/knex")

class TaskRepository{
    async createTask({title, description, user_id}) {
       const isComplete = false
       const taskId = await knex("task").insert({description, isComplete, title,  user_id })
       
       return taskId
   }

    async listTasks() {
        const tasks = await knex("task")
        return tasks
    }

    async listTaskById({id}){
        const task = await knex("task").where({id})
         return task
    }

    async updateTask({title, description, id}) {
        const task = await knex("task").where({id})

        task.title = title ?? task.title
        task.description = description ?? task.description
        
        await knex("task").where({id}).update({title: task.title, description: task.description})
        
        return task
    }
}

module.exports = TaskRepository