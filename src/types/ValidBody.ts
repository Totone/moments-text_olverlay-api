import { TestVideo } from "./TestVideo"
import { TextEffect } from "./TextEffect"
export type ValidBody = ValidTextEffectBody | ValidVideoEffectBody

export type ValidVideoEffectBody = {
    testVideo: TextEffect
    videoEffect: any
}

export type ValidTextEffectBody = {
    testVideo: TestVideo
    textEffect: TextEffect
}