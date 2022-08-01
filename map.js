//Our map function will take in two arguments:
//An array to map
//A callback function
//The map function will return a new array based on the results of the callback function.

const map = function(array, callBack) {
  const results = [];
  for(let item of array) {
    results.push(callBack(item));
  }
  return results;
}

module.exports = map;