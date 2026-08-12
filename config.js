const fs = require('fs');
const path = require('path');

const defaultConfig = {
    settingA: true,
    settingB: 'default',
    settingC: 10
};

function loadConfig(customPath) {
    const configPath = customPath || path.resolve(__dirname, 'config.json');
    if (fs.existsSync(configPath)) {
        const configFile = fs.readFileSync(configPath, 'utf8');
        const userConfig = JSON.parse(configFile);
        return { ...defaultConfig, ...userConfig };
    }
    return defaultConfig;
}

module.exports = { loadConfig };