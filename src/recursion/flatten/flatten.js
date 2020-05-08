// function accepts array and returns new array with values flattened

module.exports = function flatten(array) {
    // base case
    if (array.length === 0) {
        return;
    }

    // create a flattened array variable
    let newArray = [];

    // iterate through array
    for (let i = 0; i < array.length; i++) {

        // get the current element
        const element = array[i];

        // if current element is an array, flatten it and concatenate to newArray
        if (Array.isArray(element)) {
            newArray = newArray.concat(flatten(element));
        }
        // if not, push it to newArray
        else {
            newArray.push(element);
        }
    }

    return newArray;
}