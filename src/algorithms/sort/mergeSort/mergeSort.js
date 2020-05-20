// algorithm splits array into halves until it reaches 1-element array (which is always sorted)
// and then merges two sorted arrays recursively.
// 
//                      mergeSort([3,1,4,2])
//                      return [1,2,3,4]
//                      /               \
//          mergeSort(3,1)              mergeSort(4,2)
//          return [1,3]                   return [2,4]
//          /        \                  /           \
//  mergeSort(3)    mergeSort(1)    mergeSort(4)    mergeSort(2)
//  return [3]        return [1]    return [4]      return [2]

// time complexity nlog(n):
// - log(n) because with 4 element array, there are 2 splits (2^2 = 4)
// - n before log because merge algorithm has complexity of O(n). 
//   With 4 elementsa array, 4 elements are compared during merge.


const mergeSortedArrays = require('../../merge/mergingSortedArrays');

module.exports = function mergeSort(array) {
    // base case
    if (array.length <= 1) {
        return array;
    }

    // get the middle index of the array
    const middle = Math.floor(array.length / 2);

    // split the array into two parts
    const left = array.slice(0, middle);
    const right = array.slice(middle, array.length);

    // recursive call on left and right part of the splitted array
    const leftMerged = mergeSort(left);
    const rightMerged = mergeSort(right);

    // call merge sorted arrays on two (sorted!) parts of the array
    return mergeSortedArrays(leftMerged, rightMerged);
}