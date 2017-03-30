var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
  	count: 0,
	index: 0,
	storage: {},
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
	
	enqueue: function(val) {
		this.count++;
		this.index++;
		this.storage[this.index] = val;
	},
	dequeue: function() {
		if (this.count > 0) {
			this.count--;
		}
		var delKey = [Object.keys(this.storage)[0]];
		var ans = this.storage[delKey]
		delete this.storage[delKey];
		return ans;

	},
	size: function() {
		return this.count;
	}
};


