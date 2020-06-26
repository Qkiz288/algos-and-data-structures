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

    // recursive Depth First Search
    recursiveTraverseDFS(vertex, visited = {}) {
        if (!this.adjacencyList[vertex]) {
            return [];
        }
        let result = [];

        result.push(vertex);
        visited[vertex] = true;

        for (const neighbor of this.adjacencyList[vertex]) {
            if (!visited[neighbor]) {
                result = result.concat(this.recursiveTraverseDFS(neighbor, visited));
            }
        }
        return result;
    }

    // iterative Depth First Search
    iterativeTraverseDFS(vertex) {
        const stack = [];
        const result = [];
        const visited = {};
        let currentVertex;

        stack.push(vertex);
        visited[vertex] = true;
        while (stack.length > 0) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }

    // iterative Breadh First Search
    iterativeraverseBFS(vertex) {
        const queue = [vertex];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[vertex] = true;
        while (queue.length > 0) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}