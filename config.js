const fs = require('fs');
const path = require('path');

const defaultConfig = {
    baseURL: 'https://api.roblox.com',
    timeout: 5000,
    retryAttempts: 3,
    logLevel: 'info'
};

function loadConfig(filePath) {
    const fullPath = path.resolve(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
        return defaultConfig;
    }
    const userConfig = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    return { ...defaultConfig, ...userConfig };
}

module.exports = { loadConfig };