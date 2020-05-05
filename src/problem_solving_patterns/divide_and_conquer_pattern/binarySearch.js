// given a SORTED array of integers and a number, find the
// index where value is located in the array.
// if not found - return -1

// naive solution, time complexity O(n)
module.exports.naiveSolution = function naiveSolution(array, number) {
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

// better solution using divide and conquer pattern - time compelxity log(n)
module.exports.betterSolution = function betterSolution(array, number) {
    // declare min and max variables that hold boundaries of dividing
    let min = 0;
    let max = array.length - 1;
    let index = -1;

    // iterate until min and max overlap
    while (min <= max) {

        // get the middle index of the array/subarray
        let middleIndex = Math.floor((min + max) / 2)

        // get the number from that index
        let currentNumber = array[middleIndex];

        // if searched number is greater than current, 
        // cut the left boundary of searching (including already checked value)
        if (currentNumber < number) {
            min = middleIndex + 1;
        } 
        // if searched number is lesser than current, 
        // cut the right boundary of searching (including already checked value)
        else if (currentNumber > number) {
            max = middleIndex - 1;
        } 
        // value found - save its index
        else {
            index = middleIndex;
            break; 
        }
    }
    return index;
}