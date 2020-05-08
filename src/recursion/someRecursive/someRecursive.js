// function accepts an array and a callback. Function returns true if a single value in the
// array returns true when passed to the callback. Otherwise it returns falase;

module.exports = function someRecursive(array, callback) {
    // base case - if there are no elements left in the array
    if (array.length === 0) {
        return false;
    }

    // get first element from array and remove it from original array
    const element = array.splice(0,1);

    // if element meets the condition from callback, we're done
    if (callback(element)) {
        return true;
    } 
    // if not, check the condition further until base case
    else {
        return someRecursive(array, callback);
    }
}