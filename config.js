const fs = require('fs');
const path = require('path');

const defaultConfig = {
    apiUrl: 'https://api.example.com',
    retryAttempts: 3,
    timeout: 5000,
    features: {
        logging: true,
        debugging: false
    }
};

function loadConfig(customConfigPath) {
    const configPath = customConfigPath || path.join(__dirname, 'config.json');
    if (fs.existsSync(configPath)) {
        const customConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        return { ...defaultConfig, ...customConfig };
    }
    return defaultConfig;
}

module.exports = loadConfig;