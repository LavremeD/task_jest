

class UserCreateService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    async execute({name, email, password}){
        const userCreated = await this.userRepository.createUser({name, email, password})
        return userCreated
    }
    

}

module.exports = UserCreateService