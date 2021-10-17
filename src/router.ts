import express from "express"
import { TEXT_EFFECT } from "./_config/routes"

export const router: express.Router = express.Router()

router
    .use(express.json())
    .post(TEXT_EFFECT, (req, res) => console.log("ok"))