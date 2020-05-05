// function which accepts an array of integers and a number called n.
// function should calculate the maximum sum of n consecutive elements in the array.

// naive solution - O(n^2) complexity
module.exports.naiveSolution = function naiveSolution(array, n) {
    // check if n is not greater than array length
    if (array.length < n) {
        return null;
    }

    // initialize variable to hold maximum value
    let max = 0;

    // loop through array but finish n indexes earlier
    for (let i = 0; i < array.length - n; i++) {

        // initialize variable to hold temporary value of sum
        let temp = 0;

        // iterate through sub-array
        for (let j = i; j < i + n; j++) {
            // sum all numbers from subarray and save in temp variable
            temp += array[j];
        }

        // if temp variable if greater than max, then temp is the new max
        if (temp > max) {
            max = temp;
        }
    }

    return max;
}


//naiveSolution([2,7,1,8,15,2,4,6], 2);