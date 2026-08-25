const fs = require('fs');

function loadConfig(filePath) {
  if (!filePath || typeof filePath !== 'string') {
    throw new Error('File path must be a non-empty string');
  }

  let fileContent;
  try {
    fileContent = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Config file not found: ' + filePath);
    }
    throw new Error('Failed to read config file: ' + err.message);
  }

  if (fileContent.trim().length === 0) {
    throw new Error('Config file is empty');
  }

  let config;
  try {
    config = JSON.parse(fileContent);
  } catch (err) {
    throw new Error('Invalid JSON in config file');
  }

  if (typeof config !== 'object' || config === null || Array.isArray(config)) {
    throw new Error('Config must be a JSON object');
  }

  const requiredFields = ['robloxCookie', 'gameId', 'maxBots', 'retryDelay'];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in config)) {
      throw new Error('Missing required field: ' + field);
    }
  }

  if (typeof config.robloxCookie !== 'string' || config.robloxCookie.length < 10) {
    throw new Error('Invalid robloxCookie');
  }

  if (typeof config.gameId !== 'string' || config.gameId.length === 0) {
    throw new Error('Invalid gameId');
  }

  if (typeof config.maxBots !== 'number' || config.maxBots < 1 || config.maxBots > 100) {
    throw new Error('maxBots must be between 1 and 100');
  }

  if (typeof config.retryDelay !== 'number' || config.retryDelay < 100 || config.retryDelay > 10000) {
    throw new Error('retryDelay must be between 100 and 10000');
  }

  if (config.logLevel !== undefined) {
    const validLevels = ['debug', 'info', 'warn', 'error'];
    if (typeof config.logLevel !== 'string' || !validLevels.includes(config.logLevel)) {
      throw new Error('Invalid logLevel');
    }
  }

  return config;
}

module.exports = { loadConfig };