// function returns the sum of all even numbers in an object which may contain nested objects

module.exports = function nestedEvenSum(object) {
    // get object properties
    const properties = Object.keys(object);

    // base case - check if object is empty
    if (properties.length === 0 && object.constructor === Object) {
        return 0;
    }

    // variable to hold total of summed numbers
    let total = 0;

    // loop through all object's properties
    for (let i = 0; i < properties.length; i++) {
        let value = object[properties[i]];

        // if value is of type number
        if (typeof value === 'number') {

            // if value is even - add it to total
            if (value % 2 === 0) {
                total += value;
            }
        }

        // if value is an object - use recursion
        if (isObject(value)) {
            total += nestedEvenSum(value);
        }
    }

    // return total sum
    return total;
}

function isObject(object) {
 return Object.keys(object).length > 0 && object.constructor === Object
}