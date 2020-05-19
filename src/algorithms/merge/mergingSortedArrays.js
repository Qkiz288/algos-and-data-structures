// functon merges two sorted arrays into one sorted array

module.exports = function mergeSortedArrays(array1, array2) {

    // create variable to store sorted data
    const mergedArray = [];

    // create pointers on 1st and 2nd array
    let index1 = 0;
    let index2 = 0;

    // iterate until the end of one of the arrays
    while (index1 < array1.length && index2 < array2.length) {
        const num1 = array1[index1];
        const num2 = array2[index2];

        // if current number from array1 is lesser than number from array2, push it into mergedArray
        if (num1 < num2) {
            mergedArray.push(num1);
            index1++;
        } 
        
        // else push number from the second array
        else {
            mergedArray.push(num2);
            index2++;
        }
    }

    // when algorithm reaches the end of one of the arrays - still it is needed to add remaining numbers
    // from the other array. They can be added freely as they are already sorted.
    while (index1 < array1.length) {
        mergedArray.push(array1[index1]);
        index1++;
    }

    while (index2 < array2.length) {
        mergedArray.push(array2[index2]);
        index2++;
    }

    return mergedArray;
}