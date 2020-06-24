const UndirectedGraph = require('./UndirectedGraph').UndirectedGraph;

describe("Undirected Graph tests", function() {

    let graph;

    beforeEach(function() {
        graph = new UndirectedGraph();
    });

    it("Add new vertex", function() {
        // given
        const vertex = "A";

        // when
        graph.addVertex(vertex);

        // then
        expect(graph.adjacencyList[vertex]).toEqual([]);
    });

    it("Add duplicate vertex", function() {
        // given
        const vertex = "A";

        // when
        graph.addVertex(vertex);
        graph.addVertex(vertex);

        // then
        expect(graph.adjacencyList[vertex]).toEqual([]);
    });

    it("Add edge", function() {
        // given
        const vertex1 = "A";
        const vertex2 = "B";
        graph.addVertex(vertex1);
        graph.addVertex(vertex2);

        // when
        graph.addEdge(vertex1, vertex2);

        // then
        expect(graph.adjacencyList[vertex1]).toContain(vertex2);
        expect(graph.adjacencyList[vertex2]).toContain(vertex1);
    });

    it("Remove edge", function() {
        // given
        const vertex1 = "A";
        const vertex2 = "B";
        const vertex3 = "C";
        graph.addVertex(vertex1);
        graph.addVertex(vertex2);
        graph.addVertex(vertex3);
        graph.addEdge(vertex1, vertex2);
        graph.addEdge(vertex1, vertex3);
        graph.addEdge(vertex2, vertex3);

        // when
        graph.removeEdge(vertex1, vertex3);

        // then
        expect(graph.adjacencyList[vertex1]).not.toContain(vertex3);
        expect(graph.adjacencyList[vertex3]).not.toContain(vertex1);
        expect(graph.adjacencyList[vertex1]).toContain(vertex2);
        expect(graph.adjacencyList[vertex3]).toContain(vertex2);
    });

    it("Remove vertex", function() {
        // given
        const vertex1 = "A";
        const vertex2 = "B";
        const vertex3 = "C";
        graph.addVertex(vertex1);
        graph.addVertex(vertex2);
        graph.addVertex(vertex3);
        graph.addEdge(vertex1, vertex2);
        graph.addEdge(vertex1, vertex3);
        graph.addEdge(vertex2, vertex3);

        // when
        graph.removeVertex(vertex1);

        // then
        expect(graph.adjacencyList[vertex2]).not.toContain(vertex1);
        expect(graph.adjacencyList[vertex2]).toContain(vertex3);
        expect(graph.adjacencyList[vertex3]).not.toContain(vertex1);
        expect(graph.adjacencyList[vertex3]).toContain(vertex2);
    });

    it("Circular graph traverse (recursive)", function() {
        // given
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");
        graph.addVertex("F");
        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("B", "D");
        graph.addEdge("C", "E");
        graph.addEdge("D", "E");
        graph.addEdge("D", "F");
        graph.addEdge("E", "F");

        // when
        const result = graph.recursiveTraverseDFS("A");

        // then
        expect(result).toEqual(["A", "B", "D", "E", "C", "F"]);
    });

    it("Non-circular graph traverse (recursive)", function() {
        // given
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");
        graph.addVertex("F");
        graph.addEdge("A", "B");
        graph.addEdge("B", "C");
        graph.addEdge("B", "D");
        graph.addEdge("A", "E");
        graph.addEdge("E", "F");

        // when
        const result = graph.recursiveTraverseDFS("A");

        // then
        expect(result).toEqual(["A", "B", "C", "D", "E", "F"]);
    });

    it("Circular graph traverse (iterative)", function() {
        // given
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");
        graph.addVertex("F");
        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("B", "D");
        graph.addEdge("C", "E");
        graph.addEdge("D", "E");
        graph.addEdge("D", "F");
        graph.addEdge("E", "F");

        // when
        const result = graph.iterativeTraverseDFS("A");

        // then
        expect(result).toEqual(["A", "C", "E", "F", "D", "B"]);
    });

    it("Non-circular graph traverse (iterative)", function() {
        // given
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");
        graph.addVertex("F");
        graph.addEdge("A", "B");
        graph.addEdge("B", "C");
        graph.addEdge("B", "D");
        graph.addEdge("A", "E");
        graph.addEdge("E", "F");

        // when
        const result = graph.iterativeTraverseDFS("A");

        // then
        expect(result).toEqual(["A", "E", "F", "B", "D", "C"]);
    });

});