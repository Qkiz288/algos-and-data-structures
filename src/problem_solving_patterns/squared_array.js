// Function which accepts two arrays. Function returns true if every value in the array
// has it's corresponding value squared in the second array. The frequency must be the same
// [1,2,3], [4,1,9] - true
// [1,2,3], [1,9] - false
// [1,2,1]. [4,4,1] - false

// Below solution is O(n^2) complexity, it has nested loops which should be avoided
module.exports.naiveSolution = function naiveSolution(array1, array2) {
    // check if arrays have the same size
    if (array1.length !== array2.length) {
        return false;
    }

    // loop through array1
    for (const value1 of array1) {

    // check if val from array1 exists as squared in array2
    // NO -> return false
    // YES -> remove squared val from array2 and continue
    const sq = value1 ^ 2;
        const index = array2.indexOf(value1 ** 2);
        if (index === -1) {
            return false;
        }
        array2.splice(index, 1);
    }
    return true
}

// Better solution with frequency pattern
// Below solution is O(n)
module.exports.betterSolution = function betterSolution(array1, array2) {
    // check if arrays have the same length
    if (array1.length !== array2.length) {
        return false;
    }

    // create frequency objects for both arrays
    const frequency1 = {};
    const frequency2 = {};

    // loop through array1
    for (const value of array1) {
        // check if value exists in frequency1
        // YES -> increment
        // NO -> initialize to 1
        frequency1[value] = frequency1[value] ? frequency1[value] + 1 : 1;
    }

    // loop through array2
    for (const value of array2) {
    // check if value exists in frequency2
        // YES -> increment
        // NO -> initialize to 1   
        frequency2[value] = frequency2[value] ? frequency2[value] + 1: 1;
    }

    // loop through frequency1
    for (key in frequency1) {
        
        // check if squared key from frequency1 exists in frequency2
        if (!(key ** 2 in frequency2)) {
            return false;
        }

        // check if frequency1 key appears the same amount of times as corresponding frequency2 key
        if (frequency1[key] !== frequency2[key ** 2]) {
            return false;
        }
    }

    // if everything went well, return true
    return true;
}