const {Router} = require("express")
const taskRoutes = require("./tasks.routes")
const userRoutes = require("./users.routes")
const routes = Router()

routes.use("/", taskRoutes)
routes.use("/", userRoutes)

module.exports = routes