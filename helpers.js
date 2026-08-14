function safeParseJSON(jsonString) {
    try {
        const result = JSON.parse(jsonString);
        return { success: true, data: result };
    } catch (error) {
        return { success: false, error: 'Invalid JSON' };
    }
}

function validateUserInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new Error('Invalid input: must be a non-empty string');
    }
    return true;
}

function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return { success: false, error: error.message };
        });
}

module.exports = { safeParseJSON, validateUserInput, fetchData };