// insertion sort time complexity - O(n^2)
module.exports = function(array) {
    let numberOfIterations = 0;
    // start loop from second element and iterate tto the right
    for (let i = 1; i < array.length; i++) {
        numberOfIterations++;

        // inner loop starting from i and iterate to the left
        for (let j = i; j > 0; j--) {
            numberOfIterations++;

            // if right number is smaller than left number, swap
            if (array[j] < array[j - 1]) {
                const temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }

    console.log("Numer of iterations: " + numberOfIterations);
    return array;
}