// function which collects odd values from input array

// below solution implemented using Helper Method Recursion pattern 
// this is outer non-recursive function
module.exports.collectOdds = function collectOdds(array) {
    
    // outer function holds property which will be manipulated by inner function
    let result = [];

    // inner recursive function
    function helper(input) {
        // base case
        if (input.length === 0) {
            return
        }

        // if first number from input is odd, add it to outer function result
        if (input[0] % 2 !== 0) {
            result.push(input[0]);
        }

        // remove first number from input
        input.splice(0,1);

        // call inner function again on new, smaller input
        helper(array);
    }

    helper(array);

    return result;
}

// below solution using pure recursion
module.exports.collectOddsPureRecursion = function collectOddsPureRecursion(array) {

    // base case
    if (array.length === 0) {
        return [];
    }

    // create empty array for every recursive call
    const temp = [];

    // if number is odd, add it to temp array
    if (array[0] % 2 !== 0) {
        temp.push(array[0]);
    }

    // remove number which was checked from the original array
    array = array.splice(1);

    // concatenate temp array with recursive call on smaller array
    return temp.concat(collectOddsPureRecursion(array));
}