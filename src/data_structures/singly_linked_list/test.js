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
console.log(list.shift().toString());
console.log(list.shift().toString());
console.log(list.shift().toString());
console.log(list.shift().toString());
console.log(list.toString());

console.log("--- UNSHIFT ---")
console.log(list.unshift("!").toString());
console.log(list.unshift("again").toString());
console.log(list.unshift("Hello").toString());

console.log("--- GET ---");
console.log(list.get(3));
console.log(list.get(2));
console.log(list.get(1));
console.log(list.get(0));
console.log(list.get(-1));

function pushData(list) {
    list.push("Hello");
    list.push("linked");
    list.push("list");
    list.push("!");
}