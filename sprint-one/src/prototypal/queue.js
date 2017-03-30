var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.count = 0;
  instance.storage = {};
  instance.index = 0;
  return instance;
};

var queueMethods = {
	enqueue: function(val) {
		this.storage[this.index] = val;
		this.count++;
		this.index++;
	},
	dequeue: function() {
		var ans = this.storage[Object.keys(this.storage)[0]];
		if(this.count > 0) {
			this.count--;
		}
		delete this.storage[Object.keys(this.storage)[0]];
		return ans;
	},
	size: function() {
		return this.count;
	}
};


