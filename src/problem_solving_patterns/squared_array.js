// Function which accepts two arrays. Function returns true if every value in the array
// has it's corresponding value squared in the second array. The frequency must be the same
// [1,2,3], [4,1,9] - true
// [1,2,3], [1,9] - false
// [1,2,1]. [4,4,1] - false
// Below solution has O(n^2) complexity
module.exports = function naiveSolution(array1, array2) {
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