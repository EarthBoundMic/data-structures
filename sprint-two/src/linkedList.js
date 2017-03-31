var LinkedList = function() { //linkedList = LinkedList()
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {  //aka enqueue
    var newNode = Node(value);
    if(this.head === null) {
      this.head = newNode;
    }
    //this.tail.next = newNode;
    if (this.tail !== null) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function() { 
    var ans = this.head.value;
    this.head = this.head.next;
    return ans;
  };

  list.contains = function(target) { 
    var current = this.head;
    var cond = true;
    while (cond) {
      if (current.value === target) {
        console.log('isTrue');
        return true;
      } else if (current.next === null){
        cond = false;
      } else {
        current = current.next;
      }
    }
    return false;
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
