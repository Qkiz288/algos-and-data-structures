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
    });

    function initializeHeap() {
        maxBinaryHeap.values = [41, 39, 33, 18, 27, 12];
    }
});