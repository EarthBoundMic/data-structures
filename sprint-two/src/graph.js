

// Instantiate a new graph
var Graph = function() {};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new Graph();
  newNode.node = node;
  newNode.edgeList = [];
  this[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    var delNode = this[node];
    //loop through delNode.edgeList
    //delete edge both sides
    for (var i = 0; i < delNode.edgeList.length; i++) {
      this.removeEdge(node, delNode.edgeList[i]);
    }
    delete this[node];
  }
  return delNode;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var nodeOne = this[fromNode].edgeList;
  for (var i = 0; i < nodeOne.length; i++) {
    if (nodeOne[i] === this[toNode].node) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var nodeOne = this[fromNode].edgeList;
  var nodeTwo = this[toNode].edgeList;
  nodeOne.push(toNode);
  nodeTwo.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var nodeOne = this[fromNode].edgeList;
  var nodeTwo = this[toNode].edgeList;
  for (var i = 0; i < nodeOne.length; i++) {
    if (nodeOne[i] === this[toNode].node) {
      nodeOne.splice(i);
    }
  }
  for (var i = 0; i < nodeTwo.length; i++) {
    if (nodeTwo[i] === this[fromNode].node) {
      nodeTwo.splice(i);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this) {
    if(typeof this[node] === 'object') {
      cb(node);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


