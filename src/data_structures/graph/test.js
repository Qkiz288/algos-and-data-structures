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

});