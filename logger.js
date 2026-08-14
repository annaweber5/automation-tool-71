const fs = require('fs');
const path = require('path');
const { createLogger, format, transports } = require('winston');

const logDirectory = path.join(__dirname, 'logs');
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

const options = {
    file: {
        level: 'info',
        filename: path.join(logDirectory, 'combined-%DATE%.log'),
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        format: format.combine(
            format.timestamp(),
            format.json()
        )
    },
    console: {
        level: 'debug',
        format: format.combine(
            format.colorize(),
            format.simple()
        )
    }
};

const logger = createLogger({
    transports: [
        new transports.File(options.file),
        new transports.Console(options.console)
    ]
});

module.exports = logger;