// function which accepts array of words and returns
// a new array with each word capitalized

module.exports = function capitalizeWords(array) {
    // base case
    if (array.length === 0) {
        return [];
    }

    // get the first element of the array
    const subArray = array.splice(0,1);

    // capitalize whole string
    const capitalizedString = subArray[0].toUpperCase();

    // concatenate with recursive call on the rest of the array
    return [capitalizedString].concat(capitalizeWords(array));
}