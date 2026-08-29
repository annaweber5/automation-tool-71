const validateInput = (input) => {
  if (typeof input !== 'object' || input === null) {
    return false;
  }
  if (!input.hasOwnProperty('command') || !input.hasOwnProperty('target')) {
    return false;
  }
  const { command, target } = input;
  if (typeof command !== 'string' || command.length === 0) {
    return false;
  }
  if (typeof target !== 'string' || target.length < 5) {
    return false;
  }
  const validCommands = ['teleport', 'click', 'type'];
  if (!validCommands.includes(command)) {
    return false;
  }
  return true;
};

const processInput = (input) => {
  const { command, target } = input;
  switch (command) {
    case 'teleport':
      return `Teleporting to ${target} in Roblox`;
    case 'click':
      return `Clicking on ${target}`;
    case 'type':
      return `Typing ${target} in chat`;
    default:
      return 'Unknown action';
  }
};

const mainProcessingLoop = (inputs) => {
  const results = [];
  let index = 0;
  while (index < inputs.length) {
    const currentInput = inputs[index];
    if (!validateInput(currentInput)) {
      console.log(`Skipping invalid input at index ${index}`);
      index++;
      continue;
    }
    const result = processInput(currentInput);
    results.push(result);
    index++;
  }
  return results;
};

const robloxInputs = [
  { command: 'teleport', target: 'RobloxPlace123' },
  { command: 'invalidcmd', target: 'place' },
  { command: 'click', target: 'Button12345' },
  { command: 'type', target: 'Hello' },
  { command: 'teleport', target: 'ab' }
];

const processed = mainProcessingLoop(robloxInputs);
console.log('Automation results:', processed);