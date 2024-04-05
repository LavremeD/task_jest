class UserlistByIdService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    async execute({user_id}){
        const user = await this.userRepository.listUserById({user_id})
        return user
    }
    

}

module.exports = UserlistByIdService