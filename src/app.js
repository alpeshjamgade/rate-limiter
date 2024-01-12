const express = require("express");
const config = require("config");
const path = require("path");
const app = express();
const webPort = config.get("WEB_PORT");
const AppRouter = require("./router")
const morgan = require("morgan");


const publicDir = path.join(__dirname, "../public")

app.use(morgan("tiny"));
app.use(express.static(publicDir));
app.use("/api/", AppRouter);
app.listen(webPort, () => {
    console.log(`[*] Server running on http://localhost:${webPort}`);
})

module.exports = app;