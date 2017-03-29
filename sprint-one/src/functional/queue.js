var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var index = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    //store count in someInstance to keep count
    someInstance[index] = index;
    count++;
    index++;
  };

  someInstance.dequeue = function() {
    if (count>0) {
      count--;
    }
    var lowest=Infinity;
    for (var key in someInstance) {
      if (someInstance[key] < lowest) {
        lowest = someInstance[key];
      }
    }
    var ans = storage[lowest];
    delete storage[lowest];
    delete someInstance[lowest];
    return ans;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
