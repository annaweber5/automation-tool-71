const isObject = (obj) => obj !== null && typeof obj === 'object';
const deepClone = (obj) => {
    if (!isObject(obj)) return obj;
    return Array.isArray(obj) ? obj.map(deepClone) : Object.keys(obj).reduce((acc, key) => {
        acc[key] = deepClone(obj[key]);
        return acc;
    }, {});
};
const mergeObjects = (target, source) => {
    if (!isObject(target) || !isObject(source)) return target;
    Object.keys(source).forEach(key => {
        target[key] = isObject(source[key]) ? mergeObjects(target[key] || {}, source[key]) : source[key];
    });
    return target;
};
const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};
export { isObject, deepClone, mergeObjects, debounce };