var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //call Node(value)
    //if (list.tail !== null) list.tail = node.value
    //list.tail = node.value
    //leave the node.next as null
    if (this.tail !== null) {
      this.list = Object.create(Node(value));
      this.list.next = 
      
    }
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
