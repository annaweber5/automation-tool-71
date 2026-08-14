const fetch = require('node-fetch');

const RETRY_LIMIT = 3;
const RETRY_DELAY = 1000;

async function fetchWithRetry(url, options = {}, retries = RETRY_LIMIT) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    if (retries === 0) {
      throw error;
    }
    await new Promise(res => setTimeout(res, RETRY_DELAY));
    return fetchWithRetry(url, options, retries - 1);
  }
}

module.exports = { fetchWithRetry };