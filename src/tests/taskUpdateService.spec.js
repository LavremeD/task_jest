const UserRepositoryInMemory = require("../repositories/userRepository/UserRepositoryInMemory")
const TaskRepositoryInMemory = require("../repositories/taskRepository/TaskRepositoryInMemory")

const UserCreateService = require("../services/userServices/UserCreateService")
const TaskUpdateService = require("../services/taskServices/TaskUpdateService")
const TaskCreateService = require("../services/taskServices/TaskCreateService")

describe("TaskUpdateService", () => {
    let userRepository = null;
    let taskRepository = null;
    let userCreateService = null;
    let taskCreateService = null;
    let taskUpdateService = null

    beforeEach(() => {

        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)

        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository)
        taskUpdateService = new TaskUpdateService(taskRepository)
    })
    it("should be able to update tasks", async () => {
        const user = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        }
         const userCreated = await userCreateService.execute(user);

         const task = {
            title: "testando api com jest",
            description: "Elaborar testes unitários na aplicação",
            user_id: userCreated.user_id
        }

       const taskCreated = await taskCreateService.execute(task)

       taskCreated.title = "tarefa Atualizada",
       taskCreated.description = "descrição atualizada"

       const taskUpdated = await taskUpdateService.execute(taskCreated)
        
        expect(taskUpdated).toHaveProperty("title", "tarefa Atualizada")
    })

})