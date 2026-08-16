function isValidInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        return false;
    }
    return true;
}

function processInput(input) {
    if (isValidInput(input)) {
        // Main processing logic here
        console.log('Processing: ' + input);
    } else {
        console.error('Invalid input');
    }
}

const inputs = ['Hello', '', 'World', 123];
inputs.forEach(processInput);