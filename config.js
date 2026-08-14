const fs = require('fs');
const path = require('path');

const defaultConfig = {
    host: 'localhost',
    port: 3000,
    db: 'mongodb://localhost:27017/mydb',
    logLevel: 'info'
};

function loadConfig(configPath) {
    const fullPath = path.resolve(configPath);
    if (fs.existsSync(fullPath)) {
        const userConfig = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
        return { ...defaultConfig, ...userConfig };
    }
    return defaultConfig;
}

module.exports = { loadConfig };