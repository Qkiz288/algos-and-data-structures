// function takes in an array of numbers and returns the product of them all

module.exports = function product(array) {

    // base case
    if (array.length === 0) {
        return 1;
    }

    // create temporary placeholder for total
    const temp = array[0];

    // remove first element from array
    array = array.splice(1);

    // return first number * recursive product() call on smaller subset
    return temp * product(array);
}