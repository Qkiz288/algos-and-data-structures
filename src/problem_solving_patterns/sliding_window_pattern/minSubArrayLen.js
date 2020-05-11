// function accepts two arguments - array of integers and a integer
// function returns minimal length of a CONTIGUOUS subarray of which
// the sum is greater or equal to the integer passed to the function.
// if there isn't one - return 0;
// [2,3,1,2,4,3], 7 = 2 -> because [4,3] is the smallest subarray
// [2,1,6,5,4], 9 -> 2 because [5,4] is the smallest subarray

module.exports = function minSubArrayLen(array, n) {
    // if array is empty - return 0
    if (array.length === 0) {
        return 0;
    }

    // initialize subarray range, start index and initial sum
    let range = 1;
    let index = 0;
    let sum = array[index];

    // iterate until window range is equal to array length
    while (range <= array.length) {
        // check if sum is equal or greater than expected number
        if (sum >= n) {
            return range;
        }

        // if not, move window start index 1 position to the right
        index++;

        // calculate new sum = subtract previous number and add new number from the right
        sum = sum - array[index - 1] + array[index + range - 1];

        // if window no longer fits the array
        if (index + range - 1 === array.length) {

            // set the window on the beginning of the array
            index = 0;

            // increase window range
            range++;

            // reset sum
            sum = 0;

            // calculate new sum
            for (let i = 0; i < range; i++) {
                sum += array[i];
            }
        }
    }

    // if above loop doesn't return value = return 0
    return 0;

}