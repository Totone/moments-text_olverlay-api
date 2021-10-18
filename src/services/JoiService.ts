import Joi from "joi"
import { TestVideo, TextEffect } from "../types";

/**
 * JS object validator
 */
export class JoiService {
    public static videoIO = (io: string) => Joi.string().min(1).required().validate(io)
    public static videoDuration = (d: number) => Joi.number().integer().min(0).required().validate(d)
    public static videoResolution = (r: TestVideo["resolution"]) => Joi.object({
        x: Joi.number().integer().min(0).required(),
        y: Joi.number().integer().min(0).required(),
    }).validate(r)

    public static textEffectString = (t: string) => Joi.string().min(1).required().validate(t)
    public static textFontSize = (f: number) => Joi.number().integer().min(0).required().validate(f)
    public static textFontColor = (t: string) => Joi.string().min(1).required().validate(t)
    public static textStartTime = (
        d: number,
        vDuration: number
    ) => Joi.number().min(0).max(vDuration).required().validate(d)
    public static textEndTime = (
        d: number,
        min: number,
        vDuration: number
    ) => Joi.number().min(min).max(vDuration).required().validate(d)
    public static textCoordinates = (
        coords: TextEffect["coordinates"],
        res: TestVideo["resolution"]
    ) => Joi.object({
        x: Joi.number().min(0).max(res.x).required(),
        y: Joi.number().min(0).max(res.y).required(),
    }).validate(coords)
}