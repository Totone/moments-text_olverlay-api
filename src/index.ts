/*
 * API entrypoint
*/
import express, { Express } from "express"
import { PORT } from "./_config/env"
import { router } from "./router"

const api: Express = express()

api
    .use(router)
    .listen(PORT, () => {
        console.log(`App listening at localhost on port ${PORT}`)
    })