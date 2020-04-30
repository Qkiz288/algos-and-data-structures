
// Function to count alphanumeric characters in input string
module.exports = function countChars(input) {

    // Create output object
    const output = {};

    // Go through each character
    for (let character of input) {

        // Lower case the character
        character = character.toLowerCase();
        
        // Check if character is alphanumeric 
        // YES -> skip the character
        // NO -> proceed
        if (character.match("[^a-z0-9]")) {
            continue;
        }

        // Check if character is already in the output object
        // YES -> increment output count
        // NO -> set output count to 1
        output[character] ? output[character]++ : output[character] = 1;
    }
    
    // Return the output
    return output;
}