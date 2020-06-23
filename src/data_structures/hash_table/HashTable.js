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
        } else if (this.containsKey(key)) {
            this.removeKey(key);
        }
        this.keyMap[hashedKey].push(entry);
    }

    get(key) {
        const hashedKey = this.hash(key);
        const bucket = this.keyMap[hashedKey];
        if (!bucket) {
            return undefined;
        }
        return bucket.find(entry => entry.key === key).value;
    }

    containsKey(key) {
        const hashedKey = this.hash(key);
        const result = this.keyMap[hashedKey].filter(entry => entry.key === key);
        return result.length > 0;
    }

    removeKey(key) {
        const hashedKey = this.hash(key);
        const index = this.keyMap[hashedKey].findIndex(entry => entry.key === key);
        this.keyMap[hashedKey].splice(index, 1);
    }

    keys() {
        const keys = [];
        this.keyMap.forEach(bucket => {
            if (bucket) {
                bucket.forEach(entry => keys.push(entry.key));
            }
        });
        return keys;
    }

    values() {
        const values = [];
        this.keyMap.forEach(bucket => {
            if (bucket) {
                bucket.forEach(entry => values.push(entry.value));
            }
        });
        return values;
    }
}