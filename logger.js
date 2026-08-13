class Logger {
    constructor(name) {
        this.name = name;
        this.logs = [];
    }

    log(message) {
        const timestamp = new Date().toISOString();
        const logEntry = `${timestamp} [${this.name}]: ${message}`;
        this.logs.push(logEntry);
        console.log(logEntry);
    }

    getLogs() {
        return this.logs;
    }

    clearLogs() {
        this.logs = [];
    }

    static error(message) {
        const timestamp = new Date().toISOString();
        console.error(`${timestamp} [ERROR]: ${message}`);
    }
}

const logger = new Logger('AutomationTool');
export default logger;