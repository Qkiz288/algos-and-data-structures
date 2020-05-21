// function used as a helper function for quicksort algorithm. 
// it places the first element (pivot) of the array in such manner,
// that all smaller items than the pivot are on the left of the pivot and all greater items
// than the pivot are on the right side of the pivot
// pivotHelper([3,2,1,5,4]) -> returns 2 (because algorithm rearranges the array to [2,1,3,5,4])

module.exports = function pivotHelper(array, start = 0, end = array.length - 1) {
    // set the swapIndex (default - beginning of the array)
    let swapIndex = start;

    // get pivot value which will be used to compare and place in correct spot
    let pivot = array[start];

    // iterate through the array
    for (let i = start + 1; i <= end; i++) {

        // if current value is smaller than pivot, increment swapIndex and swap values
        if (array[i] < pivot) {
            swapIndex++;
            swap(array, i, swapIndex);
        }
    }

    // on the end, swap pivot and calculated swapIndex in order to place 
    // pivot in correct spot (smaller items on the left, greater on the right)
    swap(array, start, swapIndex);
    console.log(`Rearranged array (smaller numbers on the left, greater on the right side of the pivot = ${pivot}): ` + array);

    // return the index where pivot is placed
    return swapIndex;
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}