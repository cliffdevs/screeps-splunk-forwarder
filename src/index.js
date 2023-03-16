const { Logger } = require("splunk-logger");
const { ScreepsAPI } = require("screeps-api");

const readEnv = val => {
    const read = process.env[val];
    if (read && read.length > 0) {
        return read;
    } else return undefined;
}


const api = new ScreepsAPI({
    "email": readEnv("SCREEPS_EMAIL"),
    "password": readEnv("SCREEPS_PASSWORD"),
    "token": readEnv("SCREEPS_TOKEN"),
    "protocol": readEnv("SCREEPS_PROTOCOL") || "https",
    "hostname":readEnv("SCREEPS_HOST") || "screeps.com",
    "port": Number(readEnv("SCREEPS_PORT") || "443"),
    "path": readEnv("SCREEPS_PATH") || "/"
});

const splunkLogger = new Logger({
    token: readEnv("SPLUNK_TOKEN"),
    batchInterval: 1000,
    maxBatchCount: 10,
    maxBatchSize: 1024 // 1kb
});

const logInfo = 'true' === (process.env.INFO_LOGGING.toLocaleLowerCase())

api.socket.connect();
api.socket.subscribe("console", event => {
    event.data.messages.log.forEach(l => {
        if (logInfo) {
            console.log(l);
        }
        
        splunkLogger.send({
            message: l
        }, (err, resp, body) => {
            if (err) {
                console.error('Unable to send logs to splunk', err);
            }
        })
    });
});
