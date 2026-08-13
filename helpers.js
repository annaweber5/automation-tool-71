function cleanString(str) {
    return str.trim().replace(/\s+/g, ' ');
}

function generateUniqueId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function objectClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export { cleanString, generateUniqueId, formatDate, delay, objectClone };