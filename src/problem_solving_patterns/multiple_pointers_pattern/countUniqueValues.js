// function which accepts SORTED array and counts 
// the number of unique values in the array

// solution with multiple pointers pattern - O(n) complexity
module.exports.betterSolution = function betterSolution(array) {
    // check if array is not empty
    if (array.length === 0) {
        return 0;
    }
    // initialize both pointers on the left side of array
    let index1 = 0;
    let index2 = index1;

    // if loop is not empty, there is at least one unique value
    let count = 1;

    // loop through array to the end of array
    while (index2 < array.length) {
        // count the difference between numbers
        let diff = array[index1] - array[index2];
        // diff = 0 means that the numbers are the same
        if (diff === 0) {
            index2++;
        } else {
        // diff != 0 means that we found new unique value
            count++;
        // switch index1 position to new unique number
            index1 = index2;
        }
    }

    return count;
}

// another multiple pointers pattern solution - O(n) complexity
module.exports.anotherBetterSolution = function anotherBetterSolution(arr) {
    // check if array is not empty
    if (arr.length === 0) {
        return 0;
    }

    // set two pointers on the left, one on index 0 and one on index 1
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        // if number where index 'j' points is different than number at index 'i', move 'i' pointer one
        // position to the right and put there number from index 'j'
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    // return index 'i' incremented by 1 as 'i' represents array index, not length
    return i + 1;
}