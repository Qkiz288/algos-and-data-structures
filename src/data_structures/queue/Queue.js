const Node = require('./Node').Node;

module.exports.Queue = class Queue {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    dequeue() {
        if (!this.head) {
            return null;
        }
        const returned = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return returned.val;
    }
}