import { ParsedResponse, TestVideo, TextEffect } from "../types";

/**
 * * Computes an available response for received request
 */
export class Builder {
    public static textEffect(video: TestVideo, text: TextEffect): ParsedResponse {
        const command = `ffmpeg -i ${video.input}`
        const timeInterval = `between(t,${text.startTime.toFixed(1)},${text.endTime.toFixed(1)})`
        const position = `x=${text.coordinates.x}:y=${text.coordinates.y}`
        const drawText = [
            `enable='${timeInterval}'`,
            `text='${text.textString}'`,
            `fontcolor=${text.fontColor}`,
            `fontsize=${text.fontSize}`,
            position
        ]
        return {
            "FFmpeg command string": `${command} -vf drawtext="${drawText.join(":")}" ${video.output}`
        }
    }
}