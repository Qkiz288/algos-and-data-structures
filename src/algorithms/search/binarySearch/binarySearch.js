// function accepts sorted array and a value. Returns the index
// of the value. If not found, returns -1

// binary search algorithm - O(n) time complexity
module.exports = function binarySearch(array, searchValue) {

    // set left and right pointers to left and right end of the array
    let left = 0;
    let right = array.length - 1;

    // initialize variable holding middle index 
    let middle = Math.floor((left + right) / 2);

    // loop until value is found and left index is not greater than right index
    while (array[middle] !== searchValue && left <= right) {

        // if search value is greater than current value -> we can drop all values from
        // left index to middle index as for sure they won't be equal to search value
        if (array[middle] < searchValue) {
            left = middle + 1;
        }
        // if search value is lesser than current value -> we can drop all values from
        // middle index to right index as for sure they won't be equal to search value
        else if (array[middle] > searchValue) {
            right = middle - 1;
        }
        // recalculate middle index of the new subarray.
        // Loop will terminate after this step if value 
        // under calculated index is equal to search value
        middle = Math.floor((left + right) / 2);
    }

    // return index of searchValue if found, else return -1
    return array[middle] === searchValue ? middle : -1;
}