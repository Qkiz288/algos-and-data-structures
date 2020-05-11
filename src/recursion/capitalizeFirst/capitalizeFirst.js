// given array of strings, capitalie the first letter of each string in the array

module.exports = function capitalizeFirst(array) {

    // base case - return empty array
    if (array.length === 0) {
        return [];
    }

    // create new sub-array with first string from the input array
    let subArray = array.splice(0,1);

    // check if string is empty
    if (subArray[0] === "") {
        return [""].concat(capitalizeFirst(array));
    }

    // get first char capitalized
    const capitalizedLetter = subArray[0][0].toUpperCase();

    // create new string with capitalized char
    let capitalizedString = capitalizedLetter + subArray[0].substr(1);

    // replace non-capitalized string with capitalized one
    subArray.splice(0,1,capitalizedString);

    // concatenate new capitalized sub-array with recursive call on remaining arrays
    return subArray.concat(capitalizeFirst(array));
}