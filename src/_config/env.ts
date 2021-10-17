/**
 * * Manages environment variables to be fetched by app components
 */
import dotenv from "dotenv"
dotenv.config()

export const PORT: number = setPort()

function setPort(defaultPort = 2803): number {
    const input: string | undefined = process.env.PORT
    if (input === undefined) return defaultPort
    else {
        const parsed: number = parseInt(input, 10)
        return isNaN(parsed) ? defaultPort : parsed
    }
}