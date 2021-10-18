import ERROR_MESSAGES from "../_config/error_messages"
/**
 * * Handles API response when an error case happens
 */
export class ProcessError extends Error {
    public code: number
    constructor(message: string) {
        super(message)
        this.message = message
        this.code = this.getCodeFromMessage(message)
    }

    private getCodeFromMessage(message: string) {
        const invalidBodyErrors = [
            ERROR_MESSAGES.ABSENT_FROM_BODY.TEXT_EFFECT,
            ERROR_MESSAGES.ABSENT_FROM_BODY.TEST_VIDEO,
            ERROR_MESSAGES.INVALID_PARAM.TEST_VIDEO.INPUT,
            ERROR_MESSAGES.INVALID_PARAM.TEST_VIDEO.OUTPUT,
            ERROR_MESSAGES.INVALID_PARAM.TEST_VIDEO.DURATION,
            ERROR_MESSAGES.INVALID_PARAM.TEST_VIDEO.RESOLUTION,
            ERROR_MESSAGES.INVALID_PARAM.TEXT_EFFECT.TEXT_STRING,
            ERROR_MESSAGES.INVALID_PARAM.TEXT_EFFECT.COORDINATES,
            ERROR_MESSAGES.INVALID_PARAM.TEXT_EFFECT.FONT_SIZE,
            ERROR_MESSAGES.INVALID_PARAM.TEXT_EFFECT.FONT_COLOR,
            ERROR_MESSAGES.INVALID_PARAM.TEXT_EFFECT.START_TIME,
            ERROR_MESSAGES.INVALID_PARAM.TEXT_EFFECT.END_TIME,
        ]

        return invalidBodyErrors.includes(message) ? 400 : 500
    }
}