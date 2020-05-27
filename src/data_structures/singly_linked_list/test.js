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

console.log("--- SET ---");
console.log(list.set(0, "Welcome"));
console.log(list.toString());
console.log(list.set(-1, "Invalid"));
console.log(list.set(3, "Invalid"));
console.log(list.set(2, "!!!"));
console.log(list.toString());

console.log("--- INSERT ---")
console.log(list.insert(-1, "Invalid"));
console.log(list.insert(4, "Invalid"));
console.log(list.insert(0, "Big"));
console.log(list.toString());
console.log(list.insert(4, "!"));
console.log(list.toString());
console.log(list.insert(3, "my friend"));
console.log(list.toString());

console.log("--- REMOVE ---");
console.log(list.remove(-1));
console.log(list.remove(6));
console.log(list.remove(0));
console.log(list.toString());
console.log(list.remove(4));
console.log(list.toString());

console.log("--- REVERSE ---")
console.log(list.reverse().toString());

function pushData(list) {
    list.push("Hello");
    list.push("linked");
    list.push("list");
    list.push("!");
}