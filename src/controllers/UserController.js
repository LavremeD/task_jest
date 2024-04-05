const knex = require("../database/knex")

const UserRepository = require("../repositories/userRepository/UserRepository")
const UserCreateService = require("../services/userServices/UserCreateService")
const UserlistByIdService = require("../services/userServices/UserByIdService")
const UserListService = require("../services/userServices/UserListService")
const UserUpdateService = require("../services/userServices/UserUpdateService")
const UserDeleteService = require("../services/userServices/UserDeleteService")

const userRepository = new UserRepository()
const userCreateService = new UserCreateService(userRepository)
const userListService = new UserListService(userRepository)
const userByIdService = new UserlistByIdService(userRepository)
const userUpdateService = new UserUpdateService(userRepository)
const userDeleteService = new UserDeleteService(userRepository)
class UserController{
  
    async createUser(req, res) {
        const{name, email, password} = req.body

        await userCreateService.execute({name, email, password})

       return res.status(201).json("usuario cadastrado com sucesso!")
            
    }

    async listUsers(req, res) {
    
        const users = await userListService.execute()
       return res.status(200).json(users)
    }

    async listUserById(req, res){
        const {user_id} = req.params
        const users = await userByIdService.execute({user_id})
        
        res.status(200).json(users)
    }


    async updateUser(req, res) {
        const {user_id} = req.params
        const {name, email} = req.body

        await userUpdateService.execute({user_id, name, email})
      
        return res.status(200).json("usuario atualizado com sucesso!")
        
    }

    async updateUserStatus(req, res){
        const {user_id} = req.params
        await knex("users").where({id: user_id}).update({isAdmin: true})
        
        return res.status(200).json("Status alterado com sucesso!")
    }

    async deleteUser(req, res) {
    const {user_id} = req.params
    await userDeleteService.execute({user_id})
    return res.status(200).json("Registro deletado com sucesso!")
    }
}

module.exports = UserController