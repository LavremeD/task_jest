class TaskUpdateService{
    constructor(taskRepository){
        this.taskRepository = taskRepository
    }
    async execute({title, description, id}){
        return await this.taskRepository.updateTask({title, description, id})
        
    }
    

}

module.exports = TaskUpdateService