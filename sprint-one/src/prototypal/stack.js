var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  newInstance.count = 0;
  newInstance.storage = {};
  return newInstance;
};

var stackMethods = {
	push: function(val) {
		this.count++;
		this.storage[this.count] = val;
	},
	pop: function() {
		var ans = this.storage[this.count]; 
		delete this.storage[this.count];
		if (this.count > 0) {
			this.count--;
		}
		return ans;
	},
	size: function() {
		return this.count;
	}
};




