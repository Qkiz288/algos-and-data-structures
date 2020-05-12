// function accepts an object and returns an array of all
// the values in the object that have typeof string

module.exports = function collectStrings(object) {

    // get object's field names
    const properties = Object.keys(object);

    // base case
    if (properties.length === 0) {
        return [];
    }

    // create an empty array that will hold strings
    let stringsArray = [];

    // iterate through all object's fields
    for (let i = 0; i < properties.length; i++) {
        const value = object[properties[i]];

        // if field value is of type string, add it to the array
        if (typeof value === 'string') {
            stringsArray.push(value);
        }

        // if field value is an object, use recursion to iterate through 
        // all it's fields and concatenate it to the array
        else if (isObject(value)) {
            stringsArray = stringsArray.concat(collectStrings(value));
        }
    }

    return stringsArray;
}

function isObject(object) {
    return object.constructor === Object && Object.keys(object).length > 0;
}