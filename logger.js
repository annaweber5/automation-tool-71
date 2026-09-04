const LOG_LEVELS = { DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3 };
let minLevel = LOG_LEVELS.INFO;

const buffer = [];
const BUFFER_LIMIT = 100;

const flush = () => {
  if (buffer.length === 0) return;
  console.log(buffer.join('\n'));
  buffer.length = 0;
};

const log = (level, message) => {
  if (LOG_LEVELS[level] < minLevel) return;

  const entry = `[${new Date().toISOString()}] [${level}] ${message}`;
  buffer.push(entry);

  if (buffer.length >= BUFFER_LIMIT) {
    flush();
  }
};

export const logger = {
  setLevel: (level) => { minLevel = LOG_LEVELS[level] || 1; },
  debug: (msg) => log('DEBUG', msg),
  info: (msg) => log('INFO', msg),
  warn: (msg) => log('WARN', msg),
  error: (msg) => log('ERROR', msg),
  flush
};