// function takes in an object and finds all the values
// which are numbers, converts them to strings and returns new object

module.exports = function stringifyNumbers(object) {

    // clone input object (we can't alter input object)
    const clonedObject = Object.assign({}, object);

    // get object property fields
    const properties = Object.keys(clonedObject);

    // base case
    if (properties.length === 0) {
        return clonedObject;
    }

    // iterate through all fields of the object
    for (let i = 0; i < properties.length; i++) {
        const value = clonedObject[properties[i]];

        // if value of the property is a number
        if (typeof value === 'number') {

            // cast to string and assign it to the object
            clonedObject[properties[i]] = value.toString();
        } 
        // if the value is an object
        else if (isObject(value)) {
            
            // property value of the object is a recursive call on the value
            clonedObject[properties[i]] = stringifyNumbers(value);
        }
    }

    // returned cloned object
    return clonedObject;
}

function isObject(object) {
    return Object.keys(object).length > 0 && object.constructor === Object;
}