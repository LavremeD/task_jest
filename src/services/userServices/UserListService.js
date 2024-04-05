class UserListService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    async execute(){
        const users = await this.userRepository.listUsers()
        return users
    }
    

}

module.exports = UserListService