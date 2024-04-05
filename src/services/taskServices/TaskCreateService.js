

class TaskCreateService{
    constructor(taskRepository){
        this.taskRepository = taskRepository
    }
    async execute({title, description, user_id}){

        const taskCreated = await this.taskRepository.createTask({title, description, user_id})

        return taskCreated
    }
    

}

module.exports = TaskCreateService