const knex = require ("../../database/knex")

class UserRepository{
    async createUser({name, email, password}) {
        const isAdmin = false
        const userId = await knex("users").insert({
            name, email, password, isAdmin
        })
        return {id: userId}
    }
    async listUsers(){
        const users = await knex("users")
        return users
    }
    async listUserById({user_id}){
        const user =  await knex("users").where({id: user_id})
        return user

    }
    async updateUser({user_id, name, email}) {
        const user = await knex("users").where({id: user_id})

        user.name = name ?? user.name
        user.email = email ?? user.email
        
        await knex("users").where({id: user_id}).update({name: user.name, email: user.email})
        
        return user
}
  async deleteUser({user_id}){
    return await knex("users").whereWrapped({id: user_id}).delete()
  }
}

module.exports = UserRepository