import { Dim2 } from "./Dim2"

export interface TextEffect {
    textString: string
    coordinates: Dim2
    fontSize: number
    fontColor: string
    startTime: number
    endTime: number
}