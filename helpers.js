function isValidInput(input) {
  if (typeof input !== 'string') {
    return false;
  }
  const trimmed = input.trim();
  if (trimmed.length < 3 || trimmed.length > 20) {
    return false;
  }
  const regex = /^[a-zA-Z0-9_]+$/;
  return regex.test(trimmed);
}
function sanitizeInput(input) {
  return input.trim().toLowerCase();
}
function processItem(item) {
  const sanitized = sanitizeInput(item);
  return { username: sanitized, processedAt: new Date().toISOString(), valid: true };
}
function mainProcessingLoop(rawInputs) {
  const results = [];
  for (let i = 0; i < rawInputs.length; i++) {
    const input = rawInputs[i];
    if (isValidInput(input)) {
      const processed = processItem(input);
      results.push(processed);
    } else {
      results.push({ username: input, processedAt: new Date().toISOString(), valid: false });
    }
  }
  return results;
}
function executeAutomation() {
  const inputs = ['RobloxUser1', 'bad input!', 'user_2', 'tooLongUsernameThatExceedsLimit', 'Valid_Name'];
  const output = mainProcessingLoop(inputs);
  console.log(JSON.stringify(output, null, 2));
  return output;
}
executeAutomation();