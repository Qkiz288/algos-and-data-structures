const hash = require('./Hash').hash;
const Entry = require('./Entry').Entry;

module.exports.HashTable = class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    hash(key) {
        return hash(key, this.keyMap.length);
    }

    set(key, value) {
        const hashedKey = this.hash(key);
        const entry = new Entry(key, value);
        if (!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = new Array();
        }
        this.keyMap[hashedKey].push(entry);
    }

    get(key) {
        const hashedKey = this.hash(key);
        const bucket = this.keyMap[hashedKey];
        if (!bucket) {
            return undefined;
        }
        return bucket.find(entry => entry.key === key);
    }

    containsKey(key) {
        const hashedKey = this.hash(key);
        const result = this.keyMap[hashedKey].filter(entry => entry.key === key);
        return result > 0;
    }
}