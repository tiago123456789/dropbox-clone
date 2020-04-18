const CONSTANTS = {
    "dev": {
        TOASTR_OPTIONS: {
            timeOut: 5000
        },
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
        TOASTR_OPTIONS: {
            timeOut: 5000
        },
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