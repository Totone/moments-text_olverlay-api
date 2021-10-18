import { ProcessError } from "../src/controllers/ProcessError"
import { Validator } from "../src/controllers/Validator"
import { TestVideo, TextEffect } from "../src/types"
import ERR_MSG from "../src/_config/error_messages"

describe("Validator", () => {
    describe("validateTestVideo", () => {
        const validTestVideo: TestVideo = {
            input: "input.test",
            output: "output.test",
            duration: 60,
            resolution: {
                x: 1920,
                y: 1080,
            }
        }
        const funct = Validator.validateTestVideo
        describe("input", () => {
            it("throws an error if `input` param is an empty string", () => {
                const mockTestVideo = { ...validTestVideo }
                mockTestVideo.input = ""
                try {
                    funct(mockTestVideo)
                } catch (e) {
                    expect(e).toBeInstanceOf(ProcessError)
                    if (e instanceof ProcessError) {
                        expect(e.code).toBe(400)
                        expect(e.message).toBe(ERR_MSG.INVALID_PARAM.TEST_VIDEO.INPUT)
                    }
                }
            })
        })
        describe("output", () => {
            it("throws an error if `output` param is an empty string", () => {
                const mockTestVideo = { ...validTestVideo }
                mockTestVideo.output = ""
                try {
                    funct(mockTestVideo)
                } catch (e) {
                    expect(e).toBeInstanceOf(ProcessError)
                    if (e instanceof ProcessError) {
                        expect(e.code).toBe(400)
                        expect(e.message).toBe(ERR_MSG.INVALID_PARAM.TEST_VIDEO.OUTPUT)
                    }
                }
            })
        })
        describe("duration", () => {
            it("throws an error if `duration` param equals 0 or is negative", () => {
                const mockTestVideo = { ...validTestVideo }
                mockTestVideo.duration = 0
                try {
                    funct(mockTestVideo)
                } catch (e) {
                    expect(e).toBeInstanceOf(ProcessError)
                    if (e instanceof ProcessError) {
                        expect(e.code).toBe(400)
                        expect(e.message).toBe(ERR_MSG.INVALID_PARAM.TEST_VIDEO.DURATION)
                    }
                }
            })
        })
        describe("input", () => {
            it("throws an error if `resolution.x` param is negative", () => {
                const mockTestVideo = { ...validTestVideo }
                mockTestVideo.resolution.x = -1
                try {
                    funct(mockTestVideo)
                } catch (e) {
                    expect(e).toBeInstanceOf(ProcessError)
                    if (e instanceof ProcessError) {
                        expect(e.code).toBe(400)
                        expect(e.message).toBe(ERR_MSG.INVALID_PARAM.TEST_VIDEO.RESOLUTION)
                    }
                }
            })
            it("throws an error if `resolution.y` param is negative", () => {
                const mockTestVideo = { ...validTestVideo }
                mockTestVideo.resolution.y = -1
                try {
                    funct(mockTestVideo)
                } catch (e) {
                    expect(e).toBeInstanceOf(ProcessError)
                    if (e instanceof ProcessError) {
                        expect(e.code).toBe(400)
                        expect(e.message).toBe(ERR_MSG.INVALID_PARAM.TEST_VIDEO.RESOLUTION)
                    }
                }
            })
        })
        it("returns `true` if input is valid", () => {
            const result = funct(validTestVideo)
            expect(result).toBeTruthy()
        })
    })
    describe("validateTextEffect", () => {
        const funct = Validator.validateTextEffect
        const validTestVideo: TestVideo = {
            input: "input.test",
            output: "output.test",
            duration: 60,
            resolution: {
                x: 1920,
                y: 1080,
            }
        }
        const validTextEffect: TextEffect = {
            textString: "Text effect string",
            coordinates: {
                x: 100,
                y: 200,
            },
            fontSize: 38,
            fontColor: "0x000000",
            startTime: 10,
            endTime: 30
        }
        describe("textString", () => {
            it("throws an error if `textString` param is an empty string", () => {
                const mockTextEffect = { ...validTextEffect }
                mockTextEffect.textString = ""
                try {
                    funct(mockTextEffect, validTestVideo)
                } catch (error) {
                    expect(error).toBeInstanceOf(ProcessError)
                    if (error instanceof ProcessError) {
                        expect(error.code).toBe(400)
                        expect(error.message).toBe(ERR_MSG.INVALID_PARAM.TEXT_EFFECT.TEXT_STRING)
                    }
                }
            })
        })
        describe("coordinates", () => {
            it("throws an error if `coordinates.x` param is negative", () => {
                const mockTextEffect = { ...validTextEffect }
                mockTextEffect.coordinates.x = -1
                try {
                    funct(mockTextEffect, validTestVideo)
                } catch (error) {
                    expect(error).toBeInstanceOf(ProcessError)
                    if (error instanceof ProcessError) {
                        expect(error.code).toBe(400)
                        expect(error.message).toBe(ERR_MSG.INVALID_PARAM.TEXT_EFFECT.COORDINATES)
                    }
                }
            })
            it("throws an error if `coordinates.y` param is negative", () => {
                const mockTextEffect = { ...validTextEffect }
                mockTextEffect.coordinates.y = -1
                try {
                    funct(mockTextEffect, validTestVideo)
                } catch (error) {
                    expect(error).toBeInstanceOf(ProcessError)
                    if (error instanceof ProcessError) {
                        expect(error.code).toBe(400)
                        expect(error.message).toBe(ERR_MSG.INVALID_PARAM.TEXT_EFFECT.COORDINATES)
                    }
                }
            })
            it("throws an error if `coordinates.x` param is greater than video x resolution", () => {
                const mockTextEffect = { ...validTextEffect }
                mockTextEffect.coordinates.x = validTestVideo.resolution.x + 1
                try {
                    funct(mockTextEffect, validTestVideo)
                } catch (error) {
                    expect(error).toBeInstanceOf(ProcessError)
                    if (error instanceof ProcessError) {
                        expect(error.code).toBe(400)
                        expect(error.message).toBe(ERR_MSG.INVALID_PARAM.TEXT_EFFECT.COORDINATES)
                    }
                }
            })
            it("throws an error if `coordinates.y` param is greater than video y resolution", () => {
                const mockTextEffect = { ...validTextEffect }
                mockTextEffect.coordinates.y = validTestVideo.resolution.y + 1
                try {
                    funct(mockTextEffect, validTestVideo)
                } catch (error) {
                    expect(error).toBeInstanceOf(ProcessError)
                    if (error instanceof ProcessError) {
                        expect(error.code).toBe(400)
                        expect(error.message).toBe(ERR_MSG.INVALID_PARAM.TEXT_EFFECT.COORDINATES)
                    }
                }
            })
        })
        describe("fontSize", () => {
            it("throws an error if `fontSize` param is negative", () => {
                const mockTextEffect = { ...validTextEffect }
                mockTextEffect.fontSize = -1
                try {
                    funct(mockTextEffect, validTestVideo)
                } catch (error) {
                    expect(error).toBeInstanceOf(ProcessError)
                    if (error instanceof ProcessError) {
                        expect(error.code).toBe(400)
                        expect(error.message).toBe(ERR_MSG.INVALID_PARAM.TEXT_EFFECT.FONT_SIZE)
                    }
                }
            })
        })
        describe("fontColor", () => {
            it("throws an error if `fontColor` param is an empty string", () => {
                const mockTextEffect = { ...validTextEffect }
                mockTextEffect.fontColor = ""
                try {
                    funct(mockTextEffect, validTestVideo)
                } catch (error) {
                    expect(error).toBeInstanceOf(ProcessError)
                    if (error instanceof ProcessError) {
                        expect(error.code).toBe(400)
                        expect(error.message).toBe(ERR_MSG.INVALID_PARAM.TEXT_EFFECT.FONT_COLOR)
                    }
                }
            })
        })
        describe("startTtime & endTime", () => {
            it("throws an error if `startTime` param is negative", () => {
                const mockTextEffect = { ...validTextEffect }
                mockTextEffect.startTime = -1
                try {
                    funct(mockTextEffect, validTestVideo)
                } catch (error) {
                    expect(error).toBeInstanceOf(ProcessError)
                    if (error instanceof ProcessError) {
                        expect(error.code).toBe(400)
                        expect(error.message).toBe(ERR_MSG.INVALID_PARAM.TEXT_EFFECT.START_TIME)
                    }
                }
            })
            it("throws an error if `startTime` param is greater than video duration", () => {
                const mockTextEffect = { ...validTextEffect }
                mockTextEffect.startTime = validTestVideo.duration + 1
                try {
                    funct(mockTextEffect, validTestVideo)
                } catch (error) {
                    expect(error).toBeInstanceOf(ProcessError)
                    if (error instanceof ProcessError) {
                        expect(error.code).toBe(400)
                        expect(error.message).toBe(ERR_MSG.INVALID_PARAM.TEXT_EFFECT.START_TIME)
                    }
                }
            })
            it("throws an error if `endTime` param is negative", () => {
                const mockTextEffect = { ...validTextEffect }
                mockTextEffect.endTime = -1
                try {
                    funct(mockTextEffect, validTestVideo)
                } catch (error) {
                    expect(error).toBeInstanceOf(ProcessError)
                    if (error instanceof ProcessError) {
                        expect(error.code).toBe(400)
                        expect(error.message).toBe(ERR_MSG.INVALID_PARAM.TEXT_EFFECT.END_TIME)
                    }
                }
            })
            it("throws an error if `endTime` param is greater than video duration", () => {
                const mockTextEffect = { ...validTextEffect }
                mockTextEffect.endTime = validTestVideo.duration + 1
                try {
                    funct(mockTextEffect, validTestVideo)
                } catch (error) {
                    expect(error).toBeInstanceOf(ProcessError)
                    if (error instanceof ProcessError) {
                        expect(error.code).toBe(400)
                        expect(error.message).toBe(ERR_MSG.INVALID_PARAM.TEXT_EFFECT.END_TIME)
                    }
                }
            })
        })
        it("returns `true` if input is valid", () => {
            const result = funct(validTextEffect, validTestVideo)
            expect(result).toBeTruthy()
        })
    })
})