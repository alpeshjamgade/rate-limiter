const express = require('express')

const router = express.Router()
const {spawn} = require('child_process');

let artilleryProcess;

router.get('/ping', (req, res) => {
    res.status(200).send("pong")
});

router.post('/start', (req, res) => {

    if (!artilleryProcess) {
        artilleryProcess = spawn('artillery', ['run', 'artillery.yml']);

        artilleryProcess.stdout.on('data', (data) => {
            console.log(`Artillery Output: ${data}`);
        });

        artilleryProcess.stderr.on('data', (data) => {
            console.error(`Artillery Error: ${data}`);
        });

        artilleryProcess.on('close', (code) => {
            console.log(`Artillery process exited with code ${code}`);
            artilleryProcess = null;
        });

        res.status(201).send("Artillery started!");
    } else {
        res.status(400).send("Artillery is already running.");
    }
});

router.post('/stop', (req, res) => {
    if (artilleryProcess) {
        artilleryProcess.kill();

        res.status(201).send("Artillery stopped!");
    } else {
        res.status(400).send("Artillery is not running.");
    }
});


function getCurrentTimestamp() {
    return new Date().toISOString();
}

module.exports = router