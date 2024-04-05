class TaskDeleteService{
    constructor(taskRepository){
        this.taskRepository = taskRepository
    }
    async execute({id}){
       return await this.taskRepository.deleteTask({id})
       
    }
    

}

module.exports = TaskDeleteService