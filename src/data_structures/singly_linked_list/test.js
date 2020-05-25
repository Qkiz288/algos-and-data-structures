const SinglyLinkedList = require('./SinglyLinkedList').SinglyLinkedList;

const list = new SinglyLinkedList();
list.push("Hello");
list.push("linked");
list.push("list").toString();
console.log(list.push("!").toString());