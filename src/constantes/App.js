const CONSTANTS = {
    "dev": {
        LOCALSTORAGE_KEY: {
            ID: "id"
        },
        TYPE_FILES: {
            IMAGE: [
                "image/jpeg",
                "image/png"
            ],
            PDF: [
               "application/pdf"
            ],
            VIDEO: [
                "video/mp4"
            ],
            AUDIO: [
                "audio/midi", "audio/mpeg", "audio/webm",
                "audio/ogg", "audio/wav"
            ]
        }
    },

    "prd": {
        LOCALSTORAGE_KEY: {
            ID: "id"
        },
        TYPE_FILES: {
            IMAGE: [
                "image/jpeg",
                "image/png"
            ],
            PDF: [
               "application/pdf"
            ],
            VIDEO: [
                "video/mp4"
            ],
            AUDIO: [
                "audio/midi", "audio/mpeg", "audio/webm",
                "audio/ogg", "audio/wav"
            ]
        }
    }
};

export default CONSTANTS[ENV];