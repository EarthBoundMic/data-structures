var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {}
  var someInstance = {
  	count: 0
  };
  _.extend(someInstance ,stackMethods);
  return someInstance;
};

var stackMethods = {
	push : function (val) {
		this.count++;
	},
	pop : function () {
		if (this.count > 0) {
			this.count--;
		}
	},
	size : function () {
		return this.count;
	}
};

