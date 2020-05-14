// function accepts an array and a value
// return the index where the value is located or return -1

// Linear search algorithm - O(n) time complexity
module.exports = function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    }
    return -1;
}