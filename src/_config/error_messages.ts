export default {
    ABSENT_FROM_BODY: {
        TEXT_EFFECT: "'textEffect' param is absent from request body",
        TEST_VIDEO: "'testVideo' param is absent from request body",
    },
    INVALID_PARAM: {
        TEST_VIDEO: {
            INPUT: "Invalid Video Input",
            OUTPUT: "Invalid Video Output",
            DURATION: "Invalid Video Duration",
            RESOLUTION: "Invalid Video Resolution",
        },
        TEXT_EFFECT: {
            TEXT_STRING: "Invalid Text String",
            COORDINATES: "Invalid X,Y Coordinate",
            FONT_SIZE: "Invalid Font Size",
            FONT_COLOR: "Invalid Font Color",
            START_TIME: "Invalid Start Time",
            END_TIME: "Invalid End Time",
        },
    }
}