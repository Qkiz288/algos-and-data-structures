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

});