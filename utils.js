function handleErrors(fn) {
    return async function(...args) {
        try {
            return await fn(...args);
        } catch (error) {
            console.error('Error occurred:', error);
            throw new Error('Failed to execute' + fn.name);
        }
    };
}

async function fetchData(apiUrl) {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

const safeFetchData = handleErrors(fetchData);

export { safeFetchData };