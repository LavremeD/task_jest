const UserRepositoryInMemory = require("../repositories/userRepository/UserRepositoryInMemory")
const UserCreateService = require("../services/userServices/UserCreateService")

describe("UserCreateService", () => {
    let userRepository = null
    let userCreateService = null

    it("user should be created", async () => {
        const user = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        }
        
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)

        const userCreated = await userCreateService.execute(user)

        expect(userCreated).toHaveProperty("user_id")
        expect(userCreated).toHaveProperty("name", userCreated.name)
    })
})