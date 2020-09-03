const Node = require('./Node').Node;

module.exports.PriorityQueue = class PriorityQueue {
    constructor() {
        this.values = [];
        this.historicalNodes = [];
        this.latestVersion = 0;
    }

    enqueue(value, priority, updateHistory = true) {
        const node = new Node(value, priority);
        this.values.push(node);
        this.bubbleUp();
        if (updateHistory) {
            this.historicalNodes.push(node);
            this.updateNodesVersion()};
    }

    dequeue() {
        if (!this.values.length) {
            return null;
        }
        this.swap(0, this.values.length - 1);
        const extracted = this.values.pop();
        this.bubbleDown();
        this.updateNodesVersion();
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

    updateNodesVersion() {
        this.latestVersion += 1;
        this.values.forEach(node => node.history.push(this.latestVersion));
        const a = 1;
    }

    getVersion(version) {
        const nodes = this.historicalNodes.filter(node => node.history.includes(version));
        const versionQueue = new PriorityQueue();
        versionQueue.historicalNodes = Array.from(this.historicalNodes);
        for (const node of nodes) {
            versionQueue.enqueue(node.val, node.priority, false);
        }
        return versionQueue;
    }

}