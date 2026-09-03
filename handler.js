const validateInput = (data) => {
  if (!data || typeof data !== 'object') return false;
  return typeof data.instanceId === 'string' && Number.isInteger(data.delay);
};

const processQueue = (queue) => {
  for (const item of queue) {
    try {
      if (!validateInput(item)) {
        console.error(`Invalid input schema for: ${JSON.stringify(item)}`);
        continue;
      }
      executeAction(item);
    } catch (err) {
      console.error(`Execution failed: ${err.message}`);
    }
  }
};

const executeAction = (task) => {
  const { instanceId, delay } = task;
  setTimeout(() => {
    console.log(`Processing ${instanceId} after ${delay}ms`);
  }, delay);
};

module.exports = { processQueue };