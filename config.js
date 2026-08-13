const fs = require('fs');
const path = require('path');

const defaultConfig = {
    host: 'localhost',
    port: 3000,
    username: 'user',
    password: 'pass',
};

function loadConfig(filePath) {
    const configPath = path.resolve(filePath);
    if (fs.existsSync(configPath)) {
        const rawData = fs.readFileSync(configPath);
        const userConfig = JSON.parse(rawData);
        return { ...defaultConfig, ...userConfig };
    }
    return defaultConfig;
}

module.exports = { loadConfig };