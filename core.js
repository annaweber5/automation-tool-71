function processInput(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input.trim() === '') {
        throw new Error('Input cannot be empty');
    }
    return input;
}

function mainLoop(inputs) {
    const results = [];
    inputs.forEach(input => {
        try {
            const processed = processInput(input);
            results.push(processed);
        } catch (error) {
            console.error(error.message);
        }
    });
    return results;
}

const inputs = [' valid input ', '', 123, 'another valid input'];
console.log(mainLoop(inputs));