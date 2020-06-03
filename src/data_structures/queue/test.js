const Queue = require('./Queue').Queue;

describe("Queue tests", function() {

    let queue;

    beforeEach(function() {
        queue = new Queue();
    });

    it("Enqueue 1 item", function() {
        // given
        const value1 = "A";

        // when
        queue.enqueue(value1);

        // then
        expect(queue.head.val).toBe(value1);
        expect(queue.tail.val).toBe(value1);
        expect(queue.length).toBe(1);
        expect(queue.head).toEqual(queue.tail);
        expect(queue.head.next).toBe(null);
    });

    it("Enqueue 2 items", function() {
        // given
        const value1 = "A";
        const value2 = "B";

        // when
        queue.enqueue(value1);
        queue.enqueue(value2);

        // then
        expect(queue.head.val).toBe(value1);
        expect(queue.tail.val).toBe(value2);
        expect(queue.length).toBe(2);
        expect(queue.head.next).toEqual(queue.tail);
        expect(queue.tail.next).toBe(null);
    });

    it("Dequeue from empty", function() {
        // given

        // when
        const item = queue.dequeue();

        // then
        expect(queue.length).toBe(0);
        expect(item).toBe(null);
        expect(queue.head).toBe(null);
        expect(queue.tail).toBe(null);
    });

    it("Dequeue until empty", function() {
        // given
        const numOfItems = 9;
        initialize(queue, numOfItems);

        // when - then
        for (let i = 0; i < numOfItems; i++) {
            const item = queue.dequeue();
            expect(item).toBe(i);
            expect(queue.length).toBe(numOfItems - 1 - i);
        }
    });

    it("Dequeue until 1 item", function() {
        // given
        const numOfItems = 2;
        initialize(queue, numOfItems);
        const expectedItem = queue.head;

        // when
        const item = queue.dequeue();

        // then
        expect(queue.length).toBe(1);
        expect(item).toBe(expectedItem.val);
        expect(queue.head).toEqual(queue.tail);
    });

});

function initialize(queue, numOfItems) {
    for (let i = 0; i < numOfItems; i++) {
        queue.enqueue(i);
    }
}