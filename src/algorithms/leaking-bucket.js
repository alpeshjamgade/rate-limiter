const ds = require("data-structures");
let tokens;

const init = () => {
    console.log("[*] Filling bucket ...");
    tokens = new ds.Queue([...Array(10).keys()]);

    setInterval(init, 10000);
}

const checkIn = () => {
    return new Promise((resolve, reject) => {
        if (!tokens.size) {
            reject("No tokens available!");
        } else {
            resolve(tokens.dequeue());
        }
    });
};

module.exports = {init: init, checkIn: checkIn};