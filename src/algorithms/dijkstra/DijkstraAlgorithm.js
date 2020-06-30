const MinPriorityQueue = require('../../data_structures/heaps/priority_queue/PriorityQueue').PriorityQueue;

module.exports.DijkstraAlgorithm = class DijkstraAlgorithm {
constructor(weightedGraph) {
    this.weightedGraph = weightedGraph;
    this.distances = {};
    this.priorityQueue = new MinPriorityQueue();
    this.previous = {};
}

    findShortestPathBetween(start, end) {
        this.setInitialState(start);
        const visited = [];
        let path = [];
        let currentVertex;

        while (currentVertex = this.priorityQueue.dequeue()) {
            if (currentVertex.val === end) {
                let vertexName = currentVertex.val;
                while (vertexName) {
                    path.push(vertexName);
                    vertexName = this.previous[vertexName];
                }
                path = path.reverse();
                break;
            }
            
            for (const vertex of this.weightedGraph.adjacencyList[currentVertex.val]) {
                if (visited.includes(vertex.node)) {
                    continue;
                }
                const distanceFromVertexToCurrentVertex = this.weightedGraph.adjacencyList[currentVertex.val]
                    .find(v => v.node === vertex.node).weight;
                const shortestDistanceToCurrentVertex = currentVertex.val === start ? 0 : this.distances[currentVertex.val];
                const totalDistance = distanceFromVertexToCurrentVertex + shortestDistanceToCurrentVertex;
                if (totalDistance < this.distances[vertex.node]) {
                    this.distances[vertex.node] = totalDistance;
                    this.previous[vertex.node] = currentVertex.val;
                    this.priorityQueue.enqueue(vertex.node, totalDistance);
                }
            }
            visited.push(currentVertex.val);
        }

        return path;
    }

    setInitialState(start) {
        for (const vertex in this.weightedGraph.adjacencyList) {
            if (vertex === start) {
                this.distances[vertex] = 0;
                this.priorityQueue.enqueue(vertex, 0);
            } else {
                this.distances[vertex] = Infinity;
                this.priorityQueue.enqueue(vertex, Infinity);
            }
            this.previous[vertex] = null;
        }
    }
}