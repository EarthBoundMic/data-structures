var Stack = function() {
  this.count = 0;
  this.storage = {};
};

// Stack.prototype = {
// 	push: function(val) {
// 		this.storage[this.count] = val;
// 		this.count++;
// 	},
// 	pop: function() {
// 		if (this.count > 0) {
// 			this.count--;	
// 		}
// 		var ans = this.storage[this.count];
// 		delete this.storage[this.count];
// 		return ans;
// 	},
// 	size: function(){
// 		return this.count;
// 	}
// }

Stack.prototype.push = function(value) {
	this.storage[this.count] = value;
	this.count++;
}

Stack.prototype.pop = function() {
	if (this.count > 0) {
		this.count--;
	}
	var result = this.storage[this.count];
	delete this.storage[this.count];
	return result;
}

Stack.prototype.size = function() {
	return this.count;
}

var myStack = new Stack();


