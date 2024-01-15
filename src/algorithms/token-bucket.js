const config = require("config");
var tokens = config.get("LIMIT");
const resetInMs = config.get("RESET_TOKEN_BUCKET_IN_MS");

const init = () => {
    console.log("[*] Resetting tokens ...");
    tokens = config.get("LIMIT");

    setInterval(init, resetInMs);
}

const checkIn = () => {
    return new Promise((resolve, reject) => {
        if (!tokens) {
            reject("No tokens available!");
        } else {
            resolve(tokens--);
        }
    });
};

module.exports = {init: init, checkIn: checkIn};