const palindrome = require('./palindrome');

console.log("Palindrome (expected true): " + palindrome("tacocat"));
console.log("Palindrome (expected true): " + palindrome("amanaplanacanalpanama"));
console.log("Palindrome (expected false): " + palindrome("foobar"));