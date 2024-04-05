const UserRepositoryInMemory = require("../repositories/userRepository/UserRepositoryInMemory")
const UserCreateService = require("../services/userServices/UserCreateService")
const UserListService = require("../services/userServices/UserListService")
const UserDeleteService = require("../services/userServices/UserDeleteService")
describe("UserDeleteService", () => {
    let userRepository = null
    let userCreateService = null
    let userListService = null
    let userDeleteService = null

    it("should be possible delete users", async () => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)
        userListService = new UserListService(userRepository)
        userDeleteService = new UserDeleteService(userRepository)
        const user = {
            name: "user test 1",
            email: "user1@test.com",
            password: "123"
        }

        await userCreateService.execute(user)

        await userDeleteService.execute(user);

        const users = await userListService.execute(user)
        

        expect(users).toHaveLength(0)
        
    })
        it("should be possible delete users", async () => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)
        userListService = new UserListService(userRepository)
        userDeleteService = new UserDeleteService(userRepository)
        const user1 = {
            name: "user test 1",
            email: "user1@test.com",
            password: "123"
        }
        const user2 = {
            name: "user test 2",
            email: "user1@test.com",
            password: "123"
        }
        const firstUser = await userCreateService.execute(user1)
        const secondUser = await userCreateService.execute(user2)

        const list = await userListService.execute()
        
        expect(list).not.toHaveProperty("name", "user test 1")
    })
    
})