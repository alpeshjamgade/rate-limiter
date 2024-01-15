const config = require("config");
const algorithm = config.get('ALGORITHM');
const validAlgorithms = ["fixed-window", "leaking-bucket", "sliding-window-counter", "sliding-window-log", "token-bucket"];
const RateLimiterAlgo = require(`./algorithms/${algorithm}`);

setupRateLimiter = () => {
    if (validAlgorithms.includes(algorithm.toString())) {
        console.log(`[*] Selected : ${algorithm}`);

        RateLimiterAlgo.init();

        return (`[*] Selected : ${algorithm}.`, null);
    } else {
        return (null, `[x] Please configure valid algorithm!`);
    }
}

middleware = (req, res, next) => {

    RateLimiterAlgo.checkIn()
        .then(token => {
            next();
        })
        .catch(error => {
            console.error(`Check-in failed: ${error}`);
            res.status(429).send("Too many requests!");
        });
}

module.exports = {setupRateLimiter: setupRateLimiter, middleware: middleware};