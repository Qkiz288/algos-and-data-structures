let people = ["Sara", "Kamil", "John", "Anna"];

// push - O(1) - adding element at the end
people.push("Mike");
console.log(people);

// pop - O(1) - removing element from the end
people.pop();
console.log(people);

// shift - O(n) - removing element from the beginning
// all array elements have to be reindexed
people.shift();
console.log(people);

// unshift - O(n) - adding element in the beginning
// all array elements have to be reindexed
people.unshift("Bradley");
console.log(people);

// sort - O(n*log(n))
people.sort();
console.log(people);

// concat - O(n) - merging two arrays
let newPeople = ["Karen", "Bill"];
console.log(people.concat(newPeople));