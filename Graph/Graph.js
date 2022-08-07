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

    DFS_Recursive(vertex) {
        const visited = {};
        const result = [];
        const adjacencyList = this.adjacentList;

        function dfs(vertex) {
            if (!vertex) {
                return null;
            }
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach(element => {
                if (!visited[element]) {
                    return dfs(element);
                }
            });
        }

        dfs(vertex);
        return result;
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

console.log("--------- Graph - DFS_Recursive ------");
graph = new Graph();
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
console.log(graph);

console.log("Graph: Recursive Way", graph.DFS_Recursive("A"));