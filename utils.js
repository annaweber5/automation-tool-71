const axios = require('axios');

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

async function fetchWithRetry(url) {
    let attempts = 0;
    while (attempts < MAX_RETRIES) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            attempts++;
            if (attempts >= MAX_RETRIES) {
                throw new Error(`Failed after ${MAX_RETRIES} attempts: ${error.message}`);
            }
            await new Promise(res => setTimeout(res, RETRY_DELAY));
        }
    }
}

module.exports = { fetchWithRetry };