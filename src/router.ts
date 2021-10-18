import express from "express"
import { TEXT_EFFECT } from "./_config/routes"
import { Manager } from "./controllers/Manager"

export const router: express.Router = express.Router()

router
    .use(express.json())
    .post(TEXT_EFFECT, Manager.postTextEffect)