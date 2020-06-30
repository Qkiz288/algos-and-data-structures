const DijkstraAlgorithm = require('./DijkstraAlgorithm').DijkstraAlgorithm;
const WeightedGraph = require('../../data_structures/graph/weighted/WeightedGraph').WeightedGraph;

describe("Dijkstra algorithm tests", function() {

    let weightedGraph;

    beforeEach(function() {
        weightedGraph = new WeightedGraph();
    })

    it("Find shortest path 1", function() {
        // given
        initializeGraph();
        const expectedPath = ["A", "C", "D", "F", "E"];
        const dijkstra = new DijkstraAlgorithm(weightedGraph);
        
        // when
        const result = dijkstra.findShortestPathBetween("A", "E");

        //then
        expect(result).toEqual(expectedPath);
    }); 

    it("Find shortest path 2", function() {
        // given
        initializeGraph();
        const expectedPath = ["E", "F", "D", "C", "A"];
        const dijkstra = new DijkstraAlgorithm(weightedGraph);
        
        // when
        const result = dijkstra.findShortestPathBetween("E", "A");

        //then
        expect(result).toEqual(expectedPath);
    }); 

    it("Find shortest path 3", function() {
        // given
        initializeGraph();
        const expectedPath = ["C", "A", "B"];
        const dijkstra = new DijkstraAlgorithm(weightedGraph);
        
        // when
        const result = dijkstra.findShortestPathBetween("C", "B");

        //then
        expect(result).toEqual(expectedPath);
    }); 

    it("Find shortest path 4", function() {
        // given
        initializeGraph();
        const expectedPath = ["F", "D", "C", "A"];
        const dijkstra = new DijkstraAlgorithm(weightedGraph);
        
        // when
        const result = dijkstra.findShortestPathBetween("F", "A");

        //then
        expect(result).toEqual(expectedPath);
    }); 

function initializeGraph() {
    weightedGraph.addVertex('A');
    weightedGraph.addVertex('B');
    weightedGraph.addVertex('C');
    weightedGraph.addVertex('D');
    weightedGraph.addVertex('E');
    weightedGraph.addVertex('F');

    weightedGraph.addEdge("A", "B", 4);
    weightedGraph.addEdge("A", "C", 2);
    weightedGraph.addEdge("B", "E", 3);
    weightedGraph.addEdge("C", "D", 2);
    weightedGraph.addEdge("C", "F", 4);
    weightedGraph.addEdge("D", "E", 3);
    weightedGraph.addEdge("D", "F", 1);
    weightedGraph.addEdge("E", "F", 1);
}

});