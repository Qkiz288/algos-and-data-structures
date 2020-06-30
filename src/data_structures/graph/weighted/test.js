const WeightedGraph = require('./WeightedGraph').WeightedGraph;

describe("Weighted Graph tests", function() {

    let graph;

    beforeEach(function() {
        graph = new WeightedGraph();
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
        const weight = 10;

        // when
        graph.addEdge(vertex1, vertex2, weight);

        // then
        expect(graph.adjacencyList[vertex1]).toContain({node: vertex2, weight});
        expect(graph.adjacencyList[vertex2]).toContain({node: vertex1, weight});
    });

});