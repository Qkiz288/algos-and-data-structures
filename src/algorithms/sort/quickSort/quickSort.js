// algorithm does a decomposition of the original array. 
// Best case is log(n) decompositions and O(n) comparison per decomposition = nlog(n) time complexity
// Worst case (on already sorted array) is O(n) decompositions and O(n) comparisons per 
// decomposition = log(n^2) time complexity. This can be fixed by picking random number in pivot function (not the first element)

const pivotHelper = require('../../pivot/pivotHelper');

// quick sort accepts 2 indexes - left and right. By default they are set to
// the beginning and the end of the array
module.exports = function quickSort(array, left = 0, right = array.length - 1) {

    // algorithm will move those indexes closer to each other by finding pivot point
    // and dividing the array to two smaller ones. left = right means that 1-sized array
    // was passed to quickSort (base case)
    if (left < right) {

        // find pivot index (correct spot for left element)
        const pivotIndex = pivotHelper(array, left, right);

        // call quickSort recursively on 2 smaller subarrays (without pivot index)
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }

    // when algo is finished, return sorted array
    return array;
}