class TaskListService{
    constructor(taskRepository){
        this.taskRepository = taskRepository
    }
    async execute(){
       return await this.taskRepository.listTask()
       
    }
    

}

module.exports = TaskListService