import { Manager } from "../src/controllers/Manager"
import { ProcessError } from "../src/controllers/ProcessError"
import ERR_MSG from "../src/_config/error_messages"

describe("Manager", () => {
    describe("validateBody", () => {
        const funct = Manager["validateTextEffectBody"]

        describe("Input parameters for 'text-body' effect", () => {
            const validBody = {
                testVideo: {
                    input: "input.test",
                    output: "output.test",
                    duration: "50",
                    resolution: { x: "21", y: "42" },
                },
                textEffect: {
                    textString: "example",
                    coordinates: { x: "42", y: "50" },
                    fontSize: "56",
                    fontColor: "color",
                    startTime: "10",
                    endTime: "50",
                }
            }
            describe("body does not miss a member", () => {
                it("throws an error if testVideo is missing from input params", () => {
                    const mockBody = { textEffect: {} }
                    try {
                        funct("text-effect", mockBody)
                    } catch (err) {
                        expect(err).toBeInstanceOf(ProcessError)
                        if (err instanceof ProcessError) {
                            expect(err.code).toBe(400)
                            expect(err.message).toBe(ERR_MSG.ABSENT_FROM_BODY.TEST_VIDEO)
                        }
                    }
                })
                it("throws an error if textEffect is missing from input params", () => {
                    const mockBody = { testVideo: {} }
                    try {
                        funct("text-effect", mockBody)
                    } catch (err) {
                        expect(err).toBeInstanceOf(ProcessError)
                        if (err instanceof ProcessError) {
                            expect(err.code).toBe(400)
                            expect(err.message).toBe(ERR_MSG.ABSENT_FROM_BODY.TEXT_EFFECT)
                        }
                    }
                })
            })
            describe("testVideo has valid types", () => {
                it("throws an error if 'input' is missing from testVideo", () => {
                    const mockBody = { ...validBody } as any
                    delete mockBody.testVideo.input
                    try {
                        funct("text-effect", mockBody)
                    } catch (error) {
                        expect(error).toBeInstanceOf(ProcessError)
                    }
                })
                it("throws an error if 'output' is missing from testVideo", () => {
                    const mockBody = { ...validBody } as any
                    delete mockBody.testVideo.output
                    try {
                        funct("text-effect", mockBody)
                    } catch (error) {
                        expect(error).toBeInstanceOf(ProcessError)
                    }
                })
                it("throws an error if 'duration' is missing from testVideo", () => {
                    const mockBody = { ...validBody } as any
                    delete mockBody.testVideo.duration
                    try {
                        funct("text-effect", mockBody)
                    } catch (error) {
                        expect(error).toBeInstanceOf(ProcessError)
                    }
                })
                it("throws an error if 'resolution' is missing from testVideo", () => {
                    const mockBody = { ...validBody } as any
                    delete mockBody.testVideo.resolution
                    try {
                        funct("text-effect", mockBody)
                    } catch (error) {
                        expect(error).toBeInstanceOf(ProcessError)
                    }
                })
                it("returns a valid TestVideo object if all params are set", () => {
                    const result = funct("text-effect", { ...validBody })

                    expect(typeof result.testVideo.input).toBe("string")
                    expect(typeof result.testVideo.output).toBe("string")
                    expect(typeof result.testVideo.duration).toBe("number")
                    expect(typeof result.testVideo.resolution.x).toBe("number")
                    expect(typeof result.testVideo.resolution.y).toBe("number")
                })
            })
            describe("textEffect has valid types", () => {
                it("throws an error if 'textString' is missing from textEffect", () => {
                    const mockBody = { ...validBody } as any
                    delete mockBody.textEffect.textString
                    try {
                        funct("text-effect", mockBody)
                    } catch (error) {
                        expect(error).toBeInstanceOf(ProcessError)
                    }
                })
                it("throws an error if 'coordinates' is missing from textEffect", () => {
                    const mockBody = { ...validBody } as any
                    delete mockBody.textEffect.coordinates
                    try {
                        funct("text-effect", mockBody)
                    } catch (error) {
                        expect(error).toBeInstanceOf(ProcessError)
                    }
                })
                it("throws an error if 'fontSize' is missing from textEffect", () => {
                    const mockBody = { ...validBody } as any
                    delete mockBody.textEffect.fontSize
                    try {
                        funct("text-effect", mockBody)
                    } catch (error) {
                        expect(error).toBeInstanceOf(ProcessError)
                    }
                })
                it("throws an error if 'fontColor' is missing from textEffect", () => {
                    const mockBody = { ...validBody } as any
                    delete mockBody.textEffect.fontColor
                    try {
                        funct("text-effect", mockBody)
                    } catch (error) {
                        expect(error).toBeInstanceOf(ProcessError)
                    }
                })
                it("throws an error if 'startTime' is missing from textEffect", () => {
                    const mockBody = { ...validBody } as any
                    delete mockBody.textEffect.startTime
                    try {
                        funct("text-effect", mockBody)
                    } catch (error) {
                        expect(error).toBeInstanceOf(ProcessError)
                    }
                })
                it("throws an error if 'endTime' is missing from textEffect", () => {
                    const mockBody = { ...validBody } as any
                    delete mockBody.textEffect.endTime
                    try {
                        funct("text-effect", mockBody)
                    } catch (error) {
                        expect(error).toBeInstanceOf(ProcessError)
                    }
                })
                it("returns a valid TextEffect object if all params are set", () => {
                    const result = funct("text-effect", { ...validBody })

                    expect(typeof result.textEffect.textString).toBe("string")
                    expect(typeof result.textEffect.coordinates.x).toBe("number")
                    expect(typeof result.textEffect.coordinates.y).toBe("number")
                    expect(typeof result.textEffect.fontSize).toBe("number")
                    expect(typeof result.textEffect.fontColor).toBe("string")
                    expect(typeof result.textEffect.startTime).toBe("number")
                    expect(typeof result.textEffect.endTime).toBe("number")
                })
            })
        })
    })
})