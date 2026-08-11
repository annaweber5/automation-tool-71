const fs = require('fs');

class Logger {
    constructor(logFile) {
        this.logFile = logFile;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `${timestamp} - ${message}\n`;
        fs.appendFileSync(this.logFile, logMessage);
    }

    error(message) {
        this.log(`ERROR: ${message}`);
    }

    info(message) {
        this.log(`INFO: ${message}`);
    }

    warn(message) {
        this.log(`WARN: ${message}`);
    }
}

module.exports = Logger;
