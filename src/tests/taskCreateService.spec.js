const UserRepositoryInMemory = require("../repositories/userRepository/UserRepositoryInMemory");
const UserCreateService = require("../services/userServices/UserCreateService");

const TaskCreateService = require("../services/taskServices/TaskCreateService");
const TaskRepositoryInMemory = require("../repositories/taskRepository/TaskRepositoryInMemory");

describe('TaskCreateService', () => {
    let taskRepositoryInMemory = null;
    let taskCreateService = null;
    let userRepository = null;
    let userCreateService = null

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository);

        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository);

    });
    
    it("should be able to create a new task", async () => {
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
 
        expect(taskCreated).toHaveProperty('user_id', userCreated.user_id)
    })
}
)