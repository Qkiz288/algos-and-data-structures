const Node = require('./Node').Node;

module.exports.SinglyLinkedList = class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    toString() {
        return this.head.toString();
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;

        return this;
    }
}