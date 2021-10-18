import { TestVideo, TextEffect } from "../types";
import { JoiService } from "../services/JoiService";
import { ProcessError } from "./ProcessError";
import ERR_MSG from "../_config/error_messages";


interface ValidatorData {
    args: any
    method: Function
    msg: string
}

/**
 * * Validates request inputs
 */
export class Validator {
    public static validateTestVideo(video: TestVideo): true {
        const { resolution, input, output, duration } = video
        const params: ValidatorData[] = [
            {
                args: input,
                method: JoiService.videoIO,
                msg: ERR_MSG.INVALID_PARAM.TEST_VIDEO.INPUT
            },
            {
                args: output,
                method: JoiService.videoIO,
                msg: ERR_MSG.INVALID_PARAM.TEST_VIDEO.OUTPUT
            },
            {
                args: duration,
                method: JoiService.videoDuration,
                msg: ERR_MSG.INVALID_PARAM.TEST_VIDEO.DURATION
            },
            {
                args: resolution,
                method: JoiService.videoResolution,
                msg: ERR_MSG.INVALID_PARAM.TEST_VIDEO.RESOLUTION
            },
        ]

        // console.log(JoiService.videoIO(input))

        Validator.validateObject(params)
        return true
    }

    public static validateTextEffect(text: TextEffect, video: TestVideo): true {
        const { resolution, duration } = video
        const { coordinates, fontColor, fontSize, textString, startTime, endTime } = text

        const params: ValidatorData[] = [
            {
                args: textString,
                method: JoiService.textEffectString,
                msg: ERR_MSG.INVALID_PARAM.TEXT_EFFECT.TEXT_STRING
            },
            {
                args: fontSize,
                method: JoiService.textFontSize,
                msg: ERR_MSG.INVALID_PARAM.TEXT_EFFECT.FONT_SIZE
            },
            {
                args: fontColor,
                method: JoiService.textFontColor,
                msg: ERR_MSG.INVALID_PARAM.TEXT_EFFECT.FONT_COLOR
            },
            {
                args: [startTime, duration],
                method: JoiService.textStartTime,
                msg: ERR_MSG.INVALID_PARAM.TEXT_EFFECT.START_TIME
            },
            {
                args: [endTime, startTime, duration],
                method: JoiService.textEndTime,
                msg: ERR_MSG.INVALID_PARAM.TEXT_EFFECT.END_TIME
            },
            {
                args: [coordinates, resolution],
                method: JoiService.textCoordinates,
                msg: ERR_MSG.INVALID_PARAM.TEXT_EFFECT.COORDINATES
            },
        ]

        Validator.validateObject(params)
        return true
    }

    private static validateObject(params: ValidatorData[]): void {
        params.forEach(
            ({ args, method, msg }) => Validator.validateParam(args, method, msg)
        )
    }

    private static validateParam(args: any, method: Function, errMsg: string): void {
        const { error } = Array.isArray(args) ? method(...args) : method(args)
        if (error) throw new ProcessError(errMsg)
    }
}