const Node = require('./Node').Node;

module.exports.Stack = class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            const oldFirst = this.first;
            this.first = node;
            this.first.next = oldFirst;
        }
        this.length++;
    }

    pop() {
        if (!this.first) {
            return null;
        } 
        const popped = this.first;
        if (this.length === 1) {
            this.first = null;
            this.last = null;
        }
        else {
            this.first = this.first.next;
        }
        this.length--;
        return popped.val;
    }
}

// 1