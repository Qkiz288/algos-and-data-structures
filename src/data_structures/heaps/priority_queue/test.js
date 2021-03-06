const PriorityQueue = require('./PriorityQueue').PriorityQueue;
const Node = require('./Node').Node;

describe("Priority Queue (min) tests", function() {

    let minPriorityQueue;

    beforeEach(function() {
        minPriorityQueue = new PriorityQueue();
    });

    it("Enqueue 1 item into empty queue", function() {
        // given
        const val1 = 1;
        const prio1 = 100;

        // when
        minPriorityQueue.enqueue(val1, prio1);

        // then
        expect(minPriorityQueue.values.length).toBe(1);
        expect(minPriorityQueue.values[0].val).toBe(val1);
        expect(minPriorityQueue.values[0].priority).toBe(prio1);
    });

    it("Enqueue highest priority, should be at the top", function() {
        // given
        const val1 = 100;
        const prio1 = 5;
        const val2 = 50;
        const prio2 = 1;
        const val3 = 300;
        const prio3 = 3;

        // when
        minPriorityQueue.enqueue(val1, prio1);
        minPriorityQueue.enqueue(val2, prio2);
        minPriorityQueue.enqueue(val3, prio3);

        // then
        expect(minPriorityQueue.values.length).toBe(3);
        expect(minPriorityQueue.values[0].priority).toBe(prio2);
        expect(minPriorityQueue.values[0].val).toBe(val2);
        expect(minPriorityQueue.values[1].priority).toBe(prio1);
        expect(minPriorityQueue.values[1].val).toBe(val1);
        expect(minPriorityQueue.values[2].priority).toBe(prio3);
        expect(minPriorityQueue.values[2].val).toBe(val3);
    });

    it("Dequeue from empty", function() {
        // given

        // when
        const result = minPriorityQueue.dequeue();

        // then
        expect(minPriorityQueue.values.length).toBe(0);
        expect(result).toBe(null);
    });

    it("Dequeue all items", function() {
        // given
        initializeQueue();

        // when
        const result1 =  minPriorityQueue.dequeue();
        const result2 =  minPriorityQueue.dequeue();
        const result3 =  minPriorityQueue.dequeue();
        const result4 =  minPriorityQueue.dequeue();
        const result5 =  minPriorityQueue.dequeue();
        const result6 =  minPriorityQueue.dequeue();

        // then
        expect(minPriorityQueue.values.length).toBe(0);
        expect(result1.priority).toBe(12);
        expect(result1.val).toBe(0);
        expect(result2.priority).toBe(18);
        expect(result2.val).toBe(450);
        expect(result3.priority).toBe(27);
        expect(result3.val).toBe(200);
        expect(result4.priority).toBe(33);
        expect(result4.val).toBe(300);
        expect(result5.priority).toBe(39);
        expect(result5.val).toBe(1500);
        expect(result6.priority).toBe(41);
        expect(result6.val).toBe(50);
    });

    function initializeQueue() {
        minPriorityQueue.values[0] = new Node(0, 12);
        minPriorityQueue.values[1] = new Node(200, 27);
        minPriorityQueue.values[2] = new Node(450, 18);
        minPriorityQueue.values[3] = new Node(300, 33);
        minPriorityQueue.values[4] = new Node(1500, 39);
        minPriorityQueue.values[5] = new Node(50, 41);
    }
});