module.exports.MaxBinaryHeap = class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp(index = this.values.length - 1) {
        const parentIndex = this.parentIndex(index);
        if (this.values[index] > this.values[parentIndex]) {
            this.swap(index, parentIndex);
            this.bubbleUp(parentIndex);
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