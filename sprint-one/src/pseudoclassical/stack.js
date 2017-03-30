var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Stack.prototype = {
	push: function(val) {
		this.storage[count] = val;
		this.count++;
	},
	pop: function() {
		this.count--;
		var ans = 
	},
	size: function(){
		return this.count;
	}
}


// var stackMethods = new Stack();
// stackMethods.push = function(val) {

// }

// stackMethods.pop = function() {

// }

// stackMethods.size = function() {

// }
