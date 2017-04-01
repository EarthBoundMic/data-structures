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

var newTree = Tree(5)
newTree.addChild(2)
console.log(newTree)

treeMethods.contains = function(target) {
  //loop through this.children array
  //if find return else recursive loop
  // for (var i = 0; i < this.children.length; i++) {
  //   this.contains(this.children[i]);
  if (this.value === target) {
    return true;
  } 
  if (this.children[0]!== undefined) {
    this.children[0].contains(target);
  } else {
    return false;
  }
  // this.children.contains(target);
  return false;
};

var TreeNode = function(value) {
  this.value = value;
  this.children = [];
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
