// write a function that accepts SORTED array of numbers and 
// returns first pair of numbers which in sum gives 0.
// If pair nor found, returns undefined
// [-3,-2,-1,1,2,3] -> [-3,3]
// [-2,0,1] -> undefined
// [1,2,3] -> undefined

// Below solution is O(n^2) complexity
module.exports.naiveSolution = function naiveSolution(array) {
    // check if array is not empty
    if (array.length === 0) {
        return undefined;
    }

    // loop thorugh array
    for (let i = 0; i < array.length; i++) {
        // check if current number summed with next number gives 0
        // YES -> return
        // NO -> continue searching
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return [array[i], array[j]];
            }
        }
    }

    // if no pair found, return undefined
    return undefined;
}

// better solution with multiple pointers pattern (array has to be sorted)
// below function has O(n) complexity
module.exports.betterSolution = function betterSolution(array) {
    // set 2 pointers, one on the left side of array, second - on the right side
    let left = 0;
    let right = array.length - 1;

    // create a loop which ends when left index is greater than right index
    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left], array[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}