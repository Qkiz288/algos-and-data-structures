const SinglyLinkedList = require('./SinglyLinkedList').SinglyLinkedList;

const list = new SinglyLinkedList();

console.log("--- PUSH ---")
list.push("Hello");
list.push("linked");
list.push("list").toString();
console.log(list.push("!").toString());

console.log("--- POP ---")
console.log(list.pop());
console.log(list.toString());
console.log(list.pop());
console.log(list.toString());
console.log(list.pop());
console.log(list.toString());
console.log(list.pop());
console.log(list.toString());