// src/db/database.js
const db = {};

function saveData(key, value) {
    db[key] = value;
}

function getData(key) {
    return db[key];
}

module.exports = { saveData, getData };
