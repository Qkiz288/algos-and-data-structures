// time complexity - O(n^2)
module.exports = function selectionSort(array) {
    let numberOfIterations = 0;
   
    for (let i = 0; i < array.length; i++) {
        numberOfIterations++;

        // start with assumption that first element is the minimum
        let minIndex = i;

        // create a flag that will indicate if swap should be performed at the end of inner loop
        let swap = false;

        // inner loop to iterate through the rest of the array
        for (let j = i + 1; j < array.length; j++) {
            numberOfIterations++;

            // if currently checked element is lower than element at minIndex
            // assign new minIndex and set swap flag to true
            if (array[j] < array[minIndex]) {
                minIndex = j;
                swap = true;
            }
        }

        // if swap = true, swap numbers in the array
        if (swap) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    console.log(`Number of iterations: ${numberOfIterations}`)
    return array;
}