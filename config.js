const fs = require('fs');
const path = require('path');

const defaults = {
  port: 8080,
  retryLimit: 3,
  logLevel: 'info',
  headless: true
};

const loadConfig = (filePath = './config.json') => {
  try {
    if (!fs.existsSync(filePath)) return defaults;
    const data = fs.readFileSync(filePath, 'utf8');
    const config = JSON.parse(data);
    return { ...defaults, ...config };
  } catch (err) {
    console.error('Configuration load failure:', err.message);
    return defaults;
  }
};

module.exports = { loadConfig };