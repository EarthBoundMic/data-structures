var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
  	storage: {},
  	count: 0
  };
  _.extend(someInstance ,stackMethods);
  return someInstance;
};

var stackMethods = {
	push : function (val) {
		this.storage[this.count] = val;
		this.count++;
	},
	pop : function () {
		if (this.count > 0) {
			this.count--;
		}
		var ans = this.storage[this.count];
		delete this.storage[this.count];
		return ans;
	},
	size : function () {
		return this.count;
	}
};

