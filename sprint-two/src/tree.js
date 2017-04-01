var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; 
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    // console.log('isTrue ' + target)
    return true;
  } 
  if (this.children !== null) {
    var result = false;
    for (var i=0; i<this.children.length; i++) { 
      if (result) {
        break;
      }
      result = this.children[i].contains(target);
    }
    return result;
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
