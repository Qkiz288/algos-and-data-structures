// given a sorted array of integers and a number, find the
// index where value is located in the array.
// if not found - return -1

// naive solution, time complexity O(n)
module.exports = function naiveSolution(array, number) {
    let index = -1;
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // if current value is equal to searched, save it and break the loop
        if (array[i] === number) {
            index = i;
            break;
        }
    }
    return index;
}