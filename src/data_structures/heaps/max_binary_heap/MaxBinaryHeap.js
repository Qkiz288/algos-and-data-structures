module.exports.MaxBinaryHeap = class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    extractMax() {
        this.swap(0, this.values.length - 1);
        const extracted = this.values.pop();
        this.bubbleDown();
        return extracted;
    }

    bubbleUp(index = this.values.length - 1) {
        const parentIndex = this.parentIndex(index);
        if (this.values[index] > this.values[parentIndex]) {
            this.swap(index, parentIndex);
            this.bubbleUp(parentIndex);
        }
    }

    bubbleDown(index = 0) {
        const leftChildIndex = this.leftChildIndex(index);
        const rightChildIndex = this.rightChildIndex(index);
        const largerChildIndex = this.values[leftChildIndex] > this.values[rightChildIndex] ? leftChildIndex : rightChildIndex;
        if (this.values[index] < this.values[largerChildIndex]) {
            this.swap(index, largerChildIndex);
            this.bubbleDown(largerChildIndex);
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
}