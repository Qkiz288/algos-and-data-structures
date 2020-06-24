module.exports.UndirectedGraph = class UndirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    removeVertex(vertex) {
        const adjacentVertexList = this.adjacencyList[vertex];
        for (const v of adjacentVertexList) {
            this.removeEdge(v, vertex);
        }
        delete this.adjacencyList[vertex]
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
            .filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
            .filter(v => v !== vertex1);
    }
}