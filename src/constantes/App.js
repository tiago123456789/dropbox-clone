const CONSTANTS = {
    "dev": {
        API_URL: "http://www.omdbapi.com/",
        API_KEY: "392361d1",
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
        API_URL: "http://www.omdbapi.com/",
        API_KEY: "",
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