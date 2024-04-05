const {Router} = require("express")
const TaskController = require("../controllers/TaskController")
const checkTaskExists = require("../middlewares/checkTaskExists")
const taskRoutes = Router()
const taskController = new TaskController()

taskRoutes.post("/tasks/:user_id", taskController.createTask)

taskRoutes.get("/tasks", taskController.listTasks)
taskRoutes.get("/tasks/:id", checkTaskExists,  taskController.listTaskById)

taskRoutes.put("/tasks/:id", checkTaskExists, taskController.updateTask)
taskRoutes.patch("/tasks/status/:id", checkTaskExists, taskController.updateTaskStatus)

taskRoutes.delete("/tasks/:id", checkTaskExists, taskController.deleteTask)


module.exports = taskRoutes