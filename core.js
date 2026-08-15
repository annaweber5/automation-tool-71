const validateInput = (input) => {
    if (typeof input !== 'string') return false;
    const validInputs = ['start', 'stop', 'pause', 'reset'];
    return validInputs.includes(input);
};

const mainLoop = () => {
    const inputs = ['start', 'next', 'pause', 'stop'];

    inputs.forEach(input => {
        if (validateInput(input)) {
            console.log(
                `Processing command: ${input}`
            );
        } else {
            console.error(`Invalid input: ${input}`);
        }
    });
};

mainLoop();