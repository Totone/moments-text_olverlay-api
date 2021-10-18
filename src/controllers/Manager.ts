import { Request, Response } from "express"
import { TestVideo, TextEffect, ValidTextEffectBody } from "../types"
import { ProcessError } from "./ProcessError"
import ERR_MSG from "../_config/error_messages"

/**
 * * Manages the API process to compute a valid response depending on received request params
 */
export class Manager {
    /**
     * Handles textEffect route with POST method 
     */
    public static postTextEffect(req: Request, res: Response) {
        try {

            const { testVideo, textEffect } = Manager.validateTextEffectBody(req.body)
            // send testVideo to Validator
            // send textEffect to Validator
            // send both to builder & return response
            // send response code 200 json
        } catch (error) {
            if (error instanceof ProcessError)
                res.status(error.code).json({ message: error.message })
            else
                res.sendStatus(500)
        }

    }

    private static validateTextEffectBody(body: any): ValidTextEffectBody {
        const testVideo = Manager.validateTestVideoType(body)
        const textEffect = Manager.validateTextEffectType(body)
        return { testVideo, textEffect }
    }

    private static validateTestVideoType(body: any): TestVideo {
        const { testVideo } = body

        if (!testVideo) throw new ProcessError(ERR_MSG.ABSENT_FROM_BODY.TEST_VIDEO)
        else {
            try {
                if (
                    !testVideo.input ||
                    !testVideo.output ||
                    !testVideo.duration ||
                    !testVideo.resolution
                ) throw Error()
                else {
                    const input: string = testVideo.input
                    const output: string = testVideo.output
                    const duration: number = parseInt(testVideo.duration, 10)
                    const resolution = {
                        x: parseInt(testVideo.resolution.x, 10),
                        y: parseInt(testVideo.resolution.y, 10),
                    }
                    if (isNaN(duration) || isNaN(resolution.x) || isNaN(resolution.y)) throw Error()
                    else return { input, output, duration, resolution }
                }
            } catch (e) {
                throw new ProcessError(ERR_MSG.INVALID_BODY)
            }
        }
    }

    private static validateTextEffectType(body: any): TextEffect {
        const { textEffect } = body
        if (!textEffect) throw new ProcessError(ERR_MSG.ABSENT_FROM_BODY.TEXT_EFFECT)
        else {
            try {
                if (
                    !textEffect.textString ||
                    !textEffect.coordinates ||
                    !textEffect.fontSize ||
                    !textEffect.fontColor ||
                    !textEffect.startTime ||
                    !textEffect.endTime
                ) throw Error()
                else {
                    const textString: string = textEffect.textString
                    const coordinates = {
                        x: parseInt(textEffect.coordinates.x, 10),
                        y: parseInt(textEffect.coordinates.y, 10),
                    }
                    const fontSize: number = parseInt(textEffect.fontSize, 10)
                    const fontColor: string = textEffect.fontColor
                    const startTime: number = parseInt(textEffect.startTime, 10)
                    const endTime: number = parseInt(textEffect.endTime, 10)

                    if (
                        isNaN(coordinates.x) ||
                        isNaN(coordinates.y) ||
                        isNaN(fontSize) ||
                        isNaN(startTime) ||
                        isNaN(endTime)
                    ) throw Error()
                    else return { textString, coordinates, fontSize, fontColor, startTime, endTime }
                }
            } catch (e) {
                throw new ProcessError(ERR_MSG.INVALID_BODY)
            }
        }
    }
}