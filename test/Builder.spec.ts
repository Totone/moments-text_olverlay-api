import { Builder } from "../src/controllers/Builder";
import { TextEffect, TestVideo } from "../src/types";

describe("Builder", () => {
    describe("textEffect", () => {
        describe("returns a valid object", () => {
            const validTestVideo: TestVideo = {
                input: "input.test",
                output: "output.test",
                duration: 50,
                resolution: { x: 21, y: 42 },
            }
            const validTextEffect: TextEffect = {
                textString: "example",
                coordinates: { x: 42, y: 50 },
                fontSize: 56,
                fontColor: "0x000000",
                startTime: 10,
                endTime: 50,
            }
            const funct = Builder.textEffect
            it("returns an object with 'FFmpeg command string' key", () => {
                const result = funct(validTestVideo, validTextEffect)
                const property = "FFmpeg command string"
                expect(result).toHaveProperty(property)
                expect(typeof result[property]).toBe("string")
            })
            test("output is a valid FFmpeg command", () => {
                const result = funct(validTestVideo, validTextEffect)
                const property = "FFmpeg command string"
                const command = result[property]
                expect(command.startsWith("ffmpeg")).toBeTruthy()
            })
        })
    })
})