const UserRepositoryInMemory = require("../repositories/userRepository/UserRepositoryInMemory");
const UserCreateService = require("../services/userServices/UserCreateService");

const TaskRepositoryInMemory = require("../repositories/taskRepository/TaskRepositoryInMemory");
const TaskCreateService = require("../services/taskServices/TaskCreateService");
const TaskListService = require("../services/taskServices/TaskListService");
const TaskDeleteService = require("../services/taskServices/TaskDeleteService")


describe('TaskDeleteService', () => {
    let taskRepositoryInMemory = null;
    let taskCreateService = null;
    let taskListService = null;
    let taskDeleteService = null;
    let userRepository = null;
    let userCreateService = null
 
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository);

        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository);
        taskListService = new TaskListService(taskRepository);
        taskDeleteService = new TaskDeleteService(taskRepository)

    });
    
    it("should be able to delete a task", async () => {
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
        const createdTask =await taskCreateService.execute(task)

        await taskDeleteService.execute(createdTask)

        const list = await taskListService.execute()
 
        expect(list).not.toHaveProperty('title', "testando api com jest")
    })
}
)