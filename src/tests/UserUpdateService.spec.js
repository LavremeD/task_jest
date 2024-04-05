const UserRepositoryInMemory = require("../repositories/userRepository/UserRepositoryInMemory")
const UserCreateService = require("../services/userServices/UserCreateService")
const UserUpdateService = require("../services/userServices/UserUpdateService")
describe("UserUpdateService", () => {
    let userRepository = null
    let userCreateService = null
    let userUpdateService = null

    it("should be possible to update an user", async () => {
        const user = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        }
        
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)
        userUpdateService = new UserUpdateService(userRepository)

        const userCreated = await userCreateService.execute(user)

        userCreated.name = "User updated",
        userCreated.email = "updated@mail.com"

        const updateUser = await userUpdateService.execute({userCreated})

        expect(updateUser).toHaveProperty("email", updateUser.email)
    })
})