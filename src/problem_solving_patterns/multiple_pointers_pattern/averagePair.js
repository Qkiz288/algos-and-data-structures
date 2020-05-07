// given a sorted array of integers and target average, determine if there is a pair of values
// in the array where the average of the pair equals the target average. 
// There can be more than one pair that matches


module.exports = function averagePair(array, target) {
    // if array is empty, return false
    if (array.length < 2) {
        return false;
    }

    // set 2 pointers, one on the left, second on the right
    let index1 = 0;
    let index2 = array.length - 1;

    // loop until left pointer reaches end of the array
    while (index1 < array.length) {

        // calculate average
        const avg = average(array[index1], array[index2]);

        // if avg is lesser than target, move first pointer one position to the right
        // and reset second pointer to the right side of array
        if (avg < target) {
            index1++;
            index2 = array.length - 1;
        } 
        // if avg is greater than target, move second pointer one position to the left
        else if (avg > target) {
            index2--;
        } 
        // if avg is equal to target., we're done
        else {
            return true;
        }

    }

    // if loop finishes without returning true, return false
    return false;
}

function average(n1, n2) {
    return (n1 + n2) / 2;
}