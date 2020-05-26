const SinglyLinkedList = require('./SinglyLinkedList').SinglyLinkedList;

const list = new SinglyLinkedList();

console.log("--- PUSH ---")
pushData(list);
console.log(list.toString());

console.log("--- POP ---")
console.log(list.pop());
console.log(list.toString());
console.log(list.pop());
console.log(list.toString());
console.log(list.pop());
console.log(list.toString());
console.log(list.pop());
console.log(list.toString());

console.log("--- SHIFT ---")
pushData(list);
console.log(list.shift());
console.log(list.toString());
console.log(list.shift());
console.log(list.toString());
console.log(list.shift());
console.log(list.toString());
console.log(list.shift());
console.log(list.toString());

function pushData(list) {
    list.push("Hello");
    list.push("linked");
    list.push("list");
    list.push("!");
}