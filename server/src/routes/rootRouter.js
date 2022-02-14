import express from "express"
import userSessionsRouter from "./api/v1/userSessionsRouter.js"
import usersRouter from "./api/v1/usersRouter.js"
import clientRouter from "./clientRouter.js"
import weatherRouter from "./api/v1/weatherRouter.js"
import projectsRouter from "./api/v1/projectsRouter.js"
import hardwoodsRouter from "./api/v1/hardwoodsRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/", clientRouter)
rootRouter.use("/api/v1/user-sessions", userSessionsRouter)
rootRouter.use("/api/v1/users", usersRouter)
rootRouter.use("/api/v1/weather", weatherRouter)
rootRouter.use("/api/v1/projects", projectsRouter)
rootRouter.use("/api/v1/hardwoods", hardwoodsRouter)


export default rootRouter
