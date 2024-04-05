class UserDeleteService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    async execute({user_id}){
        const user = await this.userRepository.deleteUser({user_id})
        return user
    }
    

}

module.exports = UserDeleteService