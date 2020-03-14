const CONSTANTS = {
    "dev": {
        API_URL: "http://www.omdbapi.com/",
        API_KEY: "392361d1"
    },

    "prd": {
        API_URL: "http://www.omdbapi.com/",
        API_KEY: ""
    }
};

export default CONSTANTS[ENV];