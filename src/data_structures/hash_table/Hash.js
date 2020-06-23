module.exports.hash = function hash(key, arrayLen) {
    let total = 0;
    let PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 11;
        total = (total * PRIME_NUMBER + value) % arrayLen;
    }
    return total;
}