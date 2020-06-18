const MaxBinaryHeap = require('./MaxBinaryHeap').MaxBinaryHeap;

describe("Max Binary Heap tests", function() {

    let maxBinaryHeap;

    beforeEach(function() {
        maxBinaryHeap = new MaxBinaryHeap();
    });

    it("Insert 1 item into empty heap", function() {
        // given
        const val1 = 1;

        // when
        maxBinaryHeap.insert(val1);

        // then
        expect(maxBinaryHeap.values.length).toBe(1);
        expect(maxBinaryHeap.values[0]).toBe(val1);
        expect(isValidMaxHeap(maxBinaryHeap)).toBe(true);
    });

    it("Insert max value to the top", function() {
        // given
        initializeHeap();
        const originalLength = maxBinaryHeap.values.length;
        const maxValue = 100;

        // when
        maxBinaryHeap.insert(maxValue);

        // then
        expect(maxBinaryHeap.values.length).toBe(originalLength + 1);
        expect(maxBinaryHeap.values[0]).toBe(maxValue);
        expect(isValidMaxHeap(maxBinaryHeap)).toBe(true);
    });

    it("Insert value in the middle", function() {
        // given
        initializeHeap();
        const originalLength = maxBinaryHeap.values.length;
        const middleValue = 34;

        // when
        maxBinaryHeap.insert(middleValue);

        // then
        expect(maxBinaryHeap.values.length).toBe(originalLength + 1);
        expect(maxBinaryHeap.values[2]).toBe(middleValue);
        expect(isValidMaxHeap(maxBinaryHeap)).toBe(true);
    });

    it("Insert value at the bottom", function() {
        // given
        initializeHeap();
        const originalLength = maxBinaryHeap.values.length;
        const minValue = 1;

        // when
        maxBinaryHeap.insert(minValue);

        // then
        expect(maxBinaryHeap.values.length).toBe(originalLength + 1);
        expect(maxBinaryHeap.values[originalLength]).toBe(minValue);
        expect(isValidMaxHeap(maxBinaryHeap)).toBe(true);
    });

    it("extractMax from empty", function() {
        // given

        // when
        const result = maxBinaryHeap.extractMax();

        // then
        expect(maxBinaryHeap.values.length).toBe(0);
        expect(result).toBe(undefined);
    });

    it("extractMax from 1 item heap", function() {
        // given
        const maxValue = 100;
        maxBinaryHeap.values[0] = maxValue;

        // when
        const result = maxBinaryHeap.extractMax();

        // then
        expect(maxBinaryHeap.values.length).toBe(0);
        expect(result).toBe(maxValue);
        expect(isValidMaxHeap(maxBinaryHeap)).toBe(true);
    });

    it("extractMax from multiple items heap", function() {
        // given
        initializeHeap();
        const expectedMaxValue = maxBinaryHeap.values[0];
        const originalLength = maxBinaryHeap.values.length;

        // when
        const result = maxBinaryHeap.extractMax();

        // then
        expect(maxBinaryHeap.values.length).toBe(originalLength - 1);
        expect(result).toBe(expectedMaxValue);
        expect(isValidMaxHeap(maxBinaryHeap)).toBe(true);
    });

    function isValidMaxHeap(maxHeap) {
        if (maxHeap.length === 0) {
            return true;
        }
        const maxIndex = maxHeap.values.length <= 3 ? 0 : Math.floor(maxHeap.values.length / 2 - 1);
        for (let i = 0; i <= maxIndex; i++) {
            const value = maxHeap.values[i];
            const leftChildValue = maxHeap.values[2 * i + 1];
            const rightChildValue = maxHeap.values[2 * i + 2];
            if (value < leftChildValue) {
                return false;
            } 
            if (value < rightChildValue) {
                return false;
            }
        }
        return true;
    }

    function initializeHeap() {
        maxBinaryHeap.values = [41, 39, 33, 18, 27, 12];
    }
});