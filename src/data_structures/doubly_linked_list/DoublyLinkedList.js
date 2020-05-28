const Node = require('./Node').Node;

module.exports.DoublyLinkedList = class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            const previousTail = this.tail;
            this.tail = node;
            this.tail.prev = previousTail;
            previousTail.next = this.tail;
        }
        this.length++;
        return this;
    }
}