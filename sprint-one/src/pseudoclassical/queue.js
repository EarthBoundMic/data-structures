var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.index = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.index] = val;
  this.count++;
  this.index++;
};

Queue.prototype.dequeue = function() {
  var key = Object.keys(this.storage)[0];
  var ans = this.storage[key];
  if(this.count > 0) {
    this.count--;
  }
  delete this.storage[key];
  return ans;
};

Queue.prototype.size = function() {
  return this.count;
};

var newInstance = new Queue;


