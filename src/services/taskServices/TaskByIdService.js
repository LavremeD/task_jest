class TaskByIdService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    async execute({id}){
        const user = await this.userRepository.listTaskById({id})
        return user
    }
    

}

module.exports = TaskByIdService