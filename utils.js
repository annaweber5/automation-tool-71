const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const defaultShouldRetry = error => {
  if (error.status) {
    return error.status >= 500 || error.status === 429;
  }
  return true;
};

async function retryNetworkOperation(operation, options = {}) {
  const maxRetries = options.maxRetries || 3;
  const initialDelay = options.initialDelay || 1000;
  const maxDelay = options.maxDelay || 30000;
  const backoffFactor = options.backoffFactor || 2;
  const shouldRetry = options.shouldRetry || defaultShouldRetry;
  let delay = initialDelay;
  let lastError;
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (attempt === maxRetries - 1 || !shouldRetry(error)) {
        throw error;
      }
      await sleep(delay);
      delay = Math.min(delay * backoffFactor, maxDelay);
    }
  }
  throw lastError;
}

async function retryFetch(url, options = {}, retryOptions = {}) {
  const operation = async () => {
    const response = await fetch(url, options);
    if (!response.ok) {
      const err = new Error(`Request failed with status ${response.status}`);
      err.status = response.status;
      err.response = response;
      throw err;
    }
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    }
    return response.text();
  };
  return retryNetworkOperation(operation, retryOptions);
}

module.exports = { retryNetworkOperation, retryFetch, sleep };