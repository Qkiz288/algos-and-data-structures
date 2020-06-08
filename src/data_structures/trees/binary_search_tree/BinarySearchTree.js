const Node = require('./Node').Node;

module.exports.BinarySearchTree = class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value, currentNode = this.root) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this;
        } 
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

    find(value, currentNode = this.root) {
        if (!currentNode) {
            return false;
        }
        if (value > currentNode.value) {
            return this.find(value, currentNode.right);
        } else if (value < currentNode.value) {
            return this.find(value, currentNode.left);
        } else {
            return true;
        }
    }
}