function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function mergeObjects(target, source) {
    return Object.assign({}, target, source);
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export { delay, randomInt, clamp, deepClone, mergeObjects, isEmpty };