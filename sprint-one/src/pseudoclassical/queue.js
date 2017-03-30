var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.index = 0;
  this.storage = 0;
};

Queue.prototype.enqueue = function(val) {
	this.count++;
};

Queue.prototype.dequeue = function() {
	this.count--;
};

Queue.prototype.size = function() {
	return this.count;
};

var newInstance = new Queue;


