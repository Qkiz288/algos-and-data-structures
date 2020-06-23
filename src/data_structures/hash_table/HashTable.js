const hash = require('./Hash').hash;

module.exports.HashTable = class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    hash(key) {
        return hash(key, this.keyMap.length);
    }

    set(key, value) {
        const hashedKey = this.hash(key);
        const entry = [key, value];
        if (!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = new Array();
        }
        this.keyMap[hashedKey].push(entry);
    }
}