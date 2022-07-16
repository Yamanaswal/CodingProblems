class Graph {
    constructor() {
        this.adjacentList = {};
    }

    addVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1] || !this.adjacentList[vertex2]) {
            return false;
        }
        this.adjacentList[vertex1].push(vertex2);
        this.adjacentList[vertex2].push(vertex1);
        return true;
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1] || !this.adjacentList[vertex2]) {
            return false;
        }
        this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacentList[vertex2] = this.adjacentList[vertex2].filter(
            v => v !== vertex1
        );
        return true;
    }

    removeVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            return false;
        }
        while (this.adjacentList[vertex].length) {
            const adjacentVertex = this.adjacentList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        //Remove Key From adjacencyList
        delete this.adjacentList[vertex]
        return true;
    }

}



console.log("--------- Graph INITIAL ------");
var graph = new Graph();
console.log(graph);

console.log("--------- Graph Add Vertex ------");
graph.addVertex("Delhi");
graph.addVertex("Mumbai");
graph.addVertex("Dehradun");
graph.addVertex("Noida");
graph.addVertex("Ghaziabad");

console.log(graph);

console.log("--------- Graph Add Edge ------");
graph.addEdge("Dehradun", "Noida");
graph.addEdge("Dehradun", "Mumbai");
graph.addEdge("Ghaziabad", "Delhi");
graph.addEdge("Ghaziabad", "Noida");
console.log(graph);


console.log("--------- Graph Remove Edge ------");
graph.removeEdge("Ghaziabad", "Delhi");
graph.removeEdge("Ghaziabad", "delhi");
graph.removeEdge("X", "Y"); // not exits
console.log(graph);

console.log("--------- Graph Remove Vertex ------");
graph.removeVertex("Delhi");
graph.removeVertex("XYZ");
console.log(graph);