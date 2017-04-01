var BinarySearchTree = function(value) {
	var bTree = Object.create(binaryTreeMethods);
  bTree.value = value;
  bTree.left = null;
  bTree.right = null;
  return bTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(val) {
  if(val < this.value) {
    if(this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if(this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
};

binaryTreeMethods.contains = function(val) {
  if(val === this.value) {
    return true;
  } else if(val < this.value) {
    if(this.left) {
      return !!this.left.contains(val);
    }
  } else if(val > this.value) {
    if(this.right) {
      return !!this.right.contains(val);
    }
  }
};

binaryTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if(this.left) {
    this.left.depthFirstLog(cb);
  }
  if(this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
