// naive, not optimized bubble sort - it always iterates to the end of the array.
// There is no need to iterate to the end of the array every time 
// because the end of the array is being filled out with the 
// greatest, sorted values - see optimizedBubbleSort

// time complexity - O(n^2)
module.exports.naiveBubbleSort = function naiveBubbleSort(array) {
    let numberOfOperations = 0;

    for (let k = 0; k < array.length; k++) {
        numberOfOperations++;
        for (let i = 0; i < array.length - 1; i++) {
            numberOfOperations++;
            // if current element is greater than next elements -> swap the items
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    console.log("Not optimized bubble sort operations count (n^2): " + numberOfOperations);
    return array;
}

// bubble sort can be optimised by starting outer loop from
// the end of the array and inner loop from the beginning
// [3,1,4,2,5] - after outer iteration 1
// [3,1,2,4,5] - after outer iteration 2 (don't have to look at number 5)
// [1,2,3,4,5] - after outer iteration 3 (don't have to look at number 4 and 5)
// etc.

module.exports.optimizedBubbleSort = function optimizedBubbleSort(array) {
    let numberOfOperations = 0;

    // start outer loop at the end of the array
    for (let k = array.length - 1; k > 0; k--) {
        numberOfOperations++;

        // inner loop shrinks as outer loop decrements
        for (let i = 0; i < k; i++) {
            numberOfOperations++;

            // if current element is greater than next elements -> swap the items
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    console.log("Optimized bubble sort operations count: " + numberOfOperations);
    return array;
}

// bubble sort can be optimized further - when given almost sorted array (e.g. [5,1,2,3,4])
// sorting can be terminated if no swap's were performed in previous iteration (that means array is already sorted)

// if array is almost sorted (best case) - time complexity O(n)
module.exports.evenMoreOptimizedBubbleSort = function evenMoreOptimizedBubbleSort(array) {
    let numberOfOperations = 0;

    // start outer loop at the end of the array
    for (let k = array.length - 1; k > 0; k--) {
        numberOfOperations++;
        // add flag to indicate if swap was performed
        let swapped = false;

        // inner loop shrinks as outer loop decrements
        for (let i = 0; i < k; i++) {
            numberOfOperations++;

            // if current element is greater than next elements -> swap the items
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;

                // if swap was performed, set flag to true
                swapped = true;
            }
        }

        // if no swapping was performed - terminate the sorting as array is already sorted
        if (!swapped) {
            break;
        }
    }
    console.log("Even more optimized bubble sort operations count: " + numberOfOperations);
    return array;
}