const Node = require('./Node').Node;

module.exports.BinarySearchTree = class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value, currentNode = this.root) {
        const node = new Node(value);
        // let greater;
        if (!this.root) {
            this.root = node;
            return this;
        } 
        // else {
        //     greater = value >= currentNode.value ? true : false;
        // }
        if (value > currentNode.value) {
            if (currentNode.right) {
                this.insert(value, currentNode.right);
            } else {
                currentNode.right = node;
            }
        } else if (value < currentNode.value) {
            if (currentNode.left) {
                this.insert(value, currentNode.left);
            } else {
                currentNode.left = node;
            }
        } else {
            currentNode.count++;
        }
    }
}