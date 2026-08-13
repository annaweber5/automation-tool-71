const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

const objectToArray = (obj) => Object.keys(obj).map(key => ({ key, value: obj[key] }));

const arrayToObject = (array, keyField) => {
    return array.reduce((acc, item) => {
        acc[item[keyField]] = item;
        return acc;
    }, {});
};

const isEmptyObject = (obj) => Object.keys(obj).length === 0;

const mergeObjects = (target, source) => {
    return { ...target, ...source };
};

const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

export { delay, fetchJson, objectToArray, arrayToObject, isEmptyObject, mergeObjects, debounce };