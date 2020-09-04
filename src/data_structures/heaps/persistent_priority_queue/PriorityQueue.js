const Node = require('./Node').Node;
const NodeHistory = require('./NodeHistory').NodeHistory;

module.exports.PriorityQueue = class PriorityQueue {
    constructor() {
        this.values = [];
        this.nodesHistory = [];
        this.latestVersion = 0;
    }

    enqueue(value, priority) {
        const node = new Node(value, priority);
        this.values.push(node);
        this.bubbleUp();
        this.updateNodesHistory();
    }

    dequeue() {
        if (!this.values.length) {
            return null;
        }
        this.swap(0, this.values.length - 1);
        const extracted = this.values.pop();
        this.bubbleDown();
        this.updateNodesHistory();
        return extracted;
    }

    bubbleUp(index = this.values.length - 1) {
        const parentIndex = this.parentIndex(index);
        if (this.values[index].priority < this.values[parentIndex].priority) {
            this.swap(index, parentIndex);
            this.bubbleUp(parentIndex);
        }
    }

    bubbleDown(index = 0) {
        const leftChildIndex = this.leftChildIndex(index);
        const rightChildIndex = this.rightChildIndex(index);
        const leftChildNode = this.values[leftChildIndex];
        const rightChildNode = this.values[rightChildIndex];
        let smallerPriorityIndex;
        if (!leftChildNode) {
            return;
        }
        if (!rightChildNode) {
            smallerPriorityIndex = leftChildIndex;
        } else {
            smallerPriorityIndex = leftChildNode.priority < rightChildNode.priority ? leftChildIndex : rightChildIndex;
        }
        if (this.values[index].priority > this.values[smallerPriorityIndex].priority) {
            this.swap(index, smallerPriorityIndex);
            this.bubbleDown(smallerPriorityIndex);
        }
    }

    parentIndex(index) {
        return index <= 2 ? 0 : Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return index * 2 + 1;
    }

    rightChildIndex(index) {
        return index * 2 + 2;
    }

    swap(index1, index2) {
        const temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
    }

    updateNodesHistory() {
        this.latestVersion += 1;
        this.values.forEach(node => {
            const index = this.values.indexOf(node);
            const nodeHistory = new NodeHistory(this.latestVersion, index, node);
            this.nodesHistory.push(nodeHistory);
        });
    }

    switchToVersion(version) {
        const historicalNodes = this.nodesHistory.filter(node => node.version === version);
        this.values.length = 0;
        for (const historicalNode of historicalNodes) {
            this.values.splice(historicalNode.index, 0, historicalNode.node);
        }
    }

}