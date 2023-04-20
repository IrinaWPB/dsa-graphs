class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let v of vertexArray) {
      this.nodes.add(v)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex)
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let stack = [start]
    let seen = new Set(stack)
    let arr = []
    while (stack.length) {
      let curr = stack.pop()
      arr.push(curr.value)
      for (let node of curr.adjacent) {
        if (!seen.has(node)) {
          stack.push(node)
          seen.add(node)
        }
      }
    }
    return arr
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let queue = [start]
    let seen = new Set(queue)
    let arr = []
    while (queue.length) {
      let curr = queue.shift()
      arr.push(curr.value)
      for (let node of curr.adjacent) {
        if (!seen.has(node)) {
          queue.push(node)
          seen.add(node)
        }
      }
    }
    return arr
  }
}

module.exports = {Graph, Node}