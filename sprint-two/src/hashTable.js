

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  return this._tupleSearch(k, function(bucket, tuple, i) {
    var holder = tuple[i];
    tuple[1] = v;
    return holder;
  }, function(bucket) {
    bucket.push([k, v]);
  });
};

HashTable.prototype.retrieve = function(k) {
  return this._tupleSearch(k, function(bucket, tuple, i) {
    return tuple[1];
  });
};

HashTable.prototype.remove = function(k) {
  return this._tupleSearch(k, function(bucket, tuple, i) {
    bucket.splice(i, 1);
    return tuple[1];
  });
};

//below if you want to do high order function...Mic

HashTable.prototype._tupleSearch = function(key, cb, ncb) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index) || [];
  this._storage.set(index, bucket);
  for(var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if(tuple[0] === key) {
      return cb.call(this, bucket, tuple, i);
    }
  }
  if(ncb) {
    return ncb.call(this, bucket);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


