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

    pop() {
        let popped;
        if (this.length === 0) {
            return undefined;
        }
        else if (this.length === 1) {
            popped = this.head;
            this.head = null;
            this.tail = null;
        } else {
            popped = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            popped.prev = null;
        }
        this.length--;
        return popped;
    }

    shift() {
        if (!this.head) {
            return undefined;
        } 
        let shifted; 
        if (this.length === 1) {
            shifted = this.head;
            this.head = null;
            this.tail = null;
        } else {
            shifted = this.head;
            this.head = this.head.next;
            this.head.prev = null;
        }
        shifted.next = null;
        this.length--;
        return shifted;
    }

    unshift(value) {
        if (!this.head) {
            this.push(value);
        } else {
        const oldHead = this.head;
        this.head = new Node(value);
        this.head.next = oldHead;
        oldHead.prev = this.head;
        this.length++;
        }
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length - 1) {
            return undefined;
        }

        const half = Math.floor(this.length / 2);
        let item;

        if (index < half) {
            item = this.head;
            for (let i = 0; i < index; i++) {
                item = item.next;
            }
        } else {
            item = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                item = item.prev;
            }
        }

        return item;
    }

    set(index, value) {
        const item = this.get(index);
        if (!item) {
            return false;
        }
        item.val = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return !!this.unshift(value);
        }
        if (index === this.length) {
            return !!this.push(value);
        }
        const oldNode = this.get(index);
        const previousNode = this.get(index - 1);
        const newNode = new Node(value);
        oldNode.prev = newNode;
        previousNode.next = newNode;
        newNode.next = oldNode;
        newNode.prev = previousNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        const nodeToRemove = this.get(index);
        const previousNode = nodeToRemove.prev;
        const nextNode = nodeToRemove.next;
        previousNode.next = nextNode;
        nextNode.prev = previousNode;
        this.length--;
        nodeToRemove.next = null;
        nodeToRemove.prev = null;
        return nodeToRemove;
    }

    reverse() {
        if (this.length <= 1) {
            return this;
        }
        else if (this.length === 2) {
            const temp = this.head;
            this.head = this.tail;
            this.tail = temp;
            this.head.next = this.head.prev;
            this.tail.prev = this.tail.next;
        } else {
            const oldHead = this.head;
            this.head = this.tail;
            this.tail = oldHead;
            let node = this.head;
            while (node) {
                const temp = node.prev;
                node.prev = node.next;
                node.next = temp;
                node = temp;
            }
            
        }
        this.head.prev = null;
        this.tail.next = null;
        return this;
    }
}