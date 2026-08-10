export function formatData(data) {
    return data.map(item => ({
        id: item.id,
        name: item.name.trim(),
        value: parseFloat(item.value) || 0
    }));
}

export function filterValidData(data) {
    return data.filter(item => item.value > 0);
}

export async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

export function aggregateData(data) {
    return data.reduce((acc, item) => acc + item.value, 0);
}

export function sortData(data, key) {
    return data.sort((a, b) => a[key] > b[key] ? 1 : -1);
}